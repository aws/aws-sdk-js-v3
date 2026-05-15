import { Readable } from "node:stream";

/**
 * @internal
 */
export function toStream(bytes: Uint8Array): Readable {
  return Readable.from(Buffer.from(bytes));
}
