import {
  AccessDeniedException,
  AccessDeniedException$,
  ClientLimitExceededException,
  ClientLimitExceededException$,
  InvalidArgumentException,
  InvalidArgumentException$,
  JoinStorageSession$,
  JoinStorageSessionAsViewer$,
  JoinStorageSessionAsViewerCommand,
  JoinStorageSessionAsViewerInput$,
  JoinStorageSessionCommand,
  JoinStorageSessionInput$,
  KinesisVideoWebRTCStorage,
  KinesisVideoWebRTCStorageClient,
  KinesisVideoWebRTCStorageServiceException,
  ResourceNotFoundException,
  ResourceNotFoundException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof KinesisVideoWebRTCStorageClient === "function");
assert(typeof KinesisVideoWebRTCStorage === "function");
// commands
assert(typeof JoinStorageSessionCommand === "function");
assert(typeof JoinStorageSession$ === "object");
assert(typeof JoinStorageSessionAsViewerCommand === "function");
assert(typeof JoinStorageSessionAsViewer$ === "object");
// structural schemas
assert(typeof JoinStorageSessionAsViewerInput$ === "object");
assert(typeof JoinStorageSessionInput$ === "object");
// errors
assert(AccessDeniedException.prototype instanceof KinesisVideoWebRTCStorageServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ClientLimitExceededException.prototype instanceof KinesisVideoWebRTCStorageServiceException);
assert(typeof ClientLimitExceededException$ === "object");
assert(InvalidArgumentException.prototype instanceof KinesisVideoWebRTCStorageServiceException);
assert(typeof InvalidArgumentException$ === "object");
assert(ResourceNotFoundException.prototype instanceof KinesisVideoWebRTCStorageServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(KinesisVideoWebRTCStorageServiceException.prototype instanceof Error);
console.log(`KinesisVideoWebRTCStorage index test passed.`);
