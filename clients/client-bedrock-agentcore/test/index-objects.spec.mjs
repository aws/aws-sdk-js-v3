import {
  AccessDeniedException,
  AutomationStreamStatus,
  BatchCreateMemoryRecordsCommand,
  BatchDeleteMemoryRecordsCommand,
  BatchUpdateMemoryRecordsCommand,
  BedrockAgentCore,
  BedrockAgentCoreClient,
  BedrockAgentCoreServiceException,
  BrowserSessionStatus,
  CodeInterpreterSessionStatus,
  CompleteResourceTokenAuthCommand,
  ConflictException,
  ContentBlockType,
  CreateEventCommand,
  DeleteEventCommand,
  DeleteMemoryRecordCommand,
  EvaluateCommand,
  ExtractionJobStatus,
  GetAgentCardCommand,
  GetBrowserSessionCommand,
  GetCodeInterpreterSessionCommand,
  GetEventCommand,
  GetMemoryRecordCommand,
  GetResourceApiKeyCommand,
  GetResourceOauth2TokenCommand,
  GetWorkloadAccessTokenCommand,
  GetWorkloadAccessTokenForJWTCommand,
  GetWorkloadAccessTokenForUserIdCommand,
  InternalServerException,
  InvokeAgentRuntimeCommand,
  InvokeCodeInterpreterCommand,
  ListActorsCommand,
  ListBrowserSessionsCommand,
  ListCodeInterpreterSessionsCommand,
  ListEventsCommand,
  ListMemoryExtractionJobsCommand,
  ListMemoryRecordsCommand,
  ListSessionsCommand,
  MemoryRecordStatus,
  Oauth2FlowType,
  OperatorType,
  ProgrammingLanguage,
  ResourceContentType,
  ResourceNotFoundException,
  RetrieveMemoryRecordsCommand,
  Role,
  ServiceQuotaExceededException,
  SessionStatus,
  StartBrowserSessionCommand,
  StartCodeInterpreterSessionCommand,
  StartMemoryExtractionJobCommand,
  StopBrowserSessionCommand,
  StopCodeInterpreterSessionCommand,
  StopRuntimeSessionCommand,
  TaskStatus,
  ThrottlingException,
  ToolName,
  UpdateBrowserStreamCommand,
  ValidationException,
  ValidationExceptionReason,
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
assert(typeof BatchDeleteMemoryRecordsCommand === "function");
assert(typeof BatchUpdateMemoryRecordsCommand === "function");
assert(typeof CompleteResourceTokenAuthCommand === "function");
assert(typeof CreateEventCommand === "function");
assert(typeof DeleteEventCommand === "function");
assert(typeof DeleteMemoryRecordCommand === "function");
assert(typeof EvaluateCommand === "function");
assert(typeof GetAgentCardCommand === "function");
assert(typeof GetBrowserSessionCommand === "function");
assert(typeof GetCodeInterpreterSessionCommand === "function");
assert(typeof GetEventCommand === "function");
assert(typeof GetMemoryRecordCommand === "function");
assert(typeof GetResourceApiKeyCommand === "function");
assert(typeof GetResourceOauth2TokenCommand === "function");
assert(typeof GetWorkloadAccessTokenCommand === "function");
assert(typeof GetWorkloadAccessTokenForJWTCommand === "function");
assert(typeof GetWorkloadAccessTokenForUserIdCommand === "function");
assert(typeof InvokeAgentRuntimeCommand === "function");
assert(typeof InvokeCodeInterpreterCommand === "function");
assert(typeof ListActorsCommand === "function");
assert(typeof ListBrowserSessionsCommand === "function");
assert(typeof ListCodeInterpreterSessionsCommand === "function");
assert(typeof ListEventsCommand === "function");
assert(typeof ListMemoryExtractionJobsCommand === "function");
assert(typeof ListMemoryRecordsCommand === "function");
assert(typeof ListSessionsCommand === "function");
assert(typeof RetrieveMemoryRecordsCommand === "function");
assert(typeof StartBrowserSessionCommand === "function");
assert(typeof StartCodeInterpreterSessionCommand === "function");
assert(typeof StartMemoryExtractionJobCommand === "function");
assert(typeof StopBrowserSessionCommand === "function");
assert(typeof StopCodeInterpreterSessionCommand === "function");
assert(typeof StopRuntimeSessionCommand === "function");
assert(typeof UpdateBrowserStreamCommand === "function");
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
assert(ConflictException.prototype instanceof BedrockAgentCoreServiceException);
assert(InternalServerException.prototype instanceof BedrockAgentCoreServiceException);
assert(ResourceNotFoundException.prototype instanceof BedrockAgentCoreServiceException);
assert(ServiceQuotaExceededException.prototype instanceof BedrockAgentCoreServiceException);
assert(ThrottlingException.prototype instanceof BedrockAgentCoreServiceException);
assert(ValidationException.prototype instanceof BedrockAgentCoreServiceException);
assert(BedrockAgentCoreServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListActors === "function");
assert(typeof paginateListEvents === "function");
assert(typeof paginateListMemoryExtractionJobs === "function");
assert(typeof paginateListMemoryRecords === "function");
assert(typeof paginateListSessions === "function");
assert(typeof paginateRetrieveMemoryRecords === "function");
console.log(`BedrockAgentCore index test passed.`);
