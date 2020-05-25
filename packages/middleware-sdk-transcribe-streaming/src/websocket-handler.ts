import { HttpHandlerOptions, RequestHandlerMetadata } from "@aws-sdk/types";
import { HttpHandler, HttpRequest, HttpResponse } from "@aws-sdk/protocol-http";
import { formatUrl } from "@aws-sdk/util-format-url";
/**
 * Base handler for websocket requests. By default, the request input and output
 * body will be in a ReadableStream, because of interface consistency among middleware.
 * If ReadableStream is not available, like in React-Native, the response body
 * will be an async iterable.
 */

export interface WebSocketHandlerOptions {
  /**
   * The maximum time in milliseconds that the connection phase of a request
   * may take before the connection attempt is abandoned.
   */
  connectionTimeout?: number;
}

export class WebSocketHandler implements HttpHandler {
  public readonly metadata: RequestHandlerMetadata = {
    handlerProtocol: "websocket"
  };
  private readonly connectionTimeout: number;
  constructor({ connectionTimeout }: WebSocketHandlerOptions = {}) {
    this.connectionTimeout = connectionTimeout || 2000;
  }

  destroy(): void {}

  handle(
    request: HttpRequest,
    options: HttpHandlerOptions = {}
  ): Promise<{ response: HttpResponse }> {
    const url = formatUrl(request);
    const socket: WebSocket = new WebSocket(url);
    socket.binaryType = "arraybuffer";
    return waitForReady(socket, this.connectionTimeout)
      .then(() => {
        const { body } = request;
        const bodyStream = getIterator(body);
        return connect(socket, bodyStream);
      })
      .then(iterableToReadableStream)
      .then(bodyStream => ({
        response: new HttpResponse({
          statusCode: 200, // indicates connection success
          body: bodyStream
        })
      }));
  }
}

const waitForReady = (socket: WebSocket, connectionTimeout: number) =>
  new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      reject({
        $metadata: {
          httpStatusCode: 500
        }
      });
    }, connectionTimeout);
    socket.onopen = () => {
      clearTimeout(timeout);
      resolve();
    };
  });

const connect = (
  socket: WebSocket,
  data: AsyncIterable<Uint8Array>
): AsyncIterable<Uint8Array> => {
  // To notify output stream any error thrown after response
  // is returned while data keeps streaming.
  let streamError: Error | undefined = undefined;
  const outputStream: AsyncIterable<Uint8Array> = {
    [Symbol.asyncIterator]: () => ({
      next: () => {
        return new Promise((resolve, reject) => {
          socket.onerror = error => {
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
                value: undefined
              });
            }
          };
          socket.onmessage = event => {
            resolve({
              done: false,
              value: new Uint8Array(event.data)
            });
          };
        });
      }
    })
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
function getIterator(stream: any): AsyncIterable<any> {
  // Noop if stream is already an async iterable
  if (stream[Symbol.asyncIterator]) return stream;
  else if (isReadableStream(stream)) {
    //If stream is a ReadableStream, transfer the ReadableStream to async iterable.
    //Reference: https://jakearchibald.com/2017/async-iterators-and-generators/#making-streams-iterate
    const reader = stream.getReader();
    return {
      [Symbol.asyncIterator]: async function* () {
        try {
          while (true) {
            // Read from the stream
            const { done, value } = await reader.read();
            // Exit if we're done
            if (done) return;
            // Else yield the chunk
            yield value;
          }
        } finally {
          reader.releaseLock();
        }
      }
    };
  } else {
    //For other types, just wrap them with an async iterable.
    return {
      [Symbol.asyncIterator]: async function* () {
        yield stream;
      }
    };
  }
}

/**
 * Convert async iterable to a ReadableStream when ReadableStream API
 * is available(browsers). Otherwise, leave as it is(ReactNative).
 */
function iterableToReadableStream<T>(
  asyncIterable: AsyncIterable<T>
): ReadableStream<T> | AsyncIterable<T> {
  if (typeof ReadableStream !== "function") {
    return asyncIterable;
  }
  const iterator = asyncIterable[Symbol.asyncIterator]();
  return new ReadableStream({
    pull(controller) {
      return iterator.next().then(({ done, value }) => {
        if (done) {
          return controller.close();
        }
        controller.enqueue(value);
      });
    }
  });
}

const isReadableStream = (payload: any): payload is ReadableStream =>
  typeof ReadableStream === "function" && payload instanceof ReadableStream;
