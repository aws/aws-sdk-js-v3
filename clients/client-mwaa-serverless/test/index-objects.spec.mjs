import {
  CreateWorkflowCommand,
  DeleteWorkflowCommand,
  EncryptionType,
  EngineVersion,
  GetTaskInstanceCommand,
  GetWorkflowCommand,
  GetWorkflowRunCommand,
  ListTagsForResourceCommand,
  ListTaskInstancesCommand,
  ListWorkflowRunsCommand,
  ListWorkflowVersionsCommand,
  ListWorkflowsCommand,
  MWAAServerless,
  MWAAServerlessClient,
  MWAAServerlessServiceException,
  RunType,
  StartWorkflowRunCommand,
  StopWorkflowRunCommand,
  TagResourceCommand,
  TaskInstanceStatus,
  UntagResourceCommand,
  UpdateWorkflowCommand,
  WorkflowRunStatus,
  WorkflowStatus,
  paginateListTaskInstances,
  paginateListWorkflowRuns,
  paginateListWorkflowVersions,
  paginateListWorkflows,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MWAAServerlessClient === "function");
assert(typeof MWAAServerless === "function");
// commands
assert(typeof CreateWorkflowCommand === "function");
assert(typeof DeleteWorkflowCommand === "function");
assert(typeof GetTaskInstanceCommand === "function");
assert(typeof GetWorkflowCommand === "function");
assert(typeof GetWorkflowRunCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTaskInstancesCommand === "function");
assert(typeof ListWorkflowRunsCommand === "function");
assert(typeof ListWorkflowsCommand === "function");
assert(typeof ListWorkflowVersionsCommand === "function");
assert(typeof StartWorkflowRunCommand === "function");
assert(typeof StopWorkflowRunCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateWorkflowCommand === "function");
// enums
assert(typeof EncryptionType === "object");
assert(typeof EngineVersion === "object");
assert(typeof RunType === "object");
assert(typeof TaskInstanceStatus === "object");
assert(typeof WorkflowRunStatus === "object");
assert(typeof WorkflowStatus === "object");
// errors
assert(MWAAServerlessServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListTaskInstances === "function");
assert(typeof paginateListWorkflowRuns === "function");
assert(typeof paginateListWorkflowVersions === "function");
assert(typeof paginateListWorkflows === "function");
console.log(`MWAAServerless index test passed.`);
