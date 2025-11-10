// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { SFNServiceException as __BaseException } from "./SFNServiceException";

/**
 * <p>Activity already exists. <code>EncryptionConfiguration</code> may not be updated.</p>
 * @public
 */
export class ActivityAlreadyExists extends __BaseException {
  readonly name: "ActivityAlreadyExists" = "ActivityAlreadyExists";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ActivityAlreadyExists, __BaseException>) {
    super({
      name: "ActivityAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ActivityAlreadyExists.prototype);
  }
}

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
  error?: string | undefined;

  /**
   * <p>A more detailed explanation of the cause of the failure.</p>
   * @public
   */
  cause?: string | undefined;
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
   *                <p>control characters (<code>U+0000-001F</code>, <code>U+007F-009F</code>, <code>U+FFFE-FFFF</code>)</p>
   *             </li>
   *             <li>
   *                <p>surrogates (<code>U+D800-DFFF</code>)</p>
   *             </li>
   *             <li>
   *                <p>invalid characters (<code> U+10FFFF</code>)</p>
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
   *       for API calls. In CloudWatch logs, the value will be true if the data is truncated due to size limits.</p>
   * @public
   */
  truncated?: boolean | undefined;
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
  input?: string | undefined;

  /**
   * <p>Contains details about the input for an execution history event.</p>
   * @public
   */
  inputDetails?: HistoryEventExecutionDataDetails | undefined;

  /**
   * <p>The maximum allowed duration of the activity task.</p>
   * @public
   */
  timeoutInSeconds?: number | undefined;

  /**
   * <p>The maximum allowed duration between two heartbeats for the activity task.</p>
   * @public
   */
  heartbeatInSeconds?: number | undefined;
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
  error?: string | undefined;

  /**
   * <p>A more detailed explanation of the cause of the failure.</p>
   * @public
   */
  cause?: string | undefined;
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
  workerName?: string | undefined;
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
  output?: string | undefined;

  /**
   * <p>Contains details about the output of an execution history event.</p>
   * @public
   */
  outputDetails?: HistoryEventExecutionDataDetails | undefined;
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
  error?: string | undefined;

  /**
   * <p>A more detailed explanation of the cause of the timeout.</p>
   * @public
   */
  cause?: string | undefined;
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
 * <p>Provides details about assigned variables in an execution history event.</p>
 * @public
 */
export interface AssignedVariablesDetails {
  /**
   * <p>Indicates whether assigned variables were truncated in the response. Always <code>false</code>
   *     for API calls. In CloudWatch logs, the value will be true if the data is truncated due to size limits.</p>
   * @public
   */
  truncated?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const EncryptionType = {
  AWS_OWNED_KEY: "AWS_OWNED_KEY",
  CUSTOMER_MANAGED_KMS_KEY: "CUSTOMER_MANAGED_KMS_KEY",
} as const;

/**
 * @public
 */
export type EncryptionType = (typeof EncryptionType)[keyof typeof EncryptionType];

/**
 * <p>Settings to configure server-side encryption. </p>
 *          <p>
 *         For additional control over security, you can encrypt your data using a <b>customer-managed key</b> for  Step Functions state machines and activities. You can configure a symmetric KMS key and data key reuse period when creating or updating a <b>State Machine</b>, and when creating an <b>Activity</b>. The execution history and state machine definition will be encrypted with the key applied to the State Machine. Activity inputs will be encrypted with the key applied to the Activity.
 *     </p>
 *          <note>
 *             <p> Step Functions automatically enables encryption at rest using  Amazon Web Services owned keys at no charge. However, KMS charges apply when using a customer managed key. For more information about pricing, see <a href="https://aws.amazon.com/kms/pricing/">Key Management Service pricing</a>.</p>
 *          </note>
 *          <p>For more information on KMS, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/overview.html">What is  Key Management Service?</a>
 *          </p>
 * @public
 */
export interface EncryptionConfiguration {
  /**
   * <p>An alias, alias ARN, key ID, or key ARN of a symmetric encryption KMS key to encrypt data. To specify a KMS key in a different Amazon Web Services  account, you must use the key ARN or alias ARN.</p>
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>Maximum duration that Step Functions will reuse data keys. When the period expires, Step Functions will call <code>GenerateDataKey</code>. Only applies to customer managed keys.</p>
   * @public
   */
  kmsDataKeyReusePeriodSeconds?: number | undefined;

  /**
   * <p>Encryption type</p>
   * @public
   */
  type: EncryptionType | undefined;
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
  key?: string | undefined;

  /**
   * <p>The value of a tag.</p>
   * @public
   */
  value?: string | undefined;
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
   *                <p>control characters (<code>U+0000-001F</code>, <code>U+007F-009F</code>, <code>U+FFFE-FFFF</code>)</p>
   *             </li>
   *             <li>
   *                <p>surrogates (<code>U+D800-DFFF</code>)</p>
   *             </li>
   *             <li>
   *                <p>invalid characters (<code> U+10FFFF</code>)</p>
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
  tags?: Tag[] | undefined;

  /**
   * <p>Settings to configure server-side encryption.</p>
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;
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
 * <p>Received when <code>encryptionConfiguration</code> is specified but various conditions exist which make the configuration invalid. For example, if <code>type</code> is set to <code>CUSTOMER_MANAGED_KMS_KEY</code>, but <code>kmsKeyId</code> is null, or <code>kmsDataKeyReusePeriodSeconds</code> is not between 60 and 900, or the KMS key is not symmetric or inactive.</p>
 * @public
 */
export class InvalidEncryptionConfiguration extends __BaseException {
  readonly name: "InvalidEncryptionConfiguration" = "InvalidEncryptionConfiguration";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidEncryptionConfiguration, __BaseException>) {
    super({
      name: "InvalidEncryptionConfiguration",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidEncryptionConfiguration.prototype);
  }
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
 * <p>Either your KMS key policy or API caller does not have the required permissions.</p>
 * @public
 */
export class KmsAccessDeniedException extends __BaseException {
  readonly name: "KmsAccessDeniedException" = "KmsAccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KmsAccessDeniedException, __BaseException>) {
    super({
      name: "KmsAccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KmsAccessDeniedException.prototype);
  }
}

/**
 * <p>Received when KMS returns <code>ThrottlingException</code> for a KMS call that Step Functions makes on behalf of the caller.</p>
 * @public
 */
export class KmsThrottlingException extends __BaseException {
  readonly name: "KmsThrottlingException" = "KmsThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KmsThrottlingException, __BaseException>) {
    super({
      name: "KmsThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KmsThrottlingException.prototype);
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
  resourceName?: string | undefined;
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
  logGroupArn?: string | undefined;
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
  cloudWatchLogsLogGroup?: CloudWatchLogsLogGroup | undefined;
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
  level?: LogLevel | undefined;

  /**
   * <p>Determines whether execution data is included in your log. When set to <code>false</code>,
   *       data is excluded.</p>
   * @public
   */
  includeExecutionData?: boolean | undefined;

  /**
   * <p>An array of objects that describes where your execution history events will be logged.
   *       Limited to size 1. Required, if your log level is not set to <code>OFF</code>.</p>
   * @public
   */
  destinations?: LogDestination[] | undefined;
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
  enabled?: boolean | undefined;
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
   *                <p>control characters (<code>U+0000-001F</code>, <code>U+007F-009F</code>, <code>U+FFFE-FFFF</code>)</p>
   *             </li>
   *             <li>
   *                <p>surrogates (<code>U+D800-DFFF</code>)</p>
   *             </li>
   *             <li>
   *                <p>invalid characters (<code> U+10FFFF</code>)</p>
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
  type?: StateMachineType | undefined;

  /**
   * <p>Defines what execution history events are logged and where they are logged.</p>
   *          <note>
   *             <p>By default, the <code>level</code> is set to <code>OFF</code>. For more information see
   *           <a href="https://docs.aws.amazon.com/step-functions/latest/dg/cloudwatch-log-level.html">Log
   *           Levels</a> in the Step Functions User Guide.</p>
   *          </note>
   * @public
   */
  loggingConfiguration?: LoggingConfiguration | undefined;

  /**
   * <p>Tags to be added when creating a state machine.</p>
   *          <p>An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using
   *       Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management User
   *         Guide</i>, and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_iam-tags.html">Controlling Access Using IAM
   *           Tags</a>.</p>
   *          <p>Tags may only contain Unicode letters, digits, white space, or these symbols: <code>_ . : / = + - @</code>.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>Selects whether X-Ray tracing is enabled.</p>
   * @public
   */
  tracingConfiguration?: TracingConfiguration | undefined;

  /**
   * <p>Set to <code>true</code> to publish the first version of the state machine during creation. The default is <code>false</code>.</p>
   * @public
   */
  publish?: boolean | undefined;

  /**
   * <p>Sets description about the state machine version. You can only set the description if the <code>publish</code> parameter is set to <code>true</code>. Otherwise, if you set <code>versionDescription</code>, but <code>publish</code> to <code>false</code>, this API action throws <code>ValidationException</code>.</p>
   * @public
   */
  versionDescription?: string | undefined;

  /**
   * <p>Settings to configure server-side encryption.</p>
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;
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
  stateMachineVersionArn?: string | undefined;
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
 * <p>Configuration is not valid.</p>
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
 * <p>State machine type is not supported.</p>
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
  reason?: ValidationExceptionReason | undefined;

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
   * <p>The percentage of traffic you want to route to a state machine version. The sum of the
   *       weights in the routing configuration must be equal to 100.</p>
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
  description?: string | undefined;

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
  resourceName?: string | undefined;
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
   *                <p>control characters (<code>U+0000-001F</code>, <code>U+007F-009F</code>, <code>U+FFFE-FFFF</code>)</p>
   *             </li>
   *             <li>
   *                <p>surrogates (<code>U+D800-DFFF</code>)</p>
   *             </li>
   *             <li>
   *                <p>invalid characters (<code> U+10FFFF</code>)</p>
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

  /**
   * <p>Settings for configured server-side encryption.</p>
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;
}

/**
 * @public
 * @enum
 */
export const IncludedData = {
  ALL_DATA: "ALL_DATA",
  METADATA_ONLY: "METADATA_ONLY",
} as const;

/**
 * @public
 */
export type IncludedData = (typeof IncludedData)[keyof typeof IncludedData];

/**
 * @public
 */
export interface DescribeExecutionInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the execution to describe.</p>
   * @public
   */
  executionArn: string | undefined;

  /**
   * <p>If your state machine definition is encrypted with a KMS key, callers must have <code>kms:Decrypt</code> permission to decrypt the definition. Alternatively, you can call DescribeStateMachine API with <code>includedData = METADATA_ONLY</code> to get a successful response without the encrypted definition.</p>
   * @public
   */
  includedData?: IncludedData | undefined;
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
  included?: boolean | undefined;
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
   *                <p>control characters (<code>U+0000-001F</code>, <code>U+007F-009F</code>, <code>U+FFFE-FFFF</code>)</p>
   *             </li>
   *             <li>
   *                <p>surrogates (<code>U+D800-DFFF</code>)</p>
   *             </li>
   *             <li>
   *                <p>invalid characters (<code> U+10FFFF</code>)</p>
   *             </li>
   *          </ul>
   *          <p>To enable logging with CloudWatch Logs, the name should only contain  0-9, A-Z, a-z, - and _.</p>
   * @public
   */
  name?: string | undefined;

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
  stopDate?: Date | undefined;

  /**
   * <p>The string that contains the JSON input data of the execution. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.</p>
   * @public
   */
  input?: string | undefined;

  /**
   * <p>Provides details about execution input or output.</p>
   * @public
   */
  inputDetails?: CloudWatchEventsExecutionDataDetails | undefined;

  /**
   * <p>The JSON output data of the execution. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.</p>
   *          <note>
   *             <p>This field is set only if the execution succeeds. If the execution fails, this field is
   *         null.</p>
   *          </note>
   * @public
   */
  output?: string | undefined;

  /**
   * <p>Provides details about execution input or output.</p>
   * @public
   */
  outputDetails?: CloudWatchEventsExecutionDataDetails | undefined;

  /**
   * <p>The X-Ray trace header that was passed to the execution.</p>
   *          <note>
   *             <p>
   *                 For X-Ray traces, all Amazon Web Services services use the <code>X-Amzn-Trace-Id</code> header from the HTTP request. Using the header is the preferred mechanism to identify a trace. <code>StartExecution</code> and <code>StartSyncExecution</code> API operations can also use <code>traceHeader</code> from the body of the request payload. If <b>both</b> sources are provided, Step Functions will use the <b>header value</b> (preferred) over the value in the request body.
   *             </p>
   *          </note>
   * @public
   */
  traceHeader?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies a Map Run, which dispatched this execution.</p>
   * @public
   */
  mapRunArn?: string | undefined;

  /**
   * <p>The error string if the state machine execution failed.</p>
   * @public
   */
  error?: string | undefined;

  /**
   * <p>The cause string if the state machine execution failed.</p>
   * @public
   */
  cause?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the state machine version associated with the execution. The version ARN is a combination of state machine ARN and the version number separated by a colon (:). For example, <code>stateMachineARN:1</code>.</p>
   *          <p>If you start an execution from a <code>StartExecution</code> request without specifying a
   *       state machine version or alias ARN, Step Functions returns a null value.</p>
   * @public
   */
  stateMachineVersionArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the state machine alias associated with the execution. The alias ARN is a combination of state machine ARN and the alias name separated by a colon (:). For example, <code>stateMachineARN:PROD</code>.</p>
   *          <p>If you start an execution from a <code>StartExecution</code> request with a
   *       state machine version ARN, this field will be null.</p>
   * @public
   */
  stateMachineAliasArn?: string | undefined;

  /**
   * <p>The number of times you've redriven an execution. If you have not yet redriven an execution, the <code>redriveCount</code> is 0. This count is only updated if you successfully redrive an execution.</p>
   * @public
   */
  redriveCount?: number | undefined;

  /**
   * <p>The date the execution was last redriven. If you have not yet redriven an execution, the <code>redriveDate</code> is null.</p>
   *          <p>The <code>redriveDate</code> is unavailable if you redrive a Map Run that starts child workflow executions of type <code>EXPRESS</code>.</p>
   * @public
   */
  redriveDate?: Date | undefined;

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
  redriveStatus?: ExecutionRedriveStatus | undefined;

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
  redriveStatusReason?: string | undefined;
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
 * @enum
 */
export const KmsKeyState = {
  CREATING: "CREATING",
  DISABLED: "DISABLED",
  PENDING_DELETION: "PENDING_DELETION",
  PENDING_IMPORT: "PENDING_IMPORT",
  UNAVAILABLE: "UNAVAILABLE",
} as const;

/**
 * @public
 */
export type KmsKeyState = (typeof KmsKeyState)[keyof typeof KmsKeyState];

/**
 * <p>The KMS key is not in valid state, for example: Disabled or Deleted.</p>
 * @public
 */
export class KmsInvalidStateException extends __BaseException {
  readonly name: "KmsInvalidStateException" = "KmsInvalidStateException";
  readonly $fault: "client" = "client";
  /**
   * <p>Current status of the KMS; key. For example: <code>DISABLED</code>, <code>PENDING_DELETION</code>, <code>PENDING_IMPORT</code>, <code>UNAVAILABLE</code>, <code>CREATING</code>.</p>
   * @public
   */
  kmsKeyState?: KmsKeyState | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KmsInvalidStateException, __BaseException>) {
    super({
      name: "KmsInvalidStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KmsInvalidStateException.prototype);
    this.kmsKeyState = opts.kmsKeyState;
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
  failuresNotRedrivable?: number | undefined;

  /**
   * <p>The number of unsuccessful child workflow executions currently waiting to be redriven. The status of these child workflow executions could be <code>FAILED</code>, <code>ABORTED</code>, or <code>TIMED_OUT</code> in the original execution attempt or a previous redrive attempt.</p>
   * @public
   */
  pendingRedrive?: number | undefined;
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
  failuresNotRedrivable?: number | undefined;

  /**
   * <p>The number of unsuccessful items in child workflow executions currently waiting to be redriven.</p>
   * @public
   */
  pendingRedrive?: number | undefined;
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
  stopDate?: Date | undefined;

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
  redriveCount?: number | undefined;

  /**
   * <p>The date a Map Run was last redriven. If you have not yet redriven a Map Run, the <code>redriveDate</code> is null.</p>
   * @public
   */
  redriveDate?: Date | undefined;
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

  /**
   * <p>If your state machine definition is encrypted with a KMS key, callers must have <code>kms:Decrypt</code> permission to decrypt the definition. Alternatively, you can call the API with <code>includedData = METADATA_ONLY</code> to get a successful response without the encrypted definition.</p>
   *          <note>
   *             <p>
   *             When calling a labelled ARN for an encrypted state machine, the <code>includedData = METADATA_ONLY</code> parameter will not apply because Step Functions needs to decrypt the entire state machine definition to get the Distributed Map state’s definition. In this case, the API caller needs to have <code>kms:Decrypt</code> permission.
   *         </p>
   *          </note>
   * @public
   */
  includedData?: IncludedData | undefined;
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
   *                <p>control characters (<code>U+0000-001F</code>, <code>U+007F-009F</code>, <code>U+FFFE-FFFF</code>)</p>
   *             </li>
   *             <li>
   *                <p>surrogates (<code>U+D800-DFFF</code>)</p>
   *             </li>
   *             <li>
   *                <p>invalid characters (<code> U+10FFFF</code>)</p>
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
  status?: StateMachineStatus | undefined;

  /**
   * <p>The Amazon States Language definition of the state machine. See <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html">Amazon States Language</a>.</p>
   *          <p>If called with <code>includedData = METADATA_ONLY</code>, the returned definition will be <code>\{\}</code>.</p>
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
  loggingConfiguration?: LoggingConfiguration | undefined;

  /**
   * <p>Selects whether X-Ray tracing is enabled.</p>
   * @public
   */
  tracingConfiguration?: TracingConfiguration | undefined;

  /**
   * <p>A user-defined or an auto-generated string that identifies a <code>Map</code> state. This parameter is present only if the <code>stateMachineArn</code> specified in input is a qualified state machine ARN.</p>
   * @public
   */
  label?: string | undefined;

  /**
   * <p>The revision identifier for the state machine.</p>
   *          <p>Use the <code>revisionId</code> parameter to compare between versions of a state machine
   *       configuration used for executions without performing a diff of the properties, such as
   *         <code>definition</code> and <code>roleArn</code>.</p>
   * @public
   */
  revisionId?: string | undefined;

  /**
   * <p>The description of the state machine version.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Settings to configure server-side encryption. </p>
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * <p>A map of <b>state name</b> to a list of variables referenced by that state. States that do not use variable references will not be shown in the response.</p>
   * @public
   */
  variableReferences?: Record<string, string[]> | undefined;
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
  stateMachineAliasArn?: string | undefined;

  /**
   * <p>The name of the state machine alias.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A description of the alias.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The routing configuration of the alias.</p>
   * @public
   */
  routingConfiguration?: RoutingConfigurationListItem[] | undefined;

  /**
   * <p>The date the state machine alias was created.</p>
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * <p>The date the state machine alias was last updated.</p>
   *          <p>For a newly created state machine, this is the same as the creation date.</p>
   * @public
   */
  updateDate?: Date | undefined;
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

  /**
   * <p>If your state machine definition is encrypted with a KMS key, callers must have <code>kms:Decrypt</code> permission to decrypt the definition. Alternatively, you can call the API with <code>includedData = METADATA_ONLY</code> to get a successful response without the encrypted definition.</p>
   * @public
   */
  includedData?: IncludedData | undefined;
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
  loggingConfiguration?: LoggingConfiguration | undefined;

  /**
   * <p>Selects whether X-Ray tracing is enabled.</p>
   * @public
   */
  tracingConfiguration?: TracingConfiguration | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Map Run that started the child workflow execution. This field is returned only if the <code>executionArn</code> is a child workflow execution that was started by a Distributed Map state.</p>
   * @public
   */
  mapRunArn?: string | undefined;

  /**
   * <p>A user-defined or an auto-generated string that identifies a <code>Map</code> state. This field is returned only if the <code>executionArn</code> is a child workflow execution that was started by a Distributed Map state.</p>
   * @public
   */
  label?: string | undefined;

  /**
   * <p>The revision identifier for the state machine. The first revision ID when you create the state machine is null.</p>
   *          <p>Use the state machine <code>revisionId</code> parameter to compare the revision of a state machine with the configuration of the state machine used for executions without performing a diff of the properties, such as <code>definition</code> and <code>roleArn</code>.</p>
   * @public
   */
  revisionId?: string | undefined;

  /**
   * <p>Settings to configure server-side encryption. </p>
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * <p>A map of <b>state name</b> to a list of variables referenced by that state. States that do not use variable references will not be shown in the response.</p>
   * @public
   */
  variableReferences?: Record<string, string[]> | undefined;
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
  workerName?: string | undefined;
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
  taskToken?: string | undefined;

  /**
   * <p>The string that contains the JSON input data for the task. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.</p>
   * @public
   */
  input?: string | undefined;
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
  maxResults?: number | undefined;

  /**
   * <p>Lists events in descending order of their <code>timeStamp</code>.</p>
   * @public
   */
  reverseOrder?: boolean | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
   *     Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>You can select whether execution data (input or output of a history event) is returned.
   *       The default is <code>true</code>.</p>
   * @public
   */
  includeExecutionData?: boolean | undefined;
}

/**
 * <p>Contains details about an evaluation failure that occurred while processing a state, for example, when a JSONata expression throws an error. This event will only be present in state machines that have <b> QueryLanguage</b> set to JSONata, or individual states set to JSONata.</p>
 * @public
 */
export interface EvaluationFailedEventDetails {
  /**
   * <p>The error code of the failure.</p>
   * @public
   */
  error?: string | undefined;

  /**
   * <p>A more detailed explanation of the cause of the failure.</p>
   * @public
   */
  cause?: string | undefined;

  /**
   * <p>The location of the field in the state in which the evaluation error occurred.</p>
   * @public
   */
  location?: string | undefined;

  /**
   * <p>The name of the state in which the evaluation error occurred.</p>
   * @public
   */
  state: string | undefined;
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
  error?: string | undefined;

  /**
   * <p>A more detailed explanation of the cause of the failure.</p>
   * @public
   */
  cause?: string | undefined;
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
  error?: string | undefined;

  /**
   * <p>A more detailed explanation of the cause of the failure.</p>
   * @public
   */
  cause?: string | undefined;
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
  redriveCount?: number | undefined;
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
  input?: string | undefined;

  /**
   * <p>Contains details about the input for an execution history event.</p>
   * @public
   */
  inputDetails?: HistoryEventExecutionDataDetails | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role used for executing Lambda tasks.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies a state machine alias used for starting the state machine execution.</p>
   * @public
   */
  stateMachineAliasArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies a state machine version used for starting the state machine execution.</p>
   * @public
   */
  stateMachineVersionArn?: string | undefined;
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
  output?: string | undefined;

  /**
   * <p>Contains details about the output of an execution history event.</p>
   * @public
   */
  outputDetails?: HistoryEventExecutionDataDetails | undefined;
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
  error?: string | undefined;

  /**
   * <p>A more detailed explanation of the cause of the timeout.</p>
   * @public
   */
  cause?: string | undefined;
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
  error?: string | undefined;

  /**
   * <p>A more detailed explanation of the cause of the failure.</p>
   * @public
   */
  cause?: string | undefined;
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
  roleArn?: string | undefined;
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
  input?: string | undefined;

  /**
   * <p>Contains details about input for an execution history event.</p>
   * @public
   */
  inputDetails?: HistoryEventExecutionDataDetails | undefined;

  /**
   * <p>The maximum allowed duration of the Lambda function.</p>
   * @public
   */
  timeoutInSeconds?: number | undefined;

  /**
   * <p>The credentials that Step Functions uses for the task.</p>
   * @public
   */
  taskCredentials?: TaskCredentials | undefined;
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
  error?: string | undefined;

  /**
   * <p>A more detailed explanation of the cause of the failure.</p>
   * @public
   */
  cause?: string | undefined;
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
  error?: string | undefined;

  /**
   * <p>A more detailed explanation of the cause of the failure.</p>
   * @public
   */
  cause?: string | undefined;
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
  output?: string | undefined;

  /**
   * <p>Contains details about the output of an execution history event.</p>
   * @public
   */
  outputDetails?: HistoryEventExecutionDataDetails | undefined;
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
  error?: string | undefined;

  /**
   * <p>A more detailed explanation of the cause of the timeout.</p>
   * @public
   */
  cause?: string | undefined;
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
  name?: string | undefined;

  /**
   * <p>The index of the array belonging to the Map state iteration.</p>
   * @public
   */
  index?: number | undefined;
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
  error?: string | undefined;

  /**
   * <p>A more detailed explanation of the cause of the failure.</p>
   * @public
   */
  cause?: string | undefined;
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
  mapRunArn?: string | undefined;

  /**
   * <p>The number of times the Map Run has been redriven at this point in the execution's history including this event. The redrive count for a redriven Map Run is always greater than 0.</p>
   * @public
   */
  redriveCount?: number | undefined;
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
  mapRunArn?: string | undefined;
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
  length?: number | undefined;
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
  input?: string | undefined;

  /**
   * <p>Contains details about the input for an execution history event.</p>
   * @public
   */
  inputDetails?: HistoryEventExecutionDataDetails | undefined;
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
   *                <p>control characters (<code>U+0000-001F</code>, <code>U+007F-009F</code>, <code>U+FFFE-FFFF</code>)</p>
   *             </li>
   *             <li>
   *                <p>surrogates (<code>U+D800-DFFF</code>)</p>
   *             </li>
   *             <li>
   *                <p>invalid characters (<code> U+10FFFF</code>)</p>
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
  output?: string | undefined;

  /**
   * <p>Contains details about the output of an execution history event.</p>
   * @public
   */
  outputDetails?: HistoryEventExecutionDataDetails | undefined;

  /**
   * <p>Map of variable name and value as a serialized JSON representation.</p>
   * @public
   */
  assignedVariables?: Record<string, string> | undefined;

  /**
   * <p>Provides details about input or output in an execution history event.</p>
   * @public
   */
  assignedVariablesDetails?: AssignedVariablesDetails | undefined;
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
  error?: string | undefined;

  /**
   * <p>A more detailed explanation of the cause of the failure.</p>
   * @public
   */
  cause?: string | undefined;
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
  timeoutInSeconds?: number | undefined;

  /**
   * <p>The maximum allowed duration between two heartbeats for the task.</p>
   * @public
   */
  heartbeatInSeconds?: number | undefined;

  /**
   * <p>The credentials that Step Functions uses for the task.</p>
   * @public
   */
  taskCredentials?: TaskCredentials | undefined;
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
  error?: string | undefined;

  /**
   * <p>A more detailed explanation of the cause of the failure.</p>
   * @public
   */
  cause?: string | undefined;
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
  error?: string | undefined;

  /**
   * <p>A more detailed explanation of the cause of the failure.</p>
   * @public
   */
  cause?: string | undefined;
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
  output?: string | undefined;

  /**
   * <p>Contains details about the output of an execution history event.</p>
   * @public
   */
  outputDetails?: HistoryEventExecutionDataDetails | undefined;
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
  output?: string | undefined;

  /**
   * <p>Contains details about the output of an execution history event.</p>
   * @public
   */
  outputDetails?: HistoryEventExecutionDataDetails | undefined;
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
  error?: string | undefined;

  /**
   * <p>A more detailed explanation of the cause of the failure.</p>
   * @public
   */
  cause?: string | undefined;
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
  EvaluationFailed: "EvaluationFailed",
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
  previousEventId?: number | undefined;

  /**
   * <p>Contains details about an activity that failed during an execution.</p>
   * @public
   */
  activityFailedEventDetails?: ActivityFailedEventDetails | undefined;

  /**
   * <p>Contains details about an activity schedule event that failed during an execution.</p>
   * @public
   */
  activityScheduleFailedEventDetails?: ActivityScheduleFailedEventDetails | undefined;

  /**
   * <p>Contains details about an activity scheduled during an execution.</p>
   * @public
   */
  activityScheduledEventDetails?: ActivityScheduledEventDetails | undefined;

  /**
   * <p>Contains details about the start of an activity during an execution.</p>
   * @public
   */
  activityStartedEventDetails?: ActivityStartedEventDetails | undefined;

  /**
   * <p>Contains details about an activity that successfully terminated during an
   *       execution.</p>
   * @public
   */
  activitySucceededEventDetails?: ActivitySucceededEventDetails | undefined;

  /**
   * <p>Contains details about an activity timeout that occurred during an execution.</p>
   * @public
   */
  activityTimedOutEventDetails?: ActivityTimedOutEventDetails | undefined;

  /**
   * <p>Contains details about the failure of a task.</p>
   * @public
   */
  taskFailedEventDetails?: TaskFailedEventDetails | undefined;

  /**
   * <p>Contains details about a task that was scheduled.</p>
   * @public
   */
  taskScheduledEventDetails?: TaskScheduledEventDetails | undefined;

  /**
   * <p>Contains details about a task that failed to start.</p>
   * @public
   */
  taskStartFailedEventDetails?: TaskStartFailedEventDetails | undefined;

  /**
   * <p>Contains details about a task that was started.</p>
   * @public
   */
  taskStartedEventDetails?: TaskStartedEventDetails | undefined;

  /**
   * <p>Contains details about a task that where the submit failed.</p>
   * @public
   */
  taskSubmitFailedEventDetails?: TaskSubmitFailedEventDetails | undefined;

  /**
   * <p>Contains details about a submitted task.</p>
   * @public
   */
  taskSubmittedEventDetails?: TaskSubmittedEventDetails | undefined;

  /**
   * <p>Contains details about a task that succeeded.</p>
   * @public
   */
  taskSucceededEventDetails?: TaskSucceededEventDetails | undefined;

  /**
   * <p>Contains details about a task that timed out.</p>
   * @public
   */
  taskTimedOutEventDetails?: TaskTimedOutEventDetails | undefined;

  /**
   * <p>Contains details about an execution failure event.</p>
   * @public
   */
  executionFailedEventDetails?: ExecutionFailedEventDetails | undefined;

  /**
   * <p>Contains details about the start of the execution.</p>
   * @public
   */
  executionStartedEventDetails?: ExecutionStartedEventDetails | undefined;

  /**
   * <p>Contains details about the successful termination of the execution.</p>
   * @public
   */
  executionSucceededEventDetails?: ExecutionSucceededEventDetails | undefined;

  /**
   * <p>Contains details about an abort of an execution.</p>
   * @public
   */
  executionAbortedEventDetails?: ExecutionAbortedEventDetails | undefined;

  /**
   * <p>Contains details about the execution timeout that occurred during the execution.</p>
   * @public
   */
  executionTimedOutEventDetails?: ExecutionTimedOutEventDetails | undefined;

  /**
   * <p>Contains details about the redrive attempt of an execution.</p>
   * @public
   */
  executionRedrivenEventDetails?: ExecutionRedrivenEventDetails | undefined;

  /**
   * <p>Contains details about Map state that was started.</p>
   * @public
   */
  mapStateStartedEventDetails?: MapStateStartedEventDetails | undefined;

  /**
   * <p>Contains details about an iteration of a Map state that was started.</p>
   * @public
   */
  mapIterationStartedEventDetails?: MapIterationEventDetails | undefined;

  /**
   * <p>Contains details about an iteration of a Map state that succeeded.</p>
   * @public
   */
  mapIterationSucceededEventDetails?: MapIterationEventDetails | undefined;

  /**
   * <p>Contains details about an iteration of a Map state that failed.</p>
   * @public
   */
  mapIterationFailedEventDetails?: MapIterationEventDetails | undefined;

  /**
   * <p>Contains details about an iteration of a Map state that was aborted.</p>
   * @public
   */
  mapIterationAbortedEventDetails?: MapIterationEventDetails | undefined;

  /**
   * <p>Contains details about a Lambda function that failed during an execution.</p>
   * @public
   */
  lambdaFunctionFailedEventDetails?: LambdaFunctionFailedEventDetails | undefined;

  /**
   * <p>Contains details about a failed Lambda function schedule event that occurred during an
   *       execution.</p>
   * @public
   */
  lambdaFunctionScheduleFailedEventDetails?: LambdaFunctionScheduleFailedEventDetails | undefined;

  /**
   * <p>Contains details about a Lambda function scheduled during an execution.</p>
   * @public
   */
  lambdaFunctionScheduledEventDetails?: LambdaFunctionScheduledEventDetails | undefined;

  /**
   * <p>Contains details about a lambda function that failed to start during an execution.</p>
   * @public
   */
  lambdaFunctionStartFailedEventDetails?: LambdaFunctionStartFailedEventDetails | undefined;

  /**
   * <p>Contains details about a Lambda function that terminated successfully during an
   *       execution.</p>
   * @public
   */
  lambdaFunctionSucceededEventDetails?: LambdaFunctionSucceededEventDetails | undefined;

  /**
   * <p>Contains details about a Lambda function timeout that occurred during an execution.</p>
   * @public
   */
  lambdaFunctionTimedOutEventDetails?: LambdaFunctionTimedOutEventDetails | undefined;

  /**
   * <p>Contains details about a state entered during an execution.</p>
   * @public
   */
  stateEnteredEventDetails?: StateEnteredEventDetails | undefined;

  /**
   * <p>Contains details about an exit from a state during an execution.</p>
   * @public
   */
  stateExitedEventDetails?: StateExitedEventDetails | undefined;

  /**
   * <p>Contains details, such as <code>mapRunArn</code>, and the start date and time of a Map Run. <code>mapRunArn</code> is the Amazon Resource Name (ARN) of the Map Run that was started.</p>
   * @public
   */
  mapRunStartedEventDetails?: MapRunStartedEventDetails | undefined;

  /**
   * <p>Contains error and cause details about a Map Run that failed.</p>
   * @public
   */
  mapRunFailedEventDetails?: MapRunFailedEventDetails | undefined;

  /**
   * <p>Contains details about the redrive attempt of a Map Run.</p>
   * @public
   */
  mapRunRedrivenEventDetails?: MapRunRedrivenEventDetails | undefined;

  /**
   * <p>Contains details about an evaluation failure that occurred while processing a state.</p>
   * @public
   */
  evaluationFailedEventDetails?: EvaluationFailedEventDetails | undefined;
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
  nextToken?: string | undefined;
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
  maxResults?: number | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
   *     Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p>
   * @public
   */
  nextToken?: string | undefined;
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
  nextToken?: string | undefined;
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
  stateMachineArn?: string | undefined;

  /**
   * <p>If specified, only list the executions whose current execution status matches the given
   *       filter.</p>
   *          <p>If you provide a <code>PENDING_REDRIVE</code> statusFilter, you must specify <code>mapRunArn</code>.
   *       For more information, see <a href="https://docs.aws.amazon.com/step-functions/latest/dg/redrive-map-run.html#redrive-child-workflow-behavior">Child workflow execution redrive behaviour</a>
   *       in the <i>Step Functions Developer Guide</i>.
   *     </p>
   *          <p>If you provide a stateMachineArn and a <code>PENDING_REDRIVE</code> statusFilter, the API returns a validation exception.</p>
   * @public
   */
  statusFilter?: ExecutionStatus | undefined;

  /**
   * <p>The maximum number of results that are returned per call. You can use <code>nextToken</code> to obtain further pages of results.
   *     The default is 100 and the maximum allowed page size is 1000. A value of 0 uses the default.</p>
   *          <p>This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
   *     Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Map Run that started the child workflow executions. If the <code>mapRunArn</code> field is specified, a list of all of the child workflow executions started by a Map Run is returned. For more information, see <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-examine-map-run.html">Examining Map Run</a> in the <i>Step Functions Developer Guide</i>.</p>
   *          <p>You can specify either a <code>mapRunArn</code> or a <code>stateMachineArn</code>, but not both.</p>
   * @public
   */
  mapRunArn?: string | undefined;

  /**
   * <p>Sets a filter to list executions based on whether or not they have been redriven.</p>
   *          <p>For a Distributed Map, <code>redriveFilter</code> sets a filter to list child workflow executions based on whether or not they have been redriven.</p>
   *          <p>If you do not provide a <code>redriveFilter</code>, Step Functions returns a list of both redriven and non-redriven executions.</p>
   *          <p>If you provide a state machine ARN in <code>redriveFilter</code>, the API returns a validation exception.</p>
   * @public
   */
  redriveFilter?: ExecutionRedriveFilter | undefined;
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
   *                <p>control characters (<code>U+0000-001F</code>, <code>U+007F-009F</code>, <code>U+FFFE-FFFF</code>)</p>
   *             </li>
   *             <li>
   *                <p>surrogates (<code>U+D800-DFFF</code>)</p>
   *             </li>
   *             <li>
   *                <p>invalid characters (<code> U+10FFFF</code>)</p>
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
  stopDate?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a Map Run. This field is returned only if <code>mapRunArn</code> was specified in the <code>ListExecutions</code> API action. If <code>stateMachineArn</code> was specified in <code>ListExecutions</code>, the <code>mapRunArn</code> isn't returned.</p>
   * @public
   */
  mapRunArn?: string | undefined;

  /**
   * <p>The total number of items processed in a child workflow execution. This field is returned only if <code>mapRunArn</code> was specified in the <code>ListExecutions</code> API action. If <code>stateMachineArn</code> was specified in <code>ListExecutions</code>, the <code>itemCount</code> field isn't returned.</p>
   * @public
   */
  itemCount?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the state machine version associated with the execution.</p>
   *          <p>If the state machine execution was started with an unqualified ARN, it returns null.</p>
   *          <p>If the execution was started using a <code>stateMachineAliasArn</code>, both the <code>stateMachineAliasArn</code> and <code>stateMachineVersionArn</code> parameters contain the respective values.</p>
   * @public
   */
  stateMachineVersionArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the state machine alias used to start an execution.</p>
   *          <p>If the state machine execution was started with an unqualified ARN or a version ARN, it returns null.</p>
   * @public
   */
  stateMachineAliasArn?: string | undefined;

  /**
   * <p>The number of times you've redriven an execution. If you have not yet redriven an execution, the <code>redriveCount</code> is 0. This count is only updated when you successfully redrive an execution.</p>
   * @public
   */
  redriveCount?: number | undefined;

  /**
   * <p>The date the execution was last redriven.</p>
   * @public
   */
  redriveDate?: Date | undefined;
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
  nextToken?: string | undefined;
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
  maxResults?: number | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
   *     Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p>
   * @public
   */
  nextToken?: string | undefined;
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
  stopDate?: Date | undefined;
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
  nextToken?: string | undefined;
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
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results that are returned per call. You can use <code>nextToken</code> to obtain further pages of results.
   *     The default is 100 and the maximum allowed page size is 1000. A value of 0 uses the default.</p>
   *          <p>This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.</p>
   * @public
   */
  maxResults?: number | undefined;
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
  nextToken?: string | undefined;
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
  maxResults?: number | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
   *     Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p>
   * @public
   */
  nextToken?: string | undefined;
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
   *                <p>control characters (<code>U+0000-001F</code>, <code>U+007F-009F</code>, <code>U+FFFE-FFFF</code>)</p>
   *             </li>
   *             <li>
   *                <p>surrogates (<code>U+D800-DFFF</code>)</p>
   *             </li>
   *             <li>
   *                <p>invalid characters (<code> U+10FFFF</code>)</p>
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
  nextToken?: string | undefined;
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
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results that are returned per call. You can use <code>nextToken</code> to obtain further pages of results.
   *     The default is 100 and the maximum allowed page size is 1000. A value of 0 uses the default.</p>
   *          <p>This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.</p>
   * @public
   */
  maxResults?: number | undefined;
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
  nextToken?: string | undefined;
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
  tags?: Tag[] | undefined;
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
  revisionId?: string | undefined;

  /**
   * <p>An optional description of the state machine version.</p>
   * @public
   */
  description?: string | undefined;
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
  clientToken?: string | undefined;
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
  error?: string | undefined;

  /**
   * <p>A more detailed explanation of the cause of the failure.</p>
   * @public
   */
  cause?: string | undefined;
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
   * <p>Optional name of the execution. This name must be unique for your Amazon Web Services account, Region, and state machine for 90 days. For more information,
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
   *                <p>control characters (<code>U+0000-001F</code>, <code>U+007F-009F</code>, <code>U+FFFE-FFFF</code>)</p>
   *             </li>
   *             <li>
   *                <p>surrogates (<code>U+D800-DFFF</code>)</p>
   *             </li>
   *             <li>
   *                <p>invalid characters (<code> U+10FFFF</code>)</p>
   *             </li>
   *          </ul>
   *          <p>To enable logging with CloudWatch Logs, the name should only contain  0-9, A-Z, a-z, - and _.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The string that contains the JSON input data for the execution, for example:</p>
   *          <p>
   *             <code>"\{\"first_name\" : \"Alejandro\"\}"</code>
   *          </p>
   *          <note>
   *             <p>If you don't include any JSON input data, you still must include the two braces, for
   *         example: <code>"\{\}"</code>
   *             </p>
   *          </note>
   *          <p>Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.</p>
   * @public
   */
  input?: string | undefined;

  /**
   * <p>Passes the X-Ray trace header. The trace header can also be passed in the request
   *       payload.</p>
   *          <note>
   *             <p>
   *                 For X-Ray traces, all Amazon Web Services services use the <code>X-Amzn-Trace-Id</code> header from the HTTP request. Using the header is the preferred mechanism to identify a trace. <code>StartExecution</code> and <code>StartSyncExecution</code> API operations can also use <code>traceHeader</code> from the body of the request payload. If <b>both</b> sources are provided, Step Functions will use the <b>header value</b> (preferred) over the value in the request body.
   *             </p>
   *          </note>
   * @public
   */
  traceHeader?: string | undefined;
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
  name?: string | undefined;

  /**
   * <p>The string that contains the JSON input data for the execution, for example:</p>
   *          <p>
   *             <code>"\{\"first_name\" : \"Alejandro\"\}"</code>
   *          </p>
   *          <note>
   *             <p>If you don't include any JSON input data, you still must include the two braces, for
   *         example: <code>"\{\}"</code>
   *             </p>
   *          </note>
   *          <p>Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.</p>
   * @public
   */
  input?: string | undefined;

  /**
   * <p>Passes the X-Ray trace header. The trace header can also be passed in the request
   *       payload.</p>
   *          <note>
   *             <p>
   *                 For X-Ray traces, all Amazon Web Services services use the <code>X-Amzn-Trace-Id</code> header from the HTTP request. Using the header is the preferred mechanism to identify a trace. <code>StartExecution</code> and <code>StartSyncExecution</code> API operations can also use <code>traceHeader</code> from the body of the request payload. If <b>both</b> sources are provided, Step Functions will use the <b>header value</b> (preferred) over the value in the request body.
   *             </p>
   *          </note>
   * @public
   */
  traceHeader?: string | undefined;

  /**
   * <p>If your state machine definition is encrypted with a KMS key, callers must have <code>kms:Decrypt</code> permission to decrypt the definition. Alternatively, you can call the API with <code>includedData = METADATA_ONLY</code> to get a successful response without the encrypted definition.</p>
   * @public
   */
  includedData?: IncludedData | undefined;
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
  billedMemoryUsedInMB?: number | undefined;

  /**
   * <p>Billed duration of your workflow, in milliseconds.</p>
   * @public
   */
  billedDurationInMilliseconds?: number | undefined;
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
  stateMachineArn?: string | undefined;

  /**
   * <p>The name of the execution.</p>
   * @public
   */
  name?: string | undefined;

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
  error?: string | undefined;

  /**
   * <p>A more detailed explanation of the cause of the failure.</p>
   * @public
   */
  cause?: string | undefined;

  /**
   * <p>The string that contains the JSON input data of the execution. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.</p>
   * @public
   */
  input?: string | undefined;

  /**
   * <p>Provides details about execution input or output.</p>
   * @public
   */
  inputDetails?: CloudWatchEventsExecutionDataDetails | undefined;

  /**
   * <p>The JSON output data of the execution. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.</p>
   *          <note>
   *             <p>This field is set only if the execution succeeds. If the execution fails, this field is
   *         null.</p>
   *          </note>
   * @public
   */
  output?: string | undefined;

  /**
   * <p>Provides details about execution input or output.</p>
   * @public
   */
  outputDetails?: CloudWatchEventsExecutionDataDetails | undefined;

  /**
   * <p>The X-Ray trace header that was passed to the execution.</p>
   *          <note>
   *             <p>
   *                 For X-Ray traces, all Amazon Web Services services use the <code>X-Amzn-Trace-Id</code> header from the HTTP request. Using the header is the preferred mechanism to identify a trace. <code>StartExecution</code> and <code>StartSyncExecution</code> API operations can also use <code>traceHeader</code> from the body of the request payload. If <b>both</b> sources are provided, Step Functions will use the <b>header value</b> (preferred) over the value in the request body.
   *             </p>
   *          </note>
   * @public
   */
  traceHeader?: string | undefined;

  /**
   * <p>An object that describes workflow billing details, including billed duration and memory
   *       use.</p>
   * @public
   */
  billingDetails?: BillingDetails | undefined;
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
  error?: string | undefined;

  /**
   * <p>A more detailed explanation of the cause of the failure.</p>
   * @public
   */
  cause?: string | undefined;
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
  roleArn?: string | undefined;

  /**
   * <p>A string that contains the JSON input data for the state.</p>
   * @public
   */
  input?: string | undefined;

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
  inspectionLevel?: InspectionLevel | undefined;

  /**
   * <p>Specifies whether or not to include secret information in the test result. For HTTP Tasks, a secret includes the data that an EventBridge connection adds to modify the HTTP request headers, query parameters, and body. Step Functions doesn't omit any information included in the state definition or the HTTP response.</p>
   *          <p>If you set <code>revealSecrets</code> to <code>true</code>, you must make sure that the IAM user that calls the <code>TestState</code> API has permission for the <code>states:RevealSecrets</code> action. For an example of IAM policy that sets the <code>states:RevealSecrets</code> permission, see <a href="https://docs.aws.amazon.com/step-functions/latest/dg/test-state-isolation.html#test-state-permissions">IAM permissions to test a state</a>. Without this permission, Step Functions throws an access denied error.</p>
   *          <p>By default, <code>revealSecrets</code> is set to <code>false</code>.</p>
   * @public
   */
  revealSecrets?: boolean | undefined;

  /**
   * <p>JSON object literal that sets variables used in the state under test. Object keys are the variable names and values are the variable values.</p>
   * @public
   */
  variables?: string | undefined;
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
  protocol?: string | undefined;

  /**
   * <p>The HTTP method used for the HTTP request.</p>
   * @public
   */
  method?: string | undefined;

  /**
   * <p>The API endpoint used for the HTTP request.</p>
   * @public
   */
  url?: string | undefined;

  /**
   * <p>The request headers associated with the HTTP request.</p>
   * @public
   */
  headers?: string | undefined;

  /**
   * <p>The request body for the HTTP request.</p>
   * @public
   */
  body?: string | undefined;
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
  protocol?: string | undefined;

  /**
   * <p>The HTTP response status code for the HTTP response.</p>
   * @public
   */
  statusCode?: string | undefined;

  /**
   * <p>The message associated with the HTTP status code.</p>
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * <p>The response headers associated with the HTTP response.</p>
   * @public
   */
  headers?: string | undefined;

  /**
   * <p>The HTTP response returned.</p>
   * @public
   */
  body?: string | undefined;
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
  input?: string | undefined;

  /**
   * <p>The input after Step Functions applies an Arguments filter. This event will only be present when QueryLanguage for the state machine or individual states is set to JSONata. For more info, see <a href="https://docs.aws.amazon.com/step-functions/latest/dg/data-transform.html">Transforming data with Step Functions</a>.</p>
   * @public
   */
  afterArguments?: string | undefined;

  /**
   * <p>The input after Step Functions applies the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/input-output-inputpath-params.html#input-output-inputpath">InputPath</a> filter. Not populated when QueryLanguage is JSONata.</p>
   * @public
   */
  afterInputPath?: string | undefined;

  /**
   * <p>The effective input after Step Functions applies the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/input-output-inputpath-params.html#input-output-parameters">Parameters</a> filter. Not populated when QueryLanguage is JSONata.</p>
   * @public
   */
  afterParameters?: string | undefined;

  /**
   * <p>The state's raw result.</p>
   * @public
   */
  result?: string | undefined;

  /**
   * <p>The effective result after Step Functions applies the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/input-output-inputpath-params.html#input-output-resultselector">ResultSelector</a> filter. Not populated when QueryLanguage is JSONata.</p>
   * @public
   */
  afterResultSelector?: string | undefined;

  /**
   * <p>The effective result combined with the raw state input after Step Functions applies the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/input-output-resultpath.html">ResultPath</a> filter. Not populated when QueryLanguage is JSONata.</p>
   * @public
   */
  afterResultPath?: string | undefined;

  /**
   * <p>The raw HTTP request that is sent when you test an HTTP Task.</p>
   * @public
   */
  request?: InspectionDataRequest | undefined;

  /**
   * <p>The raw HTTP response that is returned when you test an HTTP Task.</p>
   * @public
   */
  response?: InspectionDataResponse | undefined;

  /**
   * <p>JSON string that contains the set of workflow variables after execution of the state. The set will include variables assigned in the state and variables set up as test state input.</p>
   * @public
   */
  variables?: string | undefined;
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
  output?: string | undefined;

  /**
   * <p>The error returned when the execution of a state fails.</p>
   * @public
   */
  error?: string | undefined;

  /**
   * <p>A detailed explanation of the cause for the error when the execution of a state fails.</p>
   * @public
   */
  cause?: string | undefined;

  /**
   * <p>Returns additional details about the state's execution, including its input and output data processing flow, and HTTP request and response information. The <code>inspectionLevel</code> request parameter specifies which details are returned.</p>
   * @public
   */
  inspectionData?: InspectionData | undefined;

  /**
   * <p>The name of the next state to transition to. If you haven't defined a next state in your definition or if the execution of the state fails, this field doesn't contain a value.</p>
   * @public
   */
  nextState?: string | undefined;

  /**
   * <p>The execution status of the state.</p>
   * @public
   */
  status?: TestExecutionStatus | undefined;
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
  maxConcurrency?: number | undefined;

  /**
   * <p>The maximum percentage of failed items before the Map Run fails.</p>
   * @public
   */
  toleratedFailurePercentage?: number | undefined;

  /**
   * <p>The maximum number of failed items before the Map Run fails.</p>
   * @public
   */
  toleratedFailureCount?: number | undefined;
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
  definition?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role of the state machine.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>Use the <code>LoggingConfiguration</code> data type to set CloudWatch Logs
   *       options.</p>
   * @public
   */
  loggingConfiguration?: LoggingConfiguration | undefined;

  /**
   * <p>Selects whether X-Ray tracing is enabled.</p>
   * @public
   */
  tracingConfiguration?: TracingConfiguration | undefined;

  /**
   * <p>Specifies whether the state machine version is published. The default is
   *         <code>false</code>. To publish a version after updating the state machine, set
   *         <code>publish</code> to <code>true</code>.</p>
   * @public
   */
  publish?: boolean | undefined;

  /**
   * <p>An optional description of the state machine version to publish.</p>
   *          <p>You can only specify the <code>versionDescription</code> parameter if you've set <code>publish</code> to <code>true</code>.</p>
   * @public
   */
  versionDescription?: string | undefined;

  /**
   * <p>Settings to configure server-side encryption. </p>
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;
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
  revisionId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the published state machine version.</p>
   *          <p>If the <code>publish</code> parameter isn't set to <code>true</code>, this field returns null.</p>
   * @public
   */
  stateMachineVersionArn?: string | undefined;
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
  description?: string | undefined;

  /**
   * <p>The routing configuration of the state machine alias.</p>
   *          <p>An array of <code>RoutingConfig</code> objects that specifies up to two state machine versions that the alias starts executions for.</p>
   * @public
   */
  routingConfiguration?: RoutingConfigurationListItem[] | undefined;
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
 * @public
 * @enum
 */
export const ValidateStateMachineDefinitionSeverity = {
  ERROR: "ERROR",
  WARNING: "WARNING",
} as const;

/**
 * @public
 */
export type ValidateStateMachineDefinitionSeverity =
  (typeof ValidateStateMachineDefinitionSeverity)[keyof typeof ValidateStateMachineDefinitionSeverity];

/**
 * @public
 */
export interface ValidateStateMachineDefinitionInput {
  /**
   * <p>The Amazon States Language definition of the state machine. For more information, see
   *             <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html">Amazon States Language</a> (ASL).</p>
   * @public
   */
  definition: string | undefined;

  /**
   * <p>The target type of state machine for this definition. The default is <code>STANDARD</code>.</p>
   * @public
   */
  type?: StateMachineType | undefined;

  /**
   * <p>Minimum level of diagnostics to return. <code>ERROR</code> returns only <code>ERROR</code> diagnostics, whereas <code>WARNING</code> returns both <code>WARNING</code> and <code>ERROR</code> diagnostics. The default is <code>ERROR</code>. </p>
   * @public
   */
  severity?: ValidateStateMachineDefinitionSeverity | undefined;

  /**
   * <p>The maximum number of diagnostics that are returned per call. The default and maximum value is 100. Setting the value to 0 will also use the default of 100.</p>
   *          <p>If the number of diagnostics returned in the response exceeds <code>maxResults</code>, the value of the <code>truncated</code> field in the response will be set to <code>true</code>.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Describes potential issues found during state machine validation. Rather than raise an
 *             exception, validation will return a list of <b>diagnostic
 *             elements</b> containing diagnostic information. </p>
 *          <note>
 *             <p>The <a href="https://docs.aws.amazon.com/step-functions/latest/apireference/API_ValidateStateMachineDefinition.html">ValidateStateMachineDefinitionlAPI</a> might add
 *                 new diagnostics in the future, adjust diagnostic codes, or change the message
 *                 wording. Your automated processes should only rely on the value of the <b>result</b> field value (OK, FAIL). Do <b>not</b> rely on the exact order, count, or
 *                 wording of diagnostic messages.</p>
 *          </note>
 *          <p>
 *             <b>List of warning codes</b>
 *          </p>
 *          <dl>
 *             <dt>NO_DOLLAR</dt>
 *             <dd>
 *                <p>No <code>.$</code> on a field that appears to be a JSONPath or Intrinsic Function.</p>
 *             </dd>
 *             <dt>NO_PATH</dt>
 *             <dd>
 *                <p>Field value looks like a path, but field name does not end with 'Path'.</p>
 *             </dd>
 *             <dt>PASS_RESULT_IS_STATIC</dt>
 *             <dd>
 *                <p>Attempt to use a path in the result of a pass state.</p>
 *             </dd>
 *          </dl>
 *          <p>
 *             <b>List of error codes</b>
 *          </p>
 *          <dl>
 *             <dt>INVALID_JSON_DESCRIPTION</dt>
 *             <dd>
 *                <p>JSON syntax problem found.</p>
 *             </dd>
 *             <dt>MISSING_DESCRIPTION</dt>
 *             <dd>
 *                <p>Received a null or empty workflow input.</p>
 *             </dd>
 *             <dt>SCHEMA_VALIDATION_FAILED</dt>
 *             <dd>
 *                <p>Schema validation reported errors.</p>
 *             </dd>
 *             <dt>INVALID_RESOURCE</dt>
 *             <dd>
 *                <p>The value of a Task-state resource field is invalid.</p>
 *             </dd>
 *             <dt>MISSING_END_STATE</dt>
 *             <dd>
 *                <p>The workflow does not have a terminal state.</p>
 *             </dd>
 *             <dt>DUPLICATE_STATE_NAME</dt>
 *             <dd>
 *                <p>The same state name appears more than once.</p>
 *             </dd>
 *             <dt>INVALID_STATE_NAME</dt>
 *             <dd>
 *                <p>The state name does not follow the naming convention.</p>
 *             </dd>
 *             <dt>STATE_MACHINE_NAME_EMPTY</dt>
 *             <dd>
 *                <p>The state machine name has not been specified.</p>
 *             </dd>
 *             <dt>STATE_MACHINE_NAME_INVALID</dt>
 *             <dd>
 *                <p>The state machine name does not follow the naming convention.</p>
 *             </dd>
 *             <dt>STATE_MACHINE_NAME_TOO_LONG</dt>
 *             <dd>
 *                <p>The state name exceeds the allowed length.</p>
 *             </dd>
 *             <dt>STATE_MACHINE_NAME_ALREADY_EXISTS</dt>
 *             <dd>
 *                <p>The state name already exists.</p>
 *             </dd>
 *             <dt>DUPLICATE_LABEL_NAME</dt>
 *             <dd>
 *                <p>A label name appears more than once.</p>
 *             </dd>
 *             <dt>INVALID_LABEL_NAME</dt>
 *             <dd>
 *                <p>You have provided an invalid label name.</p>
 *             </dd>
 *             <dt>MISSING_TRANSITION_TARGET</dt>
 *             <dd>
 *                <p>The value of "Next" field doesn't match a known state name.</p>
 *             </dd>
 *             <dt>TOO_DEEPLY_NESTED</dt>
 *             <dd>
 *                <p>The states are too deeply nested.</p>
 *             </dd>
 *          </dl>
 * @public
 */
export interface ValidateStateMachineDefinitionDiagnostic {
  /**
   * <p>A value of <code>ERROR</code> means that you cannot create or update a state machine with this definition.</p>
   *          <p>
   *             <code>WARNING</code> level diagnostics alert you to potential issues, but they will not prevent you from creating or updating your state machine.</p>
   * @public
   */
  severity: ValidateStateMachineDefinitionSeverity | undefined;

  /**
   * <p>Identifying code for the diagnostic.</p>
   * @public
   */
  code: string | undefined;

  /**
   * <p>Message describing the diagnostic condition.</p>
   * @public
   */
  message: string | undefined;

  /**
   * <p>Location of the issue in the state machine, if available.</p>
   *          <p>For errors specific to a field, the location could be in the format: <code>/States/<StateName>/<FieldName></code>, for example: <code>/States/FailState/ErrorPath</code>.</p>
   * @public
   */
  location?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ValidateStateMachineDefinitionResultCode = {
  FAIL: "FAIL",
  OK: "OK",
} as const;

/**
 * @public
 */
export type ValidateStateMachineDefinitionResultCode =
  (typeof ValidateStateMachineDefinitionResultCode)[keyof typeof ValidateStateMachineDefinitionResultCode];

/**
 * @public
 */
export interface ValidateStateMachineDefinitionOutput {
  /**
   * <p>The result value will be <code>OK</code> when no syntax errors are found, or
   *                 <code>FAIL</code> if the workflow definition does not pass verification.</p>
   * @public
   */
  result: ValidateStateMachineDefinitionResultCode | undefined;

  /**
   * <p>An array of diagnostic errors and warnings found during validation of the state machine definition. Since <b>warnings</b> do not prevent deploying your workflow definition, the <b>result</b> value could be <code>OK</code> even when warning diagnostics are present in the response.</p>
   * @public
   */
  diagnostics: ValidateStateMachineDefinitionDiagnostic[] | undefined;

  /**
   * <p>The result value will be <code>true</code> if the number of diagnostics found in the workflow definition exceeds <code>maxResults</code>. When all diagnostics results are returned, the value will be <code>false</code>.</p>
   * @public
   */
  truncated?: boolean | undefined;
}
