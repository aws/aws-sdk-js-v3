import {
  AccessDeniedException,
  AccessDeniedException$,
  ActionGroupExecutor$,
  ActionGroupInvocationInput$,
  ActionGroupInvocationOutput$,
  ActionGroupSignature,
  ActionInvocationType,
  AgentActionGroup$,
  AgentCollaboration,
  AgentCollaboratorInputPayload$,
  AgentCollaboratorInvocationInput$,
  AgentCollaboratorInvocationOutput$,
  AgentCollaboratorOutputPayload$,
  AnalyzePromptEvent$,
  ApiInvocationInput$,
  ApiParameter$,
  ApiRequestBody$,
  ApiResult$,
  APISchema$,
  AttributeType,
  Attribution$,
  AudioSegment$,
  BadGatewayException,
  BadGatewayException$,
  BedrockAgentRuntime,
  BedrockAgentRuntimeClient,
  BedrockAgentRuntimeServiceException,
  BedrockModelConfigurations$,
  BedrockRerankingConfiguration$,
  BedrockRerankingModelConfiguration$,
  BedrockSessionContentBlock$,
  ByteContentDoc$,
  ByteContentFile$,
  Caller$,
  Citation$,
  CitationEvent$,
  CodeInterpreterInvocationInput$,
  CodeInterpreterInvocationOutput$,
  Collaborator$,
  CollaboratorConfiguration$,
  ConditionResultEvent$,
  ConfirmationState,
  ConflictException,
  ConflictException$,
  ContentBlock$,
  ContentBody$,
  ConversationHistory$,
  ConversationRole,
  CreateInvocation$,
  CreateInvocationCommand,
  CreateInvocationRequest$,
  CreateInvocationResponse$,
  CreateSession$,
  CreateSessionCommand,
  CreateSessionRequest$,
  CreateSessionResponse$,
  CreationMode,
  CustomControlMethod,
  CustomOrchestration$,
  CustomOrchestrationTrace$,
  CustomOrchestrationTraceEvent$,
  DeleteAgentMemory$,
  DeleteAgentMemoryCommand,
  DeleteAgentMemoryRequest$,
  DeleteAgentMemoryResponse$,
  DeleteSession$,
  DeleteSessionCommand,
  DeleteSessionRequest$,
  DeleteSessionResponse$,
  DependencyFailedException,
  DependencyFailedException$,
  EndSession$,
  EndSessionCommand,
  EndSessionRequest$,
  EndSessionResponse$,
  ExecutionType,
  ExternalSource$,
  ExternalSourcesGenerationConfiguration$,
  ExternalSourcesRetrieveAndGenerateConfiguration$,
  ExternalSourceType,
  FailureTrace$,
  FieldForReranking$,
  FilePart$,
  FileSource$,
  FileSourceType,
  FileUseCase,
  FilterAttribute$,
  FinalResponse$,
  FlowCompletionEvent$,
  FlowCompletionReason,
  FlowControlNodeType,
  FlowErrorCode,
  FlowExecutionContent$,
  FlowExecutionError$,
  FlowExecutionErrorType,
  FlowExecutionEvent$,
  FlowExecutionEventType,
  FlowExecutionInputEvent$,
  FlowExecutionOutputEvent$,
  FlowExecutionStatus,
  FlowExecutionSummary$,
  FlowFailureEvent$,
  FlowInput$,
  FlowInputContent$,
  FlowInputField$,
  FlowMultiTurnInputContent$,
  FlowMultiTurnInputRequestEvent$,
  FlowNodeInputCategory,
  FlowNodeIODataType,
  FlowOutputContent$,
  FlowOutputEvent$,
  FlowOutputField$,
  FlowResponseStream$,
  FlowTrace$,
  FlowTraceCondition$,
  FlowTraceConditionNodeResultEvent$,
  FlowTraceDependencyEvent$,
  FlowTraceEvent$,
  FlowTraceNodeActionEvent$,
  FlowTraceNodeInputContent$,
  FlowTraceNodeInputEvent$,
  FlowTraceNodeInputExecutionChainItem$,
  FlowTraceNodeInputField$,
  FlowTraceNodeInputSource$,
  FlowTraceNodeOutputContent$,
  FlowTraceNodeOutputEvent$,
  FlowTraceNodeOutputField$,
  FlowTraceNodeOutputNext$,
  FunctionDefinition$,
  FunctionInvocationInput$,
  FunctionParameter$,
  FunctionResult$,
  FunctionSchema$,
  GeneratedQuery$,
  GeneratedQueryType,
  GeneratedResponsePart$,
  GenerateQuery$,
  GenerateQueryCommand,
  GenerateQueryRequest$,
  GenerateQueryResponse$,
  GenerationConfiguration$,
  GetAgentMemory$,
  GetAgentMemoryCommand,
  GetAgentMemoryRequest$,
  GetAgentMemoryResponse$,
  GetExecutionFlowSnapshot$,
  GetExecutionFlowSnapshotCommand,
  GetExecutionFlowSnapshotRequest$,
  GetExecutionFlowSnapshotResponse$,
  GetFlowExecution$,
  GetFlowExecutionCommand,
  GetFlowExecutionRequest$,
  GetFlowExecutionResponse$,
  GetInvocationStep$,
  GetInvocationStepCommand,
  GetInvocationStepRequest$,
  GetInvocationStepResponse$,
  GetSession$,
  GetSessionCommand,
  GetSessionRequest$,
  GetSessionResponse$,
  GuadrailAction,
  GuardrailAction,
  GuardrailAssessment$,
  GuardrailConfiguration$,
  GuardrailConfigurationWithArn$,
  GuardrailContentFilter$,
  GuardrailContentFilterConfidence,
  GuardrailContentFilterType,
  GuardrailContentPolicyAction,
  GuardrailContentPolicyAssessment$,
  GuardrailCustomWord$,
  GuardrailEvent$,
  GuardrailManagedWord$,
  GuardrailManagedWordType,
  GuardrailPiiEntityFilter$,
  GuardrailPiiEntityType,
  GuardrailRegexFilter$,
  GuardrailSensitiveInformationPolicyAction,
  GuardrailSensitiveInformationPolicyAssessment$,
  GuardrailTopic$,
  GuardrailTopicPolicyAction,
  GuardrailTopicPolicyAssessment$,
  GuardrailTopicType,
  GuardrailTrace$,
  GuardrailWordPolicyAction,
  GuardrailWordPolicyAssessment$,
  ImageBlock$,
  ImageFormat,
  ImageInput$,
  ImageInputFormat,
  ImageInputSource$,
  ImageSource$,
  ImplicitFilterConfiguration$,
  InferenceConfig$,
  InferenceConfiguration$,
  InlineAgentFilePart$,
  InlineAgentPayloadPart$,
  InlineAgentResponseStream$,
  InlineAgentReturnControlPayload$,
  InlineAgentTracePart$,
  InlineBedrockModelConfigurations$,
  InlineSessionState$,
  InputFile$,
  InputImage$,
  InputImageFormat,
  InputPrompt$,
  InputQueryType,
  InternalServerException,
  InternalServerException$,
  InvocationInput$,
  InvocationInputMember$,
  InvocationResultMember$,
  InvocationStep$,
  InvocationStepPayload$,
  InvocationStepSummary$,
  InvocationSummary$,
  InvocationType,
  InvokeAgent$,
  InvokeAgentCommand,
  InvokeAgentRequest$,
  InvokeAgentResponse$,
  InvokeFlow$,
  InvokeFlowCommand,
  InvokeFlowRequest$,
  InvokeFlowResponse$,
  InvokeInlineAgent$,
  InvokeInlineAgentCommand,
  InvokeInlineAgentRequest$,
  InvokeInlineAgentResponse$,
  KnowledgeBase$,
  KnowledgeBaseConfiguration$,
  KnowledgeBaseLookupInput$,
  KnowledgeBaseLookupOutput$,
  KnowledgeBaseQuery$,
  KnowledgeBaseQueryType,
  KnowledgeBaseRetrievalConfiguration$,
  KnowledgeBaseRetrievalResult$,
  KnowledgeBaseRetrieveAndGenerateConfiguration$,
  KnowledgeBaseVectorSearchConfiguration$,
  ListFlowExecutionEvents$,
  ListFlowExecutionEventsCommand,
  ListFlowExecutionEventsRequest$,
  ListFlowExecutionEventsResponse$,
  ListFlowExecutions$,
  ListFlowExecutionsCommand,
  ListFlowExecutionsRequest$,
  ListFlowExecutionsResponse$,
  ListInvocations$,
  ListInvocationsCommand,
  ListInvocationsRequest$,
  ListInvocationsResponse$,
  ListInvocationSteps$,
  ListInvocationStepsCommand,
  ListInvocationStepsRequest$,
  ListInvocationStepsResponse$,
  ListSessions$,
  ListSessionsCommand,
  ListSessionsRequest$,
  ListSessionsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  Memory$,
  MemorySessionSummary$,
  MemoryType,
  Message$,
  Metadata$,
  MetadataAttributeSchema$,
  MetadataConfigurationForReranking$,
  ModelInvocationInput$,
  ModelNotReadyException,
  ModelNotReadyException$,
  ModelPerformanceConfiguration$,
  NodeActionEvent$,
  NodeDependencyEvent$,
  NodeErrorCode,
  NodeExecutionContent$,
  NodeFailureEvent$,
  NodeInputEvent$,
  NodeInputExecutionChainItem$,
  NodeInputField$,
  NodeInputSource$,
  NodeOutputEvent$,
  NodeOutputField$,
  NodeOutputNext$,
  NodeTraceElements$,
  NodeType,
  Observation$,
  OptimizedPrompt$,
  OptimizedPromptEvent$,
  OptimizedPromptStream$,
  OptimizePrompt$,
  OptimizePromptCommand,
  OptimizePromptRequest$,
  OptimizePromptResponse$,
  OrchestrationConfiguration$,
  OrchestrationExecutor$,
  OrchestrationModelInvocationOutput$,
  OrchestrationTrace$,
  OrchestrationType,
  OutputFile$,
  paginateGetAgentMemory,
  paginateListFlowExecutionEvents,
  paginateListFlowExecutions,
  paginateListInvocations,
  paginateListInvocationSteps,
  paginateListSessions,
  paginateRerank,
  paginateRetrieve,
  Parameter$,
  ParameterDetail$,
  ParameterType,
  PayloadPart$,
  PayloadType,
  PerformanceConfigLatency,
  PerformanceConfiguration$,
  PostProcessingModelInvocationOutput$,
  PostProcessingParsedResponse$,
  PostProcessingTrace$,
  PreProcessingModelInvocationOutput$,
  PreProcessingParsedResponse$,
  PreProcessingTrace$,
  PromptConfiguration$,
  PromptCreationConfigurations$,
  PromptOverrideConfiguration$,
  PromptState,
  PromptTemplate$,
  PromptType,
  PropertyParameters$,
  PutInvocationStep$,
  PutInvocationStepCommand,
  PutInvocationStepRequest$,
  PutInvocationStepResponse$,
  QueryGenerationInput$,
  QueryTransformationConfiguration$,
  QueryTransformationMode,
  QueryTransformationType,
  Rationale$,
  RawResponse$,
  ReasoningContentBlock$,
  ReasoningTextBlock$,
  RelayConversationHistory,
  RepromptResponse$,
  RequestBody$,
  RequireConfirmation,
  Rerank$,
  RerankCommand,
  RerankDocument$,
  RerankDocumentType,
  RerankingConfiguration$,
  RerankingConfigurationType,
  RerankingMetadataSelectionMode,
  RerankingMetadataSelectiveModeConfiguration$,
  RerankQuery$,
  RerankQueryContentType,
  RerankRequest$,
  RerankResponse$,
  RerankResult$,
  RerankSource$,
  RerankSourceType,
  RerankTextDocument$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResponseState,
  ResponseStream$,
  RetrievalFilter$,
  RetrievalResultConfluenceLocation$,
  RetrievalResultContent$,
  RetrievalResultContentColumn$,
  RetrievalResultContentColumnType,
  RetrievalResultContentType,
  RetrievalResultCustomDocumentLocation$,
  RetrievalResultKendraDocumentLocation$,
  RetrievalResultLocation$,
  RetrievalResultLocationType,
  RetrievalResultS3Location$,
  RetrievalResultSalesforceLocation$,
  RetrievalResultSharePointLocation$,
  RetrievalResultSqlLocation$,
  RetrievalResultWebLocation$,
  Retrieve$,
  RetrieveAndGenerate$,
  RetrieveAndGenerateCommand,
  RetrieveAndGenerateConfiguration$,
  RetrieveAndGenerateInput$,
  RetrieveAndGenerateOutput$,
  RetrieveAndGenerateOutputEvent$,
  RetrieveAndGenerateRequest$,
  RetrieveAndGenerateResponse$,
  RetrieveAndGenerateSessionConfiguration$,
  RetrieveAndGenerateStream$,
  RetrieveAndGenerateStreamCommand,
  RetrieveAndGenerateStreamRequest$,
  RetrieveAndGenerateStreamResponse$,
  RetrieveAndGenerateStreamResponseOutput$,
  RetrieveAndGenerateType,
  RetrieveCommand,
  RetrievedReference$,
  RetrieveRequest$,
  RetrieveResponse$,
  ReturnControlPayload$,
  ReturnControlResults$,
  RoutingClassifierModelInvocationOutput$,
  RoutingClassifierTrace$,
  S3Identifier$,
  S3Location$,
  S3ObjectDoc$,
  S3ObjectFile$,
  SatisfiedCondition$,
  SearchType,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SessionState$,
  SessionStatus,
  SessionSummary$,
  Source,
  Span$,
  StartFlowExecution$,
  StartFlowExecutionCommand,
  StartFlowExecutionRequest$,
  StartFlowExecutionResponse$,
  StopFlowExecution$,
  StopFlowExecutionCommand,
  StopFlowExecutionRequest$,
  StopFlowExecutionResponse$,
  StreamingConfigurations$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TextInferenceConfig$,
  TextPrompt$,
  TextResponsePart$,
  TextToSqlConfiguration$,
  TextToSqlConfigurationType,
  TextToSqlKnowledgeBaseConfiguration$,
  ThrottlingException,
  ThrottlingException$,
  Trace$,
  TraceElements$,
  TracePart$,
  TransformationConfiguration$,
  Type,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateSession$,
  UpdateSessionCommand,
  UpdateSessionRequest$,
  UpdateSessionResponse$,
  Usage$,
  ValidationException,
  ValidationException$,
  VectorSearchBedrockRerankingConfiguration$,
  VectorSearchBedrockRerankingModelConfiguration$,
  VectorSearchRerankingConfiguration$,
  VectorSearchRerankingConfigurationType,
  VideoSegment$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof BedrockAgentRuntimeClient === "function");
assert(typeof BedrockAgentRuntime === "function");
// commands
assert(typeof CreateInvocationCommand === "function");
assert(typeof CreateInvocation$ === "object");
assert(typeof CreateSessionCommand === "function");
assert(typeof CreateSession$ === "object");
assert(typeof DeleteAgentMemoryCommand === "function");
assert(typeof DeleteAgentMemory$ === "object");
assert(typeof DeleteSessionCommand === "function");
assert(typeof DeleteSession$ === "object");
assert(typeof EndSessionCommand === "function");
assert(typeof EndSession$ === "object");
assert(typeof GenerateQueryCommand === "function");
assert(typeof GenerateQuery$ === "object");
assert(typeof GetAgentMemoryCommand === "function");
assert(typeof GetAgentMemory$ === "object");
assert(typeof GetExecutionFlowSnapshotCommand === "function");
assert(typeof GetExecutionFlowSnapshot$ === "object");
assert(typeof GetFlowExecutionCommand === "function");
assert(typeof GetFlowExecution$ === "object");
assert(typeof GetInvocationStepCommand === "function");
assert(typeof GetInvocationStep$ === "object");
assert(typeof GetSessionCommand === "function");
assert(typeof GetSession$ === "object");
assert(typeof InvokeAgentCommand === "function");
assert(typeof InvokeAgent$ === "object");
assert(typeof InvokeFlowCommand === "function");
assert(typeof InvokeFlow$ === "object");
assert(typeof InvokeInlineAgentCommand === "function");
assert(typeof InvokeInlineAgent$ === "object");
assert(typeof ListFlowExecutionEventsCommand === "function");
assert(typeof ListFlowExecutionEvents$ === "object");
assert(typeof ListFlowExecutionsCommand === "function");
assert(typeof ListFlowExecutions$ === "object");
assert(typeof ListInvocationsCommand === "function");
assert(typeof ListInvocations$ === "object");
assert(typeof ListInvocationStepsCommand === "function");
assert(typeof ListInvocationSteps$ === "object");
assert(typeof ListSessionsCommand === "function");
assert(typeof ListSessions$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof OptimizePromptCommand === "function");
assert(typeof OptimizePrompt$ === "object");
assert(typeof PutInvocationStepCommand === "function");
assert(typeof PutInvocationStep$ === "object");
assert(typeof RerankCommand === "function");
assert(typeof Rerank$ === "object");
assert(typeof RetrieveCommand === "function");
assert(typeof Retrieve$ === "object");
assert(typeof RetrieveAndGenerateCommand === "function");
assert(typeof RetrieveAndGenerate$ === "object");
assert(typeof RetrieveAndGenerateStreamCommand === "function");
assert(typeof RetrieveAndGenerateStream$ === "object");
assert(typeof StartFlowExecutionCommand === "function");
assert(typeof StartFlowExecution$ === "object");
assert(typeof StopFlowExecutionCommand === "function");
assert(typeof StopFlowExecution$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateSessionCommand === "function");
assert(typeof UpdateSession$ === "object");
// structural schemas
assert(typeof ActionGroupExecutor$ === "object");
assert(typeof ActionGroupInvocationInput$ === "object");
assert(typeof ActionGroupInvocationOutput$ === "object");
assert(typeof AgentActionGroup$ === "object");
assert(typeof AgentCollaboratorInputPayload$ === "object");
assert(typeof AgentCollaboratorInvocationInput$ === "object");
assert(typeof AgentCollaboratorInvocationOutput$ === "object");
assert(typeof AgentCollaboratorOutputPayload$ === "object");
assert(typeof AnalyzePromptEvent$ === "object");
assert(typeof ApiInvocationInput$ === "object");
assert(typeof ApiParameter$ === "object");
assert(typeof ApiRequestBody$ === "object");
assert(typeof ApiResult$ === "object");
assert(typeof APISchema$ === "object");
assert(typeof Attribution$ === "object");
assert(typeof AudioSegment$ === "object");
assert(typeof BedrockModelConfigurations$ === "object");
assert(typeof BedrockRerankingConfiguration$ === "object");
assert(typeof BedrockRerankingModelConfiguration$ === "object");
assert(typeof BedrockSessionContentBlock$ === "object");
assert(typeof ByteContentDoc$ === "object");
assert(typeof ByteContentFile$ === "object");
assert(typeof Caller$ === "object");
assert(typeof Citation$ === "object");
assert(typeof CitationEvent$ === "object");
assert(typeof CodeInterpreterInvocationInput$ === "object");
assert(typeof CodeInterpreterInvocationOutput$ === "object");
assert(typeof Collaborator$ === "object");
assert(typeof CollaboratorConfiguration$ === "object");
assert(typeof ConditionResultEvent$ === "object");
assert(typeof ContentBlock$ === "object");
assert(typeof ContentBody$ === "object");
assert(typeof ConversationHistory$ === "object");
assert(typeof CreateInvocationRequest$ === "object");
assert(typeof CreateInvocationResponse$ === "object");
assert(typeof CreateSessionRequest$ === "object");
assert(typeof CreateSessionResponse$ === "object");
assert(typeof CustomOrchestration$ === "object");
assert(typeof CustomOrchestrationTrace$ === "object");
assert(typeof CustomOrchestrationTraceEvent$ === "object");
assert(typeof DeleteAgentMemoryRequest$ === "object");
assert(typeof DeleteAgentMemoryResponse$ === "object");
assert(typeof DeleteSessionRequest$ === "object");
assert(typeof DeleteSessionResponse$ === "object");
assert(typeof EndSessionRequest$ === "object");
assert(typeof EndSessionResponse$ === "object");
assert(typeof ExternalSource$ === "object");
assert(typeof ExternalSourcesGenerationConfiguration$ === "object");
assert(typeof ExternalSourcesRetrieveAndGenerateConfiguration$ === "object");
assert(typeof FailureTrace$ === "object");
assert(typeof FieldForReranking$ === "object");
assert(typeof FilePart$ === "object");
assert(typeof FileSource$ === "object");
assert(typeof FilterAttribute$ === "object");
assert(typeof FinalResponse$ === "object");
assert(typeof FlowCompletionEvent$ === "object");
assert(typeof FlowExecutionContent$ === "object");
assert(typeof FlowExecutionError$ === "object");
assert(typeof FlowExecutionEvent$ === "object");
assert(typeof FlowExecutionInputEvent$ === "object");
assert(typeof FlowExecutionOutputEvent$ === "object");
assert(typeof FlowExecutionSummary$ === "object");
assert(typeof FlowFailureEvent$ === "object");
assert(typeof FlowInput$ === "object");
assert(typeof FlowInputContent$ === "object");
assert(typeof FlowInputField$ === "object");
assert(typeof FlowMultiTurnInputContent$ === "object");
assert(typeof FlowMultiTurnInputRequestEvent$ === "object");
assert(typeof FlowOutputContent$ === "object");
assert(typeof FlowOutputEvent$ === "object");
assert(typeof FlowOutputField$ === "object");
assert(typeof FlowResponseStream$ === "object");
assert(typeof FlowTrace$ === "object");
assert(typeof FlowTraceCondition$ === "object");
assert(typeof FlowTraceConditionNodeResultEvent$ === "object");
assert(typeof FlowTraceDependencyEvent$ === "object");
assert(typeof FlowTraceEvent$ === "object");
assert(typeof FlowTraceNodeActionEvent$ === "object");
assert(typeof FlowTraceNodeInputContent$ === "object");
assert(typeof FlowTraceNodeInputEvent$ === "object");
assert(typeof FlowTraceNodeInputExecutionChainItem$ === "object");
assert(typeof FlowTraceNodeInputField$ === "object");
assert(typeof FlowTraceNodeInputSource$ === "object");
assert(typeof FlowTraceNodeOutputContent$ === "object");
assert(typeof FlowTraceNodeOutputEvent$ === "object");
assert(typeof FlowTraceNodeOutputField$ === "object");
assert(typeof FlowTraceNodeOutputNext$ === "object");
assert(typeof FunctionDefinition$ === "object");
assert(typeof FunctionInvocationInput$ === "object");
assert(typeof FunctionParameter$ === "object");
assert(typeof FunctionResult$ === "object");
assert(typeof FunctionSchema$ === "object");
assert(typeof GeneratedQuery$ === "object");
assert(typeof GeneratedResponsePart$ === "object");
assert(typeof GenerateQueryRequest$ === "object");
assert(typeof GenerateQueryResponse$ === "object");
assert(typeof GenerationConfiguration$ === "object");
assert(typeof GetAgentMemoryRequest$ === "object");
assert(typeof GetAgentMemoryResponse$ === "object");
assert(typeof GetExecutionFlowSnapshotRequest$ === "object");
assert(typeof GetExecutionFlowSnapshotResponse$ === "object");
assert(typeof GetFlowExecutionRequest$ === "object");
assert(typeof GetFlowExecutionResponse$ === "object");
assert(typeof GetInvocationStepRequest$ === "object");
assert(typeof GetInvocationStepResponse$ === "object");
assert(typeof GetSessionRequest$ === "object");
assert(typeof GetSessionResponse$ === "object");
assert(typeof GuardrailAssessment$ === "object");
assert(typeof GuardrailConfiguration$ === "object");
assert(typeof GuardrailConfigurationWithArn$ === "object");
assert(typeof GuardrailContentFilter$ === "object");
assert(typeof GuardrailContentPolicyAssessment$ === "object");
assert(typeof GuardrailCustomWord$ === "object");
assert(typeof GuardrailEvent$ === "object");
assert(typeof GuardrailManagedWord$ === "object");
assert(typeof GuardrailPiiEntityFilter$ === "object");
assert(typeof GuardrailRegexFilter$ === "object");
assert(typeof GuardrailSensitiveInformationPolicyAssessment$ === "object");
assert(typeof GuardrailTopic$ === "object");
assert(typeof GuardrailTopicPolicyAssessment$ === "object");
assert(typeof GuardrailTrace$ === "object");
assert(typeof GuardrailWordPolicyAssessment$ === "object");
assert(typeof ImageBlock$ === "object");
assert(typeof ImageInput$ === "object");
assert(typeof ImageInputSource$ === "object");
assert(typeof ImageSource$ === "object");
assert(typeof ImplicitFilterConfiguration$ === "object");
assert(typeof InferenceConfig$ === "object");
assert(typeof InferenceConfiguration$ === "object");
assert(typeof InlineAgentFilePart$ === "object");
assert(typeof InlineAgentPayloadPart$ === "object");
assert(typeof InlineAgentResponseStream$ === "object");
assert(typeof InlineAgentReturnControlPayload$ === "object");
assert(typeof InlineAgentTracePart$ === "object");
assert(typeof InlineBedrockModelConfigurations$ === "object");
assert(typeof InlineSessionState$ === "object");
assert(typeof InputFile$ === "object");
assert(typeof InputImage$ === "object");
assert(typeof InputPrompt$ === "object");
assert(typeof InvocationInput$ === "object");
assert(typeof InvocationInputMember$ === "object");
assert(typeof InvocationResultMember$ === "object");
assert(typeof InvocationStep$ === "object");
assert(typeof InvocationStepPayload$ === "object");
assert(typeof InvocationStepSummary$ === "object");
assert(typeof InvocationSummary$ === "object");
assert(typeof InvokeAgentRequest$ === "object");
assert(typeof InvokeAgentResponse$ === "object");
assert(typeof InvokeFlowRequest$ === "object");
assert(typeof InvokeFlowResponse$ === "object");
assert(typeof InvokeInlineAgentRequest$ === "object");
assert(typeof InvokeInlineAgentResponse$ === "object");
assert(typeof KnowledgeBase$ === "object");
assert(typeof KnowledgeBaseConfiguration$ === "object");
assert(typeof KnowledgeBaseLookupInput$ === "object");
assert(typeof KnowledgeBaseLookupOutput$ === "object");
assert(typeof KnowledgeBaseQuery$ === "object");
assert(typeof KnowledgeBaseRetrievalConfiguration$ === "object");
assert(typeof KnowledgeBaseRetrievalResult$ === "object");
assert(typeof KnowledgeBaseRetrieveAndGenerateConfiguration$ === "object");
assert(typeof KnowledgeBaseVectorSearchConfiguration$ === "object");
assert(typeof ListFlowExecutionEventsRequest$ === "object");
assert(typeof ListFlowExecutionEventsResponse$ === "object");
assert(typeof ListFlowExecutionsRequest$ === "object");
assert(typeof ListFlowExecutionsResponse$ === "object");
assert(typeof ListInvocationsRequest$ === "object");
assert(typeof ListInvocationsResponse$ === "object");
assert(typeof ListInvocationStepsRequest$ === "object");
assert(typeof ListInvocationStepsResponse$ === "object");
assert(typeof ListSessionsRequest$ === "object");
assert(typeof ListSessionsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof Memory$ === "object");
assert(typeof MemorySessionSummary$ === "object");
assert(typeof Message$ === "object");
assert(typeof Metadata$ === "object");
assert(typeof MetadataAttributeSchema$ === "object");
assert(typeof MetadataConfigurationForReranking$ === "object");
assert(typeof ModelInvocationInput$ === "object");
assert(typeof ModelPerformanceConfiguration$ === "object");
assert(typeof NodeActionEvent$ === "object");
assert(typeof NodeDependencyEvent$ === "object");
assert(typeof NodeExecutionContent$ === "object");
assert(typeof NodeFailureEvent$ === "object");
assert(typeof NodeInputEvent$ === "object");
assert(typeof NodeInputExecutionChainItem$ === "object");
assert(typeof NodeInputField$ === "object");
assert(typeof NodeInputSource$ === "object");
assert(typeof NodeOutputEvent$ === "object");
assert(typeof NodeOutputField$ === "object");
assert(typeof NodeOutputNext$ === "object");
assert(typeof NodeTraceElements$ === "object");
assert(typeof Observation$ === "object");
assert(typeof OptimizedPrompt$ === "object");
assert(typeof OptimizedPromptEvent$ === "object");
assert(typeof OptimizedPromptStream$ === "object");
assert(typeof OptimizePromptRequest$ === "object");
assert(typeof OptimizePromptResponse$ === "object");
assert(typeof OrchestrationConfiguration$ === "object");
assert(typeof OrchestrationExecutor$ === "object");
assert(typeof OrchestrationModelInvocationOutput$ === "object");
assert(typeof OrchestrationTrace$ === "object");
assert(typeof OutputFile$ === "object");
assert(typeof Parameter$ === "object");
assert(typeof ParameterDetail$ === "object");
assert(typeof PayloadPart$ === "object");
assert(typeof PerformanceConfiguration$ === "object");
assert(typeof PostProcessingModelInvocationOutput$ === "object");
assert(typeof PostProcessingParsedResponse$ === "object");
assert(typeof PostProcessingTrace$ === "object");
assert(typeof PreProcessingModelInvocationOutput$ === "object");
assert(typeof PreProcessingParsedResponse$ === "object");
assert(typeof PreProcessingTrace$ === "object");
assert(typeof PromptConfiguration$ === "object");
assert(typeof PromptCreationConfigurations$ === "object");
assert(typeof PromptOverrideConfiguration$ === "object");
assert(typeof PromptTemplate$ === "object");
assert(typeof PropertyParameters$ === "object");
assert(typeof PutInvocationStepRequest$ === "object");
assert(typeof PutInvocationStepResponse$ === "object");
assert(typeof QueryGenerationInput$ === "object");
assert(typeof QueryTransformationConfiguration$ === "object");
assert(typeof Rationale$ === "object");
assert(typeof RawResponse$ === "object");
assert(typeof ReasoningContentBlock$ === "object");
assert(typeof ReasoningTextBlock$ === "object");
assert(typeof RepromptResponse$ === "object");
assert(typeof RequestBody$ === "object");
assert(typeof RerankDocument$ === "object");
assert(typeof RerankingConfiguration$ === "object");
assert(typeof RerankingMetadataSelectiveModeConfiguration$ === "object");
assert(typeof RerankQuery$ === "object");
assert(typeof RerankRequest$ === "object");
assert(typeof RerankResponse$ === "object");
assert(typeof RerankResult$ === "object");
assert(typeof RerankSource$ === "object");
assert(typeof RerankTextDocument$ === "object");
assert(typeof ResponseStream$ === "object");
assert(typeof RetrievalFilter$ === "object");
assert(typeof RetrievalResultConfluenceLocation$ === "object");
assert(typeof RetrievalResultContent$ === "object");
assert(typeof RetrievalResultContentColumn$ === "object");
assert(typeof RetrievalResultCustomDocumentLocation$ === "object");
assert(typeof RetrievalResultKendraDocumentLocation$ === "object");
assert(typeof RetrievalResultLocation$ === "object");
assert(typeof RetrievalResultS3Location$ === "object");
assert(typeof RetrievalResultSalesforceLocation$ === "object");
assert(typeof RetrievalResultSharePointLocation$ === "object");
assert(typeof RetrievalResultSqlLocation$ === "object");
assert(typeof RetrievalResultWebLocation$ === "object");
assert(typeof RetrieveAndGenerateConfiguration$ === "object");
assert(typeof RetrieveAndGenerateInput$ === "object");
assert(typeof RetrieveAndGenerateOutput$ === "object");
assert(typeof RetrieveAndGenerateOutputEvent$ === "object");
assert(typeof RetrieveAndGenerateRequest$ === "object");
assert(typeof RetrieveAndGenerateResponse$ === "object");
assert(typeof RetrieveAndGenerateSessionConfiguration$ === "object");
assert(typeof RetrieveAndGenerateStreamRequest$ === "object");
assert(typeof RetrieveAndGenerateStreamResponse$ === "object");
assert(typeof RetrieveAndGenerateStreamResponseOutput$ === "object");
assert(typeof RetrievedReference$ === "object");
assert(typeof RetrieveRequest$ === "object");
assert(typeof RetrieveResponse$ === "object");
assert(typeof ReturnControlPayload$ === "object");
assert(typeof ReturnControlResults$ === "object");
assert(typeof RoutingClassifierModelInvocationOutput$ === "object");
assert(typeof RoutingClassifierTrace$ === "object");
assert(typeof S3Identifier$ === "object");
assert(typeof S3Location$ === "object");
assert(typeof S3ObjectDoc$ === "object");
assert(typeof S3ObjectFile$ === "object");
assert(typeof SatisfiedCondition$ === "object");
assert(typeof SessionState$ === "object");
assert(typeof SessionSummary$ === "object");
assert(typeof Span$ === "object");
assert(typeof StartFlowExecutionRequest$ === "object");
assert(typeof StartFlowExecutionResponse$ === "object");
assert(typeof StopFlowExecutionRequest$ === "object");
assert(typeof StopFlowExecutionResponse$ === "object");
assert(typeof StreamingConfigurations$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TextInferenceConfig$ === "object");
assert(typeof TextPrompt$ === "object");
assert(typeof TextResponsePart$ === "object");
assert(typeof TextToSqlConfiguration$ === "object");
assert(typeof TextToSqlKnowledgeBaseConfiguration$ === "object");
assert(typeof Trace$ === "object");
assert(typeof TraceElements$ === "object");
assert(typeof TracePart$ === "object");
assert(typeof TransformationConfiguration$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateSessionRequest$ === "object");
assert(typeof UpdateSessionResponse$ === "object");
assert(typeof Usage$ === "object");
assert(typeof VectorSearchBedrockRerankingConfiguration$ === "object");
assert(typeof VectorSearchBedrockRerankingModelConfiguration$ === "object");
assert(typeof VectorSearchRerankingConfiguration$ === "object");
assert(typeof VideoSegment$ === "object");
// enums
assert(typeof ActionGroupSignature === "object");
assert(typeof ActionInvocationType === "object");
assert(typeof AgentCollaboration === "object");
assert(typeof AttributeType === "object");
assert(typeof ConfirmationState === "object");
assert(typeof ConversationRole === "object");
assert(typeof CreationMode === "object");
assert(typeof CustomControlMethod === "object");
assert(typeof ExecutionType === "object");
assert(typeof ExternalSourceType === "object");
assert(typeof FileSourceType === "object");
assert(typeof FileUseCase === "object");
assert(typeof FlowCompletionReason === "object");
assert(typeof FlowControlNodeType === "object");
assert(typeof FlowErrorCode === "object");
assert(typeof FlowExecutionErrorType === "object");
assert(typeof FlowExecutionEventType === "object");
assert(typeof FlowExecutionStatus === "object");
assert(typeof FlowNodeInputCategory === "object");
assert(typeof FlowNodeIODataType === "object");
assert(typeof GeneratedQueryType === "object");
assert(typeof GuadrailAction === "object");
assert(typeof GuardrailAction === "object");
assert(typeof GuardrailContentFilterConfidence === "object");
assert(typeof GuardrailContentFilterType === "object");
assert(typeof GuardrailContentPolicyAction === "object");
assert(typeof GuardrailManagedWordType === "object");
assert(typeof GuardrailPiiEntityType === "object");
assert(typeof GuardrailSensitiveInformationPolicyAction === "object");
assert(typeof GuardrailTopicPolicyAction === "object");
assert(typeof GuardrailTopicType === "object");
assert(typeof GuardrailWordPolicyAction === "object");
assert(typeof ImageFormat === "object");
assert(typeof ImageInputFormat === "object");
assert(typeof InputImageFormat === "object");
assert(typeof InputQueryType === "object");
assert(typeof InvocationType === "object");
assert(typeof KnowledgeBaseQueryType === "object");
assert(typeof MemoryType === "object");
assert(typeof NodeErrorCode === "object");
assert(typeof NodeType === "object");
assert(typeof OrchestrationType === "object");
assert(typeof ParameterType === "object");
assert(typeof PayloadType === "object");
assert(typeof PerformanceConfigLatency === "object");
assert(typeof PromptState === "object");
assert(typeof PromptType === "object");
assert(typeof QueryTransformationMode === "object");
assert(typeof QueryTransformationType === "object");
assert(typeof RelayConversationHistory === "object");
assert(typeof RequireConfirmation === "object");
assert(typeof RerankDocumentType === "object");
assert(typeof RerankingConfigurationType === "object");
assert(typeof RerankingMetadataSelectionMode === "object");
assert(typeof RerankQueryContentType === "object");
assert(typeof RerankSourceType === "object");
assert(typeof ResponseState === "object");
assert(typeof RetrievalResultContentColumnType === "object");
assert(typeof RetrievalResultContentType === "object");
assert(typeof RetrievalResultLocationType === "object");
assert(typeof RetrieveAndGenerateType === "object");
assert(typeof SearchType === "object");
assert(typeof SessionStatus === "object");
assert(typeof Source === "object");
assert(typeof TextToSqlConfigurationType === "object");
assert(typeof Type === "object");
assert(typeof VectorSearchRerankingConfigurationType === "object");
// errors
assert(AccessDeniedException.prototype instanceof BedrockAgentRuntimeServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(BadGatewayException.prototype instanceof BedrockAgentRuntimeServiceException);
assert(typeof BadGatewayException$ === "object");
assert(ConflictException.prototype instanceof BedrockAgentRuntimeServiceException);
assert(typeof ConflictException$ === "object");
assert(DependencyFailedException.prototype instanceof BedrockAgentRuntimeServiceException);
assert(typeof DependencyFailedException$ === "object");
assert(InternalServerException.prototype instanceof BedrockAgentRuntimeServiceException);
assert(typeof InternalServerException$ === "object");
assert(ModelNotReadyException.prototype instanceof BedrockAgentRuntimeServiceException);
assert(typeof ModelNotReadyException$ === "object");
assert(ResourceNotFoundException.prototype instanceof BedrockAgentRuntimeServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof BedrockAgentRuntimeServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof BedrockAgentRuntimeServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof BedrockAgentRuntimeServiceException);
assert(typeof ValidationException$ === "object");
assert(BedrockAgentRuntimeServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetAgentMemory === "function");
assert(typeof paginateListFlowExecutionEvents === "function");
assert(typeof paginateListFlowExecutions === "function");
assert(typeof paginateListInvocationSteps === "function");
assert(typeof paginateListInvocations === "function");
assert(typeof paginateListSessions === "function");
assert(typeof paginateRerank === "function");
assert(typeof paginateRetrieve === "function");
console.log(`BedrockAgentRuntime index test passed.`);
