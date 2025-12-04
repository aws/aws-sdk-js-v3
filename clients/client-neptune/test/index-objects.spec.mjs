import {
  AddRoleToDBClusterCommand,
  AddSourceIdentifierToSubscriptionCommand,
  AddTagsToResourceCommand,
  ApplyMethod,
  ApplyPendingMaintenanceActionCommand,
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
  FailoverDBClusterCommand,
  FailoverGlobalClusterCommand,
  FailoverStatus,
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
  PromoteReadReplicaDBClusterCommand,
  RebootDBInstanceCommand,
  RemoveFromGlobalClusterCommand,
  RemoveRoleFromDBClusterCommand,
  RemoveSourceIdentifierFromSubscriptionCommand,
  RemoveTagsFromResourceCommand,
  ResetDBClusterParameterGroupCommand,
  ResetDBParameterGroupCommand,
  RestoreDBClusterFromSnapshotCommand,
  RestoreDBClusterToPointInTimeCommand,
  SourceType,
  StartDBClusterCommand,
  StopDBClusterCommand,
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
