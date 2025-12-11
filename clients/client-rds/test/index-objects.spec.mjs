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
  AuthorizationAlreadyExistsFault,
  AuthorizationNotFoundFault,
  AuthorizationQuotaExceededFault,
  AuthorizeDBSecurityGroupIngressCommand,
  AutomationMode,
  BacktrackDBClusterCommand,
  BackupPolicyNotFoundFault,
  BlueGreenDeploymentAlreadyExistsFault,
  BlueGreenDeploymentNotFoundFault,
  CancelExportTaskCommand,
  CertificateNotFoundFault,
  ClientPasswordAuthType,
  ClusterScalabilityType,
  CopyDBClusterParameterGroupCommand,
  CopyDBClusterSnapshotCommand,
  CopyDBParameterGroupCommand,
  CopyDBSnapshotCommand,
  CopyOptionGroupCommand,
  CreateBlueGreenDeploymentCommand,
  CreateCustomDBEngineVersionCommand,
  CreateCustomDBEngineVersionFault,
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
  CustomAvailabilityZoneNotFoundFault,
  CustomDBEngineVersionAlreadyExistsFault,
  CustomDBEngineVersionNotFoundFault,
  CustomDBEngineVersionQuotaExceededFault,
  CustomEngineVersionStatus,
  DBClusterAlreadyExistsFault,
  DBClusterAutomatedBackupNotFoundFault,
  DBClusterAutomatedBackupQuotaExceededFault,
  DBClusterBacktrackNotFoundFault,
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
  DBInstanceAutomatedBackupNotFoundFault,
  DBInstanceAutomatedBackupQuotaExceededFault,
  DBInstanceNotFoundFault,
  DBInstanceNotReadyFault,
  DBInstanceRoleAlreadyExistsFault,
  DBInstanceRoleNotFoundFault,
  DBInstanceRoleQuotaExceededFault,
  DBLogFileNotFoundFault,
  DBParameterGroupAlreadyExistsFault,
  DBParameterGroupNotFoundFault,
  DBParameterGroupQuotaExceededFault,
  DBProxyAlreadyExistsFault,
  DBProxyEndpointAlreadyExistsFault,
  DBProxyEndpointNotFoundFault,
  DBProxyEndpointQuotaExceededFault,
  DBProxyEndpointStatus,
  DBProxyEndpointTargetRole,
  DBProxyNotFoundFault,
  DBProxyQuotaExceededFault,
  DBProxyStatus,
  DBProxyTargetAlreadyRegisteredFault,
  DBProxyTargetGroupNotFoundFault,
  DBProxyTargetNotFoundFault,
  DBSecurityGroupAlreadyExistsFault,
  DBSecurityGroupNotFoundFault,
  DBSecurityGroupNotSupportedFault,
  DBSecurityGroupQuotaExceededFault,
  DBShardGroupAlreadyExistsFault,
  DBShardGroupNotFoundFault,
  DBSnapshotAlreadyExistsFault,
  DBSnapshotNotFoundFault,
  DBSnapshotTenantDatabaseNotFoundFault,
  DBSubnetGroupAlreadyExistsFault,
  DBSubnetGroupDoesNotCoverEnoughAZs,
  DBSubnetGroupNotAllowedFault,
  DBSubnetGroupNotFoundFault,
  DBSubnetGroupQuotaExceededFault,
  DBSubnetQuotaExceededFault,
  DBUpgradeDependencyFailureFault,
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
  DomainNotFoundFault,
  DownloadDBLogFilePortionCommand,
  Ec2ImagePropertiesNotSupportedFault,
  EnableHttpEndpointCommand,
  EndpointNetworkType,
  EngineFamily,
  EventSubscriptionQuotaExceededFault,
  ExportSourceType,
  ExportTaskAlreadyExistsFault,
  ExportTaskNotFoundFault,
  FailoverDBClusterCommand,
  FailoverGlobalClusterCommand,
  FailoverStatus,
  GlobalClusterAlreadyExistsFault,
  GlobalClusterMemberSynchronizationStatus,
  GlobalClusterNotFoundFault,
  GlobalClusterQuotaExceededFault,
  IAMAuthMode,
  IamRoleMissingPermissionsFault,
  IamRoleNotFoundFault,
  InstanceQuotaExceededFault,
  InsufficientAvailableIPsInSubnetFault,
  InsufficientDBClusterCapacityFault,
  InsufficientDBInstanceCapacityFault,
  InsufficientStorageClusterCapacityFault,
  IntegrationAlreadyExistsFault,
  IntegrationConflictOperationFault,
  IntegrationNotFoundFault,
  IntegrationQuotaExceededFault,
  IntegrationStatus,
  InvalidBlueGreenDeploymentStateFault,
  InvalidCustomDBEngineVersionStateFault,
  InvalidDBClusterAutomatedBackupStateFault,
  InvalidDBClusterCapacityFault,
  InvalidDBClusterEndpointStateFault,
  InvalidDBClusterSnapshotStateFault,
  InvalidDBClusterStateFault,
  InvalidDBInstanceAutomatedBackupStateFault,
  InvalidDBInstanceStateFault,
  InvalidDBParameterGroupStateFault,
  InvalidDBProxyEndpointStateFault,
  InvalidDBProxyStateFault,
  InvalidDBSecurityGroupStateFault,
  InvalidDBShardGroupStateFault,
  InvalidDBSnapshotStateFault,
  InvalidDBSubnetGroupFault,
  InvalidDBSubnetGroupStateFault,
  InvalidDBSubnetStateFault,
  InvalidEventSubscriptionStateFault,
  InvalidExportOnlyFault,
  InvalidExportSourceStateFault,
  InvalidExportTaskStateFault,
  InvalidGlobalClusterStateFault,
  InvalidIntegrationStateFault,
  InvalidOptionGroupStateFault,
  InvalidResourceStateFault,
  InvalidRestoreFault,
  InvalidS3BucketFault,
  InvalidSubnet,
  InvalidVPCNetworkStateFault,
  KMSKeyNotAccessibleFault,
  LifecycleSupportName,
  LimitlessDatabaseStatus,
  ListTagsForResourceCommand,
  LocalWriteForwardingStatus,
  MasterUserAuthenticationType,
  MaxDBShardGroupLimitReached,
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
  NetworkTypeNotSupported,
  OptionGroupAlreadyExistsFault,
  OptionGroupNotFoundFault,
  OptionGroupQuotaExceededFault,
  PointInTimeRestoreNotEnabledFault,
  PromoteReadReplicaCommand,
  PromoteReadReplicaDBClusterCommand,
  ProvisionedIopsNotAvailableInAZFault,
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
  ReservedDBInstanceAlreadyExistsFault,
  ReservedDBInstanceNotFoundFault,
  ReservedDBInstanceQuotaExceededFault,
  ReservedDBInstancesOfferingNotFoundFault,
  ResetDBClusterParameterGroupCommand,
  ResetDBParameterGroupCommand,
  ResourceNotFoundFault,
  RestoreDBClusterFromS3Command,
  RestoreDBClusterFromSnapshotCommand,
  RestoreDBClusterToPointInTimeCommand,
  RestoreDBInstanceFromDBSnapshotCommand,
  RestoreDBInstanceFromS3Command,
  RestoreDBInstanceToPointInTimeCommand,
  RevokeDBSecurityGroupIngressCommand,
  SNSInvalidTopicFault,
  SNSNoAuthorizationFault,
  SNSTopicArnNotFoundFault,
  SharedSnapshotQuotaExceededFault,
  SnapshotQuotaExceededFault,
  SourceClusterNotSupportedFault,
  SourceDatabaseNotSupportedFault,
  SourceNotFoundFault,
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
  StorageQuotaExceededFault,
  StorageTypeNotAvailableFault,
  StorageTypeNotSupportedFault,
  SubnetAlreadyInUse,
  SubscriptionAlreadyExistFault,
  SubscriptionCategoryNotFoundFault,
  SubscriptionNotFoundFault,
  SwitchoverBlueGreenDeploymentCommand,
  SwitchoverGlobalClusterCommand,
  SwitchoverReadReplicaCommand,
  TargetConnectionNetworkType,
  TargetHealthReason,
  TargetRole,
  TargetState,
  TargetType,
  TenantDatabaseAlreadyExistsFault,
  TenantDatabaseNotFoundFault,
  TenantDatabaseQuotaExceededFault,
  UnsupportedDBEngineVersionFault,
  UpgradeRolloutOrder,
  VpcEncryptionControlViolationException,
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
assert(AuthorizationAlreadyExistsFault.prototype instanceof RDSServiceException);
assert(AuthorizationNotFoundFault.prototype instanceof RDSServiceException);
assert(AuthorizationQuotaExceededFault.prototype instanceof RDSServiceException);
assert(BackupPolicyNotFoundFault.prototype instanceof RDSServiceException);
assert(BlueGreenDeploymentAlreadyExistsFault.prototype instanceof RDSServiceException);
assert(BlueGreenDeploymentNotFoundFault.prototype instanceof RDSServiceException);
assert(CertificateNotFoundFault.prototype instanceof RDSServiceException);
assert(CreateCustomDBEngineVersionFault.prototype instanceof RDSServiceException);
assert(CustomAvailabilityZoneNotFoundFault.prototype instanceof RDSServiceException);
assert(CustomDBEngineVersionAlreadyExistsFault.prototype instanceof RDSServiceException);
assert(CustomDBEngineVersionNotFoundFault.prototype instanceof RDSServiceException);
assert(CustomDBEngineVersionQuotaExceededFault.prototype instanceof RDSServiceException);
assert(DBClusterAlreadyExistsFault.prototype instanceof RDSServiceException);
assert(DBClusterAutomatedBackupNotFoundFault.prototype instanceof RDSServiceException);
assert(DBClusterAutomatedBackupQuotaExceededFault.prototype instanceof RDSServiceException);
assert(DBClusterBacktrackNotFoundFault.prototype instanceof RDSServiceException);
assert(DBClusterEndpointAlreadyExistsFault.prototype instanceof RDSServiceException);
assert(DBClusterEndpointNotFoundFault.prototype instanceof RDSServiceException);
assert(DBClusterEndpointQuotaExceededFault.prototype instanceof RDSServiceException);
assert(DBClusterNotFoundFault.prototype instanceof RDSServiceException);
assert(DBClusterParameterGroupNotFoundFault.prototype instanceof RDSServiceException);
assert(DBClusterQuotaExceededFault.prototype instanceof RDSServiceException);
assert(DBClusterRoleAlreadyExistsFault.prototype instanceof RDSServiceException);
assert(DBClusterRoleNotFoundFault.prototype instanceof RDSServiceException);
assert(DBClusterRoleQuotaExceededFault.prototype instanceof RDSServiceException);
assert(DBClusterSnapshotAlreadyExistsFault.prototype instanceof RDSServiceException);
assert(DBClusterSnapshotNotFoundFault.prototype instanceof RDSServiceException);
assert(DBInstanceAlreadyExistsFault.prototype instanceof RDSServiceException);
assert(DBInstanceAutomatedBackupNotFoundFault.prototype instanceof RDSServiceException);
assert(DBInstanceAutomatedBackupQuotaExceededFault.prototype instanceof RDSServiceException);
assert(DBInstanceNotFoundFault.prototype instanceof RDSServiceException);
assert(DBInstanceNotReadyFault.prototype instanceof RDSServiceException);
assert(DBInstanceRoleAlreadyExistsFault.prototype instanceof RDSServiceException);
assert(DBInstanceRoleNotFoundFault.prototype instanceof RDSServiceException);
assert(DBInstanceRoleQuotaExceededFault.prototype instanceof RDSServiceException);
assert(DBLogFileNotFoundFault.prototype instanceof RDSServiceException);
assert(DBParameterGroupAlreadyExistsFault.prototype instanceof RDSServiceException);
assert(DBParameterGroupNotFoundFault.prototype instanceof RDSServiceException);
assert(DBParameterGroupQuotaExceededFault.prototype instanceof RDSServiceException);
assert(DBProxyAlreadyExistsFault.prototype instanceof RDSServiceException);
assert(DBProxyEndpointAlreadyExistsFault.prototype instanceof RDSServiceException);
assert(DBProxyEndpointNotFoundFault.prototype instanceof RDSServiceException);
assert(DBProxyEndpointQuotaExceededFault.prototype instanceof RDSServiceException);
assert(DBProxyNotFoundFault.prototype instanceof RDSServiceException);
assert(DBProxyQuotaExceededFault.prototype instanceof RDSServiceException);
assert(DBProxyTargetAlreadyRegisteredFault.prototype instanceof RDSServiceException);
assert(DBProxyTargetGroupNotFoundFault.prototype instanceof RDSServiceException);
assert(DBProxyTargetNotFoundFault.prototype instanceof RDSServiceException);
assert(DBSecurityGroupAlreadyExistsFault.prototype instanceof RDSServiceException);
assert(DBSecurityGroupNotFoundFault.prototype instanceof RDSServiceException);
assert(DBSecurityGroupNotSupportedFault.prototype instanceof RDSServiceException);
assert(DBSecurityGroupQuotaExceededFault.prototype instanceof RDSServiceException);
assert(DBShardGroupAlreadyExistsFault.prototype instanceof RDSServiceException);
assert(DBShardGroupNotFoundFault.prototype instanceof RDSServiceException);
assert(DBSnapshotAlreadyExistsFault.prototype instanceof RDSServiceException);
assert(DBSnapshotNotFoundFault.prototype instanceof RDSServiceException);
assert(DBSnapshotTenantDatabaseNotFoundFault.prototype instanceof RDSServiceException);
assert(DBSubnetGroupAlreadyExistsFault.prototype instanceof RDSServiceException);
assert(DBSubnetGroupDoesNotCoverEnoughAZs.prototype instanceof RDSServiceException);
assert(DBSubnetGroupNotAllowedFault.prototype instanceof RDSServiceException);
assert(DBSubnetGroupNotFoundFault.prototype instanceof RDSServiceException);
assert(DBSubnetGroupQuotaExceededFault.prototype instanceof RDSServiceException);
assert(DBSubnetQuotaExceededFault.prototype instanceof RDSServiceException);
assert(DBUpgradeDependencyFailureFault.prototype instanceof RDSServiceException);
assert(DomainNotFoundFault.prototype instanceof RDSServiceException);
assert(Ec2ImagePropertiesNotSupportedFault.prototype instanceof RDSServiceException);
assert(EventSubscriptionQuotaExceededFault.prototype instanceof RDSServiceException);
assert(ExportTaskAlreadyExistsFault.prototype instanceof RDSServiceException);
assert(ExportTaskNotFoundFault.prototype instanceof RDSServiceException);
assert(GlobalClusterAlreadyExistsFault.prototype instanceof RDSServiceException);
assert(GlobalClusterNotFoundFault.prototype instanceof RDSServiceException);
assert(GlobalClusterQuotaExceededFault.prototype instanceof RDSServiceException);
assert(IamRoleMissingPermissionsFault.prototype instanceof RDSServiceException);
assert(IamRoleNotFoundFault.prototype instanceof RDSServiceException);
assert(InstanceQuotaExceededFault.prototype instanceof RDSServiceException);
assert(InsufficientAvailableIPsInSubnetFault.prototype instanceof RDSServiceException);
assert(InsufficientDBClusterCapacityFault.prototype instanceof RDSServiceException);
assert(InsufficientDBInstanceCapacityFault.prototype instanceof RDSServiceException);
assert(InsufficientStorageClusterCapacityFault.prototype instanceof RDSServiceException);
assert(IntegrationAlreadyExistsFault.prototype instanceof RDSServiceException);
assert(IntegrationConflictOperationFault.prototype instanceof RDSServiceException);
assert(IntegrationNotFoundFault.prototype instanceof RDSServiceException);
assert(IntegrationQuotaExceededFault.prototype instanceof RDSServiceException);
assert(InvalidBlueGreenDeploymentStateFault.prototype instanceof RDSServiceException);
assert(InvalidCustomDBEngineVersionStateFault.prototype instanceof RDSServiceException);
assert(InvalidDBClusterAutomatedBackupStateFault.prototype instanceof RDSServiceException);
assert(InvalidDBClusterCapacityFault.prototype instanceof RDSServiceException);
assert(InvalidDBClusterEndpointStateFault.prototype instanceof RDSServiceException);
assert(InvalidDBClusterSnapshotStateFault.prototype instanceof RDSServiceException);
assert(InvalidDBClusterStateFault.prototype instanceof RDSServiceException);
assert(InvalidDBInstanceAutomatedBackupStateFault.prototype instanceof RDSServiceException);
assert(InvalidDBInstanceStateFault.prototype instanceof RDSServiceException);
assert(InvalidDBParameterGroupStateFault.prototype instanceof RDSServiceException);
assert(InvalidDBProxyEndpointStateFault.prototype instanceof RDSServiceException);
assert(InvalidDBProxyStateFault.prototype instanceof RDSServiceException);
assert(InvalidDBSecurityGroupStateFault.prototype instanceof RDSServiceException);
assert(InvalidDBShardGroupStateFault.prototype instanceof RDSServiceException);
assert(InvalidDBSnapshotStateFault.prototype instanceof RDSServiceException);
assert(InvalidDBSubnetGroupFault.prototype instanceof RDSServiceException);
assert(InvalidDBSubnetGroupStateFault.prototype instanceof RDSServiceException);
assert(InvalidDBSubnetStateFault.prototype instanceof RDSServiceException);
assert(InvalidEventSubscriptionStateFault.prototype instanceof RDSServiceException);
assert(InvalidExportOnlyFault.prototype instanceof RDSServiceException);
assert(InvalidExportSourceStateFault.prototype instanceof RDSServiceException);
assert(InvalidExportTaskStateFault.prototype instanceof RDSServiceException);
assert(InvalidGlobalClusterStateFault.prototype instanceof RDSServiceException);
assert(InvalidIntegrationStateFault.prototype instanceof RDSServiceException);
assert(InvalidOptionGroupStateFault.prototype instanceof RDSServiceException);
assert(InvalidResourceStateFault.prototype instanceof RDSServiceException);
assert(InvalidRestoreFault.prototype instanceof RDSServiceException);
assert(InvalidS3BucketFault.prototype instanceof RDSServiceException);
assert(InvalidSubnet.prototype instanceof RDSServiceException);
assert(InvalidVPCNetworkStateFault.prototype instanceof RDSServiceException);
assert(KMSKeyNotAccessibleFault.prototype instanceof RDSServiceException);
assert(MaxDBShardGroupLimitReached.prototype instanceof RDSServiceException);
assert(NetworkTypeNotSupported.prototype instanceof RDSServiceException);
assert(OptionGroupAlreadyExistsFault.prototype instanceof RDSServiceException);
assert(OptionGroupNotFoundFault.prototype instanceof RDSServiceException);
assert(OptionGroupQuotaExceededFault.prototype instanceof RDSServiceException);
assert(PointInTimeRestoreNotEnabledFault.prototype instanceof RDSServiceException);
assert(ProvisionedIopsNotAvailableInAZFault.prototype instanceof RDSServiceException);
assert(ReservedDBInstanceAlreadyExistsFault.prototype instanceof RDSServiceException);
assert(ReservedDBInstanceNotFoundFault.prototype instanceof RDSServiceException);
assert(ReservedDBInstanceQuotaExceededFault.prototype instanceof RDSServiceException);
assert(ReservedDBInstancesOfferingNotFoundFault.prototype instanceof RDSServiceException);
assert(ResourceNotFoundFault.prototype instanceof RDSServiceException);
assert(SharedSnapshotQuotaExceededFault.prototype instanceof RDSServiceException);
assert(SnapshotQuotaExceededFault.prototype instanceof RDSServiceException);
assert(SNSInvalidTopicFault.prototype instanceof RDSServiceException);
assert(SNSNoAuthorizationFault.prototype instanceof RDSServiceException);
assert(SNSTopicArnNotFoundFault.prototype instanceof RDSServiceException);
assert(SourceClusterNotSupportedFault.prototype instanceof RDSServiceException);
assert(SourceDatabaseNotSupportedFault.prototype instanceof RDSServiceException);
assert(SourceNotFoundFault.prototype instanceof RDSServiceException);
assert(StorageQuotaExceededFault.prototype instanceof RDSServiceException);
assert(StorageTypeNotAvailableFault.prototype instanceof RDSServiceException);
assert(StorageTypeNotSupportedFault.prototype instanceof RDSServiceException);
assert(SubnetAlreadyInUse.prototype instanceof RDSServiceException);
assert(SubscriptionAlreadyExistFault.prototype instanceof RDSServiceException);
assert(SubscriptionCategoryNotFoundFault.prototype instanceof RDSServiceException);
assert(SubscriptionNotFoundFault.prototype instanceof RDSServiceException);
assert(TenantDatabaseAlreadyExistsFault.prototype instanceof RDSServiceException);
assert(TenantDatabaseNotFoundFault.prototype instanceof RDSServiceException);
assert(TenantDatabaseQuotaExceededFault.prototype instanceof RDSServiceException);
assert(UnsupportedDBEngineVersionFault.prototype instanceof RDSServiceException);
assert(VpcEncryptionControlViolationException.prototype instanceof RDSServiceException);
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
