import {
  ActStatus,
  CreateActCommand,
  CreateSessionCommand,
  CreateWorkflowDefinitionCommand,
  CreateWorkflowRunCommand,
  DeleteWorkflowDefinitionCommand,
  DeleteWorkflowRunCommand,
  GetWorkflowDefinitionCommand,
  GetWorkflowRunCommand,
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
  SortOrder,
  TraceLocationType,
  UpdateActCommand,
  UpdateWorkflowRunCommand,
  WorkflowDefinitionStatus,
  WorkflowRunStatus,
  paginateListActs,
  paginateListSessions,
  paginateListWorkflowDefinitions,
  paginateListWorkflowRuns,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof NovaActClient === "function")
assert(typeof NovaAct === "function")
// commands
assert(typeof CreateActCommand === "function")
assert(typeof CreateSessionCommand === "function")
assert(typeof CreateWorkflowDefinitionCommand === "function")
assert(typeof CreateWorkflowRunCommand === "function")
assert(typeof DeleteWorkflowDefinitionCommand === "function")
assert(typeof DeleteWorkflowRunCommand === "function")
assert(typeof GetWorkflowDefinitionCommand === "function")
assert(typeof GetWorkflowRunCommand === "function")
assert(typeof InvokeActStepCommand === "function")
assert(typeof ListActsCommand === "function")
assert(typeof ListModelsCommand === "function")
assert(typeof ListSessionsCommand === "function")
assert(typeof ListWorkflowDefinitionsCommand === "function")
assert(typeof ListWorkflowRunsCommand === "function")
assert(typeof UpdateActCommand === "function")
assert(typeof UpdateWorkflowRunCommand === "function")
// enums
assert(typeof ActStatus === "object");
assert(typeof ModelStatus === "object");
assert(typeof SortOrder === "object");
assert(typeof TraceLocationType === "object");
assert(typeof WorkflowDefinitionStatus === "object");
assert(typeof WorkflowRunStatus === "object");
// errors
assert(NovaActServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListActs === "function")
assert(typeof paginateListSessions === "function")
assert(typeof paginateListWorkflowDefinitions === "function")
assert(typeof paginateListWorkflowRuns === "function")
console.log(`NovaAct index test passed.`);
