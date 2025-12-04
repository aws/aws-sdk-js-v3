import {
  GetMediaCommand,
  KinesisVideoMedia,
  KinesisVideoMediaClient,
  KinesisVideoMediaServiceException,
  StartSelectorType,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof KinesisVideoMediaClient === "function")
assert(typeof KinesisVideoMedia === "function")
// commands
assert(typeof GetMediaCommand === "function")
// enums
assert(typeof StartSelectorType === "object");
// errors
assert(KinesisVideoMediaServiceException.prototype instanceof Error)
console.log(`KinesisVideoMedia index test passed.`);
