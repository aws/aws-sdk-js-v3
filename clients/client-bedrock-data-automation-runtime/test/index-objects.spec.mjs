import {
  AccessDeniedException,
  AutomationJobStatus,
  BedrockDataAutomationRuntime,
  BedrockDataAutomationRuntimeClient,
  BedrockDataAutomationRuntimeServiceException,
  BlueprintStage,
  CustomOutputStatus,
  DataAutomationStage,
  GetDataAutomationStatusCommand,
  InternalServerException,
  InvokeDataAutomationAsyncCommand,
  InvokeDataAutomationCommand,
  ListTagsForResourceCommand,
  ResourceNotFoundException,
  SemanticModality,
  ServiceQuotaExceededException,
  ServiceUnavailableException,
  TagResourceCommand,
  ThrottlingException,
  UntagResourceCommand,
  ValidationException,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof BedrockDataAutomationRuntimeClient === "function");
assert(typeof BedrockDataAutomationRuntime === "function");
// commands
assert(typeof GetDataAutomationStatusCommand === "function");
assert(typeof InvokeDataAutomationCommand === "function");
assert(typeof InvokeDataAutomationAsyncCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
// enums
assert(typeof AutomationJobStatus === "object");
assert(typeof BlueprintStage === "object");
assert(typeof CustomOutputStatus === "object");
assert(typeof DataAutomationStage === "object");
assert(typeof SemanticModality === "object");
// errors
assert(AccessDeniedException.prototype instanceof BedrockDataAutomationRuntimeServiceException);
assert(InternalServerException.prototype instanceof BedrockDataAutomationRuntimeServiceException);
assert(ResourceNotFoundException.prototype instanceof BedrockDataAutomationRuntimeServiceException);
assert(ServiceQuotaExceededException.prototype instanceof BedrockDataAutomationRuntimeServiceException);
assert(ServiceUnavailableException.prototype instanceof BedrockDataAutomationRuntimeServiceException);
assert(ThrottlingException.prototype instanceof BedrockDataAutomationRuntimeServiceException);
assert(ValidationException.prototype instanceof BedrockDataAutomationRuntimeServiceException);
assert(BedrockDataAutomationRuntimeServiceException.prototype instanceof Error);
console.log(`BedrockDataAutomationRuntime index test passed.`);
