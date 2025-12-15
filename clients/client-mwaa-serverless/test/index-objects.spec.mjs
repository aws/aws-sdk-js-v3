import {
  AccessDeniedException,
  AccessDeniedException$,
  ConflictException,
  ConflictException$,
  CreateWorkflow$,
  CreateWorkflowCommand,
  CreateWorkflowRequest$,
  CreateWorkflowResponse$,
  DefinitionS3Location$,
  DeleteWorkflow$,
  DeleteWorkflowCommand,
  DeleteWorkflowRequest$,
  DeleteWorkflowResponse$,
  EncryptionConfiguration$,
  EncryptionType,
  EngineVersion,
  GetTaskInstance$,
  GetTaskInstanceCommand,
  GetTaskInstanceRequest$,
  GetTaskInstanceResponse$,
  GetWorkflow$,
  GetWorkflowCommand,
  GetWorkflowRequest$,
  GetWorkflowResponse$,
  GetWorkflowRun$,
  GetWorkflowRunCommand,
  GetWorkflowRunRequest$,
  GetWorkflowRunResponse$,
  InternalServerException,
  InternalServerException$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListTaskInstances$,
  ListTaskInstancesCommand,
  ListTaskInstancesRequest$,
  ListTaskInstancesResponse$,
  ListWorkflowRuns$,
  ListWorkflowRunsCommand,
  ListWorkflowRunsRequest$,
  ListWorkflowRunsResponse$,
  ListWorkflowVersions$,
  ListWorkflowVersionsCommand,
  ListWorkflowVersionsRequest$,
  ListWorkflowVersionsResponse$,
  ListWorkflows$,
  ListWorkflowsCommand,
  ListWorkflowsRequest$,
  ListWorkflowsResponse$,
  LoggingConfiguration$,
  MWAAServerless,
  MWAAServerlessClient,
  MWAAServerlessServiceException,
  NetworkConfiguration$,
  OperationTimeoutException,
  OperationTimeoutException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RunDetailSummary$,
  RunType,
  ScheduleConfiguration$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  StartWorkflowRun$,
  StartWorkflowRunCommand,
  StartWorkflowRunRequest$,
  StartWorkflowRunResponse$,
  StopWorkflowRun$,
  StopWorkflowRunCommand,
  StopWorkflowRunRequest$,
  StopWorkflowRunResponse$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TaskInstanceStatus,
  TaskInstanceSummary$,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateWorkflow$,
  UpdateWorkflowCommand,
  UpdateWorkflowRequest$,
  UpdateWorkflowResponse$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
  WorkflowRunDetail$,
  WorkflowRunStatus,
  WorkflowRunSummary$,
  WorkflowStatus,
  WorkflowSummary$,
  WorkflowVersionSummary$,
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
assert(typeof CreateWorkflow$ === "object");
assert(typeof DeleteWorkflowCommand === "function");
assert(typeof DeleteWorkflow$ === "object");
assert(typeof GetTaskInstanceCommand === "function");
assert(typeof GetTaskInstance$ === "object");
assert(typeof GetWorkflowCommand === "function");
assert(typeof GetWorkflow$ === "object");
assert(typeof GetWorkflowRunCommand === "function");
assert(typeof GetWorkflowRun$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListTaskInstancesCommand === "function");
assert(typeof ListTaskInstances$ === "object");
assert(typeof ListWorkflowRunsCommand === "function");
assert(typeof ListWorkflowRuns$ === "object");
assert(typeof ListWorkflowsCommand === "function");
assert(typeof ListWorkflows$ === "object");
assert(typeof ListWorkflowVersionsCommand === "function");
assert(typeof ListWorkflowVersions$ === "object");
assert(typeof StartWorkflowRunCommand === "function");
assert(typeof StartWorkflowRun$ === "object");
assert(typeof StopWorkflowRunCommand === "function");
assert(typeof StopWorkflowRun$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateWorkflowCommand === "function");
assert(typeof UpdateWorkflow$ === "object");
// structural schemas
assert(typeof CreateWorkflowRequest$ === "object");
assert(typeof CreateWorkflowResponse$ === "object");
assert(typeof DefinitionS3Location$ === "object");
assert(typeof DeleteWorkflowRequest$ === "object");
assert(typeof DeleteWorkflowResponse$ === "object");
assert(typeof EncryptionConfiguration$ === "object");
assert(typeof GetTaskInstanceRequest$ === "object");
assert(typeof GetTaskInstanceResponse$ === "object");
assert(typeof GetWorkflowRequest$ === "object");
assert(typeof GetWorkflowResponse$ === "object");
assert(typeof GetWorkflowRunRequest$ === "object");
assert(typeof GetWorkflowRunResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListTaskInstancesRequest$ === "object");
assert(typeof ListTaskInstancesResponse$ === "object");
assert(typeof ListWorkflowRunsRequest$ === "object");
assert(typeof ListWorkflowRunsResponse$ === "object");
assert(typeof ListWorkflowsRequest$ === "object");
assert(typeof ListWorkflowsResponse$ === "object");
assert(typeof ListWorkflowVersionsRequest$ === "object");
assert(typeof ListWorkflowVersionsResponse$ === "object");
assert(typeof LoggingConfiguration$ === "object");
assert(typeof NetworkConfiguration$ === "object");
assert(typeof RunDetailSummary$ === "object");
assert(typeof ScheduleConfiguration$ === "object");
assert(typeof StartWorkflowRunRequest$ === "object");
assert(typeof StartWorkflowRunResponse$ === "object");
assert(typeof StopWorkflowRunRequest$ === "object");
assert(typeof StopWorkflowRunResponse$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TaskInstanceSummary$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateWorkflowRequest$ === "object");
assert(typeof UpdateWorkflowResponse$ === "object");
assert(typeof ValidationExceptionField$ === "object");
assert(typeof WorkflowRunDetail$ === "object");
assert(typeof WorkflowRunSummary$ === "object");
assert(typeof WorkflowSummary$ === "object");
assert(typeof WorkflowVersionSummary$ === "object");
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
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof MWAAServerlessServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof MWAAServerlessServiceException);
assert(typeof InternalServerException$ === "object");
assert(OperationTimeoutException.prototype instanceof MWAAServerlessServiceException);
assert(typeof OperationTimeoutException$ === "object");
assert(ResourceNotFoundException.prototype instanceof MWAAServerlessServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof MWAAServerlessServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof MWAAServerlessServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof MWAAServerlessServiceException);
assert(typeof ValidationException$ === "object");
assert(MWAAServerlessServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListTaskInstances === "function");
assert(typeof paginateListWorkflowRuns === "function");
assert(typeof paginateListWorkflowVersions === "function");
assert(typeof paginateListWorkflows === "function");
console.log(`MWAAServerless index test passed.`);
