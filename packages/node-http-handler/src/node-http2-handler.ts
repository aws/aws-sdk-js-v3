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
}

export class NodeHttp2Handler implements HttpHandler {
  private readonly requestTimeout?: number;
  private readonly sessionTimeout?: number;
  private readonly connectionPool: Map<string, ClientHttp2Session>;
  public readonly metadata = { handlerProtocol: "h2" };

  constructor({ requestTimeout, sessionTimeout }: NodeHttp2HandlerOptions = {}) {
    this.requestTimeout = requestTimeout;
    this.sessionTimeout = sessionTimeout;
    this.connectionPool = new Map<string, ClientHttp2Session>();
  }

  destroy(): void {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const [_, http2Session] of this.connectionPool) {
      http2Session.destroy();
    }
    this.connectionPool.clear();
  }

  handle(request: HttpRequest, { abortSignal }: HttpHandlerOptions = {}): Promise<{ response: HttpResponse }> {
    return new Promise((resolve, rejectOriginal) => {
      // It's redundant to track fulfilled because promises use the first resolution/rejection
      // but avoids generating unnecessary stack traces in the "close" event handler.
      let fulfilled = false;
      const reject = (err: Error) => {
        fulfilled = true;
        rejectOriginal(err);
      };
      // if the request was already aborted, prevent doing extra work
      if (abortSignal?.aborted) {
        const abortError = new Error("Request aborted");
        abortError.name = "AbortError";
        reject(abortError);
        return;
      }

      const { hostname, method, port, protocol, path, query } = request;
      const queryString = buildQueryString(query || {});

      // create the http2 request
      const req = this.getSession(`${protocol}//${hostname}${port ? `:${port}` : ""}`).request({
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

  private getSession(authority: string): ClientHttp2Session {
    const connectionPool = this.connectionPool;
    const existingSession = connectionPool.get(authority);
    if (existingSession) return existingSession;

    const newSession = connect(authority);
    connectionPool.set(authority, newSession);
    const destroySessionCb = () => {
      this.destroySession(authority, newSession);
    };
    newSession.on("goaway", destroySessionCb);
    newSession.on("error", destroySessionCb);
    newSession.on("frameError", destroySessionCb);

    const sessionTimeout = this.sessionTimeout;
    if (sessionTimeout) {
      newSession.setTimeout(sessionTimeout, () => {
        if (connectionPool.get(authority) === newSession) {
          newSession.close();
          connectionPool.delete(authority);
        }
      });
    }
    return newSession;
  }

  /**
   * Destroy a session immediately and remove it from the http2 pool.
   *
   * This check ensures that the session is only closed once
   * and that an event on one session does not close a different session.
   */
  private destroySession(authority: string, session: ClientHttp2Session): void {
    if (this.connectionPool.get(authority) !== session) {
      // Already closed?
      return;
    }
    this.connectionPool.delete(authority);
    session.removeAllListeners("goaway");
    session.removeAllListeners("error");
    session.removeAllListeners("frameError");
    if (!session.destroyed) {
      session.destroy();
    }
  }
}
