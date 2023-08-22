import { Readable, Transform } from "stream";

/**
 * Convert a buffer to a readable stream.
 */
export function createReadStreamOnBuffer(buffer: Uint8Array): Readable {
  const stream = new Transform();
  stream.push(buffer);
  stream.push(null);
  return stream;
}
