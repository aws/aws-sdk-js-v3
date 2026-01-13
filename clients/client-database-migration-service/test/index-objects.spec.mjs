import {
  AccessDeniedFault,
  AccessDeniedFault$,
  AccountQuota$,
  AddTagsToResource$,
  AddTagsToResourceCommand,
  AddTagsToResourceMessage$,
  AddTagsToResourceResponse$,
  ApplyPendingMaintenanceAction$,
  ApplyPendingMaintenanceActionCommand,
  ApplyPendingMaintenanceActionMessage$,
  ApplyPendingMaintenanceActionResponse$,
  AssessmentReportType,
  AuthMechanismValue,
  AuthTypeValue,
  AvailabilityZone$,
  BatchStartRecommendations$,
  BatchStartRecommendationsCommand,
  BatchStartRecommendationsErrorEntry$,
  BatchStartRecommendationsRequest$,
  BatchStartRecommendationsResponse$,
  CancelMetadataModelConversion$,
  CancelMetadataModelConversionCommand,
  CancelMetadataModelConversionMessage$,
  CancelMetadataModelConversionResponse$,
  CancelMetadataModelCreation$,
  CancelMetadataModelCreationCommand,
  CancelMetadataModelCreationMessage$,
  CancelMetadataModelCreationResponse$,
  CancelReplicationTaskAssessmentRun$,
  CancelReplicationTaskAssessmentRunCommand,
  CancelReplicationTaskAssessmentRunMessage$,
  CancelReplicationTaskAssessmentRunResponse$,
  CannedAclForObjectsValue,
  Certificate$,
  CharLengthSemantics,
  CollectorHealthCheck$,
  CollectorNotFoundFault,
  CollectorNotFoundFault$,
  CollectorResponse$,
  CollectorShortInfoResponse$,
  CollectorStatus,
  CompressionTypeValue,
  ComputeConfig$,
  Connection$,
  CreateDataMigration$,
  CreateDataMigrationCommand,
  CreateDataMigrationMessage$,
  CreateDataMigrationResponse$,
  CreateDataProvider$,
  CreateDataProviderCommand,
  CreateDataProviderMessage$,
  CreateDataProviderResponse$,
  CreateEndpoint$,
  CreateEndpointCommand,
  CreateEndpointMessage$,
  CreateEndpointResponse$,
  CreateEventSubscription$,
  CreateEventSubscriptionCommand,
  CreateEventSubscriptionMessage$,
  CreateEventSubscriptionResponse$,
  CreateFleetAdvisorCollector$,
  CreateFleetAdvisorCollectorCommand,
  CreateFleetAdvisorCollectorRequest$,
  CreateFleetAdvisorCollectorResponse$,
  CreateInstanceProfile$,
  CreateInstanceProfileCommand,
  CreateInstanceProfileMessage$,
  CreateInstanceProfileResponse$,
  CreateMigrationProject$,
  CreateMigrationProjectCommand,
  CreateMigrationProjectMessage$,
  CreateMigrationProjectResponse$,
  CreateReplicationConfig$,
  CreateReplicationConfigCommand,
  CreateReplicationConfigMessage$,
  CreateReplicationConfigResponse$,
  CreateReplicationInstance$,
  CreateReplicationInstanceCommand,
  CreateReplicationInstanceMessage$,
  CreateReplicationInstanceResponse$,
  CreateReplicationSubnetGroup$,
  CreateReplicationSubnetGroupCommand,
  CreateReplicationSubnetGroupMessage$,
  CreateReplicationSubnetGroupResponse$,
  CreateReplicationTask$,
  CreateReplicationTaskCommand,
  CreateReplicationTaskMessage$,
  CreateReplicationTaskResponse$,
  DatabaseInstanceSoftwareDetailsResponse$,
  DatabaseMigrationService,
  DatabaseMigrationServiceClient,
  DatabaseMigrationServiceServiceException,
  DatabaseMode,
  DatabaseResponse$,
  DatabaseShortInfoResponse$,
  DataFormatValue,
  DataMigration$,
  DataMigrationSettings$,
  DataMigrationStatistics$,
  DataProvider$,
  DataProviderDescriptor$,
  DataProviderDescriptorDefinition$,
  DataProviderSettings$,
  DatePartitionDelimiterValue,
  DatePartitionSequenceValue,
  DefaultErrorDetails$,
  DeleteCertificate$,
  DeleteCertificateCommand,
  DeleteCertificateMessage$,
  DeleteCertificateResponse$,
  DeleteCollectorRequest$,
  DeleteConnection$,
  DeleteConnectionCommand,
  DeleteConnectionMessage$,
  DeleteConnectionResponse$,
  DeleteDataMigration$,
  DeleteDataMigrationCommand,
  DeleteDataMigrationMessage$,
  DeleteDataMigrationResponse$,
  DeleteDataProvider$,
  DeleteDataProviderCommand,
  DeleteDataProviderMessage$,
  DeleteDataProviderResponse$,
  DeleteEndpoint$,
  DeleteEndpointCommand,
  DeleteEndpointMessage$,
  DeleteEndpointResponse$,
  DeleteEventSubscription$,
  DeleteEventSubscriptionCommand,
  DeleteEventSubscriptionMessage$,
  DeleteEventSubscriptionResponse$,
  DeleteFleetAdvisorCollector$,
  DeleteFleetAdvisorCollectorCommand,
  DeleteFleetAdvisorDatabases$,
  DeleteFleetAdvisorDatabasesCommand,
  DeleteFleetAdvisorDatabasesRequest$,
  DeleteFleetAdvisorDatabasesResponse$,
  DeleteInstanceProfile$,
  DeleteInstanceProfileCommand,
  DeleteInstanceProfileMessage$,
  DeleteInstanceProfileResponse$,
  DeleteMigrationProject$,
  DeleteMigrationProjectCommand,
  DeleteMigrationProjectMessage$,
  DeleteMigrationProjectResponse$,
  DeleteReplicationConfig$,
  DeleteReplicationConfigCommand,
  DeleteReplicationConfigMessage$,
  DeleteReplicationConfigResponse$,
  DeleteReplicationInstance$,
  DeleteReplicationInstanceCommand,
  DeleteReplicationInstanceMessage$,
  DeleteReplicationInstanceResponse$,
  DeleteReplicationSubnetGroup$,
  DeleteReplicationSubnetGroupCommand,
  DeleteReplicationSubnetGroupMessage$,
  DeleteReplicationSubnetGroupResponse$,
  DeleteReplicationTask$,
  DeleteReplicationTaskAssessmentRun$,
  DeleteReplicationTaskAssessmentRunCommand,
  DeleteReplicationTaskAssessmentRunMessage$,
  DeleteReplicationTaskAssessmentRunResponse$,
  DeleteReplicationTaskCommand,
  DeleteReplicationTaskMessage$,
  DeleteReplicationTaskResponse$,
  DescribeAccountAttributes$,
  DescribeAccountAttributesCommand,
  DescribeAccountAttributesMessage$,
  DescribeAccountAttributesResponse$,
  DescribeApplicableIndividualAssessments$,
  DescribeApplicableIndividualAssessmentsCommand,
  DescribeApplicableIndividualAssessmentsMessage$,
  DescribeApplicableIndividualAssessmentsResponse$,
  DescribeCertificates$,
  DescribeCertificatesCommand,
  DescribeCertificatesMessage$,
  DescribeCertificatesResponse$,
  DescribeConnections$,
  DescribeConnectionsCommand,
  DescribeConnectionsMessage$,
  DescribeConnectionsResponse$,
  DescribeConversionConfiguration$,
  DescribeConversionConfigurationCommand,
  DescribeConversionConfigurationMessage$,
  DescribeConversionConfigurationResponse$,
  DescribeDataMigrations$,
  DescribeDataMigrationsCommand,
  DescribeDataMigrationsMessage$,
  DescribeDataMigrationsResponse$,
  DescribeDataProviders$,
  DescribeDataProvidersCommand,
  DescribeDataProvidersMessage$,
  DescribeDataProvidersResponse$,
  DescribeEndpoints$,
  DescribeEndpointsCommand,
  DescribeEndpointSettings$,
  DescribeEndpointSettingsCommand,
  DescribeEndpointSettingsMessage$,
  DescribeEndpointSettingsResponse$,
  DescribeEndpointsMessage$,
  DescribeEndpointsResponse$,
  DescribeEndpointTypes$,
  DescribeEndpointTypesCommand,
  DescribeEndpointTypesMessage$,
  DescribeEndpointTypesResponse$,
  DescribeEngineVersions$,
  DescribeEngineVersionsCommand,
  DescribeEngineVersionsMessage$,
  DescribeEngineVersionsResponse$,
  DescribeEventCategories$,
  DescribeEventCategoriesCommand,
  DescribeEventCategoriesMessage$,
  DescribeEventCategoriesResponse$,
  DescribeEvents$,
  DescribeEventsCommand,
  DescribeEventsMessage$,
  DescribeEventsResponse$,
  DescribeEventSubscriptions$,
  DescribeEventSubscriptionsCommand,
  DescribeEventSubscriptionsMessage$,
  DescribeEventSubscriptionsResponse$,
  DescribeExtensionPackAssociations$,
  DescribeExtensionPackAssociationsCommand,
  DescribeExtensionPackAssociationsMessage$,
  DescribeExtensionPackAssociationsResponse$,
  DescribeFleetAdvisorCollectors$,
  DescribeFleetAdvisorCollectorsCommand,
  DescribeFleetAdvisorCollectorsRequest$,
  DescribeFleetAdvisorCollectorsResponse$,
  DescribeFleetAdvisorDatabases$,
  DescribeFleetAdvisorDatabasesCommand,
  DescribeFleetAdvisorDatabasesRequest$,
  DescribeFleetAdvisorDatabasesResponse$,
  DescribeFleetAdvisorLsaAnalysis$,
  DescribeFleetAdvisorLsaAnalysisCommand,
  DescribeFleetAdvisorLsaAnalysisRequest$,
  DescribeFleetAdvisorLsaAnalysisResponse$,
  DescribeFleetAdvisorSchemaObjectSummary$,
  DescribeFleetAdvisorSchemaObjectSummaryCommand,
  DescribeFleetAdvisorSchemaObjectSummaryRequest$,
  DescribeFleetAdvisorSchemaObjectSummaryResponse$,
  DescribeFleetAdvisorSchemas$,
  DescribeFleetAdvisorSchemasCommand,
  DescribeFleetAdvisorSchemasRequest$,
  DescribeFleetAdvisorSchemasResponse$,
  DescribeInstanceProfiles$,
  DescribeInstanceProfilesCommand,
  DescribeInstanceProfilesMessage$,
  DescribeInstanceProfilesResponse$,
  DescribeMetadataModel$,
  DescribeMetadataModelAssessments$,
  DescribeMetadataModelAssessmentsCommand,
  DescribeMetadataModelAssessmentsMessage$,
  DescribeMetadataModelAssessmentsResponse$,
  DescribeMetadataModelChildren$,
  DescribeMetadataModelChildrenCommand,
  DescribeMetadataModelChildrenMessage$,
  DescribeMetadataModelChildrenResponse$,
  DescribeMetadataModelCommand,
  DescribeMetadataModelConversions$,
  DescribeMetadataModelConversionsCommand,
  DescribeMetadataModelConversionsMessage$,
  DescribeMetadataModelConversionsResponse$,
  DescribeMetadataModelCreations$,
  DescribeMetadataModelCreationsCommand,
  DescribeMetadataModelCreationsMessage$,
  DescribeMetadataModelCreationsResponse$,
  DescribeMetadataModelExportsAsScript$,
  DescribeMetadataModelExportsAsScriptCommand,
  DescribeMetadataModelExportsAsScriptMessage$,
  DescribeMetadataModelExportsAsScriptResponse$,
  DescribeMetadataModelExportsToTarget$,
  DescribeMetadataModelExportsToTargetCommand,
  DescribeMetadataModelExportsToTargetMessage$,
  DescribeMetadataModelExportsToTargetResponse$,
  DescribeMetadataModelImports$,
  DescribeMetadataModelImportsCommand,
  DescribeMetadataModelImportsMessage$,
  DescribeMetadataModelImportsResponse$,
  DescribeMetadataModelMessage$,
  DescribeMetadataModelResponse$,
  DescribeMigrationProjects$,
  DescribeMigrationProjectsCommand,
  DescribeMigrationProjectsMessage$,
  DescribeMigrationProjectsResponse$,
  DescribeOrderableReplicationInstances$,
  DescribeOrderableReplicationInstancesCommand,
  DescribeOrderableReplicationInstancesMessage$,
  DescribeOrderableReplicationInstancesResponse$,
  DescribePendingMaintenanceActions$,
  DescribePendingMaintenanceActionsCommand,
  DescribePendingMaintenanceActionsMessage$,
  DescribePendingMaintenanceActionsResponse$,
  DescribeRecommendationLimitations$,
  DescribeRecommendationLimitationsCommand,
  DescribeRecommendationLimitationsRequest$,
  DescribeRecommendationLimitationsResponse$,
  DescribeRecommendations$,
  DescribeRecommendationsCommand,
  DescribeRecommendationsRequest$,
  DescribeRecommendationsResponse$,
  DescribeRefreshSchemasStatus$,
  DescribeRefreshSchemasStatusCommand,
  DescribeRefreshSchemasStatusMessage$,
  DescribeRefreshSchemasStatusResponse$,
  DescribeReplicationConfigs$,
  DescribeReplicationConfigsCommand,
  DescribeReplicationConfigsMessage$,
  DescribeReplicationConfigsResponse$,
  DescribeReplicationInstances$,
  DescribeReplicationInstancesCommand,
  DescribeReplicationInstancesMessage$,
  DescribeReplicationInstancesResponse$,
  DescribeReplicationInstanceTaskLogs$,
  DescribeReplicationInstanceTaskLogsCommand,
  DescribeReplicationInstanceTaskLogsMessage$,
  DescribeReplicationInstanceTaskLogsResponse$,
  DescribeReplications$,
  DescribeReplicationsCommand,
  DescribeReplicationsMessage$,
  DescribeReplicationsResponse$,
  DescribeReplicationSubnetGroups$,
  DescribeReplicationSubnetGroupsCommand,
  DescribeReplicationSubnetGroupsMessage$,
  DescribeReplicationSubnetGroupsResponse$,
  DescribeReplicationTableStatistics$,
  DescribeReplicationTableStatisticsCommand,
  DescribeReplicationTableStatisticsMessage$,
  DescribeReplicationTableStatisticsResponse$,
  DescribeReplicationTaskAssessmentResults$,
  DescribeReplicationTaskAssessmentResultsCommand,
  DescribeReplicationTaskAssessmentResultsMessage$,
  DescribeReplicationTaskAssessmentResultsResponse$,
  DescribeReplicationTaskAssessmentRuns$,
  DescribeReplicationTaskAssessmentRunsCommand,
  DescribeReplicationTaskAssessmentRunsMessage$,
  DescribeReplicationTaskAssessmentRunsResponse$,
  DescribeReplicationTaskIndividualAssessments$,
  DescribeReplicationTaskIndividualAssessmentsCommand,
  DescribeReplicationTaskIndividualAssessmentsMessage$,
  DescribeReplicationTaskIndividualAssessmentsResponse$,
  DescribeReplicationTasks$,
  DescribeReplicationTasksCommand,
  DescribeReplicationTasksMessage$,
  DescribeReplicationTasksResponse$,
  DescribeSchemas$,
  DescribeSchemasCommand,
  DescribeSchemasMessage$,
  DescribeSchemasResponse$,
  DescribeTableStatistics$,
  DescribeTableStatisticsCommand,
  DescribeTableStatisticsMessage$,
  DescribeTableStatisticsResponse$,
  DmsSslModeValue,
  DmsTransferSettings$,
  DocDbDataProviderSettings$,
  DocDbSettings$,
  DynamoDbSettings$,
  ElasticsearchSettings$,
  EncodingTypeValue,
  EncryptionModeValue,
  Endpoint$,
  EndpointSetting$,
  EndpointSettingTypeValue,
  EngineVersion$,
  ErrorDetails$,
  Event$,
  EventCategoryGroup$,
  EventSubscription$,
  ExportMetadataModelAssessment$,
  ExportMetadataModelAssessmentCommand,
  ExportMetadataModelAssessmentMessage$,
  ExportMetadataModelAssessmentResponse$,
  ExportMetadataModelAssessmentResultEntry$,
  ExportSqlDetails$,
  FailedDependencyFault,
  FailedDependencyFault$,
  Filter$,
  FleetAdvisorLsaAnalysisResponse$,
  FleetAdvisorSchemaObjectResponse$,
  GcpMySQLSettings$,
  GetTargetSelectionRules$,
  GetTargetSelectionRulesCommand,
  GetTargetSelectionRulesMessage$,
  GetTargetSelectionRulesResponse$,
  IbmDb2LuwDataProviderSettings$,
  IBMDb2Settings$,
  IbmDb2zOsDataProviderSettings$,
  ImportCertificate$,
  ImportCertificateCommand,
  ImportCertificateMessage$,
  ImportCertificateResponse$,
  InstanceProfile$,
  InsufficientResourceCapacityFault,
  InsufficientResourceCapacityFault$,
  InvalidCertificateFault,
  InvalidCertificateFault$,
  InvalidOperationFault,
  InvalidOperationFault$,
  InvalidResourceStateFault,
  InvalidResourceStateFault$,
  InvalidSubnet,
  InvalidSubnet$,
  InventoryData$,
  KafkaSaslMechanism,
  KafkaSecurityProtocol,
  KafkaSettings$,
  KafkaSslEndpointIdentificationAlgorithm,
  KerberosAuthenticationSettings$,
  KinesisSettings$,
  KMSAccessDeniedFault,
  KMSAccessDeniedFault$,
  KMSDisabledFault,
  KMSDisabledFault$,
  KMSFault,
  KMSFault$,
  KMSInvalidStateFault,
  KMSInvalidStateFault$,
  KMSKeyNotAccessibleFault,
  KMSKeyNotAccessibleFault$,
  KMSNotFoundFault,
  KMSNotFoundFault$,
  KMSThrottlingFault,
  KMSThrottlingFault$,
  LakehouseSettings$,
  Limitation$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceMessage$,
  ListTagsForResourceResponse$,
  LongVarcharMappingType,
  MariaDbDataProviderSettings$,
  MessageFormatValue,
  MetadataModelProperties$,
  MetadataModelReference$,
  MicrosoftSqlServerDataProviderSettings$,
  MicrosoftSQLServerSettings$,
  MigrationProject$,
  MigrationTypeValue,
  ModifyConversionConfiguration$,
  ModifyConversionConfigurationCommand,
  ModifyConversionConfigurationMessage$,
  ModifyConversionConfigurationResponse$,
  ModifyDataMigration$,
  ModifyDataMigrationCommand,
  ModifyDataMigrationMessage$,
  ModifyDataMigrationResponse$,
  ModifyDataProvider$,
  ModifyDataProviderCommand,
  ModifyDataProviderMessage$,
  ModifyDataProviderResponse$,
  ModifyEndpoint$,
  ModifyEndpointCommand,
  ModifyEndpointMessage$,
  ModifyEndpointResponse$,
  ModifyEventSubscription$,
  ModifyEventSubscriptionCommand,
  ModifyEventSubscriptionMessage$,
  ModifyEventSubscriptionResponse$,
  ModifyInstanceProfile$,
  ModifyInstanceProfileCommand,
  ModifyInstanceProfileMessage$,
  ModifyInstanceProfileResponse$,
  ModifyMigrationProject$,
  ModifyMigrationProjectCommand,
  ModifyMigrationProjectMessage$,
  ModifyMigrationProjectResponse$,
  ModifyReplicationConfig$,
  ModifyReplicationConfigCommand,
  ModifyReplicationConfigMessage$,
  ModifyReplicationConfigResponse$,
  ModifyReplicationInstance$,
  ModifyReplicationInstanceCommand,
  ModifyReplicationInstanceMessage$,
  ModifyReplicationInstanceResponse$,
  ModifyReplicationSubnetGroup$,
  ModifyReplicationSubnetGroupCommand,
  ModifyReplicationSubnetGroupMessage$,
  ModifyReplicationSubnetGroupResponse$,
  ModifyReplicationTask$,
  ModifyReplicationTaskCommand,
  ModifyReplicationTaskMessage$,
  ModifyReplicationTaskResponse$,
  MongoDbDataProviderSettings$,
  MongoDbSettings$,
  MoveReplicationTask$,
  MoveReplicationTaskCommand,
  MoveReplicationTaskMessage$,
  MoveReplicationTaskResponse$,
  MySQLAuthenticationMethod,
  MySqlDataProviderSettings$,
  MySQLSettings$,
  NeptuneSettings$,
  NestingLevelValue,
  OracleAuthenticationMethod,
  OracleDataProviderSettings$,
  OracleSettings$,
  OrderableReplicationInstance$,
  OriginTypeValue,
  paginateDescribeApplicableIndividualAssessments,
  paginateDescribeCertificates,
  paginateDescribeConnections,
  paginateDescribeDataMigrations,
  paginateDescribeDataProviders,
  paginateDescribeEndpoints,
  paginateDescribeEndpointSettings,
  paginateDescribeEndpointTypes,
  paginateDescribeEngineVersions,
  paginateDescribeEvents,
  paginateDescribeEventSubscriptions,
  paginateDescribeExtensionPackAssociations,
  paginateDescribeFleetAdvisorCollectors,
  paginateDescribeFleetAdvisorDatabases,
  paginateDescribeFleetAdvisorLsaAnalysis,
  paginateDescribeFleetAdvisorSchemaObjectSummary,
  paginateDescribeFleetAdvisorSchemas,
  paginateDescribeInstanceProfiles,
  paginateDescribeMetadataModelAssessments,
  paginateDescribeMetadataModelChildren,
  paginateDescribeMetadataModelConversions,
  paginateDescribeMetadataModelCreations,
  paginateDescribeMetadataModelExportsAsScript,
  paginateDescribeMetadataModelExportsToTarget,
  paginateDescribeMetadataModelImports,
  paginateDescribeMigrationProjects,
  paginateDescribeOrderableReplicationInstances,
  paginateDescribePendingMaintenanceActions,
  paginateDescribeRecommendationLimitations,
  paginateDescribeRecommendations,
  paginateDescribeReplicationConfigs,
  paginateDescribeReplicationInstances,
  paginateDescribeReplicationInstanceTaskLogs,
  paginateDescribeReplications,
  paginateDescribeReplicationSubnetGroups,
  paginateDescribeReplicationTableStatistics,
  paginateDescribeReplicationTaskAssessmentResults,
  paginateDescribeReplicationTaskAssessmentRuns,
  paginateDescribeReplicationTaskIndividualAssessments,
  paginateDescribeReplicationTasks,
  paginateDescribeSchemas,
  paginateDescribeTableStatistics,
  ParquetVersionValue,
  PendingMaintenanceAction$,
  PluginNameValue,
  PostgreSQLAuthenticationMethod,
  PostgreSqlDataProviderSettings$,
  PostgreSQLSettings$,
  PremigrationAssessmentStatus$,
  ProcessedObject$,
  Progress$,
  ProvisionData$,
  RdsConfiguration$,
  RdsRecommendation$,
  RdsRequirements$,
  RebootReplicationInstance$,
  RebootReplicationInstanceCommand,
  RebootReplicationInstanceMessage$,
  RebootReplicationInstanceResponse$,
  Recommendation$,
  RecommendationData$,
  RecommendationSettings$,
  RedisAuthTypeValue,
  RedisSettings$,
  RedshiftDataProviderSettings$,
  RedshiftSettings$,
  RefreshSchemas$,
  RefreshSchemasCommand,
  RefreshSchemasMessage$,
  RefreshSchemasResponse$,
  RefreshSchemasStatus$,
  RefreshSchemasStatusTypeValue,
  ReleaseStatusValues,
  ReloadOptionValue,
  ReloadReplicationTables$,
  ReloadReplicationTablesCommand,
  ReloadReplicationTablesMessage$,
  ReloadReplicationTablesResponse$,
  ReloadTables$,
  ReloadTablesCommand,
  ReloadTablesMessage$,
  ReloadTablesResponse$,
  RemoveTagsFromResource$,
  RemoveTagsFromResourceCommand,
  RemoveTagsFromResourceMessage$,
  RemoveTagsFromResourceResponse$,
  Replication$,
  ReplicationConfig$,
  ReplicationEndpointTypeValue,
  ReplicationInstance$,
  ReplicationInstanceTaskLog$,
  ReplicationPendingModifiedValues$,
  ReplicationStats$,
  ReplicationSubnetGroup$,
  ReplicationSubnetGroupDoesNotCoverEnoughAZs,
  ReplicationSubnetGroupDoesNotCoverEnoughAZs$,
  ReplicationTask$,
  ReplicationTaskAssessmentResult$,
  ReplicationTaskAssessmentRun$,
  ReplicationTaskAssessmentRunProgress$,
  ReplicationTaskAssessmentRunResultStatistic$,
  ReplicationTaskIndividualAssessment$,
  ReplicationTaskStats$,
  ResourceAlreadyExistsFault,
  ResourceAlreadyExistsFault$,
  ResourceNotFoundFault,
  ResourceNotFoundFault$,
  ResourcePendingMaintenanceActions$,
  ResourceQuotaExceededFault,
  ResourceQuotaExceededFault$,
  RunFleetAdvisorLsaAnalysis$,
  RunFleetAdvisorLsaAnalysisCommand,
  RunFleetAdvisorLsaAnalysisResponse$,
  S3AccessDeniedFault,
  S3AccessDeniedFault$,
  S3ResourceNotFoundFault,
  S3ResourceNotFoundFault$,
  S3Settings$,
  SafeguardPolicy,
  SCApplicationAttributes$,
  SchemaConversionRequest$,
  SchemaResponse$,
  SchemaShortInfoResponse$,
  ServerShortInfoResponse$,
  SNSInvalidTopicFault,
  SNSInvalidTopicFault$,
  SNSNoAuthorizationFault,
  SNSNoAuthorizationFault$,
  SourceDataSetting$,
  SourceType,
  SqlServerAuthenticationMethod,
  SslSecurityProtocolValue,
  StartDataMigration$,
  StartDataMigrationCommand,
  StartDataMigrationMessage$,
  StartDataMigrationResponse$,
  StartExtensionPackAssociation$,
  StartExtensionPackAssociationCommand,
  StartExtensionPackAssociationMessage$,
  StartExtensionPackAssociationResponse$,
  StartMetadataModelAssessment$,
  StartMetadataModelAssessmentCommand,
  StartMetadataModelAssessmentMessage$,
  StartMetadataModelAssessmentResponse$,
  StartMetadataModelConversion$,
  StartMetadataModelConversionCommand,
  StartMetadataModelConversionMessage$,
  StartMetadataModelConversionResponse$,
  StartMetadataModelCreation$,
  StartMetadataModelCreationCommand,
  StartMetadataModelCreationMessage$,
  StartMetadataModelCreationResponse$,
  StartMetadataModelExportAsScript$,
  StartMetadataModelExportAsScriptCommand,
  StartMetadataModelExportAsScriptMessage$,
  StartMetadataModelExportAsScriptResponse$,
  StartMetadataModelExportToTarget$,
  StartMetadataModelExportToTargetCommand,
  StartMetadataModelExportToTargetMessage$,
  StartMetadataModelExportToTargetResponse$,
  StartMetadataModelImport$,
  StartMetadataModelImportCommand,
  StartMetadataModelImportMessage$,
  StartMetadataModelImportResponse$,
  StartRecommendations$,
  StartRecommendationsCommand,
  StartRecommendationsRequest$,
  StartRecommendationsRequestEntry$,
  StartReplication$,
  StartReplicationCommand,
  StartReplicationMessage$,
  StartReplicationMigrationTypeValue,
  StartReplicationResponse$,
  StartReplicationTask$,
  StartReplicationTaskAssessment$,
  StartReplicationTaskAssessmentCommand,
  StartReplicationTaskAssessmentMessage$,
  StartReplicationTaskAssessmentResponse$,
  StartReplicationTaskAssessmentRun$,
  StartReplicationTaskAssessmentRunCommand,
  StartReplicationTaskAssessmentRunMessage$,
  StartReplicationTaskAssessmentRunResponse$,
  StartReplicationTaskCommand,
  StartReplicationTaskMessage$,
  StartReplicationTaskResponse$,
  StartReplicationTaskTypeValue,
  StatementProperties$,
  StopDataMigration$,
  StopDataMigrationCommand,
  StopDataMigrationMessage$,
  StopDataMigrationResponse$,
  StopReplication$,
  StopReplicationCommand,
  StopReplicationMessage$,
  StopReplicationResponse$,
  StopReplicationTask$,
  StopReplicationTaskCommand,
  StopReplicationTaskMessage$,
  StopReplicationTaskResponse$,
  StorageQuotaExceededFault,
  StorageQuotaExceededFault$,
  Subnet$,
  SubnetAlreadyInUse,
  SubnetAlreadyInUse$,
  SupportedEndpointType$,
  SybaseAseDataProviderSettings$,
  SybaseSettings$,
  TablePreparationMode,
  TableStatistics$,
  TableToReload$,
  Tag$,
  TargetDataSetting$,
  TargetDbType,
  TestConnection$,
  TestConnectionCommand,
  TestConnectionMessage$,
  TestConnectionResponse$,
  TimestreamSettings$,
  TlogAccessMode,
  UpdateSubscriptionsToEventBridge$,
  UpdateSubscriptionsToEventBridgeCommand,
  UpdateSubscriptionsToEventBridgeMessage$,
  UpdateSubscriptionsToEventBridgeResponse$,
  UpgradeDependencyFailureFault,
  UpgradeDependencyFailureFault$,
  VersionStatus,
  VpcSecurityGroupMembership$,
  waitForEndpointDeleted,
  waitForReplicationInstanceAvailable,
  waitForReplicationInstanceDeleted,
  waitForReplicationTaskDeleted,
  waitForReplicationTaskReady,
  waitForReplicationTaskRunning,
  waitForReplicationTaskStopped,
  waitForTestConnectionSucceeds,
  waitUntilEndpointDeleted,
  waitUntilReplicationInstanceAvailable,
  waitUntilReplicationInstanceDeleted,
  waitUntilReplicationTaskDeleted,
  waitUntilReplicationTaskReady,
  waitUntilReplicationTaskRunning,
  waitUntilReplicationTaskStopped,
  waitUntilTestConnectionSucceeds,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof DatabaseMigrationServiceClient === "function");
assert(typeof DatabaseMigrationService === "function");
// commands
assert(typeof AddTagsToResourceCommand === "function");
assert(typeof AddTagsToResource$ === "object");
assert(typeof ApplyPendingMaintenanceActionCommand === "function");
assert(typeof ApplyPendingMaintenanceAction$ === "object");
assert(typeof BatchStartRecommendationsCommand === "function");
assert(typeof BatchStartRecommendations$ === "object");
assert(typeof CancelMetadataModelConversionCommand === "function");
assert(typeof CancelMetadataModelConversion$ === "object");
assert(typeof CancelMetadataModelCreationCommand === "function");
assert(typeof CancelMetadataModelCreation$ === "object");
assert(typeof CancelReplicationTaskAssessmentRunCommand === "function");
assert(typeof CancelReplicationTaskAssessmentRun$ === "object");
assert(typeof CreateDataMigrationCommand === "function");
assert(typeof CreateDataMigration$ === "object");
assert(typeof CreateDataProviderCommand === "function");
assert(typeof CreateDataProvider$ === "object");
assert(typeof CreateEndpointCommand === "function");
assert(typeof CreateEndpoint$ === "object");
assert(typeof CreateEventSubscriptionCommand === "function");
assert(typeof CreateEventSubscription$ === "object");
assert(typeof CreateFleetAdvisorCollectorCommand === "function");
assert(typeof CreateFleetAdvisorCollector$ === "object");
assert(typeof CreateInstanceProfileCommand === "function");
assert(typeof CreateInstanceProfile$ === "object");
assert(typeof CreateMigrationProjectCommand === "function");
assert(typeof CreateMigrationProject$ === "object");
assert(typeof CreateReplicationConfigCommand === "function");
assert(typeof CreateReplicationConfig$ === "object");
assert(typeof CreateReplicationInstanceCommand === "function");
assert(typeof CreateReplicationInstance$ === "object");
assert(typeof CreateReplicationSubnetGroupCommand === "function");
assert(typeof CreateReplicationSubnetGroup$ === "object");
assert(typeof CreateReplicationTaskCommand === "function");
assert(typeof CreateReplicationTask$ === "object");
assert(typeof DeleteCertificateCommand === "function");
assert(typeof DeleteCertificate$ === "object");
assert(typeof DeleteConnectionCommand === "function");
assert(typeof DeleteConnection$ === "object");
assert(typeof DeleteDataMigrationCommand === "function");
assert(typeof DeleteDataMigration$ === "object");
assert(typeof DeleteDataProviderCommand === "function");
assert(typeof DeleteDataProvider$ === "object");
assert(typeof DeleteEndpointCommand === "function");
assert(typeof DeleteEndpoint$ === "object");
assert(typeof DeleteEventSubscriptionCommand === "function");
assert(typeof DeleteEventSubscription$ === "object");
assert(typeof DeleteFleetAdvisorCollectorCommand === "function");
assert(typeof DeleteFleetAdvisorCollector$ === "object");
assert(typeof DeleteFleetAdvisorDatabasesCommand === "function");
assert(typeof DeleteFleetAdvisorDatabases$ === "object");
assert(typeof DeleteInstanceProfileCommand === "function");
assert(typeof DeleteInstanceProfile$ === "object");
assert(typeof DeleteMigrationProjectCommand === "function");
assert(typeof DeleteMigrationProject$ === "object");
assert(typeof DeleteReplicationConfigCommand === "function");
assert(typeof DeleteReplicationConfig$ === "object");
assert(typeof DeleteReplicationInstanceCommand === "function");
assert(typeof DeleteReplicationInstance$ === "object");
assert(typeof DeleteReplicationSubnetGroupCommand === "function");
assert(typeof DeleteReplicationSubnetGroup$ === "object");
assert(typeof DeleteReplicationTaskCommand === "function");
assert(typeof DeleteReplicationTask$ === "object");
assert(typeof DeleteReplicationTaskAssessmentRunCommand === "function");
assert(typeof DeleteReplicationTaskAssessmentRun$ === "object");
assert(typeof DescribeAccountAttributesCommand === "function");
assert(typeof DescribeAccountAttributes$ === "object");
assert(typeof DescribeApplicableIndividualAssessmentsCommand === "function");
assert(typeof DescribeApplicableIndividualAssessments$ === "object");
assert(typeof DescribeCertificatesCommand === "function");
assert(typeof DescribeCertificates$ === "object");
assert(typeof DescribeConnectionsCommand === "function");
assert(typeof DescribeConnections$ === "object");
assert(typeof DescribeConversionConfigurationCommand === "function");
assert(typeof DescribeConversionConfiguration$ === "object");
assert(typeof DescribeDataMigrationsCommand === "function");
assert(typeof DescribeDataMigrations$ === "object");
assert(typeof DescribeDataProvidersCommand === "function");
assert(typeof DescribeDataProviders$ === "object");
assert(typeof DescribeEndpointsCommand === "function");
assert(typeof DescribeEndpoints$ === "object");
assert(typeof DescribeEndpointSettingsCommand === "function");
assert(typeof DescribeEndpointSettings$ === "object");
assert(typeof DescribeEndpointTypesCommand === "function");
assert(typeof DescribeEndpointTypes$ === "object");
assert(typeof DescribeEngineVersionsCommand === "function");
assert(typeof DescribeEngineVersions$ === "object");
assert(typeof DescribeEventCategoriesCommand === "function");
assert(typeof DescribeEventCategories$ === "object");
assert(typeof DescribeEventsCommand === "function");
assert(typeof DescribeEvents$ === "object");
assert(typeof DescribeEventSubscriptionsCommand === "function");
assert(typeof DescribeEventSubscriptions$ === "object");
assert(typeof DescribeExtensionPackAssociationsCommand === "function");
assert(typeof DescribeExtensionPackAssociations$ === "object");
assert(typeof DescribeFleetAdvisorCollectorsCommand === "function");
assert(typeof DescribeFleetAdvisorCollectors$ === "object");
assert(typeof DescribeFleetAdvisorDatabasesCommand === "function");
assert(typeof DescribeFleetAdvisorDatabases$ === "object");
assert(typeof DescribeFleetAdvisorLsaAnalysisCommand === "function");
assert(typeof DescribeFleetAdvisorLsaAnalysis$ === "object");
assert(typeof DescribeFleetAdvisorSchemaObjectSummaryCommand === "function");
assert(typeof DescribeFleetAdvisorSchemaObjectSummary$ === "object");
assert(typeof DescribeFleetAdvisorSchemasCommand === "function");
assert(typeof DescribeFleetAdvisorSchemas$ === "object");
assert(typeof DescribeInstanceProfilesCommand === "function");
assert(typeof DescribeInstanceProfiles$ === "object");
assert(typeof DescribeMetadataModelCommand === "function");
assert(typeof DescribeMetadataModel$ === "object");
assert(typeof DescribeMetadataModelAssessmentsCommand === "function");
assert(typeof DescribeMetadataModelAssessments$ === "object");
assert(typeof DescribeMetadataModelChildrenCommand === "function");
assert(typeof DescribeMetadataModelChildren$ === "object");
assert(typeof DescribeMetadataModelConversionsCommand === "function");
assert(typeof DescribeMetadataModelConversions$ === "object");
assert(typeof DescribeMetadataModelCreationsCommand === "function");
assert(typeof DescribeMetadataModelCreations$ === "object");
assert(typeof DescribeMetadataModelExportsAsScriptCommand === "function");
assert(typeof DescribeMetadataModelExportsAsScript$ === "object");
assert(typeof DescribeMetadataModelExportsToTargetCommand === "function");
assert(typeof DescribeMetadataModelExportsToTarget$ === "object");
assert(typeof DescribeMetadataModelImportsCommand === "function");
assert(typeof DescribeMetadataModelImports$ === "object");
assert(typeof DescribeMigrationProjectsCommand === "function");
assert(typeof DescribeMigrationProjects$ === "object");
assert(typeof DescribeOrderableReplicationInstancesCommand === "function");
assert(typeof DescribeOrderableReplicationInstances$ === "object");
assert(typeof DescribePendingMaintenanceActionsCommand === "function");
assert(typeof DescribePendingMaintenanceActions$ === "object");
assert(typeof DescribeRecommendationLimitationsCommand === "function");
assert(typeof DescribeRecommendationLimitations$ === "object");
assert(typeof DescribeRecommendationsCommand === "function");
assert(typeof DescribeRecommendations$ === "object");
assert(typeof DescribeRefreshSchemasStatusCommand === "function");
assert(typeof DescribeRefreshSchemasStatus$ === "object");
assert(typeof DescribeReplicationConfigsCommand === "function");
assert(typeof DescribeReplicationConfigs$ === "object");
assert(typeof DescribeReplicationInstancesCommand === "function");
assert(typeof DescribeReplicationInstances$ === "object");
assert(typeof DescribeReplicationInstanceTaskLogsCommand === "function");
assert(typeof DescribeReplicationInstanceTaskLogs$ === "object");
assert(typeof DescribeReplicationsCommand === "function");
assert(typeof DescribeReplications$ === "object");
assert(typeof DescribeReplicationSubnetGroupsCommand === "function");
assert(typeof DescribeReplicationSubnetGroups$ === "object");
assert(typeof DescribeReplicationTableStatisticsCommand === "function");
assert(typeof DescribeReplicationTableStatistics$ === "object");
assert(typeof DescribeReplicationTaskAssessmentResultsCommand === "function");
assert(typeof DescribeReplicationTaskAssessmentResults$ === "object");
assert(typeof DescribeReplicationTaskAssessmentRunsCommand === "function");
assert(typeof DescribeReplicationTaskAssessmentRuns$ === "object");
assert(typeof DescribeReplicationTaskIndividualAssessmentsCommand === "function");
assert(typeof DescribeReplicationTaskIndividualAssessments$ === "object");
assert(typeof DescribeReplicationTasksCommand === "function");
assert(typeof DescribeReplicationTasks$ === "object");
assert(typeof DescribeSchemasCommand === "function");
assert(typeof DescribeSchemas$ === "object");
assert(typeof DescribeTableStatisticsCommand === "function");
assert(typeof DescribeTableStatistics$ === "object");
assert(typeof ExportMetadataModelAssessmentCommand === "function");
assert(typeof ExportMetadataModelAssessment$ === "object");
assert(typeof GetTargetSelectionRulesCommand === "function");
assert(typeof GetTargetSelectionRules$ === "object");
assert(typeof ImportCertificateCommand === "function");
assert(typeof ImportCertificate$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ModifyConversionConfigurationCommand === "function");
assert(typeof ModifyConversionConfiguration$ === "object");
assert(typeof ModifyDataMigrationCommand === "function");
assert(typeof ModifyDataMigration$ === "object");
assert(typeof ModifyDataProviderCommand === "function");
assert(typeof ModifyDataProvider$ === "object");
assert(typeof ModifyEndpointCommand === "function");
assert(typeof ModifyEndpoint$ === "object");
assert(typeof ModifyEventSubscriptionCommand === "function");
assert(typeof ModifyEventSubscription$ === "object");
assert(typeof ModifyInstanceProfileCommand === "function");
assert(typeof ModifyInstanceProfile$ === "object");
assert(typeof ModifyMigrationProjectCommand === "function");
assert(typeof ModifyMigrationProject$ === "object");
assert(typeof ModifyReplicationConfigCommand === "function");
assert(typeof ModifyReplicationConfig$ === "object");
assert(typeof ModifyReplicationInstanceCommand === "function");
assert(typeof ModifyReplicationInstance$ === "object");
assert(typeof ModifyReplicationSubnetGroupCommand === "function");
assert(typeof ModifyReplicationSubnetGroup$ === "object");
assert(typeof ModifyReplicationTaskCommand === "function");
assert(typeof ModifyReplicationTask$ === "object");
assert(typeof MoveReplicationTaskCommand === "function");
assert(typeof MoveReplicationTask$ === "object");
assert(typeof RebootReplicationInstanceCommand === "function");
assert(typeof RebootReplicationInstance$ === "object");
assert(typeof RefreshSchemasCommand === "function");
assert(typeof RefreshSchemas$ === "object");
assert(typeof ReloadReplicationTablesCommand === "function");
assert(typeof ReloadReplicationTables$ === "object");
assert(typeof ReloadTablesCommand === "function");
assert(typeof ReloadTables$ === "object");
assert(typeof RemoveTagsFromResourceCommand === "function");
assert(typeof RemoveTagsFromResource$ === "object");
assert(typeof RunFleetAdvisorLsaAnalysisCommand === "function");
assert(typeof RunFleetAdvisorLsaAnalysis$ === "object");
assert(typeof StartDataMigrationCommand === "function");
assert(typeof StartDataMigration$ === "object");
assert(typeof StartExtensionPackAssociationCommand === "function");
assert(typeof StartExtensionPackAssociation$ === "object");
assert(typeof StartMetadataModelAssessmentCommand === "function");
assert(typeof StartMetadataModelAssessment$ === "object");
assert(typeof StartMetadataModelConversionCommand === "function");
assert(typeof StartMetadataModelConversion$ === "object");
assert(typeof StartMetadataModelCreationCommand === "function");
assert(typeof StartMetadataModelCreation$ === "object");
assert(typeof StartMetadataModelExportAsScriptCommand === "function");
assert(typeof StartMetadataModelExportAsScript$ === "object");
assert(typeof StartMetadataModelExportToTargetCommand === "function");
assert(typeof StartMetadataModelExportToTarget$ === "object");
assert(typeof StartMetadataModelImportCommand === "function");
assert(typeof StartMetadataModelImport$ === "object");
assert(typeof StartRecommendationsCommand === "function");
assert(typeof StartRecommendations$ === "object");
assert(typeof StartReplicationCommand === "function");
assert(typeof StartReplication$ === "object");
assert(typeof StartReplicationTaskCommand === "function");
assert(typeof StartReplicationTask$ === "object");
assert(typeof StartReplicationTaskAssessmentCommand === "function");
assert(typeof StartReplicationTaskAssessment$ === "object");
assert(typeof StartReplicationTaskAssessmentRunCommand === "function");
assert(typeof StartReplicationTaskAssessmentRun$ === "object");
assert(typeof StopDataMigrationCommand === "function");
assert(typeof StopDataMigration$ === "object");
assert(typeof StopReplicationCommand === "function");
assert(typeof StopReplication$ === "object");
assert(typeof StopReplicationTaskCommand === "function");
assert(typeof StopReplicationTask$ === "object");
assert(typeof TestConnectionCommand === "function");
assert(typeof TestConnection$ === "object");
assert(typeof UpdateSubscriptionsToEventBridgeCommand === "function");
assert(typeof UpdateSubscriptionsToEventBridge$ === "object");
// structural schemas
assert(typeof AccountQuota$ === "object");
assert(typeof AddTagsToResourceMessage$ === "object");
assert(typeof AddTagsToResourceResponse$ === "object");
assert(typeof ApplyPendingMaintenanceActionMessage$ === "object");
assert(typeof ApplyPendingMaintenanceActionResponse$ === "object");
assert(typeof AvailabilityZone$ === "object");
assert(typeof BatchStartRecommendationsErrorEntry$ === "object");
assert(typeof BatchStartRecommendationsRequest$ === "object");
assert(typeof BatchStartRecommendationsResponse$ === "object");
assert(typeof CancelMetadataModelConversionMessage$ === "object");
assert(typeof CancelMetadataModelConversionResponse$ === "object");
assert(typeof CancelMetadataModelCreationMessage$ === "object");
assert(typeof CancelMetadataModelCreationResponse$ === "object");
assert(typeof CancelReplicationTaskAssessmentRunMessage$ === "object");
assert(typeof CancelReplicationTaskAssessmentRunResponse$ === "object");
assert(typeof Certificate$ === "object");
assert(typeof CollectorHealthCheck$ === "object");
assert(typeof CollectorResponse$ === "object");
assert(typeof CollectorShortInfoResponse$ === "object");
assert(typeof ComputeConfig$ === "object");
assert(typeof Connection$ === "object");
assert(typeof CreateDataMigrationMessage$ === "object");
assert(typeof CreateDataMigrationResponse$ === "object");
assert(typeof CreateDataProviderMessage$ === "object");
assert(typeof CreateDataProviderResponse$ === "object");
assert(typeof CreateEndpointMessage$ === "object");
assert(typeof CreateEndpointResponse$ === "object");
assert(typeof CreateEventSubscriptionMessage$ === "object");
assert(typeof CreateEventSubscriptionResponse$ === "object");
assert(typeof CreateFleetAdvisorCollectorRequest$ === "object");
assert(typeof CreateFleetAdvisorCollectorResponse$ === "object");
assert(typeof CreateInstanceProfileMessage$ === "object");
assert(typeof CreateInstanceProfileResponse$ === "object");
assert(typeof CreateMigrationProjectMessage$ === "object");
assert(typeof CreateMigrationProjectResponse$ === "object");
assert(typeof CreateReplicationConfigMessage$ === "object");
assert(typeof CreateReplicationConfigResponse$ === "object");
assert(typeof CreateReplicationInstanceMessage$ === "object");
assert(typeof CreateReplicationInstanceResponse$ === "object");
assert(typeof CreateReplicationSubnetGroupMessage$ === "object");
assert(typeof CreateReplicationSubnetGroupResponse$ === "object");
assert(typeof CreateReplicationTaskMessage$ === "object");
assert(typeof CreateReplicationTaskResponse$ === "object");
assert(typeof DatabaseInstanceSoftwareDetailsResponse$ === "object");
assert(typeof DatabaseResponse$ === "object");
assert(typeof DatabaseShortInfoResponse$ === "object");
assert(typeof DataMigration$ === "object");
assert(typeof DataMigrationSettings$ === "object");
assert(typeof DataMigrationStatistics$ === "object");
assert(typeof DataProvider$ === "object");
assert(typeof DataProviderDescriptor$ === "object");
assert(typeof DataProviderDescriptorDefinition$ === "object");
assert(typeof DataProviderSettings$ === "object");
assert(typeof DefaultErrorDetails$ === "object");
assert(typeof DeleteCertificateMessage$ === "object");
assert(typeof DeleteCertificateResponse$ === "object");
assert(typeof DeleteCollectorRequest$ === "object");
assert(typeof DeleteConnectionMessage$ === "object");
assert(typeof DeleteConnectionResponse$ === "object");
assert(typeof DeleteDataMigrationMessage$ === "object");
assert(typeof DeleteDataMigrationResponse$ === "object");
assert(typeof DeleteDataProviderMessage$ === "object");
assert(typeof DeleteDataProviderResponse$ === "object");
assert(typeof DeleteEndpointMessage$ === "object");
assert(typeof DeleteEndpointResponse$ === "object");
assert(typeof DeleteEventSubscriptionMessage$ === "object");
assert(typeof DeleteEventSubscriptionResponse$ === "object");
assert(typeof DeleteFleetAdvisorDatabasesRequest$ === "object");
assert(typeof DeleteFleetAdvisorDatabasesResponse$ === "object");
assert(typeof DeleteInstanceProfileMessage$ === "object");
assert(typeof DeleteInstanceProfileResponse$ === "object");
assert(typeof DeleteMigrationProjectMessage$ === "object");
assert(typeof DeleteMigrationProjectResponse$ === "object");
assert(typeof DeleteReplicationConfigMessage$ === "object");
assert(typeof DeleteReplicationConfigResponse$ === "object");
assert(typeof DeleteReplicationInstanceMessage$ === "object");
assert(typeof DeleteReplicationInstanceResponse$ === "object");
assert(typeof DeleteReplicationSubnetGroupMessage$ === "object");
assert(typeof DeleteReplicationSubnetGroupResponse$ === "object");
assert(typeof DeleteReplicationTaskAssessmentRunMessage$ === "object");
assert(typeof DeleteReplicationTaskAssessmentRunResponse$ === "object");
assert(typeof DeleteReplicationTaskMessage$ === "object");
assert(typeof DeleteReplicationTaskResponse$ === "object");
assert(typeof DescribeAccountAttributesMessage$ === "object");
assert(typeof DescribeAccountAttributesResponse$ === "object");
assert(typeof DescribeApplicableIndividualAssessmentsMessage$ === "object");
assert(typeof DescribeApplicableIndividualAssessmentsResponse$ === "object");
assert(typeof DescribeCertificatesMessage$ === "object");
assert(typeof DescribeCertificatesResponse$ === "object");
assert(typeof DescribeConnectionsMessage$ === "object");
assert(typeof DescribeConnectionsResponse$ === "object");
assert(typeof DescribeConversionConfigurationMessage$ === "object");
assert(typeof DescribeConversionConfigurationResponse$ === "object");
assert(typeof DescribeDataMigrationsMessage$ === "object");
assert(typeof DescribeDataMigrationsResponse$ === "object");
assert(typeof DescribeDataProvidersMessage$ === "object");
assert(typeof DescribeDataProvidersResponse$ === "object");
assert(typeof DescribeEndpointSettingsMessage$ === "object");
assert(typeof DescribeEndpointSettingsResponse$ === "object");
assert(typeof DescribeEndpointsMessage$ === "object");
assert(typeof DescribeEndpointsResponse$ === "object");
assert(typeof DescribeEndpointTypesMessage$ === "object");
assert(typeof DescribeEndpointTypesResponse$ === "object");
assert(typeof DescribeEngineVersionsMessage$ === "object");
assert(typeof DescribeEngineVersionsResponse$ === "object");
assert(typeof DescribeEventCategoriesMessage$ === "object");
assert(typeof DescribeEventCategoriesResponse$ === "object");
assert(typeof DescribeEventsMessage$ === "object");
assert(typeof DescribeEventsResponse$ === "object");
assert(typeof DescribeEventSubscriptionsMessage$ === "object");
assert(typeof DescribeEventSubscriptionsResponse$ === "object");
assert(typeof DescribeExtensionPackAssociationsMessage$ === "object");
assert(typeof DescribeExtensionPackAssociationsResponse$ === "object");
assert(typeof DescribeFleetAdvisorCollectorsRequest$ === "object");
assert(typeof DescribeFleetAdvisorCollectorsResponse$ === "object");
assert(typeof DescribeFleetAdvisorDatabasesRequest$ === "object");
assert(typeof DescribeFleetAdvisorDatabasesResponse$ === "object");
assert(typeof DescribeFleetAdvisorLsaAnalysisRequest$ === "object");
assert(typeof DescribeFleetAdvisorLsaAnalysisResponse$ === "object");
assert(typeof DescribeFleetAdvisorSchemaObjectSummaryRequest$ === "object");
assert(typeof DescribeFleetAdvisorSchemaObjectSummaryResponse$ === "object");
assert(typeof DescribeFleetAdvisorSchemasRequest$ === "object");
assert(typeof DescribeFleetAdvisorSchemasResponse$ === "object");
assert(typeof DescribeInstanceProfilesMessage$ === "object");
assert(typeof DescribeInstanceProfilesResponse$ === "object");
assert(typeof DescribeMetadataModelAssessmentsMessage$ === "object");
assert(typeof DescribeMetadataModelAssessmentsResponse$ === "object");
assert(typeof DescribeMetadataModelChildrenMessage$ === "object");
assert(typeof DescribeMetadataModelChildrenResponse$ === "object");
assert(typeof DescribeMetadataModelConversionsMessage$ === "object");
assert(typeof DescribeMetadataModelConversionsResponse$ === "object");
assert(typeof DescribeMetadataModelCreationsMessage$ === "object");
assert(typeof DescribeMetadataModelCreationsResponse$ === "object");
assert(typeof DescribeMetadataModelExportsAsScriptMessage$ === "object");
assert(typeof DescribeMetadataModelExportsAsScriptResponse$ === "object");
assert(typeof DescribeMetadataModelExportsToTargetMessage$ === "object");
assert(typeof DescribeMetadataModelExportsToTargetResponse$ === "object");
assert(typeof DescribeMetadataModelImportsMessage$ === "object");
assert(typeof DescribeMetadataModelImportsResponse$ === "object");
assert(typeof DescribeMetadataModelMessage$ === "object");
assert(typeof DescribeMetadataModelResponse$ === "object");
assert(typeof DescribeMigrationProjectsMessage$ === "object");
assert(typeof DescribeMigrationProjectsResponse$ === "object");
assert(typeof DescribeOrderableReplicationInstancesMessage$ === "object");
assert(typeof DescribeOrderableReplicationInstancesResponse$ === "object");
assert(typeof DescribePendingMaintenanceActionsMessage$ === "object");
assert(typeof DescribePendingMaintenanceActionsResponse$ === "object");
assert(typeof DescribeRecommendationLimitationsRequest$ === "object");
assert(typeof DescribeRecommendationLimitationsResponse$ === "object");
assert(typeof DescribeRecommendationsRequest$ === "object");
assert(typeof DescribeRecommendationsResponse$ === "object");
assert(typeof DescribeRefreshSchemasStatusMessage$ === "object");
assert(typeof DescribeRefreshSchemasStatusResponse$ === "object");
assert(typeof DescribeReplicationConfigsMessage$ === "object");
assert(typeof DescribeReplicationConfigsResponse$ === "object");
assert(typeof DescribeReplicationInstancesMessage$ === "object");
assert(typeof DescribeReplicationInstancesResponse$ === "object");
assert(typeof DescribeReplicationInstanceTaskLogsMessage$ === "object");
assert(typeof DescribeReplicationInstanceTaskLogsResponse$ === "object");
assert(typeof DescribeReplicationsMessage$ === "object");
assert(typeof DescribeReplicationsResponse$ === "object");
assert(typeof DescribeReplicationSubnetGroupsMessage$ === "object");
assert(typeof DescribeReplicationSubnetGroupsResponse$ === "object");
assert(typeof DescribeReplicationTableStatisticsMessage$ === "object");
assert(typeof DescribeReplicationTableStatisticsResponse$ === "object");
assert(typeof DescribeReplicationTaskAssessmentResultsMessage$ === "object");
assert(typeof DescribeReplicationTaskAssessmentResultsResponse$ === "object");
assert(typeof DescribeReplicationTaskAssessmentRunsMessage$ === "object");
assert(typeof DescribeReplicationTaskAssessmentRunsResponse$ === "object");
assert(typeof DescribeReplicationTaskIndividualAssessmentsMessage$ === "object");
assert(typeof DescribeReplicationTaskIndividualAssessmentsResponse$ === "object");
assert(typeof DescribeReplicationTasksMessage$ === "object");
assert(typeof DescribeReplicationTasksResponse$ === "object");
assert(typeof DescribeSchemasMessage$ === "object");
assert(typeof DescribeSchemasResponse$ === "object");
assert(typeof DescribeTableStatisticsMessage$ === "object");
assert(typeof DescribeTableStatisticsResponse$ === "object");
assert(typeof DmsTransferSettings$ === "object");
assert(typeof DocDbDataProviderSettings$ === "object");
assert(typeof DocDbSettings$ === "object");
assert(typeof DynamoDbSettings$ === "object");
assert(typeof ElasticsearchSettings$ === "object");
assert(typeof Endpoint$ === "object");
assert(typeof EndpointSetting$ === "object");
assert(typeof EngineVersion$ === "object");
assert(typeof ErrorDetails$ === "object");
assert(typeof Event$ === "object");
assert(typeof EventCategoryGroup$ === "object");
assert(typeof EventSubscription$ === "object");
assert(typeof ExportMetadataModelAssessmentMessage$ === "object");
assert(typeof ExportMetadataModelAssessmentResponse$ === "object");
assert(typeof ExportMetadataModelAssessmentResultEntry$ === "object");
assert(typeof ExportSqlDetails$ === "object");
assert(typeof Filter$ === "object");
assert(typeof FleetAdvisorLsaAnalysisResponse$ === "object");
assert(typeof FleetAdvisorSchemaObjectResponse$ === "object");
assert(typeof GcpMySQLSettings$ === "object");
assert(typeof GetTargetSelectionRulesMessage$ === "object");
assert(typeof GetTargetSelectionRulesResponse$ === "object");
assert(typeof IbmDb2LuwDataProviderSettings$ === "object");
assert(typeof IBMDb2Settings$ === "object");
assert(typeof IbmDb2zOsDataProviderSettings$ === "object");
assert(typeof ImportCertificateMessage$ === "object");
assert(typeof ImportCertificateResponse$ === "object");
assert(typeof InstanceProfile$ === "object");
assert(typeof InventoryData$ === "object");
assert(typeof KafkaSettings$ === "object");
assert(typeof KerberosAuthenticationSettings$ === "object");
assert(typeof KinesisSettings$ === "object");
assert(typeof LakehouseSettings$ === "object");
assert(typeof Limitation$ === "object");
assert(typeof ListTagsForResourceMessage$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof MariaDbDataProviderSettings$ === "object");
assert(typeof MetadataModelProperties$ === "object");
assert(typeof MetadataModelReference$ === "object");
assert(typeof MicrosoftSqlServerDataProviderSettings$ === "object");
assert(typeof MicrosoftSQLServerSettings$ === "object");
assert(typeof MigrationProject$ === "object");
assert(typeof ModifyConversionConfigurationMessage$ === "object");
assert(typeof ModifyConversionConfigurationResponse$ === "object");
assert(typeof ModifyDataMigrationMessage$ === "object");
assert(typeof ModifyDataMigrationResponse$ === "object");
assert(typeof ModifyDataProviderMessage$ === "object");
assert(typeof ModifyDataProviderResponse$ === "object");
assert(typeof ModifyEndpointMessage$ === "object");
assert(typeof ModifyEndpointResponse$ === "object");
assert(typeof ModifyEventSubscriptionMessage$ === "object");
assert(typeof ModifyEventSubscriptionResponse$ === "object");
assert(typeof ModifyInstanceProfileMessage$ === "object");
assert(typeof ModifyInstanceProfileResponse$ === "object");
assert(typeof ModifyMigrationProjectMessage$ === "object");
assert(typeof ModifyMigrationProjectResponse$ === "object");
assert(typeof ModifyReplicationConfigMessage$ === "object");
assert(typeof ModifyReplicationConfigResponse$ === "object");
assert(typeof ModifyReplicationInstanceMessage$ === "object");
assert(typeof ModifyReplicationInstanceResponse$ === "object");
assert(typeof ModifyReplicationSubnetGroupMessage$ === "object");
assert(typeof ModifyReplicationSubnetGroupResponse$ === "object");
assert(typeof ModifyReplicationTaskMessage$ === "object");
assert(typeof ModifyReplicationTaskResponse$ === "object");
assert(typeof MongoDbDataProviderSettings$ === "object");
assert(typeof MongoDbSettings$ === "object");
assert(typeof MoveReplicationTaskMessage$ === "object");
assert(typeof MoveReplicationTaskResponse$ === "object");
assert(typeof MySqlDataProviderSettings$ === "object");
assert(typeof MySQLSettings$ === "object");
assert(typeof NeptuneSettings$ === "object");
assert(typeof OracleDataProviderSettings$ === "object");
assert(typeof OracleSettings$ === "object");
assert(typeof OrderableReplicationInstance$ === "object");
assert(typeof PendingMaintenanceAction$ === "object");
assert(typeof PostgreSqlDataProviderSettings$ === "object");
assert(typeof PostgreSQLSettings$ === "object");
assert(typeof PremigrationAssessmentStatus$ === "object");
assert(typeof ProcessedObject$ === "object");
assert(typeof Progress$ === "object");
assert(typeof ProvisionData$ === "object");
assert(typeof RdsConfiguration$ === "object");
assert(typeof RdsRecommendation$ === "object");
assert(typeof RdsRequirements$ === "object");
assert(typeof RebootReplicationInstanceMessage$ === "object");
assert(typeof RebootReplicationInstanceResponse$ === "object");
assert(typeof Recommendation$ === "object");
assert(typeof RecommendationData$ === "object");
assert(typeof RecommendationSettings$ === "object");
assert(typeof RedisSettings$ === "object");
assert(typeof RedshiftDataProviderSettings$ === "object");
assert(typeof RedshiftSettings$ === "object");
assert(typeof RefreshSchemasMessage$ === "object");
assert(typeof RefreshSchemasResponse$ === "object");
assert(typeof RefreshSchemasStatus$ === "object");
assert(typeof ReloadReplicationTablesMessage$ === "object");
assert(typeof ReloadReplicationTablesResponse$ === "object");
assert(typeof ReloadTablesMessage$ === "object");
assert(typeof ReloadTablesResponse$ === "object");
assert(typeof RemoveTagsFromResourceMessage$ === "object");
assert(typeof RemoveTagsFromResourceResponse$ === "object");
assert(typeof Replication$ === "object");
assert(typeof ReplicationConfig$ === "object");
assert(typeof ReplicationInstance$ === "object");
assert(typeof ReplicationInstanceTaskLog$ === "object");
assert(typeof ReplicationPendingModifiedValues$ === "object");
assert(typeof ReplicationStats$ === "object");
assert(typeof ReplicationSubnetGroup$ === "object");
assert(typeof ReplicationTask$ === "object");
assert(typeof ReplicationTaskAssessmentResult$ === "object");
assert(typeof ReplicationTaskAssessmentRun$ === "object");
assert(typeof ReplicationTaskAssessmentRunProgress$ === "object");
assert(typeof ReplicationTaskAssessmentRunResultStatistic$ === "object");
assert(typeof ReplicationTaskIndividualAssessment$ === "object");
assert(typeof ReplicationTaskStats$ === "object");
assert(typeof ResourcePendingMaintenanceActions$ === "object");
assert(typeof RunFleetAdvisorLsaAnalysisResponse$ === "object");
assert(typeof S3Settings$ === "object");
assert(typeof SCApplicationAttributes$ === "object");
assert(typeof SchemaConversionRequest$ === "object");
assert(typeof SchemaResponse$ === "object");
assert(typeof SchemaShortInfoResponse$ === "object");
assert(typeof ServerShortInfoResponse$ === "object");
assert(typeof SourceDataSetting$ === "object");
assert(typeof StartDataMigrationMessage$ === "object");
assert(typeof StartDataMigrationResponse$ === "object");
assert(typeof StartExtensionPackAssociationMessage$ === "object");
assert(typeof StartExtensionPackAssociationResponse$ === "object");
assert(typeof StartMetadataModelAssessmentMessage$ === "object");
assert(typeof StartMetadataModelAssessmentResponse$ === "object");
assert(typeof StartMetadataModelConversionMessage$ === "object");
assert(typeof StartMetadataModelConversionResponse$ === "object");
assert(typeof StartMetadataModelCreationMessage$ === "object");
assert(typeof StartMetadataModelCreationResponse$ === "object");
assert(typeof StartMetadataModelExportAsScriptMessage$ === "object");
assert(typeof StartMetadataModelExportAsScriptResponse$ === "object");
assert(typeof StartMetadataModelExportToTargetMessage$ === "object");
assert(typeof StartMetadataModelExportToTargetResponse$ === "object");
assert(typeof StartMetadataModelImportMessage$ === "object");
assert(typeof StartMetadataModelImportResponse$ === "object");
assert(typeof StartRecommendationsRequest$ === "object");
assert(typeof StartRecommendationsRequestEntry$ === "object");
assert(typeof StartReplicationMessage$ === "object");
assert(typeof StartReplicationResponse$ === "object");
assert(typeof StartReplicationTaskAssessmentMessage$ === "object");
assert(typeof StartReplicationTaskAssessmentResponse$ === "object");
assert(typeof StartReplicationTaskAssessmentRunMessage$ === "object");
assert(typeof StartReplicationTaskAssessmentRunResponse$ === "object");
assert(typeof StartReplicationTaskMessage$ === "object");
assert(typeof StartReplicationTaskResponse$ === "object");
assert(typeof StatementProperties$ === "object");
assert(typeof StopDataMigrationMessage$ === "object");
assert(typeof StopDataMigrationResponse$ === "object");
assert(typeof StopReplicationMessage$ === "object");
assert(typeof StopReplicationResponse$ === "object");
assert(typeof StopReplicationTaskMessage$ === "object");
assert(typeof StopReplicationTaskResponse$ === "object");
assert(typeof Subnet$ === "object");
assert(typeof SupportedEndpointType$ === "object");
assert(typeof SybaseAseDataProviderSettings$ === "object");
assert(typeof SybaseSettings$ === "object");
assert(typeof TableStatistics$ === "object");
assert(typeof TableToReload$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TargetDataSetting$ === "object");
assert(typeof TestConnectionMessage$ === "object");
assert(typeof TestConnectionResponse$ === "object");
assert(typeof TimestreamSettings$ === "object");
assert(typeof UpdateSubscriptionsToEventBridgeMessage$ === "object");
assert(typeof UpdateSubscriptionsToEventBridgeResponse$ === "object");
assert(typeof VpcSecurityGroupMembership$ === "object");
// enums
assert(typeof AssessmentReportType === "object");
assert(typeof AuthMechanismValue === "object");
assert(typeof AuthTypeValue === "object");
assert(typeof CannedAclForObjectsValue === "object");
assert(typeof CharLengthSemantics === "object");
assert(typeof CollectorStatus === "object");
assert(typeof CompressionTypeValue === "object");
assert(typeof DatabaseMode === "object");
assert(typeof DataFormatValue === "object");
assert(typeof DatePartitionDelimiterValue === "object");
assert(typeof DatePartitionSequenceValue === "object");
assert(typeof DmsSslModeValue === "object");
assert(typeof EncodingTypeValue === "object");
assert(typeof EncryptionModeValue === "object");
assert(typeof EndpointSettingTypeValue === "object");
assert(typeof KafkaSaslMechanism === "object");
assert(typeof KafkaSecurityProtocol === "object");
assert(typeof KafkaSslEndpointIdentificationAlgorithm === "object");
assert(typeof LongVarcharMappingType === "object");
assert(typeof MessageFormatValue === "object");
assert(typeof MigrationTypeValue === "object");
assert(typeof MySQLAuthenticationMethod === "object");
assert(typeof NestingLevelValue === "object");
assert(typeof OracleAuthenticationMethod === "object");
assert(typeof OriginTypeValue === "object");
assert(typeof ParquetVersionValue === "object");
assert(typeof PluginNameValue === "object");
assert(typeof PostgreSQLAuthenticationMethod === "object");
assert(typeof RedisAuthTypeValue === "object");
assert(typeof RefreshSchemasStatusTypeValue === "object");
assert(typeof ReleaseStatusValues === "object");
assert(typeof ReloadOptionValue === "object");
assert(typeof ReplicationEndpointTypeValue === "object");
assert(typeof SafeguardPolicy === "object");
assert(typeof SourceType === "object");
assert(typeof SqlServerAuthenticationMethod === "object");
assert(typeof SslSecurityProtocolValue === "object");
assert(typeof StartReplicationMigrationTypeValue === "object");
assert(typeof StartReplicationTaskTypeValue === "object");
assert(typeof TablePreparationMode === "object");
assert(typeof TargetDbType === "object");
assert(typeof TlogAccessMode === "object");
assert(typeof VersionStatus === "object");
// errors
assert(AccessDeniedFault.prototype instanceof DatabaseMigrationServiceServiceException);
assert(typeof AccessDeniedFault$ === "object");
assert(CollectorNotFoundFault.prototype instanceof DatabaseMigrationServiceServiceException);
assert(typeof CollectorNotFoundFault$ === "object");
assert(FailedDependencyFault.prototype instanceof DatabaseMigrationServiceServiceException);
assert(typeof FailedDependencyFault$ === "object");
assert(InsufficientResourceCapacityFault.prototype instanceof DatabaseMigrationServiceServiceException);
assert(typeof InsufficientResourceCapacityFault$ === "object");
assert(InvalidCertificateFault.prototype instanceof DatabaseMigrationServiceServiceException);
assert(typeof InvalidCertificateFault$ === "object");
assert(InvalidOperationFault.prototype instanceof DatabaseMigrationServiceServiceException);
assert(typeof InvalidOperationFault$ === "object");
assert(InvalidResourceStateFault.prototype instanceof DatabaseMigrationServiceServiceException);
assert(typeof InvalidResourceStateFault$ === "object");
assert(InvalidSubnet.prototype instanceof DatabaseMigrationServiceServiceException);
assert(typeof InvalidSubnet$ === "object");
assert(KMSAccessDeniedFault.prototype instanceof DatabaseMigrationServiceServiceException);
assert(typeof KMSAccessDeniedFault$ === "object");
assert(KMSDisabledFault.prototype instanceof DatabaseMigrationServiceServiceException);
assert(typeof KMSDisabledFault$ === "object");
assert(KMSFault.prototype instanceof DatabaseMigrationServiceServiceException);
assert(typeof KMSFault$ === "object");
assert(KMSInvalidStateFault.prototype instanceof DatabaseMigrationServiceServiceException);
assert(typeof KMSInvalidStateFault$ === "object");
assert(KMSKeyNotAccessibleFault.prototype instanceof DatabaseMigrationServiceServiceException);
assert(typeof KMSKeyNotAccessibleFault$ === "object");
assert(KMSNotFoundFault.prototype instanceof DatabaseMigrationServiceServiceException);
assert(typeof KMSNotFoundFault$ === "object");
assert(KMSThrottlingFault.prototype instanceof DatabaseMigrationServiceServiceException);
assert(typeof KMSThrottlingFault$ === "object");
assert(ReplicationSubnetGroupDoesNotCoverEnoughAZs.prototype instanceof DatabaseMigrationServiceServiceException);
assert(typeof ReplicationSubnetGroupDoesNotCoverEnoughAZs$ === "object");
assert(ResourceAlreadyExistsFault.prototype instanceof DatabaseMigrationServiceServiceException);
assert(typeof ResourceAlreadyExistsFault$ === "object");
assert(ResourceNotFoundFault.prototype instanceof DatabaseMigrationServiceServiceException);
assert(typeof ResourceNotFoundFault$ === "object");
assert(ResourceQuotaExceededFault.prototype instanceof DatabaseMigrationServiceServiceException);
assert(typeof ResourceQuotaExceededFault$ === "object");
assert(S3AccessDeniedFault.prototype instanceof DatabaseMigrationServiceServiceException);
assert(typeof S3AccessDeniedFault$ === "object");
assert(S3ResourceNotFoundFault.prototype instanceof DatabaseMigrationServiceServiceException);
assert(typeof S3ResourceNotFoundFault$ === "object");
assert(SNSInvalidTopicFault.prototype instanceof DatabaseMigrationServiceServiceException);
assert(typeof SNSInvalidTopicFault$ === "object");
assert(SNSNoAuthorizationFault.prototype instanceof DatabaseMigrationServiceServiceException);
assert(typeof SNSNoAuthorizationFault$ === "object");
assert(StorageQuotaExceededFault.prototype instanceof DatabaseMigrationServiceServiceException);
assert(typeof StorageQuotaExceededFault$ === "object");
assert(SubnetAlreadyInUse.prototype instanceof DatabaseMigrationServiceServiceException);
assert(typeof SubnetAlreadyInUse$ === "object");
assert(UpgradeDependencyFailureFault.prototype instanceof DatabaseMigrationServiceServiceException);
assert(typeof UpgradeDependencyFailureFault$ === "object");
assert(DatabaseMigrationServiceServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForEndpointDeleted === "function");
assert(typeof waitForReplicationInstanceAvailable === "function");
assert(typeof waitForReplicationInstanceDeleted === "function");
assert(typeof waitForReplicationTaskDeleted === "function");
assert(typeof waitForReplicationTaskReady === "function");
assert(typeof waitForReplicationTaskRunning === "function");
assert(typeof waitForReplicationTaskStopped === "function");
assert(typeof waitForTestConnectionSucceeds === "function");
assert(typeof waitUntilEndpointDeleted === "function");
assert(typeof waitUntilReplicationInstanceAvailable === "function");
assert(typeof waitUntilReplicationInstanceDeleted === "function");
assert(typeof waitUntilReplicationTaskDeleted === "function");
assert(typeof waitUntilReplicationTaskReady === "function");
assert(typeof waitUntilReplicationTaskRunning === "function");
assert(typeof waitUntilReplicationTaskStopped === "function");
assert(typeof waitUntilTestConnectionSucceeds === "function");
// paginators
assert(typeof paginateDescribeApplicableIndividualAssessments === "function");
assert(typeof paginateDescribeCertificates === "function");
assert(typeof paginateDescribeConnections === "function");
assert(typeof paginateDescribeDataMigrations === "function");
assert(typeof paginateDescribeDataProviders === "function");
assert(typeof paginateDescribeEndpointSettings === "function");
assert(typeof paginateDescribeEndpointTypes === "function");
assert(typeof paginateDescribeEndpoints === "function");
assert(typeof paginateDescribeEngineVersions === "function");
assert(typeof paginateDescribeEventSubscriptions === "function");
assert(typeof paginateDescribeEvents === "function");
assert(typeof paginateDescribeExtensionPackAssociations === "function");
assert(typeof paginateDescribeFleetAdvisorCollectors === "function");
assert(typeof paginateDescribeFleetAdvisorDatabases === "function");
assert(typeof paginateDescribeFleetAdvisorLsaAnalysis === "function");
assert(typeof paginateDescribeFleetAdvisorSchemaObjectSummary === "function");
assert(typeof paginateDescribeFleetAdvisorSchemas === "function");
assert(typeof paginateDescribeInstanceProfiles === "function");
assert(typeof paginateDescribeMetadataModelAssessments === "function");
assert(typeof paginateDescribeMetadataModelChildren === "function");
assert(typeof paginateDescribeMetadataModelConversions === "function");
assert(typeof paginateDescribeMetadataModelCreations === "function");
assert(typeof paginateDescribeMetadataModelExportsAsScript === "function");
assert(typeof paginateDescribeMetadataModelExportsToTarget === "function");
assert(typeof paginateDescribeMetadataModelImports === "function");
assert(typeof paginateDescribeMigrationProjects === "function");
assert(typeof paginateDescribeOrderableReplicationInstances === "function");
assert(typeof paginateDescribePendingMaintenanceActions === "function");
assert(typeof paginateDescribeRecommendationLimitations === "function");
assert(typeof paginateDescribeRecommendations === "function");
assert(typeof paginateDescribeReplicationConfigs === "function");
assert(typeof paginateDescribeReplicationInstanceTaskLogs === "function");
assert(typeof paginateDescribeReplicationInstances === "function");
assert(typeof paginateDescribeReplicationSubnetGroups === "function");
assert(typeof paginateDescribeReplicationTableStatistics === "function");
assert(typeof paginateDescribeReplicationTaskAssessmentResults === "function");
assert(typeof paginateDescribeReplicationTaskAssessmentRuns === "function");
assert(typeof paginateDescribeReplicationTaskIndividualAssessments === "function");
assert(typeof paginateDescribeReplicationTasks === "function");
assert(typeof paginateDescribeReplications === "function");
assert(typeof paginateDescribeSchemas === "function");
assert(typeof paginateDescribeTableStatistics === "function");
console.log(`DatabaseMigrationService index test passed.`);
