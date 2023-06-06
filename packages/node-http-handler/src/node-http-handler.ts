import { HttpHandler, HttpRequest, HttpResponse } from "@aws-sdk/protocol-http";
import { buildQueryString } from "@aws-sdk/querystring-builder";
import { HttpHandlerOptions, Provider } from "@aws-sdk/types";
import { Agent as hAgent, request as hRequest } from "http";
import { Agent as hsAgent, request as hsRequest, RequestOptions } from "https";

import { NODEJS_TIMEOUT_ERROR_CODES } from "./constants";
import { getTransformedHeaders } from "./get-transformed-headers";
import { setConnectionTimeout } from "./set-connection-timeout";
import { setSocketKeepAlive } from "./set-socket-keep-alive";
import { setSocketTimeout } from "./set-socket-timeout";
import { writeRequestBody } from "./write-request-body";

/**
 * Represents the http options that can be passed to a node http client.
 */
export interface NodeHttpHandlerOptions {
  /**
   * The maximum time in milliseconds that the connection phase of a request
   * may take before the connection attempt is abandoned.
   *
   * Defaults to 0, which disables the timeout.
   */
  connectionTimeout?: number;

  /**
   * The number of milliseconds a request can take before automatically being terminated.
   * Defaults to 0, which disables the timeout.
   */
  requestTimeout?: number;

  /**
   * @deprecated Use {@link requestTimeout}
   *
   * The maximum time in milliseconds that a socket may remain idle before it
   * is closed.
   */
  socketTimeout?: number;

  httpAgent?: hAgent;
  httpsAgent?: hsAgent;
}

interface ResolvedNodeHttpHandlerConfig {
  requestTimeout?: number;
  connectionTimeout?: number;
  httpAgent: hAgent;
  httpsAgent: hsAgent;
}

export const DEFAULT_REQUEST_TIMEOUT = 0;

export class NodeHttpHandler implements HttpHandler {
  private config?: ResolvedNodeHttpHandlerConfig;
  private readonly configProvider: Promise<ResolvedNodeHttpHandlerConfig>;

  // Node http handler is hard-coded to http/1.1: https://github.com/nodejs/node/blob/ff5664b83b89c55e4ab5d5f60068fb457f1f5872/lib/_http_server.js#L286
  public readonly metadata = { handlerProtocol: "http/1.1" };

  constructor(options?: NodeHttpHandlerOptions | Provider<NodeHttpHandlerOptions | void>) {
    this.configProvider = new Promise((resolve, reject) => {
      if (typeof options === "function") {
        options()
          .then((_options) => {
            resolve(this.resolveDefaultConfig(_options));
          })
          .catch(reject);
      } else {
        resolve(this.resolveDefaultConfig(options));
      }
    });
  }

  private resolveDefaultConfig(options?: NodeHttpHandlerOptions | void): ResolvedNodeHttpHandlerConfig {
    const { requestTimeout, connectionTimeout, socketTimeout, httpAgent, httpsAgent } = options || {};
    const keepAlive = true;
    const maxSockets = 50;

    return {
      connectionTimeout,
      requestTimeout: requestTimeout ?? socketTimeout,
      httpAgent: httpAgent || new hAgent({ keepAlive, maxSockets }),
      httpsAgent: httpsAgent || new hsAgent({ keepAlive, maxSockets }),
    };
  }

  destroy(): void {
    this.config?.httpAgent?.destroy();
    this.config?.httpsAgent?.destroy();
  }

  async handle(request: HttpRequest, { abortSignal }: HttpHandlerOptions = {}): Promise<{ response: HttpResponse }> {
    if (!this.config) {
      this.config = await this.configProvider;
    }
    return new Promise((_resolve, _reject) => {
      let writeRequestBodyPromise: Promise<void> | undefined = undefined;
      const resolve = async (arg: { response: HttpResponse }) => {
        await writeRequestBodyPromise;
        _resolve(arg);
      };
      const reject = async (arg: unknown) => {
        await writeRequestBodyPromise;
        _reject(arg);
      };

      if (!this.config) {
        throw new Error("Node HTTP request handler config is not resolved");
      }

      // if the request was already aborted, prevent doing extra work
      if (abortSignal?.aborted) {
        const abortError = new Error("Request aborted");
        abortError.name = "AbortError";
        reject(abortError);
        return;
      }

      // determine which http(s) client to use
      const isSSL = request.protocol === "https:";
      const queryString = buildQueryString(request.query || {});
      const nodeHttpsOptions: RequestOptions = {
        headers: request.headers,
        host: request.hostname,
        method: request.method,
        path: queryString ? `${request.path}?${queryString}` : request.path,
        port: request.port,
        agent: isSSL ? this.config.httpsAgent : this.config.httpAgent,
      };

      // create the http request
      const requestFunc = isSSL ? hsRequest : hRequest;

      const req = requestFunc(nodeHttpsOptions, (res) => {
        const httpResponse = new HttpResponse({
          statusCode: res.statusCode || -1,
          reason: res.statusMessage,
          headers: getTransformedHeaders(res.headers),
          body: res,
        });
        resolve({ response: httpResponse });
      });

      req.on("error", (err: Error) => {
        if (NODEJS_TIMEOUT_ERROR_CODES.includes((err as any).code)) {
          reject(Object.assign(err, { name: "TimeoutError" }));
        } else {
          reject(err);
        }
      });

      // wire-up any timeout logic
      setConnectionTimeout(req, reject, this.config.connectionTimeout);
      setSocketTimeout(req, reject, this.config.requestTimeout);

      // wire-up abort logic
      if (abortSignal) {
        abortSignal.onabort = () => {
          // ensure request is destroyed
          req.abort();
          const abortError = new Error("Request aborted");
          abortError.name = "AbortError";
          reject(abortError);
        };
      }

      // Workaround for bug report in Node.js https://github.com/nodejs/node/issues/47137
      const httpAgent = nodeHttpsOptions.agent;
      if (typeof httpAgent === "object" && "keepAlive" in httpAgent) {
        setSocketKeepAlive(req, {
          // @ts-expect-error keepAlive is not public on httpAgent.
          keepAlive: (httpAgent as hAgent).keepAlive,
          // @ts-expect-error keepAliveMsecs is not public on httpAgent.
          keepAliveMsecs: (httpAgent as hAgent).keepAliveMsecs,
        });
      }

      writeRequestBodyPromise = writeRequestBody(req, request, this.config.requestTimeout);
    });
  }
}
