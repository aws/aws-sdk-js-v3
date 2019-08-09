import { BatchCreatePartitionInput } from "./BatchCreatePartitionInput";
import { BatchDeleteConnectionInput } from "./BatchDeleteConnectionInput";
import { BatchDeletePartitionInput } from "./BatchDeletePartitionInput";
import { BatchDeleteTableInput } from "./BatchDeleteTableInput";
import { BatchDeleteTableVersionInput } from "./BatchDeleteTableVersionInput";
import { BatchGetCrawlersInput } from "./BatchGetCrawlersInput";
import { BatchGetDevEndpointsInput } from "./BatchGetDevEndpointsInput";
import { BatchGetJobsInput } from "./BatchGetJobsInput";
import { BatchGetPartitionInput } from "./BatchGetPartitionInput";
import { BatchGetTriggersInput } from "./BatchGetTriggersInput";
import { BatchGetWorkflowsInput } from "./BatchGetWorkflowsInput";
import { BatchStopJobRunInput } from "./BatchStopJobRunInput";
import { CreateClassifierInput } from "./CreateClassifierInput";
import { CreateConnectionInput } from "./CreateConnectionInput";
import { CreateCrawlerInput } from "./CreateCrawlerInput";
import { CreateDatabaseInput } from "./CreateDatabaseInput";
import { CreateDevEndpointInput } from "./CreateDevEndpointInput";
import { CreateJobInput } from "./CreateJobInput";
import { CreatePartitionInput } from "./CreatePartitionInput";
import { CreateScriptInput } from "./CreateScriptInput";
import { CreateSecurityConfigurationInput } from "./CreateSecurityConfigurationInput";
import { CreateTableInput } from "./CreateTableInput";
import { CreateTriggerInput } from "./CreateTriggerInput";
import { CreateUserDefinedFunctionInput } from "./CreateUserDefinedFunctionInput";
import { CreateWorkflowInput } from "./CreateWorkflowInput";
import { DeleteClassifierInput } from "./DeleteClassifierInput";
import { DeleteConnectionInput } from "./DeleteConnectionInput";
import { DeleteCrawlerInput } from "./DeleteCrawlerInput";
import { DeleteDatabaseInput } from "./DeleteDatabaseInput";
import { DeleteDevEndpointInput } from "./DeleteDevEndpointInput";
import { DeleteJobInput } from "./DeleteJobInput";
import { DeletePartitionInput } from "./DeletePartitionInput";
import { DeleteResourcePolicyInput } from "./DeleteResourcePolicyInput";
import { DeleteSecurityConfigurationInput } from "./DeleteSecurityConfigurationInput";
import { DeleteTableInput } from "./DeleteTableInput";
import { DeleteTableVersionInput } from "./DeleteTableVersionInput";
import { DeleteTriggerInput } from "./DeleteTriggerInput";
import { DeleteUserDefinedFunctionInput } from "./DeleteUserDefinedFunctionInput";
import { DeleteWorkflowInput } from "./DeleteWorkflowInput";
import { GetCatalogImportStatusInput } from "./GetCatalogImportStatusInput";
import { GetClassifierInput } from "./GetClassifierInput";
import { GetClassifiersInput } from "./GetClassifiersInput";
import { GetConnectionInput } from "./GetConnectionInput";
import { GetConnectionsInput } from "./GetConnectionsInput";
import { GetCrawlerInput } from "./GetCrawlerInput";
import { GetCrawlerMetricsInput } from "./GetCrawlerMetricsInput";
import { GetCrawlersInput } from "./GetCrawlersInput";
import { GetDataCatalogEncryptionSettingsInput } from "./GetDataCatalogEncryptionSettingsInput";
import { GetDatabaseInput } from "./GetDatabaseInput";
import { GetDatabasesInput } from "./GetDatabasesInput";
import { GetDataflowGraphInput } from "./GetDataflowGraphInput";
import { GetDevEndpointInput } from "./GetDevEndpointInput";
import { GetDevEndpointsInput } from "./GetDevEndpointsInput";
import { GetJobInput } from "./GetJobInput";
import { GetJobBookmarkInput } from "./GetJobBookmarkInput";
import { GetJobBookmarksInput } from "./GetJobBookmarksInput";
import { GetJobRunInput } from "./GetJobRunInput";
import { GetJobRunsInput } from "./GetJobRunsInput";
import { GetJobsInput } from "./GetJobsInput";
import { GetMappingInput } from "./GetMappingInput";
import { GetPartitionInput } from "./GetPartitionInput";
import { GetPartitionsInput } from "./GetPartitionsInput";
import { GetPlanInput } from "./GetPlanInput";
import { GetResourcePolicyInput } from "./GetResourcePolicyInput";
import { GetSecurityConfigurationInput } from "./GetSecurityConfigurationInput";
import { GetSecurityConfigurationsInput } from "./GetSecurityConfigurationsInput";
import { GetTableInput } from "./GetTableInput";
import { GetTableVersionInput } from "./GetTableVersionInput";
import { GetTableVersionsInput } from "./GetTableVersionsInput";
import { GetTablesInput } from "./GetTablesInput";
import { GetTagsInput } from "./GetTagsInput";
import { GetTriggerInput } from "./GetTriggerInput";
import { GetTriggersInput } from "./GetTriggersInput";
import { GetUserDefinedFunctionInput } from "./GetUserDefinedFunctionInput";
import { GetUserDefinedFunctionsInput } from "./GetUserDefinedFunctionsInput";
import { GetWorkflowInput } from "./GetWorkflowInput";
import { GetWorkflowRunInput } from "./GetWorkflowRunInput";
import { GetWorkflowRunPropertiesInput } from "./GetWorkflowRunPropertiesInput";
import { GetWorkflowRunsInput } from "./GetWorkflowRunsInput";
import { ImportCatalogToGlueInput } from "./ImportCatalogToGlueInput";
import { ListCrawlersInput } from "./ListCrawlersInput";
import { ListDevEndpointsInput } from "./ListDevEndpointsInput";
import { ListJobsInput } from "./ListJobsInput";
import { ListTriggersInput } from "./ListTriggersInput";
import { ListWorkflowsInput } from "./ListWorkflowsInput";
import { PutDataCatalogEncryptionSettingsInput } from "./PutDataCatalogEncryptionSettingsInput";
import { PutResourcePolicyInput } from "./PutResourcePolicyInput";
import { PutWorkflowRunPropertiesInput } from "./PutWorkflowRunPropertiesInput";
import { ResetJobBookmarkInput } from "./ResetJobBookmarkInput";
import { StartCrawlerInput } from "./StartCrawlerInput";
import { StartCrawlerScheduleInput } from "./StartCrawlerScheduleInput";
import { StartJobRunInput } from "./StartJobRunInput";
import { StartTriggerInput } from "./StartTriggerInput";
import { StartWorkflowRunInput } from "./StartWorkflowRunInput";
import { StopCrawlerInput } from "./StopCrawlerInput";
import { StopCrawlerScheduleInput } from "./StopCrawlerScheduleInput";
import { StopTriggerInput } from "./StopTriggerInput";
import { TagResourceInput } from "./TagResourceInput";
import { UntagResourceInput } from "./UntagResourceInput";
import { UpdateClassifierInput } from "./UpdateClassifierInput";
import { UpdateConnectionInput } from "./UpdateConnectionInput";
import { UpdateCrawlerInput } from "./UpdateCrawlerInput";
import { UpdateCrawlerScheduleInput } from "./UpdateCrawlerScheduleInput";
import { UpdateDatabaseInput } from "./UpdateDatabaseInput";
import { UpdateDevEndpointInput } from "./UpdateDevEndpointInput";
import { UpdateJobInput } from "./UpdateJobInput";
import { UpdatePartitionInput } from "./UpdatePartitionInput";
import { UpdateTableInput } from "./UpdateTableInput";
import { UpdateTriggerInput } from "./UpdateTriggerInput";
import { UpdateUserDefinedFunctionInput } from "./UpdateUserDefinedFunctionInput";
import { UpdateWorkflowInput } from "./UpdateWorkflowInput";
export type InputTypesUnion =
  | BatchCreatePartitionInput
  | BatchDeleteConnectionInput
  | BatchDeletePartitionInput
  | BatchDeleteTableInput
  | BatchDeleteTableVersionInput
  | BatchGetCrawlersInput
  | BatchGetDevEndpointsInput
  | BatchGetJobsInput
  | BatchGetPartitionInput
  | BatchGetTriggersInput
  | BatchGetWorkflowsInput
  | BatchStopJobRunInput
  | CreateClassifierInput
  | CreateConnectionInput
  | CreateCrawlerInput
  | CreateDatabaseInput
  | CreateDevEndpointInput
  | CreateJobInput
  | CreatePartitionInput
  | CreateScriptInput
  | CreateSecurityConfigurationInput
  | CreateTableInput
  | CreateTriggerInput
  | CreateUserDefinedFunctionInput
  | CreateWorkflowInput
  | DeleteClassifierInput
  | DeleteConnectionInput
  | DeleteCrawlerInput
  | DeleteDatabaseInput
  | DeleteDevEndpointInput
  | DeleteJobInput
  | DeletePartitionInput
  | DeleteResourcePolicyInput
  | DeleteSecurityConfigurationInput
  | DeleteTableInput
  | DeleteTableVersionInput
  | DeleteTriggerInput
  | DeleteUserDefinedFunctionInput
  | DeleteWorkflowInput
  | GetCatalogImportStatusInput
  | GetClassifierInput
  | GetClassifiersInput
  | GetConnectionInput
  | GetConnectionsInput
  | GetCrawlerInput
  | GetCrawlerMetricsInput
  | GetCrawlersInput
  | GetDataCatalogEncryptionSettingsInput
  | GetDatabaseInput
  | GetDatabasesInput
  | GetDataflowGraphInput
  | GetDevEndpointInput
  | GetDevEndpointsInput
  | GetJobInput
  | GetJobBookmarkInput
  | GetJobBookmarksInput
  | GetJobRunInput
  | GetJobRunsInput
  | GetJobsInput
  | GetMappingInput
  | GetPartitionInput
  | GetPartitionsInput
  | GetPlanInput
  | GetResourcePolicyInput
  | GetSecurityConfigurationInput
  | GetSecurityConfigurationsInput
  | GetTableInput
  | GetTableVersionInput
  | GetTableVersionsInput
  | GetTablesInput
  | GetTagsInput
  | GetTriggerInput
  | GetTriggersInput
  | GetUserDefinedFunctionInput
  | GetUserDefinedFunctionsInput
  | GetWorkflowInput
  | GetWorkflowRunInput
  | GetWorkflowRunPropertiesInput
  | GetWorkflowRunsInput
  | ImportCatalogToGlueInput
  | ListCrawlersInput
  | ListDevEndpointsInput
  | ListJobsInput
  | ListTriggersInput
  | ListWorkflowsInput
  | PutDataCatalogEncryptionSettingsInput
  | PutResourcePolicyInput
  | PutWorkflowRunPropertiesInput
  | ResetJobBookmarkInput
  | StartCrawlerInput
  | StartCrawlerScheduleInput
  | StartJobRunInput
  | StartTriggerInput
  | StartWorkflowRunInput
  | StopCrawlerInput
  | StopCrawlerScheduleInput
  | StopTriggerInput
  | TagResourceInput
  | UntagResourceInput
  | UpdateClassifierInput
  | UpdateConnectionInput
  | UpdateCrawlerInput
  | UpdateCrawlerScheduleInput
  | UpdateDatabaseInput
  | UpdateDevEndpointInput
  | UpdateJobInput
  | UpdatePartitionInput
  | UpdateTableInput
  | UpdateTriggerInput
  | UpdateUserDefinedFunctionInput
  | UpdateWorkflowInput;
