import { DataPipelineClient } from "./DataPipelineClient";
import { ActivatePipelineCommandInput, ActivatePipelineCommandOutput } from "./commands/ActivatePipelineCommand";
import { AddTagsCommandInput, AddTagsCommandOutput } from "./commands/AddTagsCommand";
import { CreatePipelineCommandInput, CreatePipelineCommandOutput } from "./commands/CreatePipelineCommand";
import { DeactivatePipelineCommandInput, DeactivatePipelineCommandOutput } from "./commands/DeactivatePipelineCommand";
import { DeletePipelineCommandInput, DeletePipelineCommandOutput } from "./commands/DeletePipelineCommand";
import { DescribeObjectsCommandInput, DescribeObjectsCommandOutput } from "./commands/DescribeObjectsCommand";
import { DescribePipelinesCommandInput, DescribePipelinesCommandOutput } from "./commands/DescribePipelinesCommand";
import { EvaluateExpressionCommandInput, EvaluateExpressionCommandOutput } from "./commands/EvaluateExpressionCommand";
import { GetPipelineDefinitionCommandInput, GetPipelineDefinitionCommandOutput } from "./commands/GetPipelineDefinitionCommand";
import { ListPipelinesCommandInput, ListPipelinesCommandOutput } from "./commands/ListPipelinesCommand";
import { PollForTaskCommandInput, PollForTaskCommandOutput } from "./commands/PollForTaskCommand";
import { PutPipelineDefinitionCommandInput, PutPipelineDefinitionCommandOutput } from "./commands/PutPipelineDefinitionCommand";
import { QueryObjectsCommandInput, QueryObjectsCommandOutput } from "./commands/QueryObjectsCommand";
import { RemoveTagsCommandInput, RemoveTagsCommandOutput } from "./commands/RemoveTagsCommand";
import { ReportTaskProgressCommandInput, ReportTaskProgressCommandOutput } from "./commands/ReportTaskProgressCommand";
import { ReportTaskRunnerHeartbeatCommandInput, ReportTaskRunnerHeartbeatCommandOutput } from "./commands/ReportTaskRunnerHeartbeatCommand";
import { SetStatusCommandInput, SetStatusCommandOutput } from "./commands/SetStatusCommand";
import { SetTaskStatusCommandInput, SetTaskStatusCommandOutput } from "./commands/SetTaskStatusCommand";
import { ValidatePipelineDefinitionCommandInput, ValidatePipelineDefinitionCommandOutput } from "./commands/ValidatePipelineDefinitionCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>AWS Data Pipeline configures and manages a data-driven workflow called a pipeline. AWS Data Pipeline handles the details of scheduling and ensuring that data dependencies are met so that your application can focus on processing the data.</p>
 *
 *         <p>AWS Data Pipeline provides a JAR implementation of a task runner called AWS Data Pipeline Task Runner. AWS Data Pipeline Task Runner provides logic for common data management scenarios, such as performing database queries and running data analysis using Amazon Elastic MapReduce (Amazon EMR). You can use AWS Data Pipeline Task Runner as your task runner, or you can write your own task runner to provide custom data management.</p>
 *
 *         <p>AWS Data Pipeline implements two main sets of functionality. Use the first set to create a pipeline and define data sources, schedules, dependencies, and the transforms to be performed on the data. Use the second set in your task runner application to receive the next task ready for processing. The logic for performing the task, such as querying the data, running data analysis, or converting the data from one format to another, is contained within the task runner. The task runner performs the task assigned to it by the web service, reporting progress to the web service as it does so. When the task is done, the task runner reports the final success or failure of the task to the web service.</p>
 */
export declare class DataPipeline extends DataPipelineClient {
    /**
     * <p>Validates the specified pipeline and starts processing pipeline tasks. If the pipeline does not pass validation, activation fails.</p>
     *         <p>If you need to pause the pipeline to investigate an issue with a component, such as a data source or script,
     *            call <a>DeactivatePipeline</a>.</p>
     *         <p>To activate a finished pipeline, modify the end date for the pipeline and then activate it.</p>
     *          <p>If you activate an on-demand pipeline that is already running, it will cancel all running objects and re-run the pipeline. StartTimestamp does not apply to on-demand pipelines.</p>
     */
    activatePipeline(args: ActivatePipelineCommandInput, options?: __HttpHandlerOptions): Promise<ActivatePipelineCommandOutput>;
    activatePipeline(args: ActivatePipelineCommandInput, cb: (err: any, data?: ActivatePipelineCommandOutput) => void): void;
    activatePipeline(args: ActivatePipelineCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ActivatePipelineCommandOutput) => void): void;
    /**
     * <p>Adds or modifies tags for the specified pipeline.</p>
     */
    addTags(args: AddTagsCommandInput, options?: __HttpHandlerOptions): Promise<AddTagsCommandOutput>;
    addTags(args: AddTagsCommandInput, cb: (err: any, data?: AddTagsCommandOutput) => void): void;
    addTags(args: AddTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddTagsCommandOutput) => void): void;
    /**
     * <p>Creates a new, empty pipeline. Use <a>PutPipelineDefinition</a> to populate the pipeline.</p>
     */
    createPipeline(args: CreatePipelineCommandInput, options?: __HttpHandlerOptions): Promise<CreatePipelineCommandOutput>;
    createPipeline(args: CreatePipelineCommandInput, cb: (err: any, data?: CreatePipelineCommandOutput) => void): void;
    createPipeline(args: CreatePipelineCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreatePipelineCommandOutput) => void): void;
    /**
     * <p>Deactivates the specified running pipeline. The pipeline is set to the <code>DEACTIVATING</code>
     *           state until the deactivation process completes.</p>
     *         <p>To resume a deactivated pipeline, use <a>ActivatePipeline</a>. By default, the pipeline resumes from the last completed execution.
     *           Optionally, you can specify the date and time to resume the pipeline.</p>
     */
    deactivatePipeline(args: DeactivatePipelineCommandInput, options?: __HttpHandlerOptions): Promise<DeactivatePipelineCommandOutput>;
    deactivatePipeline(args: DeactivatePipelineCommandInput, cb: (err: any, data?: DeactivatePipelineCommandOutput) => void): void;
    deactivatePipeline(args: DeactivatePipelineCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeactivatePipelineCommandOutput) => void): void;
    /**
     * <p>Deletes a pipeline, its pipeline definition, and its run history. AWS Data Pipeline attempts to cancel instances associated with the pipeline that are currently being processed by task runners.</p>
     *         <p>Deleting a pipeline cannot be undone. You cannot query or restore a deleted pipeline.
     *             To temporarily pause a pipeline instead of deleting it, call <a>SetStatus</a> with the status set to <code>PAUSE</code> on individual components.
     *             Components that are paused by <a>SetStatus</a> can be resumed.</p>
     */
    deletePipeline(args: DeletePipelineCommandInput, options?: __HttpHandlerOptions): Promise<DeletePipelineCommandOutput>;
    deletePipeline(args: DeletePipelineCommandInput, cb: (err: any, data?: DeletePipelineCommandOutput) => void): void;
    deletePipeline(args: DeletePipelineCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeletePipelineCommandOutput) => void): void;
    /**
     * <p>Gets the object definitions for a set of objects associated with the pipeline. Object definitions are composed of a set of fields that define the properties of the object.</p>
     */
    describeObjects(args: DescribeObjectsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeObjectsCommandOutput>;
    describeObjects(args: DescribeObjectsCommandInput, cb: (err: any, data?: DescribeObjectsCommandOutput) => void): void;
    describeObjects(args: DescribeObjectsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeObjectsCommandOutput) => void): void;
    /**
     * <p>Retrieves metadata about one or more pipelines. The information retrieved includes the name of the pipeline, the pipeline identifier, its current state, and the user account that owns the pipeline. Using account credentials, you can retrieve metadata about pipelines that you or your IAM users have created. If you are using an IAM user account, you can retrieve metadata about only those pipelines for which you have read permissions.</p>
     *         <p>To retrieve the full pipeline definition instead of metadata about the pipeline, call <a>GetPipelineDefinition</a>.</p>
     */
    describePipelines(args: DescribePipelinesCommandInput, options?: __HttpHandlerOptions): Promise<DescribePipelinesCommandOutput>;
    describePipelines(args: DescribePipelinesCommandInput, cb: (err: any, data?: DescribePipelinesCommandOutput) => void): void;
    describePipelines(args: DescribePipelinesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribePipelinesCommandOutput) => void): void;
    /**
     * <p>Task runners call <code>EvaluateExpression</code> to evaluate a string in the context of the specified object.
     *             For example, a task runner can evaluate SQL queries stored in Amazon S3.</p>
     */
    evaluateExpression(args: EvaluateExpressionCommandInput, options?: __HttpHandlerOptions): Promise<EvaluateExpressionCommandOutput>;
    evaluateExpression(args: EvaluateExpressionCommandInput, cb: (err: any, data?: EvaluateExpressionCommandOutput) => void): void;
    evaluateExpression(args: EvaluateExpressionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: EvaluateExpressionCommandOutput) => void): void;
    /**
     * <p>Gets the definition of the specified pipeline. You can call <code>GetPipelineDefinition</code> to retrieve
     *             the pipeline definition that you provided using <a>PutPipelineDefinition</a>.</p>
     */
    getPipelineDefinition(args: GetPipelineDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<GetPipelineDefinitionCommandOutput>;
    getPipelineDefinition(args: GetPipelineDefinitionCommandInput, cb: (err: any, data?: GetPipelineDefinitionCommandOutput) => void): void;
    getPipelineDefinition(args: GetPipelineDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetPipelineDefinitionCommandOutput) => void): void;
    /**
     * <p>Lists the pipeline identifiers for all active pipelines that you have permission to access.</p>
     */
    listPipelines(args: ListPipelinesCommandInput, options?: __HttpHandlerOptions): Promise<ListPipelinesCommandOutput>;
    listPipelines(args: ListPipelinesCommandInput, cb: (err: any, data?: ListPipelinesCommandOutput) => void): void;
    listPipelines(args: ListPipelinesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPipelinesCommandOutput) => void): void;
    /**
     * <p>Task runners call <code>PollForTask</code> to receive a task to perform from AWS Data Pipeline. The task runner specifies which tasks it can perform
     *             by setting a value for the <code>workerGroup</code> parameter. The task returned can come from any of the pipelines that
     *             match the <code>workerGroup</code> value passed in by the task runner and that was launched using the IAM user credentials
     *             specified by the task runner.</p>
     *         <p>If tasks are ready in the work queue, <code>PollForTask</code> returns a response immediately. If no tasks are available in the queue,
     *             <code>PollForTask</code> uses long-polling and holds on to a poll connection for up to a 90 seconds, during which time the first newly
     *             scheduled task is handed to the task runner. To accomodate this, set the socket timeout in your task runner to 90 seconds. The task
     *             runner should not call <code>PollForTask</code> again on the same <code>workerGroup</code> until it receives a response, and this can take up to 90 seconds.
     *         </p>
     */
    pollForTask(args: PollForTaskCommandInput, options?: __HttpHandlerOptions): Promise<PollForTaskCommandOutput>;
    pollForTask(args: PollForTaskCommandInput, cb: (err: any, data?: PollForTaskCommandOutput) => void): void;
    pollForTask(args: PollForTaskCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PollForTaskCommandOutput) => void): void;
    /**
     * <p>Adds tasks, schedules, and preconditions to the specified pipeline. You can use <code>PutPipelineDefinition</code> to populate a new pipeline.</p>
     *         <p>
     *             <code>PutPipelineDefinition</code> also validates the configuration as it adds it to the pipeline. Changes to the pipeline are saved unless one
     *             of the following validation errors exist in the pipeline.
     *         </p>
     *         <ol>
     *             <li>
     *                <p>An object is missing a name or identifier field.</p>
     *             </li>
     *             <li>
     *                <p>A string or reference field is empty.</p>
     *             </li>
     *             <li>
     *                <p>The number of objects in the pipeline exceeds the allowed maximum number of objects.</p>
     *             </li>
     *             <li>
     *                <p>The pipeline is in a FINISHED state.</p>
     *             </li>
     *          </ol>
     *         <p>
     *             Pipeline object definitions are passed to the <code>PutPipelineDefinition</code> action and returned by the <a>GetPipelineDefinition</a> action.
     *         </p>
     */
    putPipelineDefinition(args: PutPipelineDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<PutPipelineDefinitionCommandOutput>;
    putPipelineDefinition(args: PutPipelineDefinitionCommandInput, cb: (err: any, data?: PutPipelineDefinitionCommandOutput) => void): void;
    putPipelineDefinition(args: PutPipelineDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutPipelineDefinitionCommandOutput) => void): void;
    /**
     * <p>Queries the specified pipeline for the names of objects that match the specified set of conditions.</p>
     */
    queryObjects(args: QueryObjectsCommandInput, options?: __HttpHandlerOptions): Promise<QueryObjectsCommandOutput>;
    queryObjects(args: QueryObjectsCommandInput, cb: (err: any, data?: QueryObjectsCommandOutput) => void): void;
    queryObjects(args: QueryObjectsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: QueryObjectsCommandOutput) => void): void;
    /**
     * <p>Removes existing tags from the specified pipeline.</p>
     */
    removeTags(args: RemoveTagsCommandInput, options?: __HttpHandlerOptions): Promise<RemoveTagsCommandOutput>;
    removeTags(args: RemoveTagsCommandInput, cb: (err: any, data?: RemoveTagsCommandOutput) => void): void;
    removeTags(args: RemoveTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RemoveTagsCommandOutput) => void): void;
    /**
     * <p>Task runners call <code>ReportTaskProgress</code> when assigned a task to acknowledge that it has the task. If the web service does not
     *             receive this acknowledgement within 2 minutes, it assigns the task in a subsequent <a>PollForTask</a> call. After this initial acknowledgement,
     *             the task runner only needs to report progress every 15 minutes to maintain its ownership of the task. You can change this reporting time
     *             from 15 minutes by specifying a <code>reportProgressTimeout</code> field in your pipeline.</p>
     */
    reportTaskProgress(args: ReportTaskProgressCommandInput, options?: __HttpHandlerOptions): Promise<ReportTaskProgressCommandOutput>;
    reportTaskProgress(args: ReportTaskProgressCommandInput, cb: (err: any, data?: ReportTaskProgressCommandOutput) => void): void;
    reportTaskProgress(args: ReportTaskProgressCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ReportTaskProgressCommandOutput) => void): void;
    /**
     * <p>Task runners call <code>ReportTaskRunnerHeartbeat</code> every 15 minutes to indicate that they are operational.
     *             If the AWS Data Pipeline Task Runner is launched on a resource managed by AWS Data Pipeline, the web service can use
     *             this call to detect when the task runner application has failed and restart a new instance.</p>
     */
    reportTaskRunnerHeartbeat(args: ReportTaskRunnerHeartbeatCommandInput, options?: __HttpHandlerOptions): Promise<ReportTaskRunnerHeartbeatCommandOutput>;
    reportTaskRunnerHeartbeat(args: ReportTaskRunnerHeartbeatCommandInput, cb: (err: any, data?: ReportTaskRunnerHeartbeatCommandOutput) => void): void;
    reportTaskRunnerHeartbeat(args: ReportTaskRunnerHeartbeatCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ReportTaskRunnerHeartbeatCommandOutput) => void): void;
    /**
     * <p>Requests that the status of the specified physical or logical pipeline objects be updated in the specified pipeline.
     *             This update might not occur immediately, but is eventually consistent. The status that can be set depends on the type of object (for example, DataNode or Activity).
     *             You cannot perform this operation on <code>FINISHED</code> pipelines and attempting to do so returns <code>InvalidRequestException</code>.</p>
     */
    setStatus(args: SetStatusCommandInput, options?: __HttpHandlerOptions): Promise<SetStatusCommandOutput>;
    setStatus(args: SetStatusCommandInput, cb: (err: any, data?: SetStatusCommandOutput) => void): void;
    setStatus(args: SetStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SetStatusCommandOutput) => void): void;
    /**
     * <p>Task runners call <code>SetTaskStatus</code> to notify AWS Data Pipeline that a task is completed and provide information about the final status.
     *             A task runner makes this call regardless of whether the task was sucessful. A task runner does not need to call <code>SetTaskStatus</code> for
     *             tasks that are canceled by the web service during a call to <a>ReportTaskProgress</a>.</p>
     */
    setTaskStatus(args: SetTaskStatusCommandInput, options?: __HttpHandlerOptions): Promise<SetTaskStatusCommandOutput>;
    setTaskStatus(args: SetTaskStatusCommandInput, cb: (err: any, data?: SetTaskStatusCommandOutput) => void): void;
    setTaskStatus(args: SetTaskStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SetTaskStatusCommandOutput) => void): void;
    /**
     * <p>Validates the specified pipeline definition to ensure that it is well formed and can be run without error.</p>
     */
    validatePipelineDefinition(args: ValidatePipelineDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<ValidatePipelineDefinitionCommandOutput>;
    validatePipelineDefinition(args: ValidatePipelineDefinitionCommandInput, cb: (err: any, data?: ValidatePipelineDefinitionCommandOutput) => void): void;
    validatePipelineDefinition(args: ValidatePipelineDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ValidatePipelineDefinitionCommandOutput) => void): void;
}
