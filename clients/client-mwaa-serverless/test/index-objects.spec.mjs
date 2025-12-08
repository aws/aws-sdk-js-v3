import {
  AccessDeniedException,
  ConflictException,
  CreateWorkflowCommand,
  DeleteWorkflowCommand,
  EncryptionType,
  EngineVersion,
  GetTaskInstanceCommand,
  GetWorkflowCommand,
  GetWorkflowRunCommand,
  InternalServerException,
  ListTagsForResourceCommand,
  ListTaskInstancesCommand,
  ListWorkflowRunsCommand,
  ListWorkflowVersionsCommand,
  ListWorkflowsCommand,
  MWAAServerless,
  MWAAServerlessClient,
  MWAAServerlessServiceException,
  OperationTimeoutException,
  ResourceNotFoundException,
  RunType,
  ServiceQuotaExceededException,
  StartWorkflowRunCommand,
  StopWorkflowRunCommand,
  TagResourceCommand,
  TaskInstanceStatus,
  ThrottlingException,
  UntagResourceCommand,
  UpdateWorkflowCommand,
  ValidationException,
  ValidationExceptionReason,
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
assert(typeof ValidationExceptionReason === "object");
assert(typeof WorkflowRunStatus === "object");
assert(typeof WorkflowStatus === "object");
// errors
assert(AccessDeniedException.prototype instanceof MWAAServerlessServiceException);
assert(ConflictException.prototype instanceof MWAAServerlessServiceException);
assert(InternalServerException.prototype instanceof MWAAServerlessServiceException);
assert(OperationTimeoutException.prototype instanceof MWAAServerlessServiceException);
assert(ResourceNotFoundException.prototype instanceof MWAAServerlessServiceException);
assert(ServiceQuotaExceededException.prototype instanceof MWAAServerlessServiceException);
assert(ThrottlingException.prototype instanceof MWAAServerlessServiceException);
assert(ValidationException.prototype instanceof MWAAServerlessServiceException);
assert(MWAAServerlessServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListTaskInstances === "function");
assert(typeof paginateListWorkflowRuns === "function");
assert(typeof paginateListWorkflowVersions === "function");
assert(typeof paginateListWorkflows === "function");
console.log(`MWAAServerless index test passed.`);
