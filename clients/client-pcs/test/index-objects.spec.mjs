import {
  AccessDeniedException,
  AccessDeniedException$,
  Accounting$,
  AccountingMode,
  AccountingRequest$,
  Cluster$,
  ClusterSlurmConfiguration$,
  ClusterSlurmConfigurationRequest$,
  ClusterStatus,
  ClusterSummary$,
  ComputeNodeGroup$,
  ComputeNodeGroupConfiguration$,
  ComputeNodeGroupSlurmConfiguration$,
  ComputeNodeGroupSlurmConfigurationRequest$,
  ComputeNodeGroupStatus,
  ComputeNodeGroupSummary$,
  ConflictException,
  ConflictException$,
  CreateCluster$,
  CreateClusterCommand,
  CreateClusterRequest$,
  CreateClusterResponse$,
  CreateComputeNodeGroup$,
  CreateComputeNodeGroupCommand,
  CreateComputeNodeGroupRequest$,
  CreateComputeNodeGroupResponse$,
  CreateQueue$,
  CreateQueueCommand,
  CreateQueueRequest$,
  CreateQueueResponse$,
  CustomLaunchTemplate$,
  DeleteCluster$,
  DeleteClusterCommand,
  DeleteClusterRequest$,
  DeleteClusterResponse$,
  DeleteComputeNodeGroup$,
  DeleteComputeNodeGroupCommand,
  DeleteComputeNodeGroupRequest$,
  DeleteComputeNodeGroupResponse$,
  DeleteQueue$,
  DeleteQueueCommand,
  DeleteQueueRequest$,
  DeleteQueueResponse$,
  Endpoint$,
  EndpointType,
  ErrorInfo$,
  GetCluster$,
  GetClusterCommand,
  GetClusterRequest$,
  GetClusterResponse$,
  GetComputeNodeGroup$,
  GetComputeNodeGroupCommand,
  GetComputeNodeGroupRequest$,
  GetComputeNodeGroupResponse$,
  GetQueue$,
  GetQueueCommand,
  GetQueueRequest$,
  GetQueueResponse$,
  InstanceConfig$,
  InternalServerException,
  InternalServerException$,
  JwtAuth$,
  JwtKey$,
  ListClusters$,
  ListClustersCommand,
  ListClustersRequest$,
  ListClustersResponse$,
  ListComputeNodeGroups$,
  ListComputeNodeGroupsCommand,
  ListComputeNodeGroupsRequest$,
  ListComputeNodeGroupsResponse$,
  ListQueues$,
  ListQueuesCommand,
  ListQueuesRequest$,
  ListQueuesResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  Networking$,
  NetworkingRequest$,
  NetworkType,
  paginateListClusters,
  paginateListComputeNodeGroups,
  paginateListQueues,
  PCS,
  PCSClient,
  PCSServiceException,
  PurchaseOption,
  Queue$,
  QueueSlurmConfiguration$,
  QueueSlurmConfigurationRequest$,
  QueueStatus,
  QueueSummary$,
  RegisterComputeNodeGroupInstance$,
  RegisterComputeNodeGroupInstanceCommand,
  RegisterComputeNodeGroupInstanceRequest$,
  RegisterComputeNodeGroupInstanceResponse$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ScalingConfiguration$,
  ScalingConfigurationRequest$,
  Scheduler$,
  SchedulerRequest$,
  SchedulerType,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  Size,
  SlurmAuthKey$,
  SlurmCustomSetting$,
  SlurmRest$,
  SlurmRestMode,
  SlurmRestRequest$,
  SpotAllocationStrategy,
  SpotOptions$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateAccountingRequest$,
  UpdateCluster$,
  UpdateClusterCommand,
  UpdateClusterRequest$,
  UpdateClusterResponse$,
  UpdateClusterSlurmConfigurationRequest$,
  UpdateComputeNodeGroup$,
  UpdateComputeNodeGroupCommand,
  UpdateComputeNodeGroupRequest$,
  UpdateComputeNodeGroupResponse$,
  UpdateComputeNodeGroupSlurmConfigurationRequest$,
  UpdateQueue$,
  UpdateQueueCommand,
  UpdateQueueRequest$,
  UpdateQueueResponse$,
  UpdateQueueSlurmConfigurationRequest$,
  UpdateSlurmRestRequest$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof PCSClient === "function");
assert(typeof PCS === "function");
// commands
assert(typeof CreateClusterCommand === "function");
assert(typeof CreateCluster$ === "object");
assert(typeof CreateComputeNodeGroupCommand === "function");
assert(typeof CreateComputeNodeGroup$ === "object");
assert(typeof CreateQueueCommand === "function");
assert(typeof CreateQueue$ === "object");
assert(typeof DeleteClusterCommand === "function");
assert(typeof DeleteCluster$ === "object");
assert(typeof DeleteComputeNodeGroupCommand === "function");
assert(typeof DeleteComputeNodeGroup$ === "object");
assert(typeof DeleteQueueCommand === "function");
assert(typeof DeleteQueue$ === "object");
assert(typeof GetClusterCommand === "function");
assert(typeof GetCluster$ === "object");
assert(typeof GetComputeNodeGroupCommand === "function");
assert(typeof GetComputeNodeGroup$ === "object");
assert(typeof GetQueueCommand === "function");
assert(typeof GetQueue$ === "object");
assert(typeof ListClustersCommand === "function");
assert(typeof ListClusters$ === "object");
assert(typeof ListComputeNodeGroupsCommand === "function");
assert(typeof ListComputeNodeGroups$ === "object");
assert(typeof ListQueuesCommand === "function");
assert(typeof ListQueues$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof RegisterComputeNodeGroupInstanceCommand === "function");
assert(typeof RegisterComputeNodeGroupInstance$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateClusterCommand === "function");
assert(typeof UpdateCluster$ === "object");
assert(typeof UpdateComputeNodeGroupCommand === "function");
assert(typeof UpdateComputeNodeGroup$ === "object");
assert(typeof UpdateQueueCommand === "function");
assert(typeof UpdateQueue$ === "object");
// structural schemas
assert(typeof Accounting$ === "object");
assert(typeof AccountingRequest$ === "object");
assert(typeof Cluster$ === "object");
assert(typeof ClusterSlurmConfiguration$ === "object");
assert(typeof ClusterSlurmConfigurationRequest$ === "object");
assert(typeof ClusterSummary$ === "object");
assert(typeof ComputeNodeGroup$ === "object");
assert(typeof ComputeNodeGroupConfiguration$ === "object");
assert(typeof ComputeNodeGroupSlurmConfiguration$ === "object");
assert(typeof ComputeNodeGroupSlurmConfigurationRequest$ === "object");
assert(typeof ComputeNodeGroupSummary$ === "object");
assert(typeof CreateClusterRequest$ === "object");
assert(typeof CreateClusterResponse$ === "object");
assert(typeof CreateComputeNodeGroupRequest$ === "object");
assert(typeof CreateComputeNodeGroupResponse$ === "object");
assert(typeof CreateQueueRequest$ === "object");
assert(typeof CreateQueueResponse$ === "object");
assert(typeof CustomLaunchTemplate$ === "object");
assert(typeof DeleteClusterRequest$ === "object");
assert(typeof DeleteClusterResponse$ === "object");
assert(typeof DeleteComputeNodeGroupRequest$ === "object");
assert(typeof DeleteComputeNodeGroupResponse$ === "object");
assert(typeof DeleteQueueRequest$ === "object");
assert(typeof DeleteQueueResponse$ === "object");
assert(typeof Endpoint$ === "object");
assert(typeof ErrorInfo$ === "object");
assert(typeof GetClusterRequest$ === "object");
assert(typeof GetClusterResponse$ === "object");
assert(typeof GetComputeNodeGroupRequest$ === "object");
assert(typeof GetComputeNodeGroupResponse$ === "object");
assert(typeof GetQueueRequest$ === "object");
assert(typeof GetQueueResponse$ === "object");
assert(typeof InstanceConfig$ === "object");
assert(typeof JwtAuth$ === "object");
assert(typeof JwtKey$ === "object");
assert(typeof ListClustersRequest$ === "object");
assert(typeof ListClustersResponse$ === "object");
assert(typeof ListComputeNodeGroupsRequest$ === "object");
assert(typeof ListComputeNodeGroupsResponse$ === "object");
assert(typeof ListQueuesRequest$ === "object");
assert(typeof ListQueuesResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof Networking$ === "object");
assert(typeof NetworkingRequest$ === "object");
assert(typeof Queue$ === "object");
assert(typeof QueueSlurmConfiguration$ === "object");
assert(typeof QueueSlurmConfigurationRequest$ === "object");
assert(typeof QueueSummary$ === "object");
assert(typeof RegisterComputeNodeGroupInstanceRequest$ === "object");
assert(typeof RegisterComputeNodeGroupInstanceResponse$ === "object");
assert(typeof ScalingConfiguration$ === "object");
assert(typeof ScalingConfigurationRequest$ === "object");
assert(typeof Scheduler$ === "object");
assert(typeof SchedulerRequest$ === "object");
assert(typeof SlurmAuthKey$ === "object");
assert(typeof SlurmCustomSetting$ === "object");
assert(typeof SlurmRest$ === "object");
assert(typeof SlurmRestRequest$ === "object");
assert(typeof SpotOptions$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateAccountingRequest$ === "object");
assert(typeof UpdateClusterRequest$ === "object");
assert(typeof UpdateClusterResponse$ === "object");
assert(typeof UpdateClusterSlurmConfigurationRequest$ === "object");
assert(typeof UpdateComputeNodeGroupRequest$ === "object");
assert(typeof UpdateComputeNodeGroupResponse$ === "object");
assert(typeof UpdateComputeNodeGroupSlurmConfigurationRequest$ === "object");
assert(typeof UpdateQueueRequest$ === "object");
assert(typeof UpdateQueueResponse$ === "object");
assert(typeof UpdateQueueSlurmConfigurationRequest$ === "object");
assert(typeof UpdateSlurmRestRequest$ === "object");
assert(typeof ValidationExceptionField$ === "object");
// enums
assert(typeof AccountingMode === "object");
assert(typeof ClusterStatus === "object");
assert(typeof ComputeNodeGroupStatus === "object");
assert(typeof EndpointType === "object");
assert(typeof NetworkType === "object");
assert(typeof PurchaseOption === "object");
assert(typeof QueueStatus === "object");
assert(typeof SchedulerType === "object");
assert(typeof Size === "object");
assert(typeof SlurmRestMode === "object");
assert(typeof SpotAllocationStrategy === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof PCSServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof PCSServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof PCSServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof PCSServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof PCSServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof PCSServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof PCSServiceException);
assert(typeof ValidationException$ === "object");
assert(PCSServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListClusters === "function");
assert(typeof paginateListComputeNodeGroups === "function");
assert(typeof paginateListQueues === "function");
console.log(`PCS index test passed.`);
