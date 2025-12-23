import {
  AccessDeniedException,
  AccessDeniedException$,
  AutoScalingConfiguration$,
  AutoScalingMetric,
  CapacityConfiguration$,
  ChangeRequest$,
  ChangesetStatus,
  ChangeType,
  CodeConfiguration$,
  ConflictException,
  ConflictException$,
  CreateEnvironment$,
  CreateEnvironmentCommand,
  CreateEnvironmentRequest$,
  CreateEnvironmentResponse$,
  CreateKxChangeset$,
  CreateKxChangesetCommand,
  CreateKxChangesetRequest$,
  CreateKxChangesetResponse$,
  CreateKxCluster$,
  CreateKxClusterCommand,
  CreateKxClusterRequest$,
  CreateKxClusterResponse$,
  CreateKxDatabase$,
  CreateKxDatabaseCommand,
  CreateKxDatabaseRequest$,
  CreateKxDatabaseResponse$,
  CreateKxDataview$,
  CreateKxDataviewCommand,
  CreateKxDataviewRequest$,
  CreateKxDataviewResponse$,
  CreateKxEnvironment$,
  CreateKxEnvironmentCommand,
  CreateKxEnvironmentRequest$,
  CreateKxEnvironmentResponse$,
  CreateKxScalingGroup$,
  CreateKxScalingGroupCommand,
  CreateKxScalingGroupRequest$,
  CreateKxScalingGroupResponse$,
  CreateKxUser$,
  CreateKxUserCommand,
  CreateKxUserRequest$,
  CreateKxUserResponse$,
  CreateKxVolume$,
  CreateKxVolumeCommand,
  CreateKxVolumeRequest$,
  CreateKxVolumeResponse$,
  CustomDNSServer$,
  DeleteEnvironment$,
  DeleteEnvironmentCommand,
  DeleteEnvironmentRequest$,
  DeleteEnvironmentResponse$,
  DeleteKxCluster$,
  DeleteKxClusterCommand,
  DeleteKxClusterNode$,
  DeleteKxClusterNodeCommand,
  DeleteKxClusterNodeRequest$,
  DeleteKxClusterNodeResponse$,
  DeleteKxClusterRequest$,
  DeleteKxClusterResponse$,
  DeleteKxDatabase$,
  DeleteKxDatabaseCommand,
  DeleteKxDatabaseRequest$,
  DeleteKxDatabaseResponse$,
  DeleteKxDataview$,
  DeleteKxDataviewCommand,
  DeleteKxDataviewRequest$,
  DeleteKxDataviewResponse$,
  DeleteKxEnvironment$,
  DeleteKxEnvironmentCommand,
  DeleteKxEnvironmentRequest$,
  DeleteKxEnvironmentResponse$,
  DeleteKxScalingGroup$,
  DeleteKxScalingGroupCommand,
  DeleteKxScalingGroupRequest$,
  DeleteKxScalingGroupResponse$,
  DeleteKxUser$,
  DeleteKxUserCommand,
  DeleteKxUserRequest$,
  DeleteKxUserResponse$,
  DeleteKxVolume$,
  DeleteKxVolumeCommand,
  DeleteKxVolumeRequest$,
  DeleteKxVolumeResponse$,
  DnsStatus,
  Environment$,
  EnvironmentStatus,
  ErrorDetails,
  ErrorInfo$,
  FederationMode,
  FederationParameters$,
  Finspace,
  FinspaceClient,
  FinspaceServiceException,
  GetEnvironment$,
  GetEnvironmentCommand,
  GetEnvironmentRequest$,
  GetEnvironmentResponse$,
  GetKxChangeset$,
  GetKxChangesetCommand,
  GetKxChangesetRequest$,
  GetKxChangesetResponse$,
  GetKxCluster$,
  GetKxClusterCommand,
  GetKxClusterRequest$,
  GetKxClusterResponse$,
  GetKxConnectionString$,
  GetKxConnectionStringCommand,
  GetKxConnectionStringRequest$,
  GetKxConnectionStringResponse$,
  GetKxDatabase$,
  GetKxDatabaseCommand,
  GetKxDatabaseRequest$,
  GetKxDatabaseResponse$,
  GetKxDataview$,
  GetKxDataviewCommand,
  GetKxDataviewRequest$,
  GetKxDataviewResponse$,
  GetKxEnvironment$,
  GetKxEnvironmentCommand,
  GetKxEnvironmentRequest$,
  GetKxEnvironmentResponse$,
  GetKxScalingGroup$,
  GetKxScalingGroupCommand,
  GetKxScalingGroupRequest$,
  GetKxScalingGroupResponse$,
  GetKxUser$,
  GetKxUserCommand,
  GetKxUserRequest$,
  GetKxUserResponse$,
  GetKxVolume$,
  GetKxVolumeCommand,
  GetKxVolumeRequest$,
  GetKxVolumeResponse$,
  IcmpTypeCode$,
  InternalServerException,
  InternalServerException$,
  InvalidRequestException,
  InvalidRequestException$,
  IPAddressType,
  KxAttachedCluster$,
  KxAzMode,
  KxCacheStorageConfiguration$,
  KxChangesetListEntry$,
  KxCluster$,
  KxClusterCodeDeploymentConfiguration$,
  KxClusterCodeDeploymentStrategy,
  KxClusterStatus,
  KxClusterType,
  KxCommandLineArgument$,
  KxDatabaseCacheConfiguration$,
  KxDatabaseConfiguration$,
  KxDatabaseListEntry$,
  KxDataviewActiveVersion$,
  KxDataviewConfiguration$,
  KxDataviewListEntry$,
  KxDataviewSegmentConfiguration$,
  KxDataviewStatus,
  KxDeploymentConfiguration$,
  KxDeploymentStrategy,
  KxEnvironment$,
  KxNAS1Configuration$,
  KxNAS1Type,
  KxNode$,
  KxNodeStatus,
  KxSavedownStorageConfiguration$,
  KxSavedownStorageType,
  KxScalingGroup$,
  KxScalingGroupConfiguration$,
  KxScalingGroupStatus,
  KxUser$,
  KxVolume$,
  KxVolumeStatus,
  KxVolumeType,
  LimitExceededException,
  LimitExceededException$,
  ListEnvironments$,
  ListEnvironmentsCommand,
  ListEnvironmentsRequest$,
  ListEnvironmentsResponse$,
  ListKxChangesets$,
  ListKxChangesetsCommand,
  ListKxChangesetsRequest$,
  ListKxChangesetsResponse$,
  ListKxClusterNodes$,
  ListKxClusterNodesCommand,
  ListKxClusterNodesRequest$,
  ListKxClusterNodesResponse$,
  ListKxClusters$,
  ListKxClustersCommand,
  ListKxClustersRequest$,
  ListKxClustersResponse$,
  ListKxDatabases$,
  ListKxDatabasesCommand,
  ListKxDatabasesRequest$,
  ListKxDatabasesResponse$,
  ListKxDataviews$,
  ListKxDataviewsCommand,
  ListKxDataviewsRequest$,
  ListKxDataviewsResponse$,
  ListKxEnvironments$,
  ListKxEnvironmentsCommand,
  ListKxEnvironmentsRequest$,
  ListKxEnvironmentsResponse$,
  ListKxScalingGroups$,
  ListKxScalingGroupsCommand,
  ListKxScalingGroupsRequest$,
  ListKxScalingGroupsResponse$,
  ListKxUsers$,
  ListKxUsersCommand,
  ListKxUsersRequest$,
  ListKxUsersResponse$,
  ListKxVolumes$,
  ListKxVolumesCommand,
  ListKxVolumesRequest$,
  ListKxVolumesResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  NetworkACLEntry$,
  paginateListKxChangesets,
  paginateListKxClusterNodes,
  paginateListKxDatabases,
  paginateListKxDataviews,
  paginateListKxEnvironments,
  paginateListKxScalingGroups,
  PortRange$,
  ResourceAlreadyExistsException,
  ResourceAlreadyExistsException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RuleAction,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SuperuserParameters$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TgwStatus,
  ThrottlingException,
  ThrottlingException$,
  TickerplantLogConfiguration$,
  TransitGatewayConfiguration$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateEnvironment$,
  UpdateEnvironmentCommand,
  UpdateEnvironmentRequest$,
  UpdateEnvironmentResponse$,
  UpdateKxClusterCodeConfiguration$,
  UpdateKxClusterCodeConfigurationCommand,
  UpdateKxClusterCodeConfigurationRequest$,
  UpdateKxClusterCodeConfigurationResponse$,
  UpdateKxClusterDatabases$,
  UpdateKxClusterDatabasesCommand,
  UpdateKxClusterDatabasesRequest$,
  UpdateKxClusterDatabasesResponse$,
  UpdateKxDatabase$,
  UpdateKxDatabaseCommand,
  UpdateKxDatabaseRequest$,
  UpdateKxDatabaseResponse$,
  UpdateKxDataview$,
  UpdateKxDataviewCommand,
  UpdateKxDataviewRequest$,
  UpdateKxDataviewResponse$,
  UpdateKxEnvironment$,
  UpdateKxEnvironmentCommand,
  UpdateKxEnvironmentNetwork$,
  UpdateKxEnvironmentNetworkCommand,
  UpdateKxEnvironmentNetworkRequest$,
  UpdateKxEnvironmentNetworkResponse$,
  UpdateKxEnvironmentRequest$,
  UpdateKxEnvironmentResponse$,
  UpdateKxUser$,
  UpdateKxUserCommand,
  UpdateKxUserRequest$,
  UpdateKxUserResponse$,
  UpdateKxVolume$,
  UpdateKxVolumeCommand,
  UpdateKxVolumeRequest$,
  UpdateKxVolumeResponse$,
  ValidationException,
  ValidationException$,
  Volume$,
  VolumeType,
  VpcConfiguration$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof FinspaceClient === "function");
assert(typeof Finspace === "function");
// commands
assert(typeof CreateEnvironmentCommand === "function");
assert(typeof CreateEnvironment$ === "object");
assert(typeof CreateKxChangesetCommand === "function");
assert(typeof CreateKxChangeset$ === "object");
assert(typeof CreateKxClusterCommand === "function");
assert(typeof CreateKxCluster$ === "object");
assert(typeof CreateKxDatabaseCommand === "function");
assert(typeof CreateKxDatabase$ === "object");
assert(typeof CreateKxDataviewCommand === "function");
assert(typeof CreateKxDataview$ === "object");
assert(typeof CreateKxEnvironmentCommand === "function");
assert(typeof CreateKxEnvironment$ === "object");
assert(typeof CreateKxScalingGroupCommand === "function");
assert(typeof CreateKxScalingGroup$ === "object");
assert(typeof CreateKxUserCommand === "function");
assert(typeof CreateKxUser$ === "object");
assert(typeof CreateKxVolumeCommand === "function");
assert(typeof CreateKxVolume$ === "object");
assert(typeof DeleteEnvironmentCommand === "function");
assert(typeof DeleteEnvironment$ === "object");
assert(typeof DeleteKxClusterCommand === "function");
assert(typeof DeleteKxCluster$ === "object");
assert(typeof DeleteKxClusterNodeCommand === "function");
assert(typeof DeleteKxClusterNode$ === "object");
assert(typeof DeleteKxDatabaseCommand === "function");
assert(typeof DeleteKxDatabase$ === "object");
assert(typeof DeleteKxDataviewCommand === "function");
assert(typeof DeleteKxDataview$ === "object");
assert(typeof DeleteKxEnvironmentCommand === "function");
assert(typeof DeleteKxEnvironment$ === "object");
assert(typeof DeleteKxScalingGroupCommand === "function");
assert(typeof DeleteKxScalingGroup$ === "object");
assert(typeof DeleteKxUserCommand === "function");
assert(typeof DeleteKxUser$ === "object");
assert(typeof DeleteKxVolumeCommand === "function");
assert(typeof DeleteKxVolume$ === "object");
assert(typeof GetEnvironmentCommand === "function");
assert(typeof GetEnvironment$ === "object");
assert(typeof GetKxChangesetCommand === "function");
assert(typeof GetKxChangeset$ === "object");
assert(typeof GetKxClusterCommand === "function");
assert(typeof GetKxCluster$ === "object");
assert(typeof GetKxConnectionStringCommand === "function");
assert(typeof GetKxConnectionString$ === "object");
assert(typeof GetKxDatabaseCommand === "function");
assert(typeof GetKxDatabase$ === "object");
assert(typeof GetKxDataviewCommand === "function");
assert(typeof GetKxDataview$ === "object");
assert(typeof GetKxEnvironmentCommand === "function");
assert(typeof GetKxEnvironment$ === "object");
assert(typeof GetKxScalingGroupCommand === "function");
assert(typeof GetKxScalingGroup$ === "object");
assert(typeof GetKxUserCommand === "function");
assert(typeof GetKxUser$ === "object");
assert(typeof GetKxVolumeCommand === "function");
assert(typeof GetKxVolume$ === "object");
assert(typeof ListEnvironmentsCommand === "function");
assert(typeof ListEnvironments$ === "object");
assert(typeof ListKxChangesetsCommand === "function");
assert(typeof ListKxChangesets$ === "object");
assert(typeof ListKxClusterNodesCommand === "function");
assert(typeof ListKxClusterNodes$ === "object");
assert(typeof ListKxClustersCommand === "function");
assert(typeof ListKxClusters$ === "object");
assert(typeof ListKxDatabasesCommand === "function");
assert(typeof ListKxDatabases$ === "object");
assert(typeof ListKxDataviewsCommand === "function");
assert(typeof ListKxDataviews$ === "object");
assert(typeof ListKxEnvironmentsCommand === "function");
assert(typeof ListKxEnvironments$ === "object");
assert(typeof ListKxScalingGroupsCommand === "function");
assert(typeof ListKxScalingGroups$ === "object");
assert(typeof ListKxUsersCommand === "function");
assert(typeof ListKxUsers$ === "object");
assert(typeof ListKxVolumesCommand === "function");
assert(typeof ListKxVolumes$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateEnvironmentCommand === "function");
assert(typeof UpdateEnvironment$ === "object");
assert(typeof UpdateKxClusterCodeConfigurationCommand === "function");
assert(typeof UpdateKxClusterCodeConfiguration$ === "object");
assert(typeof UpdateKxClusterDatabasesCommand === "function");
assert(typeof UpdateKxClusterDatabases$ === "object");
assert(typeof UpdateKxDatabaseCommand === "function");
assert(typeof UpdateKxDatabase$ === "object");
assert(typeof UpdateKxDataviewCommand === "function");
assert(typeof UpdateKxDataview$ === "object");
assert(typeof UpdateKxEnvironmentCommand === "function");
assert(typeof UpdateKxEnvironment$ === "object");
assert(typeof UpdateKxEnvironmentNetworkCommand === "function");
assert(typeof UpdateKxEnvironmentNetwork$ === "object");
assert(typeof UpdateKxUserCommand === "function");
assert(typeof UpdateKxUser$ === "object");
assert(typeof UpdateKxVolumeCommand === "function");
assert(typeof UpdateKxVolume$ === "object");
// structural schemas
assert(typeof AutoScalingConfiguration$ === "object");
assert(typeof CapacityConfiguration$ === "object");
assert(typeof ChangeRequest$ === "object");
assert(typeof CodeConfiguration$ === "object");
assert(typeof CreateEnvironmentRequest$ === "object");
assert(typeof CreateEnvironmentResponse$ === "object");
assert(typeof CreateKxChangesetRequest$ === "object");
assert(typeof CreateKxChangesetResponse$ === "object");
assert(typeof CreateKxClusterRequest$ === "object");
assert(typeof CreateKxClusterResponse$ === "object");
assert(typeof CreateKxDatabaseRequest$ === "object");
assert(typeof CreateKxDatabaseResponse$ === "object");
assert(typeof CreateKxDataviewRequest$ === "object");
assert(typeof CreateKxDataviewResponse$ === "object");
assert(typeof CreateKxEnvironmentRequest$ === "object");
assert(typeof CreateKxEnvironmentResponse$ === "object");
assert(typeof CreateKxScalingGroupRequest$ === "object");
assert(typeof CreateKxScalingGroupResponse$ === "object");
assert(typeof CreateKxUserRequest$ === "object");
assert(typeof CreateKxUserResponse$ === "object");
assert(typeof CreateKxVolumeRequest$ === "object");
assert(typeof CreateKxVolumeResponse$ === "object");
assert(typeof CustomDNSServer$ === "object");
assert(typeof DeleteEnvironmentRequest$ === "object");
assert(typeof DeleteEnvironmentResponse$ === "object");
assert(typeof DeleteKxClusterNodeRequest$ === "object");
assert(typeof DeleteKxClusterNodeResponse$ === "object");
assert(typeof DeleteKxClusterRequest$ === "object");
assert(typeof DeleteKxClusterResponse$ === "object");
assert(typeof DeleteKxDatabaseRequest$ === "object");
assert(typeof DeleteKxDatabaseResponse$ === "object");
assert(typeof DeleteKxDataviewRequest$ === "object");
assert(typeof DeleteKxDataviewResponse$ === "object");
assert(typeof DeleteKxEnvironmentRequest$ === "object");
assert(typeof DeleteKxEnvironmentResponse$ === "object");
assert(typeof DeleteKxScalingGroupRequest$ === "object");
assert(typeof DeleteKxScalingGroupResponse$ === "object");
assert(typeof DeleteKxUserRequest$ === "object");
assert(typeof DeleteKxUserResponse$ === "object");
assert(typeof DeleteKxVolumeRequest$ === "object");
assert(typeof DeleteKxVolumeResponse$ === "object");
assert(typeof Environment$ === "object");
assert(typeof ErrorInfo$ === "object");
assert(typeof FederationParameters$ === "object");
assert(typeof GetEnvironmentRequest$ === "object");
assert(typeof GetEnvironmentResponse$ === "object");
assert(typeof GetKxChangesetRequest$ === "object");
assert(typeof GetKxChangesetResponse$ === "object");
assert(typeof GetKxClusterRequest$ === "object");
assert(typeof GetKxClusterResponse$ === "object");
assert(typeof GetKxConnectionStringRequest$ === "object");
assert(typeof GetKxConnectionStringResponse$ === "object");
assert(typeof GetKxDatabaseRequest$ === "object");
assert(typeof GetKxDatabaseResponse$ === "object");
assert(typeof GetKxDataviewRequest$ === "object");
assert(typeof GetKxDataviewResponse$ === "object");
assert(typeof GetKxEnvironmentRequest$ === "object");
assert(typeof GetKxEnvironmentResponse$ === "object");
assert(typeof GetKxScalingGroupRequest$ === "object");
assert(typeof GetKxScalingGroupResponse$ === "object");
assert(typeof GetKxUserRequest$ === "object");
assert(typeof GetKxUserResponse$ === "object");
assert(typeof GetKxVolumeRequest$ === "object");
assert(typeof GetKxVolumeResponse$ === "object");
assert(typeof IcmpTypeCode$ === "object");
assert(typeof KxAttachedCluster$ === "object");
assert(typeof KxCacheStorageConfiguration$ === "object");
assert(typeof KxChangesetListEntry$ === "object");
assert(typeof KxCluster$ === "object");
assert(typeof KxClusterCodeDeploymentConfiguration$ === "object");
assert(typeof KxCommandLineArgument$ === "object");
assert(typeof KxDatabaseCacheConfiguration$ === "object");
assert(typeof KxDatabaseConfiguration$ === "object");
assert(typeof KxDatabaseListEntry$ === "object");
assert(typeof KxDataviewActiveVersion$ === "object");
assert(typeof KxDataviewConfiguration$ === "object");
assert(typeof KxDataviewListEntry$ === "object");
assert(typeof KxDataviewSegmentConfiguration$ === "object");
assert(typeof KxDeploymentConfiguration$ === "object");
assert(typeof KxEnvironment$ === "object");
assert(typeof KxNAS1Configuration$ === "object");
assert(typeof KxNode$ === "object");
assert(typeof KxSavedownStorageConfiguration$ === "object");
assert(typeof KxScalingGroup$ === "object");
assert(typeof KxScalingGroupConfiguration$ === "object");
assert(typeof KxUser$ === "object");
assert(typeof KxVolume$ === "object");
assert(typeof ListEnvironmentsRequest$ === "object");
assert(typeof ListEnvironmentsResponse$ === "object");
assert(typeof ListKxChangesetsRequest$ === "object");
assert(typeof ListKxChangesetsResponse$ === "object");
assert(typeof ListKxClusterNodesRequest$ === "object");
assert(typeof ListKxClusterNodesResponse$ === "object");
assert(typeof ListKxClustersRequest$ === "object");
assert(typeof ListKxClustersResponse$ === "object");
assert(typeof ListKxDatabasesRequest$ === "object");
assert(typeof ListKxDatabasesResponse$ === "object");
assert(typeof ListKxDataviewsRequest$ === "object");
assert(typeof ListKxDataviewsResponse$ === "object");
assert(typeof ListKxEnvironmentsRequest$ === "object");
assert(typeof ListKxEnvironmentsResponse$ === "object");
assert(typeof ListKxScalingGroupsRequest$ === "object");
assert(typeof ListKxScalingGroupsResponse$ === "object");
assert(typeof ListKxUsersRequest$ === "object");
assert(typeof ListKxUsersResponse$ === "object");
assert(typeof ListKxVolumesRequest$ === "object");
assert(typeof ListKxVolumesResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof NetworkACLEntry$ === "object");
assert(typeof PortRange$ === "object");
assert(typeof SuperuserParameters$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TickerplantLogConfiguration$ === "object");
assert(typeof TransitGatewayConfiguration$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateEnvironmentRequest$ === "object");
assert(typeof UpdateEnvironmentResponse$ === "object");
assert(typeof UpdateKxClusterCodeConfigurationRequest$ === "object");
assert(typeof UpdateKxClusterCodeConfigurationResponse$ === "object");
assert(typeof UpdateKxClusterDatabasesRequest$ === "object");
assert(typeof UpdateKxClusterDatabasesResponse$ === "object");
assert(typeof UpdateKxDatabaseRequest$ === "object");
assert(typeof UpdateKxDatabaseResponse$ === "object");
assert(typeof UpdateKxDataviewRequest$ === "object");
assert(typeof UpdateKxDataviewResponse$ === "object");
assert(typeof UpdateKxEnvironmentNetworkRequest$ === "object");
assert(typeof UpdateKxEnvironmentNetworkResponse$ === "object");
assert(typeof UpdateKxEnvironmentRequest$ === "object");
assert(typeof UpdateKxEnvironmentResponse$ === "object");
assert(typeof UpdateKxUserRequest$ === "object");
assert(typeof UpdateKxUserResponse$ === "object");
assert(typeof UpdateKxVolumeRequest$ === "object");
assert(typeof UpdateKxVolumeResponse$ === "object");
assert(typeof Volume$ === "object");
assert(typeof VpcConfiguration$ === "object");
// enums
assert(typeof AutoScalingMetric === "object");
assert(typeof ChangesetStatus === "object");
assert(typeof ChangeType === "object");
assert(typeof DnsStatus === "object");
assert(typeof EnvironmentStatus === "object");
assert(typeof ErrorDetails === "object");
assert(typeof FederationMode === "object");
assert(typeof IPAddressType === "object");
assert(typeof KxAzMode === "object");
assert(typeof KxClusterCodeDeploymentStrategy === "object");
assert(typeof KxClusterStatus === "object");
assert(typeof KxClusterType === "object");
assert(typeof KxDataviewStatus === "object");
assert(typeof KxDeploymentStrategy === "object");
assert(typeof KxNAS1Type === "object");
assert(typeof KxNodeStatus === "object");
assert(typeof KxSavedownStorageType === "object");
assert(typeof KxScalingGroupStatus === "object");
assert(typeof KxVolumeStatus === "object");
assert(typeof KxVolumeType === "object");
assert(typeof RuleAction === "object");
assert(typeof TgwStatus === "object");
assert(typeof VolumeType === "object");
// errors
assert(AccessDeniedException.prototype instanceof FinspaceServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof FinspaceServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof FinspaceServiceException);
assert(typeof InternalServerException$ === "object");
assert(InvalidRequestException.prototype instanceof FinspaceServiceException);
assert(typeof InvalidRequestException$ === "object");
assert(LimitExceededException.prototype instanceof FinspaceServiceException);
assert(typeof LimitExceededException$ === "object");
assert(ResourceAlreadyExistsException.prototype instanceof FinspaceServiceException);
assert(typeof ResourceAlreadyExistsException$ === "object");
assert(ResourceNotFoundException.prototype instanceof FinspaceServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof FinspaceServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof FinspaceServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof FinspaceServiceException);
assert(typeof ValidationException$ === "object");
assert(FinspaceServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListKxChangesets === "function");
assert(typeof paginateListKxClusterNodes === "function");
assert(typeof paginateListKxDatabases === "function");
assert(typeof paginateListKxDataviews === "function");
assert(typeof paginateListKxEnvironments === "function");
assert(typeof paginateListKxScalingGroups === "function");
console.log(`Finspace index test passed.`);
