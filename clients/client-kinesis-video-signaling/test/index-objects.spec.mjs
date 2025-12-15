import {
  ClientLimitExceededException,
  ClientLimitExceededException$,
  GetIceServerConfig$,
  GetIceServerConfigCommand,
  GetIceServerConfigRequest$,
  GetIceServerConfigResponse$,
  IceServer$,
  InvalidArgumentException,
  InvalidArgumentException$,
  InvalidClientException,
  InvalidClientException$,
  KinesisVideoSignaling,
  KinesisVideoSignalingClient,
  KinesisVideoSignalingServiceException,
  NotAuthorizedException,
  NotAuthorizedException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  SendAlexaOfferToMaster$,
  SendAlexaOfferToMasterCommand,
  SendAlexaOfferToMasterRequest$,
  SendAlexaOfferToMasterResponse$,
  Service,
  SessionExpiredException,
  SessionExpiredException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof KinesisVideoSignalingClient === "function");
assert(typeof KinesisVideoSignaling === "function");
// commands
assert(typeof GetIceServerConfigCommand === "function");
assert(typeof GetIceServerConfig$ === "object");
assert(typeof SendAlexaOfferToMasterCommand === "function");
assert(typeof SendAlexaOfferToMaster$ === "object");
// structural schemas
assert(typeof GetIceServerConfigRequest$ === "object");
assert(typeof GetIceServerConfigResponse$ === "object");
assert(typeof IceServer$ === "object");
assert(typeof SendAlexaOfferToMasterRequest$ === "object");
assert(typeof SendAlexaOfferToMasterResponse$ === "object");
// enums
assert(typeof Service === "object");
// errors
assert(ClientLimitExceededException.prototype instanceof KinesisVideoSignalingServiceException);
assert(typeof ClientLimitExceededException$ === "object");
assert(InvalidArgumentException.prototype instanceof KinesisVideoSignalingServiceException);
assert(typeof InvalidArgumentException$ === "object");
assert(InvalidClientException.prototype instanceof KinesisVideoSignalingServiceException);
assert(typeof InvalidClientException$ === "object");
assert(NotAuthorizedException.prototype instanceof KinesisVideoSignalingServiceException);
assert(typeof NotAuthorizedException$ === "object");
assert(ResourceNotFoundException.prototype instanceof KinesisVideoSignalingServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(SessionExpiredException.prototype instanceof KinesisVideoSignalingServiceException);
assert(typeof SessionExpiredException$ === "object");
assert(KinesisVideoSignalingServiceException.prototype instanceof Error);
console.log(`KinesisVideoSignaling index test passed.`);
