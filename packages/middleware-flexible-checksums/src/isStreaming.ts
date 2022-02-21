import { isArrayBuffer } from "@aws-sdk/is-array-buffer";

/**
 * Returns true if the given value is a streaming response.
 */
export const isStreaming = (body: unknown) =>
  body !== undefined && typeof body !== "string" && !ArrayBuffer.isView(body) && !isArrayBuffer(body);
