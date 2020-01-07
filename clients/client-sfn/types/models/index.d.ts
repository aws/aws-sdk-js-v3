import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
/**
 * <p>Contains details about an activity that failed during an execution.</p>
 */
export interface ActivityFailedEventDetails {
    __type?: "ActivityFailedEventDetails";
    /**
     * <p>A more detailed explanation of the cause of the failure.</p>
     */
    cause?: string;
    /**
     * <p>The error code of the failure.</p>
     */
    error?: string;
}
export declare namespace ActivityFailedEventDetails {
    function isa(o: any): o is ActivityFailedEventDetails;
}
/**
 * <p>Contains details about an activity schedule failure that occurred during an
 *       execution.</p>
 */
export interface ActivityScheduleFailedEventDetails {
    __type?: "ActivityScheduleFailedEventDetails";
    /**
     * <p>A more detailed explanation of the cause of the failure.</p>
     */
    cause?: string;
    /**
     * <p>The error code of the failure.</p>
     */
    error?: string;
}
export declare namespace ActivityScheduleFailedEventDetails {
    function isa(o: any): o is ActivityScheduleFailedEventDetails;
}
/**
 * <p>Contains details about an activity scheduled during an execution.</p>
 */
export interface ActivityScheduledEventDetails {
    __type?: "ActivityScheduledEventDetails";
    /**
     * <p>The maximum allowed duration between two heartbeats for the activity task.</p>
     */
    heartbeatInSeconds?: number;
    /**
     * <p>The JSON data input to the activity task.</p>
     */
    input?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the scheduled activity.</p>
     */
    resource: string | undefined;
    /**
     * <p>The maximum allowed duration of the activity task.</p>
     */
    timeoutInSeconds?: number;
}
export declare namespace ActivityScheduledEventDetails {
    function isa(o: any): o is ActivityScheduledEventDetails;
}
/**
 * <p>Contains details about the start of an activity during an execution.</p>
 */
export interface ActivityStartedEventDetails {
    __type?: "ActivityStartedEventDetails";
    /**
     * <p>The name of the worker that the task is assigned to. These names are provided by the
     *       workers when calling <a>GetActivityTask</a>.</p>
     */
    workerName?: string;
}
export declare namespace ActivityStartedEventDetails {
    function isa(o: any): o is ActivityStartedEventDetails;
}
/**
 * <p>Contains details about an activity that successfully terminated during an
 *       execution.</p>
 */
export interface ActivitySucceededEventDetails {
    __type?: "ActivitySucceededEventDetails";
    /**
     * <p>The JSON data output by the activity task.</p>
     */
    output?: string;
}
export declare namespace ActivitySucceededEventDetails {
    function isa(o: any): o is ActivitySucceededEventDetails;
}
/**
 * <p>Contains details about an activity timeout that occurred during an execution.</p>
 */
export interface ActivityTimedOutEventDetails {
    __type?: "ActivityTimedOutEventDetails";
    /**
     * <p>A more detailed explanation of the cause of the timeout.</p>
     */
    cause?: string;
    /**
     * <p>The error code of the failure.</p>
     */
    error?: string;
}
export declare namespace ActivityTimedOutEventDetails {
    function isa(o: any): o is ActivityTimedOutEventDetails;
}
/**
 * <p></p>
 */
export interface CloudWatchLogsLogGroup {
    __type?: "CloudWatchLogsLogGroup";
    /**
     * <p>The ARN of the the CloudWatch log group to which you want your logs emitted to. The ARN must end with <code>:*</code>
     *          </p>
     */
    logGroupArn?: string;
}
export declare namespace CloudWatchLogsLogGroup {
    function isa(o: any): o is CloudWatchLogsLogGroup;
}
/**
 * <p>Contains details about an abort of an execution.</p>
 */
export interface ExecutionAbortedEventDetails {
    __type?: "ExecutionAbortedEventDetails";
    /**
     * <p>A more detailed explanation of the cause of the failure.</p>
     */
    cause?: string;
    /**
     * <p>The error code of the failure.</p>
     */
    error?: string;
}
export declare namespace ExecutionAbortedEventDetails {
    function isa(o: any): o is ExecutionAbortedEventDetails;
}
/**
 * <p>Contains details about an execution failure event.</p>
 */
export interface ExecutionFailedEventDetails {
    __type?: "ExecutionFailedEventDetails";
    /**
     * <p>A more detailed explanation of the cause of the failure.</p>
     */
    cause?: string;
    /**
     * <p>The error code of the failure.</p>
     */
    error?: string;
}
export declare namespace ExecutionFailedEventDetails {
    function isa(o: any): o is ExecutionFailedEventDetails;
}
/**
 * <p>Contains details about the start of the execution.</p>
 */
export interface ExecutionStartedEventDetails {
    __type?: "ExecutionStartedEventDetails";
    /**
     * <p>The JSON data input to the execution.</p>
     */
    input?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the IAM role used for executing AWS Lambda tasks.</p>
     */
    roleArn?: string;
}
export declare namespace ExecutionStartedEventDetails {
    function isa(o: any): o is ExecutionStartedEventDetails;
}
/**
 * <p>Contains details about the successful termination of the execution.</p>
 */
export interface ExecutionSucceededEventDetails {
    __type?: "ExecutionSucceededEventDetails";
    /**
     * <p>The JSON data output by the execution.</p>
     */
    output?: string;
}
export declare namespace ExecutionSucceededEventDetails {
    function isa(o: any): o is ExecutionSucceededEventDetails;
}
/**
 * <p>Contains details about the execution timeout that occurred during the execution.</p>
 */
export interface ExecutionTimedOutEventDetails {
    __type?: "ExecutionTimedOutEventDetails";
    /**
     * <p>A more detailed explanation of the cause of the timeout.</p>
     */
    cause?: string;
    /**
     * <p>The error code of the failure.</p>
     */
    error?: string;
}
export declare namespace ExecutionTimedOutEventDetails {
    function isa(o: any): o is ExecutionTimedOutEventDetails;
}
/**
 * <p>Contains details about the events of an execution.</p>
 */
export interface HistoryEvent {
    __type?: "HistoryEvent";
    /**
     * <p>Contains details about an activity that failed during an execution.</p>
     */
    activityFailedEventDetails?: ActivityFailedEventDetails;
    /**
     * <p>Contains details about an activity schedule event that failed during an execution.</p>
     */
    activityScheduleFailedEventDetails?: ActivityScheduleFailedEventDetails;
    /**
     * <p>Contains details about an activity scheduled during an execution.</p>
     */
    activityScheduledEventDetails?: ActivityScheduledEventDetails;
    /**
     * <p>Contains details about the start of an activity during an execution.</p>
     */
    activityStartedEventDetails?: ActivityStartedEventDetails;
    /**
     * <p>Contains details about an activity that successfully terminated during an
     *       execution.</p>
     */
    activitySucceededEventDetails?: ActivitySucceededEventDetails;
    /**
     * <p>Contains details about an activity timeout that occurred during an execution.</p>
     */
    activityTimedOutEventDetails?: ActivityTimedOutEventDetails;
    /**
     * <p>Contains details about an abort of an execution.</p>
     */
    executionAbortedEventDetails?: ExecutionAbortedEventDetails;
    /**
     * <p>Contains details about an execution failure event.</p>
     */
    executionFailedEventDetails?: ExecutionFailedEventDetails;
    /**
     * <p>Contains details about the start of the execution.</p>
     */
    executionStartedEventDetails?: ExecutionStartedEventDetails;
    /**
     * <p>Contains details about the successful termination of the execution.</p>
     */
    executionSucceededEventDetails?: ExecutionSucceededEventDetails;
    /**
     * <p>Contains details about the execution timeout that occurred during the execution.</p>
     */
    executionTimedOutEventDetails?: ExecutionTimedOutEventDetails;
    /**
     * <p>The id of the event. Events are numbered sequentially, starting at one.</p>
     */
    id: number | undefined;
    /**
     * <p>Contains details about a lambda function that failed during an execution.</p>
     */
    lambdaFunctionFailedEventDetails?: LambdaFunctionFailedEventDetails;
    /**
     * <p>Contains details about a failed lambda function schedule event that occurred during an
     *       execution.</p>
     */
    lambdaFunctionScheduleFailedEventDetails?: LambdaFunctionScheduleFailedEventDetails;
    /**
     * <p>Contains details about a lambda function scheduled during an execution.</p>
     */
    lambdaFunctionScheduledEventDetails?: LambdaFunctionScheduledEventDetails;
    /**
     * <p>Contains details about a lambda function that failed to start during an execution.</p>
     */
    lambdaFunctionStartFailedEventDetails?: LambdaFunctionStartFailedEventDetails;
    /**
     * <p>Contains details about a lambda function that terminated successfully during an
     *       execution.</p>
     */
    lambdaFunctionSucceededEventDetails?: LambdaFunctionSucceededEventDetails;
    /**
     * <p>Contains details about a lambda function timeout that occurred during an execution.</p>
     */
    lambdaFunctionTimedOutEventDetails?: LambdaFunctionTimedOutEventDetails;
    /**
     * <p>Contains details about an iteration of a Map state that was aborted.</p>
     */
    mapIterationAbortedEventDetails?: MapIterationEventDetails;
    /**
     * <p>Contains details about an iteration of a Map state that failed.</p>
     */
    mapIterationFailedEventDetails?: MapIterationEventDetails;
    /**
     * <p>Contains details about an iteration of a Map state that was started.</p>
     */
    mapIterationStartedEventDetails?: MapIterationEventDetails;
    /**
     * <p>Contains details about an iteration of a Map state that succeeded.</p>
     */
    mapIterationSucceededEventDetails?: MapIterationEventDetails;
    /**
     * <p>Contains details about Map state that was started.</p>
     */
    mapStateStartedEventDetails?: MapStateStartedEventDetails;
    /**
     * <p>The id of the previous event.</p>
     */
    previousEventId?: number;
    /**
     * <p>Contains details about a state entered during an execution.</p>
     */
    stateEnteredEventDetails?: StateEnteredEventDetails;
    /**
     * <p>Contains details about an exit from a state during an execution.</p>
     */
    stateExitedEventDetails?: StateExitedEventDetails;
    /**
     * <p>Contains details about the failure of a task.</p>
     */
    taskFailedEventDetails?: TaskFailedEventDetails;
    /**
     * <p>Contains details about a task that was scheduled.</p>
     */
    taskScheduledEventDetails?: TaskScheduledEventDetails;
    /**
     * <p>Contains details about a task that failed to start.</p>
     */
    taskStartFailedEventDetails?: TaskStartFailedEventDetails;
    /**
     * <p>Contains details about a task that was started.</p>
     */
    taskStartedEventDetails?: TaskStartedEventDetails;
    /**
     * <p>Contains details about a task that where the submit failed.</p>
     */
    taskSubmitFailedEventDetails?: TaskSubmitFailedEventDetails;
    /**
     * <p>Contains details about a submitted task.</p>
     */
    taskSubmittedEventDetails?: TaskSubmittedEventDetails;
    /**
     * <p>Contains details about a task that succeeded.</p>
     */
    taskSucceededEventDetails?: TaskSucceededEventDetails;
    /**
     * <p>Contains details about a task that timed out.</p>
     */
    taskTimedOutEventDetails?: TaskTimedOutEventDetails;
    /**
     * <p>The date and time the event occurred.</p>
     */
    timestamp: Date | undefined;
    /**
     * <p>The type of the event.</p>
     */
    type: HistoryEventType | string | undefined;
}
export declare namespace HistoryEvent {
    function isa(o: any): o is HistoryEvent;
}
export declare type HistoryEventType = "ActivityFailed" | "ActivityScheduleFailed" | "ActivityScheduled" | "ActivityStarted" | "ActivitySucceeded" | "ActivityTimedOut" | "ChoiceStateEntered" | "ChoiceStateExited" | "ExecutionAborted" | "ExecutionFailed" | "ExecutionStarted" | "ExecutionSucceeded" | "ExecutionTimedOut" | "FailStateEntered" | "LambdaFunctionFailed" | "LambdaFunctionScheduleFailed" | "LambdaFunctionScheduled" | "LambdaFunctionStartFailed" | "LambdaFunctionStarted" | "LambdaFunctionSucceeded" | "LambdaFunctionTimedOut" | "MapIterationAborted" | "MapIterationFailed" | "MapIterationStarted" | "MapIterationSucceeded" | "MapStateAborted" | "MapStateEntered" | "MapStateExited" | "MapStateFailed" | "MapStateStarted" | "MapStateSucceeded" | "ParallelStateAborted" | "ParallelStateEntered" | "ParallelStateExited" | "ParallelStateFailed" | "ParallelStateStarted" | "ParallelStateSucceeded" | "PassStateEntered" | "PassStateExited" | "SucceedStateEntered" | "SucceedStateExited" | "TaskFailed" | "TaskScheduled" | "TaskStartFailed" | "TaskStarted" | "TaskStateAborted" | "TaskStateEntered" | "TaskStateExited" | "TaskSubmitFailed" | "TaskSubmitted" | "TaskSucceeded" | "TaskTimedOut" | "WaitStateAborted" | "WaitStateEntered" | "WaitStateExited";
/**
 * <p>Contains details about a lambda function that failed during an execution.</p>
 */
export interface LambdaFunctionFailedEventDetails {
    __type?: "LambdaFunctionFailedEventDetails";
    /**
     * <p>A more detailed explanation of the cause of the failure.</p>
     */
    cause?: string;
    /**
     * <p>The error code of the failure.</p>
     */
    error?: string;
}
export declare namespace LambdaFunctionFailedEventDetails {
    function isa(o: any): o is LambdaFunctionFailedEventDetails;
}
/**
 * <p>Contains details about a failed lambda function schedule event that occurred during an
 *       execution.</p>
 */
export interface LambdaFunctionScheduleFailedEventDetails {
    __type?: "LambdaFunctionScheduleFailedEventDetails";
    /**
     * <p>A more detailed explanation of the cause of the failure.</p>
     */
    cause?: string;
    /**
     * <p>The error code of the failure.</p>
     */
    error?: string;
}
export declare namespace LambdaFunctionScheduleFailedEventDetails {
    function isa(o: any): o is LambdaFunctionScheduleFailedEventDetails;
}
/**
 * <p>Contains details about a lambda function scheduled during an execution.</p>
 */
export interface LambdaFunctionScheduledEventDetails {
    __type?: "LambdaFunctionScheduledEventDetails";
    /**
     * <p>The JSON data input to the lambda function.</p>
     */
    input?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the scheduled lambda function.</p>
     */
    resource: string | undefined;
    /**
     * <p>The maximum allowed duration of the lambda function.</p>
     */
    timeoutInSeconds?: number;
}
export declare namespace LambdaFunctionScheduledEventDetails {
    function isa(o: any): o is LambdaFunctionScheduledEventDetails;
}
/**
 * <p>Contains details about a lambda function that failed to start during an execution.</p>
 */
export interface LambdaFunctionStartFailedEventDetails {
    __type?: "LambdaFunctionStartFailedEventDetails";
    /**
     * <p>A more detailed explanation of the cause of the failure.</p>
     */
    cause?: string;
    /**
     * <p>The error code of the failure.</p>
     */
    error?: string;
}
export declare namespace LambdaFunctionStartFailedEventDetails {
    function isa(o: any): o is LambdaFunctionStartFailedEventDetails;
}
/**
 * <p>Contains details about a lambda function that successfully terminated during an
 *       execution.</p>
 */
export interface LambdaFunctionSucceededEventDetails {
    __type?: "LambdaFunctionSucceededEventDetails";
    /**
     * <p>The JSON data output by the lambda function.</p>
     */
    output?: string;
}
export declare namespace LambdaFunctionSucceededEventDetails {
    function isa(o: any): o is LambdaFunctionSucceededEventDetails;
}
/**
 * <p>Contains details about a lambda function timeout that occurred during an execution.</p>
 */
export interface LambdaFunctionTimedOutEventDetails {
    __type?: "LambdaFunctionTimedOutEventDetails";
    /**
     * <p>A more detailed explanation of the cause of the timeout.</p>
     */
    cause?: string;
    /**
     * <p>The error code of the failure.</p>
     */
    error?: string;
}
export declare namespace LambdaFunctionTimedOutEventDetails {
    function isa(o: any): o is LambdaFunctionTimedOutEventDetails;
}
/**
 * <p></p>
 */
export interface LogDestination {
    __type?: "LogDestination";
    /**
     * <p>An object describing a CloudWatch log group. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loggroup.html">AWS::Logs::LogGroup</a> in the AWS CloudFormation User Guide.</p>
     */
    cloudWatchLogsLogGroup?: CloudWatchLogsLogGroup;
}
export declare namespace LogDestination {
    function isa(o: any): o is LogDestination;
}
export declare type LogLevel = "ALL" | "ERROR" | "FATAL" | "OFF";
/**
 * <p></p>
 */
export interface LoggingConfiguration {
    __type?: "LoggingConfiguration";
    /**
     * <p>An object that describes where your execution history events will be logged. Limited to
     *       size 1. Required, if your log level is not set to <code>OFF</code>.</p>
     */
    destinations?: Array<LogDestination>;
    /**
     * <p>Determines whether execution history data is included in your log. When set to
     *         <code>FALSE</code>, data is excluded.</p>
     */
    includeExecutionData?: boolean;
    /**
     * <p>Defines which category of execution history events are logged.</p>
     */
    level?: LogLevel | string;
}
export declare namespace LoggingConfiguration {
    function isa(o: any): o is LoggingConfiguration;
}
/**
 * <p>Contains details about an iteration of a Map state.</p>
 */
export interface MapIterationEventDetails {
    __type?: "MapIterationEventDetails";
    /**
     * <p>The index of the array belonging to the Map state iteration.</p>
     */
    index?: number;
    /**
     * <p>The name of the iteration’s parent Map state.</p>
     */
    name?: string;
}
export declare namespace MapIterationEventDetails {
    function isa(o: any): o is MapIterationEventDetails;
}
/**
 * <p>Details about a Map state that was started.</p>
 */
export interface MapStateStartedEventDetails {
    __type?: "MapStateStartedEventDetails";
    /**
     * <p>The size of the array for Map state iterations.</p>
     */
    length?: number;
}
export declare namespace MapStateStartedEventDetails {
    function isa(o: any): o is MapStateStartedEventDetails;
}
/**
 * <p>Contains details about a state entered during an execution.</p>
 */
export interface StateEnteredEventDetails {
    __type?: "StateEnteredEventDetails";
    /**
     * <p>The string that contains the JSON input data for the state.</p>
     */
    input?: string;
    /**
     * <p>The name of the state.</p>
     */
    name: string | undefined;
}
export declare namespace StateEnteredEventDetails {
    function isa(o: any): o is StateEnteredEventDetails;
}
/**
 * <p>Contains details about an exit from a state during an execution.</p>
 */
export interface StateExitedEventDetails {
    __type?: "StateExitedEventDetails";
    /**
     * <p>The name of the state.</p>
     *          <p>A name must <i>not</i> contain:</p>
     *          <ul>
     *             <li>
     *                <p>white space</p>
     *             </li>
     *             <li>
     *                <p>brackets <code>< > { } [ ]</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>wildcard characters <code>? *</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>special characters <code>" # % \ ^ | ~ ` $ & , ; : /</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>control characters (<code>U+0000-001F</code>, <code>U+007F-009F</code>)</p>
     *             </li>
     *          </ul>
     */
    name: string | undefined;
    /**
     * <p>The JSON output data of the state.</p>
     */
    output?: string;
}
export declare namespace StateExitedEventDetails {
    function isa(o: any): o is StateExitedEventDetails;
}
export declare type StateMachineType = "EXPRESS" | "STANDARD";
/**
 * <p>Contains details about a task failure event.</p>
 */
export interface TaskFailedEventDetails {
    __type?: "TaskFailedEventDetails";
    /**
     * <p>A more detailed explanation of the cause of the failure.</p>
     */
    cause?: string;
    /**
     * <p>The error code of the failure.</p>
     */
    error?: string;
    /**
     * <p>The service name of the resource in a task state.</p>
     */
    resource: string | undefined;
    /**
     * <p>The action of the resource called by a task state.</p>
     */
    resourceType: string | undefined;
}
export declare namespace TaskFailedEventDetails {
    function isa(o: any): o is TaskFailedEventDetails;
}
/**
 * <p>Contains details about a task scheduled during an execution.</p>
 */
export interface TaskScheduledEventDetails {
    __type?: "TaskScheduledEventDetails";
    /**
     * <p>The JSON data passed to the resource referenced in a task state.</p>
     */
    parameters: string | undefined;
    /**
     * <p>The region of the scheduled task</p>
     */
    region: string | undefined;
    /**
     * <p>The service name of the resource in a task state.</p>
     */
    resource: string | undefined;
    /**
     * <p>The action of the resource called by a task state.</p>
     */
    resourceType: string | undefined;
    /**
     * <p>The maximum allowed duration of the task.</p>
     */
    timeoutInSeconds?: number;
}
export declare namespace TaskScheduledEventDetails {
    function isa(o: any): o is TaskScheduledEventDetails;
}
/**
 * <p>Contains details about a task that failed to start during an execution.</p>
 */
export interface TaskStartFailedEventDetails {
    __type?: "TaskStartFailedEventDetails";
    /**
     * <p>A more detailed explanation of the cause of the failure.</p>
     */
    cause?: string;
    /**
     * <p>The error code of the failure.</p>
     */
    error?: string;
    /**
     * <p>The service name of the resource in a task state.</p>
     */
    resource: string | undefined;
    /**
     * <p>The action of the resource called by a task state.</p>
     */
    resourceType: string | undefined;
}
export declare namespace TaskStartFailedEventDetails {
    function isa(o: any): o is TaskStartFailedEventDetails;
}
/**
 * <p>Contains details about the start of a task during an execution.</p>
 */
export interface TaskStartedEventDetails {
    __type?: "TaskStartedEventDetails";
    /**
     * <p>The service name of the resource in a task state.</p>
     */
    resource: string | undefined;
    /**
     * <p>The action of the resource called by a task state.</p>
     */
    resourceType: string | undefined;
}
export declare namespace TaskStartedEventDetails {
    function isa(o: any): o is TaskStartedEventDetails;
}
/**
 * <p>Contains details about a task that failed to submit during an execution.</p>
 */
export interface TaskSubmitFailedEventDetails {
    __type?: "TaskSubmitFailedEventDetails";
    /**
     * <p>A more detailed explanation of the cause of the failure.</p>
     */
    cause?: string;
    /**
     * <p>The error code of the failure.</p>
     */
    error?: string;
    /**
     * <p>The service name of the resource in a task state.</p>
     */
    resource: string | undefined;
    /**
     * <p>The action of the resource called by a task state.</p>
     */
    resourceType: string | undefined;
}
export declare namespace TaskSubmitFailedEventDetails {
    function isa(o: any): o is TaskSubmitFailedEventDetails;
}
/**
 * <p>Contains details about a task submitted to a resource .</p>
 */
export interface TaskSubmittedEventDetails {
    __type?: "TaskSubmittedEventDetails";
    /**
     * <p>The response from a resource when a task has started.</p>
     */
    output?: string;
    /**
     * <p>The service name of the resource in a task state.</p>
     */
    resource: string | undefined;
    /**
     * <p>The action of the resource called by a task state.</p>
     */
    resourceType: string | undefined;
}
export declare namespace TaskSubmittedEventDetails {
    function isa(o: any): o is TaskSubmittedEventDetails;
}
/**
 * <p>Contains details about the successful completion of a task state.</p>
 */
export interface TaskSucceededEventDetails {
    __type?: "TaskSucceededEventDetails";
    /**
     * <p>The full JSON response from a resource when a task has succeeded. This response becomes
     *       the output of the related task.</p>
     */
    output?: string;
    /**
     * <p>The service name of the resource in a task state.</p>
     */
    resource: string | undefined;
    /**
     * <p>The action of the resource called by a task state.</p>
     */
    resourceType: string | undefined;
}
export declare namespace TaskSucceededEventDetails {
    function isa(o: any): o is TaskSucceededEventDetails;
}
/**
 * <p>Contains details about a resource timeout that occurred during an execution.</p>
 */
export interface TaskTimedOutEventDetails {
    __type?: "TaskTimedOutEventDetails";
    /**
     * <p>A more detailed explanation of the cause of the failure.</p>
     */
    cause?: string;
    /**
     * <p>The error code of the failure.</p>
     */
    error?: string;
    /**
     * <p>The service name of the resource in a task state.</p>
     */
    resource: string | undefined;
    /**
     * <p>The action of the resource called by a task state.</p>
     */
    resourceType: string | undefined;
}
export declare namespace TaskTimedOutEventDetails {
    function isa(o: any): o is TaskTimedOutEventDetails;
}
/**
 * <p>The specified activity does not exist.</p>
 */
export interface ActivityDoesNotExist extends __SmithyException, $MetadataBearer {
    name: "ActivityDoesNotExist";
    $fault: "client";
    message?: string;
}
export declare namespace ActivityDoesNotExist {
    function isa(o: any): o is ActivityDoesNotExist;
}
/**
 * <p>The maximum number of activities has been reached. Existing activities must be deleted
 *       before a new activity can be created.</p>
 */
export interface ActivityLimitExceeded extends __SmithyException, $MetadataBearer {
    name: "ActivityLimitExceeded";
    $fault: "client";
    message?: string;
}
export declare namespace ActivityLimitExceeded {
    function isa(o: any): o is ActivityLimitExceeded;
}
/**
 * <p>Contains details about an activity.</p>
 */
export interface ActivityListItem {
    __type?: "ActivityListItem";
    /**
     * <p>The Amazon Resource Name (ARN) that identifies the activity.</p>
     */
    activityArn: string | undefined;
    /**
     * <p>The date the activity is created.</p>
     */
    creationDate: Date | undefined;
    /**
     * <p>The name of the activity.</p>
     *          <p>A name must <i>not</i> contain:</p>
     *          <ul>
     *             <li>
     *                <p>white space</p>
     *             </li>
     *             <li>
     *                <p>brackets <code>< > { } [ ]</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>wildcard characters <code>? *</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>special characters <code>" # % \ ^ | ~ ` $ & , ; : /</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>control characters (<code>U+0000-001F</code>, <code>U+007F-009F</code>)</p>
     *             </li>
     *          </ul>
     */
    name: string | undefined;
}
export declare namespace ActivityListItem {
    function isa(o: any): o is ActivityListItem;
}
/**
 * <p>The maximum number of workers concurrently polling for activity tasks has been
 *       reached.</p>
 */
export interface ActivityWorkerLimitExceeded extends __SmithyException, $MetadataBearer {
    name: "ActivityWorkerLimitExceeded";
    $fault: "client";
    message?: string;
}
export declare namespace ActivityWorkerLimitExceeded {
    function isa(o: any): o is ActivityWorkerLimitExceeded;
}
export interface CreateActivityInput {
    __type?: "CreateActivityInput";
    /**
     * <p>The name of the activity to create. This name must be unique for your AWS account and region for 90 days. For more information,
     *     see <a href="https://docs.aws.amazon.com/step-functions/latest/dg/limits.html#service-limits-state-machine-executions">
     *     Limits Related to State Machine Executions</a> in the <i>AWS Step Functions Developer Guide</i>.</p>
     *          <p>A name must <i>not</i> contain:</p>
     *          <ul>
     *             <li>
     *                <p>white space</p>
     *             </li>
     *             <li>
     *                <p>brackets <code>< > { } [ ]</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>wildcard characters <code>? *</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>special characters <code>" # % \ ^ | ~ ` $ & , ; : /</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>control characters (<code>U+0000-001F</code>, <code>U+007F-009F</code>)</p>
     *             </li>
     *          </ul>
     */
    name: string | undefined;
    /**
     * <p>The list of tags to add to a resource.</p>
     *          <p>An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using
     *       Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management User
     *         Guide</i>, and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_iam-tags.html">Controlling Access Using IAM
     *           Tags</a>.</p>
     *          <p>Tags may only contain Unicode letters, digits, white space, or these symbols: <code>_ . : / = + - @</code>.</p>
     */
    tags?: Array<Tag>;
}
export declare namespace CreateActivityInput {
    function isa(o: any): o is CreateActivityInput;
}
export interface CreateActivityOutput {
    __type?: "CreateActivityOutput";
    /**
     * <p>The Amazon Resource Name (ARN) that identifies the created activity.</p>
     */
    activityArn: string | undefined;
    /**
     * <p>The date the activity is created.</p>
     */
    creationDate: Date | undefined;
}
export declare namespace CreateActivityOutput {
    function isa(o: any): o is CreateActivityOutput;
}
export interface CreateStateMachineInput {
    __type?: "CreateStateMachineInput";
    /**
     * <p>The Amazon States Language definition of the state machine. See <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html">Amazon States Language</a>.</p>
     */
    definition: string | undefined;
    /**
     * <p>Defines what execution history events are logged and where they are logged.</p>
     */
    loggingConfiguration?: LoggingConfiguration;
    /**
     * <p>The name of the state machine. </p>
     *          <p>A name must <i>not</i> contain:</p>
     *          <ul>
     *             <li>
     *                <p>white space</p>
     *             </li>
     *             <li>
     *                <p>brackets <code>< > { } [ ]</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>wildcard characters <code>? *</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>special characters <code>" # % \ ^ | ~ ` $ & , ; : /</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>control characters (<code>U+0000-001F</code>, <code>U+007F-009F</code>)</p>
     *             </li>
     *          </ul>
     */
    name: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) of the IAM role to use for this state machine.</p>
     */
    roleArn: string | undefined;
    /**
     * <p>Tags to be added when creating a state machine.</p>
     *          <p>An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using
     *       Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management User
     *         Guide</i>, and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_iam-tags.html">Controlling Access Using IAM
     *           Tags</a>.</p>
     *          <p>Tags may only contain Unicode letters, digits, white space, or these symbols: <code>_ . : / = + - @</code>.</p>
     */
    tags?: Array<Tag>;
    /**
     * <p>Determines whether a Standard or Express state machine is created. If not set, Standard is created.</p>
     */
    type?: StateMachineType | string;
}
export declare namespace CreateStateMachineInput {
    function isa(o: any): o is CreateStateMachineInput;
}
export interface CreateStateMachineOutput {
    __type?: "CreateStateMachineOutput";
    /**
     * <p>The date the state machine is created.</p>
     */
    creationDate: Date | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) that identifies the created state machine.</p>
     */
    stateMachineArn: string | undefined;
}
export declare namespace CreateStateMachineOutput {
    function isa(o: any): o is CreateStateMachineOutput;
}
export interface DeleteActivityInput {
    __type?: "DeleteActivityInput";
    /**
     * <p>The Amazon Resource Name (ARN) of the activity to delete.</p>
     */
    activityArn: string | undefined;
}
export declare namespace DeleteActivityInput {
    function isa(o: any): o is DeleteActivityInput;
}
export interface DeleteActivityOutput {
    __type?: "DeleteActivityOutput";
}
export declare namespace DeleteActivityOutput {
    function isa(o: any): o is DeleteActivityOutput;
}
export interface DeleteStateMachineInput {
    __type?: "DeleteStateMachineInput";
    /**
     * <p>The Amazon Resource Name (ARN) of the state machine to delete.</p>
     */
    stateMachineArn: string | undefined;
}
export declare namespace DeleteStateMachineInput {
    function isa(o: any): o is DeleteStateMachineInput;
}
export interface DeleteStateMachineOutput {
    __type?: "DeleteStateMachineOutput";
}
export declare namespace DeleteStateMachineOutput {
    function isa(o: any): o is DeleteStateMachineOutput;
}
export interface DescribeActivityInput {
    __type?: "DescribeActivityInput";
    /**
     * <p>The Amazon Resource Name (ARN) of the activity to describe.</p>
     */
    activityArn: string | undefined;
}
export declare namespace DescribeActivityInput {
    function isa(o: any): o is DescribeActivityInput;
}
export interface DescribeActivityOutput {
    __type?: "DescribeActivityOutput";
    /**
     * <p>The Amazon Resource Name (ARN) that identifies the activity.</p>
     */
    activityArn: string | undefined;
    /**
     * <p>The date the activity is created.</p>
     */
    creationDate: Date | undefined;
    /**
     * <p>The name of the activity.</p>
     *          <p>A name must <i>not</i> contain:</p>
     *          <ul>
     *             <li>
     *                <p>white space</p>
     *             </li>
     *             <li>
     *                <p>brackets <code>< > { } [ ]</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>wildcard characters <code>? *</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>special characters <code>" # % \ ^ | ~ ` $ & , ; : /</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>control characters (<code>U+0000-001F</code>, <code>U+007F-009F</code>)</p>
     *             </li>
     *          </ul>
     */
    name: string | undefined;
}
export declare namespace DescribeActivityOutput {
    function isa(o: any): o is DescribeActivityOutput;
}
export interface DescribeExecutionInput {
    __type?: "DescribeExecutionInput";
    /**
     * <p>The Amazon Resource Name (ARN) of the execution to describe.</p>
     */
    executionArn: string | undefined;
}
export declare namespace DescribeExecutionInput {
    function isa(o: any): o is DescribeExecutionInput;
}
export interface DescribeExecutionOutput {
    __type?: "DescribeExecutionOutput";
    /**
     * <p>The Amazon Resource Name (ARN) that identifies the execution.</p>
     */
    executionArn: string | undefined;
    /**
     * <p>The string that contains the JSON input data of the execution.</p>
     */
    input: string | undefined;
    /**
     * <p>The name of the execution.</p>
     *          <p>A name must <i>not</i> contain:</p>
     *          <ul>
     *             <li>
     *                <p>white space</p>
     *             </li>
     *             <li>
     *                <p>brackets <code>< > { } [ ]</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>wildcard characters <code>? *</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>special characters <code>" # % \ ^ | ~ ` $ & , ; : /</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>control characters (<code>U+0000-001F</code>, <code>U+007F-009F</code>)</p>
     *             </li>
     *          </ul>
     */
    name?: string;
    /**
     * <p>The JSON output data of the execution.</p>
     *          <note>
     *             <p>This field is set only if the execution succeeds. If the execution fails, this field is
     *         null.</p>
     *          </note>
     */
    output?: string;
    /**
     * <p>The date the execution is started.</p>
     */
    startDate: Date | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) of the executed stated machine.</p>
     */
    stateMachineArn: string | undefined;
    /**
     * <p>The current status of the execution.</p>
     */
    status: ExecutionStatus | string | undefined;
    /**
     * <p>If the execution has already ended, the date the execution stopped.</p>
     */
    stopDate?: Date;
}
export declare namespace DescribeExecutionOutput {
    function isa(o: any): o is DescribeExecutionOutput;
}
export interface DescribeStateMachineForExecutionInput {
    __type?: "DescribeStateMachineForExecutionInput";
    /**
     * <p>The Amazon Resource Name (ARN) of the execution you want state machine information for.</p>
     */
    executionArn: string | undefined;
}
export declare namespace DescribeStateMachineForExecutionInput {
    function isa(o: any): o is DescribeStateMachineForExecutionInput;
}
export interface DescribeStateMachineForExecutionOutput {
    __type?: "DescribeStateMachineForExecutionOutput";
    /**
     * <p>The Amazon States Language definition of the state machine. See <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html">Amazon States Language</a>.</p>
     */
    definition: string | undefined;
    /**
     * <p>The name of the state machine associated with the execution.</p>
     */
    name: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) of the IAM role of the State Machine for the execution. </p>
     */
    roleArn: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) of the state machine associated with the execution.</p>
     */
    stateMachineArn: string | undefined;
    /**
     * <p>The date and time the state machine associated with an execution was updated. For a newly
     *       created state machine, this is the creation date.</p>
     */
    updateDate: Date | undefined;
}
export declare namespace DescribeStateMachineForExecutionOutput {
    function isa(o: any): o is DescribeStateMachineForExecutionOutput;
}
export interface DescribeStateMachineInput {
    __type?: "DescribeStateMachineInput";
    /**
     * <p>The Amazon Resource Name (ARN) of the state machine to describe.</p>
     */
    stateMachineArn: string | undefined;
}
export declare namespace DescribeStateMachineInput {
    function isa(o: any): o is DescribeStateMachineInput;
}
export interface DescribeStateMachineOutput {
    __type?: "DescribeStateMachineOutput";
    /**
     * <p>The date the state machine is created.</p>
     */
    creationDate: Date | undefined;
    /**
     * <p>The Amazon States Language definition of the state machine. See <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html">Amazon States Language</a>.</p>
     */
    definition: string | undefined;
    /**
     * <p></p>
     */
    loggingConfiguration?: LoggingConfiguration;
    /**
     * <p>The name of the state machine.</p>
     *          <p>A name must <i>not</i> contain:</p>
     *          <ul>
     *             <li>
     *                <p>white space</p>
     *             </li>
     *             <li>
     *                <p>brackets <code>< > { } [ ]</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>wildcard characters <code>? *</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>special characters <code>" # % \ ^ | ~ ` $ & , ; : /</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>control characters (<code>U+0000-001F</code>, <code>U+007F-009F</code>)</p>
     *             </li>
     *          </ul>
     */
    name: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) of the IAM role used when creating this state machine. (The IAM role
     *       maintains security by granting Step Functions access to AWS resources.)</p>
     */
    roleArn: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) that identifies the state machine.</p>
     */
    stateMachineArn: string | undefined;
    /**
     * <p>The current status of the state machine.</p>
     */
    status?: StateMachineStatus | string;
    /**
     * <p></p>
     */
    type: StateMachineType | string | undefined;
}
export declare namespace DescribeStateMachineOutput {
    function isa(o: any): o is DescribeStateMachineOutput;
}
/**
 * <p>The execution has the same <code>name</code> as another execution (but a different
 *         <code>input</code>).</p>
 *          <note>
 *             <p>Executions with the same <code>name</code> and <code>input</code> are considered
 *         idempotent.</p>
 *          </note>
 */
export interface ExecutionAlreadyExists extends __SmithyException, $MetadataBearer {
    name: "ExecutionAlreadyExists";
    $fault: "client";
    message?: string;
}
export declare namespace ExecutionAlreadyExists {
    function isa(o: any): o is ExecutionAlreadyExists;
}
/**
 * <p>The specified execution does not exist.</p>
 */
export interface ExecutionDoesNotExist extends __SmithyException, $MetadataBearer {
    name: "ExecutionDoesNotExist";
    $fault: "client";
    message?: string;
}
export declare namespace ExecutionDoesNotExist {
    function isa(o: any): o is ExecutionDoesNotExist;
}
/**
 * <p>The maximum number of running executions has been reached. Running executions must end or
 *       be stopped before a new execution can be started.</p>
 */
export interface ExecutionLimitExceeded extends __SmithyException, $MetadataBearer {
    name: "ExecutionLimitExceeded";
    $fault: "client";
    message?: string;
}
export declare namespace ExecutionLimitExceeded {
    function isa(o: any): o is ExecutionLimitExceeded;
}
/**
 * <p>Contains details about an execution.</p>
 */
export interface ExecutionListItem {
    __type?: "ExecutionListItem";
    /**
     * <p>The Amazon Resource Name (ARN) that identifies the execution.</p>
     */
    executionArn: string | undefined;
    /**
     * <p>The name of the execution.</p>
     *          <p>A name must <i>not</i> contain:</p>
     *          <ul>
     *             <li>
     *                <p>white space</p>
     *             </li>
     *             <li>
     *                <p>brackets <code>< > { } [ ]</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>wildcard characters <code>? *</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>special characters <code>" # % \ ^ | ~ ` $ & , ; : /</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>control characters (<code>U+0000-001F</code>, <code>U+007F-009F</code>)</p>
     *             </li>
     *          </ul>
     */
    name: string | undefined;
    /**
     * <p>The date the execution started.</p>
     */
    startDate: Date | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) of the executed state machine.</p>
     */
    stateMachineArn: string | undefined;
    /**
     * <p>The current status of the execution.</p>
     */
    status: ExecutionStatus | string | undefined;
    /**
     * <p>If the execution already ended, the date the execution stopped.</p>
     */
    stopDate?: Date;
}
export declare namespace ExecutionListItem {
    function isa(o: any): o is ExecutionListItem;
}
export declare type ExecutionStatus = "ABORTED" | "FAILED" | "RUNNING" | "SUCCEEDED" | "TIMED_OUT";
export interface GetActivityTaskInput {
    __type?: "GetActivityTaskInput";
    /**
     * <p>The Amazon Resource Name (ARN) of the activity to retrieve tasks from (assigned when you create the task
     *       using <a>CreateActivity</a>.)</p>
     */
    activityArn: string | undefined;
    /**
     * <p>You can provide an arbitrary name in order to identify the worker that the task is
     *       assigned to. This name is used when it is logged in the execution history.</p>
     */
    workerName?: string;
}
export declare namespace GetActivityTaskInput {
    function isa(o: any): o is GetActivityTaskInput;
}
export interface GetActivityTaskOutput {
    __type?: "GetActivityTaskOutput";
    /**
     * <p>The string that contains the JSON input data for the task.</p>
     */
    input?: string;
    /**
     * <p>A token that identifies the scheduled task. This token must be copied and included in
     *       subsequent calls to <a>SendTaskHeartbeat</a>, <a>SendTaskSuccess</a> or
     *         <a>SendTaskFailure</a> in order to report the progress or completion of the
     *       task.</p>
     */
    taskToken?: string;
}
export declare namespace GetActivityTaskOutput {
    function isa(o: any): o is GetActivityTaskOutput;
}
export interface GetExecutionHistoryInput {
    __type?: "GetExecutionHistoryInput";
    /**
     * <p>The Amazon Resource Name (ARN) of the execution.</p>
     */
    executionArn: string | undefined;
    /**
     * <p>The maximum number of results that are returned per call. You can use <code>nextToken</code> to obtain further pages of results.
     *     The default is 100 and the maximum allowed page size is 1000. A value of 0 uses the default.</p>
     *          <p>This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.</p>
     */
    maxResults?: number;
    /**
     * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
     *     Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p>
     */
    nextToken?: string;
    /**
     * <p>Lists events in descending order of their <code>timeStamp</code>.</p>
     */
    reverseOrder?: boolean;
}
export declare namespace GetExecutionHistoryInput {
    function isa(o: any): o is GetExecutionHistoryInput;
}
export interface GetExecutionHistoryOutput {
    __type?: "GetExecutionHistoryOutput";
    /**
     * <p>The list of events that occurred in the execution.</p>
     */
    events: Array<HistoryEvent> | undefined;
    /**
     * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
     *     Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p>
     */
    nextToken?: string;
}
export declare namespace GetExecutionHistoryOutput {
    function isa(o: any): o is GetExecutionHistoryOutput;
}
/**
 * <p>The provided Amazon Resource Name (ARN) is invalid.</p>
 */
export interface InvalidArn extends __SmithyException, $MetadataBearer {
    name: "InvalidArn";
    $fault: "client";
    message?: string;
}
export declare namespace InvalidArn {
    function isa(o: any): o is InvalidArn;
}
/**
 * <p>The provided Amazon States Language definition is invalid.</p>
 */
export interface InvalidDefinition extends __SmithyException, $MetadataBearer {
    name: "InvalidDefinition";
    $fault: "client";
    message?: string;
}
export declare namespace InvalidDefinition {
    function isa(o: any): o is InvalidDefinition;
}
/**
 * <p>The provided JSON input data is invalid.</p>
 */
export interface InvalidExecutionInput extends __SmithyException, $MetadataBearer {
    name: "InvalidExecutionInput";
    $fault: "client";
    message?: string;
}
export declare namespace InvalidExecutionInput {
    function isa(o: any): o is InvalidExecutionInput;
}
/**
 * <p></p>
 */
export interface InvalidLoggingConfiguration extends __SmithyException, $MetadataBearer {
    name: "InvalidLoggingConfiguration";
    $fault: "client";
    message?: string;
}
export declare namespace InvalidLoggingConfiguration {
    function isa(o: any): o is InvalidLoggingConfiguration;
}
/**
 * <p>The provided name is invalid.</p>
 */
export interface InvalidName extends __SmithyException, $MetadataBearer {
    name: "InvalidName";
    $fault: "client";
    message?: string;
}
export declare namespace InvalidName {
    function isa(o: any): o is InvalidName;
}
/**
 * <p>The provided JSON output data is invalid.</p>
 */
export interface InvalidOutput extends __SmithyException, $MetadataBearer {
    name: "InvalidOutput";
    $fault: "client";
    message?: string;
}
export declare namespace InvalidOutput {
    function isa(o: any): o is InvalidOutput;
}
/**
 * <p>The provided token is invalid.</p>
 */
export interface InvalidToken extends __SmithyException, $MetadataBearer {
    name: "InvalidToken";
    $fault: "client";
    message?: string;
}
export declare namespace InvalidToken {
    function isa(o: any): o is InvalidToken;
}
export interface ListActivitiesInput {
    __type?: "ListActivitiesInput";
    /**
     * <p>The maximum number of results that are returned per call. You can use <code>nextToken</code> to obtain further pages of results.
     *     The default is 100 and the maximum allowed page size is 1000. A value of 0 uses the default.</p>
     *          <p>This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.</p>
     */
    maxResults?: number;
    /**
     * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
     *     Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p>
     */
    nextToken?: string;
}
export declare namespace ListActivitiesInput {
    function isa(o: any): o is ListActivitiesInput;
}
export interface ListActivitiesOutput {
    __type?: "ListActivitiesOutput";
    /**
     * <p>The list of activities.</p>
     */
    activities: Array<ActivityListItem> | undefined;
    /**
     * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
     *     Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p>
     */
    nextToken?: string;
}
export declare namespace ListActivitiesOutput {
    function isa(o: any): o is ListActivitiesOutput;
}
export interface ListExecutionsInput {
    __type?: "ListExecutionsInput";
    /**
     * <p>The maximum number of results that are returned per call. You can use <code>nextToken</code> to obtain further pages of results.
     *     The default is 100 and the maximum allowed page size is 1000. A value of 0 uses the default.</p>
     *          <p>This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.</p>
     */
    maxResults?: number;
    /**
     * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
     *     Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p>
     */
    nextToken?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the state machine whose executions is listed.</p>
     */
    stateMachineArn: string | undefined;
    /**
     * <p>If specified, only list the executions whose current execution status matches the given
     *       filter.</p>
     */
    statusFilter?: ExecutionStatus | string;
}
export declare namespace ListExecutionsInput {
    function isa(o: any): o is ListExecutionsInput;
}
export interface ListExecutionsOutput {
    __type?: "ListExecutionsOutput";
    /**
     * <p>The list of matching executions.</p>
     */
    executions: Array<ExecutionListItem> | undefined;
    /**
     * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
     *     Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p>
     */
    nextToken?: string;
}
export declare namespace ListExecutionsOutput {
    function isa(o: any): o is ListExecutionsOutput;
}
export interface ListStateMachinesInput {
    __type?: "ListStateMachinesInput";
    /**
     * <p>The maximum number of results that are returned per call. You can use <code>nextToken</code> to obtain further pages of results.
     *     The default is 100 and the maximum allowed page size is 1000. A value of 0 uses the default.</p>
     *          <p>This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.</p>
     */
    maxResults?: number;
    /**
     * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
     *     Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p>
     */
    nextToken?: string;
}
export declare namespace ListStateMachinesInput {
    function isa(o: any): o is ListStateMachinesInput;
}
export interface ListStateMachinesOutput {
    __type?: "ListStateMachinesOutput";
    /**
     * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
     *     Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p>
     */
    nextToken?: string;
    stateMachines: Array<StateMachineListItem> | undefined;
}
export declare namespace ListStateMachinesOutput {
    function isa(o: any): o is ListStateMachinesOutput;
}
export interface ListTagsForResourceInput {
    __type?: "ListTagsForResourceInput";
    /**
     * <p>The Amazon Resource Name (ARN) for the Step Functions state machine or activity.</p>
     */
    resourceArn: string | undefined;
}
export declare namespace ListTagsForResourceInput {
    function isa(o: any): o is ListTagsForResourceInput;
}
export interface ListTagsForResourceOutput {
    __type?: "ListTagsForResourceOutput";
    /**
     * <p>An array of tags associated with the resource.</p>
     */
    tags?: Array<Tag>;
}
export declare namespace ListTagsForResourceOutput {
    function isa(o: any): o is ListTagsForResourceOutput;
}
/**
 * <p>Request is missing a required parameter. This error occurs if both <code>definition</code>
 *       and <code>roleArn</code> are not specified.</p>
 */
export interface MissingRequiredParameter extends __SmithyException, $MetadataBearer {
    name: "MissingRequiredParameter";
    $fault: "client";
    message?: string;
}
export declare namespace MissingRequiredParameter {
    function isa(o: any): o is MissingRequiredParameter;
}
/**
 * <p>Could not find the referenced resource. Only state machine and activity ARNs are
 *       supported.</p>
 */
export interface ResourceNotFound extends __SmithyException, $MetadataBearer {
    name: "ResourceNotFound";
    $fault: "client";
    message?: string;
    resourceName?: string;
}
export declare namespace ResourceNotFound {
    function isa(o: any): o is ResourceNotFound;
}
export interface SendTaskFailureInput {
    __type?: "SendTaskFailureInput";
    /**
     * <p>A more detailed explanation of the cause of the failure.</p>
     */
    cause?: string;
    /**
     * <p>The error code of the failure.</p>
     */
    error?: string;
    /**
     * <p>The token that represents this task. Task tokens are generated by Step Functions when
     *       tasks are assigned to a worker, or in the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/input-output-contextobject.html">context object</a> when a
     *       workflow enters a task state. See <a>GetActivityTaskOutput$taskToken</a>.</p>
     */
    taskToken: string | undefined;
}
export declare namespace SendTaskFailureInput {
    function isa(o: any): o is SendTaskFailureInput;
}
export interface SendTaskFailureOutput {
    __type?: "SendTaskFailureOutput";
}
export declare namespace SendTaskFailureOutput {
    function isa(o: any): o is SendTaskFailureOutput;
}
export interface SendTaskHeartbeatInput {
    __type?: "SendTaskHeartbeatInput";
    /**
     * <p>The token that represents this task. Task tokens are generated by Step Functions when
     *       tasks are assigned to a worker, or in the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/input-output-contextobject.html">context object</a> when a
     *       workflow enters a task state. See <a>GetActivityTaskOutput$taskToken</a>.</p>
     */
    taskToken: string | undefined;
}
export declare namespace SendTaskHeartbeatInput {
    function isa(o: any): o is SendTaskHeartbeatInput;
}
export interface SendTaskHeartbeatOutput {
    __type?: "SendTaskHeartbeatOutput";
}
export declare namespace SendTaskHeartbeatOutput {
    function isa(o: any): o is SendTaskHeartbeatOutput;
}
export interface SendTaskSuccessInput {
    __type?: "SendTaskSuccessInput";
    /**
     * <p>The JSON output of the task.</p>
     */
    output: string | undefined;
    /**
     * <p>The token that represents this task. Task tokens are generated by Step Functions when
     *       tasks are assigned to a worker, or in the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/input-output-contextobject.html">context object</a> when a
     *       workflow enters a task state. See <a>GetActivityTaskOutput$taskToken</a>.</p>
     */
    taskToken: string | undefined;
}
export declare namespace SendTaskSuccessInput {
    function isa(o: any): o is SendTaskSuccessInput;
}
export interface SendTaskSuccessOutput {
    __type?: "SendTaskSuccessOutput";
}
export declare namespace SendTaskSuccessOutput {
    function isa(o: any): o is SendTaskSuccessOutput;
}
export interface StartExecutionInput {
    __type?: "StartExecutionInput";
    /**
     * <p>The string that contains the JSON input data for the execution, for example:</p>
     *          <p>
     *             <code>"input": "{\"first_name\" : \"test\"}"</code>
     *          </p>
     *          <note>
     *             <p>If you don't include any JSON input data, you still must include the two braces, for
     *         example: <code>"input": "{}"</code>
     *             </p>
     *          </note>
     */
    input?: string;
    /**
     * <p>The name of the execution. This name must be unique for your AWS account, region, and state machine for 90 days. For more information,
     *     see <a href="https://docs.aws.amazon.com/step-functions/latest/dg/limits.html#service-limits-state-machine-executions">
     *     Limits Related to State Machine Executions</a> in the <i>AWS Step Functions Developer Guide</i>.</p>
     *          <p>A name must <i>not</i> contain:</p>
     *          <ul>
     *             <li>
     *                <p>white space</p>
     *             </li>
     *             <li>
     *                <p>brackets <code>< > { } [ ]</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>wildcard characters <code>? *</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>special characters <code>" # % \ ^ | ~ ` $ & , ; : /</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>control characters (<code>U+0000-001F</code>, <code>U+007F-009F</code>)</p>
     *             </li>
     *          </ul>
     */
    name?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the state machine to execute.</p>
     */
    stateMachineArn: string | undefined;
}
export declare namespace StartExecutionInput {
    function isa(o: any): o is StartExecutionInput;
}
export interface StartExecutionOutput {
    __type?: "StartExecutionOutput";
    /**
     * <p>The Amazon Resource Name (ARN) that identifies the execution.</p>
     */
    executionArn: string | undefined;
    /**
     * <p>The date the execution is started.</p>
     */
    startDate: Date | undefined;
}
export declare namespace StartExecutionOutput {
    function isa(o: any): o is StartExecutionOutput;
}
/**
 * <p>A state machine with the same name but a different definition or role ARN already
 *       exists.</p>
 */
export interface StateMachineAlreadyExists extends __SmithyException, $MetadataBearer {
    name: "StateMachineAlreadyExists";
    $fault: "client";
    message?: string;
}
export declare namespace StateMachineAlreadyExists {
    function isa(o: any): o is StateMachineAlreadyExists;
}
/**
 * <p>The specified state machine is being deleted.</p>
 */
export interface StateMachineDeleting extends __SmithyException, $MetadataBearer {
    name: "StateMachineDeleting";
    $fault: "client";
    message?: string;
}
export declare namespace StateMachineDeleting {
    function isa(o: any): o is StateMachineDeleting;
}
/**
 * <p>The specified state machine does not exist.</p>
 */
export interface StateMachineDoesNotExist extends __SmithyException, $MetadataBearer {
    name: "StateMachineDoesNotExist";
    $fault: "client";
    message?: string;
}
export declare namespace StateMachineDoesNotExist {
    function isa(o: any): o is StateMachineDoesNotExist;
}
/**
 * <p>The maximum number of state machines has been reached. Existing state machines must be
 *       deleted before a new state machine can be created.</p>
 */
export interface StateMachineLimitExceeded extends __SmithyException, $MetadataBearer {
    name: "StateMachineLimitExceeded";
    $fault: "client";
    message?: string;
}
export declare namespace StateMachineLimitExceeded {
    function isa(o: any): o is StateMachineLimitExceeded;
}
/**
 * <p>Contains details about the state machine.</p>
 */
export interface StateMachineListItem {
    __type?: "StateMachineListItem";
    /**
     * <p>The date the state machine is created.</p>
     */
    creationDate: Date | undefined;
    /**
     * <p>The name of the state machine.</p>
     *          <p>A name must <i>not</i> contain:</p>
     *          <ul>
     *             <li>
     *                <p>white space</p>
     *             </li>
     *             <li>
     *                <p>brackets <code>< > { } [ ]</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>wildcard characters <code>? *</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>special characters <code>" # % \ ^ | ~ ` $ & , ; : /</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>control characters (<code>U+0000-001F</code>, <code>U+007F-009F</code>)</p>
     *             </li>
     *          </ul>
     */
    name: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) that identifies the state machine.</p>
     */
    stateMachineArn: string | undefined;
    /**
     * <p></p>
     */
    type: StateMachineType | string | undefined;
}
export declare namespace StateMachineListItem {
    function isa(o: any): o is StateMachineListItem;
}
export declare type StateMachineStatus = "ACTIVE" | "DELETING";
/**
 * <p></p>
 */
export interface StateMachineTypeNotSupported extends __SmithyException, $MetadataBearer {
    name: "StateMachineTypeNotSupported";
    $fault: "client";
    message?: string;
}
export declare namespace StateMachineTypeNotSupported {
    function isa(o: any): o is StateMachineTypeNotSupported;
}
export interface StopExecutionInput {
    __type?: "StopExecutionInput";
    /**
     * <p>A more detailed explanation of the cause of the failure.</p>
     */
    cause?: string;
    /**
     * <p>The error code of the failure.</p>
     */
    error?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the execution to stop.</p>
     */
    executionArn: string | undefined;
}
export declare namespace StopExecutionInput {
    function isa(o: any): o is StopExecutionInput;
}
export interface StopExecutionOutput {
    __type?: "StopExecutionOutput";
    /**
     * <p>The date the execution is stopped.</p>
     */
    stopDate: Date | undefined;
}
export declare namespace StopExecutionOutput {
    function isa(o: any): o is StopExecutionOutput;
}
/**
 * <p>Tags are key-value pairs that can be associated with Step Functions state machines and
 *       activities.</p>
 *          <p>An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using
 *       Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management User
 *         Guide</i>, and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_iam-tags.html">Controlling Access Using IAM
 *           Tags</a>.</p>
 *          <p>Tags may only contain Unicode letters, digits, white space, or these symbols: <code>_ . : / = + - @</code>.</p>
 */
export interface Tag {
    __type?: "Tag";
    /**
     * <p>The key of a tag.</p>
     */
    key?: string;
    /**
     * <p>The value of a tag.</p>
     */
    value?: string;
}
export declare namespace Tag {
    function isa(o: any): o is Tag;
}
export interface TagResourceInput {
    __type?: "TagResourceInput";
    /**
     * <p>The Amazon Resource Name (ARN) for the Step Functions state machine or activity.</p>
     */
    resourceArn: string | undefined;
    /**
     * <p>The list of tags to add to a resource.</p>
     *          <p>Tags may only contain Unicode letters, digits, white space, or these symbols: <code>_ . : / = + - @</code>.</p>
     */
    tags: Array<Tag> | undefined;
}
export declare namespace TagResourceInput {
    function isa(o: any): o is TagResourceInput;
}
export interface TagResourceOutput {
    __type?: "TagResourceOutput";
}
export declare namespace TagResourceOutput {
    function isa(o: any): o is TagResourceOutput;
}
export interface TaskDoesNotExist extends __SmithyException, $MetadataBearer {
    name: "TaskDoesNotExist";
    $fault: "client";
    message?: string;
}
export declare namespace TaskDoesNotExist {
    function isa(o: any): o is TaskDoesNotExist;
}
export interface TaskTimedOut extends __SmithyException, $MetadataBearer {
    name: "TaskTimedOut";
    $fault: "client";
    message?: string;
}
export declare namespace TaskTimedOut {
    function isa(o: any): o is TaskTimedOut;
}
/**
 * <p>You've exceeded the number of tags allowed for a resource. See the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/limits.html"> Limits Topic</a> in the
 *       AWS Step Functions Developer Guide.</p>
 */
export interface TooManyTags extends __SmithyException, $MetadataBearer {
    name: "TooManyTags";
    $fault: "client";
    message?: string;
    resourceName?: string;
}
export declare namespace TooManyTags {
    function isa(o: any): o is TooManyTags;
}
export interface UntagResourceInput {
    __type?: "UntagResourceInput";
    /**
     * <p>The Amazon Resource Name (ARN) for the Step Functions state machine or activity.</p>
     */
    resourceArn: string | undefined;
    /**
     * <p>The list of tags to remove from the resource.</p>
     */
    tagKeys: Array<string> | undefined;
}
export declare namespace UntagResourceInput {
    function isa(o: any): o is UntagResourceInput;
}
export interface UntagResourceOutput {
    __type?: "UntagResourceOutput";
}
export declare namespace UntagResourceOutput {
    function isa(o: any): o is UntagResourceOutput;
}
export interface UpdateStateMachineInput {
    __type?: "UpdateStateMachineInput";
    /**
     * <p>The Amazon States Language definition of the state machine. See <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html">Amazon States Language</a>.</p>
     */
    definition?: string;
    /**
     * <p></p>
     */
    loggingConfiguration?: LoggingConfiguration;
    /**
     * <p>The Amazon Resource Name (ARN) of the IAM role of the state machine.</p>
     */
    roleArn?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the state machine.</p>
     */
    stateMachineArn: string | undefined;
}
export declare namespace UpdateStateMachineInput {
    function isa(o: any): o is UpdateStateMachineInput;
}
export interface UpdateStateMachineOutput {
    __type?: "UpdateStateMachineOutput";
    /**
     * <p>The date and time the state machine was updated.</p>
     */
    updateDate: Date | undefined;
}
export declare namespace UpdateStateMachineOutput {
    function isa(o: any): o is UpdateStateMachineOutput;
}
