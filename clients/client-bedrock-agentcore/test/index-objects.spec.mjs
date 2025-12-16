import {
  AccessDeniedException,
  AccessDeniedException$,
  ActorSummary$,
  AutomationStream$,
  AutomationStreamStatus,
  AutomationStreamUpdate$,
  BatchCreateMemoryRecords$,
  BatchCreateMemoryRecordsCommand,
  BatchCreateMemoryRecordsInput$,
  BatchCreateMemoryRecordsOutput$,
  BatchDeleteMemoryRecords$,
  BatchDeleteMemoryRecordsCommand,
  BatchDeleteMemoryRecordsInput$,
  BatchDeleteMemoryRecordsOutput$,
  BatchUpdateMemoryRecords$,
  BatchUpdateMemoryRecordsCommand,
  BatchUpdateMemoryRecordsInput$,
  BatchUpdateMemoryRecordsOutput$,
  BedrockAgentCore,
  BedrockAgentCoreClient,
  BedrockAgentCoreServiceException,
  Branch$,
  BranchFilter$,
  BrowserSessionStatus,
  BrowserSessionStream$,
  BrowserSessionSummary$,
  CodeInterpreterResult$,
  CodeInterpreterSessionStatus,
  CodeInterpreterSessionSummary$,
  CodeInterpreterStreamOutput$,
  CompleteResourceTokenAuth$,
  CompleteResourceTokenAuthCommand,
  CompleteResourceTokenAuthRequest$,
  CompleteResourceTokenAuthResponse$,
  ConflictException,
  ConflictException$,
  Content$,
  ContentBlock$,
  ContentBlockType,
  Context$,
  Conversational$,
  CreateEvent$,
  CreateEventCommand,
  CreateEventInput$,
  CreateEventOutput$,
  DeleteEvent$,
  DeleteEventCommand,
  DeleteEventInput$,
  DeleteEventOutput$,
  DeleteMemoryRecord$,
  DeleteMemoryRecordCommand,
  DeleteMemoryRecordInput$,
  DeleteMemoryRecordOutput$,
  DuplicateIdException,
  DuplicateIdException$,
  Evaluate$,
  EvaluateCommand,
  EvaluateRequest$,
  EvaluateResponse$,
  EvaluationInput$,
  EvaluationResultContent$,
  EvaluationTarget$,
  Event$,
  EventMetadataFilterExpression$,
  ExtractionJob$,
  ExtractionJobFilterInput$,
  ExtractionJobMessages$,
  ExtractionJobMetadata$,
  ExtractionJobStatus,
  FilterInput$,
  GetAgentCard$,
  GetAgentCardCommand,
  GetAgentCardRequest$,
  GetAgentCardResponse$,
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
  GetResourceApiKey$,
  GetResourceApiKeyCommand,
  GetResourceApiKeyRequest$,
  GetResourceApiKeyResponse$,
  GetResourceOauth2Token$,
  GetResourceOauth2TokenCommand,
  GetResourceOauth2TokenRequest$,
  GetResourceOauth2TokenResponse$,
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
  InputContentBlock$,
  InternalServerException,
  InternalServerException$,
  InvalidInputException,
  InvalidInputException$,
  InvokeAgentRuntime$,
  InvokeAgentRuntimeCommand,
  InvokeAgentRuntimeRequest$,
  InvokeAgentRuntimeResponse$,
  InvokeCodeInterpreter$,
  InvokeCodeInterpreterCommand,
  InvokeCodeInterpreterRequest$,
  InvokeCodeInterpreterResponse$,
  LeftExpression$,
  ListActors$,
  ListActorsCommand,
  ListActorsInput$,
  ListActorsOutput$,
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
  ListSessions$,
  ListSessionsCommand,
  ListSessionsInput$,
  ListSessionsOutput$,
  LiveViewStream$,
  MemoryContent$,
  MemoryMetadataFilterExpression$,
  MemoryRecord$,
  MemoryRecordCreateInput$,
  MemoryRecordDeleteInput$,
  MemoryRecordOutput$,
  MemoryRecordStatus,
  MemoryRecordSummary$,
  MemoryRecordUpdateInput$,
  MessageMetadata$,
  MetadataValue$,
  Oauth2FlowType,
  OperatorType,
  PayloadType$,
  ProgrammingLanguage,
  ResourceContent$,
  ResourceContentType,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RetrieveMemoryRecords$,
  RetrieveMemoryRecordsCommand,
  RetrieveMemoryRecordsInput$,
  RetrieveMemoryRecordsOutput$,
  RightExpression$,
  Role,
  RuntimeClientError,
  RuntimeClientError$,
  SearchCriteria$,
  ServiceException,
  ServiceException$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SessionStatus,
  SessionSummary$,
  SpanContext$,
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
  TaskStatus,
  ThrottledException,
  ThrottledException$,
  ThrottlingException,
  ThrottlingException$,
  TokenUsage$,
  ToolArguments$,
  ToolName,
  ToolResultStructuredContent$,
  UnauthorizedException,
  UnauthorizedException$,
  UpdateBrowserStream$,
  UpdateBrowserStreamCommand,
  UpdateBrowserStreamRequest$,
  UpdateBrowserStreamResponse$,
  UserIdentifier$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
  ViewPort$,
  paginateListActors,
  paginateListEvents,
  paginateListMemoryExtractionJobs,
  paginateListMemoryRecords,
  paginateListSessions,
  paginateRetrieveMemoryRecords,
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
assert(typeof CreateEventCommand === "function");
assert(typeof CreateEvent$ === "object");
assert(typeof DeleteEventCommand === "function");
assert(typeof DeleteEvent$ === "object");
assert(typeof DeleteMemoryRecordCommand === "function");
assert(typeof DeleteMemoryRecord$ === "object");
assert(typeof EvaluateCommand === "function");
assert(typeof Evaluate$ === "object");
assert(typeof GetAgentCardCommand === "function");
assert(typeof GetAgentCard$ === "object");
assert(typeof GetBrowserSessionCommand === "function");
assert(typeof GetBrowserSession$ === "object");
assert(typeof GetCodeInterpreterSessionCommand === "function");
assert(typeof GetCodeInterpreterSession$ === "object");
assert(typeof GetEventCommand === "function");
assert(typeof GetEvent$ === "object");
assert(typeof GetMemoryRecordCommand === "function");
assert(typeof GetMemoryRecord$ === "object");
assert(typeof GetResourceApiKeyCommand === "function");
assert(typeof GetResourceApiKey$ === "object");
assert(typeof GetResourceOauth2TokenCommand === "function");
assert(typeof GetResourceOauth2Token$ === "object");
assert(typeof GetWorkloadAccessTokenCommand === "function");
assert(typeof GetWorkloadAccessToken$ === "object");
assert(typeof GetWorkloadAccessTokenForJWTCommand === "function");
assert(typeof GetWorkloadAccessTokenForJWT$ === "object");
assert(typeof GetWorkloadAccessTokenForUserIdCommand === "function");
assert(typeof GetWorkloadAccessTokenForUserId$ === "object");
assert(typeof InvokeAgentRuntimeCommand === "function");
assert(typeof InvokeAgentRuntime$ === "object");
assert(typeof InvokeCodeInterpreterCommand === "function");
assert(typeof InvokeCodeInterpreter$ === "object");
assert(typeof ListActorsCommand === "function");
assert(typeof ListActors$ === "object");
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
assert(typeof ListSessionsCommand === "function");
assert(typeof ListSessions$ === "object");
assert(typeof RetrieveMemoryRecordsCommand === "function");
assert(typeof RetrieveMemoryRecords$ === "object");
assert(typeof StartBrowserSessionCommand === "function");
assert(typeof StartBrowserSession$ === "object");
assert(typeof StartCodeInterpreterSessionCommand === "function");
assert(typeof StartCodeInterpreterSession$ === "object");
assert(typeof StartMemoryExtractionJobCommand === "function");
assert(typeof StartMemoryExtractionJob$ === "object");
assert(typeof StopBrowserSessionCommand === "function");
assert(typeof StopBrowserSession$ === "object");
assert(typeof StopCodeInterpreterSessionCommand === "function");
assert(typeof StopCodeInterpreterSession$ === "object");
assert(typeof StopRuntimeSessionCommand === "function");
assert(typeof StopRuntimeSession$ === "object");
assert(typeof UpdateBrowserStreamCommand === "function");
assert(typeof UpdateBrowserStream$ === "object");
// structural schemas
assert(typeof ActorSummary$ === "object");
assert(typeof AutomationStream$ === "object");
assert(typeof AutomationStreamUpdate$ === "object");
assert(typeof BatchCreateMemoryRecordsInput$ === "object");
assert(typeof BatchCreateMemoryRecordsOutput$ === "object");
assert(typeof BatchDeleteMemoryRecordsInput$ === "object");
assert(typeof BatchDeleteMemoryRecordsOutput$ === "object");
assert(typeof BatchUpdateMemoryRecordsInput$ === "object");
assert(typeof BatchUpdateMemoryRecordsOutput$ === "object");
assert(typeof Branch$ === "object");
assert(typeof BranchFilter$ === "object");
assert(typeof BrowserSessionStream$ === "object");
assert(typeof BrowserSessionSummary$ === "object");
assert(typeof CodeInterpreterResult$ === "object");
assert(typeof CodeInterpreterSessionSummary$ === "object");
assert(typeof CodeInterpreterStreamOutput$ === "object");
assert(typeof CompleteResourceTokenAuthRequest$ === "object");
assert(typeof CompleteResourceTokenAuthResponse$ === "object");
assert(typeof Content$ === "object");
assert(typeof ContentBlock$ === "object");
assert(typeof Context$ === "object");
assert(typeof Conversational$ === "object");
assert(typeof CreateEventInput$ === "object");
assert(typeof CreateEventOutput$ === "object");
assert(typeof DeleteEventInput$ === "object");
assert(typeof DeleteEventOutput$ === "object");
assert(typeof DeleteMemoryRecordInput$ === "object");
assert(typeof DeleteMemoryRecordOutput$ === "object");
assert(typeof EvaluateRequest$ === "object");
assert(typeof EvaluateResponse$ === "object");
assert(typeof EvaluationInput$ === "object");
assert(typeof EvaluationResultContent$ === "object");
assert(typeof EvaluationTarget$ === "object");
assert(typeof Event$ === "object");
assert(typeof EventMetadataFilterExpression$ === "object");
assert(typeof ExtractionJob$ === "object");
assert(typeof ExtractionJobFilterInput$ === "object");
assert(typeof ExtractionJobMessages$ === "object");
assert(typeof ExtractionJobMetadata$ === "object");
assert(typeof FilterInput$ === "object");
assert(typeof GetAgentCardRequest$ === "object");
assert(typeof GetAgentCardResponse$ === "object");
assert(typeof GetBrowserSessionRequest$ === "object");
assert(typeof GetBrowserSessionResponse$ === "object");
assert(typeof GetCodeInterpreterSessionRequest$ === "object");
assert(typeof GetCodeInterpreterSessionResponse$ === "object");
assert(typeof GetEventInput$ === "object");
assert(typeof GetEventOutput$ === "object");
assert(typeof GetMemoryRecordInput$ === "object");
assert(typeof GetMemoryRecordOutput$ === "object");
assert(typeof GetResourceApiKeyRequest$ === "object");
assert(typeof GetResourceApiKeyResponse$ === "object");
assert(typeof GetResourceOauth2TokenRequest$ === "object");
assert(typeof GetResourceOauth2TokenResponse$ === "object");
assert(typeof GetWorkloadAccessTokenForJWTRequest$ === "object");
assert(typeof GetWorkloadAccessTokenForJWTResponse$ === "object");
assert(typeof GetWorkloadAccessTokenForUserIdRequest$ === "object");
assert(typeof GetWorkloadAccessTokenForUserIdResponse$ === "object");
assert(typeof GetWorkloadAccessTokenRequest$ === "object");
assert(typeof GetWorkloadAccessTokenResponse$ === "object");
assert(typeof InputContentBlock$ === "object");
assert(typeof InvokeAgentRuntimeRequest$ === "object");
assert(typeof InvokeAgentRuntimeResponse$ === "object");
assert(typeof InvokeCodeInterpreterRequest$ === "object");
assert(typeof InvokeCodeInterpreterResponse$ === "object");
assert(typeof LeftExpression$ === "object");
assert(typeof ListActorsInput$ === "object");
assert(typeof ListActorsOutput$ === "object");
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
assert(typeof ListSessionsInput$ === "object");
assert(typeof ListSessionsOutput$ === "object");
assert(typeof LiveViewStream$ === "object");
assert(typeof MemoryContent$ === "object");
assert(typeof MemoryMetadataFilterExpression$ === "object");
assert(typeof MemoryRecord$ === "object");
assert(typeof MemoryRecordCreateInput$ === "object");
assert(typeof MemoryRecordDeleteInput$ === "object");
assert(typeof MemoryRecordOutput$ === "object");
assert(typeof MemoryRecordSummary$ === "object");
assert(typeof MemoryRecordUpdateInput$ === "object");
assert(typeof MessageMetadata$ === "object");
assert(typeof MetadataValue$ === "object");
assert(typeof PayloadType$ === "object");
assert(typeof ResourceContent$ === "object");
assert(typeof RetrieveMemoryRecordsInput$ === "object");
assert(typeof RetrieveMemoryRecordsOutput$ === "object");
assert(typeof RightExpression$ === "object");
assert(typeof SearchCriteria$ === "object");
assert(typeof SessionSummary$ === "object");
assert(typeof SpanContext$ === "object");
assert(typeof StartBrowserSessionRequest$ === "object");
assert(typeof StartBrowserSessionResponse$ === "object");
assert(typeof StartCodeInterpreterSessionRequest$ === "object");
assert(typeof StartCodeInterpreterSessionResponse$ === "object");
assert(typeof StartMemoryExtractionJobInput$ === "object");
assert(typeof StartMemoryExtractionJobOutput$ === "object");
assert(typeof StopBrowserSessionRequest$ === "object");
assert(typeof StopBrowserSessionResponse$ === "object");
assert(typeof StopCodeInterpreterSessionRequest$ === "object");
assert(typeof StopCodeInterpreterSessionResponse$ === "object");
assert(typeof StopRuntimeSessionRequest$ === "object");
assert(typeof StopRuntimeSessionResponse$ === "object");
assert(typeof StreamUpdate$ === "object");
assert(typeof TokenUsage$ === "object");
assert(typeof ToolArguments$ === "object");
assert(typeof ToolResultStructuredContent$ === "object");
assert(typeof UpdateBrowserStreamRequest$ === "object");
assert(typeof UpdateBrowserStreamResponse$ === "object");
assert(typeof UserIdentifier$ === "object");
assert(typeof ValidationExceptionField$ === "object");
assert(typeof ViewPort$ === "object");
// enums
assert(typeof AutomationStreamStatus === "object");
assert(typeof BrowserSessionStatus === "object");
assert(typeof CodeInterpreterSessionStatus === "object");
assert(typeof ContentBlockType === "object");
assert(typeof ExtractionJobStatus === "object");
assert(typeof MemoryRecordStatus === "object");
assert(typeof Oauth2FlowType === "object");
assert(typeof OperatorType === "object");
assert(typeof ProgrammingLanguage === "object");
assert(typeof ResourceContentType === "object");
assert(typeof Role === "object");
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
assert(typeof paginateListActors === "function");
assert(typeof paginateListEvents === "function");
assert(typeof paginateListMemoryExtractionJobs === "function");
assert(typeof paginateListMemoryRecords === "function");
assert(typeof paginateListSessions === "function");
assert(typeof paginateRetrieveMemoryRecords === "function");
console.log(`BedrockAgentCore index test passed.`);
