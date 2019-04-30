import { ClientRequest } from "http";
import { Readable } from "stream";
import { HttpRequest } from "@aws-sdk/types";

export function writeRequestBody(
  httpRequest: ClientRequest,
  request: HttpRequest<Readable>
) {
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
  httpRequest: ClientRequest,
  body?: string | ArrayBuffer | ArrayBufferView | Readable
) {
  if (body instanceof Readable) {
    // pipe automatically handles end
    body.pipe(httpRequest);
  } else if (body) {
    httpRequest.end(body);
  } else {
    httpRequest.end();
  }
}
