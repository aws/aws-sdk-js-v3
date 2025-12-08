import {
  ACLAlreadyExistsFault,
  ACLNotFoundFault,
  ACLQuotaExceededFault,
  APICallRateForCustomerExceededFault,
  AZStatus,
  AuthenticationType,
  BatchUpdateClusterCommand,
  ClusterAlreadyExistsFault,
  ClusterNotFoundFault,
  ClusterQuotaForCustomerExceededFault,
  CopySnapshotCommand,
  CreateACLCommand,
  CreateClusterCommand,
  CreateMultiRegionClusterCommand,
  CreateParameterGroupCommand,
  CreateSnapshotCommand,
  CreateSubnetGroupCommand,
  CreateUserCommand,
  DataTieringStatus,
  DefaultUserRequired,
  DeleteACLCommand,
  DeleteClusterCommand,
  DeleteMultiRegionClusterCommand,
  DeleteParameterGroupCommand,
  DeleteSnapshotCommand,
  DeleteSubnetGroupCommand,
  DeleteUserCommand,
  DescribeACLsCommand,
  DescribeClustersCommand,
  DescribeEngineVersionsCommand,
  DescribeEventsCommand,
  DescribeMultiRegionClustersCommand,
  DescribeMultiRegionParameterGroupsCommand,
  DescribeMultiRegionParametersCommand,
  DescribeParameterGroupsCommand,
  DescribeParametersCommand,
  DescribeReservedNodesCommand,
  DescribeReservedNodesOfferingsCommand,
  DescribeServiceUpdatesCommand,
  DescribeSnapshotsCommand,
  DescribeSubnetGroupsCommand,
  DescribeUsersCommand,
  DuplicateUserNameFault,
  FailoverShardCommand,
  InputAuthenticationType,
  InsufficientClusterCapacityFault,
  InvalidACLStateFault,
  InvalidARNFault,
  InvalidClusterStateFault,
  InvalidCredentialsException,
  InvalidKMSKeyFault,
  InvalidMultiRegionClusterStateFault,
  InvalidNodeStateFault,
  InvalidParameterCombinationException,
  InvalidParameterGroupStateFault,
  InvalidParameterValueException,
  InvalidSnapshotStateFault,
  InvalidSubnet,
  InvalidUserStateFault,
  InvalidVPCNetworkStateFault,
  IpDiscovery,
  ListAllowedMultiRegionClusterUpdatesCommand,
  ListAllowedNodeTypeUpdatesCommand,
  ListTagsCommand,
  MemoryDB,
  MemoryDBClient,
  MemoryDBServiceException,
  MultiRegionClusterAlreadyExistsFault,
  MultiRegionClusterNotFoundFault,
  MultiRegionParameterGroupNotFoundFault,
  NetworkType,
  NoOperationFault,
  NodeQuotaForClusterExceededFault,
  NodeQuotaForCustomerExceededFault,
  ParameterGroupAlreadyExistsFault,
  ParameterGroupNotFoundFault,
  ParameterGroupQuotaExceededFault,
  PurchaseReservedNodesOfferingCommand,
  ReservedNodeAlreadyExistsFault,
  ReservedNodeNotFoundFault,
  ReservedNodeQuotaExceededFault,
  ReservedNodesOfferingNotFoundFault,
  ResetParameterGroupCommand,
  ServiceLinkedRoleNotFoundFault,
  ServiceUpdateNotFoundFault,
  ServiceUpdateStatus,
  ServiceUpdateType,
  ShardNotFoundFault,
  ShardsPerClusterQuotaExceededFault,
  SnapshotAlreadyExistsFault,
  SnapshotNotFoundFault,
  SnapshotQuotaExceededFault,
  SourceType,
  SubnetGroupAlreadyExistsFault,
  SubnetGroupInUseFault,
  SubnetGroupNotFoundFault,
  SubnetGroupQuotaExceededFault,
  SubnetInUse,
  SubnetNotAllowedFault,
  SubnetQuotaExceededFault,
  TagNotFoundFault,
  TagQuotaPerResourceExceeded,
  TagResourceCommand,
  TestFailoverNotAvailableFault,
  UntagResourceCommand,
  UpdateACLCommand,
  UpdateClusterCommand,
  UpdateMultiRegionClusterCommand,
  UpdateParameterGroupCommand,
  UpdateStrategy,
  UpdateSubnetGroupCommand,
  UpdateUserCommand,
  UserAlreadyExistsFault,
  UserNotFoundFault,
  UserQuotaExceededFault,
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
assert(typeof CopySnapshotCommand === "function");
assert(typeof CreateACLCommand === "function");
assert(typeof CreateClusterCommand === "function");
assert(typeof CreateMultiRegionClusterCommand === "function");
assert(typeof CreateParameterGroupCommand === "function");
assert(typeof CreateSnapshotCommand === "function");
assert(typeof CreateSubnetGroupCommand === "function");
assert(typeof CreateUserCommand === "function");
assert(typeof DeleteACLCommand === "function");
assert(typeof DeleteClusterCommand === "function");
assert(typeof DeleteMultiRegionClusterCommand === "function");
assert(typeof DeleteParameterGroupCommand === "function");
assert(typeof DeleteSnapshotCommand === "function");
assert(typeof DeleteSubnetGroupCommand === "function");
assert(typeof DeleteUserCommand === "function");
assert(typeof DescribeACLsCommand === "function");
assert(typeof DescribeClustersCommand === "function");
assert(typeof DescribeEngineVersionsCommand === "function");
assert(typeof DescribeEventsCommand === "function");
assert(typeof DescribeMultiRegionClustersCommand === "function");
assert(typeof DescribeMultiRegionParameterGroupsCommand === "function");
assert(typeof DescribeMultiRegionParametersCommand === "function");
assert(typeof DescribeParameterGroupsCommand === "function");
assert(typeof DescribeParametersCommand === "function");
assert(typeof DescribeReservedNodesCommand === "function");
assert(typeof DescribeReservedNodesOfferingsCommand === "function");
assert(typeof DescribeServiceUpdatesCommand === "function");
assert(typeof DescribeSnapshotsCommand === "function");
assert(typeof DescribeSubnetGroupsCommand === "function");
assert(typeof DescribeUsersCommand === "function");
assert(typeof FailoverShardCommand === "function");
assert(typeof ListAllowedMultiRegionClusterUpdatesCommand === "function");
assert(typeof ListAllowedNodeTypeUpdatesCommand === "function");
assert(typeof ListTagsCommand === "function");
assert(typeof PurchaseReservedNodesOfferingCommand === "function");
assert(typeof ResetParameterGroupCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateACLCommand === "function");
assert(typeof UpdateClusterCommand === "function");
assert(typeof UpdateMultiRegionClusterCommand === "function");
assert(typeof UpdateParameterGroupCommand === "function");
assert(typeof UpdateSubnetGroupCommand === "function");
assert(typeof UpdateUserCommand === "function");
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
assert(ACLNotFoundFault.prototype instanceof MemoryDBServiceException);
assert(ACLQuotaExceededFault.prototype instanceof MemoryDBServiceException);
assert(APICallRateForCustomerExceededFault.prototype instanceof MemoryDBServiceException);
assert(ClusterAlreadyExistsFault.prototype instanceof MemoryDBServiceException);
assert(ClusterNotFoundFault.prototype instanceof MemoryDBServiceException);
assert(ClusterQuotaForCustomerExceededFault.prototype instanceof MemoryDBServiceException);
assert(DefaultUserRequired.prototype instanceof MemoryDBServiceException);
assert(DuplicateUserNameFault.prototype instanceof MemoryDBServiceException);
assert(InsufficientClusterCapacityFault.prototype instanceof MemoryDBServiceException);
assert(InvalidACLStateFault.prototype instanceof MemoryDBServiceException);
assert(InvalidARNFault.prototype instanceof MemoryDBServiceException);
assert(InvalidClusterStateFault.prototype instanceof MemoryDBServiceException);
assert(InvalidCredentialsException.prototype instanceof MemoryDBServiceException);
assert(InvalidKMSKeyFault.prototype instanceof MemoryDBServiceException);
assert(InvalidMultiRegionClusterStateFault.prototype instanceof MemoryDBServiceException);
assert(InvalidNodeStateFault.prototype instanceof MemoryDBServiceException);
assert(InvalidParameterCombinationException.prototype instanceof MemoryDBServiceException);
assert(InvalidParameterGroupStateFault.prototype instanceof MemoryDBServiceException);
assert(InvalidParameterValueException.prototype instanceof MemoryDBServiceException);
assert(InvalidSnapshotStateFault.prototype instanceof MemoryDBServiceException);
assert(InvalidSubnet.prototype instanceof MemoryDBServiceException);
assert(InvalidUserStateFault.prototype instanceof MemoryDBServiceException);
assert(InvalidVPCNetworkStateFault.prototype instanceof MemoryDBServiceException);
assert(MultiRegionClusterAlreadyExistsFault.prototype instanceof MemoryDBServiceException);
assert(MultiRegionClusterNotFoundFault.prototype instanceof MemoryDBServiceException);
assert(MultiRegionParameterGroupNotFoundFault.prototype instanceof MemoryDBServiceException);
assert(NodeQuotaForClusterExceededFault.prototype instanceof MemoryDBServiceException);
assert(NodeQuotaForCustomerExceededFault.prototype instanceof MemoryDBServiceException);
assert(NoOperationFault.prototype instanceof MemoryDBServiceException);
assert(ParameterGroupAlreadyExistsFault.prototype instanceof MemoryDBServiceException);
assert(ParameterGroupNotFoundFault.prototype instanceof MemoryDBServiceException);
assert(ParameterGroupQuotaExceededFault.prototype instanceof MemoryDBServiceException);
assert(ReservedNodeAlreadyExistsFault.prototype instanceof MemoryDBServiceException);
assert(ReservedNodeNotFoundFault.prototype instanceof MemoryDBServiceException);
assert(ReservedNodeQuotaExceededFault.prototype instanceof MemoryDBServiceException);
assert(ReservedNodesOfferingNotFoundFault.prototype instanceof MemoryDBServiceException);
assert(ServiceLinkedRoleNotFoundFault.prototype instanceof MemoryDBServiceException);
assert(ServiceUpdateNotFoundFault.prototype instanceof MemoryDBServiceException);
assert(ShardNotFoundFault.prototype instanceof MemoryDBServiceException);
assert(ShardsPerClusterQuotaExceededFault.prototype instanceof MemoryDBServiceException);
assert(SnapshotAlreadyExistsFault.prototype instanceof MemoryDBServiceException);
assert(SnapshotNotFoundFault.prototype instanceof MemoryDBServiceException);
assert(SnapshotQuotaExceededFault.prototype instanceof MemoryDBServiceException);
assert(SubnetGroupAlreadyExistsFault.prototype instanceof MemoryDBServiceException);
assert(SubnetGroupInUseFault.prototype instanceof MemoryDBServiceException);
assert(SubnetGroupNotFoundFault.prototype instanceof MemoryDBServiceException);
assert(SubnetGroupQuotaExceededFault.prototype instanceof MemoryDBServiceException);
assert(SubnetInUse.prototype instanceof MemoryDBServiceException);
assert(SubnetNotAllowedFault.prototype instanceof MemoryDBServiceException);
assert(SubnetQuotaExceededFault.prototype instanceof MemoryDBServiceException);
assert(TagNotFoundFault.prototype instanceof MemoryDBServiceException);
assert(TagQuotaPerResourceExceeded.prototype instanceof MemoryDBServiceException);
assert(TestFailoverNotAvailableFault.prototype instanceof MemoryDBServiceException);
assert(UserAlreadyExistsFault.prototype instanceof MemoryDBServiceException);
assert(UserNotFoundFault.prototype instanceof MemoryDBServiceException);
assert(UserQuotaExceededFault.prototype instanceof MemoryDBServiceException);
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
