import type { $ShapeSerializer, HttpResponse } from "@smithy/types";
import { fromUtf8 } from "@smithy/util-utf8";
import { Readable } from "node:stream";

export function setResponseBody(serializer: $ShapeSerializer<any>, response: HttpResponse) {
  const flushed = serializer.flush();
  if (flushed instanceof Uint8Array) {
    response.body = Readable.from([flushed]);
  } else if (typeof flushed === "string") {
    response.body = Readable.from([fromUtf8(flushed)]);
  }

  if (!response.body) {
    delete response.headers["content-type"];
    response.body = Readable.from("");
  }
}
