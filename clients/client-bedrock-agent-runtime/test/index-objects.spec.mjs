import {
  AccessDeniedException,
  ActionGroupSignature,
  ActionInvocationType,
  AgentCollaboration,
  AttributeType,
  BadGatewayException,
  BedrockAgentRuntime,
  BedrockAgentRuntimeClient,
  BedrockAgentRuntimeServiceException,
  ConfirmationState,
  ConflictException,
  ConversationRole,
  CreateInvocationCommand,
  CreateSessionCommand,
  CreationMode,
  CustomControlMethod,
  DeleteAgentMemoryCommand,
  DeleteSessionCommand,
  DependencyFailedException,
  EndSessionCommand,
  ExecutionType,
  ExternalSourceType,
  FileSourceType,
  FileUseCase,
  FlowCompletionReason,
  FlowControlNodeType,
  FlowErrorCode,
  FlowExecutionErrorType,
  FlowExecutionEventType,
  FlowExecutionStatus,
  FlowNodeIODataType,
  FlowNodeInputCategory,
  GenerateQueryCommand,
  GeneratedQueryType,
  GetAgentMemoryCommand,
  GetExecutionFlowSnapshotCommand,
  GetFlowExecutionCommand,
  GetInvocationStepCommand,
  GetSessionCommand,
  GuadrailAction,
  GuardrailAction,
  GuardrailContentFilterConfidence,
  GuardrailContentFilterType,
  GuardrailContentPolicyAction,
  GuardrailManagedWordType,
  GuardrailPiiEntityType,
  GuardrailSensitiveInformationPolicyAction,
  GuardrailTopicPolicyAction,
  GuardrailTopicType,
  GuardrailWordPolicyAction,
  ImageFormat,
  ImageInputFormat,
  InputImageFormat,
  InputQueryType,
  InternalServerException,
  InvocationType,
  InvokeAgentCommand,
  InvokeFlowCommand,
  InvokeInlineAgentCommand,
  KnowledgeBaseQueryType,
  ListFlowExecutionEventsCommand,
  ListFlowExecutionsCommand,
  ListInvocationStepsCommand,
  ListInvocationsCommand,
  ListSessionsCommand,
  ListTagsForResourceCommand,
  MemoryType,
  ModelNotReadyException,
  NodeErrorCode,
  NodeType,
  OptimizePromptCommand,
  OrchestrationType,
  ParameterType,
  PayloadType,
  PerformanceConfigLatency,
  PromptState,
  PromptType,
  PutInvocationStepCommand,
  QueryTransformationMode,
  QueryTransformationType,
  RelayConversationHistory,
  RequireConfirmation,
  RerankCommand,
  RerankDocumentType,
  RerankQueryContentType,
  RerankSourceType,
  RerankingConfigurationType,
  RerankingMetadataSelectionMode,
  ResourceNotFoundException,
  ResponseState,
  RetrievalResultContentColumnType,
  RetrievalResultContentType,
  RetrievalResultLocationType,
  RetrieveAndGenerateCommand,
  RetrieveAndGenerateStreamCommand,
  RetrieveAndGenerateType,
  RetrieveCommand,
  SearchType,
  ServiceQuotaExceededException,
  SessionStatus,
  Source,
  StartFlowExecutionCommand,
  StopFlowExecutionCommand,
  TagResourceCommand,
  TextToSqlConfigurationType,
  ThrottlingException,
  Type,
  UntagResourceCommand,
  UpdateSessionCommand,
  ValidationException,
  VectorSearchRerankingConfigurationType,
  paginateGetAgentMemory,
  paginateListFlowExecutionEvents,
  paginateListFlowExecutions,
  paginateListInvocationSteps,
  paginateListInvocations,
  paginateListSessions,
  paginateRerank,
  paginateRetrieve,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof BedrockAgentRuntimeClient === "function");
assert(typeof BedrockAgentRuntime === "function");
// commands
assert(typeof CreateInvocationCommand === "function");
assert(typeof CreateSessionCommand === "function");
assert(typeof DeleteAgentMemoryCommand === "function");
assert(typeof DeleteSessionCommand === "function");
assert(typeof EndSessionCommand === "function");
assert(typeof GenerateQueryCommand === "function");
assert(typeof GetAgentMemoryCommand === "function");
assert(typeof GetExecutionFlowSnapshotCommand === "function");
assert(typeof GetFlowExecutionCommand === "function");
assert(typeof GetInvocationStepCommand === "function");
assert(typeof GetSessionCommand === "function");
assert(typeof InvokeAgentCommand === "function");
assert(typeof InvokeFlowCommand === "function");
assert(typeof InvokeInlineAgentCommand === "function");
assert(typeof ListFlowExecutionEventsCommand === "function");
assert(typeof ListFlowExecutionsCommand === "function");
assert(typeof ListInvocationsCommand === "function");
assert(typeof ListInvocationStepsCommand === "function");
assert(typeof ListSessionsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof OptimizePromptCommand === "function");
assert(typeof PutInvocationStepCommand === "function");
assert(typeof RerankCommand === "function");
assert(typeof RetrieveCommand === "function");
assert(typeof RetrieveAndGenerateCommand === "function");
assert(typeof RetrieveAndGenerateStreamCommand === "function");
assert(typeof StartFlowExecutionCommand === "function");
assert(typeof StopFlowExecutionCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateSessionCommand === "function");
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
assert(BadGatewayException.prototype instanceof BedrockAgentRuntimeServiceException);
assert(ConflictException.prototype instanceof BedrockAgentRuntimeServiceException);
assert(DependencyFailedException.prototype instanceof BedrockAgentRuntimeServiceException);
assert(InternalServerException.prototype instanceof BedrockAgentRuntimeServiceException);
assert(ModelNotReadyException.prototype instanceof BedrockAgentRuntimeServiceException);
assert(ResourceNotFoundException.prototype instanceof BedrockAgentRuntimeServiceException);
assert(ServiceQuotaExceededException.prototype instanceof BedrockAgentRuntimeServiceException);
assert(ThrottlingException.prototype instanceof BedrockAgentRuntimeServiceException);
assert(ValidationException.prototype instanceof BedrockAgentRuntimeServiceException);
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
