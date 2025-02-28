// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  AlarmConfiguration,
  AssociationComplianceSeverity,
  AssociationDescription,
  AssociationDescriptionFilterSensitiveLog,
  AssociationStatus,
  AssociationSyncCompliance,
  AttachmentsSource,
  DocumentDescription,
  DocumentFormat,
  DocumentHashType,
  ExecutionMode,
  InstanceAssociationOutputLocation,
  MetadataValue,
  OperatingSystem,
  OpsItemDataValue,
  OpsItemNotification,
  PatchAction,
  PatchComplianceLevel,
  PatchFilterGroup,
  PatchRuleGroup,
  PatchSource,
  PatchSourceFilterSensitiveLog,
  RelatedOpsItem,
  ResourceDataSyncSource,
  Runbook,
  Tag,
  Target,
  TargetLocation,
} from "./models_0";

import {
  CloudWatchOutputConfig,
  Command,
  CommandFilterSensitiveLog,
  DocumentReviewCommentSource,
  InventoryFilter,
  InventoryGroup,
  LoggingInfo,
  MaintenanceWindowTaskCutoffBehavior,
  MaintenanceWindowTaskInvocationParameters,
  MaintenanceWindowTaskInvocationParametersFilterSensitiveLog,
  MaintenanceWindowTaskParameterValueExpression,
  NodeAggregatorType,
  NodeAttributeName,
  NodeFilter,
  NodeTypeName,
  NotificationConfig,
  OpsFilter,
  OpsItemStatus,
  OpsResultAttribute,
  ResultAttribute,
  ServiceSetting,
} from "./models_1";

import { SSMServiceException as __BaseException } from "./SSMServiceException";

/**
 * <p>The result body of the ResetServiceSetting API operation.</p>
 * @public
 */
export interface ResetServiceSettingResult {
  /**
   * <p>The current, effective service setting after calling the ResetServiceSetting API
   *    operation.</p>
   * @public
   */
  ServiceSetting?: ServiceSetting | undefined;
}

/**
 * @public
 */
export interface ResumeSessionRequest {
  /**
   * <p>The ID of the disconnected session to resume.</p>
   * @public
   */
  SessionId: string | undefined;
}

/**
 * @public
 */
export interface ResumeSessionResponse {
  /**
   * <p>The ID of the session.</p>
   * @public
   */
  SessionId?: string | undefined;

  /**
   * <p>An encrypted token value containing session and caller information. Used to authenticate the
   *    connection to the managed node.</p>
   * @public
   */
  TokenValue?: string | undefined;

  /**
   * <p>A URL back to SSM Agent on the managed node that the Session Manager client uses to send commands and
   *    receive output from the managed node. Format: <code>wss://ssmmessages.<b>region</b>.amazonaws.com/v1/data-channel/<b>session-id</b>?stream=(input|output)</code>.</p>
   *          <p>
   *             <b>region</b> represents the Region identifier for an
   * 						Amazon Web Services Region supported by Amazon Web Services Systems Manager, such as <code>us-east-2</code> for the US East (Ohio) Region.
   * 						For a list of supported <b>region</b> values, see the <b>Region</b> column in <a href="https://docs.aws.amazon.com/general/latest/gr/ssm.html#ssm_region">Systems Manager service endpoints</a> in the
   *         <i>Amazon Web Services General Reference</i>.</p>
   *          <p>
   *             <b>session-id</b> represents the ID of a Session Manager session, such as
   *     <code>1a2b3c4dEXAMPLE</code>.</p>
   * @public
   */
  StreamUrl?: string | undefined;
}

/**
 * <p>The specified step name and execution ID don't exist. Verify the information and try
 *    again.</p>
 * @public
 */
export class AutomationStepNotFoundException extends __BaseException {
  readonly name: "AutomationStepNotFoundException" = "AutomationStepNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AutomationStepNotFoundException, __BaseException>) {
    super({
      name: "AutomationStepNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AutomationStepNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The signal isn't valid for the current Automation execution.</p>
 * @public
 */
export class InvalidAutomationSignalException extends __BaseException {
  readonly name: "InvalidAutomationSignalException" = "InvalidAutomationSignalException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidAutomationSignalException, __BaseException>) {
    super({
      name: "InvalidAutomationSignalException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidAutomationSignalException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const SignalType = {
  APPROVE: "Approve",
  REJECT: "Reject",
  RESUME: "Resume",
  START_STEP: "StartStep",
  STOP_STEP: "StopStep",
} as const;

/**
 * @public
 */
export type SignalType = (typeof SignalType)[keyof typeof SignalType];

/**
 * @public
 */
export interface SendAutomationSignalRequest {
  /**
   * <p>The unique identifier for an existing Automation execution that you want to send the signal
   *    to.</p>
   * @public
   */
  AutomationExecutionId: string | undefined;

  /**
   * <p>The type of signal to send to an Automation execution. </p>
   * @public
   */
  SignalType: SignalType | undefined;

  /**
   * <p>The data sent with the signal. The data schema depends on the type of signal used in the
   *    request.</p>
   *          <p>For <code>Approve</code> and <code>Reject</code> signal types, the payload is an optional
   *    comment that you can send with the signal type. For example:</p>
   *          <p>
   *             <code>Comment="Looks good"</code>
   *          </p>
   *          <p>For <code>StartStep</code> and <code>Resume</code> signal types, you must send the name of
   *    the Automation step to start or resume as the payload. For example:</p>
   *          <p>
   *             <code>StepName="step1"</code>
   *          </p>
   *          <p>For the <code>StopStep</code> signal type, you must send the step execution ID as the
   *    payload. For example:</p>
   *          <p>
   *             <code>StepExecutionId="97fff367-fc5a-4299-aed8-0123456789ab"</code>
   *          </p>
   * @public
   */
  Payload?: Record<string, string[]> | undefined;
}

/**
 * @public
 */
export interface SendAutomationSignalResult {}

/**
 * <p>One or more configuration items isn't valid. Verify that a valid Amazon Resource Name (ARN)
 *    was provided for an Amazon Simple Notification Service topic.</p>
 * @public
 */
export class InvalidNotificationConfig extends __BaseException {
  readonly name: "InvalidNotificationConfig" = "InvalidNotificationConfig";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNotificationConfig, __BaseException>) {
    super({
      name: "InvalidNotificationConfig",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNotificationConfig.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The S3 bucket doesn't exist.</p>
 * @public
 */
export class InvalidOutputFolder extends __BaseException {
  readonly name: "InvalidOutputFolder" = "InvalidOutputFolder";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidOutputFolder, __BaseException>) {
    super({
      name: "InvalidOutputFolder",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidOutputFolder.prototype);
  }
}

/**
 * <p>The role name can't contain invalid characters. Also verify that you specified an IAM role for notifications that includes the required trust policy. For information about
 *    configuring the IAM role for Run Command notifications, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/monitoring-sns-notifications.html">Monitoring Systems Manager status changes using Amazon SNS notifications</a> in
 *    the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
 * @public
 */
export class InvalidRole extends __BaseException {
  readonly name: "InvalidRole" = "InvalidRole";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRole, __BaseException>) {
    super({
      name: "InvalidRole",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRole.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface SendCommandRequest {
  /**
   * <p>The IDs of the managed nodes where the command should run. Specifying managed node IDs is
   *    most useful when you are targeting a limited number of managed nodes, though you can specify up
   *    to 50 IDs.</p>
   *          <p>To target a larger number of managed nodes, or if you prefer not to list individual node
   *    IDs, we recommend using the <code>Targets</code> option instead. Using <code>Targets</code>,
   *    which accepts tag key-value pairs to identify the managed nodes to send commands to, you can a
   *    send command to tens, hundreds, or thousands of nodes at once.</p>
   *          <p>For more information about how to use targets, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/send-commands-multiple.html">Run commands at scale</a>
   *    in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   * @public
   */
  InstanceIds?: string[] | undefined;

  /**
   * <p>An array of search criteria that targets managed nodes using a <code>Key,Value</code>
   *    combination that you specify. Specifying targets is most useful when you want to send a command
   *    to a large number of managed nodes at once. Using <code>Targets</code>, which accepts tag
   *    key-value pairs to identify managed nodes, you can send a command to tens, hundreds, or thousands
   *    of nodes at once.</p>
   *          <p>To send a command to a smaller number of managed nodes, you can use the
   *     <code>InstanceIds</code> option instead.</p>
   *          <p>For more information about how to use targets, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/send-commands-multiple.html">Run commands at scale</a>
   *    in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * <p>The name of the Amazon Web Services Systems Manager document (SSM document) to run. This can be a public document or a
   *    custom document. To run a shared document belonging to another account, specify the document
   *    Amazon Resource Name (ARN). For more information about how to use shared documents, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/ssm-using-shared.html">Sharing SSM
   *     documents</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   *          <note>
   *             <p>If you specify a document name or ARN that hasn't been shared with your account, you
   *     receive an <code>InvalidDocument</code> error. </p>
   *          </note>
   * @public
   */
  DocumentName: string | undefined;

  /**
   * <p>The SSM document version to use in the request. You can specify $DEFAULT, $LATEST, or a
   *    specific version number. If you run commands by using the Command Line Interface (Amazon Web Services CLI), then
   *    you must escape the first two options by using a backslash. If you specify a version number, then
   *    you don't need to use the backslash. For example:</p>
   *          <p>--document-version "\$DEFAULT"</p>
   *          <p>--document-version "\$LATEST"</p>
   *          <p>--document-version "3"</p>
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * <p>The Sha256 or Sha1 hash created by the system when the document was created. </p>
   *          <note>
   *             <p>Sha1 hashes have been deprecated.</p>
   *          </note>
   * @public
   */
  DocumentHash?: string | undefined;

  /**
   * <p>Sha256 or Sha1.</p>
   *          <note>
   *             <p>Sha1 hashes have been deprecated.</p>
   *          </note>
   * @public
   */
  DocumentHashType?: DocumentHashType | undefined;

  /**
   * <p>If this time is reached and the command hasn't already started running, it won't run.</p>
   * @public
   */
  TimeoutSeconds?: number | undefined;

  /**
   * <p>User-specified information about the command, such as a brief description of what the
   *    command should do.</p>
   * @public
   */
  Comment?: string | undefined;

  /**
   * <p>The required and optional parameters specified in the document being run.</p>
   * @public
   */
  Parameters?: Record<string, string[]> | undefined;

  /**
   * <p>(Deprecated) You can no longer specify this parameter. The system ignores it. Instead, Systems Manager
   *    automatically determines the Amazon Web Services Region of the S3 bucket.</p>
   * @public
   */
  OutputS3Region?: string | undefined;

  /**
   * <p>The name of the S3 bucket where command execution responses should be stored.</p>
   * @public
   */
  OutputS3BucketName?: string | undefined;

  /**
   * <p>The directory structure within the S3 bucket where the responses should be stored.</p>
   * @public
   */
  OutputS3KeyPrefix?: string | undefined;

  /**
   * <p>(Optional) The maximum number of managed nodes that are allowed to run the command at the
   *    same time. You can specify a number such as 10 or a percentage such as 10%. The default value is
   *     <code>50</code>. For more information about how to use <code>MaxConcurrency</code>, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/send-commands-multiple.html#send-commands-velocity">Using
   *     concurrency controls</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   * @public
   */
  MaxConcurrency?: string | undefined;

  /**
   * <p>The maximum number of errors allowed without the command failing. When the command fails one
   *    more time beyond the value of <code>MaxErrors</code>, the systems stops sending the command to
   *    additional targets. You can specify a number like 10 or a percentage like 10%. The default value
   *    is <code>0</code>. For more information about how to use <code>MaxErrors</code>, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/send-commands-multiple.html#send-commands-maxerrors">Using
   *     error controls</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   * @public
   */
  MaxErrors?: string | undefined;

  /**
   * <p>The ARN of the Identity and Access Management (IAM) service role to use to publish
   *     Amazon Simple Notification Service (Amazon SNS) notifications for Run Command commands.</p>
   *          <p>This role must provide the <code>sns:Publish</code> permission for your notification topic.
   *    For information about creating and using this service role, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/monitoring-sns-notifications.html">Monitoring Systems Manager status changes using Amazon SNS notifications</a> in the
   *     <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   * @public
   */
  ServiceRoleArn?: string | undefined;

  /**
   * <p>Configurations for sending notifications.</p>
   * @public
   */
  NotificationConfig?: NotificationConfig | undefined;

  /**
   * <p>Enables Amazon Web Services Systems Manager to send Run Command output to Amazon CloudWatch Logs. Run Command is a
   *    tool in Amazon Web Services Systems Manager.</p>
   * @public
   */
  CloudWatchOutputConfig?: CloudWatchOutputConfig | undefined;

  /**
   * <p>The CloudWatch alarm you want to apply to your command.</p>
   * @public
   */
  AlarmConfiguration?: AlarmConfiguration | undefined;
}

/**
 * @public
 */
export interface SendCommandResult {
  /**
   * <p>The request as it was received by Systems Manager. Also provides the command ID which can be used
   *    future references to this request.</p>
   * @public
   */
  Command?: Command | undefined;
}

/**
 * <p>The association isn't valid or doesn't exist. </p>
 * @public
 */
export class InvalidAssociation extends __BaseException {
  readonly name: "InvalidAssociation" = "InvalidAssociation";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidAssociation, __BaseException>) {
    super({
      name: "InvalidAssociation",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidAssociation.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface StartAssociationsOnceRequest {
  /**
   * <p>The association IDs that you want to run immediately and only one time.</p>
   * @public
   */
  AssociationIds: string[] | undefined;
}

/**
 * @public
 */
export interface StartAssociationsOnceResult {}

/**
 * <p>An Automation runbook with the specified name couldn't be found.</p>
 * @public
 */
export class AutomationDefinitionNotFoundException extends __BaseException {
  readonly name: "AutomationDefinitionNotFoundException" = "AutomationDefinitionNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AutomationDefinitionNotFoundException, __BaseException>) {
    super({
      name: "AutomationDefinitionNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AutomationDefinitionNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>An Automation runbook with the specified name and version couldn't be found.</p>
 * @public
 */
export class AutomationDefinitionVersionNotFoundException extends __BaseException {
  readonly name: "AutomationDefinitionVersionNotFoundException" = "AutomationDefinitionVersionNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AutomationDefinitionVersionNotFoundException, __BaseException>) {
    super({
      name: "AutomationDefinitionVersionNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AutomationDefinitionVersionNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The number of simultaneously running Automation executions exceeded the allowable
 *    limit.</p>
 * @public
 */
export class AutomationExecutionLimitExceededException extends __BaseException {
  readonly name: "AutomationExecutionLimitExceededException" = "AutomationExecutionLimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AutomationExecutionLimitExceededException, __BaseException>) {
    super({
      name: "AutomationExecutionLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AutomationExecutionLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The supplied parameters for invoking the specified Automation runbook are incorrect. For
 *    example, they may not match the set of parameters permitted for the specified Automation
 *    document.</p>
 * @public
 */
export class InvalidAutomationExecutionParametersException extends __BaseException {
  readonly name: "InvalidAutomationExecutionParametersException" = "InvalidAutomationExecutionParametersException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidAutomationExecutionParametersException, __BaseException>) {
    super({
      name: "InvalidAutomationExecutionParametersException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidAutomationExecutionParametersException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface StartAutomationExecutionRequest {
  /**
   * <p>The name of the SSM document to run. This can be a public document or a custom document. To
   *    run a shared document belonging to another account, specify the document ARN. For more
   *    information about how to use shared documents, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/documents-ssm-sharing.html">Sharing SSM documents</a>
   *    in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   * @public
   */
  DocumentName: string | undefined;

  /**
   * <p>The version of the Automation runbook to use for this execution.</p>
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * <p>A key-value map of execution parameters, which match the declared parameters in the
   *    Automation runbook.</p>
   * @public
   */
  Parameters?: Record<string, string[]> | undefined;

  /**
   * <p>User-provided idempotency token. The token must be unique, is case insensitive, enforces the
   *    UUID format, and can't be reused.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The execution mode of the automation. Valid modes include the following: Auto and
   *    Interactive. The default mode is Auto.</p>
   * @public
   */
  Mode?: ExecutionMode | undefined;

  /**
   * <p>The name of the parameter used as the target resource for the rate-controlled execution.
   *    Required if you specify targets.</p>
   * @public
   */
  TargetParameterName?: string | undefined;

  /**
   * <p>A key-value mapping to target resources. Required if you specify TargetParameterName.</p>
   *          <p>If both this parameter and the <code>TargetLocation:Targets</code> parameter are supplied,
   *     <code>TargetLocation:Targets</code> takes precedence.</p>
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * <p>A key-value mapping of document parameters to target resources. Both Targets and TargetMaps
   *    can't be specified together.</p>
   * @public
   */
  TargetMaps?: Record<string, string[]>[] | undefined;

  /**
   * <p>The maximum number of targets allowed to run this task in parallel. You can specify a
   *    number, such as 10, or a percentage, such as 10%. The default value is <code>10</code>.</p>
   *          <p>If both this parameter and the <code>TargetLocation:TargetsMaxConcurrency</code> are
   *    supplied, <code>TargetLocation:TargetsMaxConcurrency</code> takes precedence.</p>
   * @public
   */
  MaxConcurrency?: string | undefined;

  /**
   * <p>The number of errors that are allowed before the system stops running the automation on
   *    additional targets. You can specify either an absolute number of errors, for example 10, or a
   *    percentage of the target set, for example 10%. If you specify 3, for example, the system stops
   *    running the automation when the fourth error is received. If you specify 0, then the system stops
   *    running the automation on additional targets after the first error result is returned. If you run
   *    an automation on 50 resources and set max-errors to 10%, then the system stops running the
   *    automation on additional targets when the sixth error is received.</p>
   *          <p>Executions that are already running an automation when max-errors is reached are allowed to
   *    complete, but some of these executions may fail as well. If you need to ensure that there won't
   *    be more than max-errors failed executions, set max-concurrency to 1 so the executions proceed one
   *    at a time.</p>
   *          <p>If this parameter and the <code>TargetLocation:TargetsMaxErrors</code> parameter are both
   *    supplied, <code>TargetLocation:TargetsMaxErrors</code> takes precedence.</p>
   * @public
   */
  MaxErrors?: string | undefined;

  /**
   * <p>A location is a combination of Amazon Web Services Regions and/or Amazon Web Services accounts where you want to run the
   *    automation. Use this operation to start an automation in multiple Amazon Web Services Regions and multiple
   *    Amazon Web Services accounts. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-automation-multiple-accounts-and-regions.html">Running automations in multiple Amazon Web Services Regions and accounts</a> in the
   *     <i>Amazon Web Services Systems Manager User Guide</i>. </p>
   * @public
   */
  TargetLocations?: TargetLocation[] | undefined;

  /**
   * <p>Optional metadata that you assign to a resource. You can specify a maximum of five tags for
   *    an automation. Tags enable you to categorize a resource in different ways, such as by purpose,
   *    owner, or environment. For example, you might want to tag an automation to identify an
   *    environment or operating system. In this case, you could specify the following key-value
   *    pairs:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Key=environment,Value=test</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Key=OS,Value=Windows</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>The <code>Array Members</code> maximum value is reported as 1000. This number includes
   *     capacity reserved for internal operations. When calling the
   *      <code>StartAutomationExecution</code> action, you can specify a maximum of 5 tags. You can,
   *     however, use the <a>AddTagsToResource</a> action to add up to a total of 50 tags to
   *     an existing automation configuration.</p>
   *          </note>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The CloudWatch alarm you want to apply to your automation.</p>
   * @public
   */
  AlarmConfiguration?: AlarmConfiguration | undefined;

  /**
   * <p>Specify a publicly accessible URL for a file that contains the <code>TargetLocations</code>
   *    body. Currently, only files in presigned Amazon S3 buckets are supported. </p>
   * @public
   */
  TargetLocationsURL?: string | undefined;
}

/**
 * @public
 */
export interface StartAutomationExecutionResult {
  /**
   * <p>The unique ID of a newly scheduled automation execution.</p>
   * @public
   */
  AutomationExecutionId?: string | undefined;
}

/**
 * <p>Indicates that the Change Manager change template used in the change request was rejected or is
 *    still in a pending state.</p>
 * @public
 */
export class AutomationDefinitionNotApprovedException extends __BaseException {
  readonly name: "AutomationDefinitionNotApprovedException" = "AutomationDefinitionNotApprovedException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AutomationDefinitionNotApprovedException, __BaseException>) {
    super({
      name: "AutomationDefinitionNotApprovedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AutomationDefinitionNotApprovedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface StartChangeRequestExecutionRequest {
  /**
   * <p>The date and time specified in the change request to run the Automation runbooks.</p>
   *          <note>
   *             <p>The Automation runbooks specified for the runbook workflow can't run until all required
   *     approvals for the change request have been received.</p>
   *          </note>
   * @public
   */
  ScheduledTime?: Date | undefined;

  /**
   * <p>The name of the change template document to run during the runbook workflow.</p>
   * @public
   */
  DocumentName: string | undefined;

  /**
   * <p>The version of the change template document to run during the runbook workflow.</p>
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * <p>A key-value map of parameters that match the declared parameters in the change template
   *    document.</p>
   * @public
   */
  Parameters?: Record<string, string[]> | undefined;

  /**
   * <p>The name of the change request associated with the runbook workflow to be run.</p>
   * @public
   */
  ChangeRequestName?: string | undefined;

  /**
   * <p>The user-provided idempotency token. The token must be unique, is case insensitive, enforces
   *    the UUID format, and can't be reused.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Indicates whether the change request can be approved automatically without the need for
   *    manual approvals.</p>
   *          <p>If <code>AutoApprovable</code> is enabled in a change template, then setting
   *     <code>AutoApprove</code> to <code>true</code> in <code>StartChangeRequestExecution</code>
   *    creates a change request that bypasses approver review.</p>
   *          <note>
   *             <p>Change Calendar restrictions are not bypassed in this scenario. If the state of an
   *     associated calendar is <code>CLOSED</code>, change freeze approvers must still grant permission
   *     for this change request to run. If they don't, the change won't be processed until the calendar
   *     state is again <code>OPEN</code>. </p>
   *          </note>
   * @public
   */
  AutoApprove?: boolean | undefined;

  /**
   * <p>Information about the Automation runbooks that are run during the runbook workflow.</p>
   *          <note>
   *             <p>The Automation runbooks specified for the runbook workflow can't run until all required
   *     approvals for the change request have been received.</p>
   *          </note>
   * @public
   */
  Runbooks: Runbook[] | undefined;

  /**
   * <p>Optional metadata that you assign to a resource. You can specify a maximum of five tags for
   *    a change request. Tags enable you to categorize a resource in different ways, such as by
   *    purpose, owner, or environment. For example, you might want to tag a change request to identify
   *    an environment or target Amazon Web Services Region. In this case, you could specify the following key-value
   *    pairs:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Key=Environment,Value=Production</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Key=Region,Value=us-east-2</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>The <code>Array Members</code> maximum value is reported as 1000. This number includes
   *     capacity reserved for internal operations. When calling the
   *      <code>StartChangeRequestExecution</code> action, you can specify a maximum of 5 tags. You can,
   *     however, use the <a>AddTagsToResource</a> action to add up to a total of 50 tags to
   *     an existing change request configuration.</p>
   *          </note>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The time that the requester expects the runbook workflow related to the change request to
   *    complete. The time is an estimate only that the requester provides for reviewers.</p>
   * @public
   */
  ScheduledEndTime?: Date | undefined;

  /**
   * <p>User-provided details about the change. If no details are provided, content specified in the
   *     <b>Template information</b> section of the associated change template
   *    is added.</p>
   * @public
   */
  ChangeDetails?: string | undefined;
}

/**
 * @public
 */
export interface StartChangeRequestExecutionResult {
  /**
   * <p>The unique ID of a runbook workflow operation. (A runbook workflow is a type of Automation
   *    operation.) </p>
   * @public
   */
  AutomationExecutionId?: string | undefined;
}

/**
 * <p>Information about the optional inputs that can be specified for an automation execution
 *    preview.</p>
 * @public
 */
export interface AutomationExecutionInputs {
  /**
   * <p>Information about parameters that can be specified for the preview operation.
   *    </p>
   * @public
   */
  Parameters?: Record<string, string[]> | undefined;

  /**
   * <p>The name of the parameter used as the target resource for the rate-controlled execution.
   *    Required if you specify targets.</p>
   * @public
   */
  TargetParameterName?: string | undefined;

  /**
   * <p>Information about the resources that would be included in the actual runbook execution, if
   *    it were to be run. Both Targets and TargetMaps can't be specified together.</p>
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * <p>A key-value mapping of document parameters to target resources. Both Targets and TargetMaps
   *    can't be specified together.</p>
   * @public
   */
  TargetMaps?: Record<string, string[]>[] | undefined;

  /**
   * <p>Information about the Amazon Web Services Regions and Amazon Web Services accounts targeted by the Automation execution
   *    preview operation.</p>
   * @public
   */
  TargetLocations?: TargetLocation[] | undefined;

  /**
   * <p>A publicly accessible URL for a file that contains the <code>TargetLocations</code> body.
   *    Currently, only files in presigned Amazon S3 buckets are supported.</p>
   * @public
   */
  TargetLocationsURL?: string | undefined;
}

/**
 * <p>Information about the inputs for an execution preview.</p>
 * @public
 */
export type ExecutionInputs = ExecutionInputs.AutomationMember | ExecutionInputs.$UnknownMember;

/**
 * @public
 */
export namespace ExecutionInputs {
  /**
   * <p>Information about the optional inputs that can be specified for an automation execution
   *    preview.</p>
   * @public
   */
  export interface AutomationMember {
    Automation: AutomationExecutionInputs;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Automation?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    Automation: (value: AutomationExecutionInputs) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ExecutionInputs, visitor: Visitor<T>): T => {
    if (value.Automation !== undefined) return visitor.Automation(value.Automation);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface StartExecutionPreviewRequest {
  /**
   * <p>The name of the Automation runbook to run. The result of the execution preview indicates
   *    what the impact would be of running this runbook.</p>
   * @public
   */
  DocumentName: string | undefined;

  /**
   * <p>The version of the Automation runbook to run. The default value is
   *    <code>$DEFAULT</code>.</p>
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * <p>Information about the inputs that can be specified for the preview operation.
   *    </p>
   * @public
   */
  ExecutionInputs?: ExecutionInputs | undefined;
}

/**
 * @public
 */
export interface StartExecutionPreviewResponse {
  /**
   * <p>The ID of the execution preview generated by the system.</p>
   * @public
   */
  ExecutionPreviewId?: string | undefined;
}

/**
 * <p>The request isn't valid. Verify that you entered valid contents for the command and try
 *    again.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * <p>The reason code for the invalid request.</p>
   * @public
   */
  ReasonCode?: string | undefined;
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
    this.Message = opts.Message;
    this.ReasonCode = opts.ReasonCode;
  }
}

/**
 * @public
 */
export interface StartSessionRequest {
  /**
   * <p>The managed node to connect to for the session.</p>
   * @public
   */
  Target: string | undefined;

  /**
   * <p>The name of the SSM document you want to use to define the type of session, input
   *    parameters, or preferences for the session. For example, <code>SSM-SessionManagerRunShell</code>.
   *    You can call the <a>GetDocument</a> API to verify the document exists before
   *    attempting to start a session. If no document name is provided, a shell to the managed node is
   *    launched by default. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-sessions-start.html">Start a
   *     session</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   * @public
   */
  DocumentName?: string | undefined;

  /**
   * <p>The reason for connecting to the instance. This value is included in the details for the
   *     Amazon CloudWatch Events event created when you start the session.</p>
   * @public
   */
  Reason?: string | undefined;

  /**
   * <p>The values you want to specify for the parameters defined in the Session document.
   *    For more information about these parameters, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/getting-started-create-preferences-cli.html">Create a
   *     Session Manager preferences document</a> in the
   *    <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   * @public
   */
  Parameters?: Record<string, string[]> | undefined;
}

/**
 * @public
 */
export interface StartSessionResponse {
  /**
   * <p>The ID of the session.</p>
   * @public
   */
  SessionId?: string | undefined;

  /**
   * <p>An encrypted token value containing session and caller information. This token is used to
   *    authenticate the connection to the managed node, and is valid only long enough to ensure the
   *    connection is successful. Never share your session's token.</p>
   * @public
   */
  TokenValue?: string | undefined;

  /**
   * <p>A URL back to SSM Agent on the managed node that the Session Manager client uses to send commands and
   *    receive output from the node. Format: <code>wss://ssmmessages.<b>region</b>.amazonaws.com/v1/data-channel/<b>session-id</b>?stream=(input|output)</code>
   *          </p>
   *          <p>
   *             <b>region</b> represents the Region identifier for an
   * 						Amazon Web Services Region supported by Amazon Web Services Systems Manager, such as <code>us-east-2</code> for the US East (Ohio) Region.
   * 						For a list of supported <b>region</b> values, see the <b>Region</b> column in <a href="https://docs.aws.amazon.com/general/latest/gr/ssm.html#ssm_region">Systems Manager service endpoints</a> in the
   *         <i>Amazon Web Services General Reference</i>.</p>
   *          <p>
   *             <b>session-id</b> represents the ID of a Session Manager session, such as
   *     <code>1a2b3c4dEXAMPLE</code>.</p>
   * @public
   */
  StreamUrl?: string | undefined;
}

/**
 * <p>The specified target managed node for the session isn't fully configured for use with Session Manager.
 *    For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-getting-started.html">Setting up
 *     Session Manager</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. This error is also returned if you
 *    attempt to start a session on a managed node that is located in a different account or
 *    Region</p>
 * @public
 */
export class TargetNotConnected extends __BaseException {
  readonly name: "TargetNotConnected" = "TargetNotConnected";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TargetNotConnected, __BaseException>) {
    super({
      name: "TargetNotConnected",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TargetNotConnected.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified update status operation isn't valid.</p>
 * @public
 */
export class InvalidAutomationStatusUpdateException extends __BaseException {
  readonly name: "InvalidAutomationStatusUpdateException" = "InvalidAutomationStatusUpdateException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidAutomationStatusUpdateException, __BaseException>) {
    super({
      name: "InvalidAutomationStatusUpdateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidAutomationStatusUpdateException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const StopType = {
  CANCEL: "Cancel",
  COMPLETE: "Complete",
} as const;

/**
 * @public
 */
export type StopType = (typeof StopType)[keyof typeof StopType];

/**
 * @public
 */
export interface StopAutomationExecutionRequest {
  /**
   * <p>The execution ID of the Automation to stop.</p>
   * @public
   */
  AutomationExecutionId: string | undefined;

  /**
   * <p>The stop request type. Valid types include the following: Cancel and Complete. The default
   *    type is Cancel.</p>
   * @public
   */
  Type?: StopType | undefined;
}

/**
 * @public
 */
export interface StopAutomationExecutionResult {}

/**
 * @public
 */
export interface TerminateSessionRequest {
  /**
   * <p>The ID of the session to terminate.</p>
   * @public
   */
  SessionId: string | undefined;
}

/**
 * @public
 */
export interface TerminateSessionResponse {
  /**
   * <p>The ID of the session that has been terminated.</p>
   * @public
   */
  SessionId?: string | undefined;
}

/**
 * @public
 */
export interface UnlabelParameterVersionRequest {
  /**
   * <p>The name of the parameter from which you want to delete one or more labels.</p>
   *          <note>
   *             <p>You can't enter the Amazon Resource Name (ARN) for a parameter, only the parameter name
   *     itself.</p>
   *          </note>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The specific version of the parameter which you want to delete one or more labels from. If
   *    it isn't present, the call will fail.</p>
   * @public
   */
  ParameterVersion: number | undefined;

  /**
   * <p>One or more labels to delete from the specified parameter version.</p>
   * @public
   */
  Labels: string[] | undefined;
}

/**
 * @public
 */
export interface UnlabelParameterVersionResult {
  /**
   * <p>A list of all labels deleted from the parameter.</p>
   * @public
   */
  RemovedLabels?: string[] | undefined;

  /**
   * <p>The labels that aren't attached to the given parameter version.</p>
   * @public
   */
  InvalidLabels?: string[] | undefined;
}

/**
 * <p>You have reached the maximum number versions allowed for an association. Each association
 *    has a limit of 1,000 versions. </p>
 * @public
 */
export class AssociationVersionLimitExceeded extends __BaseException {
  readonly name: "AssociationVersionLimitExceeded" = "AssociationVersionLimitExceeded";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AssociationVersionLimitExceeded, __BaseException>) {
    super({
      name: "AssociationVersionLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AssociationVersionLimitExceeded.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The update isn't valid.</p>
 * @public
 */
export class InvalidUpdate extends __BaseException {
  readonly name: "InvalidUpdate" = "InvalidUpdate";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidUpdate, __BaseException>) {
    super({
      name: "InvalidUpdate",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidUpdate.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface UpdateAssociationRequest {
  /**
   * <p>The ID of the association you want to update. </p>
   * @public
   */
  AssociationId: string | undefined;

  /**
   * <p>The parameters you want to update for the association. If you create a parameter using
   *    Parameter Store, a tool in Amazon Web Services Systems Manager, you can reference the parameter using
   *     <code>\{\{ssm:parameter-name\}\}</code>.</p>
   * @public
   */
  Parameters?: Record<string, string[]> | undefined;

  /**
   * <p>The document version you want update for the association. </p>
   *          <important>
   *             <p>State Manager doesn't support running associations that use a new version of a document if
   *     that document is shared from another account. State Manager always runs the <code>default</code>
   *     version of a document if shared from another account, even though the Systems Manager console shows that a
   *     new version was processed. If you want to run an association using a new version of a document
   *     shared form another account, you must set the document version to <code>default</code>.</p>
   *          </important>
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * <p>The cron expression used to schedule the association that you want to update.</p>
   * @public
   */
  ScheduleExpression?: string | undefined;

  /**
   * <p>An S3 bucket where you want to store the results of this request.</p>
   * @public
   */
  OutputLocation?: InstanceAssociationOutputLocation | undefined;

  /**
   * <p>The name of the SSM Command document or Automation runbook that contains the configuration
   *    information for the managed node.</p>
   *          <p>You can specify Amazon Web Services-predefined documents, documents you created, or a document that is
   *    shared with you from another account.</p>
   *          <p>For Systems Manager document (SSM document) that are shared with you from other Amazon Web Services accounts, you
   *    must specify the complete SSM document ARN, in the following format:</p>
   *          <p>
   *             <code>arn:aws:ssm:<i>region</i>:<i>account-id</i>:document/<i>document-name</i>
   *             </code>
   *          </p>
   *          <p>For example:</p>
   *          <p>
   *             <code>arn:aws:ssm:us-east-2:12345678912:document/My-Shared-Document</code>
   *          </p>
   *          <p>For Amazon Web Services-predefined documents and SSM documents you created in your account, you only need
   *    to specify the document name. For example, <code>AWS-ApplyPatchBaseline</code> or
   *     <code>My-Document</code>.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The targets of the association.</p>
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * <p>The name of the association that you want to update.</p>
   * @public
   */
  AssociationName?: string | undefined;

  /**
   * <p>This parameter is provided for concurrency control purposes. You must specify the latest
   *    association version in the service. If you want to ensure that this request succeeds, either
   *    specify <code>$LATEST</code>, or omit this parameter.</p>
   * @public
   */
  AssociationVersion?: string | undefined;

  /**
   * <p>Choose the parameter that will define how your automation will branch out. This target is
   *    required for associations that use an Automation runbook and target resources by using rate
   *    controls. Automation is a tool in Amazon Web Services Systems Manager.</p>
   * @public
   */
  AutomationTargetParameterName?: string | undefined;

  /**
   * <p>The number of errors that are allowed before the system stops sending requests to run the
   *    association on additional targets. You can specify either an absolute number of errors, for
   *    example 10, or a percentage of the target set, for example 10%. If you specify 3, for example,
   *    the system stops sending requests when the fourth error is received. If you specify 0, then the
   *    system stops sending requests after the first error is returned. If you run an association on 50
   *    managed nodes and set <code>MaxError</code> to 10%, then the system stops sending the request
   *    when the sixth error is received.</p>
   *          <p>Executions that are already running an association when <code>MaxErrors</code> is reached
   *    are allowed to complete, but some of these executions may fail as well. If you need to ensure
   *    that there won't be more than max-errors failed executions, set <code>MaxConcurrency</code> to 1
   *    so that executions proceed one at a time.</p>
   * @public
   */
  MaxErrors?: string | undefined;

  /**
   * <p>The maximum number of targets allowed to run the association at the same time. You can
   *    specify a number, for example 10, or a percentage of the target set, for example 10%. The default
   *    value is 100%, which means all targets run the association at the same time.</p>
   *          <p>If a new managed node starts and attempts to run an association while Systems Manager is running
   *     <code>MaxConcurrency</code> associations, the association is allowed to run. During the next
   *    association interval, the new managed node will process its association within the limit
   *    specified for <code>MaxConcurrency</code>.</p>
   * @public
   */
  MaxConcurrency?: string | undefined;

  /**
   * <p>The severity level to assign to the association.</p>
   * @public
   */
  ComplianceSeverity?: AssociationComplianceSeverity | undefined;

  /**
   * <p>The mode for generating association compliance. You can specify <code>AUTO</code> or
   *     <code>MANUAL</code>. In <code>AUTO</code> mode, the system uses the status of the association
   *    execution to determine the compliance status. If the association execution runs successfully,
   *    then the association is <code>COMPLIANT</code>. If the association execution doesn't run
   *    successfully, the association is <code>NON-COMPLIANT</code>.</p>
   *          <p>In <code>MANUAL</code> mode, you must specify the <code>AssociationId</code> as a parameter
   *    for the <a>PutComplianceItems</a> API operation. In this case, compliance data isn't
   *    managed by State Manager, a tool in Amazon Web Services Systems Manager. It is managed by your direct call to the <a>PutComplianceItems</a> API operation.</p>
   *          <p>By default, all associations use <code>AUTO</code> mode.</p>
   * @public
   */
  SyncCompliance?: AssociationSyncCompliance | undefined;

  /**
   * <p>By default, when you update an association, the system runs it immediately after it is
   *    updated and then according to the schedule you specified. Specify <code>true</code> for
   *     <code>ApplyOnlyAtCronInterval</code> if you want the association to run only according to the
   *    schedule you specified.</p>
   *          <p>If you chose this option when you created an association and later you edit that association
   *    or you make changes to the Automation runbook or SSM document on which that association is based,
   *    State Manager applies the association at the next specified cron interval. For example, if you
   *    chose the <code>Latest</code> version of an SSM document when you created an association and you
   *    edit the association by choosing a different document version on the Documents page, State
   *    Manager applies the association at the next specified cron interval if you previously set
   *     <code>ApplyOnlyAtCronInterval</code> to <code>true</code>. If this option wasn't selected, State
   *    Manager immediately runs the association.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/state-manager-about.html#state-manager-about-scheduling">Understanding when associations are applied to resources</a> and <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/state-manager-about.html#runbook-target-updates">About
   *     target updates with Automation runbooks</a> in the
   *    <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   *          <p>This parameter isn't supported for rate expressions.</p>
   *          <p>You can reset this parameter. To do so, specify the
   *     <code>no-apply-only-at-cron-interval</code> parameter when you update the association from the
   *    command line. This parameter forces the association to run immediately after updating it and
   *    according to the interval specified.</p>
   * @public
   */
  ApplyOnlyAtCronInterval?: boolean | undefined;

  /**
   * <p>The names or Amazon Resource Names (ARNs) of the Change Calendar type documents you want to
   *    gate your associations under. The associations only run when that change calendar is open. For
   *    more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-change-calendar">Amazon Web Services Systems Manager Change
   *     Calendar</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   * @public
   */
  CalendarNames?: string[] | undefined;

  /**
   * <p>A location is a combination of Amazon Web Services Regions and Amazon Web Services accounts where you want to run the
   *    association. Use this action to update an association in multiple Regions and multiple
   *    accounts.</p>
   * @public
   */
  TargetLocations?: TargetLocation[] | undefined;

  /**
   * <p>Number of days to wait after the scheduled day to run an association. For example, if you
   *    specified a cron schedule of <code>cron(0 0 ? * THU#2 *)</code>, you could specify an offset of 3
   *    to run the association each Sunday after the second Thursday of the month. For more information
   *    about cron schedules for associations, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/reference-cron-and-rate-expressions.html">Reference: Cron
   *     and rate expressions for Systems Manager</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p>
   *          <note>
   *             <p>To use offsets, you must specify the <code>ApplyOnlyAtCronInterval</code> parameter. This
   *     option tells the system not to run an association immediately after you create it. </p>
   *          </note>
   * @public
   */
  ScheduleOffset?: number | undefined;

  /**
   * <p>The number of hours the association can run before it is canceled. Duration applies to
   *    associations that are currently running, and any pending and in progress commands on all targets.
   *    If a target was taken offline for the association to run, it is made available again immediately,
   *    without a reboot. </p>
   *          <p>The <code>Duration</code> parameter applies only when both these conditions are true:</p>
   *          <ul>
   *             <li>
   *                <p>The association for which you specify a duration is cancelable according to the parameters
   *      of the SSM command document or Automation runbook associated with this execution. </p>
   *             </li>
   *             <li>
   *                <p>The command specifies the <code>
   *                      <a href="https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateAssociation.html#systemsmanager-UpdateAssociation-request-ApplyOnlyAtCronInterval">ApplyOnlyAtCronInterval</a>
   *                   </code> parameter, which means that the association doesn't
   *      run immediately after it is updated, but only according to the specified schedule.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Duration?: number | undefined;

  /**
   * <p>A key-value mapping of document parameters to target resources. Both Targets and TargetMaps
   *    can't be specified together.</p>
   * @public
   */
  TargetMaps?: Record<string, string[]>[] | undefined;

  /**
   * <p>The details for the CloudWatch alarm you want to apply to an automation or
   *    command.</p>
   * @public
   */
  AlarmConfiguration?: AlarmConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateAssociationResult {
  /**
   * <p>The description of the association that was updated.</p>
   * @public
   */
  AssociationDescription?: AssociationDescription | undefined;
}

/**
 * <p>The updated status is the same as the current status.</p>
 * @public
 */
export class StatusUnchanged extends __BaseException {
  readonly name: "StatusUnchanged" = "StatusUnchanged";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StatusUnchanged, __BaseException>) {
    super({
      name: "StatusUnchanged",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StatusUnchanged.prototype);
  }
}

/**
 * @public
 */
export interface UpdateAssociationStatusRequest {
  /**
   * <p>The name of the SSM document.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The managed node ID.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The association status.</p>
   * @public
   */
  AssociationStatus: AssociationStatus | undefined;
}

/**
 * @public
 */
export interface UpdateAssociationStatusResult {
  /**
   * <p>Information about the association.</p>
   * @public
   */
  AssociationDescription?: AssociationDescription | undefined;
}

/**
 * <p>The document has too many versions. Delete one or more document versions and try
 *    again.</p>
 * @public
 */
export class DocumentVersionLimitExceeded extends __BaseException {
  readonly name: "DocumentVersionLimitExceeded" = "DocumentVersionLimitExceeded";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DocumentVersionLimitExceeded, __BaseException>) {
    super({
      name: "DocumentVersionLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DocumentVersionLimitExceeded.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The content of the association document matches another document. Change the content of the
 *    document and try again.</p>
 * @public
 */
export class DuplicateDocumentContent extends __BaseException {
  readonly name: "DuplicateDocumentContent" = "DuplicateDocumentContent";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicateDocumentContent, __BaseException>) {
    super({
      name: "DuplicateDocumentContent",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicateDocumentContent.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The version name has already been used in this document. Specify a different version name,
 *    and then try again.</p>
 * @public
 */
export class DuplicateDocumentVersionName extends __BaseException {
  readonly name: "DuplicateDocumentVersionName" = "DuplicateDocumentVersionName";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicateDocumentVersionName, __BaseException>) {
    super({
      name: "DuplicateDocumentVersionName",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicateDocumentVersionName.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface UpdateDocumentRequest {
  /**
   * <p>A valid JSON or YAML string.</p>
   * @public
   */
  Content: string | undefined;

  /**
   * <p>A list of key-value pairs that describe attachments to a version of a document.</p>
   * @public
   */
  Attachments?: AttachmentsSource[] | undefined;

  /**
   * <p>The name of the SSM document that you want to update.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The friendly name of the SSM document that you want to update. This value can differ for
   *    each version of the document. If you don't specify a value for this parameter in your request,
   *    the existing value is applied to the new document version.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>An optional field specifying the version of the artifact you are updating with the document.
   *    For example, 12.6. This value is unique across all versions of a document, and can't be
   *    changed.</p>
   * @public
   */
  VersionName?: string | undefined;

  /**
   * <p>The version of the document that you want to update. Currently, Systems Manager supports updating only
   *    the latest version of the document. You can specify the version number of the latest version or
   *    use the <code>$LATEST</code> variable.</p>
   *          <note>
   *             <p>If you change a document version for a State Manager association, Systems Manager immediately runs
   *     the association unless you previously specifed the <code>apply-only-at-cron-interval</code>
   *     parameter.</p>
   *          </note>
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * <p>Specify the document format for the new document version. Systems Manager supports JSON and YAML
   *    documents. JSON is the default format.</p>
   * @public
   */
  DocumentFormat?: DocumentFormat | undefined;

  /**
   * <p>Specify a new target type for the document.</p>
   * @public
   */
  TargetType?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDocumentResult {
  /**
   * <p>A description of the document that was updated.</p>
   * @public
   */
  DocumentDescription?: DocumentDescription | undefined;
}

/**
 * @public
 */
export interface UpdateDocumentDefaultVersionRequest {
  /**
   * <p>The name of a custom document that you want to set as the default version.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The version of a custom document that you want to set as the default version.</p>
   * @public
   */
  DocumentVersion: string | undefined;
}

/**
 * <p>A default version of a document.</p>
 * @public
 */
export interface DocumentDefaultVersionDescription {
  /**
   * <p>The name of the document.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The default version of the document.</p>
   * @public
   */
  DefaultVersion?: string | undefined;

  /**
   * <p>The default version of the artifact associated with the document.</p>
   * @public
   */
  DefaultVersionName?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDocumentDefaultVersionResult {
  /**
   * <p>The description of a custom document that you want to set as the default version.</p>
   * @public
   */
  Description?: DocumentDefaultVersionDescription | undefined;
}

/**
 * @public
 * @enum
 */
export const DocumentReviewAction = {
  Approve: "Approve",
  Reject: "Reject",
  SendForReview: "SendForReview",
  UpdateReview: "UpdateReview",
} as const;

/**
 * @public
 */
export type DocumentReviewAction = (typeof DocumentReviewAction)[keyof typeof DocumentReviewAction];

/**
 * <p>Information about a document approval review.</p>
 * @public
 */
export interface DocumentReviews {
  /**
   * <p>The action to take on a document approval review request.</p>
   * @public
   */
  Action: DocumentReviewAction | undefined;

  /**
   * <p>A comment entered by a user in your organization about the document review request.</p>
   * @public
   */
  Comment?: DocumentReviewCommentSource[] | undefined;
}

/**
 * @public
 */
export interface UpdateDocumentMetadataRequest {
  /**
   * <p>The name of the change template for which a version's metadata is to be updated.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The version of a change template in which to update approval metadata.</p>
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * <p>The change template review details to update.</p>
   * @public
   */
  DocumentReviews: DocumentReviews | undefined;
}

/**
 * @public
 */
export interface UpdateDocumentMetadataResponse {}

/**
 * @public
 */
export interface UpdateMaintenanceWindowRequest {
  /**
   * <p>The ID of the maintenance window to update.</p>
   * @public
   */
  WindowId: string | undefined;

  /**
   * <p>The name of the maintenance window.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>An optional description for the update request.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The date and time, in ISO-8601 Extended format, for when you want the maintenance window to
   *    become active. <code>StartDate</code> allows you to delay activation of the maintenance window
   *    until the specified future date.</p>
   *          <note>
   *             <p>When using a rate schedule, if you provide a start date that occurs in the past, the
   *     current date and time are used as the start date. </p>
   *          </note>
   * @public
   */
  StartDate?: string | undefined;

  /**
   * <p>The date and time, in ISO-8601 Extended format, for when you want the maintenance window to
   *    become inactive. <code>EndDate</code> allows you to set a date and time in the future when the
   *    maintenance window will no longer run.</p>
   * @public
   */
  EndDate?: string | undefined;

  /**
   * <p>The schedule of the maintenance window in the form of a cron or rate expression.</p>
   * @public
   */
  Schedule?: string | undefined;

  /**
   * <p>The time zone that the scheduled maintenance window executions are based on, in Internet
   *    Assigned Numbers Authority (IANA) format. For example: "America/Los_Angeles", "UTC", or
   *    "Asia/Seoul". For more information, see the <a href="https://www.iana.org/time-zones">Time
   *     Zone Database</a> on the IANA website.</p>
   * @public
   */
  ScheduleTimezone?: string | undefined;

  /**
   * <p>The number of days to wait after the date and time specified by a cron expression before
   *    running the maintenance window.</p>
   *          <p>For example, the following cron expression schedules a maintenance window to run the third
   *    Tuesday of every month at 11:30 PM.</p>
   *          <p>
   *             <code>cron(30 23 ? * TUE#3 *)</code>
   *          </p>
   *          <p>If the schedule offset is <code>2</code>, the maintenance window won't run until two days
   *    later.</p>
   * @public
   */
  ScheduleOffset?: number | undefined;

  /**
   * <p>The duration of the maintenance window in hours.</p>
   * @public
   */
  Duration?: number | undefined;

  /**
   * <p>The number of hours before the end of the maintenance window that Amazon Web Services Systems Manager stops scheduling
   *    new tasks for execution.</p>
   * @public
   */
  Cutoff?: number | undefined;

  /**
   * <p>Whether targets must be registered with the maintenance window before tasks can be defined
   *    for those targets.</p>
   * @public
   */
  AllowUnassociatedTargets?: boolean | undefined;

  /**
   * <p>Whether the maintenance window is enabled.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>If <code>True</code>, then all fields that are required by the <a>CreateMaintenanceWindow</a> operation are also required for this API request. Optional
   *    fields that aren't specified are set to null. </p>
   * @public
   */
  Replace?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateMaintenanceWindowResult {
  /**
   * <p>The ID of the created maintenance window.</p>
   * @public
   */
  WindowId?: string | undefined;

  /**
   * <p>The name of the maintenance window.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>An optional description of the update.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled
   *    to become active. The maintenance window won't run before this specified time.</p>
   * @public
   */
  StartDate?: string | undefined;

  /**
   * <p>The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled
   *    to become inactive. The maintenance window won't run after this specified time.</p>
   * @public
   */
  EndDate?: string | undefined;

  /**
   * <p>The schedule of the maintenance window in the form of a cron or rate expression.</p>
   * @public
   */
  Schedule?: string | undefined;

  /**
   * <p>The time zone that the scheduled maintenance window executions are based on, in Internet
   *    Assigned Numbers Authority (IANA) format. For example: "America/Los_Angeles", "UTC", or
   *    "Asia/Seoul". For more information, see the <a href="https://www.iana.org/time-zones">Time
   *     Zone Database</a> on the IANA website.</p>
   * @public
   */
  ScheduleTimezone?: string | undefined;

  /**
   * <p>The number of days to wait to run a maintenance window after the scheduled cron expression
   *    date and time.</p>
   * @public
   */
  ScheduleOffset?: number | undefined;

  /**
   * <p>The duration of the maintenance window in hours.</p>
   * @public
   */
  Duration?: number | undefined;

  /**
   * <p>The number of hours before the end of the maintenance window that Amazon Web Services Systems Manager stops scheduling
   *    new tasks for execution.</p>
   * @public
   */
  Cutoff?: number | undefined;

  /**
   * <p>Whether targets must be registered with the maintenance window before tasks can be defined
   *    for those targets.</p>
   * @public
   */
  AllowUnassociatedTargets?: boolean | undefined;

  /**
   * <p>Whether the maintenance window is enabled.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateMaintenanceWindowTargetRequest {
  /**
   * <p>The maintenance window ID with which to modify the target.</p>
   * @public
   */
  WindowId: string | undefined;

  /**
   * <p>The target ID to modify.</p>
   * @public
   */
  WindowTargetId: string | undefined;

  /**
   * <p>The targets to add or replace.</p>
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * <p>User-provided value that will be included in any Amazon CloudWatch Events events raised while
   *    running tasks for these targets in this maintenance window.</p>
   * @public
   */
  OwnerInformation?: string | undefined;

  /**
   * <p>A name for the update.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>An optional description for the update.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>If <code>True</code>, then all fields that are required by the <a>RegisterTargetWithMaintenanceWindow</a> operation are also required for this API
   *    request. Optional fields that aren't specified are set to null.</p>
   * @public
   */
  Replace?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateMaintenanceWindowTargetResult {
  /**
   * <p>The maintenance window ID specified in the update request.</p>
   * @public
   */
  WindowId?: string | undefined;

  /**
   * <p>The target ID specified in the update request.</p>
   * @public
   */
  WindowTargetId?: string | undefined;

  /**
   * <p>The updated targets.</p>
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * <p>The updated owner.</p>
   * @public
   */
  OwnerInformation?: string | undefined;

  /**
   * <p>The updated name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The updated description.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateMaintenanceWindowTaskRequest {
  /**
   * <p>The maintenance window ID that contains the task to modify.</p>
   * @public
   */
  WindowId: string | undefined;

  /**
   * <p>The task ID to modify.</p>
   * @public
   */
  WindowTaskId: string | undefined;

  /**
   * <p>The targets (either managed nodes or tags) to modify. Managed nodes are specified using the
   *    format <code>Key=instanceids,Values=instanceID_1,instanceID_2</code>. Tags are specified using
   *    the format <code> Key=tag_name,Values=tag_value</code>. </p>
   *          <note>
   *             <p>One or more targets must be specified for maintenance window Run Command-type tasks.
   *     Depending on the task, targets are optional for other maintenance window task types (Automation,
   *      Lambda, and Step Functions). For more information about running tasks
   *     that don't specify targets, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/maintenance-windows-targetless-tasks.html">Registering
   *      maintenance window tasks without targets</a> in the
   *     <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   *          </note>
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * <p>The task ARN to modify.</p>
   * @public
   */
  TaskArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM service role for
   *                 Amazon Web Services Systems Manager to assume when running a maintenance window task. If you do not specify a
   *                 service role ARN, Systems Manager uses a service-linked role in your account. If no
   *                 appropriate service-linked role for Systems Manager exists in your account, it is created when
   *                 you run <code>RegisterTaskWithMaintenanceWindow</code>.</p>
   *          <p>However, for an improved security posture, we strongly recommend creating a custom
   *                 policy and custom service role for running your maintenance window tasks. The policy
   *                 can be crafted to provide only the permissions needed for your particular
   *                 maintenance window tasks. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-maintenance-permissions.html">Setting up Maintenance Windows</a> in the in the
   *                     <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   * @public
   */
  ServiceRoleArn?: string | undefined;

  /**
   * <p>The parameters to modify.</p>
   *          <note>
   *             <p>
   *                <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs,
   *       instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information
   *       about how Systems Manager handles these options for the supported maintenance window task
   *       types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p>
   *          </note>
   *          <p>The map has the following format:</p>
   *          <p>Key: string, between 1 and 255 characters</p>
   *          <p>Value: an array of strings, each string is between 1 and 255 characters</p>
   * @public
   */
  TaskParameters?: Record<string, MaintenanceWindowTaskParameterValueExpression> | undefined;

  /**
   * <p>The parameters that the task should use during execution. Populate only the fields that
   *    match the task type. All other fields should be empty.</p>
   *          <important>
   *             <p>When you update a maintenance window task that has options specified in
   *      <code>TaskInvocationParameters</code>, you must provide again all the
   *      <code>TaskInvocationParameters</code> values that you want to retain. The values you don't
   *     specify again are removed. For example, suppose that when you registered a Run Command task, you
   *     specified <code>TaskInvocationParameters</code> values for <code>Comment</code>,
   *      <code>NotificationConfig</code>, and <code>OutputS3BucketName</code>. If you update the
   *     maintenance window task and specify only a different <code>OutputS3BucketName</code> value, the
   *     values for <code>Comment</code> and <code>NotificationConfig</code> are removed.</p>
   *          </important>
   * @public
   */
  TaskInvocationParameters?: MaintenanceWindowTaskInvocationParameters | undefined;

  /**
   * <p>The new task priority to specify. The lower the number, the higher the priority. Tasks that
   *    have the same priority are scheduled in parallel.</p>
   * @public
   */
  Priority?: number | undefined;

  /**
   * <p>The new <code>MaxConcurrency</code> value you want to specify. <code>MaxConcurrency</code>
   *    is the number of targets that are allowed to run this task, in parallel.</p>
   *          <note>
   *             <p>Although this element is listed as "Required: No", a value can be omitted only when you are
   *     registering or updating a <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/maintenance-windows-targetless-tasks.html">targetless
   *      task</a> You must provide a value in all other cases.</p>
   *             <p>For maintenance window tasks without a target specified, you can't supply a value for this
   *     option. Instead, the system inserts a placeholder value of <code>1</code>. This value doesn't
   *     affect the running of your task.</p>
   *          </note>
   * @public
   */
  MaxConcurrency?: string | undefined;

  /**
   * <p>The new <code>MaxErrors</code> value to specify. <code>MaxErrors</code> is the maximum
   *    number of errors that are allowed before the task stops being scheduled.</p>
   *          <note>
   *             <p>Although this element is listed as "Required: No", a value can be omitted only when you are
   *     registering or updating a <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/maintenance-windows-targetless-tasks.html">targetless
   *      task</a> You must provide a value in all other cases.</p>
   *             <p>For maintenance window tasks without a target specified, you can't supply a value for this
   *     option. Instead, the system inserts a placeholder value of <code>1</code>. This value doesn't
   *     affect the running of your task.</p>
   *          </note>
   * @public
   */
  MaxErrors?: string | undefined;

  /**
   * <p>The new logging location in Amazon S3 to specify.</p>
   *          <note>
   *             <p>
   *                <code>LoggingInfo</code> has been deprecated. To specify an Amazon Simple Storage Service (Amazon S3) bucket to contain logs, instead use the
   *       <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure.
   *       For information about how Amazon Web Services Systems Manager handles these options for the supported maintenance
   *       window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p>
   *          </note>
   * @public
   */
  LoggingInfo?: LoggingInfo | undefined;

  /**
   * <p>The new task name to specify.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The new task description to specify.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>If True, then all fields that are required by the <a>RegisterTaskWithMaintenanceWindow</a> operation are also required for this API request.
   *    Optional fields that aren't specified are set to null.</p>
   * @public
   */
  Replace?: boolean | undefined;

  /**
   * <p>Indicates whether tasks should continue to run after the cutoff time specified in the
   *    maintenance windows is reached. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CONTINUE_TASK</code>: When the cutoff time is reached, any tasks that are running
   *      continue. The default value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CANCEL_TASK</code>:</p>
   *                <ul>
   *                   <li>
   *                      <p>For Automation, Lambda, Step Functions tasks: When the cutoff
   *        time is reached, any task invocations that are already running continue, but no new task
   *        invocations are started.</p>
   *                   </li>
   *                   <li>
   *                      <p>For Run Command tasks: When the cutoff time is reached, the system sends a <a>CancelCommand</a> operation that attempts to cancel the command associated with the
   *        task. However, there is no guarantee that the command will be terminated and the underlying
   *        process stopped.</p>
   *                   </li>
   *                </ul>
   *                <p>The status for tasks that are not completed is <code>TIMED_OUT</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  CutoffBehavior?: MaintenanceWindowTaskCutoffBehavior | undefined;

  /**
   * <p>The CloudWatch alarm you want to apply to your maintenance window task.</p>
   * @public
   */
  AlarmConfiguration?: AlarmConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateMaintenanceWindowTaskResult {
  /**
   * <p>The ID of the maintenance window that was updated.</p>
   * @public
   */
  WindowId?: string | undefined;

  /**
   * <p>The task ID of the maintenance window that was updated.</p>
   * @public
   */
  WindowTaskId?: string | undefined;

  /**
   * <p>The updated target values.</p>
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * <p>The updated task ARN value.</p>
   * @public
   */
  TaskArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM service role for
   *                 Amazon Web Services Systems Manager to assume when running a maintenance window task. If you do not specify a
   *                 service role ARN, Systems Manager uses a service-linked role in your account. If no
   *                 appropriate service-linked role for Systems Manager exists in your account, it is created when
   *                 you run <code>RegisterTaskWithMaintenanceWindow</code>.</p>
   *          <p>However, for an improved security posture, we strongly recommend creating a custom
   *                 policy and custom service role for running your maintenance window tasks. The policy
   *                 can be crafted to provide only the permissions needed for your particular
   *                 maintenance window tasks. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-maintenance-permissions.html">Setting up Maintenance Windows</a> in the in the
   *                     <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   * @public
   */
  ServiceRoleArn?: string | undefined;

  /**
   * <p>The updated parameter values.</p>
   *          <note>
   *             <p>
   *                <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs,
   *       instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information
   *       about how Systems Manager handles these options for the supported maintenance window task
   *       types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p>
   *          </note>
   * @public
   */
  TaskParameters?: Record<string, MaintenanceWindowTaskParameterValueExpression> | undefined;

  /**
   * <p>The updated parameter values.</p>
   * @public
   */
  TaskInvocationParameters?: MaintenanceWindowTaskInvocationParameters | undefined;

  /**
   * <p>The updated priority value.</p>
   * @public
   */
  Priority?: number | undefined;

  /**
   * <p>The updated <code>MaxConcurrency</code> value.</p>
   * @public
   */
  MaxConcurrency?: string | undefined;

  /**
   * <p>The updated <code>MaxErrors</code> value.</p>
   * @public
   */
  MaxErrors?: string | undefined;

  /**
   * <p>The updated logging information in Amazon S3.</p>
   *          <note>
   *             <p>
   *                <code>LoggingInfo</code> has been deprecated. To specify an Amazon Simple Storage Service (Amazon S3) bucket to contain logs, instead use the
   *       <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure.
   *       For information about how Amazon Web Services Systems Manager handles these options for the supported maintenance
   *       window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p>
   *          </note>
   * @public
   */
  LoggingInfo?: LoggingInfo | undefined;

  /**
   * <p>The updated task name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The updated task description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The specification for whether tasks should continue to run after the cutoff time specified
   *    in the maintenance windows is reached. </p>
   * @public
   */
  CutoffBehavior?: MaintenanceWindowTaskCutoffBehavior | undefined;

  /**
   * <p>The details for the CloudWatch alarm you applied to your maintenance window
   *    task.</p>
   * @public
   */
  AlarmConfiguration?: AlarmConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateManagedInstanceRoleRequest {
  /**
   * <p>The ID of the managed node where you want to update the role.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The name of the Identity and Access Management (IAM) role that you want to assign to
   *    the managed node. This IAM role must provide AssumeRole permissions for the
   *    Amazon Web Services Systems Manager service principal <code>ssm.amazonaws.com</code>. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/hybrid-multicloud-service-role.html">Create the IAM service role required for Systems Manager in hybrid and multicloud
   *     environments</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   *          <note>
   *             <p>You can't specify an IAM service-linked role for this parameter. You must
   *     create a unique role.</p>
   *          </note>
   * @public
   */
  IamRole: string | undefined;
}

/**
 * @public
 */
export interface UpdateManagedInstanceRoleResult {}

/**
 * @public
 */
export interface UpdateOpsItemRequest {
  /**
   * <p>User-defined text that contains information about the OpsItem, in Markdown format. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Add new keys or edit existing key-value pairs of the OperationalData map in the OpsItem
   *    object.</p>
   *          <p>Operational data is custom data that provides useful reference details about the OpsItem.
   *    For example, you can specify log files, error strings, license keys, troubleshooting tips, or
   *    other relevant data. You enter operational data as key-value pairs. The key has a maximum length
   *    of 128 characters. The value has a maximum size of 20 KB.</p>
   *          <important>
   *             <p>Operational data keys <i>can't</i> begin with the following:
   *      <code>amazon</code>, <code>aws</code>, <code>amzn</code>, <code>ssm</code>,
   *      <code>/amazon</code>, <code>/aws</code>, <code>/amzn</code>, <code>/ssm</code>.</p>
   *          </important>
   *          <p>You can choose to make the data searchable by other users in the account or you can restrict
   *    search access. Searchable data means that all users with access to the OpsItem Overview page (as
   *    provided by the <a>DescribeOpsItems</a> API operation) can view and search on the
   *    specified data. Operational data that isn't searchable is only viewable by users who have access
   *    to the OpsItem (as provided by the <a>GetOpsItem</a> API operation).</p>
   *          <p>Use the <code>/aws/resources</code> key in OperationalData to specify a related resource in
   *    the request. Use the <code>/aws/automations</code> key in OperationalData to associate an
   *    Automation runbook with the OpsItem. To view Amazon Web Services CLI example commands that use these keys, see
   *     <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-manually-create-OpsItems.html">Creating OpsItems
   *     manually</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   * @public
   */
  OperationalData?: Record<string, OpsItemDataValue> | undefined;

  /**
   * <p>Keys that you want to remove from the OperationalData map.</p>
   * @public
   */
  OperationalDataToDelete?: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an SNS topic where notifications are sent when this
   *    OpsItem is edited or changed.</p>
   * @public
   */
  Notifications?: OpsItemNotification[] | undefined;

  /**
   * <p>The importance of this OpsItem in relation to other OpsItems in the system.</p>
   * @public
   */
  Priority?: number | undefined;

  /**
   * <p>One or more OpsItems that share something in common with the current OpsItems. For example,
   *    related OpsItems can include OpsItems with similar error messages, impacted resources, or
   *    statuses for the impacted resource.</p>
   * @public
   */
  RelatedOpsItems?: RelatedOpsItem[] | undefined;

  /**
   * <p>The OpsItem status. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-working-with-OpsItems-editing-details.html">Editing OpsItem details</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   * @public
   */
  Status?: OpsItemStatus | undefined;

  /**
   * <p>The ID of the OpsItem.</p>
   * @public
   */
  OpsItemId: string | undefined;

  /**
   * <p>A short heading that describes the nature of the OpsItem and the impacted resource.</p>
   * @public
   */
  Title?: string | undefined;

  /**
   * <p>Specify a new category for an OpsItem.</p>
   * @public
   */
  Category?: string | undefined;

  /**
   * <p>Specify a new severity for an OpsItem.</p>
   * @public
   */
  Severity?: string | undefined;

  /**
   * <p>The time a runbook workflow started. Currently reported only for the OpsItem type
   *     <code>/aws/changerequest</code>.</p>
   * @public
   */
  ActualStartTime?: Date | undefined;

  /**
   * <p>The time a runbook workflow ended. Currently reported only for the OpsItem type
   *     <code>/aws/changerequest</code>.</p>
   * @public
   */
  ActualEndTime?: Date | undefined;

  /**
   * <p>The time specified in a change request for a runbook workflow to start. Currently supported
   *    only for the OpsItem type <code>/aws/changerequest</code>.</p>
   * @public
   */
  PlannedStartTime?: Date | undefined;

  /**
   * <p>The time specified in a change request for a runbook workflow to end. Currently supported
   *    only for the OpsItem type <code>/aws/changerequest</code>.</p>
   * @public
   */
  PlannedEndTime?: Date | undefined;

  /**
   * <p>The OpsItem Amazon Resource Name (ARN).</p>
   * @public
   */
  OpsItemArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateOpsItemResponse {}

/**
 * <p>The OpsMetadata object exceeds the maximum number of OpsMetadata keys that you can assign to
 *    an application in Application Manager.</p>
 * @public
 */
export class OpsMetadataKeyLimitExceededException extends __BaseException {
  readonly name: "OpsMetadataKeyLimitExceededException" = "OpsMetadataKeyLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OpsMetadataKeyLimitExceededException, __BaseException>) {
    super({
      name: "OpsMetadataKeyLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OpsMetadataKeyLimitExceededException.prototype);
  }
}

/**
 * @public
 */
export interface UpdateOpsMetadataRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the OpsMetadata Object to update.</p>
   * @public
   */
  OpsMetadataArn: string | undefined;

  /**
   * <p>Metadata to add to an OpsMetadata object.</p>
   * @public
   */
  MetadataToUpdate?: Record<string, MetadataValue> | undefined;

  /**
   * <p>The metadata keys to delete from the OpsMetadata object. </p>
   * @public
   */
  KeysToDelete?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateOpsMetadataResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the OpsMetadata Object that was updated.</p>
   * @public
   */
  OpsMetadataArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePatchBaselineRequest {
  /**
   * <p>The ID of the patch baseline to update.</p>
   * @public
   */
  BaselineId: string | undefined;

  /**
   * <p>The name of the patch baseline.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A set of global filters used to include patches in the baseline.</p>
   *          <important>
   *             <p>The <code>GlobalFilters</code> parameter can be configured only by using the CLI or an Amazon Web Services SDK. It can't be configured from the Patch Manager
   *     console, and its value isn't displayed in the console.</p>
   *          </important>
   * @public
   */
  GlobalFilters?: PatchFilterGroup | undefined;

  /**
   * <p>A set of rules used to include patches in the baseline.</p>
   * @public
   */
  ApprovalRules?: PatchRuleGroup | undefined;

  /**
   * <p>A list of explicitly approved patches for the baseline.</p>
   *          <p>For information about accepted formats for lists of approved patches and rejected patches,
   *                         see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-approved-rejected-package-name-formats.html">Package
   *                         name formats for approved and rejected patch lists</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   * @public
   */
  ApprovedPatches?: string[] | undefined;

  /**
   * <p>Assigns a new compliance severity level to an existing patch baseline.</p>
   * @public
   */
  ApprovedPatchesComplianceLevel?: PatchComplianceLevel | undefined;

  /**
   * <p>Indicates whether the list of approved patches includes non-security updates that should be
   *    applied to the managed nodes. The default value is <code>false</code>. Applies to Linux managed
   *    nodes only.</p>
   * @public
   */
  ApprovedPatchesEnableNonSecurity?: boolean | undefined;

  /**
   * <p>A list of explicitly rejected patches for the baseline.</p>
   *          <p>For information about accepted formats for lists of approved patches and rejected patches,
   *                         see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-approved-rejected-package-name-formats.html">Package
   *                         name formats for approved and rejected patch lists</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   * @public
   */
  RejectedPatches?: string[] | undefined;

  /**
   * <p>The action for Patch Manager to take on patches included in the
   *     <code>RejectedPackages</code> list.</p>
   *          <dl>
   *             <dt>ALLOW_AS_DEPENDENCY</dt>
   *             <dd>
   *                <p>
   *                   <b>Linux and macOS</b>: A package in the rejected patches list
   *       is installed only if it is a dependency of another package. It is considered compliant with
   *       the patch baseline, and its status is reported as <code>INSTALLED_OTHER</code>. This is the
   *       default action if no option is specified.</p>
   *                <p>
   *                   <b>Windows Server</b>: Windows Server doesn't support the
   *       concept of package dependencies. If a package in the rejected patches list and already
   *       installed on the node, its status is reported as <code>INSTALLED_OTHER</code>. Any package not
   *       already installed on the node is skipped. This is the default action if no option is
   *       specified.</p>
   *             </dd>
   *             <dt>BLOCK</dt>
   *             <dd>
   *                <p>
   *                   <b>All OSs</b>: Packages in the rejected patches list, and
   *       packages that include them as dependencies, aren't installed by Patch Manager under any
   *       circumstances. If a package was installed before it was added to the rejected patches list, or
   *       is installed outside of Patch Manager afterward, it's considered noncompliant with the patch
   *       baseline and its status is reported as <code>INSTALLED_REJECTED</code>.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  RejectedPatchesAction?: PatchAction | undefined;

  /**
   * <p>A description of the patch baseline.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Information about the patches to use to update the managed nodes, including target operating
   *    systems and source repositories. Applies to Linux managed nodes only.</p>
   * @public
   */
  Sources?: PatchSource[] | undefined;

  /**
   * <p>If True, then all fields that are required by the <a>CreatePatchBaseline</a>
   *    operation are also required for this API request. Optional fields that aren't specified are set
   *    to null.</p>
   * @public
   */
  Replace?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdatePatchBaselineResult {
  /**
   * <p>The ID of the deleted patch baseline.</p>
   * @public
   */
  BaselineId?: string | undefined;

  /**
   * <p>The name of the patch baseline.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The operating system rule used by the updated patch baseline.</p>
   * @public
   */
  OperatingSystem?: OperatingSystem | undefined;

  /**
   * <p>A set of global filters used to exclude patches from the baseline.</p>
   * @public
   */
  GlobalFilters?: PatchFilterGroup | undefined;

  /**
   * <p>A set of rules used to include patches in the baseline.</p>
   * @public
   */
  ApprovalRules?: PatchRuleGroup | undefined;

  /**
   * <p>A list of explicitly approved patches for the baseline.</p>
   * @public
   */
  ApprovedPatches?: string[] | undefined;

  /**
   * <p>The compliance severity level assigned to the patch baseline after the update
   *    completed.</p>
   * @public
   */
  ApprovedPatchesComplianceLevel?: PatchComplianceLevel | undefined;

  /**
   * <p>Indicates whether the list of approved patches includes non-security updates that should be
   *    applied to the managed nodes. The default value is <code>false</code>. Applies to Linux managed
   *    nodes only.</p>
   * @public
   */
  ApprovedPatchesEnableNonSecurity?: boolean | undefined;

  /**
   * <p>A list of explicitly rejected patches for the baseline.</p>
   * @public
   */
  RejectedPatches?: string[] | undefined;

  /**
   * <p>The action specified to take on patches included in the <code>RejectedPatches</code> list. A
   *    patch can be allowed only if it is a dependency of another package, or blocked entirely along
   *    with packages that include it as a dependency.</p>
   * @public
   */
  RejectedPatchesAction?: PatchAction | undefined;

  /**
   * <p>The date when the patch baseline was created.</p>
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * <p>The date when the patch baseline was last modified.</p>
   * @public
   */
  ModifiedDate?: Date | undefined;

  /**
   * <p>A description of the patch baseline.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Information about the patches to use to update the managed nodes, including target operating
   *    systems and source repositories. Applies to Linux managed nodes only.</p>
   * @public
   */
  Sources?: PatchSource[] | undefined;
}

/**
 * <p>Another <code>UpdateResourceDataSync</code> request is being processed. Wait a few minutes
 *    and try again.</p>
 * @public
 */
export class ResourceDataSyncConflictException extends __BaseException {
  readonly name: "ResourceDataSyncConflictException" = "ResourceDataSyncConflictException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceDataSyncConflictException, __BaseException>) {
    super({
      name: "ResourceDataSyncConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceDataSyncConflictException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface UpdateResourceDataSyncRequest {
  /**
   * <p>The name of the resource data sync you want to update.</p>
   * @public
   */
  SyncName: string | undefined;

  /**
   * <p>The type of resource data sync. The supported <code>SyncType</code> is
   *    SyncFromSource.</p>
   * @public
   */
  SyncType: string | undefined;

  /**
   * <p>Specify information about the data sources to synchronize.</p>
   * @public
   */
  SyncSource: ResourceDataSyncSource | undefined;
}

/**
 * @public
 */
export interface UpdateResourceDataSyncResult {}

/**
 * <p>The request body of the UpdateServiceSetting API operation.</p>
 * @public
 */
export interface UpdateServiceSettingRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the service setting to update. For example,
   *     <code>arn:aws:ssm:us-east-1:111122223333:servicesetting/ssm/parameter-store/high-throughput-enabled</code>.
   *    The setting ID can be one of the following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>/ssm/appmanager/appmanager-enabled</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/ssm/automation/customer-script-log-destination</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/ssm/automation/customer-script-log-group-name</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>/ssm/automation/enable-adaptive-concurrency</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/ssm/documents/console/public-sharing-permission</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/ssm/managed-instance/activation-tier</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/ssm/managed-instance/default-ec2-instance-management-role</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/ssm/opsinsights/opscenter</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/ssm/parameter-store/default-parameter-tier</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/ssm/parameter-store/high-throughput-enabled</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>Permissions to update the
   *      <code>/ssm/managed-instance/default-ec2-instance-management-role</code> setting should only be
   *     provided to administrators. Implement least privilege access when allowing individuals to
   *     configure or modify the Default Host Management Configuration.</p>
   *          </note>
   * @public
   */
  SettingId: string | undefined;

  /**
   * <p>The new value to specify for the service setting. The following list specifies the available
   *    values for each setting.</p>
   *          <ul>
   *             <li>
   *                <p>For <code>/ssm/appmanager/appmanager-enabled</code>, enter <code>True</code> or
   *       <code>False</code>.</p>
   *             </li>
   *             <li>
   *                <p>For <code>/ssm/automation/customer-script-log-destination</code>, enter <code>CloudWatch</code>.</p>
   *             </li>
   *             <li>
   *                <p>For <code>/ssm/automation/customer-script-log-group-name</code>, enter the name of an
   *       Amazon CloudWatch Logs log group.</p>
   *             </li>
   *             <li>
   *                <p>For <code>/ssm/documents/console/public-sharing-permission</code>, enter
   *       <code>Enable</code> or <code>Disable</code>.</p>
   *             </li>
   *             <li>
   *                <p>For <code>/ssm/managed-instance/activation-tier</code>, enter <code>standard</code> or
   *       <code>advanced</code>.</p>
   *             </li>
   *             <li>
   *                <p>For <code>/ssm/managed-instance/default-ec2-instance-management-role</code>, enter the
   *      name of an IAM role. </p>
   *             </li>
   *             <li>
   *                <p> For <code>/ssm/opsinsights/opscenter</code>, enter <code>Enabled</code> or
   *       <code>Disabled</code>. </p>
   *             </li>
   *             <li>
   *                <p>For <code>/ssm/parameter-store/default-parameter-tier</code>, enter <code>Standard</code>,
   *       <code>Advanced</code>, or <code>Intelligent-Tiering</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For <code>/ssm/parameter-store/high-throughput-enabled</code>, enter <code>true</code> or
   *       <code>false</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SettingValue: string | undefined;
}

/**
 * <p>The result body of the UpdateServiceSetting API operation.</p>
 * @public
 */
export interface UpdateServiceSettingResult {}

/**
 * <p>Specifies the inventory type and attribute for the aggregation execution.</p>
 * @public
 */
export interface InventoryAggregator {
  /**
   * <p>The inventory type and attribute name for aggregation.</p>
   * @public
   */
  Expression?: string | undefined;

  /**
   * <p>Nested aggregators to further refine aggregation for an inventory type.</p>
   * @public
   */
  Aggregators?: InventoryAggregator[] | undefined;

  /**
   * <p>A user-defined set of one or more filters on which to aggregate inventory data. Groups
   *    return a count of resources that match and don't match the specified criteria.</p>
   * @public
   */
  Groups?: InventoryGroup[] | undefined;
}

/**
 * <p>One or more aggregators for viewing counts of nodes using different
 *    dimensions.</p>
 * @public
 */
export interface NodeAggregator {
  /**
   * <p>The aggregator type for limiting a node summary. Currently, only <code>Count</code> is
   *    supported.</p>
   * @public
   */
  AggregatorType: NodeAggregatorType | undefined;

  /**
   * <p>The data type name to use for viewing counts of nodes. Currently, only <code>Instance</code>
   *    is supported.</p>
   * @public
   */
  TypeName: NodeTypeName | undefined;

  /**
   * <p>The name of a node attribute on which to limit the count of nodes.</p>
   * @public
   */
  AttributeName: NodeAttributeName | undefined;

  /**
   * <p>Information about aggregators used to refine a node summary.</p>
   * @public
   */
  Aggregators?: NodeAggregator[] | undefined;
}

/**
 * <p>One or more aggregators for viewing counts of OpsData using different dimensions such as
 *     <code>Source</code>, <code>CreatedTime</code>, or <code>Source and CreatedTime</code>, to name a
 *    few.</p>
 * @public
 */
export interface OpsAggregator {
  /**
   * <p>Either a <code>Range</code> or <code>Count</code> aggregator for limiting an OpsData
   *    summary.</p>
   * @public
   */
  AggregatorType?: string | undefined;

  /**
   * <p>The data type name to use for viewing counts of OpsData.</p>
   * @public
   */
  TypeName?: string | undefined;

  /**
   * <p>The name of an OpsData attribute on which to limit the count of OpsData.</p>
   * @public
   */
  AttributeName?: string | undefined;

  /**
   * <p>The aggregator value.</p>
   * @public
   */
  Values?: Record<string, string> | undefined;

  /**
   * <p>The aggregator filters.</p>
   * @public
   */
  Filters?: OpsFilter[] | undefined;

  /**
   * <p>A nested aggregator for viewing counts of OpsData.</p>
   * @public
   */
  Aggregators?: OpsAggregator[] | undefined;
}

/**
 * @public
 */
export interface GetInventoryRequest {
  /**
   * <p>One or more filters. Use a filter to return a more specific list of results.</p>
   * @public
   */
  Filters?: InventoryFilter[] | undefined;

  /**
   * <p>Returns counts of inventory types based on one or more expressions. For example, if you
   *    aggregate by using an expression that uses the <code>AWS:InstanceInformation.PlatformType</code>
   *    type, you can see a count of how many Windows and Linux managed nodes exist in your inventoried
   *    fleet.</p>
   * @public
   */
  Aggregators?: InventoryAggregator[] | undefined;

  /**
   * <p>The list of inventory item types to return.</p>
   * @public
   */
  ResultAttributes?: ResultAttribute[] | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetOpsSummaryRequest {
  /**
   * <p>Specify the name of a resource data sync to get.</p>
   * @public
   */
  SyncName?: string | undefined;

  /**
   * <p>Optional filters used to scope down the returned OpsData. </p>
   * @public
   */
  Filters?: OpsFilter[] | undefined;

  /**
   * <p>Optional aggregators that return counts of OpsData based on one or more expressions.</p>
   * @public
   */
  Aggregators?: OpsAggregator[] | undefined;

  /**
   * <p>The OpsData data type to return.</p>
   * @public
   */
  ResultAttributes?: OpsResultAttribute[] | undefined;

  /**
   * <p>A token to start the list. Use this token to get the next set of results. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListNodesSummaryRequest {
  /**
   * <p>The name of the Amazon Web Services managed resource data sync to retrieve information about.</p>
   *          <p>For cross-account/cross-Region configurations, this parameter is required, and the name of
   *    the supported resource data sync is <code>AWS-QuickSetup-ManagedNode</code>.</p>
   *          <p>For single account/single-Region configurations, the parameter is not required.</p>
   * @public
   */
  SyncName?: string | undefined;

  /**
   * <p>One or more filters. Use a filter to generate a summary that matches your specified filter
   *    criteria.</p>
   * @public
   */
  Filters?: NodeFilter[] | undefined;

  /**
   * <p>Specify one or more aggregators to return a count of managed nodes that match that
   *    expression. For example, a count of managed nodes by operating system.</p>
   * @public
   */
  Aggregators: NodeAggregator[] | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.) The call also returns a token that you can specify in a subsequent call to get the next
   *    set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @internal
 */
export const SendCommandRequestFilterSensitiveLog = (obj: SendCommandRequest): any => ({
  ...obj,
  ...(obj.Parameters && { Parameters: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SendCommandResultFilterSensitiveLog = (obj: SendCommandResult): any => ({
  ...obj,
  ...(obj.Command && { Command: CommandFilterSensitiveLog(obj.Command) }),
});

/**
 * @internal
 */
export const UpdateAssociationRequestFilterSensitiveLog = (obj: UpdateAssociationRequest): any => ({
  ...obj,
  ...(obj.Parameters && { Parameters: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateAssociationResultFilterSensitiveLog = (obj: UpdateAssociationResult): any => ({
  ...obj,
  ...(obj.AssociationDescription && {
    AssociationDescription: AssociationDescriptionFilterSensitiveLog(obj.AssociationDescription),
  }),
});

/**
 * @internal
 */
export const UpdateAssociationStatusResultFilterSensitiveLog = (obj: UpdateAssociationStatusResult): any => ({
  ...obj,
  ...(obj.AssociationDescription && {
    AssociationDescription: AssociationDescriptionFilterSensitiveLog(obj.AssociationDescription),
  }),
});

/**
 * @internal
 */
export const UpdateMaintenanceWindowRequestFilterSensitiveLog = (obj: UpdateMaintenanceWindowRequest): any => ({
  ...obj,
  ...(obj.Description && { Description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateMaintenanceWindowResultFilterSensitiveLog = (obj: UpdateMaintenanceWindowResult): any => ({
  ...obj,
  ...(obj.Description && { Description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateMaintenanceWindowTargetRequestFilterSensitiveLog = (
  obj: UpdateMaintenanceWindowTargetRequest
): any => ({
  ...obj,
  ...(obj.OwnerInformation && { OwnerInformation: SENSITIVE_STRING }),
  ...(obj.Description && { Description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateMaintenanceWindowTargetResultFilterSensitiveLog = (
  obj: UpdateMaintenanceWindowTargetResult
): any => ({
  ...obj,
  ...(obj.OwnerInformation && { OwnerInformation: SENSITIVE_STRING }),
  ...(obj.Description && { Description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateMaintenanceWindowTaskRequestFilterSensitiveLog = (obj: UpdateMaintenanceWindowTaskRequest): any => ({
  ...obj,
  ...(obj.TaskParameters && { TaskParameters: SENSITIVE_STRING }),
  ...(obj.TaskInvocationParameters && {
    TaskInvocationParameters: MaintenanceWindowTaskInvocationParametersFilterSensitiveLog(obj.TaskInvocationParameters),
  }),
  ...(obj.Description && { Description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateMaintenanceWindowTaskResultFilterSensitiveLog = (obj: UpdateMaintenanceWindowTaskResult): any => ({
  ...obj,
  ...(obj.TaskParameters && { TaskParameters: SENSITIVE_STRING }),
  ...(obj.TaskInvocationParameters && {
    TaskInvocationParameters: MaintenanceWindowTaskInvocationParametersFilterSensitiveLog(obj.TaskInvocationParameters),
  }),
  ...(obj.Description && { Description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdatePatchBaselineRequestFilterSensitiveLog = (obj: UpdatePatchBaselineRequest): any => ({
  ...obj,
  ...(obj.Sources && { Sources: obj.Sources.map((item) => PatchSourceFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UpdatePatchBaselineResultFilterSensitiveLog = (obj: UpdatePatchBaselineResult): any => ({
  ...obj,
  ...(obj.Sources && { Sources: obj.Sources.map((item) => PatchSourceFilterSensitiveLog(item)) }),
});
