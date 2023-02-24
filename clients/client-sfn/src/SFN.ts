// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  CreateActivityCommand,
  CreateActivityCommandInput,
  CreateActivityCommandOutput,
} from "./commands/CreateActivityCommand";
import {
  CreateStateMachineCommand,
  CreateStateMachineCommandInput,
  CreateStateMachineCommandOutput,
} from "./commands/CreateStateMachineCommand";
import {
  DeleteActivityCommand,
  DeleteActivityCommandInput,
  DeleteActivityCommandOutput,
} from "./commands/DeleteActivityCommand";
import {
  DeleteStateMachineCommand,
  DeleteStateMachineCommandInput,
  DeleteStateMachineCommandOutput,
} from "./commands/DeleteStateMachineCommand";
import {
  DescribeActivityCommand,
  DescribeActivityCommandInput,
  DescribeActivityCommandOutput,
} from "./commands/DescribeActivityCommand";
import {
  DescribeExecutionCommand,
  DescribeExecutionCommandInput,
  DescribeExecutionCommandOutput,
} from "./commands/DescribeExecutionCommand";
import {
  DescribeMapRunCommand,
  DescribeMapRunCommandInput,
  DescribeMapRunCommandOutput,
} from "./commands/DescribeMapRunCommand";
import {
  DescribeStateMachineCommand,
  DescribeStateMachineCommandInput,
  DescribeStateMachineCommandOutput,
} from "./commands/DescribeStateMachineCommand";
import {
  DescribeStateMachineForExecutionCommand,
  DescribeStateMachineForExecutionCommandInput,
  DescribeStateMachineForExecutionCommandOutput,
} from "./commands/DescribeStateMachineForExecutionCommand";
import {
  GetActivityTaskCommand,
  GetActivityTaskCommandInput,
  GetActivityTaskCommandOutput,
} from "./commands/GetActivityTaskCommand";
import {
  GetExecutionHistoryCommand,
  GetExecutionHistoryCommandInput,
  GetExecutionHistoryCommandOutput,
} from "./commands/GetExecutionHistoryCommand";
import {
  ListActivitiesCommand,
  ListActivitiesCommandInput,
  ListActivitiesCommandOutput,
} from "./commands/ListActivitiesCommand";
import {
  ListExecutionsCommand,
  ListExecutionsCommandInput,
  ListExecutionsCommandOutput,
} from "./commands/ListExecutionsCommand";
import { ListMapRunsCommand, ListMapRunsCommandInput, ListMapRunsCommandOutput } from "./commands/ListMapRunsCommand";
import {
  ListStateMachinesCommand,
  ListStateMachinesCommandInput,
  ListStateMachinesCommandOutput,
} from "./commands/ListStateMachinesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  SendTaskFailureCommand,
  SendTaskFailureCommandInput,
  SendTaskFailureCommandOutput,
} from "./commands/SendTaskFailureCommand";
import {
  SendTaskHeartbeatCommand,
  SendTaskHeartbeatCommandInput,
  SendTaskHeartbeatCommandOutput,
} from "./commands/SendTaskHeartbeatCommand";
import {
  SendTaskSuccessCommand,
  SendTaskSuccessCommandInput,
  SendTaskSuccessCommandOutput,
} from "./commands/SendTaskSuccessCommand";
import {
  StartExecutionCommand,
  StartExecutionCommandInput,
  StartExecutionCommandOutput,
} from "./commands/StartExecutionCommand";
import {
  StartSyncExecutionCommand,
  StartSyncExecutionCommandInput,
  StartSyncExecutionCommandOutput,
} from "./commands/StartSyncExecutionCommand";
import {
  StopExecutionCommand,
  StopExecutionCommandInput,
  StopExecutionCommandOutput,
} from "./commands/StopExecutionCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateMapRunCommand,
  UpdateMapRunCommandInput,
  UpdateMapRunCommandOutput,
} from "./commands/UpdateMapRunCommand";
import {
  UpdateStateMachineCommand,
  UpdateStateMachineCommandInput,
  UpdateStateMachineCommandOutput,
} from "./commands/UpdateStateMachineCommand";
import { SFNClient } from "./SFNClient";

/**
 * <fullname>Step Functions</fullname>
 *          <p>Step Functions is a service that lets you coordinate the components of distributed applications
 *       and microservices using visual workflows.</p>
 *          <p>You can use Step Functions to build applications from individual components, each of which performs
 *       a discrete function, or <i>task</i>, allowing you to scale and change
 *       applications quickly. Step Functions provides a console that helps visualize the components of your
 *       application as a series of steps. Step Functions automatically triggers and tracks each step, and
 *       retries steps when there are errors, so your application executes predictably and in the right
 *       order every time. Step Functions logs the state of each step, so you can quickly diagnose and debug any
 *       issues.</p>
 *          <p>Step Functions manages operations and underlying infrastructure to ensure your application is
 *       available at any scale. You can run tasks on Amazon Web Services, your own servers, or any system that has
 *       access to Amazon Web Services. You can access and use Step Functions using the console, the Amazon Web Services SDKs, or an HTTP API.
 *       For more information about Step Functions, see the <i>
 *                <a href="https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html">Step Functions Developer Guide</a>
 *             </i>.</p>
 */
export class SFN extends SFNClient {
  /**
   * <p>Creates an activity. An activity is a task that you write in any programming language and
   *       host on any machine that has access to Step Functions. Activities must poll Step Functions using the
   *         <code>GetActivityTask</code> API action and respond using <code>SendTask*</code> API
   *       actions. This function lets Step Functions know the existence of your activity and returns an
   *       identifier for use in a state machine and when polling from the activity.</p>
   *          <note>
   *             <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p>
   *          </note>
   *          <note>
   *             <p>
   *                <code>CreateActivity</code> is an idempotent API. Subsequent requests won’t create a
   *         duplicate resource if it was already created. <code>CreateActivity</code>'s idempotency
   *         check is based on the activity <code>name</code>. If a following request has different
   *           <code>tags</code> values, Step Functions will ignore these differences and treat it as an
   *         idempotent request of the previous. In this case, <code>tags</code> will not be updated,
   *         even if they are different.</p>
   *          </note>
   */
  public createActivity(
    args: CreateActivityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateActivityCommandOutput>;
  public createActivity(
    args: CreateActivityCommandInput,
    cb: (err: any, data?: CreateActivityCommandOutput) => void
  ): void;
  public createActivity(
    args: CreateActivityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateActivityCommandOutput) => void
  ): void;
  public createActivity(
    args: CreateActivityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateActivityCommandOutput) => void),
    cb?: (err: any, data?: CreateActivityCommandOutput) => void
  ): Promise<CreateActivityCommandOutput> | void {
    const command = new CreateActivityCommand(args);
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
   * <p>Creates a state machine. A state machine consists of a collection of states that can do
   *       work (<code>Task</code> states), determine to which states to transition next
   *         (<code>Choice</code> states), stop an execution with an error (<code>Fail</code> states),
   *       and so on. State machines are specified using a JSON-based, structured language. For more
   *       information, see <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html">Amazon States
   *         Language</a> in the Step Functions User Guide.</p>
   *          <note>
   *             <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p>
   *          </note>
   *          <note>
   *             <p>
   *                <code>CreateStateMachine</code> is an idempotent API. Subsequent requests won’t create a
   *         duplicate resource if it was already created. <code>CreateStateMachine</code>'s idempotency
   *         check is based on the state machine <code>name</code>, <code>definition</code>,
   *           <code>type</code>, <code>LoggingConfiguration</code> and
   *         <code>TracingConfiguration</code>. If a following request has a different
   *           <code>roleArn</code> or <code>tags</code>, Step Functions will ignore these differences and treat
   *         it as an idempotent request of the previous. In this case, <code>roleArn</code> and
   *           <code>tags</code> will not be updated, even if they are different.</p>
   *          </note>
   */
  public createStateMachine(
    args: CreateStateMachineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStateMachineCommandOutput>;
  public createStateMachine(
    args: CreateStateMachineCommandInput,
    cb: (err: any, data?: CreateStateMachineCommandOutput) => void
  ): void;
  public createStateMachine(
    args: CreateStateMachineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStateMachineCommandOutput) => void
  ): void;
  public createStateMachine(
    args: CreateStateMachineCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateStateMachineCommandOutput) => void),
    cb?: (err: any, data?: CreateStateMachineCommandOutput) => void
  ): Promise<CreateStateMachineCommandOutput> | void {
    const command = new CreateStateMachineCommand(args);
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
   * <p>Deletes an activity.</p>
   */
  public deleteActivity(
    args: DeleteActivityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteActivityCommandOutput>;
  public deleteActivity(
    args: DeleteActivityCommandInput,
    cb: (err: any, data?: DeleteActivityCommandOutput) => void
  ): void;
  public deleteActivity(
    args: DeleteActivityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteActivityCommandOutput) => void
  ): void;
  public deleteActivity(
    args: DeleteActivityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteActivityCommandOutput) => void),
    cb?: (err: any, data?: DeleteActivityCommandOutput) => void
  ): Promise<DeleteActivityCommandOutput> | void {
    const command = new DeleteActivityCommand(args);
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
   * <p>Deletes a state machine. This is an asynchronous operation: It sets the state machine's
   *       status to <code>DELETING</code> and begins the deletion process. </p>
   *
   *          <p>If the given state machine Amazon Resource Name (ARN) is a qualified state machine ARN, it will fail with ValidationException.</p>
   *
   *          <p>A qualified state machine ARN refers to a <i>Distributed Map state</i> defined within a state machine. For example, the qualified state machine ARN <code>arn:partition:states:region:account-id:stateMachine:stateMachineName/mapStateLabel</code> refers to a <i>Distributed Map state</i> with a label <code>mapStateLabel</code> in the state machine named <code>stateMachineName</code>.</p>
   *
   *          <note>
   *             <p>For <code>EXPRESS</code> state machines, the deletion will happen eventually (usually
   *         less than a minute). Running executions may emit logs after <code>DeleteStateMachine</code>
   *         API is called.</p>
   *          </note>
   */
  public deleteStateMachine(
    args: DeleteStateMachineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteStateMachineCommandOutput>;
  public deleteStateMachine(
    args: DeleteStateMachineCommandInput,
    cb: (err: any, data?: DeleteStateMachineCommandOutput) => void
  ): void;
  public deleteStateMachine(
    args: DeleteStateMachineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStateMachineCommandOutput) => void
  ): void;
  public deleteStateMachine(
    args: DeleteStateMachineCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteStateMachineCommandOutput) => void),
    cb?: (err: any, data?: DeleteStateMachineCommandOutput) => void
  ): Promise<DeleteStateMachineCommandOutput> | void {
    const command = new DeleteStateMachineCommand(args);
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
   * <p>Describes an activity.</p>
   *          <note>
   *             <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p>
   *          </note>
   */
  public describeActivity(
    args: DescribeActivityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeActivityCommandOutput>;
  public describeActivity(
    args: DescribeActivityCommandInput,
    cb: (err: any, data?: DescribeActivityCommandOutput) => void
  ): void;
  public describeActivity(
    args: DescribeActivityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeActivityCommandOutput) => void
  ): void;
  public describeActivity(
    args: DescribeActivityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeActivityCommandOutput) => void),
    cb?: (err: any, data?: DescribeActivityCommandOutput) => void
  ): Promise<DescribeActivityCommandOutput> | void {
    const command = new DescribeActivityCommand(args);
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
   * <p>Provides all information about a state machine execution, such as the state machine associated with the execution, the execution input and output, and relevant execution metadata. Use this API action to return the Map Run ARN if the execution was dispatched by a Map Run.</p>
   *          <note>
   *             <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p>
   *          </note>
   *          <p>This API action is not supported by <code>EXPRESS</code> state machine executions unless they were dispatched by a Map Run.</p>
   */
  public describeExecution(
    args: DescribeExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeExecutionCommandOutput>;
  public describeExecution(
    args: DescribeExecutionCommandInput,
    cb: (err: any, data?: DescribeExecutionCommandOutput) => void
  ): void;
  public describeExecution(
    args: DescribeExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeExecutionCommandOutput) => void
  ): void;
  public describeExecution(
    args: DescribeExecutionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeExecutionCommandOutput) => void),
    cb?: (err: any, data?: DescribeExecutionCommandOutput) => void
  ): Promise<DescribeExecutionCommandOutput> | void {
    const command = new DescribeExecutionCommand(args);
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
   * <p>Provides information about a Map Run's configuration, progress, and results. For more information, see <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-examine-map-run.html">Examining Map Run</a> in the <i>Step Functions Developer Guide</i>.</p>
   */
  public describeMapRun(
    args: DescribeMapRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMapRunCommandOutput>;
  public describeMapRun(
    args: DescribeMapRunCommandInput,
    cb: (err: any, data?: DescribeMapRunCommandOutput) => void
  ): void;
  public describeMapRun(
    args: DescribeMapRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMapRunCommandOutput) => void
  ): void;
  public describeMapRun(
    args: DescribeMapRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeMapRunCommandOutput) => void),
    cb?: (err: any, data?: DescribeMapRunCommandOutput) => void
  ): Promise<DescribeMapRunCommandOutput> | void {
    const command = new DescribeMapRunCommand(args);
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
   * <p>Provides information about a state machine's definition, its IAM role Amazon Resource Name (ARN), and configuration. If the state machine ARN is a qualified state machine ARN, the response returned includes the <code>Map</code> state's label.</p>
   *
   *          <p>A qualified state machine ARN refers to a <i>Distributed Map state</i> defined within a state machine. For example, the qualified state machine ARN <code>arn:partition:states:region:account-id:stateMachine:stateMachineName/mapStateLabel</code> refers to a <i>Distributed Map state</i> with a label <code>mapStateLabel</code> in the state machine named <code>stateMachineName</code>.</p>
   *
   *          <note>
   *             <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p>
   *          </note>
   */
  public describeStateMachine(
    args: DescribeStateMachineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStateMachineCommandOutput>;
  public describeStateMachine(
    args: DescribeStateMachineCommandInput,
    cb: (err: any, data?: DescribeStateMachineCommandOutput) => void
  ): void;
  public describeStateMachine(
    args: DescribeStateMachineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStateMachineCommandOutput) => void
  ): void;
  public describeStateMachine(
    args: DescribeStateMachineCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeStateMachineCommandOutput) => void),
    cb?: (err: any, data?: DescribeStateMachineCommandOutput) => void
  ): Promise<DescribeStateMachineCommandOutput> | void {
    const command = new DescribeStateMachineCommand(args);
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
   * <p>Provides information about a state machine's definition, its execution role ARN, and configuration. If an execution was dispatched by a Map Run, the Map Run is returned in the response. Additionally, the state machine returned will be the state machine associated with the Map Run.</p>
   *          <note>
   *             <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p>
   *          </note>
   *          <p>This API action is not supported by <code>EXPRESS</code> state machines.</p>
   */
  public describeStateMachineForExecution(
    args: DescribeStateMachineForExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStateMachineForExecutionCommandOutput>;
  public describeStateMachineForExecution(
    args: DescribeStateMachineForExecutionCommandInput,
    cb: (err: any, data?: DescribeStateMachineForExecutionCommandOutput) => void
  ): void;
  public describeStateMachineForExecution(
    args: DescribeStateMachineForExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStateMachineForExecutionCommandOutput) => void
  ): void;
  public describeStateMachineForExecution(
    args: DescribeStateMachineForExecutionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeStateMachineForExecutionCommandOutput) => void),
    cb?: (err: any, data?: DescribeStateMachineForExecutionCommandOutput) => void
  ): Promise<DescribeStateMachineForExecutionCommandOutput> | void {
    const command = new DescribeStateMachineForExecutionCommand(args);
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
   * <p>Used by workers to retrieve a task (with the specified activity ARN) which has been
   *       scheduled for execution by a running state machine. This initiates a long poll, where the
   *       service holds the HTTP connection open and responds as soon as a task becomes available (i.e.
   *       an execution of a task of this type is needed.) The maximum time the service holds on to the
   *       request before responding is 60 seconds. If no task is available within 60 seconds, the poll
   *       returns a <code>taskToken</code> with a null string.</p>
   *
   *          <note>
   *             <p>This API action isn't logged in CloudTrail.</p>
   *          </note>
   *
   *          <important>
   *             <p>Workers should set their client side socket timeout to at least 65 seconds (5 seconds
   *         higher than the maximum time the service may hold the poll request).</p>
   *             <p>Polling with <code>GetActivityTask</code> can cause latency in some implementations. See
   *           <a href="https://docs.aws.amazon.com/step-functions/latest/dg/bp-activity-pollers.html">Avoid
   *           Latency When Polling for Activity Tasks</a> in the Step Functions Developer Guide.</p>
   *          </important>
   */
  public getActivityTask(
    args: GetActivityTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetActivityTaskCommandOutput>;
  public getActivityTask(
    args: GetActivityTaskCommandInput,
    cb: (err: any, data?: GetActivityTaskCommandOutput) => void
  ): void;
  public getActivityTask(
    args: GetActivityTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetActivityTaskCommandOutput) => void
  ): void;
  public getActivityTask(
    args: GetActivityTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetActivityTaskCommandOutput) => void),
    cb?: (err: any, data?: GetActivityTaskCommandOutput) => void
  ): Promise<GetActivityTaskCommandOutput> | void {
    const command = new GetActivityTaskCommand(args);
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
   * <p>Returns the history of the specified execution as a list of events. By default, the
   *       results are returned in ascending order of the <code>timeStamp</code> of the events. Use the
   *         <code>reverseOrder</code> parameter to get the latest events first.</p>
   *          <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
   *     Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p>
   *          <p>This API action is not supported by <code>EXPRESS</code> state machines.</p>
   */
  public getExecutionHistory(
    args: GetExecutionHistoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetExecutionHistoryCommandOutput>;
  public getExecutionHistory(
    args: GetExecutionHistoryCommandInput,
    cb: (err: any, data?: GetExecutionHistoryCommandOutput) => void
  ): void;
  public getExecutionHistory(
    args: GetExecutionHistoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetExecutionHistoryCommandOutput) => void
  ): void;
  public getExecutionHistory(
    args: GetExecutionHistoryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetExecutionHistoryCommandOutput) => void),
    cb?: (err: any, data?: GetExecutionHistoryCommandOutput) => void
  ): Promise<GetExecutionHistoryCommandOutput> | void {
    const command = new GetExecutionHistoryCommand(args);
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
   * <p>Lists the existing activities.</p>
   *          <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
   *     Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p>
   *          <note>
   *             <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p>
   *          </note>
   */
  public listActivities(
    args: ListActivitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListActivitiesCommandOutput>;
  public listActivities(
    args: ListActivitiesCommandInput,
    cb: (err: any, data?: ListActivitiesCommandOutput) => void
  ): void;
  public listActivities(
    args: ListActivitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListActivitiesCommandOutput) => void
  ): void;
  public listActivities(
    args: ListActivitiesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListActivitiesCommandOutput) => void),
    cb?: (err: any, data?: ListActivitiesCommandOutput) => void
  ): Promise<ListActivitiesCommandOutput> | void {
    const command = new ListActivitiesCommand(args);
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
   * <p>Lists all executions of a state machine or a Map Run. You can list all executions related to a state machine by specifying a state machine Amazon Resource Name (ARN), or those related to a Map Run by specifying a Map Run ARN.</p>
   *          <p>Results are
   *       sorted by time, with the most recent execution first.</p>
   *          <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
   *     Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p>
   *          <note>
   *             <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p>
   *          </note>
   *          <p>This API action is not supported by <code>EXPRESS</code> state machines.</p>
   */
  public listExecutions(
    args: ListExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListExecutionsCommandOutput>;
  public listExecutions(
    args: ListExecutionsCommandInput,
    cb: (err: any, data?: ListExecutionsCommandOutput) => void
  ): void;
  public listExecutions(
    args: ListExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExecutionsCommandOutput) => void
  ): void;
  public listExecutions(
    args: ListExecutionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListExecutionsCommandOutput) => void),
    cb?: (err: any, data?: ListExecutionsCommandOutput) => void
  ): Promise<ListExecutionsCommandOutput> | void {
    const command = new ListExecutionsCommand(args);
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
   * <p>Lists all Map Runs that were started by a given state machine execution. Use this API action to obtain Map Run ARNs, and then call <code>DescribeMapRun</code> to obtain more information, if needed.</p>
   */
  public listMapRuns(args: ListMapRunsCommandInput, options?: __HttpHandlerOptions): Promise<ListMapRunsCommandOutput>;
  public listMapRuns(args: ListMapRunsCommandInput, cb: (err: any, data?: ListMapRunsCommandOutput) => void): void;
  public listMapRuns(
    args: ListMapRunsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMapRunsCommandOutput) => void
  ): void;
  public listMapRuns(
    args: ListMapRunsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListMapRunsCommandOutput) => void),
    cb?: (err: any, data?: ListMapRunsCommandOutput) => void
  ): Promise<ListMapRunsCommandOutput> | void {
    const command = new ListMapRunsCommand(args);
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
   * <p>Lists the existing state machines.</p>
   *          <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
   *     Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p>
   *          <note>
   *             <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p>
   *          </note>
   */
  public listStateMachines(
    args: ListStateMachinesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStateMachinesCommandOutput>;
  public listStateMachines(
    args: ListStateMachinesCommandInput,
    cb: (err: any, data?: ListStateMachinesCommandOutput) => void
  ): void;
  public listStateMachines(
    args: ListStateMachinesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStateMachinesCommandOutput) => void
  ): void;
  public listStateMachines(
    args: ListStateMachinesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListStateMachinesCommandOutput) => void),
    cb?: (err: any, data?: ListStateMachinesCommandOutput) => void
  ): Promise<ListStateMachinesCommandOutput> | void {
    const command = new ListStateMachinesCommand(args);
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
   * <p>List tags for a given resource.</p>
   *          <p>Tags may only contain Unicode letters, digits, white space, or these symbols: <code>_ . : / = + - @</code>.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
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
   * <p>Used by activity workers and task states using the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token">callback</a>
   *       pattern to report that the task identified by the <code>taskToken</code> failed.</p>
   */
  public sendTaskFailure(
    args: SendTaskFailureCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendTaskFailureCommandOutput>;
  public sendTaskFailure(
    args: SendTaskFailureCommandInput,
    cb: (err: any, data?: SendTaskFailureCommandOutput) => void
  ): void;
  public sendTaskFailure(
    args: SendTaskFailureCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendTaskFailureCommandOutput) => void
  ): void;
  public sendTaskFailure(
    args: SendTaskFailureCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SendTaskFailureCommandOutput) => void),
    cb?: (err: any, data?: SendTaskFailureCommandOutput) => void
  ): Promise<SendTaskFailureCommandOutput> | void {
    const command = new SendTaskFailureCommand(args);
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
   * <p>Used by activity workers and task states using the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token">callback</a>
   *       pattern to report to Step Functions that the task represented by the specified
   *         <code>taskToken</code> is still making progress. This action resets the
   *         <code>Heartbeat</code> clock. The <code>Heartbeat</code> threshold is specified in the state
   *       machine's Amazon States Language definition (<code>HeartbeatSeconds</code>). This action does not in itself
   *       create an event in the execution history. However, if the task times out, the execution
   *       history contains an <code>ActivityTimedOut</code> entry for activities, or a
   *         <code>TaskTimedOut</code> entry for for tasks using the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-sync">job run</a> or
   *         <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token">callback</a>
   *       pattern.</p>
   *          <note>
   *             <p>The <code>Timeout</code> of a task, defined in the state machine's Amazon States Language definition, is
   *         its maximum allowed duration, regardless of the number of <a>SendTaskHeartbeat</a> requests received. Use <code>HeartbeatSeconds</code> to configure the timeout interval
   *         for heartbeats.</p>
   *          </note>
   */
  public sendTaskHeartbeat(
    args: SendTaskHeartbeatCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendTaskHeartbeatCommandOutput>;
  public sendTaskHeartbeat(
    args: SendTaskHeartbeatCommandInput,
    cb: (err: any, data?: SendTaskHeartbeatCommandOutput) => void
  ): void;
  public sendTaskHeartbeat(
    args: SendTaskHeartbeatCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendTaskHeartbeatCommandOutput) => void
  ): void;
  public sendTaskHeartbeat(
    args: SendTaskHeartbeatCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SendTaskHeartbeatCommandOutput) => void),
    cb?: (err: any, data?: SendTaskHeartbeatCommandOutput) => void
  ): Promise<SendTaskHeartbeatCommandOutput> | void {
    const command = new SendTaskHeartbeatCommand(args);
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
   * <p>Used by activity workers and task states using the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token">callback</a>
   *       pattern to report that the task identified by the <code>taskToken</code> completed
   *       successfully.</p>
   */
  public sendTaskSuccess(
    args: SendTaskSuccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendTaskSuccessCommandOutput>;
  public sendTaskSuccess(
    args: SendTaskSuccessCommandInput,
    cb: (err: any, data?: SendTaskSuccessCommandOutput) => void
  ): void;
  public sendTaskSuccess(
    args: SendTaskSuccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendTaskSuccessCommandOutput) => void
  ): void;
  public sendTaskSuccess(
    args: SendTaskSuccessCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SendTaskSuccessCommandOutput) => void),
    cb?: (err: any, data?: SendTaskSuccessCommandOutput) => void
  ): Promise<SendTaskSuccessCommandOutput> | void {
    const command = new SendTaskSuccessCommand(args);
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
   * <p>Starts a state machine execution. If the given state machine Amazon Resource Name (ARN) is a qualified state machine ARN, it will fail with ValidationException.</p>
   *
   *          <p>A qualified state machine ARN refers to a <i>Distributed Map state</i> defined within a state machine. For example, the qualified state machine ARN <code>arn:partition:states:region:account-id:stateMachine:stateMachineName/mapStateLabel</code> refers to a <i>Distributed Map state</i> with a label <code>mapStateLabel</code> in the state machine named <code>stateMachineName</code>.</p>
   *
   *          <note>
   *             <p>
   *                <code>StartExecution</code> is idempotent for <code>STANDARD</code> workflows. For a
   *           <code>STANDARD</code> workflow, if <code>StartExecution</code> is called with the same
   *         name and input as a running execution, the call will succeed and return the same response as
   *         the original request. If the execution is closed or if the input is different, it will
   *         return a <code>400 ExecutionAlreadyExists</code> error. Names can be reused after 90 days. </p>
   *             <p>
   *                <code>StartExecution</code> is not idempotent for <code>EXPRESS</code> workflows. </p>
   *          </note>
   */
  public startExecution(
    args: StartExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartExecutionCommandOutput>;
  public startExecution(
    args: StartExecutionCommandInput,
    cb: (err: any, data?: StartExecutionCommandOutput) => void
  ): void;
  public startExecution(
    args: StartExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartExecutionCommandOutput) => void
  ): void;
  public startExecution(
    args: StartExecutionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartExecutionCommandOutput) => void),
    cb?: (err: any, data?: StartExecutionCommandOutput) => void
  ): Promise<StartExecutionCommandOutput> | void {
    const command = new StartExecutionCommand(args);
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
   * <p>Starts a Synchronous Express state machine execution. <code>StartSyncExecution</code>
   * 			  is not available for <code>STANDARD</code> workflows.</p>
   *          <note>
   *             <p>
   *                <code>StartSyncExecution</code> will return a <code>200 OK</code> response, even if your
   *         execution fails, because the status code in the API response doesn't reflect function
   *         errors. Error codes are reserved for errors that prevent your execution from running, such
   *         as permissions errors, limit errors, or issues with your state machine code and
   *         configuration. </p>
   *          </note>
   *          <note>
   *             <p>This API action isn't logged in CloudTrail.</p>
   *          </note>
   */
  public startSyncExecution(
    args: StartSyncExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartSyncExecutionCommandOutput>;
  public startSyncExecution(
    args: StartSyncExecutionCommandInput,
    cb: (err: any, data?: StartSyncExecutionCommandOutput) => void
  ): void;
  public startSyncExecution(
    args: StartSyncExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartSyncExecutionCommandOutput) => void
  ): void;
  public startSyncExecution(
    args: StartSyncExecutionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartSyncExecutionCommandOutput) => void),
    cb?: (err: any, data?: StartSyncExecutionCommandOutput) => void
  ): Promise<StartSyncExecutionCommandOutput> | void {
    const command = new StartSyncExecutionCommand(args);
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
   * <p>Stops an execution.</p>
   *          <p>This API action is not supported by <code>EXPRESS</code> state machines.</p>
   */
  public stopExecution(
    args: StopExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopExecutionCommandOutput>;
  public stopExecution(
    args: StopExecutionCommandInput,
    cb: (err: any, data?: StopExecutionCommandOutput) => void
  ): void;
  public stopExecution(
    args: StopExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopExecutionCommandOutput) => void
  ): void;
  public stopExecution(
    args: StopExecutionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopExecutionCommandOutput) => void),
    cb?: (err: any, data?: StopExecutionCommandOutput) => void
  ): Promise<StopExecutionCommandOutput> | void {
    const command = new StopExecutionCommand(args);
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
   * <p>Add a tag to a Step Functions resource.</p>
   *          <p>An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using
   *       Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management User
   *         Guide</i>, and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_iam-tags.html">Controlling Access Using IAM
   *           Tags</a>.</p>
   *          <p>Tags may only contain Unicode letters, digits, white space, or these symbols: <code>_ . : / = + - @</code>.</p>
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
   * <p>Remove a tag from a Step Functions resource</p>
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
   * <p>Updates an in-progress Map Run's configuration to include changes to the settings that control maximum concurrency and Map Run failure.</p>
   */
  public updateMapRun(
    args: UpdateMapRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMapRunCommandOutput>;
  public updateMapRun(args: UpdateMapRunCommandInput, cb: (err: any, data?: UpdateMapRunCommandOutput) => void): void;
  public updateMapRun(
    args: UpdateMapRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMapRunCommandOutput) => void
  ): void;
  public updateMapRun(
    args: UpdateMapRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateMapRunCommandOutput) => void),
    cb?: (err: any, data?: UpdateMapRunCommandOutput) => void
  ): Promise<UpdateMapRunCommandOutput> | void {
    const command = new UpdateMapRunCommand(args);
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
   * <p>Updates an existing state machine by modifying its <code>definition</code>,
   *         <code>roleArn</code>, or <code>loggingConfiguration</code>. Running executions will continue
   *       to use the previous <code>definition</code> and <code>roleArn</code>. You must include at
   *       least one of <code>definition</code> or <code>roleArn</code> or you will receive a
   *         <code>MissingRequiredParameter</code> error.</p>
   *
   *          <p>If the given state machine Amazon Resource Name (ARN) is a qualified state machine ARN, it will fail with ValidationException.</p>
   *
   *          <p>A qualified state machine ARN refers to a <i>Distributed Map state</i> defined within a state machine. For example, the qualified state machine ARN <code>arn:partition:states:region:account-id:stateMachine:stateMachineName/mapStateLabel</code> refers to a <i>Distributed Map state</i> with a label <code>mapStateLabel</code> in the state machine named <code>stateMachineName</code>.</p>
   *
   *          <note>
   *             <p>All <code>StartExecution</code> calls within a few seconds will use the updated
   *           <code>definition</code> and <code>roleArn</code>. Executions started immediately after
   *         calling <code>UpdateStateMachine</code> may use the previous state machine
   *           <code>definition</code> and <code>roleArn</code>. </p>
   *          </note>
   */
  public updateStateMachine(
    args: UpdateStateMachineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateStateMachineCommandOutput>;
  public updateStateMachine(
    args: UpdateStateMachineCommandInput,
    cb: (err: any, data?: UpdateStateMachineCommandOutput) => void
  ): void;
  public updateStateMachine(
    args: UpdateStateMachineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStateMachineCommandOutput) => void
  ): void;
  public updateStateMachine(
    args: UpdateStateMachineCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateStateMachineCommandOutput) => void),
    cb?: (err: any, data?: UpdateStateMachineCommandOutput) => void
  ): Promise<UpdateStateMachineCommandOutput> | void {
    const command = new UpdateStateMachineCommand(args);
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
