import { HttpRequest } from "@aws-sdk/types";
import { ClientRequest } from "http";
import { ClientHttp2Stream } from "http2";
import { Readable } from "stream";

const MIN_WAIT_TIME = 1000;

/**
 * This resolves when writeBody has been called.
 *
 * @param httpRequest - opened Node.js request.
 * @param request - container with the request body.
 * @param maxContinueTimeoutMs - maximum time to wait for the continue event. Minimum of 1000ms.
 */
export async function writeRequestBody(
  httpRequest: ClientRequest | ClientHttp2Stream,
  request: HttpRequest,
  maxContinueTimeoutMs = MIN_WAIT_TIME
): Promise<void> {
  const headers = request.headers ?? {};
  const expect = headers["Expect"] || headers["expect"];

  let timeoutId = -1;
  let hasError = false;

  if (expect === "100-continue") {
    await Promise.race<void>([
      new Promise((resolve) => {
        timeoutId = Number(setTimeout(resolve, Math.max(MIN_WAIT_TIME, maxContinueTimeoutMs)));
      }),
      new Promise((resolve) => {
        httpRequest.on("continue", () => {
          clearTimeout(timeoutId);
          resolve();
        });
        httpRequest.on("error", () => {
          hasError = true;
          clearTimeout(timeoutId);
          // this handler does not reject with the error
          // because there is already an error listener
          // on the request in node-http-handler
          // and node-http2-handler.
          resolve();
        });
      }),
    ]);
  }

  if (!hasError) {
    writeBody(httpRequest, request.body);
  }
}

function writeBody(
  httpRequest: ClientRequest | ClientHttp2Stream,
  body?: string | ArrayBuffer | ArrayBufferView | Readable | Uint8Array
) {
  if (body instanceof Readable) {
    // pipe automatically handles end
    body.pipe(httpRequest);
  } else if (body) {
    httpRequest.end(Buffer.from(body as Parameters<typeof Buffer.from>[0]));
  } else {
    httpRequest.end();
  }
}
