import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Information includes the AWS account ID where the current document is shared and the version
 *    shared with that account.</p>
 */
export interface AccountSharingInfo {
  /**
   * <p>The AWS account ID where the current document is shared.</p>
   */
  AccountId?: string;

  /**
   * <p>The version of the current document shared with the account.</p>
   */
  SharedDocumentVersion?: string;
}

export namespace AccountSharingInfo {
  export const filterSensitiveLog = (obj: AccountSharingInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Metadata that you assign to your AWS resources. Tags enable you to categorize your resources
 *    in different ways, for example, by purpose, owner, or environment. In Systems Manager, you can apply tags
 *    to documents, managed instances, maintenance windows, Parameter Store parameters, and patch
 *    baselines.</p>
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
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

/**
 * <p>An activation registers one or more on-premises servers or virtual machines (VMs) with AWS
 *    so that you can configure those servers or VMs using Run Command. A server or VM that has been
 *    registered with AWS is called a managed instance.</p>
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
   * <p>The Amazon Identity and Access Management (IAM) role to assign to the managed
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
  export const filterSensitiveLog = (obj: Activation): any => ({
    ...obj,
  });
}

export enum ResourceTypeForTagging {
  DOCUMENT = "Document",
  MAINTENANCE_WINDOW = "MaintenanceWindow",
  MANAGED_INSTANCE = "ManagedInstance",
  OPS_ITEM = "OpsItem",
  PARAMETER = "Parameter",
  PATCH_BASELINE = "PatchBaseline",
}

export interface AddTagsToResourceRequest {
  /**
   * <p>Specifies the type of resource you are tagging.</p>
   *          <note>
   *             <p>The ManagedInstance type for this API action is for on-premises managed instances. You must
   *     specify the name of the managed instance in the following format: mi-ID_number. For example,
   *     mi-1a2b3c4d5e6f.</p>
   *          </note>
   */
  ResourceType: ResourceTypeForTagging | string | undefined;

  /**
   * <p>The resource ID you want to tag.</p>
   *          <p>Use the ID of the resource. Here are some examples:</p>
   *          <p>ManagedInstance: mi-012345abcde</p>
   *          <p>MaintenanceWindow: mw-012345abcde</p>
   *          <p>PatchBaseline: pb-012345abcde</p>
   *          <p>For the Document and Parameter values, use the name of the resource.</p>
   *          <note>
   *             <p>The ManagedInstance type for this API action is only for on-premises managed instances. You
   *     must specify the name of the managed instance in the following format: mi-ID_number. For
   *     example, mi-1a2b3c4d5e6f.</p>
   *          </note>
   */
  ResourceId: string | undefined;

  /**
   * <p> One or more tags. The value parameter is required, but if you don't want the tag to have a
   *    value, specify the parameter with no value, and we set the value to an empty string. </p>
   *          <important>
   *             <p>Do not enter personally identifiable information in this field.</p>
   *          </important>
   */
  Tags: Tag[] | undefined;
}

export namespace AddTagsToResourceRequest {
  export const filterSensitiveLog = (obj: AddTagsToResourceRequest): any => ({
    ...obj,
  });
}

export interface AddTagsToResourceResult {}

export namespace AddTagsToResourceResult {
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
  export const filterSensitiveLog = (obj: InternalServerError): any => ({
    ...obj,
  });
}

/**
 * <p>The resource ID is not valid. Verify that you entered the correct ID and try again.</p>
 */
export interface InvalidResourceId extends __SmithyException, $MetadataBearer {
  name: "InvalidResourceId";
  $fault: "client";
}

export namespace InvalidResourceId {
  export const filterSensitiveLog = (obj: InvalidResourceId): any => ({
    ...obj,
  });
}

/**
 * <p>The resource type is not valid. For example, if you are attempting to tag an instance, the
 *    instance must be a registered, managed instance.</p>
 */
export interface InvalidResourceType extends __SmithyException, $MetadataBearer {
  name: "InvalidResourceType";
  $fault: "client";
}

export namespace InvalidResourceType {
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
  export const filterSensitiveLog = (obj: AlreadyExistsException): any => ({
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
  export const filterSensitiveLog = (obj: CancelCommandResult): any => ({
    ...obj,
  });
}

/**
 * <p>You cannot specify an instance ID in more than one association.</p>
 */
export interface DuplicateInstanceId extends __SmithyException, $MetadataBearer {
  name: "DuplicateInstanceId";
  $fault: "client";
}

export namespace DuplicateInstanceId {
  export const filterSensitiveLog = (obj: DuplicateInstanceId): any => ({
    ...obj,
  });
}

export interface InvalidCommandId extends __SmithyException, $MetadataBearer {
  name: "InvalidCommandId";
  $fault: "client";
}

export namespace InvalidCommandId {
  export const filterSensitiveLog = (obj: InvalidCommandId): any => ({
    ...obj,
  });
}

/**
 * <p>The following problems can cause this exception:</p>
 *          <p>You do not have permission to access the instance.</p>
 *          <p>SSM Agent is not running. Verify that SSM Agent is running.</p>
 *          <p>SSM Agent is not registered with the SSM endpoint. Try reinstalling SSM Agent.</p>
 *          <p>The instance is not in valid state. Valid states are: Running, Pending, Stopped, Stopping.
 *    Invalid states are: Shutting-down and Terminated.</p>
 */
export interface InvalidInstanceId extends __SmithyException, $MetadataBearer {
  name: "InvalidInstanceId";
  $fault: "client";
  Message?: string;
}

export namespace InvalidInstanceId {
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
  export const filterSensitiveLog = (obj: CancelMaintenanceWindowExecutionResult): any => ({
    ...obj,
  });
}

/**
 * <p>Error returned when the ID specified for a resource, such as a maintenance window or Patch
 *    baseline, doesn't exist.</p>
 *          <p>For information about resource quotas in Systems Manager, see <a href="http://docs.aws.amazon.com/general/latest/gr/ssm.html#limits_ssm">Systems Manager service quotas</a> in the
 *         <i>AWS General Reference</i>.</p>
 */
export interface DoesNotExistException extends __SmithyException, $MetadataBearer {
  name: "DoesNotExistException";
  $fault: "client";
  Message?: string;
}

export namespace DoesNotExistException {
  export const filterSensitiveLog = (obj: DoesNotExistException): any => ({
    ...obj,
  });
}

export interface CreateActivationRequest {
  /**
   * <p>A user-defined description of the resource that you want to register with Systems Manager. </p>
   *          <important>
   *             <p>Do not enter personally identifiable information in this field.</p>
   *          </important>
   */
  Description?: string;

  /**
   * <p>The name of the registered, managed instance as it will appear in the Systems Manager console or when
   *    you use the AWS command line tools to list Systems Manager resources.</p>
   *          <important>
   *             <p>Do not enter personally identifiable information in this field.</p>
   *          </important>
   */
  DefaultInstanceName?: string;

  /**
   * <p>The Amazon Identity and Access Management (IAM) role that you want to assign to the managed
   *    instance. This IAM role must provide AssumeRole permissions for the Systems Manager service principal
   *     <code>ssm.amazonaws.com</code>. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-service-role.html">Create an IAM service role for a
   *     hybrid environment</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   */
  IamRole: string | undefined;

  /**
   * <p>Specify the maximum number of managed instances you want to register. The default value is 1
   *    instance.</p>
   */
  RegistrationLimit?: number;

  /**
   * <p>The date by which this activation request should expire. The default value is 24
   *    hours.</p>
   */
  ExpirationDate?: Date;

  /**
   * <p>Optional metadata that you assign to a resource. Tags enable you to categorize a resource in
   *    different ways, such as by purpose, owner, or environment. For example, you might want to tag an
   *    activation to identify which servers or virtual machines (VMs) in your on-premises environment
   *    you intend to activate. In this case, you could specify the following key name/value
   *    pairs:</p>
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
   *             <p>When you install SSM Agent on your on-premises servers and VMs, you specify an activation
   *     ID and code. When you specify the activation ID and code, tags assigned to the activation are
   *     automatically applied to the on-premises servers or VMs.</p>
   *          </important>
   *
   *          <p>You can't add tags to or delete tags from an existing activation. You can tag your
   *    on-premises servers and VMs after they connect to Systems Manager for the first time and are assigned a
   *    managed instance ID. This means they are listed in the AWS Systems Manager console with an ID that is
   *    prefixed with "mi-". For information about how to add tags to your managed instances, see <a>AddTagsToResource</a>. For information about how to remove tags from your managed
   *    instances, see <a>RemoveTagsFromResource</a>.</p>
   */
  Tags?: Tag[];
}

export namespace CreateActivationRequest {
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
   * <p>(Deprecated) You can no longer specify this parameter. The system ignores it. Instead, Systems Manager
   *    automatically determines the Region of the S3 bucket.</p>
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
  export const filterSensitiveLog = (obj: S3OutputLocation): any => ({
    ...obj,
  });
}

/**
 * <p>An S3 bucket where you want to store the results of this request.</p>
 */
export interface InstanceAssociationOutputLocation {
  /**
   * <p>An S3 bucket where you want to store the results of this request.</p>
   */
  S3Location?: S3OutputLocation;
}

export namespace InstanceAssociationOutputLocation {
  export const filterSensitiveLog = (obj: InstanceAssociationOutputLocation): any => ({
    ...obj,
  });
}

export enum AssociationSyncCompliance {
  Auto = "AUTO",
  Manual = "MANUAL",
}

/**
 * <p>An array of search criteria that targets instances using a Key,Value combination that you
 *    specify.
 *    </p>
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
 *                <p>This example demonstrates how to target only EC2 instances and VPCs in your maintenance
 *      window.</p>
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
 *                <p>This example demonstrates how to target all managed instances in the AWS Region where the
 *      association was created.</p>
 *             </li>
 *          </ul>
 *          <p>For more information about how to send commands that target instances using
 *     <code>Key,Value</code> parameters, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/send-commands-multiple.html#send-commands-targeting">Targeting multiple instances</a> in the <i>AWS Systems Manager User Guide</i>.</p>
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
   */
  Values?: string[];
}

export namespace Target {
  export const filterSensitiveLog = (obj: Target): any => ({
    ...obj,
  });
}

export interface CreateAssociationRequest {
  /**
   * <p>The name of the SSM document that contains the configuration information for the instance.
   *    You can specify Command or Automation documents.</p>
   *          <p>You can specify AWS-predefined documents, documents you created, or a document that is
   *    shared with you from another account.</p>
   *          <p>For SSM documents that are shared with you from other AWS accounts, you must specify the
   *    complete SSM document ARN, in the following format:</p>
   *          <p>
   *             <code>arn:<i>partition</i>:ssm:<i>region</i>:<i>account-id</i>:document/<i>document-name</i>
   *             </code>
   *          </p>
   *          <p>For example:</p>
   *          <p>
   *             <code>arn:aws:ssm:us-east-2:12345678912:document/My-Shared-Document</code>
   *          </p>
   *          <p>For AWS-predefined documents and SSM documents you created in your account, you only need to
   *    specify the document name. For example, <code>AWS-ApplyPatchBaseline</code> or
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
   *     parameter <code>InstanceID</code> with SSM documents that use schema version 2.0 or later will
   *     fail. In addition, if you use the parameter <code>InstanceId</code>, you
   *     cannot use the parameters <code>AssociationName</code>, <code>DocumentVersion</code>,
   *      <code>MaxErrors</code>, <code>MaxConcurrency</code>, <code>OutputLocation</code>, or
   *      <code>ScheduleExpression</code>. To use these parameters, you must use the <code>Targets</code>
   *     parameter.</p>
   *          </note>
   */
  InstanceId?: string;

  /**
   * <p>The parameters for the runtime configuration of the document.</p>
   */
  Parameters?: { [key: string]: string[] };

  /**
   * <p>The targets for the association. You can target instances by using tags, AWS Resource
   *    Groups, all instances in an AWS account, or individual instance IDs. For more information about
   *    choosing targets for an association, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-state-manager-targets-and-rate-controls.html">Using targets and rate controls with State Manager associations</a> in the
   *     <i>AWS Systems Manager User Guide</i>.</p>
   */
  Targets?: Target[];

  /**
   * <p>A cron expression when the association will be applied to the target(s).</p>
   */
  ScheduleExpression?: string;

  /**
   * <p>An S3 bucket where you want to store the output details of the request.</p>
   */
  OutputLocation?: InstanceAssociationOutputLocation;

  /**
   * <p>Specify a descriptive name for the association.</p>
   */
  AssociationName?: string;

  /**
   * <p>Specify the target for the association. This target is required for associations that use an
   *    Automation document and target resources by using rate controls.</p>
   */
  AutomationTargetParameterName?: string;

  /**
   * <p>The number of errors that are allowed before the system stops sending requests to run the
   *    association on additional targets. You can specify either an absolute number of errors, for
   *    example 10, or a percentage of the target set, for example 10%. If you specify 3, for example,
   *    the system stops sending requests when the fourth error is received. If you specify 0, then the
   *    system stops sending requests after the first error is returned. If you run an association on 50
   *    instances and set MaxError to 10%, then the system stops sending the request when the sixth error
   *    is received.</p>
   *          <p>Executions that are already running an association when MaxErrors is reached are allowed to
   *    complete, but some of these executions may fail as well. If you need to ensure that there won't
   *    be more than max-errors failed executions, set MaxConcurrency to 1 so that executions proceed one
   *    at a time.</p>
   */
  MaxErrors?: string;

  /**
   * <p>The maximum number of targets allowed to run the association at the same time. You can
   *    specify a number, for example 10, or a percentage of the target set, for example 10%. The default
   *    value is 100%, which means all targets run the association at the same time.</p>
   *          <p>If a new instance starts and attempts to run an association while Systems Manager is running
   *    MaxConcurrency associations, the association is allowed to run. During the next association
   *    interval, the new instance will process its association within the limit specified for
   *    MaxConcurrency.</p>
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
   *    for the <a>PutComplianceItems</a> API action. In this case, compliance data is not
   *    managed by State Manager. It is managed by your direct call to the <a>PutComplianceItems</a> API action.</p>
   *          <p>By default, all associations use <code>AUTO</code> mode.</p>
   */
  SyncCompliance?: AssociationSyncCompliance | string;

  /**
   * <p>By default, when you create a new associations, the system runs it immediately after it is
   *    created and then according to the schedule you specified. Specify this option if you don't want
   *    an association to run immediately after you create it. This parameter is not supported for rate
   *    expressions.</p>
   */
  ApplyOnlyAtCronInterval?: boolean;
}

export namespace CreateAssociationRequest {
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
  export const filterSensitiveLog = (obj: AssociationStatus): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the parameters for a document.</p>
 */
export interface AssociationDescription {
  /**
   * <p>The name of the Systems Manager document.</p>
   */
  Name?: string;

  /**
   * <p>The ID of the instance.</p>
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
   *    Automation document and target resources by using rate controls.</p>
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
   *    instances and set MaxError to 10%, then the system stops sending the request when the sixth error
   *    is received.</p>
   *          <p>Executions that are already running an association when MaxErrors is reached are allowed to
   *    complete, but some of these executions may fail as well. If you need to ensure that there won't
   *    be more than max-errors failed executions, set MaxConcurrency to 1 so that executions proceed one
   *    at a time.</p>
   */
  MaxErrors?: string;

  /**
   * <p>The maximum number of targets allowed to run the association at the same time. You can
   *    specify a number, for example 10, or a percentage of the target set, for example 10%. The default
   *    value is 100%, which means all targets run the association at the same time.</p>
   *          <p>If a new instance starts and attempts to run an association while Systems Manager is running
   *    MaxConcurrency associations, the association is allowed to run. During the next association
   *    interval, the new instance will process its association within the limit specified for
   *    MaxConcurrency.</p>
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
   *    for the <a>PutComplianceItems</a> API action. In this case, compliance data is not
   *    managed by State Manager. It is managed by your direct call to the <a>PutComplianceItems</a> API action.</p>
   *          <p>By default, all associations use <code>AUTO</code> mode.</p>
   */
  SyncCompliance?: AssociationSyncCompliance | string;

  /**
   * <p>By default, when you create a new associations, the system runs it immediately after it is
   *    created and then according to the schedule you specified. Specify this option if you don't want
   *    an association to run immediately after you create it. This parameter is not supported for rate
   *    expressions.</p>
   */
  ApplyOnlyAtCronInterval?: boolean;
}

export namespace AssociationDescription {
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
  export const filterSensitiveLog = (obj: CreateAssociationResult): any => ({
    ...obj,
  });
}

/**
 * <p>The specified document does not exist.</p>
 */
export interface InvalidDocument extends __SmithyException, $MetadataBearer {
  name: "InvalidDocument";
  $fault: "client";
  /**
   * <p>The document does not exist or the document is not available to the user. This exception can
   *    be issued by CreateAssociation, CreateAssociationBatch, DeleteAssociation, DeleteDocument,
   *    DescribeAssociation, DescribeDocument, GetDocument, SendCommand, or UpdateAssociationStatus.
   *   </p>
   */
  Message?: string;
}

export namespace InvalidDocument {
  export const filterSensitiveLog = (obj: InvalidDocument): any => ({
    ...obj,
  });
}

/**
 * <p>The document version is not valid or does not exist.</p>
 */
export interface InvalidDocumentVersion extends __SmithyException, $MetadataBearer {
  name: "InvalidDocumentVersion";
  $fault: "client";
  Message?: string;
}

export namespace InvalidDocumentVersion {
  export const filterSensitiveLog = (obj: InvalidDocumentVersion): any => ({
    ...obj,
  });
}

/**
 * <p>The output location is not valid or does not exist.</p>
 */
export interface InvalidOutputLocation extends __SmithyException, $MetadataBearer {
  name: "InvalidOutputLocation";
  $fault: "client";
}

export namespace InvalidOutputLocation {
  export const filterSensitiveLog = (obj: InvalidOutputLocation): any => ({
    ...obj,
  });
}

/**
 * <p>You must specify values for all required parameters in the Systems Manager document. You can only
 *    supply values to parameters defined in the Systems Manager document.</p>
 */
export interface InvalidParameters extends __SmithyException, $MetadataBearer {
  name: "InvalidParameters";
  $fault: "client";
  Message?: string;
}

export namespace InvalidParameters {
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
  export const filterSensitiveLog = (obj: InvalidSchedule): any => ({
    ...obj,
  });
}

/**
 * <p>The target is not valid or does not exist. It might not be configured for Systems Manager or you might
 *    not have permission to perform the operation.</p>
 */
export interface InvalidTarget extends __SmithyException, $MetadataBearer {
  name: "InvalidTarget";
  $fault: "client";
  Message?: string;
}

export namespace InvalidTarget {
  export const filterSensitiveLog = (obj: InvalidTarget): any => ({
    ...obj,
  });
}

/**
 * <p>The document does not support the platform type of the given instance ID(s). For example,
 *    you sent an document for a Windows instance to a Linux instance.</p>
 */
export interface UnsupportedPlatformType extends __SmithyException, $MetadataBearer {
  name: "UnsupportedPlatformType";
  $fault: "client";
  Message?: string;
}

export namespace UnsupportedPlatformType {
  export const filterSensitiveLog = (obj: UnsupportedPlatformType): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the association of a Systems Manager SSM document and an instance.</p>
 */
export interface CreateAssociationBatchRequestEntry {
  /**
   * <p>The name of the SSM document that contains the configuration information for the instance.
   *    You can specify Command or Automation documents.</p>
   *          <p>You can specify AWS-predefined documents, documents you created, or a document that is
   *    shared with you from another account.</p>
   *          <p>For SSM documents that are shared with you from other AWS accounts, you must specify the
   *    complete SSM document ARN, in the following format:</p>
   *          <p>
   *             <code>arn:aws:ssm:<i>region</i>:<i>account-id</i>:document/<i>document-name</i>
   *             </code>
   *          </p>
   *          <p>For example:</p>
   *          <p>
   *             <code>arn:aws:ssm:us-east-2:12345678912:document/My-Shared-Document</code>
   *          </p>
   *          <p>For AWS-predefined documents and SSM documents you created in your account, you only need to
   *    specify the document name. For example, <code>AWS-ApplyPatchBaseline</code> or
   *     <code>My-Document</code>.</p>
   */
  Name: string | undefined;

  /**
   * <p>The ID of the instance. </p>
   */
  InstanceId?: string;

  /**
   * <p>A description of the parameters for a document. </p>
   */
  Parameters?: { [key: string]: string[] };

  /**
   * <p>Specify the target for the association. This target is required for associations that use an
   *    Automation document and target resources by using rate controls.</p>
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
   *    instances and set MaxError to 10%, then the system stops sending the request when the sixth error
   *    is received.</p>
   *          <p>Executions that are already running an association when MaxErrors is reached are allowed to
   *    complete, but some of these executions may fail as well. If you need to ensure that there won't
   *    be more than max-errors failed executions, set MaxConcurrency to 1 so that executions proceed one
   *    at a time.</p>
   */
  MaxErrors?: string;

  /**
   * <p>The maximum number of targets allowed to run the association at the same time. You can
   *    specify a number, for example 10, or a percentage of the target set, for example 10%. The default
   *    value is 100%, which means all targets run the association at the same time.</p>
   *          <p>If a new instance starts and attempts to run an association while Systems Manager is running
   *    MaxConcurrency associations, the association is allowed to run. During the next association
   *    interval, the new instance will process its association within the limit specified for
   *    MaxConcurrency.</p>
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
   *    for the <a>PutComplianceItems</a> API action. In this case, compliance data is not
   *    managed by State Manager. It is managed by your direct call to the <a>PutComplianceItems</a> API action.</p>
   *          <p>By default, all associations use <code>AUTO</code> mode.</p>
   */
  SyncCompliance?: AssociationSyncCompliance | string;

  /**
   * <p>By default, when you create a new associations, the system runs it immediately after it is
   *    created and then according to the schedule you specified. Specify this option if you don't want
   *    an association to run immediately after you create it. This parameter is not supported for rate
   *    expressions.</p>
   */
  ApplyOnlyAtCronInterval?: boolean;
}

export namespace CreateAssociationBatchRequestEntry {
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
  Command = "Command",
  DeploymentStrategy = "DeploymentStrategy",
  Package = "Package",
  Policy = "Policy",
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
  export const filterSensitiveLog = (obj: DocumentRequires): any => ({
    ...obj,
  });
}

export interface CreateDocumentRequest {
  /**
   * <p>The content for the new SSM document in JSON or YAML format. We recommend storing the
   *    contents for your new document in an external JSON or YAML file and referencing the file in a
   *    command.</p>
   *          <p>For examples, see the following topics in the <i>AWS Systems Manager User Guide</i>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/create-ssm-document-api.html">Create an SSM document
   *       (AWS API)</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/create-ssm-document-cli.html">Create an SSM document
   *       (AWS CLI)</a>
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
   * <p>A list of SSM documents required by a document. This parameter is used exclusively by AWS
   *    AppConfig. When a user creates an AppConfig configuration in an SSM document, the user must also
   *    specify a required document for validation purposes. In this case, an
   *     <code>ApplicationConfiguration</code> document requires an
   *     <code>ApplicationConfigurationSchema</code> document for validation purposes. For more
   *    information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/appconfig.html">AWS AppConfig</a> in the
   *     <i>AWS Systems Manager User Guide</i>.</p>
   */
  Requires?: DocumentRequires[];

  /**
   * <p>A list of key and value pairs that describe attachments to a version of a document.</p>
   */
  Attachments?: AttachmentsSource[];

  /**
   * <p>A name for the Systems Manager document.</p>
   *          <important>
   *             <p>You can't use the following strings as document name prefixes. These are reserved by AWS
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
   * <p>An optional field specifying the version of the artifact you are creating with the document.
   *    For example, "Release 12, Update 6". This value is unique across all versions of a document, and
   *    cannot be changed.</p>
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
   *    to run a document on EC2 instances, specify the following value: /AWS::EC2::Instance. If you
   *    specify a value of '/' the document can run on all types of resources. If you don't specify a
   *    value, the document can't run on any resources. For a list of valid resource types, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">AWS resource and property types
   *     reference</a> in the <i>AWS CloudFormation User Guide</i>. </p>
   */
  TargetType?: string;

  /**
   * <p>Optional metadata that you assign to a resource. Tags enable you to categorize a resource in
   *    different ways, such as by purpose, owner, or environment. For example, you might want to tag an
   *    SSM document to identify the types of targets or the environment where it will run. In this case,
   *    you could specify the following key name/value pairs:</p>
   *
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
   *     action.</p>
   *          </note>
   */
  Tags?: Tag[];
}

export namespace CreateDocumentRequest {
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
  export const filterSensitiveLog = (obj: DocumentParameter): any => ({
    ...obj,
  });
}

export enum PlatformType {
  LINUX = "Linux",
  WINDOWS = "Windows",
}

export enum DocumentStatus {
  Active = "Active",
  Creating = "Creating",
  Deleting = "Deleting",
  Failed = "Failed",
  Updating = "Updating",
}

/**
 * <p>Describes a Systems Manager document. </p>
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
   * <p>The name of the Systems Manager document.</p>
   */
  Name?: string;

  /**
   * <p>The version of the artifact associated with the document.</p>
   */
  VersionName?: string;

  /**
   * <p>The AWS user account that created the document.</p>
   */
  Owner?: string;

  /**
   * <p>The date when the document was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The status of the Systems Manager document.</p>
   */
  Status?: DocumentStatus | string;

  /**
   * <p>A message returned by AWS Systems Manager that explains the <code>Status</code> value. For example, a
   *     <code>Failed</code> status might be explained by the <code>StatusInformation</code> message,
   *    "The specified S3 bucket does not exist. Verify that the URL of the S3 bucket is correct."</p>
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
   * <p>The list of OS platforms compatible with this Systems Manager document. </p>
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
   *    /AWS::EC2::Instance. For a list of valid resource types, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">AWS resource and property types
   *     reference</a> in the <i>AWS CloudFormation User Guide</i>. </p>
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
}

export namespace DocumentDescription {
  export const filterSensitiveLog = (obj: DocumentDescription): any => ({
    ...obj,
  });
}

export interface CreateDocumentResult {
  /**
   * <p>Information about the Systems Manager document.</p>
   */
  DocumentDescription?: DocumentDescription;
}

export namespace CreateDocumentResult {
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
  export const filterSensitiveLog = (obj: DocumentAlreadyExists): any => ({
    ...obj,
  });
}

/**
 * <p>You can have at most 500 active Systems Manager documents.</p>
 */
export interface DocumentLimitExceeded extends __SmithyException, $MetadataBearer {
  name: "DocumentLimitExceeded";
  $fault: "client";
  Message?: string;
}

export namespace DocumentLimitExceeded {
  export const filterSensitiveLog = (obj: DocumentLimitExceeded): any => ({
    ...obj,
  });
}

/**
 * <p>The content for the document is not valid.</p>
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
  export const filterSensitiveLog = (obj: InvalidDocumentContent): any => ({
    ...obj,
  });
}

/**
 * <p>The version of the document schema is not supported.</p>
 */
export interface InvalidDocumentSchemaVersion extends __SmithyException, $MetadataBearer {
  name: "InvalidDocumentSchemaVersion";
  $fault: "client";
  Message?: string;
}

export namespace InvalidDocumentSchemaVersion {
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
   *    become active. StartDate allows you to delay activation of the maintenance window until the
   *    specified future date.</p>
   */
  StartDate?: string;

  /**
   * <p>The date and time, in ISO-8601 Extended format, for when you want the maintenance window to
   *    become inactive. EndDate allows you to set a date and time in the future when the maintenance
   *    window will no longer run.</p>
   */
  EndDate?: string;

  /**
   * <p>The schedule of the maintenance window in the form of a cron or rate expression.</p>
   */
  Schedule: string | undefined;

  /**
   * <p>The time zone that the scheduled maintenance window executions are based on, in Internet
   *    Assigned Numbers Authority (IANA) format. For example: "America/Los_Angeles", "etc/UTC", or
   *    "Asia/Seoul". For more information, see the <a href="https://www.iana.org/time-zones">Time
   *     Zone Database</a> on the IANA website.</p>
   */
  ScheduleTimezone?: string;

  /**
   * <p>The number of days to wait after the date and time specified by a CRON expression before
   *    running the maintenance window.</p>
   *          <p>For example, the following cron expression schedules a maintenance window to run on the
   *    third Tuesday of every month at 11:30 PM.</p>
   *          <p>
   *             <code>cron(0 30 23 ? * TUE#3 *)</code>
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
   * <p>The number of hours before the end of the maintenance window that Systems Manager stops scheduling new
   *    tasks for execution.</p>
   */
  Cutoff: number | undefined;

  /**
   * <p>Enables a maintenance window task to run on managed instances, even if you have not
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
   *    environment it will run in. In this case, you could specify the following key name/value
   *    pairs:</p>
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
   *     action.</p>
   *          </note>
   */
  Tags?: Tag[];
}

export namespace CreateMaintenanceWindowRequest {
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
  export const filterSensitiveLog = (obj: IdempotentParameterMismatch): any => ({
    ...obj,
  });
}

/**
 * <p>Error returned when the caller has exceeded the default resource quotas. For example, too
 *    many maintenance windows or patch baselines have been created.</p>
 *          <p>For information about resource quotas in Systems Manager, see <a href="http://docs.aws.amazon.com/general/latest/gr/ssm.html#limits_ssm">Systems Manager service quotas</a> in the
 *         <i>AWS General Reference</i>.</p>
 */
export interface ResourceLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "ResourceLimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceLimitExceededException {
  export const filterSensitiveLog = (obj: ResourceLimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>A notification about the OpsItem.</p>
 */
export interface OpsItemNotification {
  /**
   * <p>The Amazon Resource Name (ARN) of an SNS topic where notifications are sent when this
   *    OpsItem is edited or changed.</p>
   */
  Arn?: string;
}

export namespace OpsItemNotification {
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
   * <p>Operational data is custom data that provides useful reference details about the OpsItem.
   *    For example, you can specify log files, error strings, license keys, troubleshooting tips, or
   *    other relevant data. You enter operational data as key-value pairs. The key has a maximum length
   *    of 128 characters. The value has a maximum size of 20 KB.</p>
   *          <important>
   *             <p>Operational data keys <i>can't</i> begin with the following: amazon, aws,
   *     amzn, ssm, /amazon, /aws, /amzn, /ssm.</p>
   *          </important>
   *          <p>You can choose to make the data searchable by other users in the account or you can restrict
   *    search access. Searchable data means that all users with access to the OpsItem Overview page (as
   *    provided by the <a>DescribeOpsItems</a> API action) can view and search on the
   *    specified data. Operational data that is not searchable is only viewable by users who have access
   *    to the OpsItem (as provided by the <a>GetOpsItem</a> API action).</p>
   *
   *          <p>Use the <code>/aws/resources</code> key in OperationalData to specify a related resource in
   *    the request. Use the <code>/aws/automations</code> key in OperationalData to associate an
   *    Automation runbook with the OpsItem. To view AWS CLI example commands that use these keys, see
   *     <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-creating-OpsItems.html#OpsCenter-manually-create-OpsItems">Creating OpsItems manually</a> in the <i>AWS Systems Manager User Guide</i>.</p>
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
   *             <p>The source name can't contain the following strings: aws, amazon, and amzn. </p>
   *          </note>
   */
  Source: string | undefined;

  /**
   * <p>A short heading that describes the nature of the OpsItem and the impacted resource.</p>
   */
  Title: string | undefined;

  /**
   * <p>Optional metadata that you assign to a resource. You can restrict access to OpsItems by
   *    using an inline IAM policy that specifies tags. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html#OpsCenter-getting-started-user-permissions">Getting started with OpsCenter</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   *          <p>Tags use a key-value pair. For example:</p>
   *
   *          <p>
   *             <code>Key=Department,Value=Finance</code>
   *          </p>
   *
   *          <note>
   *             <p>To add tags to an existing OpsItem, use the <a>AddTagsToResource</a>
   *     action.</p>
   *          </note>
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
}

export namespace CreateOpsItemRequest {
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
  export const filterSensitiveLog = (obj: OpsItemAlreadyExistsException): any => ({
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
  export const filterSensitiveLog = (obj: OpsItemLimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>Metadata to assign to an AppManager application.</p>
 */
export interface MetadataValue {
  /**
   * <p>Metadata value to assign to an AppManager application.</p>
   */
  Value?: string;
}

export namespace MetadataValue {
  export const filterSensitiveLog = (obj: MetadataValue): any => ({
    ...obj,
  });
}

export interface CreateOpsMetadataRequest {
  /**
   * <p>A resource ID for a new AppManager application.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>Metadata for a new AppManager application. </p>
   */
  Metadata?: { [key: string]: MetadataValue };
}

export namespace CreateOpsMetadataRequest {
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
  export const filterSensitiveLog = (obj: OpsMetadataInvalidArgumentException): any => ({
    ...obj,
  });
}

/**
 * <p>Your account reached the maximum number of OpsMetadata objects allowed by AppManager. The
 *    maximum is 200 OpsMetadata objects. Delete one or more OpsMetadata object and try again.</p>
 */
export interface OpsMetadataLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "OpsMetadataLimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace OpsMetadataLimitExceededException {
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
 *    For example, the available filter keys for WINDOWS are PATCH_SET, PRODUCT, PRODUCT_FAMILY,
 *    CLASSIFICATION, and MSRC_SEVERITY. The filter values define a matching criterion for the patch
 *    property indicated by the key. For example, if the filter key is PRODUCT and the filter values
 *    are ["Office 2013", "Office 2016"], then the filter accepts all patches where product name is
 *    either "Office 2013" or "Office 2016". The filter values can be exact values for the patch
 *    property given as a key, or a wildcard (*), which matches all values.</p>
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
   *    patches are approved seven days after they are released. Not supported on Ubuntu Server.</p>
   */
  ApproveAfterDays?: number;

  /**
   * <p>The cutoff date for auto approval of released patches. Any patches released on or before
   *    this date are installed automatically. Not supported on Ubuntu Server.</p>
   *          <p>Enter dates in the format <code>YYYY-MM-DD</code>. For example,
   *    <code>2020-12-31</code>.</p>
   */
  ApproveUntilDate?: string;

  /**
   * <p>For instances identified by the approval rule filters, enables a patch baseline to apply
   *    non-security updates available in the specified repository. The default value is 'false'. Applies
   *    to Linux instances only.</p>
   */
  EnableNonSecurity?: boolean;
}

export namespace PatchRule {
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
   *             <code>cachedir=/var/cache/yum/$basesearch$releasever</code>
   *          </p>
   *          <p>
   *             <code>keepcache=0</code>
   *          </p>
   *          <p>
   *             <code>debuglevel=2</code>
   *          </p>
   */
  Configuration: string | undefined;
}

export namespace PatchSource {
  export const filterSensitiveLog = (obj: PatchSource): any => ({
    ...obj,
    ...(obj.Configuration && { Configuration: SENSITIVE_STRING }),
  });
}

export interface CreatePatchBaselineRequest {
  /**
   * <p>Defines the operating system the patch baseline applies to. The Default value is
   *    WINDOWS.</p>
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
   *                         package name formats for approved and rejected patch lists</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   */
  ApprovedPatches?: string[];

  /**
   * <p>Defines the compliance level for approved patches. This means that if an approved patch is
   *    reported as missing, this is the severity of the compliance violation. The default value is
   *    UNSPECIFIED.</p>
   */
  ApprovedPatchesComplianceLevel?: PatchComplianceLevel | string;

  /**
   * <p>Indicates whether the list of approved patches includes non-security updates that should be
   *    applied to the instances. The default value is 'false'. Applies to Linux instances only.</p>
   */
  ApprovedPatchesEnableNonSecurity?: boolean;

  /**
   * <p>A list of explicitly rejected patches for the baseline.</p>
   *          <p>For information about accepted formats for lists of approved patches and rejected patches,
   *                         see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-approved-rejected-package-name-formats.html">About
   *                         package name formats for approved and rejected patch lists</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   */
  RejectedPatches?: string[];

  /**
   * <p>The action for Patch Manager to take on patches included in the RejectedPackages
   *    list.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>ALLOW_AS_DEPENDENCY</b>: A package in the Rejected patches
   *      list is installed only if it is a dependency of another package. It is considered compliant
   *      with the patch baseline, and its status is reported as <i>InstalledOther</i>.
   *      This is the default action if no option is specified.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>BLOCK</b>: Packages in the RejectedPatches list, and packages
   *      that include them as dependencies, are not installed under any circumstances. If a package was
   *      installed before it was added to the Rejected patches list, it is considered non-compliant with
   *      the patch baseline, and its status is reported as
   *      <i>InstalledRejected</i>.</p>
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
   *    family it applies to. In this case, you could specify the following key name/value pairs:</p>
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
   *     action.</p>
   *          </note>
   */
  Tags?: Tag[];
}

export namespace CreatePatchBaselineRequest {
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
  export const filterSensitiveLog = (obj: CreatePatchBaselineResult): any => ({
    ...obj,
  });
}

/**
 * <p>Synchronize Systems Manager Inventory data from multiple AWS accounts defined in AWS Organizations to
 *    a centralized S3 bucket. Data is synchronized to individual key prefixes in the central bucket.
 *    Each key prefix represents a different AWS account ID.</p>
 */
export interface ResourceDataSyncDestinationDataSharing {
  /**
   * <p>The sharing data type. Only <code>Organization</code> is supported.</p>
   */
  DestinationDataSharingType?: string;
}

export namespace ResourceDataSyncDestinationDataSharing {
  export const filterSensitiveLog = (obj: ResourceDataSyncDestinationDataSharing): any => ({
    ...obj,
  });
}

export enum ResourceDataSyncS3Format {
  JSON_SERDE = "JsonSerDe",
}

/**
 * <p>Information about the target S3 bucket for the Resource Data Sync.</p>
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
   * <p>The AWS Region with the S3 bucket targeted by the Resource Data Sync.</p>
   */
  Region: string | undefined;

  /**
   * <p>The ARN of an encryption key for a destination in Amazon S3. Must belong to the same Region as
   *    the destination S3 bucket.</p>
   */
  AWSKMSKeyARN?: string;

  /**
   * <p>Enables destination data sharing. By default, this field is <code>null</code>.</p>
   */
  DestinationDataSharing?: ResourceDataSyncDestinationDataSharing;
}

export namespace ResourceDataSyncS3Destination {
  export const filterSensitiveLog = (obj: ResourceDataSyncS3Destination): any => ({
    ...obj,
  });
}

/**
 * <p>The AWS Organizations organizational unit data source for the sync.</p>
 */
export interface ResourceDataSyncOrganizationalUnit {
  /**
   * <p>The AWS Organization unit ID data source for the sync.</p>
   */
  OrganizationalUnitId?: string;
}

export namespace ResourceDataSyncOrganizationalUnit {
  export const filterSensitiveLog = (obj: ResourceDataSyncOrganizationalUnit): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the AwsOrganizationsSource resource data sync source. A sync source of
 *    this type can synchronize data from AWS Organizations or, if an AWS Organization is not present, from
 *    multiple AWS Regions.</p>
 */
export interface ResourceDataSyncAwsOrganizationsSource {
  /**
   * <p>If an AWS Organization is present, this is either <code>OrganizationalUnits</code> or
   *     <code>EntireOrganization</code>. For <code>OrganizationalUnits</code>, the data is aggregated
   *    from a set of organization units. For <code>EntireOrganization</code>, the data is aggregated
   *    from the entire AWS Organization. </p>
   */
  OrganizationSourceType: string | undefined;

  /**
   * <p>The AWS Organizations organization units included in the sync.</p>
   */
  OrganizationalUnits?: ResourceDataSyncOrganizationalUnit[];
}

export namespace ResourceDataSyncAwsOrganizationsSource {
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
   *     <code>AwsOrganizations</code> (if an organization is present in AWS Organizations) or
   *     <code>singleAccountMultiRegions</code>.</p>
   */
  SourceType: string | undefined;

  /**
   * <p>Information about the AwsOrganizationsSource resource data sync source. A sync source of
   *    this type can synchronize data from AWS Organizations.</p>
   */
  AwsOrganizationsSource?: ResourceDataSyncAwsOrganizationsSource;

  /**
   * <p>The <code>SyncSource</code> AWS Regions included in the resource data sync.</p>
   */
  SourceRegions: string[] | undefined;

  /**
   * <p>Whether to automatically synchronize and aggregate data from new AWS Regions when those
   *    Regions come online.</p>
   */
  IncludeFutureRegions?: boolean;
}

export namespace ResourceDataSyncSource {
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
   *    from a single account and multiple Regions, or multiple AWS accounts and Regions, as listed in
   *    AWS Organizations for Explorer. If you specify <code>SyncFromSource</code>, you must provide a value for
   *     <code>SyncSource</code>. The default value is <code>SyncToDestination</code>.</p>
   */
  SyncType?: string;

  /**
   * <p>Specify information about the data sources to synchronize. This parameter is required if the
   *     <code>SyncType</code> value is SyncFromSource.</p>
   */
  SyncSource?: ResourceDataSyncSource;
}

export namespace CreateResourceDataSyncRequest {
  export const filterSensitiveLog = (obj: CreateResourceDataSyncRequest): any => ({
    ...obj,
  });
}

export interface CreateResourceDataSyncResult {}

export namespace CreateResourceDataSyncResult {
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
  export const filterSensitiveLog = (obj: DeleteActivationRequest): any => ({
    ...obj,
  });
}

export interface DeleteActivationResult {}

export namespace DeleteActivationResult {
  export const filterSensitiveLog = (obj: DeleteActivationResult): any => ({
    ...obj,
  });
}

/**
 * <p>The activation is not valid. The activation might have been deleted, or the ActivationId and
 *    the ActivationCode do not match.</p>
 */
export interface InvalidActivation extends __SmithyException, $MetadataBearer {
  name: "InvalidActivation";
  $fault: "client";
  Message?: string;
}

export namespace InvalidActivation {
  export const filterSensitiveLog = (obj: InvalidActivation): any => ({
    ...obj,
  });
}

/**
 * <p>The activation ID is not valid. Verify the you entered the correct ActivationId or
 *    ActivationCode and try again.</p>
 */
export interface InvalidActivationId extends __SmithyException, $MetadataBearer {
  name: "InvalidActivationId";
  $fault: "client";
  Message?: string;
}

export namespace InvalidActivationId {
  export const filterSensitiveLog = (obj: InvalidActivationId): any => ({
    ...obj,
  });
}

/**
 * <p>The specified association does not exist.</p>
 */
export interface AssociationDoesNotExist extends __SmithyException, $MetadataBearer {
  name: "AssociationDoesNotExist";
  $fault: "client";
  Message?: string;
}

export namespace AssociationDoesNotExist {
  export const filterSensitiveLog = (obj: AssociationDoesNotExist): any => ({
    ...obj,
  });
}

export interface DeleteAssociationRequest {
  /**
   * <p>The name of the Systems Manager document.</p>
   */
  Name?: string;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The association ID that you want to delete.</p>
   */
  AssociationId?: string;
}

export namespace DeleteAssociationRequest {
  export const filterSensitiveLog = (obj: DeleteAssociationRequest): any => ({
    ...obj,
  });
}

export interface DeleteAssociationResult {}

export namespace DeleteAssociationResult {
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
   *     <code>Force</code> flag in an AWS Identity and Access Management (IAM) policy.</p>
   */
  Force?: boolean;
}

export namespace DeleteDocumentRequest {
  export const filterSensitiveLog = (obj: DeleteDocumentRequest): any => ({
    ...obj,
  });
}

export interface DeleteDocumentResult {}

export namespace DeleteDocumentResult {
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
   *     <code>PutInventory</code> action for a version greater than the disabled version.</p>
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
  export const filterSensitiveLog = (obj: InventoryDeletionSummaryItem): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the delete operation.</p>
 */
export interface InventoryDeletionSummary {
  /**
   * <p>The total number of items to delete. This count does not change during the delete
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
  export const filterSensitiveLog = (obj: InventoryDeletionSummary): any => ({
    ...obj,
  });
}

export interface DeleteInventoryResult {
  /**
   * <p>Every <code>DeleteInventory</code> action is assigned a unique ID. This option returns a
   *    unique ID. You can use this ID to query the status of a delete operation. This option is useful
   *    for ensuring that a delete operation has completed before you begin other actions. </p>
   */
  DeletionId?: string;

  /**
   * <p>The name of the inventory data type specified in the request.</p>
   */
  TypeName?: string;

  /**
   * <p>A summary of the delete operation. For more information about this summary, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-inventory-custom.html#sysman-inventory-delete-summary">Deleting custom inventory</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   */
  DeletionSummary?: InventoryDeletionSummary;
}

export namespace DeleteInventoryResult {
  export const filterSensitiveLog = (obj: DeleteInventoryResult): any => ({
    ...obj,
  });
}

/**
 * <p>One or more of the parameters specified for the delete operation is not valid. Verify all
 *    parameters and try again.</p>
 */
export interface InvalidDeleteInventoryParametersException extends __SmithyException, $MetadataBearer {
  name: "InvalidDeleteInventoryParametersException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidDeleteInventoryParametersException {
  export const filterSensitiveLog = (obj: InvalidDeleteInventoryParametersException): any => ({
    ...obj,
  });
}

/**
 * <p>The request is not valid.</p>
 */
export interface InvalidInventoryRequestException extends __SmithyException, $MetadataBearer {
  name: "InvalidInventoryRequestException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidInventoryRequestException {
  export const filterSensitiveLog = (obj: InvalidInventoryRequestException): any => ({
    ...obj,
  });
}

/**
 * <p>The delete inventory option specified is not valid. Verify the option and try again.</p>
 */
export interface InvalidOptionException extends __SmithyException, $MetadataBearer {
  name: "InvalidOptionException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidOptionException {
  export const filterSensitiveLog = (obj: InvalidOptionException): any => ({
    ...obj,
  });
}

/**
 * <p>The parameter type name is not valid.</p>
 */
export interface InvalidTypeNameException extends __SmithyException, $MetadataBearer {
  name: "InvalidTypeNameException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidTypeNameException {
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
  export const filterSensitiveLog = (obj: DeleteOpsMetadataRequest): any => ({
    ...obj,
  });
}

export interface DeleteOpsMetadataResult {}

export namespace DeleteOpsMetadataResult {
  export const filterSensitiveLog = (obj: DeleteOpsMetadataResult): any => ({
    ...obj,
  });
}

/**
 * <p>The OpsMetadata object does not exist. </p>
 */
export interface OpsMetadataNotFoundException extends __SmithyException, $MetadataBearer {
  name: "OpsMetadataNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace OpsMetadataNotFoundException {
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
  export const filterSensitiveLog = (obj: DeleteParameterRequest): any => ({
    ...obj,
  });
}

export interface DeleteParameterResult {}

export namespace DeleteParameterResult {
  export const filterSensitiveLog = (obj: DeleteParameterResult): any => ({
    ...obj,
  });
}

/**
 * <p>The parameter could not be found. Verify the name and try again.</p>
 */
export interface ParameterNotFound extends __SmithyException, $MetadataBearer {
  name: "ParameterNotFound";
  $fault: "client";
  message?: string;
}

export namespace ParameterNotFound {
  export const filterSensitiveLog = (obj: ParameterNotFound): any => ({
    ...obj,
  });
}

export interface DeleteParametersRequest {
  /**
   * <p>The names of the parameters to delete.</p>
   */
  Names: string[] | undefined;
}

export namespace DeleteParametersRequest {
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
   * <p>The names of parameters that weren't deleted because the parameters are not valid.</p>
   */
  InvalidParameters?: string[];
}

export namespace DeleteParametersResult {
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
  export const filterSensitiveLog = (obj: DeleteResourceDataSyncRequest): any => ({
    ...obj,
  });
}

export interface DeleteResourceDataSyncResult {}

export namespace DeleteResourceDataSyncResult {
  export const filterSensitiveLog = (obj: DeleteResourceDataSyncResult): any => ({
    ...obj,
  });
}

/**
 * <p>The specified sync name was not found.</p>
 */
export interface ResourceDataSyncNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceDataSyncNotFoundException";
  $fault: "client";
  SyncName?: string;
  SyncType?: string;
  Message?: string;
}

export namespace ResourceDataSyncNotFoundException {
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
  export const filterSensitiveLog = (obj: DeregisterManagedInstanceRequest): any => ({
    ...obj,
  });
}

export interface DeregisterManagedInstanceResult {}

export namespace DeregisterManagedInstanceResult {
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
   *    referenced, the system returns an error and does not deregister the target from the maintenance
   *    window.</p>
   */
  Safe?: boolean;
}

export namespace DeregisterTargetFromMaintenanceWindowRequest {
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
  export const filterSensitiveLog = (obj: DescribeActivationsRequest): any => ({
    ...obj,
  });
}

export interface DescribeActivationsResult {
  /**
   * <p>A list of activations for your AWS account.</p>
   */
  ActivationList?: Activation[];

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *    results. </p>
   */
  NextToken?: string;
}

export namespace DescribeActivationsResult {
  export const filterSensitiveLog = (obj: DescribeActivationsResult): any => ({
    ...obj,
  });
}

/**
 * <p>The filter name is not valid. Verify the you entered the correct name and try again.</p>
 */
export interface InvalidFilter extends __SmithyException, $MetadataBearer {
  name: "InvalidFilter";
  $fault: "client";
  Message?: string;
}

export namespace InvalidFilter {
  export const filterSensitiveLog = (obj: InvalidFilter): any => ({
    ...obj,
  });
}

/**
 * <p>The specified token is not valid.</p>
 */
export interface InvalidNextToken extends __SmithyException, $MetadataBearer {
  name: "InvalidNextToken";
  $fault: "client";
  Message?: string;
}

export namespace InvalidNextToken {
  export const filterSensitiveLog = (obj: InvalidNextToken): any => ({
    ...obj,
  });
}

export interface DescribeAssociationRequest {
  /**
   * <p>The name of the Systems Manager document.</p>
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
  export const filterSensitiveLog = (obj: DescribeAssociationResult): any => ({
    ...obj,
  });
}

/**
 * <p>The version you specified is not valid. Use ListAssociationVersions to view all versions of
 *    an association according to the association ID. Or, use the <code>$LATEST</code> parameter to
 *    view the latest version of the association.</p>
 */
export interface InvalidAssociationVersion extends __SmithyException, $MetadataBearer {
  name: "InvalidAssociationVersion";
  $fault: "client";
  Message?: string;
}

export namespace InvalidAssociationVersion {
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
  export const filterSensitiveLog = (obj: DescribeAssociationExecutionsResult): any => ({
    ...obj,
  });
}

/**
 * <p>The specified execution ID does not exist. Verify the ID number and try again.</p>
 */
export interface AssociationExecutionDoesNotExist extends __SmithyException, $MetadataBearer {
  name: "AssociationExecutionDoesNotExist";
  $fault: "client";
  Message?: string;
}

export namespace AssociationExecutionDoesNotExist {
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
   * <p>The type of source where the association execution details are stored, for example,
   *    Amazon S3.</p>
   */
  OutputSourceType?: string;
}

export namespace OutputSource {
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
  export const filterSensitiveLog = (obj: DescribeAssociationExecutionTargetsResult): any => ({
    ...obj,
  });
}

export enum AutomationExecutionFilterKey {
  AUTOMATION_TYPE = "AutomationType",
  CURRENT_ACTION = "CurrentAction",
  DOCUMENT_NAME_PREFIX = "DocumentNamePrefix",
  EXECUTION_ID = "ExecutionId",
  EXECUTION_STATUS = "ExecutionStatus",
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
   * <p>One or more keys to limit the results. Valid filter keys include the following:
   *    DocumentNamePrefix, ExecutionStatus, ExecutionId, ParentExecutionId, CurrentAction,
   *    StartTimeBefore, StartTimeAfter, TargetResourceGroup.</p>
   */
  Key: AutomationExecutionFilterKey | string | undefined;

  /**
   * <p>The values used to limit the execution information associated with the filter's key.</p>
   */
  Values: string[] | undefined;
}

export namespace AutomationExecutionFilter {
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
  export const filterSensitiveLog = (obj: DescribeAutomationExecutionsRequest): any => ({
    ...obj,
  });
}

export enum AutomationExecutionStatus {
  CANCELLED = "Cancelled",
  CANCELLING = "Cancelling",
  FAILED = "Failed",
  INPROGRESS = "InProgress",
  PENDING = "Pending",
  SUCCESS = "Success",
  TIMEDOUT = "TimedOut",
  WAITING = "Waiting",
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
  export const filterSensitiveLog = (obj: ResolvedTargets): any => ({
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
   * <p>The name of the Automation document used during execution.</p>
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
   * <p>The time the execution finished. This is not populated if the execution is still in
   *    progress.</p>
   */
  ExecutionEndTime?: Date;

  /**
   * <p>The IAM role ARN of the user who ran the Automation.</p>
   */
  ExecutedBy?: string;

  /**
   * <p>An S3 bucket where execution information is stored.</p>
   */
  LogFile?: string;

  /**
   * <p>The list of execution outputs as defined in the Automation document.</p>
   */
  Outputs?: { [key: string]: string[] };

  /**
   * <p>The Automation execution mode.</p>
   */
  Mode?: ExecutionMode | string;

  /**
   * <p>The ExecutionId of the parent Automation.</p>
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
   * <p>The list of execution outputs as defined in the Automation document.</p>
   */
  FailureMessage?: string;

  /**
   * <p>The list of execution outputs as defined in the Automation document.</p>
   */
  TargetParameterName?: string;

  /**
   * <p>The targets defined by the user when starting the Automation.</p>
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
   * <p>The MaxConcurrency value specified by the user when starting the Automation.</p>
   */
  MaxConcurrency?: string;

  /**
   * <p>The MaxErrors value specified by the user when starting the Automation.</p>
   */
  MaxErrors?: string;

  /**
   * <p>The list of execution outputs as defined in the Automation document.</p>
   */
  Target?: string;

  /**
   * <p>Use this filter with <a>DescribeAutomationExecutions</a>. Specify either Local or
   *    CrossAccount. CrossAccount is an Automation that runs in multiple AWS Regions and accounts. For
   *    more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-automation-multiple-accounts-and-regions.html">Running Automation workflows in multiple AWS Regions and accounts</a> in the
   *     <i>AWS Systems Manager User Guide</i>. </p>
   */
  AutomationType?: AutomationType | string;
}

export namespace AutomationExecutionMetadata {
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
  export const filterSensitiveLog = (obj: DescribeAutomationExecutionsResult): any => ({
    ...obj,
  });
}

/**
 * <p>The specified key is not valid.</p>
 */
export interface InvalidFilterKey extends __SmithyException, $MetadataBearer {
  name: "InvalidFilterKey";
  $fault: "client";
}

export namespace InvalidFilterKey {
  export const filterSensitiveLog = (obj: InvalidFilterKey): any => ({
    ...obj,
  });
}

/**
 * <p>The filter value is not valid. Verify the value and try again.</p>
 */
export interface InvalidFilterValue extends __SmithyException, $MetadataBearer {
  name: "InvalidFilterValue";
  $fault: "client";
  Message?: string;
}

export namespace InvalidFilterValue {
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
   * <p>A boolean that indicates whether to list step executions in reverse order by start time. The
   *    default value is false.</p>
   */
  ReverseOrder?: boolean;
}

export namespace DescribeAutomationStepExecutionsRequest {
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
  export const filterSensitiveLog = (obj: FailureDetails): any => ({
    ...obj,
  });
}

/**
 * <p>The combination of AWS Regions and accounts targeted by the current Automation
 *    execution.</p>
 */
export interface TargetLocation {
  /**
   * <p>The AWS accounts targeted by the current Automation execution.</p>
   */
  Accounts?: string[];

  /**
   * <p>The AWS Regions targeted by the current Automation execution.</p>
   */
  Regions?: string[];

  /**
   * <p>The maximum number of AWS accounts and AWS regions allowed to run the Automation
   *    concurrently </p>
   */
  TargetLocationMaxConcurrency?: string;

  /**
   * <p>The maximum number of errors allowed before the system stops queueing additional Automation
   *    executions for the currently running Automation. </p>
   */
  TargetLocationMaxErrors?: string;

  /**
   * <p>The Automation execution role used by the currently running Automation.</p>
   */
  ExecutionRoleName?: string;
}

export namespace TargetLocation {
  export const filterSensitiveLog = (obj: TargetLocation): any => ({
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
   * <p>The action to take if the step fails. The default value is Abort.</p>
   */
  OnFailure?: string;

  /**
   * <p>The maximum number of tries to run the action of the step. The default value is 1.</p>
   */
  MaxAttempts?: number;

  /**
   * <p>If a step has begun execution, this contains the time the step started. If the step is in
   *    Pending status, this field is not populated.</p>
   */
  ExecutionStartTime?: Date;

  /**
   * <p>If a step has finished execution, this contains the time the execution ended. If the step
   *    has not yet concluded, this field is not populated.</p>
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
   * <p>The combination of AWS Regions and accounts targeted by the current Automation
   *    execution.</p>
   */
  TargetLocation?: TargetLocation;
}

export namespace StepExecution {
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
  export const filterSensitiveLog = (obj: DescribeAutomationStepExecutionsResult): any => ({
    ...obj,
  });
}

/**
 * <p>Defines a filter used in Patch Manager APIs.</p>
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
  export const filterSensitiveLog = (obj: PatchOrchestratorFilter): any => ({
    ...obj,
  });
}

export interface DescribeAvailablePatchesRequest {
  /**
   * <p>Filters used to scope down the returned patches.</p>
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
   *             <p>This ID is not the same as the Microsoft Knowledge Base ID.</p>
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
  export const filterSensitiveLog = (obj: DescribeAvailablePatchesResult): any => ({
    ...obj,
  });
}

export interface DescribeDocumentRequest {
  /**
   * <p>The name of the Systems Manager document.</p>
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
   *    cannot be changed.</p>
   */
  VersionName?: string;
}

export namespace DescribeDocumentRequest {
  export const filterSensitiveLog = (obj: DescribeDocumentRequest): any => ({
    ...obj,
  });
}

export interface DescribeDocumentResult {
  /**
   * <p>Information about the Systems Manager document.</p>
   */
  Document?: DocumentDescription;
}

export namespace DescribeDocumentResult {
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
}

export namespace DescribeDocumentPermissionRequest {
  export const filterSensitiveLog = (obj: DescribeDocumentPermissionRequest): any => ({
    ...obj,
  });
}

export interface DescribeDocumentPermissionResponse {
  /**
   * <p>The account IDs that have permission to use this document. The ID can be either an AWS
   *    account or <i>All</i>.</p>
   */
  AccountIds?: string[];

  /**
   * <p>A list of AWS accounts where the current document is shared and the version shared with each
   *    account.</p>
   */
  AccountSharingInfoList?: AccountSharingInfo[];
}

export namespace DescribeDocumentPermissionResponse {
  export const filterSensitiveLog = (obj: DescribeDocumentPermissionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The permission type is not supported. <i>Share</i> is the only supported
 *    permission type.</p>
 */
export interface InvalidPermissionType extends __SmithyException, $MetadataBearer {
  name: "InvalidPermissionType";
  $fault: "client";
  Message?: string;
}

export namespace InvalidPermissionType {
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
   * <p>The approval status of a patch (APPROVED, PENDING_APPROVAL, EXPLICIT_APPROVED,
   *    EXPLICIT_REJECTED).</p>
   */
  DeploymentStatus?: PatchDeploymentStatus | string;

  /**
   * <p>The compliance severity level for a patch.</p>
   */
  ComplianceLevel?: PatchComplianceLevel | string;

  /**
   * <p>The date the patch was approved (or will be approved if the status is
   *    PENDING_APPROVAL).</p>
   */
  ApprovalDate?: Date;
}

export namespace PatchStatus {
  export const filterSensitiveLog = (obj: PatchStatus): any => ({
    ...obj,
  });
}

/**
 * <p>The EffectivePatch structure defines metadata about a patch along with the approval state of
 *    the patch in a particular patch baseline. The approval state includes information about whether
 *    the patch is currently approved, due to be approved by a rule, explicitly approved, or explicitly
 *    rejected and the date the patch was or will be approved.</p>
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
  export const filterSensitiveLog = (obj: DescribeEffectivePatchesForPatchBaselineResult): any => ({
    ...obj,
  });
}

/**
 * <p>The operating systems you specified is not supported, or the operation is not supported for
 *    the operating system.</p>
 */
export interface UnsupportedOperatingSystem extends __SmithyException, $MetadataBearer {
  name: "UnsupportedOperatingSystem";
  $fault: "client";
  Message?: string;
}

export namespace UnsupportedOperatingSystem {
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
  export const filterSensitiveLog = (obj: DescribeInstanceAssociationsStatusRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A URL for the S3 bucket where you want to store the results of this request.</p>
 */
export interface S3OutputUrl {
  /**
   * <p>A URL for an S3 bucket where you want to store the results of this request.</p>
   */
  OutputUrl?: string;
}

export namespace S3OutputUrl {
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
   */
  Key: string | undefined;

  /**
   * <p>The filter values.</p>
   */
  Values: string[] | undefined;
}

export namespace InstanceInformationStringFilter {
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
 *          <p>Use this action instead of the <a>DescribeInstanceInformationRequest$InstanceInformationFilterList</a> method. The
 *     <code>InstanceInformationFilterList</code> method is a legacy method and does not support tags.
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
   * <p>The date and time when agent last pinged Systems Manager service. </p>
   */
  LastPingDateTime?: Date;

  /**
   * <p>The version of SSM Agent running on your Linux instance. </p>
   */
  AgentVersion?: string;

  /**
   * <p>Indicates whether the latest version of SSM Agent is running on your Linux Managed Instance.
   *    This field does not indicate whether or not the latest version is installed on Windows managed
   *    instances, because some older versions of Windows Server use the EC2Config service to process SSM
   *    requests.</p>
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
   * <p>The activation ID created by Systems Manager when the server or VM was registered.</p>
   */
  ActivationId?: string;

  /**
   * <p>The Amazon Identity and Access Management (IAM) role assigned to the on-premises Systems Manager
   *    managed instance. This call does not return the IAM role for EC2 instances. To retrieve the IAM
   *    role for an EC2 instance, use the Amazon EC2 <code>DescribeInstances</code> action. For information,
   *    see <a href="http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstances.html">DescribeInstances</a> in the
   *     <i>Amazon EC2 API Reference</i> or <a href="http://docs.aws.amazon.com/cli/latest/reference/ec2/describe-instances.html">describe-instances</a> in the <i>AWS CLI Command Reference</i>.</p>
   */
  IamRole?: string;

  /**
   * <p>The date the server or VM was registered with AWS as a managed instance.</p>
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
   *    explained in <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-install-managed-linux.html">Install SSM Agent for a
   *     hybrid environment (Linux)</a> and <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-install-managed-win.html">Install SSM Agent for a hybrid environment
   *     (Windows)</a>. To retrieve the Name tag of an EC2 instance, use the Amazon EC2
   *     <code>DescribeInstances</code> action. For information, see <a href="http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstances.html">DescribeInstances</a> in the
   *     <i>Amazon EC2 API Reference</i> or <a href="http://docs.aws.amazon.com/cli/latest/reference/ec2/describe-instances.html">describe-instances</a> in the <i>AWS CLI Command Reference</i>.</p>
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
  export const filterSensitiveLog = (obj: DescribeInstanceInformationResult): any => ({
    ...obj,
  });
}

/**
 * <p>The specified filter value is not valid.</p>
 */
export interface InvalidInstanceInformationFilterValue extends __SmithyException, $MetadataBearer {
  name: "InvalidInstanceInformationFilterValue";
  $fault: "client";
  message?: string;
}

export namespace InvalidInstanceInformationFilterValue {
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
   * <p>An array of structures. Each entry in the array is a structure containing a Key, Value
   *    combination. Valid values for Key are <code>Classification</code> | <code>KBId</code> |
   *     <code>Severity</code> | <code>State</code>.</p>
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
   * <p>The classification of the patch (for example, SecurityUpdates, Updates,
   *    CriticalUpdates).</p>
   */
  Classification: string | undefined;

  /**
   * <p>The severity of the patch (for example, Critical, Important, Moderate).</p>
   */
  Severity: string | undefined;

  /**
   * <p>The state of the patch on the instance, such as INSTALLED or FAILED.</p>
   *          <p>For descriptions of each patch state, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-compliance-about.html#sysman-compliance-monitor-patch">About patch compliance</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   */
  State: PatchComplianceDataState | string | undefined;

  /**
   * <p>The date/time the patch was installed on the instance. Note that not all operating systems
   *    provide this level of information.</p>
   */
  InstalledTime: Date | undefined;

  /**
   * <p>The IDs of one or more Common Vulnerabilities and Exposure (CVE) issues that are resolved by
   *    the patch.</p>
   */
  CVEIds?: string;
}

export namespace PatchComplianceData {
  export const filterSensitiveLog = (obj: PatchComplianceData): any => ({
    ...obj,
  });
}

export interface DescribeInstancePatchesResult {
  /**
   * <p>Each entry in the array is a structure containing:</p>
   *          <p>Title (string)</p>
   *          <p>KBId (string)</p>
   *          <p>Classification (string)</p>
   *          <p>Severity (string)</p>
   *          <p>State (string, such as "INSTALLED" or "FAILED")</p>
   *          <p>InstalledTime (DateTime)</p>
   *          <p>InstalledBy (string)</p>
   */
  Patches?: PatchComplianceData[];

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   */
  NextToken?: string;
}

export namespace DescribeInstancePatchesResult {
  export const filterSensitiveLog = (obj: DescribeInstancePatchesResult): any => ({
    ...obj,
  });
}

export interface DescribeInstancePatchStatesRequest {
  /**
   * <p>The ID of the instance whose patch state information should be retrieved.</p>
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
   * <p>An https URL or an Amazon S3 path-style URL to a list of patches to be installed. This patch
   *    installation list, which you maintain in an S3 bucket in YAML format and specify in the SSM
   *    document <code>AWS-RunPatchBaseline</code>, overrides the patches specified by the default patch
   *    baseline.</p>
   *          <p>For more information about the <code>InstallOverrideList</code> parameter, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-about-aws-runpatchbaseline.html">About the
   *     SSM document AWS-RunPatchBaseline</a> in the <i>AWS Systems Manager User Guide</i>.</p>
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
   *     <code>RejectedPatches</code> list. Patches with a status of
   *     <i>InstalledRejected</i> were typically installed before they were added to a
   *     <code>RejectedPatches</code> list.</p>
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
   * <p>The number of patches beyond the supported limit of <code>NotApplicableCount</code> that are
   *    not reported by name to Systems Manager Inventory.</p>
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
   * <p>The type of patching operation that was performed: <code>SCAN</code> (assess patch
   *    compliance state) or <code>INSTALL</code> (install missing patches).</p>
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
   *             <p>Reboot options apply to <code>Install</code> operations only. Reboots are not attempted for
   *     Patch Manager <code>Scan</code> operations.</p>
   *          </note>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>RebootIfNeeded</b>: Patch Manager tries to reboot the
   *      instance if it installed any patches, or if any patches are detected with a status of
   *       <code>InstalledPendingReboot</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>NoReboot</b>: Patch Manager attempts to install missing
   *      packages without trying to reboot the system. Patches installed with this option are assigned a
   *      status of <code>InstalledPendingReboot</code>. These patches might not be in effect until a
   *      reboot is performed.</p>
   *             </li>
   *          </ul>
   */
  RebootOption?: RebootOption | string;
}

export namespace InstancePatchState {
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
 * <p>Defines a filter used in <a>DescribeInstancePatchStatesForPatchGroup</a> used to
 *    scope down the information returned by the API.</p>
 */
export interface InstancePatchStateFilter {
  /**
   * <p>The key for the filter. Supported values are FailedCount, InstalledCount,
   *    InstalledOtherCount, MissingCount and NotApplicableCount.</p>
   */
  Key: string | undefined;

  /**
   * <p>The value for the filter, must be an integer greater than or equal to 0.</p>
   */
  Values: string[] | undefined;

  /**
   * <p>The type of comparison that should be performed for the value: Equal, NotEqual, LessThan or
   *    GreaterThan.</p>
   */
  Type: InstancePatchStateOperatorType | string | undefined;
}

export namespace InstancePatchStateFilter {
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
   *          <p>Key (string between 1 and 200 characters)</p>
   *          <p> Values (array containing a single string)</p>
   *          <p> Type (string "Equal", "NotEqual", "LessThan", "GreaterThan")</p>
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
   *     <code>DeleteInventory</code> action.</p>
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
  export const filterSensitiveLog = (obj: DescribeInventoryDeletionsRequest): any => ({
    ...obj,
  });
}

export enum InventoryDeletionStatus {
  COMPLETE = "Complete",
  IN_PROGRESS = "InProgress",
}

/**
 * <p>Status information returned by the <code>DeleteInventory</code> action.</p>
 */
export interface InventoryDeletionStatusItem {
  /**
   * <p>The deletion ID returned by the <code>DeleteInventory</code> action.</p>
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
   *    <i>AWS Systems Manager User Guide</i>.</p>
   */
  DeletionSummary?: InventoryDeletionSummary;

  /**
   * <p>The UTC timestamp of when the last status report.</p>
   */
  LastStatusUpdateTime?: Date;
}

export namespace InventoryDeletionStatusItem {
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
  export const filterSensitiveLog = (obj: DescribeInventoryDeletionsResult): any => ({
    ...obj,
  });
}

/**
 * <p>The ID specified for the delete operation does not exist or is not valid. Verify the ID and
 *    try again.</p>
 */
export interface InvalidDeletionIdException extends __SmithyException, $MetadataBearer {
  name: "InvalidDeletionIdException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidDeletionIdException {
  export const filterSensitiveLog = (obj: InvalidDeletionIdException): any => ({
    ...obj,
  });
}

/**
 * <p>Filter used in the request. Supported filter keys are Name and Enabled.</p>
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
   *          <p>Key (string, between 1 and 128 characters)</p>
   *          <p>Values (array of strings, each string is between 1 and 256 characters)</p>
   *          <p>The supported Keys are ExecutedBefore and ExecutedAfter with the value being a date/time
   *    string such as 2016-11-04T05:00:00Z.</p>
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
   * <p>The details explaining the Status. Only available for certain status values.</p>
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
   *    is STATUS with the corresponding values PENDING, IN_PROGRESS, SUCCESS, FAILED, TIMED_OUT,
   *    CANCELLING, and CANCELLED.</p>
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
   *    the task type is RUN_COMMAND, this value is the command ID.</p>
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
   * <p>The details explaining the status of the task invocation. Only available for certain Status
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
   *    window. This was also included in any CloudWatch events raised during the task invocation.</p>
   */
  OwnerInformation?: string;

  /**
   * <p>The ID of the target definition in this maintenance window the invocation was performed
   *    for.</p>
   */
  WindowTargetId?: string;
}

export namespace MaintenanceWindowExecutionTaskInvocationIdentity {
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
   * <p>Optional filters used to scope down the returned tasks. The supported filter key is STATUS
   *    with the corresponding values PENDING, IN_PROGRESS, SUCCESS, FAILED, TIMED_OUT, CANCELLING, and
   *    CANCELLED. </p>
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
   * <p>The details explaining the status of the task execution. Only available for certain status
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
   * <p>The ARN of the task that ran.</p>
   */
  TaskArn?: string;

  /**
   * <p>The type of task that ran.</p>
   */
  TaskType?: MaintenanceWindowTaskType | string;
}

export namespace MaintenanceWindowExecutionTaskIdentity {
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
  export const filterSensitiveLog = (obj: DescribeMaintenanceWindowExecutionTasksResult): any => ({
    ...obj,
  });
}

export interface DescribeMaintenanceWindowsRequest {
  /**
   * <p>Optional filters used to narrow down the scope of the returned maintenance windows.
   *    Supported filter keys are <b>Name</b> and <b>Enabled</b>.</p>
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
   * <p>The number of hours before the end of the maintenance window that Systems Manager stops scheduling new
   *    tasks for execution.</p>
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
   * <p>The number of days to wait to run a maintenance window after the scheduled CRON expression
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
   * <p>The instance ID or key/value pair to retrieve information about.</p>
   */
  Targets?: Target[];

  /**
   * <p>The type of resource you want to retrieve information about. For example, "INSTANCE".</p>
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
  export const filterSensitiveLog = (obj: DescribeMaintenanceWindowScheduleResult): any => ({
    ...obj,
  });
}

export interface DescribeMaintenanceWindowsForTargetRequest {
  /**
   * <p>The instance ID or key/value pair to retrieve information about.</p>
   */
  Targets: Target[] | undefined;

  /**
   * <p>The type of resource you want to retrieve information about. For example, "INSTANCE".</p>
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
   *    The supported filter keys are Type, WindowTargetId and OwnerInformation.</p>
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
   * <p>A user-provided value that will be included in any CloudWatch events that are raised while
   *    running tasks for these targets in this maintenance window.</p>
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
   *    keys are WindowTaskId, TaskArn, Priority, and TaskType.</p>
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
  export const filterSensitiveLog = (obj: DescribeMaintenanceWindowTasksRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an S3 bucket to write instance-level logs to.</p>
 *          <note>
 *             <p>
 *                <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the
 *       <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure.
 *       For information about how Systems Manager handles these options for the supported maintenance
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
   * <p>The Region where the S3 bucket is located.</p>
   */
  S3Region: string | undefined;
}

export namespace LoggingInfo {
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
   * <p>The resource that the task uses during execution. For RUN_COMMAND and AUTOMATION task types,
   *     <code>TaskArn</code> is the Systems Manager document name or ARN. For LAMBDA tasks, it's the function name
   *    or ARN. For STEP_FUNCTIONS tasks, it's the state machine ARN.</p>
   */
  TaskArn?: string;

  /**
   * <p>The type of task. The type can be one of the following: RUN_COMMAND, AUTOMATION, LAMBDA, or
   *    STEP_FUNCTIONS.</p>
   */
  Type?: MaintenanceWindowTaskType | string;

  /**
   * <p>The targets (either instances or tags). Instances are specified using
   *    Key=instanceids,Values=<instanceid1>,<instanceid2>. Tags are specified using
   *    Key=<tag name>,Values=<tag value>.</p>
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
   *                <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the
   *       <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure.
   *       For information about how Systems Manager handles these options for the supported maintenance
   *       window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p>
   *          </note>
   */
  LoggingInfo?: LoggingInfo;

  /**
   * <p>The ARN of the IAM service role to use to publish Amazon Simple Notification Service (Amazon SNS) notifications for
   *    maintenance window Run Command tasks.</p>
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
  export const filterSensitiveLog = (obj: DescribeMaintenanceWindowTasksResult): any => ({
    ...obj,
    ...(obj.Tasks && { Tasks: obj.Tasks.map((item) => MaintenanceWindowTask.filterSensitiveLog(item)) }),
  });
}

export enum OpsItemFilterKey {
  AUTOMATION_ID = "AutomationId",
  CATEGORY = "Category",
  CREATED_BY = "CreatedBy",
  CREATED_TIME = "CreatedTime",
  LAST_MODIFIED_TIME = "LastModifiedTime",
  OPERATIONAL_DATA = "OperationalData",
  OPERATIONAL_DATA_KEY = "OperationalDataKey",
  OPERATIONAL_DATA_VALUE = "OperationalDataValue",
  OPSITEM_ID = "OpsItemId",
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
   *                <p>Key: Title</p>
   *                <p>Operations: Contains</p>
   *             </li>
   *             <li>
   *                <p>Key: OperationalData*</p>
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
   *          <p>*If you filter the response by using the OperationalData operator, specify a key-value pair
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
  export const filterSensitiveLog = (obj: DescribeOpsItemsRequest): any => ({
    ...obj,
  });
}

export enum OpsItemStatus {
  IN_PROGRESS = "InProgress",
  OPEN = "Open",
  RESOLVED = "Resolved",
}

/**
 * <p>A count of OpsItems.</p>
 */
export interface OpsItemSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM entity that created the OpsItem.</p>
   */
  CreatedBy?: string;

  /**
   * <p>The date and time the OpsItem was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM entity that created the OpsItem.</p>
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
   * <p>The impacted AWS resource.</p>
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
}

export namespace OpsItemSummary {
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
   *          <note>
   *             <p>The <code>ParameterStringFilter</code> object is used by the <a>DescribeParameters</a> and <a>GetParametersByPath</a> API actions. However,
   *     not all of the pattern values listed for <code>Key</code> can be used with both actions.</p>
   *             <p>For <code>DescribeActions</code>, all of the listed patterns are valid, with the exception
   *     of <code>Label</code>.</p>
   *             <p>For <code>GetParametersByPath</code>, the following patterns listed for <code>Key</code>
   *     are not valid: <code>tag</code>, <code>Name</code>, <code>Path</code>, and
   *     <code>Tier</code>.</p>
   *             <p>For examples of CLI commands demonstrating valid parameter filter constructions, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-search.html">Searching for
   *      Systems Manager parameters</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   *          </note>
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
   * <p>The type of policy. Parameter Store supports the following policy types: Expiration,
   *    ExpirationNotification, and NoChangeNotification. </p>
   */
  PolicyType?: string;

  /**
   * <p>The status of the policy. Policies report the following statuses: Pending (the policy has
   *    not been enforced or applied yet), Finished (the policy was applied), Failed (the policy was not
   *    applied), or InProgress (the policy is being applied now). </p>
   */
  PolicyStatus?: string;
}

export namespace ParameterInlinePolicy {
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
   * <p>Amazon Resource Name (ARN) of the AWS user who last changed the parameter.</p>
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
  export const filterSensitiveLog = (obj: DescribeParametersResult): any => ({
    ...obj,
  });
}

/**
 * <p>The specified filter option is not valid. Valid options are Equals and BeginsWith. For Path
 *    filter, valid options are Recursive and OneLevel.</p>
 */
export interface InvalidFilterOption extends __SmithyException, $MetadataBearer {
  name: "InvalidFilterOption";
  $fault: "client";
  /**
   * <p>The specified filter option is not valid. Valid options are Equals and BeginsWith. For Path
   *    filter, valid options are Recursive and OneLevel.</p>
   */
  message?: string;
}

export namespace InvalidFilterOption {
  export const filterSensitiveLog = (obj: InvalidFilterOption): any => ({
    ...obj,
  });
}

export interface DescribePatchBaselinesRequest {
  /**
   * <p>Each element in the array is a structure containing: </p>
   *          <p>Key: (string, "NAME_PREFIX" or "OWNER")</p>
   *          <p>Value: (array of strings, exactly 1 entry, between 1 and 255 characters)</p>
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
  export const filterSensitiveLog = (obj: DescribePatchBaselinesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Defines the basic information about a patch baseline.</p>
 */
export interface PatchBaselineIdentity {
  /**
   * <p>The ID of the patch baseline.</p>
   */
  BaselineId?: string;

  /**
   * <p>The name of the patch baseline.</p>
   */
  BaselineName?: string;

  /**
   * <p>Defines the operating system the patch baseline applies to. The Default value is WINDOWS.
   *   </p>
   */
  OperatingSystem?: OperatingSystem | string;

  /**
   * <p>The description of the patch baseline.</p>
   */
  BaselineDescription?: string;

  /**
   * <p>Whether this is the default baseline. Note that Systems Manager supports creating multiple default
   *    patch baselines. For example, you can create a default patch baseline for each operating
   *    system.</p>
   */
  DefaultBaseline?: boolean;
}

export namespace PatchBaselineIdentity {
  export const filterSensitiveLog = (obj: PatchBaselineIdentity): any => ({
    ...obj,
  });
}

export interface DescribePatchBaselinesResult {
  /**
   * <p>An array of PatchBaselineIdentity elements.</p>
   */
  BaselineIdentities?: PatchBaselineIdentity[];

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   */
  NextToken?: string;
}

export namespace DescribePatchBaselinesResult {
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
   * <p>One or more filters. Use a filter to return a more specific list of results.</p>
   *          <p>For <code>DescribePatchGroups</code>,valid filter keys include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NAME_PREFIX</code>: The name of the patch group. Wildcards (*) are accepted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OPERATING_SYSTEM</code>: The supported operating system type to return results for.
   *      For valid operating system values, see <a>GetDefaultPatchBaselineRequest$OperatingSystem</a> in <a>CreatePatchBaseline</a>.</p>
   *                <p>Examples:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>--filters Key=NAME_PREFIX,Values=MyPatchGroup*</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>--filters Key=OPERATING_SYSTEM,Values=AMAZON_LINUX_2</code>
   *                      </p>
   *                   </li>
   *                </ul>
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
  export const filterSensitiveLog = (obj: DescribePatchGroupsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The mapping between a patch group and the patch baseline the patch group is registered
 *    with.</p>
 */
export interface PatchGroupPatchBaselineMapping {
  /**
   * <p>The name of the patch group registered with the patch baseline.</p>
   */
  PatchGroup?: string;

  /**
   * <p>The patch baseline the patch group is registered with.</p>
   */
  BaselineIdentity?: PatchBaselineIdentity;
}

export namespace PatchGroupPatchBaselineMapping {
  export const filterSensitiveLog = (obj: PatchGroupPatchBaselineMapping): any => ({
    ...obj,
  });
}

export interface DescribePatchGroupsResult {
  /**
   * <p>Each entry in the array contains:</p>
   *          <p>PatchGroup: string (between 1 and 256 characters, Regex:
   *    ^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$)</p>
   *          <p>PatchBaselineIdentity: A PatchBaselineIdentity element. </p>
   */
  Mappings?: PatchGroupPatchBaselineMapping[];

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   */
  NextToken?: string;
}

export namespace DescribePatchGroupsResult {
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
  export const filterSensitiveLog = (obj: DescribePatchGroupStateRequest): any => ({
    ...obj,
  });
}
