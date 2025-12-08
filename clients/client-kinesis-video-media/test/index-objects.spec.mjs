import {
  ClientLimitExceededException,
  ConnectionLimitExceededException,
  GetMediaCommand,
  InvalidArgumentException,
  InvalidEndpointException,
  KinesisVideoMedia,
  KinesisVideoMediaClient,
  KinesisVideoMediaServiceException,
  NotAuthorizedException,
  ResourceNotFoundException,
  StartSelectorType,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof KinesisVideoMediaClient === "function");
assert(typeof KinesisVideoMedia === "function");
// commands
assert(typeof GetMediaCommand === "function");
// enums
assert(typeof StartSelectorType === "object");
// errors
assert(ClientLimitExceededException.prototype instanceof KinesisVideoMediaServiceException);
assert(ConnectionLimitExceededException.prototype instanceof KinesisVideoMediaServiceException);
assert(InvalidArgumentException.prototype instanceof KinesisVideoMediaServiceException);
assert(InvalidEndpointException.prototype instanceof KinesisVideoMediaServiceException);
assert(NotAuthorizedException.prototype instanceof KinesisVideoMediaServiceException);
assert(ResourceNotFoundException.prototype instanceof KinesisVideoMediaServiceException);
assert(KinesisVideoMediaServiceException.prototype instanceof Error);
console.log(`KinesisVideoMedia index test passed.`);
