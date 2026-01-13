import {
  AccessDeniedException,
  AccessDeniedException$,
  AnyToolChoice$,
  AppliedGuardrailDetails$,
  ApplyGuardrail$,
  ApplyGuardrailCommand,
  ApplyGuardrailRequest$,
  ApplyGuardrailResponse$,
  AsyncInvokeOutputDataConfig$,
  AsyncInvokeS3OutputDataConfig$,
  AsyncInvokeStatus,
  AsyncInvokeSummary$,
  AudioBlock$,
  AudioFormat,
  AudioSource$,
  AutoToolChoice$,
  BedrockRuntime,
  BedrockRuntimeClient,
  BedrockRuntimeServiceException,
  BidirectionalInputPayloadPart$,
  BidirectionalOutputPayloadPart$,
  CachePointBlock$,
  CachePointType,
  Citation$,
  CitationGeneratedContent$,
  CitationLocation$,
  CitationsConfig$,
  CitationsContentBlock$,
  CitationsDelta$,
  CitationSourceContent$,
  CitationSourceContentDelta$,
  ConflictException,
  ConflictException$,
  ContentBlock$,
  ContentBlockDelta$,
  ContentBlockDeltaEvent$,
  ContentBlockStart$,
  ContentBlockStartEvent$,
  ContentBlockStopEvent$,
  ConversationRole,
  Converse$,
  ConverseCommand,
  ConverseMetrics$,
  ConverseOutput$,
  ConverseRequest$,
  ConverseResponse$,
  ConverseStream$,
  ConverseStreamCommand,
  ConverseStreamMetadataEvent$,
  ConverseStreamMetrics$,
  ConverseStreamOutput$,
  ConverseStreamRequest$,
  ConverseStreamResponse$,
  ConverseStreamTrace$,
  ConverseTokensRequest$,
  ConverseTrace$,
  CountTokens$,
  CountTokensCommand,
  CountTokensInput$,
  CountTokensRequest$,
  CountTokensResponse$,
  DocumentBlock$,
  DocumentCharLocation$,
  DocumentChunkLocation$,
  DocumentContentBlock$,
  DocumentFormat,
  DocumentPageLocation$,
  DocumentSource$,
  ErrorBlock$,
  GetAsyncInvoke$,
  GetAsyncInvokeCommand,
  GetAsyncInvokeRequest$,
  GetAsyncInvokeResponse$,
  GuardrailAction,
  GuardrailAssessment$,
  GuardrailAutomatedReasoningFinding$,
  GuardrailAutomatedReasoningImpossibleFinding$,
  GuardrailAutomatedReasoningInputTextReference$,
  GuardrailAutomatedReasoningInvalidFinding$,
  GuardrailAutomatedReasoningLogicWarning$,
  GuardrailAutomatedReasoningLogicWarningType,
  GuardrailAutomatedReasoningNoTranslationsFinding$,
  GuardrailAutomatedReasoningPolicyAssessment$,
  GuardrailAutomatedReasoningRule$,
  GuardrailAutomatedReasoningSatisfiableFinding$,
  GuardrailAutomatedReasoningScenario$,
  GuardrailAutomatedReasoningStatement$,
  GuardrailAutomatedReasoningTooComplexFinding$,
  GuardrailAutomatedReasoningTranslation$,
  GuardrailAutomatedReasoningTranslationAmbiguousFinding$,
  GuardrailAutomatedReasoningTranslationOption$,
  GuardrailAutomatedReasoningValidFinding$,
  GuardrailConfiguration$,
  GuardrailContentBlock$,
  GuardrailContentFilter$,
  GuardrailContentFilterConfidence,
  GuardrailContentFilterStrength,
  GuardrailContentFilterType,
  GuardrailContentPolicyAction,
  GuardrailContentPolicyAssessment$,
  GuardrailContentQualifier,
  GuardrailContentSource,
  GuardrailContextualGroundingFilter$,
  GuardrailContextualGroundingFilterType,
  GuardrailContextualGroundingPolicyAction,
  GuardrailContextualGroundingPolicyAssessment$,
  GuardrailConverseContentBlock$,
  GuardrailConverseContentQualifier,
  GuardrailConverseImageBlock$,
  GuardrailConverseImageFormat,
  GuardrailConverseImageSource$,
  GuardrailConverseTextBlock$,
  GuardrailCoverage$,
  GuardrailCustomWord$,
  GuardrailImageBlock$,
  GuardrailImageCoverage$,
  GuardrailImageFormat,
  GuardrailImageSource$,
  GuardrailInvocationMetrics$,
  GuardrailManagedWord$,
  GuardrailManagedWordType,
  GuardrailOrigin,
  GuardrailOutputContent$,
  GuardrailOutputScope,
  GuardrailOwnership,
  GuardrailPiiEntityFilter$,
  GuardrailPiiEntityType,
  GuardrailRegexFilter$,
  GuardrailSensitiveInformationPolicyAction,
  GuardrailSensitiveInformationPolicyAssessment$,
  GuardrailStreamConfiguration$,
  GuardrailStreamProcessingMode,
  GuardrailTextBlock$,
  GuardrailTextCharactersCoverage$,
  GuardrailTopic$,
  GuardrailTopicPolicyAction,
  GuardrailTopicPolicyAssessment$,
  GuardrailTopicType,
  GuardrailTrace,
  GuardrailTraceAssessment$,
  GuardrailUsage$,
  GuardrailWordPolicyAction,
  GuardrailWordPolicyAssessment$,
  ImageBlock$,
  ImageBlockDelta$,
  ImageBlockStart$,
  ImageFormat,
  ImageSource$,
  InferenceConfiguration$,
  InternalServerException,
  InternalServerException$,
  InvokeModel$,
  InvokeModelCommand,
  InvokeModelRequest$,
  InvokeModelResponse$,
  InvokeModelTokensRequest$,
  InvokeModelWithBidirectionalStream$,
  InvokeModelWithBidirectionalStreamCommand,
  InvokeModelWithBidirectionalStreamInput$,
  InvokeModelWithBidirectionalStreamOutput$,
  InvokeModelWithBidirectionalStreamRequest$,
  InvokeModelWithBidirectionalStreamResponse$,
  InvokeModelWithResponseStream$,
  InvokeModelWithResponseStreamCommand,
  InvokeModelWithResponseStreamRequest$,
  InvokeModelWithResponseStreamResponse$,
  ListAsyncInvokes$,
  ListAsyncInvokesCommand,
  ListAsyncInvokesRequest$,
  ListAsyncInvokesResponse$,
  Message$,
  MessageStartEvent$,
  MessageStopEvent$,
  ModelErrorException,
  ModelErrorException$,
  ModelNotReadyException,
  ModelNotReadyException$,
  ModelStreamErrorException,
  ModelStreamErrorException$,
  ModelTimeoutException,
  ModelTimeoutException$,
  paginateListAsyncInvokes,
  PayloadPart$,
  PerformanceConfigLatency,
  PerformanceConfiguration$,
  PromptRouterTrace$,
  PromptVariableValues$,
  ReasoningContentBlock$,
  ReasoningContentBlockDelta$,
  ReasoningTextBlock$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResponseStream$,
  S3Location$,
  SearchResultBlock$,
  SearchResultContentBlock$,
  SearchResultLocation$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  ServiceTier$,
  ServiceTierType,
  ServiceUnavailableException,
  ServiceUnavailableException$,
  SortAsyncInvocationBy,
  SortOrder,
  SpecificToolChoice$,
  StartAsyncInvoke$,
  StartAsyncInvokeCommand,
  StartAsyncInvokeRequest$,
  StartAsyncInvokeResponse$,
  StopReason,
  SystemContentBlock$,
  SystemTool$,
  Tag$,
  ThrottlingException,
  ThrottlingException$,
  TokenUsage$,
  Tool$,
  ToolChoice$,
  ToolConfiguration$,
  ToolInputSchema$,
  ToolResultBlock$,
  ToolResultBlockDelta$,
  ToolResultBlockStart$,
  ToolResultContentBlock$,
  ToolResultStatus,
  ToolSpecification$,
  ToolUseBlock$,
  ToolUseBlockDelta$,
  ToolUseBlockStart$,
  ToolUseType,
  Trace,
  ValidationException,
  ValidationException$,
  VideoBlock$,
  VideoFormat,
  VideoSource$,
  WebLocation$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof BedrockRuntimeClient === "function");
assert(typeof BedrockRuntime === "function");
// commands
assert(typeof ApplyGuardrailCommand === "function");
assert(typeof ApplyGuardrail$ === "object");
assert(typeof ConverseCommand === "function");
assert(typeof Converse$ === "object");
assert(typeof ConverseStreamCommand === "function");
assert(typeof ConverseStream$ === "object");
assert(typeof CountTokensCommand === "function");
assert(typeof CountTokens$ === "object");
assert(typeof GetAsyncInvokeCommand === "function");
assert(typeof GetAsyncInvoke$ === "object");
assert(typeof InvokeModelCommand === "function");
assert(typeof InvokeModel$ === "object");
assert(typeof InvokeModelWithBidirectionalStreamCommand === "function");
assert(typeof InvokeModelWithBidirectionalStream$ === "object");
assert(typeof InvokeModelWithResponseStreamCommand === "function");
assert(typeof InvokeModelWithResponseStream$ === "object");
assert(typeof ListAsyncInvokesCommand === "function");
assert(typeof ListAsyncInvokes$ === "object");
assert(typeof StartAsyncInvokeCommand === "function");
assert(typeof StartAsyncInvoke$ === "object");
// structural schemas
assert(typeof AnyToolChoice$ === "object");
assert(typeof AppliedGuardrailDetails$ === "object");
assert(typeof ApplyGuardrailRequest$ === "object");
assert(typeof ApplyGuardrailResponse$ === "object");
assert(typeof AsyncInvokeOutputDataConfig$ === "object");
assert(typeof AsyncInvokeS3OutputDataConfig$ === "object");
assert(typeof AsyncInvokeSummary$ === "object");
assert(typeof AudioBlock$ === "object");
assert(typeof AudioSource$ === "object");
assert(typeof AutoToolChoice$ === "object");
assert(typeof BidirectionalInputPayloadPart$ === "object");
assert(typeof BidirectionalOutputPayloadPart$ === "object");
assert(typeof CachePointBlock$ === "object");
assert(typeof Citation$ === "object");
assert(typeof CitationGeneratedContent$ === "object");
assert(typeof CitationLocation$ === "object");
assert(typeof CitationsConfig$ === "object");
assert(typeof CitationsContentBlock$ === "object");
assert(typeof CitationsDelta$ === "object");
assert(typeof CitationSourceContent$ === "object");
assert(typeof CitationSourceContentDelta$ === "object");
assert(typeof ContentBlock$ === "object");
assert(typeof ContentBlockDelta$ === "object");
assert(typeof ContentBlockDeltaEvent$ === "object");
assert(typeof ContentBlockStart$ === "object");
assert(typeof ContentBlockStartEvent$ === "object");
assert(typeof ContentBlockStopEvent$ === "object");
assert(typeof ConverseMetrics$ === "object");
assert(typeof ConverseOutput$ === "object");
assert(typeof ConverseRequest$ === "object");
assert(typeof ConverseResponse$ === "object");
assert(typeof ConverseStreamMetadataEvent$ === "object");
assert(typeof ConverseStreamMetrics$ === "object");
assert(typeof ConverseStreamOutput$ === "object");
assert(typeof ConverseStreamRequest$ === "object");
assert(typeof ConverseStreamResponse$ === "object");
assert(typeof ConverseStreamTrace$ === "object");
assert(typeof ConverseTokensRequest$ === "object");
assert(typeof ConverseTrace$ === "object");
assert(typeof CountTokensInput$ === "object");
assert(typeof CountTokensRequest$ === "object");
assert(typeof CountTokensResponse$ === "object");
assert(typeof DocumentBlock$ === "object");
assert(typeof DocumentCharLocation$ === "object");
assert(typeof DocumentChunkLocation$ === "object");
assert(typeof DocumentContentBlock$ === "object");
assert(typeof DocumentPageLocation$ === "object");
assert(typeof DocumentSource$ === "object");
assert(typeof ErrorBlock$ === "object");
assert(typeof GetAsyncInvokeRequest$ === "object");
assert(typeof GetAsyncInvokeResponse$ === "object");
assert(typeof GuardrailAssessment$ === "object");
assert(typeof GuardrailAutomatedReasoningFinding$ === "object");
assert(typeof GuardrailAutomatedReasoningImpossibleFinding$ === "object");
assert(typeof GuardrailAutomatedReasoningInputTextReference$ === "object");
assert(typeof GuardrailAutomatedReasoningInvalidFinding$ === "object");
assert(typeof GuardrailAutomatedReasoningLogicWarning$ === "object");
assert(typeof GuardrailAutomatedReasoningNoTranslationsFinding$ === "object");
assert(typeof GuardrailAutomatedReasoningPolicyAssessment$ === "object");
assert(typeof GuardrailAutomatedReasoningRule$ === "object");
assert(typeof GuardrailAutomatedReasoningSatisfiableFinding$ === "object");
assert(typeof GuardrailAutomatedReasoningScenario$ === "object");
assert(typeof GuardrailAutomatedReasoningStatement$ === "object");
assert(typeof GuardrailAutomatedReasoningTooComplexFinding$ === "object");
assert(typeof GuardrailAutomatedReasoningTranslation$ === "object");
assert(typeof GuardrailAutomatedReasoningTranslationAmbiguousFinding$ === "object");
assert(typeof GuardrailAutomatedReasoningTranslationOption$ === "object");
assert(typeof GuardrailAutomatedReasoningValidFinding$ === "object");
assert(typeof GuardrailConfiguration$ === "object");
assert(typeof GuardrailContentBlock$ === "object");
assert(typeof GuardrailContentFilter$ === "object");
assert(typeof GuardrailContentPolicyAssessment$ === "object");
assert(typeof GuardrailContextualGroundingFilter$ === "object");
assert(typeof GuardrailContextualGroundingPolicyAssessment$ === "object");
assert(typeof GuardrailConverseContentBlock$ === "object");
assert(typeof GuardrailConverseImageBlock$ === "object");
assert(typeof GuardrailConverseImageSource$ === "object");
assert(typeof GuardrailConverseTextBlock$ === "object");
assert(typeof GuardrailCoverage$ === "object");
assert(typeof GuardrailCustomWord$ === "object");
assert(typeof GuardrailImageBlock$ === "object");
assert(typeof GuardrailImageCoverage$ === "object");
assert(typeof GuardrailImageSource$ === "object");
assert(typeof GuardrailInvocationMetrics$ === "object");
assert(typeof GuardrailManagedWord$ === "object");
assert(typeof GuardrailOutputContent$ === "object");
assert(typeof GuardrailPiiEntityFilter$ === "object");
assert(typeof GuardrailRegexFilter$ === "object");
assert(typeof GuardrailSensitiveInformationPolicyAssessment$ === "object");
assert(typeof GuardrailStreamConfiguration$ === "object");
assert(typeof GuardrailTextBlock$ === "object");
assert(typeof GuardrailTextCharactersCoverage$ === "object");
assert(typeof GuardrailTopic$ === "object");
assert(typeof GuardrailTopicPolicyAssessment$ === "object");
assert(typeof GuardrailTraceAssessment$ === "object");
assert(typeof GuardrailUsage$ === "object");
assert(typeof GuardrailWordPolicyAssessment$ === "object");
assert(typeof ImageBlock$ === "object");
assert(typeof ImageBlockDelta$ === "object");
assert(typeof ImageBlockStart$ === "object");
assert(typeof ImageSource$ === "object");
assert(typeof InferenceConfiguration$ === "object");
assert(typeof InvokeModelRequest$ === "object");
assert(typeof InvokeModelResponse$ === "object");
assert(typeof InvokeModelTokensRequest$ === "object");
assert(typeof InvokeModelWithBidirectionalStreamInput$ === "object");
assert(typeof InvokeModelWithBidirectionalStreamOutput$ === "object");
assert(typeof InvokeModelWithBidirectionalStreamRequest$ === "object");
assert(typeof InvokeModelWithBidirectionalStreamResponse$ === "object");
assert(typeof InvokeModelWithResponseStreamRequest$ === "object");
assert(typeof InvokeModelWithResponseStreamResponse$ === "object");
assert(typeof ListAsyncInvokesRequest$ === "object");
assert(typeof ListAsyncInvokesResponse$ === "object");
assert(typeof Message$ === "object");
assert(typeof MessageStartEvent$ === "object");
assert(typeof MessageStopEvent$ === "object");
assert(typeof PayloadPart$ === "object");
assert(typeof PerformanceConfiguration$ === "object");
assert(typeof PromptRouterTrace$ === "object");
assert(typeof PromptVariableValues$ === "object");
assert(typeof ReasoningContentBlock$ === "object");
assert(typeof ReasoningContentBlockDelta$ === "object");
assert(typeof ReasoningTextBlock$ === "object");
assert(typeof ResponseStream$ === "object");
assert(typeof S3Location$ === "object");
assert(typeof SearchResultBlock$ === "object");
assert(typeof SearchResultContentBlock$ === "object");
assert(typeof SearchResultLocation$ === "object");
assert(typeof ServiceTier$ === "object");
assert(typeof SpecificToolChoice$ === "object");
assert(typeof StartAsyncInvokeRequest$ === "object");
assert(typeof StartAsyncInvokeResponse$ === "object");
assert(typeof SystemContentBlock$ === "object");
assert(typeof SystemTool$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TokenUsage$ === "object");
assert(typeof Tool$ === "object");
assert(typeof ToolChoice$ === "object");
assert(typeof ToolConfiguration$ === "object");
assert(typeof ToolInputSchema$ === "object");
assert(typeof ToolResultBlock$ === "object");
assert(typeof ToolResultBlockDelta$ === "object");
assert(typeof ToolResultBlockStart$ === "object");
assert(typeof ToolResultContentBlock$ === "object");
assert(typeof ToolSpecification$ === "object");
assert(typeof ToolUseBlock$ === "object");
assert(typeof ToolUseBlockDelta$ === "object");
assert(typeof ToolUseBlockStart$ === "object");
assert(typeof VideoBlock$ === "object");
assert(typeof VideoSource$ === "object");
assert(typeof WebLocation$ === "object");
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
assert(AccessDeniedException.prototype instanceof BedrockRuntimeServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof BedrockRuntimeServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof BedrockRuntimeServiceException);
assert(typeof InternalServerException$ === "object");
assert(ModelErrorException.prototype instanceof BedrockRuntimeServiceException);
assert(typeof ModelErrorException$ === "object");
assert(ModelNotReadyException.prototype instanceof BedrockRuntimeServiceException);
assert(typeof ModelNotReadyException$ === "object");
assert(ModelStreamErrorException.prototype instanceof BedrockRuntimeServiceException);
assert(typeof ModelStreamErrorException$ === "object");
assert(ModelTimeoutException.prototype instanceof BedrockRuntimeServiceException);
assert(typeof ModelTimeoutException$ === "object");
assert(ResourceNotFoundException.prototype instanceof BedrockRuntimeServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof BedrockRuntimeServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ServiceUnavailableException.prototype instanceof BedrockRuntimeServiceException);
assert(typeof ServiceUnavailableException$ === "object");
assert(ThrottlingException.prototype instanceof BedrockRuntimeServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof BedrockRuntimeServiceException);
assert(typeof ValidationException$ === "object");
assert(BedrockRuntimeServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAsyncInvokes === "function");
console.log(`BedrockRuntime index test passed.`);
