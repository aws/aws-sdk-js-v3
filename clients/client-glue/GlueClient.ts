import {
  BatchCreatePartitionCommandInput,
  BatchCreatePartitionCommandOutput,
} from "./commands/BatchCreatePartitionCommand";
import {
  BatchDeleteConnectionCommandInput,
  BatchDeleteConnectionCommandOutput,
} from "./commands/BatchDeleteConnectionCommand";
import {
  BatchDeletePartitionCommandInput,
  BatchDeletePartitionCommandOutput,
} from "./commands/BatchDeletePartitionCommand";
import { BatchDeleteTableCommandInput, BatchDeleteTableCommandOutput } from "./commands/BatchDeleteTableCommand";
import {
  BatchDeleteTableVersionCommandInput,
  BatchDeleteTableVersionCommandOutput,
} from "./commands/BatchDeleteTableVersionCommand";
import { BatchGetBlueprintsCommandInput, BatchGetBlueprintsCommandOutput } from "./commands/BatchGetBlueprintsCommand";
import { BatchGetCrawlersCommandInput, BatchGetCrawlersCommandOutput } from "./commands/BatchGetCrawlersCommand";
import {
  BatchGetDevEndpointsCommandInput,
  BatchGetDevEndpointsCommandOutput,
} from "./commands/BatchGetDevEndpointsCommand";
import { BatchGetJobsCommandInput, BatchGetJobsCommandOutput } from "./commands/BatchGetJobsCommand";
import { BatchGetPartitionCommandInput, BatchGetPartitionCommandOutput } from "./commands/BatchGetPartitionCommand";
import { BatchGetTriggersCommandInput, BatchGetTriggersCommandOutput } from "./commands/BatchGetTriggersCommand";
import { BatchGetWorkflowsCommandInput, BatchGetWorkflowsCommandOutput } from "./commands/BatchGetWorkflowsCommand";
import { BatchStopJobRunCommandInput, BatchStopJobRunCommandOutput } from "./commands/BatchStopJobRunCommand";
import {
  BatchUpdatePartitionCommandInput,
  BatchUpdatePartitionCommandOutput,
} from "./commands/BatchUpdatePartitionCommand";
import { CancelMLTaskRunCommandInput, CancelMLTaskRunCommandOutput } from "./commands/CancelMLTaskRunCommand";
import {
  CheckSchemaVersionValidityCommandInput,
  CheckSchemaVersionValidityCommandOutput,
} from "./commands/CheckSchemaVersionValidityCommand";
import { CreateBlueprintCommandInput, CreateBlueprintCommandOutput } from "./commands/CreateBlueprintCommand";
import { CreateClassifierCommandInput, CreateClassifierCommandOutput } from "./commands/CreateClassifierCommand";
import { CreateConnectionCommandInput, CreateConnectionCommandOutput } from "./commands/CreateConnectionCommand";
import { CreateCrawlerCommandInput, CreateCrawlerCommandOutput } from "./commands/CreateCrawlerCommand";
import { CreateDatabaseCommandInput, CreateDatabaseCommandOutput } from "./commands/CreateDatabaseCommand";
import { CreateDevEndpointCommandInput, CreateDevEndpointCommandOutput } from "./commands/CreateDevEndpointCommand";
import { CreateJobCommandInput, CreateJobCommandOutput } from "./commands/CreateJobCommand";
import { CreateMLTransformCommandInput, CreateMLTransformCommandOutput } from "./commands/CreateMLTransformCommand";
import { CreatePartitionCommandInput, CreatePartitionCommandOutput } from "./commands/CreatePartitionCommand";
import {
  CreatePartitionIndexCommandInput,
  CreatePartitionIndexCommandOutput,
} from "./commands/CreatePartitionIndexCommand";
import { CreateRegistryCommandInput, CreateRegistryCommandOutput } from "./commands/CreateRegistryCommand";
import { CreateSchemaCommandInput, CreateSchemaCommandOutput } from "./commands/CreateSchemaCommand";
import { CreateScriptCommandInput, CreateScriptCommandOutput } from "./commands/CreateScriptCommand";
import {
  CreateSecurityConfigurationCommandInput,
  CreateSecurityConfigurationCommandOutput,
} from "./commands/CreateSecurityConfigurationCommand";
import { CreateTableCommandInput, CreateTableCommandOutput } from "./commands/CreateTableCommand";
import { CreateTriggerCommandInput, CreateTriggerCommandOutput } from "./commands/CreateTriggerCommand";
import {
  CreateUserDefinedFunctionCommandInput,
  CreateUserDefinedFunctionCommandOutput,
} from "./commands/CreateUserDefinedFunctionCommand";
import { CreateWorkflowCommandInput, CreateWorkflowCommandOutput } from "./commands/CreateWorkflowCommand";
import { DeleteBlueprintCommandInput, DeleteBlueprintCommandOutput } from "./commands/DeleteBlueprintCommand";
import { DeleteClassifierCommandInput, DeleteClassifierCommandOutput } from "./commands/DeleteClassifierCommand";
import {
  DeleteColumnStatisticsForPartitionCommandInput,
  DeleteColumnStatisticsForPartitionCommandOutput,
} from "./commands/DeleteColumnStatisticsForPartitionCommand";
import {
  DeleteColumnStatisticsForTableCommandInput,
  DeleteColumnStatisticsForTableCommandOutput,
} from "./commands/DeleteColumnStatisticsForTableCommand";
import { DeleteConnectionCommandInput, DeleteConnectionCommandOutput } from "./commands/DeleteConnectionCommand";
import { DeleteCrawlerCommandInput, DeleteCrawlerCommandOutput } from "./commands/DeleteCrawlerCommand";
import { DeleteDatabaseCommandInput, DeleteDatabaseCommandOutput } from "./commands/DeleteDatabaseCommand";
import { DeleteDevEndpointCommandInput, DeleteDevEndpointCommandOutput } from "./commands/DeleteDevEndpointCommand";
import { DeleteJobCommandInput, DeleteJobCommandOutput } from "./commands/DeleteJobCommand";
import { DeleteMLTransformCommandInput, DeleteMLTransformCommandOutput } from "./commands/DeleteMLTransformCommand";
import { DeletePartitionCommandInput, DeletePartitionCommandOutput } from "./commands/DeletePartitionCommand";
import {
  DeletePartitionIndexCommandInput,
  DeletePartitionIndexCommandOutput,
} from "./commands/DeletePartitionIndexCommand";
import { DeleteRegistryCommandInput, DeleteRegistryCommandOutput } from "./commands/DeleteRegistryCommand";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import { DeleteSchemaCommandInput, DeleteSchemaCommandOutput } from "./commands/DeleteSchemaCommand";
import {
  DeleteSchemaVersionsCommandInput,
  DeleteSchemaVersionsCommandOutput,
} from "./commands/DeleteSchemaVersionsCommand";
import {
  DeleteSecurityConfigurationCommandInput,
  DeleteSecurityConfigurationCommandOutput,
} from "./commands/DeleteSecurityConfigurationCommand";
import { DeleteTableCommandInput, DeleteTableCommandOutput } from "./commands/DeleteTableCommand";
import { DeleteTableVersionCommandInput, DeleteTableVersionCommandOutput } from "./commands/DeleteTableVersionCommand";
import { DeleteTriggerCommandInput, DeleteTriggerCommandOutput } from "./commands/DeleteTriggerCommand";
import {
  DeleteUserDefinedFunctionCommandInput,
  DeleteUserDefinedFunctionCommandOutput,
} from "./commands/DeleteUserDefinedFunctionCommand";
import { DeleteWorkflowCommandInput, DeleteWorkflowCommandOutput } from "./commands/DeleteWorkflowCommand";
import { GetBlueprintCommandInput, GetBlueprintCommandOutput } from "./commands/GetBlueprintCommand";
import { GetBlueprintRunCommandInput, GetBlueprintRunCommandOutput } from "./commands/GetBlueprintRunCommand";
import { GetBlueprintRunsCommandInput, GetBlueprintRunsCommandOutput } from "./commands/GetBlueprintRunsCommand";
import {
  GetCatalogImportStatusCommandInput,
  GetCatalogImportStatusCommandOutput,
} from "./commands/GetCatalogImportStatusCommand";
import { GetClassifierCommandInput, GetClassifierCommandOutput } from "./commands/GetClassifierCommand";
import { GetClassifiersCommandInput, GetClassifiersCommandOutput } from "./commands/GetClassifiersCommand";
import {
  GetColumnStatisticsForPartitionCommandInput,
  GetColumnStatisticsForPartitionCommandOutput,
} from "./commands/GetColumnStatisticsForPartitionCommand";
import {
  GetColumnStatisticsForTableCommandInput,
  GetColumnStatisticsForTableCommandOutput,
} from "./commands/GetColumnStatisticsForTableCommand";
import { GetConnectionCommandInput, GetConnectionCommandOutput } from "./commands/GetConnectionCommand";
import { GetConnectionsCommandInput, GetConnectionsCommandOutput } from "./commands/GetConnectionsCommand";
import { GetCrawlerCommandInput, GetCrawlerCommandOutput } from "./commands/GetCrawlerCommand";
import { GetCrawlerMetricsCommandInput, GetCrawlerMetricsCommandOutput } from "./commands/GetCrawlerMetricsCommand";
import { GetCrawlersCommandInput, GetCrawlersCommandOutput } from "./commands/GetCrawlersCommand";
import {
  GetDataCatalogEncryptionSettingsCommandInput,
  GetDataCatalogEncryptionSettingsCommandOutput,
} from "./commands/GetDataCatalogEncryptionSettingsCommand";
import { GetDatabaseCommandInput, GetDatabaseCommandOutput } from "./commands/GetDatabaseCommand";
import { GetDatabasesCommandInput, GetDatabasesCommandOutput } from "./commands/GetDatabasesCommand";
import { GetDataflowGraphCommandInput, GetDataflowGraphCommandOutput } from "./commands/GetDataflowGraphCommand";
import { GetDevEndpointCommandInput, GetDevEndpointCommandOutput } from "./commands/GetDevEndpointCommand";
import { GetDevEndpointsCommandInput, GetDevEndpointsCommandOutput } from "./commands/GetDevEndpointsCommand";
import { GetJobBookmarkCommandInput, GetJobBookmarkCommandOutput } from "./commands/GetJobBookmarkCommand";
import { GetJobCommandInput, GetJobCommandOutput } from "./commands/GetJobCommand";
import { GetJobRunCommandInput, GetJobRunCommandOutput } from "./commands/GetJobRunCommand";
import { GetJobRunsCommandInput, GetJobRunsCommandOutput } from "./commands/GetJobRunsCommand";
import { GetJobsCommandInput, GetJobsCommandOutput } from "./commands/GetJobsCommand";
import { GetMLTaskRunCommandInput, GetMLTaskRunCommandOutput } from "./commands/GetMLTaskRunCommand";
import { GetMLTaskRunsCommandInput, GetMLTaskRunsCommandOutput } from "./commands/GetMLTaskRunsCommand";
import { GetMLTransformCommandInput, GetMLTransformCommandOutput } from "./commands/GetMLTransformCommand";
import { GetMLTransformsCommandInput, GetMLTransformsCommandOutput } from "./commands/GetMLTransformsCommand";
import { GetMappingCommandInput, GetMappingCommandOutput } from "./commands/GetMappingCommand";
import { GetPartitionCommandInput, GetPartitionCommandOutput } from "./commands/GetPartitionCommand";
import {
  GetPartitionIndexesCommandInput,
  GetPartitionIndexesCommandOutput,
} from "./commands/GetPartitionIndexesCommand";
import { GetPartitionsCommandInput, GetPartitionsCommandOutput } from "./commands/GetPartitionsCommand";
import { GetPlanCommandInput, GetPlanCommandOutput } from "./commands/GetPlanCommand";
import { GetRegistryCommandInput, GetRegistryCommandOutput } from "./commands/GetRegistryCommand";
import {
  GetResourcePoliciesCommandInput,
  GetResourcePoliciesCommandOutput,
} from "./commands/GetResourcePoliciesCommand";
import { GetResourcePolicyCommandInput, GetResourcePolicyCommandOutput } from "./commands/GetResourcePolicyCommand";
import {
  GetSchemaByDefinitionCommandInput,
  GetSchemaByDefinitionCommandOutput,
} from "./commands/GetSchemaByDefinitionCommand";
import { GetSchemaCommandInput, GetSchemaCommandOutput } from "./commands/GetSchemaCommand";
import { GetSchemaVersionCommandInput, GetSchemaVersionCommandOutput } from "./commands/GetSchemaVersionCommand";
import {
  GetSchemaVersionsDiffCommandInput,
  GetSchemaVersionsDiffCommandOutput,
} from "./commands/GetSchemaVersionsDiffCommand";
import {
  GetSecurityConfigurationCommandInput,
  GetSecurityConfigurationCommandOutput,
} from "./commands/GetSecurityConfigurationCommand";
import {
  GetSecurityConfigurationsCommandInput,
  GetSecurityConfigurationsCommandOutput,
} from "./commands/GetSecurityConfigurationsCommand";
import { GetTableCommandInput, GetTableCommandOutput } from "./commands/GetTableCommand";
import { GetTableVersionCommandInput, GetTableVersionCommandOutput } from "./commands/GetTableVersionCommand";
import { GetTableVersionsCommandInput, GetTableVersionsCommandOutput } from "./commands/GetTableVersionsCommand";
import { GetTablesCommandInput, GetTablesCommandOutput } from "./commands/GetTablesCommand";
import { GetTagsCommandInput, GetTagsCommandOutput } from "./commands/GetTagsCommand";
import { GetTriggerCommandInput, GetTriggerCommandOutput } from "./commands/GetTriggerCommand";
import { GetTriggersCommandInput, GetTriggersCommandOutput } from "./commands/GetTriggersCommand";
import {
  GetUserDefinedFunctionCommandInput,
  GetUserDefinedFunctionCommandOutput,
} from "./commands/GetUserDefinedFunctionCommand";
import {
  GetUserDefinedFunctionsCommandInput,
  GetUserDefinedFunctionsCommandOutput,
} from "./commands/GetUserDefinedFunctionsCommand";
import { GetWorkflowCommandInput, GetWorkflowCommandOutput } from "./commands/GetWorkflowCommand";
import { GetWorkflowRunCommandInput, GetWorkflowRunCommandOutput } from "./commands/GetWorkflowRunCommand";
import {
  GetWorkflowRunPropertiesCommandInput,
  GetWorkflowRunPropertiesCommandOutput,
} from "./commands/GetWorkflowRunPropertiesCommand";
import { GetWorkflowRunsCommandInput, GetWorkflowRunsCommandOutput } from "./commands/GetWorkflowRunsCommand";
import {
  ImportCatalogToGlueCommandInput,
  ImportCatalogToGlueCommandOutput,
} from "./commands/ImportCatalogToGlueCommand";
import { ListBlueprintsCommandInput, ListBlueprintsCommandOutput } from "./commands/ListBlueprintsCommand";
import { ListCrawlersCommandInput, ListCrawlersCommandOutput } from "./commands/ListCrawlersCommand";
import { ListDevEndpointsCommandInput, ListDevEndpointsCommandOutput } from "./commands/ListDevEndpointsCommand";
import { ListJobsCommandInput, ListJobsCommandOutput } from "./commands/ListJobsCommand";
import { ListMLTransformsCommandInput, ListMLTransformsCommandOutput } from "./commands/ListMLTransformsCommand";
import { ListRegistriesCommandInput, ListRegistriesCommandOutput } from "./commands/ListRegistriesCommand";
import { ListSchemaVersionsCommandInput, ListSchemaVersionsCommandOutput } from "./commands/ListSchemaVersionsCommand";
import { ListSchemasCommandInput, ListSchemasCommandOutput } from "./commands/ListSchemasCommand";
import { ListTriggersCommandInput, ListTriggersCommandOutput } from "./commands/ListTriggersCommand";
import { ListWorkflowsCommandInput, ListWorkflowsCommandOutput } from "./commands/ListWorkflowsCommand";
import {
  PutDataCatalogEncryptionSettingsCommandInput,
  PutDataCatalogEncryptionSettingsCommandOutput,
} from "./commands/PutDataCatalogEncryptionSettingsCommand";
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput } from "./commands/PutResourcePolicyCommand";
import {
  PutSchemaVersionMetadataCommandInput,
  PutSchemaVersionMetadataCommandOutput,
} from "./commands/PutSchemaVersionMetadataCommand";
import {
  PutWorkflowRunPropertiesCommandInput,
  PutWorkflowRunPropertiesCommandOutput,
} from "./commands/PutWorkflowRunPropertiesCommand";
import {
  QuerySchemaVersionMetadataCommandInput,
  QuerySchemaVersionMetadataCommandOutput,
} from "./commands/QuerySchemaVersionMetadataCommand";
import {
  RegisterSchemaVersionCommandInput,
  RegisterSchemaVersionCommandOutput,
} from "./commands/RegisterSchemaVersionCommand";
import {
  RemoveSchemaVersionMetadataCommandInput,
  RemoveSchemaVersionMetadataCommandOutput,
} from "./commands/RemoveSchemaVersionMetadataCommand";
import { ResetJobBookmarkCommandInput, ResetJobBookmarkCommandOutput } from "./commands/ResetJobBookmarkCommand";
import { ResumeWorkflowRunCommandInput, ResumeWorkflowRunCommandOutput } from "./commands/ResumeWorkflowRunCommand";
import { SearchTablesCommandInput, SearchTablesCommandOutput } from "./commands/SearchTablesCommand";
import { StartBlueprintRunCommandInput, StartBlueprintRunCommandOutput } from "./commands/StartBlueprintRunCommand";
import { StartCrawlerCommandInput, StartCrawlerCommandOutput } from "./commands/StartCrawlerCommand";
import {
  StartCrawlerScheduleCommandInput,
  StartCrawlerScheduleCommandOutput,
} from "./commands/StartCrawlerScheduleCommand";
import {
  StartExportLabelsTaskRunCommandInput,
  StartExportLabelsTaskRunCommandOutput,
} from "./commands/StartExportLabelsTaskRunCommand";
import {
  StartImportLabelsTaskRunCommandInput,
  StartImportLabelsTaskRunCommandOutput,
} from "./commands/StartImportLabelsTaskRunCommand";
import { StartJobRunCommandInput, StartJobRunCommandOutput } from "./commands/StartJobRunCommand";
import {
  StartMLEvaluationTaskRunCommandInput,
  StartMLEvaluationTaskRunCommandOutput,
} from "./commands/StartMLEvaluationTaskRunCommand";
import {
  StartMLLabelingSetGenerationTaskRunCommandInput,
  StartMLLabelingSetGenerationTaskRunCommandOutput,
} from "./commands/StartMLLabelingSetGenerationTaskRunCommand";
import { StartTriggerCommandInput, StartTriggerCommandOutput } from "./commands/StartTriggerCommand";
import { StartWorkflowRunCommandInput, StartWorkflowRunCommandOutput } from "./commands/StartWorkflowRunCommand";
import { StopCrawlerCommandInput, StopCrawlerCommandOutput } from "./commands/StopCrawlerCommand";
import {
  StopCrawlerScheduleCommandInput,
  StopCrawlerScheduleCommandOutput,
} from "./commands/StopCrawlerScheduleCommand";
import { StopTriggerCommandInput, StopTriggerCommandOutput } from "./commands/StopTriggerCommand";
import { StopWorkflowRunCommandInput, StopWorkflowRunCommandOutput } from "./commands/StopWorkflowRunCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateBlueprintCommandInput, UpdateBlueprintCommandOutput } from "./commands/UpdateBlueprintCommand";
import { UpdateClassifierCommandInput, UpdateClassifierCommandOutput } from "./commands/UpdateClassifierCommand";
import {
  UpdateColumnStatisticsForPartitionCommandInput,
  UpdateColumnStatisticsForPartitionCommandOutput,
} from "./commands/UpdateColumnStatisticsForPartitionCommand";
import {
  UpdateColumnStatisticsForTableCommandInput,
  UpdateColumnStatisticsForTableCommandOutput,
} from "./commands/UpdateColumnStatisticsForTableCommand";
import { UpdateConnectionCommandInput, UpdateConnectionCommandOutput } from "./commands/UpdateConnectionCommand";
import { UpdateCrawlerCommandInput, UpdateCrawlerCommandOutput } from "./commands/UpdateCrawlerCommand";
import {
  UpdateCrawlerScheduleCommandInput,
  UpdateCrawlerScheduleCommandOutput,
} from "./commands/UpdateCrawlerScheduleCommand";
import { UpdateDatabaseCommandInput, UpdateDatabaseCommandOutput } from "./commands/UpdateDatabaseCommand";
import { UpdateDevEndpointCommandInput, UpdateDevEndpointCommandOutput } from "./commands/UpdateDevEndpointCommand";
import { UpdateJobCommandInput, UpdateJobCommandOutput } from "./commands/UpdateJobCommand";
import { UpdateMLTransformCommandInput, UpdateMLTransformCommandOutput } from "./commands/UpdateMLTransformCommand";
import { UpdatePartitionCommandInput, UpdatePartitionCommandOutput } from "./commands/UpdatePartitionCommand";
import { UpdateRegistryCommandInput, UpdateRegistryCommandOutput } from "./commands/UpdateRegistryCommand";
import { UpdateSchemaCommandInput, UpdateSchemaCommandOutput } from "./commands/UpdateSchemaCommand";
import { UpdateTableCommandInput, UpdateTableCommandOutput } from "./commands/UpdateTableCommand";
import { UpdateTriggerCommandInput, UpdateTriggerCommandOutput } from "./commands/UpdateTriggerCommand";
import {
  UpdateUserDefinedFunctionCommandInput,
  UpdateUserDefinedFunctionCommandOutput,
} from "./commands/UpdateUserDefinedFunctionCommand";
import { UpdateWorkflowCommandInput, UpdateWorkflowCommandOutput } from "./commands/UpdateWorkflowCommand";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig,
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { RetryInputConfig, RetryResolvedConfig, getRetryPlugin, resolveRetryConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  Provider,
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | BatchCreatePartitionCommandInput
  | BatchDeleteConnectionCommandInput
  | BatchDeletePartitionCommandInput
  | BatchDeleteTableCommandInput
  | BatchDeleteTableVersionCommandInput
  | BatchGetBlueprintsCommandInput
  | BatchGetCrawlersCommandInput
  | BatchGetDevEndpointsCommandInput
  | BatchGetJobsCommandInput
  | BatchGetPartitionCommandInput
  | BatchGetTriggersCommandInput
  | BatchGetWorkflowsCommandInput
  | BatchStopJobRunCommandInput
  | BatchUpdatePartitionCommandInput
  | CancelMLTaskRunCommandInput
  | CheckSchemaVersionValidityCommandInput
  | CreateBlueprintCommandInput
  | CreateClassifierCommandInput
  | CreateConnectionCommandInput
  | CreateCrawlerCommandInput
  | CreateDatabaseCommandInput
  | CreateDevEndpointCommandInput
  | CreateJobCommandInput
  | CreateMLTransformCommandInput
  | CreatePartitionCommandInput
  | CreatePartitionIndexCommandInput
  | CreateRegistryCommandInput
  | CreateSchemaCommandInput
  | CreateScriptCommandInput
  | CreateSecurityConfigurationCommandInput
  | CreateTableCommandInput
  | CreateTriggerCommandInput
  | CreateUserDefinedFunctionCommandInput
  | CreateWorkflowCommandInput
  | DeleteBlueprintCommandInput
  | DeleteClassifierCommandInput
  | DeleteColumnStatisticsForPartitionCommandInput
  | DeleteColumnStatisticsForTableCommandInput
  | DeleteConnectionCommandInput
  | DeleteCrawlerCommandInput
  | DeleteDatabaseCommandInput
  | DeleteDevEndpointCommandInput
  | DeleteJobCommandInput
  | DeleteMLTransformCommandInput
  | DeletePartitionCommandInput
  | DeletePartitionIndexCommandInput
  | DeleteRegistryCommandInput
  | DeleteResourcePolicyCommandInput
  | DeleteSchemaCommandInput
  | DeleteSchemaVersionsCommandInput
  | DeleteSecurityConfigurationCommandInput
  | DeleteTableCommandInput
  | DeleteTableVersionCommandInput
  | DeleteTriggerCommandInput
  | DeleteUserDefinedFunctionCommandInput
  | DeleteWorkflowCommandInput
  | GetBlueprintCommandInput
  | GetBlueprintRunCommandInput
  | GetBlueprintRunsCommandInput
  | GetCatalogImportStatusCommandInput
  | GetClassifierCommandInput
  | GetClassifiersCommandInput
  | GetColumnStatisticsForPartitionCommandInput
  | GetColumnStatisticsForTableCommandInput
  | GetConnectionCommandInput
  | GetConnectionsCommandInput
  | GetCrawlerCommandInput
  | GetCrawlerMetricsCommandInput
  | GetCrawlersCommandInput
  | GetDataCatalogEncryptionSettingsCommandInput
  | GetDatabaseCommandInput
  | GetDatabasesCommandInput
  | GetDataflowGraphCommandInput
  | GetDevEndpointCommandInput
  | GetDevEndpointsCommandInput
  | GetJobBookmarkCommandInput
  | GetJobCommandInput
  | GetJobRunCommandInput
  | GetJobRunsCommandInput
  | GetJobsCommandInput
  | GetMLTaskRunCommandInput
  | GetMLTaskRunsCommandInput
  | GetMLTransformCommandInput
  | GetMLTransformsCommandInput
  | GetMappingCommandInput
  | GetPartitionCommandInput
  | GetPartitionIndexesCommandInput
  | GetPartitionsCommandInput
  | GetPlanCommandInput
  | GetRegistryCommandInput
  | GetResourcePoliciesCommandInput
  | GetResourcePolicyCommandInput
  | GetSchemaByDefinitionCommandInput
  | GetSchemaCommandInput
  | GetSchemaVersionCommandInput
  | GetSchemaVersionsDiffCommandInput
  | GetSecurityConfigurationCommandInput
  | GetSecurityConfigurationsCommandInput
  | GetTableCommandInput
  | GetTableVersionCommandInput
  | GetTableVersionsCommandInput
  | GetTablesCommandInput
  | GetTagsCommandInput
  | GetTriggerCommandInput
  | GetTriggersCommandInput
  | GetUserDefinedFunctionCommandInput
  | GetUserDefinedFunctionsCommandInput
  | GetWorkflowCommandInput
  | GetWorkflowRunCommandInput
  | GetWorkflowRunPropertiesCommandInput
  | GetWorkflowRunsCommandInput
  | ImportCatalogToGlueCommandInput
  | ListBlueprintsCommandInput
  | ListCrawlersCommandInput
  | ListDevEndpointsCommandInput
  | ListJobsCommandInput
  | ListMLTransformsCommandInput
  | ListRegistriesCommandInput
  | ListSchemaVersionsCommandInput
  | ListSchemasCommandInput
  | ListTriggersCommandInput
  | ListWorkflowsCommandInput
  | PutDataCatalogEncryptionSettingsCommandInput
  | PutResourcePolicyCommandInput
  | PutSchemaVersionMetadataCommandInput
  | PutWorkflowRunPropertiesCommandInput
  | QuerySchemaVersionMetadataCommandInput
  | RegisterSchemaVersionCommandInput
  | RemoveSchemaVersionMetadataCommandInput
  | ResetJobBookmarkCommandInput
  | ResumeWorkflowRunCommandInput
  | SearchTablesCommandInput
  | StartBlueprintRunCommandInput
  | StartCrawlerCommandInput
  | StartCrawlerScheduleCommandInput
  | StartExportLabelsTaskRunCommandInput
  | StartImportLabelsTaskRunCommandInput
  | StartJobRunCommandInput
  | StartMLEvaluationTaskRunCommandInput
  | StartMLLabelingSetGenerationTaskRunCommandInput
  | StartTriggerCommandInput
  | StartWorkflowRunCommandInput
  | StopCrawlerCommandInput
  | StopCrawlerScheduleCommandInput
  | StopTriggerCommandInput
  | StopWorkflowRunCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateBlueprintCommandInput
  | UpdateClassifierCommandInput
  | UpdateColumnStatisticsForPartitionCommandInput
  | UpdateColumnStatisticsForTableCommandInput
  | UpdateConnectionCommandInput
  | UpdateCrawlerCommandInput
  | UpdateCrawlerScheduleCommandInput
  | UpdateDatabaseCommandInput
  | UpdateDevEndpointCommandInput
  | UpdateJobCommandInput
  | UpdateMLTransformCommandInput
  | UpdatePartitionCommandInput
  | UpdateRegistryCommandInput
  | UpdateSchemaCommandInput
  | UpdateTableCommandInput
  | UpdateTriggerCommandInput
  | UpdateUserDefinedFunctionCommandInput
  | UpdateWorkflowCommandInput;

export type ServiceOutputTypes =
  | BatchCreatePartitionCommandOutput
  | BatchDeleteConnectionCommandOutput
  | BatchDeletePartitionCommandOutput
  | BatchDeleteTableCommandOutput
  | BatchDeleteTableVersionCommandOutput
  | BatchGetBlueprintsCommandOutput
  | BatchGetCrawlersCommandOutput
  | BatchGetDevEndpointsCommandOutput
  | BatchGetJobsCommandOutput
  | BatchGetPartitionCommandOutput
  | BatchGetTriggersCommandOutput
  | BatchGetWorkflowsCommandOutput
  | BatchStopJobRunCommandOutput
  | BatchUpdatePartitionCommandOutput
  | CancelMLTaskRunCommandOutput
  | CheckSchemaVersionValidityCommandOutput
  | CreateBlueprintCommandOutput
  | CreateClassifierCommandOutput
  | CreateConnectionCommandOutput
  | CreateCrawlerCommandOutput
  | CreateDatabaseCommandOutput
  | CreateDevEndpointCommandOutput
  | CreateJobCommandOutput
  | CreateMLTransformCommandOutput
  | CreatePartitionCommandOutput
  | CreatePartitionIndexCommandOutput
  | CreateRegistryCommandOutput
  | CreateSchemaCommandOutput
  | CreateScriptCommandOutput
  | CreateSecurityConfigurationCommandOutput
  | CreateTableCommandOutput
  | CreateTriggerCommandOutput
  | CreateUserDefinedFunctionCommandOutput
  | CreateWorkflowCommandOutput
  | DeleteBlueprintCommandOutput
  | DeleteClassifierCommandOutput
  | DeleteColumnStatisticsForPartitionCommandOutput
  | DeleteColumnStatisticsForTableCommandOutput
  | DeleteConnectionCommandOutput
  | DeleteCrawlerCommandOutput
  | DeleteDatabaseCommandOutput
  | DeleteDevEndpointCommandOutput
  | DeleteJobCommandOutput
  | DeleteMLTransformCommandOutput
  | DeletePartitionCommandOutput
  | DeletePartitionIndexCommandOutput
  | DeleteRegistryCommandOutput
  | DeleteResourcePolicyCommandOutput
  | DeleteSchemaCommandOutput
  | DeleteSchemaVersionsCommandOutput
  | DeleteSecurityConfigurationCommandOutput
  | DeleteTableCommandOutput
  | DeleteTableVersionCommandOutput
  | DeleteTriggerCommandOutput
  | DeleteUserDefinedFunctionCommandOutput
  | DeleteWorkflowCommandOutput
  | GetBlueprintCommandOutput
  | GetBlueprintRunCommandOutput
  | GetBlueprintRunsCommandOutput
  | GetCatalogImportStatusCommandOutput
  | GetClassifierCommandOutput
  | GetClassifiersCommandOutput
  | GetColumnStatisticsForPartitionCommandOutput
  | GetColumnStatisticsForTableCommandOutput
  | GetConnectionCommandOutput
  | GetConnectionsCommandOutput
  | GetCrawlerCommandOutput
  | GetCrawlerMetricsCommandOutput
  | GetCrawlersCommandOutput
  | GetDataCatalogEncryptionSettingsCommandOutput
  | GetDatabaseCommandOutput
  | GetDatabasesCommandOutput
  | GetDataflowGraphCommandOutput
  | GetDevEndpointCommandOutput
  | GetDevEndpointsCommandOutput
  | GetJobBookmarkCommandOutput
  | GetJobCommandOutput
  | GetJobRunCommandOutput
  | GetJobRunsCommandOutput
  | GetJobsCommandOutput
  | GetMLTaskRunCommandOutput
  | GetMLTaskRunsCommandOutput
  | GetMLTransformCommandOutput
  | GetMLTransformsCommandOutput
  | GetMappingCommandOutput
  | GetPartitionCommandOutput
  | GetPartitionIndexesCommandOutput
  | GetPartitionsCommandOutput
  | GetPlanCommandOutput
  | GetRegistryCommandOutput
  | GetResourcePoliciesCommandOutput
  | GetResourcePolicyCommandOutput
  | GetSchemaByDefinitionCommandOutput
  | GetSchemaCommandOutput
  | GetSchemaVersionCommandOutput
  | GetSchemaVersionsDiffCommandOutput
  | GetSecurityConfigurationCommandOutput
  | GetSecurityConfigurationsCommandOutput
  | GetTableCommandOutput
  | GetTableVersionCommandOutput
  | GetTableVersionsCommandOutput
  | GetTablesCommandOutput
  | GetTagsCommandOutput
  | GetTriggerCommandOutput
  | GetTriggersCommandOutput
  | GetUserDefinedFunctionCommandOutput
  | GetUserDefinedFunctionsCommandOutput
  | GetWorkflowCommandOutput
  | GetWorkflowRunCommandOutput
  | GetWorkflowRunPropertiesCommandOutput
  | GetWorkflowRunsCommandOutput
  | ImportCatalogToGlueCommandOutput
  | ListBlueprintsCommandOutput
  | ListCrawlersCommandOutput
  | ListDevEndpointsCommandOutput
  | ListJobsCommandOutput
  | ListMLTransformsCommandOutput
  | ListRegistriesCommandOutput
  | ListSchemaVersionsCommandOutput
  | ListSchemasCommandOutput
  | ListTriggersCommandOutput
  | ListWorkflowsCommandOutput
  | PutDataCatalogEncryptionSettingsCommandOutput
  | PutResourcePolicyCommandOutput
  | PutSchemaVersionMetadataCommandOutput
  | PutWorkflowRunPropertiesCommandOutput
  | QuerySchemaVersionMetadataCommandOutput
  | RegisterSchemaVersionCommandOutput
  | RemoveSchemaVersionMetadataCommandOutput
  | ResetJobBookmarkCommandOutput
  | ResumeWorkflowRunCommandOutput
  | SearchTablesCommandOutput
  | StartBlueprintRunCommandOutput
  | StartCrawlerCommandOutput
  | StartCrawlerScheduleCommandOutput
  | StartExportLabelsTaskRunCommandOutput
  | StartImportLabelsTaskRunCommandOutput
  | StartJobRunCommandOutput
  | StartMLEvaluationTaskRunCommandOutput
  | StartMLLabelingSetGenerationTaskRunCommandOutput
  | StartTriggerCommandOutput
  | StartWorkflowRunCommandOutput
  | StopCrawlerCommandOutput
  | StopCrawlerScheduleCommandOutput
  | StopTriggerCommandOutput
  | StopWorkflowRunCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateBlueprintCommandOutput
  | UpdateClassifierCommandOutput
  | UpdateColumnStatisticsForPartitionCommandOutput
  | UpdateColumnStatisticsForTableCommandOutput
  | UpdateConnectionCommandOutput
  | UpdateCrawlerCommandOutput
  | UpdateCrawlerScheduleCommandOutput
  | UpdateDatabaseCommandOutput
  | UpdateDevEndpointCommandOutput
  | UpdateJobCommandOutput
  | UpdateMLTransformCommandOutput
  | UpdatePartitionCommandOutput
  | UpdateRegistryCommandOutput
  | UpdateSchemaCommandOutput
  | UpdateTableCommandOutput
  | UpdateTriggerCommandOutput
  | UpdateUserDefinedFunctionCommandOutput
  | UpdateWorkflowCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Hash} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @internal
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   * @internal
   */
  regionInfoProvider?: RegionInfoProvider;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;
}

type GlueClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of GlueClient class constructor that set the region, credentials and other options.
 */
export interface GlueClientConfig extends GlueClientConfigType {}

type GlueClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of GlueClient class. This is resolved and normalized from the {@link GlueClientConfig | constructor configuration interface}.
 */
export interface GlueClientResolvedConfig extends GlueClientResolvedConfigType {}

/**
 * <fullname>Glue</fullname>
 *          <p>Defines the public endpoint for the Glue service.</p>
 */
export class GlueClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  GlueClientResolvedConfig
> {
  /**
   * The resolved configuration of GlueClient class. This is resolved and normalized from the {@link GlueClientConfig | constructor configuration interface}.
   */
  readonly config: GlueClientResolvedConfig;

  constructor(configuration: GlueClientConfig) {
    let _config_0 = __getRuntimeConfig(configuration);
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveRetryConfig(_config_2);
    let _config_4 = resolveHostHeaderConfig(_config_3);
    let _config_5 = resolveAwsAuthConfig(_config_4);
    let _config_6 = resolveUserAgentConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
