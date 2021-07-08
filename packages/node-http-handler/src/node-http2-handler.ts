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
   * Disables sharing ClientHttp2Session instance between different HTTP/2 requests
   * sent to the same URL. When set to true, it will create a new session instance for
   * each request to a URL. **Default:** false.
   * https://nodejs.org/api/http2.html#http2_class_clienthttp2session
   */
  disableSessionCache?: boolean;
}

export class NodeHttp2Handler implements HttpHandler {
  private readonly requestTimeout?: number;
  private readonly sessionTimeout?: number;
  private readonly disableSessionCache?: boolean;

  public readonly metadata = { handlerProtocol: "h2" };
  private connections: ClientHttp2Session[];
  private connectionPool: Map<string, ClientHttp2Session>;

  constructor({ requestTimeout, sessionTimeout, disableSessionCache }: NodeHttp2HandlerOptions = {}) {
    this.requestTimeout = requestTimeout;
    this.sessionTimeout = sessionTimeout;
    this.disableSessionCache = disableSessionCache;
    this.connections = [];
    this.connectionPool = new Map<string, ClientHttp2Session>();
  }

  destroy(): void {
    this.connections.forEach(this.destroySession);
    this.connectionPool.clear();
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
      const session = this.disableSessionCache ? this.getSession(authority) : this.getSessionFromPool(authority);

      const reject = (err: Error) => {
        if (this.disableSessionCache) {
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
      req.on("frameError", reject);
      req.on("error", reject);
      req.on("goaway", reject);
      req.on("aborted", reject);

      // The HTTP/2 error code used when closing the stream can be retrieved using the
      // http2stream.rstCode property. If the code is any value other than NGHTTP2_NO_ERROR (0),
      // an 'error' event will have also been emitted.
      req.on("close", () => {
        if (!fulfilled) {
          reject(new Error("Unexpected error: http2 request did not get a response"));
        }
      });
      writeRequestBody(req, request);
    });
  }

  /**
   * Returns a new session for the given URL.
   * @param authority The URL to create a session for.
   * @returns A new session for the given URL.
   */
  private getSession(authority: string): ClientHttp2Session {
    const newSession = connect(authority);
    const destroySessionCb = () => {
      this.destroySession(newSession);
    };
    newSession.on("goaway", destroySessionCb);
    newSession.on("error", destroySessionCb);
    newSession.on("frameError", destroySessionCb);

    const sessionTimeout = this.sessionTimeout;
    if (sessionTimeout) {
      newSession.setTimeout(sessionTimeout, () => {
        newSession.close();
      });
    }

    this.connections.push(newSession);
    return newSession;
  }

  /**
   * Returns a session for the given URL. If the session is not cached, it will be created.
   * @param authority The URL to create a session for.
   * @returns A session for the given URL.
   */
  private getSessionFromPool(authority: string): ClientHttp2Session {
    const connectionPool = this.connectionPool;
    const existingSession = connectionPool.get(authority);
    if (existingSession) return existingSession;

    const newSession = this.getSession(authority);
    connectionPool.set(authority, newSession);
    const destroySessionCb = () => {
      this.deleteSessionFromPool(authority, newSession);
    };
    newSession.on("goaway", destroySessionCb);
    newSession.on("error", destroySessionCb);
    newSession.on("frameError", destroySessionCb);

    const sessionTimeout = this.sessionTimeout;
    if (sessionTimeout) {
      newSession.setTimeout(sessionTimeout, () => {
        if (connectionPool.get(authority) === newSession) {
          connectionPool.delete(authority);
        }
      });
    }
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
  private deleteSessionFromPool(authority: string, session: ClientHttp2Session): void {
    if (this.connectionPool.get(authority) !== session) {
      // If the session is not in the pool, it has already been deleted.
      return;
    }
    this.connectionPool.delete(authority);
  }
}
