import { HttpHandler, HttpRequest, HttpResponse } from "@aws-sdk/protocol-http";
import { buildQueryString } from "@aws-sdk/querystring-builder";
import { HttpHandlerOptions } from "@aws-sdk/types";
import { ClientHttp2Session, connect, constants } from "http2";

import { getTransformedHeaders } from "./get-transformed-headers";
import { writeRequestBody } from "./write-request-body";

/**
 * Represents the http2 options that can be passed to a node http2 client.
 */
export interface NodeHttp2HandlerOptions {
  /**
   * The maximum time in milliseconds that a stream may remain idle before it
   * is closed.
   */
  requestTimeout?: number;

  /**
   * The maximum time in milliseconds that a session or socket may remain idle
   * before it is closed.
   * https://nodejs.org/docs/latest-v12.x/api/http2.html#http2_http2session_and_sockets
   */
  sessionTimeout?: number;

  /**
   * Disables processing concurrent streams on a ClientHttp2Session instance. When set
   * to true, the handler will create a new session instance for each request to a URL.
   * **Default:** false.
   * https://nodejs.org/api/http2.html#http2_class_clienthttp2session
   */
  disableConcurrentStreams?: boolean;
}

export class NodeHttp2Handler implements HttpHandler {
  private readonly requestTimeout?: number;
  private readonly sessionTimeout?: number;
  private readonly disableConcurrentStreams?: boolean;

  public readonly metadata = { handlerProtocol: "h2" };
  private sessionCache: Map<string, ClientHttp2Session[]>;

  constructor({ requestTimeout, sessionTimeout, disableConcurrentStreams }: NodeHttp2HandlerOptions = {}) {
    this.requestTimeout = requestTimeout;
    this.sessionTimeout = sessionTimeout;
    this.disableConcurrentStreams = disableConcurrentStreams;
    this.sessionCache = new Map<string, ClientHttp2Session[]>();
  }

  destroy(): void {
    for (const sessions of this.sessionCache.values()) {
      sessions.forEach((session) => this.destroySession(session));
    }
    this.sessionCache.clear();
  }

  handle(request: HttpRequest, { abortSignal }: HttpHandlerOptions = {}): Promise<{ response: HttpResponse }> {
    return new Promise((resolve, rejectOriginal) => {
      // It's redundant to track fulfilled because promises use the first resolution/rejection
      // but avoids generating unnecessary stack traces in the "close" event handler.
      let fulfilled = false;

      // if the request was already aborted, prevent doing extra work
      if (abortSignal?.aborted) {
        fulfilled = true;
        const abortError = new Error("Request aborted");
        abortError.name = "AbortError";
        rejectOriginal(abortError);
        return;
      }

      const { hostname, method, port, protocol, path, query } = request;
      const authority = `${protocol}//${hostname}${port ? `:${port}` : ""}`;
      const session = this.getSession(authority, this.disableConcurrentStreams || false);

      const reject = (err: Error) => {
        if (this.disableConcurrentStreams) {
          this.destroySession(session);
        }
        fulfilled = true;
        rejectOriginal(err);
      };

      const queryString = buildQueryString(query || {});
      // create the http2 request
      const req = session.request({
        ...request.headers,
        [constants.HTTP2_HEADER_PATH]: queryString ? `${path}?${queryString}` : path,
        [constants.HTTP2_HEADER_METHOD]: method,
      });

      req.on("response", (headers) => {
        const httpResponse = new HttpResponse({
          statusCode: headers[":status"] || -1,
          headers: getTransformedHeaders(headers),
          body: req,
        });
        fulfilled = true;
        resolve({ response: httpResponse });
        if (this.disableConcurrentStreams) {
          // Gracefully closes the Http2Session, allowing any existing streams to complete
          // on their own and preventing new Http2Stream instances from being created.
          session.close();
          this.deleteSessionFromCache(authority, session);
        }
      });

      const requestTimeout = this.requestTimeout;
      if (requestTimeout) {
        req.setTimeout(requestTimeout, () => {
          req.close();
          const timeoutError = new Error(`Stream timed out because of no activity for ${requestTimeout} ms`);
          timeoutError.name = "TimeoutError";
          reject(timeoutError);
        });
      }

      if (abortSignal) {
        abortSignal.onabort = () => {
          req.close();
          const abortError = new Error("Request aborted");
          abortError.name = "AbortError";
          reject(abortError);
        };
      }

      // Set up handlers for errors
      req.on("frameError", (type: number, code: number, id: number) => {
        reject(new Error(`Frame type id ${type} in stream id ${id} has failed with code ${code}.`));
      });
      req.on("error", reject);
      req.on("aborted", () => {
        reject(new Error(`HTTP/2 stream is abnormally aborted in mid-communication with result code ${req.rstCode}.`));
      });

      // The HTTP/2 error code used when closing the stream can be retrieved using the
      // http2stream.rstCode property. If the code is any value other than NGHTTP2_NO_ERROR (0),
      // an 'error' event will have also been emitted.
      req.on("close", () => {
        if (this.disableConcurrentStreams) {
          session.destroy();
        }
        if (!fulfilled) {
          reject(new Error("Unexpected error: http2 request did not get a response"));
        }
      });

      writeRequestBody(req, request);
    });
  }

  /**
   * Returns a session for the given URL.
   *
   * @param authority The URL to create a session for.
   * @param disableConcurrentStreams If true, a new session will be created for each request.
   * @returns A session for the given URL.
   */
  private getSession(authority: string, disableConcurrentStreams: boolean): ClientHttp2Session {
    const sessionCache = this.sessionCache;
    const existingSessions = sessionCache.get(authority) || [];

    // If concurrent streams are not disabled, we can use the existing session.
    if (existingSessions.length > 0 && !disableConcurrentStreams) return existingSessions[0];

    const newSession = connect(authority);
    const destroySessionCb = () => {
      this.destroySession(newSession);
      this.deleteSessionFromCache(authority, newSession);
    };
    newSession.on("goaway", destroySessionCb);
    newSession.on("error", destroySessionCb);
    newSession.on("frameError", destroySessionCb);

    const sessionTimeout = this.sessionTimeout;
    if (sessionTimeout) {
      newSession.setTimeout(sessionTimeout, destroySessionCb);
    }

    existingSessions.push(newSession);
    sessionCache.set(authority, existingSessions);

    return newSession;
  }

  /**
   * Destroys a session.
   * @param session The session to destroy.
   */
  private destroySession(session: ClientHttp2Session): void {
    if (!session.destroyed) {
      session.destroy();
    }
  }

  /**
   * Delete a session from the connection pool.
   * @param authority The authority of the session to delete.
   * @param session The session to delete.
   */
  private deleteSessionFromCache(authority: string, session: ClientHttp2Session): void {
    const existingSessions = this.sessionCache.get(authority) || [];
    if (!existingSessions.includes(session)) {
      // If the session is not in the cache, it has already been deleted.
      return;
    }
    this.sessionCache.set(
      authority,
      existingSessions.filter((s) => s !== session)
    );
  }
}
