// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
import { DataPipelineClient } from "./DataPipelineClient";

/**
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
export class DataPipeline extends DataPipelineClient {
  /**
   * <p>Validates the specified pipeline and starts processing pipeline tasks. If the pipeline does not pass validation,
   *            activation fails.</p>
   *         <p>If you need to pause the pipeline to investigate an issue with a component, such as a data source or script,
   *            call <a>DeactivatePipeline</a>.</p>
   *         <p>To activate a finished pipeline, modify the end date for the pipeline and then activate it.</p>
   *         <examples>
   *             <request>
   *
   * POST / HTTP/1.1
   * Content-Type: application/x-amz-json-1.1
   * X-Amz-Target: DataPipeline.ActivatePipeline
   * Content-Length: 39
   * Host: datapipeline.us-east-1.amazonaws.com
   * X-Amz-Date: Mon, 12 Nov 2012 17:49:52 GMT
   * Authorization: AuthParams
   *
   * {"pipelineId": "df-06372391ZG65EXAMPLE"}
   *
   *             </request>
   *             <response>
   *
   * HTTP/1.1 200
   * x-amzn-RequestId: ee19d5bf-074e-11e2-af6f-6bc7a6be60d9
   * Content-Type: application/x-amz-json-1.1
   * Content-Length: 2
   * Date: Mon, 12 Nov 2012 17:50:53 GMT
   *
   * {}
   *
   *             </response>
   *         </examples>
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
   *
   *         <examples>
   *             <request>
   *
   * POST / HTTP/1.1
   * Content-Type: application/x-amz-json-1.1
   * X-Amz-Target: DataPipeline.CreatePipeline
   * Content-Length: 91
   * Host: datapipeline.us-east-1.amazonaws.com
   * X-Amz-Date: Mon, 12 Nov 2012 17:49:52 GMT
   * Authorization: AuthParams
   *
   * {"name": "myPipeline",
   *  "uniqueId": "123456789",
   *  "description": "This is my first pipeline"}
   *
   *             </request>
   *
   *             <response>
   *
   * HTTP/1.1 200
   * x-amzn-RequestId: b16911ce-0774-11e2-af6f-6bc7a6be60d9
   * Content-Type: application/x-amz-json-1.1
   * Content-Length: 40
   * Date: Mon, 12 Nov 2012 17:50:53 GMT
   *
   * {"pipelineId": "df-06372391ZG65EXAMPLE"}
   *
   *             </response>
   *         </examples>
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
   * <p>Deletes a pipeline, its pipeline definition, and its run history.
   *            AWS Data Pipeline attempts to cancel instances associated with the pipeline that are currently being processed by task runners.</p>
   *         <p>Deleting a pipeline cannot be undone. You cannot query or restore a deleted pipeline.
   *             To temporarily pause a pipeline instead of deleting it, call <a>SetStatus</a> with the status set to <code>PAUSE</code> on individual components.
   *             Components that are paused by <a>SetStatus</a> can be resumed.</p>
   *
   *         <examples>
   *             <request>
   *
   * POST / HTTP/1.1
   * Content-Type: application/x-amz-json-1.1
   * X-Amz-Target: DataPipeline.DeletePipeline
   * Content-Length: 50
   * Host: datapipeline.us-east-1.amazonaws.com
   * X-Amz-Date: Mon, 12 Nov 2012 17:49:52 GMT
   * Authorization: AuthParams
   *
   * {"pipelineId": "df-06372391ZG65EXAMPLE"}
   *
   *             </request>
   *
   *             <response>
   *
   * x-amzn-RequestId: b7a88c81-0754-11e2-af6f-6bc7a6be60d9
   * Content-Type: application/x-amz-json-1.1
   * Content-Length: 0
   * Date: Mon, 12 Nov 2012 17:50:53 GMT
   *
   * Unexpected response: 200, OK, undefined
   *
   *             </response>
   *         </examples>
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
   * <p>Gets the object definitions for a set of objects associated with the pipeline. Object definitions are composed of
   *             a set of fields that define the properties of the object.</p>
   *
   *         <examples>
   *             <request>
   *
   * POST / HTTP/1.1
   * Content-Type: application/x-amz-json-1.1
   * X-Amz-Target: DataPipeline.DescribeObjects
   * Content-Length: 98
   * Host: datapipeline.us-east-1.amazonaws.com
   * X-Amz-Date: Mon, 12 Nov 2012 17:49:52 GMT
   * Authorization: AuthParams
   *
   * {"pipelineId": "df-06372391ZG65EXAMPLE",
   *  "objectIds":
   *   ["Schedule"],
   *  "evaluateExpressions": true}
   *
   *             </request>
   *
   *             <response>
   *
   * x-amzn-RequestId: 4c18ea5d-0777-11e2-8a14-21bb8a1f50ef
   * Content-Type: application/x-amz-json-1.1
   * Content-Length: 1488
   * Date: Mon, 12 Nov 2012 17:50:53 GMT
   *
   * {"hasMoreResults": false,
   *  "pipelineObjects":
   *   [
   *     {"fields":
   *       [
   *         {"key": "startDateTime",
   *          "stringValue": "2012-12-12T00:00:00"},
   *         {"key": "parent",
   *          "refValue": "Default"},
   *         {"key": "@sphere",
   *          "stringValue": "COMPONENT"},
   *         {"key": "type",
   *          "stringValue": "Schedule"},
   *         {"key": "period",
   *          "stringValue": "1 hour"},
   *         {"key": "endDateTime",
   *          "stringValue": "2012-12-21T18:00:00"},
   *         {"key": "@version",
   *          "stringValue": "1"},
   *         {"key": "@status",
   *          "stringValue": "PENDING"},
   *         {"key": "@pipelineId",
   *          "stringValue": "df-06372391ZG65EXAMPLE"}
   *       ],
   *      "id": "Schedule",
   *      "name": "Schedule"}
   *   ]
   * }
   *
   *             </response>
   *         </examples>
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
   * <p>Retrieves metadata about one or more pipelines. The information retrieved includes the name of the pipeline, the pipeline identifier,
   *             its current state, and the user account that owns the pipeline. Using account credentials, you can retrieve metadata about pipelines
   *             that you or your IAM users have created. If you are using an IAM user account, you can retrieve metadata about only those pipelines
   *             for which you have read permissions.</p>
   *         <p>To retrieve the full pipeline definition instead of metadata about the pipeline, call <a>GetPipelineDefinition</a>.</p>
   *
   *         <examples>
   *             <request>
   *
   * POST / HTTP/1.1
   * Content-Type: application/x-amz-json-1.1
   * X-Amz-Target: DataPipeline.DescribePipelines
   * Content-Length: 70
   * Host: datapipeline.us-east-1.amazonaws.com
   * X-Amz-Date: Mon, 12 Nov 2012 17:49:52 GMT
   * Authorization: AuthParams
   *
   * {"pipelineIds":
   *   ["df-08785951KAKJEXAMPLE"]
   * }
   *
   *             </request>
   *
   *             <response>
   *
   * x-amzn-RequestId: 02870eb7-0736-11e2-af6f-6bc7a6be60d9
   * Content-Type: application/x-amz-json-1.1
   * Content-Length: 767
   * Date: Mon, 12 Nov 2012 17:50:53 GMT
   *
   * {"pipelineDescriptionList":
   *   [
   *     {"description": "This is my first pipeline",
   *      "fields":
   *       [
   *         {"key": "@pipelineState",
   *          "stringValue": "SCHEDULED"},
   *         {"key": "description",
   *          "stringValue": "This is my first pipeline"},
   *         {"key": "name",
   *          "stringValue": "myPipeline"},
   *         {"key": "@creationTime",
   *          "stringValue": "2012-12-13T01:24:06"},
   *         {"key": "@id",
   *          "stringValue": "df-0937003356ZJEXAMPLE"},
   *         {"key": "@sphere",
   *          "stringValue": "PIPELINE"},
   *         {"key": "@version",
   *          "stringValue": "1"},
   *         {"key": "@userId",
   *          "stringValue": "924374875933"},
   *         {"key": "@accountId",
   *          "stringValue": "924374875933"},
   *         {"key": "uniqueId",
   *          "stringValue": "1234567890"}
   *       ],
   *      "name": "myPipeline",
   *      "pipelineId": "df-0937003356ZJEXAMPLE"}
   *   ]
   * }
   * </response>
   *         </examples>
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
   *
   *         <examples>
   *             <request>
   *
   * POST / HTTP/1.1
   * Content-Type: application/x-amz-json-1.1
   * X-Amz-Target: DataPipeline.DescribePipelines
   * Content-Length: 164
   * Host: datapipeline.us-east-1.amazonaws.com
   * X-Amz-Date: Mon, 12 Nov 2012 17:49:52 GMT
   * Authorization: AuthParams
   *
   * {"pipelineId": "df-08785951KAKJEXAMPLE",
   *         "objectId": "Schedule",
   *         "expression": "Transform started at #{startDateTime} and finished at #{endDateTime}"}
   *
   *             </request>
   *
   *
   *             <response>
   *
   * x-amzn-RequestId: 02870eb7-0736-11e2-af6f-6bc7a6be60d9
   * Content-Type: application/x-amz-json-1.1
   * Content-Length: 103
   * Date: Mon, 12 Nov 2012 17:50:53 GMT
   *
   * {"evaluatedExpression": "Transform started at 2012-12-12T00:00:00 and finished at 2012-12-21T18:00:00"}
   * </response>
   *         </examples>
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
   *
   *         <examples>
   *             <request>
   *
   * POST / HTTP/1.1
   * Content-Type: application/x-amz-json-1.1
   * X-Amz-Target: DataPipeline.GetPipelineDefinition
   * Content-Length: 40
   * Host: datapipeline.us-east-1.amazonaws.com
   * X-Amz-Date: Mon, 12 Nov 2012 17:49:52 GMT
   * Authorization: AuthParams
   *
   *
   * {"pipelineId": "df-06372391ZG65EXAMPLE"}
   *
   *             </request>
   *             <response>
   *
   * x-amzn-RequestId: e28309e5-0776-11e2-8a14-21bb8a1f50ef
   * Content-Type: application/x-amz-json-1.1
   * Content-Length: 890
   * Date: Mon, 12 Nov 2012 17:50:53 GMT
   *
   * {"pipelineObjects":
   *   [
   *     {"fields":
   *       [
   *         {"key": "workerGroup",
   *          "stringValue": "workerGroup"}
   *       ],
   *      "id": "Default",
   *      "name": "Default"},
   *     {"fields":
   *       [
   *         {"key": "startDateTime",
   *          "stringValue": "2012-09-25T17:00:00"},
   *         {"key": "type",
   *          "stringValue": "Schedule"},
   *         {"key": "period",
   *          "stringValue": "1 hour"},
   *         {"key": "endDateTime",
   *          "stringValue": "2012-09-25T18:00:00"}
   *       ],
   *      "id": "Schedule",
   *      "name": "Schedule"},
   *     {"fields":
   *       [
   *         {"key": "schedule",
   *          "refValue": "Schedule"},
   *         {"key": "command",
   *          "stringValue": "echo hello"},
   *         {"key": "parent",
   *          "refValue": "Default"},
   *         {"key": "type",
   *          "stringValue": "ShellCommandActivity"}
   *       ],
   *      "id": "SayHello",
   *      "name": "SayHello"}
   *   ]
   * }
   *
   *             </response>
   *         </examples>
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
   *
   *         <examples>
   *             <request>
   *
   * POST / HTTP/1.1
   * Content-Type: application/x-amz-json-1.1
   * X-Amz-Target: DataPipeline.ListPipelines
   * Content-Length: 14
   * Host: datapipeline.us-east-1.amazonaws.com
   * X-Amz-Date: Mon, 12 Nov 2012 17:49:52 GMT
   * Authorization: AuthParams
   *
   * {}</request>
   *
   *             <response>
   *
   * Status:
   * x-amzn-RequestId: b3104dc5-0734-11e2-af6f-6bc7a6be60d9
   * Content-Type: application/x-amz-json-1.1
   * Content-Length: 39
   * Date: Mon, 12 Nov 2012 17:50:53 GMT
   *
   * {"PipelineIdList":
   *   [
   *     {"id": "df-08785951KAKJEXAMPLE",
   *      "name": "MyPipeline"},
   *     {"id": "df-08662578ISYEXAMPLE",
   *      "name": "MySecondPipeline"}
   *   ]
   * }</response>
   *         </examples>
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
   *
   *         <examples>
   *             <request>
   *
   * POST / HTTP/1.1
   * Content-Type: application/x-amz-json-1.1
   * X-Amz-Target: DataPipeline.PollForTask
   * Content-Length: 59
   * Host: datapipeline.us-east-1.amazonaws.com
   * X-Amz-Date: Mon, 12 Nov 2012 17:49:52 GMT
   * Authorization: AuthParams
   *
   * {"workerGroup": "MyworkerGroup",
   *  "hostname": "example.com"}
   *
   *             </request>
   *
   *             <response>
   *
   * x-amzn-RequestId: 41c713d2-0775-11e2-af6f-6bc7a6be60d9
   * Content-Type: application/x-amz-json-1.1
   * Content-Length: 39
   * Date: Mon, 12 Nov 2012 17:50:53 GMT
   *
   * {"taskObject":
   *   {"attemptId": "@SayHello_2012-12-12T00:00:00_Attempt=1",
   *    "objects":
   *     {"@SayHello_2012-12-12T00:00:00_Attempt=1":
   *       {"fields":
   *         [
   *           {"key": "@componentParent",
   *            "refValue": "SayHello"},
   *           {"key": "@scheduledStartTime",
   *            "stringValue": "2012-12-12T00:00:00"},
   *           {"key": "parent",
   *            "refValue": "SayHello"},
   *           {"key": "@sphere",
   *            "stringValue": "ATTEMPT"},
   *           {"key": "workerGroup",
   *            "stringValue": "workerGroup"},
   *           {"key": "@instanceParent",
   *            "refValue": "@SayHello_2012-12-12T00:00:00"},
   *           {"key": "type",
   *            "stringValue": "ShellCommandActivity"},
   *           {"key": "@status",
   *            "stringValue": "WAITING_FOR_RUNNER"},
   *           {"key": "@version",
   *            "stringValue": "1"},
   *           {"key": "schedule",
   *            "refValue": "Schedule"},
   *           {"key": "@actualStartTime",
   *            "stringValue": "2012-12-13T01:40:50"},
   *           {"key": "command",
   *            "stringValue": "echo hello"},
   *           {"key": "@scheduledEndTime",
   *            "stringValue": "2012-12-12T01:00:00"},
   *           {"key": "@activeInstances",
   *            "refValue": "@SayHello_2012-12-12T00:00:00"},
   *           {"key": "@pipelineId",
   *            "stringValue": "df-0937003356ZJEXAMPLE"}
   *         ],
   *        "id": "@SayHello_2012-12-12T00:00:00_Attempt=1",
   *        "name": "@SayHello_2012-12-12T00:00:00_Attempt=1"}
   *     },
   *    "pipelineId": "df-0937003356ZJEXAMPLE",
   *    "taskId": "2xaM4wRs5zOsIH+g9U3oVHfAgAlbSqU6XduncB0HhZ3xMnmvfePZPn4dIbYXHyWyRK+cU15MqDHwdrvftx/4wv+sNS4w34vJfv7QA9aOoOazW28l1GYSb2ZRR0N0paiQp+d1MhSKo10hOTWOsVK5S5Lnx9Qm6omFgXHyIvZRIvTlrQMpr1xuUrflyGOfbFOGpOLpvPE172MYdqpZKnbSS4TcuqgQKSWV2833fEubI57DPOP7ghWa2TcYeSIv4pdLYG53fTuwfbnbdc98g2LNUQzSVhSnt7BoqyNwht2aQ6b/UHg9A80+KVpuXuqmz3m1MXwHFgxjdmuesXNOrrlGpeLCcRWD+aGo0RN1NqhQRzNAig8V4GlaPTQzMsRCljKqvrIyAoP3Tt2XEGsHkkQo12rEX8Z90957XX2qKRwhruwYzqGkSLWjINoLdAxUJdpRXRc5DJTrBd3D5mdzn7kY1l7NEh4kFHJDt3Cx4Z3Mk8MYCACyCk/CEyy9DwuPi66cLz0NBcgbCM5LKjTBOwo1m+am+pvM1kSposE9FPP1+RFGb8k6jQBTJx3TRz1yKilnGXQTZ5xvdOFpJrklIT0OXP1MG3+auM9FlJA+1dX90QoNJE5z7axmK//MOGXUdkqFe2kiDkorqjxwDvc0Js9pVKfKvAmW8YqUbmI9l0ERpWCXXnLVHNmPWz3jaPY+OBAmuJWDmxB/Z8p94aEDg4BVXQ7LvsKQ3DLYhaB7yJ390CJT+i0mm+EBqY60V6YikPSWDFrYQ/NPi2b1DgE19mX8zHqw8qprIl4yh1Ckx2Iige4En/N5ktOoIxnASxAw/TzcE2skxdw5KlHDF+UTj71m16CR/dIaKlXijlfNlNzUBo/bNSadCQn3G5NoO501wPKI:XO50TgDNyo8EXAMPLE/g==:1"}
   * }
   *
   *             </response>
   *         </examples>
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
   *             of the following three validation errors exists in the pipeline.
   *         </p>
   *         <ol>
   *             <li>An object is missing a name or identifier field.</li>
   *             <li>A string or reference field is empty.</li>
   *             <li>The number of objects in the pipeline exceeds the maximum allowed objects.</li>
   *             <li>The pipeline is in a FINISHED state.</li>
   *         </ol>
   *         <p>
   *             Pipeline object definitions are passed to the <code>PutPipelineDefinition</code> action and returned by the <a>GetPipelineDefinition</a> action.
   *         </p>
   *         <examples>
   *             <example>
   *                 <name>Example 1</name>
   *                 <description>
   *                     This example sets an valid pipeline configuration and returns success.
   *                 </description>
   *             <request>
   *
   * POST / HTTP/1.1
   * Content-Type: application/x-amz-json-1.1
   * X-Amz-Target: DataPipeline.PutPipelineDefinition
   * Content-Length: 914
   * Host: datapipeline.us-east-1.amazonaws.com
   * X-Amz-Date: Mon, 12 Nov 2012 17:49:52 GMT
   * Authorization: AuthParams
   *
   * {"pipelineId": "df-0937003356ZJEXAMPLE",
   *  "pipelineObjects":
   *   [
   *    {"id": "Default",
   *      "name": "Default",
   *      "fields":
   *       [
   *         {"key": "workerGroup",
   *          "stringValue": "workerGroup"}
   *       ]
   *     },
   *     {"id": "Schedule",
   *      "name": "Schedule",
   *      "fields":
   *       [
   *        {"key": "startDateTime",
   *          "stringValue": "2012-12-12T00:00:00"},
   *         {"key": "type",
   *          "stringValue": "Schedule"},
   *         {"key": "period",
   *          "stringValue": "1 hour"},
   *         {"key": "endDateTime",
   *          "stringValue": "2012-12-21T18:00:00"}
   *       ]
   *     },
   *     {"id": "SayHello",
   *      "name": "SayHello",
   *      "fields":
   *       [
   *         {"key": "type",
   *          "stringValue": "ShellCommandActivity"},
   *         {"key": "command",
   *          "stringValue": "echo hello"},
   *         {"key": "parent",
   *          "refValue": "Default"},
   *         {"key": "schedule",
   *          "refValue": "Schedule"}
   *       ]
   *     }
   *   ]
   * }
   *
   *             </request>
   *             <response>
   *
   * HTTP/1.1 200
   * x-amzn-RequestId: f74afc14-0754-11e2-af6f-6bc7a6be60d9
   * Content-Type: application/x-amz-json-1.1
   * Content-Length: 18
   * Date: Mon, 12 Nov 2012 17:50:53 GMT
   *
   * {"errored": false}
   *
   *
   *             </response>
   *             </example>
   *             <example>
   *                 <name>Example 2</name>
   *                 <description>
   *                     This example sets an invalid pipeline configuration (the value for <code>workerGroup</code> is an empty string) and returns an error message.
   *                 </description>
   *                 <request>
   *
   * POST / HTTP/1.1
   * Content-Type: application/x-amz-json-1.1
   * X-Amz-Target: DataPipeline.PutPipelineDefinition
   * Content-Length: 903
   * Host: datapipeline.us-east-1.amazonaws.com
   * X-Amz-Date: Mon, 12 Nov 2012 17:49:52 GMT
   * Authorization: AuthParams
   *
   * {"pipelineId": "df-06372391ZG65EXAMPLE",
   *  "pipelineObjects":
   *   [
   *     {"id": "Default",
   *      "name": "Default",
   *      "fields":
   *       [
   *         {"key": "workerGroup",
   *          "stringValue": ""}
   *       ]
   *     },
   *     {"id": "Schedule",
   *      "name": "Schedule",
   *      "fields":
   *       [
   *        {"key": "startDateTime",
   *          "stringValue": "2012-09-25T17:00:00"},
   *         {"key": "type",
   *          "stringValue": "Schedule"},
   *         {"key": "period",
   *          "stringValue": "1 hour"},
   *         {"key": "endDateTime",
   *          "stringValue": "2012-09-25T18:00:00"}
   *       ]
   *     },
   *     {"id": "SayHello",
   *      "name": "SayHello",
   *      "fields":
   *       [
   *         {"key": "type",
   *          "stringValue": "ShellCommandActivity"},
   *         {"key": "command",
   *          "stringValue": "echo hello"},
   *         {"key": "parent",
   *          "refValue": "Default"},
   *         {"key": "schedule",
   *          "refValue": "Schedule"}
   *
   *       ]
   *     }
   *   ]
   * }
   *
   *                 </request>
   *                 <response>
   *
   * HTTP/1.1 200
   * x-amzn-RequestId: f74afc14-0754-11e2-af6f-6bc7a6be60d9
   * Content-Type: application/x-amz-json-1.1
   * Content-Length: 18
   * Date: Mon, 12 Nov 2012 17:50:53 GMT
   *
   * {"__type": "com.amazon.setl.webservice#InvalidRequestException",
   *  "message": "Pipeline definition has errors: Could not save the pipeline definition due to FATAL errors: [com.amazon.setl.webservice.ValidationError@108d7ea9] Please call Validate to validate your pipeline"}
   *
   *
   *                 </response>
   *             </example>
   *         </examples>
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
   *
   *         <examples>
   *             <request>
   *
   * POST / HTTP/1.1
   * Content-Type: application/x-amz-json-1.1
   * X-Amz-Target: DataPipeline.QueryObjects
   * Content-Length: 123
   * Host: datapipeline.us-east-1.amazonaws.com
   * X-Amz-Date: Mon, 12 Nov 2012 17:49:52 GMT
   * Authorization: AuthParams
   *
   * {"pipelineId": "df-06372391ZG65EXAMPLE",
   *  "query":
   *   {"selectors":
   *     [
   *     ]
   *   },
   *  "sphere": "INSTANCE",
   *  "marker": "",
   *  "limit": 10}
   *
   *             </request>
   *
   *
   *             <response>
   *
   * x-amzn-RequestId: 14d704c1-0775-11e2-af6f-6bc7a6be60d9
   * Content-Type: application/x-amz-json-1.1
   * Content-Length: 72
   * Date: Mon, 12 Nov 2012 17:50:53 GMT
   *
   * {"hasMoreResults": false,
   *  "ids":
   *   ["@SayHello_1_2012-09-25T17:00:00"]
   * }
   *          </response>
   *         </examples>
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
   *         <p>If a task runner does not report its status after 5 minutes, AWS Data Pipeline assumes that the task runner is unable to process the task
   *             and reassigns the task in a subsequent response to <a>PollForTask</a>. Task runners should call <code>ReportTaskProgress</code> every 60 seconds.</p>
   *         <examples>
   *             <request>
   *
   * POST / HTTP/1.1
   * Content-Type: application/x-amz-json-1.1
   * X-Amz-Target: DataPipeline.ReportTaskProgress
   * Content-Length: 832
   * Host: datapipeline.us-east-1.amazonaws.com
   * X-Amz-Date: Mon, 12 Nov 2012 17:49:52 GMT
   * Authorization: AuthParams
   *
   * {"taskId": "aaGgHT4LuH0T0Y0oLrJRjas5qH0d8cDPADxqq3tn+zCWGELkCdV2JprLreXm1oxeP5EFZHFLJ69kjSsLYE0iYHYBYVGBrB+E/pYq7ANEEeGJFnSBMRiXZVA+8UJ3OzcInvXeinqBmBaKwii7hnnKb/AXjXiNTXyxgydX1KAyg1AxkwBYG4cfPYMZbuEbQJFJvv5C/2+GVXz1w94nKYTeUeepwUOFOuRLS6JVtZoYwpF56E+Yfk1IcGpFOvCZ01B4Bkuu7x3J+MD/j6kJgZLAgbCJQtI3eiW3kdGmX0p0I2BdY1ZsX6b4UiSvM3OMj6NEHJCJL4E0ZfitnhCoe24Kvjo6C2hFbZq+ei/HPgSXBQMSagkr4vS9c0ChzxH2+LNYvec6bY4kymkaZI1dvOzmpa0FcnGf5AjSK4GpsViZ/ujz6zxFv81qBXzjF0/4M1775rjV1VUdyKaixiA/sJiACNezqZqETidp8d24BDPRhGsj6pBCrnelqGFrk/gXEXUsJ+xwMifRC8UVwiKekpAvHUywVk7Ku4jH/n3i2VoLRP6FXwpUbelu34iiZ9czpXyLtyPKwxa87dlrnRVURwkcVjOt2Mcrcaqe+cbWHvNRhyrPkkdfSF3ac8/wfgVbXvLEB2k9mKc67aD9rvdc1PKX09Tk8BKklsMTpZ3TRCd4NzQlJKigMe8Jat9+1tKj4Ole5ZzW6uyTu2s2iFjEV8KXu4MaiRJyNKCdKeGhhZWY37Qk4NBK4Ppgu+C6Y41dpfOh288SLDEVx0/UySlqOEdhba7c6BiPp5r3hKj3mk9lFy5OYp1aoGLeeFmjXveTnPdf2gkWqXXg7AUbJ7jEs1F0lKZQg4szep2gcKyAJXgvXLfJJHcha8Lfb/Ee7wYmyOcAaRpDBoFNSbtoVXar46teIrpho+ZDvynUXvU0grHWGOk=:wn3SgymHZM99bEXAMPLE",
   *  "fields":
   *   [
   *     {"key": "percentComplete",
   *      "stringValue": "50"}
   *   ]
   * }
   *
   *             </request>
   *
   *             <response>
   *
   * x-amzn-RequestId: 640bd023-0775-11e2-af6f-6bc7a6be60d9
   * Content-Type: application/x-amz-json-1.1
   * Content-Length: 18
   * Date: Mon, 12 Nov 2012 17:50:53 GMT
   *
   * {"canceled": false}
   *
   * </response>
   *         </examples>
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
   *
   *         <examples>
   *             <request>
   *
   * POST / HTTP/1.1
   * Content-Type: application/x-amz-json-1.1
   * X-Amz-Target: DataPipeline.ReportTaskRunnerHeartbeat
   * Content-Length: 84
   * Host: datapipeline.us-east-1.amazonaws.com
   * X-Amz-Date: Mon, 12 Nov 2012 17:49:52 GMT
   * Authorization: AuthParams
   *
   * {"taskrunnerId": "1234567890",
   *  "workerGroup": "wg-12345",
   *  "hostname": "example.com"}
   *
   *             </request>
   *
   *             <response>
   *
   * Status:
   * x-amzn-RequestId: b3104dc5-0734-11e2-af6f-6bc7a6be60d9
   * Content-Type: application/x-amz-json-1.1
   * Content-Length: 20
   * Date: Mon, 12 Nov 2012 17:50:53 GMT
   *
   * {"terminate": false}
   *
   *             </response>
   *         </examples>
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
   *
   *         <examples>
   *             <request>
   *
   * POST / HTTP/1.1
   * Content-Type: application/x-amz-json-1.1
   * X-Amz-Target: DataPipeline.SetStatus
   * Content-Length: 100
   * Host: datapipeline.us-east-1.amazonaws.com
   * X-Amz-Date: Mon, 12 Nov 2012 17:49:52 GMT
   * Authorization: AuthParams
   *
   * {"pipelineId": "df-0634701J7KEXAMPLE",
   *  "objectIds":
   *   ["o-08600941GHJWMBR9E2"],
   *  "status": "pause"}
   *
   *             </request>
   *
   *             <response>
   *
   * x-amzn-RequestId: e83b8ab7-076a-11e2-af6f-6bc7a6be60d9
   * Content-Type: application/x-amz-json-1.1
   * Content-Length: 0
   * Date: Mon, 12 Nov 2012 17:50:53 GMT
   *
   * Unexpected response: 200, OK, undefined
   *
   *             </response>
   *         </examples>
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
   *
   *         <examples>
   *             <request>
   *
   * POST / HTTP/1.1
   * Content-Type: application/x-amz-json-1.1
   * X-Amz-Target: DataPipeline.SetTaskStatus
   * Content-Length: 847
   * Host: datapipeline.us-east-1.amazonaws.com
   * X-Amz-Date: Mon, 12 Nov 2012 17:49:52 GMT
   * Authorization: AuthParams
   *
   * {"taskId": "aaGgHT4LuH0T0Y0oLrJRjas5qH0d8cDPADxqq3tn+zCWGELkCdV2JprLreXm1oxeP5EFZHFLJ69kjSsLYE0iYHYBYVGBrB+E/pYq7ANEEeGJFnSBMRiXZVA+8UJ3OzcInvXeinqBmBaKwii7hnnKb/AXjXiNTXyxgydX1KAyg1AxkwBYG4cfPYMZbuEbQJFJvv5C/2+GVXz1w94nKYTeUeepwUOFOuRLS6JVtZoYwpF56E+Yfk1IcGpFOvCZ01B4Bkuu7x3J+MD/j6kJgZLAgbCJQtI3eiW3kdGmX0p0I2BdY1ZsX6b4UiSvM3OMj6NEHJCJL4E0ZfitnhCoe24Kvjo6C2hFbZq+ei/HPgSXBQMSagkr4vS9c0ChzxH2+LNYvec6bY4kymkaZI1dvOzmpa0FcnGf5AjSK4GpsViZ/ujz6zxFv81qBXzjF0/4M1775rjV1VUdyKaixiA/sJiACNezqZqETidp8d24BDPRhGsj6pBCrnelqGFrk/gXEXUsJ+xwMifRC8UVwiKekpAvHUywVk7Ku4jH/n3i2VoLRP6FXwpUbelu34iiZ9czpXyLtyPKwxa87dlrnRVURwkcVjOt2Mcrcaqe+cbWHvNRhyrPkkdfSF3ac8/wfgVbXvLEB2k9mKc67aD9rvdc1PKX09Tk8BKklsMTpZ3TRCd4NzQlJKigMe8Jat9+1tKj4Ole5ZzW6uyTu2s2iFjEV8KXu4MaiRJyNKCdKeGhhZWY37Qk4NBK4Ppgu+C6Y41dpfOh288SLDEVx0/UySlqOEdhba7c6BiPp5r3hKj3mk9lFy5OYp1aoGLeeFmjXveTnPdf2gkWqXXg7AUbJ7jEs1F0lKZQg4szep2gcKyAJXgvXLfJJHcha8Lfb/Ee7wYmyOcAaRpDBoFNSbtoVXar46teIrpho+ZDvynUXvU0grHWGOk=:wn3SgymHZM99bEXAMPLE",
   *  "taskStatus": "FINISHED"}
   *
   *             </request>
   *
   *             <response>
   *
   * x-amzn-RequestId: 8c8deb53-0788-11e2-af9c-6bc7a6be6qr8
   * Content-Type: application/x-amz-json-1.1
   * Content-Length: 0
   * Date: Mon, 12 Nov 2012 17:50:53 GMT
   *
   * {}
   *
   *             </response>
   *         </examples>
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
   *
   *         <examples>
   *             <example>
   *                 <name>Example 1</name>
   *                 <description>
   *                     This example sets an valid pipeline configuration and returns success.
   *                 </description>
   *             <request>
   *
   * POST / HTTP/1.1
   * Content-Type: application/x-amz-json-1.1
   * X-Amz-Target: DataPipeline.ValidatePipelineDefinition
   * Content-Length: 936
   * Host: datapipeline.us-east-1.amazonaws.com
   * X-Amz-Date: Mon, 12 Nov 2012 17:49:52 GMT
   * Authorization: AuthParams
   *
   * {"pipelineId": "df-06372391ZG65EXAMPLE",
   *  "pipelineObjects":
   *   [
   *     {"id": "Default",
   *      "name": "Default",
   *      "fields":
   *       [
   *         {"key": "workerGroup",
   *          "stringValue": "MyworkerGroup"}
   *       ]
   *     },
   *     {"id": "Schedule",
   *      "name": "Schedule",
   *      "fields":
   *       [
   *        {"key": "startDateTime",
   *          "stringValue": "2012-09-25T17:00:00"},
   *         {"key": "type",
   *          "stringValue": "Schedule"},
   *         {"key": "period",
   *          "stringValue": "1 hour"},
   *         {"key": "endDateTime",
   *          "stringValue": "2012-09-25T18:00:00"}
   *       ]
   *     },
   *     {"id": "SayHello",
   *      "name": "SayHello",
   *      "fields":
   *       [
   *         {"key": "type",
   *          "stringValue": "ShellCommandActivity"},
   *         {"key": "command",
   *          "stringValue": "echo hello"},
   *         {"key": "parent",
   *          "refValue": "Default"},
   *         {"key": "schedule",
   *          "refValue": "Schedule"}
   *
   *       ]
   *     }
   *   ]
   * }
   *
   *             </request>
   *             <response>
   *
   * x-amzn-RequestId: 92c9f347-0776-11e2-8a14-21bb8a1f50ef
   * Content-Type: application/x-amz-json-1.1
   * Content-Length: 18
   * Date: Mon, 12 Nov 2012 17:50:53 GMT
   *
   * {"errored": false}
   *
   *             </response>
   *             </example>
   *             <example>
   *              <name>Example 2</name>
   *             <description>
   *                 This example sets an invalid pipeline configuration and returns the associated set of validation errors.
   *             </description>
   *
   *             <request>
   *
   * POST / HTTP/1.1
   * Content-Type: application/x-amz-json-1.1
   * X-Amz-Target: DataPipeline.ValidatePipelineDefinition
   * Content-Length: 903
   * Host: datapipeline.us-east-1.amazonaws.com
   * X-Amz-Date: Mon, 12 Nov 2012 17:49:52 GMT
   * Authorization: AuthParams
   *
   * {"pipelineId": "df-06372391ZG65EXAMPLE",
   *  "pipelineObjects":
   *   [
   *     {"id": "Default",
   *      "name": "Default",
   *      "fields":
   *       [
   *         {"key": "workerGroup",
   *          "stringValue": "MyworkerGroup"}
   *       ]
   *     },
   *     {"id": "Schedule",
   *      "name": "Schedule",
   *      "fields":
   *       [
   *        {"key": "startDateTime",
   *          "stringValue": "bad-time"},
   *         {"key": "type",
   *          "stringValue": "Schedule"},
   *         {"key": "period",
   *          "stringValue": "1 hour"},
   *         {"key": "endDateTime",
   *          "stringValue": "2012-09-25T18:00:00"}
   *       ]
   *     },
   *     {"id": "SayHello",
   *      "name": "SayHello",
   *      "fields":
   *       [
   *         {"key": "type",
   *          "stringValue": "ShellCommandActivity"},
   *         {"key": "command",
   *          "stringValue": "echo hello"},
   *         {"key": "parent",
   *          "refValue": "Default"},
   *         {"key": "schedule",
   *          "refValue": "Schedule"}
   *
   *       ]
   *     }
   *   ]
   * }
   *
   *             </request>
   *             <response>
   *
   * x-amzn-RequestId: 496a1f5a-0e6a-11e2-a61c-bd6312c92ddd
   * Content-Type: application/x-amz-json-1.1
   * Content-Length: 278
   * Date: Mon, 12 Nov 2012 17:50:53 GMT
   *
   * {"errored": true,
   *  "validationErrors":
   *   [
   *     {"errors":
   *       ["INVALID_FIELD_VALUE:  'startDateTime' value must be a literal datetime value."],
   *      "id": "Schedule"}
   *   ]
   * }
   *
   *             </response>
   *                 </example>
   *         </examples>
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
