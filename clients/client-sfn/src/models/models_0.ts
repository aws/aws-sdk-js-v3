// smithy-typescript generated code
import type {
  EncryptionType,
  ExecutionRedriveFilter,
  ExecutionRedriveStatus,
  ExecutionStatus,
  HistoryEventType,
  IncludedData,
  InspectionLevel,
  LogLevel,
  MapRunStatus,
  MockResponseValidationMode,
  StateMachineStatus,
  StateMachineType,
  SyncExecutionStatus,
  TestExecutionStatus,
  ValidateStateMachineDefinitionResultCode,
  ValidateStateMachineDefinitionSeverity,
} from "./enums";

/**
 * Contains details about an activity that failed during an execution.
 *
 * @public
 */
export interface ActivityFailedEventDetails {
  /**
   * The error code of the failure.
   *
   * @public
   */
  error?: string | undefined;

  /**
   * A more detailed explanation of the cause of the failure.
   *
   * @public
   */
  cause?: string | undefined;
}

/**
 * Contains details about an activity.
 *
 * @public
 */
export interface ActivityListItem {
  /**
   * The Amazon Resource Name (ARN) that identifies the activity.
   *
   * @public
   */
  activityArn: string | undefined;

  /**
   * The name of the activity.
   *
   * A name must *not* contain:
   *
   * - white space
   * - brackets `< > \{ \} [ ]`
   * - wildcard characters `? *`
   * - special characters ``" # % \ ^ | ~ ` $ & , ; : /``
   * - control characters (`U+0000-001F`, `U+007F-009F`, `U+FFFE-FFFF`)
   * - surrogates (`U+D800-DFFF`)
   * - invalid characters (`U+10FFFF`)
   *
   * To enable logging with CloudWatch Logs, the name should only contain 0-9, A-Z, a-z, - and _.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The date the activity is created.
   *
   * @public
   */
  creationDate: Date | undefined;
}

/**
 * Provides details about input or output in an execution history event.
 *
 * @public
 */
export interface HistoryEventExecutionDataDetails {
  /**
   * Indicates whether input or output was truncated in the response. Always `false` for API calls. In CloudWatch logs, the value will be true if the data is truncated due to size limits.
   *
   * @public
   */
  truncated?: boolean | undefined;
}

/**
 * Contains details about an activity scheduled during an execution.
 *
 * @public
 */
export interface ActivityScheduledEventDetails {
  /**
   * The Amazon Resource Name (ARN) of the scheduled activity.
   *
   * @public
   */
  resource: string | undefined;

  /**
   * The JSON data input to the activity task. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.
   *
   * @public
   */
  input?: string | undefined;

  /**
   * Contains details about the input for an execution history event.
   *
   * @public
   */
  inputDetails?: HistoryEventExecutionDataDetails | undefined;

  /**
   * The maximum allowed duration of the activity task.
   *
   * @public
   */
  timeoutInSeconds?: number | undefined;

  /**
   * The maximum allowed duration between two heartbeats for the activity task.
   *
   * @public
   */
  heartbeatInSeconds?: number | undefined;
}

/**
 * Contains details about an activity schedule failure that occurred during an execution.
 *
 * @public
 */
export interface ActivityScheduleFailedEventDetails {
  /**
   * The error code of the failure.
   *
   * @public
   */
  error?: string | undefined;

  /**
   * A more detailed explanation of the cause of the failure.
   *
   * @public
   */
  cause?: string | undefined;
}

/**
 * Contains details about the start of an activity during an execution.
 *
 * @public
 */
export interface ActivityStartedEventDetails {
  /**
   * The name of the worker that the task is assigned to. These names are provided by the workers when calling GetActivityTask.
   *
   * @public
   */
  workerName?: string | undefined;
}

/**
 * Contains details about an activity that successfully terminated during an execution.
 *
 * @public
 */
export interface ActivitySucceededEventDetails {
  /**
   * The JSON data output by the activity task. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.
   *
   * @public
   */
  output?: string | undefined;

  /**
   * Contains details about the output of an execution history event.
   *
   * @public
   */
  outputDetails?: HistoryEventExecutionDataDetails | undefined;
}

/**
 * Contains details about an activity timeout that occurred during an execution.
 *
 * @public
 */
export interface ActivityTimedOutEventDetails {
  /**
   * The error code of the failure.
   *
   * @public
   */
  error?: string | undefined;

  /**
   * A more detailed explanation of the cause of the timeout.
   *
   * @public
   */
  cause?: string | undefined;
}

/**
 * Provides details about assigned variables in an execution history event.
 *
 * @public
 */
export interface AssignedVariablesDetails {
  /**
   * Indicates whether assigned variables were truncated in the response. Always `false` for API calls. In CloudWatch logs, the value will be true if the data is truncated due to size limits.
   *
   * @public
   */
  truncated?: boolean | undefined;
}

/**
 * Settings to configure server-side encryption.
 *
 * For additional control over security, you can encrypt your data using a **customer-managed key** for Step Functions state machines and activities. You can configure a symmetric KMS key and data key reuse period when creating or updating a **State Machine**, and when creating an **Activity**. The execution history and state machine definition will be encrypted with the key applied to the State Machine. Activity inputs will be encrypted with the key applied to the Activity.
 *
 * > **Note:** Step Functions automatically enables encryption at rest using Amazon Web Services owned keys at no charge. However, KMS charges apply when using a customer managed key. For more information about pricing, see [Key Management Service pricing](https://aws.amazon.com/kms/pricing/).
 *
 * For more information on KMS, see [What is Key Management Service?](https://docs.aws.amazon.com/kms/latest/developerguide/overview.html)
 *
 * @public
 */
export interface EncryptionConfiguration {
  /**
   * An alias, alias ARN, key ID, or key ARN of a symmetric encryption KMS key to encrypt data. To specify a KMS key in a different Amazon Web Services account, you must use the key ARN or alias ARN.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * Maximum duration that Step Functions will reuse data keys. When the period expires, Step Functions will call `GenerateDataKey`. Only applies to customer managed keys.
   *
   * @public
   */
  kmsDataKeyReusePeriodSeconds?: number | undefined;

  /**
   * Encryption type
   *
   * @public
   */
  type: EncryptionType | undefined;
}

/**
 * Tags are key-value pairs that can be associated with Step Functions state machines and activities.
 *
 * An array of key-value pairs. For more information, see [Using Cost Allocation Tags](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html) in the *Amazon Web Services Billing and Cost Management User Guide*, and [Controlling Access Using IAM Tags](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_iam-tags.html).
 *
 * Tags may only contain Unicode letters, digits, white space, or these symbols: `_ . : / = + - @`.
 *
 * @public
 */
export interface Tag {
  /**
   * The key of a tag.
   *
   * @public
   */
  key?: string | undefined;

  /**
   * The value of a tag.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * @public
 */
export interface CreateActivityInput {
  /**
   * The name of the activity to create. This name must be unique for your Amazon Web Services account and region.
   *
   * A name must *not* contain:
   *
   * - white space
   * - brackets `< > \{ \} [ ]`
   * - wildcard characters `? *`
   * - special characters ``" # % \ ^ | ~ ` $ & , ; : /``
   * - control characters (`U+0000-001F`, `U+007F-009F`, `U+FFFE-FFFF`)
   * - surrogates (`U+D800-DFFF`)
   * - invalid characters (`U+10FFFF`)
   *
   * To enable logging with CloudWatch Logs, the name should only contain 0-9, A-Z, a-z, - and _.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The list of tags to add to a resource.
   *
   * An array of key-value pairs. For more information, see [Using Cost Allocation Tags](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html) in the *Amazon Web Services Billing and Cost Management User Guide*, and [Controlling Access Using IAM Tags](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_iam-tags.html).
   *
   * Tags may only contain Unicode letters, digits, white space, or these symbols: `_ . : / = + - @`.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * Settings to configure server-side encryption.
   *
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateActivityOutput {
  /**
   * The Amazon Resource Name (ARN) that identifies the created activity.
   *
   * @public
   */
  activityArn: string | undefined;

  /**
   * The date the activity is created.
   *
   * @public
   */
  creationDate: Date | undefined;
}

/**
 * @public
 */
export interface CloudWatchLogsLogGroup {
  /**
   * The ARN of the the CloudWatch log group to which you want your logs emitted to. The ARN must end with `:*`
   *
   * @public
   */
  logGroupArn?: string | undefined;
}

/**
 * @public
 */
export interface LogDestination {
  /**
   * An object describing a CloudWatch log group. For more information, see [AWS::Logs::LogGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loggroup.html) in the CloudFormation User Guide.
   *
   * @public
   */
  cloudWatchLogsLogGroup?: CloudWatchLogsLogGroup | undefined;
}

/**
 * The `LoggingConfiguration` data type is used to set CloudWatch Logs options.
 *
 * @public
 */
export interface LoggingConfiguration {
  /**
   * Defines which category of execution history events are logged.
   *
   * @public
   */
  level?: LogLevel | undefined;

  /**
   * Determines whether execution data is included in your log. When set to `false`, data is excluded.
   *
   * @public
   */
  includeExecutionData?: boolean | undefined;

  /**
   * An array of objects that describes where your execution history events will be logged. Limited to size 1. Required, if your log level is not set to `OFF`.
   *
   * @public
   */
  destinations?: LogDestination[] | undefined;
}

/**
 * Selects whether or not the state machine's X-Ray tracing is enabled. Default is `false`
 *
 * @public
 */
export interface TracingConfiguration {
  /**
   * When set to `true`, X-Ray tracing is enabled.
   *
   * @public
   */
  enabled?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateStateMachineInput {
  /**
   * The name of the state machine.
   *
   * A name must *not* contain:
   *
   * - white space
   * - brackets `< > \{ \} [ ]`
   * - wildcard characters `? *`
   * - special characters ``" # % \ ^ | ~ ` $ & , ; : /``
   * - control characters (`U+0000-001F`, `U+007F-009F`, `U+FFFE-FFFF`)
   * - surrogates (`U+D800-DFFF`)
   * - invalid characters (`U+10FFFF`)
   *
   * To enable logging with CloudWatch Logs, the name should only contain 0-9, A-Z, a-z, - and _.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon States Language definition of the state machine. See [Amazon States Language](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html).
   *
   * @public
   */
  definition: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role to use for this state machine.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * Determines whether a Standard or Express state machine is created. The default is `STANDARD`. You cannot update the `type` of a state machine once it has been created.
   *
   * @public
   */
  type?: StateMachineType | undefined;

  /**
   * Defines what execution history events are logged and where they are logged.
   *
   * > **Note:** By default, the `level` is set to `OFF`. For more information see [Log Levels](https://docs.aws.amazon.com/step-functions/latest/dg/cloudwatch-log-level.html) in the Step Functions User Guide.
   *
   * @public
   */
  loggingConfiguration?: LoggingConfiguration | undefined;

  /**
   * Tags to be added when creating a state machine.
   *
   * An array of key-value pairs. For more information, see [Using Cost Allocation Tags](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html) in the *Amazon Web Services Billing and Cost Management User Guide*, and [Controlling Access Using IAM Tags](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_iam-tags.html).
   *
   * Tags may only contain Unicode letters, digits, white space, or these symbols: `_ . : / = + - @`.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * Selects whether X-Ray tracing is enabled.
   *
   * @public
   */
  tracingConfiguration?: TracingConfiguration | undefined;

  /**
   * Set to `true` to publish the first version of the state machine during creation. The default is `false`.
   *
   * @public
   */
  publish?: boolean | undefined;

  /**
   * Sets description about the state machine version. You can only set the description if the `publish` parameter is set to `true`. Otherwise, if you set `versionDescription`, but `publish` to `false`, this API action throws `ValidationException`.
   *
   * @public
   */
  versionDescription?: string | undefined;

  /**
   * Settings to configure server-side encryption.
   *
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateStateMachineOutput {
  /**
   * The Amazon Resource Name (ARN) that identifies the created state machine.
   *
   * @public
   */
  stateMachineArn: string | undefined;

  /**
   * The date the state machine is created.
   *
   * @public
   */
  creationDate: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) that identifies the created state machine version. If you do not set the `publish` parameter to `true`, this field returns null value.
   *
   * @public
   */
  stateMachineVersionArn?: string | undefined;
}

/**
 * Contains details about the routing configuration of a state machine alias. In a routing configuration, you define an array of objects that specify up to two state machine versions. You also specify the percentage of traffic to be routed to each version.
 *
 * @public
 */
export interface RoutingConfigurationListItem {
  /**
   * The Amazon Resource Name (ARN) that identifies one or two state machine versions defined in the routing configuration.
   *
   * If you specify the ARN of a second version, it must belong to the same state machine as the first version.
   *
   * @public
   */
  stateMachineVersionArn: string | undefined;

  /**
   * The percentage of traffic you want to route to a state machine version. The sum of the weights in the routing configuration must be equal to 100.
   *
   * @public
   */
  weight: number | undefined;
}

/**
 * @public
 */
export interface CreateStateMachineAliasInput {
  /**
   * A description for the state machine alias.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The name of the state machine alias.
   *
   * To avoid conflict with version ARNs, don't use an integer in the name of the alias.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The routing configuration of a state machine alias. The routing configuration shifts execution traffic between two state machine versions. `routingConfiguration` contains an array of `RoutingConfig` objects that specify up to two state machine versions. Step Functions then randomly choses which version to run an execution with based on the weight assigned to each `RoutingConfig`.
   *
   * @public
   */
  routingConfiguration: RoutingConfigurationListItem[] | undefined;
}

/**
 * @public
 */
export interface CreateStateMachineAliasOutput {
  /**
   * The Amazon Resource Name (ARN) that identifies the created state machine alias.
   *
   * @public
   */
  stateMachineAliasArn: string | undefined;

  /**
   * The date the state machine alias was created.
   *
   * @public
   */
  creationDate: Date | undefined;
}

/**
 * @public
 */
export interface DeleteActivityInput {
  /**
   * The Amazon Resource Name (ARN) of the activity to delete.
   *
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
   * The Amazon Resource Name (ARN) of the state machine to delete.
   *
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
   * The Amazon Resource Name (ARN) of the state machine alias to delete.
   *
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
   * The Amazon Resource Name (ARN) of the state machine version to delete.
   *
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
   * The Amazon Resource Name (ARN) of the activity to describe.
   *
   * @public
   */
  activityArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeActivityOutput {
  /**
   * The Amazon Resource Name (ARN) that identifies the activity.
   *
   * @public
   */
  activityArn: string | undefined;

  /**
   * The name of the activity.
   *
   * A name must *not* contain:
   *
   * - white space
   * - brackets `< > \{ \} [ ]`
   * - wildcard characters `? *`
   * - special characters ``" # % \ ^ | ~ ` $ & , ; : /``
   * - control characters (`U+0000-001F`, `U+007F-009F`, `U+FFFE-FFFF`)
   * - surrogates (`U+D800-DFFF`)
   * - invalid characters (`U+10FFFF`)
   *
   * To enable logging with CloudWatch Logs, the name should only contain 0-9, A-Z, a-z, - and _.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The date the activity is created.
   *
   * @public
   */
  creationDate: Date | undefined;

  /**
   * Settings for configured server-side encryption.
   *
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;
}

/**
 * @public
 */
export interface DescribeExecutionInput {
  /**
   * The Amazon Resource Name (ARN) of the execution to describe.
   *
   * @public
   */
  executionArn: string | undefined;

  /**
   * If your state machine definition is encrypted with a KMS key, callers must have `kms:Decrypt` permission to decrypt the definition. Alternatively, you can call DescribeStateMachine API with `includedData = METADATA_ONLY` to get a successful response without the encrypted definition.
   *
   * @public
   */
  includedData?: IncludedData | undefined;
}

/**
 * Provides details about execution input or output.
 *
 * @public
 */
export interface CloudWatchEventsExecutionDataDetails {
  /**
   * Indicates whether input or output was included in the response. Always `true` for API calls.
   *
   * @public
   */
  included?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeExecutionOutput {
  /**
   * The Amazon Resource Name (ARN) that identifies the execution.
   *
   * @public
   */
  executionArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the executed stated machine.
   *
   * @public
   */
  stateMachineArn: string | undefined;

  /**
   * The name of the execution.
   *
   * A name must *not* contain:
   *
   * - white space
   * - brackets `< > \{ \} [ ]`
   * - wildcard characters `? *`
   * - special characters ``" # % \ ^ | ~ ` $ & , ; : /``
   * - control characters (`U+0000-001F`, `U+007F-009F`, `U+FFFE-FFFF`)
   * - surrogates (`U+D800-DFFF`)
   * - invalid characters (`U+10FFFF`)
   *
   * To enable logging with CloudWatch Logs, the name should only contain 0-9, A-Z, a-z, - and _.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The current status of the execution.
   *
   * @public
   */
  status: ExecutionStatus | undefined;

  /**
   * The date the execution is started.
   *
   * @public
   */
  startDate: Date | undefined;

  /**
   * If the execution ended, the date the execution stopped.
   *
   * @public
   */
  stopDate?: Date | undefined;

  /**
   * The string that contains the JSON input data of the execution. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.
   *
   * @public
   */
  input?: string | undefined;

  /**
   * Provides details about execution input or output.
   *
   * @public
   */
  inputDetails?: CloudWatchEventsExecutionDataDetails | undefined;

  /**
   * The JSON output data of the execution. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.
   *
   * > **Note:** This field is set only if the execution succeeds. If the execution fails, this field is null.
   *
   * @public
   */
  output?: string | undefined;

  /**
   * Provides details about execution input or output.
   *
   * @public
   */
  outputDetails?: CloudWatchEventsExecutionDataDetails | undefined;

  /**
   * The X-Ray trace header that was passed to the execution.
   *
   * > **Note:** For X-Ray traces, all Amazon Web Services services use the `X-Amzn-Trace-Id` header from the HTTP request. Using the header is the preferred mechanism to identify a trace. `StartExecution` and `StartSyncExecution` API operations can also use `traceHeader` from the body of the request payload. If **both** sources are provided, Step Functions will use the **header value** (preferred) over the value in the request body.
   *
   * @public
   */
  traceHeader?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that identifies a Map Run, which dispatched this execution.
   *
   * @public
   */
  mapRunArn?: string | undefined;

  /**
   * The error string if the state machine execution failed.
   *
   * @public
   */
  error?: string | undefined;

  /**
   * The cause string if the state machine execution failed.
   *
   * @public
   */
  cause?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the state machine version associated with the execution. The version ARN is a combination of state machine ARN and the version number separated by a colon (:). For example, `stateMachineARN:1`.
   *
   * If you start an execution from a `StartExecution` request without specifying a state machine version or alias ARN, Step Functions returns a null value.
   *
   * @public
   */
  stateMachineVersionArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the state machine alias associated with the execution. The alias ARN is a combination of state machine ARN and the alias name separated by a colon (:). For example, `stateMachineARN:PROD`.
   *
   * If you start an execution from a `StartExecution` request with a state machine version ARN, this field will be null.
   *
   * @public
   */
  stateMachineAliasArn?: string | undefined;

  /**
   * The number of times you've redriven an execution. If you have not yet redriven an execution, the `redriveCount` is 0. This count is only updated if you successfully redrive an execution.
   *
   * @public
   */
  redriveCount?: number | undefined;

  /**
   * The date the execution was last redriven. If you have not yet redriven an execution, the `redriveDate` is null.
   *
   * The `redriveDate` is unavailable if you redrive a Map Run that starts child workflow executions of type `EXPRESS`.
   *
   * @public
   */
  redriveDate?: Date | undefined;

  /**
   * Indicates whether or not an execution can be redriven at a given point in time.
   *
   * - For executions of type `STANDARD`, `redriveStatus` is `NOT_REDRIVABLE` if calling the RedriveExecution API action would return the `ExecutionNotRedrivable` error.
   * - For a Distributed Map that includes child workflows of type `STANDARD`, `redriveStatus` indicates whether or not the Map Run can redrive child workflow executions.
   * - For a Distributed Map that includes child workflows of type `EXPRESS`, `redriveStatus` indicates whether or not the Map Run can redrive child workflow executions.
   *
   *   You can redrive failed or timed out `EXPRESS` workflows *only if* they're a part of a Map Run. When you [redrive](https://docs.aws.amazon.com/step-functions/latest/dg/redrive-map-run.html) the Map Run, these workflows are restarted using the StartExecution API action.
   *
   * @public
   */
  redriveStatus?: ExecutionRedriveStatus | undefined;

  /**
   * When `redriveStatus` is `NOT_REDRIVABLE`, `redriveStatusReason` specifies the reason why an execution cannot be redriven.
   *
   * - For executions of type `STANDARD`, or for a Distributed Map that includes child workflows of type `STANDARD`, `redriveStatusReason` can include one of the following reasons:
   *
   *   - `State machine is in DELETING status`.
   *   - `Execution is RUNNING and cannot be redriven`.
   *   - `Execution is SUCCEEDED and cannot be redriven`.
   *   - `Execution was started before the launch of RedriveExecution`.
   *   - `Execution history event limit exceeded`.
   *   - `Execution has exceeded the max execution time`.
   *   - `Execution redrivable period exceeded`.
   * - For a Distributed Map that includes child workflows of type `EXPRESS`, `redriveStatusReason` is only returned if the child workflows are not redrivable. This happens when the child workflow executions have completed successfully.
   *
   * @public
   */
  redriveStatusReason?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMapRunInput {
  /**
   * The Amazon Resource Name (ARN) that identifies a Map Run.
   *
   * @public
   */
  mapRunArn: string | undefined;
}

/**
 * Contains details about all of the child workflow executions started by a Map Run.
 *
 * @public
 */
export interface MapRunExecutionCounts {
  /**
   * The total number of child workflow executions that were started by a Map Run, but haven't started executing yet.
   *
   * @public
   */
  pending: number | undefined;

  /**
   * The total number of child workflow executions that were started by a Map Run and are currently in-progress.
   *
   * @public
   */
  running: number | undefined;

  /**
   * The total number of child workflow executions that were started by a Map Run and have completed successfully.
   *
   * @public
   */
  succeeded: number | undefined;

  /**
   * The total number of child workflow executions that were started by a Map Run, but have failed.
   *
   * @public
   */
  failed: number | undefined;

  /**
   * The total number of child workflow executions that were started by a Map Run and have timed out.
   *
   * @public
   */
  timedOut: number | undefined;

  /**
   * The total number of child workflow executions that were started by a Map Run and were running, but were either stopped by the user or by Step Functions because the Map Run failed.
   *
   * @public
   */
  aborted: number | undefined;

  /**
   * The total number of child workflow executions that were started by a Map Run.
   *
   * @public
   */
  total: number | undefined;

  /**
   * Returns the count of child workflow executions whose results were written by `ResultWriter`. For more information, see [ResultWriter](https://docs.aws.amazon.com/step-functions/latest/dg/input-output-resultwriter.html) in the *Step Functions Developer Guide*.
   *
   * @public
   */
  resultsWritten: number | undefined;

  /**
   * The number of `FAILED`, `ABORTED`, or `TIMED_OUT` child workflow executions that cannot be redriven because their execution status is terminal. For example, child workflows with an execution status of `FAILED`, `ABORTED`, or `TIMED_OUT` and a `redriveStatus` of `NOT_REDRIVABLE`.
   *
   * @public
   */
  failuresNotRedrivable?: number | undefined;

  /**
   * The number of unsuccessful child workflow executions currently waiting to be redriven. The status of these child workflow executions could be `FAILED`, `ABORTED`, or `TIMED_OUT` in the original execution attempt or a previous redrive attempt.
   *
   * @public
   */
  pendingRedrive?: number | undefined;
}

/**
 * Contains details about items that were processed in all of the child workflow executions that were started by a Map Run.
 *
 * @public
 */
export interface MapRunItemCounts {
  /**
   * The total number of items to process in child workflow executions that haven't started running yet.
   *
   * @public
   */
  pending: number | undefined;

  /**
   * The total number of items being processed in child workflow executions that are currently in-progress.
   *
   * @public
   */
  running: number | undefined;

  /**
   * The total number of items processed in child workflow executions that have completed successfully.
   *
   * @public
   */
  succeeded: number | undefined;

  /**
   * The total number of items processed in child workflow executions that have failed.
   *
   * @public
   */
  failed: number | undefined;

  /**
   * The total number of items processed in child workflow executions that have timed out.
   *
   * @public
   */
  timedOut: number | undefined;

  /**
   * The total number of items processed in child workflow executions that were either stopped by the user or by Step Functions, because the Map Run failed.
   *
   * @public
   */
  aborted: number | undefined;

  /**
   * The total number of items processed in all the child workflow executions started by a Map Run.
   *
   * @public
   */
  total: number | undefined;

  /**
   * Returns the count of items whose results were written by `ResultWriter`. For more information, see [ResultWriter](https://docs.aws.amazon.com/step-functions/latest/dg/input-output-resultwriter.html) in the *Step Functions Developer Guide*.
   *
   * @public
   */
  resultsWritten: number | undefined;

  /**
   * The number of `FAILED`, `ABORTED`, or `TIMED_OUT` items in child workflow executions that cannot be redriven because the execution status of those child workflows is terminal. For example, child workflows with an execution status of `FAILED`, `ABORTED`, or `TIMED_OUT` and a `redriveStatus` of `NOT_REDRIVABLE`.
   *
   * @public
   */
  failuresNotRedrivable?: number | undefined;

  /**
   * The number of unsuccessful items in child workflow executions currently waiting to be redriven.
   *
   * @public
   */
  pendingRedrive?: number | undefined;
}

/**
 * @public
 */
export interface DescribeMapRunOutput {
  /**
   * The Amazon Resource Name (ARN) that identifies a Map Run.
   *
   * @public
   */
  mapRunArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that identifies the execution in which the Map Run was started.
   *
   * @public
   */
  executionArn: string | undefined;

  /**
   * The current status of the Map Run.
   *
   * @public
   */
  status: MapRunStatus | undefined;

  /**
   * The date when the Map Run was started.
   *
   * @public
   */
  startDate: Date | undefined;

  /**
   * The date when the Map Run was stopped.
   *
   * @public
   */
  stopDate?: Date | undefined;

  /**
   * The maximum number of child workflow executions configured to run in parallel for the Map Run at the same time.
   *
   * @public
   */
  maxConcurrency: number | undefined;

  /**
   * The maximum percentage of failed child workflow executions before the Map Run fails.
   *
   * @public
   */
  toleratedFailurePercentage: number | undefined;

  /**
   * The maximum number of failed child workflow executions before the Map Run fails.
   *
   * @public
   */
  toleratedFailureCount: number | undefined;

  /**
   * A JSON object that contains information about the total number of items, and the item count for each processing status, such as `pending` and `failed`.
   *
   * @public
   */
  itemCounts: MapRunItemCounts | undefined;

  /**
   * A JSON object that contains information about the total number of child workflow executions for the Map Run, and the count of child workflow executions for each status, such as `failed` and `succeeded`.
   *
   * @public
   */
  executionCounts: MapRunExecutionCounts | undefined;

  /**
   * The number of times you've redriven a Map Run. If you have not yet redriven a Map Run, the `redriveCount` is 0. This count is only updated if you successfully redrive a Map Run.
   *
   * @public
   */
  redriveCount?: number | undefined;

  /**
   * The date a Map Run was last redriven. If you have not yet redriven a Map Run, the `redriveDate` is null.
   *
   * @public
   */
  redriveDate?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeStateMachineInput {
  /**
   * The Amazon Resource Name (ARN) of the state machine for which you want the information.
   *
   * If you specify a state machine version ARN, this API returns details about that version. The version ARN is a combination of state machine ARN and the version number separated by a colon (:). For example, `stateMachineARN:1`.
   *
   * @public
   */
  stateMachineArn: string | undefined;

  /**
   * If your state machine definition is encrypted with a KMS key, callers must have `kms:Decrypt` permission to decrypt the definition. Alternatively, you can call the API with `includedData = METADATA_ONLY` to get a successful response without the encrypted definition.
   *
   * > **Note:** When calling a labelled ARN for an encrypted state machine, the `includedData = METADATA_ONLY` parameter will not apply because Step Functions needs to decrypt the entire state machine definition to get the Distributed Map state’s definition. In this case, the API caller needs to have `kms:Decrypt` permission.
   *
   * @public
   */
  includedData?: IncludedData | undefined;
}

/**
 * @public
 */
export interface DescribeStateMachineOutput {
  /**
   * The Amazon Resource Name (ARN) that identifies the state machine.
   *
   * If you specified a state machine version ARN in your request, the API returns the version ARN. The version ARN is a combination of state machine ARN and the version number separated by a colon (:). For example, `stateMachineARN:1`.
   *
   * @public
   */
  stateMachineArn: string | undefined;

  /**
   * The name of the state machine.
   *
   * A name must *not* contain:
   *
   * - white space
   * - brackets `< > \{ \} [ ]`
   * - wildcard characters `? *`
   * - special characters ``" # % \ ^ | ~ ` $ & , ; : /``
   * - control characters (`U+0000-001F`, `U+007F-009F`, `U+FFFE-FFFF`)
   * - surrogates (`U+D800-DFFF`)
   * - invalid characters (`U+10FFFF`)
   *
   * To enable logging with CloudWatch Logs, the name should only contain 0-9, A-Z, a-z, - and _.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The current status of the state machine.
   *
   * @public
   */
  status?: StateMachineStatus | undefined;

  /**
   * The Amazon States Language definition of the state machine. See [Amazon States Language](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html).
   *
   * If called with `includedData = METADATA_ONLY`, the returned definition will be `\{\}`.
   *
   * @public
   */
  definition: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role used when creating this state machine. (The IAM role maintains security by granting Step Functions access to Amazon Web Services resources.)
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The `type` of the state machine (`STANDARD` or `EXPRESS`).
   *
   * @public
   */
  type: StateMachineType | undefined;

  /**
   * The date the state machine is created.
   *
   * For a state machine version, `creationDate` is the date the version was created.
   *
   * @public
   */
  creationDate: Date | undefined;

  /**
   * The `LoggingConfiguration` data type is used to set CloudWatch Logs options.
   *
   * @public
   */
  loggingConfiguration?: LoggingConfiguration | undefined;

  /**
   * Selects whether X-Ray tracing is enabled.
   *
   * @public
   */
  tracingConfiguration?: TracingConfiguration | undefined;

  /**
   * A user-defined or an auto-generated string that identifies a `Map` state. This parameter is present only if the `stateMachineArn` specified in input is a qualified state machine ARN.
   *
   * @public
   */
  label?: string | undefined;

  /**
   * The revision identifier for the state machine.
   *
   * Use the `revisionId` parameter to compare between versions of a state machine configuration used for executions without performing a diff of the properties, such as `definition` and `roleArn`.
   *
   * @public
   */
  revisionId?: string | undefined;

  /**
   * The description of the state machine version.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Settings to configure server-side encryption.
   *
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * A map of **state name** to a list of variables referenced by that state. States that do not use variable references will not be shown in the response.
   *
   * @public
   */
  variableReferences?: Record<string, string[]> | undefined;
}

/**
 * @public
 */
export interface DescribeStateMachineAliasInput {
  /**
   * The Amazon Resource Name (ARN) of the state machine alias.
   *
   * @public
   */
  stateMachineAliasArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeStateMachineAliasOutput {
  /**
   * The Amazon Resource Name (ARN) of the state machine alias.
   *
   * @public
   */
  stateMachineAliasArn?: string | undefined;

  /**
   * The name of the state machine alias.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A description of the alias.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The routing configuration of the alias.
   *
   * @public
   */
  routingConfiguration?: RoutingConfigurationListItem[] | undefined;

  /**
   * The date the state machine alias was created.
   *
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * The date the state machine alias was last updated.
   *
   * For a newly created state machine, this is the same as the creation date.
   *
   * @public
   */
  updateDate?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeStateMachineForExecutionInput {
  /**
   * The Amazon Resource Name (ARN) of the execution you want state machine information for.
   *
   * @public
   */
  executionArn: string | undefined;

  /**
   * If your state machine definition is encrypted with a KMS key, callers must have `kms:Decrypt` permission to decrypt the definition. Alternatively, you can call the API with `includedData = METADATA_ONLY` to get a successful response without the encrypted definition.
   *
   * @public
   */
  includedData?: IncludedData | undefined;
}

/**
 * @public
 */
export interface DescribeStateMachineForExecutionOutput {
  /**
   * The Amazon Resource Name (ARN) of the state machine associated with the execution.
   *
   * @public
   */
  stateMachineArn: string | undefined;

  /**
   * The name of the state machine associated with the execution.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon States Language definition of the state machine. See [Amazon States Language](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html).
   *
   * @public
   */
  definition: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role of the State Machine for the execution.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The date and time the state machine associated with an execution was updated. For a newly created state machine, this is the creation date.
   *
   * @public
   */
  updateDate: Date | undefined;

  /**
   * The `LoggingConfiguration` data type is used to set CloudWatch Logs options.
   *
   * @public
   */
  loggingConfiguration?: LoggingConfiguration | undefined;

  /**
   * Selects whether X-Ray tracing is enabled.
   *
   * @public
   */
  tracingConfiguration?: TracingConfiguration | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Map Run that started the child workflow execution. This field is returned only if the `executionArn` is a child workflow execution that was started by a Distributed Map state.
   *
   * @public
   */
  mapRunArn?: string | undefined;

  /**
   * A user-defined or an auto-generated string that identifies a `Map` state. This field is returned only if the `executionArn` is a child workflow execution that was started by a Distributed Map state.
   *
   * @public
   */
  label?: string | undefined;

  /**
   * The revision identifier for the state machine. The first revision ID when you create the state machine is null.
   *
   * Use the state machine `revisionId` parameter to compare the revision of a state machine with the configuration of the state machine used for executions without performing a diff of the properties, such as `definition` and `roleArn`.
   *
   * @public
   */
  revisionId?: string | undefined;

  /**
   * Settings to configure server-side encryption.
   *
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * A map of **state name** to a list of variables referenced by that state. States that do not use variable references will not be shown in the response.
   *
   * @public
   */
  variableReferences?: Record<string, string[]> | undefined;
}

/**
 * @public
 */
export interface GetActivityTaskInput {
  /**
   * The Amazon Resource Name (ARN) of the activity to retrieve tasks from (assigned when you create the task using CreateActivity.)
   *
   * @public
   */
  activityArn: string | undefined;

  /**
   * You can provide an arbitrary name in order to identify the worker that the task is assigned to. This name is used when it is logged in the execution history.
   *
   * @public
   */
  workerName?: string | undefined;
}

/**
 * @public
 */
export interface GetActivityTaskOutput {
  /**
   * A token that identifies the scheduled task. This token must be copied and included in subsequent calls to SendTaskHeartbeat, SendTaskSuccess or SendTaskFailure in order to report the progress or completion of the task.
   *
   * @public
   */
  taskToken?: string | undefined;

  /**
   * The string that contains the JSON input data for the task. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.
   *
   * @public
   */
  input?: string | undefined;
}

/**
 * @public
 */
export interface GetExecutionHistoryInput {
  /**
   * The Amazon Resource Name (ARN) of the execution.
   *
   * @public
   */
  executionArn: string | undefined;

  /**
   * The maximum number of results that are returned per call. You can use `nextToken` to obtain further pages of results. The default is 100 and the maximum allowed page size is 1000. A value of 0 uses the default.
   *
   * This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Lists events in descending order of their `timeStamp`.
   *
   * @public
   */
  reverseOrder?: boolean | undefined;

  /**
   * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an *HTTP 400 InvalidToken* error.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * You can select whether execution data (input or output of a history event) is returned. The default is `true`.
   *
   * @public
   */
  includeExecutionData?: boolean | undefined;
}

/**
 * Contains details about an evaluation failure that occurred while processing a state, for example, when a JSONata expression throws an error. This event will only be present in state machines that have **QueryLanguage** set to JSONata, or individual states set to JSONata.
 *
 * @public
 */
export interface EvaluationFailedEventDetails {
  /**
   * The error code of the failure.
   *
   * @public
   */
  error?: string | undefined;

  /**
   * A more detailed explanation of the cause of the failure.
   *
   * @public
   */
  cause?: string | undefined;

  /**
   * The location of the field in the state in which the evaluation error occurred.
   *
   * @public
   */
  location?: string | undefined;

  /**
   * The name of the state in which the evaluation error occurred.
   *
   * @public
   */
  state: string | undefined;
}

/**
 * Contains details about an abort of an execution.
 *
 * @public
 */
export interface ExecutionAbortedEventDetails {
  /**
   * The error code of the failure.
   *
   * @public
   */
  error?: string | undefined;

  /**
   * A more detailed explanation of the cause of the failure.
   *
   * @public
   */
  cause?: string | undefined;
}

/**
 * Contains details about an execution failure event.
 *
 * @public
 */
export interface ExecutionFailedEventDetails {
  /**
   * The error code of the failure.
   *
   * @public
   */
  error?: string | undefined;

  /**
   * A more detailed explanation of the cause of the failure.
   *
   * @public
   */
  cause?: string | undefined;
}

/**
 * Contains details about a redriven execution.
 *
 * @public
 */
export interface ExecutionRedrivenEventDetails {
  /**
   * The number of times you've redriven an execution. If you have not yet redriven an execution, the `redriveCount` is 0. This count is not updated for redrives that failed to start or are pending to be redriven.
   *
   * @public
   */
  redriveCount?: number | undefined;
}

/**
 * Contains details about the start of the execution.
 *
 * @public
 */
export interface ExecutionStartedEventDetails {
  /**
   * The JSON data input to the execution. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.
   *
   * @public
   */
  input?: string | undefined;

  /**
   * Contains details about the input for an execution history event.
   *
   * @public
   */
  inputDetails?: HistoryEventExecutionDataDetails | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role used for executing Lambda tasks.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that identifies a state machine alias used for starting the state machine execution.
   *
   * @public
   */
  stateMachineAliasArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that identifies a state machine version used for starting the state machine execution.
   *
   * @public
   */
  stateMachineVersionArn?: string | undefined;
}

/**
 * Contains details about the successful termination of the execution.
 *
 * @public
 */
export interface ExecutionSucceededEventDetails {
  /**
   * The JSON data output by the execution. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.
   *
   * @public
   */
  output?: string | undefined;

  /**
   * Contains details about the output of an execution history event.
   *
   * @public
   */
  outputDetails?: HistoryEventExecutionDataDetails | undefined;
}

/**
 * Contains details about the execution timeout that occurred during the execution.
 *
 * @public
 */
export interface ExecutionTimedOutEventDetails {
  /**
   * The error code of the failure.
   *
   * @public
   */
  error?: string | undefined;

  /**
   * A more detailed explanation of the cause of the timeout.
   *
   * @public
   */
  cause?: string | undefined;
}

/**
 * Contains details about a Lambda function that failed during an execution.
 *
 * @public
 */
export interface LambdaFunctionFailedEventDetails {
  /**
   * The error code of the failure.
   *
   * @public
   */
  error?: string | undefined;

  /**
   * A more detailed explanation of the cause of the failure.
   *
   * @public
   */
  cause?: string | undefined;
}

/**
 * Contains details about the credentials that Step Functions uses for a task.
 *
 * @public
 */
export interface TaskCredentials {
  /**
   * The ARN of an IAM role that Step Functions assumes for the task. The role can allow cross-account access to resources.
   *
   * @public
   */
  roleArn?: string | undefined;
}

/**
 * Contains details about a Lambda function scheduled during an execution.
 *
 * @public
 */
export interface LambdaFunctionScheduledEventDetails {
  /**
   * The Amazon Resource Name (ARN) of the scheduled Lambda function.
   *
   * @public
   */
  resource: string | undefined;

  /**
   * The JSON data input to the Lambda function. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.
   *
   * @public
   */
  input?: string | undefined;

  /**
   * Contains details about input for an execution history event.
   *
   * @public
   */
  inputDetails?: HistoryEventExecutionDataDetails | undefined;

  /**
   * The maximum allowed duration of the Lambda function.
   *
   * @public
   */
  timeoutInSeconds?: number | undefined;

  /**
   * The credentials that Step Functions uses for the task.
   *
   * @public
   */
  taskCredentials?: TaskCredentials | undefined;
}

/**
 * Contains details about a failed Lambda function schedule event that occurred during an execution.
 *
 * @public
 */
export interface LambdaFunctionScheduleFailedEventDetails {
  /**
   * The error code of the failure.
   *
   * @public
   */
  error?: string | undefined;

  /**
   * A more detailed explanation of the cause of the failure.
   *
   * @public
   */
  cause?: string | undefined;
}

/**
 * Contains details about a lambda function that failed to start during an execution.
 *
 * @public
 */
export interface LambdaFunctionStartFailedEventDetails {
  /**
   * The error code of the failure.
   *
   * @public
   */
  error?: string | undefined;

  /**
   * A more detailed explanation of the cause of the failure.
   *
   * @public
   */
  cause?: string | undefined;
}

/**
 * Contains details about a Lambda function that successfully terminated during an execution.
 *
 * @public
 */
export interface LambdaFunctionSucceededEventDetails {
  /**
   * The JSON data output by the Lambda function. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.
   *
   * @public
   */
  output?: string | undefined;

  /**
   * Contains details about the output of an execution history event.
   *
   * @public
   */
  outputDetails?: HistoryEventExecutionDataDetails | undefined;
}

/**
 * Contains details about a Lambda function timeout that occurred during an execution.
 *
 * @public
 */
export interface LambdaFunctionTimedOutEventDetails {
  /**
   * The error code of the failure.
   *
   * @public
   */
  error?: string | undefined;

  /**
   * A more detailed explanation of the cause of the timeout.
   *
   * @public
   */
  cause?: string | undefined;
}

/**
 * Contains details about an iteration of a Map state.
 *
 * @public
 */
export interface MapIterationEventDetails {
  /**
   * The name of the iteration’s parent Map state.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The index of the array belonging to the Map state iteration.
   *
   * @public
   */
  index?: number | undefined;
}

/**
 * Contains details about a Map Run failure event that occurred during a state machine execution.
 *
 * @public
 */
export interface MapRunFailedEventDetails {
  /**
   * The error code of the Map Run failure.
   *
   * @public
   */
  error?: string | undefined;

  /**
   * A more detailed explanation of the cause of the failure.
   *
   * @public
   */
  cause?: string | undefined;
}

/**
 * Contains details about a Map Run that was redriven.
 *
 * @public
 */
export interface MapRunRedrivenEventDetails {
  /**
   * The Amazon Resource Name (ARN) of a Map Run that was redriven.
   *
   * @public
   */
  mapRunArn?: string | undefined;

  /**
   * The number of times the Map Run has been redriven at this point in the execution's history including this event. The redrive count for a redriven Map Run is always greater than 0.
   *
   * @public
   */
  redriveCount?: number | undefined;
}

/**
 * Contains details about a Map Run that was started during a state machine execution.
 *
 * @public
 */
export interface MapRunStartedEventDetails {
  /**
   * The Amazon Resource Name (ARN) of a Map Run that was started.
   *
   * @public
   */
  mapRunArn?: string | undefined;
}

/**
 * Details about a Map state that was started.
 *
 * @public
 */
export interface MapStateStartedEventDetails {
  /**
   * The size of the array for Map state iterations.
   *
   * @public
   */
  length?: number | undefined;
}

/**
 * Contains details about a state entered during an execution.
 *
 * @public
 */
export interface StateEnteredEventDetails {
  /**
   * The name of the state.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The string that contains the JSON input data for the state. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.
   *
   * @public
   */
  input?: string | undefined;

  /**
   * Contains details about the input for an execution history event.
   *
   * @public
   */
  inputDetails?: HistoryEventExecutionDataDetails | undefined;
}

/**
 * Contains details about an exit from a state during an execution.
 *
 * @public
 */
export interface StateExitedEventDetails {
  /**
   * The name of the state.
   *
   * A name must *not* contain:
   *
   * - white space
   * - brackets `< > \{ \} [ ]`
   * - wildcard characters `? *`
   * - special characters ``" # % \ ^ | ~ ` $ & , ; : /``
   * - control characters (`U+0000-001F`, `U+007F-009F`, `U+FFFE-FFFF`)
   * - surrogates (`U+D800-DFFF`)
   * - invalid characters (`U+10FFFF`)
   *
   * To enable logging with CloudWatch Logs, the name should only contain 0-9, A-Z, a-z, - and _.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The JSON output data of the state. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.
   *
   * @public
   */
  output?: string | undefined;

  /**
   * Contains details about the output of an execution history event.
   *
   * @public
   */
  outputDetails?: HistoryEventExecutionDataDetails | undefined;

  /**
   * Map of variable name and value as a serialized JSON representation.
   *
   * @public
   */
  assignedVariables?: Record<string, string> | undefined;

  /**
   * Provides details about input or output in an execution history event.
   *
   * @public
   */
  assignedVariablesDetails?: AssignedVariablesDetails | undefined;
}

/**
 * Contains details about a task failure event.
 *
 * @public
 */
export interface TaskFailedEventDetails {
  /**
   * The service name of the resource in a task state.
   *
   * @public
   */
  resourceType: string | undefined;

  /**
   * The action of the resource called by a task state.
   *
   * @public
   */
  resource: string | undefined;

  /**
   * The error code of the failure.
   *
   * @public
   */
  error?: string | undefined;

  /**
   * A more detailed explanation of the cause of the failure.
   *
   * @public
   */
  cause?: string | undefined;
}

/**
 * Contains details about a task scheduled during an execution.
 *
 * @public
 */
export interface TaskScheduledEventDetails {
  /**
   * The service name of the resource in a task state.
   *
   * @public
   */
  resourceType: string | undefined;

  /**
   * The action of the resource called by a task state.
   *
   * @public
   */
  resource: string | undefined;

  /**
   * The region of the scheduled task
   *
   * @public
   */
  region: string | undefined;

  /**
   * The JSON data passed to the resource referenced in a task state. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.
   *
   * @public
   */
  parameters: string | undefined;

  /**
   * The maximum allowed duration of the task.
   *
   * @public
   */
  timeoutInSeconds?: number | undefined;

  /**
   * The maximum allowed duration between two heartbeats for the task.
   *
   * @public
   */
  heartbeatInSeconds?: number | undefined;

  /**
   * The credentials that Step Functions uses for the task.
   *
   * @public
   */
  taskCredentials?: TaskCredentials | undefined;
}

/**
 * Contains details about the start of a task during an execution.
 *
 * @public
 */
export interface TaskStartedEventDetails {
  /**
   * The service name of the resource in a task state.
   *
   * @public
   */
  resourceType: string | undefined;

  /**
   * The action of the resource called by a task state.
   *
   * @public
   */
  resource: string | undefined;
}

/**
 * Contains details about a task that failed to start during an execution.
 *
 * @public
 */
export interface TaskStartFailedEventDetails {
  /**
   * The service name of the resource in a task state.
   *
   * @public
   */
  resourceType: string | undefined;

  /**
   * The action of the resource called by a task state.
   *
   * @public
   */
  resource: string | undefined;

  /**
   * The error code of the failure.
   *
   * @public
   */
  error?: string | undefined;

  /**
   * A more detailed explanation of the cause of the failure.
   *
   * @public
   */
  cause?: string | undefined;
}

/**
 * Contains details about a task that failed to submit during an execution.
 *
 * @public
 */
export interface TaskSubmitFailedEventDetails {
  /**
   * The service name of the resource in a task state.
   *
   * @public
   */
  resourceType: string | undefined;

  /**
   * The action of the resource called by a task state.
   *
   * @public
   */
  resource: string | undefined;

  /**
   * The error code of the failure.
   *
   * @public
   */
  error?: string | undefined;

  /**
   * A more detailed explanation of the cause of the failure.
   *
   * @public
   */
  cause?: string | undefined;
}

/**
 * Contains details about a task submitted to a resource .
 *
 * @public
 */
export interface TaskSubmittedEventDetails {
  /**
   * The service name of the resource in a task state.
   *
   * @public
   */
  resourceType: string | undefined;

  /**
   * The action of the resource called by a task state.
   *
   * @public
   */
  resource: string | undefined;

  /**
   * The response from a resource when a task has started. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.
   *
   * @public
   */
  output?: string | undefined;

  /**
   * Contains details about the output of an execution history event.
   *
   * @public
   */
  outputDetails?: HistoryEventExecutionDataDetails | undefined;
}

/**
 * Contains details about the successful completion of a task state.
 *
 * @public
 */
export interface TaskSucceededEventDetails {
  /**
   * The service name of the resource in a task state.
   *
   * @public
   */
  resourceType: string | undefined;

  /**
   * The action of the resource called by a task state.
   *
   * @public
   */
  resource: string | undefined;

  /**
   * The full JSON response from a resource when a task has succeeded. This response becomes the output of the related task. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.
   *
   * @public
   */
  output?: string | undefined;

  /**
   * Contains details about the output of an execution history event.
   *
   * @public
   */
  outputDetails?: HistoryEventExecutionDataDetails | undefined;
}

/**
 * Contains details about a resource timeout that occurred during an execution.
 *
 * @public
 */
export interface TaskTimedOutEventDetails {
  /**
   * The service name of the resource in a task state.
   *
   * @public
   */
  resourceType: string | undefined;

  /**
   * The action of the resource called by a task state.
   *
   * @public
   */
  resource: string | undefined;

  /**
   * The error code of the failure.
   *
   * @public
   */
  error?: string | undefined;

  /**
   * A more detailed explanation of the cause of the failure.
   *
   * @public
   */
  cause?: string | undefined;
}

/**
 * Contains details about the events of an execution.
 *
 * @public
 */
export interface HistoryEvent {
  /**
   * The date and time the event occurred, expressed in seconds and fractional milliseconds since the Unix epoch, which is defined as January 1, 1970, at 00:00:00 Coordinated Universal Time (UTC).
   *
   * @public
   */
  timestamp: Date | undefined;

  /**
   * The type of the event.
   *
   * @public
   */
  type: HistoryEventType | undefined;

  /**
   * The id of the event. Events are numbered sequentially, starting at one.
   *
   * @public
   */
  id: number | undefined;

  /**
   * The id of the previous event.
   *
   * @public
   */
  previousEventId?: number | undefined;

  /**
   * Contains details about an activity that failed during an execution.
   *
   * @public
   */
  activityFailedEventDetails?: ActivityFailedEventDetails | undefined;

  /**
   * Contains details about an activity schedule event that failed during an execution.
   *
   * @public
   */
  activityScheduleFailedEventDetails?: ActivityScheduleFailedEventDetails | undefined;

  /**
   * Contains details about an activity scheduled during an execution.
   *
   * @public
   */
  activityScheduledEventDetails?: ActivityScheduledEventDetails | undefined;

  /**
   * Contains details about the start of an activity during an execution.
   *
   * @public
   */
  activityStartedEventDetails?: ActivityStartedEventDetails | undefined;

  /**
   * Contains details about an activity that successfully terminated during an execution.
   *
   * @public
   */
  activitySucceededEventDetails?: ActivitySucceededEventDetails | undefined;

  /**
   * Contains details about an activity timeout that occurred during an execution.
   *
   * @public
   */
  activityTimedOutEventDetails?: ActivityTimedOutEventDetails | undefined;

  /**
   * Contains details about the failure of a task.
   *
   * @public
   */
  taskFailedEventDetails?: TaskFailedEventDetails | undefined;

  /**
   * Contains details about a task that was scheduled.
   *
   * @public
   */
  taskScheduledEventDetails?: TaskScheduledEventDetails | undefined;

  /**
   * Contains details about a task that failed to start.
   *
   * @public
   */
  taskStartFailedEventDetails?: TaskStartFailedEventDetails | undefined;

  /**
   * Contains details about a task that was started.
   *
   * @public
   */
  taskStartedEventDetails?: TaskStartedEventDetails | undefined;

  /**
   * Contains details about a task that where the submit failed.
   *
   * @public
   */
  taskSubmitFailedEventDetails?: TaskSubmitFailedEventDetails | undefined;

  /**
   * Contains details about a submitted task.
   *
   * @public
   */
  taskSubmittedEventDetails?: TaskSubmittedEventDetails | undefined;

  /**
   * Contains details about a task that succeeded.
   *
   * @public
   */
  taskSucceededEventDetails?: TaskSucceededEventDetails | undefined;

  /**
   * Contains details about a task that timed out.
   *
   * @public
   */
  taskTimedOutEventDetails?: TaskTimedOutEventDetails | undefined;

  /**
   * Contains details about an execution failure event.
   *
   * @public
   */
  executionFailedEventDetails?: ExecutionFailedEventDetails | undefined;

  /**
   * Contains details about the start of the execution.
   *
   * @public
   */
  executionStartedEventDetails?: ExecutionStartedEventDetails | undefined;

  /**
   * Contains details about the successful termination of the execution.
   *
   * @public
   */
  executionSucceededEventDetails?: ExecutionSucceededEventDetails | undefined;

  /**
   * Contains details about an abort of an execution.
   *
   * @public
   */
  executionAbortedEventDetails?: ExecutionAbortedEventDetails | undefined;

  /**
   * Contains details about the execution timeout that occurred during the execution.
   *
   * @public
   */
  executionTimedOutEventDetails?: ExecutionTimedOutEventDetails | undefined;

  /**
   * Contains details about the redrive attempt of an execution.
   *
   * @public
   */
  executionRedrivenEventDetails?: ExecutionRedrivenEventDetails | undefined;

  /**
   * Contains details about Map state that was started.
   *
   * @public
   */
  mapStateStartedEventDetails?: MapStateStartedEventDetails | undefined;

  /**
   * Contains details about an iteration of a Map state that was started.
   *
   * @public
   */
  mapIterationStartedEventDetails?: MapIterationEventDetails | undefined;

  /**
   * Contains details about an iteration of a Map state that succeeded.
   *
   * @public
   */
  mapIterationSucceededEventDetails?: MapIterationEventDetails | undefined;

  /**
   * Contains details about an iteration of a Map state that failed.
   *
   * @public
   */
  mapIterationFailedEventDetails?: MapIterationEventDetails | undefined;

  /**
   * Contains details about an iteration of a Map state that was aborted.
   *
   * @public
   */
  mapIterationAbortedEventDetails?: MapIterationEventDetails | undefined;

  /**
   * Contains details about a Lambda function that failed during an execution.
   *
   * @public
   */
  lambdaFunctionFailedEventDetails?: LambdaFunctionFailedEventDetails | undefined;

  /**
   * Contains details about a failed Lambda function schedule event that occurred during an execution.
   *
   * @public
   */
  lambdaFunctionScheduleFailedEventDetails?: LambdaFunctionScheduleFailedEventDetails | undefined;

  /**
   * Contains details about a Lambda function scheduled during an execution.
   *
   * @public
   */
  lambdaFunctionScheduledEventDetails?: LambdaFunctionScheduledEventDetails | undefined;

  /**
   * Contains details about a lambda function that failed to start during an execution.
   *
   * @public
   */
  lambdaFunctionStartFailedEventDetails?: LambdaFunctionStartFailedEventDetails | undefined;

  /**
   * Contains details about a Lambda function that terminated successfully during an execution.
   *
   * @public
   */
  lambdaFunctionSucceededEventDetails?: LambdaFunctionSucceededEventDetails | undefined;

  /**
   * Contains details about a Lambda function timeout that occurred during an execution.
   *
   * @public
   */
  lambdaFunctionTimedOutEventDetails?: LambdaFunctionTimedOutEventDetails | undefined;

  /**
   * Contains details about a state entered during an execution.
   *
   * @public
   */
  stateEnteredEventDetails?: StateEnteredEventDetails | undefined;

  /**
   * Contains details about an exit from a state during an execution.
   *
   * @public
   */
  stateExitedEventDetails?: StateExitedEventDetails | undefined;

  /**
   * Contains details, such as `mapRunArn`, and the start date and time of a Map Run. `mapRunArn` is the Amazon Resource Name (ARN) of the Map Run that was started.
   *
   * @public
   */
  mapRunStartedEventDetails?: MapRunStartedEventDetails | undefined;

  /**
   * Contains error and cause details about a Map Run that failed.
   *
   * @public
   */
  mapRunFailedEventDetails?: MapRunFailedEventDetails | undefined;

  /**
   * Contains details about the redrive attempt of a Map Run.
   *
   * @public
   */
  mapRunRedrivenEventDetails?: MapRunRedrivenEventDetails | undefined;

  /**
   * Contains details about an evaluation failure that occurred while processing a state.
   *
   * @public
   */
  evaluationFailedEventDetails?: EvaluationFailedEventDetails | undefined;
}

/**
 * @public
 */
export interface GetExecutionHistoryOutput {
  /**
   * The list of events that occurred in the execution.
   *
   * @public
   */
  events: HistoryEvent[] | undefined;

  /**
   * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an *HTTP 400 InvalidToken* error.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListActivitiesInput {
  /**
   * The maximum number of results that are returned per call. You can use `nextToken` to obtain further pages of results. The default is 100 and the maximum allowed page size is 1000. A value of 0 uses the default.
   *
   * This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an *HTTP 400 InvalidToken* error.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListActivitiesOutput {
  /**
   * The list of activities.
   *
   * @public
   */
  activities: ActivityListItem[] | undefined;

  /**
   * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an *HTTP 400 InvalidToken* error.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListExecutionsInput {
  /**
   * The Amazon Resource Name (ARN) of the state machine whose executions is listed.
   *
   * You can specify either a `mapRunArn` or a `stateMachineArn`, but not both.
   *
   * You can also return a list of executions associated with a specific [alias](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-alias.html) or [version](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html), by specifying an alias ARN or a version ARN in the `stateMachineArn` parameter.
   *
   * @public
   */
  stateMachineArn?: string | undefined;

  /**
   * If specified, only list the executions whose current execution status matches the given filter.
   *
   * If you provide a `PENDING_REDRIVE` statusFilter, you must specify `mapRunArn`. For more information, see [Child workflow execution redrive behaviour](https://docs.aws.amazon.com/step-functions/latest/dg/redrive-map-run.html#redrive-child-workflow-behavior) in the *Step Functions Developer Guide*.
   *
   * If you provide a stateMachineArn and a `PENDING_REDRIVE` statusFilter, the API returns a validation exception.
   *
   * @public
   */
  statusFilter?: ExecutionStatus | undefined;

  /**
   * The maximum number of results that are returned per call. You can use `nextToken` to obtain further pages of results. The default is 100 and the maximum allowed page size is 1000. A value of 0 uses the default.
   *
   * This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an *HTTP 400 InvalidToken* error.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Map Run that started the child workflow executions. If the `mapRunArn` field is specified, a list of all of the child workflow executions started by a Map Run is returned. For more information, see [Examining Map Run](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-examine-map-run.html) in the *Step Functions Developer Guide*.
   *
   * You can specify either a `mapRunArn` or a `stateMachineArn`, but not both.
   *
   * @public
   */
  mapRunArn?: string | undefined;

  /**
   * Sets a filter to list executions based on whether or not they have been redriven.
   *
   * For a Distributed Map, `redriveFilter` sets a filter to list child workflow executions based on whether or not they have been redriven.
   *
   * If you do not provide a `redriveFilter`, Step Functions returns a list of both redriven and non-redriven executions.
   *
   * If you provide a state machine ARN in `redriveFilter`, the API returns a validation exception.
   *
   * @public
   */
  redriveFilter?: ExecutionRedriveFilter | undefined;
}

/**
 * Contains details about an execution.
 *
 * @public
 */
export interface ExecutionListItem {
  /**
   * The Amazon Resource Name (ARN) that identifies the execution.
   *
   * @public
   */
  executionArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the state machine that ran the execution.
   *
   * @public
   */
  stateMachineArn: string | undefined;

  /**
   * The name of the execution.
   *
   * A name must *not* contain:
   *
   * - white space
   * - brackets `< > \{ \} [ ]`
   * - wildcard characters `? *`
   * - special characters ``" # % \ ^ | ~ ` $ & , ; : /``
   * - control characters (`U+0000-001F`, `U+007F-009F`, `U+FFFE-FFFF`)
   * - surrogates (`U+D800-DFFF`)
   * - invalid characters (`U+10FFFF`)
   *
   * To enable logging with CloudWatch Logs, the name should only contain 0-9, A-Z, a-z, - and _.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The current status of the execution.
   *
   * @public
   */
  status: ExecutionStatus | undefined;

  /**
   * The date the execution started.
   *
   * @public
   */
  startDate: Date | undefined;

  /**
   * If the execution already ended, the date the execution stopped.
   *
   * @public
   */
  stopDate?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of a Map Run. This field is returned only if `mapRunArn` was specified in the `ListExecutions` API action. If `stateMachineArn` was specified in `ListExecutions`, the `mapRunArn` isn't returned.
   *
   * @public
   */
  mapRunArn?: string | undefined;

  /**
   * The total number of items processed in a child workflow execution. This field is returned only if `mapRunArn` was specified in the `ListExecutions` API action. If `stateMachineArn` was specified in `ListExecutions`, the `itemCount` field isn't returned.
   *
   * @public
   */
  itemCount?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the state machine version associated with the execution.
   *
   * If the state machine execution was started with an unqualified ARN, it returns null.
   *
   * If the execution was started using a `stateMachineAliasArn`, both the `stateMachineAliasArn` and `stateMachineVersionArn` parameters contain the respective values.
   *
   * @public
   */
  stateMachineVersionArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the state machine alias used to start an execution.
   *
   * If the state machine execution was started with an unqualified ARN or a version ARN, it returns null.
   *
   * @public
   */
  stateMachineAliasArn?: string | undefined;

  /**
   * The number of times you've redriven an execution. If you have not yet redriven an execution, the `redriveCount` is 0. This count is only updated when you successfully redrive an execution.
   *
   * @public
   */
  redriveCount?: number | undefined;

  /**
   * The date the execution was last redriven.
   *
   * @public
   */
  redriveDate?: Date | undefined;
}

/**
 * @public
 */
export interface ListExecutionsOutput {
  /**
   * The list of matching executions.
   *
   * @public
   */
  executions: ExecutionListItem[] | undefined;

  /**
   * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an *HTTP 400 InvalidToken* error.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMapRunsInput {
  /**
   * The Amazon Resource Name (ARN) of the execution for which the Map Runs must be listed.
   *
   * @public
   */
  executionArn: string | undefined;

  /**
   * The maximum number of results that are returned per call. You can use `nextToken` to obtain further pages of results. The default is 100 and the maximum allowed page size is 1000. A value of 0 uses the default.
   *
   * This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an *HTTP 400 InvalidToken* error.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains details about a specific Map Run.
 *
 * @public
 */
export interface MapRunListItem {
  /**
   * The `executionArn` of the execution from which the Map Run was started.
   *
   * @public
   */
  executionArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Map Run.
   *
   * @public
   */
  mapRunArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the executed state machine.
   *
   * @public
   */
  stateMachineArn: string | undefined;

  /**
   * The date on which the Map Run started.
   *
   * @public
   */
  startDate: Date | undefined;

  /**
   * The date on which the Map Run stopped.
   *
   * @public
   */
  stopDate?: Date | undefined;
}

/**
 * @public
 */
export interface ListMapRunsOutput {
  /**
   * An array that lists information related to a Map Run, such as the Amazon Resource Name (ARN) of the Map Run and the ARN of the state machine that started the Map Run.
   *
   * @public
   */
  mapRuns: MapRunListItem[] | undefined;

  /**
   * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an *HTTP 400 InvalidToken* error.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListStateMachineAliasesInput {
  /**
   * The Amazon Resource Name (ARN) of the state machine for which you want to list aliases.
   *
   * If you specify a state machine version ARN, this API returns a list of aliases for that version.
   *
   * @public
   */
  stateMachineArn: string | undefined;

  /**
   * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an *HTTP 400 InvalidToken* error.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results that are returned per call. You can use `nextToken` to obtain further pages of results. The default is 100 and the maximum allowed page size is 1000. A value of 0 uses the default.
   *
   * This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Contains details about a specific state machine alias.
 *
 * @public
 */
export interface StateMachineAliasListItem {
  /**
   * The Amazon Resource Name (ARN) that identifies a state machine alias. The alias ARN is a combination of state machine ARN and the alias name separated by a colon (:). For example, `stateMachineARN:PROD`.
   *
   * @public
   */
  stateMachineAliasArn: string | undefined;

  /**
   * The creation date of a state machine alias.
   *
   * @public
   */
  creationDate: Date | undefined;
}

/**
 * @public
 */
export interface ListStateMachineAliasesOutput {
  /**
   * Aliases for the state machine.
   *
   * @public
   */
  stateMachineAliases: StateMachineAliasListItem[] | undefined;

  /**
   * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an *HTTP 400 InvalidToken* error.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListStateMachinesInput {
  /**
   * The maximum number of results that are returned per call. You can use `nextToken` to obtain further pages of results. The default is 100 and the maximum allowed page size is 1000. A value of 0 uses the default.
   *
   * This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an *HTTP 400 InvalidToken* error.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains details about the state machine.
 *
 * @public
 */
export interface StateMachineListItem {
  /**
   * The Amazon Resource Name (ARN) that identifies the state machine.
   *
   * @public
   */
  stateMachineArn: string | undefined;

  /**
   * The name of the state machine.
   *
   * A name must *not* contain:
   *
   * - white space
   * - brackets `< > \{ \} [ ]`
   * - wildcard characters `? *`
   * - special characters ``" # % \ ^ | ~ ` $ & , ; : /``
   * - control characters (`U+0000-001F`, `U+007F-009F`, `U+FFFE-FFFF`)
   * - surrogates (`U+D800-DFFF`)
   * - invalid characters (`U+10FFFF`)
   *
   * To enable logging with CloudWatch Logs, the name should only contain 0-9, A-Z, a-z, - and _.
   *
   * @public
   */
  name: string | undefined;

  /**
   * @public
   */
  type: StateMachineType | undefined;

  /**
   * The date the state machine is created.
   *
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
   * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an *HTTP 400 InvalidToken* error.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListStateMachineVersionsInput {
  /**
   * The Amazon Resource Name (ARN) of the state machine.
   *
   * @public
   */
  stateMachineArn: string | undefined;

  /**
   * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an *HTTP 400 InvalidToken* error.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results that are returned per call. You can use `nextToken` to obtain further pages of results. The default is 100 and the maximum allowed page size is 1000. A value of 0 uses the default.
   *
   * This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Contains details about a specific state machine version.
 *
 * @public
 */
export interface StateMachineVersionListItem {
  /**
   * The Amazon Resource Name (ARN) that identifies a state machine version. The version ARN is a combination of state machine ARN and the version number separated by a colon (:). For example, `stateMachineARN:1`.
   *
   * @public
   */
  stateMachineVersionArn: string | undefined;

  /**
   * The creation date of a state machine version.
   *
   * @public
   */
  creationDate: Date | undefined;
}

/**
 * @public
 */
export interface ListStateMachineVersionsOutput {
  /**
   * Versions for the state machine.
   *
   * @public
   */
  stateMachineVersions: StateMachineVersionListItem[] | undefined;

  /**
   * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an *HTTP 400 InvalidToken* error.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * The Amazon Resource Name (ARN) for the Step Functions state machine or activity.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * An array of tags associated with the resource.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PublishStateMachineVersionInput {
  /**
   * The Amazon Resource Name (ARN) of the state machine.
   *
   * @public
   */
  stateMachineArn: string | undefined;

  /**
   * Only publish the state machine version if the current state machine's revision ID matches the specified ID.
   *
   * Use this option to avoid publishing a version if the state machine changed since you last updated it. If the specified revision ID doesn't match the state machine's current revision ID, the API returns `ConflictException`.
   *
   * > **Note:** To specify an initial revision ID for a state machine with no revision ID assigned, specify the string `INITIAL` for the `revisionId` parameter. For example, you can specify a `revisionID` of `INITIAL` when you create a state machine using the CreateStateMachine API action.
   *
   * @public
   */
  revisionId?: string | undefined;

  /**
   * An optional description of the state machine version.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface PublishStateMachineVersionOutput {
  /**
   * The date the version was created.
   *
   * @public
   */
  creationDate: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) (ARN) that identifies the state machine version.
   *
   * @public
   */
  stateMachineVersionArn: string | undefined;
}

/**
 * @public
 */
export interface RedriveExecutionInput {
  /**
   * The Amazon Resource Name (ARN) of the execution to be redriven.
   *
   * @public
   */
  executionArn: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency. The API will return idempotent responses for the last 10 client tokens used to successfully redrive the execution. These client tokens are valid for up to 15 minutes after they are first used.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface RedriveExecutionOutput {
  /**
   * The date the execution was last redriven.
   *
   * @public
   */
  redriveDate: Date | undefined;
}

/**
 * @public
 */
export interface SendTaskFailureInput {
  /**
   * The token that represents this task. Task tokens are generated by Step Functions when tasks are assigned to a worker, or in the [context object](https://docs.aws.amazon.com/step-functions/latest/dg/input-output-contextobject.html) when a workflow enters a task state. See GetActivityTaskOutput$taskToken.
   *
   * @public
   */
  taskToken: string | undefined;

  /**
   * The error code of the failure.
   *
   * @public
   */
  error?: string | undefined;

  /**
   * A more detailed explanation of the cause of the failure.
   *
   * @public
   */
  cause?: string | undefined;
}

/**
 * @public
 */
export interface SendTaskFailureOutput {}

/**
 * @public
 */
export interface SendTaskHeartbeatInput {
  /**
   * The token that represents this task. Task tokens are generated by Step Functions when tasks are assigned to a worker, or in the [context object](https://docs.aws.amazon.com/step-functions/latest/dg/input-output-contextobject.html) when a workflow enters a task state. See GetActivityTaskOutput$taskToken.
   *
   * @public
   */
  taskToken: string | undefined;
}

/**
 * @public
 */
export interface SendTaskHeartbeatOutput {}

/**
 * @public
 */
export interface SendTaskSuccessInput {
  /**
   * The token that represents this task. Task tokens are generated by Step Functions when tasks are assigned to a worker, or in the [context object](https://docs.aws.amazon.com/step-functions/latest/dg/input-output-contextobject.html) when a workflow enters a task state. See GetActivityTaskOutput$taskToken.
   *
   * @public
   */
  taskToken: string | undefined;

  /**
   * The JSON output of the task. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.
   *
   * @public
   */
  output: string | undefined;
}

/**
 * @public
 */
export interface SendTaskSuccessOutput {}

/**
 * @public
 */
export interface StartExecutionInput {
  /**
   * The Amazon Resource Name (ARN) of the state machine to execute.
   *
   * The `stateMachineArn` parameter accepts one of the following inputs:
   *
   * - **An unqualified state machine ARN** – Refers to a state machine ARN that isn't qualified with a version or alias ARN. The following is an example of an unqualified state machine ARN.
   *
   *   `arn:<partition>:states:<region>:<account-id>:stateMachine:<myStateMachine>`
   *
   *   Step Functions doesn't associate state machine executions that you start with an unqualified ARN with a version. This is true even if that version uses the same revision that the execution used.
   * - **A state machine version ARN** – Refers to a version ARN, which is a combination of state machine ARN and the version number separated by a colon (:). The following is an example of the ARN for version 10.
   *
   *   `arn:<partition>:states:<region>:<account-id>:stateMachine:<myStateMachine>:10`
   *
   *   Step Functions doesn't associate executions that you start with a version ARN with any aliases that point to that version.
   * - **A state machine alias ARN** – Refers to an alias ARN, which is a combination of state machine ARN and the alias name separated by a colon (:). The following is an example of the ARN for an alias named `PROD`.
   *
   *   `arn:<partition>:states:<region>:<account-id>:stateMachine:<myStateMachine:PROD>`
   *
   *   Step Functions associates executions that you start with an alias ARN with that alias and the state machine version used for that execution.
   *
   * @public
   */
  stateMachineArn: string | undefined;

  /**
   * Optional name of the execution. For STANDARD workflows, this name must be unique for your Amazon Web Services account, region, and state machine. If a previous execution with the same name exists, you can reuse the name 90 days after it closes. For EXPRESS workflows, execution names can be reused immediately. For more information, see [Limits Related to State Machine Executions](https://docs.aws.amazon.com/step-functions/latest/dg/limits.html#service-limits-state-machine-executions) in the *Step Functions Developer Guide*.
   *
   * If you don't provide a name for the execution, Step Functions automatically generates a universally unique identifier (UUID) as the execution name.
   *
   * A name must *not* contain:
   *
   * - white space
   * - brackets `< > \{ \} [ ]`
   * - wildcard characters `? *`
   * - special characters ``" # % \ ^ | ~ ` $ & , ; : /``
   * - control characters (`U+0000-001F`, `U+007F-009F`, `U+FFFE-FFFF`)
   * - surrogates (`U+D800-DFFF`)
   * - invalid characters (`U+10FFFF`)
   *
   * To enable logging with CloudWatch Logs, the name should only contain 0-9, A-Z, a-z, - and _.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The string that contains the JSON input data for the execution, for example:
   *
   * `"\{\"first_name\" : \"Alejandro\"\}"`
   *
   * > **Note:** If you don't include any JSON input data, you still must include the two braces, for example: `"\{\}"`
   *
   * Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.
   *
   * @public
   */
  input?: string | undefined;

  /**
   * Passes the X-Ray trace header. The trace header can also be passed in the request payload.
   *
   * > **Note:** For X-Ray traces, all Amazon Web Services services use the `X-Amzn-Trace-Id` header from the HTTP request. Using the header is the preferred mechanism to identify a trace. `StartExecution` and `StartSyncExecution` API operations can also use `traceHeader` from the body of the request payload. If **both** sources are provided, Step Functions will use the **header value** (preferred) over the value in the request body.
   *
   * @public
   */
  traceHeader?: string | undefined;
}

/**
 * @public
 */
export interface StartExecutionOutput {
  /**
   * The Amazon Resource Name (ARN) that identifies the execution.
   *
   * @public
   */
  executionArn: string | undefined;

  /**
   * The date the execution is started.
   *
   * @public
   */
  startDate: Date | undefined;
}

/**
 * @public
 */
export interface StartSyncExecutionInput {
  /**
   * The Amazon Resource Name (ARN) of the state machine to execute.
   *
   * @public
   */
  stateMachineArn: string | undefined;

  /**
   * The name of the execution.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The string that contains the JSON input data for the execution, for example:
   *
   * `"\{\"first_name\" : \"Alejandro\"\}"`
   *
   * > **Note:** If you don't include any JSON input data, you still must include the two braces, for example: `"\{\}"`
   *
   * Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.
   *
   * @public
   */
  input?: string | undefined;

  /**
   * Passes the X-Ray trace header. The trace header can also be passed in the request payload.
   *
   * > **Note:** For X-Ray traces, all Amazon Web Services services use the `X-Amzn-Trace-Id` header from the HTTP request. Using the header is the preferred mechanism to identify a trace. `StartExecution` and `StartSyncExecution` API operations can also use `traceHeader` from the body of the request payload. If **both** sources are provided, Step Functions will use the **header value** (preferred) over the value in the request body.
   *
   * @public
   */
  traceHeader?: string | undefined;

  /**
   * If your state machine definition is encrypted with a KMS key, callers must have `kms:Decrypt` permission to decrypt the definition. Alternatively, you can call the API with `includedData = METADATA_ONLY` to get a successful response without the encrypted definition.
   *
   * @public
   */
  includedData?: IncludedData | undefined;
}

/**
 * An object that describes workflow billing details.
 *
 * @public
 */
export interface BillingDetails {
  /**
   * Billed memory consumption of your workflow, in MB.
   *
   * @public
   */
  billedMemoryUsedInMB?: number | undefined;

  /**
   * Billed duration of your workflow, in milliseconds.
   *
   * @public
   */
  billedDurationInMilliseconds?: number | undefined;
}

/**
 * @public
 */
export interface StartSyncExecutionOutput {
  /**
   * The Amazon Resource Name (ARN) that identifies the execution.
   *
   * @public
   */
  executionArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that identifies the state machine.
   *
   * @public
   */
  stateMachineArn?: string | undefined;

  /**
   * The name of the execution.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The date the execution is started.
   *
   * @public
   */
  startDate: Date | undefined;

  /**
   * If the execution has already ended, the date the execution stopped.
   *
   * @public
   */
  stopDate: Date | undefined;

  /**
   * The current status of the execution.
   *
   * @public
   */
  status: SyncExecutionStatus | undefined;

  /**
   * The error code of the failure.
   *
   * @public
   */
  error?: string | undefined;

  /**
   * A more detailed explanation of the cause of the failure.
   *
   * @public
   */
  cause?: string | undefined;

  /**
   * The string that contains the JSON input data of the execution. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.
   *
   * @public
   */
  input?: string | undefined;

  /**
   * Provides details about execution input or output.
   *
   * @public
   */
  inputDetails?: CloudWatchEventsExecutionDataDetails | undefined;

  /**
   * The JSON output data of the execution. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.
   *
   * > **Note:** This field is set only if the execution succeeds. If the execution fails, this field is null.
   *
   * @public
   */
  output?: string | undefined;

  /**
   * Provides details about execution input or output.
   *
   * @public
   */
  outputDetails?: CloudWatchEventsExecutionDataDetails | undefined;

  /**
   * The X-Ray trace header that was passed to the execution.
   *
   * > **Note:** For X-Ray traces, all Amazon Web Services services use the `X-Amzn-Trace-Id` header from the HTTP request. Using the header is the preferred mechanism to identify a trace. `StartExecution` and `StartSyncExecution` API operations can also use `traceHeader` from the body of the request payload. If **both** sources are provided, Step Functions will use the **header value** (preferred) over the value in the request body.
   *
   * @public
   */
  traceHeader?: string | undefined;

  /**
   * An object that describes workflow billing details, including billed duration and memory use.
   *
   * @public
   */
  billingDetails?: BillingDetails | undefined;
}

/**
 * @public
 */
export interface StopExecutionInput {
  /**
   * The Amazon Resource Name (ARN) of the execution to stop.
   *
   * @public
   */
  executionArn: string | undefined;

  /**
   * The error code of the failure.
   *
   * @public
   */
  error?: string | undefined;

  /**
   * A more detailed explanation of the cause of the failure.
   *
   * @public
   */
  cause?: string | undefined;
}

/**
 * @public
 */
export interface StopExecutionOutput {
  /**
   * The date the execution is stopped.
   *
   * @public
   */
  stopDate: Date | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * The Amazon Resource Name (ARN) for the Step Functions state machine or activity.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The list of tags to add to a resource.
   *
   * Tags may only contain Unicode letters, digits, white space, or these symbols: `_ . : / = + - @`.
   *
   * @public
   */
  tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceOutput {}

/**
 * A JSON object that contains a mocked error.
 *
 * @public
 */
export interface MockErrorOutput {
  /**
   * A string denoting the error code of the exception thrown when invoking the tested state. This field is required if `mock.errorOutput` is specified.
   *
   * @public
   */
  error?: string | undefined;

  /**
   * A string containing the cause of the exception thrown when executing the state's logic.
   *
   * @public
   */
  cause?: string | undefined;
}

/**
 * A JSON object that contains a mocked `result` or `errorOutput`.
 *
 * @public
 */
export interface MockInput {
  /**
   * A JSON string containing the mocked result of the state invocation.
   *
   * @public
   */
  result?: string | undefined;

  /**
   * The mocked error output when calling TestState. When specified, the mocked response is returned as a JSON object that contains an `error` and `cause` field.
   *
   * @public
   */
  errorOutput?: MockErrorOutput | undefined;

  /**
   * Determines the level of strictness when validating mocked results against their respective API models. Values include:
   *
   * - `STRICT`: All required fields must be present, and all present fields must conform to the API's schema.
   * - `PRESENT`: All present fields must conform to the API's schema.
   * - `NONE`: No validation is performed.
   *
   * If no value is specified, the default value is `STRICT`.
   *
   * @public
   */
  fieldValidationMode?: MockResponseValidationMode | undefined;
}

/**
 * Contains configurations for the tested state.
 *
 * @public
 */
export interface TestStateConfiguration {
  /**
   * The number of retry attempts that have occurred for the state's Retry that applies to the mocked error.
   *
   * @public
   */
  retrierRetryCount?: number | undefined;

  /**
   * The name of the state from which an error originates when an error is mocked for a Map or Parallel state.
   *
   * @public
   */
  errorCausedByState?: string | undefined;

  /**
   * The number of Map state iterations that failed during the Map state invocation.
   *
   * @public
   */
  mapIterationFailureCount?: number | undefined;

  /**
   * The data read by ItemReader in Distributed Map states as found in its original source.
   *
   * @public
   */
  mapItemReaderData?: string | undefined;
}

/**
 * @public
 */
export interface TestStateInput {
  /**
   * The [Amazon States Language](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html) (ASL) definition of the state or state machine.
   *
   * @public
   */
  definition: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the execution role with the required IAM permissions for the state.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * A string that contains the JSON input data for the state.
   *
   * @public
   */
  input?: string | undefined;

  /**
   * Determines the values to return when a state is tested. You can specify one of the following types:
   *
   * - `INFO`: Shows the final state output. By default, Step Functions sets `inspectionLevel` to `INFO` if you don't specify a level.
   * - `DEBUG`: Shows the final state output along with the input and output data processing result.
   * - `TRACE`: Shows the HTTP request and response for an HTTP Task. This level also shows the final state output along with the input and output data processing result.
   *
   * Each of these levels also provide information about the status of the state execution and the next state to transition to.
   *
   * @public
   */
  inspectionLevel?: InspectionLevel | undefined;

  /**
   * Specifies whether or not to include secret information in the test result. For HTTP Tasks, a secret includes the data that an EventBridge connection adds to modify the HTTP request headers, query parameters, and body. Step Functions doesn't omit any information included in the state definition or the HTTP response.
   *
   * If you set `revealSecrets` to `true`, you must make sure that the IAM user that calls the `TestState` API has permission for the `states:RevealSecrets` action. For an example of IAM policy that sets the `states:RevealSecrets` permission, see [IAM permissions to test a state](https://docs.aws.amazon.com/step-functions/latest/dg/test-state-isolation.html#test-state-permissions). Without this permission, Step Functions throws an access denied error.
   *
   * By default, `revealSecrets` is set to `false`.
   *
   * @public
   */
  revealSecrets?: boolean | undefined;

  /**
   * JSON object literal that sets variables used in the state under test. Object keys are the variable names and values are the variable values.
   *
   * @public
   */
  variables?: string | undefined;

  /**
   * Denotes the particular state within a state machine definition to be tested. If this field is specified, the `definition` must contain a fully-formed state machine definition.
   *
   * @public
   */
  stateName?: string | undefined;

  /**
   * Defines a mocked result or error for the state under test.
   *
   * A mock can only be specified for Task, Map, or Parallel states. If it is specified for another state type, an exception will be thrown.
   *
   * @public
   */
  mock?: MockInput | undefined;

  /**
   * A JSON string representing a valid Context object for the state under test. This field may only be specified if a mock is specified in the same request.
   *
   * @public
   */
  context?: string | undefined;

  /**
   * Contains configurations for the state under test.
   *
   * @public
   */
  stateConfiguration?: TestStateConfiguration | undefined;
}

/**
 * An object containing data about a handled exception in the tested state.
 *
 * @public
 */
export interface InspectionErrorDetails {
  /**
   * The array index of the Catch which handled the exception.
   *
   * @public
   */
  catchIndex?: number | undefined;

  /**
   * The array index of the Retry which handled the exception.
   *
   * @public
   */
  retryIndex?: number | undefined;

  /**
   * The duration in seconds of the backoff for a retry on a failed state invocation.
   *
   * @public
   */
  retryBackoffIntervalSeconds?: number | undefined;
}

/**
 * Contains additional details about the state's execution, including its input and output data processing flow, and HTTP request information.
 *
 * @public
 */
export interface InspectionDataRequest {
  /**
   * The protocol used to make the HTTP request.
   *
   * @public
   */
  protocol?: string | undefined;

  /**
   * The HTTP method used for the HTTP request.
   *
   * @public
   */
  method?: string | undefined;

  /**
   * The API endpoint used for the HTTP request.
   *
   * @public
   */
  url?: string | undefined;

  /**
   * The request headers associated with the HTTP request.
   *
   * @public
   */
  headers?: string | undefined;

  /**
   * The request body for the HTTP request.
   *
   * @public
   */
  body?: string | undefined;
}

/**
 * Contains additional details about the state's execution, including its input and output data processing flow, and HTTP response information. The `inspectionLevel` request parameter specifies which details are returned.
 *
 * @public
 */
export interface InspectionDataResponse {
  /**
   * The protocol used to return the HTTP response.
   *
   * @public
   */
  protocol?: string | undefined;

  /**
   * The HTTP response status code for the HTTP response.
   *
   * @public
   */
  statusCode?: string | undefined;

  /**
   * The message associated with the HTTP status code.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * The response headers associated with the HTTP response.
   *
   * @public
   */
  headers?: string | undefined;

  /**
   * The HTTP response returned.
   *
   * @public
   */
  body?: string | undefined;
}

/**
 * Contains additional details about the state's execution, including its input and output data processing flow, and HTTP request and response information.
 *
 * @public
 */
export interface InspectionData {
  /**
   * The raw state input.
   *
   * @public
   */
  input?: string | undefined;

  /**
   * The input after Step Functions applies an Arguments filter. This event will only be present when QueryLanguage for the state machine or individual states is set to JSONata. For more info, see [Transforming data with Step Functions](https://docs.aws.amazon.com/step-functions/latest/dg/data-transform.html).
   *
   * @public
   */
  afterArguments?: string | undefined;

  /**
   * The input after Step Functions applies the [InputPath](https://docs.aws.amazon.com/step-functions/latest/dg/input-output-inputpath-params.html#input-output-inputpath) filter. Not populated when QueryLanguage is JSONata.
   *
   * @public
   */
  afterInputPath?: string | undefined;

  /**
   * The effective input after Step Functions applies the [Parameters](https://docs.aws.amazon.com/step-functions/latest/dg/input-output-inputpath-params.html#input-output-parameters) filter. Not populated when QueryLanguage is JSONata.
   *
   * @public
   */
  afterParameters?: string | undefined;

  /**
   * The state's raw result.
   *
   * @public
   */
  result?: string | undefined;

  /**
   * The effective result after Step Functions applies the [ResultSelector](https://docs.aws.amazon.com/step-functions/latest/dg/input-output-inputpath-params.html#input-output-resultselector) filter. Not populated when QueryLanguage is JSONata.
   *
   * @public
   */
  afterResultSelector?: string | undefined;

  /**
   * The effective result combined with the raw state input after Step Functions applies the [ResultPath](https://docs.aws.amazon.com/step-functions/latest/dg/input-output-resultpath.html) filter. Not populated when QueryLanguage is JSONata.
   *
   * @public
   */
  afterResultPath?: string | undefined;

  /**
   * The raw HTTP request that is sent when you test an HTTP Task.
   *
   * @public
   */
  request?: InspectionDataRequest | undefined;

  /**
   * The raw HTTP response that is returned when you test an HTTP Task.
   *
   * @public
   */
  response?: InspectionDataResponse | undefined;

  /**
   * JSON string that contains the set of workflow variables after execution of the state. The set will include variables assigned in the state and variables set up as test state input.
   *
   * @public
   */
  variables?: string | undefined;

  /**
   * An object containing data about a handled exception in the tested state.
   *
   * @public
   */
  errorDetails?: InspectionErrorDetails | undefined;

  /**
   * The effective input after the ItemsPath filter is applied. Not populated when the QueryLanguage is JSONata.
   *
   * @public
   */
  afterItemsPath?: string | undefined;

  /**
   * An array containing the inputs for each Map iteration, transformed by the ItemSelector specified in a Map state.
   *
   * @public
   */
  afterItemSelector?: string | undefined;

  /**
   * The effective input after the ItemBatcher filter is applied in a Map state.
   *
   * @public
   */
  afterItemBatcher?: string | undefined;

  /**
   * The effective input after the ItemsPointer filter is applied in a Map state.
   *
   * @public
   */
  afterItemsPointer?: string | undefined;

  /**
   * The tolerated failure threshold for a Map state as defined in number of Map state iterations.
   *
   * @public
   */
  toleratedFailureCount?: number | undefined;

  /**
   * The tolerated failure threshold for a Map state as defined in percentage of Map state iterations.
   *
   * @public
   */
  toleratedFailurePercentage?: number | undefined;

  /**
   * The max concurrency of the Map state.
   *
   * @public
   */
  maxConcurrency?: number | undefined;
}

/**
 * @public
 */
export interface TestStateOutput {
  /**
   * The JSON output data of the state. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.
   *
   * @public
   */
  output?: string | undefined;

  /**
   * The error returned when the execution of a state fails.
   *
   * @public
   */
  error?: string | undefined;

  /**
   * A detailed explanation of the cause for the error when the execution of a state fails.
   *
   * @public
   */
  cause?: string | undefined;

  /**
   * Returns additional details about the state's execution, including its input and output data processing flow, and HTTP request and response information. The `inspectionLevel` request parameter specifies which details are returned.
   *
   * @public
   */
  inspectionData?: InspectionData | undefined;

  /**
   * The name of the next state to transition to. If you haven't defined a next state in your definition or if the execution of the state fails, this field doesn't contain a value.
   *
   * @public
   */
  nextState?: string | undefined;

  /**
   * The execution status of the state.
   *
   * @public
   */
  status?: TestExecutionStatus | undefined;
}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * The Amazon Resource Name (ARN) for the Step Functions state machine or activity.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The list of tags to remove from the resource.
   *
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
   * The Amazon Resource Name (ARN) of a Map Run.
   *
   * @public
   */
  mapRunArn: string | undefined;

  /**
   * The maximum number of child workflow executions that can be specified to run in parallel for the Map Run at the same time.
   *
   * @public
   */
  maxConcurrency?: number | undefined;

  /**
   * The maximum percentage of failed items before the Map Run fails.
   *
   * @public
   */
  toleratedFailurePercentage?: number | undefined;

  /**
   * The maximum number of failed items before the Map Run fails.
   *
   * @public
   */
  toleratedFailureCount?: number | undefined;
}

/**
 * @public
 */
export interface UpdateMapRunOutput {}

/**
 * @public
 */
export interface UpdateStateMachineInput {
  /**
   * The Amazon Resource Name (ARN) of the state machine.
   *
   * @public
   */
  stateMachineArn: string | undefined;

  /**
   * The Amazon States Language definition of the state machine. See [Amazon States Language](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html).
   *
   * @public
   */
  definition?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role of the state machine.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * Use the `LoggingConfiguration` data type to set CloudWatch Logs options.
   *
   * @public
   */
  loggingConfiguration?: LoggingConfiguration | undefined;

  /**
   * Selects whether X-Ray tracing is enabled.
   *
   * @public
   */
  tracingConfiguration?: TracingConfiguration | undefined;

  /**
   * Specifies whether the state machine version is published. The default is `false`. To publish a version after updating the state machine, set `publish` to `true`.
   *
   * @public
   */
  publish?: boolean | undefined;

  /**
   * An optional description of the state machine version to publish.
   *
   * You can only specify the `versionDescription` parameter if you've set `publish` to `true`.
   *
   * @public
   */
  versionDescription?: string | undefined;

  /**
   * Settings to configure server-side encryption.
   *
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateStateMachineOutput {
  /**
   * The date and time the state machine was updated.
   *
   * @public
   */
  updateDate: Date | undefined;

  /**
   * The revision identifier for the updated state machine.
   *
   * @public
   */
  revisionId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the published state machine version.
   *
   * If the `publish` parameter isn't set to `true`, this field returns null.
   *
   * @public
   */
  stateMachineVersionArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateStateMachineAliasInput {
  /**
   * The Amazon Resource Name (ARN) of the state machine alias.
   *
   * @public
   */
  stateMachineAliasArn: string | undefined;

  /**
   * A description of the state machine alias.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The routing configuration of the state machine alias.
   *
   * An array of `RoutingConfig` objects that specifies up to two state machine versions that the alias starts executions for.
   *
   * @public
   */
  routingConfiguration?: RoutingConfigurationListItem[] | undefined;
}

/**
 * @public
 */
export interface UpdateStateMachineAliasOutput {
  /**
   * The date and time the state machine alias was updated.
   *
   * @public
   */
  updateDate: Date | undefined;
}

/**
 * @public
 */
export interface ValidateStateMachineDefinitionInput {
  /**
   * The Amazon States Language definition of the state machine. For more information, see [Amazon States Language](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html) (ASL).
   *
   * @public
   */
  definition: string | undefined;

  /**
   * The target type of state machine for this definition. The default is `STANDARD`.
   *
   * @public
   */
  type?: StateMachineType | undefined;

  /**
   * Minimum level of diagnostics to return. `ERROR` returns only `ERROR` diagnostics, whereas `WARNING` returns both `WARNING` and `ERROR` diagnostics. The default is `ERROR`.
   *
   * @public
   */
  severity?: ValidateStateMachineDefinitionSeverity | undefined;

  /**
   * The maximum number of diagnostics that are returned per call. The default and maximum value is 100. Setting the value to 0 will also use the default of 100.
   *
   * If the number of diagnostics returned in the response exceeds `maxResults`, the value of the `truncated` field in the response will be set to `true`.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Describes potential issues found during state machine validation. Rather than raise an exception, validation will return a list of **diagnostic elements** containing diagnostic information.
 *
 * > **Note:** The [ValidateStateMachineDefinitionlAPI](https://docs.aws.amazon.com/step-functions/latest/apireference/API_ValidateStateMachineDefinition.html) might add new diagnostics in the future, adjust diagnostic codes, or change the message wording. Your automated processes should only rely on the value of the **result** field value (OK, FAIL). Do **not** rely on the exact order, count, or wording of diagnostic messages.
 *
 * **List of warning codes**
 *
 * - **NO_DOLLAR**
 *
 *   No `.$` on a field that appears to be a JSONPath or Intrinsic Function.
 *
 * - **NO_PATH**
 *
 *   Field value looks like a path, but field name does not end with 'Path'.
 *
 * - **PASS_RESULT_IS_STATIC**
 *
 *   Attempt to use a path in the result of a pass state.
 *
 * **List of error codes**
 *
 * - **INVALID_JSON_DESCRIPTION**
 *
 *   JSON syntax problem found.
 *
 * - **MISSING_DESCRIPTION**
 *
 *   Received a null or empty workflow input.
 *
 * - **SCHEMA_VALIDATION_FAILED**
 *
 *   Schema validation reported errors.
 *
 * - **INVALID_RESOURCE**
 *
 *   The value of a Task-state resource field is invalid.
 *
 * - **MISSING_END_STATE**
 *
 *   The workflow does not have a terminal state.
 *
 * - **DUPLICATE_STATE_NAME**
 *
 *   The same state name appears more than once.
 *
 * - **INVALID_STATE_NAME**
 *
 *   The state name does not follow the naming convention.
 *
 * - **STATE_MACHINE_NAME_EMPTY**
 *
 *   The state machine name has not been specified.
 *
 * - **STATE_MACHINE_NAME_INVALID**
 *
 *   The state machine name does not follow the naming convention.
 *
 * - **STATE_MACHINE_NAME_TOO_LONG**
 *
 *   The state name exceeds the allowed length.
 *
 * - **STATE_MACHINE_NAME_ALREADY_EXISTS**
 *
 *   The state name already exists.
 *
 * - **DUPLICATE_LABEL_NAME**
 *
 *   A label name appears more than once.
 *
 * - **INVALID_LABEL_NAME**
 *
 *   You have provided an invalid label name.
 *
 * - **MISSING_TRANSITION_TARGET**
 *
 *   The value of "Next" field doesn't match a known state name.
 *
 * - **TOO_DEEPLY_NESTED**
 *
 *   The states are too deeply nested.
 *
 * @public
 */
export interface ValidateStateMachineDefinitionDiagnostic {
  /**
   * A value of `ERROR` means that you cannot create or update a state machine with this definition.
   *
   * `WARNING` level diagnostics alert you to potential issues, but they will not prevent you from creating or updating your state machine.
   *
   * @public
   */
  severity: ValidateStateMachineDefinitionSeverity | undefined;

  /**
   * Identifying code for the diagnostic.
   *
   * @public
   */
  code: string | undefined;

  /**
   * Message describing the diagnostic condition.
   *
   * @public
   */
  message: string | undefined;

  /**
   * Location of the issue in the state machine, if available.
   *
   * For errors specific to a field, the location could be in the format: `/States/<StateName>/<FieldName>`, for example: `/States/FailState/ErrorPath`.
   *
   * @public
   */
  location?: string | undefined;
}

/**
 * @public
 */
export interface ValidateStateMachineDefinitionOutput {
  /**
   * The result value will be `OK` when no syntax errors are found, or `FAIL` if the workflow definition does not pass verification.
   *
   * @public
   */
  result: ValidateStateMachineDefinitionResultCode | undefined;

  /**
   * An array of diagnostic errors and warnings found during validation of the state machine definition. Since **warnings** do not prevent deploying your workflow definition, the **result** value could be `OK` even when warning diagnostics are present in the response.
   *
   * @public
   */
  diagnostics: ValidateStateMachineDefinitionDiagnostic[] | undefined;

  /**
   * The result value will be `true` if the number of diagnostics found in the workflow definition exceeds `maxResults`. When all diagnostics results are returned, the value will be `false`.
   *
   * @public
   */
  truncated?: boolean | undefined;
}
