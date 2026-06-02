import {
  AccessDeniedException,
  AccessDeniedException$,
  CompleteRollout$,
  CompleteRolloutCommand,
  CompleteRolloutRequest$,
  CompleteRolloutResponse$,
  CompletionStatus,
  ConflictException,
  ConflictException$,
  InternalServiceError,
  InternalServiceError$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  SagemakerJobRuntime,
  SagemakerJobRuntimeClient,
  SagemakerJobRuntimeServiceException,
  Sample$,
  SampleCommand,
  SampleRequest$,
  SampleResponse$,
  SampleWithResponseStream$,
  SampleWithResponseStreamCommand,
  SampleWithResponseStreamRequest$,
  SampleWithResponseStreamResponse$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  ThrottlingException,
  ThrottlingException$,
  UpdateReward$,
  UpdateRewardCommand,
  UpdateRewardRequest$,
  UpdateRewardResponse$,
  ValidationException,
  ValidationException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SagemakerJobRuntimeClient === "function");
assert(typeof SagemakerJobRuntime === "function");
// commands
assert(typeof CompleteRolloutCommand === "function");
assert(typeof CompleteRollout$ === "object");
assert(typeof SampleCommand === "function");
assert(typeof Sample$ === "object");
assert(typeof SampleWithResponseStreamCommand === "function");
assert(typeof SampleWithResponseStream$ === "object");
assert(typeof UpdateRewardCommand === "function");
assert(typeof UpdateReward$ === "object");
// structural schemas
assert(typeof CompleteRolloutRequest$ === "object");
assert(typeof CompleteRolloutResponse$ === "object");
assert(typeof SampleRequest$ === "object");
assert(typeof SampleResponse$ === "object");
assert(typeof SampleWithResponseStreamRequest$ === "object");
assert(typeof SampleWithResponseStreamResponse$ === "object");
assert(typeof UpdateRewardRequest$ === "object");
assert(typeof UpdateRewardResponse$ === "object");
// enums
assert(typeof CompletionStatus === "object");
// errors
assert(AccessDeniedException.prototype instanceof SagemakerJobRuntimeServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof SagemakerJobRuntimeServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServiceError.prototype instanceof SagemakerJobRuntimeServiceException);
assert(typeof InternalServiceError$ === "object");
assert(ResourceNotFoundException.prototype instanceof SagemakerJobRuntimeServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof SagemakerJobRuntimeServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof SagemakerJobRuntimeServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof SagemakerJobRuntimeServiceException);
assert(typeof ValidationException$ === "object");
assert(SagemakerJobRuntimeServiceException.prototype instanceof Error);
console.log(`SagemakerJobRuntime index test passed.`);
