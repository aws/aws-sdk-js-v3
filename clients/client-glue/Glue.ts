import { GlueClient } from "./GlueClient";
import {
  BatchCreatePartitionCommand,
  BatchCreatePartitionCommandInput,
  BatchCreatePartitionCommandOutput,
} from "./commands/BatchCreatePartitionCommand";
import {
  BatchDeleteConnectionCommand,
  BatchDeleteConnectionCommandInput,
  BatchDeleteConnectionCommandOutput,
} from "./commands/BatchDeleteConnectionCommand";
import {
  BatchDeletePartitionCommand,
  BatchDeletePartitionCommandInput,
  BatchDeletePartitionCommandOutput,
} from "./commands/BatchDeletePartitionCommand";
import {
  BatchDeleteTableCommand,
  BatchDeleteTableCommandInput,
  BatchDeleteTableCommandOutput,
} from "./commands/BatchDeleteTableCommand";
import {
  BatchDeleteTableVersionCommand,
  BatchDeleteTableVersionCommandInput,
  BatchDeleteTableVersionCommandOutput,
} from "./commands/BatchDeleteTableVersionCommand";
import {
  BatchGetCrawlersCommand,
  BatchGetCrawlersCommandInput,
  BatchGetCrawlersCommandOutput,
} from "./commands/BatchGetCrawlersCommand";
import {
  BatchGetDevEndpointsCommand,
  BatchGetDevEndpointsCommandInput,
  BatchGetDevEndpointsCommandOutput,
} from "./commands/BatchGetDevEndpointsCommand";
import {
  BatchGetJobsCommand,
  BatchGetJobsCommandInput,
  BatchGetJobsCommandOutput,
} from "./commands/BatchGetJobsCommand";
import {
  BatchGetPartitionCommand,
  BatchGetPartitionCommandInput,
  BatchGetPartitionCommandOutput,
} from "./commands/BatchGetPartitionCommand";
import {
  BatchGetTriggersCommand,
  BatchGetTriggersCommandInput,
  BatchGetTriggersCommandOutput,
} from "./commands/BatchGetTriggersCommand";
import {
  BatchGetWorkflowsCommand,
  BatchGetWorkflowsCommandInput,
  BatchGetWorkflowsCommandOutput,
} from "./commands/BatchGetWorkflowsCommand";
import {
  BatchStopJobRunCommand,
  BatchStopJobRunCommandInput,
  BatchStopJobRunCommandOutput,
} from "./commands/BatchStopJobRunCommand";
import {
  CancelMLTaskRunCommand,
  CancelMLTaskRunCommandInput,
  CancelMLTaskRunCommandOutput,
} from "./commands/CancelMLTaskRunCommand";
import {
  CreateClassifierCommand,
  CreateClassifierCommandInput,
  CreateClassifierCommandOutput,
} from "./commands/CreateClassifierCommand";
import {
  CreateConnectionCommand,
  CreateConnectionCommandInput,
  CreateConnectionCommandOutput,
} from "./commands/CreateConnectionCommand";
import {
  CreateCrawlerCommand,
  CreateCrawlerCommandInput,
  CreateCrawlerCommandOutput,
} from "./commands/CreateCrawlerCommand";
import {
  CreateDatabaseCommand,
  CreateDatabaseCommandInput,
  CreateDatabaseCommandOutput,
} from "./commands/CreateDatabaseCommand";
import {
  CreateDevEndpointCommand,
  CreateDevEndpointCommandInput,
  CreateDevEndpointCommandOutput,
} from "./commands/CreateDevEndpointCommand";
import { CreateJobCommand, CreateJobCommandInput, CreateJobCommandOutput } from "./commands/CreateJobCommand";
import {
  CreateMLTransformCommand,
  CreateMLTransformCommandInput,
  CreateMLTransformCommandOutput,
} from "./commands/CreateMLTransformCommand";
import {
  CreatePartitionCommand,
  CreatePartitionCommandInput,
  CreatePartitionCommandOutput,
} from "./commands/CreatePartitionCommand";
import {
  CreateScriptCommand,
  CreateScriptCommandInput,
  CreateScriptCommandOutput,
} from "./commands/CreateScriptCommand";
import {
  CreateSecurityConfigurationCommand,
  CreateSecurityConfigurationCommandInput,
  CreateSecurityConfigurationCommandOutput,
} from "./commands/CreateSecurityConfigurationCommand";
import { CreateTableCommand, CreateTableCommandInput, CreateTableCommandOutput } from "./commands/CreateTableCommand";
import {
  CreateTriggerCommand,
  CreateTriggerCommandInput,
  CreateTriggerCommandOutput,
} from "./commands/CreateTriggerCommand";
import {
  CreateUserDefinedFunctionCommand,
  CreateUserDefinedFunctionCommandInput,
  CreateUserDefinedFunctionCommandOutput,
} from "./commands/CreateUserDefinedFunctionCommand";
import {
  CreateWorkflowCommand,
  CreateWorkflowCommandInput,
  CreateWorkflowCommandOutput,
} from "./commands/CreateWorkflowCommand";
import {
  DeleteClassifierCommand,
  DeleteClassifierCommandInput,
  DeleteClassifierCommandOutput,
} from "./commands/DeleteClassifierCommand";
import {
  DeleteConnectionCommand,
  DeleteConnectionCommandInput,
  DeleteConnectionCommandOutput,
} from "./commands/DeleteConnectionCommand";
import {
  DeleteCrawlerCommand,
  DeleteCrawlerCommandInput,
  DeleteCrawlerCommandOutput,
} from "./commands/DeleteCrawlerCommand";
import {
  DeleteDatabaseCommand,
  DeleteDatabaseCommandInput,
  DeleteDatabaseCommandOutput,
} from "./commands/DeleteDatabaseCommand";
import {
  DeleteDevEndpointCommand,
  DeleteDevEndpointCommandInput,
  DeleteDevEndpointCommandOutput,
} from "./commands/DeleteDevEndpointCommand";
import { DeleteJobCommand, DeleteJobCommandInput, DeleteJobCommandOutput } from "./commands/DeleteJobCommand";
import {
  DeleteMLTransformCommand,
  DeleteMLTransformCommandInput,
  DeleteMLTransformCommandOutput,
} from "./commands/DeleteMLTransformCommand";
import {
  DeletePartitionCommand,
  DeletePartitionCommandInput,
  DeletePartitionCommandOutput,
} from "./commands/DeletePartitionCommand";
import {
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import {
  DeleteSecurityConfigurationCommand,
  DeleteSecurityConfigurationCommandInput,
  DeleteSecurityConfigurationCommandOutput,
} from "./commands/DeleteSecurityConfigurationCommand";
import { DeleteTableCommand, DeleteTableCommandInput, DeleteTableCommandOutput } from "./commands/DeleteTableCommand";
import {
  DeleteTableVersionCommand,
  DeleteTableVersionCommandInput,
  DeleteTableVersionCommandOutput,
} from "./commands/DeleteTableVersionCommand";
import {
  DeleteTriggerCommand,
  DeleteTriggerCommandInput,
  DeleteTriggerCommandOutput,
} from "./commands/DeleteTriggerCommand";
import {
  DeleteUserDefinedFunctionCommand,
  DeleteUserDefinedFunctionCommandInput,
  DeleteUserDefinedFunctionCommandOutput,
} from "./commands/DeleteUserDefinedFunctionCommand";
import {
  DeleteWorkflowCommand,
  DeleteWorkflowCommandInput,
  DeleteWorkflowCommandOutput,
} from "./commands/DeleteWorkflowCommand";
import {
  GetCatalogImportStatusCommand,
  GetCatalogImportStatusCommandInput,
  GetCatalogImportStatusCommandOutput,
} from "./commands/GetCatalogImportStatusCommand";
import {
  GetClassifierCommand,
  GetClassifierCommandInput,
  GetClassifierCommandOutput,
} from "./commands/GetClassifierCommand";
import {
  GetClassifiersCommand,
  GetClassifiersCommandInput,
  GetClassifiersCommandOutput,
} from "./commands/GetClassifiersCommand";
import {
  GetConnectionCommand,
  GetConnectionCommandInput,
  GetConnectionCommandOutput,
} from "./commands/GetConnectionCommand";
import {
  GetConnectionsCommand,
  GetConnectionsCommandInput,
  GetConnectionsCommandOutput,
} from "./commands/GetConnectionsCommand";
import { GetCrawlerCommand, GetCrawlerCommandInput, GetCrawlerCommandOutput } from "./commands/GetCrawlerCommand";
import {
  GetCrawlerMetricsCommand,
  GetCrawlerMetricsCommandInput,
  GetCrawlerMetricsCommandOutput,
} from "./commands/GetCrawlerMetricsCommand";
import { GetCrawlersCommand, GetCrawlersCommandInput, GetCrawlersCommandOutput } from "./commands/GetCrawlersCommand";
import {
  GetDataCatalogEncryptionSettingsCommand,
  GetDataCatalogEncryptionSettingsCommandInput,
  GetDataCatalogEncryptionSettingsCommandOutput,
} from "./commands/GetDataCatalogEncryptionSettingsCommand";
import { GetDatabaseCommand, GetDatabaseCommandInput, GetDatabaseCommandOutput } from "./commands/GetDatabaseCommand";
import {
  GetDatabasesCommand,
  GetDatabasesCommandInput,
  GetDatabasesCommandOutput,
} from "./commands/GetDatabasesCommand";
import {
  GetDataflowGraphCommand,
  GetDataflowGraphCommandInput,
  GetDataflowGraphCommandOutput,
} from "./commands/GetDataflowGraphCommand";
import {
  GetDevEndpointCommand,
  GetDevEndpointCommandInput,
  GetDevEndpointCommandOutput,
} from "./commands/GetDevEndpointCommand";
import {
  GetDevEndpointsCommand,
  GetDevEndpointsCommandInput,
  GetDevEndpointsCommandOutput,
} from "./commands/GetDevEndpointsCommand";
import {
  GetJobBookmarkCommand,
  GetJobBookmarkCommandInput,
  GetJobBookmarkCommandOutput,
} from "./commands/GetJobBookmarkCommand";
import { GetJobCommand, GetJobCommandInput, GetJobCommandOutput } from "./commands/GetJobCommand";
import { GetJobRunCommand, GetJobRunCommandInput, GetJobRunCommandOutput } from "./commands/GetJobRunCommand";
import { GetJobRunsCommand, GetJobRunsCommandInput, GetJobRunsCommandOutput } from "./commands/GetJobRunsCommand";
import { GetJobsCommand, GetJobsCommandInput, GetJobsCommandOutput } from "./commands/GetJobsCommand";
import {
  GetMLTaskRunCommand,
  GetMLTaskRunCommandInput,
  GetMLTaskRunCommandOutput,
} from "./commands/GetMLTaskRunCommand";
import {
  GetMLTaskRunsCommand,
  GetMLTaskRunsCommandInput,
  GetMLTaskRunsCommandOutput,
} from "./commands/GetMLTaskRunsCommand";
import {
  GetMLTransformCommand,
  GetMLTransformCommandInput,
  GetMLTransformCommandOutput,
} from "./commands/GetMLTransformCommand";
import {
  GetMLTransformsCommand,
  GetMLTransformsCommandInput,
  GetMLTransformsCommandOutput,
} from "./commands/GetMLTransformsCommand";
import { GetMappingCommand, GetMappingCommandInput, GetMappingCommandOutput } from "./commands/GetMappingCommand";
import {
  GetPartitionCommand,
  GetPartitionCommandInput,
  GetPartitionCommandOutput,
} from "./commands/GetPartitionCommand";
import {
  GetPartitionsCommand,
  GetPartitionsCommandInput,
  GetPartitionsCommandOutput,
} from "./commands/GetPartitionsCommand";
import { GetPlanCommand, GetPlanCommandInput, GetPlanCommandOutput } from "./commands/GetPlanCommand";
import {
  GetResourcePolicyCommand,
  GetResourcePolicyCommandInput,
  GetResourcePolicyCommandOutput,
} from "./commands/GetResourcePolicyCommand";
import {
  GetSecurityConfigurationCommand,
  GetSecurityConfigurationCommandInput,
  GetSecurityConfigurationCommandOutput,
} from "./commands/GetSecurityConfigurationCommand";
import {
  GetSecurityConfigurationsCommand,
  GetSecurityConfigurationsCommandInput,
  GetSecurityConfigurationsCommandOutput,
} from "./commands/GetSecurityConfigurationsCommand";
import { GetTableCommand, GetTableCommandInput, GetTableCommandOutput } from "./commands/GetTableCommand";
import {
  GetTableVersionCommand,
  GetTableVersionCommandInput,
  GetTableVersionCommandOutput,
} from "./commands/GetTableVersionCommand";
import {
  GetTableVersionsCommand,
  GetTableVersionsCommandInput,
  GetTableVersionsCommandOutput,
} from "./commands/GetTableVersionsCommand";
import { GetTablesCommand, GetTablesCommandInput, GetTablesCommandOutput } from "./commands/GetTablesCommand";
import { GetTagsCommand, GetTagsCommandInput, GetTagsCommandOutput } from "./commands/GetTagsCommand";
import { GetTriggerCommand, GetTriggerCommandInput, GetTriggerCommandOutput } from "./commands/GetTriggerCommand";
import { GetTriggersCommand, GetTriggersCommandInput, GetTriggersCommandOutput } from "./commands/GetTriggersCommand";
import {
  GetUserDefinedFunctionCommand,
  GetUserDefinedFunctionCommandInput,
  GetUserDefinedFunctionCommandOutput,
} from "./commands/GetUserDefinedFunctionCommand";
import {
  GetUserDefinedFunctionsCommand,
  GetUserDefinedFunctionsCommandInput,
  GetUserDefinedFunctionsCommandOutput,
} from "./commands/GetUserDefinedFunctionsCommand";
import { GetWorkflowCommand, GetWorkflowCommandInput, GetWorkflowCommandOutput } from "./commands/GetWorkflowCommand";
import {
  GetWorkflowRunCommand,
  GetWorkflowRunCommandInput,
  GetWorkflowRunCommandOutput,
} from "./commands/GetWorkflowRunCommand";
import {
  GetWorkflowRunPropertiesCommand,
  GetWorkflowRunPropertiesCommandInput,
  GetWorkflowRunPropertiesCommandOutput,
} from "./commands/GetWorkflowRunPropertiesCommand";
import {
  GetWorkflowRunsCommand,
  GetWorkflowRunsCommandInput,
  GetWorkflowRunsCommandOutput,
} from "./commands/GetWorkflowRunsCommand";
import {
  ImportCatalogToGlueCommand,
  ImportCatalogToGlueCommandInput,
  ImportCatalogToGlueCommandOutput,
} from "./commands/ImportCatalogToGlueCommand";
import {
  ListCrawlersCommand,
  ListCrawlersCommandInput,
  ListCrawlersCommandOutput,
} from "./commands/ListCrawlersCommand";
import {
  ListDevEndpointsCommand,
  ListDevEndpointsCommandInput,
  ListDevEndpointsCommandOutput,
} from "./commands/ListDevEndpointsCommand";
import { ListJobsCommand, ListJobsCommandInput, ListJobsCommandOutput } from "./commands/ListJobsCommand";
import {
  ListTriggersCommand,
  ListTriggersCommandInput,
  ListTriggersCommandOutput,
} from "./commands/ListTriggersCommand";
import {
  ListWorkflowsCommand,
  ListWorkflowsCommandInput,
  ListWorkflowsCommandOutput,
} from "./commands/ListWorkflowsCommand";
import {
  PutDataCatalogEncryptionSettingsCommand,
  PutDataCatalogEncryptionSettingsCommandInput,
  PutDataCatalogEncryptionSettingsCommandOutput,
} from "./commands/PutDataCatalogEncryptionSettingsCommand";
import {
  PutResourcePolicyCommand,
  PutResourcePolicyCommandInput,
  PutResourcePolicyCommandOutput,
} from "./commands/PutResourcePolicyCommand";
import {
  PutWorkflowRunPropertiesCommand,
  PutWorkflowRunPropertiesCommandInput,
  PutWorkflowRunPropertiesCommandOutput,
} from "./commands/PutWorkflowRunPropertiesCommand";
import {
  ResetJobBookmarkCommand,
  ResetJobBookmarkCommandInput,
  ResetJobBookmarkCommandOutput,
} from "./commands/ResetJobBookmarkCommand";
import {
  SearchTablesCommand,
  SearchTablesCommandInput,
  SearchTablesCommandOutput,
} from "./commands/SearchTablesCommand";
import {
  StartCrawlerCommand,
  StartCrawlerCommandInput,
  StartCrawlerCommandOutput,
} from "./commands/StartCrawlerCommand";
import {
  StartCrawlerScheduleCommand,
  StartCrawlerScheduleCommandInput,
  StartCrawlerScheduleCommandOutput,
} from "./commands/StartCrawlerScheduleCommand";
import {
  StartExportLabelsTaskRunCommand,
  StartExportLabelsTaskRunCommandInput,
  StartExportLabelsTaskRunCommandOutput,
} from "./commands/StartExportLabelsTaskRunCommand";
import {
  StartImportLabelsTaskRunCommand,
  StartImportLabelsTaskRunCommandInput,
  StartImportLabelsTaskRunCommandOutput,
} from "./commands/StartImportLabelsTaskRunCommand";
import { StartJobRunCommand, StartJobRunCommandInput, StartJobRunCommandOutput } from "./commands/StartJobRunCommand";
import {
  StartMLEvaluationTaskRunCommand,
  StartMLEvaluationTaskRunCommandInput,
  StartMLEvaluationTaskRunCommandOutput,
} from "./commands/StartMLEvaluationTaskRunCommand";
import {
  StartMLLabelingSetGenerationTaskRunCommand,
  StartMLLabelingSetGenerationTaskRunCommandInput,
  StartMLLabelingSetGenerationTaskRunCommandOutput,
} from "./commands/StartMLLabelingSetGenerationTaskRunCommand";
import {
  StartTriggerCommand,
  StartTriggerCommandInput,
  StartTriggerCommandOutput,
} from "./commands/StartTriggerCommand";
import {
  StartWorkflowRunCommand,
  StartWorkflowRunCommandInput,
  StartWorkflowRunCommandOutput,
} from "./commands/StartWorkflowRunCommand";
import { StopCrawlerCommand, StopCrawlerCommandInput, StopCrawlerCommandOutput } from "./commands/StopCrawlerCommand";
import {
  StopCrawlerScheduleCommand,
  StopCrawlerScheduleCommandInput,
  StopCrawlerScheduleCommandOutput,
} from "./commands/StopCrawlerScheduleCommand";
import { StopTriggerCommand, StopTriggerCommandInput, StopTriggerCommandOutput } from "./commands/StopTriggerCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateClassifierCommand,
  UpdateClassifierCommandInput,
  UpdateClassifierCommandOutput,
} from "./commands/UpdateClassifierCommand";
import {
  UpdateConnectionCommand,
  UpdateConnectionCommandInput,
  UpdateConnectionCommandOutput,
} from "./commands/UpdateConnectionCommand";
import {
  UpdateCrawlerCommand,
  UpdateCrawlerCommandInput,
  UpdateCrawlerCommandOutput,
} from "./commands/UpdateCrawlerCommand";
import {
  UpdateCrawlerScheduleCommand,
  UpdateCrawlerScheduleCommandInput,
  UpdateCrawlerScheduleCommandOutput,
} from "./commands/UpdateCrawlerScheduleCommand";
import {
  UpdateDatabaseCommand,
  UpdateDatabaseCommandInput,
  UpdateDatabaseCommandOutput,
} from "./commands/UpdateDatabaseCommand";
import {
  UpdateDevEndpointCommand,
  UpdateDevEndpointCommandInput,
  UpdateDevEndpointCommandOutput,
} from "./commands/UpdateDevEndpointCommand";
import { UpdateJobCommand, UpdateJobCommandInput, UpdateJobCommandOutput } from "./commands/UpdateJobCommand";
import {
  UpdateMLTransformCommand,
  UpdateMLTransformCommandInput,
  UpdateMLTransformCommandOutput,
} from "./commands/UpdateMLTransformCommand";
import {
  UpdatePartitionCommand,
  UpdatePartitionCommandInput,
  UpdatePartitionCommandOutput,
} from "./commands/UpdatePartitionCommand";
import { UpdateTableCommand, UpdateTableCommandInput, UpdateTableCommandOutput } from "./commands/UpdateTableCommand";
import {
  UpdateTriggerCommand,
  UpdateTriggerCommandInput,
  UpdateTriggerCommandOutput,
} from "./commands/UpdateTriggerCommand";
import {
  UpdateUserDefinedFunctionCommand,
  UpdateUserDefinedFunctionCommandInput,
  UpdateUserDefinedFunctionCommandOutput,
} from "./commands/UpdateUserDefinedFunctionCommand";
import {
  UpdateWorkflowCommand,
  UpdateWorkflowCommandInput,
  UpdateWorkflowCommandOutput,
} from "./commands/UpdateWorkflowCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <fullname>AWS Glue</fullname>
 *          <p>Defines the public endpoint for the AWS Glue service.</p>
 */
export class Glue extends GlueClient {
  /**
   * <p>Creates one or more partitions in a batch operation.</p>
   */
  public batchCreatePartition(
    args: BatchCreatePartitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchCreatePartitionCommandOutput>;
  public batchCreatePartition(
    args: BatchCreatePartitionCommandInput,
    cb: (err: any, data?: BatchCreatePartitionCommandOutput) => void
  ): void;
  public batchCreatePartition(
    args: BatchCreatePartitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchCreatePartitionCommandOutput) => void
  ): void;
  public batchCreatePartition(
    args: BatchCreatePartitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchCreatePartitionCommandOutput) => void),
    cb?: (err: any, data?: BatchCreatePartitionCommandOutput) => void
  ): Promise<BatchCreatePartitionCommandOutput> | void {
    const command = new BatchCreatePartitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a list of connection definitions from the Data Catalog.</p>
   */
  public batchDeleteConnection(
    args: BatchDeleteConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteConnectionCommandOutput>;
  public batchDeleteConnection(
    args: BatchDeleteConnectionCommandInput,
    cb: (err: any, data?: BatchDeleteConnectionCommandOutput) => void
  ): void;
  public batchDeleteConnection(
    args: BatchDeleteConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteConnectionCommandOutput) => void
  ): void;
  public batchDeleteConnection(
    args: BatchDeleteConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchDeleteConnectionCommandOutput) => void),
    cb?: (err: any, data?: BatchDeleteConnectionCommandOutput) => void
  ): Promise<BatchDeleteConnectionCommandOutput> | void {
    const command = new BatchDeleteConnectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes one or more partitions in a batch operation.</p>
   */
  public batchDeletePartition(
    args: BatchDeletePartitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeletePartitionCommandOutput>;
  public batchDeletePartition(
    args: BatchDeletePartitionCommandInput,
    cb: (err: any, data?: BatchDeletePartitionCommandOutput) => void
  ): void;
  public batchDeletePartition(
    args: BatchDeletePartitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeletePartitionCommandOutput) => void
  ): void;
  public batchDeletePartition(
    args: BatchDeletePartitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchDeletePartitionCommandOutput) => void),
    cb?: (err: any, data?: BatchDeletePartitionCommandOutput) => void
  ): Promise<BatchDeletePartitionCommandOutput> | void {
    const command = new BatchDeletePartitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes multiple tables at once.</p>
   *          <note>
   *             <p>After completing this operation, you no longer have access to the table versions and
   *         partitions that belong to the deleted table. AWS Glue deletes these "orphaned" resources
   *         asynchronously in a timely manner, at the discretion of the service.</p>
   *             <p>To ensure the immediate deletion of all related resources, before calling
   *           <code>BatchDeleteTable</code>, use <code>DeleteTableVersion</code> or
   *           <code>BatchDeleteTableVersion</code>, and <code>DeletePartition</code> or
   *           <code>BatchDeletePartition</code>, to delete any resources that belong to the
   *         table.</p>
   *          </note>
   */
  public batchDeleteTable(
    args: BatchDeleteTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteTableCommandOutput>;
  public batchDeleteTable(
    args: BatchDeleteTableCommandInput,
    cb: (err: any, data?: BatchDeleteTableCommandOutput) => void
  ): void;
  public batchDeleteTable(
    args: BatchDeleteTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteTableCommandOutput) => void
  ): void;
  public batchDeleteTable(
    args: BatchDeleteTableCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchDeleteTableCommandOutput) => void),
    cb?: (err: any, data?: BatchDeleteTableCommandOutput) => void
  ): Promise<BatchDeleteTableCommandOutput> | void {
    const command = new BatchDeleteTableCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a specified batch of versions of a table.</p>
   */
  public batchDeleteTableVersion(
    args: BatchDeleteTableVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteTableVersionCommandOutput>;
  public batchDeleteTableVersion(
    args: BatchDeleteTableVersionCommandInput,
    cb: (err: any, data?: BatchDeleteTableVersionCommandOutput) => void
  ): void;
  public batchDeleteTableVersion(
    args: BatchDeleteTableVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteTableVersionCommandOutput) => void
  ): void;
  public batchDeleteTableVersion(
    args: BatchDeleteTableVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchDeleteTableVersionCommandOutput) => void),
    cb?: (err: any, data?: BatchDeleteTableVersionCommandOutput) => void
  ): Promise<BatchDeleteTableVersionCommandOutput> | void {
    const command = new BatchDeleteTableVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of resource metadata for a given list of crawler names. After calling the <code>ListCrawlers</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.</p>
   */
  public batchGetCrawlers(
    args: BatchGetCrawlersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetCrawlersCommandOutput>;
  public batchGetCrawlers(
    args: BatchGetCrawlersCommandInput,
    cb: (err: any, data?: BatchGetCrawlersCommandOutput) => void
  ): void;
  public batchGetCrawlers(
    args: BatchGetCrawlersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetCrawlersCommandOutput) => void
  ): void;
  public batchGetCrawlers(
    args: BatchGetCrawlersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetCrawlersCommandOutput) => void),
    cb?: (err: any, data?: BatchGetCrawlersCommandOutput) => void
  ): Promise<BatchGetCrawlersCommandOutput> | void {
    const command = new BatchGetCrawlersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of resource metadata for a given list of development endpoint names. After
   *       calling the <code>ListDevEndpoints</code> operation, you can call this operation to access the
   *       data to which you have been granted permissions. This operation supports all IAM permissions,
   *       including permission conditions that uses tags.</p>
   */
  public batchGetDevEndpoints(
    args: BatchGetDevEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetDevEndpointsCommandOutput>;
  public batchGetDevEndpoints(
    args: BatchGetDevEndpointsCommandInput,
    cb: (err: any, data?: BatchGetDevEndpointsCommandOutput) => void
  ): void;
  public batchGetDevEndpoints(
    args: BatchGetDevEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetDevEndpointsCommandOutput) => void
  ): void;
  public batchGetDevEndpoints(
    args: BatchGetDevEndpointsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetDevEndpointsCommandOutput) => void),
    cb?: (err: any, data?: BatchGetDevEndpointsCommandOutput) => void
  ): Promise<BatchGetDevEndpointsCommandOutput> | void {
    const command = new BatchGetDevEndpointsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of resource metadata for a given list of job names. After calling the <code>ListJobs</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.
   * </p>
   */
  public batchGetJobs(
    args: BatchGetJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetJobsCommandOutput>;
  public batchGetJobs(args: BatchGetJobsCommandInput, cb: (err: any, data?: BatchGetJobsCommandOutput) => void): void;
  public batchGetJobs(
    args: BatchGetJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetJobsCommandOutput) => void
  ): void;
  public batchGetJobs(
    args: BatchGetJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetJobsCommandOutput) => void),
    cb?: (err: any, data?: BatchGetJobsCommandOutput) => void
  ): Promise<BatchGetJobsCommandOutput> | void {
    const command = new BatchGetJobsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves partitions in a batch request.</p>
   */
  public batchGetPartition(
    args: BatchGetPartitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetPartitionCommandOutput>;
  public batchGetPartition(
    args: BatchGetPartitionCommandInput,
    cb: (err: any, data?: BatchGetPartitionCommandOutput) => void
  ): void;
  public batchGetPartition(
    args: BatchGetPartitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetPartitionCommandOutput) => void
  ): void;
  public batchGetPartition(
    args: BatchGetPartitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetPartitionCommandOutput) => void),
    cb?: (err: any, data?: BatchGetPartitionCommandOutput) => void
  ): Promise<BatchGetPartitionCommandOutput> | void {
    const command = new BatchGetPartitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of resource metadata for a given list of trigger names. After calling the <code>ListTriggers</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.</p>
   */
  public batchGetTriggers(
    args: BatchGetTriggersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetTriggersCommandOutput>;
  public batchGetTriggers(
    args: BatchGetTriggersCommandInput,
    cb: (err: any, data?: BatchGetTriggersCommandOutput) => void
  ): void;
  public batchGetTriggers(
    args: BatchGetTriggersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetTriggersCommandOutput) => void
  ): void;
  public batchGetTriggers(
    args: BatchGetTriggersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetTriggersCommandOutput) => void),
    cb?: (err: any, data?: BatchGetTriggersCommandOutput) => void
  ): Promise<BatchGetTriggersCommandOutput> | void {
    const command = new BatchGetTriggersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of resource metadata for a given list of workflow names. After calling the <code>ListWorkflows</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.</p>
   */
  public batchGetWorkflows(
    args: BatchGetWorkflowsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetWorkflowsCommandOutput>;
  public batchGetWorkflows(
    args: BatchGetWorkflowsCommandInput,
    cb: (err: any, data?: BatchGetWorkflowsCommandOutput) => void
  ): void;
  public batchGetWorkflows(
    args: BatchGetWorkflowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetWorkflowsCommandOutput) => void
  ): void;
  public batchGetWorkflows(
    args: BatchGetWorkflowsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetWorkflowsCommandOutput) => void),
    cb?: (err: any, data?: BatchGetWorkflowsCommandOutput) => void
  ): Promise<BatchGetWorkflowsCommandOutput> | void {
    const command = new BatchGetWorkflowsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Stops one or more job runs for a specified job definition.</p>
   */
  public batchStopJobRun(
    args: BatchStopJobRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchStopJobRunCommandOutput>;
  public batchStopJobRun(
    args: BatchStopJobRunCommandInput,
    cb: (err: any, data?: BatchStopJobRunCommandOutput) => void
  ): void;
  public batchStopJobRun(
    args: BatchStopJobRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchStopJobRunCommandOutput) => void
  ): void;
  public batchStopJobRun(
    args: BatchStopJobRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchStopJobRunCommandOutput) => void),
    cb?: (err: any, data?: BatchStopJobRunCommandOutput) => void
  ): Promise<BatchStopJobRunCommandOutput> | void {
    const command = new BatchStopJobRunCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Cancels (stops) a task run. Machine learning task runs are asynchronous tasks that AWS
   *       Glue runs on your behalf as part of various machine learning workflows. You can cancel a
   *       machine learning task run at any time by calling <code>CancelMLTaskRun</code> with a task
   *       run's parent transform's <code>TransformID</code> and the task run's <code>TaskRunId</code>. </p>
   */
  public cancelMLTaskRun(
    args: CancelMLTaskRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelMLTaskRunCommandOutput>;
  public cancelMLTaskRun(
    args: CancelMLTaskRunCommandInput,
    cb: (err: any, data?: CancelMLTaskRunCommandOutput) => void
  ): void;
  public cancelMLTaskRun(
    args: CancelMLTaskRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelMLTaskRunCommandOutput) => void
  ): void;
  public cancelMLTaskRun(
    args: CancelMLTaskRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelMLTaskRunCommandOutput) => void),
    cb?: (err: any, data?: CancelMLTaskRunCommandOutput) => void
  ): Promise<CancelMLTaskRunCommandOutput> | void {
    const command = new CancelMLTaskRunCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a classifier in the user's account. This can be a <code>GrokClassifier</code>, an
   *         <code>XMLClassifier</code>, a <code>JsonClassifier</code>, or a <code>CsvClassifier</code>,
   *       depending on which field of the request is present.</p>
   */
  public createClassifier(
    args: CreateClassifierCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateClassifierCommandOutput>;
  public createClassifier(
    args: CreateClassifierCommandInput,
    cb: (err: any, data?: CreateClassifierCommandOutput) => void
  ): void;
  public createClassifier(
    args: CreateClassifierCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateClassifierCommandOutput) => void
  ): void;
  public createClassifier(
    args: CreateClassifierCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateClassifierCommandOutput) => void),
    cb?: (err: any, data?: CreateClassifierCommandOutput) => void
  ): Promise<CreateClassifierCommandOutput> | void {
    const command = new CreateClassifierCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a connection definition in the Data Catalog.</p>
   */
  public createConnection(
    args: CreateConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConnectionCommandOutput>;
  public createConnection(
    args: CreateConnectionCommandInput,
    cb: (err: any, data?: CreateConnectionCommandOutput) => void
  ): void;
  public createConnection(
    args: CreateConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConnectionCommandOutput) => void
  ): void;
  public createConnection(
    args: CreateConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateConnectionCommandOutput) => void),
    cb?: (err: any, data?: CreateConnectionCommandOutput) => void
  ): Promise<CreateConnectionCommandOutput> | void {
    const command = new CreateConnectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new crawler with specified targets, role, configuration, and optional schedule.
   *       At least one crawl target must be specified, in the <code>s3Targets</code> field, the
   *         <code>jdbcTargets</code> field, or the <code>DynamoDBTargets</code> field.</p>
   */
  public createCrawler(
    args: CreateCrawlerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCrawlerCommandOutput>;
  public createCrawler(
    args: CreateCrawlerCommandInput,
    cb: (err: any, data?: CreateCrawlerCommandOutput) => void
  ): void;
  public createCrawler(
    args: CreateCrawlerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCrawlerCommandOutput) => void
  ): void;
  public createCrawler(
    args: CreateCrawlerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateCrawlerCommandOutput) => void),
    cb?: (err: any, data?: CreateCrawlerCommandOutput) => void
  ): Promise<CreateCrawlerCommandOutput> | void {
    const command = new CreateCrawlerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new database in a Data Catalog.</p>
   */
  public createDatabase(
    args: CreateDatabaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDatabaseCommandOutput>;
  public createDatabase(
    args: CreateDatabaseCommandInput,
    cb: (err: any, data?: CreateDatabaseCommandOutput) => void
  ): void;
  public createDatabase(
    args: CreateDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDatabaseCommandOutput) => void
  ): void;
  public createDatabase(
    args: CreateDatabaseCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDatabaseCommandOutput) => void),
    cb?: (err: any, data?: CreateDatabaseCommandOutput) => void
  ): Promise<CreateDatabaseCommandOutput> | void {
    const command = new CreateDatabaseCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new development endpoint.</p>
   */
  public createDevEndpoint(
    args: CreateDevEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDevEndpointCommandOutput>;
  public createDevEndpoint(
    args: CreateDevEndpointCommandInput,
    cb: (err: any, data?: CreateDevEndpointCommandOutput) => void
  ): void;
  public createDevEndpoint(
    args: CreateDevEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDevEndpointCommandOutput) => void
  ): void;
  public createDevEndpoint(
    args: CreateDevEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDevEndpointCommandOutput) => void),
    cb?: (err: any, data?: CreateDevEndpointCommandOutput) => void
  ): Promise<CreateDevEndpointCommandOutput> | void {
    const command = new CreateDevEndpointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new job definition.</p>
   */
  public createJob(args: CreateJobCommandInput, options?: __HttpHandlerOptions): Promise<CreateJobCommandOutput>;
  public createJob(args: CreateJobCommandInput, cb: (err: any, data?: CreateJobCommandOutput) => void): void;
  public createJob(
    args: CreateJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateJobCommandOutput) => void
  ): void;
  public createJob(
    args: CreateJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateJobCommandOutput) => void),
    cb?: (err: any, data?: CreateJobCommandOutput) => void
  ): Promise<CreateJobCommandOutput> | void {
    const command = new CreateJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an AWS Glue machine learning transform. This operation creates the transform and
   *       all the necessary parameters to train it.</p>
   *
   * 	        <p>Call this operation as the first step in the process of using a machine learning transform
   *       (such as the <code>FindMatches</code> transform) for deduplicating data. You can provide an
   *       optional <code>Description</code>, in addition to the parameters that you want to use for your
   *       algorithm.</p>
   *
   *          <p>You must also specify certain parameters for the tasks that AWS Glue runs on your
   *       behalf as part of learning from your data and creating a high-quality machine learning
   *       transform. These parameters include <code>Role</code>, and optionally,
   *         <code>AllocatedCapacity</code>, <code>Timeout</code>, and <code>MaxRetries</code>. For more
   *       information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html">Jobs</a>.</p>
   */
  public createMLTransform(
    args: CreateMLTransformCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMLTransformCommandOutput>;
  public createMLTransform(
    args: CreateMLTransformCommandInput,
    cb: (err: any, data?: CreateMLTransformCommandOutput) => void
  ): void;
  public createMLTransform(
    args: CreateMLTransformCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMLTransformCommandOutput) => void
  ): void;
  public createMLTransform(
    args: CreateMLTransformCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateMLTransformCommandOutput) => void),
    cb?: (err: any, data?: CreateMLTransformCommandOutput) => void
  ): Promise<CreateMLTransformCommandOutput> | void {
    const command = new CreateMLTransformCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new partition.</p>
   */
  public createPartition(
    args: CreatePartitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePartitionCommandOutput>;
  public createPartition(
    args: CreatePartitionCommandInput,
    cb: (err: any, data?: CreatePartitionCommandOutput) => void
  ): void;
  public createPartition(
    args: CreatePartitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePartitionCommandOutput) => void
  ): void;
  public createPartition(
    args: CreatePartitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreatePartitionCommandOutput) => void),
    cb?: (err: any, data?: CreatePartitionCommandOutput) => void
  ): Promise<CreatePartitionCommandOutput> | void {
    const command = new CreatePartitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Transforms a directed acyclic graph (DAG) into code.</p>
   */
  public createScript(
    args: CreateScriptCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateScriptCommandOutput>;
  public createScript(args: CreateScriptCommandInput, cb: (err: any, data?: CreateScriptCommandOutput) => void): void;
  public createScript(
    args: CreateScriptCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateScriptCommandOutput) => void
  ): void;
  public createScript(
    args: CreateScriptCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateScriptCommandOutput) => void),
    cb?: (err: any, data?: CreateScriptCommandOutput) => void
  ): Promise<CreateScriptCommandOutput> | void {
    const command = new CreateScriptCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new security configuration. A security configuration is a set of security properties that can be used by AWS Glue. You can use a security configuration to encrypt data at rest. For information about using security configurations in AWS Glue, see <a href="https://docs.aws.amazon.com/glue/latest/dg/encryption-security-configuration.html">Encrypting Data Written by Crawlers, Jobs, and Development Endpoints</a>.</p>
   */
  public createSecurityConfiguration(
    args: CreateSecurityConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSecurityConfigurationCommandOutput>;
  public createSecurityConfiguration(
    args: CreateSecurityConfigurationCommandInput,
    cb: (err: any, data?: CreateSecurityConfigurationCommandOutput) => void
  ): void;
  public createSecurityConfiguration(
    args: CreateSecurityConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSecurityConfigurationCommandOutput) => void
  ): void;
  public createSecurityConfiguration(
    args: CreateSecurityConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSecurityConfigurationCommandOutput) => void),
    cb?: (err: any, data?: CreateSecurityConfigurationCommandOutput) => void
  ): Promise<CreateSecurityConfigurationCommandOutput> | void {
    const command = new CreateSecurityConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new table definition in the Data Catalog.</p>
   */
  public createTable(args: CreateTableCommandInput, options?: __HttpHandlerOptions): Promise<CreateTableCommandOutput>;
  public createTable(args: CreateTableCommandInput, cb: (err: any, data?: CreateTableCommandOutput) => void): void;
  public createTable(
    args: CreateTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTableCommandOutput) => void
  ): void;
  public createTable(
    args: CreateTableCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateTableCommandOutput) => void),
    cb?: (err: any, data?: CreateTableCommandOutput) => void
  ): Promise<CreateTableCommandOutput> | void {
    const command = new CreateTableCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new trigger.</p>
   */
  public createTrigger(
    args: CreateTriggerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTriggerCommandOutput>;
  public createTrigger(
    args: CreateTriggerCommandInput,
    cb: (err: any, data?: CreateTriggerCommandOutput) => void
  ): void;
  public createTrigger(
    args: CreateTriggerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTriggerCommandOutput) => void
  ): void;
  public createTrigger(
    args: CreateTriggerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateTriggerCommandOutput) => void),
    cb?: (err: any, data?: CreateTriggerCommandOutput) => void
  ): Promise<CreateTriggerCommandOutput> | void {
    const command = new CreateTriggerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new function definition in the Data Catalog.</p>
   */
  public createUserDefinedFunction(
    args: CreateUserDefinedFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUserDefinedFunctionCommandOutput>;
  public createUserDefinedFunction(
    args: CreateUserDefinedFunctionCommandInput,
    cb: (err: any, data?: CreateUserDefinedFunctionCommandOutput) => void
  ): void;
  public createUserDefinedFunction(
    args: CreateUserDefinedFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserDefinedFunctionCommandOutput) => void
  ): void;
  public createUserDefinedFunction(
    args: CreateUserDefinedFunctionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateUserDefinedFunctionCommandOutput) => void),
    cb?: (err: any, data?: CreateUserDefinedFunctionCommandOutput) => void
  ): Promise<CreateUserDefinedFunctionCommandOutput> | void {
    const command = new CreateUserDefinedFunctionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new workflow.</p>
   */
  public createWorkflow(
    args: CreateWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkflowCommandOutput>;
  public createWorkflow(
    args: CreateWorkflowCommandInput,
    cb: (err: any, data?: CreateWorkflowCommandOutput) => void
  ): void;
  public createWorkflow(
    args: CreateWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkflowCommandOutput) => void
  ): void;
  public createWorkflow(
    args: CreateWorkflowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateWorkflowCommandOutput) => void),
    cb?: (err: any, data?: CreateWorkflowCommandOutput) => void
  ): Promise<CreateWorkflowCommandOutput> | void {
    const command = new CreateWorkflowCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes a classifier from the Data Catalog.</p>
   */
  public deleteClassifier(
    args: DeleteClassifierCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteClassifierCommandOutput>;
  public deleteClassifier(
    args: DeleteClassifierCommandInput,
    cb: (err: any, data?: DeleteClassifierCommandOutput) => void
  ): void;
  public deleteClassifier(
    args: DeleteClassifierCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteClassifierCommandOutput) => void
  ): void;
  public deleteClassifier(
    args: DeleteClassifierCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteClassifierCommandOutput) => void),
    cb?: (err: any, data?: DeleteClassifierCommandOutput) => void
  ): Promise<DeleteClassifierCommandOutput> | void {
    const command = new DeleteClassifierCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a connection from the Data Catalog.</p>
   */
  public deleteConnection(
    args: DeleteConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConnectionCommandOutput>;
  public deleteConnection(
    args: DeleteConnectionCommandInput,
    cb: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): void;
  public deleteConnection(
    args: DeleteConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): void;
  public deleteConnection(
    args: DeleteConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteConnectionCommandOutput) => void),
    cb?: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): Promise<DeleteConnectionCommandOutput> | void {
    const command = new DeleteConnectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes a specified crawler from the AWS Glue Data Catalog, unless the crawler state is
   *         <code>RUNNING</code>.</p>
   */
  public deleteCrawler(
    args: DeleteCrawlerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCrawlerCommandOutput>;
  public deleteCrawler(
    args: DeleteCrawlerCommandInput,
    cb: (err: any, data?: DeleteCrawlerCommandOutput) => void
  ): void;
  public deleteCrawler(
    args: DeleteCrawlerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCrawlerCommandOutput) => void
  ): void;
  public deleteCrawler(
    args: DeleteCrawlerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteCrawlerCommandOutput) => void),
    cb?: (err: any, data?: DeleteCrawlerCommandOutput) => void
  ): Promise<DeleteCrawlerCommandOutput> | void {
    const command = new DeleteCrawlerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes a specified database from a Data Catalog.</p>
   *          <note>
   *             <p>After completing this operation, you no longer have access to the tables (and all table
   *         versions and partitions that might belong to the tables) and the user-defined functions in
   *         the deleted database. AWS Glue deletes these "orphaned" resources asynchronously in a timely
   *         manner, at the discretion of the service.</p>
   *             <p>To ensure the immediate deletion of all related resources, before calling
   *           <code>DeleteDatabase</code>, use <code>DeleteTableVersion</code> or
   *           <code>BatchDeleteTableVersion</code>, <code>DeletePartition</code> or
   *           <code>BatchDeletePartition</code>, <code>DeleteUserDefinedFunction</code>, and
   *           <code>DeleteTable</code> or <code>BatchDeleteTable</code>, to delete any resources that
   *         belong to the database.</p>
   *          </note>
   */
  public deleteDatabase(
    args: DeleteDatabaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDatabaseCommandOutput>;
  public deleteDatabase(
    args: DeleteDatabaseCommandInput,
    cb: (err: any, data?: DeleteDatabaseCommandOutput) => void
  ): void;
  public deleteDatabase(
    args: DeleteDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDatabaseCommandOutput) => void
  ): void;
  public deleteDatabase(
    args: DeleteDatabaseCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDatabaseCommandOutput) => void),
    cb?: (err: any, data?: DeleteDatabaseCommandOutput) => void
  ): Promise<DeleteDatabaseCommandOutput> | void {
    const command = new DeleteDatabaseCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a specified development endpoint.</p>
   */
  public deleteDevEndpoint(
    args: DeleteDevEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDevEndpointCommandOutput>;
  public deleteDevEndpoint(
    args: DeleteDevEndpointCommandInput,
    cb: (err: any, data?: DeleteDevEndpointCommandOutput) => void
  ): void;
  public deleteDevEndpoint(
    args: DeleteDevEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDevEndpointCommandOutput) => void
  ): void;
  public deleteDevEndpoint(
    args: DeleteDevEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDevEndpointCommandOutput) => void),
    cb?: (err: any, data?: DeleteDevEndpointCommandOutput) => void
  ): Promise<DeleteDevEndpointCommandOutput> | void {
    const command = new DeleteDevEndpointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a specified job definition. If the job definition
   *       is not found, no exception is thrown.</p>
   */
  public deleteJob(args: DeleteJobCommandInput, options?: __HttpHandlerOptions): Promise<DeleteJobCommandOutput>;
  public deleteJob(args: DeleteJobCommandInput, cb: (err: any, data?: DeleteJobCommandOutput) => void): void;
  public deleteJob(
    args: DeleteJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteJobCommandOutput) => void
  ): void;
  public deleteJob(
    args: DeleteJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteJobCommandOutput) => void),
    cb?: (err: any, data?: DeleteJobCommandOutput) => void
  ): Promise<DeleteJobCommandOutput> | void {
    const command = new DeleteJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an AWS Glue machine learning transform. Machine learning transforms are a special
   *       type of transform that use machine learning to learn the details of the transformation to be
   *       performed by learning from examples provided by humans. These transformations are then saved
   *       by AWS Glue. If you no longer need a transform, you can delete it by calling
   *         <code>DeleteMLTransforms</code>. However, any AWS Glue jobs that still reference the deleted
   *       transform will no longer succeed.</p>
   */
  public deleteMLTransform(
    args: DeleteMLTransformCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMLTransformCommandOutput>;
  public deleteMLTransform(
    args: DeleteMLTransformCommandInput,
    cb: (err: any, data?: DeleteMLTransformCommandOutput) => void
  ): void;
  public deleteMLTransform(
    args: DeleteMLTransformCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMLTransformCommandOutput) => void
  ): void;
  public deleteMLTransform(
    args: DeleteMLTransformCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteMLTransformCommandOutput) => void),
    cb?: (err: any, data?: DeleteMLTransformCommandOutput) => void
  ): Promise<DeleteMLTransformCommandOutput> | void {
    const command = new DeleteMLTransformCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a specified partition.</p>
   */
  public deletePartition(
    args: DeletePartitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePartitionCommandOutput>;
  public deletePartition(
    args: DeletePartitionCommandInput,
    cb: (err: any, data?: DeletePartitionCommandOutput) => void
  ): void;
  public deletePartition(
    args: DeletePartitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePartitionCommandOutput) => void
  ): void;
  public deletePartition(
    args: DeletePartitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeletePartitionCommandOutput) => void),
    cb?: (err: any, data?: DeletePartitionCommandOutput) => void
  ): Promise<DeletePartitionCommandOutput> | void {
    const command = new DeletePartitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a specified policy.</p>
   */
  public deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourcePolicyCommandOutput>;
  public deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  public deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  public deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteResourcePolicyCommandOutput) => void),
    cb?: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): Promise<DeleteResourcePolicyCommandOutput> | void {
    const command = new DeleteResourcePolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a specified security configuration.</p>
   */
  public deleteSecurityConfiguration(
    args: DeleteSecurityConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSecurityConfigurationCommandOutput>;
  public deleteSecurityConfiguration(
    args: DeleteSecurityConfigurationCommandInput,
    cb: (err: any, data?: DeleteSecurityConfigurationCommandOutput) => void
  ): void;
  public deleteSecurityConfiguration(
    args: DeleteSecurityConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSecurityConfigurationCommandOutput) => void
  ): void;
  public deleteSecurityConfiguration(
    args: DeleteSecurityConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSecurityConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DeleteSecurityConfigurationCommandOutput) => void
  ): Promise<DeleteSecurityConfigurationCommandOutput> | void {
    const command = new DeleteSecurityConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes a table definition from the Data Catalog.</p>
   *          <note>
   *             <p>After completing this operation, you no longer have access to the table versions and
   *         partitions that belong to the deleted table. AWS Glue deletes these "orphaned" resources
   *         asynchronously in a timely manner, at the discretion of the service.</p>
   *             <p>To ensure the immediate deletion of all related resources, before calling
   *           <code>DeleteTable</code>, use <code>DeleteTableVersion</code> or
   *           <code>BatchDeleteTableVersion</code>, and <code>DeletePartition</code> or
   *           <code>BatchDeletePartition</code>, to delete any resources that belong to the
   *         table.</p>
   *          </note>
   */
  public deleteTable(args: DeleteTableCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTableCommandOutput>;
  public deleteTable(args: DeleteTableCommandInput, cb: (err: any, data?: DeleteTableCommandOutput) => void): void;
  public deleteTable(
    args: DeleteTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTableCommandOutput) => void
  ): void;
  public deleteTable(
    args: DeleteTableCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTableCommandOutput) => void),
    cb?: (err: any, data?: DeleteTableCommandOutput) => void
  ): Promise<DeleteTableCommandOutput> | void {
    const command = new DeleteTableCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a specified version of a table.</p>
   */
  public deleteTableVersion(
    args: DeleteTableVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTableVersionCommandOutput>;
  public deleteTableVersion(
    args: DeleteTableVersionCommandInput,
    cb: (err: any, data?: DeleteTableVersionCommandOutput) => void
  ): void;
  public deleteTableVersion(
    args: DeleteTableVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTableVersionCommandOutput) => void
  ): void;
  public deleteTableVersion(
    args: DeleteTableVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTableVersionCommandOutput) => void),
    cb?: (err: any, data?: DeleteTableVersionCommandOutput) => void
  ): Promise<DeleteTableVersionCommandOutput> | void {
    const command = new DeleteTableVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a specified trigger. If the trigger is not found, no
   *       exception is thrown.</p>
   */
  public deleteTrigger(
    args: DeleteTriggerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTriggerCommandOutput>;
  public deleteTrigger(
    args: DeleteTriggerCommandInput,
    cb: (err: any, data?: DeleteTriggerCommandOutput) => void
  ): void;
  public deleteTrigger(
    args: DeleteTriggerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTriggerCommandOutput) => void
  ): void;
  public deleteTrigger(
    args: DeleteTriggerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTriggerCommandOutput) => void),
    cb?: (err: any, data?: DeleteTriggerCommandOutput) => void
  ): Promise<DeleteTriggerCommandOutput> | void {
    const command = new DeleteTriggerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an existing function definition from the Data Catalog.</p>
   */
  public deleteUserDefinedFunction(
    args: DeleteUserDefinedFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUserDefinedFunctionCommandOutput>;
  public deleteUserDefinedFunction(
    args: DeleteUserDefinedFunctionCommandInput,
    cb: (err: any, data?: DeleteUserDefinedFunctionCommandOutput) => void
  ): void;
  public deleteUserDefinedFunction(
    args: DeleteUserDefinedFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserDefinedFunctionCommandOutput) => void
  ): void;
  public deleteUserDefinedFunction(
    args: DeleteUserDefinedFunctionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteUserDefinedFunctionCommandOutput) => void),
    cb?: (err: any, data?: DeleteUserDefinedFunctionCommandOutput) => void
  ): Promise<DeleteUserDefinedFunctionCommandOutput> | void {
    const command = new DeleteUserDefinedFunctionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a workflow.</p>
   */
  public deleteWorkflow(
    args: DeleteWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkflowCommandOutput>;
  public deleteWorkflow(
    args: DeleteWorkflowCommandInput,
    cb: (err: any, data?: DeleteWorkflowCommandOutput) => void
  ): void;
  public deleteWorkflow(
    args: DeleteWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkflowCommandOutput) => void
  ): void;
  public deleteWorkflow(
    args: DeleteWorkflowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteWorkflowCommandOutput) => void),
    cb?: (err: any, data?: DeleteWorkflowCommandOutput) => void
  ): Promise<DeleteWorkflowCommandOutput> | void {
    const command = new DeleteWorkflowCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the status of a migration operation.</p>
   */
  public getCatalogImportStatus(
    args: GetCatalogImportStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCatalogImportStatusCommandOutput>;
  public getCatalogImportStatus(
    args: GetCatalogImportStatusCommandInput,
    cb: (err: any, data?: GetCatalogImportStatusCommandOutput) => void
  ): void;
  public getCatalogImportStatus(
    args: GetCatalogImportStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCatalogImportStatusCommandOutput) => void
  ): void;
  public getCatalogImportStatus(
    args: GetCatalogImportStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCatalogImportStatusCommandOutput) => void),
    cb?: (err: any, data?: GetCatalogImportStatusCommandOutput) => void
  ): Promise<GetCatalogImportStatusCommandOutput> | void {
    const command = new GetCatalogImportStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieve a classifier by name.</p>
   */
  public getClassifier(
    args: GetClassifierCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetClassifierCommandOutput>;
  public getClassifier(
    args: GetClassifierCommandInput,
    cb: (err: any, data?: GetClassifierCommandOutput) => void
  ): void;
  public getClassifier(
    args: GetClassifierCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetClassifierCommandOutput) => void
  ): void;
  public getClassifier(
    args: GetClassifierCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetClassifierCommandOutput) => void),
    cb?: (err: any, data?: GetClassifierCommandOutput) => void
  ): Promise<GetClassifierCommandOutput> | void {
    const command = new GetClassifierCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all classifier objects in the Data Catalog.</p>
   */
  public getClassifiers(
    args: GetClassifiersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetClassifiersCommandOutput>;
  public getClassifiers(
    args: GetClassifiersCommandInput,
    cb: (err: any, data?: GetClassifiersCommandOutput) => void
  ): void;
  public getClassifiers(
    args: GetClassifiersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetClassifiersCommandOutput) => void
  ): void;
  public getClassifiers(
    args: GetClassifiersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetClassifiersCommandOutput) => void),
    cb?: (err: any, data?: GetClassifiersCommandOutput) => void
  ): Promise<GetClassifiersCommandOutput> | void {
    const command = new GetClassifiersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a connection definition from the Data Catalog.</p>
   */
  public getConnection(
    args: GetConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConnectionCommandOutput>;
  public getConnection(
    args: GetConnectionCommandInput,
    cb: (err: any, data?: GetConnectionCommandOutput) => void
  ): void;
  public getConnection(
    args: GetConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConnectionCommandOutput) => void
  ): void;
  public getConnection(
    args: GetConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetConnectionCommandOutput) => void),
    cb?: (err: any, data?: GetConnectionCommandOutput) => void
  ): Promise<GetConnectionCommandOutput> | void {
    const command = new GetConnectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a list of connection definitions from the Data Catalog.</p>
   */
  public getConnections(
    args: GetConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConnectionsCommandOutput>;
  public getConnections(
    args: GetConnectionsCommandInput,
    cb: (err: any, data?: GetConnectionsCommandOutput) => void
  ): void;
  public getConnections(
    args: GetConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConnectionsCommandOutput) => void
  ): void;
  public getConnections(
    args: GetConnectionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetConnectionsCommandOutput) => void),
    cb?: (err: any, data?: GetConnectionsCommandOutput) => void
  ): Promise<GetConnectionsCommandOutput> | void {
    const command = new GetConnectionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves metadata for a specified crawler.</p>
   */
  public getCrawler(args: GetCrawlerCommandInput, options?: __HttpHandlerOptions): Promise<GetCrawlerCommandOutput>;
  public getCrawler(args: GetCrawlerCommandInput, cb: (err: any, data?: GetCrawlerCommandOutput) => void): void;
  public getCrawler(
    args: GetCrawlerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCrawlerCommandOutput) => void
  ): void;
  public getCrawler(
    args: GetCrawlerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCrawlerCommandOutput) => void),
    cb?: (err: any, data?: GetCrawlerCommandOutput) => void
  ): Promise<GetCrawlerCommandOutput> | void {
    const command = new GetCrawlerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves metrics about specified crawlers.</p>
   */
  public getCrawlerMetrics(
    args: GetCrawlerMetricsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCrawlerMetricsCommandOutput>;
  public getCrawlerMetrics(
    args: GetCrawlerMetricsCommandInput,
    cb: (err: any, data?: GetCrawlerMetricsCommandOutput) => void
  ): void;
  public getCrawlerMetrics(
    args: GetCrawlerMetricsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCrawlerMetricsCommandOutput) => void
  ): void;
  public getCrawlerMetrics(
    args: GetCrawlerMetricsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCrawlerMetricsCommandOutput) => void),
    cb?: (err: any, data?: GetCrawlerMetricsCommandOutput) => void
  ): Promise<GetCrawlerMetricsCommandOutput> | void {
    const command = new GetCrawlerMetricsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves metadata for all crawlers defined in the customer
   *       account.</p>
   */
  public getCrawlers(args: GetCrawlersCommandInput, options?: __HttpHandlerOptions): Promise<GetCrawlersCommandOutput>;
  public getCrawlers(args: GetCrawlersCommandInput, cb: (err: any, data?: GetCrawlersCommandOutput) => void): void;
  public getCrawlers(
    args: GetCrawlersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCrawlersCommandOutput) => void
  ): void;
  public getCrawlers(
    args: GetCrawlersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCrawlersCommandOutput) => void),
    cb?: (err: any, data?: GetCrawlersCommandOutput) => void
  ): Promise<GetCrawlersCommandOutput> | void {
    const command = new GetCrawlersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the definition of a specified database.</p>
   */
  public getDatabase(args: GetDatabaseCommandInput, options?: __HttpHandlerOptions): Promise<GetDatabaseCommandOutput>;
  public getDatabase(args: GetDatabaseCommandInput, cb: (err: any, data?: GetDatabaseCommandOutput) => void): void;
  public getDatabase(
    args: GetDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDatabaseCommandOutput) => void
  ): void;
  public getDatabase(
    args: GetDatabaseCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDatabaseCommandOutput) => void),
    cb?: (err: any, data?: GetDatabaseCommandOutput) => void
  ): Promise<GetDatabaseCommandOutput> | void {
    const command = new GetDatabaseCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves all databases defined in a given Data Catalog.</p>
   */
  public getDatabases(
    args: GetDatabasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDatabasesCommandOutput>;
  public getDatabases(args: GetDatabasesCommandInput, cb: (err: any, data?: GetDatabasesCommandOutput) => void): void;
  public getDatabases(
    args: GetDatabasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDatabasesCommandOutput) => void
  ): void;
  public getDatabases(
    args: GetDatabasesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDatabasesCommandOutput) => void),
    cb?: (err: any, data?: GetDatabasesCommandOutput) => void
  ): Promise<GetDatabasesCommandOutput> | void {
    const command = new GetDatabasesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the security configuration for a specified catalog.</p>
   */
  public getDataCatalogEncryptionSettings(
    args: GetDataCatalogEncryptionSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataCatalogEncryptionSettingsCommandOutput>;
  public getDataCatalogEncryptionSettings(
    args: GetDataCatalogEncryptionSettingsCommandInput,
    cb: (err: any, data?: GetDataCatalogEncryptionSettingsCommandOutput) => void
  ): void;
  public getDataCatalogEncryptionSettings(
    args: GetDataCatalogEncryptionSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataCatalogEncryptionSettingsCommandOutput) => void
  ): void;
  public getDataCatalogEncryptionSettings(
    args: GetDataCatalogEncryptionSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDataCatalogEncryptionSettingsCommandOutput) => void),
    cb?: (err: any, data?: GetDataCatalogEncryptionSettingsCommandOutput) => void
  ): Promise<GetDataCatalogEncryptionSettingsCommandOutput> | void {
    const command = new GetDataCatalogEncryptionSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Transforms a Python script into a directed acyclic graph (DAG). </p>
   */
  public getDataflowGraph(
    args: GetDataflowGraphCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataflowGraphCommandOutput>;
  public getDataflowGraph(
    args: GetDataflowGraphCommandInput,
    cb: (err: any, data?: GetDataflowGraphCommandOutput) => void
  ): void;
  public getDataflowGraph(
    args: GetDataflowGraphCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataflowGraphCommandOutput) => void
  ): void;
  public getDataflowGraph(
    args: GetDataflowGraphCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDataflowGraphCommandOutput) => void),
    cb?: (err: any, data?: GetDataflowGraphCommandOutput) => void
  ): Promise<GetDataflowGraphCommandOutput> | void {
    const command = new GetDataflowGraphCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves information about a specified development endpoint.</p>
   *          <note>
   *             <p>When you create a development endpoint in a virtual private cloud (VPC), AWS Glue returns only
   *         a private IP address, and the public IP address field is not populated. When you create a
   *         non-VPC development endpoint, AWS Glue returns only a public IP address.</p>
   *          </note>
   */
  public getDevEndpoint(
    args: GetDevEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDevEndpointCommandOutput>;
  public getDevEndpoint(
    args: GetDevEndpointCommandInput,
    cb: (err: any, data?: GetDevEndpointCommandOutput) => void
  ): void;
  public getDevEndpoint(
    args: GetDevEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDevEndpointCommandOutput) => void
  ): void;
  public getDevEndpoint(
    args: GetDevEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDevEndpointCommandOutput) => void),
    cb?: (err: any, data?: GetDevEndpointCommandOutput) => void
  ): Promise<GetDevEndpointCommandOutput> | void {
    const command = new GetDevEndpointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves all the development endpoints in this AWS account.</p>
   *          <note>
   *             <p>When you create a development endpoint in a virtual private cloud (VPC), AWS Glue returns only a private IP address
   *       and the public IP address field is not populated. When you create a non-VPC development
   *       endpoint, AWS Glue returns only a public IP address.</p>
   *          </note>
   */
  public getDevEndpoints(
    args: GetDevEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDevEndpointsCommandOutput>;
  public getDevEndpoints(
    args: GetDevEndpointsCommandInput,
    cb: (err: any, data?: GetDevEndpointsCommandOutput) => void
  ): void;
  public getDevEndpoints(
    args: GetDevEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDevEndpointsCommandOutput) => void
  ): void;
  public getDevEndpoints(
    args: GetDevEndpointsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDevEndpointsCommandOutput) => void),
    cb?: (err: any, data?: GetDevEndpointsCommandOutput) => void
  ): Promise<GetDevEndpointsCommandOutput> | void {
    const command = new GetDevEndpointsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves an existing job definition.</p>
   */
  public getJob(args: GetJobCommandInput, options?: __HttpHandlerOptions): Promise<GetJobCommandOutput>;
  public getJob(args: GetJobCommandInput, cb: (err: any, data?: GetJobCommandOutput) => void): void;
  public getJob(
    args: GetJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetJobCommandOutput) => void
  ): void;
  public getJob(
    args: GetJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetJobCommandOutput) => void),
    cb?: (err: any, data?: GetJobCommandOutput) => void
  ): Promise<GetJobCommandOutput> | void {
    const command = new GetJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information on a job bookmark entry.</p>
   */
  public getJobBookmark(
    args: GetJobBookmarkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetJobBookmarkCommandOutput>;
  public getJobBookmark(
    args: GetJobBookmarkCommandInput,
    cb: (err: any, data?: GetJobBookmarkCommandOutput) => void
  ): void;
  public getJobBookmark(
    args: GetJobBookmarkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetJobBookmarkCommandOutput) => void
  ): void;
  public getJobBookmark(
    args: GetJobBookmarkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetJobBookmarkCommandOutput) => void),
    cb?: (err: any, data?: GetJobBookmarkCommandOutput) => void
  ): Promise<GetJobBookmarkCommandOutput> | void {
    const command = new GetJobBookmarkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the metadata for a given job run.</p>
   */
  public getJobRun(args: GetJobRunCommandInput, options?: __HttpHandlerOptions): Promise<GetJobRunCommandOutput>;
  public getJobRun(args: GetJobRunCommandInput, cb: (err: any, data?: GetJobRunCommandOutput) => void): void;
  public getJobRun(
    args: GetJobRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetJobRunCommandOutput) => void
  ): void;
  public getJobRun(
    args: GetJobRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetJobRunCommandOutput) => void),
    cb?: (err: any, data?: GetJobRunCommandOutput) => void
  ): Promise<GetJobRunCommandOutput> | void {
    const command = new GetJobRunCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves metadata for all runs of a given job definition.</p>
   */
  public getJobRuns(args: GetJobRunsCommandInput, options?: __HttpHandlerOptions): Promise<GetJobRunsCommandOutput>;
  public getJobRuns(args: GetJobRunsCommandInput, cb: (err: any, data?: GetJobRunsCommandOutput) => void): void;
  public getJobRuns(
    args: GetJobRunsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetJobRunsCommandOutput) => void
  ): void;
  public getJobRuns(
    args: GetJobRunsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetJobRunsCommandOutput) => void),
    cb?: (err: any, data?: GetJobRunsCommandOutput) => void
  ): Promise<GetJobRunsCommandOutput> | void {
    const command = new GetJobRunsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves all current job definitions.</p>
   */
  public getJobs(args: GetJobsCommandInput, options?: __HttpHandlerOptions): Promise<GetJobsCommandOutput>;
  public getJobs(args: GetJobsCommandInput, cb: (err: any, data?: GetJobsCommandOutput) => void): void;
  public getJobs(
    args: GetJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetJobsCommandOutput) => void
  ): void;
  public getJobs(
    args: GetJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetJobsCommandOutput) => void),
    cb?: (err: any, data?: GetJobsCommandOutput) => void
  ): Promise<GetJobsCommandOutput> | void {
    const command = new GetJobsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates mappings.</p>
   */
  public getMapping(args: GetMappingCommandInput, options?: __HttpHandlerOptions): Promise<GetMappingCommandOutput>;
  public getMapping(args: GetMappingCommandInput, cb: (err: any, data?: GetMappingCommandOutput) => void): void;
  public getMapping(
    args: GetMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMappingCommandOutput) => void
  ): void;
  public getMapping(
    args: GetMappingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMappingCommandOutput) => void),
    cb?: (err: any, data?: GetMappingCommandOutput) => void
  ): Promise<GetMappingCommandOutput> | void {
    const command = new GetMappingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets details for a specific task run on a machine learning transform. Machine learning
   *       task runs are asynchronous tasks that AWS Glue runs on your behalf as part of various machine
   *       learning workflows. You can check the stats of any task run by calling
   *         <code>GetMLTaskRun</code> with the <code>TaskRunID</code> and its parent transform's
   *         <code>TransformID</code>.</p>
   */
  public getMLTaskRun(
    args: GetMLTaskRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMLTaskRunCommandOutput>;
  public getMLTaskRun(args: GetMLTaskRunCommandInput, cb: (err: any, data?: GetMLTaskRunCommandOutput) => void): void;
  public getMLTaskRun(
    args: GetMLTaskRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMLTaskRunCommandOutput) => void
  ): void;
  public getMLTaskRun(
    args: GetMLTaskRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMLTaskRunCommandOutput) => void),
    cb?: (err: any, data?: GetMLTaskRunCommandOutput) => void
  ): Promise<GetMLTaskRunCommandOutput> | void {
    const command = new GetMLTaskRunCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets a list of runs for a machine learning transform. Machine learning task runs are
   *       asynchronous tasks that AWS Glue runs on your behalf as part of various machine learning
   *       workflows. You can get a sortable, filterable list of machine learning task runs by calling
   *         <code>GetMLTaskRuns</code> with their parent transform's <code>TransformID</code> and other
   *       optional parameters as documented in this section.</p>
   *
   * 	        <p>This operation returns a list of historic runs and must be paginated.</p>
   */
  public getMLTaskRuns(
    args: GetMLTaskRunsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMLTaskRunsCommandOutput>;
  public getMLTaskRuns(
    args: GetMLTaskRunsCommandInput,
    cb: (err: any, data?: GetMLTaskRunsCommandOutput) => void
  ): void;
  public getMLTaskRuns(
    args: GetMLTaskRunsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMLTaskRunsCommandOutput) => void
  ): void;
  public getMLTaskRuns(
    args: GetMLTaskRunsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMLTaskRunsCommandOutput) => void),
    cb?: (err: any, data?: GetMLTaskRunsCommandOutput) => void
  ): Promise<GetMLTaskRunsCommandOutput> | void {
    const command = new GetMLTaskRunsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets an AWS Glue machine learning transform artifact and all its corresponding metadata.
   *       Machine learning transforms are a special type of transform that use machine learning to learn
   *       the details of the transformation to be performed by learning from examples provided by
   *       humans. These transformations are then saved by AWS Glue. You can retrieve their metadata by
   *       calling <code>GetMLTransform</code>.</p>
   */
  public getMLTransform(
    args: GetMLTransformCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMLTransformCommandOutput>;
  public getMLTransform(
    args: GetMLTransformCommandInput,
    cb: (err: any, data?: GetMLTransformCommandOutput) => void
  ): void;
  public getMLTransform(
    args: GetMLTransformCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMLTransformCommandOutput) => void
  ): void;
  public getMLTransform(
    args: GetMLTransformCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMLTransformCommandOutput) => void),
    cb?: (err: any, data?: GetMLTransformCommandOutput) => void
  ): Promise<GetMLTransformCommandOutput> | void {
    const command = new GetMLTransformCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets a sortable, filterable list of existing AWS Glue machine learning transforms. Machine
   *       learning transforms are a special type of transform that use machine learning to learn the
   *       details of the transformation to be performed by learning from examples provided by humans.
   *       These transformations are then saved by AWS Glue, and you can retrieve their metadata by
   *       calling <code>GetMLTransforms</code>.</p>
   */
  public getMLTransforms(
    args: GetMLTransformsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMLTransformsCommandOutput>;
  public getMLTransforms(
    args: GetMLTransformsCommandInput,
    cb: (err: any, data?: GetMLTransformsCommandOutput) => void
  ): void;
  public getMLTransforms(
    args: GetMLTransformsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMLTransformsCommandOutput) => void
  ): void;
  public getMLTransforms(
    args: GetMLTransformsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMLTransformsCommandOutput) => void),
    cb?: (err: any, data?: GetMLTransformsCommandOutput) => void
  ): Promise<GetMLTransformsCommandOutput> | void {
    const command = new GetMLTransformsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves information about a specified partition.</p>
   */
  public getPartition(
    args: GetPartitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPartitionCommandOutput>;
  public getPartition(args: GetPartitionCommandInput, cb: (err: any, data?: GetPartitionCommandOutput) => void): void;
  public getPartition(
    args: GetPartitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPartitionCommandOutput) => void
  ): void;
  public getPartition(
    args: GetPartitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPartitionCommandOutput) => void),
    cb?: (err: any, data?: GetPartitionCommandOutput) => void
  ): Promise<GetPartitionCommandOutput> | void {
    const command = new GetPartitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves information about the partitions in a table.</p>
   */
  public getPartitions(
    args: GetPartitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPartitionsCommandOutput>;
  public getPartitions(
    args: GetPartitionsCommandInput,
    cb: (err: any, data?: GetPartitionsCommandOutput) => void
  ): void;
  public getPartitions(
    args: GetPartitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPartitionsCommandOutput) => void
  ): void;
  public getPartitions(
    args: GetPartitionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPartitionsCommandOutput) => void),
    cb?: (err: any, data?: GetPartitionsCommandOutput) => void
  ): Promise<GetPartitionsCommandOutput> | void {
    const command = new GetPartitionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets code to perform a specified mapping.</p>
   */
  public getPlan(args: GetPlanCommandInput, options?: __HttpHandlerOptions): Promise<GetPlanCommandOutput>;
  public getPlan(args: GetPlanCommandInput, cb: (err: any, data?: GetPlanCommandOutput) => void): void;
  public getPlan(
    args: GetPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPlanCommandOutput) => void
  ): void;
  public getPlan(
    args: GetPlanCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPlanCommandOutput) => void),
    cb?: (err: any, data?: GetPlanCommandOutput) => void
  ): Promise<GetPlanCommandOutput> | void {
    const command = new GetPlanCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a specified resource policy.</p>
   */
  public getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourcePolicyCommandOutput>;
  public getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;
  public getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;
  public getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetResourcePolicyCommandOutput) => void),
    cb?: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): Promise<GetResourcePolicyCommandOutput> | void {
    const command = new GetResourcePolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a specified security configuration.</p>
   */
  public getSecurityConfiguration(
    args: GetSecurityConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSecurityConfigurationCommandOutput>;
  public getSecurityConfiguration(
    args: GetSecurityConfigurationCommandInput,
    cb: (err: any, data?: GetSecurityConfigurationCommandOutput) => void
  ): void;
  public getSecurityConfiguration(
    args: GetSecurityConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSecurityConfigurationCommandOutput) => void
  ): void;
  public getSecurityConfiguration(
    args: GetSecurityConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSecurityConfigurationCommandOutput) => void),
    cb?: (err: any, data?: GetSecurityConfigurationCommandOutput) => void
  ): Promise<GetSecurityConfigurationCommandOutput> | void {
    const command = new GetSecurityConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a list of all security configurations.</p>
   */
  public getSecurityConfigurations(
    args: GetSecurityConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSecurityConfigurationsCommandOutput>;
  public getSecurityConfigurations(
    args: GetSecurityConfigurationsCommandInput,
    cb: (err: any, data?: GetSecurityConfigurationsCommandOutput) => void
  ): void;
  public getSecurityConfigurations(
    args: GetSecurityConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSecurityConfigurationsCommandOutput) => void
  ): void;
  public getSecurityConfigurations(
    args: GetSecurityConfigurationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSecurityConfigurationsCommandOutput) => void),
    cb?: (err: any, data?: GetSecurityConfigurationsCommandOutput) => void
  ): Promise<GetSecurityConfigurationsCommandOutput> | void {
    const command = new GetSecurityConfigurationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the <code>Table</code> definition in a Data Catalog for
   *       a specified table.</p>
   */
  public getTable(args: GetTableCommandInput, options?: __HttpHandlerOptions): Promise<GetTableCommandOutput>;
  public getTable(args: GetTableCommandInput, cb: (err: any, data?: GetTableCommandOutput) => void): void;
  public getTable(
    args: GetTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTableCommandOutput) => void
  ): void;
  public getTable(
    args: GetTableCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTableCommandOutput) => void),
    cb?: (err: any, data?: GetTableCommandOutput) => void
  ): Promise<GetTableCommandOutput> | void {
    const command = new GetTableCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the definitions of some or all of the tables in a given
   *       <code>Database</code>.</p>
   */
  public getTables(args: GetTablesCommandInput, options?: __HttpHandlerOptions): Promise<GetTablesCommandOutput>;
  public getTables(args: GetTablesCommandInput, cb: (err: any, data?: GetTablesCommandOutput) => void): void;
  public getTables(
    args: GetTablesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTablesCommandOutput) => void
  ): void;
  public getTables(
    args: GetTablesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTablesCommandOutput) => void),
    cb?: (err: any, data?: GetTablesCommandOutput) => void
  ): Promise<GetTablesCommandOutput> | void {
    const command = new GetTablesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a specified version of a table.</p>
   */
  public getTableVersion(
    args: GetTableVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTableVersionCommandOutput>;
  public getTableVersion(
    args: GetTableVersionCommandInput,
    cb: (err: any, data?: GetTableVersionCommandOutput) => void
  ): void;
  public getTableVersion(
    args: GetTableVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTableVersionCommandOutput) => void
  ): void;
  public getTableVersion(
    args: GetTableVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTableVersionCommandOutput) => void),
    cb?: (err: any, data?: GetTableVersionCommandOutput) => void
  ): Promise<GetTableVersionCommandOutput> | void {
    const command = new GetTableVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a list of strings that identify available versions of
   *       a specified table.</p>
   */
  public getTableVersions(
    args: GetTableVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTableVersionsCommandOutput>;
  public getTableVersions(
    args: GetTableVersionsCommandInput,
    cb: (err: any, data?: GetTableVersionsCommandOutput) => void
  ): void;
  public getTableVersions(
    args: GetTableVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTableVersionsCommandOutput) => void
  ): void;
  public getTableVersions(
    args: GetTableVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTableVersionsCommandOutput) => void),
    cb?: (err: any, data?: GetTableVersionsCommandOutput) => void
  ): Promise<GetTableVersionsCommandOutput> | void {
    const command = new GetTableVersionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a list of tags associated with a resource.</p>
   */
  public getTags(args: GetTagsCommandInput, options?: __HttpHandlerOptions): Promise<GetTagsCommandOutput>;
  public getTags(args: GetTagsCommandInput, cb: (err: any, data?: GetTagsCommandOutput) => void): void;
  public getTags(
    args: GetTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTagsCommandOutput) => void
  ): void;
  public getTags(
    args: GetTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTagsCommandOutput) => void),
    cb?: (err: any, data?: GetTagsCommandOutput) => void
  ): Promise<GetTagsCommandOutput> | void {
    const command = new GetTagsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the definition of a trigger.</p>
   */
  public getTrigger(args: GetTriggerCommandInput, options?: __HttpHandlerOptions): Promise<GetTriggerCommandOutput>;
  public getTrigger(args: GetTriggerCommandInput, cb: (err: any, data?: GetTriggerCommandOutput) => void): void;
  public getTrigger(
    args: GetTriggerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTriggerCommandOutput) => void
  ): void;
  public getTrigger(
    args: GetTriggerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTriggerCommandOutput) => void),
    cb?: (err: any, data?: GetTriggerCommandOutput) => void
  ): Promise<GetTriggerCommandOutput> | void {
    const command = new GetTriggerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets all the triggers associated with a job.</p>
   */
  public getTriggers(args: GetTriggersCommandInput, options?: __HttpHandlerOptions): Promise<GetTriggersCommandOutput>;
  public getTriggers(args: GetTriggersCommandInput, cb: (err: any, data?: GetTriggersCommandOutput) => void): void;
  public getTriggers(
    args: GetTriggersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTriggersCommandOutput) => void
  ): void;
  public getTriggers(
    args: GetTriggersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTriggersCommandOutput) => void),
    cb?: (err: any, data?: GetTriggersCommandOutput) => void
  ): Promise<GetTriggersCommandOutput> | void {
    const command = new GetTriggersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a specified function definition from the Data Catalog.</p>
   */
  public getUserDefinedFunction(
    args: GetUserDefinedFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUserDefinedFunctionCommandOutput>;
  public getUserDefinedFunction(
    args: GetUserDefinedFunctionCommandInput,
    cb: (err: any, data?: GetUserDefinedFunctionCommandOutput) => void
  ): void;
  public getUserDefinedFunction(
    args: GetUserDefinedFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUserDefinedFunctionCommandOutput) => void
  ): void;
  public getUserDefinedFunction(
    args: GetUserDefinedFunctionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetUserDefinedFunctionCommandOutput) => void),
    cb?: (err: any, data?: GetUserDefinedFunctionCommandOutput) => void
  ): Promise<GetUserDefinedFunctionCommandOutput> | void {
    const command = new GetUserDefinedFunctionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves multiple function definitions from the Data Catalog.</p>
   */
  public getUserDefinedFunctions(
    args: GetUserDefinedFunctionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUserDefinedFunctionsCommandOutput>;
  public getUserDefinedFunctions(
    args: GetUserDefinedFunctionsCommandInput,
    cb: (err: any, data?: GetUserDefinedFunctionsCommandOutput) => void
  ): void;
  public getUserDefinedFunctions(
    args: GetUserDefinedFunctionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUserDefinedFunctionsCommandOutput) => void
  ): void;
  public getUserDefinedFunctions(
    args: GetUserDefinedFunctionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetUserDefinedFunctionsCommandOutput) => void),
    cb?: (err: any, data?: GetUserDefinedFunctionsCommandOutput) => void
  ): Promise<GetUserDefinedFunctionsCommandOutput> | void {
    const command = new GetUserDefinedFunctionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves resource metadata for a workflow.</p>
   */
  public getWorkflow(args: GetWorkflowCommandInput, options?: __HttpHandlerOptions): Promise<GetWorkflowCommandOutput>;
  public getWorkflow(args: GetWorkflowCommandInput, cb: (err: any, data?: GetWorkflowCommandOutput) => void): void;
  public getWorkflow(
    args: GetWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkflowCommandOutput) => void
  ): void;
  public getWorkflow(
    args: GetWorkflowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetWorkflowCommandOutput) => void),
    cb?: (err: any, data?: GetWorkflowCommandOutput) => void
  ): Promise<GetWorkflowCommandOutput> | void {
    const command = new GetWorkflowCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the metadata for a given workflow run. </p>
   */
  public getWorkflowRun(
    args: GetWorkflowRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWorkflowRunCommandOutput>;
  public getWorkflowRun(
    args: GetWorkflowRunCommandInput,
    cb: (err: any, data?: GetWorkflowRunCommandOutput) => void
  ): void;
  public getWorkflowRun(
    args: GetWorkflowRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkflowRunCommandOutput) => void
  ): void;
  public getWorkflowRun(
    args: GetWorkflowRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetWorkflowRunCommandOutput) => void),
    cb?: (err: any, data?: GetWorkflowRunCommandOutput) => void
  ): Promise<GetWorkflowRunCommandOutput> | void {
    const command = new GetWorkflowRunCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the workflow run properties which were set during the run.</p>
   */
  public getWorkflowRunProperties(
    args: GetWorkflowRunPropertiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWorkflowRunPropertiesCommandOutput>;
  public getWorkflowRunProperties(
    args: GetWorkflowRunPropertiesCommandInput,
    cb: (err: any, data?: GetWorkflowRunPropertiesCommandOutput) => void
  ): void;
  public getWorkflowRunProperties(
    args: GetWorkflowRunPropertiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkflowRunPropertiesCommandOutput) => void
  ): void;
  public getWorkflowRunProperties(
    args: GetWorkflowRunPropertiesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetWorkflowRunPropertiesCommandOutput) => void),
    cb?: (err: any, data?: GetWorkflowRunPropertiesCommandOutput) => void
  ): Promise<GetWorkflowRunPropertiesCommandOutput> | void {
    const command = new GetWorkflowRunPropertiesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves metadata for all runs of a given workflow.</p>
   */
  public getWorkflowRuns(
    args: GetWorkflowRunsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWorkflowRunsCommandOutput>;
  public getWorkflowRuns(
    args: GetWorkflowRunsCommandInput,
    cb: (err: any, data?: GetWorkflowRunsCommandOutput) => void
  ): void;
  public getWorkflowRuns(
    args: GetWorkflowRunsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkflowRunsCommandOutput) => void
  ): void;
  public getWorkflowRuns(
    args: GetWorkflowRunsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetWorkflowRunsCommandOutput) => void),
    cb?: (err: any, data?: GetWorkflowRunsCommandOutput) => void
  ): Promise<GetWorkflowRunsCommandOutput> | void {
    const command = new GetWorkflowRunsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Imports an existing Amazon Athena Data Catalog to AWS Glue</p>
   */
  public importCatalogToGlue(
    args: ImportCatalogToGlueCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportCatalogToGlueCommandOutput>;
  public importCatalogToGlue(
    args: ImportCatalogToGlueCommandInput,
    cb: (err: any, data?: ImportCatalogToGlueCommandOutput) => void
  ): void;
  public importCatalogToGlue(
    args: ImportCatalogToGlueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportCatalogToGlueCommandOutput) => void
  ): void;
  public importCatalogToGlue(
    args: ImportCatalogToGlueCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ImportCatalogToGlueCommandOutput) => void),
    cb?: (err: any, data?: ImportCatalogToGlueCommandOutput) => void
  ): Promise<ImportCatalogToGlueCommandOutput> | void {
    const command = new ImportCatalogToGlueCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the names of all crawler resources in this AWS account, or the
   *       resources with the specified tag. This operation allows you to see which
   *       resources are available in your account, and their names.</p>
   *
   *          <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on
   *       the response so that tagged resources can be retrieved as a group. If you choose to use tags
   *       filtering, only resources with the tag are retrieved.</p>
   */
  public listCrawlers(
    args: ListCrawlersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCrawlersCommandOutput>;
  public listCrawlers(args: ListCrawlersCommandInput, cb: (err: any, data?: ListCrawlersCommandOutput) => void): void;
  public listCrawlers(
    args: ListCrawlersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCrawlersCommandOutput) => void
  ): void;
  public listCrawlers(
    args: ListCrawlersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListCrawlersCommandOutput) => void),
    cb?: (err: any, data?: ListCrawlersCommandOutput) => void
  ): Promise<ListCrawlersCommandOutput> | void {
    const command = new ListCrawlersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the names of all <code>DevEndpoint</code> resources in this AWS account, or the
   *       resources with the specified tag. This operation allows you to see which resources are
   *       available in your account, and their names.</p>
   *
   *          <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on
   *       the response so that tagged resources can be retrieved as a group. If you choose to use tags
   *       filtering, only resources with the tag are retrieved.</p>
   */
  public listDevEndpoints(
    args: ListDevEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDevEndpointsCommandOutput>;
  public listDevEndpoints(
    args: ListDevEndpointsCommandInput,
    cb: (err: any, data?: ListDevEndpointsCommandOutput) => void
  ): void;
  public listDevEndpoints(
    args: ListDevEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDevEndpointsCommandOutput) => void
  ): void;
  public listDevEndpoints(
    args: ListDevEndpointsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDevEndpointsCommandOutput) => void),
    cb?: (err: any, data?: ListDevEndpointsCommandOutput) => void
  ): Promise<ListDevEndpointsCommandOutput> | void {
    const command = new ListDevEndpointsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the names of all job resources in this AWS account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.</p>
   *
   * 	        <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on
   *       the response so that tagged resources can be retrieved as a group. If you choose to use tags
   *       filtering, only resources with the tag are retrieved.</p>
   */
  public listJobs(args: ListJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListJobsCommandOutput>;
  public listJobs(args: ListJobsCommandInput, cb: (err: any, data?: ListJobsCommandOutput) => void): void;
  public listJobs(
    args: ListJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJobsCommandOutput) => void
  ): void;
  public listJobs(
    args: ListJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListJobsCommandOutput) => void),
    cb?: (err: any, data?: ListJobsCommandOutput) => void
  ): Promise<ListJobsCommandOutput> | void {
    const command = new ListJobsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the names of all trigger resources in this AWS account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.</p>
   *
   *          <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on
   *       the response so that tagged resources can be retrieved as a group. If you choose to use tags
   *       filtering, only resources with the tag are retrieved.</p>
   */
  public listTriggers(
    args: ListTriggersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTriggersCommandOutput>;
  public listTriggers(args: ListTriggersCommandInput, cb: (err: any, data?: ListTriggersCommandOutput) => void): void;
  public listTriggers(
    args: ListTriggersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTriggersCommandOutput) => void
  ): void;
  public listTriggers(
    args: ListTriggersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTriggersCommandOutput) => void),
    cb?: (err: any, data?: ListTriggersCommandOutput) => void
  ): Promise<ListTriggersCommandOutput> | void {
    const command = new ListTriggersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists names of workflows created in the account.</p>
   */
  public listWorkflows(
    args: ListWorkflowsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkflowsCommandOutput>;
  public listWorkflows(
    args: ListWorkflowsCommandInput,
    cb: (err: any, data?: ListWorkflowsCommandOutput) => void
  ): void;
  public listWorkflows(
    args: ListWorkflowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkflowsCommandOutput) => void
  ): void;
  public listWorkflows(
    args: ListWorkflowsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListWorkflowsCommandOutput) => void),
    cb?: (err: any, data?: ListWorkflowsCommandOutput) => void
  ): Promise<ListWorkflowsCommandOutput> | void {
    const command = new ListWorkflowsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Sets the security configuration for a specified catalog. After the configuration has been
   *       set, the specified encryption is applied to every catalog write thereafter.</p>
   */
  public putDataCatalogEncryptionSettings(
    args: PutDataCatalogEncryptionSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutDataCatalogEncryptionSettingsCommandOutput>;
  public putDataCatalogEncryptionSettings(
    args: PutDataCatalogEncryptionSettingsCommandInput,
    cb: (err: any, data?: PutDataCatalogEncryptionSettingsCommandOutput) => void
  ): void;
  public putDataCatalogEncryptionSettings(
    args: PutDataCatalogEncryptionSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutDataCatalogEncryptionSettingsCommandOutput) => void
  ): void;
  public putDataCatalogEncryptionSettings(
    args: PutDataCatalogEncryptionSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutDataCatalogEncryptionSettingsCommandOutput) => void),
    cb?: (err: any, data?: PutDataCatalogEncryptionSettingsCommandOutput) => void
  ): Promise<PutDataCatalogEncryptionSettingsCommandOutput> | void {
    const command = new PutDataCatalogEncryptionSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Sets the Data Catalog resource policy for access control.</p>
   */
  public putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutResourcePolicyCommandOutput>;
  public putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  public putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  public putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutResourcePolicyCommandOutput) => void),
    cb?: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): Promise<PutResourcePolicyCommandOutput> | void {
    const command = new PutResourcePolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Puts the specified workflow run properties for the given workflow run. If a property already exists for the specified run, then it overrides the value otherwise adds the property to existing properties.</p>
   */
  public putWorkflowRunProperties(
    args: PutWorkflowRunPropertiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutWorkflowRunPropertiesCommandOutput>;
  public putWorkflowRunProperties(
    args: PutWorkflowRunPropertiesCommandInput,
    cb: (err: any, data?: PutWorkflowRunPropertiesCommandOutput) => void
  ): void;
  public putWorkflowRunProperties(
    args: PutWorkflowRunPropertiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutWorkflowRunPropertiesCommandOutput) => void
  ): void;
  public putWorkflowRunProperties(
    args: PutWorkflowRunPropertiesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutWorkflowRunPropertiesCommandOutput) => void),
    cb?: (err: any, data?: PutWorkflowRunPropertiesCommandOutput) => void
  ): Promise<PutWorkflowRunPropertiesCommandOutput> | void {
    const command = new PutWorkflowRunPropertiesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Resets a bookmark entry.</p>
   */
  public resetJobBookmark(
    args: ResetJobBookmarkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetJobBookmarkCommandOutput>;
  public resetJobBookmark(
    args: ResetJobBookmarkCommandInput,
    cb: (err: any, data?: ResetJobBookmarkCommandOutput) => void
  ): void;
  public resetJobBookmark(
    args: ResetJobBookmarkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetJobBookmarkCommandOutput) => void
  ): void;
  public resetJobBookmark(
    args: ResetJobBookmarkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ResetJobBookmarkCommandOutput) => void),
    cb?: (err: any, data?: ResetJobBookmarkCommandOutput) => void
  ): Promise<ResetJobBookmarkCommandOutput> | void {
    const command = new ResetJobBookmarkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Searches a set of tables based on properties in the table metadata as well as on the parent database. You can search against text or filter conditions. </p>
   *          <p>You can only get tables that you have access to based on the security policies defined in Lake Formation. You need at least a read-only access to the table for it to be returned. If you do not have access to all the columns in the table, these columns will not be searched against when returning the list of tables back to you. If you have access to the columns but not the data in the columns, those columns and the associated metadata for those columns will be included in the search. </p>
   */
  public searchTables(
    args: SearchTablesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchTablesCommandOutput>;
  public searchTables(args: SearchTablesCommandInput, cb: (err: any, data?: SearchTablesCommandOutput) => void): void;
  public searchTables(
    args: SearchTablesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchTablesCommandOutput) => void
  ): void;
  public searchTables(
    args: SearchTablesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SearchTablesCommandOutput) => void),
    cb?: (err: any, data?: SearchTablesCommandOutput) => void
  ): Promise<SearchTablesCommandOutput> | void {
    const command = new SearchTablesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts a crawl using the specified crawler, regardless of what is scheduled. If the
   *       crawler is already running, returns a <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-exceptions.html#aws-glue-api-exceptions-CrawlerRunningException">CrawlerRunningException</a>.</p>
   */
  public startCrawler(
    args: StartCrawlerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartCrawlerCommandOutput>;
  public startCrawler(args: StartCrawlerCommandInput, cb: (err: any, data?: StartCrawlerCommandOutput) => void): void;
  public startCrawler(
    args: StartCrawlerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartCrawlerCommandOutput) => void
  ): void;
  public startCrawler(
    args: StartCrawlerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartCrawlerCommandOutput) => void),
    cb?: (err: any, data?: StartCrawlerCommandOutput) => void
  ): Promise<StartCrawlerCommandOutput> | void {
    const command = new StartCrawlerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Changes the schedule state of the specified crawler to
   *       <code>SCHEDULED</code>, unless the crawler is already running or the
   *       schedule state is already <code>SCHEDULED</code>.</p>
   */
  public startCrawlerSchedule(
    args: StartCrawlerScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartCrawlerScheduleCommandOutput>;
  public startCrawlerSchedule(
    args: StartCrawlerScheduleCommandInput,
    cb: (err: any, data?: StartCrawlerScheduleCommandOutput) => void
  ): void;
  public startCrawlerSchedule(
    args: StartCrawlerScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartCrawlerScheduleCommandOutput) => void
  ): void;
  public startCrawlerSchedule(
    args: StartCrawlerScheduleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartCrawlerScheduleCommandOutput) => void),
    cb?: (err: any, data?: StartCrawlerScheduleCommandOutput) => void
  ): Promise<StartCrawlerScheduleCommandOutput> | void {
    const command = new StartCrawlerScheduleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Begins an asynchronous task to export all labeled data for a particular transform. This
   *       task is the only label-related API call that is not part of the typical active learning
   *       workflow. You typically use <code>StartExportLabelsTaskRun</code> when you want to work with
   *       all of your existing labels at the same time, such as when you want to remove or change labels
   *       that were previously submitted as truth. This API operation accepts the
   *         <code>TransformId</code> whose labels you want to export and an Amazon Simple Storage
   *       Service (Amazon S3) path to export the labels to. The operation returns a
   *         <code>TaskRunId</code>. You can check on the status of your task run by calling the
   *         <code>GetMLTaskRun</code> API.</p>
   */
  public startExportLabelsTaskRun(
    args: StartExportLabelsTaskRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartExportLabelsTaskRunCommandOutput>;
  public startExportLabelsTaskRun(
    args: StartExportLabelsTaskRunCommandInput,
    cb: (err: any, data?: StartExportLabelsTaskRunCommandOutput) => void
  ): void;
  public startExportLabelsTaskRun(
    args: StartExportLabelsTaskRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartExportLabelsTaskRunCommandOutput) => void
  ): void;
  public startExportLabelsTaskRun(
    args: StartExportLabelsTaskRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartExportLabelsTaskRunCommandOutput) => void),
    cb?: (err: any, data?: StartExportLabelsTaskRunCommandOutput) => void
  ): Promise<StartExportLabelsTaskRunCommandOutput> | void {
    const command = new StartExportLabelsTaskRunCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Enables you to provide additional labels (examples of truth) to be used to teach the
   *       machine learning transform and improve its quality. This API operation is generally used as
   *       part of the active learning workflow that starts with the
   *         <code>StartMLLabelingSetGenerationTaskRun</code> call and that ultimately results in
   *       improving the quality of your machine learning transform. </p>
   *
   *          <p>After the <code>StartMLLabelingSetGenerationTaskRun</code> finishes, AWS Glue machine learning
   *       will have generated a series of questions for humans to answer. (Answering these questions is
   *       often called 'labeling' in the machine learning workflows). In the case of the
   *         <code>FindMatches</code> transform, these questions are of the form, “What is the correct
   *       way to group these rows together into groups composed entirely of matching records?” After the
   *       labeling process is finished, users upload their answers/labels with a call to
   *         <code>StartImportLabelsTaskRun</code>. After <code>StartImportLabelsTaskRun</code> finishes,
   *       all future runs of the machine learning transform use the new and improved labels and perform
   *       a higher-quality transformation.</p>
   *
   *          <p>By default, <code>StartMLLabelingSetGenerationTaskRun</code> continually learns from and
   *       combines all labels that you upload unless you set <code>Replace</code> to true. If you set
   *         <code>Replace</code> to true, <code>StartImportLabelsTaskRun</code> deletes and forgets all
   *       previously uploaded labels and learns only from the exact set that you upload. Replacing
   *       labels can be helpful if you realize that you previously uploaded incorrect labels, and you
   *       believe that they are having a negative effect on your transform quality.</p>
   *
   *          <p>You can check on the status of your task run by calling the <code>GetMLTaskRun</code>
   *       operation. </p>
   */
  public startImportLabelsTaskRun(
    args: StartImportLabelsTaskRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartImportLabelsTaskRunCommandOutput>;
  public startImportLabelsTaskRun(
    args: StartImportLabelsTaskRunCommandInput,
    cb: (err: any, data?: StartImportLabelsTaskRunCommandOutput) => void
  ): void;
  public startImportLabelsTaskRun(
    args: StartImportLabelsTaskRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartImportLabelsTaskRunCommandOutput) => void
  ): void;
  public startImportLabelsTaskRun(
    args: StartImportLabelsTaskRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartImportLabelsTaskRunCommandOutput) => void),
    cb?: (err: any, data?: StartImportLabelsTaskRunCommandOutput) => void
  ): Promise<StartImportLabelsTaskRunCommandOutput> | void {
    const command = new StartImportLabelsTaskRunCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts a job run using a job definition.</p>
   */
  public startJobRun(args: StartJobRunCommandInput, options?: __HttpHandlerOptions): Promise<StartJobRunCommandOutput>;
  public startJobRun(args: StartJobRunCommandInput, cb: (err: any, data?: StartJobRunCommandOutput) => void): void;
  public startJobRun(
    args: StartJobRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartJobRunCommandOutput) => void
  ): void;
  public startJobRun(
    args: StartJobRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartJobRunCommandOutput) => void),
    cb?: (err: any, data?: StartJobRunCommandOutput) => void
  ): Promise<StartJobRunCommandOutput> | void {
    const command = new StartJobRunCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts a task to estimate the quality of the transform. </p>
   *
   * 	        <p>When you provide label sets as examples of truth, AWS Glue machine learning uses some of
   *       those examples to learn from them. The rest of the labels are used as a test to estimate
   *       quality.</p>
   *
   * 	        <p>Returns a unique identifier for the run. You can call <code>GetMLTaskRun</code> to get more
   *       information about the stats of the <code>EvaluationTaskRun</code>.</p>
   */
  public startMLEvaluationTaskRun(
    args: StartMLEvaluationTaskRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartMLEvaluationTaskRunCommandOutput>;
  public startMLEvaluationTaskRun(
    args: StartMLEvaluationTaskRunCommandInput,
    cb: (err: any, data?: StartMLEvaluationTaskRunCommandOutput) => void
  ): void;
  public startMLEvaluationTaskRun(
    args: StartMLEvaluationTaskRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartMLEvaluationTaskRunCommandOutput) => void
  ): void;
  public startMLEvaluationTaskRun(
    args: StartMLEvaluationTaskRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartMLEvaluationTaskRunCommandOutput) => void),
    cb?: (err: any, data?: StartMLEvaluationTaskRunCommandOutput) => void
  ): Promise<StartMLEvaluationTaskRunCommandOutput> | void {
    const command = new StartMLEvaluationTaskRunCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts the active learning workflow for your machine learning transform to improve the
   *       transform's quality by generating label sets and adding labels.</p>
   *
   * 	        <p>When the <code>StartMLLabelingSetGenerationTaskRun</code> finishes, AWS Glue will have
   *       generated a "labeling set" or a set of questions for humans to answer.</p>
   *
   *          <p>In the case of the <code>FindMatches</code> transform, these questions are of the form,
   *       “What is the correct way to group these rows together into groups composed entirely of
   *       matching records?” </p>
   *
   *          <p>After the labeling process is finished, you can upload your labels with a call to
   *         <code>StartImportLabelsTaskRun</code>. After <code>StartImportLabelsTaskRun</code> finishes,
   *       all future runs of the machine learning transform will use the new and improved labels and
   *       perform a higher-quality transformation.</p>
   */
  public startMLLabelingSetGenerationTaskRun(
    args: StartMLLabelingSetGenerationTaskRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartMLLabelingSetGenerationTaskRunCommandOutput>;
  public startMLLabelingSetGenerationTaskRun(
    args: StartMLLabelingSetGenerationTaskRunCommandInput,
    cb: (err: any, data?: StartMLLabelingSetGenerationTaskRunCommandOutput) => void
  ): void;
  public startMLLabelingSetGenerationTaskRun(
    args: StartMLLabelingSetGenerationTaskRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartMLLabelingSetGenerationTaskRunCommandOutput) => void
  ): void;
  public startMLLabelingSetGenerationTaskRun(
    args: StartMLLabelingSetGenerationTaskRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartMLLabelingSetGenerationTaskRunCommandOutput) => void),
    cb?: (err: any, data?: StartMLLabelingSetGenerationTaskRunCommandOutput) => void
  ): Promise<StartMLLabelingSetGenerationTaskRunCommandOutput> | void {
    const command = new StartMLLabelingSetGenerationTaskRunCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts an existing trigger. See <a href="https://docs.aws.amazon.com/glue/latest/dg/trigger-job.html">Triggering
   *       Jobs</a> for information about how different types of trigger are
   *       started.</p>
   */
  public startTrigger(
    args: StartTriggerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartTriggerCommandOutput>;
  public startTrigger(args: StartTriggerCommandInput, cb: (err: any, data?: StartTriggerCommandOutput) => void): void;
  public startTrigger(
    args: StartTriggerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartTriggerCommandOutput) => void
  ): void;
  public startTrigger(
    args: StartTriggerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartTriggerCommandOutput) => void),
    cb?: (err: any, data?: StartTriggerCommandOutput) => void
  ): Promise<StartTriggerCommandOutput> | void {
    const command = new StartTriggerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts a new run of the specified workflow.</p>
   */
  public startWorkflowRun(
    args: StartWorkflowRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartWorkflowRunCommandOutput>;
  public startWorkflowRun(
    args: StartWorkflowRunCommandInput,
    cb: (err: any, data?: StartWorkflowRunCommandOutput) => void
  ): void;
  public startWorkflowRun(
    args: StartWorkflowRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartWorkflowRunCommandOutput) => void
  ): void;
  public startWorkflowRun(
    args: StartWorkflowRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartWorkflowRunCommandOutput) => void),
    cb?: (err: any, data?: StartWorkflowRunCommandOutput) => void
  ): Promise<StartWorkflowRunCommandOutput> | void {
    const command = new StartWorkflowRunCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>If the specified crawler is running, stops the crawl.</p>
   */
  public stopCrawler(args: StopCrawlerCommandInput, options?: __HttpHandlerOptions): Promise<StopCrawlerCommandOutput>;
  public stopCrawler(args: StopCrawlerCommandInput, cb: (err: any, data?: StopCrawlerCommandOutput) => void): void;
  public stopCrawler(
    args: StopCrawlerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopCrawlerCommandOutput) => void
  ): void;
  public stopCrawler(
    args: StopCrawlerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopCrawlerCommandOutput) => void),
    cb?: (err: any, data?: StopCrawlerCommandOutput) => void
  ): Promise<StopCrawlerCommandOutput> | void {
    const command = new StopCrawlerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Sets the schedule state of the specified crawler to
   *       <code>NOT_SCHEDULED</code>, but does not stop the crawler if it is
   *       already running.</p>
   */
  public stopCrawlerSchedule(
    args: StopCrawlerScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopCrawlerScheduleCommandOutput>;
  public stopCrawlerSchedule(
    args: StopCrawlerScheduleCommandInput,
    cb: (err: any, data?: StopCrawlerScheduleCommandOutput) => void
  ): void;
  public stopCrawlerSchedule(
    args: StopCrawlerScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopCrawlerScheduleCommandOutput) => void
  ): void;
  public stopCrawlerSchedule(
    args: StopCrawlerScheduleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopCrawlerScheduleCommandOutput) => void),
    cb?: (err: any, data?: StopCrawlerScheduleCommandOutput) => void
  ): Promise<StopCrawlerScheduleCommandOutput> | void {
    const command = new StopCrawlerScheduleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Stops a specified trigger.</p>
   */
  public stopTrigger(args: StopTriggerCommandInput, options?: __HttpHandlerOptions): Promise<StopTriggerCommandOutput>;
  public stopTrigger(args: StopTriggerCommandInput, cb: (err: any, data?: StopTriggerCommandOutput) => void): void;
  public stopTrigger(
    args: StopTriggerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopTriggerCommandOutput) => void
  ): void;
  public stopTrigger(
    args: StopTriggerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopTriggerCommandOutput) => void),
    cb?: (err: any, data?: StopTriggerCommandOutput) => void
  ): Promise<StopTriggerCommandOutput> | void {
    const command = new StopTriggerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds tags to a resource. A tag is a label you can assign to an AWS resource.
   *       In AWS Glue, you can tag only certain resources. For information about what
   *       resources you can tag, see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html">AWS Tags in AWS Glue</a>.</p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes tags from a resource.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies an existing classifier (a <code>GrokClassifier</code>,
   *       an <code>XMLClassifier</code>, a <code>JsonClassifier</code>, or a <code>CsvClassifier</code>, depending on
   *       which field is present).</p>
   */
  public updateClassifier(
    args: UpdateClassifierCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateClassifierCommandOutput>;
  public updateClassifier(
    args: UpdateClassifierCommandInput,
    cb: (err: any, data?: UpdateClassifierCommandOutput) => void
  ): void;
  public updateClassifier(
    args: UpdateClassifierCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateClassifierCommandOutput) => void
  ): void;
  public updateClassifier(
    args: UpdateClassifierCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateClassifierCommandOutput) => void),
    cb?: (err: any, data?: UpdateClassifierCommandOutput) => void
  ): Promise<UpdateClassifierCommandOutput> | void {
    const command = new UpdateClassifierCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a connection definition in the Data Catalog.</p>
   */
  public updateConnection(
    args: UpdateConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConnectionCommandOutput>;
  public updateConnection(
    args: UpdateConnectionCommandInput,
    cb: (err: any, data?: UpdateConnectionCommandOutput) => void
  ): void;
  public updateConnection(
    args: UpdateConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConnectionCommandOutput) => void
  ): void;
  public updateConnection(
    args: UpdateConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateConnectionCommandOutput) => void),
    cb?: (err: any, data?: UpdateConnectionCommandOutput) => void
  ): Promise<UpdateConnectionCommandOutput> | void {
    const command = new UpdateConnectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a crawler. If a crawler is
   *       running, you must stop it using <code>StopCrawler</code> before updating
   *       it.</p>
   */
  public updateCrawler(
    args: UpdateCrawlerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCrawlerCommandOutput>;
  public updateCrawler(
    args: UpdateCrawlerCommandInput,
    cb: (err: any, data?: UpdateCrawlerCommandOutput) => void
  ): void;
  public updateCrawler(
    args: UpdateCrawlerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCrawlerCommandOutput) => void
  ): void;
  public updateCrawler(
    args: UpdateCrawlerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateCrawlerCommandOutput) => void),
    cb?: (err: any, data?: UpdateCrawlerCommandOutput) => void
  ): Promise<UpdateCrawlerCommandOutput> | void {
    const command = new UpdateCrawlerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the schedule of a crawler using a <code>cron</code> expression. </p>
   */
  public updateCrawlerSchedule(
    args: UpdateCrawlerScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCrawlerScheduleCommandOutput>;
  public updateCrawlerSchedule(
    args: UpdateCrawlerScheduleCommandInput,
    cb: (err: any, data?: UpdateCrawlerScheduleCommandOutput) => void
  ): void;
  public updateCrawlerSchedule(
    args: UpdateCrawlerScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCrawlerScheduleCommandOutput) => void
  ): void;
  public updateCrawlerSchedule(
    args: UpdateCrawlerScheduleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateCrawlerScheduleCommandOutput) => void),
    cb?: (err: any, data?: UpdateCrawlerScheduleCommandOutput) => void
  ): Promise<UpdateCrawlerScheduleCommandOutput> | void {
    const command = new UpdateCrawlerScheduleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates an existing database definition in a Data Catalog.</p>
   */
  public updateDatabase(
    args: UpdateDatabaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDatabaseCommandOutput>;
  public updateDatabase(
    args: UpdateDatabaseCommandInput,
    cb: (err: any, data?: UpdateDatabaseCommandOutput) => void
  ): void;
  public updateDatabase(
    args: UpdateDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDatabaseCommandOutput) => void
  ): void;
  public updateDatabase(
    args: UpdateDatabaseCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDatabaseCommandOutput) => void),
    cb?: (err: any, data?: UpdateDatabaseCommandOutput) => void
  ): Promise<UpdateDatabaseCommandOutput> | void {
    const command = new UpdateDatabaseCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a specified development endpoint.</p>
   */
  public updateDevEndpoint(
    args: UpdateDevEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDevEndpointCommandOutput>;
  public updateDevEndpoint(
    args: UpdateDevEndpointCommandInput,
    cb: (err: any, data?: UpdateDevEndpointCommandOutput) => void
  ): void;
  public updateDevEndpoint(
    args: UpdateDevEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDevEndpointCommandOutput) => void
  ): void;
  public updateDevEndpoint(
    args: UpdateDevEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDevEndpointCommandOutput) => void),
    cb?: (err: any, data?: UpdateDevEndpointCommandOutput) => void
  ): Promise<UpdateDevEndpointCommandOutput> | void {
    const command = new UpdateDevEndpointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates an existing job definition.</p>
   */
  public updateJob(args: UpdateJobCommandInput, options?: __HttpHandlerOptions): Promise<UpdateJobCommandOutput>;
  public updateJob(args: UpdateJobCommandInput, cb: (err: any, data?: UpdateJobCommandOutput) => void): void;
  public updateJob(
    args: UpdateJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateJobCommandOutput) => void
  ): void;
  public updateJob(
    args: UpdateJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateJobCommandOutput) => void),
    cb?: (err: any, data?: UpdateJobCommandOutput) => void
  ): Promise<UpdateJobCommandOutput> | void {
    const command = new UpdateJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates an existing machine learning transform. Call this operation to tune the algorithm parameters to achieve better results.</p>
   *
   *          <p>After calling this operation, you can call the <code>StartMLEvaluationTaskRun</code>
   *       operation to assess how well your new parameters achieved your goals (such as improving the
   *       quality of your machine learning transform, or making it more cost-effective).</p>
   */
  public updateMLTransform(
    args: UpdateMLTransformCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMLTransformCommandOutput>;
  public updateMLTransform(
    args: UpdateMLTransformCommandInput,
    cb: (err: any, data?: UpdateMLTransformCommandOutput) => void
  ): void;
  public updateMLTransform(
    args: UpdateMLTransformCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMLTransformCommandOutput) => void
  ): void;
  public updateMLTransform(
    args: UpdateMLTransformCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateMLTransformCommandOutput) => void),
    cb?: (err: any, data?: UpdateMLTransformCommandOutput) => void
  ): Promise<UpdateMLTransformCommandOutput> | void {
    const command = new UpdateMLTransformCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a partition.</p>
   */
  public updatePartition(
    args: UpdatePartitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePartitionCommandOutput>;
  public updatePartition(
    args: UpdatePartitionCommandInput,
    cb: (err: any, data?: UpdatePartitionCommandOutput) => void
  ): void;
  public updatePartition(
    args: UpdatePartitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePartitionCommandOutput) => void
  ): void;
  public updatePartition(
    args: UpdatePartitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdatePartitionCommandOutput) => void),
    cb?: (err: any, data?: UpdatePartitionCommandOutput) => void
  ): Promise<UpdatePartitionCommandOutput> | void {
    const command = new UpdatePartitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a metadata table in the Data Catalog.</p>
   */
  public updateTable(args: UpdateTableCommandInput, options?: __HttpHandlerOptions): Promise<UpdateTableCommandOutput>;
  public updateTable(args: UpdateTableCommandInput, cb: (err: any, data?: UpdateTableCommandOutput) => void): void;
  public updateTable(
    args: UpdateTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTableCommandOutput) => void
  ): void;
  public updateTable(
    args: UpdateTableCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateTableCommandOutput) => void),
    cb?: (err: any, data?: UpdateTableCommandOutput) => void
  ): Promise<UpdateTableCommandOutput> | void {
    const command = new UpdateTableCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a trigger definition.</p>
   */
  public updateTrigger(
    args: UpdateTriggerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTriggerCommandOutput>;
  public updateTrigger(
    args: UpdateTriggerCommandInput,
    cb: (err: any, data?: UpdateTriggerCommandOutput) => void
  ): void;
  public updateTrigger(
    args: UpdateTriggerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTriggerCommandOutput) => void
  ): void;
  public updateTrigger(
    args: UpdateTriggerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateTriggerCommandOutput) => void),
    cb?: (err: any, data?: UpdateTriggerCommandOutput) => void
  ): Promise<UpdateTriggerCommandOutput> | void {
    const command = new UpdateTriggerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates an existing function definition in the Data Catalog.</p>
   */
  public updateUserDefinedFunction(
    args: UpdateUserDefinedFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUserDefinedFunctionCommandOutput>;
  public updateUserDefinedFunction(
    args: UpdateUserDefinedFunctionCommandInput,
    cb: (err: any, data?: UpdateUserDefinedFunctionCommandOutput) => void
  ): void;
  public updateUserDefinedFunction(
    args: UpdateUserDefinedFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserDefinedFunctionCommandOutput) => void
  ): void;
  public updateUserDefinedFunction(
    args: UpdateUserDefinedFunctionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateUserDefinedFunctionCommandOutput) => void),
    cb?: (err: any, data?: UpdateUserDefinedFunctionCommandOutput) => void
  ): Promise<UpdateUserDefinedFunctionCommandOutput> | void {
    const command = new UpdateUserDefinedFunctionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates an existing workflow.</p>
   */
  public updateWorkflow(
    args: UpdateWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkflowCommandOutput>;
  public updateWorkflow(
    args: UpdateWorkflowCommandInput,
    cb: (err: any, data?: UpdateWorkflowCommandOutput) => void
  ): void;
  public updateWorkflow(
    args: UpdateWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkflowCommandOutput) => void
  ): void;
  public updateWorkflow(
    args: UpdateWorkflowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateWorkflowCommandOutput) => void),
    cb?: (err: any, data?: UpdateWorkflowCommandOutput) => void
  ): Promise<UpdateWorkflowCommandOutput> | void {
    const command = new UpdateWorkflowCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
