import {
  AccessDeniedException,
  ClientLimitExceededException,
  InvalidArgumentException,
  JoinStorageSessionAsViewerCommand,
  JoinStorageSessionCommand,
  KinesisVideoWebRTCStorage,
  KinesisVideoWebRTCStorageClient,
  KinesisVideoWebRTCStorageServiceException,
  ResourceNotFoundException,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof KinesisVideoWebRTCStorageClient === "function");
assert(typeof KinesisVideoWebRTCStorage === "function");
// commands
assert(typeof JoinStorageSessionCommand === "function");
assert(typeof JoinStorageSessionAsViewerCommand === "function");
// errors
assert(AccessDeniedException.prototype instanceof KinesisVideoWebRTCStorageServiceException);
assert(ClientLimitExceededException.prototype instanceof KinesisVideoWebRTCStorageServiceException);
assert(InvalidArgumentException.prototype instanceof KinesisVideoWebRTCStorageServiceException);
assert(ResourceNotFoundException.prototype instanceof KinesisVideoWebRTCStorageServiceException);
assert(KinesisVideoWebRTCStorageServiceException.prototype instanceof Error);
console.log(`KinesisVideoWebRTCStorage index test passed.`);
