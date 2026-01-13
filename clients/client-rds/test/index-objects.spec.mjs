import {
  AccountAttributesMessage$,
  AccountQuota$,
  ActivityStreamMode,
  ActivityStreamPolicyStatus,
  ActivityStreamStatus,
  AdditionalStorageVolume$,
  AdditionalStorageVolumeOutput$,
  AddRoleToDBCluster$,
  AddRoleToDBClusterCommand,
  AddRoleToDBClusterMessage$,
  AddRoleToDBInstance$,
  AddRoleToDBInstanceCommand,
  AddRoleToDBInstanceMessage$,
  AddSourceIdentifierToSubscription$,
  AddSourceIdentifierToSubscriptionCommand,
  AddSourceIdentifierToSubscriptionMessage$,
  AddSourceIdentifierToSubscriptionResult$,
  AddTagsToResource$,
  AddTagsToResourceCommand,
  AddTagsToResourceMessage$,
  ApplyMethod,
  ApplyPendingMaintenanceAction$,
  ApplyPendingMaintenanceActionCommand,
  ApplyPendingMaintenanceActionMessage$,
  ApplyPendingMaintenanceActionResult$,
  AuditPolicyState,
  AuthorizationAlreadyExistsFault,
  AuthorizationAlreadyExistsFault$,
  AuthorizationNotFoundFault,
  AuthorizationNotFoundFault$,
  AuthorizationQuotaExceededFault,
  AuthorizationQuotaExceededFault$,
  AuthorizeDBSecurityGroupIngress$,
  AuthorizeDBSecurityGroupIngressCommand,
  AuthorizeDBSecurityGroupIngressMessage$,
  AuthorizeDBSecurityGroupIngressResult$,
  AuthScheme,
  AutomationMode,
  AvailabilityZone$,
  AvailableAdditionalStorageVolumesOption$,
  AvailableProcessorFeature$,
  BacktrackDBCluster$,
  BacktrackDBClusterCommand,
  BacktrackDBClusterMessage$,
  BackupPolicyNotFoundFault,
  BackupPolicyNotFoundFault$,
  BlueGreenDeployment$,
  BlueGreenDeploymentAlreadyExistsFault,
  BlueGreenDeploymentAlreadyExistsFault$,
  BlueGreenDeploymentNotFoundFault,
  BlueGreenDeploymentNotFoundFault$,
  BlueGreenDeploymentTask$,
  CancelExportTask$,
  CancelExportTaskCommand,
  CancelExportTaskMessage$,
  Certificate$,
  CertificateDetails$,
  CertificateMessage$,
  CertificateNotFoundFault,
  CertificateNotFoundFault$,
  CharacterSet$,
  ClientPasswordAuthType,
  CloudwatchLogsExportConfiguration$,
  ClusterPendingModifiedValues$,
  ClusterScalabilityType,
  ConnectionPoolConfiguration$,
  ConnectionPoolConfigurationInfo$,
  ContextAttribute$,
  CopyDBClusterParameterGroup$,
  CopyDBClusterParameterGroupCommand,
  CopyDBClusterParameterGroupMessage$,
  CopyDBClusterParameterGroupResult$,
  CopyDBClusterSnapshot$,
  CopyDBClusterSnapshotCommand,
  CopyDBClusterSnapshotMessage$,
  CopyDBClusterSnapshotResult$,
  CopyDBParameterGroup$,
  CopyDBParameterGroupCommand,
  CopyDBParameterGroupMessage$,
  CopyDBParameterGroupResult$,
  CopyDBSnapshot$,
  CopyDBSnapshotCommand,
  CopyDBSnapshotMessage$,
  CopyDBSnapshotResult$,
  CopyOptionGroup$,
  CopyOptionGroupCommand,
  CopyOptionGroupMessage$,
  CopyOptionGroupResult$,
  CreateBlueGreenDeployment$,
  CreateBlueGreenDeploymentCommand,
  CreateBlueGreenDeploymentRequest$,
  CreateBlueGreenDeploymentResponse$,
  CreateCustomDBEngineVersion$,
  CreateCustomDBEngineVersionCommand,
  CreateCustomDBEngineVersionFault,
  CreateCustomDBEngineVersionFault$,
  CreateCustomDBEngineVersionMessage$,
  CreateDBCluster$,
  CreateDBClusterCommand,
  CreateDBClusterEndpoint$,
  CreateDBClusterEndpointCommand,
  CreateDBClusterEndpointMessage$,
  CreateDBClusterMessage$,
  CreateDBClusterParameterGroup$,
  CreateDBClusterParameterGroupCommand,
  CreateDBClusterParameterGroupMessage$,
  CreateDBClusterParameterGroupResult$,
  CreateDBClusterResult$,
  CreateDBClusterSnapshot$,
  CreateDBClusterSnapshotCommand,
  CreateDBClusterSnapshotMessage$,
  CreateDBClusterSnapshotResult$,
  CreateDBInstance$,
  CreateDBInstanceCommand,
  CreateDBInstanceMessage$,
  CreateDBInstanceReadReplica$,
  CreateDBInstanceReadReplicaCommand,
  CreateDBInstanceReadReplicaMessage$,
  CreateDBInstanceReadReplicaResult$,
  CreateDBInstanceResult$,
  CreateDBParameterGroup$,
  CreateDBParameterGroupCommand,
  CreateDBParameterGroupMessage$,
  CreateDBParameterGroupResult$,
  CreateDBProxy$,
  CreateDBProxyCommand,
  CreateDBProxyEndpoint$,
  CreateDBProxyEndpointCommand,
  CreateDBProxyEndpointRequest$,
  CreateDBProxyEndpointResponse$,
  CreateDBProxyRequest$,
  CreateDBProxyResponse$,
  CreateDBSecurityGroup$,
  CreateDBSecurityGroupCommand,
  CreateDBSecurityGroupMessage$,
  CreateDBSecurityGroupResult$,
  CreateDBShardGroup$,
  CreateDBShardGroupCommand,
  CreateDBShardGroupMessage$,
  CreateDBSnapshot$,
  CreateDBSnapshotCommand,
  CreateDBSnapshotMessage$,
  CreateDBSnapshotResult$,
  CreateDBSubnetGroup$,
  CreateDBSubnetGroupCommand,
  CreateDBSubnetGroupMessage$,
  CreateDBSubnetGroupResult$,
  CreateEventSubscription$,
  CreateEventSubscriptionCommand,
  CreateEventSubscriptionMessage$,
  CreateEventSubscriptionResult$,
  CreateGlobalCluster$,
  CreateGlobalClusterCommand,
  CreateGlobalClusterMessage$,
  CreateGlobalClusterResult$,
  CreateIntegration$,
  CreateIntegrationCommand,
  CreateIntegrationMessage$,
  CreateOptionGroup$,
  CreateOptionGroupCommand,
  CreateOptionGroupMessage$,
  CreateOptionGroupResult$,
  CreateTenantDatabase$,
  CreateTenantDatabaseCommand,
  CreateTenantDatabaseMessage$,
  CreateTenantDatabaseResult$,
  CustomAvailabilityZoneNotFoundFault,
  CustomAvailabilityZoneNotFoundFault$,
  CustomDBEngineVersionAlreadyExistsFault,
  CustomDBEngineVersionAlreadyExistsFault$,
  CustomDBEngineVersionAMI$,
  CustomDBEngineVersionNotFoundFault,
  CustomDBEngineVersionNotFoundFault$,
  CustomDBEngineVersionQuotaExceededFault,
  CustomDBEngineVersionQuotaExceededFault$,
  CustomEngineVersionStatus,
  DatabaseInsightsMode,
  DBCluster$,
  DBClusterAlreadyExistsFault,
  DBClusterAlreadyExistsFault$,
  DBClusterAutomatedBackup$,
  DBClusterAutomatedBackupMessage$,
  DBClusterAutomatedBackupNotFoundFault,
  DBClusterAutomatedBackupNotFoundFault$,
  DBClusterAutomatedBackupQuotaExceededFault,
  DBClusterAutomatedBackupQuotaExceededFault$,
  DBClusterBacktrack$,
  DBClusterBacktrackMessage$,
  DBClusterBacktrackNotFoundFault,
  DBClusterBacktrackNotFoundFault$,
  DBClusterCapacityInfo$,
  DBClusterEndpoint$,
  DBClusterEndpointAlreadyExistsFault,
  DBClusterEndpointAlreadyExistsFault$,
  DBClusterEndpointMessage$,
  DBClusterEndpointNotFoundFault,
  DBClusterEndpointNotFoundFault$,
  DBClusterEndpointQuotaExceededFault,
  DBClusterEndpointQuotaExceededFault$,
  DBClusterMember$,
  DBClusterMessage$,
  DBClusterNotFoundFault,
  DBClusterNotFoundFault$,
  DBClusterOptionGroupStatus$,
  DBClusterParameterGroup$,
  DBClusterParameterGroupDetails$,
  DBClusterParameterGroupNameMessage$,
  DBClusterParameterGroupNotFoundFault,
  DBClusterParameterGroupNotFoundFault$,
  DBClusterParameterGroupsMessage$,
  DBClusterQuotaExceededFault,
  DBClusterQuotaExceededFault$,
  DBClusterRole$,
  DBClusterRoleAlreadyExistsFault,
  DBClusterRoleAlreadyExistsFault$,
  DBClusterRoleNotFoundFault,
  DBClusterRoleNotFoundFault$,
  DBClusterRoleQuotaExceededFault,
  DBClusterRoleQuotaExceededFault$,
  DBClusterSnapshot$,
  DBClusterSnapshotAlreadyExistsFault,
  DBClusterSnapshotAlreadyExistsFault$,
  DBClusterSnapshotAttribute$,
  DBClusterSnapshotAttributesResult$,
  DBClusterSnapshotMessage$,
  DBClusterSnapshotNotFoundFault,
  DBClusterSnapshotNotFoundFault$,
  DBClusterStatusInfo$,
  DBEngineVersion$,
  DBEngineVersionMessage$,
  DBInstance$,
  DBInstanceAlreadyExistsFault,
  DBInstanceAlreadyExistsFault$,
  DBInstanceAutomatedBackup$,
  DBInstanceAutomatedBackupMessage$,
  DBInstanceAutomatedBackupNotFoundFault,
  DBInstanceAutomatedBackupNotFoundFault$,
  DBInstanceAutomatedBackupQuotaExceededFault,
  DBInstanceAutomatedBackupQuotaExceededFault$,
  DBInstanceAutomatedBackupsReplication$,
  DBInstanceMessage$,
  DBInstanceNotFoundFault,
  DBInstanceNotFoundFault$,
  DBInstanceNotReadyFault,
  DBInstanceNotReadyFault$,
  DBInstanceRole$,
  DBInstanceRoleAlreadyExistsFault,
  DBInstanceRoleAlreadyExistsFault$,
  DBInstanceRoleNotFoundFault,
  DBInstanceRoleNotFoundFault$,
  DBInstanceRoleQuotaExceededFault,
  DBInstanceRoleQuotaExceededFault$,
  DBInstanceStatusInfo$,
  DBLogFileNotFoundFault,
  DBLogFileNotFoundFault$,
  DBMajorEngineVersion$,
  DBParameterGroup$,
  DBParameterGroupAlreadyExistsFault,
  DBParameterGroupAlreadyExistsFault$,
  DBParameterGroupDetails$,
  DBParameterGroupNameMessage$,
  DBParameterGroupNotFoundFault,
  DBParameterGroupNotFoundFault$,
  DBParameterGroupQuotaExceededFault,
  DBParameterGroupQuotaExceededFault$,
  DBParameterGroupsMessage$,
  DBParameterGroupStatus$,
  DBProxy$,
  DBProxyAlreadyExistsFault,
  DBProxyAlreadyExistsFault$,
  DBProxyEndpoint$,
  DBProxyEndpointAlreadyExistsFault,
  DBProxyEndpointAlreadyExistsFault$,
  DBProxyEndpointNotFoundFault,
  DBProxyEndpointNotFoundFault$,
  DBProxyEndpointQuotaExceededFault,
  DBProxyEndpointQuotaExceededFault$,
  DBProxyEndpointStatus,
  DBProxyEndpointTargetRole,
  DBProxyNotFoundFault,
  DBProxyNotFoundFault$,
  DBProxyQuotaExceededFault,
  DBProxyQuotaExceededFault$,
  DBProxyStatus,
  DBProxyTarget$,
  DBProxyTargetAlreadyRegisteredFault,
  DBProxyTargetAlreadyRegisteredFault$,
  DBProxyTargetGroup$,
  DBProxyTargetGroupNotFoundFault,
  DBProxyTargetGroupNotFoundFault$,
  DBProxyTargetNotFoundFault,
  DBProxyTargetNotFoundFault$,
  DBRecommendation$,
  DBRecommendationMessage$,
  DBRecommendationsMessage$,
  DBSecurityGroup$,
  DBSecurityGroupAlreadyExistsFault,
  DBSecurityGroupAlreadyExistsFault$,
  DBSecurityGroupMembership$,
  DBSecurityGroupMessage$,
  DBSecurityGroupNotFoundFault,
  DBSecurityGroupNotFoundFault$,
  DBSecurityGroupNotSupportedFault,
  DBSecurityGroupNotSupportedFault$,
  DBSecurityGroupQuotaExceededFault,
  DBSecurityGroupQuotaExceededFault$,
  DBShardGroup$,
  DBShardGroupAlreadyExistsFault,
  DBShardGroupAlreadyExistsFault$,
  DBShardGroupNotFoundFault,
  DBShardGroupNotFoundFault$,
  DBSnapshot$,
  DBSnapshotAlreadyExistsFault,
  DBSnapshotAlreadyExistsFault$,
  DBSnapshotAttribute$,
  DBSnapshotAttributesResult$,
  DBSnapshotMessage$,
  DBSnapshotNotFoundFault,
  DBSnapshotNotFoundFault$,
  DBSnapshotTenantDatabase$,
  DBSnapshotTenantDatabaseNotFoundFault,
  DBSnapshotTenantDatabaseNotFoundFault$,
  DBSnapshotTenantDatabasesMessage$,
  DBSubnetGroup$,
  DBSubnetGroupAlreadyExistsFault,
  DBSubnetGroupAlreadyExistsFault$,
  DBSubnetGroupDoesNotCoverEnoughAZs,
  DBSubnetGroupDoesNotCoverEnoughAZs$,
  DBSubnetGroupMessage$,
  DBSubnetGroupNotAllowedFault,
  DBSubnetGroupNotAllowedFault$,
  DBSubnetGroupNotFoundFault,
  DBSubnetGroupNotFoundFault$,
  DBSubnetGroupQuotaExceededFault,
  DBSubnetGroupQuotaExceededFault$,
  DBSubnetQuotaExceededFault,
  DBSubnetQuotaExceededFault$,
  DBUpgradeDependencyFailureFault,
  DBUpgradeDependencyFailureFault$,
  DefaultAuthScheme,
  DeleteBlueGreenDeployment$,
  DeleteBlueGreenDeploymentCommand,
  DeleteBlueGreenDeploymentRequest$,
  DeleteBlueGreenDeploymentResponse$,
  DeleteCustomDBEngineVersion$,
  DeleteCustomDBEngineVersionCommand,
  DeleteCustomDBEngineVersionMessage$,
  DeleteDBCluster$,
  DeleteDBClusterAutomatedBackup$,
  DeleteDBClusterAutomatedBackupCommand,
  DeleteDBClusterAutomatedBackupMessage$,
  DeleteDBClusterAutomatedBackupResult$,
  DeleteDBClusterCommand,
  DeleteDBClusterEndpoint$,
  DeleteDBClusterEndpointCommand,
  DeleteDBClusterEndpointMessage$,
  DeleteDBClusterMessage$,
  DeleteDBClusterParameterGroup$,
  DeleteDBClusterParameterGroupCommand,
  DeleteDBClusterParameterGroupMessage$,
  DeleteDBClusterResult$,
  DeleteDBClusterSnapshot$,
  DeleteDBClusterSnapshotCommand,
  DeleteDBClusterSnapshotMessage$,
  DeleteDBClusterSnapshotResult$,
  DeleteDBInstance$,
  DeleteDBInstanceAutomatedBackup$,
  DeleteDBInstanceAutomatedBackupCommand,
  DeleteDBInstanceAutomatedBackupMessage$,
  DeleteDBInstanceAutomatedBackupResult$,
  DeleteDBInstanceCommand,
  DeleteDBInstanceMessage$,
  DeleteDBInstanceResult$,
  DeleteDBParameterGroup$,
  DeleteDBParameterGroupCommand,
  DeleteDBParameterGroupMessage$,
  DeleteDBProxy$,
  DeleteDBProxyCommand,
  DeleteDBProxyEndpoint$,
  DeleteDBProxyEndpointCommand,
  DeleteDBProxyEndpointRequest$,
  DeleteDBProxyEndpointResponse$,
  DeleteDBProxyRequest$,
  DeleteDBProxyResponse$,
  DeleteDBSecurityGroup$,
  DeleteDBSecurityGroupCommand,
  DeleteDBSecurityGroupMessage$,
  DeleteDBShardGroup$,
  DeleteDBShardGroupCommand,
  DeleteDBShardGroupMessage$,
  DeleteDBSnapshot$,
  DeleteDBSnapshotCommand,
  DeleteDBSnapshotMessage$,
  DeleteDBSnapshotResult$,
  DeleteDBSubnetGroup$,
  DeleteDBSubnetGroupCommand,
  DeleteDBSubnetGroupMessage$,
  DeleteEventSubscription$,
  DeleteEventSubscriptionCommand,
  DeleteEventSubscriptionMessage$,
  DeleteEventSubscriptionResult$,
  DeleteGlobalCluster$,
  DeleteGlobalClusterCommand,
  DeleteGlobalClusterMessage$,
  DeleteGlobalClusterResult$,
  DeleteIntegration$,
  DeleteIntegrationCommand,
  DeleteIntegrationMessage$,
  DeleteOptionGroup$,
  DeleteOptionGroupCommand,
  DeleteOptionGroupMessage$,
  DeleteTenantDatabase$,
  DeleteTenantDatabaseCommand,
  DeleteTenantDatabaseMessage$,
  DeleteTenantDatabaseResult$,
  DeregisterDBProxyTargets$,
  DeregisterDBProxyTargetsCommand,
  DeregisterDBProxyTargetsRequest$,
  DeregisterDBProxyTargetsResponse$,
  DescribeAccountAttributes$,
  DescribeAccountAttributesCommand,
  DescribeAccountAttributesMessage$,
  DescribeBlueGreenDeployments$,
  DescribeBlueGreenDeploymentsCommand,
  DescribeBlueGreenDeploymentsRequest$,
  DescribeBlueGreenDeploymentsResponse$,
  DescribeCertificates$,
  DescribeCertificatesCommand,
  DescribeCertificatesMessage$,
  DescribeDBClusterAutomatedBackups$,
  DescribeDBClusterAutomatedBackupsCommand,
  DescribeDBClusterAutomatedBackupsMessage$,
  DescribeDBClusterBacktracks$,
  DescribeDBClusterBacktracksCommand,
  DescribeDBClusterBacktracksMessage$,
  DescribeDBClusterEndpoints$,
  DescribeDBClusterEndpointsCommand,
  DescribeDBClusterEndpointsMessage$,
  DescribeDBClusterParameterGroups$,
  DescribeDBClusterParameterGroupsCommand,
  DescribeDBClusterParameterGroupsMessage$,
  DescribeDBClusterParameters$,
  DescribeDBClusterParametersCommand,
  DescribeDBClusterParametersMessage$,
  DescribeDBClusters$,
  DescribeDBClustersCommand,
  DescribeDBClustersMessage$,
  DescribeDBClusterSnapshotAttributes$,
  DescribeDBClusterSnapshotAttributesCommand,
  DescribeDBClusterSnapshotAttributesMessage$,
  DescribeDBClusterSnapshotAttributesResult$,
  DescribeDBClusterSnapshots$,
  DescribeDBClusterSnapshotsCommand,
  DescribeDBClusterSnapshotsMessage$,
  DescribeDBEngineVersions$,
  DescribeDBEngineVersionsCommand,
  DescribeDBEngineVersionsMessage$,
  DescribeDBInstanceAutomatedBackups$,
  DescribeDBInstanceAutomatedBackupsCommand,
  DescribeDBInstanceAutomatedBackupsMessage$,
  DescribeDBInstances$,
  DescribeDBInstancesCommand,
  DescribeDBInstancesMessage$,
  DescribeDBLogFiles$,
  DescribeDBLogFilesCommand,
  DescribeDBLogFilesDetails$,
  DescribeDBLogFilesMessage$,
  DescribeDBLogFilesResponse$,
  DescribeDBMajorEngineVersions$,
  DescribeDBMajorEngineVersionsCommand,
  DescribeDBMajorEngineVersionsRequest$,
  DescribeDBMajorEngineVersionsResponse$,
  DescribeDBParameterGroups$,
  DescribeDBParameterGroupsCommand,
  DescribeDBParameterGroupsMessage$,
  DescribeDBParameters$,
  DescribeDBParametersCommand,
  DescribeDBParametersMessage$,
  DescribeDBProxies$,
  DescribeDBProxiesCommand,
  DescribeDBProxiesRequest$,
  DescribeDBProxiesResponse$,
  DescribeDBProxyEndpoints$,
  DescribeDBProxyEndpointsCommand,
  DescribeDBProxyEndpointsRequest$,
  DescribeDBProxyEndpointsResponse$,
  DescribeDBProxyTargetGroups$,
  DescribeDBProxyTargetGroupsCommand,
  DescribeDBProxyTargetGroupsRequest$,
  DescribeDBProxyTargetGroupsResponse$,
  DescribeDBProxyTargets$,
  DescribeDBProxyTargetsCommand,
  DescribeDBProxyTargetsRequest$,
  DescribeDBProxyTargetsResponse$,
  DescribeDBRecommendations$,
  DescribeDBRecommendationsCommand,
  DescribeDBRecommendationsMessage$,
  DescribeDBSecurityGroups$,
  DescribeDBSecurityGroupsCommand,
  DescribeDBSecurityGroupsMessage$,
  DescribeDBShardGroups$,
  DescribeDBShardGroupsCommand,
  DescribeDBShardGroupsMessage$,
  DescribeDBShardGroupsResponse$,
  DescribeDBSnapshotAttributes$,
  DescribeDBSnapshotAttributesCommand,
  DescribeDBSnapshotAttributesMessage$,
  DescribeDBSnapshotAttributesResult$,
  DescribeDBSnapshots$,
  DescribeDBSnapshotsCommand,
  DescribeDBSnapshotsMessage$,
  DescribeDBSnapshotTenantDatabases$,
  DescribeDBSnapshotTenantDatabasesCommand,
  DescribeDBSnapshotTenantDatabasesMessage$,
  DescribeDBSubnetGroups$,
  DescribeDBSubnetGroupsCommand,
  DescribeDBSubnetGroupsMessage$,
  DescribeEngineDefaultClusterParameters$,
  DescribeEngineDefaultClusterParametersCommand,
  DescribeEngineDefaultClusterParametersMessage$,
  DescribeEngineDefaultClusterParametersResult$,
  DescribeEngineDefaultParameters$,
  DescribeEngineDefaultParametersCommand,
  DescribeEngineDefaultParametersMessage$,
  DescribeEngineDefaultParametersResult$,
  DescribeEventCategories$,
  DescribeEventCategoriesCommand,
  DescribeEventCategoriesMessage$,
  DescribeEvents$,
  DescribeEventsCommand,
  DescribeEventsMessage$,
  DescribeEventSubscriptions$,
  DescribeEventSubscriptionsCommand,
  DescribeEventSubscriptionsMessage$,
  DescribeExportTasks$,
  DescribeExportTasksCommand,
  DescribeExportTasksMessage$,
  DescribeGlobalClusters$,
  DescribeGlobalClustersCommand,
  DescribeGlobalClustersMessage$,
  DescribeIntegrations$,
  DescribeIntegrationsCommand,
  DescribeIntegrationsMessage$,
  DescribeIntegrationsResponse$,
  DescribeOptionGroupOptions$,
  DescribeOptionGroupOptionsCommand,
  DescribeOptionGroupOptionsMessage$,
  DescribeOptionGroups$,
  DescribeOptionGroupsCommand,
  DescribeOptionGroupsMessage$,
  DescribeOrderableDBInstanceOptions$,
  DescribeOrderableDBInstanceOptionsCommand,
  DescribeOrderableDBInstanceOptionsMessage$,
  DescribePendingMaintenanceActions$,
  DescribePendingMaintenanceActionsCommand,
  DescribePendingMaintenanceActionsMessage$,
  DescribeReservedDBInstances$,
  DescribeReservedDBInstancesCommand,
  DescribeReservedDBInstancesMessage$,
  DescribeReservedDBInstancesOfferings$,
  DescribeReservedDBInstancesOfferingsCommand,
  DescribeReservedDBInstancesOfferingsMessage$,
  DescribeSourceRegions$,
  DescribeSourceRegionsCommand,
  DescribeSourceRegionsMessage$,
  DescribeTenantDatabases$,
  DescribeTenantDatabasesCommand,
  DescribeTenantDatabasesMessage$,
  DescribeValidDBInstanceModifications$,
  DescribeValidDBInstanceModificationsCommand,
  DescribeValidDBInstanceModificationsMessage$,
  DescribeValidDBInstanceModificationsResult$,
  DisableHttpEndpoint$,
  DisableHttpEndpointCommand,
  DisableHttpEndpointRequest$,
  DisableHttpEndpointResponse$,
  DocLink$,
  DomainMembership$,
  DomainNotFoundFault,
  DomainNotFoundFault$,
  DoubleRange$,
  DownloadDBLogFilePortion$,
  DownloadDBLogFilePortionCommand,
  DownloadDBLogFilePortionDetails$,
  DownloadDBLogFilePortionMessage$,
  Ec2ImagePropertiesNotSupportedFault,
  Ec2ImagePropertiesNotSupportedFault$,
  EC2SecurityGroup$,
  EnableHttpEndpoint$,
  EnableHttpEndpointCommand,
  EnableHttpEndpointRequest$,
  EnableHttpEndpointResponse$,
  Endpoint$,
  EndpointNetworkType,
  EngineDefaults$,
  EngineFamily,
  Event$,
  EventCategoriesMap$,
  EventCategoriesMessage$,
  EventsMessage$,
  EventSubscription$,
  EventSubscriptionQuotaExceededFault,
  EventSubscriptionQuotaExceededFault$,
  EventSubscriptionsMessage$,
  ExportSourceType,
  ExportTask$,
  ExportTaskAlreadyExistsFault,
  ExportTaskAlreadyExistsFault$,
  ExportTaskNotFoundFault,
  ExportTaskNotFoundFault$,
  ExportTasksMessage$,
  FailoverDBCluster$,
  FailoverDBClusterCommand,
  FailoverDBClusterMessage$,
  FailoverDBClusterResult$,
  FailoverGlobalCluster$,
  FailoverGlobalClusterCommand,
  FailoverGlobalClusterMessage$,
  FailoverGlobalClusterResult$,
  FailoverState$,
  FailoverStatus,
  Filter$,
  GlobalCluster$,
  GlobalClusterAlreadyExistsFault,
  GlobalClusterAlreadyExistsFault$,
  GlobalClusterMember$,
  GlobalClusterMemberSynchronizationStatus,
  GlobalClusterNotFoundFault,
  GlobalClusterNotFoundFault$,
  GlobalClusterQuotaExceededFault,
  GlobalClusterQuotaExceededFault$,
  GlobalClustersMessage$,
  IAMAuthMode,
  IamRoleMissingPermissionsFault,
  IamRoleMissingPermissionsFault$,
  IamRoleNotFoundFault,
  IamRoleNotFoundFault$,
  InstanceQuotaExceededFault,
  InstanceQuotaExceededFault$,
  InsufficientAvailableIPsInSubnetFault,
  InsufficientAvailableIPsInSubnetFault$,
  InsufficientDBClusterCapacityFault,
  InsufficientDBClusterCapacityFault$,
  InsufficientDBInstanceCapacityFault,
  InsufficientDBInstanceCapacityFault$,
  InsufficientStorageClusterCapacityFault,
  InsufficientStorageClusterCapacityFault$,
  Integration$,
  IntegrationAlreadyExistsFault,
  IntegrationAlreadyExistsFault$,
  IntegrationConflictOperationFault,
  IntegrationConflictOperationFault$,
  IntegrationError$,
  IntegrationNotFoundFault,
  IntegrationNotFoundFault$,
  IntegrationQuotaExceededFault,
  IntegrationQuotaExceededFault$,
  IntegrationStatus,
  InvalidBlueGreenDeploymentStateFault,
  InvalidBlueGreenDeploymentStateFault$,
  InvalidCustomDBEngineVersionStateFault,
  InvalidCustomDBEngineVersionStateFault$,
  InvalidDBClusterAutomatedBackupStateFault,
  InvalidDBClusterAutomatedBackupStateFault$,
  InvalidDBClusterCapacityFault,
  InvalidDBClusterCapacityFault$,
  InvalidDBClusterEndpointStateFault,
  InvalidDBClusterEndpointStateFault$,
  InvalidDBClusterSnapshotStateFault,
  InvalidDBClusterSnapshotStateFault$,
  InvalidDBClusterStateFault,
  InvalidDBClusterStateFault$,
  InvalidDBInstanceAutomatedBackupStateFault,
  InvalidDBInstanceAutomatedBackupStateFault$,
  InvalidDBInstanceStateFault,
  InvalidDBInstanceStateFault$,
  InvalidDBParameterGroupStateFault,
  InvalidDBParameterGroupStateFault$,
  InvalidDBProxyEndpointStateFault,
  InvalidDBProxyEndpointStateFault$,
  InvalidDBProxyStateFault,
  InvalidDBProxyStateFault$,
  InvalidDBSecurityGroupStateFault,
  InvalidDBSecurityGroupStateFault$,
  InvalidDBShardGroupStateFault,
  InvalidDBShardGroupStateFault$,
  InvalidDBSnapshotStateFault,
  InvalidDBSnapshotStateFault$,
  InvalidDBSubnetGroupFault,
  InvalidDBSubnetGroupFault$,
  InvalidDBSubnetGroupStateFault,
  InvalidDBSubnetGroupStateFault$,
  InvalidDBSubnetStateFault,
  InvalidDBSubnetStateFault$,
  InvalidEventSubscriptionStateFault,
  InvalidEventSubscriptionStateFault$,
  InvalidExportOnlyFault,
  InvalidExportOnlyFault$,
  InvalidExportSourceStateFault,
  InvalidExportSourceStateFault$,
  InvalidExportTaskStateFault,
  InvalidExportTaskStateFault$,
  InvalidGlobalClusterStateFault,
  InvalidGlobalClusterStateFault$,
  InvalidIntegrationStateFault,
  InvalidIntegrationStateFault$,
  InvalidOptionGroupStateFault,
  InvalidOptionGroupStateFault$,
  InvalidResourceStateFault,
  InvalidResourceStateFault$,
  InvalidRestoreFault,
  InvalidRestoreFault$,
  InvalidS3BucketFault,
  InvalidS3BucketFault$,
  InvalidSubnet,
  InvalidSubnet$,
  InvalidVPCNetworkStateFault,
  InvalidVPCNetworkStateFault$,
  IPRange$,
  IssueDetails$,
  KMSKeyNotAccessibleFault,
  KMSKeyNotAccessibleFault$,
  LifecycleSupportName,
  LimitlessDatabase$,
  LimitlessDatabaseStatus,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceMessage$,
  LocalWriteForwardingStatus,
  MasterUserAuthenticationType,
  MasterUserSecret$,
  MaxDBShardGroupLimitReached,
  MaxDBShardGroupLimitReached$,
  Metric$,
  MetricQuery$,
  MetricReference$,
  MinimumEngineVersionPerAllowedValue$,
  ModifyActivityStream$,
  ModifyActivityStreamCommand,
  ModifyActivityStreamRequest$,
  ModifyActivityStreamResponse$,
  ModifyAdditionalStorageVolume$,
  ModifyCertificates$,
  ModifyCertificatesCommand,
  ModifyCertificatesMessage$,
  ModifyCertificatesResult$,
  ModifyCurrentDBClusterCapacity$,
  ModifyCurrentDBClusterCapacityCommand,
  ModifyCurrentDBClusterCapacityMessage$,
  ModifyCustomDBEngineVersion$,
  ModifyCustomDBEngineVersionCommand,
  ModifyCustomDBEngineVersionMessage$,
  ModifyDBCluster$,
  ModifyDBClusterCommand,
  ModifyDBClusterEndpoint$,
  ModifyDBClusterEndpointCommand,
  ModifyDBClusterEndpointMessage$,
  ModifyDBClusterMessage$,
  ModifyDBClusterParameterGroup$,
  ModifyDBClusterParameterGroupCommand,
  ModifyDBClusterParameterGroupMessage$,
  ModifyDBClusterResult$,
  ModifyDBClusterSnapshotAttribute$,
  ModifyDBClusterSnapshotAttributeCommand,
  ModifyDBClusterSnapshotAttributeMessage$,
  ModifyDBClusterSnapshotAttributeResult$,
  ModifyDBInstance$,
  ModifyDBInstanceCommand,
  ModifyDBInstanceMessage$,
  ModifyDBInstanceResult$,
  ModifyDBParameterGroup$,
  ModifyDBParameterGroupCommand,
  ModifyDBParameterGroupMessage$,
  ModifyDBProxy$,
  ModifyDBProxyCommand,
  ModifyDBProxyEndpoint$,
  ModifyDBProxyEndpointCommand,
  ModifyDBProxyEndpointRequest$,
  ModifyDBProxyEndpointResponse$,
  ModifyDBProxyRequest$,
  ModifyDBProxyResponse$,
  ModifyDBProxyTargetGroup$,
  ModifyDBProxyTargetGroupCommand,
  ModifyDBProxyTargetGroupRequest$,
  ModifyDBProxyTargetGroupResponse$,
  ModifyDBRecommendation$,
  ModifyDBRecommendationCommand,
  ModifyDBRecommendationMessage$,
  ModifyDBShardGroup$,
  ModifyDBShardGroupCommand,
  ModifyDBShardGroupMessage$,
  ModifyDBSnapshot$,
  ModifyDBSnapshotAttribute$,
  ModifyDBSnapshotAttributeCommand,
  ModifyDBSnapshotAttributeMessage$,
  ModifyDBSnapshotAttributeResult$,
  ModifyDBSnapshotCommand,
  ModifyDBSnapshotMessage$,
  ModifyDBSnapshotResult$,
  ModifyDBSubnetGroup$,
  ModifyDBSubnetGroupCommand,
  ModifyDBSubnetGroupMessage$,
  ModifyDBSubnetGroupResult$,
  ModifyEventSubscription$,
  ModifyEventSubscriptionCommand,
  ModifyEventSubscriptionMessage$,
  ModifyEventSubscriptionResult$,
  ModifyGlobalCluster$,
  ModifyGlobalClusterCommand,
  ModifyGlobalClusterMessage$,
  ModifyGlobalClusterResult$,
  ModifyIntegration$,
  ModifyIntegrationCommand,
  ModifyIntegrationMessage$,
  ModifyOptionGroup$,
  ModifyOptionGroupCommand,
  ModifyOptionGroupMessage$,
  ModifyOptionGroupResult$,
  ModifyTenantDatabase$,
  ModifyTenantDatabaseCommand,
  ModifyTenantDatabaseMessage$,
  ModifyTenantDatabaseResult$,
  NetworkTypeNotSupported,
  NetworkTypeNotSupported$,
  Option$,
  OptionConfiguration$,
  OptionGroup$,
  OptionGroupAlreadyExistsFault,
  OptionGroupAlreadyExistsFault$,
  OptionGroupMembership$,
  OptionGroupNotFoundFault,
  OptionGroupNotFoundFault$,
  OptionGroupOption$,
  OptionGroupOptionSetting$,
  OptionGroupOptionsMessage$,
  OptionGroupQuotaExceededFault,
  OptionGroupQuotaExceededFault$,
  OptionGroups$,
  OptionSetting$,
  OptionVersion$,
  OrderableDBInstanceOption$,
  OrderableDBInstanceOptionsMessage$,
  Outpost$,
  paginateDescribeBlueGreenDeployments,
  paginateDescribeCertificates,
  paginateDescribeDBClusterAutomatedBackups,
  paginateDescribeDBClusterBacktracks,
  paginateDescribeDBClusterEndpoints,
  paginateDescribeDBClusterParameterGroups,
  paginateDescribeDBClusterParameters,
  paginateDescribeDBClusters,
  paginateDescribeDBClusterSnapshots,
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
  paginateDescribeDBSnapshots,
  paginateDescribeDBSnapshotTenantDatabases,
  paginateDescribeDBSubnetGroups,
  paginateDescribeEngineDefaultParameters,
  paginateDescribeEvents,
  paginateDescribeEventSubscriptions,
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
  Parameter$,
  PendingCloudwatchLogsExports$,
  PendingMaintenanceAction$,
  PendingMaintenanceActionsMessage$,
  PendingModifiedValues$,
  PerformanceInsightsMetricDimensionGroup$,
  PerformanceInsightsMetricQuery$,
  PerformanceIssueDetails$,
  PointInTimeRestoreNotEnabledFault,
  PointInTimeRestoreNotEnabledFault$,
  ProcessorFeature$,
  PromoteReadReplica$,
  PromoteReadReplicaCommand,
  PromoteReadReplicaDBCluster$,
  PromoteReadReplicaDBClusterCommand,
  PromoteReadReplicaDBClusterMessage$,
  PromoteReadReplicaDBClusterResult$,
  PromoteReadReplicaMessage$,
  PromoteReadReplicaResult$,
  ProvisionedIopsNotAvailableInAZFault,
  ProvisionedIopsNotAvailableInAZFault$,
  PurchaseReservedDBInstancesOffering$,
  PurchaseReservedDBInstancesOfferingCommand,
  PurchaseReservedDBInstancesOfferingMessage$,
  PurchaseReservedDBInstancesOfferingResult$,
  Range$,
  RDS,
  RDSClient,
  RdsCustomClusterConfiguration$,
  RDSServiceException,
  RebootDBCluster$,
  RebootDBClusterCommand,
  RebootDBClusterMessage$,
  RebootDBClusterResult$,
  RebootDBInstance$,
  RebootDBInstanceCommand,
  RebootDBInstanceMessage$,
  RebootDBInstanceResult$,
  RebootDBShardGroup$,
  RebootDBShardGroupCommand,
  RebootDBShardGroupMessage$,
  RecommendedAction$,
  RecommendedActionParameter$,
  RecommendedActionUpdate$,
  RecurringCharge$,
  ReferenceDetails$,
  RegisterDBProxyTargets$,
  RegisterDBProxyTargetsCommand,
  RegisterDBProxyTargetsRequest$,
  RegisterDBProxyTargetsResponse$,
  RemoveFromGlobalCluster$,
  RemoveFromGlobalClusterCommand,
  RemoveFromGlobalClusterMessage$,
  RemoveFromGlobalClusterResult$,
  RemoveRoleFromDBCluster$,
  RemoveRoleFromDBClusterCommand,
  RemoveRoleFromDBClusterMessage$,
  RemoveRoleFromDBInstance$,
  RemoveRoleFromDBInstanceCommand,
  RemoveRoleFromDBInstanceMessage$,
  RemoveSourceIdentifierFromSubscription$,
  RemoveSourceIdentifierFromSubscriptionCommand,
  RemoveSourceIdentifierFromSubscriptionMessage$,
  RemoveSourceIdentifierFromSubscriptionResult$,
  RemoveTagsFromResource$,
  RemoveTagsFromResourceCommand,
  RemoveTagsFromResourceMessage$,
  ReplicaMode,
  ReservedDBInstance$,
  ReservedDBInstanceAlreadyExistsFault,
  ReservedDBInstanceAlreadyExistsFault$,
  ReservedDBInstanceMessage$,
  ReservedDBInstanceNotFoundFault,
  ReservedDBInstanceNotFoundFault$,
  ReservedDBInstanceQuotaExceededFault,
  ReservedDBInstanceQuotaExceededFault$,
  ReservedDBInstancesOffering$,
  ReservedDBInstancesOfferingMessage$,
  ReservedDBInstancesOfferingNotFoundFault,
  ReservedDBInstancesOfferingNotFoundFault$,
  ResetDBClusterParameterGroup$,
  ResetDBClusterParameterGroupCommand,
  ResetDBClusterParameterGroupMessage$,
  ResetDBParameterGroup$,
  ResetDBParameterGroupCommand,
  ResetDBParameterGroupMessage$,
  ResourceNotFoundFault,
  ResourceNotFoundFault$,
  ResourcePendingMaintenanceActions$,
  RestoreDBClusterFromS3$,
  RestoreDBClusterFromS3Command,
  RestoreDBClusterFromS3Message$,
  RestoreDBClusterFromS3Result$,
  RestoreDBClusterFromSnapshot$,
  RestoreDBClusterFromSnapshotCommand,
  RestoreDBClusterFromSnapshotMessage$,
  RestoreDBClusterFromSnapshotResult$,
  RestoreDBClusterToPointInTime$,
  RestoreDBClusterToPointInTimeCommand,
  RestoreDBClusterToPointInTimeMessage$,
  RestoreDBClusterToPointInTimeResult$,
  RestoreDBInstanceFromDBSnapshot$,
  RestoreDBInstanceFromDBSnapshotCommand,
  RestoreDBInstanceFromDBSnapshotMessage$,
  RestoreDBInstanceFromDBSnapshotResult$,
  RestoreDBInstanceFromS3$,
  RestoreDBInstanceFromS3Command,
  RestoreDBInstanceFromS3Message$,
  RestoreDBInstanceFromS3Result$,
  RestoreDBInstanceToPointInTime$,
  RestoreDBInstanceToPointInTimeCommand,
  RestoreDBInstanceToPointInTimeMessage$,
  RestoreDBInstanceToPointInTimeResult$,
  RestoreWindow$,
  RevokeDBSecurityGroupIngress$,
  RevokeDBSecurityGroupIngressCommand,
  RevokeDBSecurityGroupIngressMessage$,
  RevokeDBSecurityGroupIngressResult$,
  ScalarReferenceDetails$,
  ScalingConfiguration$,
  ScalingConfigurationInfo$,
  ServerlessV2FeaturesSupport$,
  ServerlessV2ScalingConfiguration$,
  ServerlessV2ScalingConfigurationInfo$,
  SharedSnapshotQuotaExceededFault,
  SharedSnapshotQuotaExceededFault$,
  SnapshotQuotaExceededFault,
  SnapshotQuotaExceededFault$,
  SNSInvalidTopicFault,
  SNSInvalidTopicFault$,
  SNSNoAuthorizationFault,
  SNSNoAuthorizationFault$,
  SNSTopicArnNotFoundFault,
  SNSTopicArnNotFoundFault$,
  SourceClusterNotSupportedFault,
  SourceClusterNotSupportedFault$,
  SourceDatabaseNotSupportedFault,
  SourceDatabaseNotSupportedFault$,
  SourceNotFoundFault,
  SourceNotFoundFault$,
  SourceRegion$,
  SourceRegionMessage$,
  SourceType,
  StartActivityStream$,
  StartActivityStreamCommand,
  StartActivityStreamRequest$,
  StartActivityStreamResponse$,
  StartDBCluster$,
  StartDBClusterCommand,
  StartDBClusterMessage$,
  StartDBClusterResult$,
  StartDBInstance$,
  StartDBInstanceAutomatedBackupsReplication$,
  StartDBInstanceAutomatedBackupsReplicationCommand,
  StartDBInstanceAutomatedBackupsReplicationMessage$,
  StartDBInstanceAutomatedBackupsReplicationResult$,
  StartDBInstanceCommand,
  StartDBInstanceMessage$,
  StartDBInstanceResult$,
  StartExportTask$,
  StartExportTaskCommand,
  StartExportTaskMessage$,
  StopActivityStream$,
  StopActivityStreamCommand,
  StopActivityStreamRequest$,
  StopActivityStreamResponse$,
  StopDBCluster$,
  StopDBClusterCommand,
  StopDBClusterMessage$,
  StopDBClusterResult$,
  StopDBInstance$,
  StopDBInstanceAutomatedBackupsReplication$,
  StopDBInstanceAutomatedBackupsReplicationCommand,
  StopDBInstanceAutomatedBackupsReplicationMessage$,
  StopDBInstanceAutomatedBackupsReplicationResult$,
  StopDBInstanceCommand,
  StopDBInstanceMessage$,
  StopDBInstanceResult$,
  StorageQuotaExceededFault,
  StorageQuotaExceededFault$,
  StorageTypeNotAvailableFault,
  StorageTypeNotAvailableFault$,
  StorageTypeNotSupportedFault,
  StorageTypeNotSupportedFault$,
  Subnet$,
  SubnetAlreadyInUse,
  SubnetAlreadyInUse$,
  SubscriptionAlreadyExistFault,
  SubscriptionAlreadyExistFault$,
  SubscriptionCategoryNotFoundFault,
  SubscriptionCategoryNotFoundFault$,
  SubscriptionNotFoundFault,
  SubscriptionNotFoundFault$,
  SupportedEngineLifecycle$,
  SwitchoverBlueGreenDeployment$,
  SwitchoverBlueGreenDeploymentCommand,
  SwitchoverBlueGreenDeploymentRequest$,
  SwitchoverBlueGreenDeploymentResponse$,
  SwitchoverDetail$,
  SwitchoverGlobalCluster$,
  SwitchoverGlobalClusterCommand,
  SwitchoverGlobalClusterMessage$,
  SwitchoverGlobalClusterResult$,
  SwitchoverReadReplica$,
  SwitchoverReadReplicaCommand,
  SwitchoverReadReplicaMessage$,
  SwitchoverReadReplicaResult$,
  Tag$,
  TagListMessage$,
  TagSpecification$,
  TargetConnectionNetworkType,
  TargetHealth$,
  TargetHealthReason,
  TargetRole,
  TargetState,
  TargetType,
  TenantDatabase$,
  TenantDatabaseAlreadyExistsFault,
  TenantDatabaseAlreadyExistsFault$,
  TenantDatabaseNotFoundFault,
  TenantDatabaseNotFoundFault$,
  TenantDatabasePendingModifiedValues$,
  TenantDatabaseQuotaExceededFault,
  TenantDatabaseQuotaExceededFault$,
  TenantDatabasesMessage$,
  Timezone$,
  UnsupportedDBEngineVersionFault,
  UnsupportedDBEngineVersionFault$,
  UpgradeRolloutOrder,
  UpgradeTarget$,
  UserAuthConfig$,
  UserAuthConfigInfo$,
  ValidAdditionalStorageOptions$,
  ValidDBInstanceModificationsMessage$,
  ValidStorageOptions$,
  ValidVolumeOptions$,
  VpcEncryptionControlViolationException,
  VpcEncryptionControlViolationException$,
  VpcSecurityGroupMembership$,
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
  WriteForwardingStatus,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof RDSClient === "function");
assert(typeof RDS === "function");
// commands
assert(typeof AddRoleToDBClusterCommand === "function");
assert(typeof AddRoleToDBCluster$ === "object");
assert(typeof AddRoleToDBInstanceCommand === "function");
assert(typeof AddRoleToDBInstance$ === "object");
assert(typeof AddSourceIdentifierToSubscriptionCommand === "function");
assert(typeof AddSourceIdentifierToSubscription$ === "object");
assert(typeof AddTagsToResourceCommand === "function");
assert(typeof AddTagsToResource$ === "object");
assert(typeof ApplyPendingMaintenanceActionCommand === "function");
assert(typeof ApplyPendingMaintenanceAction$ === "object");
assert(typeof AuthorizeDBSecurityGroupIngressCommand === "function");
assert(typeof AuthorizeDBSecurityGroupIngress$ === "object");
assert(typeof BacktrackDBClusterCommand === "function");
assert(typeof BacktrackDBCluster$ === "object");
assert(typeof CancelExportTaskCommand === "function");
assert(typeof CancelExportTask$ === "object");
assert(typeof CopyDBClusterParameterGroupCommand === "function");
assert(typeof CopyDBClusterParameterGroup$ === "object");
assert(typeof CopyDBClusterSnapshotCommand === "function");
assert(typeof CopyDBClusterSnapshot$ === "object");
assert(typeof CopyDBParameterGroupCommand === "function");
assert(typeof CopyDBParameterGroup$ === "object");
assert(typeof CopyDBSnapshotCommand === "function");
assert(typeof CopyDBSnapshot$ === "object");
assert(typeof CopyOptionGroupCommand === "function");
assert(typeof CopyOptionGroup$ === "object");
assert(typeof CreateBlueGreenDeploymentCommand === "function");
assert(typeof CreateBlueGreenDeployment$ === "object");
assert(typeof CreateCustomDBEngineVersionCommand === "function");
assert(typeof CreateCustomDBEngineVersion$ === "object");
assert(typeof CreateDBClusterCommand === "function");
assert(typeof CreateDBCluster$ === "object");
assert(typeof CreateDBClusterEndpointCommand === "function");
assert(typeof CreateDBClusterEndpoint$ === "object");
assert(typeof CreateDBClusterParameterGroupCommand === "function");
assert(typeof CreateDBClusterParameterGroup$ === "object");
assert(typeof CreateDBClusterSnapshotCommand === "function");
assert(typeof CreateDBClusterSnapshot$ === "object");
assert(typeof CreateDBInstanceCommand === "function");
assert(typeof CreateDBInstance$ === "object");
assert(typeof CreateDBInstanceReadReplicaCommand === "function");
assert(typeof CreateDBInstanceReadReplica$ === "object");
assert(typeof CreateDBParameterGroupCommand === "function");
assert(typeof CreateDBParameterGroup$ === "object");
assert(typeof CreateDBProxyCommand === "function");
assert(typeof CreateDBProxy$ === "object");
assert(typeof CreateDBProxyEndpointCommand === "function");
assert(typeof CreateDBProxyEndpoint$ === "object");
assert(typeof CreateDBSecurityGroupCommand === "function");
assert(typeof CreateDBSecurityGroup$ === "object");
assert(typeof CreateDBShardGroupCommand === "function");
assert(typeof CreateDBShardGroup$ === "object");
assert(typeof CreateDBSnapshotCommand === "function");
assert(typeof CreateDBSnapshot$ === "object");
assert(typeof CreateDBSubnetGroupCommand === "function");
assert(typeof CreateDBSubnetGroup$ === "object");
assert(typeof CreateEventSubscriptionCommand === "function");
assert(typeof CreateEventSubscription$ === "object");
assert(typeof CreateGlobalClusterCommand === "function");
assert(typeof CreateGlobalCluster$ === "object");
assert(typeof CreateIntegrationCommand === "function");
assert(typeof CreateIntegration$ === "object");
assert(typeof CreateOptionGroupCommand === "function");
assert(typeof CreateOptionGroup$ === "object");
assert(typeof CreateTenantDatabaseCommand === "function");
assert(typeof CreateTenantDatabase$ === "object");
assert(typeof DeleteBlueGreenDeploymentCommand === "function");
assert(typeof DeleteBlueGreenDeployment$ === "object");
assert(typeof DeleteCustomDBEngineVersionCommand === "function");
assert(typeof DeleteCustomDBEngineVersion$ === "object");
assert(typeof DeleteDBClusterCommand === "function");
assert(typeof DeleteDBCluster$ === "object");
assert(typeof DeleteDBClusterAutomatedBackupCommand === "function");
assert(typeof DeleteDBClusterAutomatedBackup$ === "object");
assert(typeof DeleteDBClusterEndpointCommand === "function");
assert(typeof DeleteDBClusterEndpoint$ === "object");
assert(typeof DeleteDBClusterParameterGroupCommand === "function");
assert(typeof DeleteDBClusterParameterGroup$ === "object");
assert(typeof DeleteDBClusterSnapshotCommand === "function");
assert(typeof DeleteDBClusterSnapshot$ === "object");
assert(typeof DeleteDBInstanceCommand === "function");
assert(typeof DeleteDBInstance$ === "object");
assert(typeof DeleteDBInstanceAutomatedBackupCommand === "function");
assert(typeof DeleteDBInstanceAutomatedBackup$ === "object");
assert(typeof DeleteDBParameterGroupCommand === "function");
assert(typeof DeleteDBParameterGroup$ === "object");
assert(typeof DeleteDBProxyCommand === "function");
assert(typeof DeleteDBProxy$ === "object");
assert(typeof DeleteDBProxyEndpointCommand === "function");
assert(typeof DeleteDBProxyEndpoint$ === "object");
assert(typeof DeleteDBSecurityGroupCommand === "function");
assert(typeof DeleteDBSecurityGroup$ === "object");
assert(typeof DeleteDBShardGroupCommand === "function");
assert(typeof DeleteDBShardGroup$ === "object");
assert(typeof DeleteDBSnapshotCommand === "function");
assert(typeof DeleteDBSnapshot$ === "object");
assert(typeof DeleteDBSubnetGroupCommand === "function");
assert(typeof DeleteDBSubnetGroup$ === "object");
assert(typeof DeleteEventSubscriptionCommand === "function");
assert(typeof DeleteEventSubscription$ === "object");
assert(typeof DeleteGlobalClusterCommand === "function");
assert(typeof DeleteGlobalCluster$ === "object");
assert(typeof DeleteIntegrationCommand === "function");
assert(typeof DeleteIntegration$ === "object");
assert(typeof DeleteOptionGroupCommand === "function");
assert(typeof DeleteOptionGroup$ === "object");
assert(typeof DeleteTenantDatabaseCommand === "function");
assert(typeof DeleteTenantDatabase$ === "object");
assert(typeof DeregisterDBProxyTargetsCommand === "function");
assert(typeof DeregisterDBProxyTargets$ === "object");
assert(typeof DescribeAccountAttributesCommand === "function");
assert(typeof DescribeAccountAttributes$ === "object");
assert(typeof DescribeBlueGreenDeploymentsCommand === "function");
assert(typeof DescribeBlueGreenDeployments$ === "object");
assert(typeof DescribeCertificatesCommand === "function");
assert(typeof DescribeCertificates$ === "object");
assert(typeof DescribeDBClusterAutomatedBackupsCommand === "function");
assert(typeof DescribeDBClusterAutomatedBackups$ === "object");
assert(typeof DescribeDBClusterBacktracksCommand === "function");
assert(typeof DescribeDBClusterBacktracks$ === "object");
assert(typeof DescribeDBClusterEndpointsCommand === "function");
assert(typeof DescribeDBClusterEndpoints$ === "object");
assert(typeof DescribeDBClusterParameterGroupsCommand === "function");
assert(typeof DescribeDBClusterParameterGroups$ === "object");
assert(typeof DescribeDBClusterParametersCommand === "function");
assert(typeof DescribeDBClusterParameters$ === "object");
assert(typeof DescribeDBClustersCommand === "function");
assert(typeof DescribeDBClusters$ === "object");
assert(typeof DescribeDBClusterSnapshotAttributesCommand === "function");
assert(typeof DescribeDBClusterSnapshotAttributes$ === "object");
assert(typeof DescribeDBClusterSnapshotsCommand === "function");
assert(typeof DescribeDBClusterSnapshots$ === "object");
assert(typeof DescribeDBEngineVersionsCommand === "function");
assert(typeof DescribeDBEngineVersions$ === "object");
assert(typeof DescribeDBInstanceAutomatedBackupsCommand === "function");
assert(typeof DescribeDBInstanceAutomatedBackups$ === "object");
assert(typeof DescribeDBInstancesCommand === "function");
assert(typeof DescribeDBInstances$ === "object");
assert(typeof DescribeDBLogFilesCommand === "function");
assert(typeof DescribeDBLogFiles$ === "object");
assert(typeof DescribeDBMajorEngineVersionsCommand === "function");
assert(typeof DescribeDBMajorEngineVersions$ === "object");
assert(typeof DescribeDBParameterGroupsCommand === "function");
assert(typeof DescribeDBParameterGroups$ === "object");
assert(typeof DescribeDBParametersCommand === "function");
assert(typeof DescribeDBParameters$ === "object");
assert(typeof DescribeDBProxiesCommand === "function");
assert(typeof DescribeDBProxies$ === "object");
assert(typeof DescribeDBProxyEndpointsCommand === "function");
assert(typeof DescribeDBProxyEndpoints$ === "object");
assert(typeof DescribeDBProxyTargetGroupsCommand === "function");
assert(typeof DescribeDBProxyTargetGroups$ === "object");
assert(typeof DescribeDBProxyTargetsCommand === "function");
assert(typeof DescribeDBProxyTargets$ === "object");
assert(typeof DescribeDBRecommendationsCommand === "function");
assert(typeof DescribeDBRecommendations$ === "object");
assert(typeof DescribeDBSecurityGroupsCommand === "function");
assert(typeof DescribeDBSecurityGroups$ === "object");
assert(typeof DescribeDBShardGroupsCommand === "function");
assert(typeof DescribeDBShardGroups$ === "object");
assert(typeof DescribeDBSnapshotAttributesCommand === "function");
assert(typeof DescribeDBSnapshotAttributes$ === "object");
assert(typeof DescribeDBSnapshotsCommand === "function");
assert(typeof DescribeDBSnapshots$ === "object");
assert(typeof DescribeDBSnapshotTenantDatabasesCommand === "function");
assert(typeof DescribeDBSnapshotTenantDatabases$ === "object");
assert(typeof DescribeDBSubnetGroupsCommand === "function");
assert(typeof DescribeDBSubnetGroups$ === "object");
assert(typeof DescribeEngineDefaultClusterParametersCommand === "function");
assert(typeof DescribeEngineDefaultClusterParameters$ === "object");
assert(typeof DescribeEngineDefaultParametersCommand === "function");
assert(typeof DescribeEngineDefaultParameters$ === "object");
assert(typeof DescribeEventCategoriesCommand === "function");
assert(typeof DescribeEventCategories$ === "object");
assert(typeof DescribeEventsCommand === "function");
assert(typeof DescribeEvents$ === "object");
assert(typeof DescribeEventSubscriptionsCommand === "function");
assert(typeof DescribeEventSubscriptions$ === "object");
assert(typeof DescribeExportTasksCommand === "function");
assert(typeof DescribeExportTasks$ === "object");
assert(typeof DescribeGlobalClustersCommand === "function");
assert(typeof DescribeGlobalClusters$ === "object");
assert(typeof DescribeIntegrationsCommand === "function");
assert(typeof DescribeIntegrations$ === "object");
assert(typeof DescribeOptionGroupOptionsCommand === "function");
assert(typeof DescribeOptionGroupOptions$ === "object");
assert(typeof DescribeOptionGroupsCommand === "function");
assert(typeof DescribeOptionGroups$ === "object");
assert(typeof DescribeOrderableDBInstanceOptionsCommand === "function");
assert(typeof DescribeOrderableDBInstanceOptions$ === "object");
assert(typeof DescribePendingMaintenanceActionsCommand === "function");
assert(typeof DescribePendingMaintenanceActions$ === "object");
assert(typeof DescribeReservedDBInstancesCommand === "function");
assert(typeof DescribeReservedDBInstances$ === "object");
assert(typeof DescribeReservedDBInstancesOfferingsCommand === "function");
assert(typeof DescribeReservedDBInstancesOfferings$ === "object");
assert(typeof DescribeSourceRegionsCommand === "function");
assert(typeof DescribeSourceRegions$ === "object");
assert(typeof DescribeTenantDatabasesCommand === "function");
assert(typeof DescribeTenantDatabases$ === "object");
assert(typeof DescribeValidDBInstanceModificationsCommand === "function");
assert(typeof DescribeValidDBInstanceModifications$ === "object");
assert(typeof DisableHttpEndpointCommand === "function");
assert(typeof DisableHttpEndpoint$ === "object");
assert(typeof DownloadDBLogFilePortionCommand === "function");
assert(typeof DownloadDBLogFilePortion$ === "object");
assert(typeof EnableHttpEndpointCommand === "function");
assert(typeof EnableHttpEndpoint$ === "object");
assert(typeof FailoverDBClusterCommand === "function");
assert(typeof FailoverDBCluster$ === "object");
assert(typeof FailoverGlobalClusterCommand === "function");
assert(typeof FailoverGlobalCluster$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ModifyActivityStreamCommand === "function");
assert(typeof ModifyActivityStream$ === "object");
assert(typeof ModifyCertificatesCommand === "function");
assert(typeof ModifyCertificates$ === "object");
assert(typeof ModifyCurrentDBClusterCapacityCommand === "function");
assert(typeof ModifyCurrentDBClusterCapacity$ === "object");
assert(typeof ModifyCustomDBEngineVersionCommand === "function");
assert(typeof ModifyCustomDBEngineVersion$ === "object");
assert(typeof ModifyDBClusterCommand === "function");
assert(typeof ModifyDBCluster$ === "object");
assert(typeof ModifyDBClusterEndpointCommand === "function");
assert(typeof ModifyDBClusterEndpoint$ === "object");
assert(typeof ModifyDBClusterParameterGroupCommand === "function");
assert(typeof ModifyDBClusterParameterGroup$ === "object");
assert(typeof ModifyDBClusterSnapshotAttributeCommand === "function");
assert(typeof ModifyDBClusterSnapshotAttribute$ === "object");
assert(typeof ModifyDBInstanceCommand === "function");
assert(typeof ModifyDBInstance$ === "object");
assert(typeof ModifyDBParameterGroupCommand === "function");
assert(typeof ModifyDBParameterGroup$ === "object");
assert(typeof ModifyDBProxyCommand === "function");
assert(typeof ModifyDBProxy$ === "object");
assert(typeof ModifyDBProxyEndpointCommand === "function");
assert(typeof ModifyDBProxyEndpoint$ === "object");
assert(typeof ModifyDBProxyTargetGroupCommand === "function");
assert(typeof ModifyDBProxyTargetGroup$ === "object");
assert(typeof ModifyDBRecommendationCommand === "function");
assert(typeof ModifyDBRecommendation$ === "object");
assert(typeof ModifyDBShardGroupCommand === "function");
assert(typeof ModifyDBShardGroup$ === "object");
assert(typeof ModifyDBSnapshotCommand === "function");
assert(typeof ModifyDBSnapshot$ === "object");
assert(typeof ModifyDBSnapshotAttributeCommand === "function");
assert(typeof ModifyDBSnapshotAttribute$ === "object");
assert(typeof ModifyDBSubnetGroupCommand === "function");
assert(typeof ModifyDBSubnetGroup$ === "object");
assert(typeof ModifyEventSubscriptionCommand === "function");
assert(typeof ModifyEventSubscription$ === "object");
assert(typeof ModifyGlobalClusterCommand === "function");
assert(typeof ModifyGlobalCluster$ === "object");
assert(typeof ModifyIntegrationCommand === "function");
assert(typeof ModifyIntegration$ === "object");
assert(typeof ModifyOptionGroupCommand === "function");
assert(typeof ModifyOptionGroup$ === "object");
assert(typeof ModifyTenantDatabaseCommand === "function");
assert(typeof ModifyTenantDatabase$ === "object");
assert(typeof PromoteReadReplicaCommand === "function");
assert(typeof PromoteReadReplica$ === "object");
assert(typeof PromoteReadReplicaDBClusterCommand === "function");
assert(typeof PromoteReadReplicaDBCluster$ === "object");
assert(typeof PurchaseReservedDBInstancesOfferingCommand === "function");
assert(typeof PurchaseReservedDBInstancesOffering$ === "object");
assert(typeof RebootDBClusterCommand === "function");
assert(typeof RebootDBCluster$ === "object");
assert(typeof RebootDBInstanceCommand === "function");
assert(typeof RebootDBInstance$ === "object");
assert(typeof RebootDBShardGroupCommand === "function");
assert(typeof RebootDBShardGroup$ === "object");
assert(typeof RegisterDBProxyTargetsCommand === "function");
assert(typeof RegisterDBProxyTargets$ === "object");
assert(typeof RemoveFromGlobalClusterCommand === "function");
assert(typeof RemoveFromGlobalCluster$ === "object");
assert(typeof RemoveRoleFromDBClusterCommand === "function");
assert(typeof RemoveRoleFromDBCluster$ === "object");
assert(typeof RemoveRoleFromDBInstanceCommand === "function");
assert(typeof RemoveRoleFromDBInstance$ === "object");
assert(typeof RemoveSourceIdentifierFromSubscriptionCommand === "function");
assert(typeof RemoveSourceIdentifierFromSubscription$ === "object");
assert(typeof RemoveTagsFromResourceCommand === "function");
assert(typeof RemoveTagsFromResource$ === "object");
assert(typeof ResetDBClusterParameterGroupCommand === "function");
assert(typeof ResetDBClusterParameterGroup$ === "object");
assert(typeof ResetDBParameterGroupCommand === "function");
assert(typeof ResetDBParameterGroup$ === "object");
assert(typeof RestoreDBClusterFromS3Command === "function");
assert(typeof RestoreDBClusterFromS3$ === "object");
assert(typeof RestoreDBClusterFromSnapshotCommand === "function");
assert(typeof RestoreDBClusterFromSnapshot$ === "object");
assert(typeof RestoreDBClusterToPointInTimeCommand === "function");
assert(typeof RestoreDBClusterToPointInTime$ === "object");
assert(typeof RestoreDBInstanceFromDBSnapshotCommand === "function");
assert(typeof RestoreDBInstanceFromDBSnapshot$ === "object");
assert(typeof RestoreDBInstanceFromS3Command === "function");
assert(typeof RestoreDBInstanceFromS3$ === "object");
assert(typeof RestoreDBInstanceToPointInTimeCommand === "function");
assert(typeof RestoreDBInstanceToPointInTime$ === "object");
assert(typeof RevokeDBSecurityGroupIngressCommand === "function");
assert(typeof RevokeDBSecurityGroupIngress$ === "object");
assert(typeof StartActivityStreamCommand === "function");
assert(typeof StartActivityStream$ === "object");
assert(typeof StartDBClusterCommand === "function");
assert(typeof StartDBCluster$ === "object");
assert(typeof StartDBInstanceCommand === "function");
assert(typeof StartDBInstance$ === "object");
assert(typeof StartDBInstanceAutomatedBackupsReplicationCommand === "function");
assert(typeof StartDBInstanceAutomatedBackupsReplication$ === "object");
assert(typeof StartExportTaskCommand === "function");
assert(typeof StartExportTask$ === "object");
assert(typeof StopActivityStreamCommand === "function");
assert(typeof StopActivityStream$ === "object");
assert(typeof StopDBClusterCommand === "function");
assert(typeof StopDBCluster$ === "object");
assert(typeof StopDBInstanceCommand === "function");
assert(typeof StopDBInstance$ === "object");
assert(typeof StopDBInstanceAutomatedBackupsReplicationCommand === "function");
assert(typeof StopDBInstanceAutomatedBackupsReplication$ === "object");
assert(typeof SwitchoverBlueGreenDeploymentCommand === "function");
assert(typeof SwitchoverBlueGreenDeployment$ === "object");
assert(typeof SwitchoverGlobalClusterCommand === "function");
assert(typeof SwitchoverGlobalCluster$ === "object");
assert(typeof SwitchoverReadReplicaCommand === "function");
assert(typeof SwitchoverReadReplica$ === "object");
// structural schemas
assert(typeof AccountAttributesMessage$ === "object");
assert(typeof AccountQuota$ === "object");
assert(typeof AdditionalStorageVolume$ === "object");
assert(typeof AdditionalStorageVolumeOutput$ === "object");
assert(typeof AddRoleToDBClusterMessage$ === "object");
assert(typeof AddRoleToDBInstanceMessage$ === "object");
assert(typeof AddSourceIdentifierToSubscriptionMessage$ === "object");
assert(typeof AddSourceIdentifierToSubscriptionResult$ === "object");
assert(typeof AddTagsToResourceMessage$ === "object");
assert(typeof ApplyPendingMaintenanceActionMessage$ === "object");
assert(typeof ApplyPendingMaintenanceActionResult$ === "object");
assert(typeof AuthorizeDBSecurityGroupIngressMessage$ === "object");
assert(typeof AuthorizeDBSecurityGroupIngressResult$ === "object");
assert(typeof AvailabilityZone$ === "object");
assert(typeof AvailableAdditionalStorageVolumesOption$ === "object");
assert(typeof AvailableProcessorFeature$ === "object");
assert(typeof BacktrackDBClusterMessage$ === "object");
assert(typeof BlueGreenDeployment$ === "object");
assert(typeof BlueGreenDeploymentTask$ === "object");
assert(typeof CancelExportTaskMessage$ === "object");
assert(typeof Certificate$ === "object");
assert(typeof CertificateDetails$ === "object");
assert(typeof CertificateMessage$ === "object");
assert(typeof CharacterSet$ === "object");
assert(typeof CloudwatchLogsExportConfiguration$ === "object");
assert(typeof ClusterPendingModifiedValues$ === "object");
assert(typeof ConnectionPoolConfiguration$ === "object");
assert(typeof ConnectionPoolConfigurationInfo$ === "object");
assert(typeof ContextAttribute$ === "object");
assert(typeof CopyDBClusterParameterGroupMessage$ === "object");
assert(typeof CopyDBClusterParameterGroupResult$ === "object");
assert(typeof CopyDBClusterSnapshotMessage$ === "object");
assert(typeof CopyDBClusterSnapshotResult$ === "object");
assert(typeof CopyDBParameterGroupMessage$ === "object");
assert(typeof CopyDBParameterGroupResult$ === "object");
assert(typeof CopyDBSnapshotMessage$ === "object");
assert(typeof CopyDBSnapshotResult$ === "object");
assert(typeof CopyOptionGroupMessage$ === "object");
assert(typeof CopyOptionGroupResult$ === "object");
assert(typeof CreateBlueGreenDeploymentRequest$ === "object");
assert(typeof CreateBlueGreenDeploymentResponse$ === "object");
assert(typeof CreateCustomDBEngineVersionMessage$ === "object");
assert(typeof CreateDBClusterEndpointMessage$ === "object");
assert(typeof CreateDBClusterMessage$ === "object");
assert(typeof CreateDBClusterParameterGroupMessage$ === "object");
assert(typeof CreateDBClusterParameterGroupResult$ === "object");
assert(typeof CreateDBClusterResult$ === "object");
assert(typeof CreateDBClusterSnapshotMessage$ === "object");
assert(typeof CreateDBClusterSnapshotResult$ === "object");
assert(typeof CreateDBInstanceMessage$ === "object");
assert(typeof CreateDBInstanceReadReplicaMessage$ === "object");
assert(typeof CreateDBInstanceReadReplicaResult$ === "object");
assert(typeof CreateDBInstanceResult$ === "object");
assert(typeof CreateDBParameterGroupMessage$ === "object");
assert(typeof CreateDBParameterGroupResult$ === "object");
assert(typeof CreateDBProxyEndpointRequest$ === "object");
assert(typeof CreateDBProxyEndpointResponse$ === "object");
assert(typeof CreateDBProxyRequest$ === "object");
assert(typeof CreateDBProxyResponse$ === "object");
assert(typeof CreateDBSecurityGroupMessage$ === "object");
assert(typeof CreateDBSecurityGroupResult$ === "object");
assert(typeof CreateDBShardGroupMessage$ === "object");
assert(typeof CreateDBSnapshotMessage$ === "object");
assert(typeof CreateDBSnapshotResult$ === "object");
assert(typeof CreateDBSubnetGroupMessage$ === "object");
assert(typeof CreateDBSubnetGroupResult$ === "object");
assert(typeof CreateEventSubscriptionMessage$ === "object");
assert(typeof CreateEventSubscriptionResult$ === "object");
assert(typeof CreateGlobalClusterMessage$ === "object");
assert(typeof CreateGlobalClusterResult$ === "object");
assert(typeof CreateIntegrationMessage$ === "object");
assert(typeof CreateOptionGroupMessage$ === "object");
assert(typeof CreateOptionGroupResult$ === "object");
assert(typeof CreateTenantDatabaseMessage$ === "object");
assert(typeof CreateTenantDatabaseResult$ === "object");
assert(typeof CustomDBEngineVersionAMI$ === "object");
assert(typeof DBCluster$ === "object");
assert(typeof DBClusterAutomatedBackup$ === "object");
assert(typeof DBClusterAutomatedBackupMessage$ === "object");
assert(typeof DBClusterBacktrack$ === "object");
assert(typeof DBClusterBacktrackMessage$ === "object");
assert(typeof DBClusterCapacityInfo$ === "object");
assert(typeof DBClusterEndpoint$ === "object");
assert(typeof DBClusterEndpointMessage$ === "object");
assert(typeof DBClusterMember$ === "object");
assert(typeof DBClusterMessage$ === "object");
assert(typeof DBClusterOptionGroupStatus$ === "object");
assert(typeof DBClusterParameterGroup$ === "object");
assert(typeof DBClusterParameterGroupDetails$ === "object");
assert(typeof DBClusterParameterGroupNameMessage$ === "object");
assert(typeof DBClusterParameterGroupsMessage$ === "object");
assert(typeof DBClusterRole$ === "object");
assert(typeof DBClusterSnapshot$ === "object");
assert(typeof DBClusterSnapshotAttribute$ === "object");
assert(typeof DBClusterSnapshotAttributesResult$ === "object");
assert(typeof DBClusterSnapshotMessage$ === "object");
assert(typeof DBClusterStatusInfo$ === "object");
assert(typeof DBEngineVersion$ === "object");
assert(typeof DBEngineVersionMessage$ === "object");
assert(typeof DBInstance$ === "object");
assert(typeof DBInstanceAutomatedBackup$ === "object");
assert(typeof DBInstanceAutomatedBackupMessage$ === "object");
assert(typeof DBInstanceAutomatedBackupsReplication$ === "object");
assert(typeof DBInstanceMessage$ === "object");
assert(typeof DBInstanceRole$ === "object");
assert(typeof DBInstanceStatusInfo$ === "object");
assert(typeof DBMajorEngineVersion$ === "object");
assert(typeof DBParameterGroup$ === "object");
assert(typeof DBParameterGroupDetails$ === "object");
assert(typeof DBParameterGroupNameMessage$ === "object");
assert(typeof DBParameterGroupsMessage$ === "object");
assert(typeof DBParameterGroupStatus$ === "object");
assert(typeof DBProxy$ === "object");
assert(typeof DBProxyEndpoint$ === "object");
assert(typeof DBProxyTarget$ === "object");
assert(typeof DBProxyTargetGroup$ === "object");
assert(typeof DBRecommendation$ === "object");
assert(typeof DBRecommendationMessage$ === "object");
assert(typeof DBRecommendationsMessage$ === "object");
assert(typeof DBSecurityGroup$ === "object");
assert(typeof DBSecurityGroupMembership$ === "object");
assert(typeof DBSecurityGroupMessage$ === "object");
assert(typeof DBShardGroup$ === "object");
assert(typeof DBSnapshot$ === "object");
assert(typeof DBSnapshotAttribute$ === "object");
assert(typeof DBSnapshotAttributesResult$ === "object");
assert(typeof DBSnapshotMessage$ === "object");
assert(typeof DBSnapshotTenantDatabase$ === "object");
assert(typeof DBSnapshotTenantDatabasesMessage$ === "object");
assert(typeof DBSubnetGroup$ === "object");
assert(typeof DBSubnetGroupMessage$ === "object");
assert(typeof DeleteBlueGreenDeploymentRequest$ === "object");
assert(typeof DeleteBlueGreenDeploymentResponse$ === "object");
assert(typeof DeleteCustomDBEngineVersionMessage$ === "object");
assert(typeof DeleteDBClusterAutomatedBackupMessage$ === "object");
assert(typeof DeleteDBClusterAutomatedBackupResult$ === "object");
assert(typeof DeleteDBClusterEndpointMessage$ === "object");
assert(typeof DeleteDBClusterMessage$ === "object");
assert(typeof DeleteDBClusterParameterGroupMessage$ === "object");
assert(typeof DeleteDBClusterResult$ === "object");
assert(typeof DeleteDBClusterSnapshotMessage$ === "object");
assert(typeof DeleteDBClusterSnapshotResult$ === "object");
assert(typeof DeleteDBInstanceAutomatedBackupMessage$ === "object");
assert(typeof DeleteDBInstanceAutomatedBackupResult$ === "object");
assert(typeof DeleteDBInstanceMessage$ === "object");
assert(typeof DeleteDBInstanceResult$ === "object");
assert(typeof DeleteDBParameterGroupMessage$ === "object");
assert(typeof DeleteDBProxyEndpointRequest$ === "object");
assert(typeof DeleteDBProxyEndpointResponse$ === "object");
assert(typeof DeleteDBProxyRequest$ === "object");
assert(typeof DeleteDBProxyResponse$ === "object");
assert(typeof DeleteDBSecurityGroupMessage$ === "object");
assert(typeof DeleteDBShardGroupMessage$ === "object");
assert(typeof DeleteDBSnapshotMessage$ === "object");
assert(typeof DeleteDBSnapshotResult$ === "object");
assert(typeof DeleteDBSubnetGroupMessage$ === "object");
assert(typeof DeleteEventSubscriptionMessage$ === "object");
assert(typeof DeleteEventSubscriptionResult$ === "object");
assert(typeof DeleteGlobalClusterMessage$ === "object");
assert(typeof DeleteGlobalClusterResult$ === "object");
assert(typeof DeleteIntegrationMessage$ === "object");
assert(typeof DeleteOptionGroupMessage$ === "object");
assert(typeof DeleteTenantDatabaseMessage$ === "object");
assert(typeof DeleteTenantDatabaseResult$ === "object");
assert(typeof DeregisterDBProxyTargetsRequest$ === "object");
assert(typeof DeregisterDBProxyTargetsResponse$ === "object");
assert(typeof DescribeAccountAttributesMessage$ === "object");
assert(typeof DescribeBlueGreenDeploymentsRequest$ === "object");
assert(typeof DescribeBlueGreenDeploymentsResponse$ === "object");
assert(typeof DescribeCertificatesMessage$ === "object");
assert(typeof DescribeDBClusterAutomatedBackupsMessage$ === "object");
assert(typeof DescribeDBClusterBacktracksMessage$ === "object");
assert(typeof DescribeDBClusterEndpointsMessage$ === "object");
assert(typeof DescribeDBClusterParameterGroupsMessage$ === "object");
assert(typeof DescribeDBClusterParametersMessage$ === "object");
assert(typeof DescribeDBClustersMessage$ === "object");
assert(typeof DescribeDBClusterSnapshotAttributesMessage$ === "object");
assert(typeof DescribeDBClusterSnapshotAttributesResult$ === "object");
assert(typeof DescribeDBClusterSnapshotsMessage$ === "object");
assert(typeof DescribeDBEngineVersionsMessage$ === "object");
assert(typeof DescribeDBInstanceAutomatedBackupsMessage$ === "object");
assert(typeof DescribeDBInstancesMessage$ === "object");
assert(typeof DescribeDBLogFilesDetails$ === "object");
assert(typeof DescribeDBLogFilesMessage$ === "object");
assert(typeof DescribeDBLogFilesResponse$ === "object");
assert(typeof DescribeDBMajorEngineVersionsRequest$ === "object");
assert(typeof DescribeDBMajorEngineVersionsResponse$ === "object");
assert(typeof DescribeDBParameterGroupsMessage$ === "object");
assert(typeof DescribeDBParametersMessage$ === "object");
assert(typeof DescribeDBProxiesRequest$ === "object");
assert(typeof DescribeDBProxiesResponse$ === "object");
assert(typeof DescribeDBProxyEndpointsRequest$ === "object");
assert(typeof DescribeDBProxyEndpointsResponse$ === "object");
assert(typeof DescribeDBProxyTargetGroupsRequest$ === "object");
assert(typeof DescribeDBProxyTargetGroupsResponse$ === "object");
assert(typeof DescribeDBProxyTargetsRequest$ === "object");
assert(typeof DescribeDBProxyTargetsResponse$ === "object");
assert(typeof DescribeDBRecommendationsMessage$ === "object");
assert(typeof DescribeDBSecurityGroupsMessage$ === "object");
assert(typeof DescribeDBShardGroupsMessage$ === "object");
assert(typeof DescribeDBShardGroupsResponse$ === "object");
assert(typeof DescribeDBSnapshotAttributesMessage$ === "object");
assert(typeof DescribeDBSnapshotAttributesResult$ === "object");
assert(typeof DescribeDBSnapshotsMessage$ === "object");
assert(typeof DescribeDBSnapshotTenantDatabasesMessage$ === "object");
assert(typeof DescribeDBSubnetGroupsMessage$ === "object");
assert(typeof DescribeEngineDefaultClusterParametersMessage$ === "object");
assert(typeof DescribeEngineDefaultClusterParametersResult$ === "object");
assert(typeof DescribeEngineDefaultParametersMessage$ === "object");
assert(typeof DescribeEngineDefaultParametersResult$ === "object");
assert(typeof DescribeEventCategoriesMessage$ === "object");
assert(typeof DescribeEventsMessage$ === "object");
assert(typeof DescribeEventSubscriptionsMessage$ === "object");
assert(typeof DescribeExportTasksMessage$ === "object");
assert(typeof DescribeGlobalClustersMessage$ === "object");
assert(typeof DescribeIntegrationsMessage$ === "object");
assert(typeof DescribeIntegrationsResponse$ === "object");
assert(typeof DescribeOptionGroupOptionsMessage$ === "object");
assert(typeof DescribeOptionGroupsMessage$ === "object");
assert(typeof DescribeOrderableDBInstanceOptionsMessage$ === "object");
assert(typeof DescribePendingMaintenanceActionsMessage$ === "object");
assert(typeof DescribeReservedDBInstancesMessage$ === "object");
assert(typeof DescribeReservedDBInstancesOfferingsMessage$ === "object");
assert(typeof DescribeSourceRegionsMessage$ === "object");
assert(typeof DescribeTenantDatabasesMessage$ === "object");
assert(typeof DescribeValidDBInstanceModificationsMessage$ === "object");
assert(typeof DescribeValidDBInstanceModificationsResult$ === "object");
assert(typeof DisableHttpEndpointRequest$ === "object");
assert(typeof DisableHttpEndpointResponse$ === "object");
assert(typeof DocLink$ === "object");
assert(typeof DomainMembership$ === "object");
assert(typeof DoubleRange$ === "object");
assert(typeof DownloadDBLogFilePortionDetails$ === "object");
assert(typeof DownloadDBLogFilePortionMessage$ === "object");
assert(typeof EC2SecurityGroup$ === "object");
assert(typeof EnableHttpEndpointRequest$ === "object");
assert(typeof EnableHttpEndpointResponse$ === "object");
assert(typeof Endpoint$ === "object");
assert(typeof EngineDefaults$ === "object");
assert(typeof Event$ === "object");
assert(typeof EventCategoriesMap$ === "object");
assert(typeof EventCategoriesMessage$ === "object");
assert(typeof EventsMessage$ === "object");
assert(typeof EventSubscription$ === "object");
assert(typeof EventSubscriptionsMessage$ === "object");
assert(typeof ExportTask$ === "object");
assert(typeof ExportTasksMessage$ === "object");
assert(typeof FailoverDBClusterMessage$ === "object");
assert(typeof FailoverDBClusterResult$ === "object");
assert(typeof FailoverGlobalClusterMessage$ === "object");
assert(typeof FailoverGlobalClusterResult$ === "object");
assert(typeof FailoverState$ === "object");
assert(typeof Filter$ === "object");
assert(typeof GlobalCluster$ === "object");
assert(typeof GlobalClusterMember$ === "object");
assert(typeof GlobalClustersMessage$ === "object");
assert(typeof Integration$ === "object");
assert(typeof IntegrationError$ === "object");
assert(typeof IPRange$ === "object");
assert(typeof IssueDetails$ === "object");
assert(typeof LimitlessDatabase$ === "object");
assert(typeof ListTagsForResourceMessage$ === "object");
assert(typeof MasterUserSecret$ === "object");
assert(typeof Metric$ === "object");
assert(typeof MetricQuery$ === "object");
assert(typeof MetricReference$ === "object");
assert(typeof MinimumEngineVersionPerAllowedValue$ === "object");
assert(typeof ModifyActivityStreamRequest$ === "object");
assert(typeof ModifyActivityStreamResponse$ === "object");
assert(typeof ModifyAdditionalStorageVolume$ === "object");
assert(typeof ModifyCertificatesMessage$ === "object");
assert(typeof ModifyCertificatesResult$ === "object");
assert(typeof ModifyCurrentDBClusterCapacityMessage$ === "object");
assert(typeof ModifyCustomDBEngineVersionMessage$ === "object");
assert(typeof ModifyDBClusterEndpointMessage$ === "object");
assert(typeof ModifyDBClusterMessage$ === "object");
assert(typeof ModifyDBClusterParameterGroupMessage$ === "object");
assert(typeof ModifyDBClusterResult$ === "object");
assert(typeof ModifyDBClusterSnapshotAttributeMessage$ === "object");
assert(typeof ModifyDBClusterSnapshotAttributeResult$ === "object");
assert(typeof ModifyDBInstanceMessage$ === "object");
assert(typeof ModifyDBInstanceResult$ === "object");
assert(typeof ModifyDBParameterGroupMessage$ === "object");
assert(typeof ModifyDBProxyEndpointRequest$ === "object");
assert(typeof ModifyDBProxyEndpointResponse$ === "object");
assert(typeof ModifyDBProxyRequest$ === "object");
assert(typeof ModifyDBProxyResponse$ === "object");
assert(typeof ModifyDBProxyTargetGroupRequest$ === "object");
assert(typeof ModifyDBProxyTargetGroupResponse$ === "object");
assert(typeof ModifyDBRecommendationMessage$ === "object");
assert(typeof ModifyDBShardGroupMessage$ === "object");
assert(typeof ModifyDBSnapshotAttributeMessage$ === "object");
assert(typeof ModifyDBSnapshotAttributeResult$ === "object");
assert(typeof ModifyDBSnapshotMessage$ === "object");
assert(typeof ModifyDBSnapshotResult$ === "object");
assert(typeof ModifyDBSubnetGroupMessage$ === "object");
assert(typeof ModifyDBSubnetGroupResult$ === "object");
assert(typeof ModifyEventSubscriptionMessage$ === "object");
assert(typeof ModifyEventSubscriptionResult$ === "object");
assert(typeof ModifyGlobalClusterMessage$ === "object");
assert(typeof ModifyGlobalClusterResult$ === "object");
assert(typeof ModifyIntegrationMessage$ === "object");
assert(typeof ModifyOptionGroupMessage$ === "object");
assert(typeof ModifyOptionGroupResult$ === "object");
assert(typeof ModifyTenantDatabaseMessage$ === "object");
assert(typeof ModifyTenantDatabaseResult$ === "object");
assert(typeof Option$ === "object");
assert(typeof OptionConfiguration$ === "object");
assert(typeof OptionGroup$ === "object");
assert(typeof OptionGroupMembership$ === "object");
assert(typeof OptionGroupOption$ === "object");
assert(typeof OptionGroupOptionSetting$ === "object");
assert(typeof OptionGroupOptionsMessage$ === "object");
assert(typeof OptionGroups$ === "object");
assert(typeof OptionSetting$ === "object");
assert(typeof OptionVersion$ === "object");
assert(typeof OrderableDBInstanceOption$ === "object");
assert(typeof OrderableDBInstanceOptionsMessage$ === "object");
assert(typeof Outpost$ === "object");
assert(typeof Parameter$ === "object");
assert(typeof PendingCloudwatchLogsExports$ === "object");
assert(typeof PendingMaintenanceAction$ === "object");
assert(typeof PendingMaintenanceActionsMessage$ === "object");
assert(typeof PendingModifiedValues$ === "object");
assert(typeof PerformanceInsightsMetricDimensionGroup$ === "object");
assert(typeof PerformanceInsightsMetricQuery$ === "object");
assert(typeof PerformanceIssueDetails$ === "object");
assert(typeof ProcessorFeature$ === "object");
assert(typeof PromoteReadReplicaDBClusterMessage$ === "object");
assert(typeof PromoteReadReplicaDBClusterResult$ === "object");
assert(typeof PromoteReadReplicaMessage$ === "object");
assert(typeof PromoteReadReplicaResult$ === "object");
assert(typeof PurchaseReservedDBInstancesOfferingMessage$ === "object");
assert(typeof PurchaseReservedDBInstancesOfferingResult$ === "object");
assert(typeof Range$ === "object");
assert(typeof RdsCustomClusterConfiguration$ === "object");
assert(typeof RebootDBClusterMessage$ === "object");
assert(typeof RebootDBClusterResult$ === "object");
assert(typeof RebootDBInstanceMessage$ === "object");
assert(typeof RebootDBInstanceResult$ === "object");
assert(typeof RebootDBShardGroupMessage$ === "object");
assert(typeof RecommendedAction$ === "object");
assert(typeof RecommendedActionParameter$ === "object");
assert(typeof RecommendedActionUpdate$ === "object");
assert(typeof RecurringCharge$ === "object");
assert(typeof ReferenceDetails$ === "object");
assert(typeof RegisterDBProxyTargetsRequest$ === "object");
assert(typeof RegisterDBProxyTargetsResponse$ === "object");
assert(typeof RemoveFromGlobalClusterMessage$ === "object");
assert(typeof RemoveFromGlobalClusterResult$ === "object");
assert(typeof RemoveRoleFromDBClusterMessage$ === "object");
assert(typeof RemoveRoleFromDBInstanceMessage$ === "object");
assert(typeof RemoveSourceIdentifierFromSubscriptionMessage$ === "object");
assert(typeof RemoveSourceIdentifierFromSubscriptionResult$ === "object");
assert(typeof RemoveTagsFromResourceMessage$ === "object");
assert(typeof ReservedDBInstance$ === "object");
assert(typeof ReservedDBInstanceMessage$ === "object");
assert(typeof ReservedDBInstancesOffering$ === "object");
assert(typeof ReservedDBInstancesOfferingMessage$ === "object");
assert(typeof ResetDBClusterParameterGroupMessage$ === "object");
assert(typeof ResetDBParameterGroupMessage$ === "object");
assert(typeof ResourcePendingMaintenanceActions$ === "object");
assert(typeof RestoreDBClusterFromS3Message$ === "object");
assert(typeof RestoreDBClusterFromS3Result$ === "object");
assert(typeof RestoreDBClusterFromSnapshotMessage$ === "object");
assert(typeof RestoreDBClusterFromSnapshotResult$ === "object");
assert(typeof RestoreDBClusterToPointInTimeMessage$ === "object");
assert(typeof RestoreDBClusterToPointInTimeResult$ === "object");
assert(typeof RestoreDBInstanceFromDBSnapshotMessage$ === "object");
assert(typeof RestoreDBInstanceFromDBSnapshotResult$ === "object");
assert(typeof RestoreDBInstanceFromS3Message$ === "object");
assert(typeof RestoreDBInstanceFromS3Result$ === "object");
assert(typeof RestoreDBInstanceToPointInTimeMessage$ === "object");
assert(typeof RestoreDBInstanceToPointInTimeResult$ === "object");
assert(typeof RestoreWindow$ === "object");
assert(typeof RevokeDBSecurityGroupIngressMessage$ === "object");
assert(typeof RevokeDBSecurityGroupIngressResult$ === "object");
assert(typeof ScalarReferenceDetails$ === "object");
assert(typeof ScalingConfiguration$ === "object");
assert(typeof ScalingConfigurationInfo$ === "object");
assert(typeof ServerlessV2FeaturesSupport$ === "object");
assert(typeof ServerlessV2ScalingConfiguration$ === "object");
assert(typeof ServerlessV2ScalingConfigurationInfo$ === "object");
assert(typeof SourceRegion$ === "object");
assert(typeof SourceRegionMessage$ === "object");
assert(typeof StartActivityStreamRequest$ === "object");
assert(typeof StartActivityStreamResponse$ === "object");
assert(typeof StartDBClusterMessage$ === "object");
assert(typeof StartDBClusterResult$ === "object");
assert(typeof StartDBInstanceAutomatedBackupsReplicationMessage$ === "object");
assert(typeof StartDBInstanceAutomatedBackupsReplicationResult$ === "object");
assert(typeof StartDBInstanceMessage$ === "object");
assert(typeof StartDBInstanceResult$ === "object");
assert(typeof StartExportTaskMessage$ === "object");
assert(typeof StopActivityStreamRequest$ === "object");
assert(typeof StopActivityStreamResponse$ === "object");
assert(typeof StopDBClusterMessage$ === "object");
assert(typeof StopDBClusterResult$ === "object");
assert(typeof StopDBInstanceAutomatedBackupsReplicationMessage$ === "object");
assert(typeof StopDBInstanceAutomatedBackupsReplicationResult$ === "object");
assert(typeof StopDBInstanceMessage$ === "object");
assert(typeof StopDBInstanceResult$ === "object");
assert(typeof Subnet$ === "object");
assert(typeof SupportedEngineLifecycle$ === "object");
assert(typeof SwitchoverBlueGreenDeploymentRequest$ === "object");
assert(typeof SwitchoverBlueGreenDeploymentResponse$ === "object");
assert(typeof SwitchoverDetail$ === "object");
assert(typeof SwitchoverGlobalClusterMessage$ === "object");
assert(typeof SwitchoverGlobalClusterResult$ === "object");
assert(typeof SwitchoverReadReplicaMessage$ === "object");
assert(typeof SwitchoverReadReplicaResult$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagListMessage$ === "object");
assert(typeof TagSpecification$ === "object");
assert(typeof TargetHealth$ === "object");
assert(typeof TenantDatabase$ === "object");
assert(typeof TenantDatabasePendingModifiedValues$ === "object");
assert(typeof TenantDatabasesMessage$ === "object");
assert(typeof Timezone$ === "object");
assert(typeof UpgradeTarget$ === "object");
assert(typeof UserAuthConfig$ === "object");
assert(typeof UserAuthConfigInfo$ === "object");
assert(typeof ValidAdditionalStorageOptions$ === "object");
assert(typeof ValidDBInstanceModificationsMessage$ === "object");
assert(typeof ValidStorageOptions$ === "object");
assert(typeof ValidVolumeOptions$ === "object");
assert(typeof VpcSecurityGroupMembership$ === "object");
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
assert(typeof AuthorizationAlreadyExistsFault$ === "object");
assert(AuthorizationNotFoundFault.prototype instanceof RDSServiceException);
assert(typeof AuthorizationNotFoundFault$ === "object");
assert(AuthorizationQuotaExceededFault.prototype instanceof RDSServiceException);
assert(typeof AuthorizationQuotaExceededFault$ === "object");
assert(BackupPolicyNotFoundFault.prototype instanceof RDSServiceException);
assert(typeof BackupPolicyNotFoundFault$ === "object");
assert(BlueGreenDeploymentAlreadyExistsFault.prototype instanceof RDSServiceException);
assert(typeof BlueGreenDeploymentAlreadyExistsFault$ === "object");
assert(BlueGreenDeploymentNotFoundFault.prototype instanceof RDSServiceException);
assert(typeof BlueGreenDeploymentNotFoundFault$ === "object");
assert(CertificateNotFoundFault.prototype instanceof RDSServiceException);
assert(typeof CertificateNotFoundFault$ === "object");
assert(CreateCustomDBEngineVersionFault.prototype instanceof RDSServiceException);
assert(typeof CreateCustomDBEngineVersionFault$ === "object");
assert(CustomAvailabilityZoneNotFoundFault.prototype instanceof RDSServiceException);
assert(typeof CustomAvailabilityZoneNotFoundFault$ === "object");
assert(CustomDBEngineVersionAlreadyExistsFault.prototype instanceof RDSServiceException);
assert(typeof CustomDBEngineVersionAlreadyExistsFault$ === "object");
assert(CustomDBEngineVersionNotFoundFault.prototype instanceof RDSServiceException);
assert(typeof CustomDBEngineVersionNotFoundFault$ === "object");
assert(CustomDBEngineVersionQuotaExceededFault.prototype instanceof RDSServiceException);
assert(typeof CustomDBEngineVersionQuotaExceededFault$ === "object");
assert(DBClusterAlreadyExistsFault.prototype instanceof RDSServiceException);
assert(typeof DBClusterAlreadyExistsFault$ === "object");
assert(DBClusterAutomatedBackupNotFoundFault.prototype instanceof RDSServiceException);
assert(typeof DBClusterAutomatedBackupNotFoundFault$ === "object");
assert(DBClusterAutomatedBackupQuotaExceededFault.prototype instanceof RDSServiceException);
assert(typeof DBClusterAutomatedBackupQuotaExceededFault$ === "object");
assert(DBClusterBacktrackNotFoundFault.prototype instanceof RDSServiceException);
assert(typeof DBClusterBacktrackNotFoundFault$ === "object");
assert(DBClusterEndpointAlreadyExistsFault.prototype instanceof RDSServiceException);
assert(typeof DBClusterEndpointAlreadyExistsFault$ === "object");
assert(DBClusterEndpointNotFoundFault.prototype instanceof RDSServiceException);
assert(typeof DBClusterEndpointNotFoundFault$ === "object");
assert(DBClusterEndpointQuotaExceededFault.prototype instanceof RDSServiceException);
assert(typeof DBClusterEndpointQuotaExceededFault$ === "object");
assert(DBClusterNotFoundFault.prototype instanceof RDSServiceException);
assert(typeof DBClusterNotFoundFault$ === "object");
assert(DBClusterParameterGroupNotFoundFault.prototype instanceof RDSServiceException);
assert(typeof DBClusterParameterGroupNotFoundFault$ === "object");
assert(DBClusterQuotaExceededFault.prototype instanceof RDSServiceException);
assert(typeof DBClusterQuotaExceededFault$ === "object");
assert(DBClusterRoleAlreadyExistsFault.prototype instanceof RDSServiceException);
assert(typeof DBClusterRoleAlreadyExistsFault$ === "object");
assert(DBClusterRoleNotFoundFault.prototype instanceof RDSServiceException);
assert(typeof DBClusterRoleNotFoundFault$ === "object");
assert(DBClusterRoleQuotaExceededFault.prototype instanceof RDSServiceException);
assert(typeof DBClusterRoleQuotaExceededFault$ === "object");
assert(DBClusterSnapshotAlreadyExistsFault.prototype instanceof RDSServiceException);
assert(typeof DBClusterSnapshotAlreadyExistsFault$ === "object");
assert(DBClusterSnapshotNotFoundFault.prototype instanceof RDSServiceException);
assert(typeof DBClusterSnapshotNotFoundFault$ === "object");
assert(DBInstanceAlreadyExistsFault.prototype instanceof RDSServiceException);
assert(typeof DBInstanceAlreadyExistsFault$ === "object");
assert(DBInstanceAutomatedBackupNotFoundFault.prototype instanceof RDSServiceException);
assert(typeof DBInstanceAutomatedBackupNotFoundFault$ === "object");
assert(DBInstanceAutomatedBackupQuotaExceededFault.prototype instanceof RDSServiceException);
assert(typeof DBInstanceAutomatedBackupQuotaExceededFault$ === "object");
assert(DBInstanceNotFoundFault.prototype instanceof RDSServiceException);
assert(typeof DBInstanceNotFoundFault$ === "object");
assert(DBInstanceNotReadyFault.prototype instanceof RDSServiceException);
assert(typeof DBInstanceNotReadyFault$ === "object");
assert(DBInstanceRoleAlreadyExistsFault.prototype instanceof RDSServiceException);
assert(typeof DBInstanceRoleAlreadyExistsFault$ === "object");
assert(DBInstanceRoleNotFoundFault.prototype instanceof RDSServiceException);
assert(typeof DBInstanceRoleNotFoundFault$ === "object");
assert(DBInstanceRoleQuotaExceededFault.prototype instanceof RDSServiceException);
assert(typeof DBInstanceRoleQuotaExceededFault$ === "object");
assert(DBLogFileNotFoundFault.prototype instanceof RDSServiceException);
assert(typeof DBLogFileNotFoundFault$ === "object");
assert(DBParameterGroupAlreadyExistsFault.prototype instanceof RDSServiceException);
assert(typeof DBParameterGroupAlreadyExistsFault$ === "object");
assert(DBParameterGroupNotFoundFault.prototype instanceof RDSServiceException);
assert(typeof DBParameterGroupNotFoundFault$ === "object");
assert(DBParameterGroupQuotaExceededFault.prototype instanceof RDSServiceException);
assert(typeof DBParameterGroupQuotaExceededFault$ === "object");
assert(DBProxyAlreadyExistsFault.prototype instanceof RDSServiceException);
assert(typeof DBProxyAlreadyExistsFault$ === "object");
assert(DBProxyEndpointAlreadyExistsFault.prototype instanceof RDSServiceException);
assert(typeof DBProxyEndpointAlreadyExistsFault$ === "object");
assert(DBProxyEndpointNotFoundFault.prototype instanceof RDSServiceException);
assert(typeof DBProxyEndpointNotFoundFault$ === "object");
assert(DBProxyEndpointQuotaExceededFault.prototype instanceof RDSServiceException);
assert(typeof DBProxyEndpointQuotaExceededFault$ === "object");
assert(DBProxyNotFoundFault.prototype instanceof RDSServiceException);
assert(typeof DBProxyNotFoundFault$ === "object");
assert(DBProxyQuotaExceededFault.prototype instanceof RDSServiceException);
assert(typeof DBProxyQuotaExceededFault$ === "object");
assert(DBProxyTargetAlreadyRegisteredFault.prototype instanceof RDSServiceException);
assert(typeof DBProxyTargetAlreadyRegisteredFault$ === "object");
assert(DBProxyTargetGroupNotFoundFault.prototype instanceof RDSServiceException);
assert(typeof DBProxyTargetGroupNotFoundFault$ === "object");
assert(DBProxyTargetNotFoundFault.prototype instanceof RDSServiceException);
assert(typeof DBProxyTargetNotFoundFault$ === "object");
assert(DBSecurityGroupAlreadyExistsFault.prototype instanceof RDSServiceException);
assert(typeof DBSecurityGroupAlreadyExistsFault$ === "object");
assert(DBSecurityGroupNotFoundFault.prototype instanceof RDSServiceException);
assert(typeof DBSecurityGroupNotFoundFault$ === "object");
assert(DBSecurityGroupNotSupportedFault.prototype instanceof RDSServiceException);
assert(typeof DBSecurityGroupNotSupportedFault$ === "object");
assert(DBSecurityGroupQuotaExceededFault.prototype instanceof RDSServiceException);
assert(typeof DBSecurityGroupQuotaExceededFault$ === "object");
assert(DBShardGroupAlreadyExistsFault.prototype instanceof RDSServiceException);
assert(typeof DBShardGroupAlreadyExistsFault$ === "object");
assert(DBShardGroupNotFoundFault.prototype instanceof RDSServiceException);
assert(typeof DBShardGroupNotFoundFault$ === "object");
assert(DBSnapshotAlreadyExistsFault.prototype instanceof RDSServiceException);
assert(typeof DBSnapshotAlreadyExistsFault$ === "object");
assert(DBSnapshotNotFoundFault.prototype instanceof RDSServiceException);
assert(typeof DBSnapshotNotFoundFault$ === "object");
assert(DBSnapshotTenantDatabaseNotFoundFault.prototype instanceof RDSServiceException);
assert(typeof DBSnapshotTenantDatabaseNotFoundFault$ === "object");
assert(DBSubnetGroupAlreadyExistsFault.prototype instanceof RDSServiceException);
assert(typeof DBSubnetGroupAlreadyExistsFault$ === "object");
assert(DBSubnetGroupDoesNotCoverEnoughAZs.prototype instanceof RDSServiceException);
assert(typeof DBSubnetGroupDoesNotCoverEnoughAZs$ === "object");
assert(DBSubnetGroupNotAllowedFault.prototype instanceof RDSServiceException);
assert(typeof DBSubnetGroupNotAllowedFault$ === "object");
assert(DBSubnetGroupNotFoundFault.prototype instanceof RDSServiceException);
assert(typeof DBSubnetGroupNotFoundFault$ === "object");
assert(DBSubnetGroupQuotaExceededFault.prototype instanceof RDSServiceException);
assert(typeof DBSubnetGroupQuotaExceededFault$ === "object");
assert(DBSubnetQuotaExceededFault.prototype instanceof RDSServiceException);
assert(typeof DBSubnetQuotaExceededFault$ === "object");
assert(DBUpgradeDependencyFailureFault.prototype instanceof RDSServiceException);
assert(typeof DBUpgradeDependencyFailureFault$ === "object");
assert(DomainNotFoundFault.prototype instanceof RDSServiceException);
assert(typeof DomainNotFoundFault$ === "object");
assert(Ec2ImagePropertiesNotSupportedFault.prototype instanceof RDSServiceException);
assert(typeof Ec2ImagePropertiesNotSupportedFault$ === "object");
assert(EventSubscriptionQuotaExceededFault.prototype instanceof RDSServiceException);
assert(typeof EventSubscriptionQuotaExceededFault$ === "object");
assert(ExportTaskAlreadyExistsFault.prototype instanceof RDSServiceException);
assert(typeof ExportTaskAlreadyExistsFault$ === "object");
assert(ExportTaskNotFoundFault.prototype instanceof RDSServiceException);
assert(typeof ExportTaskNotFoundFault$ === "object");
assert(GlobalClusterAlreadyExistsFault.prototype instanceof RDSServiceException);
assert(typeof GlobalClusterAlreadyExistsFault$ === "object");
assert(GlobalClusterNotFoundFault.prototype instanceof RDSServiceException);
assert(typeof GlobalClusterNotFoundFault$ === "object");
assert(GlobalClusterQuotaExceededFault.prototype instanceof RDSServiceException);
assert(typeof GlobalClusterQuotaExceededFault$ === "object");
assert(IamRoleMissingPermissionsFault.prototype instanceof RDSServiceException);
assert(typeof IamRoleMissingPermissionsFault$ === "object");
assert(IamRoleNotFoundFault.prototype instanceof RDSServiceException);
assert(typeof IamRoleNotFoundFault$ === "object");
assert(InstanceQuotaExceededFault.prototype instanceof RDSServiceException);
assert(typeof InstanceQuotaExceededFault$ === "object");
assert(InsufficientAvailableIPsInSubnetFault.prototype instanceof RDSServiceException);
assert(typeof InsufficientAvailableIPsInSubnetFault$ === "object");
assert(InsufficientDBClusterCapacityFault.prototype instanceof RDSServiceException);
assert(typeof InsufficientDBClusterCapacityFault$ === "object");
assert(InsufficientDBInstanceCapacityFault.prototype instanceof RDSServiceException);
assert(typeof InsufficientDBInstanceCapacityFault$ === "object");
assert(InsufficientStorageClusterCapacityFault.prototype instanceof RDSServiceException);
assert(typeof InsufficientStorageClusterCapacityFault$ === "object");
assert(IntegrationAlreadyExistsFault.prototype instanceof RDSServiceException);
assert(typeof IntegrationAlreadyExistsFault$ === "object");
assert(IntegrationConflictOperationFault.prototype instanceof RDSServiceException);
assert(typeof IntegrationConflictOperationFault$ === "object");
assert(IntegrationNotFoundFault.prototype instanceof RDSServiceException);
assert(typeof IntegrationNotFoundFault$ === "object");
assert(IntegrationQuotaExceededFault.prototype instanceof RDSServiceException);
assert(typeof IntegrationQuotaExceededFault$ === "object");
assert(InvalidBlueGreenDeploymentStateFault.prototype instanceof RDSServiceException);
assert(typeof InvalidBlueGreenDeploymentStateFault$ === "object");
assert(InvalidCustomDBEngineVersionStateFault.prototype instanceof RDSServiceException);
assert(typeof InvalidCustomDBEngineVersionStateFault$ === "object");
assert(InvalidDBClusterAutomatedBackupStateFault.prototype instanceof RDSServiceException);
assert(typeof InvalidDBClusterAutomatedBackupStateFault$ === "object");
assert(InvalidDBClusterCapacityFault.prototype instanceof RDSServiceException);
assert(typeof InvalidDBClusterCapacityFault$ === "object");
assert(InvalidDBClusterEndpointStateFault.prototype instanceof RDSServiceException);
assert(typeof InvalidDBClusterEndpointStateFault$ === "object");
assert(InvalidDBClusterSnapshotStateFault.prototype instanceof RDSServiceException);
assert(typeof InvalidDBClusterSnapshotStateFault$ === "object");
assert(InvalidDBClusterStateFault.prototype instanceof RDSServiceException);
assert(typeof InvalidDBClusterStateFault$ === "object");
assert(InvalidDBInstanceAutomatedBackupStateFault.prototype instanceof RDSServiceException);
assert(typeof InvalidDBInstanceAutomatedBackupStateFault$ === "object");
assert(InvalidDBInstanceStateFault.prototype instanceof RDSServiceException);
assert(typeof InvalidDBInstanceStateFault$ === "object");
assert(InvalidDBParameterGroupStateFault.prototype instanceof RDSServiceException);
assert(typeof InvalidDBParameterGroupStateFault$ === "object");
assert(InvalidDBProxyEndpointStateFault.prototype instanceof RDSServiceException);
assert(typeof InvalidDBProxyEndpointStateFault$ === "object");
assert(InvalidDBProxyStateFault.prototype instanceof RDSServiceException);
assert(typeof InvalidDBProxyStateFault$ === "object");
assert(InvalidDBSecurityGroupStateFault.prototype instanceof RDSServiceException);
assert(typeof InvalidDBSecurityGroupStateFault$ === "object");
assert(InvalidDBShardGroupStateFault.prototype instanceof RDSServiceException);
assert(typeof InvalidDBShardGroupStateFault$ === "object");
assert(InvalidDBSnapshotStateFault.prototype instanceof RDSServiceException);
assert(typeof InvalidDBSnapshotStateFault$ === "object");
assert(InvalidDBSubnetGroupFault.prototype instanceof RDSServiceException);
assert(typeof InvalidDBSubnetGroupFault$ === "object");
assert(InvalidDBSubnetGroupStateFault.prototype instanceof RDSServiceException);
assert(typeof InvalidDBSubnetGroupStateFault$ === "object");
assert(InvalidDBSubnetStateFault.prototype instanceof RDSServiceException);
assert(typeof InvalidDBSubnetStateFault$ === "object");
assert(InvalidEventSubscriptionStateFault.prototype instanceof RDSServiceException);
assert(typeof InvalidEventSubscriptionStateFault$ === "object");
assert(InvalidExportOnlyFault.prototype instanceof RDSServiceException);
assert(typeof InvalidExportOnlyFault$ === "object");
assert(InvalidExportSourceStateFault.prototype instanceof RDSServiceException);
assert(typeof InvalidExportSourceStateFault$ === "object");
assert(InvalidExportTaskStateFault.prototype instanceof RDSServiceException);
assert(typeof InvalidExportTaskStateFault$ === "object");
assert(InvalidGlobalClusterStateFault.prototype instanceof RDSServiceException);
assert(typeof InvalidGlobalClusterStateFault$ === "object");
assert(InvalidIntegrationStateFault.prototype instanceof RDSServiceException);
assert(typeof InvalidIntegrationStateFault$ === "object");
assert(InvalidOptionGroupStateFault.prototype instanceof RDSServiceException);
assert(typeof InvalidOptionGroupStateFault$ === "object");
assert(InvalidResourceStateFault.prototype instanceof RDSServiceException);
assert(typeof InvalidResourceStateFault$ === "object");
assert(InvalidRestoreFault.prototype instanceof RDSServiceException);
assert(typeof InvalidRestoreFault$ === "object");
assert(InvalidS3BucketFault.prototype instanceof RDSServiceException);
assert(typeof InvalidS3BucketFault$ === "object");
assert(InvalidSubnet.prototype instanceof RDSServiceException);
assert(typeof InvalidSubnet$ === "object");
assert(InvalidVPCNetworkStateFault.prototype instanceof RDSServiceException);
assert(typeof InvalidVPCNetworkStateFault$ === "object");
assert(KMSKeyNotAccessibleFault.prototype instanceof RDSServiceException);
assert(typeof KMSKeyNotAccessibleFault$ === "object");
assert(MaxDBShardGroupLimitReached.prototype instanceof RDSServiceException);
assert(typeof MaxDBShardGroupLimitReached$ === "object");
assert(NetworkTypeNotSupported.prototype instanceof RDSServiceException);
assert(typeof NetworkTypeNotSupported$ === "object");
assert(OptionGroupAlreadyExistsFault.prototype instanceof RDSServiceException);
assert(typeof OptionGroupAlreadyExistsFault$ === "object");
assert(OptionGroupNotFoundFault.prototype instanceof RDSServiceException);
assert(typeof OptionGroupNotFoundFault$ === "object");
assert(OptionGroupQuotaExceededFault.prototype instanceof RDSServiceException);
assert(typeof OptionGroupQuotaExceededFault$ === "object");
assert(PointInTimeRestoreNotEnabledFault.prototype instanceof RDSServiceException);
assert(typeof PointInTimeRestoreNotEnabledFault$ === "object");
assert(ProvisionedIopsNotAvailableInAZFault.prototype instanceof RDSServiceException);
assert(typeof ProvisionedIopsNotAvailableInAZFault$ === "object");
assert(ReservedDBInstanceAlreadyExistsFault.prototype instanceof RDSServiceException);
assert(typeof ReservedDBInstanceAlreadyExistsFault$ === "object");
assert(ReservedDBInstanceNotFoundFault.prototype instanceof RDSServiceException);
assert(typeof ReservedDBInstanceNotFoundFault$ === "object");
assert(ReservedDBInstanceQuotaExceededFault.prototype instanceof RDSServiceException);
assert(typeof ReservedDBInstanceQuotaExceededFault$ === "object");
assert(ReservedDBInstancesOfferingNotFoundFault.prototype instanceof RDSServiceException);
assert(typeof ReservedDBInstancesOfferingNotFoundFault$ === "object");
assert(ResourceNotFoundFault.prototype instanceof RDSServiceException);
assert(typeof ResourceNotFoundFault$ === "object");
assert(SharedSnapshotQuotaExceededFault.prototype instanceof RDSServiceException);
assert(typeof SharedSnapshotQuotaExceededFault$ === "object");
assert(SnapshotQuotaExceededFault.prototype instanceof RDSServiceException);
assert(typeof SnapshotQuotaExceededFault$ === "object");
assert(SNSInvalidTopicFault.prototype instanceof RDSServiceException);
assert(typeof SNSInvalidTopicFault$ === "object");
assert(SNSNoAuthorizationFault.prototype instanceof RDSServiceException);
assert(typeof SNSNoAuthorizationFault$ === "object");
assert(SNSTopicArnNotFoundFault.prototype instanceof RDSServiceException);
assert(typeof SNSTopicArnNotFoundFault$ === "object");
assert(SourceClusterNotSupportedFault.prototype instanceof RDSServiceException);
assert(typeof SourceClusterNotSupportedFault$ === "object");
assert(SourceDatabaseNotSupportedFault.prototype instanceof RDSServiceException);
assert(typeof SourceDatabaseNotSupportedFault$ === "object");
assert(SourceNotFoundFault.prototype instanceof RDSServiceException);
assert(typeof SourceNotFoundFault$ === "object");
assert(StorageQuotaExceededFault.prototype instanceof RDSServiceException);
assert(typeof StorageQuotaExceededFault$ === "object");
assert(StorageTypeNotAvailableFault.prototype instanceof RDSServiceException);
assert(typeof StorageTypeNotAvailableFault$ === "object");
assert(StorageTypeNotSupportedFault.prototype instanceof RDSServiceException);
assert(typeof StorageTypeNotSupportedFault$ === "object");
assert(SubnetAlreadyInUse.prototype instanceof RDSServiceException);
assert(typeof SubnetAlreadyInUse$ === "object");
assert(SubscriptionAlreadyExistFault.prototype instanceof RDSServiceException);
assert(typeof SubscriptionAlreadyExistFault$ === "object");
assert(SubscriptionCategoryNotFoundFault.prototype instanceof RDSServiceException);
assert(typeof SubscriptionCategoryNotFoundFault$ === "object");
assert(SubscriptionNotFoundFault.prototype instanceof RDSServiceException);
assert(typeof SubscriptionNotFoundFault$ === "object");
assert(TenantDatabaseAlreadyExistsFault.prototype instanceof RDSServiceException);
assert(typeof TenantDatabaseAlreadyExistsFault$ === "object");
assert(TenantDatabaseNotFoundFault.prototype instanceof RDSServiceException);
assert(typeof TenantDatabaseNotFoundFault$ === "object");
assert(TenantDatabaseQuotaExceededFault.prototype instanceof RDSServiceException);
assert(typeof TenantDatabaseQuotaExceededFault$ === "object");
assert(UnsupportedDBEngineVersionFault.prototype instanceof RDSServiceException);
assert(typeof UnsupportedDBEngineVersionFault$ === "object");
assert(VpcEncryptionControlViolationException.prototype instanceof RDSServiceException);
assert(typeof VpcEncryptionControlViolationException$ === "object");
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
