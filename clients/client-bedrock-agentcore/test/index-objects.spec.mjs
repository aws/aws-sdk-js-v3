import {
  A2aDescriptor$,
  ABTestEvaluationConfig$,
  ABTestExecutionStatus,
  ABTestResults$,
  ABTestStatus,
  ABTestSummary$,
  AccessDeniedException,
  AccessDeniedException$,
  ActorSummary$,
  AgentCardDefinition$,
  AgentSkillsDescriptor$,
  AgentTracesConfig$,
  Amount$,
  AutomationStream$,
  AutomationStreamStatus,
  AutomationStreamUpdate$,
  AvailableLimits$,
  BasicAuth$,
  BatchCreateMemoryRecords$,
  BatchCreateMemoryRecordsCommand,
  BatchCreateMemoryRecordsInput$,
  BatchCreateMemoryRecordsOutput$,
  BatchDeleteMemoryRecords$,
  BatchDeleteMemoryRecordsCommand,
  BatchDeleteMemoryRecordsInput$,
  BatchDeleteMemoryRecordsOutput$,
  BatchEvaluationStatus,
  BatchEvaluationSummary$,
  BatchUpdateMemoryRecords$,
  BatchUpdateMemoryRecordsCommand,
  BatchUpdateMemoryRecordsInput$,
  BatchUpdateMemoryRecordsOutput$,
  BedrockAgentCore,
  BedrockAgentCoreClient,
  BedrockAgentCoreServiceException,
  BlockchainChainId,
  Branch$,
  BranchFilter$,
  BrowserAction$,
  BrowserActionResult$,
  BrowserActionStatus,
  BrowserEnterprisePolicy$,
  BrowserEnterprisePolicyType,
  BrowserExtension$,
  BrowserProfileConfiguration$,
  BrowserSessionStatus,
  BrowserSessionStream$,
  BrowserSessionSummary$,
  Certificate$,
  CertificateLocation$,
  CloudWatchFilterConfig$,
  CloudWatchLogsFilter$,
  CloudWatchLogsFilterOperator,
  CloudWatchLogsRule$,
  CloudWatchLogsSource$,
  CloudWatchLogsTraceConfig$,
  CloudWatchOutputConfig$,
  CodeInterpreterResult$,
  CodeInterpreterSessionStatus,
  CodeInterpreterSessionSummary$,
  CodeInterpreterStreamOutput$,
  CoinbaseCdpTokenRequestInput$,
  CoinbaseCdpTokenResponseOutput$,
  CommandExecutionStatus,
  CompleteResourceTokenAuth$,
  CompleteResourceTokenAuthCommand,
  CompleteResourceTokenAuthRequest$,
  CompleteResourceTokenAuthResponse$,
  ConfidenceInterval$,
  ConfigurationBundleRef$,
  ConfigurationBundleToolEntry$,
  ConflictException,
  ConflictException$,
  Content$,
  ContentBlock$,
  ContentBlockType,
  ContentDeltaEvent$,
  ContentStartEvent$,
  ContentStopEvent$,
  Context$,
  ControlStats$,
  Conversational$,
  CreateABTest$,
  CreateABTestCommand,
  CreateABTestRequest$,
  CreateABTestResponse$,
  CreateEvent$,
  CreateEventCommand,
  CreateEventInput$,
  CreateEventOutput$,
  CreatePaymentInstrument$,
  CreatePaymentInstrumentCommand,
  CreatePaymentInstrumentRequest$,
  CreatePaymentInstrumentResponse$,
  CreatePaymentSession$,
  CreatePaymentSessionCommand,
  CreatePaymentSessionRequest$,
  CreatePaymentSessionResponse$,
  CryptoWalletNetwork,
  CryptoX402PaymentInput$,
  CryptoX402PaymentOutput$,
  Currency,
  CustomDescriptor$,
  DataSourceConfig$,
  DeleteABTest$,
  DeleteABTestCommand,
  DeleteABTestRequest$,
  DeleteABTestResponse$,
  DeleteBatchEvaluation$,
  DeleteBatchEvaluationCommand,
  DeleteBatchEvaluationRequest$,
  DeleteBatchEvaluationResponse$,
  DeleteEvent$,
  DeleteEventCommand,
  DeleteEventInput$,
  DeleteEventOutput$,
  DeleteMemoryRecord$,
  DeleteMemoryRecordCommand,
  DeleteMemoryRecordInput$,
  DeleteMemoryRecordOutput$,
  DeletePaymentInstrument$,
  DeletePaymentInstrumentCommand,
  DeletePaymentInstrumentRequest$,
  DeletePaymentInstrumentResponse$,
  DeletePaymentSession$,
  DeletePaymentSessionCommand,
  DeletePaymentSessionRequest$,
  DeletePaymentSessionResponse$,
  DeleteRecommendation$,
  DeleteRecommendationCommand,
  DeleteRecommendationRequest$,
  DeleteRecommendationResponse$,
  Descriptors$,
  DescriptorType,
  DuplicateIdException,
  DuplicateIdException$,
  EmbeddedCryptoWallet$,
  Evaluate$,
  EvaluateCommand,
  EvaluateRequest$,
  EvaluateResponse$,
  EvaluationContent$,
  EvaluationExpectedTrajectory$,
  EvaluationInput$,
  EvaluationJobResults$,
  EvaluationMetadata$,
  EvaluationReferenceInput$,
  EvaluationResultContent$,
  EvaluationTarget$,
  Evaluator$,
  EvaluatorMetric$,
  EvaluatorStatistics$,
  EvaluatorSummary$,
  Event$,
  EventFilterCondition,
  EventMetadataFilterExpression$,
  ExternalProxy$,
  ExtractionJob$,
  ExtractionJobFilterInput$,
  ExtractionJobMessages$,
  ExtractionJobMetadata$,
  ExtractionJobStatus,
  FilterInput$,
  FilterValue$,
  GatewayFilter$,
  GetABTest$,
  GetABTestCommand,
  GetABTestRequest$,
  GetABTestResponse$,
  GetAgentCard$,
  GetAgentCardCommand,
  GetAgentCardRequest$,
  GetAgentCardResponse$,
  GetBatchEvaluation$,
  GetBatchEvaluationCommand,
  GetBatchEvaluationRequest$,
  GetBatchEvaluationResponse$,
  GetBrowserSession$,
  GetBrowserSessionCommand,
  GetBrowserSessionRequest$,
  GetBrowserSessionResponse$,
  GetCodeInterpreterSession$,
  GetCodeInterpreterSessionCommand,
  GetCodeInterpreterSessionRequest$,
  GetCodeInterpreterSessionResponse$,
  GetEvent$,
  GetEventCommand,
  GetEventInput$,
  GetEventOutput$,
  GetMemoryRecord$,
  GetMemoryRecordCommand,
  GetMemoryRecordInput$,
  GetMemoryRecordOutput$,
  GetPaymentInstrument$,
  GetPaymentInstrumentBalance$,
  GetPaymentInstrumentBalanceCommand,
  GetPaymentInstrumentBalanceRequest$,
  GetPaymentInstrumentBalanceResponse$,
  GetPaymentInstrumentCommand,
  GetPaymentInstrumentRequest$,
  GetPaymentInstrumentResponse$,
  GetPaymentSession$,
  GetPaymentSessionCommand,
  GetPaymentSessionRequest$,
  GetPaymentSessionResponse$,
  GetRecommendation$,
  GetRecommendationCommand,
  GetRecommendationRequest$,
  GetRecommendationResponse$,
  GetResourceApiKey$,
  GetResourceApiKeyCommand,
  GetResourceApiKeyRequest$,
  GetResourceApiKeyResponse$,
  GetResourceOauth2Token$,
  GetResourceOauth2TokenCommand,
  GetResourceOauth2TokenRequest$,
  GetResourceOauth2TokenResponse$,
  GetResourcePaymentToken$,
  GetResourcePaymentTokenCommand,
  GetResourcePaymentTokenRequest$,
  GetResourcePaymentTokenResponse$,
  GetWorkloadAccessToken$,
  GetWorkloadAccessTokenCommand,
  GetWorkloadAccessTokenForJWT$,
  GetWorkloadAccessTokenForJWTCommand,
  GetWorkloadAccessTokenForJWTRequest$,
  GetWorkloadAccessTokenForJWTResponse$,
  GetWorkloadAccessTokenForUserId$,
  GetWorkloadAccessTokenForUserIdCommand,
  GetWorkloadAccessTokenForUserIdRequest$,
  GetWorkloadAccessTokenForUserIdResponse$,
  GetWorkloadAccessTokenRequest$,
  GetWorkloadAccessTokenResponse$,
  GroundTruthSource$,
  GroundTruthTurn$,
  GroundTruthTurnInput$,
  HarnessAgentCoreBrowserConfig$,
  HarnessAgentCoreCodeInterpreterConfig$,
  HarnessAgentCoreGatewayConfig$,
  HarnessBedrockApiFormat,
  HarnessBedrockModelConfig$,
  HarnessContentBlock$,
  HarnessContentBlockDelta$,
  HarnessContentBlockDeltaEvent$,
  HarnessContentBlockStart$,
  HarnessContentBlockStartEvent$,
  HarnessContentBlockStopEvent$,
  HarnessConversationRole,
  HarnessGatewayOutboundAuth$,
  HarnessGeminiModelConfig$,
  HarnessInlineFunctionConfig$,
  HarnessLiteLlmModelConfig$,
  HarnessMessage$,
  HarnessMessageStartEvent$,
  HarnessMessageStopEvent$,
  HarnessMetadataEvent$,
  HarnessModelConfiguration$,
  HarnessOpenAiApiFormat,
  HarnessOpenAiModelConfig$,
  HarnessReasoningContentBlock$,
  HarnessReasoningContentBlockDelta$,
  HarnessReasoningTextBlock$,
  HarnessRemoteMcpConfig$,
  HarnessSkill$,
  HarnessSkillGitAuth$,
  HarnessSkillGitSource$,
  HarnessSkillS3Source$,
  HarnessStopReason,
  HarnessStreamMetrics$,
  HarnessSystemContentBlock$,
  HarnessTokenUsage$,
  HarnessTool$,
  HarnessToolConfiguration$,
  HarnessToolResultBlock$,
  HarnessToolResultBlockDelta$,
  HarnessToolResultBlockStart$,
  HarnessToolResultContentBlock$,
  HarnessToolType,
  HarnessToolUseBlock$,
  HarnessToolUseBlockDelta$,
  HarnessToolUseBlockStart$,
  HarnessToolUseStatus,
  HarnessToolUseType,
  InlineGroundTruth$,
  InputContentBlock$,
  InstrumentBalanceToken,
  InternalServerException,
  InternalServerException$,
  InvalidInputException,
  InvalidInputException$,
  InvokeAgentRuntime$,
  InvokeAgentRuntimeCommand,
  InvokeAgentRuntimeCommand$,
  InvokeAgentRuntimeCommandCommand,
  InvokeAgentRuntimeCommandRequest$,
  InvokeAgentRuntimeCommandRequestBody$,
  InvokeAgentRuntimeCommandResponse$,
  InvokeAgentRuntimeCommandStreamOutput$,
  InvokeAgentRuntimeRequest$,
  InvokeAgentRuntimeResponse$,
  InvokeBrowser$,
  InvokeBrowserCommand,
  InvokeBrowserRequest$,
  InvokeBrowserResponse$,
  InvokeCodeInterpreter$,
  InvokeCodeInterpreterCommand,
  InvokeCodeInterpreterRequest$,
  InvokeCodeInterpreterResponse$,
  InvokeHarness$,
  InvokeHarnessCommand,
  InvokeHarnessRequest$,
  InvokeHarnessResponse$,
  InvokeHarnessStreamOutput$,
  KeyPressArguments$,
  KeyPressResult$,
  KeyShortcutArguments$,
  KeyShortcutResult$,
  KeyTypeArguments$,
  KeyTypeResult$,
  LanguageRuntime,
  LeftExpression$,
  LinkedAccount$,
  LinkedAccountDeveloperJwt$,
  LinkedAccountEmail$,
  LinkedAccountOAuth2$,
  LinkedAccountSms$,
  ListABTests$,
  ListABTestsCommand,
  ListABTestsRequest$,
  ListABTestsResponse$,
  ListActors$,
  ListActorsCommand,
  ListActorsInput$,
  ListActorsOutput$,
  ListBatchEvaluations$,
  ListBatchEvaluationsCommand,
  ListBatchEvaluationsRequest$,
  ListBatchEvaluationsResponse$,
  ListBrowserSessions$,
  ListBrowserSessionsCommand,
  ListBrowserSessionsRequest$,
  ListBrowserSessionsResponse$,
  ListCodeInterpreterSessions$,
  ListCodeInterpreterSessionsCommand,
  ListCodeInterpreterSessionsRequest$,
  ListCodeInterpreterSessionsResponse$,
  ListEvents$,
  ListEventsCommand,
  ListEventsInput$,
  ListEventsOutput$,
  ListMemoryExtractionJobs$,
  ListMemoryExtractionJobsCommand,
  ListMemoryExtractionJobsInput$,
  ListMemoryExtractionJobsOutput$,
  ListMemoryRecords$,
  ListMemoryRecordsCommand,
  ListMemoryRecordsInput$,
  ListMemoryRecordsOutput$,
  ListPaymentInstruments$,
  ListPaymentInstrumentsCommand,
  ListPaymentInstrumentsRequest$,
  ListPaymentInstrumentsResponse$,
  ListPaymentSessions$,
  ListPaymentSessionsCommand,
  ListPaymentSessionsRequest$,
  ListPaymentSessionsResponse$,
  ListRecommendations$,
  ListRecommendationsCommand,
  ListRecommendationsRequest$,
  ListRecommendationsResponse$,
  ListSessions$,
  ListSessionsCommand,
  ListSessionsInput$,
  ListSessionsOutput$,
  LiveViewStream$,
  McpDescriptor$,
  MemoryContent$,
  MemoryMetadataFilterExpression$,
  MemoryRecord$,
  MemoryRecordCreateInput$,
  MemoryRecordDeleteInput$,
  MemoryRecordLeftExpression$,
  MemoryRecordMetadataValue$,
  MemoryRecordOperatorType,
  MemoryRecordOutput$,
  MemoryRecordRightExpression$,
  MemoryRecordStatus,
  MemoryRecordSummary$,
  MemoryRecordUpdateInput$,
  MessageMetadata$,
  MetadataValue$,
  MouseButton,
  MouseClickArguments$,
  MouseClickResult$,
  MouseDragArguments$,
  MouseDragResult$,
  MouseMoveArguments$,
  MouseMoveResult$,
  MouseScrollArguments$,
  MouseScrollResult$,
  OAuth2Authentication$,
  Oauth2FlowType,
  OAuthCredentialProvider$,
  OAuthGrantType,
  OperatorType,
  OutputConfig$,
  paginateListABTests,
  paginateListActors,
  paginateListBatchEvaluations,
  paginateListEvents,
  paginateListMemoryExtractionJobs,
  paginateListMemoryRecords,
  paginateListPaymentInstruments,
  paginateListPaymentSessions,
  paginateListRecommendations,
  paginateListSessions,
  paginateRetrieveMemoryRecords,
  PayloadType$,
  PaymentHttpMethodType,
  PaymentInput$,
  PaymentInstrument$,
  PaymentInstrumentDetails$,
  PaymentInstrumentStatus,
  PaymentInstrumentSummary$,
  PaymentInstrumentType,
  PaymentOutput$,
  PaymentSession$,
  PaymentSessionStatus,
  PaymentSessionSummary$,
  PaymentStatus,
  PaymentTokenRequestInput$,
  PaymentTokenResponseOutput$,
  PaymentType,
  PerVariantOnlineEvaluationConfig$,
  ProcessPayment$,
  ProcessPaymentCommand,
  ProcessPaymentRequest$,
  ProcessPaymentResponse$,
  ProgrammingLanguage,
  Proxy$,
  ProxyBypass$,
  ProxyConfiguration$,
  ProxyCredentials$,
  RecommendationConfig$,
  RecommendationEvaluationConfig$,
  RecommendationEvaluatorReference$,
  RecommendationResult$,
  RecommendationResultConfigurationBundle$,
  RecommendationStatus,
  RecommendationSummary$,
  RecommendationType,
  RegistryRecordStatus,
  RegistryRecordSummary$,
  ResourceContent$,
  ResourceContentType,
  ResourceLocation$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResponseChunk$,
  RetrieveMemoryRecords$,
  RetrieveMemoryRecordsCommand,
  RetrieveMemoryRecordsInput$,
  RetrieveMemoryRecordsOutput$,
  RetryableConflictException,
  RetryableConflictException$,
  RightExpression$,
  Role,
  RuntimeClientError,
  RuntimeClientError$,
  S3Location$,
  SaveBrowserSessionProfile$,
  SaveBrowserSessionProfileCommand,
  SaveBrowserSessionProfileRequest$,
  SaveBrowserSessionProfileResponse$,
  ScreenshotArguments$,
  ScreenshotFormat,
  ScreenshotResult$,
  SearchCriteria$,
  SearchRegistryRecords$,
  SearchRegistryRecordsCommand,
  SearchRegistryRecordsRequest$,
  SearchRegistryRecordsResponse$,
  SecretsManagerLocation$,
  ServerDefinition$,
  ServiceException,
  ServiceException$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SessionFilter$,
  SessionFilterConfig$,
  SessionLimits$,
  SessionMetadataShape$,
  SessionStatus,
  SessionSummary$,
  SkillDefinition$,
  SkillMdDefinition$,
  SpanContext$,
  StartBatchEvaluation$,
  StartBatchEvaluationCommand,
  StartBatchEvaluationRequest$,
  StartBatchEvaluationResponse$,
  StartBrowserSession$,
  StartBrowserSessionCommand,
  StartBrowserSessionRequest$,
  StartBrowserSessionResponse$,
  StartCodeInterpreterSession$,
  StartCodeInterpreterSessionCommand,
  StartCodeInterpreterSessionRequest$,
  StartCodeInterpreterSessionResponse$,
  StartMemoryExtractionJob$,
  StartMemoryExtractionJobCommand,
  StartMemoryExtractionJobInput$,
  StartMemoryExtractionJobOutput$,
  StartRecommendation$,
  StartRecommendationCommand,
  StartRecommendationRequest$,
  StartRecommendationResponse$,
  StopBatchEvaluation$,
  StopBatchEvaluationCommand,
  StopBatchEvaluationRequest$,
  StopBatchEvaluationResponse$,
  StopBrowserSession$,
  StopBrowserSessionCommand,
  StopBrowserSessionRequest$,
  StopBrowserSessionResponse$,
  StopCodeInterpreterSession$,
  StopCodeInterpreterSessionCommand,
  StopCodeInterpreterSessionRequest$,
  StopCodeInterpreterSessionResponse$,
  StopRuntimeSession$,
  StopRuntimeSessionCommand,
  StopRuntimeSessionRequest$,
  StopRuntimeSessionResponse$,
  StreamUpdate$,
  StripePrivyTokenRequestInput$,
  StripePrivyTokenResponseOutput$,
  SystemPromptConfig$,
  SystemPromptConfigurationBundle$,
  SystemPromptRecommendationConfig$,
  SystemPromptRecommendationResult$,
  TargetRef$,
  TaskStatus,
  ThrottledException,
  ThrottledException$,
  ThrottlingException,
  ThrottlingException$,
  TokenBalance$,
  TokenUsage$,
  ToolArguments$,
  ToolDescriptionConfig$,
  ToolDescriptionConfigurationBundle$,
  ToolDescriptionInput$,
  ToolDescriptionOutput$,
  ToolDescriptionRecommendationConfig$,
  ToolDescriptionRecommendationResult$,
  ToolDescriptionSource$,
  ToolDescriptionTextInput$,
  ToolName,
  ToolResultStructuredContent$,
  ToolsDefinition$,
  UnauthorizedException,
  UnauthorizedException$,
  UpdateABTest$,
  UpdateABTestCommand,
  UpdateABTestRequest$,
  UpdateABTestResponse$,
  UpdateBrowserStream$,
  UpdateBrowserStreamCommand,
  UpdateBrowserStreamRequest$,
  UpdateBrowserStreamResponse$,
  UserIdentifier$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
  Variant$,
  VariantConfiguration$,
  VariantResult$,
  ViewPort$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof BedrockAgentCoreClient === "function");
assert(typeof BedrockAgentCore === "function");
// commands
assert(typeof BatchCreateMemoryRecordsCommand === "function");
assert(typeof BatchCreateMemoryRecords$ === "object");
assert(typeof BatchDeleteMemoryRecordsCommand === "function");
assert(typeof BatchDeleteMemoryRecords$ === "object");
assert(typeof BatchUpdateMemoryRecordsCommand === "function");
assert(typeof BatchUpdateMemoryRecords$ === "object");
assert(typeof CompleteResourceTokenAuthCommand === "function");
assert(typeof CompleteResourceTokenAuth$ === "object");
assert(typeof CreateABTestCommand === "function");
assert(typeof CreateABTest$ === "object");
assert(typeof CreateEventCommand === "function");
assert(typeof CreateEvent$ === "object");
assert(typeof CreatePaymentInstrumentCommand === "function");
assert(typeof CreatePaymentInstrument$ === "object");
assert(typeof CreatePaymentSessionCommand === "function");
assert(typeof CreatePaymentSession$ === "object");
assert(typeof DeleteABTestCommand === "function");
assert(typeof DeleteABTest$ === "object");
assert(typeof DeleteBatchEvaluationCommand === "function");
assert(typeof DeleteBatchEvaluation$ === "object");
assert(typeof DeleteEventCommand === "function");
assert(typeof DeleteEvent$ === "object");
assert(typeof DeleteMemoryRecordCommand === "function");
assert(typeof DeleteMemoryRecord$ === "object");
assert(typeof DeletePaymentInstrumentCommand === "function");
assert(typeof DeletePaymentInstrument$ === "object");
assert(typeof DeletePaymentSessionCommand === "function");
assert(typeof DeletePaymentSession$ === "object");
assert(typeof DeleteRecommendationCommand === "function");
assert(typeof DeleteRecommendation$ === "object");
assert(typeof EvaluateCommand === "function");
assert(typeof Evaluate$ === "object");
assert(typeof GetABTestCommand === "function");
assert(typeof GetABTest$ === "object");
assert(typeof GetAgentCardCommand === "function");
assert(typeof GetAgentCard$ === "object");
assert(typeof GetBatchEvaluationCommand === "function");
assert(typeof GetBatchEvaluation$ === "object");
assert(typeof GetBrowserSessionCommand === "function");
assert(typeof GetBrowserSession$ === "object");
assert(typeof GetCodeInterpreterSessionCommand === "function");
assert(typeof GetCodeInterpreterSession$ === "object");
assert(typeof GetEventCommand === "function");
assert(typeof GetEvent$ === "object");
assert(typeof GetMemoryRecordCommand === "function");
assert(typeof GetMemoryRecord$ === "object");
assert(typeof GetPaymentInstrumentCommand === "function");
assert(typeof GetPaymentInstrument$ === "object");
assert(typeof GetPaymentInstrumentBalanceCommand === "function");
assert(typeof GetPaymentInstrumentBalance$ === "object");
assert(typeof GetPaymentSessionCommand === "function");
assert(typeof GetPaymentSession$ === "object");
assert(typeof GetRecommendationCommand === "function");
assert(typeof GetRecommendation$ === "object");
assert(typeof GetResourceApiKeyCommand === "function");
assert(typeof GetResourceApiKey$ === "object");
assert(typeof GetResourceOauth2TokenCommand === "function");
assert(typeof GetResourceOauth2Token$ === "object");
assert(typeof GetResourcePaymentTokenCommand === "function");
assert(typeof GetResourcePaymentToken$ === "object");
assert(typeof GetWorkloadAccessTokenCommand === "function");
assert(typeof GetWorkloadAccessToken$ === "object");
assert(typeof GetWorkloadAccessTokenForJWTCommand === "function");
assert(typeof GetWorkloadAccessTokenForJWT$ === "object");
assert(typeof GetWorkloadAccessTokenForUserIdCommand === "function");
assert(typeof GetWorkloadAccessTokenForUserId$ === "object");
assert(typeof InvokeAgentRuntimeCommand === "function");
assert(typeof InvokeAgentRuntime$ === "object");
assert(typeof InvokeAgentRuntimeCommandCommand === "function");
assert(typeof InvokeAgentRuntimeCommand$ === "object");
assert(typeof InvokeBrowserCommand === "function");
assert(typeof InvokeBrowser$ === "object");
assert(typeof InvokeCodeInterpreterCommand === "function");
assert(typeof InvokeCodeInterpreter$ === "object");
assert(typeof InvokeHarnessCommand === "function");
assert(typeof InvokeHarness$ === "object");
assert(typeof ListABTestsCommand === "function");
assert(typeof ListABTests$ === "object");
assert(typeof ListActorsCommand === "function");
assert(typeof ListActors$ === "object");
assert(typeof ListBatchEvaluationsCommand === "function");
assert(typeof ListBatchEvaluations$ === "object");
assert(typeof ListBrowserSessionsCommand === "function");
assert(typeof ListBrowserSessions$ === "object");
assert(typeof ListCodeInterpreterSessionsCommand === "function");
assert(typeof ListCodeInterpreterSessions$ === "object");
assert(typeof ListEventsCommand === "function");
assert(typeof ListEvents$ === "object");
assert(typeof ListMemoryExtractionJobsCommand === "function");
assert(typeof ListMemoryExtractionJobs$ === "object");
assert(typeof ListMemoryRecordsCommand === "function");
assert(typeof ListMemoryRecords$ === "object");
assert(typeof ListPaymentInstrumentsCommand === "function");
assert(typeof ListPaymentInstruments$ === "object");
assert(typeof ListPaymentSessionsCommand === "function");
assert(typeof ListPaymentSessions$ === "object");
assert(typeof ListRecommendationsCommand === "function");
assert(typeof ListRecommendations$ === "object");
assert(typeof ListSessionsCommand === "function");
assert(typeof ListSessions$ === "object");
assert(typeof ProcessPaymentCommand === "function");
assert(typeof ProcessPayment$ === "object");
assert(typeof RetrieveMemoryRecordsCommand === "function");
assert(typeof RetrieveMemoryRecords$ === "object");
assert(typeof SaveBrowserSessionProfileCommand === "function");
assert(typeof SaveBrowserSessionProfile$ === "object");
assert(typeof SearchRegistryRecordsCommand === "function");
assert(typeof SearchRegistryRecords$ === "object");
assert(typeof StartBatchEvaluationCommand === "function");
assert(typeof StartBatchEvaluation$ === "object");
assert(typeof StartBrowserSessionCommand === "function");
assert(typeof StartBrowserSession$ === "object");
assert(typeof StartCodeInterpreterSessionCommand === "function");
assert(typeof StartCodeInterpreterSession$ === "object");
assert(typeof StartMemoryExtractionJobCommand === "function");
assert(typeof StartMemoryExtractionJob$ === "object");
assert(typeof StartRecommendationCommand === "function");
assert(typeof StartRecommendation$ === "object");
assert(typeof StopBatchEvaluationCommand === "function");
assert(typeof StopBatchEvaluation$ === "object");
assert(typeof StopBrowserSessionCommand === "function");
assert(typeof StopBrowserSession$ === "object");
assert(typeof StopCodeInterpreterSessionCommand === "function");
assert(typeof StopCodeInterpreterSession$ === "object");
assert(typeof StopRuntimeSessionCommand === "function");
assert(typeof StopRuntimeSession$ === "object");
assert(typeof UpdateABTestCommand === "function");
assert(typeof UpdateABTest$ === "object");
assert(typeof UpdateBrowserStreamCommand === "function");
assert(typeof UpdateBrowserStream$ === "object");
// structural schemas
assert(typeof A2aDescriptor$ === "object");
assert(typeof ABTestEvaluationConfig$ === "object");
assert(typeof ABTestResults$ === "object");
assert(typeof ABTestSummary$ === "object");
assert(typeof ActorSummary$ === "object");
assert(typeof AgentCardDefinition$ === "object");
assert(typeof AgentSkillsDescriptor$ === "object");
assert(typeof AgentTracesConfig$ === "object");
assert(typeof Amount$ === "object");
assert(typeof AutomationStream$ === "object");
assert(typeof AutomationStreamUpdate$ === "object");
assert(typeof AvailableLimits$ === "object");
assert(typeof BasicAuth$ === "object");
assert(typeof BatchCreateMemoryRecordsInput$ === "object");
assert(typeof BatchCreateMemoryRecordsOutput$ === "object");
assert(typeof BatchDeleteMemoryRecordsInput$ === "object");
assert(typeof BatchDeleteMemoryRecordsOutput$ === "object");
assert(typeof BatchEvaluationSummary$ === "object");
assert(typeof BatchUpdateMemoryRecordsInput$ === "object");
assert(typeof BatchUpdateMemoryRecordsOutput$ === "object");
assert(typeof Branch$ === "object");
assert(typeof BranchFilter$ === "object");
assert(typeof BrowserAction$ === "object");
assert(typeof BrowserActionResult$ === "object");
assert(typeof BrowserEnterprisePolicy$ === "object");
assert(typeof BrowserExtension$ === "object");
assert(typeof BrowserProfileConfiguration$ === "object");
assert(typeof BrowserSessionStream$ === "object");
assert(typeof BrowserSessionSummary$ === "object");
assert(typeof Certificate$ === "object");
assert(typeof CertificateLocation$ === "object");
assert(typeof CloudWatchFilterConfig$ === "object");
assert(typeof CloudWatchLogsFilter$ === "object");
assert(typeof CloudWatchLogsRule$ === "object");
assert(typeof CloudWatchLogsSource$ === "object");
assert(typeof CloudWatchLogsTraceConfig$ === "object");
assert(typeof CloudWatchOutputConfig$ === "object");
assert(typeof CodeInterpreterResult$ === "object");
assert(typeof CodeInterpreterSessionSummary$ === "object");
assert(typeof CodeInterpreterStreamOutput$ === "object");
assert(typeof CoinbaseCdpTokenRequestInput$ === "object");
assert(typeof CoinbaseCdpTokenResponseOutput$ === "object");
assert(typeof CompleteResourceTokenAuthRequest$ === "object");
assert(typeof CompleteResourceTokenAuthResponse$ === "object");
assert(typeof ConfidenceInterval$ === "object");
assert(typeof ConfigurationBundleRef$ === "object");
assert(typeof ConfigurationBundleToolEntry$ === "object");
assert(typeof Content$ === "object");
assert(typeof ContentBlock$ === "object");
assert(typeof ContentDeltaEvent$ === "object");
assert(typeof ContentStartEvent$ === "object");
assert(typeof ContentStopEvent$ === "object");
assert(typeof Context$ === "object");
assert(typeof ControlStats$ === "object");
assert(typeof Conversational$ === "object");
assert(typeof CreateABTestRequest$ === "object");
assert(typeof CreateABTestResponse$ === "object");
assert(typeof CreateEventInput$ === "object");
assert(typeof CreateEventOutput$ === "object");
assert(typeof CreatePaymentInstrumentRequest$ === "object");
assert(typeof CreatePaymentInstrumentResponse$ === "object");
assert(typeof CreatePaymentSessionRequest$ === "object");
assert(typeof CreatePaymentSessionResponse$ === "object");
assert(typeof CryptoX402PaymentInput$ === "object");
assert(typeof CryptoX402PaymentOutput$ === "object");
assert(typeof CustomDescriptor$ === "object");
assert(typeof DataSourceConfig$ === "object");
assert(typeof DeleteABTestRequest$ === "object");
assert(typeof DeleteABTestResponse$ === "object");
assert(typeof DeleteBatchEvaluationRequest$ === "object");
assert(typeof DeleteBatchEvaluationResponse$ === "object");
assert(typeof DeleteEventInput$ === "object");
assert(typeof DeleteEventOutput$ === "object");
assert(typeof DeleteMemoryRecordInput$ === "object");
assert(typeof DeleteMemoryRecordOutput$ === "object");
assert(typeof DeletePaymentInstrumentRequest$ === "object");
assert(typeof DeletePaymentInstrumentResponse$ === "object");
assert(typeof DeletePaymentSessionRequest$ === "object");
assert(typeof DeletePaymentSessionResponse$ === "object");
assert(typeof DeleteRecommendationRequest$ === "object");
assert(typeof DeleteRecommendationResponse$ === "object");
assert(typeof Descriptors$ === "object");
assert(typeof EmbeddedCryptoWallet$ === "object");
assert(typeof EvaluateRequest$ === "object");
assert(typeof EvaluateResponse$ === "object");
assert(typeof EvaluationContent$ === "object");
assert(typeof EvaluationExpectedTrajectory$ === "object");
assert(typeof EvaluationInput$ === "object");
assert(typeof EvaluationJobResults$ === "object");
assert(typeof EvaluationMetadata$ === "object");
assert(typeof EvaluationReferenceInput$ === "object");
assert(typeof EvaluationResultContent$ === "object");
assert(typeof EvaluationTarget$ === "object");
assert(typeof Evaluator$ === "object");
assert(typeof EvaluatorMetric$ === "object");
assert(typeof EvaluatorStatistics$ === "object");
assert(typeof EvaluatorSummary$ === "object");
assert(typeof Event$ === "object");
assert(typeof EventMetadataFilterExpression$ === "object");
assert(typeof ExternalProxy$ === "object");
assert(typeof ExtractionJob$ === "object");
assert(typeof ExtractionJobFilterInput$ === "object");
assert(typeof ExtractionJobMessages$ === "object");
assert(typeof ExtractionJobMetadata$ === "object");
assert(typeof FilterInput$ === "object");
assert(typeof FilterValue$ === "object");
assert(typeof GatewayFilter$ === "object");
assert(typeof GetABTestRequest$ === "object");
assert(typeof GetABTestResponse$ === "object");
assert(typeof GetAgentCardRequest$ === "object");
assert(typeof GetAgentCardResponse$ === "object");
assert(typeof GetBatchEvaluationRequest$ === "object");
assert(typeof GetBatchEvaluationResponse$ === "object");
assert(typeof GetBrowserSessionRequest$ === "object");
assert(typeof GetBrowserSessionResponse$ === "object");
assert(typeof GetCodeInterpreterSessionRequest$ === "object");
assert(typeof GetCodeInterpreterSessionResponse$ === "object");
assert(typeof GetEventInput$ === "object");
assert(typeof GetEventOutput$ === "object");
assert(typeof GetMemoryRecordInput$ === "object");
assert(typeof GetMemoryRecordOutput$ === "object");
assert(typeof GetPaymentInstrumentBalanceRequest$ === "object");
assert(typeof GetPaymentInstrumentBalanceResponse$ === "object");
assert(typeof GetPaymentInstrumentRequest$ === "object");
assert(typeof GetPaymentInstrumentResponse$ === "object");
assert(typeof GetPaymentSessionRequest$ === "object");
assert(typeof GetPaymentSessionResponse$ === "object");
assert(typeof GetRecommendationRequest$ === "object");
assert(typeof GetRecommendationResponse$ === "object");
assert(typeof GetResourceApiKeyRequest$ === "object");
assert(typeof GetResourceApiKeyResponse$ === "object");
assert(typeof GetResourceOauth2TokenRequest$ === "object");
assert(typeof GetResourceOauth2TokenResponse$ === "object");
assert(typeof GetResourcePaymentTokenRequest$ === "object");
assert(typeof GetResourcePaymentTokenResponse$ === "object");
assert(typeof GetWorkloadAccessTokenForJWTRequest$ === "object");
assert(typeof GetWorkloadAccessTokenForJWTResponse$ === "object");
assert(typeof GetWorkloadAccessTokenForUserIdRequest$ === "object");
assert(typeof GetWorkloadAccessTokenForUserIdResponse$ === "object");
assert(typeof GetWorkloadAccessTokenRequest$ === "object");
assert(typeof GetWorkloadAccessTokenResponse$ === "object");
assert(typeof GroundTruthSource$ === "object");
assert(typeof GroundTruthTurn$ === "object");
assert(typeof GroundTruthTurnInput$ === "object");
assert(typeof HarnessAgentCoreBrowserConfig$ === "object");
assert(typeof HarnessAgentCoreCodeInterpreterConfig$ === "object");
assert(typeof HarnessAgentCoreGatewayConfig$ === "object");
assert(typeof HarnessBedrockModelConfig$ === "object");
assert(typeof HarnessContentBlock$ === "object");
assert(typeof HarnessContentBlockDelta$ === "object");
assert(typeof HarnessContentBlockDeltaEvent$ === "object");
assert(typeof HarnessContentBlockStart$ === "object");
assert(typeof HarnessContentBlockStartEvent$ === "object");
assert(typeof HarnessContentBlockStopEvent$ === "object");
assert(typeof HarnessGatewayOutboundAuth$ === "object");
assert(typeof HarnessGeminiModelConfig$ === "object");
assert(typeof HarnessInlineFunctionConfig$ === "object");
assert(typeof HarnessLiteLlmModelConfig$ === "object");
assert(typeof HarnessMessage$ === "object");
assert(typeof HarnessMessageStartEvent$ === "object");
assert(typeof HarnessMessageStopEvent$ === "object");
assert(typeof HarnessMetadataEvent$ === "object");
assert(typeof HarnessModelConfiguration$ === "object");
assert(typeof HarnessOpenAiModelConfig$ === "object");
assert(typeof HarnessReasoningContentBlock$ === "object");
assert(typeof HarnessReasoningContentBlockDelta$ === "object");
assert(typeof HarnessReasoningTextBlock$ === "object");
assert(typeof HarnessRemoteMcpConfig$ === "object");
assert(typeof HarnessSkill$ === "object");
assert(typeof HarnessSkillGitAuth$ === "object");
assert(typeof HarnessSkillGitSource$ === "object");
assert(typeof HarnessSkillS3Source$ === "object");
assert(typeof HarnessStreamMetrics$ === "object");
assert(typeof HarnessSystemContentBlock$ === "object");
assert(typeof HarnessTokenUsage$ === "object");
assert(typeof HarnessTool$ === "object");
assert(typeof HarnessToolConfiguration$ === "object");
assert(typeof HarnessToolResultBlock$ === "object");
assert(typeof HarnessToolResultBlockDelta$ === "object");
assert(typeof HarnessToolResultBlockStart$ === "object");
assert(typeof HarnessToolResultContentBlock$ === "object");
assert(typeof HarnessToolUseBlock$ === "object");
assert(typeof HarnessToolUseBlockDelta$ === "object");
assert(typeof HarnessToolUseBlockStart$ === "object");
assert(typeof InlineGroundTruth$ === "object");
assert(typeof InputContentBlock$ === "object");
assert(typeof InvokeAgentRuntimeCommandRequest$ === "object");
assert(typeof InvokeAgentRuntimeCommandRequestBody$ === "object");
assert(typeof InvokeAgentRuntimeCommandResponse$ === "object");
assert(typeof InvokeAgentRuntimeCommandStreamOutput$ === "object");
assert(typeof InvokeAgentRuntimeRequest$ === "object");
assert(typeof InvokeAgentRuntimeResponse$ === "object");
assert(typeof InvokeBrowserRequest$ === "object");
assert(typeof InvokeBrowserResponse$ === "object");
assert(typeof InvokeCodeInterpreterRequest$ === "object");
assert(typeof InvokeCodeInterpreterResponse$ === "object");
assert(typeof InvokeHarnessRequest$ === "object");
assert(typeof InvokeHarnessResponse$ === "object");
assert(typeof InvokeHarnessStreamOutput$ === "object");
assert(typeof KeyPressArguments$ === "object");
assert(typeof KeyPressResult$ === "object");
assert(typeof KeyShortcutArguments$ === "object");
assert(typeof KeyShortcutResult$ === "object");
assert(typeof KeyTypeArguments$ === "object");
assert(typeof KeyTypeResult$ === "object");
assert(typeof LeftExpression$ === "object");
assert(typeof LinkedAccount$ === "object");
assert(typeof LinkedAccountDeveloperJwt$ === "object");
assert(typeof LinkedAccountEmail$ === "object");
assert(typeof LinkedAccountOAuth2$ === "object");
assert(typeof LinkedAccountSms$ === "object");
assert(typeof ListABTestsRequest$ === "object");
assert(typeof ListABTestsResponse$ === "object");
assert(typeof ListActorsInput$ === "object");
assert(typeof ListActorsOutput$ === "object");
assert(typeof ListBatchEvaluationsRequest$ === "object");
assert(typeof ListBatchEvaluationsResponse$ === "object");
assert(typeof ListBrowserSessionsRequest$ === "object");
assert(typeof ListBrowserSessionsResponse$ === "object");
assert(typeof ListCodeInterpreterSessionsRequest$ === "object");
assert(typeof ListCodeInterpreterSessionsResponse$ === "object");
assert(typeof ListEventsInput$ === "object");
assert(typeof ListEventsOutput$ === "object");
assert(typeof ListMemoryExtractionJobsInput$ === "object");
assert(typeof ListMemoryExtractionJobsOutput$ === "object");
assert(typeof ListMemoryRecordsInput$ === "object");
assert(typeof ListMemoryRecordsOutput$ === "object");
assert(typeof ListPaymentInstrumentsRequest$ === "object");
assert(typeof ListPaymentInstrumentsResponse$ === "object");
assert(typeof ListPaymentSessionsRequest$ === "object");
assert(typeof ListPaymentSessionsResponse$ === "object");
assert(typeof ListRecommendationsRequest$ === "object");
assert(typeof ListRecommendationsResponse$ === "object");
assert(typeof ListSessionsInput$ === "object");
assert(typeof ListSessionsOutput$ === "object");
assert(typeof LiveViewStream$ === "object");
assert(typeof McpDescriptor$ === "object");
assert(typeof MemoryContent$ === "object");
assert(typeof MemoryMetadataFilterExpression$ === "object");
assert(typeof MemoryRecord$ === "object");
assert(typeof MemoryRecordCreateInput$ === "object");
assert(typeof MemoryRecordDeleteInput$ === "object");
assert(typeof MemoryRecordLeftExpression$ === "object");
assert(typeof MemoryRecordMetadataValue$ === "object");
assert(typeof MemoryRecordOutput$ === "object");
assert(typeof MemoryRecordRightExpression$ === "object");
assert(typeof MemoryRecordSummary$ === "object");
assert(typeof MemoryRecordUpdateInput$ === "object");
assert(typeof MessageMetadata$ === "object");
assert(typeof MetadataValue$ === "object");
assert(typeof MouseClickArguments$ === "object");
assert(typeof MouseClickResult$ === "object");
assert(typeof MouseDragArguments$ === "object");
assert(typeof MouseDragResult$ === "object");
assert(typeof MouseMoveArguments$ === "object");
assert(typeof MouseMoveResult$ === "object");
assert(typeof MouseScrollArguments$ === "object");
assert(typeof MouseScrollResult$ === "object");
assert(typeof OAuth2Authentication$ === "object");
assert(typeof OAuthCredentialProvider$ === "object");
assert(typeof OutputConfig$ === "object");
assert(typeof PayloadType$ === "object");
assert(typeof PaymentInput$ === "object");
assert(typeof PaymentInstrument$ === "object");
assert(typeof PaymentInstrumentDetails$ === "object");
assert(typeof PaymentInstrumentSummary$ === "object");
assert(typeof PaymentOutput$ === "object");
assert(typeof PaymentSession$ === "object");
assert(typeof PaymentSessionSummary$ === "object");
assert(typeof PaymentTokenRequestInput$ === "object");
assert(typeof PaymentTokenResponseOutput$ === "object");
assert(typeof PerVariantOnlineEvaluationConfig$ === "object");
assert(typeof ProcessPaymentRequest$ === "object");
assert(typeof ProcessPaymentResponse$ === "object");
assert(typeof Proxy$ === "object");
assert(typeof ProxyBypass$ === "object");
assert(typeof ProxyConfiguration$ === "object");
assert(typeof ProxyCredentials$ === "object");
assert(typeof RecommendationConfig$ === "object");
assert(typeof RecommendationEvaluationConfig$ === "object");
assert(typeof RecommendationEvaluatorReference$ === "object");
assert(typeof RecommendationResult$ === "object");
assert(typeof RecommendationResultConfigurationBundle$ === "object");
assert(typeof RecommendationSummary$ === "object");
assert(typeof RegistryRecordSummary$ === "object");
assert(typeof ResourceContent$ === "object");
assert(typeof ResourceLocation$ === "object");
assert(typeof ResponseChunk$ === "object");
assert(typeof RetrieveMemoryRecordsInput$ === "object");
assert(typeof RetrieveMemoryRecordsOutput$ === "object");
assert(typeof RightExpression$ === "object");
assert(typeof S3Location$ === "object");
assert(typeof SaveBrowserSessionProfileRequest$ === "object");
assert(typeof SaveBrowserSessionProfileResponse$ === "object");
assert(typeof ScreenshotArguments$ === "object");
assert(typeof ScreenshotResult$ === "object");
assert(typeof SearchCriteria$ === "object");
assert(typeof SearchRegistryRecordsRequest$ === "object");
assert(typeof SearchRegistryRecordsResponse$ === "object");
assert(typeof SecretsManagerLocation$ === "object");
assert(typeof ServerDefinition$ === "object");
assert(typeof SessionFilter$ === "object");
assert(typeof SessionFilterConfig$ === "object");
assert(typeof SessionLimits$ === "object");
assert(typeof SessionMetadataShape$ === "object");
assert(typeof SessionSummary$ === "object");
assert(typeof SkillDefinition$ === "object");
assert(typeof SkillMdDefinition$ === "object");
assert(typeof SpanContext$ === "object");
assert(typeof StartBatchEvaluationRequest$ === "object");
assert(typeof StartBatchEvaluationResponse$ === "object");
assert(typeof StartBrowserSessionRequest$ === "object");
assert(typeof StartBrowserSessionResponse$ === "object");
assert(typeof StartCodeInterpreterSessionRequest$ === "object");
assert(typeof StartCodeInterpreterSessionResponse$ === "object");
assert(typeof StartMemoryExtractionJobInput$ === "object");
assert(typeof StartMemoryExtractionJobOutput$ === "object");
assert(typeof StartRecommendationRequest$ === "object");
assert(typeof StartRecommendationResponse$ === "object");
assert(typeof StopBatchEvaluationRequest$ === "object");
assert(typeof StopBatchEvaluationResponse$ === "object");
assert(typeof StopBrowserSessionRequest$ === "object");
assert(typeof StopBrowserSessionResponse$ === "object");
assert(typeof StopCodeInterpreterSessionRequest$ === "object");
assert(typeof StopCodeInterpreterSessionResponse$ === "object");
assert(typeof StopRuntimeSessionRequest$ === "object");
assert(typeof StopRuntimeSessionResponse$ === "object");
assert(typeof StreamUpdate$ === "object");
assert(typeof StripePrivyTokenRequestInput$ === "object");
assert(typeof StripePrivyTokenResponseOutput$ === "object");
assert(typeof SystemPromptConfig$ === "object");
assert(typeof SystemPromptConfigurationBundle$ === "object");
assert(typeof SystemPromptRecommendationConfig$ === "object");
assert(typeof SystemPromptRecommendationResult$ === "object");
assert(typeof TargetRef$ === "object");
assert(typeof TokenBalance$ === "object");
assert(typeof TokenUsage$ === "object");
assert(typeof ToolArguments$ === "object");
assert(typeof ToolDescriptionConfig$ === "object");
assert(typeof ToolDescriptionConfigurationBundle$ === "object");
assert(typeof ToolDescriptionInput$ === "object");
assert(typeof ToolDescriptionOutput$ === "object");
assert(typeof ToolDescriptionRecommendationConfig$ === "object");
assert(typeof ToolDescriptionRecommendationResult$ === "object");
assert(typeof ToolDescriptionSource$ === "object");
assert(typeof ToolDescriptionTextInput$ === "object");
assert(typeof ToolResultStructuredContent$ === "object");
assert(typeof ToolsDefinition$ === "object");
assert(typeof UpdateABTestRequest$ === "object");
assert(typeof UpdateABTestResponse$ === "object");
assert(typeof UpdateBrowserStreamRequest$ === "object");
assert(typeof UpdateBrowserStreamResponse$ === "object");
assert(typeof UserIdentifier$ === "object");
assert(typeof ValidationExceptionField$ === "object");
assert(typeof Variant$ === "object");
assert(typeof VariantConfiguration$ === "object");
assert(typeof VariantResult$ === "object");
assert(typeof ViewPort$ === "object");
// enums
assert(typeof ABTestExecutionStatus === "object");
assert(typeof ABTestStatus === "object");
assert(typeof AutomationStreamStatus === "object");
assert(typeof BatchEvaluationStatus === "object");
assert(typeof BlockchainChainId === "object");
assert(typeof BrowserActionStatus === "object");
assert(typeof BrowserEnterprisePolicyType === "object");
assert(typeof BrowserSessionStatus === "object");
assert(typeof CloudWatchLogsFilterOperator === "object");
assert(typeof CodeInterpreterSessionStatus === "object");
assert(typeof CommandExecutionStatus === "object");
assert(typeof ContentBlockType === "object");
assert(typeof CryptoWalletNetwork === "object");
assert(typeof Currency === "object");
assert(typeof DescriptorType === "object");
assert(typeof EventFilterCondition === "object");
assert(typeof ExtractionJobStatus === "object");
assert(typeof HarnessBedrockApiFormat === "object");
assert(typeof HarnessConversationRole === "object");
assert(typeof HarnessOpenAiApiFormat === "object");
assert(typeof HarnessStopReason === "object");
assert(typeof HarnessToolType === "object");
assert(typeof HarnessToolUseStatus === "object");
assert(typeof HarnessToolUseType === "object");
assert(typeof InstrumentBalanceToken === "object");
assert(typeof LanguageRuntime === "object");
assert(typeof MemoryRecordOperatorType === "object");
assert(typeof MemoryRecordStatus === "object");
assert(typeof MouseButton === "object");
assert(typeof Oauth2FlowType === "object");
assert(typeof OAuthGrantType === "object");
assert(typeof OperatorType === "object");
assert(typeof PaymentHttpMethodType === "object");
assert(typeof PaymentInstrumentStatus === "object");
assert(typeof PaymentInstrumentType === "object");
assert(typeof PaymentSessionStatus === "object");
assert(typeof PaymentStatus === "object");
assert(typeof PaymentType === "object");
assert(typeof ProgrammingLanguage === "object");
assert(typeof RecommendationStatus === "object");
assert(typeof RecommendationType === "object");
assert(typeof RegistryRecordStatus === "object");
assert(typeof ResourceContentType === "object");
assert(typeof Role === "object");
assert(typeof ScreenshotFormat === "object");
assert(typeof SessionStatus === "object");
assert(typeof TaskStatus === "object");
assert(typeof ToolName === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof BedrockAgentCoreServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof BedrockAgentCoreServiceException);
assert(typeof ConflictException$ === "object");
assert(DuplicateIdException.prototype instanceof BedrockAgentCoreServiceException);
assert(typeof DuplicateIdException$ === "object");
assert(InternalServerException.prototype instanceof BedrockAgentCoreServiceException);
assert(typeof InternalServerException$ === "object");
assert(InvalidInputException.prototype instanceof BedrockAgentCoreServiceException);
assert(typeof InvalidInputException$ === "object");
assert(ResourceNotFoundException.prototype instanceof BedrockAgentCoreServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(RetryableConflictException.prototype instanceof BedrockAgentCoreServiceException);
assert(typeof RetryableConflictException$ === "object");
assert(RuntimeClientError.prototype instanceof BedrockAgentCoreServiceException);
assert(typeof RuntimeClientError$ === "object");
assert(ServiceException.prototype instanceof BedrockAgentCoreServiceException);
assert(typeof ServiceException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof BedrockAgentCoreServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottledException.prototype instanceof BedrockAgentCoreServiceException);
assert(typeof ThrottledException$ === "object");
assert(ThrottlingException.prototype instanceof BedrockAgentCoreServiceException);
assert(typeof ThrottlingException$ === "object");
assert(UnauthorizedException.prototype instanceof BedrockAgentCoreServiceException);
assert(typeof UnauthorizedException$ === "object");
assert(ValidationException.prototype instanceof BedrockAgentCoreServiceException);
assert(typeof ValidationException$ === "object");
assert(BedrockAgentCoreServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListABTests === "function");
assert(typeof paginateListActors === "function");
assert(typeof paginateListBatchEvaluations === "function");
assert(typeof paginateListEvents === "function");
assert(typeof paginateListMemoryExtractionJobs === "function");
assert(typeof paginateListMemoryRecords === "function");
assert(typeof paginateListPaymentInstruments === "function");
assert(typeof paginateListPaymentSessions === "function");
assert(typeof paginateListRecommendations === "function");
assert(typeof paginateListSessions === "function");
assert(typeof paginateRetrieveMemoryRecords === "function");
console.log(`BedrockAgentCore index test passed.`);
