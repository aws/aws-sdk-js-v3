// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { SSMServiceException as __BaseException } from "./SSMServiceException";

/**
 * <p>Information includes the Amazon Web Services account ID where the current document is shared and the
 *    version shared with that account.</p>
 */
export interface AccountSharingInfo {
  /**
   * <p>The Amazon Web Services account ID where the current document is shared.</p>
   */
  AccountId?: string;

  /**
   * <p>The version of the current document shared with the account.</p>
   */
  SharedDocumentVersion?: string;
}

/**
 * <p>Metadata that you assign to your Amazon Web Services resources. Tags enable you to categorize your
 *    resources in different ways, for example, by purpose, owner, or environment. In Amazon Web Services Systems Manager, you
 *    can apply tags to Systems Manager documents (SSM documents), managed nodes, maintenance windows,
 *    parameters, patch baselines, OpsItems, and OpsMetadata.</p>
 */
export interface Tag {
  /**
   * <p>The name of the tag.</p>
   */
  Key: string | undefined;

  /**
   * <p>The value of the tag.</p>
   */
  Value: string | undefined;
}

/**
 * <p>An activation registers one or more on-premises servers or virtual machines (VMs) with Amazon Web Services
 *    so that you can configure those servers or VMs using Run Command. A server or VM that has been
 *    registered with Amazon Web Services Systems Manager is called a managed node.</p>
 */
export interface Activation {
  /**
   * <p>The ID created by Systems Manager when you submitted the activation.</p>
   */
  ActivationId?: string;

  /**
   * <p>A user defined description of the activation.</p>
   */
  Description?: string;

  /**
   * <p>A name for the managed node when it is created.</p>
   */
  DefaultInstanceName?: string;

  /**
   * <p>The Identity and Access Management (IAM) role to assign to the managed node.</p>
   */
  IamRole?: string;

  /**
   * <p>The maximum number of managed nodes that can be registered using this activation.</p>
   */
  RegistrationLimit?: number;

  /**
   * <p>The number of managed nodes already registered with this activation.</p>
   */
  RegistrationsCount?: number;

  /**
   * <p>The date when this activation can no longer be used to register managed nodes.</p>
   */
  ExpirationDate?: Date;

  /**
   * <p>Whether or not the activation is expired.</p>
   */
  Expired?: boolean;

  /**
   * <p>The date the activation was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>Tags assigned to the activation.</p>
   */
  Tags?: Tag[];
}

export enum ResourceTypeForTagging {
  ASSOCIATION = "Association",
  AUTOMATION = "Automation",
  DOCUMENT = "Document",
  MAINTENANCE_WINDOW = "MaintenanceWindow",
  MANAGED_INSTANCE = "ManagedInstance",
  OPSMETADATA = "OpsMetadata",
  OPS_ITEM = "OpsItem",
  PARAMETER = "Parameter",
  PATCH_BASELINE = "PatchBaseline",
}

export interface AddTagsToResourceRequest {
  /**
   * <p>Specifies the type of resource you are tagging.</p>
   *          <note>
   *             <p>The <code>ManagedInstance</code> type for this API operation is for on-premises managed
   *     nodes. You must specify the name of the managed node in the following format:
   *       <code>mi-<i>ID_number</i>
   *                </code>. For example,
   *     <code>mi-1a2b3c4d5e6f</code>.</p>
   *          </note>
   */
  ResourceType: ResourceTypeForTagging | string | undefined;

  /**
   * <p>The resource ID you want to tag.</p>
   *          <p>Use the ID of the resource. Here are some examples:</p>
   *          <p>
   *             <code>MaintenanceWindow</code>: <code>mw-012345abcde</code>
   *          </p>
   *          <p>
   *             <code>PatchBaseline</code>: <code>pb-012345abcde</code>
   *          </p>
   *          <p>
   *             <code>Automation</code>: <code>example-c160-4567-8519-012345abcde</code>
   *          </p>
   *          <p>
   *             <code>OpsMetadata</code> object: <code>ResourceID</code> for tagging is created from the
   *    Amazon Resource Name (ARN) for the object. Specifically, <code>ResourceID</code> is created from
   *    the strings that come after the word <code>opsmetadata</code> in the ARN. For example, an
   *    OpsMetadata object with an ARN of
   *     <code>arn:aws:ssm:us-east-2:1234567890:opsmetadata/aws/ssm/MyGroup/appmanager</code> has a
   *     <code>ResourceID</code> of either <code>aws/ssm/MyGroup/appmanager</code> or
   *     <code>/aws/ssm/MyGroup/appmanager</code>.</p>
   *          <p>For the <code>Document</code> and <code>Parameter</code> values, use the name of the
   *    resource.</p>
   *          <p>
   *             <code>ManagedInstance</code>: <code>mi-012345abcde</code>
   *          </p>
   *          <note>
   *             <p>The <code>ManagedInstance</code> type for this API operation is only for on-premises
   *     managed nodes. You must specify the name of the managed node in the following format:
   *       <code>mi-<i>ID_number</i>
   *                </code>. For example,
   *     <code>mi-1a2b3c4d5e6f</code>.</p>
   *          </note>
   */
  ResourceId: string | undefined;

  /**
   * <p>One or more tags. The value parameter is required.</p>
   *          <important>
   *             <p>Don't enter personally identifiable information in this field.</p>
   *          </important>
   */
  Tags: Tag[] | undefined;
}

export interface AddTagsToResourceResult {}

/**
 * <p>An error occurred on the server side.</p>
 */
export class InternalServerError extends __BaseException {
  readonly name: "InternalServerError" = "InternalServerError";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerError, __BaseException>) {
    super({
      name: "InternalServerError",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerError.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The resource ID isn't valid. Verify that you entered the correct ID and try again.</p>
 */
export class InvalidResourceId extends __BaseException {
  readonly name: "InvalidResourceId" = "InvalidResourceId";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidResourceId, __BaseException>) {
    super({
      name: "InvalidResourceId",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidResourceId.prototype);
  }
}

/**
 * <p>The resource type isn't valid. For example, if you are attempting to tag an EC2 instance,
 *    the instance must be a registered managed node.</p>
 */
export class InvalidResourceType extends __BaseException {
  readonly name: "InvalidResourceType" = "InvalidResourceType";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidResourceType, __BaseException>) {
    super({
      name: "InvalidResourceType",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidResourceType.prototype);
  }
}

/**
 * <p>The <code>Targets</code> parameter includes too many tags. Remove one or more tags and try
 *    the command again.</p>
 */
export class TooManyTagsError extends __BaseException {
  readonly name: "TooManyTagsError" = "TooManyTagsError";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsError, __BaseException>) {
    super({
      name: "TooManyTagsError",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsError.prototype);
  }
}

/**
 * <p>There are concurrent updates for a resource that supports one update at a time.</p>
 */
export class TooManyUpdates extends __BaseException {
  readonly name: "TooManyUpdates" = "TooManyUpdates";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyUpdates, __BaseException>) {
    super({
      name: "TooManyUpdates",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyUpdates.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A CloudWatch alarm you apply to an automation or command.</p>
 */
export interface Alarm {
  /**
   * <p>The name of your CloudWatch alarm.</p>
   */
  Name: string | undefined;
}

/**
 * <p>The details for the CloudWatch alarm you want to apply to an automation or
 *    command.</p>
 */
export interface AlarmConfiguration {
  /**
   * <p>If you specify <code>true</code> for this value, your automation or command continue to run
   *    even if we can't gather information about the state of your CloudWatch alarm. The default
   *    value is <code>false</code>.</p>
   */
  IgnorePollAlarmFailure?: boolean;

  /**
   * <p>The name of the CloudWatch alarm specified in the configuration.</p>
   */
  Alarms: Alarm[] | undefined;
}

export enum ExternalAlarmState {
  ALARM = "ALARM",
  UNKNOWN = "UNKNOWN",
}

/**
 * <p>The details about the state of your CloudWatch alarm.</p>
 */
export interface AlarmStateInformation {
  /**
   * <p>The name of your CloudWatch alarm.</p>
   */
  Name: string | undefined;

  /**
   * <p>The state of your CloudWatch alarm.</p>
   */
  State: ExternalAlarmState | string | undefined;
}

/**
 * <p>Error returned if an attempt is made to register a patch group with a patch baseline that is
 *    already registered with a different patch baseline.</p>
 */
export class AlreadyExistsException extends __BaseException {
  readonly name: "AlreadyExistsException" = "AlreadyExistsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AlreadyExistsException, __BaseException>) {
    super({
      name: "AlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AlreadyExistsException.prototype);
    this.Message = opts.Message;
  }
}

export interface AssociateOpsItemRelatedItemRequest {
  /**
   * <p>The ID of the OpsItem to which you want to associate a resource as a related item.</p>
   */
  OpsItemId: string | undefined;

  /**
   * <p>The type of association that you want to create between an OpsItem and a resource. OpsCenter
   *    supports <code>IsParentOf</code> and <code>RelatesTo</code> association types.</p>
   */
  AssociationType: string | undefined;

  /**
   * <p>The type of resource that you want to associate with an OpsItem. OpsCenter supports the
   *    following types:</p>
   *          <p>
   *             <code>AWS::SSMIncidents::IncidentRecord</code>: an Incident Manager incident. </p>
   *          <p>
   *             <code>AWS::SSM::Document</code>: a Systems Manager (SSM) document.</p>
   */
  ResourceType: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services resource that you want to associate with the
   *    OpsItem.</p>
   */
  ResourceUri: string | undefined;
}

export interface AssociateOpsItemRelatedItemResponse {
  /**
   * <p>The association ID.</p>
   */
  AssociationId?: string;
}

/**
 * <p>A specified parameter argument isn't valid. Verify the available arguments and try
 *    again.</p>
 */
export class OpsItemInvalidParameterException extends __BaseException {
  readonly name: "OpsItemInvalidParameterException" = "OpsItemInvalidParameterException";
  readonly $fault: "client" = "client";
  ParameterNames?: string[];
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OpsItemInvalidParameterException, __BaseException>) {
    super({
      name: "OpsItemInvalidParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OpsItemInvalidParameterException.prototype);
    this.ParameterNames = opts.ParameterNames;
    this.Message = opts.Message;
  }
}

/**
 * <p>The request caused OpsItems to exceed one or more quotas. For information about OpsItem
 *    quotas, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-learn-more.html#OpsCenter-learn-more-limits">What are the resource limits for OpsCenter?</a>.</p>
 */
export class OpsItemLimitExceededException extends __BaseException {
  readonly name: "OpsItemLimitExceededException" = "OpsItemLimitExceededException";
  readonly $fault: "client" = "client";
  ResourceTypes?: string[];
  Limit?: number;
  LimitType?: string;
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OpsItemLimitExceededException, __BaseException>) {
    super({
      name: "OpsItemLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OpsItemLimitExceededException.prototype);
    this.ResourceTypes = opts.ResourceTypes;
    this.Limit = opts.Limit;
    this.LimitType = opts.LimitType;
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified OpsItem ID doesn't exist. Verify the ID and try again.</p>
 */
export class OpsItemNotFoundException extends __BaseException {
  readonly name: "OpsItemNotFoundException" = "OpsItemNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OpsItemNotFoundException, __BaseException>) {
    super({
      name: "OpsItemNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OpsItemNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The Amazon Resource Name (ARN) is already associated with the OpsItem.</p>
 */
export class OpsItemRelatedItemAlreadyExistsException extends __BaseException {
  readonly name: "OpsItemRelatedItemAlreadyExistsException" = "OpsItemRelatedItemAlreadyExistsException";
  readonly $fault: "client" = "client";
  Message?: string;
  ResourceUri?: string;
  OpsItemId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OpsItemRelatedItemAlreadyExistsException, __BaseException>) {
    super({
      name: "OpsItemRelatedItemAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OpsItemRelatedItemAlreadyExistsException.prototype);
    this.Message = opts.Message;
    this.ResourceUri = opts.ResourceUri;
    this.OpsItemId = opts.OpsItemId;
  }
}

/**
 * <p></p>
 */
export interface CancelCommandRequest {
  /**
   * <p>The ID of the command you want to cancel.</p>
   */
  CommandId: string | undefined;

  /**
   * <p>(Optional) A list of managed node IDs on which you want to cancel the command. If not
   *    provided, the command is canceled on every node on which it was requested.</p>
   */
  InstanceIds?: string[];
}

/**
 * <p>Whether or not the command was successfully canceled. There is no guarantee that a request
 *    can be canceled.</p>
 */
export interface CancelCommandResult {}

/**
 * <p>You can't specify a managed node ID in more than one association.</p>
 */
export class DuplicateInstanceId extends __BaseException {
  readonly name: "DuplicateInstanceId" = "DuplicateInstanceId";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicateInstanceId, __BaseException>) {
    super({
      name: "DuplicateInstanceId",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicateInstanceId.prototype);
  }
}

/**
 * <p>The specified command ID isn't valid. Verify the ID and try again.</p>
 */
export class InvalidCommandId extends __BaseException {
  readonly name: "InvalidCommandId" = "InvalidCommandId";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidCommandId, __BaseException>) {
    super({
      name: "InvalidCommandId",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidCommandId.prototype);
  }
}

/**
 * <p>The following problems can cause this exception:</p>
 *          <ul>
 *             <li>
 *                <p>You don't have permission to access the managed node.</p>
 *             </li>
 *             <li>
 *                <p>Amazon Web Services Systems Manager Agent(SSM Agent) isn't running. Verify that SSM Agent is
 *      running.</p>
 *             </li>
 *             <li>
 *                <p>SSM Agent isn't registered with the SSM endpoint. Try reinstalling SSM Agent.</p>
 *             </li>
 *             <li>
 *                <p>The managed node isn't in valid state. Valid states are: <code>Running</code>,
 *       <code>Pending</code>, <code>Stopped</code>, and <code>Stopping</code>. Invalid states are:
 *       <code>Shutting-down</code> and <code>Terminated</code>.</p>
 *             </li>
 *          </ul>
 */
export class InvalidInstanceId extends __BaseException {
  readonly name: "InvalidInstanceId" = "InvalidInstanceId";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidInstanceId, __BaseException>) {
    super({
      name: "InvalidInstanceId",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidInstanceId.prototype);
    this.Message = opts.Message;
  }
}

export interface CancelMaintenanceWindowExecutionRequest {
  /**
   * <p>The ID of the maintenance window execution to stop.</p>
   */
  WindowExecutionId: string | undefined;
}

export interface CancelMaintenanceWindowExecutionResult {
  /**
   * <p>The ID of the maintenance window execution that has been stopped.</p>
   */
  WindowExecutionId?: string;
}

/**
 * <p>Error returned when the ID specified for a resource, such as a maintenance window or patch
 *    baseline, doesn't exist.</p>
 *          <p>For information about resource quotas in Amazon Web Services Systems Manager, see <a href="https://docs.aws.amazon.com/general/latest/gr/ssm.html#limits_ssm">Systems Manager service quotas</a> in the
 *     <i>Amazon Web Services General Reference</i>.</p>
 */
export class DoesNotExistException extends __BaseException {
  readonly name: "DoesNotExistException" = "DoesNotExistException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DoesNotExistException, __BaseException>) {
    super({
      name: "DoesNotExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DoesNotExistException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Reserved for internal use.</p>
 */
export interface RegistrationMetadataItem {
  /**
   * <p>Reserved for internal use.</p>
   */
  Key: string | undefined;

  /**
   * <p>Reserved for internal use.</p>
   */
  Value: string | undefined;
}

export interface CreateActivationRequest {
  /**
   * <p>A user-defined description of the resource that you want to register with Systems Manager. </p>
   *          <important>
   *             <p>Don't enter personally identifiable information in this field.</p>
   *          </important>
   */
  Description?: string;

  /**
   * <p>The name of the registered, managed node as it will appear in the Amazon Web Services Systems Manager console or when
   *    you use the Amazon Web Services command line tools to list Systems Manager resources.</p>
   *          <important>
   *             <p>Don't enter personally identifiable information in this field.</p>
   *          </important>
   */
  DefaultInstanceName?: string;

  /**
   * <p>The name of the Identity and Access Management (IAM) role that you want to assign to
   *    the managed node. This IAM role must provide AssumeRole permissions for the
   *    Amazon Web Services Systems Manager service principal <code>ssm.amazonaws.com</code>. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-service-role.html">Create an
   *      IAM service role for a hybrid environment</a> in the
   *     <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   *          <note>
   *             <p>You can't specify an IAM service-linked role for this parameter. You must
   *     create a unique role.</p>
   *          </note>
   */
  IamRole: string | undefined;

  /**
   * <p>Specify the maximum number of managed nodes you want to register. The default value is
   *     <code>1</code>.</p>
   */
  RegistrationLimit?: number;

  /**
   * <p>The date by which this activation request should expire, in timestamp format, such as
   *    "2021-07-07T00:00:00". You can specify a date up to 30 days in advance. If you don't provide an
   *    expiration date, the activation code expires in 24 hours.</p>
   */
  ExpirationDate?: Date;

  /**
   * <p>Optional metadata that you assign to a resource. Tags enable you to categorize a resource in
   *    different ways, such as by purpose, owner, or environment. For example, you might want to tag an
   *    activation to identify which servers or virtual machines (VMs) in your on-premises environment
   *    you intend to activate. In this case, you could specify the following key-value pairs:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Key=OS,Value=Windows</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Key=Environment,Value=Production</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <important>
   *             <p>When you install SSM Agent on your on-premises servers and VMs, you specify an activation ID
   *     and code. When you specify the activation ID and code, tags assigned to the activation are
   *     automatically applied to the on-premises servers or VMs.</p>
   *          </important>
   *          <p>You can't add tags to or delete tags from an existing activation. You can tag your
   *    on-premises servers, edge devices, and VMs after they connect to Systems Manager for the first time and are
   *    assigned a managed node ID. This means they are listed in the Amazon Web Services Systems Manager console with an ID that
   *    is prefixed with "mi-". For information about how to add tags to your managed nodes, see <a>AddTagsToResource</a>. For information about how to remove tags from your managed nodes,
   *    see <a>RemoveTagsFromResource</a>.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Reserved for internal use.</p>
   */
  RegistrationMetadata?: RegistrationMetadataItem[];
}

export interface CreateActivationResult {
  /**
   * <p>The ID number generated by the system when it processed the activation. The activation ID
   *    functions like a user name.</p>
   */
  ActivationId?: string;

  /**
   * <p>The code the system generates when it processes the activation. The activation code
   *    functions like a password to validate the activation ID. </p>
   */
  ActivationCode?: string;
}

/**
 * <p>You must specify values for all required parameters in the Amazon Web Services Systems Manager document (SSM
 *    document). You can only supply values to parameters defined in the SSM document.</p>
 */
export class InvalidParameters extends __BaseException {
  readonly name: "InvalidParameters" = "InvalidParameters";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameters, __BaseException>) {
    super({
      name: "InvalidParameters",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameters.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified association already exists.</p>
 */
export class AssociationAlreadyExists extends __BaseException {
  readonly name: "AssociationAlreadyExists" = "AssociationAlreadyExists";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AssociationAlreadyExists, __BaseException>) {
    super({
      name: "AssociationAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AssociationAlreadyExists.prototype);
  }
}

/**
 * <p>You can have at most 2,000 active associations.</p>
 */
export class AssociationLimitExceeded extends __BaseException {
  readonly name: "AssociationLimitExceeded" = "AssociationLimitExceeded";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AssociationLimitExceeded, __BaseException>) {
    super({
      name: "AssociationLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AssociationLimitExceeded.prototype);
  }
}

export enum AssociationComplianceSeverity {
  Critical = "CRITICAL",
  High = "HIGH",
  Low = "LOW",
  Medium = "MEDIUM",
  Unspecified = "UNSPECIFIED",
}

/**
 * <p>An S3 bucket where you want to store the results of this request.</p>
 */
export interface S3OutputLocation {
  /**
   * <p>The Amazon Web Services Region of the S3 bucket.</p>
   */
  OutputS3Region?: string;

  /**
   * <p>The name of the S3 bucket.</p>
   */
  OutputS3BucketName?: string;

  /**
   * <p>The S3 bucket subfolder.</p>
   */
  OutputS3KeyPrefix?: string;
}

/**
 * <p>An S3 bucket where you want to store the results of this request.</p>
 *          <p>For the minimal permissions required to enable Amazon S3 output for an association,
 *    see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-state-assoc.html">Creating associations</a> in the <i>Systems Manager User Guide</i>. </p>
 */
export interface InstanceAssociationOutputLocation {
  /**
   * <p>An S3 bucket where you want to store the results of this request.</p>
   */
  S3Location?: S3OutputLocation;
}

export enum AssociationSyncCompliance {
  Auto = "AUTO",
  Manual = "MANUAL",
}

/**
 * <p>The combination of Amazon Web Services Regions and Amazon Web Services accounts targeted by the current Automation
 *    execution.</p>
 */
export interface TargetLocation {
  /**
   * <p>The Amazon Web Services accounts targeted by the current Automation execution.</p>
   */
  Accounts?: string[];

  /**
   * <p>The Amazon Web Services Regions targeted by the current Automation execution.</p>
   */
  Regions?: string[];

  /**
   * <p>The maximum number of Amazon Web Services Regions and Amazon Web Services accounts allowed to run the Automation
   *    concurrently.</p>
   */
  TargetLocationMaxConcurrency?: string;

  /**
   * <p>The maximum number of errors allowed before the system stops queueing additional Automation
   *    executions for the currently running Automation.</p>
   */
  TargetLocationMaxErrors?: string;

  /**
   * <p>The Automation execution role used by the currently running Automation. If not specified,
   *    the default value is <code>AWS-SystemsManager-AutomationExecutionRole</code>.</p>
   */
  ExecutionRoleName?: string;

  /**
   * <p>The details for the CloudWatch alarm you want to apply to an automation or
   *    command.</p>
   */
  TargetLocationAlarmConfiguration?: AlarmConfiguration;
}

/**
 * <p>An array of search criteria that targets managed nodes using a key-value pair that you
 *    specify.</p>
 *          <note>
 *             <p> One or more targets must be specified for maintenance window Run Command-type tasks.
 *     Depending on the task, targets are optional for other maintenance window task types (Automation,
 *      Lambda, and Step Functions). For more information about running tasks
 *     that don't specify targets, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/maintenance-windows-targetless-tasks.html">Registering
 *      maintenance window tasks without targets</a> in the
 *     <i>Amazon Web Services Systems Manager User Guide</i>.</p>
 *          </note>
 *          <p>Supported formats include the following.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>Key=InstanceIds,Values=<instance-id-1>,<instance-id-2>,<instance-id-3></code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Key=tag:<my-tag-key>,Values=<my-tag-value-1>,<my-tag-value-2></code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Key=tag-key,Values=<my-tag-key-1>,<my-tag-key-2></code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Run Command and Maintenance window targets only</b>:
 *       <code>Key=resource-groups:Name,Values=<resource-group-name></code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Maintenance window targets only</b>:
 *       <code>Key=resource-groups:ResourceTypeFilters,Values=<resource-type-1>,<resource-type-2></code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Automation targets only</b>:
 *       <code>Key=ResourceGroup;Values=<resource-group-name></code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>For example:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>Key=InstanceIds,Values=i-02573cafcfEXAMPLE,i-0471e04240EXAMPLE,i-07782c72faEXAMPLE</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Key=tag:CostCenter,Values=CostCenter1,CostCenter2,CostCenter3</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Key=tag-key,Values=Name,Instance-Type,CostCenter</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Run Command and Maintenance window targets only</b>:
 *       <code>Key=resource-groups:Name,Values=ProductionResourceGroup</code>
 *                </p>
 *                <p>This example demonstrates how to target all resources in the resource group <b>ProductionResourceGroup</b> in your maintenance window.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Maintenance window targets only</b>:
 *       <code>Key=resource-groups:ResourceTypeFilters,Values=AWS::EC2::INSTANCE,AWS::EC2::VPC</code>
 *                </p>
 *                <p>This example demonstrates how to target only Amazon Elastic Compute Cloud (Amazon EC2)
 *      instances and VPCs in your maintenance window.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Automation targets only</b>:
 *       <code>Key=ResourceGroup,Values=MyResourceGroup</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>State Manager association targets only</b>:
 *       <code>Key=InstanceIds,Values=*</code>
 *                </p>
 *                <p>This example demonstrates how to target all managed instances in the Amazon Web Services Region where
 *      the association was created.</p>
 *             </li>
 *          </ul>
 *          <p>For more information about how to send commands that target managed nodes using
 *     <code>Key,Value</code> parameters, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/send-commands-multiple.html#send-commands-targeting">Targeting multiple instances</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
 */
export interface Target {
  /**
   * <p>User-defined criteria for sending commands that target managed nodes that meet the
   *    criteria.</p>
   */
  Key?: string;

  /**
   * <p>User-defined criteria that maps to <code>Key</code>. For example, if you specified
   *     <code>tag:ServerRole</code>, you could specify <code>value:WebServer</code> to run a command on
   *    instances that include EC2 tags of <code>ServerRole,WebServer</code>. </p>
   *          <p>Depending on the type of target, the maximum number of values for a key might be lower than
   *    the global maximum of 50.</p>
   */
  Values?: string[];
}

export interface CreateAssociationRequest {
  /**
   * <p>The name of the SSM Command document or Automation runbook that contains the configuration
   *    information for the managed node.</p>
   *          <p>You can specify Amazon Web Services-predefined documents, documents you created, or a document that is
   *    shared with you from another account.</p>
   *          <p>For Systems Manager documents (SSM documents) that are shared with you from other Amazon Web Services accounts, you
   *    must specify the complete SSM document ARN, in the following format:</p>
   *          <p>
   *             <code>arn:<i>partition</i>:ssm:<i>region</i>:<i>account-id</i>:document/<i>document-name</i>
   *             </code>
   *          </p>
   *          <p>For example:</p>
   *          <p>
   *             <code>arn:aws:ssm:us-east-2:12345678912:document/My-Shared-Document</code>
   *          </p>
   *          <p>For Amazon Web Services-predefined documents and SSM documents you created in your account, you only need
   *    to specify the document name. For example, <code>AWS-ApplyPatchBaseline</code> or
   *     <code>My-Document</code>.</p>
   */
  Name: string | undefined;

  /**
   * <p>The document version you want to associate with the target(s). Can be a specific version or
   *    the default version.</p>
   *          <important>
   *             <p>State Manager doesn't support running associations that use a new version of a document if
   *     that document is shared from another account. State Manager always runs the <code>default</code>
   *     version of a document if shared from another account, even though the Systems Manager console shows that a
   *     new version was processed. If you want to run an association using a new version of a document
   *     shared form another account, you must set the document version to <code>default</code>.</p>
   *          </important>
   */
  DocumentVersion?: string;

  /**
   * <p>The managed node ID.</p>
   *          <note>
   *             <p>
   *                <code>InstanceId</code> has been deprecated. To specify a managed node ID for an
   *     association, use the <code>Targets</code> parameter. Requests that
   *     include the parameter <code>InstanceID</code> with Systems Manager documents (SSM documents) that use
   *     schema version 2.0 or later will fail. In addition, if you use the
   *     parameter <code>InstanceId</code>, you can't use the parameters <code>AssociationName</code>,
   *      <code>DocumentVersion</code>, <code>MaxErrors</code>, <code>MaxConcurrency</code>,
   *      <code>OutputLocation</code>, or <code>ScheduleExpression</code>. To use these parameters, you
   *     must use the <code>Targets</code> parameter.</p>
   *          </note>
   */
  InstanceId?: string;

  /**
   * <p>The parameters for the runtime configuration of the document.</p>
   */
  Parameters?: Record<string, string[]>;

  /**
   * <p>The targets for the association. You can target managed nodes by using tags, Amazon Web Services resource
   *    groups, all managed nodes in an Amazon Web Services account, or individual managed node IDs. You can target all
   *    managed nodes in an Amazon Web Services account by specifying the <code>InstanceIds</code> key with a value of
   *     <code>*</code>. For more information about choosing targets for an association, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-state-manager-targets-and-rate-controls.html">Using targets and rate controls with State Manager associations</a> in the
   *     <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   */
  Targets?: Target[];

  /**
   * <p>A cron expression when the association will be applied to the target(s).</p>
   */
  ScheduleExpression?: string;

  /**
   * <p>An Amazon Simple Storage Service (Amazon S3) bucket where you want to store the output
   *    details of the request.</p>
   */
  OutputLocation?: InstanceAssociationOutputLocation;

  /**
   * <p>Specify a descriptive name for the association.</p>
   */
  AssociationName?: string;

  /**
   * <p>Choose the parameter that will define how your automation will branch out. This target is
   *    required for associations that use an Automation runbook and target resources by using rate
   *    controls. Automation is a capability of Amazon Web Services Systems Manager.</p>
   */
  AutomationTargetParameterName?: string;

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
   */
  MaxErrors?: string;

  /**
   * <p>The maximum number of targets allowed to run the association at the same time. You can
   *    specify a number, for example 10, or a percentage of the target set, for example 10%. The default
   *    value is 100%, which means all targets run the association at the same time.</p>
   *          <p>If a new managed node starts and attempts to run an association while Systems Manager is running
   *     <code>MaxConcurrency</code> associations, the association is allowed to run. During the next
   *    association interval, the new managed node will process its association within the limit
   *    specified for <code>MaxConcurrency</code>.</p>
   */
  MaxConcurrency?: string;

  /**
   * <p>The severity level to assign to the association.</p>
   */
  ComplianceSeverity?: AssociationComplianceSeverity | string;

  /**
   * <p>The mode for generating association compliance. You can specify <code>AUTO</code> or
   *     <code>MANUAL</code>. In <code>AUTO</code> mode, the system uses the status of the association
   *    execution to determine the compliance status. If the association execution runs successfully,
   *    then the association is <code>COMPLIANT</code>. If the association execution doesn't run
   *    successfully, the association is <code>NON-COMPLIANT</code>.</p>
   *          <p>In <code>MANUAL</code> mode, you must specify the <code>AssociationId</code> as a parameter
   *    for the <a>PutComplianceItems</a> API operation. In this case, compliance data isn't
   *    managed by State Manager. It is managed by your direct call to the <a>PutComplianceItems</a> API operation.</p>
   *          <p>By default, all associations use <code>AUTO</code> mode.</p>
   */
  SyncCompliance?: AssociationSyncCompliance | string;

  /**
   * <p>By default, when you create a new association, the system runs it immediately after it is
   *    created and then according to the schedule you specified. Specify this option if you don't want
   *    an association to run immediately after you create it. This parameter isn't supported for rate
   *    expressions.</p>
   */
  ApplyOnlyAtCronInterval?: boolean;

  /**
   * <p>The names or Amazon Resource Names (ARNs) of the Change Calendar type documents you want to
   *    gate your associations under. The associations only run when that change calendar is open. For
   *    more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-change-calendar">Amazon Web Services Systems Manager Change
   *     Calendar</a>.</p>
   */
  CalendarNames?: string[];

  /**
   * <p>A location is a combination of Amazon Web Services Regions and Amazon Web Services accounts where you want to run the
   *    association. Use this action to create an association in multiple Regions and multiple
   *    accounts.</p>
   */
  TargetLocations?: TargetLocation[];

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
   */
  ScheduleOffset?: number;

  /**
   * <p>A key-value mapping of document parameters to target resources. Both Targets and TargetMaps
   *    can't be specified together.</p>
   */
  TargetMaps?: Record<string, string[]>[];

  /**
   * <p>Adds or overwrites one or more tags for a State Manager association.
   *     <i>Tags</i> are metadata that you can assign to your Amazon Web Services resources. Tags enable
   *    you to categorize your resources in different ways, for example, by purpose, owner, or
   *    environment. Each tag consists of a key and an optional value, both of which you define. </p>
   */
  Tags?: Tag[];

  /**
   * <p>The details for the CloudWatch alarm you want to apply to an automation or
   *    command.</p>
   */
  AlarmConfiguration?: AlarmConfiguration;
}

/**
 * <p>Information about the association.</p>
 */
export interface AssociationOverview {
  /**
   * <p>The status of the association. Status can be: Pending, Success, or Failed.</p>
   */
  Status?: string;

  /**
   * <p>A detailed status of the association.</p>
   */
  DetailedStatus?: string;

  /**
   * <p>Returns the number of targets for the association status. For example, if you created an
   *    association with two managed nodes, and one of them was successful, this would return the count
   *    of managed nodes by status.</p>
   */
  AssociationStatusAggregatedCount?: Record<string, number>;
}

export enum AssociationStatusName {
  Failed = "Failed",
  Pending = "Pending",
  Success = "Success",
}

/**
 * <p>Describes an association status.</p>
 */
export interface AssociationStatus {
  /**
   * <p>The date when the status changed.</p>
   */
  Date: Date | undefined;

  /**
   * <p>The status.</p>
   */
  Name: AssociationStatusName | string | undefined;

  /**
   * <p>The reason for the status.</p>
   */
  Message: string | undefined;

  /**
   * <p>A user-defined string.</p>
   */
  AdditionalInfo?: string;
}

/**
 * <p>Describes the parameters for a document.</p>
 */
export interface AssociationDescription {
  /**
   * <p>The name of the SSM document.</p>
   */
  Name?: string;

  /**
   * <p>The managed node ID.</p>
   */
  InstanceId?: string;

  /**
   * <p>The association version.</p>
   */
  AssociationVersion?: string;

  /**
   * <p>The date when the association was made.</p>
   */
  Date?: Date;

  /**
   * <p>The date when the association was last updated.</p>
   */
  LastUpdateAssociationDate?: Date;

  /**
   * <p>The association status.</p>
   */
  Status?: AssociationStatus;

  /**
   * <p>Information about the association.</p>
   */
  Overview?: AssociationOverview;

  /**
   * <p>The document version.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>Choose the parameter that will define how your automation will branch out. This target is
   *    required for associations that use an Automation runbook and target resources by using rate
   *    controls. Automation is a capability of Amazon Web Services Systems Manager.</p>
   */
  AutomationTargetParameterName?: string;

  /**
   * <p>A description of the parameters for a document. </p>
   */
  Parameters?: Record<string, string[]>;

  /**
   * <p>The association ID.</p>
   */
  AssociationId?: string;

  /**
   * <p>The managed nodes targeted by the request. </p>
   */
  Targets?: Target[];

  /**
   * <p>A cron expression that specifies a schedule when the association runs.</p>
   */
  ScheduleExpression?: string;

  /**
   * <p>An S3 bucket where you want to store the output details of the request.</p>
   */
  OutputLocation?: InstanceAssociationOutputLocation;

  /**
   * <p>The date on which the association was last run.</p>
   */
  LastExecutionDate?: Date;

  /**
   * <p>The last date on which the association was successfully run.</p>
   */
  LastSuccessfulExecutionDate?: Date;

  /**
   * <p>The association name.</p>
   */
  AssociationName?: string;

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
   */
  MaxErrors?: string;

  /**
   * <p>The maximum number of targets allowed to run the association at the same time. You can
   *    specify a number, for example 10, or a percentage of the target set, for example 10%. The default
   *    value is 100%, which means all targets run the association at the same time.</p>
   *          <p>If a new managed node starts and attempts to run an association while Systems Manager is running
   *     <code>MaxConcurrency</code> associations, the association is allowed to run. During the next
   *    association interval, the new managed node will process its association within the limit
   *    specified for <code>MaxConcurrency</code>.</p>
   */
  MaxConcurrency?: string;

  /**
   * <p>The severity level that is assigned to the association.</p>
   */
  ComplianceSeverity?: AssociationComplianceSeverity | string;

  /**
   * <p>The mode for generating association compliance. You can specify <code>AUTO</code> or
   *     <code>MANUAL</code>. In <code>AUTO</code> mode, the system uses the status of the association
   *    execution to determine the compliance status. If the association execution runs successfully,
   *    then the association is <code>COMPLIANT</code>. If the association execution doesn't run
   *    successfully, the association is <code>NON-COMPLIANT</code>.</p>
   *          <p>In <code>MANUAL</code> mode, you must specify the <code>AssociationId</code> as a parameter
   *    for the <a>PutComplianceItems</a> API operation. In this case, compliance data isn't
   *    managed by State Manager, a capability of Amazon Web Services Systems Manager. It is managed by your direct call to the
   *     <a>PutComplianceItems</a> API operation.</p>
   *          <p>By default, all associations use <code>AUTO</code> mode.</p>
   */
  SyncCompliance?: AssociationSyncCompliance | string;

  /**
   * <p>By default, when you create a new associations, the system runs it immediately after it is
   *    created and then according to the schedule you specified. Specify this option if you don't want
   *    an association to run immediately after you create it. This parameter isn't supported for rate
   *    expressions.</p>
   */
  ApplyOnlyAtCronInterval?: boolean;

  /**
   * <p>The names or Amazon Resource Names (ARNs) of the Change Calendar type documents your
   *    associations are gated under. The associations only run when that change calendar is open. For
   *    more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-change-calendar">Amazon Web Services Systems Manager Change
   *     Calendar</a>.</p>
   */
  CalendarNames?: string[];

  /**
   * <p>The combination of Amazon Web Services Regions and Amazon Web Services accounts where you want to run the
   *    association.</p>
   */
  TargetLocations?: TargetLocation[];

  /**
   * <p>Number of days to wait after the scheduled day to run an association.</p>
   */
  ScheduleOffset?: number;

  /**
   * <p>A key-value mapping of document parameters to target resources. Both Targets and TargetMaps
   *    can't be specified together.</p>
   */
  TargetMaps?: Record<string, string[]>[];

  /**
   * <p>The details for the CloudWatch alarm you want to apply to an automation or
   *    command.</p>
   */
  AlarmConfiguration?: AlarmConfiguration;

  /**
   * <p>The CloudWatch alarm that was invoked during the association.</p>
   */
  TriggeredAlarms?: AlarmStateInformation[];
}

export interface CreateAssociationResult {
  /**
   * <p>Information about the association.</p>
   */
  AssociationDescription?: AssociationDescription;
}

/**
 * <p>The specified SSM document doesn't exist.</p>
 */
export class InvalidDocument extends __BaseException {
  readonly name: "InvalidDocument" = "InvalidDocument";
  readonly $fault: "client" = "client";
  /**
   * <p>The SSM document doesn't exist or the document isn't available to the user. This exception
   *    can be issued by various API operations. </p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDocument, __BaseException>) {
    super({
      name: "InvalidDocument",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDocument.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The document version isn't valid or doesn't exist.</p>
 */
export class InvalidDocumentVersion extends __BaseException {
  readonly name: "InvalidDocumentVersion" = "InvalidDocumentVersion";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDocumentVersion, __BaseException>) {
    super({
      name: "InvalidDocumentVersion",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDocumentVersion.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The output location isn't valid or doesn't exist.</p>
 */
export class InvalidOutputLocation extends __BaseException {
  readonly name: "InvalidOutputLocation" = "InvalidOutputLocation";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidOutputLocation, __BaseException>) {
    super({
      name: "InvalidOutputLocation",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidOutputLocation.prototype);
  }
}

/**
 * <p>The schedule is invalid. Verify your cron or rate expression and try again.</p>
 */
export class InvalidSchedule extends __BaseException {
  readonly name: "InvalidSchedule" = "InvalidSchedule";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSchedule, __BaseException>) {
    super({
      name: "InvalidSchedule",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSchedule.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified tag key or value isn't valid.</p>
 */
export class InvalidTag extends __BaseException {
  readonly name: "InvalidTag" = "InvalidTag";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTag, __BaseException>) {
    super({
      name: "InvalidTag",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTag.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The target isn't valid or doesn't exist. It might not be configured for Systems Manager or you might
 *    not have permission to perform the operation.</p>
 */
export class InvalidTarget extends __BaseException {
  readonly name: "InvalidTarget" = "InvalidTarget";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTarget, __BaseException>) {
    super({
      name: "InvalidTarget",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTarget.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>TargetMap parameter isn't valid.</p>
 */
export class InvalidTargetMaps extends __BaseException {
  readonly name: "InvalidTargetMaps" = "InvalidTargetMaps";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTargetMaps, __BaseException>) {
    super({
      name: "InvalidTargetMaps",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTargetMaps.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The document doesn't support the platform type of the given managed node ID(s). For example,
 *    you sent an document for a Windows managed node to a Linux node.</p>
 */
export class UnsupportedPlatformType extends __BaseException {
  readonly name: "UnsupportedPlatformType" = "UnsupportedPlatformType";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedPlatformType, __BaseException>) {
    super({
      name: "UnsupportedPlatformType",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedPlatformType.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Describes the association of a Amazon Web Services Systems Manager document (SSM document) and a managed node.</p>
 */
export interface CreateAssociationBatchRequestEntry {
  /**
   * <p>The name of the SSM document that contains the configuration information for the managed
   *    node. You can specify Command or Automation runbooks.</p>
   *          <p>You can specify Amazon Web Services-predefined documents, documents you created, or a document that is
   *    shared with you from another account.</p>
   *          <p>For SSM documents that are shared with you from other Amazon Web Services accounts, you must specify the
   *    complete SSM document ARN, in the following format:</p>
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
   */
  Name: string | undefined;

  /**
   * <p>The managed node ID.</p>
   *          <note>
   *             <p>
   *                <code>InstanceId</code> has been deprecated. To specify a managed node ID for an
   *     association, use the <code>Targets</code> parameter. Requests that
   *     include the parameter <code>InstanceID</code> with Systems Manager documents (SSM documents) that use
   *     schema version 2.0 or later will fail. In addition, if you use the
   *     parameter <code>InstanceId</code>, you can't use the parameters <code>AssociationName</code>,
   *      <code>DocumentVersion</code>, <code>MaxErrors</code>, <code>MaxConcurrency</code>,
   *      <code>OutputLocation</code>, or <code>ScheduleExpression</code>. To use these parameters, you
   *     must use the <code>Targets</code> parameter.</p>
   *          </note>
   */
  InstanceId?: string;

  /**
   * <p>A description of the parameters for a document. </p>
   */
  Parameters?: Record<string, string[]>;

  /**
   * <p>Specify the target for the association. This target is required for associations that use an
   *    Automation runbook and target resources by using rate controls. Automation is a capability of
   *    Amazon Web Services Systems Manager.</p>
   */
  AutomationTargetParameterName?: string;

  /**
   * <p>The document version.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>The managed nodes targeted by the request.</p>
   */
  Targets?: Target[];

  /**
   * <p>A cron expression that specifies a schedule when the association runs.</p>
   */
  ScheduleExpression?: string;

  /**
   * <p>An S3 bucket where you want to store the results of this request.</p>
   */
  OutputLocation?: InstanceAssociationOutputLocation;

  /**
   * <p>Specify a descriptive name for the association.</p>
   */
  AssociationName?: string;

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
   */
  MaxErrors?: string;

  /**
   * <p>The maximum number of targets allowed to run the association at the same time. You can
   *    specify a number, for example 10, or a percentage of the target set, for example 10%. The default
   *    value is 100%, which means all targets run the association at the same time.</p>
   *          <p>If a new managed node starts and attempts to run an association while Systems Manager is running
   *     <code>MaxConcurrency</code> associations, the association is allowed to run. During the next
   *    association interval, the new managed node will process its association within the limit
   *    specified for <code>MaxConcurrency</code>.</p>
   */
  MaxConcurrency?: string;

  /**
   * <p>The severity level to assign to the association.</p>
   */
  ComplianceSeverity?: AssociationComplianceSeverity | string;

  /**
   * <p>The mode for generating association compliance. You can specify <code>AUTO</code> or
   *     <code>MANUAL</code>. In <code>AUTO</code> mode, the system uses the status of the association
   *    execution to determine the compliance status. If the association execution runs successfully,
   *    then the association is <code>COMPLIANT</code>. If the association execution doesn't run
   *    successfully, the association is <code>NON-COMPLIANT</code>. </p>
   *          <p>In <code>MANUAL</code> mode, you must specify the <code>AssociationId</code> as a parameter
   *    for the <a>PutComplianceItems</a> API operation. In this case, compliance data isn't
   *    managed by State Manager, a capability of Amazon Web Services Systems Manager. It is managed by your direct call to the
   *     <a>PutComplianceItems</a> API operation.</p>
   *          <p>By default, all associations use <code>AUTO</code> mode.</p>
   */
  SyncCompliance?: AssociationSyncCompliance | string;

  /**
   * <p>By default, when you create a new associations, the system runs it immediately after it is
   *    created and then according to the schedule you specified. Specify this option if you don't want
   *    an association to run immediately after you create it. This parameter isn't supported for rate
   *    expressions.</p>
   */
  ApplyOnlyAtCronInterval?: boolean;

  /**
   * <p>The names or Amazon Resource Names (ARNs) of the Change Calendar type documents your
   *    associations are gated under. The associations only run when that Change Calendar is open. For
   *    more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-change-calendar">Amazon Web Services Systems Manager Change
   *     Calendar</a>.</p>
   */
  CalendarNames?: string[];

  /**
   * <p>Use this action to create an association in multiple Regions and multiple accounts.</p>
   */
  TargetLocations?: TargetLocation[];

  /**
   * <p>Number of days to wait after the scheduled day to run an association.</p>
   */
  ScheduleOffset?: number;

  /**
   * <p>A key-value mapping of document parameters to target resources. Both Targets and TargetMaps
   *    can't be specified together.</p>
   */
  TargetMaps?: Record<string, string[]>[];

  /**
   * <p>The details for the CloudWatch alarm you want to apply to an automation or
   *    command.</p>
   */
  AlarmConfiguration?: AlarmConfiguration;
}

export interface CreateAssociationBatchRequest {
  /**
   * <p>One or more associations.</p>
   */
  Entries: CreateAssociationBatchRequestEntry[] | undefined;
}

export enum Fault {
  Client = "Client",
  Server = "Server",
  Unknown = "Unknown",
}

/**
 * <p>Describes a failed association.</p>
 */
export interface FailedCreateAssociation {
  /**
   * <p>The association.</p>
   */
  Entry?: CreateAssociationBatchRequestEntry;

  /**
   * <p>A description of the failure.</p>
   */
  Message?: string;

  /**
   * <p>The source of the failure.</p>
   */
  Fault?: Fault | string;
}

export interface CreateAssociationBatchResult {
  /**
   * <p>Information about the associations that succeeded.</p>
   */
  Successful?: AssociationDescription[];

  /**
   * <p>Information about the associations that failed.</p>
   */
  Failed?: FailedCreateAssociation[];
}

export enum AttachmentsSourceKey {
  AttachmentReference = "AttachmentReference",
  S3FileUrl = "S3FileUrl",
  SourceUrl = "SourceUrl",
}

/**
 * <p>Identifying information about a document attachment, including the file name and a key-value
 *    pair that identifies the location of an attachment to a document.</p>
 */
export interface AttachmentsSource {
  /**
   * <p>The key of a key-value pair that identifies the location of an attachment to a
   *    document.</p>
   */
  Key?: AttachmentsSourceKey | string;

  /**
   * <p>The value of a key-value pair that identifies the location of an attachment to a document.
   *    The format for <b>Value</b> depends on the type of key you
   *    specify.</p>
   *          <ul>
   *             <li>
   *                <p>For the key <i>SourceUrl</i>, the value is an S3 bucket location. For
   *      example:</p>
   *                <p>
   *                   <code>"Values": [ "s3://doc-example-bucket/my-folder" ]</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For the key <i>S3FileUrl</i>, the value is a file in an S3 bucket. For
   *      example:</p>
   *                <p>
   *                   <code>"Values": [ "s3://doc-example-bucket/my-folder/my-file.py" ]</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For the key <i>AttachmentReference</i>, the value is constructed from the
   *      name of another SSM document in your account, a version number of that document, and a file
   *      attached to that document version that you want to reuse. For example:</p>
   *                <p>
   *                   <code>"Values": [ "MyOtherDocument/3/my-other-file.py" ]</code>
   *                </p>
   *                <p>However, if the SSM document is shared with you from another account, the full SSM
   *      document ARN must be specified instead of the document name only. For example:</p>
   *                <p>
   *                   <code>"Values": [
   *       "arn:aws:ssm:us-east-2:111122223333:document/OtherAccountDocument/3/their-file.py"
   *       ]</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Values?: string[];

  /**
   * <p>The name of the document attachment file.</p>
   */
  Name?: string;
}

export enum DocumentFormat {
  JSON = "JSON",
  TEXT = "TEXT",
  YAML = "YAML",
}

export enum DocumentType {
  ApplicationConfiguration = "ApplicationConfiguration",
  ApplicationConfigurationSchema = "ApplicationConfigurationSchema",
  Automation = "Automation",
  ChangeCalendar = "ChangeCalendar",
  ChangeTemplate = "Automation.ChangeTemplate",
  CloudFormation = "CloudFormation",
  Command = "Command",
  ConformancePackTemplate = "ConformancePackTemplate",
  DeploymentStrategy = "DeploymentStrategy",
  Package = "Package",
  Policy = "Policy",
  ProblemAnalysis = "ProblemAnalysis",
  ProblemAnalysisTemplate = "ProblemAnalysisTemplate",
  QuickSetup = "QuickSetup",
  Session = "Session",
}

/**
 * <p>An SSM document required by the current document.</p>
 */
export interface DocumentRequires {
  /**
   * <p>The name of the required SSM document. The name can be an Amazon Resource Name (ARN).</p>
   */
  Name: string | undefined;

  /**
   * <p>The document version required by the current document.</p>
   */
  Version?: string;

  /**
   * <p>The document type of the required SSM document.</p>
   */
  RequireType?: string;

  /**
   * <p>An optional field specifying the version of the artifact associated with the document. For example, "Release 12, Update 6". This value is unique across all versions of a document, and can't be changed.</p>
   */
  VersionName?: string;
}

export interface CreateDocumentRequest {
  /**
   * <p>The content for the new SSM document in JSON or YAML format. We recommend storing the
   *    contents for your new document in an external JSON or YAML file and referencing the file in a
   *    command.</p>
   *          <p>For examples, see the following topics in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/create-ssm-document-api.html">Create an SSM document (Amazon Web Services API)</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/create-ssm-document-cli.html">Create an SSM document (Amazon Web Services CLI)</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/create-ssm-document-api.html">Create an SSM document (API)</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  Content: string | undefined;

  /**
   * <p>A list of SSM documents required by a document. This parameter is used exclusively by
   *    AppConfig. When a user creates an AppConfig configuration in an SSM document, the user must also
   *    specify a required document for validation purposes. In this case, an
   *     <code>ApplicationConfiguration</code> document requires an
   *     <code>ApplicationConfigurationSchema</code> document for validation purposes. For more
   *    information, see <a href="https://docs.aws.amazon.com/appconfig/latest/userguide/what-is-appconfig.html">What is AppConfig?</a> in the
   *     <i>AppConfig User Guide</i>.</p>
   */
  Requires?: DocumentRequires[];

  /**
   * <p>A list of key-value pairs that describe attachments to a version of a document.</p>
   */
  Attachments?: AttachmentsSource[];

  /**
   * <p>A name for the SSM document.</p>
   *          <important>
   *             <p>You can't use the following strings as document name prefixes. These are reserved by Amazon Web Services
   *     for use as document name prefixes:</p>
   *             <ul>
   *                <li>
   *                   <p>
   *                      <code>aws</code>
   *                   </p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <code>amazon</code>
   *                   </p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <code>amzn</code>
   *                   </p>
   *                </li>
   *             </ul>
   *          </important>
   */
  Name: string | undefined;

  /**
   * <p>An optional field where you can specify a friendly name for the SSM document. This value can
   *    differ for each version of the document. You can update this value at a later time using the
   *     <a>UpdateDocument</a> operation.</p>
   */
  DisplayName?: string;

  /**
   * <p>An optional field specifying the version of the artifact you are creating with the document.
   *    For example, <code>Release12.1</code>. This value is unique across all versions of a document,
   *    and can't be changed.</p>
   */
  VersionName?: string;

  /**
   * <p>The type of document to create.</p>
   *          <note>
   *             <p>The <code>DeploymentStrategy</code> document type is an internal-use-only document type
   *     reserved for AppConfig.</p>
   *          </note>
   */
  DocumentType?: DocumentType | string;

  /**
   * <p>Specify the document format for the request. The document format can be JSON, YAML, or TEXT.
   *    JSON is the default format.</p>
   */
  DocumentFormat?: DocumentFormat | string;

  /**
   * <p>Specify a target type to define the kinds of resources the document can run on. For example,
   *    to run a document on EC2 instances, specify the following value:
   *    <code>/AWS::EC2::Instance</code>. If you specify a value of '/' the document can run on all types
   *    of resources. If you don't specify a value, the document can't run on any resources. For a list
   *    of valid resource types, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services resource and
   *     property types reference</a> in the <i>CloudFormation User Guide</i>. </p>
   */
  TargetType?: string;

  /**
   * <p>Optional metadata that you assign to a resource. Tags enable you to categorize a resource in
   *    different ways, such as by purpose, owner, or environment. For example, you might want to tag an
   *    SSM document to identify the types of targets or the environment where it will run. In this case,
   *    you could specify the following key-value pairs:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Key=OS,Value=Windows</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Key=Environment,Value=Production</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>To add tags to an existing SSM document, use the <a>AddTagsToResource</a>
   *     operation.</p>
   *          </note>
   */
  Tags?: Tag[];
}

/**
 * <p>An attribute of an attachment, such as the attachment name.</p>
 */
export interface AttachmentInformation {
  /**
   * <p>The name of the attachment.</p>
   */
  Name?: string;
}

export enum DocumentHashType {
  SHA1 = "Sha1",
  SHA256 = "Sha256",
}

export enum DocumentParameterType {
  String = "String",
  StringList = "StringList",
}

/**
 * <p>Parameters specified in a System Manager document that run on the server when the command is
 *    run. </p>
 */
export interface DocumentParameter {
  /**
   * <p>The name of the parameter.</p>
   */
  Name?: string;

  /**
   * <p>The type of parameter. The type can be either String or StringList.</p>
   */
  Type?: DocumentParameterType | string;

  /**
   * <p>A description of what the parameter does, how to use it, the default value, and whether or
   *    not the parameter is optional.</p>
   */
  Description?: string;

  /**
   * <p>If specified, the default values for the parameters. Parameters without a default value are
   *    required. Parameters with a default value are optional.</p>
   */
  DefaultValue?: string;
}

export enum PlatformType {
  LINUX = "Linux",
  MACOS = "MacOS",
  WINDOWS = "Windows",
}

export enum ReviewStatus {
  APPROVED = "APPROVED",
  NOT_REVIEWED = "NOT_REVIEWED",
  PENDING = "PENDING",
  REJECTED = "REJECTED",
}

/**
 * <p>Information about the result of a document review request.</p>
 */
export interface ReviewInformation {
  /**
   * <p>The time that the reviewer took action on the document review request.</p>
   */
  ReviewedTime?: Date;

  /**
   * <p>The current status of the document review request.</p>
   */
  Status?: ReviewStatus | string;

  /**
   * <p>The reviewer assigned to take action on the document review request.</p>
   */
  Reviewer?: string;
}

export enum DocumentStatus {
  Active = "Active",
  Creating = "Creating",
  Deleting = "Deleting",
  Failed = "Failed",
  Updating = "Updating",
}

/**
 * <p>Describes an Amazon Web Services Systems Manager document (SSM document). </p>
 */
export interface DocumentDescription {
  /**
   * <p>The SHA1 hash of the document, which you can use for verification.</p>
   */
  Sha1?: string;

  /**
   * <p>The Sha256 or Sha1 hash created by the system when the document was created. </p>
   *          <note>
   *             <p>Sha1 hashes have been deprecated.</p>
   *          </note>
   */
  Hash?: string;

  /**
   * <p>The hash type of the document. Valid values include <code>Sha256</code> or
   *    <code>Sha1</code>.</p>
   *          <note>
   *             <p>Sha1 hashes have been deprecated.</p>
   *          </note>
   */
  HashType?: DocumentHashType | string;

  /**
   * <p>The name of the SSM document.</p>
   */
  Name?: string;

  /**
   * <p>The friendly name of the SSM document. This value can differ for each version of the
   *    document. If you want to update this value, see <a>UpdateDocument</a>.</p>
   */
  DisplayName?: string;

  /**
   * <p>The version of the artifact associated with the document.</p>
   */
  VersionName?: string;

  /**
   * <p>The Amazon Web Services user account that created the document.</p>
   */
  Owner?: string;

  /**
   * <p>The date when the document was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The status of the SSM document.</p>
   */
  Status?: DocumentStatus | string;

  /**
   * <p>A message returned by Amazon Web Services Systems Manager that explains the <code>Status</code> value. For example, a
   *     <code>Failed</code> status might be explained by the <code>StatusInformation</code> message,
   *    "The specified S3 bucket doesn't exist. Verify that the URL of the S3 bucket is correct."</p>
   */
  StatusInformation?: string;

  /**
   * <p>The document version.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>A description of the document. </p>
   */
  Description?: string;

  /**
   * <p>A description of the parameters for a document.</p>
   */
  Parameters?: DocumentParameter[];

  /**
   * <p>The list of operating system (OS) platforms compatible with this SSM document. </p>
   */
  PlatformTypes?: (PlatformType | string)[];

  /**
   * <p>The type of document.</p>
   */
  DocumentType?: DocumentType | string;

  /**
   * <p>The schema version.</p>
   */
  SchemaVersion?: string;

  /**
   * <p>The latest version of the document.</p>
   */
  LatestVersion?: string;

  /**
   * <p>The default version.</p>
   */
  DefaultVersion?: string;

  /**
   * <p>The document format, either JSON or YAML.</p>
   */
  DocumentFormat?: DocumentFormat | string;

  /**
   * <p>The target type which defines the kinds of resources the document can run on. For example,
   *     <code>/AWS::EC2::Instance</code>. For a list of valid resource types, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services resource and
   *     property types reference</a> in the <i>CloudFormation User Guide</i>. </p>
   */
  TargetType?: string;

  /**
   * <p>The tags, or metadata, that have been applied to the document.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Details about the document attachments, including names, locations, sizes, and so on.</p>
   */
  AttachmentsInformation?: AttachmentInformation[];

  /**
   * <p>A list of SSM documents required by a document. For example, an
   *     <code>ApplicationConfiguration</code> document requires an
   *     <code>ApplicationConfigurationSchema</code> document.</p>
   */
  Requires?: DocumentRequires[];

  /**
   * <p>The user in your organization who created the document.</p>
   */
  Author?: string;

  /**
   * <p>Details about the review of a document.</p>
   */
  ReviewInformation?: ReviewInformation[];

  /**
   * <p>The version of the document currently approved for use in the organization.</p>
   */
  ApprovedVersion?: string;

  /**
   * <p>The version of the document that is currently under review.</p>
   */
  PendingReviewVersion?: string;

  /**
   * <p>The current status of the review.</p>
   */
  ReviewStatus?: ReviewStatus | string;

  /**
   * <p>The classification of a document to help you identify and categorize its use.</p>
   */
  Category?: string[];

  /**
   * <p>The value that identifies a document's category.</p>
   */
  CategoryEnum?: string[];
}

export interface CreateDocumentResult {
  /**
   * <p>Information about the SSM document.</p>
   */
  DocumentDescription?: DocumentDescription;
}

/**
 * <p>The specified document already exists.</p>
 */
export class DocumentAlreadyExists extends __BaseException {
  readonly name: "DocumentAlreadyExists" = "DocumentAlreadyExists";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DocumentAlreadyExists, __BaseException>) {
    super({
      name: "DocumentAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DocumentAlreadyExists.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You can have at most 500 active SSM documents.</p>
 */
export class DocumentLimitExceeded extends __BaseException {
  readonly name: "DocumentLimitExceeded" = "DocumentLimitExceeded";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DocumentLimitExceeded, __BaseException>) {
    super({
      name: "DocumentLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DocumentLimitExceeded.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The content for the document isn't valid.</p>
 */
export class InvalidDocumentContent extends __BaseException {
  readonly name: "InvalidDocumentContent" = "InvalidDocumentContent";
  readonly $fault: "client" = "client";
  /**
   * <p>A description of the validation error.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDocumentContent, __BaseException>) {
    super({
      name: "InvalidDocumentContent",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDocumentContent.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The version of the document schema isn't supported.</p>
 */
export class InvalidDocumentSchemaVersion extends __BaseException {
  readonly name: "InvalidDocumentSchemaVersion" = "InvalidDocumentSchemaVersion";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDocumentSchemaVersion, __BaseException>) {
    super({
      name: "InvalidDocumentSchemaVersion",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDocumentSchemaVersion.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The size limit of a document is 64 KB.</p>
 */
export class MaxDocumentSizeExceeded extends __BaseException {
  readonly name: "MaxDocumentSizeExceeded" = "MaxDocumentSizeExceeded";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MaxDocumentSizeExceeded, __BaseException>) {
    super({
      name: "MaxDocumentSizeExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MaxDocumentSizeExceeded.prototype);
    this.Message = opts.Message;
  }
}

export interface CreateMaintenanceWindowRequest {
  /**
   * <p>The name of the maintenance window.</p>
   */
  Name: string | undefined;

  /**
   * <p>An optional description for the maintenance window. We recommend specifying a description to
   *    help you organize your maintenance windows. </p>
   */
  Description?: string;

  /**
   * <p>The date and time, in ISO-8601 Extended format, for when you want the maintenance window to
   *    become active. <code>StartDate</code> allows you to delay activation of the maintenance window
   *    until the specified future date.</p>
   */
  StartDate?: string;

  /**
   * <p>The date and time, in ISO-8601 Extended format, for when you want the maintenance window to
   *    become inactive. <code>EndDate</code> allows you to set a date and time in the future when the
   *    maintenance window will no longer run.</p>
   */
  EndDate?: string;

  /**
   * <p>The schedule of the maintenance window in the form of a cron or rate expression.</p>
   */
  Schedule: string | undefined;

  /**
   * <p>The time zone that the scheduled maintenance window executions are based on, in Internet
   *    Assigned Numbers Authority (IANA) format. For example: "America/Los_Angeles", "UTC", or
   *    "Asia/Seoul". For more information, see the <a href="https://www.iana.org/time-zones">Time
   *     Zone Database</a> on the IANA website.</p>
   */
  ScheduleTimezone?: string;

  /**
   * <p>The number of days to wait after the date and time specified by a cron expression before
   *    running the maintenance window.</p>
   *          <p>For example, the following cron expression schedules a maintenance window to run on the
   *    third Tuesday of every month at 11:30 PM.</p>
   *          <p>
   *             <code>cron(30 23 ? * TUE#3 *)</code>
   *          </p>
   *          <p>If the schedule offset is <code>2</code>, the maintenance window won't run until two days
   *    later.</p>
   */
  ScheduleOffset?: number;

  /**
   * <p>The duration of the maintenance window in hours.</p>
   */
  Duration: number | undefined;

  /**
   * <p>The number of hours before the end of the maintenance window that Amazon Web Services Systems Manager stops scheduling
   *    new tasks for execution.</p>
   */
  Cutoff: number | undefined;

  /**
   * <p>Enables a maintenance window task to run on managed nodes, even if you haven't registered
   *    those nodes as targets. If enabled, then you must specify the unregistered managed nodes (by node
   *    ID) when you register a task with the maintenance window.</p>
   *          <p>If you don't enable this option, then you must specify previously-registered targets when
   *    you register a task with the maintenance window.</p>
   */
  AllowUnassociatedTargets: boolean | undefined;

  /**
   * <p>User-provided idempotency token.</p>
   */
  ClientToken?: string;

  /**
   * <p>Optional metadata that you assign to a resource. Tags enable you to categorize a resource in
   *    different ways, such as by purpose, owner, or environment. For example, you might want to tag a
   *    maintenance window to identify the type of tasks it will run, the types of targets, and the
   *    environment it will run in. In this case, you could specify the following key-value pairs:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Key=TaskType,Value=AgentUpdate</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Key=OS,Value=Windows</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Key=Environment,Value=Production</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>To add tags to an existing maintenance window, use the <a>AddTagsToResource</a>
   *     operation.</p>
   *          </note>
   */
  Tags?: Tag[];
}

export interface CreateMaintenanceWindowResult {
  /**
   * <p>The ID of the created maintenance window.</p>
   */
  WindowId?: string;
}

/**
 * <p>Error returned when an idempotent operation is retried and the parameters don't match the
 *    original call to the API with the same idempotency token. </p>
 */
export class IdempotentParameterMismatch extends __BaseException {
  readonly name: "IdempotentParameterMismatch" = "IdempotentParameterMismatch";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IdempotentParameterMismatch, __BaseException>) {
    super({
      name: "IdempotentParameterMismatch",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IdempotentParameterMismatch.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Error returned when the caller has exceeded the default resource quotas. For example, too
 *    many maintenance windows or patch baselines have been created.</p>
 *          <p>For information about resource quotas in Systems Manager, see <a href="https://docs.aws.amazon.com/general/latest/gr/ssm.html#limits_ssm">Systems Manager service quotas</a> in the
 *     <i>Amazon Web Services General Reference</i>.</p>
 */
export class ResourceLimitExceededException extends __BaseException {
  readonly name: "ResourceLimitExceededException" = "ResourceLimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceLimitExceededException, __BaseException>) {
    super({
      name: "ResourceLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A notification about the OpsItem.</p>
 */
export interface OpsItemNotification {
  /**
   * <p>The Amazon Resource Name (ARN) of an Amazon Simple Notification Service (Amazon SNS) topic where
   *    notifications are sent when this OpsItem is edited or changed.</p>
   */
  Arn?: string;
}

export enum OpsItemDataType {
  SEARCHABLE_STRING = "SearchableString",
  STRING = "String",
}

/**
 * <p>An object that defines the value of the key and its type in the OperationalData map.</p>
 */
export interface OpsItemDataValue {
  /**
   * <p>The value of the OperationalData key.</p>
   */
  Value?: string;

  /**
   * <p>The type of key-value pair. Valid types include <code>SearchableString</code> and
   *     <code>String</code>.</p>
   */
  Type?: OpsItemDataType | string;
}

/**
 * <p>An OpsItems that shares something in common with the current OpsItem. For example, related
 *    OpsItems can include OpsItems with similar error messages, impacted resources, or statuses for
 *    the impacted resource.</p>
 */
export interface RelatedOpsItem {
  /**
   * <p>The ID of an OpsItem related to the current OpsItem.</p>
   */
  OpsItemId: string | undefined;
}

export interface CreateOpsItemRequest {
  /**
   * <p>Information about the OpsItem. </p>
   */
  Description: string | undefined;

  /**
   * <p>The type of OpsItem to create. Systems Manager supports the following types of OpsItems:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>/aws/issue</code>
   *                </p>
   *                <p>This type of OpsItem is used for default OpsItems created by OpsCenter. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/aws/changerequest</code>
   *                </p>
   *                <p>This type of OpsItem is used by Change Manager for reviewing and approving or rejecting change
   *      requests. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/aws/insights</code>
   *                </p>
   *                <p>This type of OpsItem is used by OpsCenter for aggregating and reporting on duplicate
   *      OpsItems. </p>
   *             </li>
   *          </ul>
   */
  OpsItemType?: string;

  /**
   * <p>Operational data is custom data that provides useful reference details about the OpsItem.
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
   *     <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-creating-OpsItems.html#OpsCenter-manually-create-OpsItems">Creating OpsItems manually</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   */
  OperationalData?: Record<string, OpsItemDataValue>;

  /**
   * <p>The Amazon Resource Name (ARN) of an SNS topic where notifications are sent when this
   *    OpsItem is edited or changed.</p>
   */
  Notifications?: OpsItemNotification[];

  /**
   * <p>The importance of this OpsItem in relation to other OpsItems in the system.</p>
   */
  Priority?: number;

  /**
   * <p>One or more OpsItems that share something in common with the current OpsItems. For example,
   *    related OpsItems can include OpsItems with similar error messages, impacted resources, or
   *    statuses for the impacted resource.</p>
   */
  RelatedOpsItems?: RelatedOpsItem[];

  /**
   * <p>The origin of the OpsItem, such as Amazon EC2 or Systems Manager.</p>
   *          <note>
   *             <p>The source name can't contain the following strings: <code>aws</code>, <code>amazon</code>,
   *     and <code>amzn</code>. </p>
   *          </note>
   */
  Source: string | undefined;

  /**
   * <p>A short heading that describes the nature of the OpsItem and the impacted resource.</p>
   */
  Title: string | undefined;

  /**
   * <p>Optional metadata that you assign to a resource. You can restrict access to OpsItems by
   *    using an inline IAM policy that specifies tags. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html#OpsCenter-getting-started-user-permissions">Getting started with OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   *          <p>Tags use a key-value pair. For example:</p>
   *          <p>
   *             <code>Key=Department,Value=Finance</code>
   *          </p>
   *          <important>
   *             <p>To add tags to a new OpsItem, a user must have IAM permissions for both the
   *      <code>ssm:CreateOpsItems</code> operation and the <code>ssm:AddTagsToResource</code> operation.
   *     To add tags to an existing OpsItem, use the <a>AddTagsToResource</a>
   *     operation.</p>
   *          </important>
   */
  Tags?: Tag[];

  /**
   * <p>Specify a category to assign to an OpsItem. </p>
   */
  Category?: string;

  /**
   * <p>Specify a severity to assign to an OpsItem.</p>
   */
  Severity?: string;

  /**
   * <p>The time a runbook workflow started. Currently reported only for the OpsItem type
   *     <code>/aws/changerequest</code>.</p>
   */
  ActualStartTime?: Date;

  /**
   * <p>The time a runbook workflow ended. Currently reported only for the OpsItem type
   *     <code>/aws/changerequest</code>.</p>
   */
  ActualEndTime?: Date;

  /**
   * <p>The time specified in a change request for a runbook workflow to start. Currently supported
   *    only for the OpsItem type <code>/aws/changerequest</code>.</p>
   */
  PlannedStartTime?: Date;

  /**
   * <p>The time specified in a change request for a runbook workflow to end. Currently supported
   *    only for the OpsItem type <code>/aws/changerequest</code>.</p>
   */
  PlannedEndTime?: Date;

  /**
   * <p>The target Amazon Web Services account where you want to create an OpsItem. To make this call, your account
   *    must be configured to work with OpsItems across accounts. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-OpsCenter-multiple-accounts.html">Setting
   *     up OpsCenter to work with OpsItems across accounts</a> in the
   *     <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   */
  AccountId?: string;
}

export interface CreateOpsItemResponse {
  /**
   * <p>The ID of the OpsItem.</p>
   */
  OpsItemId?: string;

  /**
   * <p>The OpsItem Amazon Resource Name (ARN).</p>
   */
  OpsItemArn?: string;
}

/**
 * <p>You don't have permission to view OpsItems in the specified account. Verify that your account
 *    is configured either as a Systems Manager delegated administrator or that you are logged into the Organizations
 *    management account.</p>
 */
export class OpsItemAccessDeniedException extends __BaseException {
  readonly name: "OpsItemAccessDeniedException" = "OpsItemAccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OpsItemAccessDeniedException, __BaseException>) {
    super({
      name: "OpsItemAccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OpsItemAccessDeniedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The OpsItem already exists.</p>
 */
export class OpsItemAlreadyExistsException extends __BaseException {
  readonly name: "OpsItemAlreadyExistsException" = "OpsItemAlreadyExistsException";
  readonly $fault: "client" = "client";
  Message?: string;
  OpsItemId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OpsItemAlreadyExistsException, __BaseException>) {
    super({
      name: "OpsItemAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OpsItemAlreadyExistsException.prototype);
    this.Message = opts.Message;
    this.OpsItemId = opts.OpsItemId;
  }
}

/**
 * <p>Metadata to assign to an Application Manager application.</p>
 */
export interface MetadataValue {
  /**
   * <p>Metadata value to assign to an Application Manager application.</p>
   */
  Value?: string;
}

export interface CreateOpsMetadataRequest {
  /**
   * <p>A resource ID for a new Application Manager application.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>Metadata for a new Application Manager application. </p>
   */
  Metadata?: Record<string, MetadataValue>;

  /**
   * <p>Optional metadata that you assign to a resource. You can specify a maximum of five tags for
   *    an OpsMetadata object. Tags enable you to categorize a resource in different ways, such as by
   *    purpose, owner, or environment. For example, you might want to tag an OpsMetadata object to
   *    identify an environment or target Amazon Web Services Region. In this case, you could specify the following
   *    key-value pairs:</p>
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
   */
  Tags?: Tag[];
}

export interface CreateOpsMetadataResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the OpsMetadata Object or blob created by the call.</p>
   */
  OpsMetadataArn?: string;
}

/**
 * <p>An OpsMetadata object already exists for the selected resource.</p>
 */
export class OpsMetadataAlreadyExistsException extends __BaseException {
  readonly name: "OpsMetadataAlreadyExistsException" = "OpsMetadataAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OpsMetadataAlreadyExistsException, __BaseException>) {
    super({
      name: "OpsMetadataAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OpsMetadataAlreadyExistsException.prototype);
  }
}

/**
 * <p>One of the arguments passed is invalid. </p>
 */
export class OpsMetadataInvalidArgumentException extends __BaseException {
  readonly name: "OpsMetadataInvalidArgumentException" = "OpsMetadataInvalidArgumentException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OpsMetadataInvalidArgumentException, __BaseException>) {
    super({
      name: "OpsMetadataInvalidArgumentException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OpsMetadataInvalidArgumentException.prototype);
  }
}

/**
 * <p>Your account reached the maximum number of OpsMetadata objects allowed by Application Manager. The
 *    maximum is 200 OpsMetadata objects. Delete one or more OpsMetadata object and try again.</p>
 */
export class OpsMetadataLimitExceededException extends __BaseException {
  readonly name: "OpsMetadataLimitExceededException" = "OpsMetadataLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OpsMetadataLimitExceededException, __BaseException>) {
    super({
      name: "OpsMetadataLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OpsMetadataLimitExceededException.prototype);
  }
}

/**
 * <p>The system is processing too many concurrent updates. Wait a few moments and try
 *    again.</p>
 */
export class OpsMetadataTooManyUpdatesException extends __BaseException {
  readonly name: "OpsMetadataTooManyUpdatesException" = "OpsMetadataTooManyUpdatesException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OpsMetadataTooManyUpdatesException, __BaseException>) {
    super({
      name: "OpsMetadataTooManyUpdatesException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OpsMetadataTooManyUpdatesException.prototype);
  }
}

export enum PatchComplianceLevel {
  Critical = "CRITICAL",
  High = "HIGH",
  Informational = "INFORMATIONAL",
  Low = "LOW",
  Medium = "MEDIUM",
  Unspecified = "UNSPECIFIED",
}

export enum PatchFilterKey {
  AdvisoryId = "ADVISORY_ID",
  Arch = "ARCH",
  BugzillaId = "BUGZILLA_ID",
  CVEId = "CVE_ID",
  Classification = "CLASSIFICATION",
  Epoch = "EPOCH",
  MsrcSeverity = "MSRC_SEVERITY",
  Name = "NAME",
  PatchId = "PATCH_ID",
  PatchSet = "PATCH_SET",
  Priority = "PRIORITY",
  Product = "PRODUCT",
  ProductFamily = "PRODUCT_FAMILY",
  Release = "RELEASE",
  Repository = "REPOSITORY",
  Section = "SECTION",
  Security = "SECURITY",
  Severity = "SEVERITY",
  Version = "VERSION",
}

/**
 * <p> Defines which patches should be included in a patch baseline.</p>
 *          <p>A patch filter consists of a key and a set of values. The filter key is a patch property.
 *    For example, the available filter keys for <code>WINDOWS</code> are <code>PATCH_SET</code>,
 *     <code>PRODUCT</code>, <code>PRODUCT_FAMILY</code>, <code>CLASSIFICATION</code>, and
 *     <code>MSRC_SEVERITY</code>.</p>
 *          <p>The filter values define a matching criterion for the patch property indicated by the key.
 *    For example, if the filter key is <code>PRODUCT</code> and the filter values are <code>["Office
 *     2013", "Office 2016"]</code>, then the filter accepts all patches where product name is either
 *    "Office 2013" or "Office 2016". The filter values can be exact values for the patch property
 *    given as a key, or a wildcard (*), which matches all values.</p>
 *          <p>You can view lists of valid values for the patch properties by running the
 *     <code>DescribePatchProperties</code> command. For information about which patch properties can
 *    be used with each major operating system, see <a>DescribePatchProperties</a>.</p>
 */
export interface PatchFilter {
  /**
   * <p>The key for the filter.</p>
   *          <p>Run the <a>DescribePatchProperties</a> command to view lists of valid keys for
   *    each operating system type.</p>
   */
  Key: PatchFilterKey | string | undefined;

  /**
   * <p>The value for the filter key.</p>
   *          <p>Run the <a>DescribePatchProperties</a> command to view lists of valid values for
   *    each key based on operating system type.</p>
   */
  Values: string[] | undefined;
}

/**
 * <p>A set of patch filters, typically used for approval rules.</p>
 */
export interface PatchFilterGroup {
  /**
   * <p>The set of patch filters that make up the group.</p>
   */
  PatchFilters: PatchFilter[] | undefined;
}

/**
 * <p>Defines an approval rule for a patch baseline.</p>
 */
export interface PatchRule {
  /**
   * <p>The patch filter group that defines the criteria for the rule.</p>
   */
  PatchFilterGroup: PatchFilterGroup | undefined;

  /**
   * <p>A compliance severity level for all approved patches in a patch baseline.</p>
   */
  ComplianceLevel?: PatchComplianceLevel | string;

  /**
   * <p>The number of days after the release date of each patch matched by the rule that the patch
   *    is marked as approved in the patch baseline. For example, a value of <code>7</code> means that
   *    patches are approved seven days after they are released. Not supported on Debian Server or Ubuntu
   *    Server.</p>
   */
  ApproveAfterDays?: number;

  /**
   * <p>The cutoff date for auto approval of released patches. Any patches released on or before
   *    this date are installed automatically. Not supported on Debian Server or Ubuntu Server.</p>
   *          <p>Enter dates in the format <code>YYYY-MM-DD</code>. For example,
   *    <code>2021-12-31</code>.</p>
   */
  ApproveUntilDate?: string;

  /**
   * <p>For managed nodes identified by the approval rule filters, enables a patch baseline to apply
   *    non-security updates available in the specified repository. The default value is
   *     <code>false</code>. Applies to Linux managed nodes only.</p>
   */
  EnableNonSecurity?: boolean;
}

/**
 * <p>A set of rules defining the approval rules for a patch baseline.</p>
 */
export interface PatchRuleGroup {
  /**
   * <p>The rules that make up the rule group.</p>
   */
  PatchRules: PatchRule[] | undefined;
}

export enum OperatingSystem {
  AmazonLinux = "AMAZON_LINUX",
  AmazonLinux2 = "AMAZON_LINUX_2",
  AmazonLinux2022 = "AMAZON_LINUX_2022",
  CentOS = "CENTOS",
  Debian = "DEBIAN",
  MacOS = "MACOS",
  OracleLinux = "ORACLE_LINUX",
  Raspbian = "RASPBIAN",
  RedhatEnterpriseLinux = "REDHAT_ENTERPRISE_LINUX",
  Rocky_Linux = "ROCKY_LINUX",
  Suse = "SUSE",
  Ubuntu = "UBUNTU",
  Windows = "WINDOWS",
}

export enum PatchAction {
  AllowAsDependency = "ALLOW_AS_DEPENDENCY",
  Block = "BLOCK",
}

/**
 * <p>Information about the patches to use to update the managed nodes, including target operating
 *    systems and source repository. Applies to Linux managed nodes only.</p>
 */
export interface PatchSource {
  /**
   * <p>The name specified to identify the patch source.</p>
   */
  Name: string | undefined;

  /**
   * <p>The specific operating system versions a patch repository applies to, such as "Ubuntu16.04",
   *    "AmazonLinux2016.09", "RedhatEnterpriseLinux7.2" or "Suse12.7". For lists of supported product
   *    values, see <a>PatchFilter</a>.</p>
   */
  Products: string[] | undefined;

  /**
   * <p>The value of the yum repo configuration. For example:</p>
   *          <p>
   *             <code>[main]</code>
   *          </p>
   *          <p>
   *             <code>name=MyCustomRepository</code>
   *          </p>
   *          <p>
   *             <code>baseurl=https://my-custom-repository</code>
   *          </p>
   *          <p>
   *             <code>enabled=1</code>
   *          </p>
   *          <note>
   *             <p>For information about other options available for your yum repository configuration, see
   *      <a href="https://man7.org/linux/man-pages/man5/dnf.conf.5.html">dnf.conf(5)</a>.</p>
   *          </note>
   */
  Configuration: string | undefined;
}

export interface CreatePatchBaselineRequest {
  /**
   * <p>Defines the operating system the patch baseline applies to. The default value is
   *     <code>WINDOWS</code>.</p>
   */
  OperatingSystem?: OperatingSystem | string;

  /**
   * <p>The name of the patch baseline.</p>
   */
  Name: string | undefined;

  /**
   * <p>A set of global filters used to include patches in the baseline.</p>
   */
  GlobalFilters?: PatchFilterGroup;

  /**
   * <p>A set of rules used to include patches in the baseline.</p>
   */
  ApprovalRules?: PatchRuleGroup;

  /**
   * <p>A list of explicitly approved patches for the baseline.</p>
   *          <p>For information about accepted formats for lists of approved patches and rejected patches,
   *                         see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-approved-rejected-package-name-formats.html">About
   *                         package name formats for approved and rejected patch lists</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   */
  ApprovedPatches?: string[];

  /**
   * <p>Defines the compliance level for approved patches. When an approved patch is reported as
   *    missing, this value describes the severity of the compliance violation. The default value is
   *     <code>UNSPECIFIED</code>.</p>
   */
  ApprovedPatchesComplianceLevel?: PatchComplianceLevel | string;

  /**
   * <p>Indicates whether the list of approved patches includes non-security updates that should be
   *    applied to the managed nodes. The default value is <code>false</code>. Applies to Linux managed
   *    nodes only.</p>
   */
  ApprovedPatchesEnableNonSecurity?: boolean;

  /**
   * <p>A list of explicitly rejected patches for the baseline.</p>
   *          <p>For information about accepted formats for lists of approved patches and rejected patches,
   *                         see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-approved-rejected-package-name-formats.html">About
   *                         package name formats for approved and rejected patch lists</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   */
  RejectedPatches?: string[];

  /**
   * <p>The action for Patch Manager to take on patches included in the
   *     <code>RejectedPackages</code> list.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>ALLOW_AS_DEPENDENCY</code>
   *                   </b>: A package in the
   *       <code>Rejected</code> patches list is installed only if it is a dependency of another package.
   *      It is considered compliant with the patch baseline, and its status is reported as
   *       <code>InstalledOther</code>. This is the default action if no option is specified.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>BLOCK</code>
   *                   </b>: Packages in the
   *       <code>RejectedPatches</code> list, and packages that include them as dependencies, aren't
   *      installed under any circumstances. If a package was installed before it was added to the
   *      Rejected patches list, it is considered non-compliant with the patch baseline, and its status
   *      is reported as <code>InstalledRejected</code>.</p>
   *             </li>
   *          </ul>
   */
  RejectedPatchesAction?: PatchAction | string;

  /**
   * <p>A description of the patch baseline.</p>
   */
  Description?: string;

  /**
   * <p>Information about the patches to use to update the managed nodes, including target operating
   *    systems and source repositories. Applies to Linux managed nodes only.</p>
   */
  Sources?: PatchSource[];

  /**
   * <p>User-provided idempotency token.</p>
   */
  ClientToken?: string;

  /**
   * <p>Optional metadata that you assign to a resource. Tags enable you to categorize a resource in
   *    different ways, such as by purpose, owner, or environment. For example, you might want to tag a
   *    patch baseline to identify the severity level of patches it specifies and the operating system
   *    family it applies to. In this case, you could specify the following key-value pairs:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Key=PatchSeverity,Value=Critical</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Key=OS,Value=Windows</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>To add tags to an existing patch baseline, use the <a>AddTagsToResource</a>
   *     operation.</p>
   *          </note>
   */
  Tags?: Tag[];
}

export interface CreatePatchBaselineResult {
  /**
   * <p>The ID of the created patch baseline.</p>
   */
  BaselineId?: string;
}

/**
 * <p>Synchronize Amazon Web Services Systems Manager Inventory data from multiple Amazon Web Services accounts defined in Organizations to a
 *    centralized Amazon S3 bucket. Data is synchronized to individual key prefixes in the
 *    central bucket. Each key prefix represents a different Amazon Web Services account ID.</p>
 */
export interface ResourceDataSyncDestinationDataSharing {
  /**
   * <p>The sharing data type. Only <code>Organization</code> is supported.</p>
   */
  DestinationDataSharingType?: string;
}

export enum ResourceDataSyncS3Format {
  JSON_SERDE = "JsonSerDe",
}

/**
 * <p>Information about the target S3 bucket for the resource data sync.</p>
 */
export interface ResourceDataSyncS3Destination {
  /**
   * <p>The name of the S3 bucket where the aggregated data is stored.</p>
   */
  BucketName: string | undefined;

  /**
   * <p>An Amazon S3 prefix for the bucket.</p>
   */
  Prefix?: string;

  /**
   * <p>A supported sync format. The following format is currently supported: JsonSerDe</p>
   */
  SyncFormat: ResourceDataSyncS3Format | string | undefined;

  /**
   * <p>The Amazon Web Services Region with the S3 bucket targeted by the resource data sync.</p>
   */
  Region: string | undefined;

  /**
   * <p>The ARN of an encryption key for a destination in Amazon S3. Must belong to the same
   *    Region as the destination S3 bucket.</p>
   */
  AWSKMSKeyARN?: string;

  /**
   * <p>Enables destination data sharing. By default, this field is <code>null</code>.</p>
   */
  DestinationDataSharing?: ResourceDataSyncDestinationDataSharing;
}

/**
 * <p>The Organizations organizational unit data source for the sync.</p>
 */
export interface ResourceDataSyncOrganizationalUnit {
  /**
   * <p>The Organizations unit ID data source for the sync.</p>
   */
  OrganizationalUnitId?: string;
}

/**
 * <p>Information about the <code>AwsOrganizationsSource</code> resource data sync source. A sync
 *    source of this type can synchronize data from Organizations or, if an Amazon Web Services organization isn't
 *    present, from multiple Amazon Web Services Regions.</p>
 */
export interface ResourceDataSyncAwsOrganizationsSource {
  /**
   * <p>If an Amazon Web Services organization is present, this is either <code>OrganizationalUnits</code> or
   *     <code>EntireOrganization</code>. For <code>OrganizationalUnits</code>, the data is aggregated
   *    from a set of organization units. For <code>EntireOrganization</code>, the data is aggregated
   *    from the entire Amazon Web Services organization.</p>
   */
  OrganizationSourceType: string | undefined;

  /**
   * <p>The Organizations organization units included in the sync.</p>
   */
  OrganizationalUnits?: ResourceDataSyncOrganizationalUnit[];
}

/**
 * <p>Information about the source of the data included in the resource data sync.</p>
 */
export interface ResourceDataSyncSource {
  /**
   * <p>The type of data source for the resource data sync. <code>SourceType</code> is either
   *     <code>AwsOrganizations</code> (if an organization is present in Organizations) or
   *     <code>SingleAccountMultiRegions</code>.</p>
   */
  SourceType: string | undefined;

  /**
   * <p>Information about the <code>AwsOrganizationsSource</code> resource data sync source. A sync
   *    source of this type can synchronize data from Organizations.</p>
   */
  AwsOrganizationsSource?: ResourceDataSyncAwsOrganizationsSource;

  /**
   * <p>The <code>SyncSource</code> Amazon Web Services Regions included in the resource data sync.</p>
   */
  SourceRegions: string[] | undefined;

  /**
   * <p>Whether to automatically synchronize and aggregate data from new Amazon Web Services Regions when those
   *    Regions come online.</p>
   */
  IncludeFutureRegions?: boolean;

  /**
   * <p>When you create a resource data sync, if you choose one of the Organizations options, then Systems Manager
   *    automatically enables all OpsData sources in the selected Amazon Web Services Regions for all Amazon Web Services accounts in
   *    your organization (or in the selected organization units). For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/Explorer-resouce-data-sync-multiple-accounts-and-regions.html">About multiple account and Region resource data syncs</a> in the
   *     <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   */
  EnableAllOpsDataSources?: boolean;
}

export interface CreateResourceDataSyncRequest {
  /**
   * <p>A name for the configuration.</p>
   */
  SyncName: string | undefined;

  /**
   * <p>Amazon S3 configuration details for the sync. This parameter is required if the
   *     <code>SyncType</code> value is SyncToDestination.</p>
   */
  S3Destination?: ResourceDataSyncS3Destination;

  /**
   * <p>Specify <code>SyncToDestination</code> to create a resource data sync that synchronizes data
   *    to an S3 bucket for Inventory. If you specify <code>SyncToDestination</code>, you must provide a
   *    value for <code>S3Destination</code>. Specify <code>SyncFromSource</code> to synchronize data
   *    from a single account and multiple Regions, or multiple Amazon Web Services accounts and Amazon Web Services Regions, as
   *    listed in Organizations for Explorer. If you specify <code>SyncFromSource</code>, you must provide a
   *    value for <code>SyncSource</code>. The default value is <code>SyncToDestination</code>.</p>
   */
  SyncType?: string;

  /**
   * <p>Specify information about the data sources to synchronize. This parameter is required if the
   *     <code>SyncType</code> value is SyncFromSource.</p>
   */
  SyncSource?: ResourceDataSyncSource;
}

export interface CreateResourceDataSyncResult {}

/**
 * <p>A sync configuration with the same name already exists.</p>
 */
export class ResourceDataSyncAlreadyExistsException extends __BaseException {
  readonly name: "ResourceDataSyncAlreadyExistsException" = "ResourceDataSyncAlreadyExistsException";
  readonly $fault: "client" = "client";
  SyncName?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceDataSyncAlreadyExistsException, __BaseException>) {
    super({
      name: "ResourceDataSyncAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceDataSyncAlreadyExistsException.prototype);
    this.SyncName = opts.SyncName;
  }
}

/**
 * <p>You have exceeded the allowed maximum sync configurations.</p>
 */
export class ResourceDataSyncCountExceededException extends __BaseException {
  readonly name: "ResourceDataSyncCountExceededException" = "ResourceDataSyncCountExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceDataSyncCountExceededException, __BaseException>) {
    super({
      name: "ResourceDataSyncCountExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceDataSyncCountExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified sync configuration is invalid.</p>
 */
export class ResourceDataSyncInvalidConfigurationException extends __BaseException {
  readonly name: "ResourceDataSyncInvalidConfigurationException" = "ResourceDataSyncInvalidConfigurationException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceDataSyncInvalidConfigurationException, __BaseException>) {
    super({
      name: "ResourceDataSyncInvalidConfigurationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceDataSyncInvalidConfigurationException.prototype);
    this.Message = opts.Message;
  }
}

export interface DeleteActivationRequest {
  /**
   * <p>The ID of the activation that you want to delete.</p>
   */
  ActivationId: string | undefined;
}

export interface DeleteActivationResult {}

/**
 * <p>The activation isn't valid. The activation might have been deleted, or the ActivationId and
 *    the ActivationCode don't match.</p>
 */
export class InvalidActivation extends __BaseException {
  readonly name: "InvalidActivation" = "InvalidActivation";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidActivation, __BaseException>) {
    super({
      name: "InvalidActivation",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidActivation.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The activation ID isn't valid. Verify the you entered the correct ActivationId or
 *    ActivationCode and try again.</p>
 */
export class InvalidActivationId extends __BaseException {
  readonly name: "InvalidActivationId" = "InvalidActivationId";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidActivationId, __BaseException>) {
    super({
      name: "InvalidActivationId",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidActivationId.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified association doesn't exist.</p>
 */
export class AssociationDoesNotExist extends __BaseException {
  readonly name: "AssociationDoesNotExist" = "AssociationDoesNotExist";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AssociationDoesNotExist, __BaseException>) {
    super({
      name: "AssociationDoesNotExist",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AssociationDoesNotExist.prototype);
    this.Message = opts.Message;
  }
}

export interface DeleteAssociationRequest {
  /**
   * <p>The name of the SSM document.</p>
   */
  Name?: string;

  /**
   * <p>The managed node ID.</p>
   *          <note>
   *             <p>
   *                <code>InstanceId</code> has been deprecated. To specify a managed node ID for an
   *     association, use the <code>Targets</code> parameter. Requests that include the parameter
   *      <code>InstanceID</code> with Systems Manager documents (SSM documents) that use schema version 2.0 or
   *     later will fail. In addition, if you use the parameter <code>InstanceId</code>, you can't use
   *     the parameters <code>AssociationName</code>, <code>DocumentVersion</code>,
   *      <code>MaxErrors</code>, <code>MaxConcurrency</code>, <code>OutputLocation</code>, or
   *      <code>ScheduleExpression</code>. To use these parameters, you must use the <code>Targets</code>
   *     parameter.</p>
   *          </note>
   */
  InstanceId?: string;

  /**
   * <p>The association ID that you want to delete.</p>
   */
  AssociationId?: string;
}

export interface DeleteAssociationResult {}

/**
 * <p>You must disassociate a document from all managed nodes before you can delete it.</p>
 */
export class AssociatedInstances extends __BaseException {
  readonly name: "AssociatedInstances" = "AssociatedInstances";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AssociatedInstances, __BaseException>) {
    super({
      name: "AssociatedInstances",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AssociatedInstances.prototype);
  }
}

export interface DeleteDocumentRequest {
  /**
   * <p>The name of the document.</p>
   */
  Name: string | undefined;

  /**
   * <p>The version of the document that you want to delete. If not provided, all versions of the
   *    document are deleted.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>The version name of the document that you want to delete. If not provided, all versions of
   *    the document are deleted.</p>
   */
  VersionName?: string;

  /**
   * <p>Some SSM document types require that you specify a <code>Force</code> flag before you can
   *    delete the document. For example, you must specify a <code>Force</code> flag to delete a document
   *    of type <code>ApplicationConfigurationSchema</code>. You can restrict access to the
   *     <code>Force</code> flag in an Identity and Access Management (IAM) policy.</p>
   */
  Force?: boolean;
}

export interface DeleteDocumentResult {}

/**
 * <p>You attempted to delete a document while it is still shared. You must stop sharing the
 *    document before you can delete it.</p>
 */
export class InvalidDocumentOperation extends __BaseException {
  readonly name: "InvalidDocumentOperation" = "InvalidDocumentOperation";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDocumentOperation, __BaseException>) {
    super({
      name: "InvalidDocumentOperation",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDocumentOperation.prototype);
    this.Message = opts.Message;
  }
}

export enum InventorySchemaDeleteOption {
  DELETE_SCHEMA = "DeleteSchema",
  DISABLE_SCHEMA = "DisableSchema",
}

export interface DeleteInventoryRequest {
  /**
   * <p>The name of the custom inventory type for which you want to delete either all previously
   *    collected data or the inventory type itself. </p>
   */
  TypeName: string | undefined;

  /**
   * <p>Use the <code>SchemaDeleteOption</code> to delete a custom inventory type (schema). If you
   *    don't choose this option, the system only deletes existing inventory data associated with the
   *    custom inventory type. Choose one of the following options:</p>
   *          <p>DisableSchema: If you choose this option, the system ignores all inventory data for the
   *    specified version, and any earlier versions. To enable this schema again, you must call the
   *     <code>PutInventory</code> operation for a version greater than the disabled version.</p>
   *          <p>DeleteSchema: This option deletes the specified custom type from the Inventory service. You
   *    can recreate the schema later, if you want.</p>
   */
  SchemaDeleteOption?: InventorySchemaDeleteOption | string;

  /**
   * <p>Use this option to view a summary of the deletion request without deleting any data or the
   *    data type. This option is useful when you only want to understand what will be deleted. Once you
   *    validate that the data to be deleted is what you intend to delete, you can run the same command
   *    without specifying the <code>DryRun</code> option.</p>
   */
  DryRun?: boolean;

  /**
   * <p>User-provided idempotency token.</p>
   */
  ClientToken?: string;
}

/**
 * <p>Either a count, remaining count, or a version number in a delete inventory summary.</p>
 */
export interface InventoryDeletionSummaryItem {
  /**
   * <p>The inventory type version.</p>
   */
  Version?: string;

  /**
   * <p>A count of the number of deleted items.</p>
   */
  Count?: number;

  /**
   * <p>The remaining number of items to delete.</p>
   */
  RemainingCount?: number;
}

/**
 * <p>Information about the delete operation.</p>
 */
export interface InventoryDeletionSummary {
  /**
   * <p>The total number of items to delete. This count doesn't change during the delete
   *    operation.</p>
   */
  TotalCount?: number;

  /**
   * <p>Remaining number of items to delete.</p>
   */
  RemainingCount?: number;

  /**
   * <p>A list of counts and versions for deleted items.</p>
   */
  SummaryItems?: InventoryDeletionSummaryItem[];
}

export interface DeleteInventoryResult {
  /**
   * <p>Every <code>DeleteInventory</code> operation is assigned a unique ID. This option returns a
   *    unique ID. You can use this ID to query the status of a delete operation. This option is useful
   *    for ensuring that a delete operation has completed before you begin other operations. </p>
   */
  DeletionId?: string;

  /**
   * <p>The name of the inventory data type specified in the request.</p>
   */
  TypeName?: string;

  /**
   * <p>A summary of the delete operation. For more information about this summary, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-inventory-custom.html#sysman-inventory-delete-summary">Deleting custom inventory</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   */
  DeletionSummary?: InventoryDeletionSummary;
}

/**
 * <p>One or more of the parameters specified for the delete operation isn't valid. Verify all
 *    parameters and try again.</p>
 */
export class InvalidDeleteInventoryParametersException extends __BaseException {
  readonly name: "InvalidDeleteInventoryParametersException" = "InvalidDeleteInventoryParametersException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDeleteInventoryParametersException, __BaseException>) {
    super({
      name: "InvalidDeleteInventoryParametersException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDeleteInventoryParametersException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request isn't valid.</p>
 */
export class InvalidInventoryRequestException extends __BaseException {
  readonly name: "InvalidInventoryRequestException" = "InvalidInventoryRequestException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidInventoryRequestException, __BaseException>) {
    super({
      name: "InvalidInventoryRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidInventoryRequestException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The delete inventory option specified isn't valid. Verify the option and try again.</p>
 */
export class InvalidOptionException extends __BaseException {
  readonly name: "InvalidOptionException" = "InvalidOptionException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidOptionException, __BaseException>) {
    super({
      name: "InvalidOptionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidOptionException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The parameter type name isn't valid.</p>
 */
export class InvalidTypeNameException extends __BaseException {
  readonly name: "InvalidTypeNameException" = "InvalidTypeNameException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTypeNameException, __BaseException>) {
    super({
      name: "InvalidTypeNameException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTypeNameException.prototype);
    this.Message = opts.Message;
  }
}

export interface DeleteMaintenanceWindowRequest {
  /**
   * <p>The ID of the maintenance window to delete.</p>
   */
  WindowId: string | undefined;
}

export interface DeleteMaintenanceWindowResult {
  /**
   * <p>The ID of the deleted maintenance window.</p>
   */
  WindowId?: string;
}

export interface DeleteOpsMetadataRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of an OpsMetadata Object to delete.</p>
   */
  OpsMetadataArn: string | undefined;
}

export interface DeleteOpsMetadataResult {}

/**
 * <p>The OpsMetadata object doesn't exist. </p>
 */
export class OpsMetadataNotFoundException extends __BaseException {
  readonly name: "OpsMetadataNotFoundException" = "OpsMetadataNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OpsMetadataNotFoundException, __BaseException>) {
    super({
      name: "OpsMetadataNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OpsMetadataNotFoundException.prototype);
  }
}

export interface DeleteParameterRequest {
  /**
   * <p>The name of the parameter to delete.</p>
   */
  Name: string | undefined;
}

export interface DeleteParameterResult {}

/**
 * <p>The parameter couldn't be found. Verify the name and try again.</p>
 */
export class ParameterNotFound extends __BaseException {
  readonly name: "ParameterNotFound" = "ParameterNotFound";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ParameterNotFound, __BaseException>) {
    super({
      name: "ParameterNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ParameterNotFound.prototype);
  }
}

export interface DeleteParametersRequest {
  /**
   * <p>The names of the parameters to delete. After deleting a parameter, wait for at least 30
   *    seconds to create a parameter with the same name.</p>
   */
  Names: string[] | undefined;
}

export interface DeleteParametersResult {
  /**
   * <p>The names of the deleted parameters.</p>
   */
  DeletedParameters?: string[];

  /**
   * <p>The names of parameters that weren't deleted because the parameters aren't valid.</p>
   */
  InvalidParameters?: string[];
}

export interface DeletePatchBaselineRequest {
  /**
   * <p>The ID of the patch baseline to delete.</p>
   */
  BaselineId: string | undefined;
}

export interface DeletePatchBaselineResult {
  /**
   * <p>The ID of the deleted patch baseline.</p>
   */
  BaselineId?: string;
}

/**
 * <p>Error returned if an attempt is made to delete a patch baseline that is registered for a
 *    patch group.</p>
 */
export class ResourceInUseException extends __BaseException {
  readonly name: "ResourceInUseException" = "ResourceInUseException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceInUseException, __BaseException>) {
    super({
      name: "ResourceInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceInUseException.prototype);
    this.Message = opts.Message;
  }
}

export interface DeleteResourceDataSyncRequest {
  /**
   * <p>The name of the configuration to delete.</p>
   */
  SyncName: string | undefined;

  /**
   * <p>Specify the type of resource data sync to delete.</p>
   */
  SyncType?: string;
}

export interface DeleteResourceDataSyncResult {}

/**
 * <p>The specified sync name wasn't found.</p>
 */
export class ResourceDataSyncNotFoundException extends __BaseException {
  readonly name: "ResourceDataSyncNotFoundException" = "ResourceDataSyncNotFoundException";
  readonly $fault: "client" = "client";
  SyncName?: string;
  SyncType?: string;
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceDataSyncNotFoundException, __BaseException>) {
    super({
      name: "ResourceDataSyncNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceDataSyncNotFoundException.prototype);
    this.SyncName = opts.SyncName;
    this.SyncType = opts.SyncType;
    this.Message = opts.Message;
  }
}

export interface DeleteResourcePolicyRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the resource to which the policies are attached.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The policy ID.</p>
   */
  PolicyId: string | undefined;

  /**
   * <p>ID of the current policy version. The hash helps to prevent multiple calls from attempting
   *    to overwrite a policy.</p>
   */
  PolicyHash: string | undefined;
}

export interface DeleteResourcePolicyResponse {}

/**
 * <p>The hash provided in the call doesn't match the stored hash. This exception is thrown when
 *    trying to update an obsolete policy version or when multiple requests to update a policy are
 *    sent.</p>
 */
export class ResourcePolicyConflictException extends __BaseException {
  readonly name: "ResourcePolicyConflictException" = "ResourcePolicyConflictException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourcePolicyConflictException, __BaseException>) {
    super({
      name: "ResourcePolicyConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourcePolicyConflictException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>One or more parameters specified for the call aren't valid. Verify the parameters and their
 *    values and try again.</p>
 */
export class ResourcePolicyInvalidParameterException extends __BaseException {
  readonly name: "ResourcePolicyInvalidParameterException" = "ResourcePolicyInvalidParameterException";
  readonly $fault: "client" = "client";
  ParameterNames?: string[];
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourcePolicyInvalidParameterException, __BaseException>) {
    super({
      name: "ResourcePolicyInvalidParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourcePolicyInvalidParameterException.prototype);
    this.ParameterNames = opts.ParameterNames;
    this.Message = opts.Message;
  }
}

export interface DeregisterManagedInstanceRequest {
  /**
   * <p>The ID assigned to the managed node when you registered it using the activation process.
   *   </p>
   */
  InstanceId: string | undefined;
}

export interface DeregisterManagedInstanceResult {}

export interface DeregisterPatchBaselineForPatchGroupRequest {
  /**
   * <p>The ID of the patch baseline to deregister the patch group from.</p>
   */
  BaselineId: string | undefined;

  /**
   * <p>The name of the patch group that should be deregistered from the patch baseline.</p>
   */
  PatchGroup: string | undefined;
}

export interface DeregisterPatchBaselineForPatchGroupResult {
  /**
   * <p>The ID of the patch baseline the patch group was deregistered from.</p>
   */
  BaselineId?: string;

  /**
   * <p>The name of the patch group deregistered from the patch baseline.</p>
   */
  PatchGroup?: string;
}

export interface DeregisterTargetFromMaintenanceWindowRequest {
  /**
   * <p>The ID of the maintenance window the target should be removed from.</p>
   */
  WindowId: string | undefined;

  /**
   * <p>The ID of the target definition to remove.</p>
   */
  WindowTargetId: string | undefined;

  /**
   * <p>The system checks if the target is being referenced by a task. If the target is being
   *    referenced, the system returns an error and doesn't deregister the target from the maintenance
   *    window.</p>
   */
  Safe?: boolean;
}

export interface DeregisterTargetFromMaintenanceWindowResult {
  /**
   * <p>The ID of the maintenance window the target was removed from.</p>
   */
  WindowId?: string;

  /**
   * <p>The ID of the removed target definition.</p>
   */
  WindowTargetId?: string;
}

/**
 * <p>You specified the <code>Safe</code> option for the DeregisterTargetFromMaintenanceWindow
 *    operation, but the target is still referenced in a task.</p>
 */
export class TargetInUseException extends __BaseException {
  readonly name: "TargetInUseException" = "TargetInUseException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TargetInUseException, __BaseException>) {
    super({
      name: "TargetInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TargetInUseException.prototype);
    this.Message = opts.Message;
  }
}

export interface DeregisterTaskFromMaintenanceWindowRequest {
  /**
   * <p>The ID of the maintenance window the task should be removed from.</p>
   */
  WindowId: string | undefined;

  /**
   * <p>The ID of the task to remove from the maintenance window.</p>
   */
  WindowTaskId: string | undefined;
}

export interface DeregisterTaskFromMaintenanceWindowResult {
  /**
   * <p>The ID of the maintenance window the task was removed from.</p>
   */
  WindowId?: string;

  /**
   * <p>The ID of the task removed from the maintenance window.</p>
   */
  WindowTaskId?: string;
}

export enum DescribeActivationsFilterKeys {
  ACTIVATION_IDS = "ActivationIds",
  DEFAULT_INSTANCE_NAME = "DefaultInstanceName",
  IAM_ROLE = "IamRole",
}

/**
 * <p>Filter for the DescribeActivation API.</p>
 */
export interface DescribeActivationsFilter {
  /**
   * <p>The name of the filter.</p>
   */
  FilterKey?: DescribeActivationsFilterKeys | string;

  /**
   * <p>The filter values.</p>
   */
  FilterValues?: string[];
}

export interface DescribeActivationsRequest {
  /**
   * <p>A filter to view information about your activations.</p>
   */
  Filters?: DescribeActivationsFilter[];

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token to start the list. Use this token to get the next set of results. </p>
   */
  NextToken?: string;
}

export interface DescribeActivationsResult {
  /**
   * <p>A list of activations for your Amazon Web Services account.</p>
   */
  ActivationList?: Activation[];

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *    results. </p>
   */
  NextToken?: string;
}

/**
 * <p>The filter name isn't valid. Verify the you entered the correct name and try again.</p>
 */
export class InvalidFilter extends __BaseException {
  readonly name: "InvalidFilter" = "InvalidFilter";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidFilter, __BaseException>) {
    super({
      name: "InvalidFilter",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidFilter.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified token isn't valid.</p>
 */
export class InvalidNextToken extends __BaseException {
  readonly name: "InvalidNextToken" = "InvalidNextToken";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNextToken, __BaseException>) {
    super({
      name: "InvalidNextToken",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNextToken.prototype);
    this.Message = opts.Message;
  }
}

export interface DescribeAssociationRequest {
  /**
   * <p>The name of the SSM document.</p>
   */
  Name?: string;

  /**
   * <p>The managed node ID.</p>
   */
  InstanceId?: string;

  /**
   * <p>The association ID for which you want information.</p>
   */
  AssociationId?: string;

  /**
   * <p>Specify the association version to retrieve. To view the latest version, either specify
   *     <code>$LATEST</code> for this parameter, or omit this parameter. To view a list of all
   *    associations for a managed node, use <a>ListAssociations</a>. To get a list of
   *    versions for a specific association, use <a>ListAssociationVersions</a>. </p>
   */
  AssociationVersion?: string;
}

export interface DescribeAssociationResult {
  /**
   * <p>Information about the association.</p>
   */
  AssociationDescription?: AssociationDescription;
}

/**
 * <p>The version you specified isn't valid. Use ListAssociationVersions to view all versions of
 *    an association according to the association ID. Or, use the <code>$LATEST</code> parameter to
 *    view the latest version of the association.</p>
 */
export class InvalidAssociationVersion extends __BaseException {
  readonly name: "InvalidAssociationVersion" = "InvalidAssociationVersion";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidAssociationVersion, __BaseException>) {
    super({
      name: "InvalidAssociationVersion",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidAssociationVersion.prototype);
    this.Message = opts.Message;
  }
}

export enum AssociationExecutionFilterKey {
  CreatedTime = "CreatedTime",
  ExecutionId = "ExecutionId",
  Status = "Status",
}

export enum AssociationFilterOperatorType {
  Equal = "EQUAL",
  GreaterThan = "GREATER_THAN",
  LessThan = "LESS_THAN",
}

/**
 * <p>Filters used in the request.</p>
 */
export interface AssociationExecutionFilter {
  /**
   * <p>The key value used in the request.</p>
   */
  Key: AssociationExecutionFilterKey | string | undefined;

  /**
   * <p>The value specified for the key.</p>
   */
  Value: string | undefined;

  /**
   * <p>The filter type specified in the request.</p>
   */
  Type: AssociationFilterOperatorType | string | undefined;
}

export interface DescribeAssociationExecutionsRequest {
  /**
   * <p>The association ID for which you want to view execution history details.</p>
   */
  AssociationId: string | undefined;

  /**
   * <p>Filters for the request. You can specify the following filters and values.</p>
   *          <p>ExecutionId (EQUAL)</p>
   *          <p>Status (EQUAL)</p>
   *          <p>CreatedTime (EQUAL, GREATER_THAN, LESS_THAN)</p>
   */
  Filters?: AssociationExecutionFilter[];

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token to start the list. Use this token to get the next set of results. </p>
   */
  NextToken?: string;
}

/**
 * <p>Includes information about the specified association.</p>
 */
export interface AssociationExecution {
  /**
   * <p>The association ID.</p>
   */
  AssociationId?: string;

  /**
   * <p>The association version.</p>
   */
  AssociationVersion?: string;

  /**
   * <p>The execution ID for the association.</p>
   */
  ExecutionId?: string;

  /**
   * <p>The status of the association execution.</p>
   */
  Status?: string;

  /**
   * <p>Detailed status information about the execution.</p>
   */
  DetailedStatus?: string;

  /**
   * <p>The time the execution started.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The date of the last execution.</p>
   */
  LastExecutionDate?: Date;

  /**
   * <p>An aggregate status of the resources in the execution based on the status type.</p>
   */
  ResourceCountByStatus?: string;

  /**
   * <p>The details for the CloudWatch alarm you want to apply to an automation or
   *    command.</p>
   */
  AlarmConfiguration?: AlarmConfiguration;

  /**
   * <p>The CloudWatch alarms that were invoked by the association.</p>
   */
  TriggeredAlarms?: AlarmStateInformation[];
}

export interface DescribeAssociationExecutionsResult {
  /**
   * <p>A list of the executions for the specified association ID.</p>
   */
  AssociationExecutions?: AssociationExecution[];

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *    results.</p>
   */
  NextToken?: string;
}

/**
 * <p>The specified execution ID doesn't exist. Verify the ID number and try again.</p>
 */
export class AssociationExecutionDoesNotExist extends __BaseException {
  readonly name: "AssociationExecutionDoesNotExist" = "AssociationExecutionDoesNotExist";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AssociationExecutionDoesNotExist, __BaseException>) {
    super({
      name: "AssociationExecutionDoesNotExist",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AssociationExecutionDoesNotExist.prototype);
    this.Message = opts.Message;
  }
}

export enum AssociationExecutionTargetsFilterKey {
  ResourceId = "ResourceId",
  ResourceType = "ResourceType",
  Status = "Status",
}

/**
 * <p>Filters for the association execution.</p>
 */
export interface AssociationExecutionTargetsFilter {
  /**
   * <p>The key value used in the request.</p>
   */
  Key: AssociationExecutionTargetsFilterKey | string | undefined;

  /**
   * <p>The value specified for the key.</p>
   */
  Value: string | undefined;
}

export interface DescribeAssociationExecutionTargetsRequest {
  /**
   * <p>The association ID that includes the execution for which you want to view details.</p>
   */
  AssociationId: string | undefined;

  /**
   * <p>The execution ID for which you want to view details.</p>
   */
  ExecutionId: string | undefined;

  /**
   * <p>Filters for the request. You can specify the following filters and values.</p>
   *          <p>Status (EQUAL)</p>
   *          <p>ResourceId (EQUAL)</p>
   *          <p>ResourceType (EQUAL)</p>
   */
  Filters?: AssociationExecutionTargetsFilter[];

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token to start the list. Use this token to get the next set of results. </p>
   */
  NextToken?: string;
}

/**
 * <p>Information about the source where the association execution details are stored.</p>
 */
export interface OutputSource {
  /**
   * <p>The ID of the output source, for example the URL of an S3 bucket.</p>
   */
  OutputSourceId?: string;

  /**
   * <p>The type of source where the association execution details are stored, for example, Amazon S3.</p>
   */
  OutputSourceType?: string;
}

/**
 * <p>Includes information about the specified association execution.</p>
 */
export interface AssociationExecutionTarget {
  /**
   * <p>The association ID.</p>
   */
  AssociationId?: string;

  /**
   * <p>The association version.</p>
   */
  AssociationVersion?: string;

  /**
   * <p>The execution ID.</p>
   */
  ExecutionId?: string;

  /**
   * <p>The resource ID, for example, the managed node ID where the association ran.</p>
   */
  ResourceId?: string;

  /**
   * <p>The resource type, for example, EC2.</p>
   */
  ResourceType?: string;

  /**
   * <p>The association execution status.</p>
   */
  Status?: string;

  /**
   * <p>Detailed information about the execution status.</p>
   */
  DetailedStatus?: string;

  /**
   * <p>The date of the last execution.</p>
   */
  LastExecutionDate?: Date;

  /**
   * <p>The location where the association details are saved.</p>
   */
  OutputSource?: OutputSource;
}

export interface DescribeAssociationExecutionTargetsResult {
  /**
   * <p>Information about the execution.</p>
   */
  AssociationExecutionTargets?: AssociationExecutionTarget[];

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *    results.</p>
   */
  NextToken?: string;
}

export enum AutomationExecutionFilterKey {
  AUTOMATION_SUBTYPE = "AutomationSubtype",
  AUTOMATION_TYPE = "AutomationType",
  CURRENT_ACTION = "CurrentAction",
  DOCUMENT_NAME_PREFIX = "DocumentNamePrefix",
  EXECUTION_ID = "ExecutionId",
  EXECUTION_STATUS = "ExecutionStatus",
  OPS_ITEM_ID = "OpsItemId",
  PARENT_EXECUTION_ID = "ParentExecutionId",
  START_TIME_AFTER = "StartTimeAfter",
  START_TIME_BEFORE = "StartTimeBefore",
  TAG_KEY = "TagKey",
  TARGET_RESOURCE_GROUP = "TargetResourceGroup",
}

/**
 * <p>A filter used to match specific automation executions. This is used to limit the scope of
 *    Automation execution information returned.</p>
 */
export interface AutomationExecutionFilter {
  /**
   * <p>One or more keys to limit the results.</p>
   */
  Key: AutomationExecutionFilterKey | string | undefined;

  /**
   * <p>The values used to limit the execution information associated with the filter's key.</p>
   */
  Values: string[] | undefined;
}

export interface DescribeAutomationExecutionsRequest {
  /**
   * <p>Filters used to limit the scope of executions that are requested.</p>
   */
  Filters?: AutomationExecutionFilter[];

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   */
  NextToken?: string;
}

export enum AutomationExecutionStatus {
  APPROVED = "Approved",
  CANCELLED = "Cancelled",
  CANCELLING = "Cancelling",
  CHANGE_CALENDAR_OVERRIDE_APPROVED = "ChangeCalendarOverrideApproved",
  CHANGE_CALENDAR_OVERRIDE_REJECTED = "ChangeCalendarOverrideRejected",
  COMPLETED_WITH_FAILURE = "CompletedWithFailure",
  COMPLETED_WITH_SUCCESS = "CompletedWithSuccess",
  FAILED = "Failed",
  INPROGRESS = "InProgress",
  PENDING = "Pending",
  PENDING_APPROVAL = "PendingApproval",
  PENDING_CHANGE_CALENDAR_OVERRIDE = "PendingChangeCalendarOverride",
  REJECTED = "Rejected",
  RUNBOOK_INPROGRESS = "RunbookInProgress",
  SCHEDULED = "Scheduled",
  SUCCESS = "Success",
  TIMEDOUT = "TimedOut",
  WAITING = "Waiting",
}

export enum AutomationSubtype {
  ChangeRequest = "ChangeRequest",
}

export enum AutomationType {
  CrossAccount = "CrossAccount",
  Local = "Local",
}

export enum ExecutionMode {
  Auto = "Auto",
  Interactive = "Interactive",
}

/**
 * <p>Information about targets that resolved during the Automation execution.</p>
 */
export interface ResolvedTargets {
  /**
   * <p>A list of parameter values sent to targets that resolved during the Automation
   *    execution.</p>
   */
  ParameterValues?: string[];

  /**
   * <p>A boolean value indicating whether the resolved target list is truncated.</p>
   */
  Truncated?: boolean;
}

/**
 * <p>Information about an Automation runbook used in a runbook workflow in Change Manager.</p>
 *          <note>
 *             <p>The Automation runbooks specified for the runbook workflow can't run until all required
 *     approvals for the change request have been received.</p>
 *          </note>
 */
export interface Runbook {
  /**
   * <p>The name of the Automation runbook used in a runbook workflow.</p>
   */
  DocumentName: string | undefined;

  /**
   * <p>The version of the Automation runbook used in a runbook workflow.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>The key-value map of execution parameters, which were supplied when calling
   *     <code>StartChangeRequestExecution</code>.</p>
   */
  Parameters?: Record<string, string[]>;

  /**
   * <p>The name of the parameter used as the target resource for the rate-controlled
   *    runbook workflow. Required if you specify <code>Targets</code>. </p>
   */
  TargetParameterName?: string;

  /**
   * <p>A key-value mapping to target resources that the runbook operation performs tasks on.
   *    Required if you specify <code>TargetParameterName</code>.</p>
   */
  Targets?: Target[];

  /**
   * <p>A key-value mapping of runbook parameters to target resources. Both Targets and TargetMaps
   *    can't be specified together.</p>
   */
  TargetMaps?: Record<string, string[]>[];

  /**
   * <p>The <code>MaxConcurrency</code> value specified by the user when the operation started,
   *    indicating the maximum number of resources that the runbook operation can run on at the same
   *    time.</p>
   */
  MaxConcurrency?: string;

  /**
   * <p>The <code>MaxErrors</code> value specified by the user when the execution started,
   *    indicating the maximum number of errors that can occur during the operation before the updates
   *    are stopped or rolled back.</p>
   */
  MaxErrors?: string;

  /**
   * <p>Information about the Amazon Web Services Regions and Amazon Web Services accounts targeted by the current Runbook
   *    operation.</p>
   */
  TargetLocations?: TargetLocation[];
}

/**
 * <p>Details about a specific Automation execution.</p>
 */
export interface AutomationExecutionMetadata {
  /**
   * <p>The execution ID.</p>
   */
  AutomationExecutionId?: string;

  /**
   * <p>The name of the Automation runbook used during execution.</p>
   */
  DocumentName?: string;

  /**
   * <p>The document version used during the execution.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>The status of the execution.</p>
   */
  AutomationExecutionStatus?: AutomationExecutionStatus | string;

  /**
   * <p>The time the execution started.</p>
   */
  ExecutionStartTime?: Date;

  /**
   * <p>The time the execution finished. This isn't populated if the execution is still in
   *    progress.</p>
   */
  ExecutionEndTime?: Date;

  /**
   * <p>The IAM role ARN of the user who ran the automation.</p>
   */
  ExecutedBy?: string;

  /**
   * <p>An S3 bucket where execution information is stored.</p>
   */
  LogFile?: string;

  /**
   * <p>The list of execution outputs as defined in the Automation runbook.</p>
   */
  Outputs?: Record<string, string[]>;

  /**
   * <p>The Automation execution mode.</p>
   */
  Mode?: ExecutionMode | string;

  /**
   * <p>The execution ID of the parent automation.</p>
   */
  ParentAutomationExecutionId?: string;

  /**
   * <p>The name of the step that is currently running.</p>
   */
  CurrentStepName?: string;

  /**
   * <p>The action of the step that is currently running.</p>
   */
  CurrentAction?: string;

  /**
   * <p>The list of execution outputs as defined in the Automation runbook.</p>
   */
  FailureMessage?: string;

  /**
   * <p>The list of execution outputs as defined in the Automation runbook.</p>
   */
  TargetParameterName?: string;

  /**
   * <p>The targets defined by the user when starting the automation.</p>
   */
  Targets?: Target[];

  /**
   * <p>The specified key-value mapping of document parameters to target resources.</p>
   */
  TargetMaps?: Record<string, string[]>[];

  /**
   * <p>A list of targets that resolved during the execution.</p>
   */
  ResolvedTargets?: ResolvedTargets;

  /**
   * <p>The <code>MaxConcurrency</code> value specified by the user when starting the
   *    automation.</p>
   */
  MaxConcurrency?: string;

  /**
   * <p>The <code>MaxErrors</code> value specified by the user when starting the automation.</p>
   */
  MaxErrors?: string;

  /**
   * <p>The list of execution outputs as defined in the Automation runbook.</p>
   */
  Target?: string;

  /**
   * <p>Use this filter with <a>DescribeAutomationExecutions</a>. Specify either Local or
   *    CrossAccount. CrossAccount is an Automation that runs in multiple Amazon Web Services Regions and
   *    Amazon Web Services accounts. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-automation-multiple-accounts-and-regions.html">Running Automation workflows in multiple Amazon Web Services Regions and accounts</a> in the
   *     <i>Amazon Web Services Systems Manager User Guide</i>. </p>
   */
  AutomationType?: AutomationType | string;

  /**
   * <p>The details for the CloudWatch alarm applied to your automation.</p>
   */
  AlarmConfiguration?: AlarmConfiguration;

  /**
   * <p>The CloudWatch alarm that was invoked by the automation.</p>
   */
  TriggeredAlarms?: AlarmStateInformation[];

  /**
   * <p>The subtype of the Automation operation. Currently, the only supported value is
   *     <code>ChangeRequest</code>.</p>
   */
  AutomationSubtype?: AutomationSubtype | string;

  /**
   * <p>The date and time the Automation operation is scheduled to start.</p>
   */
  ScheduledTime?: Date;

  /**
   * <p>Information about the Automation runbooks that are run during a runbook workflow in
   *    Change Manager.</p>
   *          <note>
   *             <p>The Automation runbooks specified for the runbook workflow can't run until all required
   *     approvals for the change request have been received.</p>
   *          </note>
   */
  Runbooks?: Runbook[];

  /**
   * <p>The ID of an OpsItem that is created to represent a Change Manager change request.</p>
   */
  OpsItemId?: string;

  /**
   * <p>The ID of a State Manager association used in the Automation operation.</p>
   */
  AssociationId?: string;

  /**
   * <p>The name of the Change Manager change request.</p>
   */
  ChangeRequestName?: string;
}

export interface DescribeAutomationExecutionsResult {
  /**
   * <p>The list of details about each automation execution which has occurred which matches the
   *    filter specification, if any.</p>
   */
  AutomationExecutionMetadataList?: AutomationExecutionMetadata[];

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   */
  NextToken?: string;
}

/**
 * <p>The specified key isn't valid.</p>
 */
export class InvalidFilterKey extends __BaseException {
  readonly name: "InvalidFilterKey" = "InvalidFilterKey";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidFilterKey, __BaseException>) {
    super({
      name: "InvalidFilterKey",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidFilterKey.prototype);
  }
}

/**
 * <p>The filter value isn't valid. Verify the value and try again.</p>
 */
export class InvalidFilterValue extends __BaseException {
  readonly name: "InvalidFilterValue" = "InvalidFilterValue";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidFilterValue, __BaseException>) {
    super({
      name: "InvalidFilterValue",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidFilterValue.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>There is no automation execution information for the requested automation execution
 *    ID.</p>
 */
export class AutomationExecutionNotFoundException extends __BaseException {
  readonly name: "AutomationExecutionNotFoundException" = "AutomationExecutionNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AutomationExecutionNotFoundException, __BaseException>) {
    super({
      name: "AutomationExecutionNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AutomationExecutionNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

export enum StepExecutionFilterKey {
  ACTION = "Action",
  START_TIME_AFTER = "StartTimeAfter",
  START_TIME_BEFORE = "StartTimeBefore",
  STEP_EXECUTION_ID = "StepExecutionId",
  STEP_EXECUTION_STATUS = "StepExecutionStatus",
  STEP_NAME = "StepName",
}

/**
 * <p>A filter to limit the amount of step execution information returned by the call.</p>
 */
export interface StepExecutionFilter {
  /**
   * <p>One or more keys to limit the results. Valid filter keys include the following: StepName,
   *    Action, StepExecutionId, StepExecutionStatus, StartTimeBefore, StartTimeAfter.</p>
   */
  Key: StepExecutionFilterKey | string | undefined;

  /**
   * <p>The values of the filter key.</p>
   */
  Values: string[] | undefined;
}

export interface DescribeAutomationStepExecutionsRequest {
  /**
   * <p>The Automation execution ID for which you want step execution descriptions.</p>
   */
  AutomationExecutionId: string | undefined;

  /**
   * <p>One or more filters to limit the number of step executions returned by the request.</p>
   */
  Filters?: StepExecutionFilter[];

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>Indicates whether to list step executions in reverse order by start time. The default value
   *    is 'false'.</p>
   */
  ReverseOrder?: boolean;
}

/**
 * <p>Information about an Automation failure.</p>
 */
export interface FailureDetails {
  /**
   * <p>The stage of the Automation execution when the failure occurred. The stages include the
   *    following: InputValidation, PreVerification, Invocation, PostVerification.</p>
   */
  FailureStage?: string;

  /**
   * <p>The type of Automation failure. Failure types include the following: Action, Permission,
   *    Throttling, Verification, Internal.</p>
   */
  FailureType?: string;

  /**
   * <p>Detailed information about the Automation step failure.</p>
   */
  Details?: Record<string, string[]>;
}

/**
 * <p>Detailed information about an the execution state of an Automation step.</p>
 */
export interface StepExecution {
  /**
   * <p>The name of this execution step.</p>
   */
  StepName?: string;

  /**
   * <p>The action this step performs. The action determines the behavior of the step.</p>
   */
  Action?: string;

  /**
   * <p>The timeout seconds of the step.</p>
   */
  TimeoutSeconds?: number;

  /**
   * <p>The action to take if the step fails. The default value is <code>Abort</code>.</p>
   */
  OnFailure?: string;

  /**
   * <p>The maximum number of tries to run the action of the step. The default value is
   *     <code>1</code>.</p>
   */
  MaxAttempts?: number;

  /**
   * <p>If a step has begun execution, this contains the time the step started. If the step is in
   *    Pending status, this field isn't populated.</p>
   */
  ExecutionStartTime?: Date;

  /**
   * <p>If a step has finished execution, this contains the time the execution ended. If the step
   *    hasn't yet concluded, this field isn't populated.</p>
   */
  ExecutionEndTime?: Date;

  /**
   * <p>The execution status for this step.</p>
   */
  StepStatus?: AutomationExecutionStatus | string;

  /**
   * <p>The response code returned by the execution of the step.</p>
   */
  ResponseCode?: string;

  /**
   * <p>Fully-resolved values passed into the step before execution.</p>
   */
  Inputs?: Record<string, string>;

  /**
   * <p>Returned values from the execution of the step.</p>
   */
  Outputs?: Record<string, string[]>;

  /**
   * <p>A message associated with the response code for an execution.</p>
   */
  Response?: string;

  /**
   * <p>If a step failed, this message explains why the execution failed.</p>
   */
  FailureMessage?: string;

  /**
   * <p>Information about the Automation failure.</p>
   */
  FailureDetails?: FailureDetails;

  /**
   * <p>The unique ID of a step execution.</p>
   */
  StepExecutionId?: string;

  /**
   * <p>A user-specified list of parameters to override when running a step.</p>
   */
  OverriddenParameters?: Record<string, string[]>;

  /**
   * <p>The flag which can be used to end automation no matter whether the step succeeds or
   *    fails.</p>
   */
  IsEnd?: boolean;

  /**
   * <p>The next step after the step succeeds.</p>
   */
  NextStep?: string;

  /**
   * <p>The flag which can be used to help decide whether the failure of current step leads to the
   *    Automation failure.</p>
   */
  IsCritical?: boolean;

  /**
   * <p>Strategies used when step fails, we support Continue and Abort. Abort will fail the
   *    automation when the step fails. Continue will ignore the failure of current step and allow
   *    automation to run the next step. With conditional branching, we add step:stepName to support the
   *    automation to go to another specific step.</p>
   */
  ValidNextSteps?: string[];

  /**
   * <p>The targets for the step execution.</p>
   */
  Targets?: Target[];

  /**
   * <p>The combination of Amazon Web Services Regions and Amazon Web Services accounts targeted by the current Automation
   *    execution.</p>
   */
  TargetLocation?: TargetLocation;

  /**
   * <p>The CloudWatch alarms that were invoked by the automation.</p>
   */
  TriggeredAlarms?: AlarmStateInformation[];
}

export interface DescribeAutomationStepExecutionsResult {
  /**
   * <p>A list of details about the current state of all steps that make up an execution.</p>
   */
  StepExecutions?: StepExecution[];

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   */
  NextToken?: string;
}

/**
 * <p>Defines a filter used in Patch Manager APIs. Supported filter keys depend on the API
 *    operation that includes the filter. Patch Manager API operations that use
 *     <code>PatchOrchestratorFilter</code> include the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DescribeAvailablePatches</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeInstancePatches</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribePatchBaselines</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribePatchGroups</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface PatchOrchestratorFilter {
  /**
   * <p>The key for the filter.</p>
   */
  Key?: string;

  /**
   * <p>The value for the filter.</p>
   */
  Values?: string[];
}

export interface DescribeAvailablePatchesRequest {
  /**
   * <p>Each element in the array is a structure containing a key-value pair.</p>
   *          <p>
   *             <b>Windows Server</b>
   *          </p>
   *          <p>Supported keys for Windows Server managed node patches include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>PATCH_SET</code>
   *                   </b>
   *                </p>
   *                <p>Sample values: <code>OS</code> | <code>APPLICATION</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>PRODUCT</code>
   *                   </b>
   *                </p>
   *                <p>Sample values: <code>WindowsServer2012</code> | <code>Office 2010</code> |
   *       <code>MicrosoftDefenderAntivirus</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>PRODUCT_FAMILY</code>
   *                   </b>
   *                </p>
   *                <p>Sample values: <code>Windows</code> | <code>Office</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>MSRC_SEVERITY</code>
   *                   </b>
   *                </p>
   *                <p>Sample values: <code>ServicePacks</code> | <code>Important</code> | <code>Moderate</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>CLASSIFICATION</code>
   *                   </b>
   *                </p>
   *                <p>Sample values: <code>ServicePacks</code> | <code>SecurityUpdates</code> |
   *       <code>DefinitionUpdates</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>PATCH_ID</code>
   *                   </b>
   *                </p>
   *                <p>Sample values: <code>KB123456</code> | <code>KB4516046</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Linux</b>
   *          </p>
   *          <important>
   *             <p>When specifying filters for Linux patches, you must specify a key-pair for
   *      <code>PRODUCT</code>. For example, using the Command Line Interface (CLI), the
   *     following command fails:</p>
   *             <p>
   *                <code>aws ssm describe-available-patches --filters Key=CVE_ID,Values=CVE-2018-3615</code>
   *             </p>
   *             <p>However, the following command succeeds:</p>
   *             <p>
   *                <code>aws ssm describe-available-patches --filters Key=PRODUCT,Values=AmazonLinux2018.03
   *      Key=CVE_ID,Values=CVE-2018-3615</code>
   *             </p>
   *          </important>
   *          <p>Supported keys for Linux managed node patches include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>PRODUCT</code>
   *                   </b>
   *                </p>
   *                <p>Sample values: <code>AmazonLinux2018.03</code> | <code>AmazonLinux2.0</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>NAME</code>
   *                   </b>
   *                </p>
   *                <p>Sample values: <code>kernel-headers</code> | <code>samba-python</code> | <code>php</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>SEVERITY</code>
   *                   </b>
   *                </p>
   *                <p>Sample values: <code>Critical</code> | <code>Important</code> | <code>Medium</code> |
   *       <code>Low</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>EPOCH</code>
   *                   </b>
   *                </p>
   *                <p>Sample values: <code>0</code> | <code>1</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>VERSION</code>
   *                   </b>
   *                </p>
   *                <p>Sample values: <code>78.6.1</code> | <code>4.10.16</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>RELEASE</code>
   *                   </b>
   *                </p>
   *                <p>Sample values: <code>9.56.amzn1</code> | <code>1.amzn2</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>ARCH</code>
   *                   </b>
   *                </p>
   *                <p>Sample values: <code>i686</code> | <code>x86_64</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>REPOSITORY</code>
   *                   </b>
   *                </p>
   *                <p>Sample values: <code>Core</code> | <code>Updates</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>ADVISORY_ID</code>
   *                   </b>
   *                </p>
   *                <p>Sample values: <code>ALAS-2018-1058</code> | <code>ALAS2-2021-1594</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>CVE_ID</code>
   *                   </b>
   *                </p>
   *                <p>Sample values: <code>CVE-2018-3615</code> | <code>CVE-2020-1472</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>BUGZILLA_ID</code>
   *                   </b>
   *                </p>
   *                <p>Sample values: <code>1463241</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Filters?: PatchOrchestratorFilter[];

  /**
   * <p>The maximum number of patches to return (per page).</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   */
  NextToken?: string;
}

/**
 * <p>Represents metadata about a patch.</p>
 */
export interface Patch {
  /**
   * <p>The ID of the patch. Applies to Windows patches only.</p>
   *          <note>
   *             <p>This ID isn't the same as the Microsoft Knowledge Base ID.</p>
   *          </note>
   */
  Id?: string;

  /**
   * <p>The date the patch was released.</p>
   */
  ReleaseDate?: Date;

  /**
   * <p>The title of the patch.</p>
   */
  Title?: string;

  /**
   * <p>The description of the patch.</p>
   */
  Description?: string;

  /**
   * <p>The URL where more information can be obtained about the patch.</p>
   */
  ContentUrl?: string;

  /**
   * <p>The name of the vendor providing the patch.</p>
   */
  Vendor?: string;

  /**
   * <p>The product family the patch is applicable for. For example, <code>Windows</code> or
   *     <code>Amazon Linux 2</code>.</p>
   */
  ProductFamily?: string;

  /**
   * <p>The specific product the patch is applicable for. For example,
   *     <code>WindowsServer2016</code> or <code>AmazonLinux2018.03</code>.</p>
   */
  Product?: string;

  /**
   * <p>The classification of the patch. For example, <code>SecurityUpdates</code>,
   *     <code>Updates</code>, or <code>CriticalUpdates</code>.</p>
   */
  Classification?: string;

  /**
   * <p>The severity of the patch, such as <code>Critical</code>, <code>Important</code>, or
   *     <code>Moderate</code>. Applies to Windows patches only.</p>
   */
  MsrcSeverity?: string;

  /**
   * <p>The Microsoft Knowledge Base ID of the patch. Applies to Windows patches only.</p>
   */
  KbNumber?: string;

  /**
   * <p>The ID of the Microsoft Security Response Center (MSRC) bulletin the patch is related to.
   *    For example, <code>MS14-045</code>. Applies to Windows patches only.</p>
   */
  MsrcNumber?: string;

  /**
   * <p>The language of the patch if it's language-specific.</p>
   */
  Language?: string;

  /**
   * <p>The Advisory ID of the patch. For example, <code>RHSA-2020:3779</code>. Applies to
   *    Linux-based managed nodes only.</p>
   */
  AdvisoryIds?: string[];

  /**
   * <p>The Bugzilla ID of the patch. For example, <code>1600646</code>. Applies to Linux-based
   *    managed nodes only.</p>
   */
  BugzillaIds?: string[];

  /**
   * <p>The Common Vulnerabilities and Exposures (CVE) ID of the patch. For example,
   *     <code>CVE-2011-3192</code>. Applies to Linux-based managed nodes only.</p>
   */
  CVEIds?: string[];

  /**
   * <p>The name of the patch. Applies to Linux-based managed nodes only.</p>
   */
  Name?: string;

  /**
   * <p>The epoch of the patch. For example in
   *    <code>pkg-example-EE-20180914-2.2.amzn1.noarch</code>, the epoch value is
   *    <code>20180914-2</code>. Applies to Linux-based managed nodes only.</p>
   */
  Epoch?: number;

  /**
   * <p>The version number of the patch. For example, in
   *     <code>example-pkg-1.710.10-2.7.abcd.x86_64</code>, the version number is indicated by
   *     <code>-1</code>. Applies to Linux-based managed nodes only.</p>
   */
  Version?: string;

  /**
   * <p>The particular release of a patch. For example, in
   *     <code>pkg-example-EE-20180914-2.2.amzn1.noarch</code>, the release is <code>2.amaz1</code>.
   *    Applies to Linux-based managed nodes only.</p>
   */
  Release?: string;

  /**
   * <p>The architecture of the patch. For example, in
   *     <code>example-pkg-0.710.10-2.7.abcd.x86_64</code>, the architecture is indicated by
   *     <code>x86_64</code>. Applies to Linux-based managed nodes only.</p>
   */
  Arch?: string;

  /**
   * <p>The severity level of the patch. For example, <code>CRITICAL</code> or
   *    <code>MODERATE</code>.</p>
   */
  Severity?: string;

  /**
   * <p>The source patch repository for the operating system and version, such as
   *     <code>trusty-security</code> for Ubuntu Server 14.04 LTE and <code>focal-security</code> for
   *    Ubuntu Server 20.04 LTE. Applies to Linux-based managed nodes only.</p>
   */
  Repository?: string;
}

export interface DescribeAvailablePatchesResult {
  /**
   * <p>An array of patches. Each entry in the array is a patch structure.</p>
   */
  Patches?: Patch[];

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   */
  NextToken?: string;
}

export interface DescribeDocumentRequest {
  /**
   * <p>The name of the SSM document.</p>
   */
  Name: string | undefined;

  /**
   * <p>The document version for which you want information. Can be a specific version or the
   *    default version.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>An optional field specifying the version of the artifact associated with the document. For
   *    example, "Release 12, Update 6". This value is unique across all versions of a document, and
   *    can't be changed.</p>
   */
  VersionName?: string;
}

export interface DescribeDocumentResult {
  /**
   * <p>Information about the SSM document.</p>
   */
  Document?: DocumentDescription;
}

export enum DocumentPermissionType {
  SHARE = "Share",
}

export interface DescribeDocumentPermissionRequest {
  /**
   * <p>The name of the document for which you are the owner.</p>
   */
  Name: string | undefined;

  /**
   * <p>The permission type for the document. The permission type can be
   *    <i>Share</i>.</p>
   */
  PermissionType: DocumentPermissionType | string | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   */
  NextToken?: string;
}

export interface DescribeDocumentPermissionResponse {
  /**
   * <p>The account IDs that have permission to use this document. The ID can be either an
   *    Amazon Web Services account or <i>All</i>.</p>
   */
  AccountIds?: string[];

  /**
   * <p>A list of Amazon Web Services accounts where the current document is shared and the version shared with
   *    each account.</p>
   */
  AccountSharingInfoList?: AccountSharingInfo[];

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *    results.</p>
   */
  NextToken?: string;
}

/**
 * <p>The permission type isn't supported. <i>Share</i> is the only supported
 *    permission type.</p>
 */
export class InvalidPermissionType extends __BaseException {
  readonly name: "InvalidPermissionType" = "InvalidPermissionType";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPermissionType, __BaseException>) {
    super({
      name: "InvalidPermissionType",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPermissionType.prototype);
    this.Message = opts.Message;
  }
}

export interface DescribeEffectiveInstanceAssociationsRequest {
  /**
   * <p>The managed node ID for which you want to view all associations.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   */
  NextToken?: string;
}

/**
 * <p>One or more association documents on the managed node. </p>
 */
export interface InstanceAssociation {
  /**
   * <p>The association ID.</p>
   */
  AssociationId?: string;

  /**
   * <p>The managed node ID.</p>
   */
  InstanceId?: string;

  /**
   * <p>The content of the association document for the managed node(s).</p>
   */
  Content?: string;

  /**
   * <p>Version information for the association on the managed node.</p>
   */
  AssociationVersion?: string;
}

export interface DescribeEffectiveInstanceAssociationsResult {
  /**
   * <p>The associations for the requested managed node.</p>
   */
  Associations?: InstanceAssociation[];

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   */
  NextToken?: string;
}

export interface DescribeEffectivePatchesForPatchBaselineRequest {
  /**
   * <p>The ID of the patch baseline to retrieve the effective patches for.</p>
   */
  BaselineId: string | undefined;

  /**
   * <p>The maximum number of patches to return (per page).</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   */
  NextToken?: string;
}

export enum PatchDeploymentStatus {
  Approved = "APPROVED",
  ExplicitApproved = "EXPLICIT_APPROVED",
  ExplicitRejected = "EXPLICIT_REJECTED",
  PendingApproval = "PENDING_APPROVAL",
}

/**
 * <p>Information about the approval status of a patch.</p>
 */
export interface PatchStatus {
  /**
   * <p>The approval status of a patch.</p>
   */
  DeploymentStatus?: PatchDeploymentStatus | string;

  /**
   * <p>The compliance severity level for a patch.</p>
   */
  ComplianceLevel?: PatchComplianceLevel | string;

  /**
   * <p>The date the patch was approved (or will be approved if the status is
   *     <code>PENDING_APPROVAL</code>).</p>
   */
  ApprovalDate?: Date;
}

/**
 * <p>The <code>EffectivePatch</code> structure defines metadata about a patch along with the
 *    approval state of the patch in a particular patch baseline. The approval state includes
 *    information about whether the patch is currently approved, due to be approved by a rule,
 *    explicitly approved, or explicitly rejected and the date the patch was or will be
 *    approved.</p>
 */
export interface EffectivePatch {
  /**
   * <p>Provides metadata for a patch, including information such as the KB ID, severity,
   *    classification and a URL for where more information can be obtained about the patch.</p>
   */
  Patch?: Patch;

  /**
   * <p>The status of the patch in a patch baseline. This includes information about whether the
   *    patch is currently approved, due to be approved by a rule, explicitly approved, or explicitly
   *    rejected and the date the patch was or will be approved.</p>
   */
  PatchStatus?: PatchStatus;
}

export interface DescribeEffectivePatchesForPatchBaselineResult {
  /**
   * <p>An array of patches and patch status.</p>
   */
  EffectivePatches?: EffectivePatch[];

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   */
  NextToken?: string;
}

/**
 * <p>The operating systems you specified isn't supported, or the operation isn't supported for
 *    the operating system.</p>
 */
export class UnsupportedOperatingSystem extends __BaseException {
  readonly name: "UnsupportedOperatingSystem" = "UnsupportedOperatingSystem";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedOperatingSystem, __BaseException>) {
    super({
      name: "UnsupportedOperatingSystem",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedOperatingSystem.prototype);
    this.Message = opts.Message;
  }
}

export interface DescribeInstanceAssociationsStatusRequest {
  /**
   * <p>The managed node IDs for which you want association status information.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   */
  NextToken?: string;
}

/**
 * <p>A URL for the Amazon Web Services Systems Manager (Systems Manager) bucket where you want to store the
 *    results of this request.</p>
 */
export interface S3OutputUrl {
  /**
   * <p>A URL for an S3 bucket where you want to store the results of this request.</p>
   */
  OutputUrl?: string;
}

/**
 * <p>The URL of S3 bucket where you want to store the results of this request.</p>
 */
export interface InstanceAssociationOutputUrl {
  /**
   * <p>The URL of S3 bucket where you want to store the results of this request.</p>
   */
  S3OutputUrl?: S3OutputUrl;
}

/**
 * <p>Status information about the association.</p>
 */
export interface InstanceAssociationStatusInfo {
  /**
   * <p>The association ID.</p>
   */
  AssociationId?: string;

  /**
   * <p>The name of the association.</p>
   */
  Name?: string;

  /**
   * <p>The association document versions.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>The version of the association applied to the managed node.</p>
   */
  AssociationVersion?: string;

  /**
   * <p>The managed node ID where the association was created.</p>
   */
  InstanceId?: string;

  /**
   * <p>The date the association ran. </p>
   */
  ExecutionDate?: Date;

  /**
   * <p>Status information about the association.</p>
   */
  Status?: string;

  /**
   * <p>Detailed status information about the association.</p>
   */
  DetailedStatus?: string;

  /**
   * <p>Summary information about association execution.</p>
   */
  ExecutionSummary?: string;

  /**
   * <p>An error code returned by the request to create the association.</p>
   */
  ErrorCode?: string;

  /**
   * <p>A URL for an S3 bucket where you want to store the results of this request.</p>
   */
  OutputUrl?: InstanceAssociationOutputUrl;

  /**
   * <p>The name of the association applied to the managed node.</p>
   */
  AssociationName?: string;
}

export interface DescribeInstanceAssociationsStatusResult {
  /**
   * <p>Status information about the association.</p>
   */
  InstanceAssociationStatusInfos?: InstanceAssociationStatusInfo[];

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   */
  NextToken?: string;
}

/**
 * <p>The filters to describe or get information about your managed nodes.</p>
 */
export interface InstanceInformationStringFilter {
  /**
   * <p>The filter key name to describe your managed nodes.</p>
   *          <p>Valid filter key values: ActivationIds | AgentVersion | AssociationStatus | IamRole |
   *    InstanceIds | PingStatus | PlatformTypes | ResourceType | SourceIds | SourceTypes | "tag-key" |
   *     "tag:<code>{keyname}</code>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>Valid values for the <code>AssociationStatus</code> filter key: Success | Pending |
   *      Failed</p>
   *             </li>
   *             <li>
   *                <p>Valid values for the <code>PingStatus</code> filter key: Online | ConnectionLost |
   *      Inactive (deprecated)</p>
   *             </li>
   *             <li>
   *                <p>Valid values for the <code>PlatformType</code> filter key: Windows | Linux | MacOS</p>
   *             </li>
   *             <li>
   *                <p>Valid values for the <code>ResourceType</code> filter key: EC2Instance |
   *      ManagedInstance</p>
   *             </li>
   *             <li>
   *                <p>Valid values for the <code>SourceType</code> filter key: AWS::EC2::Instance |
   *      AWS::SSM::ManagedInstance | AWS::IoT::Thing</p>
   *             </li>
   *             <li>
   *                <p>Valid tag examples: <code>Key=tag-key,Values=Purpose</code> |
   *       <code>Key=tag:Purpose,Values=Test</code>.</p>
   *             </li>
   *          </ul>
   */
  Key: string | undefined;

  /**
   * <p>The filter values.</p>
   */
  Values: string[] | undefined;
}

export enum InstanceInformationFilterKey {
  ACTIVATION_IDS = "ActivationIds",
  AGENT_VERSION = "AgentVersion",
  ASSOCIATION_STATUS = "AssociationStatus",
  IAM_ROLE = "IamRole",
  INSTANCE_IDS = "InstanceIds",
  PING_STATUS = "PingStatus",
  PLATFORM_TYPES = "PlatformTypes",
  RESOURCE_TYPE = "ResourceType",
}

/**
 * <p>Describes a filter for a specific list of managed nodes. You can filter node information by
 *    using tags. You specify tags by using a key-value mapping.</p>
 *          <p>Use this operation instead of the <a>DescribeInstanceInformationRequest$InstanceInformationFilterList</a> method. The
 *     <code>InstanceInformationFilterList</code> method is a legacy method and doesn't support tags.
 *   </p>
 */
export interface InstanceInformationFilter {
  /**
   * <p>The name of the filter. </p>
   */
  key: InstanceInformationFilterKey | string | undefined;

  /**
   * <p>The filter values.</p>
   */
  valueSet: string[] | undefined;
}

export interface DescribeInstanceInformationRequest {
  /**
   * <p>This is a legacy method. We recommend that you don't use this method. Instead, use the
   *     <code>Filters</code> data type. <code>Filters</code> enables you to return node information by
   *    filtering based on tags applied to managed nodes.</p>
   *          <note>
   *             <p>Attempting to use <code>InstanceInformationFilterList</code> and <code>Filters</code> leads
   *     to an exception error. </p>
   *          </note>
   */
  InstanceInformationFilterList?: InstanceInformationFilter[];

  /**
   * <p>One or more filters. Use a filter to return a more specific list of managed nodes. You can
   *    filter based on tags applied to your managed nodes. Use this <code>Filters</code> data type
   *    instead of <code>InstanceInformationFilterList</code>, which is deprecated.</p>
   */
  Filters?: InstanceInformationStringFilter[];

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results. </p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   */
  NextToken?: string;
}

/**
 * <p>Status information about the aggregated associations.</p>
 */
export interface InstanceAggregatedAssociationOverview {
  /**
   * <p>Detailed status information about the aggregated associations.</p>
   */
  DetailedStatus?: string;

  /**
   * <p>The number of associations for the managed node(s).</p>
   */
  InstanceAssociationStatusAggregatedCount?: Record<string, number>;
}

export enum PingStatus {
  CONNECTION_LOST = "ConnectionLost",
  INACTIVE = "Inactive",
  ONLINE = "Online",
}

export enum ResourceType {
  DOCUMENT = "Document",
  EC2_INSTANCE = "EC2Instance",
  MANAGED_INSTANCE = "ManagedInstance",
}

export enum SourceType {
  AWS_EC2_INSTANCE = "AWS::EC2::Instance",
  AWS_IOT_THING = "AWS::IoT::Thing",
  AWS_SSM_MANAGEDINSTANCE = "AWS::SSM::ManagedInstance",
}

/**
 * <p>Describes a filter for a specific list of managed nodes. </p>
 */
export interface InstanceInformation {
  /**
   * <p>The managed node ID. </p>
   */
  InstanceId?: string;

  /**
   * <p>Connection status of SSM Agent. </p>
   *          <note>
   *             <p>The status <code>Inactive</code> has been deprecated and is no longer in use.</p>
   *          </note>
   */
  PingStatus?: PingStatus | string;

  /**
   * <p>The date and time when the agent last pinged the Systems Manager service. </p>
   */
  LastPingDateTime?: Date;

  /**
   * <p>The version of SSM Agent running on your Linux managed node. </p>
   */
  AgentVersion?: string;

  /**
   * <p>Indicates whether the latest version of SSM Agent is running on your Linux managed node. This
   *    field doesn't indicate whether or not the latest version is installed on Windows managed nodes,
   *    because some older versions of Windows Server use the EC2Config service to process Systems Manager
   *    requests.</p>
   */
  IsLatestVersion?: boolean;

  /**
   * <p>The operating system platform type. </p>
   */
  PlatformType?: PlatformType | string;

  /**
   * <p>The name of the operating system platform running on your managed node. </p>
   */
  PlatformName?: string;

  /**
   * <p>The version of the OS platform running on your managed node. </p>
   */
  PlatformVersion?: string;

  /**
   * <p>The activation ID created by Amazon Web Services Systems Manager when the server or virtual machine (VM) was
   *    registered.</p>
   */
  ActivationId?: string;

  /**
   * <p>The Identity and Access Management (IAM) role assigned to the on-premises Systems Manager
   *    managed node. This call doesn't return the IAM role for Amazon Elastic Compute Cloud
   *     (Amazon EC2) instances. To retrieve the IAM role for an EC2 instance, use
   *    the Amazon EC2 <code>DescribeInstances</code> operation. For information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstances.html">DescribeInstances</a> in the <i>Amazon EC2 API Reference</i> or <a href="https://docs.aws.amazon.com/cli/latest/ec2/describe-instances.html">describe-instances</a> in
   *    the <i>Amazon Web Services CLI Command Reference</i>.</p>
   */
  IamRole?: string;

  /**
   * <p>The date the server or VM was registered with Amazon Web Services as a managed node.</p>
   */
  RegistrationDate?: Date;

  /**
   * <p>The type of instance. Instances are either EC2 instances or managed instances. </p>
   */
  ResourceType?: ResourceType | string;

  /**
   * <p>The name assigned to an on-premises server, edge device, or virtual machine (VM) when it is
   *    activated as a Systems Manager managed node. The name is specified as the <code>DefaultInstanceName</code>
   *    property using the <a>CreateActivation</a> command. It is applied to the managed node
   *    by specifying the Activation Code and Activation ID when you install SSM Agent on the node, as
   *    explained in <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-install-managed-linux.html">Install SSM Agent for a
   *     hybrid environment (Linux)</a> and <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-install-managed-win.html">Install SSM Agent for a
   *     hybrid environment (Windows)</a>. To retrieve the <code>Name</code> tag of an EC2 instance,
   *    use the Amazon EC2 <code>DescribeInstances</code> operation. For information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstances.html">DescribeInstances</a> in the <i>Amazon EC2 API Reference</i> or <a href="https://docs.aws.amazon.com/cli/latest/ec2/describe-instances.html">describe-instances</a> in
   *    the <i>Amazon Web Services CLI Command Reference</i>.</p>
   */
  Name?: string;

  /**
   * <p>The IP address of the managed node.</p>
   */
  IPAddress?: string;

  /**
   * <p>The fully qualified host name of the managed node.</p>
   */
  ComputerName?: string;

  /**
   * <p>The status of the association.</p>
   */
  AssociationStatus?: string;

  /**
   * <p>The date the association was last run.</p>
   */
  LastAssociationExecutionDate?: Date;

  /**
   * <p>The last date the association was successfully run.</p>
   */
  LastSuccessfulAssociationExecutionDate?: Date;

  /**
   * <p>Information about the association.</p>
   */
  AssociationOverview?: InstanceAggregatedAssociationOverview;

  /**
   * <p>The ID of the source resource. For IoT Greengrass devices, <code>SourceId</code> is
   *    the Thing name. </p>
   */
  SourceId?: string;

  /**
   * <p>The type of the source resource. For IoT Greengrass devices, <code>SourceType</code>
   *    is <code>AWS::IoT::Thing</code>. </p>
   */
  SourceType?: SourceType | string;
}

export interface DescribeInstanceInformationResult {
  /**
   * <p>The managed node information list.</p>
   */
  InstanceInformationList?: InstanceInformation[];

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty. </p>
   */
  NextToken?: string;
}

/**
 * <p>The specified filter value isn't valid.</p>
 */
export class InvalidInstanceInformationFilterValue extends __BaseException {
  readonly name: "InvalidInstanceInformationFilterValue" = "InvalidInstanceInformationFilterValue";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidInstanceInformationFilterValue, __BaseException>) {
    super({
      name: "InvalidInstanceInformationFilterValue",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidInstanceInformationFilterValue.prototype);
  }
}

export interface DescribeInstancePatchesRequest {
  /**
   * <p>The ID of the managed node whose patch state information should be retrieved.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>Each element in the array is a structure containing a key-value pair.</p>
   *          <p>Supported keys for <code>DescribeInstancePatches</code>include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>Classification</code>
   *                   </b>
   *                </p>
   *                <p>Sample values: <code>Security</code> | <code>SecurityUpdates</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>KBId</code>
   *                   </b>
   *                </p>
   *                <p>Sample values: <code>KB4480056</code> | <code>java-1.7.0-openjdk.x86_64</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>Severity</code>
   *                   </b>
   *                </p>
   *                <p>Sample values: <code>Important</code> | <code>Medium</code> | <code>Low</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>State</code>
   *                   </b>
   *                </p>
   *                <p>Sample values: <code>Installed</code> | <code>InstalledOther</code> |
   *       <code>InstalledPendingReboot</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Filters?: PatchOrchestratorFilter[];

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of patches to return (per page).</p>
   */
  MaxResults?: number;
}

export enum PatchComplianceDataState {
  Failed = "FAILED",
  Installed = "INSTALLED",
  InstalledOther = "INSTALLED_OTHER",
  InstalledPendingReboot = "INSTALLED_PENDING_REBOOT",
  InstalledRejected = "INSTALLED_REJECTED",
  Missing = "MISSING",
  NotApplicable = "NOT_APPLICABLE",
}

/**
 * <p>Information about the state of a patch on a particular managed node as it relates to the
 *    patch baseline used to patch the node.</p>
 */
export interface PatchComplianceData {
  /**
   * <p>The title of the patch.</p>
   */
  Title: string | undefined;

  /**
   * <p>The operating system-specific ID of the patch.</p>
   */
  KBId: string | undefined;

  /**
   * <p>The classification of the patch, such as <code>SecurityUpdates</code>, <code>Updates</code>,
   *    and <code>CriticalUpdates</code>.</p>
   */
  Classification: string | undefined;

  /**
   * <p>The severity of the patch such as <code>Critical</code>, <code>Important</code>, and
   *     <code>Moderate</code>.</p>
   */
  Severity: string | undefined;

  /**
   * <p>The state of the patch on the managed node, such as INSTALLED or FAILED.</p>
   *          <p>For descriptions of each patch state, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-compliance-about.html#sysman-compliance-monitor-patch">About patch compliance</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   */
  State: PatchComplianceDataState | string | undefined;

  /**
   * <p>The date/time the patch was installed on the managed node. Not all operating systems provide
   *    this level of information.</p>
   */
  InstalledTime: Date | undefined;

  /**
   * <p>The IDs of one or more Common Vulnerabilities and Exposure (CVE) issues that are resolved by
   *    the patch.</p>
   */
  CVEIds?: string;
}

export interface DescribeInstancePatchesResult {
  /**
   * <p>Each entry in the array is a structure containing:</p>
   *          <ul>
   *             <li>
   *                <p>Title (string)</p>
   *             </li>
   *             <li>
   *                <p>KBId (string)</p>
   *             </li>
   *             <li>
   *                <p>Classification (string)</p>
   *             </li>
   *             <li>
   *                <p>Severity (string)</p>
   *             </li>
   *             <li>
   *                <p>State (string, such as "INSTALLED" or "FAILED")</p>
   *             </li>
   *             <li>
   *                <p>InstalledTime (DateTime)</p>
   *             </li>
   *             <li>
   *                <p>InstalledBy (string)</p>
   *             </li>
   *          </ul>
   */
  Patches?: PatchComplianceData[];

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   */
  NextToken?: string;
}

export interface DescribeInstancePatchStatesRequest {
  /**
   * <p>The ID of the managed node for which patch state information should be retrieved.</p>
   */
  InstanceIds: string[] | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of managed nodes to return (per page).</p>
   */
  MaxResults?: number;
}

export enum PatchOperationType {
  INSTALL = "Install",
  SCAN = "Scan",
}

export enum RebootOption {
  NO_REBOOT = "NoReboot",
  REBOOT_IF_NEEDED = "RebootIfNeeded",
}

/**
 * <p>Defines the high-level patch compliance state for a managed node, providing information
 *    about the number of installed, missing, not applicable, and failed patches along with metadata
 *    about the operation when this information was gathered for the managed node.</p>
 */
export interface InstancePatchState {
  /**
   * <p>The ID of the managed node the high-level patch compliance information was collected
   *    for.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The name of the patch group the managed node belongs to.</p>
   */
  PatchGroup: string | undefined;

  /**
   * <p>The ID of the patch baseline used to patch the managed node.</p>
   */
  BaselineId: string | undefined;

  /**
   * <p>The ID of the patch baseline snapshot used during the patching operation when this
   *    compliance data was collected.</p>
   */
  SnapshotId?: string;

  /**
   * <p>An https URL or an Amazon Simple Storage Service (Amazon S3) path-style URL to a list of
   *    patches to be installed. This patch installation list, which you maintain in an S3 bucket in YAML
   *    format and specify in the SSM document <code>AWS-RunPatchBaseline</code>, overrides the patches
   *    specified by the default patch baseline.</p>
   *          <p>For more information about the <code>InstallOverrideList</code> parameter, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-about-aws-runpatchbaseline.html">About the
   *      <code>AWS-RunPatchBaseline</code>
   *             </a> SSM document in the
   *     <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   */
  InstallOverrideList?: string;

  /**
   * <p>Placeholder information. This field will always be empty in the current release of the
   *    service.</p>
   */
  OwnerInformation?: string;

  /**
   * <p>The number of patches from the patch baseline that are installed on the managed node.</p>
   */
  InstalledCount?: number;

  /**
   * <p>The number of patches not specified in the patch baseline that are installed on the managed
   *    node.</p>
   */
  InstalledOtherCount?: number;

  /**
   * <p>The number of patches installed by Patch Manager since the last time the managed node was
   *    rebooted.</p>
   */
  InstalledPendingRebootCount?: number;

  /**
   * <p>The number of patches installed on a managed node that are specified in a
   *     <code>RejectedPatches</code> list. Patches with a status of <code>InstalledRejected</code> were
   *    typically installed before they were added to a <code>RejectedPatches</code> list.</p>
   *          <note>
   *             <p>If <code>ALLOW_AS_DEPENDENCY</code> is the specified option for
   *      <code>RejectedPatchesAction</code>, the value of <code>InstalledRejectedCount</code> will
   *     always be <code>0</code> (zero).</p>
   *          </note>
   */
  InstalledRejectedCount?: number;

  /**
   * <p>The number of patches from the patch baseline that are applicable for the managed node but
   *    aren't currently installed.</p>
   */
  MissingCount?: number;

  /**
   * <p>The number of patches from the patch baseline that were attempted to be installed during the
   *    last patching operation, but failed to install.</p>
   */
  FailedCount?: number;

  /**
   * <p>The number of patches beyond the supported limit of <code>NotApplicableCount</code> that
   *    aren't reported by name to Inventory. Inventory is a capability of Amazon Web Services Systems Manager.</p>
   */
  UnreportedNotApplicableCount?: number;

  /**
   * <p>The number of patches from the patch baseline that aren't applicable for the managed node
   *    and therefore aren't installed on the node. This number may be truncated if the list of patch
   *    names is very large. The number of patches beyond this limit are reported in
   *     <code>UnreportedNotApplicableCount</code>.</p>
   */
  NotApplicableCount?: number;

  /**
   * <p>The time the most recent patching operation was started on the managed node.</p>
   */
  OperationStartTime: Date | undefined;

  /**
   * <p>The time the most recent patching operation completed on the managed node.</p>
   */
  OperationEndTime: Date | undefined;

  /**
   * <p>The type of patching operation that was performed: or </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SCAN</code> assesses the patch compliance state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INSTALL</code> installs missing patches.</p>
   *             </li>
   *          </ul>
   */
  Operation: PatchOperationType | string | undefined;

  /**
   * <p>The time of the last attempt to patch the managed node with <code>NoReboot</code> specified
   *    as the reboot option.</p>
   */
  LastNoRebootInstallOperationTime?: Date;

  /**
   * <p>Indicates the reboot option specified in the patch baseline.</p>
   *          <note>
   *             <p>Reboot options apply to <code>Install</code> operations only. Reboots aren't attempted for
   *     Patch Manager <code>Scan</code> operations.</p>
   *          </note>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>RebootIfNeeded</code>: Patch Manager tries to reboot the managed node if it
   *      installed any patches, or if any patches are detected with a status of
   *       <code>InstalledPendingReboot</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NoReboot</code>: Patch Manager attempts to install missing packages without trying
   *      to reboot the system. Patches installed with this option are assigned a status of
   *       <code>InstalledPendingReboot</code>. These patches might not be in effect until a reboot is
   *      performed.</p>
   *             </li>
   *          </ul>
   */
  RebootOption?: RebootOption | string;

  /**
   * <p>The number of patches per node that are specified as <code>Critical</code> for compliance
   *    reporting in the patch baseline aren't installed. These patches might be missing, have failed
   *    installation, were rejected, or were installed but awaiting a required managed node reboot. The
   *    status of these managed nodes is <code>NON_COMPLIANT</code>.</p>
   */
  CriticalNonCompliantCount?: number;

  /**
   * <p>The number of patches per node that are specified as <code>Security</code> in a patch
   *    advisory aren't installed. These patches might be missing, have failed installation, were
   *    rejected, or were installed but awaiting a required managed node reboot. The status of these
   *    managed nodes is <code>NON_COMPLIANT</code>.</p>
   */
  SecurityNonCompliantCount?: number;

  /**
   * <p>The number of patches per node that are specified as other than <code>Critical</code> or
   *     <code>Security</code> but aren't compliant with the patch baseline. The status of these managed
   *    nodes is <code>NON_COMPLIANT</code>.</p>
   */
  OtherNonCompliantCount?: number;
}

export interface DescribeInstancePatchStatesResult {
  /**
   * <p>The high-level patch state for the requested managed nodes.</p>
   */
  InstancePatchStates?: InstancePatchState[];

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   */
  NextToken?: string;
}

export enum InstancePatchStateOperatorType {
  EQUAL = "Equal",
  GREATER_THAN = "GreaterThan",
  LESS_THAN = "LessThan",
  NOT_EQUAL = "NotEqual",
}

/**
 * <p>Defines a filter used in <a>DescribeInstancePatchStatesForPatchGroup</a> to scope
 *    down the information returned by the API.</p>
 *          <p>
 *             <b>Example</b>: To filter for all managed nodes in a patch group
 *    having more than three patches with a <code>FailedCount</code> status, use the following for the
 *    filter:</p>
 *          <ul>
 *             <li>
 *                <p>Value for <code>Key</code>: <code>FailedCount</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Value for <code>Type</code>: <code>GreaterThan</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Value for <code>Values</code>: <code>3</code>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface InstancePatchStateFilter {
  /**
   * <p>The key for the filter. Supported values include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>InstalledCount</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>InstalledOtherCount</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>InstalledPendingRebootCount</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>InstalledRejectedCount</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MissingCount</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FailedCount</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UnreportedNotApplicableCount</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NotApplicableCount</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Key: string | undefined;

  /**
   * <p>The value for the filter. Must be an integer greater than or equal to 0.</p>
   */
  Values: string[] | undefined;

  /**
   * <p>The type of comparison that should be performed for the value.</p>
   */
  Type: InstancePatchStateOperatorType | string | undefined;
}

export interface DescribeInstancePatchStatesForPatchGroupRequest {
  /**
   * <p>The name of the patch group for which the patch state information should be
   *    retrieved.</p>
   */
  PatchGroup: string | undefined;

  /**
   * <p>Each entry in the array is a structure containing:</p>
   *          <ul>
   *             <li>
   *                <p>Key (string between 1 and 200 characters)</p>
   *             </li>
   *             <li>
   *                <p>Values (array containing a single string)</p>
   *             </li>
   *             <li>
   *                <p>Type (string "Equal", "NotEqual", "LessThan", "GreaterThan")</p>
   *             </li>
   *          </ul>
   */
  Filters?: InstancePatchStateFilter[];

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of patches to return (per page).</p>
   */
  MaxResults?: number;
}

export interface DescribeInstancePatchStatesForPatchGroupResult {
  /**
   * <p>The high-level patch state for the requested managed nodes. </p>
   */
  InstancePatchStates?: InstancePatchState[];

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   */
  NextToken?: string;
}

export interface DescribeInventoryDeletionsRequest {
  /**
   * <p>Specify the delete inventory ID for which you want information. This ID was returned by the
   *     <code>DeleteInventory</code> operation.</p>
   */
  DeletionId?: string;

  /**
   * <p>A token to start the list. Use this token to get the next set of results. </p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;
}

export enum InventoryDeletionStatus {
  COMPLETE = "Complete",
  IN_PROGRESS = "InProgress",
}

/**
 * <p>Status information returned by the <code>DeleteInventory</code> operation.</p>
 */
export interface InventoryDeletionStatusItem {
  /**
   * <p>The deletion ID returned by the <code>DeleteInventory</code> operation.</p>
   */
  DeletionId?: string;

  /**
   * <p>The name of the inventory data type.</p>
   */
  TypeName?: string;

  /**
   * <p>The UTC timestamp when the delete operation started.</p>
   */
  DeletionStartTime?: Date;

  /**
   * <p>The status of the operation. Possible values are InProgress and Complete.</p>
   */
  LastStatus?: InventoryDeletionStatus | string;

  /**
   * <p>Information about the status.</p>
   */
  LastStatusMessage?: string;

  /**
   * <p>Information about the delete operation. For more information about this summary, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-inventory-custom.html#sysman-inventory-delete">Understanding the delete inventory summary</a> in the
   *    <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   */
  DeletionSummary?: InventoryDeletionSummary;

  /**
   * <p>The UTC timestamp of when the last status report.</p>
   */
  LastStatusUpdateTime?: Date;
}

export interface DescribeInventoryDeletionsResult {
  /**
   * <p>A list of status items for deleted inventory.</p>
   */
  InventoryDeletions?: InventoryDeletionStatusItem[];

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *    results.</p>
   */
  NextToken?: string;
}

/**
 * <p>The ID specified for the delete operation doesn't exist or isn't valid. Verify the ID and
 *    try again.</p>
 */
export class InvalidDeletionIdException extends __BaseException {
  readonly name: "InvalidDeletionIdException" = "InvalidDeletionIdException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDeletionIdException, __BaseException>) {
    super({
      name: "InvalidDeletionIdException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDeletionIdException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Filter used in the request. Supported filter keys depend on the API operation that includes
 *    the filter. API operations that use <code>MaintenanceWindowFilter></code> include the
 *    following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DescribeMaintenanceWindowExecutions</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeMaintenanceWindowExecutionTaskInvocations</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeMaintenanceWindowExecutionTasks</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeMaintenanceWindows</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeMaintenanceWindowTargets</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeMaintenanceWindowTasks</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface MaintenanceWindowFilter {
  /**
   * <p>The name of the filter.</p>
   */
  Key?: string;

  /**
   * <p>The filter values.</p>
   */
  Values?: string[];
}

export interface DescribeMaintenanceWindowExecutionsRequest {
  /**
   * <p>The ID of the maintenance window whose executions should be retrieved.</p>
   */
  WindowId: string | undefined;

  /**
   * <p>Each entry in the array is a structure containing:</p>
   *          <ul>
   *             <li>
   *                <p>Key. A string between 1 and 128 characters. Supported keys include
   *       <code>ExecutedBefore</code> and <code>ExecutedAfter</code>.</p>
   *             </li>
   *             <li>
   *                <p>Values. An array of strings, each between 1 and 256 characters. Supported values are
   *      date/time strings in a valid ISO 8601 date/time format, such as
   *       <code>2021-11-04T05:00:00Z</code>.</p>
   *             </li>
   *          </ul>
   */
  Filters?: MaintenanceWindowFilter[];

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   */
  NextToken?: string;
}

export enum MaintenanceWindowExecutionStatus {
  Cancelled = "CANCELLED",
  Cancelling = "CANCELLING",
  Failed = "FAILED",
  InProgress = "IN_PROGRESS",
  Pending = "PENDING",
  SkippedOverlapping = "SKIPPED_OVERLAPPING",
  Success = "SUCCESS",
  TimedOut = "TIMED_OUT",
}

/**
 * <p>Describes the information about an execution of a maintenance window. </p>
 */
export interface MaintenanceWindowExecution {
  /**
   * <p>The ID of the maintenance window.</p>
   */
  WindowId?: string;

  /**
   * <p>The ID of the maintenance window execution.</p>
   */
  WindowExecutionId?: string;

  /**
   * <p>The status of the execution.</p>
   */
  Status?: MaintenanceWindowExecutionStatus | string;

  /**
   * <p>The details explaining the status. Not available for all status values.</p>
   */
  StatusDetails?: string;

  /**
   * <p>The time the execution started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The time the execution finished.</p>
   */
  EndTime?: Date;
}

export interface DescribeMaintenanceWindowExecutionsResult {
  /**
   * <p>Information about the maintenance window executions.</p>
   */
  WindowExecutions?: MaintenanceWindowExecution[];

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   */
  NextToken?: string;
}

export interface DescribeMaintenanceWindowExecutionTaskInvocationsRequest {
  /**
   * <p>The ID of the maintenance window execution the task is part of.</p>
   */
  WindowExecutionId: string | undefined;

  /**
   * <p>The ID of the specific task in the maintenance window task that should be retrieved.</p>
   */
  TaskId: string | undefined;

  /**
   * <p>Optional filters used to scope down the returned task invocations. The supported filter key
   *    is <code>STATUS</code> with the corresponding values <code>PENDING</code>,
   *     <code>IN_PROGRESS</code>, <code>SUCCESS</code>, <code>FAILED</code>, <code>TIMED_OUT</code>,
   *     <code>CANCELLING</code>, and <code>CANCELLED</code>.</p>
   */
  Filters?: MaintenanceWindowFilter[];

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   */
  NextToken?: string;
}

export enum MaintenanceWindowTaskType {
  Automation = "AUTOMATION",
  Lambda = "LAMBDA",
  RunCommand = "RUN_COMMAND",
  StepFunctions = "STEP_FUNCTIONS",
}

/**
 * <p>Describes the information about a task invocation for a particular target as part of a task
 *    execution performed as part of a maintenance window execution.</p>
 */
export interface MaintenanceWindowExecutionTaskInvocationIdentity {
  /**
   * <p>The ID of the maintenance window execution that ran the task.</p>
   */
  WindowExecutionId?: string;

  /**
   * <p>The ID of the specific task execution in the maintenance window execution.</p>
   */
  TaskExecutionId?: string;

  /**
   * <p>The ID of the task invocation.</p>
   */
  InvocationId?: string;

  /**
   * <p>The ID of the action performed in the service that actually handled the task invocation. If
   *    the task type is <code>RUN_COMMAND</code>, this value is the command ID.</p>
   */
  ExecutionId?: string;

  /**
   * <p>The task type.</p>
   */
  TaskType?: MaintenanceWindowTaskType | string;

  /**
   * <p>The parameters that were provided for the invocation when it was run.</p>
   */
  Parameters?: string;

  /**
   * <p>The status of the task invocation.</p>
   */
  Status?: MaintenanceWindowExecutionStatus | string;

  /**
   * <p>The details explaining the status of the task invocation. Not available for all status
   *    values. </p>
   */
  StatusDetails?: string;

  /**
   * <p>The time the invocation started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The time the invocation finished.</p>
   */
  EndTime?: Date;

  /**
   * <p>User-provided value that was specified when the target was registered with the maintenance
   *    window. This was also included in any Amazon CloudWatch Events events raised during the task
   *    invocation.</p>
   */
  OwnerInformation?: string;

  /**
   * <p>The ID of the target definition in this maintenance window the invocation was performed
   *    for.</p>
   */
  WindowTargetId?: string;
}

export interface DescribeMaintenanceWindowExecutionTaskInvocationsResult {
  /**
   * <p>Information about the task invocation results per invocation.</p>
   */
  WindowExecutionTaskInvocationIdentities?: MaintenanceWindowExecutionTaskInvocationIdentity[];

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   */
  NextToken?: string;
}

export interface DescribeMaintenanceWindowExecutionTasksRequest {
  /**
   * <p>The ID of the maintenance window execution whose task executions should be retrieved.</p>
   */
  WindowExecutionId: string | undefined;

  /**
   * <p>Optional filters used to scope down the returned tasks. The supported filter key is
   *     <code>STATUS</code> with the corresponding values <code>PENDING</code>,
   *    <code>IN_PROGRESS</code>, <code>SUCCESS</code>, <code>FAILED</code>, <code>TIMED_OUT</code>,
   *     <code>CANCELLING</code>, and <code>CANCELLED</code>.</p>
   */
  Filters?: MaintenanceWindowFilter[];

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   */
  NextToken?: string;
}

/**
 * <p>Information about a task execution performed as part of a maintenance window
 *    execution.</p>
 */
export interface MaintenanceWindowExecutionTaskIdentity {
  /**
   * <p>The ID of the maintenance window execution that ran the task.</p>
   */
  WindowExecutionId?: string;

  /**
   * <p>The ID of the specific task execution in the maintenance window execution.</p>
   */
  TaskExecutionId?: string;

  /**
   * <p>The status of the task execution.</p>
   */
  Status?: MaintenanceWindowExecutionStatus | string;

  /**
   * <p>The details explaining the status of the task execution. Not available for all status
   *    values.</p>
   */
  StatusDetails?: string;

  /**
   * <p>The time the task execution started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The time the task execution finished.</p>
   */
  EndTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the task that ran.</p>
   */
  TaskArn?: string;

  /**
   * <p>The type of task that ran.</p>
   */
  TaskType?: MaintenanceWindowTaskType | string;

  /**
   * <p>The details for the CloudWatch alarm applied to your maintenance window task.</p>
   */
  AlarmConfiguration?: AlarmConfiguration;

  /**
   * <p>The CloudWatch alarm that was invoked by the maintenance window task.</p>
   */
  TriggeredAlarms?: AlarmStateInformation[];
}

export interface DescribeMaintenanceWindowExecutionTasksResult {
  /**
   * <p>Information about the task executions.</p>
   */
  WindowExecutionTaskIdentities?: MaintenanceWindowExecutionTaskIdentity[];

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   */
  NextToken?: string;
}

export interface DescribeMaintenanceWindowsRequest {
  /**
   * <p>Optional filters used to narrow down the scope of the returned maintenance windows.
   *    Supported filter keys are <code>Name</code> and <code>Enabled</code>. For example,
   *     <code>Name=MyMaintenanceWindow</code> and <code>Enabled=True</code>.</p>
   */
  Filters?: MaintenanceWindowFilter[];

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   */
  NextToken?: string;
}

/**
 * <p>Information about the maintenance window.</p>
 */
export interface MaintenanceWindowIdentity {
  /**
   * <p>The ID of the maintenance window.</p>
   */
  WindowId?: string;

  /**
   * <p>The name of the maintenance window.</p>
   */
  Name?: string;

  /**
   * <p>A description of the maintenance window.</p>
   */
  Description?: string;

  /**
   * <p>Indicates whether the maintenance window is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The duration of the maintenance window in hours.</p>
   */
  Duration?: number;

  /**
   * <p>The number of hours before the end of the maintenance window that Amazon Web Services Systems Manager stops scheduling
   *    new tasks for execution.</p>
   */
  Cutoff?: number;

  /**
   * <p>The schedule of the maintenance window in the form of a cron or rate expression.</p>
   */
  Schedule?: string;

  /**
   * <p>The time zone that the scheduled maintenance window executions are based on, in Internet
   *    Assigned Numbers Authority (IANA) format.</p>
   */
  ScheduleTimezone?: string;

  /**
   * <p>The number of days to wait to run a maintenance window after the scheduled cron expression
   *    date and time.</p>
   */
  ScheduleOffset?: number;

  /**
   * <p>The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled
   *    to become inactive.</p>
   */
  EndDate?: string;

  /**
   * <p>The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled
   *    to become active.</p>
   */
  StartDate?: string;

  /**
   * <p>The next time the maintenance window will actually run, taking into account any specified
   *    times for the maintenance window to become active or inactive.</p>
   */
  NextExecutionTime?: string;
}

export interface DescribeMaintenanceWindowsResult {
  /**
   * <p>Information about the maintenance windows.</p>
   */
  WindowIdentities?: MaintenanceWindowIdentity[];

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   */
  NextToken?: string;
}

export enum MaintenanceWindowResourceType {
  Instance = "INSTANCE",
  ResourceGroup = "RESOURCE_GROUP",
}

export interface DescribeMaintenanceWindowScheduleRequest {
  /**
   * <p>The ID of the maintenance window to retrieve information about.</p>
   */
  WindowId?: string;

  /**
   * <p>The managed node ID or key-value pair to retrieve information about.</p>
   */
  Targets?: Target[];

  /**
   * <p>The type of resource you want to retrieve information about. For example,
   *     <code>INSTANCE</code>.</p>
   */
  ResourceType?: MaintenanceWindowResourceType | string;

  /**
   * <p>Filters used to limit the range of results. For example, you can limit maintenance window
   *    executions to only those scheduled before or after a certain date and time.</p>
   */
  Filters?: PatchOrchestratorFilter[];

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   */
  NextToken?: string;
}

/**
 * <p>Information about a scheduled execution for a maintenance window.</p>
 */
export interface ScheduledWindowExecution {
  /**
   * <p>The ID of the maintenance window to be run.</p>
   */
  WindowId?: string;

  /**
   * <p>The name of the maintenance window to be run.</p>
   */
  Name?: string;

  /**
   * <p>The time, in ISO-8601 Extended format, that the maintenance window is scheduled to be
   *    run.</p>
   */
  ExecutionTime?: string;
}

export interface DescribeMaintenanceWindowScheduleResult {
  /**
   * <p>Information about maintenance window executions scheduled for the specified time
   *    range.</p>
   */
  ScheduledWindowExecutions?: ScheduledWindowExecution[];

  /**
   * <p>The token for the next set of items to return. (You use this token in the next call.)</p>
   */
  NextToken?: string;
}

export interface DescribeMaintenanceWindowsForTargetRequest {
  /**
   * <p>The managed node ID or key-value pair to retrieve information about.</p>
   */
  Targets: Target[] | undefined;

  /**
   * <p>The type of resource you want to retrieve information about. For example,
   *     <code>INSTANCE</code>.</p>
   */
  ResourceType: MaintenanceWindowResourceType | string | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   */
  NextToken?: string;
}

/**
 * <p>The maintenance window to which the specified target belongs.</p>
 */
export interface MaintenanceWindowIdentityForTarget {
  /**
   * <p>The ID of the maintenance window.</p>
   */
  WindowId?: string;

  /**
   * <p>The name of the maintenance window.</p>
   */
  Name?: string;
}

export interface DescribeMaintenanceWindowsForTargetResult {
  /**
   * <p>Information about the maintenance window targets and tasks a managed node is associated
   *    with.</p>
   */
  WindowIdentities?: MaintenanceWindowIdentityForTarget[];

  /**
   * <p>The token for the next set of items to return. (You use this token in the next call.)</p>
   */
  NextToken?: string;
}

export interface DescribeMaintenanceWindowTargetsRequest {
  /**
   * <p>The ID of the maintenance window whose targets should be retrieved.</p>
   */
  WindowId: string | undefined;

  /**
   * <p>Optional filters that can be used to narrow down the scope of the returned window targets.
   *    The supported filter keys are <code>Type</code>, <code>WindowTargetId</code>, and
   *     <code>OwnerInformation</code>.</p>
   */
  Filters?: MaintenanceWindowFilter[];

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   */
  NextToken?: string;
}

/**
 * <p>The target registered with the maintenance window.</p>
 */
export interface MaintenanceWindowTarget {
  /**
   * <p>The ID of the maintenance window to register the target with.</p>
   */
  WindowId?: string;

  /**
   * <p>The ID of the target.</p>
   */
  WindowTargetId?: string;

  /**
   * <p>The type of target that is being registered with the maintenance window.</p>
   */
  ResourceType?: MaintenanceWindowResourceType | string;

  /**
   * <p>The targets, either managed nodes or tags.</p>
   *          <p>Specify managed nodes using the following format:</p>
   *          <p>
   *             <code>Key=instanceids,Values=<instanceid1>,<instanceid2></code>
   *          </p>
   *          <p>Tags are specified using the following format:</p>
   *          <p>
   *             <code>Key=<tag name>,Values=<tag value></code>.</p>
   */
  Targets?: Target[];

  /**
   * <p>A user-provided value that will be included in any Amazon CloudWatch Events events that are
   *    raised while running tasks for these targets in this maintenance window.</p>
   */
  OwnerInformation?: string;

  /**
   * <p>The name for the maintenance window target.</p>
   */
  Name?: string;

  /**
   * <p>A description for the target.</p>
   */
  Description?: string;
}

export interface DescribeMaintenanceWindowTargetsResult {
  /**
   * <p>Information about the targets in the maintenance window.</p>
   */
  Targets?: MaintenanceWindowTarget[];

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   */
  NextToken?: string;
}

export interface DescribeMaintenanceWindowTasksRequest {
  /**
   * <p>The ID of the maintenance window whose tasks should be retrieved.</p>
   */
  WindowId: string | undefined;

  /**
   * <p>Optional filters used to narrow down the scope of the returned tasks. The supported filter
   *    keys are <code>WindowTaskId</code>, <code>TaskArn</code>, <code>Priority</code>, and
   *     <code>TaskType</code>.</p>
   */
  Filters?: MaintenanceWindowFilter[];

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   */
  NextToken?: string;
}

export enum MaintenanceWindowTaskCutoffBehavior {
  CancelTask = "CANCEL_TASK",
  ContinueTask = "CONTINUE_TASK",
}

/**
 * <p>Information about an Amazon Simple Storage Service (Amazon S3) bucket to write managed
 *    node-level logs to.</p>
 *          <note>
 *             <p>
 *                <code>LoggingInfo</code> has been deprecated. To specify an Amazon Simple Storage Service (Amazon S3) bucket to contain logs, instead use the
 *       <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure.
 *       For information about how Amazon Web Services Systems Manager handles these options for the supported maintenance
 *       window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p>
 *          </note>
 */
export interface LoggingInfo {
  /**
   * <p>The name of an S3 bucket where execution logs are stored.</p>
   */
  S3BucketName: string | undefined;

  /**
   * <p>(Optional) The S3 bucket subfolder. </p>
   */
  S3KeyPrefix?: string;

  /**
   * <p>The Amazon Web Services Region where the S3 bucket is located.</p>
   */
  S3Region: string | undefined;
}

/**
 * <p>Defines the values for a task parameter.</p>
 */
export interface MaintenanceWindowTaskParameterValueExpression {
  /**
   * <p>This field contains an array of 0 or more strings, each 1 to 255 characters in
   *    length.</p>
   */
  Values?: string[];
}

/**
 * <p>Information about a task defined for a maintenance window.</p>
 */
export interface MaintenanceWindowTask {
  /**
   * <p>The ID of the maintenance window where the task is registered.</p>
   */
  WindowId?: string;

  /**
   * <p>The task ID.</p>
   */
  WindowTaskId?: string;

  /**
   * <p>The resource that the task uses during execution. For <code>RUN_COMMAND</code> and
   *     <code>AUTOMATION</code> task types, <code>TaskArn</code> is the Amazon Web Services Systems Manager (SSM document) name or
   *    ARN. For <code>LAMBDA</code> tasks, it's the function name or ARN. For
   *     <code>STEP_FUNCTIONS</code> tasks, it's the state machine ARN.</p>
   */
  TaskArn?: string;

  /**
   * <p>The type of task.</p>
   */
  Type?: MaintenanceWindowTaskType | string;

  /**
   * <p>The targets (either managed nodes or tags). Managed nodes are specified using
   *     <code>Key=instanceids,Values=<instanceid1>,<instanceid2></code>. Tags are specified
   *    using <code>Key=<tag name>,Values=<tag value></code>.</p>
   */
  Targets?: Target[];

  /**
   * <p>The parameters that should be passed to the task when it is run.</p>
   *          <note>
   *             <p>
   *                <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs,
   *       instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information
   *       about how Systems Manager handles these options for the supported maintenance window task
   *       types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p>
   *          </note>
   */
  TaskParameters?: Record<string, MaintenanceWindowTaskParameterValueExpression>;

  /**
   * <p>The priority of the task in the maintenance window. The lower the number, the higher the
   *    priority. Tasks that have the same priority are scheduled in parallel.</p>
   */
  Priority?: number;

  /**
   * <p>Information about an S3 bucket to write task-level logs to.</p>
   *          <note>
   *             <p>
   *                <code>LoggingInfo</code> has been deprecated. To specify an Amazon Simple Storage Service (Amazon S3) bucket to contain logs, instead use the
   *       <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure.
   *       For information about how Amazon Web Services Systems Manager handles these options for the supported maintenance
   *       window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p>
   *          </note>
   */
  LoggingInfo?: LoggingInfo;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) service role to use to publish Amazon Simple Notification Service
   * (Amazon SNS) notifications for maintenance window Run Command tasks.</p>
   */
  ServiceRoleArn?: string;

  /**
   * <p>The maximum number of targets this task can be run for, in parallel.</p>
   *          <note>
   *             <p>Although this element is listed as "Required: No", a value can be omitted only when you are
   *     registering or updating a <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/maintenance-windows-targetless-tasks.html">targetless
   *      task</a> You must provide a value in all other cases.</p>
   *             <p>For maintenance window tasks without a target specified, you can't supply a value for this
   *     option. Instead, the system inserts a placeholder value of <code>1</code>. This value doesn't
   *     affect the running of your task.</p>
   *          </note>
   */
  MaxConcurrency?: string;

  /**
   * <p>The maximum number of errors allowed before this task stops being scheduled.</p>
   *          <note>
   *             <p>Although this element is listed as "Required: No", a value can be omitted only when you are
   *     registering or updating a <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/maintenance-windows-targetless-tasks.html">targetless
   *      task</a> You must provide a value in all other cases.</p>
   *             <p>For maintenance window tasks without a target specified, you can't supply a value for this
   *     option. Instead, the system inserts a placeholder value of <code>1</code>. This value doesn't
   *     affect the running of your task.</p>
   *          </note>
   */
  MaxErrors?: string;

  /**
   * <p>The task name.</p>
   */
  Name?: string;

  /**
   * <p>A description of the task.</p>
   */
  Description?: string;

  /**
   * <p>The specification for whether tasks should continue to run after the cutoff time specified
   *    in the maintenance windows is reached. </p>
   */
  CutoffBehavior?: MaintenanceWindowTaskCutoffBehavior | string;

  /**
   * <p>The details for the CloudWatch alarm applied to your maintenance window task.</p>
   */
  AlarmConfiguration?: AlarmConfiguration;
}

export interface DescribeMaintenanceWindowTasksResult {
  /**
   * <p>Information about the tasks in the maintenance window.</p>
   */
  Tasks?: MaintenanceWindowTask[];

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   */
  NextToken?: string;
}

export enum OpsItemFilterKey {
  ACCOUNT_ID = "AccountId",
  ACTUAL_END_TIME = "ActualEndTime",
  ACTUAL_START_TIME = "ActualStartTime",
  AUTOMATION_ID = "AutomationId",
  CATEGORY = "Category",
  CHANGE_REQUEST_APPROVER_ARN = "ChangeRequestByApproverArn",
  CHANGE_REQUEST_APPROVER_NAME = "ChangeRequestByApproverName",
  CHANGE_REQUEST_REQUESTER_ARN = "ChangeRequestByRequesterArn",
  CHANGE_REQUEST_REQUESTER_NAME = "ChangeRequestByRequesterName",
  CHANGE_REQUEST_TARGETS_RESOURCE_GROUP = "ChangeRequestByTargetsResourceGroup",
  CHANGE_REQUEST_TEMPLATE = "ChangeRequestByTemplate",
  CREATED_BY = "CreatedBy",
  CREATED_TIME = "CreatedTime",
  INSIGHT_TYPE = "InsightByType",
  LAST_MODIFIED_TIME = "LastModifiedTime",
  OPERATIONAL_DATA = "OperationalData",
  OPERATIONAL_DATA_KEY = "OperationalDataKey",
  OPERATIONAL_DATA_VALUE = "OperationalDataValue",
  OPSITEM_ID = "OpsItemId",
  OPSITEM_TYPE = "OpsItemType",
  PLANNED_END_TIME = "PlannedEndTime",
  PLANNED_START_TIME = "PlannedStartTime",
  PRIORITY = "Priority",
  RESOURCE_ID = "ResourceId",
  SEVERITY = "Severity",
  SOURCE = "Source",
  STATUS = "Status",
  TITLE = "Title",
}

export enum OpsItemFilterOperator {
  CONTAINS = "Contains",
  EQUAL = "Equal",
  GREATER_THAN = "GreaterThan",
  LESS_THAN = "LessThan",
}

/**
 * @internal
 */
export const AccountSharingInfoFilterSensitiveLog = (obj: AccountSharingInfo): any => ({
  ...obj,
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
export const ActivationFilterSensitiveLog = (obj: Activation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddTagsToResourceRequestFilterSensitiveLog = (obj: AddTagsToResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddTagsToResourceResultFilterSensitiveLog = (obj: AddTagsToResourceResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AlarmFilterSensitiveLog = (obj: Alarm): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AlarmConfigurationFilterSensitiveLog = (obj: AlarmConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AlarmStateInformationFilterSensitiveLog = (obj: AlarmStateInformation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateOpsItemRelatedItemRequestFilterSensitiveLog = (obj: AssociateOpsItemRelatedItemRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateOpsItemRelatedItemResponseFilterSensitiveLog = (
  obj: AssociateOpsItemRelatedItemResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelCommandRequestFilterSensitiveLog = (obj: CancelCommandRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelCommandResultFilterSensitiveLog = (obj: CancelCommandResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelMaintenanceWindowExecutionRequestFilterSensitiveLog = (
  obj: CancelMaintenanceWindowExecutionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelMaintenanceWindowExecutionResultFilterSensitiveLog = (
  obj: CancelMaintenanceWindowExecutionResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegistrationMetadataItemFilterSensitiveLog = (obj: RegistrationMetadataItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateActivationRequestFilterSensitiveLog = (obj: CreateActivationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateActivationResultFilterSensitiveLog = (obj: CreateActivationResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3OutputLocationFilterSensitiveLog = (obj: S3OutputLocation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceAssociationOutputLocationFilterSensitiveLog = (obj: InstanceAssociationOutputLocation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TargetLocationFilterSensitiveLog = (obj: TargetLocation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TargetFilterSensitiveLog = (obj: Target): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAssociationRequestFilterSensitiveLog = (obj: CreateAssociationRequest): any => ({
  ...obj,
  ...(obj.Parameters && { Parameters: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AssociationOverviewFilterSensitiveLog = (obj: AssociationOverview): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociationStatusFilterSensitiveLog = (obj: AssociationStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociationDescriptionFilterSensitiveLog = (obj: AssociationDescription): any => ({
  ...obj,
  ...(obj.Parameters && { Parameters: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateAssociationResultFilterSensitiveLog = (obj: CreateAssociationResult): any => ({
  ...obj,
  ...(obj.AssociationDescription && {
    AssociationDescription: AssociationDescriptionFilterSensitiveLog(obj.AssociationDescription),
  }),
});

/**
 * @internal
 */
export const CreateAssociationBatchRequestEntryFilterSensitiveLog = (obj: CreateAssociationBatchRequestEntry): any => ({
  ...obj,
  ...(obj.Parameters && { Parameters: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateAssociationBatchRequestFilterSensitiveLog = (obj: CreateAssociationBatchRequest): any => ({
  ...obj,
  ...(obj.Entries && {
    Entries: obj.Entries.map((item) => CreateAssociationBatchRequestEntryFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const FailedCreateAssociationFilterSensitiveLog = (obj: FailedCreateAssociation): any => ({
  ...obj,
  ...(obj.Entry && { Entry: CreateAssociationBatchRequestEntryFilterSensitiveLog(obj.Entry) }),
});

/**
 * @internal
 */
export const CreateAssociationBatchResultFilterSensitiveLog = (obj: CreateAssociationBatchResult): any => ({
  ...obj,
  ...(obj.Successful && { Successful: obj.Successful.map((item) => AssociationDescriptionFilterSensitiveLog(item)) }),
  ...(obj.Failed && { Failed: obj.Failed.map((item) => FailedCreateAssociationFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const AttachmentsSourceFilterSensitiveLog = (obj: AttachmentsSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DocumentRequiresFilterSensitiveLog = (obj: DocumentRequires): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDocumentRequestFilterSensitiveLog = (obj: CreateDocumentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttachmentInformationFilterSensitiveLog = (obj: AttachmentInformation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DocumentParameterFilterSensitiveLog = (obj: DocumentParameter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReviewInformationFilterSensitiveLog = (obj: ReviewInformation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DocumentDescriptionFilterSensitiveLog = (obj: DocumentDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDocumentResultFilterSensitiveLog = (obj: CreateDocumentResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateMaintenanceWindowRequestFilterSensitiveLog = (obj: CreateMaintenanceWindowRequest): any => ({
  ...obj,
  ...(obj.Description && { Description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateMaintenanceWindowResultFilterSensitiveLog = (obj: CreateMaintenanceWindowResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OpsItemNotificationFilterSensitiveLog = (obj: OpsItemNotification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OpsItemDataValueFilterSensitiveLog = (obj: OpsItemDataValue): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RelatedOpsItemFilterSensitiveLog = (obj: RelatedOpsItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateOpsItemRequestFilterSensitiveLog = (obj: CreateOpsItemRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateOpsItemResponseFilterSensitiveLog = (obj: CreateOpsItemResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MetadataValueFilterSensitiveLog = (obj: MetadataValue): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateOpsMetadataRequestFilterSensitiveLog = (obj: CreateOpsMetadataRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateOpsMetadataResultFilterSensitiveLog = (obj: CreateOpsMetadataResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PatchFilterFilterSensitiveLog = (obj: PatchFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PatchFilterGroupFilterSensitiveLog = (obj: PatchFilterGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PatchRuleFilterSensitiveLog = (obj: PatchRule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PatchRuleGroupFilterSensitiveLog = (obj: PatchRuleGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PatchSourceFilterSensitiveLog = (obj: PatchSource): any => ({
  ...obj,
  ...(obj.Configuration && { Configuration: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreatePatchBaselineRequestFilterSensitiveLog = (obj: CreatePatchBaselineRequest): any => ({
  ...obj,
  ...(obj.Sources && { Sources: obj.Sources.map((item) => PatchSourceFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreatePatchBaselineResultFilterSensitiveLog = (obj: CreatePatchBaselineResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceDataSyncDestinationDataSharingFilterSensitiveLog = (
  obj: ResourceDataSyncDestinationDataSharing
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceDataSyncS3DestinationFilterSensitiveLog = (obj: ResourceDataSyncS3Destination): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceDataSyncOrganizationalUnitFilterSensitiveLog = (obj: ResourceDataSyncOrganizationalUnit): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceDataSyncAwsOrganizationsSourceFilterSensitiveLog = (
  obj: ResourceDataSyncAwsOrganizationsSource
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceDataSyncSourceFilterSensitiveLog = (obj: ResourceDataSyncSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateResourceDataSyncRequestFilterSensitiveLog = (obj: CreateResourceDataSyncRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateResourceDataSyncResultFilterSensitiveLog = (obj: CreateResourceDataSyncResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteActivationRequestFilterSensitiveLog = (obj: DeleteActivationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteActivationResultFilterSensitiveLog = (obj: DeleteActivationResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAssociationRequestFilterSensitiveLog = (obj: DeleteAssociationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAssociationResultFilterSensitiveLog = (obj: DeleteAssociationResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDocumentRequestFilterSensitiveLog = (obj: DeleteDocumentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDocumentResultFilterSensitiveLog = (obj: DeleteDocumentResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteInventoryRequestFilterSensitiveLog = (obj: DeleteInventoryRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InventoryDeletionSummaryItemFilterSensitiveLog = (obj: InventoryDeletionSummaryItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InventoryDeletionSummaryFilterSensitiveLog = (obj: InventoryDeletionSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteInventoryResultFilterSensitiveLog = (obj: DeleteInventoryResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteMaintenanceWindowRequestFilterSensitiveLog = (obj: DeleteMaintenanceWindowRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteMaintenanceWindowResultFilterSensitiveLog = (obj: DeleteMaintenanceWindowResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteOpsMetadataRequestFilterSensitiveLog = (obj: DeleteOpsMetadataRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteOpsMetadataResultFilterSensitiveLog = (obj: DeleteOpsMetadataResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteParameterRequestFilterSensitiveLog = (obj: DeleteParameterRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteParameterResultFilterSensitiveLog = (obj: DeleteParameterResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteParametersRequestFilterSensitiveLog = (obj: DeleteParametersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteParametersResultFilterSensitiveLog = (obj: DeleteParametersResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeletePatchBaselineRequestFilterSensitiveLog = (obj: DeletePatchBaselineRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeletePatchBaselineResultFilterSensitiveLog = (obj: DeletePatchBaselineResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteResourceDataSyncRequestFilterSensitiveLog = (obj: DeleteResourceDataSyncRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteResourceDataSyncResultFilterSensitiveLog = (obj: DeleteResourceDataSyncResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteResourcePolicyRequestFilterSensitiveLog = (obj: DeleteResourcePolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteResourcePolicyResponseFilterSensitiveLog = (obj: DeleteResourcePolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterManagedInstanceRequestFilterSensitiveLog = (obj: DeregisterManagedInstanceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterManagedInstanceResultFilterSensitiveLog = (obj: DeregisterManagedInstanceResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterPatchBaselineForPatchGroupRequestFilterSensitiveLog = (
  obj: DeregisterPatchBaselineForPatchGroupRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterPatchBaselineForPatchGroupResultFilterSensitiveLog = (
  obj: DeregisterPatchBaselineForPatchGroupResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterTargetFromMaintenanceWindowRequestFilterSensitiveLog = (
  obj: DeregisterTargetFromMaintenanceWindowRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterTargetFromMaintenanceWindowResultFilterSensitiveLog = (
  obj: DeregisterTargetFromMaintenanceWindowResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterTaskFromMaintenanceWindowRequestFilterSensitiveLog = (
  obj: DeregisterTaskFromMaintenanceWindowRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterTaskFromMaintenanceWindowResultFilterSensitiveLog = (
  obj: DeregisterTaskFromMaintenanceWindowResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeActivationsFilterFilterSensitiveLog = (obj: DescribeActivationsFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeActivationsRequestFilterSensitiveLog = (obj: DescribeActivationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeActivationsResultFilterSensitiveLog = (obj: DescribeActivationsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAssociationRequestFilterSensitiveLog = (obj: DescribeAssociationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAssociationResultFilterSensitiveLog = (obj: DescribeAssociationResult): any => ({
  ...obj,
  ...(obj.AssociationDescription && {
    AssociationDescription: AssociationDescriptionFilterSensitiveLog(obj.AssociationDescription),
  }),
});

/**
 * @internal
 */
export const AssociationExecutionFilterFilterSensitiveLog = (obj: AssociationExecutionFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAssociationExecutionsRequestFilterSensitiveLog = (
  obj: DescribeAssociationExecutionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociationExecutionFilterSensitiveLog = (obj: AssociationExecution): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAssociationExecutionsResultFilterSensitiveLog = (
  obj: DescribeAssociationExecutionsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociationExecutionTargetsFilterFilterSensitiveLog = (obj: AssociationExecutionTargetsFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAssociationExecutionTargetsRequestFilterSensitiveLog = (
  obj: DescribeAssociationExecutionTargetsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OutputSourceFilterSensitiveLog = (obj: OutputSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociationExecutionTargetFilterSensitiveLog = (obj: AssociationExecutionTarget): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAssociationExecutionTargetsResultFilterSensitiveLog = (
  obj: DescribeAssociationExecutionTargetsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutomationExecutionFilterFilterSensitiveLog = (obj: AutomationExecutionFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAutomationExecutionsRequestFilterSensitiveLog = (
  obj: DescribeAutomationExecutionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResolvedTargetsFilterSensitiveLog = (obj: ResolvedTargets): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RunbookFilterSensitiveLog = (obj: Runbook): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutomationExecutionMetadataFilterSensitiveLog = (obj: AutomationExecutionMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAutomationExecutionsResultFilterSensitiveLog = (obj: DescribeAutomationExecutionsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StepExecutionFilterFilterSensitiveLog = (obj: StepExecutionFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAutomationStepExecutionsRequestFilterSensitiveLog = (
  obj: DescribeAutomationStepExecutionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FailureDetailsFilterSensitiveLog = (obj: FailureDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StepExecutionFilterSensitiveLog = (obj: StepExecution): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAutomationStepExecutionsResultFilterSensitiveLog = (
  obj: DescribeAutomationStepExecutionsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PatchOrchestratorFilterFilterSensitiveLog = (obj: PatchOrchestratorFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAvailablePatchesRequestFilterSensitiveLog = (obj: DescribeAvailablePatchesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PatchFilterSensitiveLog = (obj: Patch): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAvailablePatchesResultFilterSensitiveLog = (obj: DescribeAvailablePatchesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDocumentRequestFilterSensitiveLog = (obj: DescribeDocumentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDocumentResultFilterSensitiveLog = (obj: DescribeDocumentResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDocumentPermissionRequestFilterSensitiveLog = (obj: DescribeDocumentPermissionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDocumentPermissionResponseFilterSensitiveLog = (obj: DescribeDocumentPermissionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEffectiveInstanceAssociationsRequestFilterSensitiveLog = (
  obj: DescribeEffectiveInstanceAssociationsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceAssociationFilterSensitiveLog = (obj: InstanceAssociation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEffectiveInstanceAssociationsResultFilterSensitiveLog = (
  obj: DescribeEffectiveInstanceAssociationsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEffectivePatchesForPatchBaselineRequestFilterSensitiveLog = (
  obj: DescribeEffectivePatchesForPatchBaselineRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PatchStatusFilterSensitiveLog = (obj: PatchStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EffectivePatchFilterSensitiveLog = (obj: EffectivePatch): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEffectivePatchesForPatchBaselineResultFilterSensitiveLog = (
  obj: DescribeEffectivePatchesForPatchBaselineResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeInstanceAssociationsStatusRequestFilterSensitiveLog = (
  obj: DescribeInstanceAssociationsStatusRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3OutputUrlFilterSensitiveLog = (obj: S3OutputUrl): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceAssociationOutputUrlFilterSensitiveLog = (obj: InstanceAssociationOutputUrl): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceAssociationStatusInfoFilterSensitiveLog = (obj: InstanceAssociationStatusInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeInstanceAssociationsStatusResultFilterSensitiveLog = (
  obj: DescribeInstanceAssociationsStatusResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceInformationStringFilterFilterSensitiveLog = (obj: InstanceInformationStringFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceInformationFilterFilterSensitiveLog = (obj: InstanceInformationFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeInstanceInformationRequestFilterSensitiveLog = (obj: DescribeInstanceInformationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceAggregatedAssociationOverviewFilterSensitiveLog = (
  obj: InstanceAggregatedAssociationOverview
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceInformationFilterSensitiveLog = (obj: InstanceInformation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeInstanceInformationResultFilterSensitiveLog = (obj: DescribeInstanceInformationResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeInstancePatchesRequestFilterSensitiveLog = (obj: DescribeInstancePatchesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PatchComplianceDataFilterSensitiveLog = (obj: PatchComplianceData): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeInstancePatchesResultFilterSensitiveLog = (obj: DescribeInstancePatchesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeInstancePatchStatesRequestFilterSensitiveLog = (obj: DescribeInstancePatchStatesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstancePatchStateFilterSensitiveLog = (obj: InstancePatchState): any => ({
  ...obj,
  ...(obj.OwnerInformation && { OwnerInformation: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeInstancePatchStatesResultFilterSensitiveLog = (obj: DescribeInstancePatchStatesResult): any => ({
  ...obj,
  ...(obj.InstancePatchStates && {
    InstancePatchStates: obj.InstancePatchStates.map((item) => InstancePatchStateFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const InstancePatchStateFilterFilterSensitiveLog = (obj: InstancePatchStateFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeInstancePatchStatesForPatchGroupRequestFilterSensitiveLog = (
  obj: DescribeInstancePatchStatesForPatchGroupRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeInstancePatchStatesForPatchGroupResultFilterSensitiveLog = (
  obj: DescribeInstancePatchStatesForPatchGroupResult
): any => ({
  ...obj,
  ...(obj.InstancePatchStates && {
    InstancePatchStates: obj.InstancePatchStates.map((item) => InstancePatchStateFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const DescribeInventoryDeletionsRequestFilterSensitiveLog = (obj: DescribeInventoryDeletionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InventoryDeletionStatusItemFilterSensitiveLog = (obj: InventoryDeletionStatusItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeInventoryDeletionsResultFilterSensitiveLog = (obj: DescribeInventoryDeletionsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MaintenanceWindowFilterFilterSensitiveLog = (obj: MaintenanceWindowFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeMaintenanceWindowExecutionsRequestFilterSensitiveLog = (
  obj: DescribeMaintenanceWindowExecutionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MaintenanceWindowExecutionFilterSensitiveLog = (obj: MaintenanceWindowExecution): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeMaintenanceWindowExecutionsResultFilterSensitiveLog = (
  obj: DescribeMaintenanceWindowExecutionsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeMaintenanceWindowExecutionTaskInvocationsRequestFilterSensitiveLog = (
  obj: DescribeMaintenanceWindowExecutionTaskInvocationsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MaintenanceWindowExecutionTaskInvocationIdentityFilterSensitiveLog = (
  obj: MaintenanceWindowExecutionTaskInvocationIdentity
): any => ({
  ...obj,
  ...(obj.Parameters && { Parameters: SENSITIVE_STRING }),
  ...(obj.OwnerInformation && { OwnerInformation: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeMaintenanceWindowExecutionTaskInvocationsResultFilterSensitiveLog = (
  obj: DescribeMaintenanceWindowExecutionTaskInvocationsResult
): any => ({
  ...obj,
  ...(obj.WindowExecutionTaskInvocationIdentities && {
    WindowExecutionTaskInvocationIdentities: obj.WindowExecutionTaskInvocationIdentities.map((item) =>
      MaintenanceWindowExecutionTaskInvocationIdentityFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const DescribeMaintenanceWindowExecutionTasksRequestFilterSensitiveLog = (
  obj: DescribeMaintenanceWindowExecutionTasksRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MaintenanceWindowExecutionTaskIdentityFilterSensitiveLog = (
  obj: MaintenanceWindowExecutionTaskIdentity
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeMaintenanceWindowExecutionTasksResultFilterSensitiveLog = (
  obj: DescribeMaintenanceWindowExecutionTasksResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeMaintenanceWindowsRequestFilterSensitiveLog = (obj: DescribeMaintenanceWindowsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MaintenanceWindowIdentityFilterSensitiveLog = (obj: MaintenanceWindowIdentity): any => ({
  ...obj,
  ...(obj.Description && { Description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeMaintenanceWindowsResultFilterSensitiveLog = (obj: DescribeMaintenanceWindowsResult): any => ({
  ...obj,
  ...(obj.WindowIdentities && {
    WindowIdentities: obj.WindowIdentities.map((item) => MaintenanceWindowIdentityFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const DescribeMaintenanceWindowScheduleRequestFilterSensitiveLog = (
  obj: DescribeMaintenanceWindowScheduleRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScheduledWindowExecutionFilterSensitiveLog = (obj: ScheduledWindowExecution): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeMaintenanceWindowScheduleResultFilterSensitiveLog = (
  obj: DescribeMaintenanceWindowScheduleResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeMaintenanceWindowsForTargetRequestFilterSensitiveLog = (
  obj: DescribeMaintenanceWindowsForTargetRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MaintenanceWindowIdentityForTargetFilterSensitiveLog = (obj: MaintenanceWindowIdentityForTarget): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeMaintenanceWindowsForTargetResultFilterSensitiveLog = (
  obj: DescribeMaintenanceWindowsForTargetResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeMaintenanceWindowTargetsRequestFilterSensitiveLog = (
  obj: DescribeMaintenanceWindowTargetsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MaintenanceWindowTargetFilterSensitiveLog = (obj: MaintenanceWindowTarget): any => ({
  ...obj,
  ...(obj.OwnerInformation && { OwnerInformation: SENSITIVE_STRING }),
  ...(obj.Description && { Description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeMaintenanceWindowTargetsResultFilterSensitiveLog = (
  obj: DescribeMaintenanceWindowTargetsResult
): any => ({
  ...obj,
  ...(obj.Targets && { Targets: obj.Targets.map((item) => MaintenanceWindowTargetFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const DescribeMaintenanceWindowTasksRequestFilterSensitiveLog = (
  obj: DescribeMaintenanceWindowTasksRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoggingInfoFilterSensitiveLog = (obj: LoggingInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MaintenanceWindowTaskParameterValueExpressionFilterSensitiveLog = (
  obj: MaintenanceWindowTaskParameterValueExpression
): any => ({
  ...obj,
  ...(obj.Values && { Values: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const MaintenanceWindowTaskFilterSensitiveLog = (obj: MaintenanceWindowTask): any => ({
  ...obj,
  ...(obj.TaskParameters && { TaskParameters: SENSITIVE_STRING }),
  ...(obj.Description && { Description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeMaintenanceWindowTasksResultFilterSensitiveLog = (
  obj: DescribeMaintenanceWindowTasksResult
): any => ({
  ...obj,
  ...(obj.Tasks && { Tasks: obj.Tasks.map((item) => MaintenanceWindowTaskFilterSensitiveLog(item)) }),
});
