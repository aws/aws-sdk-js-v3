import { DataPipelineClient } from "./DataPipelineClient";
import { ActivatePipelineInput } from "./types/ActivatePipelineInput";
import { ActivatePipelineOutput } from "./types/ActivatePipelineOutput";
import { AddTagsInput } from "./types/AddTagsInput";
import { AddTagsOutput } from "./types/AddTagsOutput";
import { CreatePipelineInput } from "./types/CreatePipelineInput";
import { CreatePipelineOutput } from "./types/CreatePipelineOutput";
import { DeactivatePipelineInput } from "./types/DeactivatePipelineInput";
import { DeactivatePipelineOutput } from "./types/DeactivatePipelineOutput";
import { DeletePipelineInput } from "./types/DeletePipelineInput";
import { DeletePipelineOutput } from "./types/DeletePipelineOutput";
import { DescribeObjectsInput } from "./types/DescribeObjectsInput";
import { DescribeObjectsOutput } from "./types/DescribeObjectsOutput";
import { DescribePipelinesInput } from "./types/DescribePipelinesInput";
import { DescribePipelinesOutput } from "./types/DescribePipelinesOutput";
import { EvaluateExpressionInput } from "./types/EvaluateExpressionInput";
import { EvaluateExpressionOutput } from "./types/EvaluateExpressionOutput";
import { GetPipelineDefinitionInput } from "./types/GetPipelineDefinitionInput";
import { GetPipelineDefinitionOutput } from "./types/GetPipelineDefinitionOutput";
import { InternalServiceError } from "./types/InternalServiceError";
import { InvalidRequestException } from "./types/InvalidRequestException";
import { ListPipelinesInput } from "./types/ListPipelinesInput";
import { ListPipelinesOutput } from "./types/ListPipelinesOutput";
import { PipelineDeletedException } from "./types/PipelineDeletedException";
import { PipelineNotFoundException } from "./types/PipelineNotFoundException";
import { PollForTaskInput } from "./types/PollForTaskInput";
import { PollForTaskOutput } from "./types/PollForTaskOutput";
import { PutPipelineDefinitionInput } from "./types/PutPipelineDefinitionInput";
import { PutPipelineDefinitionOutput } from "./types/PutPipelineDefinitionOutput";
import { QueryObjectsInput } from "./types/QueryObjectsInput";
import { QueryObjectsOutput } from "./types/QueryObjectsOutput";
import { RemoveTagsInput } from "./types/RemoveTagsInput";
import { RemoveTagsOutput } from "./types/RemoveTagsOutput";
import { ReportTaskProgressInput } from "./types/ReportTaskProgressInput";
import { ReportTaskProgressOutput } from "./types/ReportTaskProgressOutput";
import { ReportTaskRunnerHeartbeatInput } from "./types/ReportTaskRunnerHeartbeatInput";
import { ReportTaskRunnerHeartbeatOutput } from "./types/ReportTaskRunnerHeartbeatOutput";
import { SetStatusInput } from "./types/SetStatusInput";
import { SetStatusOutput } from "./types/SetStatusOutput";
import { SetTaskStatusInput } from "./types/SetTaskStatusInput";
import { SetTaskStatusOutput } from "./types/SetTaskStatusOutput";
import { TaskNotFoundException } from "./types/TaskNotFoundException";
import { ValidatePipelineDefinitionInput } from "./types/ValidatePipelineDefinitionInput";
import { ValidatePipelineDefinitionOutput } from "./types/ValidatePipelineDefinitionOutput";
import { ActivatePipelineCommand } from "./commands/ActivatePipelineCommand";
import { AddTagsCommand } from "./commands/AddTagsCommand";
import { CreatePipelineCommand } from "./commands/CreatePipelineCommand";
import { DeactivatePipelineCommand } from "./commands/DeactivatePipelineCommand";
import { DeletePipelineCommand } from "./commands/DeletePipelineCommand";
import { DescribeObjectsCommand } from "./commands/DescribeObjectsCommand";
import { DescribePipelinesCommand } from "./commands/DescribePipelinesCommand";
import { EvaluateExpressionCommand } from "./commands/EvaluateExpressionCommand";
import { GetPipelineDefinitionCommand } from "./commands/GetPipelineDefinitionCommand";
import { ListPipelinesCommand } from "./commands/ListPipelinesCommand";
import { PollForTaskCommand } from "./commands/PollForTaskCommand";
import { PutPipelineDefinitionCommand } from "./commands/PutPipelineDefinitionCommand";
import { QueryObjectsCommand } from "./commands/QueryObjectsCommand";
import { RemoveTagsCommand } from "./commands/RemoveTagsCommand";
import { ReportTaskProgressCommand } from "./commands/ReportTaskProgressCommand";
import { ReportTaskRunnerHeartbeatCommand } from "./commands/ReportTaskRunnerHeartbeatCommand";
import { SetStatusCommand } from "./commands/SetStatusCommand";
import { SetTaskStatusCommand } from "./commands/SetTaskStatusCommand";
import { ValidatePipelineDefinitionCommand } from "./commands/ValidatePipelineDefinitionCommand";

export class DataPipeline extends DataPipelineClient {
  /**
   * <p>Validates the specified pipeline and starts processing pipeline tasks. If the pipeline does not pass validation, activation fails.</p> <p>If you need to pause the pipeline to investigate an issue with a component, such as a data source or script, call <a>DeactivatePipeline</a>.</p> <p>To activate a finished pipeline, modify the end date for the pipeline and then activate it.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {PipelineNotFoundException} <p>The specified pipeline was not found. Verify that you used the correct user and account identifiers.</p>
   *   - {PipelineDeletedException} <p>The specified pipeline has been deleted.</p>
   *   - {InternalServiceError} <p>An internal service error occurred.</p>
   *   - {InvalidRequestException} <p>The request was not valid. Verify that your request was properly formatted, that the signature was generated with the correct credentials, and that you haven't exceeded any of the service limits for your account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public activatePipeline(
    args: ActivatePipelineInput
  ): Promise<ActivatePipelineOutput>;
  public activatePipeline(
    args: ActivatePipelineInput,
    cb: (err: any, data?: ActivatePipelineOutput) => void
  ): void;
  public activatePipeline(
    args: ActivatePipelineInput,
    cb?: (err: any, data?: ActivatePipelineOutput) => void
  ): Promise<ActivatePipelineOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ActivatePipelineCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds or modifies tags for the specified pipeline.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceError} <p>An internal service error occurred.</p>
   *   - {InvalidRequestException} <p>The request was not valid. Verify that your request was properly formatted, that the signature was generated with the correct credentials, and that you haven't exceeded any of the service limits for your account.</p>
   *   - {PipelineNotFoundException} <p>The specified pipeline was not found. Verify that you used the correct user and account identifiers.</p>
   *   - {PipelineDeletedException} <p>The specified pipeline has been deleted.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public addTags(args: AddTagsInput): Promise<AddTagsOutput>;
  public addTags(
    args: AddTagsInput,
    cb: (err: any, data?: AddTagsOutput) => void
  ): void;
  public addTags(
    args: AddTagsInput,
    cb?: (err: any, data?: AddTagsOutput) => void
  ): Promise<AddTagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AddTagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new, empty pipeline. Use <a>PutPipelineDefinition</a> to populate the pipeline.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceError} <p>An internal service error occurred.</p>
   *   - {InvalidRequestException} <p>The request was not valid. Verify that your request was properly formatted, that the signature was generated with the correct credentials, and that you haven't exceeded any of the service limits for your account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createPipeline(
    args: CreatePipelineInput
  ): Promise<CreatePipelineOutput>;
  public createPipeline(
    args: CreatePipelineInput,
    cb: (err: any, data?: CreatePipelineOutput) => void
  ): void;
  public createPipeline(
    args: CreatePipelineInput,
    cb?: (err: any, data?: CreatePipelineOutput) => void
  ): Promise<CreatePipelineOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreatePipelineCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deactivates the specified running pipeline. The pipeline is set to the <code>DEACTIVATING</code> state until the deactivation process completes.</p> <p>To resume a deactivated pipeline, use <a>ActivatePipeline</a>. By default, the pipeline resumes from the last completed execution. Optionally, you can specify the date and time to resume the pipeline.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {PipelineNotFoundException} <p>The specified pipeline was not found. Verify that you used the correct user and account identifiers.</p>
   *   - {PipelineDeletedException} <p>The specified pipeline has been deleted.</p>
   *   - {InternalServiceError} <p>An internal service error occurred.</p>
   *   - {InvalidRequestException} <p>The request was not valid. Verify that your request was properly formatted, that the signature was generated with the correct credentials, and that you haven't exceeded any of the service limits for your account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deactivatePipeline(
    args: DeactivatePipelineInput
  ): Promise<DeactivatePipelineOutput>;
  public deactivatePipeline(
    args: DeactivatePipelineInput,
    cb: (err: any, data?: DeactivatePipelineOutput) => void
  ): void;
  public deactivatePipeline(
    args: DeactivatePipelineInput,
    cb?: (err: any, data?: DeactivatePipelineOutput) => void
  ): Promise<DeactivatePipelineOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeactivatePipelineCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a pipeline, its pipeline definition, and its run history. AWS Data Pipeline attempts to cancel instances associated with the pipeline that are currently being processed by task runners.</p> <p>Deleting a pipeline cannot be undone. You cannot query or restore a deleted pipeline. To temporarily pause a pipeline instead of deleting it, call <a>SetStatus</a> with the status set to <code>PAUSE</code> on individual components. Components that are paused by <a>SetStatus</a> can be resumed.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {PipelineNotFoundException} <p>The specified pipeline was not found. Verify that you used the correct user and account identifiers.</p>
   *   - {InternalServiceError} <p>An internal service error occurred.</p>
   *   - {InvalidRequestException} <p>The request was not valid. Verify that your request was properly formatted, that the signature was generated with the correct credentials, and that you haven't exceeded any of the service limits for your account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deletePipeline(
    args: DeletePipelineInput
  ): Promise<DeletePipelineOutput>;
  public deletePipeline(
    args: DeletePipelineInput,
    cb: (err: any, data?: DeletePipelineOutput) => void
  ): void;
  public deletePipeline(
    args: DeletePipelineInput,
    cb?: (err: any, data?: DeletePipelineOutput) => void
  ): Promise<DeletePipelineOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeletePipelineCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the object definitions for a set of objects associated with the pipeline. Object definitions are composed of a set of fields that define the properties of the object.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceError} <p>An internal service error occurred.</p>
   *   - {InvalidRequestException} <p>The request was not valid. Verify that your request was properly formatted, that the signature was generated with the correct credentials, and that you haven't exceeded any of the service limits for your account.</p>
   *   - {PipelineNotFoundException} <p>The specified pipeline was not found. Verify that you used the correct user and account identifiers.</p>
   *   - {PipelineDeletedException} <p>The specified pipeline has been deleted.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeObjects(
    args: DescribeObjectsInput
  ): Promise<DescribeObjectsOutput>;
  public describeObjects(
    args: DescribeObjectsInput,
    cb: (err: any, data?: DescribeObjectsOutput) => void
  ): void;
  public describeObjects(
    args: DescribeObjectsInput,
    cb?: (err: any, data?: DescribeObjectsOutput) => void
  ): Promise<DescribeObjectsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeObjectsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves metadata about one or more pipelines. The information retrieved includes the name of the pipeline, the pipeline identifier, its current state, and the user account that owns the pipeline. Using account credentials, you can retrieve metadata about pipelines that you or your IAM users have created. If you are using an IAM user account, you can retrieve metadata about only those pipelines for which you have read permissions.</p> <p>To retrieve the full pipeline definition instead of metadata about the pipeline, call <a>GetPipelineDefinition</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {PipelineNotFoundException} <p>The specified pipeline was not found. Verify that you used the correct user and account identifiers.</p>
   *   - {PipelineDeletedException} <p>The specified pipeline has been deleted.</p>
   *   - {InternalServiceError} <p>An internal service error occurred.</p>
   *   - {InvalidRequestException} <p>The request was not valid. Verify that your request was properly formatted, that the signature was generated with the correct credentials, and that you haven't exceeded any of the service limits for your account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describePipelines(
    args: DescribePipelinesInput
  ): Promise<DescribePipelinesOutput>;
  public describePipelines(
    args: DescribePipelinesInput,
    cb: (err: any, data?: DescribePipelinesOutput) => void
  ): void;
  public describePipelines(
    args: DescribePipelinesInput,
    cb?: (err: any, data?: DescribePipelinesOutput) => void
  ): Promise<DescribePipelinesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribePipelinesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Task runners call <code>EvaluateExpression</code> to evaluate a string in the context of the specified object. For example, a task runner can evaluate SQL queries stored in Amazon S3.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceError} <p>An internal service error occurred.</p>
   *   - {TaskNotFoundException} <p>The specified task was not found. </p>
   *   - {InvalidRequestException} <p>The request was not valid. Verify that your request was properly formatted, that the signature was generated with the correct credentials, and that you haven't exceeded any of the service limits for your account.</p>
   *   - {PipelineNotFoundException} <p>The specified pipeline was not found. Verify that you used the correct user and account identifiers.</p>
   *   - {PipelineDeletedException} <p>The specified pipeline has been deleted.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public evaluateExpression(
    args: EvaluateExpressionInput
  ): Promise<EvaluateExpressionOutput>;
  public evaluateExpression(
    args: EvaluateExpressionInput,
    cb: (err: any, data?: EvaluateExpressionOutput) => void
  ): void;
  public evaluateExpression(
    args: EvaluateExpressionInput,
    cb?: (err: any, data?: EvaluateExpressionOutput) => void
  ): Promise<EvaluateExpressionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new EvaluateExpressionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the definition of the specified pipeline. You can call <code>GetPipelineDefinition</code> to retrieve the pipeline definition that you provided using <a>PutPipelineDefinition</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceError} <p>An internal service error occurred.</p>
   *   - {InvalidRequestException} <p>The request was not valid. Verify that your request was properly formatted, that the signature was generated with the correct credentials, and that you haven't exceeded any of the service limits for your account.</p>
   *   - {PipelineNotFoundException} <p>The specified pipeline was not found. Verify that you used the correct user and account identifiers.</p>
   *   - {PipelineDeletedException} <p>The specified pipeline has been deleted.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getPipelineDefinition(
    args: GetPipelineDefinitionInput
  ): Promise<GetPipelineDefinitionOutput>;
  public getPipelineDefinition(
    args: GetPipelineDefinitionInput,
    cb: (err: any, data?: GetPipelineDefinitionOutput) => void
  ): void;
  public getPipelineDefinition(
    args: GetPipelineDefinitionInput,
    cb?: (err: any, data?: GetPipelineDefinitionOutput) => void
  ): Promise<GetPipelineDefinitionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetPipelineDefinitionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the pipeline identifiers for all active pipelines that you have permission to access.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceError} <p>An internal service error occurred.</p>
   *   - {InvalidRequestException} <p>The request was not valid. Verify that your request was properly formatted, that the signature was generated with the correct credentials, and that you haven't exceeded any of the service limits for your account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listPipelines(args: ListPipelinesInput): Promise<ListPipelinesOutput>;
  public listPipelines(
    args: ListPipelinesInput,
    cb: (err: any, data?: ListPipelinesOutput) => void
  ): void;
  public listPipelines(
    args: ListPipelinesInput,
    cb?: (err: any, data?: ListPipelinesOutput) => void
  ): Promise<ListPipelinesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListPipelinesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Task runners call <code>PollForTask</code> to receive a task to perform from AWS Data Pipeline. The task runner specifies which tasks it can perform by setting a value for the <code>workerGroup</code> parameter. The task returned can come from any of the pipelines that match the <code>workerGroup</code> value passed in by the task runner and that was launched using the IAM user credentials specified by the task runner.</p> <p>If tasks are ready in the work queue, <code>PollForTask</code> returns a response immediately. If no tasks are available in the queue, <code>PollForTask</code> uses long-polling and holds on to a poll connection for up to a 90 seconds, during which time the first newly scheduled task is handed to the task runner. To accomodate this, set the socket timeout in your task runner to 90 seconds. The task runner should not call <code>PollForTask</code> again on the same <code>workerGroup</code> until it receives a response, and this can take up to 90 seconds. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceError} <p>An internal service error occurred.</p>
   *   - {InvalidRequestException} <p>The request was not valid. Verify that your request was properly formatted, that the signature was generated with the correct credentials, and that you haven't exceeded any of the service limits for your account.</p>
   *   - {TaskNotFoundException} <p>The specified task was not found. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public pollForTask(args: PollForTaskInput): Promise<PollForTaskOutput>;
  public pollForTask(
    args: PollForTaskInput,
    cb: (err: any, data?: PollForTaskOutput) => void
  ): void;
  public pollForTask(
    args: PollForTaskInput,
    cb?: (err: any, data?: PollForTaskOutput) => void
  ): Promise<PollForTaskOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PollForTaskCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds tasks, schedules, and preconditions to the specified pipeline. You can use <code>PutPipelineDefinition</code> to populate a new pipeline.</p> <p> <code>PutPipelineDefinition</code> also validates the configuration as it adds it to the pipeline. Changes to the pipeline are saved unless one of the following three validation errors exists in the pipeline. </p> <ol> <li>An object is missing a name or identifier field.</li> <li>A string or reference field is empty.</li> <li>The number of objects in the pipeline exceeds the maximum allowed objects.</li> <li>The pipeline is in a FINISHED state.</li> </ol> <p> Pipeline object definitions are passed to the <code>PutPipelineDefinition</code> action and returned by the <a>GetPipelineDefinition</a> action. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceError} <p>An internal service error occurred.</p>
   *   - {InvalidRequestException} <p>The request was not valid. Verify that your request was properly formatted, that the signature was generated with the correct credentials, and that you haven't exceeded any of the service limits for your account.</p>
   *   - {PipelineNotFoundException} <p>The specified pipeline was not found. Verify that you used the correct user and account identifiers.</p>
   *   - {PipelineDeletedException} <p>The specified pipeline has been deleted.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putPipelineDefinition(
    args: PutPipelineDefinitionInput
  ): Promise<PutPipelineDefinitionOutput>;
  public putPipelineDefinition(
    args: PutPipelineDefinitionInput,
    cb: (err: any, data?: PutPipelineDefinitionOutput) => void
  ): void;
  public putPipelineDefinition(
    args: PutPipelineDefinitionInput,
    cb?: (err: any, data?: PutPipelineDefinitionOutput) => void
  ): Promise<PutPipelineDefinitionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutPipelineDefinitionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Queries the specified pipeline for the names of objects that match the specified set of conditions.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {PipelineNotFoundException} <p>The specified pipeline was not found. Verify that you used the correct user and account identifiers.</p>
   *   - {PipelineDeletedException} <p>The specified pipeline has been deleted.</p>
   *   - {InternalServiceError} <p>An internal service error occurred.</p>
   *   - {InvalidRequestException} <p>The request was not valid. Verify that your request was properly formatted, that the signature was generated with the correct credentials, and that you haven't exceeded any of the service limits for your account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public queryObjects(args: QueryObjectsInput): Promise<QueryObjectsOutput>;
  public queryObjects(
    args: QueryObjectsInput,
    cb: (err: any, data?: QueryObjectsOutput) => void
  ): void;
  public queryObjects(
    args: QueryObjectsInput,
    cb?: (err: any, data?: QueryObjectsOutput) => void
  ): Promise<QueryObjectsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new QueryObjectsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes existing tags from the specified pipeline.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceError} <p>An internal service error occurred.</p>
   *   - {InvalidRequestException} <p>The request was not valid. Verify that your request was properly formatted, that the signature was generated with the correct credentials, and that you haven't exceeded any of the service limits for your account.</p>
   *   - {PipelineNotFoundException} <p>The specified pipeline was not found. Verify that you used the correct user and account identifiers.</p>
   *   - {PipelineDeletedException} <p>The specified pipeline has been deleted.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public removeTags(args: RemoveTagsInput): Promise<RemoveTagsOutput>;
  public removeTags(
    args: RemoveTagsInput,
    cb: (err: any, data?: RemoveTagsOutput) => void
  ): void;
  public removeTags(
    args: RemoveTagsInput,
    cb?: (err: any, data?: RemoveTagsOutput) => void
  ): Promise<RemoveTagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RemoveTagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Task runners call <code>ReportTaskProgress</code> when assigned a task to acknowledge that it has the task. If the web service does not receive this acknowledgement within 2 minutes, it assigns the task in a subsequent <a>PollForTask</a> call. After this initial acknowledgement, the task runner only needs to report progress every 15 minutes to maintain its ownership of the task. You can change this reporting time from 15 minutes by specifying a <code>reportProgressTimeout</code> field in your pipeline.</p> <p>If a task runner does not report its status after 5 minutes, AWS Data Pipeline assumes that the task runner is unable to process the task and reassigns the task in a subsequent response to <a>PollForTask</a>. Task runners should call <code>ReportTaskProgress</code> every 60 seconds.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceError} <p>An internal service error occurred.</p>
   *   - {InvalidRequestException} <p>The request was not valid. Verify that your request was properly formatted, that the signature was generated with the correct credentials, and that you haven't exceeded any of the service limits for your account.</p>
   *   - {TaskNotFoundException} <p>The specified task was not found. </p>
   *   - {PipelineNotFoundException} <p>The specified pipeline was not found. Verify that you used the correct user and account identifiers.</p>
   *   - {PipelineDeletedException} <p>The specified pipeline has been deleted.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public reportTaskProgress(
    args: ReportTaskProgressInput
  ): Promise<ReportTaskProgressOutput>;
  public reportTaskProgress(
    args: ReportTaskProgressInput,
    cb: (err: any, data?: ReportTaskProgressOutput) => void
  ): void;
  public reportTaskProgress(
    args: ReportTaskProgressInput,
    cb?: (err: any, data?: ReportTaskProgressOutput) => void
  ): Promise<ReportTaskProgressOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ReportTaskProgressCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Task runners call <code>ReportTaskRunnerHeartbeat</code> every 15 minutes to indicate that they are operational. If the AWS Data Pipeline Task Runner is launched on a resource managed by AWS Data Pipeline, the web service can use this call to detect when the task runner application has failed and restart a new instance.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceError} <p>An internal service error occurred.</p>
   *   - {InvalidRequestException} <p>The request was not valid. Verify that your request was properly formatted, that the signature was generated with the correct credentials, and that you haven't exceeded any of the service limits for your account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public reportTaskRunnerHeartbeat(
    args: ReportTaskRunnerHeartbeatInput
  ): Promise<ReportTaskRunnerHeartbeatOutput>;
  public reportTaskRunnerHeartbeat(
    args: ReportTaskRunnerHeartbeatInput,
    cb: (err: any, data?: ReportTaskRunnerHeartbeatOutput) => void
  ): void;
  public reportTaskRunnerHeartbeat(
    args: ReportTaskRunnerHeartbeatInput,
    cb?: (err: any, data?: ReportTaskRunnerHeartbeatOutput) => void
  ): Promise<ReportTaskRunnerHeartbeatOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ReportTaskRunnerHeartbeatCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Requests that the status of the specified physical or logical pipeline objects be updated in the specified pipeline. This update might not occur immediately, but is eventually consistent. The status that can be set depends on the type of object (for example, DataNode or Activity). You cannot perform this operation on <code>FINISHED</code> pipelines and attempting to do so returns <code>InvalidRequestException</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {PipelineNotFoundException} <p>The specified pipeline was not found. Verify that you used the correct user and account identifiers.</p>
   *   - {PipelineDeletedException} <p>The specified pipeline has been deleted.</p>
   *   - {InternalServiceError} <p>An internal service error occurred.</p>
   *   - {InvalidRequestException} <p>The request was not valid. Verify that your request was properly formatted, that the signature was generated with the correct credentials, and that you haven't exceeded any of the service limits for your account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public setStatus(args: SetStatusInput): Promise<SetStatusOutput>;
  public setStatus(
    args: SetStatusInput,
    cb: (err: any, data?: SetStatusOutput) => void
  ): void;
  public setStatus(
    args: SetStatusInput,
    cb?: (err: any, data?: SetStatusOutput) => void
  ): Promise<SetStatusOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SetStatusCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Task runners call <code>SetTaskStatus</code> to notify AWS Data Pipeline that a task is completed and provide information about the final status. A task runner makes this call regardless of whether the task was sucessful. A task runner does not need to call <code>SetTaskStatus</code> for tasks that are canceled by the web service during a call to <a>ReportTaskProgress</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceError} <p>An internal service error occurred.</p>
   *   - {TaskNotFoundException} <p>The specified task was not found. </p>
   *   - {InvalidRequestException} <p>The request was not valid. Verify that your request was properly formatted, that the signature was generated with the correct credentials, and that you haven't exceeded any of the service limits for your account.</p>
   *   - {PipelineNotFoundException} <p>The specified pipeline was not found. Verify that you used the correct user and account identifiers.</p>
   *   - {PipelineDeletedException} <p>The specified pipeline has been deleted.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public setTaskStatus(args: SetTaskStatusInput): Promise<SetTaskStatusOutput>;
  public setTaskStatus(
    args: SetTaskStatusInput,
    cb: (err: any, data?: SetTaskStatusOutput) => void
  ): void;
  public setTaskStatus(
    args: SetTaskStatusInput,
    cb?: (err: any, data?: SetTaskStatusOutput) => void
  ): Promise<SetTaskStatusOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SetTaskStatusCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Validates the specified pipeline definition to ensure that it is well formed and can be run without error.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceError} <p>An internal service error occurred.</p>
   *   - {InvalidRequestException} <p>The request was not valid. Verify that your request was properly formatted, that the signature was generated with the correct credentials, and that you haven't exceeded any of the service limits for your account.</p>
   *   - {PipelineNotFoundException} <p>The specified pipeline was not found. Verify that you used the correct user and account identifiers.</p>
   *   - {PipelineDeletedException} <p>The specified pipeline has been deleted.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public validatePipelineDefinition(
    args: ValidatePipelineDefinitionInput
  ): Promise<ValidatePipelineDefinitionOutput>;
  public validatePipelineDefinition(
    args: ValidatePipelineDefinitionInput,
    cb: (err: any, data?: ValidatePipelineDefinitionOutput) => void
  ): void;
  public validatePipelineDefinition(
    args: ValidatePipelineDefinitionInput,
    cb?: (err: any, data?: ValidatePipelineDefinitionOutput) => void
  ): Promise<ValidatePipelineDefinitionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ValidatePipelineDefinitionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
