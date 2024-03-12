import { Buffer } from "buffer"; // do not remove this import: Node.js buffer or buffer NPM module for browser.

import { ClientDefaultValues } from "./runtimeConfig";

export const byteLength = (input: any) => {
  if (input === null || input === undefined) return 0;

  if (typeof input === "string") {
    return Buffer.byteLength(input);
  }

  if (typeof input.byteLength === "number") {
    return input.byteLength;
  } else if (typeof input.length === "number") {
    return input.length;
  } else if (typeof input.size === "number") {
    return input.size;
  } else if (typeof input.path === "string") {
    try {
      return ClientDefaultValues.lstatSync(input.path).size;
    } catch (error) {
      return undefined;
    }
  }
  return undefined;
};
