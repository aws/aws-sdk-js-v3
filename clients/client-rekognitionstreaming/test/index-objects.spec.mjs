import {
  AccessDeniedException,
  AccessDeniedException$,
  BoundingBox$,
  ChallengeConfig$,
  ChallengeEvent$,
  ChallengeType,
  ClientChallenge$,
  ClientSessionInformationEvent$,
  ColorDisplayed$,
  ColorSequence$,
  DisconnectionEvent$,
  FaceMovementAndLightClientChallenge$,
  FaceMovementAndLightServerChallenge$,
  FaceMovementClientChallenge$,
  FaceMovementServerChallenge$,
  FreshnessColor$,
  InitialFace$,
  InternalServerException,
  InternalServerException$,
  LightChallengeType,
  LivenessRequestStream$,
  LivenessResponseStream$,
  OvalParameters$,
  RekognitionStreaming,
  RekognitionStreamingClient,
  RekognitionStreamingServiceException,
  ServerChallenge$,
  ServerSessionInformationEvent$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  ServiceUnavailableException,
  ServiceUnavailableException$,
  SessionInformation$,
  SessionNotFoundException,
  SessionNotFoundException$,
  StartFaceLivenessSession$,
  StartFaceLivenessSessionCommand,
  StartFaceLivenessSessionRequest$,
  StartFaceLivenessSessionResponse$,
  TargetFace$,
  ThrottlingException,
  ThrottlingException$,
  ValidationException,
  ValidationException$,
  VideoEvent$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof RekognitionStreamingClient === "function");
assert(typeof RekognitionStreaming === "function");
// commands
assert(typeof StartFaceLivenessSessionCommand === "function");
assert(typeof StartFaceLivenessSession$ === "object");
// structural schemas
assert(typeof BoundingBox$ === "object");
assert(typeof ChallengeConfig$ === "object");
assert(typeof ChallengeEvent$ === "object");
assert(typeof ClientChallenge$ === "object");
assert(typeof ClientSessionInformationEvent$ === "object");
assert(typeof ColorDisplayed$ === "object");
assert(typeof ColorSequence$ === "object");
assert(typeof DisconnectionEvent$ === "object");
assert(typeof FaceMovementAndLightClientChallenge$ === "object");
assert(typeof FaceMovementAndLightServerChallenge$ === "object");
assert(typeof FaceMovementClientChallenge$ === "object");
assert(typeof FaceMovementServerChallenge$ === "object");
assert(typeof FreshnessColor$ === "object");
assert(typeof InitialFace$ === "object");
assert(typeof LivenessRequestStream$ === "object");
assert(typeof LivenessResponseStream$ === "object");
assert(typeof OvalParameters$ === "object");
assert(typeof ServerChallenge$ === "object");
assert(typeof ServerSessionInformationEvent$ === "object");
assert(typeof SessionInformation$ === "object");
assert(typeof StartFaceLivenessSessionRequest$ === "object");
assert(typeof StartFaceLivenessSessionResponse$ === "object");
assert(typeof TargetFace$ === "object");
assert(typeof VideoEvent$ === "object");
// enums
assert(typeof ChallengeType === "object");
assert(typeof LightChallengeType === "object");
// errors
assert(AccessDeniedException.prototype instanceof RekognitionStreamingServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(InternalServerException.prototype instanceof RekognitionStreamingServiceException);
assert(typeof InternalServerException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof RekognitionStreamingServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ServiceUnavailableException.prototype instanceof RekognitionStreamingServiceException);
assert(typeof ServiceUnavailableException$ === "object");
assert(SessionNotFoundException.prototype instanceof RekognitionStreamingServiceException);
assert(typeof SessionNotFoundException$ === "object");
assert(ThrottlingException.prototype instanceof RekognitionStreamingServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof RekognitionStreamingServiceException);
assert(typeof ValidationException$ === "object");
assert(RekognitionStreamingServiceException.prototype instanceof Error);
console.log(`RekognitionStreaming index test passed.`);
