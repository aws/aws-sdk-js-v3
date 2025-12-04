import {
  ApplyGuardrailCommand,
  AsyncInvokeStatus,
  AudioFormat,
  BedrockRuntime,
  BedrockRuntimeClient,
  BedrockRuntimeServiceException,
  CachePointType,
  ConversationRole,
  ConverseCommand,
  ConverseStreamCommand,
  CountTokensCommand,
  DocumentFormat,
  GetAsyncInvokeCommand,
  GuardrailAction,
  GuardrailAutomatedReasoningLogicWarningType,
  GuardrailContentFilterConfidence,
  GuardrailContentFilterStrength,
  GuardrailContentFilterType,
  GuardrailContentPolicyAction,
  GuardrailContentQualifier,
  GuardrailContentSource,
  GuardrailContextualGroundingFilterType,
  GuardrailContextualGroundingPolicyAction,
  GuardrailConverseContentQualifier,
  GuardrailConverseImageFormat,
  GuardrailImageFormat,
  GuardrailManagedWordType,
  GuardrailOrigin,
  GuardrailOutputScope,
  GuardrailOwnership,
  GuardrailPiiEntityType,
  GuardrailSensitiveInformationPolicyAction,
  GuardrailStreamProcessingMode,
  GuardrailTopicPolicyAction,
  GuardrailTopicType,
  GuardrailTrace,
  GuardrailWordPolicyAction,
  ImageFormat,
  InternalServerException,
  InvokeModelCommand,
  InvokeModelWithBidirectionalStreamCommand,
  InvokeModelWithResponseStreamCommand,
  ListAsyncInvokesCommand,
  ModelStreamErrorException,
  ModelTimeoutException,
  PerformanceConfigLatency,
  ServiceTierType,
  ServiceUnavailableException,
  SortAsyncInvocationBy,
  SortOrder,
  StartAsyncInvokeCommand,
  StopReason,
  ThrottlingException,
  ToolResultStatus,
  ToolUseType,
  Trace,
  ValidationException,
  VideoFormat,
  paginateListAsyncInvokes,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof BedrockRuntimeClient === "function");
assert(typeof BedrockRuntime === "function");
// commands
assert(typeof ApplyGuardrailCommand === "function");
assert(typeof ConverseCommand === "function");
assert(typeof ConverseStreamCommand === "function");
assert(typeof CountTokensCommand === "function");
assert(typeof GetAsyncInvokeCommand === "function");
assert(typeof InvokeModelCommand === "function");
assert(typeof InvokeModelWithBidirectionalStreamCommand === "function");
assert(typeof InvokeModelWithResponseStreamCommand === "function");
assert(typeof ListAsyncInvokesCommand === "function");
assert(typeof StartAsyncInvokeCommand === "function");
// enums
assert(typeof AsyncInvokeStatus === "object");
assert(typeof AudioFormat === "object");
assert(typeof CachePointType === "object");
assert(typeof ConversationRole === "object");
assert(typeof DocumentFormat === "object");
assert(typeof GuardrailAction === "object");
assert(typeof GuardrailAutomatedReasoningLogicWarningType === "object");
assert(typeof GuardrailContentFilterConfidence === "object");
assert(typeof GuardrailContentFilterStrength === "object");
assert(typeof GuardrailContentFilterType === "object");
assert(typeof GuardrailContentPolicyAction === "object");
assert(typeof GuardrailContentQualifier === "object");
assert(typeof GuardrailContentSource === "object");
assert(typeof GuardrailContextualGroundingFilterType === "object");
assert(typeof GuardrailContextualGroundingPolicyAction === "object");
assert(typeof GuardrailConverseContentQualifier === "object");
assert(typeof GuardrailConverseImageFormat === "object");
assert(typeof GuardrailImageFormat === "object");
assert(typeof GuardrailManagedWordType === "object");
assert(typeof GuardrailOrigin === "object");
assert(typeof GuardrailOutputScope === "object");
assert(typeof GuardrailOwnership === "object");
assert(typeof GuardrailPiiEntityType === "object");
assert(typeof GuardrailSensitiveInformationPolicyAction === "object");
assert(typeof GuardrailStreamProcessingMode === "object");
assert(typeof GuardrailTopicPolicyAction === "object");
assert(typeof GuardrailTopicType === "object");
assert(typeof GuardrailTrace === "object");
assert(typeof GuardrailWordPolicyAction === "object");
assert(typeof ImageFormat === "object");
assert(typeof PerformanceConfigLatency === "object");
assert(typeof ServiceTierType === "object");
assert(typeof SortAsyncInvocationBy === "object");
assert(typeof SortOrder === "object");
assert(typeof StopReason === "object");
assert(typeof ToolResultStatus === "object");
assert(typeof ToolUseType === "object");
assert(typeof Trace === "object");
assert(typeof VideoFormat === "object");
// errors
assert(InternalServerException.prototype instanceof BedrockRuntimeServiceException);
assert(ModelStreamErrorException.prototype instanceof BedrockRuntimeServiceException);
assert(ModelTimeoutException.prototype instanceof BedrockRuntimeServiceException);
assert(ServiceUnavailableException.prototype instanceof BedrockRuntimeServiceException);
assert(ThrottlingException.prototype instanceof BedrockRuntimeServiceException);
assert(ValidationException.prototype instanceof BedrockRuntimeServiceException);
assert(BedrockRuntimeServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAsyncInvokes === "function");
console.log(`BedrockRuntime index test passed.`);
