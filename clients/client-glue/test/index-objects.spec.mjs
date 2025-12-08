import {
  AccessDeniedException,
  AdditionalOptionKeys,
  AggFunction,
  AllowFullTableExternalDataAccessEnum,
  AlreadyExistsException,
  AuthenticationType,
  BackfillErrorCode,
  BatchCreatePartitionCommand,
  BatchDeleteConnectionCommand,
  BatchDeletePartitionCommand,
  BatchDeleteTableCommand,
  BatchDeleteTableVersionCommand,
  BatchGetBlueprintsCommand,
  BatchGetCrawlersCommand,
  BatchGetCustomEntityTypesCommand,
  BatchGetDataQualityResultCommand,
  BatchGetDevEndpointsCommand,
  BatchGetJobsCommand,
  BatchGetPartitionCommand,
  BatchGetTableOptimizerCommand,
  BatchGetTriggersCommand,
  BatchGetWorkflowsCommand,
  BatchPutDataQualityStatisticAnnotationCommand,
  BatchStopJobRunCommand,
  BatchUpdatePartitionCommand,
  BlueprintRunState,
  BlueprintStatus,
  CancelDataQualityRuleRecommendationRunCommand,
  CancelDataQualityRulesetEvaluationRunCommand,
  CancelMLTaskRunCommand,
  CancelStatementCommand,
  CatalogEncryptionMode,
  CheckSchemaVersionValidityCommand,
  CloudWatchEncryptionMode,
  ColumnStatisticsState,
  ColumnStatisticsTaskNotRunningException,
  ColumnStatisticsTaskRunningException,
  ColumnStatisticsTaskStoppingException,
  ColumnStatisticsType,
  CompactionStrategy,
  Comparator,
  Compatibility,
  CompressionType,
  ComputationType,
  ComputeEnvironment,
  ConcurrentModificationException,
  ConcurrentRunsExceededException,
  ConditionCheckFailureException,
  ConfigurationSource,
  ConflictException,
  ConnectionPropertyKey,
  ConnectionStatus,
  ConnectionType,
  CrawlState,
  CrawlerHistoryState,
  CrawlerLineageSettings,
  CrawlerNotRunningException,
  CrawlerRunningException,
  CrawlerState,
  CrawlerStoppingException,
  CreateBlueprintCommand,
  CreateCatalogCommand,
  CreateClassifierCommand,
  CreateColumnStatisticsTaskSettingsCommand,
  CreateConnectionCommand,
  CreateCrawlerCommand,
  CreateCustomEntityTypeCommand,
  CreateDataQualityRulesetCommand,
  CreateDatabaseCommand,
  CreateDevEndpointCommand,
  CreateGlueIdentityCenterConfigurationCommand,
  CreateIntegrationCommand,
  CreateIntegrationResourcePropertyCommand,
  CreateIntegrationTablePropertiesCommand,
  CreateJobCommand,
  CreateMLTransformCommand,
  CreatePartitionCommand,
  CreatePartitionIndexCommand,
  CreateRegistryCommand,
  CreateSchemaCommand,
  CreateScriptCommand,
  CreateSecurityConfigurationCommand,
  CreateSessionCommand,
  CreateTableCommand,
  CreateTableOptimizerCommand,
  CreateTriggerCommand,
  CreateUsageProfileCommand,
  CreateUserDefinedFunctionCommand,
  CreateWorkflowCommand,
  CsvHeaderOption,
  CsvSerdeOption,
  DQCompositeRuleEvaluationMethod,
  DQStopJobOnFailureTiming,
  DQTransformOutput,
  DataFormat,
  DataOperation,
  DataQualityEncryptionMode,
  DataQualityModelStatus,
  DataQualityRuleResultStatus,
  DatabaseAttributes,
  DdbExportType,
  DeleteBehavior,
  DeleteBlueprintCommand,
  DeleteCatalogCommand,
  DeleteClassifierCommand,
  DeleteColumnStatisticsForPartitionCommand,
  DeleteColumnStatisticsForTableCommand,
  DeleteColumnStatisticsTaskSettingsCommand,
  DeleteConnectionCommand,
  DeleteCrawlerCommand,
  DeleteCustomEntityTypeCommand,
  DeleteDataQualityRulesetCommand,
  DeleteDatabaseCommand,
  DeleteDevEndpointCommand,
  DeleteGlueIdentityCenterConfigurationCommand,
  DeleteIntegrationCommand,
  DeleteIntegrationResourcePropertyCommand,
  DeleteIntegrationTablePropertiesCommand,
  DeleteJobCommand,
  DeleteMLTransformCommand,
  DeletePartitionCommand,
  DeletePartitionIndexCommand,
  DeleteRegistryCommand,
  DeleteResourcePolicyCommand,
  DeleteSchemaCommand,
  DeleteSchemaVersionsCommand,
  DeleteSecurityConfigurationCommand,
  DeleteSessionCommand,
  DeleteTableCommand,
  DeleteTableOptimizerCommand,
  DeleteTableVersionCommand,
  DeleteTriggerCommand,
  DeleteUsageProfileCommand,
  DeleteUserDefinedFunctionCommand,
  DeleteWorkflowCommand,
  DeltaTargetCompressionType,
  DescribeConnectionTypeCommand,
  DescribeEntityCommand,
  DescribeInboundIntegrationsCommand,
  DescribeIntegrationsCommand,
  EnableHybridValues,
  EntityNotFoundException,
  ExecutionClass,
  ExecutionStatus,
  ExistCondition,
  FederatedResourceAlreadyExistsException,
  FederationSourceErrorCode,
  FederationSourceException,
  FederationSourceRetryableException,
  FieldDataType,
  FieldFilterOperator,
  FieldName,
  FilterLogicalOperator,
  FilterOperation,
  FilterOperator,
  FilterValueType,
  FunctionType,
  GetBlueprintCommand,
  GetBlueprintRunCommand,
  GetBlueprintRunsCommand,
  GetCatalogCommand,
  GetCatalogImportStatusCommand,
  GetCatalogsCommand,
  GetClassifierCommand,
  GetClassifiersCommand,
  GetColumnStatisticsForPartitionCommand,
  GetColumnStatisticsForTableCommand,
  GetColumnStatisticsTaskRunCommand,
  GetColumnStatisticsTaskRunsCommand,
  GetColumnStatisticsTaskSettingsCommand,
  GetConnectionCommand,
  GetConnectionsCommand,
  GetCrawlerCommand,
  GetCrawlerMetricsCommand,
  GetCrawlersCommand,
  GetCustomEntityTypeCommand,
  GetDataCatalogEncryptionSettingsCommand,
  GetDataQualityModelCommand,
  GetDataQualityModelResultCommand,
  GetDataQualityResultCommand,
  GetDataQualityRuleRecommendationRunCommand,
  GetDataQualityRulesetCommand,
  GetDataQualityRulesetEvaluationRunCommand,
  GetDatabaseCommand,
  GetDatabasesCommand,
  GetDataflowGraphCommand,
  GetDevEndpointCommand,
  GetDevEndpointsCommand,
  GetEntityRecordsCommand,
  GetGlueIdentityCenterConfigurationCommand,
  GetIntegrationResourcePropertyCommand,
  GetIntegrationTablePropertiesCommand,
  GetJobBookmarkCommand,
  GetJobCommand,
  GetJobRunCommand,
  GetJobRunsCommand,
  GetJobsCommand,
  GetMLTaskRunCommand,
  GetMLTaskRunsCommand,
  GetMLTransformCommand,
  GetMLTransformsCommand,
  GetMappingCommand,
  GetPartitionCommand,
  GetPartitionIndexesCommand,
  GetPartitionsCommand,
  GetPlanCommand,
  GetRegistryCommand,
  GetResourcePoliciesCommand,
  GetResourcePolicyCommand,
  GetSchemaByDefinitionCommand,
  GetSchemaCommand,
  GetSchemaVersionCommand,
  GetSchemaVersionsDiffCommand,
  GetSecurityConfigurationCommand,
  GetSecurityConfigurationsCommand,
  GetSessionCommand,
  GetStatementCommand,
  GetTableCommand,
  GetTableOptimizerCommand,
  GetTableVersionCommand,
  GetTableVersionsCommand,
  GetTablesCommand,
  GetTagsCommand,
  GetTriggerCommand,
  GetTriggersCommand,
  GetUnfilteredPartitionMetadataCommand,
  GetUnfilteredPartitionsMetadataCommand,
  GetUnfilteredTableMetadataCommand,
  GetUsageProfileCommand,
  GetUserDefinedFunctionCommand,
  GetUserDefinedFunctionsCommand,
  GetWorkflowCommand,
  GetWorkflowRunCommand,
  GetWorkflowRunPropertiesCommand,
  GetWorkflowRunsCommand,
  Glue,
  GlueClient,
  GlueEncryptionException,
  GlueRecordType,
  GlueServiceException,
  HudiTargetCompressionType,
  HyperTargetCompressionType,
  IcebergNullOrder,
  IcebergSortDirection,
  IcebergStructTypeEnum,
  IcebergTargetCompressionType,
  IcebergUpdateAction,
  IdempotentParameterMismatchException,
  IllegalBlueprintStateException,
  IllegalSessionStateException,
  IllegalWorkflowStateException,
  ImportCatalogToGlueCommand,
  InclusionAnnotationValue,
  IntegrationConflictOperationFault,
  IntegrationNotFoundFault,
  IntegrationQuotaExceededFault,
  IntegrationStatus,
  InternalServerException,
  InternalServiceException,
  InvalidInputException,
  InvalidIntegrationStateFault,
  InvalidStateException,
  JDBCConnectionType,
  JDBCDataType,
  JdbcMetadataEntry,
  JobBookmarksEncryptionMode,
  JobMode,
  JobRunState,
  JoinType,
  KMSKeyNotAccessibleFault,
  Language,
  LastCrawlStatus,
  LastRefreshType,
  ListBlueprintsCommand,
  ListColumnStatisticsTaskRunsCommand,
  ListConnectionTypesCommand,
  ListCrawlersCommand,
  ListCrawlsCommand,
  ListCustomEntityTypesCommand,
  ListDataQualityResultsCommand,
  ListDataQualityRuleRecommendationRunsCommand,
  ListDataQualityRulesetEvaluationRunsCommand,
  ListDataQualityRulesetsCommand,
  ListDataQualityStatisticAnnotationsCommand,
  ListDataQualityStatisticsCommand,
  ListDevEndpointsCommand,
  ListEntitiesCommand,
  ListIntegrationResourcePropertiesCommand,
  ListJobsCommand,
  ListMLTransformsCommand,
  ListRegistriesCommand,
  ListSchemaVersionsCommand,
  ListSchemasCommand,
  ListSessionsCommand,
  ListStatementsCommand,
  ListTableOptimizerRunsCommand,
  ListTriggersCommand,
  ListUsageProfilesCommand,
  ListWorkflowsCommand,
  Logical,
  LogicalOperator,
  MLTransformNotReadyException,
  MLUserDataEncryptionModeString,
  MetadataOperation,
  ModifyIntegrationCommand,
  NoScheduleException,
  NodeType,
  OAuth2GrantType,
  OperationNotSupportedException,
  OperationTimeoutException,
  ParamType,
  ParquetCompressionType,
  PartitionIndexStatus,
  Permission,
  PermissionType,
  PermissionTypeMismatchException,
  PiiType,
  PrincipalType,
  PropertyType,
  PutDataCatalogEncryptionSettingsCommand,
  PutDataQualityProfileAnnotationCommand,
  PutResourcePolicyCommand,
  PutSchemaVersionMetadataCommand,
  PutWorkflowRunPropertiesCommand,
  QuerySchemaVersionMetadataCommand,
  QuoteChar,
  RecrawlBehavior,
  RegisterSchemaVersionCommand,
  RegistryStatus,
  RemoveSchemaVersionMetadataCommand,
  ResetJobBookmarkCommand,
  ResourceAction,
  ResourceNotFoundException,
  ResourceNotReadyException,
  ResourceNumberLimitExceededException,
  ResourceShareType,
  ResourceState,
  ResourceType,
  ResumeWorkflowRunCommand,
  RunStatementCommand,
  S3EncryptionMode,
  ScheduleState,
  ScheduleType,
  SchedulerNotRunningException,
  SchedulerRunningException,
  SchedulerTransitioningException,
  SchemaDiffType,
  SchemaStatus,
  SchemaVersionStatus,
  SearchTablesCommand,
  Separator,
  SessionStatus,
  SettingSource,
  Sort,
  SortDirectionType,
  SourceControlAuthStrategy,
  SourceControlProvider,
  StartBlueprintRunCommand,
  StartColumnStatisticsTaskRunCommand,
  StartColumnStatisticsTaskRunScheduleCommand,
  StartCrawlerCommand,
  StartCrawlerScheduleCommand,
  StartDataQualityRuleRecommendationRunCommand,
  StartDataQualityRulesetEvaluationRunCommand,
  StartExportLabelsTaskRunCommand,
  StartImportLabelsTaskRunCommand,
  StartJobRunCommand,
  StartMLEvaluationTaskRunCommand,
  StartMLLabelingSetGenerationTaskRunCommand,
  StartTriggerCommand,
  StartWorkflowRunCommand,
  StartingPosition,
  StatementState,
  StatisticEvaluationLevel,
  StopColumnStatisticsTaskRunCommand,
  StopColumnStatisticsTaskRunScheduleCommand,
  StopCrawlerCommand,
  StopCrawlerScheduleCommand,
  StopSessionCommand,
  StopTriggerCommand,
  StopWorkflowRunCommand,
  TableAttributes,
  TableOptimizerEventType,
  TableOptimizerType,
  TagResourceCommand,
  TargetFormat,
  TargetResourceNotFound,
  TaskRunSortColumnType,
  TaskStatusType,
  TaskType,
  TestConnectionCommand,
  ThrottlingException,
  TransformSortColumnType,
  TransformStatusType,
  TransformType,
  TriggerState,
  TriggerType,
  UnionType,
  UnnestSpec,
  UntagResourceCommand,
  UpdateBehavior,
  UpdateBlueprintCommand,
  UpdateCatalogBehavior,
  UpdateCatalogCommand,
  UpdateClassifierCommand,
  UpdateColumnStatisticsForPartitionCommand,
  UpdateColumnStatisticsForTableCommand,
  UpdateColumnStatisticsTaskSettingsCommand,
  UpdateConnectionCommand,
  UpdateCrawlerCommand,
  UpdateCrawlerScheduleCommand,
  UpdateDataQualityRulesetCommand,
  UpdateDatabaseCommand,
  UpdateDevEndpointCommand,
  UpdateGlueIdentityCenterConfigurationCommand,
  UpdateIntegrationResourcePropertyCommand,
  UpdateIntegrationTablePropertiesCommand,
  UpdateJobCommand,
  UpdateJobFromSourceControlCommand,
  UpdateMLTransformCommand,
  UpdatePartitionCommand,
  UpdateRegistryCommand,
  UpdateSchemaCommand,
  UpdateSourceControlFromJobCommand,
  UpdateTableCommand,
  UpdateTableOptimizerCommand,
  UpdateTriggerCommand,
  UpdateUsageProfileCommand,
  UpdateUserDefinedFunctionCommand,
  UpdateWorkflowCommand,
  ValidationException,
  VersionMismatchException,
  ViewDialect,
  ViewUpdateAction,
  WorkerType,
  WorkflowRunStatus,
  paginateDescribeEntity,
  paginateGetBlueprintRuns,
  paginateGetClassifiers,
  paginateGetColumnStatisticsTaskRuns,
  paginateGetConnections,
  paginateGetCrawlerMetrics,
  paginateGetCrawlers,
  paginateGetDatabases,
  paginateGetDevEndpoints,
  paginateGetJobRuns,
  paginateGetJobs,
  paginateGetMLTaskRuns,
  paginateGetMLTransforms,
  paginateGetPartitionIndexes,
  paginateGetPartitions,
  paginateGetResourcePolicies,
  paginateGetSecurityConfigurations,
  paginateGetTableVersions,
  paginateGetTables,
  paginateGetTriggers,
  paginateGetUnfilteredPartitionsMetadata,
  paginateGetUserDefinedFunctions,
  paginateGetWorkflowRuns,
  paginateListBlueprints,
  paginateListColumnStatisticsTaskRuns,
  paginateListConnectionTypes,
  paginateListCrawlers,
  paginateListCustomEntityTypes,
  paginateListDataQualityResults,
  paginateListDataQualityRuleRecommendationRuns,
  paginateListDataQualityRulesetEvaluationRuns,
  paginateListDataQualityRulesets,
  paginateListDevEndpoints,
  paginateListEntities,
  paginateListJobs,
  paginateListMLTransforms,
  paginateListRegistries,
  paginateListSchemaVersions,
  paginateListSchemas,
  paginateListSessions,
  paginateListTableOptimizerRuns,
  paginateListTriggers,
  paginateListUsageProfiles,
  paginateListWorkflows,
  paginateSearchTables,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof GlueClient === "function");
assert(typeof Glue === "function");
// commands
assert(typeof BatchCreatePartitionCommand === "function");
assert(typeof BatchDeleteConnectionCommand === "function");
assert(typeof BatchDeletePartitionCommand === "function");
assert(typeof BatchDeleteTableCommand === "function");
assert(typeof BatchDeleteTableVersionCommand === "function");
assert(typeof BatchGetBlueprintsCommand === "function");
assert(typeof BatchGetCrawlersCommand === "function");
assert(typeof BatchGetCustomEntityTypesCommand === "function");
assert(typeof BatchGetDataQualityResultCommand === "function");
assert(typeof BatchGetDevEndpointsCommand === "function");
assert(typeof BatchGetJobsCommand === "function");
assert(typeof BatchGetPartitionCommand === "function");
assert(typeof BatchGetTableOptimizerCommand === "function");
assert(typeof BatchGetTriggersCommand === "function");
assert(typeof BatchGetWorkflowsCommand === "function");
assert(typeof BatchPutDataQualityStatisticAnnotationCommand === "function");
assert(typeof BatchStopJobRunCommand === "function");
assert(typeof BatchUpdatePartitionCommand === "function");
assert(typeof CancelDataQualityRuleRecommendationRunCommand === "function");
assert(typeof CancelDataQualityRulesetEvaluationRunCommand === "function");
assert(typeof CancelMLTaskRunCommand === "function");
assert(typeof CancelStatementCommand === "function");
assert(typeof CheckSchemaVersionValidityCommand === "function");
assert(typeof CreateBlueprintCommand === "function");
assert(typeof CreateCatalogCommand === "function");
assert(typeof CreateClassifierCommand === "function");
assert(typeof CreateColumnStatisticsTaskSettingsCommand === "function");
assert(typeof CreateConnectionCommand === "function");
assert(typeof CreateCrawlerCommand === "function");
assert(typeof CreateCustomEntityTypeCommand === "function");
assert(typeof CreateDatabaseCommand === "function");
assert(typeof CreateDataQualityRulesetCommand === "function");
assert(typeof CreateDevEndpointCommand === "function");
assert(typeof CreateGlueIdentityCenterConfigurationCommand === "function");
assert(typeof CreateIntegrationCommand === "function");
assert(typeof CreateIntegrationResourcePropertyCommand === "function");
assert(typeof CreateIntegrationTablePropertiesCommand === "function");
assert(typeof CreateJobCommand === "function");
assert(typeof CreateMLTransformCommand === "function");
assert(typeof CreatePartitionCommand === "function");
assert(typeof CreatePartitionIndexCommand === "function");
assert(typeof CreateRegistryCommand === "function");
assert(typeof CreateSchemaCommand === "function");
assert(typeof CreateScriptCommand === "function");
assert(typeof CreateSecurityConfigurationCommand === "function");
assert(typeof CreateSessionCommand === "function");
assert(typeof CreateTableCommand === "function");
assert(typeof CreateTableOptimizerCommand === "function");
assert(typeof CreateTriggerCommand === "function");
assert(typeof CreateUsageProfileCommand === "function");
assert(typeof CreateUserDefinedFunctionCommand === "function");
assert(typeof CreateWorkflowCommand === "function");
assert(typeof DeleteBlueprintCommand === "function");
assert(typeof DeleteCatalogCommand === "function");
assert(typeof DeleteClassifierCommand === "function");
assert(typeof DeleteColumnStatisticsForPartitionCommand === "function");
assert(typeof DeleteColumnStatisticsForTableCommand === "function");
assert(typeof DeleteColumnStatisticsTaskSettingsCommand === "function");
assert(typeof DeleteConnectionCommand === "function");
assert(typeof DeleteCrawlerCommand === "function");
assert(typeof DeleteCustomEntityTypeCommand === "function");
assert(typeof DeleteDatabaseCommand === "function");
assert(typeof DeleteDataQualityRulesetCommand === "function");
assert(typeof DeleteDevEndpointCommand === "function");
assert(typeof DeleteGlueIdentityCenterConfigurationCommand === "function");
assert(typeof DeleteIntegrationCommand === "function");
assert(typeof DeleteIntegrationResourcePropertyCommand === "function");
assert(typeof DeleteIntegrationTablePropertiesCommand === "function");
assert(typeof DeleteJobCommand === "function");
assert(typeof DeleteMLTransformCommand === "function");
assert(typeof DeletePartitionCommand === "function");
assert(typeof DeletePartitionIndexCommand === "function");
assert(typeof DeleteRegistryCommand === "function");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DeleteSchemaCommand === "function");
assert(typeof DeleteSchemaVersionsCommand === "function");
assert(typeof DeleteSecurityConfigurationCommand === "function");
assert(typeof DeleteSessionCommand === "function");
assert(typeof DeleteTableCommand === "function");
assert(typeof DeleteTableOptimizerCommand === "function");
assert(typeof DeleteTableVersionCommand === "function");
assert(typeof DeleteTriggerCommand === "function");
assert(typeof DeleteUsageProfileCommand === "function");
assert(typeof DeleteUserDefinedFunctionCommand === "function");
assert(typeof DeleteWorkflowCommand === "function");
assert(typeof DescribeConnectionTypeCommand === "function");
assert(typeof DescribeEntityCommand === "function");
assert(typeof DescribeInboundIntegrationsCommand === "function");
assert(typeof DescribeIntegrationsCommand === "function");
assert(typeof GetBlueprintCommand === "function");
assert(typeof GetBlueprintRunCommand === "function");
assert(typeof GetBlueprintRunsCommand === "function");
assert(typeof GetCatalogCommand === "function");
assert(typeof GetCatalogImportStatusCommand === "function");
assert(typeof GetCatalogsCommand === "function");
assert(typeof GetClassifierCommand === "function");
assert(typeof GetClassifiersCommand === "function");
assert(typeof GetColumnStatisticsForPartitionCommand === "function");
assert(typeof GetColumnStatisticsForTableCommand === "function");
assert(typeof GetColumnStatisticsTaskRunCommand === "function");
assert(typeof GetColumnStatisticsTaskRunsCommand === "function");
assert(typeof GetColumnStatisticsTaskSettingsCommand === "function");
assert(typeof GetConnectionCommand === "function");
assert(typeof GetConnectionsCommand === "function");
assert(typeof GetCrawlerCommand === "function");
assert(typeof GetCrawlerMetricsCommand === "function");
assert(typeof GetCrawlersCommand === "function");
assert(typeof GetCustomEntityTypeCommand === "function");
assert(typeof GetDatabaseCommand === "function");
assert(typeof GetDatabasesCommand === "function");
assert(typeof GetDataCatalogEncryptionSettingsCommand === "function");
assert(typeof GetDataflowGraphCommand === "function");
assert(typeof GetDataQualityModelCommand === "function");
assert(typeof GetDataQualityModelResultCommand === "function");
assert(typeof GetDataQualityResultCommand === "function");
assert(typeof GetDataQualityRuleRecommendationRunCommand === "function");
assert(typeof GetDataQualityRulesetCommand === "function");
assert(typeof GetDataQualityRulesetEvaluationRunCommand === "function");
assert(typeof GetDevEndpointCommand === "function");
assert(typeof GetDevEndpointsCommand === "function");
assert(typeof GetEntityRecordsCommand === "function");
assert(typeof GetGlueIdentityCenterConfigurationCommand === "function");
assert(typeof GetIntegrationResourcePropertyCommand === "function");
assert(typeof GetIntegrationTablePropertiesCommand === "function");
assert(typeof GetJobCommand === "function");
assert(typeof GetJobBookmarkCommand === "function");
assert(typeof GetJobRunCommand === "function");
assert(typeof GetJobRunsCommand === "function");
assert(typeof GetJobsCommand === "function");
assert(typeof GetMappingCommand === "function");
assert(typeof GetMLTaskRunCommand === "function");
assert(typeof GetMLTaskRunsCommand === "function");
assert(typeof GetMLTransformCommand === "function");
assert(typeof GetMLTransformsCommand === "function");
assert(typeof GetPartitionCommand === "function");
assert(typeof GetPartitionIndexesCommand === "function");
assert(typeof GetPartitionsCommand === "function");
assert(typeof GetPlanCommand === "function");
assert(typeof GetRegistryCommand === "function");
assert(typeof GetResourcePoliciesCommand === "function");
assert(typeof GetResourcePolicyCommand === "function");
assert(typeof GetSchemaCommand === "function");
assert(typeof GetSchemaByDefinitionCommand === "function");
assert(typeof GetSchemaVersionCommand === "function");
assert(typeof GetSchemaVersionsDiffCommand === "function");
assert(typeof GetSecurityConfigurationCommand === "function");
assert(typeof GetSecurityConfigurationsCommand === "function");
assert(typeof GetSessionCommand === "function");
assert(typeof GetStatementCommand === "function");
assert(typeof GetTableCommand === "function");
assert(typeof GetTableOptimizerCommand === "function");
assert(typeof GetTablesCommand === "function");
assert(typeof GetTableVersionCommand === "function");
assert(typeof GetTableVersionsCommand === "function");
assert(typeof GetTagsCommand === "function");
assert(typeof GetTriggerCommand === "function");
assert(typeof GetTriggersCommand === "function");
assert(typeof GetUnfilteredPartitionMetadataCommand === "function");
assert(typeof GetUnfilteredPartitionsMetadataCommand === "function");
assert(typeof GetUnfilteredTableMetadataCommand === "function");
assert(typeof GetUsageProfileCommand === "function");
assert(typeof GetUserDefinedFunctionCommand === "function");
assert(typeof GetUserDefinedFunctionsCommand === "function");
assert(typeof GetWorkflowCommand === "function");
assert(typeof GetWorkflowRunCommand === "function");
assert(typeof GetWorkflowRunPropertiesCommand === "function");
assert(typeof GetWorkflowRunsCommand === "function");
assert(typeof ImportCatalogToGlueCommand === "function");
assert(typeof ListBlueprintsCommand === "function");
assert(typeof ListColumnStatisticsTaskRunsCommand === "function");
assert(typeof ListConnectionTypesCommand === "function");
assert(typeof ListCrawlersCommand === "function");
assert(typeof ListCrawlsCommand === "function");
assert(typeof ListCustomEntityTypesCommand === "function");
assert(typeof ListDataQualityResultsCommand === "function");
assert(typeof ListDataQualityRuleRecommendationRunsCommand === "function");
assert(typeof ListDataQualityRulesetEvaluationRunsCommand === "function");
assert(typeof ListDataQualityRulesetsCommand === "function");
assert(typeof ListDataQualityStatisticAnnotationsCommand === "function");
assert(typeof ListDataQualityStatisticsCommand === "function");
assert(typeof ListDevEndpointsCommand === "function");
assert(typeof ListEntitiesCommand === "function");
assert(typeof ListIntegrationResourcePropertiesCommand === "function");
assert(typeof ListJobsCommand === "function");
assert(typeof ListMLTransformsCommand === "function");
assert(typeof ListRegistriesCommand === "function");
assert(typeof ListSchemasCommand === "function");
assert(typeof ListSchemaVersionsCommand === "function");
assert(typeof ListSessionsCommand === "function");
assert(typeof ListStatementsCommand === "function");
assert(typeof ListTableOptimizerRunsCommand === "function");
assert(typeof ListTriggersCommand === "function");
assert(typeof ListUsageProfilesCommand === "function");
assert(typeof ListWorkflowsCommand === "function");
assert(typeof ModifyIntegrationCommand === "function");
assert(typeof PutDataCatalogEncryptionSettingsCommand === "function");
assert(typeof PutDataQualityProfileAnnotationCommand === "function");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof PutSchemaVersionMetadataCommand === "function");
assert(typeof PutWorkflowRunPropertiesCommand === "function");
assert(typeof QuerySchemaVersionMetadataCommand === "function");
assert(typeof RegisterSchemaVersionCommand === "function");
assert(typeof RemoveSchemaVersionMetadataCommand === "function");
assert(typeof ResetJobBookmarkCommand === "function");
assert(typeof ResumeWorkflowRunCommand === "function");
assert(typeof RunStatementCommand === "function");
assert(typeof SearchTablesCommand === "function");
assert(typeof StartBlueprintRunCommand === "function");
assert(typeof StartColumnStatisticsTaskRunCommand === "function");
assert(typeof StartColumnStatisticsTaskRunScheduleCommand === "function");
assert(typeof StartCrawlerCommand === "function");
assert(typeof StartCrawlerScheduleCommand === "function");
assert(typeof StartDataQualityRuleRecommendationRunCommand === "function");
assert(typeof StartDataQualityRulesetEvaluationRunCommand === "function");
assert(typeof StartExportLabelsTaskRunCommand === "function");
assert(typeof StartImportLabelsTaskRunCommand === "function");
assert(typeof StartJobRunCommand === "function");
assert(typeof StartMLEvaluationTaskRunCommand === "function");
assert(typeof StartMLLabelingSetGenerationTaskRunCommand === "function");
assert(typeof StartTriggerCommand === "function");
assert(typeof StartWorkflowRunCommand === "function");
assert(typeof StopColumnStatisticsTaskRunCommand === "function");
assert(typeof StopColumnStatisticsTaskRunScheduleCommand === "function");
assert(typeof StopCrawlerCommand === "function");
assert(typeof StopCrawlerScheduleCommand === "function");
assert(typeof StopSessionCommand === "function");
assert(typeof StopTriggerCommand === "function");
assert(typeof StopWorkflowRunCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof TestConnectionCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateBlueprintCommand === "function");
assert(typeof UpdateCatalogCommand === "function");
assert(typeof UpdateClassifierCommand === "function");
assert(typeof UpdateColumnStatisticsForPartitionCommand === "function");
assert(typeof UpdateColumnStatisticsForTableCommand === "function");
assert(typeof UpdateColumnStatisticsTaskSettingsCommand === "function");
assert(typeof UpdateConnectionCommand === "function");
assert(typeof UpdateCrawlerCommand === "function");
assert(typeof UpdateCrawlerScheduleCommand === "function");
assert(typeof UpdateDatabaseCommand === "function");
assert(typeof UpdateDataQualityRulesetCommand === "function");
assert(typeof UpdateDevEndpointCommand === "function");
assert(typeof UpdateGlueIdentityCenterConfigurationCommand === "function");
assert(typeof UpdateIntegrationResourcePropertyCommand === "function");
assert(typeof UpdateIntegrationTablePropertiesCommand === "function");
assert(typeof UpdateJobCommand === "function");
assert(typeof UpdateJobFromSourceControlCommand === "function");
assert(typeof UpdateMLTransformCommand === "function");
assert(typeof UpdatePartitionCommand === "function");
assert(typeof UpdateRegistryCommand === "function");
assert(typeof UpdateSchemaCommand === "function");
assert(typeof UpdateSourceControlFromJobCommand === "function");
assert(typeof UpdateTableCommand === "function");
assert(typeof UpdateTableOptimizerCommand === "function");
assert(typeof UpdateTriggerCommand === "function");
assert(typeof UpdateUsageProfileCommand === "function");
assert(typeof UpdateUserDefinedFunctionCommand === "function");
assert(typeof UpdateWorkflowCommand === "function");
// enums
assert(typeof AdditionalOptionKeys === "object");
assert(typeof AggFunction === "object");
assert(typeof AllowFullTableExternalDataAccessEnum === "object");
assert(typeof AuthenticationType === "object");
assert(typeof BackfillErrorCode === "object");
assert(typeof BlueprintRunState === "object");
assert(typeof BlueprintStatus === "object");
assert(typeof CatalogEncryptionMode === "object");
assert(typeof CloudWatchEncryptionMode === "object");
assert(typeof ColumnStatisticsState === "object");
assert(typeof ColumnStatisticsType === "object");
assert(typeof CompactionStrategy === "object");
assert(typeof Comparator === "object");
assert(typeof Compatibility === "object");
assert(typeof CompressionType === "object");
assert(typeof ComputationType === "object");
assert(typeof ComputeEnvironment === "object");
assert(typeof ConfigurationSource === "object");
assert(typeof ConnectionPropertyKey === "object");
assert(typeof ConnectionStatus === "object");
assert(typeof ConnectionType === "object");
assert(typeof CrawlerHistoryState === "object");
assert(typeof CrawlerLineageSettings === "object");
assert(typeof CrawlerState === "object");
assert(typeof CrawlState === "object");
assert(typeof CsvHeaderOption === "object");
assert(typeof CsvSerdeOption === "object");
assert(typeof DatabaseAttributes === "object");
assert(typeof DataFormat === "object");
assert(typeof DataOperation === "object");
assert(typeof DataQualityEncryptionMode === "object");
assert(typeof DataQualityModelStatus === "object");
assert(typeof DataQualityRuleResultStatus === "object");
assert(typeof DdbExportType === "object");
assert(typeof DeleteBehavior === "object");
assert(typeof DeltaTargetCompressionType === "object");
assert(typeof DQCompositeRuleEvaluationMethod === "object");
assert(typeof DQStopJobOnFailureTiming === "object");
assert(typeof DQTransformOutput === "object");
assert(typeof EnableHybridValues === "object");
assert(typeof ExecutionClass === "object");
assert(typeof ExecutionStatus === "object");
assert(typeof ExistCondition === "object");
assert(typeof FederationSourceErrorCode === "object");
assert(typeof FieldDataType === "object");
assert(typeof FieldFilterOperator === "object");
assert(typeof FieldName === "object");
assert(typeof FilterLogicalOperator === "object");
assert(typeof FilterOperation === "object");
assert(typeof FilterOperator === "object");
assert(typeof FilterValueType === "object");
assert(typeof FunctionType === "object");
assert(typeof GlueRecordType === "object");
assert(typeof HudiTargetCompressionType === "object");
assert(typeof HyperTargetCompressionType === "object");
assert(typeof IcebergNullOrder === "object");
assert(typeof IcebergSortDirection === "object");
assert(typeof IcebergStructTypeEnum === "object");
assert(typeof IcebergTargetCompressionType === "object");
assert(typeof IcebergUpdateAction === "object");
assert(typeof InclusionAnnotationValue === "object");
assert(typeof IntegrationStatus === "object");
assert(typeof JDBCConnectionType === "object");
assert(typeof JDBCDataType === "object");
assert(typeof JdbcMetadataEntry === "object");
assert(typeof JobBookmarksEncryptionMode === "object");
assert(typeof JobMode === "object");
assert(typeof JobRunState === "object");
assert(typeof JoinType === "object");
assert(typeof Language === "object");
assert(typeof LastCrawlStatus === "object");
assert(typeof LastRefreshType === "object");
assert(typeof Logical === "object");
assert(typeof LogicalOperator === "object");
assert(typeof MetadataOperation === "object");
assert(typeof MLUserDataEncryptionModeString === "object");
assert(typeof NodeType === "object");
assert(typeof OAuth2GrantType === "object");
assert(typeof ParamType === "object");
assert(typeof ParquetCompressionType === "object");
assert(typeof PartitionIndexStatus === "object");
assert(typeof Permission === "object");
assert(typeof PermissionType === "object");
assert(typeof PiiType === "object");
assert(typeof PrincipalType === "object");
assert(typeof PropertyType === "object");
assert(typeof QuoteChar === "object");
assert(typeof RecrawlBehavior === "object");
assert(typeof RegistryStatus === "object");
assert(typeof ResourceAction === "object");
assert(typeof ResourceShareType === "object");
assert(typeof ResourceState === "object");
assert(typeof ResourceType === "object");
assert(typeof S3EncryptionMode === "object");
assert(typeof ScheduleState === "object");
assert(typeof ScheduleType === "object");
assert(typeof SchemaDiffType === "object");
assert(typeof SchemaStatus === "object");
assert(typeof SchemaVersionStatus === "object");
assert(typeof Separator === "object");
assert(typeof SessionStatus === "object");
assert(typeof SettingSource === "object");
assert(typeof Sort === "object");
assert(typeof SortDirectionType === "object");
assert(typeof SourceControlAuthStrategy === "object");
assert(typeof SourceControlProvider === "object");
assert(typeof StartingPosition === "object");
assert(typeof StatementState === "object");
assert(typeof StatisticEvaluationLevel === "object");
assert(typeof TableAttributes === "object");
assert(typeof TableOptimizerEventType === "object");
assert(typeof TableOptimizerType === "object");
assert(typeof TargetFormat === "object");
assert(typeof TaskRunSortColumnType === "object");
assert(typeof TaskStatusType === "object");
assert(typeof TaskType === "object");
assert(typeof TransformSortColumnType === "object");
assert(typeof TransformStatusType === "object");
assert(typeof TransformType === "object");
assert(typeof TriggerState === "object");
assert(typeof TriggerType === "object");
assert(typeof UnionType === "object");
assert(typeof UnnestSpec === "object");
assert(typeof UpdateBehavior === "object");
assert(typeof UpdateCatalogBehavior === "object");
assert(typeof ViewDialect === "object");
assert(typeof ViewUpdateAction === "object");
assert(typeof WorkerType === "object");
assert(typeof WorkflowRunStatus === "object");
// errors
assert(AccessDeniedException.prototype instanceof GlueServiceException);
assert(AlreadyExistsException.prototype instanceof GlueServiceException);
assert(ColumnStatisticsTaskNotRunningException.prototype instanceof GlueServiceException);
assert(ColumnStatisticsTaskRunningException.prototype instanceof GlueServiceException);
assert(ColumnStatisticsTaskStoppingException.prototype instanceof GlueServiceException);
assert(ConcurrentModificationException.prototype instanceof GlueServiceException);
assert(ConcurrentRunsExceededException.prototype instanceof GlueServiceException);
assert(ConditionCheckFailureException.prototype instanceof GlueServiceException);
assert(ConflictException.prototype instanceof GlueServiceException);
assert(CrawlerNotRunningException.prototype instanceof GlueServiceException);
assert(CrawlerRunningException.prototype instanceof GlueServiceException);
assert(CrawlerStoppingException.prototype instanceof GlueServiceException);
assert(EntityNotFoundException.prototype instanceof GlueServiceException);
assert(FederatedResourceAlreadyExistsException.prototype instanceof GlueServiceException);
assert(FederationSourceException.prototype instanceof GlueServiceException);
assert(FederationSourceRetryableException.prototype instanceof GlueServiceException);
assert(GlueEncryptionException.prototype instanceof GlueServiceException);
assert(IdempotentParameterMismatchException.prototype instanceof GlueServiceException);
assert(IllegalBlueprintStateException.prototype instanceof GlueServiceException);
assert(IllegalSessionStateException.prototype instanceof GlueServiceException);
assert(IllegalWorkflowStateException.prototype instanceof GlueServiceException);
assert(IntegrationConflictOperationFault.prototype instanceof GlueServiceException);
assert(IntegrationNotFoundFault.prototype instanceof GlueServiceException);
assert(IntegrationQuotaExceededFault.prototype instanceof GlueServiceException);
assert(InternalServerException.prototype instanceof GlueServiceException);
assert(InternalServiceException.prototype instanceof GlueServiceException);
assert(InvalidInputException.prototype instanceof GlueServiceException);
assert(InvalidIntegrationStateFault.prototype instanceof GlueServiceException);
assert(InvalidStateException.prototype instanceof GlueServiceException);
assert(KMSKeyNotAccessibleFault.prototype instanceof GlueServiceException);
assert(MLTransformNotReadyException.prototype instanceof GlueServiceException);
assert(NoScheduleException.prototype instanceof GlueServiceException);
assert(OperationNotSupportedException.prototype instanceof GlueServiceException);
assert(OperationTimeoutException.prototype instanceof GlueServiceException);
assert(PermissionTypeMismatchException.prototype instanceof GlueServiceException);
assert(ResourceNotFoundException.prototype instanceof GlueServiceException);
assert(ResourceNotReadyException.prototype instanceof GlueServiceException);
assert(ResourceNumberLimitExceededException.prototype instanceof GlueServiceException);
assert(SchedulerNotRunningException.prototype instanceof GlueServiceException);
assert(SchedulerRunningException.prototype instanceof GlueServiceException);
assert(SchedulerTransitioningException.prototype instanceof GlueServiceException);
assert(TargetResourceNotFound.prototype instanceof GlueServiceException);
assert(ThrottlingException.prototype instanceof GlueServiceException);
assert(ValidationException.prototype instanceof GlueServiceException);
assert(VersionMismatchException.prototype instanceof GlueServiceException);
assert(GlueServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeEntity === "function");
assert(typeof paginateGetBlueprintRuns === "function");
assert(typeof paginateGetClassifiers === "function");
assert(typeof paginateGetColumnStatisticsTaskRuns === "function");
assert(typeof paginateGetConnections === "function");
assert(typeof paginateGetCrawlerMetrics === "function");
assert(typeof paginateGetCrawlers === "function");
assert(typeof paginateGetDatabases === "function");
assert(typeof paginateGetDevEndpoints === "function");
assert(typeof paginateGetJobRuns === "function");
assert(typeof paginateGetJobs === "function");
assert(typeof paginateGetMLTaskRuns === "function");
assert(typeof paginateGetMLTransforms === "function");
assert(typeof paginateGetPartitionIndexes === "function");
assert(typeof paginateGetPartitions === "function");
assert(typeof paginateGetResourcePolicies === "function");
assert(typeof paginateGetSecurityConfigurations === "function");
assert(typeof paginateGetTableVersions === "function");
assert(typeof paginateGetTables === "function");
assert(typeof paginateGetTriggers === "function");
assert(typeof paginateGetUnfilteredPartitionsMetadata === "function");
assert(typeof paginateGetUserDefinedFunctions === "function");
assert(typeof paginateGetWorkflowRuns === "function");
assert(typeof paginateListBlueprints === "function");
assert(typeof paginateListColumnStatisticsTaskRuns === "function");
assert(typeof paginateListConnectionTypes === "function");
assert(typeof paginateListCrawlers === "function");
assert(typeof paginateListCustomEntityTypes === "function");
assert(typeof paginateListDataQualityResults === "function");
assert(typeof paginateListDataQualityRuleRecommendationRuns === "function");
assert(typeof paginateListDataQualityRulesetEvaluationRuns === "function");
assert(typeof paginateListDataQualityRulesets === "function");
assert(typeof paginateListDevEndpoints === "function");
assert(typeof paginateListEntities === "function");
assert(typeof paginateListJobs === "function");
assert(typeof paginateListMLTransforms === "function");
assert(typeof paginateListRegistries === "function");
assert(typeof paginateListSchemaVersions === "function");
assert(typeof paginateListSchemas === "function");
assert(typeof paginateListSessions === "function");
assert(typeof paginateListTableOptimizerRuns === "function");
assert(typeof paginateListTriggers === "function");
assert(typeof paginateListUsageProfiles === "function");
assert(typeof paginateListWorkflows === "function");
assert(typeof paginateSearchTables === "function");
console.log(`Glue index test passed.`);
