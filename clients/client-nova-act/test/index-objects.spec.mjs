import {
  AccessDeniedException,
  AccessDeniedException$,
  ActError$,
  ActStatus,
  ActSummary$,
  Call$,
  CallResult$,
  CallResultContent$,
  ClientInfo$,
  CompatibilityInformation$,
  ConflictException,
  ConflictException$,
  CreateAct$,
  CreateActCommand,
  CreateActRequest$,
  CreateActResponse$,
  CreateSession$,
  CreateSessionCommand,
  CreateSessionRequest$,
  CreateSessionResponse$,
  CreateWorkflowDefinition$,
  CreateWorkflowDefinitionCommand,
  CreateWorkflowDefinitionRequest$,
  CreateWorkflowDefinitionResponse$,
  CreateWorkflowRun$,
  CreateWorkflowRunCommand,
  CreateWorkflowRunRequest$,
  CreateWorkflowRunResponse$,
  DeleteWorkflowDefinition$,
  DeleteWorkflowDefinitionCommand,
  DeleteWorkflowDefinitionRequest$,
  DeleteWorkflowDefinitionResponse$,
  DeleteWorkflowRun$,
  DeleteWorkflowRunCommand,
  DeleteWorkflowRunRequest$,
  DeleteWorkflowRunResponse$,
  GetWorkflowDefinition$,
  GetWorkflowDefinitionCommand,
  GetWorkflowDefinitionRequest$,
  GetWorkflowDefinitionResponse$,
  GetWorkflowRun$,
  GetWorkflowRunCommand,
  GetWorkflowRunRequest$,
  GetWorkflowRunResponse$,
  InternalServerException,
  InternalServerException$,
  InternalServerExceptionReason,
  InvokeActStep$,
  InvokeActStepCommand,
  InvokeActStepRequest$,
  InvokeActStepResponse$,
  ListActs$,
  ListActsCommand,
  ListActsRequest$,
  ListActsResponse$,
  ListModels$,
  ListModelsCommand,
  ListModelsRequest$,
  ListModelsResponse$,
  ListSessions$,
  ListSessionsCommand,
  ListSessionsRequest$,
  ListSessionsResponse$,
  ListWorkflowDefinitions$,
  ListWorkflowDefinitionsCommand,
  ListWorkflowDefinitionsRequest$,
  ListWorkflowDefinitionsResponse$,
  ListWorkflowRuns$,
  ListWorkflowRunsCommand,
  ListWorkflowRunsRequest$,
  ListWorkflowRunsResponse$,
  ModelAlias$,
  ModelLifecycle$,
  ModelStatus,
  ModelSummary$,
  NovaAct,
  NovaActClient,
  NovaActServiceException,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SessionSummary$,
  SortOrder,
  ThrottlingException,
  ThrottlingException$,
  ToolInputSchema$,
  ToolSpec$,
  TraceLocation$,
  TraceLocationType,
  UpdateAct$,
  UpdateActCommand,
  UpdateActRequest$,
  UpdateActResponse$,
  UpdateWorkflowRun$,
  UpdateWorkflowRunCommand,
  UpdateWorkflowRunRequest$,
  UpdateWorkflowRunResponse$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
  WorkflowDefinitionStatus,
  WorkflowDefinitionSummary$,
  WorkflowExportConfig$,
  WorkflowRunStatus,
  WorkflowRunSummary$,
  paginateListActs,
  paginateListSessions,
  paginateListWorkflowDefinitions,
  paginateListWorkflowRuns,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof NovaActClient === "function");
assert(typeof NovaAct === "function");
// commands
assert(typeof CreateActCommand === "function");
assert(typeof CreateAct$ === "object");
assert(typeof CreateSessionCommand === "function");
assert(typeof CreateSession$ === "object");
assert(typeof CreateWorkflowDefinitionCommand === "function");
assert(typeof CreateWorkflowDefinition$ === "object");
assert(typeof CreateWorkflowRunCommand === "function");
assert(typeof CreateWorkflowRun$ === "object");
assert(typeof DeleteWorkflowDefinitionCommand === "function");
assert(typeof DeleteWorkflowDefinition$ === "object");
assert(typeof DeleteWorkflowRunCommand === "function");
assert(typeof DeleteWorkflowRun$ === "object");
assert(typeof GetWorkflowDefinitionCommand === "function");
assert(typeof GetWorkflowDefinition$ === "object");
assert(typeof GetWorkflowRunCommand === "function");
assert(typeof GetWorkflowRun$ === "object");
assert(typeof InvokeActStepCommand === "function");
assert(typeof InvokeActStep$ === "object");
assert(typeof ListActsCommand === "function");
assert(typeof ListActs$ === "object");
assert(typeof ListModelsCommand === "function");
assert(typeof ListModels$ === "object");
assert(typeof ListSessionsCommand === "function");
assert(typeof ListSessions$ === "object");
assert(typeof ListWorkflowDefinitionsCommand === "function");
assert(typeof ListWorkflowDefinitions$ === "object");
assert(typeof ListWorkflowRunsCommand === "function");
assert(typeof ListWorkflowRuns$ === "object");
assert(typeof UpdateActCommand === "function");
assert(typeof UpdateAct$ === "object");
assert(typeof UpdateWorkflowRunCommand === "function");
assert(typeof UpdateWorkflowRun$ === "object");
// structural schemas
assert(typeof ActError$ === "object");
assert(typeof ActSummary$ === "object");
assert(typeof Call$ === "object");
assert(typeof CallResult$ === "object");
assert(typeof CallResultContent$ === "object");
assert(typeof ClientInfo$ === "object");
assert(typeof CompatibilityInformation$ === "object");
assert(typeof CreateActRequest$ === "object");
assert(typeof CreateActResponse$ === "object");
assert(typeof CreateSessionRequest$ === "object");
assert(typeof CreateSessionResponse$ === "object");
assert(typeof CreateWorkflowDefinitionRequest$ === "object");
assert(typeof CreateWorkflowDefinitionResponse$ === "object");
assert(typeof CreateWorkflowRunRequest$ === "object");
assert(typeof CreateWorkflowRunResponse$ === "object");
assert(typeof DeleteWorkflowDefinitionRequest$ === "object");
assert(typeof DeleteWorkflowDefinitionResponse$ === "object");
assert(typeof DeleteWorkflowRunRequest$ === "object");
assert(typeof DeleteWorkflowRunResponse$ === "object");
assert(typeof GetWorkflowDefinitionRequest$ === "object");
assert(typeof GetWorkflowDefinitionResponse$ === "object");
assert(typeof GetWorkflowRunRequest$ === "object");
assert(typeof GetWorkflowRunResponse$ === "object");
assert(typeof InvokeActStepRequest$ === "object");
assert(typeof InvokeActStepResponse$ === "object");
assert(typeof ListActsRequest$ === "object");
assert(typeof ListActsResponse$ === "object");
assert(typeof ListModelsRequest$ === "object");
assert(typeof ListModelsResponse$ === "object");
assert(typeof ListSessionsRequest$ === "object");
assert(typeof ListSessionsResponse$ === "object");
assert(typeof ListWorkflowDefinitionsRequest$ === "object");
assert(typeof ListWorkflowDefinitionsResponse$ === "object");
assert(typeof ListWorkflowRunsRequest$ === "object");
assert(typeof ListWorkflowRunsResponse$ === "object");
assert(typeof ModelAlias$ === "object");
assert(typeof ModelLifecycle$ === "object");
assert(typeof ModelSummary$ === "object");
assert(typeof SessionSummary$ === "object");
assert(typeof ToolInputSchema$ === "object");
assert(typeof ToolSpec$ === "object");
assert(typeof TraceLocation$ === "object");
assert(typeof UpdateActRequest$ === "object");
assert(typeof UpdateActResponse$ === "object");
assert(typeof UpdateWorkflowRunRequest$ === "object");
assert(typeof UpdateWorkflowRunResponse$ === "object");
assert(typeof ValidationExceptionField$ === "object");
assert(typeof WorkflowDefinitionSummary$ === "object");
assert(typeof WorkflowExportConfig$ === "object");
assert(typeof WorkflowRunSummary$ === "object");
// enums
assert(typeof ActStatus === "object");
assert(typeof InternalServerExceptionReason === "object");
assert(typeof ModelStatus === "object");
assert(typeof SortOrder === "object");
assert(typeof TraceLocationType === "object");
assert(typeof ValidationExceptionReason === "object");
assert(typeof WorkflowDefinitionStatus === "object");
assert(typeof WorkflowRunStatus === "object");
// errors
assert(AccessDeniedException.prototype instanceof NovaActServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof NovaActServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof NovaActServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof NovaActServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof NovaActServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof NovaActServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof NovaActServiceException);
assert(typeof ValidationException$ === "object");
assert(NovaActServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListActs === "function");
assert(typeof paginateListSessions === "function");
assert(typeof paginateListWorkflowDefinitions === "function");
assert(typeof paginateListWorkflowRuns === "function");
console.log(`NovaAct index test passed.`);
