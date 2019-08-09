import { SFNClient } from "./SFNClient";
import { ActivityDoesNotExist } from "./types/ActivityDoesNotExist";
import { ActivityLimitExceeded } from "./types/ActivityLimitExceeded";
import { ActivityWorkerLimitExceeded } from "./types/ActivityWorkerLimitExceeded";
import { CreateActivityInput } from "./types/CreateActivityInput";
import { CreateActivityOutput } from "./types/CreateActivityOutput";
import { CreateStateMachineInput } from "./types/CreateStateMachineInput";
import { CreateStateMachineOutput } from "./types/CreateStateMachineOutput";
import { DeleteActivityInput } from "./types/DeleteActivityInput";
import { DeleteActivityOutput } from "./types/DeleteActivityOutput";
import { DeleteStateMachineInput } from "./types/DeleteStateMachineInput";
import { DeleteStateMachineOutput } from "./types/DeleteStateMachineOutput";
import { DescribeActivityInput } from "./types/DescribeActivityInput";
import { DescribeActivityOutput } from "./types/DescribeActivityOutput";
import { DescribeExecutionInput } from "./types/DescribeExecutionInput";
import { DescribeExecutionOutput } from "./types/DescribeExecutionOutput";
import { DescribeStateMachineForExecutionInput } from "./types/DescribeStateMachineForExecutionInput";
import { DescribeStateMachineForExecutionOutput } from "./types/DescribeStateMachineForExecutionOutput";
import { DescribeStateMachineInput } from "./types/DescribeStateMachineInput";
import { DescribeStateMachineOutput } from "./types/DescribeStateMachineOutput";
import { ExecutionAlreadyExists } from "./types/ExecutionAlreadyExists";
import { ExecutionDoesNotExist } from "./types/ExecutionDoesNotExist";
import { ExecutionLimitExceeded } from "./types/ExecutionLimitExceeded";
import { GetActivityTaskInput } from "./types/GetActivityTaskInput";
import { GetActivityTaskOutput } from "./types/GetActivityTaskOutput";
import { GetExecutionHistoryInput } from "./types/GetExecutionHistoryInput";
import { GetExecutionHistoryOutput } from "./types/GetExecutionHistoryOutput";
import { InvalidArn } from "./types/InvalidArn";
import { InvalidDefinition } from "./types/InvalidDefinition";
import { InvalidExecutionInput } from "./types/InvalidExecutionInput";
import { InvalidName } from "./types/InvalidName";
import { InvalidOutput } from "./types/InvalidOutput";
import { InvalidToken } from "./types/InvalidToken";
import { ListActivitiesInput } from "./types/ListActivitiesInput";
import { ListActivitiesOutput } from "./types/ListActivitiesOutput";
import { ListExecutionsInput } from "./types/ListExecutionsInput";
import { ListExecutionsOutput } from "./types/ListExecutionsOutput";
import { ListStateMachinesInput } from "./types/ListStateMachinesInput";
import { ListStateMachinesOutput } from "./types/ListStateMachinesOutput";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { MissingRequiredParameter } from "./types/MissingRequiredParameter";
import { ResourceNotFound } from "./types/ResourceNotFound";
import { SendTaskFailureInput } from "./types/SendTaskFailureInput";
import { SendTaskFailureOutput } from "./types/SendTaskFailureOutput";
import { SendTaskHeartbeatInput } from "./types/SendTaskHeartbeatInput";
import { SendTaskHeartbeatOutput } from "./types/SendTaskHeartbeatOutput";
import { SendTaskSuccessInput } from "./types/SendTaskSuccessInput";
import { SendTaskSuccessOutput } from "./types/SendTaskSuccessOutput";
import { StartExecutionInput } from "./types/StartExecutionInput";
import { StartExecutionOutput } from "./types/StartExecutionOutput";
import { StateMachineAlreadyExists } from "./types/StateMachineAlreadyExists";
import { StateMachineDeleting } from "./types/StateMachineDeleting";
import { StateMachineDoesNotExist } from "./types/StateMachineDoesNotExist";
import { StateMachineLimitExceeded } from "./types/StateMachineLimitExceeded";
import { StopExecutionInput } from "./types/StopExecutionInput";
import { StopExecutionOutput } from "./types/StopExecutionOutput";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { TaskDoesNotExist } from "./types/TaskDoesNotExist";
import { TaskTimedOut } from "./types/TaskTimedOut";
import { TooManyTags } from "./types/TooManyTags";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { UpdateStateMachineInput } from "./types/UpdateStateMachineInput";
import { UpdateStateMachineOutput } from "./types/UpdateStateMachineOutput";
import { CreateActivityCommand } from "./commands/CreateActivityCommand";
import { CreateStateMachineCommand } from "./commands/CreateStateMachineCommand";
import { DeleteActivityCommand } from "./commands/DeleteActivityCommand";
import { DeleteStateMachineCommand } from "./commands/DeleteStateMachineCommand";
import { DescribeActivityCommand } from "./commands/DescribeActivityCommand";
import { DescribeExecutionCommand } from "./commands/DescribeExecutionCommand";
import { DescribeStateMachineCommand } from "./commands/DescribeStateMachineCommand";
import { DescribeStateMachineForExecutionCommand } from "./commands/DescribeStateMachineForExecutionCommand";
import { GetActivityTaskCommand } from "./commands/GetActivityTaskCommand";
import { GetExecutionHistoryCommand } from "./commands/GetExecutionHistoryCommand";
import { ListActivitiesCommand } from "./commands/ListActivitiesCommand";
import { ListExecutionsCommand } from "./commands/ListExecutionsCommand";
import { ListStateMachinesCommand } from "./commands/ListStateMachinesCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { SendTaskFailureCommand } from "./commands/SendTaskFailureCommand";
import { SendTaskHeartbeatCommand } from "./commands/SendTaskHeartbeatCommand";
import { SendTaskSuccessCommand } from "./commands/SendTaskSuccessCommand";
import { StartExecutionCommand } from "./commands/StartExecutionCommand";
import { StopExecutionCommand } from "./commands/StopExecutionCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateStateMachineCommand } from "./commands/UpdateStateMachineCommand";

export class SFN extends SFNClient {
  /**
   * <p>Creates an activity. An activity is a task that you write in any programming language and host on any machine that has access to AWS Step Functions. Activities must poll Step Functions using the <code>GetActivityTask</code> API action and respond using <code>SendTask*</code> API actions. This function lets Step Functions know the existence of your activity and returns an identifier for use in a state machine and when polling from the activity.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ActivityLimitExceeded} <p>The maximum number of activities has been reached. Existing activities must be deleted before a new activity can be created.</p>
   *   - {InvalidName} <p>The provided name is invalid.</p>
   *   - {TooManyTags} <p>You've exceeded the number of tags allowed for a resource. See the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/limits.html"> Limits Topic</a> in the AWS Step Functions Developer Guide.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createActivity(
    args: CreateActivityInput
  ): Promise<CreateActivityOutput>;
  public createActivity(
    args: CreateActivityInput,
    cb: (err: any, data?: CreateActivityOutput) => void
  ): void;
  public createActivity(
    args: CreateActivityInput,
    cb?: (err: any, data?: CreateActivityOutput) => void
  ): Promise<CreateActivityOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateActivityCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a state machine. A state machine consists of a collection of states that can do work (<code>Task</code> states), determine to which states to transition next (<code>Choice</code> states), stop an execution with an error (<code>Fail</code> states), and so on. State machines are specified using a JSON-based, structured language.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidArn} <p>The provided Amazon Resource Name (ARN) is invalid.</p>
   *   - {InvalidDefinition} <p>The provided Amazon States Language definition is invalid.</p>
   *   - {InvalidName} <p>The provided name is invalid.</p>
   *   - {StateMachineAlreadyExists} <p>A state machine with the same name but a different definition or role ARN already exists.</p>
   *   - {StateMachineDeleting} <p>The specified state machine is being deleted.</p>
   *   - {StateMachineLimitExceeded} <p>The maximum number of state machines has been reached. Existing state machines must be deleted before a new state machine can be created.</p>
   *   - {TooManyTags} <p>You've exceeded the number of tags allowed for a resource. See the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/limits.html"> Limits Topic</a> in the AWS Step Functions Developer Guide.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createStateMachine(
    args: CreateStateMachineInput
  ): Promise<CreateStateMachineOutput>;
  public createStateMachine(
    args: CreateStateMachineInput,
    cb: (err: any, data?: CreateStateMachineOutput) => void
  ): void;
  public createStateMachine(
    args: CreateStateMachineInput,
    cb?: (err: any, data?: CreateStateMachineOutput) => void
  ): Promise<CreateStateMachineOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateStateMachineCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an activity.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidArn} <p>The provided Amazon Resource Name (ARN) is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteActivity(
    args: DeleteActivityInput
  ): Promise<DeleteActivityOutput>;
  public deleteActivity(
    args: DeleteActivityInput,
    cb: (err: any, data?: DeleteActivityOutput) => void
  ): void;
  public deleteActivity(
    args: DeleteActivityInput,
    cb?: (err: any, data?: DeleteActivityOutput) => void
  ): Promise<DeleteActivityOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteActivityCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a state machine. This is an asynchronous operation: It sets the state machine's status to <code>DELETING</code> and begins the deletion process. Each state machine execution is deleted the next time it makes a state transition.</p> <note> <p>The state machine itself is deleted after all executions are completed or deleted.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidArn} <p>The provided Amazon Resource Name (ARN) is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteStateMachine(
    args: DeleteStateMachineInput
  ): Promise<DeleteStateMachineOutput>;
  public deleteStateMachine(
    args: DeleteStateMachineInput,
    cb: (err: any, data?: DeleteStateMachineOutput) => void
  ): void;
  public deleteStateMachine(
    args: DeleteStateMachineInput,
    cb?: (err: any, data?: DeleteStateMachineOutput) => void
  ): Promise<DeleteStateMachineOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteStateMachineCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes an activity.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ActivityDoesNotExist} <p>The specified activity does not exist.</p>
   *   - {InvalidArn} <p>The provided Amazon Resource Name (ARN) is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeActivity(
    args: DescribeActivityInput
  ): Promise<DescribeActivityOutput>;
  public describeActivity(
    args: DescribeActivityInput,
    cb: (err: any, data?: DescribeActivityOutput) => void
  ): void;
  public describeActivity(
    args: DescribeActivityInput,
    cb?: (err: any, data?: DescribeActivityOutput) => void
  ): Promise<DescribeActivityOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeActivityCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes an execution.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ExecutionDoesNotExist} <p>The specified execution does not exist.</p>
   *   - {InvalidArn} <p>The provided Amazon Resource Name (ARN) is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeExecution(
    args: DescribeExecutionInput
  ): Promise<DescribeExecutionOutput>;
  public describeExecution(
    args: DescribeExecutionInput,
    cb: (err: any, data?: DescribeExecutionOutput) => void
  ): void;
  public describeExecution(
    args: DescribeExecutionInput,
    cb?: (err: any, data?: DescribeExecutionOutput) => void
  ): Promise<DescribeExecutionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeExecutionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes a state machine.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidArn} <p>The provided Amazon Resource Name (ARN) is invalid.</p>
   *   - {StateMachineDoesNotExist} <p>The specified state machine does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeStateMachine(
    args: DescribeStateMachineInput
  ): Promise<DescribeStateMachineOutput>;
  public describeStateMachine(
    args: DescribeStateMachineInput,
    cb: (err: any, data?: DescribeStateMachineOutput) => void
  ): void;
  public describeStateMachine(
    args: DescribeStateMachineInput,
    cb?: (err: any, data?: DescribeStateMachineOutput) => void
  ): Promise<DescribeStateMachineOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeStateMachineCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the state machine associated with a specific execution.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ExecutionDoesNotExist} <p>The specified execution does not exist.</p>
   *   - {InvalidArn} <p>The provided Amazon Resource Name (ARN) is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeStateMachineForExecution(
    args: DescribeStateMachineForExecutionInput
  ): Promise<DescribeStateMachineForExecutionOutput>;
  public describeStateMachineForExecution(
    args: DescribeStateMachineForExecutionInput,
    cb: (err: any, data?: DescribeStateMachineForExecutionOutput) => void
  ): void;
  public describeStateMachineForExecution(
    args: DescribeStateMachineForExecutionInput,
    cb?: (err: any, data?: DescribeStateMachineForExecutionOutput) => void
  ): Promise<DescribeStateMachineForExecutionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeStateMachineForExecutionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Used by workers to retrieve a task (with the specified activity ARN) which has been scheduled for execution by a running state machine. This initiates a long poll, where the service holds the HTTP connection open and responds as soon as a task becomes available (i.e. an execution of a task of this type is needed.) The maximum time the service holds on to the request before responding is 60 seconds. If no task is available within 60 seconds, the poll returns a <code>taskToken</code> with a null string.</p> <important> <p>Workers should set their client side socket timeout to at least 65 seconds (5 seconds higher than the maximum time the service may hold the poll request).</p> <p>Polling with <code>GetActivityTask</code> can cause latency in some implementations. See <a href="https://docs.aws.amazon.com/step-functions/latest/dg/bp-activity-pollers.html">Avoid Latency When Polling for Activity Tasks</a> in the Step Functions Developer Guide.</p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {ActivityDoesNotExist} <p>The specified activity does not exist.</p>
   *   - {ActivityWorkerLimitExceeded} <p>The maximum number of workers concurrently polling for activity tasks has been reached.</p>
   *   - {InvalidArn} <p>The provided Amazon Resource Name (ARN) is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getActivityTask(
    args: GetActivityTaskInput
  ): Promise<GetActivityTaskOutput>;
  public getActivityTask(
    args: GetActivityTaskInput,
    cb: (err: any, data?: GetActivityTaskOutput) => void
  ): void;
  public getActivityTask(
    args: GetActivityTaskInput,
    cb?: (err: any, data?: GetActivityTaskOutput) => void
  ): Promise<GetActivityTaskOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetActivityTaskCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the history of the specified execution as a list of events. By default, the results are returned in ascending order of the <code>timeStamp</code> of the events. Use the <code>reverseOrder</code> parameter to get the latest events first.</p> <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ExecutionDoesNotExist} <p>The specified execution does not exist.</p>
   *   - {InvalidArn} <p>The provided Amazon Resource Name (ARN) is invalid.</p>
   *   - {InvalidToken} <p>The provided token is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getExecutionHistory(
    args: GetExecutionHistoryInput
  ): Promise<GetExecutionHistoryOutput>;
  public getExecutionHistory(
    args: GetExecutionHistoryInput,
    cb: (err: any, data?: GetExecutionHistoryOutput) => void
  ): void;
  public getExecutionHistory(
    args: GetExecutionHistoryInput,
    cb?: (err: any, data?: GetExecutionHistoryOutput) => void
  ): Promise<GetExecutionHistoryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetExecutionHistoryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the existing activities.</p> <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidToken} <p>The provided token is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listActivities(
    args: ListActivitiesInput
  ): Promise<ListActivitiesOutput>;
  public listActivities(
    args: ListActivitiesInput,
    cb: (err: any, data?: ListActivitiesOutput) => void
  ): void;
  public listActivities(
    args: ListActivitiesInput,
    cb?: (err: any, data?: ListActivitiesOutput) => void
  ): Promise<ListActivitiesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListActivitiesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the executions of a state machine that meet the filtering criteria. Results are sorted by time, with the most recent execution first.</p> <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidArn} <p>The provided Amazon Resource Name (ARN) is invalid.</p>
   *   - {InvalidToken} <p>The provided token is invalid.</p>
   *   - {StateMachineDoesNotExist} <p>The specified state machine does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listExecutions(
    args: ListExecutionsInput
  ): Promise<ListExecutionsOutput>;
  public listExecutions(
    args: ListExecutionsInput,
    cb: (err: any, data?: ListExecutionsOutput) => void
  ): void;
  public listExecutions(
    args: ListExecutionsInput,
    cb?: (err: any, data?: ListExecutionsOutput) => void
  ): Promise<ListExecutionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListExecutionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the existing state machines.</p> <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidToken} <p>The provided token is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listStateMachines(
    args: ListStateMachinesInput
  ): Promise<ListStateMachinesOutput>;
  public listStateMachines(
    args: ListStateMachinesInput,
    cb: (err: any, data?: ListStateMachinesOutput) => void
  ): void;
  public listStateMachines(
    args: ListStateMachinesInput,
    cb?: (err: any, data?: ListStateMachinesOutput) => void
  ): Promise<ListStateMachinesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListStateMachinesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>List tags for a given resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidArn} <p>The provided Amazon Resource Name (ARN) is invalid.</p>
   *   - {ResourceNotFound} <p>Could not fine the referenced resource. Only state machine and activity ARNs are supported.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTagsForResource(
    args: ListTagsForResourceInput
  ): Promise<ListTagsForResourceOutput>;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb: (err: any, data?: ListTagsForResourceOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb?: (err: any, data?: ListTagsForResourceOutput) => void
  ): Promise<ListTagsForResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsForResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Used by workers to report that the task identified by the <code>taskToken</code> failed.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {TaskDoesNotExist} TaskDoesNotExist shape
   *   - {InvalidToken} <p>The provided token is invalid.</p>
   *   - {TaskTimedOut} TaskTimedOut shape
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public sendTaskFailure(
    args: SendTaskFailureInput
  ): Promise<SendTaskFailureOutput>;
  public sendTaskFailure(
    args: SendTaskFailureInput,
    cb: (err: any, data?: SendTaskFailureOutput) => void
  ): void;
  public sendTaskFailure(
    args: SendTaskFailureInput,
    cb?: (err: any, data?: SendTaskFailureOutput) => void
  ): Promise<SendTaskFailureOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SendTaskFailureCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Used by workers to report to the service that the task represented by the specified <code>taskToken</code> is still making progress. This action resets the <code>Heartbeat</code> clock. The <code>Heartbeat</code> threshold is specified in the state machine's Amazon States Language definition. This action does not in itself create an event in the execution history. However, if the task times out, the execution history contains an <code>ActivityTimedOut</code> event.</p> <note> <p>The <code>Timeout</code> of a task, defined in the state machine's Amazon States Language definition, is its maximum allowed duration, regardless of the number of <a>SendTaskHeartbeat</a> requests received.</p> </note> <note> <p>This operation is only useful for long-lived tasks to report the liveliness of the task.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {TaskDoesNotExist} TaskDoesNotExist shape
   *   - {InvalidToken} <p>The provided token is invalid.</p>
   *   - {TaskTimedOut} TaskTimedOut shape
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public sendTaskHeartbeat(
    args: SendTaskHeartbeatInput
  ): Promise<SendTaskHeartbeatOutput>;
  public sendTaskHeartbeat(
    args: SendTaskHeartbeatInput,
    cb: (err: any, data?: SendTaskHeartbeatOutput) => void
  ): void;
  public sendTaskHeartbeat(
    args: SendTaskHeartbeatInput,
    cb?: (err: any, data?: SendTaskHeartbeatOutput) => void
  ): Promise<SendTaskHeartbeatOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SendTaskHeartbeatCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Used by workers to report that the task identified by the <code>taskToken</code> completed successfully.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {TaskDoesNotExist} TaskDoesNotExist shape
   *   - {InvalidOutput} <p>The provided JSON output data is invalid.</p>
   *   - {InvalidToken} <p>The provided token is invalid.</p>
   *   - {TaskTimedOut} TaskTimedOut shape
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public sendTaskSuccess(
    args: SendTaskSuccessInput
  ): Promise<SendTaskSuccessOutput>;
  public sendTaskSuccess(
    args: SendTaskSuccessInput,
    cb: (err: any, data?: SendTaskSuccessOutput) => void
  ): void;
  public sendTaskSuccess(
    args: SendTaskSuccessInput,
    cb?: (err: any, data?: SendTaskSuccessOutput) => void
  ): Promise<SendTaskSuccessOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SendTaskSuccessCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Starts a state machine execution.</p> <note> <p> <code>StartExecution</code> is idempotent. If <code>StartExecution</code> is called with the same name and input as a running execution, the call will succeed and return the same response as the original request. If the execution is closed or if the input is different, it will return a 400 <code>ExecutionAlreadyExists</code> error. Names can be reused after 90 days. </p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ExecutionLimitExceeded} <p>The maximum number of running executions has been reached. Running executions must end or be stopped before a new execution can be started.</p>
   *   - {ExecutionAlreadyExists} <p>The execution has the same <code>name</code> as another execution (but a different <code>input</code>).</p> <note> <p>Executions with the same <code>name</code> and <code>input</code> are considered idempotent.</p> </note>
   *   - {InvalidArn} <p>The provided Amazon Resource Name (ARN) is invalid.</p>
   *   - {InvalidExecutionInput} <p>The provided JSON input data is invalid.</p>
   *   - {InvalidName} <p>The provided name is invalid.</p>
   *   - {StateMachineDoesNotExist} <p>The specified state machine does not exist.</p>
   *   - {StateMachineDeleting} <p>The specified state machine is being deleted.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startExecution(
    args: StartExecutionInput
  ): Promise<StartExecutionOutput>;
  public startExecution(
    args: StartExecutionInput,
    cb: (err: any, data?: StartExecutionOutput) => void
  ): void;
  public startExecution(
    args: StartExecutionInput,
    cb?: (err: any, data?: StartExecutionOutput) => void
  ): Promise<StartExecutionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartExecutionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Stops an execution.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ExecutionDoesNotExist} <p>The specified execution does not exist.</p>
   *   - {InvalidArn} <p>The provided Amazon Resource Name (ARN) is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopExecution(args: StopExecutionInput): Promise<StopExecutionOutput>;
  public stopExecution(
    args: StopExecutionInput,
    cb: (err: any, data?: StopExecutionOutput) => void
  ): void;
  public stopExecution(
    args: StopExecutionInput,
    cb?: (err: any, data?: StopExecutionOutput) => void
  ): Promise<StopExecutionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopExecutionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Add a tag to a Step Functions resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidArn} <p>The provided Amazon Resource Name (ARN) is invalid.</p>
   *   - {ResourceNotFound} <p>Could not fine the referenced resource. Only state machine and activity ARNs are supported.</p>
   *   - {TooManyTags} <p>You've exceeded the number of tags allowed for a resource. See the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/limits.html"> Limits Topic</a> in the AWS Step Functions Developer Guide.</p>
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
   * <p>Remove a tag from a Step Functions resource</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidArn} <p>The provided Amazon Resource Name (ARN) is invalid.</p>
   *   - {ResourceNotFound} <p>Could not fine the referenced resource. Only state machine and activity ARNs are supported.</p>
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
   * <p>Updates an existing state machine by modifying its <code>definition</code> and/or <code>roleArn</code>. Running executions will continue to use the previous <code>definition</code> and <code>roleArn</code>. You must include at least one of <code>definition</code> or <code>roleArn</code> or you will receive a <code>MissingRequiredParameter</code> error.</p> <note> <p>All <code>StartExecution</code> calls within a few seconds will use the updated <code>definition</code> and <code>roleArn</code>. Executions started immediately after calling <code>UpdateStateMachine</code> may use the previous state machine <code>definition</code> and <code>roleArn</code>. </p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidArn} <p>The provided Amazon Resource Name (ARN) is invalid.</p>
   *   - {InvalidDefinition} <p>The provided Amazon States Language definition is invalid.</p>
   *   - {MissingRequiredParameter} <p>Request is missing a required parameter. This error occurs if both <code>definition</code> and <code>roleArn</code> are not specified.</p>
   *   - {StateMachineDeleting} <p>The specified state machine is being deleted.</p>
   *   - {StateMachineDoesNotExist} <p>The specified state machine does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateStateMachine(
    args: UpdateStateMachineInput
  ): Promise<UpdateStateMachineOutput>;
  public updateStateMachine(
    args: UpdateStateMachineInput,
    cb: (err: any, data?: UpdateStateMachineOutput) => void
  ): void;
  public updateStateMachine(
    args: UpdateStateMachineInput,
    cb?: (err: any, data?: UpdateStateMachineOutput) => void
  ): Promise<UpdateStateMachineOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateStateMachineCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
