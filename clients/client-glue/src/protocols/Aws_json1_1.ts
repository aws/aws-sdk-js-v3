// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  BatchCreatePartitionCommandInput,
  BatchCreatePartitionCommandOutput,
} from "../commands/BatchCreatePartitionCommand";
import {
  BatchDeleteConnectionCommandInput,
  BatchDeleteConnectionCommandOutput,
} from "../commands/BatchDeleteConnectionCommand";
import {
  BatchDeletePartitionCommandInput,
  BatchDeletePartitionCommandOutput,
} from "../commands/BatchDeletePartitionCommand";
import { BatchDeleteTableCommandInput, BatchDeleteTableCommandOutput } from "../commands/BatchDeleteTableCommand";
import {
  BatchDeleteTableVersionCommandInput,
  BatchDeleteTableVersionCommandOutput,
} from "../commands/BatchDeleteTableVersionCommand";
import { BatchGetBlueprintsCommandInput, BatchGetBlueprintsCommandOutput } from "../commands/BatchGetBlueprintsCommand";
import { BatchGetCrawlersCommandInput, BatchGetCrawlersCommandOutput } from "../commands/BatchGetCrawlersCommand";
import {
  BatchGetCustomEntityTypesCommandInput,
  BatchGetCustomEntityTypesCommandOutput,
} from "../commands/BatchGetCustomEntityTypesCommand";
import {
  BatchGetDataQualityResultCommandInput,
  BatchGetDataQualityResultCommandOutput,
} from "../commands/BatchGetDataQualityResultCommand";
import {
  BatchGetDevEndpointsCommandInput,
  BatchGetDevEndpointsCommandOutput,
} from "../commands/BatchGetDevEndpointsCommand";
import { BatchGetJobsCommandInput, BatchGetJobsCommandOutput } from "../commands/BatchGetJobsCommand";
import { BatchGetPartitionCommandInput, BatchGetPartitionCommandOutput } from "../commands/BatchGetPartitionCommand";
import { BatchGetTriggersCommandInput, BatchGetTriggersCommandOutput } from "../commands/BatchGetTriggersCommand";
import { BatchGetWorkflowsCommandInput, BatchGetWorkflowsCommandOutput } from "../commands/BatchGetWorkflowsCommand";
import { BatchStopJobRunCommandInput, BatchStopJobRunCommandOutput } from "../commands/BatchStopJobRunCommand";
import {
  BatchUpdatePartitionCommandInput,
  BatchUpdatePartitionCommandOutput,
} from "../commands/BatchUpdatePartitionCommand";
import {
  CancelDataQualityRuleRecommendationRunCommandInput,
  CancelDataQualityRuleRecommendationRunCommandOutput,
} from "../commands/CancelDataQualityRuleRecommendationRunCommand";
import {
  CancelDataQualityRulesetEvaluationRunCommandInput,
  CancelDataQualityRulesetEvaluationRunCommandOutput,
} from "../commands/CancelDataQualityRulesetEvaluationRunCommand";
import { CancelMLTaskRunCommandInput, CancelMLTaskRunCommandOutput } from "../commands/CancelMLTaskRunCommand";
import { CancelStatementCommandInput, CancelStatementCommandOutput } from "../commands/CancelStatementCommand";
import {
  CheckSchemaVersionValidityCommandInput,
  CheckSchemaVersionValidityCommandOutput,
} from "../commands/CheckSchemaVersionValidityCommand";
import { CreateBlueprintCommandInput, CreateBlueprintCommandOutput } from "../commands/CreateBlueprintCommand";
import { CreateClassifierCommandInput, CreateClassifierCommandOutput } from "../commands/CreateClassifierCommand";
import { CreateConnectionCommandInput, CreateConnectionCommandOutput } from "../commands/CreateConnectionCommand";
import { CreateCrawlerCommandInput, CreateCrawlerCommandOutput } from "../commands/CreateCrawlerCommand";
import {
  CreateCustomEntityTypeCommandInput,
  CreateCustomEntityTypeCommandOutput,
} from "../commands/CreateCustomEntityTypeCommand";
import { CreateDatabaseCommandInput, CreateDatabaseCommandOutput } from "../commands/CreateDatabaseCommand";
import {
  CreateDataQualityRulesetCommandInput,
  CreateDataQualityRulesetCommandOutput,
} from "../commands/CreateDataQualityRulesetCommand";
import { CreateDevEndpointCommandInput, CreateDevEndpointCommandOutput } from "../commands/CreateDevEndpointCommand";
import { CreateJobCommandInput, CreateJobCommandOutput } from "../commands/CreateJobCommand";
import { CreateMLTransformCommandInput, CreateMLTransformCommandOutput } from "../commands/CreateMLTransformCommand";
import { CreatePartitionCommandInput, CreatePartitionCommandOutput } from "../commands/CreatePartitionCommand";
import {
  CreatePartitionIndexCommandInput,
  CreatePartitionIndexCommandOutput,
} from "../commands/CreatePartitionIndexCommand";
import { CreateRegistryCommandInput, CreateRegistryCommandOutput } from "../commands/CreateRegistryCommand";
import { CreateSchemaCommandInput, CreateSchemaCommandOutput } from "../commands/CreateSchemaCommand";
import { CreateScriptCommandInput, CreateScriptCommandOutput } from "../commands/CreateScriptCommand";
import {
  CreateSecurityConfigurationCommandInput,
  CreateSecurityConfigurationCommandOutput,
} from "../commands/CreateSecurityConfigurationCommand";
import { CreateSessionCommandInput, CreateSessionCommandOutput } from "../commands/CreateSessionCommand";
import { CreateTableCommandInput, CreateTableCommandOutput } from "../commands/CreateTableCommand";
import { CreateTriggerCommandInput, CreateTriggerCommandOutput } from "../commands/CreateTriggerCommand";
import {
  CreateUserDefinedFunctionCommandInput,
  CreateUserDefinedFunctionCommandOutput,
} from "../commands/CreateUserDefinedFunctionCommand";
import { CreateWorkflowCommandInput, CreateWorkflowCommandOutput } from "../commands/CreateWorkflowCommand";
import { DeleteBlueprintCommandInput, DeleteBlueprintCommandOutput } from "../commands/DeleteBlueprintCommand";
import { DeleteClassifierCommandInput, DeleteClassifierCommandOutput } from "../commands/DeleteClassifierCommand";
import {
  DeleteColumnStatisticsForPartitionCommandInput,
  DeleteColumnStatisticsForPartitionCommandOutput,
} from "../commands/DeleteColumnStatisticsForPartitionCommand";
import {
  DeleteColumnStatisticsForTableCommandInput,
  DeleteColumnStatisticsForTableCommandOutput,
} from "../commands/DeleteColumnStatisticsForTableCommand";
import { DeleteConnectionCommandInput, DeleteConnectionCommandOutput } from "../commands/DeleteConnectionCommand";
import { DeleteCrawlerCommandInput, DeleteCrawlerCommandOutput } from "../commands/DeleteCrawlerCommand";
import {
  DeleteCustomEntityTypeCommandInput,
  DeleteCustomEntityTypeCommandOutput,
} from "../commands/DeleteCustomEntityTypeCommand";
import { DeleteDatabaseCommandInput, DeleteDatabaseCommandOutput } from "../commands/DeleteDatabaseCommand";
import {
  DeleteDataQualityRulesetCommandInput,
  DeleteDataQualityRulesetCommandOutput,
} from "../commands/DeleteDataQualityRulesetCommand";
import { DeleteDevEndpointCommandInput, DeleteDevEndpointCommandOutput } from "../commands/DeleteDevEndpointCommand";
import { DeleteJobCommandInput, DeleteJobCommandOutput } from "../commands/DeleteJobCommand";
import { DeleteMLTransformCommandInput, DeleteMLTransformCommandOutput } from "../commands/DeleteMLTransformCommand";
import { DeletePartitionCommandInput, DeletePartitionCommandOutput } from "../commands/DeletePartitionCommand";
import {
  DeletePartitionIndexCommandInput,
  DeletePartitionIndexCommandOutput,
} from "../commands/DeletePartitionIndexCommand";
import { DeleteRegistryCommandInput, DeleteRegistryCommandOutput } from "../commands/DeleteRegistryCommand";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "../commands/DeleteResourcePolicyCommand";
import { DeleteSchemaCommandInput, DeleteSchemaCommandOutput } from "../commands/DeleteSchemaCommand";
import {
  DeleteSchemaVersionsCommandInput,
  DeleteSchemaVersionsCommandOutput,
} from "../commands/DeleteSchemaVersionsCommand";
import {
  DeleteSecurityConfigurationCommandInput,
  DeleteSecurityConfigurationCommandOutput,
} from "../commands/DeleteSecurityConfigurationCommand";
import { DeleteSessionCommandInput, DeleteSessionCommandOutput } from "../commands/DeleteSessionCommand";
import { DeleteTableCommandInput, DeleteTableCommandOutput } from "../commands/DeleteTableCommand";
import { DeleteTableVersionCommandInput, DeleteTableVersionCommandOutput } from "../commands/DeleteTableVersionCommand";
import { DeleteTriggerCommandInput, DeleteTriggerCommandOutput } from "../commands/DeleteTriggerCommand";
import {
  DeleteUserDefinedFunctionCommandInput,
  DeleteUserDefinedFunctionCommandOutput,
} from "../commands/DeleteUserDefinedFunctionCommand";
import { DeleteWorkflowCommandInput, DeleteWorkflowCommandOutput } from "../commands/DeleteWorkflowCommand";
import { GetBlueprintCommandInput, GetBlueprintCommandOutput } from "../commands/GetBlueprintCommand";
import { GetBlueprintRunCommandInput, GetBlueprintRunCommandOutput } from "../commands/GetBlueprintRunCommand";
import { GetBlueprintRunsCommandInput, GetBlueprintRunsCommandOutput } from "../commands/GetBlueprintRunsCommand";
import {
  GetCatalogImportStatusCommandInput,
  GetCatalogImportStatusCommandOutput,
} from "../commands/GetCatalogImportStatusCommand";
import { GetClassifierCommandInput, GetClassifierCommandOutput } from "../commands/GetClassifierCommand";
import { GetClassifiersCommandInput, GetClassifiersCommandOutput } from "../commands/GetClassifiersCommand";
import {
  GetColumnStatisticsForPartitionCommandInput,
  GetColumnStatisticsForPartitionCommandOutput,
} from "../commands/GetColumnStatisticsForPartitionCommand";
import {
  GetColumnStatisticsForTableCommandInput,
  GetColumnStatisticsForTableCommandOutput,
} from "../commands/GetColumnStatisticsForTableCommand";
import { GetConnectionCommandInput, GetConnectionCommandOutput } from "../commands/GetConnectionCommand";
import { GetConnectionsCommandInput, GetConnectionsCommandOutput } from "../commands/GetConnectionsCommand";
import { GetCrawlerCommandInput, GetCrawlerCommandOutput } from "../commands/GetCrawlerCommand";
import { GetCrawlerMetricsCommandInput, GetCrawlerMetricsCommandOutput } from "../commands/GetCrawlerMetricsCommand";
import { GetCrawlersCommandInput, GetCrawlersCommandOutput } from "../commands/GetCrawlersCommand";
import {
  GetCustomEntityTypeCommandInput,
  GetCustomEntityTypeCommandOutput,
} from "../commands/GetCustomEntityTypeCommand";
import { GetDatabaseCommandInput, GetDatabaseCommandOutput } from "../commands/GetDatabaseCommand";
import { GetDatabasesCommandInput, GetDatabasesCommandOutput } from "../commands/GetDatabasesCommand";
import {
  GetDataCatalogEncryptionSettingsCommandInput,
  GetDataCatalogEncryptionSettingsCommandOutput,
} from "../commands/GetDataCatalogEncryptionSettingsCommand";
import { GetDataflowGraphCommandInput, GetDataflowGraphCommandOutput } from "../commands/GetDataflowGraphCommand";
import {
  GetDataQualityResultCommandInput,
  GetDataQualityResultCommandOutput,
} from "../commands/GetDataQualityResultCommand";
import {
  GetDataQualityRuleRecommendationRunCommandInput,
  GetDataQualityRuleRecommendationRunCommandOutput,
} from "../commands/GetDataQualityRuleRecommendationRunCommand";
import {
  GetDataQualityRulesetCommandInput,
  GetDataQualityRulesetCommandOutput,
} from "../commands/GetDataQualityRulesetCommand";
import {
  GetDataQualityRulesetEvaluationRunCommandInput,
  GetDataQualityRulesetEvaluationRunCommandOutput,
} from "../commands/GetDataQualityRulesetEvaluationRunCommand";
import { GetDevEndpointCommandInput, GetDevEndpointCommandOutput } from "../commands/GetDevEndpointCommand";
import { GetDevEndpointsCommandInput, GetDevEndpointsCommandOutput } from "../commands/GetDevEndpointsCommand";
import { GetJobBookmarkCommandInput, GetJobBookmarkCommandOutput } from "../commands/GetJobBookmarkCommand";
import { GetJobCommandInput, GetJobCommandOutput } from "../commands/GetJobCommand";
import { GetJobRunCommandInput, GetJobRunCommandOutput } from "../commands/GetJobRunCommand";
import { GetJobRunsCommandInput, GetJobRunsCommandOutput } from "../commands/GetJobRunsCommand";
import { GetJobsCommandInput, GetJobsCommandOutput } from "../commands/GetJobsCommand";
import { GetMappingCommandInput, GetMappingCommandOutput } from "../commands/GetMappingCommand";
import { GetMLTaskRunCommandInput, GetMLTaskRunCommandOutput } from "../commands/GetMLTaskRunCommand";
import { GetMLTaskRunsCommandInput, GetMLTaskRunsCommandOutput } from "../commands/GetMLTaskRunsCommand";
import { GetMLTransformCommandInput, GetMLTransformCommandOutput } from "../commands/GetMLTransformCommand";
import { GetMLTransformsCommandInput, GetMLTransformsCommandOutput } from "../commands/GetMLTransformsCommand";
import { GetPartitionCommandInput, GetPartitionCommandOutput } from "../commands/GetPartitionCommand";
import {
  GetPartitionIndexesCommandInput,
  GetPartitionIndexesCommandOutput,
} from "../commands/GetPartitionIndexesCommand";
import { GetPartitionsCommandInput, GetPartitionsCommandOutput } from "../commands/GetPartitionsCommand";
import { GetPlanCommandInput, GetPlanCommandOutput } from "../commands/GetPlanCommand";
import { GetRegistryCommandInput, GetRegistryCommandOutput } from "../commands/GetRegistryCommand";
import {
  GetResourcePoliciesCommandInput,
  GetResourcePoliciesCommandOutput,
} from "../commands/GetResourcePoliciesCommand";
import { GetResourcePolicyCommandInput, GetResourcePolicyCommandOutput } from "../commands/GetResourcePolicyCommand";
import {
  GetSchemaByDefinitionCommandInput,
  GetSchemaByDefinitionCommandOutput,
} from "../commands/GetSchemaByDefinitionCommand";
import { GetSchemaCommandInput, GetSchemaCommandOutput } from "../commands/GetSchemaCommand";
import { GetSchemaVersionCommandInput, GetSchemaVersionCommandOutput } from "../commands/GetSchemaVersionCommand";
import {
  GetSchemaVersionsDiffCommandInput,
  GetSchemaVersionsDiffCommandOutput,
} from "../commands/GetSchemaVersionsDiffCommand";
import {
  GetSecurityConfigurationCommandInput,
  GetSecurityConfigurationCommandOutput,
} from "../commands/GetSecurityConfigurationCommand";
import {
  GetSecurityConfigurationsCommandInput,
  GetSecurityConfigurationsCommandOutput,
} from "../commands/GetSecurityConfigurationsCommand";
import { GetSessionCommandInput, GetSessionCommandOutput } from "../commands/GetSessionCommand";
import { GetStatementCommandInput, GetStatementCommandOutput } from "../commands/GetStatementCommand";
import { GetTableCommandInput, GetTableCommandOutput } from "../commands/GetTableCommand";
import { GetTablesCommandInput, GetTablesCommandOutput } from "../commands/GetTablesCommand";
import { GetTableVersionCommandInput, GetTableVersionCommandOutput } from "../commands/GetTableVersionCommand";
import { GetTableVersionsCommandInput, GetTableVersionsCommandOutput } from "../commands/GetTableVersionsCommand";
import { GetTagsCommandInput, GetTagsCommandOutput } from "../commands/GetTagsCommand";
import { GetTriggerCommandInput, GetTriggerCommandOutput } from "../commands/GetTriggerCommand";
import { GetTriggersCommandInput, GetTriggersCommandOutput } from "../commands/GetTriggersCommand";
import {
  GetUnfilteredPartitionMetadataCommandInput,
  GetUnfilteredPartitionMetadataCommandOutput,
} from "../commands/GetUnfilteredPartitionMetadataCommand";
import {
  GetUnfilteredPartitionsMetadataCommandInput,
  GetUnfilteredPartitionsMetadataCommandOutput,
} from "../commands/GetUnfilteredPartitionsMetadataCommand";
import {
  GetUnfilteredTableMetadataCommandInput,
  GetUnfilteredTableMetadataCommandOutput,
} from "../commands/GetUnfilteredTableMetadataCommand";
import {
  GetUserDefinedFunctionCommandInput,
  GetUserDefinedFunctionCommandOutput,
} from "../commands/GetUserDefinedFunctionCommand";
import {
  GetUserDefinedFunctionsCommandInput,
  GetUserDefinedFunctionsCommandOutput,
} from "../commands/GetUserDefinedFunctionsCommand";
import { GetWorkflowCommandInput, GetWorkflowCommandOutput } from "../commands/GetWorkflowCommand";
import { GetWorkflowRunCommandInput, GetWorkflowRunCommandOutput } from "../commands/GetWorkflowRunCommand";
import {
  GetWorkflowRunPropertiesCommandInput,
  GetWorkflowRunPropertiesCommandOutput,
} from "../commands/GetWorkflowRunPropertiesCommand";
import { GetWorkflowRunsCommandInput, GetWorkflowRunsCommandOutput } from "../commands/GetWorkflowRunsCommand";
import {
  ImportCatalogToGlueCommandInput,
  ImportCatalogToGlueCommandOutput,
} from "../commands/ImportCatalogToGlueCommand";
import { ListBlueprintsCommandInput, ListBlueprintsCommandOutput } from "../commands/ListBlueprintsCommand";
import { ListCrawlersCommandInput, ListCrawlersCommandOutput } from "../commands/ListCrawlersCommand";
import { ListCrawlsCommandInput, ListCrawlsCommandOutput } from "../commands/ListCrawlsCommand";
import {
  ListCustomEntityTypesCommandInput,
  ListCustomEntityTypesCommandOutput,
} from "../commands/ListCustomEntityTypesCommand";
import {
  ListDataQualityResultsCommandInput,
  ListDataQualityResultsCommandOutput,
} from "../commands/ListDataQualityResultsCommand";
import {
  ListDataQualityRuleRecommendationRunsCommandInput,
  ListDataQualityRuleRecommendationRunsCommandOutput,
} from "../commands/ListDataQualityRuleRecommendationRunsCommand";
import {
  ListDataQualityRulesetEvaluationRunsCommandInput,
  ListDataQualityRulesetEvaluationRunsCommandOutput,
} from "../commands/ListDataQualityRulesetEvaluationRunsCommand";
import {
  ListDataQualityRulesetsCommandInput,
  ListDataQualityRulesetsCommandOutput,
} from "../commands/ListDataQualityRulesetsCommand";
import { ListDevEndpointsCommandInput, ListDevEndpointsCommandOutput } from "../commands/ListDevEndpointsCommand";
import { ListJobsCommandInput, ListJobsCommandOutput } from "../commands/ListJobsCommand";
import { ListMLTransformsCommandInput, ListMLTransformsCommandOutput } from "../commands/ListMLTransformsCommand";
import { ListRegistriesCommandInput, ListRegistriesCommandOutput } from "../commands/ListRegistriesCommand";
import { ListSchemasCommandInput, ListSchemasCommandOutput } from "../commands/ListSchemasCommand";
import { ListSchemaVersionsCommandInput, ListSchemaVersionsCommandOutput } from "../commands/ListSchemaVersionsCommand";
import { ListSessionsCommandInput, ListSessionsCommandOutput } from "../commands/ListSessionsCommand";
import { ListStatementsCommandInput, ListStatementsCommandOutput } from "../commands/ListStatementsCommand";
import { ListTriggersCommandInput, ListTriggersCommandOutput } from "../commands/ListTriggersCommand";
import { ListWorkflowsCommandInput, ListWorkflowsCommandOutput } from "../commands/ListWorkflowsCommand";
import {
  PutDataCatalogEncryptionSettingsCommandInput,
  PutDataCatalogEncryptionSettingsCommandOutput,
} from "../commands/PutDataCatalogEncryptionSettingsCommand";
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput } from "../commands/PutResourcePolicyCommand";
import {
  PutSchemaVersionMetadataCommandInput,
  PutSchemaVersionMetadataCommandOutput,
} from "../commands/PutSchemaVersionMetadataCommand";
import {
  PutWorkflowRunPropertiesCommandInput,
  PutWorkflowRunPropertiesCommandOutput,
} from "../commands/PutWorkflowRunPropertiesCommand";
import {
  QuerySchemaVersionMetadataCommandInput,
  QuerySchemaVersionMetadataCommandOutput,
} from "../commands/QuerySchemaVersionMetadataCommand";
import {
  RegisterSchemaVersionCommandInput,
  RegisterSchemaVersionCommandOutput,
} from "../commands/RegisterSchemaVersionCommand";
import {
  RemoveSchemaVersionMetadataCommandInput,
  RemoveSchemaVersionMetadataCommandOutput,
} from "../commands/RemoveSchemaVersionMetadataCommand";
import { ResetJobBookmarkCommandInput, ResetJobBookmarkCommandOutput } from "../commands/ResetJobBookmarkCommand";
import { ResumeWorkflowRunCommandInput, ResumeWorkflowRunCommandOutput } from "../commands/ResumeWorkflowRunCommand";
import { RunStatementCommandInput, RunStatementCommandOutput } from "../commands/RunStatementCommand";
import { SearchTablesCommandInput, SearchTablesCommandOutput } from "../commands/SearchTablesCommand";
import { StartBlueprintRunCommandInput, StartBlueprintRunCommandOutput } from "../commands/StartBlueprintRunCommand";
import { StartCrawlerCommandInput, StartCrawlerCommandOutput } from "../commands/StartCrawlerCommand";
import {
  StartCrawlerScheduleCommandInput,
  StartCrawlerScheduleCommandOutput,
} from "../commands/StartCrawlerScheduleCommand";
import {
  StartDataQualityRuleRecommendationRunCommandInput,
  StartDataQualityRuleRecommendationRunCommandOutput,
} from "../commands/StartDataQualityRuleRecommendationRunCommand";
import {
  StartDataQualityRulesetEvaluationRunCommandInput,
  StartDataQualityRulesetEvaluationRunCommandOutput,
} from "../commands/StartDataQualityRulesetEvaluationRunCommand";
import {
  StartExportLabelsTaskRunCommandInput,
  StartExportLabelsTaskRunCommandOutput,
} from "../commands/StartExportLabelsTaskRunCommand";
import {
  StartImportLabelsTaskRunCommandInput,
  StartImportLabelsTaskRunCommandOutput,
} from "../commands/StartImportLabelsTaskRunCommand";
import { StartJobRunCommandInput, StartJobRunCommandOutput } from "../commands/StartJobRunCommand";
import {
  StartMLEvaluationTaskRunCommandInput,
  StartMLEvaluationTaskRunCommandOutput,
} from "../commands/StartMLEvaluationTaskRunCommand";
import {
  StartMLLabelingSetGenerationTaskRunCommandInput,
  StartMLLabelingSetGenerationTaskRunCommandOutput,
} from "../commands/StartMLLabelingSetGenerationTaskRunCommand";
import { StartTriggerCommandInput, StartTriggerCommandOutput } from "../commands/StartTriggerCommand";
import { StartWorkflowRunCommandInput, StartWorkflowRunCommandOutput } from "../commands/StartWorkflowRunCommand";
import { StopCrawlerCommandInput, StopCrawlerCommandOutput } from "../commands/StopCrawlerCommand";
import {
  StopCrawlerScheduleCommandInput,
  StopCrawlerScheduleCommandOutput,
} from "../commands/StopCrawlerScheduleCommand";
import { StopSessionCommandInput, StopSessionCommandOutput } from "../commands/StopSessionCommand";
import { StopTriggerCommandInput, StopTriggerCommandOutput } from "../commands/StopTriggerCommand";
import { StopWorkflowRunCommandInput, StopWorkflowRunCommandOutput } from "../commands/StopWorkflowRunCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateBlueprintCommandInput, UpdateBlueprintCommandOutput } from "../commands/UpdateBlueprintCommand";
import { UpdateClassifierCommandInput, UpdateClassifierCommandOutput } from "../commands/UpdateClassifierCommand";
import {
  UpdateColumnStatisticsForPartitionCommandInput,
  UpdateColumnStatisticsForPartitionCommandOutput,
} from "../commands/UpdateColumnStatisticsForPartitionCommand";
import {
  UpdateColumnStatisticsForTableCommandInput,
  UpdateColumnStatisticsForTableCommandOutput,
} from "../commands/UpdateColumnStatisticsForTableCommand";
import { UpdateConnectionCommandInput, UpdateConnectionCommandOutput } from "../commands/UpdateConnectionCommand";
import { UpdateCrawlerCommandInput, UpdateCrawlerCommandOutput } from "../commands/UpdateCrawlerCommand";
import {
  UpdateCrawlerScheduleCommandInput,
  UpdateCrawlerScheduleCommandOutput,
} from "../commands/UpdateCrawlerScheduleCommand";
import { UpdateDatabaseCommandInput, UpdateDatabaseCommandOutput } from "../commands/UpdateDatabaseCommand";
import {
  UpdateDataQualityRulesetCommandInput,
  UpdateDataQualityRulesetCommandOutput,
} from "../commands/UpdateDataQualityRulesetCommand";
import { UpdateDevEndpointCommandInput, UpdateDevEndpointCommandOutput } from "../commands/UpdateDevEndpointCommand";
import { UpdateJobCommandInput, UpdateJobCommandOutput } from "../commands/UpdateJobCommand";
import {
  UpdateJobFromSourceControlCommandInput,
  UpdateJobFromSourceControlCommandOutput,
} from "../commands/UpdateJobFromSourceControlCommand";
import { UpdateMLTransformCommandInput, UpdateMLTransformCommandOutput } from "../commands/UpdateMLTransformCommand";
import { UpdatePartitionCommandInput, UpdatePartitionCommandOutput } from "../commands/UpdatePartitionCommand";
import { UpdateRegistryCommandInput, UpdateRegistryCommandOutput } from "../commands/UpdateRegistryCommand";
import { UpdateSchemaCommandInput, UpdateSchemaCommandOutput } from "../commands/UpdateSchemaCommand";
import {
  UpdateSourceControlFromJobCommandInput,
  UpdateSourceControlFromJobCommandOutput,
} from "../commands/UpdateSourceControlFromJobCommand";
import { UpdateTableCommandInput, UpdateTableCommandOutput } from "../commands/UpdateTableCommand";
import { UpdateTriggerCommandInput, UpdateTriggerCommandOutput } from "../commands/UpdateTriggerCommand";
import {
  UpdateUserDefinedFunctionCommandInput,
  UpdateUserDefinedFunctionCommandOutput,
} from "../commands/UpdateUserDefinedFunctionCommand";
import { UpdateWorkflowCommandInput, UpdateWorkflowCommandOutput } from "../commands/UpdateWorkflowCommand";
import { GlueServiceException as __BaseException } from "../models/GlueServiceException";
import {
  AccessDeniedException,
  Action,
  Aggregate,
  AggregateOperation,
  AlreadyExistsException,
  AmazonRedshiftAdvancedOption,
  AmazonRedshiftNodeData,
  AmazonRedshiftSource,
  AmazonRedshiftTarget,
  AthenaConnectorSource,
  AuditContext,
  BasicCatalogTarget,
  BatchCreatePartitionRequest,
  BatchDeleteConnectionRequest,
  BatchDeletePartitionRequest,
  BatchDeleteTableRequest,
  BatchDeleteTableVersionRequest,
  BatchGetBlueprintsRequest,
  BatchGetBlueprintsResponse,
  BatchGetCrawlersRequest,
  BatchGetCrawlersResponse,
  BatchGetCustomEntityTypesRequest,
  BatchGetDataQualityResultRequest,
  BatchGetDataQualityResultResponse,
  BatchGetDevEndpointsRequest,
  BatchGetDevEndpointsResponse,
  BatchGetJobsRequest,
  BatchGetPartitionRequest,
  BatchGetPartitionResponse,
  BatchGetTriggersRequest,
  BatchGetWorkflowsRequest,
  BatchGetWorkflowsResponse,
  BatchStopJobRunRequest,
  BatchUpdatePartitionRequest,
  BatchUpdatePartitionRequestEntry,
  Blueprint,
  CancelDataQualityRuleRecommendationRunRequest,
  CancelDataQualityRulesetEvaluationRunRequest,
  CancelMLTaskRunRequest,
  CancelStatementRequest,
  CatalogDeltaSource,
  CatalogHudiSource,
  CatalogKafkaSource,
  CatalogKinesisSource,
  CatalogSchemaChangePolicy,
  CatalogSource,
  CatalogTarget,
  CheckSchemaVersionValidityInput,
  Column,
  ConcurrentModificationException,
  Condition,
  ConnectionInput,
  ConnectionsList,
  Crawl,
  Crawler,
  CrawlerNodeDetails,
  CrawlerTargets,
  CreateBlueprintRequest,
  CreateClassifierRequest,
  CreateConnectionRequest,
  CreateCrawlerRequest,
  CreateCsvClassifierRequest,
  CreateCustomEntityTypeRequest,
  CreateDatabaseRequest,
  CreateDataQualityRulesetRequest,
  CreateDevEndpointRequest,
  CreateDevEndpointResponse,
  CreateGrokClassifierRequest,
  CreateJsonClassifierRequest,
  CreateXMLClassifierRequest,
  CustomCode,
  DatabaseIdentifier,
  DatabaseInput,
  DataLakePrincipal,
  DataQualityResult,
  DataQualityRuleResult,
  DataQualityTargetTable,
  DataSource,
  Datatype,
  DeltaTarget,
  DevEndpoint,
  DirectJDBCSource,
  DirectKafkaSource,
  DirectKinesisSource,
  DirectSchemaChangePolicy,
  DQResultsPublishingOptions,
  DQStopJobOnFailureOptions,
  DropDuplicates,
  DropFields,
  DropNullFields,
  DynamicTransform,
  DynamoDBCatalogSource,
  DynamoDBTarget,
  EntityNotFoundException,
  EvaluateDataQuality,
  EvaluateDataQualityMultiFrame,
  EventBatchingCondition,
  ExecutionProperty,
  FederatedDatabase,
  FederatedResourceAlreadyExistsException,
  FederationSourceException,
  FederationSourceRetryableException,
  FillMissingValues,
  Filter,
  FilterExpression,
  FilterValue,
  FindMatchesParameters,
  GlueEncryptionException,
  GlueRecordType,
  GlueSchema,
  GlueStudioSchemaColumn,
  GlueTable,
  GovernedCatalogSource,
  GovernedCatalogTarget,
  IcebergTarget,
  IdempotentParameterMismatchException,
  IllegalSessionStateException,
  InternalServiceException,
  InvalidInputException,
  InvalidStateException,
  JDBCConnectorOptions,
  JDBCConnectorSource,
  JDBCConnectorTarget,
  JdbcMetadataEntry,
  JdbcTarget,
  JobCommand,
  JobNodeDetails,
  JobRun,
  Join,
  JoinColumn,
  KafkaStreamingSourceOptions,
  KinesisStreamingSourceOptions,
  LakeFormationConfiguration,
  LastActiveDefinition,
  LastCrawlInfo,
  LineageConfiguration,
  Merge,
  MicrosoftSQLServerCatalogSource,
  MicrosoftSQLServerCatalogTarget,
  MLUserDataEncryption,
  MongoDBTarget,
  MySQLCatalogSource,
  MySQLCatalogTarget,
  Node,
  NotificationProperty,
  NullCheckBoxList,
  NullValueField,
  OperationTimeoutException,
  Option,
  OracleSQLCatalogSource,
  OracleSQLCatalogTarget,
  Order,
  Partition,
  PartitionInput,
  PartitionValueList,
  Permission,
  PhysicalConnectionRequirements,
  PIIDetection,
  PostgreSQLCatalogSource,
  PostgreSQLCatalogTarget,
  Predicate,
  PrincipalPermissions,
  RecrawlPolicy,
  RedshiftSource,
  RedshiftTarget,
  RelationalCatalogSource,
  RenameField,
  ResourceNotReadyException,
  ResourceNumberLimitExceededException,
  S3CatalogDeltaSource,
  S3CatalogHudiSource,
  S3CatalogSource,
  S3CatalogTarget,
  S3CsvSource,
  S3DeltaCatalogTarget,
  S3DeltaDirectTarget,
  S3DeltaSource,
  S3DirectSourceAdditionalOptions,
  S3DirectTarget,
  S3GlueParquetTarget,
  S3HudiCatalogTarget,
  S3HudiDirectTarget,
  S3HudiSource,
  S3JsonSource,
  S3ParquetSource,
  S3SourceAdditionalOptions,
  S3Target,
  SchemaChangePolicy,
  SchemaId,
  SchemaReference,
  SelectFields,
  SelectFromCollection,
  SerDeInfo,
  SkewedInfo,
  SourceControlDetails,
  SparkConnectorSource,
  SparkConnectorTarget,
  SparkSQL,
  Spigot,
  SplitFields,
  SqlAlias,
  StorageDescriptor,
  StreamingDataPreviewOptions,
  TransformConfigParameter,
  TransformParameters,
  Union,
  UpsertRedshiftTargetOptions,
  ValidationException,
  Workflow,
  WorkflowGraph,
  WorkflowRun,
} from "../models/models_0";
import {
  BinaryColumnStatisticsData,
  BlueprintRun,
  BooleanColumnStatisticsData,
  CatalogEntry,
  CatalogImportStatus,
  Classifier,
  CloudWatchEncryption,
  CodeGenEdge,
  CodeGenNode,
  CodeGenNodeArg,
  ColumnImportance,
  ColumnStatistics,
  ColumnStatisticsData,
  ConditionCheckFailureException,
  ConflictException,
  Connection,
  ConnectionPasswordEncryption,
  CrawlerMetrics,
  CrawlerRunningException,
  CreateMLTransformRequest,
  CreatePartitionIndexRequest,
  CreatePartitionRequest,
  CreateRegistryInput,
  CreateSchemaInput,
  CreateScriptRequest,
  CreateSecurityConfigurationRequest,
  CreateSecurityConfigurationResponse,
  CreateSessionRequest,
  CreateSessionResponse,
  CreateTableRequest,
  CreateTriggerRequest,
  CreateUserDefinedFunctionRequest,
  CreateWorkflowRequest,
  CsvClassifier,
  Database,
  DataCatalogEncryptionSettings,
  DataQualityEvaluationRunAdditionalRunOptions,
  DateColumnStatisticsData,
  DecimalColumnStatisticsData,
  DecimalNumber,
  DeleteBlueprintRequest,
  DeleteClassifierRequest,
  DeleteColumnStatisticsForPartitionRequest,
  DeleteColumnStatisticsForTableRequest,
  DeleteConnectionRequest,
  DeleteCrawlerRequest,
  DeleteCustomEntityTypeRequest,
  DeleteDatabaseRequest,
  DeleteDataQualityRulesetRequest,
  DeleteDevEndpointRequest,
  DeleteJobRequest,
  DeleteMLTransformRequest,
  DeletePartitionIndexRequest,
  DeletePartitionRequest,
  DeleteRegistryInput,
  DeleteResourcePolicyRequest,
  DeleteSchemaInput,
  DeleteSchemaVersionsInput,
  DeleteSecurityConfigurationRequest,
  DeleteSessionRequest,
  DeleteTableRequest,
  DeleteTableVersionRequest,
  DeleteTriggerRequest,
  DeleteUserDefinedFunctionRequest,
  DeleteWorkflowRequest,
  DoubleColumnStatisticsData,
  EncryptionAtRest,
  EncryptionConfiguration,
  EvaluationMetrics,
  FindMatchesMetrics,
  GetBlueprintRequest,
  GetBlueprintResponse,
  GetBlueprintRunRequest,
  GetBlueprintRunResponse,
  GetBlueprintRunsRequest,
  GetBlueprintRunsResponse,
  GetCatalogImportStatusRequest,
  GetCatalogImportStatusResponse,
  GetClassifierRequest,
  GetClassifierResponse,
  GetClassifiersRequest,
  GetClassifiersResponse,
  GetColumnStatisticsForPartitionRequest,
  GetColumnStatisticsForPartitionResponse,
  GetColumnStatisticsForTableRequest,
  GetColumnStatisticsForTableResponse,
  GetConnectionRequest,
  GetConnectionResponse,
  GetConnectionsFilter,
  GetConnectionsRequest,
  GetConnectionsResponse,
  GetCrawlerMetricsRequest,
  GetCrawlerMetricsResponse,
  GetCrawlerRequest,
  GetCrawlerResponse,
  GetCrawlersRequest,
  GetCrawlersResponse,
  GetCustomEntityTypeRequest,
  GetDatabaseRequest,
  GetDatabaseResponse,
  GetDatabasesRequest,
  GetDatabasesResponse,
  GetDataCatalogEncryptionSettingsRequest,
  GetDataflowGraphRequest,
  GetDataQualityResultRequest,
  GetDataQualityResultResponse,
  GetDataQualityRuleRecommendationRunRequest,
  GetDataQualityRuleRecommendationRunResponse,
  GetDataQualityRulesetEvaluationRunRequest,
  GetDataQualityRulesetEvaluationRunResponse,
  GetDataQualityRulesetRequest,
  GetDataQualityRulesetResponse,
  GetDevEndpointRequest,
  GetDevEndpointResponse,
  GetDevEndpointsRequest,
  GetDevEndpointsResponse,
  GetJobBookmarkRequest,
  GetJobRequest,
  GetJobRunRequest,
  GetJobRunResponse,
  GetJobRunsRequest,
  GetJobRunsResponse,
  GetJobsRequest,
  GetMappingRequest,
  GetMLTaskRunRequest,
  GetMLTaskRunResponse,
  GetMLTaskRunsRequest,
  GetMLTaskRunsResponse,
  GetMLTransformRequest,
  GetMLTransformResponse,
  GetMLTransformsRequest,
  GetMLTransformsResponse,
  GetPartitionIndexesRequest,
  GetPartitionRequest,
  GetPartitionResponse,
  GetPartitionsRequest,
  GetPartitionsResponse,
  GetPlanRequest,
  GetRegistryInput,
  GetResourcePoliciesRequest,
  GetResourcePoliciesResponse,
  GetResourcePolicyRequest,
  GetResourcePolicyResponse,
  GetSchemaByDefinitionInput,
  GetSchemaInput,
  GetSchemaVersionInput,
  GetSchemaVersionsDiffInput,
  GetSecurityConfigurationRequest,
  GetSecurityConfigurationResponse,
  GetSecurityConfigurationsRequest,
  GetSecurityConfigurationsResponse,
  GetSessionRequest,
  GetSessionResponse,
  GetStatementRequest,
  GetStatementResponse,
  GetTableRequest,
  GetTableResponse,
  GetTablesRequest,
  GetTablesResponse,
  GetTableVersionRequest,
  GetTableVersionResponse,
  GetTableVersionsRequest,
  GetTableVersionsResponse,
  GetTagsRequest,
  GetTriggerRequest,
  GetTriggersRequest,
  GetUnfilteredPartitionMetadataRequest,
  GetUnfilteredPartitionMetadataResponse,
  GetUnfilteredPartitionsMetadataRequest,
  GetUnfilteredPartitionsMetadataResponse,
  GetUnfilteredTableMetadataRequest,
  GluePolicy,
  GrokClassifier,
  IcebergInput,
  JobBookmarksEncryption,
  JsonClassifier,
  Location,
  LongColumnStatisticsData,
  MappingEntry,
  MLTransform,
  OpenTableFormatInput,
  PartitionIndex,
  PermissionType,
  PermissionTypeMismatchException,
  RegistryId,
  ResourceUri,
  S3Encryption,
  SchedulerTransitioningException,
  SchemaColumn,
  SchemaVersionNumber,
  SecurityConfiguration,
  Segment,
  Session,
  SessionCommand,
  Statement,
  StringColumnStatisticsData,
  Table,
  TableIdentifier,
  TableInput,
  TableVersion,
  TaskRun,
  TaskRunFilterCriteria,
  TaskRunSortCriteria,
  TransformEncryption,
  TransformFilterCriteria,
  TransformSortCriteria,
  UnfilteredPartition,
  UserDefinedFunctionInput,
  XMLClassifier,
} from "../models/models_1";
import {
  ApplyMapping,
  BatchGetJobsResponse,
  CodeGenConfigurationNode,
  ColumnStatisticsError,
  ConcurrentRunsExceededException,
  CrawlerHistory,
  CrawlerNotRunningException,
  CrawlerStoppingException,
  CrawlsFilter,
  CreateJobRequest,
  DataQualityResultDescription,
  DataQualityResultFilterCriteria,
  DataQualityRuleRecommendationRunDescription,
  DataQualityRuleRecommendationRunFilter,
  DataQualityRulesetEvaluationRunDescription,
  DataQualityRulesetEvaluationRunFilter,
  DataQualityRulesetFilterCriteria,
  DataQualityRulesetListDetails,
  DevEndpointCustomLibraries,
  GetJobResponse,
  GetJobsResponse,
  GetUnfilteredTableMetadataResponse,
  GetUserDefinedFunctionRequest,
  GetUserDefinedFunctionResponse,
  GetUserDefinedFunctionsRequest,
  GetUserDefinedFunctionsResponse,
  GetWorkflowRequest,
  GetWorkflowResponse,
  GetWorkflowRunPropertiesRequest,
  GetWorkflowRunRequest,
  GetWorkflowRunResponse,
  GetWorkflowRunsRequest,
  GetWorkflowRunsResponse,
  IllegalBlueprintStateException,
  IllegalWorkflowStateException,
  ImportCatalogToGlueRequest,
  Job,
  JobUpdate,
  ListBlueprintsRequest,
  ListCrawlersRequest,
  ListCrawlsRequest,
  ListCrawlsResponse,
  ListCustomEntityTypesRequest,
  ListDataQualityResultsRequest,
  ListDataQualityResultsResponse,
  ListDataQualityRuleRecommendationRunsRequest,
  ListDataQualityRuleRecommendationRunsResponse,
  ListDataQualityRulesetEvaluationRunsRequest,
  ListDataQualityRulesetEvaluationRunsResponse,
  ListDataQualityRulesetsRequest,
  ListDataQualityRulesetsResponse,
  ListDevEndpointsRequest,
  ListJobsRequest,
  ListMLTransformsRequest,
  ListRegistriesInput,
  ListSchemasInput,
  ListSchemaVersionsInput,
  ListSessionsRequest,
  ListSessionsResponse,
  ListStatementsRequest,
  ListStatementsResponse,
  ListTriggersRequest,
  ListWorkflowsRequest,
  Mapping,
  MetadataKeyValuePair,
  MLTransformNotReadyException,
  NoScheduleException,
  PropertyPredicate,
  PutDataCatalogEncryptionSettingsRequest,
  PutResourcePolicyRequest,
  PutSchemaVersionMetadataInput,
  PutWorkflowRunPropertiesRequest,
  QuerySchemaVersionMetadataInput,
  RegisterSchemaVersionInput,
  RemoveSchemaVersionMetadataInput,
  ResetJobBookmarkRequest,
  ResumeWorkflowRunRequest,
  RunStatementRequest,
  SchedulerNotRunningException,
  SchedulerRunningException,
  SearchTablesRequest,
  SearchTablesResponse,
  SortCriterion,
  StartBlueprintRunRequest,
  StartCrawlerRequest,
  StartCrawlerScheduleRequest,
  StartDataQualityRuleRecommendationRunRequest,
  StartDataQualityRulesetEvaluationRunRequest,
  StartExportLabelsTaskRunRequest,
  StartImportLabelsTaskRunRequest,
  StartJobRunRequest,
  StartMLEvaluationTaskRunRequest,
  StartMLLabelingSetGenerationTaskRunRequest,
  StartTriggerRequest,
  StartWorkflowRunRequest,
  StopCrawlerRequest,
  StopCrawlerScheduleRequest,
  StopSessionRequest,
  StopTriggerRequest,
  StopWorkflowRunRequest,
  TagResourceRequest,
  TriggerUpdate,
  UntagResourceRequest,
  UpdateBlueprintRequest,
  UpdateClassifierRequest,
  UpdateColumnStatisticsForPartitionRequest,
  UpdateColumnStatisticsForPartitionResponse,
  UpdateColumnStatisticsForTableRequest,
  UpdateColumnStatisticsForTableResponse,
  UpdateConnectionRequest,
  UpdateCrawlerRequest,
  UpdateCrawlerScheduleRequest,
  UpdateCsvClassifierRequest,
  UpdateDatabaseRequest,
  UpdateDataQualityRulesetRequest,
  UpdateDevEndpointRequest,
  UpdateGrokClassifierRequest,
  UpdateJobFromSourceControlRequest,
  UpdateJobRequest,
  UpdateJsonClassifierRequest,
  UpdateMLTransformRequest,
  UpdatePartitionRequest,
  UpdateRegistryInput,
  UpdateSchemaInput,
  UpdateSourceControlFromJobRequest,
  UpdateTableRequest,
  UpdateTriggerRequest,
  UpdateUserDefinedFunctionRequest,
  UpdateWorkflowRequest,
  UpdateXMLClassifierRequest,
  UserDefinedFunction,
  VersionMismatchException,
} from "../models/models_2";

/**
 * serializeAws_json1_1BatchCreatePartitionCommand
 */
export const se_BatchCreatePartitionCommand = async (
  input: BatchCreatePartitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchCreatePartition");
  let body: any;
  body = JSON.stringify(se_BatchCreatePartitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchDeleteConnectionCommand
 */
export const se_BatchDeleteConnectionCommand = async (
  input: BatchDeleteConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchDeleteConnection");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchDeletePartitionCommand
 */
export const se_BatchDeletePartitionCommand = async (
  input: BatchDeletePartitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchDeletePartition");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchDeleteTableCommand
 */
export const se_BatchDeleteTableCommand = async (
  input: BatchDeleteTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchDeleteTable");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchDeleteTableVersionCommand
 */
export const se_BatchDeleteTableVersionCommand = async (
  input: BatchDeleteTableVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchDeleteTableVersion");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchGetBlueprintsCommand
 */
export const se_BatchGetBlueprintsCommand = async (
  input: BatchGetBlueprintsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchGetBlueprints");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchGetCrawlersCommand
 */
export const se_BatchGetCrawlersCommand = async (
  input: BatchGetCrawlersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchGetCrawlers");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchGetCustomEntityTypesCommand
 */
export const se_BatchGetCustomEntityTypesCommand = async (
  input: BatchGetCustomEntityTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchGetCustomEntityTypes");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchGetDataQualityResultCommand
 */
export const se_BatchGetDataQualityResultCommand = async (
  input: BatchGetDataQualityResultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchGetDataQualityResult");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchGetDevEndpointsCommand
 */
export const se_BatchGetDevEndpointsCommand = async (
  input: BatchGetDevEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchGetDevEndpoints");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchGetJobsCommand
 */
export const se_BatchGetJobsCommand = async (
  input: BatchGetJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchGetJobs");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchGetPartitionCommand
 */
export const se_BatchGetPartitionCommand = async (
  input: BatchGetPartitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchGetPartition");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchGetTriggersCommand
 */
export const se_BatchGetTriggersCommand = async (
  input: BatchGetTriggersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchGetTriggers");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchGetWorkflowsCommand
 */
export const se_BatchGetWorkflowsCommand = async (
  input: BatchGetWorkflowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchGetWorkflows");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchStopJobRunCommand
 */
export const se_BatchStopJobRunCommand = async (
  input: BatchStopJobRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchStopJobRun");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchUpdatePartitionCommand
 */
export const se_BatchUpdatePartitionCommand = async (
  input: BatchUpdatePartitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchUpdatePartition");
  let body: any;
  body = JSON.stringify(se_BatchUpdatePartitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CancelDataQualityRuleRecommendationRunCommand
 */
export const se_CancelDataQualityRuleRecommendationRunCommand = async (
  input: CancelDataQualityRuleRecommendationRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CancelDataQualityRuleRecommendationRun");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CancelDataQualityRulesetEvaluationRunCommand
 */
export const se_CancelDataQualityRulesetEvaluationRunCommand = async (
  input: CancelDataQualityRulesetEvaluationRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CancelDataQualityRulesetEvaluationRun");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CancelMLTaskRunCommand
 */
export const se_CancelMLTaskRunCommand = async (
  input: CancelMLTaskRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CancelMLTaskRun");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CancelStatementCommand
 */
export const se_CancelStatementCommand = async (
  input: CancelStatementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CancelStatement");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CheckSchemaVersionValidityCommand
 */
export const se_CheckSchemaVersionValidityCommand = async (
  input: CheckSchemaVersionValidityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CheckSchemaVersionValidity");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateBlueprintCommand
 */
export const se_CreateBlueprintCommand = async (
  input: CreateBlueprintCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateBlueprint");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateClassifierCommand
 */
export const se_CreateClassifierCommand = async (
  input: CreateClassifierCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateClassifier");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateConnectionCommand
 */
export const se_CreateConnectionCommand = async (
  input: CreateConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateConnection");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateCrawlerCommand
 */
export const se_CreateCrawlerCommand = async (
  input: CreateCrawlerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateCrawler");
  let body: any;
  body = JSON.stringify(se_CreateCrawlerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateCustomEntityTypeCommand
 */
export const se_CreateCustomEntityTypeCommand = async (
  input: CreateCustomEntityTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateCustomEntityType");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDatabaseCommand
 */
export const se_CreateDatabaseCommand = async (
  input: CreateDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDatabase");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDataQualityRulesetCommand
 */
export const se_CreateDataQualityRulesetCommand = async (
  input: CreateDataQualityRulesetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDataQualityRuleset");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDevEndpointCommand
 */
export const se_CreateDevEndpointCommand = async (
  input: CreateDevEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDevEndpoint");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateJobCommand
 */
export const se_CreateJobCommand = async (
  input: CreateJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateJob");
  let body: any;
  body = JSON.stringify(se_CreateJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateMLTransformCommand
 */
export const se_CreateMLTransformCommand = async (
  input: CreateMLTransformCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateMLTransform");
  let body: any;
  body = JSON.stringify(se_CreateMLTransformRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreatePartitionCommand
 */
export const se_CreatePartitionCommand = async (
  input: CreatePartitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreatePartition");
  let body: any;
  body = JSON.stringify(se_CreatePartitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreatePartitionIndexCommand
 */
export const se_CreatePartitionIndexCommand = async (
  input: CreatePartitionIndexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreatePartitionIndex");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateRegistryCommand
 */
export const se_CreateRegistryCommand = async (
  input: CreateRegistryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateRegistry");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateSchemaCommand
 */
export const se_CreateSchemaCommand = async (
  input: CreateSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateSchema");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateScriptCommand
 */
export const se_CreateScriptCommand = async (
  input: CreateScriptCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateScript");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateSecurityConfigurationCommand
 */
export const se_CreateSecurityConfigurationCommand = async (
  input: CreateSecurityConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateSecurityConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateSessionCommand
 */
export const se_CreateSessionCommand = async (
  input: CreateSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateSession");
  let body: any;
  body = JSON.stringify(se_CreateSessionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateTableCommand
 */
export const se_CreateTableCommand = async (
  input: CreateTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateTable");
  let body: any;
  body = JSON.stringify(se_CreateTableRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateTriggerCommand
 */
export const se_CreateTriggerCommand = async (
  input: CreateTriggerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateTrigger");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateUserDefinedFunctionCommand
 */
export const se_CreateUserDefinedFunctionCommand = async (
  input: CreateUserDefinedFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateUserDefinedFunction");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateWorkflowCommand
 */
export const se_CreateWorkflowCommand = async (
  input: CreateWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateWorkflow");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteBlueprintCommand
 */
export const se_DeleteBlueprintCommand = async (
  input: DeleteBlueprintCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteBlueprint");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteClassifierCommand
 */
export const se_DeleteClassifierCommand = async (
  input: DeleteClassifierCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteClassifier");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteColumnStatisticsForPartitionCommand
 */
export const se_DeleteColumnStatisticsForPartitionCommand = async (
  input: DeleteColumnStatisticsForPartitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteColumnStatisticsForPartition");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteColumnStatisticsForTableCommand
 */
export const se_DeleteColumnStatisticsForTableCommand = async (
  input: DeleteColumnStatisticsForTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteColumnStatisticsForTable");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteConnectionCommand
 */
export const se_DeleteConnectionCommand = async (
  input: DeleteConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteConnection");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteCrawlerCommand
 */
export const se_DeleteCrawlerCommand = async (
  input: DeleteCrawlerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteCrawler");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteCustomEntityTypeCommand
 */
export const se_DeleteCustomEntityTypeCommand = async (
  input: DeleteCustomEntityTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteCustomEntityType");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDatabaseCommand
 */
export const se_DeleteDatabaseCommand = async (
  input: DeleteDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDatabase");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDataQualityRulesetCommand
 */
export const se_DeleteDataQualityRulesetCommand = async (
  input: DeleteDataQualityRulesetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDataQualityRuleset");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDevEndpointCommand
 */
export const se_DeleteDevEndpointCommand = async (
  input: DeleteDevEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDevEndpoint");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteJobCommand
 */
export const se_DeleteJobCommand = async (
  input: DeleteJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteMLTransformCommand
 */
export const se_DeleteMLTransformCommand = async (
  input: DeleteMLTransformCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteMLTransform");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeletePartitionCommand
 */
export const se_DeletePartitionCommand = async (
  input: DeletePartitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeletePartition");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeletePartitionIndexCommand
 */
export const se_DeletePartitionIndexCommand = async (
  input: DeletePartitionIndexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeletePartitionIndex");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteRegistryCommand
 */
export const se_DeleteRegistryCommand = async (
  input: DeleteRegistryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteRegistry");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteResourcePolicyCommand
 */
export const se_DeleteResourcePolicyCommand = async (
  input: DeleteResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteResourcePolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteSchemaCommand
 */
export const se_DeleteSchemaCommand = async (
  input: DeleteSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteSchema");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteSchemaVersionsCommand
 */
export const se_DeleteSchemaVersionsCommand = async (
  input: DeleteSchemaVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteSchemaVersions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteSecurityConfigurationCommand
 */
export const se_DeleteSecurityConfigurationCommand = async (
  input: DeleteSecurityConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteSecurityConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteSessionCommand
 */
export const se_DeleteSessionCommand = async (
  input: DeleteSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteSession");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteTableCommand
 */
export const se_DeleteTableCommand = async (
  input: DeleteTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteTable");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteTableVersionCommand
 */
export const se_DeleteTableVersionCommand = async (
  input: DeleteTableVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteTableVersion");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteTriggerCommand
 */
export const se_DeleteTriggerCommand = async (
  input: DeleteTriggerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteTrigger");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteUserDefinedFunctionCommand
 */
export const se_DeleteUserDefinedFunctionCommand = async (
  input: DeleteUserDefinedFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteUserDefinedFunction");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteWorkflowCommand
 */
export const se_DeleteWorkflowCommand = async (
  input: DeleteWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteWorkflow");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetBlueprintCommand
 */
export const se_GetBlueprintCommand = async (
  input: GetBlueprintCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetBlueprint");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetBlueprintRunCommand
 */
export const se_GetBlueprintRunCommand = async (
  input: GetBlueprintRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetBlueprintRun");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetBlueprintRunsCommand
 */
export const se_GetBlueprintRunsCommand = async (
  input: GetBlueprintRunsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetBlueprintRuns");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetCatalogImportStatusCommand
 */
export const se_GetCatalogImportStatusCommand = async (
  input: GetCatalogImportStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetCatalogImportStatus");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetClassifierCommand
 */
export const se_GetClassifierCommand = async (
  input: GetClassifierCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetClassifier");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetClassifiersCommand
 */
export const se_GetClassifiersCommand = async (
  input: GetClassifiersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetClassifiers");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetColumnStatisticsForPartitionCommand
 */
export const se_GetColumnStatisticsForPartitionCommand = async (
  input: GetColumnStatisticsForPartitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetColumnStatisticsForPartition");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetColumnStatisticsForTableCommand
 */
export const se_GetColumnStatisticsForTableCommand = async (
  input: GetColumnStatisticsForTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetColumnStatisticsForTable");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetConnectionCommand
 */
export const se_GetConnectionCommand = async (
  input: GetConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetConnection");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetConnectionsCommand
 */
export const se_GetConnectionsCommand = async (
  input: GetConnectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetConnections");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetCrawlerCommand
 */
export const se_GetCrawlerCommand = async (
  input: GetCrawlerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetCrawler");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetCrawlerMetricsCommand
 */
export const se_GetCrawlerMetricsCommand = async (
  input: GetCrawlerMetricsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetCrawlerMetrics");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetCrawlersCommand
 */
export const se_GetCrawlersCommand = async (
  input: GetCrawlersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetCrawlers");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetCustomEntityTypeCommand
 */
export const se_GetCustomEntityTypeCommand = async (
  input: GetCustomEntityTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetCustomEntityType");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDatabaseCommand
 */
export const se_GetDatabaseCommand = async (
  input: GetDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDatabase");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDatabasesCommand
 */
export const se_GetDatabasesCommand = async (
  input: GetDatabasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDatabases");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDataCatalogEncryptionSettingsCommand
 */
export const se_GetDataCatalogEncryptionSettingsCommand = async (
  input: GetDataCatalogEncryptionSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDataCatalogEncryptionSettings");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDataflowGraphCommand
 */
export const se_GetDataflowGraphCommand = async (
  input: GetDataflowGraphCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDataflowGraph");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDataQualityResultCommand
 */
export const se_GetDataQualityResultCommand = async (
  input: GetDataQualityResultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDataQualityResult");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDataQualityRuleRecommendationRunCommand
 */
export const se_GetDataQualityRuleRecommendationRunCommand = async (
  input: GetDataQualityRuleRecommendationRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDataQualityRuleRecommendationRun");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDataQualityRulesetCommand
 */
export const se_GetDataQualityRulesetCommand = async (
  input: GetDataQualityRulesetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDataQualityRuleset");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDataQualityRulesetEvaluationRunCommand
 */
export const se_GetDataQualityRulesetEvaluationRunCommand = async (
  input: GetDataQualityRulesetEvaluationRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDataQualityRulesetEvaluationRun");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDevEndpointCommand
 */
export const se_GetDevEndpointCommand = async (
  input: GetDevEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDevEndpoint");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDevEndpointsCommand
 */
export const se_GetDevEndpointsCommand = async (
  input: GetDevEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDevEndpoints");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetJobCommand
 */
export const se_GetJobCommand = async (input: GetJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetJobBookmarkCommand
 */
export const se_GetJobBookmarkCommand = async (
  input: GetJobBookmarkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetJobBookmark");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetJobRunCommand
 */
export const se_GetJobRunCommand = async (
  input: GetJobRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetJobRun");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetJobRunsCommand
 */
export const se_GetJobRunsCommand = async (
  input: GetJobRunsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetJobRuns");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetJobsCommand
 */
export const se_GetJobsCommand = async (
  input: GetJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetJobs");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetMappingCommand
 */
export const se_GetMappingCommand = async (
  input: GetMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetMapping");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetMLTaskRunCommand
 */
export const se_GetMLTaskRunCommand = async (
  input: GetMLTaskRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetMLTaskRun");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetMLTaskRunsCommand
 */
export const se_GetMLTaskRunsCommand = async (
  input: GetMLTaskRunsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetMLTaskRuns");
  let body: any;
  body = JSON.stringify(se_GetMLTaskRunsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetMLTransformCommand
 */
export const se_GetMLTransformCommand = async (
  input: GetMLTransformCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetMLTransform");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetMLTransformsCommand
 */
export const se_GetMLTransformsCommand = async (
  input: GetMLTransformsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetMLTransforms");
  let body: any;
  body = JSON.stringify(se_GetMLTransformsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetPartitionCommand
 */
export const se_GetPartitionCommand = async (
  input: GetPartitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetPartition");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetPartitionIndexesCommand
 */
export const se_GetPartitionIndexesCommand = async (
  input: GetPartitionIndexesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetPartitionIndexes");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetPartitionsCommand
 */
export const se_GetPartitionsCommand = async (
  input: GetPartitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetPartitions");
  let body: any;
  body = JSON.stringify(se_GetPartitionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetPlanCommand
 */
export const se_GetPlanCommand = async (
  input: GetPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetPlan");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRegistryCommand
 */
export const se_GetRegistryCommand = async (
  input: GetRegistryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetRegistry");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetResourcePoliciesCommand
 */
export const se_GetResourcePoliciesCommand = async (
  input: GetResourcePoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetResourcePolicies");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetResourcePolicyCommand
 */
export const se_GetResourcePolicyCommand = async (
  input: GetResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetResourcePolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetSchemaCommand
 */
export const se_GetSchemaCommand = async (
  input: GetSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetSchema");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetSchemaByDefinitionCommand
 */
export const se_GetSchemaByDefinitionCommand = async (
  input: GetSchemaByDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetSchemaByDefinition");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetSchemaVersionCommand
 */
export const se_GetSchemaVersionCommand = async (
  input: GetSchemaVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetSchemaVersion");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetSchemaVersionsDiffCommand
 */
export const se_GetSchemaVersionsDiffCommand = async (
  input: GetSchemaVersionsDiffCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetSchemaVersionsDiff");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetSecurityConfigurationCommand
 */
export const se_GetSecurityConfigurationCommand = async (
  input: GetSecurityConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetSecurityConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetSecurityConfigurationsCommand
 */
export const se_GetSecurityConfigurationsCommand = async (
  input: GetSecurityConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetSecurityConfigurations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetSessionCommand
 */
export const se_GetSessionCommand = async (
  input: GetSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetSession");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetStatementCommand
 */
export const se_GetStatementCommand = async (
  input: GetStatementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetStatement");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetTableCommand
 */
export const se_GetTableCommand = async (
  input: GetTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetTable");
  let body: any;
  body = JSON.stringify(se_GetTableRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetTablesCommand
 */
export const se_GetTablesCommand = async (
  input: GetTablesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetTables");
  let body: any;
  body = JSON.stringify(se_GetTablesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetTableVersionCommand
 */
export const se_GetTableVersionCommand = async (
  input: GetTableVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetTableVersion");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetTableVersionsCommand
 */
export const se_GetTableVersionsCommand = async (
  input: GetTableVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetTableVersions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetTagsCommand
 */
export const se_GetTagsCommand = async (
  input: GetTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetTags");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetTriggerCommand
 */
export const se_GetTriggerCommand = async (
  input: GetTriggerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetTrigger");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetTriggersCommand
 */
export const se_GetTriggersCommand = async (
  input: GetTriggersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetTriggers");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetUnfilteredPartitionMetadataCommand
 */
export const se_GetUnfilteredPartitionMetadataCommand = async (
  input: GetUnfilteredPartitionMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetUnfilteredPartitionMetadata");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetUnfilteredPartitionsMetadataCommand
 */
export const se_GetUnfilteredPartitionsMetadataCommand = async (
  input: GetUnfilteredPartitionsMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetUnfilteredPartitionsMetadata");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetUnfilteredTableMetadataCommand
 */
export const se_GetUnfilteredTableMetadataCommand = async (
  input: GetUnfilteredTableMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetUnfilteredTableMetadata");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetUserDefinedFunctionCommand
 */
export const se_GetUserDefinedFunctionCommand = async (
  input: GetUserDefinedFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetUserDefinedFunction");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetUserDefinedFunctionsCommand
 */
export const se_GetUserDefinedFunctionsCommand = async (
  input: GetUserDefinedFunctionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetUserDefinedFunctions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetWorkflowCommand
 */
export const se_GetWorkflowCommand = async (
  input: GetWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetWorkflow");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetWorkflowRunCommand
 */
export const se_GetWorkflowRunCommand = async (
  input: GetWorkflowRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetWorkflowRun");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetWorkflowRunPropertiesCommand
 */
export const se_GetWorkflowRunPropertiesCommand = async (
  input: GetWorkflowRunPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetWorkflowRunProperties");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetWorkflowRunsCommand
 */
export const se_GetWorkflowRunsCommand = async (
  input: GetWorkflowRunsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetWorkflowRuns");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ImportCatalogToGlueCommand
 */
export const se_ImportCatalogToGlueCommand = async (
  input: ImportCatalogToGlueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ImportCatalogToGlue");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListBlueprintsCommand
 */
export const se_ListBlueprintsCommand = async (
  input: ListBlueprintsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListBlueprints");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListCrawlersCommand
 */
export const se_ListCrawlersCommand = async (
  input: ListCrawlersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListCrawlers");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListCrawlsCommand
 */
export const se_ListCrawlsCommand = async (
  input: ListCrawlsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListCrawls");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListCustomEntityTypesCommand
 */
export const se_ListCustomEntityTypesCommand = async (
  input: ListCustomEntityTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListCustomEntityTypes");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDataQualityResultsCommand
 */
export const se_ListDataQualityResultsCommand = async (
  input: ListDataQualityResultsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDataQualityResults");
  let body: any;
  body = JSON.stringify(se_ListDataQualityResultsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDataQualityRuleRecommendationRunsCommand
 */
export const se_ListDataQualityRuleRecommendationRunsCommand = async (
  input: ListDataQualityRuleRecommendationRunsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDataQualityRuleRecommendationRuns");
  let body: any;
  body = JSON.stringify(se_ListDataQualityRuleRecommendationRunsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDataQualityRulesetEvaluationRunsCommand
 */
export const se_ListDataQualityRulesetEvaluationRunsCommand = async (
  input: ListDataQualityRulesetEvaluationRunsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDataQualityRulesetEvaluationRuns");
  let body: any;
  body = JSON.stringify(se_ListDataQualityRulesetEvaluationRunsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDataQualityRulesetsCommand
 */
export const se_ListDataQualityRulesetsCommand = async (
  input: ListDataQualityRulesetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDataQualityRulesets");
  let body: any;
  body = JSON.stringify(se_ListDataQualityRulesetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDevEndpointsCommand
 */
export const se_ListDevEndpointsCommand = async (
  input: ListDevEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDevEndpoints");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListJobsCommand
 */
export const se_ListJobsCommand = async (
  input: ListJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListJobs");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListMLTransformsCommand
 */
export const se_ListMLTransformsCommand = async (
  input: ListMLTransformsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListMLTransforms");
  let body: any;
  body = JSON.stringify(se_ListMLTransformsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListRegistriesCommand
 */
export const se_ListRegistriesCommand = async (
  input: ListRegistriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListRegistries");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListSchemasCommand
 */
export const se_ListSchemasCommand = async (
  input: ListSchemasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListSchemas");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListSchemaVersionsCommand
 */
export const se_ListSchemaVersionsCommand = async (
  input: ListSchemaVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListSchemaVersions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListSessionsCommand
 */
export const se_ListSessionsCommand = async (
  input: ListSessionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListSessions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListStatementsCommand
 */
export const se_ListStatementsCommand = async (
  input: ListStatementsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListStatements");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTriggersCommand
 */
export const se_ListTriggersCommand = async (
  input: ListTriggersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTriggers");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListWorkflowsCommand
 */
export const se_ListWorkflowsCommand = async (
  input: ListWorkflowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListWorkflows");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutDataCatalogEncryptionSettingsCommand
 */
export const se_PutDataCatalogEncryptionSettingsCommand = async (
  input: PutDataCatalogEncryptionSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutDataCatalogEncryptionSettings");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutResourcePolicyCommand
 */
export const se_PutResourcePolicyCommand = async (
  input: PutResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutResourcePolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutSchemaVersionMetadataCommand
 */
export const se_PutSchemaVersionMetadataCommand = async (
  input: PutSchemaVersionMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutSchemaVersionMetadata");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutWorkflowRunPropertiesCommand
 */
export const se_PutWorkflowRunPropertiesCommand = async (
  input: PutWorkflowRunPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutWorkflowRunProperties");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1QuerySchemaVersionMetadataCommand
 */
export const se_QuerySchemaVersionMetadataCommand = async (
  input: QuerySchemaVersionMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("QuerySchemaVersionMetadata");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RegisterSchemaVersionCommand
 */
export const se_RegisterSchemaVersionCommand = async (
  input: RegisterSchemaVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RegisterSchemaVersion");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RemoveSchemaVersionMetadataCommand
 */
export const se_RemoveSchemaVersionMetadataCommand = async (
  input: RemoveSchemaVersionMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RemoveSchemaVersionMetadata");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ResetJobBookmarkCommand
 */
export const se_ResetJobBookmarkCommand = async (
  input: ResetJobBookmarkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ResetJobBookmark");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ResumeWorkflowRunCommand
 */
export const se_ResumeWorkflowRunCommand = async (
  input: ResumeWorkflowRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ResumeWorkflowRun");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RunStatementCommand
 */
export const se_RunStatementCommand = async (
  input: RunStatementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RunStatement");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SearchTablesCommand
 */
export const se_SearchTablesCommand = async (
  input: SearchTablesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SearchTables");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartBlueprintRunCommand
 */
export const se_StartBlueprintRunCommand = async (
  input: StartBlueprintRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartBlueprintRun");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartCrawlerCommand
 */
export const se_StartCrawlerCommand = async (
  input: StartCrawlerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartCrawler");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartCrawlerScheduleCommand
 */
export const se_StartCrawlerScheduleCommand = async (
  input: StartCrawlerScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartCrawlerSchedule");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartDataQualityRuleRecommendationRunCommand
 */
export const se_StartDataQualityRuleRecommendationRunCommand = async (
  input: StartDataQualityRuleRecommendationRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartDataQualityRuleRecommendationRun");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartDataQualityRulesetEvaluationRunCommand
 */
export const se_StartDataQualityRulesetEvaluationRunCommand = async (
  input: StartDataQualityRulesetEvaluationRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartDataQualityRulesetEvaluationRun");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartExportLabelsTaskRunCommand
 */
export const se_StartExportLabelsTaskRunCommand = async (
  input: StartExportLabelsTaskRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartExportLabelsTaskRun");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartImportLabelsTaskRunCommand
 */
export const se_StartImportLabelsTaskRunCommand = async (
  input: StartImportLabelsTaskRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartImportLabelsTaskRun");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartJobRunCommand
 */
export const se_StartJobRunCommand = async (
  input: StartJobRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartJobRun");
  let body: any;
  body = JSON.stringify(se_StartJobRunRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartMLEvaluationTaskRunCommand
 */
export const se_StartMLEvaluationTaskRunCommand = async (
  input: StartMLEvaluationTaskRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartMLEvaluationTaskRun");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartMLLabelingSetGenerationTaskRunCommand
 */
export const se_StartMLLabelingSetGenerationTaskRunCommand = async (
  input: StartMLLabelingSetGenerationTaskRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartMLLabelingSetGenerationTaskRun");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartTriggerCommand
 */
export const se_StartTriggerCommand = async (
  input: StartTriggerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartTrigger");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartWorkflowRunCommand
 */
export const se_StartWorkflowRunCommand = async (
  input: StartWorkflowRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartWorkflowRun");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopCrawlerCommand
 */
export const se_StopCrawlerCommand = async (
  input: StopCrawlerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopCrawler");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopCrawlerScheduleCommand
 */
export const se_StopCrawlerScheduleCommand = async (
  input: StopCrawlerScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopCrawlerSchedule");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopSessionCommand
 */
export const se_StopSessionCommand = async (
  input: StopSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopSession");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopTriggerCommand
 */
export const se_StopTriggerCommand = async (
  input: StopTriggerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopTrigger");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopWorkflowRunCommand
 */
export const se_StopWorkflowRunCommand = async (
  input: StopWorkflowRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopWorkflowRun");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TagResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UntagResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateBlueprintCommand
 */
export const se_UpdateBlueprintCommand = async (
  input: UpdateBlueprintCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateBlueprint");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateClassifierCommand
 */
export const se_UpdateClassifierCommand = async (
  input: UpdateClassifierCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateClassifier");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateColumnStatisticsForPartitionCommand
 */
export const se_UpdateColumnStatisticsForPartitionCommand = async (
  input: UpdateColumnStatisticsForPartitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateColumnStatisticsForPartition");
  let body: any;
  body = JSON.stringify(se_UpdateColumnStatisticsForPartitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateColumnStatisticsForTableCommand
 */
export const se_UpdateColumnStatisticsForTableCommand = async (
  input: UpdateColumnStatisticsForTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateColumnStatisticsForTable");
  let body: any;
  body = JSON.stringify(se_UpdateColumnStatisticsForTableRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateConnectionCommand
 */
export const se_UpdateConnectionCommand = async (
  input: UpdateConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateConnection");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateCrawlerCommand
 */
export const se_UpdateCrawlerCommand = async (
  input: UpdateCrawlerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateCrawler");
  let body: any;
  body = JSON.stringify(se_UpdateCrawlerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateCrawlerScheduleCommand
 */
export const se_UpdateCrawlerScheduleCommand = async (
  input: UpdateCrawlerScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateCrawlerSchedule");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDatabaseCommand
 */
export const se_UpdateDatabaseCommand = async (
  input: UpdateDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateDatabase");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDataQualityRulesetCommand
 */
export const se_UpdateDataQualityRulesetCommand = async (
  input: UpdateDataQualityRulesetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateDataQualityRuleset");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDevEndpointCommand
 */
export const se_UpdateDevEndpointCommand = async (
  input: UpdateDevEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateDevEndpoint");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateJobCommand
 */
export const se_UpdateJobCommand = async (
  input: UpdateJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateJob");
  let body: any;
  body = JSON.stringify(se_UpdateJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateJobFromSourceControlCommand
 */
export const se_UpdateJobFromSourceControlCommand = async (
  input: UpdateJobFromSourceControlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateJobFromSourceControl");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateMLTransformCommand
 */
export const se_UpdateMLTransformCommand = async (
  input: UpdateMLTransformCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateMLTransform");
  let body: any;
  body = JSON.stringify(se_UpdateMLTransformRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdatePartitionCommand
 */
export const se_UpdatePartitionCommand = async (
  input: UpdatePartitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdatePartition");
  let body: any;
  body = JSON.stringify(se_UpdatePartitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateRegistryCommand
 */
export const se_UpdateRegistryCommand = async (
  input: UpdateRegistryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateRegistry");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateSchemaCommand
 */
export const se_UpdateSchemaCommand = async (
  input: UpdateSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateSchema");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateSourceControlFromJobCommand
 */
export const se_UpdateSourceControlFromJobCommand = async (
  input: UpdateSourceControlFromJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateSourceControlFromJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateTableCommand
 */
export const se_UpdateTableCommand = async (
  input: UpdateTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateTable");
  let body: any;
  body = JSON.stringify(se_UpdateTableRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateTriggerCommand
 */
export const se_UpdateTriggerCommand = async (
  input: UpdateTriggerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateTrigger");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateUserDefinedFunctionCommand
 */
export const se_UpdateUserDefinedFunctionCommand = async (
  input: UpdateUserDefinedFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateUserDefinedFunction");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateWorkflowCommand
 */
export const se_UpdateWorkflowCommand = async (
  input: UpdateWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateWorkflow");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1BatchCreatePartitionCommand
 */
export const de_BatchCreatePartitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreatePartitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchCreatePartitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: BatchCreatePartitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1BatchCreatePartitionCommandError
 */
const de_BatchCreatePartitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreatePartitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await de_GlueEncryptionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await de_ResourceNumberLimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1BatchDeleteConnectionCommand
 */
export const de_BatchDeleteConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchDeleteConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: BatchDeleteConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1BatchDeleteConnectionCommandError
 */
const de_BatchDeleteConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1BatchDeletePartitionCommand
 */
export const de_BatchDeletePartitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeletePartitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchDeletePartitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: BatchDeletePartitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1BatchDeletePartitionCommandError
 */
const de_BatchDeletePartitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeletePartitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1BatchDeleteTableCommand
 */
export const de_BatchDeleteTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchDeleteTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: BatchDeleteTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1BatchDeleteTableCommandError
 */
const de_BatchDeleteTableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteTableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await de_GlueEncryptionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotReadyException":
    case "com.amazonaws.glue#ResourceNotReadyException":
      throw await de_ResourceNotReadyExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1BatchDeleteTableVersionCommand
 */
export const de_BatchDeleteTableVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteTableVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchDeleteTableVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: BatchDeleteTableVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1BatchDeleteTableVersionCommandError
 */
const de_BatchDeleteTableVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteTableVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1BatchGetBlueprintsCommand
 */
export const de_BatchGetBlueprintsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetBlueprintsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchGetBlueprintsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchGetBlueprintsResponse(data, context);
  const response: BatchGetBlueprintsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1BatchGetBlueprintsCommandError
 */
const de_BatchGetBlueprintsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetBlueprintsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1BatchGetCrawlersCommand
 */
export const de_BatchGetCrawlersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetCrawlersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchGetCrawlersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchGetCrawlersResponse(data, context);
  const response: BatchGetCrawlersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1BatchGetCrawlersCommandError
 */
const de_BatchGetCrawlersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetCrawlersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1BatchGetCustomEntityTypesCommand
 */
export const de_BatchGetCustomEntityTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetCustomEntityTypesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchGetCustomEntityTypesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: BatchGetCustomEntityTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1BatchGetCustomEntityTypesCommandError
 */
const de_BatchGetCustomEntityTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetCustomEntityTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1BatchGetDataQualityResultCommand
 */
export const de_BatchGetDataQualityResultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetDataQualityResultCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchGetDataQualityResultCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchGetDataQualityResultResponse(data, context);
  const response: BatchGetDataQualityResultCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1BatchGetDataQualityResultCommandError
 */
const de_BatchGetDataQualityResultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetDataQualityResultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1BatchGetDevEndpointsCommand
 */
export const de_BatchGetDevEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetDevEndpointsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchGetDevEndpointsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchGetDevEndpointsResponse(data, context);
  const response: BatchGetDevEndpointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1BatchGetDevEndpointsCommandError
 */
const de_BatchGetDevEndpointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetDevEndpointsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1BatchGetJobsCommand
 */
export const de_BatchGetJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchGetJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchGetJobsResponse(data, context);
  const response: BatchGetJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1BatchGetJobsCommandError
 */
const de_BatchGetJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1BatchGetPartitionCommand
 */
export const de_BatchGetPartitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetPartitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchGetPartitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchGetPartitionResponse(data, context);
  const response: BatchGetPartitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1BatchGetPartitionCommandError
 */
const de_BatchGetPartitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetPartitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "FederationSourceException":
    case "com.amazonaws.glue#FederationSourceException":
      throw await de_FederationSourceExceptionRes(parsedOutput, context);
    case "FederationSourceRetryableException":
    case "com.amazonaws.glue#FederationSourceRetryableException":
      throw await de_FederationSourceRetryableExceptionRes(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await de_GlueEncryptionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.glue#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1BatchGetTriggersCommand
 */
export const de_BatchGetTriggersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetTriggersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchGetTriggersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: BatchGetTriggersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1BatchGetTriggersCommandError
 */
const de_BatchGetTriggersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetTriggersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1BatchGetWorkflowsCommand
 */
export const de_BatchGetWorkflowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetWorkflowsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchGetWorkflowsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchGetWorkflowsResponse(data, context);
  const response: BatchGetWorkflowsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1BatchGetWorkflowsCommandError
 */
const de_BatchGetWorkflowsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetWorkflowsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1BatchStopJobRunCommand
 */
export const de_BatchStopJobRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchStopJobRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchStopJobRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: BatchStopJobRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1BatchStopJobRunCommandError
 */
const de_BatchStopJobRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchStopJobRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1BatchUpdatePartitionCommand
 */
export const de_BatchUpdatePartitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdatePartitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchUpdatePartitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: BatchUpdatePartitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1BatchUpdatePartitionCommandError
 */
const de_BatchUpdatePartitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdatePartitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await de_GlueEncryptionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CancelDataQualityRuleRecommendationRunCommand
 */
export const de_CancelDataQualityRuleRecommendationRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelDataQualityRuleRecommendationRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CancelDataQualityRuleRecommendationRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CancelDataQualityRuleRecommendationRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CancelDataQualityRuleRecommendationRunCommandError
 */
const de_CancelDataQualityRuleRecommendationRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelDataQualityRuleRecommendationRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CancelDataQualityRulesetEvaluationRunCommand
 */
export const de_CancelDataQualityRulesetEvaluationRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelDataQualityRulesetEvaluationRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CancelDataQualityRulesetEvaluationRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CancelDataQualityRulesetEvaluationRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CancelDataQualityRulesetEvaluationRunCommandError
 */
const de_CancelDataQualityRulesetEvaluationRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelDataQualityRulesetEvaluationRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CancelMLTaskRunCommand
 */
export const de_CancelMLTaskRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelMLTaskRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CancelMLTaskRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CancelMLTaskRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CancelMLTaskRunCommandError
 */
const de_CancelMLTaskRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelMLTaskRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CancelStatementCommand
 */
export const de_CancelStatementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelStatementCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CancelStatementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CancelStatementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CancelStatementCommandError
 */
const de_CancelStatementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelStatementCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "IllegalSessionStateException":
    case "com.amazonaws.glue#IllegalSessionStateException":
      throw await de_IllegalSessionStateExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CheckSchemaVersionValidityCommand
 */
export const de_CheckSchemaVersionValidityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CheckSchemaVersionValidityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CheckSchemaVersionValidityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CheckSchemaVersionValidityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CheckSchemaVersionValidityCommandError
 */
const de_CheckSchemaVersionValidityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CheckSchemaVersionValidityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateBlueprintCommand
 */
export const de_CreateBlueprintCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBlueprintCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateBlueprintCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateBlueprintCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateBlueprintCommandError
 */
const de_CreateBlueprintCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBlueprintCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await de_ResourceNumberLimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateClassifierCommand
 */
export const de_CreateClassifierCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClassifierCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateClassifierCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateClassifierCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateClassifierCommandError
 */
const de_CreateClassifierCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClassifierCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateConnectionCommand
 */
export const de_CreateConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateConnectionCommandError
 */
const de_CreateConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await de_GlueEncryptionExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await de_ResourceNumberLimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateCrawlerCommand
 */
export const de_CreateCrawlerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCrawlerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateCrawlerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateCrawlerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateCrawlerCommandError
 */
const de_CreateCrawlerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCrawlerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await de_ResourceNumberLimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateCustomEntityTypeCommand
 */
export const de_CreateCustomEntityTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomEntityTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateCustomEntityTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateCustomEntityTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateCustomEntityTypeCommandError
 */
const de_CreateCustomEntityTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomEntityTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.glue#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await de_ResourceNumberLimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateDatabaseCommand
 */
export const de_CreateDatabaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatabaseCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDatabaseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateDatabaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateDatabaseCommandError
 */
const de_CreateDatabaseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatabaseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "FederatedResourceAlreadyExistsException":
    case "com.amazonaws.glue#FederatedResourceAlreadyExistsException":
      throw await de_FederatedResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await de_GlueEncryptionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await de_ResourceNumberLimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateDataQualityRulesetCommand
 */
export const de_CreateDataQualityRulesetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataQualityRulesetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDataQualityRulesetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateDataQualityRulesetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateDataQualityRulesetCommandError
 */
const de_CreateDataQualityRulesetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataQualityRulesetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await de_ResourceNumberLimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateDevEndpointCommand
 */
export const de_CreateDevEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDevEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDevEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateDevEndpointResponse(data, context);
  const response: CreateDevEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateDevEndpointCommandError
 */
const de_CreateDevEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDevEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.glue#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await de_ResourceNumberLimitExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.glue#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateJobCommand
 */
export const de_CreateJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateJobCommandError
 */
const de_CreateJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.glue#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await de_ResourceNumberLimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateMLTransformCommand
 */
export const de_CreateMLTransformCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMLTransformCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateMLTransformCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateMLTransformCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateMLTransformCommandError
 */
const de_CreateMLTransformCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMLTransformCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.glue#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await de_ResourceNumberLimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreatePartitionCommand
 */
export const de_CreatePartitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePartitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreatePartitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreatePartitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreatePartitionCommandError
 */
const de_CreatePartitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePartitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await de_GlueEncryptionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await de_ResourceNumberLimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreatePartitionIndexCommand
 */
export const de_CreatePartitionIndexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePartitionIndexCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreatePartitionIndexCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreatePartitionIndexCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreatePartitionIndexCommandError
 */
const de_CreatePartitionIndexCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePartitionIndexCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await de_GlueEncryptionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await de_ResourceNumberLimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateRegistryCommand
 */
export const de_CreateRegistryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRegistryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateRegistryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateRegistryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateRegistryCommandError
 */
const de_CreateRegistryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRegistryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await de_ResourceNumberLimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateSchemaCommand
 */
export const de_CreateSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSchemaCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateSchemaCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateSchemaCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateSchemaCommandError
 */
const de_CreateSchemaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSchemaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await de_ResourceNumberLimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateScriptCommand
 */
export const de_CreateScriptCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateScriptCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateScriptCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateScriptCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateScriptCommandError
 */
const de_CreateScriptCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateScriptCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateSecurityConfigurationCommand
 */
export const de_CreateSecurityConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSecurityConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateSecurityConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateSecurityConfigurationResponse(data, context);
  const response: CreateSecurityConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateSecurityConfigurationCommandError
 */
const de_CreateSecurityConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSecurityConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await de_ResourceNumberLimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateSessionCommand
 */
export const de_CreateSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSessionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateSessionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateSessionResponse(data, context);
  const response: CreateSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateSessionCommandError
 */
const de_CreateSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.glue#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await de_ResourceNumberLimitExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.glue#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateTableCommand
 */
export const de_CreateTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateTableCommandError
 */
const de_CreateTableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await de_GlueEncryptionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotReadyException":
    case "com.amazonaws.glue#ResourceNotReadyException":
      throw await de_ResourceNotReadyExceptionRes(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await de_ResourceNumberLimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateTriggerCommand
 */
export const de_CreateTriggerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTriggerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateTriggerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateTriggerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateTriggerCommandError
 */
const de_CreateTriggerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTriggerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.glue#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await de_ResourceNumberLimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateUserDefinedFunctionCommand
 */
export const de_CreateUserDefinedFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserDefinedFunctionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateUserDefinedFunctionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateUserDefinedFunctionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateUserDefinedFunctionCommandError
 */
const de_CreateUserDefinedFunctionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserDefinedFunctionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await de_GlueEncryptionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await de_ResourceNumberLimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateWorkflowCommand
 */
export const de_CreateWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkflowCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateWorkflowCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateWorkflowCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateWorkflowCommandError
 */
const de_CreateWorkflowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkflowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await de_ResourceNumberLimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteBlueprintCommand
 */
export const de_DeleteBlueprintCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBlueprintCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteBlueprintCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteBlueprintCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteBlueprintCommandError
 */
const de_DeleteBlueprintCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBlueprintCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteClassifierCommand
 */
export const de_DeleteClassifierCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClassifierCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteClassifierCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteClassifierCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteClassifierCommandError
 */
const de_DeleteClassifierCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClassifierCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteColumnStatisticsForPartitionCommand
 */
export const de_DeleteColumnStatisticsForPartitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteColumnStatisticsForPartitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteColumnStatisticsForPartitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteColumnStatisticsForPartitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteColumnStatisticsForPartitionCommandError
 */
const de_DeleteColumnStatisticsForPartitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteColumnStatisticsForPartitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await de_GlueEncryptionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteColumnStatisticsForTableCommand
 */
export const de_DeleteColumnStatisticsForTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteColumnStatisticsForTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteColumnStatisticsForTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteColumnStatisticsForTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteColumnStatisticsForTableCommandError
 */
const de_DeleteColumnStatisticsForTableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteColumnStatisticsForTableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await de_GlueEncryptionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteConnectionCommand
 */
export const de_DeleteConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteConnectionCommandError
 */
const de_DeleteConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteCrawlerCommand
 */
export const de_DeleteCrawlerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCrawlerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteCrawlerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteCrawlerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteCrawlerCommandError
 */
const de_DeleteCrawlerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCrawlerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CrawlerRunningException":
    case "com.amazonaws.glue#CrawlerRunningException":
      throw await de_CrawlerRunningExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    case "SchedulerTransitioningException":
    case "com.amazonaws.glue#SchedulerTransitioningException":
      throw await de_SchedulerTransitioningExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteCustomEntityTypeCommand
 */
export const de_DeleteCustomEntityTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomEntityTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteCustomEntityTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteCustomEntityTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteCustomEntityTypeCommandError
 */
const de_DeleteCustomEntityTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomEntityTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteDatabaseCommand
 */
export const de_DeleteDatabaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatabaseCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDatabaseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteDatabaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteDatabaseCommandError
 */
const de_DeleteDatabaseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatabaseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteDataQualityRulesetCommand
 */
export const de_DeleteDataQualityRulesetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataQualityRulesetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDataQualityRulesetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteDataQualityRulesetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteDataQualityRulesetCommandError
 */
const de_DeleteDataQualityRulesetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataQualityRulesetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteDevEndpointCommand
 */
export const de_DeleteDevEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDevEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDevEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteDevEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteDevEndpointCommandError
 */
const de_DeleteDevEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDevEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteJobCommand
 */
export const de_DeleteJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteJobCommandError
 */
const de_DeleteJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteMLTransformCommand
 */
export const de_DeleteMLTransformCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMLTransformCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteMLTransformCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteMLTransformCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteMLTransformCommandError
 */
const de_DeleteMLTransformCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMLTransformCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeletePartitionCommand
 */
export const de_DeletePartitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePartitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeletePartitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeletePartitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeletePartitionCommandError
 */
const de_DeletePartitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePartitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeletePartitionIndexCommand
 */
export const de_DeletePartitionIndexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePartitionIndexCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeletePartitionIndexCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeletePartitionIndexCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeletePartitionIndexCommandError
 */
const de_DeletePartitionIndexCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePartitionIndexCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.glue#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await de_GlueEncryptionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteRegistryCommand
 */
export const de_DeleteRegistryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRegistryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteRegistryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteRegistryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteRegistryCommandError
 */
const de_DeleteRegistryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRegistryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteResourcePolicyCommand
 */
export const de_DeleteResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteResourcePolicyCommandError
 */
const de_DeleteResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConditionCheckFailureException":
    case "com.amazonaws.glue#ConditionCheckFailureException":
      throw await de_ConditionCheckFailureExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteSchemaCommand
 */
export const de_DeleteSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSchemaCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteSchemaCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteSchemaCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteSchemaCommandError
 */
const de_DeleteSchemaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSchemaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteSchemaVersionsCommand
 */
export const de_DeleteSchemaVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSchemaVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteSchemaVersionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteSchemaVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteSchemaVersionsCommandError
 */
const de_DeleteSchemaVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSchemaVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteSecurityConfigurationCommand
 */
export const de_DeleteSecurityConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSecurityConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteSecurityConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteSecurityConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteSecurityConfigurationCommandError
 */
const de_DeleteSecurityConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSecurityConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteSessionCommand
 */
export const de_DeleteSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSessionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteSessionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteSessionCommandError
 */
const de_DeleteSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "IllegalSessionStateException":
    case "com.amazonaws.glue#IllegalSessionStateException":
      throw await de_IllegalSessionStateExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteTableCommand
 */
export const de_DeleteTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteTableCommandError
 */
const de_DeleteTableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotReadyException":
    case "com.amazonaws.glue#ResourceNotReadyException":
      throw await de_ResourceNotReadyExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteTableVersionCommand
 */
export const de_DeleteTableVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTableVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteTableVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteTableVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteTableVersionCommandError
 */
const de_DeleteTableVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTableVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteTriggerCommand
 */
export const de_DeleteTriggerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTriggerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteTriggerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteTriggerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteTriggerCommandError
 */
const de_DeleteTriggerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTriggerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteUserDefinedFunctionCommand
 */
export const de_DeleteUserDefinedFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserDefinedFunctionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteUserDefinedFunctionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteUserDefinedFunctionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteUserDefinedFunctionCommandError
 */
const de_DeleteUserDefinedFunctionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserDefinedFunctionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteWorkflowCommand
 */
export const de_DeleteWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkflowCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteWorkflowCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteWorkflowCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteWorkflowCommandError
 */
const de_DeleteWorkflowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkflowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetBlueprintCommand
 */
export const de_GetBlueprintCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBlueprintCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetBlueprintCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetBlueprintResponse(data, context);
  const response: GetBlueprintCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetBlueprintCommandError
 */
const de_GetBlueprintCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBlueprintCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetBlueprintRunCommand
 */
export const de_GetBlueprintRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBlueprintRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetBlueprintRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetBlueprintRunResponse(data, context);
  const response: GetBlueprintRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetBlueprintRunCommandError
 */
const de_GetBlueprintRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBlueprintRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetBlueprintRunsCommand
 */
export const de_GetBlueprintRunsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBlueprintRunsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetBlueprintRunsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetBlueprintRunsResponse(data, context);
  const response: GetBlueprintRunsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetBlueprintRunsCommandError
 */
const de_GetBlueprintRunsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBlueprintRunsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetCatalogImportStatusCommand
 */
export const de_GetCatalogImportStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCatalogImportStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetCatalogImportStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetCatalogImportStatusResponse(data, context);
  const response: GetCatalogImportStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetCatalogImportStatusCommandError
 */
const de_GetCatalogImportStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCatalogImportStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetClassifierCommand
 */
export const de_GetClassifierCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetClassifierCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetClassifierCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetClassifierResponse(data, context);
  const response: GetClassifierCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetClassifierCommandError
 */
const de_GetClassifierCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetClassifierCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetClassifiersCommand
 */
export const de_GetClassifiersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetClassifiersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetClassifiersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetClassifiersResponse(data, context);
  const response: GetClassifiersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetClassifiersCommandError
 */
const de_GetClassifiersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetClassifiersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetColumnStatisticsForPartitionCommand
 */
export const de_GetColumnStatisticsForPartitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetColumnStatisticsForPartitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetColumnStatisticsForPartitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetColumnStatisticsForPartitionResponse(data, context);
  const response: GetColumnStatisticsForPartitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetColumnStatisticsForPartitionCommandError
 */
const de_GetColumnStatisticsForPartitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetColumnStatisticsForPartitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await de_GlueEncryptionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetColumnStatisticsForTableCommand
 */
export const de_GetColumnStatisticsForTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetColumnStatisticsForTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetColumnStatisticsForTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetColumnStatisticsForTableResponse(data, context);
  const response: GetColumnStatisticsForTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetColumnStatisticsForTableCommandError
 */
const de_GetColumnStatisticsForTableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetColumnStatisticsForTableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await de_GlueEncryptionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetConnectionCommand
 */
export const de_GetConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetConnectionResponse(data, context);
  const response: GetConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetConnectionCommandError
 */
const de_GetConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await de_GlueEncryptionExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetConnectionsCommand
 */
export const de_GetConnectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetConnectionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetConnectionsResponse(data, context);
  const response: GetConnectionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetConnectionsCommandError
 */
const de_GetConnectionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await de_GlueEncryptionExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetCrawlerCommand
 */
export const de_GetCrawlerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCrawlerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetCrawlerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetCrawlerResponse(data, context);
  const response: GetCrawlerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetCrawlerCommandError
 */
const de_GetCrawlerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCrawlerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetCrawlerMetricsCommand
 */
export const de_GetCrawlerMetricsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCrawlerMetricsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetCrawlerMetricsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetCrawlerMetricsResponse(data, context);
  const response: GetCrawlerMetricsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetCrawlerMetricsCommandError
 */
const de_GetCrawlerMetricsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCrawlerMetricsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetCrawlersCommand
 */
export const de_GetCrawlersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCrawlersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetCrawlersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetCrawlersResponse(data, context);
  const response: GetCrawlersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetCrawlersCommandError
 */
const de_GetCrawlersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCrawlersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetCustomEntityTypeCommand
 */
export const de_GetCustomEntityTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCustomEntityTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetCustomEntityTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetCustomEntityTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetCustomEntityTypeCommandError
 */
const de_GetCustomEntityTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCustomEntityTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetDatabaseCommand
 */
export const de_GetDatabaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDatabaseCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDatabaseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDatabaseResponse(data, context);
  const response: GetDatabaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetDatabaseCommandError
 */
const de_GetDatabaseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDatabaseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "FederationSourceException":
    case "com.amazonaws.glue#FederationSourceException":
      throw await de_FederationSourceExceptionRes(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await de_GlueEncryptionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetDatabasesCommand
 */
export const de_GetDatabasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDatabasesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDatabasesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDatabasesResponse(data, context);
  const response: GetDatabasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetDatabasesCommandError
 */
const de_GetDatabasesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDatabasesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await de_GlueEncryptionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetDataCatalogEncryptionSettingsCommand
 */
export const de_GetDataCatalogEncryptionSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataCatalogEncryptionSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDataCatalogEncryptionSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetDataCatalogEncryptionSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetDataCatalogEncryptionSettingsCommandError
 */
const de_GetDataCatalogEncryptionSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataCatalogEncryptionSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetDataflowGraphCommand
 */
export const de_GetDataflowGraphCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataflowGraphCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDataflowGraphCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetDataflowGraphCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetDataflowGraphCommandError
 */
const de_GetDataflowGraphCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataflowGraphCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetDataQualityResultCommand
 */
export const de_GetDataQualityResultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataQualityResultCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDataQualityResultCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDataQualityResultResponse(data, context);
  const response: GetDataQualityResultCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetDataQualityResultCommandError
 */
const de_GetDataQualityResultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataQualityResultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetDataQualityRuleRecommendationRunCommand
 */
export const de_GetDataQualityRuleRecommendationRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataQualityRuleRecommendationRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDataQualityRuleRecommendationRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDataQualityRuleRecommendationRunResponse(data, context);
  const response: GetDataQualityRuleRecommendationRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetDataQualityRuleRecommendationRunCommandError
 */
const de_GetDataQualityRuleRecommendationRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataQualityRuleRecommendationRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetDataQualityRulesetCommand
 */
export const de_GetDataQualityRulesetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataQualityRulesetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDataQualityRulesetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDataQualityRulesetResponse(data, context);
  const response: GetDataQualityRulesetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetDataQualityRulesetCommandError
 */
const de_GetDataQualityRulesetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataQualityRulesetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetDataQualityRulesetEvaluationRunCommand
 */
export const de_GetDataQualityRulesetEvaluationRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataQualityRulesetEvaluationRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDataQualityRulesetEvaluationRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDataQualityRulesetEvaluationRunResponse(data, context);
  const response: GetDataQualityRulesetEvaluationRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetDataQualityRulesetEvaluationRunCommandError
 */
const de_GetDataQualityRulesetEvaluationRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataQualityRulesetEvaluationRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetDevEndpointCommand
 */
export const de_GetDevEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDevEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDevEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDevEndpointResponse(data, context);
  const response: GetDevEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetDevEndpointCommandError
 */
const de_GetDevEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDevEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetDevEndpointsCommand
 */
export const de_GetDevEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDevEndpointsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDevEndpointsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDevEndpointsResponse(data, context);
  const response: GetDevEndpointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetDevEndpointsCommandError
 */
const de_GetDevEndpointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDevEndpointsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetJobCommand
 */
export const de_GetJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetJobResponse(data, context);
  const response: GetJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetJobCommandError
 */
const de_GetJobCommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<GetJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetJobBookmarkCommand
 */
export const de_GetJobBookmarkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobBookmarkCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetJobBookmarkCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetJobBookmarkCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetJobBookmarkCommandError
 */
const de_GetJobBookmarkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobBookmarkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.glue#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetJobRunCommand
 */
export const de_GetJobRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetJobRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetJobRunResponse(data, context);
  const response: GetJobRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetJobRunCommandError
 */
const de_GetJobRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetJobRunsCommand
 */
export const de_GetJobRunsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobRunsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetJobRunsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetJobRunsResponse(data, context);
  const response: GetJobRunsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetJobRunsCommandError
 */
const de_GetJobRunsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobRunsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetJobsCommand
 */
export const de_GetJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetJobsResponse(data, context);
  const response: GetJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetJobsCommandError
 */
const de_GetJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetMappingCommand
 */
export const de_GetMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMappingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetMappingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetMappingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetMappingCommandError
 */
const de_GetMappingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMappingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetMLTaskRunCommand
 */
export const de_GetMLTaskRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMLTaskRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetMLTaskRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetMLTaskRunResponse(data, context);
  const response: GetMLTaskRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetMLTaskRunCommandError
 */
const de_GetMLTaskRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMLTaskRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetMLTaskRunsCommand
 */
export const de_GetMLTaskRunsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMLTaskRunsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetMLTaskRunsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetMLTaskRunsResponse(data, context);
  const response: GetMLTaskRunsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetMLTaskRunsCommandError
 */
const de_GetMLTaskRunsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMLTaskRunsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetMLTransformCommand
 */
export const de_GetMLTransformCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMLTransformCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetMLTransformCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetMLTransformResponse(data, context);
  const response: GetMLTransformCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetMLTransformCommandError
 */
const de_GetMLTransformCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMLTransformCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetMLTransformsCommand
 */
export const de_GetMLTransformsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMLTransformsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetMLTransformsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetMLTransformsResponse(data, context);
  const response: GetMLTransformsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetMLTransformsCommandError
 */
const de_GetMLTransformsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMLTransformsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetPartitionCommand
 */
export const de_GetPartitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPartitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetPartitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetPartitionResponse(data, context);
  const response: GetPartitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetPartitionCommandError
 */
const de_GetPartitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPartitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "FederationSourceException":
    case "com.amazonaws.glue#FederationSourceException":
      throw await de_FederationSourceExceptionRes(parsedOutput, context);
    case "FederationSourceRetryableException":
    case "com.amazonaws.glue#FederationSourceRetryableException":
      throw await de_FederationSourceRetryableExceptionRes(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await de_GlueEncryptionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetPartitionIndexesCommand
 */
export const de_GetPartitionIndexesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPartitionIndexesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetPartitionIndexesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetPartitionIndexesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetPartitionIndexesCommandError
 */
const de_GetPartitionIndexesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPartitionIndexesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.glue#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetPartitionsCommand
 */
export const de_GetPartitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPartitionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetPartitionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetPartitionsResponse(data, context);
  const response: GetPartitionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetPartitionsCommandError
 */
const de_GetPartitionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPartitionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "FederationSourceException":
    case "com.amazonaws.glue#FederationSourceException":
      throw await de_FederationSourceExceptionRes(parsedOutput, context);
    case "FederationSourceRetryableException":
    case "com.amazonaws.glue#FederationSourceRetryableException":
      throw await de_FederationSourceRetryableExceptionRes(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await de_GlueEncryptionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.glue#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotReadyException":
    case "com.amazonaws.glue#ResourceNotReadyException":
      throw await de_ResourceNotReadyExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetPlanCommand
 */
export const de_GetPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPlanCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetPlanCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetPlanCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetPlanCommandError
 */
const de_GetPlanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPlanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetRegistryCommand
 */
export const de_GetRegistryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRegistryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetRegistryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetRegistryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetRegistryCommandError
 */
const de_GetRegistryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRegistryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetResourcePoliciesCommand
 */
export const de_GetResourcePoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetResourcePoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetResourcePoliciesResponse(data, context);
  const response: GetResourcePoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetResourcePoliciesCommandError
 */
const de_GetResourcePoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await de_GlueEncryptionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetResourcePolicyCommand
 */
export const de_GetResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetResourcePolicyResponse(data, context);
  const response: GetResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetResourcePolicyCommandError
 */
const de_GetResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetSchemaCommand
 */
export const de_GetSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSchemaCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetSchemaCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetSchemaCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetSchemaCommandError
 */
const de_GetSchemaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSchemaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetSchemaByDefinitionCommand
 */
export const de_GetSchemaByDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSchemaByDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetSchemaByDefinitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetSchemaByDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetSchemaByDefinitionCommandError
 */
const de_GetSchemaByDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSchemaByDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetSchemaVersionCommand
 */
export const de_GetSchemaVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSchemaVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetSchemaVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetSchemaVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetSchemaVersionCommandError
 */
const de_GetSchemaVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSchemaVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetSchemaVersionsDiffCommand
 */
export const de_GetSchemaVersionsDiffCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSchemaVersionsDiffCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetSchemaVersionsDiffCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetSchemaVersionsDiffCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetSchemaVersionsDiffCommandError
 */
const de_GetSchemaVersionsDiffCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSchemaVersionsDiffCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetSecurityConfigurationCommand
 */
export const de_GetSecurityConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSecurityConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetSecurityConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetSecurityConfigurationResponse(data, context);
  const response: GetSecurityConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetSecurityConfigurationCommandError
 */
const de_GetSecurityConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSecurityConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetSecurityConfigurationsCommand
 */
export const de_GetSecurityConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSecurityConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetSecurityConfigurationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetSecurityConfigurationsResponse(data, context);
  const response: GetSecurityConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetSecurityConfigurationsCommandError
 */
const de_GetSecurityConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSecurityConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetSessionCommand
 */
export const de_GetSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSessionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetSessionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetSessionResponse(data, context);
  const response: GetSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetSessionCommandError
 */
const de_GetSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetStatementCommand
 */
export const de_GetStatementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStatementCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetStatementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetStatementResponse(data, context);
  const response: GetStatementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetStatementCommandError
 */
const de_GetStatementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStatementCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "IllegalSessionStateException":
    case "com.amazonaws.glue#IllegalSessionStateException":
      throw await de_IllegalSessionStateExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetTableCommand
 */
export const de_GetTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetTableResponse(data, context);
  const response: GetTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetTableCommandError
 */
const de_GetTableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "FederationSourceException":
    case "com.amazonaws.glue#FederationSourceException":
      throw await de_FederationSourceExceptionRes(parsedOutput, context);
    case "FederationSourceRetryableException":
    case "com.amazonaws.glue#FederationSourceRetryableException":
      throw await de_FederationSourceRetryableExceptionRes(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await de_GlueEncryptionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotReadyException":
    case "com.amazonaws.glue#ResourceNotReadyException":
      throw await de_ResourceNotReadyExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetTablesCommand
 */
export const de_GetTablesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTablesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetTablesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetTablesResponse(data, context);
  const response: GetTablesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetTablesCommandError
 */
const de_GetTablesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTablesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "FederationSourceException":
    case "com.amazonaws.glue#FederationSourceException":
      throw await de_FederationSourceExceptionRes(parsedOutput, context);
    case "FederationSourceRetryableException":
    case "com.amazonaws.glue#FederationSourceRetryableException":
      throw await de_FederationSourceRetryableExceptionRes(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await de_GlueEncryptionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetTableVersionCommand
 */
export const de_GetTableVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTableVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetTableVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetTableVersionResponse(data, context);
  const response: GetTableVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetTableVersionCommandError
 */
const de_GetTableVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTableVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await de_GlueEncryptionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetTableVersionsCommand
 */
export const de_GetTableVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTableVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetTableVersionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetTableVersionsResponse(data, context);
  const response: GetTableVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetTableVersionsCommandError
 */
const de_GetTableVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTableVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await de_GlueEncryptionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetTagsCommand
 */
export const de_GetTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetTagsCommandError
 */
const de_GetTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetTriggerCommand
 */
export const de_GetTriggerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTriggerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetTriggerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetTriggerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetTriggerCommandError
 */
const de_GetTriggerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTriggerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetTriggersCommand
 */
export const de_GetTriggersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTriggersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetTriggersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetTriggersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetTriggersCommandError
 */
const de_GetTriggersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTriggersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetUnfilteredPartitionMetadataCommand
 */
export const de_GetUnfilteredPartitionMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUnfilteredPartitionMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetUnfilteredPartitionMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetUnfilteredPartitionMetadataResponse(data, context);
  const response: GetUnfilteredPartitionMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetUnfilteredPartitionMetadataCommandError
 */
const de_GetUnfilteredPartitionMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUnfilteredPartitionMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "FederationSourceException":
    case "com.amazonaws.glue#FederationSourceException":
      throw await de_FederationSourceExceptionRes(parsedOutput, context);
    case "FederationSourceRetryableException":
    case "com.amazonaws.glue#FederationSourceRetryableException":
      throw await de_FederationSourceRetryableExceptionRes(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await de_GlueEncryptionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    case "PermissionTypeMismatchException":
    case "com.amazonaws.glue#PermissionTypeMismatchException":
      throw await de_PermissionTypeMismatchExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetUnfilteredPartitionsMetadataCommand
 */
export const de_GetUnfilteredPartitionsMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUnfilteredPartitionsMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetUnfilteredPartitionsMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetUnfilteredPartitionsMetadataResponse(data, context);
  const response: GetUnfilteredPartitionsMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetUnfilteredPartitionsMetadataCommandError
 */
const de_GetUnfilteredPartitionsMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUnfilteredPartitionsMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "FederationSourceException":
    case "com.amazonaws.glue#FederationSourceException":
      throw await de_FederationSourceExceptionRes(parsedOutput, context);
    case "FederationSourceRetryableException":
    case "com.amazonaws.glue#FederationSourceRetryableException":
      throw await de_FederationSourceRetryableExceptionRes(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await de_GlueEncryptionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    case "PermissionTypeMismatchException":
    case "com.amazonaws.glue#PermissionTypeMismatchException":
      throw await de_PermissionTypeMismatchExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetUnfilteredTableMetadataCommand
 */
export const de_GetUnfilteredTableMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUnfilteredTableMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetUnfilteredTableMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetUnfilteredTableMetadataResponse(data, context);
  const response: GetUnfilteredTableMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetUnfilteredTableMetadataCommandError
 */
const de_GetUnfilteredTableMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUnfilteredTableMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "FederationSourceException":
    case "com.amazonaws.glue#FederationSourceException":
      throw await de_FederationSourceExceptionRes(parsedOutput, context);
    case "FederationSourceRetryableException":
    case "com.amazonaws.glue#FederationSourceRetryableException":
      throw await de_FederationSourceRetryableExceptionRes(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await de_GlueEncryptionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    case "PermissionTypeMismatchException":
    case "com.amazonaws.glue#PermissionTypeMismatchException":
      throw await de_PermissionTypeMismatchExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetUserDefinedFunctionCommand
 */
export const de_GetUserDefinedFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserDefinedFunctionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetUserDefinedFunctionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetUserDefinedFunctionResponse(data, context);
  const response: GetUserDefinedFunctionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetUserDefinedFunctionCommandError
 */
const de_GetUserDefinedFunctionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserDefinedFunctionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await de_GlueEncryptionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetUserDefinedFunctionsCommand
 */
export const de_GetUserDefinedFunctionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserDefinedFunctionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetUserDefinedFunctionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetUserDefinedFunctionsResponse(data, context);
  const response: GetUserDefinedFunctionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetUserDefinedFunctionsCommandError
 */
const de_GetUserDefinedFunctionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserDefinedFunctionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await de_GlueEncryptionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetWorkflowCommand
 */
export const de_GetWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetWorkflowCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetWorkflowResponse(data, context);
  const response: GetWorkflowCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetWorkflowCommandError
 */
const de_GetWorkflowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetWorkflowRunCommand
 */
export const de_GetWorkflowRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetWorkflowRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetWorkflowRunResponse(data, context);
  const response: GetWorkflowRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetWorkflowRunCommandError
 */
const de_GetWorkflowRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetWorkflowRunPropertiesCommand
 */
export const de_GetWorkflowRunPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowRunPropertiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetWorkflowRunPropertiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetWorkflowRunPropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetWorkflowRunPropertiesCommandError
 */
const de_GetWorkflowRunPropertiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowRunPropertiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetWorkflowRunsCommand
 */
export const de_GetWorkflowRunsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowRunsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetWorkflowRunsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetWorkflowRunsResponse(data, context);
  const response: GetWorkflowRunsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetWorkflowRunsCommandError
 */
const de_GetWorkflowRunsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowRunsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ImportCatalogToGlueCommand
 */
export const de_ImportCatalogToGlueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportCatalogToGlueCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ImportCatalogToGlueCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ImportCatalogToGlueCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ImportCatalogToGlueCommandError
 */
const de_ImportCatalogToGlueCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportCatalogToGlueCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListBlueprintsCommand
 */
export const de_ListBlueprintsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBlueprintsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListBlueprintsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListBlueprintsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListBlueprintsCommandError
 */
const de_ListBlueprintsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBlueprintsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListCrawlersCommand
 */
export const de_ListCrawlersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCrawlersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListCrawlersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListCrawlersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListCrawlersCommandError
 */
const de_ListCrawlersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCrawlersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListCrawlsCommand
 */
export const de_ListCrawlsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCrawlsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListCrawlsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListCrawlsResponse(data, context);
  const response: ListCrawlsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListCrawlsCommandError
 */
const de_ListCrawlsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCrawlsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListCustomEntityTypesCommand
 */
export const de_ListCustomEntityTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomEntityTypesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListCustomEntityTypesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListCustomEntityTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListCustomEntityTypesCommandError
 */
const de_ListCustomEntityTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomEntityTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListDataQualityResultsCommand
 */
export const de_ListDataQualityResultsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataQualityResultsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDataQualityResultsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDataQualityResultsResponse(data, context);
  const response: ListDataQualityResultsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListDataQualityResultsCommandError
 */
const de_ListDataQualityResultsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataQualityResultsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListDataQualityRuleRecommendationRunsCommand
 */
export const de_ListDataQualityRuleRecommendationRunsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataQualityRuleRecommendationRunsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDataQualityRuleRecommendationRunsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDataQualityRuleRecommendationRunsResponse(data, context);
  const response: ListDataQualityRuleRecommendationRunsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListDataQualityRuleRecommendationRunsCommandError
 */
const de_ListDataQualityRuleRecommendationRunsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataQualityRuleRecommendationRunsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListDataQualityRulesetEvaluationRunsCommand
 */
export const de_ListDataQualityRulesetEvaluationRunsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataQualityRulesetEvaluationRunsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDataQualityRulesetEvaluationRunsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDataQualityRulesetEvaluationRunsResponse(data, context);
  const response: ListDataQualityRulesetEvaluationRunsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListDataQualityRulesetEvaluationRunsCommandError
 */
const de_ListDataQualityRulesetEvaluationRunsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataQualityRulesetEvaluationRunsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListDataQualityRulesetsCommand
 */
export const de_ListDataQualityRulesetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataQualityRulesetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDataQualityRulesetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDataQualityRulesetsResponse(data, context);
  const response: ListDataQualityRulesetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListDataQualityRulesetsCommandError
 */
const de_ListDataQualityRulesetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataQualityRulesetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListDevEndpointsCommand
 */
export const de_ListDevEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevEndpointsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDevEndpointsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListDevEndpointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListDevEndpointsCommandError
 */
const de_ListDevEndpointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevEndpointsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListJobsCommand
 */
export const de_ListJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListJobsCommandError
 */
const de_ListJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListMLTransformsCommand
 */
export const de_ListMLTransformsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMLTransformsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListMLTransformsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListMLTransformsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListMLTransformsCommandError
 */
const de_ListMLTransformsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMLTransformsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListRegistriesCommand
 */
export const de_ListRegistriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRegistriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListRegistriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListRegistriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListRegistriesCommandError
 */
const de_ListRegistriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRegistriesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListSchemasCommand
 */
export const de_ListSchemasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSchemasCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListSchemasCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListSchemasCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListSchemasCommandError
 */
const de_ListSchemasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSchemasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListSchemaVersionsCommand
 */
export const de_ListSchemaVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSchemaVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListSchemaVersionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListSchemaVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListSchemaVersionsCommandError
 */
const de_ListSchemaVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSchemaVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListSessionsCommand
 */
export const de_ListSessionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSessionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListSessionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListSessionsResponse(data, context);
  const response: ListSessionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListSessionsCommandError
 */
const de_ListSessionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSessionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListStatementsCommand
 */
export const de_ListStatementsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStatementsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListStatementsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListStatementsResponse(data, context);
  const response: ListStatementsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListStatementsCommandError
 */
const de_ListStatementsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStatementsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "IllegalSessionStateException":
    case "com.amazonaws.glue#IllegalSessionStateException":
      throw await de_IllegalSessionStateExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListTriggersCommand
 */
export const de_ListTriggersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTriggersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTriggersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListTriggersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListTriggersCommandError
 */
const de_ListTriggersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTriggersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListWorkflowsCommand
 */
export const de_ListWorkflowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkflowsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListWorkflowsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListWorkflowsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListWorkflowsCommandError
 */
const de_ListWorkflowsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkflowsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutDataCatalogEncryptionSettingsCommand
 */
export const de_PutDataCatalogEncryptionSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDataCatalogEncryptionSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutDataCatalogEncryptionSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutDataCatalogEncryptionSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1PutDataCatalogEncryptionSettingsCommandError
 */
const de_PutDataCatalogEncryptionSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDataCatalogEncryptionSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutResourcePolicyCommand
 */
export const de_PutResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1PutResourcePolicyCommandError
 */
const de_PutResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConditionCheckFailureException":
    case "com.amazonaws.glue#ConditionCheckFailureException":
      throw await de_ConditionCheckFailureExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutSchemaVersionMetadataCommand
 */
export const de_PutSchemaVersionMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSchemaVersionMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutSchemaVersionMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutSchemaVersionMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1PutSchemaVersionMetadataCommandError
 */
const de_PutSchemaVersionMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSchemaVersionMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await de_ResourceNumberLimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutWorkflowRunPropertiesCommand
 */
export const de_PutWorkflowRunPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutWorkflowRunPropertiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutWorkflowRunPropertiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutWorkflowRunPropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1PutWorkflowRunPropertiesCommandError
 */
const de_PutWorkflowRunPropertiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutWorkflowRunPropertiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await de_ResourceNumberLimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1QuerySchemaVersionMetadataCommand
 */
export const de_QuerySchemaVersionMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QuerySchemaVersionMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_QuerySchemaVersionMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: QuerySchemaVersionMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1QuerySchemaVersionMetadataCommandError
 */
const de_QuerySchemaVersionMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QuerySchemaVersionMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RegisterSchemaVersionCommand
 */
export const de_RegisterSchemaVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterSchemaVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RegisterSchemaVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: RegisterSchemaVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1RegisterSchemaVersionCommandError
 */
const de_RegisterSchemaVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterSchemaVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await de_ResourceNumberLimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RemoveSchemaVersionMetadataCommand
 */
export const de_RemoveSchemaVersionMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveSchemaVersionMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RemoveSchemaVersionMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: RemoveSchemaVersionMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1RemoveSchemaVersionMetadataCommandError
 */
const de_RemoveSchemaVersionMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveSchemaVersionMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ResetJobBookmarkCommand
 */
export const de_ResetJobBookmarkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetJobBookmarkCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ResetJobBookmarkCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ResetJobBookmarkCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ResetJobBookmarkCommandError
 */
const de_ResetJobBookmarkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetJobBookmarkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ResumeWorkflowRunCommand
 */
export const de_ResumeWorkflowRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResumeWorkflowRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ResumeWorkflowRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ResumeWorkflowRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ResumeWorkflowRunCommandError
 */
const de_ResumeWorkflowRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResumeWorkflowRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentRunsExceededException":
    case "com.amazonaws.glue#ConcurrentRunsExceededException":
      throw await de_ConcurrentRunsExceededExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "IllegalWorkflowStateException":
    case "com.amazonaws.glue#IllegalWorkflowStateException":
      throw await de_IllegalWorkflowStateExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RunStatementCommand
 */
export const de_RunStatementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RunStatementCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RunStatementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: RunStatementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1RunStatementCommandError
 */
const de_RunStatementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RunStatementCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "IllegalSessionStateException":
    case "com.amazonaws.glue#IllegalSessionStateException":
      throw await de_IllegalSessionStateExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await de_ResourceNumberLimitExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.glue#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1SearchTablesCommand
 */
export const de_SearchTablesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchTablesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SearchTablesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SearchTablesResponse(data, context);
  const response: SearchTablesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1SearchTablesCommandError
 */
const de_SearchTablesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchTablesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartBlueprintRunCommand
 */
export const de_StartBlueprintRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartBlueprintRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartBlueprintRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartBlueprintRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartBlueprintRunCommandError
 */
const de_StartBlueprintRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartBlueprintRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "IllegalBlueprintStateException":
    case "com.amazonaws.glue#IllegalBlueprintStateException":
      throw await de_IllegalBlueprintStateExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await de_ResourceNumberLimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartCrawlerCommand
 */
export const de_StartCrawlerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCrawlerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartCrawlerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartCrawlerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartCrawlerCommandError
 */
const de_StartCrawlerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCrawlerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CrawlerRunningException":
    case "com.amazonaws.glue#CrawlerRunningException":
      throw await de_CrawlerRunningExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartCrawlerScheduleCommand
 */
export const de_StartCrawlerScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCrawlerScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartCrawlerScheduleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartCrawlerScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartCrawlerScheduleCommandError
 */
const de_StartCrawlerScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCrawlerScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "NoScheduleException":
    case "com.amazonaws.glue#NoScheduleException":
      throw await de_NoScheduleExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    case "SchedulerRunningException":
    case "com.amazonaws.glue#SchedulerRunningException":
      throw await de_SchedulerRunningExceptionRes(parsedOutput, context);
    case "SchedulerTransitioningException":
    case "com.amazonaws.glue#SchedulerTransitioningException":
      throw await de_SchedulerTransitioningExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartDataQualityRuleRecommendationRunCommand
 */
export const de_StartDataQualityRuleRecommendationRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDataQualityRuleRecommendationRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartDataQualityRuleRecommendationRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartDataQualityRuleRecommendationRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartDataQualityRuleRecommendationRunCommandError
 */
const de_StartDataQualityRuleRecommendationRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDataQualityRuleRecommendationRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.glue#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartDataQualityRulesetEvaluationRunCommand
 */
export const de_StartDataQualityRulesetEvaluationRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDataQualityRulesetEvaluationRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartDataQualityRulesetEvaluationRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartDataQualityRulesetEvaluationRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartDataQualityRulesetEvaluationRunCommandError
 */
const de_StartDataQualityRulesetEvaluationRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDataQualityRulesetEvaluationRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.glue#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartExportLabelsTaskRunCommand
 */
export const de_StartExportLabelsTaskRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartExportLabelsTaskRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartExportLabelsTaskRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartExportLabelsTaskRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartExportLabelsTaskRunCommandError
 */
const de_StartExportLabelsTaskRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartExportLabelsTaskRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartImportLabelsTaskRunCommand
 */
export const de_StartImportLabelsTaskRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImportLabelsTaskRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartImportLabelsTaskRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartImportLabelsTaskRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartImportLabelsTaskRunCommandError
 */
const de_StartImportLabelsTaskRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImportLabelsTaskRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await de_ResourceNumberLimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartJobRunCommand
 */
export const de_StartJobRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartJobRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartJobRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartJobRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartJobRunCommandError
 */
const de_StartJobRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartJobRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentRunsExceededException":
    case "com.amazonaws.glue#ConcurrentRunsExceededException":
      throw await de_ConcurrentRunsExceededExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await de_ResourceNumberLimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartMLEvaluationTaskRunCommand
 */
export const de_StartMLEvaluationTaskRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMLEvaluationTaskRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartMLEvaluationTaskRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartMLEvaluationTaskRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartMLEvaluationTaskRunCommandError
 */
const de_StartMLEvaluationTaskRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMLEvaluationTaskRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentRunsExceededException":
    case "com.amazonaws.glue#ConcurrentRunsExceededException":
      throw await de_ConcurrentRunsExceededExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "MLTransformNotReadyException":
    case "com.amazonaws.glue#MLTransformNotReadyException":
      throw await de_MLTransformNotReadyExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartMLLabelingSetGenerationTaskRunCommand
 */
export const de_StartMLLabelingSetGenerationTaskRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMLLabelingSetGenerationTaskRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartMLLabelingSetGenerationTaskRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartMLLabelingSetGenerationTaskRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartMLLabelingSetGenerationTaskRunCommandError
 */
const de_StartMLLabelingSetGenerationTaskRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMLLabelingSetGenerationTaskRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentRunsExceededException":
    case "com.amazonaws.glue#ConcurrentRunsExceededException":
      throw await de_ConcurrentRunsExceededExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartTriggerCommand
 */
export const de_StartTriggerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTriggerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartTriggerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartTriggerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartTriggerCommandError
 */
const de_StartTriggerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTriggerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentRunsExceededException":
    case "com.amazonaws.glue#ConcurrentRunsExceededException":
      throw await de_ConcurrentRunsExceededExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await de_ResourceNumberLimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartWorkflowRunCommand
 */
export const de_StartWorkflowRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartWorkflowRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartWorkflowRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartWorkflowRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartWorkflowRunCommandError
 */
const de_StartWorkflowRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartWorkflowRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentRunsExceededException":
    case "com.amazonaws.glue#ConcurrentRunsExceededException":
      throw await de_ConcurrentRunsExceededExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await de_ResourceNumberLimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StopCrawlerCommand
 */
export const de_StopCrawlerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopCrawlerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopCrawlerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StopCrawlerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StopCrawlerCommandError
 */
const de_StopCrawlerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopCrawlerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CrawlerNotRunningException":
    case "com.amazonaws.glue#CrawlerNotRunningException":
      throw await de_CrawlerNotRunningExceptionRes(parsedOutput, context);
    case "CrawlerStoppingException":
    case "com.amazonaws.glue#CrawlerStoppingException":
      throw await de_CrawlerStoppingExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StopCrawlerScheduleCommand
 */
export const de_StopCrawlerScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopCrawlerScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopCrawlerScheduleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StopCrawlerScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StopCrawlerScheduleCommandError
 */
const de_StopCrawlerScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopCrawlerScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    case "SchedulerNotRunningException":
    case "com.amazonaws.glue#SchedulerNotRunningException":
      throw await de_SchedulerNotRunningExceptionRes(parsedOutput, context);
    case "SchedulerTransitioningException":
    case "com.amazonaws.glue#SchedulerTransitioningException":
      throw await de_SchedulerTransitioningExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StopSessionCommand
 */
export const de_StopSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopSessionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopSessionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StopSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StopSessionCommandError
 */
const de_StopSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "IllegalSessionStateException":
    case "com.amazonaws.glue#IllegalSessionStateException":
      throw await de_IllegalSessionStateExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StopTriggerCommand
 */
export const de_StopTriggerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopTriggerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopTriggerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StopTriggerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StopTriggerCommandError
 */
const de_StopTriggerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopTriggerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StopWorkflowRunCommand
 */
export const de_StopWorkflowRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopWorkflowRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopWorkflowRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StopWorkflowRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StopWorkflowRunCommandError
 */
const de_StopWorkflowRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopWorkflowRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "IllegalWorkflowStateException":
    case "com.amazonaws.glue#IllegalWorkflowStateException":
      throw await de_IllegalWorkflowStateExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateBlueprintCommand
 */
export const de_UpdateBlueprintCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBlueprintCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateBlueprintCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateBlueprintCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateBlueprintCommandError
 */
const de_UpdateBlueprintCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBlueprintCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "IllegalBlueprintStateException":
    case "com.amazonaws.glue#IllegalBlueprintStateException":
      throw await de_IllegalBlueprintStateExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateClassifierCommand
 */
export const de_UpdateClassifierCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClassifierCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateClassifierCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateClassifierCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateClassifierCommandError
 */
const de_UpdateClassifierCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClassifierCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    case "VersionMismatchException":
    case "com.amazonaws.glue#VersionMismatchException":
      throw await de_VersionMismatchExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateColumnStatisticsForPartitionCommand
 */
export const de_UpdateColumnStatisticsForPartitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateColumnStatisticsForPartitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateColumnStatisticsForPartitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateColumnStatisticsForPartitionResponse(data, context);
  const response: UpdateColumnStatisticsForPartitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateColumnStatisticsForPartitionCommandError
 */
const de_UpdateColumnStatisticsForPartitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateColumnStatisticsForPartitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await de_GlueEncryptionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateColumnStatisticsForTableCommand
 */
export const de_UpdateColumnStatisticsForTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateColumnStatisticsForTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateColumnStatisticsForTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateColumnStatisticsForTableResponse(data, context);
  const response: UpdateColumnStatisticsForTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateColumnStatisticsForTableCommandError
 */
const de_UpdateColumnStatisticsForTableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateColumnStatisticsForTableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await de_GlueEncryptionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateConnectionCommand
 */
export const de_UpdateConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateConnectionCommandError
 */
const de_UpdateConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await de_GlueEncryptionExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateCrawlerCommand
 */
export const de_UpdateCrawlerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCrawlerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateCrawlerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateCrawlerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateCrawlerCommandError
 */
const de_UpdateCrawlerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCrawlerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CrawlerRunningException":
    case "com.amazonaws.glue#CrawlerRunningException":
      throw await de_CrawlerRunningExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    case "VersionMismatchException":
    case "com.amazonaws.glue#VersionMismatchException":
      throw await de_VersionMismatchExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateCrawlerScheduleCommand
 */
export const de_UpdateCrawlerScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCrawlerScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateCrawlerScheduleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateCrawlerScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateCrawlerScheduleCommandError
 */
const de_UpdateCrawlerScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCrawlerScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    case "SchedulerTransitioningException":
    case "com.amazonaws.glue#SchedulerTransitioningException":
      throw await de_SchedulerTransitioningExceptionRes(parsedOutput, context);
    case "VersionMismatchException":
    case "com.amazonaws.glue#VersionMismatchException":
      throw await de_VersionMismatchExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateDatabaseCommand
 */
export const de_UpdateDatabaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatabaseCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateDatabaseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateDatabaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateDatabaseCommandError
 */
const de_UpdateDatabaseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatabaseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await de_GlueEncryptionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateDataQualityRulesetCommand
 */
export const de_UpdateDataQualityRulesetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataQualityRulesetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateDataQualityRulesetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateDataQualityRulesetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateDataQualityRulesetCommandError
 */
const de_UpdateDataQualityRulesetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataQualityRulesetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.glue#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await de_ResourceNumberLimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateDevEndpointCommand
 */
export const de_UpdateDevEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDevEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateDevEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateDevEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateDevEndpointCommandError
 */
const de_UpdateDevEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDevEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.glue#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateJobCommand
 */
export const de_UpdateJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateJobCommandError
 */
const de_UpdateJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateJobFromSourceControlCommand
 */
export const de_UpdateJobFromSourceControlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobFromSourceControlCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateJobFromSourceControlCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateJobFromSourceControlCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateJobFromSourceControlCommandError
 */
const de_UpdateJobFromSourceControlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobFromSourceControlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.glue#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateMLTransformCommand
 */
export const de_UpdateMLTransformCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMLTransformCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateMLTransformCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateMLTransformCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateMLTransformCommandError
 */
const de_UpdateMLTransformCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMLTransformCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdatePartitionCommand
 */
export const de_UpdatePartitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePartitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdatePartitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdatePartitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdatePartitionCommandError
 */
const de_UpdatePartitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePartitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await de_GlueEncryptionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateRegistryCommand
 */
export const de_UpdateRegistryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRegistryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateRegistryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateRegistryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateRegistryCommandError
 */
const de_UpdateRegistryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRegistryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateSchemaCommand
 */
export const de_UpdateSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSchemaCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateSchemaCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateSchemaCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateSchemaCommandError
 */
const de_UpdateSchemaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSchemaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateSourceControlFromJobCommand
 */
export const de_UpdateSourceControlFromJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSourceControlFromJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateSourceControlFromJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateSourceControlFromJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateSourceControlFromJobCommandError
 */
const de_UpdateSourceControlFromJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSourceControlFromJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.glue#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateTableCommand
 */
export const de_UpdateTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateTableCommandError
 */
const de_UpdateTableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await de_GlueEncryptionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotReadyException":
    case "com.amazonaws.glue#ResourceNotReadyException":
      throw await de_ResourceNotReadyExceptionRes(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await de_ResourceNumberLimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateTriggerCommand
 */
export const de_UpdateTriggerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTriggerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateTriggerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateTriggerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateTriggerCommandError
 */
const de_UpdateTriggerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTriggerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateUserDefinedFunctionCommand
 */
export const de_UpdateUserDefinedFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserDefinedFunctionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateUserDefinedFunctionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateUserDefinedFunctionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateUserDefinedFunctionCommandError
 */
const de_UpdateUserDefinedFunctionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserDefinedFunctionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await de_GlueEncryptionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateWorkflowCommand
 */
export const de_UpdateWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkflowCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateWorkflowCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateWorkflowCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateWorkflowCommandError
 */
const de_UpdateWorkflowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkflowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1AlreadyExistsExceptionRes
 */
const de_AlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new AlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ConcurrentModificationExceptionRes
 */
const de_ConcurrentModificationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ConcurrentModificationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ConcurrentRunsExceededExceptionRes
 */
const de_ConcurrentRunsExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentRunsExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ConcurrentRunsExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ConditionCheckFailureExceptionRes
 */
const de_ConditionCheckFailureExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConditionCheckFailureException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ConditionCheckFailureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1CrawlerNotRunningExceptionRes
 */
const de_CrawlerNotRunningExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CrawlerNotRunningException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new CrawlerNotRunningException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1CrawlerRunningExceptionRes
 */
const de_CrawlerRunningExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CrawlerRunningException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new CrawlerRunningException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1CrawlerStoppingExceptionRes
 */
const de_CrawlerStoppingExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CrawlerStoppingException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new CrawlerStoppingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1EntityNotFoundExceptionRes
 */
const de_EntityNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EntityNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new EntityNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1FederatedResourceAlreadyExistsExceptionRes
 */
const de_FederatedResourceAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FederatedResourceAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new FederatedResourceAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1FederationSourceExceptionRes
 */
const de_FederationSourceExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FederationSourceException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new FederationSourceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1FederationSourceRetryableExceptionRes
 */
const de_FederationSourceRetryableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FederationSourceRetryableException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new FederationSourceRetryableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1GlueEncryptionExceptionRes
 */
const de_GlueEncryptionExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<GlueEncryptionException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new GlueEncryptionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1IdempotentParameterMismatchExceptionRes
 */
const de_IdempotentParameterMismatchExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IdempotentParameterMismatchException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new IdempotentParameterMismatchException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1IllegalBlueprintStateExceptionRes
 */
const de_IllegalBlueprintStateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IllegalBlueprintStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new IllegalBlueprintStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1IllegalSessionStateExceptionRes
 */
const de_IllegalSessionStateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IllegalSessionStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new IllegalSessionStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1IllegalWorkflowStateExceptionRes
 */
const de_IllegalWorkflowStateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IllegalWorkflowStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new IllegalWorkflowStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InternalServiceExceptionRes
 */
const de_InternalServiceExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InternalServiceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidInputExceptionRes
 */
const de_InvalidInputExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidInputException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidStateExceptionRes
 */
const de_InvalidStateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1MLTransformNotReadyExceptionRes
 */
const de_MLTransformNotReadyExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MLTransformNotReadyException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new MLTransformNotReadyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NoScheduleExceptionRes
 */
const de_NoScheduleExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<NoScheduleException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new NoScheduleException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1OperationTimeoutExceptionRes
 */
const de_OperationTimeoutExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationTimeoutException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new OperationTimeoutException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1PermissionTypeMismatchExceptionRes
 */
const de_PermissionTypeMismatchExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PermissionTypeMismatchException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new PermissionTypeMismatchException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceNotReadyExceptionRes
 */
const de_ResourceNotReadyExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotReadyException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ResourceNotReadyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceNumberLimitExceededExceptionRes
 */
const de_ResourceNumberLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNumberLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ResourceNumberLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1SchedulerNotRunningExceptionRes
 */
const de_SchedulerNotRunningExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SchedulerNotRunningException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new SchedulerNotRunningException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1SchedulerRunningExceptionRes
 */
const de_SchedulerRunningExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SchedulerRunningException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new SchedulerRunningException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1SchedulerTransitioningExceptionRes
 */
const de_SchedulerTransitioningExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SchedulerTransitioningException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new SchedulerTransitioningException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1VersionMismatchExceptionRes
 */
const de_VersionMismatchExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<VersionMismatchException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new VersionMismatchException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_Action omitted.

// se_ActionList omitted.

// se_AdditionalOptions omitted.

// se_AdditionalPlanOptionsMap omitted.

// se_Aggregate omitted.

// se_AggregateOperation omitted.

// se_AggregateOperations omitted.

// se_AmazonRedshiftAdvancedOption omitted.

// se_AmazonRedshiftAdvancedOptions omitted.

// se_AmazonRedshiftNodeData omitted.

// se_AmazonRedshiftSource omitted.

// se_AmazonRedshiftTarget omitted.

/**
 * serializeAws_json1_1ApplyMapping
 */
const se_ApplyMapping = (input: ApplyMapping, context: __SerdeContext): any => {
  return take(input, {
    Inputs: _json,
    Mapping: (_) => se_Mappings(_, context),
    Name: [],
  });
};

// se_AthenaConnectorSource omitted.

// se_AuditColumnNamesList omitted.

// se_AuditContext omitted.

// se_BasicCatalogTarget omitted.

/**
 * serializeAws_json1_1BatchCreatePartitionRequest
 */
const se_BatchCreatePartitionRequest = (input: BatchCreatePartitionRequest, context: __SerdeContext): any => {
  return take(input, {
    CatalogId: [],
    DatabaseName: [],
    PartitionInputList: (_) => se_PartitionInputList(_, context),
    TableName: [],
  });
};

// se_BatchDeleteConnectionRequest omitted.

// se_BatchDeletePartitionRequest omitted.

// se_BatchDeletePartitionValueList omitted.

// se_BatchDeleteTableNameList omitted.

// se_BatchDeleteTableRequest omitted.

// se_BatchDeleteTableVersionList omitted.

// se_BatchDeleteTableVersionRequest omitted.

// se_BatchGetBlueprintNames omitted.

// se_BatchGetBlueprintsRequest omitted.

// se_BatchGetCrawlersRequest omitted.

// se_BatchGetCustomEntityTypesRequest omitted.

// se_BatchGetDataQualityResultRequest omitted.

// se_BatchGetDevEndpointsRequest omitted.

// se_BatchGetJobsRequest omitted.

// se_BatchGetPartitionRequest omitted.

// se_BatchGetPartitionValueList omitted.

// se_BatchGetTriggersRequest omitted.

// se_BatchGetWorkflowsRequest omitted.

// se_BatchStopJobRunJobRunIdList omitted.

// se_BatchStopJobRunRequest omitted.

/**
 * serializeAws_json1_1BatchUpdatePartitionRequest
 */
const se_BatchUpdatePartitionRequest = (input: BatchUpdatePartitionRequest, context: __SerdeContext): any => {
  return take(input, {
    CatalogId: [],
    DatabaseName: [],
    Entries: (_) => se_BatchUpdatePartitionRequestEntryList(_, context),
    TableName: [],
  });
};

/**
 * serializeAws_json1_1BatchUpdatePartitionRequestEntry
 */
const se_BatchUpdatePartitionRequestEntry = (input: BatchUpdatePartitionRequestEntry, context: __SerdeContext): any => {
  return take(input, {
    PartitionInput: (_) => se_PartitionInput(_, context),
    PartitionValueList: _json,
  });
};

/**
 * serializeAws_json1_1BatchUpdatePartitionRequestEntryList
 */
const se_BatchUpdatePartitionRequestEntryList = (
  input: BatchUpdatePartitionRequestEntry[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_BatchUpdatePartitionRequestEntry(entry, context);
    });
};

/**
 * serializeAws_json1_1BinaryColumnStatisticsData
 */
const se_BinaryColumnStatisticsData = (input: BinaryColumnStatisticsData, context: __SerdeContext): any => {
  return take(input, {
    AverageLength: __serializeFloat,
    MaximumLength: [],
    NumberOfNulls: [],
  });
};

// se_BooleanColumnStatisticsData omitted.

// se_BoundedPartitionValueList omitted.

// se_CancelDataQualityRuleRecommendationRunRequest omitted.

// se_CancelDataQualityRulesetEvaluationRunRequest omitted.

// se_CancelMLTaskRunRequest omitted.

// se_CancelStatementRequest omitted.

// se_CatalogDeltaSource omitted.

// se_CatalogEntries omitted.

// se_CatalogEntry omitted.

// se_CatalogHudiSource omitted.

/**
 * serializeAws_json1_1CatalogKafkaSource
 */
const se_CatalogKafkaSource = (input: CatalogKafkaSource, context: __SerdeContext): any => {
  return take(input, {
    DataPreviewOptions: _json,
    Database: [],
    DetectSchema: [],
    Name: [],
    StreamingOptions: (_) => se_KafkaStreamingSourceOptions(_, context),
    Table: [],
    WindowSize: [],
  });
};

/**
 * serializeAws_json1_1CatalogKinesisSource
 */
const se_CatalogKinesisSource = (input: CatalogKinesisSource, context: __SerdeContext): any => {
  return take(input, {
    DataPreviewOptions: _json,
    Database: [],
    DetectSchema: [],
    Name: [],
    StreamingOptions: (_) => se_KinesisStreamingSourceOptions(_, context),
    Table: [],
    WindowSize: [],
  });
};

// se_CatalogSchemaChangePolicy omitted.

// se_CatalogSource omitted.

// se_CatalogTablesList omitted.

// se_CatalogTarget omitted.

// se_CatalogTargetList omitted.

// se_CheckSchemaVersionValidityInput omitted.

// se_ClassifierNameList omitted.

// se_CloudWatchEncryption omitted.

/**
 * serializeAws_json1_1CodeGenConfigurationNode
 */
const se_CodeGenConfigurationNode = (input: CodeGenConfigurationNode, context: __SerdeContext): any => {
  return take(input, {
    Aggregate: _json,
    AmazonRedshiftSource: _json,
    AmazonRedshiftTarget: _json,
    ApplyMapping: (_) => se_ApplyMapping(_, context),
    AthenaConnectorSource: _json,
    CatalogDeltaSource: _json,
    CatalogHudiSource: _json,
    CatalogKafkaSource: (_) => se_CatalogKafkaSource(_, context),
    CatalogKinesisSource: (_) => se_CatalogKinesisSource(_, context),
    CatalogSource: _json,
    CatalogTarget: _json,
    CustomCode: _json,
    DirectJDBCSource: _json,
    DirectKafkaSource: (_) => se_DirectKafkaSource(_, context),
    DirectKinesisSource: (_) => se_DirectKinesisSource(_, context),
    DropDuplicates: _json,
    DropFields: _json,
    DropNullFields: _json,
    DynamicTransform: _json,
    DynamoDBCatalogSource: _json,
    EvaluateDataQuality: _json,
    EvaluateDataQualityMultiFrame: _json,
    FillMissingValues: _json,
    Filter: _json,
    GovernedCatalogSource: _json,
    GovernedCatalogTarget: _json,
    JDBCConnectorSource: _json,
    JDBCConnectorTarget: _json,
    Join: _json,
    Merge: _json,
    MicrosoftSQLServerCatalogSource: _json,
    MicrosoftSQLServerCatalogTarget: _json,
    MySQLCatalogSource: _json,
    MySQLCatalogTarget: _json,
    OracleSQLCatalogSource: _json,
    OracleSQLCatalogTarget: _json,
    PIIDetection: (_) => se_PIIDetection(_, context),
    PostgreSQLCatalogSource: _json,
    PostgreSQLCatalogTarget: _json,
    RedshiftSource: _json,
    RedshiftTarget: _json,
    RelationalCatalogSource: _json,
    RenameField: _json,
    S3CatalogDeltaSource: _json,
    S3CatalogHudiSource: _json,
    S3CatalogSource: _json,
    S3CatalogTarget: _json,
    S3CsvSource: _json,
    S3DeltaCatalogTarget: _json,
    S3DeltaDirectTarget: _json,
    S3DeltaSource: _json,
    S3DirectTarget: _json,
    S3GlueParquetTarget: _json,
    S3HudiCatalogTarget: _json,
    S3HudiDirectTarget: _json,
    S3HudiSource: _json,
    S3JsonSource: _json,
    S3ParquetSource: _json,
    SelectFields: _json,
    SelectFromCollection: _json,
    SparkConnectorSource: _json,
    SparkConnectorTarget: _json,
    SparkSQL: _json,
    Spigot: (_) => se_Spigot(_, context),
    SplitFields: _json,
    Union: _json,
  });
};

/**
 * serializeAws_json1_1CodeGenConfigurationNodes
 */
const se_CodeGenConfigurationNodes = (
  input: Record<string, CodeGenConfigurationNode>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_CodeGenConfigurationNode(value, context);
    return acc;
  }, {});
};

// se_CodeGenEdge omitted.

// se_CodeGenNode omitted.

// se_CodeGenNodeArg omitted.

// se_CodeGenNodeArgs omitted.

// se_Column omitted.

// se_ColumnList omitted.

/**
 * serializeAws_json1_1ColumnStatistics
 */
const se_ColumnStatistics = (input: ColumnStatistics, context: __SerdeContext): any => {
  return take(input, {
    AnalyzedTime: (_) => Math.round(_.getTime() / 1000),
    ColumnName: [],
    ColumnType: [],
    StatisticsData: (_) => se_ColumnStatisticsData(_, context),
  });
};

/**
 * serializeAws_json1_1ColumnStatisticsData
 */
const se_ColumnStatisticsData = (input: ColumnStatisticsData, context: __SerdeContext): any => {
  return take(input, {
    BinaryColumnStatisticsData: (_) => se_BinaryColumnStatisticsData(_, context),
    BooleanColumnStatisticsData: _json,
    DateColumnStatisticsData: (_) => se_DateColumnStatisticsData(_, context),
    DecimalColumnStatisticsData: (_) => se_DecimalColumnStatisticsData(_, context),
    DoubleColumnStatisticsData: (_) => se_DoubleColumnStatisticsData(_, context),
    LongColumnStatisticsData: _json,
    StringColumnStatisticsData: (_) => se_StringColumnStatisticsData(_, context),
    Type: [],
  });
};

// se_ColumnValueStringList omitted.

// se_Condition omitted.

// se_ConditionList omitted.

// se_ConnectionInput omitted.

// se_ConnectionPasswordEncryption omitted.

// se_ConnectionProperties omitted.

// se_ConnectionsList omitted.

// se_ContextWords omitted.

// se_CrawlerNameList omitted.

/**
 * serializeAws_json1_1CrawlerTargets
 */
const se_CrawlerTargets = (input: CrawlerTargets, context: __SerdeContext): any => {
  return take(input, {
    CatalogTargets: _json,
    DeltaTargets: _json,
    DynamoDBTargets: (_) => se_DynamoDBTargetList(_, context),
    IcebergTargets: _json,
    JdbcTargets: _json,
    MongoDBTargets: _json,
    S3Targets: _json,
  });
};

// se_CrawlsFilter omitted.

// se_CrawlsFilterList omitted.

// se_CreateBlueprintRequest omitted.

// se_CreateClassifierRequest omitted.

// se_CreateConnectionRequest omitted.

/**
 * serializeAws_json1_1CreateCrawlerRequest
 */
const se_CreateCrawlerRequest = (input: CreateCrawlerRequest, context: __SerdeContext): any => {
  return take(input, {
    Classifiers: _json,
    Configuration: [],
    CrawlerSecurityConfiguration: [],
    DatabaseName: [],
    Description: [],
    LakeFormationConfiguration: _json,
    LineageConfiguration: _json,
    Name: [],
    RecrawlPolicy: _json,
    Role: [],
    Schedule: [],
    SchemaChangePolicy: _json,
    TablePrefix: [],
    Tags: _json,
    Targets: (_) => se_CrawlerTargets(_, context),
  });
};

// se_CreateCsvClassifierRequest omitted.

// se_CreateCustomEntityTypeRequest omitted.

// se_CreateDatabaseRequest omitted.

// se_CreateDataQualityRulesetRequest omitted.

// se_CreateDevEndpointRequest omitted.

// se_CreateGrokClassifierRequest omitted.

/**
 * serializeAws_json1_1CreateJobRequest
 */
const se_CreateJobRequest = (input: CreateJobRequest, context: __SerdeContext): any => {
  return take(input, {
    AllocatedCapacity: [],
    CodeGenConfigurationNodes: (_) => se_CodeGenConfigurationNodes(_, context),
    Command: _json,
    Connections: _json,
    DefaultArguments: _json,
    Description: [],
    ExecutionClass: [],
    ExecutionProperty: _json,
    GlueVersion: [],
    LogUri: [],
    MaxCapacity: __serializeFloat,
    MaxRetries: [],
    Name: [],
    NonOverridableArguments: _json,
    NotificationProperty: _json,
    NumberOfWorkers: [],
    Role: [],
    SecurityConfiguration: [],
    SourceControlDetails: _json,
    Tags: _json,
    Timeout: [],
    WorkerType: [],
  });
};

// se_CreateJsonClassifierRequest omitted.

/**
 * serializeAws_json1_1CreateMLTransformRequest
 */
const se_CreateMLTransformRequest = (input: CreateMLTransformRequest, context: __SerdeContext): any => {
  return take(input, {
    Description: [],
    GlueVersion: [],
    InputRecordTables: _json,
    MaxCapacity: __serializeFloat,
    MaxRetries: [],
    Name: [],
    NumberOfWorkers: [],
    Parameters: (_) => se_TransformParameters(_, context),
    Role: [],
    Tags: _json,
    Timeout: [],
    TransformEncryption: _json,
    WorkerType: [],
  });
};

// se_CreatePartitionIndexRequest omitted.

/**
 * serializeAws_json1_1CreatePartitionRequest
 */
const se_CreatePartitionRequest = (input: CreatePartitionRequest, context: __SerdeContext): any => {
  return take(input, {
    CatalogId: [],
    DatabaseName: [],
    PartitionInput: (_) => se_PartitionInput(_, context),
    TableName: [],
  });
};

// se_CreateRegistryInput omitted.

// se_CreateSchemaInput omitted.

// se_CreateScriptRequest omitted.

// se_CreateSecurityConfigurationRequest omitted.

/**
 * serializeAws_json1_1CreateSessionRequest
 */
const se_CreateSessionRequest = (input: CreateSessionRequest, context: __SerdeContext): any => {
  return take(input, {
    Command: _json,
    Connections: _json,
    DefaultArguments: _json,
    Description: [],
    GlueVersion: [],
    Id: [],
    IdleTimeout: [],
    MaxCapacity: __serializeFloat,
    NumberOfWorkers: [],
    RequestOrigin: [],
    Role: [],
    SecurityConfiguration: [],
    Tags: _json,
    Timeout: [],
    WorkerType: [],
  });
};

/**
 * serializeAws_json1_1CreateTableRequest
 */
const se_CreateTableRequest = (input: CreateTableRequest, context: __SerdeContext): any => {
  return take(input, {
    CatalogId: [],
    DatabaseName: [],
    OpenTableFormatInput: _json,
    PartitionIndexes: _json,
    TableInput: (_) => se_TableInput(_, context),
    TransactionId: [],
  });
};

// se_CreateTriggerRequest omitted.

// se_CreateUserDefinedFunctionRequest omitted.

// se_CreateWorkflowRequest omitted.

// se_CreateXMLClassifierRequest omitted.

// se_CsvHeader omitted.

// se_CustomCode omitted.

// se_CustomDatatypes omitted.

// se_CustomEntityTypeNames omitted.

// se_DagEdges omitted.

// se_DagNodes omitted.

// se_DatabaseIdentifier omitted.

// se_DatabaseInput omitted.

// se_DataCatalogEncryptionSettings omitted.

// se_DataLakePrincipal omitted.

// se_DataQualityEvaluationRunAdditionalRunOptions omitted.

/**
 * serializeAws_json1_1DataQualityResultFilterCriteria
 */
const se_DataQualityResultFilterCriteria = (input: DataQualityResultFilterCriteria, context: __SerdeContext): any => {
  return take(input, {
    DataSource: _json,
    JobName: [],
    JobRunId: [],
    StartedAfter: (_) => Math.round(_.getTime() / 1000),
    StartedBefore: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_DataQualityResultIds omitted.

/**
 * serializeAws_json1_1DataQualityRuleRecommendationRunFilter
 */
const se_DataQualityRuleRecommendationRunFilter = (
  input: DataQualityRuleRecommendationRunFilter,
  context: __SerdeContext
): any => {
  return take(input, {
    DataSource: _json,
    StartedAfter: (_) => Math.round(_.getTime() / 1000),
    StartedBefore: (_) => Math.round(_.getTime() / 1000),
  });
};

/**
 * serializeAws_json1_1DataQualityRulesetEvaluationRunFilter
 */
const se_DataQualityRulesetEvaluationRunFilter = (
  input: DataQualityRulesetEvaluationRunFilter,
  context: __SerdeContext
): any => {
  return take(input, {
    DataSource: _json,
    StartedAfter: (_) => Math.round(_.getTime() / 1000),
    StartedBefore: (_) => Math.round(_.getTime() / 1000),
  });
};

/**
 * serializeAws_json1_1DataQualityRulesetFilterCriteria
 */
const se_DataQualityRulesetFilterCriteria = (input: DataQualityRulesetFilterCriteria, context: __SerdeContext): any => {
  return take(input, {
    CreatedAfter: (_) => Math.round(_.getTime() / 1000),
    CreatedBefore: (_) => Math.round(_.getTime() / 1000),
    Description: [],
    LastModifiedAfter: (_) => Math.round(_.getTime() / 1000),
    LastModifiedBefore: (_) => Math.round(_.getTime() / 1000),
    Name: [],
    TargetTable: _json,
  });
};

// se_DataQualityTargetTable omitted.

// se_DataSource omitted.

// se_DataSourceMap omitted.

// se_Datatype omitted.

/**
 * serializeAws_json1_1DateColumnStatisticsData
 */
const se_DateColumnStatisticsData = (input: DateColumnStatisticsData, context: __SerdeContext): any => {
  return take(input, {
    MaximumValue: (_) => Math.round(_.getTime() / 1000),
    MinimumValue: (_) => Math.round(_.getTime() / 1000),
    NumberOfDistinctValues: [],
    NumberOfNulls: [],
  });
};

/**
 * serializeAws_json1_1DecimalColumnStatisticsData
 */
const se_DecimalColumnStatisticsData = (input: DecimalColumnStatisticsData, context: __SerdeContext): any => {
  return take(input, {
    MaximumValue: (_) => se_DecimalNumber(_, context),
    MinimumValue: (_) => se_DecimalNumber(_, context),
    NumberOfDistinctValues: [],
    NumberOfNulls: [],
  });
};

/**
 * serializeAws_json1_1DecimalNumber
 */
const se_DecimalNumber = (input: DecimalNumber, context: __SerdeContext): any => {
  return take(input, {
    Scale: [],
    UnscaledValue: context.base64Encoder,
  });
};

// se_DeleteBlueprintRequest omitted.

// se_DeleteClassifierRequest omitted.

// se_DeleteColumnStatisticsForPartitionRequest omitted.

// se_DeleteColumnStatisticsForTableRequest omitted.

// se_DeleteConnectionNameList omitted.

// se_DeleteConnectionRequest omitted.

// se_DeleteCrawlerRequest omitted.

// se_DeleteCustomEntityTypeRequest omitted.

// se_DeleteDatabaseRequest omitted.

// se_DeleteDataQualityRulesetRequest omitted.

// se_DeleteDevEndpointRequest omitted.

// se_DeleteJobRequest omitted.

// se_DeleteMLTransformRequest omitted.

// se_DeletePartitionIndexRequest omitted.

// se_DeletePartitionRequest omitted.

// se_DeleteRegistryInput omitted.

// se_DeleteResourcePolicyRequest omitted.

// se_DeleteSchemaInput omitted.

// se_DeleteSchemaVersionsInput omitted.

// se_DeleteSecurityConfigurationRequest omitted.

// se_DeleteSessionRequest omitted.

// se_DeleteTableRequest omitted.

// se_DeleteTableVersionRequest omitted.

// se_DeleteTriggerRequest omitted.

// se_DeleteUserDefinedFunctionRequest omitted.

// se_DeleteWorkflowRequest omitted.

// se_DeltaTarget omitted.

// se_DeltaTargetList omitted.

// se_DevEndpointCustomLibraries omitted.

// se_DevEndpointNames omitted.

// se_DirectJDBCSource omitted.

/**
 * serializeAws_json1_1DirectKafkaSource
 */
const se_DirectKafkaSource = (input: DirectKafkaSource, context: __SerdeContext): any => {
  return take(input, {
    DataPreviewOptions: _json,
    DetectSchema: [],
    Name: [],
    StreamingOptions: (_) => se_KafkaStreamingSourceOptions(_, context),
    WindowSize: [],
  });
};

/**
 * serializeAws_json1_1DirectKinesisSource
 */
const se_DirectKinesisSource = (input: DirectKinesisSource, context: __SerdeContext): any => {
  return take(input, {
    DataPreviewOptions: _json,
    DetectSchema: [],
    Name: [],
    StreamingOptions: (_) => se_KinesisStreamingSourceOptions(_, context),
    WindowSize: [],
  });
};

// se_DirectSchemaChangePolicy omitted.

/**
 * serializeAws_json1_1DoubleColumnStatisticsData
 */
const se_DoubleColumnStatisticsData = (input: DoubleColumnStatisticsData, context: __SerdeContext): any => {
  return take(input, {
    MaximumValue: __serializeFloat,
    MinimumValue: __serializeFloat,
    NumberOfDistinctValues: [],
    NumberOfNulls: [],
  });
};

// se_DQAdditionalOptions omitted.

// se_DQDLAliases omitted.

// se_DQResultsPublishingOptions omitted.

// se_DQStopJobOnFailureOptions omitted.

// se_DropDuplicates omitted.

// se_DropFields omitted.

// se_DropNullFields omitted.

// se_DynamicTransform omitted.

// se_DynamoDBCatalogSource omitted.

/**
 * serializeAws_json1_1DynamoDBTarget
 */
const se_DynamoDBTarget = (input: DynamoDBTarget, context: __SerdeContext): any => {
  return take(input, {
    Path: [],
    scanAll: [],
    scanRate: __serializeFloat,
  });
};

/**
 * serializeAws_json1_1DynamoDBTargetList
 */
const se_DynamoDBTargetList = (input: DynamoDBTarget[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DynamoDBTarget(entry, context);
    });
};

// se_EnableAdditionalMetadata omitted.

// se_EnclosedInStringProperties omitted.

// se_EnclosedInStringPropertiesMinOne omitted.

// se_EncryptionAtRest omitted.

// se_EncryptionConfiguration omitted.

// se_EvaluateDataQuality omitted.

// se_EvaluateDataQualityMultiFrame omitted.

// se_EventBatchingCondition omitted.

// se_ExecutionProperty omitted.

// se_FederatedDatabase omitted.

// se_FillMissingValues omitted.

// se_Filter omitted.

// se_FilterExpression omitted.

// se_FilterExpressions omitted.

// se_FilterValue omitted.

// se_FilterValues omitted.

/**
 * serializeAws_json1_1FindMatchesParameters
 */
const se_FindMatchesParameters = (input: FindMatchesParameters, context: __SerdeContext): any => {
  return take(input, {
    AccuracyCostTradeoff: __serializeFloat,
    EnforceProvidedLabels: [],
    PrecisionRecallTradeoff: __serializeFloat,
    PrimaryKeyColumnName: [],
  });
};

// se_GenericMap omitted.

// se_GetBlueprintRequest omitted.

// se_GetBlueprintRunRequest omitted.

// se_GetBlueprintRunsRequest omitted.

// se_GetCatalogImportStatusRequest omitted.

// se_GetClassifierRequest omitted.

// se_GetClassifiersRequest omitted.

// se_GetColumnNamesList omitted.

// se_GetColumnStatisticsForPartitionRequest omitted.

// se_GetColumnStatisticsForTableRequest omitted.

// se_GetConnectionRequest omitted.

// se_GetConnectionsFilter omitted.

// se_GetConnectionsRequest omitted.

// se_GetCrawlerMetricsRequest omitted.

// se_GetCrawlerRequest omitted.

// se_GetCrawlersRequest omitted.

// se_GetCustomEntityTypeRequest omitted.

// se_GetDatabaseRequest omitted.

// se_GetDatabasesRequest omitted.

// se_GetDataCatalogEncryptionSettingsRequest omitted.

// se_GetDataflowGraphRequest omitted.

// se_GetDataQualityResultRequest omitted.

// se_GetDataQualityRuleRecommendationRunRequest omitted.

// se_GetDataQualityRulesetEvaluationRunRequest omitted.

// se_GetDataQualityRulesetRequest omitted.

// se_GetDevEndpointRequest omitted.

// se_GetDevEndpointsRequest omitted.

// se_GetJobBookmarkRequest omitted.

// se_GetJobRequest omitted.

// se_GetJobRunRequest omitted.

// se_GetJobRunsRequest omitted.

// se_GetJobsRequest omitted.

// se_GetMappingRequest omitted.

// se_GetMLTaskRunRequest omitted.

/**
 * serializeAws_json1_1GetMLTaskRunsRequest
 */
const se_GetMLTaskRunsRequest = (input: GetMLTaskRunsRequest, context: __SerdeContext): any => {
  return take(input, {
    Filter: (_) => se_TaskRunFilterCriteria(_, context),
    MaxResults: [],
    NextToken: [],
    Sort: _json,
    TransformId: [],
  });
};

// se_GetMLTransformRequest omitted.

/**
 * serializeAws_json1_1GetMLTransformsRequest
 */
const se_GetMLTransformsRequest = (input: GetMLTransformsRequest, context: __SerdeContext): any => {
  return take(input, {
    Filter: (_) => se_TransformFilterCriteria(_, context),
    MaxResults: [],
    NextToken: [],
    Sort: _json,
  });
};

// se_GetPartitionIndexesRequest omitted.

// se_GetPartitionRequest omitted.

/**
 * serializeAws_json1_1GetPartitionsRequest
 */
const se_GetPartitionsRequest = (input: GetPartitionsRequest, context: __SerdeContext): any => {
  return take(input, {
    CatalogId: [],
    DatabaseName: [],
    ExcludeColumnSchema: [],
    Expression: [],
    MaxResults: [],
    NextToken: [],
    QueryAsOfTime: (_) => Math.round(_.getTime() / 1000),
    Segment: _json,
    TableName: [],
    TransactionId: [],
  });
};

// se_GetPlanRequest omitted.

// se_GetRegistryInput omitted.

// se_GetResourcePoliciesRequest omitted.

// se_GetResourcePolicyRequest omitted.

// se_GetSchemaByDefinitionInput omitted.

// se_GetSchemaInput omitted.

// se_GetSchemaVersionInput omitted.

// se_GetSchemaVersionsDiffInput omitted.

// se_GetSecurityConfigurationRequest omitted.

// se_GetSecurityConfigurationsRequest omitted.

// se_GetSessionRequest omitted.

// se_GetStatementRequest omitted.

/**
 * serializeAws_json1_1GetTableRequest
 */
const se_GetTableRequest = (input: GetTableRequest, context: __SerdeContext): any => {
  return take(input, {
    CatalogId: [],
    DatabaseName: [],
    Name: [],
    QueryAsOfTime: (_) => Math.round(_.getTime() / 1000),
    TransactionId: [],
  });
};

/**
 * serializeAws_json1_1GetTablesRequest
 */
const se_GetTablesRequest = (input: GetTablesRequest, context: __SerdeContext): any => {
  return take(input, {
    CatalogId: [],
    DatabaseName: [],
    Expression: [],
    MaxResults: [],
    NextToken: [],
    QueryAsOfTime: (_) => Math.round(_.getTime() / 1000),
    TransactionId: [],
  });
};

// se_GetTableVersionRequest omitted.

// se_GetTableVersionsRequest omitted.

// se_GetTagsRequest omitted.

// se_GetTriggerRequest omitted.

// se_GetTriggersRequest omitted.

// se_GetUnfilteredPartitionMetadataRequest omitted.

// se_GetUnfilteredPartitionsMetadataRequest omitted.

// se_GetUnfilteredTableMetadataRequest omitted.

// se_GetUserDefinedFunctionRequest omitted.

// se_GetUserDefinedFunctionsRequest omitted.

// se_GetWorkflowRequest omitted.

// se_GetWorkflowRunPropertiesRequest omitted.

// se_GetWorkflowRunRequest omitted.

// se_GetWorkflowRunsRequest omitted.

// se_GlueSchema omitted.

// se_GlueSchemas omitted.

// se_GlueStudioPathList omitted.

// se_GlueStudioSchemaColumn omitted.

// se_GlueStudioSchemaColumnList omitted.

// se_GlueTable omitted.

// se_GlueTableAdditionalOptions omitted.

// se_GlueTables omitted.

// se_GovernedCatalogSource omitted.

// se_GovernedCatalogTarget omitted.

// se_IcebergInput omitted.

// se_IcebergTarget omitted.

// se_IcebergTargetList omitted.

// se_ImportCatalogToGlueRequest omitted.

// se_JDBCConnectorOptions omitted.

// se_JDBCConnectorSource omitted.

// se_JDBCConnectorTarget omitted.

// se_JDBCDataTypeMapping omitted.

// se_JdbcTarget omitted.

// se_JdbcTargetList omitted.

// se_JobBookmarksEncryption omitted.

// se_JobCommand omitted.

// se_JobNameList omitted.

/**
 * serializeAws_json1_1JobUpdate
 */
const se_JobUpdate = (input: JobUpdate, context: __SerdeContext): any => {
  return take(input, {
    AllocatedCapacity: [],
    CodeGenConfigurationNodes: (_) => se_CodeGenConfigurationNodes(_, context),
    Command: _json,
    Connections: _json,
    DefaultArguments: _json,
    Description: [],
    ExecutionClass: [],
    ExecutionProperty: _json,
    GlueVersion: [],
    LogUri: [],
    MaxCapacity: __serializeFloat,
    MaxRetries: [],
    NonOverridableArguments: _json,
    NotificationProperty: _json,
    NumberOfWorkers: [],
    Role: [],
    SecurityConfiguration: [],
    SourceControlDetails: _json,
    Timeout: [],
    WorkerType: [],
  });
};

// se_Join omitted.

// se_JoinColumn omitted.

// se_JoinColumns omitted.

/**
 * serializeAws_json1_1KafkaStreamingSourceOptions
 */
const se_KafkaStreamingSourceOptions = (input: KafkaStreamingSourceOptions, context: __SerdeContext): any => {
  return take(input, {
    AddRecordTimestamp: [],
    Assign: [],
    BootstrapServers: [],
    Classification: [],
    ConnectionName: [],
    Delimiter: [],
    EmitConsumerLagMetrics: [],
    EndingOffsets: [],
    IncludeHeaders: [],
    MaxOffsetsPerTrigger: [],
    MinPartitions: [],
    NumRetries: [],
    PollTimeoutMs: [],
    RetryIntervalMs: [],
    SecurityProtocol: [],
    StartingOffsets: [],
    StartingTimestamp: (_) => _.toISOString().split(".")[0] + "Z",
    SubscribePattern: [],
    TopicName: [],
  });
};

// se_KeyList omitted.

/**
 * serializeAws_json1_1KinesisStreamingSourceOptions
 */
const se_KinesisStreamingSourceOptions = (input: KinesisStreamingSourceOptions, context: __SerdeContext): any => {
  return take(input, {
    AddIdleTimeBetweenReads: [],
    AddRecordTimestamp: [],
    AvoidEmptyBatches: [],
    Classification: [],
    Delimiter: [],
    DescribeShardInterval: [],
    EmitConsumerLagMetrics: [],
    EndpointUrl: [],
    IdleTimeBetweenReadsInMs: [],
    MaxFetchRecordsPerShard: [],
    MaxFetchTimeInMs: [],
    MaxRecordPerRead: [],
    MaxRetryIntervalMs: [],
    NumRetries: [],
    RetryIntervalMs: [],
    RoleArn: [],
    RoleSessionName: [],
    StartingPosition: [],
    StartingTimestamp: (_) => _.toISOString().split(".")[0] + "Z",
    StreamArn: [],
    StreamName: [],
  });
};

// se_LakeFormationConfiguration omitted.

// se_LimitedPathList omitted.

// se_LimitedStringList omitted.

// se_LineageConfiguration omitted.

// se_ListBlueprintsRequest omitted.

// se_ListCrawlersRequest omitted.

// se_ListCrawlsRequest omitted.

// se_ListCustomEntityTypesRequest omitted.

/**
 * serializeAws_json1_1ListDataQualityResultsRequest
 */
const se_ListDataQualityResultsRequest = (input: ListDataQualityResultsRequest, context: __SerdeContext): any => {
  return take(input, {
    Filter: (_) => se_DataQualityResultFilterCriteria(_, context),
    MaxResults: [],
    NextToken: [],
  });
};

/**
 * serializeAws_json1_1ListDataQualityRuleRecommendationRunsRequest
 */
const se_ListDataQualityRuleRecommendationRunsRequest = (
  input: ListDataQualityRuleRecommendationRunsRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    Filter: (_) => se_DataQualityRuleRecommendationRunFilter(_, context),
    MaxResults: [],
    NextToken: [],
  });
};

/**
 * serializeAws_json1_1ListDataQualityRulesetEvaluationRunsRequest
 */
const se_ListDataQualityRulesetEvaluationRunsRequest = (
  input: ListDataQualityRulesetEvaluationRunsRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    Filter: (_) => se_DataQualityRulesetEvaluationRunFilter(_, context),
    MaxResults: [],
    NextToken: [],
  });
};

/**
 * serializeAws_json1_1ListDataQualityRulesetsRequest
 */
const se_ListDataQualityRulesetsRequest = (input: ListDataQualityRulesetsRequest, context: __SerdeContext): any => {
  return take(input, {
    Filter: (_) => se_DataQualityRulesetFilterCriteria(_, context),
    MaxResults: [],
    NextToken: [],
    Tags: _json,
  });
};

// se_ListDevEndpointsRequest omitted.

// se_ListJobsRequest omitted.

/**
 * serializeAws_json1_1ListMLTransformsRequest
 */
const se_ListMLTransformsRequest = (input: ListMLTransformsRequest, context: __SerdeContext): any => {
  return take(input, {
    Filter: (_) => se_TransformFilterCriteria(_, context),
    MaxResults: [],
    NextToken: [],
    Sort: _json,
    Tags: _json,
  });
};

// se_ListRegistriesInput omitted.

// se_ListSchemasInput omitted.

// se_ListSchemaVersionsInput omitted.

// se_ListSessionsRequest omitted.

// se_ListStatementsRequest omitted.

// se_ListTriggersRequest omitted.

// se_ListWorkflowsRequest omitted.

// se_Location omitted.

// se_LocationMap omitted.

// se_LocationStringList omitted.

// se_LongColumnStatisticsData omitted.

// se_ManyInputs omitted.

/**
 * serializeAws_json1_1Mapping
 */
const se_Mapping = (input: Mapping, context: __SerdeContext): any => {
  return take(input, {
    Children: (_) => se_Mappings(_, context),
    Dropped: [],
    FromPath: _json,
    FromType: [],
    ToKey: [],
    ToType: [],
  });
};

// se_MappingEntry omitted.

// se_MappingList omitted.

/**
 * serializeAws_json1_1Mappings
 */
const se_Mappings = (input: Mapping[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Mapping(entry, context);
    });
};

// se_MapValue omitted.

// se_MatchCriteria omitted.

// se_Merge omitted.

// se_MetadataKeyValuePair omitted.

// se_MetadataList omitted.

// se_MicrosoftSQLServerCatalogSource omitted.

// se_MicrosoftSQLServerCatalogTarget omitted.

// se_MLUserDataEncryption omitted.

// se_MongoDBTarget omitted.

// se_MongoDBTargetList omitted.

// se_MySQLCatalogSource omitted.

// se_MySQLCatalogTarget omitted.

// se_NameStringList omitted.

// se_NodeIdList omitted.

// se_NotificationProperty omitted.

// se_NullCheckBoxList omitted.

// se_NullValueField omitted.

// se_NullValueFields omitted.

// se_OneInput omitted.

// se_OpenTableFormatInput omitted.

// se_Option omitted.

// se_OptionList omitted.

// se_OracleSQLCatalogSource omitted.

// se_OracleSQLCatalogTarget omitted.

// se_OrchestrationArgumentsMap omitted.

// se_OrchestrationStringList omitted.

// se_Order omitted.

// se_OrderList omitted.

// se_ParametersMap omitted.

// se_PartitionIndex omitted.

// se_PartitionIndexList omitted.

/**
 * serializeAws_json1_1PartitionInput
 */
const se_PartitionInput = (input: PartitionInput, context: __SerdeContext): any => {
  return take(input, {
    LastAccessTime: (_) => Math.round(_.getTime() / 1000),
    LastAnalyzedTime: (_) => Math.round(_.getTime() / 1000),
    Parameters: _json,
    StorageDescriptor: _json,
    Values: _json,
  });
};

/**
 * serializeAws_json1_1PartitionInputList
 */
const se_PartitionInputList = (input: PartitionInput[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PartitionInput(entry, context);
    });
};

// se_PartitionValueList omitted.

// se_PathList omitted.

// se_PermissionList omitted.

// se_PermissionTypeList omitted.

// se_PhysicalConnectionRequirements omitted.

/**
 * serializeAws_json1_1PIIDetection
 */
const se_PIIDetection = (input: PIIDetection, context: __SerdeContext): any => {
  return take(input, {
    EntityTypesToDetect: _json,
    Inputs: _json,
    MaskValue: [],
    Name: [],
    OutputColumnName: [],
    PiiType: [],
    SampleFraction: __serializeFloat,
    ThresholdFraction: __serializeFloat,
  });
};

// se_PostgreSQLCatalogSource omitted.

// se_PostgreSQLCatalogTarget omitted.

// se_Predicate omitted.

// se_PrincipalPermissions omitted.

// se_PrincipalPermissionsList omitted.

// se_PropertyPredicate omitted.

// se_PublicKeysList omitted.

// se_PutDataCatalogEncryptionSettingsRequest omitted.

// se_PutResourcePolicyRequest omitted.

// se_PutSchemaVersionMetadataInput omitted.

// se_PutWorkflowRunPropertiesRequest omitted.

// se_QuerySchemaVersionMetadataInput omitted.

// se_RecrawlPolicy omitted.

// se_RedshiftSource omitted.

// se_RedshiftTarget omitted.

// se_RegisterSchemaVersionInput omitted.

// se_RegistryId omitted.

// se_RelationalCatalogSource omitted.

// se_RemoveSchemaVersionMetadataInput omitted.

// se_RenameField omitted.

// se_ResetJobBookmarkRequest omitted.

// se_ResourceUri omitted.

// se_ResourceUriList omitted.

// se_ResumeWorkflowRunRequest omitted.

// se_RulesetNames omitted.

// se_RunStatementRequest omitted.

// se_S3CatalogDeltaSource omitted.

// se_S3CatalogHudiSource omitted.

// se_S3CatalogSource omitted.

// se_S3CatalogTarget omitted.

// se_S3CsvSource omitted.

// se_S3DeltaCatalogTarget omitted.

// se_S3DeltaDirectTarget omitted.

// se_S3DeltaSource omitted.

// se_S3DirectSourceAdditionalOptions omitted.

// se_S3DirectTarget omitted.

// se_S3Encryption omitted.

// se_S3EncryptionList omitted.

// se_S3GlueParquetTarget omitted.

// se_S3HudiCatalogTarget omitted.

// se_S3HudiDirectTarget omitted.

// se_S3HudiSource omitted.

// se_S3JsonSource omitted.

// se_S3ParquetSource omitted.

// se_S3SourceAdditionalOptions omitted.

// se_S3Target omitted.

// se_S3TargetList omitted.

// se_SchemaChangePolicy omitted.

// se_SchemaColumn omitted.

// se_SchemaId omitted.

// se_SchemaReference omitted.

// se_SchemaVersionNumber omitted.

// se_SearchPropertyPredicates omitted.

// se_SearchTablesRequest omitted.

// se_SecurityGroupIdList omitted.

// se_Segment omitted.

// se_SelectFields omitted.

// se_SelectFromCollection omitted.

// se_SerDeInfo omitted.

// se_SessionCommand omitted.

// se_SkewedInfo omitted.

// se_SortCriteria omitted.

// se_SortCriterion omitted.

// se_SourceControlDetails omitted.

// se_SparkConnectorSource omitted.

// se_SparkConnectorTarget omitted.

// se_SparkSQL omitted.

/**
 * serializeAws_json1_1Spigot
 */
const se_Spigot = (input: Spigot, context: __SerdeContext): any => {
  return take(input, {
    Inputs: _json,
    Name: [],
    Path: [],
    Prob: __serializeFloat,
    Topk: [],
  });
};

// se_SplitFields omitted.

// se_SqlAlias omitted.

// se_SqlAliases omitted.

// se_StartBlueprintRunRequest omitted.

// se_StartCrawlerRequest omitted.

// se_StartCrawlerScheduleRequest omitted.

// se_StartDataQualityRuleRecommendationRunRequest omitted.

// se_StartDataQualityRulesetEvaluationRunRequest omitted.

// se_StartExportLabelsTaskRunRequest omitted.

// se_StartImportLabelsTaskRunRequest omitted.

/**
 * serializeAws_json1_1StartJobRunRequest
 */
const se_StartJobRunRequest = (input: StartJobRunRequest, context: __SerdeContext): any => {
  return take(input, {
    AllocatedCapacity: [],
    Arguments: _json,
    ExecutionClass: [],
    JobName: [],
    JobRunId: [],
    MaxCapacity: __serializeFloat,
    NotificationProperty: _json,
    NumberOfWorkers: [],
    SecurityConfiguration: [],
    Timeout: [],
    WorkerType: [],
  });
};

// se_StartMLEvaluationTaskRunRequest omitted.

// se_StartMLLabelingSetGenerationTaskRunRequest omitted.

// se_StartTriggerRequest omitted.

// se_StartWorkflowRunRequest omitted.

// se_StopCrawlerRequest omitted.

// se_StopCrawlerScheduleRequest omitted.

// se_StopSessionRequest omitted.

// se_StopTriggerRequest omitted.

// se_StopWorkflowRunRequest omitted.

// se_StorageDescriptor omitted.

// se_StreamingDataPreviewOptions omitted.

/**
 * serializeAws_json1_1StringColumnStatisticsData
 */
const se_StringColumnStatisticsData = (input: StringColumnStatisticsData, context: __SerdeContext): any => {
  return take(input, {
    AverageLength: __serializeFloat,
    MaximumLength: [],
    NumberOfDistinctValues: [],
    NumberOfNulls: [],
  });
};

// se_StringList omitted.

// se_TableIdentifier omitted.

/**
 * serializeAws_json1_1TableInput
 */
const se_TableInput = (input: TableInput, context: __SerdeContext): any => {
  return take(input, {
    Description: [],
    LastAccessTime: (_) => Math.round(_.getTime() / 1000),
    LastAnalyzedTime: (_) => Math.round(_.getTime() / 1000),
    Name: [],
    Owner: [],
    Parameters: _json,
    PartitionKeys: _json,
    Retention: [],
    StorageDescriptor: _json,
    TableType: [],
    TargetTable: _json,
    ViewExpandedText: [],
    ViewOriginalText: [],
  });
};

// se_TagKeysList omitted.

// se_TagResourceRequest omitted.

// se_TagsMap omitted.

/**
 * serializeAws_json1_1TaskRunFilterCriteria
 */
const se_TaskRunFilterCriteria = (input: TaskRunFilterCriteria, context: __SerdeContext): any => {
  return take(input, {
    StartedAfter: (_) => Math.round(_.getTime() / 1000),
    StartedBefore: (_) => Math.round(_.getTime() / 1000),
    Status: [],
    TaskRunType: [],
  });
};

// se_TaskRunSortCriteria omitted.

// se_TransformConfigParameter omitted.

// se_TransformConfigParameterList omitted.

// se_TransformEncryption omitted.

/**
 * serializeAws_json1_1TransformFilterCriteria
 */
const se_TransformFilterCriteria = (input: TransformFilterCriteria, context: __SerdeContext): any => {
  return take(input, {
    CreatedAfter: (_) => Math.round(_.getTime() / 1000),
    CreatedBefore: (_) => Math.round(_.getTime() / 1000),
    GlueVersion: [],
    LastModifiedAfter: (_) => Math.round(_.getTime() / 1000),
    LastModifiedBefore: (_) => Math.round(_.getTime() / 1000),
    Name: [],
    Schema: _json,
    Status: [],
    TransformType: [],
  });
};

/**
 * serializeAws_json1_1TransformParameters
 */
const se_TransformParameters = (input: TransformParameters, context: __SerdeContext): any => {
  return take(input, {
    FindMatchesParameters: (_) => se_FindMatchesParameters(_, context),
    TransformType: [],
  });
};

// se_TransformSchema omitted.

// se_TransformSortCriteria omitted.

// se_TriggerNameList omitted.

// se_TriggerUpdate omitted.

// se_TwoInputs omitted.

// se_Union omitted.

// se_UntagResourceRequest omitted.

// se_UpdateBlueprintRequest omitted.

// se_UpdateClassifierRequest omitted.

/**
 * serializeAws_json1_1UpdateColumnStatisticsForPartitionRequest
 */
const se_UpdateColumnStatisticsForPartitionRequest = (
  input: UpdateColumnStatisticsForPartitionRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    CatalogId: [],
    ColumnStatisticsList: (_) => se_UpdateColumnStatisticsList(_, context),
    DatabaseName: [],
    PartitionValues: _json,
    TableName: [],
  });
};

/**
 * serializeAws_json1_1UpdateColumnStatisticsForTableRequest
 */
const se_UpdateColumnStatisticsForTableRequest = (
  input: UpdateColumnStatisticsForTableRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    CatalogId: [],
    ColumnStatisticsList: (_) => se_UpdateColumnStatisticsList(_, context),
    DatabaseName: [],
    TableName: [],
  });
};

/**
 * serializeAws_json1_1UpdateColumnStatisticsList
 */
const se_UpdateColumnStatisticsList = (input: ColumnStatistics[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ColumnStatistics(entry, context);
    });
};

// se_UpdateConnectionRequest omitted.

/**
 * serializeAws_json1_1UpdateCrawlerRequest
 */
const se_UpdateCrawlerRequest = (input: UpdateCrawlerRequest, context: __SerdeContext): any => {
  return take(input, {
    Classifiers: _json,
    Configuration: [],
    CrawlerSecurityConfiguration: [],
    DatabaseName: [],
    Description: [],
    LakeFormationConfiguration: _json,
    LineageConfiguration: _json,
    Name: [],
    RecrawlPolicy: _json,
    Role: [],
    Schedule: [],
    SchemaChangePolicy: _json,
    TablePrefix: [],
    Targets: (_) => se_CrawlerTargets(_, context),
  });
};

// se_UpdateCrawlerScheduleRequest omitted.

// se_UpdateCsvClassifierRequest omitted.

// se_UpdateDatabaseRequest omitted.

// se_UpdateDataQualityRulesetRequest omitted.

// se_UpdateDevEndpointRequest omitted.

// se_UpdateGrokClassifierRequest omitted.

// se_UpdateJobFromSourceControlRequest omitted.

/**
 * serializeAws_json1_1UpdateJobRequest
 */
const se_UpdateJobRequest = (input: UpdateJobRequest, context: __SerdeContext): any => {
  return take(input, {
    JobName: [],
    JobUpdate: (_) => se_JobUpdate(_, context),
  });
};

// se_UpdateJsonClassifierRequest omitted.

/**
 * serializeAws_json1_1UpdateMLTransformRequest
 */
const se_UpdateMLTransformRequest = (input: UpdateMLTransformRequest, context: __SerdeContext): any => {
  return take(input, {
    Description: [],
    GlueVersion: [],
    MaxCapacity: __serializeFloat,
    MaxRetries: [],
    Name: [],
    NumberOfWorkers: [],
    Parameters: (_) => se_TransformParameters(_, context),
    Role: [],
    Timeout: [],
    TransformId: [],
    WorkerType: [],
  });
};

/**
 * serializeAws_json1_1UpdatePartitionRequest
 */
const se_UpdatePartitionRequest = (input: UpdatePartitionRequest, context: __SerdeContext): any => {
  return take(input, {
    CatalogId: [],
    DatabaseName: [],
    PartitionInput: (_) => se_PartitionInput(_, context),
    PartitionValueList: _json,
    TableName: [],
  });
};

// se_UpdateRegistryInput omitted.

// se_UpdateSchemaInput omitted.

// se_UpdateSourceControlFromJobRequest omitted.

/**
 * serializeAws_json1_1UpdateTableRequest
 */
const se_UpdateTableRequest = (input: UpdateTableRequest, context: __SerdeContext): any => {
  return take(input, {
    CatalogId: [],
    DatabaseName: [],
    SkipArchive: [],
    TableInput: (_) => se_TableInput(_, context),
    TransactionId: [],
    VersionId: [],
  });
};

// se_UpdateTriggerRequest omitted.

// se_UpdateUserDefinedFunctionRequest omitted.

// se_UpdateWorkflowRequest omitted.

// se_UpdateXMLClassifierRequest omitted.

// se_UpsertRedshiftTargetOptions omitted.

// se_UserDefinedFunctionInput omitted.

// se_ValueStringList omitted.

// se_WorkflowNames omitted.

// se_WorkflowRunProperties omitted.

// de_AccessDeniedException omitted.

// de_Action omitted.

// de_ActionList omitted.

// de_AdditionalOptions omitted.

// de_Aggregate omitted.

// de_AggregateOperation omitted.

// de_AggregateOperations omitted.

// de_AlreadyExistsException omitted.

// de_AmazonRedshiftAdvancedOption omitted.

// de_AmazonRedshiftAdvancedOptions omitted.

// de_AmazonRedshiftNodeData omitted.

// de_AmazonRedshiftSource omitted.

// de_AmazonRedshiftTarget omitted.

/**
 * deserializeAws_json1_1ApplyMapping
 */
const de_ApplyMapping = (output: any, context: __SerdeContext): ApplyMapping => {
  return take(output, {
    Inputs: _json,
    Mapping: (_: any) => de_Mappings(_, context),
    Name: __expectString,
  }) as any;
};

// de_AthenaConnectorSource omitted.

// de_BackfillError omitted.

// de_BackfillErroredPartitionsList omitted.

// de_BackfillErrors omitted.

// de_BasicCatalogTarget omitted.

// de_BatchCreatePartitionResponse omitted.

// de_BatchDeleteConnectionResponse omitted.

// de_BatchDeletePartitionResponse omitted.

// de_BatchDeleteTableResponse omitted.

// de_BatchDeleteTableVersionResponse omitted.

/**
 * deserializeAws_json1_1BatchGetBlueprintsResponse
 */
const de_BatchGetBlueprintsResponse = (output: any, context: __SerdeContext): BatchGetBlueprintsResponse => {
  return take(output, {
    Blueprints: (_: any) => de_Blueprints(_, context),
    MissingBlueprints: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1BatchGetCrawlersResponse
 */
const de_BatchGetCrawlersResponse = (output: any, context: __SerdeContext): BatchGetCrawlersResponse => {
  return take(output, {
    Crawlers: (_: any) => de_CrawlerList(_, context),
    CrawlersNotFound: _json,
  }) as any;
};

// de_BatchGetCustomEntityTypesResponse omitted.

/**
 * deserializeAws_json1_1BatchGetDataQualityResultResponse
 */
const de_BatchGetDataQualityResultResponse = (
  output: any,
  context: __SerdeContext
): BatchGetDataQualityResultResponse => {
  return take(output, {
    Results: (_: any) => de_DataQualityResultsList(_, context),
    ResultsNotFound: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1BatchGetDevEndpointsResponse
 */
const de_BatchGetDevEndpointsResponse = (output: any, context: __SerdeContext): BatchGetDevEndpointsResponse => {
  return take(output, {
    DevEndpoints: (_: any) => de_DevEndpointList(_, context),
    DevEndpointsNotFound: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1BatchGetJobsResponse
 */
const de_BatchGetJobsResponse = (output: any, context: __SerdeContext): BatchGetJobsResponse => {
  return take(output, {
    Jobs: (_: any) => de_JobList(_, context),
    JobsNotFound: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1BatchGetPartitionResponse
 */
const de_BatchGetPartitionResponse = (output: any, context: __SerdeContext): BatchGetPartitionResponse => {
  return take(output, {
    Partitions: (_: any) => de_PartitionList(_, context),
    UnprocessedKeys: _json,
  }) as any;
};

// de_BatchGetPartitionValueList omitted.

// de_BatchGetTriggersResponse omitted.

/**
 * deserializeAws_json1_1BatchGetWorkflowsResponse
 */
const de_BatchGetWorkflowsResponse = (output: any, context: __SerdeContext): BatchGetWorkflowsResponse => {
  return take(output, {
    MissingWorkflows: _json,
    Workflows: (_: any) => de_Workflows(_, context),
  }) as any;
};

// de_BatchStopJobRunError omitted.

// de_BatchStopJobRunErrorList omitted.

// de_BatchStopJobRunResponse omitted.

// de_BatchStopJobRunSuccessfulSubmission omitted.

// de_BatchStopJobRunSuccessfulSubmissionList omitted.

// de_BatchUpdatePartitionFailureEntry omitted.

// de_BatchUpdatePartitionFailureList omitted.

// de_BatchUpdatePartitionResponse omitted.

/**
 * deserializeAws_json1_1BinaryColumnStatisticsData
 */
const de_BinaryColumnStatisticsData = (output: any, context: __SerdeContext): BinaryColumnStatisticsData => {
  return take(output, {
    AverageLength: __limitedParseDouble,
    MaximumLength: __expectLong,
    NumberOfNulls: __expectLong,
  }) as any;
};

/**
 * deserializeAws_json1_1Blueprint
 */
const de_Blueprint = (output: any, context: __SerdeContext): Blueprint => {
  return take(output, {
    BlueprintLocation: __expectString,
    BlueprintServiceLocation: __expectString,
    CreatedOn: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    ErrorMessage: __expectString,
    LastActiveDefinition: (_: any) => de_LastActiveDefinition(_, context),
    LastModifiedOn: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    ParameterSpec: __expectString,
    Status: __expectString,
  }) as any;
};

// de_BlueprintDetails omitted.

// de_BlueprintNames omitted.

/**
 * deserializeAws_json1_1BlueprintRun
 */
const de_BlueprintRun = (output: any, context: __SerdeContext): BlueprintRun => {
  return take(output, {
    BlueprintName: __expectString,
    CompletedOn: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ErrorMessage: __expectString,
    Parameters: __expectString,
    RoleArn: __expectString,
    RollbackErrorMessage: __expectString,
    RunId: __expectString,
    StartedOn: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    State: __expectString,
    WorkflowName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1BlueprintRuns
 */
const de_BlueprintRuns = (output: any, context: __SerdeContext): BlueprintRun[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BlueprintRun(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Blueprints
 */
const de_Blueprints = (output: any, context: __SerdeContext): Blueprint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Blueprint(entry, context);
    });
  return retVal;
};

// de_BooleanColumnStatisticsData omitted.

// de_BoundedPartitionValueList omitted.

// de_CancelDataQualityRuleRecommendationRunResponse omitted.

// de_CancelDataQualityRulesetEvaluationRunResponse omitted.

// de_CancelMLTaskRunResponse omitted.

// de_CancelStatementResponse omitted.

// de_CatalogDeltaSource omitted.

// de_CatalogHudiSource omitted.

/**
 * deserializeAws_json1_1CatalogImportStatus
 */
const de_CatalogImportStatus = (output: any, context: __SerdeContext): CatalogImportStatus => {
  return take(output, {
    ImportCompleted: __expectBoolean,
    ImportTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ImportedBy: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CatalogKafkaSource
 */
const de_CatalogKafkaSource = (output: any, context: __SerdeContext): CatalogKafkaSource => {
  return take(output, {
    DataPreviewOptions: _json,
    Database: __expectString,
    DetectSchema: __expectBoolean,
    Name: __expectString,
    StreamingOptions: (_: any) => de_KafkaStreamingSourceOptions(_, context),
    Table: __expectString,
    WindowSize: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1CatalogKinesisSource
 */
const de_CatalogKinesisSource = (output: any, context: __SerdeContext): CatalogKinesisSource => {
  return take(output, {
    DataPreviewOptions: _json,
    Database: __expectString,
    DetectSchema: __expectBoolean,
    Name: __expectString,
    StreamingOptions: (_: any) => de_KinesisStreamingSourceOptions(_, context),
    Table: __expectString,
    WindowSize: __expectInt32,
  }) as any;
};

// de_CatalogSchemaChangePolicy omitted.

// de_CatalogSource omitted.

// de_CatalogTablesList omitted.

// de_CatalogTarget omitted.

// de_CatalogTargetList omitted.

// de_CheckSchemaVersionValidityResponse omitted.

/**
 * deserializeAws_json1_1Classifier
 */
const de_Classifier = (output: any, context: __SerdeContext): Classifier => {
  return take(output, {
    CsvClassifier: (_: any) => de_CsvClassifier(_, context),
    GrokClassifier: (_: any) => de_GrokClassifier(_, context),
    JsonClassifier: (_: any) => de_JsonClassifier(_, context),
    XMLClassifier: (_: any) => de_XMLClassifier(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ClassifierList
 */
const de_ClassifierList = (output: any, context: __SerdeContext): Classifier[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Classifier(entry, context);
    });
  return retVal;
};

// de_ClassifierNameList omitted.

// de_CloudWatchEncryption omitted.

/**
 * deserializeAws_json1_1CodeGenConfigurationNode
 */
const de_CodeGenConfigurationNode = (output: any, context: __SerdeContext): CodeGenConfigurationNode => {
  return take(output, {
    Aggregate: _json,
    AmazonRedshiftSource: _json,
    AmazonRedshiftTarget: _json,
    ApplyMapping: (_: any) => de_ApplyMapping(_, context),
    AthenaConnectorSource: _json,
    CatalogDeltaSource: _json,
    CatalogHudiSource: _json,
    CatalogKafkaSource: (_: any) => de_CatalogKafkaSource(_, context),
    CatalogKinesisSource: (_: any) => de_CatalogKinesisSource(_, context),
    CatalogSource: _json,
    CatalogTarget: _json,
    CustomCode: _json,
    DirectJDBCSource: _json,
    DirectKafkaSource: (_: any) => de_DirectKafkaSource(_, context),
    DirectKinesisSource: (_: any) => de_DirectKinesisSource(_, context),
    DropDuplicates: _json,
    DropFields: _json,
    DropNullFields: _json,
    DynamicTransform: _json,
    DynamoDBCatalogSource: _json,
    EvaluateDataQuality: _json,
    EvaluateDataQualityMultiFrame: _json,
    FillMissingValues: _json,
    Filter: _json,
    GovernedCatalogSource: _json,
    GovernedCatalogTarget: _json,
    JDBCConnectorSource: _json,
    JDBCConnectorTarget: _json,
    Join: _json,
    Merge: _json,
    MicrosoftSQLServerCatalogSource: _json,
    MicrosoftSQLServerCatalogTarget: _json,
    MySQLCatalogSource: _json,
    MySQLCatalogTarget: _json,
    OracleSQLCatalogSource: _json,
    OracleSQLCatalogTarget: _json,
    PIIDetection: (_: any) => de_PIIDetection(_, context),
    PostgreSQLCatalogSource: _json,
    PostgreSQLCatalogTarget: _json,
    RedshiftSource: _json,
    RedshiftTarget: _json,
    RelationalCatalogSource: _json,
    RenameField: _json,
    S3CatalogDeltaSource: _json,
    S3CatalogHudiSource: _json,
    S3CatalogSource: _json,
    S3CatalogTarget: _json,
    S3CsvSource: _json,
    S3DeltaCatalogTarget: _json,
    S3DeltaDirectTarget: _json,
    S3DeltaSource: _json,
    S3DirectTarget: _json,
    S3GlueParquetTarget: _json,
    S3HudiCatalogTarget: _json,
    S3HudiDirectTarget: _json,
    S3HudiSource: _json,
    S3JsonSource: _json,
    S3ParquetSource: _json,
    SelectFields: _json,
    SelectFromCollection: _json,
    SparkConnectorSource: _json,
    SparkConnectorTarget: _json,
    SparkSQL: _json,
    Spigot: (_: any) => de_Spigot(_, context),
    SplitFields: _json,
    Union: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1CodeGenConfigurationNodes
 */
const de_CodeGenConfigurationNodes = (
  output: any,
  context: __SerdeContext
): Record<string, CodeGenConfigurationNode> => {
  return Object.entries(output).reduce((acc: Record<string, CodeGenConfigurationNode>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_CodeGenConfigurationNode(value, context);
    return acc;
  }, {});
};

// de_CodeGenEdge omitted.

// de_CodeGenNode omitted.

// de_CodeGenNodeArg omitted.

// de_CodeGenNodeArgs omitted.

// de_Column omitted.

// de_ColumnError omitted.

// de_ColumnErrors omitted.

/**
 * deserializeAws_json1_1ColumnImportance
 */
const de_ColumnImportance = (output: any, context: __SerdeContext): ColumnImportance => {
  return take(output, {
    ColumnName: __expectString,
    Importance: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_json1_1ColumnImportanceList
 */
const de_ColumnImportanceList = (output: any, context: __SerdeContext): ColumnImportance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ColumnImportance(entry, context);
    });
  return retVal;
};

// de_ColumnList omitted.

// de_ColumnRowFilter omitted.

// de_ColumnRowFilterList omitted.

/**
 * deserializeAws_json1_1ColumnStatistics
 */
const de_ColumnStatistics = (output: any, context: __SerdeContext): ColumnStatistics => {
  return take(output, {
    AnalyzedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ColumnName: __expectString,
    ColumnType: __expectString,
    StatisticsData: (_: any) => de_ColumnStatisticsData(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ColumnStatisticsData
 */
const de_ColumnStatisticsData = (output: any, context: __SerdeContext): ColumnStatisticsData => {
  return take(output, {
    BinaryColumnStatisticsData: (_: any) => de_BinaryColumnStatisticsData(_, context),
    BooleanColumnStatisticsData: _json,
    DateColumnStatisticsData: (_: any) => de_DateColumnStatisticsData(_, context),
    DecimalColumnStatisticsData: (_: any) => de_DecimalColumnStatisticsData(_, context),
    DoubleColumnStatisticsData: (_: any) => de_DoubleColumnStatisticsData(_, context),
    LongColumnStatisticsData: _json,
    StringColumnStatisticsData: (_: any) => de_StringColumnStatisticsData(_, context),
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ColumnStatisticsError
 */
const de_ColumnStatisticsError = (output: any, context: __SerdeContext): ColumnStatisticsError => {
  return take(output, {
    ColumnStatistics: (_: any) => de_ColumnStatistics(_, context),
    Error: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1ColumnStatisticsErrors
 */
const de_ColumnStatisticsErrors = (output: any, context: __SerdeContext): ColumnStatisticsError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ColumnStatisticsError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ColumnStatisticsList
 */
const de_ColumnStatisticsList = (output: any, context: __SerdeContext): ColumnStatistics[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ColumnStatistics(entry, context);
    });
  return retVal;
};

// de_ColumnValueStringList omitted.

// de_ConcurrentModificationException omitted.

// de_ConcurrentRunsExceededException omitted.

// de_Condition omitted.

// de_ConditionCheckFailureException omitted.

// de_ConditionList omitted.

// de_ConflictException omitted.

// de_ConfusionMatrix omitted.

/**
 * deserializeAws_json1_1Connection
 */
const de_Connection = (output: any, context: __SerdeContext): Connection => {
  return take(output, {
    ConnectionProperties: _json,
    ConnectionType: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    LastUpdatedBy: __expectString,
    LastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MatchCriteria: _json,
    Name: __expectString,
    PhysicalConnectionRequirements: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1ConnectionList
 */
const de_ConnectionList = (output: any, context: __SerdeContext): Connection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Connection(entry, context);
    });
  return retVal;
};

// de_ConnectionPasswordEncryption omitted.

// de_ConnectionProperties omitted.

// de_ConnectionsList omitted.

// de_ContextWords omitted.

/**
 * deserializeAws_json1_1Crawl
 */
const de_Crawl = (output: any, context: __SerdeContext): Crawl => {
  return take(output, {
    CompletedOn: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ErrorMessage: __expectString,
    LogGroup: __expectString,
    LogStream: __expectString,
    StartedOn: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    State: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1Crawler
 */
const de_Crawler = (output: any, context: __SerdeContext): Crawler => {
  return take(output, {
    Classifiers: _json,
    Configuration: __expectString,
    CrawlElapsedTime: __expectLong,
    CrawlerSecurityConfiguration: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DatabaseName: __expectString,
    Description: __expectString,
    LakeFormationConfiguration: _json,
    LastCrawl: (_: any) => de_LastCrawlInfo(_, context),
    LastUpdated: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LineageConfiguration: _json,
    Name: __expectString,
    RecrawlPolicy: _json,
    Role: __expectString,
    Schedule: _json,
    SchemaChangePolicy: _json,
    State: __expectString,
    TablePrefix: __expectString,
    Targets: (_: any) => de_CrawlerTargets(_, context),
    Version: __expectLong,
  }) as any;
};

/**
 * deserializeAws_json1_1CrawlerHistory
 */
const de_CrawlerHistory = (output: any, context: __SerdeContext): CrawlerHistory => {
  return take(output, {
    CrawlId: __expectString,
    DPUHour: __limitedParseDouble,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ErrorMessage: __expectString,
    LogGroup: __expectString,
    LogStream: __expectString,
    MessagePrefix: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    State: __expectString,
    Summary: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CrawlerHistoryList
 */
const de_CrawlerHistoryList = (output: any, context: __SerdeContext): CrawlerHistory[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CrawlerHistory(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CrawlerList
 */
const de_CrawlerList = (output: any, context: __SerdeContext): Crawler[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Crawler(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CrawlerMetrics
 */
const de_CrawlerMetrics = (output: any, context: __SerdeContext): CrawlerMetrics => {
  return take(output, {
    CrawlerName: __expectString,
    LastRuntimeSeconds: __limitedParseDouble,
    MedianRuntimeSeconds: __limitedParseDouble,
    StillEstimating: __expectBoolean,
    TablesCreated: __expectInt32,
    TablesDeleted: __expectInt32,
    TablesUpdated: __expectInt32,
    TimeLeftSeconds: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_json1_1CrawlerMetricsList
 */
const de_CrawlerMetricsList = (output: any, context: __SerdeContext): CrawlerMetrics[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CrawlerMetrics(entry, context);
    });
  return retVal;
};

// de_CrawlerNameList omitted.

/**
 * deserializeAws_json1_1CrawlerNodeDetails
 */
const de_CrawlerNodeDetails = (output: any, context: __SerdeContext): CrawlerNodeDetails => {
  return take(output, {
    Crawls: (_: any) => de_CrawlList(_, context),
  }) as any;
};

// de_CrawlerNotRunningException omitted.

// de_CrawlerRunningException omitted.

// de_CrawlerStoppingException omitted.

/**
 * deserializeAws_json1_1CrawlerTargets
 */
const de_CrawlerTargets = (output: any, context: __SerdeContext): CrawlerTargets => {
  return take(output, {
    CatalogTargets: _json,
    DeltaTargets: _json,
    DynamoDBTargets: (_: any) => de_DynamoDBTargetList(_, context),
    IcebergTargets: _json,
    JdbcTargets: _json,
    MongoDBTargets: _json,
    S3Targets: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1CrawlList
 */
const de_CrawlList = (output: any, context: __SerdeContext): Crawl[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Crawl(entry, context);
    });
  return retVal;
};

// de_CreateBlueprintResponse omitted.

// de_CreateClassifierResponse omitted.

// de_CreateConnectionResponse omitted.

// de_CreateCrawlerResponse omitted.

// de_CreateCustomEntityTypeResponse omitted.

// de_CreateDatabaseResponse omitted.

// de_CreateDataQualityRulesetResponse omitted.

/**
 * deserializeAws_json1_1CreateDevEndpointResponse
 */
const de_CreateDevEndpointResponse = (output: any, context: __SerdeContext): CreateDevEndpointResponse => {
  return take(output, {
    Arguments: _json,
    AvailabilityZone: __expectString,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EndpointName: __expectString,
    ExtraJarsS3Path: __expectString,
    ExtraPythonLibsS3Path: __expectString,
    FailureReason: __expectString,
    GlueVersion: __expectString,
    NumberOfNodes: __expectInt32,
    NumberOfWorkers: __expectInt32,
    RoleArn: __expectString,
    SecurityConfiguration: __expectString,
    SecurityGroupIds: _json,
    Status: __expectString,
    SubnetId: __expectString,
    VpcId: __expectString,
    WorkerType: __expectString,
    YarnEndpointAddress: __expectString,
    ZeppelinRemoteSparkInterpreterPort: __expectInt32,
  }) as any;
};

// de_CreateJobResponse omitted.

// de_CreateMLTransformResponse omitted.

// de_CreatePartitionIndexResponse omitted.

// de_CreatePartitionResponse omitted.

// de_CreateRegistryResponse omitted.

// de_CreateSchemaResponse omitted.

// de_CreateScriptResponse omitted.

/**
 * deserializeAws_json1_1CreateSecurityConfigurationResponse
 */
const de_CreateSecurityConfigurationResponse = (
  output: any,
  context: __SerdeContext
): CreateSecurityConfigurationResponse => {
  return take(output, {
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateSessionResponse
 */
const de_CreateSessionResponse = (output: any, context: __SerdeContext): CreateSessionResponse => {
  return take(output, {
    Session: (_: any) => de_Session(_, context),
  }) as any;
};

// de_CreateTableResponse omitted.

// de_CreateTriggerResponse omitted.

// de_CreateUserDefinedFunctionResponse omitted.

// de_CreateWorkflowResponse omitted.

/**
 * deserializeAws_json1_1CsvClassifier
 */
const de_CsvClassifier = (output: any, context: __SerdeContext): CsvClassifier => {
  return take(output, {
    AllowSingleColumn: __expectBoolean,
    ContainsHeader: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CustomDatatypeConfigured: __expectBoolean,
    CustomDatatypes: _json,
    Delimiter: __expectString,
    DisableValueTrimming: __expectBoolean,
    Header: _json,
    LastUpdated: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    QuoteSymbol: __expectString,
    Version: __expectLong,
  }) as any;
};

// de_CsvHeader omitted.

// de_CustomCode omitted.

// de_CustomDatatypes omitted.

// de_CustomEntityType omitted.

// de_CustomEntityTypeNames omitted.

// de_CustomEntityTypes omitted.

// de_DagEdges omitted.

// de_DagNodes omitted.

/**
 * deserializeAws_json1_1Database
 */
const de_Database = (output: any, context: __SerdeContext): Database => {
  return take(output, {
    CatalogId: __expectString,
    CreateTableDefaultPermissions: _json,
    CreateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    FederatedDatabase: _json,
    LocationUri: __expectString,
    Name: __expectString,
    Parameters: _json,
    TargetDatabase: _json,
  }) as any;
};

// de_DatabaseIdentifier omitted.

/**
 * deserializeAws_json1_1DatabaseList
 */
const de_DatabaseList = (output: any, context: __SerdeContext): Database[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Database(entry, context);
    });
  return retVal;
};

// de_DataCatalogEncryptionSettings omitted.

// de_DataLakePrincipal omitted.

// de_DataQualityEvaluationRunAdditionalRunOptions omitted.

/**
 * deserializeAws_json1_1DataQualityResult
 */
const de_DataQualityResult = (output: any, context: __SerdeContext): DataQualityResult => {
  return take(output, {
    CompletedOn: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DataSource: _json,
    EvaluationContext: __expectString,
    JobName: __expectString,
    JobRunId: __expectString,
    ResultId: __expectString,
    RuleResults: (_: any) => de_DataQualityRuleResults(_, context),
    RulesetEvaluationRunId: __expectString,
    RulesetName: __expectString,
    Score: __limitedParseDouble,
    StartedOn: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1DataQualityResultDescription
 */
const de_DataQualityResultDescription = (output: any, context: __SerdeContext): DataQualityResultDescription => {
  return take(output, {
    DataSource: _json,
    JobName: __expectString,
    JobRunId: __expectString,
    ResultId: __expectString,
    StartedOn: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1DataQualityResultDescriptionList
 */
const de_DataQualityResultDescriptionList = (output: any, context: __SerdeContext): DataQualityResultDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DataQualityResultDescription(entry, context);
    });
  return retVal;
};

// de_DataQualityResultIdList omitted.

// de_DataQualityResultIds omitted.

/**
 * deserializeAws_json1_1DataQualityResultsList
 */
const de_DataQualityResultsList = (output: any, context: __SerdeContext): DataQualityResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DataQualityResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DataQualityRuleRecommendationRunDescription
 */
const de_DataQualityRuleRecommendationRunDescription = (
  output: any,
  context: __SerdeContext
): DataQualityRuleRecommendationRunDescription => {
  return take(output, {
    DataSource: _json,
    RunId: __expectString,
    StartedOn: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DataQualityRuleRecommendationRunList
 */
const de_DataQualityRuleRecommendationRunList = (
  output: any,
  context: __SerdeContext
): DataQualityRuleRecommendationRunDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DataQualityRuleRecommendationRunDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DataQualityRuleResult
 */
const de_DataQualityRuleResult = (output: any, context: __SerdeContext): DataQualityRuleResult => {
  return take(output, {
    Description: __expectString,
    EvaluatedMetrics: (_: any) => de_EvaluatedMetricsMap(_, context),
    EvaluationMessage: __expectString,
    Name: __expectString,
    Result: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DataQualityRuleResults
 */
const de_DataQualityRuleResults = (output: any, context: __SerdeContext): DataQualityRuleResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DataQualityRuleResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DataQualityRulesetEvaluationRunDescription
 */
const de_DataQualityRulesetEvaluationRunDescription = (
  output: any,
  context: __SerdeContext
): DataQualityRulesetEvaluationRunDescription => {
  return take(output, {
    DataSource: _json,
    RunId: __expectString,
    StartedOn: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DataQualityRulesetEvaluationRunList
 */
const de_DataQualityRulesetEvaluationRunList = (
  output: any,
  context: __SerdeContext
): DataQualityRulesetEvaluationRunDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DataQualityRulesetEvaluationRunDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DataQualityRulesetList
 */
const de_DataQualityRulesetList = (output: any, context: __SerdeContext): DataQualityRulesetListDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DataQualityRulesetListDetails(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DataQualityRulesetListDetails
 */
const de_DataQualityRulesetListDetails = (output: any, context: __SerdeContext): DataQualityRulesetListDetails => {
  return take(output, {
    CreatedOn: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    LastModifiedOn: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    RecommendationRunId: __expectString,
    RuleCount: __expectInt32,
    TargetTable: _json,
  }) as any;
};

// de_DataQualityTargetTable omitted.

// de_DataSource omitted.

// de_DataSourceMap omitted.

// de_Datatype omitted.

/**
 * deserializeAws_json1_1DateColumnStatisticsData
 */
const de_DateColumnStatisticsData = (output: any, context: __SerdeContext): DateColumnStatisticsData => {
  return take(output, {
    MaximumValue: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MinimumValue: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    NumberOfDistinctValues: __expectLong,
    NumberOfNulls: __expectLong,
  }) as any;
};

/**
 * deserializeAws_json1_1DecimalColumnStatisticsData
 */
const de_DecimalColumnStatisticsData = (output: any, context: __SerdeContext): DecimalColumnStatisticsData => {
  return take(output, {
    MaximumValue: (_: any) => de_DecimalNumber(_, context),
    MinimumValue: (_: any) => de_DecimalNumber(_, context),
    NumberOfDistinctValues: __expectLong,
    NumberOfNulls: __expectLong,
  }) as any;
};

/**
 * deserializeAws_json1_1DecimalNumber
 */
const de_DecimalNumber = (output: any, context: __SerdeContext): DecimalNumber => {
  return take(output, {
    Scale: __expectInt32,
    UnscaledValue: context.base64Decoder,
  }) as any;
};

// de_DeleteBlueprintResponse omitted.

// de_DeleteClassifierResponse omitted.

// de_DeleteColumnStatisticsForPartitionResponse omitted.

// de_DeleteColumnStatisticsForTableResponse omitted.

// de_DeleteConnectionResponse omitted.

// de_DeleteCrawlerResponse omitted.

// de_DeleteCustomEntityTypeResponse omitted.

// de_DeleteDatabaseResponse omitted.

// de_DeleteDataQualityRulesetResponse omitted.

// de_DeleteDevEndpointResponse omitted.

// de_DeleteJobResponse omitted.

// de_DeleteMLTransformResponse omitted.

// de_DeletePartitionIndexResponse omitted.

// de_DeletePartitionResponse omitted.

// de_DeleteRegistryResponse omitted.

// de_DeleteResourcePolicyResponse omitted.

// de_DeleteSchemaResponse omitted.

// de_DeleteSchemaVersionsResponse omitted.

// de_DeleteSecurityConfigurationResponse omitted.

// de_DeleteSessionResponse omitted.

// de_DeleteTableResponse omitted.

// de_DeleteTableVersionResponse omitted.

// de_DeleteTriggerResponse omitted.

// de_DeleteUserDefinedFunctionResponse omitted.

// de_DeleteWorkflowResponse omitted.

// de_DeltaTarget omitted.

// de_DeltaTargetList omitted.

/**
 * deserializeAws_json1_1DevEndpoint
 */
const de_DevEndpoint = (output: any, context: __SerdeContext): DevEndpoint => {
  return take(output, {
    Arguments: _json,
    AvailabilityZone: __expectString,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EndpointName: __expectString,
    ExtraJarsS3Path: __expectString,
    ExtraPythonLibsS3Path: __expectString,
    FailureReason: __expectString,
    GlueVersion: __expectString,
    LastModifiedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastUpdateStatus: __expectString,
    NumberOfNodes: __expectInt32,
    NumberOfWorkers: __expectInt32,
    PrivateAddress: __expectString,
    PublicAddress: __expectString,
    PublicKey: __expectString,
    PublicKeys: _json,
    RoleArn: __expectString,
    SecurityConfiguration: __expectString,
    SecurityGroupIds: _json,
    Status: __expectString,
    SubnetId: __expectString,
    VpcId: __expectString,
    WorkerType: __expectString,
    YarnEndpointAddress: __expectString,
    ZeppelinRemoteSparkInterpreterPort: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1DevEndpointList
 */
const de_DevEndpointList = (output: any, context: __SerdeContext): DevEndpoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DevEndpoint(entry, context);
    });
  return retVal;
};

// de_DevEndpointNameList omitted.

// de_DevEndpointNames omitted.

// de_DirectJDBCSource omitted.

/**
 * deserializeAws_json1_1DirectKafkaSource
 */
const de_DirectKafkaSource = (output: any, context: __SerdeContext): DirectKafkaSource => {
  return take(output, {
    DataPreviewOptions: _json,
    DetectSchema: __expectBoolean,
    Name: __expectString,
    StreamingOptions: (_: any) => de_KafkaStreamingSourceOptions(_, context),
    WindowSize: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1DirectKinesisSource
 */
const de_DirectKinesisSource = (output: any, context: __SerdeContext): DirectKinesisSource => {
  return take(output, {
    DataPreviewOptions: _json,
    DetectSchema: __expectBoolean,
    Name: __expectString,
    StreamingOptions: (_: any) => de_KinesisStreamingSourceOptions(_, context),
    WindowSize: __expectInt32,
  }) as any;
};

// de_DirectSchemaChangePolicy omitted.

/**
 * deserializeAws_json1_1DoubleColumnStatisticsData
 */
const de_DoubleColumnStatisticsData = (output: any, context: __SerdeContext): DoubleColumnStatisticsData => {
  return take(output, {
    MaximumValue: __limitedParseDouble,
    MinimumValue: __limitedParseDouble,
    NumberOfDistinctValues: __expectLong,
    NumberOfNulls: __expectLong,
  }) as any;
};

// de_DQAdditionalOptions omitted.

// de_DQDLAliases omitted.

// de_DQResultsPublishingOptions omitted.

// de_DQStopJobOnFailureOptions omitted.

// de_DropDuplicates omitted.

// de_DropFields omitted.

// de_DropNullFields omitted.

// de_DynamicTransform omitted.

// de_DynamoDBCatalogSource omitted.

/**
 * deserializeAws_json1_1DynamoDBTarget
 */
const de_DynamoDBTarget = (output: any, context: __SerdeContext): DynamoDBTarget => {
  return take(output, {
    Path: __expectString,
    scanAll: __expectBoolean,
    scanRate: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_json1_1DynamoDBTargetList
 */
const de_DynamoDBTargetList = (output: any, context: __SerdeContext): DynamoDBTarget[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DynamoDBTarget(entry, context);
    });
  return retVal;
};

// de_Edge omitted.

// de_EdgeList omitted.

// de_EnableAdditionalMetadata omitted.

// de_EnclosedInStringProperties omitted.

// de_EnclosedInStringPropertiesMinOne omitted.

// de_EncryptionAtRest omitted.

// de_EncryptionConfiguration omitted.

// de_EntityNotFoundException omitted.

// de_ErrorByName omitted.

// de_ErrorDetail omitted.

// de_ErrorDetails omitted.

// de_EvaluateDataQuality omitted.

// de_EvaluateDataQualityMultiFrame omitted.

/**
 * deserializeAws_json1_1EvaluatedMetricsMap
 */
const de_EvaluatedMetricsMap = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __limitedParseDouble(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1EvaluationMetrics
 */
const de_EvaluationMetrics = (output: any, context: __SerdeContext): EvaluationMetrics => {
  return take(output, {
    FindMatchesMetrics: (_: any) => de_FindMatchesMetrics(_, context),
    TransformType: __expectString,
  }) as any;
};

// de_EventBatchingCondition omitted.

// de_ExecutionProperty omitted.

// de_ExportLabelsTaskRunProperties omitted.

// de_FederatedDatabase omitted.

// de_FederatedResourceAlreadyExistsException omitted.

// de_FederatedTable omitted.

// de_FederationSourceException omitted.

// de_FederationSourceRetryableException omitted.

// de_FillMissingValues omitted.

// de_Filter omitted.

// de_FilterExpression omitted.

// de_FilterExpressions omitted.

// de_FilterValue omitted.

// de_FilterValues omitted.

/**
 * deserializeAws_json1_1FindMatchesMetrics
 */
const de_FindMatchesMetrics = (output: any, context: __SerdeContext): FindMatchesMetrics => {
  return take(output, {
    AreaUnderPRCurve: __limitedParseDouble,
    ColumnImportances: (_: any) => de_ColumnImportanceList(_, context),
    ConfusionMatrix: _json,
    F1: __limitedParseDouble,
    Precision: __limitedParseDouble,
    Recall: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_json1_1FindMatchesParameters
 */
const de_FindMatchesParameters = (output: any, context: __SerdeContext): FindMatchesParameters => {
  return take(output, {
    AccuracyCostTradeoff: __limitedParseDouble,
    EnforceProvidedLabels: __expectBoolean,
    PrecisionRecallTradeoff: __limitedParseDouble,
    PrimaryKeyColumnName: __expectString,
  }) as any;
};

// de_FindMatchesTaskRunProperties omitted.

// de_GenericMap omitted.

/**
 * deserializeAws_json1_1GetBlueprintResponse
 */
const de_GetBlueprintResponse = (output: any, context: __SerdeContext): GetBlueprintResponse => {
  return take(output, {
    Blueprint: (_: any) => de_Blueprint(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetBlueprintRunResponse
 */
const de_GetBlueprintRunResponse = (output: any, context: __SerdeContext): GetBlueprintRunResponse => {
  return take(output, {
    BlueprintRun: (_: any) => de_BlueprintRun(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetBlueprintRunsResponse
 */
const de_GetBlueprintRunsResponse = (output: any, context: __SerdeContext): GetBlueprintRunsResponse => {
  return take(output, {
    BlueprintRuns: (_: any) => de_BlueprintRuns(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetCatalogImportStatusResponse
 */
const de_GetCatalogImportStatusResponse = (output: any, context: __SerdeContext): GetCatalogImportStatusResponse => {
  return take(output, {
    ImportStatus: (_: any) => de_CatalogImportStatus(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetClassifierResponse
 */
const de_GetClassifierResponse = (output: any, context: __SerdeContext): GetClassifierResponse => {
  return take(output, {
    Classifier: (_: any) => de_Classifier(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetClassifiersResponse
 */
const de_GetClassifiersResponse = (output: any, context: __SerdeContext): GetClassifiersResponse => {
  return take(output, {
    Classifiers: (_: any) => de_ClassifierList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetColumnStatisticsForPartitionResponse
 */
const de_GetColumnStatisticsForPartitionResponse = (
  output: any,
  context: __SerdeContext
): GetColumnStatisticsForPartitionResponse => {
  return take(output, {
    ColumnStatisticsList: (_: any) => de_ColumnStatisticsList(_, context),
    Errors: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1GetColumnStatisticsForTableResponse
 */
const de_GetColumnStatisticsForTableResponse = (
  output: any,
  context: __SerdeContext
): GetColumnStatisticsForTableResponse => {
  return take(output, {
    ColumnStatisticsList: (_: any) => de_ColumnStatisticsList(_, context),
    Errors: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1GetConnectionResponse
 */
const de_GetConnectionResponse = (output: any, context: __SerdeContext): GetConnectionResponse => {
  return take(output, {
    Connection: (_: any) => de_Connection(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetConnectionsResponse
 */
const de_GetConnectionsResponse = (output: any, context: __SerdeContext): GetConnectionsResponse => {
  return take(output, {
    ConnectionList: (_: any) => de_ConnectionList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetCrawlerMetricsResponse
 */
const de_GetCrawlerMetricsResponse = (output: any, context: __SerdeContext): GetCrawlerMetricsResponse => {
  return take(output, {
    CrawlerMetricsList: (_: any) => de_CrawlerMetricsList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetCrawlerResponse
 */
const de_GetCrawlerResponse = (output: any, context: __SerdeContext): GetCrawlerResponse => {
  return take(output, {
    Crawler: (_: any) => de_Crawler(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetCrawlersResponse
 */
const de_GetCrawlersResponse = (output: any, context: __SerdeContext): GetCrawlersResponse => {
  return take(output, {
    Crawlers: (_: any) => de_CrawlerList(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_GetCustomEntityTypeResponse omitted.

/**
 * deserializeAws_json1_1GetDatabaseResponse
 */
const de_GetDatabaseResponse = (output: any, context: __SerdeContext): GetDatabaseResponse => {
  return take(output, {
    Database: (_: any) => de_Database(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetDatabasesResponse
 */
const de_GetDatabasesResponse = (output: any, context: __SerdeContext): GetDatabasesResponse => {
  return take(output, {
    DatabaseList: (_: any) => de_DatabaseList(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_GetDataCatalogEncryptionSettingsResponse omitted.

// de_GetDataflowGraphResponse omitted.

/**
 * deserializeAws_json1_1GetDataQualityResultResponse
 */
const de_GetDataQualityResultResponse = (output: any, context: __SerdeContext): GetDataQualityResultResponse => {
  return take(output, {
    CompletedOn: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DataSource: _json,
    EvaluationContext: __expectString,
    JobName: __expectString,
    JobRunId: __expectString,
    ResultId: __expectString,
    RuleResults: (_: any) => de_DataQualityRuleResults(_, context),
    RulesetEvaluationRunId: __expectString,
    RulesetName: __expectString,
    Score: __limitedParseDouble,
    StartedOn: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1GetDataQualityRuleRecommendationRunResponse
 */
const de_GetDataQualityRuleRecommendationRunResponse = (
  output: any,
  context: __SerdeContext
): GetDataQualityRuleRecommendationRunResponse => {
  return take(output, {
    CompletedOn: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreatedRulesetName: __expectString,
    DataSource: _json,
    ErrorString: __expectString,
    ExecutionTime: __expectInt32,
    LastModifiedOn: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    NumberOfWorkers: __expectInt32,
    RecommendedRuleset: __expectString,
    Role: __expectString,
    RunId: __expectString,
    StartedOn: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    Timeout: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1GetDataQualityRulesetEvaluationRunResponse
 */
const de_GetDataQualityRulesetEvaluationRunResponse = (
  output: any,
  context: __SerdeContext
): GetDataQualityRulesetEvaluationRunResponse => {
  return take(output, {
    AdditionalDataSources: _json,
    AdditionalRunOptions: _json,
    CompletedOn: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DataSource: _json,
    ErrorString: __expectString,
    ExecutionTime: __expectInt32,
    LastModifiedOn: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    NumberOfWorkers: __expectInt32,
    ResultIds: _json,
    Role: __expectString,
    RulesetNames: _json,
    RunId: __expectString,
    StartedOn: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    Timeout: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1GetDataQualityRulesetResponse
 */
const de_GetDataQualityRulesetResponse = (output: any, context: __SerdeContext): GetDataQualityRulesetResponse => {
  return take(output, {
    CreatedOn: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    LastModifiedOn: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    RecommendationRunId: __expectString,
    Ruleset: __expectString,
    TargetTable: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1GetDevEndpointResponse
 */
const de_GetDevEndpointResponse = (output: any, context: __SerdeContext): GetDevEndpointResponse => {
  return take(output, {
    DevEndpoint: (_: any) => de_DevEndpoint(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetDevEndpointsResponse
 */
const de_GetDevEndpointsResponse = (output: any, context: __SerdeContext): GetDevEndpointsResponse => {
  return take(output, {
    DevEndpoints: (_: any) => de_DevEndpointList(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_GetJobBookmarkResponse omitted.

/**
 * deserializeAws_json1_1GetJobResponse
 */
const de_GetJobResponse = (output: any, context: __SerdeContext): GetJobResponse => {
  return take(output, {
    Job: (_: any) => de_Job(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetJobRunResponse
 */
const de_GetJobRunResponse = (output: any, context: __SerdeContext): GetJobRunResponse => {
  return take(output, {
    JobRun: (_: any) => de_JobRun(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetJobRunsResponse
 */
const de_GetJobRunsResponse = (output: any, context: __SerdeContext): GetJobRunsResponse => {
  return take(output, {
    JobRuns: (_: any) => de_JobRunList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetJobsResponse
 */
const de_GetJobsResponse = (output: any, context: __SerdeContext): GetJobsResponse => {
  return take(output, {
    Jobs: (_: any) => de_JobList(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_GetMappingResponse omitted.

/**
 * deserializeAws_json1_1GetMLTaskRunResponse
 */
const de_GetMLTaskRunResponse = (output: any, context: __SerdeContext): GetMLTaskRunResponse => {
  return take(output, {
    CompletedOn: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ErrorString: __expectString,
    ExecutionTime: __expectInt32,
    LastModifiedOn: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LogGroupName: __expectString,
    Properties: _json,
    StartedOn: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    TaskRunId: __expectString,
    TransformId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetMLTaskRunsResponse
 */
const de_GetMLTaskRunsResponse = (output: any, context: __SerdeContext): GetMLTaskRunsResponse => {
  return take(output, {
    NextToken: __expectString,
    TaskRuns: (_: any) => de_TaskRunList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetMLTransformResponse
 */
const de_GetMLTransformResponse = (output: any, context: __SerdeContext): GetMLTransformResponse => {
  return take(output, {
    CreatedOn: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    EvaluationMetrics: (_: any) => de_EvaluationMetrics(_, context),
    GlueVersion: __expectString,
    InputRecordTables: _json,
    LabelCount: __expectInt32,
    LastModifiedOn: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MaxCapacity: __limitedParseDouble,
    MaxRetries: __expectInt32,
    Name: __expectString,
    NumberOfWorkers: __expectInt32,
    Parameters: (_: any) => de_TransformParameters(_, context),
    Role: __expectString,
    Schema: _json,
    Status: __expectString,
    Timeout: __expectInt32,
    TransformEncryption: _json,
    TransformId: __expectString,
    WorkerType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetMLTransformsResponse
 */
const de_GetMLTransformsResponse = (output: any, context: __SerdeContext): GetMLTransformsResponse => {
  return take(output, {
    NextToken: __expectString,
    Transforms: (_: any) => de_TransformList(_, context),
  }) as any;
};

// de_GetPartitionIndexesResponse omitted.

/**
 * deserializeAws_json1_1GetPartitionResponse
 */
const de_GetPartitionResponse = (output: any, context: __SerdeContext): GetPartitionResponse => {
  return take(output, {
    Partition: (_: any) => de_Partition(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetPartitionsResponse
 */
const de_GetPartitionsResponse = (output: any, context: __SerdeContext): GetPartitionsResponse => {
  return take(output, {
    NextToken: __expectString,
    Partitions: (_: any) => de_PartitionList(_, context),
  }) as any;
};

// de_GetPlanResponse omitted.

// de_GetRegistryResponse omitted.

/**
 * deserializeAws_json1_1GetResourcePoliciesResponse
 */
const de_GetResourcePoliciesResponse = (output: any, context: __SerdeContext): GetResourcePoliciesResponse => {
  return take(output, {
    GetResourcePoliciesResponseList: (_: any) => de_GetResourcePoliciesResponseList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetResourcePoliciesResponseList
 */
const de_GetResourcePoliciesResponseList = (output: any, context: __SerdeContext): GluePolicy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_GluePolicy(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GetResourcePolicyResponse
 */
const de_GetResourcePolicyResponse = (output: any, context: __SerdeContext): GetResourcePolicyResponse => {
  return take(output, {
    CreateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    PolicyHash: __expectString,
    PolicyInJson: __expectString,
    UpdateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_GetSchemaByDefinitionResponse omitted.

// de_GetSchemaResponse omitted.

// de_GetSchemaVersionResponse omitted.

// de_GetSchemaVersionsDiffResponse omitted.

/**
 * deserializeAws_json1_1GetSecurityConfigurationResponse
 */
const de_GetSecurityConfigurationResponse = (
  output: any,
  context: __SerdeContext
): GetSecurityConfigurationResponse => {
  return take(output, {
    SecurityConfiguration: (_: any) => de_SecurityConfiguration(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetSecurityConfigurationsResponse
 */
const de_GetSecurityConfigurationsResponse = (
  output: any,
  context: __SerdeContext
): GetSecurityConfigurationsResponse => {
  return take(output, {
    NextToken: __expectString,
    SecurityConfigurations: (_: any) => de_SecurityConfigurationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetSessionResponse
 */
const de_GetSessionResponse = (output: any, context: __SerdeContext): GetSessionResponse => {
  return take(output, {
    Session: (_: any) => de_Session(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetStatementResponse
 */
const de_GetStatementResponse = (output: any, context: __SerdeContext): GetStatementResponse => {
  return take(output, {
    Statement: (_: any) => de_Statement(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetTableResponse
 */
const de_GetTableResponse = (output: any, context: __SerdeContext): GetTableResponse => {
  return take(output, {
    Table: (_: any) => de_Table(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetTablesResponse
 */
const de_GetTablesResponse = (output: any, context: __SerdeContext): GetTablesResponse => {
  return take(output, {
    NextToken: __expectString,
    TableList: (_: any) => de_TableList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetTableVersionResponse
 */
const de_GetTableVersionResponse = (output: any, context: __SerdeContext): GetTableVersionResponse => {
  return take(output, {
    TableVersion: (_: any) => de_TableVersion(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetTableVersionsList
 */
const de_GetTableVersionsList = (output: any, context: __SerdeContext): TableVersion[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TableVersion(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GetTableVersionsResponse
 */
const de_GetTableVersionsResponse = (output: any, context: __SerdeContext): GetTableVersionsResponse => {
  return take(output, {
    NextToken: __expectString,
    TableVersions: (_: any) => de_GetTableVersionsList(_, context),
  }) as any;
};

// de_GetTagsResponse omitted.

// de_GetTriggerResponse omitted.

// de_GetTriggersResponse omitted.

/**
 * deserializeAws_json1_1GetUnfilteredPartitionMetadataResponse
 */
const de_GetUnfilteredPartitionMetadataResponse = (
  output: any,
  context: __SerdeContext
): GetUnfilteredPartitionMetadataResponse => {
  return take(output, {
    AuthorizedColumns: _json,
    IsRegisteredWithLakeFormation: __expectBoolean,
    Partition: (_: any) => de_Partition(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetUnfilteredPartitionsMetadataResponse
 */
const de_GetUnfilteredPartitionsMetadataResponse = (
  output: any,
  context: __SerdeContext
): GetUnfilteredPartitionsMetadataResponse => {
  return take(output, {
    NextToken: __expectString,
    UnfilteredPartitions: (_: any) => de_UnfilteredPartitionList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetUnfilteredTableMetadataResponse
 */
const de_GetUnfilteredTableMetadataResponse = (
  output: any,
  context: __SerdeContext
): GetUnfilteredTableMetadataResponse => {
  return take(output, {
    AuthorizedColumns: _json,
    CellFilters: _json,
    IsRegisteredWithLakeFormation: __expectBoolean,
    Table: (_: any) => de_Table(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetUserDefinedFunctionResponse
 */
const de_GetUserDefinedFunctionResponse = (output: any, context: __SerdeContext): GetUserDefinedFunctionResponse => {
  return take(output, {
    UserDefinedFunction: (_: any) => de_UserDefinedFunction(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetUserDefinedFunctionsResponse
 */
const de_GetUserDefinedFunctionsResponse = (output: any, context: __SerdeContext): GetUserDefinedFunctionsResponse => {
  return take(output, {
    NextToken: __expectString,
    UserDefinedFunctions: (_: any) => de_UserDefinedFunctionList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetWorkflowResponse
 */
const de_GetWorkflowResponse = (output: any, context: __SerdeContext): GetWorkflowResponse => {
  return take(output, {
    Workflow: (_: any) => de_Workflow(_, context),
  }) as any;
};

// de_GetWorkflowRunPropertiesResponse omitted.

/**
 * deserializeAws_json1_1GetWorkflowRunResponse
 */
const de_GetWorkflowRunResponse = (output: any, context: __SerdeContext): GetWorkflowRunResponse => {
  return take(output, {
    Run: (_: any) => de_WorkflowRun(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetWorkflowRunsResponse
 */
const de_GetWorkflowRunsResponse = (output: any, context: __SerdeContext): GetWorkflowRunsResponse => {
  return take(output, {
    NextToken: __expectString,
    Runs: (_: any) => de_WorkflowRuns(_, context),
  }) as any;
};

// de_GlueEncryptionException omitted.

/**
 * deserializeAws_json1_1GluePolicy
 */
const de_GluePolicy = (output: any, context: __SerdeContext): GluePolicy => {
  return take(output, {
    CreateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    PolicyHash: __expectString,
    PolicyInJson: __expectString,
    UpdateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_GlueSchema omitted.

// de_GlueSchemas omitted.

// de_GlueStudioPathList omitted.

// de_GlueStudioSchemaColumn omitted.

// de_GlueStudioSchemaColumnList omitted.

// de_GlueTable omitted.

// de_GlueTableAdditionalOptions omitted.

// de_GlueTables omitted.

// de_GovernedCatalogSource omitted.

// de_GovernedCatalogTarget omitted.

/**
 * deserializeAws_json1_1GrokClassifier
 */
const de_GrokClassifier = (output: any, context: __SerdeContext): GrokClassifier => {
  return take(output, {
    Classification: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CustomPatterns: __expectString,
    GrokPattern: __expectString,
    LastUpdated: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    Version: __expectLong,
  }) as any;
};

// de_IcebergTarget omitted.

// de_IcebergTargetList omitted.

// de_IdempotentParameterMismatchException omitted.

// de_IllegalBlueprintStateException omitted.

// de_IllegalSessionStateException omitted.

// de_IllegalWorkflowStateException omitted.

// de_ImportCatalogToGlueResponse omitted.

// de_ImportLabelsTaskRunProperties omitted.

// de_InternalServiceException omitted.

// de_InvalidInputException omitted.

// de_InvalidStateException omitted.

// de_JDBCConnectorOptions omitted.

// de_JDBCConnectorSource omitted.

// de_JDBCConnectorTarget omitted.

// de_JDBCDataTypeMapping omitted.

// de_JdbcTarget omitted.

// de_JdbcTargetList omitted.

/**
 * deserializeAws_json1_1Job
 */
const de_Job = (output: any, context: __SerdeContext): Job => {
  return take(output, {
    AllocatedCapacity: __expectInt32,
    CodeGenConfigurationNodes: (_: any) => de_CodeGenConfigurationNodes(_, context),
    Command: _json,
    Connections: _json,
    CreatedOn: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DefaultArguments: _json,
    Description: __expectString,
    ExecutionClass: __expectString,
    ExecutionProperty: _json,
    GlueVersion: __expectString,
    LastModifiedOn: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LogUri: __expectString,
    MaxCapacity: __limitedParseDouble,
    MaxRetries: __expectInt32,
    Name: __expectString,
    NonOverridableArguments: _json,
    NotificationProperty: _json,
    NumberOfWorkers: __expectInt32,
    Role: __expectString,
    SecurityConfiguration: __expectString,
    SourceControlDetails: _json,
    Timeout: __expectInt32,
    WorkerType: __expectString,
  }) as any;
};

// de_JobBookmarkEntry omitted.

// de_JobBookmarksEncryption omitted.

// de_JobCommand omitted.

/**
 * deserializeAws_json1_1JobList
 */
const de_JobList = (output: any, context: __SerdeContext): Job[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Job(entry, context);
    });
  return retVal;
};

// de_JobNameList omitted.

/**
 * deserializeAws_json1_1JobNodeDetails
 */
const de_JobNodeDetails = (output: any, context: __SerdeContext): JobNodeDetails => {
  return take(output, {
    JobRuns: (_: any) => de_JobRunList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1JobRun
 */
const de_JobRun = (output: any, context: __SerdeContext): JobRun => {
  return take(output, {
    AllocatedCapacity: __expectInt32,
    Arguments: _json,
    Attempt: __expectInt32,
    CompletedOn: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DPUSeconds: __limitedParseDouble,
    ErrorMessage: __expectString,
    ExecutionClass: __expectString,
    ExecutionTime: __expectInt32,
    GlueVersion: __expectString,
    Id: __expectString,
    JobName: __expectString,
    JobRunState: __expectString,
    LastModifiedOn: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LogGroupName: __expectString,
    MaxCapacity: __limitedParseDouble,
    NotificationProperty: _json,
    NumberOfWorkers: __expectInt32,
    PredecessorRuns: _json,
    PreviousRunId: __expectString,
    SecurityConfiguration: __expectString,
    StartedOn: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Timeout: __expectInt32,
    TriggerName: __expectString,
    WorkerType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1JobRunList
 */
const de_JobRunList = (output: any, context: __SerdeContext): JobRun[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_JobRun(entry, context);
    });
  return retVal;
};

// de_Join omitted.

// de_JoinColumn omitted.

// de_JoinColumns omitted.

/**
 * deserializeAws_json1_1JsonClassifier
 */
const de_JsonClassifier = (output: any, context: __SerdeContext): JsonClassifier => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    JsonPath: __expectString,
    LastUpdated: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    Version: __expectLong,
  }) as any;
};

/**
 * deserializeAws_json1_1KafkaStreamingSourceOptions
 */
const de_KafkaStreamingSourceOptions = (output: any, context: __SerdeContext): KafkaStreamingSourceOptions => {
  return take(output, {
    AddRecordTimestamp: __expectString,
    Assign: __expectString,
    BootstrapServers: __expectString,
    Classification: __expectString,
    ConnectionName: __expectString,
    Delimiter: __expectString,
    EmitConsumerLagMetrics: __expectString,
    EndingOffsets: __expectString,
    IncludeHeaders: __expectBoolean,
    MaxOffsetsPerTrigger: __expectLong,
    MinPartitions: __expectInt32,
    NumRetries: __expectInt32,
    PollTimeoutMs: __expectLong,
    RetryIntervalMs: __expectLong,
    SecurityProtocol: __expectString,
    StartingOffsets: __expectString,
    StartingTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    SubscribePattern: __expectString,
    TopicName: __expectString,
  }) as any;
};

// de_KeySchemaElement omitted.

// de_KeySchemaElementList omitted.

/**
 * deserializeAws_json1_1KinesisStreamingSourceOptions
 */
const de_KinesisStreamingSourceOptions = (output: any, context: __SerdeContext): KinesisStreamingSourceOptions => {
  return take(output, {
    AddIdleTimeBetweenReads: __expectBoolean,
    AddRecordTimestamp: __expectString,
    AvoidEmptyBatches: __expectBoolean,
    Classification: __expectString,
    Delimiter: __expectString,
    DescribeShardInterval: __expectLong,
    EmitConsumerLagMetrics: __expectString,
    EndpointUrl: __expectString,
    IdleTimeBetweenReadsInMs: __expectLong,
    MaxFetchRecordsPerShard: __expectLong,
    MaxFetchTimeInMs: __expectLong,
    MaxRecordPerRead: __expectLong,
    MaxRetryIntervalMs: __expectLong,
    NumRetries: __expectInt32,
    RetryIntervalMs: __expectLong,
    RoleArn: __expectString,
    RoleSessionName: __expectString,
    StartingPosition: __expectString,
    StartingTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    StreamArn: __expectString,
    StreamName: __expectString,
  }) as any;
};

// de_LabelingSetGenerationTaskRunProperties omitted.

// de_LakeFormationConfiguration omitted.

/**
 * deserializeAws_json1_1LastActiveDefinition
 */
const de_LastActiveDefinition = (output: any, context: __SerdeContext): LastActiveDefinition => {
  return take(output, {
    BlueprintLocation: __expectString,
    BlueprintServiceLocation: __expectString,
    Description: __expectString,
    LastModifiedOn: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ParameterSpec: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1LastCrawlInfo
 */
const de_LastCrawlInfo = (output: any, context: __SerdeContext): LastCrawlInfo => {
  return take(output, {
    ErrorMessage: __expectString,
    LogGroup: __expectString,
    LogStream: __expectString,
    MessagePrefix: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
  }) as any;
};

// de_LimitedPathList omitted.

// de_LimitedStringList omitted.

// de_LineageConfiguration omitted.

// de_ListBlueprintsResponse omitted.

// de_ListCrawlersResponse omitted.

/**
 * deserializeAws_json1_1ListCrawlsResponse
 */
const de_ListCrawlsResponse = (output: any, context: __SerdeContext): ListCrawlsResponse => {
  return take(output, {
    Crawls: (_: any) => de_CrawlerHistoryList(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_ListCustomEntityTypesResponse omitted.

/**
 * deserializeAws_json1_1ListDataQualityResultsResponse
 */
const de_ListDataQualityResultsResponse = (output: any, context: __SerdeContext): ListDataQualityResultsResponse => {
  return take(output, {
    NextToken: __expectString,
    Results: (_: any) => de_DataQualityResultDescriptionList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListDataQualityRuleRecommendationRunsResponse
 */
const de_ListDataQualityRuleRecommendationRunsResponse = (
  output: any,
  context: __SerdeContext
): ListDataQualityRuleRecommendationRunsResponse => {
  return take(output, {
    NextToken: __expectString,
    Runs: (_: any) => de_DataQualityRuleRecommendationRunList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListDataQualityRulesetEvaluationRunsResponse
 */
const de_ListDataQualityRulesetEvaluationRunsResponse = (
  output: any,
  context: __SerdeContext
): ListDataQualityRulesetEvaluationRunsResponse => {
  return take(output, {
    NextToken: __expectString,
    Runs: (_: any) => de_DataQualityRulesetEvaluationRunList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListDataQualityRulesetsResponse
 */
const de_ListDataQualityRulesetsResponse = (output: any, context: __SerdeContext): ListDataQualityRulesetsResponse => {
  return take(output, {
    NextToken: __expectString,
    Rulesets: (_: any) => de_DataQualityRulesetList(_, context),
  }) as any;
};

// de_ListDevEndpointsResponse omitted.

// de_ListJobsResponse omitted.

// de_ListMLTransformsResponse omitted.

// de_ListRegistriesResponse omitted.

// de_ListSchemasResponse omitted.

// de_ListSchemaVersionsResponse omitted.

/**
 * deserializeAws_json1_1ListSessionsResponse
 */
const de_ListSessionsResponse = (output: any, context: __SerdeContext): ListSessionsResponse => {
  return take(output, {
    Ids: _json,
    NextToken: __expectString,
    Sessions: (_: any) => de_SessionList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListStatementsResponse
 */
const de_ListStatementsResponse = (output: any, context: __SerdeContext): ListStatementsResponse => {
  return take(output, {
    NextToken: __expectString,
    Statements: (_: any) => de_StatementList(_, context),
  }) as any;
};

// de_ListTriggersResponse omitted.

// de_ListWorkflowsResponse omitted.

// de_LocationMap omitted.

// de_LocationStringList omitted.

// de_LongColumnStatisticsData omitted.

// de_ManyInputs omitted.

/**
 * deserializeAws_json1_1Mapping
 */
const de_Mapping = (output: any, context: __SerdeContext): Mapping => {
  return take(output, {
    Children: (_: any) => de_Mappings(_, context),
    Dropped: __expectBoolean,
    FromPath: _json,
    FromType: __expectString,
    ToKey: __expectString,
    ToType: __expectString,
  }) as any;
};

// de_MappingEntry omitted.

// de_MappingList omitted.

/**
 * deserializeAws_json1_1Mappings
 */
const de_Mappings = (output: any, context: __SerdeContext): Mapping[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Mapping(entry, context);
    });
  return retVal;
};

// de_MapValue omitted.

// de_MatchCriteria omitted.

// de_Merge omitted.

// de_MetadataInfo omitted.

// de_MetadataInfoMap omitted.

// de_MicrosoftSQLServerCatalogSource omitted.

// de_MicrosoftSQLServerCatalogTarget omitted.

/**
 * deserializeAws_json1_1MLTransform
 */
const de_MLTransform = (output: any, context: __SerdeContext): MLTransform => {
  return take(output, {
    CreatedOn: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    EvaluationMetrics: (_: any) => de_EvaluationMetrics(_, context),
    GlueVersion: __expectString,
    InputRecordTables: _json,
    LabelCount: __expectInt32,
    LastModifiedOn: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MaxCapacity: __limitedParseDouble,
    MaxRetries: __expectInt32,
    Name: __expectString,
    NumberOfWorkers: __expectInt32,
    Parameters: (_: any) => de_TransformParameters(_, context),
    Role: __expectString,
    Schema: _json,
    Status: __expectString,
    Timeout: __expectInt32,
    TransformEncryption: _json,
    TransformId: __expectString,
    WorkerType: __expectString,
  }) as any;
};

// de_MLTransformNotReadyException omitted.

// de_MLUserDataEncryption omitted.

// de_MongoDBTarget omitted.

// de_MongoDBTargetList omitted.

// de_MySQLCatalogSource omitted.

// de_MySQLCatalogTarget omitted.

// de_NameStringList omitted.

/**
 * deserializeAws_json1_1Node
 */
const de_Node = (output: any, context: __SerdeContext): Node => {
  return take(output, {
    CrawlerDetails: (_: any) => de_CrawlerNodeDetails(_, context),
    JobDetails: (_: any) => de_JobNodeDetails(_, context),
    Name: __expectString,
    TriggerDetails: _json,
    Type: __expectString,
    UniqueId: __expectString,
  }) as any;
};

// de_NodeIdList omitted.

/**
 * deserializeAws_json1_1NodeList
 */
const de_NodeList = (output: any, context: __SerdeContext): Node[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Node(entry, context);
    });
  return retVal;
};

// de_NoScheduleException omitted.

// de_NotificationProperty omitted.

// de_NullCheckBoxList omitted.

// de_NullValueField omitted.

// de_NullValueFields omitted.

// de_OneInput omitted.

// de_OperationTimeoutException omitted.

// de_Option omitted.

// de_OptionList omitted.

// de_OracleSQLCatalogSource omitted.

// de_OracleSQLCatalogTarget omitted.

// de_OrchestrationArgumentsMap omitted.

// de_OrchestrationStringList omitted.

// de_Order omitted.

// de_OrderList omitted.

// de_OtherMetadataValueList omitted.

// de_OtherMetadataValueListItem omitted.

// de_ParametersMap omitted.

/**
 * deserializeAws_json1_1Partition
 */
const de_Partition = (output: any, context: __SerdeContext): Partition => {
  return take(output, {
    CatalogId: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DatabaseName: __expectString,
    LastAccessTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastAnalyzedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Parameters: _json,
    StorageDescriptor: _json,
    TableName: __expectString,
    Values: _json,
  }) as any;
};

// de_PartitionError omitted.

// de_PartitionErrors omitted.

// de_PartitionIndexDescriptor omitted.

// de_PartitionIndexDescriptorList omitted.

/**
 * deserializeAws_json1_1PartitionList
 */
const de_PartitionList = (output: any, context: __SerdeContext): Partition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Partition(entry, context);
    });
  return retVal;
};

// de_PartitionValueList omitted.

// de_PathList omitted.

// de_PermissionList omitted.

// de_PermissionTypeMismatchException omitted.

// de_PhysicalConnectionRequirements omitted.

/**
 * deserializeAws_json1_1PIIDetection
 */
const de_PIIDetection = (output: any, context: __SerdeContext): PIIDetection => {
  return take(output, {
    EntityTypesToDetect: _json,
    Inputs: _json,
    MaskValue: __expectString,
    Name: __expectString,
    OutputColumnName: __expectString,
    PiiType: __expectString,
    SampleFraction: __limitedParseDouble,
    ThresholdFraction: __limitedParseDouble,
  }) as any;
};

// de_PostgreSQLCatalogSource omitted.

// de_PostgreSQLCatalogTarget omitted.

// de_Predecessor omitted.

// de_PredecessorList omitted.

// de_Predicate omitted.

// de_PrincipalPermissions omitted.

// de_PrincipalPermissionsList omitted.

// de_PublicKeysList omitted.

// de_PutDataCatalogEncryptionSettingsResponse omitted.

// de_PutResourcePolicyResponse omitted.

// de_PutSchemaVersionMetadataResponse omitted.

// de_PutWorkflowRunPropertiesResponse omitted.

// de_QuerySchemaVersionMetadataResponse omitted.

// de_RecrawlPolicy omitted.

// de_RedshiftSource omitted.

// de_RedshiftTarget omitted.

// de_RegisterSchemaVersionResponse omitted.

// de_RegistryListDefinition omitted.

// de_RegistryListItem omitted.

// de_RelationalCatalogSource omitted.

// de_RemoveSchemaVersionMetadataResponse omitted.

// de_RenameField omitted.

// de_ResetJobBookmarkResponse omitted.

// de_ResourceNotReadyException omitted.

// de_ResourceNumberLimitExceededException omitted.

// de_ResourceUri omitted.

// de_ResourceUriList omitted.

// de_ResumeWorkflowRunResponse omitted.

// de_RulesetNames omitted.

// de_RunStatementResponse omitted.

// de_S3CatalogDeltaSource omitted.

// de_S3CatalogHudiSource omitted.

// de_S3CatalogSource omitted.

// de_S3CatalogTarget omitted.

// de_S3CsvSource omitted.

// de_S3DeltaCatalogTarget omitted.

// de_S3DeltaDirectTarget omitted.

// de_S3DeltaSource omitted.

// de_S3DirectSourceAdditionalOptions omitted.

// de_S3DirectTarget omitted.

// de_S3Encryption omitted.

// de_S3EncryptionList omitted.

// de_S3GlueParquetTarget omitted.

// de_S3HudiCatalogTarget omitted.

// de_S3HudiDirectTarget omitted.

// de_S3HudiSource omitted.

// de_S3JsonSource omitted.

// de_S3ParquetSource omitted.

// de_S3SourceAdditionalOptions omitted.

// de_S3Target omitted.

// de_S3TargetList omitted.

// de_Schedule omitted.

// de_SchedulerNotRunningException omitted.

// de_SchedulerRunningException omitted.

// de_SchedulerTransitioningException omitted.

// de_SchemaChangePolicy omitted.

// de_SchemaColumn omitted.

// de_SchemaId omitted.

// de_SchemaListDefinition omitted.

// de_SchemaListItem omitted.

// de_SchemaReference omitted.

// de_SchemaVersionErrorItem omitted.

// de_SchemaVersionErrorList omitted.

// de_SchemaVersionList omitted.

// de_SchemaVersionListItem omitted.

/**
 * deserializeAws_json1_1SearchTablesResponse
 */
const de_SearchTablesResponse = (output: any, context: __SerdeContext): SearchTablesResponse => {
  return take(output, {
    NextToken: __expectString,
    TableList: (_: any) => de_TableList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1SecurityConfiguration
 */
const de_SecurityConfiguration = (output: any, context: __SerdeContext): SecurityConfiguration => {
  return take(output, {
    CreatedTimeStamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EncryptionConfiguration: _json,
    Name: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1SecurityConfigurationList
 */
const de_SecurityConfigurationList = (output: any, context: __SerdeContext): SecurityConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SecurityConfiguration(entry, context);
    });
  return retVal;
};

// de_SecurityGroupIdList omitted.

// de_SelectFields omitted.

// de_SelectFromCollection omitted.

// de_SerDeInfo omitted.

/**
 * deserializeAws_json1_1Session
 */
const de_Session = (output: any, context: __SerdeContext): Session => {
  return take(output, {
    Command: _json,
    Connections: _json,
    CreatedOn: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DefaultArguments: _json,
    Description: __expectString,
    ErrorMessage: __expectString,
    GlueVersion: __expectString,
    Id: __expectString,
    MaxCapacity: __limitedParseDouble,
    Progress: __limitedParseDouble,
    Role: __expectString,
    SecurityConfiguration: __expectString,
    Status: __expectString,
  }) as any;
};

// de_SessionCommand omitted.

// de_SessionIdList omitted.

/**
 * deserializeAws_json1_1SessionList
 */
const de_SessionList = (output: any, context: __SerdeContext): Session[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Session(entry, context);
    });
  return retVal;
};

// de_SkewedInfo omitted.

// de_SourceControlDetails omitted.

// de_SparkConnectorSource omitted.

// de_SparkConnectorTarget omitted.

// de_SparkSQL omitted.

/**
 * deserializeAws_json1_1Spigot
 */
const de_Spigot = (output: any, context: __SerdeContext): Spigot => {
  return take(output, {
    Inputs: _json,
    Name: __expectString,
    Path: __expectString,
    Prob: __limitedParseDouble,
    Topk: __expectInt32,
  }) as any;
};

// de_SplitFields omitted.

// de_SqlAlias omitted.

// de_SqlAliases omitted.

// de_StartBlueprintRunResponse omitted.

// de_StartCrawlerResponse omitted.

// de_StartCrawlerScheduleResponse omitted.

// de_StartDataQualityRuleRecommendationRunResponse omitted.

// de_StartDataQualityRulesetEvaluationRunResponse omitted.

// de_StartExportLabelsTaskRunResponse omitted.

// de_StartImportLabelsTaskRunResponse omitted.

// de_StartingEventBatchCondition omitted.

// de_StartJobRunResponse omitted.

// de_StartMLEvaluationTaskRunResponse omitted.

// de_StartMLLabelingSetGenerationTaskRunResponse omitted.

// de_StartTriggerResponse omitted.

// de_StartWorkflowRunResponse omitted.

/**
 * deserializeAws_json1_1Statement
 */
const de_Statement = (output: any, context: __SerdeContext): Statement => {
  return take(output, {
    Code: __expectString,
    CompletedOn: __expectLong,
    Id: __expectInt32,
    Output: _json,
    Progress: __limitedParseDouble,
    StartedOn: __expectLong,
    State: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1StatementList
 */
const de_StatementList = (output: any, context: __SerdeContext): Statement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Statement(entry, context);
    });
  return retVal;
};

// de_StatementOutput omitted.

// de_StatementOutputData omitted.

// de_StopCrawlerResponse omitted.

// de_StopCrawlerScheduleResponse omitted.

// de_StopSessionResponse omitted.

// de_StopTriggerResponse omitted.

// de_StopWorkflowRunResponse omitted.

// de_StorageDescriptor omitted.

// de_StreamingDataPreviewOptions omitted.

/**
 * deserializeAws_json1_1StringColumnStatisticsData
 */
const de_StringColumnStatisticsData = (output: any, context: __SerdeContext): StringColumnStatisticsData => {
  return take(output, {
    AverageLength: __limitedParseDouble,
    MaximumLength: __expectLong,
    NumberOfDistinctValues: __expectLong,
    NumberOfNulls: __expectLong,
  }) as any;
};

// de_StringList omitted.

/**
 * deserializeAws_json1_1Table
 */
const de_Table = (output: any, context: __SerdeContext): Table => {
  return take(output, {
    CatalogId: __expectString,
    CreateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreatedBy: __expectString,
    DatabaseName: __expectString,
    Description: __expectString,
    FederatedTable: _json,
    IsRegisteredWithLakeFormation: __expectBoolean,
    LastAccessTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastAnalyzedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    Owner: __expectString,
    Parameters: _json,
    PartitionKeys: _json,
    Retention: __expectInt32,
    StorageDescriptor: _json,
    TableType: __expectString,
    TargetTable: _json,
    UpdateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    VersionId: __expectString,
    ViewExpandedText: __expectString,
    ViewOriginalText: __expectString,
  }) as any;
};

// de_TableError omitted.

// de_TableErrors omitted.

// de_TableIdentifier omitted.

/**
 * deserializeAws_json1_1TableList
 */
const de_TableList = (output: any, context: __SerdeContext): Table[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Table(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TableVersion
 */
const de_TableVersion = (output: any, context: __SerdeContext): TableVersion => {
  return take(output, {
    Table: (_: any) => de_Table(_, context),
    VersionId: __expectString,
  }) as any;
};

// de_TableVersionError omitted.

// de_TableVersionErrors omitted.

// de_TagResourceResponse omitted.

// de_TagsMap omitted.

/**
 * deserializeAws_json1_1TaskRun
 */
const de_TaskRun = (output: any, context: __SerdeContext): TaskRun => {
  return take(output, {
    CompletedOn: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ErrorString: __expectString,
    ExecutionTime: __expectInt32,
    LastModifiedOn: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LogGroupName: __expectString,
    Properties: _json,
    StartedOn: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    TaskRunId: __expectString,
    TransformId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1TaskRunList
 */
const de_TaskRunList = (output: any, context: __SerdeContext): TaskRun[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TaskRun(entry, context);
    });
  return retVal;
};

// de_TaskRunProperties omitted.

// de_TransformConfigParameter omitted.

// de_TransformConfigParameterList omitted.

// de_TransformEncryption omitted.

// de_TransformIdList omitted.

/**
 * deserializeAws_json1_1TransformList
 */
const de_TransformList = (output: any, context: __SerdeContext): MLTransform[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MLTransform(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TransformParameters
 */
const de_TransformParameters = (output: any, context: __SerdeContext): TransformParameters => {
  return take(output, {
    FindMatchesParameters: (_: any) => de_FindMatchesParameters(_, context),
    TransformType: __expectString,
  }) as any;
};

// de_TransformSchema omitted.

// de_Trigger omitted.

// de_TriggerList omitted.

// de_TriggerNameList omitted.

// de_TriggerNodeDetails omitted.

// de_TwoInputs omitted.

/**
 * deserializeAws_json1_1UnfilteredPartition
 */
const de_UnfilteredPartition = (output: any, context: __SerdeContext): UnfilteredPartition => {
  return take(output, {
    AuthorizedColumns: _json,
    IsRegisteredWithLakeFormation: __expectBoolean,
    Partition: (_: any) => de_Partition(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1UnfilteredPartitionList
 */
const de_UnfilteredPartitionList = (output: any, context: __SerdeContext): UnfilteredPartition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_UnfilteredPartition(entry, context);
    });
  return retVal;
};

// de_Union omitted.

// de_UntagResourceResponse omitted.

// de_UpdateBlueprintResponse omitted.

// de_UpdateClassifierResponse omitted.

/**
 * deserializeAws_json1_1UpdateColumnStatisticsForPartitionResponse
 */
const de_UpdateColumnStatisticsForPartitionResponse = (
  output: any,
  context: __SerdeContext
): UpdateColumnStatisticsForPartitionResponse => {
  return take(output, {
    Errors: (_: any) => de_ColumnStatisticsErrors(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateColumnStatisticsForTableResponse
 */
const de_UpdateColumnStatisticsForTableResponse = (
  output: any,
  context: __SerdeContext
): UpdateColumnStatisticsForTableResponse => {
  return take(output, {
    Errors: (_: any) => de_ColumnStatisticsErrors(_, context),
  }) as any;
};

// de_UpdateConnectionResponse omitted.

// de_UpdateCrawlerResponse omitted.

// de_UpdateCrawlerScheduleResponse omitted.

// de_UpdateDatabaseResponse omitted.

// de_UpdateDataQualityRulesetResponse omitted.

// de_UpdateDevEndpointResponse omitted.

// de_UpdateJobFromSourceControlResponse omitted.

// de_UpdateJobResponse omitted.

// de_UpdateMLTransformResponse omitted.

// de_UpdatePartitionResponse omitted.

// de_UpdateRegistryResponse omitted.

// de_UpdateSchemaResponse omitted.

// de_UpdateSourceControlFromJobResponse omitted.

// de_UpdateTableResponse omitted.

// de_UpdateTriggerResponse omitted.

// de_UpdateUserDefinedFunctionResponse omitted.

// de_UpdateWorkflowResponse omitted.

// de_UpsertRedshiftTargetOptions omitted.

/**
 * deserializeAws_json1_1UserDefinedFunction
 */
const de_UserDefinedFunction = (output: any, context: __SerdeContext): UserDefinedFunction => {
  return take(output, {
    CatalogId: __expectString,
    ClassName: __expectString,
    CreateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DatabaseName: __expectString,
    FunctionName: __expectString,
    OwnerName: __expectString,
    OwnerType: __expectString,
    ResourceUris: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1UserDefinedFunctionList
 */
const de_UserDefinedFunctionList = (output: any, context: __SerdeContext): UserDefinedFunction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_UserDefinedFunction(entry, context);
    });
  return retVal;
};

// de_ValidationException omitted.

// de_ValueStringList omitted.

// de_VersionMismatchException omitted.

/**
 * deserializeAws_json1_1Workflow
 */
const de_Workflow = (output: any, context: __SerdeContext): Workflow => {
  return take(output, {
    BlueprintDetails: _json,
    CreatedOn: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DefaultRunProperties: _json,
    Description: __expectString,
    Graph: (_: any) => de_WorkflowGraph(_, context),
    LastModifiedOn: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastRun: (_: any) => de_WorkflowRun(_, context),
    MaxConcurrentRuns: __expectInt32,
    Name: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1WorkflowGraph
 */
const de_WorkflowGraph = (output: any, context: __SerdeContext): WorkflowGraph => {
  return take(output, {
    Edges: _json,
    Nodes: (_: any) => de_NodeList(_, context),
  }) as any;
};

// de_WorkflowNames omitted.

/**
 * deserializeAws_json1_1WorkflowRun
 */
const de_WorkflowRun = (output: any, context: __SerdeContext): WorkflowRun => {
  return take(output, {
    CompletedOn: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ErrorMessage: __expectString,
    Graph: (_: any) => de_WorkflowGraph(_, context),
    Name: __expectString,
    PreviousRunId: __expectString,
    StartedOn: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StartingEventBatchCondition: _json,
    Statistics: _json,
    Status: __expectString,
    WorkflowRunId: __expectString,
    WorkflowRunProperties: _json,
  }) as any;
};

// de_WorkflowRunProperties omitted.

/**
 * deserializeAws_json1_1WorkflowRuns
 */
const de_WorkflowRuns = (output: any, context: __SerdeContext): WorkflowRun[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_WorkflowRun(entry, context);
    });
  return retVal;
};

// de_WorkflowRunStatistics omitted.

/**
 * deserializeAws_json1_1Workflows
 */
const de_Workflows = (output: any, context: __SerdeContext): Workflow[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Workflow(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1XMLClassifier
 */
const de_XMLClassifier = (output: any, context: __SerdeContext): XMLClassifier => {
  return take(output, {
    Classification: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastUpdated: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    RowTag: __expectString,
    Version: __expectLong,
  }) as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const throwDefaultError = withBaseException(__BaseException);
const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `AWSGlue.${operation}`,
  };
}

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
