import {
  APICallRateForCustomerExceededFault,
  AZMode,
  AddTagsToResourceCommand,
  AuthTokenUpdateStatus,
  AuthTokenUpdateStrategyType,
  AuthenticationType,
  AuthorizationAlreadyExistsFault,
  AuthorizationNotFoundFault,
  AuthorizeCacheSecurityGroupIngressCommand,
  AutomaticFailoverStatus,
  BatchApplyUpdateActionCommand,
  BatchStopUpdateActionCommand,
  CacheClusterAlreadyExistsFault,
  CacheClusterNotFoundFault,
  CacheParameterGroupAlreadyExistsFault,
  CacheParameterGroupNotFoundFault,
  CacheParameterGroupQuotaExceededFault,
  CacheSecurityGroupAlreadyExistsFault,
  CacheSecurityGroupNotFoundFault,
  CacheSecurityGroupQuotaExceededFault,
  CacheSubnetGroupAlreadyExistsFault,
  CacheSubnetGroupInUse,
  CacheSubnetGroupNotFoundFault,
  CacheSubnetGroupQuotaExceededFault,
  CacheSubnetQuotaExceededFault,
  ChangeType,
  ClusterMode,
  ClusterQuotaForCustomerExceededFault,
  CompleteMigrationCommand,
  CopyServerlessCacheSnapshotCommand,
  CopySnapshotCommand,
  CreateCacheClusterCommand,
  CreateCacheParameterGroupCommand,
  CreateCacheSecurityGroupCommand,
  CreateCacheSubnetGroupCommand,
  CreateGlobalReplicationGroupCommand,
  CreateReplicationGroupCommand,
  CreateServerlessCacheCommand,
  CreateServerlessCacheSnapshotCommand,
  CreateSnapshotCommand,
  CreateUserCommand,
  CreateUserGroupCommand,
  DataStorageUnit,
  DataTieringStatus,
  DecreaseNodeGroupsInGlobalReplicationGroupCommand,
  DecreaseReplicaCountCommand,
  DefaultUserAssociatedToUserGroupFault,
  DefaultUserRequired,
  DeleteCacheClusterCommand,
  DeleteCacheParameterGroupCommand,
  DeleteCacheSecurityGroupCommand,
  DeleteCacheSubnetGroupCommand,
  DeleteGlobalReplicationGroupCommand,
  DeleteReplicationGroupCommand,
  DeleteServerlessCacheCommand,
  DeleteServerlessCacheSnapshotCommand,
  DeleteSnapshotCommand,
  DeleteUserCommand,
  DeleteUserGroupCommand,
  DescribeCacheClustersCommand,
  DescribeCacheEngineVersionsCommand,
  DescribeCacheParameterGroupsCommand,
  DescribeCacheParametersCommand,
  DescribeCacheSecurityGroupsCommand,
  DescribeCacheSubnetGroupsCommand,
  DescribeEngineDefaultParametersCommand,
  DescribeEventsCommand,
  DescribeGlobalReplicationGroupsCommand,
  DescribeReplicationGroupsCommand,
  DescribeReservedCacheNodesCommand,
  DescribeReservedCacheNodesOfferingsCommand,
  DescribeServerlessCacheSnapshotsCommand,
  DescribeServerlessCachesCommand,
  DescribeServiceUpdatesCommand,
  DescribeSnapshotsCommand,
  DescribeUpdateActionsCommand,
  DescribeUserGroupsCommand,
  DescribeUsersCommand,
  DestinationType,
  DisassociateGlobalReplicationGroupCommand,
  DuplicateUserNameFault,
  ElastiCache,
  ElastiCacheClient,
  ElastiCacheServiceException,
  ExportServerlessCacheSnapshotCommand,
  FailoverGlobalReplicationGroupCommand,
  GlobalReplicationGroupAlreadyExistsFault,
  GlobalReplicationGroupNotFoundFault,
  IncreaseNodeGroupsInGlobalReplicationGroupCommand,
  IncreaseReplicaCountCommand,
  InputAuthenticationType,
  InsufficientCacheClusterCapacityFault,
  InvalidARNFault,
  InvalidCacheClusterStateFault,
  InvalidCacheParameterGroupStateFault,
  InvalidCacheSecurityGroupStateFault,
  InvalidCredentialsException,
  InvalidGlobalReplicationGroupStateFault,
  InvalidKMSKeyFault,
  InvalidParameterCombinationException,
  InvalidParameterValueException,
  InvalidReplicationGroupStateFault,
  InvalidServerlessCacheSnapshotStateFault,
  InvalidServerlessCacheStateFault,
  InvalidSnapshotStateFault,
  InvalidSubnet,
  InvalidUserGroupStateFault,
  InvalidUserStateFault,
  InvalidVPCNetworkStateFault,
  IpDiscovery,
  ListAllowedNodeTypeModificationsCommand,
  ListTagsForResourceCommand,
  LogDeliveryConfigurationStatus,
  LogFormat,
  LogType,
  ModifyCacheClusterCommand,
  ModifyCacheParameterGroupCommand,
  ModifyCacheSubnetGroupCommand,
  ModifyGlobalReplicationGroupCommand,
  ModifyReplicationGroupCommand,
  ModifyReplicationGroupShardConfigurationCommand,
  ModifyServerlessCacheCommand,
  ModifyUserCommand,
  ModifyUserGroupCommand,
  MultiAZStatus,
  NetworkType,
  NoOperationFault,
  NodeGroupNotFoundFault,
  NodeGroupsPerReplicationGroupQuotaExceededFault,
  NodeQuotaForClusterExceededFault,
  NodeQuotaForCustomerExceededFault,
  NodeUpdateInitiatedBy,
  NodeUpdateStatus,
  OutpostMode,
  PendingAutomaticFailoverStatus,
  PurchaseReservedCacheNodesOfferingCommand,
  RebalanceSlotsInGlobalReplicationGroupCommand,
  RebootCacheClusterCommand,
  RemoveTagsFromResourceCommand,
  ReplicationGroupAlreadyExistsFault,
  ReplicationGroupAlreadyUnderMigrationFault,
  ReplicationGroupNotFoundFault,
  ReplicationGroupNotUnderMigrationFault,
  ReservedCacheNodeAlreadyExistsFault,
  ReservedCacheNodeNotFoundFault,
  ReservedCacheNodeQuotaExceededFault,
  ReservedCacheNodesOfferingNotFoundFault,
  ResetCacheParameterGroupCommand,
  RevokeCacheSecurityGroupIngressCommand,
  ServerlessCacheAlreadyExistsFault,
  ServerlessCacheNotFoundFault,
  ServerlessCacheQuotaForCustomerExceededFault,
  ServerlessCacheSnapshotAlreadyExistsFault,
  ServerlessCacheSnapshotNotFoundFault,
  ServerlessCacheSnapshotQuotaExceededFault,
  ServiceLinkedRoleNotFoundFault,
  ServiceUpdateNotFoundFault,
  ServiceUpdateSeverity,
  ServiceUpdateStatus,
  ServiceUpdateType,
  SlaMet,
  SnapshotAlreadyExistsFault,
  SnapshotFeatureNotSupportedFault,
  SnapshotNotFoundFault,
  SnapshotQuotaExceededFault,
  SourceType,
  StartMigrationCommand,
  SubnetInUse,
  SubnetNotAllowedFault,
  TagNotFoundFault,
  TagQuotaPerResourceExceeded,
  TestFailoverCommand,
  TestFailoverNotAvailableFault,
  TestMigrationCommand,
  TransitEncryptionMode,
  UpdateActionStatus,
  UserAlreadyExistsFault,
  UserGroupAlreadyExistsFault,
  UserGroupNotFoundFault,
  UserGroupQuotaExceededFault,
  UserNotFoundFault,
  UserQuotaExceededFault,
  paginateDescribeCacheClusters,
  paginateDescribeCacheEngineVersions,
  paginateDescribeCacheParameterGroups,
  paginateDescribeCacheParameters,
  paginateDescribeCacheSecurityGroups,
  paginateDescribeCacheSubnetGroups,
  paginateDescribeEngineDefaultParameters,
  paginateDescribeEvents,
  paginateDescribeGlobalReplicationGroups,
  paginateDescribeReplicationGroups,
  paginateDescribeReservedCacheNodes,
  paginateDescribeReservedCacheNodesOfferings,
  paginateDescribeServerlessCacheSnapshots,
  paginateDescribeServerlessCaches,
  paginateDescribeServiceUpdates,
  paginateDescribeSnapshots,
  paginateDescribeUpdateActions,
  paginateDescribeUserGroups,
  paginateDescribeUsers,
  waitForCacheClusterAvailable,
  waitForCacheClusterDeleted,
  waitForReplicationGroupAvailable,
  waitForReplicationGroupDeleted,
  waitUntilCacheClusterAvailable,
  waitUntilCacheClusterDeleted,
  waitUntilReplicationGroupAvailable,
  waitUntilReplicationGroupDeleted,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ElastiCacheClient === "function");
assert(typeof ElastiCache === "function");
// commands
assert(typeof AddTagsToResourceCommand === "function");
assert(typeof AuthorizeCacheSecurityGroupIngressCommand === "function");
assert(typeof BatchApplyUpdateActionCommand === "function");
assert(typeof BatchStopUpdateActionCommand === "function");
assert(typeof CompleteMigrationCommand === "function");
assert(typeof CopyServerlessCacheSnapshotCommand === "function");
assert(typeof CopySnapshotCommand === "function");
assert(typeof CreateCacheClusterCommand === "function");
assert(typeof CreateCacheParameterGroupCommand === "function");
assert(typeof CreateCacheSecurityGroupCommand === "function");
assert(typeof CreateCacheSubnetGroupCommand === "function");
assert(typeof CreateGlobalReplicationGroupCommand === "function");
assert(typeof CreateReplicationGroupCommand === "function");
assert(typeof CreateServerlessCacheCommand === "function");
assert(typeof CreateServerlessCacheSnapshotCommand === "function");
assert(typeof CreateSnapshotCommand === "function");
assert(typeof CreateUserCommand === "function");
assert(typeof CreateUserGroupCommand === "function");
assert(typeof DecreaseNodeGroupsInGlobalReplicationGroupCommand === "function");
assert(typeof DecreaseReplicaCountCommand === "function");
assert(typeof DeleteCacheClusterCommand === "function");
assert(typeof DeleteCacheParameterGroupCommand === "function");
assert(typeof DeleteCacheSecurityGroupCommand === "function");
assert(typeof DeleteCacheSubnetGroupCommand === "function");
assert(typeof DeleteGlobalReplicationGroupCommand === "function");
assert(typeof DeleteReplicationGroupCommand === "function");
assert(typeof DeleteServerlessCacheCommand === "function");
assert(typeof DeleteServerlessCacheSnapshotCommand === "function");
assert(typeof DeleteSnapshotCommand === "function");
assert(typeof DeleteUserCommand === "function");
assert(typeof DeleteUserGroupCommand === "function");
assert(typeof DescribeCacheClustersCommand === "function");
assert(typeof DescribeCacheEngineVersionsCommand === "function");
assert(typeof DescribeCacheParameterGroupsCommand === "function");
assert(typeof DescribeCacheParametersCommand === "function");
assert(typeof DescribeCacheSecurityGroupsCommand === "function");
assert(typeof DescribeCacheSubnetGroupsCommand === "function");
assert(typeof DescribeEngineDefaultParametersCommand === "function");
assert(typeof DescribeEventsCommand === "function");
assert(typeof DescribeGlobalReplicationGroupsCommand === "function");
assert(typeof DescribeReplicationGroupsCommand === "function");
assert(typeof DescribeReservedCacheNodesCommand === "function");
assert(typeof DescribeReservedCacheNodesOfferingsCommand === "function");
assert(typeof DescribeServerlessCachesCommand === "function");
assert(typeof DescribeServerlessCacheSnapshotsCommand === "function");
assert(typeof DescribeServiceUpdatesCommand === "function");
assert(typeof DescribeSnapshotsCommand === "function");
assert(typeof DescribeUpdateActionsCommand === "function");
assert(typeof DescribeUserGroupsCommand === "function");
assert(typeof DescribeUsersCommand === "function");
assert(typeof DisassociateGlobalReplicationGroupCommand === "function");
assert(typeof ExportServerlessCacheSnapshotCommand === "function");
assert(typeof FailoverGlobalReplicationGroupCommand === "function");
assert(typeof IncreaseNodeGroupsInGlobalReplicationGroupCommand === "function");
assert(typeof IncreaseReplicaCountCommand === "function");
assert(typeof ListAllowedNodeTypeModificationsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ModifyCacheClusterCommand === "function");
assert(typeof ModifyCacheParameterGroupCommand === "function");
assert(typeof ModifyCacheSubnetGroupCommand === "function");
assert(typeof ModifyGlobalReplicationGroupCommand === "function");
assert(typeof ModifyReplicationGroupCommand === "function");
assert(typeof ModifyReplicationGroupShardConfigurationCommand === "function");
assert(typeof ModifyServerlessCacheCommand === "function");
assert(typeof ModifyUserCommand === "function");
assert(typeof ModifyUserGroupCommand === "function");
assert(typeof PurchaseReservedCacheNodesOfferingCommand === "function");
assert(typeof RebalanceSlotsInGlobalReplicationGroupCommand === "function");
assert(typeof RebootCacheClusterCommand === "function");
assert(typeof RemoveTagsFromResourceCommand === "function");
assert(typeof ResetCacheParameterGroupCommand === "function");
assert(typeof RevokeCacheSecurityGroupIngressCommand === "function");
assert(typeof StartMigrationCommand === "function");
assert(typeof TestFailoverCommand === "function");
assert(typeof TestMigrationCommand === "function");
// enums
assert(typeof AuthenticationType === "object");
assert(typeof AuthTokenUpdateStatus === "object");
assert(typeof AuthTokenUpdateStrategyType === "object");
assert(typeof AutomaticFailoverStatus === "object");
assert(typeof AZMode === "object");
assert(typeof ChangeType === "object");
assert(typeof ClusterMode === "object");
assert(typeof DataStorageUnit === "object");
assert(typeof DataTieringStatus === "object");
assert(typeof DestinationType === "object");
assert(typeof InputAuthenticationType === "object");
assert(typeof IpDiscovery === "object");
assert(typeof LogDeliveryConfigurationStatus === "object");
assert(typeof LogFormat === "object");
assert(typeof LogType === "object");
assert(typeof MultiAZStatus === "object");
assert(typeof NetworkType === "object");
assert(typeof NodeUpdateInitiatedBy === "object");
assert(typeof NodeUpdateStatus === "object");
assert(typeof OutpostMode === "object");
assert(typeof PendingAutomaticFailoverStatus === "object");
assert(typeof ServiceUpdateSeverity === "object");
assert(typeof ServiceUpdateStatus === "object");
assert(typeof ServiceUpdateType === "object");
assert(typeof SlaMet === "object");
assert(typeof SourceType === "object");
assert(typeof TransitEncryptionMode === "object");
assert(typeof UpdateActionStatus === "object");
// errors
assert(APICallRateForCustomerExceededFault.prototype instanceof ElastiCacheServiceException);
assert(AuthorizationAlreadyExistsFault.prototype instanceof ElastiCacheServiceException);
assert(AuthorizationNotFoundFault.prototype instanceof ElastiCacheServiceException);
assert(CacheClusterAlreadyExistsFault.prototype instanceof ElastiCacheServiceException);
assert(CacheClusterNotFoundFault.prototype instanceof ElastiCacheServiceException);
assert(CacheParameterGroupAlreadyExistsFault.prototype instanceof ElastiCacheServiceException);
assert(CacheParameterGroupNotFoundFault.prototype instanceof ElastiCacheServiceException);
assert(CacheParameterGroupQuotaExceededFault.prototype instanceof ElastiCacheServiceException);
assert(CacheSecurityGroupAlreadyExistsFault.prototype instanceof ElastiCacheServiceException);
assert(CacheSecurityGroupNotFoundFault.prototype instanceof ElastiCacheServiceException);
assert(CacheSecurityGroupQuotaExceededFault.prototype instanceof ElastiCacheServiceException);
assert(CacheSubnetGroupAlreadyExistsFault.prototype instanceof ElastiCacheServiceException);
assert(CacheSubnetGroupInUse.prototype instanceof ElastiCacheServiceException);
assert(CacheSubnetGroupNotFoundFault.prototype instanceof ElastiCacheServiceException);
assert(CacheSubnetGroupQuotaExceededFault.prototype instanceof ElastiCacheServiceException);
assert(CacheSubnetQuotaExceededFault.prototype instanceof ElastiCacheServiceException);
assert(ClusterQuotaForCustomerExceededFault.prototype instanceof ElastiCacheServiceException);
assert(DefaultUserAssociatedToUserGroupFault.prototype instanceof ElastiCacheServiceException);
assert(DefaultUserRequired.prototype instanceof ElastiCacheServiceException);
assert(DuplicateUserNameFault.prototype instanceof ElastiCacheServiceException);
assert(GlobalReplicationGroupAlreadyExistsFault.prototype instanceof ElastiCacheServiceException);
assert(GlobalReplicationGroupNotFoundFault.prototype instanceof ElastiCacheServiceException);
assert(InsufficientCacheClusterCapacityFault.prototype instanceof ElastiCacheServiceException);
assert(InvalidARNFault.prototype instanceof ElastiCacheServiceException);
assert(InvalidCacheClusterStateFault.prototype instanceof ElastiCacheServiceException);
assert(InvalidCacheParameterGroupStateFault.prototype instanceof ElastiCacheServiceException);
assert(InvalidCacheSecurityGroupStateFault.prototype instanceof ElastiCacheServiceException);
assert(InvalidCredentialsException.prototype instanceof ElastiCacheServiceException);
assert(InvalidGlobalReplicationGroupStateFault.prototype instanceof ElastiCacheServiceException);
assert(InvalidKMSKeyFault.prototype instanceof ElastiCacheServiceException);
assert(InvalidParameterCombinationException.prototype instanceof ElastiCacheServiceException);
assert(InvalidParameterValueException.prototype instanceof ElastiCacheServiceException);
assert(InvalidReplicationGroupStateFault.prototype instanceof ElastiCacheServiceException);
assert(InvalidServerlessCacheSnapshotStateFault.prototype instanceof ElastiCacheServiceException);
assert(InvalidServerlessCacheStateFault.prototype instanceof ElastiCacheServiceException);
assert(InvalidSnapshotStateFault.prototype instanceof ElastiCacheServiceException);
assert(InvalidSubnet.prototype instanceof ElastiCacheServiceException);
assert(InvalidUserGroupStateFault.prototype instanceof ElastiCacheServiceException);
assert(InvalidUserStateFault.prototype instanceof ElastiCacheServiceException);
assert(InvalidVPCNetworkStateFault.prototype instanceof ElastiCacheServiceException);
assert(NodeGroupNotFoundFault.prototype instanceof ElastiCacheServiceException);
assert(NodeGroupsPerReplicationGroupQuotaExceededFault.prototype instanceof ElastiCacheServiceException);
assert(NodeQuotaForClusterExceededFault.prototype instanceof ElastiCacheServiceException);
assert(NodeQuotaForCustomerExceededFault.prototype instanceof ElastiCacheServiceException);
assert(NoOperationFault.prototype instanceof ElastiCacheServiceException);
assert(ReplicationGroupAlreadyExistsFault.prototype instanceof ElastiCacheServiceException);
assert(ReplicationGroupAlreadyUnderMigrationFault.prototype instanceof ElastiCacheServiceException);
assert(ReplicationGroupNotFoundFault.prototype instanceof ElastiCacheServiceException);
assert(ReplicationGroupNotUnderMigrationFault.prototype instanceof ElastiCacheServiceException);
assert(ReservedCacheNodeAlreadyExistsFault.prototype instanceof ElastiCacheServiceException);
assert(ReservedCacheNodeNotFoundFault.prototype instanceof ElastiCacheServiceException);
assert(ReservedCacheNodeQuotaExceededFault.prototype instanceof ElastiCacheServiceException);
assert(ReservedCacheNodesOfferingNotFoundFault.prototype instanceof ElastiCacheServiceException);
assert(ServerlessCacheAlreadyExistsFault.prototype instanceof ElastiCacheServiceException);
assert(ServerlessCacheNotFoundFault.prototype instanceof ElastiCacheServiceException);
assert(ServerlessCacheQuotaForCustomerExceededFault.prototype instanceof ElastiCacheServiceException);
assert(ServerlessCacheSnapshotAlreadyExistsFault.prototype instanceof ElastiCacheServiceException);
assert(ServerlessCacheSnapshotNotFoundFault.prototype instanceof ElastiCacheServiceException);
assert(ServerlessCacheSnapshotQuotaExceededFault.prototype instanceof ElastiCacheServiceException);
assert(ServiceLinkedRoleNotFoundFault.prototype instanceof ElastiCacheServiceException);
assert(ServiceUpdateNotFoundFault.prototype instanceof ElastiCacheServiceException);
assert(SnapshotAlreadyExistsFault.prototype instanceof ElastiCacheServiceException);
assert(SnapshotFeatureNotSupportedFault.prototype instanceof ElastiCacheServiceException);
assert(SnapshotNotFoundFault.prototype instanceof ElastiCacheServiceException);
assert(SnapshotQuotaExceededFault.prototype instanceof ElastiCacheServiceException);
assert(SubnetInUse.prototype instanceof ElastiCacheServiceException);
assert(SubnetNotAllowedFault.prototype instanceof ElastiCacheServiceException);
assert(TagNotFoundFault.prototype instanceof ElastiCacheServiceException);
assert(TagQuotaPerResourceExceeded.prototype instanceof ElastiCacheServiceException);
assert(TestFailoverNotAvailableFault.prototype instanceof ElastiCacheServiceException);
assert(UserAlreadyExistsFault.prototype instanceof ElastiCacheServiceException);
assert(UserGroupAlreadyExistsFault.prototype instanceof ElastiCacheServiceException);
assert(UserGroupNotFoundFault.prototype instanceof ElastiCacheServiceException);
assert(UserGroupQuotaExceededFault.prototype instanceof ElastiCacheServiceException);
assert(UserNotFoundFault.prototype instanceof ElastiCacheServiceException);
assert(UserQuotaExceededFault.prototype instanceof ElastiCacheServiceException);
assert(ElastiCacheServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForCacheClusterAvailable === "function");
assert(typeof waitForCacheClusterDeleted === "function");
assert(typeof waitForReplicationGroupAvailable === "function");
assert(typeof waitForReplicationGroupDeleted === "function");
assert(typeof waitUntilCacheClusterAvailable === "function");
assert(typeof waitUntilCacheClusterDeleted === "function");
assert(typeof waitUntilReplicationGroupAvailable === "function");
assert(typeof waitUntilReplicationGroupDeleted === "function");
// paginators
assert(typeof paginateDescribeCacheClusters === "function");
assert(typeof paginateDescribeCacheEngineVersions === "function");
assert(typeof paginateDescribeCacheParameterGroups === "function");
assert(typeof paginateDescribeCacheParameters === "function");
assert(typeof paginateDescribeCacheSecurityGroups === "function");
assert(typeof paginateDescribeCacheSubnetGroups === "function");
assert(typeof paginateDescribeEngineDefaultParameters === "function");
assert(typeof paginateDescribeEvents === "function");
assert(typeof paginateDescribeGlobalReplicationGroups === "function");
assert(typeof paginateDescribeReplicationGroups === "function");
assert(typeof paginateDescribeReservedCacheNodes === "function");
assert(typeof paginateDescribeReservedCacheNodesOfferings === "function");
assert(typeof paginateDescribeServerlessCacheSnapshots === "function");
assert(typeof paginateDescribeServerlessCaches === "function");
assert(typeof paginateDescribeServiceUpdates === "function");
assert(typeof paginateDescribeSnapshots === "function");
assert(typeof paginateDescribeUpdateActions === "function");
assert(typeof paginateDescribeUserGroups === "function");
assert(typeof paginateDescribeUsers === "function");
console.log(`ElastiCache index test passed.`);
