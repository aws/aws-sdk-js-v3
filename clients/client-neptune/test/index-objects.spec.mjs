import {
  AddRoleToDBClusterCommand,
  AddSourceIdentifierToSubscriptionCommand,
  AddTagsToResourceCommand,
  ApplyMethod,
  ApplyPendingMaintenanceActionCommand,
  AuthorizationNotFoundFault,
  CertificateNotFoundFault,
  CopyDBClusterParameterGroupCommand,
  CopyDBClusterSnapshotCommand,
  CopyDBParameterGroupCommand,
  CreateDBClusterCommand,
  CreateDBClusterEndpointCommand,
  CreateDBClusterParameterGroupCommand,
  CreateDBClusterSnapshotCommand,
  CreateDBInstanceCommand,
  CreateDBParameterGroupCommand,
  CreateDBSubnetGroupCommand,
  CreateEventSubscriptionCommand,
  CreateGlobalClusterCommand,
  DBClusterAlreadyExistsFault,
  DBClusterEndpointAlreadyExistsFault,
  DBClusterEndpointNotFoundFault,
  DBClusterEndpointQuotaExceededFault,
  DBClusterNotFoundFault,
  DBClusterParameterGroupNotFoundFault,
  DBClusterQuotaExceededFault,
  DBClusterRoleAlreadyExistsFault,
  DBClusterRoleNotFoundFault,
  DBClusterRoleQuotaExceededFault,
  DBClusterSnapshotAlreadyExistsFault,
  DBClusterSnapshotNotFoundFault,
  DBInstanceAlreadyExistsFault,
  DBInstanceNotFoundFault,
  DBParameterGroupAlreadyExistsFault,
  DBParameterGroupNotFoundFault,
  DBParameterGroupQuotaExceededFault,
  DBSecurityGroupNotFoundFault,
  DBSnapshotAlreadyExistsFault,
  DBSnapshotNotFoundFault,
  DBSubnetGroupAlreadyExistsFault,
  DBSubnetGroupDoesNotCoverEnoughAZs,
  DBSubnetGroupNotFoundFault,
  DBSubnetGroupQuotaExceededFault,
  DBSubnetQuotaExceededFault,
  DBUpgradeDependencyFailureFault,
  DeleteDBClusterCommand,
  DeleteDBClusterEndpointCommand,
  DeleteDBClusterParameterGroupCommand,
  DeleteDBClusterSnapshotCommand,
  DeleteDBInstanceCommand,
  DeleteDBParameterGroupCommand,
  DeleteDBSubnetGroupCommand,
  DeleteEventSubscriptionCommand,
  DeleteGlobalClusterCommand,
  DescribeDBClusterEndpointsCommand,
  DescribeDBClusterParameterGroupsCommand,
  DescribeDBClusterParametersCommand,
  DescribeDBClusterSnapshotAttributesCommand,
  DescribeDBClusterSnapshotsCommand,
  DescribeDBClustersCommand,
  DescribeDBEngineVersionsCommand,
  DescribeDBInstancesCommand,
  DescribeDBParameterGroupsCommand,
  DescribeDBParametersCommand,
  DescribeDBSubnetGroupsCommand,
  DescribeEngineDefaultClusterParametersCommand,
  DescribeEngineDefaultParametersCommand,
  DescribeEventCategoriesCommand,
  DescribeEventSubscriptionsCommand,
  DescribeEventsCommand,
  DescribeGlobalClustersCommand,
  DescribeOrderableDBInstanceOptionsCommand,
  DescribePendingMaintenanceActionsCommand,
  DescribeValidDBInstanceModificationsCommand,
  DomainNotFoundFault,
  EventSubscriptionQuotaExceededFault,
  FailoverDBClusterCommand,
  FailoverGlobalClusterCommand,
  FailoverStatus,
  GlobalClusterAlreadyExistsFault,
  GlobalClusterNotFoundFault,
  GlobalClusterQuotaExceededFault,
  InstanceQuotaExceededFault,
  InsufficientDBClusterCapacityFault,
  InsufficientDBInstanceCapacityFault,
  InsufficientStorageClusterCapacityFault,
  InvalidDBClusterEndpointStateFault,
  InvalidDBClusterSnapshotStateFault,
  InvalidDBClusterStateFault,
  InvalidDBInstanceStateFault,
  InvalidDBParameterGroupStateFault,
  InvalidDBSecurityGroupStateFault,
  InvalidDBSnapshotStateFault,
  InvalidDBSubnetGroupStateFault,
  InvalidDBSubnetStateFault,
  InvalidEventSubscriptionStateFault,
  InvalidGlobalClusterStateFault,
  InvalidRestoreFault,
  InvalidSubnet,
  InvalidVPCNetworkStateFault,
  KMSKeyNotAccessibleFault,
  ListTagsForResourceCommand,
  ModifyDBClusterCommand,
  ModifyDBClusterEndpointCommand,
  ModifyDBClusterParameterGroupCommand,
  ModifyDBClusterSnapshotAttributeCommand,
  ModifyDBInstanceCommand,
  ModifyDBParameterGroupCommand,
  ModifyDBSubnetGroupCommand,
  ModifyEventSubscriptionCommand,
  ModifyGlobalClusterCommand,
  Neptune,
  NeptuneClient,
  NeptuneServiceException,
  OptionGroupNotFoundFault,
  PromoteReadReplicaDBClusterCommand,
  ProvisionedIopsNotAvailableInAZFault,
  RebootDBInstanceCommand,
  RemoveFromGlobalClusterCommand,
  RemoveRoleFromDBClusterCommand,
  RemoveSourceIdentifierFromSubscriptionCommand,
  RemoveTagsFromResourceCommand,
  ResetDBClusterParameterGroupCommand,
  ResetDBParameterGroupCommand,
  ResourceNotFoundFault,
  RestoreDBClusterFromSnapshotCommand,
  RestoreDBClusterToPointInTimeCommand,
  SNSInvalidTopicFault,
  SNSNoAuthorizationFault,
  SNSTopicArnNotFoundFault,
  SharedSnapshotQuotaExceededFault,
  SnapshotQuotaExceededFault,
  SourceNotFoundFault,
  SourceType,
  StartDBClusterCommand,
  StopDBClusterCommand,
  StorageQuotaExceededFault,
  StorageTypeNotSupportedFault,
  SubnetAlreadyInUse,
  SubscriptionAlreadyExistFault,
  SubscriptionCategoryNotFoundFault,
  SubscriptionNotFoundFault,
  SwitchoverGlobalClusterCommand,
  paginateDescribeDBClusterEndpoints,
  paginateDescribeDBClusterParameterGroups,
  paginateDescribeDBClusterParameters,
  paginateDescribeDBClusterSnapshots,
  paginateDescribeDBClusters,
  paginateDescribeDBEngineVersions,
  paginateDescribeDBInstances,
  paginateDescribeDBParameterGroups,
  paginateDescribeDBParameters,
  paginateDescribeDBSubnetGroups,
  paginateDescribeEngineDefaultParameters,
  paginateDescribeEventSubscriptions,
  paginateDescribeEvents,
  paginateDescribeGlobalClusters,
  paginateDescribeOrderableDBInstanceOptions,
  paginateDescribePendingMaintenanceActions,
  waitForDBInstanceAvailable,
  waitForDBInstanceDeleted,
  waitUntilDBInstanceAvailable,
  waitUntilDBInstanceDeleted,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof NeptuneClient === "function");
assert(typeof Neptune === "function");
// commands
assert(typeof AddRoleToDBClusterCommand === "function");
assert(typeof AddSourceIdentifierToSubscriptionCommand === "function");
assert(typeof AddTagsToResourceCommand === "function");
assert(typeof ApplyPendingMaintenanceActionCommand === "function");
assert(typeof CopyDBClusterParameterGroupCommand === "function");
assert(typeof CopyDBClusterSnapshotCommand === "function");
assert(typeof CopyDBParameterGroupCommand === "function");
assert(typeof CreateDBClusterCommand === "function");
assert(typeof CreateDBClusterEndpointCommand === "function");
assert(typeof CreateDBClusterParameterGroupCommand === "function");
assert(typeof CreateDBClusterSnapshotCommand === "function");
assert(typeof CreateDBInstanceCommand === "function");
assert(typeof CreateDBParameterGroupCommand === "function");
assert(typeof CreateDBSubnetGroupCommand === "function");
assert(typeof CreateEventSubscriptionCommand === "function");
assert(typeof CreateGlobalClusterCommand === "function");
assert(typeof DeleteDBClusterCommand === "function");
assert(typeof DeleteDBClusterEndpointCommand === "function");
assert(typeof DeleteDBClusterParameterGroupCommand === "function");
assert(typeof DeleteDBClusterSnapshotCommand === "function");
assert(typeof DeleteDBInstanceCommand === "function");
assert(typeof DeleteDBParameterGroupCommand === "function");
assert(typeof DeleteDBSubnetGroupCommand === "function");
assert(typeof DeleteEventSubscriptionCommand === "function");
assert(typeof DeleteGlobalClusterCommand === "function");
assert(typeof DescribeDBClusterEndpointsCommand === "function");
assert(typeof DescribeDBClusterParameterGroupsCommand === "function");
assert(typeof DescribeDBClusterParametersCommand === "function");
assert(typeof DescribeDBClustersCommand === "function");
assert(typeof DescribeDBClusterSnapshotAttributesCommand === "function");
assert(typeof DescribeDBClusterSnapshotsCommand === "function");
assert(typeof DescribeDBEngineVersionsCommand === "function");
assert(typeof DescribeDBInstancesCommand === "function");
assert(typeof DescribeDBParameterGroupsCommand === "function");
assert(typeof DescribeDBParametersCommand === "function");
assert(typeof DescribeDBSubnetGroupsCommand === "function");
assert(typeof DescribeEngineDefaultClusterParametersCommand === "function");
assert(typeof DescribeEngineDefaultParametersCommand === "function");
assert(typeof DescribeEventCategoriesCommand === "function");
assert(typeof DescribeEventsCommand === "function");
assert(typeof DescribeEventSubscriptionsCommand === "function");
assert(typeof DescribeGlobalClustersCommand === "function");
assert(typeof DescribeOrderableDBInstanceOptionsCommand === "function");
assert(typeof DescribePendingMaintenanceActionsCommand === "function");
assert(typeof DescribeValidDBInstanceModificationsCommand === "function");
assert(typeof FailoverDBClusterCommand === "function");
assert(typeof FailoverGlobalClusterCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ModifyDBClusterCommand === "function");
assert(typeof ModifyDBClusterEndpointCommand === "function");
assert(typeof ModifyDBClusterParameterGroupCommand === "function");
assert(typeof ModifyDBClusterSnapshotAttributeCommand === "function");
assert(typeof ModifyDBInstanceCommand === "function");
assert(typeof ModifyDBParameterGroupCommand === "function");
assert(typeof ModifyDBSubnetGroupCommand === "function");
assert(typeof ModifyEventSubscriptionCommand === "function");
assert(typeof ModifyGlobalClusterCommand === "function");
assert(typeof PromoteReadReplicaDBClusterCommand === "function");
assert(typeof RebootDBInstanceCommand === "function");
assert(typeof RemoveFromGlobalClusterCommand === "function");
assert(typeof RemoveRoleFromDBClusterCommand === "function");
assert(typeof RemoveSourceIdentifierFromSubscriptionCommand === "function");
assert(typeof RemoveTagsFromResourceCommand === "function");
assert(typeof ResetDBClusterParameterGroupCommand === "function");
assert(typeof ResetDBParameterGroupCommand === "function");
assert(typeof RestoreDBClusterFromSnapshotCommand === "function");
assert(typeof RestoreDBClusterToPointInTimeCommand === "function");
assert(typeof StartDBClusterCommand === "function");
assert(typeof StopDBClusterCommand === "function");
assert(typeof SwitchoverGlobalClusterCommand === "function");
// enums
assert(typeof ApplyMethod === "object");
assert(typeof FailoverStatus === "object");
assert(typeof SourceType === "object");
// errors
assert(AuthorizationNotFoundFault.prototype instanceof NeptuneServiceException);
assert(CertificateNotFoundFault.prototype instanceof NeptuneServiceException);
assert(DBClusterAlreadyExistsFault.prototype instanceof NeptuneServiceException);
assert(DBClusterEndpointAlreadyExistsFault.prototype instanceof NeptuneServiceException);
assert(DBClusterEndpointNotFoundFault.prototype instanceof NeptuneServiceException);
assert(DBClusterEndpointQuotaExceededFault.prototype instanceof NeptuneServiceException);
assert(DBClusterNotFoundFault.prototype instanceof NeptuneServiceException);
assert(DBClusterParameterGroupNotFoundFault.prototype instanceof NeptuneServiceException);
assert(DBClusterQuotaExceededFault.prototype instanceof NeptuneServiceException);
assert(DBClusterRoleAlreadyExistsFault.prototype instanceof NeptuneServiceException);
assert(DBClusterRoleNotFoundFault.prototype instanceof NeptuneServiceException);
assert(DBClusterRoleQuotaExceededFault.prototype instanceof NeptuneServiceException);
assert(DBClusterSnapshotAlreadyExistsFault.prototype instanceof NeptuneServiceException);
assert(DBClusterSnapshotNotFoundFault.prototype instanceof NeptuneServiceException);
assert(DBInstanceAlreadyExistsFault.prototype instanceof NeptuneServiceException);
assert(DBInstanceNotFoundFault.prototype instanceof NeptuneServiceException);
assert(DBParameterGroupAlreadyExistsFault.prototype instanceof NeptuneServiceException);
assert(DBParameterGroupNotFoundFault.prototype instanceof NeptuneServiceException);
assert(DBParameterGroupQuotaExceededFault.prototype instanceof NeptuneServiceException);
assert(DBSecurityGroupNotFoundFault.prototype instanceof NeptuneServiceException);
assert(DBSnapshotAlreadyExistsFault.prototype instanceof NeptuneServiceException);
assert(DBSnapshotNotFoundFault.prototype instanceof NeptuneServiceException);
assert(DBSubnetGroupAlreadyExistsFault.prototype instanceof NeptuneServiceException);
assert(DBSubnetGroupDoesNotCoverEnoughAZs.prototype instanceof NeptuneServiceException);
assert(DBSubnetGroupNotFoundFault.prototype instanceof NeptuneServiceException);
assert(DBSubnetGroupQuotaExceededFault.prototype instanceof NeptuneServiceException);
assert(DBSubnetQuotaExceededFault.prototype instanceof NeptuneServiceException);
assert(DBUpgradeDependencyFailureFault.prototype instanceof NeptuneServiceException);
assert(DomainNotFoundFault.prototype instanceof NeptuneServiceException);
assert(EventSubscriptionQuotaExceededFault.prototype instanceof NeptuneServiceException);
assert(GlobalClusterAlreadyExistsFault.prototype instanceof NeptuneServiceException);
assert(GlobalClusterNotFoundFault.prototype instanceof NeptuneServiceException);
assert(GlobalClusterQuotaExceededFault.prototype instanceof NeptuneServiceException);
assert(InstanceQuotaExceededFault.prototype instanceof NeptuneServiceException);
assert(InsufficientDBClusterCapacityFault.prototype instanceof NeptuneServiceException);
assert(InsufficientDBInstanceCapacityFault.prototype instanceof NeptuneServiceException);
assert(InsufficientStorageClusterCapacityFault.prototype instanceof NeptuneServiceException);
assert(InvalidDBClusterEndpointStateFault.prototype instanceof NeptuneServiceException);
assert(InvalidDBClusterSnapshotStateFault.prototype instanceof NeptuneServiceException);
assert(InvalidDBClusterStateFault.prototype instanceof NeptuneServiceException);
assert(InvalidDBInstanceStateFault.prototype instanceof NeptuneServiceException);
assert(InvalidDBParameterGroupStateFault.prototype instanceof NeptuneServiceException);
assert(InvalidDBSecurityGroupStateFault.prototype instanceof NeptuneServiceException);
assert(InvalidDBSnapshotStateFault.prototype instanceof NeptuneServiceException);
assert(InvalidDBSubnetGroupStateFault.prototype instanceof NeptuneServiceException);
assert(InvalidDBSubnetStateFault.prototype instanceof NeptuneServiceException);
assert(InvalidEventSubscriptionStateFault.prototype instanceof NeptuneServiceException);
assert(InvalidGlobalClusterStateFault.prototype instanceof NeptuneServiceException);
assert(InvalidRestoreFault.prototype instanceof NeptuneServiceException);
assert(InvalidSubnet.prototype instanceof NeptuneServiceException);
assert(InvalidVPCNetworkStateFault.prototype instanceof NeptuneServiceException);
assert(KMSKeyNotAccessibleFault.prototype instanceof NeptuneServiceException);
assert(OptionGroupNotFoundFault.prototype instanceof NeptuneServiceException);
assert(ProvisionedIopsNotAvailableInAZFault.prototype instanceof NeptuneServiceException);
assert(ResourceNotFoundFault.prototype instanceof NeptuneServiceException);
assert(SharedSnapshotQuotaExceededFault.prototype instanceof NeptuneServiceException);
assert(SnapshotQuotaExceededFault.prototype instanceof NeptuneServiceException);
assert(SNSInvalidTopicFault.prototype instanceof NeptuneServiceException);
assert(SNSNoAuthorizationFault.prototype instanceof NeptuneServiceException);
assert(SNSTopicArnNotFoundFault.prototype instanceof NeptuneServiceException);
assert(SourceNotFoundFault.prototype instanceof NeptuneServiceException);
assert(StorageQuotaExceededFault.prototype instanceof NeptuneServiceException);
assert(StorageTypeNotSupportedFault.prototype instanceof NeptuneServiceException);
assert(SubnetAlreadyInUse.prototype instanceof NeptuneServiceException);
assert(SubscriptionAlreadyExistFault.prototype instanceof NeptuneServiceException);
assert(SubscriptionCategoryNotFoundFault.prototype instanceof NeptuneServiceException);
assert(SubscriptionNotFoundFault.prototype instanceof NeptuneServiceException);
assert(NeptuneServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForDBInstanceAvailable === "function");
assert(typeof waitForDBInstanceDeleted === "function");
assert(typeof waitUntilDBInstanceAvailable === "function");
assert(typeof waitUntilDBInstanceDeleted === "function");
// paginators
assert(typeof paginateDescribeDBClusterEndpoints === "function");
assert(typeof paginateDescribeDBClusterParameterGroups === "function");
assert(typeof paginateDescribeDBClusterParameters === "function");
assert(typeof paginateDescribeDBClusterSnapshots === "function");
assert(typeof paginateDescribeDBClusters === "function");
assert(typeof paginateDescribeDBEngineVersions === "function");
assert(typeof paginateDescribeDBInstances === "function");
assert(typeof paginateDescribeDBParameterGroups === "function");
assert(typeof paginateDescribeDBParameters === "function");
assert(typeof paginateDescribeDBSubnetGroups === "function");
assert(typeof paginateDescribeEngineDefaultParameters === "function");
assert(typeof paginateDescribeEventSubscriptions === "function");
assert(typeof paginateDescribeEvents === "function");
assert(typeof paginateDescribeGlobalClusters === "function");
assert(typeof paginateDescribeOrderableDBInstanceOptions === "function");
assert(typeof paginateDescribePendingMaintenanceActions === "function");
console.log(`Neptune index test passed.`);
