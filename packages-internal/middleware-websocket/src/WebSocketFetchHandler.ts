import { formatUrl } from "@aws-sdk/util-format-url";
import { iterableToReadableStream, readableStreamtoIterable } from "@smithy/eventstream-serde-browser";
import { FetchHttpHandler } from "@smithy/fetch-http-handler";
import type { HttpRequest } from "@smithy/protocol-http";
import { HttpResponse } from "@smithy/protocol-http";
import type { Logger, Provider, RequestHandler, RequestHandlerMetadata } from "@smithy/types";
import { fromBase64 } from "@smithy/util-base64";
import { fromUtf8 } from "@smithy/util-utf8";

import { isWebSocketRequest } from "./utils";

const DEFAULT_WS_CONNECTION_TIMEOUT_MS = 3000;

export interface WebSocketFetchHandlerOptions {
  /**
   * The maximum time in milliseconds that the connection phase of a request
   * may take before the connection attempt is abandoned.
   */
  connectionTimeout?: number;

  /**
   * Optional logger.
   */
  logger?: Logger;
}

/**
 * Base handler for websocket requests and HTTP request. By default, the request input and output
 * body will be in a ReadableStream, because of interface consistency among middleware.
 * If ReadableStream is not available, like in React-Native, the response body
 * will be an async iterable.
 */
export class WebSocketFetchHandler {
  public readonly metadata: RequestHandlerMetadata = {
    handlerProtocol: "websocket/h1.1",
  };
  private config: WebSocketFetchHandlerOptions = {};
  private configPromise: Promise<WebSocketFetchHandlerOptions>;
  private readonly httpHandler: RequestHandler<any, any>;
  private readonly sockets: Record<string, WebSocket[]> = {};

  /**
   * @returns the input if it is an HttpHandler of any class,
   * or instantiates a new instance of this handler.
   */
  public static create(
    instanceOrOptions?:
      | WebSocketFetchHandler
      | WebSocketFetchHandlerOptions
      | Provider<WebSocketFetchHandlerOptions | void>,
    httpHandler: RequestHandler<any, any> = new FetchHttpHandler()
  ) {
    if (typeof (instanceOrOptions as any)?.handle === "function") {
      // is already an instance of HttpHandler.
      return instanceOrOptions as WebSocketFetchHandler;
    }
    // input is ctor options or undefined.
    return new WebSocketFetchHandler(
      instanceOrOptions as undefined | WebSocketFetchHandlerOptions | Provider<WebSocketFetchHandlerOptions>,
      httpHandler
    );
  }

  public constructor(
    options?: WebSocketFetchHandlerOptions | Provider<WebSocketFetchHandlerOptions>,
    httpHandler: RequestHandler<any, any> = new FetchHttpHandler()
  ) {
    this.httpHandler = httpHandler;
    const setConfig = (opts: WebSocketFetchHandlerOptions | undefined) => {
      this.config = {
        ...(opts ?? {}),
      };
      return this.config;
    };
    if (typeof options === "function") {
      this.config = {};
      this.configPromise = options().then((opts) => {
        return setConfig(opts);
      });
    } else {
      this.configPromise = Promise.resolve(setConfig(options));
    }
  }

  /**
   * Destroys the WebSocketHandler.
   * Closes all sockets from the socket pool.
   */
  public destroy(): void {
    for (const [key, sockets] of Object.entries(this.sockets)) {
      for (const socket of sockets) {
        socket.close(1000, `Socket closed through destroy() call`);
      }
      delete this.sockets[key];
    }
  }

  public async handle(request: HttpRequest): Promise<{ response: HttpResponse }> {
    this.config = await this.configPromise;
    const { logger } = this.config;

    if (!isWebSocketRequest(request)) {
      logger?.debug?.(`@aws-sdk - ws fetching ${request.protocol}${request.hostname}${request.path}`);
      return this.httpHandler.handle(request);
    }

    const url = formatUrl(request);
    logger?.debug?.(`@aws-sdk - ws connecting ${url.split("?")[0]}`);
    const socket: WebSocket = new WebSocket(url);

    // Add socket to sockets pool
    if (!this.sockets[url]) {
      this.sockets[url] = [];
    }
    this.sockets[url].push(socket);

    socket.binaryType = "arraybuffer";
    const { connectionTimeout = DEFAULT_WS_CONNECTION_TIMEOUT_MS } = this.config;
    await this.waitForReady(socket, connectionTimeout);
    const { body } = request;
    const bodyStream = getIterator(body);
    const asyncIterable = this.connect(socket, bodyStream);
    const outputPayload = toReadableStream(asyncIterable);

    return {
      /**
       * This is synthesized here because the event stream spec still
       * expects an HTTP response.
       *
       * We do not have the ability to read headers from the initial connection,
       * so initial-response type messages are not supported when in websocket mode.
       */
      response: new HttpResponse({
        statusCode: 200,
        body: outputPayload,
      }),
    };
  }

  public updateHttpClientConfig(
    key: keyof WebSocketFetchHandlerOptions,
    value: WebSocketFetchHandlerOptions[typeof key]
  ): void {
    this.configPromise = this.configPromise.then((config) => {
      (config as Record<typeof key, typeof value>)[key] = value;
      return config;
    });
  }

  public httpHandlerConfigs(): WebSocketFetchHandlerOptions {
    return this.config ?? {};
  }

  /**
   * Removes all closing/closed sockets from the socket pool for URL.
   */
  private removeNotUsableSockets(url: string): void {
    this.sockets[url] = (this.sockets[url] ?? []).filter(
      (socket) => !([WebSocket.CLOSING, WebSocket.CLOSED] as number[]).includes(socket.readyState)
    );
  }

  private waitForReady(socket: WebSocket, connectionTimeout: number): Promise<void> {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        this.removeNotUsableSockets(socket.url);
        reject({
          $metadata: {
            httpStatusCode: 500,
            /**
             * Imitating a server response code is misleading, but
             * I left it there for backwards compatibility.
             *
             * I have added a marker below to indicate the 500 is not from a server.
             */
            websocketSynthetic500Error: true,
          },
        });
      }, connectionTimeout);

      socket.onopen = () => {
        clearTimeout(timeout);
        resolve();
      };
    });
  }

  private connect(socket: WebSocket, data: AsyncIterable<Uint8Array>): AsyncIterable<Uint8Array> {
    const messageQueue: Array<{ done: boolean; value?: Uint8Array; error?: unknown }> = [];
    let pendingResolve: ((result: IteratorResult<Uint8Array>) => void) | null = null;
    let pendingReject: ((err: unknown) => void) | null = null;

    /**
     * Loads the next item into the queue.
     * If the consumer is waiting, give the item to them directly.
     */
    const push = (item: { done: boolean; value?: Uint8Array; error?: unknown }) => {
      if (pendingResolve) {
        if (item.error) {
          pendingReject!(item.error);
        } else {
          pendingResolve({ done: item.done, value: item.value! });
        }
        pendingResolve = null;
        pendingReject = null;
      } else {
        messageQueue.push(item);
      }
    };

    /**
     * The expected data type is ArrayBuffer because
     * of having set binaryType on the socket.
     */
    socket.onmessage = (event: { data: ArrayBuffer }) => {
      const { data } = event;

      if (typeof data === "string") {
        // This branch is only expected in testing.
        push({
          done: false,
          value: fromBase64(data),
        });
      } else {
        push({
          done: false,
          value: new Uint8Array(data as ArrayBuffer),
        });
      }
    };

    socket.onerror = (event) => {
      socket.close();
      push({ done: true, error: event });
    };

    socket.onclose = () => {
      this.removeNotUsableSockets(socket.url);
      push({ done: true });
    };

    const outputStream: AsyncIterable<Uint8Array> = {
      [Symbol.asyncIterator]: () => ({
        /**
         * This will supply the next enqueued item to the iteration
         * or wait for the next item to arrive.
         */
        async next() {
          if (messageQueue.length > 0) {
            const item = messageQueue.shift()!;
            if (item.error) {
              throw item.error;
            }
            return { done: item.done, value: item.value! };
          }
          return new Promise((resolve, reject) => {
            pendingResolve = resolve;
            pendingReject = reject;
          });
        },
      }),
    };

    const send = async (): Promise<void> => {
      try {
        for await (const chunk of data) {
          if (socket.readyState >= WebSocket.CLOSING) {
            break;
          } else {
            socket.send(chunk);
          }
        }
      } catch (err) {
        // We don't throw the error here because the send()'s returned
        // would already be settled by the time sending chunk throws error.
        // Instead, the notify the output stream to throw if there's
        // exceptions
        push({
          done: true,
          error: err,
        });
      } finally {
        // WS status code: https://tools.ietf.org/html/rfc6455#section-7.4
        socket.close(1000);
      }
    };

    send();

    return outputStream;
  }
}

/**
 * Transfer payload data to an AsyncIterable.
 * When the ReadableStream API is available in the runtime(e.g. browser), and
 * the request body is ReadableStream, so we need to transfer it to AsyncIterable
 * to make the stream consumable by WebSocket.
 */
const getIterator = (stream: any): AsyncIterable<any> => {
  // Noop if stream is already an async iterable
  if (stream[Symbol.asyncIterator]) {
    return stream;
  }

  if (isReadableStream(stream)) {
    // If stream is a ReadableStream, transfer the ReadableStream to async iterable.
    return readableStreamtoIterable(stream);
  }

  // For other types, just wrap them with an async iterable.
  return {
    [Symbol.asyncIterator]: async function* () {
      yield stream;
    },
  };
};

/**
 * Convert async iterable to a ReadableStream when ReadableStream API
 * is available(browsers). Otherwise, leave as it is(ReactNative).
 */
const toReadableStream = <T>(asyncIterable: AsyncIterable<T>) =>
  typeof ReadableStream === "function" ? iterableToReadableStream(asyncIterable) : asyncIterable;

const isReadableStream = (payload: any): payload is ReadableStream =>
  typeof ReadableStream === "function" && payload instanceof ReadableStream;
