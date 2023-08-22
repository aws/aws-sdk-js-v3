/**
 * Convert a buffer to a readable stream.
 */
export function createReadStreamOnBuffer(buffer: Uint8Array): ReadableStream {
  return new Blob([buffer]).stream();
}
