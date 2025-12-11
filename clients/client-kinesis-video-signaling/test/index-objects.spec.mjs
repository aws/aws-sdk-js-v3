import {
  ClientLimitExceededException,
  GetIceServerConfigCommand,
  InvalidArgumentException,
  InvalidClientException,
  KinesisVideoSignaling,
  KinesisVideoSignalingClient,
  KinesisVideoSignalingServiceException,
  NotAuthorizedException,
  ResourceNotFoundException,
  SendAlexaOfferToMasterCommand,
  Service,
  SessionExpiredException,
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
assert(ClientLimitExceededException.prototype instanceof KinesisVideoSignalingServiceException);
assert(InvalidArgumentException.prototype instanceof KinesisVideoSignalingServiceException);
assert(InvalidClientException.prototype instanceof KinesisVideoSignalingServiceException);
assert(NotAuthorizedException.prototype instanceof KinesisVideoSignalingServiceException);
assert(ResourceNotFoundException.prototype instanceof KinesisVideoSignalingServiceException);
assert(SessionExpiredException.prototype instanceof KinesisVideoSignalingServiceException);
assert(KinesisVideoSignalingServiceException.prototype instanceof Error);
console.log(`KinesisVideoSignaling index test passed.`);
