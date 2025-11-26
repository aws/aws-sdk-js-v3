import {
  AddSourceIdentifierToSubscriptionCommand,
  AddTagsToResourceCommand,
  ApplyMethod,
  ApplyPendingMaintenanceActionCommand,
  CopyDBClusterParameterGroupCommand,
  CopyDBClusterSnapshotCommand,
  CreateDBClusterCommand,
  CreateDBClusterParameterGroupCommand,
  CreateDBClusterSnapshotCommand,
  CreateDBInstanceCommand,
  CreateDBSubnetGroupCommand,
  CreateEventSubscriptionCommand,
  CreateGlobalClusterCommand,
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
  FailoverDBClusterCommand,
  FailoverGlobalClusterCommand,
  FailoverStatus,
  GlobalClusterMemberSynchronizationStatus,
  ListTagsForResourceCommand,
  ModifyDBClusterCommand,
  ModifyDBClusterParameterGroupCommand,
  ModifyDBClusterSnapshotAttributeCommand,
  ModifyDBInstanceCommand,
  ModifyDBSubnetGroupCommand,
  ModifyEventSubscriptionCommand,
  ModifyGlobalClusterCommand,
  RebootDBInstanceCommand,
  RemoveFromGlobalClusterCommand,
  RemoveSourceIdentifierFromSubscriptionCommand,
  RemoveTagsFromResourceCommand,
  ResetDBClusterParameterGroupCommand,
  RestoreDBClusterFromSnapshotCommand,
  RestoreDBClusterToPointInTimeCommand,
  SourceType,
  StartDBClusterCommand,
  StopDBClusterCommand,
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
assert(typeof DocDBClient === "function")
assert(typeof DocDB === "function")
// commands
assert(typeof AddSourceIdentifierToSubscriptionCommand === "function")
assert(typeof AddTagsToResourceCommand === "function")
assert(typeof ApplyPendingMaintenanceActionCommand === "function")
assert(typeof CopyDBClusterParameterGroupCommand === "function")
assert(typeof CopyDBClusterSnapshotCommand === "function")
assert(typeof CreateDBClusterCommand === "function")
assert(typeof CreateDBClusterParameterGroupCommand === "function")
assert(typeof CreateDBClusterSnapshotCommand === "function")
assert(typeof CreateDBInstanceCommand === "function")
assert(typeof CreateDBSubnetGroupCommand === "function")
assert(typeof CreateEventSubscriptionCommand === "function")
assert(typeof CreateGlobalClusterCommand === "function")
assert(typeof DeleteDBClusterCommand === "function")
assert(typeof DeleteDBClusterParameterGroupCommand === "function")
assert(typeof DeleteDBClusterSnapshotCommand === "function")
assert(typeof DeleteDBInstanceCommand === "function")
assert(typeof DeleteDBSubnetGroupCommand === "function")
assert(typeof DeleteEventSubscriptionCommand === "function")
assert(typeof DeleteGlobalClusterCommand === "function")
assert(typeof DescribeCertificatesCommand === "function")
assert(typeof DescribeDBClusterParameterGroupsCommand === "function")
assert(typeof DescribeDBClusterParametersCommand === "function")
assert(typeof DescribeDBClustersCommand === "function")
assert(typeof DescribeDBClusterSnapshotAttributesCommand === "function")
assert(typeof DescribeDBClusterSnapshotsCommand === "function")
assert(typeof DescribeDBEngineVersionsCommand === "function")
assert(typeof DescribeDBInstancesCommand === "function")
assert(typeof DescribeDBSubnetGroupsCommand === "function")
assert(typeof DescribeEngineDefaultClusterParametersCommand === "function")
assert(typeof DescribeEventCategoriesCommand === "function")
assert(typeof DescribeEventsCommand === "function")
assert(typeof DescribeEventSubscriptionsCommand === "function")
assert(typeof DescribeGlobalClustersCommand === "function")
assert(typeof DescribeOrderableDBInstanceOptionsCommand === "function")
assert(typeof DescribePendingMaintenanceActionsCommand === "function")
assert(typeof FailoverDBClusterCommand === "function")
assert(typeof FailoverGlobalClusterCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof ModifyDBClusterCommand === "function")
assert(typeof ModifyDBClusterParameterGroupCommand === "function")
assert(typeof ModifyDBClusterSnapshotAttributeCommand === "function")
assert(typeof ModifyDBInstanceCommand === "function")
assert(typeof ModifyDBSubnetGroupCommand === "function")
assert(typeof ModifyEventSubscriptionCommand === "function")
assert(typeof ModifyGlobalClusterCommand === "function")
assert(typeof RebootDBInstanceCommand === "function")
assert(typeof RemoveFromGlobalClusterCommand === "function")
assert(typeof RemoveSourceIdentifierFromSubscriptionCommand === "function")
assert(typeof RemoveTagsFromResourceCommand === "function")
assert(typeof ResetDBClusterParameterGroupCommand === "function")
assert(typeof RestoreDBClusterFromSnapshotCommand === "function")
assert(typeof RestoreDBClusterToPointInTimeCommand === "function")
assert(typeof StartDBClusterCommand === "function")
assert(typeof StopDBClusterCommand === "function")
assert(typeof SwitchoverGlobalClusterCommand === "function")
// enums
assert(typeof ApplyMethod === "object");
assert(typeof FailoverStatus === "object");
assert(typeof GlobalClusterMemberSynchronizationStatus === "object");
assert(typeof SourceType === "object");
// errors
assert(DocDBServiceException.prototype instanceof Error)
// waiters
assert(typeof waitForDBInstanceAvailable === "function")
assert(typeof waitForDBInstanceDeleted === "function")
assert(typeof waitUntilDBInstanceAvailable === "function")
assert(typeof waitUntilDBInstanceDeleted === "function")
// paginators
assert(typeof paginateDescribeCertificates === "function")
assert(typeof paginateDescribeDBClusterParameterGroups === "function")
assert(typeof paginateDescribeDBClusterParameters === "function")
assert(typeof paginateDescribeDBClusterSnapshots === "function")
assert(typeof paginateDescribeDBClusters === "function")
assert(typeof paginateDescribeDBEngineVersions === "function")
assert(typeof paginateDescribeDBInstances === "function")
assert(typeof paginateDescribeDBSubnetGroups === "function")
assert(typeof paginateDescribeEventSubscriptions === "function")
assert(typeof paginateDescribeEvents === "function")
assert(typeof paginateDescribeGlobalClusters === "function")
assert(typeof paginateDescribeOrderableDBInstanceOptions === "function")
assert(typeof paginateDescribePendingMaintenanceActions === "function")
console.log(`DocDB index test passed.`);
