import { SFNClient } from "./SFNClient";
import { CreateActivityCommandInput, CreateActivityCommandOutput } from "./commands/CreateActivityCommand";
import { CreateStateMachineCommandInput, CreateStateMachineCommandOutput } from "./commands/CreateStateMachineCommand";
import { DeleteActivityCommandInput, DeleteActivityCommandOutput } from "./commands/DeleteActivityCommand";
import { DeleteStateMachineCommandInput, DeleteStateMachineCommandOutput } from "./commands/DeleteStateMachineCommand";
import { DescribeActivityCommandInput, DescribeActivityCommandOutput } from "./commands/DescribeActivityCommand";
import { DescribeExecutionCommandInput, DescribeExecutionCommandOutput } from "./commands/DescribeExecutionCommand";
import { DescribeStateMachineCommandInput, DescribeStateMachineCommandOutput } from "./commands/DescribeStateMachineCommand";
import { DescribeStateMachineForExecutionCommandInput, DescribeStateMachineForExecutionCommandOutput } from "./commands/DescribeStateMachineForExecutionCommand";
import { GetActivityTaskCommandInput, GetActivityTaskCommandOutput } from "./commands/GetActivityTaskCommand";
import { GetExecutionHistoryCommandInput, GetExecutionHistoryCommandOutput } from "./commands/GetExecutionHistoryCommand";
import { ListActivitiesCommandInput, ListActivitiesCommandOutput } from "./commands/ListActivitiesCommand";
import { ListExecutionsCommandInput, ListExecutionsCommandOutput } from "./commands/ListExecutionsCommand";
import { ListStateMachinesCommandInput, ListStateMachinesCommandOutput } from "./commands/ListStateMachinesCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { SendTaskFailureCommandInput, SendTaskFailureCommandOutput } from "./commands/SendTaskFailureCommand";
import { SendTaskHeartbeatCommandInput, SendTaskHeartbeatCommandOutput } from "./commands/SendTaskHeartbeatCommand";
import { SendTaskSuccessCommandInput, SendTaskSuccessCommandOutput } from "./commands/SendTaskSuccessCommand";
import { StartExecutionCommandInput, StartExecutionCommandOutput } from "./commands/StartExecutionCommand";
import { StopExecutionCommandInput, StopExecutionCommandOutput } from "./commands/StopExecutionCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateStateMachineCommandInput, UpdateStateMachineCommandOutput } from "./commands/UpdateStateMachineCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>AWS Step Functions</fullname>
 *          <p>AWS Step Functions is a service that lets you coordinate the components of distributed applications
 *       and microservices using visual workflows.</p>
 *          <p>You can use Step Functions to build applications from individual components, each of which performs
 *       a discrete function, or <i>task</i>, allowing you to scale and change
 *       applications quickly. Step Functions provides a console that helps visualize the components of your
 *       application as a series of steps. Step Functions automatically triggers and tracks each step, and
 *       retries steps when there are errors, so your application executes predictably and in the right
 *       order every time. Step Functions logs the state of each step, so you can quickly diagnose and debug any
 *       issues.</p>
 *          <p>Step Functions manages operations and underlying infrastructure to ensure your application is
 *       available at any scale. You can run tasks on AWS, your own servers, or any system that has
 *       access to AWS. You can access and use Step Functions using the console, the AWS SDKs, or an HTTP API.
 *       For more information about Step Functions, see the <i>
 *                <a href="https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html">AWS Step Functions Developer Guide</a>
 *             </i>.</p>
 */
export declare class SFN extends SFNClient {
    /**
     * <p>Creates an activity. An activity is a task that you write in any programming language and
     *       host on any machine that has access to AWS Step Functions. Activities must poll Step Functions using the
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
    createActivity(args: CreateActivityCommandInput, options?: __HttpHandlerOptions): Promise<CreateActivityCommandOutput>;
    createActivity(args: CreateActivityCommandInput, cb: (err: any, data?: CreateActivityCommandOutput) => void): void;
    createActivity(args: CreateActivityCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateActivityCommandOutput) => void): void;
    /**
     * <p>Creates a state machine. A state machine consists of a collection of states that can do
     *       work (<code>Task</code> states), determine to which states to transition next
     *         (<code>Choice</code> states), stop an execution with an error (<code>Fail</code> states),
     *       and so on. State machines are specified using a JSON-based, structured language.</p>
     *          <note>
     *             <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p>
     *          </note>
     *          <note>
     *             <p>
     *                <code>CreateStateMachine</code> is an idempotent API. Subsequent requests won’t create a
     *         duplicate resource if it was already created. <code>CreateStateMachine</code>'s idempotency
     *         check is based on the state machine <code>name</code> and <code>definition</code>. If a
     *         following request has a different <code>roleArn</code> or <code>tags</code>, Step Functions will
     *         ignore these differences and treat it as an idempotent request of the previous. In this
     *         case, <code>roleArn</code> and <code>tags</code> will not be updated, even if they are
     *         different.</p>
     *          </note>
     */
    createStateMachine(args: CreateStateMachineCommandInput, options?: __HttpHandlerOptions): Promise<CreateStateMachineCommandOutput>;
    createStateMachine(args: CreateStateMachineCommandInput, cb: (err: any, data?: CreateStateMachineCommandOutput) => void): void;
    createStateMachine(args: CreateStateMachineCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateStateMachineCommandOutput) => void): void;
    /**
     * <p>Deletes an activity.</p>
     */
    deleteActivity(args: DeleteActivityCommandInput, options?: __HttpHandlerOptions): Promise<DeleteActivityCommandOutput>;
    deleteActivity(args: DeleteActivityCommandInput, cb: (err: any, data?: DeleteActivityCommandOutput) => void): void;
    deleteActivity(args: DeleteActivityCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteActivityCommandOutput) => void): void;
    /**
     * <p>Deletes a state machine. This is an asynchronous operation: It sets the state machine's
     *       status to <code>DELETING</code> and begins the deletion process. Each state machine execution
     *       is deleted the next time it makes a state transition.</p>
     *          <note>
     *             <p>The state machine itself is deleted after all executions are completed or
     *         deleted.</p>
     *          </note>
     */
    deleteStateMachine(args: DeleteStateMachineCommandInput, options?: __HttpHandlerOptions): Promise<DeleteStateMachineCommandOutput>;
    deleteStateMachine(args: DeleteStateMachineCommandInput, cb: (err: any, data?: DeleteStateMachineCommandOutput) => void): void;
    deleteStateMachine(args: DeleteStateMachineCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteStateMachineCommandOutput) => void): void;
    /**
     * <p>Describes an activity.</p>
     *          <note>
     *             <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p>
     *          </note>
     */
    describeActivity(args: DescribeActivityCommandInput, options?: __HttpHandlerOptions): Promise<DescribeActivityCommandOutput>;
    describeActivity(args: DescribeActivityCommandInput, cb: (err: any, data?: DescribeActivityCommandOutput) => void): void;
    describeActivity(args: DescribeActivityCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeActivityCommandOutput) => void): void;
    /**
     * <p>Describes an execution.</p>
     *          <note>
     *             <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p>
     *          </note>
     */
    describeExecution(args: DescribeExecutionCommandInput, options?: __HttpHandlerOptions): Promise<DescribeExecutionCommandOutput>;
    describeExecution(args: DescribeExecutionCommandInput, cb: (err: any, data?: DescribeExecutionCommandOutput) => void): void;
    describeExecution(args: DescribeExecutionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeExecutionCommandOutput) => void): void;
    /**
     * <p>Describes a state machine.</p>
     *          <note>
     *             <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p>
     *          </note>
     */
    describeStateMachine(args: DescribeStateMachineCommandInput, options?: __HttpHandlerOptions): Promise<DescribeStateMachineCommandOutput>;
    describeStateMachine(args: DescribeStateMachineCommandInput, cb: (err: any, data?: DescribeStateMachineCommandOutput) => void): void;
    describeStateMachine(args: DescribeStateMachineCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeStateMachineCommandOutput) => void): void;
    /**
     * <p>Describes the state machine associated with a specific execution.</p>
     *          <note>
     *             <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p>
     *          </note>
     */
    describeStateMachineForExecution(args: DescribeStateMachineForExecutionCommandInput, options?: __HttpHandlerOptions): Promise<DescribeStateMachineForExecutionCommandOutput>;
    describeStateMachineForExecution(args: DescribeStateMachineForExecutionCommandInput, cb: (err: any, data?: DescribeStateMachineForExecutionCommandOutput) => void): void;
    describeStateMachineForExecution(args: DescribeStateMachineForExecutionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeStateMachineForExecutionCommandOutput) => void): void;
    /**
     * <p>Used by workers to retrieve a task (with the specified activity ARN) which has been
     *       scheduled for execution by a running state machine. This initiates a long poll, where the
     *       service holds the HTTP connection open and responds as soon as a task becomes available (i.e.
     *       an execution of a task of this type is needed.) The maximum time the service holds on to the
     *       request before responding is 60 seconds. If no task is available within 60 seconds, the poll
     *       returns a <code>taskToken</code> with a null string.</p>
     *          <important>
     *             <p>Workers should set their client side socket timeout to at least 65 seconds (5 seconds
     *         higher than the maximum time the service may hold the poll request).</p>
     *             <p>Polling with <code>GetActivityTask</code> can cause latency in some implementations. See
     *           <a href="https://docs.aws.amazon.com/step-functions/latest/dg/bp-activity-pollers.html">Avoid
     *           Latency When Polling for Activity Tasks</a> in the Step Functions Developer Guide.</p>
     *          </important>
     */
    getActivityTask(args: GetActivityTaskCommandInput, options?: __HttpHandlerOptions): Promise<GetActivityTaskCommandOutput>;
    getActivityTask(args: GetActivityTaskCommandInput, cb: (err: any, data?: GetActivityTaskCommandOutput) => void): void;
    getActivityTask(args: GetActivityTaskCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetActivityTaskCommandOutput) => void): void;
    /**
     * <p>Returns the history of the specified execution as a list of events. By default, the
     *       results are returned in ascending order of the <code>timeStamp</code> of the events. Use the
     *         <code>reverseOrder</code> parameter to get the latest events first.</p>
     *          <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
     *     Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p>
     */
    getExecutionHistory(args: GetExecutionHistoryCommandInput, options?: __HttpHandlerOptions): Promise<GetExecutionHistoryCommandOutput>;
    getExecutionHistory(args: GetExecutionHistoryCommandInput, cb: (err: any, data?: GetExecutionHistoryCommandOutput) => void): void;
    getExecutionHistory(args: GetExecutionHistoryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetExecutionHistoryCommandOutput) => void): void;
    /**
     * <p>Lists the existing activities.</p>
     *          <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
     *     Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p>
     *          <note>
     *             <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p>
     *          </note>
     */
    listActivities(args: ListActivitiesCommandInput, options?: __HttpHandlerOptions): Promise<ListActivitiesCommandOutput>;
    listActivities(args: ListActivitiesCommandInput, cb: (err: any, data?: ListActivitiesCommandOutput) => void): void;
    listActivities(args: ListActivitiesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListActivitiesCommandOutput) => void): void;
    /**
     * <p>Lists the executions of a state machine that meet the filtering criteria. Results are
     *       sorted by time, with the most recent execution first.</p>
     *          <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
     *     Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p>
     *          <note>
     *             <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p>
     *          </note>
     */
    listExecutions(args: ListExecutionsCommandInput, options?: __HttpHandlerOptions): Promise<ListExecutionsCommandOutput>;
    listExecutions(args: ListExecutionsCommandInput, cb: (err: any, data?: ListExecutionsCommandOutput) => void): void;
    listExecutions(args: ListExecutionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListExecutionsCommandOutput) => void): void;
    /**
     * <p>Lists the existing state machines.</p>
     *          <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
     *     Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p>
     *          <note>
     *             <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p>
     *          </note>
     */
    listStateMachines(args: ListStateMachinesCommandInput, options?: __HttpHandlerOptions): Promise<ListStateMachinesCommandOutput>;
    listStateMachines(args: ListStateMachinesCommandInput, cb: (err: any, data?: ListStateMachinesCommandOutput) => void): void;
    listStateMachines(args: ListStateMachinesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListStateMachinesCommandOutput) => void): void;
    /**
     * <p>List tags for a given resource.</p>
     *          <p>Tags may only contain Unicode letters, digits, white space, or these symbols: <code>_ . : / = + - @</code>.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Used by activity workers and task states using the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token">callback</a> pattern
     *       to report that the task identified by the <code>taskToken</code> failed.</p>
     */
    sendTaskFailure(args: SendTaskFailureCommandInput, options?: __HttpHandlerOptions): Promise<SendTaskFailureCommandOutput>;
    sendTaskFailure(args: SendTaskFailureCommandInput, cb: (err: any, data?: SendTaskFailureCommandOutput) => void): void;
    sendTaskFailure(args: SendTaskFailureCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SendTaskFailureCommandOutput) => void): void;
    /**
     * <p>Used by activity workers and task states using the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token">callback</a> pattern to report to Step Functions that
     *       the task represented by the specified <code>taskToken</code> is still making progress. This
     *       action resets the <code>Heartbeat</code> clock. The <code>Heartbeat</code> threshold is
     *       specified in the state machine's Amazon States Language definition (<code>HeartbeatSeconds</code>). This action
     *       does not in itself create an event in the execution history. However, if the task times out,
     *       the execution history contains an <code>ActivityTimedOut</code> entry for activities, or a
     *         <code>TaskTimedOut</code> entry for for tasks using the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-sync">job run</a> or
     *         <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token">callback</a>
     *       pattern.</p>
     *          <note>
     *             <p>The <code>Timeout</code> of a task, defined in the state machine's Amazon States Language definition, is
     *         its maximum allowed duration, regardless of the number of <a>SendTaskHeartbeat</a> requests received. Use <code>HeartbeatSeconds</code> to configure the timeout interval
     *         for heartbeats.</p>
     *          </note>
     */
    sendTaskHeartbeat(args: SendTaskHeartbeatCommandInput, options?: __HttpHandlerOptions): Promise<SendTaskHeartbeatCommandOutput>;
    sendTaskHeartbeat(args: SendTaskHeartbeatCommandInput, cb: (err: any, data?: SendTaskHeartbeatCommandOutput) => void): void;
    sendTaskHeartbeat(args: SendTaskHeartbeatCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SendTaskHeartbeatCommandOutput) => void): void;
    /**
     * <p>Used by activity workers and task states using the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token">callback</a>
     *       pattern to report that the task identified by the <code>taskToken</code> completed
     *       successfully.</p>
     */
    sendTaskSuccess(args: SendTaskSuccessCommandInput, options?: __HttpHandlerOptions): Promise<SendTaskSuccessCommandOutput>;
    sendTaskSuccess(args: SendTaskSuccessCommandInput, cb: (err: any, data?: SendTaskSuccessCommandOutput) => void): void;
    sendTaskSuccess(args: SendTaskSuccessCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SendTaskSuccessCommandOutput) => void): void;
    /**
     * <p>Starts a state machine execution.</p>
     *          <note>
     *             <p>
     *                <code>StartExecution</code> is idempotent. If <code>StartExecution</code> is called with
     *         the same name and input as a running execution, the call will succeed and return the same
     *         response as the original request. If the execution is closed or if the input is different,
     *         it will return a 400 <code>ExecutionAlreadyExists</code> error. Names can be reused after 90
     *         days. </p>
     *          </note>
     */
    startExecution(args: StartExecutionCommandInput, options?: __HttpHandlerOptions): Promise<StartExecutionCommandOutput>;
    startExecution(args: StartExecutionCommandInput, cb: (err: any, data?: StartExecutionCommandOutput) => void): void;
    startExecution(args: StartExecutionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartExecutionCommandOutput) => void): void;
    /**
     * <p>Stops an execution.</p>
     */
    stopExecution(args: StopExecutionCommandInput, options?: __HttpHandlerOptions): Promise<StopExecutionCommandOutput>;
    stopExecution(args: StopExecutionCommandInput, cb: (err: any, data?: StopExecutionCommandOutput) => void): void;
    stopExecution(args: StopExecutionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopExecutionCommandOutput) => void): void;
    /**
     * <p>Add a tag to a Step Functions resource.</p>
     *          <p>An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using
     *       Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management User
     *         Guide</i>, and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_iam-tags.html">Controlling Access Using IAM
     *           Tags</a>.</p>
     *          <p>Tags may only contain Unicode letters, digits, white space, or these symbols: <code>_ . : / = + - @</code>.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Remove a tag from a Step Functions resource</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates an existing state machine by modifying its <code>definition</code> and/or
     *         <code>roleArn</code>. Running executions will continue to use the previous
     *         <code>definition</code> and <code>roleArn</code>. You must include at least one of
     *         <code>definition</code> or <code>roleArn</code> or you will receive a
     *         <code>MissingRequiredParameter</code> error.</p>
     *          <note>
     *             <p>All <code>StartExecution</code> calls within a few seconds will use the updated
     *           <code>definition</code> and <code>roleArn</code>. Executions started immediately after
     *         calling <code>UpdateStateMachine</code> may use the previous state machine
     *           <code>definition</code> and <code>roleArn</code>. </p>
     *          </note>
     */
    updateStateMachine(args: UpdateStateMachineCommandInput, options?: __HttpHandlerOptions): Promise<UpdateStateMachineCommandOutput>;
    updateStateMachine(args: UpdateStateMachineCommandInput, cb: (err: any, data?: UpdateStateMachineCommandOutput) => void): void;
    updateStateMachine(args: UpdateStateMachineCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateStateMachineCommandOutput) => void): void;
}
