import {
  ArrayJobDependency,
  AssignPublicIp,
  Batch,
  BatchClient,
  BatchServiceException,
  CEState,
  CEStatus,
  CEType,
  CRAllocationStrategy,
  CRType,
  CRUpdateAllocationStrategy,
  CancelJobCommand,
  ClientException,
  CreateComputeEnvironmentCommand,
  CreateConsumableResourceCommand,
  CreateJobQueueCommand,
  CreateSchedulingPolicyCommand,
  CreateServiceEnvironmentCommand,
  DeleteComputeEnvironmentCommand,
  DeleteConsumableResourceCommand,
  DeleteJobQueueCommand,
  DeleteSchedulingPolicyCommand,
  DeleteServiceEnvironmentCommand,
  DeregisterJobDefinitionCommand,
  DescribeComputeEnvironmentsCommand,
  DescribeConsumableResourceCommand,
  DescribeJobDefinitionsCommand,
  DescribeJobQueuesCommand,
  DescribeJobsCommand,
  DescribeSchedulingPoliciesCommand,
  DescribeServiceEnvironmentsCommand,
  DescribeServiceJobCommand,
  DeviceCgroupPermission,
  EFSAuthorizationConfigIAM,
  EFSTransitEncryption,
  FirelensConfigurationType,
  GetJobQueueSnapshotCommand,
  JQState,
  JQStatus,
  JobDefinitionType,
  JobQueueType,
  JobStateTimeLimitActionsAction,
  JobStateTimeLimitActionsState,
  JobStatus,
  ListConsumableResourcesCommand,
  ListJobsByConsumableResourceCommand,
  ListJobsCommand,
  ListSchedulingPoliciesCommand,
  ListServiceJobsCommand,
  ListTagsForResourceCommand,
  LogDriver,
  OrchestrationType,
  PlatformCapability,
  RegisterJobDefinitionCommand,
  ResourceType,
  RetryAction,
  ServerException,
  ServiceEnvironmentState,
  ServiceEnvironmentStatus,
  ServiceEnvironmentType,
  ServiceJobRetryAction,
  ServiceJobStatus,
  ServiceJobType,
  ServiceResourceIdName,
  SubmitJobCommand,
  SubmitServiceJobCommand,
  TagResourceCommand,
  TerminateJobCommand,
  TerminateServiceJobCommand,
  UntagResourceCommand,
  UpdateComputeEnvironmentCommand,
  UpdateConsumableResourceCommand,
  UpdateJobQueueCommand,
  UpdateSchedulingPolicyCommand,
  UpdateServiceEnvironmentCommand,
  UserdataType,
  paginateDescribeComputeEnvironments,
  paginateDescribeJobDefinitions,
  paginateDescribeJobQueues,
  paginateDescribeServiceEnvironments,
  paginateListConsumableResources,
  paginateListJobs,
  paginateListJobsByConsumableResource,
  paginateListSchedulingPolicies,
  paginateListServiceJobs,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof BatchClient === "function");
assert(typeof Batch === "function");
// commands
assert(typeof CancelJobCommand === "function");
assert(typeof CreateComputeEnvironmentCommand === "function");
assert(typeof CreateConsumableResourceCommand === "function");
assert(typeof CreateJobQueueCommand === "function");
assert(typeof CreateSchedulingPolicyCommand === "function");
assert(typeof CreateServiceEnvironmentCommand === "function");
assert(typeof DeleteComputeEnvironmentCommand === "function");
assert(typeof DeleteConsumableResourceCommand === "function");
assert(typeof DeleteJobQueueCommand === "function");
assert(typeof DeleteSchedulingPolicyCommand === "function");
assert(typeof DeleteServiceEnvironmentCommand === "function");
assert(typeof DeregisterJobDefinitionCommand === "function");
assert(typeof DescribeComputeEnvironmentsCommand === "function");
assert(typeof DescribeConsumableResourceCommand === "function");
assert(typeof DescribeJobDefinitionsCommand === "function");
assert(typeof DescribeJobQueuesCommand === "function");
assert(typeof DescribeJobsCommand === "function");
assert(typeof DescribeSchedulingPoliciesCommand === "function");
assert(typeof DescribeServiceEnvironmentsCommand === "function");
assert(typeof DescribeServiceJobCommand === "function");
assert(typeof GetJobQueueSnapshotCommand === "function");
assert(typeof ListConsumableResourcesCommand === "function");
assert(typeof ListJobsCommand === "function");
assert(typeof ListJobsByConsumableResourceCommand === "function");
assert(typeof ListSchedulingPoliciesCommand === "function");
assert(typeof ListServiceJobsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof RegisterJobDefinitionCommand === "function");
assert(typeof SubmitJobCommand === "function");
assert(typeof SubmitServiceJobCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof TerminateJobCommand === "function");
assert(typeof TerminateServiceJobCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateComputeEnvironmentCommand === "function");
assert(typeof UpdateConsumableResourceCommand === "function");
assert(typeof UpdateJobQueueCommand === "function");
assert(typeof UpdateSchedulingPolicyCommand === "function");
assert(typeof UpdateServiceEnvironmentCommand === "function");
// enums
assert(typeof ArrayJobDependency === "object");
assert(typeof AssignPublicIp === "object");
assert(typeof CEState === "object");
assert(typeof CEStatus === "object");
assert(typeof CEType === "object");
assert(typeof CRAllocationStrategy === "object");
assert(typeof CRType === "object");
assert(typeof CRUpdateAllocationStrategy === "object");
assert(typeof DeviceCgroupPermission === "object");
assert(typeof EFSAuthorizationConfigIAM === "object");
assert(typeof EFSTransitEncryption === "object");
assert(typeof FirelensConfigurationType === "object");
assert(typeof JobDefinitionType === "object");
assert(typeof JobQueueType === "object");
assert(typeof JobStateTimeLimitActionsAction === "object");
assert(typeof JobStateTimeLimitActionsState === "object");
assert(typeof JobStatus === "object");
assert(typeof JQState === "object");
assert(typeof JQStatus === "object");
assert(typeof LogDriver === "object");
assert(typeof OrchestrationType === "object");
assert(typeof PlatformCapability === "object");
assert(typeof ResourceType === "object");
assert(typeof RetryAction === "object");
assert(typeof ServiceEnvironmentState === "object");
assert(typeof ServiceEnvironmentStatus === "object");
assert(typeof ServiceEnvironmentType === "object");
assert(typeof ServiceJobRetryAction === "object");
assert(typeof ServiceJobStatus === "object");
assert(typeof ServiceJobType === "object");
assert(typeof ServiceResourceIdName === "object");
assert(typeof UserdataType === "object");
// errors
assert(ClientException.prototype instanceof BatchServiceException);
assert(ServerException.prototype instanceof BatchServiceException);
assert(BatchServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeComputeEnvironments === "function");
assert(typeof paginateDescribeJobDefinitions === "function");
assert(typeof paginateDescribeJobQueues === "function");
assert(typeof paginateDescribeServiceEnvironments === "function");
assert(typeof paginateListConsumableResources === "function");
assert(typeof paginateListJobs === "function");
assert(typeof paginateListJobsByConsumableResource === "function");
assert(typeof paginateListSchedulingPolicies === "function");
assert(typeof paginateListServiceJobs === "function");
console.log(`Batch index test passed.`);
