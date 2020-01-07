import { GlueClient } from "./GlueClient";
import { BatchCreatePartitionCommandInput, BatchCreatePartitionCommandOutput } from "./commands/BatchCreatePartitionCommand";
import { BatchDeleteConnectionCommandInput, BatchDeleteConnectionCommandOutput } from "./commands/BatchDeleteConnectionCommand";
import { BatchDeletePartitionCommandInput, BatchDeletePartitionCommandOutput } from "./commands/BatchDeletePartitionCommand";
import { BatchDeleteTableCommandInput, BatchDeleteTableCommandOutput } from "./commands/BatchDeleteTableCommand";
import { BatchDeleteTableVersionCommandInput, BatchDeleteTableVersionCommandOutput } from "./commands/BatchDeleteTableVersionCommand";
import { BatchGetCrawlersCommandInput, BatchGetCrawlersCommandOutput } from "./commands/BatchGetCrawlersCommand";
import { BatchGetDevEndpointsCommandInput, BatchGetDevEndpointsCommandOutput } from "./commands/BatchGetDevEndpointsCommand";
import { BatchGetJobsCommandInput, BatchGetJobsCommandOutput } from "./commands/BatchGetJobsCommand";
import { BatchGetPartitionCommandInput, BatchGetPartitionCommandOutput } from "./commands/BatchGetPartitionCommand";
import { BatchGetTriggersCommandInput, BatchGetTriggersCommandOutput } from "./commands/BatchGetTriggersCommand";
import { BatchGetWorkflowsCommandInput, BatchGetWorkflowsCommandOutput } from "./commands/BatchGetWorkflowsCommand";
import { BatchStopJobRunCommandInput, BatchStopJobRunCommandOutput } from "./commands/BatchStopJobRunCommand";
import { CancelMLTaskRunCommandInput, CancelMLTaskRunCommandOutput } from "./commands/CancelMLTaskRunCommand";
import { CreateClassifierCommandInput, CreateClassifierCommandOutput } from "./commands/CreateClassifierCommand";
import { CreateConnectionCommandInput, CreateConnectionCommandOutput } from "./commands/CreateConnectionCommand";
import { CreateCrawlerCommandInput, CreateCrawlerCommandOutput } from "./commands/CreateCrawlerCommand";
import { CreateDatabaseCommandInput, CreateDatabaseCommandOutput } from "./commands/CreateDatabaseCommand";
import { CreateDevEndpointCommandInput, CreateDevEndpointCommandOutput } from "./commands/CreateDevEndpointCommand";
import { CreateJobCommandInput, CreateJobCommandOutput } from "./commands/CreateJobCommand";
import { CreateMLTransformCommandInput, CreateMLTransformCommandOutput } from "./commands/CreateMLTransformCommand";
import { CreatePartitionCommandInput, CreatePartitionCommandOutput } from "./commands/CreatePartitionCommand";
import { CreateScriptCommandInput, CreateScriptCommandOutput } from "./commands/CreateScriptCommand";
import { CreateSecurityConfigurationCommandInput, CreateSecurityConfigurationCommandOutput } from "./commands/CreateSecurityConfigurationCommand";
import { CreateTableCommandInput, CreateTableCommandOutput } from "./commands/CreateTableCommand";
import { CreateTriggerCommandInput, CreateTriggerCommandOutput } from "./commands/CreateTriggerCommand";
import { CreateUserDefinedFunctionCommandInput, CreateUserDefinedFunctionCommandOutput } from "./commands/CreateUserDefinedFunctionCommand";
import { CreateWorkflowCommandInput, CreateWorkflowCommandOutput } from "./commands/CreateWorkflowCommand";
import { DeleteClassifierCommandInput, DeleteClassifierCommandOutput } from "./commands/DeleteClassifierCommand";
import { DeleteConnectionCommandInput, DeleteConnectionCommandOutput } from "./commands/DeleteConnectionCommand";
import { DeleteCrawlerCommandInput, DeleteCrawlerCommandOutput } from "./commands/DeleteCrawlerCommand";
import { DeleteDatabaseCommandInput, DeleteDatabaseCommandOutput } from "./commands/DeleteDatabaseCommand";
import { DeleteDevEndpointCommandInput, DeleteDevEndpointCommandOutput } from "./commands/DeleteDevEndpointCommand";
import { DeleteJobCommandInput, DeleteJobCommandOutput } from "./commands/DeleteJobCommand";
import { DeleteMLTransformCommandInput, DeleteMLTransformCommandOutput } from "./commands/DeleteMLTransformCommand";
import { DeletePartitionCommandInput, DeletePartitionCommandOutput } from "./commands/DeletePartitionCommand";
import { DeleteResourcePolicyCommandInput, DeleteResourcePolicyCommandOutput } from "./commands/DeleteResourcePolicyCommand";
import { DeleteSecurityConfigurationCommandInput, DeleteSecurityConfigurationCommandOutput } from "./commands/DeleteSecurityConfigurationCommand";
import { DeleteTableCommandInput, DeleteTableCommandOutput } from "./commands/DeleteTableCommand";
import { DeleteTableVersionCommandInput, DeleteTableVersionCommandOutput } from "./commands/DeleteTableVersionCommand";
import { DeleteTriggerCommandInput, DeleteTriggerCommandOutput } from "./commands/DeleteTriggerCommand";
import { DeleteUserDefinedFunctionCommandInput, DeleteUserDefinedFunctionCommandOutput } from "./commands/DeleteUserDefinedFunctionCommand";
import { DeleteWorkflowCommandInput, DeleteWorkflowCommandOutput } from "./commands/DeleteWorkflowCommand";
import { GetCatalogImportStatusCommandInput, GetCatalogImportStatusCommandOutput } from "./commands/GetCatalogImportStatusCommand";
import { GetClassifierCommandInput, GetClassifierCommandOutput } from "./commands/GetClassifierCommand";
import { GetClassifiersCommandInput, GetClassifiersCommandOutput } from "./commands/GetClassifiersCommand";
import { GetConnectionCommandInput, GetConnectionCommandOutput } from "./commands/GetConnectionCommand";
import { GetConnectionsCommandInput, GetConnectionsCommandOutput } from "./commands/GetConnectionsCommand";
import { GetCrawlerCommandInput, GetCrawlerCommandOutput } from "./commands/GetCrawlerCommand";
import { GetCrawlerMetricsCommandInput, GetCrawlerMetricsCommandOutput } from "./commands/GetCrawlerMetricsCommand";
import { GetCrawlersCommandInput, GetCrawlersCommandOutput } from "./commands/GetCrawlersCommand";
import { GetDataCatalogEncryptionSettingsCommandInput, GetDataCatalogEncryptionSettingsCommandOutput } from "./commands/GetDataCatalogEncryptionSettingsCommand";
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
import { GetPartitionsCommandInput, GetPartitionsCommandOutput } from "./commands/GetPartitionsCommand";
import { GetPlanCommandInput, GetPlanCommandOutput } from "./commands/GetPlanCommand";
import { GetResourcePolicyCommandInput, GetResourcePolicyCommandOutput } from "./commands/GetResourcePolicyCommand";
import { GetSecurityConfigurationCommandInput, GetSecurityConfigurationCommandOutput } from "./commands/GetSecurityConfigurationCommand";
import { GetSecurityConfigurationsCommandInput, GetSecurityConfigurationsCommandOutput } from "./commands/GetSecurityConfigurationsCommand";
import { GetTableCommandInput, GetTableCommandOutput } from "./commands/GetTableCommand";
import { GetTableVersionCommandInput, GetTableVersionCommandOutput } from "./commands/GetTableVersionCommand";
import { GetTableVersionsCommandInput, GetTableVersionsCommandOutput } from "./commands/GetTableVersionsCommand";
import { GetTablesCommandInput, GetTablesCommandOutput } from "./commands/GetTablesCommand";
import { GetTagsCommandInput, GetTagsCommandOutput } from "./commands/GetTagsCommand";
import { GetTriggerCommandInput, GetTriggerCommandOutput } from "./commands/GetTriggerCommand";
import { GetTriggersCommandInput, GetTriggersCommandOutput } from "./commands/GetTriggersCommand";
import { GetUserDefinedFunctionCommandInput, GetUserDefinedFunctionCommandOutput } from "./commands/GetUserDefinedFunctionCommand";
import { GetUserDefinedFunctionsCommandInput, GetUserDefinedFunctionsCommandOutput } from "./commands/GetUserDefinedFunctionsCommand";
import { GetWorkflowCommandInput, GetWorkflowCommandOutput } from "./commands/GetWorkflowCommand";
import { GetWorkflowRunCommandInput, GetWorkflowRunCommandOutput } from "./commands/GetWorkflowRunCommand";
import { GetWorkflowRunPropertiesCommandInput, GetWorkflowRunPropertiesCommandOutput } from "./commands/GetWorkflowRunPropertiesCommand";
import { GetWorkflowRunsCommandInput, GetWorkflowRunsCommandOutput } from "./commands/GetWorkflowRunsCommand";
import { ImportCatalogToGlueCommandInput, ImportCatalogToGlueCommandOutput } from "./commands/ImportCatalogToGlueCommand";
import { ListCrawlersCommandInput, ListCrawlersCommandOutput } from "./commands/ListCrawlersCommand";
import { ListDevEndpointsCommandInput, ListDevEndpointsCommandOutput } from "./commands/ListDevEndpointsCommand";
import { ListJobsCommandInput, ListJobsCommandOutput } from "./commands/ListJobsCommand";
import { ListTriggersCommandInput, ListTriggersCommandOutput } from "./commands/ListTriggersCommand";
import { ListWorkflowsCommandInput, ListWorkflowsCommandOutput } from "./commands/ListWorkflowsCommand";
import { PutDataCatalogEncryptionSettingsCommandInput, PutDataCatalogEncryptionSettingsCommandOutput } from "./commands/PutDataCatalogEncryptionSettingsCommand";
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput } from "./commands/PutResourcePolicyCommand";
import { PutWorkflowRunPropertiesCommandInput, PutWorkflowRunPropertiesCommandOutput } from "./commands/PutWorkflowRunPropertiesCommand";
import { ResetJobBookmarkCommandInput, ResetJobBookmarkCommandOutput } from "./commands/ResetJobBookmarkCommand";
import { SearchTablesCommandInput, SearchTablesCommandOutput } from "./commands/SearchTablesCommand";
import { StartCrawlerCommandInput, StartCrawlerCommandOutput } from "./commands/StartCrawlerCommand";
import { StartCrawlerScheduleCommandInput, StartCrawlerScheduleCommandOutput } from "./commands/StartCrawlerScheduleCommand";
import { StartExportLabelsTaskRunCommandInput, StartExportLabelsTaskRunCommandOutput } from "./commands/StartExportLabelsTaskRunCommand";
import { StartImportLabelsTaskRunCommandInput, StartImportLabelsTaskRunCommandOutput } from "./commands/StartImportLabelsTaskRunCommand";
import { StartJobRunCommandInput, StartJobRunCommandOutput } from "./commands/StartJobRunCommand";
import { StartMLEvaluationTaskRunCommandInput, StartMLEvaluationTaskRunCommandOutput } from "./commands/StartMLEvaluationTaskRunCommand";
import { StartMLLabelingSetGenerationTaskRunCommandInput, StartMLLabelingSetGenerationTaskRunCommandOutput } from "./commands/StartMLLabelingSetGenerationTaskRunCommand";
import { StartTriggerCommandInput, StartTriggerCommandOutput } from "./commands/StartTriggerCommand";
import { StartWorkflowRunCommandInput, StartWorkflowRunCommandOutput } from "./commands/StartWorkflowRunCommand";
import { StopCrawlerCommandInput, StopCrawlerCommandOutput } from "./commands/StopCrawlerCommand";
import { StopCrawlerScheduleCommandInput, StopCrawlerScheduleCommandOutput } from "./commands/StopCrawlerScheduleCommand";
import { StopTriggerCommandInput, StopTriggerCommandOutput } from "./commands/StopTriggerCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateClassifierCommandInput, UpdateClassifierCommandOutput } from "./commands/UpdateClassifierCommand";
import { UpdateConnectionCommandInput, UpdateConnectionCommandOutput } from "./commands/UpdateConnectionCommand";
import { UpdateCrawlerCommandInput, UpdateCrawlerCommandOutput } from "./commands/UpdateCrawlerCommand";
import { UpdateCrawlerScheduleCommandInput, UpdateCrawlerScheduleCommandOutput } from "./commands/UpdateCrawlerScheduleCommand";
import { UpdateDatabaseCommandInput, UpdateDatabaseCommandOutput } from "./commands/UpdateDatabaseCommand";
import { UpdateDevEndpointCommandInput, UpdateDevEndpointCommandOutput } from "./commands/UpdateDevEndpointCommand";
import { UpdateJobCommandInput, UpdateJobCommandOutput } from "./commands/UpdateJobCommand";
import { UpdateMLTransformCommandInput, UpdateMLTransformCommandOutput } from "./commands/UpdateMLTransformCommand";
import { UpdatePartitionCommandInput, UpdatePartitionCommandOutput } from "./commands/UpdatePartitionCommand";
import { UpdateTableCommandInput, UpdateTableCommandOutput } from "./commands/UpdateTableCommand";
import { UpdateTriggerCommandInput, UpdateTriggerCommandOutput } from "./commands/UpdateTriggerCommand";
import { UpdateUserDefinedFunctionCommandInput, UpdateUserDefinedFunctionCommandOutput } from "./commands/UpdateUserDefinedFunctionCommand";
import { UpdateWorkflowCommandInput, UpdateWorkflowCommandOutput } from "./commands/UpdateWorkflowCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>AWS Glue</fullname>
 *          <p>Defines the public endpoint for the AWS Glue service.</p>
 */
export declare class Glue extends GlueClient {
    /**
     * <p>Retrieves a list of tags associated with a resource.</p>
     */
    getTags(args: GetTagsCommandInput, options?: __HttpHandlerOptions): Promise<GetTagsCommandOutput>;
    getTags(args: GetTagsCommandInput, cb: (err: any, data?: GetTagsCommandOutput) => void): void;
    getTags(args: GetTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetTagsCommandOutput) => void): void;
    /**
     * <p>Adds tags to a resource. A tag is a label you can assign to an AWS resource.
     *       In AWS Glue, you can tag only certain resources. For information about what
     *       resources you can tag, see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html">AWS Tags in AWS Glue</a>.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes tags from a resource.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Creates one or more partitions in a batch operation.</p>
     */
    batchCreatePartition(args: BatchCreatePartitionCommandInput, options?: __HttpHandlerOptions): Promise<BatchCreatePartitionCommandOutput>;
    batchCreatePartition(args: BatchCreatePartitionCommandInput, cb: (err: any, data?: BatchCreatePartitionCommandOutput) => void): void;
    batchCreatePartition(args: BatchCreatePartitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchCreatePartitionCommandOutput) => void): void;
    /**
     * <p>Deletes a list of connection definitions from the Data Catalog.</p>
     */
    batchDeleteConnection(args: BatchDeleteConnectionCommandInput, options?: __HttpHandlerOptions): Promise<BatchDeleteConnectionCommandOutput>;
    batchDeleteConnection(args: BatchDeleteConnectionCommandInput, cb: (err: any, data?: BatchDeleteConnectionCommandOutput) => void): void;
    batchDeleteConnection(args: BatchDeleteConnectionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchDeleteConnectionCommandOutput) => void): void;
    /**
     * <p>Deletes one or more partitions in a batch operation.</p>
     */
    batchDeletePartition(args: BatchDeletePartitionCommandInput, options?: __HttpHandlerOptions): Promise<BatchDeletePartitionCommandOutput>;
    batchDeletePartition(args: BatchDeletePartitionCommandInput, cb: (err: any, data?: BatchDeletePartitionCommandOutput) => void): void;
    batchDeletePartition(args: BatchDeletePartitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchDeletePartitionCommandOutput) => void): void;
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
    batchDeleteTable(args: BatchDeleteTableCommandInput, options?: __HttpHandlerOptions): Promise<BatchDeleteTableCommandOutput>;
    batchDeleteTable(args: BatchDeleteTableCommandInput, cb: (err: any, data?: BatchDeleteTableCommandOutput) => void): void;
    batchDeleteTable(args: BatchDeleteTableCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchDeleteTableCommandOutput) => void): void;
    /**
     * <p>Deletes a specified batch of versions of a table.</p>
     */
    batchDeleteTableVersion(args: BatchDeleteTableVersionCommandInput, options?: __HttpHandlerOptions): Promise<BatchDeleteTableVersionCommandOutput>;
    batchDeleteTableVersion(args: BatchDeleteTableVersionCommandInput, cb: (err: any, data?: BatchDeleteTableVersionCommandOutput) => void): void;
    batchDeleteTableVersion(args: BatchDeleteTableVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchDeleteTableVersionCommandOutput) => void): void;
    /**
     * <p>Retrieves partitions in a batch request.</p>
     */
    batchGetPartition(args: BatchGetPartitionCommandInput, options?: __HttpHandlerOptions): Promise<BatchGetPartitionCommandOutput>;
    batchGetPartition(args: BatchGetPartitionCommandInput, cb: (err: any, data?: BatchGetPartitionCommandOutput) => void): void;
    batchGetPartition(args: BatchGetPartitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchGetPartitionCommandOutput) => void): void;
    /**
     * <p>Creates a connection definition in the Data Catalog.</p>
     */
    createConnection(args: CreateConnectionCommandInput, options?: __HttpHandlerOptions): Promise<CreateConnectionCommandOutput>;
    createConnection(args: CreateConnectionCommandInput, cb: (err: any, data?: CreateConnectionCommandOutput) => void): void;
    createConnection(args: CreateConnectionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateConnectionCommandOutput) => void): void;
    /**
     * <p>Creates a new database in a Data Catalog.</p>
     */
    createDatabase(args: CreateDatabaseCommandInput, options?: __HttpHandlerOptions): Promise<CreateDatabaseCommandOutput>;
    createDatabase(args: CreateDatabaseCommandInput, cb: (err: any, data?: CreateDatabaseCommandOutput) => void): void;
    createDatabase(args: CreateDatabaseCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDatabaseCommandOutput) => void): void;
    /**
     * <p>Creates a new partition.</p>
     */
    createPartition(args: CreatePartitionCommandInput, options?: __HttpHandlerOptions): Promise<CreatePartitionCommandOutput>;
    createPartition(args: CreatePartitionCommandInput, cb: (err: any, data?: CreatePartitionCommandOutput) => void): void;
    createPartition(args: CreatePartitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreatePartitionCommandOutput) => void): void;
    /**
     * <p>Creates a new table definition in the Data Catalog.</p>
     */
    createTable(args: CreateTableCommandInput, options?: __HttpHandlerOptions): Promise<CreateTableCommandOutput>;
    createTable(args: CreateTableCommandInput, cb: (err: any, data?: CreateTableCommandOutput) => void): void;
    createTable(args: CreateTableCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateTableCommandOutput) => void): void;
    /**
     * <p>Creates a new function definition in the Data Catalog.</p>
     */
    createUserDefinedFunction(args: CreateUserDefinedFunctionCommandInput, options?: __HttpHandlerOptions): Promise<CreateUserDefinedFunctionCommandOutput>;
    createUserDefinedFunction(args: CreateUserDefinedFunctionCommandInput, cb: (err: any, data?: CreateUserDefinedFunctionCommandOutput) => void): void;
    createUserDefinedFunction(args: CreateUserDefinedFunctionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateUserDefinedFunctionCommandOutput) => void): void;
    /**
     * <p>Deletes a connection from the Data Catalog.</p>
     */
    deleteConnection(args: DeleteConnectionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteConnectionCommandOutput>;
    deleteConnection(args: DeleteConnectionCommandInput, cb: (err: any, data?: DeleteConnectionCommandOutput) => void): void;
    deleteConnection(args: DeleteConnectionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteConnectionCommandOutput) => void): void;
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
    deleteDatabase(args: DeleteDatabaseCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDatabaseCommandOutput>;
    deleteDatabase(args: DeleteDatabaseCommandInput, cb: (err: any, data?: DeleteDatabaseCommandOutput) => void): void;
    deleteDatabase(args: DeleteDatabaseCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDatabaseCommandOutput) => void): void;
    /**
     * <p>Deletes a specified partition.</p>
     */
    deletePartition(args: DeletePartitionCommandInput, options?: __HttpHandlerOptions): Promise<DeletePartitionCommandOutput>;
    deletePartition(args: DeletePartitionCommandInput, cb: (err: any, data?: DeletePartitionCommandOutput) => void): void;
    deletePartition(args: DeletePartitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeletePartitionCommandOutput) => void): void;
    /**
     * <p>Deletes a specified policy.</p>
     */
    deleteResourcePolicy(args: DeleteResourcePolicyCommandInput, options?: __HttpHandlerOptions): Promise<DeleteResourcePolicyCommandOutput>;
    deleteResourcePolicy(args: DeleteResourcePolicyCommandInput, cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void): void;
    deleteResourcePolicy(args: DeleteResourcePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void): void;
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
    deleteTable(args: DeleteTableCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTableCommandOutput>;
    deleteTable(args: DeleteTableCommandInput, cb: (err: any, data?: DeleteTableCommandOutput) => void): void;
    deleteTable(args: DeleteTableCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteTableCommandOutput) => void): void;
    /**
     * <p>Deletes a specified version of a table.</p>
     */
    deleteTableVersion(args: DeleteTableVersionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTableVersionCommandOutput>;
    deleteTableVersion(args: DeleteTableVersionCommandInput, cb: (err: any, data?: DeleteTableVersionCommandOutput) => void): void;
    deleteTableVersion(args: DeleteTableVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteTableVersionCommandOutput) => void): void;
    /**
     * <p>Deletes an existing function definition from the Data Catalog.</p>
     */
    deleteUserDefinedFunction(args: DeleteUserDefinedFunctionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteUserDefinedFunctionCommandOutput>;
    deleteUserDefinedFunction(args: DeleteUserDefinedFunctionCommandInput, cb: (err: any, data?: DeleteUserDefinedFunctionCommandOutput) => void): void;
    deleteUserDefinedFunction(args: DeleteUserDefinedFunctionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteUserDefinedFunctionCommandOutput) => void): void;
    /**
     * <p>Retrieves the status of a migration operation.</p>
     */
    getCatalogImportStatus(args: GetCatalogImportStatusCommandInput, options?: __HttpHandlerOptions): Promise<GetCatalogImportStatusCommandOutput>;
    getCatalogImportStatus(args: GetCatalogImportStatusCommandInput, cb: (err: any, data?: GetCatalogImportStatusCommandOutput) => void): void;
    getCatalogImportStatus(args: GetCatalogImportStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetCatalogImportStatusCommandOutput) => void): void;
    /**
     * <p>Retrieves a connection definition from the Data Catalog.</p>
     */
    getConnection(args: GetConnectionCommandInput, options?: __HttpHandlerOptions): Promise<GetConnectionCommandOutput>;
    getConnection(args: GetConnectionCommandInput, cb: (err: any, data?: GetConnectionCommandOutput) => void): void;
    getConnection(args: GetConnectionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetConnectionCommandOutput) => void): void;
    /**
     * <p>Retrieves a list of connection definitions from the Data Catalog.</p>
     */
    getConnections(args: GetConnectionsCommandInput, options?: __HttpHandlerOptions): Promise<GetConnectionsCommandOutput>;
    getConnections(args: GetConnectionsCommandInput, cb: (err: any, data?: GetConnectionsCommandOutput) => void): void;
    getConnections(args: GetConnectionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetConnectionsCommandOutput) => void): void;
    /**
     * <p>Retrieves the security configuration for a specified catalog.</p>
     */
    getDataCatalogEncryptionSettings(args: GetDataCatalogEncryptionSettingsCommandInput, options?: __HttpHandlerOptions): Promise<GetDataCatalogEncryptionSettingsCommandOutput>;
    getDataCatalogEncryptionSettings(args: GetDataCatalogEncryptionSettingsCommandInput, cb: (err: any, data?: GetDataCatalogEncryptionSettingsCommandOutput) => void): void;
    getDataCatalogEncryptionSettings(args: GetDataCatalogEncryptionSettingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDataCatalogEncryptionSettingsCommandOutput) => void): void;
    /**
     * <p>Retrieves the definition of a specified database.</p>
     */
    getDatabase(args: GetDatabaseCommandInput, options?: __HttpHandlerOptions): Promise<GetDatabaseCommandOutput>;
    getDatabase(args: GetDatabaseCommandInput, cb: (err: any, data?: GetDatabaseCommandOutput) => void): void;
    getDatabase(args: GetDatabaseCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDatabaseCommandOutput) => void): void;
    /**
     * <p>Retrieves all databases defined in a given Data Catalog.</p>
     */
    getDatabases(args: GetDatabasesCommandInput, options?: __HttpHandlerOptions): Promise<GetDatabasesCommandOutput>;
    getDatabases(args: GetDatabasesCommandInput, cb: (err: any, data?: GetDatabasesCommandOutput) => void): void;
    getDatabases(args: GetDatabasesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDatabasesCommandOutput) => void): void;
    /**
     * <p>Retrieves information about a specified partition.</p>
     */
    getPartition(args: GetPartitionCommandInput, options?: __HttpHandlerOptions): Promise<GetPartitionCommandOutput>;
    getPartition(args: GetPartitionCommandInput, cb: (err: any, data?: GetPartitionCommandOutput) => void): void;
    getPartition(args: GetPartitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetPartitionCommandOutput) => void): void;
    /**
     * <p>Retrieves information about the partitions in a table.</p>
     */
    getPartitions(args: GetPartitionsCommandInput, options?: __HttpHandlerOptions): Promise<GetPartitionsCommandOutput>;
    getPartitions(args: GetPartitionsCommandInput, cb: (err: any, data?: GetPartitionsCommandOutput) => void): void;
    getPartitions(args: GetPartitionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetPartitionsCommandOutput) => void): void;
    /**
     * <p>Retrieves a specified resource policy.</p>
     */
    getResourcePolicy(args: GetResourcePolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetResourcePolicyCommandOutput>;
    getResourcePolicy(args: GetResourcePolicyCommandInput, cb: (err: any, data?: GetResourcePolicyCommandOutput) => void): void;
    getResourcePolicy(args: GetResourcePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetResourcePolicyCommandOutput) => void): void;
    /**
     * <p>Retrieves the <code>Table</code> definition in a Data Catalog for
     *       a specified table.</p>
     */
    getTable(args: GetTableCommandInput, options?: __HttpHandlerOptions): Promise<GetTableCommandOutput>;
    getTable(args: GetTableCommandInput, cb: (err: any, data?: GetTableCommandOutput) => void): void;
    getTable(args: GetTableCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetTableCommandOutput) => void): void;
    /**
     * <p>Retrieves a specified version of a table.</p>
     */
    getTableVersion(args: GetTableVersionCommandInput, options?: __HttpHandlerOptions): Promise<GetTableVersionCommandOutput>;
    getTableVersion(args: GetTableVersionCommandInput, cb: (err: any, data?: GetTableVersionCommandOutput) => void): void;
    getTableVersion(args: GetTableVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetTableVersionCommandOutput) => void): void;
    /**
     * <p>Retrieves a list of strings that identify available versions of
     *       a specified table.</p>
     */
    getTableVersions(args: GetTableVersionsCommandInput, options?: __HttpHandlerOptions): Promise<GetTableVersionsCommandOutput>;
    getTableVersions(args: GetTableVersionsCommandInput, cb: (err: any, data?: GetTableVersionsCommandOutput) => void): void;
    getTableVersions(args: GetTableVersionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetTableVersionsCommandOutput) => void): void;
    /**
     * <p>Retrieves the definitions of some or all of the tables in a given
     *       <code>Database</code>.</p>
     */
    getTables(args: GetTablesCommandInput, options?: __HttpHandlerOptions): Promise<GetTablesCommandOutput>;
    getTables(args: GetTablesCommandInput, cb: (err: any, data?: GetTablesCommandOutput) => void): void;
    getTables(args: GetTablesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetTablesCommandOutput) => void): void;
    /**
     * <p>Retrieves a specified function definition from the Data Catalog.</p>
     */
    getUserDefinedFunction(args: GetUserDefinedFunctionCommandInput, options?: __HttpHandlerOptions): Promise<GetUserDefinedFunctionCommandOutput>;
    getUserDefinedFunction(args: GetUserDefinedFunctionCommandInput, cb: (err: any, data?: GetUserDefinedFunctionCommandOutput) => void): void;
    getUserDefinedFunction(args: GetUserDefinedFunctionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetUserDefinedFunctionCommandOutput) => void): void;
    /**
     * <p>Retrieves multiple function definitions from the Data Catalog.</p>
     */
    getUserDefinedFunctions(args: GetUserDefinedFunctionsCommandInput, options?: __HttpHandlerOptions): Promise<GetUserDefinedFunctionsCommandOutput>;
    getUserDefinedFunctions(args: GetUserDefinedFunctionsCommandInput, cb: (err: any, data?: GetUserDefinedFunctionsCommandOutput) => void): void;
    getUserDefinedFunctions(args: GetUserDefinedFunctionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetUserDefinedFunctionsCommandOutput) => void): void;
    /**
     * <p>Imports an existing Amazon Athena Data Catalog to AWS Glue</p>
     */
    importCatalogToGlue(args: ImportCatalogToGlueCommandInput, options?: __HttpHandlerOptions): Promise<ImportCatalogToGlueCommandOutput>;
    importCatalogToGlue(args: ImportCatalogToGlueCommandInput, cb: (err: any, data?: ImportCatalogToGlueCommandOutput) => void): void;
    importCatalogToGlue(args: ImportCatalogToGlueCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ImportCatalogToGlueCommandOutput) => void): void;
    /**
     * <p>Sets the security configuration for a specified catalog. After the configuration has been
     *       set, the specified encryption is applied to every catalog write thereafter.</p>
     */
    putDataCatalogEncryptionSettings(args: PutDataCatalogEncryptionSettingsCommandInput, options?: __HttpHandlerOptions): Promise<PutDataCatalogEncryptionSettingsCommandOutput>;
    putDataCatalogEncryptionSettings(args: PutDataCatalogEncryptionSettingsCommandInput, cb: (err: any, data?: PutDataCatalogEncryptionSettingsCommandOutput) => void): void;
    putDataCatalogEncryptionSettings(args: PutDataCatalogEncryptionSettingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutDataCatalogEncryptionSettingsCommandOutput) => void): void;
    /**
     * <p>Sets the Data Catalog resource policy for access control.</p>
     */
    putResourcePolicy(args: PutResourcePolicyCommandInput, options?: __HttpHandlerOptions): Promise<PutResourcePolicyCommandOutput>;
    putResourcePolicy(args: PutResourcePolicyCommandInput, cb: (err: any, data?: PutResourcePolicyCommandOutput) => void): void;
    putResourcePolicy(args: PutResourcePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutResourcePolicyCommandOutput) => void): void;
    /**
     * <p>Searches a set of tables based on properties in the table metadata as well as on the parent database. You can search against text or filter conditions. </p>
     *          <p>You can only get tables that you have access to based on the security policies defined in Lake Formation. You need at least a read-only access to the table for it to be returned. If you do not have access to all the columns in the table, these columns will not be searched against when returning the list of tables back to you. If you have access to the columns but not the data in the columns, those columns and the associated metadata for those columns will be included in the search. </p>
     */
    searchTables(args: SearchTablesCommandInput, options?: __HttpHandlerOptions): Promise<SearchTablesCommandOutput>;
    searchTables(args: SearchTablesCommandInput, cb: (err: any, data?: SearchTablesCommandOutput) => void): void;
    searchTables(args: SearchTablesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SearchTablesCommandOutput) => void): void;
    /**
     * <p>Updates a connection definition in the Data Catalog.</p>
     */
    updateConnection(args: UpdateConnectionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateConnectionCommandOutput>;
    updateConnection(args: UpdateConnectionCommandInput, cb: (err: any, data?: UpdateConnectionCommandOutput) => void): void;
    updateConnection(args: UpdateConnectionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateConnectionCommandOutput) => void): void;
    /**
     * <p>Updates an existing database definition in a Data Catalog.</p>
     */
    updateDatabase(args: UpdateDatabaseCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDatabaseCommandOutput>;
    updateDatabase(args: UpdateDatabaseCommandInput, cb: (err: any, data?: UpdateDatabaseCommandOutput) => void): void;
    updateDatabase(args: UpdateDatabaseCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDatabaseCommandOutput) => void): void;
    /**
     * <p>Updates a partition.</p>
     */
    updatePartition(args: UpdatePartitionCommandInput, options?: __HttpHandlerOptions): Promise<UpdatePartitionCommandOutput>;
    updatePartition(args: UpdatePartitionCommandInput, cb: (err: any, data?: UpdatePartitionCommandOutput) => void): void;
    updatePartition(args: UpdatePartitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdatePartitionCommandOutput) => void): void;
    /**
     * <p>Updates a metadata table in the Data Catalog.</p>
     */
    updateTable(args: UpdateTableCommandInput, options?: __HttpHandlerOptions): Promise<UpdateTableCommandOutput>;
    updateTable(args: UpdateTableCommandInput, cb: (err: any, data?: UpdateTableCommandOutput) => void): void;
    updateTable(args: UpdateTableCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateTableCommandOutput) => void): void;
    /**
     * <p>Updates an existing function definition in the Data Catalog.</p>
     */
    updateUserDefinedFunction(args: UpdateUserDefinedFunctionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateUserDefinedFunctionCommandOutput>;
    updateUserDefinedFunction(args: UpdateUserDefinedFunctionCommandInput, cb: (err: any, data?: UpdateUserDefinedFunctionCommandOutput) => void): void;
    updateUserDefinedFunction(args: UpdateUserDefinedFunctionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateUserDefinedFunctionCommandOutput) => void): void;
    /**
     * <p>Returns a list of resource metadata for a given list of development endpoint names. After
     *       calling the <code>ListDevEndpoints</code> operation, you can call this operation to access the
     *       data to which you have been granted permissions. This operation supports all IAM permissions,
     *       including permission conditions that uses tags.</p>
     */
    batchGetDevEndpoints(args: BatchGetDevEndpointsCommandInput, options?: __HttpHandlerOptions): Promise<BatchGetDevEndpointsCommandOutput>;
    batchGetDevEndpoints(args: BatchGetDevEndpointsCommandInput, cb: (err: any, data?: BatchGetDevEndpointsCommandOutput) => void): void;
    batchGetDevEndpoints(args: BatchGetDevEndpointsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchGetDevEndpointsCommandOutput) => void): void;
    /**
     * <p>Creates a new development endpoint.</p>
     */
    createDevEndpoint(args: CreateDevEndpointCommandInput, options?: __HttpHandlerOptions): Promise<CreateDevEndpointCommandOutput>;
    createDevEndpoint(args: CreateDevEndpointCommandInput, cb: (err: any, data?: CreateDevEndpointCommandOutput) => void): void;
    createDevEndpoint(args: CreateDevEndpointCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDevEndpointCommandOutput) => void): void;
    /**
     * <p>Creates a new security configuration. A security configuration is a set of security properties that can be used by AWS Glue. You can use a security configuration to encrypt data at rest. For information about using security configurations in AWS Glue, see <a href="https://docs.aws.amazon.com/glue/latest/dg/encryption-security-configuration.html">Encrypting Data Written by Crawlers, Jobs, and Development Endpoints</a>.</p>
     */
    createSecurityConfiguration(args: CreateSecurityConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<CreateSecurityConfigurationCommandOutput>;
    createSecurityConfiguration(args: CreateSecurityConfigurationCommandInput, cb: (err: any, data?: CreateSecurityConfigurationCommandOutput) => void): void;
    createSecurityConfiguration(args: CreateSecurityConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateSecurityConfigurationCommandOutput) => void): void;
    /**
     * <p>Deletes a specified development endpoint.</p>
     */
    deleteDevEndpoint(args: DeleteDevEndpointCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDevEndpointCommandOutput>;
    deleteDevEndpoint(args: DeleteDevEndpointCommandInput, cb: (err: any, data?: DeleteDevEndpointCommandOutput) => void): void;
    deleteDevEndpoint(args: DeleteDevEndpointCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDevEndpointCommandOutput) => void): void;
    /**
     * <p>Deletes a specified security configuration.</p>
     */
    deleteSecurityConfiguration(args: DeleteSecurityConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSecurityConfigurationCommandOutput>;
    deleteSecurityConfiguration(args: DeleteSecurityConfigurationCommandInput, cb: (err: any, data?: DeleteSecurityConfigurationCommandOutput) => void): void;
    deleteSecurityConfiguration(args: DeleteSecurityConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteSecurityConfigurationCommandOutput) => void): void;
    /**
     * <p>Retrieves information about a specified development endpoint.</p>
     *          <note>
     *             <p>When you create a development endpoint in a virtual private cloud (VPC), AWS Glue returns only
     *         a private IP address, and the public IP address field is not populated. When you create a
     *         non-VPC development endpoint, AWS Glue returns only a public IP address.</p>
     *          </note>
     */
    getDevEndpoint(args: GetDevEndpointCommandInput, options?: __HttpHandlerOptions): Promise<GetDevEndpointCommandOutput>;
    getDevEndpoint(args: GetDevEndpointCommandInput, cb: (err: any, data?: GetDevEndpointCommandOutput) => void): void;
    getDevEndpoint(args: GetDevEndpointCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDevEndpointCommandOutput) => void): void;
    /**
     * <p>Retrieves all the development endpoints in this AWS account.</p>
     *          <note>
     *             <p>When you create a development endpoint in a virtual private cloud (VPC), AWS Glue returns only a private IP address
     *       and the public IP address field is not populated. When you create a non-VPC development
     *       endpoint, AWS Glue returns only a public IP address.</p>
     *          </note>
     */
    getDevEndpoints(args: GetDevEndpointsCommandInput, options?: __HttpHandlerOptions): Promise<GetDevEndpointsCommandOutput>;
    getDevEndpoints(args: GetDevEndpointsCommandInput, cb: (err: any, data?: GetDevEndpointsCommandOutput) => void): void;
    getDevEndpoints(args: GetDevEndpointsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDevEndpointsCommandOutput) => void): void;
    /**
     * <p>Returns information on a job bookmark entry.</p>
     */
    getJobBookmark(args: GetJobBookmarkCommandInput, options?: __HttpHandlerOptions): Promise<GetJobBookmarkCommandOutput>;
    getJobBookmark(args: GetJobBookmarkCommandInput, cb: (err: any, data?: GetJobBookmarkCommandOutput) => void): void;
    getJobBookmark(args: GetJobBookmarkCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetJobBookmarkCommandOutput) => void): void;
    /**
     * <p>Retrieves a specified security configuration.</p>
     */
    getSecurityConfiguration(args: GetSecurityConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<GetSecurityConfigurationCommandOutput>;
    getSecurityConfiguration(args: GetSecurityConfigurationCommandInput, cb: (err: any, data?: GetSecurityConfigurationCommandOutput) => void): void;
    getSecurityConfiguration(args: GetSecurityConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetSecurityConfigurationCommandOutput) => void): void;
    /**
     * <p>Retrieves a list of all security configurations.</p>
     */
    getSecurityConfigurations(args: GetSecurityConfigurationsCommandInput, options?: __HttpHandlerOptions): Promise<GetSecurityConfigurationsCommandOutput>;
    getSecurityConfigurations(args: GetSecurityConfigurationsCommandInput, cb: (err: any, data?: GetSecurityConfigurationsCommandOutput) => void): void;
    getSecurityConfigurations(args: GetSecurityConfigurationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetSecurityConfigurationsCommandOutput) => void): void;
    /**
     * <p>Retrieves the names of all <code>DevEndpoint</code> resources in this AWS account, or the
     *       resources with the specified tag. This operation allows you to see which resources are
     *       available in your account, and their names.</p>
     *
     *          <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on
     *       the response so that tagged resources can be retrieved as a group. If you choose to use tags
     *       filtering, only resources with the tag are retrieved.</p>
     */
    listDevEndpoints(args: ListDevEndpointsCommandInput, options?: __HttpHandlerOptions): Promise<ListDevEndpointsCommandOutput>;
    listDevEndpoints(args: ListDevEndpointsCommandInput, cb: (err: any, data?: ListDevEndpointsCommandOutput) => void): void;
    listDevEndpoints(args: ListDevEndpointsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDevEndpointsCommandOutput) => void): void;
    /**
     * <p>Resets a bookmark entry.</p>
     */
    resetJobBookmark(args: ResetJobBookmarkCommandInput, options?: __HttpHandlerOptions): Promise<ResetJobBookmarkCommandOutput>;
    resetJobBookmark(args: ResetJobBookmarkCommandInput, cb: (err: any, data?: ResetJobBookmarkCommandOutput) => void): void;
    resetJobBookmark(args: ResetJobBookmarkCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ResetJobBookmarkCommandOutput) => void): void;
    /**
     * <p>Updates a specified development endpoint.</p>
     */
    updateDevEndpoint(args: UpdateDevEndpointCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDevEndpointCommandOutput>;
    updateDevEndpoint(args: UpdateDevEndpointCommandInput, cb: (err: any, data?: UpdateDevEndpointCommandOutput) => void): void;
    updateDevEndpoint(args: UpdateDevEndpointCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDevEndpointCommandOutput) => void): void;
    /**
     * <p>Cancels (stops) a task run. Machine learning task runs are asynchronous tasks that AWS
     *       Glue runs on your behalf as part of various machine learning workflows. You can cancel a
     *       machine learning task run at any time by calling <code>CancelMLTaskRun</code> with a task
     *       run's parent transform's <code>TransformID</code> and the task run's <code>TaskRunId</code>. </p>
     */
    cancelMLTaskRun(args: CancelMLTaskRunCommandInput, options?: __HttpHandlerOptions): Promise<CancelMLTaskRunCommandOutput>;
    cancelMLTaskRun(args: CancelMLTaskRunCommandInput, cb: (err: any, data?: CancelMLTaskRunCommandOutput) => void): void;
    cancelMLTaskRun(args: CancelMLTaskRunCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CancelMLTaskRunCommandOutput) => void): void;
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
    createMLTransform(args: CreateMLTransformCommandInput, options?: __HttpHandlerOptions): Promise<CreateMLTransformCommandOutput>;
    createMLTransform(args: CreateMLTransformCommandInput, cb: (err: any, data?: CreateMLTransformCommandOutput) => void): void;
    createMLTransform(args: CreateMLTransformCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateMLTransformCommandOutput) => void): void;
    /**
     * <p>Deletes an AWS Glue machine learning transform. Machine learning transforms are a special
     *       type of transform that use machine learning to learn the details of the transformation to be
     *       performed by learning from examples provided by humans. These transformations are then saved
     *       by AWS Glue. If you no longer need a transform, you can delete it by calling
     *         <code>DeleteMLTransforms</code>. However, any AWS Glue jobs that still reference the deleted
     *       transform will no longer succeed.</p>
     */
    deleteMLTransform(args: DeleteMLTransformCommandInput, options?: __HttpHandlerOptions): Promise<DeleteMLTransformCommandOutput>;
    deleteMLTransform(args: DeleteMLTransformCommandInput, cb: (err: any, data?: DeleteMLTransformCommandOutput) => void): void;
    deleteMLTransform(args: DeleteMLTransformCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteMLTransformCommandOutput) => void): void;
    /**
     * <p>Gets details for a specific task run on a machine learning transform. Machine learning
     *       task runs are asynchronous tasks that AWS Glue runs on your behalf as part of various machine
     *       learning workflows. You can check the stats of any task run by calling
     *         <code>GetMLTaskRun</code> with the <code>TaskRunID</code> and its parent transform's
     *         <code>TransformID</code>.</p>
     */
    getMLTaskRun(args: GetMLTaskRunCommandInput, options?: __HttpHandlerOptions): Promise<GetMLTaskRunCommandOutput>;
    getMLTaskRun(args: GetMLTaskRunCommandInput, cb: (err: any, data?: GetMLTaskRunCommandOutput) => void): void;
    getMLTaskRun(args: GetMLTaskRunCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetMLTaskRunCommandOutput) => void): void;
    /**
     * <p>Gets a list of runs for a machine learning transform. Machine learning task runs are
     *       asynchronous tasks that AWS Glue runs on your behalf as part of various machine learning
     *       workflows. You can get a sortable, filterable list of machine learning task runs by calling
     *         <code>GetMLTaskRuns</code> with their parent transform's <code>TransformID</code> and other
     *       optional parameters as documented in this section.</p>
     *
     * 	        <p>This operation returns a list of historic runs and must be paginated.</p>
     */
    getMLTaskRuns(args: GetMLTaskRunsCommandInput, options?: __HttpHandlerOptions): Promise<GetMLTaskRunsCommandOutput>;
    getMLTaskRuns(args: GetMLTaskRunsCommandInput, cb: (err: any, data?: GetMLTaskRunsCommandOutput) => void): void;
    getMLTaskRuns(args: GetMLTaskRunsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetMLTaskRunsCommandOutput) => void): void;
    /**
     * <p>Gets an AWS Glue machine learning transform artifact and all its corresponding metadata.
     *       Machine learning transforms are a special type of transform that use machine learning to learn
     *       the details of the transformation to be performed by learning from examples provided by
     *       humans. These transformations are then saved by AWS Glue. You can retrieve their metadata by
     *       calling <code>GetMLTransform</code>.</p>
     */
    getMLTransform(args: GetMLTransformCommandInput, options?: __HttpHandlerOptions): Promise<GetMLTransformCommandOutput>;
    getMLTransform(args: GetMLTransformCommandInput, cb: (err: any, data?: GetMLTransformCommandOutput) => void): void;
    getMLTransform(args: GetMLTransformCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetMLTransformCommandOutput) => void): void;
    /**
     * <p>Gets a sortable, filterable list of existing AWS Glue machine learning transforms. Machine
     *       learning transforms are a special type of transform that use machine learning to learn the
     *       details of the transformation to be performed by learning from examples provided by humans.
     *       These transformations are then saved by AWS Glue, and you can retrieve their metadata by
     *       calling <code>GetMLTransforms</code>.</p>
     */
    getMLTransforms(args: GetMLTransformsCommandInput, options?: __HttpHandlerOptions): Promise<GetMLTransformsCommandOutput>;
    getMLTransforms(args: GetMLTransformsCommandInput, cb: (err: any, data?: GetMLTransformsCommandOutput) => void): void;
    getMLTransforms(args: GetMLTransformsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetMLTransformsCommandOutput) => void): void;
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
    startExportLabelsTaskRun(args: StartExportLabelsTaskRunCommandInput, options?: __HttpHandlerOptions): Promise<StartExportLabelsTaskRunCommandOutput>;
    startExportLabelsTaskRun(args: StartExportLabelsTaskRunCommandInput, cb: (err: any, data?: StartExportLabelsTaskRunCommandOutput) => void): void;
    startExportLabelsTaskRun(args: StartExportLabelsTaskRunCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartExportLabelsTaskRunCommandOutput) => void): void;
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
    startImportLabelsTaskRun(args: StartImportLabelsTaskRunCommandInput, options?: __HttpHandlerOptions): Promise<StartImportLabelsTaskRunCommandOutput>;
    startImportLabelsTaskRun(args: StartImportLabelsTaskRunCommandInput, cb: (err: any, data?: StartImportLabelsTaskRunCommandOutput) => void): void;
    startImportLabelsTaskRun(args: StartImportLabelsTaskRunCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartImportLabelsTaskRunCommandOutput) => void): void;
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
    startMLEvaluationTaskRun(args: StartMLEvaluationTaskRunCommandInput, options?: __HttpHandlerOptions): Promise<StartMLEvaluationTaskRunCommandOutput>;
    startMLEvaluationTaskRun(args: StartMLEvaluationTaskRunCommandInput, cb: (err: any, data?: StartMLEvaluationTaskRunCommandOutput) => void): void;
    startMLEvaluationTaskRun(args: StartMLEvaluationTaskRunCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartMLEvaluationTaskRunCommandOutput) => void): void;
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
    startMLLabelingSetGenerationTaskRun(args: StartMLLabelingSetGenerationTaskRunCommandInput, options?: __HttpHandlerOptions): Promise<StartMLLabelingSetGenerationTaskRunCommandOutput>;
    startMLLabelingSetGenerationTaskRun(args: StartMLLabelingSetGenerationTaskRunCommandInput, cb: (err: any, data?: StartMLLabelingSetGenerationTaskRunCommandOutput) => void): void;
    startMLLabelingSetGenerationTaskRun(args: StartMLLabelingSetGenerationTaskRunCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartMLLabelingSetGenerationTaskRunCommandOutput) => void): void;
    /**
     * <p>Updates an existing machine learning transform. Call this operation to tune the algorithm parameters to achieve better results.</p>
     *
     *          <p>After calling this operation, you can call the <code>StartMLEvaluationTaskRun</code>
     *       operation to assess how well your new parameters achieved your goals (such as improving the
     *       quality of your machine learning transform, or making it more cost-effective).</p>
     */
    updateMLTransform(args: UpdateMLTransformCommandInput, options?: __HttpHandlerOptions): Promise<UpdateMLTransformCommandOutput>;
    updateMLTransform(args: UpdateMLTransformCommandInput, cb: (err: any, data?: UpdateMLTransformCommandOutput) => void): void;
    updateMLTransform(args: UpdateMLTransformCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateMLTransformCommandOutput) => void): void;
    /**
     * <p>Returns a list of resource metadata for a given list of job names. After calling the <code>ListJobs</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.
     * </p>
     */
    batchGetJobs(args: BatchGetJobsCommandInput, options?: __HttpHandlerOptions): Promise<BatchGetJobsCommandOutput>;
    batchGetJobs(args: BatchGetJobsCommandInput, cb: (err: any, data?: BatchGetJobsCommandOutput) => void): void;
    batchGetJobs(args: BatchGetJobsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchGetJobsCommandOutput) => void): void;
    /**
     * <p>Returns a list of resource metadata for a given list of trigger names. After calling the <code>ListTriggers</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.</p>
     */
    batchGetTriggers(args: BatchGetTriggersCommandInput, options?: __HttpHandlerOptions): Promise<BatchGetTriggersCommandOutput>;
    batchGetTriggers(args: BatchGetTriggersCommandInput, cb: (err: any, data?: BatchGetTriggersCommandOutput) => void): void;
    batchGetTriggers(args: BatchGetTriggersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchGetTriggersCommandOutput) => void): void;
    /**
     * <p>Returns a list of resource metadata for a given list of workflow names. After calling the <code>ListWorkflows</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.</p>
     */
    batchGetWorkflows(args: BatchGetWorkflowsCommandInput, options?: __HttpHandlerOptions): Promise<BatchGetWorkflowsCommandOutput>;
    batchGetWorkflows(args: BatchGetWorkflowsCommandInput, cb: (err: any, data?: BatchGetWorkflowsCommandOutput) => void): void;
    batchGetWorkflows(args: BatchGetWorkflowsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchGetWorkflowsCommandOutput) => void): void;
    /**
     * <p>Stops one or more job runs for a specified job definition.</p>
     */
    batchStopJobRun(args: BatchStopJobRunCommandInput, options?: __HttpHandlerOptions): Promise<BatchStopJobRunCommandOutput>;
    batchStopJobRun(args: BatchStopJobRunCommandInput, cb: (err: any, data?: BatchStopJobRunCommandOutput) => void): void;
    batchStopJobRun(args: BatchStopJobRunCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchStopJobRunCommandOutput) => void): void;
    /**
     * <p>Creates a new job definition.</p>
     */
    createJob(args: CreateJobCommandInput, options?: __HttpHandlerOptions): Promise<CreateJobCommandOutput>;
    createJob(args: CreateJobCommandInput, cb: (err: any, data?: CreateJobCommandOutput) => void): void;
    createJob(args: CreateJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateJobCommandOutput) => void): void;
    /**
     * <p>Creates a new trigger.</p>
     */
    createTrigger(args: CreateTriggerCommandInput, options?: __HttpHandlerOptions): Promise<CreateTriggerCommandOutput>;
    createTrigger(args: CreateTriggerCommandInput, cb: (err: any, data?: CreateTriggerCommandOutput) => void): void;
    createTrigger(args: CreateTriggerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateTriggerCommandOutput) => void): void;
    /**
     * <p>Creates a new workflow.</p>
     */
    createWorkflow(args: CreateWorkflowCommandInput, options?: __HttpHandlerOptions): Promise<CreateWorkflowCommandOutput>;
    createWorkflow(args: CreateWorkflowCommandInput, cb: (err: any, data?: CreateWorkflowCommandOutput) => void): void;
    createWorkflow(args: CreateWorkflowCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateWorkflowCommandOutput) => void): void;
    /**
     * <p>Deletes a specified job definition. If the job definition
     *       is not found, no exception is thrown.</p>
     */
    deleteJob(args: DeleteJobCommandInput, options?: __HttpHandlerOptions): Promise<DeleteJobCommandOutput>;
    deleteJob(args: DeleteJobCommandInput, cb: (err: any, data?: DeleteJobCommandOutput) => void): void;
    deleteJob(args: DeleteJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteJobCommandOutput) => void): void;
    /**
     * <p>Deletes a specified trigger. If the trigger is not found, no
     *       exception is thrown.</p>
     */
    deleteTrigger(args: DeleteTriggerCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTriggerCommandOutput>;
    deleteTrigger(args: DeleteTriggerCommandInput, cb: (err: any, data?: DeleteTriggerCommandOutput) => void): void;
    deleteTrigger(args: DeleteTriggerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteTriggerCommandOutput) => void): void;
    /**
     * <p>Deletes a workflow.</p>
     */
    deleteWorkflow(args: DeleteWorkflowCommandInput, options?: __HttpHandlerOptions): Promise<DeleteWorkflowCommandOutput>;
    deleteWorkflow(args: DeleteWorkflowCommandInput, cb: (err: any, data?: DeleteWorkflowCommandOutput) => void): void;
    deleteWorkflow(args: DeleteWorkflowCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteWorkflowCommandOutput) => void): void;
    /**
     * <p>Retrieves an existing job definition.</p>
     */
    getJob(args: GetJobCommandInput, options?: __HttpHandlerOptions): Promise<GetJobCommandOutput>;
    getJob(args: GetJobCommandInput, cb: (err: any, data?: GetJobCommandOutput) => void): void;
    getJob(args: GetJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetJobCommandOutput) => void): void;
    /**
     * <p>Retrieves the metadata for a given job run.</p>
     */
    getJobRun(args: GetJobRunCommandInput, options?: __HttpHandlerOptions): Promise<GetJobRunCommandOutput>;
    getJobRun(args: GetJobRunCommandInput, cb: (err: any, data?: GetJobRunCommandOutput) => void): void;
    getJobRun(args: GetJobRunCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetJobRunCommandOutput) => void): void;
    /**
     * <p>Retrieves metadata for all runs of a given job definition.</p>
     */
    getJobRuns(args: GetJobRunsCommandInput, options?: __HttpHandlerOptions): Promise<GetJobRunsCommandOutput>;
    getJobRuns(args: GetJobRunsCommandInput, cb: (err: any, data?: GetJobRunsCommandOutput) => void): void;
    getJobRuns(args: GetJobRunsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetJobRunsCommandOutput) => void): void;
    /**
     * <p>Retrieves all current job definitions.</p>
     */
    getJobs(args: GetJobsCommandInput, options?: __HttpHandlerOptions): Promise<GetJobsCommandOutput>;
    getJobs(args: GetJobsCommandInput, cb: (err: any, data?: GetJobsCommandOutput) => void): void;
    getJobs(args: GetJobsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetJobsCommandOutput) => void): void;
    /**
     * <p>Retrieves the definition of a trigger.</p>
     */
    getTrigger(args: GetTriggerCommandInput, options?: __HttpHandlerOptions): Promise<GetTriggerCommandOutput>;
    getTrigger(args: GetTriggerCommandInput, cb: (err: any, data?: GetTriggerCommandOutput) => void): void;
    getTrigger(args: GetTriggerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetTriggerCommandOutput) => void): void;
    /**
     * <p>Gets all the triggers associated with a job.</p>
     */
    getTriggers(args: GetTriggersCommandInput, options?: __HttpHandlerOptions): Promise<GetTriggersCommandOutput>;
    getTriggers(args: GetTriggersCommandInput, cb: (err: any, data?: GetTriggersCommandOutput) => void): void;
    getTriggers(args: GetTriggersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetTriggersCommandOutput) => void): void;
    /**
     * <p>Retrieves resource metadata for a workflow.</p>
     */
    getWorkflow(args: GetWorkflowCommandInput, options?: __HttpHandlerOptions): Promise<GetWorkflowCommandOutput>;
    getWorkflow(args: GetWorkflowCommandInput, cb: (err: any, data?: GetWorkflowCommandOutput) => void): void;
    getWorkflow(args: GetWorkflowCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetWorkflowCommandOutput) => void): void;
    /**
     * <p>Retrieves the metadata for a given workflow run. </p>
     */
    getWorkflowRun(args: GetWorkflowRunCommandInput, options?: __HttpHandlerOptions): Promise<GetWorkflowRunCommandOutput>;
    getWorkflowRun(args: GetWorkflowRunCommandInput, cb: (err: any, data?: GetWorkflowRunCommandOutput) => void): void;
    getWorkflowRun(args: GetWorkflowRunCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetWorkflowRunCommandOutput) => void): void;
    /**
     * <p>Retrieves the workflow run properties which were set during the run.</p>
     */
    getWorkflowRunProperties(args: GetWorkflowRunPropertiesCommandInput, options?: __HttpHandlerOptions): Promise<GetWorkflowRunPropertiesCommandOutput>;
    getWorkflowRunProperties(args: GetWorkflowRunPropertiesCommandInput, cb: (err: any, data?: GetWorkflowRunPropertiesCommandOutput) => void): void;
    getWorkflowRunProperties(args: GetWorkflowRunPropertiesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetWorkflowRunPropertiesCommandOutput) => void): void;
    /**
     * <p>Retrieves metadata for all runs of a given workflow.</p>
     */
    getWorkflowRuns(args: GetWorkflowRunsCommandInput, options?: __HttpHandlerOptions): Promise<GetWorkflowRunsCommandOutput>;
    getWorkflowRuns(args: GetWorkflowRunsCommandInput, cb: (err: any, data?: GetWorkflowRunsCommandOutput) => void): void;
    getWorkflowRuns(args: GetWorkflowRunsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetWorkflowRunsCommandOutput) => void): void;
    /**
     * <p>Retrieves the names of all job resources in this AWS account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.</p>
     *
     * 	        <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on
     *       the response so that tagged resources can be retrieved as a group. If you choose to use tags
     *       filtering, only resources with the tag are retrieved.</p>
     */
    listJobs(args: ListJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListJobsCommandOutput>;
    listJobs(args: ListJobsCommandInput, cb: (err: any, data?: ListJobsCommandOutput) => void): void;
    listJobs(args: ListJobsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListJobsCommandOutput) => void): void;
    /**
     * <p>Retrieves the names of all trigger resources in this AWS account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.</p>
     *
     *          <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on
     *       the response so that tagged resources can be retrieved as a group. If you choose to use tags
     *       filtering, only resources with the tag are retrieved.</p>
     */
    listTriggers(args: ListTriggersCommandInput, options?: __HttpHandlerOptions): Promise<ListTriggersCommandOutput>;
    listTriggers(args: ListTriggersCommandInput, cb: (err: any, data?: ListTriggersCommandOutput) => void): void;
    listTriggers(args: ListTriggersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTriggersCommandOutput) => void): void;
    /**
     * <p>Lists names of workflows created in the account.</p>
     */
    listWorkflows(args: ListWorkflowsCommandInput, options?: __HttpHandlerOptions): Promise<ListWorkflowsCommandOutput>;
    listWorkflows(args: ListWorkflowsCommandInput, cb: (err: any, data?: ListWorkflowsCommandOutput) => void): void;
    listWorkflows(args: ListWorkflowsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListWorkflowsCommandOutput) => void): void;
    /**
     * <p>Puts the specified workflow run properties for the given workflow run. If a property already exists for the specified run, then it overrides the value otherwise adds the property to existing properties.</p>
     */
    putWorkflowRunProperties(args: PutWorkflowRunPropertiesCommandInput, options?: __HttpHandlerOptions): Promise<PutWorkflowRunPropertiesCommandOutput>;
    putWorkflowRunProperties(args: PutWorkflowRunPropertiesCommandInput, cb: (err: any, data?: PutWorkflowRunPropertiesCommandOutput) => void): void;
    putWorkflowRunProperties(args: PutWorkflowRunPropertiesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutWorkflowRunPropertiesCommandOutput) => void): void;
    /**
     * <p>Starts a job run using a job definition.</p>
     */
    startJobRun(args: StartJobRunCommandInput, options?: __HttpHandlerOptions): Promise<StartJobRunCommandOutput>;
    startJobRun(args: StartJobRunCommandInput, cb: (err: any, data?: StartJobRunCommandOutput) => void): void;
    startJobRun(args: StartJobRunCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartJobRunCommandOutput) => void): void;
    /**
     * <p>Starts an existing trigger. See <a href="https://docs.aws.amazon.com/glue/latest/dg/trigger-job.html">Triggering
     *       Jobs</a> for information about how different types of trigger are
     *       started.</p>
     */
    startTrigger(args: StartTriggerCommandInput, options?: __HttpHandlerOptions): Promise<StartTriggerCommandOutput>;
    startTrigger(args: StartTriggerCommandInput, cb: (err: any, data?: StartTriggerCommandOutput) => void): void;
    startTrigger(args: StartTriggerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartTriggerCommandOutput) => void): void;
    /**
     * <p>Starts a new run of the specified workflow.</p>
     */
    startWorkflowRun(args: StartWorkflowRunCommandInput, options?: __HttpHandlerOptions): Promise<StartWorkflowRunCommandOutput>;
    startWorkflowRun(args: StartWorkflowRunCommandInput, cb: (err: any, data?: StartWorkflowRunCommandOutput) => void): void;
    startWorkflowRun(args: StartWorkflowRunCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartWorkflowRunCommandOutput) => void): void;
    /**
     * <p>Stops a specified trigger.</p>
     */
    stopTrigger(args: StopTriggerCommandInput, options?: __HttpHandlerOptions): Promise<StopTriggerCommandOutput>;
    stopTrigger(args: StopTriggerCommandInput, cb: (err: any, data?: StopTriggerCommandOutput) => void): void;
    stopTrigger(args: StopTriggerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopTriggerCommandOutput) => void): void;
    /**
     * <p>Updates an existing job definition.</p>
     */
    updateJob(args: UpdateJobCommandInput, options?: __HttpHandlerOptions): Promise<UpdateJobCommandOutput>;
    updateJob(args: UpdateJobCommandInput, cb: (err: any, data?: UpdateJobCommandOutput) => void): void;
    updateJob(args: UpdateJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateJobCommandOutput) => void): void;
    /**
     * <p>Updates a trigger definition.</p>
     */
    updateTrigger(args: UpdateTriggerCommandInput, options?: __HttpHandlerOptions): Promise<UpdateTriggerCommandOutput>;
    updateTrigger(args: UpdateTriggerCommandInput, cb: (err: any, data?: UpdateTriggerCommandOutput) => void): void;
    updateTrigger(args: UpdateTriggerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateTriggerCommandOutput) => void): void;
    /**
     * <p>Updates an existing workflow.</p>
     */
    updateWorkflow(args: UpdateWorkflowCommandInput, options?: __HttpHandlerOptions): Promise<UpdateWorkflowCommandOutput>;
    updateWorkflow(args: UpdateWorkflowCommandInput, cb: (err: any, data?: UpdateWorkflowCommandOutput) => void): void;
    updateWorkflow(args: UpdateWorkflowCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateWorkflowCommandOutput) => void): void;
    /**
     * <p>Returns a list of resource metadata for a given list of crawler names. After calling the <code>ListCrawlers</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.</p>
     */
    batchGetCrawlers(args: BatchGetCrawlersCommandInput, options?: __HttpHandlerOptions): Promise<BatchGetCrawlersCommandOutput>;
    batchGetCrawlers(args: BatchGetCrawlersCommandInput, cb: (err: any, data?: BatchGetCrawlersCommandOutput) => void): void;
    batchGetCrawlers(args: BatchGetCrawlersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchGetCrawlersCommandOutput) => void): void;
    /**
     * <p>Creates a classifier in the user's account. This can be a <code>GrokClassifier</code>, an
     *         <code>XMLClassifier</code>, a <code>JsonClassifier</code>, or a <code>CsvClassifier</code>,
     *       depending on which field of the request is present.</p>
     */
    createClassifier(args: CreateClassifierCommandInput, options?: __HttpHandlerOptions): Promise<CreateClassifierCommandOutput>;
    createClassifier(args: CreateClassifierCommandInput, cb: (err: any, data?: CreateClassifierCommandOutput) => void): void;
    createClassifier(args: CreateClassifierCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateClassifierCommandOutput) => void): void;
    /**
     * <p>Creates a new crawler with specified targets, role, configuration, and optional schedule.
     *       At least one crawl target must be specified, in the <code>s3Targets</code> field, the
     *         <code>jdbcTargets</code> field, or the <code>DynamoDBTargets</code> field.</p>
     */
    createCrawler(args: CreateCrawlerCommandInput, options?: __HttpHandlerOptions): Promise<CreateCrawlerCommandOutput>;
    createCrawler(args: CreateCrawlerCommandInput, cb: (err: any, data?: CreateCrawlerCommandOutput) => void): void;
    createCrawler(args: CreateCrawlerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateCrawlerCommandOutput) => void): void;
    /**
     * <p>Transforms a directed acyclic graph (DAG) into code.</p>
     */
    createScript(args: CreateScriptCommandInput, options?: __HttpHandlerOptions): Promise<CreateScriptCommandOutput>;
    createScript(args: CreateScriptCommandInput, cb: (err: any, data?: CreateScriptCommandOutput) => void): void;
    createScript(args: CreateScriptCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateScriptCommandOutput) => void): void;
    /**
     * <p>Removes a classifier from the Data Catalog.</p>
     */
    deleteClassifier(args: DeleteClassifierCommandInput, options?: __HttpHandlerOptions): Promise<DeleteClassifierCommandOutput>;
    deleteClassifier(args: DeleteClassifierCommandInput, cb: (err: any, data?: DeleteClassifierCommandOutput) => void): void;
    deleteClassifier(args: DeleteClassifierCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteClassifierCommandOutput) => void): void;
    /**
     * <p>Removes a specified crawler from the AWS Glue Data Catalog, unless the crawler state is
     *         <code>RUNNING</code>.</p>
     */
    deleteCrawler(args: DeleteCrawlerCommandInput, options?: __HttpHandlerOptions): Promise<DeleteCrawlerCommandOutput>;
    deleteCrawler(args: DeleteCrawlerCommandInput, cb: (err: any, data?: DeleteCrawlerCommandOutput) => void): void;
    deleteCrawler(args: DeleteCrawlerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteCrawlerCommandOutput) => void): void;
    /**
     * <p>Retrieve a classifier by name.</p>
     */
    getClassifier(args: GetClassifierCommandInput, options?: __HttpHandlerOptions): Promise<GetClassifierCommandOutput>;
    getClassifier(args: GetClassifierCommandInput, cb: (err: any, data?: GetClassifierCommandOutput) => void): void;
    getClassifier(args: GetClassifierCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetClassifierCommandOutput) => void): void;
    /**
     * <p>Lists all classifier objects in the Data Catalog.</p>
     */
    getClassifiers(args: GetClassifiersCommandInput, options?: __HttpHandlerOptions): Promise<GetClassifiersCommandOutput>;
    getClassifiers(args: GetClassifiersCommandInput, cb: (err: any, data?: GetClassifiersCommandOutput) => void): void;
    getClassifiers(args: GetClassifiersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetClassifiersCommandOutput) => void): void;
    /**
     * <p>Retrieves metadata for a specified crawler.</p>
     */
    getCrawler(args: GetCrawlerCommandInput, options?: __HttpHandlerOptions): Promise<GetCrawlerCommandOutput>;
    getCrawler(args: GetCrawlerCommandInput, cb: (err: any, data?: GetCrawlerCommandOutput) => void): void;
    getCrawler(args: GetCrawlerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetCrawlerCommandOutput) => void): void;
    /**
     * <p>Retrieves metrics about specified crawlers.</p>
     */
    getCrawlerMetrics(args: GetCrawlerMetricsCommandInput, options?: __HttpHandlerOptions): Promise<GetCrawlerMetricsCommandOutput>;
    getCrawlerMetrics(args: GetCrawlerMetricsCommandInput, cb: (err: any, data?: GetCrawlerMetricsCommandOutput) => void): void;
    getCrawlerMetrics(args: GetCrawlerMetricsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetCrawlerMetricsCommandOutput) => void): void;
    /**
     * <p>Retrieves metadata for all crawlers defined in the customer
     *       account.</p>
     */
    getCrawlers(args: GetCrawlersCommandInput, options?: __HttpHandlerOptions): Promise<GetCrawlersCommandOutput>;
    getCrawlers(args: GetCrawlersCommandInput, cb: (err: any, data?: GetCrawlersCommandOutput) => void): void;
    getCrawlers(args: GetCrawlersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetCrawlersCommandOutput) => void): void;
    /**
     * <p>Transforms a Python script into a directed acyclic graph (DAG). </p>
     */
    getDataflowGraph(args: GetDataflowGraphCommandInput, options?: __HttpHandlerOptions): Promise<GetDataflowGraphCommandOutput>;
    getDataflowGraph(args: GetDataflowGraphCommandInput, cb: (err: any, data?: GetDataflowGraphCommandOutput) => void): void;
    getDataflowGraph(args: GetDataflowGraphCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDataflowGraphCommandOutput) => void): void;
    /**
     * <p>Creates mappings.</p>
     */
    getMapping(args: GetMappingCommandInput, options?: __HttpHandlerOptions): Promise<GetMappingCommandOutput>;
    getMapping(args: GetMappingCommandInput, cb: (err: any, data?: GetMappingCommandOutput) => void): void;
    getMapping(args: GetMappingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetMappingCommandOutput) => void): void;
    /**
     * <p>Gets code to perform a specified mapping.</p>
     */
    getPlan(args: GetPlanCommandInput, options?: __HttpHandlerOptions): Promise<GetPlanCommandOutput>;
    getPlan(args: GetPlanCommandInput, cb: (err: any, data?: GetPlanCommandOutput) => void): void;
    getPlan(args: GetPlanCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetPlanCommandOutput) => void): void;
    /**
     * <p>Retrieves the names of all crawler resources in this AWS account, or the
     *       resources with the specified tag. This operation allows you to see which
     *       resources are available in your account, and their names.</p>
     *
     *          <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on
     *       the response so that tagged resources can be retrieved as a group. If you choose to use tags
     *       filtering, only resources with the tag are retrieved.</p>
     */
    listCrawlers(args: ListCrawlersCommandInput, options?: __HttpHandlerOptions): Promise<ListCrawlersCommandOutput>;
    listCrawlers(args: ListCrawlersCommandInput, cb: (err: any, data?: ListCrawlersCommandOutput) => void): void;
    listCrawlers(args: ListCrawlersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListCrawlersCommandOutput) => void): void;
    /**
     * <p>Starts a crawl using the specified crawler, regardless of what is scheduled. If the
     *       crawler is already running, returns a <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-exceptions.html#aws-glue-api-exceptions-CrawlerRunningException">CrawlerRunningException</a>.</p>
     */
    startCrawler(args: StartCrawlerCommandInput, options?: __HttpHandlerOptions): Promise<StartCrawlerCommandOutput>;
    startCrawler(args: StartCrawlerCommandInput, cb: (err: any, data?: StartCrawlerCommandOutput) => void): void;
    startCrawler(args: StartCrawlerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartCrawlerCommandOutput) => void): void;
    /**
     * <p>Changes the schedule state of the specified crawler to
     *       <code>SCHEDULED</code>, unless the crawler is already running or the
     *       schedule state is already <code>SCHEDULED</code>.</p>
     */
    startCrawlerSchedule(args: StartCrawlerScheduleCommandInput, options?: __HttpHandlerOptions): Promise<StartCrawlerScheduleCommandOutput>;
    startCrawlerSchedule(args: StartCrawlerScheduleCommandInput, cb: (err: any, data?: StartCrawlerScheduleCommandOutput) => void): void;
    startCrawlerSchedule(args: StartCrawlerScheduleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartCrawlerScheduleCommandOutput) => void): void;
    /**
     * <p>If the specified crawler is running, stops the crawl.</p>
     */
    stopCrawler(args: StopCrawlerCommandInput, options?: __HttpHandlerOptions): Promise<StopCrawlerCommandOutput>;
    stopCrawler(args: StopCrawlerCommandInput, cb: (err: any, data?: StopCrawlerCommandOutput) => void): void;
    stopCrawler(args: StopCrawlerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopCrawlerCommandOutput) => void): void;
    /**
     * <p>Sets the schedule state of the specified crawler to
     *       <code>NOT_SCHEDULED</code>, but does not stop the crawler if it is
     *       already running.</p>
     */
    stopCrawlerSchedule(args: StopCrawlerScheduleCommandInput, options?: __HttpHandlerOptions): Promise<StopCrawlerScheduleCommandOutput>;
    stopCrawlerSchedule(args: StopCrawlerScheduleCommandInput, cb: (err: any, data?: StopCrawlerScheduleCommandOutput) => void): void;
    stopCrawlerSchedule(args: StopCrawlerScheduleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopCrawlerScheduleCommandOutput) => void): void;
    /**
     * <p>Modifies an existing classifier (a <code>GrokClassifier</code>,
     *       an <code>XMLClassifier</code>, a <code>JsonClassifier</code>, or a <code>CsvClassifier</code>, depending on
     *       which field is present).</p>
     */
    updateClassifier(args: UpdateClassifierCommandInput, options?: __HttpHandlerOptions): Promise<UpdateClassifierCommandOutput>;
    updateClassifier(args: UpdateClassifierCommandInput, cb: (err: any, data?: UpdateClassifierCommandOutput) => void): void;
    updateClassifier(args: UpdateClassifierCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateClassifierCommandOutput) => void): void;
    /**
     * <p>Updates a crawler. If a crawler is
     *       running, you must stop it using <code>StopCrawler</code> before updating
     *       it.</p>
     */
    updateCrawler(args: UpdateCrawlerCommandInput, options?: __HttpHandlerOptions): Promise<UpdateCrawlerCommandOutput>;
    updateCrawler(args: UpdateCrawlerCommandInput, cb: (err: any, data?: UpdateCrawlerCommandOutput) => void): void;
    updateCrawler(args: UpdateCrawlerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateCrawlerCommandOutput) => void): void;
    /**
     * <p>Updates the schedule of a crawler using a <code>cron</code> expression. </p>
     */
    updateCrawlerSchedule(args: UpdateCrawlerScheduleCommandInput, options?: __HttpHandlerOptions): Promise<UpdateCrawlerScheduleCommandOutput>;
    updateCrawlerSchedule(args: UpdateCrawlerScheduleCommandInput, cb: (err: any, data?: UpdateCrawlerScheduleCommandOutput) => void): void;
    updateCrawlerSchedule(args: UpdateCrawlerScheduleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateCrawlerScheduleCommandOutput) => void): void;
}
