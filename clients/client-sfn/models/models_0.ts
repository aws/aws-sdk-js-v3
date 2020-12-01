import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>The specified activity does not exist.</p>
 */
export interface ActivityDoesNotExist extends __SmithyException, $MetadataBearer {
  name: "ActivityDoesNotExist";
  $fault: "client";
  message?: string;
}

export namespace ActivityDoesNotExist {
  export const filterSensitiveLog = (obj: ActivityDoesNotExist): any => ({
    ...obj,
  });
}

/**
 * <p>Contains details about an activity that failed during an execution.</p>
 */
export interface ActivityFailedEventDetails {
  /**
   * <p>The error code of the failure.</p>
   */
  error?: string;

  /**
   * <p>A more detailed explanation of the cause of the failure.</p>
   */
  cause?: string;
}

export namespace ActivityFailedEventDetails {
  export const filterSensitiveLog = (obj: ActivityFailedEventDetails): any => ({
    ...obj,
    ...(obj.error && { error: SENSITIVE_STRING }),
    ...(obj.cause && { cause: SENSITIVE_STRING }),
  });
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

export namespace ActivityLimitExceeded {
  export const filterSensitiveLog = (obj: ActivityLimitExceeded): any => ({
    ...obj,
  });
}

/**
 * <p>Contains details about an activity.</p>
 */
export interface ActivityListItem {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the activity.</p>
   */
  activityArn: string | undefined;

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
   *          <p>To enable logging with CloudWatch Logs, the name should only contain  0-9, A-Z, a-z, - and _.</p>
   */
  name: string | undefined;

  /**
   * <p>The date the activity is created.</p>
   */
  creationDate: Date | undefined;
}

export namespace ActivityListItem {
  export const filterSensitiveLog = (obj: ActivityListItem): any => ({
    ...obj,
  });
}

/**
 * <p>Provides details about input or output in an execution history event.</p>
 */
export interface HistoryEventExecutionDataDetails {
  /**
   * <p>Indicates whether input or output was truncated in the response. Always
   *       <code>false</code> for API calls.</p>
   */
  truncated?: boolean;
}

export namespace HistoryEventExecutionDataDetails {
  export const filterSensitiveLog = (obj: HistoryEventExecutionDataDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Contains details about an activity scheduled during an execution.</p>
 */
export interface ActivityScheduledEventDetails {
  /**
   * <p>The Amazon Resource Name (ARN) of the scheduled activity.</p>
   */
  resource: string | undefined;

  /**
   * <p>The JSON data input to the activity task. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.</p>
   */
  input?: string;

  /**
   * <p>Contains details about the input for an execution history event.</p>
   */
  inputDetails?: HistoryEventExecutionDataDetails;

  /**
   * <p>The maximum allowed duration of the activity task.</p>
   */
  timeoutInSeconds?: number;

  /**
   * <p>The maximum allowed duration between two heartbeats for the activity task.</p>
   */
  heartbeatInSeconds?: number;
}

export namespace ActivityScheduledEventDetails {
  export const filterSensitiveLog = (obj: ActivityScheduledEventDetails): any => ({
    ...obj,
    ...(obj.input && { input: SENSITIVE_STRING }),
  });
}

/**
 * <p>Contains details about an activity schedule failure that occurred during an
 *       execution.</p>
 */
export interface ActivityScheduleFailedEventDetails {
  /**
   * <p>The error code of the failure.</p>
   */
  error?: string;

  /**
   * <p>A more detailed explanation of the cause of the failure.</p>
   */
  cause?: string;
}

export namespace ActivityScheduleFailedEventDetails {
  export const filterSensitiveLog = (obj: ActivityScheduleFailedEventDetails): any => ({
    ...obj,
    ...(obj.error && { error: SENSITIVE_STRING }),
    ...(obj.cause && { cause: SENSITIVE_STRING }),
  });
}

/**
 * <p>Contains details about the start of an activity during an execution.</p>
 */
export interface ActivityStartedEventDetails {
  /**
   * <p>The name of the worker that the task is assigned to. These names are provided by the
   *       workers when calling <a>GetActivityTask</a>.</p>
   */
  workerName?: string;
}

export namespace ActivityStartedEventDetails {
  export const filterSensitiveLog = (obj: ActivityStartedEventDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Contains details about an activity that successfully terminated during an
 *       execution.</p>
 */
export interface ActivitySucceededEventDetails {
  /**
   * <p>The JSON data output by the activity task. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.</p>
   */
  output?: string;

  /**
   * <p>Contains details about the output of an execution history event.</p>
   */
  outputDetails?: HistoryEventExecutionDataDetails;
}

export namespace ActivitySucceededEventDetails {
  export const filterSensitiveLog = (obj: ActivitySucceededEventDetails): any => ({
    ...obj,
    ...(obj.output && { output: SENSITIVE_STRING }),
  });
}

/**
 * <p>Contains details about an activity timeout that occurred during an execution.</p>
 */
export interface ActivityTimedOutEventDetails {
  /**
   * <p>The error code of the failure.</p>
   */
  error?: string;

  /**
   * <p>A more detailed explanation of the cause of the timeout.</p>
   */
  cause?: string;
}

export namespace ActivityTimedOutEventDetails {
  export const filterSensitiveLog = (obj: ActivityTimedOutEventDetails): any => ({
    ...obj,
    ...(obj.error && { error: SENSITIVE_STRING }),
    ...(obj.cause && { cause: SENSITIVE_STRING }),
  });
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

export namespace ActivityWorkerLimitExceeded {
  export const filterSensitiveLog = (obj: ActivityWorkerLimitExceeded): any => ({
    ...obj,
  });
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
  /**
   * <p>The key of a tag.</p>
   */
  key?: string;

  /**
   * <p>The value of a tag.</p>
   */
  value?: string;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

export interface CreateActivityInput {
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
   *          <p>To enable logging with CloudWatch Logs, the name should only contain  0-9, A-Z, a-z, - and _.</p>
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
  tags?: Tag[];
}

export namespace CreateActivityInput {
  export const filterSensitiveLog = (obj: CreateActivityInput): any => ({
    ...obj,
  });
}

export interface CreateActivityOutput {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the created activity.</p>
   */
  activityArn: string | undefined;

  /**
   * <p>The date the activity is created.</p>
   */
  creationDate: Date | undefined;
}

export namespace CreateActivityOutput {
  export const filterSensitiveLog = (obj: CreateActivityOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The provided name is invalid.</p>
 */
export interface InvalidName extends __SmithyException, $MetadataBearer {
  name: "InvalidName";
  $fault: "client";
  message?: string;
}

export namespace InvalidName {
  export const filterSensitiveLog = (obj: InvalidName): any => ({
    ...obj,
  });
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

export namespace TooManyTags {
  export const filterSensitiveLog = (obj: TooManyTags): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface CloudWatchLogsLogGroup {
  /**
   * <p>The ARN of the the CloudWatch log group to which you want your logs emitted to. The ARN
   *       must end with <code>:*</code>
   *          </p>
   */
  logGroupArn?: string;
}

export namespace CloudWatchLogsLogGroup {
  export const filterSensitiveLog = (obj: CloudWatchLogsLogGroup): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface LogDestination {
  /**
   * <p>An object describing a CloudWatch log group. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loggroup.html">AWS::Logs::LogGroup</a> in the AWS CloudFormation User Guide.</p>
   */
  cloudWatchLogsLogGroup?: CloudWatchLogsLogGroup;
}

export namespace LogDestination {
  export const filterSensitiveLog = (obj: LogDestination): any => ({
    ...obj,
  });
}

export type LogLevel = "ALL" | "ERROR" | "FATAL" | "OFF";

/**
 * <p>The <code>LoggingConfiguration</code> data type is used to set CloudWatch Logs
 *       options.</p>
 */
export interface LoggingConfiguration {
  /**
   * <p>Defines which category of execution history events are logged.</p>
   */
  level?: LogLevel | string;

  /**
   * <p>Determines whether execution data is included in your log. When set to <code>false</code>,
   *       data is excluded.</p>
   */
  includeExecutionData?: boolean;

  /**
   * <p>An array of objects that describes where your execution history events will be logged.
   *       Limited to size 1. Required, if your log level is not set to <code>OFF</code>.</p>
   */
  destinations?: LogDestination[];
}

export namespace LoggingConfiguration {
  export const filterSensitiveLog = (obj: LoggingConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Selects whether or not the state machine's AWS X-Ray tracing is enabled. Default is <code>false</code>
 *          </p>
 */
export interface TracingConfiguration {
  /**
   * <p>When set to <code>true</code>, AWS X-Ray tracing is enabled.</p>
   */
  enabled?: boolean;
}

export namespace TracingConfiguration {
  export const filterSensitiveLog = (obj: TracingConfiguration): any => ({
    ...obj,
  });
}

export type StateMachineType = "EXPRESS" | "STANDARD";

export interface CreateStateMachineInput {
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
   *          <p>To enable logging with CloudWatch Logs, the name should only contain  0-9, A-Z, a-z, - and _.</p>
   */
  name: string | undefined;

  /**
   * <p>The Amazon States Language definition of the state machine. See <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html">Amazon States Language</a>.</p>
   */
  definition: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to use for this state machine.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>Determines whether a Standard or Express state machine is created. The default is
   *         <code>STANDARD</code>. You cannot update the <code>type</code> of a state machine once it
   *       has been created.</p>
   */
  type?: StateMachineType | string;

  /**
   * <p>Defines what execution history events are logged and where they are logged.</p>
   *          <note>
   *             <p>By default, the <code>level</code> is set to <code>OFF</code>. For more information see
   *           <a href="https://docs.aws.amazon.com/step-functions/latest/dg/cloudwatch-log-level.html">Log
   *           Levels</a> in the AWS Step Functions User Guide.</p>
   *          </note>
   */
  loggingConfiguration?: LoggingConfiguration;

  /**
   * <p>Tags to be added when creating a state machine.</p>
   *          <p>An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using
   *       Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management User
   *         Guide</i>, and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_iam-tags.html">Controlling Access Using IAM
   *           Tags</a>.</p>
   *          <p>Tags may only contain Unicode letters, digits, white space, or these symbols: <code>_ . : / = + - @</code>.</p>
   */
  tags?: Tag[];

  /**
   * <p>Selects whether AWS X-Ray tracing is enabled.</p>
   */
  tracingConfiguration?: TracingConfiguration;
}

export namespace CreateStateMachineInput {
  export const filterSensitiveLog = (obj: CreateStateMachineInput): any => ({
    ...obj,
    ...(obj.definition && { definition: SENSITIVE_STRING }),
  });
}

export interface CreateStateMachineOutput {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the created state machine.</p>
   */
  stateMachineArn: string | undefined;

  /**
   * <p>The date the state machine is created.</p>
   */
  creationDate: Date | undefined;
}

export namespace CreateStateMachineOutput {
  export const filterSensitiveLog = (obj: CreateStateMachineOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The provided Amazon Resource Name (ARN) is invalid.</p>
 */
export interface InvalidArn extends __SmithyException, $MetadataBearer {
  name: "InvalidArn";
  $fault: "client";
  message?: string;
}

export namespace InvalidArn {
  export const filterSensitiveLog = (obj: InvalidArn): any => ({
    ...obj,
  });
}

/**
 * <p>The provided Amazon States Language definition is invalid.</p>
 */
export interface InvalidDefinition extends __SmithyException, $MetadataBearer {
  name: "InvalidDefinition";
  $fault: "client";
  message?: string;
}

export namespace InvalidDefinition {
  export const filterSensitiveLog = (obj: InvalidDefinition): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface InvalidLoggingConfiguration extends __SmithyException, $MetadataBearer {
  name: "InvalidLoggingConfiguration";
  $fault: "client";
  message?: string;
}

export namespace InvalidLoggingConfiguration {
  export const filterSensitiveLog = (obj: InvalidLoggingConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Your <code>tracingConfiguration</code> key does not match, or <code>enabled</code> has not been set to <code>true</code> or <code>false</code>.</p>
 */
export interface InvalidTracingConfiguration extends __SmithyException, $MetadataBearer {
  name: "InvalidTracingConfiguration";
  $fault: "client";
  message?: string;
}

export namespace InvalidTracingConfiguration {
  export const filterSensitiveLog = (obj: InvalidTracingConfiguration): any => ({
    ...obj,
  });
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

export namespace StateMachineAlreadyExists {
  export const filterSensitiveLog = (obj: StateMachineAlreadyExists): any => ({
    ...obj,
  });
}

/**
 * <p>The specified state machine is being deleted.</p>
 */
export interface StateMachineDeleting extends __SmithyException, $MetadataBearer {
  name: "StateMachineDeleting";
  $fault: "client";
  message?: string;
}

export namespace StateMachineDeleting {
  export const filterSensitiveLog = (obj: StateMachineDeleting): any => ({
    ...obj,
  });
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

export namespace StateMachineLimitExceeded {
  export const filterSensitiveLog = (obj: StateMachineLimitExceeded): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface StateMachineTypeNotSupported extends __SmithyException, $MetadataBearer {
  name: "StateMachineTypeNotSupported";
  $fault: "client";
  message?: string;
}

export namespace StateMachineTypeNotSupported {
  export const filterSensitiveLog = (obj: StateMachineTypeNotSupported): any => ({
    ...obj,
  });
}

export interface DeleteActivityInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the activity to delete.</p>
   */
  activityArn: string | undefined;
}

export namespace DeleteActivityInput {
  export const filterSensitiveLog = (obj: DeleteActivityInput): any => ({
    ...obj,
  });
}

export interface DeleteActivityOutput {}

export namespace DeleteActivityOutput {
  export const filterSensitiveLog = (obj: DeleteActivityOutput): any => ({
    ...obj,
  });
}

export interface DeleteStateMachineInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the state machine to delete.</p>
   */
  stateMachineArn: string | undefined;
}

export namespace DeleteStateMachineInput {
  export const filterSensitiveLog = (obj: DeleteStateMachineInput): any => ({
    ...obj,
  });
}

export interface DeleteStateMachineOutput {}

export namespace DeleteStateMachineOutput {
  export const filterSensitiveLog = (obj: DeleteStateMachineOutput): any => ({
    ...obj,
  });
}

export interface DescribeActivityInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the activity to describe.</p>
   */
  activityArn: string | undefined;
}

export namespace DescribeActivityInput {
  export const filterSensitiveLog = (obj: DescribeActivityInput): any => ({
    ...obj,
  });
}

export interface DescribeActivityOutput {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the activity.</p>
   */
  activityArn: string | undefined;

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
   *          <p>To enable logging with CloudWatch Logs, the name should only contain  0-9, A-Z, a-z, - and _.</p>
   */
  name: string | undefined;

  /**
   * <p>The date the activity is created.</p>
   */
  creationDate: Date | undefined;
}

export namespace DescribeActivityOutput {
  export const filterSensitiveLog = (obj: DescribeActivityOutput): any => ({
    ...obj,
  });
}

export interface DescribeExecutionInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the execution to describe.</p>
   */
  executionArn: string | undefined;
}

export namespace DescribeExecutionInput {
  export const filterSensitiveLog = (obj: DescribeExecutionInput): any => ({
    ...obj,
  });
}

/**
 * <p>Provides details about execution input or output.</p>
 */
export interface CloudWatchEventsExecutionDataDetails {
  /**
   * <p>Indicates whether input or output was included in the response. Always <code>true</code>
   *       for API calls. </p>
   */
  included?: boolean;
}

export namespace CloudWatchEventsExecutionDataDetails {
  export const filterSensitiveLog = (obj: CloudWatchEventsExecutionDataDetails): any => ({
    ...obj,
  });
}

export type ExecutionStatus = "ABORTED" | "FAILED" | "RUNNING" | "SUCCEEDED" | "TIMED_OUT";

export interface DescribeExecutionOutput {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the execution.</p>
   */
  executionArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the executed stated machine.</p>
   */
  stateMachineArn: string | undefined;

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
   *          <p>To enable logging with CloudWatch Logs, the name should only contain  0-9, A-Z, a-z, - and _.</p>
   */
  name?: string;

  /**
   * <p>The current status of the execution.</p>
   */
  status: ExecutionStatus | string | undefined;

  /**
   * <p>The date the execution is started.</p>
   */
  startDate: Date | undefined;

  /**
   * <p>If the execution has already ended, the date the execution stopped.</p>
   */
  stopDate?: Date;

  /**
   * <p>The string that contains the JSON input data of the execution. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.</p>
   */
  input?: string;

  /**
   * <p>Provides details about execution input or output.</p>
   */
  inputDetails?: CloudWatchEventsExecutionDataDetails;

  /**
   * <p>The JSON output data of the execution. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.</p>
   *          <note>
   *             <p>This field is set only if the execution succeeds. If the execution fails, this field is
   *         null.</p>
   *          </note>
   */
  output?: string;

  /**
   * <p>Provides details about execution input or output.</p>
   */
  outputDetails?: CloudWatchEventsExecutionDataDetails;

  /**
   * <p>The AWS X-Ray trace header that was passed to the execution.</p>
   */
  traceHeader?: string;
}

export namespace DescribeExecutionOutput {
  export const filterSensitiveLog = (obj: DescribeExecutionOutput): any => ({
    ...obj,
    ...(obj.input && { input: SENSITIVE_STRING }),
    ...(obj.output && { output: SENSITIVE_STRING }),
  });
}

/**
 * <p>The specified execution does not exist.</p>
 */
export interface ExecutionDoesNotExist extends __SmithyException, $MetadataBearer {
  name: "ExecutionDoesNotExist";
  $fault: "client";
  message?: string;
}

export namespace ExecutionDoesNotExist {
  export const filterSensitiveLog = (obj: ExecutionDoesNotExist): any => ({
    ...obj,
  });
}

export interface DescribeStateMachineInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the state machine to describe.</p>
   */
  stateMachineArn: string | undefined;
}

export namespace DescribeStateMachineInput {
  export const filterSensitiveLog = (obj: DescribeStateMachineInput): any => ({
    ...obj,
  });
}

export type StateMachineStatus = "ACTIVE" | "DELETING";

export interface DescribeStateMachineOutput {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the state machine.</p>
   */
  stateMachineArn: string | undefined;

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
   *          <p>To enable logging with CloudWatch Logs, the name should only contain  0-9, A-Z, a-z, - and _.</p>
   */
  name: string | undefined;

  /**
   * <p>The current status of the state machine.</p>
   */
  status?: StateMachineStatus | string;

  /**
   * <p>The Amazon States Language definition of the state machine. See <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html">Amazon States Language</a>.</p>
   */
  definition: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role used when creating this state machine. (The IAM role
   *       maintains security by granting Step Functions access to AWS resources.)</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The <code>type</code> of the state machine (<code>STANDARD</code> or
   *       <code>EXPRESS</code>).</p>
   */
  type: StateMachineType | string | undefined;

  /**
   * <p>The date the state machine is created.</p>
   */
  creationDate: Date | undefined;

  /**
   * <p>The <code>LoggingConfiguration</code> data type is used to set CloudWatch Logs
   *       options.</p>
   */
  loggingConfiguration?: LoggingConfiguration;

  /**
   * <p>Selects whether AWS X-Ray tracing is enabled.</p>
   */
  tracingConfiguration?: TracingConfiguration;
}

export namespace DescribeStateMachineOutput {
  export const filterSensitiveLog = (obj: DescribeStateMachineOutput): any => ({
    ...obj,
    ...(obj.definition && { definition: SENSITIVE_STRING }),
  });
}

/**
 * <p>The specified state machine does not exist.</p>
 */
export interface StateMachineDoesNotExist extends __SmithyException, $MetadataBearer {
  name: "StateMachineDoesNotExist";
  $fault: "client";
  message?: string;
}

export namespace StateMachineDoesNotExist {
  export const filterSensitiveLog = (obj: StateMachineDoesNotExist): any => ({
    ...obj,
  });
}

export interface DescribeStateMachineForExecutionInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the execution you want state machine information for.</p>
   */
  executionArn: string | undefined;
}

export namespace DescribeStateMachineForExecutionInput {
  export const filterSensitiveLog = (obj: DescribeStateMachineForExecutionInput): any => ({
    ...obj,
  });
}

export interface DescribeStateMachineForExecutionOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the state machine associated with the execution.</p>
   */
  stateMachineArn: string | undefined;

  /**
   * <p>The name of the state machine associated with the execution.</p>
   */
  name: string | undefined;

  /**
   * <p>The Amazon States Language definition of the state machine. See <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html">Amazon States Language</a>.</p>
   */
  definition: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role of the State Machine for the execution. </p>
   */
  roleArn: string | undefined;

  /**
   * <p>The date and time the state machine associated with an execution was updated. For a newly
   *       created state machine, this is the creation date.</p>
   */
  updateDate: Date | undefined;

  /**
   * <p>The <code>LoggingConfiguration</code> data type is used to set CloudWatch Logs
   *       options.</p>
   */
  loggingConfiguration?: LoggingConfiguration;

  /**
   * <p>Selects whether AWS X-Ray tracing is enabled.</p>
   */
  tracingConfiguration?: TracingConfiguration;
}

export namespace DescribeStateMachineForExecutionOutput {
  export const filterSensitiveLog = (obj: DescribeStateMachineForExecutionOutput): any => ({
    ...obj,
    ...(obj.definition && { definition: SENSITIVE_STRING }),
  });
}

export interface GetActivityTaskInput {
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

export namespace GetActivityTaskInput {
  export const filterSensitiveLog = (obj: GetActivityTaskInput): any => ({
    ...obj,
  });
}

export interface GetActivityTaskOutput {
  /**
   * <p>A token that identifies the scheduled task. This token must be copied and included in
   *       subsequent calls to <a>SendTaskHeartbeat</a>, <a>SendTaskSuccess</a> or
   *         <a>SendTaskFailure</a> in order to report the progress or completion of the
   *       task.</p>
   */
  taskToken?: string;

  /**
   * <p>The string that contains the JSON input data for the task. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.</p>
   */
  input?: string;
}

export namespace GetActivityTaskOutput {
  export const filterSensitiveLog = (obj: GetActivityTaskOutput): any => ({
    ...obj,
    ...(obj.input && { input: SENSITIVE_STRING }),
  });
}

export interface GetExecutionHistoryInput {
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
   * <p>Lists events in descending order of their <code>timeStamp</code>.</p>
   */
  reverseOrder?: boolean;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
   *     Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p>
   */
  nextToken?: string;

  /**
   * <p>You can select whether execution data (input or output of a history event) is returned.
   *       The default is <code>true</code>.</p>
   */
  includeExecutionData?: boolean;
}

export namespace GetExecutionHistoryInput {
  export const filterSensitiveLog = (obj: GetExecutionHistoryInput): any => ({
    ...obj,
  });
}

/**
 * <p>Contains details about an abort of an execution.</p>
 */
export interface ExecutionAbortedEventDetails {
  /**
   * <p>The error code of the failure.</p>
   */
  error?: string;

  /**
   * <p>A more detailed explanation of the cause of the failure.</p>
   */
  cause?: string;
}

export namespace ExecutionAbortedEventDetails {
  export const filterSensitiveLog = (obj: ExecutionAbortedEventDetails): any => ({
    ...obj,
    ...(obj.error && { error: SENSITIVE_STRING }),
    ...(obj.cause && { cause: SENSITIVE_STRING }),
  });
}

/**
 * <p>Contains details about an execution failure event.</p>
 */
export interface ExecutionFailedEventDetails {
  /**
   * <p>The error code of the failure.</p>
   */
  error?: string;

  /**
   * <p>A more detailed explanation of the cause of the failure.</p>
   */
  cause?: string;
}

export namespace ExecutionFailedEventDetails {
  export const filterSensitiveLog = (obj: ExecutionFailedEventDetails): any => ({
    ...obj,
    ...(obj.error && { error: SENSITIVE_STRING }),
    ...(obj.cause && { cause: SENSITIVE_STRING }),
  });
}

/**
 * <p>Contains details about the start of the execution.</p>
 */
export interface ExecutionStartedEventDetails {
  /**
   * <p>The JSON data input to the execution. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.</p>
   */
  input?: string;

  /**
   * <p>Contains details about the input for an execution history event.</p>
   */
  inputDetails?: HistoryEventExecutionDataDetails;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role used for executing AWS Lambda tasks.</p>
   */
  roleArn?: string;
}

export namespace ExecutionStartedEventDetails {
  export const filterSensitiveLog = (obj: ExecutionStartedEventDetails): any => ({
    ...obj,
    ...(obj.input && { input: SENSITIVE_STRING }),
  });
}

/**
 * <p>Contains details about the successful termination of the execution.</p>
 */
export interface ExecutionSucceededEventDetails {
  /**
   * <p>The JSON data output by the execution. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.</p>
   */
  output?: string;

  /**
   * <p>Contains details about the output of an execution history event.</p>
   */
  outputDetails?: HistoryEventExecutionDataDetails;
}

export namespace ExecutionSucceededEventDetails {
  export const filterSensitiveLog = (obj: ExecutionSucceededEventDetails): any => ({
    ...obj,
    ...(obj.output && { output: SENSITIVE_STRING }),
  });
}

/**
 * <p>Contains details about the execution timeout that occurred during the execution.</p>
 */
export interface ExecutionTimedOutEventDetails {
  /**
   * <p>The error code of the failure.</p>
   */
  error?: string;

  /**
   * <p>A more detailed explanation of the cause of the timeout.</p>
   */
  cause?: string;
}

export namespace ExecutionTimedOutEventDetails {
  export const filterSensitiveLog = (obj: ExecutionTimedOutEventDetails): any => ({
    ...obj,
    ...(obj.error && { error: SENSITIVE_STRING }),
    ...(obj.cause && { cause: SENSITIVE_STRING }),
  });
}

/**
 * <p>Contains details about a lambda function that failed during an execution.</p>
 */
export interface LambdaFunctionFailedEventDetails {
  /**
   * <p>The error code of the failure.</p>
   */
  error?: string;

  /**
   * <p>A more detailed explanation of the cause of the failure.</p>
   */
  cause?: string;
}

export namespace LambdaFunctionFailedEventDetails {
  export const filterSensitiveLog = (obj: LambdaFunctionFailedEventDetails): any => ({
    ...obj,
    ...(obj.error && { error: SENSITIVE_STRING }),
    ...(obj.cause && { cause: SENSITIVE_STRING }),
  });
}

/**
 * <p>Contains details about a lambda function scheduled during an execution.</p>
 */
export interface LambdaFunctionScheduledEventDetails {
  /**
   * <p>The Amazon Resource Name (ARN) of the scheduled lambda function.</p>
   */
  resource: string | undefined;

  /**
   * <p>The JSON data input to the lambda function. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.</p>
   */
  input?: string;

  /**
   * <p>Contains details about input for an execution history event.</p>
   */
  inputDetails?: HistoryEventExecutionDataDetails;

  /**
   * <p>The maximum allowed duration of the lambda function.</p>
   */
  timeoutInSeconds?: number;
}

export namespace LambdaFunctionScheduledEventDetails {
  export const filterSensitiveLog = (obj: LambdaFunctionScheduledEventDetails): any => ({
    ...obj,
    ...(obj.input && { input: SENSITIVE_STRING }),
  });
}

/**
 * <p>Contains details about a failed lambda function schedule event that occurred during an
 *       execution.</p>
 */
export interface LambdaFunctionScheduleFailedEventDetails {
  /**
   * <p>The error code of the failure.</p>
   */
  error?: string;

  /**
   * <p>A more detailed explanation of the cause of the failure.</p>
   */
  cause?: string;
}

export namespace LambdaFunctionScheduleFailedEventDetails {
  export const filterSensitiveLog = (obj: LambdaFunctionScheduleFailedEventDetails): any => ({
    ...obj,
    ...(obj.error && { error: SENSITIVE_STRING }),
    ...(obj.cause && { cause: SENSITIVE_STRING }),
  });
}

/**
 * <p>Contains details about a lambda function that failed to start during an execution.</p>
 */
export interface LambdaFunctionStartFailedEventDetails {
  /**
   * <p>The error code of the failure.</p>
   */
  error?: string;

  /**
   * <p>A more detailed explanation of the cause of the failure.</p>
   */
  cause?: string;
}

export namespace LambdaFunctionStartFailedEventDetails {
  export const filterSensitiveLog = (obj: LambdaFunctionStartFailedEventDetails): any => ({
    ...obj,
    ...(obj.error && { error: SENSITIVE_STRING }),
    ...(obj.cause && { cause: SENSITIVE_STRING }),
  });
}

/**
 * <p>Contains details about a lambda function that successfully terminated during an
 *       execution.</p>
 */
export interface LambdaFunctionSucceededEventDetails {
  /**
   * <p>The JSON data output by the lambda function. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.</p>
   */
  output?: string;

  /**
   * <p>Contains details about the output of an execution history event.</p>
   */
  outputDetails?: HistoryEventExecutionDataDetails;
}

export namespace LambdaFunctionSucceededEventDetails {
  export const filterSensitiveLog = (obj: LambdaFunctionSucceededEventDetails): any => ({
    ...obj,
    ...(obj.output && { output: SENSITIVE_STRING }),
  });
}

/**
 * <p>Contains details about a lambda function timeout that occurred during an execution.</p>
 */
export interface LambdaFunctionTimedOutEventDetails {
  /**
   * <p>The error code of the failure.</p>
   */
  error?: string;

  /**
   * <p>A more detailed explanation of the cause of the timeout.</p>
   */
  cause?: string;
}

export namespace LambdaFunctionTimedOutEventDetails {
  export const filterSensitiveLog = (obj: LambdaFunctionTimedOutEventDetails): any => ({
    ...obj,
    ...(obj.error && { error: SENSITIVE_STRING }),
    ...(obj.cause && { cause: SENSITIVE_STRING }),
  });
}

/**
 * <p>Contains details about an iteration of a Map state.</p>
 */
export interface MapIterationEventDetails {
  /**
   * <p>The name of the iteration’s parent Map state.</p>
   */
  name?: string;

  /**
   * <p>The index of the array belonging to the Map state iteration.</p>
   */
  index?: number;
}

export namespace MapIterationEventDetails {
  export const filterSensitiveLog = (obj: MapIterationEventDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Details about a Map state that was started.</p>
 */
export interface MapStateStartedEventDetails {
  /**
   * <p>The size of the array for Map state iterations.</p>
   */
  length?: number;
}

export namespace MapStateStartedEventDetails {
  export const filterSensitiveLog = (obj: MapStateStartedEventDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Contains details about a state entered during an execution.</p>
 */
export interface StateEnteredEventDetails {
  /**
   * <p>The name of the state.</p>
   */
  name: string | undefined;

  /**
   * <p>The string that contains the JSON input data for the state. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.</p>
   */
  input?: string;

  /**
   * <p>Contains details about the input for an execution history event.</p>
   */
  inputDetails?: HistoryEventExecutionDataDetails;
}

export namespace StateEnteredEventDetails {
  export const filterSensitiveLog = (obj: StateEnteredEventDetails): any => ({
    ...obj,
    ...(obj.input && { input: SENSITIVE_STRING }),
  });
}

/**
 * <p>Contains details about an exit from a state during an execution.</p>
 */
export interface StateExitedEventDetails {
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
   *          <p>To enable logging with CloudWatch Logs, the name should only contain  0-9, A-Z, a-z, - and _.</p>
   */
  name: string | undefined;

  /**
   * <p>The JSON output data of the state. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.</p>
   */
  output?: string;

  /**
   * <p>Contains details about the output of an execution history event.</p>
   */
  outputDetails?: HistoryEventExecutionDataDetails;
}

export namespace StateExitedEventDetails {
  export const filterSensitiveLog = (obj: StateExitedEventDetails): any => ({
    ...obj,
    ...(obj.output && { output: SENSITIVE_STRING }),
  });
}

/**
 * <p>Contains details about a task failure event.</p>
 */
export interface TaskFailedEventDetails {
  /**
   * <p>The action of the resource called by a task state.</p>
   */
  resourceType: string | undefined;

  /**
   * <p>The service name of the resource in a task state.</p>
   */
  resource: string | undefined;

  /**
   * <p>The error code of the failure.</p>
   */
  error?: string;

  /**
   * <p>A more detailed explanation of the cause of the failure.</p>
   */
  cause?: string;
}

export namespace TaskFailedEventDetails {
  export const filterSensitiveLog = (obj: TaskFailedEventDetails): any => ({
    ...obj,
    ...(obj.error && { error: SENSITIVE_STRING }),
    ...(obj.cause && { cause: SENSITIVE_STRING }),
  });
}

/**
 * <p>Contains details about a task scheduled during an execution.</p>
 */
export interface TaskScheduledEventDetails {
  /**
   * <p>The action of the resource called by a task state.</p>
   */
  resourceType: string | undefined;

  /**
   * <p>The service name of the resource in a task state.</p>
   */
  resource: string | undefined;

  /**
   * <p>The region of the scheduled task</p>
   */
  region: string | undefined;

  /**
   * <p>The JSON data passed to the resource referenced in a task state.
   *       Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.</p>
   */
  parameters: string | undefined;

  /**
   * <p>The maximum allowed duration of the task.</p>
   */
  timeoutInSeconds?: number;

  /**
   * <p>The maximum allowed duration between two heartbeats for the task.</p>
   */
  heartbeatInSeconds?: number;
}

export namespace TaskScheduledEventDetails {
  export const filterSensitiveLog = (obj: TaskScheduledEventDetails): any => ({
    ...obj,
    ...(obj.parameters && { parameters: SENSITIVE_STRING }),
  });
}

/**
 * <p>Contains details about the start of a task during an execution.</p>
 */
export interface TaskStartedEventDetails {
  /**
   * <p>The action of the resource called by a task state.</p>
   */
  resourceType: string | undefined;

  /**
   * <p>The service name of the resource in a task state.</p>
   */
  resource: string | undefined;
}

export namespace TaskStartedEventDetails {
  export const filterSensitiveLog = (obj: TaskStartedEventDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Contains details about a task that failed to start during an execution.</p>
 */
export interface TaskStartFailedEventDetails {
  /**
   * <p>The action of the resource called by a task state.</p>
   */
  resourceType: string | undefined;

  /**
   * <p>The service name of the resource in a task state.</p>
   */
  resource: string | undefined;

  /**
   * <p>The error code of the failure.</p>
   */
  error?: string;

  /**
   * <p>A more detailed explanation of the cause of the failure.</p>
   */
  cause?: string;
}

export namespace TaskStartFailedEventDetails {
  export const filterSensitiveLog = (obj: TaskStartFailedEventDetails): any => ({
    ...obj,
    ...(obj.error && { error: SENSITIVE_STRING }),
    ...(obj.cause && { cause: SENSITIVE_STRING }),
  });
}

/**
 * <p>Contains details about a task that failed to submit during an execution.</p>
 */
export interface TaskSubmitFailedEventDetails {
  /**
   * <p>The action of the resource called by a task state.</p>
   */
  resourceType: string | undefined;

  /**
   * <p>The service name of the resource in a task state.</p>
   */
  resource: string | undefined;

  /**
   * <p>The error code of the failure.</p>
   */
  error?: string;

  /**
   * <p>A more detailed explanation of the cause of the failure.</p>
   */
  cause?: string;
}

export namespace TaskSubmitFailedEventDetails {
  export const filterSensitiveLog = (obj: TaskSubmitFailedEventDetails): any => ({
    ...obj,
    ...(obj.error && { error: SENSITIVE_STRING }),
    ...(obj.cause && { cause: SENSITIVE_STRING }),
  });
}

/**
 * <p>Contains details about a task submitted to a resource .</p>
 */
export interface TaskSubmittedEventDetails {
  /**
   * <p>The action of the resource called by a task state.</p>
   */
  resourceType: string | undefined;

  /**
   * <p>The service name of the resource in a task state.</p>
   */
  resource: string | undefined;

  /**
   * <p>The response from a resource when a task has started. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.</p>
   */
  output?: string;

  /**
   * <p>Contains details about the output of an execution history event.</p>
   */
  outputDetails?: HistoryEventExecutionDataDetails;
}

export namespace TaskSubmittedEventDetails {
  export const filterSensitiveLog = (obj: TaskSubmittedEventDetails): any => ({
    ...obj,
    ...(obj.output && { output: SENSITIVE_STRING }),
  });
}

/**
 * <p>Contains details about the successful completion of a task state.</p>
 */
export interface TaskSucceededEventDetails {
  /**
   * <p>The action of the resource called by a task state.</p>
   */
  resourceType: string | undefined;

  /**
   * <p>The service name of the resource in a task state.</p>
   */
  resource: string | undefined;

  /**
   * <p>The full JSON response from a resource when a task has succeeded. This response becomes
   *       the output of the related task. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.</p>
   */
  output?: string;

  /**
   * <p>Contains details about the output of an execution history event.</p>
   */
  outputDetails?: HistoryEventExecutionDataDetails;
}

export namespace TaskSucceededEventDetails {
  export const filterSensitiveLog = (obj: TaskSucceededEventDetails): any => ({
    ...obj,
    ...(obj.output && { output: SENSITIVE_STRING }),
  });
}

/**
 * <p>Contains details about a resource timeout that occurred during an execution.</p>
 */
export interface TaskTimedOutEventDetails {
  /**
   * <p>The action of the resource called by a task state.</p>
   */
  resourceType: string | undefined;

  /**
   * <p>The service name of the resource in a task state.</p>
   */
  resource: string | undefined;

  /**
   * <p>The error code of the failure.</p>
   */
  error?: string;

  /**
   * <p>A more detailed explanation of the cause of the failure.</p>
   */
  cause?: string;
}

export namespace TaskTimedOutEventDetails {
  export const filterSensitiveLog = (obj: TaskTimedOutEventDetails): any => ({
    ...obj,
    ...(obj.error && { error: SENSITIVE_STRING }),
    ...(obj.cause && { cause: SENSITIVE_STRING }),
  });
}

export type HistoryEventType =
  | "ActivityFailed"
  | "ActivityScheduleFailed"
  | "ActivityScheduled"
  | "ActivityStarted"
  | "ActivitySucceeded"
  | "ActivityTimedOut"
  | "ChoiceStateEntered"
  | "ChoiceStateExited"
  | "ExecutionAborted"
  | "ExecutionFailed"
  | "ExecutionStarted"
  | "ExecutionSucceeded"
  | "ExecutionTimedOut"
  | "FailStateEntered"
  | "LambdaFunctionFailed"
  | "LambdaFunctionScheduleFailed"
  | "LambdaFunctionScheduled"
  | "LambdaFunctionStartFailed"
  | "LambdaFunctionStarted"
  | "LambdaFunctionSucceeded"
  | "LambdaFunctionTimedOut"
  | "MapIterationAborted"
  | "MapIterationFailed"
  | "MapIterationStarted"
  | "MapIterationSucceeded"
  | "MapStateAborted"
  | "MapStateEntered"
  | "MapStateExited"
  | "MapStateFailed"
  | "MapStateStarted"
  | "MapStateSucceeded"
  | "ParallelStateAborted"
  | "ParallelStateEntered"
  | "ParallelStateExited"
  | "ParallelStateFailed"
  | "ParallelStateStarted"
  | "ParallelStateSucceeded"
  | "PassStateEntered"
  | "PassStateExited"
  | "SucceedStateEntered"
  | "SucceedStateExited"
  | "TaskFailed"
  | "TaskScheduled"
  | "TaskStartFailed"
  | "TaskStarted"
  | "TaskStateAborted"
  | "TaskStateEntered"
  | "TaskStateExited"
  | "TaskSubmitFailed"
  | "TaskSubmitted"
  | "TaskSucceeded"
  | "TaskTimedOut"
  | "WaitStateAborted"
  | "WaitStateEntered"
  | "WaitStateExited";

/**
 * <p>Contains details about the events of an execution.</p>
 */
export interface HistoryEvent {
  /**
   * <p>The date and time the event occurred.</p>
   */
  timestamp: Date | undefined;

  /**
   * <p>The type of the event.</p>
   */
  type: HistoryEventType | string | undefined;

  /**
   * <p>The id of the event. Events are numbered sequentially, starting at one.</p>
   */
  id: number | undefined;

  /**
   * <p>The id of the previous event.</p>
   */
  previousEventId?: number;

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
   * <p>Contains details about an abort of an execution.</p>
   */
  executionAbortedEventDetails?: ExecutionAbortedEventDetails;

  /**
   * <p>Contains details about the execution timeout that occurred during the execution.</p>
   */
  executionTimedOutEventDetails?: ExecutionTimedOutEventDetails;

  /**
   * <p>Contains details about Map state that was started.</p>
   */
  mapStateStartedEventDetails?: MapStateStartedEventDetails;

  /**
   * <p>Contains details about an iteration of a Map state that was started.</p>
   */
  mapIterationStartedEventDetails?: MapIterationEventDetails;

  /**
   * <p>Contains details about an iteration of a Map state that succeeded.</p>
   */
  mapIterationSucceededEventDetails?: MapIterationEventDetails;

  /**
   * <p>Contains details about an iteration of a Map state that failed.</p>
   */
  mapIterationFailedEventDetails?: MapIterationEventDetails;

  /**
   * <p>Contains details about an iteration of a Map state that was aborted.</p>
   */
  mapIterationAbortedEventDetails?: MapIterationEventDetails;

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
   * <p>Contains details about a state entered during an execution.</p>
   */
  stateEnteredEventDetails?: StateEnteredEventDetails;

  /**
   * <p>Contains details about an exit from a state during an execution.</p>
   */
  stateExitedEventDetails?: StateExitedEventDetails;
}

export namespace HistoryEvent {
  export const filterSensitiveLog = (obj: HistoryEvent): any => ({
    ...obj,
    ...(obj.activityFailedEventDetails && {
      activityFailedEventDetails: ActivityFailedEventDetails.filterSensitiveLog(obj.activityFailedEventDetails),
    }),
    ...(obj.activityScheduleFailedEventDetails && {
      activityScheduleFailedEventDetails: ActivityScheduleFailedEventDetails.filterSensitiveLog(
        obj.activityScheduleFailedEventDetails
      ),
    }),
    ...(obj.activityScheduledEventDetails && {
      activityScheduledEventDetails: ActivityScheduledEventDetails.filterSensitiveLog(
        obj.activityScheduledEventDetails
      ),
    }),
    ...(obj.activitySucceededEventDetails && {
      activitySucceededEventDetails: ActivitySucceededEventDetails.filterSensitiveLog(
        obj.activitySucceededEventDetails
      ),
    }),
    ...(obj.activityTimedOutEventDetails && {
      activityTimedOutEventDetails: ActivityTimedOutEventDetails.filterSensitiveLog(obj.activityTimedOutEventDetails),
    }),
    ...(obj.taskFailedEventDetails && {
      taskFailedEventDetails: TaskFailedEventDetails.filterSensitiveLog(obj.taskFailedEventDetails),
    }),
    ...(obj.taskScheduledEventDetails && {
      taskScheduledEventDetails: TaskScheduledEventDetails.filterSensitiveLog(obj.taskScheduledEventDetails),
    }),
    ...(obj.taskStartFailedEventDetails && {
      taskStartFailedEventDetails: TaskStartFailedEventDetails.filterSensitiveLog(obj.taskStartFailedEventDetails),
    }),
    ...(obj.taskSubmitFailedEventDetails && {
      taskSubmitFailedEventDetails: TaskSubmitFailedEventDetails.filterSensitiveLog(obj.taskSubmitFailedEventDetails),
    }),
    ...(obj.taskSubmittedEventDetails && {
      taskSubmittedEventDetails: TaskSubmittedEventDetails.filterSensitiveLog(obj.taskSubmittedEventDetails),
    }),
    ...(obj.taskSucceededEventDetails && {
      taskSucceededEventDetails: TaskSucceededEventDetails.filterSensitiveLog(obj.taskSucceededEventDetails),
    }),
    ...(obj.taskTimedOutEventDetails && {
      taskTimedOutEventDetails: TaskTimedOutEventDetails.filterSensitiveLog(obj.taskTimedOutEventDetails),
    }),
    ...(obj.executionFailedEventDetails && {
      executionFailedEventDetails: ExecutionFailedEventDetails.filterSensitiveLog(obj.executionFailedEventDetails),
    }),
    ...(obj.executionStartedEventDetails && {
      executionStartedEventDetails: ExecutionStartedEventDetails.filterSensitiveLog(obj.executionStartedEventDetails),
    }),
    ...(obj.executionSucceededEventDetails && {
      executionSucceededEventDetails: ExecutionSucceededEventDetails.filterSensitiveLog(
        obj.executionSucceededEventDetails
      ),
    }),
    ...(obj.executionAbortedEventDetails && {
      executionAbortedEventDetails: ExecutionAbortedEventDetails.filterSensitiveLog(obj.executionAbortedEventDetails),
    }),
    ...(obj.executionTimedOutEventDetails && {
      executionTimedOutEventDetails: ExecutionTimedOutEventDetails.filterSensitiveLog(
        obj.executionTimedOutEventDetails
      ),
    }),
    ...(obj.lambdaFunctionFailedEventDetails && {
      lambdaFunctionFailedEventDetails: LambdaFunctionFailedEventDetails.filterSensitiveLog(
        obj.lambdaFunctionFailedEventDetails
      ),
    }),
    ...(obj.lambdaFunctionScheduleFailedEventDetails && {
      lambdaFunctionScheduleFailedEventDetails: LambdaFunctionScheduleFailedEventDetails.filterSensitiveLog(
        obj.lambdaFunctionScheduleFailedEventDetails
      ),
    }),
    ...(obj.lambdaFunctionScheduledEventDetails && {
      lambdaFunctionScheduledEventDetails: LambdaFunctionScheduledEventDetails.filterSensitiveLog(
        obj.lambdaFunctionScheduledEventDetails
      ),
    }),
    ...(obj.lambdaFunctionStartFailedEventDetails && {
      lambdaFunctionStartFailedEventDetails: LambdaFunctionStartFailedEventDetails.filterSensitiveLog(
        obj.lambdaFunctionStartFailedEventDetails
      ),
    }),
    ...(obj.lambdaFunctionSucceededEventDetails && {
      lambdaFunctionSucceededEventDetails: LambdaFunctionSucceededEventDetails.filterSensitiveLog(
        obj.lambdaFunctionSucceededEventDetails
      ),
    }),
    ...(obj.lambdaFunctionTimedOutEventDetails && {
      lambdaFunctionTimedOutEventDetails: LambdaFunctionTimedOutEventDetails.filterSensitiveLog(
        obj.lambdaFunctionTimedOutEventDetails
      ),
    }),
    ...(obj.stateEnteredEventDetails && {
      stateEnteredEventDetails: StateEnteredEventDetails.filterSensitiveLog(obj.stateEnteredEventDetails),
    }),
    ...(obj.stateExitedEventDetails && {
      stateExitedEventDetails: StateExitedEventDetails.filterSensitiveLog(obj.stateExitedEventDetails),
    }),
  });
}

export interface GetExecutionHistoryOutput {
  /**
   * <p>The list of events that occurred in the execution.</p>
   */
  events: HistoryEvent[] | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
   *     Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p>
   */
  nextToken?: string;
}

export namespace GetExecutionHistoryOutput {
  export const filterSensitiveLog = (obj: GetExecutionHistoryOutput): any => ({
    ...obj,
    ...(obj.events && { events: obj.events.map((item) => HistoryEvent.filterSensitiveLog(item)) }),
  });
}

/**
 * <p>The provided token is invalid.</p>
 */
export interface InvalidToken extends __SmithyException, $MetadataBearer {
  name: "InvalidToken";
  $fault: "client";
  message?: string;
}

export namespace InvalidToken {
  export const filterSensitiveLog = (obj: InvalidToken): any => ({
    ...obj,
  });
}

export interface ListActivitiesInput {
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

export namespace ListActivitiesInput {
  export const filterSensitiveLog = (obj: ListActivitiesInput): any => ({
    ...obj,
  });
}

export interface ListActivitiesOutput {
  /**
   * <p>The list of activities.</p>
   */
  activities: ActivityListItem[] | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
   *     Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p>
   */
  nextToken?: string;
}

export namespace ListActivitiesOutput {
  export const filterSensitiveLog = (obj: ListActivitiesOutput): any => ({
    ...obj,
  });
}

export interface ListExecutionsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the state machine whose executions is listed.</p>
   */
  stateMachineArn: string | undefined;

  /**
   * <p>If specified, only list the executions whose current execution status matches the given
   *       filter.</p>
   */
  statusFilter?: ExecutionStatus | string;

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

export namespace ListExecutionsInput {
  export const filterSensitiveLog = (obj: ListExecutionsInput): any => ({
    ...obj,
  });
}

/**
 * <p>Contains details about an execution.</p>
 */
export interface ExecutionListItem {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the execution.</p>
   */
  executionArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the executed state machine.</p>
   */
  stateMachineArn: string | undefined;

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
   *          <p>To enable logging with CloudWatch Logs, the name should only contain  0-9, A-Z, a-z, - and _.</p>
   */
  name: string | undefined;

  /**
   * <p>The current status of the execution.</p>
   */
  status: ExecutionStatus | string | undefined;

  /**
   * <p>The date the execution started.</p>
   */
  startDate: Date | undefined;

  /**
   * <p>If the execution already ended, the date the execution stopped.</p>
   */
  stopDate?: Date;
}

export namespace ExecutionListItem {
  export const filterSensitiveLog = (obj: ExecutionListItem): any => ({
    ...obj,
  });
}

export interface ListExecutionsOutput {
  /**
   * <p>The list of matching executions.</p>
   */
  executions: ExecutionListItem[] | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
   *     Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p>
   */
  nextToken?: string;
}

export namespace ListExecutionsOutput {
  export const filterSensitiveLog = (obj: ListExecutionsOutput): any => ({
    ...obj,
  });
}

export interface ListStateMachinesInput {
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

export namespace ListStateMachinesInput {
  export const filterSensitiveLog = (obj: ListStateMachinesInput): any => ({
    ...obj,
  });
}

/**
 * <p>Contains details about the state machine.</p>
 */
export interface StateMachineListItem {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the state machine.</p>
   */
  stateMachineArn: string | undefined;

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
   *          <p>To enable logging with CloudWatch Logs, the name should only contain  0-9, A-Z, a-z, - and _.</p>
   */
  name: string | undefined;

  /**
   * <p></p>
   */
  type: StateMachineType | string | undefined;

  /**
   * <p>The date the state machine is created.</p>
   */
  creationDate: Date | undefined;
}

export namespace StateMachineListItem {
  export const filterSensitiveLog = (obj: StateMachineListItem): any => ({
    ...obj,
  });
}

export interface ListStateMachinesOutput {
  stateMachines: StateMachineListItem[] | undefined;
  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
   *     Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p>
   */
  nextToken?: string;
}

export namespace ListStateMachinesOutput {
  export const filterSensitiveLog = (obj: ListStateMachinesOutput): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) for the Step Functions state machine or activity.</p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceInput {
  export const filterSensitiveLog = (obj: ListTagsForResourceInput): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceOutput {
  /**
   * <p>An array of tags associated with the resource.</p>
   */
  tags?: Tag[];
}

export namespace ListTagsForResourceOutput {
  export const filterSensitiveLog = (obj: ListTagsForResourceOutput): any => ({
    ...obj,
  });
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

export namespace ResourceNotFound {
  export const filterSensitiveLog = (obj: ResourceNotFound): any => ({
    ...obj,
  });
}

export interface SendTaskFailureInput {
  /**
   * <p>The token that represents this task. Task tokens are generated by Step Functions when
   *       tasks are assigned to a worker, or in the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/input-output-contextobject.html">context object</a> when a
   *       workflow enters a task state. See <a>GetActivityTaskOutput$taskToken</a>.</p>
   */
  taskToken: string | undefined;

  /**
   * <p>The error code of the failure.</p>
   */
  error?: string;

  /**
   * <p>A more detailed explanation of the cause of the failure.</p>
   */
  cause?: string;
}

export namespace SendTaskFailureInput {
  export const filterSensitiveLog = (obj: SendTaskFailureInput): any => ({
    ...obj,
    ...(obj.error && { error: SENSITIVE_STRING }),
    ...(obj.cause && { cause: SENSITIVE_STRING }),
  });
}

export interface SendTaskFailureOutput {}

export namespace SendTaskFailureOutput {
  export const filterSensitiveLog = (obj: SendTaskFailureOutput): any => ({
    ...obj,
  });
}

export interface TaskDoesNotExist extends __SmithyException, $MetadataBearer {
  name: "TaskDoesNotExist";
  $fault: "client";
  message?: string;
}

export namespace TaskDoesNotExist {
  export const filterSensitiveLog = (obj: TaskDoesNotExist): any => ({
    ...obj,
  });
}

export interface TaskTimedOut extends __SmithyException, $MetadataBearer {
  name: "TaskTimedOut";
  $fault: "client";
  message?: string;
}

export namespace TaskTimedOut {
  export const filterSensitiveLog = (obj: TaskTimedOut): any => ({
    ...obj,
  });
}

export interface SendTaskHeartbeatInput {
  /**
   * <p>The token that represents this task. Task tokens are generated by Step Functions when
   *       tasks are assigned to a worker, or in the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/input-output-contextobject.html">context object</a> when a
   *       workflow enters a task state. See <a>GetActivityTaskOutput$taskToken</a>.</p>
   */
  taskToken: string | undefined;
}

export namespace SendTaskHeartbeatInput {
  export const filterSensitiveLog = (obj: SendTaskHeartbeatInput): any => ({
    ...obj,
  });
}

export interface SendTaskHeartbeatOutput {}

export namespace SendTaskHeartbeatOutput {
  export const filterSensitiveLog = (obj: SendTaskHeartbeatOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The provided JSON output data is invalid.</p>
 */
export interface InvalidOutput extends __SmithyException, $MetadataBearer {
  name: "InvalidOutput";
  $fault: "client";
  message?: string;
}

export namespace InvalidOutput {
  export const filterSensitiveLog = (obj: InvalidOutput): any => ({
    ...obj,
  });
}

export interface SendTaskSuccessInput {
  /**
   * <p>The token that represents this task. Task tokens are generated by Step Functions when
   *       tasks are assigned to a worker, or in the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/input-output-contextobject.html">context object</a> when a
   *       workflow enters a task state. See <a>GetActivityTaskOutput$taskToken</a>.</p>
   */
  taskToken: string | undefined;

  /**
   * <p>The JSON output of the task. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.</p>
   */
  output: string | undefined;
}

export namespace SendTaskSuccessInput {
  export const filterSensitiveLog = (obj: SendTaskSuccessInput): any => ({
    ...obj,
    ...(obj.output && { output: SENSITIVE_STRING }),
  });
}

export interface SendTaskSuccessOutput {}

export namespace SendTaskSuccessOutput {
  export const filterSensitiveLog = (obj: SendTaskSuccessOutput): any => ({
    ...obj,
  });
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

export namespace ExecutionAlreadyExists {
  export const filterSensitiveLog = (obj: ExecutionAlreadyExists): any => ({
    ...obj,
  });
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

export namespace ExecutionLimitExceeded {
  export const filterSensitiveLog = (obj: ExecutionLimitExceeded): any => ({
    ...obj,
  });
}

/**
 * <p>The provided JSON input data is invalid.</p>
 */
export interface InvalidExecutionInput extends __SmithyException, $MetadataBearer {
  name: "InvalidExecutionInput";
  $fault: "client";
  message?: string;
}

export namespace InvalidExecutionInput {
  export const filterSensitiveLog = (obj: InvalidExecutionInput): any => ({
    ...obj,
  });
}

export interface StartExecutionInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the state machine to execute.</p>
   */
  stateMachineArn: string | undefined;

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
   *          <p>To enable logging with CloudWatch Logs, the name should only contain  0-9, A-Z, a-z, - and _.</p>
   */
  name?: string;

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
   *          <p>Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.</p>
   */
  input?: string;

  /**
   * <p>Passes the AWS X-Ray trace header. The trace header can also be passed in the request payload.</p>
   */
  traceHeader?: string;
}

export namespace StartExecutionInput {
  export const filterSensitiveLog = (obj: StartExecutionInput): any => ({
    ...obj,
    ...(obj.input && { input: SENSITIVE_STRING }),
  });
}

export interface StartExecutionOutput {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the execution.</p>
   */
  executionArn: string | undefined;

  /**
   * <p>The date the execution is started.</p>
   */
  startDate: Date | undefined;
}

export namespace StartExecutionOutput {
  export const filterSensitiveLog = (obj: StartExecutionOutput): any => ({
    ...obj,
  });
}

export interface StartSyncExecutionInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the state machine to execute.</p>
   */
  stateMachineArn: string | undefined;

  /**
   * <p>The name of the execution.</p>
   */
  name?: string;

  /**
   * <p>The string that contains the JSON input data for the execution, for example:</p>
   *          <p>
   *             <code>"input": "{\"first_name\" : \"test\"}"</code>
   *          </p>
   *          <note>
   *             <p>If you don't include any JSON input data, you still must include the two braces, for
   *          example: <code>"input": "{}"</code>
   *             </p>
   *          </note>
   *          <p>Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.</p>
   */
  input?: string;

  /**
   * <p>Passes the AWS X-Ray trace header. The trace header can also be passed in the request payload.</p>
   */
  traceHeader?: string;
}

export namespace StartSyncExecutionInput {
  export const filterSensitiveLog = (obj: StartSyncExecutionInput): any => ({
    ...obj,
    ...(obj.input && { input: SENSITIVE_STRING }),
  });
}

/**
 * <p>An object that describes workflow billing details.</p>
 */
export interface BillingDetails {
  /**
   * <p>Billed memory consumption of your workflow, in MB.</p>
   */
  billedMemoryUsedInMB?: number;

  /**
   * <p>Billed duration of your workflow, in milliseconds.</p>
   */
  billedDurationInMilliseconds?: number;
}

export namespace BillingDetails {
  export const filterSensitiveLog = (obj: BillingDetails): any => ({
    ...obj,
  });
}

export type SyncExecutionStatus = "FAILED" | "SUCCEEDED" | "TIMED_OUT";

export interface StartSyncExecutionOutput {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the execution.</p>
   */
  executionArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies the state machine.</p>
   */
  stateMachineArn?: string;

  /**
   * <p>The name of the execution.</p>
   */
  name?: string;

  /**
   * <p>The date the execution is started.</p>
   */
  startDate: Date | undefined;

  /**
   * <p>If the execution has already ended, the date the execution stopped.</p>
   */
  stopDate: Date | undefined;

  /**
   * <p>The current status of the execution.</p>
   */
  status: SyncExecutionStatus | string | undefined;

  /**
   * <p>The error code of the failure.</p>
   */
  error?: string;

  /**
   * <p>A more detailed explanation of the cause of the failure.</p>
   */
  cause?: string;

  /**
   * <p>The string that contains the JSON input data of the execution. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.</p>
   */
  input?: string;

  /**
   * <p>Provides details about execution input or output.</p>
   */
  inputDetails?: CloudWatchEventsExecutionDataDetails;

  /**
   * <p>The JSON output data of the execution. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.</p>
   *          <note>
   *             <p>This field is set only if the execution succeeds. If the execution fails, this field is
   *          null.</p>
   *          </note>
   */
  output?: string;

  /**
   * <p>Provides details about execution input or output.</p>
   */
  outputDetails?: CloudWatchEventsExecutionDataDetails;

  /**
   * <p>The AWS X-Ray trace header that was passed to the execution.</p>
   */
  traceHeader?: string;

  /**
   * <p>An object that describes workflow billing details, including billed duration
   *       and memory use.</p>
   */
  billingDetails?: BillingDetails;
}

export namespace StartSyncExecutionOutput {
  export const filterSensitiveLog = (obj: StartSyncExecutionOutput): any => ({
    ...obj,
    ...(obj.error && { error: SENSITIVE_STRING }),
    ...(obj.cause && { cause: SENSITIVE_STRING }),
    ...(obj.input && { input: SENSITIVE_STRING }),
    ...(obj.output && { output: SENSITIVE_STRING }),
  });
}

export interface StopExecutionInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the execution to stop.</p>
   */
  executionArn: string | undefined;

  /**
   * <p>The error code of the failure.</p>
   */
  error?: string;

  /**
   * <p>A more detailed explanation of the cause of the failure.</p>
   */
  cause?: string;
}

export namespace StopExecutionInput {
  export const filterSensitiveLog = (obj: StopExecutionInput): any => ({
    ...obj,
    ...(obj.error && { error: SENSITIVE_STRING }),
    ...(obj.cause && { cause: SENSITIVE_STRING }),
  });
}

export interface StopExecutionOutput {
  /**
   * <p>The date the execution is stopped.</p>
   */
  stopDate: Date | undefined;
}

export namespace StopExecutionOutput {
  export const filterSensitiveLog = (obj: StopExecutionOutput): any => ({
    ...obj,
  });
}

export interface TagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) for the Step Functions state machine or activity.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The list of tags to add to a resource.</p>
   *          <p>Tags may only contain Unicode letters, digits, white space, or these symbols: <code>_ . : / = + - @</code>.</p>
   */
  tags: Tag[] | undefined;
}

export namespace TagResourceInput {
  export const filterSensitiveLog = (obj: TagResourceInput): any => ({
    ...obj,
  });
}

export interface TagResourceOutput {}

export namespace TagResourceOutput {
  export const filterSensitiveLog = (obj: TagResourceOutput): any => ({
    ...obj,
  });
}

export interface UntagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) for the Step Functions state machine or activity.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The list of tags to remove from the resource.</p>
   */
  tagKeys: string[] | undefined;
}

export namespace UntagResourceInput {
  export const filterSensitiveLog = (obj: UntagResourceInput): any => ({
    ...obj,
  });
}

export interface UntagResourceOutput {}

export namespace UntagResourceOutput {
  export const filterSensitiveLog = (obj: UntagResourceOutput): any => ({
    ...obj,
  });
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

export namespace MissingRequiredParameter {
  export const filterSensitiveLog = (obj: MissingRequiredParameter): any => ({
    ...obj,
  });
}

export interface UpdateStateMachineInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the state machine.</p>
   */
  stateMachineArn: string | undefined;

  /**
   * <p>The Amazon States Language definition of the state machine. See <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html">Amazon States Language</a>.</p>
   */
  definition?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role of the state machine.</p>
   */
  roleArn?: string;

  /**
   * <p>The <code>LoggingConfiguration</code> data type is used to set CloudWatch Logs
   *       options.</p>
   */
  loggingConfiguration?: LoggingConfiguration;

  /**
   * <p>Selects whether AWS X-Ray tracing is enabled.</p>
   */
  tracingConfiguration?: TracingConfiguration;
}

export namespace UpdateStateMachineInput {
  export const filterSensitiveLog = (obj: UpdateStateMachineInput): any => ({
    ...obj,
    ...(obj.definition && { definition: SENSITIVE_STRING }),
  });
}

export interface UpdateStateMachineOutput {
  /**
   * <p>The date and time the state machine was updated.</p>
   */
  updateDate: Date | undefined;
}

export namespace UpdateStateMachineOutput {
  export const filterSensitiveLog = (obj: UpdateStateMachineOutput): any => ({
    ...obj,
  });
}
