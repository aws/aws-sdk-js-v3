import {
  AccessDeniedException,
  ActStatus,
  ConflictException,
  CreateActCommand,
  CreateSessionCommand,
  CreateWorkflowDefinitionCommand,
  CreateWorkflowRunCommand,
  DeleteWorkflowDefinitionCommand,
  DeleteWorkflowRunCommand,
  GetWorkflowDefinitionCommand,
  GetWorkflowRunCommand,
  InternalServerException,
  InternalServerExceptionReason,
  InvokeActStepCommand,
  ListActsCommand,
  ListModelsCommand,
  ListSessionsCommand,
  ListWorkflowDefinitionsCommand,
  ListWorkflowRunsCommand,
  ModelStatus,
  NovaAct,
  NovaActClient,
  NovaActServiceException,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  SortOrder,
  ThrottlingException,
  TraceLocationType,
  UpdateActCommand,
  UpdateWorkflowRunCommand,
  ValidationException,
  ValidationExceptionReason,
  WorkflowDefinitionStatus,
  WorkflowRunStatus,
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
assert(typeof CreateSessionCommand === "function");
assert(typeof CreateWorkflowDefinitionCommand === "function");
assert(typeof CreateWorkflowRunCommand === "function");
assert(typeof DeleteWorkflowDefinitionCommand === "function");
assert(typeof DeleteWorkflowRunCommand === "function");
assert(typeof GetWorkflowDefinitionCommand === "function");
assert(typeof GetWorkflowRunCommand === "function");
assert(typeof InvokeActStepCommand === "function");
assert(typeof ListActsCommand === "function");
assert(typeof ListModelsCommand === "function");
assert(typeof ListSessionsCommand === "function");
assert(typeof ListWorkflowDefinitionsCommand === "function");
assert(typeof ListWorkflowRunsCommand === "function");
assert(typeof UpdateActCommand === "function");
assert(typeof UpdateWorkflowRunCommand === "function");
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
assert(ConflictException.prototype instanceof NovaActServiceException);
assert(InternalServerException.prototype instanceof NovaActServiceException);
assert(ResourceNotFoundException.prototype instanceof NovaActServiceException);
assert(ServiceQuotaExceededException.prototype instanceof NovaActServiceException);
assert(ThrottlingException.prototype instanceof NovaActServiceException);
assert(ValidationException.prototype instanceof NovaActServiceException);
assert(NovaActServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListActs === "function");
assert(typeof paginateListSessions === "function");
assert(typeof paginateListWorkflowDefinitions === "function");
assert(typeof paginateListWorkflowRuns === "function");
console.log(`NovaAct index test passed.`);
