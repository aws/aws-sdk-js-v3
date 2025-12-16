import {
  AccessDeniedException,
  AccessDeniedException$,
  AssetProcessingConfiguration$,
  AutomationJobStatus,
  BedrockDataAutomationRuntime,
  BedrockDataAutomationRuntimeClient,
  BedrockDataAutomationRuntimeServiceException,
  Blueprint$,
  BlueprintStage,
  CustomOutputStatus,
  DataAutomationConfiguration$,
  DataAutomationStage,
  EncryptionConfiguration$,
  EventBridgeConfiguration$,
  GetDataAutomationStatus$,
  GetDataAutomationStatusCommand,
  GetDataAutomationStatusRequest$,
  GetDataAutomationStatusResponse$,
  InputConfiguration$,
  InternalServerException,
  InternalServerException$,
  InvokeDataAutomation$,
  InvokeDataAutomationAsync$,
  InvokeDataAutomationAsyncCommand,
  InvokeDataAutomationAsyncRequest$,
  InvokeDataAutomationAsyncResponse$,
  InvokeDataAutomationCommand,
  InvokeDataAutomationRequest$,
  InvokeDataAutomationResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  NotificationConfiguration$,
  OutputConfiguration$,
  OutputSegment$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  SemanticModality,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  ServiceUnavailableException,
  ServiceUnavailableException$,
  SyncInputConfiguration$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottlingException,
  ThrottlingException$,
  TimestampSegment$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  ValidationException,
  ValidationException$,
  VideoAssetProcessingConfiguration$,
  VideoSegmentConfiguration$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof BedrockDataAutomationRuntimeClient === "function");
assert(typeof BedrockDataAutomationRuntime === "function");
// commands
assert(typeof GetDataAutomationStatusCommand === "function");
assert(typeof GetDataAutomationStatus$ === "object");
assert(typeof InvokeDataAutomationCommand === "function");
assert(typeof InvokeDataAutomation$ === "object");
assert(typeof InvokeDataAutomationAsyncCommand === "function");
assert(typeof InvokeDataAutomationAsync$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
// structural schemas
assert(typeof AssetProcessingConfiguration$ === "object");
assert(typeof Blueprint$ === "object");
assert(typeof DataAutomationConfiguration$ === "object");
assert(typeof EncryptionConfiguration$ === "object");
assert(typeof EventBridgeConfiguration$ === "object");
assert(typeof GetDataAutomationStatusRequest$ === "object");
assert(typeof GetDataAutomationStatusResponse$ === "object");
assert(typeof InputConfiguration$ === "object");
assert(typeof InvokeDataAutomationAsyncRequest$ === "object");
assert(typeof InvokeDataAutomationAsyncResponse$ === "object");
assert(typeof InvokeDataAutomationRequest$ === "object");
assert(typeof InvokeDataAutomationResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof NotificationConfiguration$ === "object");
assert(typeof OutputConfiguration$ === "object");
assert(typeof OutputSegment$ === "object");
assert(typeof SyncInputConfiguration$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TimestampSegment$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof VideoAssetProcessingConfiguration$ === "object");
assert(typeof VideoSegmentConfiguration$ === "object");
// enums
assert(typeof AutomationJobStatus === "object");
assert(typeof BlueprintStage === "object");
assert(typeof CustomOutputStatus === "object");
assert(typeof DataAutomationStage === "object");
assert(typeof SemanticModality === "object");
// errors
assert(AccessDeniedException.prototype instanceof BedrockDataAutomationRuntimeServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(InternalServerException.prototype instanceof BedrockDataAutomationRuntimeServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof BedrockDataAutomationRuntimeServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof BedrockDataAutomationRuntimeServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ServiceUnavailableException.prototype instanceof BedrockDataAutomationRuntimeServiceException);
assert(typeof ServiceUnavailableException$ === "object");
assert(ThrottlingException.prototype instanceof BedrockDataAutomationRuntimeServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof BedrockDataAutomationRuntimeServiceException);
assert(typeof ValidationException$ === "object");
assert(BedrockDataAutomationRuntimeServiceException.prototype instanceof Error);
console.log(`BedrockDataAutomationRuntime index test passed.`);
