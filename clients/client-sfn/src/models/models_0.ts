// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { SFNServiceException as __BaseException } from "./SFNServiceException";

/**
 * <p>The specified activity does not exist.</p>
 */
export class ActivityDoesNotExist extends __BaseException {
  readonly name: "ActivityDoesNotExist" = "ActivityDoesNotExist";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ActivityDoesNotExist, __BaseException>) {
    super({
      name: "ActivityDoesNotExist",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ActivityDoesNotExist.prototype);
  }
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

/**
 * <p>The maximum number of activities has been reached. Existing activities must be deleted
 *       before a new activity can be created.</p>
 */
export class ActivityLimitExceeded extends __BaseException {
  readonly name: "ActivityLimitExceeded" = "ActivityLimitExceeded";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ActivityLimitExceeded, __BaseException>) {
    super({
      name: "ActivityLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ActivityLimitExceeded.prototype);
  }
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

/**
 * <p>The maximum number of workers concurrently polling for activity tasks has been
 *       reached.</p>
 */
export class ActivityWorkerLimitExceeded extends __BaseException {
  readonly name: "ActivityWorkerLimitExceeded" = "ActivityWorkerLimitExceeded";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ActivityWorkerLimitExceeded, __BaseException>) {
    super({
      name: "ActivityWorkerLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ActivityWorkerLimitExceeded.prototype);
  }
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

/**
 * <p>The provided name is invalid.</p>
 */
export class InvalidName extends __BaseException {
  readonly name: "InvalidName" = "InvalidName";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidName, __BaseException>) {
    super({
      name: "InvalidName",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidName.prototype);
  }
}

/**
 * <p>You've exceeded the number of tags allowed for a resource. See the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/limits.html"> Limits Topic</a> in the
 *       AWS Step Functions Developer Guide.</p>
 */
export class TooManyTags extends __BaseException {
  readonly name: "TooManyTags" = "TooManyTags";
  readonly $fault: "client" = "client";
  resourceName?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTags, __BaseException>) {
    super({
      name: "TooManyTags",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTags.prototype);
    this.resourceName = opts.resourceName;
  }
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

/**
 * <p></p>
 */
export interface LogDestination {
  /**
   * <p>An object describing a CloudWatch log group. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loggroup.html">AWS::Logs::LogGroup</a> in the AWS CloudFormation User Guide.</p>
   */
  cloudWatchLogsLogGroup?: CloudWatchLogsLogGroup;
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

/**
 * <p>The provided Amazon Resource Name (ARN) is invalid.</p>
 */
export class InvalidArn extends __BaseException {
  readonly name: "InvalidArn" = "InvalidArn";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidArn, __BaseException>) {
    super({
      name: "InvalidArn",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidArn.prototype);
  }
}

/**
 * <p>The provided Amazon States Language definition is invalid.</p>
 */
export class InvalidDefinition extends __BaseException {
  readonly name: "InvalidDefinition" = "InvalidDefinition";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDefinition, __BaseException>) {
    super({
      name: "InvalidDefinition",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDefinition.prototype);
  }
}

/**
 * <p></p>
 */
export class InvalidLoggingConfiguration extends __BaseException {
  readonly name: "InvalidLoggingConfiguration" = "InvalidLoggingConfiguration";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidLoggingConfiguration, __BaseException>) {
    super({
      name: "InvalidLoggingConfiguration",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidLoggingConfiguration.prototype);
  }
}

/**
 * <p>Your <code>tracingConfiguration</code> key does not match, or <code>enabled</code> has not been set to <code>true</code> or <code>false</code>.</p>
 */
export class InvalidTracingConfiguration extends __BaseException {
  readonly name: "InvalidTracingConfiguration" = "InvalidTracingConfiguration";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTracingConfiguration, __BaseException>) {
    super({
      name: "InvalidTracingConfiguration",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTracingConfiguration.prototype);
  }
}

/**
 * <p>A state machine with the same name but a different definition or role ARN already
 *       exists.</p>
 */
export class StateMachineAlreadyExists extends __BaseException {
  readonly name: "StateMachineAlreadyExists" = "StateMachineAlreadyExists";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StateMachineAlreadyExists, __BaseException>) {
    super({
      name: "StateMachineAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StateMachineAlreadyExists.prototype);
  }
}

/**
 * <p>The specified state machine is being deleted.</p>
 */
export class StateMachineDeleting extends __BaseException {
  readonly name: "StateMachineDeleting" = "StateMachineDeleting";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StateMachineDeleting, __BaseException>) {
    super({
      name: "StateMachineDeleting",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StateMachineDeleting.prototype);
  }
}

/**
 * <p>The maximum number of state machines has been reached. Existing state machines must be
 *       deleted before a new state machine can be created.</p>
 */
export class StateMachineLimitExceeded extends __BaseException {
  readonly name: "StateMachineLimitExceeded" = "StateMachineLimitExceeded";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StateMachineLimitExceeded, __BaseException>) {
    super({
      name: "StateMachineLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StateMachineLimitExceeded.prototype);
  }
}

/**
 * <p></p>
 */
export class StateMachineTypeNotSupported extends __BaseException {
  readonly name: "StateMachineTypeNotSupported" = "StateMachineTypeNotSupported";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StateMachineTypeNotSupported, __BaseException>) {
    super({
      name: "StateMachineTypeNotSupported",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StateMachineTypeNotSupported.prototype);
  }
}

export interface DeleteActivityInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the activity to delete.</p>
   */
  activityArn: string | undefined;
}

export interface DeleteActivityOutput {}

export interface DeleteStateMachineInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the state machine to delete.</p>
   */
  stateMachineArn: string | undefined;
}

export interface DeleteStateMachineOutput {}

export interface DescribeActivityInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the activity to describe.</p>
   */
  activityArn: string | undefined;
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

export interface DescribeExecutionInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the execution to describe.</p>
   */
  executionArn: string | undefined;
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

/**
 * <p>The specified execution does not exist.</p>
 */
export class ExecutionDoesNotExist extends __BaseException {
  readonly name: "ExecutionDoesNotExist" = "ExecutionDoesNotExist";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ExecutionDoesNotExist, __BaseException>) {
    super({
      name: "ExecutionDoesNotExist",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ExecutionDoesNotExist.prototype);
  }
}

export interface DescribeStateMachineInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the state machine to describe.</p>
   */
  stateMachineArn: string | undefined;
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

/**
 * <p>The specified state machine does not exist.</p>
 */
export class StateMachineDoesNotExist extends __BaseException {
  readonly name: "StateMachineDoesNotExist" = "StateMachineDoesNotExist";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StateMachineDoesNotExist, __BaseException>) {
    super({
      name: "StateMachineDoesNotExist",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StateMachineDoesNotExist.prototype);
  }
}

export interface DescribeStateMachineForExecutionInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the execution you want state machine information for.</p>
   */
  executionArn: string | undefined;
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

/**
 * <p>Details about a Map state that was started.</p>
 */
export interface MapStateStartedEventDetails {
  /**
   * <p>The size of the array for Map state iterations.</p>
   */
  length?: number;
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

/**
 * <p>The provided token is invalid.</p>
 */
export class InvalidToken extends __BaseException {
  readonly name: "InvalidToken" = "InvalidToken";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidToken, __BaseException>) {
    super({
      name: "InvalidToken",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidToken.prototype);
  }
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

export interface ListStateMachinesOutput {
  stateMachines: StateMachineListItem[] | undefined;
  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
   *     Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p>
   */
  nextToken?: string;
}

export interface ListTagsForResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) for the Step Functions state machine or activity.</p>
   */
  resourceArn: string | undefined;
}

export interface ListTagsForResourceOutput {
  /**
   * <p>An array of tags associated with the resource.</p>
   */
  tags?: Tag[];
}

/**
 * <p>Could not find the referenced resource. Only state machine and activity ARNs are
 *       supported.</p>
 */
export class ResourceNotFound extends __BaseException {
  readonly name: "ResourceNotFound" = "ResourceNotFound";
  readonly $fault: "client" = "client";
  resourceName?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFound, __BaseException>) {
    super({
      name: "ResourceNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFound.prototype);
    this.resourceName = opts.resourceName;
  }
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

export interface SendTaskFailureOutput {}

export class TaskDoesNotExist extends __BaseException {
  readonly name: "TaskDoesNotExist" = "TaskDoesNotExist";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TaskDoesNotExist, __BaseException>) {
    super({
      name: "TaskDoesNotExist",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TaskDoesNotExist.prototype);
  }
}

export class TaskTimedOut extends __BaseException {
  readonly name: "TaskTimedOut" = "TaskTimedOut";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TaskTimedOut, __BaseException>) {
    super({
      name: "TaskTimedOut",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TaskTimedOut.prototype);
  }
}

export interface SendTaskHeartbeatInput {
  /**
   * <p>The token that represents this task. Task tokens are generated by Step Functions when
   *       tasks are assigned to a worker, or in the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/input-output-contextobject.html">context object</a> when a
   *       workflow enters a task state. See <a>GetActivityTaskOutput$taskToken</a>.</p>
   */
  taskToken: string | undefined;
}

export interface SendTaskHeartbeatOutput {}

/**
 * <p>The provided JSON output data is invalid.</p>
 */
export class InvalidOutput extends __BaseException {
  readonly name: "InvalidOutput" = "InvalidOutput";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidOutput, __BaseException>) {
    super({
      name: "InvalidOutput",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidOutput.prototype);
  }
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

export interface SendTaskSuccessOutput {}

/**
 * <p>The execution has the same <code>name</code> as another execution (but a different
 *         <code>input</code>).</p>
 *          <note>
 *             <p>Executions with the same <code>name</code> and <code>input</code> are considered
 *         idempotent.</p>
 *          </note>
 */
export class ExecutionAlreadyExists extends __BaseException {
  readonly name: "ExecutionAlreadyExists" = "ExecutionAlreadyExists";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ExecutionAlreadyExists, __BaseException>) {
    super({
      name: "ExecutionAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ExecutionAlreadyExists.prototype);
  }
}

/**
 * <p>The maximum number of running executions has been reached. Running executions must end or
 *       be stopped before a new execution can be started.</p>
 */
export class ExecutionLimitExceeded extends __BaseException {
  readonly name: "ExecutionLimitExceeded" = "ExecutionLimitExceeded";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ExecutionLimitExceeded, __BaseException>) {
    super({
      name: "ExecutionLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ExecutionLimitExceeded.prototype);
  }
}

/**
 * <p>The provided JSON input data is invalid.</p>
 */
export class InvalidExecutionInput extends __BaseException {
  readonly name: "InvalidExecutionInput" = "InvalidExecutionInput";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidExecutionInput, __BaseException>) {
    super({
      name: "InvalidExecutionInput",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidExecutionInput.prototype);
  }
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

export interface StopExecutionOutput {
  /**
   * <p>The date the execution is stopped.</p>
   */
  stopDate: Date | undefined;
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

export interface TagResourceOutput {}

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

export interface UntagResourceOutput {}

/**
 * <p>Request is missing a required parameter. This error occurs if both <code>definition</code>
 *       and <code>roleArn</code> are not specified.</p>
 */
export class MissingRequiredParameter extends __BaseException {
  readonly name: "MissingRequiredParameter" = "MissingRequiredParameter";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MissingRequiredParameter, __BaseException>) {
    super({
      name: "MissingRequiredParameter",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MissingRequiredParameter.prototype);
  }
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

export interface UpdateStateMachineOutput {
  /**
   * <p>The date and time the state machine was updated.</p>
   */
  updateDate: Date | undefined;
}

/**
 * @internal
 */
export const ActivityFailedEventDetailsFilterSensitiveLog = (obj: ActivityFailedEventDetails): any => ({
  ...obj,
  ...(obj.error && { error: SENSITIVE_STRING }),
  ...(obj.cause && { cause: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ActivityListItemFilterSensitiveLog = (obj: ActivityListItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HistoryEventExecutionDataDetailsFilterSensitiveLog = (obj: HistoryEventExecutionDataDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActivityScheduledEventDetailsFilterSensitiveLog = (obj: ActivityScheduledEventDetails): any => ({
  ...obj,
  ...(obj.input && { input: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ActivityScheduleFailedEventDetailsFilterSensitiveLog = (obj: ActivityScheduleFailedEventDetails): any => ({
  ...obj,
  ...(obj.error && { error: SENSITIVE_STRING }),
  ...(obj.cause && { cause: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ActivityStartedEventDetailsFilterSensitiveLog = (obj: ActivityStartedEventDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActivitySucceededEventDetailsFilterSensitiveLog = (obj: ActivitySucceededEventDetails): any => ({
  ...obj,
  ...(obj.output && { output: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ActivityTimedOutEventDetailsFilterSensitiveLog = (obj: ActivityTimedOutEventDetails): any => ({
  ...obj,
  ...(obj.error && { error: SENSITIVE_STRING }),
  ...(obj.cause && { cause: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateActivityInputFilterSensitiveLog = (obj: CreateActivityInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateActivityOutputFilterSensitiveLog = (obj: CreateActivityOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CloudWatchLogsLogGroupFilterSensitiveLog = (obj: CloudWatchLogsLogGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LogDestinationFilterSensitiveLog = (obj: LogDestination): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoggingConfigurationFilterSensitiveLog = (obj: LoggingConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TracingConfigurationFilterSensitiveLog = (obj: TracingConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateStateMachineInputFilterSensitiveLog = (obj: CreateStateMachineInput): any => ({
  ...obj,
  ...(obj.definition && { definition: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateStateMachineOutputFilterSensitiveLog = (obj: CreateStateMachineOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteActivityInputFilterSensitiveLog = (obj: DeleteActivityInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteActivityOutputFilterSensitiveLog = (obj: DeleteActivityOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteStateMachineInputFilterSensitiveLog = (obj: DeleteStateMachineInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteStateMachineOutputFilterSensitiveLog = (obj: DeleteStateMachineOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeActivityInputFilterSensitiveLog = (obj: DescribeActivityInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeActivityOutputFilterSensitiveLog = (obj: DescribeActivityOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeExecutionInputFilterSensitiveLog = (obj: DescribeExecutionInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CloudWatchEventsExecutionDataDetailsFilterSensitiveLog = (
  obj: CloudWatchEventsExecutionDataDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeExecutionOutputFilterSensitiveLog = (obj: DescribeExecutionOutput): any => ({
  ...obj,
  ...(obj.input && { input: SENSITIVE_STRING }),
  ...(obj.output && { output: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeStateMachineInputFilterSensitiveLog = (obj: DescribeStateMachineInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeStateMachineOutputFilterSensitiveLog = (obj: DescribeStateMachineOutput): any => ({
  ...obj,
  ...(obj.definition && { definition: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeStateMachineForExecutionInputFilterSensitiveLog = (
  obj: DescribeStateMachineForExecutionInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeStateMachineForExecutionOutputFilterSensitiveLog = (
  obj: DescribeStateMachineForExecutionOutput
): any => ({
  ...obj,
  ...(obj.definition && { definition: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetActivityTaskInputFilterSensitiveLog = (obj: GetActivityTaskInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetActivityTaskOutputFilterSensitiveLog = (obj: GetActivityTaskOutput): any => ({
  ...obj,
  ...(obj.input && { input: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetExecutionHistoryInputFilterSensitiveLog = (obj: GetExecutionHistoryInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExecutionAbortedEventDetailsFilterSensitiveLog = (obj: ExecutionAbortedEventDetails): any => ({
  ...obj,
  ...(obj.error && { error: SENSITIVE_STRING }),
  ...(obj.cause && { cause: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ExecutionFailedEventDetailsFilterSensitiveLog = (obj: ExecutionFailedEventDetails): any => ({
  ...obj,
  ...(obj.error && { error: SENSITIVE_STRING }),
  ...(obj.cause && { cause: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ExecutionStartedEventDetailsFilterSensitiveLog = (obj: ExecutionStartedEventDetails): any => ({
  ...obj,
  ...(obj.input && { input: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ExecutionSucceededEventDetailsFilterSensitiveLog = (obj: ExecutionSucceededEventDetails): any => ({
  ...obj,
  ...(obj.output && { output: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ExecutionTimedOutEventDetailsFilterSensitiveLog = (obj: ExecutionTimedOutEventDetails): any => ({
  ...obj,
  ...(obj.error && { error: SENSITIVE_STRING }),
  ...(obj.cause && { cause: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const LambdaFunctionFailedEventDetailsFilterSensitiveLog = (obj: LambdaFunctionFailedEventDetails): any => ({
  ...obj,
  ...(obj.error && { error: SENSITIVE_STRING }),
  ...(obj.cause && { cause: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const LambdaFunctionScheduledEventDetailsFilterSensitiveLog = (
  obj: LambdaFunctionScheduledEventDetails
): any => ({
  ...obj,
  ...(obj.input && { input: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const LambdaFunctionScheduleFailedEventDetailsFilterSensitiveLog = (
  obj: LambdaFunctionScheduleFailedEventDetails
): any => ({
  ...obj,
  ...(obj.error && { error: SENSITIVE_STRING }),
  ...(obj.cause && { cause: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const LambdaFunctionStartFailedEventDetailsFilterSensitiveLog = (
  obj: LambdaFunctionStartFailedEventDetails
): any => ({
  ...obj,
  ...(obj.error && { error: SENSITIVE_STRING }),
  ...(obj.cause && { cause: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const LambdaFunctionSucceededEventDetailsFilterSensitiveLog = (
  obj: LambdaFunctionSucceededEventDetails
): any => ({
  ...obj,
  ...(obj.output && { output: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const LambdaFunctionTimedOutEventDetailsFilterSensitiveLog = (obj: LambdaFunctionTimedOutEventDetails): any => ({
  ...obj,
  ...(obj.error && { error: SENSITIVE_STRING }),
  ...(obj.cause && { cause: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const MapIterationEventDetailsFilterSensitiveLog = (obj: MapIterationEventDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MapStateStartedEventDetailsFilterSensitiveLog = (obj: MapStateStartedEventDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StateEnteredEventDetailsFilterSensitiveLog = (obj: StateEnteredEventDetails): any => ({
  ...obj,
  ...(obj.input && { input: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StateExitedEventDetailsFilterSensitiveLog = (obj: StateExitedEventDetails): any => ({
  ...obj,
  ...(obj.output && { output: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TaskFailedEventDetailsFilterSensitiveLog = (obj: TaskFailedEventDetails): any => ({
  ...obj,
  ...(obj.error && { error: SENSITIVE_STRING }),
  ...(obj.cause && { cause: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TaskScheduledEventDetailsFilterSensitiveLog = (obj: TaskScheduledEventDetails): any => ({
  ...obj,
  ...(obj.parameters && { parameters: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TaskStartedEventDetailsFilterSensitiveLog = (obj: TaskStartedEventDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TaskStartFailedEventDetailsFilterSensitiveLog = (obj: TaskStartFailedEventDetails): any => ({
  ...obj,
  ...(obj.error && { error: SENSITIVE_STRING }),
  ...(obj.cause && { cause: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TaskSubmitFailedEventDetailsFilterSensitiveLog = (obj: TaskSubmitFailedEventDetails): any => ({
  ...obj,
  ...(obj.error && { error: SENSITIVE_STRING }),
  ...(obj.cause && { cause: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TaskSubmittedEventDetailsFilterSensitiveLog = (obj: TaskSubmittedEventDetails): any => ({
  ...obj,
  ...(obj.output && { output: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TaskSucceededEventDetailsFilterSensitiveLog = (obj: TaskSucceededEventDetails): any => ({
  ...obj,
  ...(obj.output && { output: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TaskTimedOutEventDetailsFilterSensitiveLog = (obj: TaskTimedOutEventDetails): any => ({
  ...obj,
  ...(obj.error && { error: SENSITIVE_STRING }),
  ...(obj.cause && { cause: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const HistoryEventFilterSensitiveLog = (obj: HistoryEvent): any => ({
  ...obj,
  ...(obj.activityFailedEventDetails && {
    activityFailedEventDetails: ActivityFailedEventDetailsFilterSensitiveLog(obj.activityFailedEventDetails),
  }),
  ...(obj.activityScheduleFailedEventDetails && {
    activityScheduleFailedEventDetails: ActivityScheduleFailedEventDetailsFilterSensitiveLog(
      obj.activityScheduleFailedEventDetails
    ),
  }),
  ...(obj.activityScheduledEventDetails && {
    activityScheduledEventDetails: ActivityScheduledEventDetailsFilterSensitiveLog(obj.activityScheduledEventDetails),
  }),
  ...(obj.activitySucceededEventDetails && {
    activitySucceededEventDetails: ActivitySucceededEventDetailsFilterSensitiveLog(obj.activitySucceededEventDetails),
  }),
  ...(obj.activityTimedOutEventDetails && {
    activityTimedOutEventDetails: ActivityTimedOutEventDetailsFilterSensitiveLog(obj.activityTimedOutEventDetails),
  }),
  ...(obj.taskFailedEventDetails && {
    taskFailedEventDetails: TaskFailedEventDetailsFilterSensitiveLog(obj.taskFailedEventDetails),
  }),
  ...(obj.taskScheduledEventDetails && {
    taskScheduledEventDetails: TaskScheduledEventDetailsFilterSensitiveLog(obj.taskScheduledEventDetails),
  }),
  ...(obj.taskStartFailedEventDetails && {
    taskStartFailedEventDetails: TaskStartFailedEventDetailsFilterSensitiveLog(obj.taskStartFailedEventDetails),
  }),
  ...(obj.taskSubmitFailedEventDetails && {
    taskSubmitFailedEventDetails: TaskSubmitFailedEventDetailsFilterSensitiveLog(obj.taskSubmitFailedEventDetails),
  }),
  ...(obj.taskSubmittedEventDetails && {
    taskSubmittedEventDetails: TaskSubmittedEventDetailsFilterSensitiveLog(obj.taskSubmittedEventDetails),
  }),
  ...(obj.taskSucceededEventDetails && {
    taskSucceededEventDetails: TaskSucceededEventDetailsFilterSensitiveLog(obj.taskSucceededEventDetails),
  }),
  ...(obj.taskTimedOutEventDetails && {
    taskTimedOutEventDetails: TaskTimedOutEventDetailsFilterSensitiveLog(obj.taskTimedOutEventDetails),
  }),
  ...(obj.executionFailedEventDetails && {
    executionFailedEventDetails: ExecutionFailedEventDetailsFilterSensitiveLog(obj.executionFailedEventDetails),
  }),
  ...(obj.executionStartedEventDetails && {
    executionStartedEventDetails: ExecutionStartedEventDetailsFilterSensitiveLog(obj.executionStartedEventDetails),
  }),
  ...(obj.executionSucceededEventDetails && {
    executionSucceededEventDetails: ExecutionSucceededEventDetailsFilterSensitiveLog(
      obj.executionSucceededEventDetails
    ),
  }),
  ...(obj.executionAbortedEventDetails && {
    executionAbortedEventDetails: ExecutionAbortedEventDetailsFilterSensitiveLog(obj.executionAbortedEventDetails),
  }),
  ...(obj.executionTimedOutEventDetails && {
    executionTimedOutEventDetails: ExecutionTimedOutEventDetailsFilterSensitiveLog(obj.executionTimedOutEventDetails),
  }),
  ...(obj.lambdaFunctionFailedEventDetails && {
    lambdaFunctionFailedEventDetails: LambdaFunctionFailedEventDetailsFilterSensitiveLog(
      obj.lambdaFunctionFailedEventDetails
    ),
  }),
  ...(obj.lambdaFunctionScheduleFailedEventDetails && {
    lambdaFunctionScheduleFailedEventDetails: LambdaFunctionScheduleFailedEventDetailsFilterSensitiveLog(
      obj.lambdaFunctionScheduleFailedEventDetails
    ),
  }),
  ...(obj.lambdaFunctionScheduledEventDetails && {
    lambdaFunctionScheduledEventDetails: LambdaFunctionScheduledEventDetailsFilterSensitiveLog(
      obj.lambdaFunctionScheduledEventDetails
    ),
  }),
  ...(obj.lambdaFunctionStartFailedEventDetails && {
    lambdaFunctionStartFailedEventDetails: LambdaFunctionStartFailedEventDetailsFilterSensitiveLog(
      obj.lambdaFunctionStartFailedEventDetails
    ),
  }),
  ...(obj.lambdaFunctionSucceededEventDetails && {
    lambdaFunctionSucceededEventDetails: LambdaFunctionSucceededEventDetailsFilterSensitiveLog(
      obj.lambdaFunctionSucceededEventDetails
    ),
  }),
  ...(obj.lambdaFunctionTimedOutEventDetails && {
    lambdaFunctionTimedOutEventDetails: LambdaFunctionTimedOutEventDetailsFilterSensitiveLog(
      obj.lambdaFunctionTimedOutEventDetails
    ),
  }),
  ...(obj.stateEnteredEventDetails && {
    stateEnteredEventDetails: StateEnteredEventDetailsFilterSensitiveLog(obj.stateEnteredEventDetails),
  }),
  ...(obj.stateExitedEventDetails && {
    stateExitedEventDetails: StateExitedEventDetailsFilterSensitiveLog(obj.stateExitedEventDetails),
  }),
});

/**
 * @internal
 */
export const GetExecutionHistoryOutputFilterSensitiveLog = (obj: GetExecutionHistoryOutput): any => ({
  ...obj,
  ...(obj.events && { events: obj.events.map((item) => HistoryEventFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListActivitiesInputFilterSensitiveLog = (obj: ListActivitiesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListActivitiesOutputFilterSensitiveLog = (obj: ListActivitiesOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListExecutionsInputFilterSensitiveLog = (obj: ListExecutionsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExecutionListItemFilterSensitiveLog = (obj: ExecutionListItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListExecutionsOutputFilterSensitiveLog = (obj: ListExecutionsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListStateMachinesInputFilterSensitiveLog = (obj: ListStateMachinesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StateMachineListItemFilterSensitiveLog = (obj: StateMachineListItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListStateMachinesOutputFilterSensitiveLog = (obj: ListStateMachinesOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceInputFilterSensitiveLog = (obj: ListTagsForResourceInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceOutputFilterSensitiveLog = (obj: ListTagsForResourceOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SendTaskFailureInputFilterSensitiveLog = (obj: SendTaskFailureInput): any => ({
  ...obj,
  ...(obj.error && { error: SENSITIVE_STRING }),
  ...(obj.cause && { cause: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SendTaskFailureOutputFilterSensitiveLog = (obj: SendTaskFailureOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SendTaskHeartbeatInputFilterSensitiveLog = (obj: SendTaskHeartbeatInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SendTaskHeartbeatOutputFilterSensitiveLog = (obj: SendTaskHeartbeatOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SendTaskSuccessInputFilterSensitiveLog = (obj: SendTaskSuccessInput): any => ({
  ...obj,
  ...(obj.output && { output: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SendTaskSuccessOutputFilterSensitiveLog = (obj: SendTaskSuccessOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartExecutionInputFilterSensitiveLog = (obj: StartExecutionInput): any => ({
  ...obj,
  ...(obj.input && { input: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StartExecutionOutputFilterSensitiveLog = (obj: StartExecutionOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartSyncExecutionInputFilterSensitiveLog = (obj: StartSyncExecutionInput): any => ({
  ...obj,
  ...(obj.input && { input: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const BillingDetailsFilterSensitiveLog = (obj: BillingDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartSyncExecutionOutputFilterSensitiveLog = (obj: StartSyncExecutionOutput): any => ({
  ...obj,
  ...(obj.error && { error: SENSITIVE_STRING }),
  ...(obj.cause && { cause: SENSITIVE_STRING }),
  ...(obj.input && { input: SENSITIVE_STRING }),
  ...(obj.output && { output: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StopExecutionInputFilterSensitiveLog = (obj: StopExecutionInput): any => ({
  ...obj,
  ...(obj.error && { error: SENSITIVE_STRING }),
  ...(obj.cause && { cause: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StopExecutionOutputFilterSensitiveLog = (obj: StopExecutionOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceInputFilterSensitiveLog = (obj: TagResourceInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceOutputFilterSensitiveLog = (obj: TagResourceOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceInputFilterSensitiveLog = (obj: UntagResourceInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceOutputFilterSensitiveLog = (obj: UntagResourceOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateStateMachineInputFilterSensitiveLog = (obj: UpdateStateMachineInput): any => ({
  ...obj,
  ...(obj.definition && { definition: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateStateMachineOutputFilterSensitiveLog = (obj: UpdateStateMachineOutput): any => ({
  ...obj,
});
