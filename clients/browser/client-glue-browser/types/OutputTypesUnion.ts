import { BatchCreatePartitionOutput } from "./BatchCreatePartitionOutput";
import { BatchDeleteConnectionOutput } from "./BatchDeleteConnectionOutput";
import { BatchDeletePartitionOutput } from "./BatchDeletePartitionOutput";
import { BatchDeleteTableOutput } from "./BatchDeleteTableOutput";
import { BatchDeleteTableVersionOutput } from "./BatchDeleteTableVersionOutput";
import { BatchGetCrawlersOutput } from "./BatchGetCrawlersOutput";
import { BatchGetDevEndpointsOutput } from "./BatchGetDevEndpointsOutput";
import { BatchGetJobsOutput } from "./BatchGetJobsOutput";
import { BatchGetPartitionOutput } from "./BatchGetPartitionOutput";
import { BatchGetTriggersOutput } from "./BatchGetTriggersOutput";
import { BatchGetWorkflowsOutput } from "./BatchGetWorkflowsOutput";
import { BatchStopJobRunOutput } from "./BatchStopJobRunOutput";
import { CreateClassifierOutput } from "./CreateClassifierOutput";
import { CreateConnectionOutput } from "./CreateConnectionOutput";
import { CreateCrawlerOutput } from "./CreateCrawlerOutput";
import { CreateDatabaseOutput } from "./CreateDatabaseOutput";
import { CreateDevEndpointOutput } from "./CreateDevEndpointOutput";
import { CreateJobOutput } from "./CreateJobOutput";
import { CreatePartitionOutput } from "./CreatePartitionOutput";
import { CreateScriptOutput } from "./CreateScriptOutput";
import { CreateSecurityConfigurationOutput } from "./CreateSecurityConfigurationOutput";
import { CreateTableOutput } from "./CreateTableOutput";
import { CreateTriggerOutput } from "./CreateTriggerOutput";
import { CreateUserDefinedFunctionOutput } from "./CreateUserDefinedFunctionOutput";
import { CreateWorkflowOutput } from "./CreateWorkflowOutput";
import { DeleteClassifierOutput } from "./DeleteClassifierOutput";
import { DeleteConnectionOutput } from "./DeleteConnectionOutput";
import { DeleteCrawlerOutput } from "./DeleteCrawlerOutput";
import { DeleteDatabaseOutput } from "./DeleteDatabaseOutput";
import { DeleteDevEndpointOutput } from "./DeleteDevEndpointOutput";
import { DeleteJobOutput } from "./DeleteJobOutput";
import { DeletePartitionOutput } from "./DeletePartitionOutput";
import { DeleteResourcePolicyOutput } from "./DeleteResourcePolicyOutput";
import { DeleteSecurityConfigurationOutput } from "./DeleteSecurityConfigurationOutput";
import { DeleteTableOutput } from "./DeleteTableOutput";
import { DeleteTableVersionOutput } from "./DeleteTableVersionOutput";
import { DeleteTriggerOutput } from "./DeleteTriggerOutput";
import { DeleteUserDefinedFunctionOutput } from "./DeleteUserDefinedFunctionOutput";
import { DeleteWorkflowOutput } from "./DeleteWorkflowOutput";
import { GetCatalogImportStatusOutput } from "./GetCatalogImportStatusOutput";
import { GetClassifierOutput } from "./GetClassifierOutput";
import { GetClassifiersOutput } from "./GetClassifiersOutput";
import { GetConnectionOutput } from "./GetConnectionOutput";
import { GetConnectionsOutput } from "./GetConnectionsOutput";
import { GetCrawlerOutput } from "./GetCrawlerOutput";
import { GetCrawlerMetricsOutput } from "./GetCrawlerMetricsOutput";
import { GetCrawlersOutput } from "./GetCrawlersOutput";
import { GetDataCatalogEncryptionSettingsOutput } from "./GetDataCatalogEncryptionSettingsOutput";
import { GetDatabaseOutput } from "./GetDatabaseOutput";
import { GetDatabasesOutput } from "./GetDatabasesOutput";
import { GetDataflowGraphOutput } from "./GetDataflowGraphOutput";
import { GetDevEndpointOutput } from "./GetDevEndpointOutput";
import { GetDevEndpointsOutput } from "./GetDevEndpointsOutput";
import { GetJobOutput } from "./GetJobOutput";
import { GetJobBookmarkOutput } from "./GetJobBookmarkOutput";
import { GetJobBookmarksOutput } from "./GetJobBookmarksOutput";
import { GetJobRunOutput } from "./GetJobRunOutput";
import { GetJobRunsOutput } from "./GetJobRunsOutput";
import { GetJobsOutput } from "./GetJobsOutput";
import { GetMappingOutput } from "./GetMappingOutput";
import { GetPartitionOutput } from "./GetPartitionOutput";
import { GetPartitionsOutput } from "./GetPartitionsOutput";
import { GetPlanOutput } from "./GetPlanOutput";
import { GetResourcePolicyOutput } from "./GetResourcePolicyOutput";
import { GetSecurityConfigurationOutput } from "./GetSecurityConfigurationOutput";
import { GetSecurityConfigurationsOutput } from "./GetSecurityConfigurationsOutput";
import { GetTableOutput } from "./GetTableOutput";
import { GetTableVersionOutput } from "./GetTableVersionOutput";
import { GetTableVersionsOutput } from "./GetTableVersionsOutput";
import { GetTablesOutput } from "./GetTablesOutput";
import { GetTagsOutput } from "./GetTagsOutput";
import { GetTriggerOutput } from "./GetTriggerOutput";
import { GetTriggersOutput } from "./GetTriggersOutput";
import { GetUserDefinedFunctionOutput } from "./GetUserDefinedFunctionOutput";
import { GetUserDefinedFunctionsOutput } from "./GetUserDefinedFunctionsOutput";
import { GetWorkflowOutput } from "./GetWorkflowOutput";
import { GetWorkflowRunOutput } from "./GetWorkflowRunOutput";
import { GetWorkflowRunPropertiesOutput } from "./GetWorkflowRunPropertiesOutput";
import { GetWorkflowRunsOutput } from "./GetWorkflowRunsOutput";
import { ImportCatalogToGlueOutput } from "./ImportCatalogToGlueOutput";
import { ListCrawlersOutput } from "./ListCrawlersOutput";
import { ListDevEndpointsOutput } from "./ListDevEndpointsOutput";
import { ListJobsOutput } from "./ListJobsOutput";
import { ListTriggersOutput } from "./ListTriggersOutput";
import { ListWorkflowsOutput } from "./ListWorkflowsOutput";
import { PutDataCatalogEncryptionSettingsOutput } from "./PutDataCatalogEncryptionSettingsOutput";
import { PutResourcePolicyOutput } from "./PutResourcePolicyOutput";
import { PutWorkflowRunPropertiesOutput } from "./PutWorkflowRunPropertiesOutput";
import { ResetJobBookmarkOutput } from "./ResetJobBookmarkOutput";
import { StartCrawlerOutput } from "./StartCrawlerOutput";
import { StartCrawlerScheduleOutput } from "./StartCrawlerScheduleOutput";
import { StartJobRunOutput } from "./StartJobRunOutput";
import { StartTriggerOutput } from "./StartTriggerOutput";
import { StartWorkflowRunOutput } from "./StartWorkflowRunOutput";
import { StopCrawlerOutput } from "./StopCrawlerOutput";
import { StopCrawlerScheduleOutput } from "./StopCrawlerScheduleOutput";
import { StopTriggerOutput } from "./StopTriggerOutput";
import { TagResourceOutput } from "./TagResourceOutput";
import { UntagResourceOutput } from "./UntagResourceOutput";
import { UpdateClassifierOutput } from "./UpdateClassifierOutput";
import { UpdateConnectionOutput } from "./UpdateConnectionOutput";
import { UpdateCrawlerOutput } from "./UpdateCrawlerOutput";
import { UpdateCrawlerScheduleOutput } from "./UpdateCrawlerScheduleOutput";
import { UpdateDatabaseOutput } from "./UpdateDatabaseOutput";
import { UpdateDevEndpointOutput } from "./UpdateDevEndpointOutput";
import { UpdateJobOutput } from "./UpdateJobOutput";
import { UpdatePartitionOutput } from "./UpdatePartitionOutput";
import { UpdateTableOutput } from "./UpdateTableOutput";
import { UpdateTriggerOutput } from "./UpdateTriggerOutput";
import { UpdateUserDefinedFunctionOutput } from "./UpdateUserDefinedFunctionOutput";
import { UpdateWorkflowOutput } from "./UpdateWorkflowOutput";
export type OutputTypesUnion =
  | BatchCreatePartitionOutput
  | BatchDeleteConnectionOutput
  | BatchDeletePartitionOutput
  | BatchDeleteTableOutput
  | BatchDeleteTableVersionOutput
  | BatchGetCrawlersOutput
  | BatchGetDevEndpointsOutput
  | BatchGetJobsOutput
  | BatchGetPartitionOutput
  | BatchGetTriggersOutput
  | BatchGetWorkflowsOutput
  | BatchStopJobRunOutput
  | CreateClassifierOutput
  | CreateConnectionOutput
  | CreateCrawlerOutput
  | CreateDatabaseOutput
  | CreateDevEndpointOutput
  | CreateJobOutput
  | CreatePartitionOutput
  | CreateScriptOutput
  | CreateSecurityConfigurationOutput
  | CreateTableOutput
  | CreateTriggerOutput
  | CreateUserDefinedFunctionOutput
  | CreateWorkflowOutput
  | DeleteClassifierOutput
  | DeleteConnectionOutput
  | DeleteCrawlerOutput
  | DeleteDatabaseOutput
  | DeleteDevEndpointOutput
  | DeleteJobOutput
  | DeletePartitionOutput
  | DeleteResourcePolicyOutput
  | DeleteSecurityConfigurationOutput
  | DeleteTableOutput
  | DeleteTableVersionOutput
  | DeleteTriggerOutput
  | DeleteUserDefinedFunctionOutput
  | DeleteWorkflowOutput
  | GetCatalogImportStatusOutput
  | GetClassifierOutput
  | GetClassifiersOutput
  | GetConnectionOutput
  | GetConnectionsOutput
  | GetCrawlerOutput
  | GetCrawlerMetricsOutput
  | GetCrawlersOutput
  | GetDataCatalogEncryptionSettingsOutput
  | GetDatabaseOutput
  | GetDatabasesOutput
  | GetDataflowGraphOutput
  | GetDevEndpointOutput
  | GetDevEndpointsOutput
  | GetJobOutput
  | GetJobBookmarkOutput
  | GetJobBookmarksOutput
  | GetJobRunOutput
  | GetJobRunsOutput
  | GetJobsOutput
  | GetMappingOutput
  | GetPartitionOutput
  | GetPartitionsOutput
  | GetPlanOutput
  | GetResourcePolicyOutput
  | GetSecurityConfigurationOutput
  | GetSecurityConfigurationsOutput
  | GetTableOutput
  | GetTableVersionOutput
  | GetTableVersionsOutput
  | GetTablesOutput
  | GetTagsOutput
  | GetTriggerOutput
  | GetTriggersOutput
  | GetUserDefinedFunctionOutput
  | GetUserDefinedFunctionsOutput
  | GetWorkflowOutput
  | GetWorkflowRunOutput
  | GetWorkflowRunPropertiesOutput
  | GetWorkflowRunsOutput
  | ImportCatalogToGlueOutput
  | ListCrawlersOutput
  | ListDevEndpointsOutput
  | ListJobsOutput
  | ListTriggersOutput
  | ListWorkflowsOutput
  | PutDataCatalogEncryptionSettingsOutput
  | PutResourcePolicyOutput
  | PutWorkflowRunPropertiesOutput
  | ResetJobBookmarkOutput
  | StartCrawlerOutput
  | StartCrawlerScheduleOutput
  | StartJobRunOutput
  | StartTriggerOutput
  | StartWorkflowRunOutput
  | StopCrawlerOutput
  | StopCrawlerScheduleOutput
  | StopTriggerOutput
  | TagResourceOutput
  | UntagResourceOutput
  | UpdateClassifierOutput
  | UpdateConnectionOutput
  | UpdateCrawlerOutput
  | UpdateCrawlerScheduleOutput
  | UpdateDatabaseOutput
  | UpdateDevEndpointOutput
  | UpdateJobOutput
  | UpdatePartitionOutput
  | UpdateTableOutput
  | UpdateTriggerOutput
  | UpdateUserDefinedFunctionOutput
  | UpdateWorkflowOutput;
