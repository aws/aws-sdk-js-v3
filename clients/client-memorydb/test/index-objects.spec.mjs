import {
  ACL$,
  ACLAlreadyExistsFault,
  ACLAlreadyExistsFault$,
  ACLNotFoundFault,
  ACLNotFoundFault$,
  ACLPendingChanges$,
  ACLQuotaExceededFault,
  ACLQuotaExceededFault$,
  ACLsUpdateStatus$,
  APICallRateForCustomerExceededFault,
  APICallRateForCustomerExceededFault$,
  AZStatus,
  Authentication$,
  AuthenticationMode$,
  AuthenticationType,
  AvailabilityZone$,
  BatchUpdateCluster$,
  BatchUpdateClusterCommand,
  BatchUpdateClusterRequest$,
  BatchUpdateClusterResponse$,
  Cluster$,
  ClusterAlreadyExistsFault,
  ClusterAlreadyExistsFault$,
  ClusterConfiguration$,
  ClusterNotFoundFault,
  ClusterNotFoundFault$,
  ClusterPendingUpdates$,
  ClusterQuotaForCustomerExceededFault,
  ClusterQuotaForCustomerExceededFault$,
  CopySnapshot$,
  CopySnapshotCommand,
  CopySnapshotRequest$,
  CopySnapshotResponse$,
  CreateACL$,
  CreateACLCommand,
  CreateACLRequest$,
  CreateACLResponse$,
  CreateCluster$,
  CreateClusterCommand,
  CreateClusterRequest$,
  CreateClusterResponse$,
  CreateMultiRegionCluster$,
  CreateMultiRegionClusterCommand,
  CreateMultiRegionClusterRequest$,
  CreateMultiRegionClusterResponse$,
  CreateParameterGroup$,
  CreateParameterGroupCommand,
  CreateParameterGroupRequest$,
  CreateParameterGroupResponse$,
  CreateSnapshot$,
  CreateSnapshotCommand,
  CreateSnapshotRequest$,
  CreateSnapshotResponse$,
  CreateSubnetGroup$,
  CreateSubnetGroupCommand,
  CreateSubnetGroupRequest$,
  CreateSubnetGroupResponse$,
  CreateUser$,
  CreateUserCommand,
  CreateUserRequest$,
  CreateUserResponse$,
  DataTieringStatus,
  DefaultUserRequired,
  DefaultUserRequired$,
  DeleteACL$,
  DeleteACLCommand,
  DeleteACLRequest$,
  DeleteACLResponse$,
  DeleteCluster$,
  DeleteClusterCommand,
  DeleteClusterRequest$,
  DeleteClusterResponse$,
  DeleteMultiRegionCluster$,
  DeleteMultiRegionClusterCommand,
  DeleteMultiRegionClusterRequest$,
  DeleteMultiRegionClusterResponse$,
  DeleteParameterGroup$,
  DeleteParameterGroupCommand,
  DeleteParameterGroupRequest$,
  DeleteParameterGroupResponse$,
  DeleteSnapshot$,
  DeleteSnapshotCommand,
  DeleteSnapshotRequest$,
  DeleteSnapshotResponse$,
  DeleteSubnetGroup$,
  DeleteSubnetGroupCommand,
  DeleteSubnetGroupRequest$,
  DeleteSubnetGroupResponse$,
  DeleteUser$,
  DeleteUserCommand,
  DeleteUserRequest$,
  DeleteUserResponse$,
  DescribeACLs$,
  DescribeACLsCommand,
  DescribeACLsRequest$,
  DescribeACLsResponse$,
  DescribeClusters$,
  DescribeClustersCommand,
  DescribeClustersRequest$,
  DescribeClustersResponse$,
  DescribeEngineVersions$,
  DescribeEngineVersionsCommand,
  DescribeEngineVersionsRequest$,
  DescribeEngineVersionsResponse$,
  DescribeEvents$,
  DescribeEventsCommand,
  DescribeEventsRequest$,
  DescribeEventsResponse$,
  DescribeMultiRegionClusters$,
  DescribeMultiRegionClustersCommand,
  DescribeMultiRegionClustersRequest$,
  DescribeMultiRegionClustersResponse$,
  DescribeMultiRegionParameterGroups$,
  DescribeMultiRegionParameterGroupsCommand,
  DescribeMultiRegionParameterGroupsRequest$,
  DescribeMultiRegionParameterGroupsResponse$,
  DescribeMultiRegionParameters$,
  DescribeMultiRegionParametersCommand,
  DescribeMultiRegionParametersRequest$,
  DescribeMultiRegionParametersResponse$,
  DescribeParameterGroups$,
  DescribeParameterGroupsCommand,
  DescribeParameterGroupsRequest$,
  DescribeParameterGroupsResponse$,
  DescribeParameters$,
  DescribeParametersCommand,
  DescribeParametersRequest$,
  DescribeParametersResponse$,
  DescribeReservedNodes$,
  DescribeReservedNodesCommand,
  DescribeReservedNodesOfferings$,
  DescribeReservedNodesOfferingsCommand,
  DescribeReservedNodesOfferingsRequest$,
  DescribeReservedNodesOfferingsResponse$,
  DescribeReservedNodesRequest$,
  DescribeReservedNodesResponse$,
  DescribeServiceUpdates$,
  DescribeServiceUpdatesCommand,
  DescribeServiceUpdatesRequest$,
  DescribeServiceUpdatesResponse$,
  DescribeSnapshots$,
  DescribeSnapshotsCommand,
  DescribeSnapshotsRequest$,
  DescribeSnapshotsResponse$,
  DescribeSubnetGroups$,
  DescribeSubnetGroupsCommand,
  DescribeSubnetGroupsRequest$,
  DescribeSubnetGroupsResponse$,
  DescribeUsers$,
  DescribeUsersCommand,
  DescribeUsersRequest$,
  DescribeUsersResponse$,
  DuplicateUserNameFault,
  DuplicateUserNameFault$,
  Endpoint$,
  EngineVersionInfo$,
  Event$,
  FailoverShard$,
  FailoverShardCommand,
  FailoverShardRequest$,
  FailoverShardResponse$,
  Filter$,
  InputAuthenticationType,
  InsufficientClusterCapacityFault,
  InsufficientClusterCapacityFault$,
  InvalidACLStateFault,
  InvalidACLStateFault$,
  InvalidARNFault,
  InvalidARNFault$,
  InvalidClusterStateFault,
  InvalidClusterStateFault$,
  InvalidCredentialsException,
  InvalidCredentialsException$,
  InvalidKMSKeyFault,
  InvalidKMSKeyFault$,
  InvalidMultiRegionClusterStateFault,
  InvalidMultiRegionClusterStateFault$,
  InvalidNodeStateFault,
  InvalidNodeStateFault$,
  InvalidParameterCombinationException,
  InvalidParameterCombinationException$,
  InvalidParameterGroupStateFault,
  InvalidParameterGroupStateFault$,
  InvalidParameterValueException,
  InvalidParameterValueException$,
  InvalidSnapshotStateFault,
  InvalidSnapshotStateFault$,
  InvalidSubnet,
  InvalidSubnet$,
  InvalidUserStateFault,
  InvalidUserStateFault$,
  InvalidVPCNetworkStateFault,
  InvalidVPCNetworkStateFault$,
  IpDiscovery,
  ListAllowedMultiRegionClusterUpdates$,
  ListAllowedMultiRegionClusterUpdatesCommand,
  ListAllowedMultiRegionClusterUpdatesRequest$,
  ListAllowedMultiRegionClusterUpdatesResponse$,
  ListAllowedNodeTypeUpdates$,
  ListAllowedNodeTypeUpdatesCommand,
  ListAllowedNodeTypeUpdatesRequest$,
  ListAllowedNodeTypeUpdatesResponse$,
  ListTags$,
  ListTagsCommand,
  ListTagsRequest$,
  ListTagsResponse$,
  MemoryDB,
  MemoryDBClient,
  MemoryDBServiceException,
  MultiRegionCluster$,
  MultiRegionClusterAlreadyExistsFault,
  MultiRegionClusterAlreadyExistsFault$,
  MultiRegionClusterNotFoundFault,
  MultiRegionClusterNotFoundFault$,
  MultiRegionParameter$,
  MultiRegionParameterGroup$,
  MultiRegionParameterGroupNotFoundFault,
  MultiRegionParameterGroupNotFoundFault$,
  NetworkType,
  NoOperationFault,
  NoOperationFault$,
  Node$,
  NodeQuotaForClusterExceededFault,
  NodeQuotaForClusterExceededFault$,
  NodeQuotaForCustomerExceededFault,
  NodeQuotaForCustomerExceededFault$,
  Parameter$,
  ParameterGroup$,
  ParameterGroupAlreadyExistsFault,
  ParameterGroupAlreadyExistsFault$,
  ParameterGroupNotFoundFault,
  ParameterGroupNotFoundFault$,
  ParameterGroupQuotaExceededFault,
  ParameterGroupQuotaExceededFault$,
  ParameterNameValue$,
  PendingModifiedServiceUpdate$,
  PurchaseReservedNodesOffering$,
  PurchaseReservedNodesOfferingCommand,
  PurchaseReservedNodesOfferingRequest$,
  PurchaseReservedNodesOfferingResponse$,
  RecurringCharge$,
  RegionalCluster$,
  ReplicaConfigurationRequest$,
  ReservedNode$,
  ReservedNodeAlreadyExistsFault,
  ReservedNodeAlreadyExistsFault$,
  ReservedNodeNotFoundFault,
  ReservedNodeNotFoundFault$,
  ReservedNodeQuotaExceededFault,
  ReservedNodeQuotaExceededFault$,
  ReservedNodesOffering$,
  ReservedNodesOfferingNotFoundFault,
  ReservedNodesOfferingNotFoundFault$,
  ResetParameterGroup$,
  ResetParameterGroupCommand,
  ResetParameterGroupRequest$,
  ResetParameterGroupResponse$,
  ReshardingStatus$,
  SecurityGroupMembership$,
  ServiceLinkedRoleNotFoundFault,
  ServiceLinkedRoleNotFoundFault$,
  ServiceUpdate$,
  ServiceUpdateNotFoundFault,
  ServiceUpdateNotFoundFault$,
  ServiceUpdateRequest$,
  ServiceUpdateStatus,
  ServiceUpdateType,
  Shard$,
  ShardConfiguration$,
  ShardConfigurationRequest$,
  ShardDetail$,
  ShardNotFoundFault,
  ShardNotFoundFault$,
  ShardsPerClusterQuotaExceededFault,
  ShardsPerClusterQuotaExceededFault$,
  SlotMigration$,
  Snapshot$,
  SnapshotAlreadyExistsFault,
  SnapshotAlreadyExistsFault$,
  SnapshotNotFoundFault,
  SnapshotNotFoundFault$,
  SnapshotQuotaExceededFault,
  SnapshotQuotaExceededFault$,
  SourceType,
  Subnet$,
  SubnetGroup$,
  SubnetGroupAlreadyExistsFault,
  SubnetGroupAlreadyExistsFault$,
  SubnetGroupInUseFault,
  SubnetGroupInUseFault$,
  SubnetGroupNotFoundFault,
  SubnetGroupNotFoundFault$,
  SubnetGroupQuotaExceededFault,
  SubnetGroupQuotaExceededFault$,
  SubnetInUse,
  SubnetInUse$,
  SubnetNotAllowedFault,
  SubnetNotAllowedFault$,
  SubnetQuotaExceededFault,
  SubnetQuotaExceededFault$,
  Tag$,
  TagNotFoundFault,
  TagNotFoundFault$,
  TagQuotaPerResourceExceeded,
  TagQuotaPerResourceExceeded$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TestFailoverNotAvailableFault,
  TestFailoverNotAvailableFault$,
  UnprocessedCluster$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateACL$,
  UpdateACLCommand,
  UpdateACLRequest$,
  UpdateACLResponse$,
  UpdateCluster$,
  UpdateClusterCommand,
  UpdateClusterRequest$,
  UpdateClusterResponse$,
  UpdateMultiRegionCluster$,
  UpdateMultiRegionClusterCommand,
  UpdateMultiRegionClusterRequest$,
  UpdateMultiRegionClusterResponse$,
  UpdateParameterGroup$,
  UpdateParameterGroupCommand,
  UpdateParameterGroupRequest$,
  UpdateParameterGroupResponse$,
  UpdateStrategy,
  UpdateSubnetGroup$,
  UpdateSubnetGroupCommand,
  UpdateSubnetGroupRequest$,
  UpdateSubnetGroupResponse$,
  UpdateUser$,
  UpdateUserCommand,
  UpdateUserRequest$,
  UpdateUserResponse$,
  User$,
  UserAlreadyExistsFault,
  UserAlreadyExistsFault$,
  UserNotFoundFault,
  UserNotFoundFault$,
  UserQuotaExceededFault,
  UserQuotaExceededFault$,
  paginateDescribeACLs,
  paginateDescribeClusters,
  paginateDescribeEngineVersions,
  paginateDescribeEvents,
  paginateDescribeMultiRegionClusters,
  paginateDescribeParameterGroups,
  paginateDescribeParameters,
  paginateDescribeReservedNodes,
  paginateDescribeReservedNodesOfferings,
  paginateDescribeServiceUpdates,
  paginateDescribeSnapshots,
  paginateDescribeSubnetGroups,
  paginateDescribeUsers,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MemoryDBClient === "function");
assert(typeof MemoryDB === "function");
// commands
assert(typeof BatchUpdateClusterCommand === "function");
assert(typeof BatchUpdateCluster$ === "object");
assert(typeof CopySnapshotCommand === "function");
assert(typeof CopySnapshot$ === "object");
assert(typeof CreateACLCommand === "function");
assert(typeof CreateACL$ === "object");
assert(typeof CreateClusterCommand === "function");
assert(typeof CreateCluster$ === "object");
assert(typeof CreateMultiRegionClusterCommand === "function");
assert(typeof CreateMultiRegionCluster$ === "object");
assert(typeof CreateParameterGroupCommand === "function");
assert(typeof CreateParameterGroup$ === "object");
assert(typeof CreateSnapshotCommand === "function");
assert(typeof CreateSnapshot$ === "object");
assert(typeof CreateSubnetGroupCommand === "function");
assert(typeof CreateSubnetGroup$ === "object");
assert(typeof CreateUserCommand === "function");
assert(typeof CreateUser$ === "object");
assert(typeof DeleteACLCommand === "function");
assert(typeof DeleteACL$ === "object");
assert(typeof DeleteClusterCommand === "function");
assert(typeof DeleteCluster$ === "object");
assert(typeof DeleteMultiRegionClusterCommand === "function");
assert(typeof DeleteMultiRegionCluster$ === "object");
assert(typeof DeleteParameterGroupCommand === "function");
assert(typeof DeleteParameterGroup$ === "object");
assert(typeof DeleteSnapshotCommand === "function");
assert(typeof DeleteSnapshot$ === "object");
assert(typeof DeleteSubnetGroupCommand === "function");
assert(typeof DeleteSubnetGroup$ === "object");
assert(typeof DeleteUserCommand === "function");
assert(typeof DeleteUser$ === "object");
assert(typeof DescribeACLsCommand === "function");
assert(typeof DescribeACLs$ === "object");
assert(typeof DescribeClustersCommand === "function");
assert(typeof DescribeClusters$ === "object");
assert(typeof DescribeEngineVersionsCommand === "function");
assert(typeof DescribeEngineVersions$ === "object");
assert(typeof DescribeEventsCommand === "function");
assert(typeof DescribeEvents$ === "object");
assert(typeof DescribeMultiRegionClustersCommand === "function");
assert(typeof DescribeMultiRegionClusters$ === "object");
assert(typeof DescribeMultiRegionParameterGroupsCommand === "function");
assert(typeof DescribeMultiRegionParameterGroups$ === "object");
assert(typeof DescribeMultiRegionParametersCommand === "function");
assert(typeof DescribeMultiRegionParameters$ === "object");
assert(typeof DescribeParameterGroupsCommand === "function");
assert(typeof DescribeParameterGroups$ === "object");
assert(typeof DescribeParametersCommand === "function");
assert(typeof DescribeParameters$ === "object");
assert(typeof DescribeReservedNodesCommand === "function");
assert(typeof DescribeReservedNodes$ === "object");
assert(typeof DescribeReservedNodesOfferingsCommand === "function");
assert(typeof DescribeReservedNodesOfferings$ === "object");
assert(typeof DescribeServiceUpdatesCommand === "function");
assert(typeof DescribeServiceUpdates$ === "object");
assert(typeof DescribeSnapshotsCommand === "function");
assert(typeof DescribeSnapshots$ === "object");
assert(typeof DescribeSubnetGroupsCommand === "function");
assert(typeof DescribeSubnetGroups$ === "object");
assert(typeof DescribeUsersCommand === "function");
assert(typeof DescribeUsers$ === "object");
assert(typeof FailoverShardCommand === "function");
assert(typeof FailoverShard$ === "object");
assert(typeof ListAllowedMultiRegionClusterUpdatesCommand === "function");
assert(typeof ListAllowedMultiRegionClusterUpdates$ === "object");
assert(typeof ListAllowedNodeTypeUpdatesCommand === "function");
assert(typeof ListAllowedNodeTypeUpdates$ === "object");
assert(typeof ListTagsCommand === "function");
assert(typeof ListTags$ === "object");
assert(typeof PurchaseReservedNodesOfferingCommand === "function");
assert(typeof PurchaseReservedNodesOffering$ === "object");
assert(typeof ResetParameterGroupCommand === "function");
assert(typeof ResetParameterGroup$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateACLCommand === "function");
assert(typeof UpdateACL$ === "object");
assert(typeof UpdateClusterCommand === "function");
assert(typeof UpdateCluster$ === "object");
assert(typeof UpdateMultiRegionClusterCommand === "function");
assert(typeof UpdateMultiRegionCluster$ === "object");
assert(typeof UpdateParameterGroupCommand === "function");
assert(typeof UpdateParameterGroup$ === "object");
assert(typeof UpdateSubnetGroupCommand === "function");
assert(typeof UpdateSubnetGroup$ === "object");
assert(typeof UpdateUserCommand === "function");
assert(typeof UpdateUser$ === "object");
// structural schemas
assert(typeof ACL$ === "object");
assert(typeof ACLPendingChanges$ === "object");
assert(typeof ACLsUpdateStatus$ === "object");
assert(typeof Authentication$ === "object");
assert(typeof AuthenticationMode$ === "object");
assert(typeof AvailabilityZone$ === "object");
assert(typeof BatchUpdateClusterRequest$ === "object");
assert(typeof BatchUpdateClusterResponse$ === "object");
assert(typeof Cluster$ === "object");
assert(typeof ClusterConfiguration$ === "object");
assert(typeof ClusterPendingUpdates$ === "object");
assert(typeof CopySnapshotRequest$ === "object");
assert(typeof CopySnapshotResponse$ === "object");
assert(typeof CreateACLRequest$ === "object");
assert(typeof CreateACLResponse$ === "object");
assert(typeof CreateClusterRequest$ === "object");
assert(typeof CreateClusterResponse$ === "object");
assert(typeof CreateMultiRegionClusterRequest$ === "object");
assert(typeof CreateMultiRegionClusterResponse$ === "object");
assert(typeof CreateParameterGroupRequest$ === "object");
assert(typeof CreateParameterGroupResponse$ === "object");
assert(typeof CreateSnapshotRequest$ === "object");
assert(typeof CreateSnapshotResponse$ === "object");
assert(typeof CreateSubnetGroupRequest$ === "object");
assert(typeof CreateSubnetGroupResponse$ === "object");
assert(typeof CreateUserRequest$ === "object");
assert(typeof CreateUserResponse$ === "object");
assert(typeof DeleteACLRequest$ === "object");
assert(typeof DeleteACLResponse$ === "object");
assert(typeof DeleteClusterRequest$ === "object");
assert(typeof DeleteClusterResponse$ === "object");
assert(typeof DeleteMultiRegionClusterRequest$ === "object");
assert(typeof DeleteMultiRegionClusterResponse$ === "object");
assert(typeof DeleteParameterGroupRequest$ === "object");
assert(typeof DeleteParameterGroupResponse$ === "object");
assert(typeof DeleteSnapshotRequest$ === "object");
assert(typeof DeleteSnapshotResponse$ === "object");
assert(typeof DeleteSubnetGroupRequest$ === "object");
assert(typeof DeleteSubnetGroupResponse$ === "object");
assert(typeof DeleteUserRequest$ === "object");
assert(typeof DeleteUserResponse$ === "object");
assert(typeof DescribeACLsRequest$ === "object");
assert(typeof DescribeACLsResponse$ === "object");
assert(typeof DescribeClustersRequest$ === "object");
assert(typeof DescribeClustersResponse$ === "object");
assert(typeof DescribeEngineVersionsRequest$ === "object");
assert(typeof DescribeEngineVersionsResponse$ === "object");
assert(typeof DescribeEventsRequest$ === "object");
assert(typeof DescribeEventsResponse$ === "object");
assert(typeof DescribeMultiRegionClustersRequest$ === "object");
assert(typeof DescribeMultiRegionClustersResponse$ === "object");
assert(typeof DescribeMultiRegionParameterGroupsRequest$ === "object");
assert(typeof DescribeMultiRegionParameterGroupsResponse$ === "object");
assert(typeof DescribeMultiRegionParametersRequest$ === "object");
assert(typeof DescribeMultiRegionParametersResponse$ === "object");
assert(typeof DescribeParameterGroupsRequest$ === "object");
assert(typeof DescribeParameterGroupsResponse$ === "object");
assert(typeof DescribeParametersRequest$ === "object");
assert(typeof DescribeParametersResponse$ === "object");
assert(typeof DescribeReservedNodesOfferingsRequest$ === "object");
assert(typeof DescribeReservedNodesOfferingsResponse$ === "object");
assert(typeof DescribeReservedNodesRequest$ === "object");
assert(typeof DescribeReservedNodesResponse$ === "object");
assert(typeof DescribeServiceUpdatesRequest$ === "object");
assert(typeof DescribeServiceUpdatesResponse$ === "object");
assert(typeof DescribeSnapshotsRequest$ === "object");
assert(typeof DescribeSnapshotsResponse$ === "object");
assert(typeof DescribeSubnetGroupsRequest$ === "object");
assert(typeof DescribeSubnetGroupsResponse$ === "object");
assert(typeof DescribeUsersRequest$ === "object");
assert(typeof DescribeUsersResponse$ === "object");
assert(typeof Endpoint$ === "object");
assert(typeof EngineVersionInfo$ === "object");
assert(typeof Event$ === "object");
assert(typeof FailoverShardRequest$ === "object");
assert(typeof FailoverShardResponse$ === "object");
assert(typeof Filter$ === "object");
assert(typeof ListAllowedMultiRegionClusterUpdatesRequest$ === "object");
assert(typeof ListAllowedMultiRegionClusterUpdatesResponse$ === "object");
assert(typeof ListAllowedNodeTypeUpdatesRequest$ === "object");
assert(typeof ListAllowedNodeTypeUpdatesResponse$ === "object");
assert(typeof ListTagsRequest$ === "object");
assert(typeof ListTagsResponse$ === "object");
assert(typeof MultiRegionCluster$ === "object");
assert(typeof MultiRegionParameter$ === "object");
assert(typeof MultiRegionParameterGroup$ === "object");
assert(typeof Node$ === "object");
assert(typeof Parameter$ === "object");
assert(typeof ParameterGroup$ === "object");
assert(typeof ParameterNameValue$ === "object");
assert(typeof PendingModifiedServiceUpdate$ === "object");
assert(typeof PurchaseReservedNodesOfferingRequest$ === "object");
assert(typeof PurchaseReservedNodesOfferingResponse$ === "object");
assert(typeof RecurringCharge$ === "object");
assert(typeof RegionalCluster$ === "object");
assert(typeof ReplicaConfigurationRequest$ === "object");
assert(typeof ReservedNode$ === "object");
assert(typeof ReservedNodesOffering$ === "object");
assert(typeof ResetParameterGroupRequest$ === "object");
assert(typeof ResetParameterGroupResponse$ === "object");
assert(typeof ReshardingStatus$ === "object");
assert(typeof SecurityGroupMembership$ === "object");
assert(typeof ServiceUpdate$ === "object");
assert(typeof ServiceUpdateRequest$ === "object");
assert(typeof Shard$ === "object");
assert(typeof ShardConfiguration$ === "object");
assert(typeof ShardConfigurationRequest$ === "object");
assert(typeof ShardDetail$ === "object");
assert(typeof SlotMigration$ === "object");
assert(typeof Snapshot$ === "object");
assert(typeof Subnet$ === "object");
assert(typeof SubnetGroup$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UnprocessedCluster$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateACLRequest$ === "object");
assert(typeof UpdateACLResponse$ === "object");
assert(typeof UpdateClusterRequest$ === "object");
assert(typeof UpdateClusterResponse$ === "object");
assert(typeof UpdateMultiRegionClusterRequest$ === "object");
assert(typeof UpdateMultiRegionClusterResponse$ === "object");
assert(typeof UpdateParameterGroupRequest$ === "object");
assert(typeof UpdateParameterGroupResponse$ === "object");
assert(typeof UpdateSubnetGroupRequest$ === "object");
assert(typeof UpdateSubnetGroupResponse$ === "object");
assert(typeof UpdateUserRequest$ === "object");
assert(typeof UpdateUserResponse$ === "object");
assert(typeof User$ === "object");
// enums
assert(typeof AuthenticationType === "object");
assert(typeof AZStatus === "object");
assert(typeof DataTieringStatus === "object");
assert(typeof InputAuthenticationType === "object");
assert(typeof IpDiscovery === "object");
assert(typeof NetworkType === "object");
assert(typeof ServiceUpdateStatus === "object");
assert(typeof ServiceUpdateType === "object");
assert(typeof SourceType === "object");
assert(typeof UpdateStrategy === "object");
// errors
assert(ACLAlreadyExistsFault.prototype instanceof MemoryDBServiceException);
assert(typeof ACLAlreadyExistsFault$ === "object");
assert(ACLNotFoundFault.prototype instanceof MemoryDBServiceException);
assert(typeof ACLNotFoundFault$ === "object");
assert(ACLQuotaExceededFault.prototype instanceof MemoryDBServiceException);
assert(typeof ACLQuotaExceededFault$ === "object");
assert(APICallRateForCustomerExceededFault.prototype instanceof MemoryDBServiceException);
assert(typeof APICallRateForCustomerExceededFault$ === "object");
assert(ClusterAlreadyExistsFault.prototype instanceof MemoryDBServiceException);
assert(typeof ClusterAlreadyExistsFault$ === "object");
assert(ClusterNotFoundFault.prototype instanceof MemoryDBServiceException);
assert(typeof ClusterNotFoundFault$ === "object");
assert(ClusterQuotaForCustomerExceededFault.prototype instanceof MemoryDBServiceException);
assert(typeof ClusterQuotaForCustomerExceededFault$ === "object");
assert(DefaultUserRequired.prototype instanceof MemoryDBServiceException);
assert(typeof DefaultUserRequired$ === "object");
assert(DuplicateUserNameFault.prototype instanceof MemoryDBServiceException);
assert(typeof DuplicateUserNameFault$ === "object");
assert(InsufficientClusterCapacityFault.prototype instanceof MemoryDBServiceException);
assert(typeof InsufficientClusterCapacityFault$ === "object");
assert(InvalidACLStateFault.prototype instanceof MemoryDBServiceException);
assert(typeof InvalidACLStateFault$ === "object");
assert(InvalidARNFault.prototype instanceof MemoryDBServiceException);
assert(typeof InvalidARNFault$ === "object");
assert(InvalidClusterStateFault.prototype instanceof MemoryDBServiceException);
assert(typeof InvalidClusterStateFault$ === "object");
assert(InvalidCredentialsException.prototype instanceof MemoryDBServiceException);
assert(typeof InvalidCredentialsException$ === "object");
assert(InvalidKMSKeyFault.prototype instanceof MemoryDBServiceException);
assert(typeof InvalidKMSKeyFault$ === "object");
assert(InvalidMultiRegionClusterStateFault.prototype instanceof MemoryDBServiceException);
assert(typeof InvalidMultiRegionClusterStateFault$ === "object");
assert(InvalidNodeStateFault.prototype instanceof MemoryDBServiceException);
assert(typeof InvalidNodeStateFault$ === "object");
assert(InvalidParameterCombinationException.prototype instanceof MemoryDBServiceException);
assert(typeof InvalidParameterCombinationException$ === "object");
assert(InvalidParameterGroupStateFault.prototype instanceof MemoryDBServiceException);
assert(typeof InvalidParameterGroupStateFault$ === "object");
assert(InvalidParameterValueException.prototype instanceof MemoryDBServiceException);
assert(typeof InvalidParameterValueException$ === "object");
assert(InvalidSnapshotStateFault.prototype instanceof MemoryDBServiceException);
assert(typeof InvalidSnapshotStateFault$ === "object");
assert(InvalidSubnet.prototype instanceof MemoryDBServiceException);
assert(typeof InvalidSubnet$ === "object");
assert(InvalidUserStateFault.prototype instanceof MemoryDBServiceException);
assert(typeof InvalidUserStateFault$ === "object");
assert(InvalidVPCNetworkStateFault.prototype instanceof MemoryDBServiceException);
assert(typeof InvalidVPCNetworkStateFault$ === "object");
assert(MultiRegionClusterAlreadyExistsFault.prototype instanceof MemoryDBServiceException);
assert(typeof MultiRegionClusterAlreadyExistsFault$ === "object");
assert(MultiRegionClusterNotFoundFault.prototype instanceof MemoryDBServiceException);
assert(typeof MultiRegionClusterNotFoundFault$ === "object");
assert(MultiRegionParameterGroupNotFoundFault.prototype instanceof MemoryDBServiceException);
assert(typeof MultiRegionParameterGroupNotFoundFault$ === "object");
assert(NodeQuotaForClusterExceededFault.prototype instanceof MemoryDBServiceException);
assert(typeof NodeQuotaForClusterExceededFault$ === "object");
assert(NodeQuotaForCustomerExceededFault.prototype instanceof MemoryDBServiceException);
assert(typeof NodeQuotaForCustomerExceededFault$ === "object");
assert(NoOperationFault.prototype instanceof MemoryDBServiceException);
assert(typeof NoOperationFault$ === "object");
assert(ParameterGroupAlreadyExistsFault.prototype instanceof MemoryDBServiceException);
assert(typeof ParameterGroupAlreadyExistsFault$ === "object");
assert(ParameterGroupNotFoundFault.prototype instanceof MemoryDBServiceException);
assert(typeof ParameterGroupNotFoundFault$ === "object");
assert(ParameterGroupQuotaExceededFault.prototype instanceof MemoryDBServiceException);
assert(typeof ParameterGroupQuotaExceededFault$ === "object");
assert(ReservedNodeAlreadyExistsFault.prototype instanceof MemoryDBServiceException);
assert(typeof ReservedNodeAlreadyExistsFault$ === "object");
assert(ReservedNodeNotFoundFault.prototype instanceof MemoryDBServiceException);
assert(typeof ReservedNodeNotFoundFault$ === "object");
assert(ReservedNodeQuotaExceededFault.prototype instanceof MemoryDBServiceException);
assert(typeof ReservedNodeQuotaExceededFault$ === "object");
assert(ReservedNodesOfferingNotFoundFault.prototype instanceof MemoryDBServiceException);
assert(typeof ReservedNodesOfferingNotFoundFault$ === "object");
assert(ServiceLinkedRoleNotFoundFault.prototype instanceof MemoryDBServiceException);
assert(typeof ServiceLinkedRoleNotFoundFault$ === "object");
assert(ServiceUpdateNotFoundFault.prototype instanceof MemoryDBServiceException);
assert(typeof ServiceUpdateNotFoundFault$ === "object");
assert(ShardNotFoundFault.prototype instanceof MemoryDBServiceException);
assert(typeof ShardNotFoundFault$ === "object");
assert(ShardsPerClusterQuotaExceededFault.prototype instanceof MemoryDBServiceException);
assert(typeof ShardsPerClusterQuotaExceededFault$ === "object");
assert(SnapshotAlreadyExistsFault.prototype instanceof MemoryDBServiceException);
assert(typeof SnapshotAlreadyExistsFault$ === "object");
assert(SnapshotNotFoundFault.prototype instanceof MemoryDBServiceException);
assert(typeof SnapshotNotFoundFault$ === "object");
assert(SnapshotQuotaExceededFault.prototype instanceof MemoryDBServiceException);
assert(typeof SnapshotQuotaExceededFault$ === "object");
assert(SubnetGroupAlreadyExistsFault.prototype instanceof MemoryDBServiceException);
assert(typeof SubnetGroupAlreadyExistsFault$ === "object");
assert(SubnetGroupInUseFault.prototype instanceof MemoryDBServiceException);
assert(typeof SubnetGroupInUseFault$ === "object");
assert(SubnetGroupNotFoundFault.prototype instanceof MemoryDBServiceException);
assert(typeof SubnetGroupNotFoundFault$ === "object");
assert(SubnetGroupQuotaExceededFault.prototype instanceof MemoryDBServiceException);
assert(typeof SubnetGroupQuotaExceededFault$ === "object");
assert(SubnetInUse.prototype instanceof MemoryDBServiceException);
assert(typeof SubnetInUse$ === "object");
assert(SubnetNotAllowedFault.prototype instanceof MemoryDBServiceException);
assert(typeof SubnetNotAllowedFault$ === "object");
assert(SubnetQuotaExceededFault.prototype instanceof MemoryDBServiceException);
assert(typeof SubnetQuotaExceededFault$ === "object");
assert(TagNotFoundFault.prototype instanceof MemoryDBServiceException);
assert(typeof TagNotFoundFault$ === "object");
assert(TagQuotaPerResourceExceeded.prototype instanceof MemoryDBServiceException);
assert(typeof TagQuotaPerResourceExceeded$ === "object");
assert(TestFailoverNotAvailableFault.prototype instanceof MemoryDBServiceException);
assert(typeof TestFailoverNotAvailableFault$ === "object");
assert(UserAlreadyExistsFault.prototype instanceof MemoryDBServiceException);
assert(typeof UserAlreadyExistsFault$ === "object");
assert(UserNotFoundFault.prototype instanceof MemoryDBServiceException);
assert(typeof UserNotFoundFault$ === "object");
assert(UserQuotaExceededFault.prototype instanceof MemoryDBServiceException);
assert(typeof UserQuotaExceededFault$ === "object");
assert(MemoryDBServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeACLs === "function");
assert(typeof paginateDescribeClusters === "function");
assert(typeof paginateDescribeEngineVersions === "function");
assert(typeof paginateDescribeEvents === "function");
assert(typeof paginateDescribeMultiRegionClusters === "function");
assert(typeof paginateDescribeParameterGroups === "function");
assert(typeof paginateDescribeParameters === "function");
assert(typeof paginateDescribeReservedNodes === "function");
assert(typeof paginateDescribeReservedNodesOfferings === "function");
assert(typeof paginateDescribeServiceUpdates === "function");
assert(typeof paginateDescribeSnapshots === "function");
assert(typeof paginateDescribeSubnetGroups === "function");
assert(typeof paginateDescribeUsers === "function");
console.log(`MemoryDB index test passed.`);
