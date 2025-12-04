import {
  ActivityStreamMode,
  ActivityStreamPolicyStatus,
  ActivityStreamStatus,
  AddRoleToDBClusterCommand,
  AddRoleToDBInstanceCommand,
  AddSourceIdentifierToSubscriptionCommand,
  AddTagsToResourceCommand,
  ApplyMethod,
  ApplyPendingMaintenanceActionCommand,
  AuditPolicyState,
  AuthScheme,
  AuthorizeDBSecurityGroupIngressCommand,
  AutomationMode,
  BacktrackDBClusterCommand,
  CancelExportTaskCommand,
  ClientPasswordAuthType,
  ClusterScalabilityType,
  CopyDBClusterParameterGroupCommand,
  CopyDBClusterSnapshotCommand,
  CopyDBParameterGroupCommand,
  CopyDBSnapshotCommand,
  CopyOptionGroupCommand,
  CreateBlueGreenDeploymentCommand,
  CreateCustomDBEngineVersionCommand,
  CreateDBClusterCommand,
  CreateDBClusterEndpointCommand,
  CreateDBClusterParameterGroupCommand,
  CreateDBClusterSnapshotCommand,
  CreateDBInstanceCommand,
  CreateDBInstanceReadReplicaCommand,
  CreateDBParameterGroupCommand,
  CreateDBProxyCommand,
  CreateDBProxyEndpointCommand,
  CreateDBSecurityGroupCommand,
  CreateDBShardGroupCommand,
  CreateDBSnapshotCommand,
  CreateDBSubnetGroupCommand,
  CreateEventSubscriptionCommand,
  CreateGlobalClusterCommand,
  CreateIntegrationCommand,
  CreateOptionGroupCommand,
  CreateTenantDatabaseCommand,
  CustomEngineVersionStatus,
  DBProxyEndpointStatus,
  DBProxyEndpointTargetRole,
  DBProxyStatus,
  DatabaseInsightsMode,
  DefaultAuthScheme,
  DeleteBlueGreenDeploymentCommand,
  DeleteCustomDBEngineVersionCommand,
  DeleteDBClusterAutomatedBackupCommand,
  DeleteDBClusterCommand,
  DeleteDBClusterEndpointCommand,
  DeleteDBClusterParameterGroupCommand,
  DeleteDBClusterSnapshotCommand,
  DeleteDBInstanceAutomatedBackupCommand,
  DeleteDBInstanceCommand,
  DeleteDBParameterGroupCommand,
  DeleteDBProxyCommand,
  DeleteDBProxyEndpointCommand,
  DeleteDBSecurityGroupCommand,
  DeleteDBShardGroupCommand,
  DeleteDBSnapshotCommand,
  DeleteDBSubnetGroupCommand,
  DeleteEventSubscriptionCommand,
  DeleteGlobalClusterCommand,
  DeleteIntegrationCommand,
  DeleteOptionGroupCommand,
  DeleteTenantDatabaseCommand,
  DeregisterDBProxyTargetsCommand,
  DescribeAccountAttributesCommand,
  DescribeBlueGreenDeploymentsCommand,
  DescribeCertificatesCommand,
  DescribeDBClusterAutomatedBackupsCommand,
  DescribeDBClusterBacktracksCommand,
  DescribeDBClusterEndpointsCommand,
  DescribeDBClusterParameterGroupsCommand,
  DescribeDBClusterParametersCommand,
  DescribeDBClusterSnapshotAttributesCommand,
  DescribeDBClusterSnapshotsCommand,
  DescribeDBClustersCommand,
  DescribeDBEngineVersionsCommand,
  DescribeDBInstanceAutomatedBackupsCommand,
  DescribeDBInstancesCommand,
  DescribeDBLogFilesCommand,
  DescribeDBMajorEngineVersionsCommand,
  DescribeDBParameterGroupsCommand,
  DescribeDBParametersCommand,
  DescribeDBProxiesCommand,
  DescribeDBProxyEndpointsCommand,
  DescribeDBProxyTargetGroupsCommand,
  DescribeDBProxyTargetsCommand,
  DescribeDBRecommendationsCommand,
  DescribeDBSecurityGroupsCommand,
  DescribeDBShardGroupsCommand,
  DescribeDBSnapshotAttributesCommand,
  DescribeDBSnapshotTenantDatabasesCommand,
  DescribeDBSnapshotsCommand,
  DescribeDBSubnetGroupsCommand,
  DescribeEngineDefaultClusterParametersCommand,
  DescribeEngineDefaultParametersCommand,
  DescribeEventCategoriesCommand,
  DescribeEventSubscriptionsCommand,
  DescribeEventsCommand,
  DescribeExportTasksCommand,
  DescribeGlobalClustersCommand,
  DescribeIntegrationsCommand,
  DescribeOptionGroupOptionsCommand,
  DescribeOptionGroupsCommand,
  DescribeOrderableDBInstanceOptionsCommand,
  DescribePendingMaintenanceActionsCommand,
  DescribeReservedDBInstancesCommand,
  DescribeReservedDBInstancesOfferingsCommand,
  DescribeSourceRegionsCommand,
  DescribeTenantDatabasesCommand,
  DescribeValidDBInstanceModificationsCommand,
  DisableHttpEndpointCommand,
  DownloadDBLogFilePortionCommand,
  EnableHttpEndpointCommand,
  EndpointNetworkType,
  EngineFamily,
  ExportSourceType,
  FailoverDBClusterCommand,
  FailoverGlobalClusterCommand,
  FailoverStatus,
  GlobalClusterMemberSynchronizationStatus,
  IAMAuthMode,
  IntegrationStatus,
  LifecycleSupportName,
  LimitlessDatabaseStatus,
  ListTagsForResourceCommand,
  LocalWriteForwardingStatus,
  MasterUserAuthenticationType,
  ModifyActivityStreamCommand,
  ModifyCertificatesCommand,
  ModifyCurrentDBClusterCapacityCommand,
  ModifyCustomDBEngineVersionCommand,
  ModifyDBClusterCommand,
  ModifyDBClusterEndpointCommand,
  ModifyDBClusterParameterGroupCommand,
  ModifyDBClusterSnapshotAttributeCommand,
  ModifyDBInstanceCommand,
  ModifyDBParameterGroupCommand,
  ModifyDBProxyCommand,
  ModifyDBProxyEndpointCommand,
  ModifyDBProxyTargetGroupCommand,
  ModifyDBRecommendationCommand,
  ModifyDBShardGroupCommand,
  ModifyDBSnapshotAttributeCommand,
  ModifyDBSnapshotCommand,
  ModifyDBSubnetGroupCommand,
  ModifyEventSubscriptionCommand,
  ModifyGlobalClusterCommand,
  ModifyIntegrationCommand,
  ModifyOptionGroupCommand,
  ModifyTenantDatabaseCommand,
  PromoteReadReplicaCommand,
  PromoteReadReplicaDBClusterCommand,
  PurchaseReservedDBInstancesOfferingCommand,
  RDS,
  RDSClient,
  RDSServiceException,
  RebootDBClusterCommand,
  RebootDBInstanceCommand,
  RebootDBShardGroupCommand,
  RegisterDBProxyTargetsCommand,
  RemoveFromGlobalClusterCommand,
  RemoveRoleFromDBClusterCommand,
  RemoveRoleFromDBInstanceCommand,
  RemoveSourceIdentifierFromSubscriptionCommand,
  RemoveTagsFromResourceCommand,
  ReplicaMode,
  ResetDBClusterParameterGroupCommand,
  ResetDBParameterGroupCommand,
  RestoreDBClusterFromS3Command,
  RestoreDBClusterFromSnapshotCommand,
  RestoreDBClusterToPointInTimeCommand,
  RestoreDBInstanceFromDBSnapshotCommand,
  RestoreDBInstanceFromS3Command,
  RestoreDBInstanceToPointInTimeCommand,
  RevokeDBSecurityGroupIngressCommand,
  SourceType,
  StartActivityStreamCommand,
  StartDBClusterCommand,
  StartDBInstanceAutomatedBackupsReplicationCommand,
  StartDBInstanceCommand,
  StartExportTaskCommand,
  StopActivityStreamCommand,
  StopDBClusterCommand,
  StopDBInstanceAutomatedBackupsReplicationCommand,
  StopDBInstanceCommand,
  SwitchoverBlueGreenDeploymentCommand,
  SwitchoverGlobalClusterCommand,
  SwitchoverReadReplicaCommand,
  TargetConnectionNetworkType,
  TargetHealthReason,
  TargetRole,
  TargetState,
  TargetType,
  UpgradeRolloutOrder,
  WriteForwardingStatus,
  paginateDescribeBlueGreenDeployments,
  paginateDescribeCertificates,
  paginateDescribeDBClusterAutomatedBackups,
  paginateDescribeDBClusterBacktracks,
  paginateDescribeDBClusterEndpoints,
  paginateDescribeDBClusterParameterGroups,
  paginateDescribeDBClusterParameters,
  paginateDescribeDBClusterSnapshots,
  paginateDescribeDBClusters,
  paginateDescribeDBEngineVersions,
  paginateDescribeDBInstanceAutomatedBackups,
  paginateDescribeDBInstances,
  paginateDescribeDBLogFiles,
  paginateDescribeDBMajorEngineVersions,
  paginateDescribeDBParameterGroups,
  paginateDescribeDBParameters,
  paginateDescribeDBProxies,
  paginateDescribeDBProxyEndpoints,
  paginateDescribeDBProxyTargetGroups,
  paginateDescribeDBProxyTargets,
  paginateDescribeDBRecommendations,
  paginateDescribeDBSecurityGroups,
  paginateDescribeDBSnapshotTenantDatabases,
  paginateDescribeDBSnapshots,
  paginateDescribeDBSubnetGroups,
  paginateDescribeEngineDefaultParameters,
  paginateDescribeEventSubscriptions,
  paginateDescribeEvents,
  paginateDescribeExportTasks,
  paginateDescribeGlobalClusters,
  paginateDescribeIntegrations,
  paginateDescribeOptionGroupOptions,
  paginateDescribeOptionGroups,
  paginateDescribeOrderableDBInstanceOptions,
  paginateDescribePendingMaintenanceActions,
  paginateDescribeReservedDBInstances,
  paginateDescribeReservedDBInstancesOfferings,
  paginateDescribeSourceRegions,
  paginateDescribeTenantDatabases,
  paginateDownloadDBLogFilePortion,
  waitForDBClusterAvailable,
  waitForDBClusterDeleted,
  waitForDBClusterSnapshotAvailable,
  waitForDBClusterSnapshotDeleted,
  waitForDBInstanceAvailable,
  waitForDBInstanceDeleted,
  waitForDBSnapshotAvailable,
  waitForDBSnapshotDeleted,
  waitForTenantDatabaseAvailable,
  waitForTenantDatabaseDeleted,
  waitUntilDBClusterAvailable,
  waitUntilDBClusterDeleted,
  waitUntilDBClusterSnapshotAvailable,
  waitUntilDBClusterSnapshotDeleted,
  waitUntilDBInstanceAvailable,
  waitUntilDBInstanceDeleted,
  waitUntilDBSnapshotAvailable,
  waitUntilDBSnapshotDeleted,
  waitUntilTenantDatabaseAvailable,
  waitUntilTenantDatabaseDeleted,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof RDSClient === "function");
assert(typeof RDS === "function");
// commands
assert(typeof AddRoleToDBClusterCommand === "function");
assert(typeof AddRoleToDBInstanceCommand === "function");
assert(typeof AddSourceIdentifierToSubscriptionCommand === "function");
assert(typeof AddTagsToResourceCommand === "function");
assert(typeof ApplyPendingMaintenanceActionCommand === "function");
assert(typeof AuthorizeDBSecurityGroupIngressCommand === "function");
assert(typeof BacktrackDBClusterCommand === "function");
assert(typeof CancelExportTaskCommand === "function");
assert(typeof CopyDBClusterParameterGroupCommand === "function");
assert(typeof CopyDBClusterSnapshotCommand === "function");
assert(typeof CopyDBParameterGroupCommand === "function");
assert(typeof CopyDBSnapshotCommand === "function");
assert(typeof CopyOptionGroupCommand === "function");
assert(typeof CreateBlueGreenDeploymentCommand === "function");
assert(typeof CreateCustomDBEngineVersionCommand === "function");
assert(typeof CreateDBClusterCommand === "function");
assert(typeof CreateDBClusterEndpointCommand === "function");
assert(typeof CreateDBClusterParameterGroupCommand === "function");
assert(typeof CreateDBClusterSnapshotCommand === "function");
assert(typeof CreateDBInstanceCommand === "function");
assert(typeof CreateDBInstanceReadReplicaCommand === "function");
assert(typeof CreateDBParameterGroupCommand === "function");
assert(typeof CreateDBProxyCommand === "function");
assert(typeof CreateDBProxyEndpointCommand === "function");
assert(typeof CreateDBSecurityGroupCommand === "function");
assert(typeof CreateDBShardGroupCommand === "function");
assert(typeof CreateDBSnapshotCommand === "function");
assert(typeof CreateDBSubnetGroupCommand === "function");
assert(typeof CreateEventSubscriptionCommand === "function");
assert(typeof CreateGlobalClusterCommand === "function");
assert(typeof CreateIntegrationCommand === "function");
assert(typeof CreateOptionGroupCommand === "function");
assert(typeof CreateTenantDatabaseCommand === "function");
assert(typeof DeleteBlueGreenDeploymentCommand === "function");
assert(typeof DeleteCustomDBEngineVersionCommand === "function");
assert(typeof DeleteDBClusterCommand === "function");
assert(typeof DeleteDBClusterAutomatedBackupCommand === "function");
assert(typeof DeleteDBClusterEndpointCommand === "function");
assert(typeof DeleteDBClusterParameterGroupCommand === "function");
assert(typeof DeleteDBClusterSnapshotCommand === "function");
assert(typeof DeleteDBInstanceCommand === "function");
assert(typeof DeleteDBInstanceAutomatedBackupCommand === "function");
assert(typeof DeleteDBParameterGroupCommand === "function");
assert(typeof DeleteDBProxyCommand === "function");
assert(typeof DeleteDBProxyEndpointCommand === "function");
assert(typeof DeleteDBSecurityGroupCommand === "function");
assert(typeof DeleteDBShardGroupCommand === "function");
assert(typeof DeleteDBSnapshotCommand === "function");
assert(typeof DeleteDBSubnetGroupCommand === "function");
assert(typeof DeleteEventSubscriptionCommand === "function");
assert(typeof DeleteGlobalClusterCommand === "function");
assert(typeof DeleteIntegrationCommand === "function");
assert(typeof DeleteOptionGroupCommand === "function");
assert(typeof DeleteTenantDatabaseCommand === "function");
assert(typeof DeregisterDBProxyTargetsCommand === "function");
assert(typeof DescribeAccountAttributesCommand === "function");
assert(typeof DescribeBlueGreenDeploymentsCommand === "function");
assert(typeof DescribeCertificatesCommand === "function");
assert(typeof DescribeDBClusterAutomatedBackupsCommand === "function");
assert(typeof DescribeDBClusterBacktracksCommand === "function");
assert(typeof DescribeDBClusterEndpointsCommand === "function");
assert(typeof DescribeDBClusterParameterGroupsCommand === "function");
assert(typeof DescribeDBClusterParametersCommand === "function");
assert(typeof DescribeDBClustersCommand === "function");
assert(typeof DescribeDBClusterSnapshotAttributesCommand === "function");
assert(typeof DescribeDBClusterSnapshotsCommand === "function");
assert(typeof DescribeDBEngineVersionsCommand === "function");
assert(typeof DescribeDBInstanceAutomatedBackupsCommand === "function");
assert(typeof DescribeDBInstancesCommand === "function");
assert(typeof DescribeDBLogFilesCommand === "function");
assert(typeof DescribeDBMajorEngineVersionsCommand === "function");
assert(typeof DescribeDBParameterGroupsCommand === "function");
assert(typeof DescribeDBParametersCommand === "function");
assert(typeof DescribeDBProxiesCommand === "function");
assert(typeof DescribeDBProxyEndpointsCommand === "function");
assert(typeof DescribeDBProxyTargetGroupsCommand === "function");
assert(typeof DescribeDBProxyTargetsCommand === "function");
assert(typeof DescribeDBRecommendationsCommand === "function");
assert(typeof DescribeDBSecurityGroupsCommand === "function");
assert(typeof DescribeDBShardGroupsCommand === "function");
assert(typeof DescribeDBSnapshotAttributesCommand === "function");
assert(typeof DescribeDBSnapshotsCommand === "function");
assert(typeof DescribeDBSnapshotTenantDatabasesCommand === "function");
assert(typeof DescribeDBSubnetGroupsCommand === "function");
assert(typeof DescribeEngineDefaultClusterParametersCommand === "function");
assert(typeof DescribeEngineDefaultParametersCommand === "function");
assert(typeof DescribeEventCategoriesCommand === "function");
assert(typeof DescribeEventsCommand === "function");
assert(typeof DescribeEventSubscriptionsCommand === "function");
assert(typeof DescribeExportTasksCommand === "function");
assert(typeof DescribeGlobalClustersCommand === "function");
assert(typeof DescribeIntegrationsCommand === "function");
assert(typeof DescribeOptionGroupOptionsCommand === "function");
assert(typeof DescribeOptionGroupsCommand === "function");
assert(typeof DescribeOrderableDBInstanceOptionsCommand === "function");
assert(typeof DescribePendingMaintenanceActionsCommand === "function");
assert(typeof DescribeReservedDBInstancesCommand === "function");
assert(typeof DescribeReservedDBInstancesOfferingsCommand === "function");
assert(typeof DescribeSourceRegionsCommand === "function");
assert(typeof DescribeTenantDatabasesCommand === "function");
assert(typeof DescribeValidDBInstanceModificationsCommand === "function");
assert(typeof DisableHttpEndpointCommand === "function");
assert(typeof DownloadDBLogFilePortionCommand === "function");
assert(typeof EnableHttpEndpointCommand === "function");
assert(typeof FailoverDBClusterCommand === "function");
assert(typeof FailoverGlobalClusterCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ModifyActivityStreamCommand === "function");
assert(typeof ModifyCertificatesCommand === "function");
assert(typeof ModifyCurrentDBClusterCapacityCommand === "function");
assert(typeof ModifyCustomDBEngineVersionCommand === "function");
assert(typeof ModifyDBClusterCommand === "function");
assert(typeof ModifyDBClusterEndpointCommand === "function");
assert(typeof ModifyDBClusterParameterGroupCommand === "function");
assert(typeof ModifyDBClusterSnapshotAttributeCommand === "function");
assert(typeof ModifyDBInstanceCommand === "function");
assert(typeof ModifyDBParameterGroupCommand === "function");
assert(typeof ModifyDBProxyCommand === "function");
assert(typeof ModifyDBProxyEndpointCommand === "function");
assert(typeof ModifyDBProxyTargetGroupCommand === "function");
assert(typeof ModifyDBRecommendationCommand === "function");
assert(typeof ModifyDBShardGroupCommand === "function");
assert(typeof ModifyDBSnapshotCommand === "function");
assert(typeof ModifyDBSnapshotAttributeCommand === "function");
assert(typeof ModifyDBSubnetGroupCommand === "function");
assert(typeof ModifyEventSubscriptionCommand === "function");
assert(typeof ModifyGlobalClusterCommand === "function");
assert(typeof ModifyIntegrationCommand === "function");
assert(typeof ModifyOptionGroupCommand === "function");
assert(typeof ModifyTenantDatabaseCommand === "function");
assert(typeof PromoteReadReplicaCommand === "function");
assert(typeof PromoteReadReplicaDBClusterCommand === "function");
assert(typeof PurchaseReservedDBInstancesOfferingCommand === "function");
assert(typeof RebootDBClusterCommand === "function");
assert(typeof RebootDBInstanceCommand === "function");
assert(typeof RebootDBShardGroupCommand === "function");
assert(typeof RegisterDBProxyTargetsCommand === "function");
assert(typeof RemoveFromGlobalClusterCommand === "function");
assert(typeof RemoveRoleFromDBClusterCommand === "function");
assert(typeof RemoveRoleFromDBInstanceCommand === "function");
assert(typeof RemoveSourceIdentifierFromSubscriptionCommand === "function");
assert(typeof RemoveTagsFromResourceCommand === "function");
assert(typeof ResetDBClusterParameterGroupCommand === "function");
assert(typeof ResetDBParameterGroupCommand === "function");
assert(typeof RestoreDBClusterFromS3Command === "function");
assert(typeof RestoreDBClusterFromSnapshotCommand === "function");
assert(typeof RestoreDBClusterToPointInTimeCommand === "function");
assert(typeof RestoreDBInstanceFromDBSnapshotCommand === "function");
assert(typeof RestoreDBInstanceFromS3Command === "function");
assert(typeof RestoreDBInstanceToPointInTimeCommand === "function");
assert(typeof RevokeDBSecurityGroupIngressCommand === "function");
assert(typeof StartActivityStreamCommand === "function");
assert(typeof StartDBClusterCommand === "function");
assert(typeof StartDBInstanceCommand === "function");
assert(typeof StartDBInstanceAutomatedBackupsReplicationCommand === "function");
assert(typeof StartExportTaskCommand === "function");
assert(typeof StopActivityStreamCommand === "function");
assert(typeof StopDBClusterCommand === "function");
assert(typeof StopDBInstanceCommand === "function");
assert(typeof StopDBInstanceAutomatedBackupsReplicationCommand === "function");
assert(typeof SwitchoverBlueGreenDeploymentCommand === "function");
assert(typeof SwitchoverGlobalClusterCommand === "function");
assert(typeof SwitchoverReadReplicaCommand === "function");
// enums
assert(typeof ActivityStreamMode === "object");
assert(typeof ActivityStreamPolicyStatus === "object");
assert(typeof ActivityStreamStatus === "object");
assert(typeof ApplyMethod === "object");
assert(typeof AuditPolicyState === "object");
assert(typeof AuthScheme === "object");
assert(typeof AutomationMode === "object");
assert(typeof ClientPasswordAuthType === "object");
assert(typeof ClusterScalabilityType === "object");
assert(typeof CustomEngineVersionStatus === "object");
assert(typeof DatabaseInsightsMode === "object");
assert(typeof DBProxyEndpointStatus === "object");
assert(typeof DBProxyEndpointTargetRole === "object");
assert(typeof DBProxyStatus === "object");
assert(typeof DefaultAuthScheme === "object");
assert(typeof EndpointNetworkType === "object");
assert(typeof EngineFamily === "object");
assert(typeof ExportSourceType === "object");
assert(typeof FailoverStatus === "object");
assert(typeof GlobalClusterMemberSynchronizationStatus === "object");
assert(typeof IAMAuthMode === "object");
assert(typeof IntegrationStatus === "object");
assert(typeof LifecycleSupportName === "object");
assert(typeof LimitlessDatabaseStatus === "object");
assert(typeof LocalWriteForwardingStatus === "object");
assert(typeof MasterUserAuthenticationType === "object");
assert(typeof ReplicaMode === "object");
assert(typeof SourceType === "object");
assert(typeof TargetConnectionNetworkType === "object");
assert(typeof TargetHealthReason === "object");
assert(typeof TargetRole === "object");
assert(typeof TargetState === "object");
assert(typeof TargetType === "object");
assert(typeof UpgradeRolloutOrder === "object");
assert(typeof WriteForwardingStatus === "object");
// errors
assert(RDSServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForDBClusterAvailable === "function");
assert(typeof waitForDBClusterDeleted === "function");
assert(typeof waitForDBClusterSnapshotAvailable === "function");
assert(typeof waitForDBClusterSnapshotDeleted === "function");
assert(typeof waitForDBInstanceAvailable === "function");
assert(typeof waitForDBInstanceDeleted === "function");
assert(typeof waitForDBSnapshotAvailable === "function");
assert(typeof waitForDBSnapshotDeleted === "function");
assert(typeof waitForTenantDatabaseAvailable === "function");
assert(typeof waitForTenantDatabaseDeleted === "function");
assert(typeof waitUntilDBClusterAvailable === "function");
assert(typeof waitUntilDBClusterDeleted === "function");
assert(typeof waitUntilDBClusterSnapshotAvailable === "function");
assert(typeof waitUntilDBClusterSnapshotDeleted === "function");
assert(typeof waitUntilDBInstanceAvailable === "function");
assert(typeof waitUntilDBInstanceDeleted === "function");
assert(typeof waitUntilDBSnapshotAvailable === "function");
assert(typeof waitUntilDBSnapshotDeleted === "function");
assert(typeof waitUntilTenantDatabaseAvailable === "function");
assert(typeof waitUntilTenantDatabaseDeleted === "function");
// paginators
assert(typeof paginateDescribeBlueGreenDeployments === "function");
assert(typeof paginateDescribeCertificates === "function");
assert(typeof paginateDescribeDBClusterAutomatedBackups === "function");
assert(typeof paginateDescribeDBClusterBacktracks === "function");
assert(typeof paginateDescribeDBClusterEndpoints === "function");
assert(typeof paginateDescribeDBClusterParameterGroups === "function");
assert(typeof paginateDescribeDBClusterParameters === "function");
assert(typeof paginateDescribeDBClusterSnapshots === "function");
assert(typeof paginateDescribeDBClusters === "function");
assert(typeof paginateDescribeDBEngineVersions === "function");
assert(typeof paginateDescribeDBInstanceAutomatedBackups === "function");
assert(typeof paginateDescribeDBInstances === "function");
assert(typeof paginateDescribeDBLogFiles === "function");
assert(typeof paginateDescribeDBMajorEngineVersions === "function");
assert(typeof paginateDescribeDBParameterGroups === "function");
assert(typeof paginateDescribeDBParameters === "function");
assert(typeof paginateDescribeDBProxies === "function");
assert(typeof paginateDescribeDBProxyEndpoints === "function");
assert(typeof paginateDescribeDBProxyTargetGroups === "function");
assert(typeof paginateDescribeDBProxyTargets === "function");
assert(typeof paginateDescribeDBRecommendations === "function");
assert(typeof paginateDescribeDBSecurityGroups === "function");
assert(typeof paginateDescribeDBSnapshotTenantDatabases === "function");
assert(typeof paginateDescribeDBSnapshots === "function");
assert(typeof paginateDescribeDBSubnetGroups === "function");
assert(typeof paginateDescribeEngineDefaultParameters === "function");
assert(typeof paginateDescribeEventSubscriptions === "function");
assert(typeof paginateDescribeEvents === "function");
assert(typeof paginateDescribeExportTasks === "function");
assert(typeof paginateDescribeGlobalClusters === "function");
assert(typeof paginateDescribeIntegrations === "function");
assert(typeof paginateDescribeOptionGroupOptions === "function");
assert(typeof paginateDescribeOptionGroups === "function");
assert(typeof paginateDescribeOrderableDBInstanceOptions === "function");
assert(typeof paginateDescribePendingMaintenanceActions === "function");
assert(typeof paginateDescribeReservedDBInstances === "function");
assert(typeof paginateDescribeReservedDBInstancesOfferings === "function");
assert(typeof paginateDescribeSourceRegions === "function");
assert(typeof paginateDescribeTenantDatabases === "function");
assert(typeof paginateDownloadDBLogFilePortion === "function");
console.log(`RDS index test passed.`);
