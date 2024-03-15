// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { SFNServiceException as __BaseException } from "./SFNServiceException";

/**
 * <p>The specified activity does not exist.</p>
 * @public
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
 * @public
 */
export interface ActivityFailedEventDetails {
  /**
   * <p>The error code of the failure.</p>
   * @public
   */
  error?: string;

  /**
   * <p>A more detailed explanation of the cause of the failure.</p>
   * @public
   */
  cause?: string;
}

/**
 * <p>The maximum number of activities has been reached. Existing activities must be deleted
 *       before a new activity can be created.</p>
 * @public
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
 * @public
 */
export interface ActivityListItem {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the activity.</p>
   * @public
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
   *                <p>brackets <code>< > \{ \} [ ]</code>
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
   * @public
   */
  name: string | undefined;

  /**
   * <p>The date the activity is created.</p>
   * @public
   */
  creationDate: Date | undefined;
}

/**
 * <p>Provides details about input or output in an execution history event.</p>
 * @public
 */
export interface HistoryEventExecutionDataDetails {
  /**
   * <p>Indicates whether input or output was truncated in the response. Always <code>false</code>
   *       for API calls.</p>
   * @public
   */
  truncated?: boolean;
}

/**
 * <p>Contains details about an activity scheduled during an execution.</p>
 * @public
 */
export interface ActivityScheduledEventDetails {
  /**
   * <p>The Amazon Resource Name (ARN) of the scheduled activity.</p>
   * @public
   */
  resource: string | undefined;

  /**
   * <p>The JSON data input to the activity task. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.</p>
   * @public
   */
  input?: string;

  /**
   * <p>Contains details about the input for an execution history event.</p>
   * @public
   */
  inputDetails?: HistoryEventExecutionDataDetails;

  /**
   * <p>The maximum allowed duration of the activity task.</p>
   * @public
   */
  timeoutInSeconds?: number;

  /**
   * <p>The maximum allowed duration between two heartbeats for the activity task.</p>
   * @public
   */
  heartbeatInSeconds?: number;
}

/**
 * <p>Contains details about an activity schedule failure that occurred during an
 *       execution.</p>
 * @public
 */
export interface ActivityScheduleFailedEventDetails {
  /**
   * <p>The error code of the failure.</p>
   * @public
   */
  error?: string;

  /**
   * <p>A more detailed explanation of the cause of the failure.</p>
   * @public
   */
  cause?: string;
}

/**
 * <p>Contains details about the start of an activity during an execution.</p>
 * @public
 */
export interface ActivityStartedEventDetails {
  /**
   * <p>The name of the worker that the task is assigned to. These names are provided by the
   *       workers when calling <a>GetActivityTask</a>.</p>
   * @public
   */
  workerName?: string;
}

/**
 * <p>Contains details about an activity that successfully terminated during an
 *       execution.</p>
 * @public
 */
export interface ActivitySucceededEventDetails {
  /**
   * <p>The JSON data output by the activity task. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.</p>
   * @public
   */
  output?: string;

  /**
   * <p>Contains details about the output of an execution history event.</p>
   * @public
   */
  outputDetails?: HistoryEventExecutionDataDetails;
}

/**
 * <p>Contains details about an activity timeout that occurred during an execution.</p>
 * @public
 */
export interface ActivityTimedOutEventDetails {
  /**
   * <p>The error code of the failure.</p>
   * @public
   */
  error?: string;

  /**
   * <p>A more detailed explanation of the cause of the timeout.</p>
   * @public
   */
  cause?: string;
}

/**
 * <p>The maximum number of workers concurrently polling for activity tasks has been
 *       reached.</p>
 * @public
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
 *       Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management User
 *         Guide</i>, and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_iam-tags.html">Controlling Access Using IAM
 *           Tags</a>.</p>
 *          <p>Tags may only contain Unicode letters, digits, white space, or these symbols: <code>_ . : / = + - @</code>.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The key of a tag.</p>
   * @public
   */
  key?: string;

  /**
   * <p>The value of a tag.</p>
   * @public
   */
  value?: string;
}

/**
 * @public
 */
export interface CreateActivityInput {
  /**
   * <p>The name of the activity to create. This name must be unique for your Amazon Web Services account and region for 90 days. For more information,
   *     see <a href="https://docs.aws.amazon.com/step-functions/latest/dg/limits.html#service-limits-state-machine-executions">
   *     Limits Related to State Machine Executions</a> in the <i>Step Functions Developer Guide</i>.</p>
   *          <p>A name must <i>not</i> contain:</p>
   *          <ul>
   *             <li>
   *                <p>white space</p>
   *             </li>
   *             <li>
   *                <p>brackets <code>< > \{ \} [ ]</code>
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
   * @public
   */
  name: string | undefined;

  /**
   * <p>The list of tags to add to a resource.</p>
   *          <p>An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using
   *       Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management User
   *         Guide</i>, and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_iam-tags.html">Controlling Access Using IAM
   *           Tags</a>.</p>
   *          <p>Tags may only contain Unicode letters, digits, white space, or these symbols: <code>_ . : / = + - @</code>.</p>
   * @public
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface CreateActivityOutput {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the created activity.</p>
   * @public
   */
  activityArn: string | undefined;

  /**
   * <p>The date the activity is created.</p>
   * @public
   */
  creationDate: Date | undefined;
}

/**
 * <p>The provided name is not valid.</p>
 * @public
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
 *       Step Functions Developer Guide.</p>
 * @public
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
 * <p>Updating or deleting a resource can cause an inconsistent state. This error occurs when there're concurrent requests for <a>DeleteStateMachineVersion</a>, <a>PublishStateMachineVersion</a>, or <a>UpdateStateMachine</a> with the <code>publish</code> parameter set to <code>true</code>.</p>
 *          <p>HTTP Status Code: 409</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
  }
}

/**
 * <p></p>
 * @public
 */
export interface CloudWatchLogsLogGroup {
  /**
   * <p>The ARN of the the CloudWatch log group to which you want your logs emitted to. The ARN
   *       must end with <code>:*</code>
   *          </p>
   * @public
   */
  logGroupArn?: string;
}

/**
 * <p></p>
 * @public
 */
export interface LogDestination {
  /**
   * <p>An object describing a CloudWatch log group. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loggroup.html">AWS::Logs::LogGroup</a> in the CloudFormation User Guide.</p>
   * @public
   */
  cloudWatchLogsLogGroup?: CloudWatchLogsLogGroup;
}

/**
 * @public
 * @enum
 */
export const LogLevel = {
  ALL: "ALL",
  ERROR: "ERROR",
  FATAL: "FATAL",
  OFF: "OFF",
} as const;

/**
 * @public
 */
export type LogLevel = (typeof LogLevel)[keyof typeof LogLevel];

/**
 * <p>The <code>LoggingConfiguration</code> data type is used to set CloudWatch Logs
 *       options.</p>
 * @public
 */
export interface LoggingConfiguration {
  /**
   * <p>Defines which category of execution history events are logged.</p>
   * @public
   */
  level?: LogLevel;

  /**
   * <p>Determines whether execution data is included in your log. When set to <code>false</code>,
   *       data is excluded.</p>
   * @public
   */
  includeExecutionData?: boolean;

  /**
   * <p>An array of objects that describes where your execution history events will be logged.
   *       Limited to size 1. Required, if your log level is not set to <code>OFF</code>.</p>
   * @public
   */
  destinations?: LogDestination[];
}

/**
 * <p>Selects whether or not the state machine's X-Ray tracing is enabled. Default is
 *         <code>false</code>
 *          </p>
 * @public
 */
export interface TracingConfiguration {
  /**
   * <p>When set to <code>true</code>, X-Ray tracing is enabled.</p>
   * @public
   */
  enabled?: boolean;
}

/**
 * @public
 * @enum
 */
export const StateMachineType = {
  EXPRESS: "EXPRESS",
  STANDARD: "STANDARD",
} as const;

/**
 * @public
 */
export type StateMachineType = (typeof StateMachineType)[keyof typeof StateMachineType];

/**
 * @public
 */
export interface CreateStateMachineInput {
  /**
   * <p>The name of the state machine. </p>
   *          <p>A name must <i>not</i> contain:</p>
   *          <ul>
   *             <li>
   *                <p>white space</p>
   *             </li>
   *             <li>
   *                <p>brackets <code>< > \{ \} [ ]</code>
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
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon States Language definition of the state machine. See <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html">Amazon States Language</a>.</p>
   * @public
   */
  definition: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to use for this state machine.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>Determines whether a Standard or Express state machine is created. The default is
   *         <code>STANDARD</code>. You cannot update the <code>type</code> of a state machine once it
   *       has been created.</p>
   * @public
   */
  type?: StateMachineType;

  /**
   * <p>Defines what execution history events are logged and where they are logged.</p>
   *          <note>
   *             <p>By default, the <code>level</code> is set to <code>OFF</code>. For more information see
   *           <a href="https://docs.aws.amazon.com/step-functions/latest/dg/cloudwatch-log-level.html">Log
   *           Levels</a> in the Step Functions User Guide.</p>
   *          </note>
   * @public
   */
  loggingConfiguration?: LoggingConfiguration;

  /**
   * <p>Tags to be added when creating a state machine.</p>
   *          <p>An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using
   *       Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management User
   *         Guide</i>, and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_iam-tags.html">Controlling Access Using IAM
   *           Tags</a>.</p>
   *          <p>Tags may only contain Unicode letters, digits, white space, or these symbols: <code>_ . : / = + - @</code>.</p>
   * @public
   */
  tags?: Tag[];

  /**
   * <p>Selects whether X-Ray tracing is enabled.</p>
   * @public
   */
  tracingConfiguration?: TracingConfiguration;

  /**
   * <p>Set to <code>true</code> to publish the first version of the state machine during creation. The default is <code>false</code>.</p>
   * @public
   */
  publish?: boolean;

  /**
   * <p>Sets description about the state machine version. You can only set the description if the <code>publish</code> parameter is set to <code>true</code>. Otherwise, if you set <code>versionDescription</code>, but <code>publish</code> to <code>false</code>, this API action throws <code>ValidationException</code>.</p>
   * @public
   */
  versionDescription?: string;
}

/**
 * @public
 */
export interface CreateStateMachineOutput {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the created state machine.</p>
   * @public
   */
  stateMachineArn: string | undefined;

  /**
   * <p>The date the state machine is created.</p>
   * @public
   */
  creationDate: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies the created state machine version. If you do not set the <code>publish</code> parameter to <code>true</code>, this field returns null value.</p>
   * @public
   */
  stateMachineVersionArn?: string;
}

/**
 * <p>The provided Amazon Resource Name (ARN) is not valid.</p>
 * @public
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
 * <p>The provided Amazon States Language definition is not valid.</p>
 * @public
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
 * @public
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
 * <p>Your <code>tracingConfiguration</code> key does not match, or <code>enabled</code> has not
 *       been set to <code>true</code> or <code>false</code>.</p>
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  API_DOES_NOT_SUPPORT_LABELED_ARNS: "API_DOES_NOT_SUPPORT_LABELED_ARNS",
  CANNOT_UPDATE_COMPLETED_MAP_RUN: "CANNOT_UPDATE_COMPLETED_MAP_RUN",
  INVALID_ROUTING_CONFIGURATION: "INVALID_ROUTING_CONFIGURATION",
  MISSING_REQUIRED_PARAMETER: "MISSING_REQUIRED_PARAMETER",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * <p>The input does not satisfy the constraints specified by an Amazon Web Services service.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>The input does not satisfy the constraints specified by an Amazon Web Services service.</p>
   * @public
   */
  reason?: ValidationExceptionReason;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.reason = opts.reason;
  }
}

/**
 * <p>Contains details about the routing configuration of a state machine alias. In a routing
 *       configuration, you define an array of objects that specify up to two state machine versions.
 *       You also specify the percentage of traffic to be routed to each version.</p>
 * @public
 */
export interface RoutingConfigurationListItem {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies one or two state machine versions defined in the routing configuration.</p>
   *          <p>If you specify the ARN of a second version, it must belong to the same state machine as the first version.</p>
   * @public
   */
  stateMachineVersionArn: string | undefined;

  /**
   * <p>The percentage of traffic you want to route to a state machine
   *       version. The sum of the weights in the routing
   *       configuration must be equal to 100.</p>
   * @public
   */
  weight: number | undefined;
}

/**
 * @public
 */
export interface CreateStateMachineAliasInput {
  /**
   * <p>A description for the state machine alias.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The name of the state machine alias.</p>
   *          <p>To avoid conflict with version ARNs, don't use an integer in the name of the alias.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The routing configuration of a state machine alias. The routing configuration shifts
   *       execution traffic between two state machine versions. <code>routingConfiguration</code>
   *       contains an array of <code>RoutingConfig</code> objects that specify up to two state machine
   *       versions. Step Functions then randomly choses which version to run an execution with based
   *       on the weight assigned to each <code>RoutingConfig</code>.</p>
   * @public
   */
  routingConfiguration: RoutingConfigurationListItem[] | undefined;
}

/**
 * @public
 */
export interface CreateStateMachineAliasOutput {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the created state machine alias.</p>
   * @public
   */
  stateMachineAliasArn: string | undefined;

  /**
   * <p>The date the state machine alias was created.</p>
   * @public
   */
  creationDate: Date | undefined;
}

/**
 * <p>Could not find the referenced resource.</p>
 * @public
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

/**
 * <p>The request would cause a service quota to be exceeded.</p>
 *          <p>HTTP Status Code: 402</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
  }
}

/**
 * @public
 */
export interface DeleteActivityInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the activity to delete.</p>
   * @public
   */
  activityArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteActivityOutput {}

/**
 * @public
 */
export interface DeleteStateMachineInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the state machine to delete.</p>
   * @public
   */
  stateMachineArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteStateMachineOutput {}

/**
 * @public
 */
export interface DeleteStateMachineAliasInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the state machine alias to delete.</p>
   * @public
   */
  stateMachineAliasArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteStateMachineAliasOutput {}

/**
 * @public
 */
export interface DeleteStateMachineVersionInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the state machine version to delete.</p>
   * @public
   */
  stateMachineVersionArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteStateMachineVersionOutput {}

/**
 * @public
 */
export interface DescribeActivityInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the activity to describe.</p>
   * @public
   */
  activityArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeActivityOutput {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the activity.</p>
   * @public
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
   *                <p>brackets <code>< > \{ \} [ ]</code>
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
   * @public
   */
  name: string | undefined;

  /**
   * <p>The date the activity is created.</p>
   * @public
   */
  creationDate: Date | undefined;
}

/**
 * @public
 */
export interface DescribeExecutionInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the execution to describe.</p>
   * @public
   */
  executionArn: string | undefined;
}

/**
 * <p>Provides details about execution input or output.</p>
 * @public
 */
export interface CloudWatchEventsExecutionDataDetails {
  /**
   * <p>Indicates whether input or output was included in the response. Always <code>true</code>
   *       for API calls. </p>
   * @public
   */
  included?: boolean;
}

/**
 * @public
 * @enum
 */
export const ExecutionRedriveStatus = {
  NOT_REDRIVABLE: "NOT_REDRIVABLE",
  REDRIVABLE: "REDRIVABLE",
  REDRIVABLE_BY_MAP_RUN: "REDRIVABLE_BY_MAP_RUN",
} as const;

/**
 * @public
 */
export type ExecutionRedriveStatus = (typeof ExecutionRedriveStatus)[keyof typeof ExecutionRedriveStatus];

/**
 * @public
 * @enum
 */
export const ExecutionStatus = {
  ABORTED: "ABORTED",
  FAILED: "FAILED",
  PENDING_REDRIVE: "PENDING_REDRIVE",
  RUNNING: "RUNNING",
  SUCCEEDED: "SUCCEEDED",
  TIMED_OUT: "TIMED_OUT",
} as const;

/**
 * @public
 */
export type ExecutionStatus = (typeof ExecutionStatus)[keyof typeof ExecutionStatus];

/**
 * @public
 */
export interface DescribeExecutionOutput {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the execution.</p>
   * @public
   */
  executionArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the executed stated machine.</p>
   * @public
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
   *                <p>brackets <code>< > \{ \} [ ]</code>
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
   * @public
   */
  name?: string;

  /**
   * <p>The current status of the execution.</p>
   * @public
   */
  status: ExecutionStatus | undefined;

  /**
   * <p>The date the execution is started.</p>
   * @public
   */
  startDate: Date | undefined;

  /**
   * <p>If the execution ended, the date the execution stopped.</p>
   * @public
   */
  stopDate?: Date;

  /**
   * <p>The string that contains the JSON input data of the execution. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.</p>
   * @public
   */
  input?: string;

  /**
   * <p>Provides details about execution input or output.</p>
   * @public
   */
  inputDetails?: CloudWatchEventsExecutionDataDetails;

  /**
   * <p>The JSON output data of the execution. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.</p>
   *          <note>
   *             <p>This field is set only if the execution succeeds. If the execution fails, this field is
   *         null.</p>
   *          </note>
   * @public
   */
  output?: string;

  /**
   * <p>Provides details about execution input or output.</p>
   * @public
   */
  outputDetails?: CloudWatchEventsExecutionDataDetails;

  /**
   * <p>The X-Ray trace header that was passed to the execution.</p>
   * @public
   */
  traceHeader?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies a Map Run, which dispatched this execution.</p>
   * @public
   */
  mapRunArn?: string;

  /**
   * <p>The error string if the state machine execution failed.</p>
   * @public
   */
  error?: string;

  /**
   * <p>The cause string if the state machine execution failed.</p>
   * @public
   */
  cause?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the state machine version associated with the execution. The version ARN is a combination of state machine ARN and the version number separated by a colon (:). For example, <code>stateMachineARN:1</code>.</p>
   *          <p>If you start an execution from a <code>StartExecution</code> request without specifying a
   *       state machine version or alias ARN, Step Functions returns a null value.</p>
   * @public
   */
  stateMachineVersionArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the state machine alias associated with the execution. The alias ARN is a combination of state machine ARN and the alias name separated by a colon (:). For example, <code>stateMachineARN:PROD</code>.</p>
   *          <p>If you start an execution from a <code>StartExecution</code> request with a
   *       state machine version ARN, this field will be null.</p>
   * @public
   */
  stateMachineAliasArn?: string;

  /**
   * <p>The number of times you've redriven an execution. If you have not yet redriven an execution, the <code>redriveCount</code> is 0. This count is only updated if you successfully redrive an execution.</p>
   * @public
   */
  redriveCount?: number;

  /**
   * <p>The date the execution was last redriven. If you have not yet redriven an execution, the <code>redriveDate</code> is null.</p>
   *          <p>The <code>redriveDate</code> is unavailable if you redrive a Map Run that starts child workflow executions of type <code>EXPRESS</code>.</p>
   * @public
   */
  redriveDate?: Date;

  /**
   * <p>Indicates whether or not an execution can be redriven at a given point in time.</p>
   *          <ul>
   *             <li>
   *                <p>For executions of type <code>STANDARD</code>, <code>redriveStatus</code> is <code>NOT_REDRIVABLE</code> if calling the <a>RedriveExecution</a> API action would return the <code>ExecutionNotRedrivable</code> error.</p>
   *             </li>
   *             <li>
   *                <p>For a Distributed Map that includes child workflows of type <code>STANDARD</code>, <code>redriveStatus</code> indicates whether or not the Map Run can redrive child workflow executions.</p>
   *             </li>
   *             <li>
   *                <p>For a Distributed Map that includes child workflows of type <code>EXPRESS</code>, <code>redriveStatus</code> indicates whether or not the Map Run can redrive child workflow executions.</p>
   *                <p>You can redrive failed or timed out <code>EXPRESS</code> workflows <i>only if</i> they're a part of a Map Run. When you <a href="https://docs.aws.amazon.com/step-functions/latest/dg/redrive-map-run.html">redrive</a> the Map Run, these workflows are restarted using the <a>StartExecution</a> API action.</p>
   *             </li>
   *          </ul>
   * @public
   */
  redriveStatus?: ExecutionRedriveStatus;

  /**
   * <p>When <code>redriveStatus</code> is <code>NOT_REDRIVABLE</code>, <code>redriveStatusReason</code> specifies the reason why an execution cannot be redriven.</p>
   *          <ul>
   *             <li>
   *                <p>For executions of type <code>STANDARD</code>, or for a Distributed Map that includes child workflows of type <code>STANDARD</code>, <code>redriveStatusReason</code> can include one of the following reasons:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>State machine is in DELETING status</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Execution is RUNNING and cannot be redriven</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Execution is SUCCEEDED and cannot be redriven</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Execution was started before the launch of RedriveExecution</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Execution history event limit exceeded</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Execution has exceeded the max execution time</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Execution redrivable period exceeded</code>.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>For a Distributed Map that includes child workflows of type <code>EXPRESS</code>, <code>redriveStatusReason</code> is only returned if the child workflows are not redrivable. This happens when the child workflow executions have completed successfully.</p>
   *             </li>
   *          </ul>
   * @public
   */
  redriveStatusReason?: string;
}

/**
 * <p>The specified execution does not exist.</p>
 * @public
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

/**
 * @public
 */
export interface DescribeMapRunInput {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies a Map Run.</p>
   * @public
   */
  mapRunArn: string | undefined;
}

/**
 * <p>Contains details about all of the child workflow executions started by a Map Run.</p>
 * @public
 */
export interface MapRunExecutionCounts {
  /**
   * <p>The total number of child workflow executions that were started by a Map Run, but haven't started executing yet. </p>
   * @public
   */
  pending: number | undefined;

  /**
   * <p>The total number of child workflow executions that were started by a Map Run and are currently in-progress.</p>
   * @public
   */
  running: number | undefined;

  /**
   * <p>The total number of child workflow executions that were started by a Map Run and have completed successfully.</p>
   * @public
   */
  succeeded: number | undefined;

  /**
   * <p>The total number of child workflow executions that were started by a Map Run, but have failed.</p>
   * @public
   */
  failed: number | undefined;

  /**
   * <p>The total number of child workflow executions that were started by a Map Run and have timed out.</p>
   * @public
   */
  timedOut: number | undefined;

  /**
   * <p>The total number of child workflow executions that were started by a Map Run and were running, but were either stopped by the user or by Step Functions because the Map Run failed. </p>
   * @public
   */
  aborted: number | undefined;

  /**
   * <p>The total number of child workflow executions that were started by a Map Run.</p>
   * @public
   */
  total: number | undefined;

  /**
   * <p>Returns the count of child workflow executions whose results were written by <code>ResultWriter</code>. For more information, see <a href="https://docs.aws.amazon.com/step-functions/latest/dg/input-output-resultwriter.html">ResultWriter</a> in the <i>Step Functions Developer Guide</i>.</p>
   * @public
   */
  resultsWritten: number | undefined;

  /**
   * <p>The number of <code>FAILED</code>, <code>ABORTED</code>, or <code>TIMED_OUT</code> child workflow executions that cannot be redriven because their execution status is terminal. For example, child workflows with an execution status of <code>FAILED</code>, <code>ABORTED</code>, or <code>TIMED_OUT</code> and a <code>redriveStatus</code> of <code>NOT_REDRIVABLE</code>.</p>
   * @public
   */
  failuresNotRedrivable?: number;

  /**
   * <p>The number of unsuccessful child workflow executions currently waiting to be redriven. The status of these child workflow executions could be <code>FAILED</code>, <code>ABORTED</code>, or <code>TIMED_OUT</code> in the original execution attempt or a previous redrive attempt.</p>
   * @public
   */
  pendingRedrive?: number;
}

/**
 * <p>Contains details about items that were processed in all of the child workflow executions that were started by a Map Run.</p>
 * @public
 */
export interface MapRunItemCounts {
  /**
   * <p>The total number of items to process in child workflow executions that haven't started running yet.</p>
   * @public
   */
  pending: number | undefined;

  /**
   * <p>The total number of items being processed in child workflow executions that are currently in-progress.</p>
   * @public
   */
  running: number | undefined;

  /**
   * <p>The total number of items processed in child workflow executions that have completed successfully.</p>
   * @public
   */
  succeeded: number | undefined;

  /**
   * <p>The total number of items processed in child workflow executions that have failed.</p>
   * @public
   */
  failed: number | undefined;

  /**
   * <p>The total number of items processed in child workflow executions that have timed out.</p>
   * @public
   */
  timedOut: number | undefined;

  /**
   * <p>The total number of items processed in child workflow executions that were either stopped by the user or by Step Functions, because the Map Run failed.</p>
   * @public
   */
  aborted: number | undefined;

  /**
   * <p>The total number of items processed in all the child workflow executions started by a Map Run.</p>
   * @public
   */
  total: number | undefined;

  /**
   * <p>Returns the count of items whose results were written by <code>ResultWriter</code>. For more information, see <a href="https://docs.aws.amazon.com/step-functions/latest/dg/input-output-resultwriter.html">ResultWriter</a> in the <i>Step Functions Developer Guide</i>.</p>
   * @public
   */
  resultsWritten: number | undefined;

  /**
   * <p>The number of <code>FAILED</code>, <code>ABORTED</code>, or <code>TIMED_OUT</code> items in child workflow executions that cannot be redriven because the execution status of those child workflows is terminal. For example, child workflows with an execution status of <code>FAILED</code>, <code>ABORTED</code>, or <code>TIMED_OUT</code> and a <code>redriveStatus</code> of <code>NOT_REDRIVABLE</code>.</p>
   * @public
   */
  failuresNotRedrivable?: number;

  /**
   * <p>The number of unsuccessful items in child workflow executions currently waiting to be redriven.</p>
   * @public
   */
  pendingRedrive?: number;
}

/**
 * @public
 * @enum
 */
export const MapRunStatus = {
  ABORTED: "ABORTED",
  FAILED: "FAILED",
  RUNNING: "RUNNING",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type MapRunStatus = (typeof MapRunStatus)[keyof typeof MapRunStatus];

/**
 * @public
 */
export interface DescribeMapRunOutput {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies a Map Run.</p>
   * @public
   */
  mapRunArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies the execution in which the Map Run was started.</p>
   * @public
   */
  executionArn: string | undefined;

  /**
   * <p>The current status of the Map Run.</p>
   * @public
   */
  status: MapRunStatus | undefined;

  /**
   * <p>The date when the Map Run was started.</p>
   * @public
   */
  startDate: Date | undefined;

  /**
   * <p>The date when the Map Run was stopped.</p>
   * @public
   */
  stopDate?: Date;

  /**
   * <p>The maximum number of child workflow executions configured to run in parallel for the Map Run at the same time.</p>
   * @public
   */
  maxConcurrency: number | undefined;

  /**
   * <p>The maximum percentage of failed child workflow executions before the Map Run fails.</p>
   * @public
   */
  toleratedFailurePercentage: number | undefined;

  /**
   * <p>The maximum number of failed child workflow executions before the Map Run fails.</p>
   * @public
   */
  toleratedFailureCount: number | undefined;

  /**
   * <p>A JSON object that contains information about the total number of items, and the item count for each processing status, such as <code>pending</code> and <code>failed</code>.</p>
   * @public
   */
  itemCounts: MapRunItemCounts | undefined;

  /**
   * <p>A JSON object that contains information about the total number of child workflow executions for the Map Run, and the count of child workflow executions for each status, such as <code>failed</code> and <code>succeeded</code>.</p>
   * @public
   */
  executionCounts: MapRunExecutionCounts | undefined;

  /**
   * <p>The number of times you've redriven a Map Run. If you have not yet redriven a Map Run, the <code>redriveCount</code> is 0. This count is only updated if you successfully redrive a Map Run.</p>
   * @public
   */
  redriveCount?: number;

  /**
   * <p>The date a Map Run was last redriven. If you have not yet redriven a Map Run, the <code>redriveDate</code> is null.</p>
   * @public
   */
  redriveDate?: Date;
}

/**
 * @public
 */
export interface DescribeStateMachineInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the state machine for which you want the information.</p>
   *          <p>If you specify a state machine version ARN, this API returns details about that version. The version ARN is a combination of state machine ARN and the version number separated by a colon (:). For example, <code>stateMachineARN:1</code>.</p>
   * @public
   */
  stateMachineArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const StateMachineStatus = {
  ACTIVE: "ACTIVE",
  DELETING: "DELETING",
} as const;

/**
 * @public
 */
export type StateMachineStatus = (typeof StateMachineStatus)[keyof typeof StateMachineStatus];

/**
 * @public
 */
export interface DescribeStateMachineOutput {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the state machine.</p>
   *          <p>If you specified a state machine version ARN in your request, the API returns the version ARN. The version ARN is a combination of state machine ARN and the version number separated by a colon (:). For example, <code>stateMachineARN:1</code>.</p>
   * @public
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
   *                <p>brackets <code>< > \{ \} [ ]</code>
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
   * @public
   */
  name: string | undefined;

  /**
   * <p>The current status of the state machine.</p>
   * @public
   */
  status?: StateMachineStatus;

  /**
   * <p>The Amazon States Language definition of the state machine. See <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html">Amazon States Language</a>.</p>
   * @public
   */
  definition: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role used when creating this state machine. (The IAM role
   *       maintains security by granting Step Functions access to Amazon Web Services resources.)</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The <code>type</code> of the state machine (<code>STANDARD</code> or
   *       <code>EXPRESS</code>).</p>
   * @public
   */
  type: StateMachineType | undefined;

  /**
   * <p>The date the state machine is created.</p>
   *          <p>For a state machine version, <code>creationDate</code> is the date the version was created.</p>
   * @public
   */
  creationDate: Date | undefined;

  /**
   * <p>The <code>LoggingConfiguration</code> data type is used to set CloudWatch Logs
   *       options.</p>
   * @public
   */
  loggingConfiguration?: LoggingConfiguration;

  /**
   * <p>Selects whether X-Ray tracing is enabled.</p>
   * @public
   */
  tracingConfiguration?: TracingConfiguration;

  /**
   * <p>A user-defined or an auto-generated string that identifies a <code>Map</code> state. This parameter is present only if the <code>stateMachineArn</code> specified in input is a qualified state machine ARN.</p>
   * @public
   */
  label?: string;

  /**
   * <p>The revision identifier for the state machine.</p>
   *          <p>Use the <code>revisionId</code> parameter to compare between versions of a state machine
   *       configuration used for executions without performing a diff of the properties, such as
   *         <code>definition</code> and <code>roleArn</code>.</p>
   * @public
   */
  revisionId?: string;

  /**
   * <p>The description of the state machine version.</p>
   * @public
   */
  description?: string;
}

/**
 * <p>The specified state machine does not exist.</p>
 * @public
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

/**
 * @public
 */
export interface DescribeStateMachineAliasInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the state machine alias.</p>
   * @public
   */
  stateMachineAliasArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeStateMachineAliasOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the state machine alias.</p>
   * @public
   */
  stateMachineAliasArn?: string;

  /**
   * <p>The name of the state machine alias.</p>
   * @public
   */
  name?: string;

  /**
   * <p>A description of the alias.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The routing configuration of the alias.</p>
   * @public
   */
  routingConfiguration?: RoutingConfigurationListItem[];

  /**
   * <p>The date the state machine alias was created.</p>
   * @public
   */
  creationDate?: Date;

  /**
   * <p>The date the state machine alias was last updated.</p>
   *          <p>For a newly created state machine, this is the same as the creation date.</p>
   * @public
   */
  updateDate?: Date;
}

/**
 * @public
 */
export interface DescribeStateMachineForExecutionInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the execution you want state machine information for.</p>
   * @public
   */
  executionArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeStateMachineForExecutionOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the state machine associated with the execution.</p>
   * @public
   */
  stateMachineArn: string | undefined;

  /**
   * <p>The name of the state machine associated with the execution.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon States Language definition of the state machine. See <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html">Amazon States Language</a>.</p>
   * @public
   */
  definition: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role of the State Machine for the execution. </p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The date and time the state machine associated with an execution was updated. For a newly
   *       created state machine, this is the creation date.</p>
   * @public
   */
  updateDate: Date | undefined;

  /**
   * <p>The <code>LoggingConfiguration</code> data type is used to set CloudWatch Logs
   *       options.</p>
   * @public
   */
  loggingConfiguration?: LoggingConfiguration;

  /**
   * <p>Selects whether X-Ray tracing is enabled.</p>
   * @public
   */
  tracingConfiguration?: TracingConfiguration;

  /**
   * <p>The Amazon Resource Name (ARN) of the Map Run that started the child workflow execution. This field is returned only if the <code>executionArn</code> is a child workflow execution that was started by a Distributed Map state.</p>
   * @public
   */
  mapRunArn?: string;

  /**
   * <p>A user-defined or an auto-generated string that identifies a <code>Map</code> state. This ﬁeld is returned only if the <code>executionArn</code> is a child workflow execution that was started by a Distributed Map state.</p>
   * @public
   */
  label?: string;

  /**
   * <p>The revision identifier for the state machine. The first revision ID when you create the state machine is null.</p>
   *          <p>Use the state machine <code>revisionId</code> parameter to compare the revision of a state machine with the configuration of the state machine used for executions without performing a diff of the properties, such as <code>definition</code> and <code>roleArn</code>.</p>
   * @public
   */
  revisionId?: string;
}

/**
 * @public
 */
export interface GetActivityTaskInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the activity to retrieve tasks from (assigned when you create the task
   *       using <a>CreateActivity</a>.)</p>
   * @public
   */
  activityArn: string | undefined;

  /**
   * <p>You can provide an arbitrary name in order to identify the worker that the task is
   *       assigned to. This name is used when it is logged in the execution history.</p>
   * @public
   */
  workerName?: string;
}

/**
 * @public
 */
export interface GetActivityTaskOutput {
  /**
   * <p>A token that identifies the scheduled task. This token must be copied and included in
   *       subsequent calls to <a>SendTaskHeartbeat</a>, <a>SendTaskSuccess</a> or
   *         <a>SendTaskFailure</a> in order to report the progress or completion of the
   *       task.</p>
   * @public
   */
  taskToken?: string;

  /**
   * <p>The string that contains the JSON input data for the task. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.</p>
   * @public
   */
  input?: string;
}

/**
 * @public
 */
export interface GetExecutionHistoryInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the execution.</p>
   * @public
   */
  executionArn: string | undefined;

  /**
   * <p>The maximum number of results that are returned per call. You can use <code>nextToken</code> to obtain further pages of results.
   *     The default is 100 and the maximum allowed page size is 1000. A value of 0 uses the default.</p>
   *          <p>This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>Lists events in descending order of their <code>timeStamp</code>.</p>
   * @public
   */
  reverseOrder?: boolean;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
   *     Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>You can select whether execution data (input or output of a history event) is returned.
   *       The default is <code>true</code>.</p>
   * @public
   */
  includeExecutionData?: boolean;
}

/**
 * <p>Contains details about an abort of an execution.</p>
 * @public
 */
export interface ExecutionAbortedEventDetails {
  /**
   * <p>The error code of the failure.</p>
   * @public
   */
  error?: string;

  /**
   * <p>A more detailed explanation of the cause of the failure.</p>
   * @public
   */
  cause?: string;
}

/**
 * <p>Contains details about an execution failure event.</p>
 * @public
 */
export interface ExecutionFailedEventDetails {
  /**
   * <p>The error code of the failure.</p>
   * @public
   */
  error?: string;

  /**
   * <p>A more detailed explanation of the cause of the failure.</p>
   * @public
   */
  cause?: string;
}

/**
 * <p>Contains details about a redriven execution.</p>
 * @public
 */
export interface ExecutionRedrivenEventDetails {
  /**
   * <p>The number of times you've redriven an execution. If you have not yet redriven an execution, the <code>redriveCount</code> is 0. This count is not updated for redrives that failed to start or are pending to be redriven.</p>
   * @public
   */
  redriveCount?: number;
}

/**
 * <p>Contains details about the start of the execution.</p>
 * @public
 */
export interface ExecutionStartedEventDetails {
  /**
   * <p>The JSON data input to the execution. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.</p>
   * @public
   */
  input?: string;

  /**
   * <p>Contains details about the input for an execution history event.</p>
   * @public
   */
  inputDetails?: HistoryEventExecutionDataDetails;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role used for executing Lambda tasks.</p>
   * @public
   */
  roleArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies a state machine alias used for starting the state machine execution.</p>
   * @public
   */
  stateMachineAliasArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies a state machine version used for starting the state machine execution.</p>
   * @public
   */
  stateMachineVersionArn?: string;
}

/**
 * <p>Contains details about the successful termination of the execution.</p>
 * @public
 */
export interface ExecutionSucceededEventDetails {
  /**
   * <p>The JSON data output by the execution. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.</p>
   * @public
   */
  output?: string;

  /**
   * <p>Contains details about the output of an execution history event.</p>
   * @public
   */
  outputDetails?: HistoryEventExecutionDataDetails;
}

/**
 * <p>Contains details about the execution timeout that occurred during the execution.</p>
 * @public
 */
export interface ExecutionTimedOutEventDetails {
  /**
   * <p>The error code of the failure.</p>
   * @public
   */
  error?: string;

  /**
   * <p>A more detailed explanation of the cause of the timeout.</p>
   * @public
   */
  cause?: string;
}

/**
 * <p>Contains details about a Lambda function that failed during an execution.</p>
 * @public
 */
export interface LambdaFunctionFailedEventDetails {
  /**
   * <p>The error code of the failure.</p>
   * @public
   */
  error?: string;

  /**
   * <p>A more detailed explanation of the cause of the failure.</p>
   * @public
   */
  cause?: string;
}

/**
 * <p>Contains details about the credentials that Step Functions uses for a task.</p>
 * @public
 */
export interface TaskCredentials {
  /**
   * <p>The ARN of an IAM role that Step Functions assumes for the task. The role can allow cross-account access to resources.</p>
   * @public
   */
  roleArn?: string;
}

/**
 * <p>Contains details about a Lambda function scheduled during an execution.</p>
 * @public
 */
export interface LambdaFunctionScheduledEventDetails {
  /**
   * <p>The Amazon Resource Name (ARN) of the scheduled Lambda function.</p>
   * @public
   */
  resource: string | undefined;

  /**
   * <p>The JSON data input to the Lambda function. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.</p>
   * @public
   */
  input?: string;

  /**
   * <p>Contains details about input for an execution history event.</p>
   * @public
   */
  inputDetails?: HistoryEventExecutionDataDetails;

  /**
   * <p>The maximum allowed duration of the Lambda function.</p>
   * @public
   */
  timeoutInSeconds?: number;

  /**
   * <p>The credentials that Step Functions uses for the task.</p>
   * @public
   */
  taskCredentials?: TaskCredentials;
}

/**
 * <p>Contains details about a failed Lambda function schedule event that occurred during an
 *       execution.</p>
 * @public
 */
export interface LambdaFunctionScheduleFailedEventDetails {
  /**
   * <p>The error code of the failure.</p>
   * @public
   */
  error?: string;

  /**
   * <p>A more detailed explanation of the cause of the failure.</p>
   * @public
   */
  cause?: string;
}

/**
 * <p>Contains details about a lambda function that failed to start during an execution.</p>
 * @public
 */
export interface LambdaFunctionStartFailedEventDetails {
  /**
   * <p>The error code of the failure.</p>
   * @public
   */
  error?: string;

  /**
   * <p>A more detailed explanation of the cause of the failure.</p>
   * @public
   */
  cause?: string;
}

/**
 * <p>Contains details about a Lambda function that successfully terminated during an
 *       execution.</p>
 * @public
 */
export interface LambdaFunctionSucceededEventDetails {
  /**
   * <p>The JSON data output by the Lambda function. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.</p>
   * @public
   */
  output?: string;

  /**
   * <p>Contains details about the output of an execution history event.</p>
   * @public
   */
  outputDetails?: HistoryEventExecutionDataDetails;
}

/**
 * <p>Contains details about a Lambda function timeout that occurred during an execution.</p>
 * @public
 */
export interface LambdaFunctionTimedOutEventDetails {
  /**
   * <p>The error code of the failure.</p>
   * @public
   */
  error?: string;

  /**
   * <p>A more detailed explanation of the cause of the timeout.</p>
   * @public
   */
  cause?: string;
}

/**
 * <p>Contains details about an iteration of a Map state.</p>
 * @public
 */
export interface MapIterationEventDetails {
  /**
   * <p>The name of the iteration’s parent Map state.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The index of the array belonging to the Map state iteration.</p>
   * @public
   */
  index?: number;
}

/**
 * <p>Contains details about a Map Run failure event that occurred during a state machine execution.</p>
 * @public
 */
export interface MapRunFailedEventDetails {
  /**
   * <p>The error code of the Map Run failure.</p>
   * @public
   */
  error?: string;

  /**
   * <p>A more detailed explanation of the cause of the failure.</p>
   * @public
   */
  cause?: string;
}

/**
 * <p>Contains details about a Map Run that was redriven.</p>
 * @public
 */
export interface MapRunRedrivenEventDetails {
  /**
   * <p>The Amazon Resource Name (ARN) of a Map Run that was redriven.</p>
   * @public
   */
  mapRunArn?: string;

  /**
   * <p>The number of times the Map Run has been redriven at this point in the execution's history including this event. The redrive count for a redriven Map Run is always greater than 0.</p>
   * @public
   */
  redriveCount?: number;
}

/**
 * <p>Contains details about a Map Run that was started during a state machine execution.</p>
 * @public
 */
export interface MapRunStartedEventDetails {
  /**
   * <p>The Amazon Resource Name (ARN) of a Map Run that was started.</p>
   * @public
   */
  mapRunArn?: string;
}

/**
 * <p>Details about a Map state that was started.</p>
 * @public
 */
export interface MapStateStartedEventDetails {
  /**
   * <p>The size of the array for Map state iterations.</p>
   * @public
   */
  length?: number;
}

/**
 * <p>Contains details about a state entered during an execution.</p>
 * @public
 */
export interface StateEnteredEventDetails {
  /**
   * <p>The name of the state.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The string that contains the JSON input data for the state. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.</p>
   * @public
   */
  input?: string;

  /**
   * <p>Contains details about the input for an execution history event.</p>
   * @public
   */
  inputDetails?: HistoryEventExecutionDataDetails;
}

/**
 * <p>Contains details about an exit from a state during an execution.</p>
 * @public
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
   *                <p>brackets <code>< > \{ \} [ ]</code>
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
   * @public
   */
  name: string | undefined;

  /**
   * <p>The JSON output data of the state. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.</p>
   * @public
   */
  output?: string;

  /**
   * <p>Contains details about the output of an execution history event.</p>
   * @public
   */
  outputDetails?: HistoryEventExecutionDataDetails;
}

/**
 * <p>Contains details about a task failure event.</p>
 * @public
 */
export interface TaskFailedEventDetails {
  /**
   * <p>The service name of the resource in a task state.</p>
   * @public
   */
  resourceType: string | undefined;

  /**
   * <p>The action of the resource called by a task state.</p>
   * @public
   */
  resource: string | undefined;

  /**
   * <p>The error code of the failure.</p>
   * @public
   */
  error?: string;

  /**
   * <p>A more detailed explanation of the cause of the failure.</p>
   * @public
   */
  cause?: string;
}

/**
 * <p>Contains details about a task scheduled during an execution.</p>
 * @public
 */
export interface TaskScheduledEventDetails {
  /**
   * <p>The service name of the resource in a task state.</p>
   * @public
   */
  resourceType: string | undefined;

  /**
   * <p>The action of the resource called by a task state.</p>
   * @public
   */
  resource: string | undefined;

  /**
   * <p>The region of the scheduled task</p>
   * @public
   */
  region: string | undefined;

  /**
   * <p>The JSON data passed to the resource referenced in a task state.
   *       Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.</p>
   * @public
   */
  parameters: string | undefined;

  /**
   * <p>The maximum allowed duration of the task.</p>
   * @public
   */
  timeoutInSeconds?: number;

  /**
   * <p>The maximum allowed duration between two heartbeats for the task.</p>
   * @public
   */
  heartbeatInSeconds?: number;

  /**
   * <p>The credentials that Step Functions uses for the task.</p>
   * @public
   */
  taskCredentials?: TaskCredentials;
}

/**
 * <p>Contains details about the start of a task during an execution.</p>
 * @public
 */
export interface TaskStartedEventDetails {
  /**
   * <p>The service name of the resource in a task state.</p>
   * @public
   */
  resourceType: string | undefined;

  /**
   * <p>The action of the resource called by a task state.</p>
   * @public
   */
  resource: string | undefined;
}

/**
 * <p>Contains details about a task that failed to start during an execution.</p>
 * @public
 */
export interface TaskStartFailedEventDetails {
  /**
   * <p>The service name of the resource in a task state.</p>
   * @public
   */
  resourceType: string | undefined;

  /**
   * <p>The action of the resource called by a task state.</p>
   * @public
   */
  resource: string | undefined;

  /**
   * <p>The error code of the failure.</p>
   * @public
   */
  error?: string;

  /**
   * <p>A more detailed explanation of the cause of the failure.</p>
   * @public
   */
  cause?: string;
}

/**
 * <p>Contains details about a task that failed to submit during an execution.</p>
 * @public
 */
export interface TaskSubmitFailedEventDetails {
  /**
   * <p>The service name of the resource in a task state.</p>
   * @public
   */
  resourceType: string | undefined;

  /**
   * <p>The action of the resource called by a task state.</p>
   * @public
   */
  resource: string | undefined;

  /**
   * <p>The error code of the failure.</p>
   * @public
   */
  error?: string;

  /**
   * <p>A more detailed explanation of the cause of the failure.</p>
   * @public
   */
  cause?: string;
}

/**
 * <p>Contains details about a task submitted to a resource .</p>
 * @public
 */
export interface TaskSubmittedEventDetails {
  /**
   * <p>The service name of the resource in a task state.</p>
   * @public
   */
  resourceType: string | undefined;

  /**
   * <p>The action of the resource called by a task state.</p>
   * @public
   */
  resource: string | undefined;

  /**
   * <p>The response from a resource when a task has started. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.</p>
   * @public
   */
  output?: string;

  /**
   * <p>Contains details about the output of an execution history event.</p>
   * @public
   */
  outputDetails?: HistoryEventExecutionDataDetails;
}

/**
 * <p>Contains details about the successful completion of a task state.</p>
 * @public
 */
export interface TaskSucceededEventDetails {
  /**
   * <p>The service name of the resource in a task state.</p>
   * @public
   */
  resourceType: string | undefined;

  /**
   * <p>The action of the resource called by a task state.</p>
   * @public
   */
  resource: string | undefined;

  /**
   * <p>The full JSON response from a resource when a task has succeeded. This response becomes
   *       the output of the related task. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.</p>
   * @public
   */
  output?: string;

  /**
   * <p>Contains details about the output of an execution history event.</p>
   * @public
   */
  outputDetails?: HistoryEventExecutionDataDetails;
}

/**
 * <p>Contains details about a resource timeout that occurred during an execution.</p>
 * @public
 */
export interface TaskTimedOutEventDetails {
  /**
   * <p>The service name of the resource in a task state.</p>
   * @public
   */
  resourceType: string | undefined;

  /**
   * <p>The action of the resource called by a task state.</p>
   * @public
   */
  resource: string | undefined;

  /**
   * <p>The error code of the failure.</p>
   * @public
   */
  error?: string;

  /**
   * <p>A more detailed explanation of the cause of the failure.</p>
   * @public
   */
  cause?: string;
}

/**
 * @public
 * @enum
 */
export const HistoryEventType = {
  ActivityFailed: "ActivityFailed",
  ActivityScheduleFailed: "ActivityScheduleFailed",
  ActivityScheduled: "ActivityScheduled",
  ActivityStarted: "ActivityStarted",
  ActivitySucceeded: "ActivitySucceeded",
  ActivityTimedOut: "ActivityTimedOut",
  ChoiceStateEntered: "ChoiceStateEntered",
  ChoiceStateExited: "ChoiceStateExited",
  ExecutionAborted: "ExecutionAborted",
  ExecutionFailed: "ExecutionFailed",
  ExecutionRedriven: "ExecutionRedriven",
  ExecutionStarted: "ExecutionStarted",
  ExecutionSucceeded: "ExecutionSucceeded",
  ExecutionTimedOut: "ExecutionTimedOut",
  FailStateEntered: "FailStateEntered",
  LambdaFunctionFailed: "LambdaFunctionFailed",
  LambdaFunctionScheduleFailed: "LambdaFunctionScheduleFailed",
  LambdaFunctionScheduled: "LambdaFunctionScheduled",
  LambdaFunctionStartFailed: "LambdaFunctionStartFailed",
  LambdaFunctionStarted: "LambdaFunctionStarted",
  LambdaFunctionSucceeded: "LambdaFunctionSucceeded",
  LambdaFunctionTimedOut: "LambdaFunctionTimedOut",
  MapIterationAborted: "MapIterationAborted",
  MapIterationFailed: "MapIterationFailed",
  MapIterationStarted: "MapIterationStarted",
  MapIterationSucceeded: "MapIterationSucceeded",
  MapRunAborted: "MapRunAborted",
  MapRunFailed: "MapRunFailed",
  MapRunRedriven: "MapRunRedriven",
  MapRunStarted: "MapRunStarted",
  MapRunSucceeded: "MapRunSucceeded",
  MapStateAborted: "MapStateAborted",
  MapStateEntered: "MapStateEntered",
  MapStateExited: "MapStateExited",
  MapStateFailed: "MapStateFailed",
  MapStateStarted: "MapStateStarted",
  MapStateSucceeded: "MapStateSucceeded",
  ParallelStateAborted: "ParallelStateAborted",
  ParallelStateEntered: "ParallelStateEntered",
  ParallelStateExited: "ParallelStateExited",
  ParallelStateFailed: "ParallelStateFailed",
  ParallelStateStarted: "ParallelStateStarted",
  ParallelStateSucceeded: "ParallelStateSucceeded",
  PassStateEntered: "PassStateEntered",
  PassStateExited: "PassStateExited",
  SucceedStateEntered: "SucceedStateEntered",
  SucceedStateExited: "SucceedStateExited",
  TaskFailed: "TaskFailed",
  TaskScheduled: "TaskScheduled",
  TaskStartFailed: "TaskStartFailed",
  TaskStarted: "TaskStarted",
  TaskStateAborted: "TaskStateAborted",
  TaskStateEntered: "TaskStateEntered",
  TaskStateExited: "TaskStateExited",
  TaskSubmitFailed: "TaskSubmitFailed",
  TaskSubmitted: "TaskSubmitted",
  TaskSucceeded: "TaskSucceeded",
  TaskTimedOut: "TaskTimedOut",
  WaitStateAborted: "WaitStateAborted",
  WaitStateEntered: "WaitStateEntered",
  WaitStateExited: "WaitStateExited",
} as const;

/**
 * @public
 */
export type HistoryEventType = (typeof HistoryEventType)[keyof typeof HistoryEventType];

/**
 * <p>Contains details about the events of an execution.</p>
 * @public
 */
export interface HistoryEvent {
  /**
   * <p>The date and time the event occurred.</p>
   * @public
   */
  timestamp: Date | undefined;

  /**
   * <p>The type of the event.</p>
   * @public
   */
  type: HistoryEventType | undefined;

  /**
   * <p>The id of the event. Events are numbered sequentially, starting at one.</p>
   * @public
   */
  id: number | undefined;

  /**
   * <p>The id of the previous event.</p>
   * @public
   */
  previousEventId?: number;

  /**
   * <p>Contains details about an activity that failed during an execution.</p>
   * @public
   */
  activityFailedEventDetails?: ActivityFailedEventDetails;

  /**
   * <p>Contains details about an activity schedule event that failed during an execution.</p>
   * @public
   */
  activityScheduleFailedEventDetails?: ActivityScheduleFailedEventDetails;

  /**
   * <p>Contains details about an activity scheduled during an execution.</p>
   * @public
   */
  activityScheduledEventDetails?: ActivityScheduledEventDetails;

  /**
   * <p>Contains details about the start of an activity during an execution.</p>
   * @public
   */
  activityStartedEventDetails?: ActivityStartedEventDetails;

  /**
   * <p>Contains details about an activity that successfully terminated during an
   *       execution.</p>
   * @public
   */
  activitySucceededEventDetails?: ActivitySucceededEventDetails;

  /**
   * <p>Contains details about an activity timeout that occurred during an execution.</p>
   * @public
   */
  activityTimedOutEventDetails?: ActivityTimedOutEventDetails;

  /**
   * <p>Contains details about the failure of a task.</p>
   * @public
   */
  taskFailedEventDetails?: TaskFailedEventDetails;

  /**
   * <p>Contains details about a task that was scheduled.</p>
   * @public
   */
  taskScheduledEventDetails?: TaskScheduledEventDetails;

  /**
   * <p>Contains details about a task that failed to start.</p>
   * @public
   */
  taskStartFailedEventDetails?: TaskStartFailedEventDetails;

  /**
   * <p>Contains details about a task that was started.</p>
   * @public
   */
  taskStartedEventDetails?: TaskStartedEventDetails;

  /**
   * <p>Contains details about a task that where the submit failed.</p>
   * @public
   */
  taskSubmitFailedEventDetails?: TaskSubmitFailedEventDetails;

  /**
   * <p>Contains details about a submitted task.</p>
   * @public
   */
  taskSubmittedEventDetails?: TaskSubmittedEventDetails;

  /**
   * <p>Contains details about a task that succeeded.</p>
   * @public
   */
  taskSucceededEventDetails?: TaskSucceededEventDetails;

  /**
   * <p>Contains details about a task that timed out.</p>
   * @public
   */
  taskTimedOutEventDetails?: TaskTimedOutEventDetails;

  /**
   * <p>Contains details about an execution failure event.</p>
   * @public
   */
  executionFailedEventDetails?: ExecutionFailedEventDetails;

  /**
   * <p>Contains details about the start of the execution.</p>
   * @public
   */
  executionStartedEventDetails?: ExecutionStartedEventDetails;

  /**
   * <p>Contains details about the successful termination of the execution.</p>
   * @public
   */
  executionSucceededEventDetails?: ExecutionSucceededEventDetails;

  /**
   * <p>Contains details about an abort of an execution.</p>
   * @public
   */
  executionAbortedEventDetails?: ExecutionAbortedEventDetails;

  /**
   * <p>Contains details about the execution timeout that occurred during the execution.</p>
   * @public
   */
  executionTimedOutEventDetails?: ExecutionTimedOutEventDetails;

  /**
   * <p>Contains details about the redrive attempt of an execution.</p>
   * @public
   */
  executionRedrivenEventDetails?: ExecutionRedrivenEventDetails;

  /**
   * <p>Contains details about Map state that was started.</p>
   * @public
   */
  mapStateStartedEventDetails?: MapStateStartedEventDetails;

  /**
   * <p>Contains details about an iteration of a Map state that was started.</p>
   * @public
   */
  mapIterationStartedEventDetails?: MapIterationEventDetails;

  /**
   * <p>Contains details about an iteration of a Map state that succeeded.</p>
   * @public
   */
  mapIterationSucceededEventDetails?: MapIterationEventDetails;

  /**
   * <p>Contains details about an iteration of a Map state that failed.</p>
   * @public
   */
  mapIterationFailedEventDetails?: MapIterationEventDetails;

  /**
   * <p>Contains details about an iteration of a Map state that was aborted.</p>
   * @public
   */
  mapIterationAbortedEventDetails?: MapIterationEventDetails;

  /**
   * <p>Contains details about a Lambda function that failed during an execution.</p>
   * @public
   */
  lambdaFunctionFailedEventDetails?: LambdaFunctionFailedEventDetails;

  /**
   * <p>Contains details about a failed Lambda function schedule event that occurred during an
   *       execution.</p>
   * @public
   */
  lambdaFunctionScheduleFailedEventDetails?: LambdaFunctionScheduleFailedEventDetails;

  /**
   * <p>Contains details about a Lambda function scheduled during an execution.</p>
   * @public
   */
  lambdaFunctionScheduledEventDetails?: LambdaFunctionScheduledEventDetails;

  /**
   * <p>Contains details about a lambda function that failed to start during an execution.</p>
   * @public
   */
  lambdaFunctionStartFailedEventDetails?: LambdaFunctionStartFailedEventDetails;

  /**
   * <p>Contains details about a Lambda function that terminated successfully during an
   *       execution.</p>
   * @public
   */
  lambdaFunctionSucceededEventDetails?: LambdaFunctionSucceededEventDetails;

  /**
   * <p>Contains details about a Lambda function timeout that occurred during an execution.</p>
   * @public
   */
  lambdaFunctionTimedOutEventDetails?: LambdaFunctionTimedOutEventDetails;

  /**
   * <p>Contains details about a state entered during an execution.</p>
   * @public
   */
  stateEnteredEventDetails?: StateEnteredEventDetails;

  /**
   * <p>Contains details about an exit from a state during an execution.</p>
   * @public
   */
  stateExitedEventDetails?: StateExitedEventDetails;

  /**
   * <p>Contains details, such as <code>mapRunArn</code>, and the start date and time of a Map Run. <code>mapRunArn</code> is the Amazon Resource Name (ARN) of the Map Run that was started.</p>
   * @public
   */
  mapRunStartedEventDetails?: MapRunStartedEventDetails;

  /**
   * <p>Contains error and cause details about a Map Run that failed.</p>
   * @public
   */
  mapRunFailedEventDetails?: MapRunFailedEventDetails;

  /**
   * <p>Contains details about the redrive attempt of a Map Run.</p>
   * @public
   */
  mapRunRedrivenEventDetails?: MapRunRedrivenEventDetails;
}

/**
 * @public
 */
export interface GetExecutionHistoryOutput {
  /**
   * <p>The list of events that occurred in the execution.</p>
   * @public
   */
  events: HistoryEvent[] | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
   *     Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>The provided token is not valid.</p>
 * @public
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

/**
 * @public
 */
export interface ListActivitiesInput {
  /**
   * <p>The maximum number of results that are returned per call. You can use <code>nextToken</code> to obtain further pages of results.
   *     The default is 100 and the maximum allowed page size is 1000. A value of 0 uses the default.</p>
   *          <p>This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
   *     Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListActivitiesOutput {
  /**
   * <p>The list of activities.</p>
   * @public
   */
  activities: ActivityListItem[] | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
   *     Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ExecutionRedriveFilter = {
  NOT_REDRIVEN: "NOT_REDRIVEN",
  REDRIVEN: "REDRIVEN",
} as const;

/**
 * @public
 */
export type ExecutionRedriveFilter = (typeof ExecutionRedriveFilter)[keyof typeof ExecutionRedriveFilter];

/**
 * @public
 */
export interface ListExecutionsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the state machine whose executions is listed.</p>
   *          <p>You can specify either a <code>mapRunArn</code> or a <code>stateMachineArn</code>, but not both.</p>
   *          <p>You can also return a list of executions associated with a specific <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-alias.html">alias</a> or <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html">version</a>, by specifying an alias ARN or a version ARN in the <code>stateMachineArn</code> parameter.</p>
   * @public
   */
  stateMachineArn?: string;

  /**
   * <p>If specified, only list the executions whose current execution status matches the given
   *       filter.</p>
   * @public
   */
  statusFilter?: ExecutionStatus;

  /**
   * <p>The maximum number of results that are returned per call. You can use <code>nextToken</code> to obtain further pages of results.
   *     The default is 100 and the maximum allowed page size is 1000. A value of 0 uses the default.</p>
   *          <p>This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
   *     Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Map Run that started the child workflow executions. If the <code>mapRunArn</code> field is specified, a list of all of the child workflow executions started by a Map Run is returned. For more information, see <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-examine-map-run.html">Examining Map Run</a> in the <i>Step Functions Developer Guide</i>.</p>
   *          <p>You can specify either a <code>mapRunArn</code> or a <code>stateMachineArn</code>, but not both.</p>
   * @public
   */
  mapRunArn?: string;

  /**
   * <p>Sets a filter to list executions based on whether or not they have been redriven.</p>
   *          <p>For a Distributed Map, <code>redriveFilter</code> sets a filter to list child workflow executions based on whether or not they have been redriven.</p>
   *          <p>If you do not provide a <code>redriveFilter</code>, Step Functions returns a list of both redriven and non-redriven executions.</p>
   *          <p>If you provide a state machine ARN in <code>redriveFilter</code>, the API returns a validation exception.</p>
   * @public
   */
  redriveFilter?: ExecutionRedriveFilter;
}

/**
 * <p>Contains details about an execution.</p>
 * @public
 */
export interface ExecutionListItem {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the execution.</p>
   * @public
   */
  executionArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the state machine that ran the execution.</p>
   * @public
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
   *                <p>brackets <code>< > \{ \} [ ]</code>
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
   * @public
   */
  name: string | undefined;

  /**
   * <p>The current status of the execution.</p>
   * @public
   */
  status: ExecutionStatus | undefined;

  /**
   * <p>The date the execution started.</p>
   * @public
   */
  startDate: Date | undefined;

  /**
   * <p>If the execution already ended, the date the execution stopped.</p>
   * @public
   */
  stopDate?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of a Map Run. This field is returned only if <code>mapRunArn</code> was specified in the <code>ListExecutions</code> API action. If <code>stateMachineArn</code> was specified in <code>ListExecutions</code>, the <code>mapRunArn</code> isn't returned.</p>
   * @public
   */
  mapRunArn?: string;

  /**
   * <p>The total number of items processed in a child workflow execution. This field is returned only if <code>mapRunArn</code> was specified in the <code>ListExecutions</code> API action. If <code>stateMachineArn</code> was specified in <code>ListExecutions</code>, the <code>itemCount</code> field isn't returned.</p>
   * @public
   */
  itemCount?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the state machine version associated with the execution.</p>
   *          <p>If the state machine execution was started with an unqualified ARN, it returns null.</p>
   *          <p>If the execution was started using a <code>stateMachineAliasArn</code>, both the <code>stateMachineAliasArn</code> and <code>stateMachineVersionArn</code> parameters contain the respective values.</p>
   * @public
   */
  stateMachineVersionArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the state machine alias used to start an execution.</p>
   *          <p>If the state machine execution was started with an unqualified ARN or a version ARN, it returns null.</p>
   * @public
   */
  stateMachineAliasArn?: string;

  /**
   * <p>The number of times you've redriven an execution. If you have not yet redriven an execution, the <code>redriveCount</code> is 0. This count is only updated when you successfully redrive an execution.</p>
   * @public
   */
  redriveCount?: number;

  /**
   * <p>The date the execution was last redriven.</p>
   * @public
   */
  redriveDate?: Date;
}

/**
 * @public
 */
export interface ListExecutionsOutput {
  /**
   * <p>The list of matching executions.</p>
   * @public
   */
  executions: ExecutionListItem[] | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
   *     Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListMapRunsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the execution for which the Map Runs must be listed.</p>
   * @public
   */
  executionArn: string | undefined;

  /**
   * <p>The maximum number of results that are returned per call. You can use <code>nextToken</code> to obtain further pages of results.
   *     The default is 100 and the maximum allowed page size is 1000. A value of 0 uses the default.</p>
   *          <p>This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
   *     Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>Contains details about a specific Map Run.</p>
 * @public
 */
export interface MapRunListItem {
  /**
   * <p>The <code>executionArn</code> of the execution from which the Map Run was started.</p>
   * @public
   */
  executionArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Map Run.</p>
   * @public
   */
  mapRunArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the executed state machine.</p>
   * @public
   */
  stateMachineArn: string | undefined;

  /**
   * <p>The date on which the Map Run started.</p>
   * @public
   */
  startDate: Date | undefined;

  /**
   * <p>The date on which the Map Run stopped.</p>
   * @public
   */
  stopDate?: Date;
}

/**
 * @public
 */
export interface ListMapRunsOutput {
  /**
   * <p>An array that lists information related to a Map Run, such as the Amazon Resource Name (ARN) of the Map Run and the ARN of the state machine that started the Map Run.</p>
   * @public
   */
  mapRuns: MapRunListItem[] | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
   *     Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListStateMachineAliasesInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the state machine for which you want to list aliases.</p>
   *          <p>If you specify a state machine version ARN, this API returns a list of aliases for that version.</p>
   * @public
   */
  stateMachineArn: string | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
   *     Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results that are returned per call. You can use <code>nextToken</code> to obtain further pages of results.
   *     The default is 100 and the maximum allowed page size is 1000. A value of 0 uses the default.</p>
   *          <p>This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * <p>Contains details about a specific state machine alias.</p>
 * @public
 */
export interface StateMachineAliasListItem {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies a state machine alias. The alias ARN is a combination of state machine ARN and the alias name separated by a colon (:). For example, <code>stateMachineARN:PROD</code>.</p>
   * @public
   */
  stateMachineAliasArn: string | undefined;

  /**
   * <p>The creation date of a state machine alias.</p>
   * @public
   */
  creationDate: Date | undefined;
}

/**
 * @public
 */
export interface ListStateMachineAliasesOutput {
  /**
   * <p>Aliases for the state machine.</p>
   * @public
   */
  stateMachineAliases: StateMachineAliasListItem[] | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
   *     Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListStateMachinesInput {
  /**
   * <p>The maximum number of results that are returned per call. You can use <code>nextToken</code> to obtain further pages of results.
   *     The default is 100 and the maximum allowed page size is 1000. A value of 0 uses the default.</p>
   *          <p>This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
   *     Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>Contains details about the state machine.</p>
 * @public
 */
export interface StateMachineListItem {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the state machine.</p>
   * @public
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
   *                <p>brackets <code>< > \{ \} [ ]</code>
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
   * @public
   */
  name: string | undefined;

  /**
   * <p></p>
   * @public
   */
  type: StateMachineType | undefined;

  /**
   * <p>The date the state machine is created.</p>
   * @public
   */
  creationDate: Date | undefined;
}

/**
 * @public
 */
export interface ListStateMachinesOutput {
  stateMachines: StateMachineListItem[] | undefined;
  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
   *     Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListStateMachineVersionsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the state machine.</p>
   * @public
   */
  stateMachineArn: string | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
   *     Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results that are returned per call. You can use <code>nextToken</code> to obtain further pages of results.
   *     The default is 100 and the maximum allowed page size is 1000. A value of 0 uses the default.</p>
   *          <p>This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * <p>Contains details about a specific state machine version.</p>
 * @public
 */
export interface StateMachineVersionListItem {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies a state machine version. The version ARN is a combination of state machine ARN and the version number separated by a colon (:). For example, <code>stateMachineARN:1</code>.</p>
   * @public
   */
  stateMachineVersionArn: string | undefined;

  /**
   * <p>The creation date of a state machine version.</p>
   * @public
   */
  creationDate: Date | undefined;
}

/**
 * @public
 */
export interface ListStateMachineVersionsOutput {
  /**
   * <p>Versions for the state machine.</p>
   * @public
   */
  stateMachineVersions: StateMachineVersionListItem[] | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
   *     Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) for the Step Functions state machine or activity.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * <p>An array of tags associated with the resource.</p>
   * @public
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface PublishStateMachineVersionInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the state machine.</p>
   * @public
   */
  stateMachineArn: string | undefined;

  /**
   * <p>Only publish the state machine version if the current state machine's revision ID matches the specified ID.</p>
   *          <p>Use this option to avoid publishing a version if the state machine changed since you last
   *       updated it. If the specified revision ID doesn't match the state machine's current revision
   *       ID, the API returns <code>ConflictException</code>.</p>
   *          <note>
   *             <p>To specify an initial revision ID for a state machine with no revision ID assigned,
   *         specify the string <code>INITIAL</code> for the <code>revisionId</code> parameter. For
   *         example, you can specify a <code>revisionID</code> of <code>INITIAL</code> when you create a
   *         state machine using the <a>CreateStateMachine</a> API action.</p>
   *          </note>
   * @public
   */
  revisionId?: string;

  /**
   * <p>An optional description of the state machine version.</p>
   * @public
   */
  description?: string;
}

/**
 * @public
 */
export interface PublishStateMachineVersionOutput {
  /**
   * <p>The date the version was created.</p>
   * @public
   */
  creationDate: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) (ARN) that identifies the state machine version.</p>
   * @public
   */
  stateMachineVersionArn: string | undefined;
}

/**
 * <p>The maximum number of running executions has been reached. Running executions must end or
 *       be stopped before a new execution can be started.</p>
 * @public
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
 * <p>The execution Amazon Resource Name (ARN) that you specified for <code>executionArn</code> cannot be redriven.</p>
 * @public
 */
export class ExecutionNotRedrivable extends __BaseException {
  readonly name: "ExecutionNotRedrivable" = "ExecutionNotRedrivable";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ExecutionNotRedrivable, __BaseException>) {
    super({
      name: "ExecutionNotRedrivable",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ExecutionNotRedrivable.prototype);
  }
}

/**
 * @public
 */
export interface RedriveExecutionInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the execution to be redriven.</p>
   * @public
   */
  executionArn: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency. The API will return idempotent responses for the last 10 client tokens used to successfully redrive the execution. These client tokens are valid for up to 15 minutes after they are first used.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface RedriveExecutionOutput {
  /**
   * <p>The date the execution was last redriven.</p>
   * @public
   */
  redriveDate: Date | undefined;
}

/**
 * @public
 */
export interface SendTaskFailureInput {
  /**
   * <p>The token that represents this task. Task tokens are generated by Step Functions when
   *       tasks are assigned to a worker, or in the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/input-output-contextobject.html">context object</a> when a
   *       workflow enters a task state. See <a>GetActivityTaskOutput$taskToken</a>.</p>
   * @public
   */
  taskToken: string | undefined;

  /**
   * <p>The error code of the failure.</p>
   * @public
   */
  error?: string;

  /**
   * <p>A more detailed explanation of the cause of the failure.</p>
   * @public
   */
  cause?: string;
}

/**
 * @public
 */
export interface SendTaskFailureOutput {}

/**
 * <p>The activity does not exist.</p>
 * @public
 */
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

/**
 * <p>The task token has either expired or the task associated with the token has already been closed.</p>
 * @public
 */
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

/**
 * @public
 */
export interface SendTaskHeartbeatInput {
  /**
   * <p>The token that represents this task. Task tokens are generated by Step Functions when
   *       tasks are assigned to a worker, or in the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/input-output-contextobject.html">context object</a> when a
   *       workflow enters a task state. See <a>GetActivityTaskOutput$taskToken</a>.</p>
   * @public
   */
  taskToken: string | undefined;
}

/**
 * @public
 */
export interface SendTaskHeartbeatOutput {}

/**
 * <p>The provided JSON output data is not valid.</p>
 * @public
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

/**
 * @public
 */
export interface SendTaskSuccessInput {
  /**
   * <p>The token that represents this task. Task tokens are generated by Step Functions when
   *       tasks are assigned to a worker, or in the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/input-output-contextobject.html">context object</a> when a
   *       workflow enters a task state. See <a>GetActivityTaskOutput$taskToken</a>.</p>
   * @public
   */
  taskToken: string | undefined;

  /**
   * <p>The JSON output of the task. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.</p>
   * @public
   */
  output: string | undefined;
}

/**
 * @public
 */
export interface SendTaskSuccessOutput {}

/**
 * <p>The execution has the same <code>name</code> as another execution (but a different
 *         <code>input</code>).</p>
 *          <note>
 *             <p>Executions with the same <code>name</code> and <code>input</code> are considered
 *         idempotent.</p>
 *          </note>
 * @public
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
 * <p>The provided JSON input data is not valid.</p>
 * @public
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

/**
 * @public
 */
export interface StartExecutionInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the state machine to execute.</p>
   *          <p>The <code>stateMachineArn</code> parameter accepts one of the following inputs:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>An unqualified state machine ARN</b> – Refers to a state machine ARN that isn't qualified with a version or alias ARN. The following is an example of an unqualified state machine ARN.</p>
   *                <p>
   *                   <code>arn:<partition>:states:<region>:<account-id>:stateMachine:<myStateMachine></code>
   *                </p>
   *                <p>Step Functions doesn't associate state machine executions that you start with an unqualified ARN with a version. This is true even if that version uses the same revision that the execution used.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>A state machine version ARN</b> – Refers to a version ARN, which is a combination of state machine ARN and the version number separated by a colon (:). The following is an example of the ARN for version 10. </p>
   *                <p>
   *                   <code>arn:<partition>:states:<region>:<account-id>:stateMachine:<myStateMachine>:10</code>
   *                </p>
   *                <p>Step Functions doesn't associate executions that you start with a version ARN with any aliases that point to that version.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>A state machine alias ARN</b> – Refers to an alias ARN, which is a combination of state machine ARN and the alias name separated by a colon (:). The following is an example of the ARN for an alias named <code>PROD</code>.</p>
   *                <p>
   *                   <code>arn:<partition>:states:<region>:<account-id>:stateMachine:<myStateMachine:PROD></code>
   *                </p>
   *                <p>Step Functions associates executions
   *           that you start with an alias ARN with that alias and the state machine version used for
   *           that execution.</p>
   *             </li>
   *          </ul>
   * @public
   */
  stateMachineArn: string | undefined;

  /**
   * <p>Optional name of the execution.
   *       This name must be unique for your Amazon Web Services account, Region, and state machine for 90 days. For more information,
   *     see <a href="https://docs.aws.amazon.com/step-functions/latest/dg/limits.html#service-limits-state-machine-executions">
   *     Limits Related to State Machine Executions</a> in the <i>Step Functions Developer Guide</i>.</p>
   *          <p>If you don't provide a name for the execution, Step Functions automatically generates a universally unique identifier (UUID) as the execution name.</p>
   *          <p>A name must <i>not</i> contain:</p>
   *          <ul>
   *             <li>
   *                <p>white space</p>
   *             </li>
   *             <li>
   *                <p>brackets <code>< > \{ \} [ ]</code>
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
   * @public
   */
  name?: string;

  /**
   * <p>The string that contains the JSON input data for the execution, for example:</p>
   *          <p>
   *             <code>"input": "\{\"first_name\" : \"test\"\}"</code>
   *          </p>
   *          <note>
   *             <p>If you don't include any JSON input data, you still must include the two braces, for
   *         example: <code>"input": "\{\}"</code>
   *             </p>
   *          </note>
   *          <p>Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.</p>
   * @public
   */
  input?: string;

  /**
   * <p>Passes the X-Ray trace header. The trace header can also be passed in the request
   *       payload.</p>
   * @public
   */
  traceHeader?: string;
}

/**
 * @public
 */
export interface StartExecutionOutput {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the execution.</p>
   * @public
   */
  executionArn: string | undefined;

  /**
   * <p>The date the execution is started.</p>
   * @public
   */
  startDate: Date | undefined;
}

/**
 * @public
 */
export interface StartSyncExecutionInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the state machine to execute.</p>
   * @public
   */
  stateMachineArn: string | undefined;

  /**
   * <p>The name of the execution.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The string that contains the JSON input data for the execution, for example:</p>
   *          <p>
   *             <code>"input": "\{\"first_name\" : \"test\"\}"</code>
   *          </p>
   *          <note>
   *             <p>If you don't include any JSON input data, you still must include the two braces, for
   *         example: <code>"input": "\{\}"</code>
   *             </p>
   *          </note>
   *          <p>Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.</p>
   * @public
   */
  input?: string;

  /**
   * <p>Passes the X-Ray trace header. The trace header can also be passed in the request
   *       payload.</p>
   * @public
   */
  traceHeader?: string;
}

/**
 * <p>An object that describes workflow billing details.</p>
 * @public
 */
export interface BillingDetails {
  /**
   * <p>Billed memory consumption of your workflow, in MB.</p>
   * @public
   */
  billedMemoryUsedInMB?: number;

  /**
   * <p>Billed duration of your workflow, in milliseconds.</p>
   * @public
   */
  billedDurationInMilliseconds?: number;
}

/**
 * @public
 * @enum
 */
export const SyncExecutionStatus = {
  FAILED: "FAILED",
  SUCCEEDED: "SUCCEEDED",
  TIMED_OUT: "TIMED_OUT",
} as const;

/**
 * @public
 */
export type SyncExecutionStatus = (typeof SyncExecutionStatus)[keyof typeof SyncExecutionStatus];

/**
 * @public
 */
export interface StartSyncExecutionOutput {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the execution.</p>
   * @public
   */
  executionArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies the state machine.</p>
   * @public
   */
  stateMachineArn?: string;

  /**
   * <p>The name of the execution.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The date the execution is started.</p>
   * @public
   */
  startDate: Date | undefined;

  /**
   * <p>If the execution has already ended, the date the execution stopped.</p>
   * @public
   */
  stopDate: Date | undefined;

  /**
   * <p>The current status of the execution.</p>
   * @public
   */
  status: SyncExecutionStatus | undefined;

  /**
   * <p>The error code of the failure.</p>
   * @public
   */
  error?: string;

  /**
   * <p>A more detailed explanation of the cause of the failure.</p>
   * @public
   */
  cause?: string;

  /**
   * <p>The string that contains the JSON input data of the execution. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.</p>
   * @public
   */
  input?: string;

  /**
   * <p>Provides details about execution input or output.</p>
   * @public
   */
  inputDetails?: CloudWatchEventsExecutionDataDetails;

  /**
   * <p>The JSON output data of the execution. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.</p>
   *          <note>
   *             <p>This field is set only if the execution succeeds. If the execution fails, this field is
   *         null.</p>
   *          </note>
   * @public
   */
  output?: string;

  /**
   * <p>Provides details about execution input or output.</p>
   * @public
   */
  outputDetails?: CloudWatchEventsExecutionDataDetails;

  /**
   * <p>The X-Ray trace header that was passed to the execution.</p>
   * @public
   */
  traceHeader?: string;

  /**
   * <p>An object that describes workflow billing details, including billed duration and memory
   *       use.</p>
   * @public
   */
  billingDetails?: BillingDetails;
}

/**
 * @public
 */
export interface StopExecutionInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the execution to stop.</p>
   * @public
   */
  executionArn: string | undefined;

  /**
   * <p>The error code of the failure.</p>
   * @public
   */
  error?: string;

  /**
   * <p>A more detailed explanation of the cause of the failure.</p>
   * @public
   */
  cause?: string;
}

/**
 * @public
 */
export interface StopExecutionOutput {
  /**
   * <p>The date the execution is stopped.</p>
   * @public
   */
  stopDate: Date | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) for the Step Functions state machine or activity.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The list of tags to add to a resource.</p>
   *          <p>Tags may only contain Unicode letters, digits, white space, or these symbols: <code>_ . : / = + - @</code>.</p>
   * @public
   */
  tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceOutput {}

/**
 * @public
 * @enum
 */
export const InspectionLevel = {
  DEBUG: "DEBUG",
  INFO: "INFO",
  TRACE: "TRACE",
} as const;

/**
 * @public
 */
export type InspectionLevel = (typeof InspectionLevel)[keyof typeof InspectionLevel];

/**
 * @public
 */
export interface TestStateInput {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html">Amazon States Language</a> (ASL) definition of the state.</p>
   * @public
   */
  definition: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the execution role with the required IAM permissions for the state.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>A string that contains the JSON input data for the state.</p>
   * @public
   */
  input?: string;

  /**
   * <p>Determines the values to return when a state is tested. You can specify one of the following types:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INFO</code>: Shows the final state output. By default, Step Functions sets <code>inspectionLevel</code> to <code>INFO</code> if you don't specify a level.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DEBUG</code>: Shows the final state output along with the input and output data processing result.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TRACE</code>: Shows the HTTP request and response for an HTTP Task. This level also shows the final state output along with the input and output data processing result.</p>
   *             </li>
   *          </ul>
   *          <p>Each of these levels also provide information about the status of the state execution and the next state to transition to.</p>
   * @public
   */
  inspectionLevel?: InspectionLevel;

  /**
   * <p>Specifies whether or not to include secret information in the test result. For HTTP Tasks, a secret includes the data that an EventBridge connection adds to modify the HTTP request headers, query parameters, and body. Step Functions doesn't omit any information included in the state definition or the HTTP response.</p>
   *          <p>If you set <code>revealSecrets</code> to <code>true</code>, you must make sure that the IAM user that calls the <code>TestState</code> API has permission for the <code>states:RevealSecrets</code> action. For an example of IAM policy that sets the <code>states:RevealSecrets</code> permission, see <a href="https://docs.aws.amazon.com/step-functions/latest/dg/test-state-isolation.html#test-state-permissions">IAM permissions to test a state</a>. Without this permission, Step Functions throws an access denied error.</p>
   *          <p>By default, <code>revealSecrets</code> is set to <code>false</code>.</p>
   * @public
   */
  revealSecrets?: boolean;
}

/**
 * <p>Contains additional details about the state's execution, including its input and output data processing flow, and HTTP request information.</p>
 * @public
 */
export interface InspectionDataRequest {
  /**
   * <p>The protocol used to make the HTTP request.</p>
   * @public
   */
  protocol?: string;

  /**
   * <p>The HTTP method used for the HTTP request.</p>
   * @public
   */
  method?: string;

  /**
   * <p>The API endpoint used for the HTTP request.</p>
   * @public
   */
  url?: string;

  /**
   * <p>The request headers associated with the HTTP request.</p>
   * @public
   */
  headers?: string;

  /**
   * <p>The request body for the HTTP request.</p>
   * @public
   */
  body?: string;
}

/**
 * <p>Contains additional details about the state's execution, including its input and output data processing flow, and HTTP response information. The <code>inspectionLevel</code> request parameter specifies which details are returned.</p>
 * @public
 */
export interface InspectionDataResponse {
  /**
   * <p>The protocol used to return the HTTP response.</p>
   * @public
   */
  protocol?: string;

  /**
   * <p>The HTTP response status code for the HTTP response.</p>
   * @public
   */
  statusCode?: string;

  /**
   * <p>The message associated with the HTTP status code.</p>
   * @public
   */
  statusMessage?: string;

  /**
   * <p>The response headers associated with the HTTP response.</p>
   * @public
   */
  headers?: string;

  /**
   * <p>The HTTP response returned.</p>
   * @public
   */
  body?: string;
}

/**
 * <p>Contains additional details about the state's execution, including its input and output data processing flow, and HTTP request and response information.</p>
 * @public
 */
export interface InspectionData {
  /**
   * <p>The raw state input.</p>
   * @public
   */
  input?: string;

  /**
   * <p>The input after Step Functions applies the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/input-output-inputpath-params.html#input-output-inputpath">InputPath</a> filter.</p>
   * @public
   */
  afterInputPath?: string;

  /**
   * <p>The effective input after Step Functions applies the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/input-output-inputpath-params.html#input-output-parameters">Parameters</a> filter.</p>
   * @public
   */
  afterParameters?: string;

  /**
   * <p>The state's raw result.</p>
   * @public
   */
  result?: string;

  /**
   * <p>The effective result after Step Functions applies the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/input-output-inputpath-params.html#input-output-resultselector">ResultSelector</a> filter.</p>
   * @public
   */
  afterResultSelector?: string;

  /**
   * <p>The effective result combined with the raw state input after Step Functions applies the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/input-output-resultpath.html">ResultPath</a> filter.</p>
   * @public
   */
  afterResultPath?: string;

  /**
   * <p>The raw HTTP request that is sent when you test an HTTP Task.</p>
   * @public
   */
  request?: InspectionDataRequest;

  /**
   * <p>The raw HTTP response that is returned when you test an HTTP Task.</p>
   * @public
   */
  response?: InspectionDataResponse;
}

/**
 * @public
 * @enum
 */
export const TestExecutionStatus = {
  CAUGHT_ERROR: "CAUGHT_ERROR",
  FAILED: "FAILED",
  RETRIABLE: "RETRIABLE",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type TestExecutionStatus = (typeof TestExecutionStatus)[keyof typeof TestExecutionStatus];

/**
 * @public
 */
export interface TestStateOutput {
  /**
   * <p>The JSON output data of the state. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.</p>
   * @public
   */
  output?: string;

  /**
   * <p>The error returned when the execution of a state fails.</p>
   * @public
   */
  error?: string;

  /**
   * <p>A detailed explanation of the cause for the error when the execution of a state fails.</p>
   * @public
   */
  cause?: string;

  /**
   * <p>Returns additional details about the state's execution, including its input and output data processing flow, and HTTP request and response information. The <code>inspectionLevel</code> request parameter specifies which details are returned.</p>
   * @public
   */
  inspectionData?: InspectionData;

  /**
   * <p>The name of the next state to transition to. If you haven't defined a next state in your definition or if the execution of the state fails, this ﬁeld doesn't contain a value.</p>
   * @public
   */
  nextState?: string;

  /**
   * <p>The execution status of the state.</p>
   * @public
   */
  status?: TestExecutionStatus;
}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) for the Step Functions state machine or activity.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The list of tags to remove from the resource.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}

/**
 * @public
 */
export interface UpdateMapRunInput {
  /**
   * <p>The Amazon Resource Name (ARN) of a Map Run.</p>
   * @public
   */
  mapRunArn: string | undefined;

  /**
   * <p>The maximum number of child workflow executions that can be specified to run in parallel for the Map Run at the same time.</p>
   * @public
   */
  maxConcurrency?: number;

  /**
   * <p>The maximum percentage of failed items before the Map Run fails.</p>
   * @public
   */
  toleratedFailurePercentage?: number;

  /**
   * <p>The maximum number of failed items before the Map Run fails.</p>
   * @public
   */
  toleratedFailureCount?: number;
}

/**
 * @public
 */
export interface UpdateMapRunOutput {}

/**
 * <p>Request is missing a required parameter. This error occurs if both <code>definition</code>
 *       and <code>roleArn</code> are not specified.</p>
 * @public
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

/**
 * @public
 */
export interface UpdateStateMachineInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the state machine.</p>
   * @public
   */
  stateMachineArn: string | undefined;

  /**
   * <p>The Amazon States Language definition of the state machine. See <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html">Amazon States Language</a>.</p>
   * @public
   */
  definition?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role of the state machine.</p>
   * @public
   */
  roleArn?: string;

  /**
   * <p>Use the <code>LoggingConfiguration</code> data type to set CloudWatch Logs
   *       options.</p>
   * @public
   */
  loggingConfiguration?: LoggingConfiguration;

  /**
   * <p>Selects whether X-Ray tracing is enabled.</p>
   * @public
   */
  tracingConfiguration?: TracingConfiguration;

  /**
   * <p>Specifies whether the state machine version is published. The default is
   *         <code>false</code>. To publish a version after updating the state machine, set
   *         <code>publish</code> to <code>true</code>.</p>
   * @public
   */
  publish?: boolean;

  /**
   * <p>An optional description of the state machine version to publish.</p>
   *          <p>You can only specify the <code>versionDescription</code> parameter if you've set <code>publish</code> to <code>true</code>.</p>
   * @public
   */
  versionDescription?: string;
}

/**
 * @public
 */
export interface UpdateStateMachineOutput {
  /**
   * <p>The date and time the state machine was updated.</p>
   * @public
   */
  updateDate: Date | undefined;

  /**
   * <p>The revision identifier for the updated state machine.</p>
   * @public
   */
  revisionId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the published state machine version.</p>
   *          <p>If the <code>publish</code> parameter isn't set to <code>true</code>, this field returns null.</p>
   * @public
   */
  stateMachineVersionArn?: string;
}

/**
 * @public
 */
export interface UpdateStateMachineAliasInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the state machine alias.</p>
   * @public
   */
  stateMachineAliasArn: string | undefined;

  /**
   * <p>A description of the state machine alias.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The routing configuration of the state machine alias.</p>
   *          <p>An array of <code>RoutingConfig</code> objects that specifies up to two state machine versions that the alias starts executions for.</p>
   * @public
   */
  routingConfiguration?: RoutingConfigurationListItem[];
}

/**
 * @public
 */
export interface UpdateStateMachineAliasOutput {
  /**
   * <p>The date and time the state machine alias was updated.</p>
   * @public
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
export const CreateStateMachineInputFilterSensitiveLog = (obj: CreateStateMachineInput): any => ({
  ...obj,
  ...(obj.definition && { definition: SENSITIVE_STRING }),
  ...(obj.versionDescription && { versionDescription: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateStateMachineAliasInputFilterSensitiveLog = (obj: CreateStateMachineAliasInput): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeExecutionOutputFilterSensitiveLog = (obj: DescribeExecutionOutput): any => ({
  ...obj,
  ...(obj.input && { input: SENSITIVE_STRING }),
  ...(obj.output && { output: SENSITIVE_STRING }),
  ...(obj.error && { error: SENSITIVE_STRING }),
  ...(obj.cause && { cause: SENSITIVE_STRING }),
  ...(obj.redriveStatusReason && { redriveStatusReason: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeStateMachineOutputFilterSensitiveLog = (obj: DescribeStateMachineOutput): any => ({
  ...obj,
  ...(obj.definition && { definition: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeStateMachineAliasOutputFilterSensitiveLog = (obj: DescribeStateMachineAliasOutput): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
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
export const GetActivityTaskOutputFilterSensitiveLog = (obj: GetActivityTaskOutput): any => ({
  ...obj,
  ...(obj.input && { input: SENSITIVE_STRING }),
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
export const MapRunFailedEventDetailsFilterSensitiveLog = (obj: MapRunFailedEventDetails): any => ({
  ...obj,
  ...(obj.error && { error: SENSITIVE_STRING }),
  ...(obj.cause && { cause: SENSITIVE_STRING }),
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
  ...(obj.mapRunFailedEventDetails && {
    mapRunFailedEventDetails: MapRunFailedEventDetailsFilterSensitiveLog(obj.mapRunFailedEventDetails),
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
export const PublishStateMachineVersionInputFilterSensitiveLog = (obj: PublishStateMachineVersionInput): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
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
export const SendTaskSuccessInputFilterSensitiveLog = (obj: SendTaskSuccessInput): any => ({
  ...obj,
  ...(obj.output && { output: SENSITIVE_STRING }),
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
export const StartSyncExecutionInputFilterSensitiveLog = (obj: StartSyncExecutionInput): any => ({
  ...obj,
  ...(obj.input && { input: SENSITIVE_STRING }),
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
export const TestStateInputFilterSensitiveLog = (obj: TestStateInput): any => ({
  ...obj,
  ...(obj.definition && { definition: SENSITIVE_STRING }),
  ...(obj.input && { input: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const InspectionDataFilterSensitiveLog = (obj: InspectionData): any => ({
  ...obj,
  ...(obj.input && { input: SENSITIVE_STRING }),
  ...(obj.afterInputPath && { afterInputPath: SENSITIVE_STRING }),
  ...(obj.afterParameters && { afterParameters: SENSITIVE_STRING }),
  ...(obj.result && { result: SENSITIVE_STRING }),
  ...(obj.afterResultSelector && { afterResultSelector: SENSITIVE_STRING }),
  ...(obj.afterResultPath && { afterResultPath: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TestStateOutputFilterSensitiveLog = (obj: TestStateOutput): any => ({
  ...obj,
  ...(obj.output && { output: SENSITIVE_STRING }),
  ...(obj.error && { error: SENSITIVE_STRING }),
  ...(obj.cause && { cause: SENSITIVE_STRING }),
  ...(obj.inspectionData && { inspectionData: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateStateMachineInputFilterSensitiveLog = (obj: UpdateStateMachineInput): any => ({
  ...obj,
  ...(obj.definition && { definition: SENSITIVE_STRING }),
  ...(obj.versionDescription && { versionDescription: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateStateMachineAliasInputFilterSensitiveLog = (obj: UpdateStateMachineAliasInput): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
});
