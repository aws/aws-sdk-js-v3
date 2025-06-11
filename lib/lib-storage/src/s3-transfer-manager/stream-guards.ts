// * confirm if filestream fits here *

import { Readable } from "stream";

// will not work with browser because no readable in browser
export function isNodeStream(stream: unknown): stream is Readable {
  return typeof stream === "object" && stream !== null && "pipe" in stream && typeof stream.pipe === "function";
}

export function isWebStream(stream: unknown): stream is ReadableStream | Blob {
  return (
    (typeof ReadableStream !== "undefined" && stream instanceof ReadableStream) ||
    (typeof Blob !== "undefined" && stream instanceof Blob)
  );
}
