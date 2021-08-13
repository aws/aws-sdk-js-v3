import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

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

export namespace AccountSharingInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccountSharingInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Metadata that you assign to your Amazon Web Services resources. Tags enable you to categorize your
 *    resources in different ways, for example, by purpose, owner, or environment. In Amazon Web Services Systems Manager, you
 *    can apply tags to Systems Manager documents (SSM documents), managed instances, maintenance windows,
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

export namespace Tag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

/**
 * <p>An activation registers one or more on-premises servers or virtual machines (VMs) with Amazon Web Services
 *    so that you can configure those servers or VMs using Run Command. A server or VM that has been
 *    registered with Amazon Web Services Systems Manager is called a managed instance.</p>
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
   * <p>A name for the managed instance when it is created.</p>
   */
  DefaultInstanceName?: string;

  /**
   * <p>The Identity and Access Management (IAM) role to assign to the managed
   *    instance.</p>
   */
  IamRole?: string;

  /**
   * <p>The maximum number of managed instances that can be registered using this activation.</p>
   */
  RegistrationLimit?: number;

  /**
   * <p>The number of managed instances already registered with this activation.</p>
   */
  RegistrationsCount?: number;

  /**
   * <p>The date when this activation can no longer be used to register managed instances.</p>
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

export namespace Activation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Activation): any => ({
    ...obj,
  });
}

export enum ResourceTypeForTagging {
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
   *     instances. You must specify the name of the managed instance in the following format:
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
   *     managed instances. You must specify the name of the managed instance in the following format:
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
export interface InternalServerError extends __SmithyException, $MetadataBearer {
  name: "InternalServerError";
  $fault: "server";
  Message?: string;
}

export namespace InternalServerError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalServerError): any => ({
    ...obj,
  });
}

/**
 * <p>The resource ID isn't valid. Verify that you entered the correct ID and try again.</p>
 */
export interface InvalidResourceId extends __SmithyException, $MetadataBearer {
  name: "InvalidResourceId";
  $fault: "client";
}

export namespace InvalidResourceId {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidResourceId): any => ({
    ...obj,
  });
}

/**
 * <p>The resource type isn't valid. For example, if you are attempting to tag an instance, the
 *    instance must be a registered, managed instance.</p>
 */
export interface InvalidResourceType extends __SmithyException, $MetadataBearer {
  name: "InvalidResourceType";
  $fault: "client";
}

export namespace InvalidResourceType {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidResourceType): any => ({
    ...obj,
  });
}

/**
 * <p>The <code>Targets</code> parameter includes too many tags. Remove one or more tags and try
 *    the command again.</p>
 */
export interface TooManyTagsError extends __SmithyException, $MetadataBearer {
  name: "TooManyTagsError";
  $fault: "client";
}

export namespace TooManyTagsError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TooManyTagsError): any => ({
    ...obj,
  });
}

/**
 * <p>There are concurrent updates for a resource that supports one update at a time.</p>
 */
export interface TooManyUpdates extends __SmithyException, $MetadataBearer {
  name: "TooManyUpdates";
  $fault: "client";
  Message?: string;
}

export namespace TooManyUpdates {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TooManyUpdates): any => ({
    ...obj,
  });
}

/**
 * <p>Error returned if an attempt is made to register a patch group with a patch baseline that is
 *    already registered with a different patch baseline.</p>
 */
export interface AlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "AlreadyExistsException";
  $fault: "client";
  Message?: string;
}

export namespace AlreadyExistsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AlreadyExistsException): any => ({
    ...obj,
  });
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
   *             <code>AWS::SSMIncidents::IncidentRecord</code>: an Incident Manager incident. Incident Manager is a
   *    capability of Amazon Web Services Systems Manager.</p>
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
export interface OpsItemInvalidParameterException extends __SmithyException, $MetadataBearer {
  name: "OpsItemInvalidParameterException";
  $fault: "client";
  ParameterNames?: string[];
  Message?: string;
}

export namespace OpsItemInvalidParameterException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OpsItemInvalidParameterException): any => ({
    ...obj,
  });
}

/**
 * <p>The request caused OpsItems to exceed one or more quotas. For information about OpsItem
 *    quotas, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-learn-more.html#OpsCenter-learn-more-limits">What are the resource limits for OpsCenter?</a>.</p>
 */
export interface OpsItemLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "OpsItemLimitExceededException";
  $fault: "client";
  ResourceTypes?: string[];
  Limit?: number;
  LimitType?: string;
  Message?: string;
}

export namespace OpsItemLimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OpsItemLimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified OpsItem ID doesn't exist. Verify the ID and try again.</p>
 */
export interface OpsItemNotFoundException extends __SmithyException, $MetadataBearer {
  name: "OpsItemNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace OpsItemNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OpsItemNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>The Amazon Resource Name (ARN) is already associated with the OpsItem.</p>
 */
export interface OpsItemRelatedItemAlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "OpsItemRelatedItemAlreadyExistsException";
  $fault: "client";
  Message?: string;
  ResourceUri?: string;
  OpsItemId?: string;
}

export namespace OpsItemRelatedItemAlreadyExistsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OpsItemRelatedItemAlreadyExistsException): any => ({
    ...obj,
  });
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
   * <p>(Optional) A list of instance IDs on which you want to cancel the command. If not provided,
   *    the command is canceled on every instance on which it was requested.</p>
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
 * <p>You can't specify an instance ID in more than one association.</p>
 */
export interface DuplicateInstanceId extends __SmithyException, $MetadataBearer {
  name: "DuplicateInstanceId";
  $fault: "client";
}

export namespace DuplicateInstanceId {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DuplicateInstanceId): any => ({
    ...obj,
  });
}

/**
 * <p>The specified command ID isn't valid. Verify the ID and try again.</p>
 */
export interface InvalidCommandId extends __SmithyException, $MetadataBearer {
  name: "InvalidCommandId";
  $fault: "client";
}

export namespace InvalidCommandId {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidCommandId): any => ({
    ...obj,
  });
}

/**
 * <p>The following problems can cause this exception:</p>
 *          <ul>
 *             <li>
 *                <p>You don't have permission to access the instance.</p>
 *             </li>
 *             <li>
 *                <p>Amazon Web Services Systems Manager Agent(SSM Agent) isn't running. Verify that SSM Agent is
 *      running.</p>
 *             </li>
 *             <li>
 *                <p>SSM Agent isn't registered with the SSM endpoint. Try reinstalling SSM Agent.</p>
 *             </li>
 *             <li>
 *                <p>The instance isn't in valid state. Valid states are: <code>Running</code>,
 *       <code>Pending</code>, <code>Stopped</code>, and <code>Stopping</code>. Invalid states are:
 *       <code>Shutting-down</code> and <code>Terminated</code>.</p>
 *             </li>
 *          </ul>
 */
export interface InvalidInstanceId extends __SmithyException, $MetadataBearer {
  name: "InvalidInstanceId";
  $fault: "client";
  Message?: string;
}

export namespace InvalidInstanceId {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidInstanceId): any => ({
    ...obj,
  });
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
export interface DoesNotExistException extends __SmithyException, $MetadataBearer {
  name: "DoesNotExistException";
  $fault: "client";
  Message?: string;
}

export namespace DoesNotExistException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DoesNotExistException): any => ({
    ...obj,
  });
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
   * <p>The name of the registered, managed instance as it will appear in the Amazon Web Services Systems Manager console or
   *    when you use the Amazon Web Services command line tools to list Systems Manager resources.</p>
   *          <important>
   *             <p>Don't enter personally identifiable information in this field.</p>
   *          </important>
   */
  DefaultInstanceName?: string;

  /**
   * <p>The name of the Identity and Access Management (IAM) role that you want to assign to
   *    the managed instance. This IAM role must provide AssumeRole permissions for the
   *    Amazon Web Services Systems Manager service principal <code>ssm.amazonaws.com</code>. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-service-role.html">Create an
   *      IAM service role for a hybrid environment</a> in the
   *     <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   */
  IamRole: string | undefined;

  /**
   * <p>Specify the maximum number of managed instances you want to register. The default value is
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
   *    on-premises servers and VMs after they connect to Systems Manager for the first time and are assigned a
   *    managed instance ID. This means they are listed in the Amazon Web Services Systems Manager console with an ID that is
   *    prefixed with "mi-". For information about how to add tags to your managed instances, see <a>AddTagsToResource</a>. For information about how to remove tags from your managed
   *    instances, see <a>RemoveTagsFromResource</a>.</p>
   */
  Tags?: Tag[];
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
 * <p>The specified association already exists.</p>
 */
export interface AssociationAlreadyExists extends __SmithyException, $MetadataBearer {
  name: "AssociationAlreadyExists";
  $fault: "client";
}

export namespace AssociationAlreadyExists {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociationAlreadyExists): any => ({
    ...obj,
  });
}

/**
 * <p>You can have at most 2,000 active associations.</p>
 */
export interface AssociationLimitExceeded extends __SmithyException, $MetadataBearer {
  name: "AssociationLimitExceeded";
  $fault: "client";
}

export namespace AssociationLimitExceeded {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociationLimitExceeded): any => ({
    ...obj,
  });
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
   * <p>(Deprecated) You can no longer specify this parameter. The system ignores it. Instead,
   *    Amazon Web Services Systems Manager automatically determines the Region of the S3 bucket.</p>
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

export namespace S3OutputLocation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3OutputLocation): any => ({
    ...obj,
  });
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

export namespace InstanceAssociationOutputLocation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceAssociationOutputLocation): any => ({
    ...obj,
  });
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
}

export namespace TargetLocation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TargetLocation): any => ({
    ...obj,
  });
}

/**
 * <p>An array of search criteria that targets instances using a key-value pair that you
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
 *                   <code>Key=InstanceIds,Values=<i>instance-id-1</i>,<i>instance-id-2</i>,<i>instance-id-3</i>
 *                   </code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Key=tag:<i>my-tag-key</i>,Values=<i>my-tag-value-1</i>,<i>my-tag-value-2</i>
 *                   </code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Key=tag-key,Values=<i>my-tag-key-1</i>,<i>my-tag-key-2</i>
 *                   </code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Run Command and Maintenance window targets only</b>:
 *        <code>Key=resource-groups:Name,Values=<i>resource-group-name</i>
 *                   </code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Maintenance window targets only</b>:
 *        <code>Key=resource-groups:ResourceTypeFilters,Values=<i>resource-type-1</i>,<i>resource-type-2</i>
 *                   </code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Automation targets only</b>:
 *        <code>Key=ResourceGroup;Values=<i>resource-group-name</i>
 *                   </code>
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
 *        <code>Key=resource-groups:ResourceTypeFilters,Values=<i>AWS::EC2::INSTANCE</i>,<i>AWS::EC2::VPC</i>
 *                   </code>
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
 *        <code>Key=InstanceIds,Values=<i>*</i>
 *                   </code>
 *                </p>
 *                <p>This example demonstrates how to target all managed instances in the Amazon Web Services Region where
 *      the association was created.</p>
 *             </li>
 *          </ul>
 *          <p>For more information about how to send commands that target instances using
 *     <code>Key,Value</code> parameters, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/send-commands-multiple.html#send-commands-targeting">Targeting multiple instances</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
 */
export interface Target {
  /**
   * <p>User-defined criteria for sending commands that target instances that meet the
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

export namespace Target {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Target): any => ({
    ...obj,
  });
}

export interface CreateAssociationRequest {
  /**
   * <p>The name of the SSM Command document or Automation runbook that contains the configuration
   *    information for the instance.</p>
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
   */
  DocumentVersion?: string;

  /**
   * <p>The instance ID.</p>
   *          <note>
   *             <p>
   *                <code>InstanceId</code> has been deprecated. To specify an instance ID for an association,
   *     use the <code>Targets</code> parameter. Requests that include the
   *     parameter <code>InstanceID</code> with Systems Manager documents (SSM documents) that use schema version
   *     2.0 or later will fail. In addition, if you use the parameter
   *      <code>InstanceId</code>, you can't use the parameters <code>AssociationName</code>,
   *      <code>DocumentVersion</code>, <code>MaxErrors</code>, <code>MaxConcurrency</code>,
   *      <code>OutputLocation</code>, or <code>ScheduleExpression</code>. To use these parameters, you
   *     must use the <code>Targets</code> parameter.</p>
   *          </note>
   */
  InstanceId?: string;

  /**
   * <p>The parameters for the runtime configuration of the document.</p>
   */
  Parameters?: { [key: string]: string[] };

  /**
   * <p>The targets for the association. You can target instances by using tags, Amazon Web Services resource
   *    groups, all instances in an Amazon Web Services account, or individual instance IDs. For more information about
   *    choosing targets for an association, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-state-manager-targets-and-rate-controls.html">Using targets and rate controls with State Manager associations</a> in the
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
   * <p>Specify the target for the association. This target is required for associations that use an
   *    Automation runbook and target resources by using rate controls. Automation is a capability of
   *    Amazon Web Services Systems Manager.</p>
   */
  AutomationTargetParameterName?: string;

  /**
   * <p>The number of errors that are allowed before the system stops sending requests to run the
   *    association on additional targets. You can specify either an absolute number of errors, for
   *    example 10, or a percentage of the target set, for example 10%. If you specify 3, for example,
   *    the system stops sending requests when the fourth error is received. If you specify 0, then the
   *    system stops sending requests after the first error is returned. If you run an association on 50
   *    instances and set <code>MaxError</code> to 10%, then the system stops sending the request when
   *    the sixth error is received.</p>
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
   *          <p>If a new instance starts and attempts to run an association while Systems Manager is running
   *     <code>MaxConcurrency</code> associations, the association is allowed to run. During the next
   *    association interval, the new instance will process its association within the limit specified
   *    for <code>MaxConcurrency</code>.</p>
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
}

export namespace CreateAssociationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAssociationRequest): any => ({
    ...obj,
  });
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
   *    association with two instances, and one of them was successful, this would return the count of
   *    instances by status.</p>
   */
  AssociationStatusAggregatedCount?: { [key: string]: number };
}

export namespace AssociationOverview {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociationOverview): any => ({
    ...obj,
  });
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

export namespace AssociationStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociationStatus): any => ({
    ...obj,
  });
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
   * <p>The instance ID.</p>
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
   * <p>Specify the target for the association. This target is required for associations that use an
   *    Automation runbook and target resources by using rate controls. Automation is a capability of
   *    Amazon Web Services Systems Manager.</p>
   */
  AutomationTargetParameterName?: string;

  /**
   * <p>A description of the parameters for a document. </p>
   */
  Parameters?: { [key: string]: string[] };

  /**
   * <p>The association ID.</p>
   */
  AssociationId?: string;

  /**
   * <p>The instances targeted by the request. </p>
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
   *    instances and set <code>MaxError</code> to 10%, then the system stops sending the request when
   *    the sixth error is received.</p>
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
   *          <p>If a new instance starts and attempts to run an association while Systems Manager is running
   *     <code>MaxConcurrency</code> associations, the association is allowed to run. During the next
   *    association interval, the new instance will process its association within the limit specified
   *    for <code>MaxConcurrency</code>.</p>
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
}

export namespace AssociationDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociationDescription): any => ({
    ...obj,
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
  });
}

/**
 * <p>The specified SSM document doesn't exist.</p>
 */
export interface InvalidDocument extends __SmithyException, $MetadataBearer {
  name: "InvalidDocument";
  $fault: "client";
  /**
   * <p>The SSM document doesn't exist or the document isn't available to the user. This exception
   *    can be issued by various API operations. </p>
   */
  Message?: string;
}

export namespace InvalidDocument {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidDocument): any => ({
    ...obj,
  });
}

/**
 * <p>The document version isn't valid or doesn't exist.</p>
 */
export interface InvalidDocumentVersion extends __SmithyException, $MetadataBearer {
  name: "InvalidDocumentVersion";
  $fault: "client";
  Message?: string;
}

export namespace InvalidDocumentVersion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidDocumentVersion): any => ({
    ...obj,
  });
}

/**
 * <p>The output location isn't valid or doesn't exist.</p>
 */
export interface InvalidOutputLocation extends __SmithyException, $MetadataBearer {
  name: "InvalidOutputLocation";
  $fault: "client";
}

export namespace InvalidOutputLocation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidOutputLocation): any => ({
    ...obj,
  });
}

/**
 * <p>You must specify values for all required parameters in the Amazon Web Services Systems Manager document (SSM
 *    document). You can only supply values to parameters defined in the SSM document.</p>
 */
export interface InvalidParameters extends __SmithyException, $MetadataBearer {
  name: "InvalidParameters";
  $fault: "client";
  Message?: string;
}

export namespace InvalidParameters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidParameters): any => ({
    ...obj,
  });
}

/**
 * <p>The schedule is invalid. Verify your cron or rate expression and try again.</p>
 */
export interface InvalidSchedule extends __SmithyException, $MetadataBearer {
  name: "InvalidSchedule";
  $fault: "client";
  Message?: string;
}

export namespace InvalidSchedule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidSchedule): any => ({
    ...obj,
  });
}

/**
 * <p>The target isn't valid or doesn't exist. It might not be configured for Systems Manager or you might
 *    not have permission to perform the operation.</p>
 */
export interface InvalidTarget extends __SmithyException, $MetadataBearer {
  name: "InvalidTarget";
  $fault: "client";
  Message?: string;
}

export namespace InvalidTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidTarget): any => ({
    ...obj,
  });
}

/**
 * <p>The document doesn't support the platform type of the given instance ID(s). For example, you
 *    sent an document for a Windows instance to a Linux instance.</p>
 */
export interface UnsupportedPlatformType extends __SmithyException, $MetadataBearer {
  name: "UnsupportedPlatformType";
  $fault: "client";
  Message?: string;
}

export namespace UnsupportedPlatformType {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnsupportedPlatformType): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the association of a Amazon Web Services Systems Manager document (SSM document) and an instance.</p>
 */
export interface CreateAssociationBatchRequestEntry {
  /**
   * <p>The name of the SSM document that contains the configuration information for the instance.
   *    You can specify Command or Automation runbooks.</p>
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
   * <p>The instance ID.</p>
   *          <note>
   *             <p>
   *                <code>InstanceId</code> has been deprecated. To specify an instance ID for an association,
   *     use the <code>Targets</code> parameter. Requests that include the
   *     parameter <code>InstanceID</code> with Systems Manager documents (SSM documents) that use schema version
   *     2.0 or later will fail. In addition, if you use the parameter
   *      <code>InstanceId</code>, you can't use the parameters <code>AssociationName</code>,
   *      <code>DocumentVersion</code>, <code>MaxErrors</code>, <code>MaxConcurrency</code>,
   *      <code>OutputLocation</code>, or <code>ScheduleExpression</code>. To use these parameters, you
   *     must use the <code>Targets</code> parameter.</p>
   *          </note>
   */
  InstanceId?: string;

  /**
   * <p>A description of the parameters for a document. </p>
   */
  Parameters?: { [key: string]: string[] };

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
   * <p>The instances targeted by the request.</p>
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
   *    instances and set <code>MaxError</code> to 10%, then the system stops sending the request when
   *    the sixth error is received.</p>
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
   *          <p>If a new instance starts and attempts to run an association while Systems Manager is running
   *     <code>MaxConcurrency</code> associations, the association is allowed to run. During the next
   *    association interval, the new instance will process its association within the limit specified
   *    for <code>MaxConcurrency</code>.</p>
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
}

export namespace CreateAssociationBatchRequestEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAssociationBatchRequestEntry): any => ({
    ...obj,
  });
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
  });
}

export type Fault = "Client" | "Server" | "Unknown";

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

export namespace FailedCreateAssociation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FailedCreateAssociation): any => ({
    ...obj,
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
  });
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

export namespace AttachmentsSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttachmentsSource): any => ({
    ...obj,
  });
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
  Command = "Command",
  DeploymentStrategy = "DeploymentStrategy",
  Package = "Package",
  Policy = "Policy",
  ProblemAnalysis = "ProblemAnalysis",
  ProblemAnalysisTemplate = "ProblemAnalysisTemplate",
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
}

export namespace DocumentRequires {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DocumentRequires): any => ({
    ...obj,
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
   *                   <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/create-ssm-document-api.html">Create an SSM document
   *       (Amazon Web Services API)</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/create-ssm-document-cli.html">Create an SSM document
   *       (Amazon Web Services CLI)</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/create-ssm-document-api.html">Create an SSM document
   *       (API)</a>
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

/**
 * <p>An attribute of an attachment, such as the attachment name.</p>
 */
export interface AttachmentInformation {
  /**
   * <p>The name of the attachment.</p>
   */
  Name?: string;
}

export namespace AttachmentInformation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttachmentInformation): any => ({
    ...obj,
  });
}

export enum DocumentHashType {
  SHA1 = "Sha1",
  SHA256 = "Sha256",
}

export type DocumentParameterType = "String" | "StringList";

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

export namespace DocumentParameter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DocumentParameter): any => ({
    ...obj,
  });
}

export enum PlatformType {
  LINUX = "Linux",
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

export namespace ReviewInformation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReviewInformation): any => ({
    ...obj,
  });
}

export enum DocumentStatus {
  Active = "Active",
  Creating = "Creating",
  Deleting = "Deleting",
  Failed = "Failed",
  Updating = "Updating",
}

/**
 * <p>Describes a Amazon Web Services Systems Manager document (SSM document). </p>
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
   * <p>The list of OS platforms compatible with this SSM document. </p>
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
}

export namespace DocumentDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DocumentDescription): any => ({
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
export interface DocumentAlreadyExists extends __SmithyException, $MetadataBearer {
  name: "DocumentAlreadyExists";
  $fault: "client";
  Message?: string;
}

export namespace DocumentAlreadyExists {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DocumentAlreadyExists): any => ({
    ...obj,
  });
}

/**
 * <p>You can have at most 500 active SSM documents.</p>
 */
export interface DocumentLimitExceeded extends __SmithyException, $MetadataBearer {
  name: "DocumentLimitExceeded";
  $fault: "client";
  Message?: string;
}

export namespace DocumentLimitExceeded {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DocumentLimitExceeded): any => ({
    ...obj,
  });
}

/**
 * <p>The content for the document isn't valid.</p>
 */
export interface InvalidDocumentContent extends __SmithyException, $MetadataBearer {
  name: "InvalidDocumentContent";
  $fault: "client";
  /**
   * <p>A description of the validation error.</p>
   */
  Message?: string;
}

export namespace InvalidDocumentContent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidDocumentContent): any => ({
    ...obj,
  });
}

/**
 * <p>The version of the document schema isn't supported.</p>
 */
export interface InvalidDocumentSchemaVersion extends __SmithyException, $MetadataBearer {
  name: "InvalidDocumentSchemaVersion";
  $fault: "client";
  Message?: string;
}

export namespace InvalidDocumentSchemaVersion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidDocumentSchemaVersion): any => ({
    ...obj,
  });
}

/**
 * <p>The size limit of a document is 64 KB.</p>
 */
export interface MaxDocumentSizeExceeded extends __SmithyException, $MetadataBearer {
  name: "MaxDocumentSizeExceeded";
  $fault: "client";
  Message?: string;
}

export namespace MaxDocumentSizeExceeded {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MaxDocumentSizeExceeded): any => ({
    ...obj,
  });
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
   * <p>Enables a maintenance window task to run on managed instances, even if you haven't
   *    registered those instances as targets. If enabled, then you must specify the unregistered
   *    instances (by instance ID) when you register a task with the maintenance window.</p>
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
export interface IdempotentParameterMismatch extends __SmithyException, $MetadataBearer {
  name: "IdempotentParameterMismatch";
  $fault: "client";
  Message?: string;
}

export namespace IdempotentParameterMismatch {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IdempotentParameterMismatch): any => ({
    ...obj,
  });
}

/**
 * <p>Error returned when the caller has exceeded the default resource quotas. For example, too
 *    many maintenance windows or patch baselines have been created.</p>
 *          <p>For information about resource quotas in Systems Manager, see <a href="https://docs.aws.amazon.com/general/latest/gr/ssm.html#limits_ssm">Systems Manager service quotas</a> in the
 *     <i>Amazon Web Services General Reference</i>.</p>
 */
export interface ResourceLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "ResourceLimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceLimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceLimitExceededException): any => ({
    ...obj,
  });
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

export namespace OpsItemNotification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OpsItemNotification): any => ({
    ...obj,
  });
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

export namespace OpsItemDataValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OpsItemDataValue): any => ({
    ...obj,
  });
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

export namespace RelatedOpsItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RelatedOpsItem): any => ({
    ...obj,
  });
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
  OperationalData?: { [key: string]: OpsItemDataValue };

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

/**
 * <p>The OpsItem already exists.</p>
 */
export interface OpsItemAlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "OpsItemAlreadyExistsException";
  $fault: "client";
  Message?: string;
  OpsItemId?: string;
}

export namespace OpsItemAlreadyExistsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OpsItemAlreadyExistsException): any => ({
    ...obj,
  });
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

export namespace MetadataValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MetadataValue): any => ({
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
  Metadata?: { [key: string]: MetadataValue };

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

/**
 * <p>An OpsMetadata object already exists for the selected resource.</p>
 */
export interface OpsMetadataAlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "OpsMetadataAlreadyExistsException";
  $fault: "client";
  message?: string;
}

export namespace OpsMetadataAlreadyExistsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OpsMetadataAlreadyExistsException): any => ({
    ...obj,
  });
}

/**
 * <p>One of the arguments passed is invalid. </p>
 */
export interface OpsMetadataInvalidArgumentException extends __SmithyException, $MetadataBearer {
  name: "OpsMetadataInvalidArgumentException";
  $fault: "client";
  message?: string;
}

export namespace OpsMetadataInvalidArgumentException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OpsMetadataInvalidArgumentException): any => ({
    ...obj,
  });
}

/**
 * <p>Your account reached the maximum number of OpsMetadata objects allowed by Application Manager. The
 *    maximum is 200 OpsMetadata objects. Delete one or more OpsMetadata object and try again.</p>
 */
export interface OpsMetadataLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "OpsMetadataLimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace OpsMetadataLimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OpsMetadataLimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>The system is processing too many concurrent updates. Wait a few moments and try
 *    again.</p>
 */
export interface OpsMetadataTooManyUpdatesException extends __SmithyException, $MetadataBearer {
  name: "OpsMetadataTooManyUpdatesException";
  $fault: "client";
  message?: string;
}

export namespace OpsMetadataTooManyUpdatesException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OpsMetadataTooManyUpdatesException): any => ({
    ...obj,
  });
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

export namespace PatchFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PatchFilter): any => ({
    ...obj,
  });
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

export namespace PatchFilterGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PatchFilterGroup): any => ({
    ...obj,
  });
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
   * <p>For instances identified by the approval rule filters, enables a patch baseline to apply
   *    non-security updates available in the specified repository. The default value is
   *     <code>false</code>. Applies to Linux instances only.</p>
   */
  EnableNonSecurity?: boolean;
}

export namespace PatchRule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PatchRule): any => ({
    ...obj,
  });
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

export namespace PatchRuleGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PatchRuleGroup): any => ({
    ...obj,
  });
}

export enum OperatingSystem {
  AmazonLinux = "AMAZON_LINUX",
  AmazonLinux2 = "AMAZON_LINUX_2",
  CentOS = "CENTOS",
  Debian = "DEBIAN",
  MacOS = "MACOS",
  OracleLinux = "ORACLE_LINUX",
  RedhatEnterpriseLinux = "REDHAT_ENTERPRISE_LINUX",
  Suse = "SUSE",
  Ubuntu = "UBUNTU",
  Windows = "WINDOWS",
}

export enum PatchAction {
  AllowAsDependency = "ALLOW_AS_DEPENDENCY",
  Block = "BLOCK",
}

/**
 * <p>Information about the patches to use to update the instances, including target operating
 *    systems and source repository. Applies to Linux instances only.</p>
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

export namespace PatchSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PatchSource): any => ({
    ...obj,
    ...(obj.Configuration && { Configuration: SENSITIVE_STRING }),
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
   *    applied to the instances. The default value is <code>false</code>. Applies to Linux instances
   *    only.</p>
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
   * <p>Information about the patches to use to update the instances, including target operating
   *    systems and source repositories. Applies to Linux instances only.</p>
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

export namespace ResourceDataSyncDestinationDataSharing {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceDataSyncDestinationDataSharing): any => ({
    ...obj,
  });
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

export namespace ResourceDataSyncS3Destination {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceDataSyncS3Destination): any => ({
    ...obj,
  });
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

export namespace ResourceDataSyncOrganizationalUnit {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceDataSyncOrganizationalUnit): any => ({
    ...obj,
  });
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

export namespace ResourceDataSyncAwsOrganizationsSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceDataSyncAwsOrganizationsSource): any => ({
    ...obj,
  });
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

export namespace ResourceDataSyncSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceDataSyncSource): any => ({
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

/**
 * <p>A sync configuration with the same name already exists.</p>
 */
export interface ResourceDataSyncAlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "ResourceDataSyncAlreadyExistsException";
  $fault: "client";
  SyncName?: string;
}

export namespace ResourceDataSyncAlreadyExistsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceDataSyncAlreadyExistsException): any => ({
    ...obj,
  });
}

/**
 * <p>You have exceeded the allowed maximum sync configurations.</p>
 */
export interface ResourceDataSyncCountExceededException extends __SmithyException, $MetadataBearer {
  name: "ResourceDataSyncCountExceededException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceDataSyncCountExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceDataSyncCountExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified sync configuration is invalid.</p>
 */
export interface ResourceDataSyncInvalidConfigurationException extends __SmithyException, $MetadataBearer {
  name: "ResourceDataSyncInvalidConfigurationException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceDataSyncInvalidConfigurationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceDataSyncInvalidConfigurationException): any => ({
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

/**
 * <p>The activation isn't valid. The activation might have been deleted, or the ActivationId and
 *    the ActivationCode don't match.</p>
 */
export interface InvalidActivation extends __SmithyException, $MetadataBearer {
  name: "InvalidActivation";
  $fault: "client";
  Message?: string;
}

export namespace InvalidActivation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidActivation): any => ({
    ...obj,
  });
}

/**
 * <p>The activation ID isn't valid. Verify the you entered the correct ActivationId or
 *    ActivationCode and try again.</p>
 */
export interface InvalidActivationId extends __SmithyException, $MetadataBearer {
  name: "InvalidActivationId";
  $fault: "client";
  Message?: string;
}

export namespace InvalidActivationId {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidActivationId): any => ({
    ...obj,
  });
}

/**
 * <p>The specified association doesn't exist.</p>
 */
export interface AssociationDoesNotExist extends __SmithyException, $MetadataBearer {
  name: "AssociationDoesNotExist";
  $fault: "client";
  Message?: string;
}

export namespace AssociationDoesNotExist {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociationDoesNotExist): any => ({
    ...obj,
  });
}

export interface DeleteAssociationRequest {
  /**
   * <p>The name of the SSM document.</p>
   */
  Name?: string;

  /**
   * <p>The instance ID.</p>
   *          <note>
   *             <p>
   *                <code>InstanceId</code> has been deprecated. To specify an instance ID for an association,
   *     use the <code>Targets</code> parameter. Requests that include the
   *     parameter <code>InstanceID</code> with Systems Manager documents (SSM documents) that use schema version
   *     2.0 or later will fail. In addition, if you use the parameter
   *      <code>InstanceId</code>, you can't use the parameters <code>AssociationName</code>,
   *      <code>DocumentVersion</code>, <code>MaxErrors</code>, <code>MaxConcurrency</code>,
   *      <code>OutputLocation</code>, or <code>ScheduleExpression</code>. To use these parameters, you
   *     must use the <code>Targets</code> parameter.</p>
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

/**
 * <p>You must disassociate a document from all instances before you can delete it.</p>
 */
export interface AssociatedInstances extends __SmithyException, $MetadataBearer {
  name: "AssociatedInstances";
  $fault: "client";
}

export namespace AssociatedInstances {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociatedInstances): any => ({
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

/**
 * <p>You attempted to delete a document while it is still shared. You must stop sharing the
 *    document before you can delete it.</p>
 */
export interface InvalidDocumentOperation extends __SmithyException, $MetadataBearer {
  name: "InvalidDocumentOperation";
  $fault: "client";
  Message?: string;
}

export namespace InvalidDocumentOperation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidDocumentOperation): any => ({
    ...obj,
  });
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

export namespace DeleteInventoryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteInventoryRequest): any => ({
    ...obj,
  });
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

export namespace InventoryDeletionSummaryItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InventoryDeletionSummaryItem): any => ({
    ...obj,
  });
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

export namespace InventoryDeletionSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InventoryDeletionSummary): any => ({
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

/**
 * <p>One or more of the parameters specified for the delete operation isn't valid. Verify all
 *    parameters and try again.</p>
 */
export interface InvalidDeleteInventoryParametersException extends __SmithyException, $MetadataBearer {
  name: "InvalidDeleteInventoryParametersException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidDeleteInventoryParametersException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidDeleteInventoryParametersException): any => ({
    ...obj,
  });
}

/**
 * <p>The request isn't valid.</p>
 */
export interface InvalidInventoryRequestException extends __SmithyException, $MetadataBearer {
  name: "InvalidInventoryRequestException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidInventoryRequestException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidInventoryRequestException): any => ({
    ...obj,
  });
}

/**
 * <p>The delete inventory option specified isn't valid. Verify the option and try again.</p>
 */
export interface InvalidOptionException extends __SmithyException, $MetadataBearer {
  name: "InvalidOptionException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidOptionException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidOptionException): any => ({
    ...obj,
  });
}

/**
 * <p>The parameter type name isn't valid.</p>
 */
export interface InvalidTypeNameException extends __SmithyException, $MetadataBearer {
  name: "InvalidTypeNameException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidTypeNameException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidTypeNameException): any => ({
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

/**
 * <p>The OpsMetadata object doesn't exist. </p>
 */
export interface OpsMetadataNotFoundException extends __SmithyException, $MetadataBearer {
  name: "OpsMetadataNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace OpsMetadataNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OpsMetadataNotFoundException): any => ({
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

/**
 * <p>The parameter couldn't be found. Verify the name and try again.</p>
 */
export interface ParameterNotFound extends __SmithyException, $MetadataBearer {
  name: "ParameterNotFound";
  $fault: "client";
  message?: string;
}

export namespace ParameterNotFound {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ParameterNotFound): any => ({
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

/**
 * <p>Error returned if an attempt is made to delete a patch baseline that is registered for a
 *    patch group.</p>
 */
export interface ResourceInUseException extends __SmithyException, $MetadataBearer {
  name: "ResourceInUseException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceInUseException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceInUseException): any => ({
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

/**
 * <p>The specified sync name wasn't found.</p>
 */
export interface ResourceDataSyncNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceDataSyncNotFoundException";
  $fault: "client";
  SyncName?: string;
  SyncType?: string;
  Message?: string;
}

export namespace ResourceDataSyncNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceDataSyncNotFoundException): any => ({
    ...obj,
  });
}

export interface DeregisterManagedInstanceRequest {
  /**
   * <p>The ID assigned to the managed instance when you registered it using the activation process.
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

/**
 * <p>You specified the <code>Safe</code> option for the DeregisterTargetFromMaintenanceWindow
 *    operation, but the target is still referenced in a task.</p>
 */
export interface TargetInUseException extends __SmithyException, $MetadataBearer {
  name: "TargetInUseException";
  $fault: "client";
  Message?: string;
}

export namespace TargetInUseException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TargetInUseException): any => ({
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

export namespace DescribeActivationsFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeActivationsFilter): any => ({
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

/**
 * <p>The filter name isn't valid. Verify the you entered the correct name and try again.</p>
 */
export interface InvalidFilter extends __SmithyException, $MetadataBearer {
  name: "InvalidFilter";
  $fault: "client";
  Message?: string;
}

export namespace InvalidFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidFilter): any => ({
    ...obj,
  });
}

/**
 * <p>The specified token isn't valid.</p>
 */
export interface InvalidNextToken extends __SmithyException, $MetadataBearer {
  name: "InvalidNextToken";
  $fault: "client";
  Message?: string;
}

export namespace InvalidNextToken {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidNextToken): any => ({
    ...obj,
  });
}

export interface DescribeAssociationRequest {
  /**
   * <p>The name of the SSM document.</p>
   */
  Name?: string;

  /**
   * <p>The instance ID.</p>
   */
  InstanceId?: string;

  /**
   * <p>The association ID for which you want information.</p>
   */
  AssociationId?: string;

  /**
   * <p>Specify the association version to retrieve. To view the latest version, either specify
   *     <code>$LATEST</code> for this parameter, or omit this parameter. To view a list of all
   *    associations for an instance, use <a>ListAssociations</a>. To get a list of versions
   *    for a specific association, use <a>ListAssociationVersions</a>. </p>
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
  });
}

/**
 * <p>The version you specified isn't valid. Use ListAssociationVersions to view all versions of
 *    an association according to the association ID. Or, use the <code>$LATEST</code> parameter to
 *    view the latest version of the association.</p>
 */
export interface InvalidAssociationVersion extends __SmithyException, $MetadataBearer {
  name: "InvalidAssociationVersion";
  $fault: "client";
  Message?: string;
}

export namespace InvalidAssociationVersion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidAssociationVersion): any => ({
    ...obj,
  });
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

export namespace AssociationExecutionFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociationExecutionFilter): any => ({
    ...obj,
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
}

export namespace AssociationExecution {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociationExecution): any => ({
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

/**
 * <p>The specified execution ID doesn't exist. Verify the ID number and try again.</p>
 */
export interface AssociationExecutionDoesNotExist extends __SmithyException, $MetadataBearer {
  name: "AssociationExecutionDoesNotExist";
  $fault: "client";
  Message?: string;
}

export namespace AssociationExecutionDoesNotExist {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociationExecutionDoesNotExist): any => ({
    ...obj,
  });
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

export namespace AssociationExecutionTargetsFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociationExecutionTargetsFilter): any => ({
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

export namespace OutputSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OutputSource): any => ({
    ...obj,
  });
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
   * <p>The resource ID, for example, the instance ID where the association ran.</p>
   */
  ResourceId?: string;

  /**
   * <p>The resource type, for example, instance.</p>
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

export namespace AssociationExecutionTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociationExecutionTarget): any => ({
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

export namespace AutomationExecutionFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutomationExecutionFilter): any => ({
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

export namespace ResolvedTargets {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResolvedTargets): any => ({
    ...obj,
  });
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
  Parameters?: { [key: string]: string[] };

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

export namespace Runbook {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Runbook): any => ({
    ...obj,
  });
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
  Outputs?: { [key: string]: string[] };

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
  TargetMaps?: { [key: string]: string[] }[];

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

export namespace AutomationExecutionMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutomationExecutionMetadata): any => ({
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

/**
 * <p>The specified key isn't valid.</p>
 */
export interface InvalidFilterKey extends __SmithyException, $MetadataBearer {
  name: "InvalidFilterKey";
  $fault: "client";
}

export namespace InvalidFilterKey {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidFilterKey): any => ({
    ...obj,
  });
}

/**
 * <p>The filter value isn't valid. Verify the value and try again.</p>
 */
export interface InvalidFilterValue extends __SmithyException, $MetadataBearer {
  name: "InvalidFilterValue";
  $fault: "client";
  Message?: string;
}

export namespace InvalidFilterValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidFilterValue): any => ({
    ...obj,
  });
}

/**
 * <p>There is no automation execution information for the requested automation execution
 *    ID.</p>
 */
export interface AutomationExecutionNotFoundException extends __SmithyException, $MetadataBearer {
  name: "AutomationExecutionNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace AutomationExecutionNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutomationExecutionNotFoundException): any => ({
    ...obj,
  });
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

export namespace StepExecutionFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StepExecutionFilter): any => ({
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
  Details?: { [key: string]: string[] };
}

export namespace FailureDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FailureDetails): any => ({
    ...obj,
  });
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
  Inputs?: { [key: string]: string };

  /**
   * <p>Returned values from the execution of the step.</p>
   */
  Outputs?: { [key: string]: string[] };

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
  OverriddenParameters?: { [key: string]: string[] };

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
}

export namespace StepExecution {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StepExecution): any => ({
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

export namespace PatchOrchestratorFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PatchOrchestratorFilter): any => ({
    ...obj,
  });
}

export interface DescribeAvailablePatchesRequest {
  /**
   * <p>Each element in the array is a structure containing a key-value pair.</p>
   *          <p>
   *             <b>Windows Server</b>
   *          </p>
   *          <p>Supported keys for Windows Server instance patches include the following:</p>
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
   *                <code>aws ssm describe-available-patches --filters
   *     Key=CVE_ID,Values=CVE-2018-3615</code>
   *             </p>
   *             <p>However, the following command succeeds:</p>
   *             <p>
   *                <code>aws ssm describe-available-patches --filters Key=PRODUCT,Values=AmazonLinux2018.03
   *      Key=CVE_ID,Values=CVE-2018-3615</code>
   *             </p>
   *          </important>
   *          <p>Supported keys for Linux instance patches include the following:</p>
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
   *    Linux-based instances only.</p>
   */
  AdvisoryIds?: string[];

  /**
   * <p>The Bugzilla ID of the patch. For example, <code>1600646</code>. Applies to Linux-based
   *    instances only.</p>
   */
  BugzillaIds?: string[];

  /**
   * <p>The Common Vulnerabilities and Exposures (CVE) ID of the patch. For example,
   *     <code>CVE-2011-3192</code>. Applies to Linux-based instances only.</p>
   */
  CVEIds?: string[];

  /**
   * <p>The name of the patch. Applies to Linux-based instances only.</p>
   */
  Name?: string;

  /**
   * <p>The epoch of the patch. For example in
   *    <code>pkg-example-EE-20180914-2.2.amzn1.noarch</code>, the epoch value is
   *    <code>20180914-2</code>. Applies to Linux-based instances only.</p>
   */
  Epoch?: number;

  /**
   * <p>The version number of the patch. For example, in
   *     <code>example-pkg-1.710.10-2.7.abcd.x86_64</code>, the version number is indicated by
   *     <code>-1</code>. Applies to Linux-based instances only.</p>
   */
  Version?: string;

  /**
   * <p>The particular release of a patch. For example, in
   *     <code>pkg-example-EE-20180914-2.2.amzn1.noarch</code>, the release is <code>2.amaz1</code>.
   *    Applies to Linux-based instances only.</p>
   */
  Release?: string;

  /**
   * <p>The architecture of the patch. For example, in
   *     <code>example-pkg-0.710.10-2.7.abcd.x86_64</code>, the architecture is indicated by
   *     <code>x86_64</code>. Applies to Linux-based instances only.</p>
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
   *    Ubuntu Server 20.04 LTE. Applies to Linux-based instances only.</p>
   */
  Repository?: string;
}

export namespace Patch {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Patch): any => ({
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

/**
 * <p>The permission type isn't supported. <i>Share</i> is the only supported
 *    permission type.</p>
 */
export interface InvalidPermissionType extends __SmithyException, $MetadataBearer {
  name: "InvalidPermissionType";
  $fault: "client";
  Message?: string;
}

export namespace InvalidPermissionType {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidPermissionType): any => ({
    ...obj,
  });
}

export interface DescribeEffectiveInstanceAssociationsRequest {
  /**
   * <p>The instance ID for which you want to view all associations.</p>
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

/**
 * <p>One or more association documents on the instance. </p>
 */
export interface InstanceAssociation {
  /**
   * <p>The association ID.</p>
   */
  AssociationId?: string;

  /**
   * <p>The instance ID.</p>
   */
  InstanceId?: string;

  /**
   * <p>The content of the association document for the instance(s).</p>
   */
  Content?: string;

  /**
   * <p>Version information for the association on the instance.</p>
   */
  AssociationVersion?: string;
}

export namespace InstanceAssociation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceAssociation): any => ({
    ...obj,
  });
}

export interface DescribeEffectiveInstanceAssociationsResult {
  /**
   * <p>The associations for the requested instance.</p>
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

export namespace PatchStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PatchStatus): any => ({
    ...obj,
  });
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

export namespace EffectivePatch {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EffectivePatch): any => ({
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

/**
 * <p>The operating systems you specified isn't supported, or the operation isn't supported for
 *    the operating system.</p>
 */
export interface UnsupportedOperatingSystem extends __SmithyException, $MetadataBearer {
  name: "UnsupportedOperatingSystem";
  $fault: "client";
  Message?: string;
}

export namespace UnsupportedOperatingSystem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnsupportedOperatingSystem): any => ({
    ...obj,
  });
}

export interface DescribeInstanceAssociationsStatusRequest {
  /**
   * <p>The instance IDs for which you want association status information.</p>
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

export namespace S3OutputUrl {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3OutputUrl): any => ({
    ...obj,
  });
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

export namespace InstanceAssociationOutputUrl {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceAssociationOutputUrl): any => ({
    ...obj,
  });
}

/**
 * <p>Status information about the instance association.</p>
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
   * <p>The version of the association applied to the instance.</p>
   */
  AssociationVersion?: string;

  /**
   * <p>The instance ID where the association was created.</p>
   */
  InstanceId?: string;

  /**
   * <p>The date the instance association ran. </p>
   */
  ExecutionDate?: Date;

  /**
   * <p>Status information about the instance association.</p>
   */
  Status?: string;

  /**
   * <p>Detailed status information about the instance association.</p>
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
   * <p>The name of the association applied to the instance.</p>
   */
  AssociationName?: string;
}

export namespace InstanceAssociationStatusInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceAssociationStatusInfo): any => ({
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

/**
 * <p>The filters to describe or get information about your managed instances.</p>
 */
export interface InstanceInformationStringFilter {
  /**
   * <p>The filter key name to describe your instances. For example:</p>
   *          <p>"InstanceIds"|"AgentVersion"|"PingStatus"|"PlatformTypes"|"ActivationIds"|"IamRole"|"ResourceType"|"AssociationStatus"|"Tag
   *    Key"</p>
   *          <important>
   *             <p>
   *                <code>Tag key</code> isn't a valid filter. You must specify either <code>tag-key</code> or
   *      <code>tag:keyname</code> and a string. Here are some valid examples: tag-key, tag:123, tag:al!,
   *     tag:Windows. Here are some <i>invalid</i> examples: tag-keys, Tag Key, tag:,
   *     tagKey, abc:keyname.</p>
   *          </important>
   */
  Key: string | undefined;

  /**
   * <p>The filter values.</p>
   */
  Values: string[] | undefined;
}

export namespace InstanceInformationStringFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceInformationStringFilter): any => ({
    ...obj,
  });
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
 * <p>Describes a filter for a specific list of instances. You can filter instances information by
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

export namespace InstanceInformationFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceInformationFilter): any => ({
    ...obj,
  });
}

export interface DescribeInstanceInformationRequest {
  /**
   * <p>This is a legacy method. We recommend that you don't use this method. Instead, use the
   *     <code>Filters</code> data type. <code>Filters</code> enables you to return instance information
   *    by filtering based on tags applied to managed instances.</p>
   *          <note>
   *             <p>Attempting to use <code>InstanceInformationFilterList</code> and <code>Filters</code> leads
   *     to an exception error. </p>
   *          </note>
   */
  InstanceInformationFilterList?: InstanceInformationFilter[];

  /**
   * <p>One or more filters. Use a filter to return a more specific list of instances. You can
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

/**
 * <p>Status information about the aggregated associations.</p>
 */
export interface InstanceAggregatedAssociationOverview {
  /**
   * <p>Detailed status information about the aggregated associations.</p>
   */
  DetailedStatus?: string;

  /**
   * <p>The number of associations for the instance(s).</p>
   */
  InstanceAssociationStatusAggregatedCount?: { [key: string]: number };
}

export namespace InstanceAggregatedAssociationOverview {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceAggregatedAssociationOverview): any => ({
    ...obj,
  });
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

/**
 * <p>Describes a filter for a specific list of instances. </p>
 */
export interface InstanceInformation {
  /**
   * <p>The instance ID. </p>
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
   * <p>The version of SSM Agent running on your Linux instance. </p>
   */
  AgentVersion?: string;

  /**
   * <p>Indicates whether the latest version of SSM Agent is running on your Linux Managed Instance.
   *    This field doesn't indicate whether or not the latest version is installed on Windows managed
   *    instances, because some older versions of Windows Server use the EC2Config service to process
   *    Systems Manager requests.</p>
   */
  IsLatestVersion?: boolean;

  /**
   * <p>The operating system platform type. </p>
   */
  PlatformType?: PlatformType | string;

  /**
   * <p>The name of the operating system platform running on your instance. </p>
   */
  PlatformName?: string;

  /**
   * <p>The version of the OS platform running on your instance. </p>
   */
  PlatformVersion?: string;

  /**
   * <p>The activation ID created by Amazon Web Services Systems Manager when the server or virtual machine (VM) was
   *    registered.</p>
   */
  ActivationId?: string;

  /**
   * <p>The Identity and Access Management (IAM) role assigned to the on-premises Systems Manager
   *    managed instance. This call doesn't return the IAM role for Amazon Elastic Compute Cloud
   *     (Amazon EC2) instances. To retrieve the IAM role for an EC2 instance, use
   *    the Amazon EC2 <code>DescribeInstances</code> operation. For information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstances.html">DescribeInstances</a> in the <i>Amazon EC2 API Reference</i> or <a href="https://docs.aws.amazon.com/cli/latest/ec2/describe-instances.html">describe-instances</a> in
   *    the <i>Amazon Web Services CLI Command Reference</i>.</p>
   */
  IamRole?: string;

  /**
   * <p>The date the server or VM was registered with Amazon Web Services as a managed instance.</p>
   */
  RegistrationDate?: Date;

  /**
   * <p>The type of instance. Instances are either EC2 instances or managed instances. </p>
   */
  ResourceType?: ResourceType | string;

  /**
   * <p>The name assigned to an on-premises server or virtual machine (VM) when it is activated as a
   *    Systems Manager managed instance. The name is specified as the <code>DefaultInstanceName</code> property
   *    using the <a>CreateActivation</a> command. It is applied to the managed instance by
   *    specifying the Activation Code and Activation ID when you install SSM Agent on the instance, as
   *    explained in <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-install-managed-linux.html">Install SSM Agent for a
   *     hybrid environment (Linux)</a> and <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-install-managed-win.html">Install SSM Agent for a
   *     hybrid environment (Windows)</a>. To retrieve the Name tag of an EC2 instance, use the Amazon EC2
   *     <code>DescribeInstances</code> operation. For information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstances.html">DescribeInstances</a> in the
   *     <i>Amazon EC2 API Reference</i> or <a href="https://docs.aws.amazon.com/cli/latest/ec2/describe-instances.html">describe-instances</a> in the
   *     <i>Amazon Web Services CLI Command Reference</i>.</p>
   */
  Name?: string;

  /**
   * <p>The IP address of the managed instance.</p>
   */
  IPAddress?: string;

  /**
   * <p>The fully qualified host name of the managed instance.</p>
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
}

export namespace InstanceInformation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceInformation): any => ({
    ...obj,
  });
}

export interface DescribeInstanceInformationResult {
  /**
   * <p>The instance information list.</p>
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

/**
 * <p>The specified filter value isn't valid.</p>
 */
export interface InvalidInstanceInformationFilterValue extends __SmithyException, $MetadataBearer {
  name: "InvalidInstanceInformationFilterValue";
  $fault: "client";
  message?: string;
}

export namespace InvalidInstanceInformationFilterValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidInstanceInformationFilterValue): any => ({
    ...obj,
  });
}

export interface DescribeInstancePatchesRequest {
  /**
   * <p>The ID of the instance whose patch state information should be retrieved.</p>
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
 * <p>Information about the state of a patch on a particular instance as it relates to the patch
 *    baseline used to patch the instance.</p>
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
   * <p>The severity of the patchsuch as <code>Critical</code>, <code>Important</code>, and
   *     <code>Moderate</code>.</p>
   */
  Severity: string | undefined;

  /**
   * <p>The state of the patch on the instance, such as INSTALLED or FAILED.</p>
   *          <p>For descriptions of each patch state, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-compliance-about.html#sysman-compliance-monitor-patch">About patch compliance</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   */
  State: PatchComplianceDataState | string | undefined;

  /**
   * <p>The date/time the patch was installed on the instance. Not all operating systems provide
   *    this level of information.</p>
   */
  InstalledTime: Date | undefined;

  /**
   * <p>The IDs of one or more Common Vulnerabilities and Exposure (CVE) issues that are resolved by
   *    the patch.</p>
   */
  CVEIds?: string;
}

export namespace PatchComplianceData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PatchComplianceData): any => ({
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
   * <p>The ID of the instance for which patch state information should be retrieved.</p>
   */
  InstanceIds: string[] | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of instances to return (per page).</p>
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

export enum PatchOperationType {
  INSTALL = "Install",
  SCAN = "Scan",
}

export enum RebootOption {
  NO_REBOOT = "NoReboot",
  REBOOT_IF_NEEDED = "RebootIfNeeded",
}

/**
 * <p>Defines the high-level patch compliance state for a managed instance, providing information
 *    about the number of installed, missing, not applicable, and failed patches along with metadata
 *    about the operation when this information was gathered for the instance.</p>
 */
export interface InstancePatchState {
  /**
   * <p>The ID of the managed instance the high-level patch compliance information was collected
   *    for.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The name of the patch group the managed instance belongs to.</p>
   */
  PatchGroup: string | undefined;

  /**
   * <p>The ID of the patch baseline used to patch the instance.</p>
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
   * <p>The number of patches from the patch baseline that are installed on the instance.</p>
   */
  InstalledCount?: number;

  /**
   * <p>The number of patches not specified in the patch baseline that are installed on the
   *    instance.</p>
   */
  InstalledOtherCount?: number;

  /**
   * <p>The number of patches installed by Patch Manager since the last time the instance was
   *    rebooted.</p>
   */
  InstalledPendingRebootCount?: number;

  /**
   * <p>The number of patches installed on an instance that are specified in a
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
   * <p>The number of patches from the patch baseline that are applicable for the instance but
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
   * <p>The number of patches from the patch baseline that aren't applicable for the instance and
   *    therefore aren't installed on the instance. This number may be truncated if the list of patch
   *    names is very large. The number of patches beyond this limit are reported in
   *     <code>UnreportedNotApplicableCount</code>.</p>
   */
  NotApplicableCount?: number;

  /**
   * <p>The time the most recent patching operation was started on the instance.</p>
   */
  OperationStartTime: Date | undefined;

  /**
   * <p>The time the most recent patching operation completed on the instance.</p>
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
   * <p>The time of the last attempt to patch the instance with <code>NoReboot</code> specified as
   *    the reboot option.</p>
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
   *                   <code>RebootIfNeeded</code>: Patch Manager tries to reboot the instance if it installed
   *      any patches, or if any patches are detected with a status of
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
   * <p>The number of instances where patches that are specified as <code>Critical</code> for
   *    compliance reporting in the patch baseline aren't installed. These patches might be missing, have
   *    failed installation, were rejected, or were installed but awaiting a required instance reboot.
   *    The status of these instances is <code>NON_COMPLIANT</code>.</p>
   */
  CriticalNonCompliantCount?: number;

  /**
   * <p>The number of instances where patches that are specified as <code>Security</code> in a patch
   *    advisory aren't installed. These patches might be missing, have failed installation, were
   *    rejected, or were installed but awaiting a required instance reboot. The status of these
   *    instances is <code>NON_COMPLIANT</code>.</p>
   */
  SecurityNonCompliantCount?: number;

  /**
   * <p>The number of instances with patches installed that are specified as other than
   *     <code>Critical</code> or <code>Security</code> but aren't compliant with the patch baseline. The
   *    status of these instances is <code>NON_COMPLIANT</code>.</p>
   */
  OtherNonCompliantCount?: number;
}

export namespace InstancePatchState {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstancePatchState): any => ({
    ...obj,
    ...(obj.OwnerInformation && { OwnerInformation: SENSITIVE_STRING }),
  });
}

export interface DescribeInstancePatchStatesResult {
  /**
   * <p>The high-level patch state for the requested instances.</p>
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
 *             <b>Example</b>: To filter for all instances in a patch group
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

export namespace InstancePatchStateFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstancePatchStateFilter): any => ({
    ...obj,
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
   * <p>The high-level patch state for the requested instances. </p>
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

export namespace InventoryDeletionStatusItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InventoryDeletionStatusItem): any => ({
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

/**
 * <p>The ID specified for the delete operation doesn't exist or isn't valid. Verify the ID and
 *    try again.</p>
 */
export interface InvalidDeletionIdException extends __SmithyException, $MetadataBearer {
  name: "InvalidDeletionIdException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidDeletionIdException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidDeletionIdException): any => ({
    ...obj,
  });
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

export namespace MaintenanceWindowFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MaintenanceWindowFilter): any => ({
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

export namespace MaintenanceWindowExecution {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MaintenanceWindowExecution): any => ({
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

export namespace MaintenanceWindowExecutionTaskInvocationIdentity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MaintenanceWindowExecutionTaskInvocationIdentity): any => ({
    ...obj,
    ...(obj.Parameters && { Parameters: SENSITIVE_STRING }),
    ...(obj.OwnerInformation && { OwnerInformation: SENSITIVE_STRING }),
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
}

export namespace MaintenanceWindowExecutionTaskIdentity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MaintenanceWindowExecutionTaskIdentity): any => ({
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

export namespace MaintenanceWindowIdentity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MaintenanceWindowIdentity): any => ({
    ...obj,
    ...(obj.Description && { Description: SENSITIVE_STRING }),
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
   * <p>The instance ID or key-value pair to retrieve information about.</p>
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

export namespace ScheduledWindowExecution {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScheduledWindowExecution): any => ({
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
   * <p>The instance ID or key-value pair to retrieve information about.</p>
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

export namespace MaintenanceWindowIdentityForTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MaintenanceWindowIdentityForTarget): any => ({
    ...obj,
  });
}

export interface DescribeMaintenanceWindowsForTargetResult {
  /**
   * <p>Information about the maintenance window targets and tasks an instance is associated
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
   * <p>The targets, either instances or tags.</p>
   *          <p>Specify instances using the following format:</p>
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

export namespace MaintenanceWindowTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MaintenanceWindowTarget): any => ({
    ...obj,
    ...(obj.OwnerInformation && { OwnerInformation: SENSITIVE_STRING }),
    ...(obj.Description && { Description: SENSITIVE_STRING }),
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

/**
 * <p>Information about an Amazon Simple Storage Service (Amazon S3) bucket to write
 *    instance-level logs to.</p>
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
   * <p>The name of an S3 bucket where execution logs are stored .</p>
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

export namespace LoggingInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LoggingInfo): any => ({
    ...obj,
  });
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

export namespace MaintenanceWindowTaskParameterValueExpression {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MaintenanceWindowTaskParameterValueExpression): any => ({
    ...obj,
    ...(obj.Values && { Values: SENSITIVE_STRING }),
  });
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
   * <p>The targets (either instances or tags). Instances are specified using
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
  TaskParameters?: { [key: string]: MaintenanceWindowTaskParameterValueExpression };

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
   */
  MaxConcurrency?: string;

  /**
   * <p>The maximum number of errors allowed before this task stops being scheduled.</p>
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
}

export namespace MaintenanceWindowTask {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MaintenanceWindowTask): any => ({
    ...obj,
    ...(obj.TaskParameters && { TaskParameters: SENSITIVE_STRING }),
    ...(obj.Description && { Description: SENSITIVE_STRING }),
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

export enum OpsItemFilterKey {
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
 * <p>Describes an OpsItem filter.</p>
 */
export interface OpsItemFilter {
  /**
   * <p>The name of the filter.</p>
   */
  Key: OpsItemFilterKey | string | undefined;

  /**
   * <p>The filter value.</p>
   */
  Values: string[] | undefined;

  /**
   * <p>The operator used by the filter call.</p>
   */
  Operator: OpsItemFilterOperator | string | undefined;
}

export namespace OpsItemFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OpsItemFilter): any => ({
    ...obj,
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

export enum OpsItemStatus {
  APPROVED = "Approved",
  CANCELLED = "Cancelled",
  CANCELLING = "Cancelling",
  CHANGE_CALENDAR_OVERRIDE_APPROVED = "ChangeCalendarOverrideApproved",
  CHANGE_CALENDAR_OVERRIDE_REJECTED = "ChangeCalendarOverrideRejected",
  CLOSED = "Closed",
  COMPLETED_WITH_FAILURE = "CompletedWithFailure",
  COMPLETED_WITH_SUCCESS = "CompletedWithSuccess",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  OPEN = "Open",
  PENDING = "Pending",
  PENDING_APPROVAL = "PendingApproval",
  PENDING_CHANGE_CALENDAR_OVERRIDE = "PendingChangeCalendarOverride",
  REJECTED = "Rejected",
  RESOLVED = "Resolved",
  RUNBOOK_IN_PROGRESS = "RunbookInProgress",
  SCHEDULED = "Scheduled",
  TIMED_OUT = "TimedOut",
}

/**
 * <p>A count of OpsItems.</p>
 */
export interface OpsItemSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM entity that created the
   *    OpsItem.</p>
   */
  CreatedBy?: string;

  /**
   * <p>The date and time the OpsItem was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM entity that created the
   *    OpsItem.</p>
   */
  LastModifiedBy?: string;

  /**
   * <p>The date and time the OpsItem was last updated.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The importance of this OpsItem in relation to other OpsItems in the system.</p>
   */
  Priority?: number;

  /**
   * <p>The impacted Amazon Web Services resource.</p>
   */
  Source?: string;

  /**
   * <p>The OpsItem status. Status can be <code>Open</code>, <code>In Progress</code>, or
   *     <code>Resolved</code>.</p>
   */
  Status?: OpsItemStatus | string;

  /**
   * <p>The ID of the OpsItem.</p>
   */
  OpsItemId?: string;

  /**
   * <p>A short heading that describes the nature of the OpsItem and the impacted resource.</p>
   */
  Title?: string;

  /**
   * <p>Operational data is custom data that provides useful reference details about the OpsItem.
   *   </p>
   */
  OperationalData?: { [key: string]: OpsItemDataValue };

  /**
   * <p>A list of OpsItems by category.</p>
   */
  Category?: string;

  /**
   * <p>A list of OpsItems by severity.</p>
   */
  Severity?: string;

  /**
   * <p>The type of OpsItem. Currently, the only valid values are <code>/aws/changerequest</code>
   *    and <code>/aws/issue</code>.</p>
   */
  OpsItemType?: string;

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

export namespace OpsItemSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OpsItemSummary): any => ({
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

export enum ParametersFilterKey {
  KEY_ID = "KeyId",
  NAME = "Name",
  TYPE = "Type",
}

/**
 * <p>This data type is deprecated. Instead, use <a>ParameterStringFilter</a>.</p>
 */
export interface ParametersFilter {
  /**
   * <p>The name of the filter.</p>
   */
  Key: ParametersFilterKey | string | undefined;

  /**
   * <p>The filter values.</p>
   */
  Values: string[] | undefined;
}

export namespace ParametersFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ParametersFilter): any => ({
    ...obj,
  });
}

/**
 * <p>One or more filters. Use a filter to return a more specific list of results.</p>
 */
export interface ParameterStringFilter {
  /**
   * <p>The name of the filter.</p>
   *          <p>The <code>ParameterStringFilter</code> object is used by the <a>DescribeParameters</a> and <a>GetParametersByPath</a> API operations.
   *    However, not all of the pattern values listed for <code>Key</code> can be used with both
   *    operations.</p>
   *          <p>For <code>DescribeActions</code>, all of the listed patterns are valid, with the exception
   *    of <code>Label</code>.</p>
   *          <p>For <code>GetParametersByPath</code>, the following patterns listed for <code>Key</code>
   *    aren't valid: <code>tag</code>, <code>Name</code>, <code>Path</code>, and
   *    <code>Tier</code>.</p>
   *          <p>For examples of Amazon Web Services CLI commands demonstrating valid parameter filter constructions, see
   *     <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-search.html">Searching for Systems Manager parameters</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   */
  Key: string | undefined;

  /**
   * <p>For all filters used with <a>DescribeParameters</a>, valid options include
   *     <code>Equals</code> and <code>BeginsWith</code>. The <code>Name</code> filter additionally
   *    supports the <code>Contains</code> option. (Exception: For filters using the key
   *     <code>Path</code>, valid options include <code>Recursive</code> and
   *    <code>OneLevel</code>.)</p>
   *          <p>For filters used with <a>GetParametersByPath</a>, valid options include
   *     <code>Equals</code> and <code>BeginsWith</code>. (Exception: For filters using
   *     <code>Label</code> as the Key name, the only valid option is <code>Equals</code>.)</p>
   */
  Option?: string;

  /**
   * <p>The value you want to search for.</p>
   */
  Values?: string[];
}

export namespace ParameterStringFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ParameterStringFilter): any => ({
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

/**
 * <p>One or more policies assigned to a parameter.</p>
 */
export interface ParameterInlinePolicy {
  /**
   * <p>The JSON text of the policy.</p>
   */
  PolicyText?: string;

  /**
   * <p>The type of policy. Parameter Store, a capablility of Amazon Web Services Systems Manager, supports the following
   *    policy types: Expiration, ExpirationNotification, and NoChangeNotification. </p>
   */
  PolicyType?: string;

  /**
   * <p>The status of the policy. Policies report the following statuses: Pending (the policy hasn't
   *    been enforced or applied yet), Finished (the policy was applied), Failed (the policy wasn't
   *    applied), or InProgress (the policy is being applied now). </p>
   */
  PolicyStatus?: string;
}

export namespace ParameterInlinePolicy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ParameterInlinePolicy): any => ({
    ...obj,
  });
}

export enum ParameterTier {
  ADVANCED = "Advanced",
  INTELLIGENT_TIERING = "Intelligent-Tiering",
  STANDARD = "Standard",
}

export enum ParameterType {
  SECURE_STRING = "SecureString",
  STRING = "String",
  STRING_LIST = "StringList",
}

/**
 * <p>Metadata includes information like the ARN of the last user and the date/time the parameter
 *    was last used.</p>
 */
export interface ParameterMetadata {
  /**
   * <p>The parameter name.</p>
   */
  Name?: string;

  /**
   * <p>The type of parameter. Valid parameter types include the following: <code>String</code>,
   *     <code>StringList</code>, and <code>SecureString</code>.</p>
   */
  Type?: ParameterType | string;

  /**
   * <p>The ID of the query key used for this parameter.</p>
   */
  KeyId?: string;

  /**
   * <p>Date the parameter was last changed or updated.</p>
   */
  LastModifiedDate?: Date;

  /**
   * <p>Amazon Resource Name (ARN) of the Amazon Web Services user who last changed the parameter.</p>
   */
  LastModifiedUser?: string;

  /**
   * <p>Description of the parameter actions.</p>
   */
  Description?: string;

  /**
   * <p>A parameter name can include only the following letters and symbols.</p>
   *          <p>a-zA-Z0-9_.-</p>
   */
  AllowedPattern?: string;

  /**
   * <p>The parameter version.</p>
   */
  Version?: number;

  /**
   * <p>The parameter tier.</p>
   */
  Tier?: ParameterTier | string;

  /**
   * <p>A list of policies associated with a parameter.</p>
   */
  Policies?: ParameterInlinePolicy[];

  /**
   * <p>The data type of the parameter, such as <code>text</code> or <code>aws:ec2:image</code>. The
   *    default is <code>text</code>.</p>
   */
  DataType?: string;
}

export namespace ParameterMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ParameterMetadata): any => ({
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
