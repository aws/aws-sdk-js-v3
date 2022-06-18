// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import {
  AssociationFilterKey,
  AttachmentHashType,
  CommandFilterKey,
  CommandInvocationStatus,
  CommandPluginStatus,
  CommandStatus,
  ComplianceQueryOperatorType,
  ComplianceSeverity,
  ComplianceStatus,
  DocumentFilterKey,
  DocumentReviewAction,
  DocumentReviewCommentType,
  InventoryAttributeDataType,
  InventoryQueryOperatorType,
  LastResourceDataSyncStatus,
  NotificationType,
  OpsFilterOperatorType,
  OpsItemEventFilterKey,
  OpsItemEventFilterOperator,
  OpsItemRelatedItemsFilterKey,
  OpsItemRelatedItemsFilterOperator,
} from "./models_2";
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

export namespace Activation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Activation): any => ({
    ...obj,
  });
}

export enum ResourceTypeForTagging {
  AUTOMATION = "Automation",
  DOCUMENT = "Document",
  MAINTENANCE_WINDOW = "MaintenanceWindow",
  MANAGED_INSTANCE = "ManagedInstance",
  OPSMETADATA = "OpsMetadata",
  OPS_ITEM = "OpsItem",
  PARAMETER = "Parameter",
  PATCH_BASELINE = "PatchBaseline",
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

export namespace RegistrationMetadataItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegistrationMetadataItem): any => ({
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

export namespace Target {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Target): any => ({
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
   *    association with two managed nodes, and one of them was successful, this would return the count
   *    of managed nodes by status.</p>
   */
  AssociationStatusAggregatedCount?: Record<string, number>;
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
}

export namespace AssociationDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociationDescription): any => ({
    ...obj,
    ...(obj.Parameters && { Parameters: SENSITIVE_STRING }),
  });
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
}

export namespace CreateAssociationBatchRequestEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAssociationBatchRequestEntry): any => ({
    ...obj,
    ...(obj.Parameters && { Parameters: SENSITIVE_STRING }),
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
    ...(obj.Entry && { Entry: CreateAssociationBatchRequestEntry.filterSensitiveLog(obj.Entry) }),
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

export namespace DocumentDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DocumentDescription): any => ({
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

export namespace MetadataValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MetadataValue): any => ({
    ...obj,
  });
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
   * <p>For managed nodes identified by the approval rule filters, enables a patch baseline to apply
   *    non-security updates available in the specified repository. The default value is
   *     <code>false</code>. Applies to Linux managed nodes only.</p>
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

export namespace PatchSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PatchSource): any => ({
    ...obj,
    ...(obj.Configuration && { Configuration: SENSITIVE_STRING }),
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

export namespace AssociationExecutionFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociationExecutionFilter): any => ({
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

export namespace AssociationExecutionTargetsFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociationExecutionTargetsFilter): any => ({
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

export namespace AssociationExecutionTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociationExecutionTarget): any => ({
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

export namespace StepExecutionFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StepExecutionFilter): any => ({
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
  Details?: Record<string, string[]>;
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
}

export namespace StepExecution {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StepExecution): any => ({
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

export namespace Patch {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Patch): any => ({
    ...obj,
  });
}

export enum DocumentPermissionType {
  SHARE = "Share",
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

export namespace InstanceAssociation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceAssociation): any => ({
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

export namespace InstanceAssociationStatusInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceAssociationStatusInfo): any => ({
    ...obj,
  });
}

/**
 * <p>The filters to describe or get information about your managed nodes.</p>
 */
export interface InstanceInformationStringFilter {
  /**
   * <p>The filter key name to describe your managed nodes. For example:</p>
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

export namespace InstanceInformationFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceInformationFilter): any => ({
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
   * <p>The number of associations for the managed node(s).</p>
   */
  InstanceAssociationStatusAggregatedCount?: Record<string, number>;
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

export namespace InstanceInformation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceInformation): any => ({
    ...obj,
  });
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

export namespace PatchComplianceData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PatchComplianceData): any => ({
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
   * <p>The number of managed nodes where patches that are specified as <code>Critical</code> for
   *    compliance reporting in the patch baseline aren't installed. These patches might be missing, have
   *    failed installation, were rejected, or were installed but awaiting a required managed node
   *    reboot. The status of these managed nodes is <code>NON_COMPLIANT</code>.</p>
   */
  CriticalNonCompliantCount?: number;

  /**
   * <p>The number of managed nodes where patches that are specified as <code>Security</code> in a
   *    patch advisory aren't installed. These patches might be missing, have failed installation, were
   *    rejected, or were installed but awaiting a required managed node reboot. The status of these
   *    managed nodes is <code>NON_COMPLIANT</code>.</p>
   */
  SecurityNonCompliantCount?: number;

  /**
   * <p>The number of managed nodes with patches installed that are specified as other than
   *     <code>Critical</code> or <code>Security</code> but aren't compliant with the patch baseline. The
   *    status of these managed nodes is <code>NON_COMPLIANT</code>.</p>
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

export namespace InstancePatchStateFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstancePatchStateFilter): any => ({
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

export namespace MaintenanceWindowFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MaintenanceWindowFilter): any => ({
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

export enum MaintenanceWindowResourceType {
  Instance = "INSTANCE",
  ResourceGroup = "RESOURCE_GROUP",
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
  OperationalData?: Record<string, OpsItemDataValue>;

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
   *          <p>For <code>DescribeParameters</code>, all of the listed patterns are valid except
   *     <code>Label</code>.</p>
   *          <p>For <code>GetParametersByPath</code>, the following patterns listed for <code>Key</code>
   *    aren't valid: <code>tag</code>, <code>DataType</code>, <code>Name</code>, <code>Path</code>, and
   *     <code>Tier</code>.</p>
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

/**
 * <p>One or more policies assigned to a parameter.</p>
 */
export interface ParameterInlinePolicy {
  /**
   * <p>The JSON text of the policy.</p>
   */
  PolicyText?: string;

  /**
   * <p>The type of policy. Parameter Store, a capability of Amazon Web Services Systems Manager, supports the following
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

/**
 * <p>The specified filter option isn't valid. Valid options are Equals and BeginsWith. For Path
 *    filter, valid options are Recursive and OneLevel.</p>
 */
export class InvalidFilterOption extends __BaseException {
  readonly name: "InvalidFilterOption" = "InvalidFilterOption";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidFilterOption, __BaseException>) {
    super({
      name: "InvalidFilterOption",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidFilterOption.prototype);
  }
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
   * <p>Defines the operating system the patch baseline applies to. The default value is
   *     <code>WINDOWS</code>. </p>
   */
  OperatingSystem?: OperatingSystem | string;

  /**
   * <p>The description of the patch baseline.</p>
   */
  BaselineDescription?: string;

  /**
   * <p>Whether this is the default baseline. Amazon Web Services Systems Manager supports creating multiple default patch
   *    baselines. For example, you can create a default patch baseline for each operating system.</p>
   */
  DefaultBaseline?: boolean;
}

export namespace PatchBaselineIdentity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PatchBaselineIdentity): any => ({
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PatchGroupPatchBaselineMapping): any => ({
    ...obj,
  });
}

export enum PatchSet {
  Application = "APPLICATION",
  Os = "OS",
}

export enum PatchProperty {
  PatchClassification = "CLASSIFICATION",
  PatchMsrcSeverity = "MSRC_SEVERITY",
  PatchPriority = "PRIORITY",
  PatchProductFamily = "PRODUCT_FAMILY",
  PatchSeverity = "SEVERITY",
  Product = "PRODUCT",
}

export enum SessionFilterKey {
  INVOKED_AFTER = "InvokedAfter",
  INVOKED_BEFORE = "InvokedBefore",
  OWNER = "Owner",
  SESSION_ID = "SessionId",
  STATUS = "Status",
  TARGET_ID = "Target",
}

/**
 * <p>Describes a filter for Session Manager information.</p>
 */
export interface SessionFilter {
  /**
   * <p>The name of the filter.</p>
   */
  key: SessionFilterKey | string | undefined;

  /**
   * <p>The filter value. Valid values for each filter key are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>InvokedAfter: Specify a timestamp to limit your results. For example, specify
   *      2018-08-29T00:00:00Z to see sessions that started August 29, 2018, and later.</p>
   *             </li>
   *             <li>
   *                <p>InvokedBefore: Specify a timestamp to limit your results. For example, specify
   *      2018-08-29T00:00:00Z to see sessions that started before August 29, 2018.</p>
   *             </li>
   *             <li>
   *                <p>Target: Specify a managed node to which session connections have been made.</p>
   *             </li>
   *             <li>
   *                <p>Owner: Specify an Amazon Web Services user account to see a list of sessions started by that
   *      user.</p>
   *             </li>
   *             <li>
   *                <p>Status: Specify a valid session status to see a list of all sessions with that status.
   *      Status values you can specify include:</p>
   *                <ul>
   *                   <li>
   *                      <p>Connected</p>
   *                   </li>
   *                   <li>
   *                      <p>Connecting</p>
   *                   </li>
   *                   <li>
   *                      <p>Disconnected</p>
   *                   </li>
   *                   <li>
   *                      <p>Terminated</p>
   *                   </li>
   *                   <li>
   *                      <p>Terminating</p>
   *                   </li>
   *                   <li>
   *                      <p>Failed</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>SessionId: Specify a session ID to return details about the session.</p>
   *             </li>
   *          </ul>
   */
  value: string | undefined;
}

export namespace SessionFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SessionFilter): any => ({
    ...obj,
  });
}

export enum SessionState {
  ACTIVE = "Active",
  HISTORY = "History",
}

/**
 * <p>Reserved for future use.</p>
 */
export interface SessionManagerOutputUrl {
  /**
   * <p>Reserved for future use.</p>
   */
  S3OutputUrl?: string;

  /**
   * <p>Reserved for future use.</p>
   */
  CloudWatchOutputUrl?: string;
}

export namespace SessionManagerOutputUrl {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SessionManagerOutputUrl): any => ({
    ...obj,
  });
}

export enum SessionStatus {
  CONNECTED = "Connected",
  CONNECTING = "Connecting",
  DISCONNECTED = "Disconnected",
  FAILED = "Failed",
  TERMINATED = "Terminated",
  TERMINATING = "Terminating",
}

/**
 * <p>Information about a Session Manager connection to a managed node.</p>
 */
export interface Session {
  /**
   * <p>The ID of the session.</p>
   */
  SessionId?: string;

  /**
   * <p>The managed node that the Session Manager session connected to.</p>
   */
  Target?: string;

  /**
   * <p>The status of the session. For example, "Connected" or "Terminated".</p>
   */
  Status?: SessionStatus | string;

  /**
   * <p>The date and time, in ISO-8601 Extended format, when the session began.</p>
   */
  StartDate?: Date;

  /**
   * <p>The date and time, in ISO-8601 Extended format, when the session was terminated.</p>
   */
  EndDate?: Date;

  /**
   * <p>The name of the Session Manager SSM document used to define the parameters and plugin settings for the
   *    session. For example, <code>SSM-SessionManagerRunShell</code>.</p>
   */
  DocumentName?: string;

  /**
   * <p>The ID of the Amazon Web Services user account that started the session.</p>
   */
  Owner?: string;

  /**
   * <p>The reason for connecting to the instance.</p>
   */
  Reason?: string;

  /**
   * <p>Reserved for future use.</p>
   */
  Details?: string;

  /**
   * <p>Reserved for future use.</p>
   */
  OutputUrl?: SessionManagerOutputUrl;

  /**
   * <p>The maximum duration of a session before it terminates.</p>
   */
  MaxSessionDuration?: string;
}

export namespace Session {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Session): any => ({
    ...obj,
  });
}

/**
 * <p>The association wasn't found using the parameters you specified in the call. Verify the
 *    information and try again.</p>
 */
export class OpsItemRelatedItemAssociationNotFoundException extends __BaseException {
  readonly name: "OpsItemRelatedItemAssociationNotFoundException" = "OpsItemRelatedItemAssociationNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OpsItemRelatedItemAssociationNotFoundException, __BaseException>) {
    super({
      name: "OpsItemRelatedItemAssociationNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OpsItemRelatedItemAssociationNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>An aggregate of step execution statuses displayed in the Amazon Web Services Systems Manager console for a
 *    multi-Region and multi-account Automation execution.</p>
 */
export interface ProgressCounters {
  /**
   * <p>The total number of steps run in all specified Amazon Web Services Regions and Amazon Web Services accounts for the
   *    current Automation execution.</p>
   */
  TotalSteps?: number;

  /**
   * <p>The total number of steps that successfully completed in all specified Amazon Web Services Regions and
   *    Amazon Web Services accounts for the current Automation execution.</p>
   */
  SuccessSteps?: number;

  /**
   * <p>The total number of steps that failed to run in all specified Amazon Web Services Regions and
   *    Amazon Web Services accounts for the current Automation execution.</p>
   */
  FailedSteps?: number;

  /**
   * <p>The total number of steps that the system cancelled in all specified Amazon Web Services Regions and
   *    Amazon Web Services accounts for the current Automation execution.</p>
   */
  CancelledSteps?: number;

  /**
   * <p>The total number of steps that timed out in all specified Amazon Web Services Regions and Amazon Web Services accounts
   *    for the current Automation execution.</p>
   */
  TimedOutSteps?: number;
}

export namespace ProgressCounters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProgressCounters): any => ({
    ...obj,
  });
}

/**
 * <p>Detailed information about the current state of an individual Automation execution.</p>
 */
export interface AutomationExecution {
  /**
   * <p>The execution ID.</p>
   */
  AutomationExecutionId?: string;

  /**
   * <p>The name of the Automation runbook used during the execution.</p>
   */
  DocumentName?: string;

  /**
   * <p>The version of the document to use during execution.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>The time the execution started.</p>
   */
  ExecutionStartTime?: Date;

  /**
   * <p>The time the execution finished.</p>
   */
  ExecutionEndTime?: Date;

  /**
   * <p>The execution status of the Automation.</p>
   */
  AutomationExecutionStatus?: AutomationExecutionStatus | string;

  /**
   * <p>A list of details about the current state of all steps that comprise an execution. An
   *    Automation runbook contains a list of steps that are run in order.</p>
   */
  StepExecutions?: StepExecution[];

  /**
   * <p>A boolean value that indicates if the response contains the full list of the Automation step
   *    executions. If true, use the DescribeAutomationStepExecutions API operation to get the full list
   *    of step executions.</p>
   */
  StepExecutionsTruncated?: boolean;

  /**
   * <p>The key-value map of execution parameters, which were supplied when calling <a>StartAutomationExecution</a>.</p>
   */
  Parameters?: Record<string, string[]>;

  /**
   * <p>The list of execution outputs as defined in the Automation runbook.</p>
   */
  Outputs?: Record<string, string[]>;

  /**
   * <p>A message describing why an execution has failed, if the status is set to Failed.</p>
   */
  FailureMessage?: string;

  /**
   * <p>The automation execution mode.</p>
   */
  Mode?: ExecutionMode | string;

  /**
   * <p>The AutomationExecutionId of the parent automation.</p>
   */
  ParentAutomationExecutionId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who ran the automation.</p>
   */
  ExecutedBy?: string;

  /**
   * <p>The name of the step that is currently running.</p>
   */
  CurrentStepName?: string;

  /**
   * <p>The action of the step that is currently running.</p>
   */
  CurrentAction?: string;

  /**
   * <p>The parameter name.</p>
   */
  TargetParameterName?: string;

  /**
   * <p>The specified targets.</p>
   */
  Targets?: Target[];

  /**
   * <p>The specified key-value mapping of document parameters to target resources.</p>
   */
  TargetMaps?: Record<string, string[]>[];

  /**
   * <p>A list of resolved targets in the rate control execution.</p>
   */
  ResolvedTargets?: ResolvedTargets;

  /**
   * <p>The <code>MaxConcurrency</code> value specified by the user when the execution
   *    started.</p>
   */
  MaxConcurrency?: string;

  /**
   * <p>The MaxErrors value specified by the user when the execution started.</p>
   */
  MaxErrors?: string;

  /**
   * <p>The target of the execution.</p>
   */
  Target?: string;

  /**
   * <p>The combination of Amazon Web Services Regions and/or Amazon Web Services accounts where you want to run the
   *    Automation.</p>
   */
  TargetLocations?: TargetLocation[];

  /**
   * <p>An aggregate of step execution statuses displayed in the Amazon Web Services Systems Manager console for a
   *    multi-Region and multi-account Automation execution.</p>
   */
  ProgressCounters?: ProgressCounters;

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
   * <p>Information about the Automation runbooks that are run as part of a runbook workflow.</p>
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

export namespace AutomationExecution {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutomationExecution): any => ({
    ...obj,
  });
}

export enum CalendarState {
  CLOSED = "CLOSED",
  OPEN = "OPEN",
}

/**
 * <p>The SSM document type isn't valid. Valid document types are described in the
 *     <code>DocumentType</code> property.</p>
 */
export class InvalidDocumentType extends __BaseException {
  readonly name: "InvalidDocumentType" = "InvalidDocumentType";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDocumentType, __BaseException>) {
    super({
      name: "InvalidDocumentType",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDocumentType.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The calendar entry contained in the specified SSM document isn't supported.</p>
 */
export class UnsupportedCalendarException extends __BaseException {
  readonly name: "UnsupportedCalendarException" = "UnsupportedCalendarException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedCalendarException, __BaseException>) {
    super({
      name: "UnsupportedCalendarException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedCalendarException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Configuration options for sending command output to Amazon CloudWatch Logs.</p>
 */
export interface CloudWatchOutputConfig {
  /**
   * <p>The name of the CloudWatch Logs log group where you want to send command output. If you
   *    don't specify a group name, Amazon Web Services Systems Manager automatically creates a log group for you. The log group
   *    uses the following naming format:</p>
   *          <p>
   *             <code>aws/ssm/<i>SystemsManagerDocumentName</i>
   *             </code>
   *          </p>
   */
  CloudWatchLogGroupName?: string;

  /**
   * <p>Enables Systems Manager to send command output to CloudWatch Logs.</p>
   */
  CloudWatchOutputEnabled?: boolean;
}

export namespace CloudWatchOutputConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CloudWatchOutputConfig): any => ({
    ...obj,
  });
}

/**
 * <p>The plugin name isn't valid.</p>
 */
export class InvalidPluginName extends __BaseException {
  readonly name: "InvalidPluginName" = "InvalidPluginName";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPluginName, __BaseException>) {
    super({
      name: "InvalidPluginName",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPluginName.prototype);
  }
}

/**
 * <p>The command ID and managed node ID you specified didn't match any invocations. Verify the
 *    command ID and the managed node ID and try again. </p>
 */
export class InvocationDoesNotExist extends __BaseException {
  readonly name: "InvocationDoesNotExist" = "InvocationDoesNotExist";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvocationDoesNotExist, __BaseException>) {
    super({
      name: "InvocationDoesNotExist",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvocationDoesNotExist.prototype);
  }
}

/**
 * <p>Defines the basic information about a patch baseline override.</p>
 */
export interface BaselineOverride {
  /**
   * <p>The operating system rule used by the patch baseline override.</p>
   */
  OperatingSystem?: OperatingSystem | string;

  /**
   * <p>A set of patch filters, typically used for approval rules.</p>
   */
  GlobalFilters?: PatchFilterGroup;

  /**
   * <p>A set of rules defining the approval rules for a patch baseline.</p>
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
   *    missing, this value describes the severity of the compliance violation.</p>
   */
  ApprovedPatchesComplianceLevel?: PatchComplianceLevel | string;

  /**
   * <p>A list of explicitly rejected patches for the baseline.</p>
   *          <p>For information about accepted formats for lists of approved patches and rejected patches,
   *                         see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-approved-rejected-package-name-formats.html">About
   *                         package name formats for approved and rejected patch lists</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   */
  RejectedPatches?: string[];

  /**
   * <p>The action for Patch Manager to take on patches included in the
   *     <code>RejectedPackages</code> list. A patch can be allowed only if it is a dependency of another
   *    package, or blocked entirely along with packages that include it as a dependency.</p>
   */
  RejectedPatchesAction?: PatchAction | string;

  /**
   * <p>Indicates whether the list of approved patches includes non-security updates that should be
   *    applied to the managed nodes. The default value is <code>false</code>. Applies to Linux managed
   *    nodes only.</p>
   */
  ApprovedPatchesEnableNonSecurity?: boolean;

  /**
   * <p>Information about the patches to use to update the managed nodes, including target operating
   *    systems and source repositories. Applies to Linux managed nodes only.</p>
   */
  Sources?: PatchSource[];
}

export namespace BaselineOverride {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BaselineOverride): any => ({
    ...obj,
    ...(obj.Sources && { Sources: obj.Sources.map((item) => PatchSource.filterSensitiveLog(item)) }),
  });
}

/**
 * <p>Patching for applications released by Microsoft is only available on EC2 instances and
 *    advanced instances. To patch applications released by Microsoft on on-premises servers and VMs,
 *    you must enable advanced instances. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-managedinstances-advanced.html">Enabling
 *     the advanced-instances tier</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
 */
export class UnsupportedFeatureRequiredException extends __BaseException {
  readonly name: "UnsupportedFeatureRequiredException" = "UnsupportedFeatureRequiredException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedFeatureRequiredException, __BaseException>) {
    super({
      name: "UnsupportedFeatureRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedFeatureRequiredException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A structure that includes attributes that describe a document attachment.</p>
 */
export interface AttachmentContent {
  /**
   * <p>The name of an attachment.</p>
   */
  Name?: string;

  /**
   * <p>The size of an attachment in bytes.</p>
   */
  Size?: number;

  /**
   * <p>The cryptographic hash value of the document content.</p>
   */
  Hash?: string;

  /**
   * <p>The hash algorithm used to calculate the hash value.</p>
   */
  HashType?: AttachmentHashType | string;

  /**
   * <p>The URL location of the attachment content.</p>
   */
  Url?: string;
}

export namespace AttachmentContent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttachmentContent): any => ({
    ...obj,
  });
}

/**
 * <p>One or more filters. Use a filter to return a more specific list of results.</p>
 */
export interface InventoryFilter {
  /**
   * <p>The name of the filter key.</p>
   */
  Key: string | undefined;

  /**
   * <p>Inventory filter values. Example: inventory filter where managed node IDs are specified as
   *    values <code>Key=AWS:InstanceInformation.InstanceId,Values= i-a12b3c4d5e6g,
   *     i-1a2b3c4d5e6,Type=Equal</code>. </p>
   */
  Values: string[] | undefined;

  /**
   * <p>The type of filter.</p>
   *          <note>
   *             <p>The <code>Exists</code> filter must be used with aggregators. For more information, see
   *      <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-inventory-aggregate.html">Aggregating inventory
   *      data</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   *          </note>
   */
  Type?: InventoryQueryOperatorType | string;
}

export namespace InventoryFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InventoryFilter): any => ({
    ...obj,
  });
}

/**
 * <p>A user-defined set of one or more filters on which to aggregate inventory data. Groups
 *    return a count of resources that match and don't match the specified criteria.</p>
 */
export interface InventoryGroup {
  /**
   * <p>The name of the group.</p>
   */
  Name: string | undefined;

  /**
   * <p>Filters define the criteria for the group. The <code>matchingCount</code> field displays the
   *    number of resources that match the criteria. The <code>notMatchingCount</code> field displays the
   *    number of resources that don't match the criteria. </p>
   */
  Filters: InventoryFilter[] | undefined;
}

export namespace InventoryGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InventoryGroup): any => ({
    ...obj,
  });
}

/**
 * <p>The inventory item result attribute.</p>
 */
export interface ResultAttribute {
  /**
   * <p>Name of the inventory item type. Valid value: <code>AWS:InstanceInformation</code>. Default
   *    Value: <code>AWS:InstanceInformation</code>.</p>
   */
  TypeName: string | undefined;
}

export namespace ResultAttribute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResultAttribute): any => ({
    ...obj,
  });
}

/**
 * <p>The inventory result item.</p>
 */
export interface InventoryResultItem {
  /**
   * <p>The name of the inventory result item type.</p>
   */
  TypeName: string | undefined;

  /**
   * <p>The schema version for the inventory result item/</p>
   */
  SchemaVersion: string | undefined;

  /**
   * <p>The time inventory item data was captured.</p>
   */
  CaptureTime?: string;

  /**
   * <p>MD5 hash of the inventory item type contents. The content hash is used to determine whether
   *    to update inventory information. The PutInventory API doesn't update the inventory item type
   *    contents if the MD5 hash hasn't changed since last update. </p>
   */
  ContentHash?: string;

  /**
   * <p>Contains all the inventory data of the item type. Results include attribute names and
   *    values. </p>
   */
  Content: Record<string, string>[] | undefined;
}

export namespace InventoryResultItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InventoryResultItem): any => ({
    ...obj,
  });
}

/**
 * <p>Inventory query results.</p>
 */
export interface InventoryResultEntity {
  /**
   * <p>ID of the inventory result entity. For example, for managed node inventory the result will
   *    be the managed node ID. For EC2 instance inventory, the result will be the instance ID. </p>
   */
  Id?: string;

  /**
   * <p>The data section in the inventory result entity JSON.</p>
   */
  Data?: Record<string, InventoryResultItem>;
}

export namespace InventoryResultEntity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InventoryResultEntity): any => ({
    ...obj,
  });
}

/**
 * <p>The specified aggregator isn't valid for inventory groups. Verify that the aggregator uses a
 *    valid inventory type such as <code>AWS:Application</code> or
 *    <code>AWS:InstanceInformation</code>.</p>
 */
export class InvalidAggregatorException extends __BaseException {
  readonly name: "InvalidAggregatorException" = "InvalidAggregatorException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidAggregatorException, __BaseException>) {
    super({
      name: "InvalidAggregatorException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidAggregatorException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified inventory group isn't valid.</p>
 */
export class InvalidInventoryGroupException extends __BaseException {
  readonly name: "InvalidInventoryGroupException" = "InvalidInventoryGroupException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidInventoryGroupException, __BaseException>) {
    super({
      name: "InvalidInventoryGroupException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidInventoryGroupException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified inventory item result attribute isn't valid.</p>
 */
export class InvalidResultAttributeException extends __BaseException {
  readonly name: "InvalidResultAttributeException" = "InvalidResultAttributeException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidResultAttributeException, __BaseException>) {
    super({
      name: "InvalidResultAttributeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidResultAttributeException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Attributes are the entries within the inventory item content. It contains name and
 *    value.</p>
 */
export interface InventoryItemAttribute {
  /**
   * <p>Name of the inventory item attribute.</p>
   */
  Name: string | undefined;

  /**
   * <p>The data type of the inventory item attribute. </p>
   */
  DataType: InventoryAttributeDataType | string | undefined;
}

export namespace InventoryItemAttribute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InventoryItemAttribute): any => ({
    ...obj,
  });
}

/**
 * <p>The inventory item schema definition. Users can use this to compose inventory query
 *    filters.</p>
 */
export interface InventoryItemSchema {
  /**
   * <p>The name of the inventory type. Default inventory item type names start with Amazon Web Services. Custom
   *    inventory type names will start with Custom. Default inventory item types include the following:
   *     <code>AWS:AWSComponent</code>, <code>AWS:Application</code>,
   *     <code>AWS:InstanceInformation</code>, <code>AWS:Network</code>, and
   *     <code>AWS:WindowsUpdate</code>.</p>
   */
  TypeName: string | undefined;

  /**
   * <p>The schema version for the inventory item.</p>
   */
  Version?: string;

  /**
   * <p>The schema attributes for inventory. This contains data type and attribute name.</p>
   */
  Attributes: InventoryItemAttribute[] | undefined;

  /**
   * <p>The alias name of the inventory type. The alias name is used for display purposes.</p>
   */
  DisplayName?: string;
}

export namespace InventoryItemSchema {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InventoryItemSchema): any => ({
    ...obj,
  });
}

/**
 * <p>The parameters for an <code>AUTOMATION</code> task type.</p>
 */
export interface MaintenanceWindowAutomationParameters {
  /**
   * <p>The version of an Automation runbook to use during task execution.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>The parameters for the <code>AUTOMATION</code> task.</p>
   *          <p>For information about specifying and updating task parameters, see <a>RegisterTaskWithMaintenanceWindow</a> and <a>UpdateMaintenanceWindowTask</a>.</p>
   *          <note>
   *             <p>
   *                <code>LoggingInfo</code> has been deprecated. To specify an Amazon Simple Storage Service (Amazon S3) bucket to contain logs, instead use the
   *       <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure.
   *       For information about how Amazon Web Services Systems Manager handles these options for the supported maintenance
   *       window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p>
   *
   *             <p>
   *                <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs,
   *       instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information
   *       about how Systems Manager handles these options for the supported maintenance window task
   *       types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p>
   *             <p>For <code>AUTOMATION</code> task types, Amazon Web Services Systems Manager ignores any values specified for these
   *     parameters.</p>
   *          </note>
   */
  Parameters?: Record<string, string[]>;
}

export namespace MaintenanceWindowAutomationParameters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MaintenanceWindowAutomationParameters): any => ({
    ...obj,
  });
}

/**
 * <p>The parameters for a <code>LAMBDA</code> task type.</p>
 *          <p>For information about specifying and updating task parameters, see <a>RegisterTaskWithMaintenanceWindow</a> and <a>UpdateMaintenanceWindowTask</a>.</p>
 *          <note>
 *             <p>
 *                <code>LoggingInfo</code> has been deprecated. To specify an Amazon Simple Storage Service (Amazon S3) bucket to contain logs, instead use the
 *       <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure.
 *       For information about how Amazon Web Services Systems Manager handles these options for the supported maintenance
 *       window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p>
 *
 *             <p>
 *                <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs,
 *       instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information
 *       about how Systems Manager handles these options for the supported maintenance window task
 *       types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p>
 *             <p>For Lambda tasks, Systems Manager ignores any values specified for TaskParameters and
 *     LoggingInfo.</p>
 *          </note>
 */
export interface MaintenanceWindowLambdaParameters {
  /**
   * <p>Pass client-specific information to the Lambda function that you are
   *    invoking. You can then process the client information in your Lambda function as you
   *    choose through the context variable.</p>
   */
  ClientContext?: string;

  /**
   * <p>(Optional) Specify an Lambda function version or alias name. If you specify a
   *    function version, the operation uses the qualified function Amazon Resource Name (ARN) to invoke
   *    a specific Lambda function. If you specify an alias name, the operation uses the
   *    alias ARN to invoke the Lambda function version to which the alias points.</p>
   */
  Qualifier?: string;

  /**
   * <p>JSON to provide to your Lambda function as input.</p>
   */
  Payload?: Uint8Array;
}

export namespace MaintenanceWindowLambdaParameters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MaintenanceWindowLambdaParameters): any => ({
    ...obj,
    ...(obj.Payload && { Payload: SENSITIVE_STRING }),
  });
}

export enum NotificationEvent {
  ALL = "All",
  CANCELLED = "Cancelled",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  SUCCESS = "Success",
  TIMED_OUT = "TimedOut",
}

/**
 * <p>Configurations for sending notifications.</p>
 */
export interface NotificationConfig {
  /**
   * <p>An Amazon Resource Name (ARN) for an Amazon Simple Notification Service (Amazon SNS) topic. Run
   *    Command pushes notifications about command status changes to this topic.</p>
   */
  NotificationArn?: string;

  /**
   * <p>The different events for which you can receive notifications. To learn more about these
   *    events, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/monitoring-sns-notifications.html">Monitoring Systems Manager status
   *     changes using Amazon SNS notifications</a> in the
   *     <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   */
  NotificationEvents?: (NotificationEvent | string)[];

  /**
   * <p>The type of notification.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Command</code>: Receive notification when the status of a command changes.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Invocation</code>: For commands sent to multiple managed nodes, receive notification
   *      on a per-node basis when the status of a command changes. </p>
   *             </li>
   *          </ul>
   */
  NotificationType?: NotificationType | string;
}

export namespace NotificationConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NotificationConfig): any => ({
    ...obj,
  });
}

/**
 * <p>The parameters for a <code>RUN_COMMAND</code> task type.</p>
 *          <p>For information about specifying and updating task parameters, see <a>RegisterTaskWithMaintenanceWindow</a> and <a>UpdateMaintenanceWindowTask</a>.</p>
 *          <note>
 *             <p>
 *                <code>LoggingInfo</code> has been deprecated. To specify an Amazon Simple Storage Service (Amazon S3) bucket to contain logs, instead use the
 *       <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure.
 *       For information about how Amazon Web Services Systems Manager handles these options for the supported maintenance
 *       window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p>
 *
 *             <p>
 *                <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs,
 *       instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information
 *       about how Systems Manager handles these options for the supported maintenance window task
 *       types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p>
 *             <p>For <code>RUN_COMMAND</code> tasks, Systems Manager uses specified values for
 *      <code>TaskParameters</code> and <code>LoggingInfo</code> only if no values are specified for
 *      <code>TaskInvocationParameters</code>. </p>
 *          </note>
 */
export interface MaintenanceWindowRunCommandParameters {
  /**
   * <p>Information about the commands to run.</p>
   */
  Comment?: string;

  /**
   * <p>Configuration options for sending command output to Amazon CloudWatch Logs.</p>
   */
  CloudWatchOutputConfig?: CloudWatchOutputConfig;

  /**
   * <p>The SHA-256 or SHA-1 hash created by the system when the document was created. SHA-1 hashes
   *    have been deprecated.</p>
   */
  DocumentHash?: string;

  /**
   * <p>SHA-256 or SHA-1. SHA-1 hashes have been deprecated.</p>
   */
  DocumentHashType?: DocumentHashType | string;

  /**
   * <p>The Amazon Web Services Systems Manager document (SSM document) version to use in the request. You can specify
   *     <code>$DEFAULT</code>, <code>$LATEST</code>, or a specific version number. If you run commands
   *    by using the Amazon Web Services CLI, then you must escape the first two options by using a backslash. If you
   *    specify a version number, then you don't need to use the backslash. For example:</p>
   *          <p>
   *             <code>--document-version "\$DEFAULT"</code>
   *          </p>
   *          <p>
   *             <code>--document-version "\$LATEST"</code>
   *          </p>
   *          <p>
   *             <code>--document-version "3"</code>
   *          </p>
   */
  DocumentVersion?: string;

  /**
   * <p>Configurations for sending notifications about command status changes on a per-managed node
   *    basis.</p>
   */
  NotificationConfig?: NotificationConfig;

  /**
   * <p>The name of the Amazon Simple Storage Service (Amazon S3) bucket.</p>
   */
  OutputS3BucketName?: string;

  /**
   * <p>The S3 bucket subfolder.</p>
   */
  OutputS3KeyPrefix?: string;

  /**
   * <p>The parameters for the <code>RUN_COMMAND</code> task execution.</p>
   */
  Parameters?: Record<string, string[]>;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) service role to use to publish Amazon Simple Notification Service
   * (Amazon SNS) notifications for maintenance window Run Command tasks.</p>
   */
  ServiceRoleArn?: string;

  /**
   * <p>If this time is reached and the command hasn't already started running, it doesn't
   *    run.</p>
   */
  TimeoutSeconds?: number;
}

export namespace MaintenanceWindowRunCommandParameters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MaintenanceWindowRunCommandParameters): any => ({
    ...obj,
    ...(obj.Parameters && { Parameters: SENSITIVE_STRING }),
  });
}

/**
 * <p>The parameters for a <code>STEP_FUNCTIONS</code> task.</p>
 *          <p>For information about specifying and updating task parameters, see <a>RegisterTaskWithMaintenanceWindow</a> and <a>UpdateMaintenanceWindowTask</a>.</p>
 *          <note>
 *             <p>
 *                <code>LoggingInfo</code> has been deprecated. To specify an Amazon Simple Storage Service (Amazon S3) bucket to contain logs, instead use the
 *       <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure.
 *       For information about how Amazon Web Services Systems Manager handles these options for the supported maintenance
 *       window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p>
 *
 *             <p>
 *                <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs,
 *       instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information
 *       about how Systems Manager handles these options for the supported maintenance window task
 *       types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p>
 *             <p>For Step Functions tasks, Systems Manager ignores any values specified for
 *      <code>TaskParameters</code> and <code>LoggingInfo</code>.</p>
 *          </note>
 */
export interface MaintenanceWindowStepFunctionsParameters {
  /**
   * <p>The inputs for the <code>STEP_FUNCTIONS</code> task.</p>
   */
  Input?: string;

  /**
   * <p>The name of the <code>STEP_FUNCTIONS</code> task.</p>
   */
  Name?: string;
}

export namespace MaintenanceWindowStepFunctionsParameters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MaintenanceWindowStepFunctionsParameters): any => ({
    ...obj,
    ...(obj.Input && { Input: SENSITIVE_STRING }),
  });
}

/**
 * <p>The parameters for task execution.</p>
 */
export interface MaintenanceWindowTaskInvocationParameters {
  /**
   * <p>The parameters for a <code>RUN_COMMAND</code> task type.</p>
   */
  RunCommand?: MaintenanceWindowRunCommandParameters;

  /**
   * <p>The parameters for an <code>AUTOMATION</code> task type.</p>
   */
  Automation?: MaintenanceWindowAutomationParameters;

  /**
   * <p>The parameters for a <code>STEP_FUNCTIONS</code> task type.</p>
   */
  StepFunctions?: MaintenanceWindowStepFunctionsParameters;

  /**
   * <p>The parameters for a <code>LAMBDA</code> task type.</p>
   */
  Lambda?: MaintenanceWindowLambdaParameters;
}

export namespace MaintenanceWindowTaskInvocationParameters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MaintenanceWindowTaskInvocationParameters): any => ({
    ...obj,
    ...(obj.RunCommand && { RunCommand: MaintenanceWindowRunCommandParameters.filterSensitiveLog(obj.RunCommand) }),
    ...(obj.StepFunctions && {
      StepFunctions: MaintenanceWindowStepFunctionsParameters.filterSensitiveLog(obj.StepFunctions),
    }),
    ...(obj.Lambda && { Lambda: MaintenanceWindowLambdaParameters.filterSensitiveLog(obj.Lambda) }),
  });
}

/**
 * <p>Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and
 *    remediate operational work items (OpsItems) impacting the performance and health of their Amazon Web Services
 *    resources. OpsCenter is integrated with Amazon EventBridge and Amazon CloudWatch. This
 *    means you can configure these services to automatically create an OpsItem in OpsCenter when a
 *     CloudWatch alarm enters the ALARM state or when EventBridge processes an event from
 *    any Amazon Web Services service that publishes events. Configuring Amazon CloudWatch alarms and EventBridge events to automatically create OpsItems allows you to quickly diagnose and remediate
 *    issues with Amazon Web Services resources from a single console.</p>
 *          <p>To help you diagnose issues, each OpsItem includes contextually relevant information such as
 *    the name and ID of the Amazon Web Services resource that generated the OpsItem, alarm or event details, alarm
 *    history, and an alarm timeline graph. For the Amazon Web Services resource, OpsCenter aggregates information
 *    from Config, CloudTrail logs, and EventBridge, so you don't have
 *    to navigate across multiple console pages during your investigation. For more information, see
 *     <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p>
 */
export interface OpsItem {
  /**
   * <p>The ARN of the Amazon Web Services account that created the OpsItem.</p>
   */
  CreatedBy?: string;

  /**
   * <p>The type of OpsItem. Currently, the only valid values are <code>/aws/changerequest</code>
   *    and <code>/aws/issue</code>.</p>
   */
  OpsItemType?: string;

  /**
   * <p>The date and time the OpsItem was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The OpsItem description.</p>
   */
  Description?: string;

  /**
   * <p>The ARN of the Amazon Web Services account that last updated the OpsItem.</p>
   */
  LastModifiedBy?: string;

  /**
   * <p>The date and time the OpsItem was last updated.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of an Amazon Simple Notification Service (Amazon SNS) topic where
   *    notifications are sent when this OpsItem is edited or changed.</p>
   */
  Notifications?: OpsItemNotification[];

  /**
   * <p>The importance of this OpsItem in relation to other OpsItems in the system.</p>
   */
  Priority?: number;

  /**
   * <p>One or more OpsItems that share something in common with the current OpsItem. For example,
   *    related OpsItems can include OpsItems with similar error messages, impacted resources, or
   *    statuses for the impacted resource.</p>
   */
  RelatedOpsItems?: RelatedOpsItem[];

  /**
   * <p>The OpsItem status. Status can be <code>Open</code>, <code>In Progress</code>, or
   *     <code>Resolved</code>. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-working-with-OpsItems-editing-details.html">Editing OpsItem details</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   */
  Status?: OpsItemStatus | string;

  /**
   * <p>The ID of the OpsItem.</p>
   */
  OpsItemId?: string;

  /**
   * <p>The version of this OpsItem. Each time the OpsItem is edited the version number increments
   *    by one.</p>
   */
  Version?: string;

  /**
   * <p>A short heading that describes the nature of the OpsItem and the impacted resource.</p>
   */
  Title?: string;

  /**
   * <p>The origin of the OpsItem, such as Amazon EC2 or Systems Manager. The impacted resource is a subset of
   *    source.</p>
   */
  Source?: string;

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
   * <p>An OpsItem category. Category options include: Availability, Cost, Performance, Recovery,
   *    Security.</p>
   */
  Category?: string;

  /**
   * <p>The severity of the OpsItem. Severity options range from 1 to 4.</p>
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

export namespace OpsItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OpsItem): any => ({
    ...obj,
  });
}

/**
 * <p>A filter for viewing OpsData summaries.</p>
 */
export interface OpsFilter {
  /**
   * <p>The name of the filter.</p>
   */
  Key: string | undefined;

  /**
   * <p>The filter value.</p>
   */
  Values: string[] | undefined;

  /**
   * <p>The type of filter.</p>
   */
  Type?: OpsFilterOperatorType | string;
}

export namespace OpsFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OpsFilter): any => ({
    ...obj,
  });
}

/**
 * <p>The OpsItem data type to return.</p>
 */
export interface OpsResultAttribute {
  /**
   * <p>Name of the data type. Valid value: <code>AWS:OpsItem</code>,
   *     <code>AWS:EC2InstanceInformation</code>, <code>AWS:OpsItemTrendline</code>, or
   *     <code>AWS:ComplianceSummary</code>.</p>
   */
  TypeName: string | undefined;
}

export namespace OpsResultAttribute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OpsResultAttribute): any => ({
    ...obj,
  });
}

/**
 * <p>The OpsData summary.</p>
 */
export interface OpsEntityItem {
  /**
   * <p>The time the OpsData was captured.</p>
   */
  CaptureTime?: string;

  /**
   * <p>The details of an OpsData summary.</p>
   */
  Content?: Record<string, string>[];
}

export namespace OpsEntityItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OpsEntityItem): any => ({
    ...obj,
  });
}

/**
 * <p>The result of the query.</p>
 */
export interface OpsEntity {
  /**
   * <p>The query ID.</p>
   */
  Id?: string;

  /**
   * <p>The data returned by the query.</p>
   */
  Data?: Record<string, OpsEntityItem>;
}

export namespace OpsEntity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OpsEntity): any => ({
    ...obj,
  });
}

/**
 * <p>An Amazon Web Services Systems Manager parameter in Parameter Store.</p>
 */
export interface Parameter {
  /**
   * <p>The name of the parameter.</p>
   */
  Name?: string;

  /**
   * <p>The type of parameter. Valid values include the following: <code>String</code>,
   *     <code>StringList</code>, and <code>SecureString</code>.</p>
   *          <note>
   *             <p>If type is <code>StringList</code>, the system returns a comma-separated string with no
   *     spaces between commas in the <code>Value</code> field.</p>
   *          </note>
   */
  Type?: ParameterType | string;

  /**
   * <p>The parameter value.</p>
   *          <note>
   *             <p>If type is <code>StringList</code>, the system returns a comma-separated string with no
   *     spaces between commas in the <code>Value</code> field.</p>
   *          </note>
   */
  Value?: string;

  /**
   * <p>The parameter version.</p>
   */
  Version?: number;

  /**
   * <p>Either the version number or the label used to retrieve the parameter value. Specify
   *    selectors by using one of the following formats:</p>
   *          <p>parameter_name:version</p>
   *          <p>parameter_name:label</p>
   */
  Selector?: string;

  /**
   * <p>Applies to parameters that reference information in other Amazon Web Services services.
   *     <code>SourceResult</code> is the raw result or response from the source.</p>
   */
  SourceResult?: string;

  /**
   * <p>Date the parameter was last changed or updated and the parameter version was created.</p>
   */
  LastModifiedDate?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the parameter.</p>
   */
  ARN?: string;

  /**
   * <p>The data type of the parameter, such as <code>text</code> or <code>aws:ec2:image</code>. The
   *    default is <code>text</code>.</p>
   */
  DataType?: string;
}

export namespace Parameter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Parameter): any => ({
    ...obj,
    ...(obj.Value && { Value: SENSITIVE_STRING }),
  });
}

/**
 * <p>The query key ID isn't valid.</p>
 */
export class InvalidKeyId extends __BaseException {
  readonly name: "InvalidKeyId" = "InvalidKeyId";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidKeyId, __BaseException>) {
    super({
      name: "InvalidKeyId",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidKeyId.prototype);
  }
}

/**
 * <p>The specified parameter version wasn't found. Verify the parameter name and version, and try
 *    again.</p>
 */
export class ParameterVersionNotFound extends __BaseException {
  readonly name: "ParameterVersionNotFound" = "ParameterVersionNotFound";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ParameterVersionNotFound, __BaseException>) {
    super({
      name: "ParameterVersionNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ParameterVersionNotFound.prototype);
  }
}

/**
 * <p>Information about parameter usage.</p>
 */
export interface ParameterHistory {
  /**
   * <p>The name of the parameter.</p>
   */
  Name?: string;

  /**
   * <p>The type of parameter used.</p>
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
   * <p>Information about the parameter.</p>
   */
  Description?: string;

  /**
   * <p>The parameter value.</p>
   */
  Value?: string;

  /**
   * <p>Parameter names can include the following letters and symbols.</p>
   *          <p>a-zA-Z0-9_.-</p>
   */
  AllowedPattern?: string;

  /**
   * <p>The parameter version.</p>
   */
  Version?: number;

  /**
   * <p>Labels assigned to the parameter version.</p>
   */
  Labels?: string[];

  /**
   * <p>The parameter tier.</p>
   */
  Tier?: ParameterTier | string;

  /**
   * <p>Information about the policies assigned to a parameter.</p>
   *          <p>
   *             <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-policies.html">Assigning parameter
   *     policies</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   */
  Policies?: ParameterInlinePolicy[];

  /**
   * <p>The data type of the parameter, such as <code>text</code> or <code>aws:ec2:image</code>. The
   *    default is <code>text</code>.</p>
   */
  DataType?: string;
}

export namespace ParameterHistory {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ParameterHistory): any => ({
    ...obj,
    ...(obj.Value && { Value: SENSITIVE_STRING }),
  });
}

/**
 * <p>The service setting data structure.</p>
 *          <p>
 *             <code>ServiceSetting</code> is an account-level setting for an Amazon Web Services service. This setting
 *    defines how a user interacts with or uses a service or a feature of a service. For example, if an
 *    Amazon Web Services service charges money to the account based on feature or service usage, then the Amazon Web Services
 *    service team might create a default setting of "false". This means the user can't use this
 *    feature unless they change the setting to "true" and intentionally opt in for a paid
 *    feature.</p>
 *          <p>Services map a <code>SettingId</code> object to a setting value. Amazon Web Services services teams define
 *    the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>,
 *    but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code>
 *    permission for the setting. Use the <a>UpdateServiceSetting</a> API operation to
 *    change the default setting. Or, use the <a>ResetServiceSetting</a> to change the value
 *    back to the original value defined by the Amazon Web Services service team.</p>
 */
export interface ServiceSetting {
  /**
   * <p>The ID of the service setting.</p>
   */
  SettingId?: string;

  /**
   * <p>The value of the service setting.</p>
   */
  SettingValue?: string;

  /**
   * <p>The last time the service setting was modified.</p>
   */
  LastModifiedDate?: Date;

  /**
   * <p>The ARN of the last modified user. This field is populated only if the setting value was
   *    overwritten.</p>
   */
  LastModifiedUser?: string;

  /**
   * <p>The ARN of the service setting.</p>
   */
  ARN?: string;

  /**
   * <p>The status of the service setting. The value can be Default, Customized or
   *    PendingUpdate.</p>
   *          <ul>
   *             <li>
   *                <p>Default: The current setting uses a default value provisioned by the Amazon Web Services service
   *      team.</p>
   *             </li>
   *             <li>
   *                <p>Customized: The current setting use a custom value specified by the customer.</p>
   *             </li>
   *             <li>
   *                <p>PendingUpdate: The current setting uses a default or custom value, but a setting change
   *      request is pending approval.</p>
   *             </li>
   *          </ul>
   */
  Status?: string;
}

export namespace ServiceSetting {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceSetting): any => ({
    ...obj,
  });
}

/**
 * <p>The specified service setting wasn't found. Either the service name or the setting hasn't
 *    been provisioned by the Amazon Web Services service team.</p>
 */
export class ServiceSettingNotFound extends __BaseException {
  readonly name: "ServiceSettingNotFound" = "ServiceSettingNotFound";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceSettingNotFound, __BaseException>) {
    super({
      name: "ServiceSettingNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceSettingNotFound.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A parameter version can have a maximum of ten labels.</p>
 */
export class ParameterVersionLabelLimitExceeded extends __BaseException {
  readonly name: "ParameterVersionLabelLimitExceeded" = "ParameterVersionLabelLimitExceeded";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ParameterVersionLabelLimitExceeded, __BaseException>) {
    super({
      name: "ParameterVersionLabelLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ParameterVersionLabelLimitExceeded.prototype);
  }
}

/**
 * <p>Describes a filter.</p>
 */
export interface AssociationFilter {
  /**
   * <p>The name of the filter.</p>
   *          <note>
   *             <p>
   *                <code>InstanceId</code> has been deprecated.</p>
   *          </note>
   */
  key: AssociationFilterKey | string | undefined;

  /**
   * <p>The filter value.</p>
   */
  value: string | undefined;
}

export namespace AssociationFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociationFilter): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an association of a Amazon Web Services Systems Manager document (SSM document) and a managed node.</p>
 */
export interface Association {
  /**
   * <p>The name of the SSM document.</p>
   */
  Name?: string;

  /**
   * <p>The managed node ID.</p>
   */
  InstanceId?: string;

  /**
   * <p>The ID created by the system when you create an association. An association is a binding
   *    between a document and a set of targets with a schedule.</p>
   */
  AssociationId?: string;

  /**
   * <p>The association version.</p>
   */
  AssociationVersion?: string;

  /**
   * <p>The version of the document used in the association. If you change a document version for a
   *    State Manager association, Systems Manager immediately runs the association unless you previously specifed
   *    the <code>apply-only-at-cron-interval</code> parameter.</p>
   *
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
   * <p>The managed nodes targeted by the request to create an association. You can target all
   *    managed nodes in an Amazon Web Services account by specifying the <code>InstanceIds</code> key with a value of
   *     <code>*</code>.</p>
   */
  Targets?: Target[];

  /**
   * <p>The date on which the association was last run.</p>
   */
  LastExecutionDate?: Date;

  /**
   * <p>Information about the association.</p>
   */
  Overview?: AssociationOverview;

  /**
   * <p>A cron expression that specifies a schedule when the association runs. The schedule runs in
   *    Coordinated Universal Time (UTC).</p>
   */
  ScheduleExpression?: string;

  /**
   * <p>The association name.</p>
   */
  AssociationName?: string;

  /**
   * <p>Number of days to wait after the scheduled day to run an association.</p>
   */
  ScheduleOffset?: number;

  /**
   * <p>A key-value mapping of document parameters to target resources. Both Targets and TargetMaps
   *    can't be specified together.</p>
   */
  TargetMaps?: Record<string, string[]>[];
}

export namespace Association {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Association): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the association version.</p>
 */
export interface AssociationVersionInfo {
  /**
   * <p>The ID created by the system when the association was created.</p>
   */
  AssociationId?: string;

  /**
   * <p>The association version.</p>
   */
  AssociationVersion?: string;

  /**
   * <p>The date the association version was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The name specified when the association was created.</p>
   */
  Name?: string;

  /**
   * <p>The version of an Amazon Web Services Systems Manager document (SSM document) used when the association version was
   *    created.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>Parameters specified when the association version was created.</p>
   */
  Parameters?: Record<string, string[]>;

  /**
   * <p>The targets specified for the association when the association version was created. </p>
   */
  Targets?: Target[];

  /**
   * <p>The cron or rate schedule specified for the association when the association version was
   *    created.</p>
   */
  ScheduleExpression?: string;

  /**
   * <p>The location in Amazon S3 specified for the association when the association version
   *    was created.</p>
   */
  OutputLocation?: InstanceAssociationOutputLocation;

  /**
   * <p>The name specified for the association version when the association version was
   *    created.</p>
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
   *    associations are gated under. The associations for this version only run when that Change
   *    Calendar is open. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-change-calendar">Amazon Web Services Systems Manager Change
   *     Calendar</a>.</p>
   */
  CalendarNames?: string[];

  /**
   * <p>The combination of Amazon Web Services Regions and Amazon Web Services accounts where you wanted to run the association
   *    when this association version was created.</p>
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
}

export namespace AssociationVersionInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociationVersionInfo): any => ({
    ...obj,
    ...(obj.Parameters && { Parameters: SENSITIVE_STRING }),
  });
}

/**
 * <p>Describes a command filter.</p>
 *          <note>
 *             <p>A managed node ID can't be specified when a command status is <code>Pending</code> because
 *     the command hasn't run on the node yet.</p>
 *          </note>
 */
export interface CommandFilter {
  /**
   * <p>The name of the filter.</p>
   *          <note>
   *             <p>The <code>ExecutionStage</code> filter can't be used with the
   *      <code>ListCommandInvocations</code> operation, only with <code>ListCommands</code>.</p>
   *          </note>
   */
  key: CommandFilterKey | string | undefined;

  /**
   * <p>The filter value. Valid values for each filter key are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>InvokedAfter</b>: Specify a timestamp to limit your results.
   *      For example, specify <code>2021-07-07T00:00:00Z</code> to see a list of command executions
   *      occurring July 7, 2021, and later.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>InvokedBefore</b>: Specify a timestamp to limit your results.
   *      For example, specify <code>2021-07-07T00:00:00Z</code> to see a list of command executions from
   *      before July 7, 2021.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Status</b>: Specify a valid command status to see a list of
   *      all command executions with that status. The status choices depend on the API you call.</p>
   *                <p>The status values you can specify for <code>ListCommands</code> are:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>Pending</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>InProgress</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Success</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Cancelled</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Failed</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TimedOut</code> (this includes both Delivery and Execution time outs) </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>AccessDenied</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>DeliveryTimedOut</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>ExecutionTimedOut</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Incomplete</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>NoInstancesInTag</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>LimitExceeded</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p>The status values you can specify for <code>ListCommandInvocations</code> are:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>Pending</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>InProgress</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Delayed</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Success</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Cancelled</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Failed</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TimedOut</code> (this includes both Delivery and Execution time outs) </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>AccessDenied</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>DeliveryTimedOut</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>ExecutionTimedOut</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Undeliverable</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>InvalidPlatform</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Terminated</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>DocumentName</b>: Specify name of the Amazon Web Services Systems Manager document (SSM
   *      document) for which you want to see command execution results. For example, specify
   *       <code>AWS-RunPatchBaseline</code> to see command executions that used this SSM document to
   *      perform security patching operations on managed nodes. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ExecutionStage</b>: Specify one of the following values
   *       (<code>ListCommands</code> operations only):</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>Executing</code>: Returns a list of command executions that are currently still
   *        running.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Complete</code>: Returns a list of command executions that have already completed.
   *       </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  value: string | undefined;
}

export namespace CommandFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CommandFilter): any => ({
    ...obj,
  });
}

/**
 * <p>Describes plugin details.</p>
 */
export interface CommandPlugin {
  /**
   * <p>The name of the plugin. Must be one of the following: <code>aws:updateAgent</code>,
   *     <code>aws:domainjoin</code>, <code>aws:applications</code>,
   *    <code>aws:runPowerShellScript</code>, <code>aws:psmodule</code>, <code>aws:cloudWatch</code>,
   *     <code>aws:runShellScript</code>, or <code>aws:updateSSMAgent</code>. </p>
   */
  Name?: string;

  /**
   * <p>The status of this plugin. You can run a document with multiple plugins.</p>
   */
  Status?: CommandPluginStatus | string;

  /**
   * <p>A detailed status of the plugin execution. <code>StatusDetails</code> includes more
   *    information than Status because it includes states resulting from error and concurrency control
   *    parameters. StatusDetails can show different results than Status. For more information about
   *    these statuses, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/monitor-commands.html">Understanding command
   *     statuses</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. StatusDetails can be one of the
   *    following values:</p>
   *          <ul>
   *             <li>
   *                <p>Pending: The command hasn't been sent to the managed node.</p>
   *             </li>
   *             <li>
   *                <p>In Progress: The command has been sent to the managed node but hasn't reached a terminal
   *      state.</p>
   *             </li>
   *             <li>
   *                <p>Success: The execution of the command or plugin was successfully completed. This is a
   *      terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Delivery Timed Out: The command wasn't delivered to the managed node before the delivery
   *      timeout expired. Delivery timeouts don't count against the parent command's
   *       <code>MaxErrors</code> limit, but they do contribute to whether the parent command status is
   *      Success or Incomplete. This is a terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Execution Timed Out: Command execution started on the managed node, but the execution
   *      wasn't complete before the execution timeout expired. Execution timeouts count against the
   *       <code>MaxErrors</code> limit of the parent command. This is a terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Failed: The command wasn't successful on the managed node. For a plugin, this indicates
   *      that the result code wasn't zero. For a command invocation, this indicates that the result code
   *      for one or more plugins wasn't zero. Invocation failures count against the MaxErrors limit of
   *      the parent command. This is a terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Cancelled: The command was terminated before it was completed. This is a terminal
   *      state.</p>
   *             </li>
   *             <li>
   *                <p>Undeliverable: The command can't be delivered to the managed node. The managed node might
   *      not exist, or it might not be responding. Undeliverable invocations don't count against the
   *      parent command's MaxErrors limit, and they don't contribute to whether the parent command
   *      status is Success or Incomplete. This is a terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Terminated: The parent command exceeded its MaxErrors limit and subsequent command
   *      invocations were canceled by the system. This is a terminal state.</p>
   *             </li>
   *          </ul>
   */
  StatusDetails?: string;

  /**
   * <p>A numeric response code generated after running the plugin. </p>
   */
  ResponseCode?: number;

  /**
   * <p>The time the plugin started running. </p>
   */
  ResponseStartDateTime?: Date;

  /**
   * <p>The time the plugin stopped running. Could stop prematurely if, for example, a cancel
   *    command was sent. </p>
   */
  ResponseFinishDateTime?: Date;

  /**
   * <p>Output of the plugin execution.</p>
   */
  Output?: string;

  /**
   * <p>The URL for the complete text written by the plugin to stdout in Amazon S3. If the
   *    S3 bucket for the command wasn't specified, then this string is empty.</p>
   */
  StandardOutputUrl?: string;

  /**
   * <p>The URL for the complete text written by the plugin to stderr. If execution isn't yet
   *    complete, then this string is empty.</p>
   */
  StandardErrorUrl?: string;

  /**
   * <p>(Deprecated) You can no longer specify this parameter. The system ignores it. Instead,
   *    Amazon Web Services Systems Manager automatically determines the S3 bucket region.</p>
   */
  OutputS3Region?: string;

  /**
   * <p>The S3 bucket where the responses to the command executions should be stored. This was
   *    requested when issuing the command. For example, in the following response:</p>
   *          <p>
   *             <code>doc-example-bucket/ab19cb99-a030-46dd-9dfc-8eSAMPLEPre-Fix/i-02573cafcfEXAMPLE/awsrunShellScript</code>
   *          </p>
   *          <p>
   *             <code>doc-example-bucket</code> is the name of the S3 bucket;</p>
   *          <p>
   *             <code>ab19cb99-a030-46dd-9dfc-8eSAMPLEPre-Fix</code> is the name of the S3 prefix;</p>
   *          <p>
   *             <code>i-02573cafcfEXAMPLE</code> is the managed node ID;</p>
   *          <p>
   *             <code>awsrunShellScript</code> is the name of the plugin.</p>
   */
  OutputS3BucketName?: string;

  /**
   * <p>The S3 directory path inside the bucket where the responses to the command executions should
   *    be stored. This was requested when issuing the command. For example, in the following
   *    response:</p>
   *          <p>
   *             <code>doc-example-bucket/ab19cb99-a030-46dd-9dfc-8eSAMPLEPre-Fix/i-02573cafcfEXAMPLE/awsrunShellScript</code>
   *          </p>
   *          <p>
   *             <code>doc-example-bucket</code> is the name of the S3 bucket;</p>
   *          <p>
   *             <code>ab19cb99-a030-46dd-9dfc-8eSAMPLEPre-Fix</code> is the name of the S3 prefix;</p>
   *          <p>
   *             <code>i-02573cafcfEXAMPLE</code> is the managed node ID;</p>
   *          <p>
   *             <code>awsrunShellScript</code> is the name of the plugin.</p>
   */
  OutputS3KeyPrefix?: string;
}

export namespace CommandPlugin {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CommandPlugin): any => ({
    ...obj,
  });
}

/**
 * <p>An invocation is a copy of a command sent to a specific managed node. A command can apply to
 *    one or more managed nodes. A command invocation applies to one managed node. For example, if a
 *    user runs <code>SendCommand</code> against three managed nodes, then a command invocation is
 *    created for each requested managed node ID. A command invocation returns status and detail
 *    information about a command you ran. </p>
 */
export interface CommandInvocation {
  /**
   * <p>The command against which this invocation was requested.</p>
   */
  CommandId?: string;

  /**
   * <p>The managed node ID in which this invocation was requested.</p>
   */
  InstanceId?: string;

  /**
   * <p>The fully qualified host name of the managed node.</p>
   */
  InstanceName?: string;

  /**
   * <p>User-specified information about the command, such as a brief description of what the
   *    command should do.</p>
   */
  Comment?: string;

  /**
   * <p>The document name that was requested for execution.</p>
   */
  DocumentName?: string;

  /**
   * <p>The Systems Manager document (SSM document) version.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>The time and date the request was sent to this managed node.</p>
   */
  RequestedDateTime?: Date;

  /**
   * <p>Whether or not the invocation succeeded, failed, or is pending.</p>
   */
  Status?: CommandInvocationStatus | string;

  /**
   * <p>A detailed status of the command execution for each invocation (each managed node targeted
   *    by the command). StatusDetails includes more information than Status because it includes states
   *    resulting from error and concurrency control parameters. StatusDetails can show different results
   *    than Status. For more information about these statuses, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/monitor-commands.html">Understanding command
   *     statuses</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. StatusDetails can be one of the
   *    following values:</p>
   *          <ul>
   *             <li>
   *                <p>Pending: The command hasn't been sent to the managed node.</p>
   *             </li>
   *             <li>
   *                <p>In Progress: The command has been sent to the managed node but hasn't reached a terminal
   *      state.</p>
   *             </li>
   *             <li>
   *                <p>Success: The execution of the command or plugin was successfully completed. This is a
   *      terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Delivery Timed Out: The command wasn't delivered to the managed node before the delivery
   *      timeout expired. Delivery timeouts don't count against the parent command's
   *       <code>MaxErrors</code> limit, but they do contribute to whether the parent command status is
   *      Success or Incomplete. This is a terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Execution Timed Out: Command execution started on the managed node, but the execution
   *      wasn't complete before the execution timeout expired. Execution timeouts count against the
   *       <code>MaxErrors</code> limit of the parent command. This is a terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Failed: The command wasn't successful on the managed node. For a plugin, this indicates
   *      that the result code wasn't zero. For a command invocation, this indicates that the result code
   *      for one or more plugins wasn't zero. Invocation failures count against the
   *       <code>MaxErrors</code> limit of the parent command. This is a terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Cancelled: The command was terminated before it was completed. This is a terminal
   *      state.</p>
   *             </li>
   *             <li>
   *                <p>Undeliverable: The command can't be delivered to the managed node. The managed node might
   *      not exist or might not be responding. Undeliverable invocations don't count against the parent
   *      command's MaxErrors limit and don't contribute to whether the parent command status is Success
   *      or Incomplete. This is a terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Terminated: The parent command exceeded its MaxErrors limit and subsequent command
   *      invocations were canceled by the system. This is a terminal state.</p>
   *             </li>
   *          </ul>
   */
  StatusDetails?: string;

  /**
   * <p> Gets the trace output sent by the agent. </p>
   */
  TraceOutput?: string;

  /**
   * <p>The URL to the plugin's StdOut file in Amazon Simple Storage Service (Amazon S3), if the S3
   *    bucket was defined for the parent command. For an invocation, <code>StandardOutputUrl</code> is
   *    populated if there is just one plugin defined for the command, and the S3 bucket was defined for
   *    the command.</p>
   */
  StandardOutputUrl?: string;

  /**
   * <p>The URL to the plugin's StdErr file in Amazon Simple Storage Service (Amazon S3), if the S3
   *    bucket was defined for the parent command. For an invocation, <code>StandardErrorUrl</code> is
   *    populated if there is just one plugin defined for the command, and the S3 bucket was defined for
   *    the command.</p>
   */
  StandardErrorUrl?: string;

  /**
   * <p>Plugins processed by the command.</p>
   */
  CommandPlugins?: CommandPlugin[];

  /**
   * <p>The Identity and Access Management (IAM) service role that Run Command, a capability
   *    of Amazon Web Services Systems Manager, uses to act on your behalf when sending notifications about command status changes
   *    on a per managed node basis.</p>
   */
  ServiceRole?: string;

  /**
   * <p>Configurations for sending notifications about command status changes on a per managed node
   *    basis.</p>
   */
  NotificationConfig?: NotificationConfig;

  /**
   * <p>Amazon CloudWatch Logs information where you want Amazon Web Services Systems Manager to send the command
   *    output.</p>
   */
  CloudWatchOutputConfig?: CloudWatchOutputConfig;
}

export namespace CommandInvocation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CommandInvocation): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a command request.</p>
 */
export interface Command {
  /**
   * <p>A unique identifier for this command.</p>
   */
  CommandId?: string;

  /**
   * <p>The name of the document requested for execution.</p>
   */
  DocumentName?: string;

  /**
   * <p>The Systems Manager document (SSM document) version.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>User-specified information about the command, such as a brief description of what the
   *    command should do.</p>
   */
  Comment?: string;

  /**
   * <p>If this time is reached and the command hasn't already started running, it won't run.
   *    Calculated based on the <code>ExpiresAfter</code> user input provided as part of the
   *     <code>SendCommand</code> API operation.</p>
   */
  ExpiresAfter?: Date;

  /**
   * <p>The parameter values to be inserted in the document when running the command.</p>
   */
  Parameters?: Record<string, string[]>;

  /**
   * <p>The managed node IDs against which this command was requested.</p>
   */
  InstanceIds?: string[];

  /**
   * <p>An array of search criteria that targets managed nodes using a Key,Value combination that
   *    you specify. Targets is required if you don't provide one or more managed node IDs in the
   *    call.</p>
   */
  Targets?: Target[];

  /**
   * <p>The date and time the command was requested.</p>
   */
  RequestedDateTime?: Date;

  /**
   * <p>The status of the command.</p>
   */
  Status?: CommandStatus | string;

  /**
   * <p>A detailed status of the command execution. <code>StatusDetails</code> includes more
   *    information than <code>Status</code> because it includes states resulting from error and
   *    concurrency control parameters. <code>StatusDetails</code> can show different results than
   *    Status. For more information about these statuses, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/monitor-commands.html">Understanding command
   *     statuses</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. StatusDetails can be one of the
   *    following values:</p>
   *          <ul>
   *             <li>
   *                <p>Pending: The command hasn't been sent to any managed nodes.</p>
   *             </li>
   *             <li>
   *                <p>In Progress: The command has been sent to at least one managed node but hasn't reached a
   *      final state on all managed nodes.</p>
   *             </li>
   *             <li>
   *                <p>Success: The command successfully ran on all invocations. This is a terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Delivery Timed Out: The value of MaxErrors or more command invocations shows a status of
   *      Delivery Timed Out. This is a terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Execution Timed Out: The value of MaxErrors or more command invocations shows a status of
   *      Execution Timed Out. This is a terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Failed: The value of MaxErrors or more command invocations shows a status of Failed. This
   *      is a terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Incomplete: The command was attempted on all managed nodes and one or more invocations
   *      doesn't have a value of Success but not enough invocations failed for the status to be Failed.
   *      This is a terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Cancelled: The command was terminated before it was completed. This is a terminal
   *      state.</p>
   *             </li>
   *             <li>
   *                <p>Rate Exceeded: The number of managed nodes targeted by the command exceeded the account
   *      limit for pending invocations. The system has canceled the command before running it on any
   *      managed node. This is a terminal state.</p>
   *             </li>
   *          </ul>
   */
  StatusDetails?: string;

  /**
   * <p>(Deprecated) You can no longer specify this parameter. The system ignores it. Instead, Systems Manager
   *    automatically determines the Amazon Web Services Region of the S3 bucket.</p>
   */
  OutputS3Region?: string;

  /**
   * <p>The S3 bucket where the responses to the command executions should be stored. This was
   *    requested when issuing the command.</p>
   */
  OutputS3BucketName?: string;

  /**
   * <p>The S3 directory path inside the bucket where the responses to the command executions should
   *    be stored. This was requested when issuing the command.</p>
   */
  OutputS3KeyPrefix?: string;

  /**
   * <p>The maximum number of managed nodes that are allowed to run the command at the same time.
   *    You can specify a number of managed nodes, such as 10, or a percentage of nodes, such as 10%. The
   *    default value is 50. For more information about how to use <code>MaxConcurrency</code>, see
   *     <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/run-command.html">Running
   *     commands using Systems Manager Run Command</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   */
  MaxConcurrency?: string;

  /**
   * <p>The maximum number of errors allowed before the system stops sending the command to
   *    additional targets. You can specify a number of errors, such as 10, or a percentage or errors,
   *    such as 10%. The default value is <code>0</code>. For more information about how to use
   *     <code>MaxErrors</code>, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/run-command.html">Running commands using Systems Manager Run
   *     Command</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   */
  MaxErrors?: string;

  /**
   * <p>The number of targets for the command.</p>
   */
  TargetCount?: number;

  /**
   * <p>The number of targets for which the command invocation reached a terminal state. Terminal
   *    states include the following: Success, Failed, Execution Timed Out, Delivery Timed Out,
   *    Cancelled, Terminated, or Undeliverable.</p>
   */
  CompletedCount?: number;

  /**
   * <p>The number of targets for which the status is Failed or Execution Timed Out.</p>
   */
  ErrorCount?: number;

  /**
   * <p>The number of targets for which the status is Delivery Timed Out.</p>
   */
  DeliveryTimedOutCount?: number;

  /**
   * <p>The Identity and Access Management (IAM) service role that Run Command, a capability
   *    of Amazon Web Services Systems Manager, uses to act on your behalf when sending notifications about command status changes.
   *   </p>
   */
  ServiceRole?: string;

  /**
   * <p>Configurations for sending notifications about command status changes. </p>
   */
  NotificationConfig?: NotificationConfig;

  /**
   * <p>Amazon CloudWatch Logs information where you want Amazon Web Services Systems Manager to send the command
   *    output.</p>
   */
  CloudWatchOutputConfig?: CloudWatchOutputConfig;

  /**
   * <p>The <code>TimeoutSeconds</code> value specified for a command.</p>
   */
  TimeoutSeconds?: number;
}

export namespace Command {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Command): any => ({
    ...obj,
    ...(obj.Parameters && { Parameters: SENSITIVE_STRING }),
  });
}

/**
 * <p>One or more filters. Use a filter to return a more specific list of results.</p>
 */
export interface ComplianceStringFilter {
  /**
   * <p>The name of the filter.</p>
   */
  Key?: string;

  /**
   * <p>The value for which to search.</p>
   */
  Values?: string[];

  /**
   * <p>The type of comparison that should be performed for the value: Equal, NotEqual, BeginWith,
   *    LessThan, or GreaterThan.</p>
   */
  Type?: ComplianceQueryOperatorType | string;
}

export namespace ComplianceStringFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ComplianceStringFilter): any => ({
    ...obj,
  });
}

/**
 * <p>A summary of the call execution that includes an execution ID, the type of execution (for
 *    example, <code>Command</code>), and the date/time of the execution using a datetime object that
 *    is saved in the following format: yyyy-MM-dd'T'HH:mm:ss'Z'.</p>
 */
export interface ComplianceExecutionSummary {
  /**
   * <p>The time the execution ran as a datetime object that is saved in the following format:
   *    yyyy-MM-dd'T'HH:mm:ss'Z'.</p>
   */
  ExecutionTime: Date | undefined;

  /**
   * <p>An ID created by the system when <code>PutComplianceItems</code> was called. For example,
   *     <code>CommandID</code> is a valid execution ID. You can use this ID in subsequent calls.</p>
   */
  ExecutionId?: string;

  /**
   * <p>The type of execution. For example, <code>Command</code> is a valid execution type.</p>
   */
  ExecutionType?: string;
}

export namespace ComplianceExecutionSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ComplianceExecutionSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the compliance as defined by the resource type. For example, for a patch
 *    resource type, <code>Items</code> includes information about the PatchSeverity, Classification,
 *    and so on.</p>
 */
export interface ComplianceItem {
  /**
   * <p>The compliance type. For example, Association (for a State Manager association), Patch, or
   *     Custom:<code>string</code> are all valid compliance types.</p>
   */
  ComplianceType?: string;

  /**
   * <p>The type of resource. <code>ManagedInstance</code> is currently the only supported resource
   *    type.</p>
   */
  ResourceType?: string;

  /**
   * <p>An ID for the resource. For a managed node, this is the node ID.</p>
   */
  ResourceId?: string;

  /**
   * <p>An ID for the compliance item. For example, if the compliance item is a Windows patch, the
   *    ID could be the number of the KB article; for example: KB4010320.</p>
   */
  Id?: string;

  /**
   * <p>A title for the compliance item. For example, if the compliance item is a Windows patch, the
   *    title could be the title of the KB article for the patch; for example: Security Update for Active
   *    Directory Federation Services.</p>
   */
  Title?: string;

  /**
   * <p>The status of the compliance item. An item is either COMPLIANT, NON_COMPLIANT, or an empty
   *    string (for Windows patches that aren't applicable).</p>
   */
  Status?: ComplianceStatus | string;

  /**
   * <p>The severity of the compliance status. Severity can be one of the following: Critical, High,
   *    Medium, Low, Informational, Unspecified.</p>
   */
  Severity?: ComplianceSeverity | string;

  /**
   * <p>A summary for the compliance item. The summary includes an execution ID, the execution type
   *    (for example, command), and the execution time.</p>
   */
  ExecutionSummary?: ComplianceExecutionSummary;

  /**
   * <p>A "Key": "Value" tag combination for the compliance item.</p>
   */
  Details?: Record<string, string>;
}

export namespace ComplianceItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ComplianceItem): any => ({
    ...obj,
  });
}

/**
 * <p>The number of managed nodes found for each patch severity level defined in the request
 *    filter.</p>
 */
export interface SeveritySummary {
  /**
   * <p>The total number of resources or compliance items that have a severity level of critical.
   *    Critical severity is determined by the organization that published the compliance items.</p>
   */
  CriticalCount?: number;

  /**
   * <p>The total number of resources or compliance items that have a severity level of high. High
   *    severity is determined by the organization that published the compliance items.</p>
   */
  HighCount?: number;

  /**
   * <p>The total number of resources or compliance items that have a severity level of medium.
   *    Medium severity is determined by the organization that published the compliance items.</p>
   */
  MediumCount?: number;

  /**
   * <p>The total number of resources or compliance items that have a severity level of low. Low
   *    severity is determined by the organization that published the compliance items.</p>
   */
  LowCount?: number;

  /**
   * <p>The total number of resources or compliance items that have a severity level of
   *    informational. Informational severity is determined by the organization that published the
   *    compliance items.</p>
   */
  InformationalCount?: number;

  /**
   * <p>The total number of resources or compliance items that have a severity level of unspecified.
   *    Unspecified severity is determined by the organization that published the compliance
   *    items.</p>
   */
  UnspecifiedCount?: number;
}

export namespace SeveritySummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SeveritySummary): any => ({
    ...obj,
  });
}

/**
 * <p>A summary of resources that are compliant. The summary is organized according to the
 *    resource count for each compliance type.</p>
 */
export interface CompliantSummary {
  /**
   * <p>The total number of resources that are compliant.</p>
   */
  CompliantCount?: number;

  /**
   * <p>A summary of the compliance severity by compliance type.</p>
   */
  SeveritySummary?: SeveritySummary;
}

export namespace CompliantSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CompliantSummary): any => ({
    ...obj,
  });
}

/**
 * <p>A summary of resources that aren't compliant. The summary is organized according to resource
 *    type.</p>
 */
export interface NonCompliantSummary {
  /**
   * <p>The total number of compliance items that aren't compliant.</p>
   */
  NonCompliantCount?: number;

  /**
   * <p>A summary of the non-compliance severity by compliance type</p>
   */
  SeveritySummary?: SeveritySummary;
}

export namespace NonCompliantSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NonCompliantSummary): any => ({
    ...obj,
  });
}

/**
 * <p>A summary of compliance information by compliance type.</p>
 */
export interface ComplianceSummaryItem {
  /**
   * <p>The type of compliance item. For example, the compliance type can be Association, Patch, or
   *    Custom:string.</p>
   */
  ComplianceType?: string;

  /**
   * <p>A list of COMPLIANT items for the specified compliance type.</p>
   */
  CompliantSummary?: CompliantSummary;

  /**
   * <p>A list of NON_COMPLIANT items for the specified compliance type.</p>
   */
  NonCompliantSummary?: NonCompliantSummary;
}

export namespace ComplianceSummaryItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ComplianceSummaryItem): any => ({
    ...obj,
  });
}

/**
 * <p>Information about comments added to a document review request.</p>
 */
export interface DocumentReviewCommentSource {
  /**
   * <p>The type of information added to a review request. Currently, only the value
   *     <code>Comment</code> is supported.</p>
   */
  Type?: DocumentReviewCommentType | string;

  /**
   * <p>The content of a comment entered by a user who requests a review of a new document version,
   *    or who reviews the new version.</p>
   */
  Content?: string;
}

export namespace DocumentReviewCommentSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DocumentReviewCommentSource): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a reviewer's response to a document review request.</p>
 */
export interface DocumentReviewerResponseSource {
  /**
   * <p>The date and time that a reviewer entered a response to a document review request.</p>
   */
  CreateTime?: Date;

  /**
   * <p>The date and time that a reviewer last updated a response to a document review
   *    request.</p>
   */
  UpdatedTime?: Date;

  /**
   * <p>The current review status of a new custom SSM document created by a member of your
   *    organization, or of the latest version of an existing SSM document.</p>
   *          <p>Only one version of a document can be in the APPROVED state at a time. When a new version is
   *    approved, the status of the previous version changes to REJECTED.</p>
   *          <p>Only one version of a document can be in review, or PENDING, at a time.</p>
   */
  ReviewStatus?: ReviewStatus | string;

  /**
   * <p>The comment entered by a reviewer as part of their document review response.</p>
   */
  Comment?: DocumentReviewCommentSource[];

  /**
   * <p>The user in your organization assigned to review a document request.</p>
   */
  Reviewer?: string;
}

export namespace DocumentReviewerResponseSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DocumentReviewerResponseSource): any => ({
    ...obj,
  });
}

/**
 * <p>Details about the response to a document review request.</p>
 */
export interface DocumentMetadataResponseInfo {
  /**
   * <p>Details about a reviewer's response to a document review request.</p>
   */
  ReviewerResponse?: DocumentReviewerResponseSource[];
}

export namespace DocumentMetadataResponseInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DocumentMetadataResponseInfo): any => ({
    ...obj,
  });
}

/**
 * <p>This data type is deprecated. Instead, use <a>DocumentKeyValuesFilter</a>.</p>
 */
export interface DocumentFilter {
  /**
   * <p>The name of the filter.</p>
   */
  key: DocumentFilterKey | string | undefined;

  /**
   * <p>The value of the filter.</p>
   */
  value: string | undefined;
}

export namespace DocumentFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DocumentFilter): any => ({
    ...obj,
  });
}

/**
 * <p>One or more filters. Use a filter to return a more specific list of documents.</p>
 *          <p>For keys, you can specify one or more tags that have been applied to a document. </p>
 *          <p>You can also use Amazon Web Services-provided keys, some of which have specific allowed values. These keys
 *    and their associated values are as follows:</p>
 *          <dl>
 *             <dt>DocumentType</dt>
 *             <dd>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>ApplicationConfiguration</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>ApplicationConfigurationSchema</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>Automation</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>ChangeCalendar</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>Command</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>Package</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>Policy</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>Session</code>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </dd>
 *             <dt>Owner</dt>
 *             <dd>
 *                <p>Note that only one <code>Owner</code> can be specified in a request. For example:
 *        <code>Key=Owner,Values=Self</code>.</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>Amazon</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>Private</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>Public</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>Self</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>ThirdParty</code>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </dd>
 *             <dt>PlatformTypes</dt>
 *             <dd>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>Linux</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>Windows</code>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </dd>
 *          </dl>
 *          <p>
 *             <code>Name</code> is another Amazon Web Services-provided key. If you use <code>Name</code> as a key, you
 *    can use a name prefix to return a list of documents. For example, in the Amazon Web Services CLI, to return a list
 *    of all documents that begin with <code>Te</code>, run the following command:</p>
 *          <p>
 *             <code>aws ssm list-documents --filters Key=Name,Values=Te</code>
 *          </p>
 *          <p>You can also use the <code>TargetType</code> Amazon Web Services-provided key. For a list of valid
 *    resource type values that can be used with this key, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services resource and
 *     property types reference</a> in the <i>CloudFormation User Guide</i>.</p>
 *          <p>If you specify more than two keys, only documents that are identified by all the tags are
 *    returned in the results. If you specify more than two values for a key, documents that are
 *    identified by any of the values are returned in the results.</p>
 *          <p>To specify a custom key-value pair, use the format
 *     <code>Key=tag:tagName,Values=valueName</code>.</p>
 *          <p>For example, if you created a key called region and are using the Amazon Web Services CLI to call the
 *     <code>list-documents</code> command: </p>
 *          <p>
 *             <code>aws ssm list-documents --filters Key=tag:region,Values=east,west
 *     Key=Owner,Values=Self</code>
 *          </p>
 */
export interface DocumentKeyValuesFilter {
  /**
   * <p>The name of the filter key.</p>
   */
  Key?: string;

  /**
   * <p>The value for the filter key.</p>
   */
  Values?: string[];
}

export namespace DocumentKeyValuesFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DocumentKeyValuesFilter): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the name of a SSM document.</p>
 */
export interface DocumentIdentifier {
  /**
   * <p>The name of the SSM document.</p>
   */
  Name?: string;

  /**
   * <p>The date the SSM document was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>An optional field where you can specify a friendly name for the SSM document. This value can
   *    differ for each version of the document. If you want to update this value, see <a>UpdateDocument</a>.</p>
   */
  DisplayName?: string;

  /**
   * <p>The Amazon Web Services user account that created the document.</p>
   */
  Owner?: string;

  /**
   * <p>An optional field specifying the version of the artifact associated with the document. For
   *    example, "Release 12, Update 6". This value is unique across all versions of a document, and
   *    can't be changed.</p>
   */
  VersionName?: string;

  /**
   * <p>The operating system platform. </p>
   */
  PlatformTypes?: (PlatformType | string)[];

  /**
   * <p>The document version.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>The document type.</p>
   */
  DocumentType?: DocumentType | string;

  /**
   * <p>The schema version.</p>
   */
  SchemaVersion?: string;

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
   * <p>A list of SSM documents required by a document. For example, an
   *     <code>ApplicationConfiguration</code> document requires an
   *     <code>ApplicationConfigurationSchema</code> document.</p>
   */
  Requires?: DocumentRequires[];

  /**
   * <p>The current status of a document review.</p>
   */
  ReviewStatus?: ReviewStatus | string;

  /**
   * <p>The user in your organization who created the document.</p>
   */
  Author?: string;
}

export namespace DocumentIdentifier {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DocumentIdentifier): any => ({
    ...obj,
  });
}

/**
 * <p>Version information about the document.</p>
 */
export interface DocumentVersionInfo {
  /**
   * <p>The document name.</p>
   */
  Name?: string;

  /**
   * <p>The friendly name of the SSM document. This value can differ for each version of the
   *    document. If you want to update this value, see <a>UpdateDocument</a>.</p>
   */
  DisplayName?: string;

  /**
   * <p>The document version.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>The version of the artifact associated with the document. For example, "Release 12, Update
   *    6". This value is unique across all versions of a document, and can't be changed.</p>
   */
  VersionName?: string;

  /**
   * <p>The date the document was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>An identifier for the default version of the document.</p>
   */
  IsDefaultVersion?: boolean;

  /**
   * <p>The document format, either JSON or YAML.</p>
   */
  DocumentFormat?: DocumentFormat | string;

  /**
   * <p>The status of the SSM document, such as <code>Creating</code>, <code>Active</code>,
   *     <code>Failed</code>, and <code>Deleting</code>.</p>
   */
  Status?: DocumentStatus | string;

  /**
   * <p>A message returned by Amazon Web Services Systems Manager that explains the <code>Status</code> value. For example, a
   *     <code>Failed</code> status might be explained by the <code>StatusInformation</code> message,
   *    "The specified S3 bucket doesn't exist. Verify that the URL of the S3 bucket is correct."</p>
   */
  StatusInformation?: string;

  /**
   * <p>The current status of the approval review for the latest version of the document.</p>
   */
  ReviewStatus?: ReviewStatus | string;
}

export namespace DocumentVersionInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DocumentVersionInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a filter for a specific list of OpsItem events. You can filter event information
 *    by using tags. You specify tags by using a key-value pair mapping. </p>
 */
export interface OpsItemEventFilter {
  /**
   * <p>The name of the filter key. Currently, the only supported value is
   *    <code>OpsItemId</code>.</p>
   */
  Key: OpsItemEventFilterKey | string | undefined;

  /**
   * <p>The values for the filter, consisting of one or more OpsItem IDs.</p>
   */
  Values: string[] | undefined;

  /**
   * <p>The operator used by the filter call. Currently, the only supported value is
   *     <code>Equal</code>.</p>
   */
  Operator: OpsItemEventFilterOperator | string | undefined;
}

export namespace OpsItemEventFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OpsItemEventFilter): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the user or resource that created an OpsItem event.</p>
 */
export interface OpsItemIdentity {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM entity that created the OpsItem
   *    event.</p>
   */
  Arn?: string;
}

export namespace OpsItemIdentity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OpsItemIdentity): any => ({
    ...obj,
  });
}

/**
 * <p>Summary information about an OpsItem event or that associated an OpsItem with a related
 *    item.</p>
 */
export interface OpsItemEventSummary {
  /**
   * <p>The ID of the OpsItem.</p>
   */
  OpsItemId?: string;

  /**
   * <p>The ID of the OpsItem event.</p>
   */
  EventId?: string;

  /**
   * <p>The source of the OpsItem event.</p>
   */
  Source?: string;

  /**
   * <p>The type of information provided as a detail.</p>
   */
  DetailType?: string;

  /**
   * <p>Specific information about the OpsItem event.</p>
   */
  Detail?: string;

  /**
   * <p>Information about the user or resource that created the OpsItem event.</p>
   */
  CreatedBy?: OpsItemIdentity;

  /**
   * <p>The date and time the OpsItem event was created.</p>
   */
  CreatedTime?: Date;
}

export namespace OpsItemEventSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OpsItemEventSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a filter for a specific list of related-item resources. </p>
 */
export interface OpsItemRelatedItemsFilter {
  /**
   * <p>The name of the filter key. Supported values include <code>ResourceUri</code>,
   *     <code>ResourceType</code>, or <code>AssociationId</code>.</p>
   */
  Key: OpsItemRelatedItemsFilterKey | string | undefined;

  /**
   * <p>The values for the filter.</p>
   */
  Values: string[] | undefined;

  /**
   * <p>The operator used by the filter call. The only supported operator is
   *    <code>EQUAL</code>.</p>
   */
  Operator: OpsItemRelatedItemsFilterOperator | string | undefined;
}

export namespace OpsItemRelatedItemsFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OpsItemRelatedItemsFilter): any => ({
    ...obj,
  });
}

/**
 * <p>Summary information about related-item resources for an OpsItem.</p>
 */
export interface OpsItemRelatedItemSummary {
  /**
   * <p>The OpsItem ID.</p>
   */
  OpsItemId?: string;

  /**
   * <p>The association ID.</p>
   */
  AssociationId?: string;

  /**
   * <p>The resource type.</p>
   */
  ResourceType?: string;

  /**
   * <p>The association type.</p>
   */
  AssociationType?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the related-item resource.</p>
   */
  ResourceUri?: string;

  /**
   * <p>Information about the user or resource that created an OpsItem event.</p>
   */
  CreatedBy?: OpsItemIdentity;

  /**
   * <p>The time the related-item association was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>Information about the user or resource that created an OpsItem event.</p>
   */
  LastModifiedBy?: OpsItemIdentity;

  /**
   * <p>The time the related-item association was last updated.</p>
   */
  LastModifiedTime?: Date;
}

export namespace OpsItemRelatedItemSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OpsItemRelatedItemSummary): any => ({
    ...obj,
  });
}

/**
 * <p>A filter to limit the number of OpsMetadata objects displayed.</p>
 */
export interface OpsMetadataFilter {
  /**
   * <p>A filter key.</p>
   */
  Key: string | undefined;

  /**
   * <p>A filter value.</p>
   */
  Values: string[] | undefined;
}

export namespace OpsMetadataFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OpsMetadataFilter): any => ({
    ...obj,
  });
}

/**
 * <p>Operational metadata for an application in Application Manager.</p>
 */
export interface OpsMetadata {
  /**
   * <p>The ID of the Application Manager application.</p>
   */
  ResourceId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the OpsMetadata Object or blob.</p>
   */
  OpsMetadataArn?: string;

  /**
   * <p>The date the OpsMetadata object was last updated.</p>
   */
  LastModifiedDate?: Date;

  /**
   * <p>The user name who last updated the OpsMetadata object.</p>
   */
  LastModifiedUser?: string;

  /**
   * <p>The date the OpsMetadata objects was created.</p>
   */
  CreationDate?: Date;
}

export namespace OpsMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OpsMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Compliance summary information for a specific resource. </p>
 */
export interface ResourceComplianceSummaryItem {
  /**
   * <p>The compliance type.</p>
   */
  ComplianceType?: string;

  /**
   * <p>The resource type.</p>
   */
  ResourceType?: string;

  /**
   * <p>The resource ID.</p>
   */
  ResourceId?: string;

  /**
   * <p>The compliance status for the resource.</p>
   */
  Status?: ComplianceStatus | string;

  /**
   * <p>The highest severity item found for the resource. The resource is compliant for this
   *    item.</p>
   */
  OverallSeverity?: ComplianceSeverity | string;

  /**
   * <p>Information about the execution.</p>
   */
  ExecutionSummary?: ComplianceExecutionSummary;

  /**
   * <p>A list of items that are compliant for the resource.</p>
   */
  CompliantSummary?: CompliantSummary;

  /**
   * <p>A list of items that aren't compliant for the resource.</p>
   */
  NonCompliantSummary?: NonCompliantSummary;
}

export namespace ResourceComplianceSummaryItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceComplianceSummaryItem): any => ({
    ...obj,
  });
}

/**
 * <p>The data type name for including resource data sync state. There are four sync
 *    states:</p>
 *          <p>
 *             <code>OrganizationNotExists</code> (Your organization doesn't exist)</p>
 *          <p>
 *             <code>NoPermissions</code> (The system can't locate the service-linked role. This role is
 *    automatically created when a user creates a resource data sync in Amazon Web Services Systems Manager Explorer.)</p>
 *          <p>
 *             <code>InvalidOrganizationalUnit</code> (You specified or selected an invalid unit in the
 *    resource data sync configuration.)</p>
 *          <p>
 *             <code>TrustedAccessDisabled</code> (You disabled Systems Manager access in the organization in
 *    Organizations.)</p>
 */
export interface ResourceDataSyncSourceWithState {
  /**
   * <p>The type of data source for the resource data sync. <code>SourceType</code> is either
   *     <code>AwsOrganizations</code> (if an organization is present in Organizations) or
   *     <code>singleAccountMultiRegions</code>.</p>
   */
  SourceType?: string;

  /**
   * <p>The field name in <code>SyncSource</code> for the
   *     <code>ResourceDataSyncAwsOrganizationsSource</code> type.</p>
   */
  AwsOrganizationsSource?: ResourceDataSyncAwsOrganizationsSource;

  /**
   * <p>The <code>SyncSource</code> Amazon Web Services Regions included in the resource data sync.</p>
   */
  SourceRegions?: string[];

  /**
   * <p>Whether to automatically synchronize and aggregate data from new Amazon Web Services Regions when those
   *    Regions come online.</p>
   */
  IncludeFutureRegions?: boolean;

  /**
   * <p>The data type name for including resource data sync state. There are four sync
   *    states:</p>
   *          <p>
   *             <code>OrganizationNotExists</code>: Your organization doesn't exist.</p>
   *          <p>
   *             <code>NoPermissions</code>: The system can't locate the service-linked role. This role is
   *    automatically created when a user creates a resource data sync in Explorer.</p>
   *          <p>
   *             <code>InvalidOrganizationalUnit</code>: You specified or selected an invalid unit in the
   *    resource data sync configuration.</p>
   *          <p>
   *             <code>TrustedAccessDisabled</code>: You disabled Systems Manager access in the organization in
   *    Organizations.</p>
   */
  State?: string;

  /**
   * <p>When you create a resource data sync, if you choose one of the Organizations options, then Systems Manager
   *    automatically enables all OpsData sources in the selected Amazon Web Services Regions for all Amazon Web Services accounts in
   *    your organization (or in the selected organization units). For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/Explorer-resouce-data-sync-multiple-accounts-and-regions.html">About multiple account and Region resource data syncs</a> in the
   *     <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   */
  EnableAllOpsDataSources?: boolean;
}

export namespace ResourceDataSyncSourceWithState {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceDataSyncSourceWithState): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a resource data sync configuration, including its current status and last
 *    successful sync.</p>
 */
export interface ResourceDataSyncItem {
  /**
   * <p>The name of the resource data sync.</p>
   */
  SyncName?: string;

  /**
   * <p>The type of resource data sync. If <code>SyncType</code> is <code>SyncToDestination</code>,
   *    then the resource data sync synchronizes data to an S3 bucket. If the <code>SyncType</code> is
   *     <code>SyncFromSource</code> then the resource data sync synchronizes data from Organizations or from
   *    multiple Amazon Web Services Regions.</p>
   */
  SyncType?: string;

  /**
   * <p>Information about the source where the data was synchronized. </p>
   */
  SyncSource?: ResourceDataSyncSourceWithState;

  /**
   * <p>Configuration information for the target S3 bucket.</p>
   */
  S3Destination?: ResourceDataSyncS3Destination;

  /**
   * <p>The last time the configuration attempted to sync (UTC).</p>
   */
  LastSyncTime?: Date;

  /**
   * <p>The last time the sync operations returned a status of <code>SUCCESSFUL</code> (UTC).</p>
   */
  LastSuccessfulSyncTime?: Date;

  /**
   * <p>The date and time the resource data sync was changed. </p>
   */
  SyncLastModifiedTime?: Date;

  /**
   * <p>The status reported by the last sync.</p>
   */
  LastStatus?: LastResourceDataSyncStatus | string;

  /**
   * <p>The date and time the configuration was created (UTC).</p>
   */
  SyncCreatedTime?: Date;

  /**
   * <p>The status message details reported by the last sync.</p>
   */
  LastSyncStatusMessage?: string;
}

export namespace ResourceDataSyncItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceDataSyncItem): any => ({
    ...obj,
  });
}

/**
 * <p>The document can't be shared with more Amazon Web Services user accounts. You can share a document
 *    with a maximum of 20 accounts. You can publicly share up to five documents. If you need to
 *    increase this limit, contact Amazon Web Services Support.</p>
 */
export class DocumentPermissionLimit extends __BaseException {
  readonly name: "DocumentPermissionLimit" = "DocumentPermissionLimit";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DocumentPermissionLimit, __BaseException>) {
    super({
      name: "DocumentPermissionLimit",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DocumentPermissionLimit.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You specified too many custom compliance types. You can specify a maximum of 10 different
 *    types. </p>
 */
export class ComplianceTypeCountLimitExceededException extends __BaseException {
  readonly name: "ComplianceTypeCountLimitExceededException" = "ComplianceTypeCountLimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ComplianceTypeCountLimitExceededException, __BaseException>) {
    super({
      name: "ComplianceTypeCountLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ComplianceTypeCountLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>One or more content items isn't valid.</p>
 */
export class InvalidItemContentException extends __BaseException {
  readonly name: "InvalidItemContentException" = "InvalidItemContentException";
  readonly $fault: "client" = "client";
  TypeName?: string;
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidItemContentException, __BaseException>) {
    super({
      name: "InvalidItemContentException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidItemContentException.prototype);
    this.TypeName = opts.TypeName;
    this.Message = opts.Message;
  }
}

/**
 * <p>The inventory item size has exceeded the size limit.</p>
 */
export class ItemSizeLimitExceededException extends __BaseException {
  readonly name: "ItemSizeLimitExceededException" = "ItemSizeLimitExceededException";
  readonly $fault: "client" = "client";
  TypeName?: string;
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ItemSizeLimitExceededException, __BaseException>) {
    super({
      name: "ItemSizeLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ItemSizeLimitExceededException.prototype);
    this.TypeName = opts.TypeName;
    this.Message = opts.Message;
  }
}

/**
 * <p>Information about a compliance item.</p>
 */
export interface ComplianceItemEntry {
  /**
   * <p>The compliance item ID. For example, if the compliance item is a Windows patch, the ID could
   *    be the number of the KB article.</p>
   */
  Id?: string;

  /**
   * <p>The title of the compliance item. For example, if the compliance item is a Windows patch,
   *    the title could be the title of the KB article for the patch; for example: Security Update for
   *    Active Directory Federation Services. </p>
   */
  Title?: string;

  /**
   * <p>The severity of the compliance status. Severity can be one of the following: Critical, High,
   *    Medium, Low, Informational, Unspecified.</p>
   */
  Severity: ComplianceSeverity | string | undefined;

  /**
   * <p>The status of the compliance item. An item is either COMPLIANT or NON_COMPLIANT.</p>
   */
  Status: ComplianceStatus | string | undefined;

  /**
   * <p>A "Key": "Value" tag combination for the compliance item.</p>
   */
  Details?: Record<string, string>;
}

export namespace ComplianceItemEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ComplianceItemEntry): any => ({
    ...obj,
  });
}

/**
 * <p>The size of inventory data has exceeded the total size limit for the resource.</p>
 */
export class TotalSizeLimitExceededException extends __BaseException {
  readonly name: "TotalSizeLimitExceededException" = "TotalSizeLimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TotalSizeLimitExceededException, __BaseException>) {
    super({
      name: "TotalSizeLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TotalSizeLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You have exceeded the limit for custom schemas. Delete one or more custom schemas and try
 *    again.</p>
 */
export class CustomSchemaCountLimitExceededException extends __BaseException {
  readonly name: "CustomSchemaCountLimitExceededException" = "CustomSchemaCountLimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CustomSchemaCountLimitExceededException, __BaseException>) {
    super({
      name: "CustomSchemaCountLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CustomSchemaCountLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You specified invalid keys or values in the <code>Context</code> attribute for
 *     <code>InventoryItem</code>. Verify the keys and values, and try again.</p>
 */
export class InvalidInventoryItemContextException extends __BaseException {
  readonly name: "InvalidInventoryItemContextException" = "InvalidInventoryItemContextException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidInventoryItemContextException, __BaseException>) {
    super({
      name: "InvalidInventoryItemContextException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidInventoryItemContextException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The inventory item has invalid content. </p>
 */
export class ItemContentMismatchException extends __BaseException {
  readonly name: "ItemContentMismatchException" = "ItemContentMismatchException";
  readonly $fault: "client" = "client";
  TypeName?: string;
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ItemContentMismatchException, __BaseException>) {
    super({
      name: "ItemContentMismatchException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ItemContentMismatchException.prototype);
    this.TypeName = opts.TypeName;
    this.Message = opts.Message;
  }
}

/**
 * <p>Information collected from managed nodes based on your inventory policy document</p>
 */
export interface InventoryItem {
  /**
   * <p>The name of the inventory type. Default inventory item type names start with
   *     <code>AWS</code>. Custom inventory type names will start with Custom. Default inventory item
   *    types include the following: <code>AWS:AWSComponent</code>, <code>AWS:Application</code>,
   *     <code>AWS:InstanceInformation</code>, <code>AWS:Network</code>, and
   *     <code>AWS:WindowsUpdate</code>.</p>
   */
  TypeName: string | undefined;

  /**
   * <p>The schema version for the inventory item.</p>
   */
  SchemaVersion: string | undefined;

  /**
   * <p>The time the inventory information was collected.</p>
   */
  CaptureTime: string | undefined;

  /**
   * <p>MD5 hash of the inventory item type contents. The content hash is used to determine whether
   *    to update inventory information. The PutInventory API doesn't update the inventory item type
   *    contents if the MD5 hash hasn't changed since last update. </p>
   */
  ContentHash?: string;

  /**
   * <p>The inventory data of the inventory type.</p>
   */
  Content?: Record<string, string>[];

  /**
   * <p>A map of associated properties for a specified inventory type. For example, with this
   *    attribute, you can specify the <code>ExecutionId</code>, <code>ExecutionType</code>,
   *     <code>ComplianceType</code> properties of the <code>AWS:ComplianceItem</code> type.</p>
   */
  Context?: Record<string, string>;
}

export namespace InventoryItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InventoryItem): any => ({
    ...obj,
  });
}

/**
 * <p>The sub-type count exceeded the limit for the inventory type.</p>
 */
export class SubTypeCountLimitExceededException extends __BaseException {
  readonly name: "SubTypeCountLimitExceededException" = "SubTypeCountLimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SubTypeCountLimitExceededException, __BaseException>) {
    super({
      name: "SubTypeCountLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SubTypeCountLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The <code>Context</code> attribute that you specified for the <code>InventoryItem</code>
 *    isn't allowed for this inventory type. You can only use the <code>Context</code> attribute with
 *    inventory types like <code>AWS:ComplianceItem</code>.</p>
 */
export class UnsupportedInventoryItemContextException extends __BaseException {
  readonly name: "UnsupportedInventoryItemContextException" = "UnsupportedInventoryItemContextException";
  readonly $fault: "client" = "client";
  TypeName?: string;
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedInventoryItemContextException, __BaseException>) {
    super({
      name: "UnsupportedInventoryItemContextException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedInventoryItemContextException.prototype);
    this.TypeName = opts.TypeName;
    this.Message = opts.Message;
  }
}

/**
 * <p>Inventory item type schema version has to match supported versions in the service. Check
 *    output of GetInventorySchema to see the available schema version for each type.</p>
 */
export class UnsupportedInventorySchemaVersionException extends __BaseException {
  readonly name: "UnsupportedInventorySchemaVersionException" = "UnsupportedInventorySchemaVersionException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedInventorySchemaVersionException, __BaseException>) {
    super({
      name: "UnsupportedInventorySchemaVersionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedInventorySchemaVersionException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A hierarchy can have a maximum of 15 levels. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-parameter-name-constraints.html">Requirements and
 *     constraints for parameter names</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p>
 */
export class HierarchyLevelLimitExceededException extends __BaseException {
  readonly name: "HierarchyLevelLimitExceededException" = "HierarchyLevelLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<HierarchyLevelLimitExceededException, __BaseException>) {
    super({
      name: "HierarchyLevelLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, HierarchyLevelLimitExceededException.prototype);
  }
}

/**
 * <p>Parameter Store doesn't support changing a parameter type in a hierarchy. For example, you
 *    can't change a parameter from a <code>String</code> type to a <code>SecureString</code> type. You
 *    must create a new, unique parameter.</p>
 */
export class HierarchyTypeMismatchException extends __BaseException {
  readonly name: "HierarchyTypeMismatchException" = "HierarchyTypeMismatchException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<HierarchyTypeMismatchException, __BaseException>) {
    super({
      name: "HierarchyTypeMismatchException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, HierarchyTypeMismatchException.prototype);
  }
}

/**
 * <p>There is a conflict in the policies specified for this parameter. You can't, for example,
 *    specify two Expiration policies for a parameter. Review your policies, and try again.</p>
 */
export class IncompatiblePolicyException extends __BaseException {
  readonly name: "IncompatiblePolicyException" = "IncompatiblePolicyException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IncompatiblePolicyException, __BaseException>) {
    super({
      name: "IncompatiblePolicyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IncompatiblePolicyException.prototype);
  }
}

/**
 * <p>The request doesn't meet the regular expression requirement.</p>
 */
export class InvalidAllowedPatternException extends __BaseException {
  readonly name: "InvalidAllowedPatternException" = "InvalidAllowedPatternException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidAllowedPatternException, __BaseException>) {
    super({
      name: "InvalidAllowedPatternException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidAllowedPatternException.prototype);
  }
}

/**
 * <p>A policy attribute or its value is invalid. </p>
 */
export class InvalidPolicyAttributeException extends __BaseException {
  readonly name: "InvalidPolicyAttributeException" = "InvalidPolicyAttributeException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPolicyAttributeException, __BaseException>) {
    super({
      name: "InvalidPolicyAttributeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPolicyAttributeException.prototype);
  }
}

/**
 * <p>The policy type isn't supported. Parameter Store supports the following policy types:
 *    Expiration, ExpirationNotification, and NoChangeNotification.</p>
 */
export class InvalidPolicyTypeException extends __BaseException {
  readonly name: "InvalidPolicyTypeException" = "InvalidPolicyTypeException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPolicyTypeException, __BaseException>) {
    super({
      name: "InvalidPolicyTypeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPolicyTypeException.prototype);
  }
}

/**
 * <p>The parameter already exists. You can't create duplicate parameters.</p>
 */
export class ParameterAlreadyExists extends __BaseException {
  readonly name: "ParameterAlreadyExists" = "ParameterAlreadyExists";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ParameterAlreadyExists, __BaseException>) {
    super({
      name: "ParameterAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ParameterAlreadyExists.prototype);
  }
}

/**
 * <p>You have exceeded the number of parameters for this Amazon Web Services account. Delete one or more
 *    parameters and try again.</p>
 */
export class ParameterLimitExceeded extends __BaseException {
  readonly name: "ParameterLimitExceeded" = "ParameterLimitExceeded";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ParameterLimitExceeded, __BaseException>) {
    super({
      name: "ParameterLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ParameterLimitExceeded.prototype);
  }
}

/**
 * <p>Parameter Store retains the 100 most recently created versions of a parameter. After this
 *    number of versions has been created, Parameter Store deletes the oldest version when a new one is
 *    created. However, if the oldest version has a <i>label</i> attached to it,
 *    Parameter Store won't delete the version and instead presents this error message:</p>
 *          <p>
 *             <code>An error occurred (ParameterMaxVersionLimitExceeded) when calling the PutParameter
 *     operation: You attempted to create a new version of <i>parameter-name</i> by
 *     calling the PutParameter API with the overwrite flag. Version
 *      <i>version-number</i>, the oldest version, can't be deleted because it has a
 *     label associated with it. Move the label to another version of the parameter, and try
 *     again.</code>
 *          </p>
 *          <p>This safeguard is to prevent parameter versions with mission critical labels assigned to
 *    them from being deleted. To continue creating new parameters, first move the label from the
 *    oldest version of the parameter to a newer one for use in your operations. For information about
 *    moving parameter labels, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-paramstore-labels.html#sysman-paramstore-labels-console-move">Move a parameter label (console)</a> or <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-paramstore-labels.html#sysman-paramstore-labels-cli-move">Move a parameter label (CLI)</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p>
 */
export class ParameterMaxVersionLimitExceeded extends __BaseException {
  readonly name: "ParameterMaxVersionLimitExceeded" = "ParameterMaxVersionLimitExceeded";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ParameterMaxVersionLimitExceeded, __BaseException>) {
    super({
      name: "ParameterMaxVersionLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ParameterMaxVersionLimitExceeded.prototype);
  }
}

/**
 * <p>The parameter name isn't valid.</p>
 */
export class ParameterPatternMismatchException extends __BaseException {
  readonly name: "ParameterPatternMismatchException" = "ParameterPatternMismatchException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ParameterPatternMismatchException, __BaseException>) {
    super({
      name: "ParameterPatternMismatchException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ParameterPatternMismatchException.prototype);
  }
}

/**
 * <p>You specified more than the maximum number of allowed policies for the parameter. The
 *    maximum is 10.</p>
 */
export class PoliciesLimitExceededException extends __BaseException {
  readonly name: "PoliciesLimitExceededException" = "PoliciesLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PoliciesLimitExceededException, __BaseException>) {
    super({
      name: "PoliciesLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PoliciesLimitExceededException.prototype);
  }
}

/**
 * <p>The parameter type isn't supported.</p>
 */
export class UnsupportedParameterType extends __BaseException {
  readonly name: "UnsupportedParameterType" = "UnsupportedParameterType";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedParameterType, __BaseException>) {
    super({
      name: "UnsupportedParameterType",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedParameterType.prototype);
  }
}

/**
 * <p>You attempted to register a <code>LAMBDA</code> or <code>STEP_FUNCTIONS</code> task in a
 *    region where the corresponding service isn't available. </p>
 */
export class FeatureNotAvailableException extends __BaseException {
  readonly name: "FeatureNotAvailableException" = "FeatureNotAvailableException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FeatureNotAvailableException, __BaseException>) {
    super({
      name: "FeatureNotAvailableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FeatureNotAvailableException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified step name and execution ID don't exist. Verify the information and try
 *    again.</p>
 */
export class AutomationStepNotFoundException extends __BaseException {
  readonly name: "AutomationStepNotFoundException" = "AutomationStepNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 */
export class InvalidAutomationSignalException extends __BaseException {
  readonly name: "InvalidAutomationSignalException" = "InvalidAutomationSignalException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * <p>One or more configuration items isn't valid. Verify that a valid Amazon Resource Name (ARN)
 *    was provided for an Amazon Simple Notification Service topic.</p>
 */
export class InvalidNotificationConfig extends __BaseException {
  readonly name: "InvalidNotificationConfig" = "InvalidNotificationConfig";
  readonly $fault: "client" = "client";
  Message?: string;
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
 *    configuring the IAM role for Run Command notifications, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/rc-sns-notifications.html">Configuring Amazon SNS Notifications for Run Command</a> in the
 *     <i>Amazon Web Services Systems Manager User Guide</i>.</p>
 */
export class InvalidRole extends __BaseException {
  readonly name: "InvalidRole" = "InvalidRole";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * <p>The association isn't valid or doesn't exist. </p>
 */
export class InvalidAssociation extends __BaseException {
  readonly name: "InvalidAssociation" = "InvalidAssociation";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * <p>An Automation runbook with the specified name couldn't be found.</p>
 */
export class AutomationDefinitionNotFoundException extends __BaseException {
  readonly name: "AutomationDefinitionNotFoundException" = "AutomationDefinitionNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 */
export class AutomationDefinitionVersionNotFoundException extends __BaseException {
  readonly name: "AutomationDefinitionVersionNotFoundException" = "AutomationDefinitionVersionNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 */
export class AutomationExecutionLimitExceededException extends __BaseException {
  readonly name: "AutomationExecutionLimitExceededException" = "AutomationExecutionLimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 */
export class InvalidAutomationExecutionParametersException extends __BaseException {
  readonly name: "InvalidAutomationExecutionParametersException" = "InvalidAutomationExecutionParametersException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * <p>Indicates that the Change Manager change template used in the change request was rejected or is
 *    still in a pending state.</p>
 */
export class AutomationDefinitionNotApprovedException extends __BaseException {
  readonly name: "AutomationDefinitionNotApprovedException" = "AutomationDefinitionNotApprovedException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * <p>The specified target managed node for the session isn't fully configured for use with Session Manager.
 *    For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-getting-started.html">Getting started with
 *     Session Manager</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. This error is also returned if you
 *    attempt to start a session on a managed node that is located in a different account or
 *    Region</p>
 */
export class TargetNotConnected extends __BaseException {
  readonly name: "TargetNotConnected" = "TargetNotConnected";
  readonly $fault: "client" = "client";
  Message?: string;
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
 */
export class InvalidAutomationStatusUpdateException extends __BaseException {
  readonly name: "InvalidAutomationStatusUpdateException" = "InvalidAutomationStatusUpdateException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * <p>You have reached the maximum number versions allowed for an association. Each association
 *    has a limit of 1,000 versions. </p>
 */
export class AssociationVersionLimitExceeded extends __BaseException {
  readonly name: "AssociationVersionLimitExceeded" = "AssociationVersionLimitExceeded";
  readonly $fault: "client" = "client";
  Message?: string;
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
 */
export class InvalidUpdate extends __BaseException {
  readonly name: "InvalidUpdate" = "InvalidUpdate";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * <p>The updated status is the same as the current status.</p>
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
 * <p>The document has too many versions. Delete one or more document versions and try
 *    again.</p>
 */
export class DocumentVersionLimitExceeded extends __BaseException {
  readonly name: "DocumentVersionLimitExceeded" = "DocumentVersionLimitExceeded";
  readonly $fault: "client" = "client";
  Message?: string;
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
 */
export class DuplicateDocumentContent extends __BaseException {
  readonly name: "DuplicateDocumentContent" = "DuplicateDocumentContent";
  readonly $fault: "client" = "client";
  Message?: string;
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
 */
export class DuplicateDocumentVersionName extends __BaseException {
  readonly name: "DuplicateDocumentVersionName" = "DuplicateDocumentVersionName";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * <p>A default version of a document.</p>
 */
export interface DocumentDefaultVersionDescription {
  /**
   * <p>The name of the document.</p>
   */
  Name?: string;

  /**
   * <p>The default version of the document.</p>
   */
  DefaultVersion?: string;

  /**
   * <p>The default version of the artifact associated with the document.</p>
   */
  DefaultVersionName?: string;
}

export namespace DocumentDefaultVersionDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DocumentDefaultVersionDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a document approval review.</p>
 */
export interface DocumentReviews {
  /**
   * <p>The action to take on a document approval review request.</p>
   */
  Action: DocumentReviewAction | string | undefined;

  /**
   * <p>A comment entered by a user in your organization about the document review request.</p>
   */
  Comment?: DocumentReviewCommentSource[];
}

export namespace DocumentReviews {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DocumentReviews): any => ({
    ...obj,
  });
}

/**
 * <p>The OpsMetadata object exceeds the maximum number of OpsMetadata keys that you can assign to
 *    an application in Application Manager.</p>
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
 * <p>Another <code>UpdateResourceDataSync</code> request is being processed. Wait a few minutes
 *    and try again.</p>
 */
export class ResourceDataSyncConflictException extends __BaseException {
  readonly name: "ResourceDataSyncConflictException" = "ResourceDataSyncConflictException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * <p>Specifies the inventory type and attribute for the aggregation execution.</p>
 */
export interface InventoryAggregator {
  /**
   * <p>The inventory type and attribute name for aggregation.</p>
   */
  Expression?: string;

  /**
   * <p>Nested aggregators to further refine aggregation for an inventory type.</p>
   */
  Aggregators?: InventoryAggregator[];

  /**
   * <p>A user-defined set of one or more filters on which to aggregate inventory data. Groups
   *    return a count of resources that match and don't match the specified criteria.</p>
   */
  Groups?: InventoryGroup[];
}

export namespace InventoryAggregator {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InventoryAggregator): any => ({
    ...obj,
  });
}

/**
 * <p>One or more aggregators for viewing counts of OpsData using different dimensions such as
 *     <code>Source</code>, <code>CreatedTime</code>, or <code>Source and CreatedTime</code>, to name a
 *    few.</p>
 */
export interface OpsAggregator {
  /**
   * <p>Either a <code>Range</code> or <code>Count</code> aggregator for limiting an OpsData
   *    summary.</p>
   */
  AggregatorType?: string;

  /**
   * <p>The data type name to use for viewing counts of OpsData.</p>
   */
  TypeName?: string;

  /**
   * <p>The name of an OpsData attribute on which to limit the count of OpsData.</p>
   */
  AttributeName?: string;

  /**
   * <p>The aggregator value.</p>
   */
  Values?: Record<string, string>;

  /**
   * <p>The aggregator filters.</p>
   */
  Filters?: OpsFilter[];

  /**
   * <p>A nested aggregator for viewing counts of OpsData.</p>
   */
  Aggregators?: OpsAggregator[];
}

export namespace OpsAggregator {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OpsAggregator): any => ({
    ...obj,
  });
}
