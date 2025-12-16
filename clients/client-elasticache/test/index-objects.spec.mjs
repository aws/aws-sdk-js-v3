import {
  APICallRateForCustomerExceededFault,
  APICallRateForCustomerExceededFault$,
  AZMode,
  AddTagsToResource$,
  AddTagsToResourceCommand,
  AddTagsToResourceMessage$,
  AllowedNodeTypeModificationsMessage$,
  AuthTokenUpdateStatus,
  AuthTokenUpdateStrategyType,
  Authentication$,
  AuthenticationMode$,
  AuthenticationType,
  AuthorizationAlreadyExistsFault,
  AuthorizationAlreadyExistsFault$,
  AuthorizationNotFoundFault,
  AuthorizationNotFoundFault$,
  AuthorizeCacheSecurityGroupIngress$,
  AuthorizeCacheSecurityGroupIngressCommand,
  AuthorizeCacheSecurityGroupIngressMessage$,
  AuthorizeCacheSecurityGroupIngressResult$,
  AutomaticFailoverStatus,
  AvailabilityZone$,
  BatchApplyUpdateAction$,
  BatchApplyUpdateActionCommand,
  BatchApplyUpdateActionMessage$,
  BatchStopUpdateAction$,
  BatchStopUpdateActionCommand,
  BatchStopUpdateActionMessage$,
  CacheCluster$,
  CacheClusterAlreadyExistsFault,
  CacheClusterAlreadyExistsFault$,
  CacheClusterMessage$,
  CacheClusterNotFoundFault,
  CacheClusterNotFoundFault$,
  CacheEngineVersion$,
  CacheEngineVersionMessage$,
  CacheNode$,
  CacheNodeTypeSpecificParameter$,
  CacheNodeTypeSpecificValue$,
  CacheNodeUpdateStatus$,
  CacheParameterGroup$,
  CacheParameterGroupAlreadyExistsFault,
  CacheParameterGroupAlreadyExistsFault$,
  CacheParameterGroupDetails$,
  CacheParameterGroupNameMessage$,
  CacheParameterGroupNotFoundFault,
  CacheParameterGroupNotFoundFault$,
  CacheParameterGroupQuotaExceededFault,
  CacheParameterGroupQuotaExceededFault$,
  CacheParameterGroupStatus$,
  CacheParameterGroupsMessage$,
  CacheSecurityGroup$,
  CacheSecurityGroupAlreadyExistsFault,
  CacheSecurityGroupAlreadyExistsFault$,
  CacheSecurityGroupMembership$,
  CacheSecurityGroupMessage$,
  CacheSecurityGroupNotFoundFault,
  CacheSecurityGroupNotFoundFault$,
  CacheSecurityGroupQuotaExceededFault,
  CacheSecurityGroupQuotaExceededFault$,
  CacheSubnetGroup$,
  CacheSubnetGroupAlreadyExistsFault,
  CacheSubnetGroupAlreadyExistsFault$,
  CacheSubnetGroupInUse,
  CacheSubnetGroupInUse$,
  CacheSubnetGroupMessage$,
  CacheSubnetGroupNotFoundFault,
  CacheSubnetGroupNotFoundFault$,
  CacheSubnetGroupQuotaExceededFault,
  CacheSubnetGroupQuotaExceededFault$,
  CacheSubnetQuotaExceededFault,
  CacheSubnetQuotaExceededFault$,
  CacheUsageLimits$,
  ChangeType,
  CloudWatchLogsDestinationDetails$,
  ClusterMode,
  ClusterQuotaForCustomerExceededFault,
  ClusterQuotaForCustomerExceededFault$,
  CompleteMigration$,
  CompleteMigrationCommand,
  CompleteMigrationMessage$,
  CompleteMigrationResponse$,
  ConfigureShard$,
  CopyServerlessCacheSnapshot$,
  CopyServerlessCacheSnapshotCommand,
  CopyServerlessCacheSnapshotRequest$,
  CopyServerlessCacheSnapshotResponse$,
  CopySnapshot$,
  CopySnapshotCommand,
  CopySnapshotMessage$,
  CopySnapshotResult$,
  CreateCacheCluster$,
  CreateCacheClusterCommand,
  CreateCacheClusterMessage$,
  CreateCacheClusterResult$,
  CreateCacheParameterGroup$,
  CreateCacheParameterGroupCommand,
  CreateCacheParameterGroupMessage$,
  CreateCacheParameterGroupResult$,
  CreateCacheSecurityGroup$,
  CreateCacheSecurityGroupCommand,
  CreateCacheSecurityGroupMessage$,
  CreateCacheSecurityGroupResult$,
  CreateCacheSubnetGroup$,
  CreateCacheSubnetGroupCommand,
  CreateCacheSubnetGroupMessage$,
  CreateCacheSubnetGroupResult$,
  CreateGlobalReplicationGroup$,
  CreateGlobalReplicationGroupCommand,
  CreateGlobalReplicationGroupMessage$,
  CreateGlobalReplicationGroupResult$,
  CreateReplicationGroup$,
  CreateReplicationGroupCommand,
  CreateReplicationGroupMessage$,
  CreateReplicationGroupResult$,
  CreateServerlessCache$,
  CreateServerlessCacheCommand,
  CreateServerlessCacheRequest$,
  CreateServerlessCacheResponse$,
  CreateServerlessCacheSnapshot$,
  CreateServerlessCacheSnapshotCommand,
  CreateServerlessCacheSnapshotRequest$,
  CreateServerlessCacheSnapshotResponse$,
  CreateSnapshot$,
  CreateSnapshotCommand,
  CreateSnapshotMessage$,
  CreateSnapshotResult$,
  CreateUser$,
  CreateUserCommand,
  CreateUserGroup$,
  CreateUserGroupCommand,
  CreateUserGroupMessage$,
  CreateUserMessage$,
  CustomerNodeEndpoint$,
  DataStorage$,
  DataStorageUnit,
  DataTieringStatus,
  DecreaseNodeGroupsInGlobalReplicationGroup$,
  DecreaseNodeGroupsInGlobalReplicationGroupCommand,
  DecreaseNodeGroupsInGlobalReplicationGroupMessage$,
  DecreaseNodeGroupsInGlobalReplicationGroupResult$,
  DecreaseReplicaCount$,
  DecreaseReplicaCountCommand,
  DecreaseReplicaCountMessage$,
  DecreaseReplicaCountResult$,
  DefaultUserAssociatedToUserGroupFault,
  DefaultUserAssociatedToUserGroupFault$,
  DefaultUserRequired,
  DefaultUserRequired$,
  DeleteCacheCluster$,
  DeleteCacheClusterCommand,
  DeleteCacheClusterMessage$,
  DeleteCacheClusterResult$,
  DeleteCacheParameterGroup$,
  DeleteCacheParameterGroupCommand,
  DeleteCacheParameterGroupMessage$,
  DeleteCacheSecurityGroup$,
  DeleteCacheSecurityGroupCommand,
  DeleteCacheSecurityGroupMessage$,
  DeleteCacheSubnetGroup$,
  DeleteCacheSubnetGroupCommand,
  DeleteCacheSubnetGroupMessage$,
  DeleteGlobalReplicationGroup$,
  DeleteGlobalReplicationGroupCommand,
  DeleteGlobalReplicationGroupMessage$,
  DeleteGlobalReplicationGroupResult$,
  DeleteReplicationGroup$,
  DeleteReplicationGroupCommand,
  DeleteReplicationGroupMessage$,
  DeleteReplicationGroupResult$,
  DeleteServerlessCache$,
  DeleteServerlessCacheCommand,
  DeleteServerlessCacheRequest$,
  DeleteServerlessCacheResponse$,
  DeleteServerlessCacheSnapshot$,
  DeleteServerlessCacheSnapshotCommand,
  DeleteServerlessCacheSnapshotRequest$,
  DeleteServerlessCacheSnapshotResponse$,
  DeleteSnapshot$,
  DeleteSnapshotCommand,
  DeleteSnapshotMessage$,
  DeleteSnapshotResult$,
  DeleteUser$,
  DeleteUserCommand,
  DeleteUserGroup$,
  DeleteUserGroupCommand,
  DeleteUserGroupMessage$,
  DeleteUserMessage$,
  DescribeCacheClusters$,
  DescribeCacheClustersCommand,
  DescribeCacheClustersMessage$,
  DescribeCacheEngineVersions$,
  DescribeCacheEngineVersionsCommand,
  DescribeCacheEngineVersionsMessage$,
  DescribeCacheParameterGroups$,
  DescribeCacheParameterGroupsCommand,
  DescribeCacheParameterGroupsMessage$,
  DescribeCacheParameters$,
  DescribeCacheParametersCommand,
  DescribeCacheParametersMessage$,
  DescribeCacheSecurityGroups$,
  DescribeCacheSecurityGroupsCommand,
  DescribeCacheSecurityGroupsMessage$,
  DescribeCacheSubnetGroups$,
  DescribeCacheSubnetGroupsCommand,
  DescribeCacheSubnetGroupsMessage$,
  DescribeEngineDefaultParameters$,
  DescribeEngineDefaultParametersCommand,
  DescribeEngineDefaultParametersMessage$,
  DescribeEngineDefaultParametersResult$,
  DescribeEvents$,
  DescribeEventsCommand,
  DescribeEventsMessage$,
  DescribeGlobalReplicationGroups$,
  DescribeGlobalReplicationGroupsCommand,
  DescribeGlobalReplicationGroupsMessage$,
  DescribeGlobalReplicationGroupsResult$,
  DescribeReplicationGroups$,
  DescribeReplicationGroupsCommand,
  DescribeReplicationGroupsMessage$,
  DescribeReservedCacheNodes$,
  DescribeReservedCacheNodesCommand,
  DescribeReservedCacheNodesMessage$,
  DescribeReservedCacheNodesOfferings$,
  DescribeReservedCacheNodesOfferingsCommand,
  DescribeReservedCacheNodesOfferingsMessage$,
  DescribeServerlessCacheSnapshots$,
  DescribeServerlessCacheSnapshotsCommand,
  DescribeServerlessCacheSnapshotsRequest$,
  DescribeServerlessCacheSnapshotsResponse$,
  DescribeServerlessCaches$,
  DescribeServerlessCachesCommand,
  DescribeServerlessCachesRequest$,
  DescribeServerlessCachesResponse$,
  DescribeServiceUpdates$,
  DescribeServiceUpdatesCommand,
  DescribeServiceUpdatesMessage$,
  DescribeSnapshots$,
  DescribeSnapshotsCommand,
  DescribeSnapshotsListMessage$,
  DescribeSnapshotsMessage$,
  DescribeUpdateActions$,
  DescribeUpdateActionsCommand,
  DescribeUpdateActionsMessage$,
  DescribeUserGroups$,
  DescribeUserGroupsCommand,
  DescribeUserGroupsMessage$,
  DescribeUserGroupsResult$,
  DescribeUsers$,
  DescribeUsersCommand,
  DescribeUsersMessage$,
  DescribeUsersResult$,
  DestinationDetails$,
  DestinationType,
  DisassociateGlobalReplicationGroup$,
  DisassociateGlobalReplicationGroupCommand,
  DisassociateGlobalReplicationGroupMessage$,
  DisassociateGlobalReplicationGroupResult$,
  DuplicateUserNameFault,
  DuplicateUserNameFault$,
  EC2SecurityGroup$,
  ECPUPerSecond$,
  ElastiCache,
  ElastiCacheClient,
  ElastiCacheServiceException,
  Endpoint$,
  EngineDefaults$,
  Event$,
  EventsMessage$,
  ExportServerlessCacheSnapshot$,
  ExportServerlessCacheSnapshotCommand,
  ExportServerlessCacheSnapshotRequest$,
  ExportServerlessCacheSnapshotResponse$,
  FailoverGlobalReplicationGroup$,
  FailoverGlobalReplicationGroupCommand,
  FailoverGlobalReplicationGroupMessage$,
  FailoverGlobalReplicationGroupResult$,
  Filter$,
  GlobalNodeGroup$,
  GlobalReplicationGroup$,
  GlobalReplicationGroupAlreadyExistsFault,
  GlobalReplicationGroupAlreadyExistsFault$,
  GlobalReplicationGroupInfo$,
  GlobalReplicationGroupMember$,
  GlobalReplicationGroupNotFoundFault,
  GlobalReplicationGroupNotFoundFault$,
  IncreaseNodeGroupsInGlobalReplicationGroup$,
  IncreaseNodeGroupsInGlobalReplicationGroupCommand,
  IncreaseNodeGroupsInGlobalReplicationGroupMessage$,
  IncreaseNodeGroupsInGlobalReplicationGroupResult$,
  IncreaseReplicaCount$,
  IncreaseReplicaCountCommand,
  IncreaseReplicaCountMessage$,
  IncreaseReplicaCountResult$,
  InputAuthenticationType,
  InsufficientCacheClusterCapacityFault,
  InsufficientCacheClusterCapacityFault$,
  InvalidARNFault,
  InvalidARNFault$,
  InvalidCacheClusterStateFault,
  InvalidCacheClusterStateFault$,
  InvalidCacheParameterGroupStateFault,
  InvalidCacheParameterGroupStateFault$,
  InvalidCacheSecurityGroupStateFault,
  InvalidCacheSecurityGroupStateFault$,
  InvalidCredentialsException,
  InvalidCredentialsException$,
  InvalidGlobalReplicationGroupStateFault,
  InvalidGlobalReplicationGroupStateFault$,
  InvalidKMSKeyFault,
  InvalidKMSKeyFault$,
  InvalidParameterCombinationException,
  InvalidParameterCombinationException$,
  InvalidParameterValueException,
  InvalidParameterValueException$,
  InvalidReplicationGroupStateFault,
  InvalidReplicationGroupStateFault$,
  InvalidServerlessCacheSnapshotStateFault,
  InvalidServerlessCacheSnapshotStateFault$,
  InvalidServerlessCacheStateFault,
  InvalidServerlessCacheStateFault$,
  InvalidSnapshotStateFault,
  InvalidSnapshotStateFault$,
  InvalidSubnet,
  InvalidSubnet$,
  InvalidUserGroupStateFault,
  InvalidUserGroupStateFault$,
  InvalidUserStateFault,
  InvalidUserStateFault$,
  InvalidVPCNetworkStateFault,
  InvalidVPCNetworkStateFault$,
  IpDiscovery,
  KinesisFirehoseDestinationDetails$,
  ListAllowedNodeTypeModifications$,
  ListAllowedNodeTypeModificationsCommand,
  ListAllowedNodeTypeModificationsMessage$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceMessage$,
  LogDeliveryConfiguration$,
  LogDeliveryConfigurationRequest$,
  LogDeliveryConfigurationStatus,
  LogFormat,
  LogType,
  ModifyCacheCluster$,
  ModifyCacheClusterCommand,
  ModifyCacheClusterMessage$,
  ModifyCacheClusterResult$,
  ModifyCacheParameterGroup$,
  ModifyCacheParameterGroupCommand,
  ModifyCacheParameterGroupMessage$,
  ModifyCacheSubnetGroup$,
  ModifyCacheSubnetGroupCommand,
  ModifyCacheSubnetGroupMessage$,
  ModifyCacheSubnetGroupResult$,
  ModifyGlobalReplicationGroup$,
  ModifyGlobalReplicationGroupCommand,
  ModifyGlobalReplicationGroupMessage$,
  ModifyGlobalReplicationGroupResult$,
  ModifyReplicationGroup$,
  ModifyReplicationGroupCommand,
  ModifyReplicationGroupMessage$,
  ModifyReplicationGroupResult$,
  ModifyReplicationGroupShardConfiguration$,
  ModifyReplicationGroupShardConfigurationCommand,
  ModifyReplicationGroupShardConfigurationMessage$,
  ModifyReplicationGroupShardConfigurationResult$,
  ModifyServerlessCache$,
  ModifyServerlessCacheCommand,
  ModifyServerlessCacheRequest$,
  ModifyServerlessCacheResponse$,
  ModifyUser$,
  ModifyUserCommand,
  ModifyUserGroup$,
  ModifyUserGroupCommand,
  ModifyUserGroupMessage$,
  ModifyUserMessage$,
  MultiAZStatus,
  NetworkType,
  NoOperationFault,
  NoOperationFault$,
  NodeGroup$,
  NodeGroupConfiguration$,
  NodeGroupMember$,
  NodeGroupMemberUpdateStatus$,
  NodeGroupNotFoundFault,
  NodeGroupNotFoundFault$,
  NodeGroupUpdateStatus$,
  NodeGroupsPerReplicationGroupQuotaExceededFault,
  NodeGroupsPerReplicationGroupQuotaExceededFault$,
  NodeQuotaForClusterExceededFault,
  NodeQuotaForClusterExceededFault$,
  NodeQuotaForCustomerExceededFault,
  NodeQuotaForCustomerExceededFault$,
  NodeSnapshot$,
  NodeUpdateInitiatedBy,
  NodeUpdateStatus,
  NotificationConfiguration$,
  OutpostMode,
  Parameter$,
  ParameterNameValue$,
  PendingAutomaticFailoverStatus,
  PendingLogDeliveryConfiguration$,
  PendingModifiedValues$,
  ProcessedUpdateAction$,
  PurchaseReservedCacheNodesOffering$,
  PurchaseReservedCacheNodesOfferingCommand,
  PurchaseReservedCacheNodesOfferingMessage$,
  PurchaseReservedCacheNodesOfferingResult$,
  RebalanceSlotsInGlobalReplicationGroup$,
  RebalanceSlotsInGlobalReplicationGroupCommand,
  RebalanceSlotsInGlobalReplicationGroupMessage$,
  RebalanceSlotsInGlobalReplicationGroupResult$,
  RebootCacheCluster$,
  RebootCacheClusterCommand,
  RebootCacheClusterMessage$,
  RebootCacheClusterResult$,
  RecurringCharge$,
  RegionalConfiguration$,
  RemoveTagsFromResource$,
  RemoveTagsFromResourceCommand,
  RemoveTagsFromResourceMessage$,
  ReplicationGroup$,
  ReplicationGroupAlreadyExistsFault,
  ReplicationGroupAlreadyExistsFault$,
  ReplicationGroupAlreadyUnderMigrationFault,
  ReplicationGroupAlreadyUnderMigrationFault$,
  ReplicationGroupMessage$,
  ReplicationGroupNotFoundFault,
  ReplicationGroupNotFoundFault$,
  ReplicationGroupNotUnderMigrationFault,
  ReplicationGroupNotUnderMigrationFault$,
  ReplicationGroupPendingModifiedValues$,
  ReservedCacheNode$,
  ReservedCacheNodeAlreadyExistsFault,
  ReservedCacheNodeAlreadyExistsFault$,
  ReservedCacheNodeMessage$,
  ReservedCacheNodeNotFoundFault,
  ReservedCacheNodeNotFoundFault$,
  ReservedCacheNodeQuotaExceededFault,
  ReservedCacheNodeQuotaExceededFault$,
  ReservedCacheNodesOffering$,
  ReservedCacheNodesOfferingMessage$,
  ReservedCacheNodesOfferingNotFoundFault,
  ReservedCacheNodesOfferingNotFoundFault$,
  ResetCacheParameterGroup$,
  ResetCacheParameterGroupCommand,
  ResetCacheParameterGroupMessage$,
  ReshardingConfiguration$,
  ReshardingStatus$,
  RevokeCacheSecurityGroupIngress$,
  RevokeCacheSecurityGroupIngressCommand,
  RevokeCacheSecurityGroupIngressMessage$,
  RevokeCacheSecurityGroupIngressResult$,
  ScaleConfig$,
  SecurityGroupMembership$,
  ServerlessCache$,
  ServerlessCacheAlreadyExistsFault,
  ServerlessCacheAlreadyExistsFault$,
  ServerlessCacheConfiguration$,
  ServerlessCacheNotFoundFault,
  ServerlessCacheNotFoundFault$,
  ServerlessCacheQuotaForCustomerExceededFault,
  ServerlessCacheQuotaForCustomerExceededFault$,
  ServerlessCacheSnapshot$,
  ServerlessCacheSnapshotAlreadyExistsFault,
  ServerlessCacheSnapshotAlreadyExistsFault$,
  ServerlessCacheSnapshotNotFoundFault,
  ServerlessCacheSnapshotNotFoundFault$,
  ServerlessCacheSnapshotQuotaExceededFault,
  ServerlessCacheSnapshotQuotaExceededFault$,
  ServiceLinkedRoleNotFoundFault,
  ServiceLinkedRoleNotFoundFault$,
  ServiceUpdate$,
  ServiceUpdateNotFoundFault,
  ServiceUpdateNotFoundFault$,
  ServiceUpdateSeverity,
  ServiceUpdateStatus,
  ServiceUpdateType,
  ServiceUpdatesMessage$,
  SlaMet,
  SlotMigration$,
  Snapshot$,
  SnapshotAlreadyExistsFault,
  SnapshotAlreadyExistsFault$,
  SnapshotFeatureNotSupportedFault,
  SnapshotFeatureNotSupportedFault$,
  SnapshotNotFoundFault,
  SnapshotNotFoundFault$,
  SnapshotQuotaExceededFault,
  SnapshotQuotaExceededFault$,
  SourceType,
  StartMigration$,
  StartMigrationCommand,
  StartMigrationMessage$,
  StartMigrationResponse$,
  Subnet$,
  SubnetInUse,
  SubnetInUse$,
  SubnetNotAllowedFault,
  SubnetNotAllowedFault$,
  SubnetOutpost$,
  Tag$,
  TagListMessage$,
  TagNotFoundFault,
  TagNotFoundFault$,
  TagQuotaPerResourceExceeded,
  TagQuotaPerResourceExceeded$,
  TestFailover$,
  TestFailoverCommand,
  TestFailoverMessage$,
  TestFailoverNotAvailableFault,
  TestFailoverNotAvailableFault$,
  TestFailoverResult$,
  TestMigration$,
  TestMigrationCommand,
  TestMigrationMessage$,
  TestMigrationResponse$,
  TimeRangeFilter$,
  TransitEncryptionMode,
  UnprocessedUpdateAction$,
  UpdateAction$,
  UpdateActionResultsMessage$,
  UpdateActionStatus,
  UpdateActionsMessage$,
  User$,
  UserAlreadyExistsFault,
  UserAlreadyExistsFault$,
  UserGroup$,
  UserGroupAlreadyExistsFault,
  UserGroupAlreadyExistsFault$,
  UserGroupNotFoundFault,
  UserGroupNotFoundFault$,
  UserGroupPendingChanges$,
  UserGroupQuotaExceededFault,
  UserGroupQuotaExceededFault$,
  UserGroupsUpdateStatus$,
  UserNotFoundFault,
  UserNotFoundFault$,
  UserQuotaExceededFault,
  UserQuotaExceededFault$,
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
assert(typeof AddTagsToResource$ === "object");
assert(typeof AuthorizeCacheSecurityGroupIngressCommand === "function");
assert(typeof AuthorizeCacheSecurityGroupIngress$ === "object");
assert(typeof BatchApplyUpdateActionCommand === "function");
assert(typeof BatchApplyUpdateAction$ === "object");
assert(typeof BatchStopUpdateActionCommand === "function");
assert(typeof BatchStopUpdateAction$ === "object");
assert(typeof CompleteMigrationCommand === "function");
assert(typeof CompleteMigration$ === "object");
assert(typeof CopyServerlessCacheSnapshotCommand === "function");
assert(typeof CopyServerlessCacheSnapshot$ === "object");
assert(typeof CopySnapshotCommand === "function");
assert(typeof CopySnapshot$ === "object");
assert(typeof CreateCacheClusterCommand === "function");
assert(typeof CreateCacheCluster$ === "object");
assert(typeof CreateCacheParameterGroupCommand === "function");
assert(typeof CreateCacheParameterGroup$ === "object");
assert(typeof CreateCacheSecurityGroupCommand === "function");
assert(typeof CreateCacheSecurityGroup$ === "object");
assert(typeof CreateCacheSubnetGroupCommand === "function");
assert(typeof CreateCacheSubnetGroup$ === "object");
assert(typeof CreateGlobalReplicationGroupCommand === "function");
assert(typeof CreateGlobalReplicationGroup$ === "object");
assert(typeof CreateReplicationGroupCommand === "function");
assert(typeof CreateReplicationGroup$ === "object");
assert(typeof CreateServerlessCacheCommand === "function");
assert(typeof CreateServerlessCache$ === "object");
assert(typeof CreateServerlessCacheSnapshotCommand === "function");
assert(typeof CreateServerlessCacheSnapshot$ === "object");
assert(typeof CreateSnapshotCommand === "function");
assert(typeof CreateSnapshot$ === "object");
assert(typeof CreateUserCommand === "function");
assert(typeof CreateUser$ === "object");
assert(typeof CreateUserGroupCommand === "function");
assert(typeof CreateUserGroup$ === "object");
assert(typeof DecreaseNodeGroupsInGlobalReplicationGroupCommand === "function");
assert(typeof DecreaseNodeGroupsInGlobalReplicationGroup$ === "object");
assert(typeof DecreaseReplicaCountCommand === "function");
assert(typeof DecreaseReplicaCount$ === "object");
assert(typeof DeleteCacheClusterCommand === "function");
assert(typeof DeleteCacheCluster$ === "object");
assert(typeof DeleteCacheParameterGroupCommand === "function");
assert(typeof DeleteCacheParameterGroup$ === "object");
assert(typeof DeleteCacheSecurityGroupCommand === "function");
assert(typeof DeleteCacheSecurityGroup$ === "object");
assert(typeof DeleteCacheSubnetGroupCommand === "function");
assert(typeof DeleteCacheSubnetGroup$ === "object");
assert(typeof DeleteGlobalReplicationGroupCommand === "function");
assert(typeof DeleteGlobalReplicationGroup$ === "object");
assert(typeof DeleteReplicationGroupCommand === "function");
assert(typeof DeleteReplicationGroup$ === "object");
assert(typeof DeleteServerlessCacheCommand === "function");
assert(typeof DeleteServerlessCache$ === "object");
assert(typeof DeleteServerlessCacheSnapshotCommand === "function");
assert(typeof DeleteServerlessCacheSnapshot$ === "object");
assert(typeof DeleteSnapshotCommand === "function");
assert(typeof DeleteSnapshot$ === "object");
assert(typeof DeleteUserCommand === "function");
assert(typeof DeleteUser$ === "object");
assert(typeof DeleteUserGroupCommand === "function");
assert(typeof DeleteUserGroup$ === "object");
assert(typeof DescribeCacheClustersCommand === "function");
assert(typeof DescribeCacheClusters$ === "object");
assert(typeof DescribeCacheEngineVersionsCommand === "function");
assert(typeof DescribeCacheEngineVersions$ === "object");
assert(typeof DescribeCacheParameterGroupsCommand === "function");
assert(typeof DescribeCacheParameterGroups$ === "object");
assert(typeof DescribeCacheParametersCommand === "function");
assert(typeof DescribeCacheParameters$ === "object");
assert(typeof DescribeCacheSecurityGroupsCommand === "function");
assert(typeof DescribeCacheSecurityGroups$ === "object");
assert(typeof DescribeCacheSubnetGroupsCommand === "function");
assert(typeof DescribeCacheSubnetGroups$ === "object");
assert(typeof DescribeEngineDefaultParametersCommand === "function");
assert(typeof DescribeEngineDefaultParameters$ === "object");
assert(typeof DescribeEventsCommand === "function");
assert(typeof DescribeEvents$ === "object");
assert(typeof DescribeGlobalReplicationGroupsCommand === "function");
assert(typeof DescribeGlobalReplicationGroups$ === "object");
assert(typeof DescribeReplicationGroupsCommand === "function");
assert(typeof DescribeReplicationGroups$ === "object");
assert(typeof DescribeReservedCacheNodesCommand === "function");
assert(typeof DescribeReservedCacheNodes$ === "object");
assert(typeof DescribeReservedCacheNodesOfferingsCommand === "function");
assert(typeof DescribeReservedCacheNodesOfferings$ === "object");
assert(typeof DescribeServerlessCachesCommand === "function");
assert(typeof DescribeServerlessCaches$ === "object");
assert(typeof DescribeServerlessCacheSnapshotsCommand === "function");
assert(typeof DescribeServerlessCacheSnapshots$ === "object");
assert(typeof DescribeServiceUpdatesCommand === "function");
assert(typeof DescribeServiceUpdates$ === "object");
assert(typeof DescribeSnapshotsCommand === "function");
assert(typeof DescribeSnapshots$ === "object");
assert(typeof DescribeUpdateActionsCommand === "function");
assert(typeof DescribeUpdateActions$ === "object");
assert(typeof DescribeUserGroupsCommand === "function");
assert(typeof DescribeUserGroups$ === "object");
assert(typeof DescribeUsersCommand === "function");
assert(typeof DescribeUsers$ === "object");
assert(typeof DisassociateGlobalReplicationGroupCommand === "function");
assert(typeof DisassociateGlobalReplicationGroup$ === "object");
assert(typeof ExportServerlessCacheSnapshotCommand === "function");
assert(typeof ExportServerlessCacheSnapshot$ === "object");
assert(typeof FailoverGlobalReplicationGroupCommand === "function");
assert(typeof FailoverGlobalReplicationGroup$ === "object");
assert(typeof IncreaseNodeGroupsInGlobalReplicationGroupCommand === "function");
assert(typeof IncreaseNodeGroupsInGlobalReplicationGroup$ === "object");
assert(typeof IncreaseReplicaCountCommand === "function");
assert(typeof IncreaseReplicaCount$ === "object");
assert(typeof ListAllowedNodeTypeModificationsCommand === "function");
assert(typeof ListAllowedNodeTypeModifications$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ModifyCacheClusterCommand === "function");
assert(typeof ModifyCacheCluster$ === "object");
assert(typeof ModifyCacheParameterGroupCommand === "function");
assert(typeof ModifyCacheParameterGroup$ === "object");
assert(typeof ModifyCacheSubnetGroupCommand === "function");
assert(typeof ModifyCacheSubnetGroup$ === "object");
assert(typeof ModifyGlobalReplicationGroupCommand === "function");
assert(typeof ModifyGlobalReplicationGroup$ === "object");
assert(typeof ModifyReplicationGroupCommand === "function");
assert(typeof ModifyReplicationGroup$ === "object");
assert(typeof ModifyReplicationGroupShardConfigurationCommand === "function");
assert(typeof ModifyReplicationGroupShardConfiguration$ === "object");
assert(typeof ModifyServerlessCacheCommand === "function");
assert(typeof ModifyServerlessCache$ === "object");
assert(typeof ModifyUserCommand === "function");
assert(typeof ModifyUser$ === "object");
assert(typeof ModifyUserGroupCommand === "function");
assert(typeof ModifyUserGroup$ === "object");
assert(typeof PurchaseReservedCacheNodesOfferingCommand === "function");
assert(typeof PurchaseReservedCacheNodesOffering$ === "object");
assert(typeof RebalanceSlotsInGlobalReplicationGroupCommand === "function");
assert(typeof RebalanceSlotsInGlobalReplicationGroup$ === "object");
assert(typeof RebootCacheClusterCommand === "function");
assert(typeof RebootCacheCluster$ === "object");
assert(typeof RemoveTagsFromResourceCommand === "function");
assert(typeof RemoveTagsFromResource$ === "object");
assert(typeof ResetCacheParameterGroupCommand === "function");
assert(typeof ResetCacheParameterGroup$ === "object");
assert(typeof RevokeCacheSecurityGroupIngressCommand === "function");
assert(typeof RevokeCacheSecurityGroupIngress$ === "object");
assert(typeof StartMigrationCommand === "function");
assert(typeof StartMigration$ === "object");
assert(typeof TestFailoverCommand === "function");
assert(typeof TestFailover$ === "object");
assert(typeof TestMigrationCommand === "function");
assert(typeof TestMigration$ === "object");
// structural schemas
assert(typeof AddTagsToResourceMessage$ === "object");
assert(typeof AllowedNodeTypeModificationsMessage$ === "object");
assert(typeof Authentication$ === "object");
assert(typeof AuthenticationMode$ === "object");
assert(typeof AuthorizeCacheSecurityGroupIngressMessage$ === "object");
assert(typeof AuthorizeCacheSecurityGroupIngressResult$ === "object");
assert(typeof AvailabilityZone$ === "object");
assert(typeof BatchApplyUpdateActionMessage$ === "object");
assert(typeof BatchStopUpdateActionMessage$ === "object");
assert(typeof CacheCluster$ === "object");
assert(typeof CacheClusterMessage$ === "object");
assert(typeof CacheEngineVersion$ === "object");
assert(typeof CacheEngineVersionMessage$ === "object");
assert(typeof CacheNode$ === "object");
assert(typeof CacheNodeTypeSpecificParameter$ === "object");
assert(typeof CacheNodeTypeSpecificValue$ === "object");
assert(typeof CacheNodeUpdateStatus$ === "object");
assert(typeof CacheParameterGroup$ === "object");
assert(typeof CacheParameterGroupDetails$ === "object");
assert(typeof CacheParameterGroupNameMessage$ === "object");
assert(typeof CacheParameterGroupsMessage$ === "object");
assert(typeof CacheParameterGroupStatus$ === "object");
assert(typeof CacheSecurityGroup$ === "object");
assert(typeof CacheSecurityGroupMembership$ === "object");
assert(typeof CacheSecurityGroupMessage$ === "object");
assert(typeof CacheSubnetGroup$ === "object");
assert(typeof CacheSubnetGroupMessage$ === "object");
assert(typeof CacheUsageLimits$ === "object");
assert(typeof CloudWatchLogsDestinationDetails$ === "object");
assert(typeof CompleteMigrationMessage$ === "object");
assert(typeof CompleteMigrationResponse$ === "object");
assert(typeof ConfigureShard$ === "object");
assert(typeof CopyServerlessCacheSnapshotRequest$ === "object");
assert(typeof CopyServerlessCacheSnapshotResponse$ === "object");
assert(typeof CopySnapshotMessage$ === "object");
assert(typeof CopySnapshotResult$ === "object");
assert(typeof CreateCacheClusterMessage$ === "object");
assert(typeof CreateCacheClusterResult$ === "object");
assert(typeof CreateCacheParameterGroupMessage$ === "object");
assert(typeof CreateCacheParameterGroupResult$ === "object");
assert(typeof CreateCacheSecurityGroupMessage$ === "object");
assert(typeof CreateCacheSecurityGroupResult$ === "object");
assert(typeof CreateCacheSubnetGroupMessage$ === "object");
assert(typeof CreateCacheSubnetGroupResult$ === "object");
assert(typeof CreateGlobalReplicationGroupMessage$ === "object");
assert(typeof CreateGlobalReplicationGroupResult$ === "object");
assert(typeof CreateReplicationGroupMessage$ === "object");
assert(typeof CreateReplicationGroupResult$ === "object");
assert(typeof CreateServerlessCacheRequest$ === "object");
assert(typeof CreateServerlessCacheResponse$ === "object");
assert(typeof CreateServerlessCacheSnapshotRequest$ === "object");
assert(typeof CreateServerlessCacheSnapshotResponse$ === "object");
assert(typeof CreateSnapshotMessage$ === "object");
assert(typeof CreateSnapshotResult$ === "object");
assert(typeof CreateUserGroupMessage$ === "object");
assert(typeof CreateUserMessage$ === "object");
assert(typeof CustomerNodeEndpoint$ === "object");
assert(typeof DataStorage$ === "object");
assert(typeof DecreaseNodeGroupsInGlobalReplicationGroupMessage$ === "object");
assert(typeof DecreaseNodeGroupsInGlobalReplicationGroupResult$ === "object");
assert(typeof DecreaseReplicaCountMessage$ === "object");
assert(typeof DecreaseReplicaCountResult$ === "object");
assert(typeof DeleteCacheClusterMessage$ === "object");
assert(typeof DeleteCacheClusterResult$ === "object");
assert(typeof DeleteCacheParameterGroupMessage$ === "object");
assert(typeof DeleteCacheSecurityGroupMessage$ === "object");
assert(typeof DeleteCacheSubnetGroupMessage$ === "object");
assert(typeof DeleteGlobalReplicationGroupMessage$ === "object");
assert(typeof DeleteGlobalReplicationGroupResult$ === "object");
assert(typeof DeleteReplicationGroupMessage$ === "object");
assert(typeof DeleteReplicationGroupResult$ === "object");
assert(typeof DeleteServerlessCacheRequest$ === "object");
assert(typeof DeleteServerlessCacheResponse$ === "object");
assert(typeof DeleteServerlessCacheSnapshotRequest$ === "object");
assert(typeof DeleteServerlessCacheSnapshotResponse$ === "object");
assert(typeof DeleteSnapshotMessage$ === "object");
assert(typeof DeleteSnapshotResult$ === "object");
assert(typeof DeleteUserGroupMessage$ === "object");
assert(typeof DeleteUserMessage$ === "object");
assert(typeof DescribeCacheClustersMessage$ === "object");
assert(typeof DescribeCacheEngineVersionsMessage$ === "object");
assert(typeof DescribeCacheParameterGroupsMessage$ === "object");
assert(typeof DescribeCacheParametersMessage$ === "object");
assert(typeof DescribeCacheSecurityGroupsMessage$ === "object");
assert(typeof DescribeCacheSubnetGroupsMessage$ === "object");
assert(typeof DescribeEngineDefaultParametersMessage$ === "object");
assert(typeof DescribeEngineDefaultParametersResult$ === "object");
assert(typeof DescribeEventsMessage$ === "object");
assert(typeof DescribeGlobalReplicationGroupsMessage$ === "object");
assert(typeof DescribeGlobalReplicationGroupsResult$ === "object");
assert(typeof DescribeReplicationGroupsMessage$ === "object");
assert(typeof DescribeReservedCacheNodesMessage$ === "object");
assert(typeof DescribeReservedCacheNodesOfferingsMessage$ === "object");
assert(typeof DescribeServerlessCacheSnapshotsRequest$ === "object");
assert(typeof DescribeServerlessCacheSnapshotsResponse$ === "object");
assert(typeof DescribeServerlessCachesRequest$ === "object");
assert(typeof DescribeServerlessCachesResponse$ === "object");
assert(typeof DescribeServiceUpdatesMessage$ === "object");
assert(typeof DescribeSnapshotsListMessage$ === "object");
assert(typeof DescribeSnapshotsMessage$ === "object");
assert(typeof DescribeUpdateActionsMessage$ === "object");
assert(typeof DescribeUserGroupsMessage$ === "object");
assert(typeof DescribeUserGroupsResult$ === "object");
assert(typeof DescribeUsersMessage$ === "object");
assert(typeof DescribeUsersResult$ === "object");
assert(typeof DestinationDetails$ === "object");
assert(typeof DisassociateGlobalReplicationGroupMessage$ === "object");
assert(typeof DisassociateGlobalReplicationGroupResult$ === "object");
assert(typeof EC2SecurityGroup$ === "object");
assert(typeof ECPUPerSecond$ === "object");
assert(typeof Endpoint$ === "object");
assert(typeof EngineDefaults$ === "object");
assert(typeof Event$ === "object");
assert(typeof EventsMessage$ === "object");
assert(typeof ExportServerlessCacheSnapshotRequest$ === "object");
assert(typeof ExportServerlessCacheSnapshotResponse$ === "object");
assert(typeof FailoverGlobalReplicationGroupMessage$ === "object");
assert(typeof FailoverGlobalReplicationGroupResult$ === "object");
assert(typeof Filter$ === "object");
assert(typeof GlobalNodeGroup$ === "object");
assert(typeof GlobalReplicationGroup$ === "object");
assert(typeof GlobalReplicationGroupInfo$ === "object");
assert(typeof GlobalReplicationGroupMember$ === "object");
assert(typeof IncreaseNodeGroupsInGlobalReplicationGroupMessage$ === "object");
assert(typeof IncreaseNodeGroupsInGlobalReplicationGroupResult$ === "object");
assert(typeof IncreaseReplicaCountMessage$ === "object");
assert(typeof IncreaseReplicaCountResult$ === "object");
assert(typeof KinesisFirehoseDestinationDetails$ === "object");
assert(typeof ListAllowedNodeTypeModificationsMessage$ === "object");
assert(typeof ListTagsForResourceMessage$ === "object");
assert(typeof LogDeliveryConfiguration$ === "object");
assert(typeof LogDeliveryConfigurationRequest$ === "object");
assert(typeof ModifyCacheClusterMessage$ === "object");
assert(typeof ModifyCacheClusterResult$ === "object");
assert(typeof ModifyCacheParameterGroupMessage$ === "object");
assert(typeof ModifyCacheSubnetGroupMessage$ === "object");
assert(typeof ModifyCacheSubnetGroupResult$ === "object");
assert(typeof ModifyGlobalReplicationGroupMessage$ === "object");
assert(typeof ModifyGlobalReplicationGroupResult$ === "object");
assert(typeof ModifyReplicationGroupMessage$ === "object");
assert(typeof ModifyReplicationGroupResult$ === "object");
assert(typeof ModifyReplicationGroupShardConfigurationMessage$ === "object");
assert(typeof ModifyReplicationGroupShardConfigurationResult$ === "object");
assert(typeof ModifyServerlessCacheRequest$ === "object");
assert(typeof ModifyServerlessCacheResponse$ === "object");
assert(typeof ModifyUserGroupMessage$ === "object");
assert(typeof ModifyUserMessage$ === "object");
assert(typeof NodeGroup$ === "object");
assert(typeof NodeGroupConfiguration$ === "object");
assert(typeof NodeGroupMember$ === "object");
assert(typeof NodeGroupMemberUpdateStatus$ === "object");
assert(typeof NodeGroupUpdateStatus$ === "object");
assert(typeof NodeSnapshot$ === "object");
assert(typeof NotificationConfiguration$ === "object");
assert(typeof Parameter$ === "object");
assert(typeof ParameterNameValue$ === "object");
assert(typeof PendingLogDeliveryConfiguration$ === "object");
assert(typeof PendingModifiedValues$ === "object");
assert(typeof ProcessedUpdateAction$ === "object");
assert(typeof PurchaseReservedCacheNodesOfferingMessage$ === "object");
assert(typeof PurchaseReservedCacheNodesOfferingResult$ === "object");
assert(typeof RebalanceSlotsInGlobalReplicationGroupMessage$ === "object");
assert(typeof RebalanceSlotsInGlobalReplicationGroupResult$ === "object");
assert(typeof RebootCacheClusterMessage$ === "object");
assert(typeof RebootCacheClusterResult$ === "object");
assert(typeof RecurringCharge$ === "object");
assert(typeof RegionalConfiguration$ === "object");
assert(typeof RemoveTagsFromResourceMessage$ === "object");
assert(typeof ReplicationGroup$ === "object");
assert(typeof ReplicationGroupMessage$ === "object");
assert(typeof ReplicationGroupPendingModifiedValues$ === "object");
assert(typeof ReservedCacheNode$ === "object");
assert(typeof ReservedCacheNodeMessage$ === "object");
assert(typeof ReservedCacheNodesOffering$ === "object");
assert(typeof ReservedCacheNodesOfferingMessage$ === "object");
assert(typeof ResetCacheParameterGroupMessage$ === "object");
assert(typeof ReshardingConfiguration$ === "object");
assert(typeof ReshardingStatus$ === "object");
assert(typeof RevokeCacheSecurityGroupIngressMessage$ === "object");
assert(typeof RevokeCacheSecurityGroupIngressResult$ === "object");
assert(typeof ScaleConfig$ === "object");
assert(typeof SecurityGroupMembership$ === "object");
assert(typeof ServerlessCache$ === "object");
assert(typeof ServerlessCacheConfiguration$ === "object");
assert(typeof ServerlessCacheSnapshot$ === "object");
assert(typeof ServiceUpdate$ === "object");
assert(typeof ServiceUpdatesMessage$ === "object");
assert(typeof SlotMigration$ === "object");
assert(typeof Snapshot$ === "object");
assert(typeof StartMigrationMessage$ === "object");
assert(typeof StartMigrationResponse$ === "object");
assert(typeof Subnet$ === "object");
assert(typeof SubnetOutpost$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagListMessage$ === "object");
assert(typeof TestFailoverMessage$ === "object");
assert(typeof TestFailoverResult$ === "object");
assert(typeof TestMigrationMessage$ === "object");
assert(typeof TestMigrationResponse$ === "object");
assert(typeof TimeRangeFilter$ === "object");
assert(typeof UnprocessedUpdateAction$ === "object");
assert(typeof UpdateAction$ === "object");
assert(typeof UpdateActionResultsMessage$ === "object");
assert(typeof UpdateActionsMessage$ === "object");
assert(typeof User$ === "object");
assert(typeof UserGroup$ === "object");
assert(typeof UserGroupPendingChanges$ === "object");
assert(typeof UserGroupsUpdateStatus$ === "object");
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
assert(typeof APICallRateForCustomerExceededFault$ === "object");
assert(AuthorizationAlreadyExistsFault.prototype instanceof ElastiCacheServiceException);
assert(typeof AuthorizationAlreadyExistsFault$ === "object");
assert(AuthorizationNotFoundFault.prototype instanceof ElastiCacheServiceException);
assert(typeof AuthorizationNotFoundFault$ === "object");
assert(CacheClusterAlreadyExistsFault.prototype instanceof ElastiCacheServiceException);
assert(typeof CacheClusterAlreadyExistsFault$ === "object");
assert(CacheClusterNotFoundFault.prototype instanceof ElastiCacheServiceException);
assert(typeof CacheClusterNotFoundFault$ === "object");
assert(CacheParameterGroupAlreadyExistsFault.prototype instanceof ElastiCacheServiceException);
assert(typeof CacheParameterGroupAlreadyExistsFault$ === "object");
assert(CacheParameterGroupNotFoundFault.prototype instanceof ElastiCacheServiceException);
assert(typeof CacheParameterGroupNotFoundFault$ === "object");
assert(CacheParameterGroupQuotaExceededFault.prototype instanceof ElastiCacheServiceException);
assert(typeof CacheParameterGroupQuotaExceededFault$ === "object");
assert(CacheSecurityGroupAlreadyExistsFault.prototype instanceof ElastiCacheServiceException);
assert(typeof CacheSecurityGroupAlreadyExistsFault$ === "object");
assert(CacheSecurityGroupNotFoundFault.prototype instanceof ElastiCacheServiceException);
assert(typeof CacheSecurityGroupNotFoundFault$ === "object");
assert(CacheSecurityGroupQuotaExceededFault.prototype instanceof ElastiCacheServiceException);
assert(typeof CacheSecurityGroupQuotaExceededFault$ === "object");
assert(CacheSubnetGroupAlreadyExistsFault.prototype instanceof ElastiCacheServiceException);
assert(typeof CacheSubnetGroupAlreadyExistsFault$ === "object");
assert(CacheSubnetGroupInUse.prototype instanceof ElastiCacheServiceException);
assert(typeof CacheSubnetGroupInUse$ === "object");
assert(CacheSubnetGroupNotFoundFault.prototype instanceof ElastiCacheServiceException);
assert(typeof CacheSubnetGroupNotFoundFault$ === "object");
assert(CacheSubnetGroupQuotaExceededFault.prototype instanceof ElastiCacheServiceException);
assert(typeof CacheSubnetGroupQuotaExceededFault$ === "object");
assert(CacheSubnetQuotaExceededFault.prototype instanceof ElastiCacheServiceException);
assert(typeof CacheSubnetQuotaExceededFault$ === "object");
assert(ClusterQuotaForCustomerExceededFault.prototype instanceof ElastiCacheServiceException);
assert(typeof ClusterQuotaForCustomerExceededFault$ === "object");
assert(DefaultUserAssociatedToUserGroupFault.prototype instanceof ElastiCacheServiceException);
assert(typeof DefaultUserAssociatedToUserGroupFault$ === "object");
assert(DefaultUserRequired.prototype instanceof ElastiCacheServiceException);
assert(typeof DefaultUserRequired$ === "object");
assert(DuplicateUserNameFault.prototype instanceof ElastiCacheServiceException);
assert(typeof DuplicateUserNameFault$ === "object");
assert(GlobalReplicationGroupAlreadyExistsFault.prototype instanceof ElastiCacheServiceException);
assert(typeof GlobalReplicationGroupAlreadyExistsFault$ === "object");
assert(GlobalReplicationGroupNotFoundFault.prototype instanceof ElastiCacheServiceException);
assert(typeof GlobalReplicationGroupNotFoundFault$ === "object");
assert(InsufficientCacheClusterCapacityFault.prototype instanceof ElastiCacheServiceException);
assert(typeof InsufficientCacheClusterCapacityFault$ === "object");
assert(InvalidARNFault.prototype instanceof ElastiCacheServiceException);
assert(typeof InvalidARNFault$ === "object");
assert(InvalidCacheClusterStateFault.prototype instanceof ElastiCacheServiceException);
assert(typeof InvalidCacheClusterStateFault$ === "object");
assert(InvalidCacheParameterGroupStateFault.prototype instanceof ElastiCacheServiceException);
assert(typeof InvalidCacheParameterGroupStateFault$ === "object");
assert(InvalidCacheSecurityGroupStateFault.prototype instanceof ElastiCacheServiceException);
assert(typeof InvalidCacheSecurityGroupStateFault$ === "object");
assert(InvalidCredentialsException.prototype instanceof ElastiCacheServiceException);
assert(typeof InvalidCredentialsException$ === "object");
assert(InvalidGlobalReplicationGroupStateFault.prototype instanceof ElastiCacheServiceException);
assert(typeof InvalidGlobalReplicationGroupStateFault$ === "object");
assert(InvalidKMSKeyFault.prototype instanceof ElastiCacheServiceException);
assert(typeof InvalidKMSKeyFault$ === "object");
assert(InvalidParameterCombinationException.prototype instanceof ElastiCacheServiceException);
assert(typeof InvalidParameterCombinationException$ === "object");
assert(InvalidParameterValueException.prototype instanceof ElastiCacheServiceException);
assert(typeof InvalidParameterValueException$ === "object");
assert(InvalidReplicationGroupStateFault.prototype instanceof ElastiCacheServiceException);
assert(typeof InvalidReplicationGroupStateFault$ === "object");
assert(InvalidServerlessCacheSnapshotStateFault.prototype instanceof ElastiCacheServiceException);
assert(typeof InvalidServerlessCacheSnapshotStateFault$ === "object");
assert(InvalidServerlessCacheStateFault.prototype instanceof ElastiCacheServiceException);
assert(typeof InvalidServerlessCacheStateFault$ === "object");
assert(InvalidSnapshotStateFault.prototype instanceof ElastiCacheServiceException);
assert(typeof InvalidSnapshotStateFault$ === "object");
assert(InvalidSubnet.prototype instanceof ElastiCacheServiceException);
assert(typeof InvalidSubnet$ === "object");
assert(InvalidUserGroupStateFault.prototype instanceof ElastiCacheServiceException);
assert(typeof InvalidUserGroupStateFault$ === "object");
assert(InvalidUserStateFault.prototype instanceof ElastiCacheServiceException);
assert(typeof InvalidUserStateFault$ === "object");
assert(InvalidVPCNetworkStateFault.prototype instanceof ElastiCacheServiceException);
assert(typeof InvalidVPCNetworkStateFault$ === "object");
assert(NodeGroupNotFoundFault.prototype instanceof ElastiCacheServiceException);
assert(typeof NodeGroupNotFoundFault$ === "object");
assert(NodeGroupsPerReplicationGroupQuotaExceededFault.prototype instanceof ElastiCacheServiceException);
assert(typeof NodeGroupsPerReplicationGroupQuotaExceededFault$ === "object");
assert(NodeQuotaForClusterExceededFault.prototype instanceof ElastiCacheServiceException);
assert(typeof NodeQuotaForClusterExceededFault$ === "object");
assert(NodeQuotaForCustomerExceededFault.prototype instanceof ElastiCacheServiceException);
assert(typeof NodeQuotaForCustomerExceededFault$ === "object");
assert(NoOperationFault.prototype instanceof ElastiCacheServiceException);
assert(typeof NoOperationFault$ === "object");
assert(ReplicationGroupAlreadyExistsFault.prototype instanceof ElastiCacheServiceException);
assert(typeof ReplicationGroupAlreadyExistsFault$ === "object");
assert(ReplicationGroupAlreadyUnderMigrationFault.prototype instanceof ElastiCacheServiceException);
assert(typeof ReplicationGroupAlreadyUnderMigrationFault$ === "object");
assert(ReplicationGroupNotFoundFault.prototype instanceof ElastiCacheServiceException);
assert(typeof ReplicationGroupNotFoundFault$ === "object");
assert(ReplicationGroupNotUnderMigrationFault.prototype instanceof ElastiCacheServiceException);
assert(typeof ReplicationGroupNotUnderMigrationFault$ === "object");
assert(ReservedCacheNodeAlreadyExistsFault.prototype instanceof ElastiCacheServiceException);
assert(typeof ReservedCacheNodeAlreadyExistsFault$ === "object");
assert(ReservedCacheNodeNotFoundFault.prototype instanceof ElastiCacheServiceException);
assert(typeof ReservedCacheNodeNotFoundFault$ === "object");
assert(ReservedCacheNodeQuotaExceededFault.prototype instanceof ElastiCacheServiceException);
assert(typeof ReservedCacheNodeQuotaExceededFault$ === "object");
assert(ReservedCacheNodesOfferingNotFoundFault.prototype instanceof ElastiCacheServiceException);
assert(typeof ReservedCacheNodesOfferingNotFoundFault$ === "object");
assert(ServerlessCacheAlreadyExistsFault.prototype instanceof ElastiCacheServiceException);
assert(typeof ServerlessCacheAlreadyExistsFault$ === "object");
assert(ServerlessCacheNotFoundFault.prototype instanceof ElastiCacheServiceException);
assert(typeof ServerlessCacheNotFoundFault$ === "object");
assert(ServerlessCacheQuotaForCustomerExceededFault.prototype instanceof ElastiCacheServiceException);
assert(typeof ServerlessCacheQuotaForCustomerExceededFault$ === "object");
assert(ServerlessCacheSnapshotAlreadyExistsFault.prototype instanceof ElastiCacheServiceException);
assert(typeof ServerlessCacheSnapshotAlreadyExistsFault$ === "object");
assert(ServerlessCacheSnapshotNotFoundFault.prototype instanceof ElastiCacheServiceException);
assert(typeof ServerlessCacheSnapshotNotFoundFault$ === "object");
assert(ServerlessCacheSnapshotQuotaExceededFault.prototype instanceof ElastiCacheServiceException);
assert(typeof ServerlessCacheSnapshotQuotaExceededFault$ === "object");
assert(ServiceLinkedRoleNotFoundFault.prototype instanceof ElastiCacheServiceException);
assert(typeof ServiceLinkedRoleNotFoundFault$ === "object");
assert(ServiceUpdateNotFoundFault.prototype instanceof ElastiCacheServiceException);
assert(typeof ServiceUpdateNotFoundFault$ === "object");
assert(SnapshotAlreadyExistsFault.prototype instanceof ElastiCacheServiceException);
assert(typeof SnapshotAlreadyExistsFault$ === "object");
assert(SnapshotFeatureNotSupportedFault.prototype instanceof ElastiCacheServiceException);
assert(typeof SnapshotFeatureNotSupportedFault$ === "object");
assert(SnapshotNotFoundFault.prototype instanceof ElastiCacheServiceException);
assert(typeof SnapshotNotFoundFault$ === "object");
assert(SnapshotQuotaExceededFault.prototype instanceof ElastiCacheServiceException);
assert(typeof SnapshotQuotaExceededFault$ === "object");
assert(SubnetInUse.prototype instanceof ElastiCacheServiceException);
assert(typeof SubnetInUse$ === "object");
assert(SubnetNotAllowedFault.prototype instanceof ElastiCacheServiceException);
assert(typeof SubnetNotAllowedFault$ === "object");
assert(TagNotFoundFault.prototype instanceof ElastiCacheServiceException);
assert(typeof TagNotFoundFault$ === "object");
assert(TagQuotaPerResourceExceeded.prototype instanceof ElastiCacheServiceException);
assert(typeof TagQuotaPerResourceExceeded$ === "object");
assert(TestFailoverNotAvailableFault.prototype instanceof ElastiCacheServiceException);
assert(typeof TestFailoverNotAvailableFault$ === "object");
assert(UserAlreadyExistsFault.prototype instanceof ElastiCacheServiceException);
assert(typeof UserAlreadyExistsFault$ === "object");
assert(UserGroupAlreadyExistsFault.prototype instanceof ElastiCacheServiceException);
assert(typeof UserGroupAlreadyExistsFault$ === "object");
assert(UserGroupNotFoundFault.prototype instanceof ElastiCacheServiceException);
assert(typeof UserGroupNotFoundFault$ === "object");
assert(UserGroupQuotaExceededFault.prototype instanceof ElastiCacheServiceException);
assert(typeof UserGroupQuotaExceededFault$ === "object");
assert(UserNotFoundFault.prototype instanceof ElastiCacheServiceException);
assert(typeof UserNotFoundFault$ === "object");
assert(UserQuotaExceededFault.prototype instanceof ElastiCacheServiceException);
assert(typeof UserQuotaExceededFault$ === "object");
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
