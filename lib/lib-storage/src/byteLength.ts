import { Buffer } from "buffer"; // do not remove this import: Node.js buffer or buffer NPM module for browser.

import { runtimeConfig } from "./runtimeConfig";

/**
 * Clients use util-body-length-[node|browser] instead.
 * @internal
 * @param input - to examine.
 * @returns byte count of input or undefined if indeterminable.
 */
export const byteLength = (input: any): number | undefined => {
  if (input == null) {
    return 0;
  }

  if (typeof input === "string") {
    return Buffer.byteLength(input);
  }

  if (typeof input.byteLength === "number") {
    // Uint8Array, ArrayBuffer, Buffer, and ArrayBufferView
    return input.byteLength;
  } else if (typeof input.length === "number") {
    // todo: unclear in what cases this is a valid byte count.
    return input.length;
  } else if (typeof input.size === "number") {
    // todo: unclear in what cases this is a valid byte count.
    return input.size;
  } else if (typeof input.start === "number" && typeof input.end === "number") {
    // file read stream with range.
    return input.end + 1 - input.start;
  } else if (runtimeConfig.isFileReadStream(input)) {
    try {
      return runtimeConfig.lstatSync(input.path).size;
    } catch (error) {
      return undefined;
    }
  }
  return undefined;
};
