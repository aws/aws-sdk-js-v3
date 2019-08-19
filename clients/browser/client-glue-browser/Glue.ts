import { GlueClient } from "./GlueClient";
import { AccessDeniedException } from "./types/AccessDeniedException";
import { AlreadyExistsException } from "./types/AlreadyExistsException";
import { BatchCreatePartitionInput } from "./types/BatchCreatePartitionInput";
import { BatchCreatePartitionOutput } from "./types/BatchCreatePartitionOutput";
import { BatchDeleteConnectionInput } from "./types/BatchDeleteConnectionInput";
import { BatchDeleteConnectionOutput } from "./types/BatchDeleteConnectionOutput";
import { BatchDeletePartitionInput } from "./types/BatchDeletePartitionInput";
import { BatchDeletePartitionOutput } from "./types/BatchDeletePartitionOutput";
import { BatchDeleteTableInput } from "./types/BatchDeleteTableInput";
import { BatchDeleteTableOutput } from "./types/BatchDeleteTableOutput";
import { BatchDeleteTableVersionInput } from "./types/BatchDeleteTableVersionInput";
import { BatchDeleteTableVersionOutput } from "./types/BatchDeleteTableVersionOutput";
import { BatchGetCrawlersInput } from "./types/BatchGetCrawlersInput";
import { BatchGetCrawlersOutput } from "./types/BatchGetCrawlersOutput";
import { BatchGetDevEndpointsInput } from "./types/BatchGetDevEndpointsInput";
import { BatchGetDevEndpointsOutput } from "./types/BatchGetDevEndpointsOutput";
import { BatchGetJobsInput } from "./types/BatchGetJobsInput";
import { BatchGetJobsOutput } from "./types/BatchGetJobsOutput";
import { BatchGetPartitionInput } from "./types/BatchGetPartitionInput";
import { BatchGetPartitionOutput } from "./types/BatchGetPartitionOutput";
import { BatchGetTriggersInput } from "./types/BatchGetTriggersInput";
import { BatchGetTriggersOutput } from "./types/BatchGetTriggersOutput";
import { BatchGetWorkflowsInput } from "./types/BatchGetWorkflowsInput";
import { BatchGetWorkflowsOutput } from "./types/BatchGetWorkflowsOutput";
import { BatchStopJobRunInput } from "./types/BatchStopJobRunInput";
import { BatchStopJobRunOutput } from "./types/BatchStopJobRunOutput";
import { ConcurrentModificationException } from "./types/ConcurrentModificationException";
import { ConcurrentRunsExceededException } from "./types/ConcurrentRunsExceededException";
import { ConditionCheckFailureException } from "./types/ConditionCheckFailureException";
import { CrawlerNotRunningException } from "./types/CrawlerNotRunningException";
import { CrawlerRunningException } from "./types/CrawlerRunningException";
import { CrawlerStoppingException } from "./types/CrawlerStoppingException";
import { CreateClassifierInput } from "./types/CreateClassifierInput";
import { CreateClassifierOutput } from "./types/CreateClassifierOutput";
import { CreateConnectionInput } from "./types/CreateConnectionInput";
import { CreateConnectionOutput } from "./types/CreateConnectionOutput";
import { CreateCrawlerInput } from "./types/CreateCrawlerInput";
import { CreateCrawlerOutput } from "./types/CreateCrawlerOutput";
import { CreateDatabaseInput } from "./types/CreateDatabaseInput";
import { CreateDatabaseOutput } from "./types/CreateDatabaseOutput";
import { CreateDevEndpointInput } from "./types/CreateDevEndpointInput";
import { CreateDevEndpointOutput } from "./types/CreateDevEndpointOutput";
import { CreateJobInput } from "./types/CreateJobInput";
import { CreateJobOutput } from "./types/CreateJobOutput";
import { CreatePartitionInput } from "./types/CreatePartitionInput";
import { CreatePartitionOutput } from "./types/CreatePartitionOutput";
import { CreateScriptInput } from "./types/CreateScriptInput";
import { CreateScriptOutput } from "./types/CreateScriptOutput";
import { CreateSecurityConfigurationInput } from "./types/CreateSecurityConfigurationInput";
import { CreateSecurityConfigurationOutput } from "./types/CreateSecurityConfigurationOutput";
import { CreateTableInput } from "./types/CreateTableInput";
import { CreateTableOutput } from "./types/CreateTableOutput";
import { CreateTriggerInput } from "./types/CreateTriggerInput";
import { CreateTriggerOutput } from "./types/CreateTriggerOutput";
import { CreateUserDefinedFunctionInput } from "./types/CreateUserDefinedFunctionInput";
import { CreateUserDefinedFunctionOutput } from "./types/CreateUserDefinedFunctionOutput";
import { CreateWorkflowInput } from "./types/CreateWorkflowInput";
import { CreateWorkflowOutput } from "./types/CreateWorkflowOutput";
import { DeleteClassifierInput } from "./types/DeleteClassifierInput";
import { DeleteClassifierOutput } from "./types/DeleteClassifierOutput";
import { DeleteConnectionInput } from "./types/DeleteConnectionInput";
import { DeleteConnectionOutput } from "./types/DeleteConnectionOutput";
import { DeleteCrawlerInput } from "./types/DeleteCrawlerInput";
import { DeleteCrawlerOutput } from "./types/DeleteCrawlerOutput";
import { DeleteDatabaseInput } from "./types/DeleteDatabaseInput";
import { DeleteDatabaseOutput } from "./types/DeleteDatabaseOutput";
import { DeleteDevEndpointInput } from "./types/DeleteDevEndpointInput";
import { DeleteDevEndpointOutput } from "./types/DeleteDevEndpointOutput";
import { DeleteJobInput } from "./types/DeleteJobInput";
import { DeleteJobOutput } from "./types/DeleteJobOutput";
import { DeletePartitionInput } from "./types/DeletePartitionInput";
import { DeletePartitionOutput } from "./types/DeletePartitionOutput";
import { DeleteResourcePolicyInput } from "./types/DeleteResourcePolicyInput";
import { DeleteResourcePolicyOutput } from "./types/DeleteResourcePolicyOutput";
import { DeleteSecurityConfigurationInput } from "./types/DeleteSecurityConfigurationInput";
import { DeleteSecurityConfigurationOutput } from "./types/DeleteSecurityConfigurationOutput";
import { DeleteTableInput } from "./types/DeleteTableInput";
import { DeleteTableOutput } from "./types/DeleteTableOutput";
import { DeleteTableVersionInput } from "./types/DeleteTableVersionInput";
import { DeleteTableVersionOutput } from "./types/DeleteTableVersionOutput";
import { DeleteTriggerInput } from "./types/DeleteTriggerInput";
import { DeleteTriggerOutput } from "./types/DeleteTriggerOutput";
import { DeleteUserDefinedFunctionInput } from "./types/DeleteUserDefinedFunctionInput";
import { DeleteUserDefinedFunctionOutput } from "./types/DeleteUserDefinedFunctionOutput";
import { DeleteWorkflowInput } from "./types/DeleteWorkflowInput";
import { DeleteWorkflowOutput } from "./types/DeleteWorkflowOutput";
import { EntityNotFoundException } from "./types/EntityNotFoundException";
import { GetCatalogImportStatusInput } from "./types/GetCatalogImportStatusInput";
import { GetCatalogImportStatusOutput } from "./types/GetCatalogImportStatusOutput";
import { GetClassifierInput } from "./types/GetClassifierInput";
import { GetClassifierOutput } from "./types/GetClassifierOutput";
import { GetClassifiersInput } from "./types/GetClassifiersInput";
import { GetClassifiersOutput } from "./types/GetClassifiersOutput";
import { GetConnectionInput } from "./types/GetConnectionInput";
import { GetConnectionOutput } from "./types/GetConnectionOutput";
import { GetConnectionsInput } from "./types/GetConnectionsInput";
import { GetConnectionsOutput } from "./types/GetConnectionsOutput";
import { GetCrawlerInput } from "./types/GetCrawlerInput";
import { GetCrawlerMetricsInput } from "./types/GetCrawlerMetricsInput";
import { GetCrawlerMetricsOutput } from "./types/GetCrawlerMetricsOutput";
import { GetCrawlerOutput } from "./types/GetCrawlerOutput";
import { GetCrawlersInput } from "./types/GetCrawlersInput";
import { GetCrawlersOutput } from "./types/GetCrawlersOutput";
import { GetDataCatalogEncryptionSettingsInput } from "./types/GetDataCatalogEncryptionSettingsInput";
import { GetDataCatalogEncryptionSettingsOutput } from "./types/GetDataCatalogEncryptionSettingsOutput";
import { GetDatabaseInput } from "./types/GetDatabaseInput";
import { GetDatabaseOutput } from "./types/GetDatabaseOutput";
import { GetDatabasesInput } from "./types/GetDatabasesInput";
import { GetDatabasesOutput } from "./types/GetDatabasesOutput";
import { GetDataflowGraphInput } from "./types/GetDataflowGraphInput";
import { GetDataflowGraphOutput } from "./types/GetDataflowGraphOutput";
import { GetDevEndpointInput } from "./types/GetDevEndpointInput";
import { GetDevEndpointOutput } from "./types/GetDevEndpointOutput";
import { GetDevEndpointsInput } from "./types/GetDevEndpointsInput";
import { GetDevEndpointsOutput } from "./types/GetDevEndpointsOutput";
import { GetJobBookmarkInput } from "./types/GetJobBookmarkInput";
import { GetJobBookmarkOutput } from "./types/GetJobBookmarkOutput";
import { GetJobBookmarksInput } from "./types/GetJobBookmarksInput";
import { GetJobBookmarksOutput } from "./types/GetJobBookmarksOutput";
import { GetJobInput } from "./types/GetJobInput";
import { GetJobOutput } from "./types/GetJobOutput";
import { GetJobRunInput } from "./types/GetJobRunInput";
import { GetJobRunOutput } from "./types/GetJobRunOutput";
import { GetJobRunsInput } from "./types/GetJobRunsInput";
import { GetJobRunsOutput } from "./types/GetJobRunsOutput";
import { GetJobsInput } from "./types/GetJobsInput";
import { GetJobsOutput } from "./types/GetJobsOutput";
import { GetMappingInput } from "./types/GetMappingInput";
import { GetMappingOutput } from "./types/GetMappingOutput";
import { GetPartitionInput } from "./types/GetPartitionInput";
import { GetPartitionOutput } from "./types/GetPartitionOutput";
import { GetPartitionsInput } from "./types/GetPartitionsInput";
import { GetPartitionsOutput } from "./types/GetPartitionsOutput";
import { GetPlanInput } from "./types/GetPlanInput";
import { GetPlanOutput } from "./types/GetPlanOutput";
import { GetResourcePolicyInput } from "./types/GetResourcePolicyInput";
import { GetResourcePolicyOutput } from "./types/GetResourcePolicyOutput";
import { GetSecurityConfigurationInput } from "./types/GetSecurityConfigurationInput";
import { GetSecurityConfigurationOutput } from "./types/GetSecurityConfigurationOutput";
import { GetSecurityConfigurationsInput } from "./types/GetSecurityConfigurationsInput";
import { GetSecurityConfigurationsOutput } from "./types/GetSecurityConfigurationsOutput";
import { GetTableInput } from "./types/GetTableInput";
import { GetTableOutput } from "./types/GetTableOutput";
import { GetTableVersionInput } from "./types/GetTableVersionInput";
import { GetTableVersionOutput } from "./types/GetTableVersionOutput";
import { GetTableVersionsInput } from "./types/GetTableVersionsInput";
import { GetTableVersionsOutput } from "./types/GetTableVersionsOutput";
import { GetTablesInput } from "./types/GetTablesInput";
import { GetTablesOutput } from "./types/GetTablesOutput";
import { GetTagsInput } from "./types/GetTagsInput";
import { GetTagsOutput } from "./types/GetTagsOutput";
import { GetTriggerInput } from "./types/GetTriggerInput";
import { GetTriggerOutput } from "./types/GetTriggerOutput";
import { GetTriggersInput } from "./types/GetTriggersInput";
import { GetTriggersOutput } from "./types/GetTriggersOutput";
import { GetUserDefinedFunctionInput } from "./types/GetUserDefinedFunctionInput";
import { GetUserDefinedFunctionOutput } from "./types/GetUserDefinedFunctionOutput";
import { GetUserDefinedFunctionsInput } from "./types/GetUserDefinedFunctionsInput";
import { GetUserDefinedFunctionsOutput } from "./types/GetUserDefinedFunctionsOutput";
import { GetWorkflowInput } from "./types/GetWorkflowInput";
import { GetWorkflowOutput } from "./types/GetWorkflowOutput";
import { GetWorkflowRunInput } from "./types/GetWorkflowRunInput";
import { GetWorkflowRunOutput } from "./types/GetWorkflowRunOutput";
import { GetWorkflowRunPropertiesInput } from "./types/GetWorkflowRunPropertiesInput";
import { GetWorkflowRunPropertiesOutput } from "./types/GetWorkflowRunPropertiesOutput";
import { GetWorkflowRunsInput } from "./types/GetWorkflowRunsInput";
import { GetWorkflowRunsOutput } from "./types/GetWorkflowRunsOutput";
import { GlueEncryptionException } from "./types/GlueEncryptionException";
import { IdempotentParameterMismatchException } from "./types/IdempotentParameterMismatchException";
import { ImportCatalogToGlueInput } from "./types/ImportCatalogToGlueInput";
import { ImportCatalogToGlueOutput } from "./types/ImportCatalogToGlueOutput";
import { InternalServiceException } from "./types/InternalServiceException";
import { InvalidInputException } from "./types/InvalidInputException";
import { ListCrawlersInput } from "./types/ListCrawlersInput";
import { ListCrawlersOutput } from "./types/ListCrawlersOutput";
import { ListDevEndpointsInput } from "./types/ListDevEndpointsInput";
import { ListDevEndpointsOutput } from "./types/ListDevEndpointsOutput";
import { ListJobsInput } from "./types/ListJobsInput";
import { ListJobsOutput } from "./types/ListJobsOutput";
import { ListTriggersInput } from "./types/ListTriggersInput";
import { ListTriggersOutput } from "./types/ListTriggersOutput";
import { ListWorkflowsInput } from "./types/ListWorkflowsInput";
import { ListWorkflowsOutput } from "./types/ListWorkflowsOutput";
import { NoScheduleException } from "./types/NoScheduleException";
import { OperationTimeoutException } from "./types/OperationTimeoutException";
import { PutDataCatalogEncryptionSettingsInput } from "./types/PutDataCatalogEncryptionSettingsInput";
import { PutDataCatalogEncryptionSettingsOutput } from "./types/PutDataCatalogEncryptionSettingsOutput";
import { PutResourcePolicyInput } from "./types/PutResourcePolicyInput";
import { PutResourcePolicyOutput } from "./types/PutResourcePolicyOutput";
import { PutWorkflowRunPropertiesInput } from "./types/PutWorkflowRunPropertiesInput";
import { PutWorkflowRunPropertiesOutput } from "./types/PutWorkflowRunPropertiesOutput";
import { ResetJobBookmarkInput } from "./types/ResetJobBookmarkInput";
import { ResetJobBookmarkOutput } from "./types/ResetJobBookmarkOutput";
import { ResourceNumberLimitExceededException } from "./types/ResourceNumberLimitExceededException";
import { SchedulerNotRunningException } from "./types/SchedulerNotRunningException";
import { SchedulerRunningException } from "./types/SchedulerRunningException";
import { SchedulerTransitioningException } from "./types/SchedulerTransitioningException";
import { StartCrawlerInput } from "./types/StartCrawlerInput";
import { StartCrawlerOutput } from "./types/StartCrawlerOutput";
import { StartCrawlerScheduleInput } from "./types/StartCrawlerScheduleInput";
import { StartCrawlerScheduleOutput } from "./types/StartCrawlerScheduleOutput";
import { StartJobRunInput } from "./types/StartJobRunInput";
import { StartJobRunOutput } from "./types/StartJobRunOutput";
import { StartTriggerInput } from "./types/StartTriggerInput";
import { StartTriggerOutput } from "./types/StartTriggerOutput";
import { StartWorkflowRunInput } from "./types/StartWorkflowRunInput";
import { StartWorkflowRunOutput } from "./types/StartWorkflowRunOutput";
import { StopCrawlerInput } from "./types/StopCrawlerInput";
import { StopCrawlerOutput } from "./types/StopCrawlerOutput";
import { StopCrawlerScheduleInput } from "./types/StopCrawlerScheduleInput";
import { StopCrawlerScheduleOutput } from "./types/StopCrawlerScheduleOutput";
import { StopTriggerInput } from "./types/StopTriggerInput";
import { StopTriggerOutput } from "./types/StopTriggerOutput";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { UpdateClassifierInput } from "./types/UpdateClassifierInput";
import { UpdateClassifierOutput } from "./types/UpdateClassifierOutput";
import { UpdateConnectionInput } from "./types/UpdateConnectionInput";
import { UpdateConnectionOutput } from "./types/UpdateConnectionOutput";
import { UpdateCrawlerInput } from "./types/UpdateCrawlerInput";
import { UpdateCrawlerOutput } from "./types/UpdateCrawlerOutput";
import { UpdateCrawlerScheduleInput } from "./types/UpdateCrawlerScheduleInput";
import { UpdateCrawlerScheduleOutput } from "./types/UpdateCrawlerScheduleOutput";
import { UpdateDatabaseInput } from "./types/UpdateDatabaseInput";
import { UpdateDatabaseOutput } from "./types/UpdateDatabaseOutput";
import { UpdateDevEndpointInput } from "./types/UpdateDevEndpointInput";
import { UpdateDevEndpointOutput } from "./types/UpdateDevEndpointOutput";
import { UpdateJobInput } from "./types/UpdateJobInput";
import { UpdateJobOutput } from "./types/UpdateJobOutput";
import { UpdatePartitionInput } from "./types/UpdatePartitionInput";
import { UpdatePartitionOutput } from "./types/UpdatePartitionOutput";
import { UpdateTableInput } from "./types/UpdateTableInput";
import { UpdateTableOutput } from "./types/UpdateTableOutput";
import { UpdateTriggerInput } from "./types/UpdateTriggerInput";
import { UpdateTriggerOutput } from "./types/UpdateTriggerOutput";
import { UpdateUserDefinedFunctionInput } from "./types/UpdateUserDefinedFunctionInput";
import { UpdateUserDefinedFunctionOutput } from "./types/UpdateUserDefinedFunctionOutput";
import { UpdateWorkflowInput } from "./types/UpdateWorkflowInput";
import { UpdateWorkflowOutput } from "./types/UpdateWorkflowOutput";
import { ValidationException } from "./types/ValidationException";
import { VersionMismatchException } from "./types/VersionMismatchException";
import { BatchCreatePartitionCommand } from "./commands/BatchCreatePartitionCommand";
import { BatchDeleteConnectionCommand } from "./commands/BatchDeleteConnectionCommand";
import { BatchDeletePartitionCommand } from "./commands/BatchDeletePartitionCommand";
import { BatchDeleteTableCommand } from "./commands/BatchDeleteTableCommand";
import { BatchDeleteTableVersionCommand } from "./commands/BatchDeleteTableVersionCommand";
import { BatchGetCrawlersCommand } from "./commands/BatchGetCrawlersCommand";
import { BatchGetDevEndpointsCommand } from "./commands/BatchGetDevEndpointsCommand";
import { BatchGetJobsCommand } from "./commands/BatchGetJobsCommand";
import { BatchGetPartitionCommand } from "./commands/BatchGetPartitionCommand";
import { BatchGetTriggersCommand } from "./commands/BatchGetTriggersCommand";
import { BatchGetWorkflowsCommand } from "./commands/BatchGetWorkflowsCommand";
import { BatchStopJobRunCommand } from "./commands/BatchStopJobRunCommand";
import { CreateClassifierCommand } from "./commands/CreateClassifierCommand";
import { CreateConnectionCommand } from "./commands/CreateConnectionCommand";
import { CreateCrawlerCommand } from "./commands/CreateCrawlerCommand";
import { CreateDatabaseCommand } from "./commands/CreateDatabaseCommand";
import { CreateDevEndpointCommand } from "./commands/CreateDevEndpointCommand";
import { CreateJobCommand } from "./commands/CreateJobCommand";
import { CreatePartitionCommand } from "./commands/CreatePartitionCommand";
import { CreateScriptCommand } from "./commands/CreateScriptCommand";
import { CreateSecurityConfigurationCommand } from "./commands/CreateSecurityConfigurationCommand";
import { CreateTableCommand } from "./commands/CreateTableCommand";
import { CreateTriggerCommand } from "./commands/CreateTriggerCommand";
import { CreateUserDefinedFunctionCommand } from "./commands/CreateUserDefinedFunctionCommand";
import { CreateWorkflowCommand } from "./commands/CreateWorkflowCommand";
import { DeleteClassifierCommand } from "./commands/DeleteClassifierCommand";
import { DeleteConnectionCommand } from "./commands/DeleteConnectionCommand";
import { DeleteCrawlerCommand } from "./commands/DeleteCrawlerCommand";
import { DeleteDatabaseCommand } from "./commands/DeleteDatabaseCommand";
import { DeleteDevEndpointCommand } from "./commands/DeleteDevEndpointCommand";
import { DeleteJobCommand } from "./commands/DeleteJobCommand";
import { DeletePartitionCommand } from "./commands/DeletePartitionCommand";
import { DeleteResourcePolicyCommand } from "./commands/DeleteResourcePolicyCommand";
import { DeleteSecurityConfigurationCommand } from "./commands/DeleteSecurityConfigurationCommand";
import { DeleteTableCommand } from "./commands/DeleteTableCommand";
import { DeleteTableVersionCommand } from "./commands/DeleteTableVersionCommand";
import { DeleteTriggerCommand } from "./commands/DeleteTriggerCommand";
import { DeleteUserDefinedFunctionCommand } from "./commands/DeleteUserDefinedFunctionCommand";
import { DeleteWorkflowCommand } from "./commands/DeleteWorkflowCommand";
import { GetCatalogImportStatusCommand } from "./commands/GetCatalogImportStatusCommand";
import { GetClassifierCommand } from "./commands/GetClassifierCommand";
import { GetClassifiersCommand } from "./commands/GetClassifiersCommand";
import { GetConnectionCommand } from "./commands/GetConnectionCommand";
import { GetConnectionsCommand } from "./commands/GetConnectionsCommand";
import { GetCrawlerCommand } from "./commands/GetCrawlerCommand";
import { GetCrawlerMetricsCommand } from "./commands/GetCrawlerMetricsCommand";
import { GetCrawlersCommand } from "./commands/GetCrawlersCommand";
import { GetDataCatalogEncryptionSettingsCommand } from "./commands/GetDataCatalogEncryptionSettingsCommand";
import { GetDatabaseCommand } from "./commands/GetDatabaseCommand";
import { GetDatabasesCommand } from "./commands/GetDatabasesCommand";
import { GetDataflowGraphCommand } from "./commands/GetDataflowGraphCommand";
import { GetDevEndpointCommand } from "./commands/GetDevEndpointCommand";
import { GetDevEndpointsCommand } from "./commands/GetDevEndpointsCommand";
import { GetJobBookmarkCommand } from "./commands/GetJobBookmarkCommand";
import { GetJobBookmarksCommand } from "./commands/GetJobBookmarksCommand";
import { GetJobCommand } from "./commands/GetJobCommand";
import { GetJobRunCommand } from "./commands/GetJobRunCommand";
import { GetJobRunsCommand } from "./commands/GetJobRunsCommand";
import { GetJobsCommand } from "./commands/GetJobsCommand";
import { GetMappingCommand } from "./commands/GetMappingCommand";
import { GetPartitionCommand } from "./commands/GetPartitionCommand";
import { GetPartitionsCommand } from "./commands/GetPartitionsCommand";
import { GetPlanCommand } from "./commands/GetPlanCommand";
import { GetResourcePolicyCommand } from "./commands/GetResourcePolicyCommand";
import { GetSecurityConfigurationCommand } from "./commands/GetSecurityConfigurationCommand";
import { GetSecurityConfigurationsCommand } from "./commands/GetSecurityConfigurationsCommand";
import { GetTableCommand } from "./commands/GetTableCommand";
import { GetTableVersionCommand } from "./commands/GetTableVersionCommand";
import { GetTableVersionsCommand } from "./commands/GetTableVersionsCommand";
import { GetTablesCommand } from "./commands/GetTablesCommand";
import { GetTagsCommand } from "./commands/GetTagsCommand";
import { GetTriggerCommand } from "./commands/GetTriggerCommand";
import { GetTriggersCommand } from "./commands/GetTriggersCommand";
import { GetUserDefinedFunctionCommand } from "./commands/GetUserDefinedFunctionCommand";
import { GetUserDefinedFunctionsCommand } from "./commands/GetUserDefinedFunctionsCommand";
import { GetWorkflowCommand } from "./commands/GetWorkflowCommand";
import { GetWorkflowRunCommand } from "./commands/GetWorkflowRunCommand";
import { GetWorkflowRunPropertiesCommand } from "./commands/GetWorkflowRunPropertiesCommand";
import { GetWorkflowRunsCommand } from "./commands/GetWorkflowRunsCommand";
import { ImportCatalogToGlueCommand } from "./commands/ImportCatalogToGlueCommand";
import { ListCrawlersCommand } from "./commands/ListCrawlersCommand";
import { ListDevEndpointsCommand } from "./commands/ListDevEndpointsCommand";
import { ListJobsCommand } from "./commands/ListJobsCommand";
import { ListTriggersCommand } from "./commands/ListTriggersCommand";
import { ListWorkflowsCommand } from "./commands/ListWorkflowsCommand";
import { PutDataCatalogEncryptionSettingsCommand } from "./commands/PutDataCatalogEncryptionSettingsCommand";
import { PutResourcePolicyCommand } from "./commands/PutResourcePolicyCommand";
import { PutWorkflowRunPropertiesCommand } from "./commands/PutWorkflowRunPropertiesCommand";
import { ResetJobBookmarkCommand } from "./commands/ResetJobBookmarkCommand";
import { StartCrawlerCommand } from "./commands/StartCrawlerCommand";
import { StartCrawlerScheduleCommand } from "./commands/StartCrawlerScheduleCommand";
import { StartJobRunCommand } from "./commands/StartJobRunCommand";
import { StartTriggerCommand } from "./commands/StartTriggerCommand";
import { StartWorkflowRunCommand } from "./commands/StartWorkflowRunCommand";
import { StopCrawlerCommand } from "./commands/StopCrawlerCommand";
import { StopCrawlerScheduleCommand } from "./commands/StopCrawlerScheduleCommand";
import { StopTriggerCommand } from "./commands/StopTriggerCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateClassifierCommand } from "./commands/UpdateClassifierCommand";
import { UpdateConnectionCommand } from "./commands/UpdateConnectionCommand";
import { UpdateCrawlerCommand } from "./commands/UpdateCrawlerCommand";
import { UpdateCrawlerScheduleCommand } from "./commands/UpdateCrawlerScheduleCommand";
import { UpdateDatabaseCommand } from "./commands/UpdateDatabaseCommand";
import { UpdateDevEndpointCommand } from "./commands/UpdateDevEndpointCommand";
import { UpdateJobCommand } from "./commands/UpdateJobCommand";
import { UpdatePartitionCommand } from "./commands/UpdatePartitionCommand";
import { UpdateTableCommand } from "./commands/UpdateTableCommand";
import { UpdateTriggerCommand } from "./commands/UpdateTriggerCommand";
import { UpdateUserDefinedFunctionCommand } from "./commands/UpdateUserDefinedFunctionCommand";
import { UpdateWorkflowCommand } from "./commands/UpdateWorkflowCommand";

export class Glue extends GlueClient {
  /**
   * <p>Creates one or more partitions in a batch operation.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {AlreadyExistsException} <p>A resource to be created or added already exists.</p>
   *   - {ResourceNumberLimitExceededException} <p>A resource numerical limit was exceeded.</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {GlueEncryptionException} <p>An encryption operation failed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchCreatePartition(
    args: BatchCreatePartitionInput
  ): Promise<BatchCreatePartitionOutput>;
  public batchCreatePartition(
    args: BatchCreatePartitionInput,
    cb: (err: any, data?: BatchCreatePartitionOutput) => void
  ): void;
  public batchCreatePartition(
    args: BatchCreatePartitionInput,
    cb?: (err: any, data?: BatchCreatePartitionOutput) => void
  ): Promise<BatchCreatePartitionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchCreatePartitionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a list of connection definitions from the Data Catalog.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchDeleteConnection(
    args: BatchDeleteConnectionInput
  ): Promise<BatchDeleteConnectionOutput>;
  public batchDeleteConnection(
    args: BatchDeleteConnectionInput,
    cb: (err: any, data?: BatchDeleteConnectionOutput) => void
  ): void;
  public batchDeleteConnection(
    args: BatchDeleteConnectionInput,
    cb?: (err: any, data?: BatchDeleteConnectionOutput) => void
  ): Promise<BatchDeleteConnectionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchDeleteConnectionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes one or more partitions in a batch operation.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchDeletePartition(
    args: BatchDeletePartitionInput
  ): Promise<BatchDeletePartitionOutput>;
  public batchDeletePartition(
    args: BatchDeletePartitionInput,
    cb: (err: any, data?: BatchDeletePartitionOutput) => void
  ): void;
  public batchDeletePartition(
    args: BatchDeletePartitionInput,
    cb?: (err: any, data?: BatchDeletePartitionOutput) => void
  ): Promise<BatchDeletePartitionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchDeletePartitionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes multiple tables at once.</p> <note> <p>After completing this operation, you will no longer have access to the table versions and partitions that belong to the deleted table. AWS Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service.</p> <p>To ensure immediate deletion of all related resources, before calling <code>BatchDeleteTable</code>, use <code>DeleteTableVersion</code> or <code>BatchDeleteTableVersion</code>, and <code>DeletePartition</code> or <code>BatchDeletePartition</code>, to delete any resources that belong to the table.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchDeleteTable(
    args: BatchDeleteTableInput
  ): Promise<BatchDeleteTableOutput>;
  public batchDeleteTable(
    args: BatchDeleteTableInput,
    cb: (err: any, data?: BatchDeleteTableOutput) => void
  ): void;
  public batchDeleteTable(
    args: BatchDeleteTableInput,
    cb?: (err: any, data?: BatchDeleteTableOutput) => void
  ): Promise<BatchDeleteTableOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchDeleteTableCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a specified batch of versions of a table.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchDeleteTableVersion(
    args: BatchDeleteTableVersionInput
  ): Promise<BatchDeleteTableVersionOutput>;
  public batchDeleteTableVersion(
    args: BatchDeleteTableVersionInput,
    cb: (err: any, data?: BatchDeleteTableVersionOutput) => void
  ): void;
  public batchDeleteTableVersion(
    args: BatchDeleteTableVersionInput,
    cb?: (err: any, data?: BatchDeleteTableVersionOutput) => void
  ): Promise<BatchDeleteTableVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchDeleteTableVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of resource metadata for a given list of crawler names. After calling the <code>ListCrawlers</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchGetCrawlers(
    args: BatchGetCrawlersInput
  ): Promise<BatchGetCrawlersOutput>;
  public batchGetCrawlers(
    args: BatchGetCrawlersInput,
    cb: (err: any, data?: BatchGetCrawlersOutput) => void
  ): void;
  public batchGetCrawlers(
    args: BatchGetCrawlersInput,
    cb?: (err: any, data?: BatchGetCrawlersOutput) => void
  ): Promise<BatchGetCrawlersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchGetCrawlersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of resource metadata for a given list of development endpoint names. After calling the <code>ListDevEndpoints</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDeniedException} <p>Access to a resource was denied.</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchGetDevEndpoints(
    args: BatchGetDevEndpointsInput
  ): Promise<BatchGetDevEndpointsOutput>;
  public batchGetDevEndpoints(
    args: BatchGetDevEndpointsInput,
    cb: (err: any, data?: BatchGetDevEndpointsOutput) => void
  ): void;
  public batchGetDevEndpoints(
    args: BatchGetDevEndpointsInput,
    cb?: (err: any, data?: BatchGetDevEndpointsOutput) => void
  ): Promise<BatchGetDevEndpointsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchGetDevEndpointsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of resource metadata for a given list of job names. After calling the <code>ListJobs</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchGetJobs(args: BatchGetJobsInput): Promise<BatchGetJobsOutput>;
  public batchGetJobs(
    args: BatchGetJobsInput,
    cb: (err: any, data?: BatchGetJobsOutput) => void
  ): void;
  public batchGetJobs(
    args: BatchGetJobsInput,
    cb?: (err: any, data?: BatchGetJobsOutput) => void
  ): Promise<BatchGetJobsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchGetJobsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves partitions in a batch request.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {GlueEncryptionException} <p>An encryption operation failed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchGetPartition(
    args: BatchGetPartitionInput
  ): Promise<BatchGetPartitionOutput>;
  public batchGetPartition(
    args: BatchGetPartitionInput,
    cb: (err: any, data?: BatchGetPartitionOutput) => void
  ): void;
  public batchGetPartition(
    args: BatchGetPartitionInput,
    cb?: (err: any, data?: BatchGetPartitionOutput) => void
  ): Promise<BatchGetPartitionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchGetPartitionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of resource metadata for a given list of trigger names. After calling the <code>ListTriggers</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchGetTriggers(
    args: BatchGetTriggersInput
  ): Promise<BatchGetTriggersOutput>;
  public batchGetTriggers(
    args: BatchGetTriggersInput,
    cb: (err: any, data?: BatchGetTriggersOutput) => void
  ): void;
  public batchGetTriggers(
    args: BatchGetTriggersInput,
    cb?: (err: any, data?: BatchGetTriggersOutput) => void
  ): Promise<BatchGetTriggersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchGetTriggersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of resource metadata for a given list of workflow names. After calling the <code>ListWorkflows</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchGetWorkflows(
    args: BatchGetWorkflowsInput
  ): Promise<BatchGetWorkflowsOutput>;
  public batchGetWorkflows(
    args: BatchGetWorkflowsInput,
    cb: (err: any, data?: BatchGetWorkflowsOutput) => void
  ): void;
  public batchGetWorkflows(
    args: BatchGetWorkflowsInput,
    cb?: (err: any, data?: BatchGetWorkflowsOutput) => void
  ): Promise<BatchGetWorkflowsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchGetWorkflowsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Stops one or more job runs for a specified job definition.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchStopJobRun(
    args: BatchStopJobRunInput
  ): Promise<BatchStopJobRunOutput>;
  public batchStopJobRun(
    args: BatchStopJobRunInput,
    cb: (err: any, data?: BatchStopJobRunOutput) => void
  ): void;
  public batchStopJobRun(
    args: BatchStopJobRunInput,
    cb?: (err: any, data?: BatchStopJobRunOutput) => void
  ): Promise<BatchStopJobRunOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchStopJobRunCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a classifier in the user's account. This can be a <code>GrokClassifier</code>, an <code>XMLClassifier</code>, a <code>JsonClassifier</code>, or a <code>CsvClassifier</code>, depending on which field of the request is present.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AlreadyExistsException} <p>A resource to be created or added already exists.</p>
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createClassifier(
    args: CreateClassifierInput
  ): Promise<CreateClassifierOutput>;
  public createClassifier(
    args: CreateClassifierInput,
    cb: (err: any, data?: CreateClassifierOutput) => void
  ): void;
  public createClassifier(
    args: CreateClassifierInput,
    cb?: (err: any, data?: CreateClassifierOutput) => void
  ): Promise<CreateClassifierOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateClassifierCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a connection definition in the Data Catalog.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AlreadyExistsException} <p>A resource to be created or added already exists.</p>
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {ResourceNumberLimitExceededException} <p>A resource numerical limit was exceeded.</p>
   *   - {GlueEncryptionException} <p>An encryption operation failed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createConnection(
    args: CreateConnectionInput
  ): Promise<CreateConnectionOutput>;
  public createConnection(
    args: CreateConnectionInput,
    cb: (err: any, data?: CreateConnectionOutput) => void
  ): void;
  public createConnection(
    args: CreateConnectionInput,
    cb?: (err: any, data?: CreateConnectionOutput) => void
  ): Promise<CreateConnectionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateConnectionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new crawler with specified targets, role, configuration, and optional schedule. At least one crawl target must be specified, in the <code>s3Targets</code> field, the <code>jdbcTargets</code> field, or the <code>DynamoDBTargets</code> field.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {AlreadyExistsException} <p>A resource to be created or added already exists.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {ResourceNumberLimitExceededException} <p>A resource numerical limit was exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createCrawler(args: CreateCrawlerInput): Promise<CreateCrawlerOutput>;
  public createCrawler(
    args: CreateCrawlerInput,
    cb: (err: any, data?: CreateCrawlerOutput) => void
  ): void;
  public createCrawler(
    args: CreateCrawlerInput,
    cb?: (err: any, data?: CreateCrawlerOutput) => void
  ): Promise<CreateCrawlerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateCrawlerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new database in a Data Catalog.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {AlreadyExistsException} <p>A resource to be created or added already exists.</p>
   *   - {ResourceNumberLimitExceededException} <p>A resource numerical limit was exceeded.</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {GlueEncryptionException} <p>An encryption operation failed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDatabase(
    args: CreateDatabaseInput
  ): Promise<CreateDatabaseOutput>;
  public createDatabase(
    args: CreateDatabaseInput,
    cb: (err: any, data?: CreateDatabaseOutput) => void
  ): void;
  public createDatabase(
    args: CreateDatabaseInput,
    cb?: (err: any, data?: CreateDatabaseOutput) => void
  ): Promise<CreateDatabaseOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDatabaseCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new development endpoint.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDeniedException} <p>Access to a resource was denied.</p>
   *   - {AlreadyExistsException} <p>A resource to be created or added already exists.</p>
   *   - {IdempotentParameterMismatchException} <p>The same unique identifier was associated with two different records.</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {ValidationException} <p>A value could not be validated.</p>
   *   - {ResourceNumberLimitExceededException} <p>A resource numerical limit was exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDevEndpoint(
    args: CreateDevEndpointInput
  ): Promise<CreateDevEndpointOutput>;
  public createDevEndpoint(
    args: CreateDevEndpointInput,
    cb: (err: any, data?: CreateDevEndpointOutput) => void
  ): void;
  public createDevEndpoint(
    args: CreateDevEndpointInput,
    cb?: (err: any, data?: CreateDevEndpointOutput) => void
  ): Promise<CreateDevEndpointOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDevEndpointCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new job definition.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {IdempotentParameterMismatchException} <p>The same unique identifier was associated with two different records.</p>
   *   - {AlreadyExistsException} <p>A resource to be created or added already exists.</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {ResourceNumberLimitExceededException} <p>A resource numerical limit was exceeded.</p>
   *   - {ConcurrentModificationException} <p>Two processes are trying to modify a resource simultaneously.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createJob(args: CreateJobInput): Promise<CreateJobOutput>;
  public createJob(
    args: CreateJobInput,
    cb: (err: any, data?: CreateJobOutput) => void
  ): void;
  public createJob(
    args: CreateJobInput,
    cb?: (err: any, data?: CreateJobOutput) => void
  ): Promise<CreateJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new partition.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {AlreadyExistsException} <p>A resource to be created or added already exists.</p>
   *   - {ResourceNumberLimitExceededException} <p>A resource numerical limit was exceeded.</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {GlueEncryptionException} <p>An encryption operation failed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createPartition(
    args: CreatePartitionInput
  ): Promise<CreatePartitionOutput>;
  public createPartition(
    args: CreatePartitionInput,
    cb: (err: any, data?: CreatePartitionOutput) => void
  ): void;
  public createPartition(
    args: CreatePartitionInput,
    cb?: (err: any, data?: CreatePartitionOutput) => void
  ): Promise<CreatePartitionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreatePartitionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Transforms a directed acyclic graph (DAG) into code.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createScript(args: CreateScriptInput): Promise<CreateScriptOutput>;
  public createScript(
    args: CreateScriptInput,
    cb: (err: any, data?: CreateScriptOutput) => void
  ): void;
  public createScript(
    args: CreateScriptInput,
    cb?: (err: any, data?: CreateScriptOutput) => void
  ): Promise<CreateScriptOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateScriptCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new security configuration. A security configuration is a set of security properties that can be used by AWS Glue. You can use a security configuration to encrypt data at rest. For information about using security configurations in AWS Glue, see <a href="https://docs.aws.amazon.com/glue/latest/dg/encryption-security-configuration.html">Encrypting Data Written by Crawlers, Jobs, and Development Endpoints</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AlreadyExistsException} <p>A resource to be created or added already exists.</p>
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {ResourceNumberLimitExceededException} <p>A resource numerical limit was exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createSecurityConfiguration(
    args: CreateSecurityConfigurationInput
  ): Promise<CreateSecurityConfigurationOutput>;
  public createSecurityConfiguration(
    args: CreateSecurityConfigurationInput,
    cb: (err: any, data?: CreateSecurityConfigurationOutput) => void
  ): void;
  public createSecurityConfiguration(
    args: CreateSecurityConfigurationInput,
    cb?: (err: any, data?: CreateSecurityConfigurationOutput) => void
  ): Promise<CreateSecurityConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateSecurityConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new table definition in the Data Catalog.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AlreadyExistsException} <p>A resource to be created or added already exists.</p>
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {ResourceNumberLimitExceededException} <p>A resource numerical limit was exceeded.</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {GlueEncryptionException} <p>An encryption operation failed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createTable(args: CreateTableInput): Promise<CreateTableOutput>;
  public createTable(
    args: CreateTableInput,
    cb: (err: any, data?: CreateTableOutput) => void
  ): void;
  public createTable(
    args: CreateTableInput,
    cb?: (err: any, data?: CreateTableOutput) => void
  ): Promise<CreateTableOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateTableCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new trigger.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AlreadyExistsException} <p>A resource to be created or added already exists.</p>
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {IdempotentParameterMismatchException} <p>The same unique identifier was associated with two different records.</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {ResourceNumberLimitExceededException} <p>A resource numerical limit was exceeded.</p>
   *   - {ConcurrentModificationException} <p>Two processes are trying to modify a resource simultaneously.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createTrigger(args: CreateTriggerInput): Promise<CreateTriggerOutput>;
  public createTrigger(
    args: CreateTriggerInput,
    cb: (err: any, data?: CreateTriggerOutput) => void
  ): void;
  public createTrigger(
    args: CreateTriggerInput,
    cb?: (err: any, data?: CreateTriggerOutput) => void
  ): Promise<CreateTriggerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateTriggerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new function definition in the Data Catalog.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AlreadyExistsException} <p>A resource to be created or added already exists.</p>
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {ResourceNumberLimitExceededException} <p>A resource numerical limit was exceeded.</p>
   *   - {GlueEncryptionException} <p>An encryption operation failed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createUserDefinedFunction(
    args: CreateUserDefinedFunctionInput
  ): Promise<CreateUserDefinedFunctionOutput>;
  public createUserDefinedFunction(
    args: CreateUserDefinedFunctionInput,
    cb: (err: any, data?: CreateUserDefinedFunctionOutput) => void
  ): void;
  public createUserDefinedFunction(
    args: CreateUserDefinedFunctionInput,
    cb?: (err: any, data?: CreateUserDefinedFunctionOutput) => void
  ): Promise<CreateUserDefinedFunctionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateUserDefinedFunctionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new workflow.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AlreadyExistsException} <p>A resource to be created or added already exists.</p>
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {ResourceNumberLimitExceededException} <p>A resource numerical limit was exceeded.</p>
   *   - {ConcurrentModificationException} <p>Two processes are trying to modify a resource simultaneously.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createWorkflow(
    args: CreateWorkflowInput
  ): Promise<CreateWorkflowOutput>;
  public createWorkflow(
    args: CreateWorkflowInput,
    cb: (err: any, data?: CreateWorkflowOutput) => void
  ): void;
  public createWorkflow(
    args: CreateWorkflowInput,
    cb?: (err: any, data?: CreateWorkflowOutput) => void
  ): Promise<CreateWorkflowOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateWorkflowCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes a classifier from the Data Catalog.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteClassifier(
    args: DeleteClassifierInput
  ): Promise<DeleteClassifierOutput>;
  public deleteClassifier(
    args: DeleteClassifierInput,
    cb: (err: any, data?: DeleteClassifierOutput) => void
  ): void;
  public deleteClassifier(
    args: DeleteClassifierInput,
    cb?: (err: any, data?: DeleteClassifierOutput) => void
  ): Promise<DeleteClassifierOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteClassifierCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a connection from the Data Catalog.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteConnection(
    args: DeleteConnectionInput
  ): Promise<DeleteConnectionOutput>;
  public deleteConnection(
    args: DeleteConnectionInput,
    cb: (err: any, data?: DeleteConnectionOutput) => void
  ): void;
  public deleteConnection(
    args: DeleteConnectionInput,
    cb?: (err: any, data?: DeleteConnectionOutput) => void
  ): Promise<DeleteConnectionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteConnectionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes a specified crawler from the AWS Glue Data Catalog, unless the crawler state is <code>RUNNING</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {CrawlerRunningException} <p>The operation cannot be performed because the crawler is already running.</p>
   *   - {SchedulerTransitioningException} <p>The specified scheduler is transitioning.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteCrawler(args: DeleteCrawlerInput): Promise<DeleteCrawlerOutput>;
  public deleteCrawler(
    args: DeleteCrawlerInput,
    cb: (err: any, data?: DeleteCrawlerOutput) => void
  ): void;
  public deleteCrawler(
    args: DeleteCrawlerInput,
    cb?: (err: any, data?: DeleteCrawlerOutput) => void
  ): Promise<DeleteCrawlerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteCrawlerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes a specified Database from a Data Catalog.</p> <note> <p>After completing this operation, you will no longer have access to the tables (and all table versions and partitions that might belong to the tables) and the user-defined functions in the deleted database. AWS Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service.</p> <p>To ensure immediate deletion of all related resources, before calling <code>DeleteDatabase</code>, use <code>DeleteTableVersion</code> or <code>BatchDeleteTableVersion</code>, <code>DeletePartition</code> or <code>BatchDeletePartition</code>, <code>DeleteUserDefinedFunction</code>, and <code>DeleteTable</code> or <code>BatchDeleteTable</code>, to delete any resources that belong to the database.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDatabase(
    args: DeleteDatabaseInput
  ): Promise<DeleteDatabaseOutput>;
  public deleteDatabase(
    args: DeleteDatabaseInput,
    cb: (err: any, data?: DeleteDatabaseOutput) => void
  ): void;
  public deleteDatabase(
    args: DeleteDatabaseInput,
    cb?: (err: any, data?: DeleteDatabaseOutput) => void
  ): Promise<DeleteDatabaseOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDatabaseCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a specified development endpoint.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDevEndpoint(
    args: DeleteDevEndpointInput
  ): Promise<DeleteDevEndpointOutput>;
  public deleteDevEndpoint(
    args: DeleteDevEndpointInput,
    cb: (err: any, data?: DeleteDevEndpointOutput) => void
  ): void;
  public deleteDevEndpoint(
    args: DeleteDevEndpointInput,
    cb?: (err: any, data?: DeleteDevEndpointOutput) => void
  ): Promise<DeleteDevEndpointOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDevEndpointCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a specified job definition. If the job definition is not found, no exception is thrown.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteJob(args: DeleteJobInput): Promise<DeleteJobOutput>;
  public deleteJob(
    args: DeleteJobInput,
    cb: (err: any, data?: DeleteJobOutput) => void
  ): void;
  public deleteJob(
    args: DeleteJobInput,
    cb?: (err: any, data?: DeleteJobOutput) => void
  ): Promise<DeleteJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a specified partition.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deletePartition(
    args: DeletePartitionInput
  ): Promise<DeletePartitionOutput>;
  public deletePartition(
    args: DeletePartitionInput,
    cb: (err: any, data?: DeletePartitionOutput) => void
  ): void;
  public deletePartition(
    args: DeletePartitionInput,
    cb?: (err: any, data?: DeletePartitionOutput) => void
  ): Promise<DeletePartitionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeletePartitionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a specified policy.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {ConditionCheckFailureException} <p>A specified condition was not satisfied.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteResourcePolicy(
    args: DeleteResourcePolicyInput
  ): Promise<DeleteResourcePolicyOutput>;
  public deleteResourcePolicy(
    args: DeleteResourcePolicyInput,
    cb: (err: any, data?: DeleteResourcePolicyOutput) => void
  ): void;
  public deleteResourcePolicy(
    args: DeleteResourcePolicyInput,
    cb?: (err: any, data?: DeleteResourcePolicyOutput) => void
  ): Promise<DeleteResourcePolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteResourcePolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a specified security configuration.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteSecurityConfiguration(
    args: DeleteSecurityConfigurationInput
  ): Promise<DeleteSecurityConfigurationOutput>;
  public deleteSecurityConfiguration(
    args: DeleteSecurityConfigurationInput,
    cb: (err: any, data?: DeleteSecurityConfigurationOutput) => void
  ): void;
  public deleteSecurityConfiguration(
    args: DeleteSecurityConfigurationInput,
    cb?: (err: any, data?: DeleteSecurityConfigurationOutput) => void
  ): Promise<DeleteSecurityConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteSecurityConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes a table definition from the Data Catalog.</p> <note> <p>After completing this operation, you will no longer have access to the table versions and partitions that belong to the deleted table. AWS Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service.</p> <p>To ensure immediate deletion of all related resources, before calling <code>DeleteTable</code>, use <code>DeleteTableVersion</code> or <code>BatchDeleteTableVersion</code>, and <code>DeletePartition</code> or <code>BatchDeletePartition</code>, to delete any resources that belong to the table.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteTable(args: DeleteTableInput): Promise<DeleteTableOutput>;
  public deleteTable(
    args: DeleteTableInput,
    cb: (err: any, data?: DeleteTableOutput) => void
  ): void;
  public deleteTable(
    args: DeleteTableInput,
    cb?: (err: any, data?: DeleteTableOutput) => void
  ): Promise<DeleteTableOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteTableCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a specified version of a table.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteTableVersion(
    args: DeleteTableVersionInput
  ): Promise<DeleteTableVersionOutput>;
  public deleteTableVersion(
    args: DeleteTableVersionInput,
    cb: (err: any, data?: DeleteTableVersionOutput) => void
  ): void;
  public deleteTableVersion(
    args: DeleteTableVersionInput,
    cb?: (err: any, data?: DeleteTableVersionOutput) => void
  ): Promise<DeleteTableVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteTableVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a specified trigger. If the trigger is not found, no exception is thrown.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {ConcurrentModificationException} <p>Two processes are trying to modify a resource simultaneously.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteTrigger(args: DeleteTriggerInput): Promise<DeleteTriggerOutput>;
  public deleteTrigger(
    args: DeleteTriggerInput,
    cb: (err: any, data?: DeleteTriggerOutput) => void
  ): void;
  public deleteTrigger(
    args: DeleteTriggerInput,
    cb?: (err: any, data?: DeleteTriggerOutput) => void
  ): Promise<DeleteTriggerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteTriggerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an existing function definition from the Data Catalog.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteUserDefinedFunction(
    args: DeleteUserDefinedFunctionInput
  ): Promise<DeleteUserDefinedFunctionOutput>;
  public deleteUserDefinedFunction(
    args: DeleteUserDefinedFunctionInput,
    cb: (err: any, data?: DeleteUserDefinedFunctionOutput) => void
  ): void;
  public deleteUserDefinedFunction(
    args: DeleteUserDefinedFunctionInput,
    cb?: (err: any, data?: DeleteUserDefinedFunctionOutput) => void
  ): Promise<DeleteUserDefinedFunctionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteUserDefinedFunctionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a workflow.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {ConcurrentModificationException} <p>Two processes are trying to modify a resource simultaneously.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteWorkflow(
    args: DeleteWorkflowInput
  ): Promise<DeleteWorkflowOutput>;
  public deleteWorkflow(
    args: DeleteWorkflowInput,
    cb: (err: any, data?: DeleteWorkflowOutput) => void
  ): void;
  public deleteWorkflow(
    args: DeleteWorkflowInput,
    cb?: (err: any, data?: DeleteWorkflowOutput) => void
  ): Promise<DeleteWorkflowOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteWorkflowCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the status of a migration operation.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getCatalogImportStatus(
    args: GetCatalogImportStatusInput
  ): Promise<GetCatalogImportStatusOutput>;
  public getCatalogImportStatus(
    args: GetCatalogImportStatusInput,
    cb: (err: any, data?: GetCatalogImportStatusOutput) => void
  ): void;
  public getCatalogImportStatus(
    args: GetCatalogImportStatusInput,
    cb?: (err: any, data?: GetCatalogImportStatusOutput) => void
  ): Promise<GetCatalogImportStatusOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetCatalogImportStatusCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieve a classifier by name.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getClassifier(args: GetClassifierInput): Promise<GetClassifierOutput>;
  public getClassifier(
    args: GetClassifierInput,
    cb: (err: any, data?: GetClassifierOutput) => void
  ): void;
  public getClassifier(
    args: GetClassifierInput,
    cb?: (err: any, data?: GetClassifierOutput) => void
  ): Promise<GetClassifierOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetClassifierCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all classifier objects in the Data Catalog.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getClassifiers(
    args: GetClassifiersInput
  ): Promise<GetClassifiersOutput>;
  public getClassifiers(
    args: GetClassifiersInput,
    cb: (err: any, data?: GetClassifiersOutput) => void
  ): void;
  public getClassifiers(
    args: GetClassifiersInput,
    cb?: (err: any, data?: GetClassifiersOutput) => void
  ): Promise<GetClassifiersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetClassifiersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a connection definition from the Data Catalog.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {GlueEncryptionException} <p>An encryption operation failed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getConnection(args: GetConnectionInput): Promise<GetConnectionOutput>;
  public getConnection(
    args: GetConnectionInput,
    cb: (err: any, data?: GetConnectionOutput) => void
  ): void;
  public getConnection(
    args: GetConnectionInput,
    cb?: (err: any, data?: GetConnectionOutput) => void
  ): Promise<GetConnectionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetConnectionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a list of connection definitions from the Data Catalog.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {GlueEncryptionException} <p>An encryption operation failed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getConnections(
    args: GetConnectionsInput
  ): Promise<GetConnectionsOutput>;
  public getConnections(
    args: GetConnectionsInput,
    cb: (err: any, data?: GetConnectionsOutput) => void
  ): void;
  public getConnections(
    args: GetConnectionsInput,
    cb?: (err: any, data?: GetConnectionsOutput) => void
  ): Promise<GetConnectionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetConnectionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves metadata for a specified crawler.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getCrawler(args: GetCrawlerInput): Promise<GetCrawlerOutput>;
  public getCrawler(
    args: GetCrawlerInput,
    cb: (err: any, data?: GetCrawlerOutput) => void
  ): void;
  public getCrawler(
    args: GetCrawlerInput,
    cb?: (err: any, data?: GetCrawlerOutput) => void
  ): Promise<GetCrawlerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetCrawlerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves metrics about specified crawlers.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getCrawlerMetrics(
    args: GetCrawlerMetricsInput
  ): Promise<GetCrawlerMetricsOutput>;
  public getCrawlerMetrics(
    args: GetCrawlerMetricsInput,
    cb: (err: any, data?: GetCrawlerMetricsOutput) => void
  ): void;
  public getCrawlerMetrics(
    args: GetCrawlerMetricsInput,
    cb?: (err: any, data?: GetCrawlerMetricsOutput) => void
  ): Promise<GetCrawlerMetricsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetCrawlerMetricsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves metadata for all crawlers defined in the customer account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getCrawlers(args: GetCrawlersInput): Promise<GetCrawlersOutput>;
  public getCrawlers(
    args: GetCrawlersInput,
    cb: (err: any, data?: GetCrawlersOutput) => void
  ): void;
  public getCrawlers(
    args: GetCrawlersInput,
    cb?: (err: any, data?: GetCrawlersOutput) => void
  ): Promise<GetCrawlersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetCrawlersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the security configuration for a specified catalog.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDataCatalogEncryptionSettings(
    args: GetDataCatalogEncryptionSettingsInput
  ): Promise<GetDataCatalogEncryptionSettingsOutput>;
  public getDataCatalogEncryptionSettings(
    args: GetDataCatalogEncryptionSettingsInput,
    cb: (err: any, data?: GetDataCatalogEncryptionSettingsOutput) => void
  ): void;
  public getDataCatalogEncryptionSettings(
    args: GetDataCatalogEncryptionSettingsInput,
    cb?: (err: any, data?: GetDataCatalogEncryptionSettingsOutput) => void
  ): Promise<GetDataCatalogEncryptionSettingsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDataCatalogEncryptionSettingsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the definition of a specified database.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {GlueEncryptionException} <p>An encryption operation failed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDatabase(args: GetDatabaseInput): Promise<GetDatabaseOutput>;
  public getDatabase(
    args: GetDatabaseInput,
    cb: (err: any, data?: GetDatabaseOutput) => void
  ): void;
  public getDatabase(
    args: GetDatabaseInput,
    cb?: (err: any, data?: GetDatabaseOutput) => void
  ): Promise<GetDatabaseOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDatabaseCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves all Databases defined in a given Data Catalog.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {GlueEncryptionException} <p>An encryption operation failed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDatabases(args: GetDatabasesInput): Promise<GetDatabasesOutput>;
  public getDatabases(
    args: GetDatabasesInput,
    cb: (err: any, data?: GetDatabasesOutput) => void
  ): void;
  public getDatabases(
    args: GetDatabasesInput,
    cb?: (err: any, data?: GetDatabasesOutput) => void
  ): Promise<GetDatabasesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDatabasesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Transforms a Python script into a directed acyclic graph (DAG). </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDataflowGraph(
    args: GetDataflowGraphInput
  ): Promise<GetDataflowGraphOutput>;
  public getDataflowGraph(
    args: GetDataflowGraphInput,
    cb: (err: any, data?: GetDataflowGraphOutput) => void
  ): void;
  public getDataflowGraph(
    args: GetDataflowGraphInput,
    cb?: (err: any, data?: GetDataflowGraphOutput) => void
  ): Promise<GetDataflowGraphOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDataflowGraphCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about a specified development endpoint.</p> <note> <p>When you create a development endpoint in a virtual private cloud (VPC), AWS Glue returns only a private IP address, and the public IP address field is not populated. When you create a non-VPC development endpoint, AWS Glue returns only a public IP address.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDevEndpoint(
    args: GetDevEndpointInput
  ): Promise<GetDevEndpointOutput>;
  public getDevEndpoint(
    args: GetDevEndpointInput,
    cb: (err: any, data?: GetDevEndpointOutput) => void
  ): void;
  public getDevEndpoint(
    args: GetDevEndpointInput,
    cb?: (err: any, data?: GetDevEndpointOutput) => void
  ): Promise<GetDevEndpointOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDevEndpointCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves all the development endpoints in this AWS account.</p> <note> <p>When you create a development endpoint in a virtual private cloud (VPC), AWS Glue returns only a private IP address and the public IP address field is not populated. When you create a non-VPC development endpoint, AWS Glue returns only a public IP address.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDevEndpoints(
    args: GetDevEndpointsInput
  ): Promise<GetDevEndpointsOutput>;
  public getDevEndpoints(
    args: GetDevEndpointsInput,
    cb: (err: any, data?: GetDevEndpointsOutput) => void
  ): void;
  public getDevEndpoints(
    args: GetDevEndpointsInput,
    cb?: (err: any, data?: GetDevEndpointsOutput) => void
  ): Promise<GetDevEndpointsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDevEndpointsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves an existing job definition.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getJob(args: GetJobInput): Promise<GetJobOutput>;
  public getJob(
    args: GetJobInput,
    cb: (err: any, data?: GetJobOutput) => void
  ): void;
  public getJob(
    args: GetJobInput,
    cb?: (err: any, data?: GetJobOutput) => void
  ): Promise<GetJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information on a job bookmark entry.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {ValidationException} <p>A value could not be validated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getJobBookmark(
    args: GetJobBookmarkInput
  ): Promise<GetJobBookmarkOutput>;
  public getJobBookmark(
    args: GetJobBookmarkInput,
    cb: (err: any, data?: GetJobBookmarkOutput) => void
  ): void;
  public getJobBookmark(
    args: GetJobBookmarkInput,
    cb?: (err: any, data?: GetJobBookmarkOutput) => void
  ): Promise<GetJobBookmarkOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetJobBookmarkCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information on the job bookmark entries. The list is ordered on decreasing version numbers.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getJobBookmarks(
    args: GetJobBookmarksInput
  ): Promise<GetJobBookmarksOutput>;
  public getJobBookmarks(
    args: GetJobBookmarksInput,
    cb: (err: any, data?: GetJobBookmarksOutput) => void
  ): void;
  public getJobBookmarks(
    args: GetJobBookmarksInput,
    cb?: (err: any, data?: GetJobBookmarksOutput) => void
  ): Promise<GetJobBookmarksOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetJobBookmarksCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the metadata for a given job run.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getJobRun(args: GetJobRunInput): Promise<GetJobRunOutput>;
  public getJobRun(
    args: GetJobRunInput,
    cb: (err: any, data?: GetJobRunOutput) => void
  ): void;
  public getJobRun(
    args: GetJobRunInput,
    cb?: (err: any, data?: GetJobRunOutput) => void
  ): Promise<GetJobRunOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetJobRunCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves metadata for all runs of a given job definition.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getJobRuns(args: GetJobRunsInput): Promise<GetJobRunsOutput>;
  public getJobRuns(
    args: GetJobRunsInput,
    cb: (err: any, data?: GetJobRunsOutput) => void
  ): void;
  public getJobRuns(
    args: GetJobRunsInput,
    cb?: (err: any, data?: GetJobRunsOutput) => void
  ): Promise<GetJobRunsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetJobRunsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves all current job definitions.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getJobs(args: GetJobsInput): Promise<GetJobsOutput>;
  public getJobs(
    args: GetJobsInput,
    cb: (err: any, data?: GetJobsOutput) => void
  ): void;
  public getJobs(
    args: GetJobsInput,
    cb?: (err: any, data?: GetJobsOutput) => void
  ): Promise<GetJobsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetJobsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates mappings.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getMapping(args: GetMappingInput): Promise<GetMappingOutput>;
  public getMapping(
    args: GetMappingInput,
    cb: (err: any, data?: GetMappingOutput) => void
  ): void;
  public getMapping(
    args: GetMappingInput,
    cb?: (err: any, data?: GetMappingOutput) => void
  ): Promise<GetMappingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetMappingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about a specified partition.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {GlueEncryptionException} <p>An encryption operation failed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getPartition(args: GetPartitionInput): Promise<GetPartitionOutput>;
  public getPartition(
    args: GetPartitionInput,
    cb: (err: any, data?: GetPartitionOutput) => void
  ): void;
  public getPartition(
    args: GetPartitionInput,
    cb?: (err: any, data?: GetPartitionOutput) => void
  ): Promise<GetPartitionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetPartitionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about the partitions in a table.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {GlueEncryptionException} <p>An encryption operation failed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getPartitions(args: GetPartitionsInput): Promise<GetPartitionsOutput>;
  public getPartitions(
    args: GetPartitionsInput,
    cb: (err: any, data?: GetPartitionsOutput) => void
  ): void;
  public getPartitions(
    args: GetPartitionsInput,
    cb?: (err: any, data?: GetPartitionsOutput) => void
  ): Promise<GetPartitionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetPartitionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets code to perform a specified mapping.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getPlan(args: GetPlanInput): Promise<GetPlanOutput>;
  public getPlan(
    args: GetPlanInput,
    cb: (err: any, data?: GetPlanOutput) => void
  ): void;
  public getPlan(
    args: GetPlanInput,
    cb?: (err: any, data?: GetPlanOutput) => void
  ): Promise<GetPlanOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetPlanCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a specified resource policy.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getResourcePolicy(
    args: GetResourcePolicyInput
  ): Promise<GetResourcePolicyOutput>;
  public getResourcePolicy(
    args: GetResourcePolicyInput,
    cb: (err: any, data?: GetResourcePolicyOutput) => void
  ): void;
  public getResourcePolicy(
    args: GetResourcePolicyInput,
    cb?: (err: any, data?: GetResourcePolicyOutput) => void
  ): Promise<GetResourcePolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetResourcePolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a specified security configuration.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getSecurityConfiguration(
    args: GetSecurityConfigurationInput
  ): Promise<GetSecurityConfigurationOutput>;
  public getSecurityConfiguration(
    args: GetSecurityConfigurationInput,
    cb: (err: any, data?: GetSecurityConfigurationOutput) => void
  ): void;
  public getSecurityConfiguration(
    args: GetSecurityConfigurationInput,
    cb?: (err: any, data?: GetSecurityConfigurationOutput) => void
  ): Promise<GetSecurityConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetSecurityConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a list of all security configurations.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getSecurityConfigurations(
    args: GetSecurityConfigurationsInput
  ): Promise<GetSecurityConfigurationsOutput>;
  public getSecurityConfigurations(
    args: GetSecurityConfigurationsInput,
    cb: (err: any, data?: GetSecurityConfigurationsOutput) => void
  ): void;
  public getSecurityConfigurations(
    args: GetSecurityConfigurationsInput,
    cb?: (err: any, data?: GetSecurityConfigurationsOutput) => void
  ): Promise<GetSecurityConfigurationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetSecurityConfigurationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the <code>Table</code> definition in a Data Catalog for a specified table.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {GlueEncryptionException} <p>An encryption operation failed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getTable(args: GetTableInput): Promise<GetTableOutput>;
  public getTable(
    args: GetTableInput,
    cb: (err: any, data?: GetTableOutput) => void
  ): void;
  public getTable(
    args: GetTableInput,
    cb?: (err: any, data?: GetTableOutput) => void
  ): Promise<GetTableOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetTableCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a specified version of a table.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {GlueEncryptionException} <p>An encryption operation failed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getTableVersion(
    args: GetTableVersionInput
  ): Promise<GetTableVersionOutput>;
  public getTableVersion(
    args: GetTableVersionInput,
    cb: (err: any, data?: GetTableVersionOutput) => void
  ): void;
  public getTableVersion(
    args: GetTableVersionInput,
    cb?: (err: any, data?: GetTableVersionOutput) => void
  ): Promise<GetTableVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetTableVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a list of strings that identify available versions of a specified table.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {GlueEncryptionException} <p>An encryption operation failed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getTableVersions(
    args: GetTableVersionsInput
  ): Promise<GetTableVersionsOutput>;
  public getTableVersions(
    args: GetTableVersionsInput,
    cb: (err: any, data?: GetTableVersionsOutput) => void
  ): void;
  public getTableVersions(
    args: GetTableVersionsInput,
    cb?: (err: any, data?: GetTableVersionsOutput) => void
  ): Promise<GetTableVersionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetTableVersionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the definitions of some or all of the tables in a given <code>Database</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {GlueEncryptionException} <p>An encryption operation failed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getTables(args: GetTablesInput): Promise<GetTablesOutput>;
  public getTables(
    args: GetTablesInput,
    cb: (err: any, data?: GetTablesOutput) => void
  ): void;
  public getTables(
    args: GetTablesInput,
    cb?: (err: any, data?: GetTablesOutput) => void
  ): Promise<GetTablesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetTablesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a list of tags associated with a resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getTags(args: GetTagsInput): Promise<GetTagsOutput>;
  public getTags(
    args: GetTagsInput,
    cb: (err: any, data?: GetTagsOutput) => void
  ): void;
  public getTags(
    args: GetTagsInput,
    cb?: (err: any, data?: GetTagsOutput) => void
  ): Promise<GetTagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetTagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the definition of a trigger.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getTrigger(args: GetTriggerInput): Promise<GetTriggerOutput>;
  public getTrigger(
    args: GetTriggerInput,
    cb: (err: any, data?: GetTriggerOutput) => void
  ): void;
  public getTrigger(
    args: GetTriggerInput,
    cb?: (err: any, data?: GetTriggerOutput) => void
  ): Promise<GetTriggerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetTriggerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets all the triggers associated with a job.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getTriggers(args: GetTriggersInput): Promise<GetTriggersOutput>;
  public getTriggers(
    args: GetTriggersInput,
    cb: (err: any, data?: GetTriggersOutput) => void
  ): void;
  public getTriggers(
    args: GetTriggersInput,
    cb?: (err: any, data?: GetTriggersOutput) => void
  ): Promise<GetTriggersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetTriggersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a specified function definition from the Data Catalog.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {GlueEncryptionException} <p>An encryption operation failed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getUserDefinedFunction(
    args: GetUserDefinedFunctionInput
  ): Promise<GetUserDefinedFunctionOutput>;
  public getUserDefinedFunction(
    args: GetUserDefinedFunctionInput,
    cb: (err: any, data?: GetUserDefinedFunctionOutput) => void
  ): void;
  public getUserDefinedFunction(
    args: GetUserDefinedFunctionInput,
    cb?: (err: any, data?: GetUserDefinedFunctionOutput) => void
  ): Promise<GetUserDefinedFunctionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetUserDefinedFunctionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a multiple function definitions from the Data Catalog.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {GlueEncryptionException} <p>An encryption operation failed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getUserDefinedFunctions(
    args: GetUserDefinedFunctionsInput
  ): Promise<GetUserDefinedFunctionsOutput>;
  public getUserDefinedFunctions(
    args: GetUserDefinedFunctionsInput,
    cb: (err: any, data?: GetUserDefinedFunctionsOutput) => void
  ): void;
  public getUserDefinedFunctions(
    args: GetUserDefinedFunctionsInput,
    cb?: (err: any, data?: GetUserDefinedFunctionsOutput) => void
  ): Promise<GetUserDefinedFunctionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetUserDefinedFunctionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves resource metadata for a workflow.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getWorkflow(args: GetWorkflowInput): Promise<GetWorkflowOutput>;
  public getWorkflow(
    args: GetWorkflowInput,
    cb: (err: any, data?: GetWorkflowOutput) => void
  ): void;
  public getWorkflow(
    args: GetWorkflowInput,
    cb?: (err: any, data?: GetWorkflowOutput) => void
  ): Promise<GetWorkflowOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetWorkflowCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the metadata for a given workflow run. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getWorkflowRun(
    args: GetWorkflowRunInput
  ): Promise<GetWorkflowRunOutput>;
  public getWorkflowRun(
    args: GetWorkflowRunInput,
    cb: (err: any, data?: GetWorkflowRunOutput) => void
  ): void;
  public getWorkflowRun(
    args: GetWorkflowRunInput,
    cb?: (err: any, data?: GetWorkflowRunOutput) => void
  ): Promise<GetWorkflowRunOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetWorkflowRunCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the workflow run properties which were set during the run.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getWorkflowRunProperties(
    args: GetWorkflowRunPropertiesInput
  ): Promise<GetWorkflowRunPropertiesOutput>;
  public getWorkflowRunProperties(
    args: GetWorkflowRunPropertiesInput,
    cb: (err: any, data?: GetWorkflowRunPropertiesOutput) => void
  ): void;
  public getWorkflowRunProperties(
    args: GetWorkflowRunPropertiesInput,
    cb?: (err: any, data?: GetWorkflowRunPropertiesOutput) => void
  ): Promise<GetWorkflowRunPropertiesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetWorkflowRunPropertiesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves metadata for all runs of a given workflow.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getWorkflowRuns(
    args: GetWorkflowRunsInput
  ): Promise<GetWorkflowRunsOutput>;
  public getWorkflowRuns(
    args: GetWorkflowRunsInput,
    cb: (err: any, data?: GetWorkflowRunsOutput) => void
  ): void;
  public getWorkflowRuns(
    args: GetWorkflowRunsInput,
    cb?: (err: any, data?: GetWorkflowRunsOutput) => void
  ): Promise<GetWorkflowRunsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetWorkflowRunsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Imports an existing Athena Data Catalog to AWS Glue</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public importCatalogToGlue(
    args: ImportCatalogToGlueInput
  ): Promise<ImportCatalogToGlueOutput>;
  public importCatalogToGlue(
    args: ImportCatalogToGlueInput,
    cb: (err: any, data?: ImportCatalogToGlueOutput) => void
  ): void;
  public importCatalogToGlue(
    args: ImportCatalogToGlueInput,
    cb?: (err: any, data?: ImportCatalogToGlueOutput) => void
  ): Promise<ImportCatalogToGlueOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ImportCatalogToGlueCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the names of all crawler resources in this AWS account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.</p> <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listCrawlers(args: ListCrawlersInput): Promise<ListCrawlersOutput>;
  public listCrawlers(
    args: ListCrawlersInput,
    cb: (err: any, data?: ListCrawlersOutput) => void
  ): void;
  public listCrawlers(
    args: ListCrawlersInput,
    cb?: (err: any, data?: ListCrawlersOutput) => void
  ): Promise<ListCrawlersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListCrawlersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the names of all <code>DevEndpoint</code> resources in this AWS account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.</p> <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listDevEndpoints(
    args: ListDevEndpointsInput
  ): Promise<ListDevEndpointsOutput>;
  public listDevEndpoints(
    args: ListDevEndpointsInput,
    cb: (err: any, data?: ListDevEndpointsOutput) => void
  ): void;
  public listDevEndpoints(
    args: ListDevEndpointsInput,
    cb?: (err: any, data?: ListDevEndpointsOutput) => void
  ): Promise<ListDevEndpointsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListDevEndpointsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the names of all job resources in this AWS account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.</p> <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listJobs(args: ListJobsInput): Promise<ListJobsOutput>;
  public listJobs(
    args: ListJobsInput,
    cb: (err: any, data?: ListJobsOutput) => void
  ): void;
  public listJobs(
    args: ListJobsInput,
    cb?: (err: any, data?: ListJobsOutput) => void
  ): Promise<ListJobsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListJobsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the names of all trigger resources in this AWS account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.</p> <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTriggers(args: ListTriggersInput): Promise<ListTriggersOutput>;
  public listTriggers(
    args: ListTriggersInput,
    cb: (err: any, data?: ListTriggersOutput) => void
  ): void;
  public listTriggers(
    args: ListTriggersInput,
    cb?: (err: any, data?: ListTriggersOutput) => void
  ): Promise<ListTriggersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTriggersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists names of workflows created in the account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listWorkflows(args: ListWorkflowsInput): Promise<ListWorkflowsOutput>;
  public listWorkflows(
    args: ListWorkflowsInput,
    cb: (err: any, data?: ListWorkflowsOutput) => void
  ): void;
  public listWorkflows(
    args: ListWorkflowsInput,
    cb?: (err: any, data?: ListWorkflowsOutput) => void
  ): Promise<ListWorkflowsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListWorkflowsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets the security configuration for a specified catalog. After the configuration has been set, the specified encryption is applied to every catalog write thereafter.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putDataCatalogEncryptionSettings(
    args: PutDataCatalogEncryptionSettingsInput
  ): Promise<PutDataCatalogEncryptionSettingsOutput>;
  public putDataCatalogEncryptionSettings(
    args: PutDataCatalogEncryptionSettingsInput,
    cb: (err: any, data?: PutDataCatalogEncryptionSettingsOutput) => void
  ): void;
  public putDataCatalogEncryptionSettings(
    args: PutDataCatalogEncryptionSettingsInput,
    cb?: (err: any, data?: PutDataCatalogEncryptionSettingsOutput) => void
  ): Promise<PutDataCatalogEncryptionSettingsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutDataCatalogEncryptionSettingsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets the Data Catalog resource policy for access control.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {ConditionCheckFailureException} <p>A specified condition was not satisfied.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putResourcePolicy(
    args: PutResourcePolicyInput
  ): Promise<PutResourcePolicyOutput>;
  public putResourcePolicy(
    args: PutResourcePolicyInput,
    cb: (err: any, data?: PutResourcePolicyOutput) => void
  ): void;
  public putResourcePolicy(
    args: PutResourcePolicyInput,
    cb?: (err: any, data?: PutResourcePolicyOutput) => void
  ): Promise<PutResourcePolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutResourcePolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Puts the specified workflow run properties for the given workflow run. If a property already exists for the specified run, then it overrides the value otherwise adds the property to existing properties.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AlreadyExistsException} <p>A resource to be created or added already exists.</p>
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {ResourceNumberLimitExceededException} <p>A resource numerical limit was exceeded.</p>
   *   - {ConcurrentModificationException} <p>Two processes are trying to modify a resource simultaneously.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putWorkflowRunProperties(
    args: PutWorkflowRunPropertiesInput
  ): Promise<PutWorkflowRunPropertiesOutput>;
  public putWorkflowRunProperties(
    args: PutWorkflowRunPropertiesInput,
    cb: (err: any, data?: PutWorkflowRunPropertiesOutput) => void
  ): void;
  public putWorkflowRunProperties(
    args: PutWorkflowRunPropertiesInput,
    cb?: (err: any, data?: PutWorkflowRunPropertiesOutput) => void
  ): Promise<PutWorkflowRunPropertiesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutWorkflowRunPropertiesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Resets a bookmark entry.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public resetJobBookmark(
    args: ResetJobBookmarkInput
  ): Promise<ResetJobBookmarkOutput>;
  public resetJobBookmark(
    args: ResetJobBookmarkInput,
    cb: (err: any, data?: ResetJobBookmarkOutput) => void
  ): void;
  public resetJobBookmark(
    args: ResetJobBookmarkInput,
    cb?: (err: any, data?: ResetJobBookmarkOutput) => void
  ): Promise<ResetJobBookmarkOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ResetJobBookmarkCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Starts a crawl using the specified crawler, regardless of what is scheduled. If the crawler is already running, returns a <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-exceptions.html#aws-glue-api-exceptions-CrawlerRunningException">CrawlerRunningException</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {CrawlerRunningException} <p>The operation cannot be performed because the crawler is already running.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startCrawler(args: StartCrawlerInput): Promise<StartCrawlerOutput>;
  public startCrawler(
    args: StartCrawlerInput,
    cb: (err: any, data?: StartCrawlerOutput) => void
  ): void;
  public startCrawler(
    args: StartCrawlerInput,
    cb?: (err: any, data?: StartCrawlerOutput) => void
  ): Promise<StartCrawlerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartCrawlerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Changes the schedule state of the specified crawler to <code>SCHEDULED</code>, unless the crawler is already running or the schedule state is already <code>SCHEDULED</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {SchedulerRunningException} <p>The specified scheduler is already running.</p>
   *   - {SchedulerTransitioningException} <p>The specified scheduler is transitioning.</p>
   *   - {NoScheduleException} <p>There is no applicable schedule.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startCrawlerSchedule(
    args: StartCrawlerScheduleInput
  ): Promise<StartCrawlerScheduleOutput>;
  public startCrawlerSchedule(
    args: StartCrawlerScheduleInput,
    cb: (err: any, data?: StartCrawlerScheduleOutput) => void
  ): void;
  public startCrawlerSchedule(
    args: StartCrawlerScheduleInput,
    cb?: (err: any, data?: StartCrawlerScheduleOutput) => void
  ): Promise<StartCrawlerScheduleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartCrawlerScheduleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Starts a job run using a job definition.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {ResourceNumberLimitExceededException} <p>A resource numerical limit was exceeded.</p>
   *   - {ConcurrentRunsExceededException} <p>Too many jobs are being run concurrently.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startJobRun(args: StartJobRunInput): Promise<StartJobRunOutput>;
  public startJobRun(
    args: StartJobRunInput,
    cb: (err: any, data?: StartJobRunOutput) => void
  ): void;
  public startJobRun(
    args: StartJobRunInput,
    cb?: (err: any, data?: StartJobRunOutput) => void
  ): Promise<StartJobRunOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartJobRunCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Starts an existing trigger. See <a href="https://docs.aws.amazon.com/glue/latest/dg/trigger-job.html">Triggering Jobs</a> for information about how different types of trigger are started.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {ResourceNumberLimitExceededException} <p>A resource numerical limit was exceeded.</p>
   *   - {ConcurrentRunsExceededException} <p>Too many jobs are being run concurrently.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startTrigger(args: StartTriggerInput): Promise<StartTriggerOutput>;
  public startTrigger(
    args: StartTriggerInput,
    cb: (err: any, data?: StartTriggerOutput) => void
  ): void;
  public startTrigger(
    args: StartTriggerInput,
    cb?: (err: any, data?: StartTriggerOutput) => void
  ): Promise<StartTriggerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartTriggerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Starts a new run of the specified workflow.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {ResourceNumberLimitExceededException} <p>A resource numerical limit was exceeded.</p>
   *   - {ConcurrentRunsExceededException} <p>Too many jobs are being run concurrently.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startWorkflowRun(
    args: StartWorkflowRunInput
  ): Promise<StartWorkflowRunOutput>;
  public startWorkflowRun(
    args: StartWorkflowRunInput,
    cb: (err: any, data?: StartWorkflowRunOutput) => void
  ): void;
  public startWorkflowRun(
    args: StartWorkflowRunInput,
    cb?: (err: any, data?: StartWorkflowRunOutput) => void
  ): Promise<StartWorkflowRunOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartWorkflowRunCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>If the specified crawler is running, stops the crawl.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {CrawlerNotRunningException} <p>The specified crawler is not running.</p>
   *   - {CrawlerStoppingException} <p>The specified crawler is stopping.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopCrawler(args: StopCrawlerInput): Promise<StopCrawlerOutput>;
  public stopCrawler(
    args: StopCrawlerInput,
    cb: (err: any, data?: StopCrawlerOutput) => void
  ): void;
  public stopCrawler(
    args: StopCrawlerInput,
    cb?: (err: any, data?: StopCrawlerOutput) => void
  ): Promise<StopCrawlerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopCrawlerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets the schedule state of the specified crawler to <code>NOT_SCHEDULED</code>, but does not stop the crawler if it is already running.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {SchedulerNotRunningException} <p>The specified scheduler is not running.</p>
   *   - {SchedulerTransitioningException} <p>The specified scheduler is transitioning.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopCrawlerSchedule(
    args: StopCrawlerScheduleInput
  ): Promise<StopCrawlerScheduleOutput>;
  public stopCrawlerSchedule(
    args: StopCrawlerScheduleInput,
    cb: (err: any, data?: StopCrawlerScheduleOutput) => void
  ): void;
  public stopCrawlerSchedule(
    args: StopCrawlerScheduleInput,
    cb?: (err: any, data?: StopCrawlerScheduleOutput) => void
  ): Promise<StopCrawlerScheduleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopCrawlerScheduleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Stops a specified trigger.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {ConcurrentModificationException} <p>Two processes are trying to modify a resource simultaneously.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopTrigger(args: StopTriggerInput): Promise<StopTriggerOutput>;
  public stopTrigger(
    args: StopTriggerInput,
    cb: (err: any, data?: StopTriggerOutput) => void
  ): void;
  public stopTrigger(
    args: StopTriggerInput,
    cb?: (err: any, data?: StopTriggerOutput) => void
  ): Promise<StopTriggerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopTriggerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds tags to a resource. A tag is a label you can assign to an AWS resource. In AWS Glue, you can tag only certain resources. For information about what resources you can tag, see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html">AWS Tags in AWS Glue</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public tagResource(args: TagResourceInput): Promise<TagResourceOutput>;
  public tagResource(
    args: TagResourceInput,
    cb: (err: any, data?: TagResourceOutput) => void
  ): void;
  public tagResource(
    args: TagResourceInput,
    cb?: (err: any, data?: TagResourceOutput) => void
  ): Promise<TagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes tags from a resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public untagResource(args: UntagResourceInput): Promise<UntagResourceOutput>;
  public untagResource(
    args: UntagResourceInput,
    cb: (err: any, data?: UntagResourceOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceInput,
    cb?: (err: any, data?: UntagResourceOutput) => void
  ): Promise<UntagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UntagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies an existing classifier (a <code>GrokClassifier</code>, an <code>XMLClassifier</code>, a <code>JsonClassifier</code>, or a <code>CsvClassifier</code>, depending on which field is present).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {VersionMismatchException} <p>There was a version conflict.</p>
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateClassifier(
    args: UpdateClassifierInput
  ): Promise<UpdateClassifierOutput>;
  public updateClassifier(
    args: UpdateClassifierInput,
    cb: (err: any, data?: UpdateClassifierOutput) => void
  ): void;
  public updateClassifier(
    args: UpdateClassifierInput,
    cb?: (err: any, data?: UpdateClassifierOutput) => void
  ): Promise<UpdateClassifierOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateClassifierCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a connection definition in the Data Catalog.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {GlueEncryptionException} <p>An encryption operation failed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateConnection(
    args: UpdateConnectionInput
  ): Promise<UpdateConnectionOutput>;
  public updateConnection(
    args: UpdateConnectionInput,
    cb: (err: any, data?: UpdateConnectionOutput) => void
  ): void;
  public updateConnection(
    args: UpdateConnectionInput,
    cb?: (err: any, data?: UpdateConnectionOutput) => void
  ): Promise<UpdateConnectionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateConnectionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a crawler. If a crawler is running, you must stop it using <code>StopCrawler</code> before updating it.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {VersionMismatchException} <p>There was a version conflict.</p>
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {CrawlerRunningException} <p>The operation cannot be performed because the crawler is already running.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateCrawler(args: UpdateCrawlerInput): Promise<UpdateCrawlerOutput>;
  public updateCrawler(
    args: UpdateCrawlerInput,
    cb: (err: any, data?: UpdateCrawlerOutput) => void
  ): void;
  public updateCrawler(
    args: UpdateCrawlerInput,
    cb?: (err: any, data?: UpdateCrawlerOutput) => void
  ): Promise<UpdateCrawlerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateCrawlerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the schedule of a crawler using a <code>cron</code> expression. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {VersionMismatchException} <p>There was a version conflict.</p>
   *   - {SchedulerTransitioningException} <p>The specified scheduler is transitioning.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateCrawlerSchedule(
    args: UpdateCrawlerScheduleInput
  ): Promise<UpdateCrawlerScheduleOutput>;
  public updateCrawlerSchedule(
    args: UpdateCrawlerScheduleInput,
    cb: (err: any, data?: UpdateCrawlerScheduleOutput) => void
  ): void;
  public updateCrawlerSchedule(
    args: UpdateCrawlerScheduleInput,
    cb?: (err: any, data?: UpdateCrawlerScheduleOutput) => void
  ): Promise<UpdateCrawlerScheduleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateCrawlerScheduleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates an existing database definition in a Data Catalog.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {GlueEncryptionException} <p>An encryption operation failed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateDatabase(
    args: UpdateDatabaseInput
  ): Promise<UpdateDatabaseOutput>;
  public updateDatabase(
    args: UpdateDatabaseInput,
    cb: (err: any, data?: UpdateDatabaseOutput) => void
  ): void;
  public updateDatabase(
    args: UpdateDatabaseInput,
    cb?: (err: any, data?: UpdateDatabaseOutput) => void
  ): Promise<UpdateDatabaseOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateDatabaseCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a specified development endpoint.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {ValidationException} <p>A value could not be validated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateDevEndpoint(
    args: UpdateDevEndpointInput
  ): Promise<UpdateDevEndpointOutput>;
  public updateDevEndpoint(
    args: UpdateDevEndpointInput,
    cb: (err: any, data?: UpdateDevEndpointOutput) => void
  ): void;
  public updateDevEndpoint(
    args: UpdateDevEndpointInput,
    cb?: (err: any, data?: UpdateDevEndpointOutput) => void
  ): Promise<UpdateDevEndpointOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateDevEndpointCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates an existing job definition.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {ConcurrentModificationException} <p>Two processes are trying to modify a resource simultaneously.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateJob(args: UpdateJobInput): Promise<UpdateJobOutput>;
  public updateJob(
    args: UpdateJobInput,
    cb: (err: any, data?: UpdateJobOutput) => void
  ): void;
  public updateJob(
    args: UpdateJobInput,
    cb?: (err: any, data?: UpdateJobOutput) => void
  ): Promise<UpdateJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a partition.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {GlueEncryptionException} <p>An encryption operation failed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updatePartition(
    args: UpdatePartitionInput
  ): Promise<UpdatePartitionOutput>;
  public updatePartition(
    args: UpdatePartitionInput,
    cb: (err: any, data?: UpdatePartitionOutput) => void
  ): void;
  public updatePartition(
    args: UpdatePartitionInput,
    cb?: (err: any, data?: UpdatePartitionOutput) => void
  ): Promise<UpdatePartitionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdatePartitionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a metadata table in the Data Catalog.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {ConcurrentModificationException} <p>Two processes are trying to modify a resource simultaneously.</p>
   *   - {ResourceNumberLimitExceededException} <p>A resource numerical limit was exceeded.</p>
   *   - {GlueEncryptionException} <p>An encryption operation failed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateTable(args: UpdateTableInput): Promise<UpdateTableOutput>;
  public updateTable(
    args: UpdateTableInput,
    cb: (err: any, data?: UpdateTableOutput) => void
  ): void;
  public updateTable(
    args: UpdateTableInput,
    cb?: (err: any, data?: UpdateTableOutput) => void
  ): Promise<UpdateTableOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateTableCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a trigger definition.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {ConcurrentModificationException} <p>Two processes are trying to modify a resource simultaneously.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateTrigger(args: UpdateTriggerInput): Promise<UpdateTriggerOutput>;
  public updateTrigger(
    args: UpdateTriggerInput,
    cb: (err: any, data?: UpdateTriggerOutput) => void
  ): void;
  public updateTrigger(
    args: UpdateTriggerInput,
    cb?: (err: any, data?: UpdateTriggerOutput) => void
  ): Promise<UpdateTriggerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateTriggerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates an existing function definition in the Data Catalog.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {GlueEncryptionException} <p>An encryption operation failed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateUserDefinedFunction(
    args: UpdateUserDefinedFunctionInput
  ): Promise<UpdateUserDefinedFunctionOutput>;
  public updateUserDefinedFunction(
    args: UpdateUserDefinedFunctionInput,
    cb: (err: any, data?: UpdateUserDefinedFunctionOutput) => void
  ): void;
  public updateUserDefinedFunction(
    args: UpdateUserDefinedFunctionInput,
    cb?: (err: any, data?: UpdateUserDefinedFunctionOutput) => void
  ): Promise<UpdateUserDefinedFunctionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateUserDefinedFunctionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates an existing workflow.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input provided was not valid.</p>
   *   - {EntityNotFoundException} <p>A specified entity does not exist</p>
   *   - {InternalServiceException} <p>An internal service error occurred.</p>
   *   - {OperationTimeoutException} <p>The operation timed out.</p>
   *   - {ConcurrentModificationException} <p>Two processes are trying to modify a resource simultaneously.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateWorkflow(
    args: UpdateWorkflowInput
  ): Promise<UpdateWorkflowOutput>;
  public updateWorkflow(
    args: UpdateWorkflowInput,
    cb: (err: any, data?: UpdateWorkflowOutput) => void
  ): void;
  public updateWorkflow(
    args: UpdateWorkflowInput,
    cb?: (err: any, data?: UpdateWorkflowOutput) => void
  ): Promise<UpdateWorkflowOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateWorkflowCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
