import { iterableToReadableStream, readableStreamtoIterable } from "@aws-sdk/eventstream-serde-browser";
import { HttpHandler, HttpRequest, HttpResponse } from "@aws-sdk/protocol-http";
import { RequestHandlerMetadata } from "@aws-sdk/types";
import { formatUrl } from "@aws-sdk/util-format-url";

export interface WebSocketHandlerOptions {
  /**
   * The maximum time in milliseconds that the connection phase of a request
   * may take before the connection attempt is abandoned.
   */
  connectionTimeout?: number;
}

/**
 * Base handler for websocket requests. By default, the request input and output
 * body will be in a ReadableStream, because of interface consistency among middleware.
 * If ReadableStream is not available, like in React-Native, the response body
 * will be an async iterable.
 */
export class WebSocketHandler implements HttpHandler {
  public readonly metadata: RequestHandlerMetadata = {
    handlerProtocol: "websocket",
  };
  private readonly connectionTimeout: number;
  constructor({ connectionTimeout }: WebSocketHandlerOptions = {}) {
    this.connectionTimeout = connectionTimeout || 2000;
  }

  destroy(): void {}

  async handle(request: HttpRequest): Promise<{ response: HttpResponse }> {
    const url = formatUrl(request);
    const socket: WebSocket = new WebSocket(url);
    socket.binaryType = "arraybuffer";
    await waitForReady(socket, this.connectionTimeout);
    const { body } = request;
    const bodyStream = getIterator(body);
    const asyncIterable = connect(socket, bodyStream);
    const outputPayload = toReadableStream(asyncIterable);
    return {
      response: new HttpResponse({
        statusCode: 200, // indicates connection success
        body: outputPayload,
      }),
    };
  }
}

const waitForReady = (socket: WebSocket, connectionTimeout: number): Promise<void> =>
  new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      reject({
        $metadata: {
          httpStatusCode: 500,
        },
      });
    }, connectionTimeout);
    socket.onopen = () => {
      clearTimeout(timeout);
      resolve();
    };
  });

const connect = (socket: WebSocket, data: AsyncIterable<Uint8Array>): AsyncIterable<Uint8Array> => {
  // To notify output stream any error thrown after response
  // is returned while data keeps streaming.
  let streamError: Error | undefined = undefined;
  const outputStream: AsyncIterable<Uint8Array> = {
    [Symbol.asyncIterator]: () => ({
      next: () => {
        return new Promise((resolve, reject) => {
          socket.onerror = (error) => {
            socket.onclose = null;
            socket.close();
            reject(error);
          };
          socket.onclose = () => {
            if (streamError) {
              reject(streamError);
            } else {
              resolve({
                done: true,
                value: undefined,
              });
            }
          };
          socket.onmessage = (event) => {
            resolve({
              done: false,
              value: new Uint8Array(event.data),
            });
          };
        });
      },
    }),
  };

  const send = async (): Promise<void> => {
    try {
      for await (const inputChunk of data) {
        socket.send(inputChunk);
      }
    } catch (err) {
      // We don't throw the error here because the send()'s returned
      // would already be settled by the time sending chunk throws error.
      // Instead, the notify the output stream to throw if there's
      // exceptions
      streamError = err;
    } finally {
      // WS status code: https://tools.ietf.org/html/rfc6455#section-7.4
      socket.close(1000);
    }
  };
  send();
  return outputStream;
};

/**
 * Transfer payload data to an AsyncIterable.
 * When the ReadableStream API is available in the runtime(e.g. browser), and
 * the request body is ReadableStream, so we need to transfer it to AsyncIterable
 * to make the stream consumable by WebSocket.
 */
const getIterator = (stream: any): AsyncIterable<any> => {
  // Noop if stream is already an async iterable
  if (stream[Symbol.asyncIterator]) return stream;
  else if (isReadableStream(stream)) {
    //If stream is a ReadableStream, transfer the ReadableStream to async iterable.
    return readableStreamtoIterable(stream);
  } else {
    //For other types, just wrap them with an async iterable.
    return {
      [Symbol.asyncIterator]: async function* () {
        yield stream;
      },
    };
  }
};

/**
 * Convert async iterable to a ReadableStream when ReadableStream API
 * is available(browsers). Otherwise, leave as it is(ReactNative).
 */
const toReadableStream = <T>(asyncIterable: AsyncIterable<T>) =>
  typeof ReadableStream === "function" ? iterableToReadableStream(asyncIterable) : asyncIterable;

const isReadableStream = (payload: any): payload is ReadableStream =>
  typeof ReadableStream === "function" && payload instanceof ReadableStream;
