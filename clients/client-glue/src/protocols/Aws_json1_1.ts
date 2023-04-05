// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
  serializeFloat as __serializeFloat,
  take,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

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
  AthenaConnectorSource,
  AuditContext,
  BasicCatalogTarget,
  BatchCreatePartitionRequest,
  BatchCreatePartitionResponse,
  BatchDeleteConnectionRequest,
  BatchDeleteConnectionResponse,
  BatchDeletePartitionRequest,
  BatchDeletePartitionResponse,
  BatchDeleteTableRequest,
  BatchDeleteTableResponse,
  BatchDeleteTableVersionRequest,
  BatchDeleteTableVersionResponse,
  BatchGetBlueprintsRequest,
  BatchGetBlueprintsResponse,
  BatchGetCrawlersRequest,
  BatchGetCrawlersResponse,
  BatchGetCustomEntityTypesRequest,
  BatchGetCustomEntityTypesResponse,
  BatchGetDataQualityResultRequest,
  BatchGetDataQualityResultResponse,
  BatchGetDevEndpointsRequest,
  BatchGetDevEndpointsResponse,
  BatchGetJobsRequest,
  BatchGetPartitionRequest,
  BatchGetPartitionResponse,
  BatchGetTriggersRequest,
  BatchGetTriggersResponse,
  BatchGetWorkflowsRequest,
  BatchGetWorkflowsResponse,
  BatchStopJobRunError,
  BatchStopJobRunRequest,
  BatchStopJobRunResponse,
  BatchStopJobRunSuccessfulSubmission,
  BatchUpdatePartitionFailureEntry,
  BatchUpdatePartitionRequest,
  BatchUpdatePartitionRequestEntry,
  BatchUpdatePartitionResponse,
  Blueprint,
  BlueprintDetails,
  CancelDataQualityRuleRecommendationRunRequest,
  CancelDataQualityRuleRecommendationRunResponse,
  CancelDataQualityRulesetEvaluationRunRequest,
  CancelDataQualityRulesetEvaluationRunResponse,
  CancelMLTaskRunRequest,
  CancelMLTaskRunResponse,
  CancelStatementRequest,
  CancelStatementResponse,
  CatalogDeltaSource,
  CatalogHudiSource,
  CatalogKafkaSource,
  CatalogKinesisSource,
  CatalogSchemaChangePolicy,
  CatalogSource,
  CatalogTarget,
  CheckSchemaVersionValidityInput,
  CheckSchemaVersionValidityResponse,
  Column,
  ConcurrentModificationException,
  Condition,
  ConnectionInput,
  ConnectionPropertyKey,
  ConnectionsList,
  Crawl,
  Crawler,
  CrawlerNodeDetails,
  CrawlerTargets,
  CreateBlueprintRequest,
  CreateBlueprintResponse,
  CreateClassifierRequest,
  CreateClassifierResponse,
  CreateConnectionRequest,
  CreateConnectionResponse,
  CreateCrawlerRequest,
  CreateCrawlerResponse,
  CreateCsvClassifierRequest,
  CreateCustomEntityTypeRequest,
  CreateCustomEntityTypeResponse,
  CreateDatabaseRequest,
  CreateDatabaseResponse,
  CreateDataQualityRulesetRequest,
  CreateDataQualityRulesetResponse,
  CreateDevEndpointRequest,
  CreateDevEndpointResponse,
  CreateGrokClassifierRequest,
  CreateJobResponse,
  CreateJsonClassifierRequest,
  CreateMLTransformRequest,
  CreateMLTransformResponse,
  CreatePartitionIndexRequest,
  CreatePartitionIndexResponse,
  CreatePartitionRequest,
  CreatePartitionResponse,
  CreateXMLClassifierRequest,
  CustomCode,
  CustomEntityType,
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
  Edge,
  EntityNotFoundException,
  ErrorDetail,
  EvaluateDataQuality,
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
  IdempotentParameterMismatchException,
  IllegalSessionStateException,
  InternalServiceException,
  InvalidInputException,
  InvalidStateException,
  JDBCConnectorOptions,
  JDBCConnectorSource,
  JDBCConnectorTarget,
  JDBCDataType,
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
  OracleSQLCatalogSource,
  OracleSQLCatalogTarget,
  Order,
  Partition,
  PartitionError,
  PartitionIndex,
  PartitionInput,
  PartitionValueList,
  Permission,
  PhysicalConnectionRequirements,
  PIIDetection,
  PostgreSQLCatalogSource,
  PostgreSQLCatalogTarget,
  Predecessor,
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
  Schedule,
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
  StartingEventBatchCondition,
  StorageDescriptor,
  StreamingDataPreviewOptions,
  TableError,
  TableVersionError,
  TransformConfigParameter,
  TransformEncryption,
  TransformParameters,
  Trigger,
  TriggerNodeDetails,
  Union,
  UpsertRedshiftTargetOptions,
  ValidationException,
  Workflow,
  WorkflowGraph,
  WorkflowRun,
  WorkflowRunStatistics,
} from "../models/models_0";
import {
  BackfillError,
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
  ColumnError,
  ColumnImportance,
  ColumnRowFilter,
  ColumnStatistics,
  ColumnStatisticsData,
  ConditionCheckFailureException,
  ConflictException,
  ConfusionMatrix,
  Connection,
  ConnectionPasswordEncryption,
  CrawlerMetrics,
  CrawlerRunningException,
  CreateRegistryInput,
  CreateRegistryResponse,
  CreateSchemaInput,
  CreateSchemaResponse,
  CreateScriptRequest,
  CreateScriptResponse,
  CreateSecurityConfigurationRequest,
  CreateSecurityConfigurationResponse,
  CreateSessionRequest,
  CreateSessionResponse,
  CreateTableRequest,
  CreateTableResponse,
  CreateTriggerRequest,
  CreateTriggerResponse,
  CreateUserDefinedFunctionRequest,
  CreateUserDefinedFunctionResponse,
  CreateWorkflowRequest,
  CreateWorkflowResponse,
  CsvClassifier,
  Database,
  DataCatalogEncryptionSettings,
  DataQualityEvaluationRunAdditionalRunOptions,
  DateColumnStatisticsData,
  DecimalColumnStatisticsData,
  DecimalNumber,
  DeleteBlueprintRequest,
  DeleteBlueprintResponse,
  DeleteClassifierRequest,
  DeleteClassifierResponse,
  DeleteColumnStatisticsForPartitionRequest,
  DeleteColumnStatisticsForPartitionResponse,
  DeleteColumnStatisticsForTableRequest,
  DeleteColumnStatisticsForTableResponse,
  DeleteConnectionRequest,
  DeleteConnectionResponse,
  DeleteCrawlerRequest,
  DeleteCrawlerResponse,
  DeleteCustomEntityTypeRequest,
  DeleteCustomEntityTypeResponse,
  DeleteDatabaseRequest,
  DeleteDatabaseResponse,
  DeleteDataQualityRulesetRequest,
  DeleteDataQualityRulesetResponse,
  DeleteDevEndpointRequest,
  DeleteDevEndpointResponse,
  DeleteJobRequest,
  DeleteJobResponse,
  DeleteMLTransformRequest,
  DeleteMLTransformResponse,
  DeletePartitionIndexRequest,
  DeletePartitionIndexResponse,
  DeletePartitionRequest,
  DeletePartitionResponse,
  DeleteRegistryInput,
  DeleteRegistryResponse,
  DeleteResourcePolicyRequest,
  DeleteResourcePolicyResponse,
  DeleteSchemaInput,
  DeleteSchemaResponse,
  DeleteSchemaVersionsInput,
  DeleteSchemaVersionsResponse,
  DeleteSecurityConfigurationRequest,
  DeleteSecurityConfigurationResponse,
  DeleteSessionRequest,
  DeleteSessionResponse,
  DeleteTableRequest,
  DeleteTableResponse,
  DeleteTableVersionRequest,
  DeleteTableVersionResponse,
  DeleteTriggerRequest,
  DeleteTriggerResponse,
  DeleteUserDefinedFunctionRequest,
  DeleteUserDefinedFunctionResponse,
  DeleteWorkflowRequest,
  DeleteWorkflowResponse,
  DoubleColumnStatisticsData,
  EncryptionAtRest,
  EncryptionConfiguration,
  ErrorDetails,
  EvaluationMetrics,
  ExportLabelsTaskRunProperties,
  FederatedTable,
  FindMatchesMetrics,
  FindMatchesTaskRunProperties,
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
  GetCustomEntityTypeResponse,
  GetDatabaseRequest,
  GetDatabaseResponse,
  GetDatabasesRequest,
  GetDatabasesResponse,
  GetDataCatalogEncryptionSettingsRequest,
  GetDataCatalogEncryptionSettingsResponse,
  GetDataflowGraphRequest,
  GetDataflowGraphResponse,
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
  GetJobBookmarkResponse,
  GetJobRequest,
  GetJobRunRequest,
  GetJobRunResponse,
  GetJobRunsRequest,
  GetJobRunsResponse,
  GetJobsRequest,
  GetMappingRequest,
  GetMappingResponse,
  GetMLTaskRunRequest,
  GetMLTaskRunResponse,
  GetMLTaskRunsRequest,
  GetMLTaskRunsResponse,
  GetMLTransformRequest,
  GetMLTransformResponse,
  GetMLTransformsRequest,
  GetMLTransformsResponse,
  GetPartitionIndexesRequest,
  GetPartitionIndexesResponse,
  GetPartitionRequest,
  GetPartitionResponse,
  GetPartitionsRequest,
  GetPartitionsResponse,
  GetPlanRequest,
  GetPlanResponse,
  GetRegistryInput,
  GetRegistryResponse,
  GetResourcePoliciesRequest,
  GetResourcePoliciesResponse,
  GetResourcePolicyRequest,
  GetResourcePolicyResponse,
  GetSchemaByDefinitionInput,
  GetSchemaByDefinitionResponse,
  GetSchemaInput,
  GetSchemaResponse,
  GetSchemaVersionInput,
  GetSchemaVersionResponse,
  GetSchemaVersionsDiffInput,
  GetSchemaVersionsDiffResponse,
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
  GetTagsResponse,
  GetTriggerRequest,
  GetTriggerResponse,
  GetTriggersRequest,
  GetTriggersResponse,
  GetUnfilteredPartitionMetadataRequest,
  GetUnfilteredPartitionMetadataResponse,
  GetUnfilteredPartitionsMetadataRequest,
  GetUnfilteredPartitionsMetadataResponse,
  GetUnfilteredTableMetadataRequest,
  GetUnfilteredTableMetadataResponse,
  GetUserDefinedFunctionRequest,
  GetUserDefinedFunctionResponse,
  GetUserDefinedFunctionsRequest,
  GetUserDefinedFunctionsResponse,
  GetWorkflowRequest,
  GetWorkflowResponse,
  GetWorkflowRunRequest,
  GetWorkflowRunResponse,
  GluePolicy,
  GrokClassifier,
  ImportLabelsTaskRunProperties,
  JobBookmarkEntry,
  JobBookmarksEncryption,
  JsonClassifier,
  KeySchemaElement,
  LabelingSetGenerationTaskRunProperties,
  Location,
  LongColumnStatisticsData,
  MappingEntry,
  MLTransform,
  PartitionIndexDescriptor,
  PermissionType,
  PermissionTypeMismatchException,
  RegistryId,
  ResourceUri,
  S3Encryption,
  SchedulerTransitioningException,
  SchemaColumn,
  SchemaVersionErrorItem,
  SchemaVersionNumber,
  SecurityConfiguration,
  Segment,
  Session,
  SessionCommand,
  Statement,
  StatementOutput,
  StatementOutputData,
  StringColumnStatisticsData,
  Table,
  TableIdentifier,
  TableInput,
  TableVersion,
  TaskRun,
  TaskRunFilterCriteria,
  TaskRunProperties,
  TaskRunSortCriteria,
  TransformFilterCriteria,
  TransformSortCriteria,
  UnfilteredPartition,
  UserDefinedFunction,
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
  GetWorkflowRunPropertiesRequest,
  GetWorkflowRunPropertiesResponse,
  GetWorkflowRunsRequest,
  GetWorkflowRunsResponse,
  IllegalBlueprintStateException,
  IllegalWorkflowStateException,
  ImportCatalogToGlueRequest,
  ImportCatalogToGlueResponse,
  Job,
  JobUpdate,
  ListBlueprintsRequest,
  ListBlueprintsResponse,
  ListCrawlersRequest,
  ListCrawlersResponse,
  ListCrawlsRequest,
  ListCrawlsResponse,
  ListCustomEntityTypesRequest,
  ListCustomEntityTypesResponse,
  ListDataQualityResultsRequest,
  ListDataQualityResultsResponse,
  ListDataQualityRuleRecommendationRunsRequest,
  ListDataQualityRuleRecommendationRunsResponse,
  ListDataQualityRulesetEvaluationRunsRequest,
  ListDataQualityRulesetEvaluationRunsResponse,
  ListDataQualityRulesetsRequest,
  ListDataQualityRulesetsResponse,
  ListDevEndpointsRequest,
  ListDevEndpointsResponse,
  ListJobsRequest,
  ListJobsResponse,
  ListMLTransformsRequest,
  ListMLTransformsResponse,
  ListRegistriesInput,
  ListRegistriesResponse,
  ListSchemasInput,
  ListSchemasResponse,
  ListSchemaVersionsInput,
  ListSchemaVersionsResponse,
  ListSessionsRequest,
  ListSessionsResponse,
  ListStatementsRequest,
  ListStatementsResponse,
  ListTriggersRequest,
  ListTriggersResponse,
  ListWorkflowsRequest,
  ListWorkflowsResponse,
  Mapping,
  MetadataInfo,
  MetadataKeyValuePair,
  MLTransformNotReadyException,
  NoScheduleException,
  OtherMetadataValueListItem,
  PropertyPredicate,
  PutDataCatalogEncryptionSettingsRequest,
  PutDataCatalogEncryptionSettingsResponse,
  PutResourcePolicyRequest,
  PutResourcePolicyResponse,
  PutSchemaVersionMetadataInput,
  PutSchemaVersionMetadataResponse,
  PutWorkflowRunPropertiesRequest,
  PutWorkflowRunPropertiesResponse,
  QuerySchemaVersionMetadataInput,
  QuerySchemaVersionMetadataResponse,
  RegisterSchemaVersionInput,
  RegisterSchemaVersionResponse,
  RegistryListItem,
  RemoveSchemaVersionMetadataInput,
  RemoveSchemaVersionMetadataResponse,
  ResetJobBookmarkRequest,
  ResetJobBookmarkResponse,
  ResumeWorkflowRunRequest,
  ResumeWorkflowRunResponse,
  RunStatementRequest,
  RunStatementResponse,
  SchedulerNotRunningException,
  SchedulerRunningException,
  SchemaListItem,
  SchemaVersionListItem,
  SearchTablesRequest,
  SearchTablesResponse,
  SortCriterion,
  StartBlueprintRunRequest,
  StartBlueprintRunResponse,
  StartCrawlerRequest,
  StartCrawlerResponse,
  StartCrawlerScheduleRequest,
  StartCrawlerScheduleResponse,
  StartDataQualityRuleRecommendationRunRequest,
  StartDataQualityRuleRecommendationRunResponse,
  StartDataQualityRulesetEvaluationRunRequest,
  StartDataQualityRulesetEvaluationRunResponse,
  StartExportLabelsTaskRunRequest,
  StartExportLabelsTaskRunResponse,
  StartImportLabelsTaskRunRequest,
  StartImportLabelsTaskRunResponse,
  StartJobRunRequest,
  StartJobRunResponse,
  StartMLEvaluationTaskRunRequest,
  StartMLEvaluationTaskRunResponse,
  StartMLLabelingSetGenerationTaskRunRequest,
  StartMLLabelingSetGenerationTaskRunResponse,
  StartTriggerRequest,
  StartTriggerResponse,
  StartWorkflowRunRequest,
  StartWorkflowRunResponse,
  StopCrawlerRequest,
  StopCrawlerResponse,
  StopCrawlerScheduleRequest,
  StopCrawlerScheduleResponse,
  StopSessionRequest,
  StopSessionResponse,
  StopTriggerRequest,
  StopTriggerResponse,
  StopWorkflowRunRequest,
  StopWorkflowRunResponse,
  TagResourceRequest,
  TagResourceResponse,
  TriggerUpdate,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateBlueprintRequest,
  UpdateBlueprintResponse,
  UpdateClassifierRequest,
  UpdateClassifierResponse,
  UpdateColumnStatisticsForPartitionRequest,
  UpdateColumnStatisticsForPartitionResponse,
  UpdateColumnStatisticsForTableRequest,
  UpdateColumnStatisticsForTableResponse,
  UpdateConnectionRequest,
  UpdateConnectionResponse,
  UpdateCrawlerRequest,
  UpdateCrawlerResponse,
  UpdateCrawlerScheduleRequest,
  UpdateCrawlerScheduleResponse,
  UpdateCsvClassifierRequest,
  UpdateDatabaseRequest,
  UpdateDatabaseResponse,
  UpdateDataQualityRulesetRequest,
  UpdateDataQualityRulesetResponse,
  UpdateDevEndpointRequest,
  UpdateDevEndpointResponse,
  UpdateGrokClassifierRequest,
  UpdateJobFromSourceControlRequest,
  UpdateJobFromSourceControlResponse,
  UpdateJobRequest,
  UpdateJobResponse,
  UpdateJsonClassifierRequest,
  UpdateMLTransformRequest,
  UpdateMLTransformResponse,
  UpdatePartitionRequest,
  UpdatePartitionResponse,
  UpdateRegistryInput,
  UpdateRegistryResponse,
  UpdateSchemaInput,
  UpdateSchemaResponse,
  UpdateSourceControlFromJobRequest,
  UpdateSourceControlFromJobResponse,
  UpdateTableRequest,
  UpdateTableResponse,
  UpdateTriggerRequest,
  UpdateTriggerResponse,
  UpdateUserDefinedFunctionRequest,
  UpdateUserDefinedFunctionResponse,
  UpdateWorkflowRequest,
  UpdateWorkflowResponse,
  UpdateXMLClassifierRequest,
  VersionMismatchException,
} from "../models/models_2";

export const serializeAws_json1_1BatchCreatePartitionCommand = async (
  input: BatchCreatePartitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.BatchCreatePartition",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchCreatePartitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchDeleteConnectionCommand = async (
  input: BatchDeleteConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.BatchDeleteConnection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchDeleteConnectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchDeletePartitionCommand = async (
  input: BatchDeletePartitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.BatchDeletePartition",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchDeletePartitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchDeleteTableCommand = async (
  input: BatchDeleteTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.BatchDeleteTable",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchDeleteTableRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchDeleteTableVersionCommand = async (
  input: BatchDeleteTableVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.BatchDeleteTableVersion",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchDeleteTableVersionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchGetBlueprintsCommand = async (
  input: BatchGetBlueprintsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.BatchGetBlueprints",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchGetBlueprintsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchGetCrawlersCommand = async (
  input: BatchGetCrawlersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.BatchGetCrawlers",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchGetCrawlersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchGetCustomEntityTypesCommand = async (
  input: BatchGetCustomEntityTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.BatchGetCustomEntityTypes",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchGetCustomEntityTypesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchGetDataQualityResultCommand = async (
  input: BatchGetDataQualityResultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.BatchGetDataQualityResult",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchGetDataQualityResultRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchGetDevEndpointsCommand = async (
  input: BatchGetDevEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.BatchGetDevEndpoints",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchGetDevEndpointsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchGetJobsCommand = async (
  input: BatchGetJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.BatchGetJobs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchGetJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchGetPartitionCommand = async (
  input: BatchGetPartitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.BatchGetPartition",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchGetPartitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchGetTriggersCommand = async (
  input: BatchGetTriggersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.BatchGetTriggers",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchGetTriggersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchGetWorkflowsCommand = async (
  input: BatchGetWorkflowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.BatchGetWorkflows",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchGetWorkflowsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchStopJobRunCommand = async (
  input: BatchStopJobRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.BatchStopJobRun",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchStopJobRunRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchUpdatePartitionCommand = async (
  input: BatchUpdatePartitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.BatchUpdatePartition",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchUpdatePartitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CancelDataQualityRuleRecommendationRunCommand = async (
  input: CancelDataQualityRuleRecommendationRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.CancelDataQualityRuleRecommendationRun",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CancelDataQualityRuleRecommendationRunRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CancelDataQualityRulesetEvaluationRunCommand = async (
  input: CancelDataQualityRulesetEvaluationRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.CancelDataQualityRulesetEvaluationRun",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CancelDataQualityRulesetEvaluationRunRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CancelMLTaskRunCommand = async (
  input: CancelMLTaskRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.CancelMLTaskRun",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CancelMLTaskRunRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CancelStatementCommand = async (
  input: CancelStatementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.CancelStatement",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CancelStatementRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CheckSchemaVersionValidityCommand = async (
  input: CheckSchemaVersionValidityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.CheckSchemaVersionValidity",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CheckSchemaVersionValidityInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateBlueprintCommand = async (
  input: CreateBlueprintCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.CreateBlueprint",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateBlueprintRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateClassifierCommand = async (
  input: CreateClassifierCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.CreateClassifier",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateClassifierRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateConnectionCommand = async (
  input: CreateConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.CreateConnection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateConnectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateCrawlerCommand = async (
  input: CreateCrawlerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.CreateCrawler",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateCrawlerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateCustomEntityTypeCommand = async (
  input: CreateCustomEntityTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.CreateCustomEntityType",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateCustomEntityTypeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDatabaseCommand = async (
  input: CreateDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.CreateDatabase",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateDatabaseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDataQualityRulesetCommand = async (
  input: CreateDataQualityRulesetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.CreateDataQualityRuleset",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateDataQualityRulesetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDevEndpointCommand = async (
  input: CreateDevEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.CreateDevEndpoint",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateDevEndpointRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateJobCommand = async (
  input: CreateJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.CreateJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateMLTransformCommand = async (
  input: CreateMLTransformCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.CreateMLTransform",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateMLTransformRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreatePartitionCommand = async (
  input: CreatePartitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.CreatePartition",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreatePartitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreatePartitionIndexCommand = async (
  input: CreatePartitionIndexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.CreatePartitionIndex",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreatePartitionIndexRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateRegistryCommand = async (
  input: CreateRegistryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.CreateRegistry",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateRegistryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateSchemaCommand = async (
  input: CreateSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.CreateSchema",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateSchemaInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateScriptCommand = async (
  input: CreateScriptCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.CreateScript",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateScriptRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateSecurityConfigurationCommand = async (
  input: CreateSecurityConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.CreateSecurityConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateSecurityConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateSessionCommand = async (
  input: CreateSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.CreateSession",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateSessionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateTableCommand = async (
  input: CreateTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.CreateTable",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateTableRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateTriggerCommand = async (
  input: CreateTriggerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.CreateTrigger",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateTriggerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateUserDefinedFunctionCommand = async (
  input: CreateUserDefinedFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.CreateUserDefinedFunction",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateUserDefinedFunctionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateWorkflowCommand = async (
  input: CreateWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.CreateWorkflow",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateWorkflowRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteBlueprintCommand = async (
  input: DeleteBlueprintCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.DeleteBlueprint",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteBlueprintRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteClassifierCommand = async (
  input: DeleteClassifierCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.DeleteClassifier",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteClassifierRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteColumnStatisticsForPartitionCommand = async (
  input: DeleteColumnStatisticsForPartitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.DeleteColumnStatisticsForPartition",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteColumnStatisticsForPartitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteColumnStatisticsForTableCommand = async (
  input: DeleteColumnStatisticsForTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.DeleteColumnStatisticsForTable",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteColumnStatisticsForTableRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteConnectionCommand = async (
  input: DeleteConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.DeleteConnection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteConnectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteCrawlerCommand = async (
  input: DeleteCrawlerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.DeleteCrawler",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteCrawlerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteCustomEntityTypeCommand = async (
  input: DeleteCustomEntityTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.DeleteCustomEntityType",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteCustomEntityTypeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteDatabaseCommand = async (
  input: DeleteDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.DeleteDatabase",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteDatabaseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteDataQualityRulesetCommand = async (
  input: DeleteDataQualityRulesetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.DeleteDataQualityRuleset",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteDataQualityRulesetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteDevEndpointCommand = async (
  input: DeleteDevEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.DeleteDevEndpoint",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteDevEndpointRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteJobCommand = async (
  input: DeleteJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.DeleteJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteMLTransformCommand = async (
  input: DeleteMLTransformCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.DeleteMLTransform",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteMLTransformRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeletePartitionCommand = async (
  input: DeletePartitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.DeletePartition",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeletePartitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeletePartitionIndexCommand = async (
  input: DeletePartitionIndexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.DeletePartitionIndex",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeletePartitionIndexRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteRegistryCommand = async (
  input: DeleteRegistryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.DeleteRegistry",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteRegistryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteResourcePolicyCommand = async (
  input: DeleteResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.DeleteResourcePolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteResourcePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteSchemaCommand = async (
  input: DeleteSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.DeleteSchema",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteSchemaInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteSchemaVersionsCommand = async (
  input: DeleteSchemaVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.DeleteSchemaVersions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteSchemaVersionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteSecurityConfigurationCommand = async (
  input: DeleteSecurityConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.DeleteSecurityConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteSecurityConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteSessionCommand = async (
  input: DeleteSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.DeleteSession",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteSessionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteTableCommand = async (
  input: DeleteTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.DeleteTable",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteTableRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteTableVersionCommand = async (
  input: DeleteTableVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.DeleteTableVersion",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteTableVersionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteTriggerCommand = async (
  input: DeleteTriggerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.DeleteTrigger",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteTriggerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteUserDefinedFunctionCommand = async (
  input: DeleteUserDefinedFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.DeleteUserDefinedFunction",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteUserDefinedFunctionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteWorkflowCommand = async (
  input: DeleteWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.DeleteWorkflow",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteWorkflowRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetBlueprintCommand = async (
  input: GetBlueprintCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetBlueprint",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetBlueprintRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetBlueprintRunCommand = async (
  input: GetBlueprintRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetBlueprintRun",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetBlueprintRunRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetBlueprintRunsCommand = async (
  input: GetBlueprintRunsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetBlueprintRuns",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetBlueprintRunsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetCatalogImportStatusCommand = async (
  input: GetCatalogImportStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetCatalogImportStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetCatalogImportStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetClassifierCommand = async (
  input: GetClassifierCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetClassifier",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetClassifierRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetClassifiersCommand = async (
  input: GetClassifiersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetClassifiers",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetClassifiersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetColumnStatisticsForPartitionCommand = async (
  input: GetColumnStatisticsForPartitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetColumnStatisticsForPartition",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetColumnStatisticsForPartitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetColumnStatisticsForTableCommand = async (
  input: GetColumnStatisticsForTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetColumnStatisticsForTable",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetColumnStatisticsForTableRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetConnectionCommand = async (
  input: GetConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetConnection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetConnectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetConnectionsCommand = async (
  input: GetConnectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetConnections",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetConnectionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetCrawlerCommand = async (
  input: GetCrawlerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetCrawler",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetCrawlerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetCrawlerMetricsCommand = async (
  input: GetCrawlerMetricsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetCrawlerMetrics",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetCrawlerMetricsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetCrawlersCommand = async (
  input: GetCrawlersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetCrawlers",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetCrawlersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetCustomEntityTypeCommand = async (
  input: GetCustomEntityTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetCustomEntityType",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetCustomEntityTypeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDatabaseCommand = async (
  input: GetDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetDatabase",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDatabaseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDatabasesCommand = async (
  input: GetDatabasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetDatabases",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDatabasesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDataCatalogEncryptionSettingsCommand = async (
  input: GetDataCatalogEncryptionSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetDataCatalogEncryptionSettings",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDataCatalogEncryptionSettingsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDataflowGraphCommand = async (
  input: GetDataflowGraphCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetDataflowGraph",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDataflowGraphRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDataQualityResultCommand = async (
  input: GetDataQualityResultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetDataQualityResult",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDataQualityResultRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDataQualityRuleRecommendationRunCommand = async (
  input: GetDataQualityRuleRecommendationRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetDataQualityRuleRecommendationRun",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDataQualityRuleRecommendationRunRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDataQualityRulesetCommand = async (
  input: GetDataQualityRulesetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetDataQualityRuleset",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDataQualityRulesetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDataQualityRulesetEvaluationRunCommand = async (
  input: GetDataQualityRulesetEvaluationRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetDataQualityRulesetEvaluationRun",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDataQualityRulesetEvaluationRunRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDevEndpointCommand = async (
  input: GetDevEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetDevEndpoint",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDevEndpointRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDevEndpointsCommand = async (
  input: GetDevEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetDevEndpoints",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDevEndpointsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetJobCommand = async (
  input: GetJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetJobBookmarkCommand = async (
  input: GetJobBookmarkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetJobBookmark",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetJobBookmarkRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetJobRunCommand = async (
  input: GetJobRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetJobRun",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetJobRunRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetJobRunsCommand = async (
  input: GetJobRunsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetJobRuns",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetJobRunsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetJobsCommand = async (
  input: GetJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetJobs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetMappingCommand = async (
  input: GetMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetMapping",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetMappingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetMLTaskRunCommand = async (
  input: GetMLTaskRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetMLTaskRun",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetMLTaskRunRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetMLTaskRunsCommand = async (
  input: GetMLTaskRunsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetMLTaskRuns",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetMLTaskRunsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetMLTransformCommand = async (
  input: GetMLTransformCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetMLTransform",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetMLTransformRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetMLTransformsCommand = async (
  input: GetMLTransformsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetMLTransforms",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetMLTransformsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetPartitionCommand = async (
  input: GetPartitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetPartition",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetPartitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetPartitionIndexesCommand = async (
  input: GetPartitionIndexesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetPartitionIndexes",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetPartitionIndexesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetPartitionsCommand = async (
  input: GetPartitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetPartitions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetPartitionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetPlanCommand = async (
  input: GetPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetPlan",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetPlanRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRegistryCommand = async (
  input: GetRegistryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetRegistry",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRegistryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetResourcePoliciesCommand = async (
  input: GetResourcePoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetResourcePolicies",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetResourcePoliciesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetResourcePolicyCommand = async (
  input: GetResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetResourcePolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetResourcePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetSchemaCommand = async (
  input: GetSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetSchema",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetSchemaInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetSchemaByDefinitionCommand = async (
  input: GetSchemaByDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetSchemaByDefinition",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetSchemaByDefinitionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetSchemaVersionCommand = async (
  input: GetSchemaVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetSchemaVersion",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetSchemaVersionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetSchemaVersionsDiffCommand = async (
  input: GetSchemaVersionsDiffCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetSchemaVersionsDiff",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetSchemaVersionsDiffInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetSecurityConfigurationCommand = async (
  input: GetSecurityConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetSecurityConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetSecurityConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetSecurityConfigurationsCommand = async (
  input: GetSecurityConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetSecurityConfigurations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetSecurityConfigurationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetSessionCommand = async (
  input: GetSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetSession",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetSessionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetStatementCommand = async (
  input: GetStatementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetStatement",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetStatementRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetTableCommand = async (
  input: GetTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetTable",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetTableRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetTablesCommand = async (
  input: GetTablesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetTables",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetTablesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetTableVersionCommand = async (
  input: GetTableVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetTableVersion",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetTableVersionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetTableVersionsCommand = async (
  input: GetTableVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetTableVersions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetTableVersionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetTagsCommand = async (
  input: GetTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetTags",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetTriggerCommand = async (
  input: GetTriggerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetTrigger",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetTriggerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetTriggersCommand = async (
  input: GetTriggersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetTriggers",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetTriggersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetUnfilteredPartitionMetadataCommand = async (
  input: GetUnfilteredPartitionMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetUnfilteredPartitionMetadata",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetUnfilteredPartitionMetadataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetUnfilteredPartitionsMetadataCommand = async (
  input: GetUnfilteredPartitionsMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetUnfilteredPartitionsMetadata",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetUnfilteredPartitionsMetadataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetUnfilteredTableMetadataCommand = async (
  input: GetUnfilteredTableMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetUnfilteredTableMetadata",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetUnfilteredTableMetadataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetUserDefinedFunctionCommand = async (
  input: GetUserDefinedFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetUserDefinedFunction",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetUserDefinedFunctionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetUserDefinedFunctionsCommand = async (
  input: GetUserDefinedFunctionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetUserDefinedFunctions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetUserDefinedFunctionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetWorkflowCommand = async (
  input: GetWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetWorkflow",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetWorkflowRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetWorkflowRunCommand = async (
  input: GetWorkflowRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetWorkflowRun",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetWorkflowRunRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetWorkflowRunPropertiesCommand = async (
  input: GetWorkflowRunPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetWorkflowRunProperties",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetWorkflowRunPropertiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetWorkflowRunsCommand = async (
  input: GetWorkflowRunsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetWorkflowRuns",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetWorkflowRunsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ImportCatalogToGlueCommand = async (
  input: ImportCatalogToGlueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.ImportCatalogToGlue",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ImportCatalogToGlueRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListBlueprintsCommand = async (
  input: ListBlueprintsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.ListBlueprints",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListBlueprintsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListCrawlersCommand = async (
  input: ListCrawlersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.ListCrawlers",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListCrawlersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListCrawlsCommand = async (
  input: ListCrawlsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.ListCrawls",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListCrawlsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListCustomEntityTypesCommand = async (
  input: ListCustomEntityTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.ListCustomEntityTypes",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListCustomEntityTypesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDataQualityResultsCommand = async (
  input: ListDataQualityResultsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.ListDataQualityResults",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListDataQualityResultsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDataQualityRuleRecommendationRunsCommand = async (
  input: ListDataQualityRuleRecommendationRunsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.ListDataQualityRuleRecommendationRuns",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListDataQualityRuleRecommendationRunsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDataQualityRulesetEvaluationRunsCommand = async (
  input: ListDataQualityRulesetEvaluationRunsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.ListDataQualityRulesetEvaluationRuns",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListDataQualityRulesetEvaluationRunsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDataQualityRulesetsCommand = async (
  input: ListDataQualityRulesetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.ListDataQualityRulesets",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListDataQualityRulesetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDevEndpointsCommand = async (
  input: ListDevEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.ListDevEndpoints",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListDevEndpointsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListJobsCommand = async (
  input: ListJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.ListJobs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListMLTransformsCommand = async (
  input: ListMLTransformsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.ListMLTransforms",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListMLTransformsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListRegistriesCommand = async (
  input: ListRegistriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.ListRegistries",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListRegistriesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListSchemasCommand = async (
  input: ListSchemasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.ListSchemas",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListSchemasInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListSchemaVersionsCommand = async (
  input: ListSchemaVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.ListSchemaVersions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListSchemaVersionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListSessionsCommand = async (
  input: ListSessionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.ListSessions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListSessionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListStatementsCommand = async (
  input: ListStatementsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.ListStatements",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListStatementsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTriggersCommand = async (
  input: ListTriggersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.ListTriggers",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTriggersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListWorkflowsCommand = async (
  input: ListWorkflowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.ListWorkflows",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListWorkflowsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutDataCatalogEncryptionSettingsCommand = async (
  input: PutDataCatalogEncryptionSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.PutDataCatalogEncryptionSettings",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutDataCatalogEncryptionSettingsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutResourcePolicyCommand = async (
  input: PutResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.PutResourcePolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutResourcePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutSchemaVersionMetadataCommand = async (
  input: PutSchemaVersionMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.PutSchemaVersionMetadata",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutSchemaVersionMetadataInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutWorkflowRunPropertiesCommand = async (
  input: PutWorkflowRunPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.PutWorkflowRunProperties",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutWorkflowRunPropertiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1QuerySchemaVersionMetadataCommand = async (
  input: QuerySchemaVersionMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.QuerySchemaVersionMetadata",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1QuerySchemaVersionMetadataInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RegisterSchemaVersionCommand = async (
  input: RegisterSchemaVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.RegisterSchemaVersion",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RegisterSchemaVersionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RemoveSchemaVersionMetadataCommand = async (
  input: RemoveSchemaVersionMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.RemoveSchemaVersionMetadata",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RemoveSchemaVersionMetadataInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ResetJobBookmarkCommand = async (
  input: ResetJobBookmarkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.ResetJobBookmark",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ResetJobBookmarkRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ResumeWorkflowRunCommand = async (
  input: ResumeWorkflowRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.ResumeWorkflowRun",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ResumeWorkflowRunRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RunStatementCommand = async (
  input: RunStatementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.RunStatement",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RunStatementRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SearchTablesCommand = async (
  input: SearchTablesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.SearchTables",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SearchTablesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartBlueprintRunCommand = async (
  input: StartBlueprintRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.StartBlueprintRun",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartBlueprintRunRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartCrawlerCommand = async (
  input: StartCrawlerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.StartCrawler",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartCrawlerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartCrawlerScheduleCommand = async (
  input: StartCrawlerScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.StartCrawlerSchedule",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartCrawlerScheduleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartDataQualityRuleRecommendationRunCommand = async (
  input: StartDataQualityRuleRecommendationRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.StartDataQualityRuleRecommendationRun",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartDataQualityRuleRecommendationRunRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartDataQualityRulesetEvaluationRunCommand = async (
  input: StartDataQualityRulesetEvaluationRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.StartDataQualityRulesetEvaluationRun",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartDataQualityRulesetEvaluationRunRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartExportLabelsTaskRunCommand = async (
  input: StartExportLabelsTaskRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.StartExportLabelsTaskRun",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartExportLabelsTaskRunRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartImportLabelsTaskRunCommand = async (
  input: StartImportLabelsTaskRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.StartImportLabelsTaskRun",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartImportLabelsTaskRunRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartJobRunCommand = async (
  input: StartJobRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.StartJobRun",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartJobRunRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartMLEvaluationTaskRunCommand = async (
  input: StartMLEvaluationTaskRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.StartMLEvaluationTaskRun",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartMLEvaluationTaskRunRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartMLLabelingSetGenerationTaskRunCommand = async (
  input: StartMLLabelingSetGenerationTaskRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.StartMLLabelingSetGenerationTaskRun",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartMLLabelingSetGenerationTaskRunRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartTriggerCommand = async (
  input: StartTriggerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.StartTrigger",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartTriggerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartWorkflowRunCommand = async (
  input: StartWorkflowRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.StartWorkflowRun",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartWorkflowRunRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopCrawlerCommand = async (
  input: StopCrawlerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.StopCrawler",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopCrawlerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopCrawlerScheduleCommand = async (
  input: StopCrawlerScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.StopCrawlerSchedule",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopCrawlerScheduleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopSessionCommand = async (
  input: StopSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.StopSession",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopSessionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopTriggerCommand = async (
  input: StopTriggerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.StopTrigger",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopTriggerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopWorkflowRunCommand = async (
  input: StopWorkflowRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.StopWorkflowRun",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopWorkflowRunRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateBlueprintCommand = async (
  input: UpdateBlueprintCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.UpdateBlueprint",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateBlueprintRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateClassifierCommand = async (
  input: UpdateClassifierCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.UpdateClassifier",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateClassifierRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateColumnStatisticsForPartitionCommand = async (
  input: UpdateColumnStatisticsForPartitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.UpdateColumnStatisticsForPartition",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateColumnStatisticsForPartitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateColumnStatisticsForTableCommand = async (
  input: UpdateColumnStatisticsForTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.UpdateColumnStatisticsForTable",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateColumnStatisticsForTableRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateConnectionCommand = async (
  input: UpdateConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.UpdateConnection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateConnectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateCrawlerCommand = async (
  input: UpdateCrawlerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.UpdateCrawler",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateCrawlerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateCrawlerScheduleCommand = async (
  input: UpdateCrawlerScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.UpdateCrawlerSchedule",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateCrawlerScheduleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateDatabaseCommand = async (
  input: UpdateDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.UpdateDatabase",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateDatabaseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateDataQualityRulesetCommand = async (
  input: UpdateDataQualityRulesetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.UpdateDataQualityRuleset",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateDataQualityRulesetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateDevEndpointCommand = async (
  input: UpdateDevEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.UpdateDevEndpoint",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateDevEndpointRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateJobCommand = async (
  input: UpdateJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.UpdateJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateJobFromSourceControlCommand = async (
  input: UpdateJobFromSourceControlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.UpdateJobFromSourceControl",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateJobFromSourceControlRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateMLTransformCommand = async (
  input: UpdateMLTransformCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.UpdateMLTransform",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateMLTransformRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdatePartitionCommand = async (
  input: UpdatePartitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.UpdatePartition",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdatePartitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateRegistryCommand = async (
  input: UpdateRegistryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.UpdateRegistry",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateRegistryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateSchemaCommand = async (
  input: UpdateSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.UpdateSchema",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateSchemaInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateSourceControlFromJobCommand = async (
  input: UpdateSourceControlFromJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.UpdateSourceControlFromJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateSourceControlFromJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateTableCommand = async (
  input: UpdateTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.UpdateTable",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateTableRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateTriggerCommand = async (
  input: UpdateTriggerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.UpdateTrigger",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateTriggerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateUserDefinedFunctionCommand = async (
  input: UpdateUserDefinedFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.UpdateUserDefinedFunction",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateUserDefinedFunctionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateWorkflowCommand = async (
  input: UpdateWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.UpdateWorkflow",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateWorkflowRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1BatchCreatePartitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreatePartitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchCreatePartitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchCreatePartitionResponse(data, context);
  const response: BatchCreatePartitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchCreatePartitionCommandError = async (
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
      throw await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1BatchDeleteConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchDeleteConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchDeleteConnectionResponse(data, context);
  const response: BatchDeleteConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchDeleteConnectionCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1BatchDeletePartitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeletePartitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchDeletePartitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchDeletePartitionResponse(data, context);
  const response: BatchDeletePartitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchDeletePartitionCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1BatchDeleteTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchDeleteTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchDeleteTableResponse(data, context);
  const response: BatchDeleteTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchDeleteTableCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNotReadyException":
    case "com.amazonaws.glue#ResourceNotReadyException":
      throw await deserializeAws_json1_1ResourceNotReadyExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1BatchDeleteTableVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteTableVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchDeleteTableVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchDeleteTableVersionResponse(data, context);
  const response: BatchDeleteTableVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchDeleteTableVersionCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1BatchGetBlueprintsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetBlueprintsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchGetBlueprintsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetBlueprintsResponse(data, context);
  const response: BatchGetBlueprintsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchGetBlueprintsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1BatchGetCrawlersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetCrawlersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchGetCrawlersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetCrawlersResponse(data, context);
  const response: BatchGetCrawlersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchGetCrawlersCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1BatchGetCustomEntityTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetCustomEntityTypesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchGetCustomEntityTypesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetCustomEntityTypesResponse(data, context);
  const response: BatchGetCustomEntityTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchGetCustomEntityTypesCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1BatchGetDataQualityResultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetDataQualityResultCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchGetDataQualityResultCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetDataQualityResultResponse(data, context);
  const response: BatchGetDataQualityResultCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchGetDataQualityResultCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1BatchGetDevEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetDevEndpointsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchGetDevEndpointsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetDevEndpointsResponse(data, context);
  const response: BatchGetDevEndpointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchGetDevEndpointsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1BatchGetJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchGetJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetJobsResponse(data, context);
  const response: BatchGetJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchGetJobsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1BatchGetPartitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetPartitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchGetPartitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetPartitionResponse(data, context);
  const response: BatchGetPartitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchGetPartitionCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "FederationSourceException":
    case "com.amazonaws.glue#FederationSourceException":
      throw await deserializeAws_json1_1FederationSourceExceptionResponse(parsedOutput, context);
    case "FederationSourceRetryableException":
    case "com.amazonaws.glue#FederationSourceRetryableException":
      throw await deserializeAws_json1_1FederationSourceRetryableExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.glue#InvalidStateException":
      throw await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1BatchGetTriggersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetTriggersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchGetTriggersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetTriggersResponse(data, context);
  const response: BatchGetTriggersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchGetTriggersCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1BatchGetWorkflowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetWorkflowsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchGetWorkflowsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetWorkflowsResponse(data, context);
  const response: BatchGetWorkflowsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchGetWorkflowsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1BatchStopJobRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchStopJobRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchStopJobRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchStopJobRunResponse(data, context);
  const response: BatchStopJobRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchStopJobRunCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1BatchUpdatePartitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdatePartitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchUpdatePartitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchUpdatePartitionResponse(data, context);
  const response: BatchUpdatePartitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchUpdatePartitionCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1CancelDataQualityRuleRecommendationRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelDataQualityRuleRecommendationRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CancelDataQualityRuleRecommendationRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CancelDataQualityRuleRecommendationRunResponse(data, context);
  const response: CancelDataQualityRuleRecommendationRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CancelDataQualityRuleRecommendationRunCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1CancelDataQualityRulesetEvaluationRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelDataQualityRulesetEvaluationRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CancelDataQualityRulesetEvaluationRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CancelDataQualityRulesetEvaluationRunResponse(data, context);
  const response: CancelDataQualityRulesetEvaluationRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CancelDataQualityRulesetEvaluationRunCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1CancelMLTaskRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelMLTaskRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CancelMLTaskRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CancelMLTaskRunResponse(data, context);
  const response: CancelMLTaskRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CancelMLTaskRunCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1CancelStatementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelStatementCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CancelStatementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CancelStatementResponse(data, context);
  const response: CancelStatementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CancelStatementCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "IllegalSessionStateException":
    case "com.amazonaws.glue#IllegalSessionStateException":
      throw await deserializeAws_json1_1IllegalSessionStateExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1CheckSchemaVersionValidityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CheckSchemaVersionValidityCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CheckSchemaVersionValidityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CheckSchemaVersionValidityResponse(data, context);
  const response: CheckSchemaVersionValidityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CheckSchemaVersionValidityCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1CreateBlueprintCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBlueprintCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateBlueprintCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateBlueprintResponse(data, context);
  const response: CreateBlueprintCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateBlueprintCommandError = async (
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
      throw await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1CreateClassifierCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClassifierCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateClassifierCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateClassifierResponse(data, context);
  const response: CreateClassifierCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateClassifierCommandError = async (
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
      throw await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1CreateConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateConnectionResponse(data, context);
  const response: CreateConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateConnectionCommandError = async (
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
      throw await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1CreateCrawlerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCrawlerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateCrawlerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateCrawlerResponse(data, context);
  const response: CreateCrawlerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateCrawlerCommandError = async (
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
      throw await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1CreateCustomEntityTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomEntityTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateCustomEntityTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateCustomEntityTypeResponse(data, context);
  const response: CreateCustomEntityTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateCustomEntityTypeCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.glue#IdempotentParameterMismatchException":
      throw await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1CreateDatabaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatabaseCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateDatabaseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDatabaseResponse(data, context);
  const response: CreateDatabaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDatabaseCommandError = async (
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
      throw await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "FederatedResourceAlreadyExistsException":
    case "com.amazonaws.glue#FederatedResourceAlreadyExistsException":
      throw await deserializeAws_json1_1FederatedResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1CreateDataQualityRulesetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataQualityRulesetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateDataQualityRulesetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDataQualityRulesetResponse(data, context);
  const response: CreateDataQualityRulesetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDataQualityRulesetCommandError = async (
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
      throw await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1CreateDevEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDevEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateDevEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDevEndpointResponse(data, context);
  const response: CreateDevEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDevEndpointCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.glue#IdempotentParameterMismatchException":
      throw await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.glue#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1CreateJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateJobResponse(data, context);
  const response: CreateJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateJobCommandError = async (
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
      throw await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.glue#IdempotentParameterMismatchException":
      throw await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1CreateMLTransformCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMLTransformCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateMLTransformCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateMLTransformResponse(data, context);
  const response: CreateMLTransformCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateMLTransformCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.glue#IdempotentParameterMismatchException":
      throw await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1CreatePartitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePartitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreatePartitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreatePartitionResponse(data, context);
  const response: CreatePartitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreatePartitionCommandError = async (
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
      throw await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1CreatePartitionIndexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePartitionIndexCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreatePartitionIndexCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreatePartitionIndexResponse(data, context);
  const response: CreatePartitionIndexCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreatePartitionIndexCommandError = async (
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
      throw await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1CreateRegistryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRegistryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateRegistryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateRegistryResponse(data, context);
  const response: CreateRegistryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateRegistryCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1CreateSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSchemaCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateSchemaCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateSchemaResponse(data, context);
  const response: CreateSchemaCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateSchemaCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1CreateScriptCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateScriptCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateScriptCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateScriptResponse(data, context);
  const response: CreateScriptCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateScriptCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1CreateSecurityConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSecurityConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateSecurityConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateSecurityConfigurationResponse(data, context);
  const response: CreateSecurityConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateSecurityConfigurationCommandError = async (
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
      throw await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1CreateSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSessionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateSessionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateSessionResponse(data, context);
  const response: CreateSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateSessionCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.glue#IdempotentParameterMismatchException":
      throw await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.glue#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1CreateTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateTableResponse(data, context);
  const response: CreateTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateTableCommandError = async (
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
      throw await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNotReadyException":
    case "com.amazonaws.glue#ResourceNotReadyException":
      throw await deserializeAws_json1_1ResourceNotReadyExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1CreateTriggerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTriggerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateTriggerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateTriggerResponse(data, context);
  const response: CreateTriggerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateTriggerCommandError = async (
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
      throw await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.glue#IdempotentParameterMismatchException":
      throw await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1CreateUserDefinedFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserDefinedFunctionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateUserDefinedFunctionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateUserDefinedFunctionResponse(data, context);
  const response: CreateUserDefinedFunctionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateUserDefinedFunctionCommandError = async (
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
      throw await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1CreateWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkflowCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateWorkflowCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateWorkflowResponse(data, context);
  const response: CreateWorkflowCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateWorkflowCommandError = async (
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
      throw await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DeleteBlueprintCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBlueprintCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteBlueprintCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteBlueprintResponse(data, context);
  const response: DeleteBlueprintCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteBlueprintCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DeleteClassifierCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClassifierCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteClassifierCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteClassifierResponse(data, context);
  const response: DeleteClassifierCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteClassifierCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DeleteColumnStatisticsForPartitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteColumnStatisticsForPartitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteColumnStatisticsForPartitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteColumnStatisticsForPartitionResponse(data, context);
  const response: DeleteColumnStatisticsForPartitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteColumnStatisticsForPartitionCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DeleteColumnStatisticsForTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteColumnStatisticsForTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteColumnStatisticsForTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteColumnStatisticsForTableResponse(data, context);
  const response: DeleteColumnStatisticsForTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteColumnStatisticsForTableCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DeleteConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteConnectionResponse(data, context);
  const response: DeleteConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteConnectionCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DeleteCrawlerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCrawlerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteCrawlerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteCrawlerResponse(data, context);
  const response: DeleteCrawlerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteCrawlerCommandError = async (
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
      throw await deserializeAws_json1_1CrawlerRunningExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "SchedulerTransitioningException":
    case "com.amazonaws.glue#SchedulerTransitioningException":
      throw await deserializeAws_json1_1SchedulerTransitioningExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DeleteCustomEntityTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomEntityTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteCustomEntityTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteCustomEntityTypeResponse(data, context);
  const response: DeleteCustomEntityTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteCustomEntityTypeCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DeleteDatabaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatabaseCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteDatabaseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteDatabaseResponse(data, context);
  const response: DeleteDatabaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteDatabaseCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DeleteDataQualityRulesetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataQualityRulesetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteDataQualityRulesetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteDataQualityRulesetResponse(data, context);
  const response: DeleteDataQualityRulesetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteDataQualityRulesetCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DeleteDevEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDevEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteDevEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteDevEndpointResponse(data, context);
  const response: DeleteDevEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteDevEndpointCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DeleteJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteJobResponse(data, context);
  const response: DeleteJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteJobCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DeleteMLTransformCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMLTransformCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteMLTransformCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteMLTransformResponse(data, context);
  const response: DeleteMLTransformCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteMLTransformCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DeletePartitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePartitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeletePartitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeletePartitionResponse(data, context);
  const response: DeletePartitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeletePartitionCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DeletePartitionIndexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePartitionIndexCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeletePartitionIndexCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeletePartitionIndexResponse(data, context);
  const response: DeletePartitionIndexCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeletePartitionIndexCommandError = async (
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
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DeleteRegistryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRegistryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteRegistryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteRegistryResponse(data, context);
  const response: DeleteRegistryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteRegistryCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DeleteResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteResourcePolicyResponse(data, context);
  const response: DeleteResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteResourcePolicyCommandError = async (
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
      throw await deserializeAws_json1_1ConditionCheckFailureExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DeleteSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSchemaCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteSchemaCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteSchemaResponse(data, context);
  const response: DeleteSchemaCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteSchemaCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DeleteSchemaVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSchemaVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteSchemaVersionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteSchemaVersionsResponse(data, context);
  const response: DeleteSchemaVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteSchemaVersionsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DeleteSecurityConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSecurityConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteSecurityConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteSecurityConfigurationResponse(data, context);
  const response: DeleteSecurityConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteSecurityConfigurationCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DeleteSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSessionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteSessionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteSessionResponse(data, context);
  const response: DeleteSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteSessionCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "IllegalSessionStateException":
    case "com.amazonaws.glue#IllegalSessionStateException":
      throw await deserializeAws_json1_1IllegalSessionStateExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DeleteTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteTableResponse(data, context);
  const response: DeleteTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteTableCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNotReadyException":
    case "com.amazonaws.glue#ResourceNotReadyException":
      throw await deserializeAws_json1_1ResourceNotReadyExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DeleteTableVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTableVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteTableVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteTableVersionResponse(data, context);
  const response: DeleteTableVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteTableVersionCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DeleteTriggerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTriggerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteTriggerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteTriggerResponse(data, context);
  const response: DeleteTriggerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteTriggerCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DeleteUserDefinedFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserDefinedFunctionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteUserDefinedFunctionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteUserDefinedFunctionResponse(data, context);
  const response: DeleteUserDefinedFunctionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteUserDefinedFunctionCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DeleteWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkflowCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteWorkflowCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteWorkflowResponse(data, context);
  const response: DeleteWorkflowCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteWorkflowCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetBlueprintCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBlueprintCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetBlueprintCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetBlueprintResponse(data, context);
  const response: GetBlueprintCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetBlueprintCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetBlueprintRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBlueprintRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetBlueprintRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetBlueprintRunResponse(data, context);
  const response: GetBlueprintRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetBlueprintRunCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetBlueprintRunsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBlueprintRunsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetBlueprintRunsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetBlueprintRunsResponse(data, context);
  const response: GetBlueprintRunsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetBlueprintRunsCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetCatalogImportStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCatalogImportStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetCatalogImportStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCatalogImportStatusResponse(data, context);
  const response: GetCatalogImportStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetCatalogImportStatusCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetClassifierCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetClassifierCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetClassifierCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetClassifierResponse(data, context);
  const response: GetClassifierCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetClassifierCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetClassifiersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetClassifiersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetClassifiersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetClassifiersResponse(data, context);
  const response: GetClassifiersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetClassifiersCommandError = async (
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
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetColumnStatisticsForPartitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetColumnStatisticsForPartitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetColumnStatisticsForPartitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetColumnStatisticsForPartitionResponse(data, context);
  const response: GetColumnStatisticsForPartitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetColumnStatisticsForPartitionCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetColumnStatisticsForTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetColumnStatisticsForTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetColumnStatisticsForTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetColumnStatisticsForTableResponse(data, context);
  const response: GetColumnStatisticsForTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetColumnStatisticsForTableCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetConnectionResponse(data, context);
  const response: GetConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetConnectionCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetConnectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetConnectionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetConnectionsResponse(data, context);
  const response: GetConnectionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetConnectionsCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetCrawlerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCrawlerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetCrawlerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCrawlerResponse(data, context);
  const response: GetCrawlerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetCrawlerCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetCrawlerMetricsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCrawlerMetricsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetCrawlerMetricsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCrawlerMetricsResponse(data, context);
  const response: GetCrawlerMetricsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetCrawlerMetricsCommandError = async (
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
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetCrawlersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCrawlersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetCrawlersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCrawlersResponse(data, context);
  const response: GetCrawlersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetCrawlersCommandError = async (
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
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetCustomEntityTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCustomEntityTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetCustomEntityTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCustomEntityTypeResponse(data, context);
  const response: GetCustomEntityTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetCustomEntityTypeCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetDatabaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDatabaseCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDatabaseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDatabaseResponse(data, context);
  const response: GetDatabaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDatabaseCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "FederationSourceException":
    case "com.amazonaws.glue#FederationSourceException":
      throw await deserializeAws_json1_1FederationSourceExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetDatabasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDatabasesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDatabasesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDatabasesResponse(data, context);
  const response: GetDatabasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDatabasesCommandError = async (
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
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetDataCatalogEncryptionSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataCatalogEncryptionSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDataCatalogEncryptionSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDataCatalogEncryptionSettingsResponse(data, context);
  const response: GetDataCatalogEncryptionSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDataCatalogEncryptionSettingsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetDataflowGraphCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataflowGraphCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDataflowGraphCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDataflowGraphResponse(data, context);
  const response: GetDataflowGraphCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDataflowGraphCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetDataQualityResultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataQualityResultCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDataQualityResultCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDataQualityResultResponse(data, context);
  const response: GetDataQualityResultCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDataQualityResultCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetDataQualityRuleRecommendationRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataQualityRuleRecommendationRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDataQualityRuleRecommendationRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDataQualityRuleRecommendationRunResponse(data, context);
  const response: GetDataQualityRuleRecommendationRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDataQualityRuleRecommendationRunCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetDataQualityRulesetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataQualityRulesetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDataQualityRulesetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDataQualityRulesetResponse(data, context);
  const response: GetDataQualityRulesetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDataQualityRulesetCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetDataQualityRulesetEvaluationRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataQualityRulesetEvaluationRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDataQualityRulesetEvaluationRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDataQualityRulesetEvaluationRunResponse(data, context);
  const response: GetDataQualityRulesetEvaluationRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDataQualityRulesetEvaluationRunCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetDevEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDevEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDevEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDevEndpointResponse(data, context);
  const response: GetDevEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDevEndpointCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetDevEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDevEndpointsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDevEndpointsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDevEndpointsResponse(data, context);
  const response: GetDevEndpointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDevEndpointsCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetJobResponse(data, context);
  const response: GetJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetJobBookmarkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobBookmarkCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetJobBookmarkCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetJobBookmarkResponse(data, context);
  const response: GetJobBookmarkCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetJobBookmarkCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.glue#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetJobRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetJobRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetJobRunResponse(data, context);
  const response: GetJobRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetJobRunCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetJobRunsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobRunsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetJobRunsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetJobRunsResponse(data, context);
  const response: GetJobRunsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetJobRunsCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetJobsResponse(data, context);
  const response: GetJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetJobsCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMappingCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetMappingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetMappingResponse(data, context);
  const response: GetMappingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetMappingCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetMLTaskRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMLTaskRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetMLTaskRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetMLTaskRunResponse(data, context);
  const response: GetMLTaskRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetMLTaskRunCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetMLTaskRunsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMLTaskRunsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetMLTaskRunsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetMLTaskRunsResponse(data, context);
  const response: GetMLTaskRunsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetMLTaskRunsCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetMLTransformCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMLTransformCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetMLTransformCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetMLTransformResponse(data, context);
  const response: GetMLTransformCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetMLTransformCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetMLTransformsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMLTransformsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetMLTransformsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetMLTransformsResponse(data, context);
  const response: GetMLTransformsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetMLTransformsCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetPartitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPartitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetPartitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetPartitionResponse(data, context);
  const response: GetPartitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetPartitionCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "FederationSourceException":
    case "com.amazonaws.glue#FederationSourceException":
      throw await deserializeAws_json1_1FederationSourceExceptionResponse(parsedOutput, context);
    case "FederationSourceRetryableException":
    case "com.amazonaws.glue#FederationSourceRetryableException":
      throw await deserializeAws_json1_1FederationSourceRetryableExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetPartitionIndexesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPartitionIndexesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetPartitionIndexesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetPartitionIndexesResponse(data, context);
  const response: GetPartitionIndexesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetPartitionIndexesCommandError = async (
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
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetPartitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPartitionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetPartitionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetPartitionsResponse(data, context);
  const response: GetPartitionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetPartitionsCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "FederationSourceException":
    case "com.amazonaws.glue#FederationSourceException":
      throw await deserializeAws_json1_1FederationSourceExceptionResponse(parsedOutput, context);
    case "FederationSourceRetryableException":
    case "com.amazonaws.glue#FederationSourceRetryableException":
      throw await deserializeAws_json1_1FederationSourceRetryableExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.glue#InvalidStateException":
      throw await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNotReadyException":
    case "com.amazonaws.glue#ResourceNotReadyException":
      throw await deserializeAws_json1_1ResourceNotReadyExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPlanCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetPlanCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetPlanResponse(data, context);
  const response: GetPlanCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetPlanCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetRegistryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRegistryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetRegistryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRegistryResponse(data, context);
  const response: GetRegistryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRegistryCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetResourcePoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetResourcePoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetResourcePoliciesResponse(data, context);
  const response: GetResourcePoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetResourcePoliciesCommandError = async (
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
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetResourcePolicyResponse(data, context);
  const response: GetResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetResourcePolicyCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSchemaCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetSchemaCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSchemaResponse(data, context);
  const response: GetSchemaCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetSchemaCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetSchemaByDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSchemaByDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetSchemaByDefinitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSchemaByDefinitionResponse(data, context);
  const response: GetSchemaByDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetSchemaByDefinitionCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetSchemaVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSchemaVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetSchemaVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSchemaVersionResponse(data, context);
  const response: GetSchemaVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetSchemaVersionCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetSchemaVersionsDiffCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSchemaVersionsDiffCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetSchemaVersionsDiffCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSchemaVersionsDiffResponse(data, context);
  const response: GetSchemaVersionsDiffCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetSchemaVersionsDiffCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetSecurityConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSecurityConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetSecurityConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSecurityConfigurationResponse(data, context);
  const response: GetSecurityConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetSecurityConfigurationCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetSecurityConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSecurityConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetSecurityConfigurationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSecurityConfigurationsResponse(data, context);
  const response: GetSecurityConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetSecurityConfigurationsCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSessionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetSessionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSessionResponse(data, context);
  const response: GetSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetSessionCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetStatementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStatementCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetStatementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetStatementResponse(data, context);
  const response: GetStatementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetStatementCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "IllegalSessionStateException":
    case "com.amazonaws.glue#IllegalSessionStateException":
      throw await deserializeAws_json1_1IllegalSessionStateExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetTableResponse(data, context);
  const response: GetTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetTableCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "FederationSourceException":
    case "com.amazonaws.glue#FederationSourceException":
      throw await deserializeAws_json1_1FederationSourceExceptionResponse(parsedOutput, context);
    case "FederationSourceRetryableException":
    case "com.amazonaws.glue#FederationSourceRetryableException":
      throw await deserializeAws_json1_1FederationSourceRetryableExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNotReadyException":
    case "com.amazonaws.glue#ResourceNotReadyException":
      throw await deserializeAws_json1_1ResourceNotReadyExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetTablesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTablesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetTablesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetTablesResponse(data, context);
  const response: GetTablesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetTablesCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "FederationSourceException":
    case "com.amazonaws.glue#FederationSourceException":
      throw await deserializeAws_json1_1FederationSourceExceptionResponse(parsedOutput, context);
    case "FederationSourceRetryableException":
    case "com.amazonaws.glue#FederationSourceRetryableException":
      throw await deserializeAws_json1_1FederationSourceRetryableExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetTableVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTableVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetTableVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetTableVersionResponse(data, context);
  const response: GetTableVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetTableVersionCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetTableVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTableVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetTableVersionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetTableVersionsResponse(data, context);
  const response: GetTableVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetTableVersionsCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetTagsResponse(data, context);
  const response: GetTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetTagsCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetTriggerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTriggerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetTriggerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetTriggerResponse(data, context);
  const response: GetTriggerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetTriggerCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetTriggersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTriggersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetTriggersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetTriggersResponse(data, context);
  const response: GetTriggersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetTriggersCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetUnfilteredPartitionMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUnfilteredPartitionMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetUnfilteredPartitionMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetUnfilteredPartitionMetadataResponse(data, context);
  const response: GetUnfilteredPartitionMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetUnfilteredPartitionMetadataCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "FederationSourceException":
    case "com.amazonaws.glue#FederationSourceException":
      throw await deserializeAws_json1_1FederationSourceExceptionResponse(parsedOutput, context);
    case "FederationSourceRetryableException":
    case "com.amazonaws.glue#FederationSourceRetryableException":
      throw await deserializeAws_json1_1FederationSourceRetryableExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "PermissionTypeMismatchException":
    case "com.amazonaws.glue#PermissionTypeMismatchException":
      throw await deserializeAws_json1_1PermissionTypeMismatchExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetUnfilteredPartitionsMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUnfilteredPartitionsMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetUnfilteredPartitionsMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetUnfilteredPartitionsMetadataResponse(data, context);
  const response: GetUnfilteredPartitionsMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetUnfilteredPartitionsMetadataCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "FederationSourceException":
    case "com.amazonaws.glue#FederationSourceException":
      throw await deserializeAws_json1_1FederationSourceExceptionResponse(parsedOutput, context);
    case "FederationSourceRetryableException":
    case "com.amazonaws.glue#FederationSourceRetryableException":
      throw await deserializeAws_json1_1FederationSourceRetryableExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "PermissionTypeMismatchException":
    case "com.amazonaws.glue#PermissionTypeMismatchException":
      throw await deserializeAws_json1_1PermissionTypeMismatchExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetUnfilteredTableMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUnfilteredTableMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetUnfilteredTableMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetUnfilteredTableMetadataResponse(data, context);
  const response: GetUnfilteredTableMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetUnfilteredTableMetadataCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "FederationSourceException":
    case "com.amazonaws.glue#FederationSourceException":
      throw await deserializeAws_json1_1FederationSourceExceptionResponse(parsedOutput, context);
    case "FederationSourceRetryableException":
    case "com.amazonaws.glue#FederationSourceRetryableException":
      throw await deserializeAws_json1_1FederationSourceRetryableExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "PermissionTypeMismatchException":
    case "com.amazonaws.glue#PermissionTypeMismatchException":
      throw await deserializeAws_json1_1PermissionTypeMismatchExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetUserDefinedFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserDefinedFunctionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetUserDefinedFunctionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetUserDefinedFunctionResponse(data, context);
  const response: GetUserDefinedFunctionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetUserDefinedFunctionCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetUserDefinedFunctionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserDefinedFunctionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetUserDefinedFunctionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetUserDefinedFunctionsResponse(data, context);
  const response: GetUserDefinedFunctionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetUserDefinedFunctionsCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetWorkflowCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetWorkflowResponse(data, context);
  const response: GetWorkflowCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetWorkflowCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetWorkflowRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetWorkflowRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetWorkflowRunResponse(data, context);
  const response: GetWorkflowRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetWorkflowRunCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetWorkflowRunPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowRunPropertiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetWorkflowRunPropertiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetWorkflowRunPropertiesResponse(data, context);
  const response: GetWorkflowRunPropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetWorkflowRunPropertiesCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetWorkflowRunsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowRunsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetWorkflowRunsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetWorkflowRunsResponse(data, context);
  const response: GetWorkflowRunsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetWorkflowRunsCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1ImportCatalogToGlueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportCatalogToGlueCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ImportCatalogToGlueCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ImportCatalogToGlueResponse(data, context);
  const response: ImportCatalogToGlueCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ImportCatalogToGlueCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1ListBlueprintsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBlueprintsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListBlueprintsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListBlueprintsResponse(data, context);
  const response: ListBlueprintsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListBlueprintsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1ListCrawlersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCrawlersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListCrawlersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListCrawlersResponse(data, context);
  const response: ListCrawlersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListCrawlersCommandError = async (
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
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1ListCrawlsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCrawlsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListCrawlsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListCrawlsResponse(data, context);
  const response: ListCrawlsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListCrawlsCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1ListCustomEntityTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomEntityTypesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListCustomEntityTypesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListCustomEntityTypesResponse(data, context);
  const response: ListCustomEntityTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListCustomEntityTypesCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1ListDataQualityResultsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataQualityResultsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListDataQualityResultsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDataQualityResultsResponse(data, context);
  const response: ListDataQualityResultsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListDataQualityResultsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1ListDataQualityRuleRecommendationRunsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataQualityRuleRecommendationRunsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListDataQualityRuleRecommendationRunsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDataQualityRuleRecommendationRunsResponse(data, context);
  const response: ListDataQualityRuleRecommendationRunsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListDataQualityRuleRecommendationRunsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1ListDataQualityRulesetEvaluationRunsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataQualityRulesetEvaluationRunsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListDataQualityRulesetEvaluationRunsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDataQualityRulesetEvaluationRunsResponse(data, context);
  const response: ListDataQualityRulesetEvaluationRunsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListDataQualityRulesetEvaluationRunsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1ListDataQualityRulesetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataQualityRulesetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListDataQualityRulesetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDataQualityRulesetsResponse(data, context);
  const response: ListDataQualityRulesetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListDataQualityRulesetsCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1ListDevEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevEndpointsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListDevEndpointsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDevEndpointsResponse(data, context);
  const response: ListDevEndpointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListDevEndpointsCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1ListJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListJobsResponse(data, context);
  const response: ListJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListJobsCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1ListMLTransformsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMLTransformsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListMLTransformsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListMLTransformsResponse(data, context);
  const response: ListMLTransformsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListMLTransformsCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1ListRegistriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRegistriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListRegistriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListRegistriesResponse(data, context);
  const response: ListRegistriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListRegistriesCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1ListSchemasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSchemasCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListSchemasCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListSchemasResponse(data, context);
  const response: ListSchemasCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListSchemasCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1ListSchemaVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSchemaVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListSchemaVersionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListSchemaVersionsResponse(data, context);
  const response: ListSchemaVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListSchemaVersionsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1ListSessionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSessionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListSessionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListSessionsResponse(data, context);
  const response: ListSessionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListSessionsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1ListStatementsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStatementsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListStatementsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListStatementsResponse(data, context);
  const response: ListStatementsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListStatementsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "IllegalSessionStateException":
    case "com.amazonaws.glue#IllegalSessionStateException":
      throw await deserializeAws_json1_1IllegalSessionStateExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1ListTriggersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTriggersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTriggersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTriggersResponse(data, context);
  const response: ListTriggersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTriggersCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1ListWorkflowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkflowsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListWorkflowsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListWorkflowsResponse(data, context);
  const response: ListWorkflowsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListWorkflowsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1PutDataCatalogEncryptionSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDataCatalogEncryptionSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutDataCatalogEncryptionSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutDataCatalogEncryptionSettingsResponse(data, context);
  const response: PutDataCatalogEncryptionSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutDataCatalogEncryptionSettingsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1PutResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutResourcePolicyResponse(data, context);
  const response: PutResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutResourcePolicyCommandError = async (
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
      throw await deserializeAws_json1_1ConditionCheckFailureExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1PutSchemaVersionMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSchemaVersionMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutSchemaVersionMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutSchemaVersionMetadataResponse(data, context);
  const response: PutSchemaVersionMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutSchemaVersionMetadataCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1PutWorkflowRunPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutWorkflowRunPropertiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutWorkflowRunPropertiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutWorkflowRunPropertiesResponse(data, context);
  const response: PutWorkflowRunPropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutWorkflowRunPropertiesCommandError = async (
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
      throw await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1QuerySchemaVersionMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QuerySchemaVersionMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1QuerySchemaVersionMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1QuerySchemaVersionMetadataResponse(data, context);
  const response: QuerySchemaVersionMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1QuerySchemaVersionMetadataCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1RegisterSchemaVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterSchemaVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RegisterSchemaVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RegisterSchemaVersionResponse(data, context);
  const response: RegisterSchemaVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RegisterSchemaVersionCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1RemoveSchemaVersionMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveSchemaVersionMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RemoveSchemaVersionMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RemoveSchemaVersionMetadataResponse(data, context);
  const response: RemoveSchemaVersionMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RemoveSchemaVersionMetadataCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1ResetJobBookmarkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetJobBookmarkCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ResetJobBookmarkCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ResetJobBookmarkResponse(data, context);
  const response: ResetJobBookmarkCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ResetJobBookmarkCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1ResumeWorkflowRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResumeWorkflowRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ResumeWorkflowRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ResumeWorkflowRunResponse(data, context);
  const response: ResumeWorkflowRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ResumeWorkflowRunCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentRunsExceededExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "IllegalWorkflowStateException":
    case "com.amazonaws.glue#IllegalWorkflowStateException":
      throw await deserializeAws_json1_1IllegalWorkflowStateExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1RunStatementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RunStatementCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RunStatementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RunStatementResponse(data, context);
  const response: RunStatementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RunStatementCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "IllegalSessionStateException":
    case "com.amazonaws.glue#IllegalSessionStateException":
      throw await deserializeAws_json1_1IllegalSessionStateExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.glue#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1SearchTablesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchTablesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SearchTablesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SearchTablesResponse(data, context);
  const response: SearchTablesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SearchTablesCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1StartBlueprintRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartBlueprintRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartBlueprintRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartBlueprintRunResponse(data, context);
  const response: StartBlueprintRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartBlueprintRunCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "IllegalBlueprintStateException":
    case "com.amazonaws.glue#IllegalBlueprintStateException":
      throw await deserializeAws_json1_1IllegalBlueprintStateExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1StartCrawlerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCrawlerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartCrawlerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartCrawlerResponse(data, context);
  const response: StartCrawlerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartCrawlerCommandError = async (
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
      throw await deserializeAws_json1_1CrawlerRunningExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1StartCrawlerScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCrawlerScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartCrawlerScheduleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartCrawlerScheduleResponse(data, context);
  const response: StartCrawlerScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartCrawlerScheduleCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "NoScheduleException":
    case "com.amazonaws.glue#NoScheduleException":
      throw await deserializeAws_json1_1NoScheduleExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "SchedulerRunningException":
    case "com.amazonaws.glue#SchedulerRunningException":
      throw await deserializeAws_json1_1SchedulerRunningExceptionResponse(parsedOutput, context);
    case "SchedulerTransitioningException":
    case "com.amazonaws.glue#SchedulerTransitioningException":
      throw await deserializeAws_json1_1SchedulerTransitioningExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1StartDataQualityRuleRecommendationRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDataQualityRuleRecommendationRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartDataQualityRuleRecommendationRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartDataQualityRuleRecommendationRunResponse(data, context);
  const response: StartDataQualityRuleRecommendationRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartDataQualityRuleRecommendationRunCommandError = async (
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
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1StartDataQualityRulesetEvaluationRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDataQualityRulesetEvaluationRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartDataQualityRulesetEvaluationRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartDataQualityRulesetEvaluationRunResponse(data, context);
  const response: StartDataQualityRulesetEvaluationRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartDataQualityRulesetEvaluationRunCommandError = async (
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
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1StartExportLabelsTaskRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartExportLabelsTaskRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartExportLabelsTaskRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartExportLabelsTaskRunResponse(data, context);
  const response: StartExportLabelsTaskRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartExportLabelsTaskRunCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1StartImportLabelsTaskRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImportLabelsTaskRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartImportLabelsTaskRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartImportLabelsTaskRunResponse(data, context);
  const response: StartImportLabelsTaskRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartImportLabelsTaskRunCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1StartJobRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartJobRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartJobRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartJobRunResponse(data, context);
  const response: StartJobRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartJobRunCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentRunsExceededExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1StartMLEvaluationTaskRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMLEvaluationTaskRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartMLEvaluationTaskRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartMLEvaluationTaskRunResponse(data, context);
  const response: StartMLEvaluationTaskRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartMLEvaluationTaskRunCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentRunsExceededExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "MLTransformNotReadyException":
    case "com.amazonaws.glue#MLTransformNotReadyException":
      throw await deserializeAws_json1_1MLTransformNotReadyExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1StartMLLabelingSetGenerationTaskRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMLLabelingSetGenerationTaskRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartMLLabelingSetGenerationTaskRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartMLLabelingSetGenerationTaskRunResponse(data, context);
  const response: StartMLLabelingSetGenerationTaskRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartMLLabelingSetGenerationTaskRunCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentRunsExceededExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1StartTriggerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTriggerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartTriggerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartTriggerResponse(data, context);
  const response: StartTriggerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartTriggerCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentRunsExceededExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1StartWorkflowRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartWorkflowRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartWorkflowRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartWorkflowRunResponse(data, context);
  const response: StartWorkflowRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartWorkflowRunCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentRunsExceededExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1StopCrawlerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopCrawlerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopCrawlerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopCrawlerResponse(data, context);
  const response: StopCrawlerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopCrawlerCommandError = async (
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
      throw await deserializeAws_json1_1CrawlerNotRunningExceptionResponse(parsedOutput, context);
    case "CrawlerStoppingException":
    case "com.amazonaws.glue#CrawlerStoppingException":
      throw await deserializeAws_json1_1CrawlerStoppingExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1StopCrawlerScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopCrawlerScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopCrawlerScheduleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopCrawlerScheduleResponse(data, context);
  const response: StopCrawlerScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopCrawlerScheduleCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "SchedulerNotRunningException":
    case "com.amazonaws.glue#SchedulerNotRunningException":
      throw await deserializeAws_json1_1SchedulerNotRunningExceptionResponse(parsedOutput, context);
    case "SchedulerTransitioningException":
    case "com.amazonaws.glue#SchedulerTransitioningException":
      throw await deserializeAws_json1_1SchedulerTransitioningExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1StopSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopSessionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopSessionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopSessionResponse(data, context);
  const response: StopSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopSessionCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "IllegalSessionStateException":
    case "com.amazonaws.glue#IllegalSessionStateException":
      throw await deserializeAws_json1_1IllegalSessionStateExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1StopTriggerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopTriggerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopTriggerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopTriggerResponse(data, context);
  const response: StopTriggerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopTriggerCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1StopWorkflowRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopWorkflowRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopWorkflowRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopWorkflowRunResponse(data, context);
  const response: StopWorkflowRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopWorkflowRunCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "IllegalWorkflowStateException":
    case "com.amazonaws.glue#IllegalWorkflowStateException":
      throw await deserializeAws_json1_1IllegalWorkflowStateExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1UpdateBlueprintCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBlueprintCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateBlueprintCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateBlueprintResponse(data, context);
  const response: UpdateBlueprintCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateBlueprintCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "IllegalBlueprintStateException":
    case "com.amazonaws.glue#IllegalBlueprintStateException":
      throw await deserializeAws_json1_1IllegalBlueprintStateExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1UpdateClassifierCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClassifierCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateClassifierCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateClassifierResponse(data, context);
  const response: UpdateClassifierCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateClassifierCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "VersionMismatchException":
    case "com.amazonaws.glue#VersionMismatchException":
      throw await deserializeAws_json1_1VersionMismatchExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1UpdateColumnStatisticsForPartitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateColumnStatisticsForPartitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateColumnStatisticsForPartitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateColumnStatisticsForPartitionResponse(data, context);
  const response: UpdateColumnStatisticsForPartitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateColumnStatisticsForPartitionCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1UpdateColumnStatisticsForTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateColumnStatisticsForTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateColumnStatisticsForTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateColumnStatisticsForTableResponse(data, context);
  const response: UpdateColumnStatisticsForTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateColumnStatisticsForTableCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1UpdateConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateConnectionResponse(data, context);
  const response: UpdateConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateConnectionCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1UpdateCrawlerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCrawlerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateCrawlerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateCrawlerResponse(data, context);
  const response: UpdateCrawlerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateCrawlerCommandError = async (
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
      throw await deserializeAws_json1_1CrawlerRunningExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "VersionMismatchException":
    case "com.amazonaws.glue#VersionMismatchException":
      throw await deserializeAws_json1_1VersionMismatchExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1UpdateCrawlerScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCrawlerScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateCrawlerScheduleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateCrawlerScheduleResponse(data, context);
  const response: UpdateCrawlerScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateCrawlerScheduleCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "SchedulerTransitioningException":
    case "com.amazonaws.glue#SchedulerTransitioningException":
      throw await deserializeAws_json1_1SchedulerTransitioningExceptionResponse(parsedOutput, context);
    case "VersionMismatchException":
    case "com.amazonaws.glue#VersionMismatchException":
      throw await deserializeAws_json1_1VersionMismatchExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1UpdateDatabaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatabaseCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateDatabaseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateDatabaseResponse(data, context);
  const response: UpdateDatabaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateDatabaseCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1UpdateDataQualityRulesetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataQualityRulesetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateDataQualityRulesetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateDataQualityRulesetResponse(data, context);
  const response: UpdateDataQualityRulesetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateDataQualityRulesetCommandError = async (
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
      throw await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.glue#IdempotentParameterMismatchException":
      throw await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1UpdateDevEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDevEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateDevEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateDevEndpointResponse(data, context);
  const response: UpdateDevEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateDevEndpointCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.glue#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1UpdateJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateJobResponse(data, context);
  const response: UpdateJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateJobCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1UpdateJobFromSourceControlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobFromSourceControlCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateJobFromSourceControlCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateJobFromSourceControlResponse(data, context);
  const response: UpdateJobFromSourceControlCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateJobFromSourceControlCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.glue#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1UpdateMLTransformCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMLTransformCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateMLTransformCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateMLTransformResponse(data, context);
  const response: UpdateMLTransformCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateMLTransformCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1UpdatePartitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePartitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdatePartitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdatePartitionResponse(data, context);
  const response: UpdatePartitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdatePartitionCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1UpdateRegistryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRegistryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateRegistryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateRegistryResponse(data, context);
  const response: UpdateRegistryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateRegistryCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1UpdateSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSchemaCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateSchemaCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateSchemaResponse(data, context);
  const response: UpdateSchemaCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateSchemaCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1UpdateSourceControlFromJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSourceControlFromJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateSourceControlFromJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateSourceControlFromJobResponse(data, context);
  const response: UpdateSourceControlFromJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateSourceControlFromJobCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.glue#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1UpdateTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateTableResponse(data, context);
  const response: UpdateTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateTableCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNotReadyException":
    case "com.amazonaws.glue#ResourceNotReadyException":
      throw await deserializeAws_json1_1ResourceNotReadyExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1UpdateTriggerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTriggerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateTriggerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateTriggerResponse(data, context);
  const response: UpdateTriggerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateTriggerCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1UpdateUserDefinedFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserDefinedFunctionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateUserDefinedFunctionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateUserDefinedFunctionResponse(data, context);
  const response: UpdateUserDefinedFunctionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateUserDefinedFunctionCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1UpdateWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkflowCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateWorkflowCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateWorkflowResponse(data, context);
  const response: UpdateWorkflowCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateWorkflowCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

const deserializeAws_json1_1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccessDeniedException(body, context);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1AlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AlreadyExistsException(body, context);
  const exception = new AlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConcurrentModificationException(body, context);
  const exception = new ConcurrentModificationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ConcurrentRunsExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentRunsExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConcurrentRunsExceededException(body, context);
  const exception = new ConcurrentRunsExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ConditionCheckFailureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConditionCheckFailureException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConditionCheckFailureException(body, context);
  const exception = new ConditionCheckFailureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConflictException(body, context);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1CrawlerNotRunningExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CrawlerNotRunningException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CrawlerNotRunningException(body, context);
  const exception = new CrawlerNotRunningException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1CrawlerRunningExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CrawlerRunningException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CrawlerRunningException(body, context);
  const exception = new CrawlerRunningException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1CrawlerStoppingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CrawlerStoppingException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CrawlerStoppingException(body, context);
  const exception = new CrawlerStoppingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1EntityNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EntityNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1EntityNotFoundException(body, context);
  const exception = new EntityNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1FederatedResourceAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FederatedResourceAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1FederatedResourceAlreadyExistsException(body, context);
  const exception = new FederatedResourceAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1FederationSourceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FederationSourceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1FederationSourceException(body, context);
  const exception = new FederationSourceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1FederationSourceRetryableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FederationSourceRetryableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1FederationSourceRetryableException(body, context);
  const exception = new FederationSourceRetryableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1GlueEncryptionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<GlueEncryptionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1GlueEncryptionException(body, context);
  const exception = new GlueEncryptionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IdempotentParameterMismatchException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1IdempotentParameterMismatchException(body, context);
  const exception = new IdempotentParameterMismatchException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1IllegalBlueprintStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IllegalBlueprintStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1IllegalBlueprintStateException(body, context);
  const exception = new IllegalBlueprintStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1IllegalSessionStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IllegalSessionStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1IllegalSessionStateException(body, context);
  const exception = new IllegalSessionStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1IllegalWorkflowStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IllegalWorkflowStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1IllegalWorkflowStateException(body, context);
  const exception = new IllegalWorkflowStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InternalServiceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServiceException(body, context);
  const exception = new InternalServiceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidInputExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidInputException(body, context);
  const exception = new InvalidInputException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidStateException(body, context);
  const exception = new InvalidStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1MLTransformNotReadyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MLTransformNotReadyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MLTransformNotReadyException(body, context);
  const exception = new MLTransformNotReadyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1NoScheduleExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoScheduleException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NoScheduleException(body, context);
  const exception = new NoScheduleException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1OperationTimeoutExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationTimeoutException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OperationTimeoutException(body, context);
  const exception = new OperationTimeoutException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1PermissionTypeMismatchExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PermissionTypeMismatchException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PermissionTypeMismatchException(body, context);
  const exception = new PermissionTypeMismatchException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceNotReadyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotReadyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotReadyException(body, context);
  const exception = new ResourceNotReadyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNumberLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNumberLimitExceededException(body, context);
  const exception = new ResourceNumberLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1SchedulerNotRunningExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SchedulerNotRunningException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SchedulerNotRunningException(body, context);
  const exception = new SchedulerNotRunningException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1SchedulerRunningExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SchedulerRunningException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SchedulerRunningException(body, context);
  const exception = new SchedulerRunningException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1SchedulerTransitioningExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SchedulerTransitioningException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SchedulerTransitioningException(body, context);
  const exception = new SchedulerTransitioningException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ValidationException(body, context);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1VersionMismatchExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<VersionMismatchException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1VersionMismatchException(body, context);
  const exception = new VersionMismatchException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1Action = (input: Action, context: __SerdeContext): any => {
  return take(input, {
    Arguments: [, (_) => serializeAws_json1_1GenericMap(_, context)],
    CrawlerName: [],
    JobName: [],
    NotificationProperty: [, (_) => serializeAws_json1_1NotificationProperty(_, context)],
    SecurityConfiguration: [],
    Timeout: [],
  });
};

const serializeAws_json1_1ActionList = (input: Action[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Action(entry, context);
    });
};

const serializeAws_json1_1AdditionalOptions = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_1AdditionalPlanOptionsMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_1Aggregate = (input: Aggregate, context: __SerdeContext): any => {
  return take(input, {
    Aggs: [, (_) => serializeAws_json1_1AggregateOperations(_, context)],
    Groups: [, (_) => serializeAws_json1_1GlueStudioPathList(_, context)],
    Inputs: [, (_) => serializeAws_json1_1OneInput(_, context)],
    Name: [],
  });
};

const serializeAws_json1_1AggregateOperation = (input: AggregateOperation, context: __SerdeContext): any => {
  return take(input, {
    AggFunc: [],
    Column: [, (_) => serializeAws_json1_1EnclosedInStringProperties(_, context)],
  });
};

const serializeAws_json1_1AggregateOperations = (input: AggregateOperation[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1AggregateOperation(entry, context);
    });
};

const serializeAws_json1_1ApplyMapping = (input: ApplyMapping, context: __SerdeContext): any => {
  return take(input, {
    Inputs: [, (_) => serializeAws_json1_1OneInput(_, context)],
    Mapping: [, (_) => serializeAws_json1_1Mappings(_, context)],
    Name: [],
  });
};

const serializeAws_json1_1AthenaConnectorSource = (input: AthenaConnectorSource, context: __SerdeContext): any => {
  return take(input, {
    ConnectionName: [],
    ConnectionTable: [],
    ConnectionType: [],
    ConnectorName: [],
    Name: [],
    OutputSchemas: [, (_) => serializeAws_json1_1GlueSchemas(_, context)],
    SchemaName: [],
  });
};

const serializeAws_json1_1AuditColumnNamesList = (input: string[], context: __SerdeContext): any => {
  return input.filter((e: any) => e != null);
};

const serializeAws_json1_1AuditContext = (input: AuditContext, context: __SerdeContext): any => {
  return take(input, {
    AdditionalAuditContext: [],
    AllColumnsRequested: [],
    RequestedColumns: [, (_) => serializeAws_json1_1AuditColumnNamesList(_, context)],
  });
};

const serializeAws_json1_1BasicCatalogTarget = (input: BasicCatalogTarget, context: __SerdeContext): any => {
  return take(input, {
    Database: [],
    Inputs: [, (_) => serializeAws_json1_1OneInput(_, context)],
    Name: [],
    Table: [],
  });
};

const serializeAws_json1_1BatchCreatePartitionRequest = (
  input: BatchCreatePartitionRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    CatalogId: [],
    DatabaseName: [],
    PartitionInputList: [, (_) => serializeAws_json1_1PartitionInputList(_, context)],
    TableName: [],
  });
};

const serializeAws_json1_1BatchDeleteConnectionRequest = (
  input: BatchDeleteConnectionRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    CatalogId: [],
    ConnectionNameList: [, (_) => serializeAws_json1_1DeleteConnectionNameList(_, context)],
  });
};

const serializeAws_json1_1BatchDeletePartitionRequest = (
  input: BatchDeletePartitionRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    CatalogId: [],
    DatabaseName: [],
    PartitionsToDelete: [, (_) => serializeAws_json1_1BatchDeletePartitionValueList(_, context)],
    TableName: [],
  });
};

const serializeAws_json1_1BatchDeletePartitionValueList = (
  input: PartitionValueList[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1PartitionValueList(entry, context);
    });
};

const serializeAws_json1_1BatchDeleteTableNameList = (input: string[], context: __SerdeContext): any => {
  return input.filter((e: any) => e != null);
};

const serializeAws_json1_1BatchDeleteTableRequest = (input: BatchDeleteTableRequest, context: __SerdeContext): any => {
  return take(input, {
    CatalogId: [],
    DatabaseName: [],
    TablesToDelete: [, (_) => serializeAws_json1_1BatchDeleteTableNameList(_, context)],
    TransactionId: [],
  });
};

const serializeAws_json1_1BatchDeleteTableVersionList = (input: string[], context: __SerdeContext): any => {
  return input.filter((e: any) => e != null);
};

const serializeAws_json1_1BatchDeleteTableVersionRequest = (
  input: BatchDeleteTableVersionRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    CatalogId: [],
    DatabaseName: [],
    TableName: [],
    VersionIds: [, (_) => serializeAws_json1_1BatchDeleteTableVersionList(_, context)],
  });
};

const serializeAws_json1_1BatchGetBlueprintNames = (input: string[], context: __SerdeContext): any => {
  return input.filter((e: any) => e != null);
};

const serializeAws_json1_1BatchGetBlueprintsRequest = (
  input: BatchGetBlueprintsRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    IncludeBlueprint: [],
    IncludeParameterSpec: [],
    Names: [, (_) => serializeAws_json1_1BatchGetBlueprintNames(_, context)],
  });
};

const serializeAws_json1_1BatchGetCrawlersRequest = (input: BatchGetCrawlersRequest, context: __SerdeContext): any => {
  return take(input, {
    CrawlerNames: [, (_) => serializeAws_json1_1CrawlerNameList(_, context)],
  });
};

const serializeAws_json1_1BatchGetCustomEntityTypesRequest = (
  input: BatchGetCustomEntityTypesRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    Names: [, (_) => serializeAws_json1_1CustomEntityTypeNames(_, context)],
  });
};

const serializeAws_json1_1BatchGetDataQualityResultRequest = (
  input: BatchGetDataQualityResultRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    ResultIds: [, (_) => serializeAws_json1_1DataQualityResultIds(_, context)],
  });
};

const serializeAws_json1_1BatchGetDevEndpointsRequest = (
  input: BatchGetDevEndpointsRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    DevEndpointNames: [, (_) => serializeAws_json1_1DevEndpointNames(_, context)],
  });
};

const serializeAws_json1_1BatchGetJobsRequest = (input: BatchGetJobsRequest, context: __SerdeContext): any => {
  return take(input, {
    JobNames: [, (_) => serializeAws_json1_1JobNameList(_, context)],
  });
};

const serializeAws_json1_1BatchGetPartitionRequest = (
  input: BatchGetPartitionRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    CatalogId: [],
    DatabaseName: [],
    PartitionsToGet: [, (_) => serializeAws_json1_1BatchGetPartitionValueList(_, context)],
    TableName: [],
  });
};

const serializeAws_json1_1BatchGetPartitionValueList = (input: PartitionValueList[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1PartitionValueList(entry, context);
    });
};

const serializeAws_json1_1BatchGetTriggersRequest = (input: BatchGetTriggersRequest, context: __SerdeContext): any => {
  return take(input, {
    TriggerNames: [, (_) => serializeAws_json1_1TriggerNameList(_, context)],
  });
};

const serializeAws_json1_1BatchGetWorkflowsRequest = (
  input: BatchGetWorkflowsRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    IncludeGraph: [],
    Names: [, (_) => serializeAws_json1_1WorkflowNames(_, context)],
  });
};

const serializeAws_json1_1BatchStopJobRunJobRunIdList = (input: string[], context: __SerdeContext): any => {
  return input.filter((e: any) => e != null);
};

const serializeAws_json1_1BatchStopJobRunRequest = (input: BatchStopJobRunRequest, context: __SerdeContext): any => {
  return take(input, {
    JobName: [],
    JobRunIds: [, (_) => serializeAws_json1_1BatchStopJobRunJobRunIdList(_, context)],
  });
};

const serializeAws_json1_1BatchUpdatePartitionRequest = (
  input: BatchUpdatePartitionRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    CatalogId: [],
    DatabaseName: [],
    Entries: [, (_) => serializeAws_json1_1BatchUpdatePartitionRequestEntryList(_, context)],
    TableName: [],
  });
};

const serializeAws_json1_1BatchUpdatePartitionRequestEntry = (
  input: BatchUpdatePartitionRequestEntry,
  context: __SerdeContext
): any => {
  return take(input, {
    PartitionInput: [, (_) => serializeAws_json1_1PartitionInput(_, context)],
    PartitionValueList: [, (_) => serializeAws_json1_1BoundedPartitionValueList(_, context)],
  });
};

const serializeAws_json1_1BatchUpdatePartitionRequestEntryList = (
  input: BatchUpdatePartitionRequestEntry[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1BatchUpdatePartitionRequestEntry(entry, context);
    });
};

const serializeAws_json1_1BinaryColumnStatisticsData = (
  input: BinaryColumnStatisticsData,
  context: __SerdeContext
): any => {
  return take(input, {
    AverageLength: [, (_) => __serializeFloat(_)],
    MaximumLength: [],
    NumberOfNulls: [],
  });
};

const serializeAws_json1_1BooleanColumnStatisticsData = (
  input: BooleanColumnStatisticsData,
  context: __SerdeContext
): any => {
  return take(input, {
    NumberOfFalses: [],
    NumberOfNulls: [],
    NumberOfTrues: [],
  });
};

const serializeAws_json1_1BoundedPartitionValueList = (input: string[], context: __SerdeContext): any => {
  return input.filter((e: any) => e != null);
};

const serializeAws_json1_1CancelDataQualityRuleRecommendationRunRequest = (
  input: CancelDataQualityRuleRecommendationRunRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    RunId: [],
  });
};

const serializeAws_json1_1CancelDataQualityRulesetEvaluationRunRequest = (
  input: CancelDataQualityRulesetEvaluationRunRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    RunId: [],
  });
};

const serializeAws_json1_1CancelMLTaskRunRequest = (input: CancelMLTaskRunRequest, context: __SerdeContext): any => {
  return take(input, {
    TaskRunId: [],
    TransformId: [],
  });
};

const serializeAws_json1_1CancelStatementRequest = (input: CancelStatementRequest, context: __SerdeContext): any => {
  return take(input, {
    Id: [],
    RequestOrigin: [],
    SessionId: [],
  });
};

const serializeAws_json1_1CatalogDeltaSource = (input: CatalogDeltaSource, context: __SerdeContext): any => {
  return take(input, {
    AdditionalDeltaOptions: [, (_) => serializeAws_json1_1AdditionalOptions(_, context)],
    Database: [],
    Name: [],
    OutputSchemas: [, (_) => serializeAws_json1_1GlueSchemas(_, context)],
    Table: [],
  });
};

const serializeAws_json1_1CatalogEntries = (input: CatalogEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1CatalogEntry(entry, context);
    });
};

const serializeAws_json1_1CatalogEntry = (input: CatalogEntry, context: __SerdeContext): any => {
  return take(input, {
    DatabaseName: [],
    TableName: [],
  });
};

const serializeAws_json1_1CatalogHudiSource = (input: CatalogHudiSource, context: __SerdeContext): any => {
  return take(input, {
    AdditionalHudiOptions: [, (_) => serializeAws_json1_1AdditionalOptions(_, context)],
    Database: [],
    Name: [],
    OutputSchemas: [, (_) => serializeAws_json1_1GlueSchemas(_, context)],
    Table: [],
  });
};

const serializeAws_json1_1CatalogKafkaSource = (input: CatalogKafkaSource, context: __SerdeContext): any => {
  return take(input, {
    DataPreviewOptions: [, (_) => serializeAws_json1_1StreamingDataPreviewOptions(_, context)],
    Database: [],
    DetectSchema: [],
    Name: [],
    StreamingOptions: [, (_) => serializeAws_json1_1KafkaStreamingSourceOptions(_, context)],
    Table: [],
    WindowSize: [],
  });
};

const serializeAws_json1_1CatalogKinesisSource = (input: CatalogKinesisSource, context: __SerdeContext): any => {
  return take(input, {
    DataPreviewOptions: [, (_) => serializeAws_json1_1StreamingDataPreviewOptions(_, context)],
    Database: [],
    DetectSchema: [],
    Name: [],
    StreamingOptions: [, (_) => serializeAws_json1_1KinesisStreamingSourceOptions(_, context)],
    Table: [],
    WindowSize: [],
  });
};

const serializeAws_json1_1CatalogSchemaChangePolicy = (
  input: CatalogSchemaChangePolicy,
  context: __SerdeContext
): any => {
  return take(input, {
    EnableUpdateCatalog: [],
    UpdateBehavior: [],
  });
};

const serializeAws_json1_1CatalogSource = (input: CatalogSource, context: __SerdeContext): any => {
  return take(input, {
    Database: [],
    Name: [],
    Table: [],
  });
};

const serializeAws_json1_1CatalogTablesList = (input: string[], context: __SerdeContext): any => {
  return input.filter((e: any) => e != null);
};

const serializeAws_json1_1CatalogTarget = (input: CatalogTarget, context: __SerdeContext): any => {
  return take(input, {
    ConnectionName: [],
    DatabaseName: [],
    DlqEventQueueArn: [],
    EventQueueArn: [],
    Tables: [, (_) => serializeAws_json1_1CatalogTablesList(_, context)],
  });
};

const serializeAws_json1_1CatalogTargetList = (input: CatalogTarget[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1CatalogTarget(entry, context);
    });
};

const serializeAws_json1_1CheckSchemaVersionValidityInput = (
  input: CheckSchemaVersionValidityInput,
  context: __SerdeContext
): any => {
  return take(input, {
    DataFormat: [],
    SchemaDefinition: [],
  });
};

const serializeAws_json1_1ClassifierNameList = (input: string[], context: __SerdeContext): any => {
  return input.filter((e: any) => e != null);
};

const serializeAws_json1_1CloudWatchEncryption = (input: CloudWatchEncryption, context: __SerdeContext): any => {
  return take(input, {
    CloudWatchEncryptionMode: [],
    KmsKeyArn: [],
  });
};

const serializeAws_json1_1CodeGenConfigurationNode = (
  input: CodeGenConfigurationNode,
  context: __SerdeContext
): any => {
  return take(input, {
    Aggregate: [, (_) => serializeAws_json1_1Aggregate(_, context)],
    ApplyMapping: [, (_) => serializeAws_json1_1ApplyMapping(_, context)],
    AthenaConnectorSource: [, (_) => serializeAws_json1_1AthenaConnectorSource(_, context)],
    CatalogDeltaSource: [, (_) => serializeAws_json1_1CatalogDeltaSource(_, context)],
    CatalogHudiSource: [, (_) => serializeAws_json1_1CatalogHudiSource(_, context)],
    CatalogKafkaSource: [, (_) => serializeAws_json1_1CatalogKafkaSource(_, context)],
    CatalogKinesisSource: [, (_) => serializeAws_json1_1CatalogKinesisSource(_, context)],
    CatalogSource: [, (_) => serializeAws_json1_1CatalogSource(_, context)],
    CatalogTarget: [, (_) => serializeAws_json1_1BasicCatalogTarget(_, context)],
    CustomCode: [, (_) => serializeAws_json1_1CustomCode(_, context)],
    DirectJDBCSource: [, (_) => serializeAws_json1_1DirectJDBCSource(_, context)],
    DirectKafkaSource: [, (_) => serializeAws_json1_1DirectKafkaSource(_, context)],
    DirectKinesisSource: [, (_) => serializeAws_json1_1DirectKinesisSource(_, context)],
    DropDuplicates: [, (_) => serializeAws_json1_1DropDuplicates(_, context)],
    DropFields: [, (_) => serializeAws_json1_1DropFields(_, context)],
    DropNullFields: [, (_) => serializeAws_json1_1DropNullFields(_, context)],
    DynamicTransform: [, (_) => serializeAws_json1_1DynamicTransform(_, context)],
    DynamoDBCatalogSource: [, (_) => serializeAws_json1_1DynamoDBCatalogSource(_, context)],
    EvaluateDataQuality: [, (_) => serializeAws_json1_1EvaluateDataQuality(_, context)],
    FillMissingValues: [, (_) => serializeAws_json1_1FillMissingValues(_, context)],
    Filter: [, (_) => serializeAws_json1_1Filter(_, context)],
    GovernedCatalogSource: [, (_) => serializeAws_json1_1GovernedCatalogSource(_, context)],
    GovernedCatalogTarget: [, (_) => serializeAws_json1_1GovernedCatalogTarget(_, context)],
    JDBCConnectorSource: [, (_) => serializeAws_json1_1JDBCConnectorSource(_, context)],
    JDBCConnectorTarget: [, (_) => serializeAws_json1_1JDBCConnectorTarget(_, context)],
    Join: [, (_) => serializeAws_json1_1Join(_, context)],
    Merge: [, (_) => serializeAws_json1_1Merge(_, context)],
    MicrosoftSQLServerCatalogSource: [, (_) => serializeAws_json1_1MicrosoftSQLServerCatalogSource(_, context)],
    MicrosoftSQLServerCatalogTarget: [, (_) => serializeAws_json1_1MicrosoftSQLServerCatalogTarget(_, context)],
    MySQLCatalogSource: [, (_) => serializeAws_json1_1MySQLCatalogSource(_, context)],
    MySQLCatalogTarget: [, (_) => serializeAws_json1_1MySQLCatalogTarget(_, context)],
    OracleSQLCatalogSource: [, (_) => serializeAws_json1_1OracleSQLCatalogSource(_, context)],
    OracleSQLCatalogTarget: [, (_) => serializeAws_json1_1OracleSQLCatalogTarget(_, context)],
    PIIDetection: [, (_) => serializeAws_json1_1PIIDetection(_, context)],
    PostgreSQLCatalogSource: [, (_) => serializeAws_json1_1PostgreSQLCatalogSource(_, context)],
    PostgreSQLCatalogTarget: [, (_) => serializeAws_json1_1PostgreSQLCatalogTarget(_, context)],
    RedshiftSource: [, (_) => serializeAws_json1_1RedshiftSource(_, context)],
    RedshiftTarget: [, (_) => serializeAws_json1_1RedshiftTarget(_, context)],
    RelationalCatalogSource: [, (_) => serializeAws_json1_1RelationalCatalogSource(_, context)],
    RenameField: [, (_) => serializeAws_json1_1RenameField(_, context)],
    S3CatalogDeltaSource: [, (_) => serializeAws_json1_1S3CatalogDeltaSource(_, context)],
    S3CatalogHudiSource: [, (_) => serializeAws_json1_1S3CatalogHudiSource(_, context)],
    S3CatalogSource: [, (_) => serializeAws_json1_1S3CatalogSource(_, context)],
    S3CatalogTarget: [, (_) => serializeAws_json1_1S3CatalogTarget(_, context)],
    S3CsvSource: [, (_) => serializeAws_json1_1S3CsvSource(_, context)],
    S3DeltaCatalogTarget: [, (_) => serializeAws_json1_1S3DeltaCatalogTarget(_, context)],
    S3DeltaDirectTarget: [, (_) => serializeAws_json1_1S3DeltaDirectTarget(_, context)],
    S3DeltaSource: [, (_) => serializeAws_json1_1S3DeltaSource(_, context)],
    S3DirectTarget: [, (_) => serializeAws_json1_1S3DirectTarget(_, context)],
    S3GlueParquetTarget: [, (_) => serializeAws_json1_1S3GlueParquetTarget(_, context)],
    S3HudiCatalogTarget: [, (_) => serializeAws_json1_1S3HudiCatalogTarget(_, context)],
    S3HudiDirectTarget: [, (_) => serializeAws_json1_1S3HudiDirectTarget(_, context)],
    S3HudiSource: [, (_) => serializeAws_json1_1S3HudiSource(_, context)],
    S3JsonSource: [, (_) => serializeAws_json1_1S3JsonSource(_, context)],
    S3ParquetSource: [, (_) => serializeAws_json1_1S3ParquetSource(_, context)],
    SelectFields: [, (_) => serializeAws_json1_1SelectFields(_, context)],
    SelectFromCollection: [, (_) => serializeAws_json1_1SelectFromCollection(_, context)],
    SparkConnectorSource: [, (_) => serializeAws_json1_1SparkConnectorSource(_, context)],
    SparkConnectorTarget: [, (_) => serializeAws_json1_1SparkConnectorTarget(_, context)],
    SparkSQL: [, (_) => serializeAws_json1_1SparkSQL(_, context)],
    Spigot: [, (_) => serializeAws_json1_1Spigot(_, context)],
    SplitFields: [, (_) => serializeAws_json1_1SplitFields(_, context)],
    Union: [, (_) => serializeAws_json1_1Union(_, context)],
  });
};

const serializeAws_json1_1CodeGenConfigurationNodes = (
  input: Record<string, CodeGenConfigurationNode>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_json1_1CodeGenConfigurationNode(value, context);
    return acc;
  }, {});
};

const serializeAws_json1_1CodeGenEdge = (input: CodeGenEdge, context: __SerdeContext): any => {
  return take(input, {
    Source: [],
    Target: [],
    TargetParameter: [],
  });
};

const serializeAws_json1_1CodeGenNode = (input: CodeGenNode, context: __SerdeContext): any => {
  return take(input, {
    Args: [, (_) => serializeAws_json1_1CodeGenNodeArgs(_, context)],
    Id: [],
    LineNumber: [],
    NodeType: [],
  });
};

const serializeAws_json1_1CodeGenNodeArg = (input: CodeGenNodeArg, context: __SerdeContext): any => {
  return take(input, {
    Name: [],
    Param: [],
    Value: [],
  });
};

const serializeAws_json1_1CodeGenNodeArgs = (input: CodeGenNodeArg[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1CodeGenNodeArg(entry, context);
    });
};

const serializeAws_json1_1Column = (input: Column, context: __SerdeContext): any => {
  return take(input, {
    Comment: [],
    Name: [],
    Parameters: [, (_) => serializeAws_json1_1ParametersMap(_, context)],
    Type: [],
  });
};

const serializeAws_json1_1ColumnList = (input: Column[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Column(entry, context);
    });
};

const serializeAws_json1_1ColumnStatistics = (input: ColumnStatistics, context: __SerdeContext): any => {
  return take(input, {
    AnalyzedTime: [, (_) => Math.round(_.getTime() / 1000)],
    ColumnName: [],
    ColumnType: [],
    StatisticsData: [, (_) => serializeAws_json1_1ColumnStatisticsData(_, context)],
  });
};

const serializeAws_json1_1ColumnStatisticsData = (input: ColumnStatisticsData, context: __SerdeContext): any => {
  return take(input, {
    BinaryColumnStatisticsData: [, (_) => serializeAws_json1_1BinaryColumnStatisticsData(_, context)],
    BooleanColumnStatisticsData: [, (_) => serializeAws_json1_1BooleanColumnStatisticsData(_, context)],
    DateColumnStatisticsData: [, (_) => serializeAws_json1_1DateColumnStatisticsData(_, context)],
    DecimalColumnStatisticsData: [, (_) => serializeAws_json1_1DecimalColumnStatisticsData(_, context)],
    DoubleColumnStatisticsData: [, (_) => serializeAws_json1_1DoubleColumnStatisticsData(_, context)],
    LongColumnStatisticsData: [, (_) => serializeAws_json1_1LongColumnStatisticsData(_, context)],
    StringColumnStatisticsData: [, (_) => serializeAws_json1_1StringColumnStatisticsData(_, context)],
    Type: [],
  });
};

const serializeAws_json1_1ColumnValueStringList = (input: string[], context: __SerdeContext): any => {
  return input.filter((e: any) => e != null);
};

const serializeAws_json1_1Condition = (input: Condition, context: __SerdeContext): any => {
  return take(input, {
    CrawlState: [],
    CrawlerName: [],
    JobName: [],
    LogicalOperator: [],
    State: [],
  });
};

const serializeAws_json1_1ConditionList = (input: Condition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Condition(entry, context);
    });
};

const serializeAws_json1_1ConnectionInput = (input: ConnectionInput, context: __SerdeContext): any => {
  return take(input, {
    ConnectionProperties: [, (_) => serializeAws_json1_1ConnectionProperties(_, context)],
    ConnectionType: [],
    Description: [],
    MatchCriteria: [, (_) => serializeAws_json1_1MatchCriteria(_, context)],
    Name: [],
    PhysicalConnectionRequirements: [, (_) => serializeAws_json1_1PhysicalConnectionRequirements(_, context)],
  });
};

const serializeAws_json1_1ConnectionPasswordEncryption = (
  input: ConnectionPasswordEncryption,
  context: __SerdeContext
): any => {
  return take(input, {
    AwsKmsKeyId: [],
    ReturnConnectionPasswordEncrypted: [],
  });
};

const serializeAws_json1_1ConnectionProperties = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce(
    (acc: Record<string, any>, [key, value]: [ConnectionPropertyKey | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = value;
      return acc;
    },
    {}
  );
};

const serializeAws_json1_1ConnectionsList = (input: ConnectionsList, context: __SerdeContext): any => {
  return take(input, {
    Connections: [, (_) => serializeAws_json1_1OrchestrationStringList(_, context)],
  });
};

const serializeAws_json1_1ContextWords = (input: string[], context: __SerdeContext): any => {
  return input.filter((e: any) => e != null);
};

const serializeAws_json1_1CrawlerNameList = (input: string[], context: __SerdeContext): any => {
  return input.filter((e: any) => e != null);
};

const serializeAws_json1_1CrawlerTargets = (input: CrawlerTargets, context: __SerdeContext): any => {
  return take(input, {
    CatalogTargets: [, (_) => serializeAws_json1_1CatalogTargetList(_, context)],
    DeltaTargets: [, (_) => serializeAws_json1_1DeltaTargetList(_, context)],
    DynamoDBTargets: [, (_) => serializeAws_json1_1DynamoDBTargetList(_, context)],
    JdbcTargets: [, (_) => serializeAws_json1_1JdbcTargetList(_, context)],
    MongoDBTargets: [, (_) => serializeAws_json1_1MongoDBTargetList(_, context)],
    S3Targets: [, (_) => serializeAws_json1_1S3TargetList(_, context)],
  });
};

const serializeAws_json1_1CrawlsFilter = (input: CrawlsFilter, context: __SerdeContext): any => {
  return take(input, {
    FieldName: [],
    FieldValue: [],
    FilterOperator: [],
  });
};

const serializeAws_json1_1CrawlsFilterList = (input: CrawlsFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1CrawlsFilter(entry, context);
    });
};

const serializeAws_json1_1CreateBlueprintRequest = (input: CreateBlueprintRequest, context: __SerdeContext): any => {
  return take(input, {
    BlueprintLocation: [],
    Description: [],
    Name: [],
    Tags: [, (_) => serializeAws_json1_1TagsMap(_, context)],
  });
};

const serializeAws_json1_1CreateClassifierRequest = (input: CreateClassifierRequest, context: __SerdeContext): any => {
  return take(input, {
    CsvClassifier: [, (_) => serializeAws_json1_1CreateCsvClassifierRequest(_, context)],
    GrokClassifier: [, (_) => serializeAws_json1_1CreateGrokClassifierRequest(_, context)],
    JsonClassifier: [, (_) => serializeAws_json1_1CreateJsonClassifierRequest(_, context)],
    XMLClassifier: [, (_) => serializeAws_json1_1CreateXMLClassifierRequest(_, context)],
  });
};

const serializeAws_json1_1CreateConnectionRequest = (input: CreateConnectionRequest, context: __SerdeContext): any => {
  return take(input, {
    CatalogId: [],
    ConnectionInput: [, (_) => serializeAws_json1_1ConnectionInput(_, context)],
    Tags: [, (_) => serializeAws_json1_1TagsMap(_, context)],
  });
};

const serializeAws_json1_1CreateCrawlerRequest = (input: CreateCrawlerRequest, context: __SerdeContext): any => {
  return take(input, {
    Classifiers: [, (_) => serializeAws_json1_1ClassifierNameList(_, context)],
    Configuration: [],
    CrawlerSecurityConfiguration: [],
    DatabaseName: [],
    Description: [],
    LakeFormationConfiguration: [, (_) => serializeAws_json1_1LakeFormationConfiguration(_, context)],
    LineageConfiguration: [, (_) => serializeAws_json1_1LineageConfiguration(_, context)],
    Name: [],
    RecrawlPolicy: [, (_) => serializeAws_json1_1RecrawlPolicy(_, context)],
    Role: [],
    Schedule: [],
    SchemaChangePolicy: [, (_) => serializeAws_json1_1SchemaChangePolicy(_, context)],
    TablePrefix: [],
    Tags: [, (_) => serializeAws_json1_1TagsMap(_, context)],
    Targets: [, (_) => serializeAws_json1_1CrawlerTargets(_, context)],
  });
};

const serializeAws_json1_1CreateCsvClassifierRequest = (
  input: CreateCsvClassifierRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    AllowSingleColumn: [],
    ContainsHeader: [],
    CustomDatatypeConfigured: [],
    CustomDatatypes: [, (_) => serializeAws_json1_1CustomDatatypes(_, context)],
    Delimiter: [],
    DisableValueTrimming: [],
    Header: [, (_) => serializeAws_json1_1CsvHeader(_, context)],
    Name: [],
    QuoteSymbol: [],
  });
};

const serializeAws_json1_1CreateCustomEntityTypeRequest = (
  input: CreateCustomEntityTypeRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    ContextWords: [, (_) => serializeAws_json1_1ContextWords(_, context)],
    Name: [],
    RegexString: [],
  });
};

const serializeAws_json1_1CreateDatabaseRequest = (input: CreateDatabaseRequest, context: __SerdeContext): any => {
  return take(input, {
    CatalogId: [],
    DatabaseInput: [, (_) => serializeAws_json1_1DatabaseInput(_, context)],
    Tags: [, (_) => serializeAws_json1_1TagsMap(_, context)],
  });
};

const serializeAws_json1_1CreateDataQualityRulesetRequest = (
  input: CreateDataQualityRulesetRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    ClientToken: [],
    Description: [],
    Name: [],
    Ruleset: [],
    Tags: [, (_) => serializeAws_json1_1TagsMap(_, context)],
    TargetTable: [, (_) => serializeAws_json1_1DataQualityTargetTable(_, context)],
  });
};

const serializeAws_json1_1CreateDevEndpointRequest = (
  input: CreateDevEndpointRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    Arguments: [, (_) => serializeAws_json1_1MapValue(_, context)],
    EndpointName: [],
    ExtraJarsS3Path: [],
    ExtraPythonLibsS3Path: [],
    GlueVersion: [],
    NumberOfNodes: [],
    NumberOfWorkers: [],
    PublicKey: [],
    PublicKeys: [, (_) => serializeAws_json1_1PublicKeysList(_, context)],
    RoleArn: [],
    SecurityConfiguration: [],
    SecurityGroupIds: [, (_) => serializeAws_json1_1StringList(_, context)],
    SubnetId: [],
    Tags: [, (_) => serializeAws_json1_1TagsMap(_, context)],
    WorkerType: [],
  });
};

const serializeAws_json1_1CreateGrokClassifierRequest = (
  input: CreateGrokClassifierRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    Classification: [],
    CustomPatterns: [],
    GrokPattern: [],
    Name: [],
  });
};

const serializeAws_json1_1CreateJobRequest = (input: CreateJobRequest, context: __SerdeContext): any => {
  return take(input, {
    AllocatedCapacity: [],
    CodeGenConfigurationNodes: [, (_) => serializeAws_json1_1CodeGenConfigurationNodes(_, context)],
    Command: [, (_) => serializeAws_json1_1JobCommand(_, context)],
    Connections: [, (_) => serializeAws_json1_1ConnectionsList(_, context)],
    DefaultArguments: [, (_) => serializeAws_json1_1GenericMap(_, context)],
    Description: [],
    ExecutionClass: [],
    ExecutionProperty: [, (_) => serializeAws_json1_1ExecutionProperty(_, context)],
    GlueVersion: [],
    LogUri: [],
    MaxCapacity: [, (_) => __serializeFloat(_)],
    MaxRetries: [],
    Name: [],
    NonOverridableArguments: [, (_) => serializeAws_json1_1GenericMap(_, context)],
    NotificationProperty: [, (_) => serializeAws_json1_1NotificationProperty(_, context)],
    NumberOfWorkers: [],
    Role: [],
    SecurityConfiguration: [],
    SourceControlDetails: [, (_) => serializeAws_json1_1SourceControlDetails(_, context)],
    Tags: [, (_) => serializeAws_json1_1TagsMap(_, context)],
    Timeout: [],
    WorkerType: [],
  });
};

const serializeAws_json1_1CreateJsonClassifierRequest = (
  input: CreateJsonClassifierRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    JsonPath: [],
    Name: [],
  });
};

const serializeAws_json1_1CreateMLTransformRequest = (
  input: CreateMLTransformRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    Description: [],
    GlueVersion: [],
    InputRecordTables: [, (_) => serializeAws_json1_1GlueTables(_, context)],
    MaxCapacity: [, (_) => __serializeFloat(_)],
    MaxRetries: [],
    Name: [],
    NumberOfWorkers: [],
    Parameters: [, (_) => serializeAws_json1_1TransformParameters(_, context)],
    Role: [],
    Tags: [, (_) => serializeAws_json1_1TagsMap(_, context)],
    Timeout: [],
    TransformEncryption: [, (_) => serializeAws_json1_1TransformEncryption(_, context)],
    WorkerType: [],
  });
};

const serializeAws_json1_1CreatePartitionIndexRequest = (
  input: CreatePartitionIndexRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    CatalogId: [],
    DatabaseName: [],
    PartitionIndex: [, (_) => serializeAws_json1_1PartitionIndex(_, context)],
    TableName: [],
  });
};

const serializeAws_json1_1CreatePartitionRequest = (input: CreatePartitionRequest, context: __SerdeContext): any => {
  return take(input, {
    CatalogId: [],
    DatabaseName: [],
    PartitionInput: [, (_) => serializeAws_json1_1PartitionInput(_, context)],
    TableName: [],
  });
};

const serializeAws_json1_1CreateRegistryInput = (input: CreateRegistryInput, context: __SerdeContext): any => {
  return take(input, {
    Description: [],
    RegistryName: [],
    Tags: [, (_) => serializeAws_json1_1TagsMap(_, context)],
  });
};

const serializeAws_json1_1CreateSchemaInput = (input: CreateSchemaInput, context: __SerdeContext): any => {
  return take(input, {
    Compatibility: [],
    DataFormat: [],
    Description: [],
    RegistryId: [, (_) => serializeAws_json1_1RegistryId(_, context)],
    SchemaDefinition: [],
    SchemaName: [],
    Tags: [, (_) => serializeAws_json1_1TagsMap(_, context)],
  });
};

const serializeAws_json1_1CreateScriptRequest = (input: CreateScriptRequest, context: __SerdeContext): any => {
  return take(input, {
    DagEdges: [, (_) => serializeAws_json1_1DagEdges(_, context)],
    DagNodes: [, (_) => serializeAws_json1_1DagNodes(_, context)],
    Language: [],
  });
};

const serializeAws_json1_1CreateSecurityConfigurationRequest = (
  input: CreateSecurityConfigurationRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    EncryptionConfiguration: [, (_) => serializeAws_json1_1EncryptionConfiguration(_, context)],
    Name: [],
  });
};

const serializeAws_json1_1CreateSessionRequest = (input: CreateSessionRequest, context: __SerdeContext): any => {
  return take(input, {
    Command: [, (_) => serializeAws_json1_1SessionCommand(_, context)],
    Connections: [, (_) => serializeAws_json1_1ConnectionsList(_, context)],
    DefaultArguments: [, (_) => serializeAws_json1_1OrchestrationArgumentsMap(_, context)],
    Description: [],
    GlueVersion: [],
    Id: [],
    IdleTimeout: [],
    MaxCapacity: [, (_) => __serializeFloat(_)],
    NumberOfWorkers: [],
    RequestOrigin: [],
    Role: [],
    SecurityConfiguration: [],
    Tags: [, (_) => serializeAws_json1_1TagsMap(_, context)],
    Timeout: [],
    WorkerType: [],
  });
};

const serializeAws_json1_1CreateTableRequest = (input: CreateTableRequest, context: __SerdeContext): any => {
  return take(input, {
    CatalogId: [],
    DatabaseName: [],
    PartitionIndexes: [, (_) => serializeAws_json1_1PartitionIndexList(_, context)],
    TableInput: [, (_) => serializeAws_json1_1TableInput(_, context)],
    TransactionId: [],
  });
};

const serializeAws_json1_1CreateTriggerRequest = (input: CreateTriggerRequest, context: __SerdeContext): any => {
  return take(input, {
    Actions: [, (_) => serializeAws_json1_1ActionList(_, context)],
    Description: [],
    EventBatchingCondition: [, (_) => serializeAws_json1_1EventBatchingCondition(_, context)],
    Name: [],
    Predicate: [, (_) => serializeAws_json1_1Predicate(_, context)],
    Schedule: [],
    StartOnCreation: [],
    Tags: [, (_) => serializeAws_json1_1TagsMap(_, context)],
    Type: [],
    WorkflowName: [],
  });
};

const serializeAws_json1_1CreateUserDefinedFunctionRequest = (
  input: CreateUserDefinedFunctionRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    CatalogId: [],
    DatabaseName: [],
    FunctionInput: [, (_) => serializeAws_json1_1UserDefinedFunctionInput(_, context)],
  });
};

const serializeAws_json1_1CreateWorkflowRequest = (input: CreateWorkflowRequest, context: __SerdeContext): any => {
  return take(input, {
    DefaultRunProperties: [, (_) => serializeAws_json1_1WorkflowRunProperties(_, context)],
    Description: [],
    MaxConcurrentRuns: [],
    Name: [],
    Tags: [, (_) => serializeAws_json1_1TagsMap(_, context)],
  });
};

const serializeAws_json1_1CreateXMLClassifierRequest = (
  input: CreateXMLClassifierRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    Classification: [],
    Name: [],
    RowTag: [],
  });
};

const serializeAws_json1_1CsvHeader = (input: string[], context: __SerdeContext): any => {
  return input.filter((e: any) => e != null);
};

const serializeAws_json1_1CustomCode = (input: CustomCode, context: __SerdeContext): any => {
  return take(input, {
    ClassName: [],
    Code: [],
    Inputs: [, (_) => serializeAws_json1_1ManyInputs(_, context)],
    Name: [],
    OutputSchemas: [, (_) => serializeAws_json1_1GlueSchemas(_, context)],
  });
};

const serializeAws_json1_1CustomDatatypes = (input: string[], context: __SerdeContext): any => {
  return input.filter((e: any) => e != null);
};

const serializeAws_json1_1CustomEntityTypeNames = (input: string[], context: __SerdeContext): any => {
  return input.filter((e: any) => e != null);
};

const serializeAws_json1_1DagEdges = (input: CodeGenEdge[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1CodeGenEdge(entry, context);
    });
};

const serializeAws_json1_1DagNodes = (input: CodeGenNode[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1CodeGenNode(entry, context);
    });
};

const serializeAws_json1_1DatabaseIdentifier = (input: DatabaseIdentifier, context: __SerdeContext): any => {
  return take(input, {
    CatalogId: [],
    DatabaseName: [],
  });
};

const serializeAws_json1_1DatabaseInput = (input: DatabaseInput, context: __SerdeContext): any => {
  return take(input, {
    CreateTableDefaultPermissions: [, (_) => serializeAws_json1_1PrincipalPermissionsList(_, context)],
    Description: [],
    FederatedDatabase: [, (_) => serializeAws_json1_1FederatedDatabase(_, context)],
    LocationUri: [],
    Name: [],
    Parameters: [, (_) => serializeAws_json1_1ParametersMap(_, context)],
    TargetDatabase: [, (_) => serializeAws_json1_1DatabaseIdentifier(_, context)],
  });
};

const serializeAws_json1_1DataCatalogEncryptionSettings = (
  input: DataCatalogEncryptionSettings,
  context: __SerdeContext
): any => {
  return take(input, {
    ConnectionPasswordEncryption: [, (_) => serializeAws_json1_1ConnectionPasswordEncryption(_, context)],
    EncryptionAtRest: [, (_) => serializeAws_json1_1EncryptionAtRest(_, context)],
  });
};

const serializeAws_json1_1DataLakePrincipal = (input: DataLakePrincipal, context: __SerdeContext): any => {
  return take(input, {
    DataLakePrincipalIdentifier: [],
  });
};

const serializeAws_json1_1DataQualityEvaluationRunAdditionalRunOptions = (
  input: DataQualityEvaluationRunAdditionalRunOptions,
  context: __SerdeContext
): any => {
  return take(input, {
    CloudWatchMetricsEnabled: [],
    ResultsS3Prefix: [],
  });
};

const serializeAws_json1_1DataQualityResultFilterCriteria = (
  input: DataQualityResultFilterCriteria,
  context: __SerdeContext
): any => {
  return take(input, {
    DataSource: [, (_) => serializeAws_json1_1DataSource(_, context)],
    JobName: [],
    JobRunId: [],
    StartedAfter: [, (_) => Math.round(_.getTime() / 1000)],
    StartedBefore: [, (_) => Math.round(_.getTime() / 1000)],
  });
};

const serializeAws_json1_1DataQualityResultIds = (input: string[], context: __SerdeContext): any => {
  return input.filter((e: any) => e != null);
};

const serializeAws_json1_1DataQualityRuleRecommendationRunFilter = (
  input: DataQualityRuleRecommendationRunFilter,
  context: __SerdeContext
): any => {
  return take(input, {
    DataSource: [, (_) => serializeAws_json1_1DataSource(_, context)],
    StartedAfter: [, (_) => Math.round(_.getTime() / 1000)],
    StartedBefore: [, (_) => Math.round(_.getTime() / 1000)],
  });
};

const serializeAws_json1_1DataQualityRulesetEvaluationRunFilter = (
  input: DataQualityRulesetEvaluationRunFilter,
  context: __SerdeContext
): any => {
  return take(input, {
    DataSource: [, (_) => serializeAws_json1_1DataSource(_, context)],
    StartedAfter: [, (_) => Math.round(_.getTime() / 1000)],
    StartedBefore: [, (_) => Math.round(_.getTime() / 1000)],
  });
};

const serializeAws_json1_1DataQualityRulesetFilterCriteria = (
  input: DataQualityRulesetFilterCriteria,
  context: __SerdeContext
): any => {
  return take(input, {
    CreatedAfter: [, (_) => Math.round(_.getTime() / 1000)],
    CreatedBefore: [, (_) => Math.round(_.getTime() / 1000)],
    Description: [],
    LastModifiedAfter: [, (_) => Math.round(_.getTime() / 1000)],
    LastModifiedBefore: [, (_) => Math.round(_.getTime() / 1000)],
    Name: [],
    TargetTable: [, (_) => serializeAws_json1_1DataQualityTargetTable(_, context)],
  });
};

const serializeAws_json1_1DataQualityTargetTable = (input: DataQualityTargetTable, context: __SerdeContext): any => {
  return take(input, {
    DatabaseName: [],
    TableName: [],
  });
};

const serializeAws_json1_1DataSource = (input: DataSource, context: __SerdeContext): any => {
  return take(input, {
    GlueTable: [, (_) => serializeAws_json1_1GlueTable(_, context)],
  });
};

const serializeAws_json1_1Datatype = (input: Datatype, context: __SerdeContext): any => {
  return take(input, {
    Id: [],
    Label: [],
  });
};

const serializeAws_json1_1DateColumnStatisticsData = (
  input: DateColumnStatisticsData,
  context: __SerdeContext
): any => {
  return take(input, {
    MaximumValue: [, (_) => Math.round(_.getTime() / 1000)],
    MinimumValue: [, (_) => Math.round(_.getTime() / 1000)],
    NumberOfDistinctValues: [],
    NumberOfNulls: [],
  });
};

const serializeAws_json1_1DecimalColumnStatisticsData = (
  input: DecimalColumnStatisticsData,
  context: __SerdeContext
): any => {
  return take(input, {
    MaximumValue: [, (_) => serializeAws_json1_1DecimalNumber(_, context)],
    MinimumValue: [, (_) => serializeAws_json1_1DecimalNumber(_, context)],
    NumberOfDistinctValues: [],
    NumberOfNulls: [],
  });
};

const serializeAws_json1_1DecimalNumber = (input: DecimalNumber, context: __SerdeContext): any => {
  return take(input, {
    Scale: [],
    UnscaledValue: [, (_) => context.base64Encoder(_)],
  });
};

const serializeAws_json1_1DeleteBlueprintRequest = (input: DeleteBlueprintRequest, context: __SerdeContext): any => {
  return take(input, {
    Name: [],
  });
};

const serializeAws_json1_1DeleteClassifierRequest = (input: DeleteClassifierRequest, context: __SerdeContext): any => {
  return take(input, {
    Name: [],
  });
};

const serializeAws_json1_1DeleteColumnStatisticsForPartitionRequest = (
  input: DeleteColumnStatisticsForPartitionRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    CatalogId: [],
    ColumnName: [],
    DatabaseName: [],
    PartitionValues: [, (_) => serializeAws_json1_1ValueStringList(_, context)],
    TableName: [],
  });
};

const serializeAws_json1_1DeleteColumnStatisticsForTableRequest = (
  input: DeleteColumnStatisticsForTableRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    CatalogId: [],
    ColumnName: [],
    DatabaseName: [],
    TableName: [],
  });
};

const serializeAws_json1_1DeleteConnectionNameList = (input: string[], context: __SerdeContext): any => {
  return input.filter((e: any) => e != null);
};

const serializeAws_json1_1DeleteConnectionRequest = (input: DeleteConnectionRequest, context: __SerdeContext): any => {
  return take(input, {
    CatalogId: [],
    ConnectionName: [],
  });
};

const serializeAws_json1_1DeleteCrawlerRequest = (input: DeleteCrawlerRequest, context: __SerdeContext): any => {
  return take(input, {
    Name: [],
  });
};

const serializeAws_json1_1DeleteCustomEntityTypeRequest = (
  input: DeleteCustomEntityTypeRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    Name: [],
  });
};

const serializeAws_json1_1DeleteDatabaseRequest = (input: DeleteDatabaseRequest, context: __SerdeContext): any => {
  return take(input, {
    CatalogId: [],
    Name: [],
  });
};

const serializeAws_json1_1DeleteDataQualityRulesetRequest = (
  input: DeleteDataQualityRulesetRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    Name: [],
  });
};

const serializeAws_json1_1DeleteDevEndpointRequest = (
  input: DeleteDevEndpointRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    EndpointName: [],
  });
};

const serializeAws_json1_1DeleteJobRequest = (input: DeleteJobRequest, context: __SerdeContext): any => {
  return take(input, {
    JobName: [],
  });
};

const serializeAws_json1_1DeleteMLTransformRequest = (
  input: DeleteMLTransformRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    TransformId: [],
  });
};

const serializeAws_json1_1DeletePartitionIndexRequest = (
  input: DeletePartitionIndexRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    CatalogId: [],
    DatabaseName: [],
    IndexName: [],
    TableName: [],
  });
};

const serializeAws_json1_1DeletePartitionRequest = (input: DeletePartitionRequest, context: __SerdeContext): any => {
  return take(input, {
    CatalogId: [],
    DatabaseName: [],
    PartitionValues: [, (_) => serializeAws_json1_1ValueStringList(_, context)],
    TableName: [],
  });
};

const serializeAws_json1_1DeleteRegistryInput = (input: DeleteRegistryInput, context: __SerdeContext): any => {
  return take(input, {
    RegistryId: [, (_) => serializeAws_json1_1RegistryId(_, context)],
  });
};

const serializeAws_json1_1DeleteResourcePolicyRequest = (
  input: DeleteResourcePolicyRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    PolicyHashCondition: [],
    ResourceArn: [],
  });
};

const serializeAws_json1_1DeleteSchemaInput = (input: DeleteSchemaInput, context: __SerdeContext): any => {
  return take(input, {
    SchemaId: [, (_) => serializeAws_json1_1SchemaId(_, context)],
  });
};

const serializeAws_json1_1DeleteSchemaVersionsInput = (
  input: DeleteSchemaVersionsInput,
  context: __SerdeContext
): any => {
  return take(input, {
    SchemaId: [, (_) => serializeAws_json1_1SchemaId(_, context)],
    Versions: [],
  });
};

const serializeAws_json1_1DeleteSecurityConfigurationRequest = (
  input: DeleteSecurityConfigurationRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    Name: [],
  });
};

const serializeAws_json1_1DeleteSessionRequest = (input: DeleteSessionRequest, context: __SerdeContext): any => {
  return take(input, {
    Id: [],
    RequestOrigin: [],
  });
};

const serializeAws_json1_1DeleteTableRequest = (input: DeleteTableRequest, context: __SerdeContext): any => {
  return take(input, {
    CatalogId: [],
    DatabaseName: [],
    Name: [],
    TransactionId: [],
  });
};

const serializeAws_json1_1DeleteTableVersionRequest = (
  input: DeleteTableVersionRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    CatalogId: [],
    DatabaseName: [],
    TableName: [],
    VersionId: [],
  });
};

const serializeAws_json1_1DeleteTriggerRequest = (input: DeleteTriggerRequest, context: __SerdeContext): any => {
  return take(input, {
    Name: [],
  });
};

const serializeAws_json1_1DeleteUserDefinedFunctionRequest = (
  input: DeleteUserDefinedFunctionRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    CatalogId: [],
    DatabaseName: [],
    FunctionName: [],
  });
};

const serializeAws_json1_1DeleteWorkflowRequest = (input: DeleteWorkflowRequest, context: __SerdeContext): any => {
  return take(input, {
    Name: [],
  });
};

const serializeAws_json1_1DeltaTarget = (input: DeltaTarget, context: __SerdeContext): any => {
  return take(input, {
    ConnectionName: [],
    CreateNativeDeltaTable: [],
    DeltaTables: [, (_) => serializeAws_json1_1PathList(_, context)],
    WriteManifest: [],
  });
};

const serializeAws_json1_1DeltaTargetList = (input: DeltaTarget[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1DeltaTarget(entry, context);
    });
};

const serializeAws_json1_1DevEndpointCustomLibraries = (
  input: DevEndpointCustomLibraries,
  context: __SerdeContext
): any => {
  return take(input, {
    ExtraJarsS3Path: [],
    ExtraPythonLibsS3Path: [],
  });
};

const serializeAws_json1_1DevEndpointNames = (input: string[], context: __SerdeContext): any => {
  return input.filter((e: any) => e != null);
};

const serializeAws_json1_1DirectJDBCSource = (input: DirectJDBCSource, context: __SerdeContext): any => {
  return take(input, {
    ConnectionName: [],
    ConnectionType: [],
    Database: [],
    Name: [],
    RedshiftTmpDir: [],
    Table: [],
  });
};

const serializeAws_json1_1DirectKafkaSource = (input: DirectKafkaSource, context: __SerdeContext): any => {
  return take(input, {
    DataPreviewOptions: [, (_) => serializeAws_json1_1StreamingDataPreviewOptions(_, context)],
    DetectSchema: [],
    Name: [],
    StreamingOptions: [, (_) => serializeAws_json1_1KafkaStreamingSourceOptions(_, context)],
    WindowSize: [],
  });
};

const serializeAws_json1_1DirectKinesisSource = (input: DirectKinesisSource, context: __SerdeContext): any => {
  return take(input, {
    DataPreviewOptions: [, (_) => serializeAws_json1_1StreamingDataPreviewOptions(_, context)],
    DetectSchema: [],
    Name: [],
    StreamingOptions: [, (_) => serializeAws_json1_1KinesisStreamingSourceOptions(_, context)],
    WindowSize: [],
  });
};

const serializeAws_json1_1DirectSchemaChangePolicy = (
  input: DirectSchemaChangePolicy,
  context: __SerdeContext
): any => {
  return take(input, {
    Database: [],
    EnableUpdateCatalog: [],
    Table: [],
    UpdateBehavior: [],
  });
};

const serializeAws_json1_1DoubleColumnStatisticsData = (
  input: DoubleColumnStatisticsData,
  context: __SerdeContext
): any => {
  return take(input, {
    MaximumValue: [, (_) => __serializeFloat(_)],
    MinimumValue: [, (_) => __serializeFloat(_)],
    NumberOfDistinctValues: [],
    NumberOfNulls: [],
  });
};

const serializeAws_json1_1DQResultsPublishingOptions = (
  input: DQResultsPublishingOptions,
  context: __SerdeContext
): any => {
  return take(input, {
    CloudWatchMetricsEnabled: [],
    EvaluationContext: [],
    ResultsPublishingEnabled: [],
    ResultsS3Prefix: [],
  });
};

const serializeAws_json1_1DQStopJobOnFailureOptions = (
  input: DQStopJobOnFailureOptions,
  context: __SerdeContext
): any => {
  return take(input, {
    StopJobOnFailureTiming: [],
  });
};

const serializeAws_json1_1DropDuplicates = (input: DropDuplicates, context: __SerdeContext): any => {
  return take(input, {
    Columns: [, (_) => serializeAws_json1_1LimitedPathList(_, context)],
    Inputs: [, (_) => serializeAws_json1_1OneInput(_, context)],
    Name: [],
  });
};

const serializeAws_json1_1DropFields = (input: DropFields, context: __SerdeContext): any => {
  return take(input, {
    Inputs: [, (_) => serializeAws_json1_1OneInput(_, context)],
    Name: [],
    Paths: [, (_) => serializeAws_json1_1GlueStudioPathList(_, context)],
  });
};

const serializeAws_json1_1DropNullFields = (input: DropNullFields, context: __SerdeContext): any => {
  return take(input, {
    Inputs: [, (_) => serializeAws_json1_1OneInput(_, context)],
    Name: [],
    NullCheckBoxList: [, (_) => serializeAws_json1_1NullCheckBoxList(_, context)],
    NullTextList: [, (_) => serializeAws_json1_1NullValueFields(_, context)],
  });
};

const serializeAws_json1_1DynamicTransform = (input: DynamicTransform, context: __SerdeContext): any => {
  return take(input, {
    FunctionName: [],
    Inputs: [, (_) => serializeAws_json1_1OneInput(_, context)],
    Name: [],
    Parameters: [, (_) => serializeAws_json1_1TransformConfigParameterList(_, context)],
    Path: [],
    TransformName: [],
    Version: [],
  });
};

const serializeAws_json1_1DynamoDBCatalogSource = (input: DynamoDBCatalogSource, context: __SerdeContext): any => {
  return take(input, {
    Database: [],
    Name: [],
    Table: [],
  });
};

const serializeAws_json1_1DynamoDBTarget = (input: DynamoDBTarget, context: __SerdeContext): any => {
  return take(input, {
    Path: [],
    scanAll: [],
    scanRate: [, (_) => __serializeFloat(_)],
  });
};

const serializeAws_json1_1DynamoDBTargetList = (input: DynamoDBTarget[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1DynamoDBTarget(entry, context);
    });
};

const serializeAws_json1_1EnableAdditionalMetadata = (
  input: (JdbcMetadataEntry | string)[],
  context: __SerdeContext
): any => {
  return input.filter((e: any) => e != null);
};

const serializeAws_json1_1EnclosedInStringProperties = (input: string[], context: __SerdeContext): any => {
  return input.filter((e: any) => e != null);
};

const serializeAws_json1_1EnclosedInStringPropertiesMinOne = (input: string[], context: __SerdeContext): any => {
  return input.filter((e: any) => e != null);
};

const serializeAws_json1_1EncryptionAtRest = (input: EncryptionAtRest, context: __SerdeContext): any => {
  return take(input, {
    CatalogEncryptionMode: [],
    SseAwsKmsKeyId: [],
  });
};

const serializeAws_json1_1EncryptionConfiguration = (input: EncryptionConfiguration, context: __SerdeContext): any => {
  return take(input, {
    CloudWatchEncryption: [, (_) => serializeAws_json1_1CloudWatchEncryption(_, context)],
    JobBookmarksEncryption: [, (_) => serializeAws_json1_1JobBookmarksEncryption(_, context)],
    S3Encryption: [, (_) => serializeAws_json1_1S3EncryptionList(_, context)],
  });
};

const serializeAws_json1_1EvaluateDataQuality = (input: EvaluateDataQuality, context: __SerdeContext): any => {
  return take(input, {
    Inputs: [, (_) => serializeAws_json1_1OneInput(_, context)],
    Name: [],
    Output: [],
    PublishingOptions: [, (_) => serializeAws_json1_1DQResultsPublishingOptions(_, context)],
    Ruleset: [],
    StopJobOnFailureOptions: [, (_) => serializeAws_json1_1DQStopJobOnFailureOptions(_, context)],
  });
};

const serializeAws_json1_1EventBatchingCondition = (input: EventBatchingCondition, context: __SerdeContext): any => {
  return take(input, {
    BatchSize: [],
    BatchWindow: [],
  });
};

const serializeAws_json1_1ExecutionProperty = (input: ExecutionProperty, context: __SerdeContext): any => {
  return take(input, {
    MaxConcurrentRuns: [],
  });
};

const serializeAws_json1_1FederatedDatabase = (input: FederatedDatabase, context: __SerdeContext): any => {
  return take(input, {
    ConnectionName: [],
    Identifier: [],
  });
};

const serializeAws_json1_1FillMissingValues = (input: FillMissingValues, context: __SerdeContext): any => {
  return take(input, {
    FilledPath: [],
    ImputedPath: [],
    Inputs: [, (_) => serializeAws_json1_1OneInput(_, context)],
    Name: [],
  });
};

const serializeAws_json1_1Filter = (input: Filter, context: __SerdeContext): any => {
  return take(input, {
    Filters: [, (_) => serializeAws_json1_1FilterExpressions(_, context)],
    Inputs: [, (_) => serializeAws_json1_1OneInput(_, context)],
    LogicalOperator: [],
    Name: [],
  });
};

const serializeAws_json1_1FilterExpression = (input: FilterExpression, context: __SerdeContext): any => {
  return take(input, {
    Negated: [],
    Operation: [],
    Values: [, (_) => serializeAws_json1_1FilterValues(_, context)],
  });
};

const serializeAws_json1_1FilterExpressions = (input: FilterExpression[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1FilterExpression(entry, context);
    });
};

const serializeAws_json1_1FilterValue = (input: FilterValue, context: __SerdeContext): any => {
  return take(input, {
    Type: [],
    Value: [, (_) => serializeAws_json1_1EnclosedInStringProperties(_, context)],
  });
};

const serializeAws_json1_1FilterValues = (input: FilterValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1FilterValue(entry, context);
    });
};

const serializeAws_json1_1FindMatchesParameters = (input: FindMatchesParameters, context: __SerdeContext): any => {
  return take(input, {
    AccuracyCostTradeoff: [, (_) => __serializeFloat(_)],
    EnforceProvidedLabels: [],
    PrecisionRecallTradeoff: [, (_) => __serializeFloat(_)],
    PrimaryKeyColumnName: [],
  });
};

const serializeAws_json1_1GenericMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_1GetBlueprintRequest = (input: GetBlueprintRequest, context: __SerdeContext): any => {
  return take(input, {
    IncludeBlueprint: [],
    IncludeParameterSpec: [],
    Name: [],
  });
};

const serializeAws_json1_1GetBlueprintRunRequest = (input: GetBlueprintRunRequest, context: __SerdeContext): any => {
  return take(input, {
    BlueprintName: [],
    RunId: [],
  });
};

const serializeAws_json1_1GetBlueprintRunsRequest = (input: GetBlueprintRunsRequest, context: __SerdeContext): any => {
  return take(input, {
    BlueprintName: [],
    MaxResults: [],
    NextToken: [],
  });
};

const serializeAws_json1_1GetCatalogImportStatusRequest = (
  input: GetCatalogImportStatusRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    CatalogId: [],
  });
};

const serializeAws_json1_1GetClassifierRequest = (input: GetClassifierRequest, context: __SerdeContext): any => {
  return take(input, {
    Name: [],
  });
};

const serializeAws_json1_1GetClassifiersRequest = (input: GetClassifiersRequest, context: __SerdeContext): any => {
  return take(input, {
    MaxResults: [],
    NextToken: [],
  });
};

const serializeAws_json1_1GetColumnNamesList = (input: string[], context: __SerdeContext): any => {
  return input.filter((e: any) => e != null);
};

const serializeAws_json1_1GetColumnStatisticsForPartitionRequest = (
  input: GetColumnStatisticsForPartitionRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    CatalogId: [],
    ColumnNames: [, (_) => serializeAws_json1_1GetColumnNamesList(_, context)],
    DatabaseName: [],
    PartitionValues: [, (_) => serializeAws_json1_1ValueStringList(_, context)],
    TableName: [],
  });
};

const serializeAws_json1_1GetColumnStatisticsForTableRequest = (
  input: GetColumnStatisticsForTableRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    CatalogId: [],
    ColumnNames: [, (_) => serializeAws_json1_1GetColumnNamesList(_, context)],
    DatabaseName: [],
    TableName: [],
  });
};

const serializeAws_json1_1GetConnectionRequest = (input: GetConnectionRequest, context: __SerdeContext): any => {
  return take(input, {
    CatalogId: [],
    HidePassword: [],
    Name: [],
  });
};

const serializeAws_json1_1GetConnectionsFilter = (input: GetConnectionsFilter, context: __SerdeContext): any => {
  return take(input, {
    ConnectionType: [],
    MatchCriteria: [, (_) => serializeAws_json1_1MatchCriteria(_, context)],
  });
};

const serializeAws_json1_1GetConnectionsRequest = (input: GetConnectionsRequest, context: __SerdeContext): any => {
  return take(input, {
    CatalogId: [],
    Filter: [, (_) => serializeAws_json1_1GetConnectionsFilter(_, context)],
    HidePassword: [],
    MaxResults: [],
    NextToken: [],
  });
};

const serializeAws_json1_1GetCrawlerMetricsRequest = (
  input: GetCrawlerMetricsRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    CrawlerNameList: [, (_) => serializeAws_json1_1CrawlerNameList(_, context)],
    MaxResults: [],
    NextToken: [],
  });
};

const serializeAws_json1_1GetCrawlerRequest = (input: GetCrawlerRequest, context: __SerdeContext): any => {
  return take(input, {
    Name: [],
  });
};

const serializeAws_json1_1GetCrawlersRequest = (input: GetCrawlersRequest, context: __SerdeContext): any => {
  return take(input, {
    MaxResults: [],
    NextToken: [],
  });
};

const serializeAws_json1_1GetCustomEntityTypeRequest = (
  input: GetCustomEntityTypeRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    Name: [],
  });
};

const serializeAws_json1_1GetDatabaseRequest = (input: GetDatabaseRequest, context: __SerdeContext): any => {
  return take(input, {
    CatalogId: [],
    Name: [],
  });
};

const serializeAws_json1_1GetDatabasesRequest = (input: GetDatabasesRequest, context: __SerdeContext): any => {
  return take(input, {
    CatalogId: [],
    MaxResults: [],
    NextToken: [],
    ResourceShareType: [],
  });
};

const serializeAws_json1_1GetDataCatalogEncryptionSettingsRequest = (
  input: GetDataCatalogEncryptionSettingsRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    CatalogId: [],
  });
};

const serializeAws_json1_1GetDataflowGraphRequest = (input: GetDataflowGraphRequest, context: __SerdeContext): any => {
  return take(input, {
    PythonScript: [],
  });
};

const serializeAws_json1_1GetDataQualityResultRequest = (
  input: GetDataQualityResultRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    ResultId: [],
  });
};

const serializeAws_json1_1GetDataQualityRuleRecommendationRunRequest = (
  input: GetDataQualityRuleRecommendationRunRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    RunId: [],
  });
};

const serializeAws_json1_1GetDataQualityRulesetEvaluationRunRequest = (
  input: GetDataQualityRulesetEvaluationRunRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    RunId: [],
  });
};

const serializeAws_json1_1GetDataQualityRulesetRequest = (
  input: GetDataQualityRulesetRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    Name: [],
  });
};

const serializeAws_json1_1GetDevEndpointRequest = (input: GetDevEndpointRequest, context: __SerdeContext): any => {
  return take(input, {
    EndpointName: [],
  });
};

const serializeAws_json1_1GetDevEndpointsRequest = (input: GetDevEndpointsRequest, context: __SerdeContext): any => {
  return take(input, {
    MaxResults: [],
    NextToken: [],
  });
};

const serializeAws_json1_1GetJobBookmarkRequest = (input: GetJobBookmarkRequest, context: __SerdeContext): any => {
  return take(input, {
    JobName: [],
    RunId: [],
  });
};

const serializeAws_json1_1GetJobRequest = (input: GetJobRequest, context: __SerdeContext): any => {
  return take(input, {
    JobName: [],
  });
};

const serializeAws_json1_1GetJobRunRequest = (input: GetJobRunRequest, context: __SerdeContext): any => {
  return take(input, {
    JobName: [],
    PredecessorsIncluded: [],
    RunId: [],
  });
};

const serializeAws_json1_1GetJobRunsRequest = (input: GetJobRunsRequest, context: __SerdeContext): any => {
  return take(input, {
    JobName: [],
    MaxResults: [],
    NextToken: [],
  });
};

const serializeAws_json1_1GetJobsRequest = (input: GetJobsRequest, context: __SerdeContext): any => {
  return take(input, {
    MaxResults: [],
    NextToken: [],
  });
};

const serializeAws_json1_1GetMappingRequest = (input: GetMappingRequest, context: __SerdeContext): any => {
  return take(input, {
    Location: [, (_) => serializeAws_json1_1Location(_, context)],
    Sinks: [, (_) => serializeAws_json1_1CatalogEntries(_, context)],
    Source: [, (_) => serializeAws_json1_1CatalogEntry(_, context)],
  });
};

const serializeAws_json1_1GetMLTaskRunRequest = (input: GetMLTaskRunRequest, context: __SerdeContext): any => {
  return take(input, {
    TaskRunId: [],
    TransformId: [],
  });
};

const serializeAws_json1_1GetMLTaskRunsRequest = (input: GetMLTaskRunsRequest, context: __SerdeContext): any => {
  return take(input, {
    Filter: [, (_) => serializeAws_json1_1TaskRunFilterCriteria(_, context)],
    MaxResults: [],
    NextToken: [],
    Sort: [, (_) => serializeAws_json1_1TaskRunSortCriteria(_, context)],
    TransformId: [],
  });
};

const serializeAws_json1_1GetMLTransformRequest = (input: GetMLTransformRequest, context: __SerdeContext): any => {
  return take(input, {
    TransformId: [],
  });
};

const serializeAws_json1_1GetMLTransformsRequest = (input: GetMLTransformsRequest, context: __SerdeContext): any => {
  return take(input, {
    Filter: [, (_) => serializeAws_json1_1TransformFilterCriteria(_, context)],
    MaxResults: [],
    NextToken: [],
    Sort: [, (_) => serializeAws_json1_1TransformSortCriteria(_, context)],
  });
};

const serializeAws_json1_1GetPartitionIndexesRequest = (
  input: GetPartitionIndexesRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    CatalogId: [],
    DatabaseName: [],
    NextToken: [],
    TableName: [],
  });
};

const serializeAws_json1_1GetPartitionRequest = (input: GetPartitionRequest, context: __SerdeContext): any => {
  return take(input, {
    CatalogId: [],
    DatabaseName: [],
    PartitionValues: [, (_) => serializeAws_json1_1ValueStringList(_, context)],
    TableName: [],
  });
};

const serializeAws_json1_1GetPartitionsRequest = (input: GetPartitionsRequest, context: __SerdeContext): any => {
  return take(input, {
    CatalogId: [],
    DatabaseName: [],
    ExcludeColumnSchema: [],
    Expression: [],
    MaxResults: [],
    NextToken: [],
    QueryAsOfTime: [, (_) => Math.round(_.getTime() / 1000)],
    Segment: [, (_) => serializeAws_json1_1Segment(_, context)],
    TableName: [],
    TransactionId: [],
  });
};

const serializeAws_json1_1GetPlanRequest = (input: GetPlanRequest, context: __SerdeContext): any => {
  return take(input, {
    AdditionalPlanOptionsMap: [, (_) => serializeAws_json1_1AdditionalPlanOptionsMap(_, context)],
    Language: [],
    Location: [, (_) => serializeAws_json1_1Location(_, context)],
    Mapping: [, (_) => serializeAws_json1_1MappingList(_, context)],
    Sinks: [, (_) => serializeAws_json1_1CatalogEntries(_, context)],
    Source: [, (_) => serializeAws_json1_1CatalogEntry(_, context)],
  });
};

const serializeAws_json1_1GetRegistryInput = (input: GetRegistryInput, context: __SerdeContext): any => {
  return take(input, {
    RegistryId: [, (_) => serializeAws_json1_1RegistryId(_, context)],
  });
};

const serializeAws_json1_1GetResourcePoliciesRequest = (
  input: GetResourcePoliciesRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    MaxResults: [],
    NextToken: [],
  });
};

const serializeAws_json1_1GetResourcePolicyRequest = (
  input: GetResourcePolicyRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    ResourceArn: [],
  });
};

const serializeAws_json1_1GetSchemaByDefinitionInput = (
  input: GetSchemaByDefinitionInput,
  context: __SerdeContext
): any => {
  return take(input, {
    SchemaDefinition: [],
    SchemaId: [, (_) => serializeAws_json1_1SchemaId(_, context)],
  });
};

const serializeAws_json1_1GetSchemaInput = (input: GetSchemaInput, context: __SerdeContext): any => {
  return take(input, {
    SchemaId: [, (_) => serializeAws_json1_1SchemaId(_, context)],
  });
};

const serializeAws_json1_1GetSchemaVersionInput = (input: GetSchemaVersionInput, context: __SerdeContext): any => {
  return take(input, {
    SchemaId: [, (_) => serializeAws_json1_1SchemaId(_, context)],
    SchemaVersionId: [],
    SchemaVersionNumber: [, (_) => serializeAws_json1_1SchemaVersionNumber(_, context)],
  });
};

const serializeAws_json1_1GetSchemaVersionsDiffInput = (
  input: GetSchemaVersionsDiffInput,
  context: __SerdeContext
): any => {
  return take(input, {
    FirstSchemaVersionNumber: [, (_) => serializeAws_json1_1SchemaVersionNumber(_, context)],
    SchemaDiffType: [],
    SchemaId: [, (_) => serializeAws_json1_1SchemaId(_, context)],
    SecondSchemaVersionNumber: [, (_) => serializeAws_json1_1SchemaVersionNumber(_, context)],
  });
};

const serializeAws_json1_1GetSecurityConfigurationRequest = (
  input: GetSecurityConfigurationRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    Name: [],
  });
};

const serializeAws_json1_1GetSecurityConfigurationsRequest = (
  input: GetSecurityConfigurationsRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    MaxResults: [],
    NextToken: [],
  });
};

const serializeAws_json1_1GetSessionRequest = (input: GetSessionRequest, context: __SerdeContext): any => {
  return take(input, {
    Id: [],
    RequestOrigin: [],
  });
};

const serializeAws_json1_1GetStatementRequest = (input: GetStatementRequest, context: __SerdeContext): any => {
  return take(input, {
    Id: [],
    RequestOrigin: [],
    SessionId: [],
  });
};

const serializeAws_json1_1GetTableRequest = (input: GetTableRequest, context: __SerdeContext): any => {
  return take(input, {
    CatalogId: [],
    DatabaseName: [],
    Name: [],
    QueryAsOfTime: [, (_) => Math.round(_.getTime() / 1000)],
    TransactionId: [],
  });
};

const serializeAws_json1_1GetTablesRequest = (input: GetTablesRequest, context: __SerdeContext): any => {
  return take(input, {
    CatalogId: [],
    DatabaseName: [],
    Expression: [],
    MaxResults: [],
    NextToken: [],
    QueryAsOfTime: [, (_) => Math.round(_.getTime() / 1000)],
    TransactionId: [],
  });
};

const serializeAws_json1_1GetTableVersionRequest = (input: GetTableVersionRequest, context: __SerdeContext): any => {
  return take(input, {
    CatalogId: [],
    DatabaseName: [],
    TableName: [],
    VersionId: [],
  });
};

const serializeAws_json1_1GetTableVersionsRequest = (input: GetTableVersionsRequest, context: __SerdeContext): any => {
  return take(input, {
    CatalogId: [],
    DatabaseName: [],
    MaxResults: [],
    NextToken: [],
    TableName: [],
  });
};

const serializeAws_json1_1GetTagsRequest = (input: GetTagsRequest, context: __SerdeContext): any => {
  return take(input, {
    ResourceArn: [],
  });
};

const serializeAws_json1_1GetTriggerRequest = (input: GetTriggerRequest, context: __SerdeContext): any => {
  return take(input, {
    Name: [],
  });
};

const serializeAws_json1_1GetTriggersRequest = (input: GetTriggersRequest, context: __SerdeContext): any => {
  return take(input, {
    DependentJobName: [],
    MaxResults: [],
    NextToken: [],
  });
};

const serializeAws_json1_1GetUnfilteredPartitionMetadataRequest = (
  input: GetUnfilteredPartitionMetadataRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    AuditContext: [, (_) => serializeAws_json1_1AuditContext(_, context)],
    CatalogId: [],
    DatabaseName: [],
    PartitionValues: [, (_) => serializeAws_json1_1ValueStringList(_, context)],
    SupportedPermissionTypes: [, (_) => serializeAws_json1_1PermissionTypeList(_, context)],
    TableName: [],
  });
};

const serializeAws_json1_1GetUnfilteredPartitionsMetadataRequest = (
  input: GetUnfilteredPartitionsMetadataRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    AuditContext: [, (_) => serializeAws_json1_1AuditContext(_, context)],
    CatalogId: [],
    DatabaseName: [],
    Expression: [],
    MaxResults: [],
    NextToken: [],
    Segment: [, (_) => serializeAws_json1_1Segment(_, context)],
    SupportedPermissionTypes: [, (_) => serializeAws_json1_1PermissionTypeList(_, context)],
    TableName: [],
  });
};

const serializeAws_json1_1GetUnfilteredTableMetadataRequest = (
  input: GetUnfilteredTableMetadataRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    AuditContext: [, (_) => serializeAws_json1_1AuditContext(_, context)],
    CatalogId: [],
    DatabaseName: [],
    Name: [],
    SupportedPermissionTypes: [, (_) => serializeAws_json1_1PermissionTypeList(_, context)],
  });
};

const serializeAws_json1_1GetUserDefinedFunctionRequest = (
  input: GetUserDefinedFunctionRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    CatalogId: [],
    DatabaseName: [],
    FunctionName: [],
  });
};

const serializeAws_json1_1GetUserDefinedFunctionsRequest = (
  input: GetUserDefinedFunctionsRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    CatalogId: [],
    DatabaseName: [],
    MaxResults: [],
    NextToken: [],
    Pattern: [],
  });
};

const serializeAws_json1_1GetWorkflowRequest = (input: GetWorkflowRequest, context: __SerdeContext): any => {
  return take(input, {
    IncludeGraph: [],
    Name: [],
  });
};

const serializeAws_json1_1GetWorkflowRunPropertiesRequest = (
  input: GetWorkflowRunPropertiesRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    Name: [],
    RunId: [],
  });
};

const serializeAws_json1_1GetWorkflowRunRequest = (input: GetWorkflowRunRequest, context: __SerdeContext): any => {
  return take(input, {
    IncludeGraph: [],
    Name: [],
    RunId: [],
  });
};

const serializeAws_json1_1GetWorkflowRunsRequest = (input: GetWorkflowRunsRequest, context: __SerdeContext): any => {
  return take(input, {
    IncludeGraph: [],
    MaxResults: [],
    Name: [],
    NextToken: [],
  });
};

const serializeAws_json1_1GlueSchema = (input: GlueSchema, context: __SerdeContext): any => {
  return take(input, {
    Columns: [, (_) => serializeAws_json1_1GlueStudioSchemaColumnList(_, context)],
  });
};

const serializeAws_json1_1GlueSchemas = (input: GlueSchema[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1GlueSchema(entry, context);
    });
};

const serializeAws_json1_1GlueStudioPathList = (input: string[][], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1EnclosedInStringProperties(entry, context);
    });
};

const serializeAws_json1_1GlueStudioSchemaColumn = (input: GlueStudioSchemaColumn, context: __SerdeContext): any => {
  return take(input, {
    Name: [],
    Type: [],
  });
};

const serializeAws_json1_1GlueStudioSchemaColumnList = (
  input: GlueStudioSchemaColumn[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1GlueStudioSchemaColumn(entry, context);
    });
};

const serializeAws_json1_1GlueTable = (input: GlueTable, context: __SerdeContext): any => {
  return take(input, {
    AdditionalOptions: [, (_) => serializeAws_json1_1GlueTableAdditionalOptions(_, context)],
    CatalogId: [],
    ConnectionName: [],
    DatabaseName: [],
    TableName: [],
  });
};

const serializeAws_json1_1GlueTableAdditionalOptions = (
  input: Record<string, string>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_1GlueTables = (input: GlueTable[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1GlueTable(entry, context);
    });
};

const serializeAws_json1_1GovernedCatalogSource = (input: GovernedCatalogSource, context: __SerdeContext): any => {
  return take(input, {
    AdditionalOptions: [, (_) => serializeAws_json1_1S3SourceAdditionalOptions(_, context)],
    Database: [],
    Name: [],
    PartitionPredicate: [],
    Table: [],
  });
};

const serializeAws_json1_1GovernedCatalogTarget = (input: GovernedCatalogTarget, context: __SerdeContext): any => {
  return take(input, {
    Database: [],
    Inputs: [, (_) => serializeAws_json1_1OneInput(_, context)],
    Name: [],
    PartitionKeys: [, (_) => serializeAws_json1_1GlueStudioPathList(_, context)],
    SchemaChangePolicy: [, (_) => serializeAws_json1_1CatalogSchemaChangePolicy(_, context)],
    Table: [],
  });
};

const serializeAws_json1_1ImportCatalogToGlueRequest = (
  input: ImportCatalogToGlueRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    CatalogId: [],
  });
};

const serializeAws_json1_1JDBCConnectorOptions = (input: JDBCConnectorOptions, context: __SerdeContext): any => {
  return take(input, {
    DataTypeMapping: [, (_) => serializeAws_json1_1JDBCDataTypeMapping(_, context)],
    FilterPredicate: [],
    JobBookmarkKeys: [, (_) => serializeAws_json1_1EnclosedInStringProperties(_, context)],
    JobBookmarkKeysSortOrder: [],
    LowerBound: [],
    NumPartitions: [],
    PartitionColumn: [],
    UpperBound: [],
  });
};

const serializeAws_json1_1JDBCConnectorSource = (input: JDBCConnectorSource, context: __SerdeContext): any => {
  return take(input, {
    AdditionalOptions: [, (_) => serializeAws_json1_1JDBCConnectorOptions(_, context)],
    ConnectionName: [],
    ConnectionTable: [],
    ConnectionType: [],
    ConnectorName: [],
    Name: [],
    OutputSchemas: [, (_) => serializeAws_json1_1GlueSchemas(_, context)],
    Query: [],
  });
};

const serializeAws_json1_1JDBCConnectorTarget = (input: JDBCConnectorTarget, context: __SerdeContext): any => {
  return take(input, {
    AdditionalOptions: [, (_) => serializeAws_json1_1AdditionalOptions(_, context)],
    ConnectionName: [],
    ConnectionTable: [],
    ConnectionType: [],
    ConnectorName: [],
    Inputs: [, (_) => serializeAws_json1_1OneInput(_, context)],
    Name: [],
    OutputSchemas: [, (_) => serializeAws_json1_1GlueSchemas(_, context)],
  });
};

const serializeAws_json1_1JDBCDataTypeMapping = (
  input: Record<string, GlueRecordType | string>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [JDBCDataType | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_1JdbcTarget = (input: JdbcTarget, context: __SerdeContext): any => {
  return take(input, {
    ConnectionName: [],
    EnableAdditionalMetadata: [, (_) => serializeAws_json1_1EnableAdditionalMetadata(_, context)],
    Exclusions: [, (_) => serializeAws_json1_1PathList(_, context)],
    Path: [],
  });
};

const serializeAws_json1_1JdbcTargetList = (input: JdbcTarget[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1JdbcTarget(entry, context);
    });
};

const serializeAws_json1_1JobBookmarksEncryption = (input: JobBookmarksEncryption, context: __SerdeContext): any => {
  return take(input, {
    JobBookmarksEncryptionMode: [],
    KmsKeyArn: [],
  });
};

const serializeAws_json1_1JobCommand = (input: JobCommand, context: __SerdeContext): any => {
  return take(input, {
    Name: [],
    PythonVersion: [],
    ScriptLocation: [],
  });
};

const serializeAws_json1_1JobNameList = (input: string[], context: __SerdeContext): any => {
  return input.filter((e: any) => e != null);
};

const serializeAws_json1_1JobUpdate = (input: JobUpdate, context: __SerdeContext): any => {
  return take(input, {
    AllocatedCapacity: [],
    CodeGenConfigurationNodes: [, (_) => serializeAws_json1_1CodeGenConfigurationNodes(_, context)],
    Command: [, (_) => serializeAws_json1_1JobCommand(_, context)],
    Connections: [, (_) => serializeAws_json1_1ConnectionsList(_, context)],
    DefaultArguments: [, (_) => serializeAws_json1_1GenericMap(_, context)],
    Description: [],
    ExecutionClass: [],
    ExecutionProperty: [, (_) => serializeAws_json1_1ExecutionProperty(_, context)],
    GlueVersion: [],
    LogUri: [],
    MaxCapacity: [, (_) => __serializeFloat(_)],
    MaxRetries: [],
    NonOverridableArguments: [, (_) => serializeAws_json1_1GenericMap(_, context)],
    NotificationProperty: [, (_) => serializeAws_json1_1NotificationProperty(_, context)],
    NumberOfWorkers: [],
    Role: [],
    SecurityConfiguration: [],
    SourceControlDetails: [, (_) => serializeAws_json1_1SourceControlDetails(_, context)],
    Timeout: [],
    WorkerType: [],
  });
};

const serializeAws_json1_1Join = (input: Join, context: __SerdeContext): any => {
  return take(input, {
    Columns: [, (_) => serializeAws_json1_1JoinColumns(_, context)],
    Inputs: [, (_) => serializeAws_json1_1TwoInputs(_, context)],
    JoinType: [],
    Name: [],
  });
};

const serializeAws_json1_1JoinColumn = (input: JoinColumn, context: __SerdeContext): any => {
  return take(input, {
    From: [],
    Keys: [, (_) => serializeAws_json1_1GlueStudioPathList(_, context)],
  });
};

const serializeAws_json1_1JoinColumns = (input: JoinColumn[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1JoinColumn(entry, context);
    });
};

const serializeAws_json1_1KafkaStreamingSourceOptions = (
  input: KafkaStreamingSourceOptions,
  context: __SerdeContext
): any => {
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
    SubscribePattern: [],
    TopicName: [],
  });
};

const serializeAws_json1_1KeyList = (input: string[], context: __SerdeContext): any => {
  return input.filter((e: any) => e != null);
};

const serializeAws_json1_1KinesisStreamingSourceOptions = (
  input: KinesisStreamingSourceOptions,
  context: __SerdeContext
): any => {
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
    StreamArn: [],
    StreamName: [],
  });
};

const serializeAws_json1_1LakeFormationConfiguration = (
  input: LakeFormationConfiguration,
  context: __SerdeContext
): any => {
  return take(input, {
    AccountId: [],
    UseLakeFormationCredentials: [],
  });
};

const serializeAws_json1_1LimitedPathList = (input: string[][], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1LimitedStringList(entry, context);
    });
};

const serializeAws_json1_1LimitedStringList = (input: string[], context: __SerdeContext): any => {
  return input.filter((e: any) => e != null);
};

const serializeAws_json1_1LineageConfiguration = (input: LineageConfiguration, context: __SerdeContext): any => {
  return take(input, {
    CrawlerLineageSettings: [],
  });
};

const serializeAws_json1_1ListBlueprintsRequest = (input: ListBlueprintsRequest, context: __SerdeContext): any => {
  return take(input, {
    MaxResults: [],
    NextToken: [],
    Tags: [, (_) => serializeAws_json1_1TagsMap(_, context)],
  });
};

const serializeAws_json1_1ListCrawlersRequest = (input: ListCrawlersRequest, context: __SerdeContext): any => {
  return take(input, {
    MaxResults: [],
    NextToken: [],
    Tags: [, (_) => serializeAws_json1_1TagsMap(_, context)],
  });
};

const serializeAws_json1_1ListCrawlsRequest = (input: ListCrawlsRequest, context: __SerdeContext): any => {
  return take(input, {
    CrawlerName: [],
    Filters: [, (_) => serializeAws_json1_1CrawlsFilterList(_, context)],
    MaxResults: [],
    NextToken: [],
  });
};

const serializeAws_json1_1ListCustomEntityTypesRequest = (
  input: ListCustomEntityTypesRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    MaxResults: [],
    NextToken: [],
  });
};

const serializeAws_json1_1ListDataQualityResultsRequest = (
  input: ListDataQualityResultsRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    Filter: [, (_) => serializeAws_json1_1DataQualityResultFilterCriteria(_, context)],
    MaxResults: [],
    NextToken: [],
  });
};

const serializeAws_json1_1ListDataQualityRuleRecommendationRunsRequest = (
  input: ListDataQualityRuleRecommendationRunsRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    Filter: [, (_) => serializeAws_json1_1DataQualityRuleRecommendationRunFilter(_, context)],
    MaxResults: [],
    NextToken: [],
  });
};

const serializeAws_json1_1ListDataQualityRulesetEvaluationRunsRequest = (
  input: ListDataQualityRulesetEvaluationRunsRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    Filter: [, (_) => serializeAws_json1_1DataQualityRulesetEvaluationRunFilter(_, context)],
    MaxResults: [],
    NextToken: [],
  });
};

const serializeAws_json1_1ListDataQualityRulesetsRequest = (
  input: ListDataQualityRulesetsRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    Filter: [, (_) => serializeAws_json1_1DataQualityRulesetFilterCriteria(_, context)],
    MaxResults: [],
    NextToken: [],
    Tags: [, (_) => serializeAws_json1_1TagsMap(_, context)],
  });
};

const serializeAws_json1_1ListDevEndpointsRequest = (input: ListDevEndpointsRequest, context: __SerdeContext): any => {
  return take(input, {
    MaxResults: [],
    NextToken: [],
    Tags: [, (_) => serializeAws_json1_1TagsMap(_, context)],
  });
};

const serializeAws_json1_1ListJobsRequest = (input: ListJobsRequest, context: __SerdeContext): any => {
  return take(input, {
    MaxResults: [],
    NextToken: [],
    Tags: [, (_) => serializeAws_json1_1TagsMap(_, context)],
  });
};

const serializeAws_json1_1ListMLTransformsRequest = (input: ListMLTransformsRequest, context: __SerdeContext): any => {
  return take(input, {
    Filter: [, (_) => serializeAws_json1_1TransformFilterCriteria(_, context)],
    MaxResults: [],
    NextToken: [],
    Sort: [, (_) => serializeAws_json1_1TransformSortCriteria(_, context)],
    Tags: [, (_) => serializeAws_json1_1TagsMap(_, context)],
  });
};

const serializeAws_json1_1ListRegistriesInput = (input: ListRegistriesInput, context: __SerdeContext): any => {
  return take(input, {
    MaxResults: [],
    NextToken: [],
  });
};

const serializeAws_json1_1ListSchemasInput = (input: ListSchemasInput, context: __SerdeContext): any => {
  return take(input, {
    MaxResults: [],
    NextToken: [],
    RegistryId: [, (_) => serializeAws_json1_1RegistryId(_, context)],
  });
};

const serializeAws_json1_1ListSchemaVersionsInput = (input: ListSchemaVersionsInput, context: __SerdeContext): any => {
  return take(input, {
    MaxResults: [],
    NextToken: [],
    SchemaId: [, (_) => serializeAws_json1_1SchemaId(_, context)],
  });
};

const serializeAws_json1_1ListSessionsRequest = (input: ListSessionsRequest, context: __SerdeContext): any => {
  return take(input, {
    MaxResults: [],
    NextToken: [],
    RequestOrigin: [],
    Tags: [, (_) => serializeAws_json1_1TagsMap(_, context)],
  });
};

const serializeAws_json1_1ListStatementsRequest = (input: ListStatementsRequest, context: __SerdeContext): any => {
  return take(input, {
    NextToken: [],
    RequestOrigin: [],
    SessionId: [],
  });
};

const serializeAws_json1_1ListTriggersRequest = (input: ListTriggersRequest, context: __SerdeContext): any => {
  return take(input, {
    DependentJobName: [],
    MaxResults: [],
    NextToken: [],
    Tags: [, (_) => serializeAws_json1_1TagsMap(_, context)],
  });
};

const serializeAws_json1_1ListWorkflowsRequest = (input: ListWorkflowsRequest, context: __SerdeContext): any => {
  return take(input, {
    MaxResults: [],
    NextToken: [],
  });
};

const serializeAws_json1_1Location = (input: Location, context: __SerdeContext): any => {
  return take(input, {
    DynamoDB: [, (_) => serializeAws_json1_1CodeGenNodeArgs(_, context)],
    Jdbc: [, (_) => serializeAws_json1_1CodeGenNodeArgs(_, context)],
    S3: [, (_) => serializeAws_json1_1CodeGenNodeArgs(_, context)],
  });
};

const serializeAws_json1_1LocationMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_1LocationStringList = (input: string[], context: __SerdeContext): any => {
  return input.filter((e: any) => e != null);
};

const serializeAws_json1_1LongColumnStatisticsData = (
  input: LongColumnStatisticsData,
  context: __SerdeContext
): any => {
  return take(input, {
    MaximumValue: [],
    MinimumValue: [],
    NumberOfDistinctValues: [],
    NumberOfNulls: [],
  });
};

const serializeAws_json1_1ManyInputs = (input: string[], context: __SerdeContext): any => {
  return input.filter((e: any) => e != null);
};

const serializeAws_json1_1Mapping = (input: Mapping, context: __SerdeContext): any => {
  return take(input, {
    Children: [, (_) => serializeAws_json1_1Mappings(_, context)],
    Dropped: [],
    FromPath: [, (_) => serializeAws_json1_1EnclosedInStringProperties(_, context)],
    FromType: [],
    ToKey: [],
    ToType: [],
  });
};

const serializeAws_json1_1MappingEntry = (input: MappingEntry, context: __SerdeContext): any => {
  return take(input, {
    SourcePath: [],
    SourceTable: [],
    SourceType: [],
    TargetPath: [],
    TargetTable: [],
    TargetType: [],
  });
};

const serializeAws_json1_1MappingList = (input: MappingEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1MappingEntry(entry, context);
    });
};

const serializeAws_json1_1Mappings = (input: Mapping[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Mapping(entry, context);
    });
};

const serializeAws_json1_1MapValue = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_1MatchCriteria = (input: string[], context: __SerdeContext): any => {
  return input.filter((e: any) => e != null);
};

const serializeAws_json1_1Merge = (input: Merge, context: __SerdeContext): any => {
  return take(input, {
    Inputs: [, (_) => serializeAws_json1_1TwoInputs(_, context)],
    Name: [],
    PrimaryKeys: [, (_) => serializeAws_json1_1GlueStudioPathList(_, context)],
    Source: [],
  });
};

const serializeAws_json1_1MetadataKeyValuePair = (input: MetadataKeyValuePair, context: __SerdeContext): any => {
  return take(input, {
    MetadataKey: [],
    MetadataValue: [],
  });
};

const serializeAws_json1_1MetadataList = (input: MetadataKeyValuePair[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1MetadataKeyValuePair(entry, context);
    });
};

const serializeAws_json1_1MicrosoftSQLServerCatalogSource = (
  input: MicrosoftSQLServerCatalogSource,
  context: __SerdeContext
): any => {
  return take(input, {
    Database: [],
    Name: [],
    Table: [],
  });
};

const serializeAws_json1_1MicrosoftSQLServerCatalogTarget = (
  input: MicrosoftSQLServerCatalogTarget,
  context: __SerdeContext
): any => {
  return take(input, {
    Database: [],
    Inputs: [, (_) => serializeAws_json1_1OneInput(_, context)],
    Name: [],
    Table: [],
  });
};

const serializeAws_json1_1MLUserDataEncryption = (input: MLUserDataEncryption, context: __SerdeContext): any => {
  return take(input, {
    KmsKeyId: [],
    MlUserDataEncryptionMode: [],
  });
};

const serializeAws_json1_1MongoDBTarget = (input: MongoDBTarget, context: __SerdeContext): any => {
  return take(input, {
    ConnectionName: [],
    Path: [],
    ScanAll: [],
  });
};

const serializeAws_json1_1MongoDBTargetList = (input: MongoDBTarget[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1MongoDBTarget(entry, context);
    });
};

const serializeAws_json1_1MySQLCatalogSource = (input: MySQLCatalogSource, context: __SerdeContext): any => {
  return take(input, {
    Database: [],
    Name: [],
    Table: [],
  });
};

const serializeAws_json1_1MySQLCatalogTarget = (input: MySQLCatalogTarget, context: __SerdeContext): any => {
  return take(input, {
    Database: [],
    Inputs: [, (_) => serializeAws_json1_1OneInput(_, context)],
    Name: [],
    Table: [],
  });
};

const serializeAws_json1_1NameStringList = (input: string[], context: __SerdeContext): any => {
  return input.filter((e: any) => e != null);
};

const serializeAws_json1_1NodeIdList = (input: string[], context: __SerdeContext): any => {
  return input.filter((e: any) => e != null);
};

const serializeAws_json1_1NotificationProperty = (input: NotificationProperty, context: __SerdeContext): any => {
  return take(input, {
    NotifyDelayAfter: [],
  });
};

const serializeAws_json1_1NullCheckBoxList = (input: NullCheckBoxList, context: __SerdeContext): any => {
  return take(input, {
    IsEmpty: [],
    IsNegOne: [],
    IsNullString: [],
  });
};

const serializeAws_json1_1NullValueField = (input: NullValueField, context: __SerdeContext): any => {
  return take(input, {
    Datatype: [, (_) => serializeAws_json1_1Datatype(_, context)],
    Value: [],
  });
};

const serializeAws_json1_1NullValueFields = (input: NullValueField[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1NullValueField(entry, context);
    });
};

const serializeAws_json1_1OneInput = (input: string[], context: __SerdeContext): any => {
  return input.filter((e: any) => e != null);
};

const serializeAws_json1_1OracleSQLCatalogSource = (input: OracleSQLCatalogSource, context: __SerdeContext): any => {
  return take(input, {
    Database: [],
    Name: [],
    Table: [],
  });
};

const serializeAws_json1_1OracleSQLCatalogTarget = (input: OracleSQLCatalogTarget, context: __SerdeContext): any => {
  return take(input, {
    Database: [],
    Inputs: [, (_) => serializeAws_json1_1OneInput(_, context)],
    Name: [],
    Table: [],
  });
};

const serializeAws_json1_1OrchestrationArgumentsMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_1OrchestrationStringList = (input: string[], context: __SerdeContext): any => {
  return input.filter((e: any) => e != null);
};

const serializeAws_json1_1Order = (input: Order, context: __SerdeContext): any => {
  return take(input, {
    Column: [],
    SortOrder: [],
  });
};

const serializeAws_json1_1OrderList = (input: Order[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Order(entry, context);
    });
};

const serializeAws_json1_1ParametersMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_1PartitionIndex = (input: PartitionIndex, context: __SerdeContext): any => {
  return take(input, {
    IndexName: [],
    Keys: [, (_) => serializeAws_json1_1KeyList(_, context)],
  });
};

const serializeAws_json1_1PartitionIndexList = (input: PartitionIndex[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1PartitionIndex(entry, context);
    });
};

const serializeAws_json1_1PartitionInput = (input: PartitionInput, context: __SerdeContext): any => {
  return take(input, {
    LastAccessTime: [, (_) => Math.round(_.getTime() / 1000)],
    LastAnalyzedTime: [, (_) => Math.round(_.getTime() / 1000)],
    Parameters: [, (_) => serializeAws_json1_1ParametersMap(_, context)],
    StorageDescriptor: [, (_) => serializeAws_json1_1StorageDescriptor(_, context)],
    Values: [, (_) => serializeAws_json1_1ValueStringList(_, context)],
  });
};

const serializeAws_json1_1PartitionInputList = (input: PartitionInput[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1PartitionInput(entry, context);
    });
};

const serializeAws_json1_1PartitionValueList = (input: PartitionValueList, context: __SerdeContext): any => {
  return take(input, {
    Values: [, (_) => serializeAws_json1_1ValueStringList(_, context)],
  });
};

const serializeAws_json1_1PathList = (input: string[], context: __SerdeContext): any => {
  return input.filter((e: any) => e != null);
};

const serializeAws_json1_1PermissionList = (input: (Permission | string)[], context: __SerdeContext): any => {
  return input.filter((e: any) => e != null);
};

const serializeAws_json1_1PermissionTypeList = (input: (PermissionType | string)[], context: __SerdeContext): any => {
  return input.filter((e: any) => e != null);
};

const serializeAws_json1_1PhysicalConnectionRequirements = (
  input: PhysicalConnectionRequirements,
  context: __SerdeContext
): any => {
  return take(input, {
    AvailabilityZone: [],
    SecurityGroupIdList: [, (_) => serializeAws_json1_1SecurityGroupIdList(_, context)],
    SubnetId: [],
  });
};

const serializeAws_json1_1PIIDetection = (input: PIIDetection, context: __SerdeContext): any => {
  return take(input, {
    EntityTypesToDetect: [, (_) => serializeAws_json1_1EnclosedInStringProperties(_, context)],
    Inputs: [, (_) => serializeAws_json1_1OneInput(_, context)],
    MaskValue: [],
    Name: [],
    OutputColumnName: [],
    PiiType: [],
    SampleFraction: [, (_) => __serializeFloat(_)],
    ThresholdFraction: [, (_) => __serializeFloat(_)],
  });
};

const serializeAws_json1_1PostgreSQLCatalogSource = (input: PostgreSQLCatalogSource, context: __SerdeContext): any => {
  return take(input, {
    Database: [],
    Name: [],
    Table: [],
  });
};

const serializeAws_json1_1PostgreSQLCatalogTarget = (input: PostgreSQLCatalogTarget, context: __SerdeContext): any => {
  return take(input, {
    Database: [],
    Inputs: [, (_) => serializeAws_json1_1OneInput(_, context)],
    Name: [],
    Table: [],
  });
};

const serializeAws_json1_1Predicate = (input: Predicate, context: __SerdeContext): any => {
  return take(input, {
    Conditions: [, (_) => serializeAws_json1_1ConditionList(_, context)],
    Logical: [],
  });
};

const serializeAws_json1_1PrincipalPermissions = (input: PrincipalPermissions, context: __SerdeContext): any => {
  return take(input, {
    Permissions: [, (_) => serializeAws_json1_1PermissionList(_, context)],
    Principal: [, (_) => serializeAws_json1_1DataLakePrincipal(_, context)],
  });
};

const serializeAws_json1_1PrincipalPermissionsList = (input: PrincipalPermissions[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1PrincipalPermissions(entry, context);
    });
};

const serializeAws_json1_1PropertyPredicate = (input: PropertyPredicate, context: __SerdeContext): any => {
  return take(input, {
    Comparator: [],
    Key: [],
    Value: [],
  });
};

const serializeAws_json1_1PublicKeysList = (input: string[], context: __SerdeContext): any => {
  return input.filter((e: any) => e != null);
};

const serializeAws_json1_1PutDataCatalogEncryptionSettingsRequest = (
  input: PutDataCatalogEncryptionSettingsRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    CatalogId: [],
    DataCatalogEncryptionSettings: [, (_) => serializeAws_json1_1DataCatalogEncryptionSettings(_, context)],
  });
};

const serializeAws_json1_1PutResourcePolicyRequest = (
  input: PutResourcePolicyRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    EnableHybrid: [],
    PolicyExistsCondition: [],
    PolicyHashCondition: [],
    PolicyInJson: [],
    ResourceArn: [],
  });
};

const serializeAws_json1_1PutSchemaVersionMetadataInput = (
  input: PutSchemaVersionMetadataInput,
  context: __SerdeContext
): any => {
  return take(input, {
    MetadataKeyValue: [, (_) => serializeAws_json1_1MetadataKeyValuePair(_, context)],
    SchemaId: [, (_) => serializeAws_json1_1SchemaId(_, context)],
    SchemaVersionId: [],
    SchemaVersionNumber: [, (_) => serializeAws_json1_1SchemaVersionNumber(_, context)],
  });
};

const serializeAws_json1_1PutWorkflowRunPropertiesRequest = (
  input: PutWorkflowRunPropertiesRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    Name: [],
    RunId: [],
    RunProperties: [, (_) => serializeAws_json1_1WorkflowRunProperties(_, context)],
  });
};

const serializeAws_json1_1QuerySchemaVersionMetadataInput = (
  input: QuerySchemaVersionMetadataInput,
  context: __SerdeContext
): any => {
  return take(input, {
    MaxResults: [],
    MetadataList: [, (_) => serializeAws_json1_1MetadataList(_, context)],
    NextToken: [],
    SchemaId: [, (_) => serializeAws_json1_1SchemaId(_, context)],
    SchemaVersionId: [],
    SchemaVersionNumber: [, (_) => serializeAws_json1_1SchemaVersionNumber(_, context)],
  });
};

const serializeAws_json1_1RecrawlPolicy = (input: RecrawlPolicy, context: __SerdeContext): any => {
  return take(input, {
    RecrawlBehavior: [],
  });
};

const serializeAws_json1_1RedshiftSource = (input: RedshiftSource, context: __SerdeContext): any => {
  return take(input, {
    Database: [],
    Name: [],
    RedshiftTmpDir: [],
    Table: [],
    TmpDirIAMRole: [],
  });
};

const serializeAws_json1_1RedshiftTarget = (input: RedshiftTarget, context: __SerdeContext): any => {
  return take(input, {
    Database: [],
    Inputs: [, (_) => serializeAws_json1_1OneInput(_, context)],
    Name: [],
    RedshiftTmpDir: [],
    Table: [],
    TmpDirIAMRole: [],
    UpsertRedshiftOptions: [, (_) => serializeAws_json1_1UpsertRedshiftTargetOptions(_, context)],
  });
};

const serializeAws_json1_1RegisterSchemaVersionInput = (
  input: RegisterSchemaVersionInput,
  context: __SerdeContext
): any => {
  return take(input, {
    SchemaDefinition: [],
    SchemaId: [, (_) => serializeAws_json1_1SchemaId(_, context)],
  });
};

const serializeAws_json1_1RegistryId = (input: RegistryId, context: __SerdeContext): any => {
  return take(input, {
    RegistryArn: [],
    RegistryName: [],
  });
};

const serializeAws_json1_1RelationalCatalogSource = (input: RelationalCatalogSource, context: __SerdeContext): any => {
  return take(input, {
    Database: [],
    Name: [],
    Table: [],
  });
};

const serializeAws_json1_1RemoveSchemaVersionMetadataInput = (
  input: RemoveSchemaVersionMetadataInput,
  context: __SerdeContext
): any => {
  return take(input, {
    MetadataKeyValue: [, (_) => serializeAws_json1_1MetadataKeyValuePair(_, context)],
    SchemaId: [, (_) => serializeAws_json1_1SchemaId(_, context)],
    SchemaVersionId: [],
    SchemaVersionNumber: [, (_) => serializeAws_json1_1SchemaVersionNumber(_, context)],
  });
};

const serializeAws_json1_1RenameField = (input: RenameField, context: __SerdeContext): any => {
  return take(input, {
    Inputs: [, (_) => serializeAws_json1_1OneInput(_, context)],
    Name: [],
    SourcePath: [, (_) => serializeAws_json1_1EnclosedInStringProperties(_, context)],
    TargetPath: [, (_) => serializeAws_json1_1EnclosedInStringProperties(_, context)],
  });
};

const serializeAws_json1_1ResetJobBookmarkRequest = (input: ResetJobBookmarkRequest, context: __SerdeContext): any => {
  return take(input, {
    JobName: [],
    RunId: [],
  });
};

const serializeAws_json1_1ResourceUri = (input: ResourceUri, context: __SerdeContext): any => {
  return take(input, {
    ResourceType: [],
    Uri: [],
  });
};

const serializeAws_json1_1ResourceUriList = (input: ResourceUri[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ResourceUri(entry, context);
    });
};

const serializeAws_json1_1ResumeWorkflowRunRequest = (
  input: ResumeWorkflowRunRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    Name: [],
    NodeIds: [, (_) => serializeAws_json1_1NodeIdList(_, context)],
    RunId: [],
  });
};

const serializeAws_json1_1RulesetNames = (input: string[], context: __SerdeContext): any => {
  return input.filter((e: any) => e != null);
};

const serializeAws_json1_1RunStatementRequest = (input: RunStatementRequest, context: __SerdeContext): any => {
  return take(input, {
    Code: [],
    RequestOrigin: [],
    SessionId: [],
  });
};

const serializeAws_json1_1S3CatalogDeltaSource = (input: S3CatalogDeltaSource, context: __SerdeContext): any => {
  return take(input, {
    AdditionalDeltaOptions: [, (_) => serializeAws_json1_1AdditionalOptions(_, context)],
    Database: [],
    Name: [],
    OutputSchemas: [, (_) => serializeAws_json1_1GlueSchemas(_, context)],
    Table: [],
  });
};

const serializeAws_json1_1S3CatalogHudiSource = (input: S3CatalogHudiSource, context: __SerdeContext): any => {
  return take(input, {
    AdditionalHudiOptions: [, (_) => serializeAws_json1_1AdditionalOptions(_, context)],
    Database: [],
    Name: [],
    OutputSchemas: [, (_) => serializeAws_json1_1GlueSchemas(_, context)],
    Table: [],
  });
};

const serializeAws_json1_1S3CatalogSource = (input: S3CatalogSource, context: __SerdeContext): any => {
  return take(input, {
    AdditionalOptions: [, (_) => serializeAws_json1_1S3SourceAdditionalOptions(_, context)],
    Database: [],
    Name: [],
    PartitionPredicate: [],
    Table: [],
  });
};

const serializeAws_json1_1S3CatalogTarget = (input: S3CatalogTarget, context: __SerdeContext): any => {
  return take(input, {
    Database: [],
    Inputs: [, (_) => serializeAws_json1_1OneInput(_, context)],
    Name: [],
    PartitionKeys: [, (_) => serializeAws_json1_1GlueStudioPathList(_, context)],
    SchemaChangePolicy: [, (_) => serializeAws_json1_1CatalogSchemaChangePolicy(_, context)],
    Table: [],
  });
};

const serializeAws_json1_1S3CsvSource = (input: S3CsvSource, context: __SerdeContext): any => {
  return take(input, {
    AdditionalOptions: [, (_) => serializeAws_json1_1S3DirectSourceAdditionalOptions(_, context)],
    CompressionType: [],
    Escaper: [],
    Exclusions: [, (_) => serializeAws_json1_1EnclosedInStringProperties(_, context)],
    GroupFiles: [],
    GroupSize: [],
    MaxBand: [],
    MaxFilesInBand: [],
    Multiline: [],
    Name: [],
    OptimizePerformance: [],
    OutputSchemas: [, (_) => serializeAws_json1_1GlueSchemas(_, context)],
    Paths: [, (_) => serializeAws_json1_1EnclosedInStringProperties(_, context)],
    QuoteChar: [],
    Recurse: [],
    Separator: [],
    SkipFirst: [],
    WithHeader: [],
    WriteHeader: [],
  });
};

const serializeAws_json1_1S3DeltaCatalogTarget = (input: S3DeltaCatalogTarget, context: __SerdeContext): any => {
  return take(input, {
    AdditionalOptions: [, (_) => serializeAws_json1_1AdditionalOptions(_, context)],
    Database: [],
    Inputs: [, (_) => serializeAws_json1_1OneInput(_, context)],
    Name: [],
    PartitionKeys: [, (_) => serializeAws_json1_1GlueStudioPathList(_, context)],
    SchemaChangePolicy: [, (_) => serializeAws_json1_1CatalogSchemaChangePolicy(_, context)],
    Table: [],
  });
};

const serializeAws_json1_1S3DeltaDirectTarget = (input: S3DeltaDirectTarget, context: __SerdeContext): any => {
  return take(input, {
    AdditionalOptions: [, (_) => serializeAws_json1_1AdditionalOptions(_, context)],
    Compression: [],
    Format: [],
    Inputs: [, (_) => serializeAws_json1_1OneInput(_, context)],
    Name: [],
    PartitionKeys: [, (_) => serializeAws_json1_1GlueStudioPathList(_, context)],
    Path: [],
    SchemaChangePolicy: [, (_) => serializeAws_json1_1DirectSchemaChangePolicy(_, context)],
  });
};

const serializeAws_json1_1S3DeltaSource = (input: S3DeltaSource, context: __SerdeContext): any => {
  return take(input, {
    AdditionalDeltaOptions: [, (_) => serializeAws_json1_1AdditionalOptions(_, context)],
    AdditionalOptions: [, (_) => serializeAws_json1_1S3DirectSourceAdditionalOptions(_, context)],
    Name: [],
    OutputSchemas: [, (_) => serializeAws_json1_1GlueSchemas(_, context)],
    Paths: [, (_) => serializeAws_json1_1EnclosedInStringProperties(_, context)],
  });
};

const serializeAws_json1_1S3DirectSourceAdditionalOptions = (
  input: S3DirectSourceAdditionalOptions,
  context: __SerdeContext
): any => {
  return take(input, {
    BoundedFiles: [],
    BoundedSize: [],
    EnableSamplePath: [],
    SamplePath: [],
  });
};

const serializeAws_json1_1S3DirectTarget = (input: S3DirectTarget, context: __SerdeContext): any => {
  return take(input, {
    Compression: [],
    Format: [],
    Inputs: [, (_) => serializeAws_json1_1OneInput(_, context)],
    Name: [],
    PartitionKeys: [, (_) => serializeAws_json1_1GlueStudioPathList(_, context)],
    Path: [],
    SchemaChangePolicy: [, (_) => serializeAws_json1_1DirectSchemaChangePolicy(_, context)],
  });
};

const serializeAws_json1_1S3Encryption = (input: S3Encryption, context: __SerdeContext): any => {
  return take(input, {
    KmsKeyArn: [],
    S3EncryptionMode: [],
  });
};

const serializeAws_json1_1S3EncryptionList = (input: S3Encryption[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1S3Encryption(entry, context);
    });
};

const serializeAws_json1_1S3GlueParquetTarget = (input: S3GlueParquetTarget, context: __SerdeContext): any => {
  return take(input, {
    Compression: [],
    Inputs: [, (_) => serializeAws_json1_1OneInput(_, context)],
    Name: [],
    PartitionKeys: [, (_) => serializeAws_json1_1GlueStudioPathList(_, context)],
    Path: [],
    SchemaChangePolicy: [, (_) => serializeAws_json1_1DirectSchemaChangePolicy(_, context)],
  });
};

const serializeAws_json1_1S3HudiCatalogTarget = (input: S3HudiCatalogTarget, context: __SerdeContext): any => {
  return take(input, {
    AdditionalOptions: [, (_) => serializeAws_json1_1AdditionalOptions(_, context)],
    Database: [],
    Inputs: [, (_) => serializeAws_json1_1OneInput(_, context)],
    Name: [],
    PartitionKeys: [, (_) => serializeAws_json1_1GlueStudioPathList(_, context)],
    SchemaChangePolicy: [, (_) => serializeAws_json1_1CatalogSchemaChangePolicy(_, context)],
    Table: [],
  });
};

const serializeAws_json1_1S3HudiDirectTarget = (input: S3HudiDirectTarget, context: __SerdeContext): any => {
  return take(input, {
    AdditionalOptions: [, (_) => serializeAws_json1_1AdditionalOptions(_, context)],
    Compression: [],
    Format: [],
    Inputs: [, (_) => serializeAws_json1_1OneInput(_, context)],
    Name: [],
    PartitionKeys: [, (_) => serializeAws_json1_1GlueStudioPathList(_, context)],
    Path: [],
    SchemaChangePolicy: [, (_) => serializeAws_json1_1DirectSchemaChangePolicy(_, context)],
  });
};

const serializeAws_json1_1S3HudiSource = (input: S3HudiSource, context: __SerdeContext): any => {
  return take(input, {
    AdditionalHudiOptions: [, (_) => serializeAws_json1_1AdditionalOptions(_, context)],
    AdditionalOptions: [, (_) => serializeAws_json1_1S3DirectSourceAdditionalOptions(_, context)],
    Name: [],
    OutputSchemas: [, (_) => serializeAws_json1_1GlueSchemas(_, context)],
    Paths: [, (_) => serializeAws_json1_1EnclosedInStringProperties(_, context)],
  });
};

const serializeAws_json1_1S3JsonSource = (input: S3JsonSource, context: __SerdeContext): any => {
  return take(input, {
    AdditionalOptions: [, (_) => serializeAws_json1_1S3DirectSourceAdditionalOptions(_, context)],
    CompressionType: [],
    Exclusions: [, (_) => serializeAws_json1_1EnclosedInStringProperties(_, context)],
    GroupFiles: [],
    GroupSize: [],
    JsonPath: [],
    MaxBand: [],
    MaxFilesInBand: [],
    Multiline: [],
    Name: [],
    OutputSchemas: [, (_) => serializeAws_json1_1GlueSchemas(_, context)],
    Paths: [, (_) => serializeAws_json1_1EnclosedInStringProperties(_, context)],
    Recurse: [],
  });
};

const serializeAws_json1_1S3ParquetSource = (input: S3ParquetSource, context: __SerdeContext): any => {
  return take(input, {
    AdditionalOptions: [, (_) => serializeAws_json1_1S3DirectSourceAdditionalOptions(_, context)],
    CompressionType: [],
    Exclusions: [, (_) => serializeAws_json1_1EnclosedInStringProperties(_, context)],
    GroupFiles: [],
    GroupSize: [],
    MaxBand: [],
    MaxFilesInBand: [],
    Name: [],
    OutputSchemas: [, (_) => serializeAws_json1_1GlueSchemas(_, context)],
    Paths: [, (_) => serializeAws_json1_1EnclosedInStringProperties(_, context)],
    Recurse: [],
  });
};

const serializeAws_json1_1S3SourceAdditionalOptions = (
  input: S3SourceAdditionalOptions,
  context: __SerdeContext
): any => {
  return take(input, {
    BoundedFiles: [],
    BoundedSize: [],
  });
};

const serializeAws_json1_1S3Target = (input: S3Target, context: __SerdeContext): any => {
  return take(input, {
    ConnectionName: [],
    DlqEventQueueArn: [],
    EventQueueArn: [],
    Exclusions: [, (_) => serializeAws_json1_1PathList(_, context)],
    Path: [],
    SampleSize: [],
  });
};

const serializeAws_json1_1S3TargetList = (input: S3Target[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1S3Target(entry, context);
    });
};

const serializeAws_json1_1SchemaChangePolicy = (input: SchemaChangePolicy, context: __SerdeContext): any => {
  return take(input, {
    DeleteBehavior: [],
    UpdateBehavior: [],
  });
};

const serializeAws_json1_1SchemaColumn = (input: SchemaColumn, context: __SerdeContext): any => {
  return take(input, {
    DataType: [],
    Name: [],
  });
};

const serializeAws_json1_1SchemaId = (input: SchemaId, context: __SerdeContext): any => {
  return take(input, {
    RegistryName: [],
    SchemaArn: [],
    SchemaName: [],
  });
};

const serializeAws_json1_1SchemaReference = (input: SchemaReference, context: __SerdeContext): any => {
  return take(input, {
    SchemaId: [, (_) => serializeAws_json1_1SchemaId(_, context)],
    SchemaVersionId: [],
    SchemaVersionNumber: [],
  });
};

const serializeAws_json1_1SchemaVersionNumber = (input: SchemaVersionNumber, context: __SerdeContext): any => {
  return take(input, {
    LatestVersion: [],
    VersionNumber: [],
  });
};

const serializeAws_json1_1SearchPropertyPredicates = (input: PropertyPredicate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1PropertyPredicate(entry, context);
    });
};

const serializeAws_json1_1SearchTablesRequest = (input: SearchTablesRequest, context: __SerdeContext): any => {
  return take(input, {
    CatalogId: [],
    Filters: [, (_) => serializeAws_json1_1SearchPropertyPredicates(_, context)],
    MaxResults: [],
    NextToken: [],
    ResourceShareType: [],
    SearchText: [],
    SortCriteria: [, (_) => serializeAws_json1_1SortCriteria(_, context)],
  });
};

const serializeAws_json1_1SecurityGroupIdList = (input: string[], context: __SerdeContext): any => {
  return input.filter((e: any) => e != null);
};

const serializeAws_json1_1Segment = (input: Segment, context: __SerdeContext): any => {
  return take(input, {
    SegmentNumber: [],
    TotalSegments: [],
  });
};

const serializeAws_json1_1SelectFields = (input: SelectFields, context: __SerdeContext): any => {
  return take(input, {
    Inputs: [, (_) => serializeAws_json1_1OneInput(_, context)],
    Name: [],
    Paths: [, (_) => serializeAws_json1_1GlueStudioPathList(_, context)],
  });
};

const serializeAws_json1_1SelectFromCollection = (input: SelectFromCollection, context: __SerdeContext): any => {
  return take(input, {
    Index: [],
    Inputs: [, (_) => serializeAws_json1_1OneInput(_, context)],
    Name: [],
  });
};

const serializeAws_json1_1SerDeInfo = (input: SerDeInfo, context: __SerdeContext): any => {
  return take(input, {
    Name: [],
    Parameters: [, (_) => serializeAws_json1_1ParametersMap(_, context)],
    SerializationLibrary: [],
  });
};

const serializeAws_json1_1SessionCommand = (input: SessionCommand, context: __SerdeContext): any => {
  return take(input, {
    Name: [],
    PythonVersion: [],
  });
};

const serializeAws_json1_1SkewedInfo = (input: SkewedInfo, context: __SerdeContext): any => {
  return take(input, {
    SkewedColumnNames: [, (_) => serializeAws_json1_1NameStringList(_, context)],
    SkewedColumnValueLocationMaps: [, (_) => serializeAws_json1_1LocationMap(_, context)],
    SkewedColumnValues: [, (_) => serializeAws_json1_1ColumnValueStringList(_, context)],
  });
};

const serializeAws_json1_1SortCriteria = (input: SortCriterion[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1SortCriterion(entry, context);
    });
};

const serializeAws_json1_1SortCriterion = (input: SortCriterion, context: __SerdeContext): any => {
  return take(input, {
    FieldName: [],
    Sort: [],
  });
};

const serializeAws_json1_1SourceControlDetails = (input: SourceControlDetails, context: __SerdeContext): any => {
  return take(input, {
    AuthStrategy: [],
    AuthToken: [],
    Branch: [],
    Folder: [],
    LastCommitId: [],
    Owner: [],
    Provider: [],
    Repository: [],
  });
};

const serializeAws_json1_1SparkConnectorSource = (input: SparkConnectorSource, context: __SerdeContext): any => {
  return take(input, {
    AdditionalOptions: [, (_) => serializeAws_json1_1AdditionalOptions(_, context)],
    ConnectionName: [],
    ConnectionType: [],
    ConnectorName: [],
    Name: [],
    OutputSchemas: [, (_) => serializeAws_json1_1GlueSchemas(_, context)],
  });
};

const serializeAws_json1_1SparkConnectorTarget = (input: SparkConnectorTarget, context: __SerdeContext): any => {
  return take(input, {
    AdditionalOptions: [, (_) => serializeAws_json1_1AdditionalOptions(_, context)],
    ConnectionName: [],
    ConnectionType: [],
    ConnectorName: [],
    Inputs: [, (_) => serializeAws_json1_1OneInput(_, context)],
    Name: [],
    OutputSchemas: [, (_) => serializeAws_json1_1GlueSchemas(_, context)],
  });
};

const serializeAws_json1_1SparkSQL = (input: SparkSQL, context: __SerdeContext): any => {
  return take(input, {
    Inputs: [, (_) => serializeAws_json1_1ManyInputs(_, context)],
    Name: [],
    OutputSchemas: [, (_) => serializeAws_json1_1GlueSchemas(_, context)],
    SqlAliases: [, (_) => serializeAws_json1_1SqlAliases(_, context)],
    SqlQuery: [],
  });
};

const serializeAws_json1_1Spigot = (input: Spigot, context: __SerdeContext): any => {
  return take(input, {
    Inputs: [, (_) => serializeAws_json1_1OneInput(_, context)],
    Name: [],
    Path: [],
    Prob: [, (_) => __serializeFloat(_)],
    Topk: [],
  });
};

const serializeAws_json1_1SplitFields = (input: SplitFields, context: __SerdeContext): any => {
  return take(input, {
    Inputs: [, (_) => serializeAws_json1_1OneInput(_, context)],
    Name: [],
    Paths: [, (_) => serializeAws_json1_1GlueStudioPathList(_, context)],
  });
};

const serializeAws_json1_1SqlAlias = (input: SqlAlias, context: __SerdeContext): any => {
  return take(input, {
    Alias: [],
    From: [],
  });
};

const serializeAws_json1_1SqlAliases = (input: SqlAlias[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1SqlAlias(entry, context);
    });
};

const serializeAws_json1_1StartBlueprintRunRequest = (
  input: StartBlueprintRunRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    BlueprintName: [],
    Parameters: [],
    RoleArn: [],
  });
};

const serializeAws_json1_1StartCrawlerRequest = (input: StartCrawlerRequest, context: __SerdeContext): any => {
  return take(input, {
    Name: [],
  });
};

const serializeAws_json1_1StartCrawlerScheduleRequest = (
  input: StartCrawlerScheduleRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    CrawlerName: [],
  });
};

const serializeAws_json1_1StartDataQualityRuleRecommendationRunRequest = (
  input: StartDataQualityRuleRecommendationRunRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    ClientToken: [],
    CreatedRulesetName: [],
    DataSource: [, (_) => serializeAws_json1_1DataSource(_, context)],
    NumberOfWorkers: [],
    Role: [],
    Timeout: [],
  });
};

const serializeAws_json1_1StartDataQualityRulesetEvaluationRunRequest = (
  input: StartDataQualityRulesetEvaluationRunRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    AdditionalRunOptions: [, (_) => serializeAws_json1_1DataQualityEvaluationRunAdditionalRunOptions(_, context)],
    ClientToken: [],
    DataSource: [, (_) => serializeAws_json1_1DataSource(_, context)],
    NumberOfWorkers: [],
    Role: [],
    RulesetNames: [, (_) => serializeAws_json1_1RulesetNames(_, context)],
    Timeout: [],
  });
};

const serializeAws_json1_1StartExportLabelsTaskRunRequest = (
  input: StartExportLabelsTaskRunRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    OutputS3Path: [],
    TransformId: [],
  });
};

const serializeAws_json1_1StartImportLabelsTaskRunRequest = (
  input: StartImportLabelsTaskRunRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    InputS3Path: [],
    ReplaceAllLabels: [],
    TransformId: [],
  });
};

const serializeAws_json1_1StartJobRunRequest = (input: StartJobRunRequest, context: __SerdeContext): any => {
  return take(input, {
    AllocatedCapacity: [],
    Arguments: [, (_) => serializeAws_json1_1GenericMap(_, context)],
    ExecutionClass: [],
    JobName: [],
    JobRunId: [],
    MaxCapacity: [, (_) => __serializeFloat(_)],
    NotificationProperty: [, (_) => serializeAws_json1_1NotificationProperty(_, context)],
    NumberOfWorkers: [],
    SecurityConfiguration: [],
    Timeout: [],
    WorkerType: [],
  });
};

const serializeAws_json1_1StartMLEvaluationTaskRunRequest = (
  input: StartMLEvaluationTaskRunRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    TransformId: [],
  });
};

const serializeAws_json1_1StartMLLabelingSetGenerationTaskRunRequest = (
  input: StartMLLabelingSetGenerationTaskRunRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    OutputS3Path: [],
    TransformId: [],
  });
};

const serializeAws_json1_1StartTriggerRequest = (input: StartTriggerRequest, context: __SerdeContext): any => {
  return take(input, {
    Name: [],
  });
};

const serializeAws_json1_1StartWorkflowRunRequest = (input: StartWorkflowRunRequest, context: __SerdeContext): any => {
  return take(input, {
    Name: [],
    RunProperties: [, (_) => serializeAws_json1_1WorkflowRunProperties(_, context)],
  });
};

const serializeAws_json1_1StopCrawlerRequest = (input: StopCrawlerRequest, context: __SerdeContext): any => {
  return take(input, {
    Name: [],
  });
};

const serializeAws_json1_1StopCrawlerScheduleRequest = (
  input: StopCrawlerScheduleRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    CrawlerName: [],
  });
};

const serializeAws_json1_1StopSessionRequest = (input: StopSessionRequest, context: __SerdeContext): any => {
  return take(input, {
    Id: [],
    RequestOrigin: [],
  });
};

const serializeAws_json1_1StopTriggerRequest = (input: StopTriggerRequest, context: __SerdeContext): any => {
  return take(input, {
    Name: [],
  });
};

const serializeAws_json1_1StopWorkflowRunRequest = (input: StopWorkflowRunRequest, context: __SerdeContext): any => {
  return take(input, {
    Name: [],
    RunId: [],
  });
};

const serializeAws_json1_1StorageDescriptor = (input: StorageDescriptor, context: __SerdeContext): any => {
  return take(input, {
    AdditionalLocations: [, (_) => serializeAws_json1_1LocationStringList(_, context)],
    BucketColumns: [, (_) => serializeAws_json1_1NameStringList(_, context)],
    Columns: [, (_) => serializeAws_json1_1ColumnList(_, context)],
    Compressed: [],
    InputFormat: [],
    Location: [],
    NumberOfBuckets: [],
    OutputFormat: [],
    Parameters: [, (_) => serializeAws_json1_1ParametersMap(_, context)],
    SchemaReference: [, (_) => serializeAws_json1_1SchemaReference(_, context)],
    SerdeInfo: [, (_) => serializeAws_json1_1SerDeInfo(_, context)],
    SkewedInfo: [, (_) => serializeAws_json1_1SkewedInfo(_, context)],
    SortColumns: [, (_) => serializeAws_json1_1OrderList(_, context)],
    StoredAsSubDirectories: [],
  });
};

const serializeAws_json1_1StreamingDataPreviewOptions = (
  input: StreamingDataPreviewOptions,
  context: __SerdeContext
): any => {
  return take(input, {
    PollingTime: [],
    RecordPollingLimit: [],
  });
};

const serializeAws_json1_1StringColumnStatisticsData = (
  input: StringColumnStatisticsData,
  context: __SerdeContext
): any => {
  return take(input, {
    AverageLength: [, (_) => __serializeFloat(_)],
    MaximumLength: [],
    NumberOfDistinctValues: [],
    NumberOfNulls: [],
  });
};

const serializeAws_json1_1StringList = (input: string[], context: __SerdeContext): any => {
  return input.filter((e: any) => e != null);
};

const serializeAws_json1_1TableIdentifier = (input: TableIdentifier, context: __SerdeContext): any => {
  return take(input, {
    CatalogId: [],
    DatabaseName: [],
    Name: [],
  });
};

const serializeAws_json1_1TableInput = (input: TableInput, context: __SerdeContext): any => {
  return take(input, {
    Description: [],
    LastAccessTime: [, (_) => Math.round(_.getTime() / 1000)],
    LastAnalyzedTime: [, (_) => Math.round(_.getTime() / 1000)],
    Name: [],
    Owner: [],
    Parameters: [, (_) => serializeAws_json1_1ParametersMap(_, context)],
    PartitionKeys: [, (_) => serializeAws_json1_1ColumnList(_, context)],
    Retention: [],
    StorageDescriptor: [, (_) => serializeAws_json1_1StorageDescriptor(_, context)],
    TableType: [],
    TargetTable: [, (_) => serializeAws_json1_1TableIdentifier(_, context)],
    ViewExpandedText: [],
    ViewOriginalText: [],
  });
};

const serializeAws_json1_1TagKeysList = (input: string[], context: __SerdeContext): any => {
  return input.filter((e: any) => e != null);
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return take(input, {
    ResourceArn: [],
    TagsToAdd: [, (_) => serializeAws_json1_1TagsMap(_, context)],
  });
};

const serializeAws_json1_1TagsMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_1TaskRunFilterCriteria = (input: TaskRunFilterCriteria, context: __SerdeContext): any => {
  return take(input, {
    StartedAfter: [, (_) => Math.round(_.getTime() / 1000)],
    StartedBefore: [, (_) => Math.round(_.getTime() / 1000)],
    Status: [],
    TaskRunType: [],
  });
};

const serializeAws_json1_1TaskRunSortCriteria = (input: TaskRunSortCriteria, context: __SerdeContext): any => {
  return take(input, {
    Column: [],
    SortDirection: [],
  });
};

const serializeAws_json1_1TransformConfigParameter = (
  input: TransformConfigParameter,
  context: __SerdeContext
): any => {
  return take(input, {
    IsOptional: [],
    ListType: [],
    Name: [],
    Type: [],
    ValidationMessage: [],
    ValidationRule: [],
    Value: [, (_) => serializeAws_json1_1EnclosedInStringProperties(_, context)],
  });
};

const serializeAws_json1_1TransformConfigParameterList = (
  input: TransformConfigParameter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1TransformConfigParameter(entry, context);
    });
};

const serializeAws_json1_1TransformEncryption = (input: TransformEncryption, context: __SerdeContext): any => {
  return take(input, {
    MlUserDataEncryption: [, (_) => serializeAws_json1_1MLUserDataEncryption(_, context)],
    TaskRunSecurityConfigurationName: [],
  });
};

const serializeAws_json1_1TransformFilterCriteria = (input: TransformFilterCriteria, context: __SerdeContext): any => {
  return take(input, {
    CreatedAfter: [, (_) => Math.round(_.getTime() / 1000)],
    CreatedBefore: [, (_) => Math.round(_.getTime() / 1000)],
    GlueVersion: [],
    LastModifiedAfter: [, (_) => Math.round(_.getTime() / 1000)],
    LastModifiedBefore: [, (_) => Math.round(_.getTime() / 1000)],
    Name: [],
    Schema: [, (_) => serializeAws_json1_1TransformSchema(_, context)],
    Status: [],
    TransformType: [],
  });
};

const serializeAws_json1_1TransformParameters = (input: TransformParameters, context: __SerdeContext): any => {
  return take(input, {
    FindMatchesParameters: [, (_) => serializeAws_json1_1FindMatchesParameters(_, context)],
    TransformType: [],
  });
};

const serializeAws_json1_1TransformSchema = (input: SchemaColumn[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1SchemaColumn(entry, context);
    });
};

const serializeAws_json1_1TransformSortCriteria = (input: TransformSortCriteria, context: __SerdeContext): any => {
  return take(input, {
    Column: [],
    SortDirection: [],
  });
};

const serializeAws_json1_1TriggerNameList = (input: string[], context: __SerdeContext): any => {
  return input.filter((e: any) => e != null);
};

const serializeAws_json1_1TriggerUpdate = (input: TriggerUpdate, context: __SerdeContext): any => {
  return take(input, {
    Actions: [, (_) => serializeAws_json1_1ActionList(_, context)],
    Description: [],
    EventBatchingCondition: [, (_) => serializeAws_json1_1EventBatchingCondition(_, context)],
    Name: [],
    Predicate: [, (_) => serializeAws_json1_1Predicate(_, context)],
    Schedule: [],
  });
};

const serializeAws_json1_1TwoInputs = (input: string[], context: __SerdeContext): any => {
  return input.filter((e: any) => e != null);
};

const serializeAws_json1_1Union = (input: Union, context: __SerdeContext): any => {
  return take(input, {
    Inputs: [, (_) => serializeAws_json1_1TwoInputs(_, context)],
    Name: [],
    UnionType: [],
  });
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return take(input, {
    ResourceArn: [],
    TagsToRemove: [, (_) => serializeAws_json1_1TagKeysList(_, context)],
  });
};

const serializeAws_json1_1UpdateBlueprintRequest = (input: UpdateBlueprintRequest, context: __SerdeContext): any => {
  return take(input, {
    BlueprintLocation: [],
    Description: [],
    Name: [],
  });
};

const serializeAws_json1_1UpdateClassifierRequest = (input: UpdateClassifierRequest, context: __SerdeContext): any => {
  return take(input, {
    CsvClassifier: [, (_) => serializeAws_json1_1UpdateCsvClassifierRequest(_, context)],
    GrokClassifier: [, (_) => serializeAws_json1_1UpdateGrokClassifierRequest(_, context)],
    JsonClassifier: [, (_) => serializeAws_json1_1UpdateJsonClassifierRequest(_, context)],
    XMLClassifier: [, (_) => serializeAws_json1_1UpdateXMLClassifierRequest(_, context)],
  });
};

const serializeAws_json1_1UpdateColumnStatisticsForPartitionRequest = (
  input: UpdateColumnStatisticsForPartitionRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    CatalogId: [],
    ColumnStatisticsList: [, (_) => serializeAws_json1_1UpdateColumnStatisticsList(_, context)],
    DatabaseName: [],
    PartitionValues: [, (_) => serializeAws_json1_1ValueStringList(_, context)],
    TableName: [],
  });
};

const serializeAws_json1_1UpdateColumnStatisticsForTableRequest = (
  input: UpdateColumnStatisticsForTableRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    CatalogId: [],
    ColumnStatisticsList: [, (_) => serializeAws_json1_1UpdateColumnStatisticsList(_, context)],
    DatabaseName: [],
    TableName: [],
  });
};

const serializeAws_json1_1UpdateColumnStatisticsList = (input: ColumnStatistics[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ColumnStatistics(entry, context);
    });
};

const serializeAws_json1_1UpdateConnectionRequest = (input: UpdateConnectionRequest, context: __SerdeContext): any => {
  return take(input, {
    CatalogId: [],
    ConnectionInput: [, (_) => serializeAws_json1_1ConnectionInput(_, context)],
    Name: [],
  });
};

const serializeAws_json1_1UpdateCrawlerRequest = (input: UpdateCrawlerRequest, context: __SerdeContext): any => {
  return take(input, {
    Classifiers: [, (_) => serializeAws_json1_1ClassifierNameList(_, context)],
    Configuration: [],
    CrawlerSecurityConfiguration: [],
    DatabaseName: [],
    Description: [],
    LakeFormationConfiguration: [, (_) => serializeAws_json1_1LakeFormationConfiguration(_, context)],
    LineageConfiguration: [, (_) => serializeAws_json1_1LineageConfiguration(_, context)],
    Name: [],
    RecrawlPolicy: [, (_) => serializeAws_json1_1RecrawlPolicy(_, context)],
    Role: [],
    Schedule: [],
    SchemaChangePolicy: [, (_) => serializeAws_json1_1SchemaChangePolicy(_, context)],
    TablePrefix: [],
    Targets: [, (_) => serializeAws_json1_1CrawlerTargets(_, context)],
  });
};

const serializeAws_json1_1UpdateCrawlerScheduleRequest = (
  input: UpdateCrawlerScheduleRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    CrawlerName: [],
    Schedule: [],
  });
};

const serializeAws_json1_1UpdateCsvClassifierRequest = (
  input: UpdateCsvClassifierRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    AllowSingleColumn: [],
    ContainsHeader: [],
    CustomDatatypeConfigured: [],
    CustomDatatypes: [, (_) => serializeAws_json1_1CustomDatatypes(_, context)],
    Delimiter: [],
    DisableValueTrimming: [],
    Header: [, (_) => serializeAws_json1_1CsvHeader(_, context)],
    Name: [],
    QuoteSymbol: [],
  });
};

const serializeAws_json1_1UpdateDatabaseRequest = (input: UpdateDatabaseRequest, context: __SerdeContext): any => {
  return take(input, {
    CatalogId: [],
    DatabaseInput: [, (_) => serializeAws_json1_1DatabaseInput(_, context)],
    Name: [],
  });
};

const serializeAws_json1_1UpdateDataQualityRulesetRequest = (
  input: UpdateDataQualityRulesetRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    Description: [],
    Name: [],
    Ruleset: [],
  });
};

const serializeAws_json1_1UpdateDevEndpointRequest = (
  input: UpdateDevEndpointRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    AddArguments: [, (_) => serializeAws_json1_1MapValue(_, context)],
    AddPublicKeys: [, (_) => serializeAws_json1_1PublicKeysList(_, context)],
    CustomLibraries: [, (_) => serializeAws_json1_1DevEndpointCustomLibraries(_, context)],
    DeleteArguments: [, (_) => serializeAws_json1_1StringList(_, context)],
    DeletePublicKeys: [, (_) => serializeAws_json1_1PublicKeysList(_, context)],
    EndpointName: [],
    PublicKey: [],
    UpdateEtlLibraries: [],
  });
};

const serializeAws_json1_1UpdateGrokClassifierRequest = (
  input: UpdateGrokClassifierRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    Classification: [],
    CustomPatterns: [],
    GrokPattern: [],
    Name: [],
  });
};

const serializeAws_json1_1UpdateJobFromSourceControlRequest = (
  input: UpdateJobFromSourceControlRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    AuthStrategy: [],
    AuthToken: [],
    BranchName: [],
    CommitId: [],
    Folder: [],
    JobName: [],
    Provider: [],
    RepositoryName: [],
    RepositoryOwner: [],
  });
};

const serializeAws_json1_1UpdateJobRequest = (input: UpdateJobRequest, context: __SerdeContext): any => {
  return take(input, {
    JobName: [],
    JobUpdate: [, (_) => serializeAws_json1_1JobUpdate(_, context)],
  });
};

const serializeAws_json1_1UpdateJsonClassifierRequest = (
  input: UpdateJsonClassifierRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    JsonPath: [],
    Name: [],
  });
};

const serializeAws_json1_1UpdateMLTransformRequest = (
  input: UpdateMLTransformRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    Description: [],
    GlueVersion: [],
    MaxCapacity: [, (_) => __serializeFloat(_)],
    MaxRetries: [],
    Name: [],
    NumberOfWorkers: [],
    Parameters: [, (_) => serializeAws_json1_1TransformParameters(_, context)],
    Role: [],
    Timeout: [],
    TransformId: [],
    WorkerType: [],
  });
};

const serializeAws_json1_1UpdatePartitionRequest = (input: UpdatePartitionRequest, context: __SerdeContext): any => {
  return take(input, {
    CatalogId: [],
    DatabaseName: [],
    PartitionInput: [, (_) => serializeAws_json1_1PartitionInput(_, context)],
    PartitionValueList: [, (_) => serializeAws_json1_1BoundedPartitionValueList(_, context)],
    TableName: [],
  });
};

const serializeAws_json1_1UpdateRegistryInput = (input: UpdateRegistryInput, context: __SerdeContext): any => {
  return take(input, {
    Description: [],
    RegistryId: [, (_) => serializeAws_json1_1RegistryId(_, context)],
  });
};

const serializeAws_json1_1UpdateSchemaInput = (input: UpdateSchemaInput, context: __SerdeContext): any => {
  return take(input, {
    Compatibility: [],
    Description: [],
    SchemaId: [, (_) => serializeAws_json1_1SchemaId(_, context)],
    SchemaVersionNumber: [, (_) => serializeAws_json1_1SchemaVersionNumber(_, context)],
  });
};

const serializeAws_json1_1UpdateSourceControlFromJobRequest = (
  input: UpdateSourceControlFromJobRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    AuthStrategy: [],
    AuthToken: [],
    BranchName: [],
    CommitId: [],
    Folder: [],
    JobName: [],
    Provider: [],
    RepositoryName: [],
    RepositoryOwner: [],
  });
};

const serializeAws_json1_1UpdateTableRequest = (input: UpdateTableRequest, context: __SerdeContext): any => {
  return take(input, {
    CatalogId: [],
    DatabaseName: [],
    SkipArchive: [],
    TableInput: [, (_) => serializeAws_json1_1TableInput(_, context)],
    TransactionId: [],
    VersionId: [],
  });
};

const serializeAws_json1_1UpdateTriggerRequest = (input: UpdateTriggerRequest, context: __SerdeContext): any => {
  return take(input, {
    Name: [],
    TriggerUpdate: [, (_) => serializeAws_json1_1TriggerUpdate(_, context)],
  });
};

const serializeAws_json1_1UpdateUserDefinedFunctionRequest = (
  input: UpdateUserDefinedFunctionRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    CatalogId: [],
    DatabaseName: [],
    FunctionInput: [, (_) => serializeAws_json1_1UserDefinedFunctionInput(_, context)],
    FunctionName: [],
  });
};

const serializeAws_json1_1UpdateWorkflowRequest = (input: UpdateWorkflowRequest, context: __SerdeContext): any => {
  return take(input, {
    DefaultRunProperties: [, (_) => serializeAws_json1_1WorkflowRunProperties(_, context)],
    Description: [],
    MaxConcurrentRuns: [],
    Name: [],
  });
};

const serializeAws_json1_1UpdateXMLClassifierRequest = (
  input: UpdateXMLClassifierRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    Classification: [],
    Name: [],
    RowTag: [],
  });
};

const serializeAws_json1_1UpsertRedshiftTargetOptions = (
  input: UpsertRedshiftTargetOptions,
  context: __SerdeContext
): any => {
  return take(input, {
    ConnectionName: [],
    TableLocation: [],
    UpsertKeys: [, (_) => serializeAws_json1_1EnclosedInStringPropertiesMinOne(_, context)],
  });
};

const serializeAws_json1_1UserDefinedFunctionInput = (
  input: UserDefinedFunctionInput,
  context: __SerdeContext
): any => {
  return take(input, {
    ClassName: [],
    FunctionName: [],
    OwnerName: [],
    OwnerType: [],
    ResourceUris: [, (_) => serializeAws_json1_1ResourceUriList(_, context)],
  });
};

const serializeAws_json1_1ValueStringList = (input: string[], context: __SerdeContext): any => {
  return input.filter((e: any) => e != null);
};

const serializeAws_json1_1WorkflowNames = (input: string[], context: __SerdeContext): any => {
  return input.filter((e: any) => e != null);
};

const serializeAws_json1_1WorkflowRunProperties = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const deserializeAws_json1_1AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return take(output, {
    Message: __expectString,
  }) as any;
};

const deserializeAws_json1_1Action = (output: any, context: __SerdeContext): Action => {
  return take(output, {
    Arguments: [, (_) => deserializeAws_json1_1GenericMap(_, context)],
    CrawlerName: __expectString,
    JobName: __expectString,
    NotificationProperty: [, (_) => deserializeAws_json1_1NotificationProperty(_, context)],
    SecurityConfiguration: __expectString,
    Timeout: __expectInt32,
  }) as any;
};

const deserializeAws_json1_1ActionList = (output: any, context: __SerdeContext): Action[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1Action(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AdditionalOptions = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1Aggregate = (output: any, context: __SerdeContext): Aggregate => {
  return take(output, {
    Aggs: [, (_) => deserializeAws_json1_1AggregateOperations(_, context)],
    Groups: [, (_) => deserializeAws_json1_1GlueStudioPathList(_, context)],
    Inputs: [, (_) => deserializeAws_json1_1OneInput(_, context)],
    Name: __expectString,
  }) as any;
};

const deserializeAws_json1_1AggregateOperation = (output: any, context: __SerdeContext): AggregateOperation => {
  return take(output, {
    AggFunc: __expectString,
    Column: [, (_) => deserializeAws_json1_1EnclosedInStringProperties(_, context)],
  }) as any;
};

const deserializeAws_json1_1AggregateOperations = (output: any, context: __SerdeContext): AggregateOperation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1AggregateOperation(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AlreadyExistsException = (output: any, context: __SerdeContext): AlreadyExistsException => {
  return take(output, {
    Message: __expectString,
  }) as any;
};

const deserializeAws_json1_1ApplyMapping = (output: any, context: __SerdeContext): ApplyMapping => {
  return take(output, {
    Inputs: [, (_) => deserializeAws_json1_1OneInput(_, context)],
    Mapping: [, (_) => deserializeAws_json1_1Mappings(_, context)],
    Name: __expectString,
  }) as any;
};

const deserializeAws_json1_1AthenaConnectorSource = (output: any, context: __SerdeContext): AthenaConnectorSource => {
  return take(output, {
    ConnectionName: __expectString,
    ConnectionTable: __expectString,
    ConnectionType: __expectString,
    ConnectorName: __expectString,
    Name: __expectString,
    OutputSchemas: [, (_) => deserializeAws_json1_1GlueSchemas(_, context)],
    SchemaName: __expectString,
  }) as any;
};

const deserializeAws_json1_1BackfillError = (output: any, context: __SerdeContext): BackfillError => {
  return take(output, {
    Code: __expectString,
    Partitions: [, (_) => deserializeAws_json1_1BackfillErroredPartitionsList(_, context)],
  }) as any;
};

const deserializeAws_json1_1BackfillErroredPartitionsList = (
  output: any,
  context: __SerdeContext
): PartitionValueList[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1PartitionValueList(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1BackfillErrors = (output: any, context: __SerdeContext): BackfillError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1BackfillError(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1BasicCatalogTarget = (output: any, context: __SerdeContext): BasicCatalogTarget => {
  return take(output, {
    Database: __expectString,
    Inputs: [, (_) => deserializeAws_json1_1OneInput(_, context)],
    Name: __expectString,
    Table: __expectString,
  }) as any;
};

const deserializeAws_json1_1BatchCreatePartitionResponse = (
  output: any,
  context: __SerdeContext
): BatchCreatePartitionResponse => {
  return take(output, {
    Errors: [, (_) => deserializeAws_json1_1PartitionErrors(_, context)],
  }) as any;
};

const deserializeAws_json1_1BatchDeleteConnectionResponse = (
  output: any,
  context: __SerdeContext
): BatchDeleteConnectionResponse => {
  return take(output, {
    Errors: [, (_) => deserializeAws_json1_1ErrorByName(_, context)],
    Succeeded: [, (_) => deserializeAws_json1_1NameStringList(_, context)],
  }) as any;
};

const deserializeAws_json1_1BatchDeletePartitionResponse = (
  output: any,
  context: __SerdeContext
): BatchDeletePartitionResponse => {
  return take(output, {
    Errors: [, (_) => deserializeAws_json1_1PartitionErrors(_, context)],
  }) as any;
};

const deserializeAws_json1_1BatchDeleteTableResponse = (
  output: any,
  context: __SerdeContext
): BatchDeleteTableResponse => {
  return take(output, {
    Errors: [, (_) => deserializeAws_json1_1TableErrors(_, context)],
  }) as any;
};

const deserializeAws_json1_1BatchDeleteTableVersionResponse = (
  output: any,
  context: __SerdeContext
): BatchDeleteTableVersionResponse => {
  return take(output, {
    Errors: [, (_) => deserializeAws_json1_1TableVersionErrors(_, context)],
  }) as any;
};

const deserializeAws_json1_1BatchGetBlueprintsResponse = (
  output: any,
  context: __SerdeContext
): BatchGetBlueprintsResponse => {
  return take(output, {
    Blueprints: [, (_) => deserializeAws_json1_1Blueprints(_, context)],
    MissingBlueprints: [, (_) => deserializeAws_json1_1BlueprintNames(_, context)],
  }) as any;
};

const deserializeAws_json1_1BatchGetCrawlersResponse = (
  output: any,
  context: __SerdeContext
): BatchGetCrawlersResponse => {
  return take(output, {
    Crawlers: [, (_) => deserializeAws_json1_1CrawlerList(_, context)],
    CrawlersNotFound: [, (_) => deserializeAws_json1_1CrawlerNameList(_, context)],
  }) as any;
};

const deserializeAws_json1_1BatchGetCustomEntityTypesResponse = (
  output: any,
  context: __SerdeContext
): BatchGetCustomEntityTypesResponse => {
  return take(output, {
    CustomEntityTypes: [, (_) => deserializeAws_json1_1CustomEntityTypes(_, context)],
    CustomEntityTypesNotFound: [, (_) => deserializeAws_json1_1CustomEntityTypeNames(_, context)],
  }) as any;
};

const deserializeAws_json1_1BatchGetDataQualityResultResponse = (
  output: any,
  context: __SerdeContext
): BatchGetDataQualityResultResponse => {
  return take(output, {
    Results: [, (_) => deserializeAws_json1_1DataQualityResultsList(_, context)],
    ResultsNotFound: [, (_) => deserializeAws_json1_1DataQualityResultIds(_, context)],
  }) as any;
};

const deserializeAws_json1_1BatchGetDevEndpointsResponse = (
  output: any,
  context: __SerdeContext
): BatchGetDevEndpointsResponse => {
  return take(output, {
    DevEndpoints: [, (_) => deserializeAws_json1_1DevEndpointList(_, context)],
    DevEndpointsNotFound: [, (_) => deserializeAws_json1_1DevEndpointNames(_, context)],
  }) as any;
};

const deserializeAws_json1_1BatchGetJobsResponse = (output: any, context: __SerdeContext): BatchGetJobsResponse => {
  return take(output, {
    Jobs: [, (_) => deserializeAws_json1_1JobList(_, context)],
    JobsNotFound: [, (_) => deserializeAws_json1_1JobNameList(_, context)],
  }) as any;
};

const deserializeAws_json1_1BatchGetPartitionResponse = (
  output: any,
  context: __SerdeContext
): BatchGetPartitionResponse => {
  return take(output, {
    Partitions: [, (_) => deserializeAws_json1_1PartitionList(_, context)],
    UnprocessedKeys: [, (_) => deserializeAws_json1_1BatchGetPartitionValueList(_, context)],
  }) as any;
};

const deserializeAws_json1_1BatchGetPartitionValueList = (
  output: any,
  context: __SerdeContext
): PartitionValueList[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1PartitionValueList(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1BatchGetTriggersResponse = (
  output: any,
  context: __SerdeContext
): BatchGetTriggersResponse => {
  return take(output, {
    Triggers: [, (_) => deserializeAws_json1_1TriggerList(_, context)],
    TriggersNotFound: [, (_) => deserializeAws_json1_1TriggerNameList(_, context)],
  }) as any;
};

const deserializeAws_json1_1BatchGetWorkflowsResponse = (
  output: any,
  context: __SerdeContext
): BatchGetWorkflowsResponse => {
  return take(output, {
    MissingWorkflows: [, (_) => deserializeAws_json1_1WorkflowNames(_, context)],
    Workflows: [, (_) => deserializeAws_json1_1Workflows(_, context)],
  }) as any;
};

const deserializeAws_json1_1BatchStopJobRunError = (output: any, context: __SerdeContext): BatchStopJobRunError => {
  return take(output, {
    ErrorDetail: [, (_) => deserializeAws_json1_1ErrorDetail(_, context)],
    JobName: __expectString,
    JobRunId: __expectString,
  }) as any;
};

const deserializeAws_json1_1BatchStopJobRunErrorList = (
  output: any,
  context: __SerdeContext
): BatchStopJobRunError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1BatchStopJobRunError(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1BatchStopJobRunResponse = (
  output: any,
  context: __SerdeContext
): BatchStopJobRunResponse => {
  return take(output, {
    Errors: [, (_) => deserializeAws_json1_1BatchStopJobRunErrorList(_, context)],
    SuccessfulSubmissions: [, (_) => deserializeAws_json1_1BatchStopJobRunSuccessfulSubmissionList(_, context)],
  }) as any;
};

const deserializeAws_json1_1BatchStopJobRunSuccessfulSubmission = (
  output: any,
  context: __SerdeContext
): BatchStopJobRunSuccessfulSubmission => {
  return take(output, {
    JobName: __expectString,
    JobRunId: __expectString,
  }) as any;
};

const deserializeAws_json1_1BatchStopJobRunSuccessfulSubmissionList = (
  output: any,
  context: __SerdeContext
): BatchStopJobRunSuccessfulSubmission[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1BatchStopJobRunSuccessfulSubmission(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1BatchUpdatePartitionFailureEntry = (
  output: any,
  context: __SerdeContext
): BatchUpdatePartitionFailureEntry => {
  return take(output, {
    ErrorDetail: [, (_) => deserializeAws_json1_1ErrorDetail(_, context)],
    PartitionValueList: [, (_) => deserializeAws_json1_1BoundedPartitionValueList(_, context)],
  }) as any;
};

const deserializeAws_json1_1BatchUpdatePartitionFailureList = (
  output: any,
  context: __SerdeContext
): BatchUpdatePartitionFailureEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1BatchUpdatePartitionFailureEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1BatchUpdatePartitionResponse = (
  output: any,
  context: __SerdeContext
): BatchUpdatePartitionResponse => {
  return take(output, {
    Errors: [, (_) => deserializeAws_json1_1BatchUpdatePartitionFailureList(_, context)],
  }) as any;
};

const deserializeAws_json1_1BinaryColumnStatisticsData = (
  output: any,
  context: __SerdeContext
): BinaryColumnStatisticsData => {
  return take(output, {
    AverageLength: __limitedParseDouble,
    MaximumLength: __expectLong,
    NumberOfNulls: __expectLong,
  }) as any;
};

const deserializeAws_json1_1Blueprint = (output: any, context: __SerdeContext): Blueprint => {
  return take(output, {
    BlueprintLocation: __expectString,
    BlueprintServiceLocation: __expectString,
    CreatedOn: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    Description: __expectString,
    ErrorMessage: __expectString,
    LastActiveDefinition: [, (_) => deserializeAws_json1_1LastActiveDefinition(_, context)],
    LastModifiedOn: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    Name: __expectString,
    ParameterSpec: __expectString,
    Status: __expectString,
  }) as any;
};

const deserializeAws_json1_1BlueprintDetails = (output: any, context: __SerdeContext): BlueprintDetails => {
  return take(output, {
    BlueprintName: __expectString,
    RunId: __expectString,
  }) as any;
};

const deserializeAws_json1_1BlueprintNames = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1BlueprintRun = (output: any, context: __SerdeContext): BlueprintRun => {
  return take(output, {
    BlueprintName: __expectString,
    CompletedOn: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    ErrorMessage: __expectString,
    Parameters: __expectString,
    RoleArn: __expectString,
    RollbackErrorMessage: __expectString,
    RunId: __expectString,
    StartedOn: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    State: __expectString,
    WorkflowName: __expectString,
  }) as any;
};

const deserializeAws_json1_1BlueprintRuns = (output: any, context: __SerdeContext): BlueprintRun[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1BlueprintRun(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Blueprints = (output: any, context: __SerdeContext): Blueprint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1Blueprint(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1BooleanColumnStatisticsData = (
  output: any,
  context: __SerdeContext
): BooleanColumnStatisticsData => {
  return take(output, {
    NumberOfFalses: __expectLong,
    NumberOfNulls: __expectLong,
    NumberOfTrues: __expectLong,
  }) as any;
};

const deserializeAws_json1_1BoundedPartitionValueList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1CancelDataQualityRuleRecommendationRunResponse = (
  output: any,
  context: __SerdeContext
): CancelDataQualityRuleRecommendationRunResponse => {
  return take(output, {}) as any;
};

const deserializeAws_json1_1CancelDataQualityRulesetEvaluationRunResponse = (
  output: any,
  context: __SerdeContext
): CancelDataQualityRulesetEvaluationRunResponse => {
  return take(output, {}) as any;
};

const deserializeAws_json1_1CancelMLTaskRunResponse = (
  output: any,
  context: __SerdeContext
): CancelMLTaskRunResponse => {
  return take(output, {
    Status: __expectString,
    TaskRunId: __expectString,
    TransformId: __expectString,
  }) as any;
};

const deserializeAws_json1_1CancelStatementResponse = (
  output: any,
  context: __SerdeContext
): CancelStatementResponse => {
  return take(output, {}) as any;
};

const deserializeAws_json1_1CatalogDeltaSource = (output: any, context: __SerdeContext): CatalogDeltaSource => {
  return take(output, {
    AdditionalDeltaOptions: [, (_) => deserializeAws_json1_1AdditionalOptions(_, context)],
    Database: __expectString,
    Name: __expectString,
    OutputSchemas: [, (_) => deserializeAws_json1_1GlueSchemas(_, context)],
    Table: __expectString,
  }) as any;
};

const deserializeAws_json1_1CatalogHudiSource = (output: any, context: __SerdeContext): CatalogHudiSource => {
  return take(output, {
    AdditionalHudiOptions: [, (_) => deserializeAws_json1_1AdditionalOptions(_, context)],
    Database: __expectString,
    Name: __expectString,
    OutputSchemas: [, (_) => deserializeAws_json1_1GlueSchemas(_, context)],
    Table: __expectString,
  }) as any;
};

const deserializeAws_json1_1CatalogImportStatus = (output: any, context: __SerdeContext): CatalogImportStatus => {
  return take(output, {
    ImportCompleted: __expectBoolean,
    ImportTime: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    ImportedBy: __expectString,
  }) as any;
};

const deserializeAws_json1_1CatalogKafkaSource = (output: any, context: __SerdeContext): CatalogKafkaSource => {
  return take(output, {
    DataPreviewOptions: [, (_) => deserializeAws_json1_1StreamingDataPreviewOptions(_, context)],
    Database: __expectString,
    DetectSchema: __expectBoolean,
    Name: __expectString,
    StreamingOptions: [, (_) => deserializeAws_json1_1KafkaStreamingSourceOptions(_, context)],
    Table: __expectString,
    WindowSize: __expectInt32,
  }) as any;
};

const deserializeAws_json1_1CatalogKinesisSource = (output: any, context: __SerdeContext): CatalogKinesisSource => {
  return take(output, {
    DataPreviewOptions: [, (_) => deserializeAws_json1_1StreamingDataPreviewOptions(_, context)],
    Database: __expectString,
    DetectSchema: __expectBoolean,
    Name: __expectString,
    StreamingOptions: [, (_) => deserializeAws_json1_1KinesisStreamingSourceOptions(_, context)],
    Table: __expectString,
    WindowSize: __expectInt32,
  }) as any;
};

const deserializeAws_json1_1CatalogSchemaChangePolicy = (
  output: any,
  context: __SerdeContext
): CatalogSchemaChangePolicy => {
  return take(output, {
    EnableUpdateCatalog: __expectBoolean,
    UpdateBehavior: __expectString,
  }) as any;
};

const deserializeAws_json1_1CatalogSource = (output: any, context: __SerdeContext): CatalogSource => {
  return take(output, {
    Database: __expectString,
    Name: __expectString,
    Table: __expectString,
  }) as any;
};

const deserializeAws_json1_1CatalogTablesList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1CatalogTarget = (output: any, context: __SerdeContext): CatalogTarget => {
  return take(output, {
    ConnectionName: __expectString,
    DatabaseName: __expectString,
    DlqEventQueueArn: __expectString,
    EventQueueArn: __expectString,
    Tables: [, (_) => deserializeAws_json1_1CatalogTablesList(_, context)],
  }) as any;
};

const deserializeAws_json1_1CatalogTargetList = (output: any, context: __SerdeContext): CatalogTarget[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1CatalogTarget(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CheckSchemaVersionValidityResponse = (
  output: any,
  context: __SerdeContext
): CheckSchemaVersionValidityResponse => {
  return take(output, {
    Error: __expectString,
    Valid: __expectBoolean,
  }) as any;
};

const deserializeAws_json1_1Classifier = (output: any, context: __SerdeContext): Classifier => {
  return take(output, {
    CsvClassifier: [, (_) => deserializeAws_json1_1CsvClassifier(_, context)],
    GrokClassifier: [, (_) => deserializeAws_json1_1GrokClassifier(_, context)],
    JsonClassifier: [, (_) => deserializeAws_json1_1JsonClassifier(_, context)],
    XMLClassifier: [, (_) => deserializeAws_json1_1XMLClassifier(_, context)],
  }) as any;
};

const deserializeAws_json1_1ClassifierList = (output: any, context: __SerdeContext): Classifier[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1Classifier(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ClassifierNameList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1CloudWatchEncryption = (output: any, context: __SerdeContext): CloudWatchEncryption => {
  return take(output, {
    CloudWatchEncryptionMode: __expectString,
    KmsKeyArn: __expectString,
  }) as any;
};

const deserializeAws_json1_1CodeGenConfigurationNode = (
  output: any,
  context: __SerdeContext
): CodeGenConfigurationNode => {
  return take(output, {
    Aggregate: [, (_) => deserializeAws_json1_1Aggregate(_, context)],
    ApplyMapping: [, (_) => deserializeAws_json1_1ApplyMapping(_, context)],
    AthenaConnectorSource: [, (_) => deserializeAws_json1_1AthenaConnectorSource(_, context)],
    CatalogDeltaSource: [, (_) => deserializeAws_json1_1CatalogDeltaSource(_, context)],
    CatalogHudiSource: [, (_) => deserializeAws_json1_1CatalogHudiSource(_, context)],
    CatalogKafkaSource: [, (_) => deserializeAws_json1_1CatalogKafkaSource(_, context)],
    CatalogKinesisSource: [, (_) => deserializeAws_json1_1CatalogKinesisSource(_, context)],
    CatalogSource: [, (_) => deserializeAws_json1_1CatalogSource(_, context)],
    CatalogTarget: [, (_) => deserializeAws_json1_1BasicCatalogTarget(_, context)],
    CustomCode: [, (_) => deserializeAws_json1_1CustomCode(_, context)],
    DirectJDBCSource: [, (_) => deserializeAws_json1_1DirectJDBCSource(_, context)],
    DirectKafkaSource: [, (_) => deserializeAws_json1_1DirectKafkaSource(_, context)],
    DirectKinesisSource: [, (_) => deserializeAws_json1_1DirectKinesisSource(_, context)],
    DropDuplicates: [, (_) => deserializeAws_json1_1DropDuplicates(_, context)],
    DropFields: [, (_) => deserializeAws_json1_1DropFields(_, context)],
    DropNullFields: [, (_) => deserializeAws_json1_1DropNullFields(_, context)],
    DynamicTransform: [, (_) => deserializeAws_json1_1DynamicTransform(_, context)],
    DynamoDBCatalogSource: [, (_) => deserializeAws_json1_1DynamoDBCatalogSource(_, context)],
    EvaluateDataQuality: [, (_) => deserializeAws_json1_1EvaluateDataQuality(_, context)],
    FillMissingValues: [, (_) => deserializeAws_json1_1FillMissingValues(_, context)],
    Filter: [, (_) => deserializeAws_json1_1Filter(_, context)],
    GovernedCatalogSource: [, (_) => deserializeAws_json1_1GovernedCatalogSource(_, context)],
    GovernedCatalogTarget: [, (_) => deserializeAws_json1_1GovernedCatalogTarget(_, context)],
    JDBCConnectorSource: [, (_) => deserializeAws_json1_1JDBCConnectorSource(_, context)],
    JDBCConnectorTarget: [, (_) => deserializeAws_json1_1JDBCConnectorTarget(_, context)],
    Join: [, (_) => deserializeAws_json1_1Join(_, context)],
    Merge: [, (_) => deserializeAws_json1_1Merge(_, context)],
    MicrosoftSQLServerCatalogSource: [, (_) => deserializeAws_json1_1MicrosoftSQLServerCatalogSource(_, context)],
    MicrosoftSQLServerCatalogTarget: [, (_) => deserializeAws_json1_1MicrosoftSQLServerCatalogTarget(_, context)],
    MySQLCatalogSource: [, (_) => deserializeAws_json1_1MySQLCatalogSource(_, context)],
    MySQLCatalogTarget: [, (_) => deserializeAws_json1_1MySQLCatalogTarget(_, context)],
    OracleSQLCatalogSource: [, (_) => deserializeAws_json1_1OracleSQLCatalogSource(_, context)],
    OracleSQLCatalogTarget: [, (_) => deserializeAws_json1_1OracleSQLCatalogTarget(_, context)],
    PIIDetection: [, (_) => deserializeAws_json1_1PIIDetection(_, context)],
    PostgreSQLCatalogSource: [, (_) => deserializeAws_json1_1PostgreSQLCatalogSource(_, context)],
    PostgreSQLCatalogTarget: [, (_) => deserializeAws_json1_1PostgreSQLCatalogTarget(_, context)],
    RedshiftSource: [, (_) => deserializeAws_json1_1RedshiftSource(_, context)],
    RedshiftTarget: [, (_) => deserializeAws_json1_1RedshiftTarget(_, context)],
    RelationalCatalogSource: [, (_) => deserializeAws_json1_1RelationalCatalogSource(_, context)],
    RenameField: [, (_) => deserializeAws_json1_1RenameField(_, context)],
    S3CatalogDeltaSource: [, (_) => deserializeAws_json1_1S3CatalogDeltaSource(_, context)],
    S3CatalogHudiSource: [, (_) => deserializeAws_json1_1S3CatalogHudiSource(_, context)],
    S3CatalogSource: [, (_) => deserializeAws_json1_1S3CatalogSource(_, context)],
    S3CatalogTarget: [, (_) => deserializeAws_json1_1S3CatalogTarget(_, context)],
    S3CsvSource: [, (_) => deserializeAws_json1_1S3CsvSource(_, context)],
    S3DeltaCatalogTarget: [, (_) => deserializeAws_json1_1S3DeltaCatalogTarget(_, context)],
    S3DeltaDirectTarget: [, (_) => deserializeAws_json1_1S3DeltaDirectTarget(_, context)],
    S3DeltaSource: [, (_) => deserializeAws_json1_1S3DeltaSource(_, context)],
    S3DirectTarget: [, (_) => deserializeAws_json1_1S3DirectTarget(_, context)],
    S3GlueParquetTarget: [, (_) => deserializeAws_json1_1S3GlueParquetTarget(_, context)],
    S3HudiCatalogTarget: [, (_) => deserializeAws_json1_1S3HudiCatalogTarget(_, context)],
    S3HudiDirectTarget: [, (_) => deserializeAws_json1_1S3HudiDirectTarget(_, context)],
    S3HudiSource: [, (_) => deserializeAws_json1_1S3HudiSource(_, context)],
    S3JsonSource: [, (_) => deserializeAws_json1_1S3JsonSource(_, context)],
    S3ParquetSource: [, (_) => deserializeAws_json1_1S3ParquetSource(_, context)],
    SelectFields: [, (_) => deserializeAws_json1_1SelectFields(_, context)],
    SelectFromCollection: [, (_) => deserializeAws_json1_1SelectFromCollection(_, context)],
    SparkConnectorSource: [, (_) => deserializeAws_json1_1SparkConnectorSource(_, context)],
    SparkConnectorTarget: [, (_) => deserializeAws_json1_1SparkConnectorTarget(_, context)],
    SparkSQL: [, (_) => deserializeAws_json1_1SparkSQL(_, context)],
    Spigot: [, (_) => deserializeAws_json1_1Spigot(_, context)],
    SplitFields: [, (_) => deserializeAws_json1_1SplitFields(_, context)],
    Union: [, (_) => deserializeAws_json1_1Union(_, context)],
  }) as any;
};

const deserializeAws_json1_1CodeGenConfigurationNodes = (
  output: any,
  context: __SerdeContext
): Record<string, CodeGenConfigurationNode> => {
  return Object.entries(output).reduce((acc: Record<string, CodeGenConfigurationNode>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_json1_1CodeGenConfigurationNode(value, context);
    return acc;
  }, {});
};

const deserializeAws_json1_1CodeGenEdge = (output: any, context: __SerdeContext): CodeGenEdge => {
  return take(output, {
    Source: __expectString,
    Target: __expectString,
    TargetParameter: __expectString,
  }) as any;
};

const deserializeAws_json1_1CodeGenNode = (output: any, context: __SerdeContext): CodeGenNode => {
  return take(output, {
    Args: [, (_) => deserializeAws_json1_1CodeGenNodeArgs(_, context)],
    Id: __expectString,
    LineNumber: __expectInt32,
    NodeType: __expectString,
  }) as any;
};

const deserializeAws_json1_1CodeGenNodeArg = (output: any, context: __SerdeContext): CodeGenNodeArg => {
  return take(output, {
    Name: __expectString,
    Param: __expectBoolean,
    Value: __expectString,
  }) as any;
};

const deserializeAws_json1_1CodeGenNodeArgs = (output: any, context: __SerdeContext): CodeGenNodeArg[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1CodeGenNodeArg(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Column = (output: any, context: __SerdeContext): Column => {
  return take(output, {
    Comment: __expectString,
    Name: __expectString,
    Parameters: [, (_) => deserializeAws_json1_1ParametersMap(_, context)],
    Type: __expectString,
  }) as any;
};

const deserializeAws_json1_1ColumnError = (output: any, context: __SerdeContext): ColumnError => {
  return take(output, {
    ColumnName: __expectString,
    Error: [, (_) => deserializeAws_json1_1ErrorDetail(_, context)],
  }) as any;
};

const deserializeAws_json1_1ColumnErrors = (output: any, context: __SerdeContext): ColumnError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1ColumnError(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ColumnImportance = (output: any, context: __SerdeContext): ColumnImportance => {
  return take(output, {
    ColumnName: __expectString,
    Importance: __limitedParseDouble,
  }) as any;
};

const deserializeAws_json1_1ColumnImportanceList = (output: any, context: __SerdeContext): ColumnImportance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1ColumnImportance(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ColumnList = (output: any, context: __SerdeContext): Column[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1Column(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ColumnRowFilter = (output: any, context: __SerdeContext): ColumnRowFilter => {
  return take(output, {
    ColumnName: __expectString,
    RowFilterExpression: __expectString,
  }) as any;
};

const deserializeAws_json1_1ColumnRowFilterList = (output: any, context: __SerdeContext): ColumnRowFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1ColumnRowFilter(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ColumnStatistics = (output: any, context: __SerdeContext): ColumnStatistics => {
  return take(output, {
    AnalyzedTime: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    ColumnName: __expectString,
    ColumnType: __expectString,
    StatisticsData: [, (_) => deserializeAws_json1_1ColumnStatisticsData(_, context)],
  }) as any;
};

const deserializeAws_json1_1ColumnStatisticsData = (output: any, context: __SerdeContext): ColumnStatisticsData => {
  return take(output, {
    BinaryColumnStatisticsData: [, (_) => deserializeAws_json1_1BinaryColumnStatisticsData(_, context)],
    BooleanColumnStatisticsData: [, (_) => deserializeAws_json1_1BooleanColumnStatisticsData(_, context)],
    DateColumnStatisticsData: [, (_) => deserializeAws_json1_1DateColumnStatisticsData(_, context)],
    DecimalColumnStatisticsData: [, (_) => deserializeAws_json1_1DecimalColumnStatisticsData(_, context)],
    DoubleColumnStatisticsData: [, (_) => deserializeAws_json1_1DoubleColumnStatisticsData(_, context)],
    LongColumnStatisticsData: [, (_) => deserializeAws_json1_1LongColumnStatisticsData(_, context)],
    StringColumnStatisticsData: [, (_) => deserializeAws_json1_1StringColumnStatisticsData(_, context)],
    Type: __expectString,
  }) as any;
};

const deserializeAws_json1_1ColumnStatisticsError = (output: any, context: __SerdeContext): ColumnStatisticsError => {
  return take(output, {
    ColumnStatistics: [, (_) => deserializeAws_json1_1ColumnStatistics(_, context)],
    Error: [, (_) => deserializeAws_json1_1ErrorDetail(_, context)],
  }) as any;
};

const deserializeAws_json1_1ColumnStatisticsErrors = (
  output: any,
  context: __SerdeContext
): ColumnStatisticsError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1ColumnStatisticsError(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ColumnStatisticsList = (output: any, context: __SerdeContext): ColumnStatistics[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1ColumnStatistics(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ColumnValueStringList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1ConcurrentModificationException = (
  output: any,
  context: __SerdeContext
): ConcurrentModificationException => {
  return take(output, {
    Message: __expectString,
  }) as any;
};

const deserializeAws_json1_1ConcurrentRunsExceededException = (
  output: any,
  context: __SerdeContext
): ConcurrentRunsExceededException => {
  return take(output, {
    Message: __expectString,
  }) as any;
};

const deserializeAws_json1_1Condition = (output: any, context: __SerdeContext): Condition => {
  return take(output, {
    CrawlState: __expectString,
    CrawlerName: __expectString,
    JobName: __expectString,
    LogicalOperator: __expectString,
    State: __expectString,
  }) as any;
};

const deserializeAws_json1_1ConditionCheckFailureException = (
  output: any,
  context: __SerdeContext
): ConditionCheckFailureException => {
  return take(output, {
    Message: __expectString,
  }) as any;
};

const deserializeAws_json1_1ConditionList = (output: any, context: __SerdeContext): Condition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1Condition(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return take(output, {
    Message: __expectString,
  }) as any;
};

const deserializeAws_json1_1ConfusionMatrix = (output: any, context: __SerdeContext): ConfusionMatrix => {
  return take(output, {
    NumFalseNegatives: __expectLong,
    NumFalsePositives: __expectLong,
    NumTrueNegatives: __expectLong,
    NumTruePositives: __expectLong,
  }) as any;
};

const deserializeAws_json1_1Connection = (output: any, context: __SerdeContext): Connection => {
  return take(output, {
    ConnectionProperties: [, (_) => deserializeAws_json1_1ConnectionProperties(_, context)],
    ConnectionType: __expectString,
    CreationTime: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    Description: __expectString,
    LastUpdatedBy: __expectString,
    LastUpdatedTime: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    MatchCriteria: [, (_) => deserializeAws_json1_1MatchCriteria(_, context)],
    Name: __expectString,
    PhysicalConnectionRequirements: [, (_) => deserializeAws_json1_1PhysicalConnectionRequirements(_, context)],
  }) as any;
};

const deserializeAws_json1_1ConnectionList = (output: any, context: __SerdeContext): Connection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1Connection(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ConnectionPasswordEncryption = (
  output: any,
  context: __SerdeContext
): ConnectionPasswordEncryption => {
  return take(output, {
    AwsKmsKeyId: __expectString,
    ReturnConnectionPasswordEncrypted: __expectBoolean,
  }) as any;
};

const deserializeAws_json1_1ConnectionProperties = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce(
    (acc: Record<string, string>, [key, value]: [ConnectionPropertyKey | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = __expectString(value) as any;
      return acc;
    },
    {}
  );
};

const deserializeAws_json1_1ConnectionsList = (output: any, context: __SerdeContext): ConnectionsList => {
  return take(output, {
    Connections: [, (_) => deserializeAws_json1_1OrchestrationStringList(_, context)],
  }) as any;
};

const deserializeAws_json1_1ContextWords = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1Crawl = (output: any, context: __SerdeContext): Crawl => {
  return take(output, {
    CompletedOn: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    ErrorMessage: __expectString,
    LogGroup: __expectString,
    LogStream: __expectString,
    StartedOn: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    State: __expectString,
  }) as any;
};

const deserializeAws_json1_1Crawler = (output: any, context: __SerdeContext): Crawler => {
  return take(output, {
    Classifiers: [, (_) => deserializeAws_json1_1ClassifierNameList(_, context)],
    Configuration: __expectString,
    CrawlElapsedTime: __expectLong,
    CrawlerSecurityConfiguration: __expectString,
    CreationTime: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    DatabaseName: __expectString,
    Description: __expectString,
    LakeFormationConfiguration: [, (_) => deserializeAws_json1_1LakeFormationConfiguration(_, context)],
    LastCrawl: [, (_) => deserializeAws_json1_1LastCrawlInfo(_, context)],
    LastUpdated: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    LineageConfiguration: [, (_) => deserializeAws_json1_1LineageConfiguration(_, context)],
    Name: __expectString,
    RecrawlPolicy: [, (_) => deserializeAws_json1_1RecrawlPolicy(_, context)],
    Role: __expectString,
    Schedule: [, (_) => deserializeAws_json1_1Schedule(_, context)],
    SchemaChangePolicy: [, (_) => deserializeAws_json1_1SchemaChangePolicy(_, context)],
    State: __expectString,
    TablePrefix: __expectString,
    Targets: [, (_) => deserializeAws_json1_1CrawlerTargets(_, context)],
    Version: __expectLong,
  }) as any;
};

const deserializeAws_json1_1CrawlerHistory = (output: any, context: __SerdeContext): CrawlerHistory => {
  return take(output, {
    CrawlId: __expectString,
    DPUHour: __limitedParseDouble,
    EndTime: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    ErrorMessage: __expectString,
    LogGroup: __expectString,
    LogStream: __expectString,
    MessagePrefix: __expectString,
    StartTime: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    State: __expectString,
    Summary: __expectString,
  }) as any;
};

const deserializeAws_json1_1CrawlerHistoryList = (output: any, context: __SerdeContext): CrawlerHistory[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1CrawlerHistory(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CrawlerList = (output: any, context: __SerdeContext): Crawler[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1Crawler(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CrawlerMetrics = (output: any, context: __SerdeContext): CrawlerMetrics => {
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

const deserializeAws_json1_1CrawlerMetricsList = (output: any, context: __SerdeContext): CrawlerMetrics[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1CrawlerMetrics(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CrawlerNameList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1CrawlerNodeDetails = (output: any, context: __SerdeContext): CrawlerNodeDetails => {
  return take(output, {
    Crawls: [, (_) => deserializeAws_json1_1CrawlList(_, context)],
  }) as any;
};

const deserializeAws_json1_1CrawlerNotRunningException = (
  output: any,
  context: __SerdeContext
): CrawlerNotRunningException => {
  return take(output, {
    Message: __expectString,
  }) as any;
};

const deserializeAws_json1_1CrawlerRunningException = (
  output: any,
  context: __SerdeContext
): CrawlerRunningException => {
  return take(output, {
    Message: __expectString,
  }) as any;
};

const deserializeAws_json1_1CrawlerStoppingException = (
  output: any,
  context: __SerdeContext
): CrawlerStoppingException => {
  return take(output, {
    Message: __expectString,
  }) as any;
};

const deserializeAws_json1_1CrawlerTargets = (output: any, context: __SerdeContext): CrawlerTargets => {
  return take(output, {
    CatalogTargets: [, (_) => deserializeAws_json1_1CatalogTargetList(_, context)],
    DeltaTargets: [, (_) => deserializeAws_json1_1DeltaTargetList(_, context)],
    DynamoDBTargets: [, (_) => deserializeAws_json1_1DynamoDBTargetList(_, context)],
    JdbcTargets: [, (_) => deserializeAws_json1_1JdbcTargetList(_, context)],
    MongoDBTargets: [, (_) => deserializeAws_json1_1MongoDBTargetList(_, context)],
    S3Targets: [, (_) => deserializeAws_json1_1S3TargetList(_, context)],
  }) as any;
};

const deserializeAws_json1_1CrawlList = (output: any, context: __SerdeContext): Crawl[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1Crawl(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CreateBlueprintResponse = (
  output: any,
  context: __SerdeContext
): CreateBlueprintResponse => {
  return take(output, {
    Name: __expectString,
  }) as any;
};

const deserializeAws_json1_1CreateClassifierResponse = (
  output: any,
  context: __SerdeContext
): CreateClassifierResponse => {
  return take(output, {}) as any;
};

const deserializeAws_json1_1CreateConnectionResponse = (
  output: any,
  context: __SerdeContext
): CreateConnectionResponse => {
  return take(output, {}) as any;
};

const deserializeAws_json1_1CreateCrawlerResponse = (output: any, context: __SerdeContext): CreateCrawlerResponse => {
  return take(output, {}) as any;
};

const deserializeAws_json1_1CreateCustomEntityTypeResponse = (
  output: any,
  context: __SerdeContext
): CreateCustomEntityTypeResponse => {
  return take(output, {
    Name: __expectString,
  }) as any;
};

const deserializeAws_json1_1CreateDatabaseResponse = (output: any, context: __SerdeContext): CreateDatabaseResponse => {
  return take(output, {}) as any;
};

const deserializeAws_json1_1CreateDataQualityRulesetResponse = (
  output: any,
  context: __SerdeContext
): CreateDataQualityRulesetResponse => {
  return take(output, {
    Name: __expectString,
  }) as any;
};

const deserializeAws_json1_1CreateDevEndpointResponse = (
  output: any,
  context: __SerdeContext
): CreateDevEndpointResponse => {
  return take(output, {
    Arguments: [, (_) => deserializeAws_json1_1MapValue(_, context)],
    AvailabilityZone: __expectString,
    CreatedTimestamp: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    EndpointName: __expectString,
    ExtraJarsS3Path: __expectString,
    ExtraPythonLibsS3Path: __expectString,
    FailureReason: __expectString,
    GlueVersion: __expectString,
    NumberOfNodes: __expectInt32,
    NumberOfWorkers: __expectInt32,
    RoleArn: __expectString,
    SecurityConfiguration: __expectString,
    SecurityGroupIds: [, (_) => deserializeAws_json1_1StringList(_, context)],
    Status: __expectString,
    SubnetId: __expectString,
    VpcId: __expectString,
    WorkerType: __expectString,
    YarnEndpointAddress: __expectString,
    ZeppelinRemoteSparkInterpreterPort: __expectInt32,
  }) as any;
};

const deserializeAws_json1_1CreateJobResponse = (output: any, context: __SerdeContext): CreateJobResponse => {
  return take(output, {
    Name: __expectString,
  }) as any;
};

const deserializeAws_json1_1CreateMLTransformResponse = (
  output: any,
  context: __SerdeContext
): CreateMLTransformResponse => {
  return take(output, {
    TransformId: __expectString,
  }) as any;
};

const deserializeAws_json1_1CreatePartitionIndexResponse = (
  output: any,
  context: __SerdeContext
): CreatePartitionIndexResponse => {
  return take(output, {}) as any;
};

const deserializeAws_json1_1CreatePartitionResponse = (
  output: any,
  context: __SerdeContext
): CreatePartitionResponse => {
  return take(output, {}) as any;
};

const deserializeAws_json1_1CreateRegistryResponse = (output: any, context: __SerdeContext): CreateRegistryResponse => {
  return take(output, {
    Description: __expectString,
    RegistryArn: __expectString,
    RegistryName: __expectString,
    Tags: [, (_) => deserializeAws_json1_1TagsMap(_, context)],
  }) as any;
};

const deserializeAws_json1_1CreateSchemaResponse = (output: any, context: __SerdeContext): CreateSchemaResponse => {
  return take(output, {
    Compatibility: __expectString,
    DataFormat: __expectString,
    Description: __expectString,
    LatestSchemaVersion: __expectLong,
    NextSchemaVersion: __expectLong,
    RegistryArn: __expectString,
    RegistryName: __expectString,
    SchemaArn: __expectString,
    SchemaCheckpoint: __expectLong,
    SchemaName: __expectString,
    SchemaStatus: __expectString,
    SchemaVersionId: __expectString,
    SchemaVersionStatus: __expectString,
    Tags: [, (_) => deserializeAws_json1_1TagsMap(_, context)],
  }) as any;
};

const deserializeAws_json1_1CreateScriptResponse = (output: any, context: __SerdeContext): CreateScriptResponse => {
  return take(output, {
    PythonScript: __expectString,
    ScalaCode: __expectString,
  }) as any;
};

const deserializeAws_json1_1CreateSecurityConfigurationResponse = (
  output: any,
  context: __SerdeContext
): CreateSecurityConfigurationResponse => {
  return take(output, {
    CreatedTimestamp: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    Name: __expectString,
  }) as any;
};

const deserializeAws_json1_1CreateSessionResponse = (output: any, context: __SerdeContext): CreateSessionResponse => {
  return take(output, {
    Session: [, (_) => deserializeAws_json1_1Session(_, context)],
  }) as any;
};

const deserializeAws_json1_1CreateTableResponse = (output: any, context: __SerdeContext): CreateTableResponse => {
  return take(output, {}) as any;
};

const deserializeAws_json1_1CreateTriggerResponse = (output: any, context: __SerdeContext): CreateTriggerResponse => {
  return take(output, {
    Name: __expectString,
  }) as any;
};

const deserializeAws_json1_1CreateUserDefinedFunctionResponse = (
  output: any,
  context: __SerdeContext
): CreateUserDefinedFunctionResponse => {
  return take(output, {}) as any;
};

const deserializeAws_json1_1CreateWorkflowResponse = (output: any, context: __SerdeContext): CreateWorkflowResponse => {
  return take(output, {
    Name: __expectString,
  }) as any;
};

const deserializeAws_json1_1CsvClassifier = (output: any, context: __SerdeContext): CsvClassifier => {
  return take(output, {
    AllowSingleColumn: __expectBoolean,
    ContainsHeader: __expectString,
    CreationTime: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    CustomDatatypeConfigured: __expectBoolean,
    CustomDatatypes: [, (_) => deserializeAws_json1_1CustomDatatypes(_, context)],
    Delimiter: __expectString,
    DisableValueTrimming: __expectBoolean,
    Header: [, (_) => deserializeAws_json1_1CsvHeader(_, context)],
    LastUpdated: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    Name: __expectString,
    QuoteSymbol: __expectString,
    Version: __expectLong,
  }) as any;
};

const deserializeAws_json1_1CsvHeader = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1CustomCode = (output: any, context: __SerdeContext): CustomCode => {
  return take(output, {
    ClassName: __expectString,
    Code: __expectString,
    Inputs: [, (_) => deserializeAws_json1_1ManyInputs(_, context)],
    Name: __expectString,
    OutputSchemas: [, (_) => deserializeAws_json1_1GlueSchemas(_, context)],
  }) as any;
};

const deserializeAws_json1_1CustomDatatypes = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1CustomEntityType = (output: any, context: __SerdeContext): CustomEntityType => {
  return take(output, {
    ContextWords: [, (_) => deserializeAws_json1_1ContextWords(_, context)],
    Name: __expectString,
    RegexString: __expectString,
  }) as any;
};

const deserializeAws_json1_1CustomEntityTypeNames = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1CustomEntityTypes = (output: any, context: __SerdeContext): CustomEntityType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1CustomEntityType(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DagEdges = (output: any, context: __SerdeContext): CodeGenEdge[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1CodeGenEdge(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DagNodes = (output: any, context: __SerdeContext): CodeGenNode[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1CodeGenNode(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Database = (output: any, context: __SerdeContext): Database => {
  return take(output, {
    CatalogId: __expectString,
    CreateTableDefaultPermissions: [, (_) => deserializeAws_json1_1PrincipalPermissionsList(_, context)],
    CreateTime: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    Description: __expectString,
    FederatedDatabase: [, (_) => deserializeAws_json1_1FederatedDatabase(_, context)],
    LocationUri: __expectString,
    Name: __expectString,
    Parameters: [, (_) => deserializeAws_json1_1ParametersMap(_, context)],
    TargetDatabase: [, (_) => deserializeAws_json1_1DatabaseIdentifier(_, context)],
  }) as any;
};

const deserializeAws_json1_1DatabaseIdentifier = (output: any, context: __SerdeContext): DatabaseIdentifier => {
  return take(output, {
    CatalogId: __expectString,
    DatabaseName: __expectString,
  }) as any;
};

const deserializeAws_json1_1DatabaseList = (output: any, context: __SerdeContext): Database[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1Database(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DataCatalogEncryptionSettings = (
  output: any,
  context: __SerdeContext
): DataCatalogEncryptionSettings => {
  return take(output, {
    ConnectionPasswordEncryption: [, (_) => deserializeAws_json1_1ConnectionPasswordEncryption(_, context)],
    EncryptionAtRest: [, (_) => deserializeAws_json1_1EncryptionAtRest(_, context)],
  }) as any;
};

const deserializeAws_json1_1DataLakePrincipal = (output: any, context: __SerdeContext): DataLakePrincipal => {
  return take(output, {
    DataLakePrincipalIdentifier: __expectString,
  }) as any;
};

const deserializeAws_json1_1DataQualityEvaluationRunAdditionalRunOptions = (
  output: any,
  context: __SerdeContext
): DataQualityEvaluationRunAdditionalRunOptions => {
  return take(output, {
    CloudWatchMetricsEnabled: __expectBoolean,
    ResultsS3Prefix: __expectString,
  }) as any;
};

const deserializeAws_json1_1DataQualityResult = (output: any, context: __SerdeContext): DataQualityResult => {
  return take(output, {
    CompletedOn: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    DataSource: [, (_) => deserializeAws_json1_1DataSource(_, context)],
    EvaluationContext: __expectString,
    JobName: __expectString,
    JobRunId: __expectString,
    ResultId: __expectString,
    RuleResults: [, (_) => deserializeAws_json1_1DataQualityRuleResults(_, context)],
    RulesetEvaluationRunId: __expectString,
    RulesetName: __expectString,
    Score: __limitedParseDouble,
    StartedOn: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
  }) as any;
};

const deserializeAws_json1_1DataQualityResultDescription = (
  output: any,
  context: __SerdeContext
): DataQualityResultDescription => {
  return take(output, {
    DataSource: [, (_) => deserializeAws_json1_1DataSource(_, context)],
    JobName: __expectString,
    JobRunId: __expectString,
    ResultId: __expectString,
    StartedOn: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
  }) as any;
};

const deserializeAws_json1_1DataQualityResultDescriptionList = (
  output: any,
  context: __SerdeContext
): DataQualityResultDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1DataQualityResultDescription(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DataQualityResultIdList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1DataQualityResultIds = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1DataQualityResultsList = (output: any, context: __SerdeContext): DataQualityResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1DataQualityResult(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DataQualityRuleRecommendationRunDescription = (
  output: any,
  context: __SerdeContext
): DataQualityRuleRecommendationRunDescription => {
  return take(output, {
    DataSource: [, (_) => deserializeAws_json1_1DataSource(_, context)],
    RunId: __expectString,
    StartedOn: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    Status: __expectString,
  }) as any;
};

const deserializeAws_json1_1DataQualityRuleRecommendationRunList = (
  output: any,
  context: __SerdeContext
): DataQualityRuleRecommendationRunDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1DataQualityRuleRecommendationRunDescription(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DataQualityRuleResult = (output: any, context: __SerdeContext): DataQualityRuleResult => {
  return take(output, {
    Description: __expectString,
    EvaluationMessage: __expectString,
    Name: __expectString,
    Result: __expectString,
  }) as any;
};

const deserializeAws_json1_1DataQualityRuleResults = (
  output: any,
  context: __SerdeContext
): DataQualityRuleResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1DataQualityRuleResult(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DataQualityRulesetEvaluationRunDescription = (
  output: any,
  context: __SerdeContext
): DataQualityRulesetEvaluationRunDescription => {
  return take(output, {
    DataSource: [, (_) => deserializeAws_json1_1DataSource(_, context)],
    RunId: __expectString,
    StartedOn: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    Status: __expectString,
  }) as any;
};

const deserializeAws_json1_1DataQualityRulesetEvaluationRunList = (
  output: any,
  context: __SerdeContext
): DataQualityRulesetEvaluationRunDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1DataQualityRulesetEvaluationRunDescription(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DataQualityRulesetList = (
  output: any,
  context: __SerdeContext
): DataQualityRulesetListDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1DataQualityRulesetListDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DataQualityRulesetListDetails = (
  output: any,
  context: __SerdeContext
): DataQualityRulesetListDetails => {
  return take(output, {
    CreatedOn: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    Description: __expectString,
    LastModifiedOn: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    Name: __expectString,
    RecommendationRunId: __expectString,
    RuleCount: __expectInt32,
    TargetTable: [, (_) => deserializeAws_json1_1DataQualityTargetTable(_, context)],
  }) as any;
};

const deserializeAws_json1_1DataQualityTargetTable = (output: any, context: __SerdeContext): DataQualityTargetTable => {
  return take(output, {
    DatabaseName: __expectString,
    TableName: __expectString,
  }) as any;
};

const deserializeAws_json1_1DataSource = (output: any, context: __SerdeContext): DataSource => {
  return take(output, {
    GlueTable: [, (_) => deserializeAws_json1_1GlueTable(_, context)],
  }) as any;
};

const deserializeAws_json1_1Datatype = (output: any, context: __SerdeContext): Datatype => {
  return take(output, {
    Id: __expectString,
    Label: __expectString,
  }) as any;
};

const deserializeAws_json1_1DateColumnStatisticsData = (
  output: any,
  context: __SerdeContext
): DateColumnStatisticsData => {
  return take(output, {
    MaximumValue: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    MinimumValue: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    NumberOfDistinctValues: __expectLong,
    NumberOfNulls: __expectLong,
  }) as any;
};

const deserializeAws_json1_1DecimalColumnStatisticsData = (
  output: any,
  context: __SerdeContext
): DecimalColumnStatisticsData => {
  return take(output, {
    MaximumValue: [, (_) => deserializeAws_json1_1DecimalNumber(_, context)],
    MinimumValue: [, (_) => deserializeAws_json1_1DecimalNumber(_, context)],
    NumberOfDistinctValues: __expectLong,
    NumberOfNulls: __expectLong,
  }) as any;
};

const deserializeAws_json1_1DecimalNumber = (output: any, context: __SerdeContext): DecimalNumber => {
  return take(output, {
    Scale: __expectInt32,
    UnscaledValue: [, (_) => context.base64Decoder(_)],
  }) as any;
};

const deserializeAws_json1_1DeleteBlueprintResponse = (
  output: any,
  context: __SerdeContext
): DeleteBlueprintResponse => {
  return take(output, {
    Name: __expectString,
  }) as any;
};

const deserializeAws_json1_1DeleteClassifierResponse = (
  output: any,
  context: __SerdeContext
): DeleteClassifierResponse => {
  return take(output, {}) as any;
};

const deserializeAws_json1_1DeleteColumnStatisticsForPartitionResponse = (
  output: any,
  context: __SerdeContext
): DeleteColumnStatisticsForPartitionResponse => {
  return take(output, {}) as any;
};

const deserializeAws_json1_1DeleteColumnStatisticsForTableResponse = (
  output: any,
  context: __SerdeContext
): DeleteColumnStatisticsForTableResponse => {
  return take(output, {}) as any;
};

const deserializeAws_json1_1DeleteConnectionResponse = (
  output: any,
  context: __SerdeContext
): DeleteConnectionResponse => {
  return take(output, {}) as any;
};

const deserializeAws_json1_1DeleteCrawlerResponse = (output: any, context: __SerdeContext): DeleteCrawlerResponse => {
  return take(output, {}) as any;
};

const deserializeAws_json1_1DeleteCustomEntityTypeResponse = (
  output: any,
  context: __SerdeContext
): DeleteCustomEntityTypeResponse => {
  return take(output, {
    Name: __expectString,
  }) as any;
};

const deserializeAws_json1_1DeleteDatabaseResponse = (output: any, context: __SerdeContext): DeleteDatabaseResponse => {
  return take(output, {}) as any;
};

const deserializeAws_json1_1DeleteDataQualityRulesetResponse = (
  output: any,
  context: __SerdeContext
): DeleteDataQualityRulesetResponse => {
  return take(output, {}) as any;
};

const deserializeAws_json1_1DeleteDevEndpointResponse = (
  output: any,
  context: __SerdeContext
): DeleteDevEndpointResponse => {
  return take(output, {}) as any;
};

const deserializeAws_json1_1DeleteJobResponse = (output: any, context: __SerdeContext): DeleteJobResponse => {
  return take(output, {
    JobName: __expectString,
  }) as any;
};

const deserializeAws_json1_1DeleteMLTransformResponse = (
  output: any,
  context: __SerdeContext
): DeleteMLTransformResponse => {
  return take(output, {
    TransformId: __expectString,
  }) as any;
};

const deserializeAws_json1_1DeletePartitionIndexResponse = (
  output: any,
  context: __SerdeContext
): DeletePartitionIndexResponse => {
  return take(output, {}) as any;
};

const deserializeAws_json1_1DeletePartitionResponse = (
  output: any,
  context: __SerdeContext
): DeletePartitionResponse => {
  return take(output, {}) as any;
};

const deserializeAws_json1_1DeleteRegistryResponse = (output: any, context: __SerdeContext): DeleteRegistryResponse => {
  return take(output, {
    RegistryArn: __expectString,
    RegistryName: __expectString,
    Status: __expectString,
  }) as any;
};

const deserializeAws_json1_1DeleteResourcePolicyResponse = (
  output: any,
  context: __SerdeContext
): DeleteResourcePolicyResponse => {
  return take(output, {}) as any;
};

const deserializeAws_json1_1DeleteSchemaResponse = (output: any, context: __SerdeContext): DeleteSchemaResponse => {
  return take(output, {
    SchemaArn: __expectString,
    SchemaName: __expectString,
    Status: __expectString,
  }) as any;
};

const deserializeAws_json1_1DeleteSchemaVersionsResponse = (
  output: any,
  context: __SerdeContext
): DeleteSchemaVersionsResponse => {
  return take(output, {
    SchemaVersionErrors: [, (_) => deserializeAws_json1_1SchemaVersionErrorList(_, context)],
  }) as any;
};

const deserializeAws_json1_1DeleteSecurityConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DeleteSecurityConfigurationResponse => {
  return take(output, {}) as any;
};

const deserializeAws_json1_1DeleteSessionResponse = (output: any, context: __SerdeContext): DeleteSessionResponse => {
  return take(output, {
    Id: __expectString,
  }) as any;
};

const deserializeAws_json1_1DeleteTableResponse = (output: any, context: __SerdeContext): DeleteTableResponse => {
  return take(output, {}) as any;
};

const deserializeAws_json1_1DeleteTableVersionResponse = (
  output: any,
  context: __SerdeContext
): DeleteTableVersionResponse => {
  return take(output, {}) as any;
};

const deserializeAws_json1_1DeleteTriggerResponse = (output: any, context: __SerdeContext): DeleteTriggerResponse => {
  return take(output, {
    Name: __expectString,
  }) as any;
};

const deserializeAws_json1_1DeleteUserDefinedFunctionResponse = (
  output: any,
  context: __SerdeContext
): DeleteUserDefinedFunctionResponse => {
  return take(output, {}) as any;
};

const deserializeAws_json1_1DeleteWorkflowResponse = (output: any, context: __SerdeContext): DeleteWorkflowResponse => {
  return take(output, {
    Name: __expectString,
  }) as any;
};

const deserializeAws_json1_1DeltaTarget = (output: any, context: __SerdeContext): DeltaTarget => {
  return take(output, {
    ConnectionName: __expectString,
    CreateNativeDeltaTable: __expectBoolean,
    DeltaTables: [, (_) => deserializeAws_json1_1PathList(_, context)],
    WriteManifest: __expectBoolean,
  }) as any;
};

const deserializeAws_json1_1DeltaTargetList = (output: any, context: __SerdeContext): DeltaTarget[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1DeltaTarget(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DevEndpoint = (output: any, context: __SerdeContext): DevEndpoint => {
  return take(output, {
    Arguments: [, (_) => deserializeAws_json1_1MapValue(_, context)],
    AvailabilityZone: __expectString,
    CreatedTimestamp: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    EndpointName: __expectString,
    ExtraJarsS3Path: __expectString,
    ExtraPythonLibsS3Path: __expectString,
    FailureReason: __expectString,
    GlueVersion: __expectString,
    LastModifiedTimestamp: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    LastUpdateStatus: __expectString,
    NumberOfNodes: __expectInt32,
    NumberOfWorkers: __expectInt32,
    PrivateAddress: __expectString,
    PublicAddress: __expectString,
    PublicKey: __expectString,
    PublicKeys: [, (_) => deserializeAws_json1_1PublicKeysList(_, context)],
    RoleArn: __expectString,
    SecurityConfiguration: __expectString,
    SecurityGroupIds: [, (_) => deserializeAws_json1_1StringList(_, context)],
    Status: __expectString,
    SubnetId: __expectString,
    VpcId: __expectString,
    WorkerType: __expectString,
    YarnEndpointAddress: __expectString,
    ZeppelinRemoteSparkInterpreterPort: __expectInt32,
  }) as any;
};

const deserializeAws_json1_1DevEndpointList = (output: any, context: __SerdeContext): DevEndpoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1DevEndpoint(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DevEndpointNameList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1DevEndpointNames = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1DirectJDBCSource = (output: any, context: __SerdeContext): DirectJDBCSource => {
  return take(output, {
    ConnectionName: __expectString,
    ConnectionType: __expectString,
    Database: __expectString,
    Name: __expectString,
    RedshiftTmpDir: __expectString,
    Table: __expectString,
  }) as any;
};

const deserializeAws_json1_1DirectKafkaSource = (output: any, context: __SerdeContext): DirectKafkaSource => {
  return take(output, {
    DataPreviewOptions: [, (_) => deserializeAws_json1_1StreamingDataPreviewOptions(_, context)],
    DetectSchema: __expectBoolean,
    Name: __expectString,
    StreamingOptions: [, (_) => deserializeAws_json1_1KafkaStreamingSourceOptions(_, context)],
    WindowSize: __expectInt32,
  }) as any;
};

const deserializeAws_json1_1DirectKinesisSource = (output: any, context: __SerdeContext): DirectKinesisSource => {
  return take(output, {
    DataPreviewOptions: [, (_) => deserializeAws_json1_1StreamingDataPreviewOptions(_, context)],
    DetectSchema: __expectBoolean,
    Name: __expectString,
    StreamingOptions: [, (_) => deserializeAws_json1_1KinesisStreamingSourceOptions(_, context)],
    WindowSize: __expectInt32,
  }) as any;
};

const deserializeAws_json1_1DirectSchemaChangePolicy = (
  output: any,
  context: __SerdeContext
): DirectSchemaChangePolicy => {
  return take(output, {
    Database: __expectString,
    EnableUpdateCatalog: __expectBoolean,
    Table: __expectString,
    UpdateBehavior: __expectString,
  }) as any;
};

const deserializeAws_json1_1DoubleColumnStatisticsData = (
  output: any,
  context: __SerdeContext
): DoubleColumnStatisticsData => {
  return take(output, {
    MaximumValue: __limitedParseDouble,
    MinimumValue: __limitedParseDouble,
    NumberOfDistinctValues: __expectLong,
    NumberOfNulls: __expectLong,
  }) as any;
};

const deserializeAws_json1_1DQResultsPublishingOptions = (
  output: any,
  context: __SerdeContext
): DQResultsPublishingOptions => {
  return take(output, {
    CloudWatchMetricsEnabled: __expectBoolean,
    EvaluationContext: __expectString,
    ResultsPublishingEnabled: __expectBoolean,
    ResultsS3Prefix: __expectString,
  }) as any;
};

const deserializeAws_json1_1DQStopJobOnFailureOptions = (
  output: any,
  context: __SerdeContext
): DQStopJobOnFailureOptions => {
  return take(output, {
    StopJobOnFailureTiming: __expectString,
  }) as any;
};

const deserializeAws_json1_1DropDuplicates = (output: any, context: __SerdeContext): DropDuplicates => {
  return take(output, {
    Columns: [, (_) => deserializeAws_json1_1LimitedPathList(_, context)],
    Inputs: [, (_) => deserializeAws_json1_1OneInput(_, context)],
    Name: __expectString,
  }) as any;
};

const deserializeAws_json1_1DropFields = (output: any, context: __SerdeContext): DropFields => {
  return take(output, {
    Inputs: [, (_) => deserializeAws_json1_1OneInput(_, context)],
    Name: __expectString,
    Paths: [, (_) => deserializeAws_json1_1GlueStudioPathList(_, context)],
  }) as any;
};

const deserializeAws_json1_1DropNullFields = (output: any, context: __SerdeContext): DropNullFields => {
  return take(output, {
    Inputs: [, (_) => deserializeAws_json1_1OneInput(_, context)],
    Name: __expectString,
    NullCheckBoxList: [, (_) => deserializeAws_json1_1NullCheckBoxList(_, context)],
    NullTextList: [, (_) => deserializeAws_json1_1NullValueFields(_, context)],
  }) as any;
};

const deserializeAws_json1_1DynamicTransform = (output: any, context: __SerdeContext): DynamicTransform => {
  return take(output, {
    FunctionName: __expectString,
    Inputs: [, (_) => deserializeAws_json1_1OneInput(_, context)],
    Name: __expectString,
    Parameters: [, (_) => deserializeAws_json1_1TransformConfigParameterList(_, context)],
    Path: __expectString,
    TransformName: __expectString,
    Version: __expectString,
  }) as any;
};

const deserializeAws_json1_1DynamoDBCatalogSource = (output: any, context: __SerdeContext): DynamoDBCatalogSource => {
  return take(output, {
    Database: __expectString,
    Name: __expectString,
    Table: __expectString,
  }) as any;
};

const deserializeAws_json1_1DynamoDBTarget = (output: any, context: __SerdeContext): DynamoDBTarget => {
  return take(output, {
    Path: __expectString,
    scanAll: __expectBoolean,
    scanRate: __limitedParseDouble,
  }) as any;
};

const deserializeAws_json1_1DynamoDBTargetList = (output: any, context: __SerdeContext): DynamoDBTarget[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1DynamoDBTarget(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Edge = (output: any, context: __SerdeContext): Edge => {
  return take(output, {
    DestinationId: __expectString,
    SourceId: __expectString,
  }) as any;
};

const deserializeAws_json1_1EdgeList = (output: any, context: __SerdeContext): Edge[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1Edge(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1EnableAdditionalMetadata = (
  output: any,
  context: __SerdeContext
): (JdbcMetadataEntry | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1EnclosedInStringProperties = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1EnclosedInStringPropertiesMinOne = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1EncryptionAtRest = (output: any, context: __SerdeContext): EncryptionAtRest => {
  return take(output, {
    CatalogEncryptionMode: __expectString,
    SseAwsKmsKeyId: __expectString,
  }) as any;
};

const deserializeAws_json1_1EncryptionConfiguration = (
  output: any,
  context: __SerdeContext
): EncryptionConfiguration => {
  return take(output, {
    CloudWatchEncryption: [, (_) => deserializeAws_json1_1CloudWatchEncryption(_, context)],
    JobBookmarksEncryption: [, (_) => deserializeAws_json1_1JobBookmarksEncryption(_, context)],
    S3Encryption: [, (_) => deserializeAws_json1_1S3EncryptionList(_, context)],
  }) as any;
};

const deserializeAws_json1_1EntityNotFoundException = (
  output: any,
  context: __SerdeContext
): EntityNotFoundException => {
  return take(output, {
    FromFederationSource: __expectBoolean,
    Message: __expectString,
  }) as any;
};

const deserializeAws_json1_1ErrorByName = (output: any, context: __SerdeContext): Record<string, ErrorDetail> => {
  return Object.entries(output).reduce((acc: Record<string, ErrorDetail>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_json1_1ErrorDetail(value, context);
    return acc;
  }, {});
};

const deserializeAws_json1_1ErrorDetail = (output: any, context: __SerdeContext): ErrorDetail => {
  return take(output, {
    ErrorCode: __expectString,
    ErrorMessage: __expectString,
  }) as any;
};

const deserializeAws_json1_1ErrorDetails = (output: any, context: __SerdeContext): ErrorDetails => {
  return take(output, {
    ErrorCode: __expectString,
    ErrorMessage: __expectString,
  }) as any;
};

const deserializeAws_json1_1EvaluateDataQuality = (output: any, context: __SerdeContext): EvaluateDataQuality => {
  return take(output, {
    Inputs: [, (_) => deserializeAws_json1_1OneInput(_, context)],
    Name: __expectString,
    Output: __expectString,
    PublishingOptions: [, (_) => deserializeAws_json1_1DQResultsPublishingOptions(_, context)],
    Ruleset: __expectString,
    StopJobOnFailureOptions: [, (_) => deserializeAws_json1_1DQStopJobOnFailureOptions(_, context)],
  }) as any;
};

const deserializeAws_json1_1EvaluationMetrics = (output: any, context: __SerdeContext): EvaluationMetrics => {
  return take(output, {
    FindMatchesMetrics: [, (_) => deserializeAws_json1_1FindMatchesMetrics(_, context)],
    TransformType: __expectString,
  }) as any;
};

const deserializeAws_json1_1EventBatchingCondition = (output: any, context: __SerdeContext): EventBatchingCondition => {
  return take(output, {
    BatchSize: __expectInt32,
    BatchWindow: __expectInt32,
  }) as any;
};

const deserializeAws_json1_1ExecutionProperty = (output: any, context: __SerdeContext): ExecutionProperty => {
  return take(output, {
    MaxConcurrentRuns: __expectInt32,
  }) as any;
};

const deserializeAws_json1_1ExportLabelsTaskRunProperties = (
  output: any,
  context: __SerdeContext
): ExportLabelsTaskRunProperties => {
  return take(output, {
    OutputS3Path: __expectString,
  }) as any;
};

const deserializeAws_json1_1FederatedDatabase = (output: any, context: __SerdeContext): FederatedDatabase => {
  return take(output, {
    ConnectionName: __expectString,
    Identifier: __expectString,
  }) as any;
};

const deserializeAws_json1_1FederatedResourceAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): FederatedResourceAlreadyExistsException => {
  return take(output, {
    AssociatedGlueResource: __expectString,
    Message: __expectString,
  }) as any;
};

const deserializeAws_json1_1FederatedTable = (output: any, context: __SerdeContext): FederatedTable => {
  return take(output, {
    ConnectionName: __expectString,
    DatabaseIdentifier: __expectString,
    Identifier: __expectString,
  }) as any;
};

const deserializeAws_json1_1FederationSourceException = (
  output: any,
  context: __SerdeContext
): FederationSourceException => {
  return take(output, {
    FederationSourceErrorCode: __expectString,
    Message: __expectString,
  }) as any;
};

const deserializeAws_json1_1FederationSourceRetryableException = (
  output: any,
  context: __SerdeContext
): FederationSourceRetryableException => {
  return take(output, {
    Message: __expectString,
  }) as any;
};

const deserializeAws_json1_1FillMissingValues = (output: any, context: __SerdeContext): FillMissingValues => {
  return take(output, {
    FilledPath: __expectString,
    ImputedPath: __expectString,
    Inputs: [, (_) => deserializeAws_json1_1OneInput(_, context)],
    Name: __expectString,
  }) as any;
};

const deserializeAws_json1_1Filter = (output: any, context: __SerdeContext): Filter => {
  return take(output, {
    Filters: [, (_) => deserializeAws_json1_1FilterExpressions(_, context)],
    Inputs: [, (_) => deserializeAws_json1_1OneInput(_, context)],
    LogicalOperator: __expectString,
    Name: __expectString,
  }) as any;
};

const deserializeAws_json1_1FilterExpression = (output: any, context: __SerdeContext): FilterExpression => {
  return take(output, {
    Negated: __expectBoolean,
    Operation: __expectString,
    Values: [, (_) => deserializeAws_json1_1FilterValues(_, context)],
  }) as any;
};

const deserializeAws_json1_1FilterExpressions = (output: any, context: __SerdeContext): FilterExpression[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1FilterExpression(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1FilterValue = (output: any, context: __SerdeContext): FilterValue => {
  return take(output, {
    Type: __expectString,
    Value: [, (_) => deserializeAws_json1_1EnclosedInStringProperties(_, context)],
  }) as any;
};

const deserializeAws_json1_1FilterValues = (output: any, context: __SerdeContext): FilterValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1FilterValue(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1FindMatchesMetrics = (output: any, context: __SerdeContext): FindMatchesMetrics => {
  return take(output, {
    AreaUnderPRCurve: __limitedParseDouble,
    ColumnImportances: [, (_) => deserializeAws_json1_1ColumnImportanceList(_, context)],
    ConfusionMatrix: [, (_) => deserializeAws_json1_1ConfusionMatrix(_, context)],
    F1: __limitedParseDouble,
    Precision: __limitedParseDouble,
    Recall: __limitedParseDouble,
  }) as any;
};

const deserializeAws_json1_1FindMatchesParameters = (output: any, context: __SerdeContext): FindMatchesParameters => {
  return take(output, {
    AccuracyCostTradeoff: __limitedParseDouble,
    EnforceProvidedLabels: __expectBoolean,
    PrecisionRecallTradeoff: __limitedParseDouble,
    PrimaryKeyColumnName: __expectString,
  }) as any;
};

const deserializeAws_json1_1FindMatchesTaskRunProperties = (
  output: any,
  context: __SerdeContext
): FindMatchesTaskRunProperties => {
  return take(output, {
    JobId: __expectString,
    JobName: __expectString,
    JobRunId: __expectString,
  }) as any;
};

const deserializeAws_json1_1GenericMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1GetBlueprintResponse = (output: any, context: __SerdeContext): GetBlueprintResponse => {
  return take(output, {
    Blueprint: [, (_) => deserializeAws_json1_1Blueprint(_, context)],
  }) as any;
};

const deserializeAws_json1_1GetBlueprintRunResponse = (
  output: any,
  context: __SerdeContext
): GetBlueprintRunResponse => {
  return take(output, {
    BlueprintRun: [, (_) => deserializeAws_json1_1BlueprintRun(_, context)],
  }) as any;
};

const deserializeAws_json1_1GetBlueprintRunsResponse = (
  output: any,
  context: __SerdeContext
): GetBlueprintRunsResponse => {
  return take(output, {
    BlueprintRuns: [, (_) => deserializeAws_json1_1BlueprintRuns(_, context)],
    NextToken: __expectString,
  }) as any;
};

const deserializeAws_json1_1GetCatalogImportStatusResponse = (
  output: any,
  context: __SerdeContext
): GetCatalogImportStatusResponse => {
  return take(output, {
    ImportStatus: [, (_) => deserializeAws_json1_1CatalogImportStatus(_, context)],
  }) as any;
};

const deserializeAws_json1_1GetClassifierResponse = (output: any, context: __SerdeContext): GetClassifierResponse => {
  return take(output, {
    Classifier: [, (_) => deserializeAws_json1_1Classifier(_, context)],
  }) as any;
};

const deserializeAws_json1_1GetClassifiersResponse = (output: any, context: __SerdeContext): GetClassifiersResponse => {
  return take(output, {
    Classifiers: [, (_) => deserializeAws_json1_1ClassifierList(_, context)],
    NextToken: __expectString,
  }) as any;
};

const deserializeAws_json1_1GetColumnStatisticsForPartitionResponse = (
  output: any,
  context: __SerdeContext
): GetColumnStatisticsForPartitionResponse => {
  return take(output, {
    ColumnStatisticsList: [, (_) => deserializeAws_json1_1ColumnStatisticsList(_, context)],
    Errors: [, (_) => deserializeAws_json1_1ColumnErrors(_, context)],
  }) as any;
};

const deserializeAws_json1_1GetColumnStatisticsForTableResponse = (
  output: any,
  context: __SerdeContext
): GetColumnStatisticsForTableResponse => {
  return take(output, {
    ColumnStatisticsList: [, (_) => deserializeAws_json1_1ColumnStatisticsList(_, context)],
    Errors: [, (_) => deserializeAws_json1_1ColumnErrors(_, context)],
  }) as any;
};

const deserializeAws_json1_1GetConnectionResponse = (output: any, context: __SerdeContext): GetConnectionResponse => {
  return take(output, {
    Connection: [, (_) => deserializeAws_json1_1Connection(_, context)],
  }) as any;
};

const deserializeAws_json1_1GetConnectionsResponse = (output: any, context: __SerdeContext): GetConnectionsResponse => {
  return take(output, {
    ConnectionList: [, (_) => deserializeAws_json1_1ConnectionList(_, context)],
    NextToken: __expectString,
  }) as any;
};

const deserializeAws_json1_1GetCrawlerMetricsResponse = (
  output: any,
  context: __SerdeContext
): GetCrawlerMetricsResponse => {
  return take(output, {
    CrawlerMetricsList: [, (_) => deserializeAws_json1_1CrawlerMetricsList(_, context)],
    NextToken: __expectString,
  }) as any;
};

const deserializeAws_json1_1GetCrawlerResponse = (output: any, context: __SerdeContext): GetCrawlerResponse => {
  return take(output, {
    Crawler: [, (_) => deserializeAws_json1_1Crawler(_, context)],
  }) as any;
};

const deserializeAws_json1_1GetCrawlersResponse = (output: any, context: __SerdeContext): GetCrawlersResponse => {
  return take(output, {
    Crawlers: [, (_) => deserializeAws_json1_1CrawlerList(_, context)],
    NextToken: __expectString,
  }) as any;
};

const deserializeAws_json1_1GetCustomEntityTypeResponse = (
  output: any,
  context: __SerdeContext
): GetCustomEntityTypeResponse => {
  return take(output, {
    ContextWords: [, (_) => deserializeAws_json1_1ContextWords(_, context)],
    Name: __expectString,
    RegexString: __expectString,
  }) as any;
};

const deserializeAws_json1_1GetDatabaseResponse = (output: any, context: __SerdeContext): GetDatabaseResponse => {
  return take(output, {
    Database: [, (_) => deserializeAws_json1_1Database(_, context)],
  }) as any;
};

const deserializeAws_json1_1GetDatabasesResponse = (output: any, context: __SerdeContext): GetDatabasesResponse => {
  return take(output, {
    DatabaseList: [, (_) => deserializeAws_json1_1DatabaseList(_, context)],
    NextToken: __expectString,
  }) as any;
};

const deserializeAws_json1_1GetDataCatalogEncryptionSettingsResponse = (
  output: any,
  context: __SerdeContext
): GetDataCatalogEncryptionSettingsResponse => {
  return take(output, {
    DataCatalogEncryptionSettings: [, (_) => deserializeAws_json1_1DataCatalogEncryptionSettings(_, context)],
  }) as any;
};

const deserializeAws_json1_1GetDataflowGraphResponse = (
  output: any,
  context: __SerdeContext
): GetDataflowGraphResponse => {
  return take(output, {
    DagEdges: [, (_) => deserializeAws_json1_1DagEdges(_, context)],
    DagNodes: [, (_) => deserializeAws_json1_1DagNodes(_, context)],
  }) as any;
};

const deserializeAws_json1_1GetDataQualityResultResponse = (
  output: any,
  context: __SerdeContext
): GetDataQualityResultResponse => {
  return take(output, {
    CompletedOn: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    DataSource: [, (_) => deserializeAws_json1_1DataSource(_, context)],
    EvaluationContext: __expectString,
    JobName: __expectString,
    JobRunId: __expectString,
    ResultId: __expectString,
    RuleResults: [, (_) => deserializeAws_json1_1DataQualityRuleResults(_, context)],
    RulesetEvaluationRunId: __expectString,
    RulesetName: __expectString,
    Score: __limitedParseDouble,
    StartedOn: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
  }) as any;
};

const deserializeAws_json1_1GetDataQualityRuleRecommendationRunResponse = (
  output: any,
  context: __SerdeContext
): GetDataQualityRuleRecommendationRunResponse => {
  return take(output, {
    CompletedOn: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    CreatedRulesetName: __expectString,
    DataSource: [, (_) => deserializeAws_json1_1DataSource(_, context)],
    ErrorString: __expectString,
    ExecutionTime: __expectInt32,
    LastModifiedOn: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    NumberOfWorkers: __expectInt32,
    RecommendedRuleset: __expectString,
    Role: __expectString,
    RunId: __expectString,
    StartedOn: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    Status: __expectString,
    Timeout: __expectInt32,
  }) as any;
};

const deserializeAws_json1_1GetDataQualityRulesetEvaluationRunResponse = (
  output: any,
  context: __SerdeContext
): GetDataQualityRulesetEvaluationRunResponse => {
  return take(output, {
    AdditionalRunOptions: [, (_) => deserializeAws_json1_1DataQualityEvaluationRunAdditionalRunOptions(_, context)],
    CompletedOn: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    DataSource: [, (_) => deserializeAws_json1_1DataSource(_, context)],
    ErrorString: __expectString,
    ExecutionTime: __expectInt32,
    LastModifiedOn: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    NumberOfWorkers: __expectInt32,
    ResultIds: [, (_) => deserializeAws_json1_1DataQualityResultIdList(_, context)],
    Role: __expectString,
    RulesetNames: [, (_) => deserializeAws_json1_1RulesetNames(_, context)],
    RunId: __expectString,
    StartedOn: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    Status: __expectString,
    Timeout: __expectInt32,
  }) as any;
};

const deserializeAws_json1_1GetDataQualityRulesetResponse = (
  output: any,
  context: __SerdeContext
): GetDataQualityRulesetResponse => {
  return take(output, {
    CreatedOn: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    Description: __expectString,
    LastModifiedOn: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    Name: __expectString,
    RecommendationRunId: __expectString,
    Ruleset: __expectString,
    TargetTable: [, (_) => deserializeAws_json1_1DataQualityTargetTable(_, context)],
  }) as any;
};

const deserializeAws_json1_1GetDevEndpointResponse = (output: any, context: __SerdeContext): GetDevEndpointResponse => {
  return take(output, {
    DevEndpoint: [, (_) => deserializeAws_json1_1DevEndpoint(_, context)],
  }) as any;
};

const deserializeAws_json1_1GetDevEndpointsResponse = (
  output: any,
  context: __SerdeContext
): GetDevEndpointsResponse => {
  return take(output, {
    DevEndpoints: [, (_) => deserializeAws_json1_1DevEndpointList(_, context)],
    NextToken: __expectString,
  }) as any;
};

const deserializeAws_json1_1GetJobBookmarkResponse = (output: any, context: __SerdeContext): GetJobBookmarkResponse => {
  return take(output, {
    JobBookmarkEntry: [, (_) => deserializeAws_json1_1JobBookmarkEntry(_, context)],
  }) as any;
};

const deserializeAws_json1_1GetJobResponse = (output: any, context: __SerdeContext): GetJobResponse => {
  return take(output, {
    Job: [, (_) => deserializeAws_json1_1Job(_, context)],
  }) as any;
};

const deserializeAws_json1_1GetJobRunResponse = (output: any, context: __SerdeContext): GetJobRunResponse => {
  return take(output, {
    JobRun: [, (_) => deserializeAws_json1_1JobRun(_, context)],
  }) as any;
};

const deserializeAws_json1_1GetJobRunsResponse = (output: any, context: __SerdeContext): GetJobRunsResponse => {
  return take(output, {
    JobRuns: [, (_) => deserializeAws_json1_1JobRunList(_, context)],
    NextToken: __expectString,
  }) as any;
};

const deserializeAws_json1_1GetJobsResponse = (output: any, context: __SerdeContext): GetJobsResponse => {
  return take(output, {
    Jobs: [, (_) => deserializeAws_json1_1JobList(_, context)],
    NextToken: __expectString,
  }) as any;
};

const deserializeAws_json1_1GetMappingResponse = (output: any, context: __SerdeContext): GetMappingResponse => {
  return take(output, {
    Mapping: [, (_) => deserializeAws_json1_1MappingList(_, context)],
  }) as any;
};

const deserializeAws_json1_1GetMLTaskRunResponse = (output: any, context: __SerdeContext): GetMLTaskRunResponse => {
  return take(output, {
    CompletedOn: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    ErrorString: __expectString,
    ExecutionTime: __expectInt32,
    LastModifiedOn: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    LogGroupName: __expectString,
    Properties: [, (_) => deserializeAws_json1_1TaskRunProperties(_, context)],
    StartedOn: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    Status: __expectString,
    TaskRunId: __expectString,
    TransformId: __expectString,
  }) as any;
};

const deserializeAws_json1_1GetMLTaskRunsResponse = (output: any, context: __SerdeContext): GetMLTaskRunsResponse => {
  return take(output, {
    NextToken: __expectString,
    TaskRuns: [, (_) => deserializeAws_json1_1TaskRunList(_, context)],
  }) as any;
};

const deserializeAws_json1_1GetMLTransformResponse = (output: any, context: __SerdeContext): GetMLTransformResponse => {
  return take(output, {
    CreatedOn: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    Description: __expectString,
    EvaluationMetrics: [, (_) => deserializeAws_json1_1EvaluationMetrics(_, context)],
    GlueVersion: __expectString,
    InputRecordTables: [, (_) => deserializeAws_json1_1GlueTables(_, context)],
    LabelCount: __expectInt32,
    LastModifiedOn: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    MaxCapacity: __limitedParseDouble,
    MaxRetries: __expectInt32,
    Name: __expectString,
    NumberOfWorkers: __expectInt32,
    Parameters: [, (_) => deserializeAws_json1_1TransformParameters(_, context)],
    Role: __expectString,
    Schema: [, (_) => deserializeAws_json1_1TransformSchema(_, context)],
    Status: __expectString,
    Timeout: __expectInt32,
    TransformEncryption: [, (_) => deserializeAws_json1_1TransformEncryption(_, context)],
    TransformId: __expectString,
    WorkerType: __expectString,
  }) as any;
};

const deserializeAws_json1_1GetMLTransformsResponse = (
  output: any,
  context: __SerdeContext
): GetMLTransformsResponse => {
  return take(output, {
    NextToken: __expectString,
    Transforms: [, (_) => deserializeAws_json1_1TransformList(_, context)],
  }) as any;
};

const deserializeAws_json1_1GetPartitionIndexesResponse = (
  output: any,
  context: __SerdeContext
): GetPartitionIndexesResponse => {
  return take(output, {
    NextToken: __expectString,
    PartitionIndexDescriptorList: [, (_) => deserializeAws_json1_1PartitionIndexDescriptorList(_, context)],
  }) as any;
};

const deserializeAws_json1_1GetPartitionResponse = (output: any, context: __SerdeContext): GetPartitionResponse => {
  return take(output, {
    Partition: [, (_) => deserializeAws_json1_1Partition(_, context)],
  }) as any;
};

const deserializeAws_json1_1GetPartitionsResponse = (output: any, context: __SerdeContext): GetPartitionsResponse => {
  return take(output, {
    NextToken: __expectString,
    Partitions: [, (_) => deserializeAws_json1_1PartitionList(_, context)],
  }) as any;
};

const deserializeAws_json1_1GetPlanResponse = (output: any, context: __SerdeContext): GetPlanResponse => {
  return take(output, {
    PythonScript: __expectString,
    ScalaCode: __expectString,
  }) as any;
};

const deserializeAws_json1_1GetRegistryResponse = (output: any, context: __SerdeContext): GetRegistryResponse => {
  return take(output, {
    CreatedTime: __expectString,
    Description: __expectString,
    RegistryArn: __expectString,
    RegistryName: __expectString,
    Status: __expectString,
    UpdatedTime: __expectString,
  }) as any;
};

const deserializeAws_json1_1GetResourcePoliciesResponse = (
  output: any,
  context: __SerdeContext
): GetResourcePoliciesResponse => {
  return take(output, {
    GetResourcePoliciesResponseList: [, (_) => deserializeAws_json1_1GetResourcePoliciesResponseList(_, context)],
    NextToken: __expectString,
  }) as any;
};

const deserializeAws_json1_1GetResourcePoliciesResponseList = (output: any, context: __SerdeContext): GluePolicy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1GluePolicy(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1GetResourcePolicyResponse = (
  output: any,
  context: __SerdeContext
): GetResourcePolicyResponse => {
  return take(output, {
    CreateTime: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    PolicyHash: __expectString,
    PolicyInJson: __expectString,
    UpdateTime: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
  }) as any;
};

const deserializeAws_json1_1GetSchemaByDefinitionResponse = (
  output: any,
  context: __SerdeContext
): GetSchemaByDefinitionResponse => {
  return take(output, {
    CreatedTime: __expectString,
    DataFormat: __expectString,
    SchemaArn: __expectString,
    SchemaVersionId: __expectString,
    Status: __expectString,
  }) as any;
};

const deserializeAws_json1_1GetSchemaResponse = (output: any, context: __SerdeContext): GetSchemaResponse => {
  return take(output, {
    Compatibility: __expectString,
    CreatedTime: __expectString,
    DataFormat: __expectString,
    Description: __expectString,
    LatestSchemaVersion: __expectLong,
    NextSchemaVersion: __expectLong,
    RegistryArn: __expectString,
    RegistryName: __expectString,
    SchemaArn: __expectString,
    SchemaCheckpoint: __expectLong,
    SchemaName: __expectString,
    SchemaStatus: __expectString,
    UpdatedTime: __expectString,
  }) as any;
};

const deserializeAws_json1_1GetSchemaVersionResponse = (
  output: any,
  context: __SerdeContext
): GetSchemaVersionResponse => {
  return take(output, {
    CreatedTime: __expectString,
    DataFormat: __expectString,
    SchemaArn: __expectString,
    SchemaDefinition: __expectString,
    SchemaVersionId: __expectString,
    Status: __expectString,
    VersionNumber: __expectLong,
  }) as any;
};

const deserializeAws_json1_1GetSchemaVersionsDiffResponse = (
  output: any,
  context: __SerdeContext
): GetSchemaVersionsDiffResponse => {
  return take(output, {
    Diff: __expectString,
  }) as any;
};

const deserializeAws_json1_1GetSecurityConfigurationResponse = (
  output: any,
  context: __SerdeContext
): GetSecurityConfigurationResponse => {
  return take(output, {
    SecurityConfiguration: [, (_) => deserializeAws_json1_1SecurityConfiguration(_, context)],
  }) as any;
};

const deserializeAws_json1_1GetSecurityConfigurationsResponse = (
  output: any,
  context: __SerdeContext
): GetSecurityConfigurationsResponse => {
  return take(output, {
    NextToken: __expectString,
    SecurityConfigurations: [, (_) => deserializeAws_json1_1SecurityConfigurationList(_, context)],
  }) as any;
};

const deserializeAws_json1_1GetSessionResponse = (output: any, context: __SerdeContext): GetSessionResponse => {
  return take(output, {
    Session: [, (_) => deserializeAws_json1_1Session(_, context)],
  }) as any;
};

const deserializeAws_json1_1GetStatementResponse = (output: any, context: __SerdeContext): GetStatementResponse => {
  return take(output, {
    Statement: [, (_) => deserializeAws_json1_1Statement(_, context)],
  }) as any;
};

const deserializeAws_json1_1GetTableResponse = (output: any, context: __SerdeContext): GetTableResponse => {
  return take(output, {
    Table: [, (_) => deserializeAws_json1_1Table(_, context)],
  }) as any;
};

const deserializeAws_json1_1GetTablesResponse = (output: any, context: __SerdeContext): GetTablesResponse => {
  return take(output, {
    NextToken: __expectString,
    TableList: [, (_) => deserializeAws_json1_1TableList(_, context)],
  }) as any;
};

const deserializeAws_json1_1GetTableVersionResponse = (
  output: any,
  context: __SerdeContext
): GetTableVersionResponse => {
  return take(output, {
    TableVersion: [, (_) => deserializeAws_json1_1TableVersion(_, context)],
  }) as any;
};

const deserializeAws_json1_1GetTableVersionsList = (output: any, context: __SerdeContext): TableVersion[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1TableVersion(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1GetTableVersionsResponse = (
  output: any,
  context: __SerdeContext
): GetTableVersionsResponse => {
  return take(output, {
    NextToken: __expectString,
    TableVersions: [, (_) => deserializeAws_json1_1GetTableVersionsList(_, context)],
  }) as any;
};

const deserializeAws_json1_1GetTagsResponse = (output: any, context: __SerdeContext): GetTagsResponse => {
  return take(output, {
    Tags: [, (_) => deserializeAws_json1_1TagsMap(_, context)],
  }) as any;
};

const deserializeAws_json1_1GetTriggerResponse = (output: any, context: __SerdeContext): GetTriggerResponse => {
  return take(output, {
    Trigger: [, (_) => deserializeAws_json1_1Trigger(_, context)],
  }) as any;
};

const deserializeAws_json1_1GetTriggersResponse = (output: any, context: __SerdeContext): GetTriggersResponse => {
  return take(output, {
    NextToken: __expectString,
    Triggers: [, (_) => deserializeAws_json1_1TriggerList(_, context)],
  }) as any;
};

const deserializeAws_json1_1GetUnfilteredPartitionMetadataResponse = (
  output: any,
  context: __SerdeContext
): GetUnfilteredPartitionMetadataResponse => {
  return take(output, {
    AuthorizedColumns: [, (_) => deserializeAws_json1_1NameStringList(_, context)],
    IsRegisteredWithLakeFormation: __expectBoolean,
    Partition: [, (_) => deserializeAws_json1_1Partition(_, context)],
  }) as any;
};

const deserializeAws_json1_1GetUnfilteredPartitionsMetadataResponse = (
  output: any,
  context: __SerdeContext
): GetUnfilteredPartitionsMetadataResponse => {
  return take(output, {
    NextToken: __expectString,
    UnfilteredPartitions: [, (_) => deserializeAws_json1_1UnfilteredPartitionList(_, context)],
  }) as any;
};

const deserializeAws_json1_1GetUnfilteredTableMetadataResponse = (
  output: any,
  context: __SerdeContext
): GetUnfilteredTableMetadataResponse => {
  return take(output, {
    AuthorizedColumns: [, (_) => deserializeAws_json1_1NameStringList(_, context)],
    CellFilters: [, (_) => deserializeAws_json1_1ColumnRowFilterList(_, context)],
    IsRegisteredWithLakeFormation: __expectBoolean,
    Table: [, (_) => deserializeAws_json1_1Table(_, context)],
  }) as any;
};

const deserializeAws_json1_1GetUserDefinedFunctionResponse = (
  output: any,
  context: __SerdeContext
): GetUserDefinedFunctionResponse => {
  return take(output, {
    UserDefinedFunction: [, (_) => deserializeAws_json1_1UserDefinedFunction(_, context)],
  }) as any;
};

const deserializeAws_json1_1GetUserDefinedFunctionsResponse = (
  output: any,
  context: __SerdeContext
): GetUserDefinedFunctionsResponse => {
  return take(output, {
    NextToken: __expectString,
    UserDefinedFunctions: [, (_) => deserializeAws_json1_1UserDefinedFunctionList(_, context)],
  }) as any;
};

const deserializeAws_json1_1GetWorkflowResponse = (output: any, context: __SerdeContext): GetWorkflowResponse => {
  return take(output, {
    Workflow: [, (_) => deserializeAws_json1_1Workflow(_, context)],
  }) as any;
};

const deserializeAws_json1_1GetWorkflowRunPropertiesResponse = (
  output: any,
  context: __SerdeContext
): GetWorkflowRunPropertiesResponse => {
  return take(output, {
    RunProperties: [, (_) => deserializeAws_json1_1WorkflowRunProperties(_, context)],
  }) as any;
};

const deserializeAws_json1_1GetWorkflowRunResponse = (output: any, context: __SerdeContext): GetWorkflowRunResponse => {
  return take(output, {
    Run: [, (_) => deserializeAws_json1_1WorkflowRun(_, context)],
  }) as any;
};

const deserializeAws_json1_1GetWorkflowRunsResponse = (
  output: any,
  context: __SerdeContext
): GetWorkflowRunsResponse => {
  return take(output, {
    NextToken: __expectString,
    Runs: [, (_) => deserializeAws_json1_1WorkflowRuns(_, context)],
  }) as any;
};

const deserializeAws_json1_1GlueEncryptionException = (
  output: any,
  context: __SerdeContext
): GlueEncryptionException => {
  return take(output, {
    Message: __expectString,
  }) as any;
};

const deserializeAws_json1_1GluePolicy = (output: any, context: __SerdeContext): GluePolicy => {
  return take(output, {
    CreateTime: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    PolicyHash: __expectString,
    PolicyInJson: __expectString,
    UpdateTime: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
  }) as any;
};

const deserializeAws_json1_1GlueSchema = (output: any, context: __SerdeContext): GlueSchema => {
  return take(output, {
    Columns: [, (_) => deserializeAws_json1_1GlueStudioSchemaColumnList(_, context)],
  }) as any;
};

const deserializeAws_json1_1GlueSchemas = (output: any, context: __SerdeContext): GlueSchema[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1GlueSchema(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1GlueStudioPathList = (output: any, context: __SerdeContext): string[][] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1EnclosedInStringProperties(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1GlueStudioSchemaColumn = (output: any, context: __SerdeContext): GlueStudioSchemaColumn => {
  return take(output, {
    Name: __expectString,
    Type: __expectString,
  }) as any;
};

const deserializeAws_json1_1GlueStudioSchemaColumnList = (
  output: any,
  context: __SerdeContext
): GlueStudioSchemaColumn[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1GlueStudioSchemaColumn(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1GlueTable = (output: any, context: __SerdeContext): GlueTable => {
  return take(output, {
    AdditionalOptions: [, (_) => deserializeAws_json1_1GlueTableAdditionalOptions(_, context)],
    CatalogId: __expectString,
    ConnectionName: __expectString,
    DatabaseName: __expectString,
    TableName: __expectString,
  }) as any;
};

const deserializeAws_json1_1GlueTableAdditionalOptions = (
  output: any,
  context: __SerdeContext
): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1GlueTables = (output: any, context: __SerdeContext): GlueTable[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1GlueTable(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1GovernedCatalogSource = (output: any, context: __SerdeContext): GovernedCatalogSource => {
  return take(output, {
    AdditionalOptions: [, (_) => deserializeAws_json1_1S3SourceAdditionalOptions(_, context)],
    Database: __expectString,
    Name: __expectString,
    PartitionPredicate: __expectString,
    Table: __expectString,
  }) as any;
};

const deserializeAws_json1_1GovernedCatalogTarget = (output: any, context: __SerdeContext): GovernedCatalogTarget => {
  return take(output, {
    Database: __expectString,
    Inputs: [, (_) => deserializeAws_json1_1OneInput(_, context)],
    Name: __expectString,
    PartitionKeys: [, (_) => deserializeAws_json1_1GlueStudioPathList(_, context)],
    SchemaChangePolicy: [, (_) => deserializeAws_json1_1CatalogSchemaChangePolicy(_, context)],
    Table: __expectString,
  }) as any;
};

const deserializeAws_json1_1GrokClassifier = (output: any, context: __SerdeContext): GrokClassifier => {
  return take(output, {
    Classification: __expectString,
    CreationTime: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    CustomPatterns: __expectString,
    GrokPattern: __expectString,
    LastUpdated: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    Name: __expectString,
    Version: __expectLong,
  }) as any;
};

const deserializeAws_json1_1IdempotentParameterMismatchException = (
  output: any,
  context: __SerdeContext
): IdempotentParameterMismatchException => {
  return take(output, {
    Message: __expectString,
  }) as any;
};

const deserializeAws_json1_1IllegalBlueprintStateException = (
  output: any,
  context: __SerdeContext
): IllegalBlueprintStateException => {
  return take(output, {
    Message: __expectString,
  }) as any;
};

const deserializeAws_json1_1IllegalSessionStateException = (
  output: any,
  context: __SerdeContext
): IllegalSessionStateException => {
  return take(output, {
    Message: __expectString,
  }) as any;
};

const deserializeAws_json1_1IllegalWorkflowStateException = (
  output: any,
  context: __SerdeContext
): IllegalWorkflowStateException => {
  return take(output, {
    Message: __expectString,
  }) as any;
};

const deserializeAws_json1_1ImportCatalogToGlueResponse = (
  output: any,
  context: __SerdeContext
): ImportCatalogToGlueResponse => {
  return take(output, {}) as any;
};

const deserializeAws_json1_1ImportLabelsTaskRunProperties = (
  output: any,
  context: __SerdeContext
): ImportLabelsTaskRunProperties => {
  return take(output, {
    InputS3Path: __expectString,
    Replace: __expectBoolean,
  }) as any;
};

const deserializeAws_json1_1InternalServiceException = (
  output: any,
  context: __SerdeContext
): InternalServiceException => {
  return take(output, {
    Message: __expectString,
  }) as any;
};

const deserializeAws_json1_1InvalidInputException = (output: any, context: __SerdeContext): InvalidInputException => {
  return take(output, {
    FromFederationSource: __expectBoolean,
    Message: __expectString,
  }) as any;
};

const deserializeAws_json1_1InvalidStateException = (output: any, context: __SerdeContext): InvalidStateException => {
  return take(output, {
    Message: __expectString,
  }) as any;
};

const deserializeAws_json1_1JDBCConnectorOptions = (output: any, context: __SerdeContext): JDBCConnectorOptions => {
  return take(output, {
    DataTypeMapping: [, (_) => deserializeAws_json1_1JDBCDataTypeMapping(_, context)],
    FilterPredicate: __expectString,
    JobBookmarkKeys: [, (_) => deserializeAws_json1_1EnclosedInStringProperties(_, context)],
    JobBookmarkKeysSortOrder: __expectString,
    LowerBound: __expectLong,
    NumPartitions: __expectLong,
    PartitionColumn: __expectString,
    UpperBound: __expectLong,
  }) as any;
};

const deserializeAws_json1_1JDBCConnectorSource = (output: any, context: __SerdeContext): JDBCConnectorSource => {
  return take(output, {
    AdditionalOptions: [, (_) => deserializeAws_json1_1JDBCConnectorOptions(_, context)],
    ConnectionName: __expectString,
    ConnectionTable: __expectString,
    ConnectionType: __expectString,
    ConnectorName: __expectString,
    Name: __expectString,
    OutputSchemas: [, (_) => deserializeAws_json1_1GlueSchemas(_, context)],
    Query: __expectString,
  }) as any;
};

const deserializeAws_json1_1JDBCConnectorTarget = (output: any, context: __SerdeContext): JDBCConnectorTarget => {
  return take(output, {
    AdditionalOptions: [, (_) => deserializeAws_json1_1AdditionalOptions(_, context)],
    ConnectionName: __expectString,
    ConnectionTable: __expectString,
    ConnectionType: __expectString,
    ConnectorName: __expectString,
    Inputs: [, (_) => deserializeAws_json1_1OneInput(_, context)],
    Name: __expectString,
    OutputSchemas: [, (_) => deserializeAws_json1_1GlueSchemas(_, context)],
  }) as any;
};

const deserializeAws_json1_1JDBCDataTypeMapping = (
  output: any,
  context: __SerdeContext
): Record<string, GlueRecordType | string> => {
  return Object.entries(output).reduce(
    (acc: Record<string, GlueRecordType | string>, [key, value]: [JDBCDataType | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = __expectString(value) as any;
      return acc;
    },
    {}
  );
};

const deserializeAws_json1_1JdbcTarget = (output: any, context: __SerdeContext): JdbcTarget => {
  return take(output, {
    ConnectionName: __expectString,
    EnableAdditionalMetadata: [, (_) => deserializeAws_json1_1EnableAdditionalMetadata(_, context)],
    Exclusions: [, (_) => deserializeAws_json1_1PathList(_, context)],
    Path: __expectString,
  }) as any;
};

const deserializeAws_json1_1JdbcTargetList = (output: any, context: __SerdeContext): JdbcTarget[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1JdbcTarget(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Job = (output: any, context: __SerdeContext): Job => {
  return take(output, {
    AllocatedCapacity: __expectInt32,
    CodeGenConfigurationNodes: [, (_) => deserializeAws_json1_1CodeGenConfigurationNodes(_, context)],
    Command: [, (_) => deserializeAws_json1_1JobCommand(_, context)],
    Connections: [, (_) => deserializeAws_json1_1ConnectionsList(_, context)],
    CreatedOn: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    DefaultArguments: [, (_) => deserializeAws_json1_1GenericMap(_, context)],
    Description: __expectString,
    ExecutionClass: __expectString,
    ExecutionProperty: [, (_) => deserializeAws_json1_1ExecutionProperty(_, context)],
    GlueVersion: __expectString,
    LastModifiedOn: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    LogUri: __expectString,
    MaxCapacity: __limitedParseDouble,
    MaxRetries: __expectInt32,
    Name: __expectString,
    NonOverridableArguments: [, (_) => deserializeAws_json1_1GenericMap(_, context)],
    NotificationProperty: [, (_) => deserializeAws_json1_1NotificationProperty(_, context)],
    NumberOfWorkers: __expectInt32,
    Role: __expectString,
    SecurityConfiguration: __expectString,
    SourceControlDetails: [, (_) => deserializeAws_json1_1SourceControlDetails(_, context)],
    Timeout: __expectInt32,
    WorkerType: __expectString,
  }) as any;
};

const deserializeAws_json1_1JobBookmarkEntry = (output: any, context: __SerdeContext): JobBookmarkEntry => {
  return take(output, {
    Attempt: __expectInt32,
    JobBookmark: __expectString,
    JobName: __expectString,
    PreviousRunId: __expectString,
    Run: __expectInt32,
    RunId: __expectString,
    Version: __expectInt32,
  }) as any;
};

const deserializeAws_json1_1JobBookmarksEncryption = (output: any, context: __SerdeContext): JobBookmarksEncryption => {
  return take(output, {
    JobBookmarksEncryptionMode: __expectString,
    KmsKeyArn: __expectString,
  }) as any;
};

const deserializeAws_json1_1JobCommand = (output: any, context: __SerdeContext): JobCommand => {
  return take(output, {
    Name: __expectString,
    PythonVersion: __expectString,
    ScriptLocation: __expectString,
  }) as any;
};

const deserializeAws_json1_1JobList = (output: any, context: __SerdeContext): Job[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1Job(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1JobNameList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1JobNodeDetails = (output: any, context: __SerdeContext): JobNodeDetails => {
  return take(output, {
    JobRuns: [, (_) => deserializeAws_json1_1JobRunList(_, context)],
  }) as any;
};

const deserializeAws_json1_1JobRun = (output: any, context: __SerdeContext): JobRun => {
  return take(output, {
    AllocatedCapacity: __expectInt32,
    Arguments: [, (_) => deserializeAws_json1_1GenericMap(_, context)],
    Attempt: __expectInt32,
    CompletedOn: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    DPUSeconds: __limitedParseDouble,
    ErrorMessage: __expectString,
    ExecutionClass: __expectString,
    ExecutionTime: __expectInt32,
    GlueVersion: __expectString,
    Id: __expectString,
    JobName: __expectString,
    JobRunState: __expectString,
    LastModifiedOn: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    LogGroupName: __expectString,
    MaxCapacity: __limitedParseDouble,
    NotificationProperty: [, (_) => deserializeAws_json1_1NotificationProperty(_, context)],
    NumberOfWorkers: __expectInt32,
    PredecessorRuns: [, (_) => deserializeAws_json1_1PredecessorList(_, context)],
    PreviousRunId: __expectString,
    SecurityConfiguration: __expectString,
    StartedOn: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    Timeout: __expectInt32,
    TriggerName: __expectString,
    WorkerType: __expectString,
  }) as any;
};

const deserializeAws_json1_1JobRunList = (output: any, context: __SerdeContext): JobRun[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1JobRun(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Join = (output: any, context: __SerdeContext): Join => {
  return take(output, {
    Columns: [, (_) => deserializeAws_json1_1JoinColumns(_, context)],
    Inputs: [, (_) => deserializeAws_json1_1TwoInputs(_, context)],
    JoinType: __expectString,
    Name: __expectString,
  }) as any;
};

const deserializeAws_json1_1JoinColumn = (output: any, context: __SerdeContext): JoinColumn => {
  return take(output, {
    From: __expectString,
    Keys: [, (_) => deserializeAws_json1_1GlueStudioPathList(_, context)],
  }) as any;
};

const deserializeAws_json1_1JoinColumns = (output: any, context: __SerdeContext): JoinColumn[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1JoinColumn(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1JsonClassifier = (output: any, context: __SerdeContext): JsonClassifier => {
  return take(output, {
    CreationTime: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    JsonPath: __expectString,
    LastUpdated: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    Name: __expectString,
    Version: __expectLong,
  }) as any;
};

const deserializeAws_json1_1KafkaStreamingSourceOptions = (
  output: any,
  context: __SerdeContext
): KafkaStreamingSourceOptions => {
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
    SubscribePattern: __expectString,
    TopicName: __expectString,
  }) as any;
};

const deserializeAws_json1_1KeySchemaElement = (output: any, context: __SerdeContext): KeySchemaElement => {
  return take(output, {
    Name: __expectString,
    Type: __expectString,
  }) as any;
};

const deserializeAws_json1_1KeySchemaElementList = (output: any, context: __SerdeContext): KeySchemaElement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1KeySchemaElement(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1KinesisStreamingSourceOptions = (
  output: any,
  context: __SerdeContext
): KinesisStreamingSourceOptions => {
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
    StreamArn: __expectString,
    StreamName: __expectString,
  }) as any;
};

const deserializeAws_json1_1LabelingSetGenerationTaskRunProperties = (
  output: any,
  context: __SerdeContext
): LabelingSetGenerationTaskRunProperties => {
  return take(output, {
    OutputS3Path: __expectString,
  }) as any;
};

const deserializeAws_json1_1LakeFormationConfiguration = (
  output: any,
  context: __SerdeContext
): LakeFormationConfiguration => {
  return take(output, {
    AccountId: __expectString,
    UseLakeFormationCredentials: __expectBoolean,
  }) as any;
};

const deserializeAws_json1_1LastActiveDefinition = (output: any, context: __SerdeContext): LastActiveDefinition => {
  return take(output, {
    BlueprintLocation: __expectString,
    BlueprintServiceLocation: __expectString,
    Description: __expectString,
    LastModifiedOn: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    ParameterSpec: __expectString,
  }) as any;
};

const deserializeAws_json1_1LastCrawlInfo = (output: any, context: __SerdeContext): LastCrawlInfo => {
  return take(output, {
    ErrorMessage: __expectString,
    LogGroup: __expectString,
    LogStream: __expectString,
    MessagePrefix: __expectString,
    StartTime: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    Status: __expectString,
  }) as any;
};

const deserializeAws_json1_1LimitedPathList = (output: any, context: __SerdeContext): string[][] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1LimitedStringList(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1LimitedStringList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1LineageConfiguration = (output: any, context: __SerdeContext): LineageConfiguration => {
  return take(output, {
    CrawlerLineageSettings: __expectString,
  }) as any;
};

const deserializeAws_json1_1ListBlueprintsResponse = (output: any, context: __SerdeContext): ListBlueprintsResponse => {
  return take(output, {
    Blueprints: [, (_) => deserializeAws_json1_1BlueprintNames(_, context)],
    NextToken: __expectString,
  }) as any;
};

const deserializeAws_json1_1ListCrawlersResponse = (output: any, context: __SerdeContext): ListCrawlersResponse => {
  return take(output, {
    CrawlerNames: [, (_) => deserializeAws_json1_1CrawlerNameList(_, context)],
    NextToken: __expectString,
  }) as any;
};

const deserializeAws_json1_1ListCrawlsResponse = (output: any, context: __SerdeContext): ListCrawlsResponse => {
  return take(output, {
    Crawls: [, (_) => deserializeAws_json1_1CrawlerHistoryList(_, context)],
    NextToken: __expectString,
  }) as any;
};

const deserializeAws_json1_1ListCustomEntityTypesResponse = (
  output: any,
  context: __SerdeContext
): ListCustomEntityTypesResponse => {
  return take(output, {
    CustomEntityTypes: [, (_) => deserializeAws_json1_1CustomEntityTypes(_, context)],
    NextToken: __expectString,
  }) as any;
};

const deserializeAws_json1_1ListDataQualityResultsResponse = (
  output: any,
  context: __SerdeContext
): ListDataQualityResultsResponse => {
  return take(output, {
    NextToken: __expectString,
    Results: [, (_) => deserializeAws_json1_1DataQualityResultDescriptionList(_, context)],
  }) as any;
};

const deserializeAws_json1_1ListDataQualityRuleRecommendationRunsResponse = (
  output: any,
  context: __SerdeContext
): ListDataQualityRuleRecommendationRunsResponse => {
  return take(output, {
    NextToken: __expectString,
    Runs: [, (_) => deserializeAws_json1_1DataQualityRuleRecommendationRunList(_, context)],
  }) as any;
};

const deserializeAws_json1_1ListDataQualityRulesetEvaluationRunsResponse = (
  output: any,
  context: __SerdeContext
): ListDataQualityRulesetEvaluationRunsResponse => {
  return take(output, {
    NextToken: __expectString,
    Runs: [, (_) => deserializeAws_json1_1DataQualityRulesetEvaluationRunList(_, context)],
  }) as any;
};

const deserializeAws_json1_1ListDataQualityRulesetsResponse = (
  output: any,
  context: __SerdeContext
): ListDataQualityRulesetsResponse => {
  return take(output, {
    NextToken: __expectString,
    Rulesets: [, (_) => deserializeAws_json1_1DataQualityRulesetList(_, context)],
  }) as any;
};

const deserializeAws_json1_1ListDevEndpointsResponse = (
  output: any,
  context: __SerdeContext
): ListDevEndpointsResponse => {
  return take(output, {
    DevEndpointNames: [, (_) => deserializeAws_json1_1DevEndpointNameList(_, context)],
    NextToken: __expectString,
  }) as any;
};

const deserializeAws_json1_1ListJobsResponse = (output: any, context: __SerdeContext): ListJobsResponse => {
  return take(output, {
    JobNames: [, (_) => deserializeAws_json1_1JobNameList(_, context)],
    NextToken: __expectString,
  }) as any;
};

const deserializeAws_json1_1ListMLTransformsResponse = (
  output: any,
  context: __SerdeContext
): ListMLTransformsResponse => {
  return take(output, {
    NextToken: __expectString,
    TransformIds: [, (_) => deserializeAws_json1_1TransformIdList(_, context)],
  }) as any;
};

const deserializeAws_json1_1ListRegistriesResponse = (output: any, context: __SerdeContext): ListRegistriesResponse => {
  return take(output, {
    NextToken: __expectString,
    Registries: [, (_) => deserializeAws_json1_1RegistryListDefinition(_, context)],
  }) as any;
};

const deserializeAws_json1_1ListSchemasResponse = (output: any, context: __SerdeContext): ListSchemasResponse => {
  return take(output, {
    NextToken: __expectString,
    Schemas: [, (_) => deserializeAws_json1_1SchemaListDefinition(_, context)],
  }) as any;
};

const deserializeAws_json1_1ListSchemaVersionsResponse = (
  output: any,
  context: __SerdeContext
): ListSchemaVersionsResponse => {
  return take(output, {
    NextToken: __expectString,
    Schemas: [, (_) => deserializeAws_json1_1SchemaVersionList(_, context)],
  }) as any;
};

const deserializeAws_json1_1ListSessionsResponse = (output: any, context: __SerdeContext): ListSessionsResponse => {
  return take(output, {
    Ids: [, (_) => deserializeAws_json1_1SessionIdList(_, context)],
    NextToken: __expectString,
    Sessions: [, (_) => deserializeAws_json1_1SessionList(_, context)],
  }) as any;
};

const deserializeAws_json1_1ListStatementsResponse = (output: any, context: __SerdeContext): ListStatementsResponse => {
  return take(output, {
    NextToken: __expectString,
    Statements: [, (_) => deserializeAws_json1_1StatementList(_, context)],
  }) as any;
};

const deserializeAws_json1_1ListTriggersResponse = (output: any, context: __SerdeContext): ListTriggersResponse => {
  return take(output, {
    NextToken: __expectString,
    TriggerNames: [, (_) => deserializeAws_json1_1TriggerNameList(_, context)],
  }) as any;
};

const deserializeAws_json1_1ListWorkflowsResponse = (output: any, context: __SerdeContext): ListWorkflowsResponse => {
  return take(output, {
    NextToken: __expectString,
    Workflows: [, (_) => deserializeAws_json1_1WorkflowNames(_, context)],
  }) as any;
};

const deserializeAws_json1_1LocationMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1LocationStringList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1LongColumnStatisticsData = (
  output: any,
  context: __SerdeContext
): LongColumnStatisticsData => {
  return take(output, {
    MaximumValue: __expectLong,
    MinimumValue: __expectLong,
    NumberOfDistinctValues: __expectLong,
    NumberOfNulls: __expectLong,
  }) as any;
};

const deserializeAws_json1_1ManyInputs = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1Mapping = (output: any, context: __SerdeContext): Mapping => {
  return take(output, {
    Children: [, (_) => deserializeAws_json1_1Mappings(_, context)],
    Dropped: __expectBoolean,
    FromPath: [, (_) => deserializeAws_json1_1EnclosedInStringProperties(_, context)],
    FromType: __expectString,
    ToKey: __expectString,
    ToType: __expectString,
  }) as any;
};

const deserializeAws_json1_1MappingEntry = (output: any, context: __SerdeContext): MappingEntry => {
  return take(output, {
    SourcePath: __expectString,
    SourceTable: __expectString,
    SourceType: __expectString,
    TargetPath: __expectString,
    TargetTable: __expectString,
    TargetType: __expectString,
  }) as any;
};

const deserializeAws_json1_1MappingList = (output: any, context: __SerdeContext): MappingEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1MappingEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Mappings = (output: any, context: __SerdeContext): Mapping[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1Mapping(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1MapValue = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1MatchCriteria = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1Merge = (output: any, context: __SerdeContext): Merge => {
  return take(output, {
    Inputs: [, (_) => deserializeAws_json1_1TwoInputs(_, context)],
    Name: __expectString,
    PrimaryKeys: [, (_) => deserializeAws_json1_1GlueStudioPathList(_, context)],
    Source: __expectString,
  }) as any;
};

const deserializeAws_json1_1MetadataInfo = (output: any, context: __SerdeContext): MetadataInfo => {
  return take(output, {
    CreatedTime: __expectString,
    MetadataValue: __expectString,
    OtherMetadataValueList: [, (_) => deserializeAws_json1_1OtherMetadataValueList(_, context)],
  }) as any;
};

const deserializeAws_json1_1MetadataInfoMap = (output: any, context: __SerdeContext): Record<string, MetadataInfo> => {
  return Object.entries(output).reduce((acc: Record<string, MetadataInfo>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_json1_1MetadataInfo(value, context);
    return acc;
  }, {});
};

const deserializeAws_json1_1MicrosoftSQLServerCatalogSource = (
  output: any,
  context: __SerdeContext
): MicrosoftSQLServerCatalogSource => {
  return take(output, {
    Database: __expectString,
    Name: __expectString,
    Table: __expectString,
  }) as any;
};

const deserializeAws_json1_1MicrosoftSQLServerCatalogTarget = (
  output: any,
  context: __SerdeContext
): MicrosoftSQLServerCatalogTarget => {
  return take(output, {
    Database: __expectString,
    Inputs: [, (_) => deserializeAws_json1_1OneInput(_, context)],
    Name: __expectString,
    Table: __expectString,
  }) as any;
};

const deserializeAws_json1_1MLTransform = (output: any, context: __SerdeContext): MLTransform => {
  return take(output, {
    CreatedOn: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    Description: __expectString,
    EvaluationMetrics: [, (_) => deserializeAws_json1_1EvaluationMetrics(_, context)],
    GlueVersion: __expectString,
    InputRecordTables: [, (_) => deserializeAws_json1_1GlueTables(_, context)],
    LabelCount: __expectInt32,
    LastModifiedOn: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    MaxCapacity: __limitedParseDouble,
    MaxRetries: __expectInt32,
    Name: __expectString,
    NumberOfWorkers: __expectInt32,
    Parameters: [, (_) => deserializeAws_json1_1TransformParameters(_, context)],
    Role: __expectString,
    Schema: [, (_) => deserializeAws_json1_1TransformSchema(_, context)],
    Status: __expectString,
    Timeout: __expectInt32,
    TransformEncryption: [, (_) => deserializeAws_json1_1TransformEncryption(_, context)],
    TransformId: __expectString,
    WorkerType: __expectString,
  }) as any;
};

const deserializeAws_json1_1MLTransformNotReadyException = (
  output: any,
  context: __SerdeContext
): MLTransformNotReadyException => {
  return take(output, {
    Message: __expectString,
  }) as any;
};

const deserializeAws_json1_1MLUserDataEncryption = (output: any, context: __SerdeContext): MLUserDataEncryption => {
  return take(output, {
    KmsKeyId: __expectString,
    MlUserDataEncryptionMode: __expectString,
  }) as any;
};

const deserializeAws_json1_1MongoDBTarget = (output: any, context: __SerdeContext): MongoDBTarget => {
  return take(output, {
    ConnectionName: __expectString,
    Path: __expectString,
    ScanAll: __expectBoolean,
  }) as any;
};

const deserializeAws_json1_1MongoDBTargetList = (output: any, context: __SerdeContext): MongoDBTarget[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1MongoDBTarget(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1MySQLCatalogSource = (output: any, context: __SerdeContext): MySQLCatalogSource => {
  return take(output, {
    Database: __expectString,
    Name: __expectString,
    Table: __expectString,
  }) as any;
};

const deserializeAws_json1_1MySQLCatalogTarget = (output: any, context: __SerdeContext): MySQLCatalogTarget => {
  return take(output, {
    Database: __expectString,
    Inputs: [, (_) => deserializeAws_json1_1OneInput(_, context)],
    Name: __expectString,
    Table: __expectString,
  }) as any;
};

const deserializeAws_json1_1NameStringList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1Node = (output: any, context: __SerdeContext): Node => {
  return take(output, {
    CrawlerDetails: [, (_) => deserializeAws_json1_1CrawlerNodeDetails(_, context)],
    JobDetails: [, (_) => deserializeAws_json1_1JobNodeDetails(_, context)],
    Name: __expectString,
    TriggerDetails: [, (_) => deserializeAws_json1_1TriggerNodeDetails(_, context)],
    Type: __expectString,
    UniqueId: __expectString,
  }) as any;
};

const deserializeAws_json1_1NodeIdList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1NodeList = (output: any, context: __SerdeContext): Node[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1Node(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1NoScheduleException = (output: any, context: __SerdeContext): NoScheduleException => {
  return take(output, {
    Message: __expectString,
  }) as any;
};

const deserializeAws_json1_1NotificationProperty = (output: any, context: __SerdeContext): NotificationProperty => {
  return take(output, {
    NotifyDelayAfter: __expectInt32,
  }) as any;
};

const deserializeAws_json1_1NullCheckBoxList = (output: any, context: __SerdeContext): NullCheckBoxList => {
  return take(output, {
    IsEmpty: __expectBoolean,
    IsNegOne: __expectBoolean,
    IsNullString: __expectBoolean,
  }) as any;
};

const deserializeAws_json1_1NullValueField = (output: any, context: __SerdeContext): NullValueField => {
  return take(output, {
    Datatype: [, (_) => deserializeAws_json1_1Datatype(_, context)],
    Value: __expectString,
  }) as any;
};

const deserializeAws_json1_1NullValueFields = (output: any, context: __SerdeContext): NullValueField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1NullValueField(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1OneInput = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1OperationTimeoutException = (
  output: any,
  context: __SerdeContext
): OperationTimeoutException => {
  return take(output, {
    Message: __expectString,
  }) as any;
};

const deserializeAws_json1_1OracleSQLCatalogSource = (output: any, context: __SerdeContext): OracleSQLCatalogSource => {
  return take(output, {
    Database: __expectString,
    Name: __expectString,
    Table: __expectString,
  }) as any;
};

const deserializeAws_json1_1OracleSQLCatalogTarget = (output: any, context: __SerdeContext): OracleSQLCatalogTarget => {
  return take(output, {
    Database: __expectString,
    Inputs: [, (_) => deserializeAws_json1_1OneInput(_, context)],
    Name: __expectString,
    Table: __expectString,
  }) as any;
};

const deserializeAws_json1_1OrchestrationArgumentsMap = (
  output: any,
  context: __SerdeContext
): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1OrchestrationStringList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1Order = (output: any, context: __SerdeContext): Order => {
  return take(output, {
    Column: __expectString,
    SortOrder: __expectInt32,
  }) as any;
};

const deserializeAws_json1_1OrderList = (output: any, context: __SerdeContext): Order[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1Order(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1OtherMetadataValueList = (
  output: any,
  context: __SerdeContext
): OtherMetadataValueListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1OtherMetadataValueListItem(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1OtherMetadataValueListItem = (
  output: any,
  context: __SerdeContext
): OtherMetadataValueListItem => {
  return take(output, {
    CreatedTime: __expectString,
    MetadataValue: __expectString,
  }) as any;
};

const deserializeAws_json1_1ParametersMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1Partition = (output: any, context: __SerdeContext): Partition => {
  return take(output, {
    CatalogId: __expectString,
    CreationTime: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    DatabaseName: __expectString,
    LastAccessTime: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    LastAnalyzedTime: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    Parameters: [, (_) => deserializeAws_json1_1ParametersMap(_, context)],
    StorageDescriptor: [, (_) => deserializeAws_json1_1StorageDescriptor(_, context)],
    TableName: __expectString,
    Values: [, (_) => deserializeAws_json1_1ValueStringList(_, context)],
  }) as any;
};

const deserializeAws_json1_1PartitionError = (output: any, context: __SerdeContext): PartitionError => {
  return take(output, {
    ErrorDetail: [, (_) => deserializeAws_json1_1ErrorDetail(_, context)],
    PartitionValues: [, (_) => deserializeAws_json1_1ValueStringList(_, context)],
  }) as any;
};

const deserializeAws_json1_1PartitionErrors = (output: any, context: __SerdeContext): PartitionError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1PartitionError(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PartitionIndexDescriptor = (
  output: any,
  context: __SerdeContext
): PartitionIndexDescriptor => {
  return take(output, {
    BackfillErrors: [, (_) => deserializeAws_json1_1BackfillErrors(_, context)],
    IndexName: __expectString,
    IndexStatus: __expectString,
    Keys: [, (_) => deserializeAws_json1_1KeySchemaElementList(_, context)],
  }) as any;
};

const deserializeAws_json1_1PartitionIndexDescriptorList = (
  output: any,
  context: __SerdeContext
): PartitionIndexDescriptor[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1PartitionIndexDescriptor(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PartitionList = (output: any, context: __SerdeContext): Partition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1Partition(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PartitionValueList = (output: any, context: __SerdeContext): PartitionValueList => {
  return take(output, {
    Values: [, (_) => deserializeAws_json1_1ValueStringList(_, context)],
  }) as any;
};

const deserializeAws_json1_1PathList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1PermissionList = (output: any, context: __SerdeContext): (Permission | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1PermissionTypeMismatchException = (
  output: any,
  context: __SerdeContext
): PermissionTypeMismatchException => {
  return take(output, {
    Message: __expectString,
  }) as any;
};

const deserializeAws_json1_1PhysicalConnectionRequirements = (
  output: any,
  context: __SerdeContext
): PhysicalConnectionRequirements => {
  return take(output, {
    AvailabilityZone: __expectString,
    SecurityGroupIdList: [, (_) => deserializeAws_json1_1SecurityGroupIdList(_, context)],
    SubnetId: __expectString,
  }) as any;
};

const deserializeAws_json1_1PIIDetection = (output: any, context: __SerdeContext): PIIDetection => {
  return take(output, {
    EntityTypesToDetect: [, (_) => deserializeAws_json1_1EnclosedInStringProperties(_, context)],
    Inputs: [, (_) => deserializeAws_json1_1OneInput(_, context)],
    MaskValue: __expectString,
    Name: __expectString,
    OutputColumnName: __expectString,
    PiiType: __expectString,
    SampleFraction: __limitedParseDouble,
    ThresholdFraction: __limitedParseDouble,
  }) as any;
};

const deserializeAws_json1_1PostgreSQLCatalogSource = (
  output: any,
  context: __SerdeContext
): PostgreSQLCatalogSource => {
  return take(output, {
    Database: __expectString,
    Name: __expectString,
    Table: __expectString,
  }) as any;
};

const deserializeAws_json1_1PostgreSQLCatalogTarget = (
  output: any,
  context: __SerdeContext
): PostgreSQLCatalogTarget => {
  return take(output, {
    Database: __expectString,
    Inputs: [, (_) => deserializeAws_json1_1OneInput(_, context)],
    Name: __expectString,
    Table: __expectString,
  }) as any;
};

const deserializeAws_json1_1Predecessor = (output: any, context: __SerdeContext): Predecessor => {
  return take(output, {
    JobName: __expectString,
    RunId: __expectString,
  }) as any;
};

const deserializeAws_json1_1PredecessorList = (output: any, context: __SerdeContext): Predecessor[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1Predecessor(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Predicate = (output: any, context: __SerdeContext): Predicate => {
  return take(output, {
    Conditions: [, (_) => deserializeAws_json1_1ConditionList(_, context)],
    Logical: __expectString,
  }) as any;
};

const deserializeAws_json1_1PrincipalPermissions = (output: any, context: __SerdeContext): PrincipalPermissions => {
  return take(output, {
    Permissions: [, (_) => deserializeAws_json1_1PermissionList(_, context)],
    Principal: [, (_) => deserializeAws_json1_1DataLakePrincipal(_, context)],
  }) as any;
};

const deserializeAws_json1_1PrincipalPermissionsList = (
  output: any,
  context: __SerdeContext
): PrincipalPermissions[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1PrincipalPermissions(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PublicKeysList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1PutDataCatalogEncryptionSettingsResponse = (
  output: any,
  context: __SerdeContext
): PutDataCatalogEncryptionSettingsResponse => {
  return take(output, {}) as any;
};

const deserializeAws_json1_1PutResourcePolicyResponse = (
  output: any,
  context: __SerdeContext
): PutResourcePolicyResponse => {
  return take(output, {
    PolicyHash: __expectString,
  }) as any;
};

const deserializeAws_json1_1PutSchemaVersionMetadataResponse = (
  output: any,
  context: __SerdeContext
): PutSchemaVersionMetadataResponse => {
  return take(output, {
    LatestVersion: __expectBoolean,
    MetadataKey: __expectString,
    MetadataValue: __expectString,
    RegistryName: __expectString,
    SchemaArn: __expectString,
    SchemaName: __expectString,
    SchemaVersionId: __expectString,
    VersionNumber: __expectLong,
  }) as any;
};

const deserializeAws_json1_1PutWorkflowRunPropertiesResponse = (
  output: any,
  context: __SerdeContext
): PutWorkflowRunPropertiesResponse => {
  return take(output, {}) as any;
};

const deserializeAws_json1_1QuerySchemaVersionMetadataResponse = (
  output: any,
  context: __SerdeContext
): QuerySchemaVersionMetadataResponse => {
  return take(output, {
    MetadataInfoMap: [, (_) => deserializeAws_json1_1MetadataInfoMap(_, context)],
    NextToken: __expectString,
    SchemaVersionId: __expectString,
  }) as any;
};

const deserializeAws_json1_1RecrawlPolicy = (output: any, context: __SerdeContext): RecrawlPolicy => {
  return take(output, {
    RecrawlBehavior: __expectString,
  }) as any;
};

const deserializeAws_json1_1RedshiftSource = (output: any, context: __SerdeContext): RedshiftSource => {
  return take(output, {
    Database: __expectString,
    Name: __expectString,
    RedshiftTmpDir: __expectString,
    Table: __expectString,
    TmpDirIAMRole: __expectString,
  }) as any;
};

const deserializeAws_json1_1RedshiftTarget = (output: any, context: __SerdeContext): RedshiftTarget => {
  return take(output, {
    Database: __expectString,
    Inputs: [, (_) => deserializeAws_json1_1OneInput(_, context)],
    Name: __expectString,
    RedshiftTmpDir: __expectString,
    Table: __expectString,
    TmpDirIAMRole: __expectString,
    UpsertRedshiftOptions: [, (_) => deserializeAws_json1_1UpsertRedshiftTargetOptions(_, context)],
  }) as any;
};

const deserializeAws_json1_1RegisterSchemaVersionResponse = (
  output: any,
  context: __SerdeContext
): RegisterSchemaVersionResponse => {
  return take(output, {
    SchemaVersionId: __expectString,
    Status: __expectString,
    VersionNumber: __expectLong,
  }) as any;
};

const deserializeAws_json1_1RegistryListDefinition = (output: any, context: __SerdeContext): RegistryListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1RegistryListItem(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1RegistryListItem = (output: any, context: __SerdeContext): RegistryListItem => {
  return take(output, {
    CreatedTime: __expectString,
    Description: __expectString,
    RegistryArn: __expectString,
    RegistryName: __expectString,
    Status: __expectString,
    UpdatedTime: __expectString,
  }) as any;
};

const deserializeAws_json1_1RelationalCatalogSource = (
  output: any,
  context: __SerdeContext
): RelationalCatalogSource => {
  return take(output, {
    Database: __expectString,
    Name: __expectString,
    Table: __expectString,
  }) as any;
};

const deserializeAws_json1_1RemoveSchemaVersionMetadataResponse = (
  output: any,
  context: __SerdeContext
): RemoveSchemaVersionMetadataResponse => {
  return take(output, {
    LatestVersion: __expectBoolean,
    MetadataKey: __expectString,
    MetadataValue: __expectString,
    RegistryName: __expectString,
    SchemaArn: __expectString,
    SchemaName: __expectString,
    SchemaVersionId: __expectString,
    VersionNumber: __expectLong,
  }) as any;
};

const deserializeAws_json1_1RenameField = (output: any, context: __SerdeContext): RenameField => {
  return take(output, {
    Inputs: [, (_) => deserializeAws_json1_1OneInput(_, context)],
    Name: __expectString,
    SourcePath: [, (_) => deserializeAws_json1_1EnclosedInStringProperties(_, context)],
    TargetPath: [, (_) => deserializeAws_json1_1EnclosedInStringProperties(_, context)],
  }) as any;
};

const deserializeAws_json1_1ResetJobBookmarkResponse = (
  output: any,
  context: __SerdeContext
): ResetJobBookmarkResponse => {
  return take(output, {
    JobBookmarkEntry: [, (_) => deserializeAws_json1_1JobBookmarkEntry(_, context)],
  }) as any;
};

const deserializeAws_json1_1ResourceNotReadyException = (
  output: any,
  context: __SerdeContext
): ResourceNotReadyException => {
  return take(output, {
    Message: __expectString,
  }) as any;
};

const deserializeAws_json1_1ResourceNumberLimitExceededException = (
  output: any,
  context: __SerdeContext
): ResourceNumberLimitExceededException => {
  return take(output, {
    Message: __expectString,
  }) as any;
};

const deserializeAws_json1_1ResourceUri = (output: any, context: __SerdeContext): ResourceUri => {
  return take(output, {
    ResourceType: __expectString,
    Uri: __expectString,
  }) as any;
};

const deserializeAws_json1_1ResourceUriList = (output: any, context: __SerdeContext): ResourceUri[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1ResourceUri(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ResumeWorkflowRunResponse = (
  output: any,
  context: __SerdeContext
): ResumeWorkflowRunResponse => {
  return take(output, {
    NodeIds: [, (_) => deserializeAws_json1_1NodeIdList(_, context)],
    RunId: __expectString,
  }) as any;
};

const deserializeAws_json1_1RulesetNames = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1RunStatementResponse = (output: any, context: __SerdeContext): RunStatementResponse => {
  return take(output, {
    Id: __expectInt32,
  }) as any;
};

const deserializeAws_json1_1S3CatalogDeltaSource = (output: any, context: __SerdeContext): S3CatalogDeltaSource => {
  return take(output, {
    AdditionalDeltaOptions: [, (_) => deserializeAws_json1_1AdditionalOptions(_, context)],
    Database: __expectString,
    Name: __expectString,
    OutputSchemas: [, (_) => deserializeAws_json1_1GlueSchemas(_, context)],
    Table: __expectString,
  }) as any;
};

const deserializeAws_json1_1S3CatalogHudiSource = (output: any, context: __SerdeContext): S3CatalogHudiSource => {
  return take(output, {
    AdditionalHudiOptions: [, (_) => deserializeAws_json1_1AdditionalOptions(_, context)],
    Database: __expectString,
    Name: __expectString,
    OutputSchemas: [, (_) => deserializeAws_json1_1GlueSchemas(_, context)],
    Table: __expectString,
  }) as any;
};

const deserializeAws_json1_1S3CatalogSource = (output: any, context: __SerdeContext): S3CatalogSource => {
  return take(output, {
    AdditionalOptions: [, (_) => deserializeAws_json1_1S3SourceAdditionalOptions(_, context)],
    Database: __expectString,
    Name: __expectString,
    PartitionPredicate: __expectString,
    Table: __expectString,
  }) as any;
};

const deserializeAws_json1_1S3CatalogTarget = (output: any, context: __SerdeContext): S3CatalogTarget => {
  return take(output, {
    Database: __expectString,
    Inputs: [, (_) => deserializeAws_json1_1OneInput(_, context)],
    Name: __expectString,
    PartitionKeys: [, (_) => deserializeAws_json1_1GlueStudioPathList(_, context)],
    SchemaChangePolicy: [, (_) => deserializeAws_json1_1CatalogSchemaChangePolicy(_, context)],
    Table: __expectString,
  }) as any;
};

const deserializeAws_json1_1S3CsvSource = (output: any, context: __SerdeContext): S3CsvSource => {
  return take(output, {
    AdditionalOptions: [, (_) => deserializeAws_json1_1S3DirectSourceAdditionalOptions(_, context)],
    CompressionType: __expectString,
    Escaper: __expectString,
    Exclusions: [, (_) => deserializeAws_json1_1EnclosedInStringProperties(_, context)],
    GroupFiles: __expectString,
    GroupSize: __expectString,
    MaxBand: __expectInt32,
    MaxFilesInBand: __expectInt32,
    Multiline: __expectBoolean,
    Name: __expectString,
    OptimizePerformance: __expectBoolean,
    OutputSchemas: [, (_) => deserializeAws_json1_1GlueSchemas(_, context)],
    Paths: [, (_) => deserializeAws_json1_1EnclosedInStringProperties(_, context)],
    QuoteChar: __expectString,
    Recurse: __expectBoolean,
    Separator: __expectString,
    SkipFirst: __expectBoolean,
    WithHeader: __expectBoolean,
    WriteHeader: __expectBoolean,
  }) as any;
};

const deserializeAws_json1_1S3DeltaCatalogTarget = (output: any, context: __SerdeContext): S3DeltaCatalogTarget => {
  return take(output, {
    AdditionalOptions: [, (_) => deserializeAws_json1_1AdditionalOptions(_, context)],
    Database: __expectString,
    Inputs: [, (_) => deserializeAws_json1_1OneInput(_, context)],
    Name: __expectString,
    PartitionKeys: [, (_) => deserializeAws_json1_1GlueStudioPathList(_, context)],
    SchemaChangePolicy: [, (_) => deserializeAws_json1_1CatalogSchemaChangePolicy(_, context)],
    Table: __expectString,
  }) as any;
};

const deserializeAws_json1_1S3DeltaDirectTarget = (output: any, context: __SerdeContext): S3DeltaDirectTarget => {
  return take(output, {
    AdditionalOptions: [, (_) => deserializeAws_json1_1AdditionalOptions(_, context)],
    Compression: __expectString,
    Format: __expectString,
    Inputs: [, (_) => deserializeAws_json1_1OneInput(_, context)],
    Name: __expectString,
    PartitionKeys: [, (_) => deserializeAws_json1_1GlueStudioPathList(_, context)],
    Path: __expectString,
    SchemaChangePolicy: [, (_) => deserializeAws_json1_1DirectSchemaChangePolicy(_, context)],
  }) as any;
};

const deserializeAws_json1_1S3DeltaSource = (output: any, context: __SerdeContext): S3DeltaSource => {
  return take(output, {
    AdditionalDeltaOptions: [, (_) => deserializeAws_json1_1AdditionalOptions(_, context)],
    AdditionalOptions: [, (_) => deserializeAws_json1_1S3DirectSourceAdditionalOptions(_, context)],
    Name: __expectString,
    OutputSchemas: [, (_) => deserializeAws_json1_1GlueSchemas(_, context)],
    Paths: [, (_) => deserializeAws_json1_1EnclosedInStringProperties(_, context)],
  }) as any;
};

const deserializeAws_json1_1S3DirectSourceAdditionalOptions = (
  output: any,
  context: __SerdeContext
): S3DirectSourceAdditionalOptions => {
  return take(output, {
    BoundedFiles: __expectLong,
    BoundedSize: __expectLong,
    EnableSamplePath: __expectBoolean,
    SamplePath: __expectString,
  }) as any;
};

const deserializeAws_json1_1S3DirectTarget = (output: any, context: __SerdeContext): S3DirectTarget => {
  return take(output, {
    Compression: __expectString,
    Format: __expectString,
    Inputs: [, (_) => deserializeAws_json1_1OneInput(_, context)],
    Name: __expectString,
    PartitionKeys: [, (_) => deserializeAws_json1_1GlueStudioPathList(_, context)],
    Path: __expectString,
    SchemaChangePolicy: [, (_) => deserializeAws_json1_1DirectSchemaChangePolicy(_, context)],
  }) as any;
};

const deserializeAws_json1_1S3Encryption = (output: any, context: __SerdeContext): S3Encryption => {
  return take(output, {
    KmsKeyArn: __expectString,
    S3EncryptionMode: __expectString,
  }) as any;
};

const deserializeAws_json1_1S3EncryptionList = (output: any, context: __SerdeContext): S3Encryption[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1S3Encryption(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1S3GlueParquetTarget = (output: any, context: __SerdeContext): S3GlueParquetTarget => {
  return take(output, {
    Compression: __expectString,
    Inputs: [, (_) => deserializeAws_json1_1OneInput(_, context)],
    Name: __expectString,
    PartitionKeys: [, (_) => deserializeAws_json1_1GlueStudioPathList(_, context)],
    Path: __expectString,
    SchemaChangePolicy: [, (_) => deserializeAws_json1_1DirectSchemaChangePolicy(_, context)],
  }) as any;
};

const deserializeAws_json1_1S3HudiCatalogTarget = (output: any, context: __SerdeContext): S3HudiCatalogTarget => {
  return take(output, {
    AdditionalOptions: [, (_) => deserializeAws_json1_1AdditionalOptions(_, context)],
    Database: __expectString,
    Inputs: [, (_) => deserializeAws_json1_1OneInput(_, context)],
    Name: __expectString,
    PartitionKeys: [, (_) => deserializeAws_json1_1GlueStudioPathList(_, context)],
    SchemaChangePolicy: [, (_) => deserializeAws_json1_1CatalogSchemaChangePolicy(_, context)],
    Table: __expectString,
  }) as any;
};

const deserializeAws_json1_1S3HudiDirectTarget = (output: any, context: __SerdeContext): S3HudiDirectTarget => {
  return take(output, {
    AdditionalOptions: [, (_) => deserializeAws_json1_1AdditionalOptions(_, context)],
    Compression: __expectString,
    Format: __expectString,
    Inputs: [, (_) => deserializeAws_json1_1OneInput(_, context)],
    Name: __expectString,
    PartitionKeys: [, (_) => deserializeAws_json1_1GlueStudioPathList(_, context)],
    Path: __expectString,
    SchemaChangePolicy: [, (_) => deserializeAws_json1_1DirectSchemaChangePolicy(_, context)],
  }) as any;
};

const deserializeAws_json1_1S3HudiSource = (output: any, context: __SerdeContext): S3HudiSource => {
  return take(output, {
    AdditionalHudiOptions: [, (_) => deserializeAws_json1_1AdditionalOptions(_, context)],
    AdditionalOptions: [, (_) => deserializeAws_json1_1S3DirectSourceAdditionalOptions(_, context)],
    Name: __expectString,
    OutputSchemas: [, (_) => deserializeAws_json1_1GlueSchemas(_, context)],
    Paths: [, (_) => deserializeAws_json1_1EnclosedInStringProperties(_, context)],
  }) as any;
};

const deserializeAws_json1_1S3JsonSource = (output: any, context: __SerdeContext): S3JsonSource => {
  return take(output, {
    AdditionalOptions: [, (_) => deserializeAws_json1_1S3DirectSourceAdditionalOptions(_, context)],
    CompressionType: __expectString,
    Exclusions: [, (_) => deserializeAws_json1_1EnclosedInStringProperties(_, context)],
    GroupFiles: __expectString,
    GroupSize: __expectString,
    JsonPath: __expectString,
    MaxBand: __expectInt32,
    MaxFilesInBand: __expectInt32,
    Multiline: __expectBoolean,
    Name: __expectString,
    OutputSchemas: [, (_) => deserializeAws_json1_1GlueSchemas(_, context)],
    Paths: [, (_) => deserializeAws_json1_1EnclosedInStringProperties(_, context)],
    Recurse: __expectBoolean,
  }) as any;
};

const deserializeAws_json1_1S3ParquetSource = (output: any, context: __SerdeContext): S3ParquetSource => {
  return take(output, {
    AdditionalOptions: [, (_) => deserializeAws_json1_1S3DirectSourceAdditionalOptions(_, context)],
    CompressionType: __expectString,
    Exclusions: [, (_) => deserializeAws_json1_1EnclosedInStringProperties(_, context)],
    GroupFiles: __expectString,
    GroupSize: __expectString,
    MaxBand: __expectInt32,
    MaxFilesInBand: __expectInt32,
    Name: __expectString,
    OutputSchemas: [, (_) => deserializeAws_json1_1GlueSchemas(_, context)],
    Paths: [, (_) => deserializeAws_json1_1EnclosedInStringProperties(_, context)],
    Recurse: __expectBoolean,
  }) as any;
};

const deserializeAws_json1_1S3SourceAdditionalOptions = (
  output: any,
  context: __SerdeContext
): S3SourceAdditionalOptions => {
  return take(output, {
    BoundedFiles: __expectLong,
    BoundedSize: __expectLong,
  }) as any;
};

const deserializeAws_json1_1S3Target = (output: any, context: __SerdeContext): S3Target => {
  return take(output, {
    ConnectionName: __expectString,
    DlqEventQueueArn: __expectString,
    EventQueueArn: __expectString,
    Exclusions: [, (_) => deserializeAws_json1_1PathList(_, context)],
    Path: __expectString,
    SampleSize: __expectInt32,
  }) as any;
};

const deserializeAws_json1_1S3TargetList = (output: any, context: __SerdeContext): S3Target[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1S3Target(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Schedule = (output: any, context: __SerdeContext): Schedule => {
  return take(output, {
    ScheduleExpression: __expectString,
    State: __expectString,
  }) as any;
};

const deserializeAws_json1_1SchedulerNotRunningException = (
  output: any,
  context: __SerdeContext
): SchedulerNotRunningException => {
  return take(output, {
    Message: __expectString,
  }) as any;
};

const deserializeAws_json1_1SchedulerRunningException = (
  output: any,
  context: __SerdeContext
): SchedulerRunningException => {
  return take(output, {
    Message: __expectString,
  }) as any;
};

const deserializeAws_json1_1SchedulerTransitioningException = (
  output: any,
  context: __SerdeContext
): SchedulerTransitioningException => {
  return take(output, {
    Message: __expectString,
  }) as any;
};

const deserializeAws_json1_1SchemaChangePolicy = (output: any, context: __SerdeContext): SchemaChangePolicy => {
  return take(output, {
    DeleteBehavior: __expectString,
    UpdateBehavior: __expectString,
  }) as any;
};

const deserializeAws_json1_1SchemaColumn = (output: any, context: __SerdeContext): SchemaColumn => {
  return take(output, {
    DataType: __expectString,
    Name: __expectString,
  }) as any;
};

const deserializeAws_json1_1SchemaId = (output: any, context: __SerdeContext): SchemaId => {
  return take(output, {
    RegistryName: __expectString,
    SchemaArn: __expectString,
    SchemaName: __expectString,
  }) as any;
};

const deserializeAws_json1_1SchemaListDefinition = (output: any, context: __SerdeContext): SchemaListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1SchemaListItem(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1SchemaListItem = (output: any, context: __SerdeContext): SchemaListItem => {
  return take(output, {
    CreatedTime: __expectString,
    Description: __expectString,
    RegistryName: __expectString,
    SchemaArn: __expectString,
    SchemaName: __expectString,
    SchemaStatus: __expectString,
    UpdatedTime: __expectString,
  }) as any;
};

const deserializeAws_json1_1SchemaReference = (output: any, context: __SerdeContext): SchemaReference => {
  return take(output, {
    SchemaId: [, (_) => deserializeAws_json1_1SchemaId(_, context)],
    SchemaVersionId: __expectString,
    SchemaVersionNumber: __expectLong,
  }) as any;
};

const deserializeAws_json1_1SchemaVersionErrorItem = (output: any, context: __SerdeContext): SchemaVersionErrorItem => {
  return take(output, {
    ErrorDetails: [, (_) => deserializeAws_json1_1ErrorDetails(_, context)],
    VersionNumber: __expectLong,
  }) as any;
};

const deserializeAws_json1_1SchemaVersionErrorList = (
  output: any,
  context: __SerdeContext
): SchemaVersionErrorItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1SchemaVersionErrorItem(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1SchemaVersionList = (output: any, context: __SerdeContext): SchemaVersionListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1SchemaVersionListItem(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1SchemaVersionListItem = (output: any, context: __SerdeContext): SchemaVersionListItem => {
  return take(output, {
    CreatedTime: __expectString,
    SchemaArn: __expectString,
    SchemaVersionId: __expectString,
    Status: __expectString,
    VersionNumber: __expectLong,
  }) as any;
};

const deserializeAws_json1_1SearchTablesResponse = (output: any, context: __SerdeContext): SearchTablesResponse => {
  return take(output, {
    NextToken: __expectString,
    TableList: [, (_) => deserializeAws_json1_1TableList(_, context)],
  }) as any;
};

const deserializeAws_json1_1SecurityConfiguration = (output: any, context: __SerdeContext): SecurityConfiguration => {
  return take(output, {
    CreatedTimeStamp: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    EncryptionConfiguration: [, (_) => deserializeAws_json1_1EncryptionConfiguration(_, context)],
    Name: __expectString,
  }) as any;
};

const deserializeAws_json1_1SecurityConfigurationList = (
  output: any,
  context: __SerdeContext
): SecurityConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1SecurityConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1SecurityGroupIdList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1SelectFields = (output: any, context: __SerdeContext): SelectFields => {
  return take(output, {
    Inputs: [, (_) => deserializeAws_json1_1OneInput(_, context)],
    Name: __expectString,
    Paths: [, (_) => deserializeAws_json1_1GlueStudioPathList(_, context)],
  }) as any;
};

const deserializeAws_json1_1SelectFromCollection = (output: any, context: __SerdeContext): SelectFromCollection => {
  return take(output, {
    Index: __expectInt32,
    Inputs: [, (_) => deserializeAws_json1_1OneInput(_, context)],
    Name: __expectString,
  }) as any;
};

const deserializeAws_json1_1SerDeInfo = (output: any, context: __SerdeContext): SerDeInfo => {
  return take(output, {
    Name: __expectString,
    Parameters: [, (_) => deserializeAws_json1_1ParametersMap(_, context)],
    SerializationLibrary: __expectString,
  }) as any;
};

const deserializeAws_json1_1Session = (output: any, context: __SerdeContext): Session => {
  return take(output, {
    Command: [, (_) => deserializeAws_json1_1SessionCommand(_, context)],
    Connections: [, (_) => deserializeAws_json1_1ConnectionsList(_, context)],
    CreatedOn: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    DefaultArguments: [, (_) => deserializeAws_json1_1OrchestrationArgumentsMap(_, context)],
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

const deserializeAws_json1_1SessionCommand = (output: any, context: __SerdeContext): SessionCommand => {
  return take(output, {
    Name: __expectString,
    PythonVersion: __expectString,
  }) as any;
};

const deserializeAws_json1_1SessionIdList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1SessionList = (output: any, context: __SerdeContext): Session[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1Session(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1SkewedInfo = (output: any, context: __SerdeContext): SkewedInfo => {
  return take(output, {
    SkewedColumnNames: [, (_) => deserializeAws_json1_1NameStringList(_, context)],
    SkewedColumnValueLocationMaps: [, (_) => deserializeAws_json1_1LocationMap(_, context)],
    SkewedColumnValues: [, (_) => deserializeAws_json1_1ColumnValueStringList(_, context)],
  }) as any;
};

const deserializeAws_json1_1SourceControlDetails = (output: any, context: __SerdeContext): SourceControlDetails => {
  return take(output, {
    AuthStrategy: __expectString,
    AuthToken: __expectString,
    Branch: __expectString,
    Folder: __expectString,
    LastCommitId: __expectString,
    Owner: __expectString,
    Provider: __expectString,
    Repository: __expectString,
  }) as any;
};

const deserializeAws_json1_1SparkConnectorSource = (output: any, context: __SerdeContext): SparkConnectorSource => {
  return take(output, {
    AdditionalOptions: [, (_) => deserializeAws_json1_1AdditionalOptions(_, context)],
    ConnectionName: __expectString,
    ConnectionType: __expectString,
    ConnectorName: __expectString,
    Name: __expectString,
    OutputSchemas: [, (_) => deserializeAws_json1_1GlueSchemas(_, context)],
  }) as any;
};

const deserializeAws_json1_1SparkConnectorTarget = (output: any, context: __SerdeContext): SparkConnectorTarget => {
  return take(output, {
    AdditionalOptions: [, (_) => deserializeAws_json1_1AdditionalOptions(_, context)],
    ConnectionName: __expectString,
    ConnectionType: __expectString,
    ConnectorName: __expectString,
    Inputs: [, (_) => deserializeAws_json1_1OneInput(_, context)],
    Name: __expectString,
    OutputSchemas: [, (_) => deserializeAws_json1_1GlueSchemas(_, context)],
  }) as any;
};

const deserializeAws_json1_1SparkSQL = (output: any, context: __SerdeContext): SparkSQL => {
  return take(output, {
    Inputs: [, (_) => deserializeAws_json1_1ManyInputs(_, context)],
    Name: __expectString,
    OutputSchemas: [, (_) => deserializeAws_json1_1GlueSchemas(_, context)],
    SqlAliases: [, (_) => deserializeAws_json1_1SqlAliases(_, context)],
    SqlQuery: __expectString,
  }) as any;
};

const deserializeAws_json1_1Spigot = (output: any, context: __SerdeContext): Spigot => {
  return take(output, {
    Inputs: [, (_) => deserializeAws_json1_1OneInput(_, context)],
    Name: __expectString,
    Path: __expectString,
    Prob: __limitedParseDouble,
    Topk: __expectInt32,
  }) as any;
};

const deserializeAws_json1_1SplitFields = (output: any, context: __SerdeContext): SplitFields => {
  return take(output, {
    Inputs: [, (_) => deserializeAws_json1_1OneInput(_, context)],
    Name: __expectString,
    Paths: [, (_) => deserializeAws_json1_1GlueStudioPathList(_, context)],
  }) as any;
};

const deserializeAws_json1_1SqlAlias = (output: any, context: __SerdeContext): SqlAlias => {
  return take(output, {
    Alias: __expectString,
    From: __expectString,
  }) as any;
};

const deserializeAws_json1_1SqlAliases = (output: any, context: __SerdeContext): SqlAlias[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1SqlAlias(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1StartBlueprintRunResponse = (
  output: any,
  context: __SerdeContext
): StartBlueprintRunResponse => {
  return take(output, {
    RunId: __expectString,
  }) as any;
};

const deserializeAws_json1_1StartCrawlerResponse = (output: any, context: __SerdeContext): StartCrawlerResponse => {
  return take(output, {}) as any;
};

const deserializeAws_json1_1StartCrawlerScheduleResponse = (
  output: any,
  context: __SerdeContext
): StartCrawlerScheduleResponse => {
  return take(output, {}) as any;
};

const deserializeAws_json1_1StartDataQualityRuleRecommendationRunResponse = (
  output: any,
  context: __SerdeContext
): StartDataQualityRuleRecommendationRunResponse => {
  return take(output, {
    RunId: __expectString,
  }) as any;
};

const deserializeAws_json1_1StartDataQualityRulesetEvaluationRunResponse = (
  output: any,
  context: __SerdeContext
): StartDataQualityRulesetEvaluationRunResponse => {
  return take(output, {
    RunId: __expectString,
  }) as any;
};

const deserializeAws_json1_1StartExportLabelsTaskRunResponse = (
  output: any,
  context: __SerdeContext
): StartExportLabelsTaskRunResponse => {
  return take(output, {
    TaskRunId: __expectString,
  }) as any;
};

const deserializeAws_json1_1StartImportLabelsTaskRunResponse = (
  output: any,
  context: __SerdeContext
): StartImportLabelsTaskRunResponse => {
  return take(output, {
    TaskRunId: __expectString,
  }) as any;
};

const deserializeAws_json1_1StartingEventBatchCondition = (
  output: any,
  context: __SerdeContext
): StartingEventBatchCondition => {
  return take(output, {
    BatchSize: __expectInt32,
    BatchWindow: __expectInt32,
  }) as any;
};

const deserializeAws_json1_1StartJobRunResponse = (output: any, context: __SerdeContext): StartJobRunResponse => {
  return take(output, {
    JobRunId: __expectString,
  }) as any;
};

const deserializeAws_json1_1StartMLEvaluationTaskRunResponse = (
  output: any,
  context: __SerdeContext
): StartMLEvaluationTaskRunResponse => {
  return take(output, {
    TaskRunId: __expectString,
  }) as any;
};

const deserializeAws_json1_1StartMLLabelingSetGenerationTaskRunResponse = (
  output: any,
  context: __SerdeContext
): StartMLLabelingSetGenerationTaskRunResponse => {
  return take(output, {
    TaskRunId: __expectString,
  }) as any;
};

const deserializeAws_json1_1StartTriggerResponse = (output: any, context: __SerdeContext): StartTriggerResponse => {
  return take(output, {
    Name: __expectString,
  }) as any;
};

const deserializeAws_json1_1StartWorkflowRunResponse = (
  output: any,
  context: __SerdeContext
): StartWorkflowRunResponse => {
  return take(output, {
    RunId: __expectString,
  }) as any;
};

const deserializeAws_json1_1Statement = (output: any, context: __SerdeContext): Statement => {
  return take(output, {
    Code: __expectString,
    CompletedOn: __expectLong,
    Id: __expectInt32,
    Output: [, (_) => deserializeAws_json1_1StatementOutput(_, context)],
    Progress: __limitedParseDouble,
    StartedOn: __expectLong,
    State: __expectString,
  }) as any;
};

const deserializeAws_json1_1StatementList = (output: any, context: __SerdeContext): Statement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1Statement(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1StatementOutput = (output: any, context: __SerdeContext): StatementOutput => {
  return take(output, {
    Data: [, (_) => deserializeAws_json1_1StatementOutputData(_, context)],
    ErrorName: __expectString,
    ErrorValue: __expectString,
    ExecutionCount: __expectInt32,
    Status: __expectString,
    Traceback: [, (_) => deserializeAws_json1_1OrchestrationStringList(_, context)],
  }) as any;
};

const deserializeAws_json1_1StatementOutputData = (output: any, context: __SerdeContext): StatementOutputData => {
  return take(output, {
    TextPlain: __expectString,
  }) as any;
};

const deserializeAws_json1_1StopCrawlerResponse = (output: any, context: __SerdeContext): StopCrawlerResponse => {
  return take(output, {}) as any;
};

const deserializeAws_json1_1StopCrawlerScheduleResponse = (
  output: any,
  context: __SerdeContext
): StopCrawlerScheduleResponse => {
  return take(output, {}) as any;
};

const deserializeAws_json1_1StopSessionResponse = (output: any, context: __SerdeContext): StopSessionResponse => {
  return take(output, {
    Id: __expectString,
  }) as any;
};

const deserializeAws_json1_1StopTriggerResponse = (output: any, context: __SerdeContext): StopTriggerResponse => {
  return take(output, {
    Name: __expectString,
  }) as any;
};

const deserializeAws_json1_1StopWorkflowRunResponse = (
  output: any,
  context: __SerdeContext
): StopWorkflowRunResponse => {
  return take(output, {}) as any;
};

const deserializeAws_json1_1StorageDescriptor = (output: any, context: __SerdeContext): StorageDescriptor => {
  return take(output, {
    AdditionalLocations: [, (_) => deserializeAws_json1_1LocationStringList(_, context)],
    BucketColumns: [, (_) => deserializeAws_json1_1NameStringList(_, context)],
    Columns: [, (_) => deserializeAws_json1_1ColumnList(_, context)],
    Compressed: __expectBoolean,
    InputFormat: __expectString,
    Location: __expectString,
    NumberOfBuckets: __expectInt32,
    OutputFormat: __expectString,
    Parameters: [, (_) => deserializeAws_json1_1ParametersMap(_, context)],
    SchemaReference: [, (_) => deserializeAws_json1_1SchemaReference(_, context)],
    SerdeInfo: [, (_) => deserializeAws_json1_1SerDeInfo(_, context)],
    SkewedInfo: [, (_) => deserializeAws_json1_1SkewedInfo(_, context)],
    SortColumns: [, (_) => deserializeAws_json1_1OrderList(_, context)],
    StoredAsSubDirectories: __expectBoolean,
  }) as any;
};

const deserializeAws_json1_1StreamingDataPreviewOptions = (
  output: any,
  context: __SerdeContext
): StreamingDataPreviewOptions => {
  return take(output, {
    PollingTime: __expectLong,
    RecordPollingLimit: __expectLong,
  }) as any;
};

const deserializeAws_json1_1StringColumnStatisticsData = (
  output: any,
  context: __SerdeContext
): StringColumnStatisticsData => {
  return take(output, {
    AverageLength: __limitedParseDouble,
    MaximumLength: __expectLong,
    NumberOfDistinctValues: __expectLong,
    NumberOfNulls: __expectLong,
  }) as any;
};

const deserializeAws_json1_1StringList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1Table = (output: any, context: __SerdeContext): Table => {
  return take(output, {
    CatalogId: __expectString,
    CreateTime: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    CreatedBy: __expectString,
    DatabaseName: __expectString,
    Description: __expectString,
    FederatedTable: [, (_) => deserializeAws_json1_1FederatedTable(_, context)],
    IsRegisteredWithLakeFormation: __expectBoolean,
    LastAccessTime: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    LastAnalyzedTime: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    Name: __expectString,
    Owner: __expectString,
    Parameters: [, (_) => deserializeAws_json1_1ParametersMap(_, context)],
    PartitionKeys: [, (_) => deserializeAws_json1_1ColumnList(_, context)],
    Retention: __expectInt32,
    StorageDescriptor: [, (_) => deserializeAws_json1_1StorageDescriptor(_, context)],
    TableType: __expectString,
    TargetTable: [, (_) => deserializeAws_json1_1TableIdentifier(_, context)],
    UpdateTime: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    VersionId: __expectString,
    ViewExpandedText: __expectString,
    ViewOriginalText: __expectString,
  }) as any;
};

const deserializeAws_json1_1TableError = (output: any, context: __SerdeContext): TableError => {
  return take(output, {
    ErrorDetail: [, (_) => deserializeAws_json1_1ErrorDetail(_, context)],
    TableName: __expectString,
  }) as any;
};

const deserializeAws_json1_1TableErrors = (output: any, context: __SerdeContext): TableError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1TableError(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TableIdentifier = (output: any, context: __SerdeContext): TableIdentifier => {
  return take(output, {
    CatalogId: __expectString,
    DatabaseName: __expectString,
    Name: __expectString,
  }) as any;
};

const deserializeAws_json1_1TableList = (output: any, context: __SerdeContext): Table[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1Table(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TableVersion = (output: any, context: __SerdeContext): TableVersion => {
  return take(output, {
    Table: [, (_) => deserializeAws_json1_1Table(_, context)],
    VersionId: __expectString,
  }) as any;
};

const deserializeAws_json1_1TableVersionError = (output: any, context: __SerdeContext): TableVersionError => {
  return take(output, {
    ErrorDetail: [, (_) => deserializeAws_json1_1ErrorDetail(_, context)],
    TableName: __expectString,
    VersionId: __expectString,
  }) as any;
};

const deserializeAws_json1_1TableVersionErrors = (output: any, context: __SerdeContext): TableVersionError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1TableVersionError(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return take(output, {}) as any;
};

const deserializeAws_json1_1TagsMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1TaskRun = (output: any, context: __SerdeContext): TaskRun => {
  return take(output, {
    CompletedOn: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    ErrorString: __expectString,
    ExecutionTime: __expectInt32,
    LastModifiedOn: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    LogGroupName: __expectString,
    Properties: [, (_) => deserializeAws_json1_1TaskRunProperties(_, context)],
    StartedOn: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    Status: __expectString,
    TaskRunId: __expectString,
    TransformId: __expectString,
  }) as any;
};

const deserializeAws_json1_1TaskRunList = (output: any, context: __SerdeContext): TaskRun[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1TaskRun(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TaskRunProperties = (output: any, context: __SerdeContext): TaskRunProperties => {
  return take(output, {
    ExportLabelsTaskRunProperties: [, (_) => deserializeAws_json1_1ExportLabelsTaskRunProperties(_, context)],
    FindMatchesTaskRunProperties: [, (_) => deserializeAws_json1_1FindMatchesTaskRunProperties(_, context)],
    ImportLabelsTaskRunProperties: [, (_) => deserializeAws_json1_1ImportLabelsTaskRunProperties(_, context)],
    LabelingSetGenerationTaskRunProperties: [
      ,
      (_) => deserializeAws_json1_1LabelingSetGenerationTaskRunProperties(_, context),
    ],
    TaskType: __expectString,
  }) as any;
};

const deserializeAws_json1_1TransformConfigParameter = (
  output: any,
  context: __SerdeContext
): TransformConfigParameter => {
  return take(output, {
    IsOptional: __expectBoolean,
    ListType: __expectString,
    Name: __expectString,
    Type: __expectString,
    ValidationMessage: __expectString,
    ValidationRule: __expectString,
    Value: [, (_) => deserializeAws_json1_1EnclosedInStringProperties(_, context)],
  }) as any;
};

const deserializeAws_json1_1TransformConfigParameterList = (
  output: any,
  context: __SerdeContext
): TransformConfigParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1TransformConfigParameter(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TransformEncryption = (output: any, context: __SerdeContext): TransformEncryption => {
  return take(output, {
    MlUserDataEncryption: [, (_) => deserializeAws_json1_1MLUserDataEncryption(_, context)],
    TaskRunSecurityConfigurationName: __expectString,
  }) as any;
};

const deserializeAws_json1_1TransformIdList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1TransformList = (output: any, context: __SerdeContext): MLTransform[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1MLTransform(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TransformParameters = (output: any, context: __SerdeContext): TransformParameters => {
  return take(output, {
    FindMatchesParameters: [, (_) => deserializeAws_json1_1FindMatchesParameters(_, context)],
    TransformType: __expectString,
  }) as any;
};

const deserializeAws_json1_1TransformSchema = (output: any, context: __SerdeContext): SchemaColumn[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1SchemaColumn(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Trigger = (output: any, context: __SerdeContext): Trigger => {
  return take(output, {
    Actions: [, (_) => deserializeAws_json1_1ActionList(_, context)],
    Description: __expectString,
    EventBatchingCondition: [, (_) => deserializeAws_json1_1EventBatchingCondition(_, context)],
    Id: __expectString,
    Name: __expectString,
    Predicate: [, (_) => deserializeAws_json1_1Predicate(_, context)],
    Schedule: __expectString,
    State: __expectString,
    Type: __expectString,
    WorkflowName: __expectString,
  }) as any;
};

const deserializeAws_json1_1TriggerList = (output: any, context: __SerdeContext): Trigger[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1Trigger(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TriggerNameList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1TriggerNodeDetails = (output: any, context: __SerdeContext): TriggerNodeDetails => {
  return take(output, {
    Trigger: [, (_) => deserializeAws_json1_1Trigger(_, context)],
  }) as any;
};

const deserializeAws_json1_1TwoInputs = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1UnfilteredPartition = (output: any, context: __SerdeContext): UnfilteredPartition => {
  return take(output, {
    AuthorizedColumns: [, (_) => deserializeAws_json1_1NameStringList(_, context)],
    IsRegisteredWithLakeFormation: __expectBoolean,
    Partition: [, (_) => deserializeAws_json1_1Partition(_, context)],
  }) as any;
};

const deserializeAws_json1_1UnfilteredPartitionList = (output: any, context: __SerdeContext): UnfilteredPartition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1UnfilteredPartition(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Union = (output: any, context: __SerdeContext): Union => {
  return take(output, {
    Inputs: [, (_) => deserializeAws_json1_1TwoInputs(_, context)],
    Name: __expectString,
    UnionType: __expectString,
  }) as any;
};

const deserializeAws_json1_1UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return take(output, {}) as any;
};

const deserializeAws_json1_1UpdateBlueprintResponse = (
  output: any,
  context: __SerdeContext
): UpdateBlueprintResponse => {
  return take(output, {
    Name: __expectString,
  }) as any;
};

const deserializeAws_json1_1UpdateClassifierResponse = (
  output: any,
  context: __SerdeContext
): UpdateClassifierResponse => {
  return take(output, {}) as any;
};

const deserializeAws_json1_1UpdateColumnStatisticsForPartitionResponse = (
  output: any,
  context: __SerdeContext
): UpdateColumnStatisticsForPartitionResponse => {
  return take(output, {
    Errors: [, (_) => deserializeAws_json1_1ColumnStatisticsErrors(_, context)],
  }) as any;
};

const deserializeAws_json1_1UpdateColumnStatisticsForTableResponse = (
  output: any,
  context: __SerdeContext
): UpdateColumnStatisticsForTableResponse => {
  return take(output, {
    Errors: [, (_) => deserializeAws_json1_1ColumnStatisticsErrors(_, context)],
  }) as any;
};

const deserializeAws_json1_1UpdateConnectionResponse = (
  output: any,
  context: __SerdeContext
): UpdateConnectionResponse => {
  return take(output, {}) as any;
};

const deserializeAws_json1_1UpdateCrawlerResponse = (output: any, context: __SerdeContext): UpdateCrawlerResponse => {
  return take(output, {}) as any;
};

const deserializeAws_json1_1UpdateCrawlerScheduleResponse = (
  output: any,
  context: __SerdeContext
): UpdateCrawlerScheduleResponse => {
  return take(output, {}) as any;
};

const deserializeAws_json1_1UpdateDatabaseResponse = (output: any, context: __SerdeContext): UpdateDatabaseResponse => {
  return take(output, {}) as any;
};

const deserializeAws_json1_1UpdateDataQualityRulesetResponse = (
  output: any,
  context: __SerdeContext
): UpdateDataQualityRulesetResponse => {
  return take(output, {
    Description: __expectString,
    Name: __expectString,
    Ruleset: __expectString,
  }) as any;
};

const deserializeAws_json1_1UpdateDevEndpointResponse = (
  output: any,
  context: __SerdeContext
): UpdateDevEndpointResponse => {
  return take(output, {}) as any;
};

const deserializeAws_json1_1UpdateJobFromSourceControlResponse = (
  output: any,
  context: __SerdeContext
): UpdateJobFromSourceControlResponse => {
  return take(output, {
    JobName: __expectString,
  }) as any;
};

const deserializeAws_json1_1UpdateJobResponse = (output: any, context: __SerdeContext): UpdateJobResponse => {
  return take(output, {
    JobName: __expectString,
  }) as any;
};

const deserializeAws_json1_1UpdateMLTransformResponse = (
  output: any,
  context: __SerdeContext
): UpdateMLTransformResponse => {
  return take(output, {
    TransformId: __expectString,
  }) as any;
};

const deserializeAws_json1_1UpdatePartitionResponse = (
  output: any,
  context: __SerdeContext
): UpdatePartitionResponse => {
  return take(output, {}) as any;
};

const deserializeAws_json1_1UpdateRegistryResponse = (output: any, context: __SerdeContext): UpdateRegistryResponse => {
  return take(output, {
    RegistryArn: __expectString,
    RegistryName: __expectString,
  }) as any;
};

const deserializeAws_json1_1UpdateSchemaResponse = (output: any, context: __SerdeContext): UpdateSchemaResponse => {
  return take(output, {
    RegistryName: __expectString,
    SchemaArn: __expectString,
    SchemaName: __expectString,
  }) as any;
};

const deserializeAws_json1_1UpdateSourceControlFromJobResponse = (
  output: any,
  context: __SerdeContext
): UpdateSourceControlFromJobResponse => {
  return take(output, {
    JobName: __expectString,
  }) as any;
};

const deserializeAws_json1_1UpdateTableResponse = (output: any, context: __SerdeContext): UpdateTableResponse => {
  return take(output, {}) as any;
};

const deserializeAws_json1_1UpdateTriggerResponse = (output: any, context: __SerdeContext): UpdateTriggerResponse => {
  return take(output, {
    Trigger: [, (_) => deserializeAws_json1_1Trigger(_, context)],
  }) as any;
};

const deserializeAws_json1_1UpdateUserDefinedFunctionResponse = (
  output: any,
  context: __SerdeContext
): UpdateUserDefinedFunctionResponse => {
  return take(output, {}) as any;
};

const deserializeAws_json1_1UpdateWorkflowResponse = (output: any, context: __SerdeContext): UpdateWorkflowResponse => {
  return take(output, {
    Name: __expectString,
  }) as any;
};

const deserializeAws_json1_1UpsertRedshiftTargetOptions = (
  output: any,
  context: __SerdeContext
): UpsertRedshiftTargetOptions => {
  return take(output, {
    ConnectionName: __expectString,
    TableLocation: __expectString,
    UpsertKeys: [, (_) => deserializeAws_json1_1EnclosedInStringPropertiesMinOne(_, context)],
  }) as any;
};

const deserializeAws_json1_1UserDefinedFunction = (output: any, context: __SerdeContext): UserDefinedFunction => {
  return take(output, {
    CatalogId: __expectString,
    ClassName: __expectString,
    CreateTime: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    DatabaseName: __expectString,
    FunctionName: __expectString,
    OwnerName: __expectString,
    OwnerType: __expectString,
    ResourceUris: [, (_) => deserializeAws_json1_1ResourceUriList(_, context)],
  }) as any;
};

const deserializeAws_json1_1UserDefinedFunctionList = (output: any, context: __SerdeContext): UserDefinedFunction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1UserDefinedFunction(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return take(output, {
    Message: __expectString,
  }) as any;
};

const deserializeAws_json1_1ValueStringList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1VersionMismatchException = (
  output: any,
  context: __SerdeContext
): VersionMismatchException => {
  return take(output, {
    Message: __expectString,
  }) as any;
};

const deserializeAws_json1_1Workflow = (output: any, context: __SerdeContext): Workflow => {
  return take(output, {
    BlueprintDetails: [, (_) => deserializeAws_json1_1BlueprintDetails(_, context)],
    CreatedOn: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    DefaultRunProperties: [, (_) => deserializeAws_json1_1WorkflowRunProperties(_, context)],
    Description: __expectString,
    Graph: [, (_) => deserializeAws_json1_1WorkflowGraph(_, context)],
    LastModifiedOn: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    LastRun: [, (_) => deserializeAws_json1_1WorkflowRun(_, context)],
    MaxConcurrentRuns: __expectInt32,
    Name: __expectString,
  }) as any;
};

const deserializeAws_json1_1WorkflowGraph = (output: any, context: __SerdeContext): WorkflowGraph => {
  return take(output, {
    Edges: [, (_) => deserializeAws_json1_1EdgeList(_, context)],
    Nodes: [, (_) => deserializeAws_json1_1NodeList(_, context)],
  }) as any;
};

const deserializeAws_json1_1WorkflowNames = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1WorkflowRun = (output: any, context: __SerdeContext): WorkflowRun => {
  return take(output, {
    CompletedOn: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    ErrorMessage: __expectString,
    Graph: [, (_) => deserializeAws_json1_1WorkflowGraph(_, context)],
    Name: __expectString,
    PreviousRunId: __expectString,
    StartedOn: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    StartingEventBatchCondition: [, (_) => deserializeAws_json1_1StartingEventBatchCondition(_, context)],
    Statistics: [, (_) => deserializeAws_json1_1WorkflowRunStatistics(_, context)],
    Status: __expectString,
    WorkflowRunId: __expectString,
    WorkflowRunProperties: [, (_) => deserializeAws_json1_1WorkflowRunProperties(_, context)],
  }) as any;
};

const deserializeAws_json1_1WorkflowRunProperties = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1WorkflowRuns = (output: any, context: __SerdeContext): WorkflowRun[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1WorkflowRun(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1WorkflowRunStatistics = (output: any, context: __SerdeContext): WorkflowRunStatistics => {
  return take(output, {
    ErroredActions: __expectInt32,
    FailedActions: __expectInt32,
    RunningActions: __expectInt32,
    StoppedActions: __expectInt32,
    SucceededActions: __expectInt32,
    TimeoutActions: __expectInt32,
    TotalActions: __expectInt32,
    WaitingActions: __expectInt32,
  }) as any;
};

const deserializeAws_json1_1Workflows = (output: any, context: __SerdeContext): Workflow[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1Workflow(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1XMLClassifier = (output: any, context: __SerdeContext): XMLClassifier => {
  return take(output, {
    Classification: __expectString,
    CreationTime: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    LastUpdated: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
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

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

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
