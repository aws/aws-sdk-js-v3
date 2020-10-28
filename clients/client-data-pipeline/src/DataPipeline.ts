import { DataPipelineClient } from "./DataPipelineClient";
import {
  ActivatePipelineCommand,
  ActivatePipelineCommandInput,
  ActivatePipelineCommandOutput,
} from "./commands/ActivatePipelineCommand";
import { AddTagsCommand, AddTagsCommandInput, AddTagsCommandOutput } from "./commands/AddTagsCommand";
import {
  CreatePipelineCommand,
  CreatePipelineCommandInput,
  CreatePipelineCommandOutput,
} from "./commands/CreatePipelineCommand";
import {
  DeactivatePipelineCommand,
  DeactivatePipelineCommandInput,
  DeactivatePipelineCommandOutput,
} from "./commands/DeactivatePipelineCommand";
import {
  DeletePipelineCommand,
  DeletePipelineCommandInput,
  DeletePipelineCommandOutput,
} from "./commands/DeletePipelineCommand";
import {
  DescribeObjectsCommand,
  DescribeObjectsCommandInput,
  DescribeObjectsCommandOutput,
} from "./commands/DescribeObjectsCommand";
import {
  DescribePipelinesCommand,
  DescribePipelinesCommandInput,
  DescribePipelinesCommandOutput,
} from "./commands/DescribePipelinesCommand";
import {
  EvaluateExpressionCommand,
  EvaluateExpressionCommandInput,
  EvaluateExpressionCommandOutput,
} from "./commands/EvaluateExpressionCommand";
import {
  GetPipelineDefinitionCommand,
  GetPipelineDefinitionCommandInput,
  GetPipelineDefinitionCommandOutput,
} from "./commands/GetPipelineDefinitionCommand";
import {
  ListPipelinesCommand,
  ListPipelinesCommandInput,
  ListPipelinesCommandOutput,
} from "./commands/ListPipelinesCommand";
import { PollForTaskCommand, PollForTaskCommandInput, PollForTaskCommandOutput } from "./commands/PollForTaskCommand";
import {
  PutPipelineDefinitionCommand,
  PutPipelineDefinitionCommandInput,
  PutPipelineDefinitionCommandOutput,
} from "./commands/PutPipelineDefinitionCommand";
import {
  QueryObjectsCommand,
  QueryObjectsCommandInput,
  QueryObjectsCommandOutput,
} from "./commands/QueryObjectsCommand";
import { RemoveTagsCommand, RemoveTagsCommandInput, RemoveTagsCommandOutput } from "./commands/RemoveTagsCommand";
import {
  ReportTaskProgressCommand,
  ReportTaskProgressCommandInput,
  ReportTaskProgressCommandOutput,
} from "./commands/ReportTaskProgressCommand";
import {
  ReportTaskRunnerHeartbeatCommand,
  ReportTaskRunnerHeartbeatCommandInput,
  ReportTaskRunnerHeartbeatCommandOutput,
} from "./commands/ReportTaskRunnerHeartbeatCommand";
import { SetStatusCommand, SetStatusCommandInput, SetStatusCommandOutput } from "./commands/SetStatusCommand";
import {
  SetTaskStatusCommand,
  SetTaskStatusCommandInput,
  SetTaskStatusCommandOutput,
} from "./commands/SetTaskStatusCommand";
import {
  ValidatePipelineDefinitionCommand,
  ValidatePipelineDefinitionCommandInput,
  ValidatePipelineDefinitionCommandOutput,
} from "./commands/ValidatePipelineDefinitionCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>AWS Data Pipeline configures and manages a data-driven workflow called a pipeline. AWS Data Pipeline handles the details of scheduling and ensuring that data dependencies are met so that your application can focus on processing the data.</p>
 *
 *         <p>AWS Data Pipeline provides a JAR implementation of a task runner called AWS Data Pipeline Task Runner. AWS Data Pipeline Task Runner provides logic for common data management scenarios, such as performing database queries and running data analysis using Amazon Elastic MapReduce (Amazon EMR). You can use AWS Data Pipeline Task Runner as your task runner, or you can write your own task runner to provide custom data management.</p>
 *
 *         <p>AWS Data Pipeline implements two main sets of functionality. Use the first set to create a pipeline and define data sources, schedules, dependencies, and the transforms to be performed on the data. Use the second set in your task runner application to receive the next task ready for processing. The logic for performing the task, such as querying the data, running data analysis, or converting the data from one format to another, is contained within the task runner. The task runner performs the task assigned to it by the web service, reporting progress to the web service as it does so. When the task is done, the task runner reports the final success or failure of the task to the web service.</p>
 */
export class DataPipeline extends DataPipelineClient {
  /**
   * <p>Validates the specified pipeline and starts processing pipeline tasks. If the pipeline does not pass validation, activation fails.</p>
   *         <p>If you need to pause the pipeline to investigate an issue with a component, such as a data source or script,
   *            call <a>DeactivatePipeline</a>.</p>
   *         <p>To activate a finished pipeline, modify the end date for the pipeline and then activate it.</p>
   *          <p>If you activate an on-demand pipeline that is already running, it will cancel all running objects and re-run the pipeline. StartTimestamp does not apply to on-demand pipelines.</p>
   */
  public activatePipeline(
    args: ActivatePipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ActivatePipelineCommandOutput>;
  public activatePipeline(
    args: ActivatePipelineCommandInput,
    cb: (err: any, data?: ActivatePipelineCommandOutput) => void
  ): void;
  public activatePipeline(
    args: ActivatePipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ActivatePipelineCommandOutput) => void
  ): void;
  public activatePipeline(
    args: ActivatePipelineCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ActivatePipelineCommandOutput) => void),
    cb?: (err: any, data?: ActivatePipelineCommandOutput) => void
  ): Promise<ActivatePipelineCommandOutput> | void {
    const command = new ActivatePipelineCommand(args);
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
   * <p>Adds or modifies tags for the specified pipeline.</p>
   */
  public addTags(args: AddTagsCommandInput, options?: __HttpHandlerOptions): Promise<AddTagsCommandOutput>;
  public addTags(args: AddTagsCommandInput, cb: (err: any, data?: AddTagsCommandOutput) => void): void;
  public addTags(
    args: AddTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddTagsCommandOutput) => void
  ): void;
  public addTags(
    args: AddTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddTagsCommandOutput) => void),
    cb?: (err: any, data?: AddTagsCommandOutput) => void
  ): Promise<AddTagsCommandOutput> | void {
    const command = new AddTagsCommand(args);
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
   * <p>Creates a new, empty pipeline. Use <a>PutPipelineDefinition</a> to populate the pipeline.</p>
   */
  public createPipeline(
    args: CreatePipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePipelineCommandOutput>;
  public createPipeline(
    args: CreatePipelineCommandInput,
    cb: (err: any, data?: CreatePipelineCommandOutput) => void
  ): void;
  public createPipeline(
    args: CreatePipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePipelineCommandOutput) => void
  ): void;
  public createPipeline(
    args: CreatePipelineCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreatePipelineCommandOutput) => void),
    cb?: (err: any, data?: CreatePipelineCommandOutput) => void
  ): Promise<CreatePipelineCommandOutput> | void {
    const command = new CreatePipelineCommand(args);
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
   * <p>Deactivates the specified running pipeline. The pipeline is set to the <code>DEACTIVATING</code>
   *           state until the deactivation process completes.</p>
   *         <p>To resume a deactivated pipeline, use <a>ActivatePipeline</a>. By default, the pipeline resumes from the last completed execution.
   *           Optionally, you can specify the date and time to resume the pipeline.</p>
   */
  public deactivatePipeline(
    args: DeactivatePipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeactivatePipelineCommandOutput>;
  public deactivatePipeline(
    args: DeactivatePipelineCommandInput,
    cb: (err: any, data?: DeactivatePipelineCommandOutput) => void
  ): void;
  public deactivatePipeline(
    args: DeactivatePipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeactivatePipelineCommandOutput) => void
  ): void;
  public deactivatePipeline(
    args: DeactivatePipelineCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeactivatePipelineCommandOutput) => void),
    cb?: (err: any, data?: DeactivatePipelineCommandOutput) => void
  ): Promise<DeactivatePipelineCommandOutput> | void {
    const command = new DeactivatePipelineCommand(args);
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
   * <p>Deletes a pipeline, its pipeline definition, and its run history. AWS Data Pipeline attempts to cancel instances associated with the pipeline that are currently being processed by task runners.</p>
   *         <p>Deleting a pipeline cannot be undone. You cannot query or restore a deleted pipeline.
   *             To temporarily pause a pipeline instead of deleting it, call <a>SetStatus</a> with the status set to <code>PAUSE</code> on individual components.
   *             Components that are paused by <a>SetStatus</a> can be resumed.</p>
   */
  public deletePipeline(
    args: DeletePipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePipelineCommandOutput>;
  public deletePipeline(
    args: DeletePipelineCommandInput,
    cb: (err: any, data?: DeletePipelineCommandOutput) => void
  ): void;
  public deletePipeline(
    args: DeletePipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePipelineCommandOutput) => void
  ): void;
  public deletePipeline(
    args: DeletePipelineCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeletePipelineCommandOutput) => void),
    cb?: (err: any, data?: DeletePipelineCommandOutput) => void
  ): Promise<DeletePipelineCommandOutput> | void {
    const command = new DeletePipelineCommand(args);
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
   * <p>Gets the object definitions for a set of objects associated with the pipeline. Object definitions are composed of a set of fields that define the properties of the object.</p>
   */
  public describeObjects(
    args: DescribeObjectsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeObjectsCommandOutput>;
  public describeObjects(
    args: DescribeObjectsCommandInput,
    cb: (err: any, data?: DescribeObjectsCommandOutput) => void
  ): void;
  public describeObjects(
    args: DescribeObjectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeObjectsCommandOutput) => void
  ): void;
  public describeObjects(
    args: DescribeObjectsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeObjectsCommandOutput) => void),
    cb?: (err: any, data?: DescribeObjectsCommandOutput) => void
  ): Promise<DescribeObjectsCommandOutput> | void {
    const command = new DescribeObjectsCommand(args);
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
   * <p>Retrieves metadata about one or more pipelines. The information retrieved includes the name of the pipeline, the pipeline identifier, its current state, and the user account that owns the pipeline. Using account credentials, you can retrieve metadata about pipelines that you or your IAM users have created. If you are using an IAM user account, you can retrieve metadata about only those pipelines for which you have read permissions.</p>
   *         <p>To retrieve the full pipeline definition instead of metadata about the pipeline, call <a>GetPipelineDefinition</a>.</p>
   */
  public describePipelines(
    args: DescribePipelinesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePipelinesCommandOutput>;
  public describePipelines(
    args: DescribePipelinesCommandInput,
    cb: (err: any, data?: DescribePipelinesCommandOutput) => void
  ): void;
  public describePipelines(
    args: DescribePipelinesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePipelinesCommandOutput) => void
  ): void;
  public describePipelines(
    args: DescribePipelinesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribePipelinesCommandOutput) => void),
    cb?: (err: any, data?: DescribePipelinesCommandOutput) => void
  ): Promise<DescribePipelinesCommandOutput> | void {
    const command = new DescribePipelinesCommand(args);
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
   * <p>Task runners call <code>EvaluateExpression</code> to evaluate a string in the context of the specified object.
   *             For example, a task runner can evaluate SQL queries stored in Amazon S3.</p>
   */
  public evaluateExpression(
    args: EvaluateExpressionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EvaluateExpressionCommandOutput>;
  public evaluateExpression(
    args: EvaluateExpressionCommandInput,
    cb: (err: any, data?: EvaluateExpressionCommandOutput) => void
  ): void;
  public evaluateExpression(
    args: EvaluateExpressionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EvaluateExpressionCommandOutput) => void
  ): void;
  public evaluateExpression(
    args: EvaluateExpressionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EvaluateExpressionCommandOutput) => void),
    cb?: (err: any, data?: EvaluateExpressionCommandOutput) => void
  ): Promise<EvaluateExpressionCommandOutput> | void {
    const command = new EvaluateExpressionCommand(args);
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
   * <p>Gets the definition of the specified pipeline. You can call <code>GetPipelineDefinition</code> to retrieve
   *             the pipeline definition that you provided using <a>PutPipelineDefinition</a>.</p>
   */
  public getPipelineDefinition(
    args: GetPipelineDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPipelineDefinitionCommandOutput>;
  public getPipelineDefinition(
    args: GetPipelineDefinitionCommandInput,
    cb: (err: any, data?: GetPipelineDefinitionCommandOutput) => void
  ): void;
  public getPipelineDefinition(
    args: GetPipelineDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPipelineDefinitionCommandOutput) => void
  ): void;
  public getPipelineDefinition(
    args: GetPipelineDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPipelineDefinitionCommandOutput) => void),
    cb?: (err: any, data?: GetPipelineDefinitionCommandOutput) => void
  ): Promise<GetPipelineDefinitionCommandOutput> | void {
    const command = new GetPipelineDefinitionCommand(args);
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
   * <p>Lists the pipeline identifiers for all active pipelines that you have permission to access.</p>
   */
  public listPipelines(
    args: ListPipelinesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPipelinesCommandOutput>;
  public listPipelines(
    args: ListPipelinesCommandInput,
    cb: (err: any, data?: ListPipelinesCommandOutput) => void
  ): void;
  public listPipelines(
    args: ListPipelinesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPipelinesCommandOutput) => void
  ): void;
  public listPipelines(
    args: ListPipelinesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPipelinesCommandOutput) => void),
    cb?: (err: any, data?: ListPipelinesCommandOutput) => void
  ): Promise<ListPipelinesCommandOutput> | void {
    const command = new ListPipelinesCommand(args);
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
  public pollForTask(args: PollForTaskCommandInput, options?: __HttpHandlerOptions): Promise<PollForTaskCommandOutput>;
  public pollForTask(args: PollForTaskCommandInput, cb: (err: any, data?: PollForTaskCommandOutput) => void): void;
  public pollForTask(
    args: PollForTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PollForTaskCommandOutput) => void
  ): void;
  public pollForTask(
    args: PollForTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PollForTaskCommandOutput) => void),
    cb?: (err: any, data?: PollForTaskCommandOutput) => void
  ): Promise<PollForTaskCommandOutput> | void {
    const command = new PollForTaskCommand(args);
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
  public putPipelineDefinition(
    args: PutPipelineDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutPipelineDefinitionCommandOutput>;
  public putPipelineDefinition(
    args: PutPipelineDefinitionCommandInput,
    cb: (err: any, data?: PutPipelineDefinitionCommandOutput) => void
  ): void;
  public putPipelineDefinition(
    args: PutPipelineDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutPipelineDefinitionCommandOutput) => void
  ): void;
  public putPipelineDefinition(
    args: PutPipelineDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutPipelineDefinitionCommandOutput) => void),
    cb?: (err: any, data?: PutPipelineDefinitionCommandOutput) => void
  ): Promise<PutPipelineDefinitionCommandOutput> | void {
    const command = new PutPipelineDefinitionCommand(args);
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
   * <p>Queries the specified pipeline for the names of objects that match the specified set of conditions.</p>
   */
  public queryObjects(
    args: QueryObjectsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<QueryObjectsCommandOutput>;
  public queryObjects(args: QueryObjectsCommandInput, cb: (err: any, data?: QueryObjectsCommandOutput) => void): void;
  public queryObjects(
    args: QueryObjectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: QueryObjectsCommandOutput) => void
  ): void;
  public queryObjects(
    args: QueryObjectsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: QueryObjectsCommandOutput) => void),
    cb?: (err: any, data?: QueryObjectsCommandOutput) => void
  ): Promise<QueryObjectsCommandOutput> | void {
    const command = new QueryObjectsCommand(args);
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
   * <p>Removes existing tags from the specified pipeline.</p>
   */
  public removeTags(args: RemoveTagsCommandInput, options?: __HttpHandlerOptions): Promise<RemoveTagsCommandOutput>;
  public removeTags(args: RemoveTagsCommandInput, cb: (err: any, data?: RemoveTagsCommandOutput) => void): void;
  public removeTags(
    args: RemoveTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveTagsCommandOutput) => void
  ): void;
  public removeTags(
    args: RemoveTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveTagsCommandOutput) => void),
    cb?: (err: any, data?: RemoveTagsCommandOutput) => void
  ): Promise<RemoveTagsCommandOutput> | void {
    const command = new RemoveTagsCommand(args);
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
   * <p>Task runners call <code>ReportTaskProgress</code> when assigned a task to acknowledge that it has the task. If the web service does not
   *             receive this acknowledgement within 2 minutes, it assigns the task in a subsequent <a>PollForTask</a> call. After this initial acknowledgement,
   *             the task runner only needs to report progress every 15 minutes to maintain its ownership of the task. You can change this reporting time
   *             from 15 minutes by specifying a <code>reportProgressTimeout</code> field in your pipeline.</p>
   */
  public reportTaskProgress(
    args: ReportTaskProgressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ReportTaskProgressCommandOutput>;
  public reportTaskProgress(
    args: ReportTaskProgressCommandInput,
    cb: (err: any, data?: ReportTaskProgressCommandOutput) => void
  ): void;
  public reportTaskProgress(
    args: ReportTaskProgressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReportTaskProgressCommandOutput) => void
  ): void;
  public reportTaskProgress(
    args: ReportTaskProgressCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ReportTaskProgressCommandOutput) => void),
    cb?: (err: any, data?: ReportTaskProgressCommandOutput) => void
  ): Promise<ReportTaskProgressCommandOutput> | void {
    const command = new ReportTaskProgressCommand(args);
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
   * <p>Task runners call <code>ReportTaskRunnerHeartbeat</code> every 15 minutes to indicate that they are operational.
   *             If the AWS Data Pipeline Task Runner is launched on a resource managed by AWS Data Pipeline, the web service can use
   *             this call to detect when the task runner application has failed and restart a new instance.</p>
   */
  public reportTaskRunnerHeartbeat(
    args: ReportTaskRunnerHeartbeatCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ReportTaskRunnerHeartbeatCommandOutput>;
  public reportTaskRunnerHeartbeat(
    args: ReportTaskRunnerHeartbeatCommandInput,
    cb: (err: any, data?: ReportTaskRunnerHeartbeatCommandOutput) => void
  ): void;
  public reportTaskRunnerHeartbeat(
    args: ReportTaskRunnerHeartbeatCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReportTaskRunnerHeartbeatCommandOutput) => void
  ): void;
  public reportTaskRunnerHeartbeat(
    args: ReportTaskRunnerHeartbeatCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ReportTaskRunnerHeartbeatCommandOutput) => void),
    cb?: (err: any, data?: ReportTaskRunnerHeartbeatCommandOutput) => void
  ): Promise<ReportTaskRunnerHeartbeatCommandOutput> | void {
    const command = new ReportTaskRunnerHeartbeatCommand(args);
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
   * <p>Requests that the status of the specified physical or logical pipeline objects be updated in the specified pipeline.
   *             This update might not occur immediately, but is eventually consistent. The status that can be set depends on the type of object (for example, DataNode or Activity).
   *             You cannot perform this operation on <code>FINISHED</code> pipelines and attempting to do so returns <code>InvalidRequestException</code>.</p>
   */
  public setStatus(args: SetStatusCommandInput, options?: __HttpHandlerOptions): Promise<SetStatusCommandOutput>;
  public setStatus(args: SetStatusCommandInput, cb: (err: any, data?: SetStatusCommandOutput) => void): void;
  public setStatus(
    args: SetStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetStatusCommandOutput) => void
  ): void;
  public setStatus(
    args: SetStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetStatusCommandOutput) => void),
    cb?: (err: any, data?: SetStatusCommandOutput) => void
  ): Promise<SetStatusCommandOutput> | void {
    const command = new SetStatusCommand(args);
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
   * <p>Task runners call <code>SetTaskStatus</code> to notify AWS Data Pipeline that a task is completed and provide information about the final status.
   *             A task runner makes this call regardless of whether the task was sucessful. A task runner does not need to call <code>SetTaskStatus</code> for
   *             tasks that are canceled by the web service during a call to <a>ReportTaskProgress</a>.</p>
   */
  public setTaskStatus(
    args: SetTaskStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetTaskStatusCommandOutput>;
  public setTaskStatus(
    args: SetTaskStatusCommandInput,
    cb: (err: any, data?: SetTaskStatusCommandOutput) => void
  ): void;
  public setTaskStatus(
    args: SetTaskStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetTaskStatusCommandOutput) => void
  ): void;
  public setTaskStatus(
    args: SetTaskStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetTaskStatusCommandOutput) => void),
    cb?: (err: any, data?: SetTaskStatusCommandOutput) => void
  ): Promise<SetTaskStatusCommandOutput> | void {
    const command = new SetTaskStatusCommand(args);
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
   * <p>Validates the specified pipeline definition to ensure that it is well formed and can be run without error.</p>
   */
  public validatePipelineDefinition(
    args: ValidatePipelineDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ValidatePipelineDefinitionCommandOutput>;
  public validatePipelineDefinition(
    args: ValidatePipelineDefinitionCommandInput,
    cb: (err: any, data?: ValidatePipelineDefinitionCommandOutput) => void
  ): void;
  public validatePipelineDefinition(
    args: ValidatePipelineDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ValidatePipelineDefinitionCommandOutput) => void
  ): void;
  public validatePipelineDefinition(
    args: ValidatePipelineDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ValidatePipelineDefinitionCommandOutput) => void),
    cb?: (err: any, data?: ValidatePipelineDefinitionCommandOutput) => void
  ): Promise<ValidatePipelineDefinitionCommandOutput> | void {
    const command = new ValidatePipelineDefinitionCommand(args);
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
