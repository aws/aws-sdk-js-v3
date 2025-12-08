import {
  AccessDeniedFault,
  AddTagsToResourceCommand,
  ApplyPendingMaintenanceActionCommand,
  AssessmentReportType,
  AuthMechanismValue,
  AuthTypeValue,
  BatchStartRecommendationsCommand,
  CancelMetadataModelConversionCommand,
  CancelMetadataModelCreationCommand,
  CancelReplicationTaskAssessmentRunCommand,
  CannedAclForObjectsValue,
  CharLengthSemantics,
  CollectorNotFoundFault,
  CollectorStatus,
  CompressionTypeValue,
  CreateDataMigrationCommand,
  CreateDataProviderCommand,
  CreateEndpointCommand,
  CreateEventSubscriptionCommand,
  CreateFleetAdvisorCollectorCommand,
  CreateInstanceProfileCommand,
  CreateMigrationProjectCommand,
  CreateReplicationConfigCommand,
  CreateReplicationInstanceCommand,
  CreateReplicationSubnetGroupCommand,
  CreateReplicationTaskCommand,
  DataFormatValue,
  DatabaseMigrationService,
  DatabaseMigrationServiceClient,
  DatabaseMigrationServiceServiceException,
  DatabaseMode,
  DatePartitionDelimiterValue,
  DatePartitionSequenceValue,
  DeleteCertificateCommand,
  DeleteConnectionCommand,
  DeleteDataMigrationCommand,
  DeleteDataProviderCommand,
  DeleteEndpointCommand,
  DeleteEventSubscriptionCommand,
  DeleteFleetAdvisorCollectorCommand,
  DeleteFleetAdvisorDatabasesCommand,
  DeleteInstanceProfileCommand,
  DeleteMigrationProjectCommand,
  DeleteReplicationConfigCommand,
  DeleteReplicationInstanceCommand,
  DeleteReplicationSubnetGroupCommand,
  DeleteReplicationTaskAssessmentRunCommand,
  DeleteReplicationTaskCommand,
  DescribeAccountAttributesCommand,
  DescribeApplicableIndividualAssessmentsCommand,
  DescribeCertificatesCommand,
  DescribeConnectionsCommand,
  DescribeConversionConfigurationCommand,
  DescribeDataMigrationsCommand,
  DescribeDataProvidersCommand,
  DescribeEndpointSettingsCommand,
  DescribeEndpointTypesCommand,
  DescribeEndpointsCommand,
  DescribeEngineVersionsCommand,
  DescribeEventCategoriesCommand,
  DescribeEventSubscriptionsCommand,
  DescribeEventsCommand,
  DescribeExtensionPackAssociationsCommand,
  DescribeFleetAdvisorCollectorsCommand,
  DescribeFleetAdvisorDatabasesCommand,
  DescribeFleetAdvisorLsaAnalysisCommand,
  DescribeFleetAdvisorSchemaObjectSummaryCommand,
  DescribeFleetAdvisorSchemasCommand,
  DescribeInstanceProfilesCommand,
  DescribeMetadataModelAssessmentsCommand,
  DescribeMetadataModelChildrenCommand,
  DescribeMetadataModelCommand,
  DescribeMetadataModelConversionsCommand,
  DescribeMetadataModelCreationsCommand,
  DescribeMetadataModelExportsAsScriptCommand,
  DescribeMetadataModelExportsToTargetCommand,
  DescribeMetadataModelImportsCommand,
  DescribeMigrationProjectsCommand,
  DescribeOrderableReplicationInstancesCommand,
  DescribePendingMaintenanceActionsCommand,
  DescribeRecommendationLimitationsCommand,
  DescribeRecommendationsCommand,
  DescribeRefreshSchemasStatusCommand,
  DescribeReplicationConfigsCommand,
  DescribeReplicationInstanceTaskLogsCommand,
  DescribeReplicationInstancesCommand,
  DescribeReplicationSubnetGroupsCommand,
  DescribeReplicationTableStatisticsCommand,
  DescribeReplicationTaskAssessmentResultsCommand,
  DescribeReplicationTaskAssessmentRunsCommand,
  DescribeReplicationTaskIndividualAssessmentsCommand,
  DescribeReplicationTasksCommand,
  DescribeReplicationsCommand,
  DescribeSchemasCommand,
  DescribeTableStatisticsCommand,
  DmsSslModeValue,
  EncodingTypeValue,
  EncryptionModeValue,
  EndpointSettingTypeValue,
  ExportMetadataModelAssessmentCommand,
  FailedDependencyFault,
  GetTargetSelectionRulesCommand,
  ImportCertificateCommand,
  InsufficientResourceCapacityFault,
  InvalidCertificateFault,
  InvalidOperationFault,
  InvalidResourceStateFault,
  InvalidSubnet,
  KMSAccessDeniedFault,
  KMSDisabledFault,
  KMSFault,
  KMSInvalidStateFault,
  KMSKeyNotAccessibleFault,
  KMSNotFoundFault,
  KMSThrottlingFault,
  KafkaSaslMechanism,
  KafkaSecurityProtocol,
  KafkaSslEndpointIdentificationAlgorithm,
  ListTagsForResourceCommand,
  LongVarcharMappingType,
  MessageFormatValue,
  MigrationTypeValue,
  ModifyConversionConfigurationCommand,
  ModifyDataMigrationCommand,
  ModifyDataProviderCommand,
  ModifyEndpointCommand,
  ModifyEventSubscriptionCommand,
  ModifyInstanceProfileCommand,
  ModifyMigrationProjectCommand,
  ModifyReplicationConfigCommand,
  ModifyReplicationInstanceCommand,
  ModifyReplicationSubnetGroupCommand,
  ModifyReplicationTaskCommand,
  MoveReplicationTaskCommand,
  MySQLAuthenticationMethod,
  NestingLevelValue,
  OracleAuthenticationMethod,
  OriginTypeValue,
  ParquetVersionValue,
  PluginNameValue,
  PostgreSQLAuthenticationMethod,
  RebootReplicationInstanceCommand,
  RedisAuthTypeValue,
  RefreshSchemasCommand,
  RefreshSchemasStatusTypeValue,
  ReleaseStatusValues,
  ReloadOptionValue,
  ReloadReplicationTablesCommand,
  ReloadTablesCommand,
  RemoveTagsFromResourceCommand,
  ReplicationEndpointTypeValue,
  ReplicationSubnetGroupDoesNotCoverEnoughAZs,
  ResourceAlreadyExistsFault,
  ResourceNotFoundFault,
  ResourceQuotaExceededFault,
  RunFleetAdvisorLsaAnalysisCommand,
  S3AccessDeniedFault,
  S3ResourceNotFoundFault,
  SNSInvalidTopicFault,
  SNSNoAuthorizationFault,
  SafeguardPolicy,
  SourceType,
  SqlServerAuthenticationMethod,
  SslSecurityProtocolValue,
  StartDataMigrationCommand,
  StartExtensionPackAssociationCommand,
  StartMetadataModelAssessmentCommand,
  StartMetadataModelConversionCommand,
  StartMetadataModelCreationCommand,
  StartMetadataModelExportAsScriptCommand,
  StartMetadataModelExportToTargetCommand,
  StartMetadataModelImportCommand,
  StartRecommendationsCommand,
  StartReplicationCommand,
  StartReplicationMigrationTypeValue,
  StartReplicationTaskAssessmentCommand,
  StartReplicationTaskAssessmentRunCommand,
  StartReplicationTaskCommand,
  StartReplicationTaskTypeValue,
  StopDataMigrationCommand,
  StopReplicationCommand,
  StopReplicationTaskCommand,
  StorageQuotaExceededFault,
  SubnetAlreadyInUse,
  TablePreparationMode,
  TargetDbType,
  TestConnectionCommand,
  TlogAccessMode,
  UpdateSubscriptionsToEventBridgeCommand,
  UpgradeDependencyFailureFault,
  VersionStatus,
  paginateDescribeApplicableIndividualAssessments,
  paginateDescribeCertificates,
  paginateDescribeConnections,
  paginateDescribeDataMigrations,
  paginateDescribeDataProviders,
  paginateDescribeEndpointSettings,
  paginateDescribeEndpointTypes,
  paginateDescribeEndpoints,
  paginateDescribeEngineVersions,
  paginateDescribeEventSubscriptions,
  paginateDescribeEvents,
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
  paginateDescribeReplicationInstanceTaskLogs,
  paginateDescribeReplicationInstances,
  paginateDescribeReplicationSubnetGroups,
  paginateDescribeReplicationTableStatistics,
  paginateDescribeReplicationTaskAssessmentResults,
  paginateDescribeReplicationTaskAssessmentRuns,
  paginateDescribeReplicationTaskIndividualAssessments,
  paginateDescribeReplicationTasks,
  paginateDescribeReplications,
  paginateDescribeSchemas,
  paginateDescribeTableStatistics,
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
assert(typeof ApplyPendingMaintenanceActionCommand === "function");
assert(typeof BatchStartRecommendationsCommand === "function");
assert(typeof CancelMetadataModelConversionCommand === "function");
assert(typeof CancelMetadataModelCreationCommand === "function");
assert(typeof CancelReplicationTaskAssessmentRunCommand === "function");
assert(typeof CreateDataMigrationCommand === "function");
assert(typeof CreateDataProviderCommand === "function");
assert(typeof CreateEndpointCommand === "function");
assert(typeof CreateEventSubscriptionCommand === "function");
assert(typeof CreateFleetAdvisorCollectorCommand === "function");
assert(typeof CreateInstanceProfileCommand === "function");
assert(typeof CreateMigrationProjectCommand === "function");
assert(typeof CreateReplicationConfigCommand === "function");
assert(typeof CreateReplicationInstanceCommand === "function");
assert(typeof CreateReplicationSubnetGroupCommand === "function");
assert(typeof CreateReplicationTaskCommand === "function");
assert(typeof DeleteCertificateCommand === "function");
assert(typeof DeleteConnectionCommand === "function");
assert(typeof DeleteDataMigrationCommand === "function");
assert(typeof DeleteDataProviderCommand === "function");
assert(typeof DeleteEndpointCommand === "function");
assert(typeof DeleteEventSubscriptionCommand === "function");
assert(typeof DeleteFleetAdvisorCollectorCommand === "function");
assert(typeof DeleteFleetAdvisorDatabasesCommand === "function");
assert(typeof DeleteInstanceProfileCommand === "function");
assert(typeof DeleteMigrationProjectCommand === "function");
assert(typeof DeleteReplicationConfigCommand === "function");
assert(typeof DeleteReplicationInstanceCommand === "function");
assert(typeof DeleteReplicationSubnetGroupCommand === "function");
assert(typeof DeleteReplicationTaskCommand === "function");
assert(typeof DeleteReplicationTaskAssessmentRunCommand === "function");
assert(typeof DescribeAccountAttributesCommand === "function");
assert(typeof DescribeApplicableIndividualAssessmentsCommand === "function");
assert(typeof DescribeCertificatesCommand === "function");
assert(typeof DescribeConnectionsCommand === "function");
assert(typeof DescribeConversionConfigurationCommand === "function");
assert(typeof DescribeDataMigrationsCommand === "function");
assert(typeof DescribeDataProvidersCommand === "function");
assert(typeof DescribeEndpointsCommand === "function");
assert(typeof DescribeEndpointSettingsCommand === "function");
assert(typeof DescribeEndpointTypesCommand === "function");
assert(typeof DescribeEngineVersionsCommand === "function");
assert(typeof DescribeEventCategoriesCommand === "function");
assert(typeof DescribeEventsCommand === "function");
assert(typeof DescribeEventSubscriptionsCommand === "function");
assert(typeof DescribeExtensionPackAssociationsCommand === "function");
assert(typeof DescribeFleetAdvisorCollectorsCommand === "function");
assert(typeof DescribeFleetAdvisorDatabasesCommand === "function");
assert(typeof DescribeFleetAdvisorLsaAnalysisCommand === "function");
assert(typeof DescribeFleetAdvisorSchemaObjectSummaryCommand === "function");
assert(typeof DescribeFleetAdvisorSchemasCommand === "function");
assert(typeof DescribeInstanceProfilesCommand === "function");
assert(typeof DescribeMetadataModelCommand === "function");
assert(typeof DescribeMetadataModelAssessmentsCommand === "function");
assert(typeof DescribeMetadataModelChildrenCommand === "function");
assert(typeof DescribeMetadataModelConversionsCommand === "function");
assert(typeof DescribeMetadataModelCreationsCommand === "function");
assert(typeof DescribeMetadataModelExportsAsScriptCommand === "function");
assert(typeof DescribeMetadataModelExportsToTargetCommand === "function");
assert(typeof DescribeMetadataModelImportsCommand === "function");
assert(typeof DescribeMigrationProjectsCommand === "function");
assert(typeof DescribeOrderableReplicationInstancesCommand === "function");
assert(typeof DescribePendingMaintenanceActionsCommand === "function");
assert(typeof DescribeRecommendationLimitationsCommand === "function");
assert(typeof DescribeRecommendationsCommand === "function");
assert(typeof DescribeRefreshSchemasStatusCommand === "function");
assert(typeof DescribeReplicationConfigsCommand === "function");
assert(typeof DescribeReplicationInstancesCommand === "function");
assert(typeof DescribeReplicationInstanceTaskLogsCommand === "function");
assert(typeof DescribeReplicationsCommand === "function");
assert(typeof DescribeReplicationSubnetGroupsCommand === "function");
assert(typeof DescribeReplicationTableStatisticsCommand === "function");
assert(typeof DescribeReplicationTaskAssessmentResultsCommand === "function");
assert(typeof DescribeReplicationTaskAssessmentRunsCommand === "function");
assert(typeof DescribeReplicationTaskIndividualAssessmentsCommand === "function");
assert(typeof DescribeReplicationTasksCommand === "function");
assert(typeof DescribeSchemasCommand === "function");
assert(typeof DescribeTableStatisticsCommand === "function");
assert(typeof ExportMetadataModelAssessmentCommand === "function");
assert(typeof GetTargetSelectionRulesCommand === "function");
assert(typeof ImportCertificateCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ModifyConversionConfigurationCommand === "function");
assert(typeof ModifyDataMigrationCommand === "function");
assert(typeof ModifyDataProviderCommand === "function");
assert(typeof ModifyEndpointCommand === "function");
assert(typeof ModifyEventSubscriptionCommand === "function");
assert(typeof ModifyInstanceProfileCommand === "function");
assert(typeof ModifyMigrationProjectCommand === "function");
assert(typeof ModifyReplicationConfigCommand === "function");
assert(typeof ModifyReplicationInstanceCommand === "function");
assert(typeof ModifyReplicationSubnetGroupCommand === "function");
assert(typeof ModifyReplicationTaskCommand === "function");
assert(typeof MoveReplicationTaskCommand === "function");
assert(typeof RebootReplicationInstanceCommand === "function");
assert(typeof RefreshSchemasCommand === "function");
assert(typeof ReloadReplicationTablesCommand === "function");
assert(typeof ReloadTablesCommand === "function");
assert(typeof RemoveTagsFromResourceCommand === "function");
assert(typeof RunFleetAdvisorLsaAnalysisCommand === "function");
assert(typeof StartDataMigrationCommand === "function");
assert(typeof StartExtensionPackAssociationCommand === "function");
assert(typeof StartMetadataModelAssessmentCommand === "function");
assert(typeof StartMetadataModelConversionCommand === "function");
assert(typeof StartMetadataModelCreationCommand === "function");
assert(typeof StartMetadataModelExportAsScriptCommand === "function");
assert(typeof StartMetadataModelExportToTargetCommand === "function");
assert(typeof StartMetadataModelImportCommand === "function");
assert(typeof StartRecommendationsCommand === "function");
assert(typeof StartReplicationCommand === "function");
assert(typeof StartReplicationTaskCommand === "function");
assert(typeof StartReplicationTaskAssessmentCommand === "function");
assert(typeof StartReplicationTaskAssessmentRunCommand === "function");
assert(typeof StopDataMigrationCommand === "function");
assert(typeof StopReplicationCommand === "function");
assert(typeof StopReplicationTaskCommand === "function");
assert(typeof TestConnectionCommand === "function");
assert(typeof UpdateSubscriptionsToEventBridgeCommand === "function");
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
assert(CollectorNotFoundFault.prototype instanceof DatabaseMigrationServiceServiceException);
assert(FailedDependencyFault.prototype instanceof DatabaseMigrationServiceServiceException);
assert(InsufficientResourceCapacityFault.prototype instanceof DatabaseMigrationServiceServiceException);
assert(InvalidCertificateFault.prototype instanceof DatabaseMigrationServiceServiceException);
assert(InvalidOperationFault.prototype instanceof DatabaseMigrationServiceServiceException);
assert(InvalidResourceStateFault.prototype instanceof DatabaseMigrationServiceServiceException);
assert(InvalidSubnet.prototype instanceof DatabaseMigrationServiceServiceException);
assert(KMSAccessDeniedFault.prototype instanceof DatabaseMigrationServiceServiceException);
assert(KMSDisabledFault.prototype instanceof DatabaseMigrationServiceServiceException);
assert(KMSFault.prototype instanceof DatabaseMigrationServiceServiceException);
assert(KMSInvalidStateFault.prototype instanceof DatabaseMigrationServiceServiceException);
assert(KMSKeyNotAccessibleFault.prototype instanceof DatabaseMigrationServiceServiceException);
assert(KMSNotFoundFault.prototype instanceof DatabaseMigrationServiceServiceException);
assert(KMSThrottlingFault.prototype instanceof DatabaseMigrationServiceServiceException);
assert(ReplicationSubnetGroupDoesNotCoverEnoughAZs.prototype instanceof DatabaseMigrationServiceServiceException);
assert(ResourceAlreadyExistsFault.prototype instanceof DatabaseMigrationServiceServiceException);
assert(ResourceNotFoundFault.prototype instanceof DatabaseMigrationServiceServiceException);
assert(ResourceQuotaExceededFault.prototype instanceof DatabaseMigrationServiceServiceException);
assert(S3AccessDeniedFault.prototype instanceof DatabaseMigrationServiceServiceException);
assert(S3ResourceNotFoundFault.prototype instanceof DatabaseMigrationServiceServiceException);
assert(SNSInvalidTopicFault.prototype instanceof DatabaseMigrationServiceServiceException);
assert(SNSNoAuthorizationFault.prototype instanceof DatabaseMigrationServiceServiceException);
assert(StorageQuotaExceededFault.prototype instanceof DatabaseMigrationServiceServiceException);
assert(SubnetAlreadyInUse.prototype instanceof DatabaseMigrationServiceServiceException);
assert(UpgradeDependencyFailureFault.prototype instanceof DatabaseMigrationServiceServiceException);
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
