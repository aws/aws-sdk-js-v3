import {
  AddSourceIdentifierToSubscriptionCommand,
  AddTagsToResourceCommand,
  ApplyMethod,
  ApplyPendingMaintenanceActionCommand,
  AuthorizationNotFoundFault,
  CertificateNotFoundFault,
  CopyDBClusterParameterGroupCommand,
  CopyDBClusterSnapshotCommand,
  CreateDBClusterCommand,
  CreateDBClusterParameterGroupCommand,
  CreateDBClusterSnapshotCommand,
  CreateDBInstanceCommand,
  CreateDBSubnetGroupCommand,
  CreateEventSubscriptionCommand,
  CreateGlobalClusterCommand,
  DBClusterAlreadyExistsFault,
  DBClusterNotFoundFault,
  DBClusterParameterGroupNotFoundFault,
  DBClusterQuotaExceededFault,
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
  DeleteDBClusterParameterGroupCommand,
  DeleteDBClusterSnapshotCommand,
  DeleteDBInstanceCommand,
  DeleteDBSubnetGroupCommand,
  DeleteEventSubscriptionCommand,
  DeleteGlobalClusterCommand,
  DescribeCertificatesCommand,
  DescribeDBClusterParameterGroupsCommand,
  DescribeDBClusterParametersCommand,
  DescribeDBClusterSnapshotAttributesCommand,
  DescribeDBClusterSnapshotsCommand,
  DescribeDBClustersCommand,
  DescribeDBEngineVersionsCommand,
  DescribeDBInstancesCommand,
  DescribeDBSubnetGroupsCommand,
  DescribeEngineDefaultClusterParametersCommand,
  DescribeEventCategoriesCommand,
  DescribeEventSubscriptionsCommand,
  DescribeEventsCommand,
  DescribeGlobalClustersCommand,
  DescribeOrderableDBInstanceOptionsCommand,
  DescribePendingMaintenanceActionsCommand,
  DocDB,
  DocDBClient,
  DocDBServiceException,
  EventSubscriptionQuotaExceededFault,
  FailoverDBClusterCommand,
  FailoverGlobalClusterCommand,
  FailoverStatus,
  GlobalClusterAlreadyExistsFault,
  GlobalClusterMemberSynchronizationStatus,
  GlobalClusterNotFoundFault,
  GlobalClusterQuotaExceededFault,
  InstanceQuotaExceededFault,
  InsufficientDBClusterCapacityFault,
  InsufficientDBInstanceCapacityFault,
  InsufficientStorageClusterCapacityFault,
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
  ModifyDBClusterParameterGroupCommand,
  ModifyDBClusterSnapshotAttributeCommand,
  ModifyDBInstanceCommand,
  ModifyDBSubnetGroupCommand,
  ModifyEventSubscriptionCommand,
  ModifyGlobalClusterCommand,
  NetworkTypeNotSupported,
  RebootDBInstanceCommand,
  RemoveFromGlobalClusterCommand,
  RemoveSourceIdentifierFromSubscriptionCommand,
  RemoveTagsFromResourceCommand,
  ResetDBClusterParameterGroupCommand,
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
  paginateDescribeCertificates,
  paginateDescribeDBClusterParameterGroups,
  paginateDescribeDBClusterParameters,
  paginateDescribeDBClusterSnapshots,
  paginateDescribeDBClusters,
  paginateDescribeDBEngineVersions,
  paginateDescribeDBInstances,
  paginateDescribeDBSubnetGroups,
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
assert(typeof DocDBClient === "function");
assert(typeof DocDB === "function");
// commands
assert(typeof AddSourceIdentifierToSubscriptionCommand === "function");
assert(typeof AddTagsToResourceCommand === "function");
assert(typeof ApplyPendingMaintenanceActionCommand === "function");
assert(typeof CopyDBClusterParameterGroupCommand === "function");
assert(typeof CopyDBClusterSnapshotCommand === "function");
assert(typeof CreateDBClusterCommand === "function");
assert(typeof CreateDBClusterParameterGroupCommand === "function");
assert(typeof CreateDBClusterSnapshotCommand === "function");
assert(typeof CreateDBInstanceCommand === "function");
assert(typeof CreateDBSubnetGroupCommand === "function");
assert(typeof CreateEventSubscriptionCommand === "function");
assert(typeof CreateGlobalClusterCommand === "function");
assert(typeof DeleteDBClusterCommand === "function");
assert(typeof DeleteDBClusterParameterGroupCommand === "function");
assert(typeof DeleteDBClusterSnapshotCommand === "function");
assert(typeof DeleteDBInstanceCommand === "function");
assert(typeof DeleteDBSubnetGroupCommand === "function");
assert(typeof DeleteEventSubscriptionCommand === "function");
assert(typeof DeleteGlobalClusterCommand === "function");
assert(typeof DescribeCertificatesCommand === "function");
assert(typeof DescribeDBClusterParameterGroupsCommand === "function");
assert(typeof DescribeDBClusterParametersCommand === "function");
assert(typeof DescribeDBClustersCommand === "function");
assert(typeof DescribeDBClusterSnapshotAttributesCommand === "function");
assert(typeof DescribeDBClusterSnapshotsCommand === "function");
assert(typeof DescribeDBEngineVersionsCommand === "function");
assert(typeof DescribeDBInstancesCommand === "function");
assert(typeof DescribeDBSubnetGroupsCommand === "function");
assert(typeof DescribeEngineDefaultClusterParametersCommand === "function");
assert(typeof DescribeEventCategoriesCommand === "function");
assert(typeof DescribeEventsCommand === "function");
assert(typeof DescribeEventSubscriptionsCommand === "function");
assert(typeof DescribeGlobalClustersCommand === "function");
assert(typeof DescribeOrderableDBInstanceOptionsCommand === "function");
assert(typeof DescribePendingMaintenanceActionsCommand === "function");
assert(typeof FailoverDBClusterCommand === "function");
assert(typeof FailoverGlobalClusterCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ModifyDBClusterCommand === "function");
assert(typeof ModifyDBClusterParameterGroupCommand === "function");
assert(typeof ModifyDBClusterSnapshotAttributeCommand === "function");
assert(typeof ModifyDBInstanceCommand === "function");
assert(typeof ModifyDBSubnetGroupCommand === "function");
assert(typeof ModifyEventSubscriptionCommand === "function");
assert(typeof ModifyGlobalClusterCommand === "function");
assert(typeof RebootDBInstanceCommand === "function");
assert(typeof RemoveFromGlobalClusterCommand === "function");
assert(typeof RemoveSourceIdentifierFromSubscriptionCommand === "function");
assert(typeof RemoveTagsFromResourceCommand === "function");
assert(typeof ResetDBClusterParameterGroupCommand === "function");
assert(typeof RestoreDBClusterFromSnapshotCommand === "function");
assert(typeof RestoreDBClusterToPointInTimeCommand === "function");
assert(typeof StartDBClusterCommand === "function");
assert(typeof StopDBClusterCommand === "function");
assert(typeof SwitchoverGlobalClusterCommand === "function");
// enums
assert(typeof ApplyMethod === "object");
assert(typeof FailoverStatus === "object");
assert(typeof GlobalClusterMemberSynchronizationStatus === "object");
assert(typeof SourceType === "object");
// errors
assert(AuthorizationNotFoundFault.prototype instanceof DocDBServiceException);
assert(CertificateNotFoundFault.prototype instanceof DocDBServiceException);
assert(DBClusterAlreadyExistsFault.prototype instanceof DocDBServiceException);
assert(DBClusterNotFoundFault.prototype instanceof DocDBServiceException);
assert(DBClusterParameterGroupNotFoundFault.prototype instanceof DocDBServiceException);
assert(DBClusterQuotaExceededFault.prototype instanceof DocDBServiceException);
assert(DBClusterSnapshotAlreadyExistsFault.prototype instanceof DocDBServiceException);
assert(DBClusterSnapshotNotFoundFault.prototype instanceof DocDBServiceException);
assert(DBInstanceAlreadyExistsFault.prototype instanceof DocDBServiceException);
assert(DBInstanceNotFoundFault.prototype instanceof DocDBServiceException);
assert(DBParameterGroupAlreadyExistsFault.prototype instanceof DocDBServiceException);
assert(DBParameterGroupNotFoundFault.prototype instanceof DocDBServiceException);
assert(DBParameterGroupQuotaExceededFault.prototype instanceof DocDBServiceException);
assert(DBSecurityGroupNotFoundFault.prototype instanceof DocDBServiceException);
assert(DBSnapshotAlreadyExistsFault.prototype instanceof DocDBServiceException);
assert(DBSnapshotNotFoundFault.prototype instanceof DocDBServiceException);
assert(DBSubnetGroupAlreadyExistsFault.prototype instanceof DocDBServiceException);
assert(DBSubnetGroupDoesNotCoverEnoughAZs.prototype instanceof DocDBServiceException);
assert(DBSubnetGroupNotFoundFault.prototype instanceof DocDBServiceException);
assert(DBSubnetGroupQuotaExceededFault.prototype instanceof DocDBServiceException);
assert(DBSubnetQuotaExceededFault.prototype instanceof DocDBServiceException);
assert(DBUpgradeDependencyFailureFault.prototype instanceof DocDBServiceException);
assert(EventSubscriptionQuotaExceededFault.prototype instanceof DocDBServiceException);
assert(GlobalClusterAlreadyExistsFault.prototype instanceof DocDBServiceException);
assert(GlobalClusterNotFoundFault.prototype instanceof DocDBServiceException);
assert(GlobalClusterQuotaExceededFault.prototype instanceof DocDBServiceException);
assert(InstanceQuotaExceededFault.prototype instanceof DocDBServiceException);
assert(InsufficientDBClusterCapacityFault.prototype instanceof DocDBServiceException);
assert(InsufficientDBInstanceCapacityFault.prototype instanceof DocDBServiceException);
assert(InsufficientStorageClusterCapacityFault.prototype instanceof DocDBServiceException);
assert(InvalidDBClusterSnapshotStateFault.prototype instanceof DocDBServiceException);
assert(InvalidDBClusterStateFault.prototype instanceof DocDBServiceException);
assert(InvalidDBInstanceStateFault.prototype instanceof DocDBServiceException);
assert(InvalidDBParameterGroupStateFault.prototype instanceof DocDBServiceException);
assert(InvalidDBSecurityGroupStateFault.prototype instanceof DocDBServiceException);
assert(InvalidDBSnapshotStateFault.prototype instanceof DocDBServiceException);
assert(InvalidDBSubnetGroupStateFault.prototype instanceof DocDBServiceException);
assert(InvalidDBSubnetStateFault.prototype instanceof DocDBServiceException);
assert(InvalidEventSubscriptionStateFault.prototype instanceof DocDBServiceException);
assert(InvalidGlobalClusterStateFault.prototype instanceof DocDBServiceException);
assert(InvalidRestoreFault.prototype instanceof DocDBServiceException);
assert(InvalidSubnet.prototype instanceof DocDBServiceException);
assert(InvalidVPCNetworkStateFault.prototype instanceof DocDBServiceException);
assert(KMSKeyNotAccessibleFault.prototype instanceof DocDBServiceException);
assert(NetworkTypeNotSupported.prototype instanceof DocDBServiceException);
assert(ResourceNotFoundFault.prototype instanceof DocDBServiceException);
assert(SharedSnapshotQuotaExceededFault.prototype instanceof DocDBServiceException);
assert(SnapshotQuotaExceededFault.prototype instanceof DocDBServiceException);
assert(SNSInvalidTopicFault.prototype instanceof DocDBServiceException);
assert(SNSNoAuthorizationFault.prototype instanceof DocDBServiceException);
assert(SNSTopicArnNotFoundFault.prototype instanceof DocDBServiceException);
assert(SourceNotFoundFault.prototype instanceof DocDBServiceException);
assert(StorageQuotaExceededFault.prototype instanceof DocDBServiceException);
assert(StorageTypeNotSupportedFault.prototype instanceof DocDBServiceException);
assert(SubnetAlreadyInUse.prototype instanceof DocDBServiceException);
assert(SubscriptionAlreadyExistFault.prototype instanceof DocDBServiceException);
assert(SubscriptionCategoryNotFoundFault.prototype instanceof DocDBServiceException);
assert(SubscriptionNotFoundFault.prototype instanceof DocDBServiceException);
assert(DocDBServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForDBInstanceAvailable === "function");
assert(typeof waitForDBInstanceDeleted === "function");
assert(typeof waitUntilDBInstanceAvailable === "function");
assert(typeof waitUntilDBInstanceDeleted === "function");
// paginators
assert(typeof paginateDescribeCertificates === "function");
assert(typeof paginateDescribeDBClusterParameterGroups === "function");
assert(typeof paginateDescribeDBClusterParameters === "function");
assert(typeof paginateDescribeDBClusterSnapshots === "function");
assert(typeof paginateDescribeDBClusters === "function");
assert(typeof paginateDescribeDBEngineVersions === "function");
assert(typeof paginateDescribeDBInstances === "function");
assert(typeof paginateDescribeDBSubnetGroups === "function");
assert(typeof paginateDescribeEventSubscriptions === "function");
assert(typeof paginateDescribeEvents === "function");
assert(typeof paginateDescribeGlobalClusters === "function");
assert(typeof paginateDescribeOrderableDBInstanceOptions === "function");
assert(typeof paginateDescribePendingMaintenanceActions === "function");
console.log(`DocDB index test passed.`);
