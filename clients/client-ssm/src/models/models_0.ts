// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import {
  AccountSharingInfo,
  Activation,
  Association,
  AssociationComplianceSeverity,
  AssociationDescription,
  AssociationExecution,
  AssociationExecutionFilter,
  AssociationExecutionTarget,
  AssociationExecutionTargetsFilter,
  AssociationFilter,
  AssociationStatus,
  AssociationSyncCompliance,
  AssociationVersionInfo,
  AttachmentContent,
  AttachmentsSource,
  AutomationExecution,
  AutomationExecutionFilter,
  AutomationExecutionMetadata,
  BaselineOverride,
  CalendarState,
  CloudWatchOutputConfig,
  Command,
  CommandFilter,
  CommandInvocation,
  ComplianceExecutionSummary,
  ComplianceItem,
  ComplianceItemEntry,
  ComplianceStringFilter,
  ComplianceSummaryItem,
  CreateAssociationBatchRequestEntry,
  DescribeActivationsFilter,
  DocumentDefaultVersionDescription,
  DocumentDescription,
  DocumentFilter,
  DocumentFormat,
  DocumentHashType,
  DocumentIdentifier,
  DocumentKeyValuesFilter,
  DocumentMetadataResponseInfo,
  DocumentPermissionType,
  DocumentRequires,
  DocumentReviews,
  DocumentStatus,
  DocumentType,
  DocumentVersionInfo,
  EffectivePatch,
  ExecutionMode,
  FailedCreateAssociation,
  InstanceAssociation,
  InstanceAssociationOutputLocation,
  InstanceAssociationStatusInfo,
  InstanceInformation,
  InstanceInformationFilter,
  InstanceInformationStringFilter,
  InstancePatchState,
  InstancePatchStateFilter,
  InventoryAggregator,
  InventoryDeletionStatusItem,
  InventoryDeletionSummary,
  InventoryFilter,
  InventoryItem,
  InventoryItemSchema,
  InventoryResultEntity,
  InventorySchemaDeleteOption,
  LoggingInfo,
  MaintenanceWindowExecution,
  MaintenanceWindowExecutionStatus,
  MaintenanceWindowExecutionTaskIdentity,
  MaintenanceWindowExecutionTaskInvocationIdentity,
  MaintenanceWindowFilter,
  MaintenanceWindowIdentity,
  MaintenanceWindowIdentityForTarget,
  MaintenanceWindowResourceType,
  MaintenanceWindowTarget,
  MaintenanceWindowTask,
  MaintenanceWindowTaskCutoffBehavior,
  MaintenanceWindowTaskInvocationParameters,
  MaintenanceWindowTaskParameterValueExpression,
  MaintenanceWindowTaskType,
  MetadataValue,
  NotificationConfig,
  OperatingSystem,
  OpsAggregator,
  OpsEntity,
  OpsFilter,
  OpsItem,
  OpsItemDataValue,
  OpsItemEventFilter,
  OpsItemEventSummary,
  OpsItemFilter,
  OpsItemNotification,
  OpsItemRelatedItemsFilter,
  OpsItemRelatedItemSummary,
  OpsItemStatus,
  OpsItemSummary,
  OpsMetadata,
  OpsMetadataFilter,
  OpsResultAttribute,
  Parameter,
  ParameterHistory,
  ParameterMetadata,
  ParametersFilter,
  ParameterStringFilter,
  ParameterTier,
  ParameterType,
  Patch,
  PatchAction,
  PatchBaselineIdentity,
  PatchComplianceData,
  PatchComplianceLevel,
  PatchFilterGroup,
  PatchGroupPatchBaselineMapping,
  PatchOrchestratorFilter,
  PatchProperty,
  PatchRuleGroup,
  PatchSet,
  PatchSource,
  RegistrationMetadataItem,
  RelatedOpsItem,
  ResourceComplianceSummaryItem,
  ResourceDataSyncItem,
  ResourceDataSyncS3Destination,
  ResourceDataSyncSource,
  ResourceTypeForTagging,
  ResultAttribute,
  ReviewStatus,
  Runbook,
  ScheduledWindowExecution,
  ServiceSetting,
  Session,
  SessionFilter,
  SessionState,
  StepExecution,
  StepExecutionFilter,
  Tag,
  Target,
  TargetLocation,
} from "./models_1";
import {
  CommandInvocationStatus,
  ComplianceUploadType,
  ConnectionStatus,
  DocumentMetadataEnum,
  SignalType,
  StopType,
} from "./models_2";
import { SSMServiceException as __BaseException } from "./SSMServiceException";

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

export namespace AddTagsToResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddTagsToResourceRequest): any => ({
    ...obj,
  });
}

export interface AddTagsToResourceResult {}

export namespace AddTagsToResourceResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddTagsToResourceResult): any => ({
    ...obj,
  });
}

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

export namespace AssociateOpsItemRelatedItemRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateOpsItemRelatedItemRequest): any => ({
    ...obj,
  });
}

export interface AssociateOpsItemRelatedItemResponse {
  /**
   * <p>The association ID.</p>
   */
  AssociationId?: string;
}

export namespace AssociateOpsItemRelatedItemResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateOpsItemRelatedItemResponse): any => ({
    ...obj,
  });
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

export namespace CancelCommandRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelCommandRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Whether or not the command was successfully canceled. There is no guarantee that a request
 *    can be canceled.</p>
 */
export interface CancelCommandResult {}

export namespace CancelCommandResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelCommandResult): any => ({
    ...obj,
  });
}

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

export namespace CancelMaintenanceWindowExecutionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelMaintenanceWindowExecutionRequest): any => ({
    ...obj,
  });
}

export interface CancelMaintenanceWindowExecutionResult {
  /**
   * <p>The ID of the maintenance window execution that has been stopped.</p>
   */
  WindowExecutionId?: string;
}

export namespace CancelMaintenanceWindowExecutionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelMaintenanceWindowExecutionResult): any => ({
    ...obj,
  });
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

export namespace CreateActivationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateActivationRequest): any => ({
    ...obj,
  });
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

export namespace CreateActivationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateActivationResult): any => ({
    ...obj,
  });
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
}

export namespace CreateAssociationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAssociationRequest): any => ({
    ...obj,
    ...(obj.Parameters && { Parameters: SENSITIVE_STRING }),
  });
}

export interface CreateAssociationResult {
  /**
   * <p>Information about the association.</p>
   */
  AssociationDescription?: AssociationDescription;
}

export namespace CreateAssociationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAssociationResult): any => ({
    ...obj,
    ...(obj.AssociationDescription && {
      AssociationDescription: AssociationDescription.filterSensitiveLog(obj.AssociationDescription),
    }),
  });
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

export interface CreateAssociationBatchRequest {
  /**
   * <p>One or more associations.</p>
   */
  Entries: CreateAssociationBatchRequestEntry[] | undefined;
}

export namespace CreateAssociationBatchRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAssociationBatchRequest): any => ({
    ...obj,
    ...(obj.Entries && {
      Entries: obj.Entries.map((item) => CreateAssociationBatchRequestEntry.filterSensitiveLog(item)),
    }),
  });
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

export namespace CreateAssociationBatchResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAssociationBatchResult): any => ({
    ...obj,
    ...(obj.Successful && {
      Successful: obj.Successful.map((item) => AssociationDescription.filterSensitiveLog(item)),
    }),
    ...(obj.Failed && { Failed: obj.Failed.map((item) => FailedCreateAssociation.filterSensitiveLog(item)) }),
  });
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
   *                      <code>aws-</code>
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
   *    For example, "Release 12, Update 6". This value is unique across all versions of a document, and
   *    can't be changed.</p>
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

export namespace CreateDocumentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDocumentRequest): any => ({
    ...obj,
  });
}

export interface CreateDocumentResult {
  /**
   * <p>Information about the SSM document.</p>
   */
  DocumentDescription?: DocumentDescription;
}

export namespace CreateDocumentResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDocumentResult): any => ({
    ...obj,
  });
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

export namespace CreateMaintenanceWindowRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMaintenanceWindowRequest): any => ({
    ...obj,
    ...(obj.Description && { Description: SENSITIVE_STRING }),
  });
}

export interface CreateMaintenanceWindowResult {
  /**
   * <p>The ID of the created maintenance window.</p>
   */
  WindowId?: string;
}

export namespace CreateMaintenanceWindowResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMaintenanceWindowResult): any => ({
    ...obj,
  });
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

export interface CreateOpsItemRequest {
  /**
   * <p>Information about the OpsItem. </p>
   */
  Description: string | undefined;

  /**
   * <p>The type of OpsItem to create. Currently, the only valid values are
   *     <code>/aws/changerequest</code> and <code>/aws/issue</code>.</p>
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
}

export namespace CreateOpsItemRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateOpsItemRequest): any => ({
    ...obj,
  });
}

export interface CreateOpsItemResponse {
  /**
   * <p>The ID of the OpsItem.</p>
   */
  OpsItemId?: string;
}

export namespace CreateOpsItemResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateOpsItemResponse): any => ({
    ...obj,
  });
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

export namespace CreateOpsMetadataRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateOpsMetadataRequest): any => ({
    ...obj,
  });
}

export interface CreateOpsMetadataResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the OpsMetadata Object or blob created by the call.</p>
   */
  OpsMetadataArn?: string;
}

export namespace CreateOpsMetadataResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateOpsMetadataResult): any => ({
    ...obj,
  });
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

export namespace CreatePatchBaselineRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePatchBaselineRequest): any => ({
    ...obj,
    ...(obj.Sources && { Sources: obj.Sources.map((item) => PatchSource.filterSensitiveLog(item)) }),
  });
}

export interface CreatePatchBaselineResult {
  /**
   * <p>The ID of the created patch baseline.</p>
   */
  BaselineId?: string;
}

export namespace CreatePatchBaselineResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePatchBaselineResult): any => ({
    ...obj,
  });
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

export namespace CreateResourceDataSyncRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateResourceDataSyncRequest): any => ({
    ...obj,
  });
}

export interface CreateResourceDataSyncResult {}

export namespace CreateResourceDataSyncResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateResourceDataSyncResult): any => ({
    ...obj,
  });
}

export interface DeleteActivationRequest {
  /**
   * <p>The ID of the activation that you want to delete.</p>
   */
  ActivationId: string | undefined;
}

export namespace DeleteActivationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteActivationRequest): any => ({
    ...obj,
  });
}

export interface DeleteActivationResult {}

export namespace DeleteActivationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteActivationResult): any => ({
    ...obj,
  });
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

export namespace DeleteAssociationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAssociationRequest): any => ({
    ...obj,
  });
}

export interface DeleteAssociationResult {}

export namespace DeleteAssociationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAssociationResult): any => ({
    ...obj,
  });
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

export namespace DeleteDocumentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDocumentRequest): any => ({
    ...obj,
  });
}

export interface DeleteDocumentResult {}

export namespace DeleteDocumentResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDocumentResult): any => ({
    ...obj,
  });
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

export namespace DeleteInventoryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteInventoryRequest): any => ({
    ...obj,
  });
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

export namespace DeleteInventoryResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteInventoryResult): any => ({
    ...obj,
  });
}

export interface DeleteMaintenanceWindowRequest {
  /**
   * <p>The ID of the maintenance window to delete.</p>
   */
  WindowId: string | undefined;
}

export namespace DeleteMaintenanceWindowRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteMaintenanceWindowRequest): any => ({
    ...obj,
  });
}

export interface DeleteMaintenanceWindowResult {
  /**
   * <p>The ID of the deleted maintenance window.</p>
   */
  WindowId?: string;
}

export namespace DeleteMaintenanceWindowResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteMaintenanceWindowResult): any => ({
    ...obj,
  });
}

export interface DeleteOpsMetadataRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of an OpsMetadata Object to delete.</p>
   */
  OpsMetadataArn: string | undefined;
}

export namespace DeleteOpsMetadataRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteOpsMetadataRequest): any => ({
    ...obj,
  });
}

export interface DeleteOpsMetadataResult {}

export namespace DeleteOpsMetadataResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteOpsMetadataResult): any => ({
    ...obj,
  });
}

export interface DeleteParameterRequest {
  /**
   * <p>The name of the parameter to delete.</p>
   */
  Name: string | undefined;
}

export namespace DeleteParameterRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteParameterRequest): any => ({
    ...obj,
  });
}

export interface DeleteParameterResult {}

export namespace DeleteParameterResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteParameterResult): any => ({
    ...obj,
  });
}

export interface DeleteParametersRequest {
  /**
   * <p>The names of the parameters to delete. After deleting a parameter, wait for at least 30
   *    seconds to create a parameter with the same name.</p>
   */
  Names: string[] | undefined;
}

export namespace DeleteParametersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteParametersRequest): any => ({
    ...obj,
  });
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

export namespace DeleteParametersResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteParametersResult): any => ({
    ...obj,
  });
}

export interface DeletePatchBaselineRequest {
  /**
   * <p>The ID of the patch baseline to delete.</p>
   */
  BaselineId: string | undefined;
}

export namespace DeletePatchBaselineRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePatchBaselineRequest): any => ({
    ...obj,
  });
}

export interface DeletePatchBaselineResult {
  /**
   * <p>The ID of the deleted patch baseline.</p>
   */
  BaselineId?: string;
}

export namespace DeletePatchBaselineResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePatchBaselineResult): any => ({
    ...obj,
  });
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

export namespace DeleteResourceDataSyncRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteResourceDataSyncRequest): any => ({
    ...obj,
  });
}

export interface DeleteResourceDataSyncResult {}

export namespace DeleteResourceDataSyncResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteResourceDataSyncResult): any => ({
    ...obj,
  });
}

export interface DeregisterManagedInstanceRequest {
  /**
   * <p>The ID assigned to the managed node when you registered it using the activation process.
   *   </p>
   */
  InstanceId: string | undefined;
}

export namespace DeregisterManagedInstanceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeregisterManagedInstanceRequest): any => ({
    ...obj,
  });
}

export interface DeregisterManagedInstanceResult {}

export namespace DeregisterManagedInstanceResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeregisterManagedInstanceResult): any => ({
    ...obj,
  });
}

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

export namespace DeregisterPatchBaselineForPatchGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeregisterPatchBaselineForPatchGroupRequest): any => ({
    ...obj,
  });
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

export namespace DeregisterPatchBaselineForPatchGroupResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeregisterPatchBaselineForPatchGroupResult): any => ({
    ...obj,
  });
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

export namespace DeregisterTargetFromMaintenanceWindowRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeregisterTargetFromMaintenanceWindowRequest): any => ({
    ...obj,
  });
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

export namespace DeregisterTargetFromMaintenanceWindowResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeregisterTargetFromMaintenanceWindowResult): any => ({
    ...obj,
  });
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

export namespace DeregisterTaskFromMaintenanceWindowRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeregisterTaskFromMaintenanceWindowRequest): any => ({
    ...obj,
  });
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

export namespace DeregisterTaskFromMaintenanceWindowResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeregisterTaskFromMaintenanceWindowResult): any => ({
    ...obj,
  });
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

export namespace DescribeActivationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeActivationsRequest): any => ({
    ...obj,
  });
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

export namespace DescribeActivationsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeActivationsResult): any => ({
    ...obj,
  });
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

export namespace DescribeAssociationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAssociationRequest): any => ({
    ...obj,
  });
}

export interface DescribeAssociationResult {
  /**
   * <p>Information about the association.</p>
   */
  AssociationDescription?: AssociationDescription;
}

export namespace DescribeAssociationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAssociationResult): any => ({
    ...obj,
    ...(obj.AssociationDescription && {
      AssociationDescription: AssociationDescription.filterSensitiveLog(obj.AssociationDescription),
    }),
  });
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

export namespace DescribeAssociationExecutionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAssociationExecutionsRequest): any => ({
    ...obj,
  });
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

export namespace DescribeAssociationExecutionsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAssociationExecutionsResult): any => ({
    ...obj,
  });
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

export namespace DescribeAssociationExecutionTargetsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAssociationExecutionTargetsRequest): any => ({
    ...obj,
  });
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

export namespace DescribeAssociationExecutionTargetsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAssociationExecutionTargetsResult): any => ({
    ...obj,
  });
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

export namespace DescribeAutomationExecutionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAutomationExecutionsRequest): any => ({
    ...obj,
  });
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

export namespace DescribeAutomationExecutionsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAutomationExecutionsResult): any => ({
    ...obj,
  });
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

export namespace DescribeAutomationStepExecutionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAutomationStepExecutionsRequest): any => ({
    ...obj,
  });
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

export namespace DescribeAutomationStepExecutionsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAutomationStepExecutionsResult): any => ({
    ...obj,
  });
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
   *
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

export namespace DescribeAvailablePatchesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAvailablePatchesRequest): any => ({
    ...obj,
  });
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

export namespace DescribeAvailablePatchesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAvailablePatchesResult): any => ({
    ...obj,
  });
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

export namespace DescribeDocumentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDocumentRequest): any => ({
    ...obj,
  });
}

export interface DescribeDocumentResult {
  /**
   * <p>Information about the SSM document.</p>
   */
  Document?: DocumentDescription;
}

export namespace DescribeDocumentResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDocumentResult): any => ({
    ...obj,
  });
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

export namespace DescribeDocumentPermissionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDocumentPermissionRequest): any => ({
    ...obj,
  });
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

export namespace DescribeDocumentPermissionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDocumentPermissionResponse): any => ({
    ...obj,
  });
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

export namespace DescribeEffectiveInstanceAssociationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEffectiveInstanceAssociationsRequest): any => ({
    ...obj,
  });
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

export namespace DescribeEffectiveInstanceAssociationsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEffectiveInstanceAssociationsResult): any => ({
    ...obj,
  });
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

export namespace DescribeEffectivePatchesForPatchBaselineRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEffectivePatchesForPatchBaselineRequest): any => ({
    ...obj,
  });
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

export namespace DescribeEffectivePatchesForPatchBaselineResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEffectivePatchesForPatchBaselineResult): any => ({
    ...obj,
  });
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

export namespace DescribeInstanceAssociationsStatusRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInstanceAssociationsStatusRequest): any => ({
    ...obj,
  });
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

export namespace DescribeInstanceAssociationsStatusResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInstanceAssociationsStatusResult): any => ({
    ...obj,
  });
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
   *    filter based on tags applied to EC2 instances. Use this <code>Filters</code> data type instead of
   *     <code>InstanceInformationFilterList</code>, which is deprecated.</p>
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

export namespace DescribeInstanceInformationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInstanceInformationRequest): any => ({
    ...obj,
  });
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

export namespace DescribeInstanceInformationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInstanceInformationResult): any => ({
    ...obj,
  });
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

export namespace DescribeInstancePatchesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInstancePatchesRequest): any => ({
    ...obj,
  });
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

export namespace DescribeInstancePatchesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInstancePatchesResult): any => ({
    ...obj,
  });
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

export namespace DescribeInstancePatchStatesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInstancePatchStatesRequest): any => ({
    ...obj,
  });
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

export namespace DescribeInstancePatchStatesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInstancePatchStatesResult): any => ({
    ...obj,
    ...(obj.InstancePatchStates && {
      InstancePatchStates: obj.InstancePatchStates.map((item) => InstancePatchState.filterSensitiveLog(item)),
    }),
  });
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

export namespace DescribeInstancePatchStatesForPatchGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInstancePatchStatesForPatchGroupRequest): any => ({
    ...obj,
  });
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

export namespace DescribeInstancePatchStatesForPatchGroupResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInstancePatchStatesForPatchGroupResult): any => ({
    ...obj,
    ...(obj.InstancePatchStates && {
      InstancePatchStates: obj.InstancePatchStates.map((item) => InstancePatchState.filterSensitiveLog(item)),
    }),
  });
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

export namespace DescribeInventoryDeletionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInventoryDeletionsRequest): any => ({
    ...obj,
  });
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

export namespace DescribeInventoryDeletionsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInventoryDeletionsResult): any => ({
    ...obj,
  });
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

export namespace DescribeMaintenanceWindowExecutionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeMaintenanceWindowExecutionsRequest): any => ({
    ...obj,
  });
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

export namespace DescribeMaintenanceWindowExecutionsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeMaintenanceWindowExecutionsResult): any => ({
    ...obj,
  });
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

export namespace DescribeMaintenanceWindowExecutionTaskInvocationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeMaintenanceWindowExecutionTaskInvocationsRequest): any => ({
    ...obj,
  });
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

export namespace DescribeMaintenanceWindowExecutionTaskInvocationsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeMaintenanceWindowExecutionTaskInvocationsResult): any => ({
    ...obj,
    ...(obj.WindowExecutionTaskInvocationIdentities && {
      WindowExecutionTaskInvocationIdentities: obj.WindowExecutionTaskInvocationIdentities.map((item) =>
        MaintenanceWindowExecutionTaskInvocationIdentity.filterSensitiveLog(item)
      ),
    }),
  });
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

export namespace DescribeMaintenanceWindowExecutionTasksRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeMaintenanceWindowExecutionTasksRequest): any => ({
    ...obj,
  });
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

export namespace DescribeMaintenanceWindowExecutionTasksResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeMaintenanceWindowExecutionTasksResult): any => ({
    ...obj,
  });
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

export namespace DescribeMaintenanceWindowsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeMaintenanceWindowsRequest): any => ({
    ...obj,
  });
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

export namespace DescribeMaintenanceWindowsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeMaintenanceWindowsResult): any => ({
    ...obj,
    ...(obj.WindowIdentities && {
      WindowIdentities: obj.WindowIdentities.map((item) => MaintenanceWindowIdentity.filterSensitiveLog(item)),
    }),
  });
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

export namespace DescribeMaintenanceWindowScheduleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeMaintenanceWindowScheduleRequest): any => ({
    ...obj,
  });
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

export namespace DescribeMaintenanceWindowScheduleResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeMaintenanceWindowScheduleResult): any => ({
    ...obj,
  });
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

export namespace DescribeMaintenanceWindowsForTargetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeMaintenanceWindowsForTargetRequest): any => ({
    ...obj,
  });
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

export namespace DescribeMaintenanceWindowsForTargetResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeMaintenanceWindowsForTargetResult): any => ({
    ...obj,
  });
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

export namespace DescribeMaintenanceWindowTargetsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeMaintenanceWindowTargetsRequest): any => ({
    ...obj,
  });
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

export namespace DescribeMaintenanceWindowTargetsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeMaintenanceWindowTargetsResult): any => ({
    ...obj,
    ...(obj.Targets && { Targets: obj.Targets.map((item) => MaintenanceWindowTarget.filterSensitiveLog(item)) }),
  });
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

export namespace DescribeMaintenanceWindowTasksRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeMaintenanceWindowTasksRequest): any => ({
    ...obj,
  });
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

export namespace DescribeMaintenanceWindowTasksResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeMaintenanceWindowTasksResult): any => ({
    ...obj,
    ...(obj.Tasks && { Tasks: obj.Tasks.map((item) => MaintenanceWindowTask.filterSensitiveLog(item)) }),
  });
}

export interface DescribeOpsItemsRequest {
  /**
   * <p>One or more filters to limit the response.</p>
   *          <ul>
   *             <li>
   *                <p>Key: CreatedTime</p>
   *                <p>Operations: GreaterThan, LessThan</p>
   *             </li>
   *             <li>
   *                <p>Key: LastModifiedBy</p>
   *                <p>Operations: Contains, Equals</p>
   *             </li>
   *             <li>
   *                <p>Key: LastModifiedTime</p>
   *                <p>Operations: GreaterThan, LessThan</p>
   *             </li>
   *             <li>
   *                <p>Key: Priority</p>
   *                <p>Operations: Equals</p>
   *             </li>
   *             <li>
   *                <p>Key: Source</p>
   *                <p>Operations: Contains, Equals</p>
   *             </li>
   *             <li>
   *                <p>Key: Status</p>
   *                <p>Operations: Equals</p>
   *             </li>
   *             <li>
   *                <p>Key: Title*</p>
   *                <p>Operations: Equals,Contains</p>
   *             </li>
   *             <li>
   *                <p>Key: OperationalData**</p>
   *                <p>Operations: Equals</p>
   *             </li>
   *             <li>
   *                <p>Key: OperationalDataKey</p>
   *                <p>Operations: Equals</p>
   *             </li>
   *             <li>
   *                <p>Key: OperationalDataValue</p>
   *                <p>Operations: Equals, Contains</p>
   *             </li>
   *             <li>
   *                <p>Key: OpsItemId</p>
   *                <p>Operations: Equals</p>
   *             </li>
   *             <li>
   *                <p>Key: ResourceId</p>
   *                <p>Operations: Contains</p>
   *             </li>
   *             <li>
   *                <p>Key: AutomationId</p>
   *                <p>Operations: Equals</p>
   *             </li>
   *          </ul>
   *          <p>*The Equals operator for Title matches the first 100 characters. If you specify more than
   *    100 characters, they system returns an error that the filter value exceeds the length
   *    limit.</p>
   *          <p>**If you filter the response by using the OperationalData operator, specify a key-value pair
   *    by using the following JSON format: {"key":"key_name","value":"a_value"}</p>
   */
  OpsItemFilters?: OpsItemFilter[];

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token to start the list. Use this token to get the next set of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeOpsItemsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeOpsItemsRequest): any => ({
    ...obj,
  });
}

export interface DescribeOpsItemsResponse {
  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *    results.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of OpsItems.</p>
   */
  OpsItemSummaries?: OpsItemSummary[];
}

export namespace DescribeOpsItemsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeOpsItemsResponse): any => ({
    ...obj,
  });
}

export interface DescribeParametersRequest {
  /**
   * <p>This data type is deprecated. Instead, use <code>ParameterFilters</code>.</p>
   */
  Filters?: ParametersFilter[];

  /**
   * <p>Filters to limit the request results.</p>
   */
  ParameterFilters?: ParameterStringFilter[];

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

export namespace DescribeParametersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeParametersRequest): any => ({
    ...obj,
  });
}

export interface DescribeParametersResult {
  /**
   * <p>Parameters returned by the request.</p>
   */
  Parameters?: ParameterMetadata[];

  /**
   * <p>The token to use when requesting the next set of items.</p>
   */
  NextToken?: string;
}

export namespace DescribeParametersResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeParametersResult): any => ({
    ...obj,
  });
}

export interface DescribePatchBaselinesRequest {
  /**
   * <p>Each element in the array is a structure containing a key-value pair.</p>
   *          <p>Supported keys for <code>DescribePatchBaselines</code> include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>NAME_PREFIX</code>
   *                   </b>
   *                </p>
   *                <p>Sample values: <code>AWS-</code> | <code>My-</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>OWNER</code>
   *                   </b>
   *                </p>
   *                <p>Sample values: <code>AWS</code> | <code>Self</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>OPERATING_SYSTEM</code>
   *                   </b>
   *                </p>
   *                <p>Sample values: <code>AMAZON_LINUX</code> | <code>SUSE</code> | <code>WINDOWS</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Filters?: PatchOrchestratorFilter[];

  /**
   * <p>The maximum number of patch baselines to return (per page).</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   */
  NextToken?: string;
}

export namespace DescribePatchBaselinesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePatchBaselinesRequest): any => ({
    ...obj,
  });
}

export interface DescribePatchBaselinesResult {
  /**
   * <p>An array of <code>PatchBaselineIdentity</code> elements.</p>
   */
  BaselineIdentities?: PatchBaselineIdentity[];

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   */
  NextToken?: string;
}

export namespace DescribePatchBaselinesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePatchBaselinesResult): any => ({
    ...obj,
  });
}

export interface DescribePatchGroupsRequest {
  /**
   * <p>The maximum number of patch groups to return (per page).</p>
   */
  MaxResults?: number;

  /**
   * <p>Each element in the array is a structure containing a key-value pair.</p>
   *          <p>Supported keys for <code>DescribePatchGroups</code> include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>NAME_PREFIX</code>
   *                   </b>
   *                </p>
   *                <p>Sample values: <code>AWS-</code> | <code>My-</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>OPERATING_SYSTEM</code>
   *                   </b>
   *                </p>
   *                <p>Sample values: <code>AMAZON_LINUX</code> | <code>SUSE</code> | <code>WINDOWS</code>
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
}

export namespace DescribePatchGroupsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePatchGroupsRequest): any => ({
    ...obj,
  });
}

export interface DescribePatchGroupsResult {
  /**
   * <p>Each entry in the array contains:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PatchGroup</code>: string (between 1 and 256 characters. Regex:
   *       <code>^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$)</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PatchBaselineIdentity</code>: A <code>PatchBaselineIdentity</code> element.</p>
   *             </li>
   *          </ul>
   */
  Mappings?: PatchGroupPatchBaselineMapping[];

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   */
  NextToken?: string;
}

export namespace DescribePatchGroupsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePatchGroupsResult): any => ({
    ...obj,
  });
}

export interface DescribePatchGroupStateRequest {
  /**
   * <p>The name of the patch group whose patch snapshot should be retrieved.</p>
   */
  PatchGroup: string | undefined;
}

export namespace DescribePatchGroupStateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePatchGroupStateRequest): any => ({
    ...obj,
  });
}

export interface DescribePatchGroupStateResult {
  /**
   * <p>The number of managed nodes in the patch group.</p>
   */
  Instances?: number;

  /**
   * <p>The number of managed nodes with installed patches.</p>
   */
  InstancesWithInstalledPatches?: number;

  /**
   * <p>The number of managed nodes with patches installed that aren't defined in the patch
   *    baseline.</p>
   */
  InstancesWithInstalledOtherPatches?: number;

  /**
   * <p>The number of managed nodes with patches installed by Patch Manager that haven't been
   *    rebooted after the patch installation. The status of these managed nodes is
   *     <code>NON_COMPLIANT</code>.</p>
   */
  InstancesWithInstalledPendingRebootPatches?: number;

  /**
   * <p>The number of managed nodes with patches installed that are specified in a
   *     <code>RejectedPatches</code> list. Patches with a status of <code>INSTALLED_REJECTED</code> were
   *    typically installed before they were added to a <code>RejectedPatches</code> list.</p>
   *          <note>
   *             <p>If <code>ALLOW_AS_DEPENDENCY</code> is the specified option for
   *      <code>RejectedPatchesAction</code>, the value of
   *      <code>InstancesWithInstalledRejectedPatches</code> will always be <code>0</code> (zero).</p>
   *          </note>
   */
  InstancesWithInstalledRejectedPatches?: number;

  /**
   * <p>The number of managed nodes with missing patches from the patch baseline.</p>
   */
  InstancesWithMissingPatches?: number;

  /**
   * <p>The number of managed nodes with patches from the patch baseline that failed to
   *    install.</p>
   */
  InstancesWithFailedPatches?: number;

  /**
   * <p>The number of managed nodes with patches that aren't applicable.</p>
   */
  InstancesWithNotApplicablePatches?: number;

  /**
   * <p>The number of managed nodes with <code>NotApplicable</code> patches beyond the supported
   *    limit, which aren't reported by name to Inventory. Inventory is a capability of Amazon Web Services Systems Manager.</p>
   */
  InstancesWithUnreportedNotApplicablePatches?: number;

  /**
   * <p>The number of managed nodes where patches that are specified as <code>Critical</code> for
   *    compliance reporting in the patch baseline aren't installed. These patches might be missing, have
   *    failed installation, were rejected, or were installed but awaiting a required managed node
   *    reboot. The status of these managed nodes is <code>NON_COMPLIANT</code>.</p>
   */
  InstancesWithCriticalNonCompliantPatches?: number;

  /**
   * <p>The number of managed nodes where patches that are specified as <code>Security</code> in a
   *    patch advisory aren't installed. These patches might be missing, have failed installation, were
   *    rejected, or were installed but awaiting a required managed node reboot. The status of these
   *    managed nodes is <code>NON_COMPLIANT</code>.</p>
   */
  InstancesWithSecurityNonCompliantPatches?: number;

  /**
   * <p>The number of managed nodes with patches installed that are specified as other than
   *     <code>Critical</code> or <code>Security</code> but aren't compliant with the patch baseline. The
   *    status of these managed nodes is <code>NON_COMPLIANT</code>.</p>
   */
  InstancesWithOtherNonCompliantPatches?: number;
}

export namespace DescribePatchGroupStateResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePatchGroupStateResult): any => ({
    ...obj,
  });
}

export interface DescribePatchPropertiesRequest {
  /**
   * <p>The operating system type for which to list patches.</p>
   */
  OperatingSystem: OperatingSystem | string | undefined;

  /**
   * <p>The patch property for which you want to view patch details. </p>
   */
  Property: PatchProperty | string | undefined;

  /**
   * <p>Indicates whether to list patches for the Windows operating system or for applications
   *    released by Microsoft. Not applicable for the Linux or macOS operating systems.</p>
   */
  PatchSet?: PatchSet | string;

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

export namespace DescribePatchPropertiesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePatchPropertiesRequest): any => ({
    ...obj,
  });
}

export interface DescribePatchPropertiesResult {
  /**
   * <p>A list of the properties for patches matching the filter request parameters.</p>
   */
  Properties?: Record<string, string>[];

  /**
   * <p>The token for the next set of items to return. (You use this token in the next call.)</p>
   */
  NextToken?: string;
}

export namespace DescribePatchPropertiesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePatchPropertiesResult): any => ({
    ...obj,
  });
}

export interface DescribeSessionsRequest {
  /**
   * <p>The session status to retrieve a list of sessions for. For example, "Active".</p>
   */
  State: SessionState | string | undefined;

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

  /**
   * <p>One or more filters to limit the type of sessions returned by the request.</p>
   */
  Filters?: SessionFilter[];
}

export namespace DescribeSessionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSessionsRequest): any => ({
    ...obj,
  });
}

export interface DescribeSessionsResponse {
  /**
   * <p>A list of sessions meeting the request parameters.</p>
   */
  Sessions?: Session[];

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   */
  NextToken?: string;
}

export namespace DescribeSessionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSessionsResponse): any => ({
    ...obj,
  });
}

export interface DisassociateOpsItemRelatedItemRequest {
  /**
   * <p>The ID of the OpsItem for which you want to delete an association between the OpsItem and a
   *    related item.</p>
   */
  OpsItemId: string | undefined;

  /**
   * <p>The ID of the association for which you want to delete an association between the OpsItem
   *    and a related item.</p>
   */
  AssociationId: string | undefined;
}

export namespace DisassociateOpsItemRelatedItemRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateOpsItemRelatedItemRequest): any => ({
    ...obj,
  });
}

export interface DisassociateOpsItemRelatedItemResponse {}

export namespace DisassociateOpsItemRelatedItemResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateOpsItemRelatedItemResponse): any => ({
    ...obj,
  });
}

export interface GetAutomationExecutionRequest {
  /**
   * <p>The unique identifier for an existing automation execution to examine. The execution ID is
   *    returned by StartAutomationExecution when the execution of an Automation runbook is
   *    initiated.</p>
   */
  AutomationExecutionId: string | undefined;
}

export namespace GetAutomationExecutionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAutomationExecutionRequest): any => ({
    ...obj,
  });
}

export interface GetAutomationExecutionResult {
  /**
   * <p>Detailed information about the current state of an automation execution.</p>
   */
  AutomationExecution?: AutomationExecution;
}

export namespace GetAutomationExecutionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAutomationExecutionResult): any => ({
    ...obj,
  });
}

export interface GetCalendarStateRequest {
  /**
   * <p>The names or Amazon Resource Names (ARNs) of the Systems Manager documents (SSM documents) that
   *    represent the calendar entries for which you want to get the state.</p>
   */
  CalendarNames: string[] | undefined;

  /**
   * <p>(Optional) The specific time for which you want to get calendar state information, in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> format. If you don't specify a
   *    value or <code>AtTime</code>, the current time is used.</p>
   */
  AtTime?: string;
}

export namespace GetCalendarStateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCalendarStateRequest): any => ({
    ...obj,
  });
}

export interface GetCalendarStateResponse {
  /**
   * <p>The state of the calendar. An <code>OPEN</code> calendar indicates that actions are allowed
   *    to proceed, and a <code>CLOSED</code> calendar indicates that actions aren't allowed to
   *    proceed.</p>
   */
  State?: CalendarState | string;

  /**
   * <p>The time, as an <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> string,
   *    that you specified in your command. If you don't specify a time, <code>GetCalendarState</code>
   *    uses the current time.</p>
   */
  AtTime?: string;

  /**
   * <p>The time, as an <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> string,
   *    that the calendar state will change. If the current calendar state is <code>OPEN</code>,
   *     <code>NextTransitionTime</code> indicates when the calendar state changes to
   *    <code>CLOSED</code>, and vice-versa.</p>
   */
  NextTransitionTime?: string;
}

export namespace GetCalendarStateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCalendarStateResponse): any => ({
    ...obj,
  });
}

export interface GetCommandInvocationRequest {
  /**
   * <p>(Required) The parent command ID of the invocation plugin.</p>
   */
  CommandId: string | undefined;

  /**
   * <p>(Required) The ID of the managed node targeted by the command. A <i>managed
   *     node</i> can be an Amazon Elastic Compute Cloud (Amazon EC2) instance, edge device, and on-premises server or VM
   *    in your hybrid environment that is configured for Amazon Web Services Systems Manager.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The name of the step for which you want detailed results. If the document contains only one
   *    step, you can omit the name and details for that step. If the document contains more than one
   *    step, you must specify the name of the step for which you want to view details. Be sure to
   *    specify the name of the step, not the name of a plugin like
   *    <code>aws:RunShellScript</code>.</p>
   *          <p>To find the <code>PluginName</code>, check the document content and find the name of the
   *    step you want details for. Alternatively, use <a>ListCommandInvocations</a> with the
   *     <code>CommandId</code> and <code>Details</code> parameters. The <code>PluginName</code> is the
   *     <code>Name</code> attribute of the <code>CommandPlugin</code> object in the
   *     <code>CommandPlugins</code> list.</p>
   */
  PluginName?: string;
}

export namespace GetCommandInvocationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCommandInvocationRequest): any => ({
    ...obj,
  });
}

export interface GetCommandInvocationResult {
  /**
   * <p>The parent command ID of the invocation plugin.</p>
   */
  CommandId?: string;

  /**
   * <p>The ID of the managed node targeted by the command. A <i>managed node</i> can
   *    be an Amazon Elastic Compute Cloud (Amazon EC2) instance, edge device, or on-premises server or VM in your hybrid
   *    environment that is configured for Amazon Web Services Systems Manager.</p>
   */
  InstanceId?: string;

  /**
   * <p>The comment text for the command.</p>
   */
  Comment?: string;

  /**
   * <p>The name of the document that was run. For example, <code>AWS-RunShellScript</code>.</p>
   */
  DocumentName?: string;

  /**
   * <p>The Systems Manager document (SSM document) version used in the request.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>The name of the plugin, or <i>step name</i>, for which details are reported.
   *    For example, <code>aws:RunShellScript</code> is a plugin.</p>
   */
  PluginName?: string;

  /**
   * <p>The error level response code for the plugin script. If the response code is
   *    <code>-1</code>, then the command hasn't started running on the managed node, or it wasn't
   *    received by the node.</p>
   */
  ResponseCode?: number;

  /**
   * <p>The date and time the plugin started running. Date and time are written in ISO 8601 format.
   *    For example, June 7, 2017 is represented as 2017-06-7. The following sample Amazon Web Services CLI command uses
   *    the <code>InvokedBefore</code> filter.</p>
   *          <p>
   *             <code>aws ssm list-commands --filters key=InvokedBefore,value=2017-06-07T00:00:00Z</code>
   *          </p>
   *          <p>If the plugin hasn't started to run, the string is empty.</p>
   */
  ExecutionStartDateTime?: string;

  /**
   * <p>Duration since <code>ExecutionStartDateTime</code>.</p>
   */
  ExecutionElapsedTime?: string;

  /**
   * <p>The date and time the plugin finished running. Date and time are written in ISO 8601 format.
   *    For example, June 7, 2017 is represented as 2017-06-7. The following sample Amazon Web Services CLI command uses
   *    the <code>InvokedAfter</code> filter.</p>
   *          <p>
   *             <code>aws ssm list-commands --filters key=InvokedAfter,value=2017-06-07T00:00:00Z</code>
   *          </p>
   *          <p>If the plugin hasn't started to run, the string is empty.</p>
   */
  ExecutionEndDateTime?: string;

  /**
   * <p>The status of this invocation plugin. This status can be different than
   *     <code>StatusDetails</code>.</p>
   */
  Status?: CommandInvocationStatus | string;

  /**
   * <p>A detailed status of the command execution for an invocation. <code>StatusDetails</code>
   *    includes more information than <code>Status</code> because it includes states resulting from
   *    error and concurrency control parameters. <code>StatusDetails</code> can show different results
   *    than <code>Status</code>. For more information about these statuses, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/monitor-commands.html">Understanding
   *     command statuses</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.
   *     <code>StatusDetails</code> can be one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>Pending: The command hasn't been sent to the managed node.</p>
   *             </li>
   *             <li>
   *                <p>In Progress: The command has been sent to the managed node but hasn't reached a terminal
   *      state.</p>
   *             </li>
   *             <li>
   *                <p>Delayed: The system attempted to send the command to the target, but the target wasn't
   *      available. The managed node might not be available because of network issues, because the node
   *      was stopped, or for similar reasons. The system will try to send the command again.</p>
   *             </li>
   *             <li>
   *                <p>Success: The command or plugin ran successfully. This is a terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Delivery Timed Out: The command wasn't delivered to the managed node before the delivery
   *      timeout expired. Delivery timeouts don't count against the parent command's
   *       <code>MaxErrors</code> limit, but they do contribute to whether the parent command status is
   *      Success or Incomplete. This is a terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Execution Timed Out: The command started to run on the managed node, but the execution
   *      wasn't complete before the timeout expired. Execution timeouts count against the
   *       <code>MaxErrors</code> limit of the parent command. This is a terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Failed: The command wasn't run successfully on the managed node. For a plugin, this
   *      indicates that the result code wasn't zero. For a command invocation, this indicates that the
   *      result code for one or more plugins wasn't zero. Invocation failures count against the
   *       <code>MaxErrors</code> limit of the parent command. This is a terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Cancelled: The command was terminated before it was completed. This is a terminal
   *      state.</p>
   *             </li>
   *             <li>
   *                <p>Undeliverable: The command can't be delivered to the managed node. The node might not
   *      exist or might not be responding. Undeliverable invocations don't count against the parent
   *      command's <code>MaxErrors</code> limit and don't contribute to whether the parent command
   *      status is Success or Incomplete. This is a terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Terminated: The parent command exceeded its <code>MaxErrors</code> limit and subsequent
   *      command invocations were canceled by the system. This is a terminal state.</p>
   *             </li>
   *          </ul>
   */
  StatusDetails?: string;

  /**
   * <p>The first 24,000 characters written by the plugin to <code>stdout</code>. If the command
   *    hasn't finished running, if <code>ExecutionStatus</code> is neither Succeeded nor Failed, then
   *    this string is empty.</p>
   */
  StandardOutputContent?: string;

  /**
   * <p>The URL for the complete text written by the plugin to <code>stdout</code> in Amazon Simple Storage Service (Amazon S3). If an S3 bucket wasn't specified, then this string is
   *    empty.</p>
   */
  StandardOutputUrl?: string;

  /**
   * <p>The first 8,000 characters written by the plugin to <code>stderr</code>. If the command
   *    hasn't finished running, then this string is empty.</p>
   */
  StandardErrorContent?: string;

  /**
   * <p>The URL for the complete text written by the plugin to <code>stderr</code>. If the command
   *    hasn't finished running, then this string is empty.</p>
   */
  StandardErrorUrl?: string;

  /**
   * <p>Amazon CloudWatch Logs information where Systems Manager sent the command output.</p>
   */
  CloudWatchOutputConfig?: CloudWatchOutputConfig;
}

export namespace GetCommandInvocationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCommandInvocationResult): any => ({
    ...obj,
  });
}

export interface GetConnectionStatusRequest {
  /**
   * <p>The managed node ID.</p>
   */
  Target: string | undefined;
}

export namespace GetConnectionStatusRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetConnectionStatusRequest): any => ({
    ...obj,
  });
}

export interface GetConnectionStatusResponse {
  /**
   * <p>The ID of the managed node to check connection status. </p>
   */
  Target?: string;

  /**
   * <p>The status of the connection to the managed node. For example, 'Connected' or 'Not
   *    Connected'.</p>
   */
  Status?: ConnectionStatus | string;
}

export namespace GetConnectionStatusResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetConnectionStatusResponse): any => ({
    ...obj,
  });
}

export interface GetDefaultPatchBaselineRequest {
  /**
   * <p>Returns the default patch baseline for the specified operating system.</p>
   */
  OperatingSystem?: OperatingSystem | string;
}

export namespace GetDefaultPatchBaselineRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDefaultPatchBaselineRequest): any => ({
    ...obj,
  });
}

export interface GetDefaultPatchBaselineResult {
  /**
   * <p>The ID of the default patch baseline.</p>
   */
  BaselineId?: string;

  /**
   * <p>The operating system for the returned patch baseline. </p>
   */
  OperatingSystem?: OperatingSystem | string;
}

export namespace GetDefaultPatchBaselineResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDefaultPatchBaselineResult): any => ({
    ...obj,
  });
}

export interface GetDeployablePatchSnapshotForInstanceRequest {
  /**
   * <p>The ID of the managed node for which the appropriate patch snapshot should be
   *    retrieved.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The snapshot ID provided by the user when running <code>AWS-RunPatchBaseline</code>.</p>
   */
  SnapshotId: string | undefined;

  /**
   * <p>Defines the basic information about a patch baseline override.</p>
   */
  BaselineOverride?: BaselineOverride;
}

export namespace GetDeployablePatchSnapshotForInstanceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDeployablePatchSnapshotForInstanceRequest): any => ({
    ...obj,
  });
}

export interface GetDeployablePatchSnapshotForInstanceResult {
  /**
   * <p>The managed node ID.</p>
   */
  InstanceId?: string;

  /**
   * <p>The user-defined snapshot ID.</p>
   */
  SnapshotId?: string;

  /**
   * <p>A pre-signed Amazon Simple Storage Service (Amazon S3) URL that can be used to download the
   *    patch snapshot.</p>
   */
  SnapshotDownloadUrl?: string;

  /**
   * <p>Returns the specific operating system (for example Windows Server 2012 or Amazon Linux
   *    2015.09) on the managed node for the specified patch snapshot.</p>
   */
  Product?: string;
}

export namespace GetDeployablePatchSnapshotForInstanceResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDeployablePatchSnapshotForInstanceResult): any => ({
    ...obj,
  });
}

export interface GetDocumentRequest {
  /**
   * <p>The name of the SSM document.</p>
   */
  Name: string | undefined;

  /**
   * <p>An optional field specifying the version of the artifact associated with the document. For
   *    example, "Release 12, Update 6". This value is unique across all versions of a document and can't
   *    be changed.</p>
   */
  VersionName?: string;

  /**
   * <p>The document version for which you want information.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>Returns the document in the specified format. The document format can be either JSON or
   *    YAML. JSON is the default format.</p>
   */
  DocumentFormat?: DocumentFormat | string;
}

export namespace GetDocumentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDocumentRequest): any => ({
    ...obj,
  });
}

export interface GetDocumentResult {
  /**
   * <p>The name of the SSM document.</p>
   */
  Name?: string;

  /**
   * <p>The date the SSM document was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The friendly name of the SSM document. This value can differ for each version of the
   *    document. If you want to update this value, see <a>UpdateDocument</a>.</p>
   */
  DisplayName?: string;

  /**
   * <p>The version of the artifact associated with the document. For example, "Release 12, Update
   *    6". This value is unique across all versions of a document, and can't be changed.</p>
   */
  VersionName?: string;

  /**
   * <p>The document version.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>The status of the SSM document, such as <code>Creating</code>, <code>Active</code>,
   *     <code>Updating</code>, <code>Failed</code>, and <code>Deleting</code>.</p>
   */
  Status?: DocumentStatus | string;

  /**
   * <p>A message returned by Amazon Web Services Systems Manager that explains the <code>Status</code> value. For example, a
   *     <code>Failed</code> status might be explained by the <code>StatusInformation</code> message,
   *    "The specified S3 bucket doesn't exist. Verify that the URL of the S3 bucket is correct."</p>
   */
  StatusInformation?: string;

  /**
   * <p>The contents of the SSM document.</p>
   */
  Content?: string;

  /**
   * <p>The document type.</p>
   */
  DocumentType?: DocumentType | string;

  /**
   * <p>The document format, either JSON or YAML.</p>
   */
  DocumentFormat?: DocumentFormat | string;

  /**
   * <p>A list of SSM documents required by a document. For example, an
   *     <code>ApplicationConfiguration</code> document requires an
   *     <code>ApplicationConfigurationSchema</code> document.</p>
   */
  Requires?: DocumentRequires[];

  /**
   * <p>A description of the document attachments, including names, locations, sizes, and so
   *    on.</p>
   */
  AttachmentsContent?: AttachmentContent[];

  /**
   * <p>The current review status of a new custom Systems Manager document (SSM document) created by a member
   *    of your organization, or of the latest version of an existing SSM document.</p>
   *          <p>Only one version of an SSM document can be in the APPROVED state at a time. When a new
   *    version is approved, the status of the previous version changes to REJECTED.</p>
   *          <p>Only one version of an SSM document can be in review, or PENDING, at a time.</p>
   */
  ReviewStatus?: ReviewStatus | string;
}

export namespace GetDocumentResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDocumentResult): any => ({
    ...obj,
  });
}

export interface GetInventoryResult {
  /**
   * <p>Collection of inventory entities such as a collection of managed node inventory. </p>
   */
  Entities?: InventoryResultEntity[];

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   */
  NextToken?: string;
}

export namespace GetInventoryResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInventoryResult): any => ({
    ...obj,
  });
}

export interface GetInventorySchemaRequest {
  /**
   * <p>The type of inventory item to return.</p>
   */
  TypeName?: string;

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
   * <p>Returns inventory schemas that support aggregation. For example, this call returns the
   *     <code>AWS:InstanceInformation</code> type, because it supports aggregation based on the
   *     <code>PlatformName</code>, <code>PlatformType</code>, and <code>PlatformVersion</code>
   *    attributes.</p>
   */
  Aggregator?: boolean;

  /**
   * <p>Returns the sub-type schema for a specified inventory type.</p>
   */
  SubType?: boolean;
}

export namespace GetInventorySchemaRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInventorySchemaRequest): any => ({
    ...obj,
  });
}

export interface GetInventorySchemaResult {
  /**
   * <p>Inventory schemas returned by the request.</p>
   */
  Schemas?: InventoryItemSchema[];

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   */
  NextToken?: string;
}

export namespace GetInventorySchemaResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInventorySchemaResult): any => ({
    ...obj,
  });
}

export interface GetMaintenanceWindowRequest {
  /**
   * <p>The ID of the maintenance window for which you want to retrieve information.</p>
   */
  WindowId: string | undefined;
}

export namespace GetMaintenanceWindowRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMaintenanceWindowRequest): any => ({
    ...obj,
  });
}

export interface GetMaintenanceWindowResult {
  /**
   * <p>The ID of the created maintenance window.</p>
   */
  WindowId?: string;

  /**
   * <p>The name of the maintenance window.</p>
   */
  Name?: string;

  /**
   * <p>The description of the maintenance window.</p>
   */
  Description?: string;

  /**
   * <p>The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled
   *    to become active. The maintenance window won't run before this specified time.</p>
   */
  StartDate?: string;

  /**
   * <p>The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled
   *    to become inactive. The maintenance window won't run after this specified time.</p>
   */
  EndDate?: string;

  /**
   * <p>The schedule of the maintenance window in the form of a cron or rate expression.</p>
   */
  Schedule?: string;

  /**
   * <p>The time zone that the scheduled maintenance window executions are based on, in Internet
   *    Assigned Numbers Authority (IANA) format. For example: "America/Los_Angeles", "UTC", or
   *    "Asia/Seoul". For more information, see the <a href="https://www.iana.org/time-zones">Time
   *     Zone Database</a> on the IANA website.</p>
   */
  ScheduleTimezone?: string;

  /**
   * <p>The number of days to wait to run a maintenance window after the scheduled cron expression
   *    date and time.</p>
   */
  ScheduleOffset?: number;

  /**
   * <p>The next time the maintenance window will actually run, taking into account any specified
   *    times for the maintenance window to become active or inactive.</p>
   */
  NextExecutionTime?: string;

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
   * <p>Whether targets must be registered with the maintenance window before tasks can be defined
   *    for those targets.</p>
   */
  AllowUnassociatedTargets?: boolean;

  /**
   * <p>Indicates whether the maintenance window is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The date the maintenance window was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The date the maintenance window was last modified.</p>
   */
  ModifiedDate?: Date;
}

export namespace GetMaintenanceWindowResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMaintenanceWindowResult): any => ({
    ...obj,
    ...(obj.Description && { Description: SENSITIVE_STRING }),
  });
}

export interface GetMaintenanceWindowExecutionRequest {
  /**
   * <p>The ID of the maintenance window execution that includes the task.</p>
   */
  WindowExecutionId: string | undefined;
}

export namespace GetMaintenanceWindowExecutionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMaintenanceWindowExecutionRequest): any => ({
    ...obj,
  });
}

export interface GetMaintenanceWindowExecutionResult {
  /**
   * <p>The ID of the maintenance window execution.</p>
   */
  WindowExecutionId?: string;

  /**
   * <p>The ID of the task executions from the maintenance window execution.</p>
   */
  TaskIds?: string[];

  /**
   * <p>The status of the maintenance window execution.</p>
   */
  Status?: MaintenanceWindowExecutionStatus | string;

  /**
   * <p>The details explaining the status. Not available for all status values.</p>
   */
  StatusDetails?: string;

  /**
   * <p>The time the maintenance window started running.</p>
   */
  StartTime?: Date;

  /**
   * <p>The time the maintenance window finished running.</p>
   */
  EndTime?: Date;
}

export namespace GetMaintenanceWindowExecutionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMaintenanceWindowExecutionResult): any => ({
    ...obj,
  });
}

export interface GetMaintenanceWindowExecutionTaskRequest {
  /**
   * <p>The ID of the maintenance window execution that includes the task.</p>
   */
  WindowExecutionId: string | undefined;

  /**
   * <p>The ID of the specific task execution in the maintenance window task that should be
   *    retrieved.</p>
   */
  TaskId: string | undefined;
}

export namespace GetMaintenanceWindowExecutionTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMaintenanceWindowExecutionTaskRequest): any => ({
    ...obj,
  });
}

export interface GetMaintenanceWindowExecutionTaskResult {
  /**
   * <p>The ID of the maintenance window execution that includes the task.</p>
   */
  WindowExecutionId?: string;

  /**
   * <p>The ID of the specific task execution in the maintenance window task that was
   *    retrieved.</p>
   */
  TaskExecutionId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the task that ran.</p>
   */
  TaskArn?: string;

  /**
   * <p>The role that was assumed when running the task.</p>
   */
  ServiceRole?: string;

  /**
   * <p>The type of task that was run.</p>
   */
  Type?: MaintenanceWindowTaskType | string;

  /**
   * <p>The parameters passed to the task when it was run.</p>
   *          <note>
   *             <p>
   *                <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs,
   *       instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information
   *       about how Systems Manager handles these options for the supported maintenance window task
   *       types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p>
   *          </note>
   *          <p>The map has the following format:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Key</code>: string, between 1 and 255 characters</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Value</code>: an array of strings, each between 1 and 255 characters</p>
   *             </li>
   *          </ul>
   */
  TaskParameters?: Record<string, MaintenanceWindowTaskParameterValueExpression>[];

  /**
   * <p>The priority of the task.</p>
   */
  Priority?: number;

  /**
   * <p>The defined maximum number of task executions that could be run in parallel.</p>
   */
  MaxConcurrency?: string;

  /**
   * <p>The defined maximum number of task execution errors allowed before scheduling of the task
   *    execution would have been stopped.</p>
   */
  MaxErrors?: string;

  /**
   * <p>The status of the task.</p>
   */
  Status?: MaintenanceWindowExecutionStatus | string;

  /**
   * <p>The details explaining the status. Not available for all status values.</p>
   */
  StatusDetails?: string;

  /**
   * <p>The time the task execution started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The time the task execution completed.</p>
   */
  EndTime?: Date;
}

export namespace GetMaintenanceWindowExecutionTaskResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMaintenanceWindowExecutionTaskResult): any => ({
    ...obj,
    ...(obj.TaskParameters && { TaskParameters: SENSITIVE_STRING }),
  });
}

export interface GetMaintenanceWindowExecutionTaskInvocationRequest {
  /**
   * <p>The ID of the maintenance window execution for which the task is a part.</p>
   */
  WindowExecutionId: string | undefined;

  /**
   * <p>The ID of the specific task in the maintenance window task that should be retrieved. </p>
   */
  TaskId: string | undefined;

  /**
   * <p>The invocation ID to retrieve.</p>
   */
  InvocationId: string | undefined;
}

export namespace GetMaintenanceWindowExecutionTaskInvocationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMaintenanceWindowExecutionTaskInvocationRequest): any => ({
    ...obj,
  });
}

export interface GetMaintenanceWindowExecutionTaskInvocationResult {
  /**
   * <p>The maintenance window execution ID.</p>
   */
  WindowExecutionId?: string;

  /**
   * <p>The task execution ID.</p>
   */
  TaskExecutionId?: string;

  /**
   * <p>The invocation ID.</p>
   */
  InvocationId?: string;

  /**
   * <p>The execution ID.</p>
   */
  ExecutionId?: string;

  /**
   * <p>Retrieves the task type for a maintenance window.</p>
   */
  TaskType?: MaintenanceWindowTaskType | string;

  /**
   * <p>The parameters used at the time that the task ran.</p>
   */
  Parameters?: string;

  /**
   * <p>The task status for an invocation.</p>
   */
  Status?: MaintenanceWindowExecutionStatus | string;

  /**
   * <p>The details explaining the status. Details are only available for certain status
   *    values.</p>
   */
  StatusDetails?: string;

  /**
   * <p>The time that the task started running on the target.</p>
   */
  StartTime?: Date;

  /**
   * <p>The time that the task finished running on the target.</p>
   */
  EndTime?: Date;

  /**
   * <p>User-provided value to be included in any Amazon CloudWatch Events or Amazon EventBridge
   *    events raised while running tasks for these targets in this maintenance window.</p>
   */
  OwnerInformation?: string;

  /**
   * <p>The maintenance window target ID.</p>
   */
  WindowTargetId?: string;
}

export namespace GetMaintenanceWindowExecutionTaskInvocationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMaintenanceWindowExecutionTaskInvocationResult): any => ({
    ...obj,
    ...(obj.Parameters && { Parameters: SENSITIVE_STRING }),
    ...(obj.OwnerInformation && { OwnerInformation: SENSITIVE_STRING }),
  });
}

export interface GetMaintenanceWindowTaskRequest {
  /**
   * <p>The maintenance window ID that includes the task to retrieve.</p>
   */
  WindowId: string | undefined;

  /**
   * <p>The maintenance window task ID to retrieve.</p>
   */
  WindowTaskId: string | undefined;
}

export namespace GetMaintenanceWindowTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMaintenanceWindowTaskRequest): any => ({
    ...obj,
  });
}

export interface GetMaintenanceWindowTaskResult {
  /**
   * <p>The retrieved maintenance window ID.</p>
   */
  WindowId?: string;

  /**
   * <p>The retrieved maintenance window task ID.</p>
   */
  WindowTaskId?: string;

  /**
   * <p>The targets where the task should run.</p>
   */
  Targets?: Target[];

  /**
   * <p>The resource that the task used during execution. For <code>RUN_COMMAND</code> and
   *     <code>AUTOMATION</code> task types, the value of <code>TaskArn</code> is the SSM document
   *    name/ARN. For <code>LAMBDA</code> tasks, the value is the function name/ARN. For
   *     <code>STEP_FUNCTIONS</code> tasks, the value is the state machine ARN.</p>
   */
  TaskArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) service role to use to publish Amazon Simple Notification Service
   * (Amazon SNS) notifications for maintenance window Run Command tasks.</p>
   */
  ServiceRoleArn?: string;

  /**
   * <p>The type of task to run.</p>
   */
  TaskType?: MaintenanceWindowTaskType | string;

  /**
   * <p>The parameters to pass to the task when it runs.</p>
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
   * <p>The parameters to pass to the task when it runs.</p>
   */
  TaskInvocationParameters?: MaintenanceWindowTaskInvocationParameters;

  /**
   * <p>The priority of the task when it runs. The lower the number, the higher the priority. Tasks
   *    that have the same priority are scheduled in parallel.</p>
   */
  Priority?: number;

  /**
   * <p>The maximum number of targets allowed to run this task in parallel.</p>
   *          <note>
   *             <p>For maintenance window tasks without a target specified, you can't supply a value for this
   *     option. Instead, the system inserts a placeholder value of <code>1</code>, which may be reported
   *     in the response to this command. This value doesn't affect the running of your task and can be
   *     ignored.</p>
   *          </note>
   */
  MaxConcurrency?: string;

  /**
   * <p>The maximum number of errors allowed before the task stops being scheduled.</p>
   *          <note>
   *             <p>For maintenance window tasks without a target specified, you can't supply a value for this
   *     option. Instead, the system inserts a placeholder value of <code>1</code>, which may be reported
   *     in the response to this command. This value doesn't affect the running of your task and can be
   *     ignored.</p>
   *          </note>
   */
  MaxErrors?: string;

  /**
   * <p>The location in Amazon Simple Storage Service (Amazon S3) where the task results are
   *    logged.</p>
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
   * <p>The retrieved task name.</p>
   */
  Name?: string;

  /**
   * <p>The retrieved task description.</p>
   */
  Description?: string;

  /**
   * <p>The action to take on tasks when the maintenance window cutoff time is reached.
   *     <code>CONTINUE_TASK</code> means that tasks continue to run. For Automation, Lambda, Step Functions tasks, <code>CANCEL_TASK</code> means that currently
   *    running task invocations continue, but no new task invocations are started. For Run Command
   *    tasks, <code>CANCEL_TASK</code> means the system attempts to stop the task by sending a
   *     <code>CancelCommand</code> operation.</p>
   */
  CutoffBehavior?: MaintenanceWindowTaskCutoffBehavior | string;
}

export namespace GetMaintenanceWindowTaskResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMaintenanceWindowTaskResult): any => ({
    ...obj,
    ...(obj.TaskParameters && { TaskParameters: SENSITIVE_STRING }),
    ...(obj.TaskInvocationParameters && {
      TaskInvocationParameters: MaintenanceWindowTaskInvocationParameters.filterSensitiveLog(
        obj.TaskInvocationParameters
      ),
    }),
    ...(obj.Description && { Description: SENSITIVE_STRING }),
  });
}

export interface GetOpsItemRequest {
  /**
   * <p>The ID of the OpsItem that you want to get.</p>
   */
  OpsItemId: string | undefined;
}

export namespace GetOpsItemRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetOpsItemRequest): any => ({
    ...obj,
  });
}

export interface GetOpsItemResponse {
  /**
   * <p>The OpsItem.</p>
   */
  OpsItem?: OpsItem;
}

export namespace GetOpsItemResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetOpsItemResponse): any => ({
    ...obj,
  });
}

export interface GetOpsMetadataRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of an OpsMetadata Object to view.</p>
   */
  OpsMetadataArn: string | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token to start the list. Use this token to get the next set of results.</p>
   */
  NextToken?: string;
}

export namespace GetOpsMetadataRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetOpsMetadataRequest): any => ({
    ...obj,
  });
}

export interface GetOpsMetadataResult {
  /**
   * <p>The resource ID of the Application Manager application.</p>
   */
  ResourceId?: string;

  /**
   * <p>OpsMetadata for an Application Manager application.</p>
   */
  Metadata?: Record<string, MetadataValue>;

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *    results.</p>
   */
  NextToken?: string;
}

export namespace GetOpsMetadataResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetOpsMetadataResult): any => ({
    ...obj,
  });
}

export interface GetOpsSummaryResult {
  /**
   * <p>The list of aggregated details and filtered OpsData.</p>
   */
  Entities?: OpsEntity[];

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *    results.</p>
   */
  NextToken?: string;
}

export namespace GetOpsSummaryResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetOpsSummaryResult): any => ({
    ...obj,
  });
}

export interface GetParameterRequest {
  /**
   * <p>The name of the parameter you want to query.</p>
   *          <p>To query by parameter label, use <code>"Name": "name:label"</code>. To query by parameter
   *    version, use <code>"Name": "name:version"</code>.</p>
   */
  Name: string | undefined;

  /**
   * <p>Return decrypted values for secure string parameters. This flag is ignored for
   *     <code>String</code> and <code>StringList</code> parameter types.</p>
   */
  WithDecryption?: boolean;
}

export namespace GetParameterRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetParameterRequest): any => ({
    ...obj,
  });
}

export interface GetParameterResult {
  /**
   * <p>Information about a parameter.</p>
   */
  Parameter?: Parameter;
}

export namespace GetParameterResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetParameterResult): any => ({
    ...obj,
    ...(obj.Parameter && { Parameter: Parameter.filterSensitiveLog(obj.Parameter) }),
  });
}

export interface GetParameterHistoryRequest {
  /**
   * <p>The name of the parameter for which you want to review history.</p>
   */
  Name: string | undefined;

  /**
   * <p>Return decrypted values for secure string parameters. This flag is ignored for
   *     <code>String</code> and <code>StringList</code> parameter types.</p>
   */
  WithDecryption?: boolean;

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

export namespace GetParameterHistoryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetParameterHistoryRequest): any => ({
    ...obj,
  });
}

export interface GetParameterHistoryResult {
  /**
   * <p>A list of parameters returned by the request.</p>
   */
  Parameters?: ParameterHistory[];

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   */
  NextToken?: string;
}

export namespace GetParameterHistoryResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetParameterHistoryResult): any => ({
    ...obj,
    ...(obj.Parameters && { Parameters: obj.Parameters.map((item) => ParameterHistory.filterSensitiveLog(item)) }),
  });
}

export interface GetParametersRequest {
  /**
   * <p>Names of the parameters for which you want to query information.</p>
   *          <p>To query by parameter label, use <code>"Name": "name:label"</code>. To query by parameter
   *    version, use <code>"Name": "name:version"</code>.</p>
   */
  Names: string[] | undefined;

  /**
   * <p>Return decrypted secure string value. Return decrypted values for secure string parameters.
   *    This flag is ignored for <code>String</code> and <code>StringList</code> parameter types.</p>
   */
  WithDecryption?: boolean;
}

export namespace GetParametersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetParametersRequest): any => ({
    ...obj,
  });
}

export interface GetParametersResult {
  /**
   * <p>A list of details for a parameter.</p>
   */
  Parameters?: Parameter[];

  /**
   * <p>A list of parameters that aren't formatted correctly or don't run during an
   *    execution.</p>
   */
  InvalidParameters?: string[];
}

export namespace GetParametersResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetParametersResult): any => ({
    ...obj,
    ...(obj.Parameters && { Parameters: obj.Parameters.map((item) => Parameter.filterSensitiveLog(item)) }),
  });
}

export interface GetParametersByPathRequest {
  /**
   * <p>The hierarchy for the parameter. Hierarchies start with a forward slash (/). The hierarchy
   *    is the parameter name except the last part of the parameter. For the API call to succeed, the
   *    last part of the parameter name can't be in the path. A parameter name hierarchy can have a
   *    maximum of 15 levels. Here is an example of a hierarchy:
   *     <code>/Finance/Prod/IAD/WinServ2016/license33 </code>
   *          </p>
   */
  Path: string | undefined;

  /**
   * <p>Retrieve all parameters within a hierarchy.</p>
   *          <important>
   *             <p>If a user has access to a path, then the user can access all levels of that path. For
   *     example, if a user has permission to access path <code>/a</code>, then the user can also access
   *      <code>/a/b</code>. Even if a user has explicitly been denied access in IAM for
   *     parameter <code>/a/b</code>, they can still call the GetParametersByPath API operation
   *     recursively for <code>/a</code> and view <code>/a/b</code>.</p>
   *          </important>
   */
  Recursive?: boolean;

  /**
   * <p>Filters to limit the request results.</p>
   *          <note>
   *             <p>The following <code>Key</code> values are supported for <code>GetParametersByPath</code>:
   *      <code>Type</code>, <code>KeyId</code>, and <code>Label</code>.</p>
   *             <p>The following <code>Key</code> values aren't supported for
   *     <code>GetParametersByPath</code>: <code>tag</code>, <code>DataType</code>, <code>Name</code>,
   *      <code>Path</code>, and <code>Tier</code>.</p>
   *          </note>
   */
  ParameterFilters?: ParameterStringFilter[];

  /**
   * <p>Retrieve all parameters in a hierarchy with their value decrypted.</p>
   */
  WithDecryption?: boolean;

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

export namespace GetParametersByPathRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetParametersByPathRequest): any => ({
    ...obj,
  });
}

export interface GetParametersByPathResult {
  /**
   * <p>A list of parameters found in the specified hierarchy.</p>
   */
  Parameters?: Parameter[];

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *    results.</p>
   */
  NextToken?: string;
}

export namespace GetParametersByPathResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetParametersByPathResult): any => ({
    ...obj,
    ...(obj.Parameters && { Parameters: obj.Parameters.map((item) => Parameter.filterSensitiveLog(item)) }),
  });
}

export interface GetPatchBaselineRequest {
  /**
   * <p>The ID of the patch baseline to retrieve.</p>
   *          <note>
   *             <p>To retrieve information about an Amazon Web Services managed patch baseline, specify the full Amazon
   *     Resource Name (ARN) of the baseline. For example, for the baseline
   *      <code>AWS-AmazonLinuxDefaultPatchBaseline</code>, specify
   *      <code>arn:aws:ssm:us-east-2:733109147000:patchbaseline/pb-0e392de35e7c563b7</code> instead of
   *      <code>pb-0e392de35e7c563b7</code>.</p>
   *          </note>
   */
  BaselineId: string | undefined;
}

export namespace GetPatchBaselineRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPatchBaselineRequest): any => ({
    ...obj,
  });
}

export interface GetPatchBaselineResult {
  /**
   * <p>The ID of the retrieved patch baseline.</p>
   */
  BaselineId?: string;

  /**
   * <p>The name of the patch baseline.</p>
   */
  Name?: string;

  /**
   * <p>Returns the operating system specified for the patch baseline.</p>
   */
  OperatingSystem?: OperatingSystem | string;

  /**
   * <p>A set of global filters used to exclude patches from the baseline.</p>
   */
  GlobalFilters?: PatchFilterGroup;

  /**
   * <p>A set of rules used to include patches in the baseline.</p>
   */
  ApprovalRules?: PatchRuleGroup;

  /**
   * <p>A list of explicitly approved patches for the baseline.</p>
   */
  ApprovedPatches?: string[];

  /**
   * <p>Returns the specified compliance severity level for approved patches in the patch
   *    baseline.</p>
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
   */
  RejectedPatches?: string[];

  /**
   * <p>The action specified to take on patches included in the <code>RejectedPatches</code> list. A
   *    patch can be allowed only if it is a dependency of another package, or blocked entirely along
   *    with packages that include it as a dependency.</p>
   */
  RejectedPatchesAction?: PatchAction | string;

  /**
   * <p>Patch groups included in the patch baseline.</p>
   */
  PatchGroups?: string[];

  /**
   * <p>The date the patch baseline was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The date the patch baseline was last modified.</p>
   */
  ModifiedDate?: Date;

  /**
   * <p>A description of the patch baseline.</p>
   */
  Description?: string;

  /**
   * <p>Information about the patches to use to update the managed nodes, including target operating
   *    systems and source repositories. Applies to Linux managed nodes only.</p>
   */
  Sources?: PatchSource[];
}

export namespace GetPatchBaselineResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPatchBaselineResult): any => ({
    ...obj,
    ...(obj.Sources && { Sources: obj.Sources.map((item) => PatchSource.filterSensitiveLog(item)) }),
  });
}

export interface GetPatchBaselineForPatchGroupRequest {
  /**
   * <p>The name of the patch group whose patch baseline should be retrieved.</p>
   */
  PatchGroup: string | undefined;

  /**
   * <p>Returns the operating system rule specified for patch groups using the patch
   *    baseline.</p>
   */
  OperatingSystem?: OperatingSystem | string;
}

export namespace GetPatchBaselineForPatchGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPatchBaselineForPatchGroupRequest): any => ({
    ...obj,
  });
}

export interface GetPatchBaselineForPatchGroupResult {
  /**
   * <p>The ID of the patch baseline that should be used for the patch group.</p>
   */
  BaselineId?: string;

  /**
   * <p>The name of the patch group.</p>
   */
  PatchGroup?: string;

  /**
   * <p>The operating system rule specified for patch groups using the patch baseline.</p>
   */
  OperatingSystem?: OperatingSystem | string;
}

export namespace GetPatchBaselineForPatchGroupResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPatchBaselineForPatchGroupResult): any => ({
    ...obj,
  });
}

/**
 * <p>The request body of the GetServiceSetting API operation.</p>
 */
export interface GetServiceSettingRequest {
  /**
   * <p>The ID of the service setting to get. The setting ID can be one of the following.</p>
   *          <ul>
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
   *                <p>
   *                   <code>/ssm/documents/console/public-sharing-permission</code>
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
   *             <li>
   *                <p>
   *                   <code>/ssm/managed-instance/activation-tier</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  SettingId: string | undefined;
}

export namespace GetServiceSettingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetServiceSettingRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The query result body of the GetServiceSetting API operation.</p>
 */
export interface GetServiceSettingResult {
  /**
   * <p>The query result of the current service setting.</p>
   */
  ServiceSetting?: ServiceSetting;
}

export namespace GetServiceSettingResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetServiceSettingResult): any => ({
    ...obj,
  });
}

export interface LabelParameterVersionRequest {
  /**
   * <p>The parameter name on which you want to attach one or more labels.</p>
   */
  Name: string | undefined;

  /**
   * <p>The specific version of the parameter on which you want to attach one or more labels. If no
   *    version is specified, the system attaches the label to the latest version.</p>
   */
  ParameterVersion?: number;

  /**
   * <p>One or more labels to attach to the specified parameter version.</p>
   */
  Labels: string[] | undefined;
}

export namespace LabelParameterVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LabelParameterVersionRequest): any => ({
    ...obj,
  });
}

export interface LabelParameterVersionResult {
  /**
   * <p>The label doesn't meet the requirements. For information about parameter label requirements,
   *    see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-paramstore-labels.html">Labeling parameters</a>
   *    in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   */
  InvalidLabels?: string[];

  /**
   * <p>The version of the parameter that has been labeled.</p>
   */
  ParameterVersion?: number;
}

export namespace LabelParameterVersionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LabelParameterVersionResult): any => ({
    ...obj,
  });
}

export interface ListAssociationsRequest {
  /**
   * <p>One or more filters. Use a filter to return a more specific list of results.</p>
   *          <note>
   *             <p>Filtering associations using the <code>InstanceID</code> attribute only returns legacy
   *     associations created using the <code>InstanceID</code> attribute. Associations targeting the
   *     managed node that are part of the Target Attributes <code>ResourceGroup</code> or
   *      <code>Tags</code> aren't returned.</p>
   *          </note>
   */
  AssociationFilterList?: AssociationFilter[];

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

export namespace ListAssociationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAssociationsRequest): any => ({
    ...obj,
  });
}

export interface ListAssociationsResult {
  /**
   * <p>The associations.</p>
   */
  Associations?: Association[];

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   */
  NextToken?: string;
}

export namespace ListAssociationsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAssociationsResult): any => ({
    ...obj,
  });
}

export interface ListAssociationVersionsRequest {
  /**
   * <p>The association ID for which you want to view all versions.</p>
   */
  AssociationId: string | undefined;

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

export namespace ListAssociationVersionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAssociationVersionsRequest): any => ({
    ...obj,
  });
}

export interface ListAssociationVersionsResult {
  /**
   * <p>Information about all versions of the association for the specified association ID.</p>
   */
  AssociationVersions?: AssociationVersionInfo[];

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *    results.</p>
   */
  NextToken?: string;
}

export namespace ListAssociationVersionsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAssociationVersionsResult): any => ({
    ...obj,
    ...(obj.AssociationVersions && {
      AssociationVersions: obj.AssociationVersions.map((item) => AssociationVersionInfo.filterSensitiveLog(item)),
    }),
  });
}

export interface ListCommandInvocationsRequest {
  /**
   * <p>(Optional) The invocations for a specific command ID.</p>
   */
  CommandId?: string;

  /**
   * <p>(Optional) The command execution details for a specific managed node ID.</p>
   */
  InstanceId?: string;

  /**
   * <p>(Optional) The maximum number of items to return for this call. The call also returns a
   *    token that you can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>(Optional) The token for the next set of items to return. (You received this token from a
   *    previous call.)</p>
   */
  NextToken?: string;

  /**
   * <p>(Optional) One or more filters. Use a filter to return a more specific list of
   *    results.</p>
   */
  Filters?: CommandFilter[];

  /**
   * <p>(Optional) If set this returns the response of the command executions and any command
   *    output. The default value is <code>false</code>. </p>
   */
  Details?: boolean;
}

export namespace ListCommandInvocationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCommandInvocationsRequest): any => ({
    ...obj,
  });
}

export interface ListCommandInvocationsResult {
  /**
   * <p>(Optional) A list of all invocations. </p>
   */
  CommandInvocations?: CommandInvocation[];

  /**
   * <p>(Optional) The token for the next set of items to return. (You received this token from a
   *    previous call.)</p>
   */
  NextToken?: string;
}

export namespace ListCommandInvocationsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCommandInvocationsResult): any => ({
    ...obj,
  });
}

export interface ListCommandsRequest {
  /**
   * <p>(Optional) If provided, lists only the specified command.</p>
   */
  CommandId?: string;

  /**
   * <p>(Optional) Lists commands issued against this managed node ID.</p>
   *          <note>
   *             <p>You can't specify a managed node ID in the same command that you specify
   *      <code>Status</code> = <code>Pending</code>. This is because the command hasn't reached the
   *     managed node yet.</p>
   *          </note>
   */
  InstanceId?: string;

  /**
   * <p>(Optional) The maximum number of items to return for this call. The call also returns a
   *    token that you can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>(Optional) The token for the next set of items to return. (You received this token from a
   *    previous call.)</p>
   */
  NextToken?: string;

  /**
   * <p>(Optional) One or more filters. Use a filter to return a more specific list of results.
   *   </p>
   */
  Filters?: CommandFilter[];
}

export namespace ListCommandsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCommandsRequest): any => ({
    ...obj,
  });
}

export interface ListCommandsResult {
  /**
   * <p>(Optional) The list of commands requested by the user. </p>
   */
  Commands?: Command[];

  /**
   * <p>(Optional) The token for the next set of items to return. (You received this token from a
   *    previous call.)</p>
   */
  NextToken?: string;
}

export namespace ListCommandsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCommandsResult): any => ({
    ...obj,
    ...(obj.Commands && { Commands: obj.Commands.map((item) => Command.filterSensitiveLog(item)) }),
  });
}

export interface ListComplianceItemsRequest {
  /**
   * <p>One or more compliance filters. Use a filter to return a more specific list of
   *    results.</p>
   */
  Filters?: ComplianceStringFilter[];

  /**
   * <p>The ID for the resources from which to get compliance information. Currently, you can only
   *    specify one resource ID.</p>
   */
  ResourceIds?: string[];

  /**
   * <p>The type of resource from which to get compliance information. Currently, the only supported
   *    resource type is <code>ManagedInstance</code>.</p>
   */
  ResourceTypes?: string[];

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

export namespace ListComplianceItemsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListComplianceItemsRequest): any => ({
    ...obj,
  });
}

export interface ListComplianceItemsResult {
  /**
   * <p>A list of compliance information for the specified resource ID. </p>
   */
  ComplianceItems?: ComplianceItem[];

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *    results.</p>
   */
  NextToken?: string;
}

export namespace ListComplianceItemsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListComplianceItemsResult): any => ({
    ...obj,
  });
}

export interface ListComplianceSummariesRequest {
  /**
   * <p>One or more compliance or inventory filters. Use a filter to return a more specific list of
   *    results.</p>
   */
  Filters?: ComplianceStringFilter[];

  /**
   * <p>A token to start the list. Use this token to get the next set of results. </p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return for this call. Currently, you can specify null or 50.
   *    The call also returns a token that you can specify in a subsequent call to get the next set of
   *    results.</p>
   */
  MaxResults?: number;
}

export namespace ListComplianceSummariesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListComplianceSummariesRequest): any => ({
    ...obj,
  });
}

export interface ListComplianceSummariesResult {
  /**
   * <p>A list of compliant and non-compliant summary counts based on compliance types. For example,
   *    this call returns State Manager associations, patches, or custom compliance types according to
   *    the filter criteria that you specified.</p>
   */
  ComplianceSummaryItems?: ComplianceSummaryItem[];

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *    results.</p>
   */
  NextToken?: string;
}

export namespace ListComplianceSummariesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListComplianceSummariesResult): any => ({
    ...obj,
  });
}

export interface ListDocumentMetadataHistoryRequest {
  /**
   * <p>The name of the change template.</p>
   */
  Name: string | undefined;

  /**
   * <p>The version of the change template.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>The type of data for which details are being requested. Currently, the only supported value
   *    is <code>DocumentReviews</code>.</p>
   */
  Metadata: DocumentMetadataEnum | string | undefined;

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
}

export namespace ListDocumentMetadataHistoryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDocumentMetadataHistoryRequest): any => ({
    ...obj,
  });
}

export interface ListDocumentMetadataHistoryResponse {
  /**
   * <p>The name of the change template.</p>
   */
  Name?: string;

  /**
   * <p>The version of the change template.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>The user ID of the person in the organization who requested the review of the
   *    change template.</p>
   */
  Author?: string;

  /**
   * <p>Information about the response to the change template approval request.</p>
   */
  Metadata?: DocumentMetadataResponseInfo;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListDocumentMetadataHistoryResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDocumentMetadataHistoryResponse): any => ({
    ...obj,
  });
}

export interface ListDocumentsRequest {
  /**
   * <p>This data type is deprecated. Instead, use <code>Filters</code>.</p>
   */
  DocumentFilterList?: DocumentFilter[];

  /**
   * <p>One or more <code>DocumentKeyValuesFilter</code> objects. Use a filter to return a more
   *    specific list of results. For keys, you can specify one or more key-value pair tags that have
   *    been applied to a document. Other valid keys include <code>Owner</code>, <code>Name</code>,
   *     <code>PlatformTypes</code>, <code>DocumentType</code>, and <code>TargetType</code>. For example,
   *    to return documents you own use <code>Key=Owner,Values=Self</code>. To specify a custom key-value
   *    pair, use the format <code>Key=tag:tagName,Values=valueName</code>.</p>
   *          <note>
   *             <p>This API operation only supports filtering documents by using a single tag key and one or
   *     more tag values. For example: <code>Key=tag:tagName,Values=valueName1,valueName2</code>
   *             </p>
   *          </note>
   */
  Filters?: DocumentKeyValuesFilter[];

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

export namespace ListDocumentsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDocumentsRequest): any => ({
    ...obj,
  });
}

export interface ListDocumentsResult {
  /**
   * <p>The names of the SSM documents.</p>
   */
  DocumentIdentifiers?: DocumentIdentifier[];

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   */
  NextToken?: string;
}

export namespace ListDocumentsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDocumentsResult): any => ({
    ...obj,
  });
}

export interface ListDocumentVersionsRequest {
  /**
   * <p>The name of the document. You can specify an Amazon Resource Name (ARN).</p>
   */
  Name: string | undefined;

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

export namespace ListDocumentVersionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDocumentVersionsRequest): any => ({
    ...obj,
  });
}

export interface ListDocumentVersionsResult {
  /**
   * <p>The document versions.</p>
   */
  DocumentVersions?: DocumentVersionInfo[];

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   */
  NextToken?: string;
}

export namespace ListDocumentVersionsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDocumentVersionsResult): any => ({
    ...obj,
  });
}

export interface ListInventoryEntriesRequest {
  /**
   * <p>The managed node ID for which you want inventory information.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The type of inventory item for which you want information.</p>
   */
  TypeName: string | undefined;

  /**
   * <p>One or more filters. Use a filter to return a more specific list of results.</p>
   */
  Filters?: InventoryFilter[];

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
}

export namespace ListInventoryEntriesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListInventoryEntriesRequest): any => ({
    ...obj,
  });
}

export interface ListInventoryEntriesResult {
  /**
   * <p>The type of inventory item returned by the request.</p>
   */
  TypeName?: string;

  /**
   * <p>The managed node ID targeted by the request to query inventory information.</p>
   */
  InstanceId?: string;

  /**
   * <p>The inventory schema version used by the managed node(s).</p>
   */
  SchemaVersion?: string;

  /**
   * <p>The time that inventory information was collected for the managed node(s).</p>
   */
  CaptureTime?: string;

  /**
   * <p>A list of inventory items on the managed node(s).</p>
   */
  Entries?: Record<string, string>[];

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   */
  NextToken?: string;
}

export namespace ListInventoryEntriesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListInventoryEntriesResult): any => ({
    ...obj,
  });
}

export interface ListOpsItemEventsRequest {
  /**
   * <p>One or more OpsItem filters. Use a filter to return a more specific list of results. </p>
   */
  Filters?: OpsItemEventFilter[];

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results. </p>
   */
  MaxResults?: number;

  /**
   * <p>A token to start the list. Use this token to get the next set of results. </p>
   */
  NextToken?: string;
}

export namespace ListOpsItemEventsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListOpsItemEventsRequest): any => ({
    ...obj,
  });
}

export interface ListOpsItemEventsResponse {
  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *    results. </p>
   */
  NextToken?: string;

  /**
   * <p>A list of event information for the specified OpsItems.</p>
   */
  Summaries?: OpsItemEventSummary[];
}

export namespace ListOpsItemEventsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListOpsItemEventsResponse): any => ({
    ...obj,
  });
}

export interface ListOpsItemRelatedItemsRequest {
  /**
   * <p>The ID of the OpsItem for which you want to list all related-item resources.</p>
   */
  OpsItemId?: string;

  /**
   * <p>One or more OpsItem filters. Use a filter to return a more specific list of results. </p>
   */
  Filters?: OpsItemRelatedItemsFilter[];

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

export namespace ListOpsItemRelatedItemsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListOpsItemRelatedItemsRequest): any => ({
    ...obj,
  });
}

export interface ListOpsItemRelatedItemsResponse {
  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *    results.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of related-item resources for the specified OpsItem.</p>
   */
  Summaries?: OpsItemRelatedItemSummary[];
}

export namespace ListOpsItemRelatedItemsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListOpsItemRelatedItemsResponse): any => ({
    ...obj,
  });
}

export interface ListOpsMetadataRequest {
  /**
   * <p>One or more filters to limit the number of OpsMetadata objects returned by the call.</p>
   */
  Filters?: OpsMetadataFilter[];

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token to start the list. Use this token to get the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListOpsMetadataRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListOpsMetadataRequest): any => ({
    ...obj,
  });
}

export interface ListOpsMetadataResult {
  /**
   * <p>Returns a list of OpsMetadata objects.</p>
   */
  OpsMetadataList?: OpsMetadata[];

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *    results.</p>
   */
  NextToken?: string;
}

export namespace ListOpsMetadataResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListOpsMetadataResult): any => ({
    ...obj,
  });
}

export interface ListResourceComplianceSummariesRequest {
  /**
   * <p>One or more filters. Use a filter to return a more specific list of results.</p>
   */
  Filters?: ComplianceStringFilter[];

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

export namespace ListResourceComplianceSummariesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListResourceComplianceSummariesRequest): any => ({
    ...obj,
  });
}

export interface ListResourceComplianceSummariesResult {
  /**
   * <p>A summary count for specified or targeted managed nodes. Summary count includes information
   *    about compliant and non-compliant State Manager associations, patch status, or custom items
   *    according to the filter criteria that you specify. </p>
   */
  ResourceComplianceSummaryItems?: ResourceComplianceSummaryItem[];

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *    results.</p>
   */
  NextToken?: string;
}

export namespace ListResourceComplianceSummariesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListResourceComplianceSummariesResult): any => ({
    ...obj,
  });
}

export interface ListResourceDataSyncRequest {
  /**
   * <p>View a list of resource data syncs according to the sync type. Specify
   *     <code>SyncToDestination</code> to view resource data syncs that synchronize data to an Amazon S3 bucket. Specify <code>SyncFromSource</code> to view resource data syncs from Organizations
   *    or from multiple Amazon Web Services Regions.</p>
   */
  SyncType?: string;

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

export namespace ListResourceDataSyncRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListResourceDataSyncRequest): any => ({
    ...obj,
  });
}

export interface ListResourceDataSyncResult {
  /**
   * <p>A list of your current resource data sync configurations and their statuses.</p>
   */
  ResourceDataSyncItems?: ResourceDataSyncItem[];

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *    results.</p>
   */
  NextToken?: string;
}

export namespace ListResourceDataSyncResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListResourceDataSyncResult): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>Returns a list of tags for a specific resource type.</p>
   */
  ResourceType: ResourceTypeForTagging | string | undefined;

  /**
   * <p>The resource ID for which you want to see a list of tags.</p>
   */
  ResourceId: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResult {
  /**
   * <p>A list of tags.</p>
   */
  TagList?: Tag[];
}

export namespace ListTagsForResourceResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResult): any => ({
    ...obj,
  });
}

export interface ModifyDocumentPermissionRequest {
  /**
   * <p>The name of the document that you want to share.</p>
   */
  Name: string | undefined;

  /**
   * <p>The permission type for the document. The permission type can be
   *    <i>Share</i>.</p>
   */
  PermissionType: DocumentPermissionType | string | undefined;

  /**
   * <p>The Amazon Web Services user accounts that should have access to the document. The account IDs can
   *    either be a group of account IDs or <i>All</i>.</p>
   */
  AccountIdsToAdd?: string[];

  /**
   * <p>The Amazon Web Services user accounts that should no longer have access to the document. The Amazon Web Services
   *    user account can either be a group of account IDs or <i>All</i>. This action has a
   *    higher priority than <i>AccountIdsToAdd</i>. If you specify an account ID to add
   *    and the same ID to remove, the system removes access to the document.</p>
   */
  AccountIdsToRemove?: string[];

  /**
   * <p>(Optional) The version of the document to share. If it isn't specified, the system choose
   *    the <code>Default</code> version to share.</p>
   */
  SharedDocumentVersion?: string;
}

export namespace ModifyDocumentPermissionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyDocumentPermissionRequest): any => ({
    ...obj,
  });
}

export interface ModifyDocumentPermissionResponse {}

export namespace ModifyDocumentPermissionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyDocumentPermissionResponse): any => ({
    ...obj,
  });
}

export interface PutComplianceItemsRequest {
  /**
   * <p>Specify an ID for this resource. For a managed node, this is the node ID.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>Specify the type of resource. <code>ManagedInstance</code> is currently the only supported
   *    resource type.</p>
   */
  ResourceType: string | undefined;

  /**
   * <p>Specify the compliance type. For example, specify Association (for a State Manager
   *    association), Patch, or Custom:<code>string</code>.</p>
   */
  ComplianceType: string | undefined;

  /**
   * <p>A summary of the call execution that includes an execution ID, the type of execution (for
   *    example, <code>Command</code>), and the date/time of the execution using a datetime object that
   *    is saved in the following format: yyyy-MM-dd'T'HH:mm:ss'Z'.</p>
   */
  ExecutionSummary: ComplianceExecutionSummary | undefined;

  /**
   * <p>Information about the compliance as defined by the resource type. For example, for a patch
   *    compliance type, <code>Items</code> includes information about the PatchSeverity, Classification,
   *    and so on.</p>
   */
  Items: ComplianceItemEntry[] | undefined;

  /**
   * <p>MD5 or SHA-256 content hash. The content hash is used to determine if existing information
   *    should be overwritten or ignored. If the content hashes match, the request to put compliance
   *    information is ignored.</p>
   */
  ItemContentHash?: string;

  /**
   * <p>The mode for uploading compliance items. You can specify <code>COMPLETE</code> or
   *     <code>PARTIAL</code>. In <code>COMPLETE</code> mode, the system overwrites all existing
   *    compliance information for the resource. You must provide a full list of compliance items each
   *    time you send the request.</p>
   *          <p>In <code>PARTIAL</code> mode, the system overwrites compliance information for a specific
   *    association. The association must be configured with <code>SyncCompliance</code> set to
   *     <code>MANUAL</code>. By default, all requests use <code>COMPLETE</code> mode.</p>
   *          <note>
   *             <p>This attribute is only valid for association compliance.</p>
   *          </note>
   */
  UploadType?: ComplianceUploadType | string;
}

export namespace PutComplianceItemsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutComplianceItemsRequest): any => ({
    ...obj,
  });
}

export interface PutComplianceItemsResult {}

export namespace PutComplianceItemsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutComplianceItemsResult): any => ({
    ...obj,
  });
}

export interface PutInventoryRequest {
  /**
   * <p>An managed node ID where you want to add or update inventory items.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The inventory items that you want to add or update on managed nodes.</p>
   */
  Items: InventoryItem[] | undefined;
}

export namespace PutInventoryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutInventoryRequest): any => ({
    ...obj,
  });
}

export interface PutInventoryResult {
  /**
   * <p>Information about the request.</p>
   */
  Message?: string;
}

export namespace PutInventoryResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutInventoryResult): any => ({
    ...obj,
  });
}

export interface PutParameterRequest {
  /**
   * <p>The fully qualified name of the parameter that you want to add to the system. The fully
   *    qualified name includes the complete hierarchy of the parameter path and name. For parameters in
   *    a hierarchy, you must include a leading forward slash character (/) when you create or reference
   *    a parameter. For example: <code>/Dev/DBServer/MySQL/db-string13</code>
   *          </p>
   *          <p>Naming Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Parameter names are case sensitive.</p>
   *             </li>
   *             <li>
   *                <p>A parameter name must be unique within an Amazon Web Services Region</p>
   *             </li>
   *             <li>
   *                <p>A parameter name can't be prefixed with "<code>aws</code>" or "<code>ssm</code>"
   *      (case-insensitive).</p>
   *             </li>
   *             <li>
   *                <p>Parameter names can include only the following symbols and letters:
   *       <code>a-zA-Z0-9_.-</code>
   *                </p>
   *                <p>In addition, the slash character ( / ) is used to delineate hierarchies in parameter
   *      names. For example: <code>/Dev/Production/East/Project-ABC/MyParameter</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>A parameter name can't include spaces.</p>
   *             </li>
   *             <li>
   *                <p>Parameter hierarchies are limited to a maximum depth of fifteen levels.</p>
   *             </li>
   *          </ul>
   *          <p>For additional information about valid values for parameter names, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-paramstore-su-create.html">Creating Systems Manager parameters</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   *          <note>
   *             <p>The maximum length constraint of 2048 characters listed below includes 1037 characters
   *     reserved for internal use by Systems Manager. The maximum length for a parameter name that you create is
   *     1011 characters. This includes the characters in the ARN that precede the name you specify, such
   *     as <code>arn:aws:ssm:us-east-2:111122223333:parameter/</code>.</p>
   *          </note>
   */
  Name: string | undefined;

  /**
   * <p>Information about the parameter that you want to add to the system. Optional but
   *    recommended.</p>
   *          <important>
   *             <p>Don't enter personally identifiable information in this field.</p>
   *          </important>
   */
  Description?: string;

  /**
   * <p>The parameter value that you want to add to the system. Standard parameters have a value
   *    limit of 4 KB. Advanced parameters have a value limit of 8 KB.</p>
   *          <note>
   *             <p>Parameters can't be referenced or nested in the values of other parameters. You can't
   *     include <code>{{}}</code> or <code>{{ssm:<i>parameter-name</i>}}</code> in a
   *     parameter value.</p>
   *          </note>
   */
  Value: string | undefined;

  /**
   * <p>The type of parameter that you want to add to the system.</p>
   *          <note>
   *             <p>
   *                <code>SecureString</code> isn't currently supported for CloudFormation templates.</p>
   *          </note>
   *          <p>Items in a <code>StringList</code> must be separated by a comma (,). You can't
   *    use other punctuation or special character to escape items in the list. If you have a parameter
   *    value that requires a comma, then use the <code>String</code> data type.</p>
   *          <important>
   *             <p>Specifying a parameter type isn't required when updating a parameter. You must specify a
   *     parameter type when creating a parameter.</p>
   *          </important>
   */
  Type?: ParameterType | string;

  /**
   * <p>The Key Management Service (KMS) ID that you want to use to encrypt a
   *    parameter. Either the default KMS key automatically assigned to your Amazon Web Services account
   *    or a custom key. Required for parameters that use the <code>SecureString</code>
   *    data type.</p>
   *          <p>If you don't specify a key ID, the system uses the default key associated with your
   *    Amazon Web Services account.</p>
   *          <ul>
   *             <li>
   *                <p>To use your default KMS key, choose the <code>SecureString</code> data type, and do <i>not</i> specify the <code>Key ID</code> when you create the parameter. The system automatically populates
   *       <code>Key ID</code> with your default KMS key.</p>
   *             </li>
   *             <li>
   *                <p>To use a custom KMS key, choose the <code>SecureString</code>
   *      data type with the <code>Key ID</code> parameter.</p>
   *             </li>
   *          </ul>
   */
  KeyId?: string;

  /**
   * <p>Overwrite an existing parameter. The default value is <code>false</code>.</p>
   */
  Overwrite?: boolean;

  /**
   * <p>A regular expression used to validate the parameter value. For example, for String types
   *    with values restricted to numbers, you can specify the following: AllowedPattern=^\d+$ </p>
   */
  AllowedPattern?: string;

  /**
   * <p>Optional metadata that you assign to a resource. Tags enable you to categorize a resource in
   *    different ways, such as by purpose, owner, or environment. For example, you might want to tag a
   *    Systems Manager parameter to identify the type of resource to which it applies, the environment, or the
   *    type of configuration data referenced by the parameter. In this case, you could specify the
   *    following key-value pairs:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Key=Resource,Value=S3bucket</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Key=OS,Value=Windows</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Key=ParameterType,Value=LicenseKey</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>To add tags to an existing Systems Manager parameter, use the <a>AddTagsToResource</a>
   *     operation.</p>
   *          </note>
   */
  Tags?: Tag[];

  /**
   * <p>The parameter tier to assign to a parameter.</p>
   *          <p>Parameter Store offers a standard tier and an advanced tier for parameters. Standard
   *    parameters have a content size limit of 4 KB and can't be configured to use parameter policies.
   *    You can create a maximum of 10,000 standard parameters for each Region in an Amazon Web Services account.
   *    Standard parameters are offered at no additional cost. </p>
   *          <p>Advanced parameters have a content size limit of 8 KB and can be configured to use parameter
   *    policies. You can create a maximum of 100,000 advanced parameters for each Region in an
   *    Amazon Web Services account. Advanced parameters incur a charge. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-advanced-parameters.html">Standard and
   *     advanced parameter tiers</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   *          <p>You can change a standard parameter to an advanced parameter any time. But you can't revert
   *    an advanced parameter to a standard parameter. Reverting an advanced parameter to a standard
   *    parameter would result in data loss because the system would truncate the size of the parameter
   *    from 8 KB to 4 KB. Reverting would also remove any policies attached to the parameter. Lastly,
   *    advanced parameters use a different form of encryption than standard parameters. </p>
   *          <p>If you no longer need an advanced parameter, or if you no longer want to incur charges for
   *    an advanced parameter, you must delete it and recreate it as a new standard parameter. </p>
   *          <p>
   *             <b>Using the Default Tier Configuration</b>
   *          </p>
   *          <p>In <code>PutParameter</code> requests, you can specify the tier to create the parameter in.
   *    Whenever you specify a tier in the request, Parameter Store creates or updates the parameter
   *    according to that request. However, if you don't specify a tier in a request, Parameter Store
   *    assigns the tier based on the current Parameter Store default tier configuration.</p>
   *          <p>The default tier when you begin using Parameter Store is the standard-parameter tier. If you
   *    use the advanced-parameter tier, you can specify one of the following as the default:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Advanced</b>: With this option, Parameter Store evaluates all
   *      requests as advanced parameters. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Intelligent-Tiering</b>: With this option, Parameter Store
   *      evaluates each request to determine if the parameter is standard or advanced. </p>
   *                <p>If the request doesn't include any options that require an advanced parameter, the
   *      parameter is created in the standard-parameter tier. If one or more options requiring an
   *      advanced parameter are included in the request, Parameter Store create a parameter in the
   *      advanced-parameter tier.</p>
   *                <p>This approach helps control your parameter-related costs by always creating standard
   *      parameters unless an advanced parameter is necessary. </p>
   *             </li>
   *          </ul>
   *          <p>Options that require an advanced parameter include the following:</p>
   *          <ul>
   *             <li>
   *                <p>The content size of the parameter is more than 4 KB.</p>
   *             </li>
   *             <li>
   *                <p>The parameter uses a parameter policy.</p>
   *             </li>
   *             <li>
   *                <p>More than 10,000 parameters already exist in your Amazon Web Services account in the current
   *      Amazon Web Services Region.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about configuring the default tier option, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/ps-default-tier.html">Specifying a
   *     default parameter tier</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   */
  Tier?: ParameterTier | string;

  /**
   * <p>One or more policies to apply to a parameter. This operation takes a JSON array. Parameter
   *    Store, a capability of Amazon Web Services Systems Manager supports the following policy types:</p>
   *          <p>Expiration: This policy deletes the parameter after it expires. When you create the policy,
   *    you specify the expiration date. You can update the expiration date and time by updating the
   *    policy. Updating the <i>parameter</i> doesn't affect the expiration date and time.
   *    When the expiration time is reached, Parameter Store deletes the parameter.</p>
   *          <p>ExpirationNotification: This policy initiates an event in Amazon CloudWatch Events that
   *    notifies you about the expiration. By using this policy, you can receive notification before or
   *    after the expiration time is reached, in units of days or hours.</p>
   *          <p>NoChangeNotification: This policy initiates a CloudWatch Events event if a parameter hasn't
   *    been modified for a specified period of time. This policy type is useful when, for example, a
   *    secret needs to be changed within a period of time, but it hasn't been changed.</p>
   *          <p>All existing policies are preserved until you send new policies or an empty policy. For more
   *    information about parameter policies, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-policies.html">Assigning parameter
   *     policies</a>. </p>
   */
  Policies?: string;

  /**
   * <p>The data type for a <code>String</code> parameter. Supported data types include plain text
   *    and Amazon Machine Image (AMI) IDs.</p>
   *          <p>
   *             <b>The following data type values are supported.</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>text</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>aws:ec2:image</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>aws:ssm:integration</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>When you create a <code>String</code> parameter and specify <code>aws:ec2:image</code>,
   *    Amazon Web Services Systems Manager validates the parameter value is in the required format, such as
   *     <code>ami-12345abcdeEXAMPLE</code>, and that the specified AMI is available in your
   *    Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-ec2-aliases.html">Native parameter support
   *     for Amazon Machine Image (AMI) IDs</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   */
  DataType?: string;
}

export namespace PutParameterRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutParameterRequest): any => ({
    ...obj,
    ...(obj.Value && { Value: SENSITIVE_STRING }),
  });
}

export interface PutParameterResult {
  /**
   * <p>The new version number of a parameter. If you edit a parameter value, Parameter Store
   *    automatically creates a new version and assigns this new version a unique ID. You can reference a
   *    parameter version ID in API operations or in Systems Manager documents (SSM documents). By default, if you
   *    don't specify a specific version, the system returns the latest parameter value when a parameter
   *    is called.</p>
   */
  Version?: number;

  /**
   * <p>The tier assigned to the parameter.</p>
   */
  Tier?: ParameterTier | string;
}

export namespace PutParameterResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutParameterResult): any => ({
    ...obj,
  });
}

export interface RegisterDefaultPatchBaselineRequest {
  /**
   * <p>The ID of the patch baseline that should be the default patch baseline.</p>
   */
  BaselineId: string | undefined;
}

export namespace RegisterDefaultPatchBaselineRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterDefaultPatchBaselineRequest): any => ({
    ...obj,
  });
}

export interface RegisterDefaultPatchBaselineResult {
  /**
   * <p>The ID of the default patch baseline.</p>
   */
  BaselineId?: string;
}

export namespace RegisterDefaultPatchBaselineResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterDefaultPatchBaselineResult): any => ({
    ...obj,
  });
}

export interface RegisterPatchBaselineForPatchGroupRequest {
  /**
   * <p>The ID of the patch baseline to register with the patch group.</p>
   */
  BaselineId: string | undefined;

  /**
   * <p>The name of the patch group to be registered with the patch baseline.</p>
   */
  PatchGroup: string | undefined;
}

export namespace RegisterPatchBaselineForPatchGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterPatchBaselineForPatchGroupRequest): any => ({
    ...obj,
  });
}

export interface RegisterPatchBaselineForPatchGroupResult {
  /**
   * <p>The ID of the patch baseline the patch group was registered with.</p>
   */
  BaselineId?: string;

  /**
   * <p>The name of the patch group registered with the patch baseline.</p>
   */
  PatchGroup?: string;
}

export namespace RegisterPatchBaselineForPatchGroupResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterPatchBaselineForPatchGroupResult): any => ({
    ...obj,
  });
}

export interface RegisterTargetWithMaintenanceWindowRequest {
  /**
   * <p>The ID of the maintenance window the target should be registered with.</p>
   */
  WindowId: string | undefined;

  /**
   * <p>The type of target being registered with the maintenance window.</p>
   */
  ResourceType: MaintenanceWindowResourceType | string | undefined;

  /**
   * <p>The targets to register with the maintenance window. In other words, the managed nodes to
   *    run commands on when the maintenance window runs.</p>
   *          <note>
   *             <p>If a single maintenance window task is registered with multiple targets, its task
   *     invocations occur sequentially and not in parallel. If your task must run on multiple targets at
   *     the same time, register a task for each target individually and assign each task the same
   *     priority level.</p>
   *          </note>
   *          <p>You can specify targets using managed node IDs, resource group names, or tags that have been
   *    applied to managed nodes.</p>
   *          <p>
   *             <b>Example 1</b>: Specify managed node IDs</p>
   *          <p>
   *             <code>Key=InstanceIds,Values=<instance-id-1>,<instance-id-2>,<instance-id-3></code>
   *          </p>
   *          <p>
   *             <b>Example 2</b>: Use tag key-pairs applied to managed
   *    nodes</p>
   *          <p>
   *             <code>Key=tag:<my-tag-key>,Values=<my-tag-value-1>,<my-tag-value-2></code>
   *          </p>
   *          <p>
   *             <b>Example 3</b>: Use tag-keys applied to managed nodes</p>
   *          <p>
   *             <code>Key=tag-key,Values=<my-tag-key-1>,<my-tag-key-2></code>
   *          </p>
   *
   *          <p>
   *             <b>Example 4</b>: Use resource group names</p>
   *          <p>
   *             <code>Key=resource-groups:Name,Values=<resource-group-name></code>
   *          </p>
   *          <p>
   *             <b>Example 5</b>: Use filters for resource group types</p>
   *          <p>
   *             <code>Key=resource-groups:ResourceTypeFilters,Values=<resource-type-1>,<resource-type-2></code>
   *          </p>
   *          <note>
   *             <p>For <code>Key=resource-groups:ResourceTypeFilters</code>, specify resource types in the
   *     following format</p>
   *             <p>
   *                <code>Key=resource-groups:ResourceTypeFilters,Values=AWS::EC2::INSTANCE,AWS::EC2::VPC</code>
   *             </p>
   *          </note>
   *
   *          <p>For more information about these examples formats, including the best use case for each one,
   *    see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/mw-cli-tutorial-targets-examples.html">Examples: Register
   *     targets with a maintenance window</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   */
  Targets: Target[] | undefined;

  /**
   * <p>User-provided value that will be included in any Amazon CloudWatch Events events raised while
   *    running tasks for these targets in this maintenance window.</p>
   */
  OwnerInformation?: string;

  /**
   * <p>An optional name for the target.</p>
   */
  Name?: string;

  /**
   * <p>An optional description for the target.</p>
   */
  Description?: string;

  /**
   * <p>User-provided idempotency token.</p>
   */
  ClientToken?: string;
}

export namespace RegisterTargetWithMaintenanceWindowRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterTargetWithMaintenanceWindowRequest): any => ({
    ...obj,
    ...(obj.OwnerInformation && { OwnerInformation: SENSITIVE_STRING }),
    ...(obj.Description && { Description: SENSITIVE_STRING }),
  });
}

export interface RegisterTargetWithMaintenanceWindowResult {
  /**
   * <p>The ID of the target definition in this maintenance window.</p>
   */
  WindowTargetId?: string;
}

export namespace RegisterTargetWithMaintenanceWindowResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterTargetWithMaintenanceWindowResult): any => ({
    ...obj,
  });
}

export interface RegisterTaskWithMaintenanceWindowRequest {
  /**
   * <p>The ID of the maintenance window the task should be added to.</p>
   */
  WindowId: string | undefined;

  /**
   * <p>The targets (either managed nodes or maintenance window targets).</p>
   *          <note>
   *             <p>One or more targets must be specified for maintenance window Run Command-type tasks.
   *     Depending on the task, targets are optional for other maintenance window task types (Automation,
   *      Lambda, and Step Functions). For more information about running tasks
   *     that don't specify targets, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/maintenance-windows-targetless-tasks.html">Registering
   *      maintenance window tasks without targets</a> in the
   *     <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   *          </note>
   *          <p>Specify managed nodes using the following format: </p>
   *          <p>
   *             <code>Key=InstanceIds,Values=<instance-id-1>,<instance-id-2></code>
   *          </p>
   *          <p>Specify maintenance window targets using the following format:</p>
   *          <p>
   *             <code>Key=WindowTargetIds,Values=<window-target-id-1>,<window-target-id-2></code>
   *          </p>
   */
  Targets?: Target[];

  /**
   * <p>The ARN of the task to run.</p>
   */
  TaskArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM service role for Amazon Web Services Systems Manager to assume when running a
   *   maintenance window task. If you do not specify a service role ARN, Systems Manager uses your account's
   *   service-linked role.  If no service-linked role for Systems Manager exists in your account, it is created when you run
   *   <code>RegisterTaskWithMaintenanceWindow</code>.</p>
   *          <p>For more information, see the following topics in the in the <i>Amazon Web Services Systems Manager User Guide</i>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/using-service-linked-roles.html#slr-permissions">Using
   *     service-linked roles for Systems Manager</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-maintenance-permissions.html#maintenance-window-tasks-service-role">Should I use a service-linked role or a custom service role to run maintenance window tasks?
   *    </a>
   *                </p>
   *             </li>
   *          </ul>
   */
  ServiceRoleArn?: string;

  /**
   * <p>The type of task being registered.</p>
   */
  TaskType: MaintenanceWindowTaskType | string | undefined;

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
   * <p>The parameters that the task should use during execution. Populate only the fields that
   *    match the task type. All other fields should be empty. </p>
   */
  TaskInvocationParameters?: MaintenanceWindowTaskInvocationParameters;

  /**
   * <p>The priority of the task in the maintenance window, the lower the number the higher the
   *    priority. Tasks in a maintenance window are scheduled in priority order with tasks that have the
   *    same priority scheduled in parallel.</p>
   */
  Priority?: number;

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
   * <p>A structure containing information about an Amazon Simple Storage Service (Amazon S3) bucket
   *    to write managed node-level logs to. </p>
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
   * <p>An optional name for the task.</p>
   */
  Name?: string;

  /**
   * <p>An optional description for the task.</p>
   */
  Description?: string;

  /**
   * <p>User-provided idempotency token.</p>
   */
  ClientToken?: string;

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
   */
  CutoffBehavior?: MaintenanceWindowTaskCutoffBehavior | string;
}

export namespace RegisterTaskWithMaintenanceWindowRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterTaskWithMaintenanceWindowRequest): any => ({
    ...obj,
    ...(obj.TaskParameters && { TaskParameters: SENSITIVE_STRING }),
    ...(obj.TaskInvocationParameters && {
      TaskInvocationParameters: MaintenanceWindowTaskInvocationParameters.filterSensitiveLog(
        obj.TaskInvocationParameters
      ),
    }),
    ...(obj.Description && { Description: SENSITIVE_STRING }),
  });
}

export interface RegisterTaskWithMaintenanceWindowResult {
  /**
   * <p>The ID of the task in the maintenance window.</p>
   */
  WindowTaskId?: string;
}

export namespace RegisterTaskWithMaintenanceWindowResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterTaskWithMaintenanceWindowResult): any => ({
    ...obj,
  });
}

export interface RemoveTagsFromResourceRequest {
  /**
   * <p>The type of resource from which you want to remove a tag.</p>
   *          <note>
   *             <p>The <code>ManagedInstance</code> type for this API operation is only for on-premises
   *     managed nodes. Specify the name of the managed node in the following format:
   *       <code>mi-<i>ID_number</i>
   *                </code>. For example,
   *     <code>mi-1a2b3c4d5e6f</code>.</p>
   *          </note>
   */
  ResourceType: ResourceTypeForTagging | string | undefined;

  /**
   * <p>The ID of the resource from which you want to remove tags. For example:</p>
   *          <p>ManagedInstance: mi-012345abcde</p>
   *          <p>MaintenanceWindow: mw-012345abcde</p>
   *          <p>
   *             <code>Automation</code>: <code>example-c160-4567-8519-012345abcde</code>
   *          </p>
   *          <p>PatchBaseline: pb-012345abcde</p>
   *          <p>OpsMetadata object: <code>ResourceID</code> for tagging is created from the Amazon Resource
   *    Name (ARN) for the object. Specifically, <code>ResourceID</code> is created from the strings that
   *    come after the word <code>opsmetadata</code> in the ARN. For example, an OpsMetadata object with
   *    an ARN of <code>arn:aws:ssm:us-east-2:1234567890:opsmetadata/aws/ssm/MyGroup/appmanager</code>
   *    has a <code>ResourceID</code> of either <code>aws/ssm/MyGroup/appmanager</code> or
   *     <code>/aws/ssm/MyGroup/appmanager</code>.</p>
   *          <p>For the Document and Parameter values, use the name of the resource.</p>
   *          <note>
   *             <p>The <code>ManagedInstance</code> type for this API operation is only for on-premises
   *     managed nodes. Specify the name of the managed node in the following format: mi-ID_number. For
   *     example, mi-1a2b3c4d5e6f.</p>
   *          </note>
   */
  ResourceId: string | undefined;

  /**
   * <p>Tag keys that you want to remove from the specified resource.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace RemoveTagsFromResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemoveTagsFromResourceRequest): any => ({
    ...obj,
  });
}

export interface RemoveTagsFromResourceResult {}

export namespace RemoveTagsFromResourceResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemoveTagsFromResourceResult): any => ({
    ...obj,
  });
}

/**
 * <p>The request body of the ResetServiceSetting API operation.</p>
 */
export interface ResetServiceSettingRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the service setting to reset. The setting ID can be one of
   *    the following.</p>
   *          <ul>
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
   *                <p>
   *                   <code>/ssm/documents/console/public-sharing-permission</code>
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
   *             <li>
   *                <p>
   *                   <code>/ssm/managed-instance/activation-tier</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  SettingId: string | undefined;
}

export namespace ResetServiceSettingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResetServiceSettingRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The result body of the ResetServiceSetting API operation.</p>
 */
export interface ResetServiceSettingResult {
  /**
   * <p>The current, effective service setting after calling the ResetServiceSetting API
   *    operation.</p>
   */
  ServiceSetting?: ServiceSetting;
}

export namespace ResetServiceSettingResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResetServiceSettingResult): any => ({
    ...obj,
  });
}

export interface ResumeSessionRequest {
  /**
   * <p>The ID of the disconnected session to resume.</p>
   */
  SessionId: string | undefined;
}

export namespace ResumeSessionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResumeSessionRequest): any => ({
    ...obj,
  });
}

export interface ResumeSessionResponse {
  /**
   * <p>The ID of the session.</p>
   */
  SessionId?: string;

  /**
   * <p>An encrypted token value containing session and caller information. Used to authenticate the
   *    connection to the managed node.</p>
   */
  TokenValue?: string;

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
   */
  StreamUrl?: string;
}

export namespace ResumeSessionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResumeSessionResponse): any => ({
    ...obj,
  });
}

export interface SendAutomationSignalRequest {
  /**
   * <p>The unique identifier for an existing Automation execution that you want to send the signal
   *    to.</p>
   */
  AutomationExecutionId: string | undefined;

  /**
   * <p>The type of signal to send to an Automation execution. </p>
   */
  SignalType: SignalType | string | undefined;

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
   */
  Payload?: Record<string, string[]>;
}

export namespace SendAutomationSignalRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SendAutomationSignalRequest): any => ({
    ...obj,
  });
}

export interface SendAutomationSignalResult {}

export namespace SendAutomationSignalResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SendAutomationSignalResult): any => ({
    ...obj,
  });
}

export interface SendCommandRequest {
  /**
   * <p>The IDs of the managed nodes where the command should run. Specifying managed node IDs is
   *    most useful when you are targeting a limited number of managed nodes, though you can specify up
   *    to 50 IDs.</p>
   *          <p>To target a larger number of managed nodes, or if you prefer not to list individual node
   *    IDs, we recommend using the <code>Targets</code> option instead. Using <code>Targets</code>,
   *    which accepts tag key-value pairs to identify the managed nodes to send commands to, you can a
   *    send command to tens, hundreds, or thousands of nodes at once.</p>
   *          <p>For more information about how to use targets, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/send-commands-multiple.html">Using targets and rate
   *     controls to send commands to a fleet</a> in the
   *    <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   */
  InstanceIds?: string[];

  /**
   * <p>An array of search criteria that targets managed nodes using a <code>Key,Value</code>
   *    combination that you specify. Specifying targets is most useful when you want to send a command
   *    to a large number of managed nodes at once. Using <code>Targets</code>, which accepts tag
   *    key-value pairs to identify managed nodes, you can send a command to tens, hundreds, or thousands
   *    of nodes at once.</p>
   *          <p>To send a command to a smaller number of managed nodes, you can use the
   *     <code>InstanceIds</code> option instead.</p>
   *          <p>For more information about how to use targets, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/send-commands-multiple.html">Sending commands to a
   *     fleet</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   */
  Targets?: Target[];

  /**
   * <p>The name of the Amazon Web Services Systems Manager document (SSM document) to run. This can be a public document or a
   *    custom document. To run a shared document belonging to another account, specify the document
   *    Amazon Resource Name (ARN). For more information about how to use shared documents, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/ssm-using-shared.html">Using shared
   *     SSM documents</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   *          <note>
   *             <p>If you specify a document name or ARN that hasn't been shared with your account, you
   *     receive an <code>InvalidDocument</code> error. </p>
   *          </note>
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
   */
  DocumentVersion?: string;

  /**
   * <p>The Sha256 or Sha1 hash created by the system when the document was created. </p>
   *          <note>
   *             <p>Sha1 hashes have been deprecated.</p>
   *          </note>
   */
  DocumentHash?: string;

  /**
   * <p>Sha256 or Sha1.</p>
   *          <note>
   *             <p>Sha1 hashes have been deprecated.</p>
   *          </note>
   */
  DocumentHashType?: DocumentHashType | string;

  /**
   * <p>If this time is reached and the command hasn't already started running, it won't run.</p>
   */
  TimeoutSeconds?: number;

  /**
   * <p>User-specified information about the command, such as a brief description of what the
   *    command should do.</p>
   */
  Comment?: string;

  /**
   * <p>The required and optional parameters specified in the document being run.</p>
   */
  Parameters?: Record<string, string[]>;

  /**
   * <p>(Deprecated) You can no longer specify this parameter. The system ignores it. Instead, Systems Manager
   *    automatically determines the Amazon Web Services Region of the S3 bucket.</p>
   */
  OutputS3Region?: string;

  /**
   * <p>The name of the S3 bucket where command execution responses should be stored.</p>
   */
  OutputS3BucketName?: string;

  /**
   * <p>The directory structure within the S3 bucket where the responses should be stored.</p>
   */
  OutputS3KeyPrefix?: string;

  /**
   * <p>(Optional) The maximum number of managed nodes that are allowed to run the command at the
   *    same time. You can specify a number such as 10 or a percentage such as 10%. The default value is
   *     <code>50</code>. For more information about how to use <code>MaxConcurrency</code>, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/send-commands-multiple.html#send-commands-velocity">Using
   *     concurrency controls</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   */
  MaxConcurrency?: string;

  /**
   * <p>The maximum number of errors allowed without the command failing. When the command fails one
   *    more time beyond the value of <code>MaxErrors</code>, the systems stops sending the command to
   *    additional targets. You can specify a number like 10 or a percentage like 10%. The default value
   *    is <code>0</code>. For more information about how to use <code>MaxErrors</code>, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/send-commands-multiple.html#send-commands-maxerrors">Using
   *     error controls</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   */
  MaxErrors?: string;

  /**
   * <p>The ARN of the Identity and Access Management (IAM) service role to use to publish
   *     Amazon Simple Notification Service (Amazon SNS) notifications for Run Command commands.</p>
   */
  ServiceRoleArn?: string;

  /**
   * <p>Configurations for sending notifications.</p>
   */
  NotificationConfig?: NotificationConfig;

  /**
   * <p>Enables Amazon Web Services Systems Manager to send Run Command output to Amazon CloudWatch Logs. Run Command is a
   *    capability of Amazon Web Services Systems Manager.</p>
   */
  CloudWatchOutputConfig?: CloudWatchOutputConfig;
}

export namespace SendCommandRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SendCommandRequest): any => ({
    ...obj,
    ...(obj.Parameters && { Parameters: SENSITIVE_STRING }),
  });
}

export interface SendCommandResult {
  /**
   * <p>The request as it was received by Systems Manager. Also provides the command ID which can be used
   *    future references to this request.</p>
   */
  Command?: Command;
}

export namespace SendCommandResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SendCommandResult): any => ({
    ...obj,
    ...(obj.Command && { Command: Command.filterSensitiveLog(obj.Command) }),
  });
}

export interface StartAssociationsOnceRequest {
  /**
   * <p>The association IDs that you want to run immediately and only one time.</p>
   */
  AssociationIds: string[] | undefined;
}

export namespace StartAssociationsOnceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartAssociationsOnceRequest): any => ({
    ...obj,
  });
}

export interface StartAssociationsOnceResult {}

export namespace StartAssociationsOnceResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartAssociationsOnceResult): any => ({
    ...obj,
  });
}

export interface StartAutomationExecutionRequest {
  /**
   * <p>The name of the SSM document to run. This can be a public document or a custom document. To
   *    run a shared document belonging to another account, specify the document ARN. For more
   *    information about how to use shared documents, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/ssm-using-shared.html">Using shared SSM documents</a>
   *    in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   */
  DocumentName: string | undefined;

  /**
   * <p>The version of the Automation runbook to use for this execution.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>A key-value map of execution parameters, which match the declared parameters in the
   *    Automation runbook.</p>
   */
  Parameters?: Record<string, string[]>;

  /**
   * <p>User-provided idempotency token. The token must be unique, is case insensitive, enforces the
   *    UUID format, and can't be reused.</p>
   */
  ClientToken?: string;

  /**
   * <p>The execution mode of the automation. Valid modes include the following: Auto and
   *    Interactive. The default mode is Auto.</p>
   */
  Mode?: ExecutionMode | string;

  /**
   * <p>The name of the parameter used as the target resource for the rate-controlled execution.
   *    Required if you specify targets.</p>
   */
  TargetParameterName?: string;

  /**
   * <p>A key-value mapping to target resources. Required if you specify TargetParameterName.</p>
   */
  Targets?: Target[];

  /**
   * <p>A key-value mapping of document parameters to target resources. Both Targets and TargetMaps
   *    can't be specified together.</p>
   */
  TargetMaps?: Record<string, string[]>[];

  /**
   * <p>The maximum number of targets allowed to run this task in parallel. You can specify a
   *    number, such as 10, or a percentage, such as 10%. The default value is <code>10</code>.</p>
   */
  MaxConcurrency?: string;

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
   */
  MaxErrors?: string;

  /**
   * <p>A location is a combination of Amazon Web Services Regions and/or Amazon Web Services accounts where you want to run the
   *    automation. Use this operation to start an automation in multiple Amazon Web Services Regions and multiple
   *    Amazon Web Services accounts. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-automation-multiple-accounts-and-regions.html">Running Automation workflows in multiple Amazon Web Services Regions and Amazon Web Services accounts</a> in the
   *     <i>Amazon Web Services Systems Manager User Guide</i>. </p>
   */
  TargetLocations?: TargetLocation[];

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
   *             <p>To add tags to an existing automation, use the <a>AddTagsToResource</a>
   *     operation.</p>
   *          </note>
   */
  Tags?: Tag[];
}

export namespace StartAutomationExecutionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartAutomationExecutionRequest): any => ({
    ...obj,
  });
}

export interface StartAutomationExecutionResult {
  /**
   * <p>The unique ID of a newly scheduled automation execution.</p>
   */
  AutomationExecutionId?: string;
}

export namespace StartAutomationExecutionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartAutomationExecutionResult): any => ({
    ...obj,
  });
}

export interface StartChangeRequestExecutionRequest {
  /**
   * <p>The date and time specified in the change request to run the Automation runbooks.</p>
   *          <note>
   *             <p>The Automation runbooks specified for the runbook workflow can't run until all required
   *     approvals for the change request have been received.</p>
   *          </note>
   */
  ScheduledTime?: Date;

  /**
   * <p>The name of the change template document to run during the runbook workflow.</p>
   */
  DocumentName: string | undefined;

  /**
   * <p>The version of the change template document to run during the runbook workflow.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>A key-value map of parameters that match the declared parameters in the change template
   *    document.</p>
   */
  Parameters?: Record<string, string[]>;

  /**
   * <p>The name of the change request associated with the runbook workflow to be run.</p>
   */
  ChangeRequestName?: string;

  /**
   * <p>The user-provided idempotency token. The token must be unique, is case insensitive, enforces
   *    the UUID format, and can't be reused.</p>
   */
  ClientToken?: string;

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
   */
  AutoApprove?: boolean;

  /**
   * <p>Information about the Automation runbooks that are run during the runbook workflow.</p>
   *          <note>
   *             <p>The Automation runbooks specified for the runbook workflow can't run until all required
   *     approvals for the change request have been received.</p>
   *          </note>
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
   */
  Tags?: Tag[];

  /**
   * <p>The time that the requester expects the runbook workflow related to the change request to
   *    complete. The time is an estimate only that the requester provides for reviewers.</p>
   */
  ScheduledEndTime?: Date;

  /**
   * <p>User-provided details about the change. If no details are provided, content specified in the
   *     <b>Template information</b> section of the associated change template
   *    is added.</p>
   */
  ChangeDetails?: string;
}

export namespace StartChangeRequestExecutionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartChangeRequestExecutionRequest): any => ({
    ...obj,
  });
}

export interface StartChangeRequestExecutionResult {
  /**
   * <p>The unique ID of a runbook workflow operation. (A runbook workflow is a type of Automation
   *    operation.) </p>
   */
  AutomationExecutionId?: string;
}

export namespace StartChangeRequestExecutionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartChangeRequestExecutionResult): any => ({
    ...obj,
  });
}

export interface StartSessionRequest {
  /**
   * <p>The managed node to connect to for the session.</p>
   */
  Target: string | undefined;

  /**
   * <p>The name of the SSM document to define the parameters and plugin settings for the session.
   *    For example, <code>SSM-SessionManagerRunShell</code>. You can call the <a>GetDocument</a> API to verify the document exists before attempting to start a session.
   *    If no document name is provided, a shell to the managed node is launched by default.</p>
   */
  DocumentName?: string;

  /**
   * <p>The reason for connecting to the instance. This value is included in the details for the
   *     Amazon CloudWatch Events event created when you start the session.</p>
   */
  Reason?: string;

  /**
   * <p>The values you want to specify for the parameters defined in the Session
   *    document.</p>
   */
  Parameters?: Record<string, string[]>;
}

export namespace StartSessionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartSessionRequest): any => ({
    ...obj,
  });
}

export interface StartSessionResponse {
  /**
   * <p>The ID of the session.</p>
   */
  SessionId?: string;

  /**
   * <p>An encrypted token value containing session and caller information. Used to authenticate the
   *    connection to the managed node.</p>
   */
  TokenValue?: string;

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
   */
  StreamUrl?: string;
}

export namespace StartSessionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartSessionResponse): any => ({
    ...obj,
  });
}

export interface StopAutomationExecutionRequest {
  /**
   * <p>The execution ID of the Automation to stop.</p>
   */
  AutomationExecutionId: string | undefined;

  /**
   * <p>The stop request type. Valid types include the following: Cancel and Complete. The default
   *    type is Cancel.</p>
   */
  Type?: StopType | string;
}

export namespace StopAutomationExecutionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopAutomationExecutionRequest): any => ({
    ...obj,
  });
}

export interface StopAutomationExecutionResult {}

export namespace StopAutomationExecutionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopAutomationExecutionResult): any => ({
    ...obj,
  });
}

export interface TerminateSessionRequest {
  /**
   * <p>The ID of the session to terminate.</p>
   */
  SessionId: string | undefined;
}

export namespace TerminateSessionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TerminateSessionRequest): any => ({
    ...obj,
  });
}

export interface TerminateSessionResponse {
  /**
   * <p>The ID of the session that has been terminated.</p>
   */
  SessionId?: string;
}

export namespace TerminateSessionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TerminateSessionResponse): any => ({
    ...obj,
  });
}

export interface UnlabelParameterVersionRequest {
  /**
   * <p>The name of the parameter from which you want to delete one or more labels.</p>
   */
  Name: string | undefined;

  /**
   * <p>The specific version of the parameter which you want to delete one or more labels from. If
   *    it isn't present, the call will fail.</p>
   */
  ParameterVersion: number | undefined;

  /**
   * <p>One or more labels to delete from the specified parameter version.</p>
   */
  Labels: string[] | undefined;
}

export namespace UnlabelParameterVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnlabelParameterVersionRequest): any => ({
    ...obj,
  });
}

export interface UnlabelParameterVersionResult {
  /**
   * <p>A list of all labels deleted from the parameter.</p>
   */
  RemovedLabels?: string[];

  /**
   * <p>The labels that aren't attached to the given parameter version.</p>
   */
  InvalidLabels?: string[];
}

export namespace UnlabelParameterVersionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnlabelParameterVersionResult): any => ({
    ...obj,
  });
}

export interface UpdateAssociationRequest {
  /**
   * <p>The ID of the association you want to update. </p>
   */
  AssociationId: string | undefined;

  /**
   * <p>The parameters you want to update for the association. If you create a parameter using
   *    Parameter Store, a capability of Amazon Web Services Systems Manager, you can reference the parameter using
   *     <code>{{ssm:parameter-name}}</code>.</p>
   */
  Parameters?: Record<string, string[]>;

  /**
   * <p>The document version you want update for the association. </p>
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
   * <p>The cron expression used to schedule the association that you want to update.</p>
   */
  ScheduleExpression?: string;

  /**
   * <p>An S3 bucket where you want to store the results of this request.</p>
   */
  OutputLocation?: InstanceAssociationOutputLocation;

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
   */
  Name?: string;

  /**
   * <p>The targets of the association.</p>
   */
  Targets?: Target[];

  /**
   * <p>The name of the association that you want to update.</p>
   */
  AssociationName?: string;

  /**
   * <p>This parameter is provided for concurrency control purposes. You must specify the latest
   *    association version in the service. If you want to ensure that this request succeeds, either
   *    specify <code>$LATEST</code>, or omit this parameter.</p>
   */
  AssociationVersion?: string;

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
   *    managed by State Manager, a capability of Amazon Web Services Systems Manager. It is managed by your direct call to the
   *     <a>PutComplianceItems</a> API operation.</p>
   *          <p>By default, all associations use <code>AUTO</code> mode.</p>
   */
  SyncCompliance?: AssociationSyncCompliance | string;

  /**
   * <p>By default, when you update an association, the system runs it immediately after it is
   *    updated and then according to the schedule you specified. Specify this option if you don't want
   *    an association to run immediately after you update it. This parameter isn't supported for rate
   *    expressions.</p>
   *
   *          <p>If you chose this option when you created an association and later you edit that association
   *    or you make changes to the SSM document on which that association is based (by using the
   *    Documents page in the console), State Manager applies the association at the next specified cron
   *    interval. For example, if you chose the <code>Latest</code> version of an SSM document when you
   *    created an association and you edit the association by choosing a different document version on
   *    the Documents page, State Manager applies the association at the next specified cron interval if
   *    you previously selected this option. If this option wasn't selected, State Manager immediately
   *    runs the association.</p>
   *          <p>You can reset this option. To do so, specify the <code>no-apply-only-at-cron-interval</code>
   *    parameter when you update the association from the command line. This parameter forces the
   *    association to run immediately after updating it and according to the interval specified.</p>
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
   *    association. Use this action to update an association in multiple Regions and multiple
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
}

export namespace UpdateAssociationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAssociationRequest): any => ({
    ...obj,
    ...(obj.Parameters && { Parameters: SENSITIVE_STRING }),
  });
}

export interface UpdateAssociationResult {
  /**
   * <p>The description of the association that was updated.</p>
   */
  AssociationDescription?: AssociationDescription;
}

export namespace UpdateAssociationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAssociationResult): any => ({
    ...obj,
    ...(obj.AssociationDescription && {
      AssociationDescription: AssociationDescription.filterSensitiveLog(obj.AssociationDescription),
    }),
  });
}

export interface UpdateAssociationStatusRequest {
  /**
   * <p>The name of the SSM document.</p>
   */
  Name: string | undefined;

  /**
   * <p>The managed node ID.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The association status.</p>
   */
  AssociationStatus: AssociationStatus | undefined;
}

export namespace UpdateAssociationStatusRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAssociationStatusRequest): any => ({
    ...obj,
  });
}

export interface UpdateAssociationStatusResult {
  /**
   * <p>Information about the association.</p>
   */
  AssociationDescription?: AssociationDescription;
}

export namespace UpdateAssociationStatusResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAssociationStatusResult): any => ({
    ...obj,
    ...(obj.AssociationDescription && {
      AssociationDescription: AssociationDescription.filterSensitiveLog(obj.AssociationDescription),
    }),
  });
}

export interface UpdateDocumentRequest {
  /**
   * <p>A valid JSON or YAML string.</p>
   */
  Content: string | undefined;

  /**
   * <p>A list of key-value pairs that describe attachments to a version of a document.</p>
   */
  Attachments?: AttachmentsSource[];

  /**
   * <p>The name of the SSM document that you want to update.</p>
   */
  Name: string | undefined;

  /**
   * <p>The friendly name of the SSM document that you want to update. This value can differ for
   *    each version of the document. If you don't specify a value for this parameter in your request,
   *    the existing value is applied to the new document version.</p>
   */
  DisplayName?: string;

  /**
   * <p>An optional field specifying the version of the artifact you are updating with the document.
   *    For example, "Release 12, Update 6". This value is unique across all versions of a document, and
   *    can't be changed.</p>
   */
  VersionName?: string;

  /**
   * <p>The version of the document that you want to update. Currently, Systems Manager supports updating only
   *    the latest version of the document. You can specify the version number of the latest version or
   *    use the <code>$LATEST</code> variable.</p>
   *          <note>
   *             <p>If you change a document version for a State Manager association, Systems Manager immediately runs
   *     the association unless you previously specifed the <code>apply-only-at-cron-interval</code>
   *     parameter.</p>
   *          </note>
   */
  DocumentVersion?: string;

  /**
   * <p>Specify the document format for the new document version. Systems Manager supports JSON and YAML
   *    documents. JSON is the default format.</p>
   */
  DocumentFormat?: DocumentFormat | string;

  /**
   * <p>Specify a new target type for the document.</p>
   */
  TargetType?: string;
}

export namespace UpdateDocumentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDocumentRequest): any => ({
    ...obj,
  });
}

export interface UpdateDocumentResult {
  /**
   * <p>A description of the document that was updated.</p>
   */
  DocumentDescription?: DocumentDescription;
}

export namespace UpdateDocumentResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDocumentResult): any => ({
    ...obj,
  });
}

export interface UpdateDocumentDefaultVersionRequest {
  /**
   * <p>The name of a custom document that you want to set as the default version.</p>
   */
  Name: string | undefined;

  /**
   * <p>The version of a custom document that you want to set as the default version.</p>
   */
  DocumentVersion: string | undefined;
}

export namespace UpdateDocumentDefaultVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDocumentDefaultVersionRequest): any => ({
    ...obj,
  });
}

export interface UpdateDocumentDefaultVersionResult {
  /**
   * <p>The description of a custom document that you want to set as the default version.</p>
   */
  Description?: DocumentDefaultVersionDescription;
}

export namespace UpdateDocumentDefaultVersionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDocumentDefaultVersionResult): any => ({
    ...obj,
  });
}

export interface UpdateDocumentMetadataRequest {
  /**
   * <p>The name of the change template for which a version's metadata is to be updated.</p>
   */
  Name: string | undefined;

  /**
   * <p>The version of a change template in which to update approval metadata.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>The change template review details to update.</p>
   */
  DocumentReviews: DocumentReviews | undefined;
}

export namespace UpdateDocumentMetadataRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDocumentMetadataRequest): any => ({
    ...obj,
  });
}

export interface UpdateDocumentMetadataResponse {}

export namespace UpdateDocumentMetadataResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDocumentMetadataResponse): any => ({
    ...obj,
  });
}

export interface UpdateMaintenanceWindowRequest {
  /**
   * <p>The ID of the maintenance window to update.</p>
   */
  WindowId: string | undefined;

  /**
   * <p>The name of the maintenance window.</p>
   */
  Name?: string;

  /**
   * <p>An optional description for the update request.</p>
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
  Schedule?: string;

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
   *          <p>For example, the following cron expression schedules a maintenance window to run the third
   *    Tuesday of every month at 11:30 PM.</p>
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
  Duration?: number;

  /**
   * <p>The number of hours before the end of the maintenance window that Amazon Web Services Systems Manager stops scheduling
   *    new tasks for execution.</p>
   */
  Cutoff?: number;

  /**
   * <p>Whether targets must be registered with the maintenance window before tasks can be defined
   *    for those targets.</p>
   */
  AllowUnassociatedTargets?: boolean;

  /**
   * <p>Whether the maintenance window is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>If <code>True</code>, then all fields that are required by the <a>CreateMaintenanceWindow</a> operation are also required for this API request. Optional
   *    fields that aren't specified are set to null. </p>
   */
  Replace?: boolean;
}

export namespace UpdateMaintenanceWindowRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateMaintenanceWindowRequest): any => ({
    ...obj,
    ...(obj.Description && { Description: SENSITIVE_STRING }),
  });
}

export interface UpdateMaintenanceWindowResult {
  /**
   * <p>The ID of the created maintenance window.</p>
   */
  WindowId?: string;

  /**
   * <p>The name of the maintenance window.</p>
   */
  Name?: string;

  /**
   * <p>An optional description of the update.</p>
   */
  Description?: string;

  /**
   * <p>The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled
   *    to become active. The maintenance window won't run before this specified time.</p>
   */
  StartDate?: string;

  /**
   * <p>The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled
   *    to become inactive. The maintenance window won't run after this specified time.</p>
   */
  EndDate?: string;

  /**
   * <p>The schedule of the maintenance window in the form of a cron or rate expression.</p>
   */
  Schedule?: string;

  /**
   * <p>The time zone that the scheduled maintenance window executions are based on, in Internet
   *    Assigned Numbers Authority (IANA) format. For example: "America/Los_Angeles", "UTC", or
   *    "Asia/Seoul". For more information, see the <a href="https://www.iana.org/time-zones">Time
   *     Zone Database</a> on the IANA website.</p>
   */
  ScheduleTimezone?: string;

  /**
   * <p>The number of days to wait to run a maintenance window after the scheduled cron expression
   *    date and time.</p>
   */
  ScheduleOffset?: number;

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
   * <p>Whether targets must be registered with the maintenance window before tasks can be defined
   *    for those targets.</p>
   */
  AllowUnassociatedTargets?: boolean;

  /**
   * <p>Whether the maintenance window is enabled.</p>
   */
  Enabled?: boolean;
}

export namespace UpdateMaintenanceWindowResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateMaintenanceWindowResult): any => ({
    ...obj,
    ...(obj.Description && { Description: SENSITIVE_STRING }),
  });
}

export interface UpdateMaintenanceWindowTargetRequest {
  /**
   * <p>The maintenance window ID with which to modify the target.</p>
   */
  WindowId: string | undefined;

  /**
   * <p>The target ID to modify.</p>
   */
  WindowTargetId: string | undefined;

  /**
   * <p>The targets to add or replace.</p>
   */
  Targets?: Target[];

  /**
   * <p>User-provided value that will be included in any Amazon CloudWatch Events events raised while
   *    running tasks for these targets in this maintenance window.</p>
   */
  OwnerInformation?: string;

  /**
   * <p>A name for the update.</p>
   */
  Name?: string;

  /**
   * <p>An optional description for the update.</p>
   */
  Description?: string;

  /**
   * <p>If <code>True</code>, then all fields that are required by the <a>RegisterTargetWithMaintenanceWindow</a> operation are also required for this API
   *    request. Optional fields that aren't specified are set to null.</p>
   */
  Replace?: boolean;
}

export namespace UpdateMaintenanceWindowTargetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateMaintenanceWindowTargetRequest): any => ({
    ...obj,
    ...(obj.OwnerInformation && { OwnerInformation: SENSITIVE_STRING }),
    ...(obj.Description && { Description: SENSITIVE_STRING }),
  });
}

export interface UpdateMaintenanceWindowTargetResult {
  /**
   * <p>The maintenance window ID specified in the update request.</p>
   */
  WindowId?: string;

  /**
   * <p>The target ID specified in the update request.</p>
   */
  WindowTargetId?: string;

  /**
   * <p>The updated targets.</p>
   */
  Targets?: Target[];

  /**
   * <p>The updated owner.</p>
   */
  OwnerInformation?: string;

  /**
   * <p>The updated name.</p>
   */
  Name?: string;

  /**
   * <p>The updated description.</p>
   */
  Description?: string;
}

export namespace UpdateMaintenanceWindowTargetResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateMaintenanceWindowTargetResult): any => ({
    ...obj,
    ...(obj.OwnerInformation && { OwnerInformation: SENSITIVE_STRING }),
    ...(obj.Description && { Description: SENSITIVE_STRING }),
  });
}

export interface UpdateMaintenanceWindowTaskRequest {
  /**
   * <p>The maintenance window ID that contains the task to modify.</p>
   */
  WindowId: string | undefined;

  /**
   * <p>The task ID to modify.</p>
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
   */
  Targets?: Target[];

  /**
   * <p>The task ARN to modify.</p>
   */
  TaskArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM service role for Amazon Web Services Systems Manager to assume when running a
   *   maintenance window task. If you do not specify a service role ARN, Systems Manager uses your account's
   *   service-linked role.  If no service-linked role for Systems Manager exists in your account, it is created when you run
   *   <code>RegisterTaskWithMaintenanceWindow</code>.</p>
   *          <p>For more information, see the following topics in the in the <i>Amazon Web Services Systems Manager User Guide</i>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/using-service-linked-roles.html#slr-permissions">Using
   *     service-linked roles for Systems Manager</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-maintenance-permissions.html#maintenance-window-tasks-service-role">Should I use a service-linked role or a custom service role to run maintenance window tasks?
   *    </a>
   *                </p>
   *             </li>
   *          </ul>
   */
  ServiceRoleArn?: string;

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
   */
  TaskParameters?: Record<string, MaintenanceWindowTaskParameterValueExpression>;

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
   */
  TaskInvocationParameters?: MaintenanceWindowTaskInvocationParameters;

  /**
   * <p>The new task priority to specify. The lower the number, the higher the priority. Tasks that
   *    have the same priority are scheduled in parallel.</p>
   */
  Priority?: number;

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
   */
  MaxConcurrency?: string;

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
   */
  MaxErrors?: string;

  /**
   * <p>The new logging location in Amazon S3 to specify.</p>
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
   * <p>The new task name to specify.</p>
   */
  Name?: string;

  /**
   * <p>The new task description to specify.</p>
   */
  Description?: string;

  /**
   * <p>If True, then all fields that are required by the <a>RegisterTaskWithMaintenanceWindow</a> operation are also required for this API request.
   *    Optional fields that aren't specified are set to null.</p>
   */
  Replace?: boolean;

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
   */
  CutoffBehavior?: MaintenanceWindowTaskCutoffBehavior | string;
}

export namespace UpdateMaintenanceWindowTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateMaintenanceWindowTaskRequest): any => ({
    ...obj,
    ...(obj.TaskParameters && { TaskParameters: SENSITIVE_STRING }),
    ...(obj.TaskInvocationParameters && {
      TaskInvocationParameters: MaintenanceWindowTaskInvocationParameters.filterSensitiveLog(
        obj.TaskInvocationParameters
      ),
    }),
    ...(obj.Description && { Description: SENSITIVE_STRING }),
  });
}

export interface UpdateMaintenanceWindowTaskResult {
  /**
   * <p>The ID of the maintenance window that was updated.</p>
   */
  WindowId?: string;

  /**
   * <p>The task ID of the maintenance window that was updated.</p>
   */
  WindowTaskId?: string;

  /**
   * <p>The updated target values.</p>
   */
  Targets?: Target[];

  /**
   * <p>The updated task ARN value.</p>
   */
  TaskArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) service role to use to publish Amazon Simple Notification Service
   * (Amazon SNS) notifications for maintenance window Run Command tasks.</p>
   */
  ServiceRoleArn?: string;

  /**
   * <p>The updated parameter values.</p>
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
   * <p>The updated parameter values.</p>
   */
  TaskInvocationParameters?: MaintenanceWindowTaskInvocationParameters;

  /**
   * <p>The updated priority value.</p>
   */
  Priority?: number;

  /**
   * <p>The updated <code>MaxConcurrency</code> value.</p>
   */
  MaxConcurrency?: string;

  /**
   * <p>The updated <code>MaxErrors</code> value.</p>
   */
  MaxErrors?: string;

  /**
   * <p>The updated logging information in Amazon S3.</p>
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
   * <p>The updated task name.</p>
   */
  Name?: string;

  /**
   * <p>The updated task description.</p>
   */
  Description?: string;

  /**
   * <p>The specification for whether tasks should continue to run after the cutoff time specified
   *    in the maintenance windows is reached. </p>
   */
  CutoffBehavior?: MaintenanceWindowTaskCutoffBehavior | string;
}

export namespace UpdateMaintenanceWindowTaskResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateMaintenanceWindowTaskResult): any => ({
    ...obj,
    ...(obj.TaskParameters && { TaskParameters: SENSITIVE_STRING }),
    ...(obj.TaskInvocationParameters && {
      TaskInvocationParameters: MaintenanceWindowTaskInvocationParameters.filterSensitiveLog(
        obj.TaskInvocationParameters
      ),
    }),
    ...(obj.Description && { Description: SENSITIVE_STRING }),
  });
}

export interface UpdateManagedInstanceRoleRequest {
  /**
   * <p>The ID of the managed node where you want to update the role.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The IAM role you want to assign or change.</p>
   */
  IamRole: string | undefined;
}

export namespace UpdateManagedInstanceRoleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateManagedInstanceRoleRequest): any => ({
    ...obj,
  });
}

export interface UpdateManagedInstanceRoleResult {}

export namespace UpdateManagedInstanceRoleResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateManagedInstanceRoleResult): any => ({
    ...obj,
  });
}

export interface UpdateOpsItemRequest {
  /**
   * <p>Update the information about the OpsItem. Provide enough information so that users reading
   *    this OpsItem for the first time understand the issue. </p>
   */
  Description?: string;

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
   *     <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-creating-OpsItems.html#OpsCenter-manually-create-OpsItems">Creating OpsItems manually</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   */
  OperationalData?: Record<string, OpsItemDataValue>;

  /**
   * <p>Keys that you want to remove from the OperationalData map.</p>
   */
  OperationalDataToDelete?: string[];

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
   * <p>The OpsItem status. Status can be <code>Open</code>, <code>In Progress</code>, or
   *     <code>Resolved</code>. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-working-with-OpsItems.html#OpsCenter-working-with-OpsItems-editing-details">Editing OpsItem details</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   */
  Status?: OpsItemStatus | string;

  /**
   * <p>The ID of the OpsItem.</p>
   */
  OpsItemId: string | undefined;

  /**
   * <p>A short heading that describes the nature of the OpsItem and the impacted resource.</p>
   */
  Title?: string;

  /**
   * <p>Specify a new category for an OpsItem.</p>
   */
  Category?: string;

  /**
   * <p>Specify a new severity for an OpsItem.</p>
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
}

export namespace UpdateOpsItemRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateOpsItemRequest): any => ({
    ...obj,
  });
}

export interface UpdateOpsItemResponse {}

export namespace UpdateOpsItemResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateOpsItemResponse): any => ({
    ...obj,
  });
}

export interface UpdateOpsMetadataRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the OpsMetadata Object to update.</p>
   */
  OpsMetadataArn: string | undefined;

  /**
   * <p>Metadata to add to an OpsMetadata object.</p>
   */
  MetadataToUpdate?: Record<string, MetadataValue>;

  /**
   * <p>The metadata keys to delete from the OpsMetadata object. </p>
   */
  KeysToDelete?: string[];
}

export namespace UpdateOpsMetadataRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateOpsMetadataRequest): any => ({
    ...obj,
  });
}

export interface UpdateOpsMetadataResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the OpsMetadata Object that was updated.</p>
   */
  OpsMetadataArn?: string;
}

export namespace UpdateOpsMetadataResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateOpsMetadataResult): any => ({
    ...obj,
  });
}

export interface UpdatePatchBaselineRequest {
  /**
   * <p>The ID of the patch baseline to update.</p>
   */
  BaselineId: string | undefined;

  /**
   * <p>The name of the patch baseline.</p>
   */
  Name?: string;

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
   * <p>Assigns a new compliance severity level to an existing patch baseline.</p>
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
   *       <code>Rejected</code> patches list, it is considered non-compliant with the patch baseline,
   *      and its status is reported as <code>InstalledRejected</code>.</p>
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
   * <p>If True, then all fields that are required by the <a>CreatePatchBaseline</a>
   *    operation are also required for this API request. Optional fields that aren't specified are set
   *    to null.</p>
   */
  Replace?: boolean;
}

export namespace UpdatePatchBaselineRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePatchBaselineRequest): any => ({
    ...obj,
    ...(obj.Sources && { Sources: obj.Sources.map((item) => PatchSource.filterSensitiveLog(item)) }),
  });
}

export interface UpdatePatchBaselineResult {
  /**
   * <p>The ID of the deleted patch baseline.</p>
   */
  BaselineId?: string;

  /**
   * <p>The name of the patch baseline.</p>
   */
  Name?: string;

  /**
   * <p>The operating system rule used by the updated patch baseline.</p>
   */
  OperatingSystem?: OperatingSystem | string;

  /**
   * <p>A set of global filters used to exclude patches from the baseline.</p>
   */
  GlobalFilters?: PatchFilterGroup;

  /**
   * <p>A set of rules used to include patches in the baseline.</p>
   */
  ApprovalRules?: PatchRuleGroup;

  /**
   * <p>A list of explicitly approved patches for the baseline.</p>
   */
  ApprovedPatches?: string[];

  /**
   * <p>The compliance severity level assigned to the patch baseline after the update
   *    completed.</p>
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
   */
  RejectedPatches?: string[];

  /**
   * <p>The action specified to take on patches included in the <code>RejectedPatches</code> list. A
   *    patch can be allowed only if it is a dependency of another package, or blocked entirely along
   *    with packages that include it as a dependency.</p>
   */
  RejectedPatchesAction?: PatchAction | string;

  /**
   * <p>The date when the patch baseline was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The date when the patch baseline was last modified.</p>
   */
  ModifiedDate?: Date;

  /**
   * <p>A description of the patch baseline.</p>
   */
  Description?: string;

  /**
   * <p>Information about the patches to use to update the managed nodes, including target operating
   *    systems and source repositories. Applies to Linux managed nodes only.</p>
   */
  Sources?: PatchSource[];
}

export namespace UpdatePatchBaselineResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePatchBaselineResult): any => ({
    ...obj,
    ...(obj.Sources && { Sources: obj.Sources.map((item) => PatchSource.filterSensitiveLog(item)) }),
  });
}

export interface UpdateResourceDataSyncRequest {
  /**
   * <p>The name of the resource data sync you want to update.</p>
   */
  SyncName: string | undefined;

  /**
   * <p>The type of resource data sync. The supported <code>SyncType</code> is
   *    SyncFromSource.</p>
   */
  SyncType: string | undefined;

  /**
   * <p>Specify information about the data sources to synchronize.</p>
   */
  SyncSource: ResourceDataSyncSource | undefined;
}

export namespace UpdateResourceDataSyncRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateResourceDataSyncRequest): any => ({
    ...obj,
  });
}

export interface UpdateResourceDataSyncResult {}

export namespace UpdateResourceDataSyncResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateResourceDataSyncResult): any => ({
    ...obj,
  });
}

/**
 * <p>The request body of the UpdateServiceSetting API operation.</p>
 */
export interface UpdateServiceSettingRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the service setting to reset. For example,
   *     <code>arn:aws:ssm:us-east-1:111122223333:servicesetting/ssm/parameter-store/high-throughput-enabled</code>.
   *    The setting ID can be one of the following.</p>
   *          <ul>
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
   *                <p>
   *                   <code>/ssm/documents/console/public-sharing-permission</code>
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
   *             <li>
   *                <p>
   *                   <code>/ssm/managed-instance/activation-tier</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  SettingId: string | undefined;

  /**
   * <p>The new value to specify for the service setting. The following list specifies the available
   *    values for each setting.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>/ssm/parameter-store/default-parameter-tier</code>: <code>Standard</code>,
   *       <code>Advanced</code>, <code>Intelligent-Tiering</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/ssm/parameter-store/high-throughput-enabled</code>: <code>true</code> or
   *       <code>false</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/ssm/managed-instance/activation-tier</code>: <code>true</code> or
   *       <code>false</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/ssm/automation/customer-script-log-destination</code>: <code>CloudWatch</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/ssm/automation/customer-script-log-group-name</code>: the name of an Amazon CloudWatch Logs log group</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/ssm/documents/console/public-sharing-permission</code>: <code>Enable</code> or
   *       <code>Disable</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/ssm/managed-instance/activation-tier</code>: <code>standard</code> or
   *       <code>advanced</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  SettingValue: string | undefined;
}

export namespace UpdateServiceSettingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateServiceSettingRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The result body of the UpdateServiceSetting API operation.</p>
 */
export interface UpdateServiceSettingResult {}

export namespace UpdateServiceSettingResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateServiceSettingResult): any => ({
    ...obj,
  });
}

export interface GetInventoryRequest {
  /**
   * <p>One or more filters. Use a filter to return a more specific list of results.</p>
   */
  Filters?: InventoryFilter[];

  /**
   * <p>Returns counts of inventory types based on one or more expressions. For example, if you
   *    aggregate by using an expression that uses the <code>AWS:InstanceInformation.PlatformType</code>
   *    type, you can see a count of how many Windows and Linux managed nodes exist in your inventoried
   *    fleet.</p>
   */
  Aggregators?: InventoryAggregator[];

  /**
   * <p>The list of inventory item types to return.</p>
   */
  ResultAttributes?: ResultAttribute[];

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
}

export namespace GetInventoryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInventoryRequest): any => ({
    ...obj,
  });
}

export interface GetOpsSummaryRequest {
  /**
   * <p>Specify the name of a resource data sync to get.</p>
   */
  SyncName?: string;

  /**
   * <p>Optional filters used to scope down the returned OpsData. </p>
   */
  Filters?: OpsFilter[];

  /**
   * <p>Optional aggregators that return counts of OpsData based on one or more expressions.</p>
   */
  Aggregators?: OpsAggregator[];

  /**
   * <p>The OpsData data type to return.</p>
   */
  ResultAttributes?: OpsResultAttribute[];

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

export namespace GetOpsSummaryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetOpsSummaryRequest): any => ({
    ...obj,
  });
}
