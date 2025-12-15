import {
  ArrayJobDependency,
  ArrayProperties$,
  ArrayPropertiesDetail$,
  ArrayPropertiesSummary$,
  AssignPublicIp,
  AttemptContainerDetail$,
  AttemptDetail$,
  AttemptEcsTaskDetails$,
  AttemptTaskContainerDetails$,
  Batch,
  BatchClient,
  BatchServiceException,
  CEState,
  CEStatus,
  CEType,
  CRAllocationStrategy,
  CRType,
  CRUpdateAllocationStrategy,
  CancelJob$,
  CancelJobCommand,
  CancelJobRequest$,
  CancelJobResponse$,
  CapacityLimit$,
  ClientException,
  ClientException$,
  ComputeEnvironmentDetail$,
  ComputeEnvironmentOrder$,
  ComputeResource$,
  ComputeResourceUpdate$,
  ConsumableResourceProperties$,
  ConsumableResourceRequirement$,
  ConsumableResourceSummary$,
  ContainerDetail$,
  ContainerOverrides$,
  ContainerProperties$,
  ContainerSummary$,
  CreateComputeEnvironment$,
  CreateComputeEnvironmentCommand,
  CreateComputeEnvironmentRequest$,
  CreateComputeEnvironmentResponse$,
  CreateConsumableResource$,
  CreateConsumableResourceCommand,
  CreateConsumableResourceRequest$,
  CreateConsumableResourceResponse$,
  CreateJobQueue$,
  CreateJobQueueCommand,
  CreateJobQueueRequest$,
  CreateJobQueueResponse$,
  CreateSchedulingPolicy$,
  CreateSchedulingPolicyCommand,
  CreateSchedulingPolicyRequest$,
  CreateSchedulingPolicyResponse$,
  CreateServiceEnvironment$,
  CreateServiceEnvironmentCommand,
  CreateServiceEnvironmentRequest$,
  CreateServiceEnvironmentResponse$,
  DeleteComputeEnvironment$,
  DeleteComputeEnvironmentCommand,
  DeleteComputeEnvironmentRequest$,
  DeleteComputeEnvironmentResponse$,
  DeleteConsumableResource$,
  DeleteConsumableResourceCommand,
  DeleteConsumableResourceRequest$,
  DeleteConsumableResourceResponse$,
  DeleteJobQueue$,
  DeleteJobQueueCommand,
  DeleteJobQueueRequest$,
  DeleteJobQueueResponse$,
  DeleteSchedulingPolicy$,
  DeleteSchedulingPolicyCommand,
  DeleteSchedulingPolicyRequest$,
  DeleteSchedulingPolicyResponse$,
  DeleteServiceEnvironment$,
  DeleteServiceEnvironmentCommand,
  DeleteServiceEnvironmentRequest$,
  DeleteServiceEnvironmentResponse$,
  DeregisterJobDefinition$,
  DeregisterJobDefinitionCommand,
  DeregisterJobDefinitionRequest$,
  DeregisterJobDefinitionResponse$,
  DescribeComputeEnvironments$,
  DescribeComputeEnvironmentsCommand,
  DescribeComputeEnvironmentsRequest$,
  DescribeComputeEnvironmentsResponse$,
  DescribeConsumableResource$,
  DescribeConsumableResourceCommand,
  DescribeConsumableResourceRequest$,
  DescribeConsumableResourceResponse$,
  DescribeJobDefinitions$,
  DescribeJobDefinitionsCommand,
  DescribeJobDefinitionsRequest$,
  DescribeJobDefinitionsResponse$,
  DescribeJobQueues$,
  DescribeJobQueuesCommand,
  DescribeJobQueuesRequest$,
  DescribeJobQueuesResponse$,
  DescribeJobs$,
  DescribeJobsCommand,
  DescribeJobsRequest$,
  DescribeJobsResponse$,
  DescribeSchedulingPolicies$,
  DescribeSchedulingPoliciesCommand,
  DescribeSchedulingPoliciesRequest$,
  DescribeSchedulingPoliciesResponse$,
  DescribeServiceEnvironments$,
  DescribeServiceEnvironmentsCommand,
  DescribeServiceEnvironmentsRequest$,
  DescribeServiceEnvironmentsResponse$,
  DescribeServiceJob$,
  DescribeServiceJobCommand,
  DescribeServiceJobRequest$,
  DescribeServiceJobResponse$,
  Device$,
  DeviceCgroupPermission,
  EFSAuthorizationConfig$,
  EFSAuthorizationConfigIAM,
  EFSTransitEncryption,
  EFSVolumeConfiguration$,
  Ec2Configuration$,
  EcsProperties$,
  EcsPropertiesDetail$,
  EcsPropertiesOverride$,
  EcsTaskDetails$,
  EcsTaskProperties$,
  EksAttemptContainerDetail$,
  EksAttemptDetail$,
  EksConfiguration$,
  EksContainer$,
  EksContainerDetail$,
  EksContainerEnvironmentVariable$,
  EksContainerOverride$,
  EksContainerResourceRequirements$,
  EksContainerSecurityContext$,
  EksContainerVolumeMount$,
  EksEmptyDir$,
  EksHostPath$,
  EksMetadata$,
  EksPersistentVolumeClaim$,
  EksPodProperties$,
  EksPodPropertiesDetail$,
  EksPodPropertiesOverride$,
  EksProperties$,
  EksPropertiesDetail$,
  EksPropertiesOverride$,
  EksSecret$,
  EksVolume$,
  EphemeralStorage$,
  EvaluateOnExit$,
  FairsharePolicy$,
  FargatePlatformConfiguration$,
  FirelensConfiguration$,
  FirelensConfigurationType,
  FrontOfQueueDetail$,
  FrontOfQueueJobSummary$,
  GetJobQueueSnapshot$,
  GetJobQueueSnapshotCommand,
  GetJobQueueSnapshotRequest$,
  GetJobQueueSnapshotResponse$,
  Host$,
  ImagePullSecret$,
  JQState,
  JQStatus,
  JobDefinition$,
  JobDefinitionType,
  JobDependency$,
  JobDetail$,
  JobQueueDetail$,
  JobQueueType,
  JobStateTimeLimitAction$,
  JobStateTimeLimitActionsAction,
  JobStateTimeLimitActionsState,
  JobStatus,
  JobSummary$,
  JobTimeout$,
  KeyValuePair$,
  KeyValuesPair$,
  LatestServiceJobAttempt$,
  LaunchTemplateSpecification$,
  LaunchTemplateSpecificationOverride$,
  LinuxParameters$,
  ListConsumableResources$,
  ListConsumableResourcesCommand,
  ListConsumableResourcesRequest$,
  ListConsumableResourcesResponse$,
  ListJobs$,
  ListJobsByConsumableResource$,
  ListJobsByConsumableResourceCommand,
  ListJobsByConsumableResourceRequest$,
  ListJobsByConsumableResourceResponse$,
  ListJobsByConsumableResourceSummary$,
  ListJobsCommand,
  ListJobsRequest$,
  ListJobsResponse$,
  ListSchedulingPolicies$,
  ListSchedulingPoliciesCommand,
  ListSchedulingPoliciesRequest$,
  ListSchedulingPoliciesResponse$,
  ListServiceJobs$,
  ListServiceJobsCommand,
  ListServiceJobsRequest$,
  ListServiceJobsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  LogConfiguration$,
  LogDriver,
  MountPoint$,
  NetworkConfiguration$,
  NetworkInterface$,
  NodeDetails$,
  NodeOverrides$,
  NodeProperties$,
  NodePropertiesSummary$,
  NodePropertyOverride$,
  NodeRangeProperty$,
  OrchestrationType,
  PlatformCapability,
  RegisterJobDefinition$,
  RegisterJobDefinitionCommand,
  RegisterJobDefinitionRequest$,
  RegisterJobDefinitionResponse$,
  RepositoryCredentials$,
  ResourceRequirement$,
  ResourceType,
  RetryAction,
  RetryStrategy$,
  RuntimePlatform$,
  SchedulingPolicyDetail$,
  SchedulingPolicyListingDetail$,
  Secret$,
  ServerException,
  ServerException$,
  ServiceEnvironmentDetail$,
  ServiceEnvironmentOrder$,
  ServiceEnvironmentState,
  ServiceEnvironmentStatus,
  ServiceEnvironmentType,
  ServiceJobAttemptDetail$,
  ServiceJobEvaluateOnExit$,
  ServiceJobRetryAction,
  ServiceJobRetryStrategy$,
  ServiceJobStatus,
  ServiceJobSummary$,
  ServiceJobTimeout$,
  ServiceJobType,
  ServiceResourceId$,
  ServiceResourceIdName,
  ShareAttributes$,
  SubmitJob$,
  SubmitJobCommand,
  SubmitJobRequest$,
  SubmitJobResponse$,
  SubmitServiceJob$,
  SubmitServiceJobCommand,
  SubmitServiceJobRequest$,
  SubmitServiceJobResponse$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TaskContainerDependency$,
  TaskContainerDetails$,
  TaskContainerOverrides$,
  TaskContainerProperties$,
  TaskPropertiesOverride$,
  TerminateJob$,
  TerminateJobCommand,
  TerminateJobRequest$,
  TerminateJobResponse$,
  TerminateServiceJob$,
  TerminateServiceJobCommand,
  TerminateServiceJobRequest$,
  TerminateServiceJobResponse$,
  Tmpfs$,
  Ulimit$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateComputeEnvironment$,
  UpdateComputeEnvironmentCommand,
  UpdateComputeEnvironmentRequest$,
  UpdateComputeEnvironmentResponse$,
  UpdateConsumableResource$,
  UpdateConsumableResourceCommand,
  UpdateConsumableResourceRequest$,
  UpdateConsumableResourceResponse$,
  UpdateJobQueue$,
  UpdateJobQueueCommand,
  UpdateJobQueueRequest$,
  UpdateJobQueueResponse$,
  UpdatePolicy$,
  UpdateSchedulingPolicy$,
  UpdateSchedulingPolicyCommand,
  UpdateSchedulingPolicyRequest$,
  UpdateSchedulingPolicyResponse$,
  UpdateServiceEnvironment$,
  UpdateServiceEnvironmentCommand,
  UpdateServiceEnvironmentRequest$,
  UpdateServiceEnvironmentResponse$,
  UserdataType,
  Volume$,
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
assert(typeof CancelJob$ === "object");
assert(typeof CreateComputeEnvironmentCommand === "function");
assert(typeof CreateComputeEnvironment$ === "object");
assert(typeof CreateConsumableResourceCommand === "function");
assert(typeof CreateConsumableResource$ === "object");
assert(typeof CreateJobQueueCommand === "function");
assert(typeof CreateJobQueue$ === "object");
assert(typeof CreateSchedulingPolicyCommand === "function");
assert(typeof CreateSchedulingPolicy$ === "object");
assert(typeof CreateServiceEnvironmentCommand === "function");
assert(typeof CreateServiceEnvironment$ === "object");
assert(typeof DeleteComputeEnvironmentCommand === "function");
assert(typeof DeleteComputeEnvironment$ === "object");
assert(typeof DeleteConsumableResourceCommand === "function");
assert(typeof DeleteConsumableResource$ === "object");
assert(typeof DeleteJobQueueCommand === "function");
assert(typeof DeleteJobQueue$ === "object");
assert(typeof DeleteSchedulingPolicyCommand === "function");
assert(typeof DeleteSchedulingPolicy$ === "object");
assert(typeof DeleteServiceEnvironmentCommand === "function");
assert(typeof DeleteServiceEnvironment$ === "object");
assert(typeof DeregisterJobDefinitionCommand === "function");
assert(typeof DeregisterJobDefinition$ === "object");
assert(typeof DescribeComputeEnvironmentsCommand === "function");
assert(typeof DescribeComputeEnvironments$ === "object");
assert(typeof DescribeConsumableResourceCommand === "function");
assert(typeof DescribeConsumableResource$ === "object");
assert(typeof DescribeJobDefinitionsCommand === "function");
assert(typeof DescribeJobDefinitions$ === "object");
assert(typeof DescribeJobQueuesCommand === "function");
assert(typeof DescribeJobQueues$ === "object");
assert(typeof DescribeJobsCommand === "function");
assert(typeof DescribeJobs$ === "object");
assert(typeof DescribeSchedulingPoliciesCommand === "function");
assert(typeof DescribeSchedulingPolicies$ === "object");
assert(typeof DescribeServiceEnvironmentsCommand === "function");
assert(typeof DescribeServiceEnvironments$ === "object");
assert(typeof DescribeServiceJobCommand === "function");
assert(typeof DescribeServiceJob$ === "object");
assert(typeof GetJobQueueSnapshotCommand === "function");
assert(typeof GetJobQueueSnapshot$ === "object");
assert(typeof ListConsumableResourcesCommand === "function");
assert(typeof ListConsumableResources$ === "object");
assert(typeof ListJobsCommand === "function");
assert(typeof ListJobs$ === "object");
assert(typeof ListJobsByConsumableResourceCommand === "function");
assert(typeof ListJobsByConsumableResource$ === "object");
assert(typeof ListSchedulingPoliciesCommand === "function");
assert(typeof ListSchedulingPolicies$ === "object");
assert(typeof ListServiceJobsCommand === "function");
assert(typeof ListServiceJobs$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof RegisterJobDefinitionCommand === "function");
assert(typeof RegisterJobDefinition$ === "object");
assert(typeof SubmitJobCommand === "function");
assert(typeof SubmitJob$ === "object");
assert(typeof SubmitServiceJobCommand === "function");
assert(typeof SubmitServiceJob$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof TerminateJobCommand === "function");
assert(typeof TerminateJob$ === "object");
assert(typeof TerminateServiceJobCommand === "function");
assert(typeof TerminateServiceJob$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateComputeEnvironmentCommand === "function");
assert(typeof UpdateComputeEnvironment$ === "object");
assert(typeof UpdateConsumableResourceCommand === "function");
assert(typeof UpdateConsumableResource$ === "object");
assert(typeof UpdateJobQueueCommand === "function");
assert(typeof UpdateJobQueue$ === "object");
assert(typeof UpdateSchedulingPolicyCommand === "function");
assert(typeof UpdateSchedulingPolicy$ === "object");
assert(typeof UpdateServiceEnvironmentCommand === "function");
assert(typeof UpdateServiceEnvironment$ === "object");
// structural schemas
assert(typeof ArrayProperties$ === "object");
assert(typeof ArrayPropertiesDetail$ === "object");
assert(typeof ArrayPropertiesSummary$ === "object");
assert(typeof AttemptContainerDetail$ === "object");
assert(typeof AttemptDetail$ === "object");
assert(typeof AttemptEcsTaskDetails$ === "object");
assert(typeof AttemptTaskContainerDetails$ === "object");
assert(typeof CancelJobRequest$ === "object");
assert(typeof CancelJobResponse$ === "object");
assert(typeof CapacityLimit$ === "object");
assert(typeof ComputeEnvironmentDetail$ === "object");
assert(typeof ComputeEnvironmentOrder$ === "object");
assert(typeof ComputeResource$ === "object");
assert(typeof ComputeResourceUpdate$ === "object");
assert(typeof ConsumableResourceProperties$ === "object");
assert(typeof ConsumableResourceRequirement$ === "object");
assert(typeof ConsumableResourceSummary$ === "object");
assert(typeof ContainerDetail$ === "object");
assert(typeof ContainerOverrides$ === "object");
assert(typeof ContainerProperties$ === "object");
assert(typeof ContainerSummary$ === "object");
assert(typeof CreateComputeEnvironmentRequest$ === "object");
assert(typeof CreateComputeEnvironmentResponse$ === "object");
assert(typeof CreateConsumableResourceRequest$ === "object");
assert(typeof CreateConsumableResourceResponse$ === "object");
assert(typeof CreateJobQueueRequest$ === "object");
assert(typeof CreateJobQueueResponse$ === "object");
assert(typeof CreateSchedulingPolicyRequest$ === "object");
assert(typeof CreateSchedulingPolicyResponse$ === "object");
assert(typeof CreateServiceEnvironmentRequest$ === "object");
assert(typeof CreateServiceEnvironmentResponse$ === "object");
assert(typeof DeleteComputeEnvironmentRequest$ === "object");
assert(typeof DeleteComputeEnvironmentResponse$ === "object");
assert(typeof DeleteConsumableResourceRequest$ === "object");
assert(typeof DeleteConsumableResourceResponse$ === "object");
assert(typeof DeleteJobQueueRequest$ === "object");
assert(typeof DeleteJobQueueResponse$ === "object");
assert(typeof DeleteSchedulingPolicyRequest$ === "object");
assert(typeof DeleteSchedulingPolicyResponse$ === "object");
assert(typeof DeleteServiceEnvironmentRequest$ === "object");
assert(typeof DeleteServiceEnvironmentResponse$ === "object");
assert(typeof DeregisterJobDefinitionRequest$ === "object");
assert(typeof DeregisterJobDefinitionResponse$ === "object");
assert(typeof DescribeComputeEnvironmentsRequest$ === "object");
assert(typeof DescribeComputeEnvironmentsResponse$ === "object");
assert(typeof DescribeConsumableResourceRequest$ === "object");
assert(typeof DescribeConsumableResourceResponse$ === "object");
assert(typeof DescribeJobDefinitionsRequest$ === "object");
assert(typeof DescribeJobDefinitionsResponse$ === "object");
assert(typeof DescribeJobQueuesRequest$ === "object");
assert(typeof DescribeJobQueuesResponse$ === "object");
assert(typeof DescribeJobsRequest$ === "object");
assert(typeof DescribeJobsResponse$ === "object");
assert(typeof DescribeSchedulingPoliciesRequest$ === "object");
assert(typeof DescribeSchedulingPoliciesResponse$ === "object");
assert(typeof DescribeServiceEnvironmentsRequest$ === "object");
assert(typeof DescribeServiceEnvironmentsResponse$ === "object");
assert(typeof DescribeServiceJobRequest$ === "object");
assert(typeof DescribeServiceJobResponse$ === "object");
assert(typeof Device$ === "object");
assert(typeof Ec2Configuration$ === "object");
assert(typeof EcsProperties$ === "object");
assert(typeof EcsPropertiesDetail$ === "object");
assert(typeof EcsPropertiesOverride$ === "object");
assert(typeof EcsTaskDetails$ === "object");
assert(typeof EcsTaskProperties$ === "object");
assert(typeof EFSAuthorizationConfig$ === "object");
assert(typeof EFSVolumeConfiguration$ === "object");
assert(typeof EksAttemptContainerDetail$ === "object");
assert(typeof EksAttemptDetail$ === "object");
assert(typeof EksConfiguration$ === "object");
assert(typeof EksContainer$ === "object");
assert(typeof EksContainerDetail$ === "object");
assert(typeof EksContainerEnvironmentVariable$ === "object");
assert(typeof EksContainerOverride$ === "object");
assert(typeof EksContainerResourceRequirements$ === "object");
assert(typeof EksContainerSecurityContext$ === "object");
assert(typeof EksContainerVolumeMount$ === "object");
assert(typeof EksEmptyDir$ === "object");
assert(typeof EksHostPath$ === "object");
assert(typeof EksMetadata$ === "object");
assert(typeof EksPersistentVolumeClaim$ === "object");
assert(typeof EksPodProperties$ === "object");
assert(typeof EksPodPropertiesDetail$ === "object");
assert(typeof EksPodPropertiesOverride$ === "object");
assert(typeof EksProperties$ === "object");
assert(typeof EksPropertiesDetail$ === "object");
assert(typeof EksPropertiesOverride$ === "object");
assert(typeof EksSecret$ === "object");
assert(typeof EksVolume$ === "object");
assert(typeof EphemeralStorage$ === "object");
assert(typeof EvaluateOnExit$ === "object");
assert(typeof FairsharePolicy$ === "object");
assert(typeof FargatePlatformConfiguration$ === "object");
assert(typeof FirelensConfiguration$ === "object");
assert(typeof FrontOfQueueDetail$ === "object");
assert(typeof FrontOfQueueJobSummary$ === "object");
assert(typeof GetJobQueueSnapshotRequest$ === "object");
assert(typeof GetJobQueueSnapshotResponse$ === "object");
assert(typeof Host$ === "object");
assert(typeof ImagePullSecret$ === "object");
assert(typeof JobDefinition$ === "object");
assert(typeof JobDependency$ === "object");
assert(typeof JobDetail$ === "object");
assert(typeof JobQueueDetail$ === "object");
assert(typeof JobStateTimeLimitAction$ === "object");
assert(typeof JobSummary$ === "object");
assert(typeof JobTimeout$ === "object");
assert(typeof KeyValuePair$ === "object");
assert(typeof KeyValuesPair$ === "object");
assert(typeof LatestServiceJobAttempt$ === "object");
assert(typeof LaunchTemplateSpecification$ === "object");
assert(typeof LaunchTemplateSpecificationOverride$ === "object");
assert(typeof LinuxParameters$ === "object");
assert(typeof ListConsumableResourcesRequest$ === "object");
assert(typeof ListConsumableResourcesResponse$ === "object");
assert(typeof ListJobsByConsumableResourceRequest$ === "object");
assert(typeof ListJobsByConsumableResourceResponse$ === "object");
assert(typeof ListJobsByConsumableResourceSummary$ === "object");
assert(typeof ListJobsRequest$ === "object");
assert(typeof ListJobsResponse$ === "object");
assert(typeof ListSchedulingPoliciesRequest$ === "object");
assert(typeof ListSchedulingPoliciesResponse$ === "object");
assert(typeof ListServiceJobsRequest$ === "object");
assert(typeof ListServiceJobsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof LogConfiguration$ === "object");
assert(typeof MountPoint$ === "object");
assert(typeof NetworkConfiguration$ === "object");
assert(typeof NetworkInterface$ === "object");
assert(typeof NodeDetails$ === "object");
assert(typeof NodeOverrides$ === "object");
assert(typeof NodeProperties$ === "object");
assert(typeof NodePropertiesSummary$ === "object");
assert(typeof NodePropertyOverride$ === "object");
assert(typeof NodeRangeProperty$ === "object");
assert(typeof RegisterJobDefinitionRequest$ === "object");
assert(typeof RegisterJobDefinitionResponse$ === "object");
assert(typeof RepositoryCredentials$ === "object");
assert(typeof ResourceRequirement$ === "object");
assert(typeof RetryStrategy$ === "object");
assert(typeof RuntimePlatform$ === "object");
assert(typeof SchedulingPolicyDetail$ === "object");
assert(typeof SchedulingPolicyListingDetail$ === "object");
assert(typeof Secret$ === "object");
assert(typeof ServiceEnvironmentDetail$ === "object");
assert(typeof ServiceEnvironmentOrder$ === "object");
assert(typeof ServiceJobAttemptDetail$ === "object");
assert(typeof ServiceJobEvaluateOnExit$ === "object");
assert(typeof ServiceJobRetryStrategy$ === "object");
assert(typeof ServiceJobSummary$ === "object");
assert(typeof ServiceJobTimeout$ === "object");
assert(typeof ServiceResourceId$ === "object");
assert(typeof ShareAttributes$ === "object");
assert(typeof SubmitJobRequest$ === "object");
assert(typeof SubmitJobResponse$ === "object");
assert(typeof SubmitServiceJobRequest$ === "object");
assert(typeof SubmitServiceJobResponse$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TaskContainerDependency$ === "object");
assert(typeof TaskContainerDetails$ === "object");
assert(typeof TaskContainerOverrides$ === "object");
assert(typeof TaskContainerProperties$ === "object");
assert(typeof TaskPropertiesOverride$ === "object");
assert(typeof TerminateJobRequest$ === "object");
assert(typeof TerminateJobResponse$ === "object");
assert(typeof TerminateServiceJobRequest$ === "object");
assert(typeof TerminateServiceJobResponse$ === "object");
assert(typeof Tmpfs$ === "object");
assert(typeof Ulimit$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateComputeEnvironmentRequest$ === "object");
assert(typeof UpdateComputeEnvironmentResponse$ === "object");
assert(typeof UpdateConsumableResourceRequest$ === "object");
assert(typeof UpdateConsumableResourceResponse$ === "object");
assert(typeof UpdateJobQueueRequest$ === "object");
assert(typeof UpdateJobQueueResponse$ === "object");
assert(typeof UpdatePolicy$ === "object");
assert(typeof UpdateSchedulingPolicyRequest$ === "object");
assert(typeof UpdateSchedulingPolicyResponse$ === "object");
assert(typeof UpdateServiceEnvironmentRequest$ === "object");
assert(typeof UpdateServiceEnvironmentResponse$ === "object");
assert(typeof Volume$ === "object");
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
assert(typeof ClientException$ === "object");
assert(ServerException.prototype instanceof BatchServiceException);
assert(typeof ServerException$ === "object");
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
