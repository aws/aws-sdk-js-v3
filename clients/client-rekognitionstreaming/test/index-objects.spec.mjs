import {
  AccessDeniedException,
  ChallengeType,
  InternalServerException,
  LightChallengeType,
  RekognitionStreaming,
  RekognitionStreamingClient,
  RekognitionStreamingServiceException,
  ServiceQuotaExceededException,
  ServiceUnavailableException,
  SessionNotFoundException,
  StartFaceLivenessSessionCommand,
  ThrottlingException,
  ValidationException,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof RekognitionStreamingClient === "function");
assert(typeof RekognitionStreaming === "function");
// commands
assert(typeof StartFaceLivenessSessionCommand === "function");
// enums
assert(typeof ChallengeType === "object");
assert(typeof LightChallengeType === "object");
// errors
assert(AccessDeniedException.prototype instanceof RekognitionStreamingServiceException);
assert(InternalServerException.prototype instanceof RekognitionStreamingServiceException);
assert(ServiceQuotaExceededException.prototype instanceof RekognitionStreamingServiceException);
assert(ServiceUnavailableException.prototype instanceof RekognitionStreamingServiceException);
assert(SessionNotFoundException.prototype instanceof RekognitionStreamingServiceException);
assert(ThrottlingException.prototype instanceof RekognitionStreamingServiceException);
assert(ValidationException.prototype instanceof RekognitionStreamingServiceException);
assert(RekognitionStreamingServiceException.prototype instanceof Error);
console.log(`RekognitionStreaming index test passed.`);
