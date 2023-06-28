// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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
import { DataPipelineClient, DataPipelineClientConfig } from "./DataPipelineClient";

const commands = {
  ActivatePipelineCommand,
  AddTagsCommand,
  CreatePipelineCommand,
  DeactivatePipelineCommand,
  DeletePipelineCommand,
  DescribeObjectsCommand,
  DescribePipelinesCommand,
  EvaluateExpressionCommand,
  GetPipelineDefinitionCommand,
  ListPipelinesCommand,
  PollForTaskCommand,
  PutPipelineDefinitionCommand,
  QueryObjectsCommand,
  RemoveTagsCommand,
  ReportTaskProgressCommand,
  ReportTaskRunnerHeartbeatCommand,
  SetStatusCommand,
  SetTaskStatusCommand,
  ValidatePipelineDefinitionCommand,
};

export interface DataPipeline {
  /**
   * @see {@link ActivatePipelineCommand}
   */
  activatePipeline(
    args: ActivatePipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ActivatePipelineCommandOutput>;
  activatePipeline(
    args: ActivatePipelineCommandInput,
    cb: (err: any, data?: ActivatePipelineCommandOutput) => void
  ): void;
  activatePipeline(
    args: ActivatePipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ActivatePipelineCommandOutput) => void
  ): void;

  /**
   * @see {@link AddTagsCommand}
   */
  addTags(args: AddTagsCommandInput, options?: __HttpHandlerOptions): Promise<AddTagsCommandOutput>;
  addTags(args: AddTagsCommandInput, cb: (err: any, data?: AddTagsCommandOutput) => void): void;
  addTags(
    args: AddTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePipelineCommand}
   */
  createPipeline(
    args: CreatePipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePipelineCommandOutput>;
  createPipeline(args: CreatePipelineCommandInput, cb: (err: any, data?: CreatePipelineCommandOutput) => void): void;
  createPipeline(
    args: CreatePipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePipelineCommandOutput) => void
  ): void;

  /**
   * @see {@link DeactivatePipelineCommand}
   */
  deactivatePipeline(
    args: DeactivatePipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeactivatePipelineCommandOutput>;
  deactivatePipeline(
    args: DeactivatePipelineCommandInput,
    cb: (err: any, data?: DeactivatePipelineCommandOutput) => void
  ): void;
  deactivatePipeline(
    args: DeactivatePipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeactivatePipelineCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePipelineCommand}
   */
  deletePipeline(
    args: DeletePipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePipelineCommandOutput>;
  deletePipeline(args: DeletePipelineCommandInput, cb: (err: any, data?: DeletePipelineCommandOutput) => void): void;
  deletePipeline(
    args: DeletePipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePipelineCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeObjectsCommand}
   */
  describeObjects(
    args: DescribeObjectsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeObjectsCommandOutput>;
  describeObjects(args: DescribeObjectsCommandInput, cb: (err: any, data?: DescribeObjectsCommandOutput) => void): void;
  describeObjects(
    args: DescribeObjectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeObjectsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePipelinesCommand}
   */
  describePipelines(
    args: DescribePipelinesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePipelinesCommandOutput>;
  describePipelines(
    args: DescribePipelinesCommandInput,
    cb: (err: any, data?: DescribePipelinesCommandOutput) => void
  ): void;
  describePipelines(
    args: DescribePipelinesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePipelinesCommandOutput) => void
  ): void;

  /**
   * @see {@link EvaluateExpressionCommand}
   */
  evaluateExpression(
    args: EvaluateExpressionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EvaluateExpressionCommandOutput>;
  evaluateExpression(
    args: EvaluateExpressionCommandInput,
    cb: (err: any, data?: EvaluateExpressionCommandOutput) => void
  ): void;
  evaluateExpression(
    args: EvaluateExpressionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EvaluateExpressionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPipelineDefinitionCommand}
   */
  getPipelineDefinition(
    args: GetPipelineDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPipelineDefinitionCommandOutput>;
  getPipelineDefinition(
    args: GetPipelineDefinitionCommandInput,
    cb: (err: any, data?: GetPipelineDefinitionCommandOutput) => void
  ): void;
  getPipelineDefinition(
    args: GetPipelineDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPipelineDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPipelinesCommand}
   */
  listPipelines(args: ListPipelinesCommandInput, options?: __HttpHandlerOptions): Promise<ListPipelinesCommandOutput>;
  listPipelines(args: ListPipelinesCommandInput, cb: (err: any, data?: ListPipelinesCommandOutput) => void): void;
  listPipelines(
    args: ListPipelinesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPipelinesCommandOutput) => void
  ): void;

  /**
   * @see {@link PollForTaskCommand}
   */
  pollForTask(args: PollForTaskCommandInput, options?: __HttpHandlerOptions): Promise<PollForTaskCommandOutput>;
  pollForTask(args: PollForTaskCommandInput, cb: (err: any, data?: PollForTaskCommandOutput) => void): void;
  pollForTask(
    args: PollForTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PollForTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link PutPipelineDefinitionCommand}
   */
  putPipelineDefinition(
    args: PutPipelineDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutPipelineDefinitionCommandOutput>;
  putPipelineDefinition(
    args: PutPipelineDefinitionCommandInput,
    cb: (err: any, data?: PutPipelineDefinitionCommandOutput) => void
  ): void;
  putPipelineDefinition(
    args: PutPipelineDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutPipelineDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link QueryObjectsCommand}
   */
  queryObjects(args: QueryObjectsCommandInput, options?: __HttpHandlerOptions): Promise<QueryObjectsCommandOutput>;
  queryObjects(args: QueryObjectsCommandInput, cb: (err: any, data?: QueryObjectsCommandOutput) => void): void;
  queryObjects(
    args: QueryObjectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: QueryObjectsCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveTagsCommand}
   */
  removeTags(args: RemoveTagsCommandInput, options?: __HttpHandlerOptions): Promise<RemoveTagsCommandOutput>;
  removeTags(args: RemoveTagsCommandInput, cb: (err: any, data?: RemoveTagsCommandOutput) => void): void;
  removeTags(
    args: RemoveTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link ReportTaskProgressCommand}
   */
  reportTaskProgress(
    args: ReportTaskProgressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ReportTaskProgressCommandOutput>;
  reportTaskProgress(
    args: ReportTaskProgressCommandInput,
    cb: (err: any, data?: ReportTaskProgressCommandOutput) => void
  ): void;
  reportTaskProgress(
    args: ReportTaskProgressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReportTaskProgressCommandOutput) => void
  ): void;

  /**
   * @see {@link ReportTaskRunnerHeartbeatCommand}
   */
  reportTaskRunnerHeartbeat(
    args: ReportTaskRunnerHeartbeatCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ReportTaskRunnerHeartbeatCommandOutput>;
  reportTaskRunnerHeartbeat(
    args: ReportTaskRunnerHeartbeatCommandInput,
    cb: (err: any, data?: ReportTaskRunnerHeartbeatCommandOutput) => void
  ): void;
  reportTaskRunnerHeartbeat(
    args: ReportTaskRunnerHeartbeatCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReportTaskRunnerHeartbeatCommandOutput) => void
  ): void;

  /**
   * @see {@link SetStatusCommand}
   */
  setStatus(args: SetStatusCommandInput, options?: __HttpHandlerOptions): Promise<SetStatusCommandOutput>;
  setStatus(args: SetStatusCommandInput, cb: (err: any, data?: SetStatusCommandOutput) => void): void;
  setStatus(
    args: SetStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link SetTaskStatusCommand}
   */
  setTaskStatus(args: SetTaskStatusCommandInput, options?: __HttpHandlerOptions): Promise<SetTaskStatusCommandOutput>;
  setTaskStatus(args: SetTaskStatusCommandInput, cb: (err: any, data?: SetTaskStatusCommandOutput) => void): void;
  setTaskStatus(
    args: SetTaskStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetTaskStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link ValidatePipelineDefinitionCommand}
   */
  validatePipelineDefinition(
    args: ValidatePipelineDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ValidatePipelineDefinitionCommandOutput>;
  validatePipelineDefinition(
    args: ValidatePipelineDefinitionCommandInput,
    cb: (err: any, data?: ValidatePipelineDefinitionCommandOutput) => void
  ): void;
  validatePipelineDefinition(
    args: ValidatePipelineDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ValidatePipelineDefinitionCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>AWS Data Pipeline configures and manages a data-driven workflow called a pipeline. AWS Data Pipeline
 *             handles the details of scheduling and ensuring that data dependencies are met so that your application
 *             can focus on processing the data.</p>
 *
 *         <p>AWS Data Pipeline provides a JAR implementation of a task runner called AWS Data Pipeline Task Runner.
 *             AWS Data Pipeline Task Runner provides logic for common data management scenarios, such as performing
 *             database queries and running data analysis using Amazon Elastic MapReduce (Amazon EMR). You can use
 *             AWS Data Pipeline Task Runner as your task runner, or you can write your own task runner to provide
 *             custom data management.</p>
 *
 *         <p>AWS Data Pipeline implements two main sets of functionality. Use the first set to create a pipeline
 *            and define data sources, schedules, dependencies, and the transforms to be performed on the data.
 *            Use the second set in your task runner application to receive the next task ready for processing.
 *            The logic for performing the task, such as querying the data, running data analysis, or converting
 *            the data from one format to another, is contained within the task runner. The task runner performs
 *            the task assigned to it by the web service, reporting progress to the web service as it does so.
 *            When the task is done, the task runner reports the final success or failure of the task to the web service.</p>
 */
export class DataPipeline extends DataPipelineClient implements DataPipeline {}
createAggregatedClient(commands, DataPipeline);
