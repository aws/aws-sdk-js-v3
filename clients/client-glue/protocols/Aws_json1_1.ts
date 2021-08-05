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
import { BatchGetCrawlersCommandInput, BatchGetCrawlersCommandOutput } from "../commands/BatchGetCrawlersCommand";
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
import { CancelMLTaskRunCommandInput, CancelMLTaskRunCommandOutput } from "../commands/CancelMLTaskRunCommand";
import {
  CheckSchemaVersionValidityCommandInput,
  CheckSchemaVersionValidityCommandOutput,
} from "../commands/CheckSchemaVersionValidityCommand";
import { CreateClassifierCommandInput, CreateClassifierCommandOutput } from "../commands/CreateClassifierCommand";
import { CreateConnectionCommandInput, CreateConnectionCommandOutput } from "../commands/CreateConnectionCommand";
import { CreateCrawlerCommandInput, CreateCrawlerCommandOutput } from "../commands/CreateCrawlerCommand";
import { CreateDatabaseCommandInput, CreateDatabaseCommandOutput } from "../commands/CreateDatabaseCommand";
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
import { CreateTableCommandInput, CreateTableCommandOutput } from "../commands/CreateTableCommand";
import { CreateTriggerCommandInput, CreateTriggerCommandOutput } from "../commands/CreateTriggerCommand";
import {
  CreateUserDefinedFunctionCommandInput,
  CreateUserDefinedFunctionCommandOutput,
} from "../commands/CreateUserDefinedFunctionCommand";
import { CreateWorkflowCommandInput, CreateWorkflowCommandOutput } from "../commands/CreateWorkflowCommand";
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
import { DeleteDatabaseCommandInput, DeleteDatabaseCommandOutput } from "../commands/DeleteDatabaseCommand";
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
import { DeleteTableCommandInput, DeleteTableCommandOutput } from "../commands/DeleteTableCommand";
import { DeleteTableVersionCommandInput, DeleteTableVersionCommandOutput } from "../commands/DeleteTableVersionCommand";
import { DeleteTriggerCommandInput, DeleteTriggerCommandOutput } from "../commands/DeleteTriggerCommand";
import {
  DeleteUserDefinedFunctionCommandInput,
  DeleteUserDefinedFunctionCommandOutput,
} from "../commands/DeleteUserDefinedFunctionCommand";
import { DeleteWorkflowCommandInput, DeleteWorkflowCommandOutput } from "../commands/DeleteWorkflowCommand";
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
  GetDataCatalogEncryptionSettingsCommandInput,
  GetDataCatalogEncryptionSettingsCommandOutput,
} from "../commands/GetDataCatalogEncryptionSettingsCommand";
import { GetDatabaseCommandInput, GetDatabaseCommandOutput } from "../commands/GetDatabaseCommand";
import { GetDatabasesCommandInput, GetDatabasesCommandOutput } from "../commands/GetDatabasesCommand";
import { GetDataflowGraphCommandInput, GetDataflowGraphCommandOutput } from "../commands/GetDataflowGraphCommand";
import { GetDevEndpointCommandInput, GetDevEndpointCommandOutput } from "../commands/GetDevEndpointCommand";
import { GetDevEndpointsCommandInput, GetDevEndpointsCommandOutput } from "../commands/GetDevEndpointsCommand";
import { GetJobBookmarkCommandInput, GetJobBookmarkCommandOutput } from "../commands/GetJobBookmarkCommand";
import { GetJobCommandInput, GetJobCommandOutput } from "../commands/GetJobCommand";
import { GetJobRunCommandInput, GetJobRunCommandOutput } from "../commands/GetJobRunCommand";
import { GetJobRunsCommandInput, GetJobRunsCommandOutput } from "../commands/GetJobRunsCommand";
import { GetJobsCommandInput, GetJobsCommandOutput } from "../commands/GetJobsCommand";
import { GetMLTaskRunCommandInput, GetMLTaskRunCommandOutput } from "../commands/GetMLTaskRunCommand";
import { GetMLTaskRunsCommandInput, GetMLTaskRunsCommandOutput } from "../commands/GetMLTaskRunsCommand";
import { GetMLTransformCommandInput, GetMLTransformCommandOutput } from "../commands/GetMLTransformCommand";
import { GetMLTransformsCommandInput, GetMLTransformsCommandOutput } from "../commands/GetMLTransformsCommand";
import { GetMappingCommandInput, GetMappingCommandOutput } from "../commands/GetMappingCommand";
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
import { GetTableCommandInput, GetTableCommandOutput } from "../commands/GetTableCommand";
import { GetTableVersionCommandInput, GetTableVersionCommandOutput } from "../commands/GetTableVersionCommand";
import { GetTableVersionsCommandInput, GetTableVersionsCommandOutput } from "../commands/GetTableVersionsCommand";
import { GetTablesCommandInput, GetTablesCommandOutput } from "../commands/GetTablesCommand";
import { GetTagsCommandInput, GetTagsCommandOutput } from "../commands/GetTagsCommand";
import { GetTriggerCommandInput, GetTriggerCommandOutput } from "../commands/GetTriggerCommand";
import { GetTriggersCommandInput, GetTriggersCommandOutput } from "../commands/GetTriggersCommand";
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
import { ListCrawlersCommandInput, ListCrawlersCommandOutput } from "../commands/ListCrawlersCommand";
import { ListDevEndpointsCommandInput, ListDevEndpointsCommandOutput } from "../commands/ListDevEndpointsCommand";
import { ListJobsCommandInput, ListJobsCommandOutput } from "../commands/ListJobsCommand";
import { ListMLTransformsCommandInput, ListMLTransformsCommandOutput } from "../commands/ListMLTransformsCommand";
import { ListRegistriesCommandInput, ListRegistriesCommandOutput } from "../commands/ListRegistriesCommand";
import { ListSchemaVersionsCommandInput, ListSchemaVersionsCommandOutput } from "../commands/ListSchemaVersionsCommand";
import { ListSchemasCommandInput, ListSchemasCommandOutput } from "../commands/ListSchemasCommand";
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
import { SearchTablesCommandInput, SearchTablesCommandOutput } from "../commands/SearchTablesCommand";
import { StartCrawlerCommandInput, StartCrawlerCommandOutput } from "../commands/StartCrawlerCommand";
import {
  StartCrawlerScheduleCommandInput,
  StartCrawlerScheduleCommandOutput,
} from "../commands/StartCrawlerScheduleCommand";
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
import { StopTriggerCommandInput, StopTriggerCommandOutput } from "../commands/StopTriggerCommand";
import { StopWorkflowRunCommandInput, StopWorkflowRunCommandOutput } from "../commands/StopWorkflowRunCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
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
import { UpdateDevEndpointCommandInput, UpdateDevEndpointCommandOutput } from "../commands/UpdateDevEndpointCommand";
import { UpdateJobCommandInput, UpdateJobCommandOutput } from "../commands/UpdateJobCommand";
import { UpdateMLTransformCommandInput, UpdateMLTransformCommandOutput } from "../commands/UpdateMLTransformCommand";
import { UpdatePartitionCommandInput, UpdatePartitionCommandOutput } from "../commands/UpdatePartitionCommand";
import { UpdateRegistryCommandInput, UpdateRegistryCommandOutput } from "../commands/UpdateRegistryCommand";
import { UpdateSchemaCommandInput, UpdateSchemaCommandOutput } from "../commands/UpdateSchemaCommand";
import { UpdateTableCommandInput, UpdateTableCommandOutput } from "../commands/UpdateTableCommand";
import { UpdateTriggerCommandInput, UpdateTriggerCommandOutput } from "../commands/UpdateTriggerCommand";
import {
  UpdateUserDefinedFunctionCommandInput,
  UpdateUserDefinedFunctionCommandOutput,
} from "../commands/UpdateUserDefinedFunctionCommand";
import { UpdateWorkflowCommandInput, UpdateWorkflowCommandOutput } from "../commands/UpdateWorkflowCommand";
import {
  AccessDeniedException,
  Action,
  AlreadyExistsException,
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
  BatchGetCrawlersRequest,
  BatchGetCrawlersResponse,
  BatchGetDevEndpointsRequest,
  BatchGetDevEndpointsResponse,
  BatchGetJobsRequest,
  BatchGetJobsResponse,
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
  BinaryColumnStatisticsData,
  BooleanColumnStatisticsData,
  CancelMLTaskRunRequest,
  CancelMLTaskRunResponse,
  CatalogImportStatus,
  CatalogTarget,
  CheckSchemaVersionValidityInput,
  CheckSchemaVersionValidityResponse,
  Classifier,
  CloudWatchEncryption,
  CodeGenEdge,
  CodeGenNode,
  CodeGenNodeArg,
  Column,
  ColumnError,
  ColumnStatistics,
  ColumnStatisticsData,
  ConcurrentModificationException,
  Condition,
  ConditionCheckFailureException,
  ConflictException,
  Connection,
  ConnectionInput,
  ConnectionPasswordEncryption,
  ConnectionPropertyKey,
  ConnectionsList,
  Crawl,
  Crawler,
  CrawlerMetrics,
  CrawlerNodeDetails,
  CrawlerRunningException,
  CrawlerTargets,
  CreateClassifierRequest,
  CreateClassifierResponse,
  CreateConnectionRequest,
  CreateConnectionResponse,
  CreateCrawlerRequest,
  CreateCrawlerResponse,
  CreateCsvClassifierRequest,
  CreateDatabaseRequest,
  CreateDatabaseResponse,
  CreateDevEndpointRequest,
  CreateDevEndpointResponse,
  CreateGrokClassifierRequest,
  CreateJobRequest,
  CreateJobResponse,
  CreateJsonClassifierRequest,
  CreateMLTransformRequest,
  CreateMLTransformResponse,
  CreatePartitionIndexRequest,
  CreatePartitionIndexResponse,
  CreatePartitionRequest,
  CreatePartitionResponse,
  CreateRegistryInput,
  CreateRegistryResponse,
  CreateSchemaInput,
  CreateSchemaResponse,
  CreateScriptRequest,
  CreateScriptResponse,
  CreateSecurityConfigurationRequest,
  CreateSecurityConfigurationResponse,
  CreateTableRequest,
  CreateTableResponse,
  CreateTriggerRequest,
  CreateTriggerResponse,
  CreateUserDefinedFunctionRequest,
  CreateUserDefinedFunctionResponse,
  CreateWorkflowRequest,
  CreateWorkflowResponse,
  CreateXMLClassifierRequest,
  CsvClassifier,
  DataCatalogEncryptionSettings,
  DataLakePrincipal,
  Database,
  DatabaseIdentifier,
  DatabaseInput,
  DateColumnStatisticsData,
  DecimalColumnStatisticsData,
  DecimalNumber,
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
  DeleteDatabaseRequest,
  DeleteDatabaseResponse,
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
  DevEndpoint,
  DoubleColumnStatisticsData,
  DynamoDBTarget,
  Edge,
  EncryptionAtRest,
  EncryptionConfiguration,
  EntityNotFoundException,
  ErrorDetail,
  ErrorDetails,
  EventBatchingCondition,
  ExecutionProperty,
  FindMatchesParameters,
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
  GetDataCatalogEncryptionSettingsRequest,
  GetDataCatalogEncryptionSettingsResponse,
  GetDatabaseRequest,
  GetDatabaseResponse,
  GetDatabasesRequest,
  GetDatabasesResponse,
  GetDataflowGraphRequest,
  GetDataflowGraphResponse,
  GetDevEndpointRequest,
  GetDevEndpointResponse,
  GetDevEndpointsRequest,
  GetDevEndpointsResponse,
  GetJobRequest,
  GetJobResponse,
  GlueEncryptionException,
  GlueTable,
  GrokClassifier,
  IdempotentParameterMismatchException,
  InternalServiceException,
  InvalidInputException,
  JdbcTarget,
  Job,
  JobBookmarksEncryption,
  JobCommand,
  JobNodeDetails,
  JobRun,
  JsonClassifier,
  LastCrawlInfo,
  LineageConfiguration,
  LongColumnStatisticsData,
  MLUserDataEncryption,
  MongoDBTarget,
  Node,
  NotificationProperty,
  OperationTimeoutException,
  Order,
  Partition,
  PartitionError,
  PartitionIndex,
  PartitionInput,
  PartitionValueList,
  Permission,
  PhysicalConnectionRequirements,
  Predecessor,
  Predicate,
  PrincipalPermissions,
  RecrawlPolicy,
  RegistryId,
  ResourceNumberLimitExceededException,
  ResourceUri,
  S3Encryption,
  S3Target,
  Schedule,
  SchedulerTransitioningException,
  SchemaChangePolicy,
  SchemaId,
  SchemaReference,
  SchemaVersionErrorItem,
  SerDeInfo,
  SkewedInfo,
  StartingEventBatchCondition,
  StorageDescriptor,
  StringColumnStatisticsData,
  TableError,
  TableIdentifier,
  TableInput,
  TableVersionError,
  TransformEncryption,
  TransformParameters,
  Trigger,
  TriggerNodeDetails,
  UserDefinedFunctionInput,
  ValidationException,
  Workflow,
  WorkflowGraph,
  WorkflowRun,
  WorkflowRunStatistics,
  XMLClassifier,
} from "../models/models_0";
import {
  BackfillError,
  CatalogEntry,
  ColumnImportance,
  ColumnStatisticsError,
  ConcurrentRunsExceededException,
  ConfusionMatrix,
  CrawlerNotRunningException,
  CrawlerStoppingException,
  DevEndpointCustomLibraries,
  EvaluationMetrics,
  ExportLabelsTaskRunProperties,
  FindMatchesMetrics,
  FindMatchesTaskRunProperties,
  GetJobBookmarkRequest,
  GetJobBookmarkResponse,
  GetJobRunRequest,
  GetJobRunResponse,
  GetJobRunsRequest,
  GetJobRunsResponse,
  GetJobsRequest,
  GetJobsResponse,
  GetMLTaskRunRequest,
  GetMLTaskRunResponse,
  GetMLTaskRunsRequest,
  GetMLTaskRunsResponse,
  GetMLTransformRequest,
  GetMLTransformResponse,
  GetMLTransformsRequest,
  GetMLTransformsResponse,
  GetMappingRequest,
  GetMappingResponse,
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
  GetTableRequest,
  GetTableResponse,
  GetTableVersionRequest,
  GetTableVersionResponse,
  GetTableVersionsRequest,
  GetTableVersionsResponse,
  GetTablesRequest,
  GetTablesResponse,
  GetTagsRequest,
  GetTagsResponse,
  GetTriggerRequest,
  GetTriggerResponse,
  GetTriggersRequest,
  GetTriggersResponse,
  GetUserDefinedFunctionRequest,
  GetUserDefinedFunctionResponse,
  GetUserDefinedFunctionsRequest,
  GetUserDefinedFunctionsResponse,
  GetWorkflowRequest,
  GetWorkflowResponse,
  GetWorkflowRunPropertiesRequest,
  GetWorkflowRunPropertiesResponse,
  GetWorkflowRunRequest,
  GetWorkflowRunResponse,
  GetWorkflowRunsRequest,
  GetWorkflowRunsResponse,
  GluePolicy,
  IllegalWorkflowStateException,
  ImportCatalogToGlueRequest,
  ImportCatalogToGlueResponse,
  ImportLabelsTaskRunProperties,
  JobBookmarkEntry,
  JobUpdate,
  KeySchemaElement,
  LabelingSetGenerationTaskRunProperties,
  ListCrawlersRequest,
  ListCrawlersResponse,
  ListDevEndpointsRequest,
  ListDevEndpointsResponse,
  ListJobsRequest,
  ListJobsResponse,
  ListMLTransformsRequest,
  ListMLTransformsResponse,
  ListRegistriesInput,
  ListRegistriesResponse,
  ListSchemaVersionsInput,
  ListSchemaVersionsResponse,
  ListSchemasInput,
  ListSchemasResponse,
  ListTriggersRequest,
  ListTriggersResponse,
  ListWorkflowsRequest,
  ListWorkflowsResponse,
  Location,
  MLTransform,
  MLTransformNotReadyException,
  MappingEntry,
  MetadataInfo,
  MetadataKeyValuePair,
  NoScheduleException,
  OtherMetadataValueListItem,
  PartitionIndexDescriptor,
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
  SchedulerNotRunningException,
  SchedulerRunningException,
  SchemaColumn,
  SchemaListItem,
  SchemaVersionListItem,
  SchemaVersionNumber,
  SearchTablesRequest,
  SearchTablesResponse,
  SecurityConfiguration,
  Segment,
  SortCriterion,
  StartCrawlerRequest,
  StartCrawlerResponse,
  StartCrawlerScheduleRequest,
  StartCrawlerScheduleResponse,
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
  StopTriggerRequest,
  StopTriggerResponse,
  StopWorkflowRunRequest,
  StopWorkflowRunResponse,
  Table,
  TableVersion,
  TagResourceRequest,
  TagResourceResponse,
  TaskRun,
  TaskRunFilterCriteria,
  TaskRunProperties,
  TaskRunSortCriteria,
  TransformFilterCriteria,
  TransformSortCriteria,
  TriggerUpdate,
  UntagResourceRequest,
  UntagResourceResponse,
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
  UpdateDevEndpointRequest,
  UpdateDevEndpointResponse,
  UpdateGrokClassifierRequest,
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
  UpdateTableRequest,
  UpdateTableResponse,
  UpdateTriggerRequest,
  UpdateTriggerResponse,
  UpdateUserDefinedFunctionRequest,
  UpdateUserDefinedFunctionResponse,
  UpdateWorkflowRequest,
  UpdateWorkflowResponse,
  UpdateXMLClassifierRequest,
  UserDefinedFunction,
  VersionMismatchException,
} from "../models/models_1";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectNumber as __expectNumber,
  expectString as __expectString,
  handleFloat as __handleFloat,
  serializeFloat as __serializeFloat,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      response = {
        ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      response = {
        ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      response = {
        ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      response = {
        ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      response = {
        ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.glue#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.glue#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.glue#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.glue#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      response = {
        ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      response = {
        ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      response = {
        ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.glue#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      response = {
        ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      response = {
        ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      response = {
        ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CrawlerRunningException":
    case "com.amazonaws.glue#CrawlerRunningException":
      response = {
        ...(await deserializeAws_json1_1CrawlerRunningExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SchedulerTransitioningException":
    case "com.amazonaws.glue#SchedulerTransitioningException":
      response = {
        ...(await deserializeAws_json1_1SchedulerTransitioningExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.glue#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      response = {
        ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConditionCheckFailureException":
    case "com.amazonaws.glue#ConditionCheckFailureException":
      response = {
        ...(await deserializeAws_json1_1ConditionCheckFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      response = {
        ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      response = {
        ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      response = {
        ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      response = {
        ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      response = {
        ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      response = {
        ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.glue#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      response = {
        ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.glue#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      response = {
        ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      response = {
        ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      response = {
        ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      response = {
        ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      response = {
        ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      response = {
        ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      response = {
        ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      response = {
        ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConditionCheckFailureException":
    case "com.amazonaws.glue#ConditionCheckFailureException":
      response = {
        ...(await deserializeAws_json1_1ConditionCheckFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentRunsExceededException":
    case "com.amazonaws.glue#ConcurrentRunsExceededException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentRunsExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IllegalWorkflowStateException":
    case "com.amazonaws.glue#IllegalWorkflowStateException":
      response = {
        ...(await deserializeAws_json1_1IllegalWorkflowStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CrawlerRunningException":
    case "com.amazonaws.glue#CrawlerRunningException":
      response = {
        ...(await deserializeAws_json1_1CrawlerRunningExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoScheduleException":
    case "com.amazonaws.glue#NoScheduleException":
      response = {
        ...(await deserializeAws_json1_1NoScheduleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SchedulerRunningException":
    case "com.amazonaws.glue#SchedulerRunningException":
      response = {
        ...(await deserializeAws_json1_1SchedulerRunningExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SchedulerTransitioningException":
    case "com.amazonaws.glue#SchedulerTransitioningException":
      response = {
        ...(await deserializeAws_json1_1SchedulerTransitioningExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentRunsExceededException":
    case "com.amazonaws.glue#ConcurrentRunsExceededException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentRunsExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentRunsExceededException":
    case "com.amazonaws.glue#ConcurrentRunsExceededException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentRunsExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MLTransformNotReadyException":
    case "com.amazonaws.glue#MLTransformNotReadyException":
      response = {
        ...(await deserializeAws_json1_1MLTransformNotReadyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentRunsExceededException":
    case "com.amazonaws.glue#ConcurrentRunsExceededException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentRunsExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentRunsExceededException":
    case "com.amazonaws.glue#ConcurrentRunsExceededException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentRunsExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentRunsExceededException":
    case "com.amazonaws.glue#ConcurrentRunsExceededException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentRunsExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CrawlerNotRunningException":
    case "com.amazonaws.glue#CrawlerNotRunningException":
      response = {
        ...(await deserializeAws_json1_1CrawlerNotRunningExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CrawlerStoppingException":
    case "com.amazonaws.glue#CrawlerStoppingException":
      response = {
        ...(await deserializeAws_json1_1CrawlerStoppingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SchedulerNotRunningException":
    case "com.amazonaws.glue#SchedulerNotRunningException":
      response = {
        ...(await deserializeAws_json1_1SchedulerNotRunningExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SchedulerTransitioningException":
    case "com.amazonaws.glue#SchedulerTransitioningException":
      response = {
        ...(await deserializeAws_json1_1SchedulerTransitioningExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IllegalWorkflowStateException":
    case "com.amazonaws.glue#IllegalWorkflowStateException":
      response = {
        ...(await deserializeAws_json1_1IllegalWorkflowStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "VersionMismatchException":
    case "com.amazonaws.glue#VersionMismatchException":
      response = {
        ...(await deserializeAws_json1_1VersionMismatchExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      response = {
        ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      response = {
        ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      response = {
        ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CrawlerRunningException":
    case "com.amazonaws.glue#CrawlerRunningException":
      response = {
        ...(await deserializeAws_json1_1CrawlerRunningExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "VersionMismatchException":
    case "com.amazonaws.glue#VersionMismatchException":
      response = {
        ...(await deserializeAws_json1_1VersionMismatchExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SchedulerTransitioningException":
    case "com.amazonaws.glue#SchedulerTransitioningException":
      response = {
        ...(await deserializeAws_json1_1SchedulerTransitioningExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "VersionMismatchException":
    case "com.amazonaws.glue#VersionMismatchException":
      response = {
        ...(await deserializeAws_json1_1VersionMismatchExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      response = {
        ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.glue#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      response = {
        ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      response = {
        ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      response = {
        ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_json1_1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccessDeniedException(body, context);
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1AlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AlreadyExistsException(body, context);
  const contents: AlreadyExistsException = {
    name: "AlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConcurrentModificationException(body, context);
  const contents: ConcurrentModificationException = {
    name: "ConcurrentModificationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ConcurrentRunsExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentRunsExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConcurrentRunsExceededException(body, context);
  const contents: ConcurrentRunsExceededException = {
    name: "ConcurrentRunsExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ConditionCheckFailureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConditionCheckFailureException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConditionCheckFailureException(body, context);
  const contents: ConditionCheckFailureException = {
    name: "ConditionCheckFailureException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConflictException(body, context);
  const contents: ConflictException = {
    name: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1CrawlerNotRunningExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CrawlerNotRunningException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CrawlerNotRunningException(body, context);
  const contents: CrawlerNotRunningException = {
    name: "CrawlerNotRunningException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1CrawlerRunningExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CrawlerRunningException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CrawlerRunningException(body, context);
  const contents: CrawlerRunningException = {
    name: "CrawlerRunningException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1CrawlerStoppingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CrawlerStoppingException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CrawlerStoppingException(body, context);
  const contents: CrawlerStoppingException = {
    name: "CrawlerStoppingException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1EntityNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EntityNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1EntityNotFoundException(body, context);
  const contents: EntityNotFoundException = {
    name: "EntityNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1GlueEncryptionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<GlueEncryptionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1GlueEncryptionException(body, context);
  const contents: GlueEncryptionException = {
    name: "GlueEncryptionException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IdempotentParameterMismatchException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1IdempotentParameterMismatchException(body, context);
  const contents: IdempotentParameterMismatchException = {
    name: "IdempotentParameterMismatchException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1IllegalWorkflowStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IllegalWorkflowStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1IllegalWorkflowStateException(body, context);
  const contents: IllegalWorkflowStateException = {
    name: "IllegalWorkflowStateException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InternalServiceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServiceException(body, context);
  const contents: InternalServiceException = {
    name: "InternalServiceException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidInputExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidInputException(body, context);
  const contents: InvalidInputException = {
    name: "InvalidInputException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1MLTransformNotReadyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MLTransformNotReadyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MLTransformNotReadyException(body, context);
  const contents: MLTransformNotReadyException = {
    name: "MLTransformNotReadyException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1NoScheduleExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoScheduleException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NoScheduleException(body, context);
  const contents: NoScheduleException = {
    name: "NoScheduleException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1OperationTimeoutExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationTimeoutException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OperationTimeoutException(body, context);
  const contents: OperationTimeoutException = {
    name: "OperationTimeoutException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNumberLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNumberLimitExceededException(body, context);
  const contents: ResourceNumberLimitExceededException = {
    name: "ResourceNumberLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1SchedulerNotRunningExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SchedulerNotRunningException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SchedulerNotRunningException(body, context);
  const contents: SchedulerNotRunningException = {
    name: "SchedulerNotRunningException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1SchedulerRunningExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SchedulerRunningException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SchedulerRunningException(body, context);
  const contents: SchedulerRunningException = {
    name: "SchedulerRunningException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1SchedulerTransitioningExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SchedulerTransitioningException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SchedulerTransitioningException(body, context);
  const contents: SchedulerTransitioningException = {
    name: "SchedulerTransitioningException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ValidationException(body, context);
  const contents: ValidationException = {
    name: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1VersionMismatchExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<VersionMismatchException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1VersionMismatchException(body, context);
  const contents: VersionMismatchException = {
    name: "VersionMismatchException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1Action = (input: Action, context: __SerdeContext): any => {
  return {
    ...(input.Arguments !== undefined &&
      input.Arguments !== null && { Arguments: serializeAws_json1_1GenericMap(input.Arguments, context) }),
    ...(input.CrawlerName !== undefined && input.CrawlerName !== null && { CrawlerName: input.CrawlerName }),
    ...(input.JobName !== undefined && input.JobName !== null && { JobName: input.JobName }),
    ...(input.NotificationProperty !== undefined &&
      input.NotificationProperty !== null && {
        NotificationProperty: serializeAws_json1_1NotificationProperty(input.NotificationProperty, context),
      }),
    ...(input.SecurityConfiguration !== undefined &&
      input.SecurityConfiguration !== null && { SecurityConfiguration: input.SecurityConfiguration }),
    ...(input.Timeout !== undefined && input.Timeout !== null && { Timeout: input.Timeout }),
  };
};

const serializeAws_json1_1ActionList = (input: Action[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Action(entry, context);
    });
};

const serializeAws_json1_1AdditionalPlanOptionsMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_json1_1BatchCreatePartitionRequest = (
  input: BatchCreatePartitionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.PartitionInputList !== undefined &&
      input.PartitionInputList !== null && {
        PartitionInputList: serializeAws_json1_1PartitionInputList(input.PartitionInputList, context),
      }),
    ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_1BatchDeleteConnectionRequest = (
  input: BatchDeleteConnectionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.ConnectionNameList !== undefined &&
      input.ConnectionNameList !== null && {
        ConnectionNameList: serializeAws_json1_1DeleteConnectionNameList(input.ConnectionNameList, context),
      }),
  };
};

const serializeAws_json1_1BatchDeletePartitionRequest = (
  input: BatchDeletePartitionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.PartitionsToDelete !== undefined &&
      input.PartitionsToDelete !== null && {
        PartitionsToDelete: serializeAws_json1_1BatchDeletePartitionValueList(input.PartitionsToDelete, context),
      }),
    ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_1BatchDeletePartitionValueList = (
  input: PartitionValueList[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1PartitionValueList(entry, context);
    });
};

const serializeAws_json1_1BatchDeleteTableNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1BatchDeleteTableRequest = (input: BatchDeleteTableRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.TablesToDelete !== undefined &&
      input.TablesToDelete !== null && {
        TablesToDelete: serializeAws_json1_1BatchDeleteTableNameList(input.TablesToDelete, context),
      }),
  };
};

const serializeAws_json1_1BatchDeleteTableVersionList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1BatchDeleteTableVersionRequest = (
  input: BatchDeleteTableVersionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    ...(input.VersionIds !== undefined &&
      input.VersionIds !== null && {
        VersionIds: serializeAws_json1_1BatchDeleteTableVersionList(input.VersionIds, context),
      }),
  };
};

const serializeAws_json1_1BatchGetCrawlersRequest = (input: BatchGetCrawlersRequest, context: __SerdeContext): any => {
  return {
    ...(input.CrawlerNames !== undefined &&
      input.CrawlerNames !== null && {
        CrawlerNames: serializeAws_json1_1CrawlerNameList(input.CrawlerNames, context),
      }),
  };
};

const serializeAws_json1_1BatchGetDevEndpointsRequest = (
  input: BatchGetDevEndpointsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DevEndpointNames !== undefined &&
      input.DevEndpointNames !== null && {
        DevEndpointNames: serializeAws_json1_1DevEndpointNames(input.DevEndpointNames, context),
      }),
  };
};

const serializeAws_json1_1BatchGetJobsRequest = (input: BatchGetJobsRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobNames !== undefined &&
      input.JobNames !== null && { JobNames: serializeAws_json1_1JobNameList(input.JobNames, context) }),
  };
};

const serializeAws_json1_1BatchGetPartitionRequest = (
  input: BatchGetPartitionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.PartitionsToGet !== undefined &&
      input.PartitionsToGet !== null && {
        PartitionsToGet: serializeAws_json1_1BatchGetPartitionValueList(input.PartitionsToGet, context),
      }),
    ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_1BatchGetPartitionValueList = (input: PartitionValueList[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1PartitionValueList(entry, context);
    });
};

const serializeAws_json1_1BatchGetTriggersRequest = (input: BatchGetTriggersRequest, context: __SerdeContext): any => {
  return {
    ...(input.TriggerNames !== undefined &&
      input.TriggerNames !== null && {
        TriggerNames: serializeAws_json1_1TriggerNameList(input.TriggerNames, context),
      }),
  };
};

const serializeAws_json1_1BatchGetWorkflowsRequest = (
  input: BatchGetWorkflowsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.IncludeGraph !== undefined && input.IncludeGraph !== null && { IncludeGraph: input.IncludeGraph }),
    ...(input.Names !== undefined &&
      input.Names !== null && { Names: serializeAws_json1_1WorkflowNames(input.Names, context) }),
  };
};

const serializeAws_json1_1BatchStopJobRunJobRunIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1BatchStopJobRunRequest = (input: BatchStopJobRunRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobName !== undefined && input.JobName !== null && { JobName: input.JobName }),
    ...(input.JobRunIds !== undefined &&
      input.JobRunIds !== null && {
        JobRunIds: serializeAws_json1_1BatchStopJobRunJobRunIdList(input.JobRunIds, context),
      }),
  };
};

const serializeAws_json1_1BatchUpdatePartitionRequest = (
  input: BatchUpdatePartitionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.Entries !== undefined &&
      input.Entries !== null && {
        Entries: serializeAws_json1_1BatchUpdatePartitionRequestEntryList(input.Entries, context),
      }),
    ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_1BatchUpdatePartitionRequestEntry = (
  input: BatchUpdatePartitionRequestEntry,
  context: __SerdeContext
): any => {
  return {
    ...(input.PartitionInput !== undefined &&
      input.PartitionInput !== null && {
        PartitionInput: serializeAws_json1_1PartitionInput(input.PartitionInput, context),
      }),
    ...(input.PartitionValueList !== undefined &&
      input.PartitionValueList !== null && {
        PartitionValueList: serializeAws_json1_1BoundedPartitionValueList(input.PartitionValueList, context),
      }),
  };
};

const serializeAws_json1_1BatchUpdatePartitionRequestEntryList = (
  input: BatchUpdatePartitionRequestEntry[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1BatchUpdatePartitionRequestEntry(entry, context);
    });
};

const serializeAws_json1_1BinaryColumnStatisticsData = (
  input: BinaryColumnStatisticsData,
  context: __SerdeContext
): any => {
  return {
    ...(input.AverageLength !== undefined &&
      input.AverageLength !== null && { AverageLength: __serializeFloat(input.AverageLength) }),
    ...(input.MaximumLength !== undefined && input.MaximumLength !== null && { MaximumLength: input.MaximumLength }),
    ...(input.NumberOfNulls !== undefined && input.NumberOfNulls !== null && { NumberOfNulls: input.NumberOfNulls }),
  };
};

const serializeAws_json1_1BooleanColumnStatisticsData = (
  input: BooleanColumnStatisticsData,
  context: __SerdeContext
): any => {
  return {
    ...(input.NumberOfFalses !== undefined &&
      input.NumberOfFalses !== null && { NumberOfFalses: input.NumberOfFalses }),
    ...(input.NumberOfNulls !== undefined && input.NumberOfNulls !== null && { NumberOfNulls: input.NumberOfNulls }),
    ...(input.NumberOfTrues !== undefined && input.NumberOfTrues !== null && { NumberOfTrues: input.NumberOfTrues }),
  };
};

const serializeAws_json1_1BoundedPartitionValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1CancelMLTaskRunRequest = (input: CancelMLTaskRunRequest, context: __SerdeContext): any => {
  return {
    ...(input.TaskRunId !== undefined && input.TaskRunId !== null && { TaskRunId: input.TaskRunId }),
    ...(input.TransformId !== undefined && input.TransformId !== null && { TransformId: input.TransformId }),
  };
};

const serializeAws_json1_1CatalogEntries = (input: CatalogEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1CatalogEntry(entry, context);
    });
};

const serializeAws_json1_1CatalogEntry = (input: CatalogEntry, context: __SerdeContext): any => {
  return {
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_1CatalogTablesList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1CatalogTarget = (input: CatalogTarget, context: __SerdeContext): any => {
  return {
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.Tables !== undefined &&
      input.Tables !== null && { Tables: serializeAws_json1_1CatalogTablesList(input.Tables, context) }),
  };
};

const serializeAws_json1_1CatalogTargetList = (input: CatalogTarget[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1CatalogTarget(entry, context);
    });
};

const serializeAws_json1_1CheckSchemaVersionValidityInput = (
  input: CheckSchemaVersionValidityInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataFormat !== undefined && input.DataFormat !== null && { DataFormat: input.DataFormat }),
    ...(input.SchemaDefinition !== undefined &&
      input.SchemaDefinition !== null && { SchemaDefinition: input.SchemaDefinition }),
  };
};

const serializeAws_json1_1ClassifierNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1CloudWatchEncryption = (input: CloudWatchEncryption, context: __SerdeContext): any => {
  return {
    ...(input.CloudWatchEncryptionMode !== undefined &&
      input.CloudWatchEncryptionMode !== null && { CloudWatchEncryptionMode: input.CloudWatchEncryptionMode }),
    ...(input.KmsKeyArn !== undefined && input.KmsKeyArn !== null && { KmsKeyArn: input.KmsKeyArn }),
  };
};

const serializeAws_json1_1CodeGenEdge = (input: CodeGenEdge, context: __SerdeContext): any => {
  return {
    ...(input.Source !== undefined && input.Source !== null && { Source: input.Source }),
    ...(input.Target !== undefined && input.Target !== null && { Target: input.Target }),
    ...(input.TargetParameter !== undefined &&
      input.TargetParameter !== null && { TargetParameter: input.TargetParameter }),
  };
};

const serializeAws_json1_1CodeGenNode = (input: CodeGenNode, context: __SerdeContext): any => {
  return {
    ...(input.Args !== undefined &&
      input.Args !== null && { Args: serializeAws_json1_1CodeGenNodeArgs(input.Args, context) }),
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.LineNumber !== undefined && input.LineNumber !== null && { LineNumber: input.LineNumber }),
    ...(input.NodeType !== undefined && input.NodeType !== null && { NodeType: input.NodeType }),
  };
};

const serializeAws_json1_1CodeGenNodeArg = (input: CodeGenNodeArg, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Param !== undefined && input.Param !== null && { Param: input.Param }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_1CodeGenNodeArgs = (input: CodeGenNodeArg[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1CodeGenNodeArg(entry, context);
    });
};

const serializeAws_json1_1Column = (input: Column, context: __SerdeContext): any => {
  return {
    ...(input.Comment !== undefined && input.Comment !== null && { Comment: input.Comment }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Parameters !== undefined &&
      input.Parameters !== null && { Parameters: serializeAws_json1_1ParametersMap(input.Parameters, context) }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_json1_1ColumnList = (input: Column[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Column(entry, context);
    });
};

const serializeAws_json1_1ColumnStatistics = (input: ColumnStatistics, context: __SerdeContext): any => {
  return {
    ...(input.AnalyzedTime !== undefined &&
      input.AnalyzedTime !== null && { AnalyzedTime: Math.round(input.AnalyzedTime.getTime() / 1000) }),
    ...(input.ColumnName !== undefined && input.ColumnName !== null && { ColumnName: input.ColumnName }),
    ...(input.ColumnType !== undefined && input.ColumnType !== null && { ColumnType: input.ColumnType }),
    ...(input.StatisticsData !== undefined &&
      input.StatisticsData !== null && {
        StatisticsData: serializeAws_json1_1ColumnStatisticsData(input.StatisticsData, context),
      }),
  };
};

const serializeAws_json1_1ColumnStatisticsData = (input: ColumnStatisticsData, context: __SerdeContext): any => {
  return {
    ...(input.BinaryColumnStatisticsData !== undefined &&
      input.BinaryColumnStatisticsData !== null && {
        BinaryColumnStatisticsData: serializeAws_json1_1BinaryColumnStatisticsData(
          input.BinaryColumnStatisticsData,
          context
        ),
      }),
    ...(input.BooleanColumnStatisticsData !== undefined &&
      input.BooleanColumnStatisticsData !== null && {
        BooleanColumnStatisticsData: serializeAws_json1_1BooleanColumnStatisticsData(
          input.BooleanColumnStatisticsData,
          context
        ),
      }),
    ...(input.DateColumnStatisticsData !== undefined &&
      input.DateColumnStatisticsData !== null && {
        DateColumnStatisticsData: serializeAws_json1_1DateColumnStatisticsData(input.DateColumnStatisticsData, context),
      }),
    ...(input.DecimalColumnStatisticsData !== undefined &&
      input.DecimalColumnStatisticsData !== null && {
        DecimalColumnStatisticsData: serializeAws_json1_1DecimalColumnStatisticsData(
          input.DecimalColumnStatisticsData,
          context
        ),
      }),
    ...(input.DoubleColumnStatisticsData !== undefined &&
      input.DoubleColumnStatisticsData !== null && {
        DoubleColumnStatisticsData: serializeAws_json1_1DoubleColumnStatisticsData(
          input.DoubleColumnStatisticsData,
          context
        ),
      }),
    ...(input.LongColumnStatisticsData !== undefined &&
      input.LongColumnStatisticsData !== null && {
        LongColumnStatisticsData: serializeAws_json1_1LongColumnStatisticsData(input.LongColumnStatisticsData, context),
      }),
    ...(input.StringColumnStatisticsData !== undefined &&
      input.StringColumnStatisticsData !== null && {
        StringColumnStatisticsData: serializeAws_json1_1StringColumnStatisticsData(
          input.StringColumnStatisticsData,
          context
        ),
      }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_json1_1ColumnValueStringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1Condition = (input: Condition, context: __SerdeContext): any => {
  return {
    ...(input.CrawlState !== undefined && input.CrawlState !== null && { CrawlState: input.CrawlState }),
    ...(input.CrawlerName !== undefined && input.CrawlerName !== null && { CrawlerName: input.CrawlerName }),
    ...(input.JobName !== undefined && input.JobName !== null && { JobName: input.JobName }),
    ...(input.LogicalOperator !== undefined &&
      input.LogicalOperator !== null && { LogicalOperator: input.LogicalOperator }),
    ...(input.State !== undefined && input.State !== null && { State: input.State }),
  };
};

const serializeAws_json1_1ConditionList = (input: Condition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Condition(entry, context);
    });
};

const serializeAws_json1_1ConnectionInput = (input: ConnectionInput, context: __SerdeContext): any => {
  return {
    ...(input.ConnectionProperties !== undefined &&
      input.ConnectionProperties !== null && {
        ConnectionProperties: serializeAws_json1_1ConnectionProperties(input.ConnectionProperties, context),
      }),
    ...(input.ConnectionType !== undefined &&
      input.ConnectionType !== null && { ConnectionType: input.ConnectionType }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.MatchCriteria !== undefined &&
      input.MatchCriteria !== null && {
        MatchCriteria: serializeAws_json1_1MatchCriteria(input.MatchCriteria, context),
      }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.PhysicalConnectionRequirements !== undefined &&
      input.PhysicalConnectionRequirements !== null && {
        PhysicalConnectionRequirements: serializeAws_json1_1PhysicalConnectionRequirements(
          input.PhysicalConnectionRequirements,
          context
        ),
      }),
  };
};

const serializeAws_json1_1ConnectionPasswordEncryption = (
  input: ConnectionPasswordEncryption,
  context: __SerdeContext
): any => {
  return {
    ...(input.AwsKmsKeyId !== undefined && input.AwsKmsKeyId !== null && { AwsKmsKeyId: input.AwsKmsKeyId }),
    ...(input.ReturnConnectionPasswordEncrypted !== undefined &&
      input.ReturnConnectionPasswordEncrypted !== null && {
        ReturnConnectionPasswordEncrypted: input.ReturnConnectionPasswordEncrypted,
      }),
  };
};

const serializeAws_json1_1ConnectionProperties = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: any }, [key, value]: [ConnectionPropertyKey | string, any]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: value,
      };
    },
    {}
  );
};

const serializeAws_json1_1ConnectionsList = (input: ConnectionsList, context: __SerdeContext): any => {
  return {
    ...(input.Connections !== undefined &&
      input.Connections !== null && {
        Connections: serializeAws_json1_1OrchestrationStringList(input.Connections, context),
      }),
  };
};

const serializeAws_json1_1CrawlerNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1CrawlerTargets = (input: CrawlerTargets, context: __SerdeContext): any => {
  return {
    ...(input.CatalogTargets !== undefined &&
      input.CatalogTargets !== null && {
        CatalogTargets: serializeAws_json1_1CatalogTargetList(input.CatalogTargets, context),
      }),
    ...(input.DynamoDBTargets !== undefined &&
      input.DynamoDBTargets !== null && {
        DynamoDBTargets: serializeAws_json1_1DynamoDBTargetList(input.DynamoDBTargets, context),
      }),
    ...(input.JdbcTargets !== undefined &&
      input.JdbcTargets !== null && { JdbcTargets: serializeAws_json1_1JdbcTargetList(input.JdbcTargets, context) }),
    ...(input.MongoDBTargets !== undefined &&
      input.MongoDBTargets !== null && {
        MongoDBTargets: serializeAws_json1_1MongoDBTargetList(input.MongoDBTargets, context),
      }),
    ...(input.S3Targets !== undefined &&
      input.S3Targets !== null && { S3Targets: serializeAws_json1_1S3TargetList(input.S3Targets, context) }),
  };
};

const serializeAws_json1_1CreateClassifierRequest = (input: CreateClassifierRequest, context: __SerdeContext): any => {
  return {
    ...(input.CsvClassifier !== undefined &&
      input.CsvClassifier !== null && {
        CsvClassifier: serializeAws_json1_1CreateCsvClassifierRequest(input.CsvClassifier, context),
      }),
    ...(input.GrokClassifier !== undefined &&
      input.GrokClassifier !== null && {
        GrokClassifier: serializeAws_json1_1CreateGrokClassifierRequest(input.GrokClassifier, context),
      }),
    ...(input.JsonClassifier !== undefined &&
      input.JsonClassifier !== null && {
        JsonClassifier: serializeAws_json1_1CreateJsonClassifierRequest(input.JsonClassifier, context),
      }),
    ...(input.XMLClassifier !== undefined &&
      input.XMLClassifier !== null && {
        XMLClassifier: serializeAws_json1_1CreateXMLClassifierRequest(input.XMLClassifier, context),
      }),
  };
};

const serializeAws_json1_1CreateConnectionRequest = (input: CreateConnectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.ConnectionInput !== undefined &&
      input.ConnectionInput !== null && {
        ConnectionInput: serializeAws_json1_1ConnectionInput(input.ConnectionInput, context),
      }),
  };
};

const serializeAws_json1_1CreateCrawlerRequest = (input: CreateCrawlerRequest, context: __SerdeContext): any => {
  return {
    ...(input.Classifiers !== undefined &&
      input.Classifiers !== null && {
        Classifiers: serializeAws_json1_1ClassifierNameList(input.Classifiers, context),
      }),
    ...(input.Configuration !== undefined && input.Configuration !== null && { Configuration: input.Configuration }),
    ...(input.CrawlerSecurityConfiguration !== undefined &&
      input.CrawlerSecurityConfiguration !== null && {
        CrawlerSecurityConfiguration: input.CrawlerSecurityConfiguration,
      }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.LineageConfiguration !== undefined &&
      input.LineageConfiguration !== null && {
        LineageConfiguration: serializeAws_json1_1LineageConfiguration(input.LineageConfiguration, context),
      }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.RecrawlPolicy !== undefined &&
      input.RecrawlPolicy !== null && {
        RecrawlPolicy: serializeAws_json1_1RecrawlPolicy(input.RecrawlPolicy, context),
      }),
    ...(input.Role !== undefined && input.Role !== null && { Role: input.Role }),
    ...(input.Schedule !== undefined && input.Schedule !== null && { Schedule: input.Schedule }),
    ...(input.SchemaChangePolicy !== undefined &&
      input.SchemaChangePolicy !== null && {
        SchemaChangePolicy: serializeAws_json1_1SchemaChangePolicy(input.SchemaChangePolicy, context),
      }),
    ...(input.TablePrefix !== undefined && input.TablePrefix !== null && { TablePrefix: input.TablePrefix }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagsMap(input.Tags, context) }),
    ...(input.Targets !== undefined &&
      input.Targets !== null && { Targets: serializeAws_json1_1CrawlerTargets(input.Targets, context) }),
  };
};

const serializeAws_json1_1CreateCsvClassifierRequest = (
  input: CreateCsvClassifierRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AllowSingleColumn !== undefined &&
      input.AllowSingleColumn !== null && { AllowSingleColumn: input.AllowSingleColumn }),
    ...(input.ContainsHeader !== undefined &&
      input.ContainsHeader !== null && { ContainsHeader: input.ContainsHeader }),
    ...(input.Delimiter !== undefined && input.Delimiter !== null && { Delimiter: input.Delimiter }),
    ...(input.DisableValueTrimming !== undefined &&
      input.DisableValueTrimming !== null && { DisableValueTrimming: input.DisableValueTrimming }),
    ...(input.Header !== undefined &&
      input.Header !== null && { Header: serializeAws_json1_1CsvHeader(input.Header, context) }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.QuoteSymbol !== undefined && input.QuoteSymbol !== null && { QuoteSymbol: input.QuoteSymbol }),
  };
};

const serializeAws_json1_1CreateDatabaseRequest = (input: CreateDatabaseRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseInput !== undefined &&
      input.DatabaseInput !== null && {
        DatabaseInput: serializeAws_json1_1DatabaseInput(input.DatabaseInput, context),
      }),
  };
};

const serializeAws_json1_1CreateDevEndpointRequest = (
  input: CreateDevEndpointRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Arguments !== undefined &&
      input.Arguments !== null && { Arguments: serializeAws_json1_1MapValue(input.Arguments, context) }),
    ...(input.EndpointName !== undefined && input.EndpointName !== null && { EndpointName: input.EndpointName }),
    ...(input.ExtraJarsS3Path !== undefined &&
      input.ExtraJarsS3Path !== null && { ExtraJarsS3Path: input.ExtraJarsS3Path }),
    ...(input.ExtraPythonLibsS3Path !== undefined &&
      input.ExtraPythonLibsS3Path !== null && { ExtraPythonLibsS3Path: input.ExtraPythonLibsS3Path }),
    ...(input.GlueVersion !== undefined && input.GlueVersion !== null && { GlueVersion: input.GlueVersion }),
    ...(input.NumberOfNodes !== undefined && input.NumberOfNodes !== null && { NumberOfNodes: input.NumberOfNodes }),
    ...(input.NumberOfWorkers !== undefined &&
      input.NumberOfWorkers !== null && { NumberOfWorkers: input.NumberOfWorkers }),
    ...(input.PublicKey !== undefined && input.PublicKey !== null && { PublicKey: input.PublicKey }),
    ...(input.PublicKeys !== undefined &&
      input.PublicKeys !== null && { PublicKeys: serializeAws_json1_1PublicKeysList(input.PublicKeys, context) }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    ...(input.SecurityConfiguration !== undefined &&
      input.SecurityConfiguration !== null && { SecurityConfiguration: input.SecurityConfiguration }),
    ...(input.SecurityGroupIds !== undefined &&
      input.SecurityGroupIds !== null && {
        SecurityGroupIds: serializeAws_json1_1StringList(input.SecurityGroupIds, context),
      }),
    ...(input.SubnetId !== undefined && input.SubnetId !== null && { SubnetId: input.SubnetId }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagsMap(input.Tags, context) }),
    ...(input.WorkerType !== undefined && input.WorkerType !== null && { WorkerType: input.WorkerType }),
  };
};

const serializeAws_json1_1CreateGrokClassifierRequest = (
  input: CreateGrokClassifierRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Classification !== undefined &&
      input.Classification !== null && { Classification: input.Classification }),
    ...(input.CustomPatterns !== undefined &&
      input.CustomPatterns !== null && { CustomPatterns: input.CustomPatterns }),
    ...(input.GrokPattern !== undefined && input.GrokPattern !== null && { GrokPattern: input.GrokPattern }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1CreateJobRequest = (input: CreateJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.AllocatedCapacity !== undefined &&
      input.AllocatedCapacity !== null && { AllocatedCapacity: input.AllocatedCapacity }),
    ...(input.Command !== undefined &&
      input.Command !== null && { Command: serializeAws_json1_1JobCommand(input.Command, context) }),
    ...(input.Connections !== undefined &&
      input.Connections !== null && { Connections: serializeAws_json1_1ConnectionsList(input.Connections, context) }),
    ...(input.DefaultArguments !== undefined &&
      input.DefaultArguments !== null && {
        DefaultArguments: serializeAws_json1_1GenericMap(input.DefaultArguments, context),
      }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.ExecutionProperty !== undefined &&
      input.ExecutionProperty !== null && {
        ExecutionProperty: serializeAws_json1_1ExecutionProperty(input.ExecutionProperty, context),
      }),
    ...(input.GlueVersion !== undefined && input.GlueVersion !== null && { GlueVersion: input.GlueVersion }),
    ...(input.LogUri !== undefined && input.LogUri !== null && { LogUri: input.LogUri }),
    ...(input.MaxCapacity !== undefined &&
      input.MaxCapacity !== null && { MaxCapacity: __serializeFloat(input.MaxCapacity) }),
    ...(input.MaxRetries !== undefined && input.MaxRetries !== null && { MaxRetries: input.MaxRetries }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.NonOverridableArguments !== undefined &&
      input.NonOverridableArguments !== null && {
        NonOverridableArguments: serializeAws_json1_1GenericMap(input.NonOverridableArguments, context),
      }),
    ...(input.NotificationProperty !== undefined &&
      input.NotificationProperty !== null && {
        NotificationProperty: serializeAws_json1_1NotificationProperty(input.NotificationProperty, context),
      }),
    ...(input.NumberOfWorkers !== undefined &&
      input.NumberOfWorkers !== null && { NumberOfWorkers: input.NumberOfWorkers }),
    ...(input.Role !== undefined && input.Role !== null && { Role: input.Role }),
    ...(input.SecurityConfiguration !== undefined &&
      input.SecurityConfiguration !== null && { SecurityConfiguration: input.SecurityConfiguration }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagsMap(input.Tags, context) }),
    ...(input.Timeout !== undefined && input.Timeout !== null && { Timeout: input.Timeout }),
    ...(input.WorkerType !== undefined && input.WorkerType !== null && { WorkerType: input.WorkerType }),
  };
};

const serializeAws_json1_1CreateJsonClassifierRequest = (
  input: CreateJsonClassifierRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JsonPath !== undefined && input.JsonPath !== null && { JsonPath: input.JsonPath }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1CreateMLTransformRequest = (
  input: CreateMLTransformRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.GlueVersion !== undefined && input.GlueVersion !== null && { GlueVersion: input.GlueVersion }),
    ...(input.InputRecordTables !== undefined &&
      input.InputRecordTables !== null && {
        InputRecordTables: serializeAws_json1_1GlueTables(input.InputRecordTables, context),
      }),
    ...(input.MaxCapacity !== undefined &&
      input.MaxCapacity !== null && { MaxCapacity: __serializeFloat(input.MaxCapacity) }),
    ...(input.MaxRetries !== undefined && input.MaxRetries !== null && { MaxRetries: input.MaxRetries }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.NumberOfWorkers !== undefined &&
      input.NumberOfWorkers !== null && { NumberOfWorkers: input.NumberOfWorkers }),
    ...(input.Parameters !== undefined &&
      input.Parameters !== null && { Parameters: serializeAws_json1_1TransformParameters(input.Parameters, context) }),
    ...(input.Role !== undefined && input.Role !== null && { Role: input.Role }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagsMap(input.Tags, context) }),
    ...(input.Timeout !== undefined && input.Timeout !== null && { Timeout: input.Timeout }),
    ...(input.TransformEncryption !== undefined &&
      input.TransformEncryption !== null && {
        TransformEncryption: serializeAws_json1_1TransformEncryption(input.TransformEncryption, context),
      }),
    ...(input.WorkerType !== undefined && input.WorkerType !== null && { WorkerType: input.WorkerType }),
  };
};

const serializeAws_json1_1CreatePartitionIndexRequest = (
  input: CreatePartitionIndexRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.PartitionIndex !== undefined &&
      input.PartitionIndex !== null && {
        PartitionIndex: serializeAws_json1_1PartitionIndex(input.PartitionIndex, context),
      }),
    ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_1CreatePartitionRequest = (input: CreatePartitionRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.PartitionInput !== undefined &&
      input.PartitionInput !== null && {
        PartitionInput: serializeAws_json1_1PartitionInput(input.PartitionInput, context),
      }),
    ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_1CreateRegistryInput = (input: CreateRegistryInput, context: __SerdeContext): any => {
  return {
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.RegistryName !== undefined && input.RegistryName !== null && { RegistryName: input.RegistryName }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagsMap(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateSchemaInput = (input: CreateSchemaInput, context: __SerdeContext): any => {
  return {
    ...(input.Compatibility !== undefined && input.Compatibility !== null && { Compatibility: input.Compatibility }),
    ...(input.DataFormat !== undefined && input.DataFormat !== null && { DataFormat: input.DataFormat }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.RegistryId !== undefined &&
      input.RegistryId !== null && { RegistryId: serializeAws_json1_1RegistryId(input.RegistryId, context) }),
    ...(input.SchemaDefinition !== undefined &&
      input.SchemaDefinition !== null && { SchemaDefinition: input.SchemaDefinition }),
    ...(input.SchemaName !== undefined && input.SchemaName !== null && { SchemaName: input.SchemaName }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagsMap(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateScriptRequest = (input: CreateScriptRequest, context: __SerdeContext): any => {
  return {
    ...(input.DagEdges !== undefined &&
      input.DagEdges !== null && { DagEdges: serializeAws_json1_1DagEdges(input.DagEdges, context) }),
    ...(input.DagNodes !== undefined &&
      input.DagNodes !== null && { DagNodes: serializeAws_json1_1DagNodes(input.DagNodes, context) }),
    ...(input.Language !== undefined && input.Language !== null && { Language: input.Language }),
  };
};

const serializeAws_json1_1CreateSecurityConfigurationRequest = (
  input: CreateSecurityConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EncryptionConfiguration !== undefined &&
      input.EncryptionConfiguration !== null && {
        EncryptionConfiguration: serializeAws_json1_1EncryptionConfiguration(input.EncryptionConfiguration, context),
      }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1CreateTableRequest = (input: CreateTableRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.PartitionIndexes !== undefined &&
      input.PartitionIndexes !== null && {
        PartitionIndexes: serializeAws_json1_1PartitionIndexList(input.PartitionIndexes, context),
      }),
    ...(input.TableInput !== undefined &&
      input.TableInput !== null && { TableInput: serializeAws_json1_1TableInput(input.TableInput, context) }),
  };
};

const serializeAws_json1_1CreateTriggerRequest = (input: CreateTriggerRequest, context: __SerdeContext): any => {
  return {
    ...(input.Actions !== undefined &&
      input.Actions !== null && { Actions: serializeAws_json1_1ActionList(input.Actions, context) }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.EventBatchingCondition !== undefined &&
      input.EventBatchingCondition !== null && {
        EventBatchingCondition: serializeAws_json1_1EventBatchingCondition(input.EventBatchingCondition, context),
      }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Predicate !== undefined &&
      input.Predicate !== null && { Predicate: serializeAws_json1_1Predicate(input.Predicate, context) }),
    ...(input.Schedule !== undefined && input.Schedule !== null && { Schedule: input.Schedule }),
    ...(input.StartOnCreation !== undefined &&
      input.StartOnCreation !== null && { StartOnCreation: input.StartOnCreation }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagsMap(input.Tags, context) }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    ...(input.WorkflowName !== undefined && input.WorkflowName !== null && { WorkflowName: input.WorkflowName }),
  };
};

const serializeAws_json1_1CreateUserDefinedFunctionRequest = (
  input: CreateUserDefinedFunctionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.FunctionInput !== undefined &&
      input.FunctionInput !== null && {
        FunctionInput: serializeAws_json1_1UserDefinedFunctionInput(input.FunctionInput, context),
      }),
  };
};

const serializeAws_json1_1CreateWorkflowRequest = (input: CreateWorkflowRequest, context: __SerdeContext): any => {
  return {
    ...(input.DefaultRunProperties !== undefined &&
      input.DefaultRunProperties !== null && {
        DefaultRunProperties: serializeAws_json1_1WorkflowRunProperties(input.DefaultRunProperties, context),
      }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.MaxConcurrentRuns !== undefined &&
      input.MaxConcurrentRuns !== null && { MaxConcurrentRuns: input.MaxConcurrentRuns }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagsMap(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateXMLClassifierRequest = (
  input: CreateXMLClassifierRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Classification !== undefined &&
      input.Classification !== null && { Classification: input.Classification }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.RowTag !== undefined && input.RowTag !== null && { RowTag: input.RowTag }),
  };
};

const serializeAws_json1_1CsvHeader = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1DagEdges = (input: CodeGenEdge[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1CodeGenEdge(entry, context);
    });
};

const serializeAws_json1_1DagNodes = (input: CodeGenNode[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1CodeGenNode(entry, context);
    });
};

const serializeAws_json1_1DatabaseIdentifier = (input: DatabaseIdentifier, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
  };
};

const serializeAws_json1_1DatabaseInput = (input: DatabaseInput, context: __SerdeContext): any => {
  return {
    ...(input.CreateTableDefaultPermissions !== undefined &&
      input.CreateTableDefaultPermissions !== null && {
        CreateTableDefaultPermissions: serializeAws_json1_1PrincipalPermissionsList(
          input.CreateTableDefaultPermissions,
          context
        ),
      }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.LocationUri !== undefined && input.LocationUri !== null && { LocationUri: input.LocationUri }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Parameters !== undefined &&
      input.Parameters !== null && { Parameters: serializeAws_json1_1ParametersMap(input.Parameters, context) }),
    ...(input.TargetDatabase !== undefined &&
      input.TargetDatabase !== null && {
        TargetDatabase: serializeAws_json1_1DatabaseIdentifier(input.TargetDatabase, context),
      }),
  };
};

const serializeAws_json1_1DataCatalogEncryptionSettings = (
  input: DataCatalogEncryptionSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConnectionPasswordEncryption !== undefined &&
      input.ConnectionPasswordEncryption !== null && {
        ConnectionPasswordEncryption: serializeAws_json1_1ConnectionPasswordEncryption(
          input.ConnectionPasswordEncryption,
          context
        ),
      }),
    ...(input.EncryptionAtRest !== undefined &&
      input.EncryptionAtRest !== null && {
        EncryptionAtRest: serializeAws_json1_1EncryptionAtRest(input.EncryptionAtRest, context),
      }),
  };
};

const serializeAws_json1_1DataLakePrincipal = (input: DataLakePrincipal, context: __SerdeContext): any => {
  return {
    ...(input.DataLakePrincipalIdentifier !== undefined &&
      input.DataLakePrincipalIdentifier !== null && { DataLakePrincipalIdentifier: input.DataLakePrincipalIdentifier }),
  };
};

const serializeAws_json1_1DateColumnStatisticsData = (
  input: DateColumnStatisticsData,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaximumValue !== undefined &&
      input.MaximumValue !== null && { MaximumValue: Math.round(input.MaximumValue.getTime() / 1000) }),
    ...(input.MinimumValue !== undefined &&
      input.MinimumValue !== null && { MinimumValue: Math.round(input.MinimumValue.getTime() / 1000) }),
    ...(input.NumberOfDistinctValues !== undefined &&
      input.NumberOfDistinctValues !== null && { NumberOfDistinctValues: input.NumberOfDistinctValues }),
    ...(input.NumberOfNulls !== undefined && input.NumberOfNulls !== null && { NumberOfNulls: input.NumberOfNulls }),
  };
};

const serializeAws_json1_1DecimalColumnStatisticsData = (
  input: DecimalColumnStatisticsData,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaximumValue !== undefined &&
      input.MaximumValue !== null && { MaximumValue: serializeAws_json1_1DecimalNumber(input.MaximumValue, context) }),
    ...(input.MinimumValue !== undefined &&
      input.MinimumValue !== null && { MinimumValue: serializeAws_json1_1DecimalNumber(input.MinimumValue, context) }),
    ...(input.NumberOfDistinctValues !== undefined &&
      input.NumberOfDistinctValues !== null && { NumberOfDistinctValues: input.NumberOfDistinctValues }),
    ...(input.NumberOfNulls !== undefined && input.NumberOfNulls !== null && { NumberOfNulls: input.NumberOfNulls }),
  };
};

const serializeAws_json1_1DecimalNumber = (input: DecimalNumber, context: __SerdeContext): any => {
  return {
    ...(input.Scale !== undefined && input.Scale !== null && { Scale: input.Scale }),
    ...(input.UnscaledValue !== undefined &&
      input.UnscaledValue !== null && { UnscaledValue: context.base64Encoder(input.UnscaledValue) }),
  };
};

const serializeAws_json1_1DeleteClassifierRequest = (input: DeleteClassifierRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DeleteColumnStatisticsForPartitionRequest = (
  input: DeleteColumnStatisticsForPartitionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.ColumnName !== undefined && input.ColumnName !== null && { ColumnName: input.ColumnName }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.PartitionValues !== undefined &&
      input.PartitionValues !== null && {
        PartitionValues: serializeAws_json1_1ValueStringList(input.PartitionValues, context),
      }),
    ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_1DeleteColumnStatisticsForTableRequest = (
  input: DeleteColumnStatisticsForTableRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.ColumnName !== undefined && input.ColumnName !== null && { ColumnName: input.ColumnName }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_1DeleteConnectionNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1DeleteConnectionRequest = (input: DeleteConnectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.ConnectionName !== undefined &&
      input.ConnectionName !== null && { ConnectionName: input.ConnectionName }),
  };
};

const serializeAws_json1_1DeleteCrawlerRequest = (input: DeleteCrawlerRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DeleteDatabaseRequest = (input: DeleteDatabaseRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DeleteDevEndpointRequest = (
  input: DeleteDevEndpointRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EndpointName !== undefined && input.EndpointName !== null && { EndpointName: input.EndpointName }),
  };
};

const serializeAws_json1_1DeleteJobRequest = (input: DeleteJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobName !== undefined && input.JobName !== null && { JobName: input.JobName }),
  };
};

const serializeAws_json1_1DeleteMLTransformRequest = (
  input: DeleteMLTransformRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.TransformId !== undefined && input.TransformId !== null && { TransformId: input.TransformId }),
  };
};

const serializeAws_json1_1DeletePartitionIndexRequest = (
  input: DeletePartitionIndexRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.IndexName !== undefined && input.IndexName !== null && { IndexName: input.IndexName }),
    ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_1DeletePartitionRequest = (input: DeletePartitionRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.PartitionValues !== undefined &&
      input.PartitionValues !== null && {
        PartitionValues: serializeAws_json1_1ValueStringList(input.PartitionValues, context),
      }),
    ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_1DeleteRegistryInput = (input: DeleteRegistryInput, context: __SerdeContext): any => {
  return {
    ...(input.RegistryId !== undefined &&
      input.RegistryId !== null && { RegistryId: serializeAws_json1_1RegistryId(input.RegistryId, context) }),
  };
};

const serializeAws_json1_1DeleteResourcePolicyRequest = (
  input: DeleteResourcePolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.PolicyHashCondition !== undefined &&
      input.PolicyHashCondition !== null && { PolicyHashCondition: input.PolicyHashCondition }),
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1DeleteSchemaInput = (input: DeleteSchemaInput, context: __SerdeContext): any => {
  return {
    ...(input.SchemaId !== undefined &&
      input.SchemaId !== null && { SchemaId: serializeAws_json1_1SchemaId(input.SchemaId, context) }),
  };
};

const serializeAws_json1_1DeleteSchemaVersionsInput = (
  input: DeleteSchemaVersionsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.SchemaId !== undefined &&
      input.SchemaId !== null && { SchemaId: serializeAws_json1_1SchemaId(input.SchemaId, context) }),
    ...(input.Versions !== undefined && input.Versions !== null && { Versions: input.Versions }),
  };
};

const serializeAws_json1_1DeleteSecurityConfigurationRequest = (
  input: DeleteSecurityConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DeleteTableRequest = (input: DeleteTableRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DeleteTableVersionRequest = (
  input: DeleteTableVersionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    ...(input.VersionId !== undefined && input.VersionId !== null && { VersionId: input.VersionId }),
  };
};

const serializeAws_json1_1DeleteTriggerRequest = (input: DeleteTriggerRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DeleteUserDefinedFunctionRequest = (
  input: DeleteUserDefinedFunctionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.FunctionName !== undefined && input.FunctionName !== null && { FunctionName: input.FunctionName }),
  };
};

const serializeAws_json1_1DeleteWorkflowRequest = (input: DeleteWorkflowRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DevEndpointCustomLibraries = (
  input: DevEndpointCustomLibraries,
  context: __SerdeContext
): any => {
  return {
    ...(input.ExtraJarsS3Path !== undefined &&
      input.ExtraJarsS3Path !== null && { ExtraJarsS3Path: input.ExtraJarsS3Path }),
    ...(input.ExtraPythonLibsS3Path !== undefined &&
      input.ExtraPythonLibsS3Path !== null && { ExtraPythonLibsS3Path: input.ExtraPythonLibsS3Path }),
  };
};

const serializeAws_json1_1DevEndpointNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1DoubleColumnStatisticsData = (
  input: DoubleColumnStatisticsData,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaximumValue !== undefined &&
      input.MaximumValue !== null && { MaximumValue: __serializeFloat(input.MaximumValue) }),
    ...(input.MinimumValue !== undefined &&
      input.MinimumValue !== null && { MinimumValue: __serializeFloat(input.MinimumValue) }),
    ...(input.NumberOfDistinctValues !== undefined &&
      input.NumberOfDistinctValues !== null && { NumberOfDistinctValues: input.NumberOfDistinctValues }),
    ...(input.NumberOfNulls !== undefined && input.NumberOfNulls !== null && { NumberOfNulls: input.NumberOfNulls }),
  };
};

const serializeAws_json1_1DynamoDBTarget = (input: DynamoDBTarget, context: __SerdeContext): any => {
  return {
    ...(input.Path !== undefined && input.Path !== null && { Path: input.Path }),
    ...(input.scanAll !== undefined && input.scanAll !== null && { scanAll: input.scanAll }),
    ...(input.scanRate !== undefined && input.scanRate !== null && { scanRate: __serializeFloat(input.scanRate) }),
  };
};

const serializeAws_json1_1DynamoDBTargetList = (input: DynamoDBTarget[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1DynamoDBTarget(entry, context);
    });
};

const serializeAws_json1_1EncryptionAtRest = (input: EncryptionAtRest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogEncryptionMode !== undefined &&
      input.CatalogEncryptionMode !== null && { CatalogEncryptionMode: input.CatalogEncryptionMode }),
    ...(input.SseAwsKmsKeyId !== undefined &&
      input.SseAwsKmsKeyId !== null && { SseAwsKmsKeyId: input.SseAwsKmsKeyId }),
  };
};

const serializeAws_json1_1EncryptionConfiguration = (input: EncryptionConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.CloudWatchEncryption !== undefined &&
      input.CloudWatchEncryption !== null && {
        CloudWatchEncryption: serializeAws_json1_1CloudWatchEncryption(input.CloudWatchEncryption, context),
      }),
    ...(input.JobBookmarksEncryption !== undefined &&
      input.JobBookmarksEncryption !== null && {
        JobBookmarksEncryption: serializeAws_json1_1JobBookmarksEncryption(input.JobBookmarksEncryption, context),
      }),
    ...(input.S3Encryption !== undefined &&
      input.S3Encryption !== null && {
        S3Encryption: serializeAws_json1_1S3EncryptionList(input.S3Encryption, context),
      }),
  };
};

const serializeAws_json1_1EventBatchingCondition = (input: EventBatchingCondition, context: __SerdeContext): any => {
  return {
    ...(input.BatchSize !== undefined && input.BatchSize !== null && { BatchSize: input.BatchSize }),
    ...(input.BatchWindow !== undefined && input.BatchWindow !== null && { BatchWindow: input.BatchWindow }),
  };
};

const serializeAws_json1_1ExecutionProperty = (input: ExecutionProperty, context: __SerdeContext): any => {
  return {
    ...(input.MaxConcurrentRuns !== undefined &&
      input.MaxConcurrentRuns !== null && { MaxConcurrentRuns: input.MaxConcurrentRuns }),
  };
};

const serializeAws_json1_1FindMatchesParameters = (input: FindMatchesParameters, context: __SerdeContext): any => {
  return {
    ...(input.AccuracyCostTradeoff !== undefined &&
      input.AccuracyCostTradeoff !== null && { AccuracyCostTradeoff: __serializeFloat(input.AccuracyCostTradeoff) }),
    ...(input.EnforceProvidedLabels !== undefined &&
      input.EnforceProvidedLabels !== null && { EnforceProvidedLabels: input.EnforceProvidedLabels }),
    ...(input.PrecisionRecallTradeoff !== undefined &&
      input.PrecisionRecallTradeoff !== null && {
        PrecisionRecallTradeoff: __serializeFloat(input.PrecisionRecallTradeoff),
      }),
    ...(input.PrimaryKeyColumnName !== undefined &&
      input.PrimaryKeyColumnName !== null && { PrimaryKeyColumnName: input.PrimaryKeyColumnName }),
  };
};

const serializeAws_json1_1GenericMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_json1_1GetCatalogImportStatusRequest = (
  input: GetCatalogImportStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
  };
};

const serializeAws_json1_1GetClassifierRequest = (input: GetClassifierRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1GetClassifiersRequest = (input: GetClassifiersRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1GetColumnNamesList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1GetColumnStatisticsForPartitionRequest = (
  input: GetColumnStatisticsForPartitionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.ColumnNames !== undefined &&
      input.ColumnNames !== null && {
        ColumnNames: serializeAws_json1_1GetColumnNamesList(input.ColumnNames, context),
      }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.PartitionValues !== undefined &&
      input.PartitionValues !== null && {
        PartitionValues: serializeAws_json1_1ValueStringList(input.PartitionValues, context),
      }),
    ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_1GetColumnStatisticsForTableRequest = (
  input: GetColumnStatisticsForTableRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.ColumnNames !== undefined &&
      input.ColumnNames !== null && {
        ColumnNames: serializeAws_json1_1GetColumnNamesList(input.ColumnNames, context),
      }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_1GetConnectionRequest = (input: GetConnectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.HidePassword !== undefined && input.HidePassword !== null && { HidePassword: input.HidePassword }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1GetConnectionsFilter = (input: GetConnectionsFilter, context: __SerdeContext): any => {
  return {
    ...(input.ConnectionType !== undefined &&
      input.ConnectionType !== null && { ConnectionType: input.ConnectionType }),
    ...(input.MatchCriteria !== undefined &&
      input.MatchCriteria !== null && {
        MatchCriteria: serializeAws_json1_1MatchCriteria(input.MatchCriteria, context),
      }),
  };
};

const serializeAws_json1_1GetConnectionsRequest = (input: GetConnectionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.Filter !== undefined &&
      input.Filter !== null && { Filter: serializeAws_json1_1GetConnectionsFilter(input.Filter, context) }),
    ...(input.HidePassword !== undefined && input.HidePassword !== null && { HidePassword: input.HidePassword }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1GetCrawlerMetricsRequest = (
  input: GetCrawlerMetricsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CrawlerNameList !== undefined &&
      input.CrawlerNameList !== null && {
        CrawlerNameList: serializeAws_json1_1CrawlerNameList(input.CrawlerNameList, context),
      }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1GetCrawlerRequest = (input: GetCrawlerRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1GetCrawlersRequest = (input: GetCrawlersRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1GetDatabaseRequest = (input: GetDatabaseRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1GetDatabasesRequest = (input: GetDatabasesRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ResourceShareType !== undefined &&
      input.ResourceShareType !== null && { ResourceShareType: input.ResourceShareType }),
  };
};

const serializeAws_json1_1GetDataCatalogEncryptionSettingsRequest = (
  input: GetDataCatalogEncryptionSettingsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
  };
};

const serializeAws_json1_1GetDataflowGraphRequest = (input: GetDataflowGraphRequest, context: __SerdeContext): any => {
  return {
    ...(input.PythonScript !== undefined && input.PythonScript !== null && { PythonScript: input.PythonScript }),
  };
};

const serializeAws_json1_1GetDevEndpointRequest = (input: GetDevEndpointRequest, context: __SerdeContext): any => {
  return {
    ...(input.EndpointName !== undefined && input.EndpointName !== null && { EndpointName: input.EndpointName }),
  };
};

const serializeAws_json1_1GetDevEndpointsRequest = (input: GetDevEndpointsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1GetJobBookmarkRequest = (input: GetJobBookmarkRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobName !== undefined && input.JobName !== null && { JobName: input.JobName }),
    ...(input.RunId !== undefined && input.RunId !== null && { RunId: input.RunId }),
  };
};

const serializeAws_json1_1GetJobRequest = (input: GetJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobName !== undefined && input.JobName !== null && { JobName: input.JobName }),
  };
};

const serializeAws_json1_1GetJobRunRequest = (input: GetJobRunRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobName !== undefined && input.JobName !== null && { JobName: input.JobName }),
    ...(input.PredecessorsIncluded !== undefined &&
      input.PredecessorsIncluded !== null && { PredecessorsIncluded: input.PredecessorsIncluded }),
    ...(input.RunId !== undefined && input.RunId !== null && { RunId: input.RunId }),
  };
};

const serializeAws_json1_1GetJobRunsRequest = (input: GetJobRunsRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobName !== undefined && input.JobName !== null && { JobName: input.JobName }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1GetJobsRequest = (input: GetJobsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1GetMappingRequest = (input: GetMappingRequest, context: __SerdeContext): any => {
  return {
    ...(input.Location !== undefined &&
      input.Location !== null && { Location: serializeAws_json1_1Location(input.Location, context) }),
    ...(input.Sinks !== undefined &&
      input.Sinks !== null && { Sinks: serializeAws_json1_1CatalogEntries(input.Sinks, context) }),
    ...(input.Source !== undefined &&
      input.Source !== null && { Source: serializeAws_json1_1CatalogEntry(input.Source, context) }),
  };
};

const serializeAws_json1_1GetMLTaskRunRequest = (input: GetMLTaskRunRequest, context: __SerdeContext): any => {
  return {
    ...(input.TaskRunId !== undefined && input.TaskRunId !== null && { TaskRunId: input.TaskRunId }),
    ...(input.TransformId !== undefined && input.TransformId !== null && { TransformId: input.TransformId }),
  };
};

const serializeAws_json1_1GetMLTaskRunsRequest = (input: GetMLTaskRunsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filter !== undefined &&
      input.Filter !== null && { Filter: serializeAws_json1_1TaskRunFilterCriteria(input.Filter, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.Sort !== undefined &&
      input.Sort !== null && { Sort: serializeAws_json1_1TaskRunSortCriteria(input.Sort, context) }),
    ...(input.TransformId !== undefined && input.TransformId !== null && { TransformId: input.TransformId }),
  };
};

const serializeAws_json1_1GetMLTransformRequest = (input: GetMLTransformRequest, context: __SerdeContext): any => {
  return {
    ...(input.TransformId !== undefined && input.TransformId !== null && { TransformId: input.TransformId }),
  };
};

const serializeAws_json1_1GetMLTransformsRequest = (input: GetMLTransformsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filter !== undefined &&
      input.Filter !== null && { Filter: serializeAws_json1_1TransformFilterCriteria(input.Filter, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.Sort !== undefined &&
      input.Sort !== null && { Sort: serializeAws_json1_1TransformSortCriteria(input.Sort, context) }),
  };
};

const serializeAws_json1_1GetPartitionIndexesRequest = (
  input: GetPartitionIndexesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_1GetPartitionRequest = (input: GetPartitionRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.PartitionValues !== undefined &&
      input.PartitionValues !== null && {
        PartitionValues: serializeAws_json1_1ValueStringList(input.PartitionValues, context),
      }),
    ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_1GetPartitionsRequest = (input: GetPartitionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.ExcludeColumnSchema !== undefined &&
      input.ExcludeColumnSchema !== null && { ExcludeColumnSchema: input.ExcludeColumnSchema }),
    ...(input.Expression !== undefined && input.Expression !== null && { Expression: input.Expression }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.Segment !== undefined &&
      input.Segment !== null && { Segment: serializeAws_json1_1Segment(input.Segment, context) }),
    ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_1GetPlanRequest = (input: GetPlanRequest, context: __SerdeContext): any => {
  return {
    ...(input.AdditionalPlanOptionsMap !== undefined &&
      input.AdditionalPlanOptionsMap !== null && {
        AdditionalPlanOptionsMap: serializeAws_json1_1AdditionalPlanOptionsMap(input.AdditionalPlanOptionsMap, context),
      }),
    ...(input.Language !== undefined && input.Language !== null && { Language: input.Language }),
    ...(input.Location !== undefined &&
      input.Location !== null && { Location: serializeAws_json1_1Location(input.Location, context) }),
    ...(input.Mapping !== undefined &&
      input.Mapping !== null && { Mapping: serializeAws_json1_1MappingList(input.Mapping, context) }),
    ...(input.Sinks !== undefined &&
      input.Sinks !== null && { Sinks: serializeAws_json1_1CatalogEntries(input.Sinks, context) }),
    ...(input.Source !== undefined &&
      input.Source !== null && { Source: serializeAws_json1_1CatalogEntry(input.Source, context) }),
  };
};

const serializeAws_json1_1GetRegistryInput = (input: GetRegistryInput, context: __SerdeContext): any => {
  return {
    ...(input.RegistryId !== undefined &&
      input.RegistryId !== null && { RegistryId: serializeAws_json1_1RegistryId(input.RegistryId, context) }),
  };
};

const serializeAws_json1_1GetResourcePoliciesRequest = (
  input: GetResourcePoliciesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1GetResourcePolicyRequest = (
  input: GetResourcePolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1GetSchemaByDefinitionInput = (
  input: GetSchemaByDefinitionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.SchemaDefinition !== undefined &&
      input.SchemaDefinition !== null && { SchemaDefinition: input.SchemaDefinition }),
    ...(input.SchemaId !== undefined &&
      input.SchemaId !== null && { SchemaId: serializeAws_json1_1SchemaId(input.SchemaId, context) }),
  };
};

const serializeAws_json1_1GetSchemaInput = (input: GetSchemaInput, context: __SerdeContext): any => {
  return {
    ...(input.SchemaId !== undefined &&
      input.SchemaId !== null && { SchemaId: serializeAws_json1_1SchemaId(input.SchemaId, context) }),
  };
};

const serializeAws_json1_1GetSchemaVersionInput = (input: GetSchemaVersionInput, context: __SerdeContext): any => {
  return {
    ...(input.SchemaId !== undefined &&
      input.SchemaId !== null && { SchemaId: serializeAws_json1_1SchemaId(input.SchemaId, context) }),
    ...(input.SchemaVersionId !== undefined &&
      input.SchemaVersionId !== null && { SchemaVersionId: input.SchemaVersionId }),
    ...(input.SchemaVersionNumber !== undefined &&
      input.SchemaVersionNumber !== null && {
        SchemaVersionNumber: serializeAws_json1_1SchemaVersionNumber(input.SchemaVersionNumber, context),
      }),
  };
};

const serializeAws_json1_1GetSchemaVersionsDiffInput = (
  input: GetSchemaVersionsDiffInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.FirstSchemaVersionNumber !== undefined &&
      input.FirstSchemaVersionNumber !== null && {
        FirstSchemaVersionNumber: serializeAws_json1_1SchemaVersionNumber(input.FirstSchemaVersionNumber, context),
      }),
    ...(input.SchemaDiffType !== undefined &&
      input.SchemaDiffType !== null && { SchemaDiffType: input.SchemaDiffType }),
    ...(input.SchemaId !== undefined &&
      input.SchemaId !== null && { SchemaId: serializeAws_json1_1SchemaId(input.SchemaId, context) }),
    ...(input.SecondSchemaVersionNumber !== undefined &&
      input.SecondSchemaVersionNumber !== null && {
        SecondSchemaVersionNumber: serializeAws_json1_1SchemaVersionNumber(input.SecondSchemaVersionNumber, context),
      }),
  };
};

const serializeAws_json1_1GetSecurityConfigurationRequest = (
  input: GetSecurityConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1GetSecurityConfigurationsRequest = (
  input: GetSecurityConfigurationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1GetTableRequest = (input: GetTableRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1GetTablesRequest = (input: GetTablesRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.Expression !== undefined && input.Expression !== null && { Expression: input.Expression }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1GetTableVersionRequest = (input: GetTableVersionRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    ...(input.VersionId !== undefined && input.VersionId !== null && { VersionId: input.VersionId }),
  };
};

const serializeAws_json1_1GetTableVersionsRequest = (input: GetTableVersionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_1GetTagsRequest = (input: GetTagsRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1GetTriggerRequest = (input: GetTriggerRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1GetTriggersRequest = (input: GetTriggersRequest, context: __SerdeContext): any => {
  return {
    ...(input.DependentJobName !== undefined &&
      input.DependentJobName !== null && { DependentJobName: input.DependentJobName }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1GetUserDefinedFunctionRequest = (
  input: GetUserDefinedFunctionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.FunctionName !== undefined && input.FunctionName !== null && { FunctionName: input.FunctionName }),
  };
};

const serializeAws_json1_1GetUserDefinedFunctionsRequest = (
  input: GetUserDefinedFunctionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.Pattern !== undefined && input.Pattern !== null && { Pattern: input.Pattern }),
  };
};

const serializeAws_json1_1GetWorkflowRequest = (input: GetWorkflowRequest, context: __SerdeContext): any => {
  return {
    ...(input.IncludeGraph !== undefined && input.IncludeGraph !== null && { IncludeGraph: input.IncludeGraph }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1GetWorkflowRunPropertiesRequest = (
  input: GetWorkflowRunPropertiesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.RunId !== undefined && input.RunId !== null && { RunId: input.RunId }),
  };
};

const serializeAws_json1_1GetWorkflowRunRequest = (input: GetWorkflowRunRequest, context: __SerdeContext): any => {
  return {
    ...(input.IncludeGraph !== undefined && input.IncludeGraph !== null && { IncludeGraph: input.IncludeGraph }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.RunId !== undefined && input.RunId !== null && { RunId: input.RunId }),
  };
};

const serializeAws_json1_1GetWorkflowRunsRequest = (input: GetWorkflowRunsRequest, context: __SerdeContext): any => {
  return {
    ...(input.IncludeGraph !== undefined && input.IncludeGraph !== null && { IncludeGraph: input.IncludeGraph }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1GlueTable = (input: GlueTable, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.ConnectionName !== undefined &&
      input.ConnectionName !== null && { ConnectionName: input.ConnectionName }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_1GlueTables = (input: GlueTable[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1GlueTable(entry, context);
    });
};

const serializeAws_json1_1ImportCatalogToGlueRequest = (
  input: ImportCatalogToGlueRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
  };
};

const serializeAws_json1_1JdbcTarget = (input: JdbcTarget, context: __SerdeContext): any => {
  return {
    ...(input.ConnectionName !== undefined &&
      input.ConnectionName !== null && { ConnectionName: input.ConnectionName }),
    ...(input.Exclusions !== undefined &&
      input.Exclusions !== null && { Exclusions: serializeAws_json1_1PathList(input.Exclusions, context) }),
    ...(input.Path !== undefined && input.Path !== null && { Path: input.Path }),
  };
};

const serializeAws_json1_1JdbcTargetList = (input: JdbcTarget[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1JdbcTarget(entry, context);
    });
};

const serializeAws_json1_1JobBookmarksEncryption = (input: JobBookmarksEncryption, context: __SerdeContext): any => {
  return {
    ...(input.JobBookmarksEncryptionMode !== undefined &&
      input.JobBookmarksEncryptionMode !== null && { JobBookmarksEncryptionMode: input.JobBookmarksEncryptionMode }),
    ...(input.KmsKeyArn !== undefined && input.KmsKeyArn !== null && { KmsKeyArn: input.KmsKeyArn }),
  };
};

const serializeAws_json1_1JobCommand = (input: JobCommand, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.PythonVersion !== undefined && input.PythonVersion !== null && { PythonVersion: input.PythonVersion }),
    ...(input.ScriptLocation !== undefined &&
      input.ScriptLocation !== null && { ScriptLocation: input.ScriptLocation }),
  };
};

const serializeAws_json1_1JobNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1JobUpdate = (input: JobUpdate, context: __SerdeContext): any => {
  return {
    ...(input.AllocatedCapacity !== undefined &&
      input.AllocatedCapacity !== null && { AllocatedCapacity: input.AllocatedCapacity }),
    ...(input.Command !== undefined &&
      input.Command !== null && { Command: serializeAws_json1_1JobCommand(input.Command, context) }),
    ...(input.Connections !== undefined &&
      input.Connections !== null && { Connections: serializeAws_json1_1ConnectionsList(input.Connections, context) }),
    ...(input.DefaultArguments !== undefined &&
      input.DefaultArguments !== null && {
        DefaultArguments: serializeAws_json1_1GenericMap(input.DefaultArguments, context),
      }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.ExecutionProperty !== undefined &&
      input.ExecutionProperty !== null && {
        ExecutionProperty: serializeAws_json1_1ExecutionProperty(input.ExecutionProperty, context),
      }),
    ...(input.GlueVersion !== undefined && input.GlueVersion !== null && { GlueVersion: input.GlueVersion }),
    ...(input.LogUri !== undefined && input.LogUri !== null && { LogUri: input.LogUri }),
    ...(input.MaxCapacity !== undefined &&
      input.MaxCapacity !== null && { MaxCapacity: __serializeFloat(input.MaxCapacity) }),
    ...(input.MaxRetries !== undefined && input.MaxRetries !== null && { MaxRetries: input.MaxRetries }),
    ...(input.NonOverridableArguments !== undefined &&
      input.NonOverridableArguments !== null && {
        NonOverridableArguments: serializeAws_json1_1GenericMap(input.NonOverridableArguments, context),
      }),
    ...(input.NotificationProperty !== undefined &&
      input.NotificationProperty !== null && {
        NotificationProperty: serializeAws_json1_1NotificationProperty(input.NotificationProperty, context),
      }),
    ...(input.NumberOfWorkers !== undefined &&
      input.NumberOfWorkers !== null && { NumberOfWorkers: input.NumberOfWorkers }),
    ...(input.Role !== undefined && input.Role !== null && { Role: input.Role }),
    ...(input.SecurityConfiguration !== undefined &&
      input.SecurityConfiguration !== null && { SecurityConfiguration: input.SecurityConfiguration }),
    ...(input.Timeout !== undefined && input.Timeout !== null && { Timeout: input.Timeout }),
    ...(input.WorkerType !== undefined && input.WorkerType !== null && { WorkerType: input.WorkerType }),
  };
};

const serializeAws_json1_1KeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1LineageConfiguration = (input: LineageConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.CrawlerLineageSettings !== undefined &&
      input.CrawlerLineageSettings !== null && { CrawlerLineageSettings: input.CrawlerLineageSettings }),
  };
};

const serializeAws_json1_1ListCrawlersRequest = (input: ListCrawlersRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagsMap(input.Tags, context) }),
  };
};

const serializeAws_json1_1ListDevEndpointsRequest = (input: ListDevEndpointsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagsMap(input.Tags, context) }),
  };
};

const serializeAws_json1_1ListJobsRequest = (input: ListJobsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagsMap(input.Tags, context) }),
  };
};

const serializeAws_json1_1ListMLTransformsRequest = (input: ListMLTransformsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filter !== undefined &&
      input.Filter !== null && { Filter: serializeAws_json1_1TransformFilterCriteria(input.Filter, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.Sort !== undefined &&
      input.Sort !== null && { Sort: serializeAws_json1_1TransformSortCriteria(input.Sort, context) }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagsMap(input.Tags, context) }),
  };
};

const serializeAws_json1_1ListRegistriesInput = (input: ListRegistriesInput, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListSchemasInput = (input: ListSchemasInput, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.RegistryId !== undefined &&
      input.RegistryId !== null && { RegistryId: serializeAws_json1_1RegistryId(input.RegistryId, context) }),
  };
};

const serializeAws_json1_1ListSchemaVersionsInput = (input: ListSchemaVersionsInput, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.SchemaId !== undefined &&
      input.SchemaId !== null && { SchemaId: serializeAws_json1_1SchemaId(input.SchemaId, context) }),
  };
};

const serializeAws_json1_1ListTriggersRequest = (input: ListTriggersRequest, context: __SerdeContext): any => {
  return {
    ...(input.DependentJobName !== undefined &&
      input.DependentJobName !== null && { DependentJobName: input.DependentJobName }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagsMap(input.Tags, context) }),
  };
};

const serializeAws_json1_1ListWorkflowsRequest = (input: ListWorkflowsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1Location = (input: Location, context: __SerdeContext): any => {
  return {
    ...(input.DynamoDB !== undefined &&
      input.DynamoDB !== null && { DynamoDB: serializeAws_json1_1CodeGenNodeArgs(input.DynamoDB, context) }),
    ...(input.Jdbc !== undefined &&
      input.Jdbc !== null && { Jdbc: serializeAws_json1_1CodeGenNodeArgs(input.Jdbc, context) }),
    ...(input.S3 !== undefined && input.S3 !== null && { S3: serializeAws_json1_1CodeGenNodeArgs(input.S3, context) }),
  };
};

const serializeAws_json1_1LocationMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_json1_1LongColumnStatisticsData = (
  input: LongColumnStatisticsData,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaximumValue !== undefined && input.MaximumValue !== null && { MaximumValue: input.MaximumValue }),
    ...(input.MinimumValue !== undefined && input.MinimumValue !== null && { MinimumValue: input.MinimumValue }),
    ...(input.NumberOfDistinctValues !== undefined &&
      input.NumberOfDistinctValues !== null && { NumberOfDistinctValues: input.NumberOfDistinctValues }),
    ...(input.NumberOfNulls !== undefined && input.NumberOfNulls !== null && { NumberOfNulls: input.NumberOfNulls }),
  };
};

const serializeAws_json1_1MappingEntry = (input: MappingEntry, context: __SerdeContext): any => {
  return {
    ...(input.SourcePath !== undefined && input.SourcePath !== null && { SourcePath: input.SourcePath }),
    ...(input.SourceTable !== undefined && input.SourceTable !== null && { SourceTable: input.SourceTable }),
    ...(input.SourceType !== undefined && input.SourceType !== null && { SourceType: input.SourceType }),
    ...(input.TargetPath !== undefined && input.TargetPath !== null && { TargetPath: input.TargetPath }),
    ...(input.TargetTable !== undefined && input.TargetTable !== null && { TargetTable: input.TargetTable }),
    ...(input.TargetType !== undefined && input.TargetType !== null && { TargetType: input.TargetType }),
  };
};

const serializeAws_json1_1MappingList = (input: MappingEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1MappingEntry(entry, context);
    });
};

const serializeAws_json1_1MapValue = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_json1_1MatchCriteria = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1MetadataKeyValuePair = (input: MetadataKeyValuePair, context: __SerdeContext): any => {
  return {
    ...(input.MetadataKey !== undefined && input.MetadataKey !== null && { MetadataKey: input.MetadataKey }),
    ...(input.MetadataValue !== undefined && input.MetadataValue !== null && { MetadataValue: input.MetadataValue }),
  };
};

const serializeAws_json1_1MetadataList = (input: MetadataKeyValuePair[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1MetadataKeyValuePair(entry, context);
    });
};

const serializeAws_json1_1MLUserDataEncryption = (input: MLUserDataEncryption, context: __SerdeContext): any => {
  return {
    ...(input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId }),
    ...(input.MlUserDataEncryptionMode !== undefined &&
      input.MlUserDataEncryptionMode !== null && { MlUserDataEncryptionMode: input.MlUserDataEncryptionMode }),
  };
};

const serializeAws_json1_1MongoDBTarget = (input: MongoDBTarget, context: __SerdeContext): any => {
  return {
    ...(input.ConnectionName !== undefined &&
      input.ConnectionName !== null && { ConnectionName: input.ConnectionName }),
    ...(input.Path !== undefined && input.Path !== null && { Path: input.Path }),
    ...(input.ScanAll !== undefined && input.ScanAll !== null && { ScanAll: input.ScanAll }),
  };
};

const serializeAws_json1_1MongoDBTargetList = (input: MongoDBTarget[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1MongoDBTarget(entry, context);
    });
};

const serializeAws_json1_1NameStringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1NodeIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1NotificationProperty = (input: NotificationProperty, context: __SerdeContext): any => {
  return {
    ...(input.NotifyDelayAfter !== undefined &&
      input.NotifyDelayAfter !== null && { NotifyDelayAfter: input.NotifyDelayAfter }),
  };
};

const serializeAws_json1_1OrchestrationStringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1Order = (input: Order, context: __SerdeContext): any => {
  return {
    ...(input.Column !== undefined && input.Column !== null && { Column: input.Column }),
    ...(input.SortOrder !== undefined && input.SortOrder !== null && { SortOrder: input.SortOrder }),
  };
};

const serializeAws_json1_1OrderList = (input: Order[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Order(entry, context);
    });
};

const serializeAws_json1_1ParametersMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_json1_1PartitionIndex = (input: PartitionIndex, context: __SerdeContext): any => {
  return {
    ...(input.IndexName !== undefined && input.IndexName !== null && { IndexName: input.IndexName }),
    ...(input.Keys !== undefined && input.Keys !== null && { Keys: serializeAws_json1_1KeyList(input.Keys, context) }),
  };
};

const serializeAws_json1_1PartitionIndexList = (input: PartitionIndex[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1PartitionIndex(entry, context);
    });
};

const serializeAws_json1_1PartitionInput = (input: PartitionInput, context: __SerdeContext): any => {
  return {
    ...(input.LastAccessTime !== undefined &&
      input.LastAccessTime !== null && { LastAccessTime: Math.round(input.LastAccessTime.getTime() / 1000) }),
    ...(input.LastAnalyzedTime !== undefined &&
      input.LastAnalyzedTime !== null && { LastAnalyzedTime: Math.round(input.LastAnalyzedTime.getTime() / 1000) }),
    ...(input.Parameters !== undefined &&
      input.Parameters !== null && { Parameters: serializeAws_json1_1ParametersMap(input.Parameters, context) }),
    ...(input.StorageDescriptor !== undefined &&
      input.StorageDescriptor !== null && {
        StorageDescriptor: serializeAws_json1_1StorageDescriptor(input.StorageDescriptor, context),
      }),
    ...(input.Values !== undefined &&
      input.Values !== null && { Values: serializeAws_json1_1ValueStringList(input.Values, context) }),
  };
};

const serializeAws_json1_1PartitionInputList = (input: PartitionInput[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1PartitionInput(entry, context);
    });
};

const serializeAws_json1_1PartitionValueList = (input: PartitionValueList, context: __SerdeContext): any => {
  return {
    ...(input.Values !== undefined &&
      input.Values !== null && { Values: serializeAws_json1_1ValueStringList(input.Values, context) }),
  };
};

const serializeAws_json1_1PathList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1PermissionList = (input: (Permission | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1PhysicalConnectionRequirements = (
  input: PhysicalConnectionRequirements,
  context: __SerdeContext
): any => {
  return {
    ...(input.AvailabilityZone !== undefined &&
      input.AvailabilityZone !== null && { AvailabilityZone: input.AvailabilityZone }),
    ...(input.SecurityGroupIdList !== undefined &&
      input.SecurityGroupIdList !== null && {
        SecurityGroupIdList: serializeAws_json1_1SecurityGroupIdList(input.SecurityGroupIdList, context),
      }),
    ...(input.SubnetId !== undefined && input.SubnetId !== null && { SubnetId: input.SubnetId }),
  };
};

const serializeAws_json1_1Predicate = (input: Predicate, context: __SerdeContext): any => {
  return {
    ...(input.Conditions !== undefined &&
      input.Conditions !== null && { Conditions: serializeAws_json1_1ConditionList(input.Conditions, context) }),
    ...(input.Logical !== undefined && input.Logical !== null && { Logical: input.Logical }),
  };
};

const serializeAws_json1_1PrincipalPermissions = (input: PrincipalPermissions, context: __SerdeContext): any => {
  return {
    ...(input.Permissions !== undefined &&
      input.Permissions !== null && { Permissions: serializeAws_json1_1PermissionList(input.Permissions, context) }),
    ...(input.Principal !== undefined &&
      input.Principal !== null && { Principal: serializeAws_json1_1DataLakePrincipal(input.Principal, context) }),
  };
};

const serializeAws_json1_1PrincipalPermissionsList = (input: PrincipalPermissions[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1PrincipalPermissions(entry, context);
    });
};

const serializeAws_json1_1PropertyPredicate = (input: PropertyPredicate, context: __SerdeContext): any => {
  return {
    ...(input.Comparator !== undefined && input.Comparator !== null && { Comparator: input.Comparator }),
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_1PublicKeysList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1PutDataCatalogEncryptionSettingsRequest = (
  input: PutDataCatalogEncryptionSettingsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.DataCatalogEncryptionSettings !== undefined &&
      input.DataCatalogEncryptionSettings !== null && {
        DataCatalogEncryptionSettings: serializeAws_json1_1DataCatalogEncryptionSettings(
          input.DataCatalogEncryptionSettings,
          context
        ),
      }),
  };
};

const serializeAws_json1_1PutResourcePolicyRequest = (
  input: PutResourcePolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EnableHybrid !== undefined && input.EnableHybrid !== null && { EnableHybrid: input.EnableHybrid }),
    ...(input.PolicyExistsCondition !== undefined &&
      input.PolicyExistsCondition !== null && { PolicyExistsCondition: input.PolicyExistsCondition }),
    ...(input.PolicyHashCondition !== undefined &&
      input.PolicyHashCondition !== null && { PolicyHashCondition: input.PolicyHashCondition }),
    ...(input.PolicyInJson !== undefined && input.PolicyInJson !== null && { PolicyInJson: input.PolicyInJson }),
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1PutSchemaVersionMetadataInput = (
  input: PutSchemaVersionMetadataInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.MetadataKeyValue !== undefined &&
      input.MetadataKeyValue !== null && {
        MetadataKeyValue: serializeAws_json1_1MetadataKeyValuePair(input.MetadataKeyValue, context),
      }),
    ...(input.SchemaId !== undefined &&
      input.SchemaId !== null && { SchemaId: serializeAws_json1_1SchemaId(input.SchemaId, context) }),
    ...(input.SchemaVersionId !== undefined &&
      input.SchemaVersionId !== null && { SchemaVersionId: input.SchemaVersionId }),
    ...(input.SchemaVersionNumber !== undefined &&
      input.SchemaVersionNumber !== null && {
        SchemaVersionNumber: serializeAws_json1_1SchemaVersionNumber(input.SchemaVersionNumber, context),
      }),
  };
};

const serializeAws_json1_1PutWorkflowRunPropertiesRequest = (
  input: PutWorkflowRunPropertiesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.RunId !== undefined && input.RunId !== null && { RunId: input.RunId }),
    ...(input.RunProperties !== undefined &&
      input.RunProperties !== null && {
        RunProperties: serializeAws_json1_1WorkflowRunProperties(input.RunProperties, context),
      }),
  };
};

const serializeAws_json1_1QuerySchemaVersionMetadataInput = (
  input: QuerySchemaVersionMetadataInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.MetadataList !== undefined &&
      input.MetadataList !== null && { MetadataList: serializeAws_json1_1MetadataList(input.MetadataList, context) }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.SchemaId !== undefined &&
      input.SchemaId !== null && { SchemaId: serializeAws_json1_1SchemaId(input.SchemaId, context) }),
    ...(input.SchemaVersionId !== undefined &&
      input.SchemaVersionId !== null && { SchemaVersionId: input.SchemaVersionId }),
    ...(input.SchemaVersionNumber !== undefined &&
      input.SchemaVersionNumber !== null && {
        SchemaVersionNumber: serializeAws_json1_1SchemaVersionNumber(input.SchemaVersionNumber, context),
      }),
  };
};

const serializeAws_json1_1RecrawlPolicy = (input: RecrawlPolicy, context: __SerdeContext): any => {
  return {
    ...(input.RecrawlBehavior !== undefined &&
      input.RecrawlBehavior !== null && { RecrawlBehavior: input.RecrawlBehavior }),
  };
};

const serializeAws_json1_1RegisterSchemaVersionInput = (
  input: RegisterSchemaVersionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.SchemaDefinition !== undefined &&
      input.SchemaDefinition !== null && { SchemaDefinition: input.SchemaDefinition }),
    ...(input.SchemaId !== undefined &&
      input.SchemaId !== null && { SchemaId: serializeAws_json1_1SchemaId(input.SchemaId, context) }),
  };
};

const serializeAws_json1_1RegistryId = (input: RegistryId, context: __SerdeContext): any => {
  return {
    ...(input.RegistryArn !== undefined && input.RegistryArn !== null && { RegistryArn: input.RegistryArn }),
    ...(input.RegistryName !== undefined && input.RegistryName !== null && { RegistryName: input.RegistryName }),
  };
};

const serializeAws_json1_1RemoveSchemaVersionMetadataInput = (
  input: RemoveSchemaVersionMetadataInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.MetadataKeyValue !== undefined &&
      input.MetadataKeyValue !== null && {
        MetadataKeyValue: serializeAws_json1_1MetadataKeyValuePair(input.MetadataKeyValue, context),
      }),
    ...(input.SchemaId !== undefined &&
      input.SchemaId !== null && { SchemaId: serializeAws_json1_1SchemaId(input.SchemaId, context) }),
    ...(input.SchemaVersionId !== undefined &&
      input.SchemaVersionId !== null && { SchemaVersionId: input.SchemaVersionId }),
    ...(input.SchemaVersionNumber !== undefined &&
      input.SchemaVersionNumber !== null && {
        SchemaVersionNumber: serializeAws_json1_1SchemaVersionNumber(input.SchemaVersionNumber, context),
      }),
  };
};

const serializeAws_json1_1ResetJobBookmarkRequest = (input: ResetJobBookmarkRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobName !== undefined && input.JobName !== null && { JobName: input.JobName }),
    ...(input.RunId !== undefined && input.RunId !== null && { RunId: input.RunId }),
  };
};

const serializeAws_json1_1ResourceUri = (input: ResourceUri, context: __SerdeContext): any => {
  return {
    ...(input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }),
    ...(input.Uri !== undefined && input.Uri !== null && { Uri: input.Uri }),
  };
};

const serializeAws_json1_1ResourceUriList = (input: ResourceUri[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1ResourceUri(entry, context);
    });
};

const serializeAws_json1_1ResumeWorkflowRunRequest = (
  input: ResumeWorkflowRunRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.NodeIds !== undefined &&
      input.NodeIds !== null && { NodeIds: serializeAws_json1_1NodeIdList(input.NodeIds, context) }),
    ...(input.RunId !== undefined && input.RunId !== null && { RunId: input.RunId }),
  };
};

const serializeAws_json1_1S3Encryption = (input: S3Encryption, context: __SerdeContext): any => {
  return {
    ...(input.KmsKeyArn !== undefined && input.KmsKeyArn !== null && { KmsKeyArn: input.KmsKeyArn }),
    ...(input.S3EncryptionMode !== undefined &&
      input.S3EncryptionMode !== null && { S3EncryptionMode: input.S3EncryptionMode }),
  };
};

const serializeAws_json1_1S3EncryptionList = (input: S3Encryption[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1S3Encryption(entry, context);
    });
};

const serializeAws_json1_1S3Target = (input: S3Target, context: __SerdeContext): any => {
  return {
    ...(input.ConnectionName !== undefined &&
      input.ConnectionName !== null && { ConnectionName: input.ConnectionName }),
    ...(input.Exclusions !== undefined &&
      input.Exclusions !== null && { Exclusions: serializeAws_json1_1PathList(input.Exclusions, context) }),
    ...(input.Path !== undefined && input.Path !== null && { Path: input.Path }),
    ...(input.SampleSize !== undefined && input.SampleSize !== null && { SampleSize: input.SampleSize }),
  };
};

const serializeAws_json1_1S3TargetList = (input: S3Target[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1S3Target(entry, context);
    });
};

const serializeAws_json1_1SchemaChangePolicy = (input: SchemaChangePolicy, context: __SerdeContext): any => {
  return {
    ...(input.DeleteBehavior !== undefined &&
      input.DeleteBehavior !== null && { DeleteBehavior: input.DeleteBehavior }),
    ...(input.UpdateBehavior !== undefined &&
      input.UpdateBehavior !== null && { UpdateBehavior: input.UpdateBehavior }),
  };
};

const serializeAws_json1_1SchemaColumn = (input: SchemaColumn, context: __SerdeContext): any => {
  return {
    ...(input.DataType !== undefined && input.DataType !== null && { DataType: input.DataType }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1SchemaId = (input: SchemaId, context: __SerdeContext): any => {
  return {
    ...(input.RegistryName !== undefined && input.RegistryName !== null && { RegistryName: input.RegistryName }),
    ...(input.SchemaArn !== undefined && input.SchemaArn !== null && { SchemaArn: input.SchemaArn }),
    ...(input.SchemaName !== undefined && input.SchemaName !== null && { SchemaName: input.SchemaName }),
  };
};

const serializeAws_json1_1SchemaReference = (input: SchemaReference, context: __SerdeContext): any => {
  return {
    ...(input.SchemaId !== undefined &&
      input.SchemaId !== null && { SchemaId: serializeAws_json1_1SchemaId(input.SchemaId, context) }),
    ...(input.SchemaVersionId !== undefined &&
      input.SchemaVersionId !== null && { SchemaVersionId: input.SchemaVersionId }),
    ...(input.SchemaVersionNumber !== undefined &&
      input.SchemaVersionNumber !== null && { SchemaVersionNumber: input.SchemaVersionNumber }),
  };
};

const serializeAws_json1_1SchemaVersionNumber = (input: SchemaVersionNumber, context: __SerdeContext): any => {
  return {
    ...(input.LatestVersion !== undefined && input.LatestVersion !== null && { LatestVersion: input.LatestVersion }),
    ...(input.VersionNumber !== undefined && input.VersionNumber !== null && { VersionNumber: input.VersionNumber }),
  };
};

const serializeAws_json1_1SearchPropertyPredicates = (input: PropertyPredicate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1PropertyPredicate(entry, context);
    });
};

const serializeAws_json1_1SearchTablesRequest = (input: SearchTablesRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_json1_1SearchPropertyPredicates(input.Filters, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ResourceShareType !== undefined &&
      input.ResourceShareType !== null && { ResourceShareType: input.ResourceShareType }),
    ...(input.SearchText !== undefined && input.SearchText !== null && { SearchText: input.SearchText }),
    ...(input.SortCriteria !== undefined &&
      input.SortCriteria !== null && { SortCriteria: serializeAws_json1_1SortCriteria(input.SortCriteria, context) }),
  };
};

const serializeAws_json1_1SecurityGroupIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1Segment = (input: Segment, context: __SerdeContext): any => {
  return {
    ...(input.SegmentNumber !== undefined && input.SegmentNumber !== null && { SegmentNumber: input.SegmentNumber }),
    ...(input.TotalSegments !== undefined && input.TotalSegments !== null && { TotalSegments: input.TotalSegments }),
  };
};

const serializeAws_json1_1SerDeInfo = (input: SerDeInfo, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Parameters !== undefined &&
      input.Parameters !== null && { Parameters: serializeAws_json1_1ParametersMap(input.Parameters, context) }),
    ...(input.SerializationLibrary !== undefined &&
      input.SerializationLibrary !== null && { SerializationLibrary: input.SerializationLibrary }),
  };
};

const serializeAws_json1_1SkewedInfo = (input: SkewedInfo, context: __SerdeContext): any => {
  return {
    ...(input.SkewedColumnNames !== undefined &&
      input.SkewedColumnNames !== null && {
        SkewedColumnNames: serializeAws_json1_1NameStringList(input.SkewedColumnNames, context),
      }),
    ...(input.SkewedColumnValueLocationMaps !== undefined &&
      input.SkewedColumnValueLocationMaps !== null && {
        SkewedColumnValueLocationMaps: serializeAws_json1_1LocationMap(input.SkewedColumnValueLocationMaps, context),
      }),
    ...(input.SkewedColumnValues !== undefined &&
      input.SkewedColumnValues !== null && {
        SkewedColumnValues: serializeAws_json1_1ColumnValueStringList(input.SkewedColumnValues, context),
      }),
  };
};

const serializeAws_json1_1SortCriteria = (input: SortCriterion[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1SortCriterion(entry, context);
    });
};

const serializeAws_json1_1SortCriterion = (input: SortCriterion, context: __SerdeContext): any => {
  return {
    ...(input.FieldName !== undefined && input.FieldName !== null && { FieldName: input.FieldName }),
    ...(input.Sort !== undefined && input.Sort !== null && { Sort: input.Sort }),
  };
};

const serializeAws_json1_1StartCrawlerRequest = (input: StartCrawlerRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1StartCrawlerScheduleRequest = (
  input: StartCrawlerScheduleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CrawlerName !== undefined && input.CrawlerName !== null && { CrawlerName: input.CrawlerName }),
  };
};

const serializeAws_json1_1StartExportLabelsTaskRunRequest = (
  input: StartExportLabelsTaskRunRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.OutputS3Path !== undefined && input.OutputS3Path !== null && { OutputS3Path: input.OutputS3Path }),
    ...(input.TransformId !== undefined && input.TransformId !== null && { TransformId: input.TransformId }),
  };
};

const serializeAws_json1_1StartImportLabelsTaskRunRequest = (
  input: StartImportLabelsTaskRunRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InputS3Path !== undefined && input.InputS3Path !== null && { InputS3Path: input.InputS3Path }),
    ...(input.ReplaceAllLabels !== undefined &&
      input.ReplaceAllLabels !== null && { ReplaceAllLabels: input.ReplaceAllLabels }),
    ...(input.TransformId !== undefined && input.TransformId !== null && { TransformId: input.TransformId }),
  };
};

const serializeAws_json1_1StartJobRunRequest = (input: StartJobRunRequest, context: __SerdeContext): any => {
  return {
    ...(input.AllocatedCapacity !== undefined &&
      input.AllocatedCapacity !== null && { AllocatedCapacity: input.AllocatedCapacity }),
    ...(input.Arguments !== undefined &&
      input.Arguments !== null && { Arguments: serializeAws_json1_1GenericMap(input.Arguments, context) }),
    ...(input.JobName !== undefined && input.JobName !== null && { JobName: input.JobName }),
    ...(input.JobRunId !== undefined && input.JobRunId !== null && { JobRunId: input.JobRunId }),
    ...(input.MaxCapacity !== undefined &&
      input.MaxCapacity !== null && { MaxCapacity: __serializeFloat(input.MaxCapacity) }),
    ...(input.NotificationProperty !== undefined &&
      input.NotificationProperty !== null && {
        NotificationProperty: serializeAws_json1_1NotificationProperty(input.NotificationProperty, context),
      }),
    ...(input.NumberOfWorkers !== undefined &&
      input.NumberOfWorkers !== null && { NumberOfWorkers: input.NumberOfWorkers }),
    ...(input.SecurityConfiguration !== undefined &&
      input.SecurityConfiguration !== null && { SecurityConfiguration: input.SecurityConfiguration }),
    ...(input.Timeout !== undefined && input.Timeout !== null && { Timeout: input.Timeout }),
    ...(input.WorkerType !== undefined && input.WorkerType !== null && { WorkerType: input.WorkerType }),
  };
};

const serializeAws_json1_1StartMLEvaluationTaskRunRequest = (
  input: StartMLEvaluationTaskRunRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.TransformId !== undefined && input.TransformId !== null && { TransformId: input.TransformId }),
  };
};

const serializeAws_json1_1StartMLLabelingSetGenerationTaskRunRequest = (
  input: StartMLLabelingSetGenerationTaskRunRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.OutputS3Path !== undefined && input.OutputS3Path !== null && { OutputS3Path: input.OutputS3Path }),
    ...(input.TransformId !== undefined && input.TransformId !== null && { TransformId: input.TransformId }),
  };
};

const serializeAws_json1_1StartTriggerRequest = (input: StartTriggerRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1StartWorkflowRunRequest = (input: StartWorkflowRunRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1StopCrawlerRequest = (input: StopCrawlerRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1StopCrawlerScheduleRequest = (
  input: StopCrawlerScheduleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CrawlerName !== undefined && input.CrawlerName !== null && { CrawlerName: input.CrawlerName }),
  };
};

const serializeAws_json1_1StopTriggerRequest = (input: StopTriggerRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1StopWorkflowRunRequest = (input: StopWorkflowRunRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.RunId !== undefined && input.RunId !== null && { RunId: input.RunId }),
  };
};

const serializeAws_json1_1StorageDescriptor = (input: StorageDescriptor, context: __SerdeContext): any => {
  return {
    ...(input.BucketColumns !== undefined &&
      input.BucketColumns !== null && {
        BucketColumns: serializeAws_json1_1NameStringList(input.BucketColumns, context),
      }),
    ...(input.Columns !== undefined &&
      input.Columns !== null && { Columns: serializeAws_json1_1ColumnList(input.Columns, context) }),
    ...(input.Compressed !== undefined && input.Compressed !== null && { Compressed: input.Compressed }),
    ...(input.InputFormat !== undefined && input.InputFormat !== null && { InputFormat: input.InputFormat }),
    ...(input.Location !== undefined && input.Location !== null && { Location: input.Location }),
    ...(input.NumberOfBuckets !== undefined &&
      input.NumberOfBuckets !== null && { NumberOfBuckets: input.NumberOfBuckets }),
    ...(input.OutputFormat !== undefined && input.OutputFormat !== null && { OutputFormat: input.OutputFormat }),
    ...(input.Parameters !== undefined &&
      input.Parameters !== null && { Parameters: serializeAws_json1_1ParametersMap(input.Parameters, context) }),
    ...(input.SchemaReference !== undefined &&
      input.SchemaReference !== null && {
        SchemaReference: serializeAws_json1_1SchemaReference(input.SchemaReference, context),
      }),
    ...(input.SerdeInfo !== undefined &&
      input.SerdeInfo !== null && { SerdeInfo: serializeAws_json1_1SerDeInfo(input.SerdeInfo, context) }),
    ...(input.SkewedInfo !== undefined &&
      input.SkewedInfo !== null && { SkewedInfo: serializeAws_json1_1SkewedInfo(input.SkewedInfo, context) }),
    ...(input.SortColumns !== undefined &&
      input.SortColumns !== null && { SortColumns: serializeAws_json1_1OrderList(input.SortColumns, context) }),
    ...(input.StoredAsSubDirectories !== undefined &&
      input.StoredAsSubDirectories !== null && { StoredAsSubDirectories: input.StoredAsSubDirectories }),
  };
};

const serializeAws_json1_1StringColumnStatisticsData = (
  input: StringColumnStatisticsData,
  context: __SerdeContext
): any => {
  return {
    ...(input.AverageLength !== undefined &&
      input.AverageLength !== null && { AverageLength: __serializeFloat(input.AverageLength) }),
    ...(input.MaximumLength !== undefined && input.MaximumLength !== null && { MaximumLength: input.MaximumLength }),
    ...(input.NumberOfDistinctValues !== undefined &&
      input.NumberOfDistinctValues !== null && { NumberOfDistinctValues: input.NumberOfDistinctValues }),
    ...(input.NumberOfNulls !== undefined && input.NumberOfNulls !== null && { NumberOfNulls: input.NumberOfNulls }),
  };
};

const serializeAws_json1_1StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1TableIdentifier = (input: TableIdentifier, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1TableInput = (input: TableInput, context: __SerdeContext): any => {
  return {
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.LastAccessTime !== undefined &&
      input.LastAccessTime !== null && { LastAccessTime: Math.round(input.LastAccessTime.getTime() / 1000) }),
    ...(input.LastAnalyzedTime !== undefined &&
      input.LastAnalyzedTime !== null && { LastAnalyzedTime: Math.round(input.LastAnalyzedTime.getTime() / 1000) }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Owner !== undefined && input.Owner !== null && { Owner: input.Owner }),
    ...(input.Parameters !== undefined &&
      input.Parameters !== null && { Parameters: serializeAws_json1_1ParametersMap(input.Parameters, context) }),
    ...(input.PartitionKeys !== undefined &&
      input.PartitionKeys !== null && { PartitionKeys: serializeAws_json1_1ColumnList(input.PartitionKeys, context) }),
    ...(input.Retention !== undefined && input.Retention !== null && { Retention: input.Retention }),
    ...(input.StorageDescriptor !== undefined &&
      input.StorageDescriptor !== null && {
        StorageDescriptor: serializeAws_json1_1StorageDescriptor(input.StorageDescriptor, context),
      }),
    ...(input.TableType !== undefined && input.TableType !== null && { TableType: input.TableType }),
    ...(input.TargetTable !== undefined &&
      input.TargetTable !== null && { TargetTable: serializeAws_json1_1TableIdentifier(input.TargetTable, context) }),
    ...(input.ViewExpandedText !== undefined &&
      input.ViewExpandedText !== null && { ViewExpandedText: input.ViewExpandedText }),
    ...(input.ViewOriginalText !== undefined &&
      input.ViewOriginalText !== null && { ViewOriginalText: input.ViewOriginalText }),
  };
};

const serializeAws_json1_1TagKeysList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    ...(input.TagsToAdd !== undefined &&
      input.TagsToAdd !== null && { TagsToAdd: serializeAws_json1_1TagsMap(input.TagsToAdd, context) }),
  };
};

const serializeAws_json1_1TagsMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_json1_1TaskRunFilterCriteria = (input: TaskRunFilterCriteria, context: __SerdeContext): any => {
  return {
    ...(input.StartedAfter !== undefined &&
      input.StartedAfter !== null && { StartedAfter: Math.round(input.StartedAfter.getTime() / 1000) }),
    ...(input.StartedBefore !== undefined &&
      input.StartedBefore !== null && { StartedBefore: Math.round(input.StartedBefore.getTime() / 1000) }),
    ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
    ...(input.TaskRunType !== undefined && input.TaskRunType !== null && { TaskRunType: input.TaskRunType }),
  };
};

const serializeAws_json1_1TaskRunSortCriteria = (input: TaskRunSortCriteria, context: __SerdeContext): any => {
  return {
    ...(input.Column !== undefined && input.Column !== null && { Column: input.Column }),
    ...(input.SortDirection !== undefined && input.SortDirection !== null && { SortDirection: input.SortDirection }),
  };
};

const serializeAws_json1_1TransformEncryption = (input: TransformEncryption, context: __SerdeContext): any => {
  return {
    ...(input.MlUserDataEncryption !== undefined &&
      input.MlUserDataEncryption !== null && {
        MlUserDataEncryption: serializeAws_json1_1MLUserDataEncryption(input.MlUserDataEncryption, context),
      }),
    ...(input.TaskRunSecurityConfigurationName !== undefined &&
      input.TaskRunSecurityConfigurationName !== null && {
        TaskRunSecurityConfigurationName: input.TaskRunSecurityConfigurationName,
      }),
  };
};

const serializeAws_json1_1TransformFilterCriteria = (input: TransformFilterCriteria, context: __SerdeContext): any => {
  return {
    ...(input.CreatedAfter !== undefined &&
      input.CreatedAfter !== null && { CreatedAfter: Math.round(input.CreatedAfter.getTime() / 1000) }),
    ...(input.CreatedBefore !== undefined &&
      input.CreatedBefore !== null && { CreatedBefore: Math.round(input.CreatedBefore.getTime() / 1000) }),
    ...(input.GlueVersion !== undefined && input.GlueVersion !== null && { GlueVersion: input.GlueVersion }),
    ...(input.LastModifiedAfter !== undefined &&
      input.LastModifiedAfter !== null && { LastModifiedAfter: Math.round(input.LastModifiedAfter.getTime() / 1000) }),
    ...(input.LastModifiedBefore !== undefined &&
      input.LastModifiedBefore !== null && {
        LastModifiedBefore: Math.round(input.LastModifiedBefore.getTime() / 1000),
      }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Schema !== undefined &&
      input.Schema !== null && { Schema: serializeAws_json1_1TransformSchema(input.Schema, context) }),
    ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
    ...(input.TransformType !== undefined && input.TransformType !== null && { TransformType: input.TransformType }),
  };
};

const serializeAws_json1_1TransformParameters = (input: TransformParameters, context: __SerdeContext): any => {
  return {
    ...(input.FindMatchesParameters !== undefined &&
      input.FindMatchesParameters !== null && {
        FindMatchesParameters: serializeAws_json1_1FindMatchesParameters(input.FindMatchesParameters, context),
      }),
    ...(input.TransformType !== undefined && input.TransformType !== null && { TransformType: input.TransformType }),
  };
};

const serializeAws_json1_1TransformSchema = (input: SchemaColumn[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1SchemaColumn(entry, context);
    });
};

const serializeAws_json1_1TransformSortCriteria = (input: TransformSortCriteria, context: __SerdeContext): any => {
  return {
    ...(input.Column !== undefined && input.Column !== null && { Column: input.Column }),
    ...(input.SortDirection !== undefined && input.SortDirection !== null && { SortDirection: input.SortDirection }),
  };
};

const serializeAws_json1_1TriggerNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1TriggerUpdate = (input: TriggerUpdate, context: __SerdeContext): any => {
  return {
    ...(input.Actions !== undefined &&
      input.Actions !== null && { Actions: serializeAws_json1_1ActionList(input.Actions, context) }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.EventBatchingCondition !== undefined &&
      input.EventBatchingCondition !== null && {
        EventBatchingCondition: serializeAws_json1_1EventBatchingCondition(input.EventBatchingCondition, context),
      }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Predicate !== undefined &&
      input.Predicate !== null && { Predicate: serializeAws_json1_1Predicate(input.Predicate, context) }),
    ...(input.Schedule !== undefined && input.Schedule !== null && { Schedule: input.Schedule }),
  };
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    ...(input.TagsToRemove !== undefined &&
      input.TagsToRemove !== null && { TagsToRemove: serializeAws_json1_1TagKeysList(input.TagsToRemove, context) }),
  };
};

const serializeAws_json1_1UpdateClassifierRequest = (input: UpdateClassifierRequest, context: __SerdeContext): any => {
  return {
    ...(input.CsvClassifier !== undefined &&
      input.CsvClassifier !== null && {
        CsvClassifier: serializeAws_json1_1UpdateCsvClassifierRequest(input.CsvClassifier, context),
      }),
    ...(input.GrokClassifier !== undefined &&
      input.GrokClassifier !== null && {
        GrokClassifier: serializeAws_json1_1UpdateGrokClassifierRequest(input.GrokClassifier, context),
      }),
    ...(input.JsonClassifier !== undefined &&
      input.JsonClassifier !== null && {
        JsonClassifier: serializeAws_json1_1UpdateJsonClassifierRequest(input.JsonClassifier, context),
      }),
    ...(input.XMLClassifier !== undefined &&
      input.XMLClassifier !== null && {
        XMLClassifier: serializeAws_json1_1UpdateXMLClassifierRequest(input.XMLClassifier, context),
      }),
  };
};

const serializeAws_json1_1UpdateColumnStatisticsForPartitionRequest = (
  input: UpdateColumnStatisticsForPartitionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.ColumnStatisticsList !== undefined &&
      input.ColumnStatisticsList !== null && {
        ColumnStatisticsList: serializeAws_json1_1UpdateColumnStatisticsList(input.ColumnStatisticsList, context),
      }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.PartitionValues !== undefined &&
      input.PartitionValues !== null && {
        PartitionValues: serializeAws_json1_1ValueStringList(input.PartitionValues, context),
      }),
    ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_1UpdateColumnStatisticsForTableRequest = (
  input: UpdateColumnStatisticsForTableRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.ColumnStatisticsList !== undefined &&
      input.ColumnStatisticsList !== null && {
        ColumnStatisticsList: serializeAws_json1_1UpdateColumnStatisticsList(input.ColumnStatisticsList, context),
      }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_1UpdateColumnStatisticsList = (input: ColumnStatistics[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1ColumnStatistics(entry, context);
    });
};

const serializeAws_json1_1UpdateConnectionRequest = (input: UpdateConnectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.ConnectionInput !== undefined &&
      input.ConnectionInput !== null && {
        ConnectionInput: serializeAws_json1_1ConnectionInput(input.ConnectionInput, context),
      }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1UpdateCrawlerRequest = (input: UpdateCrawlerRequest, context: __SerdeContext): any => {
  return {
    ...(input.Classifiers !== undefined &&
      input.Classifiers !== null && {
        Classifiers: serializeAws_json1_1ClassifierNameList(input.Classifiers, context),
      }),
    ...(input.Configuration !== undefined && input.Configuration !== null && { Configuration: input.Configuration }),
    ...(input.CrawlerSecurityConfiguration !== undefined &&
      input.CrawlerSecurityConfiguration !== null && {
        CrawlerSecurityConfiguration: input.CrawlerSecurityConfiguration,
      }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.LineageConfiguration !== undefined &&
      input.LineageConfiguration !== null && {
        LineageConfiguration: serializeAws_json1_1LineageConfiguration(input.LineageConfiguration, context),
      }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.RecrawlPolicy !== undefined &&
      input.RecrawlPolicy !== null && {
        RecrawlPolicy: serializeAws_json1_1RecrawlPolicy(input.RecrawlPolicy, context),
      }),
    ...(input.Role !== undefined && input.Role !== null && { Role: input.Role }),
    ...(input.Schedule !== undefined && input.Schedule !== null && { Schedule: input.Schedule }),
    ...(input.SchemaChangePolicy !== undefined &&
      input.SchemaChangePolicy !== null && {
        SchemaChangePolicy: serializeAws_json1_1SchemaChangePolicy(input.SchemaChangePolicy, context),
      }),
    ...(input.TablePrefix !== undefined && input.TablePrefix !== null && { TablePrefix: input.TablePrefix }),
    ...(input.Targets !== undefined &&
      input.Targets !== null && { Targets: serializeAws_json1_1CrawlerTargets(input.Targets, context) }),
  };
};

const serializeAws_json1_1UpdateCrawlerScheduleRequest = (
  input: UpdateCrawlerScheduleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CrawlerName !== undefined && input.CrawlerName !== null && { CrawlerName: input.CrawlerName }),
    ...(input.Schedule !== undefined && input.Schedule !== null && { Schedule: input.Schedule }),
  };
};

const serializeAws_json1_1UpdateCsvClassifierRequest = (
  input: UpdateCsvClassifierRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AllowSingleColumn !== undefined &&
      input.AllowSingleColumn !== null && { AllowSingleColumn: input.AllowSingleColumn }),
    ...(input.ContainsHeader !== undefined &&
      input.ContainsHeader !== null && { ContainsHeader: input.ContainsHeader }),
    ...(input.Delimiter !== undefined && input.Delimiter !== null && { Delimiter: input.Delimiter }),
    ...(input.DisableValueTrimming !== undefined &&
      input.DisableValueTrimming !== null && { DisableValueTrimming: input.DisableValueTrimming }),
    ...(input.Header !== undefined &&
      input.Header !== null && { Header: serializeAws_json1_1CsvHeader(input.Header, context) }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.QuoteSymbol !== undefined && input.QuoteSymbol !== null && { QuoteSymbol: input.QuoteSymbol }),
  };
};

const serializeAws_json1_1UpdateDatabaseRequest = (input: UpdateDatabaseRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseInput !== undefined &&
      input.DatabaseInput !== null && {
        DatabaseInput: serializeAws_json1_1DatabaseInput(input.DatabaseInput, context),
      }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1UpdateDevEndpointRequest = (
  input: UpdateDevEndpointRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AddArguments !== undefined &&
      input.AddArguments !== null && { AddArguments: serializeAws_json1_1MapValue(input.AddArguments, context) }),
    ...(input.AddPublicKeys !== undefined &&
      input.AddPublicKeys !== null && {
        AddPublicKeys: serializeAws_json1_1PublicKeysList(input.AddPublicKeys, context),
      }),
    ...(input.CustomLibraries !== undefined &&
      input.CustomLibraries !== null && {
        CustomLibraries: serializeAws_json1_1DevEndpointCustomLibraries(input.CustomLibraries, context),
      }),
    ...(input.DeleteArguments !== undefined &&
      input.DeleteArguments !== null && {
        DeleteArguments: serializeAws_json1_1StringList(input.DeleteArguments, context),
      }),
    ...(input.DeletePublicKeys !== undefined &&
      input.DeletePublicKeys !== null && {
        DeletePublicKeys: serializeAws_json1_1PublicKeysList(input.DeletePublicKeys, context),
      }),
    ...(input.EndpointName !== undefined && input.EndpointName !== null && { EndpointName: input.EndpointName }),
    ...(input.PublicKey !== undefined && input.PublicKey !== null && { PublicKey: input.PublicKey }),
    ...(input.UpdateEtlLibraries !== undefined &&
      input.UpdateEtlLibraries !== null && { UpdateEtlLibraries: input.UpdateEtlLibraries }),
  };
};

const serializeAws_json1_1UpdateGrokClassifierRequest = (
  input: UpdateGrokClassifierRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Classification !== undefined &&
      input.Classification !== null && { Classification: input.Classification }),
    ...(input.CustomPatterns !== undefined &&
      input.CustomPatterns !== null && { CustomPatterns: input.CustomPatterns }),
    ...(input.GrokPattern !== undefined && input.GrokPattern !== null && { GrokPattern: input.GrokPattern }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1UpdateJobRequest = (input: UpdateJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobName !== undefined && input.JobName !== null && { JobName: input.JobName }),
    ...(input.JobUpdate !== undefined &&
      input.JobUpdate !== null && { JobUpdate: serializeAws_json1_1JobUpdate(input.JobUpdate, context) }),
  };
};

const serializeAws_json1_1UpdateJsonClassifierRequest = (
  input: UpdateJsonClassifierRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JsonPath !== undefined && input.JsonPath !== null && { JsonPath: input.JsonPath }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1UpdateMLTransformRequest = (
  input: UpdateMLTransformRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.GlueVersion !== undefined && input.GlueVersion !== null && { GlueVersion: input.GlueVersion }),
    ...(input.MaxCapacity !== undefined &&
      input.MaxCapacity !== null && { MaxCapacity: __serializeFloat(input.MaxCapacity) }),
    ...(input.MaxRetries !== undefined && input.MaxRetries !== null && { MaxRetries: input.MaxRetries }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.NumberOfWorkers !== undefined &&
      input.NumberOfWorkers !== null && { NumberOfWorkers: input.NumberOfWorkers }),
    ...(input.Parameters !== undefined &&
      input.Parameters !== null && { Parameters: serializeAws_json1_1TransformParameters(input.Parameters, context) }),
    ...(input.Role !== undefined && input.Role !== null && { Role: input.Role }),
    ...(input.Timeout !== undefined && input.Timeout !== null && { Timeout: input.Timeout }),
    ...(input.TransformId !== undefined && input.TransformId !== null && { TransformId: input.TransformId }),
    ...(input.WorkerType !== undefined && input.WorkerType !== null && { WorkerType: input.WorkerType }),
  };
};

const serializeAws_json1_1UpdatePartitionRequest = (input: UpdatePartitionRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.PartitionInput !== undefined &&
      input.PartitionInput !== null && {
        PartitionInput: serializeAws_json1_1PartitionInput(input.PartitionInput, context),
      }),
    ...(input.PartitionValueList !== undefined &&
      input.PartitionValueList !== null && {
        PartitionValueList: serializeAws_json1_1BoundedPartitionValueList(input.PartitionValueList, context),
      }),
    ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_1UpdateRegistryInput = (input: UpdateRegistryInput, context: __SerdeContext): any => {
  return {
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.RegistryId !== undefined &&
      input.RegistryId !== null && { RegistryId: serializeAws_json1_1RegistryId(input.RegistryId, context) }),
  };
};

const serializeAws_json1_1UpdateSchemaInput = (input: UpdateSchemaInput, context: __SerdeContext): any => {
  return {
    ...(input.Compatibility !== undefined && input.Compatibility !== null && { Compatibility: input.Compatibility }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.SchemaId !== undefined &&
      input.SchemaId !== null && { SchemaId: serializeAws_json1_1SchemaId(input.SchemaId, context) }),
    ...(input.SchemaVersionNumber !== undefined &&
      input.SchemaVersionNumber !== null && {
        SchemaVersionNumber: serializeAws_json1_1SchemaVersionNumber(input.SchemaVersionNumber, context),
      }),
  };
};

const serializeAws_json1_1UpdateTableRequest = (input: UpdateTableRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.SkipArchive !== undefined && input.SkipArchive !== null && { SkipArchive: input.SkipArchive }),
    ...(input.TableInput !== undefined &&
      input.TableInput !== null && { TableInput: serializeAws_json1_1TableInput(input.TableInput, context) }),
  };
};

const serializeAws_json1_1UpdateTriggerRequest = (input: UpdateTriggerRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.TriggerUpdate !== undefined &&
      input.TriggerUpdate !== null && {
        TriggerUpdate: serializeAws_json1_1TriggerUpdate(input.TriggerUpdate, context),
      }),
  };
};

const serializeAws_json1_1UpdateUserDefinedFunctionRequest = (
  input: UpdateUserDefinedFunctionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.FunctionInput !== undefined &&
      input.FunctionInput !== null && {
        FunctionInput: serializeAws_json1_1UserDefinedFunctionInput(input.FunctionInput, context),
      }),
    ...(input.FunctionName !== undefined && input.FunctionName !== null && { FunctionName: input.FunctionName }),
  };
};

const serializeAws_json1_1UpdateWorkflowRequest = (input: UpdateWorkflowRequest, context: __SerdeContext): any => {
  return {
    ...(input.DefaultRunProperties !== undefined &&
      input.DefaultRunProperties !== null && {
        DefaultRunProperties: serializeAws_json1_1WorkflowRunProperties(input.DefaultRunProperties, context),
      }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.MaxConcurrentRuns !== undefined &&
      input.MaxConcurrentRuns !== null && { MaxConcurrentRuns: input.MaxConcurrentRuns }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1UpdateXMLClassifierRequest = (
  input: UpdateXMLClassifierRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Classification !== undefined &&
      input.Classification !== null && { Classification: input.Classification }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.RowTag !== undefined && input.RowTag !== null && { RowTag: input.RowTag }),
  };
};

const serializeAws_json1_1UserDefinedFunctionInput = (
  input: UserDefinedFunctionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClassName !== undefined && input.ClassName !== null && { ClassName: input.ClassName }),
    ...(input.FunctionName !== undefined && input.FunctionName !== null && { FunctionName: input.FunctionName }),
    ...(input.OwnerName !== undefined && input.OwnerName !== null && { OwnerName: input.OwnerName }),
    ...(input.OwnerType !== undefined && input.OwnerType !== null && { OwnerType: input.OwnerType }),
    ...(input.ResourceUris !== undefined &&
      input.ResourceUris !== null && {
        ResourceUris: serializeAws_json1_1ResourceUriList(input.ResourceUris, context),
      }),
  };
};

const serializeAws_json1_1ValueStringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1WorkflowNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1WorkflowRunProperties = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const deserializeAws_json1_1AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1Action = (output: any, context: __SerdeContext): Action => {
  return {
    Arguments:
      output.Arguments !== undefined && output.Arguments !== null
        ? deserializeAws_json1_1GenericMap(output.Arguments, context)
        : undefined,
    CrawlerName: __expectString(output.CrawlerName),
    JobName: __expectString(output.JobName),
    NotificationProperty:
      output.NotificationProperty !== undefined && output.NotificationProperty !== null
        ? deserializeAws_json1_1NotificationProperty(output.NotificationProperty, context)
        : undefined,
    SecurityConfiguration: __expectString(output.SecurityConfiguration),
    Timeout: __expectNumber(output.Timeout),
  } as any;
};

const deserializeAws_json1_1ActionList = (output: any, context: __SerdeContext): Action[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Action(entry, context);
    });
};

const deserializeAws_json1_1AlreadyExistsException = (output: any, context: __SerdeContext): AlreadyExistsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1BackfillError = (output: any, context: __SerdeContext): BackfillError => {
  return {
    Code: __expectString(output.Code),
    Partitions:
      output.Partitions !== undefined && output.Partitions !== null
        ? deserializeAws_json1_1BackfillErroredPartitionsList(output.Partitions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BackfillErroredPartitionsList = (
  output: any,
  context: __SerdeContext
): PartitionValueList[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PartitionValueList(entry, context);
    });
};

const deserializeAws_json1_1BackfillErrors = (output: any, context: __SerdeContext): BackfillError[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BackfillError(entry, context);
    });
};

const deserializeAws_json1_1BatchCreatePartitionResponse = (
  output: any,
  context: __SerdeContext
): BatchCreatePartitionResponse => {
  return {
    Errors:
      output.Errors !== undefined && output.Errors !== null
        ? deserializeAws_json1_1PartitionErrors(output.Errors, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchDeleteConnectionResponse = (
  output: any,
  context: __SerdeContext
): BatchDeleteConnectionResponse => {
  return {
    Errors:
      output.Errors !== undefined && output.Errors !== null
        ? deserializeAws_json1_1ErrorByName(output.Errors, context)
        : undefined,
    Succeeded:
      output.Succeeded !== undefined && output.Succeeded !== null
        ? deserializeAws_json1_1NameStringList(output.Succeeded, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchDeletePartitionResponse = (
  output: any,
  context: __SerdeContext
): BatchDeletePartitionResponse => {
  return {
    Errors:
      output.Errors !== undefined && output.Errors !== null
        ? deserializeAws_json1_1PartitionErrors(output.Errors, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchDeleteTableResponse = (
  output: any,
  context: __SerdeContext
): BatchDeleteTableResponse => {
  return {
    Errors:
      output.Errors !== undefined && output.Errors !== null
        ? deserializeAws_json1_1TableErrors(output.Errors, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchDeleteTableVersionResponse = (
  output: any,
  context: __SerdeContext
): BatchDeleteTableVersionResponse => {
  return {
    Errors:
      output.Errors !== undefined && output.Errors !== null
        ? deserializeAws_json1_1TableVersionErrors(output.Errors, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchGetCrawlersResponse = (
  output: any,
  context: __SerdeContext
): BatchGetCrawlersResponse => {
  return {
    Crawlers:
      output.Crawlers !== undefined && output.Crawlers !== null
        ? deserializeAws_json1_1CrawlerList(output.Crawlers, context)
        : undefined,
    CrawlersNotFound:
      output.CrawlersNotFound !== undefined && output.CrawlersNotFound !== null
        ? deserializeAws_json1_1CrawlerNameList(output.CrawlersNotFound, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchGetDevEndpointsResponse = (
  output: any,
  context: __SerdeContext
): BatchGetDevEndpointsResponse => {
  return {
    DevEndpoints:
      output.DevEndpoints !== undefined && output.DevEndpoints !== null
        ? deserializeAws_json1_1DevEndpointList(output.DevEndpoints, context)
        : undefined,
    DevEndpointsNotFound:
      output.DevEndpointsNotFound !== undefined && output.DevEndpointsNotFound !== null
        ? deserializeAws_json1_1DevEndpointNames(output.DevEndpointsNotFound, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchGetJobsResponse = (output: any, context: __SerdeContext): BatchGetJobsResponse => {
  return {
    Jobs:
      output.Jobs !== undefined && output.Jobs !== null
        ? deserializeAws_json1_1JobList(output.Jobs, context)
        : undefined,
    JobsNotFound:
      output.JobsNotFound !== undefined && output.JobsNotFound !== null
        ? deserializeAws_json1_1JobNameList(output.JobsNotFound, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchGetPartitionResponse = (
  output: any,
  context: __SerdeContext
): BatchGetPartitionResponse => {
  return {
    Partitions:
      output.Partitions !== undefined && output.Partitions !== null
        ? deserializeAws_json1_1PartitionList(output.Partitions, context)
        : undefined,
    UnprocessedKeys:
      output.UnprocessedKeys !== undefined && output.UnprocessedKeys !== null
        ? deserializeAws_json1_1BatchGetPartitionValueList(output.UnprocessedKeys, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchGetPartitionValueList = (
  output: any,
  context: __SerdeContext
): PartitionValueList[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PartitionValueList(entry, context);
    });
};

const deserializeAws_json1_1BatchGetTriggersResponse = (
  output: any,
  context: __SerdeContext
): BatchGetTriggersResponse => {
  return {
    Triggers:
      output.Triggers !== undefined && output.Triggers !== null
        ? deserializeAws_json1_1TriggerList(output.Triggers, context)
        : undefined,
    TriggersNotFound:
      output.TriggersNotFound !== undefined && output.TriggersNotFound !== null
        ? deserializeAws_json1_1TriggerNameList(output.TriggersNotFound, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchGetWorkflowsResponse = (
  output: any,
  context: __SerdeContext
): BatchGetWorkflowsResponse => {
  return {
    MissingWorkflows:
      output.MissingWorkflows !== undefined && output.MissingWorkflows !== null
        ? deserializeAws_json1_1WorkflowNames(output.MissingWorkflows, context)
        : undefined,
    Workflows:
      output.Workflows !== undefined && output.Workflows !== null
        ? deserializeAws_json1_1Workflows(output.Workflows, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchStopJobRunError = (output: any, context: __SerdeContext): BatchStopJobRunError => {
  return {
    ErrorDetail:
      output.ErrorDetail !== undefined && output.ErrorDetail !== null
        ? deserializeAws_json1_1ErrorDetail(output.ErrorDetail, context)
        : undefined,
    JobName: __expectString(output.JobName),
    JobRunId: __expectString(output.JobRunId),
  } as any;
};

const deserializeAws_json1_1BatchStopJobRunErrorList = (
  output: any,
  context: __SerdeContext
): BatchStopJobRunError[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BatchStopJobRunError(entry, context);
    });
};

const deserializeAws_json1_1BatchStopJobRunResponse = (
  output: any,
  context: __SerdeContext
): BatchStopJobRunResponse => {
  return {
    Errors:
      output.Errors !== undefined && output.Errors !== null
        ? deserializeAws_json1_1BatchStopJobRunErrorList(output.Errors, context)
        : undefined,
    SuccessfulSubmissions:
      output.SuccessfulSubmissions !== undefined && output.SuccessfulSubmissions !== null
        ? deserializeAws_json1_1BatchStopJobRunSuccessfulSubmissionList(output.SuccessfulSubmissions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchStopJobRunSuccessfulSubmission = (
  output: any,
  context: __SerdeContext
): BatchStopJobRunSuccessfulSubmission => {
  return {
    JobName: __expectString(output.JobName),
    JobRunId: __expectString(output.JobRunId),
  } as any;
};

const deserializeAws_json1_1BatchStopJobRunSuccessfulSubmissionList = (
  output: any,
  context: __SerdeContext
): BatchStopJobRunSuccessfulSubmission[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BatchStopJobRunSuccessfulSubmission(entry, context);
    });
};

const deserializeAws_json1_1BatchUpdatePartitionFailureEntry = (
  output: any,
  context: __SerdeContext
): BatchUpdatePartitionFailureEntry => {
  return {
    ErrorDetail:
      output.ErrorDetail !== undefined && output.ErrorDetail !== null
        ? deserializeAws_json1_1ErrorDetail(output.ErrorDetail, context)
        : undefined,
    PartitionValueList:
      output.PartitionValueList !== undefined && output.PartitionValueList !== null
        ? deserializeAws_json1_1BoundedPartitionValueList(output.PartitionValueList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchUpdatePartitionFailureList = (
  output: any,
  context: __SerdeContext
): BatchUpdatePartitionFailureEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BatchUpdatePartitionFailureEntry(entry, context);
    });
};

const deserializeAws_json1_1BatchUpdatePartitionResponse = (
  output: any,
  context: __SerdeContext
): BatchUpdatePartitionResponse => {
  return {
    Errors:
      output.Errors !== undefined && output.Errors !== null
        ? deserializeAws_json1_1BatchUpdatePartitionFailureList(output.Errors, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BinaryColumnStatisticsData = (
  output: any,
  context: __SerdeContext
): BinaryColumnStatisticsData => {
  return {
    AverageLength: __handleFloat(output.AverageLength),
    MaximumLength: __expectNumber(output.MaximumLength),
    NumberOfNulls: __expectNumber(output.NumberOfNulls),
  } as any;
};

const deserializeAws_json1_1BooleanColumnStatisticsData = (
  output: any,
  context: __SerdeContext
): BooleanColumnStatisticsData => {
  return {
    NumberOfFalses: __expectNumber(output.NumberOfFalses),
    NumberOfNulls: __expectNumber(output.NumberOfNulls),
    NumberOfTrues: __expectNumber(output.NumberOfTrues),
  } as any;
};

const deserializeAws_json1_1BoundedPartitionValueList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1CancelMLTaskRunResponse = (
  output: any,
  context: __SerdeContext
): CancelMLTaskRunResponse => {
  return {
    Status: __expectString(output.Status),
    TaskRunId: __expectString(output.TaskRunId),
    TransformId: __expectString(output.TransformId),
  } as any;
};

const deserializeAws_json1_1CatalogImportStatus = (output: any, context: __SerdeContext): CatalogImportStatus => {
  return {
    ImportCompleted: __expectBoolean(output.ImportCompleted),
    ImportTime:
      output.ImportTime !== undefined && output.ImportTime !== null
        ? new Date(Math.round(output.ImportTime * 1000))
        : undefined,
    ImportedBy: __expectString(output.ImportedBy),
  } as any;
};

const deserializeAws_json1_1CatalogTablesList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1CatalogTarget = (output: any, context: __SerdeContext): CatalogTarget => {
  return {
    DatabaseName: __expectString(output.DatabaseName),
    Tables:
      output.Tables !== undefined && output.Tables !== null
        ? deserializeAws_json1_1CatalogTablesList(output.Tables, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CatalogTargetList = (output: any, context: __SerdeContext): CatalogTarget[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CatalogTarget(entry, context);
    });
};

const deserializeAws_json1_1CheckSchemaVersionValidityResponse = (
  output: any,
  context: __SerdeContext
): CheckSchemaVersionValidityResponse => {
  return {
    Error: __expectString(output.Error),
    Valid: __expectBoolean(output.Valid),
  } as any;
};

const deserializeAws_json1_1Classifier = (output: any, context: __SerdeContext): Classifier => {
  return {
    CsvClassifier:
      output.CsvClassifier !== undefined && output.CsvClassifier !== null
        ? deserializeAws_json1_1CsvClassifier(output.CsvClassifier, context)
        : undefined,
    GrokClassifier:
      output.GrokClassifier !== undefined && output.GrokClassifier !== null
        ? deserializeAws_json1_1GrokClassifier(output.GrokClassifier, context)
        : undefined,
    JsonClassifier:
      output.JsonClassifier !== undefined && output.JsonClassifier !== null
        ? deserializeAws_json1_1JsonClassifier(output.JsonClassifier, context)
        : undefined,
    XMLClassifier:
      output.XMLClassifier !== undefined && output.XMLClassifier !== null
        ? deserializeAws_json1_1XMLClassifier(output.XMLClassifier, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ClassifierList = (output: any, context: __SerdeContext): Classifier[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Classifier(entry, context);
    });
};

const deserializeAws_json1_1ClassifierNameList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1CloudWatchEncryption = (output: any, context: __SerdeContext): CloudWatchEncryption => {
  return {
    CloudWatchEncryptionMode: __expectString(output.CloudWatchEncryptionMode),
    KmsKeyArn: __expectString(output.KmsKeyArn),
  } as any;
};

const deserializeAws_json1_1CodeGenEdge = (output: any, context: __SerdeContext): CodeGenEdge => {
  return {
    Source: __expectString(output.Source),
    Target: __expectString(output.Target),
    TargetParameter: __expectString(output.TargetParameter),
  } as any;
};

const deserializeAws_json1_1CodeGenNode = (output: any, context: __SerdeContext): CodeGenNode => {
  return {
    Args:
      output.Args !== undefined && output.Args !== null
        ? deserializeAws_json1_1CodeGenNodeArgs(output.Args, context)
        : undefined,
    Id: __expectString(output.Id),
    LineNumber: __expectNumber(output.LineNumber),
    NodeType: __expectString(output.NodeType),
  } as any;
};

const deserializeAws_json1_1CodeGenNodeArg = (output: any, context: __SerdeContext): CodeGenNodeArg => {
  return {
    Name: __expectString(output.Name),
    Param: __expectBoolean(output.Param),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1CodeGenNodeArgs = (output: any, context: __SerdeContext): CodeGenNodeArg[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CodeGenNodeArg(entry, context);
    });
};

const deserializeAws_json1_1Column = (output: any, context: __SerdeContext): Column => {
  return {
    Comment: __expectString(output.Comment),
    Name: __expectString(output.Name),
    Parameters:
      output.Parameters !== undefined && output.Parameters !== null
        ? deserializeAws_json1_1ParametersMap(output.Parameters, context)
        : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1ColumnError = (output: any, context: __SerdeContext): ColumnError => {
  return {
    ColumnName: __expectString(output.ColumnName),
    Error:
      output.Error !== undefined && output.Error !== null
        ? deserializeAws_json1_1ErrorDetail(output.Error, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ColumnErrors = (output: any, context: __SerdeContext): ColumnError[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ColumnError(entry, context);
    });
};

const deserializeAws_json1_1ColumnImportance = (output: any, context: __SerdeContext): ColumnImportance => {
  return {
    ColumnName: __expectString(output.ColumnName),
    Importance: __handleFloat(output.Importance),
  } as any;
};

const deserializeAws_json1_1ColumnImportanceList = (output: any, context: __SerdeContext): ColumnImportance[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ColumnImportance(entry, context);
    });
};

const deserializeAws_json1_1ColumnList = (output: any, context: __SerdeContext): Column[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Column(entry, context);
    });
};

const deserializeAws_json1_1ColumnStatistics = (output: any, context: __SerdeContext): ColumnStatistics => {
  return {
    AnalyzedTime:
      output.AnalyzedTime !== undefined && output.AnalyzedTime !== null
        ? new Date(Math.round(output.AnalyzedTime * 1000))
        : undefined,
    ColumnName: __expectString(output.ColumnName),
    ColumnType: __expectString(output.ColumnType),
    StatisticsData:
      output.StatisticsData !== undefined && output.StatisticsData !== null
        ? deserializeAws_json1_1ColumnStatisticsData(output.StatisticsData, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ColumnStatisticsData = (output: any, context: __SerdeContext): ColumnStatisticsData => {
  return {
    BinaryColumnStatisticsData:
      output.BinaryColumnStatisticsData !== undefined && output.BinaryColumnStatisticsData !== null
        ? deserializeAws_json1_1BinaryColumnStatisticsData(output.BinaryColumnStatisticsData, context)
        : undefined,
    BooleanColumnStatisticsData:
      output.BooleanColumnStatisticsData !== undefined && output.BooleanColumnStatisticsData !== null
        ? deserializeAws_json1_1BooleanColumnStatisticsData(output.BooleanColumnStatisticsData, context)
        : undefined,
    DateColumnStatisticsData:
      output.DateColumnStatisticsData !== undefined && output.DateColumnStatisticsData !== null
        ? deserializeAws_json1_1DateColumnStatisticsData(output.DateColumnStatisticsData, context)
        : undefined,
    DecimalColumnStatisticsData:
      output.DecimalColumnStatisticsData !== undefined && output.DecimalColumnStatisticsData !== null
        ? deserializeAws_json1_1DecimalColumnStatisticsData(output.DecimalColumnStatisticsData, context)
        : undefined,
    DoubleColumnStatisticsData:
      output.DoubleColumnStatisticsData !== undefined && output.DoubleColumnStatisticsData !== null
        ? deserializeAws_json1_1DoubleColumnStatisticsData(output.DoubleColumnStatisticsData, context)
        : undefined,
    LongColumnStatisticsData:
      output.LongColumnStatisticsData !== undefined && output.LongColumnStatisticsData !== null
        ? deserializeAws_json1_1LongColumnStatisticsData(output.LongColumnStatisticsData, context)
        : undefined,
    StringColumnStatisticsData:
      output.StringColumnStatisticsData !== undefined && output.StringColumnStatisticsData !== null
        ? deserializeAws_json1_1StringColumnStatisticsData(output.StringColumnStatisticsData, context)
        : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1ColumnStatisticsError = (output: any, context: __SerdeContext): ColumnStatisticsError => {
  return {
    ColumnStatistics:
      output.ColumnStatistics !== undefined && output.ColumnStatistics !== null
        ? deserializeAws_json1_1ColumnStatistics(output.ColumnStatistics, context)
        : undefined,
    Error:
      output.Error !== undefined && output.Error !== null
        ? deserializeAws_json1_1ErrorDetail(output.Error, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ColumnStatisticsErrors = (
  output: any,
  context: __SerdeContext
): ColumnStatisticsError[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ColumnStatisticsError(entry, context);
    });
};

const deserializeAws_json1_1ColumnStatisticsList = (output: any, context: __SerdeContext): ColumnStatistics[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ColumnStatistics(entry, context);
    });
};

const deserializeAws_json1_1ColumnValueStringList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1ConcurrentModificationException = (
  output: any,
  context: __SerdeContext
): ConcurrentModificationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ConcurrentRunsExceededException = (
  output: any,
  context: __SerdeContext
): ConcurrentRunsExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1Condition = (output: any, context: __SerdeContext): Condition => {
  return {
    CrawlState: __expectString(output.CrawlState),
    CrawlerName: __expectString(output.CrawlerName),
    JobName: __expectString(output.JobName),
    LogicalOperator: __expectString(output.LogicalOperator),
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_json1_1ConditionCheckFailureException = (
  output: any,
  context: __SerdeContext
): ConditionCheckFailureException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ConditionList = (output: any, context: __SerdeContext): Condition[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Condition(entry, context);
    });
};

const deserializeAws_json1_1ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ConfusionMatrix = (output: any, context: __SerdeContext): ConfusionMatrix => {
  return {
    NumFalseNegatives: __expectNumber(output.NumFalseNegatives),
    NumFalsePositives: __expectNumber(output.NumFalsePositives),
    NumTrueNegatives: __expectNumber(output.NumTrueNegatives),
    NumTruePositives: __expectNumber(output.NumTruePositives),
  } as any;
};

const deserializeAws_json1_1Connection = (output: any, context: __SerdeContext): Connection => {
  return {
    ConnectionProperties:
      output.ConnectionProperties !== undefined && output.ConnectionProperties !== null
        ? deserializeAws_json1_1ConnectionProperties(output.ConnectionProperties, context)
        : undefined,
    ConnectionType: __expectString(output.ConnectionType),
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    Description: __expectString(output.Description),
    LastUpdatedBy: __expectString(output.LastUpdatedBy),
    LastUpdatedTime:
      output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null
        ? new Date(Math.round(output.LastUpdatedTime * 1000))
        : undefined,
    MatchCriteria:
      output.MatchCriteria !== undefined && output.MatchCriteria !== null
        ? deserializeAws_json1_1MatchCriteria(output.MatchCriteria, context)
        : undefined,
    Name: __expectString(output.Name),
    PhysicalConnectionRequirements:
      output.PhysicalConnectionRequirements !== undefined && output.PhysicalConnectionRequirements !== null
        ? deserializeAws_json1_1PhysicalConnectionRequirements(output.PhysicalConnectionRequirements, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ConnectionList = (output: any, context: __SerdeContext): Connection[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Connection(entry, context);
    });
};

const deserializeAws_json1_1ConnectionPasswordEncryption = (
  output: any,
  context: __SerdeContext
): ConnectionPasswordEncryption => {
  return {
    AwsKmsKeyId: __expectString(output.AwsKmsKeyId),
    ReturnConnectionPasswordEncrypted: __expectBoolean(output.ReturnConnectionPasswordEncrypted),
  } as any;
};

const deserializeAws_json1_1ConnectionProperties = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [ConnectionPropertyKey | string, any]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: __expectString(value) as any,
      };
    },
    {}
  );
};

const deserializeAws_json1_1ConnectionsList = (output: any, context: __SerdeContext): ConnectionsList => {
  return {
    Connections:
      output.Connections !== undefined && output.Connections !== null
        ? deserializeAws_json1_1OrchestrationStringList(output.Connections, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Crawl = (output: any, context: __SerdeContext): Crawl => {
  return {
    CompletedOn:
      output.CompletedOn !== undefined && output.CompletedOn !== null
        ? new Date(Math.round(output.CompletedOn * 1000))
        : undefined,
    ErrorMessage: __expectString(output.ErrorMessage),
    LogGroup: __expectString(output.LogGroup),
    LogStream: __expectString(output.LogStream),
    StartedOn:
      output.StartedOn !== undefined && output.StartedOn !== null
        ? new Date(Math.round(output.StartedOn * 1000))
        : undefined,
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_json1_1Crawler = (output: any, context: __SerdeContext): Crawler => {
  return {
    Classifiers:
      output.Classifiers !== undefined && output.Classifiers !== null
        ? deserializeAws_json1_1ClassifierNameList(output.Classifiers, context)
        : undefined,
    Configuration: __expectString(output.Configuration),
    CrawlElapsedTime: __expectNumber(output.CrawlElapsedTime),
    CrawlerSecurityConfiguration: __expectString(output.CrawlerSecurityConfiguration),
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    DatabaseName: __expectString(output.DatabaseName),
    Description: __expectString(output.Description),
    LastCrawl:
      output.LastCrawl !== undefined && output.LastCrawl !== null
        ? deserializeAws_json1_1LastCrawlInfo(output.LastCrawl, context)
        : undefined,
    LastUpdated:
      output.LastUpdated !== undefined && output.LastUpdated !== null
        ? new Date(Math.round(output.LastUpdated * 1000))
        : undefined,
    LineageConfiguration:
      output.LineageConfiguration !== undefined && output.LineageConfiguration !== null
        ? deserializeAws_json1_1LineageConfiguration(output.LineageConfiguration, context)
        : undefined,
    Name: __expectString(output.Name),
    RecrawlPolicy:
      output.RecrawlPolicy !== undefined && output.RecrawlPolicy !== null
        ? deserializeAws_json1_1RecrawlPolicy(output.RecrawlPolicy, context)
        : undefined,
    Role: __expectString(output.Role),
    Schedule:
      output.Schedule !== undefined && output.Schedule !== null
        ? deserializeAws_json1_1Schedule(output.Schedule, context)
        : undefined,
    SchemaChangePolicy:
      output.SchemaChangePolicy !== undefined && output.SchemaChangePolicy !== null
        ? deserializeAws_json1_1SchemaChangePolicy(output.SchemaChangePolicy, context)
        : undefined,
    State: __expectString(output.State),
    TablePrefix: __expectString(output.TablePrefix),
    Targets:
      output.Targets !== undefined && output.Targets !== null
        ? deserializeAws_json1_1CrawlerTargets(output.Targets, context)
        : undefined,
    Version: __expectNumber(output.Version),
  } as any;
};

const deserializeAws_json1_1CrawlerList = (output: any, context: __SerdeContext): Crawler[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Crawler(entry, context);
    });
};

const deserializeAws_json1_1CrawlerMetrics = (output: any, context: __SerdeContext): CrawlerMetrics => {
  return {
    CrawlerName: __expectString(output.CrawlerName),
    LastRuntimeSeconds: __handleFloat(output.LastRuntimeSeconds),
    MedianRuntimeSeconds: __handleFloat(output.MedianRuntimeSeconds),
    StillEstimating: __expectBoolean(output.StillEstimating),
    TablesCreated: __expectNumber(output.TablesCreated),
    TablesDeleted: __expectNumber(output.TablesDeleted),
    TablesUpdated: __expectNumber(output.TablesUpdated),
    TimeLeftSeconds: __handleFloat(output.TimeLeftSeconds),
  } as any;
};

const deserializeAws_json1_1CrawlerMetricsList = (output: any, context: __SerdeContext): CrawlerMetrics[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CrawlerMetrics(entry, context);
    });
};

const deserializeAws_json1_1CrawlerNameList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1CrawlerNodeDetails = (output: any, context: __SerdeContext): CrawlerNodeDetails => {
  return {
    Crawls:
      output.Crawls !== undefined && output.Crawls !== null
        ? deserializeAws_json1_1CrawlList(output.Crawls, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CrawlerNotRunningException = (
  output: any,
  context: __SerdeContext
): CrawlerNotRunningException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1CrawlerRunningException = (
  output: any,
  context: __SerdeContext
): CrawlerRunningException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1CrawlerStoppingException = (
  output: any,
  context: __SerdeContext
): CrawlerStoppingException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1CrawlerTargets = (output: any, context: __SerdeContext): CrawlerTargets => {
  return {
    CatalogTargets:
      output.CatalogTargets !== undefined && output.CatalogTargets !== null
        ? deserializeAws_json1_1CatalogTargetList(output.CatalogTargets, context)
        : undefined,
    DynamoDBTargets:
      output.DynamoDBTargets !== undefined && output.DynamoDBTargets !== null
        ? deserializeAws_json1_1DynamoDBTargetList(output.DynamoDBTargets, context)
        : undefined,
    JdbcTargets:
      output.JdbcTargets !== undefined && output.JdbcTargets !== null
        ? deserializeAws_json1_1JdbcTargetList(output.JdbcTargets, context)
        : undefined,
    MongoDBTargets:
      output.MongoDBTargets !== undefined && output.MongoDBTargets !== null
        ? deserializeAws_json1_1MongoDBTargetList(output.MongoDBTargets, context)
        : undefined,
    S3Targets:
      output.S3Targets !== undefined && output.S3Targets !== null
        ? deserializeAws_json1_1S3TargetList(output.S3Targets, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CrawlList = (output: any, context: __SerdeContext): Crawl[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Crawl(entry, context);
    });
};

const deserializeAws_json1_1CreateClassifierResponse = (
  output: any,
  context: __SerdeContext
): CreateClassifierResponse => {
  return {} as any;
};

const deserializeAws_json1_1CreateConnectionResponse = (
  output: any,
  context: __SerdeContext
): CreateConnectionResponse => {
  return {} as any;
};

const deserializeAws_json1_1CreateCrawlerResponse = (output: any, context: __SerdeContext): CreateCrawlerResponse => {
  return {} as any;
};

const deserializeAws_json1_1CreateDatabaseResponse = (output: any, context: __SerdeContext): CreateDatabaseResponse => {
  return {} as any;
};

const deserializeAws_json1_1CreateDevEndpointResponse = (
  output: any,
  context: __SerdeContext
): CreateDevEndpointResponse => {
  return {
    Arguments:
      output.Arguments !== undefined && output.Arguments !== null
        ? deserializeAws_json1_1MapValue(output.Arguments, context)
        : undefined,
    AvailabilityZone: __expectString(output.AvailabilityZone),
    CreatedTimestamp:
      output.CreatedTimestamp !== undefined && output.CreatedTimestamp !== null
        ? new Date(Math.round(output.CreatedTimestamp * 1000))
        : undefined,
    EndpointName: __expectString(output.EndpointName),
    ExtraJarsS3Path: __expectString(output.ExtraJarsS3Path),
    ExtraPythonLibsS3Path: __expectString(output.ExtraPythonLibsS3Path),
    FailureReason: __expectString(output.FailureReason),
    GlueVersion: __expectString(output.GlueVersion),
    NumberOfNodes: __expectNumber(output.NumberOfNodes),
    NumberOfWorkers: __expectNumber(output.NumberOfWorkers),
    RoleArn: __expectString(output.RoleArn),
    SecurityConfiguration: __expectString(output.SecurityConfiguration),
    SecurityGroupIds:
      output.SecurityGroupIds !== undefined && output.SecurityGroupIds !== null
        ? deserializeAws_json1_1StringList(output.SecurityGroupIds, context)
        : undefined,
    Status: __expectString(output.Status),
    SubnetId: __expectString(output.SubnetId),
    VpcId: __expectString(output.VpcId),
    WorkerType: __expectString(output.WorkerType),
    YarnEndpointAddress: __expectString(output.YarnEndpointAddress),
    ZeppelinRemoteSparkInterpreterPort: __expectNumber(output.ZeppelinRemoteSparkInterpreterPort),
  } as any;
};

const deserializeAws_json1_1CreateJobResponse = (output: any, context: __SerdeContext): CreateJobResponse => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1CreateMLTransformResponse = (
  output: any,
  context: __SerdeContext
): CreateMLTransformResponse => {
  return {
    TransformId: __expectString(output.TransformId),
  } as any;
};

const deserializeAws_json1_1CreatePartitionIndexResponse = (
  output: any,
  context: __SerdeContext
): CreatePartitionIndexResponse => {
  return {} as any;
};

const deserializeAws_json1_1CreatePartitionResponse = (
  output: any,
  context: __SerdeContext
): CreatePartitionResponse => {
  return {} as any;
};

const deserializeAws_json1_1CreateRegistryResponse = (output: any, context: __SerdeContext): CreateRegistryResponse => {
  return {
    Description: __expectString(output.Description),
    RegistryArn: __expectString(output.RegistryArn),
    RegistryName: __expectString(output.RegistryName),
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagsMap(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateSchemaResponse = (output: any, context: __SerdeContext): CreateSchemaResponse => {
  return {
    Compatibility: __expectString(output.Compatibility),
    DataFormat: __expectString(output.DataFormat),
    Description: __expectString(output.Description),
    LatestSchemaVersion: __expectNumber(output.LatestSchemaVersion),
    NextSchemaVersion: __expectNumber(output.NextSchemaVersion),
    RegistryArn: __expectString(output.RegistryArn),
    RegistryName: __expectString(output.RegistryName),
    SchemaArn: __expectString(output.SchemaArn),
    SchemaCheckpoint: __expectNumber(output.SchemaCheckpoint),
    SchemaName: __expectString(output.SchemaName),
    SchemaStatus: __expectString(output.SchemaStatus),
    SchemaVersionId: __expectString(output.SchemaVersionId),
    SchemaVersionStatus: __expectString(output.SchemaVersionStatus),
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagsMap(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateScriptResponse = (output: any, context: __SerdeContext): CreateScriptResponse => {
  return {
    PythonScript: __expectString(output.PythonScript),
    ScalaCode: __expectString(output.ScalaCode),
  } as any;
};

const deserializeAws_json1_1CreateSecurityConfigurationResponse = (
  output: any,
  context: __SerdeContext
): CreateSecurityConfigurationResponse => {
  return {
    CreatedTimestamp:
      output.CreatedTimestamp !== undefined && output.CreatedTimestamp !== null
        ? new Date(Math.round(output.CreatedTimestamp * 1000))
        : undefined,
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1CreateTableResponse = (output: any, context: __SerdeContext): CreateTableResponse => {
  return {} as any;
};

const deserializeAws_json1_1CreateTriggerResponse = (output: any, context: __SerdeContext): CreateTriggerResponse => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1CreateUserDefinedFunctionResponse = (
  output: any,
  context: __SerdeContext
): CreateUserDefinedFunctionResponse => {
  return {} as any;
};

const deserializeAws_json1_1CreateWorkflowResponse = (output: any, context: __SerdeContext): CreateWorkflowResponse => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1CsvClassifier = (output: any, context: __SerdeContext): CsvClassifier => {
  return {
    AllowSingleColumn: __expectBoolean(output.AllowSingleColumn),
    ContainsHeader: __expectString(output.ContainsHeader),
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    Delimiter: __expectString(output.Delimiter),
    DisableValueTrimming: __expectBoolean(output.DisableValueTrimming),
    Header:
      output.Header !== undefined && output.Header !== null
        ? deserializeAws_json1_1CsvHeader(output.Header, context)
        : undefined,
    LastUpdated:
      output.LastUpdated !== undefined && output.LastUpdated !== null
        ? new Date(Math.round(output.LastUpdated * 1000))
        : undefined,
    Name: __expectString(output.Name),
    QuoteSymbol: __expectString(output.QuoteSymbol),
    Version: __expectNumber(output.Version),
  } as any;
};

const deserializeAws_json1_1CsvHeader = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1DagEdges = (output: any, context: __SerdeContext): CodeGenEdge[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CodeGenEdge(entry, context);
    });
};

const deserializeAws_json1_1DagNodes = (output: any, context: __SerdeContext): CodeGenNode[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CodeGenNode(entry, context);
    });
};

const deserializeAws_json1_1Database = (output: any, context: __SerdeContext): Database => {
  return {
    CatalogId: __expectString(output.CatalogId),
    CreateTableDefaultPermissions:
      output.CreateTableDefaultPermissions !== undefined && output.CreateTableDefaultPermissions !== null
        ? deserializeAws_json1_1PrincipalPermissionsList(output.CreateTableDefaultPermissions, context)
        : undefined,
    CreateTime:
      output.CreateTime !== undefined && output.CreateTime !== null
        ? new Date(Math.round(output.CreateTime * 1000))
        : undefined,
    Description: __expectString(output.Description),
    LocationUri: __expectString(output.LocationUri),
    Name: __expectString(output.Name),
    Parameters:
      output.Parameters !== undefined && output.Parameters !== null
        ? deserializeAws_json1_1ParametersMap(output.Parameters, context)
        : undefined,
    TargetDatabase:
      output.TargetDatabase !== undefined && output.TargetDatabase !== null
        ? deserializeAws_json1_1DatabaseIdentifier(output.TargetDatabase, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DatabaseIdentifier = (output: any, context: __SerdeContext): DatabaseIdentifier => {
  return {
    CatalogId: __expectString(output.CatalogId),
    DatabaseName: __expectString(output.DatabaseName),
  } as any;
};

const deserializeAws_json1_1DatabaseList = (output: any, context: __SerdeContext): Database[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Database(entry, context);
    });
};

const deserializeAws_json1_1DataCatalogEncryptionSettings = (
  output: any,
  context: __SerdeContext
): DataCatalogEncryptionSettings => {
  return {
    ConnectionPasswordEncryption:
      output.ConnectionPasswordEncryption !== undefined && output.ConnectionPasswordEncryption !== null
        ? deserializeAws_json1_1ConnectionPasswordEncryption(output.ConnectionPasswordEncryption, context)
        : undefined,
    EncryptionAtRest:
      output.EncryptionAtRest !== undefined && output.EncryptionAtRest !== null
        ? deserializeAws_json1_1EncryptionAtRest(output.EncryptionAtRest, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DataLakePrincipal = (output: any, context: __SerdeContext): DataLakePrincipal => {
  return {
    DataLakePrincipalIdentifier: __expectString(output.DataLakePrincipalIdentifier),
  } as any;
};

const deserializeAws_json1_1DateColumnStatisticsData = (
  output: any,
  context: __SerdeContext
): DateColumnStatisticsData => {
  return {
    MaximumValue:
      output.MaximumValue !== undefined && output.MaximumValue !== null
        ? new Date(Math.round(output.MaximumValue * 1000))
        : undefined,
    MinimumValue:
      output.MinimumValue !== undefined && output.MinimumValue !== null
        ? new Date(Math.round(output.MinimumValue * 1000))
        : undefined,
    NumberOfDistinctValues: __expectNumber(output.NumberOfDistinctValues),
    NumberOfNulls: __expectNumber(output.NumberOfNulls),
  } as any;
};

const deserializeAws_json1_1DecimalColumnStatisticsData = (
  output: any,
  context: __SerdeContext
): DecimalColumnStatisticsData => {
  return {
    MaximumValue:
      output.MaximumValue !== undefined && output.MaximumValue !== null
        ? deserializeAws_json1_1DecimalNumber(output.MaximumValue, context)
        : undefined,
    MinimumValue:
      output.MinimumValue !== undefined && output.MinimumValue !== null
        ? deserializeAws_json1_1DecimalNumber(output.MinimumValue, context)
        : undefined,
    NumberOfDistinctValues: __expectNumber(output.NumberOfDistinctValues),
    NumberOfNulls: __expectNumber(output.NumberOfNulls),
  } as any;
};

const deserializeAws_json1_1DecimalNumber = (output: any, context: __SerdeContext): DecimalNumber => {
  return {
    Scale: __expectNumber(output.Scale),
    UnscaledValue:
      output.UnscaledValue !== undefined && output.UnscaledValue !== null
        ? context.base64Decoder(output.UnscaledValue)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteClassifierResponse = (
  output: any,
  context: __SerdeContext
): DeleteClassifierResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteColumnStatisticsForPartitionResponse = (
  output: any,
  context: __SerdeContext
): DeleteColumnStatisticsForPartitionResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteColumnStatisticsForTableResponse = (
  output: any,
  context: __SerdeContext
): DeleteColumnStatisticsForTableResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteConnectionResponse = (
  output: any,
  context: __SerdeContext
): DeleteConnectionResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteCrawlerResponse = (output: any, context: __SerdeContext): DeleteCrawlerResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteDatabaseResponse = (output: any, context: __SerdeContext): DeleteDatabaseResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteDevEndpointResponse = (
  output: any,
  context: __SerdeContext
): DeleteDevEndpointResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteJobResponse = (output: any, context: __SerdeContext): DeleteJobResponse => {
  return {
    JobName: __expectString(output.JobName),
  } as any;
};

const deserializeAws_json1_1DeleteMLTransformResponse = (
  output: any,
  context: __SerdeContext
): DeleteMLTransformResponse => {
  return {
    TransformId: __expectString(output.TransformId),
  } as any;
};

const deserializeAws_json1_1DeletePartitionIndexResponse = (
  output: any,
  context: __SerdeContext
): DeletePartitionIndexResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeletePartitionResponse = (
  output: any,
  context: __SerdeContext
): DeletePartitionResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteRegistryResponse = (output: any, context: __SerdeContext): DeleteRegistryResponse => {
  return {
    RegistryArn: __expectString(output.RegistryArn),
    RegistryName: __expectString(output.RegistryName),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1DeleteResourcePolicyResponse = (
  output: any,
  context: __SerdeContext
): DeleteResourcePolicyResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteSchemaResponse = (output: any, context: __SerdeContext): DeleteSchemaResponse => {
  return {
    SchemaArn: __expectString(output.SchemaArn),
    SchemaName: __expectString(output.SchemaName),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1DeleteSchemaVersionsResponse = (
  output: any,
  context: __SerdeContext
): DeleteSchemaVersionsResponse => {
  return {
    SchemaVersionErrors:
      output.SchemaVersionErrors !== undefined && output.SchemaVersionErrors !== null
        ? deserializeAws_json1_1SchemaVersionErrorList(output.SchemaVersionErrors, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteSecurityConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DeleteSecurityConfigurationResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteTableResponse = (output: any, context: __SerdeContext): DeleteTableResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteTableVersionResponse = (
  output: any,
  context: __SerdeContext
): DeleteTableVersionResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteTriggerResponse = (output: any, context: __SerdeContext): DeleteTriggerResponse => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1DeleteUserDefinedFunctionResponse = (
  output: any,
  context: __SerdeContext
): DeleteUserDefinedFunctionResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteWorkflowResponse = (output: any, context: __SerdeContext): DeleteWorkflowResponse => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1DevEndpoint = (output: any, context: __SerdeContext): DevEndpoint => {
  return {
    Arguments:
      output.Arguments !== undefined && output.Arguments !== null
        ? deserializeAws_json1_1MapValue(output.Arguments, context)
        : undefined,
    AvailabilityZone: __expectString(output.AvailabilityZone),
    CreatedTimestamp:
      output.CreatedTimestamp !== undefined && output.CreatedTimestamp !== null
        ? new Date(Math.round(output.CreatedTimestamp * 1000))
        : undefined,
    EndpointName: __expectString(output.EndpointName),
    ExtraJarsS3Path: __expectString(output.ExtraJarsS3Path),
    ExtraPythonLibsS3Path: __expectString(output.ExtraPythonLibsS3Path),
    FailureReason: __expectString(output.FailureReason),
    GlueVersion: __expectString(output.GlueVersion),
    LastModifiedTimestamp:
      output.LastModifiedTimestamp !== undefined && output.LastModifiedTimestamp !== null
        ? new Date(Math.round(output.LastModifiedTimestamp * 1000))
        : undefined,
    LastUpdateStatus: __expectString(output.LastUpdateStatus),
    NumberOfNodes: __expectNumber(output.NumberOfNodes),
    NumberOfWorkers: __expectNumber(output.NumberOfWorkers),
    PrivateAddress: __expectString(output.PrivateAddress),
    PublicAddress: __expectString(output.PublicAddress),
    PublicKey: __expectString(output.PublicKey),
    PublicKeys:
      output.PublicKeys !== undefined && output.PublicKeys !== null
        ? deserializeAws_json1_1PublicKeysList(output.PublicKeys, context)
        : undefined,
    RoleArn: __expectString(output.RoleArn),
    SecurityConfiguration: __expectString(output.SecurityConfiguration),
    SecurityGroupIds:
      output.SecurityGroupIds !== undefined && output.SecurityGroupIds !== null
        ? deserializeAws_json1_1StringList(output.SecurityGroupIds, context)
        : undefined,
    Status: __expectString(output.Status),
    SubnetId: __expectString(output.SubnetId),
    VpcId: __expectString(output.VpcId),
    WorkerType: __expectString(output.WorkerType),
    YarnEndpointAddress: __expectString(output.YarnEndpointAddress),
    ZeppelinRemoteSparkInterpreterPort: __expectNumber(output.ZeppelinRemoteSparkInterpreterPort),
  } as any;
};

const deserializeAws_json1_1DevEndpointList = (output: any, context: __SerdeContext): DevEndpoint[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DevEndpoint(entry, context);
    });
};

const deserializeAws_json1_1DevEndpointNameList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1DevEndpointNames = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1DoubleColumnStatisticsData = (
  output: any,
  context: __SerdeContext
): DoubleColumnStatisticsData => {
  return {
    MaximumValue: __handleFloat(output.MaximumValue),
    MinimumValue: __handleFloat(output.MinimumValue),
    NumberOfDistinctValues: __expectNumber(output.NumberOfDistinctValues),
    NumberOfNulls: __expectNumber(output.NumberOfNulls),
  } as any;
};

const deserializeAws_json1_1DynamoDBTarget = (output: any, context: __SerdeContext): DynamoDBTarget => {
  return {
    Path: __expectString(output.Path),
    scanAll: __expectBoolean(output.scanAll),
    scanRate: __handleFloat(output.scanRate),
  } as any;
};

const deserializeAws_json1_1DynamoDBTargetList = (output: any, context: __SerdeContext): DynamoDBTarget[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DynamoDBTarget(entry, context);
    });
};

const deserializeAws_json1_1Edge = (output: any, context: __SerdeContext): Edge => {
  return {
    DestinationId: __expectString(output.DestinationId),
    SourceId: __expectString(output.SourceId),
  } as any;
};

const deserializeAws_json1_1EdgeList = (output: any, context: __SerdeContext): Edge[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Edge(entry, context);
    });
};

const deserializeAws_json1_1EncryptionAtRest = (output: any, context: __SerdeContext): EncryptionAtRest => {
  return {
    CatalogEncryptionMode: __expectString(output.CatalogEncryptionMode),
    SseAwsKmsKeyId: __expectString(output.SseAwsKmsKeyId),
  } as any;
};

const deserializeAws_json1_1EncryptionConfiguration = (
  output: any,
  context: __SerdeContext
): EncryptionConfiguration => {
  return {
    CloudWatchEncryption:
      output.CloudWatchEncryption !== undefined && output.CloudWatchEncryption !== null
        ? deserializeAws_json1_1CloudWatchEncryption(output.CloudWatchEncryption, context)
        : undefined,
    JobBookmarksEncryption:
      output.JobBookmarksEncryption !== undefined && output.JobBookmarksEncryption !== null
        ? deserializeAws_json1_1JobBookmarksEncryption(output.JobBookmarksEncryption, context)
        : undefined,
    S3Encryption:
      output.S3Encryption !== undefined && output.S3Encryption !== null
        ? deserializeAws_json1_1S3EncryptionList(output.S3Encryption, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1EntityNotFoundException = (
  output: any,
  context: __SerdeContext
): EntityNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ErrorByName = (output: any, context: __SerdeContext): { [key: string]: ErrorDetail } => {
  return Object.entries(output).reduce((acc: { [key: string]: ErrorDetail }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_json1_1ErrorDetail(value, context),
    };
  }, {});
};

const deserializeAws_json1_1ErrorDetail = (output: any, context: __SerdeContext): ErrorDetail => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
  } as any;
};

const deserializeAws_json1_1ErrorDetails = (output: any, context: __SerdeContext): ErrorDetails => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
  } as any;
};

const deserializeAws_json1_1EvaluationMetrics = (output: any, context: __SerdeContext): EvaluationMetrics => {
  return {
    FindMatchesMetrics:
      output.FindMatchesMetrics !== undefined && output.FindMatchesMetrics !== null
        ? deserializeAws_json1_1FindMatchesMetrics(output.FindMatchesMetrics, context)
        : undefined,
    TransformType: __expectString(output.TransformType),
  } as any;
};

const deserializeAws_json1_1EventBatchingCondition = (output: any, context: __SerdeContext): EventBatchingCondition => {
  return {
    BatchSize: __expectNumber(output.BatchSize),
    BatchWindow: __expectNumber(output.BatchWindow),
  } as any;
};

const deserializeAws_json1_1ExecutionProperty = (output: any, context: __SerdeContext): ExecutionProperty => {
  return {
    MaxConcurrentRuns: __expectNumber(output.MaxConcurrentRuns),
  } as any;
};

const deserializeAws_json1_1ExportLabelsTaskRunProperties = (
  output: any,
  context: __SerdeContext
): ExportLabelsTaskRunProperties => {
  return {
    OutputS3Path: __expectString(output.OutputS3Path),
  } as any;
};

const deserializeAws_json1_1FindMatchesMetrics = (output: any, context: __SerdeContext): FindMatchesMetrics => {
  return {
    AreaUnderPRCurve: __handleFloat(output.AreaUnderPRCurve),
    ColumnImportances:
      output.ColumnImportances !== undefined && output.ColumnImportances !== null
        ? deserializeAws_json1_1ColumnImportanceList(output.ColumnImportances, context)
        : undefined,
    ConfusionMatrix:
      output.ConfusionMatrix !== undefined && output.ConfusionMatrix !== null
        ? deserializeAws_json1_1ConfusionMatrix(output.ConfusionMatrix, context)
        : undefined,
    F1: __handleFloat(output.F1),
    Precision: __handleFloat(output.Precision),
    Recall: __handleFloat(output.Recall),
  } as any;
};

const deserializeAws_json1_1FindMatchesParameters = (output: any, context: __SerdeContext): FindMatchesParameters => {
  return {
    AccuracyCostTradeoff: __handleFloat(output.AccuracyCostTradeoff),
    EnforceProvidedLabels: __expectBoolean(output.EnforceProvidedLabels),
    PrecisionRecallTradeoff: __handleFloat(output.PrecisionRecallTradeoff),
    PrimaryKeyColumnName: __expectString(output.PrimaryKeyColumnName),
  } as any;
};

const deserializeAws_json1_1FindMatchesTaskRunProperties = (
  output: any,
  context: __SerdeContext
): FindMatchesTaskRunProperties => {
  return {
    JobId: __expectString(output.JobId),
    JobName: __expectString(output.JobName),
    JobRunId: __expectString(output.JobRunId),
  } as any;
};

const deserializeAws_json1_1GenericMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_json1_1GetCatalogImportStatusResponse = (
  output: any,
  context: __SerdeContext
): GetCatalogImportStatusResponse => {
  return {
    ImportStatus:
      output.ImportStatus !== undefined && output.ImportStatus !== null
        ? deserializeAws_json1_1CatalogImportStatus(output.ImportStatus, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetClassifierResponse = (output: any, context: __SerdeContext): GetClassifierResponse => {
  return {
    Classifier:
      output.Classifier !== undefined && output.Classifier !== null
        ? deserializeAws_json1_1Classifier(output.Classifier, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetClassifiersResponse = (output: any, context: __SerdeContext): GetClassifiersResponse => {
  return {
    Classifiers:
      output.Classifiers !== undefined && output.Classifiers !== null
        ? deserializeAws_json1_1ClassifierList(output.Classifiers, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1GetColumnStatisticsForPartitionResponse = (
  output: any,
  context: __SerdeContext
): GetColumnStatisticsForPartitionResponse => {
  return {
    ColumnStatisticsList:
      output.ColumnStatisticsList !== undefined && output.ColumnStatisticsList !== null
        ? deserializeAws_json1_1ColumnStatisticsList(output.ColumnStatisticsList, context)
        : undefined,
    Errors:
      output.Errors !== undefined && output.Errors !== null
        ? deserializeAws_json1_1ColumnErrors(output.Errors, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetColumnStatisticsForTableResponse = (
  output: any,
  context: __SerdeContext
): GetColumnStatisticsForTableResponse => {
  return {
    ColumnStatisticsList:
      output.ColumnStatisticsList !== undefined && output.ColumnStatisticsList !== null
        ? deserializeAws_json1_1ColumnStatisticsList(output.ColumnStatisticsList, context)
        : undefined,
    Errors:
      output.Errors !== undefined && output.Errors !== null
        ? deserializeAws_json1_1ColumnErrors(output.Errors, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetConnectionResponse = (output: any, context: __SerdeContext): GetConnectionResponse => {
  return {
    Connection:
      output.Connection !== undefined && output.Connection !== null
        ? deserializeAws_json1_1Connection(output.Connection, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetConnectionsResponse = (output: any, context: __SerdeContext): GetConnectionsResponse => {
  return {
    ConnectionList:
      output.ConnectionList !== undefined && output.ConnectionList !== null
        ? deserializeAws_json1_1ConnectionList(output.ConnectionList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1GetCrawlerMetricsResponse = (
  output: any,
  context: __SerdeContext
): GetCrawlerMetricsResponse => {
  return {
    CrawlerMetricsList:
      output.CrawlerMetricsList !== undefined && output.CrawlerMetricsList !== null
        ? deserializeAws_json1_1CrawlerMetricsList(output.CrawlerMetricsList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1GetCrawlerResponse = (output: any, context: __SerdeContext): GetCrawlerResponse => {
  return {
    Crawler:
      output.Crawler !== undefined && output.Crawler !== null
        ? deserializeAws_json1_1Crawler(output.Crawler, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetCrawlersResponse = (output: any, context: __SerdeContext): GetCrawlersResponse => {
  return {
    Crawlers:
      output.Crawlers !== undefined && output.Crawlers !== null
        ? deserializeAws_json1_1CrawlerList(output.Crawlers, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1GetDatabaseResponse = (output: any, context: __SerdeContext): GetDatabaseResponse => {
  return {
    Database:
      output.Database !== undefined && output.Database !== null
        ? deserializeAws_json1_1Database(output.Database, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetDatabasesResponse = (output: any, context: __SerdeContext): GetDatabasesResponse => {
  return {
    DatabaseList:
      output.DatabaseList !== undefined && output.DatabaseList !== null
        ? deserializeAws_json1_1DatabaseList(output.DatabaseList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1GetDataCatalogEncryptionSettingsResponse = (
  output: any,
  context: __SerdeContext
): GetDataCatalogEncryptionSettingsResponse => {
  return {
    DataCatalogEncryptionSettings:
      output.DataCatalogEncryptionSettings !== undefined && output.DataCatalogEncryptionSettings !== null
        ? deserializeAws_json1_1DataCatalogEncryptionSettings(output.DataCatalogEncryptionSettings, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetDataflowGraphResponse = (
  output: any,
  context: __SerdeContext
): GetDataflowGraphResponse => {
  return {
    DagEdges:
      output.DagEdges !== undefined && output.DagEdges !== null
        ? deserializeAws_json1_1DagEdges(output.DagEdges, context)
        : undefined,
    DagNodes:
      output.DagNodes !== undefined && output.DagNodes !== null
        ? deserializeAws_json1_1DagNodes(output.DagNodes, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetDevEndpointResponse = (output: any, context: __SerdeContext): GetDevEndpointResponse => {
  return {
    DevEndpoint:
      output.DevEndpoint !== undefined && output.DevEndpoint !== null
        ? deserializeAws_json1_1DevEndpoint(output.DevEndpoint, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetDevEndpointsResponse = (
  output: any,
  context: __SerdeContext
): GetDevEndpointsResponse => {
  return {
    DevEndpoints:
      output.DevEndpoints !== undefined && output.DevEndpoints !== null
        ? deserializeAws_json1_1DevEndpointList(output.DevEndpoints, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1GetJobBookmarkResponse = (output: any, context: __SerdeContext): GetJobBookmarkResponse => {
  return {
    JobBookmarkEntry:
      output.JobBookmarkEntry !== undefined && output.JobBookmarkEntry !== null
        ? deserializeAws_json1_1JobBookmarkEntry(output.JobBookmarkEntry, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetJobResponse = (output: any, context: __SerdeContext): GetJobResponse => {
  return {
    Job: output.Job !== undefined && output.Job !== null ? deserializeAws_json1_1Job(output.Job, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetJobRunResponse = (output: any, context: __SerdeContext): GetJobRunResponse => {
  return {
    JobRun:
      output.JobRun !== undefined && output.JobRun !== null
        ? deserializeAws_json1_1JobRun(output.JobRun, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetJobRunsResponse = (output: any, context: __SerdeContext): GetJobRunsResponse => {
  return {
    JobRuns:
      output.JobRuns !== undefined && output.JobRuns !== null
        ? deserializeAws_json1_1JobRunList(output.JobRuns, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1GetJobsResponse = (output: any, context: __SerdeContext): GetJobsResponse => {
  return {
    Jobs:
      output.Jobs !== undefined && output.Jobs !== null
        ? deserializeAws_json1_1JobList(output.Jobs, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1GetMappingResponse = (output: any, context: __SerdeContext): GetMappingResponse => {
  return {
    Mapping:
      output.Mapping !== undefined && output.Mapping !== null
        ? deserializeAws_json1_1MappingList(output.Mapping, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetMLTaskRunResponse = (output: any, context: __SerdeContext): GetMLTaskRunResponse => {
  return {
    CompletedOn:
      output.CompletedOn !== undefined && output.CompletedOn !== null
        ? new Date(Math.round(output.CompletedOn * 1000))
        : undefined,
    ErrorString: __expectString(output.ErrorString),
    ExecutionTime: __expectNumber(output.ExecutionTime),
    LastModifiedOn:
      output.LastModifiedOn !== undefined && output.LastModifiedOn !== null
        ? new Date(Math.round(output.LastModifiedOn * 1000))
        : undefined,
    LogGroupName: __expectString(output.LogGroupName),
    Properties:
      output.Properties !== undefined && output.Properties !== null
        ? deserializeAws_json1_1TaskRunProperties(output.Properties, context)
        : undefined,
    StartedOn:
      output.StartedOn !== undefined && output.StartedOn !== null
        ? new Date(Math.round(output.StartedOn * 1000))
        : undefined,
    Status: __expectString(output.Status),
    TaskRunId: __expectString(output.TaskRunId),
    TransformId: __expectString(output.TransformId),
  } as any;
};

const deserializeAws_json1_1GetMLTaskRunsResponse = (output: any, context: __SerdeContext): GetMLTaskRunsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    TaskRuns:
      output.TaskRuns !== undefined && output.TaskRuns !== null
        ? deserializeAws_json1_1TaskRunList(output.TaskRuns, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetMLTransformResponse = (output: any, context: __SerdeContext): GetMLTransformResponse => {
  return {
    CreatedOn:
      output.CreatedOn !== undefined && output.CreatedOn !== null
        ? new Date(Math.round(output.CreatedOn * 1000))
        : undefined,
    Description: __expectString(output.Description),
    EvaluationMetrics:
      output.EvaluationMetrics !== undefined && output.EvaluationMetrics !== null
        ? deserializeAws_json1_1EvaluationMetrics(output.EvaluationMetrics, context)
        : undefined,
    GlueVersion: __expectString(output.GlueVersion),
    InputRecordTables:
      output.InputRecordTables !== undefined && output.InputRecordTables !== null
        ? deserializeAws_json1_1GlueTables(output.InputRecordTables, context)
        : undefined,
    LabelCount: __expectNumber(output.LabelCount),
    LastModifiedOn:
      output.LastModifiedOn !== undefined && output.LastModifiedOn !== null
        ? new Date(Math.round(output.LastModifiedOn * 1000))
        : undefined,
    MaxCapacity: __handleFloat(output.MaxCapacity),
    MaxRetries: __expectNumber(output.MaxRetries),
    Name: __expectString(output.Name),
    NumberOfWorkers: __expectNumber(output.NumberOfWorkers),
    Parameters:
      output.Parameters !== undefined && output.Parameters !== null
        ? deserializeAws_json1_1TransformParameters(output.Parameters, context)
        : undefined,
    Role: __expectString(output.Role),
    Schema:
      output.Schema !== undefined && output.Schema !== null
        ? deserializeAws_json1_1TransformSchema(output.Schema, context)
        : undefined,
    Status: __expectString(output.Status),
    Timeout: __expectNumber(output.Timeout),
    TransformEncryption:
      output.TransformEncryption !== undefined && output.TransformEncryption !== null
        ? deserializeAws_json1_1TransformEncryption(output.TransformEncryption, context)
        : undefined,
    TransformId: __expectString(output.TransformId),
    WorkerType: __expectString(output.WorkerType),
  } as any;
};

const deserializeAws_json1_1GetMLTransformsResponse = (
  output: any,
  context: __SerdeContext
): GetMLTransformsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Transforms:
      output.Transforms !== undefined && output.Transforms !== null
        ? deserializeAws_json1_1TransformList(output.Transforms, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetPartitionIndexesResponse = (
  output: any,
  context: __SerdeContext
): GetPartitionIndexesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    PartitionIndexDescriptorList:
      output.PartitionIndexDescriptorList !== undefined && output.PartitionIndexDescriptorList !== null
        ? deserializeAws_json1_1PartitionIndexDescriptorList(output.PartitionIndexDescriptorList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetPartitionResponse = (output: any, context: __SerdeContext): GetPartitionResponse => {
  return {
    Partition:
      output.Partition !== undefined && output.Partition !== null
        ? deserializeAws_json1_1Partition(output.Partition, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetPartitionsResponse = (output: any, context: __SerdeContext): GetPartitionsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Partitions:
      output.Partitions !== undefined && output.Partitions !== null
        ? deserializeAws_json1_1PartitionList(output.Partitions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetPlanResponse = (output: any, context: __SerdeContext): GetPlanResponse => {
  return {
    PythonScript: __expectString(output.PythonScript),
    ScalaCode: __expectString(output.ScalaCode),
  } as any;
};

const deserializeAws_json1_1GetRegistryResponse = (output: any, context: __SerdeContext): GetRegistryResponse => {
  return {
    CreatedTime: __expectString(output.CreatedTime),
    Description: __expectString(output.Description),
    RegistryArn: __expectString(output.RegistryArn),
    RegistryName: __expectString(output.RegistryName),
    Status: __expectString(output.Status),
    UpdatedTime: __expectString(output.UpdatedTime),
  } as any;
};

const deserializeAws_json1_1GetResourcePoliciesResponse = (
  output: any,
  context: __SerdeContext
): GetResourcePoliciesResponse => {
  return {
    GetResourcePoliciesResponseList:
      output.GetResourcePoliciesResponseList !== undefined && output.GetResourcePoliciesResponseList !== null
        ? deserializeAws_json1_1GetResourcePoliciesResponseList(output.GetResourcePoliciesResponseList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1GetResourcePoliciesResponseList = (output: any, context: __SerdeContext): GluePolicy[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1GluePolicy(entry, context);
    });
};

const deserializeAws_json1_1GetResourcePolicyResponse = (
  output: any,
  context: __SerdeContext
): GetResourcePolicyResponse => {
  return {
    CreateTime:
      output.CreateTime !== undefined && output.CreateTime !== null
        ? new Date(Math.round(output.CreateTime * 1000))
        : undefined,
    PolicyHash: __expectString(output.PolicyHash),
    PolicyInJson: __expectString(output.PolicyInJson),
    UpdateTime:
      output.UpdateTime !== undefined && output.UpdateTime !== null
        ? new Date(Math.round(output.UpdateTime * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetSchemaByDefinitionResponse = (
  output: any,
  context: __SerdeContext
): GetSchemaByDefinitionResponse => {
  return {
    CreatedTime: __expectString(output.CreatedTime),
    DataFormat: __expectString(output.DataFormat),
    SchemaArn: __expectString(output.SchemaArn),
    SchemaVersionId: __expectString(output.SchemaVersionId),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1GetSchemaResponse = (output: any, context: __SerdeContext): GetSchemaResponse => {
  return {
    Compatibility: __expectString(output.Compatibility),
    CreatedTime: __expectString(output.CreatedTime),
    DataFormat: __expectString(output.DataFormat),
    Description: __expectString(output.Description),
    LatestSchemaVersion: __expectNumber(output.LatestSchemaVersion),
    NextSchemaVersion: __expectNumber(output.NextSchemaVersion),
    RegistryArn: __expectString(output.RegistryArn),
    RegistryName: __expectString(output.RegistryName),
    SchemaArn: __expectString(output.SchemaArn),
    SchemaCheckpoint: __expectNumber(output.SchemaCheckpoint),
    SchemaName: __expectString(output.SchemaName),
    SchemaStatus: __expectString(output.SchemaStatus),
    UpdatedTime: __expectString(output.UpdatedTime),
  } as any;
};

const deserializeAws_json1_1GetSchemaVersionResponse = (
  output: any,
  context: __SerdeContext
): GetSchemaVersionResponse => {
  return {
    CreatedTime: __expectString(output.CreatedTime),
    DataFormat: __expectString(output.DataFormat),
    SchemaArn: __expectString(output.SchemaArn),
    SchemaDefinition: __expectString(output.SchemaDefinition),
    SchemaVersionId: __expectString(output.SchemaVersionId),
    Status: __expectString(output.Status),
    VersionNumber: __expectNumber(output.VersionNumber),
  } as any;
};

const deserializeAws_json1_1GetSchemaVersionsDiffResponse = (
  output: any,
  context: __SerdeContext
): GetSchemaVersionsDiffResponse => {
  return {
    Diff: __expectString(output.Diff),
  } as any;
};

const deserializeAws_json1_1GetSecurityConfigurationResponse = (
  output: any,
  context: __SerdeContext
): GetSecurityConfigurationResponse => {
  return {
    SecurityConfiguration:
      output.SecurityConfiguration !== undefined && output.SecurityConfiguration !== null
        ? deserializeAws_json1_1SecurityConfiguration(output.SecurityConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetSecurityConfigurationsResponse = (
  output: any,
  context: __SerdeContext
): GetSecurityConfigurationsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    SecurityConfigurations:
      output.SecurityConfigurations !== undefined && output.SecurityConfigurations !== null
        ? deserializeAws_json1_1SecurityConfigurationList(output.SecurityConfigurations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetTableResponse = (output: any, context: __SerdeContext): GetTableResponse => {
  return {
    Table:
      output.Table !== undefined && output.Table !== null
        ? deserializeAws_json1_1Table(output.Table, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetTablesResponse = (output: any, context: __SerdeContext): GetTablesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    TableList:
      output.TableList !== undefined && output.TableList !== null
        ? deserializeAws_json1_1TableList(output.TableList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetTableVersionResponse = (
  output: any,
  context: __SerdeContext
): GetTableVersionResponse => {
  return {
    TableVersion:
      output.TableVersion !== undefined && output.TableVersion !== null
        ? deserializeAws_json1_1TableVersion(output.TableVersion, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetTableVersionsList = (output: any, context: __SerdeContext): TableVersion[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TableVersion(entry, context);
    });
};

const deserializeAws_json1_1GetTableVersionsResponse = (
  output: any,
  context: __SerdeContext
): GetTableVersionsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    TableVersions:
      output.TableVersions !== undefined && output.TableVersions !== null
        ? deserializeAws_json1_1GetTableVersionsList(output.TableVersions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetTagsResponse = (output: any, context: __SerdeContext): GetTagsResponse => {
  return {
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagsMap(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetTriggerResponse = (output: any, context: __SerdeContext): GetTriggerResponse => {
  return {
    Trigger:
      output.Trigger !== undefined && output.Trigger !== null
        ? deserializeAws_json1_1Trigger(output.Trigger, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetTriggersResponse = (output: any, context: __SerdeContext): GetTriggersResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Triggers:
      output.Triggers !== undefined && output.Triggers !== null
        ? deserializeAws_json1_1TriggerList(output.Triggers, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetUserDefinedFunctionResponse = (
  output: any,
  context: __SerdeContext
): GetUserDefinedFunctionResponse => {
  return {
    UserDefinedFunction:
      output.UserDefinedFunction !== undefined && output.UserDefinedFunction !== null
        ? deserializeAws_json1_1UserDefinedFunction(output.UserDefinedFunction, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetUserDefinedFunctionsResponse = (
  output: any,
  context: __SerdeContext
): GetUserDefinedFunctionsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    UserDefinedFunctions:
      output.UserDefinedFunctions !== undefined && output.UserDefinedFunctions !== null
        ? deserializeAws_json1_1UserDefinedFunctionList(output.UserDefinedFunctions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetWorkflowResponse = (output: any, context: __SerdeContext): GetWorkflowResponse => {
  return {
    Workflow:
      output.Workflow !== undefined && output.Workflow !== null
        ? deserializeAws_json1_1Workflow(output.Workflow, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetWorkflowRunPropertiesResponse = (
  output: any,
  context: __SerdeContext
): GetWorkflowRunPropertiesResponse => {
  return {
    RunProperties:
      output.RunProperties !== undefined && output.RunProperties !== null
        ? deserializeAws_json1_1WorkflowRunProperties(output.RunProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetWorkflowRunResponse = (output: any, context: __SerdeContext): GetWorkflowRunResponse => {
  return {
    Run:
      output.Run !== undefined && output.Run !== null
        ? deserializeAws_json1_1WorkflowRun(output.Run, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetWorkflowRunsResponse = (
  output: any,
  context: __SerdeContext
): GetWorkflowRunsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Runs:
      output.Runs !== undefined && output.Runs !== null
        ? deserializeAws_json1_1WorkflowRuns(output.Runs, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GlueEncryptionException = (
  output: any,
  context: __SerdeContext
): GlueEncryptionException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1GluePolicy = (output: any, context: __SerdeContext): GluePolicy => {
  return {
    CreateTime:
      output.CreateTime !== undefined && output.CreateTime !== null
        ? new Date(Math.round(output.CreateTime * 1000))
        : undefined,
    PolicyHash: __expectString(output.PolicyHash),
    PolicyInJson: __expectString(output.PolicyInJson),
    UpdateTime:
      output.UpdateTime !== undefined && output.UpdateTime !== null
        ? new Date(Math.round(output.UpdateTime * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_1GlueTable = (output: any, context: __SerdeContext): GlueTable => {
  return {
    CatalogId: __expectString(output.CatalogId),
    ConnectionName: __expectString(output.ConnectionName),
    DatabaseName: __expectString(output.DatabaseName),
    TableName: __expectString(output.TableName),
  } as any;
};

const deserializeAws_json1_1GlueTables = (output: any, context: __SerdeContext): GlueTable[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1GlueTable(entry, context);
    });
};

const deserializeAws_json1_1GrokClassifier = (output: any, context: __SerdeContext): GrokClassifier => {
  return {
    Classification: __expectString(output.Classification),
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    CustomPatterns: __expectString(output.CustomPatterns),
    GrokPattern: __expectString(output.GrokPattern),
    LastUpdated:
      output.LastUpdated !== undefined && output.LastUpdated !== null
        ? new Date(Math.round(output.LastUpdated * 1000))
        : undefined,
    Name: __expectString(output.Name),
    Version: __expectNumber(output.Version),
  } as any;
};

const deserializeAws_json1_1IdempotentParameterMismatchException = (
  output: any,
  context: __SerdeContext
): IdempotentParameterMismatchException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1IllegalWorkflowStateException = (
  output: any,
  context: __SerdeContext
): IllegalWorkflowStateException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ImportCatalogToGlueResponse = (
  output: any,
  context: __SerdeContext
): ImportCatalogToGlueResponse => {
  return {} as any;
};

const deserializeAws_json1_1ImportLabelsTaskRunProperties = (
  output: any,
  context: __SerdeContext
): ImportLabelsTaskRunProperties => {
  return {
    InputS3Path: __expectString(output.InputS3Path),
    Replace: __expectBoolean(output.Replace),
  } as any;
};

const deserializeAws_json1_1InternalServiceException = (
  output: any,
  context: __SerdeContext
): InternalServiceException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidInputException = (output: any, context: __SerdeContext): InvalidInputException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1JdbcTarget = (output: any, context: __SerdeContext): JdbcTarget => {
  return {
    ConnectionName: __expectString(output.ConnectionName),
    Exclusions:
      output.Exclusions !== undefined && output.Exclusions !== null
        ? deserializeAws_json1_1PathList(output.Exclusions, context)
        : undefined,
    Path: __expectString(output.Path),
  } as any;
};

const deserializeAws_json1_1JdbcTargetList = (output: any, context: __SerdeContext): JdbcTarget[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1JdbcTarget(entry, context);
    });
};

const deserializeAws_json1_1Job = (output: any, context: __SerdeContext): Job => {
  return {
    AllocatedCapacity: __expectNumber(output.AllocatedCapacity),
    Command:
      output.Command !== undefined && output.Command !== null
        ? deserializeAws_json1_1JobCommand(output.Command, context)
        : undefined,
    Connections:
      output.Connections !== undefined && output.Connections !== null
        ? deserializeAws_json1_1ConnectionsList(output.Connections, context)
        : undefined,
    CreatedOn:
      output.CreatedOn !== undefined && output.CreatedOn !== null
        ? new Date(Math.round(output.CreatedOn * 1000))
        : undefined,
    DefaultArguments:
      output.DefaultArguments !== undefined && output.DefaultArguments !== null
        ? deserializeAws_json1_1GenericMap(output.DefaultArguments, context)
        : undefined,
    Description: __expectString(output.Description),
    ExecutionProperty:
      output.ExecutionProperty !== undefined && output.ExecutionProperty !== null
        ? deserializeAws_json1_1ExecutionProperty(output.ExecutionProperty, context)
        : undefined,
    GlueVersion: __expectString(output.GlueVersion),
    LastModifiedOn:
      output.LastModifiedOn !== undefined && output.LastModifiedOn !== null
        ? new Date(Math.round(output.LastModifiedOn * 1000))
        : undefined,
    LogUri: __expectString(output.LogUri),
    MaxCapacity: __handleFloat(output.MaxCapacity),
    MaxRetries: __expectNumber(output.MaxRetries),
    Name: __expectString(output.Name),
    NonOverridableArguments:
      output.NonOverridableArguments !== undefined && output.NonOverridableArguments !== null
        ? deserializeAws_json1_1GenericMap(output.NonOverridableArguments, context)
        : undefined,
    NotificationProperty:
      output.NotificationProperty !== undefined && output.NotificationProperty !== null
        ? deserializeAws_json1_1NotificationProperty(output.NotificationProperty, context)
        : undefined,
    NumberOfWorkers: __expectNumber(output.NumberOfWorkers),
    Role: __expectString(output.Role),
    SecurityConfiguration: __expectString(output.SecurityConfiguration),
    Timeout: __expectNumber(output.Timeout),
    WorkerType: __expectString(output.WorkerType),
  } as any;
};

const deserializeAws_json1_1JobBookmarkEntry = (output: any, context: __SerdeContext): JobBookmarkEntry => {
  return {
    Attempt: __expectNumber(output.Attempt),
    JobBookmark: __expectString(output.JobBookmark),
    JobName: __expectString(output.JobName),
    PreviousRunId: __expectString(output.PreviousRunId),
    Run: __expectNumber(output.Run),
    RunId: __expectString(output.RunId),
    Version: __expectNumber(output.Version),
  } as any;
};

const deserializeAws_json1_1JobBookmarksEncryption = (output: any, context: __SerdeContext): JobBookmarksEncryption => {
  return {
    JobBookmarksEncryptionMode: __expectString(output.JobBookmarksEncryptionMode),
    KmsKeyArn: __expectString(output.KmsKeyArn),
  } as any;
};

const deserializeAws_json1_1JobCommand = (output: any, context: __SerdeContext): JobCommand => {
  return {
    Name: __expectString(output.Name),
    PythonVersion: __expectString(output.PythonVersion),
    ScriptLocation: __expectString(output.ScriptLocation),
  } as any;
};

const deserializeAws_json1_1JobList = (output: any, context: __SerdeContext): Job[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Job(entry, context);
    });
};

const deserializeAws_json1_1JobNameList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1JobNodeDetails = (output: any, context: __SerdeContext): JobNodeDetails => {
  return {
    JobRuns:
      output.JobRuns !== undefined && output.JobRuns !== null
        ? deserializeAws_json1_1JobRunList(output.JobRuns, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1JobRun = (output: any, context: __SerdeContext): JobRun => {
  return {
    AllocatedCapacity: __expectNumber(output.AllocatedCapacity),
    Arguments:
      output.Arguments !== undefined && output.Arguments !== null
        ? deserializeAws_json1_1GenericMap(output.Arguments, context)
        : undefined,
    Attempt: __expectNumber(output.Attempt),
    CompletedOn:
      output.CompletedOn !== undefined && output.CompletedOn !== null
        ? new Date(Math.round(output.CompletedOn * 1000))
        : undefined,
    ErrorMessage: __expectString(output.ErrorMessage),
    ExecutionTime: __expectNumber(output.ExecutionTime),
    GlueVersion: __expectString(output.GlueVersion),
    Id: __expectString(output.Id),
    JobName: __expectString(output.JobName),
    JobRunState: __expectString(output.JobRunState),
    LastModifiedOn:
      output.LastModifiedOn !== undefined && output.LastModifiedOn !== null
        ? new Date(Math.round(output.LastModifiedOn * 1000))
        : undefined,
    LogGroupName: __expectString(output.LogGroupName),
    MaxCapacity: __handleFloat(output.MaxCapacity),
    NotificationProperty:
      output.NotificationProperty !== undefined && output.NotificationProperty !== null
        ? deserializeAws_json1_1NotificationProperty(output.NotificationProperty, context)
        : undefined,
    NumberOfWorkers: __expectNumber(output.NumberOfWorkers),
    PredecessorRuns:
      output.PredecessorRuns !== undefined && output.PredecessorRuns !== null
        ? deserializeAws_json1_1PredecessorList(output.PredecessorRuns, context)
        : undefined,
    PreviousRunId: __expectString(output.PreviousRunId),
    SecurityConfiguration: __expectString(output.SecurityConfiguration),
    StartedOn:
      output.StartedOn !== undefined && output.StartedOn !== null
        ? new Date(Math.round(output.StartedOn * 1000))
        : undefined,
    Timeout: __expectNumber(output.Timeout),
    TriggerName: __expectString(output.TriggerName),
    WorkerType: __expectString(output.WorkerType),
  } as any;
};

const deserializeAws_json1_1JobRunList = (output: any, context: __SerdeContext): JobRun[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1JobRun(entry, context);
    });
};

const deserializeAws_json1_1JsonClassifier = (output: any, context: __SerdeContext): JsonClassifier => {
  return {
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    JsonPath: __expectString(output.JsonPath),
    LastUpdated:
      output.LastUpdated !== undefined && output.LastUpdated !== null
        ? new Date(Math.round(output.LastUpdated * 1000))
        : undefined,
    Name: __expectString(output.Name),
    Version: __expectNumber(output.Version),
  } as any;
};

const deserializeAws_json1_1KeySchemaElement = (output: any, context: __SerdeContext): KeySchemaElement => {
  return {
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1KeySchemaElementList = (output: any, context: __SerdeContext): KeySchemaElement[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1KeySchemaElement(entry, context);
    });
};

const deserializeAws_json1_1LabelingSetGenerationTaskRunProperties = (
  output: any,
  context: __SerdeContext
): LabelingSetGenerationTaskRunProperties => {
  return {
    OutputS3Path: __expectString(output.OutputS3Path),
  } as any;
};

const deserializeAws_json1_1LastCrawlInfo = (output: any, context: __SerdeContext): LastCrawlInfo => {
  return {
    ErrorMessage: __expectString(output.ErrorMessage),
    LogGroup: __expectString(output.LogGroup),
    LogStream: __expectString(output.LogStream),
    MessagePrefix: __expectString(output.MessagePrefix),
    StartTime:
      output.StartTime !== undefined && output.StartTime !== null
        ? new Date(Math.round(output.StartTime * 1000))
        : undefined,
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1LineageConfiguration = (output: any, context: __SerdeContext): LineageConfiguration => {
  return {
    CrawlerLineageSettings: __expectString(output.CrawlerLineageSettings),
  } as any;
};

const deserializeAws_json1_1ListCrawlersResponse = (output: any, context: __SerdeContext): ListCrawlersResponse => {
  return {
    CrawlerNames:
      output.CrawlerNames !== undefined && output.CrawlerNames !== null
        ? deserializeAws_json1_1CrawlerNameList(output.CrawlerNames, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListDevEndpointsResponse = (
  output: any,
  context: __SerdeContext
): ListDevEndpointsResponse => {
  return {
    DevEndpointNames:
      output.DevEndpointNames !== undefined && output.DevEndpointNames !== null
        ? deserializeAws_json1_1DevEndpointNameList(output.DevEndpointNames, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListJobsResponse = (output: any, context: __SerdeContext): ListJobsResponse => {
  return {
    JobNames:
      output.JobNames !== undefined && output.JobNames !== null
        ? deserializeAws_json1_1JobNameList(output.JobNames, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListMLTransformsResponse = (
  output: any,
  context: __SerdeContext
): ListMLTransformsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    TransformIds:
      output.TransformIds !== undefined && output.TransformIds !== null
        ? deserializeAws_json1_1TransformIdList(output.TransformIds, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListRegistriesResponse = (output: any, context: __SerdeContext): ListRegistriesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Registries:
      output.Registries !== undefined && output.Registries !== null
        ? deserializeAws_json1_1RegistryListDefinition(output.Registries, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListSchemasResponse = (output: any, context: __SerdeContext): ListSchemasResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Schemas:
      output.Schemas !== undefined && output.Schemas !== null
        ? deserializeAws_json1_1SchemaListDefinition(output.Schemas, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListSchemaVersionsResponse = (
  output: any,
  context: __SerdeContext
): ListSchemaVersionsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Schemas:
      output.Schemas !== undefined && output.Schemas !== null
        ? deserializeAws_json1_1SchemaVersionList(output.Schemas, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListTriggersResponse = (output: any, context: __SerdeContext): ListTriggersResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    TriggerNames:
      output.TriggerNames !== undefined && output.TriggerNames !== null
        ? deserializeAws_json1_1TriggerNameList(output.TriggerNames, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListWorkflowsResponse = (output: any, context: __SerdeContext): ListWorkflowsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Workflows:
      output.Workflows !== undefined && output.Workflows !== null
        ? deserializeAws_json1_1WorkflowNames(output.Workflows, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1LocationMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_json1_1LongColumnStatisticsData = (
  output: any,
  context: __SerdeContext
): LongColumnStatisticsData => {
  return {
    MaximumValue: __expectNumber(output.MaximumValue),
    MinimumValue: __expectNumber(output.MinimumValue),
    NumberOfDistinctValues: __expectNumber(output.NumberOfDistinctValues),
    NumberOfNulls: __expectNumber(output.NumberOfNulls),
  } as any;
};

const deserializeAws_json1_1MappingEntry = (output: any, context: __SerdeContext): MappingEntry => {
  return {
    SourcePath: __expectString(output.SourcePath),
    SourceTable: __expectString(output.SourceTable),
    SourceType: __expectString(output.SourceType),
    TargetPath: __expectString(output.TargetPath),
    TargetTable: __expectString(output.TargetTable),
    TargetType: __expectString(output.TargetType),
  } as any;
};

const deserializeAws_json1_1MappingList = (output: any, context: __SerdeContext): MappingEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1MappingEntry(entry, context);
    });
};

const deserializeAws_json1_1MapValue = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_json1_1MatchCriteria = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1MetadataInfo = (output: any, context: __SerdeContext): MetadataInfo => {
  return {
    CreatedTime: __expectString(output.CreatedTime),
    MetadataValue: __expectString(output.MetadataValue),
    OtherMetadataValueList:
      output.OtherMetadataValueList !== undefined && output.OtherMetadataValueList !== null
        ? deserializeAws_json1_1OtherMetadataValueList(output.OtherMetadataValueList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1MetadataInfoMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: MetadataInfo } => {
  return Object.entries(output).reduce((acc: { [key: string]: MetadataInfo }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_json1_1MetadataInfo(value, context),
    };
  }, {});
};

const deserializeAws_json1_1MLTransform = (output: any, context: __SerdeContext): MLTransform => {
  return {
    CreatedOn:
      output.CreatedOn !== undefined && output.CreatedOn !== null
        ? new Date(Math.round(output.CreatedOn * 1000))
        : undefined,
    Description: __expectString(output.Description),
    EvaluationMetrics:
      output.EvaluationMetrics !== undefined && output.EvaluationMetrics !== null
        ? deserializeAws_json1_1EvaluationMetrics(output.EvaluationMetrics, context)
        : undefined,
    GlueVersion: __expectString(output.GlueVersion),
    InputRecordTables:
      output.InputRecordTables !== undefined && output.InputRecordTables !== null
        ? deserializeAws_json1_1GlueTables(output.InputRecordTables, context)
        : undefined,
    LabelCount: __expectNumber(output.LabelCount),
    LastModifiedOn:
      output.LastModifiedOn !== undefined && output.LastModifiedOn !== null
        ? new Date(Math.round(output.LastModifiedOn * 1000))
        : undefined,
    MaxCapacity: __handleFloat(output.MaxCapacity),
    MaxRetries: __expectNumber(output.MaxRetries),
    Name: __expectString(output.Name),
    NumberOfWorkers: __expectNumber(output.NumberOfWorkers),
    Parameters:
      output.Parameters !== undefined && output.Parameters !== null
        ? deserializeAws_json1_1TransformParameters(output.Parameters, context)
        : undefined,
    Role: __expectString(output.Role),
    Schema:
      output.Schema !== undefined && output.Schema !== null
        ? deserializeAws_json1_1TransformSchema(output.Schema, context)
        : undefined,
    Status: __expectString(output.Status),
    Timeout: __expectNumber(output.Timeout),
    TransformEncryption:
      output.TransformEncryption !== undefined && output.TransformEncryption !== null
        ? deserializeAws_json1_1TransformEncryption(output.TransformEncryption, context)
        : undefined,
    TransformId: __expectString(output.TransformId),
    WorkerType: __expectString(output.WorkerType),
  } as any;
};

const deserializeAws_json1_1MLTransformNotReadyException = (
  output: any,
  context: __SerdeContext
): MLTransformNotReadyException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1MLUserDataEncryption = (output: any, context: __SerdeContext): MLUserDataEncryption => {
  return {
    KmsKeyId: __expectString(output.KmsKeyId),
    MlUserDataEncryptionMode: __expectString(output.MlUserDataEncryptionMode),
  } as any;
};

const deserializeAws_json1_1MongoDBTarget = (output: any, context: __SerdeContext): MongoDBTarget => {
  return {
    ConnectionName: __expectString(output.ConnectionName),
    Path: __expectString(output.Path),
    ScanAll: __expectBoolean(output.ScanAll),
  } as any;
};

const deserializeAws_json1_1MongoDBTargetList = (output: any, context: __SerdeContext): MongoDBTarget[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1MongoDBTarget(entry, context);
    });
};

const deserializeAws_json1_1NameStringList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1Node = (output: any, context: __SerdeContext): Node => {
  return {
    CrawlerDetails:
      output.CrawlerDetails !== undefined && output.CrawlerDetails !== null
        ? deserializeAws_json1_1CrawlerNodeDetails(output.CrawlerDetails, context)
        : undefined,
    JobDetails:
      output.JobDetails !== undefined && output.JobDetails !== null
        ? deserializeAws_json1_1JobNodeDetails(output.JobDetails, context)
        : undefined,
    Name: __expectString(output.Name),
    TriggerDetails:
      output.TriggerDetails !== undefined && output.TriggerDetails !== null
        ? deserializeAws_json1_1TriggerNodeDetails(output.TriggerDetails, context)
        : undefined,
    Type: __expectString(output.Type),
    UniqueId: __expectString(output.UniqueId),
  } as any;
};

const deserializeAws_json1_1NodeIdList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1NodeList = (output: any, context: __SerdeContext): Node[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Node(entry, context);
    });
};

const deserializeAws_json1_1NoScheduleException = (output: any, context: __SerdeContext): NoScheduleException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1NotificationProperty = (output: any, context: __SerdeContext): NotificationProperty => {
  return {
    NotifyDelayAfter: __expectNumber(output.NotifyDelayAfter),
  } as any;
};

const deserializeAws_json1_1OperationTimeoutException = (
  output: any,
  context: __SerdeContext
): OperationTimeoutException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1OrchestrationStringList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1Order = (output: any, context: __SerdeContext): Order => {
  return {
    Column: __expectString(output.Column),
    SortOrder: __expectNumber(output.SortOrder),
  } as any;
};

const deserializeAws_json1_1OrderList = (output: any, context: __SerdeContext): Order[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Order(entry, context);
    });
};

const deserializeAws_json1_1OtherMetadataValueList = (
  output: any,
  context: __SerdeContext
): OtherMetadataValueListItem[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1OtherMetadataValueListItem(entry, context);
    });
};

const deserializeAws_json1_1OtherMetadataValueListItem = (
  output: any,
  context: __SerdeContext
): OtherMetadataValueListItem => {
  return {
    CreatedTime: __expectString(output.CreatedTime),
    MetadataValue: __expectString(output.MetadataValue),
  } as any;
};

const deserializeAws_json1_1ParametersMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_json1_1Partition = (output: any, context: __SerdeContext): Partition => {
  return {
    CatalogId: __expectString(output.CatalogId),
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    DatabaseName: __expectString(output.DatabaseName),
    LastAccessTime:
      output.LastAccessTime !== undefined && output.LastAccessTime !== null
        ? new Date(Math.round(output.LastAccessTime * 1000))
        : undefined,
    LastAnalyzedTime:
      output.LastAnalyzedTime !== undefined && output.LastAnalyzedTime !== null
        ? new Date(Math.round(output.LastAnalyzedTime * 1000))
        : undefined,
    Parameters:
      output.Parameters !== undefined && output.Parameters !== null
        ? deserializeAws_json1_1ParametersMap(output.Parameters, context)
        : undefined,
    StorageDescriptor:
      output.StorageDescriptor !== undefined && output.StorageDescriptor !== null
        ? deserializeAws_json1_1StorageDescriptor(output.StorageDescriptor, context)
        : undefined,
    TableName: __expectString(output.TableName),
    Values:
      output.Values !== undefined && output.Values !== null
        ? deserializeAws_json1_1ValueStringList(output.Values, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1PartitionError = (output: any, context: __SerdeContext): PartitionError => {
  return {
    ErrorDetail:
      output.ErrorDetail !== undefined && output.ErrorDetail !== null
        ? deserializeAws_json1_1ErrorDetail(output.ErrorDetail, context)
        : undefined,
    PartitionValues:
      output.PartitionValues !== undefined && output.PartitionValues !== null
        ? deserializeAws_json1_1ValueStringList(output.PartitionValues, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1PartitionErrors = (output: any, context: __SerdeContext): PartitionError[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PartitionError(entry, context);
    });
};

const deserializeAws_json1_1PartitionIndexDescriptor = (
  output: any,
  context: __SerdeContext
): PartitionIndexDescriptor => {
  return {
    BackfillErrors:
      output.BackfillErrors !== undefined && output.BackfillErrors !== null
        ? deserializeAws_json1_1BackfillErrors(output.BackfillErrors, context)
        : undefined,
    IndexName: __expectString(output.IndexName),
    IndexStatus: __expectString(output.IndexStatus),
    Keys:
      output.Keys !== undefined && output.Keys !== null
        ? deserializeAws_json1_1KeySchemaElementList(output.Keys, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1PartitionIndexDescriptorList = (
  output: any,
  context: __SerdeContext
): PartitionIndexDescriptor[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PartitionIndexDescriptor(entry, context);
    });
};

const deserializeAws_json1_1PartitionList = (output: any, context: __SerdeContext): Partition[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Partition(entry, context);
    });
};

const deserializeAws_json1_1PartitionValueList = (output: any, context: __SerdeContext): PartitionValueList => {
  return {
    Values:
      output.Values !== undefined && output.Values !== null
        ? deserializeAws_json1_1ValueStringList(output.Values, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1PathList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1PermissionList = (output: any, context: __SerdeContext): (Permission | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1PhysicalConnectionRequirements = (
  output: any,
  context: __SerdeContext
): PhysicalConnectionRequirements => {
  return {
    AvailabilityZone: __expectString(output.AvailabilityZone),
    SecurityGroupIdList:
      output.SecurityGroupIdList !== undefined && output.SecurityGroupIdList !== null
        ? deserializeAws_json1_1SecurityGroupIdList(output.SecurityGroupIdList, context)
        : undefined,
    SubnetId: __expectString(output.SubnetId),
  } as any;
};

const deserializeAws_json1_1Predecessor = (output: any, context: __SerdeContext): Predecessor => {
  return {
    JobName: __expectString(output.JobName),
    RunId: __expectString(output.RunId),
  } as any;
};

const deserializeAws_json1_1PredecessorList = (output: any, context: __SerdeContext): Predecessor[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Predecessor(entry, context);
    });
};

const deserializeAws_json1_1Predicate = (output: any, context: __SerdeContext): Predicate => {
  return {
    Conditions:
      output.Conditions !== undefined && output.Conditions !== null
        ? deserializeAws_json1_1ConditionList(output.Conditions, context)
        : undefined,
    Logical: __expectString(output.Logical),
  } as any;
};

const deserializeAws_json1_1PrincipalPermissions = (output: any, context: __SerdeContext): PrincipalPermissions => {
  return {
    Permissions:
      output.Permissions !== undefined && output.Permissions !== null
        ? deserializeAws_json1_1PermissionList(output.Permissions, context)
        : undefined,
    Principal:
      output.Principal !== undefined && output.Principal !== null
        ? deserializeAws_json1_1DataLakePrincipal(output.Principal, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1PrincipalPermissionsList = (
  output: any,
  context: __SerdeContext
): PrincipalPermissions[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PrincipalPermissions(entry, context);
    });
};

const deserializeAws_json1_1PublicKeysList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1PutDataCatalogEncryptionSettingsResponse = (
  output: any,
  context: __SerdeContext
): PutDataCatalogEncryptionSettingsResponse => {
  return {} as any;
};

const deserializeAws_json1_1PutResourcePolicyResponse = (
  output: any,
  context: __SerdeContext
): PutResourcePolicyResponse => {
  return {
    PolicyHash: __expectString(output.PolicyHash),
  } as any;
};

const deserializeAws_json1_1PutSchemaVersionMetadataResponse = (
  output: any,
  context: __SerdeContext
): PutSchemaVersionMetadataResponse => {
  return {
    LatestVersion: __expectBoolean(output.LatestVersion),
    MetadataKey: __expectString(output.MetadataKey),
    MetadataValue: __expectString(output.MetadataValue),
    RegistryName: __expectString(output.RegistryName),
    SchemaArn: __expectString(output.SchemaArn),
    SchemaName: __expectString(output.SchemaName),
    SchemaVersionId: __expectString(output.SchemaVersionId),
    VersionNumber: __expectNumber(output.VersionNumber),
  } as any;
};

const deserializeAws_json1_1PutWorkflowRunPropertiesResponse = (
  output: any,
  context: __SerdeContext
): PutWorkflowRunPropertiesResponse => {
  return {} as any;
};

const deserializeAws_json1_1QuerySchemaVersionMetadataResponse = (
  output: any,
  context: __SerdeContext
): QuerySchemaVersionMetadataResponse => {
  return {
    MetadataInfoMap:
      output.MetadataInfoMap !== undefined && output.MetadataInfoMap !== null
        ? deserializeAws_json1_1MetadataInfoMap(output.MetadataInfoMap, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
    SchemaVersionId: __expectString(output.SchemaVersionId),
  } as any;
};

const deserializeAws_json1_1RecrawlPolicy = (output: any, context: __SerdeContext): RecrawlPolicy => {
  return {
    RecrawlBehavior: __expectString(output.RecrawlBehavior),
  } as any;
};

const deserializeAws_json1_1RegisterSchemaVersionResponse = (
  output: any,
  context: __SerdeContext
): RegisterSchemaVersionResponse => {
  return {
    SchemaVersionId: __expectString(output.SchemaVersionId),
    Status: __expectString(output.Status),
    VersionNumber: __expectNumber(output.VersionNumber),
  } as any;
};

const deserializeAws_json1_1RegistryListDefinition = (output: any, context: __SerdeContext): RegistryListItem[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RegistryListItem(entry, context);
    });
};

const deserializeAws_json1_1RegistryListItem = (output: any, context: __SerdeContext): RegistryListItem => {
  return {
    CreatedTime: __expectString(output.CreatedTime),
    Description: __expectString(output.Description),
    RegistryArn: __expectString(output.RegistryArn),
    RegistryName: __expectString(output.RegistryName),
    Status: __expectString(output.Status),
    UpdatedTime: __expectString(output.UpdatedTime),
  } as any;
};

const deserializeAws_json1_1RemoveSchemaVersionMetadataResponse = (
  output: any,
  context: __SerdeContext
): RemoveSchemaVersionMetadataResponse => {
  return {
    LatestVersion: __expectBoolean(output.LatestVersion),
    MetadataKey: __expectString(output.MetadataKey),
    MetadataValue: __expectString(output.MetadataValue),
    RegistryName: __expectString(output.RegistryName),
    SchemaArn: __expectString(output.SchemaArn),
    SchemaName: __expectString(output.SchemaName),
    SchemaVersionId: __expectString(output.SchemaVersionId),
    VersionNumber: __expectNumber(output.VersionNumber),
  } as any;
};

const deserializeAws_json1_1ResetJobBookmarkResponse = (
  output: any,
  context: __SerdeContext
): ResetJobBookmarkResponse => {
  return {
    JobBookmarkEntry:
      output.JobBookmarkEntry !== undefined && output.JobBookmarkEntry !== null
        ? deserializeAws_json1_1JobBookmarkEntry(output.JobBookmarkEntry, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceNumberLimitExceededException = (
  output: any,
  context: __SerdeContext
): ResourceNumberLimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ResourceUri = (output: any, context: __SerdeContext): ResourceUri => {
  return {
    ResourceType: __expectString(output.ResourceType),
    Uri: __expectString(output.Uri),
  } as any;
};

const deserializeAws_json1_1ResourceUriList = (output: any, context: __SerdeContext): ResourceUri[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ResourceUri(entry, context);
    });
};

const deserializeAws_json1_1ResumeWorkflowRunResponse = (
  output: any,
  context: __SerdeContext
): ResumeWorkflowRunResponse => {
  return {
    NodeIds:
      output.NodeIds !== undefined && output.NodeIds !== null
        ? deserializeAws_json1_1NodeIdList(output.NodeIds, context)
        : undefined,
    RunId: __expectString(output.RunId),
  } as any;
};

const deserializeAws_json1_1S3Encryption = (output: any, context: __SerdeContext): S3Encryption => {
  return {
    KmsKeyArn: __expectString(output.KmsKeyArn),
    S3EncryptionMode: __expectString(output.S3EncryptionMode),
  } as any;
};

const deserializeAws_json1_1S3EncryptionList = (output: any, context: __SerdeContext): S3Encryption[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1S3Encryption(entry, context);
    });
};

const deserializeAws_json1_1S3Target = (output: any, context: __SerdeContext): S3Target => {
  return {
    ConnectionName: __expectString(output.ConnectionName),
    Exclusions:
      output.Exclusions !== undefined && output.Exclusions !== null
        ? deserializeAws_json1_1PathList(output.Exclusions, context)
        : undefined,
    Path: __expectString(output.Path),
    SampleSize: __expectNumber(output.SampleSize),
  } as any;
};

const deserializeAws_json1_1S3TargetList = (output: any, context: __SerdeContext): S3Target[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1S3Target(entry, context);
    });
};

const deserializeAws_json1_1Schedule = (output: any, context: __SerdeContext): Schedule => {
  return {
    ScheduleExpression: __expectString(output.ScheduleExpression),
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_json1_1SchedulerNotRunningException = (
  output: any,
  context: __SerdeContext
): SchedulerNotRunningException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1SchedulerRunningException = (
  output: any,
  context: __SerdeContext
): SchedulerRunningException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1SchedulerTransitioningException = (
  output: any,
  context: __SerdeContext
): SchedulerTransitioningException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1SchemaChangePolicy = (output: any, context: __SerdeContext): SchemaChangePolicy => {
  return {
    DeleteBehavior: __expectString(output.DeleteBehavior),
    UpdateBehavior: __expectString(output.UpdateBehavior),
  } as any;
};

const deserializeAws_json1_1SchemaColumn = (output: any, context: __SerdeContext): SchemaColumn => {
  return {
    DataType: __expectString(output.DataType),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1SchemaId = (output: any, context: __SerdeContext): SchemaId => {
  return {
    RegistryName: __expectString(output.RegistryName),
    SchemaArn: __expectString(output.SchemaArn),
    SchemaName: __expectString(output.SchemaName),
  } as any;
};

const deserializeAws_json1_1SchemaListDefinition = (output: any, context: __SerdeContext): SchemaListItem[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SchemaListItem(entry, context);
    });
};

const deserializeAws_json1_1SchemaListItem = (output: any, context: __SerdeContext): SchemaListItem => {
  return {
    CreatedTime: __expectString(output.CreatedTime),
    Description: __expectString(output.Description),
    RegistryName: __expectString(output.RegistryName),
    SchemaArn: __expectString(output.SchemaArn),
    SchemaName: __expectString(output.SchemaName),
    SchemaStatus: __expectString(output.SchemaStatus),
    UpdatedTime: __expectString(output.UpdatedTime),
  } as any;
};

const deserializeAws_json1_1SchemaReference = (output: any, context: __SerdeContext): SchemaReference => {
  return {
    SchemaId:
      output.SchemaId !== undefined && output.SchemaId !== null
        ? deserializeAws_json1_1SchemaId(output.SchemaId, context)
        : undefined,
    SchemaVersionId: __expectString(output.SchemaVersionId),
    SchemaVersionNumber: __expectNumber(output.SchemaVersionNumber),
  } as any;
};

const deserializeAws_json1_1SchemaVersionErrorItem = (output: any, context: __SerdeContext): SchemaVersionErrorItem => {
  return {
    ErrorDetails:
      output.ErrorDetails !== undefined && output.ErrorDetails !== null
        ? deserializeAws_json1_1ErrorDetails(output.ErrorDetails, context)
        : undefined,
    VersionNumber: __expectNumber(output.VersionNumber),
  } as any;
};

const deserializeAws_json1_1SchemaVersionErrorList = (
  output: any,
  context: __SerdeContext
): SchemaVersionErrorItem[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SchemaVersionErrorItem(entry, context);
    });
};

const deserializeAws_json1_1SchemaVersionList = (output: any, context: __SerdeContext): SchemaVersionListItem[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SchemaVersionListItem(entry, context);
    });
};

const deserializeAws_json1_1SchemaVersionListItem = (output: any, context: __SerdeContext): SchemaVersionListItem => {
  return {
    CreatedTime: __expectString(output.CreatedTime),
    SchemaArn: __expectString(output.SchemaArn),
    SchemaVersionId: __expectString(output.SchemaVersionId),
    Status: __expectString(output.Status),
    VersionNumber: __expectNumber(output.VersionNumber),
  } as any;
};

const deserializeAws_json1_1SearchTablesResponse = (output: any, context: __SerdeContext): SearchTablesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    TableList:
      output.TableList !== undefined && output.TableList !== null
        ? deserializeAws_json1_1TableList(output.TableList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SecurityConfiguration = (output: any, context: __SerdeContext): SecurityConfiguration => {
  return {
    CreatedTimeStamp:
      output.CreatedTimeStamp !== undefined && output.CreatedTimeStamp !== null
        ? new Date(Math.round(output.CreatedTimeStamp * 1000))
        : undefined,
    EncryptionConfiguration:
      output.EncryptionConfiguration !== undefined && output.EncryptionConfiguration !== null
        ? deserializeAws_json1_1EncryptionConfiguration(output.EncryptionConfiguration, context)
        : undefined,
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1SecurityConfigurationList = (
  output: any,
  context: __SerdeContext
): SecurityConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SecurityConfiguration(entry, context);
    });
};

const deserializeAws_json1_1SecurityGroupIdList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1SerDeInfo = (output: any, context: __SerdeContext): SerDeInfo => {
  return {
    Name: __expectString(output.Name),
    Parameters:
      output.Parameters !== undefined && output.Parameters !== null
        ? deserializeAws_json1_1ParametersMap(output.Parameters, context)
        : undefined,
    SerializationLibrary: __expectString(output.SerializationLibrary),
  } as any;
};

const deserializeAws_json1_1SkewedInfo = (output: any, context: __SerdeContext): SkewedInfo => {
  return {
    SkewedColumnNames:
      output.SkewedColumnNames !== undefined && output.SkewedColumnNames !== null
        ? deserializeAws_json1_1NameStringList(output.SkewedColumnNames, context)
        : undefined,
    SkewedColumnValueLocationMaps:
      output.SkewedColumnValueLocationMaps !== undefined && output.SkewedColumnValueLocationMaps !== null
        ? deserializeAws_json1_1LocationMap(output.SkewedColumnValueLocationMaps, context)
        : undefined,
    SkewedColumnValues:
      output.SkewedColumnValues !== undefined && output.SkewedColumnValues !== null
        ? deserializeAws_json1_1ColumnValueStringList(output.SkewedColumnValues, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1StartCrawlerResponse = (output: any, context: __SerdeContext): StartCrawlerResponse => {
  return {} as any;
};

const deserializeAws_json1_1StartCrawlerScheduleResponse = (
  output: any,
  context: __SerdeContext
): StartCrawlerScheduleResponse => {
  return {} as any;
};

const deserializeAws_json1_1StartExportLabelsTaskRunResponse = (
  output: any,
  context: __SerdeContext
): StartExportLabelsTaskRunResponse => {
  return {
    TaskRunId: __expectString(output.TaskRunId),
  } as any;
};

const deserializeAws_json1_1StartImportLabelsTaskRunResponse = (
  output: any,
  context: __SerdeContext
): StartImportLabelsTaskRunResponse => {
  return {
    TaskRunId: __expectString(output.TaskRunId),
  } as any;
};

const deserializeAws_json1_1StartingEventBatchCondition = (
  output: any,
  context: __SerdeContext
): StartingEventBatchCondition => {
  return {
    BatchSize: __expectNumber(output.BatchSize),
    BatchWindow: __expectNumber(output.BatchWindow),
  } as any;
};

const deserializeAws_json1_1StartJobRunResponse = (output: any, context: __SerdeContext): StartJobRunResponse => {
  return {
    JobRunId: __expectString(output.JobRunId),
  } as any;
};

const deserializeAws_json1_1StartMLEvaluationTaskRunResponse = (
  output: any,
  context: __SerdeContext
): StartMLEvaluationTaskRunResponse => {
  return {
    TaskRunId: __expectString(output.TaskRunId),
  } as any;
};

const deserializeAws_json1_1StartMLLabelingSetGenerationTaskRunResponse = (
  output: any,
  context: __SerdeContext
): StartMLLabelingSetGenerationTaskRunResponse => {
  return {
    TaskRunId: __expectString(output.TaskRunId),
  } as any;
};

const deserializeAws_json1_1StartTriggerResponse = (output: any, context: __SerdeContext): StartTriggerResponse => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1StartWorkflowRunResponse = (
  output: any,
  context: __SerdeContext
): StartWorkflowRunResponse => {
  return {
    RunId: __expectString(output.RunId),
  } as any;
};

const deserializeAws_json1_1StopCrawlerResponse = (output: any, context: __SerdeContext): StopCrawlerResponse => {
  return {} as any;
};

const deserializeAws_json1_1StopCrawlerScheduleResponse = (
  output: any,
  context: __SerdeContext
): StopCrawlerScheduleResponse => {
  return {} as any;
};

const deserializeAws_json1_1StopTriggerResponse = (output: any, context: __SerdeContext): StopTriggerResponse => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1StopWorkflowRunResponse = (
  output: any,
  context: __SerdeContext
): StopWorkflowRunResponse => {
  return {} as any;
};

const deserializeAws_json1_1StorageDescriptor = (output: any, context: __SerdeContext): StorageDescriptor => {
  return {
    BucketColumns:
      output.BucketColumns !== undefined && output.BucketColumns !== null
        ? deserializeAws_json1_1NameStringList(output.BucketColumns, context)
        : undefined,
    Columns:
      output.Columns !== undefined && output.Columns !== null
        ? deserializeAws_json1_1ColumnList(output.Columns, context)
        : undefined,
    Compressed: __expectBoolean(output.Compressed),
    InputFormat: __expectString(output.InputFormat),
    Location: __expectString(output.Location),
    NumberOfBuckets: __expectNumber(output.NumberOfBuckets),
    OutputFormat: __expectString(output.OutputFormat),
    Parameters:
      output.Parameters !== undefined && output.Parameters !== null
        ? deserializeAws_json1_1ParametersMap(output.Parameters, context)
        : undefined,
    SchemaReference:
      output.SchemaReference !== undefined && output.SchemaReference !== null
        ? deserializeAws_json1_1SchemaReference(output.SchemaReference, context)
        : undefined,
    SerdeInfo:
      output.SerdeInfo !== undefined && output.SerdeInfo !== null
        ? deserializeAws_json1_1SerDeInfo(output.SerdeInfo, context)
        : undefined,
    SkewedInfo:
      output.SkewedInfo !== undefined && output.SkewedInfo !== null
        ? deserializeAws_json1_1SkewedInfo(output.SkewedInfo, context)
        : undefined,
    SortColumns:
      output.SortColumns !== undefined && output.SortColumns !== null
        ? deserializeAws_json1_1OrderList(output.SortColumns, context)
        : undefined,
    StoredAsSubDirectories: __expectBoolean(output.StoredAsSubDirectories),
  } as any;
};

const deserializeAws_json1_1StringColumnStatisticsData = (
  output: any,
  context: __SerdeContext
): StringColumnStatisticsData => {
  return {
    AverageLength: __handleFloat(output.AverageLength),
    MaximumLength: __expectNumber(output.MaximumLength),
    NumberOfDistinctValues: __expectNumber(output.NumberOfDistinctValues),
    NumberOfNulls: __expectNumber(output.NumberOfNulls),
  } as any;
};

const deserializeAws_json1_1StringList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1Table = (output: any, context: __SerdeContext): Table => {
  return {
    CatalogId: __expectString(output.CatalogId),
    CreateTime:
      output.CreateTime !== undefined && output.CreateTime !== null
        ? new Date(Math.round(output.CreateTime * 1000))
        : undefined,
    CreatedBy: __expectString(output.CreatedBy),
    DatabaseName: __expectString(output.DatabaseName),
    Description: __expectString(output.Description),
    IsRegisteredWithLakeFormation: __expectBoolean(output.IsRegisteredWithLakeFormation),
    LastAccessTime:
      output.LastAccessTime !== undefined && output.LastAccessTime !== null
        ? new Date(Math.round(output.LastAccessTime * 1000))
        : undefined,
    LastAnalyzedTime:
      output.LastAnalyzedTime !== undefined && output.LastAnalyzedTime !== null
        ? new Date(Math.round(output.LastAnalyzedTime * 1000))
        : undefined,
    Name: __expectString(output.Name),
    Owner: __expectString(output.Owner),
    Parameters:
      output.Parameters !== undefined && output.Parameters !== null
        ? deserializeAws_json1_1ParametersMap(output.Parameters, context)
        : undefined,
    PartitionKeys:
      output.PartitionKeys !== undefined && output.PartitionKeys !== null
        ? deserializeAws_json1_1ColumnList(output.PartitionKeys, context)
        : undefined,
    Retention: __expectNumber(output.Retention),
    StorageDescriptor:
      output.StorageDescriptor !== undefined && output.StorageDescriptor !== null
        ? deserializeAws_json1_1StorageDescriptor(output.StorageDescriptor, context)
        : undefined,
    TableType: __expectString(output.TableType),
    TargetTable:
      output.TargetTable !== undefined && output.TargetTable !== null
        ? deserializeAws_json1_1TableIdentifier(output.TargetTable, context)
        : undefined,
    UpdateTime:
      output.UpdateTime !== undefined && output.UpdateTime !== null
        ? new Date(Math.round(output.UpdateTime * 1000))
        : undefined,
    ViewExpandedText: __expectString(output.ViewExpandedText),
    ViewOriginalText: __expectString(output.ViewOriginalText),
  } as any;
};

const deserializeAws_json1_1TableError = (output: any, context: __SerdeContext): TableError => {
  return {
    ErrorDetail:
      output.ErrorDetail !== undefined && output.ErrorDetail !== null
        ? deserializeAws_json1_1ErrorDetail(output.ErrorDetail, context)
        : undefined,
    TableName: __expectString(output.TableName),
  } as any;
};

const deserializeAws_json1_1TableErrors = (output: any, context: __SerdeContext): TableError[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TableError(entry, context);
    });
};

const deserializeAws_json1_1TableIdentifier = (output: any, context: __SerdeContext): TableIdentifier => {
  return {
    CatalogId: __expectString(output.CatalogId),
    DatabaseName: __expectString(output.DatabaseName),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1TableList = (output: any, context: __SerdeContext): Table[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Table(entry, context);
    });
};

const deserializeAws_json1_1TableVersion = (output: any, context: __SerdeContext): TableVersion => {
  return {
    Table:
      output.Table !== undefined && output.Table !== null
        ? deserializeAws_json1_1Table(output.Table, context)
        : undefined,
    VersionId: __expectString(output.VersionId),
  } as any;
};

const deserializeAws_json1_1TableVersionError = (output: any, context: __SerdeContext): TableVersionError => {
  return {
    ErrorDetail:
      output.ErrorDetail !== undefined && output.ErrorDetail !== null
        ? deserializeAws_json1_1ErrorDetail(output.ErrorDetail, context)
        : undefined,
    TableName: __expectString(output.TableName),
    VersionId: __expectString(output.VersionId),
  } as any;
};

const deserializeAws_json1_1TableVersionErrors = (output: any, context: __SerdeContext): TableVersionError[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TableVersionError(entry, context);
    });
};

const deserializeAws_json1_1TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1TagsMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_json1_1TaskRun = (output: any, context: __SerdeContext): TaskRun => {
  return {
    CompletedOn:
      output.CompletedOn !== undefined && output.CompletedOn !== null
        ? new Date(Math.round(output.CompletedOn * 1000))
        : undefined,
    ErrorString: __expectString(output.ErrorString),
    ExecutionTime: __expectNumber(output.ExecutionTime),
    LastModifiedOn:
      output.LastModifiedOn !== undefined && output.LastModifiedOn !== null
        ? new Date(Math.round(output.LastModifiedOn * 1000))
        : undefined,
    LogGroupName: __expectString(output.LogGroupName),
    Properties:
      output.Properties !== undefined && output.Properties !== null
        ? deserializeAws_json1_1TaskRunProperties(output.Properties, context)
        : undefined,
    StartedOn:
      output.StartedOn !== undefined && output.StartedOn !== null
        ? new Date(Math.round(output.StartedOn * 1000))
        : undefined,
    Status: __expectString(output.Status),
    TaskRunId: __expectString(output.TaskRunId),
    TransformId: __expectString(output.TransformId),
  } as any;
};

const deserializeAws_json1_1TaskRunList = (output: any, context: __SerdeContext): TaskRun[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TaskRun(entry, context);
    });
};

const deserializeAws_json1_1TaskRunProperties = (output: any, context: __SerdeContext): TaskRunProperties => {
  return {
    ExportLabelsTaskRunProperties:
      output.ExportLabelsTaskRunProperties !== undefined && output.ExportLabelsTaskRunProperties !== null
        ? deserializeAws_json1_1ExportLabelsTaskRunProperties(output.ExportLabelsTaskRunProperties, context)
        : undefined,
    FindMatchesTaskRunProperties:
      output.FindMatchesTaskRunProperties !== undefined && output.FindMatchesTaskRunProperties !== null
        ? deserializeAws_json1_1FindMatchesTaskRunProperties(output.FindMatchesTaskRunProperties, context)
        : undefined,
    ImportLabelsTaskRunProperties:
      output.ImportLabelsTaskRunProperties !== undefined && output.ImportLabelsTaskRunProperties !== null
        ? deserializeAws_json1_1ImportLabelsTaskRunProperties(output.ImportLabelsTaskRunProperties, context)
        : undefined,
    LabelingSetGenerationTaskRunProperties:
      output.LabelingSetGenerationTaskRunProperties !== undefined &&
      output.LabelingSetGenerationTaskRunProperties !== null
        ? deserializeAws_json1_1LabelingSetGenerationTaskRunProperties(
            output.LabelingSetGenerationTaskRunProperties,
            context
          )
        : undefined,
    TaskType: __expectString(output.TaskType),
  } as any;
};

const deserializeAws_json1_1TransformEncryption = (output: any, context: __SerdeContext): TransformEncryption => {
  return {
    MlUserDataEncryption:
      output.MlUserDataEncryption !== undefined && output.MlUserDataEncryption !== null
        ? deserializeAws_json1_1MLUserDataEncryption(output.MlUserDataEncryption, context)
        : undefined,
    TaskRunSecurityConfigurationName: __expectString(output.TaskRunSecurityConfigurationName),
  } as any;
};

const deserializeAws_json1_1TransformIdList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1TransformList = (output: any, context: __SerdeContext): MLTransform[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1MLTransform(entry, context);
    });
};

const deserializeAws_json1_1TransformParameters = (output: any, context: __SerdeContext): TransformParameters => {
  return {
    FindMatchesParameters:
      output.FindMatchesParameters !== undefined && output.FindMatchesParameters !== null
        ? deserializeAws_json1_1FindMatchesParameters(output.FindMatchesParameters, context)
        : undefined,
    TransformType: __expectString(output.TransformType),
  } as any;
};

const deserializeAws_json1_1TransformSchema = (output: any, context: __SerdeContext): SchemaColumn[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SchemaColumn(entry, context);
    });
};

const deserializeAws_json1_1Trigger = (output: any, context: __SerdeContext): Trigger => {
  return {
    Actions:
      output.Actions !== undefined && output.Actions !== null
        ? deserializeAws_json1_1ActionList(output.Actions, context)
        : undefined,
    Description: __expectString(output.Description),
    EventBatchingCondition:
      output.EventBatchingCondition !== undefined && output.EventBatchingCondition !== null
        ? deserializeAws_json1_1EventBatchingCondition(output.EventBatchingCondition, context)
        : undefined,
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    Predicate:
      output.Predicate !== undefined && output.Predicate !== null
        ? deserializeAws_json1_1Predicate(output.Predicate, context)
        : undefined,
    Schedule: __expectString(output.Schedule),
    State: __expectString(output.State),
    Type: __expectString(output.Type),
    WorkflowName: __expectString(output.WorkflowName),
  } as any;
};

const deserializeAws_json1_1TriggerList = (output: any, context: __SerdeContext): Trigger[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Trigger(entry, context);
    });
};

const deserializeAws_json1_1TriggerNameList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1TriggerNodeDetails = (output: any, context: __SerdeContext): TriggerNodeDetails => {
  return {
    Trigger:
      output.Trigger !== undefined && output.Trigger !== null
        ? deserializeAws_json1_1Trigger(output.Trigger, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateClassifierResponse = (
  output: any,
  context: __SerdeContext
): UpdateClassifierResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateColumnStatisticsForPartitionResponse = (
  output: any,
  context: __SerdeContext
): UpdateColumnStatisticsForPartitionResponse => {
  return {
    Errors:
      output.Errors !== undefined && output.Errors !== null
        ? deserializeAws_json1_1ColumnStatisticsErrors(output.Errors, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateColumnStatisticsForTableResponse = (
  output: any,
  context: __SerdeContext
): UpdateColumnStatisticsForTableResponse => {
  return {
    Errors:
      output.Errors !== undefined && output.Errors !== null
        ? deserializeAws_json1_1ColumnStatisticsErrors(output.Errors, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateConnectionResponse = (
  output: any,
  context: __SerdeContext
): UpdateConnectionResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateCrawlerResponse = (output: any, context: __SerdeContext): UpdateCrawlerResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateCrawlerScheduleResponse = (
  output: any,
  context: __SerdeContext
): UpdateCrawlerScheduleResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateDatabaseResponse = (output: any, context: __SerdeContext): UpdateDatabaseResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateDevEndpointResponse = (
  output: any,
  context: __SerdeContext
): UpdateDevEndpointResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateJobResponse = (output: any, context: __SerdeContext): UpdateJobResponse => {
  return {
    JobName: __expectString(output.JobName),
  } as any;
};

const deserializeAws_json1_1UpdateMLTransformResponse = (
  output: any,
  context: __SerdeContext
): UpdateMLTransformResponse => {
  return {
    TransformId: __expectString(output.TransformId),
  } as any;
};

const deserializeAws_json1_1UpdatePartitionResponse = (
  output: any,
  context: __SerdeContext
): UpdatePartitionResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateRegistryResponse = (output: any, context: __SerdeContext): UpdateRegistryResponse => {
  return {
    RegistryArn: __expectString(output.RegistryArn),
    RegistryName: __expectString(output.RegistryName),
  } as any;
};

const deserializeAws_json1_1UpdateSchemaResponse = (output: any, context: __SerdeContext): UpdateSchemaResponse => {
  return {
    RegistryName: __expectString(output.RegistryName),
    SchemaArn: __expectString(output.SchemaArn),
    SchemaName: __expectString(output.SchemaName),
  } as any;
};

const deserializeAws_json1_1UpdateTableResponse = (output: any, context: __SerdeContext): UpdateTableResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateTriggerResponse = (output: any, context: __SerdeContext): UpdateTriggerResponse => {
  return {
    Trigger:
      output.Trigger !== undefined && output.Trigger !== null
        ? deserializeAws_json1_1Trigger(output.Trigger, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateUserDefinedFunctionResponse = (
  output: any,
  context: __SerdeContext
): UpdateUserDefinedFunctionResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateWorkflowResponse = (output: any, context: __SerdeContext): UpdateWorkflowResponse => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1UserDefinedFunction = (output: any, context: __SerdeContext): UserDefinedFunction => {
  return {
    CatalogId: __expectString(output.CatalogId),
    ClassName: __expectString(output.ClassName),
    CreateTime:
      output.CreateTime !== undefined && output.CreateTime !== null
        ? new Date(Math.round(output.CreateTime * 1000))
        : undefined,
    DatabaseName: __expectString(output.DatabaseName),
    FunctionName: __expectString(output.FunctionName),
    OwnerName: __expectString(output.OwnerName),
    OwnerType: __expectString(output.OwnerType),
    ResourceUris:
      output.ResourceUris !== undefined && output.ResourceUris !== null
        ? deserializeAws_json1_1ResourceUriList(output.ResourceUris, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UserDefinedFunctionList = (output: any, context: __SerdeContext): UserDefinedFunction[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1UserDefinedFunction(entry, context);
    });
};

const deserializeAws_json1_1ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ValueStringList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1VersionMismatchException = (
  output: any,
  context: __SerdeContext
): VersionMismatchException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1Workflow = (output: any, context: __SerdeContext): Workflow => {
  return {
    CreatedOn:
      output.CreatedOn !== undefined && output.CreatedOn !== null
        ? new Date(Math.round(output.CreatedOn * 1000))
        : undefined,
    DefaultRunProperties:
      output.DefaultRunProperties !== undefined && output.DefaultRunProperties !== null
        ? deserializeAws_json1_1WorkflowRunProperties(output.DefaultRunProperties, context)
        : undefined,
    Description: __expectString(output.Description),
    Graph:
      output.Graph !== undefined && output.Graph !== null
        ? deserializeAws_json1_1WorkflowGraph(output.Graph, context)
        : undefined,
    LastModifiedOn:
      output.LastModifiedOn !== undefined && output.LastModifiedOn !== null
        ? new Date(Math.round(output.LastModifiedOn * 1000))
        : undefined,
    LastRun:
      output.LastRun !== undefined && output.LastRun !== null
        ? deserializeAws_json1_1WorkflowRun(output.LastRun, context)
        : undefined,
    MaxConcurrentRuns: __expectNumber(output.MaxConcurrentRuns),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1WorkflowGraph = (output: any, context: __SerdeContext): WorkflowGraph => {
  return {
    Edges:
      output.Edges !== undefined && output.Edges !== null
        ? deserializeAws_json1_1EdgeList(output.Edges, context)
        : undefined,
    Nodes:
      output.Nodes !== undefined && output.Nodes !== null
        ? deserializeAws_json1_1NodeList(output.Nodes, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1WorkflowNames = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1WorkflowRun = (output: any, context: __SerdeContext): WorkflowRun => {
  return {
    CompletedOn:
      output.CompletedOn !== undefined && output.CompletedOn !== null
        ? new Date(Math.round(output.CompletedOn * 1000))
        : undefined,
    ErrorMessage: __expectString(output.ErrorMessage),
    Graph:
      output.Graph !== undefined && output.Graph !== null
        ? deserializeAws_json1_1WorkflowGraph(output.Graph, context)
        : undefined,
    Name: __expectString(output.Name),
    PreviousRunId: __expectString(output.PreviousRunId),
    StartedOn:
      output.StartedOn !== undefined && output.StartedOn !== null
        ? new Date(Math.round(output.StartedOn * 1000))
        : undefined,
    StartingEventBatchCondition:
      output.StartingEventBatchCondition !== undefined && output.StartingEventBatchCondition !== null
        ? deserializeAws_json1_1StartingEventBatchCondition(output.StartingEventBatchCondition, context)
        : undefined,
    Statistics:
      output.Statistics !== undefined && output.Statistics !== null
        ? deserializeAws_json1_1WorkflowRunStatistics(output.Statistics, context)
        : undefined,
    Status: __expectString(output.Status),
    WorkflowRunId: __expectString(output.WorkflowRunId),
    WorkflowRunProperties:
      output.WorkflowRunProperties !== undefined && output.WorkflowRunProperties !== null
        ? deserializeAws_json1_1WorkflowRunProperties(output.WorkflowRunProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1WorkflowRunProperties = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_json1_1WorkflowRuns = (output: any, context: __SerdeContext): WorkflowRun[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1WorkflowRun(entry, context);
    });
};

const deserializeAws_json1_1WorkflowRunStatistics = (output: any, context: __SerdeContext): WorkflowRunStatistics => {
  return {
    FailedActions: __expectNumber(output.FailedActions),
    RunningActions: __expectNumber(output.RunningActions),
    StoppedActions: __expectNumber(output.StoppedActions),
    SucceededActions: __expectNumber(output.SucceededActions),
    TimeoutActions: __expectNumber(output.TimeoutActions),
    TotalActions: __expectNumber(output.TotalActions),
  } as any;
};

const deserializeAws_json1_1Workflows = (output: any, context: __SerdeContext): Workflow[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Workflow(entry, context);
    });
};

const deserializeAws_json1_1XMLClassifier = (output: any, context: __SerdeContext): XMLClassifier => {
  return {
    Classification: __expectString(output.Classification),
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    LastUpdated:
      output.LastUpdated !== undefined && output.LastUpdated !== null
        ? new Date(Math.round(output.LastUpdated * 1000))
        : undefined,
    Name: __expectString(output.Name),
    RowTag: __expectString(output.RowTag),
    Version: __expectNumber(output.Version),
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path,
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

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
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

  return "";
};
