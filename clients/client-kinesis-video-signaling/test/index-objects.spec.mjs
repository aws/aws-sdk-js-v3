import {
  GetIceServerConfigCommand,
  KinesisVideoSignaling,
  KinesisVideoSignalingClient,
  KinesisVideoSignalingServiceException,
  SendAlexaOfferToMasterCommand,
  Service,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof KinesisVideoSignalingClient === "function");
assert(typeof KinesisVideoSignaling === "function");
// commands
assert(typeof GetIceServerConfigCommand === "function");
assert(typeof SendAlexaOfferToMasterCommand === "function");
// enums
assert(typeof Service === "object");
// errors
assert(KinesisVideoSignalingServiceException.prototype instanceof Error);
console.log(`KinesisVideoSignaling index test passed.`);
