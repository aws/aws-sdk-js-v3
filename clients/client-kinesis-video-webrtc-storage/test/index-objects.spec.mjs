import {
  JoinStorageSessionAsViewerCommand,
  JoinStorageSessionCommand,
  KinesisVideoWebRTCStorage,
  KinesisVideoWebRTCStorageClient,
  KinesisVideoWebRTCStorageServiceException,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof KinesisVideoWebRTCStorageClient === "function");
assert(typeof KinesisVideoWebRTCStorage === "function");
// commands
assert(typeof JoinStorageSessionCommand === "function");
assert(typeof JoinStorageSessionAsViewerCommand === "function");
// errors
assert(KinesisVideoWebRTCStorageServiceException.prototype instanceof Error);
console.log(`KinesisVideoWebRTCStorage index test passed.`);
