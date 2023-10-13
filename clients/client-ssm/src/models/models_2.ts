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
  InstanceAssociationOutputLocation,
  LoggingInfo,
  MaintenanceWindowTaskCutoffBehavior,
  MaintenanceWindowTaskParameterValueExpression,
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
  Target,
  TargetLocation,
} from "./models_0";
import {
  DocumentReviewCommentSource,
  InventoryFilter,
  InventoryGroup,
  MaintenanceWindowTaskInvocationParameters,
  MaintenanceWindowTaskInvocationParametersFilterSensitiveLog,
  OpsFilter,
  OpsItemStatus,
  OpsResultAttribute,
  ResultAttribute,
} from "./models_1";
import { SSMServiceException as __BaseException } from "./SSMServiceException";

/**
 * @public
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
 * @public
 */
export interface UpdateAssociationRequest {
  /**
   * @public
   * <p>The ID of the association you want to update. </p>
   */
  AssociationId: string | undefined;

  /**
   * @public
   * <p>The parameters you want to update for the association. If you create a parameter using
   *    Parameter Store, a capability of Amazon Web Services Systems Manager, you can reference the parameter using
   *     <code>\{\{ssm:parameter-name\}\}</code>.</p>
   */
  Parameters?: Record<string, string[]>;

  /**
   * @public
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
   * @public
   * <p>The cron expression used to schedule the association that you want to update.</p>
   */
  ScheduleExpression?: string;

  /**
   * @public
   * <p>An S3 bucket where you want to store the results of this request.</p>
   */
  OutputLocation?: InstanceAssociationOutputLocation;

  /**
   * @public
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
   * @public
   * <p>The targets of the association.</p>
   */
  Targets?: Target[];

  /**
   * @public
   * <p>The name of the association that you want to update.</p>
   */
  AssociationName?: string;

  /**
   * @public
   * <p>This parameter is provided for concurrency control purposes. You must specify the latest
   *    association version in the service. If you want to ensure that this request succeeds, either
   *    specify <code>$LATEST</code>, or omit this parameter.</p>
   */
  AssociationVersion?: string;

  /**
   * @public
   * <p>Choose the parameter that will define how your automation will branch out. This target is
   *    required for associations that use an Automation runbook and target resources by using rate
   *    controls. Automation is a capability of Amazon Web Services Systems Manager.</p>
   */
  AutomationTargetParameterName?: string;

  /**
   * @public
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
   * @public
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
   * @public
   * <p>The severity level to assign to the association.</p>
   */
  ComplianceSeverity?: AssociationComplianceSeverity;

  /**
   * @public
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
  SyncCompliance?: AssociationSyncCompliance;

  /**
   * @public
   * <p>By default, when you update an association, the system runs it immediately after it is
   *    updated and then according to the schedule you specified. Specify this option if you don't want
   *    an association to run immediately after you update it. This parameter isn't supported for rate
   *    expressions.</p>
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
   * @public
   * <p>The names or Amazon Resource Names (ARNs) of the Change Calendar type documents you want to
   *    gate your associations under. The associations only run when that change calendar is open. For
   *    more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-change-calendar">Amazon Web Services Systems Manager Change
   *     Calendar</a>.</p>
   */
  CalendarNames?: string[];

  /**
   * @public
   * <p>A location is a combination of Amazon Web Services Regions and Amazon Web Services accounts where you want to run the
   *    association. Use this action to update an association in multiple Regions and multiple
   *    accounts.</p>
   */
  TargetLocations?: TargetLocation[];

  /**
   * @public
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
   * @public
   * <p>A key-value mapping of document parameters to target resources. Both Targets and TargetMaps
   *    can't be specified together.</p>
   */
  TargetMaps?: Record<string, string[]>[];

  /**
   * @public
   * <p>The details for the CloudWatch alarm you want to apply to an automation or
   *    command.</p>
   */
  AlarmConfiguration?: AlarmConfiguration;
}

/**
 * @public
 */
export interface UpdateAssociationResult {
  /**
   * @public
   * <p>The description of the association that was updated.</p>
   */
  AssociationDescription?: AssociationDescription;
}

/**
 * @public
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
 * @public
 */
export interface UpdateAssociationStatusRequest {
  /**
   * @public
   * <p>The name of the SSM document.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The managed node ID.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The association status.</p>
   */
  AssociationStatus: AssociationStatus | undefined;
}

/**
 * @public
 */
export interface UpdateAssociationStatusResult {
  /**
   * @public
   * <p>Information about the association.</p>
   */
  AssociationDescription?: AssociationDescription;
}

/**
 * @public
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
 * @public
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
 * @public
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
 * @public
 */
export interface UpdateDocumentRequest {
  /**
   * @public
   * <p>A valid JSON or YAML string.</p>
   */
  Content: string | undefined;

  /**
   * @public
   * <p>A list of key-value pairs that describe attachments to a version of a document.</p>
   */
  Attachments?: AttachmentsSource[];

  /**
   * @public
   * <p>The name of the SSM document that you want to update.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The friendly name of the SSM document that you want to update. This value can differ for
   *    each version of the document. If you don't specify a value for this parameter in your request,
   *    the existing value is applied to the new document version.</p>
   */
  DisplayName?: string;

  /**
   * @public
   * <p>An optional field specifying the version of the artifact you are updating with the document.
   *    For example, "Release 12, Update 6". This value is unique across all versions of a document, and
   *    can't be changed.</p>
   */
  VersionName?: string;

  /**
   * @public
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
   * @public
   * <p>Specify the document format for the new document version. Systems Manager supports JSON and YAML
   *    documents. JSON is the default format.</p>
   */
  DocumentFormat?: DocumentFormat;

  /**
   * @public
   * <p>Specify a new target type for the document.</p>
   */
  TargetType?: string;
}

/**
 * @public
 */
export interface UpdateDocumentResult {
  /**
   * @public
   * <p>A description of the document that was updated.</p>
   */
  DocumentDescription?: DocumentDescription;
}

/**
 * @public
 */
export interface UpdateDocumentDefaultVersionRequest {
  /**
   * @public
   * <p>The name of a custom document that you want to set as the default version.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The version of a custom document that you want to set as the default version.</p>
   */
  DocumentVersion: string | undefined;
}

/**
 * @public
 * <p>A default version of a document.</p>
 */
export interface DocumentDefaultVersionDescription {
  /**
   * @public
   * <p>The name of the document.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The default version of the document.</p>
   */
  DefaultVersion?: string;

  /**
   * @public
   * <p>The default version of the artifact associated with the document.</p>
   */
  DefaultVersionName?: string;
}

/**
 * @public
 */
export interface UpdateDocumentDefaultVersionResult {
  /**
   * @public
   * <p>The description of a custom document that you want to set as the default version.</p>
   */
  Description?: DocumentDefaultVersionDescription;
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
 * @public
 * <p>Information about a document approval review.</p>
 */
export interface DocumentReviews {
  /**
   * @public
   * <p>The action to take on a document approval review request.</p>
   */
  Action: DocumentReviewAction | undefined;

  /**
   * @public
   * <p>A comment entered by a user in your organization about the document review request.</p>
   */
  Comment?: DocumentReviewCommentSource[];
}

/**
 * @public
 */
export interface UpdateDocumentMetadataRequest {
  /**
   * @public
   * <p>The name of the change template for which a version's metadata is to be updated.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The version of a change template in which to update approval metadata.</p>
   */
  DocumentVersion?: string;

  /**
   * @public
   * <p>The change template review details to update.</p>
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
   * @public
   * <p>The ID of the maintenance window to update.</p>
   */
  WindowId: string | undefined;

  /**
   * @public
   * <p>The name of the maintenance window.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>An optional description for the update request.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The date and time, in ISO-8601 Extended format, for when you want the maintenance window to
   *    become active. <code>StartDate</code> allows you to delay activation of the maintenance window
   *    until the specified future date.</p>
   */
  StartDate?: string;

  /**
   * @public
   * <p>The date and time, in ISO-8601 Extended format, for when you want the maintenance window to
   *    become inactive. <code>EndDate</code> allows you to set a date and time in the future when the
   *    maintenance window will no longer run.</p>
   */
  EndDate?: string;

  /**
   * @public
   * <p>The schedule of the maintenance window in the form of a cron or rate expression.</p>
   */
  Schedule?: string;

  /**
   * @public
   * <p>The time zone that the scheduled maintenance window executions are based on, in Internet
   *    Assigned Numbers Authority (IANA) format. For example: "America/Los_Angeles", "UTC", or
   *    "Asia/Seoul". For more information, see the <a href="https://www.iana.org/time-zones">Time
   *     Zone Database</a> on the IANA website.</p>
   */
  ScheduleTimezone?: string;

  /**
   * @public
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
   * @public
   * <p>The duration of the maintenance window in hours.</p>
   */
  Duration?: number;

  /**
   * @public
   * <p>The number of hours before the end of the maintenance window that Amazon Web Services Systems Manager stops scheduling
   *    new tasks for execution.</p>
   */
  Cutoff?: number;

  /**
   * @public
   * <p>Whether targets must be registered with the maintenance window before tasks can be defined
   *    for those targets.</p>
   */
  AllowUnassociatedTargets?: boolean;

  /**
   * @public
   * <p>Whether the maintenance window is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>If <code>True</code>, then all fields that are required by the <a>CreateMaintenanceWindow</a> operation are also required for this API request. Optional
   *    fields that aren't specified are set to null. </p>
   */
  Replace?: boolean;
}

/**
 * @public
 */
export interface UpdateMaintenanceWindowResult {
  /**
   * @public
   * <p>The ID of the created maintenance window.</p>
   */
  WindowId?: string;

  /**
   * @public
   * <p>The name of the maintenance window.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>An optional description of the update.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled
   *    to become active. The maintenance window won't run before this specified time.</p>
   */
  StartDate?: string;

  /**
   * @public
   * <p>The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled
   *    to become inactive. The maintenance window won't run after this specified time.</p>
   */
  EndDate?: string;

  /**
   * @public
   * <p>The schedule of the maintenance window in the form of a cron or rate expression.</p>
   */
  Schedule?: string;

  /**
   * @public
   * <p>The time zone that the scheduled maintenance window executions are based on, in Internet
   *    Assigned Numbers Authority (IANA) format. For example: "America/Los_Angeles", "UTC", or
   *    "Asia/Seoul". For more information, see the <a href="https://www.iana.org/time-zones">Time
   *     Zone Database</a> on the IANA website.</p>
   */
  ScheduleTimezone?: string;

  /**
   * @public
   * <p>The number of days to wait to run a maintenance window after the scheduled cron expression
   *    date and time.</p>
   */
  ScheduleOffset?: number;

  /**
   * @public
   * <p>The duration of the maintenance window in hours.</p>
   */
  Duration?: number;

  /**
   * @public
   * <p>The number of hours before the end of the maintenance window that Amazon Web Services Systems Manager stops scheduling
   *    new tasks for execution.</p>
   */
  Cutoff?: number;

  /**
   * @public
   * <p>Whether targets must be registered with the maintenance window before tasks can be defined
   *    for those targets.</p>
   */
  AllowUnassociatedTargets?: boolean;

  /**
   * @public
   * <p>Whether the maintenance window is enabled.</p>
   */
  Enabled?: boolean;
}

/**
 * @public
 */
export interface UpdateMaintenanceWindowTargetRequest {
  /**
   * @public
   * <p>The maintenance window ID with which to modify the target.</p>
   */
  WindowId: string | undefined;

  /**
   * @public
   * <p>The target ID to modify.</p>
   */
  WindowTargetId: string | undefined;

  /**
   * @public
   * <p>The targets to add or replace.</p>
   */
  Targets?: Target[];

  /**
   * @public
   * <p>User-provided value that will be included in any Amazon CloudWatch Events events raised while
   *    running tasks for these targets in this maintenance window.</p>
   */
  OwnerInformation?: string;

  /**
   * @public
   * <p>A name for the update.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>An optional description for the update.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>If <code>True</code>, then all fields that are required by the <a>RegisterTargetWithMaintenanceWindow</a> operation are also required for this API
   *    request. Optional fields that aren't specified are set to null.</p>
   */
  Replace?: boolean;
}

/**
 * @public
 */
export interface UpdateMaintenanceWindowTargetResult {
  /**
   * @public
   * <p>The maintenance window ID specified in the update request.</p>
   */
  WindowId?: string;

  /**
   * @public
   * <p>The target ID specified in the update request.</p>
   */
  WindowTargetId?: string;

  /**
   * @public
   * <p>The updated targets.</p>
   */
  Targets?: Target[];

  /**
   * @public
   * <p>The updated owner.</p>
   */
  OwnerInformation?: string;

  /**
   * @public
   * <p>The updated name.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The updated description.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface UpdateMaintenanceWindowTaskRequest {
  /**
   * @public
   * <p>The maintenance window ID that contains the task to modify.</p>
   */
  WindowId: string | undefined;

  /**
   * @public
   * <p>The task ID to modify.</p>
   */
  WindowTaskId: string | undefined;

  /**
   * @public
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
   * @public
   * <p>The task ARN to modify.</p>
   */
  TaskArn?: string;

  /**
   * @public
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
   * @public
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
   * @public
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
   * @public
   * <p>The new task priority to specify. The lower the number, the higher the priority. Tasks that
   *    have the same priority are scheduled in parallel.</p>
   */
  Priority?: number;

  /**
   * @public
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
   * @public
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
   * @public
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
   * @public
   * <p>The new task name to specify.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The new task description to specify.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>If True, then all fields that are required by the <a>RegisterTaskWithMaintenanceWindow</a> operation are also required for this API request.
   *    Optional fields that aren't specified are set to null.</p>
   */
  Replace?: boolean;

  /**
   * @public
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
  CutoffBehavior?: MaintenanceWindowTaskCutoffBehavior;

  /**
   * @public
   * <p>The CloudWatch alarm you want to apply to your maintenance window task.</p>
   */
  AlarmConfiguration?: AlarmConfiguration;
}

/**
 * @public
 */
export interface UpdateMaintenanceWindowTaskResult {
  /**
   * @public
   * <p>The ID of the maintenance window that was updated.</p>
   */
  WindowId?: string;

  /**
   * @public
   * <p>The task ID of the maintenance window that was updated.</p>
   */
  WindowTaskId?: string;

  /**
   * @public
   * <p>The updated target values.</p>
   */
  Targets?: Target[];

  /**
   * @public
   * <p>The updated task ARN value.</p>
   */
  TaskArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) service role to use to publish Amazon Simple Notification Service
   * (Amazon SNS) notifications for maintenance window Run Command tasks.</p>
   */
  ServiceRoleArn?: string;

  /**
   * @public
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
   * @public
   * <p>The updated parameter values.</p>
   */
  TaskInvocationParameters?: MaintenanceWindowTaskInvocationParameters;

  /**
   * @public
   * <p>The updated priority value.</p>
   */
  Priority?: number;

  /**
   * @public
   * <p>The updated <code>MaxConcurrency</code> value.</p>
   */
  MaxConcurrency?: string;

  /**
   * @public
   * <p>The updated <code>MaxErrors</code> value.</p>
   */
  MaxErrors?: string;

  /**
   * @public
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
   * @public
   * <p>The updated task name.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The updated task description.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The specification for whether tasks should continue to run after the cutoff time specified
   *    in the maintenance windows is reached. </p>
   */
  CutoffBehavior?: MaintenanceWindowTaskCutoffBehavior;

  /**
   * @public
   * <p>The details for the CloudWatch alarm you applied to your maintenance window
   *    task.</p>
   */
  AlarmConfiguration?: AlarmConfiguration;
}

/**
 * @public
 */
export interface UpdateManagedInstanceRoleRequest {
  /**
   * @public
   * <p>The ID of the managed node where you want to update the role.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
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
   * @public
   * <p>User-defined text that contains information about the OpsItem, in Markdown format. </p>
   */
  Description?: string;

  /**
   * @public
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
   */
  OperationalData?: Record<string, OpsItemDataValue>;

  /**
   * @public
   * <p>Keys that you want to remove from the OperationalData map.</p>
   */
  OperationalDataToDelete?: string[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an SNS topic where notifications are sent when this
   *    OpsItem is edited or changed.</p>
   */
  Notifications?: OpsItemNotification[];

  /**
   * @public
   * <p>The importance of this OpsItem in relation to other OpsItems in the system.</p>
   */
  Priority?: number;

  /**
   * @public
   * <p>One or more OpsItems that share something in common with the current OpsItems. For example,
   *    related OpsItems can include OpsItems with similar error messages, impacted resources, or
   *    statuses for the impacted resource.</p>
   */
  RelatedOpsItems?: RelatedOpsItem[];

  /**
   * @public
   * <p>The OpsItem status. Status can be <code>Open</code>, <code>In Progress</code>, or
   *     <code>Resolved</code>. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-working-with-OpsItems-editing-details.html">Editing OpsItem details</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   */
  Status?: OpsItemStatus;

  /**
   * @public
   * <p>The ID of the OpsItem.</p>
   */
  OpsItemId: string | undefined;

  /**
   * @public
   * <p>A short heading that describes the nature of the OpsItem and the impacted resource.</p>
   */
  Title?: string;

  /**
   * @public
   * <p>Specify a new category for an OpsItem.</p>
   */
  Category?: string;

  /**
   * @public
   * <p>Specify a new severity for an OpsItem.</p>
   */
  Severity?: string;

  /**
   * @public
   * <p>The time a runbook workflow started. Currently reported only for the OpsItem type
   *     <code>/aws/changerequest</code>.</p>
   */
  ActualStartTime?: Date;

  /**
   * @public
   * <p>The time a runbook workflow ended. Currently reported only for the OpsItem type
   *     <code>/aws/changerequest</code>.</p>
   */
  ActualEndTime?: Date;

  /**
   * @public
   * <p>The time specified in a change request for a runbook workflow to start. Currently supported
   *    only for the OpsItem type <code>/aws/changerequest</code>.</p>
   */
  PlannedStartTime?: Date;

  /**
   * @public
   * <p>The time specified in a change request for a runbook workflow to end. Currently supported
   *    only for the OpsItem type <code>/aws/changerequest</code>.</p>
   */
  PlannedEndTime?: Date;

  /**
   * @public
   * <p>The OpsItem Amazon Resource Name (ARN).</p>
   */
  OpsItemArn?: string;
}

/**
 * @public
 */
export interface UpdateOpsItemResponse {}

/**
 * @public
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
 * @public
 */
export interface UpdateOpsMetadataRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the OpsMetadata Object to update.</p>
   */
  OpsMetadataArn: string | undefined;

  /**
   * @public
   * <p>Metadata to add to an OpsMetadata object.</p>
   */
  MetadataToUpdate?: Record<string, MetadataValue>;

  /**
   * @public
   * <p>The metadata keys to delete from the OpsMetadata object. </p>
   */
  KeysToDelete?: string[];
}

/**
 * @public
 */
export interface UpdateOpsMetadataResult {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the OpsMetadata Object that was updated.</p>
   */
  OpsMetadataArn?: string;
}

/**
 * @public
 */
export interface UpdatePatchBaselineRequest {
  /**
   * @public
   * <p>The ID of the patch baseline to update.</p>
   */
  BaselineId: string | undefined;

  /**
   * @public
   * <p>The name of the patch baseline.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A set of global filters used to include patches in the baseline.</p>
   */
  GlobalFilters?: PatchFilterGroup;

  /**
   * @public
   * <p>A set of rules used to include patches in the baseline.</p>
   */
  ApprovalRules?: PatchRuleGroup;

  /**
   * @public
   * <p>A list of explicitly approved patches for the baseline.</p>
   *          <p>For information about accepted formats for lists of approved patches and rejected patches,
   *                         see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-approved-rejected-package-name-formats.html">About
   *                         package name formats for approved and rejected patch lists</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   */
  ApprovedPatches?: string[];

  /**
   * @public
   * <p>Assigns a new compliance severity level to an existing patch baseline.</p>
   */
  ApprovedPatchesComplianceLevel?: PatchComplianceLevel;

  /**
   * @public
   * <p>Indicates whether the list of approved patches includes non-security updates that should be
   *    applied to the managed nodes. The default value is <code>false</code>. Applies to Linux managed
   *    nodes only.</p>
   */
  ApprovedPatchesEnableNonSecurity?: boolean;

  /**
   * @public
   * <p>A list of explicitly rejected patches for the baseline.</p>
   *          <p>For information about accepted formats for lists of approved patches and rejected patches,
   *                         see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-approved-rejected-package-name-formats.html">About
   *                         package name formats for approved and rejected patch lists</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   */
  RejectedPatches?: string[];

  /**
   * @public
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
  RejectedPatchesAction?: PatchAction;

  /**
   * @public
   * <p>A description of the patch baseline.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Information about the patches to use to update the managed nodes, including target operating
   *    systems and source repositories. Applies to Linux managed nodes only.</p>
   */
  Sources?: PatchSource[];

  /**
   * @public
   * <p>If True, then all fields that are required by the <a>CreatePatchBaseline</a>
   *    operation are also required for this API request. Optional fields that aren't specified are set
   *    to null.</p>
   */
  Replace?: boolean;
}

/**
 * @public
 */
export interface UpdatePatchBaselineResult {
  /**
   * @public
   * <p>The ID of the deleted patch baseline.</p>
   */
  BaselineId?: string;

  /**
   * @public
   * <p>The name of the patch baseline.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The operating system rule used by the updated patch baseline.</p>
   */
  OperatingSystem?: OperatingSystem;

  /**
   * @public
   * <p>A set of global filters used to exclude patches from the baseline.</p>
   */
  GlobalFilters?: PatchFilterGroup;

  /**
   * @public
   * <p>A set of rules used to include patches in the baseline.</p>
   */
  ApprovalRules?: PatchRuleGroup;

  /**
   * @public
   * <p>A list of explicitly approved patches for the baseline.</p>
   */
  ApprovedPatches?: string[];

  /**
   * @public
   * <p>The compliance severity level assigned to the patch baseline after the update
   *    completed.</p>
   */
  ApprovedPatchesComplianceLevel?: PatchComplianceLevel;

  /**
   * @public
   * <p>Indicates whether the list of approved patches includes non-security updates that should be
   *    applied to the managed nodes. The default value is <code>false</code>. Applies to Linux managed
   *    nodes only.</p>
   */
  ApprovedPatchesEnableNonSecurity?: boolean;

  /**
   * @public
   * <p>A list of explicitly rejected patches for the baseline.</p>
   */
  RejectedPatches?: string[];

  /**
   * @public
   * <p>The action specified to take on patches included in the <code>RejectedPatches</code> list. A
   *    patch can be allowed only if it is a dependency of another package, or blocked entirely along
   *    with packages that include it as a dependency.</p>
   */
  RejectedPatchesAction?: PatchAction;

  /**
   * @public
   * <p>The date when the patch baseline was created.</p>
   */
  CreatedDate?: Date;

  /**
   * @public
   * <p>The date when the patch baseline was last modified.</p>
   */
  ModifiedDate?: Date;

  /**
   * @public
   * <p>A description of the patch baseline.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Information about the patches to use to update the managed nodes, including target operating
   *    systems and source repositories. Applies to Linux managed nodes only.</p>
   */
  Sources?: PatchSource[];
}

/**
 * @public
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
 * @public
 */
export interface UpdateResourceDataSyncRequest {
  /**
   * @public
   * <p>The name of the resource data sync you want to update.</p>
   */
  SyncName: string | undefined;

  /**
   * @public
   * <p>The type of resource data sync. The supported <code>SyncType</code> is
   *    SyncFromSource.</p>
   */
  SyncType: string | undefined;

  /**
   * @public
   * <p>Specify information about the data sources to synchronize.</p>
   */
  SyncSource: ResourceDataSyncSource | undefined;
}

/**
 * @public
 */
export interface UpdateResourceDataSyncResult {}

/**
 * @public
 * <p>The request body of the UpdateServiceSetting API operation.</p>
 */
export interface UpdateServiceSettingRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the service setting to update. For example,
   *     <code>arn:aws:ssm:us-east-1:111122223333:servicesetting/ssm/parameter-store/high-throughput-enabled</code>.
   *    The setting ID can be one of the following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>/ssm/managed-instance/default-ec2-instance-management-role</code>
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
   */
  SettingId: string | undefined;

  /**
   * @public
   * <p>The new value to specify for the service setting. The following list specifies the available
   *    values for each setting.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>/ssm/managed-instance/default-ec2-instance-management-role: The name of an IAM role</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/ssm/automation/customer-script-log-destination</code>: <code>CloudWatch</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/ssm/automation/customer-script-log-group-name</code>: The name of an Amazon CloudWatch Logs log group</p>
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
   *             <li>
   *                <p>
   *                   <code>/ssm/opsinsights/opscenter</code>: <code>Enabled</code> or <code>Disabled</code>
   *                </p>
   *             </li>
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
   *          </ul>
   */
  SettingValue: string | undefined;
}

/**
 * @public
 * <p>The result body of the UpdateServiceSetting API operation.</p>
 */
export interface UpdateServiceSettingResult {}

/**
 * @public
 * <p>Specifies the inventory type and attribute for the aggregation execution.</p>
 */
export interface InventoryAggregator {
  /**
   * @public
   * <p>The inventory type and attribute name for aggregation.</p>
   */
  Expression?: string;

  /**
   * @public
   * <p>Nested aggregators to further refine aggregation for an inventory type.</p>
   */
  Aggregators?: InventoryAggregator[];

  /**
   * @public
   * <p>A user-defined set of one or more filters on which to aggregate inventory data. Groups
   *    return a count of resources that match and don't match the specified criteria.</p>
   */
  Groups?: InventoryGroup[];
}

/**
 * @public
 * <p>One or more aggregators for viewing counts of OpsData using different dimensions such as
 *     <code>Source</code>, <code>CreatedTime</code>, or <code>Source and CreatedTime</code>, to name a
 *    few.</p>
 */
export interface OpsAggregator {
  /**
   * @public
   * <p>Either a <code>Range</code> or <code>Count</code> aggregator for limiting an OpsData
   *    summary.</p>
   */
  AggregatorType?: string;

  /**
   * @public
   * <p>The data type name to use for viewing counts of OpsData.</p>
   */
  TypeName?: string;

  /**
   * @public
   * <p>The name of an OpsData attribute on which to limit the count of OpsData.</p>
   */
  AttributeName?: string;

  /**
   * @public
   * <p>The aggregator value.</p>
   */
  Values?: Record<string, string>;

  /**
   * @public
   * <p>The aggregator filters.</p>
   */
  Filters?: OpsFilter[];

  /**
   * @public
   * <p>A nested aggregator for viewing counts of OpsData.</p>
   */
  Aggregators?: OpsAggregator[];
}

/**
 * @public
 */
export interface GetInventoryRequest {
  /**
   * @public
   * <p>One or more filters. Use a filter to return a more specific list of results.</p>
   */
  Filters?: InventoryFilter[];

  /**
   * @public
   * <p>Returns counts of inventory types based on one or more expressions. For example, if you
   *    aggregate by using an expression that uses the <code>AWS:InstanceInformation.PlatformType</code>
   *    type, you can see a count of how many Windows and Linux managed nodes exist in your inventoried
   *    fleet.</p>
   */
  Aggregators?: InventoryAggregator[];

  /**
   * @public
   * <p>The list of inventory item types to return.</p>
   */
  ResultAttributes?: ResultAttribute[];

  /**
   * @public
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface GetOpsSummaryRequest {
  /**
   * @public
   * <p>Specify the name of a resource data sync to get.</p>
   */
  SyncName?: string;

  /**
   * @public
   * <p>Optional filters used to scope down the returned OpsData. </p>
   */
  Filters?: OpsFilter[];

  /**
   * @public
   * <p>Optional aggregators that return counts of OpsData based on one or more expressions.</p>
   */
  Aggregators?: OpsAggregator[];

  /**
   * @public
   * <p>The OpsData data type to return.</p>
   */
  ResultAttributes?: OpsResultAttribute[];

  /**
   * @public
   * <p>A token to start the list. Use this token to get the next set of results. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;
}

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
