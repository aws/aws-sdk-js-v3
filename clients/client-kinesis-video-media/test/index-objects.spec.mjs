import {
  ClientLimitExceededException,
  ClientLimitExceededException$,
  ConnectionLimitExceededException,
  ConnectionLimitExceededException$,
  GetMedia$,
  GetMediaCommand,
  GetMediaInput$,
  GetMediaOutput$,
  InvalidArgumentException,
  InvalidArgumentException$,
  InvalidEndpointException,
  InvalidEndpointException$,
  KinesisVideoMedia,
  KinesisVideoMediaClient,
  KinesisVideoMediaServiceException,
  NotAuthorizedException,
  NotAuthorizedException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  StartSelector$,
  StartSelectorType,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof KinesisVideoMediaClient === "function");
assert(typeof KinesisVideoMedia === "function");
// commands
assert(typeof GetMediaCommand === "function");
assert(typeof GetMedia$ === "object");
// structural schemas
assert(typeof GetMediaInput$ === "object");
assert(typeof GetMediaOutput$ === "object");
assert(typeof StartSelector$ === "object");
// enums
assert(typeof StartSelectorType === "object");
// errors
assert(ClientLimitExceededException.prototype instanceof KinesisVideoMediaServiceException);
assert(typeof ClientLimitExceededException$ === "object");
assert(ConnectionLimitExceededException.prototype instanceof KinesisVideoMediaServiceException);
assert(typeof ConnectionLimitExceededException$ === "object");
assert(InvalidArgumentException.prototype instanceof KinesisVideoMediaServiceException);
assert(typeof InvalidArgumentException$ === "object");
assert(InvalidEndpointException.prototype instanceof KinesisVideoMediaServiceException);
assert(typeof InvalidEndpointException$ === "object");
assert(NotAuthorizedException.prototype instanceof KinesisVideoMediaServiceException);
assert(typeof NotAuthorizedException$ === "object");
assert(ResourceNotFoundException.prototype instanceof KinesisVideoMediaServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(KinesisVideoMediaServiceException.prototype instanceof Error);
console.log(`KinesisVideoMedia index test passed.`);
