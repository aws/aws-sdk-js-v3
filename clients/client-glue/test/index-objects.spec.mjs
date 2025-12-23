import {
  AccessDeniedException,
  AccessDeniedException$,
  Action$,
  AdditionalOptionKeys,
  AggFunction,
  Aggregate$,
  AggregateOperation$,
  AllowedValue$,
  AllowFullTableExternalDataAccessEnum,
  AlreadyExistsException,
  AlreadyExistsException$,
  AmazonRedshiftAdvancedOption$,
  AmazonRedshiftNodeData$,
  AmazonRedshiftSource$,
  AmazonRedshiftTarget$,
  AnnotationError$,
  ApplyMapping$,
  AthenaConnectorSource$,
  AuditContext$,
  AuthConfiguration$,
  AuthenticationConfiguration$,
  AuthenticationConfigurationInput$,
  AuthenticationType,
  AuthorizationCodeProperties$,
  AutoDataQuality$,
  BackfillError$,
  BackfillErrorCode,
  BasicAuthenticationCredentials$,
  BasicCatalogTarget$,
  BatchCreatePartition$,
  BatchCreatePartitionCommand,
  BatchCreatePartitionRequest$,
  BatchCreatePartitionResponse$,
  BatchDeleteConnection$,
  BatchDeleteConnectionCommand,
  BatchDeleteConnectionRequest$,
  BatchDeleteConnectionResponse$,
  BatchDeletePartition$,
  BatchDeletePartitionCommand,
  BatchDeletePartitionRequest$,
  BatchDeletePartitionResponse$,
  BatchDeleteTable$,
  BatchDeleteTableCommand,
  BatchDeleteTableRequest$,
  BatchDeleteTableResponse$,
  BatchDeleteTableVersion$,
  BatchDeleteTableVersionCommand,
  BatchDeleteTableVersionRequest$,
  BatchDeleteTableVersionResponse$,
  BatchGetBlueprints$,
  BatchGetBlueprintsCommand,
  BatchGetBlueprintsRequest$,
  BatchGetBlueprintsResponse$,
  BatchGetCrawlers$,
  BatchGetCrawlersCommand,
  BatchGetCrawlersRequest$,
  BatchGetCrawlersResponse$,
  BatchGetCustomEntityTypes$,
  BatchGetCustomEntityTypesCommand,
  BatchGetCustomEntityTypesRequest$,
  BatchGetCustomEntityTypesResponse$,
  BatchGetDataQualityResult$,
  BatchGetDataQualityResultCommand,
  BatchGetDataQualityResultRequest$,
  BatchGetDataQualityResultResponse$,
  BatchGetDevEndpoints$,
  BatchGetDevEndpointsCommand,
  BatchGetDevEndpointsRequest$,
  BatchGetDevEndpointsResponse$,
  BatchGetJobs$,
  BatchGetJobsCommand,
  BatchGetJobsRequest$,
  BatchGetJobsResponse$,
  BatchGetPartition$,
  BatchGetPartitionCommand,
  BatchGetPartitionRequest$,
  BatchGetPartitionResponse$,
  BatchGetTableOptimizer$,
  BatchGetTableOptimizerCommand,
  BatchGetTableOptimizerEntry$,
  BatchGetTableOptimizerError$,
  BatchGetTableOptimizerRequest$,
  BatchGetTableOptimizerResponse$,
  BatchGetTriggers$,
  BatchGetTriggersCommand,
  BatchGetTriggersRequest$,
  BatchGetTriggersResponse$,
  BatchGetWorkflows$,
  BatchGetWorkflowsCommand,
  BatchGetWorkflowsRequest$,
  BatchGetWorkflowsResponse$,
  BatchPutDataQualityStatisticAnnotation$,
  BatchPutDataQualityStatisticAnnotationCommand,
  BatchPutDataQualityStatisticAnnotationRequest$,
  BatchPutDataQualityStatisticAnnotationResponse$,
  BatchStopJobRun$,
  BatchStopJobRunCommand,
  BatchStopJobRunError$,
  BatchStopJobRunRequest$,
  BatchStopJobRunResponse$,
  BatchStopJobRunSuccessfulSubmission$,
  BatchTableOptimizer$,
  BatchUpdatePartition$,
  BatchUpdatePartitionCommand,
  BatchUpdatePartitionFailureEntry$,
  BatchUpdatePartitionRequest$,
  BatchUpdatePartitionRequestEntry$,
  BatchUpdatePartitionResponse$,
  BinaryColumnStatisticsData$,
  Blueprint$,
  BlueprintDetails$,
  BlueprintRun$,
  BlueprintRunState,
  BlueprintStatus,
  BooleanColumnStatisticsData$,
  CancelDataQualityRuleRecommendationRun$,
  CancelDataQualityRuleRecommendationRunCommand,
  CancelDataQualityRuleRecommendationRunRequest$,
  CancelDataQualityRuleRecommendationRunResponse$,
  CancelDataQualityRulesetEvaluationRun$,
  CancelDataQualityRulesetEvaluationRunCommand,
  CancelDataQualityRulesetEvaluationRunRequest$,
  CancelDataQualityRulesetEvaluationRunResponse$,
  CancelMLTaskRun$,
  CancelMLTaskRunCommand,
  CancelMLTaskRunRequest$,
  CancelMLTaskRunResponse$,
  CancelStatement$,
  CancelStatementCommand,
  CancelStatementRequest$,
  CancelStatementResponse$,
  Capabilities$,
  Catalog$,
  CatalogDeltaSource$,
  CatalogEncryptionMode,
  CatalogEntry$,
  CatalogHudiSource$,
  CatalogIcebergSource$,
  CatalogImportStatus$,
  CatalogInput$,
  CatalogKafkaSource$,
  CatalogKinesisSource$,
  CatalogProperties$,
  CatalogPropertiesOutput$,
  CatalogSchemaChangePolicy$,
  CatalogSource$,
  CatalogTarget$,
  CheckSchemaVersionValidity$,
  CheckSchemaVersionValidityCommand,
  CheckSchemaVersionValidityInput$,
  CheckSchemaVersionValidityResponse$,
  Classifier$,
  CloudWatchEncryption$,
  CloudWatchEncryptionMode,
  CodeGenConfigurationNode$,
  CodeGenEdge$,
  CodeGenNode$,
  CodeGenNodeArg$,
  Column$,
  ColumnError$,
  ColumnImportance$,
  ColumnRowFilter$,
  ColumnStatistics$,
  ColumnStatisticsData$,
  ColumnStatisticsError$,
  ColumnStatisticsState,
  ColumnStatisticsTaskNotRunningException,
  ColumnStatisticsTaskNotRunningException$,
  ColumnStatisticsTaskRun$,
  ColumnStatisticsTaskRunningException,
  ColumnStatisticsTaskRunningException$,
  ColumnStatisticsTaskSettings$,
  ColumnStatisticsTaskStoppingException,
  ColumnStatisticsTaskStoppingException$,
  ColumnStatisticsType,
  CompactionConfiguration$,
  CompactionMetrics$,
  CompactionStrategy,
  Comparator,
  Compatibility,
  CompressionType,
  ComputationType,
  ComputeEnvironment,
  ComputeEnvironmentConfiguration$,
  ConcurrentModificationException,
  ConcurrentModificationException$,
  ConcurrentRunsExceededException,
  ConcurrentRunsExceededException$,
  Condition$,
  ConditionCheckFailureException,
  ConditionCheckFailureException$,
  ConditionExpression$,
  ConfigurationObject$,
  ConfigurationSource,
  ConflictException,
  ConflictException$,
  ConfusionMatrix$,
  Connection$,
  ConnectionInput$,
  ConnectionPasswordEncryption$,
  ConnectionPropertyKey,
  ConnectionsList$,
  ConnectionStatus,
  ConnectionType,
  ConnectionTypeBrief$,
  ConnectionTypeVariant$,
  ConnectorDataSource$,
  ConnectorDataTarget$,
  Crawl$,
  Crawler$,
  CrawlerHistory$,
  CrawlerHistoryState,
  CrawlerLineageSettings,
  CrawlerMetrics$,
  CrawlerNodeDetails$,
  CrawlerNotRunningException,
  CrawlerNotRunningException$,
  CrawlerRunningException,
  CrawlerRunningException$,
  CrawlerState,
  CrawlerStoppingException,
  CrawlerStoppingException$,
  CrawlerTargets$,
  CrawlsFilter$,
  CrawlState,
  CreateBlueprint$,
  CreateBlueprintCommand,
  CreateBlueprintRequest$,
  CreateBlueprintResponse$,
  CreateCatalog$,
  CreateCatalogCommand,
  CreateCatalogRequest$,
  CreateCatalogResponse$,
  CreateClassifier$,
  CreateClassifierCommand,
  CreateClassifierRequest$,
  CreateClassifierResponse$,
  CreateColumnStatisticsTaskSettings$,
  CreateColumnStatisticsTaskSettingsCommand,
  CreateColumnStatisticsTaskSettingsRequest$,
  CreateColumnStatisticsTaskSettingsResponse$,
  CreateConnection$,
  CreateConnectionCommand,
  CreateConnectionRequest$,
  CreateConnectionResponse$,
  CreateCrawler$,
  CreateCrawlerCommand,
  CreateCrawlerRequest$,
  CreateCrawlerResponse$,
  CreateCsvClassifierRequest$,
  CreateCustomEntityType$,
  CreateCustomEntityTypeCommand,
  CreateCustomEntityTypeRequest$,
  CreateCustomEntityTypeResponse$,
  CreateDatabase$,
  CreateDatabaseCommand,
  CreateDatabaseRequest$,
  CreateDatabaseResponse$,
  CreateDataQualityRuleset$,
  CreateDataQualityRulesetCommand,
  CreateDataQualityRulesetRequest$,
  CreateDataQualityRulesetResponse$,
  CreateDevEndpoint$,
  CreateDevEndpointCommand,
  CreateDevEndpointRequest$,
  CreateDevEndpointResponse$,
  CreateGlueIdentityCenterConfiguration$,
  CreateGlueIdentityCenterConfigurationCommand,
  CreateGlueIdentityCenterConfigurationRequest$,
  CreateGlueIdentityCenterConfigurationResponse$,
  CreateGrokClassifierRequest$,
  CreateIcebergTableInput$,
  CreateIntegration$,
  CreateIntegrationCommand,
  CreateIntegrationRequest$,
  CreateIntegrationResourceProperty$,
  CreateIntegrationResourcePropertyCommand,
  CreateIntegrationResourcePropertyRequest$,
  CreateIntegrationResourcePropertyResponse$,
  CreateIntegrationResponse$,
  CreateIntegrationTableProperties$,
  CreateIntegrationTablePropertiesCommand,
  CreateIntegrationTablePropertiesRequest$,
  CreateIntegrationTablePropertiesResponse$,
  CreateJob$,
  CreateJobCommand,
  CreateJobRequest$,
  CreateJobResponse$,
  CreateJsonClassifierRequest$,
  CreateMLTransform$,
  CreateMLTransformCommand,
  CreateMLTransformRequest$,
  CreateMLTransformResponse$,
  CreatePartition$,
  CreatePartitionCommand,
  CreatePartitionIndex$,
  CreatePartitionIndexCommand,
  CreatePartitionIndexRequest$,
  CreatePartitionIndexResponse$,
  CreatePartitionRequest$,
  CreatePartitionResponse$,
  CreateRegistry$,
  CreateRegistryCommand,
  CreateRegistryInput$,
  CreateRegistryResponse$,
  CreateSchema$,
  CreateSchemaCommand,
  CreateSchemaInput$,
  CreateSchemaResponse$,
  CreateScript$,
  CreateScriptCommand,
  CreateScriptRequest$,
  CreateScriptResponse$,
  CreateSecurityConfiguration$,
  CreateSecurityConfigurationCommand,
  CreateSecurityConfigurationRequest$,
  CreateSecurityConfigurationResponse$,
  CreateSession$,
  CreateSessionCommand,
  CreateSessionRequest$,
  CreateSessionResponse$,
  CreateTable$,
  CreateTableCommand,
  CreateTableOptimizer$,
  CreateTableOptimizerCommand,
  CreateTableOptimizerRequest$,
  CreateTableOptimizerResponse$,
  CreateTableRequest$,
  CreateTableResponse$,
  CreateTrigger$,
  CreateTriggerCommand,
  CreateTriggerRequest$,
  CreateTriggerResponse$,
  CreateUsageProfile$,
  CreateUsageProfileCommand,
  CreateUsageProfileRequest$,
  CreateUsageProfileResponse$,
  CreateUserDefinedFunction$,
  CreateUserDefinedFunctionCommand,
  CreateUserDefinedFunctionRequest$,
  CreateUserDefinedFunctionResponse$,
  CreateWorkflow$,
  CreateWorkflowCommand,
  CreateWorkflowRequest$,
  CreateWorkflowResponse$,
  CreateXMLClassifierRequest$,
  CsvClassifier$,
  CsvHeaderOption,
  CsvSerdeOption,
  CustomCode$,
  CustomEntityType$,
  Database$,
  DatabaseAttributes,
  DatabaseIdentifier$,
  DatabaseInput$,
  DataCatalogEncryptionSettings$,
  DataFormat,
  DataLakeAccessProperties$,
  DataLakeAccessPropertiesOutput$,
  DataLakePrincipal$,
  DataOperation,
  DatapointInclusionAnnotation$,
  DataQualityAggregatedMetrics$,
  DataQualityAnalyzerResult$,
  DataQualityEncryption$,
  DataQualityEncryptionMode,
  DataQualityEvaluationRunAdditionalRunOptions$,
  DataQualityGlueTable$,
  DataQualityMetricValues$,
  DataQualityModelStatus,
  DataQualityObservation$,
  DataQualityResult$,
  DataQualityResultDescription$,
  DataQualityResultFilterCriteria$,
  DataQualityRuleRecommendationRunDescription$,
  DataQualityRuleRecommendationRunFilter$,
  DataQualityRuleResult$,
  DataQualityRuleResultStatus,
  DataQualityRulesetEvaluationRunDescription$,
  DataQualityRulesetEvaluationRunFilter$,
  DataQualityRulesetFilterCriteria$,
  DataQualityRulesetListDetails$,
  DataQualityTargetTable$,
  DataSource$,
  Datatype$,
  DateColumnStatisticsData$,
  DDBELTCatalogAdditionalOptions$,
  DDBELTConnectionOptions$,
  DdbExportType,
  DecimalColumnStatisticsData$,
  DecimalNumber$,
  DeleteBehavior,
  DeleteBlueprint$,
  DeleteBlueprintCommand,
  DeleteBlueprintRequest$,
  DeleteBlueprintResponse$,
  DeleteCatalog$,
  DeleteCatalogCommand,
  DeleteCatalogRequest$,
  DeleteCatalogResponse$,
  DeleteClassifier$,
  DeleteClassifierCommand,
  DeleteClassifierRequest$,
  DeleteClassifierResponse$,
  DeleteColumnStatisticsForPartition$,
  DeleteColumnStatisticsForPartitionCommand,
  DeleteColumnStatisticsForPartitionRequest$,
  DeleteColumnStatisticsForPartitionResponse$,
  DeleteColumnStatisticsForTable$,
  DeleteColumnStatisticsForTableCommand,
  DeleteColumnStatisticsForTableRequest$,
  DeleteColumnStatisticsForTableResponse$,
  DeleteColumnStatisticsTaskSettings$,
  DeleteColumnStatisticsTaskSettingsCommand,
  DeleteColumnStatisticsTaskSettingsRequest$,
  DeleteColumnStatisticsTaskSettingsResponse$,
  DeleteConnection$,
  DeleteConnectionCommand,
  DeleteConnectionRequest$,
  DeleteConnectionResponse$,
  DeleteCrawler$,
  DeleteCrawlerCommand,
  DeleteCrawlerRequest$,
  DeleteCrawlerResponse$,
  DeleteCustomEntityType$,
  DeleteCustomEntityTypeCommand,
  DeleteCustomEntityTypeRequest$,
  DeleteCustomEntityTypeResponse$,
  DeleteDatabase$,
  DeleteDatabaseCommand,
  DeleteDatabaseRequest$,
  DeleteDatabaseResponse$,
  DeleteDataQualityRuleset$,
  DeleteDataQualityRulesetCommand,
  DeleteDataQualityRulesetRequest$,
  DeleteDataQualityRulesetResponse$,
  DeleteDevEndpoint$,
  DeleteDevEndpointCommand,
  DeleteDevEndpointRequest$,
  DeleteDevEndpointResponse$,
  DeleteGlueIdentityCenterConfiguration$,
  DeleteGlueIdentityCenterConfigurationCommand,
  DeleteGlueIdentityCenterConfigurationRequest$,
  DeleteGlueIdentityCenterConfigurationResponse$,
  DeleteIntegration$,
  DeleteIntegrationCommand,
  DeleteIntegrationRequest$,
  DeleteIntegrationResourceProperty$,
  DeleteIntegrationResourcePropertyCommand,
  DeleteIntegrationResourcePropertyRequest$,
  DeleteIntegrationResourcePropertyResponse$,
  DeleteIntegrationResponse$,
  DeleteIntegrationTableProperties$,
  DeleteIntegrationTablePropertiesCommand,
  DeleteIntegrationTablePropertiesRequest$,
  DeleteIntegrationTablePropertiesResponse$,
  DeleteJob$,
  DeleteJobCommand,
  DeleteJobRequest$,
  DeleteJobResponse$,
  DeleteMLTransform$,
  DeleteMLTransformCommand,
  DeleteMLTransformRequest$,
  DeleteMLTransformResponse$,
  DeletePartition$,
  DeletePartitionCommand,
  DeletePartitionIndex$,
  DeletePartitionIndexCommand,
  DeletePartitionIndexRequest$,
  DeletePartitionIndexResponse$,
  DeletePartitionRequest$,
  DeletePartitionResponse$,
  DeleteRegistry$,
  DeleteRegistryCommand,
  DeleteRegistryInput$,
  DeleteRegistryResponse$,
  DeleteResourcePolicy$,
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyRequest$,
  DeleteResourcePolicyResponse$,
  DeleteSchema$,
  DeleteSchemaCommand,
  DeleteSchemaInput$,
  DeleteSchemaResponse$,
  DeleteSchemaVersions$,
  DeleteSchemaVersionsCommand,
  DeleteSchemaVersionsInput$,
  DeleteSchemaVersionsResponse$,
  DeleteSecurityConfiguration$,
  DeleteSecurityConfigurationCommand,
  DeleteSecurityConfigurationRequest$,
  DeleteSecurityConfigurationResponse$,
  DeleteSession$,
  DeleteSessionCommand,
  DeleteSessionRequest$,
  DeleteSessionResponse$,
  DeleteTable$,
  DeleteTableCommand,
  DeleteTableOptimizer$,
  DeleteTableOptimizerCommand,
  DeleteTableOptimizerRequest$,
  DeleteTableOptimizerResponse$,
  DeleteTableRequest$,
  DeleteTableResponse$,
  DeleteTableVersion$,
  DeleteTableVersionCommand,
  DeleteTableVersionRequest$,
  DeleteTableVersionResponse$,
  DeleteTrigger$,
  DeleteTriggerCommand,
  DeleteTriggerRequest$,
  DeleteTriggerResponse$,
  DeleteUsageProfile$,
  DeleteUsageProfileCommand,
  DeleteUsageProfileRequest$,
  DeleteUsageProfileResponse$,
  DeleteUserDefinedFunction$,
  DeleteUserDefinedFunctionCommand,
  DeleteUserDefinedFunctionRequest$,
  DeleteUserDefinedFunctionResponse$,
  DeleteWorkflow$,
  DeleteWorkflowCommand,
  DeleteWorkflowRequest$,
  DeleteWorkflowResponse$,
  DeltaTarget$,
  DeltaTargetCompressionType,
  DescribeConnectionType$,
  DescribeConnectionTypeCommand,
  DescribeConnectionTypeRequest$,
  DescribeConnectionTypeResponse$,
  DescribeEntity$,
  DescribeEntityCommand,
  DescribeEntityRequest$,
  DescribeEntityResponse$,
  DescribeInboundIntegrations$,
  DescribeInboundIntegrationsCommand,
  DescribeInboundIntegrationsRequest$,
  DescribeInboundIntegrationsResponse$,
  DescribeIntegrations$,
  DescribeIntegrationsCommand,
  DescribeIntegrationsRequest$,
  DescribeIntegrationsResponse$,
  DevEndpoint$,
  DevEndpointCustomLibraries$,
  DirectJDBCSource$,
  DirectKafkaSource$,
  DirectKinesisSource$,
  DirectSchemaChangePolicy$,
  DoubleColumnStatisticsData$,
  DQCompositeRuleEvaluationMethod,
  DQResultsPublishingOptions$,
  DQStopJobOnFailureOptions$,
  DQStopJobOnFailureTiming,
  DQTransformOutput,
  DropDuplicates$,
  DropFields$,
  DropNullFields$,
  DynamicTransform$,
  DynamoDBCatalogSource$,
  DynamoDBELTConnectorSource$,
  DynamoDBTarget$,
  Edge$,
  EnableHybridValues,
  EncryptionAtRest$,
  EncryptionConfiguration$,
  Entity$,
  EntityNotFoundException,
  EntityNotFoundException$,
  ErrorDetail$,
  ErrorDetails$,
  EvaluateDataQuality$,
  EvaluateDataQualityMultiFrame$,
  EvaluationMetrics$,
  EventBatchingCondition$,
  ExecutionAttempt$,
  ExecutionClass,
  ExecutionProperty$,
  ExecutionStatus,
  ExistCondition,
  ExportLabelsTaskRunProperties$,
  FederatedCatalog$,
  FederatedDatabase$,
  FederatedResourceAlreadyExistsException,
  FederatedResourceAlreadyExistsException$,
  FederatedTable$,
  FederationSourceErrorCode,
  FederationSourceException,
  FederationSourceException$,
  FederationSourceRetryableException,
  FederationSourceRetryableException$,
  Field$,
  FieldDataType,
  FieldFilterOperator,
  FieldName,
  FillMissingValues$,
  Filter$,
  FilterExpression$,
  FilterLogicalOperator,
  FilterOperation,
  FilterOperator,
  FilterValue$,
  FilterValueType,
  FindMatchesMetrics$,
  FindMatchesParameters$,
  FindMatchesTaskRunProperties$,
  FunctionType,
  GetBlueprint$,
  GetBlueprintCommand,
  GetBlueprintRequest$,
  GetBlueprintResponse$,
  GetBlueprintRun$,
  GetBlueprintRunCommand,
  GetBlueprintRunRequest$,
  GetBlueprintRunResponse$,
  GetBlueprintRuns$,
  GetBlueprintRunsCommand,
  GetBlueprintRunsRequest$,
  GetBlueprintRunsResponse$,
  GetCatalog$,
  GetCatalogCommand,
  GetCatalogImportStatus$,
  GetCatalogImportStatusCommand,
  GetCatalogImportStatusRequest$,
  GetCatalogImportStatusResponse$,
  GetCatalogRequest$,
  GetCatalogResponse$,
  GetCatalogs$,
  GetCatalogsCommand,
  GetCatalogsRequest$,
  GetCatalogsResponse$,
  GetClassifier$,
  GetClassifierCommand,
  GetClassifierRequest$,
  GetClassifierResponse$,
  GetClassifiers$,
  GetClassifiersCommand,
  GetClassifiersRequest$,
  GetClassifiersResponse$,
  GetColumnStatisticsForPartition$,
  GetColumnStatisticsForPartitionCommand,
  GetColumnStatisticsForPartitionRequest$,
  GetColumnStatisticsForPartitionResponse$,
  GetColumnStatisticsForTable$,
  GetColumnStatisticsForTableCommand,
  GetColumnStatisticsForTableRequest$,
  GetColumnStatisticsForTableResponse$,
  GetColumnStatisticsTaskRun$,
  GetColumnStatisticsTaskRunCommand,
  GetColumnStatisticsTaskRunRequest$,
  GetColumnStatisticsTaskRunResponse$,
  GetColumnStatisticsTaskRuns$,
  GetColumnStatisticsTaskRunsCommand,
  GetColumnStatisticsTaskRunsRequest$,
  GetColumnStatisticsTaskRunsResponse$,
  GetColumnStatisticsTaskSettings$,
  GetColumnStatisticsTaskSettingsCommand,
  GetColumnStatisticsTaskSettingsRequest$,
  GetColumnStatisticsTaskSettingsResponse$,
  GetConnection$,
  GetConnectionCommand,
  GetConnectionRequest$,
  GetConnectionResponse$,
  GetConnections$,
  GetConnectionsCommand,
  GetConnectionsFilter$,
  GetConnectionsRequest$,
  GetConnectionsResponse$,
  GetCrawler$,
  GetCrawlerCommand,
  GetCrawlerMetrics$,
  GetCrawlerMetricsCommand,
  GetCrawlerMetricsRequest$,
  GetCrawlerMetricsResponse$,
  GetCrawlerRequest$,
  GetCrawlerResponse$,
  GetCrawlers$,
  GetCrawlersCommand,
  GetCrawlersRequest$,
  GetCrawlersResponse$,
  GetCustomEntityType$,
  GetCustomEntityTypeCommand,
  GetCustomEntityTypeRequest$,
  GetCustomEntityTypeResponse$,
  GetDatabase$,
  GetDatabaseCommand,
  GetDatabaseRequest$,
  GetDatabaseResponse$,
  GetDatabases$,
  GetDatabasesCommand,
  GetDatabasesRequest$,
  GetDatabasesResponse$,
  GetDataCatalogEncryptionSettings$,
  GetDataCatalogEncryptionSettingsCommand,
  GetDataCatalogEncryptionSettingsRequest$,
  GetDataCatalogEncryptionSettingsResponse$,
  GetDataflowGraph$,
  GetDataflowGraphCommand,
  GetDataflowGraphRequest$,
  GetDataflowGraphResponse$,
  GetDataQualityModel$,
  GetDataQualityModelCommand,
  GetDataQualityModelRequest$,
  GetDataQualityModelResponse$,
  GetDataQualityModelResult$,
  GetDataQualityModelResultCommand,
  GetDataQualityModelResultRequest$,
  GetDataQualityModelResultResponse$,
  GetDataQualityResult$,
  GetDataQualityResultCommand,
  GetDataQualityResultRequest$,
  GetDataQualityResultResponse$,
  GetDataQualityRuleRecommendationRun$,
  GetDataQualityRuleRecommendationRunCommand,
  GetDataQualityRuleRecommendationRunRequest$,
  GetDataQualityRuleRecommendationRunResponse$,
  GetDataQualityRuleset$,
  GetDataQualityRulesetCommand,
  GetDataQualityRulesetEvaluationRun$,
  GetDataQualityRulesetEvaluationRunCommand,
  GetDataQualityRulesetEvaluationRunRequest$,
  GetDataQualityRulesetEvaluationRunResponse$,
  GetDataQualityRulesetRequest$,
  GetDataQualityRulesetResponse$,
  GetDevEndpoint$,
  GetDevEndpointCommand,
  GetDevEndpointRequest$,
  GetDevEndpointResponse$,
  GetDevEndpoints$,
  GetDevEndpointsCommand,
  GetDevEndpointsRequest$,
  GetDevEndpointsResponse$,
  GetEntityRecords$,
  GetEntityRecordsCommand,
  GetEntityRecordsRequest$,
  GetEntityRecordsResponse$,
  GetGlueIdentityCenterConfiguration$,
  GetGlueIdentityCenterConfigurationCommand,
  GetGlueIdentityCenterConfigurationRequest$,
  GetGlueIdentityCenterConfigurationResponse$,
  GetIntegrationResourceProperty$,
  GetIntegrationResourcePropertyCommand,
  GetIntegrationResourcePropertyRequest$,
  GetIntegrationResourcePropertyResponse$,
  GetIntegrationTableProperties$,
  GetIntegrationTablePropertiesCommand,
  GetIntegrationTablePropertiesRequest$,
  GetIntegrationTablePropertiesResponse$,
  GetJob$,
  GetJobBookmark$,
  GetJobBookmarkCommand,
  GetJobBookmarkRequest$,
  GetJobBookmarkResponse$,
  GetJobCommand,
  GetJobRequest$,
  GetJobResponse$,
  GetJobRun$,
  GetJobRunCommand,
  GetJobRunRequest$,
  GetJobRunResponse$,
  GetJobRuns$,
  GetJobRunsCommand,
  GetJobRunsRequest$,
  GetJobRunsResponse$,
  GetJobs$,
  GetJobsCommand,
  GetJobsRequest$,
  GetJobsResponse$,
  GetMapping$,
  GetMappingCommand,
  GetMappingRequest$,
  GetMappingResponse$,
  GetMLTaskRun$,
  GetMLTaskRunCommand,
  GetMLTaskRunRequest$,
  GetMLTaskRunResponse$,
  GetMLTaskRuns$,
  GetMLTaskRunsCommand,
  GetMLTaskRunsRequest$,
  GetMLTaskRunsResponse$,
  GetMLTransform$,
  GetMLTransformCommand,
  GetMLTransformRequest$,
  GetMLTransformResponse$,
  GetMLTransforms$,
  GetMLTransformsCommand,
  GetMLTransformsRequest$,
  GetMLTransformsResponse$,
  GetPartition$,
  GetPartitionCommand,
  GetPartitionIndexes$,
  GetPartitionIndexesCommand,
  GetPartitionIndexesRequest$,
  GetPartitionIndexesResponse$,
  GetPartitionRequest$,
  GetPartitionResponse$,
  GetPartitions$,
  GetPartitionsCommand,
  GetPartitionsRequest$,
  GetPartitionsResponse$,
  GetPlan$,
  GetPlanCommand,
  GetPlanRequest$,
  GetPlanResponse$,
  GetRegistry$,
  GetRegistryCommand,
  GetRegistryInput$,
  GetRegistryResponse$,
  GetResourcePolicies$,
  GetResourcePoliciesCommand,
  GetResourcePoliciesRequest$,
  GetResourcePoliciesResponse$,
  GetResourcePolicy$,
  GetResourcePolicyCommand,
  GetResourcePolicyRequest$,
  GetResourcePolicyResponse$,
  GetSchema$,
  GetSchemaByDefinition$,
  GetSchemaByDefinitionCommand,
  GetSchemaByDefinitionInput$,
  GetSchemaByDefinitionResponse$,
  GetSchemaCommand,
  GetSchemaInput$,
  GetSchemaResponse$,
  GetSchemaVersion$,
  GetSchemaVersionCommand,
  GetSchemaVersionInput$,
  GetSchemaVersionResponse$,
  GetSchemaVersionsDiff$,
  GetSchemaVersionsDiffCommand,
  GetSchemaVersionsDiffInput$,
  GetSchemaVersionsDiffResponse$,
  GetSecurityConfiguration$,
  GetSecurityConfigurationCommand,
  GetSecurityConfigurationRequest$,
  GetSecurityConfigurationResponse$,
  GetSecurityConfigurations$,
  GetSecurityConfigurationsCommand,
  GetSecurityConfigurationsRequest$,
  GetSecurityConfigurationsResponse$,
  GetSession$,
  GetSessionCommand,
  GetSessionRequest$,
  GetSessionResponse$,
  GetStatement$,
  GetStatementCommand,
  GetStatementRequest$,
  GetStatementResponse$,
  GetTable$,
  GetTableCommand,
  GetTableOptimizer$,
  GetTableOptimizerCommand,
  GetTableOptimizerRequest$,
  GetTableOptimizerResponse$,
  GetTableRequest$,
  GetTableResponse$,
  GetTables$,
  GetTablesCommand,
  GetTablesRequest$,
  GetTablesResponse$,
  GetTableVersion$,
  GetTableVersionCommand,
  GetTableVersionRequest$,
  GetTableVersionResponse$,
  GetTableVersions$,
  GetTableVersionsCommand,
  GetTableVersionsRequest$,
  GetTableVersionsResponse$,
  GetTags$,
  GetTagsCommand,
  GetTagsRequest$,
  GetTagsResponse$,
  GetTrigger$,
  GetTriggerCommand,
  GetTriggerRequest$,
  GetTriggerResponse$,
  GetTriggers$,
  GetTriggersCommand,
  GetTriggersRequest$,
  GetTriggersResponse$,
  GetUnfilteredPartitionMetadata$,
  GetUnfilteredPartitionMetadataCommand,
  GetUnfilteredPartitionMetadataRequest$,
  GetUnfilteredPartitionMetadataResponse$,
  GetUnfilteredPartitionsMetadata$,
  GetUnfilteredPartitionsMetadataCommand,
  GetUnfilteredPartitionsMetadataRequest$,
  GetUnfilteredPartitionsMetadataResponse$,
  GetUnfilteredTableMetadata$,
  GetUnfilteredTableMetadataCommand,
  GetUnfilteredTableMetadataRequest$,
  GetUnfilteredTableMetadataResponse$,
  GetUsageProfile$,
  GetUsageProfileCommand,
  GetUsageProfileRequest$,
  GetUsageProfileResponse$,
  GetUserDefinedFunction$,
  GetUserDefinedFunctionCommand,
  GetUserDefinedFunctionRequest$,
  GetUserDefinedFunctionResponse$,
  GetUserDefinedFunctions$,
  GetUserDefinedFunctionsCommand,
  GetUserDefinedFunctionsRequest$,
  GetUserDefinedFunctionsResponse$,
  GetWorkflow$,
  GetWorkflowCommand,
  GetWorkflowRequest$,
  GetWorkflowResponse$,
  GetWorkflowRun$,
  GetWorkflowRunCommand,
  GetWorkflowRunProperties$,
  GetWorkflowRunPropertiesCommand,
  GetWorkflowRunPropertiesRequest$,
  GetWorkflowRunPropertiesResponse$,
  GetWorkflowRunRequest$,
  GetWorkflowRunResponse$,
  GetWorkflowRuns$,
  GetWorkflowRunsCommand,
  GetWorkflowRunsRequest$,
  GetWorkflowRunsResponse$,
  Glue,
  GlueClient,
  GlueEncryptionException,
  GlueEncryptionException$,
  GluePolicy$,
  GlueRecordType,
  GlueSchema$,
  GlueServiceException,
  GlueStudioSchemaColumn$,
  GlueTable$,
  GovernedCatalogSource$,
  GovernedCatalogTarget$,
  GrokClassifier$,
  GroupFilters$,
  HudiTarget$,
  HudiTargetCompressionType,
  HyperTargetCompressionType,
  IcebergCompactionConfiguration$,
  IcebergCompactionMetrics$,
  IcebergEncryptedKey$,
  IcebergInput$,
  IcebergNullOrder,
  IcebergOptimizationProperties$,
  IcebergOptimizationPropertiesOutput$,
  IcebergOrphanFileDeletionConfiguration$,
  IcebergOrphanFileDeletionMetrics$,
  IcebergPartitionField$,
  IcebergPartitionSpec$,
  IcebergRetentionConfiguration$,
  IcebergRetentionMetrics$,
  IcebergSchema$,
  IcebergSortDirection,
  IcebergSortField$,
  IcebergSortOrder$,
  IcebergStructField$,
  IcebergStructTypeEnum,
  IcebergTableUpdate$,
  IcebergTarget$,
  IcebergTargetCompressionType,
  IcebergUpdateAction,
  IdempotentParameterMismatchException,
  IdempotentParameterMismatchException$,
  IllegalBlueprintStateException,
  IllegalBlueprintStateException$,
  IllegalSessionStateException,
  IllegalSessionStateException$,
  IllegalWorkflowStateException,
  IllegalWorkflowStateException$,
  ImportCatalogToGlue$,
  ImportCatalogToGlueCommand,
  ImportCatalogToGlueRequest$,
  ImportCatalogToGlueResponse$,
  ImportLabelsTaskRunProperties$,
  InboundIntegration$,
  InclusionAnnotationValue,
  Integration$,
  IntegrationConfig$,
  IntegrationConflictOperationFault,
  IntegrationConflictOperationFault$,
  IntegrationError$,
  IntegrationFilter$,
  IntegrationNotFoundFault,
  IntegrationNotFoundFault$,
  IntegrationPartition$,
  IntegrationQuotaExceededFault,
  IntegrationQuotaExceededFault$,
  IntegrationResourceProperty$,
  IntegrationResourcePropertyFilter$,
  IntegrationStatus,
  InternalServerException,
  InternalServerException$,
  InternalServiceException,
  InternalServiceException$,
  InvalidInputException,
  InvalidInputException$,
  InvalidIntegrationStateFault,
  InvalidIntegrationStateFault$,
  InvalidStateException,
  InvalidStateException$,
  JDBCConnectionType,
  JDBCConnectorOptions$,
  JDBCConnectorSource$,
  JDBCConnectorTarget$,
  JDBCDataType,
  JdbcMetadataEntry,
  JdbcTarget$,
  Job$,
  JobBookmarkEntry$,
  JobBookmarksEncryption$,
  JobBookmarksEncryptionMode,
  JobCommand$,
  JobMode,
  JobNodeDetails$,
  JobRun$,
  JobRunState,
  JobUpdate$,
  Join$,
  JoinColumn$,
  JoinType,
  JsonClassifier$,
  KafkaStreamingSourceOptions$,
  KeySchemaElement$,
  KinesisStreamingSourceOptions$,
  KMSKeyNotAccessibleFault,
  KMSKeyNotAccessibleFault$,
  LabelingSetGenerationTaskRunProperties$,
  LakeFormationConfiguration$,
  Language,
  LastActiveDefinition$,
  LastCrawlInfo$,
  LastCrawlStatus,
  LastRefreshType,
  LineageConfiguration$,
  ListBlueprints$,
  ListBlueprintsCommand,
  ListBlueprintsRequest$,
  ListBlueprintsResponse$,
  ListColumnStatisticsTaskRuns$,
  ListColumnStatisticsTaskRunsCommand,
  ListColumnStatisticsTaskRunsRequest$,
  ListColumnStatisticsTaskRunsResponse$,
  ListConnectionTypes$,
  ListConnectionTypesCommand,
  ListConnectionTypesRequest$,
  ListConnectionTypesResponse$,
  ListCrawlers$,
  ListCrawlersCommand,
  ListCrawlersRequest$,
  ListCrawlersResponse$,
  ListCrawls$,
  ListCrawlsCommand,
  ListCrawlsRequest$,
  ListCrawlsResponse$,
  ListCustomEntityTypes$,
  ListCustomEntityTypesCommand,
  ListCustomEntityTypesRequest$,
  ListCustomEntityTypesResponse$,
  ListDataQualityResults$,
  ListDataQualityResultsCommand,
  ListDataQualityResultsRequest$,
  ListDataQualityResultsResponse$,
  ListDataQualityRuleRecommendationRuns$,
  ListDataQualityRuleRecommendationRunsCommand,
  ListDataQualityRuleRecommendationRunsRequest$,
  ListDataQualityRuleRecommendationRunsResponse$,
  ListDataQualityRulesetEvaluationRuns$,
  ListDataQualityRulesetEvaluationRunsCommand,
  ListDataQualityRulesetEvaluationRunsRequest$,
  ListDataQualityRulesetEvaluationRunsResponse$,
  ListDataQualityRulesets$,
  ListDataQualityRulesetsCommand,
  ListDataQualityRulesetsRequest$,
  ListDataQualityRulesetsResponse$,
  ListDataQualityStatisticAnnotations$,
  ListDataQualityStatisticAnnotationsCommand,
  ListDataQualityStatisticAnnotationsRequest$,
  ListDataQualityStatisticAnnotationsResponse$,
  ListDataQualityStatistics$,
  ListDataQualityStatisticsCommand,
  ListDataQualityStatisticsRequest$,
  ListDataQualityStatisticsResponse$,
  ListDevEndpoints$,
  ListDevEndpointsCommand,
  ListDevEndpointsRequest$,
  ListDevEndpointsResponse$,
  ListEntities$,
  ListEntitiesCommand,
  ListEntitiesRequest$,
  ListEntitiesResponse$,
  ListIntegrationResourceProperties$,
  ListIntegrationResourcePropertiesCommand,
  ListIntegrationResourcePropertiesRequest$,
  ListIntegrationResourcePropertiesResponse$,
  ListJobs$,
  ListJobsCommand,
  ListJobsRequest$,
  ListJobsResponse$,
  ListMLTransforms$,
  ListMLTransformsCommand,
  ListMLTransformsRequest$,
  ListMLTransformsResponse$,
  ListRegistries$,
  ListRegistriesCommand,
  ListRegistriesInput$,
  ListRegistriesResponse$,
  ListSchemas$,
  ListSchemasCommand,
  ListSchemasInput$,
  ListSchemasResponse$,
  ListSchemaVersions$,
  ListSchemaVersionsCommand,
  ListSchemaVersionsInput$,
  ListSchemaVersionsResponse$,
  ListSessions$,
  ListSessionsCommand,
  ListSessionsRequest$,
  ListSessionsResponse$,
  ListStatements$,
  ListStatementsCommand,
  ListStatementsRequest$,
  ListStatementsResponse$,
  ListTableOptimizerRuns$,
  ListTableOptimizerRunsCommand,
  ListTableOptimizerRunsRequest$,
  ListTableOptimizerRunsResponse$,
  ListTriggers$,
  ListTriggersCommand,
  ListTriggersRequest$,
  ListTriggersResponse$,
  ListUsageProfiles$,
  ListUsageProfilesCommand,
  ListUsageProfilesRequest$,
  ListUsageProfilesResponse$,
  ListWorkflows$,
  ListWorkflowsCommand,
  ListWorkflowsRequest$,
  ListWorkflowsResponse$,
  Location$,
  Logical,
  LogicalOperator,
  LongColumnStatisticsData$,
  Mapping$,
  MappingEntry$,
  Merge$,
  MetadataInfo$,
  MetadataKeyValuePair$,
  MetadataOperation,
  MetricBasedObservation$,
  MicrosoftSQLServerCatalogSource$,
  MicrosoftSQLServerCatalogTarget$,
  MLTransform$,
  MLTransformNotReadyException,
  MLTransformNotReadyException$,
  MLUserDataEncryption$,
  MLUserDataEncryptionModeString,
  ModifyIntegration$,
  ModifyIntegrationCommand,
  ModifyIntegrationRequest$,
  ModifyIntegrationResponse$,
  MongoDBTarget$,
  MySQLCatalogSource$,
  MySQLCatalogTarget$,
  Node$,
  NodeType,
  NoScheduleException,
  NoScheduleException$,
  NotificationProperty$,
  NullCheckBoxList$,
  NullValueField$,
  OAuth2ClientApplication$,
  OAuth2Credentials$,
  OAuth2GrantType,
  OAuth2Properties$,
  OAuth2PropertiesInput$,
  OpenTableFormatInput$,
  OperationNotSupportedException,
  OperationNotSupportedException$,
  OperationTimeoutException,
  OperationTimeoutException$,
  Option$,
  OracleSQLCatalogSource$,
  OracleSQLCatalogTarget$,
  Order$,
  OrphanFileDeletionConfiguration$,
  OrphanFileDeletionMetrics$,
  OtherMetadataValueListItem$,
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
  paginateGetTables,
  paginateGetTableVersions,
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
  paginateListSchemas,
  paginateListSchemaVersions,
  paginateListSessions,
  paginateListTableOptimizerRuns,
  paginateListTriggers,
  paginateListUsageProfiles,
  paginateListWorkflows,
  paginateSearchTables,
  ParamType,
  ParquetCompressionType,
  Partition$,
  PartitionError$,
  PartitionIndex$,
  PartitionIndexDescriptor$,
  PartitionIndexStatus,
  PartitionInput$,
  PartitionValueList$,
  Permission,
  PermissionType,
  PermissionTypeMismatchException,
  PermissionTypeMismatchException$,
  PhysicalConnectionRequirements$,
  PIIDetection$,
  PiiType,
  PostgreSQLCatalogSource$,
  PostgreSQLCatalogTarget$,
  Predecessor$,
  Predicate$,
  PrincipalPermissions$,
  PrincipalType,
  ProfileConfiguration$,
  Property$,
  PropertyPredicate$,
  PropertyType,
  PutDataCatalogEncryptionSettings$,
  PutDataCatalogEncryptionSettingsCommand,
  PutDataCatalogEncryptionSettingsRequest$,
  PutDataCatalogEncryptionSettingsResponse$,
  PutDataQualityProfileAnnotation$,
  PutDataQualityProfileAnnotationCommand,
  PutDataQualityProfileAnnotationRequest$,
  PutDataQualityProfileAnnotationResponse$,
  PutResourcePolicy$,
  PutResourcePolicyCommand,
  PutResourcePolicyRequest$,
  PutResourcePolicyResponse$,
  PutSchemaVersionMetadata$,
  PutSchemaVersionMetadataCommand,
  PutSchemaVersionMetadataInput$,
  PutSchemaVersionMetadataResponse$,
  PutWorkflowRunProperties$,
  PutWorkflowRunPropertiesCommand,
  PutWorkflowRunPropertiesRequest$,
  PutWorkflowRunPropertiesResponse$,
  QuerySchemaVersionMetadata$,
  QuerySchemaVersionMetadataCommand,
  QuerySchemaVersionMetadataInput$,
  QuerySchemaVersionMetadataResponse$,
  QuerySessionContext$,
  QuoteChar,
  Recipe$,
  RecipeAction$,
  RecipeReference$,
  RecipeStep$,
  RecrawlBehavior,
  RecrawlPolicy$,
  RedshiftSource$,
  RedshiftTarget$,
  RegisterSchemaVersion$,
  RegisterSchemaVersionCommand,
  RegisterSchemaVersionInput$,
  RegisterSchemaVersionResponse$,
  RegistryId$,
  RegistryListItem$,
  RegistryStatus,
  RelationalCatalogSource$,
  RemoveSchemaVersionMetadata$,
  RemoveSchemaVersionMetadataCommand,
  RemoveSchemaVersionMetadataInput$,
  RemoveSchemaVersionMetadataResponse$,
  RenameField$,
  ResetJobBookmark$,
  ResetJobBookmarkCommand,
  ResetJobBookmarkRequest$,
  ResetJobBookmarkResponse$,
  ResourceAction,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceNotReadyException,
  ResourceNotReadyException$,
  ResourceNumberLimitExceededException,
  ResourceNumberLimitExceededException$,
  ResourceShareType,
  ResourceState,
  ResourceType,
  ResourceUri$,
  ResumeWorkflowRun$,
  ResumeWorkflowRunCommand,
  ResumeWorkflowRunRequest$,
  ResumeWorkflowRunResponse$,
  RetentionConfiguration$,
  RetentionMetrics$,
  Route$,
  RunIdentifier$,
  RunMetrics$,
  RunStatement$,
  RunStatementCommand,
  RunStatementRequest$,
  RunStatementResponse$,
  S3CatalogDeltaSource$,
  S3CatalogHudiSource$,
  S3CatalogIcebergSource$,
  S3CatalogSource$,
  S3CatalogTarget$,
  S3CsvSource$,
  S3DeltaCatalogTarget$,
  S3DeltaDirectTarget$,
  S3DeltaSource$,
  S3DirectSourceAdditionalOptions$,
  S3DirectTarget$,
  S3Encryption$,
  S3EncryptionMode,
  S3ExcelSource$,
  S3GlueParquetTarget$,
  S3HudiCatalogTarget$,
  S3HudiDirectTarget$,
  S3HudiSource$,
  S3HyperDirectTarget$,
  S3IcebergCatalogTarget$,
  S3IcebergDirectTarget$,
  S3JsonSource$,
  S3ParquetSource$,
  S3SourceAdditionalOptions$,
  S3Target$,
  Schedule$,
  SchedulerNotRunningException,
  SchedulerNotRunningException$,
  SchedulerRunningException,
  SchedulerRunningException$,
  SchedulerTransitioningException,
  SchedulerTransitioningException$,
  ScheduleState,
  ScheduleType,
  SchemaChangePolicy$,
  SchemaColumn$,
  SchemaDiffType,
  SchemaId$,
  SchemaListItem$,
  SchemaReference$,
  SchemaStatus,
  SchemaVersionErrorItem$,
  SchemaVersionListItem$,
  SchemaVersionNumber$,
  SchemaVersionStatus,
  SearchTables$,
  SearchTablesCommand,
  SearchTablesRequest$,
  SearchTablesResponse$,
  SecurityConfiguration$,
  Segment$,
  SelectFields$,
  SelectFromCollection$,
  Separator,
  SerDeInfo$,
  Session$,
  SessionCommand$,
  SessionStatus,
  SettingSource,
  SkewedInfo$,
  SnowflakeNodeData$,
  SnowflakeSource$,
  SnowflakeTarget$,
  Sort,
  SortCriterion$,
  SortDirectionType,
  SourceControlAuthStrategy,
  SourceControlDetails$,
  SourceControlProvider,
  SourceProcessingProperties$,
  SourceTableConfig$,
  SparkConnectorSource$,
  SparkConnectorTarget$,
  SparkSQL$,
  Spigot$,
  SplitFields$,
  SqlAlias$,
  StartBlueprintRun$,
  StartBlueprintRunCommand,
  StartBlueprintRunRequest$,
  StartBlueprintRunResponse$,
  StartColumnStatisticsTaskRun$,
  StartColumnStatisticsTaskRunCommand,
  StartColumnStatisticsTaskRunRequest$,
  StartColumnStatisticsTaskRunResponse$,
  StartColumnStatisticsTaskRunSchedule$,
  StartColumnStatisticsTaskRunScheduleCommand,
  StartColumnStatisticsTaskRunScheduleRequest$,
  StartColumnStatisticsTaskRunScheduleResponse$,
  StartCrawler$,
  StartCrawlerCommand,
  StartCrawlerRequest$,
  StartCrawlerResponse$,
  StartCrawlerSchedule$,
  StartCrawlerScheduleCommand,
  StartCrawlerScheduleRequest$,
  StartCrawlerScheduleResponse$,
  StartDataQualityRuleRecommendationRun$,
  StartDataQualityRuleRecommendationRunCommand,
  StartDataQualityRuleRecommendationRunRequest$,
  StartDataQualityRuleRecommendationRunResponse$,
  StartDataQualityRulesetEvaluationRun$,
  StartDataQualityRulesetEvaluationRunCommand,
  StartDataQualityRulesetEvaluationRunRequest$,
  StartDataQualityRulesetEvaluationRunResponse$,
  StartExportLabelsTaskRun$,
  StartExportLabelsTaskRunCommand,
  StartExportLabelsTaskRunRequest$,
  StartExportLabelsTaskRunResponse$,
  StartImportLabelsTaskRun$,
  StartImportLabelsTaskRunCommand,
  StartImportLabelsTaskRunRequest$,
  StartImportLabelsTaskRunResponse$,
  StartingEventBatchCondition$,
  StartingPosition,
  StartJobRun$,
  StartJobRunCommand,
  StartJobRunRequest$,
  StartJobRunResponse$,
  StartMLEvaluationTaskRun$,
  StartMLEvaluationTaskRunCommand,
  StartMLEvaluationTaskRunRequest$,
  StartMLEvaluationTaskRunResponse$,
  StartMLLabelingSetGenerationTaskRun$,
  StartMLLabelingSetGenerationTaskRunCommand,
  StartMLLabelingSetGenerationTaskRunRequest$,
  StartMLLabelingSetGenerationTaskRunResponse$,
  StartTrigger$,
  StartTriggerCommand,
  StartTriggerRequest$,
  StartTriggerResponse$,
  StartWorkflowRun$,
  StartWorkflowRunCommand,
  StartWorkflowRunRequest$,
  StartWorkflowRunResponse$,
  Statement$,
  StatementOutput$,
  StatementOutputData$,
  StatementState,
  StatisticAnnotation$,
  StatisticEvaluationLevel,
  StatisticModelResult$,
  StatisticSummary$,
  StatusDetails$,
  StopColumnStatisticsTaskRun$,
  StopColumnStatisticsTaskRunCommand,
  StopColumnStatisticsTaskRunRequest$,
  StopColumnStatisticsTaskRunResponse$,
  StopColumnStatisticsTaskRunSchedule$,
  StopColumnStatisticsTaskRunScheduleCommand,
  StopColumnStatisticsTaskRunScheduleRequest$,
  StopColumnStatisticsTaskRunScheduleResponse$,
  StopCrawler$,
  StopCrawlerCommand,
  StopCrawlerRequest$,
  StopCrawlerResponse$,
  StopCrawlerSchedule$,
  StopCrawlerScheduleCommand,
  StopCrawlerScheduleRequest$,
  StopCrawlerScheduleResponse$,
  StopSession$,
  StopSessionCommand,
  StopSessionRequest$,
  StopSessionResponse$,
  StopTrigger$,
  StopTriggerCommand,
  StopTriggerRequest$,
  StopTriggerResponse$,
  StopWorkflowRun$,
  StopWorkflowRunCommand,
  StopWorkflowRunRequest$,
  StopWorkflowRunResponse$,
  StorageDescriptor$,
  StreamingDataPreviewOptions$,
  StringColumnStatisticsData$,
  SupportedDialect$,
  Table$,
  TableAttributes,
  TableError$,
  TableIdentifier$,
  TableInput$,
  TableOptimizer$,
  TableOptimizerConfiguration$,
  TableOptimizerEventType,
  TableOptimizerRun$,
  TableOptimizerType,
  TableOptimizerVpcConfiguration$,
  TableStatus$,
  TableVersion$,
  TableVersionError$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TargetFormat,
  TargetProcessingProperties$,
  TargetRedshiftCatalog$,
  TargetResourceNotFound,
  TargetResourceNotFound$,
  TargetTableConfig$,
  TaskRun$,
  TaskRunFilterCriteria$,
  TaskRunProperties$,
  TaskRunSortColumnType,
  TaskRunSortCriteria$,
  TaskStatusType,
  TaskType,
  TestConnection$,
  TestConnectionCommand,
  TestConnectionInput$,
  TestConnectionRequest$,
  TestConnectionResponse$,
  ThrottlingException,
  ThrottlingException$,
  TimestampedInclusionAnnotation$,
  TimestampFilter$,
  TransformConfigParameter$,
  TransformEncryption$,
  TransformFilterCriteria$,
  TransformParameters$,
  TransformSortColumnType,
  TransformSortCriteria$,
  TransformStatusType,
  TransformType,
  Trigger$,
  TriggerNodeDetails$,
  TriggerState,
  TriggerType,
  TriggerUpdate$,
  UnfilteredPartition$,
  Union$,
  UnionType,
  UnnestSpec,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateBehavior,
  UpdateBlueprint$,
  UpdateBlueprintCommand,
  UpdateBlueprintRequest$,
  UpdateBlueprintResponse$,
  UpdateCatalog$,
  UpdateCatalogBehavior,
  UpdateCatalogCommand,
  UpdateCatalogRequest$,
  UpdateCatalogResponse$,
  UpdateClassifier$,
  UpdateClassifierCommand,
  UpdateClassifierRequest$,
  UpdateClassifierResponse$,
  UpdateColumnStatisticsForPartition$,
  UpdateColumnStatisticsForPartitionCommand,
  UpdateColumnStatisticsForPartitionRequest$,
  UpdateColumnStatisticsForPartitionResponse$,
  UpdateColumnStatisticsForTable$,
  UpdateColumnStatisticsForTableCommand,
  UpdateColumnStatisticsForTableRequest$,
  UpdateColumnStatisticsForTableResponse$,
  UpdateColumnStatisticsTaskSettings$,
  UpdateColumnStatisticsTaskSettingsCommand,
  UpdateColumnStatisticsTaskSettingsRequest$,
  UpdateColumnStatisticsTaskSettingsResponse$,
  UpdateConnection$,
  UpdateConnectionCommand,
  UpdateConnectionRequest$,
  UpdateConnectionResponse$,
  UpdateCrawler$,
  UpdateCrawlerCommand,
  UpdateCrawlerRequest$,
  UpdateCrawlerResponse$,
  UpdateCrawlerSchedule$,
  UpdateCrawlerScheduleCommand,
  UpdateCrawlerScheduleRequest$,
  UpdateCrawlerScheduleResponse$,
  UpdateCsvClassifierRequest$,
  UpdateDatabase$,
  UpdateDatabaseCommand,
  UpdateDatabaseRequest$,
  UpdateDatabaseResponse$,
  UpdateDataQualityRuleset$,
  UpdateDataQualityRulesetCommand,
  UpdateDataQualityRulesetRequest$,
  UpdateDataQualityRulesetResponse$,
  UpdateDevEndpoint$,
  UpdateDevEndpointCommand,
  UpdateDevEndpointRequest$,
  UpdateDevEndpointResponse$,
  UpdateGlueIdentityCenterConfiguration$,
  UpdateGlueIdentityCenterConfigurationCommand,
  UpdateGlueIdentityCenterConfigurationRequest$,
  UpdateGlueIdentityCenterConfigurationResponse$,
  UpdateGrokClassifierRequest$,
  UpdateIcebergInput$,
  UpdateIcebergTableInput$,
  UpdateIntegrationResourceProperty$,
  UpdateIntegrationResourcePropertyCommand,
  UpdateIntegrationResourcePropertyRequest$,
  UpdateIntegrationResourcePropertyResponse$,
  UpdateIntegrationTableProperties$,
  UpdateIntegrationTablePropertiesCommand,
  UpdateIntegrationTablePropertiesRequest$,
  UpdateIntegrationTablePropertiesResponse$,
  UpdateJob$,
  UpdateJobCommand,
  UpdateJobFromSourceControl$,
  UpdateJobFromSourceControlCommand,
  UpdateJobFromSourceControlRequest$,
  UpdateJobFromSourceControlResponse$,
  UpdateJobRequest$,
  UpdateJobResponse$,
  UpdateJsonClassifierRequest$,
  UpdateMLTransform$,
  UpdateMLTransformCommand,
  UpdateMLTransformRequest$,
  UpdateMLTransformResponse$,
  UpdateOpenTableFormatInput$,
  UpdatePartition$,
  UpdatePartitionCommand,
  UpdatePartitionRequest$,
  UpdatePartitionResponse$,
  UpdateRegistry$,
  UpdateRegistryCommand,
  UpdateRegistryInput$,
  UpdateRegistryResponse$,
  UpdateSchema$,
  UpdateSchemaCommand,
  UpdateSchemaInput$,
  UpdateSchemaResponse$,
  UpdateSourceControlFromJob$,
  UpdateSourceControlFromJobCommand,
  UpdateSourceControlFromJobRequest$,
  UpdateSourceControlFromJobResponse$,
  UpdateTable$,
  UpdateTableCommand,
  UpdateTableOptimizer$,
  UpdateTableOptimizerCommand,
  UpdateTableOptimizerRequest$,
  UpdateTableOptimizerResponse$,
  UpdateTableRequest$,
  UpdateTableResponse$,
  UpdateTrigger$,
  UpdateTriggerCommand,
  UpdateTriggerRequest$,
  UpdateTriggerResponse$,
  UpdateUsageProfile$,
  UpdateUsageProfileCommand,
  UpdateUsageProfileRequest$,
  UpdateUsageProfileResponse$,
  UpdateUserDefinedFunction$,
  UpdateUserDefinedFunctionCommand,
  UpdateUserDefinedFunctionRequest$,
  UpdateUserDefinedFunctionResponse$,
  UpdateWorkflow$,
  UpdateWorkflowCommand,
  UpdateWorkflowRequest$,
  UpdateWorkflowResponse$,
  UpdateXMLClassifierRequest$,
  UpsertRedshiftTargetOptions$,
  UsageProfileDefinition$,
  UserDefinedFunction$,
  UserDefinedFunctionInput$,
  ValidationException,
  ValidationException$,
  VersionMismatchException,
  VersionMismatchException$,
  ViewDefinition$,
  ViewDefinitionInput$,
  ViewDialect,
  ViewRepresentation$,
  ViewRepresentationInput$,
  ViewUpdateAction,
  ViewValidation$,
  WorkerType,
  Workflow$,
  WorkflowGraph$,
  WorkflowRun$,
  WorkflowRunStatistics$,
  WorkflowRunStatus,
  XMLClassifier$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof GlueClient === "function");
assert(typeof Glue === "function");
// commands
assert(typeof BatchCreatePartitionCommand === "function");
assert(typeof BatchCreatePartition$ === "object");
assert(typeof BatchDeleteConnectionCommand === "function");
assert(typeof BatchDeleteConnection$ === "object");
assert(typeof BatchDeletePartitionCommand === "function");
assert(typeof BatchDeletePartition$ === "object");
assert(typeof BatchDeleteTableCommand === "function");
assert(typeof BatchDeleteTable$ === "object");
assert(typeof BatchDeleteTableVersionCommand === "function");
assert(typeof BatchDeleteTableVersion$ === "object");
assert(typeof BatchGetBlueprintsCommand === "function");
assert(typeof BatchGetBlueprints$ === "object");
assert(typeof BatchGetCrawlersCommand === "function");
assert(typeof BatchGetCrawlers$ === "object");
assert(typeof BatchGetCustomEntityTypesCommand === "function");
assert(typeof BatchGetCustomEntityTypes$ === "object");
assert(typeof BatchGetDataQualityResultCommand === "function");
assert(typeof BatchGetDataQualityResult$ === "object");
assert(typeof BatchGetDevEndpointsCommand === "function");
assert(typeof BatchGetDevEndpoints$ === "object");
assert(typeof BatchGetJobsCommand === "function");
assert(typeof BatchGetJobs$ === "object");
assert(typeof BatchGetPartitionCommand === "function");
assert(typeof BatchGetPartition$ === "object");
assert(typeof BatchGetTableOptimizerCommand === "function");
assert(typeof BatchGetTableOptimizer$ === "object");
assert(typeof BatchGetTriggersCommand === "function");
assert(typeof BatchGetTriggers$ === "object");
assert(typeof BatchGetWorkflowsCommand === "function");
assert(typeof BatchGetWorkflows$ === "object");
assert(typeof BatchPutDataQualityStatisticAnnotationCommand === "function");
assert(typeof BatchPutDataQualityStatisticAnnotation$ === "object");
assert(typeof BatchStopJobRunCommand === "function");
assert(typeof BatchStopJobRun$ === "object");
assert(typeof BatchUpdatePartitionCommand === "function");
assert(typeof BatchUpdatePartition$ === "object");
assert(typeof CancelDataQualityRuleRecommendationRunCommand === "function");
assert(typeof CancelDataQualityRuleRecommendationRun$ === "object");
assert(typeof CancelDataQualityRulesetEvaluationRunCommand === "function");
assert(typeof CancelDataQualityRulesetEvaluationRun$ === "object");
assert(typeof CancelMLTaskRunCommand === "function");
assert(typeof CancelMLTaskRun$ === "object");
assert(typeof CancelStatementCommand === "function");
assert(typeof CancelStatement$ === "object");
assert(typeof CheckSchemaVersionValidityCommand === "function");
assert(typeof CheckSchemaVersionValidity$ === "object");
assert(typeof CreateBlueprintCommand === "function");
assert(typeof CreateBlueprint$ === "object");
assert(typeof CreateCatalogCommand === "function");
assert(typeof CreateCatalog$ === "object");
assert(typeof CreateClassifierCommand === "function");
assert(typeof CreateClassifier$ === "object");
assert(typeof CreateColumnStatisticsTaskSettingsCommand === "function");
assert(typeof CreateColumnStatisticsTaskSettings$ === "object");
assert(typeof CreateConnectionCommand === "function");
assert(typeof CreateConnection$ === "object");
assert(typeof CreateCrawlerCommand === "function");
assert(typeof CreateCrawler$ === "object");
assert(typeof CreateCustomEntityTypeCommand === "function");
assert(typeof CreateCustomEntityType$ === "object");
assert(typeof CreateDatabaseCommand === "function");
assert(typeof CreateDatabase$ === "object");
assert(typeof CreateDataQualityRulesetCommand === "function");
assert(typeof CreateDataQualityRuleset$ === "object");
assert(typeof CreateDevEndpointCommand === "function");
assert(typeof CreateDevEndpoint$ === "object");
assert(typeof CreateGlueIdentityCenterConfigurationCommand === "function");
assert(typeof CreateGlueIdentityCenterConfiguration$ === "object");
assert(typeof CreateIntegrationCommand === "function");
assert(typeof CreateIntegration$ === "object");
assert(typeof CreateIntegrationResourcePropertyCommand === "function");
assert(typeof CreateIntegrationResourceProperty$ === "object");
assert(typeof CreateIntegrationTablePropertiesCommand === "function");
assert(typeof CreateIntegrationTableProperties$ === "object");
assert(typeof CreateJobCommand === "function");
assert(typeof CreateJob$ === "object");
assert(typeof CreateMLTransformCommand === "function");
assert(typeof CreateMLTransform$ === "object");
assert(typeof CreatePartitionCommand === "function");
assert(typeof CreatePartition$ === "object");
assert(typeof CreatePartitionIndexCommand === "function");
assert(typeof CreatePartitionIndex$ === "object");
assert(typeof CreateRegistryCommand === "function");
assert(typeof CreateRegistry$ === "object");
assert(typeof CreateSchemaCommand === "function");
assert(typeof CreateSchema$ === "object");
assert(typeof CreateScriptCommand === "function");
assert(typeof CreateScript$ === "object");
assert(typeof CreateSecurityConfigurationCommand === "function");
assert(typeof CreateSecurityConfiguration$ === "object");
assert(typeof CreateSessionCommand === "function");
assert(typeof CreateSession$ === "object");
assert(typeof CreateTableCommand === "function");
assert(typeof CreateTable$ === "object");
assert(typeof CreateTableOptimizerCommand === "function");
assert(typeof CreateTableOptimizer$ === "object");
assert(typeof CreateTriggerCommand === "function");
assert(typeof CreateTrigger$ === "object");
assert(typeof CreateUsageProfileCommand === "function");
assert(typeof CreateUsageProfile$ === "object");
assert(typeof CreateUserDefinedFunctionCommand === "function");
assert(typeof CreateUserDefinedFunction$ === "object");
assert(typeof CreateWorkflowCommand === "function");
assert(typeof CreateWorkflow$ === "object");
assert(typeof DeleteBlueprintCommand === "function");
assert(typeof DeleteBlueprint$ === "object");
assert(typeof DeleteCatalogCommand === "function");
assert(typeof DeleteCatalog$ === "object");
assert(typeof DeleteClassifierCommand === "function");
assert(typeof DeleteClassifier$ === "object");
assert(typeof DeleteColumnStatisticsForPartitionCommand === "function");
assert(typeof DeleteColumnStatisticsForPartition$ === "object");
assert(typeof DeleteColumnStatisticsForTableCommand === "function");
assert(typeof DeleteColumnStatisticsForTable$ === "object");
assert(typeof DeleteColumnStatisticsTaskSettingsCommand === "function");
assert(typeof DeleteColumnStatisticsTaskSettings$ === "object");
assert(typeof DeleteConnectionCommand === "function");
assert(typeof DeleteConnection$ === "object");
assert(typeof DeleteCrawlerCommand === "function");
assert(typeof DeleteCrawler$ === "object");
assert(typeof DeleteCustomEntityTypeCommand === "function");
assert(typeof DeleteCustomEntityType$ === "object");
assert(typeof DeleteDatabaseCommand === "function");
assert(typeof DeleteDatabase$ === "object");
assert(typeof DeleteDataQualityRulesetCommand === "function");
assert(typeof DeleteDataQualityRuleset$ === "object");
assert(typeof DeleteDevEndpointCommand === "function");
assert(typeof DeleteDevEndpoint$ === "object");
assert(typeof DeleteGlueIdentityCenterConfigurationCommand === "function");
assert(typeof DeleteGlueIdentityCenterConfiguration$ === "object");
assert(typeof DeleteIntegrationCommand === "function");
assert(typeof DeleteIntegration$ === "object");
assert(typeof DeleteIntegrationResourcePropertyCommand === "function");
assert(typeof DeleteIntegrationResourceProperty$ === "object");
assert(typeof DeleteIntegrationTablePropertiesCommand === "function");
assert(typeof DeleteIntegrationTableProperties$ === "object");
assert(typeof DeleteJobCommand === "function");
assert(typeof DeleteJob$ === "object");
assert(typeof DeleteMLTransformCommand === "function");
assert(typeof DeleteMLTransform$ === "object");
assert(typeof DeletePartitionCommand === "function");
assert(typeof DeletePartition$ === "object");
assert(typeof DeletePartitionIndexCommand === "function");
assert(typeof DeletePartitionIndex$ === "object");
assert(typeof DeleteRegistryCommand === "function");
assert(typeof DeleteRegistry$ === "object");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DeleteResourcePolicy$ === "object");
assert(typeof DeleteSchemaCommand === "function");
assert(typeof DeleteSchema$ === "object");
assert(typeof DeleteSchemaVersionsCommand === "function");
assert(typeof DeleteSchemaVersions$ === "object");
assert(typeof DeleteSecurityConfigurationCommand === "function");
assert(typeof DeleteSecurityConfiguration$ === "object");
assert(typeof DeleteSessionCommand === "function");
assert(typeof DeleteSession$ === "object");
assert(typeof DeleteTableCommand === "function");
assert(typeof DeleteTable$ === "object");
assert(typeof DeleteTableOptimizerCommand === "function");
assert(typeof DeleteTableOptimizer$ === "object");
assert(typeof DeleteTableVersionCommand === "function");
assert(typeof DeleteTableVersion$ === "object");
assert(typeof DeleteTriggerCommand === "function");
assert(typeof DeleteTrigger$ === "object");
assert(typeof DeleteUsageProfileCommand === "function");
assert(typeof DeleteUsageProfile$ === "object");
assert(typeof DeleteUserDefinedFunctionCommand === "function");
assert(typeof DeleteUserDefinedFunction$ === "object");
assert(typeof DeleteWorkflowCommand === "function");
assert(typeof DeleteWorkflow$ === "object");
assert(typeof DescribeConnectionTypeCommand === "function");
assert(typeof DescribeConnectionType$ === "object");
assert(typeof DescribeEntityCommand === "function");
assert(typeof DescribeEntity$ === "object");
assert(typeof DescribeInboundIntegrationsCommand === "function");
assert(typeof DescribeInboundIntegrations$ === "object");
assert(typeof DescribeIntegrationsCommand === "function");
assert(typeof DescribeIntegrations$ === "object");
assert(typeof GetBlueprintCommand === "function");
assert(typeof GetBlueprint$ === "object");
assert(typeof GetBlueprintRunCommand === "function");
assert(typeof GetBlueprintRun$ === "object");
assert(typeof GetBlueprintRunsCommand === "function");
assert(typeof GetBlueprintRuns$ === "object");
assert(typeof GetCatalogCommand === "function");
assert(typeof GetCatalog$ === "object");
assert(typeof GetCatalogImportStatusCommand === "function");
assert(typeof GetCatalogImportStatus$ === "object");
assert(typeof GetCatalogsCommand === "function");
assert(typeof GetCatalogs$ === "object");
assert(typeof GetClassifierCommand === "function");
assert(typeof GetClassifier$ === "object");
assert(typeof GetClassifiersCommand === "function");
assert(typeof GetClassifiers$ === "object");
assert(typeof GetColumnStatisticsForPartitionCommand === "function");
assert(typeof GetColumnStatisticsForPartition$ === "object");
assert(typeof GetColumnStatisticsForTableCommand === "function");
assert(typeof GetColumnStatisticsForTable$ === "object");
assert(typeof GetColumnStatisticsTaskRunCommand === "function");
assert(typeof GetColumnStatisticsTaskRun$ === "object");
assert(typeof GetColumnStatisticsTaskRunsCommand === "function");
assert(typeof GetColumnStatisticsTaskRuns$ === "object");
assert(typeof GetColumnStatisticsTaskSettingsCommand === "function");
assert(typeof GetColumnStatisticsTaskSettings$ === "object");
assert(typeof GetConnectionCommand === "function");
assert(typeof GetConnection$ === "object");
assert(typeof GetConnectionsCommand === "function");
assert(typeof GetConnections$ === "object");
assert(typeof GetCrawlerCommand === "function");
assert(typeof GetCrawler$ === "object");
assert(typeof GetCrawlerMetricsCommand === "function");
assert(typeof GetCrawlerMetrics$ === "object");
assert(typeof GetCrawlersCommand === "function");
assert(typeof GetCrawlers$ === "object");
assert(typeof GetCustomEntityTypeCommand === "function");
assert(typeof GetCustomEntityType$ === "object");
assert(typeof GetDatabaseCommand === "function");
assert(typeof GetDatabase$ === "object");
assert(typeof GetDatabasesCommand === "function");
assert(typeof GetDatabases$ === "object");
assert(typeof GetDataCatalogEncryptionSettingsCommand === "function");
assert(typeof GetDataCatalogEncryptionSettings$ === "object");
assert(typeof GetDataflowGraphCommand === "function");
assert(typeof GetDataflowGraph$ === "object");
assert(typeof GetDataQualityModelCommand === "function");
assert(typeof GetDataQualityModel$ === "object");
assert(typeof GetDataQualityModelResultCommand === "function");
assert(typeof GetDataQualityModelResult$ === "object");
assert(typeof GetDataQualityResultCommand === "function");
assert(typeof GetDataQualityResult$ === "object");
assert(typeof GetDataQualityRuleRecommendationRunCommand === "function");
assert(typeof GetDataQualityRuleRecommendationRun$ === "object");
assert(typeof GetDataQualityRulesetCommand === "function");
assert(typeof GetDataQualityRuleset$ === "object");
assert(typeof GetDataQualityRulesetEvaluationRunCommand === "function");
assert(typeof GetDataQualityRulesetEvaluationRun$ === "object");
assert(typeof GetDevEndpointCommand === "function");
assert(typeof GetDevEndpoint$ === "object");
assert(typeof GetDevEndpointsCommand === "function");
assert(typeof GetDevEndpoints$ === "object");
assert(typeof GetEntityRecordsCommand === "function");
assert(typeof GetEntityRecords$ === "object");
assert(typeof GetGlueIdentityCenterConfigurationCommand === "function");
assert(typeof GetGlueIdentityCenterConfiguration$ === "object");
assert(typeof GetIntegrationResourcePropertyCommand === "function");
assert(typeof GetIntegrationResourceProperty$ === "object");
assert(typeof GetIntegrationTablePropertiesCommand === "function");
assert(typeof GetIntegrationTableProperties$ === "object");
assert(typeof GetJobCommand === "function");
assert(typeof GetJob$ === "object");
assert(typeof GetJobBookmarkCommand === "function");
assert(typeof GetJobBookmark$ === "object");
assert(typeof GetJobRunCommand === "function");
assert(typeof GetJobRun$ === "object");
assert(typeof GetJobRunsCommand === "function");
assert(typeof GetJobRuns$ === "object");
assert(typeof GetJobsCommand === "function");
assert(typeof GetJobs$ === "object");
assert(typeof GetMappingCommand === "function");
assert(typeof GetMapping$ === "object");
assert(typeof GetMLTaskRunCommand === "function");
assert(typeof GetMLTaskRun$ === "object");
assert(typeof GetMLTaskRunsCommand === "function");
assert(typeof GetMLTaskRuns$ === "object");
assert(typeof GetMLTransformCommand === "function");
assert(typeof GetMLTransform$ === "object");
assert(typeof GetMLTransformsCommand === "function");
assert(typeof GetMLTransforms$ === "object");
assert(typeof GetPartitionCommand === "function");
assert(typeof GetPartition$ === "object");
assert(typeof GetPartitionIndexesCommand === "function");
assert(typeof GetPartitionIndexes$ === "object");
assert(typeof GetPartitionsCommand === "function");
assert(typeof GetPartitions$ === "object");
assert(typeof GetPlanCommand === "function");
assert(typeof GetPlan$ === "object");
assert(typeof GetRegistryCommand === "function");
assert(typeof GetRegistry$ === "object");
assert(typeof GetResourcePoliciesCommand === "function");
assert(typeof GetResourcePolicies$ === "object");
assert(typeof GetResourcePolicyCommand === "function");
assert(typeof GetResourcePolicy$ === "object");
assert(typeof GetSchemaCommand === "function");
assert(typeof GetSchema$ === "object");
assert(typeof GetSchemaByDefinitionCommand === "function");
assert(typeof GetSchemaByDefinition$ === "object");
assert(typeof GetSchemaVersionCommand === "function");
assert(typeof GetSchemaVersion$ === "object");
assert(typeof GetSchemaVersionsDiffCommand === "function");
assert(typeof GetSchemaVersionsDiff$ === "object");
assert(typeof GetSecurityConfigurationCommand === "function");
assert(typeof GetSecurityConfiguration$ === "object");
assert(typeof GetSecurityConfigurationsCommand === "function");
assert(typeof GetSecurityConfigurations$ === "object");
assert(typeof GetSessionCommand === "function");
assert(typeof GetSession$ === "object");
assert(typeof GetStatementCommand === "function");
assert(typeof GetStatement$ === "object");
assert(typeof GetTableCommand === "function");
assert(typeof GetTable$ === "object");
assert(typeof GetTableOptimizerCommand === "function");
assert(typeof GetTableOptimizer$ === "object");
assert(typeof GetTablesCommand === "function");
assert(typeof GetTables$ === "object");
assert(typeof GetTableVersionCommand === "function");
assert(typeof GetTableVersion$ === "object");
assert(typeof GetTableVersionsCommand === "function");
assert(typeof GetTableVersions$ === "object");
assert(typeof GetTagsCommand === "function");
assert(typeof GetTags$ === "object");
assert(typeof GetTriggerCommand === "function");
assert(typeof GetTrigger$ === "object");
assert(typeof GetTriggersCommand === "function");
assert(typeof GetTriggers$ === "object");
assert(typeof GetUnfilteredPartitionMetadataCommand === "function");
assert(typeof GetUnfilteredPartitionMetadata$ === "object");
assert(typeof GetUnfilteredPartitionsMetadataCommand === "function");
assert(typeof GetUnfilteredPartitionsMetadata$ === "object");
assert(typeof GetUnfilteredTableMetadataCommand === "function");
assert(typeof GetUnfilteredTableMetadata$ === "object");
assert(typeof GetUsageProfileCommand === "function");
assert(typeof GetUsageProfile$ === "object");
assert(typeof GetUserDefinedFunctionCommand === "function");
assert(typeof GetUserDefinedFunction$ === "object");
assert(typeof GetUserDefinedFunctionsCommand === "function");
assert(typeof GetUserDefinedFunctions$ === "object");
assert(typeof GetWorkflowCommand === "function");
assert(typeof GetWorkflow$ === "object");
assert(typeof GetWorkflowRunCommand === "function");
assert(typeof GetWorkflowRun$ === "object");
assert(typeof GetWorkflowRunPropertiesCommand === "function");
assert(typeof GetWorkflowRunProperties$ === "object");
assert(typeof GetWorkflowRunsCommand === "function");
assert(typeof GetWorkflowRuns$ === "object");
assert(typeof ImportCatalogToGlueCommand === "function");
assert(typeof ImportCatalogToGlue$ === "object");
assert(typeof ListBlueprintsCommand === "function");
assert(typeof ListBlueprints$ === "object");
assert(typeof ListColumnStatisticsTaskRunsCommand === "function");
assert(typeof ListColumnStatisticsTaskRuns$ === "object");
assert(typeof ListConnectionTypesCommand === "function");
assert(typeof ListConnectionTypes$ === "object");
assert(typeof ListCrawlersCommand === "function");
assert(typeof ListCrawlers$ === "object");
assert(typeof ListCrawlsCommand === "function");
assert(typeof ListCrawls$ === "object");
assert(typeof ListCustomEntityTypesCommand === "function");
assert(typeof ListCustomEntityTypes$ === "object");
assert(typeof ListDataQualityResultsCommand === "function");
assert(typeof ListDataQualityResults$ === "object");
assert(typeof ListDataQualityRuleRecommendationRunsCommand === "function");
assert(typeof ListDataQualityRuleRecommendationRuns$ === "object");
assert(typeof ListDataQualityRulesetEvaluationRunsCommand === "function");
assert(typeof ListDataQualityRulesetEvaluationRuns$ === "object");
assert(typeof ListDataQualityRulesetsCommand === "function");
assert(typeof ListDataQualityRulesets$ === "object");
assert(typeof ListDataQualityStatisticAnnotationsCommand === "function");
assert(typeof ListDataQualityStatisticAnnotations$ === "object");
assert(typeof ListDataQualityStatisticsCommand === "function");
assert(typeof ListDataQualityStatistics$ === "object");
assert(typeof ListDevEndpointsCommand === "function");
assert(typeof ListDevEndpoints$ === "object");
assert(typeof ListEntitiesCommand === "function");
assert(typeof ListEntities$ === "object");
assert(typeof ListIntegrationResourcePropertiesCommand === "function");
assert(typeof ListIntegrationResourceProperties$ === "object");
assert(typeof ListJobsCommand === "function");
assert(typeof ListJobs$ === "object");
assert(typeof ListMLTransformsCommand === "function");
assert(typeof ListMLTransforms$ === "object");
assert(typeof ListRegistriesCommand === "function");
assert(typeof ListRegistries$ === "object");
assert(typeof ListSchemasCommand === "function");
assert(typeof ListSchemas$ === "object");
assert(typeof ListSchemaVersionsCommand === "function");
assert(typeof ListSchemaVersions$ === "object");
assert(typeof ListSessionsCommand === "function");
assert(typeof ListSessions$ === "object");
assert(typeof ListStatementsCommand === "function");
assert(typeof ListStatements$ === "object");
assert(typeof ListTableOptimizerRunsCommand === "function");
assert(typeof ListTableOptimizerRuns$ === "object");
assert(typeof ListTriggersCommand === "function");
assert(typeof ListTriggers$ === "object");
assert(typeof ListUsageProfilesCommand === "function");
assert(typeof ListUsageProfiles$ === "object");
assert(typeof ListWorkflowsCommand === "function");
assert(typeof ListWorkflows$ === "object");
assert(typeof ModifyIntegrationCommand === "function");
assert(typeof ModifyIntegration$ === "object");
assert(typeof PutDataCatalogEncryptionSettingsCommand === "function");
assert(typeof PutDataCatalogEncryptionSettings$ === "object");
assert(typeof PutDataQualityProfileAnnotationCommand === "function");
assert(typeof PutDataQualityProfileAnnotation$ === "object");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof PutResourcePolicy$ === "object");
assert(typeof PutSchemaVersionMetadataCommand === "function");
assert(typeof PutSchemaVersionMetadata$ === "object");
assert(typeof PutWorkflowRunPropertiesCommand === "function");
assert(typeof PutWorkflowRunProperties$ === "object");
assert(typeof QuerySchemaVersionMetadataCommand === "function");
assert(typeof QuerySchemaVersionMetadata$ === "object");
assert(typeof RegisterSchemaVersionCommand === "function");
assert(typeof RegisterSchemaVersion$ === "object");
assert(typeof RemoveSchemaVersionMetadataCommand === "function");
assert(typeof RemoveSchemaVersionMetadata$ === "object");
assert(typeof ResetJobBookmarkCommand === "function");
assert(typeof ResetJobBookmark$ === "object");
assert(typeof ResumeWorkflowRunCommand === "function");
assert(typeof ResumeWorkflowRun$ === "object");
assert(typeof RunStatementCommand === "function");
assert(typeof RunStatement$ === "object");
assert(typeof SearchTablesCommand === "function");
assert(typeof SearchTables$ === "object");
assert(typeof StartBlueprintRunCommand === "function");
assert(typeof StartBlueprintRun$ === "object");
assert(typeof StartColumnStatisticsTaskRunCommand === "function");
assert(typeof StartColumnStatisticsTaskRun$ === "object");
assert(typeof StartColumnStatisticsTaskRunScheduleCommand === "function");
assert(typeof StartColumnStatisticsTaskRunSchedule$ === "object");
assert(typeof StartCrawlerCommand === "function");
assert(typeof StartCrawler$ === "object");
assert(typeof StartCrawlerScheduleCommand === "function");
assert(typeof StartCrawlerSchedule$ === "object");
assert(typeof StartDataQualityRuleRecommendationRunCommand === "function");
assert(typeof StartDataQualityRuleRecommendationRun$ === "object");
assert(typeof StartDataQualityRulesetEvaluationRunCommand === "function");
assert(typeof StartDataQualityRulesetEvaluationRun$ === "object");
assert(typeof StartExportLabelsTaskRunCommand === "function");
assert(typeof StartExportLabelsTaskRun$ === "object");
assert(typeof StartImportLabelsTaskRunCommand === "function");
assert(typeof StartImportLabelsTaskRun$ === "object");
assert(typeof StartJobRunCommand === "function");
assert(typeof StartJobRun$ === "object");
assert(typeof StartMLEvaluationTaskRunCommand === "function");
assert(typeof StartMLEvaluationTaskRun$ === "object");
assert(typeof StartMLLabelingSetGenerationTaskRunCommand === "function");
assert(typeof StartMLLabelingSetGenerationTaskRun$ === "object");
assert(typeof StartTriggerCommand === "function");
assert(typeof StartTrigger$ === "object");
assert(typeof StartWorkflowRunCommand === "function");
assert(typeof StartWorkflowRun$ === "object");
assert(typeof StopColumnStatisticsTaskRunCommand === "function");
assert(typeof StopColumnStatisticsTaskRun$ === "object");
assert(typeof StopColumnStatisticsTaskRunScheduleCommand === "function");
assert(typeof StopColumnStatisticsTaskRunSchedule$ === "object");
assert(typeof StopCrawlerCommand === "function");
assert(typeof StopCrawler$ === "object");
assert(typeof StopCrawlerScheduleCommand === "function");
assert(typeof StopCrawlerSchedule$ === "object");
assert(typeof StopSessionCommand === "function");
assert(typeof StopSession$ === "object");
assert(typeof StopTriggerCommand === "function");
assert(typeof StopTrigger$ === "object");
assert(typeof StopWorkflowRunCommand === "function");
assert(typeof StopWorkflowRun$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof TestConnectionCommand === "function");
assert(typeof TestConnection$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateBlueprintCommand === "function");
assert(typeof UpdateBlueprint$ === "object");
assert(typeof UpdateCatalogCommand === "function");
assert(typeof UpdateCatalog$ === "object");
assert(typeof UpdateClassifierCommand === "function");
assert(typeof UpdateClassifier$ === "object");
assert(typeof UpdateColumnStatisticsForPartitionCommand === "function");
assert(typeof UpdateColumnStatisticsForPartition$ === "object");
assert(typeof UpdateColumnStatisticsForTableCommand === "function");
assert(typeof UpdateColumnStatisticsForTable$ === "object");
assert(typeof UpdateColumnStatisticsTaskSettingsCommand === "function");
assert(typeof UpdateColumnStatisticsTaskSettings$ === "object");
assert(typeof UpdateConnectionCommand === "function");
assert(typeof UpdateConnection$ === "object");
assert(typeof UpdateCrawlerCommand === "function");
assert(typeof UpdateCrawler$ === "object");
assert(typeof UpdateCrawlerScheduleCommand === "function");
assert(typeof UpdateCrawlerSchedule$ === "object");
assert(typeof UpdateDatabaseCommand === "function");
assert(typeof UpdateDatabase$ === "object");
assert(typeof UpdateDataQualityRulesetCommand === "function");
assert(typeof UpdateDataQualityRuleset$ === "object");
assert(typeof UpdateDevEndpointCommand === "function");
assert(typeof UpdateDevEndpoint$ === "object");
assert(typeof UpdateGlueIdentityCenterConfigurationCommand === "function");
assert(typeof UpdateGlueIdentityCenterConfiguration$ === "object");
assert(typeof UpdateIntegrationResourcePropertyCommand === "function");
assert(typeof UpdateIntegrationResourceProperty$ === "object");
assert(typeof UpdateIntegrationTablePropertiesCommand === "function");
assert(typeof UpdateIntegrationTableProperties$ === "object");
assert(typeof UpdateJobCommand === "function");
assert(typeof UpdateJob$ === "object");
assert(typeof UpdateJobFromSourceControlCommand === "function");
assert(typeof UpdateJobFromSourceControl$ === "object");
assert(typeof UpdateMLTransformCommand === "function");
assert(typeof UpdateMLTransform$ === "object");
assert(typeof UpdatePartitionCommand === "function");
assert(typeof UpdatePartition$ === "object");
assert(typeof UpdateRegistryCommand === "function");
assert(typeof UpdateRegistry$ === "object");
assert(typeof UpdateSchemaCommand === "function");
assert(typeof UpdateSchema$ === "object");
assert(typeof UpdateSourceControlFromJobCommand === "function");
assert(typeof UpdateSourceControlFromJob$ === "object");
assert(typeof UpdateTableCommand === "function");
assert(typeof UpdateTable$ === "object");
assert(typeof UpdateTableOptimizerCommand === "function");
assert(typeof UpdateTableOptimizer$ === "object");
assert(typeof UpdateTriggerCommand === "function");
assert(typeof UpdateTrigger$ === "object");
assert(typeof UpdateUsageProfileCommand === "function");
assert(typeof UpdateUsageProfile$ === "object");
assert(typeof UpdateUserDefinedFunctionCommand === "function");
assert(typeof UpdateUserDefinedFunction$ === "object");
assert(typeof UpdateWorkflowCommand === "function");
assert(typeof UpdateWorkflow$ === "object");
// structural schemas
assert(typeof Action$ === "object");
assert(typeof Aggregate$ === "object");
assert(typeof AggregateOperation$ === "object");
assert(typeof AllowedValue$ === "object");
assert(typeof AmazonRedshiftAdvancedOption$ === "object");
assert(typeof AmazonRedshiftNodeData$ === "object");
assert(typeof AmazonRedshiftSource$ === "object");
assert(typeof AmazonRedshiftTarget$ === "object");
assert(typeof AnnotationError$ === "object");
assert(typeof ApplyMapping$ === "object");
assert(typeof AthenaConnectorSource$ === "object");
assert(typeof AuditContext$ === "object");
assert(typeof AuthConfiguration$ === "object");
assert(typeof AuthenticationConfiguration$ === "object");
assert(typeof AuthenticationConfigurationInput$ === "object");
assert(typeof AuthorizationCodeProperties$ === "object");
assert(typeof AutoDataQuality$ === "object");
assert(typeof BackfillError$ === "object");
assert(typeof BasicAuthenticationCredentials$ === "object");
assert(typeof BasicCatalogTarget$ === "object");
assert(typeof BatchCreatePartitionRequest$ === "object");
assert(typeof BatchCreatePartitionResponse$ === "object");
assert(typeof BatchDeleteConnectionRequest$ === "object");
assert(typeof BatchDeleteConnectionResponse$ === "object");
assert(typeof BatchDeletePartitionRequest$ === "object");
assert(typeof BatchDeletePartitionResponse$ === "object");
assert(typeof BatchDeleteTableRequest$ === "object");
assert(typeof BatchDeleteTableResponse$ === "object");
assert(typeof BatchDeleteTableVersionRequest$ === "object");
assert(typeof BatchDeleteTableVersionResponse$ === "object");
assert(typeof BatchGetBlueprintsRequest$ === "object");
assert(typeof BatchGetBlueprintsResponse$ === "object");
assert(typeof BatchGetCrawlersRequest$ === "object");
assert(typeof BatchGetCrawlersResponse$ === "object");
assert(typeof BatchGetCustomEntityTypesRequest$ === "object");
assert(typeof BatchGetCustomEntityTypesResponse$ === "object");
assert(typeof BatchGetDataQualityResultRequest$ === "object");
assert(typeof BatchGetDataQualityResultResponse$ === "object");
assert(typeof BatchGetDevEndpointsRequest$ === "object");
assert(typeof BatchGetDevEndpointsResponse$ === "object");
assert(typeof BatchGetJobsRequest$ === "object");
assert(typeof BatchGetJobsResponse$ === "object");
assert(typeof BatchGetPartitionRequest$ === "object");
assert(typeof BatchGetPartitionResponse$ === "object");
assert(typeof BatchGetTableOptimizerEntry$ === "object");
assert(typeof BatchGetTableOptimizerError$ === "object");
assert(typeof BatchGetTableOptimizerRequest$ === "object");
assert(typeof BatchGetTableOptimizerResponse$ === "object");
assert(typeof BatchGetTriggersRequest$ === "object");
assert(typeof BatchGetTriggersResponse$ === "object");
assert(typeof BatchGetWorkflowsRequest$ === "object");
assert(typeof BatchGetWorkflowsResponse$ === "object");
assert(typeof BatchPutDataQualityStatisticAnnotationRequest$ === "object");
assert(typeof BatchPutDataQualityStatisticAnnotationResponse$ === "object");
assert(typeof BatchStopJobRunError$ === "object");
assert(typeof BatchStopJobRunRequest$ === "object");
assert(typeof BatchStopJobRunResponse$ === "object");
assert(typeof BatchStopJobRunSuccessfulSubmission$ === "object");
assert(typeof BatchTableOptimizer$ === "object");
assert(typeof BatchUpdatePartitionFailureEntry$ === "object");
assert(typeof BatchUpdatePartitionRequest$ === "object");
assert(typeof BatchUpdatePartitionRequestEntry$ === "object");
assert(typeof BatchUpdatePartitionResponse$ === "object");
assert(typeof BinaryColumnStatisticsData$ === "object");
assert(typeof Blueprint$ === "object");
assert(typeof BlueprintDetails$ === "object");
assert(typeof BlueprintRun$ === "object");
assert(typeof BooleanColumnStatisticsData$ === "object");
assert(typeof CancelDataQualityRuleRecommendationRunRequest$ === "object");
assert(typeof CancelDataQualityRuleRecommendationRunResponse$ === "object");
assert(typeof CancelDataQualityRulesetEvaluationRunRequest$ === "object");
assert(typeof CancelDataQualityRulesetEvaluationRunResponse$ === "object");
assert(typeof CancelMLTaskRunRequest$ === "object");
assert(typeof CancelMLTaskRunResponse$ === "object");
assert(typeof CancelStatementRequest$ === "object");
assert(typeof CancelStatementResponse$ === "object");
assert(typeof Capabilities$ === "object");
assert(typeof Catalog$ === "object");
assert(typeof CatalogDeltaSource$ === "object");
assert(typeof CatalogEntry$ === "object");
assert(typeof CatalogHudiSource$ === "object");
assert(typeof CatalogIcebergSource$ === "object");
assert(typeof CatalogImportStatus$ === "object");
assert(typeof CatalogInput$ === "object");
assert(typeof CatalogKafkaSource$ === "object");
assert(typeof CatalogKinesisSource$ === "object");
assert(typeof CatalogProperties$ === "object");
assert(typeof CatalogPropertiesOutput$ === "object");
assert(typeof CatalogSchemaChangePolicy$ === "object");
assert(typeof CatalogSource$ === "object");
assert(typeof CatalogTarget$ === "object");
assert(typeof CheckSchemaVersionValidityInput$ === "object");
assert(typeof CheckSchemaVersionValidityResponse$ === "object");
assert(typeof Classifier$ === "object");
assert(typeof CloudWatchEncryption$ === "object");
assert(typeof CodeGenConfigurationNode$ === "object");
assert(typeof CodeGenEdge$ === "object");
assert(typeof CodeGenNode$ === "object");
assert(typeof CodeGenNodeArg$ === "object");
assert(typeof Column$ === "object");
assert(typeof ColumnError$ === "object");
assert(typeof ColumnImportance$ === "object");
assert(typeof ColumnRowFilter$ === "object");
assert(typeof ColumnStatistics$ === "object");
assert(typeof ColumnStatisticsData$ === "object");
assert(typeof ColumnStatisticsError$ === "object");
assert(typeof ColumnStatisticsTaskRun$ === "object");
assert(typeof ColumnStatisticsTaskSettings$ === "object");
assert(typeof CompactionConfiguration$ === "object");
assert(typeof CompactionMetrics$ === "object");
assert(typeof ComputeEnvironmentConfiguration$ === "object");
assert(typeof Condition$ === "object");
assert(typeof ConditionExpression$ === "object");
assert(typeof ConfigurationObject$ === "object");
assert(typeof ConfusionMatrix$ === "object");
assert(typeof Connection$ === "object");
assert(typeof ConnectionInput$ === "object");
assert(typeof ConnectionPasswordEncryption$ === "object");
assert(typeof ConnectionsList$ === "object");
assert(typeof ConnectionTypeBrief$ === "object");
assert(typeof ConnectionTypeVariant$ === "object");
assert(typeof ConnectorDataSource$ === "object");
assert(typeof ConnectorDataTarget$ === "object");
assert(typeof Crawl$ === "object");
assert(typeof Crawler$ === "object");
assert(typeof CrawlerHistory$ === "object");
assert(typeof CrawlerMetrics$ === "object");
assert(typeof CrawlerNodeDetails$ === "object");
assert(typeof CrawlerTargets$ === "object");
assert(typeof CrawlsFilter$ === "object");
assert(typeof CreateBlueprintRequest$ === "object");
assert(typeof CreateBlueprintResponse$ === "object");
assert(typeof CreateCatalogRequest$ === "object");
assert(typeof CreateCatalogResponse$ === "object");
assert(typeof CreateClassifierRequest$ === "object");
assert(typeof CreateClassifierResponse$ === "object");
assert(typeof CreateColumnStatisticsTaskSettingsRequest$ === "object");
assert(typeof CreateColumnStatisticsTaskSettingsResponse$ === "object");
assert(typeof CreateConnectionRequest$ === "object");
assert(typeof CreateConnectionResponse$ === "object");
assert(typeof CreateCrawlerRequest$ === "object");
assert(typeof CreateCrawlerResponse$ === "object");
assert(typeof CreateCsvClassifierRequest$ === "object");
assert(typeof CreateCustomEntityTypeRequest$ === "object");
assert(typeof CreateCustomEntityTypeResponse$ === "object");
assert(typeof CreateDatabaseRequest$ === "object");
assert(typeof CreateDatabaseResponse$ === "object");
assert(typeof CreateDataQualityRulesetRequest$ === "object");
assert(typeof CreateDataQualityRulesetResponse$ === "object");
assert(typeof CreateDevEndpointRequest$ === "object");
assert(typeof CreateDevEndpointResponse$ === "object");
assert(typeof CreateGlueIdentityCenterConfigurationRequest$ === "object");
assert(typeof CreateGlueIdentityCenterConfigurationResponse$ === "object");
assert(typeof CreateGrokClassifierRequest$ === "object");
assert(typeof CreateIcebergTableInput$ === "object");
assert(typeof CreateIntegrationRequest$ === "object");
assert(typeof CreateIntegrationResourcePropertyRequest$ === "object");
assert(typeof CreateIntegrationResourcePropertyResponse$ === "object");
assert(typeof CreateIntegrationResponse$ === "object");
assert(typeof CreateIntegrationTablePropertiesRequest$ === "object");
assert(typeof CreateIntegrationTablePropertiesResponse$ === "object");
assert(typeof CreateJobRequest$ === "object");
assert(typeof CreateJobResponse$ === "object");
assert(typeof CreateJsonClassifierRequest$ === "object");
assert(typeof CreateMLTransformRequest$ === "object");
assert(typeof CreateMLTransformResponse$ === "object");
assert(typeof CreatePartitionIndexRequest$ === "object");
assert(typeof CreatePartitionIndexResponse$ === "object");
assert(typeof CreatePartitionRequest$ === "object");
assert(typeof CreatePartitionResponse$ === "object");
assert(typeof CreateRegistryInput$ === "object");
assert(typeof CreateRegistryResponse$ === "object");
assert(typeof CreateSchemaInput$ === "object");
assert(typeof CreateSchemaResponse$ === "object");
assert(typeof CreateScriptRequest$ === "object");
assert(typeof CreateScriptResponse$ === "object");
assert(typeof CreateSecurityConfigurationRequest$ === "object");
assert(typeof CreateSecurityConfigurationResponse$ === "object");
assert(typeof CreateSessionRequest$ === "object");
assert(typeof CreateSessionResponse$ === "object");
assert(typeof CreateTableOptimizerRequest$ === "object");
assert(typeof CreateTableOptimizerResponse$ === "object");
assert(typeof CreateTableRequest$ === "object");
assert(typeof CreateTableResponse$ === "object");
assert(typeof CreateTriggerRequest$ === "object");
assert(typeof CreateTriggerResponse$ === "object");
assert(typeof CreateUsageProfileRequest$ === "object");
assert(typeof CreateUsageProfileResponse$ === "object");
assert(typeof CreateUserDefinedFunctionRequest$ === "object");
assert(typeof CreateUserDefinedFunctionResponse$ === "object");
assert(typeof CreateWorkflowRequest$ === "object");
assert(typeof CreateWorkflowResponse$ === "object");
assert(typeof CreateXMLClassifierRequest$ === "object");
assert(typeof CsvClassifier$ === "object");
assert(typeof CustomCode$ === "object");
assert(typeof CustomEntityType$ === "object");
assert(typeof Database$ === "object");
assert(typeof DatabaseIdentifier$ === "object");
assert(typeof DatabaseInput$ === "object");
assert(typeof DataCatalogEncryptionSettings$ === "object");
assert(typeof DataLakeAccessProperties$ === "object");
assert(typeof DataLakeAccessPropertiesOutput$ === "object");
assert(typeof DataLakePrincipal$ === "object");
assert(typeof DatapointInclusionAnnotation$ === "object");
assert(typeof DataQualityAggregatedMetrics$ === "object");
assert(typeof DataQualityAnalyzerResult$ === "object");
assert(typeof DataQualityEncryption$ === "object");
assert(typeof DataQualityEvaluationRunAdditionalRunOptions$ === "object");
assert(typeof DataQualityGlueTable$ === "object");
assert(typeof DataQualityMetricValues$ === "object");
assert(typeof DataQualityObservation$ === "object");
assert(typeof DataQualityResult$ === "object");
assert(typeof DataQualityResultDescription$ === "object");
assert(typeof DataQualityResultFilterCriteria$ === "object");
assert(typeof DataQualityRuleRecommendationRunDescription$ === "object");
assert(typeof DataQualityRuleRecommendationRunFilter$ === "object");
assert(typeof DataQualityRuleResult$ === "object");
assert(typeof DataQualityRulesetEvaluationRunDescription$ === "object");
assert(typeof DataQualityRulesetEvaluationRunFilter$ === "object");
assert(typeof DataQualityRulesetFilterCriteria$ === "object");
assert(typeof DataQualityRulesetListDetails$ === "object");
assert(typeof DataQualityTargetTable$ === "object");
assert(typeof DataSource$ === "object");
assert(typeof Datatype$ === "object");
assert(typeof DateColumnStatisticsData$ === "object");
assert(typeof DDBELTCatalogAdditionalOptions$ === "object");
assert(typeof DDBELTConnectionOptions$ === "object");
assert(typeof DecimalColumnStatisticsData$ === "object");
assert(typeof DecimalNumber$ === "object");
assert(typeof DeleteBlueprintRequest$ === "object");
assert(typeof DeleteBlueprintResponse$ === "object");
assert(typeof DeleteCatalogRequest$ === "object");
assert(typeof DeleteCatalogResponse$ === "object");
assert(typeof DeleteClassifierRequest$ === "object");
assert(typeof DeleteClassifierResponse$ === "object");
assert(typeof DeleteColumnStatisticsForPartitionRequest$ === "object");
assert(typeof DeleteColumnStatisticsForPartitionResponse$ === "object");
assert(typeof DeleteColumnStatisticsForTableRequest$ === "object");
assert(typeof DeleteColumnStatisticsForTableResponse$ === "object");
assert(typeof DeleteColumnStatisticsTaskSettingsRequest$ === "object");
assert(typeof DeleteColumnStatisticsTaskSettingsResponse$ === "object");
assert(typeof DeleteConnectionRequest$ === "object");
assert(typeof DeleteConnectionResponse$ === "object");
assert(typeof DeleteCrawlerRequest$ === "object");
assert(typeof DeleteCrawlerResponse$ === "object");
assert(typeof DeleteCustomEntityTypeRequest$ === "object");
assert(typeof DeleteCustomEntityTypeResponse$ === "object");
assert(typeof DeleteDatabaseRequest$ === "object");
assert(typeof DeleteDatabaseResponse$ === "object");
assert(typeof DeleteDataQualityRulesetRequest$ === "object");
assert(typeof DeleteDataQualityRulesetResponse$ === "object");
assert(typeof DeleteDevEndpointRequest$ === "object");
assert(typeof DeleteDevEndpointResponse$ === "object");
assert(typeof DeleteGlueIdentityCenterConfigurationRequest$ === "object");
assert(typeof DeleteGlueIdentityCenterConfigurationResponse$ === "object");
assert(typeof DeleteIntegrationRequest$ === "object");
assert(typeof DeleteIntegrationResourcePropertyRequest$ === "object");
assert(typeof DeleteIntegrationResourcePropertyResponse$ === "object");
assert(typeof DeleteIntegrationResponse$ === "object");
assert(typeof DeleteIntegrationTablePropertiesRequest$ === "object");
assert(typeof DeleteIntegrationTablePropertiesResponse$ === "object");
assert(typeof DeleteJobRequest$ === "object");
assert(typeof DeleteJobResponse$ === "object");
assert(typeof DeleteMLTransformRequest$ === "object");
assert(typeof DeleteMLTransformResponse$ === "object");
assert(typeof DeletePartitionIndexRequest$ === "object");
assert(typeof DeletePartitionIndexResponse$ === "object");
assert(typeof DeletePartitionRequest$ === "object");
assert(typeof DeletePartitionResponse$ === "object");
assert(typeof DeleteRegistryInput$ === "object");
assert(typeof DeleteRegistryResponse$ === "object");
assert(typeof DeleteResourcePolicyRequest$ === "object");
assert(typeof DeleteResourcePolicyResponse$ === "object");
assert(typeof DeleteSchemaInput$ === "object");
assert(typeof DeleteSchemaResponse$ === "object");
assert(typeof DeleteSchemaVersionsInput$ === "object");
assert(typeof DeleteSchemaVersionsResponse$ === "object");
assert(typeof DeleteSecurityConfigurationRequest$ === "object");
assert(typeof DeleteSecurityConfigurationResponse$ === "object");
assert(typeof DeleteSessionRequest$ === "object");
assert(typeof DeleteSessionResponse$ === "object");
assert(typeof DeleteTableOptimizerRequest$ === "object");
assert(typeof DeleteTableOptimizerResponse$ === "object");
assert(typeof DeleteTableRequest$ === "object");
assert(typeof DeleteTableResponse$ === "object");
assert(typeof DeleteTableVersionRequest$ === "object");
assert(typeof DeleteTableVersionResponse$ === "object");
assert(typeof DeleteTriggerRequest$ === "object");
assert(typeof DeleteTriggerResponse$ === "object");
assert(typeof DeleteUsageProfileRequest$ === "object");
assert(typeof DeleteUsageProfileResponse$ === "object");
assert(typeof DeleteUserDefinedFunctionRequest$ === "object");
assert(typeof DeleteUserDefinedFunctionResponse$ === "object");
assert(typeof DeleteWorkflowRequest$ === "object");
assert(typeof DeleteWorkflowResponse$ === "object");
assert(typeof DeltaTarget$ === "object");
assert(typeof DescribeConnectionTypeRequest$ === "object");
assert(typeof DescribeConnectionTypeResponse$ === "object");
assert(typeof DescribeEntityRequest$ === "object");
assert(typeof DescribeEntityResponse$ === "object");
assert(typeof DescribeInboundIntegrationsRequest$ === "object");
assert(typeof DescribeInboundIntegrationsResponse$ === "object");
assert(typeof DescribeIntegrationsRequest$ === "object");
assert(typeof DescribeIntegrationsResponse$ === "object");
assert(typeof DevEndpoint$ === "object");
assert(typeof DevEndpointCustomLibraries$ === "object");
assert(typeof DirectJDBCSource$ === "object");
assert(typeof DirectKafkaSource$ === "object");
assert(typeof DirectKinesisSource$ === "object");
assert(typeof DirectSchemaChangePolicy$ === "object");
assert(typeof DoubleColumnStatisticsData$ === "object");
assert(typeof DQResultsPublishingOptions$ === "object");
assert(typeof DQStopJobOnFailureOptions$ === "object");
assert(typeof DropDuplicates$ === "object");
assert(typeof DropFields$ === "object");
assert(typeof DropNullFields$ === "object");
assert(typeof DynamicTransform$ === "object");
assert(typeof DynamoDBCatalogSource$ === "object");
assert(typeof DynamoDBELTConnectorSource$ === "object");
assert(typeof DynamoDBTarget$ === "object");
assert(typeof Edge$ === "object");
assert(typeof EncryptionAtRest$ === "object");
assert(typeof EncryptionConfiguration$ === "object");
assert(typeof Entity$ === "object");
assert(typeof ErrorDetail$ === "object");
assert(typeof ErrorDetails$ === "object");
assert(typeof EvaluateDataQuality$ === "object");
assert(typeof EvaluateDataQualityMultiFrame$ === "object");
assert(typeof EvaluationMetrics$ === "object");
assert(typeof EventBatchingCondition$ === "object");
assert(typeof ExecutionAttempt$ === "object");
assert(typeof ExecutionProperty$ === "object");
assert(typeof ExportLabelsTaskRunProperties$ === "object");
assert(typeof FederatedCatalog$ === "object");
assert(typeof FederatedDatabase$ === "object");
assert(typeof FederatedTable$ === "object");
assert(typeof Field$ === "object");
assert(typeof FillMissingValues$ === "object");
assert(typeof Filter$ === "object");
assert(typeof FilterExpression$ === "object");
assert(typeof FilterValue$ === "object");
assert(typeof FindMatchesMetrics$ === "object");
assert(typeof FindMatchesParameters$ === "object");
assert(typeof FindMatchesTaskRunProperties$ === "object");
assert(typeof GetBlueprintRequest$ === "object");
assert(typeof GetBlueprintResponse$ === "object");
assert(typeof GetBlueprintRunRequest$ === "object");
assert(typeof GetBlueprintRunResponse$ === "object");
assert(typeof GetBlueprintRunsRequest$ === "object");
assert(typeof GetBlueprintRunsResponse$ === "object");
assert(typeof GetCatalogImportStatusRequest$ === "object");
assert(typeof GetCatalogImportStatusResponse$ === "object");
assert(typeof GetCatalogRequest$ === "object");
assert(typeof GetCatalogResponse$ === "object");
assert(typeof GetCatalogsRequest$ === "object");
assert(typeof GetCatalogsResponse$ === "object");
assert(typeof GetClassifierRequest$ === "object");
assert(typeof GetClassifierResponse$ === "object");
assert(typeof GetClassifiersRequest$ === "object");
assert(typeof GetClassifiersResponse$ === "object");
assert(typeof GetColumnStatisticsForPartitionRequest$ === "object");
assert(typeof GetColumnStatisticsForPartitionResponse$ === "object");
assert(typeof GetColumnStatisticsForTableRequest$ === "object");
assert(typeof GetColumnStatisticsForTableResponse$ === "object");
assert(typeof GetColumnStatisticsTaskRunRequest$ === "object");
assert(typeof GetColumnStatisticsTaskRunResponse$ === "object");
assert(typeof GetColumnStatisticsTaskRunsRequest$ === "object");
assert(typeof GetColumnStatisticsTaskRunsResponse$ === "object");
assert(typeof GetColumnStatisticsTaskSettingsRequest$ === "object");
assert(typeof GetColumnStatisticsTaskSettingsResponse$ === "object");
assert(typeof GetConnectionRequest$ === "object");
assert(typeof GetConnectionResponse$ === "object");
assert(typeof GetConnectionsFilter$ === "object");
assert(typeof GetConnectionsRequest$ === "object");
assert(typeof GetConnectionsResponse$ === "object");
assert(typeof GetCrawlerMetricsRequest$ === "object");
assert(typeof GetCrawlerMetricsResponse$ === "object");
assert(typeof GetCrawlerRequest$ === "object");
assert(typeof GetCrawlerResponse$ === "object");
assert(typeof GetCrawlersRequest$ === "object");
assert(typeof GetCrawlersResponse$ === "object");
assert(typeof GetCustomEntityTypeRequest$ === "object");
assert(typeof GetCustomEntityTypeResponse$ === "object");
assert(typeof GetDatabaseRequest$ === "object");
assert(typeof GetDatabaseResponse$ === "object");
assert(typeof GetDatabasesRequest$ === "object");
assert(typeof GetDatabasesResponse$ === "object");
assert(typeof GetDataCatalogEncryptionSettingsRequest$ === "object");
assert(typeof GetDataCatalogEncryptionSettingsResponse$ === "object");
assert(typeof GetDataflowGraphRequest$ === "object");
assert(typeof GetDataflowGraphResponse$ === "object");
assert(typeof GetDataQualityModelRequest$ === "object");
assert(typeof GetDataQualityModelResponse$ === "object");
assert(typeof GetDataQualityModelResultRequest$ === "object");
assert(typeof GetDataQualityModelResultResponse$ === "object");
assert(typeof GetDataQualityResultRequest$ === "object");
assert(typeof GetDataQualityResultResponse$ === "object");
assert(typeof GetDataQualityRuleRecommendationRunRequest$ === "object");
assert(typeof GetDataQualityRuleRecommendationRunResponse$ === "object");
assert(typeof GetDataQualityRulesetEvaluationRunRequest$ === "object");
assert(typeof GetDataQualityRulesetEvaluationRunResponse$ === "object");
assert(typeof GetDataQualityRulesetRequest$ === "object");
assert(typeof GetDataQualityRulesetResponse$ === "object");
assert(typeof GetDevEndpointRequest$ === "object");
assert(typeof GetDevEndpointResponse$ === "object");
assert(typeof GetDevEndpointsRequest$ === "object");
assert(typeof GetDevEndpointsResponse$ === "object");
assert(typeof GetEntityRecordsRequest$ === "object");
assert(typeof GetEntityRecordsResponse$ === "object");
assert(typeof GetGlueIdentityCenterConfigurationRequest$ === "object");
assert(typeof GetGlueIdentityCenterConfigurationResponse$ === "object");
assert(typeof GetIntegrationResourcePropertyRequest$ === "object");
assert(typeof GetIntegrationResourcePropertyResponse$ === "object");
assert(typeof GetIntegrationTablePropertiesRequest$ === "object");
assert(typeof GetIntegrationTablePropertiesResponse$ === "object");
assert(typeof GetJobBookmarkRequest$ === "object");
assert(typeof GetJobBookmarkResponse$ === "object");
assert(typeof GetJobRequest$ === "object");
assert(typeof GetJobResponse$ === "object");
assert(typeof GetJobRunRequest$ === "object");
assert(typeof GetJobRunResponse$ === "object");
assert(typeof GetJobRunsRequest$ === "object");
assert(typeof GetJobRunsResponse$ === "object");
assert(typeof GetJobsRequest$ === "object");
assert(typeof GetJobsResponse$ === "object");
assert(typeof GetMappingRequest$ === "object");
assert(typeof GetMappingResponse$ === "object");
assert(typeof GetMLTaskRunRequest$ === "object");
assert(typeof GetMLTaskRunResponse$ === "object");
assert(typeof GetMLTaskRunsRequest$ === "object");
assert(typeof GetMLTaskRunsResponse$ === "object");
assert(typeof GetMLTransformRequest$ === "object");
assert(typeof GetMLTransformResponse$ === "object");
assert(typeof GetMLTransformsRequest$ === "object");
assert(typeof GetMLTransformsResponse$ === "object");
assert(typeof GetPartitionIndexesRequest$ === "object");
assert(typeof GetPartitionIndexesResponse$ === "object");
assert(typeof GetPartitionRequest$ === "object");
assert(typeof GetPartitionResponse$ === "object");
assert(typeof GetPartitionsRequest$ === "object");
assert(typeof GetPartitionsResponse$ === "object");
assert(typeof GetPlanRequest$ === "object");
assert(typeof GetPlanResponse$ === "object");
assert(typeof GetRegistryInput$ === "object");
assert(typeof GetRegistryResponse$ === "object");
assert(typeof GetResourcePoliciesRequest$ === "object");
assert(typeof GetResourcePoliciesResponse$ === "object");
assert(typeof GetResourcePolicyRequest$ === "object");
assert(typeof GetResourcePolicyResponse$ === "object");
assert(typeof GetSchemaByDefinitionInput$ === "object");
assert(typeof GetSchemaByDefinitionResponse$ === "object");
assert(typeof GetSchemaInput$ === "object");
assert(typeof GetSchemaResponse$ === "object");
assert(typeof GetSchemaVersionInput$ === "object");
assert(typeof GetSchemaVersionResponse$ === "object");
assert(typeof GetSchemaVersionsDiffInput$ === "object");
assert(typeof GetSchemaVersionsDiffResponse$ === "object");
assert(typeof GetSecurityConfigurationRequest$ === "object");
assert(typeof GetSecurityConfigurationResponse$ === "object");
assert(typeof GetSecurityConfigurationsRequest$ === "object");
assert(typeof GetSecurityConfigurationsResponse$ === "object");
assert(typeof GetSessionRequest$ === "object");
assert(typeof GetSessionResponse$ === "object");
assert(typeof GetStatementRequest$ === "object");
assert(typeof GetStatementResponse$ === "object");
assert(typeof GetTableOptimizerRequest$ === "object");
assert(typeof GetTableOptimizerResponse$ === "object");
assert(typeof GetTableRequest$ === "object");
assert(typeof GetTableResponse$ === "object");
assert(typeof GetTablesRequest$ === "object");
assert(typeof GetTablesResponse$ === "object");
assert(typeof GetTableVersionRequest$ === "object");
assert(typeof GetTableVersionResponse$ === "object");
assert(typeof GetTableVersionsRequest$ === "object");
assert(typeof GetTableVersionsResponse$ === "object");
assert(typeof GetTagsRequest$ === "object");
assert(typeof GetTagsResponse$ === "object");
assert(typeof GetTriggerRequest$ === "object");
assert(typeof GetTriggerResponse$ === "object");
assert(typeof GetTriggersRequest$ === "object");
assert(typeof GetTriggersResponse$ === "object");
assert(typeof GetUnfilteredPartitionMetadataRequest$ === "object");
assert(typeof GetUnfilteredPartitionMetadataResponse$ === "object");
assert(typeof GetUnfilteredPartitionsMetadataRequest$ === "object");
assert(typeof GetUnfilteredPartitionsMetadataResponse$ === "object");
assert(typeof GetUnfilteredTableMetadataRequest$ === "object");
assert(typeof GetUnfilteredTableMetadataResponse$ === "object");
assert(typeof GetUsageProfileRequest$ === "object");
assert(typeof GetUsageProfileResponse$ === "object");
assert(typeof GetUserDefinedFunctionRequest$ === "object");
assert(typeof GetUserDefinedFunctionResponse$ === "object");
assert(typeof GetUserDefinedFunctionsRequest$ === "object");
assert(typeof GetUserDefinedFunctionsResponse$ === "object");
assert(typeof GetWorkflowRequest$ === "object");
assert(typeof GetWorkflowResponse$ === "object");
assert(typeof GetWorkflowRunPropertiesRequest$ === "object");
assert(typeof GetWorkflowRunPropertiesResponse$ === "object");
assert(typeof GetWorkflowRunRequest$ === "object");
assert(typeof GetWorkflowRunResponse$ === "object");
assert(typeof GetWorkflowRunsRequest$ === "object");
assert(typeof GetWorkflowRunsResponse$ === "object");
assert(typeof GluePolicy$ === "object");
assert(typeof GlueSchema$ === "object");
assert(typeof GlueStudioSchemaColumn$ === "object");
assert(typeof GlueTable$ === "object");
assert(typeof GovernedCatalogSource$ === "object");
assert(typeof GovernedCatalogTarget$ === "object");
assert(typeof GrokClassifier$ === "object");
assert(typeof GroupFilters$ === "object");
assert(typeof HudiTarget$ === "object");
assert(typeof IcebergCompactionConfiguration$ === "object");
assert(typeof IcebergCompactionMetrics$ === "object");
assert(typeof IcebergEncryptedKey$ === "object");
assert(typeof IcebergInput$ === "object");
assert(typeof IcebergOptimizationProperties$ === "object");
assert(typeof IcebergOptimizationPropertiesOutput$ === "object");
assert(typeof IcebergOrphanFileDeletionConfiguration$ === "object");
assert(typeof IcebergOrphanFileDeletionMetrics$ === "object");
assert(typeof IcebergPartitionField$ === "object");
assert(typeof IcebergPartitionSpec$ === "object");
assert(typeof IcebergRetentionConfiguration$ === "object");
assert(typeof IcebergRetentionMetrics$ === "object");
assert(typeof IcebergSchema$ === "object");
assert(typeof IcebergSortField$ === "object");
assert(typeof IcebergSortOrder$ === "object");
assert(typeof IcebergStructField$ === "object");
assert(typeof IcebergTableUpdate$ === "object");
assert(typeof IcebergTarget$ === "object");
assert(typeof ImportCatalogToGlueRequest$ === "object");
assert(typeof ImportCatalogToGlueResponse$ === "object");
assert(typeof ImportLabelsTaskRunProperties$ === "object");
assert(typeof InboundIntegration$ === "object");
assert(typeof Integration$ === "object");
assert(typeof IntegrationConfig$ === "object");
assert(typeof IntegrationError$ === "object");
assert(typeof IntegrationFilter$ === "object");
assert(typeof IntegrationPartition$ === "object");
assert(typeof IntegrationResourceProperty$ === "object");
assert(typeof IntegrationResourcePropertyFilter$ === "object");
assert(typeof JDBCConnectorOptions$ === "object");
assert(typeof JDBCConnectorSource$ === "object");
assert(typeof JDBCConnectorTarget$ === "object");
assert(typeof JdbcTarget$ === "object");
assert(typeof Job$ === "object");
assert(typeof JobBookmarkEntry$ === "object");
assert(typeof JobBookmarksEncryption$ === "object");
assert(typeof JobCommand$ === "object");
assert(typeof JobNodeDetails$ === "object");
assert(typeof JobRun$ === "object");
assert(typeof JobUpdate$ === "object");
assert(typeof Join$ === "object");
assert(typeof JoinColumn$ === "object");
assert(typeof JsonClassifier$ === "object");
assert(typeof KafkaStreamingSourceOptions$ === "object");
assert(typeof KeySchemaElement$ === "object");
assert(typeof KinesisStreamingSourceOptions$ === "object");
assert(typeof LabelingSetGenerationTaskRunProperties$ === "object");
assert(typeof LakeFormationConfiguration$ === "object");
assert(typeof LastActiveDefinition$ === "object");
assert(typeof LastCrawlInfo$ === "object");
assert(typeof LineageConfiguration$ === "object");
assert(typeof ListBlueprintsRequest$ === "object");
assert(typeof ListBlueprintsResponse$ === "object");
assert(typeof ListColumnStatisticsTaskRunsRequest$ === "object");
assert(typeof ListColumnStatisticsTaskRunsResponse$ === "object");
assert(typeof ListConnectionTypesRequest$ === "object");
assert(typeof ListConnectionTypesResponse$ === "object");
assert(typeof ListCrawlersRequest$ === "object");
assert(typeof ListCrawlersResponse$ === "object");
assert(typeof ListCrawlsRequest$ === "object");
assert(typeof ListCrawlsResponse$ === "object");
assert(typeof ListCustomEntityTypesRequest$ === "object");
assert(typeof ListCustomEntityTypesResponse$ === "object");
assert(typeof ListDataQualityResultsRequest$ === "object");
assert(typeof ListDataQualityResultsResponse$ === "object");
assert(typeof ListDataQualityRuleRecommendationRunsRequest$ === "object");
assert(typeof ListDataQualityRuleRecommendationRunsResponse$ === "object");
assert(typeof ListDataQualityRulesetEvaluationRunsRequest$ === "object");
assert(typeof ListDataQualityRulesetEvaluationRunsResponse$ === "object");
assert(typeof ListDataQualityRulesetsRequest$ === "object");
assert(typeof ListDataQualityRulesetsResponse$ === "object");
assert(typeof ListDataQualityStatisticAnnotationsRequest$ === "object");
assert(typeof ListDataQualityStatisticAnnotationsResponse$ === "object");
assert(typeof ListDataQualityStatisticsRequest$ === "object");
assert(typeof ListDataQualityStatisticsResponse$ === "object");
assert(typeof ListDevEndpointsRequest$ === "object");
assert(typeof ListDevEndpointsResponse$ === "object");
assert(typeof ListEntitiesRequest$ === "object");
assert(typeof ListEntitiesResponse$ === "object");
assert(typeof ListIntegrationResourcePropertiesRequest$ === "object");
assert(typeof ListIntegrationResourcePropertiesResponse$ === "object");
assert(typeof ListJobsRequest$ === "object");
assert(typeof ListJobsResponse$ === "object");
assert(typeof ListMLTransformsRequest$ === "object");
assert(typeof ListMLTransformsResponse$ === "object");
assert(typeof ListRegistriesInput$ === "object");
assert(typeof ListRegistriesResponse$ === "object");
assert(typeof ListSchemasInput$ === "object");
assert(typeof ListSchemasResponse$ === "object");
assert(typeof ListSchemaVersionsInput$ === "object");
assert(typeof ListSchemaVersionsResponse$ === "object");
assert(typeof ListSessionsRequest$ === "object");
assert(typeof ListSessionsResponse$ === "object");
assert(typeof ListStatementsRequest$ === "object");
assert(typeof ListStatementsResponse$ === "object");
assert(typeof ListTableOptimizerRunsRequest$ === "object");
assert(typeof ListTableOptimizerRunsResponse$ === "object");
assert(typeof ListTriggersRequest$ === "object");
assert(typeof ListTriggersResponse$ === "object");
assert(typeof ListUsageProfilesRequest$ === "object");
assert(typeof ListUsageProfilesResponse$ === "object");
assert(typeof ListWorkflowsRequest$ === "object");
assert(typeof ListWorkflowsResponse$ === "object");
assert(typeof Location$ === "object");
assert(typeof LongColumnStatisticsData$ === "object");
assert(typeof Mapping$ === "object");
assert(typeof MappingEntry$ === "object");
assert(typeof Merge$ === "object");
assert(typeof MetadataInfo$ === "object");
assert(typeof MetadataKeyValuePair$ === "object");
assert(typeof MetricBasedObservation$ === "object");
assert(typeof MicrosoftSQLServerCatalogSource$ === "object");
assert(typeof MicrosoftSQLServerCatalogTarget$ === "object");
assert(typeof MLTransform$ === "object");
assert(typeof MLUserDataEncryption$ === "object");
assert(typeof ModifyIntegrationRequest$ === "object");
assert(typeof ModifyIntegrationResponse$ === "object");
assert(typeof MongoDBTarget$ === "object");
assert(typeof MySQLCatalogSource$ === "object");
assert(typeof MySQLCatalogTarget$ === "object");
assert(typeof Node$ === "object");
assert(typeof NotificationProperty$ === "object");
assert(typeof NullCheckBoxList$ === "object");
assert(typeof NullValueField$ === "object");
assert(typeof OAuth2ClientApplication$ === "object");
assert(typeof OAuth2Credentials$ === "object");
assert(typeof OAuth2Properties$ === "object");
assert(typeof OAuth2PropertiesInput$ === "object");
assert(typeof OpenTableFormatInput$ === "object");
assert(typeof Option$ === "object");
assert(typeof OracleSQLCatalogSource$ === "object");
assert(typeof OracleSQLCatalogTarget$ === "object");
assert(typeof Order$ === "object");
assert(typeof OrphanFileDeletionConfiguration$ === "object");
assert(typeof OrphanFileDeletionMetrics$ === "object");
assert(typeof OtherMetadataValueListItem$ === "object");
assert(typeof Partition$ === "object");
assert(typeof PartitionError$ === "object");
assert(typeof PartitionIndex$ === "object");
assert(typeof PartitionIndexDescriptor$ === "object");
assert(typeof PartitionInput$ === "object");
assert(typeof PartitionValueList$ === "object");
assert(typeof PhysicalConnectionRequirements$ === "object");
assert(typeof PIIDetection$ === "object");
assert(typeof PostgreSQLCatalogSource$ === "object");
assert(typeof PostgreSQLCatalogTarget$ === "object");
assert(typeof Predecessor$ === "object");
assert(typeof Predicate$ === "object");
assert(typeof PrincipalPermissions$ === "object");
assert(typeof ProfileConfiguration$ === "object");
assert(typeof Property$ === "object");
assert(typeof PropertyPredicate$ === "object");
assert(typeof PutDataCatalogEncryptionSettingsRequest$ === "object");
assert(typeof PutDataCatalogEncryptionSettingsResponse$ === "object");
assert(typeof PutDataQualityProfileAnnotationRequest$ === "object");
assert(typeof PutDataQualityProfileAnnotationResponse$ === "object");
assert(typeof PutResourcePolicyRequest$ === "object");
assert(typeof PutResourcePolicyResponse$ === "object");
assert(typeof PutSchemaVersionMetadataInput$ === "object");
assert(typeof PutSchemaVersionMetadataResponse$ === "object");
assert(typeof PutWorkflowRunPropertiesRequest$ === "object");
assert(typeof PutWorkflowRunPropertiesResponse$ === "object");
assert(typeof QuerySchemaVersionMetadataInput$ === "object");
assert(typeof QuerySchemaVersionMetadataResponse$ === "object");
assert(typeof QuerySessionContext$ === "object");
assert(typeof Recipe$ === "object");
assert(typeof RecipeAction$ === "object");
assert(typeof RecipeReference$ === "object");
assert(typeof RecipeStep$ === "object");
assert(typeof RecrawlPolicy$ === "object");
assert(typeof RedshiftSource$ === "object");
assert(typeof RedshiftTarget$ === "object");
assert(typeof RegisterSchemaVersionInput$ === "object");
assert(typeof RegisterSchemaVersionResponse$ === "object");
assert(typeof RegistryId$ === "object");
assert(typeof RegistryListItem$ === "object");
assert(typeof RelationalCatalogSource$ === "object");
assert(typeof RemoveSchemaVersionMetadataInput$ === "object");
assert(typeof RemoveSchemaVersionMetadataResponse$ === "object");
assert(typeof RenameField$ === "object");
assert(typeof ResetJobBookmarkRequest$ === "object");
assert(typeof ResetJobBookmarkResponse$ === "object");
assert(typeof ResourceUri$ === "object");
assert(typeof ResumeWorkflowRunRequest$ === "object");
assert(typeof ResumeWorkflowRunResponse$ === "object");
assert(typeof RetentionConfiguration$ === "object");
assert(typeof RetentionMetrics$ === "object");
assert(typeof Route$ === "object");
assert(typeof RunIdentifier$ === "object");
assert(typeof RunMetrics$ === "object");
assert(typeof RunStatementRequest$ === "object");
assert(typeof RunStatementResponse$ === "object");
assert(typeof S3CatalogDeltaSource$ === "object");
assert(typeof S3CatalogHudiSource$ === "object");
assert(typeof S3CatalogIcebergSource$ === "object");
assert(typeof S3CatalogSource$ === "object");
assert(typeof S3CatalogTarget$ === "object");
assert(typeof S3CsvSource$ === "object");
assert(typeof S3DeltaCatalogTarget$ === "object");
assert(typeof S3DeltaDirectTarget$ === "object");
assert(typeof S3DeltaSource$ === "object");
assert(typeof S3DirectSourceAdditionalOptions$ === "object");
assert(typeof S3DirectTarget$ === "object");
assert(typeof S3Encryption$ === "object");
assert(typeof S3ExcelSource$ === "object");
assert(typeof S3GlueParquetTarget$ === "object");
assert(typeof S3HudiCatalogTarget$ === "object");
assert(typeof S3HudiDirectTarget$ === "object");
assert(typeof S3HudiSource$ === "object");
assert(typeof S3HyperDirectTarget$ === "object");
assert(typeof S3IcebergCatalogTarget$ === "object");
assert(typeof S3IcebergDirectTarget$ === "object");
assert(typeof S3JsonSource$ === "object");
assert(typeof S3ParquetSource$ === "object");
assert(typeof S3SourceAdditionalOptions$ === "object");
assert(typeof S3Target$ === "object");
assert(typeof Schedule$ === "object");
assert(typeof SchemaChangePolicy$ === "object");
assert(typeof SchemaColumn$ === "object");
assert(typeof SchemaId$ === "object");
assert(typeof SchemaListItem$ === "object");
assert(typeof SchemaReference$ === "object");
assert(typeof SchemaVersionErrorItem$ === "object");
assert(typeof SchemaVersionListItem$ === "object");
assert(typeof SchemaVersionNumber$ === "object");
assert(typeof SearchTablesRequest$ === "object");
assert(typeof SearchTablesResponse$ === "object");
assert(typeof SecurityConfiguration$ === "object");
assert(typeof Segment$ === "object");
assert(typeof SelectFields$ === "object");
assert(typeof SelectFromCollection$ === "object");
assert(typeof SerDeInfo$ === "object");
assert(typeof Session$ === "object");
assert(typeof SessionCommand$ === "object");
assert(typeof SkewedInfo$ === "object");
assert(typeof SnowflakeNodeData$ === "object");
assert(typeof SnowflakeSource$ === "object");
assert(typeof SnowflakeTarget$ === "object");
assert(typeof SortCriterion$ === "object");
assert(typeof SourceControlDetails$ === "object");
assert(typeof SourceProcessingProperties$ === "object");
assert(typeof SourceTableConfig$ === "object");
assert(typeof SparkConnectorSource$ === "object");
assert(typeof SparkConnectorTarget$ === "object");
assert(typeof SparkSQL$ === "object");
assert(typeof Spigot$ === "object");
assert(typeof SplitFields$ === "object");
assert(typeof SqlAlias$ === "object");
assert(typeof StartBlueprintRunRequest$ === "object");
assert(typeof StartBlueprintRunResponse$ === "object");
assert(typeof StartColumnStatisticsTaskRunRequest$ === "object");
assert(typeof StartColumnStatisticsTaskRunResponse$ === "object");
assert(typeof StartColumnStatisticsTaskRunScheduleRequest$ === "object");
assert(typeof StartColumnStatisticsTaskRunScheduleResponse$ === "object");
assert(typeof StartCrawlerRequest$ === "object");
assert(typeof StartCrawlerResponse$ === "object");
assert(typeof StartCrawlerScheduleRequest$ === "object");
assert(typeof StartCrawlerScheduleResponse$ === "object");
assert(typeof StartDataQualityRuleRecommendationRunRequest$ === "object");
assert(typeof StartDataQualityRuleRecommendationRunResponse$ === "object");
assert(typeof StartDataQualityRulesetEvaluationRunRequest$ === "object");
assert(typeof StartDataQualityRulesetEvaluationRunResponse$ === "object");
assert(typeof StartExportLabelsTaskRunRequest$ === "object");
assert(typeof StartExportLabelsTaskRunResponse$ === "object");
assert(typeof StartImportLabelsTaskRunRequest$ === "object");
assert(typeof StartImportLabelsTaskRunResponse$ === "object");
assert(typeof StartingEventBatchCondition$ === "object");
assert(typeof StartJobRunRequest$ === "object");
assert(typeof StartJobRunResponse$ === "object");
assert(typeof StartMLEvaluationTaskRunRequest$ === "object");
assert(typeof StartMLEvaluationTaskRunResponse$ === "object");
assert(typeof StartMLLabelingSetGenerationTaskRunRequest$ === "object");
assert(typeof StartMLLabelingSetGenerationTaskRunResponse$ === "object");
assert(typeof StartTriggerRequest$ === "object");
assert(typeof StartTriggerResponse$ === "object");
assert(typeof StartWorkflowRunRequest$ === "object");
assert(typeof StartWorkflowRunResponse$ === "object");
assert(typeof Statement$ === "object");
assert(typeof StatementOutput$ === "object");
assert(typeof StatementOutputData$ === "object");
assert(typeof StatisticAnnotation$ === "object");
assert(typeof StatisticModelResult$ === "object");
assert(typeof StatisticSummary$ === "object");
assert(typeof StatusDetails$ === "object");
assert(typeof StopColumnStatisticsTaskRunRequest$ === "object");
assert(typeof StopColumnStatisticsTaskRunResponse$ === "object");
assert(typeof StopColumnStatisticsTaskRunScheduleRequest$ === "object");
assert(typeof StopColumnStatisticsTaskRunScheduleResponse$ === "object");
assert(typeof StopCrawlerRequest$ === "object");
assert(typeof StopCrawlerResponse$ === "object");
assert(typeof StopCrawlerScheduleRequest$ === "object");
assert(typeof StopCrawlerScheduleResponse$ === "object");
assert(typeof StopSessionRequest$ === "object");
assert(typeof StopSessionResponse$ === "object");
assert(typeof StopTriggerRequest$ === "object");
assert(typeof StopTriggerResponse$ === "object");
assert(typeof StopWorkflowRunRequest$ === "object");
assert(typeof StopWorkflowRunResponse$ === "object");
assert(typeof StorageDescriptor$ === "object");
assert(typeof StreamingDataPreviewOptions$ === "object");
assert(typeof StringColumnStatisticsData$ === "object");
assert(typeof SupportedDialect$ === "object");
assert(typeof Table$ === "object");
assert(typeof TableError$ === "object");
assert(typeof TableIdentifier$ === "object");
assert(typeof TableInput$ === "object");
assert(typeof TableOptimizer$ === "object");
assert(typeof TableOptimizerConfiguration$ === "object");
assert(typeof TableOptimizerRun$ === "object");
assert(typeof TableOptimizerVpcConfiguration$ === "object");
assert(typeof TableStatus$ === "object");
assert(typeof TableVersion$ === "object");
assert(typeof TableVersionError$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TargetProcessingProperties$ === "object");
assert(typeof TargetRedshiftCatalog$ === "object");
assert(typeof TargetTableConfig$ === "object");
assert(typeof TaskRun$ === "object");
assert(typeof TaskRunFilterCriteria$ === "object");
assert(typeof TaskRunProperties$ === "object");
assert(typeof TaskRunSortCriteria$ === "object");
assert(typeof TestConnectionInput$ === "object");
assert(typeof TestConnectionRequest$ === "object");
assert(typeof TestConnectionResponse$ === "object");
assert(typeof TimestampedInclusionAnnotation$ === "object");
assert(typeof TimestampFilter$ === "object");
assert(typeof TransformConfigParameter$ === "object");
assert(typeof TransformEncryption$ === "object");
assert(typeof TransformFilterCriteria$ === "object");
assert(typeof TransformParameters$ === "object");
assert(typeof TransformSortCriteria$ === "object");
assert(typeof Trigger$ === "object");
assert(typeof TriggerNodeDetails$ === "object");
assert(typeof TriggerUpdate$ === "object");
assert(typeof UnfilteredPartition$ === "object");
assert(typeof Union$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateBlueprintRequest$ === "object");
assert(typeof UpdateBlueprintResponse$ === "object");
assert(typeof UpdateCatalogRequest$ === "object");
assert(typeof UpdateCatalogResponse$ === "object");
assert(typeof UpdateClassifierRequest$ === "object");
assert(typeof UpdateClassifierResponse$ === "object");
assert(typeof UpdateColumnStatisticsForPartitionRequest$ === "object");
assert(typeof UpdateColumnStatisticsForPartitionResponse$ === "object");
assert(typeof UpdateColumnStatisticsForTableRequest$ === "object");
assert(typeof UpdateColumnStatisticsForTableResponse$ === "object");
assert(typeof UpdateColumnStatisticsTaskSettingsRequest$ === "object");
assert(typeof UpdateColumnStatisticsTaskSettingsResponse$ === "object");
assert(typeof UpdateConnectionRequest$ === "object");
assert(typeof UpdateConnectionResponse$ === "object");
assert(typeof UpdateCrawlerRequest$ === "object");
assert(typeof UpdateCrawlerResponse$ === "object");
assert(typeof UpdateCrawlerScheduleRequest$ === "object");
assert(typeof UpdateCrawlerScheduleResponse$ === "object");
assert(typeof UpdateCsvClassifierRequest$ === "object");
assert(typeof UpdateDatabaseRequest$ === "object");
assert(typeof UpdateDatabaseResponse$ === "object");
assert(typeof UpdateDataQualityRulesetRequest$ === "object");
assert(typeof UpdateDataQualityRulesetResponse$ === "object");
assert(typeof UpdateDevEndpointRequest$ === "object");
assert(typeof UpdateDevEndpointResponse$ === "object");
assert(typeof UpdateGlueIdentityCenterConfigurationRequest$ === "object");
assert(typeof UpdateGlueIdentityCenterConfigurationResponse$ === "object");
assert(typeof UpdateGrokClassifierRequest$ === "object");
assert(typeof UpdateIcebergInput$ === "object");
assert(typeof UpdateIcebergTableInput$ === "object");
assert(typeof UpdateIntegrationResourcePropertyRequest$ === "object");
assert(typeof UpdateIntegrationResourcePropertyResponse$ === "object");
assert(typeof UpdateIntegrationTablePropertiesRequest$ === "object");
assert(typeof UpdateIntegrationTablePropertiesResponse$ === "object");
assert(typeof UpdateJobFromSourceControlRequest$ === "object");
assert(typeof UpdateJobFromSourceControlResponse$ === "object");
assert(typeof UpdateJobRequest$ === "object");
assert(typeof UpdateJobResponse$ === "object");
assert(typeof UpdateJsonClassifierRequest$ === "object");
assert(typeof UpdateMLTransformRequest$ === "object");
assert(typeof UpdateMLTransformResponse$ === "object");
assert(typeof UpdateOpenTableFormatInput$ === "object");
assert(typeof UpdatePartitionRequest$ === "object");
assert(typeof UpdatePartitionResponse$ === "object");
assert(typeof UpdateRegistryInput$ === "object");
assert(typeof UpdateRegistryResponse$ === "object");
assert(typeof UpdateSchemaInput$ === "object");
assert(typeof UpdateSchemaResponse$ === "object");
assert(typeof UpdateSourceControlFromJobRequest$ === "object");
assert(typeof UpdateSourceControlFromJobResponse$ === "object");
assert(typeof UpdateTableOptimizerRequest$ === "object");
assert(typeof UpdateTableOptimizerResponse$ === "object");
assert(typeof UpdateTableRequest$ === "object");
assert(typeof UpdateTableResponse$ === "object");
assert(typeof UpdateTriggerRequest$ === "object");
assert(typeof UpdateTriggerResponse$ === "object");
assert(typeof UpdateUsageProfileRequest$ === "object");
assert(typeof UpdateUsageProfileResponse$ === "object");
assert(typeof UpdateUserDefinedFunctionRequest$ === "object");
assert(typeof UpdateUserDefinedFunctionResponse$ === "object");
assert(typeof UpdateWorkflowRequest$ === "object");
assert(typeof UpdateWorkflowResponse$ === "object");
assert(typeof UpdateXMLClassifierRequest$ === "object");
assert(typeof UpsertRedshiftTargetOptions$ === "object");
assert(typeof UsageProfileDefinition$ === "object");
assert(typeof UserDefinedFunction$ === "object");
assert(typeof UserDefinedFunctionInput$ === "object");
assert(typeof ViewDefinition$ === "object");
assert(typeof ViewDefinitionInput$ === "object");
assert(typeof ViewRepresentation$ === "object");
assert(typeof ViewRepresentationInput$ === "object");
assert(typeof ViewValidation$ === "object");
assert(typeof Workflow$ === "object");
assert(typeof WorkflowGraph$ === "object");
assert(typeof WorkflowRun$ === "object");
assert(typeof WorkflowRunStatistics$ === "object");
assert(typeof XMLClassifier$ === "object");
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
assert(typeof AccessDeniedException$ === "object");
assert(AlreadyExistsException.prototype instanceof GlueServiceException);
assert(typeof AlreadyExistsException$ === "object");
assert(ColumnStatisticsTaskNotRunningException.prototype instanceof GlueServiceException);
assert(typeof ColumnStatisticsTaskNotRunningException$ === "object");
assert(ColumnStatisticsTaskRunningException.prototype instanceof GlueServiceException);
assert(typeof ColumnStatisticsTaskRunningException$ === "object");
assert(ColumnStatisticsTaskStoppingException.prototype instanceof GlueServiceException);
assert(typeof ColumnStatisticsTaskStoppingException$ === "object");
assert(ConcurrentModificationException.prototype instanceof GlueServiceException);
assert(typeof ConcurrentModificationException$ === "object");
assert(ConcurrentRunsExceededException.prototype instanceof GlueServiceException);
assert(typeof ConcurrentRunsExceededException$ === "object");
assert(ConditionCheckFailureException.prototype instanceof GlueServiceException);
assert(typeof ConditionCheckFailureException$ === "object");
assert(ConflictException.prototype instanceof GlueServiceException);
assert(typeof ConflictException$ === "object");
assert(CrawlerNotRunningException.prototype instanceof GlueServiceException);
assert(typeof CrawlerNotRunningException$ === "object");
assert(CrawlerRunningException.prototype instanceof GlueServiceException);
assert(typeof CrawlerRunningException$ === "object");
assert(CrawlerStoppingException.prototype instanceof GlueServiceException);
assert(typeof CrawlerStoppingException$ === "object");
assert(EntityNotFoundException.prototype instanceof GlueServiceException);
assert(typeof EntityNotFoundException$ === "object");
assert(FederatedResourceAlreadyExistsException.prototype instanceof GlueServiceException);
assert(typeof FederatedResourceAlreadyExistsException$ === "object");
assert(FederationSourceException.prototype instanceof GlueServiceException);
assert(typeof FederationSourceException$ === "object");
assert(FederationSourceRetryableException.prototype instanceof GlueServiceException);
assert(typeof FederationSourceRetryableException$ === "object");
assert(GlueEncryptionException.prototype instanceof GlueServiceException);
assert(typeof GlueEncryptionException$ === "object");
assert(IdempotentParameterMismatchException.prototype instanceof GlueServiceException);
assert(typeof IdempotentParameterMismatchException$ === "object");
assert(IllegalBlueprintStateException.prototype instanceof GlueServiceException);
assert(typeof IllegalBlueprintStateException$ === "object");
assert(IllegalSessionStateException.prototype instanceof GlueServiceException);
assert(typeof IllegalSessionStateException$ === "object");
assert(IllegalWorkflowStateException.prototype instanceof GlueServiceException);
assert(typeof IllegalWorkflowStateException$ === "object");
assert(IntegrationConflictOperationFault.prototype instanceof GlueServiceException);
assert(typeof IntegrationConflictOperationFault$ === "object");
assert(IntegrationNotFoundFault.prototype instanceof GlueServiceException);
assert(typeof IntegrationNotFoundFault$ === "object");
assert(IntegrationQuotaExceededFault.prototype instanceof GlueServiceException);
assert(typeof IntegrationQuotaExceededFault$ === "object");
assert(InternalServerException.prototype instanceof GlueServiceException);
assert(typeof InternalServerException$ === "object");
assert(InternalServiceException.prototype instanceof GlueServiceException);
assert(typeof InternalServiceException$ === "object");
assert(InvalidInputException.prototype instanceof GlueServiceException);
assert(typeof InvalidInputException$ === "object");
assert(InvalidIntegrationStateFault.prototype instanceof GlueServiceException);
assert(typeof InvalidIntegrationStateFault$ === "object");
assert(InvalidStateException.prototype instanceof GlueServiceException);
assert(typeof InvalidStateException$ === "object");
assert(KMSKeyNotAccessibleFault.prototype instanceof GlueServiceException);
assert(typeof KMSKeyNotAccessibleFault$ === "object");
assert(MLTransformNotReadyException.prototype instanceof GlueServiceException);
assert(typeof MLTransformNotReadyException$ === "object");
assert(NoScheduleException.prototype instanceof GlueServiceException);
assert(typeof NoScheduleException$ === "object");
assert(OperationNotSupportedException.prototype instanceof GlueServiceException);
assert(typeof OperationNotSupportedException$ === "object");
assert(OperationTimeoutException.prototype instanceof GlueServiceException);
assert(typeof OperationTimeoutException$ === "object");
assert(PermissionTypeMismatchException.prototype instanceof GlueServiceException);
assert(typeof PermissionTypeMismatchException$ === "object");
assert(ResourceNotFoundException.prototype instanceof GlueServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ResourceNotReadyException.prototype instanceof GlueServiceException);
assert(typeof ResourceNotReadyException$ === "object");
assert(ResourceNumberLimitExceededException.prototype instanceof GlueServiceException);
assert(typeof ResourceNumberLimitExceededException$ === "object");
assert(SchedulerNotRunningException.prototype instanceof GlueServiceException);
assert(typeof SchedulerNotRunningException$ === "object");
assert(SchedulerRunningException.prototype instanceof GlueServiceException);
assert(typeof SchedulerRunningException$ === "object");
assert(SchedulerTransitioningException.prototype instanceof GlueServiceException);
assert(typeof SchedulerTransitioningException$ === "object");
assert(TargetResourceNotFound.prototype instanceof GlueServiceException);
assert(typeof TargetResourceNotFound$ === "object");
assert(ThrottlingException.prototype instanceof GlueServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof GlueServiceException);
assert(typeof ValidationException$ === "object");
assert(VersionMismatchException.prototype instanceof GlueServiceException);
assert(typeof VersionMismatchException$ === "object");
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
