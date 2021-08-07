import { HttpRequest } from "@aws-sdk/types";
import { ClientRequest } from "http";
import { ClientHttp2Stream } from "http2";
import { Readable } from "stream";

export function writeRequestBody(httpRequest: ClientRequest | ClientHttp2Stream, request: HttpRequest) {
  const expect = request.headers["Expect"] || request.headers["expect"];
  if (expect === "100-continue") {
    httpRequest.on("continue", () => {
      writeBody(httpRequest, request.body);
    });
  } else {
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
    if (Buffer.isBuffer(body) || typeof body === "string") {
      httpRequest.end(body);
    } else {
      // buffer.from copies TypedArrays but can reuse ArrayBuffers
      if (body instanceof Uint8Array) {
        httpRequest.end(Buffer.from(body.buffer, body.byteOffset, body.byteLength));
      } else {
        httpRequest.end(Buffer.from(body));
      }
    }
  } else {
    httpRequest.end();
  }
}
