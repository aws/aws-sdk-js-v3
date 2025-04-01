// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  AlarmConfiguration,
  AlarmStateInformation,
  AssociationComplianceSeverity,
  AssociationOverview,
  AssociationSyncCompliance,
  AutomationExecutionStatus,
  AutomationSubtype,
  DocumentFormat,
  DocumentHashType,
  DocumentPermissionType,
  DocumentRequires,
  DocumentStatus,
  DocumentType,
  ExecutionMode,
  InstanceAssociationOutputLocation,
  MaintenanceWindowExecutionStatus,
  MaintenanceWindowFilter,
  MaintenanceWindowResourceType,
  MaintenanceWindowTaskType,
  MetadataValue,
  OperatingSystem,
  OpsItemDataValue,
  OpsItemNotification,
  PatchAction,
  PatchComplianceLevel,
  PatchComplianceStatus,
  PatchFilterGroup,
  PatchOrchestratorFilter,
  PatchRuleGroup,
  PatchSource,
  PatchSourceFilterSensitiveLog,
  PlatformType,
  RelatedOpsItem,
  ResolvedTargets,
  ResourceDataSyncAwsOrganizationsSource,
  ResourceDataSyncS3Destination,
  ResourceType,
  ResourceTypeForTagging,
  ReviewStatus,
  Runbook,
  StepExecution,
  Tag,
  Target,
  TargetLocation,
} from "./models_0";

import { SSMServiceException as __BaseException } from "./SSMServiceException";

/**
 * <p>Information about a scheduled execution for a maintenance window.</p>
 * @public
 */
export interface ScheduledWindowExecution {
  /**
   * <p>The ID of the maintenance window to be run.</p>
   * @public
   */
  WindowId?: string | undefined;

  /**
   * <p>The name of the maintenance window to be run.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The time, in ISO-8601 Extended format, that the maintenance window is scheduled to be
   *    run.</p>
   * @public
   */
  ExecutionTime?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMaintenanceWindowScheduleResult {
  /**
   * <p>Information about maintenance window executions scheduled for the specified time
   *    range.</p>
   * @public
   */
  ScheduledWindowExecutions?: ScheduledWindowExecution[] | undefined;

  /**
   * <p>The token for the next set of items to return. (You use this token in the next call.)</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMaintenanceWindowsForTargetRequest {
  /**
   * <p>The managed node ID or key-value pair to retrieve information about.</p>
   * @public
   */
  Targets: Target[] | undefined;

  /**
   * <p>The type of resource you want to retrieve information about. For example,
   *     <code>INSTANCE</code>.</p>
   * @public
   */
  ResourceType: MaintenanceWindowResourceType | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The maintenance window to which the specified target belongs.</p>
 * @public
 */
export interface MaintenanceWindowIdentityForTarget {
  /**
   * <p>The ID of the maintenance window.</p>
   * @public
   */
  WindowId?: string | undefined;

  /**
   * <p>The name of the maintenance window.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMaintenanceWindowsForTargetResult {
  /**
   * <p>Information about the maintenance window targets and tasks a managed node is associated
   *    with.</p>
   * @public
   */
  WindowIdentities?: MaintenanceWindowIdentityForTarget[] | undefined;

  /**
   * <p>The token for the next set of items to return. (You use this token in the next call.)</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMaintenanceWindowTargetsRequest {
  /**
   * <p>The ID of the maintenance window whose targets should be retrieved.</p>
   * @public
   */
  WindowId: string | undefined;

  /**
   * <p>Optional filters that can be used to narrow down the scope of the returned window targets.
   *    The supported filter keys are <code>Type</code>, <code>WindowTargetId</code>, and
   *     <code>OwnerInformation</code>.</p>
   * @public
   */
  Filters?: MaintenanceWindowFilter[] | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The target registered with the maintenance window.</p>
 * @public
 */
export interface MaintenanceWindowTarget {
  /**
   * <p>The ID of the maintenance window to register the target with.</p>
   * @public
   */
  WindowId?: string | undefined;

  /**
   * <p>The ID of the target.</p>
   * @public
   */
  WindowTargetId?: string | undefined;

  /**
   * <p>The type of target that is being registered with the maintenance window.</p>
   * @public
   */
  ResourceType?: MaintenanceWindowResourceType | undefined;

  /**
   * <p>The targets, either managed nodes or tags.</p>
   *          <p>Specify managed nodes using the following format:</p>
   *          <p>
   *             <code>Key=instanceids,Values=<instanceid1>,<instanceid2></code>
   *          </p>
   *          <p>Tags are specified using the following format:</p>
   *          <p>
   *             <code>Key=<tag name>,Values=<tag value></code>.</p>
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * <p>A user-provided value that will be included in any Amazon CloudWatch Events events that are
   *    raised while running tasks for these targets in this maintenance window.</p>
   * @public
   */
  OwnerInformation?: string | undefined;

  /**
   * <p>The name for the maintenance window target.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A description for the target.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMaintenanceWindowTargetsResult {
  /**
   * <p>Information about the targets in the maintenance window.</p>
   * @public
   */
  Targets?: MaintenanceWindowTarget[] | undefined;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMaintenanceWindowTasksRequest {
  /**
   * <p>The ID of the maintenance window whose tasks should be retrieved.</p>
   * @public
   */
  WindowId: string | undefined;

  /**
   * <p>Optional filters used to narrow down the scope of the returned tasks. The supported filter
   *    keys are <code>WindowTaskId</code>, <code>TaskArn</code>, <code>Priority</code>, and
   *     <code>TaskType</code>.</p>
   * @public
   */
  Filters?: MaintenanceWindowFilter[] | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const MaintenanceWindowTaskCutoffBehavior = {
  CancelTask: "CANCEL_TASK",
  ContinueTask: "CONTINUE_TASK",
} as const;

/**
 * @public
 */
export type MaintenanceWindowTaskCutoffBehavior =
  (typeof MaintenanceWindowTaskCutoffBehavior)[keyof typeof MaintenanceWindowTaskCutoffBehavior];

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
 * @public
 */
export interface LoggingInfo {
  /**
   * <p>The name of an S3 bucket where execution logs are stored.</p>
   * @public
   */
  S3BucketName: string | undefined;

  /**
   * <p>(Optional) The S3 bucket subfolder. </p>
   * @public
   */
  S3KeyPrefix?: string | undefined;

  /**
   * <p>The Amazon Web Services Region where the S3 bucket is located.</p>
   * @public
   */
  S3Region: string | undefined;
}

/**
 * <p>Defines the values for a task parameter.</p>
 * @public
 */
export interface MaintenanceWindowTaskParameterValueExpression {
  /**
   * <p>This field contains an array of 0 or more strings, each 1 to 255 characters in
   *    length.</p>
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * <p>Information about a task defined for a maintenance window.</p>
 * @public
 */
export interface MaintenanceWindowTask {
  /**
   * <p>The ID of the maintenance window where the task is registered.</p>
   * @public
   */
  WindowId?: string | undefined;

  /**
   * <p>The task ID.</p>
   * @public
   */
  WindowTaskId?: string | undefined;

  /**
   * <p>The resource that the task uses during execution. For <code>RUN_COMMAND</code> and
   *     <code>AUTOMATION</code> task types, <code>TaskArn</code> is the Amazon Web Services Systems Manager (SSM document) name or
   *    ARN. For <code>LAMBDA</code> tasks, it's the function name or ARN. For
   *     <code>STEP_FUNCTIONS</code> tasks, it's the state machine ARN.</p>
   * @public
   */
  TaskArn?: string | undefined;

  /**
   * <p>The type of task.</p>
   * @public
   */
  Type?: MaintenanceWindowTaskType | undefined;

  /**
   * <p>The targets (either managed nodes or tags). Managed nodes are specified using
   *     <code>Key=instanceids,Values=<instanceid1>,<instanceid2></code>. Tags are specified
   *    using <code>Key=<tag name>,Values=<tag value></code>.</p>
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * <p>The parameters that should be passed to the task when it is run.</p>
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
   * <p>The priority of the task in the maintenance window. The lower the number, the higher the
   *    priority. Tasks that have the same priority are scheduled in parallel.</p>
   * @public
   */
  Priority?: number | undefined;

  /**
   * <p>Information about an S3 bucket to write task-level logs to.</p>
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
   * <p>The maximum number of targets this task can be run for, in parallel.</p>
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
   * <p>The maximum number of errors allowed before this task stops being scheduled.</p>
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
   * <p>The task name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A description of the task.</p>
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
   * <p>The details for the CloudWatch alarm applied to your maintenance window task.</p>
   * @public
   */
  AlarmConfiguration?: AlarmConfiguration | undefined;
}

/**
 * @public
 */
export interface DescribeMaintenanceWindowTasksResult {
  /**
   * <p>Information about the tasks in the maintenance window.</p>
   * @public
   */
  Tasks?: MaintenanceWindowTask[] | undefined;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const OpsItemFilterKey = {
  ACCOUNT_ID: "AccountId",
  ACTUAL_END_TIME: "ActualEndTime",
  ACTUAL_START_TIME: "ActualStartTime",
  AUTOMATION_ID: "AutomationId",
  CATEGORY: "Category",
  CHANGE_REQUEST_APPROVER_ARN: "ChangeRequestByApproverArn",
  CHANGE_REQUEST_APPROVER_NAME: "ChangeRequestByApproverName",
  CHANGE_REQUEST_REQUESTER_ARN: "ChangeRequestByRequesterArn",
  CHANGE_REQUEST_REQUESTER_NAME: "ChangeRequestByRequesterName",
  CHANGE_REQUEST_TARGETS_RESOURCE_GROUP: "ChangeRequestByTargetsResourceGroup",
  CHANGE_REQUEST_TEMPLATE: "ChangeRequestByTemplate",
  CREATED_BY: "CreatedBy",
  CREATED_TIME: "CreatedTime",
  INSIGHT_TYPE: "InsightByType",
  LAST_MODIFIED_TIME: "LastModifiedTime",
  OPERATIONAL_DATA: "OperationalData",
  OPERATIONAL_DATA_KEY: "OperationalDataKey",
  OPERATIONAL_DATA_VALUE: "OperationalDataValue",
  OPSITEM_ID: "OpsItemId",
  OPSITEM_TYPE: "OpsItemType",
  PLANNED_END_TIME: "PlannedEndTime",
  PLANNED_START_TIME: "PlannedStartTime",
  PRIORITY: "Priority",
  RESOURCE_ID: "ResourceId",
  SEVERITY: "Severity",
  SOURCE: "Source",
  STATUS: "Status",
  TITLE: "Title",
} as const;

/**
 * @public
 */
export type OpsItemFilterKey = (typeof OpsItemFilterKey)[keyof typeof OpsItemFilterKey];

/**
 * @public
 * @enum
 */
export const OpsItemFilterOperator = {
  CONTAINS: "Contains",
  EQUAL: "Equal",
  GREATER_THAN: "GreaterThan",
  LESS_THAN: "LessThan",
} as const;

/**
 * @public
 */
export type OpsItemFilterOperator = (typeof OpsItemFilterOperator)[keyof typeof OpsItemFilterOperator];

/**
 * <p>Describes an OpsItem filter.</p>
 * @public
 */
export interface OpsItemFilter {
  /**
   * <p>The name of the filter.</p>
   * @public
   */
  Key: OpsItemFilterKey | undefined;

  /**
   * <p>The filter value.</p>
   * @public
   */
  Values: string[] | undefined;

  /**
   * <p>The operator used by the filter call.</p>
   * @public
   */
  Operator: OpsItemFilterOperator | undefined;
}

/**
 * @public
 */
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
   *             <li>
   *                <p>Key: AccountId</p>
   *                <p>Operations: Equals</p>
   *             </li>
   *          </ul>
   *          <p>*The Equals operator for Title matches the first 100 characters. If you specify more than
   *    100 characters, they system returns an error that the filter value exceeds the length
   *    limit.</p>
   *          <p>**If you filter the response by using the OperationalData operator, specify a key-value pair
   *    by using the following JSON format: \{"key":"key_name","value":"a_value"\}</p>
   * @public
   */
  OpsItemFilters?: OpsItemFilter[] | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token to start the list. Use this token to get the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const OpsItemStatus = {
  APPROVED: "Approved",
  CANCELLED: "Cancelled",
  CANCELLING: "Cancelling",
  CHANGE_CALENDAR_OVERRIDE_APPROVED: "ChangeCalendarOverrideApproved",
  CHANGE_CALENDAR_OVERRIDE_REJECTED: "ChangeCalendarOverrideRejected",
  CLOSED: "Closed",
  COMPLETED_WITH_FAILURE: "CompletedWithFailure",
  COMPLETED_WITH_SUCCESS: "CompletedWithSuccess",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  OPEN: "Open",
  PENDING: "Pending",
  PENDING_APPROVAL: "PendingApproval",
  PENDING_CHANGE_CALENDAR_OVERRIDE: "PendingChangeCalendarOverride",
  REJECTED: "Rejected",
  RESOLVED: "Resolved",
  RUNBOOK_IN_PROGRESS: "RunbookInProgress",
  SCHEDULED: "Scheduled",
  TIMED_OUT: "TimedOut",
} as const;

/**
 * @public
 */
export type OpsItemStatus = (typeof OpsItemStatus)[keyof typeof OpsItemStatus];

/**
 * <p>A count of OpsItems.</p>
 * @public
 */
export interface OpsItemSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM entity that created the
   *    OpsItem.</p>
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * <p>The date and time the OpsItem was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM entity that created the
   *    OpsItem.</p>
   * @public
   */
  LastModifiedBy?: string | undefined;

  /**
   * <p>The date and time the OpsItem was last updated.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The importance of this OpsItem in relation to other OpsItems in the system.</p>
   * @public
   */
  Priority?: number | undefined;

  /**
   * <p>The impacted Amazon Web Services resource.</p>
   * @public
   */
  Source?: string | undefined;

  /**
   * <p>The OpsItem status.</p>
   * @public
   */
  Status?: OpsItemStatus | undefined;

  /**
   * <p>The ID of the OpsItem.</p>
   * @public
   */
  OpsItemId?: string | undefined;

  /**
   * <p>A short heading that describes the nature of the OpsItem and the impacted resource.</p>
   * @public
   */
  Title?: string | undefined;

  /**
   * <p>Operational data is custom data that provides useful reference details about the OpsItem.
   *   </p>
   * @public
   */
  OperationalData?: Record<string, OpsItemDataValue> | undefined;

  /**
   * <p>A list of OpsItems by category.</p>
   * @public
   */
  Category?: string | undefined;

  /**
   * <p>A list of OpsItems by severity.</p>
   * @public
   */
  Severity?: string | undefined;

  /**
   * <p>The type of OpsItem. Systems Manager supports the following types of OpsItems:</p>
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
   *                   <code>/aws/insight</code>
   *                </p>
   *                <p>This type of OpsItem is used by OpsCenter for aggregating and reporting on duplicate
   *      OpsItems. </p>
   *             </li>
   *          </ul>
   * @public
   */
  OpsItemType?: string | undefined;

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
}

/**
 * @public
 */
export interface DescribeOpsItemsResponse {
  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *    results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of OpsItems.</p>
   * @public
   */
  OpsItemSummaries?: OpsItemSummary[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ParametersFilterKey = {
  KEY_ID: "KeyId",
  NAME: "Name",
  TYPE: "Type",
} as const;

/**
 * @public
 */
export type ParametersFilterKey = (typeof ParametersFilterKey)[keyof typeof ParametersFilterKey];

/**
 * <p>This data type is deprecated. Instead, use <a>ParameterStringFilter</a>.</p>
 * @public
 */
export interface ParametersFilter {
  /**
   * <p>The name of the filter.</p>
   * @public
   */
  Key: ParametersFilterKey | undefined;

  /**
   * <p>The filter values.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * <p>One or more filters. Use a filter to return a more specific list of results.</p>
 * @public
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
   * @public
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
   * @public
   */
  Option?: string | undefined;

  /**
   * <p>The value you want to search for.</p>
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeParametersRequest {
  /**
   * <p>This data type is deprecated. Instead, use <code>ParameterFilters</code>.</p>
   * @public
   */
  Filters?: ParametersFilter[] | undefined;

  /**
   * <p>Filters to limit the request results.</p>
   * @public
   */
  ParameterFilters?: ParameterStringFilter[] | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Lists parameters that are shared with you.</p>
   *          <note>
   *             <p>By default when using this option, the command returns parameters that have been shared
   *     using a standard Resource Access Manager Resource Share. In order for a parameter that was shared
   *     using the <a>PutResourcePolicy</a> command to be returned, the associated
   *       <code>RAM Resource Share Created From Policy</code> must have been promoted to
   *     a standard Resource Share using the RAM
   *     <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> API operation.</p>
   *             <p>For more information about sharing parameters, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-shared-parameters.html">Working with
   *      shared parameters</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   *          </note>
   * @public
   */
  Shared?: boolean | undefined;
}

/**
 * <p>One or more policies assigned to a parameter.</p>
 * @public
 */
export interface ParameterInlinePolicy {
  /**
   * <p>The JSON text of the policy.</p>
   * @public
   */
  PolicyText?: string | undefined;

  /**
   * <p>The type of policy. Parameter Store, a tool in Amazon Web Services Systems Manager, supports the following policy
   *    types: Expiration, ExpirationNotification, and NoChangeNotification. </p>
   * @public
   */
  PolicyType?: string | undefined;

  /**
   * <p>The status of the policy. Policies report the following statuses: Pending (the policy hasn't
   *    been enforced or applied yet), Finished (the policy was applied), Failed (the policy wasn't
   *    applied), or InProgress (the policy is being applied now). </p>
   * @public
   */
  PolicyStatus?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ParameterTier = {
  ADVANCED: "Advanced",
  INTELLIGENT_TIERING: "Intelligent-Tiering",
  STANDARD: "Standard",
} as const;

/**
 * @public
 */
export type ParameterTier = (typeof ParameterTier)[keyof typeof ParameterTier];

/**
 * @public
 * @enum
 */
export const ParameterType = {
  SECURE_STRING: "SecureString",
  STRING: "String",
  STRING_LIST: "StringList",
} as const;

/**
 * @public
 */
export type ParameterType = (typeof ParameterType)[keyof typeof ParameterType];

/**
 * <p>Metadata includes information like the Amazon Resource Name (ARN) of the last user to update
 *    the parameter and the date and time the parameter was last used.</p>
 * @public
 */
export interface ParameterMetadata {
  /**
   * <p>The parameter name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the parameter.</p>
   * @public
   */
  ARN?: string | undefined;

  /**
   * <p>The type of parameter. Valid parameter types include the following: <code>String</code>,
   *     <code>StringList</code>, and <code>SecureString</code>.</p>
   * @public
   */
  Type?: ParameterType | undefined;

  /**
   * <p>The alias of the Key Management Service (KMS) key used to encrypt the
   *    parameter. Applies to <code>SecureString</code> parameters only.</p>
   * @public
   */
  KeyId?: string | undefined;

  /**
   * <p>Date the parameter was last changed or updated.</p>
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * <p>Amazon Resource Name (ARN) of the Amazon Web Services user who last changed the parameter.</p>
   * @public
   */
  LastModifiedUser?: string | undefined;

  /**
   * <p>Description of the parameter actions.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A parameter name can include only the following letters and symbols.</p>
   *          <p>a-zA-Z0-9_.-</p>
   * @public
   */
  AllowedPattern?: string | undefined;

  /**
   * <p>The parameter version.</p>
   * @public
   */
  Version?: number | undefined;

  /**
   * <p>The parameter tier.</p>
   * @public
   */
  Tier?: ParameterTier | undefined;

  /**
   * <p>A list of policies associated with a parameter.</p>
   * @public
   */
  Policies?: ParameterInlinePolicy[] | undefined;

  /**
   * <p>The data type of the parameter, such as <code>text</code> or <code>aws:ec2:image</code>. The
   *    default is <code>text</code>.</p>
   * @public
   */
  DataType?: string | undefined;
}

/**
 * @public
 */
export interface DescribeParametersResult {
  /**
   * <p>Parameters returned by the request.</p>
   * @public
   */
  Parameters?: ParameterMetadata[] | undefined;

  /**
   * <p>The token to use when requesting the next set of items.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The specified filter option isn't valid. Valid options are Equals and BeginsWith. For Path
 *    filter, valid options are Recursive and OneLevel.</p>
 * @public
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
 * @public
 */
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
   * @public
   */
  Filters?: PatchOrchestratorFilter[] | undefined;

  /**
   * <p>The maximum number of patch baselines to return (per page).</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Defines the basic information about a patch baseline.</p>
 * @public
 */
export interface PatchBaselineIdentity {
  /**
   * <p>The ID of the patch baseline.</p>
   * @public
   */
  BaselineId?: string | undefined;

  /**
   * <p>The name of the patch baseline.</p>
   * @public
   */
  BaselineName?: string | undefined;

  /**
   * <p>Defines the operating system the patch baseline applies to. The default value is
   *     <code>WINDOWS</code>. </p>
   * @public
   */
  OperatingSystem?: OperatingSystem | undefined;

  /**
   * <p>The description of the patch baseline.</p>
   * @public
   */
  BaselineDescription?: string | undefined;

  /**
   * <p>Indicates whether this is the default baseline. Amazon Web Services Systems Manager supports creating multiple default
   *    patch baselines. For example, you can create a default patch baseline for each operating
   *    system.</p>
   * @public
   */
  DefaultBaseline?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribePatchBaselinesResult {
  /**
   * <p>An array of <code>PatchBaselineIdentity</code> elements.</p>
   * @public
   */
  BaselineIdentities?: PatchBaselineIdentity[] | undefined;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribePatchGroupsRequest {
  /**
   * <p>The maximum number of patch groups to return (per page).</p>
   * @public
   */
  MaxResults?: number | undefined;

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
   * @public
   */
  Filters?: PatchOrchestratorFilter[] | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The mapping between a patch group and the patch baseline the patch group is registered
 *    with.</p>
 * @public
 */
export interface PatchGroupPatchBaselineMapping {
  /**
   * <p>The name of the patch group registered with the patch baseline.</p>
   * @public
   */
  PatchGroup?: string | undefined;

  /**
   * <p>The patch baseline the patch group is registered with.</p>
   * @public
   */
  BaselineIdentity?: PatchBaselineIdentity | undefined;
}

/**
 * @public
 */
export interface DescribePatchGroupsResult {
  /**
   * <p>Each entry in the array contains:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PatchGroup</code>: string (between 1 and 256 characters. Regex:
   *       <code>^([\p\{L\}\p\{Z\}\p\{N\}_.:/=+\-@]*)$)</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PatchBaselineIdentity</code>: A <code>PatchBaselineIdentity</code> element.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Mappings?: PatchGroupPatchBaselineMapping[] | undefined;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribePatchGroupStateRequest {
  /**
   * <p>The name of the patch group whose patch snapshot should be retrieved.</p>
   * @public
   */
  PatchGroup: string | undefined;
}

/**
 * @public
 */
export interface DescribePatchGroupStateResult {
  /**
   * <p>The number of managed nodes in the patch group.</p>
   * @public
   */
  Instances?: number | undefined;

  /**
   * <p>The number of managed nodes with installed patches.</p>
   * @public
   */
  InstancesWithInstalledPatches?: number | undefined;

  /**
   * <p>The number of managed nodes with patches installed that aren't defined in the patch
   *    baseline.</p>
   * @public
   */
  InstancesWithInstalledOtherPatches?: number | undefined;

  /**
   * <p>The number of managed nodes with patches installed by Patch Manager that haven't been
   *    rebooted after the patch installation. The status of these managed nodes is
   *     <code>NON_COMPLIANT</code>.</p>
   * @public
   */
  InstancesWithInstalledPendingRebootPatches?: number | undefined;

  /**
   * <p>The number of managed nodes with patches installed that are specified in a
   *     <code>RejectedPatches</code> list. Patches with a status of <code>INSTALLED_REJECTED</code> were
   *    typically installed before they were added to a <code>RejectedPatches</code> list.</p>
   *          <note>
   *             <p>If <code>ALLOW_AS_DEPENDENCY</code> is the specified option for
   *      <code>RejectedPatchesAction</code>, the value of
   *      <code>InstancesWithInstalledRejectedPatches</code> will always be <code>0</code> (zero).</p>
   *          </note>
   * @public
   */
  InstancesWithInstalledRejectedPatches?: number | undefined;

  /**
   * <p>The number of managed nodes with missing patches from the patch baseline.</p>
   * @public
   */
  InstancesWithMissingPatches?: number | undefined;

  /**
   * <p>The number of managed nodes with patches from the patch baseline that failed to
   *    install.</p>
   * @public
   */
  InstancesWithFailedPatches?: number | undefined;

  /**
   * <p>The number of managed nodes with patches that aren't applicable.</p>
   * @public
   */
  InstancesWithNotApplicablePatches?: number | undefined;

  /**
   * <p>The number of managed nodes with <code>NotApplicable</code> patches beyond the supported
   *    limit, which aren't reported by name to Inventory. Inventory is a tool in Amazon Web Services Systems Manager.</p>
   * @public
   */
  InstancesWithUnreportedNotApplicablePatches?: number | undefined;

  /**
   * <p>The number of managed nodes where patches that are specified as <code>Critical</code> for
   *    compliance reporting in the patch baseline aren't installed. These patches might be missing, have
   *    failed installation, were rejected, or were installed but awaiting a required managed node
   *    reboot. The status of these managed nodes is <code>NON_COMPLIANT</code>.</p>
   * @public
   */
  InstancesWithCriticalNonCompliantPatches?: number | undefined;

  /**
   * <p>The number of managed nodes where patches that are specified as <code>Security</code> in a
   *    patch advisory aren't installed. These patches might be missing, have failed installation, were
   *    rejected, or were installed but awaiting a required managed node reboot. The status of these
   *    managed nodes is <code>NON_COMPLIANT</code>.</p>
   * @public
   */
  InstancesWithSecurityNonCompliantPatches?: number | undefined;

  /**
   * <p>The number of managed nodes with patches installed that are specified as other than
   *     <code>Critical</code> or <code>Security</code> but aren't compliant with the patch baseline. The
   *    status of these managed nodes is <code>NON_COMPLIANT</code>.</p>
   * @public
   */
  InstancesWithOtherNonCompliantPatches?: number | undefined;

  /**
   * <p>The number of managed nodes for which security-related patches are available but not
   *    approved because because they didn't meet the patch baseline requirements. For example, an
   *    updated version of a patch might have been released before the specified auto-approval period was
   *    over.</p>
   *          <p>Applies to Windows Server managed nodes only.</p>
   * @public
   */
  InstancesWithAvailableSecurityUpdates?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const PatchSet = {
  Application: "APPLICATION",
  Os: "OS",
} as const;

/**
 * @public
 */
export type PatchSet = (typeof PatchSet)[keyof typeof PatchSet];

/**
 * @public
 * @enum
 */
export const PatchProperty = {
  PatchClassification: "CLASSIFICATION",
  PatchMsrcSeverity: "MSRC_SEVERITY",
  PatchPriority: "PRIORITY",
  PatchProductFamily: "PRODUCT_FAMILY",
  PatchSeverity: "SEVERITY",
  Product: "PRODUCT",
} as const;

/**
 * @public
 */
export type PatchProperty = (typeof PatchProperty)[keyof typeof PatchProperty];

/**
 * @public
 */
export interface DescribePatchPropertiesRequest {
  /**
   * <p>The operating system type for which to list patches.</p>
   * @public
   */
  OperatingSystem: OperatingSystem | undefined;

  /**
   * <p>The patch property for which you want to view patch details. </p>
   * @public
   */
  Property: PatchProperty | undefined;

  /**
   * <p>Indicates whether to list patches for the Windows operating system or for applications
   *    released by Microsoft. Not applicable for the Linux or macOS operating systems.</p>
   * @public
   */
  PatchSet?: PatchSet | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribePatchPropertiesResult {
  /**
   * <p>A list of the properties for patches matching the filter request parameters.</p>
   * @public
   */
  Properties?: Record<string, string>[] | undefined;

  /**
   * <p>The token for the next set of items to return. (You use this token in the next call.)</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SessionFilterKey = {
  INVOKED_AFTER: "InvokedAfter",
  INVOKED_BEFORE: "InvokedBefore",
  OWNER: "Owner",
  SESSION_ID: "SessionId",
  STATUS: "Status",
  TARGET_ID: "Target",
} as const;

/**
 * @public
 */
export type SessionFilterKey = (typeof SessionFilterKey)[keyof typeof SessionFilterKey];

/**
 * <p>Describes a filter for Session Manager information.</p>
 * @public
 */
export interface SessionFilter {
  /**
   * <p>The name of the filter.</p>
   * @public
   */
  key: SessionFilterKey | undefined;

  /**
   * <p>The filter value. Valid values for each filter key are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>InvokedAfter: Specify a timestamp to limit your results. For example, specify
   *      2024-08-29T00:00:00Z to see sessions that started August 29, 2024, and later.</p>
   *             </li>
   *             <li>
   *                <p>InvokedBefore: Specify a timestamp to limit your results. For example, specify
   *      2024-08-29T00:00:00Z to see sessions that started before August 29, 2024.</p>
   *             </li>
   *             <li>
   *                <p>Target: Specify a managed node to which session connections have been made.</p>
   *             </li>
   *             <li>
   *                <p>Owner: Specify an Amazon Web Services user to see a list of sessions started by that user.</p>
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
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SessionState = {
  ACTIVE: "Active",
  HISTORY: "History",
} as const;

/**
 * @public
 */
export type SessionState = (typeof SessionState)[keyof typeof SessionState];

/**
 * @public
 */
export interface DescribeSessionsRequest {
  /**
   * <p>The session status to retrieve a list of sessions for. For example, "Active".</p>
   * @public
   */
  State: SessionState | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>One or more filters to limit the type of sessions returned by the request.</p>
   * @public
   */
  Filters?: SessionFilter[] | undefined;
}

/**
 * <p>Reserved for future use.</p>
 * @public
 */
export interface SessionManagerOutputUrl {
  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  S3OutputUrl?: string | undefined;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  CloudWatchOutputUrl?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SessionStatus = {
  CONNECTED: "Connected",
  CONNECTING: "Connecting",
  DISCONNECTED: "Disconnected",
  FAILED: "Failed",
  TERMINATED: "Terminated",
  TERMINATING: "Terminating",
} as const;

/**
 * @public
 */
export type SessionStatus = (typeof SessionStatus)[keyof typeof SessionStatus];

/**
 * <p>Information about a Session Manager connection to a managed node.</p>
 * @public
 */
export interface Session {
  /**
   * <p>The ID of the session.</p>
   * @public
   */
  SessionId?: string | undefined;

  /**
   * <p>The managed node that the Session Manager session connected to.</p>
   * @public
   */
  Target?: string | undefined;

  /**
   * <p>The status of the session. For example, "Connected" or "Terminated".</p>
   * @public
   */
  Status?: SessionStatus | undefined;

  /**
   * <p>The date and time, in ISO-8601 Extended format, when the session began.</p>
   * @public
   */
  StartDate?: Date | undefined;

  /**
   * <p>The date and time, in ISO-8601 Extended format, when the session was terminated.</p>
   * @public
   */
  EndDate?: Date | undefined;

  /**
   * <p>The name of the Session Manager SSM document used to define the parameters and plugin settings for the
   *    session. For example, <code>SSM-SessionManagerRunShell</code>.</p>
   * @public
   */
  DocumentName?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services user that started the session.</p>
   * @public
   */
  Owner?: string | undefined;

  /**
   * <p>The reason for connecting to the instance.</p>
   * @public
   */
  Reason?: string | undefined;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  Details?: string | undefined;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  OutputUrl?: SessionManagerOutputUrl | undefined;

  /**
   * <p>The maximum duration of a session before it terminates.</p>
   * @public
   */
  MaxSessionDuration?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSessionsResponse {
  /**
   * <p>A list of sessions meeting the request parameters.</p>
   * @public
   */
  Sessions?: Session[] | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateOpsItemRelatedItemRequest {
  /**
   * <p>The ID of the OpsItem for which you want to delete an association between the OpsItem and a
   *    related item.</p>
   * @public
   */
  OpsItemId: string | undefined;

  /**
   * <p>The ID of the association for which you want to delete an association between the OpsItem
   *    and a related item.</p>
   * @public
   */
  AssociationId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateOpsItemRelatedItemResponse {}

/**
 * <p>The association wasn't found using the parameters you specified in the call. Verify the
 *    information and try again.</p>
 * @public
 */
export class OpsItemRelatedItemAssociationNotFoundException extends __BaseException {
  readonly name: "OpsItemRelatedItemAssociationNotFoundException" = "OpsItemRelatedItemAssociationNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * @public
 */
export interface GetAutomationExecutionRequest {
  /**
   * <p>The unique identifier for an existing automation execution to examine. The execution ID is
   *    returned by StartAutomationExecution when the execution of an Automation runbook is
   *    initiated.</p>
   * @public
   */
  AutomationExecutionId: string | undefined;
}

/**
 * <p>An aggregate of step execution statuses displayed in the Amazon Web Services Systems Manager console for a
 *    multi-Region and multi-account Automation execution.</p>
 * @public
 */
export interface ProgressCounters {
  /**
   * <p>The total number of steps run in all specified Amazon Web Services Regions and Amazon Web Services accounts for the
   *    current Automation execution.</p>
   * @public
   */
  TotalSteps?: number | undefined;

  /**
   * <p>The total number of steps that successfully completed in all specified Amazon Web Services Regions and
   *    Amazon Web Services accounts for the current Automation execution.</p>
   * @public
   */
  SuccessSteps?: number | undefined;

  /**
   * <p>The total number of steps that failed to run in all specified Amazon Web Services Regions and
   *    Amazon Web Services accounts for the current Automation execution.</p>
   * @public
   */
  FailedSteps?: number | undefined;

  /**
   * <p>The total number of steps that the system cancelled in all specified Amazon Web Services Regions and
   *    Amazon Web Services accounts for the current Automation execution.</p>
   * @public
   */
  CancelledSteps?: number | undefined;

  /**
   * <p>The total number of steps that timed out in all specified Amazon Web Services Regions and Amazon Web Services accounts
   *    for the current Automation execution.</p>
   * @public
   */
  TimedOutSteps?: number | undefined;
}

/**
 * <p>Detailed information about the current state of an individual Automation execution.</p>
 * @public
 */
export interface AutomationExecution {
  /**
   * <p>The execution ID.</p>
   * @public
   */
  AutomationExecutionId?: string | undefined;

  /**
   * <p>The name of the Automation runbook used during the execution.</p>
   * @public
   */
  DocumentName?: string | undefined;

  /**
   * <p>The version of the document to use during execution.</p>
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * <p>The time the execution started.</p>
   * @public
   */
  ExecutionStartTime?: Date | undefined;

  /**
   * <p>The time the execution finished.</p>
   * @public
   */
  ExecutionEndTime?: Date | undefined;

  /**
   * <p>The execution status of the Automation.</p>
   * @public
   */
  AutomationExecutionStatus?: AutomationExecutionStatus | undefined;

  /**
   * <p>A list of details about the current state of all steps that comprise an execution. An
   *    Automation runbook contains a list of steps that are run in order.</p>
   * @public
   */
  StepExecutions?: StepExecution[] | undefined;

  /**
   * <p>A boolean value that indicates if the response contains the full list of the Automation step
   *    executions. If true, use the DescribeAutomationStepExecutions API operation to get the full list
   *    of step executions.</p>
   * @public
   */
  StepExecutionsTruncated?: boolean | undefined;

  /**
   * <p>The key-value map of execution parameters, which were supplied when calling <a>StartAutomationExecution</a>.</p>
   * @public
   */
  Parameters?: Record<string, string[]> | undefined;

  /**
   * <p>The list of execution outputs as defined in the Automation runbook.</p>
   * @public
   */
  Outputs?: Record<string, string[]> | undefined;

  /**
   * <p>A message describing why an execution has failed, if the status is set to Failed.</p>
   * @public
   */
  FailureMessage?: string | undefined;

  /**
   * <p>The automation execution mode.</p>
   * @public
   */
  Mode?: ExecutionMode | undefined;

  /**
   * <p>The AutomationExecutionId of the parent automation.</p>
   * @public
   */
  ParentAutomationExecutionId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who ran the automation.</p>
   * @public
   */
  ExecutedBy?: string | undefined;

  /**
   * <p>The name of the step that is currently running.</p>
   * @public
   */
  CurrentStepName?: string | undefined;

  /**
   * <p>The action of the step that is currently running.</p>
   * @public
   */
  CurrentAction?: string | undefined;

  /**
   * <p>The parameter name.</p>
   * @public
   */
  TargetParameterName?: string | undefined;

  /**
   * <p>The specified targets.</p>
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * <p>The specified key-value mapping of document parameters to target resources.</p>
   * @public
   */
  TargetMaps?: Record<string, string[]>[] | undefined;

  /**
   * <p>A list of resolved targets in the rate control execution.</p>
   * @public
   */
  ResolvedTargets?: ResolvedTargets | undefined;

  /**
   * <p>The <code>MaxConcurrency</code> value specified by the user when the execution
   *    started.</p>
   * @public
   */
  MaxConcurrency?: string | undefined;

  /**
   * <p>The MaxErrors value specified by the user when the execution started.</p>
   * @public
   */
  MaxErrors?: string | undefined;

  /**
   * <p>The target of the execution.</p>
   * @public
   */
  Target?: string | undefined;

  /**
   * <p>The combination of Amazon Web Services Regions and/or Amazon Web Services accounts where you want to run the
   *    Automation.</p>
   * @public
   */
  TargetLocations?: TargetLocation[] | undefined;

  /**
   * <p>An aggregate of step execution statuses displayed in the Amazon Web Services Systems Manager console for a
   *    multi-Region and multi-account Automation execution.</p>
   * @public
   */
  ProgressCounters?: ProgressCounters | undefined;

  /**
   * <p>The details for the CloudWatch alarm applied to your automation.</p>
   * @public
   */
  AlarmConfiguration?: AlarmConfiguration | undefined;

  /**
   * <p>The CloudWatch alarm that was invoked by the automation.</p>
   * @public
   */
  TriggeredAlarms?: AlarmStateInformation[] | undefined;

  /**
   * <p>A publicly accessible URL for a file that contains the <code>TargetLocations</code> body.
   *    Currently, only files in presigned Amazon S3 buckets are supported</p>
   * @public
   */
  TargetLocationsURL?: string | undefined;

  /**
   * <p>The subtype of the Automation operation. Currently, the only supported value is
   *     <code>ChangeRequest</code>.</p>
   * @public
   */
  AutomationSubtype?: AutomationSubtype | undefined;

  /**
   * <p>The date and time the Automation operation is scheduled to start.</p>
   * @public
   */
  ScheduledTime?: Date | undefined;

  /**
   * <p>Information about the Automation runbooks that are run as part of a runbook workflow.</p>
   *          <note>
   *             <p>The Automation runbooks specified for the runbook workflow can't run until all required
   *     approvals for the change request have been received.</p>
   *          </note>
   * @public
   */
  Runbooks?: Runbook[] | undefined;

  /**
   * <p>The ID of an OpsItem that is created to represent a Change Manager change request.</p>
   * @public
   */
  OpsItemId?: string | undefined;

  /**
   * <p>The ID of a State Manager association used in the Automation operation.</p>
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * <p>The name of the Change Manager change request.</p>
   * @public
   */
  ChangeRequestName?: string | undefined;

  /**
   * <p>Variables defined for the automation.</p>
   * @public
   */
  Variables?: Record<string, string[]> | undefined;
}

/**
 * @public
 */
export interface GetAutomationExecutionResult {
  /**
   * <p>Detailed information about the current state of an automation execution.</p>
   * @public
   */
  AutomationExecution?: AutomationExecution | undefined;
}

/**
 * @public
 */
export interface GetCalendarStateRequest {
  /**
   * <p>The names of Amazon Resource Names (ARNs) of the Systems Manager documents (SSM documents) that
   *    represent the calendar entries for which you want to get the state.</p>
   * @public
   */
  CalendarNames: string[] | undefined;

  /**
   * <p>(Optional) The specific time for which you want to get calendar state information, in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> format. If you don't specify a
   *    value or <code>AtTime</code>, the current time is used.</p>
   * @public
   */
  AtTime?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CalendarState = {
  CLOSED: "CLOSED",
  OPEN: "OPEN",
} as const;

/**
 * @public
 */
export type CalendarState = (typeof CalendarState)[keyof typeof CalendarState];

/**
 * @public
 */
export interface GetCalendarStateResponse {
  /**
   * <p>The state of the calendar. An <code>OPEN</code> calendar indicates that actions are allowed
   *    to proceed, and a <code>CLOSED</code> calendar indicates that actions aren't allowed to
   *    proceed.</p>
   * @public
   */
  State?: CalendarState | undefined;

  /**
   * <p>The time, as an <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> string,
   *    that you specified in your command. If you don't specify a time, <code>GetCalendarState</code>
   *    uses the current time.</p>
   * @public
   */
  AtTime?: string | undefined;

  /**
   * <p>The time, as an <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> string,
   *    that the calendar state will change. If the current calendar state is <code>OPEN</code>,
   *     <code>NextTransitionTime</code> indicates when the calendar state changes to
   *    <code>CLOSED</code>, and vice-versa.</p>
   * @public
   */
  NextTransitionTime?: string | undefined;
}

/**
 * <p>The SSM document type isn't valid. Valid document types are described in the
 *     <code>DocumentType</code> property.</p>
 * @public
 */
export class InvalidDocumentType extends __BaseException {
  readonly name: "InvalidDocumentType" = "InvalidDocumentType";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * @public
 */
export class UnsupportedCalendarException extends __BaseException {
  readonly name: "UnsupportedCalendarException" = "UnsupportedCalendarException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * @public
 */
export interface GetCommandInvocationRequest {
  /**
   * <p>(Required) The parent command ID of the invocation plugin.</p>
   * @public
   */
  CommandId: string | undefined;

  /**
   * <p>(Required) The ID of the managed node targeted by the command. A <i>managed
   *     node</i> can be an Amazon Elastic Compute Cloud (Amazon EC2) instance, edge device, and on-premises server or VM
   *    in your hybrid environment that is configured for Amazon Web Services Systems Manager.</p>
   * @public
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
   * @public
   */
  PluginName?: string | undefined;
}

/**
 * <p>Configuration options for sending command output to Amazon CloudWatch Logs.</p>
 * @public
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
   * @public
   */
  CloudWatchLogGroupName?: string | undefined;

  /**
   * <p>Enables Systems Manager to send command output to CloudWatch Logs.</p>
   * @public
   */
  CloudWatchOutputEnabled?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const CommandInvocationStatus = {
  CANCELLED: "Cancelled",
  CANCELLING: "Cancelling",
  DELAYED: "Delayed",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  PENDING: "Pending",
  SUCCESS: "Success",
  TIMED_OUT: "TimedOut",
} as const;

/**
 * @public
 */
export type CommandInvocationStatus = (typeof CommandInvocationStatus)[keyof typeof CommandInvocationStatus];

/**
 * @public
 */
export interface GetCommandInvocationResult {
  /**
   * <p>The parent command ID of the invocation plugin.</p>
   * @public
   */
  CommandId?: string | undefined;

  /**
   * <p>The ID of the managed node targeted by the command. A <i>managed node</i> can
   *    be an Amazon Elastic Compute Cloud (Amazon EC2) instance, edge device, or on-premises server or VM in your hybrid
   *    environment that is configured for Amazon Web Services Systems Manager.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The comment text for the command.</p>
   * @public
   */
  Comment?: string | undefined;

  /**
   * <p>The name of the document that was run. For example, <code>AWS-RunShellScript</code>.</p>
   * @public
   */
  DocumentName?: string | undefined;

  /**
   * <p>The Systems Manager document (SSM document) version used in the request.</p>
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * <p>The name of the plugin, or <i>step name</i>, for which details are reported.
   *    For example, <code>aws:RunShellScript</code> is a plugin.</p>
   * @public
   */
  PluginName?: string | undefined;

  /**
   * <p>The error level response code for the plugin script. If the response code is
   *    <code>-1</code>, then the command hasn't started running on the managed node, or it wasn't
   *    received by the node.</p>
   * @public
   */
  ResponseCode?: number | undefined;

  /**
   * <p>The date and time the plugin started running. Date and time are written in ISO 8601 format.
   *    For example, June 7, 2017 is represented as 2017-06-7. The following sample Amazon Web Services CLI command uses
   *    the <code>InvokedBefore</code> filter.</p>
   *          <p>
   *             <code>aws ssm list-commands --filters key=InvokedBefore,value=2017-06-07T00:00:00Z</code>
   *          </p>
   *          <p>If the plugin hasn't started to run, the string is empty.</p>
   * @public
   */
  ExecutionStartDateTime?: string | undefined;

  /**
   * <p>Duration since <code>ExecutionStartDateTime</code>.</p>
   * @public
   */
  ExecutionElapsedTime?: string | undefined;

  /**
   * <p>The date and time the plugin finished running. Date and time are written in ISO 8601 format.
   *    For example, June 7, 2017 is represented as 2017-06-7. The following sample Amazon Web Services CLI command uses
   *    the <code>InvokedAfter</code> filter.</p>
   *          <p>
   *             <code>aws ssm list-commands --filters key=InvokedAfter,value=2017-06-07T00:00:00Z</code>
   *          </p>
   *          <p>If the plugin hasn't started to run, the string is empty.</p>
   * @public
   */
  ExecutionEndDateTime?: string | undefined;

  /**
   * <p>The status of this invocation plugin. This status can be different than
   *     <code>StatusDetails</code>.</p>
   * @public
   */
  Status?: CommandInvocationStatus | undefined;

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
   * @public
   */
  StatusDetails?: string | undefined;

  /**
   * <p>The first 24,000 characters written by the plugin to <code>stdout</code>. If the command
   *    hasn't finished running, if <code>ExecutionStatus</code> is neither Succeeded nor Failed, then
   *    this string is empty.</p>
   * @public
   */
  StandardOutputContent?: string | undefined;

  /**
   * <p>The URL for the complete text written by the plugin to <code>stdout</code> in Amazon Simple Storage Service (Amazon S3). If an S3 bucket wasn't specified, then this string is
   *    empty.</p>
   * @public
   */
  StandardOutputUrl?: string | undefined;

  /**
   * <p>The first 8,000 characters written by the plugin to <code>stderr</code>. If the command
   *    hasn't finished running, then this string is empty.</p>
   * @public
   */
  StandardErrorContent?: string | undefined;

  /**
   * <p>The URL for the complete text written by the plugin to <code>stderr</code>. If the command
   *    hasn't finished running, then this string is empty.</p>
   * @public
   */
  StandardErrorUrl?: string | undefined;

  /**
   * <p>Amazon CloudWatch Logs information where Systems Manager sent the command output.</p>
   * @public
   */
  CloudWatchOutputConfig?: CloudWatchOutputConfig | undefined;
}

/**
 * <p>The plugin name isn't valid.</p>
 * @public
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
 * @public
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
 * @public
 */
export interface GetConnectionStatusRequest {
  /**
   * <p>The managed node ID.</p>
   * @public
   */
  Target: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ConnectionStatus = {
  CONNECTED: "connected",
  NOT_CONNECTED: "notconnected",
} as const;

/**
 * @public
 */
export type ConnectionStatus = (typeof ConnectionStatus)[keyof typeof ConnectionStatus];

/**
 * @public
 */
export interface GetConnectionStatusResponse {
  /**
   * <p>The ID of the managed node to check connection status. </p>
   * @public
   */
  Target?: string | undefined;

  /**
   * <p>The status of the connection to the managed node.</p>
   * @public
   */
  Status?: ConnectionStatus | undefined;
}

/**
 * @public
 */
export interface GetDefaultPatchBaselineRequest {
  /**
   * <p>Returns the default patch baseline for the specified operating system.</p>
   * @public
   */
  OperatingSystem?: OperatingSystem | undefined;
}

/**
 * @public
 */
export interface GetDefaultPatchBaselineResult {
  /**
   * <p>The ID of the default patch baseline.</p>
   * @public
   */
  BaselineId?: string | undefined;

  /**
   * <p>The operating system for the returned patch baseline. </p>
   * @public
   */
  OperatingSystem?: OperatingSystem | undefined;
}

/**
 * <p>Defines the basic information about a patch baseline override.</p>
 * @public
 */
export interface BaselineOverride {
  /**
   * <p>The operating system rule used by the patch baseline override.</p>
   * @public
   */
  OperatingSystem?: OperatingSystem | undefined;

  /**
   * <p>A set of patch filters, typically used for approval rules.</p>
   * @public
   */
  GlobalFilters?: PatchFilterGroup | undefined;

  /**
   * <p>A set of rules defining the approval rules for a patch baseline.</p>
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
   * <p>Defines the compliance level for approved patches. When an approved patch is reported as
   *    missing, this value describes the severity of the compliance violation.</p>
   * @public
   */
  ApprovedPatchesComplianceLevel?: PatchComplianceLevel | undefined;

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
   *     <code>RejectedPackages</code> list. A patch can be allowed only if it is a dependency of another
   *    package, or blocked entirely along with packages that include it as a dependency.</p>
   * @public
   */
  RejectedPatchesAction?: PatchAction | undefined;

  /**
   * <p>Indicates whether the list of approved patches includes non-security updates that should be
   *    applied to the managed nodes. The default value is <code>false</code>. Applies to Linux managed
   *    nodes only.</p>
   * @public
   */
  ApprovedPatchesEnableNonSecurity?: boolean | undefined;

  /**
   * <p>Information about the patches to use to update the managed nodes, including target operating
   *    systems and source repositories. Applies to Linux managed nodes only.</p>
   * @public
   */
  Sources?: PatchSource[] | undefined;

  /**
   * <p>Indicates whether managed nodes for which there are available security-related patches that
   *    have not been approved by the baseline are being defined as <code>COMPLIANT</code> or
   *     <code>NON_COMPLIANT</code>. This option is specified when the <code>CreatePatchBaseline</code>
   *    or <code>UpdatePatchBaseline</code> commands are run.</p>
   *          <p>Applies to Windows Server managed nodes only.</p>
   * @public
   */
  AvailableSecurityUpdatesComplianceStatus?: PatchComplianceStatus | undefined;
}

/**
 * @public
 */
export interface GetDeployablePatchSnapshotForInstanceRequest {
  /**
   * <p>The ID of the managed node for which the appropriate patch snapshot should be
   *    retrieved.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The snapshot ID provided by the user when running <code>AWS-RunPatchBaseline</code>.</p>
   * @public
   */
  SnapshotId: string | undefined;

  /**
   * <p>Defines the basic information about a patch baseline override.</p>
   * @public
   */
  BaselineOverride?: BaselineOverride | undefined;
}

/**
 * @public
 */
export interface GetDeployablePatchSnapshotForInstanceResult {
  /**
   * <p>The managed node ID.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The user-defined snapshot ID.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>A pre-signed Amazon Simple Storage Service (Amazon S3) URL that can be used to download the
   *    patch snapshot.</p>
   * @public
   */
  SnapshotDownloadUrl?: string | undefined;

  /**
   * <p>Returns the specific operating system (for example Windows Server 2012 or Amazon Linux
   *    2015.09) on the managed node for the specified patch snapshot.</p>
   * @public
   */
  Product?: string | undefined;
}

/**
 * <p>Patching for applications released by Microsoft is only available on EC2 instances and
 *    advanced instances. To patch applications released by Microsoft on on-premises servers and VMs,
 *    you must enable advanced instances. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-managedinstances-advanced.html">Turning on
 *     the advanced-instances tier</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
 * @public
 */
export class UnsupportedFeatureRequiredException extends __BaseException {
  readonly name: "UnsupportedFeatureRequiredException" = "UnsupportedFeatureRequiredException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * @public
 */
export interface GetDocumentRequest {
  /**
   * <p>The name of the SSM document.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>An optional field specifying the version of the artifact associated with the document. For
   *    example, 12.6. This value is unique across all versions of a document and can't be
   *    changed.</p>
   * @public
   */
  VersionName?: string | undefined;

  /**
   * <p>The document version for which you want information.</p>
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * <p>Returns the document in the specified format. The document format can be either JSON or
   *    YAML. JSON is the default format.</p>
   * @public
   */
  DocumentFormat?: DocumentFormat | undefined;
}

/**
 * @public
 * @enum
 */
export const AttachmentHashType = {
  SHA256: "Sha256",
} as const;

/**
 * @public
 */
export type AttachmentHashType = (typeof AttachmentHashType)[keyof typeof AttachmentHashType];

/**
 * <p>A structure that includes attributes that describe a document attachment.</p>
 * @public
 */
export interface AttachmentContent {
  /**
   * <p>The name of an attachment.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The size of an attachment in bytes.</p>
   * @public
   */
  Size?: number | undefined;

  /**
   * <p>The cryptographic hash value of the document content.</p>
   * @public
   */
  Hash?: string | undefined;

  /**
   * <p>The hash algorithm used to calculate the hash value.</p>
   * @public
   */
  HashType?: AttachmentHashType | undefined;

  /**
   * <p>The URL location of the attachment content.</p>
   * @public
   */
  Url?: string | undefined;
}

/**
 * @public
 */
export interface GetDocumentResult {
  /**
   * <p>The name of the SSM document.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The date the SSM document was created.</p>
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * <p>The friendly name of the SSM document. This value can differ for each version of the
   *    document. If you want to update this value, see <a>UpdateDocument</a>.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The version of the artifact associated with the document. For example, 12.6. This value is
   *    unique across all versions of a document, and can't be changed.</p>
   * @public
   */
  VersionName?: string | undefined;

  /**
   * <p>The document version.</p>
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * <p>The status of the SSM document, such as <code>Creating</code>, <code>Active</code>,
   *     <code>Updating</code>, <code>Failed</code>, and <code>Deleting</code>.</p>
   * @public
   */
  Status?: DocumentStatus | undefined;

  /**
   * <p>A message returned by Amazon Web Services Systems Manager that explains the <code>Status</code> value. For example, a
   *     <code>Failed</code> status might be explained by the <code>StatusInformation</code> message,
   *    "The specified S3 bucket doesn't exist. Verify that the URL of the S3 bucket is correct."</p>
   * @public
   */
  StatusInformation?: string | undefined;

  /**
   * <p>The contents of the SSM document.</p>
   * @public
   */
  Content?: string | undefined;

  /**
   * <p>The document type.</p>
   * @public
   */
  DocumentType?: DocumentType | undefined;

  /**
   * <p>The document format, either JSON or YAML.</p>
   * @public
   */
  DocumentFormat?: DocumentFormat | undefined;

  /**
   * <p>A list of SSM documents required by a document. For example, an
   *     <code>ApplicationConfiguration</code> document requires an
   *     <code>ApplicationConfigurationSchema</code> document.</p>
   * @public
   */
  Requires?: DocumentRequires[] | undefined;

  /**
   * <p>A description of the document attachments, including names, locations, sizes, and so
   *    on.</p>
   * @public
   */
  AttachmentsContent?: AttachmentContent[] | undefined;

  /**
   * <p>The current review status of a new custom Systems Manager document (SSM document) created by a member
   *    of your organization, or of the latest version of an existing SSM document.</p>
   *          <p>Only one version of an SSM document can be in the APPROVED state at a time. When a new
   *    version is approved, the status of the previous version changes to REJECTED.</p>
   *          <p>Only one version of an SSM document can be in review, or PENDING, at a time.</p>
   * @public
   */
  ReviewStatus?: ReviewStatus | undefined;
}

/**
 * @public
 */
export interface GetExecutionPreviewRequest {
  /**
   * <p>The ID of the existing execution preview.</p>
   * @public
   */
  ExecutionPreviewId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ImpactType = {
  MUTATING: "Mutating",
  NON_MUTATING: "NonMutating",
  UNDETERMINED: "Undetermined",
} as const;

/**
 * @public
 */
export type ImpactType = (typeof ImpactType)[keyof typeof ImpactType];

/**
 * <p>Information about the resources that would be included in the actual runbook execution, if
 *    it were to be run.</p>
 * @public
 */
export interface TargetPreview {
  /**
   * <p>The number of resources of a certain type included in an execution preview.</p>
   * @public
   */
  Count?: number | undefined;

  /**
   * <p>A type of resource that was included in the execution preview.</p>
   * @public
   */
  TargetType?: string | undefined;
}

/**
 * <p>Information about the results of the execution preview.</p>
 * @public
 */
export interface AutomationExecutionPreview {
  /**
   * <p>Information about the type of impact a runbook step would have on a resource.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Mutating</code>: The runbook step would make changes to the targets through actions
   *      that create, modify, or delete resources.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Non_Mutating</code>: The runbook step would retrieve data about resources but not
   *      make changes to them. This category generally includes <code>Describe*</code>,
   *       <code>List*</code>, <code>Get*</code>, and similar read-only API actions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Undetermined</code>: An undetermined step invokes executions performed by another
   *      orchestration service like Lambda, Step Functions, or Amazon Web Services Systems Manager Run Command. An undetermined step might also call a third-party API. Systems Manager Automation doesn't know the outcome of the orchestration processes or
   *      third-party API executions, so the results of the steps are undetermined.</p>
   *             </li>
   *          </ul>
   * @public
   */
  StepPreviews?: Partial<Record<ImpactType, number>> | undefined;

  /**
   * <p>Information about the Amazon Web Services Regions targeted by the execution preview.</p>
   * @public
   */
  Regions?: string[] | undefined;

  /**
   * <p>Information that provides a preview of what the impact of running the specified Automation
   *    runbook would be.</p>
   * @public
   */
  TargetPreviews?: TargetPreview[] | undefined;

  /**
   * <p>Information about the Amazon Web Services accounts that were included in the execution
   *    preview.</p>
   * @public
   */
  TotalAccounts?: number | undefined;
}

/**
 * <p>Information about the changes that would be made if an execution were run.</p>
 * @public
 */
export type ExecutionPreview = ExecutionPreview.AutomationMember | ExecutionPreview.$UnknownMember;

/**
 * @public
 */
export namespace ExecutionPreview {
  /**
   * <p>Information about the changes that would be made if an Automation workflow were run.</p>
   * @public
   */
  export interface AutomationMember {
    Automation: AutomationExecutionPreview;
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
    Automation: (value: AutomationExecutionPreview) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ExecutionPreview, visitor: Visitor<T>): T => {
    if (value.Automation !== undefined) return visitor.Automation(value.Automation);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const ExecutionPreviewStatus = {
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  PENDING: "Pending",
  SUCCESS: "Success",
} as const;

/**
 * @public
 */
export type ExecutionPreviewStatus = (typeof ExecutionPreviewStatus)[keyof typeof ExecutionPreviewStatus];

/**
 * @public
 */
export interface GetExecutionPreviewResponse {
  /**
   * <p>The generated ID for the existing execution preview.</p>
   * @public
   */
  ExecutionPreviewId?: string | undefined;

  /**
   * <p>A UTC timestamp indicating when the execution preview operation ended.</p>
   * @public
   */
  EndedAt?: Date | undefined;

  /**
   * <p>The current status of the execution preview operation.</p>
   * @public
   */
  Status?: ExecutionPreviewStatus | undefined;

  /**
   * <p>Supplemental information about the current status of the execution preview.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>Information about the changes that would be made if an execution were run.</p>
   * @public
   */
  ExecutionPreview?: ExecutionPreview | undefined;
}

/**
 * @public
 * @enum
 */
export const InventoryQueryOperatorType = {
  BEGIN_WITH: "BeginWith",
  EQUAL: "Equal",
  EXISTS: "Exists",
  GREATER_THAN: "GreaterThan",
  LESS_THAN: "LessThan",
  NOT_EQUAL: "NotEqual",
} as const;

/**
 * @public
 */
export type InventoryQueryOperatorType = (typeof InventoryQueryOperatorType)[keyof typeof InventoryQueryOperatorType];

/**
 * <p>One or more filters. Use a filter to return a more specific list of results.</p>
 * @public
 */
export interface InventoryFilter {
  /**
   * <p>The name of the filter key.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>Inventory filter values. Example: inventory filter where managed node IDs are specified as
   *    values <code>Key=AWS:InstanceInformation.InstanceId,Values= i-a12b3c4d5e6g,
   *     i-1a2b3c4d5e6,Type=Equal</code>. </p>
   * @public
   */
  Values: string[] | undefined;

  /**
   * <p>The type of filter.</p>
   *          <note>
   *             <p>The <code>Exists</code> filter must be used with aggregators. For more information, see
   *      <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/inventory-aggregate.html">Aggregating inventory data</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   *          </note>
   * @public
   */
  Type?: InventoryQueryOperatorType | undefined;
}

/**
 * <p>A user-defined set of one or more filters on which to aggregate inventory data. Groups
 *    return a count of resources that match and don't match the specified criteria.</p>
 * @public
 */
export interface InventoryGroup {
  /**
   * <p>The name of the group.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Filters define the criteria for the group. The <code>matchingCount</code> field displays the
   *    number of resources that match the criteria. The <code>notMatchingCount</code> field displays the
   *    number of resources that don't match the criteria. </p>
   * @public
   */
  Filters: InventoryFilter[] | undefined;
}

/**
 * <p>The inventory item result attribute.</p>
 * @public
 */
export interface ResultAttribute {
  /**
   * <p>Name of the inventory item type. Valid value: <code>AWS:InstanceInformation</code>. Default
   *    Value: <code>AWS:InstanceInformation</code>.</p>
   * @public
   */
  TypeName: string | undefined;
}

/**
 * <p>The inventory result item.</p>
 * @public
 */
export interface InventoryResultItem {
  /**
   * <p>The name of the inventory result item type.</p>
   * @public
   */
  TypeName: string | undefined;

  /**
   * <p>The schema version for the inventory result item/</p>
   * @public
   */
  SchemaVersion: string | undefined;

  /**
   * <p>The time inventory item data was captured.</p>
   * @public
   */
  CaptureTime?: string | undefined;

  /**
   * <p>MD5 hash of the inventory item type contents. The content hash is used to determine whether
   *    to update inventory information. The PutInventory API doesn't update the inventory item type
   *    contents if the MD5 hash hasn't changed since last update. </p>
   * @public
   */
  ContentHash?: string | undefined;

  /**
   * <p>Contains all the inventory data of the item type. Results include attribute names and
   *    values. </p>
   * @public
   */
  Content: Record<string, string>[] | undefined;
}

/**
 * <p>Inventory query results.</p>
 * @public
 */
export interface InventoryResultEntity {
  /**
   * <p>ID of the inventory result entity. For example, for managed node inventory the result will
   *    be the managed node ID. For EC2 instance inventory, the result will be the instance ID. </p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The data section in the inventory result entity JSON.</p>
   * @public
   */
  Data?: Record<string, InventoryResultItem> | undefined;
}

/**
 * @public
 */
export interface GetInventoryResult {
  /**
   * <p>Collection of inventory entities such as a collection of managed node inventory. </p>
   * @public
   */
  Entities?: InventoryResultEntity[] | undefined;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The specified aggregator isn't valid for the group type. Verify that the aggregator you
 *    provided is supported.</p>
 * @public
 */
export class InvalidAggregatorException extends __BaseException {
  readonly name: "InvalidAggregatorException" = "InvalidAggregatorException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * @public
 */
export class InvalidInventoryGroupException extends __BaseException {
  readonly name: "InvalidInventoryGroupException" = "InvalidInventoryGroupException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * @public
 */
export class InvalidResultAttributeException extends __BaseException {
  readonly name: "InvalidResultAttributeException" = "InvalidResultAttributeException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * @public
 */
export interface GetInventorySchemaRequest {
  /**
   * <p>The type of inventory item to return.</p>
   * @public
   */
  TypeName?: string | undefined;

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

  /**
   * <p>Returns inventory schemas that support aggregation. For example, this call returns the
   *     <code>AWS:InstanceInformation</code> type, because it supports aggregation based on the
   *     <code>PlatformName</code>, <code>PlatformType</code>, and <code>PlatformVersion</code>
   *    attributes.</p>
   * @public
   */
  Aggregator?: boolean | undefined;

  /**
   * <p>Returns the sub-type schema for a specified inventory type.</p>
   * @public
   */
  SubType?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const InventoryAttributeDataType = {
  NUMBER: "number",
  STRING: "string",
} as const;

/**
 * @public
 */
export type InventoryAttributeDataType = (typeof InventoryAttributeDataType)[keyof typeof InventoryAttributeDataType];

/**
 * <p>Attributes are the entries within the inventory item content. It contains name and
 *    value.</p>
 * @public
 */
export interface InventoryItemAttribute {
  /**
   * <p>Name of the inventory item attribute.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The data type of the inventory item attribute. </p>
   * @public
   */
  DataType: InventoryAttributeDataType | undefined;
}

/**
 * <p>The inventory item schema definition. Users can use this to compose inventory query
 *    filters.</p>
 * @public
 */
export interface InventoryItemSchema {
  /**
   * <p>The name of the inventory type. Default inventory item type names start with Amazon Web Services. Custom
   *    inventory type names will start with Custom. Default inventory item types include the following:
   *     <code>AWS:AWSComponent</code>, <code>AWS:Application</code>,
   *     <code>AWS:InstanceInformation</code>, <code>AWS:Network</code>, and
   *     <code>AWS:WindowsUpdate</code>.</p>
   * @public
   */
  TypeName: string | undefined;

  /**
   * <p>The schema version for the inventory item.</p>
   * @public
   */
  Version?: string | undefined;

  /**
   * <p>The schema attributes for inventory. This contains data type and attribute name.</p>
   * @public
   */
  Attributes: InventoryItemAttribute[] | undefined;

  /**
   * <p>The alias name of the inventory type. The alias name is used for display purposes.</p>
   * @public
   */
  DisplayName?: string | undefined;
}

/**
 * @public
 */
export interface GetInventorySchemaResult {
  /**
   * <p>Inventory schemas returned by the request.</p>
   * @public
   */
  Schemas?: InventoryItemSchema[] | undefined;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetMaintenanceWindowRequest {
  /**
   * <p>The ID of the maintenance window for which you want to retrieve information.</p>
   * @public
   */
  WindowId: string | undefined;
}

/**
 * @public
 */
export interface GetMaintenanceWindowResult {
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
   * <p>The description of the maintenance window.</p>
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
   * <p>The next time the maintenance window will actually run, taking into account any specified
   *    times for the maintenance window to become active or inactive.</p>
   * @public
   */
  NextExecutionTime?: string | undefined;

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
   * <p>Indicates whether the maintenance window is enabled.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>The date the maintenance window was created.</p>
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * <p>The date the maintenance window was last modified.</p>
   * @public
   */
  ModifiedDate?: Date | undefined;
}

/**
 * @public
 */
export interface GetMaintenanceWindowExecutionRequest {
  /**
   * <p>The ID of the maintenance window execution that includes the task.</p>
   * @public
   */
  WindowExecutionId: string | undefined;
}

/**
 * @public
 */
export interface GetMaintenanceWindowExecutionResult {
  /**
   * <p>The ID of the maintenance window execution.</p>
   * @public
   */
  WindowExecutionId?: string | undefined;

  /**
   * <p>The ID of the task executions from the maintenance window execution.</p>
   * @public
   */
  TaskIds?: string[] | undefined;

  /**
   * <p>The status of the maintenance window execution.</p>
   * @public
   */
  Status?: MaintenanceWindowExecutionStatus | undefined;

  /**
   * <p>The details explaining the status. Not available for all status values.</p>
   * @public
   */
  StatusDetails?: string | undefined;

  /**
   * <p>The time the maintenance window started running.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The time the maintenance window finished running.</p>
   * @public
   */
  EndTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetMaintenanceWindowExecutionTaskRequest {
  /**
   * <p>The ID of the maintenance window execution that includes the task.</p>
   * @public
   */
  WindowExecutionId: string | undefined;

  /**
   * <p>The ID of the specific task execution in the maintenance window task that should be
   *    retrieved.</p>
   * @public
   */
  TaskId: string | undefined;
}

/**
 * @public
 */
export interface GetMaintenanceWindowExecutionTaskResult {
  /**
   * <p>The ID of the maintenance window execution that includes the task.</p>
   * @public
   */
  WindowExecutionId?: string | undefined;

  /**
   * <p>The ID of the specific task execution in the maintenance window task that was
   *    retrieved.</p>
   * @public
   */
  TaskExecutionId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the task that ran.</p>
   * @public
   */
  TaskArn?: string | undefined;

  /**
   * <p>The role that was assumed when running the task.</p>
   * @public
   */
  ServiceRole?: string | undefined;

  /**
   * <p>The type of task that was run.</p>
   * @public
   */
  Type?: MaintenanceWindowTaskType | undefined;

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
   * @public
   */
  TaskParameters?: Record<string, MaintenanceWindowTaskParameterValueExpression>[] | undefined;

  /**
   * <p>The priority of the task.</p>
   * @public
   */
  Priority?: number | undefined;

  /**
   * <p>The defined maximum number of task executions that could be run in parallel.</p>
   * @public
   */
  MaxConcurrency?: string | undefined;

  /**
   * <p>The defined maximum number of task execution errors allowed before scheduling of the task
   *    execution would have been stopped.</p>
   * @public
   */
  MaxErrors?: string | undefined;

  /**
   * <p>The status of the task.</p>
   * @public
   */
  Status?: MaintenanceWindowExecutionStatus | undefined;

  /**
   * <p>The details explaining the status. Not available for all status values.</p>
   * @public
   */
  StatusDetails?: string | undefined;

  /**
   * <p>The time the task execution started.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The time the task execution completed.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The details for the CloudWatch alarm you applied to your maintenance window
   *    task.</p>
   * @public
   */
  AlarmConfiguration?: AlarmConfiguration | undefined;

  /**
   * <p>The CloudWatch alarms that were invoked by the maintenance window task.</p>
   * @public
   */
  TriggeredAlarms?: AlarmStateInformation[] | undefined;
}

/**
 * @public
 */
export interface GetMaintenanceWindowExecutionTaskInvocationRequest {
  /**
   * <p>The ID of the maintenance window execution for which the task is a part.</p>
   * @public
   */
  WindowExecutionId: string | undefined;

  /**
   * <p>The ID of the specific task in the maintenance window task that should be retrieved. </p>
   * @public
   */
  TaskId: string | undefined;

  /**
   * <p>The invocation ID to retrieve.</p>
   * @public
   */
  InvocationId: string | undefined;
}

/**
 * @public
 */
export interface GetMaintenanceWindowExecutionTaskInvocationResult {
  /**
   * <p>The maintenance window execution ID.</p>
   * @public
   */
  WindowExecutionId?: string | undefined;

  /**
   * <p>The task execution ID.</p>
   * @public
   */
  TaskExecutionId?: string | undefined;

  /**
   * <p>The invocation ID.</p>
   * @public
   */
  InvocationId?: string | undefined;

  /**
   * <p>The execution ID.</p>
   * @public
   */
  ExecutionId?: string | undefined;

  /**
   * <p>Retrieves the task type for a maintenance window.</p>
   * @public
   */
  TaskType?: MaintenanceWindowTaskType | undefined;

  /**
   * <p>The parameters used at the time that the task ran.</p>
   * @public
   */
  Parameters?: string | undefined;

  /**
   * <p>The task status for an invocation.</p>
   * @public
   */
  Status?: MaintenanceWindowExecutionStatus | undefined;

  /**
   * <p>The details explaining the status. Details are only available for certain status
   *    values.</p>
   * @public
   */
  StatusDetails?: string | undefined;

  /**
   * <p>The time that the task started running on the target.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The time that the task finished running on the target.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>User-provided value to be included in any Amazon CloudWatch Events or Amazon EventBridge
   *    events raised while running tasks for these targets in this maintenance window.</p>
   * @public
   */
  OwnerInformation?: string | undefined;

  /**
   * <p>The maintenance window target ID.</p>
   * @public
   */
  WindowTargetId?: string | undefined;
}

/**
 * @public
 */
export interface GetMaintenanceWindowTaskRequest {
  /**
   * <p>The maintenance window ID that includes the task to retrieve.</p>
   * @public
   */
  WindowId: string | undefined;

  /**
   * <p>The maintenance window task ID to retrieve.</p>
   * @public
   */
  WindowTaskId: string | undefined;
}

/**
 * <p>The parameters for an <code>AUTOMATION</code> task type.</p>
 * @public
 */
export interface MaintenanceWindowAutomationParameters {
  /**
   * <p>The version of an Automation runbook to use during task execution.</p>
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * <p>The parameters for the <code>AUTOMATION</code> task.</p>
   *          <p>For information about specifying and updating task parameters, see <a>RegisterTaskWithMaintenanceWindow</a> and <a>UpdateMaintenanceWindowTask</a>.</p>
   *          <note>
   *             <p>
   *                <code>LoggingInfo</code> has been deprecated. To specify an Amazon Simple Storage Service (Amazon S3) bucket to contain logs, instead use the
   *       <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure.
   *       For information about how Amazon Web Services Systems Manager handles these options for the supported maintenance
   *       window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p>
   *             <p>
   *                <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs,
   *       instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information
   *       about how Systems Manager handles these options for the supported maintenance window task
   *       types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p>
   *             <p>For <code>AUTOMATION</code> task types, Amazon Web Services Systems Manager ignores any values specified for these
   *     parameters.</p>
   *          </note>
   * @public
   */
  Parameters?: Record<string, string[]> | undefined;
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
 *             <p>
 *                <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs,
 *       instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information
 *       about how Systems Manager handles these options for the supported maintenance window task
 *       types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p>
 *             <p>For Lambda tasks, Systems Manager ignores any values specified for TaskParameters and
 *     LoggingInfo.</p>
 *          </note>
 * @public
 */
export interface MaintenanceWindowLambdaParameters {
  /**
   * <p>Pass client-specific information to the Lambda function that you are
   *    invoking. You can then process the client information in your Lambda function as you
   *    choose through the context variable.</p>
   * @public
   */
  ClientContext?: string | undefined;

  /**
   * <p>(Optional) Specify an Lambda function version or alias name. If you specify a
   *    function version, the operation uses the qualified function Amazon Resource Name (ARN) to invoke
   *    a specific Lambda function. If you specify an alias name, the operation uses the
   *    alias ARN to invoke the Lambda function version to which the alias points.</p>
   * @public
   */
  Qualifier?: string | undefined;

  /**
   * <p>JSON to provide to your Lambda function as input.</p>
   * @public
   */
  Payload?: Uint8Array | undefined;
}

/**
 * @public
 * @enum
 */
export const NotificationEvent = {
  ALL: "All",
  CANCELLED: "Cancelled",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  SUCCESS: "Success",
  TIMED_OUT: "TimedOut",
} as const;

/**
 * @public
 */
export type NotificationEvent = (typeof NotificationEvent)[keyof typeof NotificationEvent];

/**
 * @public
 * @enum
 */
export const NotificationType = {
  Command: "Command",
  Invocation: "Invocation",
} as const;

/**
 * @public
 */
export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType];

/**
 * <p>Configurations for sending notifications.</p>
 * @public
 */
export interface NotificationConfig {
  /**
   * <p>An Amazon Resource Name (ARN) for an Amazon Simple Notification Service (Amazon SNS) topic. Run
   *    Command pushes notifications about command status changes to this topic.</p>
   * @public
   */
  NotificationArn?: string | undefined;

  /**
   * <p>The different events for which you can receive notifications. To learn more about these
   *    events, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/monitoring-sns-notifications.html">Monitoring Systems Manager status
   *     changes using Amazon SNS notifications</a> in the
   *     <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   * @public
   */
  NotificationEvents?: NotificationEvent[] | undefined;

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
   * @public
   */
  NotificationType?: NotificationType | undefined;
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
 *             <p>
 *                <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs,
 *       instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information
 *       about how Systems Manager handles these options for the supported maintenance window task
 *       types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p>
 *             <p>For <code>RUN_COMMAND</code> tasks, Systems Manager uses specified values for
 *      <code>TaskParameters</code> and <code>LoggingInfo</code> only if no values are specified for
 *      <code>TaskInvocationParameters</code>. </p>
 *          </note>
 * @public
 */
export interface MaintenanceWindowRunCommandParameters {
  /**
   * <p>Information about the commands to run.</p>
   * @public
   */
  Comment?: string | undefined;

  /**
   * <p>Configuration options for sending command output to Amazon CloudWatch Logs.</p>
   * @public
   */
  CloudWatchOutputConfig?: CloudWatchOutputConfig | undefined;

  /**
   * <p>The SHA-256 or SHA-1 hash created by the system when the document was created. SHA-1 hashes
   *    have been deprecated.</p>
   * @public
   */
  DocumentHash?: string | undefined;

  /**
   * <p>SHA-256 or SHA-1. SHA-1 hashes have been deprecated.</p>
   * @public
   */
  DocumentHashType?: DocumentHashType | undefined;

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
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * <p>Configurations for sending notifications about command status changes on a per-managed node
   *    basis.</p>
   * @public
   */
  NotificationConfig?: NotificationConfig | undefined;

  /**
   * <p>The name of the Amazon Simple Storage Service (Amazon S3) bucket.</p>
   * @public
   */
  OutputS3BucketName?: string | undefined;

  /**
   * <p>The S3 bucket subfolder.</p>
   * @public
   */
  OutputS3KeyPrefix?: string | undefined;

  /**
   * <p>The parameters for the <code>RUN_COMMAND</code> task execution.</p>
   * @public
   */
  Parameters?: Record<string, string[]> | undefined;

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
   * <p>If this time is reached and the command hasn't already started running, it doesn't
   *    run.</p>
   * @public
   */
  TimeoutSeconds?: number | undefined;
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
 *             <p>
 *                <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs,
 *       instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information
 *       about how Systems Manager handles these options for the supported maintenance window task
 *       types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p>
 *             <p>For Step Functions tasks, Systems Manager ignores any values specified for
 *      <code>TaskParameters</code> and <code>LoggingInfo</code>.</p>
 *          </note>
 * @public
 */
export interface MaintenanceWindowStepFunctionsParameters {
  /**
   * <p>The inputs for the <code>STEP_FUNCTIONS</code> task.</p>
   * @public
   */
  Input?: string | undefined;

  /**
   * <p>The name of the <code>STEP_FUNCTIONS</code> task.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>The parameters for task execution.</p>
 * @public
 */
export interface MaintenanceWindowTaskInvocationParameters {
  /**
   * <p>The parameters for a <code>RUN_COMMAND</code> task type.</p>
   * @public
   */
  RunCommand?: MaintenanceWindowRunCommandParameters | undefined;

  /**
   * <p>The parameters for an <code>AUTOMATION</code> task type.</p>
   * @public
   */
  Automation?: MaintenanceWindowAutomationParameters | undefined;

  /**
   * <p>The parameters for a <code>STEP_FUNCTIONS</code> task type.</p>
   * @public
   */
  StepFunctions?: MaintenanceWindowStepFunctionsParameters | undefined;

  /**
   * <p>The parameters for a <code>LAMBDA</code> task type.</p>
   * @public
   */
  Lambda?: MaintenanceWindowLambdaParameters | undefined;
}

/**
 * @public
 */
export interface GetMaintenanceWindowTaskResult {
  /**
   * <p>The retrieved maintenance window ID.</p>
   * @public
   */
  WindowId?: string | undefined;

  /**
   * <p>The retrieved maintenance window task ID.</p>
   * @public
   */
  WindowTaskId?: string | undefined;

  /**
   * <p>The targets where the task should run.</p>
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * <p>The resource that the task used during execution. For <code>RUN_COMMAND</code> and
   *     <code>AUTOMATION</code> task types, the value of <code>TaskArn</code> is the SSM document
   *    name/ARN. For <code>LAMBDA</code> tasks, the value is the function name/ARN. For
   *     <code>STEP_FUNCTIONS</code> tasks, the value is the state machine ARN.</p>
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
   * <p>The type of task to run.</p>
   * @public
   */
  TaskType?: MaintenanceWindowTaskType | undefined;

  /**
   * <p>The parameters to pass to the task when it runs.</p>
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
   * <p>The parameters to pass to the task when it runs.</p>
   * @public
   */
  TaskInvocationParameters?: MaintenanceWindowTaskInvocationParameters | undefined;

  /**
   * <p>The priority of the task when it runs. The lower the number, the higher the priority. Tasks
   *    that have the same priority are scheduled in parallel.</p>
   * @public
   */
  Priority?: number | undefined;

  /**
   * <p>The maximum number of targets allowed to run this task in parallel.</p>
   *          <note>
   *             <p>For maintenance window tasks without a target specified, you can't supply a value for this
   *     option. Instead, the system inserts a placeholder value of <code>1</code>, which may be reported
   *     in the response to this command. This value doesn't affect the running of your task and can be
   *     ignored.</p>
   *          </note>
   * @public
   */
  MaxConcurrency?: string | undefined;

  /**
   * <p>The maximum number of errors allowed before the task stops being scheduled.</p>
   *          <note>
   *             <p>For maintenance window tasks without a target specified, you can't supply a value for this
   *     option. Instead, the system inserts a placeholder value of <code>1</code>, which may be reported
   *     in the response to this command. This value doesn't affect the running of your task and can be
   *     ignored.</p>
   *          </note>
   * @public
   */
  MaxErrors?: string | undefined;

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
   * @public
   */
  LoggingInfo?: LoggingInfo | undefined;

  /**
   * <p>The retrieved task name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The retrieved task description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The action to take on tasks when the maintenance window cutoff time is reached.
   *     <code>CONTINUE_TASK</code> means that tasks continue to run. For Automation, Lambda, Step Functions tasks, <code>CANCEL_TASK</code> means that currently
   *    running task invocations continue, but no new task invocations are started. For Run Command
   *    tasks, <code>CANCEL_TASK</code> means the system attempts to stop the task by sending a
   *     <code>CancelCommand</code> operation.</p>
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
export interface GetOpsItemRequest {
  /**
   * <p>The ID of the OpsItem that you want to get.</p>
   * @public
   */
  OpsItemId: string | undefined;

  /**
   * <p>The OpsItem Amazon Resource Name (ARN).</p>
   * @public
   */
  OpsItemArn?: string | undefined;
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
 *     <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">Amazon Web Services Systems Manager
 *     OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p>
 * @public
 */
export interface OpsItem {
  /**
   * <p>The ARN of the Amazon Web Services account that created the OpsItem.</p>
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * <p>The type of OpsItem. Systems Manager supports the following types of OpsItems:</p>
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
   *                   <code>/aws/insight</code>
   *                </p>
   *                <p>This type of OpsItem is used by OpsCenter for aggregating and reporting on duplicate
   *      OpsItems. </p>
   *             </li>
   *          </ul>
   * @public
   */
  OpsItemType?: string | undefined;

  /**
   * <p>The date and time the OpsItem was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The OpsItem description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ARN of the Amazon Web Services account that last updated the OpsItem.</p>
   * @public
   */
  LastModifiedBy?: string | undefined;

  /**
   * <p>The date and time the OpsItem was last updated.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an Amazon Simple Notification Service (Amazon SNS) topic where
   *    notifications are sent when this OpsItem is edited or changed.</p>
   * @public
   */
  Notifications?: OpsItemNotification[] | undefined;

  /**
   * <p>The importance of this OpsItem in relation to other OpsItems in the system.</p>
   * @public
   */
  Priority?: number | undefined;

  /**
   * <p>One or more OpsItems that share something in common with the current OpsItem. For example,
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
  OpsItemId?: string | undefined;

  /**
   * <p>The version of this OpsItem. Each time the OpsItem is edited the version number increments
   *    by one.</p>
   * @public
   */
  Version?: string | undefined;

  /**
   * <p>A short heading that describes the nature of the OpsItem and the impacted resource.</p>
   * @public
   */
  Title?: string | undefined;

  /**
   * <p>The origin of the OpsItem, such as Amazon EC2 or Systems Manager. The impacted resource is a subset of
   *    source.</p>
   * @public
   */
  Source?: string | undefined;

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
   *     <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-manually-create-OpsItems.html">Creating OpsItems
   *     manually</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   * @public
   */
  OperationalData?: Record<string, OpsItemDataValue> | undefined;

  /**
   * <p>An OpsItem category. Category options include: Availability, Cost, Performance, Recovery,
   *    Security.</p>
   * @public
   */
  Category?: string | undefined;

  /**
   * <p>The severity of the OpsItem. Severity options range from 1 to 4.</p>
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
export interface GetOpsItemResponse {
  /**
   * <p>The OpsItem.</p>
   * @public
   */
  OpsItem?: OpsItem | undefined;
}

/**
 * @public
 */
export interface GetOpsMetadataRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of an OpsMetadata Object to view.</p>
   * @public
   */
  OpsMetadataArn: string | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token to start the list. Use this token to get the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetOpsMetadataResult {
  /**
   * <p>The resource ID of the Application Manager application.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>OpsMetadata for an Application Manager application.</p>
   * @public
   */
  Metadata?: Record<string, MetadataValue> | undefined;

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *    results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const OpsFilterOperatorType = {
  BEGIN_WITH: "BeginWith",
  EQUAL: "Equal",
  EXISTS: "Exists",
  GREATER_THAN: "GreaterThan",
  LESS_THAN: "LessThan",
  NOT_EQUAL: "NotEqual",
} as const;

/**
 * @public
 */
export type OpsFilterOperatorType = (typeof OpsFilterOperatorType)[keyof typeof OpsFilterOperatorType];

/**
 * <p>A filter for viewing OpsData summaries.</p>
 * @public
 */
export interface OpsFilter {
  /**
   * <p>The name of the filter.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The filter value.</p>
   * @public
   */
  Values: string[] | undefined;

  /**
   * <p>The type of filter.</p>
   * @public
   */
  Type?: OpsFilterOperatorType | undefined;
}

/**
 * <p>The OpsItem data type to return.</p>
 * @public
 */
export interface OpsResultAttribute {
  /**
   * <p>Name of the data type. Valid value: <code>AWS:OpsItem</code>,
   *     <code>AWS:EC2InstanceInformation</code>, <code>AWS:OpsItemTrendline</code>, or
   *     <code>AWS:ComplianceSummary</code>.</p>
   * @public
   */
  TypeName: string | undefined;
}

/**
 * <p>The OpsData summary.</p>
 * @public
 */
export interface OpsEntityItem {
  /**
   * <p>The time the OpsData was captured.</p>
   * @public
   */
  CaptureTime?: string | undefined;

  /**
   * <p>The details of an OpsData summary.</p>
   * @public
   */
  Content?: Record<string, string>[] | undefined;
}

/**
 * <p>The result of the query.</p>
 * @public
 */
export interface OpsEntity {
  /**
   * <p>The query ID.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The data returned by the query.</p>
   * @public
   */
  Data?: Record<string, OpsEntityItem> | undefined;
}

/**
 * @public
 */
export interface GetOpsSummaryResult {
  /**
   * <p>The list of aggregated details and filtered OpsData.</p>
   * @public
   */
  Entities?: OpsEntity[] | undefined;

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *    results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetParameterRequest {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the parameter that you want to query. For
   *    parameters shared with you from another account, you must use the full ARN.</p>
   *          <p>To query by parameter label, use <code>"Name": "name:label"</code>. To query by parameter
   *    version, use <code>"Name": "name:version"</code>.</p>
   *          <p>For more information about shared parameters, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-shared-parameters.html">Working with
   *     shared parameters</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Return decrypted values for secure string parameters. This flag is ignored for
   *     <code>String</code> and <code>StringList</code> parameter types.</p>
   * @public
   */
  WithDecryption?: boolean | undefined;
}

/**
 * <p>An Amazon Web Services Systems Manager parameter in Parameter Store.</p>
 * @public
 */
export interface Parameter {
  /**
   * <p>The name of the parameter.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of parameter. Valid values include the following: <code>String</code>,
   *     <code>StringList</code>, and <code>SecureString</code>.</p>
   *          <note>
   *             <p>If type is <code>StringList</code>, the system returns a comma-separated string with no
   *     spaces between commas in the <code>Value</code> field.</p>
   *          </note>
   * @public
   */
  Type?: ParameterType | undefined;

  /**
   * <p>The parameter value.</p>
   *          <note>
   *             <p>If type is <code>StringList</code>, the system returns a comma-separated string with no
   *     spaces between commas in the <code>Value</code> field.</p>
   *          </note>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>The parameter version.</p>
   * @public
   */
  Version?: number | undefined;

  /**
   * <p>Either the version number or the label used to retrieve the parameter value. Specify
   *    selectors by using one of the following formats:</p>
   *          <p>parameter_name:version</p>
   *          <p>parameter_name:label</p>
   * @public
   */
  Selector?: string | undefined;

  /**
   * <p>Applies to parameters that reference information in other Amazon Web Services services.
   *     <code>SourceResult</code> is the raw result or response from the source.</p>
   * @public
   */
  SourceResult?: string | undefined;

  /**
   * <p>Date the parameter was last changed or updated and the parameter version was created.</p>
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the parameter.</p>
   * @public
   */
  ARN?: string | undefined;

  /**
   * <p>The data type of the parameter, such as <code>text</code> or <code>aws:ec2:image</code>. The
   *    default is <code>text</code>.</p>
   * @public
   */
  DataType?: string | undefined;
}

/**
 * @public
 */
export interface GetParameterResult {
  /**
   * <p>Information about a parameter.</p>
   * @public
   */
  Parameter?: Parameter | undefined;
}

/**
 * <p>The query key ID isn't valid.</p>
 * @public
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
 * @public
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
 * @public
 */
export interface GetParameterHistoryRequest {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the parameter for which you want to review
   *    history. For parameters shared with you from another account, you must use the full ARN.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Return decrypted values for secure string parameters. This flag is ignored for
   *     <code>String</code> and <code>StringList</code> parameter types.</p>
   * @public
   */
  WithDecryption?: boolean | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Information about parameter usage.</p>
 * @public
 */
export interface ParameterHistory {
  /**
   * <p>The name of the parameter.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of parameter used.</p>
   * @public
   */
  Type?: ParameterType | undefined;

  /**
   * <p>The alias of the Key Management Service (KMS) key used to encrypt the
   *    parameter. Applies to <code>SecureString</code> parameters only</p>
   * @public
   */
  KeyId?: string | undefined;

  /**
   * <p>Date the parameter was last changed or updated.</p>
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * <p>Amazon Resource Name (ARN) of the Amazon Web Services user who last changed the parameter.</p>
   * @public
   */
  LastModifiedUser?: string | undefined;

  /**
   * <p>Information about the parameter.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The parameter value.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>Parameter names can include the following letters and symbols.</p>
   *          <p>a-zA-Z0-9_.-</p>
   * @public
   */
  AllowedPattern?: string | undefined;

  /**
   * <p>The parameter version.</p>
   * @public
   */
  Version?: number | undefined;

  /**
   * <p>Labels assigned to the parameter version.</p>
   * @public
   */
  Labels?: string[] | undefined;

  /**
   * <p>The parameter tier.</p>
   * @public
   */
  Tier?: ParameterTier | undefined;

  /**
   * <p>Information about the policies assigned to a parameter.</p>
   *          <p>
   *             <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-policies.html">Assigning parameter
   *     policies</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   * @public
   */
  Policies?: ParameterInlinePolicy[] | undefined;

  /**
   * <p>The data type of the parameter, such as <code>text</code> or <code>aws:ec2:image</code>. The
   *    default is <code>text</code>.</p>
   * @public
   */
  DataType?: string | undefined;
}

/**
 * @public
 */
export interface GetParameterHistoryResult {
  /**
   * <p>A list of parameters returned by the request.</p>
   * @public
   */
  Parameters?: ParameterHistory[] | undefined;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetParametersRequest {
  /**
   * <p>The names or Amazon Resource Names (ARNs) of the parameters that you want to query. For
   *    parameters shared with you from another account, you must use the full ARNs.</p>
   *          <p>To query by parameter label, use <code>"Name": "name:label"</code>. To query by parameter
   *    version, use <code>"Name": "name:version"</code>.</p>
   *          <note>
   *             <p>The results for <code>GetParameters</code> requests are listed in alphabetical order in
   *     query responses.</p>
   *          </note>
   *          <p>For information about shared parameters, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-shared-parameters.html">Working with
   *     shared parameters</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   * @public
   */
  Names: string[] | undefined;

  /**
   * <p>Return decrypted secure string value. Return decrypted values for secure string parameters.
   *    This flag is ignored for <code>String</code> and <code>StringList</code> parameter types.</p>
   * @public
   */
  WithDecryption?: boolean | undefined;
}

/**
 * @public
 */
export interface GetParametersResult {
  /**
   * <p>A list of details for a parameter.</p>
   * @public
   */
  Parameters?: Parameter[] | undefined;

  /**
   * <p>A list of parameters that aren't formatted correctly or don't run during an
   *    execution.</p>
   * @public
   */
  InvalidParameters?: string[] | undefined;
}

/**
 * @public
 */
export interface GetParametersByPathRequest {
  /**
   * <p>The hierarchy for the parameter. Hierarchies start with a forward slash (/). The hierarchy
   *    is the parameter name except the last part of the parameter. For the API call to succeed, the
   *    last part of the parameter name can't be in the path. A parameter name hierarchy can have a
   *    maximum of 15 levels. Here is an example of a hierarchy:
   *     <code>/Finance/Prod/IAD/WinServ2016/license33 </code>
   *          </p>
   * @public
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
   * @public
   */
  Recursive?: boolean | undefined;

  /**
   * <p>Filters to limit the request results.</p>
   *          <note>
   *             <p>The following <code>Key</code> values are supported for <code>GetParametersByPath</code>:
   *      <code>Type</code>, <code>KeyId</code>, and <code>Label</code>.</p>
   *             <p>The following <code>Key</code> values aren't supported for
   *     <code>GetParametersByPath</code>: <code>tag</code>, <code>DataType</code>, <code>Name</code>,
   *      <code>Path</code>, and <code>Tier</code>.</p>
   *          </note>
   * @public
   */
  ParameterFilters?: ParameterStringFilter[] | undefined;

  /**
   * <p>Retrieve all parameters in a hierarchy with their value decrypted.</p>
   * @public
   */
  WithDecryption?: boolean | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token to start the list. Use this token to get the next set of results. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetParametersByPathResult {
  /**
   * <p>A list of parameters found in the specified hierarchy.</p>
   * @public
   */
  Parameters?: Parameter[] | undefined;

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *    results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
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
   * @public
   */
  BaselineId: string | undefined;
}

/**
 * @public
 */
export interface GetPatchBaselineResult {
  /**
   * <p>The ID of the retrieved patch baseline.</p>
   * @public
   */
  BaselineId?: string | undefined;

  /**
   * <p>The name of the patch baseline.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Returns the operating system specified for the patch baseline.</p>
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
   * <p>Returns the specified compliance severity level for approved patches in the patch
   *    baseline.</p>
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
   * <p>Patch groups included in the patch baseline.</p>
   * @public
   */
  PatchGroups?: string[] | undefined;

  /**
   * <p>The date the patch baseline was created.</p>
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * <p>The date the patch baseline was last modified.</p>
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

  /**
   * <p>Indicates the compliance status of managed nodes for which security-related patches are
   *    available but were not approved. This preference is specified when the
   *     <code>CreatePatchBaseline</code> or <code>UpdatePatchBaseline</code> commands are run.</p>
   *          <p>Applies to Windows Server managed nodes only.</p>
   * @public
   */
  AvailableSecurityUpdatesComplianceStatus?: PatchComplianceStatus | undefined;
}

/**
 * @public
 */
export interface GetPatchBaselineForPatchGroupRequest {
  /**
   * <p>The name of the patch group whose patch baseline should be retrieved.</p>
   * @public
   */
  PatchGroup: string | undefined;

  /**
   * <p>Returns the operating system rule specified for patch groups using the patch
   *    baseline.</p>
   * @public
   */
  OperatingSystem?: OperatingSystem | undefined;
}

/**
 * @public
 */
export interface GetPatchBaselineForPatchGroupResult {
  /**
   * <p>The ID of the patch baseline that should be used for the patch group.</p>
   * @public
   */
  BaselineId?: string | undefined;

  /**
   * <p>The name of the patch group.</p>
   * @public
   */
  PatchGroup?: string | undefined;

  /**
   * <p>The operating system rule specified for patch groups using the patch baseline.</p>
   * @public
   */
  OperatingSystem?: OperatingSystem | undefined;
}

/**
 * @public
 */
export interface GetResourcePoliciesRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the resource to which the policies are attached.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>A token to start the list. Use this token to get the next set of results.</p>
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
 * <p>A resource policy helps you to define the IAM entity (for example, an
 *    Amazon Web Services account) that can manage your Systems Manager resources. Currently, <code>OpsItemGroup</code> is the
 *    only resource that supports Systems Manager resource policies. The resource policy for
 *     <code>OpsItemGroup</code> enables Amazon Web Services accounts to view and interact with OpsCenter operational
 *    work items (OpsItems).</p>
 * @public
 */
export interface GetResourcePoliciesResponseEntry {
  /**
   * <p>A policy ID.</p>
   * @public
   */
  PolicyId?: string | undefined;

  /**
   * <p>ID of the current policy version. The hash helps to prevent a situation where multiple users
   *    attempt to overwrite a policy. You must provide this hash when updating or deleting a
   *    policy.</p>
   * @public
   */
  PolicyHash?: string | undefined;

  /**
   * <p>A resource policy helps you to define the IAM entity (for example, an
   *    Amazon Web Services account) that can manage your Systems Manager resources. Currently, <code>OpsItemGroup</code> is the
   *    only resource that supports Systems Manager resource policies. The resource policy for
   *     <code>OpsItemGroup</code> enables Amazon Web Services accounts to view and interact with OpsCenter operational
   *    work items (OpsItems).</p>
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePoliciesResponse {
  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *    results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>An array of the <code>Policy</code> object.</p>
   * @public
   */
  Policies?: GetResourcePoliciesResponseEntry[] | undefined;
}

/**
 * <p>The request body of the GetServiceSetting API operation.</p>
 * @public
 */
export interface GetServiceSettingRequest {
  /**
   * <p>The ID of the service setting to get. The setting ID can be one of the following.</p>
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
   * @public
   */
  SettingId: string | undefined;
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
 * @public
 */
export interface ServiceSetting {
  /**
   * <p>The ID of the service setting.</p>
   * @public
   */
  SettingId?: string | undefined;

  /**
   * <p>The value of the service setting.</p>
   * @public
   */
  SettingValue?: string | undefined;

  /**
   * <p>The last time the service setting was modified.</p>
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * <p>The ARN of the last modified user. This field is populated only if the setting value was
   *    overwritten.</p>
   * @public
   */
  LastModifiedUser?: string | undefined;

  /**
   * <p>The ARN of the service setting.</p>
   * @public
   */
  ARN?: string | undefined;

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
   * @public
   */
  Status?: string | undefined;
}

/**
 * <p>The query result body of the GetServiceSetting API operation.</p>
 * @public
 */
export interface GetServiceSettingResult {
  /**
   * <p>The query result of the current service setting.</p>
   * @public
   */
  ServiceSetting?: ServiceSetting | undefined;
}

/**
 * <p>The specified service setting wasn't found. Either the service name or the setting hasn't
 *    been provisioned by the Amazon Web Services service team.</p>
 * @public
 */
export class ServiceSettingNotFound extends __BaseException {
  readonly name: "ServiceSettingNotFound" = "ServiceSettingNotFound";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * @public
 */
export interface LabelParameterVersionRequest {
  /**
   * <p>The parameter name on which you want to attach one or more labels.</p>
   *          <note>
   *             <p>You can't enter the Amazon Resource Name (ARN) for a parameter, only the parameter name
   *     itself.</p>
   *          </note>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The specific version of the parameter on which you want to attach one or more labels. If no
   *    version is specified, the system attaches the label to the latest version.</p>
   * @public
   */
  ParameterVersion?: number | undefined;

  /**
   * <p>One or more labels to attach to the specified parameter version.</p>
   * @public
   */
  Labels: string[] | undefined;
}

/**
 * @public
 */
export interface LabelParameterVersionResult {
  /**
   * <p>The label doesn't meet the requirements. For information about parameter label requirements,
   *    see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-paramstore-labels.html">Working with parameter
   *     labels</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   * @public
   */
  InvalidLabels?: string[] | undefined;

  /**
   * <p>The version of the parameter that has been labeled.</p>
   * @public
   */
  ParameterVersion?: number | undefined;
}

/**
 * <p>A parameter version can have a maximum of ten labels.</p>
 * @public
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
 * @public
 * @enum
 */
export const AssociationFilterKey = {
  AssociationId: "AssociationId",
  AssociationName: "AssociationName",
  InstanceId: "InstanceId",
  LastExecutedAfter: "LastExecutedAfter",
  LastExecutedBefore: "LastExecutedBefore",
  Name: "Name",
  ResourceGroupName: "ResourceGroupName",
  Status: "AssociationStatusName",
} as const;

/**
 * @public
 */
export type AssociationFilterKey = (typeof AssociationFilterKey)[keyof typeof AssociationFilterKey];

/**
 * <p>Describes a filter.</p>
 * @public
 */
export interface AssociationFilter {
  /**
   * <p>The name of the filter.</p>
   *          <note>
   *             <p>
   *                <code>InstanceId</code> has been deprecated.</p>
   *          </note>
   * @public
   */
  key: AssociationFilterKey | undefined;

  /**
   * <p>The filter value.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface ListAssociationsRequest {
  /**
   * <p>One or more filters. Use a filter to return a more specific list of results.</p>
   *          <note>
   *             <p>Filtering associations using the <code>InstanceID</code> attribute only returns legacy
   *     associations created using the <code>InstanceID</code> attribute. Associations targeting the
   *     managed node that are part of the Target Attributes <code>ResourceGroup</code> or
   *      <code>Tags</code> aren't returned.</p>
   *          </note>
   * @public
   */
  AssociationFilterList?: AssociationFilter[] | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Describes an association of a Amazon Web Services Systems Manager document (SSM document) and a managed node.</p>
 * @public
 */
export interface Association {
  /**
   * <p>The name of the SSM document.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The managed node ID.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The ID created by the system when you create an association. An association is a binding
   *    between a document and a set of targets with a schedule.</p>
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * <p>The association version.</p>
   * @public
   */
  AssociationVersion?: string | undefined;

  /**
   * <p>The version of the document used in the association. If you change a document version for a
   *    State Manager association, Systems Manager immediately runs the association unless you previously specifed
   *    the <code>apply-only-at-cron-interval</code> parameter.</p>
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
   * <p>The managed nodes targeted by the request to create an association. You can target all
   *    managed nodes in an Amazon Web Services account by specifying the <code>InstanceIds</code> key with a value of
   *     <code>*</code>.</p>
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * <p>The date on which the association was last run.</p>
   * @public
   */
  LastExecutionDate?: Date | undefined;

  /**
   * <p>Information about the association.</p>
   * @public
   */
  Overview?: AssociationOverview | undefined;

  /**
   * <p>A cron expression that specifies a schedule when the association runs. The schedule runs in
   *    Coordinated Universal Time (UTC).</p>
   * @public
   */
  ScheduleExpression?: string | undefined;

  /**
   * <p>The association name.</p>
   * @public
   */
  AssociationName?: string | undefined;

  /**
   * <p>Number of days to wait after the scheduled day to run an association.</p>
   * @public
   */
  ScheduleOffset?: number | undefined;

  /**
   * <p>The number of hours that an association can run on specified targets. After the resulting
   *    cutoff time passes, associations that are currently running are cancelled, and no pending
   *    executions are started on remaining targets.</p>
   * @public
   */
  Duration?: number | undefined;

  /**
   * <p>A key-value mapping of document parameters to target resources. Both Targets and TargetMaps
   *    can't be specified together.</p>
   * @public
   */
  TargetMaps?: Record<string, string[]>[] | undefined;
}

/**
 * @public
 */
export interface ListAssociationsResult {
  /**
   * <p>The associations.</p>
   * @public
   */
  Associations?: Association[] | undefined;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssociationVersionsRequest {
  /**
   * <p>The association ID for which you want to view all versions.</p>
   * @public
   */
  AssociationId: string | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token to start the list. Use this token to get the next set of results. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Information about the association version.</p>
 * @public
 */
export interface AssociationVersionInfo {
  /**
   * <p>The ID created by the system when the association was created.</p>
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * <p>The association version.</p>
   * @public
   */
  AssociationVersion?: string | undefined;

  /**
   * <p>The date the association version was created.</p>
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * <p>The name specified when the association was created.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The version of an Amazon Web Services Systems Manager document (SSM document) used when the association version was
   *    created.</p>
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * <p>Parameters specified when the association version was created.</p>
   * @public
   */
  Parameters?: Record<string, string[]> | undefined;

  /**
   * <p>The targets specified for the association when the association version was created. </p>
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * <p>The cron or rate schedule specified for the association when the association version was
   *    created.</p>
   * @public
   */
  ScheduleExpression?: string | undefined;

  /**
   * <p>The location in Amazon S3 specified for the association when the association version
   *    was created.</p>
   * @public
   */
  OutputLocation?: InstanceAssociationOutputLocation | undefined;

  /**
   * <p>The name specified for the association version when the association version was
   *    created.</p>
   * @public
   */
  AssociationName?: string | undefined;

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
   * <p>The severity level that is assigned to the association.</p>
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
   * <p>By default, when you create new associations, the system runs it immediately after it is
   *    created and then according to the schedule you specified. Specify this option if you don't want
   *    an association to run immediately after you create it. This parameter isn't supported for rate
   *    expressions.</p>
   * @public
   */
  ApplyOnlyAtCronInterval?: boolean | undefined;

  /**
   * <p>The names or Amazon Resource Names (ARNs) of the Change Calendar type documents your
   *    associations are gated under. The associations for this version only run when that Change
   *    Calendar is open. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-change-calendar">Amazon Web Services Systems Manager Change
   *     Calendar</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   * @public
   */
  CalendarNames?: string[] | undefined;

  /**
   * <p>The combination of Amazon Web Services Regions and Amazon Web Services accounts where you wanted to run the association
   *    when this association version was created.</p>
   * @public
   */
  TargetLocations?: TargetLocation[] | undefined;

  /**
   * <p>Number of days to wait after the scheduled day to run an association.</p>
   * @public
   */
  ScheduleOffset?: number | undefined;

  /**
   * <p>The number of hours that an association can run on specified targets. After the resulting
   *    cutoff time passes, associations that are currently running are cancelled, and no pending
   *    executions are started on remaining targets.</p>
   * @public
   */
  Duration?: number | undefined;

  /**
   * <p>A key-value mapping of document parameters to target resources. Both Targets and TargetMaps
   *    can't be specified together.</p>
   * @public
   */
  TargetMaps?: Record<string, string[]>[] | undefined;
}

/**
 * @public
 */
export interface ListAssociationVersionsResult {
  /**
   * <p>Information about all versions of the association for the specified association ID.</p>
   * @public
   */
  AssociationVersions?: AssociationVersionInfo[] | undefined;

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *    results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CommandFilterKey = {
  DOCUMENT_NAME: "DocumentName",
  EXECUTION_STAGE: "ExecutionStage",
  INVOKED_AFTER: "InvokedAfter",
  INVOKED_BEFORE: "InvokedBefore",
  STATUS: "Status",
} as const;

/**
 * @public
 */
export type CommandFilterKey = (typeof CommandFilterKey)[keyof typeof CommandFilterKey];

/**
 * <p>Describes a command filter.</p>
 *          <note>
 *             <p>A managed node ID can't be specified when a command status is <code>Pending</code> because
 *     the command hasn't run on the node yet.</p>
 *          </note>
 * @public
 */
export interface CommandFilter {
  /**
   * <p>The name of the filter.</p>
   *          <note>
   *             <p>The <code>ExecutionStage</code> filter can't be used with the
   *      <code>ListCommandInvocations</code> operation, only with <code>ListCommands</code>.</p>
   *          </note>
   * @public
   */
  key: CommandFilterKey | undefined;

  /**
   * <p>The filter value. Valid values for each filter key are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>InvokedAfter</b>: Specify a timestamp to limit your results.
   *      For example, specify <code>2024-07-07T00:00:00Z</code> to see a list of command executions
   *      occurring July 7, 2021, and later.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>InvokedBefore</b>: Specify a timestamp to limit your results.
   *      For example, specify <code>2024-07-07T00:00:00Z</code> to see a list of command executions from
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
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface ListCommandInvocationsRequest {
  /**
   * <p>(Optional) The invocations for a specific command ID.</p>
   * @public
   */
  CommandId?: string | undefined;

  /**
   * <p>(Optional) The command execution details for a specific managed node ID.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>(Optional) The maximum number of items to return for this call. The call also returns a
   *    token that you can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>(Optional) The token for the next set of items to return. (You received this token from a
   *    previous call.)</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>(Optional) One or more filters. Use a filter to return a more specific list of
   *    results.</p>
   * @public
   */
  Filters?: CommandFilter[] | undefined;

  /**
   * <p>(Optional) If set this returns the response of the command executions and any command
   *    output. The default value is <code>false</code>. </p>
   * @public
   */
  Details?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const CommandPluginStatus = {
  CANCELLED: "Cancelled",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  PENDING: "Pending",
  SUCCESS: "Success",
  TIMED_OUT: "TimedOut",
} as const;

/**
 * @public
 */
export type CommandPluginStatus = (typeof CommandPluginStatus)[keyof typeof CommandPluginStatus];

/**
 * <p>Describes plugin details.</p>
 * @public
 */
export interface CommandPlugin {
  /**
   * <p>The name of the plugin. Must be one of the following: <code>aws:updateAgent</code>,
   *     <code>aws:domainjoin</code>, <code>aws:applications</code>,
   *    <code>aws:runPowerShellScript</code>, <code>aws:psmodule</code>, <code>aws:cloudWatch</code>,
   *     <code>aws:runShellScript</code>, or <code>aws:updateSSMAgent</code>. </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The status of this plugin. You can run a document with multiple plugins.</p>
   * @public
   */
  Status?: CommandPluginStatus | undefined;

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
   * @public
   */
  StatusDetails?: string | undefined;

  /**
   * <p>A numeric response code generated after running the plugin. </p>
   * @public
   */
  ResponseCode?: number | undefined;

  /**
   * <p>The time the plugin started running. </p>
   * @public
   */
  ResponseStartDateTime?: Date | undefined;

  /**
   * <p>The time the plugin stopped running. Could stop prematurely if, for example, a cancel
   *    command was sent. </p>
   * @public
   */
  ResponseFinishDateTime?: Date | undefined;

  /**
   * <p>Output of the plugin execution.</p>
   * @public
   */
  Output?: string | undefined;

  /**
   * <p>The URL for the complete text written by the plugin to stdout in Amazon S3. If the
   *    S3 bucket for the command wasn't specified, then this string is empty.</p>
   * @public
   */
  StandardOutputUrl?: string | undefined;

  /**
   * <p>The URL for the complete text written by the plugin to stderr. If execution isn't yet
   *    complete, then this string is empty.</p>
   * @public
   */
  StandardErrorUrl?: string | undefined;

  /**
   * <p>(Deprecated) You can no longer specify this parameter. The system ignores it. Instead,
   *    Amazon Web Services Systems Manager automatically determines the S3 bucket region.</p>
   * @public
   */
  OutputS3Region?: string | undefined;

  /**
   * <p>The S3 bucket where the responses to the command executions should be stored. This was
   *    requested when issuing the command. For example, in the following response:</p>
   *          <p>
   *             <code>amzn-s3-demo-bucket/my-prefix/i-02573cafcfEXAMPLE/awsrunShellScript</code>
   *          </p>
   *          <p>
   *             <code>amzn-s3-demo-bucket</code> is the name of the S3 bucket;</p>
   *          <p>
   *             <code>my-prefix</code> is the name of the S3 prefix;</p>
   *          <p>
   *             <code>i-02573cafcfEXAMPLE</code> is the managed node ID;</p>
   *          <p>
   *             <code>awsrunShellScript</code> is the name of the plugin.</p>
   * @public
   */
  OutputS3BucketName?: string | undefined;

  /**
   * <p>The S3 directory path inside the bucket where the responses to the command executions should
   *    be stored. This was requested when issuing the command. For example, in the following
   *    response:</p>
   *          <p>
   *             <code>amzn-s3-demo-bucket/my-prefix/i-02573cafcfEXAMPLE/awsrunShellScript</code>
   *          </p>
   *          <p>
   *             <code>amzn-s3-demo-bucket</code> is the name of the S3 bucket;</p>
   *          <p>
   *             <code>my-prefix</code> is the name of the S3 prefix;</p>
   *          <p>
   *             <code>i-02573cafcfEXAMPLE</code> is the managed node ID;</p>
   *          <p>
   *             <code>awsrunShellScript</code> is the name of the plugin.</p>
   * @public
   */
  OutputS3KeyPrefix?: string | undefined;
}

/**
 * <p>An invocation is a copy of a command sent to a specific managed node. A command can apply to
 *    one or more managed nodes. A command invocation applies to one managed node. For example, if a
 *    user runs <code>SendCommand</code> against three managed nodes, then a command invocation is
 *    created for each requested managed node ID. A command invocation returns status and detail
 *    information about a command you ran. </p>
 * @public
 */
export interface CommandInvocation {
  /**
   * <p>The command against which this invocation was requested.</p>
   * @public
   */
  CommandId?: string | undefined;

  /**
   * <p>The managed node ID in which this invocation was requested.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The fully qualified host name of the managed node.</p>
   * @public
   */
  InstanceName?: string | undefined;

  /**
   * <p>User-specified information about the command, such as a brief description of what the
   *    command should do.</p>
   * @public
   */
  Comment?: string | undefined;

  /**
   * <p>The document name that was requested for execution.</p>
   * @public
   */
  DocumentName?: string | undefined;

  /**
   * <p>The Systems Manager document (SSM document) version.</p>
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * <p>The time and date the request was sent to this managed node.</p>
   * @public
   */
  RequestedDateTime?: Date | undefined;

  /**
   * <p>Whether or not the invocation succeeded, failed, or is pending.</p>
   * @public
   */
  Status?: CommandInvocationStatus | undefined;

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
   *             <li>
   *                <p>Delayed: The system attempted to send the command to the managed node but wasn't
   *      successful. The system retries again.</p>
   *             </li>
   *          </ul>
   * @public
   */
  StatusDetails?: string | undefined;

  /**
   * <p> Gets the trace output sent by the agent. </p>
   * @public
   */
  TraceOutput?: string | undefined;

  /**
   * <p>The URL to the plugin's StdOut file in Amazon Simple Storage Service (Amazon S3), if the S3
   *    bucket was defined for the parent command. For an invocation, <code>StandardOutputUrl</code> is
   *    populated if there is just one plugin defined for the command, and the S3 bucket was defined for
   *    the command.</p>
   * @public
   */
  StandardOutputUrl?: string | undefined;

  /**
   * <p>The URL to the plugin's StdErr file in Amazon Simple Storage Service (Amazon S3), if the S3
   *    bucket was defined for the parent command. For an invocation, <code>StandardErrorUrl</code> is
   *    populated if there is just one plugin defined for the command, and the S3 bucket was defined for
   *    the command.</p>
   * @public
   */
  StandardErrorUrl?: string | undefined;

  /**
   * <p>Plugins processed by the command.</p>
   * @public
   */
  CommandPlugins?: CommandPlugin[] | undefined;

  /**
   * <p>The Identity and Access Management (IAM) service role that Run Command, a tool in
   *    Amazon Web Services Systems Manager, uses to act on your behalf when sending notifications about command status changes on
   *    a per managed node basis.</p>
   * @public
   */
  ServiceRole?: string | undefined;

  /**
   * <p>Configurations for sending notifications about command status changes on a per managed node
   *    basis.</p>
   * @public
   */
  NotificationConfig?: NotificationConfig | undefined;

  /**
   * <p>Amazon CloudWatch Logs information where you want Amazon Web Services Systems Manager to send the command
   *    output.</p>
   * @public
   */
  CloudWatchOutputConfig?: CloudWatchOutputConfig | undefined;
}

/**
 * @public
 */
export interface ListCommandInvocationsResult {
  /**
   * <p>(Optional) A list of all invocations. </p>
   * @public
   */
  CommandInvocations?: CommandInvocation[] | undefined;

  /**
   * <p>(Optional) The token for the next set of items to return. (You received this token from a
   *    previous call.)</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCommandsRequest {
  /**
   * <p>(Optional) If provided, lists only the specified command.</p>
   * @public
   */
  CommandId?: string | undefined;

  /**
   * <p>(Optional) Lists commands issued against this managed node ID.</p>
   *          <note>
   *             <p>You can't specify a managed node ID in the same command that you specify
   *      <code>Status</code> = <code>Pending</code>. This is because the command hasn't reached the
   *     managed node yet.</p>
   *          </note>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>(Optional) The maximum number of items to return for this call. The call also returns a
   *    token that you can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>(Optional) The token for the next set of items to return. (You received this token from a
   *    previous call.)</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>(Optional) One or more filters. Use a filter to return a more specific list of results.
   *   </p>
   * @public
   */
  Filters?: CommandFilter[] | undefined;
}

/**
 * @public
 * @enum
 */
export const CommandStatus = {
  CANCELLED: "Cancelled",
  CANCELLING: "Cancelling",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  PENDING: "Pending",
  SUCCESS: "Success",
  TIMED_OUT: "TimedOut",
} as const;

/**
 * @public
 */
export type CommandStatus = (typeof CommandStatus)[keyof typeof CommandStatus];

/**
 * <p>Describes a command request.</p>
 * @public
 */
export interface Command {
  /**
   * <p>A unique identifier for this command.</p>
   * @public
   */
  CommandId?: string | undefined;

  /**
   * <p>The name of the document requested for execution.</p>
   * @public
   */
  DocumentName?: string | undefined;

  /**
   * <p>The Systems Manager document (SSM document) version.</p>
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * <p>User-specified information about the command, such as a brief description of what the
   *    command should do.</p>
   * @public
   */
  Comment?: string | undefined;

  /**
   * <p>If a command expires, it changes status to <code>DeliveryTimedOut</code> for all invocations
   *    that have the status <code>InProgress</code>, <code>Pending</code>, or <code>Delayed</code>.
   *     <code>ExpiresAfter</code> is calculated based on the total timeout for the overall command. For
   *    more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/monitor-commands.html?icmpid=docs_ec2_console#monitor-about-status-timeouts">Understanding command timeout values</a> in the
   *    <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   * @public
   */
  ExpiresAfter?: Date | undefined;

  /**
   * <p>The parameter values to be inserted in the document when running the command.</p>
   * @public
   */
  Parameters?: Record<string, string[]> | undefined;

  /**
   * <p>The managed node IDs against which this command was requested.</p>
   * @public
   */
  InstanceIds?: string[] | undefined;

  /**
   * <p>An array of search criteria that targets managed nodes using a Key,Value combination that
   *    you specify. Targets is required if you don't provide one or more managed node IDs in the
   *    call.</p>
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * <p>The date and time the command was requested.</p>
   * @public
   */
  RequestedDateTime?: Date | undefined;

  /**
   * <p>The status of the command.</p>
   * @public
   */
  Status?: CommandStatus | undefined;

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
   *             <li>
   *                <p>Delayed: The system attempted to send the command to the managed node but wasn't
   *      successful. The system retries again.</p>
   *             </li>
   *          </ul>
   * @public
   */
  StatusDetails?: string | undefined;

  /**
   * <p>(Deprecated) You can no longer specify this parameter. The system ignores it. Instead, Systems Manager
   *    automatically determines the Amazon Web Services Region of the S3 bucket.</p>
   * @public
   */
  OutputS3Region?: string | undefined;

  /**
   * <p>The S3 bucket where the responses to the command executions should be stored. This was
   *    requested when issuing the command.</p>
   * @public
   */
  OutputS3BucketName?: string | undefined;

  /**
   * <p>The S3 directory path inside the bucket where the responses to the command executions should
   *    be stored. This was requested when issuing the command.</p>
   * @public
   */
  OutputS3KeyPrefix?: string | undefined;

  /**
   * <p>The maximum number of managed nodes that are allowed to run the command at the same time.
   *    You can specify a number of managed nodes, such as 10, or a percentage of nodes, such as 10%. The
   *    default value is 50. For more information about how to use <code>MaxConcurrency</code>, see
   *     <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/run-command.html">Amazon Web Services Systems Manager
   *     Run Command</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   * @public
   */
  MaxConcurrency?: string | undefined;

  /**
   * <p>The maximum number of errors allowed before the system stops sending the command to
   *    additional targets. You can specify a number of errors, such as 10, or a percentage or errors,
   *    such as 10%. The default value is <code>0</code>. For more information about how to use
   *     <code>MaxErrors</code>, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/run-command.html">Amazon Web Services Systems Manager Run Command</a> in the
   *     <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   * @public
   */
  MaxErrors?: string | undefined;

  /**
   * <p>The number of targets for the command.</p>
   * @public
   */
  TargetCount?: number | undefined;

  /**
   * <p>The number of targets for which the command invocation reached a terminal state. Terminal
   *    states include the following: Success, Failed, Execution Timed Out, Delivery Timed Out,
   *    Cancelled, Terminated, or Undeliverable.</p>
   * @public
   */
  CompletedCount?: number | undefined;

  /**
   * <p>The number of targets for which the status is Failed or Execution Timed Out.</p>
   * @public
   */
  ErrorCount?: number | undefined;

  /**
   * <p>The number of targets for which the status is Delivery Timed Out.</p>
   * @public
   */
  DeliveryTimedOutCount?: number | undefined;

  /**
   * <p>The Identity and Access Management (IAM) service role that Run Command, a tool in
   *    Amazon Web Services Systems Manager, uses to act on your behalf when sending notifications about command status changes.
   *   </p>
   * @public
   */
  ServiceRole?: string | undefined;

  /**
   * <p>Configurations for sending notifications about command status changes. </p>
   * @public
   */
  NotificationConfig?: NotificationConfig | undefined;

  /**
   * <p>Amazon CloudWatch Logs information where you want Amazon Web Services Systems Manager to send the command
   *    output.</p>
   * @public
   */
  CloudWatchOutputConfig?: CloudWatchOutputConfig | undefined;

  /**
   * <p>The <code>TimeoutSeconds</code> value specified for a command.</p>
   * @public
   */
  TimeoutSeconds?: number | undefined;

  /**
   * <p>The details for the CloudWatch alarm applied to your command.</p>
   * @public
   */
  AlarmConfiguration?: AlarmConfiguration | undefined;

  /**
   * <p>The CloudWatch alarm that was invoked by the command.</p>
   * @public
   */
  TriggeredAlarms?: AlarmStateInformation[] | undefined;
}

/**
 * @public
 */
export interface ListCommandsResult {
  /**
   * <p>(Optional) The list of commands requested by the user. </p>
   * @public
   */
  Commands?: Command[] | undefined;

  /**
   * <p>(Optional) The token for the next set of items to return. (You received this token from a
   *    previous call.)</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ComplianceQueryOperatorType = {
  BeginWith: "BEGIN_WITH",
  Equal: "EQUAL",
  GreaterThan: "GREATER_THAN",
  LessThan: "LESS_THAN",
  NotEqual: "NOT_EQUAL",
} as const;

/**
 * @public
 */
export type ComplianceQueryOperatorType =
  (typeof ComplianceQueryOperatorType)[keyof typeof ComplianceQueryOperatorType];

/**
 * <p>One or more filters. Use a filter to return a more specific list of results.</p>
 * @public
 */
export interface ComplianceStringFilter {
  /**
   * <p>The name of the filter.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The value for which to search.</p>
   * @public
   */
  Values?: string[] | undefined;

  /**
   * <p>The type of comparison that should be performed for the value: Equal, NotEqual, BeginWith,
   *    LessThan, or GreaterThan.</p>
   * @public
   */
  Type?: ComplianceQueryOperatorType | undefined;
}

/**
 * @public
 */
export interface ListComplianceItemsRequest {
  /**
   * <p>One or more compliance filters. Use a filter to return a more specific list of
   *    results.</p>
   * @public
   */
  Filters?: ComplianceStringFilter[] | undefined;

  /**
   * <p>The ID for the resources from which to get compliance information. Currently, you can only
   *    specify one resource ID.</p>
   * @public
   */
  ResourceIds?: string[] | undefined;

  /**
   * <p>The type of resource from which to get compliance information. Currently, the only supported
   *    resource type is <code>ManagedInstance</code>.</p>
   * @public
   */
  ResourceTypes?: string[] | undefined;

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
 * <p>A summary of the call execution that includes an execution ID, the type of execution (for
 *    example, <code>Command</code>), and the date/time of the execution using a datetime object that
 *    is saved in the following format: <code>yyyy-MM-dd'T'HH:mm:ss'Z'</code>
 *          </p>
 * @public
 */
export interface ComplianceExecutionSummary {
  /**
   * <p>The time the execution ran as a datetime object that is saved in the following format:
   *     <code>yyyy-MM-dd'T'HH:mm:ss'Z'</code>
   *          </p>
   * @public
   */
  ExecutionTime: Date | undefined;

  /**
   * <p>An ID created by the system when <code>PutComplianceItems</code> was called. For example,
   *     <code>CommandID</code> is a valid execution ID. You can use this ID in subsequent calls.</p>
   * @public
   */
  ExecutionId?: string | undefined;

  /**
   * <p>The type of execution. For example, <code>Command</code> is a valid execution type.</p>
   * @public
   */
  ExecutionType?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ComplianceSeverity = {
  Critical: "CRITICAL",
  High: "HIGH",
  Informational: "INFORMATIONAL",
  Low: "LOW",
  Medium: "MEDIUM",
  Unspecified: "UNSPECIFIED",
} as const;

/**
 * @public
 */
export type ComplianceSeverity = (typeof ComplianceSeverity)[keyof typeof ComplianceSeverity];

/**
 * @public
 * @enum
 */
export const ComplianceStatus = {
  Compliant: "COMPLIANT",
  NonCompliant: "NON_COMPLIANT",
} as const;

/**
 * @public
 */
export type ComplianceStatus = (typeof ComplianceStatus)[keyof typeof ComplianceStatus];

/**
 * <p>Information about the compliance as defined by the resource type. For example, for a patch
 *    resource type, <code>Items</code> includes information about the PatchSeverity, Classification,
 *    and so on.</p>
 * @public
 */
export interface ComplianceItem {
  /**
   * <p>The compliance type. For example, Association (for a State Manager association), Patch, or
   *     Custom:<code>string</code> are all valid compliance types.</p>
   * @public
   */
  ComplianceType?: string | undefined;

  /**
   * <p>The type of resource. <code>ManagedInstance</code> is currently the only supported resource
   *    type.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>An ID for the resource. For a managed node, this is the node ID.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>An ID for the compliance item. For example, if the compliance item is a Windows patch, the
   *    ID could be the number of the KB article; for example: KB4010320.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>A title for the compliance item. For example, if the compliance item is a Windows patch, the
   *    title could be the title of the KB article for the patch; for example: Security Update for Active
   *    Directory Federation Services.</p>
   * @public
   */
  Title?: string | undefined;

  /**
   * <p>The status of the compliance item. An item is either COMPLIANT, NON_COMPLIANT, or an empty
   *    string (for Windows patches that aren't applicable).</p>
   * @public
   */
  Status?: ComplianceStatus | undefined;

  /**
   * <p>The severity of the compliance status. Severity can be one of the following: Critical, High,
   *    Medium, Low, Informational, Unspecified.</p>
   * @public
   */
  Severity?: ComplianceSeverity | undefined;

  /**
   * <p>A summary for the compliance item. The summary includes an execution ID, the execution type
   *    (for example, command), and the execution time.</p>
   * @public
   */
  ExecutionSummary?: ComplianceExecutionSummary | undefined;

  /**
   * <p>A "Key": "Value" tag combination for the compliance item.</p>
   * @public
   */
  Details?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListComplianceItemsResult {
  /**
   * <p>A list of compliance information for the specified resource ID. </p>
   * @public
   */
  ComplianceItems?: ComplianceItem[] | undefined;

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *    results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListComplianceSummariesRequest {
  /**
   * <p>One or more compliance or inventory filters. Use a filter to return a more specific list of
   *    results.</p>
   * @public
   */
  Filters?: ComplianceStringFilter[] | undefined;

  /**
   * <p>A token to start the list. Use this token to get the next set of results. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this call. Currently, you can specify null or 50.
   *    The call also returns a token that you can specify in a subsequent call to get the next set of
   *    results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>The number of managed nodes found for each patch severity level defined in the request
 *    filter.</p>
 * @public
 */
export interface SeveritySummary {
  /**
   * <p>The total number of resources or compliance items that have a severity level of
   *     <code>Critical</code>. Critical severity is determined by the organization that published the
   *    compliance items.</p>
   * @public
   */
  CriticalCount?: number | undefined;

  /**
   * <p>The total number of resources or compliance items that have a severity level of high. High
   *    severity is determined by the organization that published the compliance items.</p>
   * @public
   */
  HighCount?: number | undefined;

  /**
   * <p>The total number of resources or compliance items that have a severity level of medium.
   *    Medium severity is determined by the organization that published the compliance items.</p>
   * @public
   */
  MediumCount?: number | undefined;

  /**
   * <p>The total number of resources or compliance items that have a severity level of low. Low
   *    severity is determined by the organization that published the compliance items.</p>
   * @public
   */
  LowCount?: number | undefined;

  /**
   * <p>The total number of resources or compliance items that have a severity level of
   *    informational. Informational severity is determined by the organization that published the
   *    compliance items.</p>
   * @public
   */
  InformationalCount?: number | undefined;

  /**
   * <p>The total number of resources or compliance items that have a severity level of unspecified.
   *    Unspecified severity is determined by the organization that published the compliance
   *    items.</p>
   * @public
   */
  UnspecifiedCount?: number | undefined;
}

/**
 * <p>A summary of resources that are compliant. The summary is organized according to the
 *    resource count for each compliance type.</p>
 * @public
 */
export interface CompliantSummary {
  /**
   * <p>The total number of resources that are compliant.</p>
   * @public
   */
  CompliantCount?: number | undefined;

  /**
   * <p>A summary of the compliance severity by compliance type.</p>
   * @public
   */
  SeveritySummary?: SeveritySummary | undefined;
}

/**
 * <p>A summary of resources that aren't compliant. The summary is organized according to resource
 *    type.</p>
 * @public
 */
export interface NonCompliantSummary {
  /**
   * <p>The total number of compliance items that aren't compliant.</p>
   * @public
   */
  NonCompliantCount?: number | undefined;

  /**
   * <p>A summary of the non-compliance severity by compliance type</p>
   * @public
   */
  SeveritySummary?: SeveritySummary | undefined;
}

/**
 * <p>A summary of compliance information by compliance type.</p>
 * @public
 */
export interface ComplianceSummaryItem {
  /**
   * <p>The type of compliance item. For example, the compliance type can be Association, Patch, or
   *    Custom:string.</p>
   * @public
   */
  ComplianceType?: string | undefined;

  /**
   * <p>A list of COMPLIANT items for the specified compliance type.</p>
   * @public
   */
  CompliantSummary?: CompliantSummary | undefined;

  /**
   * <p>A list of NON_COMPLIANT items for the specified compliance type.</p>
   * @public
   */
  NonCompliantSummary?: NonCompliantSummary | undefined;
}

/**
 * @public
 */
export interface ListComplianceSummariesResult {
  /**
   * <p>A list of compliant and non-compliant summary counts based on compliance types. For example,
   *    this call returns State Manager associations, patches, or custom compliance types according to
   *    the filter criteria that you specified.</p>
   * @public
   */
  ComplianceSummaryItems?: ComplianceSummaryItem[] | undefined;

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *    results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DocumentMetadataEnum = {
  DocumentReviews: "DocumentReviews",
} as const;

/**
 * @public
 */
export type DocumentMetadataEnum = (typeof DocumentMetadataEnum)[keyof typeof DocumentMetadataEnum];

/**
 * @public
 */
export interface ListDocumentMetadataHistoryRequest {
  /**
   * <p>The name of the change template.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The version of the change template.</p>
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * <p>The type of data for which details are being requested. Currently, the only supported value
   *    is <code>DocumentReviews</code>.</p>
   * @public
   */
  Metadata: DocumentMetadataEnum | undefined;

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
 * @enum
 */
export const DocumentReviewCommentType = {
  Comment: "Comment",
} as const;

/**
 * @public
 */
export type DocumentReviewCommentType = (typeof DocumentReviewCommentType)[keyof typeof DocumentReviewCommentType];

/**
 * <p>Information about comments added to a document review request.</p>
 * @public
 */
export interface DocumentReviewCommentSource {
  /**
   * <p>The type of information added to a review request. Currently, only the value
   *     <code>Comment</code> is supported.</p>
   * @public
   */
  Type?: DocumentReviewCommentType | undefined;

  /**
   * <p>The content of a comment entered by a user who requests a review of a new document version,
   *    or who reviews the new version.</p>
   * @public
   */
  Content?: string | undefined;
}

/**
 * <p>Information about a reviewer's response to a document review request.</p>
 * @public
 */
export interface DocumentReviewerResponseSource {
  /**
   * <p>The date and time that a reviewer entered a response to a document review request.</p>
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * <p>The date and time that a reviewer last updated a response to a document review
   *    request.</p>
   * @public
   */
  UpdatedTime?: Date | undefined;

  /**
   * <p>The current review status of a new custom SSM document created by a member of your
   *    organization, or of the latest version of an existing SSM document.</p>
   *          <p>Only one version of a document can be in the APPROVED state at a time. When a new version is
   *    approved, the status of the previous version changes to REJECTED.</p>
   *          <p>Only one version of a document can be in review, or PENDING, at a time.</p>
   * @public
   */
  ReviewStatus?: ReviewStatus | undefined;

  /**
   * <p>The comment entered by a reviewer as part of their document review response.</p>
   * @public
   */
  Comment?: DocumentReviewCommentSource[] | undefined;

  /**
   * <p>The user in your organization assigned to review a document request.</p>
   * @public
   */
  Reviewer?: string | undefined;
}

/**
 * <p>Details about the response to a document review request.</p>
 * @public
 */
export interface DocumentMetadataResponseInfo {
  /**
   * <p>Details about a reviewer's response to a document review request.</p>
   * @public
   */
  ReviewerResponse?: DocumentReviewerResponseSource[] | undefined;
}

/**
 * @public
 */
export interface ListDocumentMetadataHistoryResponse {
  /**
   * <p>The name of the change template.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The version of the change template.</p>
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * <p>The user ID of the person in the organization who requested the review of the
   *    change template.</p>
   * @public
   */
  Author?: string | undefined;

  /**
   * <p>Information about the response to the change template approval request.</p>
   * @public
   */
  Metadata?: DocumentMetadataResponseInfo | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DocumentFilterKey = {
  DocumentType: "DocumentType",
  Name: "Name",
  Owner: "Owner",
  PlatformTypes: "PlatformTypes",
} as const;

/**
 * @public
 */
export type DocumentFilterKey = (typeof DocumentFilterKey)[keyof typeof DocumentFilterKey];

/**
 * <p>This data type is deprecated. Instead, use <a>DocumentKeyValuesFilter</a>.</p>
 * @public
 */
export interface DocumentFilter {
  /**
   * <p>The name of the filter.</p>
   * @public
   */
  key: DocumentFilterKey | undefined;

  /**
   * <p>The value of the filter.</p>
   * @public
   */
  value: string | undefined;
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
 * @public
 */
export interface DocumentKeyValuesFilter {
  /**
   * <p>The name of the filter key.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The value for the filter key.</p>
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * @public
 */
export interface ListDocumentsRequest {
  /**
   * <p>This data type is deprecated. Instead, use <code>Filters</code>.</p>
   * @public
   */
  DocumentFilterList?: DocumentFilter[] | undefined;

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
   * @public
   */
  Filters?: DocumentKeyValuesFilter[] | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Describes the name of a SSM document.</p>
 * @public
 */
export interface DocumentIdentifier {
  /**
   * <p>The name of the SSM document.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The date the SSM document was created.</p>
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * <p>An optional field where you can specify a friendly name for the SSM document. This value can
   *    differ for each version of the document. If you want to update this value, see <a>UpdateDocument</a>.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The Amazon Web Services user that created the document.</p>
   * @public
   */
  Owner?: string | undefined;

  /**
   * <p>An optional field specifying the version of the artifact associated with the document. For
   *    example, 12.6. This value is unique across all versions of a document, and can't be
   *    changed.</p>
   * @public
   */
  VersionName?: string | undefined;

  /**
   * <p>The operating system platform. </p>
   * @public
   */
  PlatformTypes?: PlatformType[] | undefined;

  /**
   * <p>The document version.</p>
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * <p>The document type.</p>
   * @public
   */
  DocumentType?: DocumentType | undefined;

  /**
   * <p>The schema version.</p>
   * @public
   */
  SchemaVersion?: string | undefined;

  /**
   * <p>The document format, either JSON or YAML.</p>
   * @public
   */
  DocumentFormat?: DocumentFormat | undefined;

  /**
   * <p>The target type which defines the kinds of resources the document can run on. For example,
   *     <code>/AWS::EC2::Instance</code>. For a list of valid resource types, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services resource and
   *     property types reference</a> in the <i>CloudFormation User Guide</i>. </p>
   * @public
   */
  TargetType?: string | undefined;

  /**
   * <p>The tags, or metadata, that have been applied to the document.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>A list of SSM documents required by a document. For example, an
   *     <code>ApplicationConfiguration</code> document requires an
   *     <code>ApplicationConfigurationSchema</code> document.</p>
   * @public
   */
  Requires?: DocumentRequires[] | undefined;

  /**
   * <p>The current status of a document review.</p>
   * @public
   */
  ReviewStatus?: ReviewStatus | undefined;

  /**
   * <p>The user in your organization who created the document.</p>
   * @public
   */
  Author?: string | undefined;
}

/**
 * @public
 */
export interface ListDocumentsResult {
  /**
   * <p>The names of the SSM documents.</p>
   * @public
   */
  DocumentIdentifiers?: DocumentIdentifier[] | undefined;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDocumentVersionsRequest {
  /**
   * <p>The name of the document. You can specify an Amazon Resource Name (ARN).</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Version information about the document.</p>
 * @public
 */
export interface DocumentVersionInfo {
  /**
   * <p>The document name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The friendly name of the SSM document. This value can differ for each version of the
   *    document. If you want to update this value, see <a>UpdateDocument</a>.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The document version.</p>
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * <p>The version of the artifact associated with the document. For example, 12.6. This value is
   *    unique across all versions of a document, and can't be changed.</p>
   * @public
   */
  VersionName?: string | undefined;

  /**
   * <p>The date the document was created.</p>
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * <p>An identifier for the default version of the document.</p>
   * @public
   */
  IsDefaultVersion?: boolean | undefined;

  /**
   * <p>The document format, either JSON or YAML.</p>
   * @public
   */
  DocumentFormat?: DocumentFormat | undefined;

  /**
   * <p>The status of the SSM document, such as <code>Creating</code>, <code>Active</code>,
   *     <code>Failed</code>, and <code>Deleting</code>.</p>
   * @public
   */
  Status?: DocumentStatus | undefined;

  /**
   * <p>A message returned by Amazon Web Services Systems Manager that explains the <code>Status</code> value. For example, a
   *     <code>Failed</code> status might be explained by the <code>StatusInformation</code> message,
   *    "The specified S3 bucket doesn't exist. Verify that the URL of the S3 bucket is correct."</p>
   * @public
   */
  StatusInformation?: string | undefined;

  /**
   * <p>The current status of the approval review for the latest version of the document.</p>
   * @public
   */
  ReviewStatus?: ReviewStatus | undefined;
}

/**
 * @public
 */
export interface ListDocumentVersionsResult {
  /**
   * <p>The document versions.</p>
   * @public
   */
  DocumentVersions?: DocumentVersionInfo[] | undefined;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInventoryEntriesRequest {
  /**
   * <p>The managed node ID for which you want inventory information.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The type of inventory item for which you want information.</p>
   * @public
   */
  TypeName: string | undefined;

  /**
   * <p>One or more filters. Use a filter to return a more specific list of results.</p>
   * @public
   */
  Filters?: InventoryFilter[] | undefined;

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
export interface ListInventoryEntriesResult {
  /**
   * <p>The type of inventory item returned by the request.</p>
   * @public
   */
  TypeName?: string | undefined;

  /**
   * <p>The managed node ID targeted by the request to query inventory information.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The inventory schema version used by the managed nodes.</p>
   * @public
   */
  SchemaVersion?: string | undefined;

  /**
   * <p>The time that inventory information was collected for the managed nodes.</p>
   * @public
   */
  CaptureTime?: string | undefined;

  /**
   * <p>A list of inventory items on the managed nodes.</p>
   * @public
   */
  Entries?: Record<string, string>[] | undefined;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const NodeFilterKey = {
  ACCOUNT_ID: "AccountId",
  AGENT_TYPE: "AgentType",
  AGENT_VERSION: "AgentVersion",
  COMPUTER_NAME: "ComputerName",
  INSTANCE_ID: "InstanceId",
  INSTANCE_STATUS: "InstanceStatus",
  IP_ADDRESS: "IpAddress",
  MANAGED_STATUS: "ManagedStatus",
  ORGANIZATIONAL_UNIT_ID: "OrganizationalUnitId",
  ORGANIZATIONAL_UNIT_PATH: "OrganizationalUnitPath",
  PLATFORM_NAME: "PlatformName",
  PLATFORM_TYPE: "PlatformType",
  PLATFORM_VERSION: "PlatformVersion",
  REGION: "Region",
  RESOURCE_TYPE: "ResourceType",
} as const;

/**
 * @public
 */
export type NodeFilterKey = (typeof NodeFilterKey)[keyof typeof NodeFilterKey];

/**
 * @public
 * @enum
 */
export const NodeFilterOperatorType = {
  BEGIN_WITH: "BeginWith",
  EQUAL: "Equal",
  NOT_EQUAL: "NotEqual",
} as const;

/**
 * @public
 */
export type NodeFilterOperatorType = (typeof NodeFilterOperatorType)[keyof typeof NodeFilterOperatorType];

/**
 * <p>The filters for the operation.</p>
 * @public
 */
export interface NodeFilter {
  /**
   * <p>The name of the filter.</p>
   * @public
   */
  Key: NodeFilterKey | undefined;

  /**
   * <p>A filter value supported by the specified key. For example, for the key
   *     <code>PlatformType</code>, supported values include <code>Linux</code> and
   *    <code>Windows</code>.</p>
   * @public
   */
  Values: string[] | undefined;

  /**
   * <p>The type of filter operator.</p>
   * @public
   */
  Type?: NodeFilterOperatorType | undefined;
}

/**
 * @public
 */
export interface ListNodesRequest {
  /**
   * <p>The name of the Amazon Web Services managed resource data sync to retrieve information about.</p>
   *          <p>For cross-account/cross-Region configurations, this parameter is required, and the name of
   *    the supported resource data sync is <code>AWS-QuickSetup-ManagedNode</code>.</p>
   *          <p>For single account/single-Region configurations, the parameter is not required.</p>
   * @public
   */
  SyncName?: string | undefined;

  /**
   * <p>One or more filters. Use a filter to return a more specific list of managed nodes.</p>
   * @public
   */
  Filters?: NodeFilter[] | undefined;

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
 * @enum
 */
export const ManagedStatus = {
  ALL: "All",
  MANAGED: "Managed",
  UNMANAGED: "Unmanaged",
} as const;

/**
 * @public
 */
export type ManagedStatus = (typeof ManagedStatus)[keyof typeof ManagedStatus];

/**
 * <p>Details about a specific managed node.</p>
 * @public
 */
export interface InstanceInfo {
  /**
   * <p>The type of agent installed on the node.</p>
   * @public
   */
  AgentType?: string | undefined;

  /**
   * <p>The version number of the agent installed on the node.</p>
   * @public
   */
  AgentVersion?: string | undefined;

  /**
   * <p>The fully qualified host name of the managed node.</p>
   * @public
   */
  ComputerName?: string | undefined;

  /**
   * <p>The current status of the managed node.</p>
   * @public
   */
  InstanceStatus?: string | undefined;

  /**
   * <p>The IP address of the managed node.</p>
   * @public
   */
  IpAddress?: string | undefined;

  /**
   * <p>Indicates whether the node is managed by Systems Manager.</p>
   * @public
   */
  ManagedStatus?: ManagedStatus | undefined;

  /**
   * <p>The operating system platform type of the managed node.</p>
   * @public
   */
  PlatformType?: PlatformType | undefined;

  /**
   * <p>The name of the operating system platform running on your managed node.</p>
   * @public
   */
  PlatformName?: string | undefined;

  /**
   * <p>The version of the OS platform running on your managed node. </p>
   * @public
   */
  PlatformVersion?: string | undefined;

  /**
   * <p>The type of instance, either an EC2 instance or another supported machine type in a hybrid
   *    fleet.</p>
   * @public
   */
  ResourceType?: ResourceType | undefined;
}

/**
 * <p>Information about a managed node's type.</p>
 * @public
 */
export type NodeType = NodeType.InstanceMember | NodeType.$UnknownMember;

/**
 * @public
 */
export namespace NodeType {
  /**
   * <p>Information about a specific managed node.</p>
   * @public
   */
  export interface InstanceMember {
    Instance: InstanceInfo;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Instance?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    Instance: (value: InstanceInfo) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: NodeType, visitor: Visitor<T>): T => {
    if (value.Instance !== undefined) return visitor.Instance(value.Instance);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Information about ownership of a managed node.</p>
 * @public
 */
export interface NodeOwnerInfo {
  /**
   * <p>The ID of the Amazon Web Services account that owns the managed node.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The ID of the organization unit (OU) that the account is part of.</p>
   * @public
   */
  OrganizationalUnitId?: string | undefined;

  /**
   * <p>The path for the organizational unit (OU) that owns the managed node. The path for the OU is
   *    built using the IDs of the organization, root, and all OUs in the path down to and including the
   *    OU. For example:</p>
   *          <p>
   *             <code>o-a1b2c3d4e5/r-f6g7h8i9j0example/ou-ghi0-awsccccc/ou-jkl0-awsddddd/</code>
   *          </p>
   * @public
   */
  OrganizationalUnitPath?: string | undefined;
}

/**
 * <p>Details about an individual managed node.</p>
 * @public
 */
export interface Node {
  /**
   * <p>The UTC timestamp for when the managed node data was last captured.</p>
   * @public
   */
  CaptureTime?: Date | undefined;

  /**
   * <p>The ID of the managed node.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>Information about the ownership of the managed node.</p>
   * @public
   */
  Owner?: NodeOwnerInfo | undefined;

  /**
   * <p>The Amazon Web Services Region that a managed node was created in or assigned to.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>Information about the type of node.</p>
   * @public
   */
  NodeType?: NodeType | undefined;
}

/**
 * @public
 */
export interface ListNodesResult {
  /**
   * <p>A list of managed nodes that match the specified filter criteria.</p>
   * @public
   */
  Nodes?: Node[] | undefined;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>This operation is not supported for the current account. You must first enable the Systems Manager integrated experience in your account.</p>
 * @public
 */
export class UnsupportedOperationException extends __BaseException {
  readonly name: "UnsupportedOperationException" = "UnsupportedOperationException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedOperationException, __BaseException>) {
    super({
      name: "UnsupportedOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedOperationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const NodeAggregatorType = {
  COUNT: "Count",
} as const;

/**
 * @public
 */
export type NodeAggregatorType = (typeof NodeAggregatorType)[keyof typeof NodeAggregatorType];

/**
 * @public
 * @enum
 */
export const NodeAttributeName = {
  AGENT_VERSION: "AgentVersion",
  PLATFORM_NAME: "PlatformName",
  PLATFORM_TYPE: "PlatformType",
  PLATFORM_VERSION: "PlatformVersion",
  REGION: "Region",
  RESOURCE_TYPE: "ResourceType",
} as const;

/**
 * @public
 */
export type NodeAttributeName = (typeof NodeAttributeName)[keyof typeof NodeAttributeName];

/**
 * @public
 * @enum
 */
export const NodeTypeName = {
  INSTANCE: "Instance",
} as const;

/**
 * @public
 */
export type NodeTypeName = (typeof NodeTypeName)[keyof typeof NodeTypeName];

/**
 * @public
 */
export interface ListNodesSummaryResult {
  /**
   * <p>A collection of objects reporting information about your managed nodes, such as the count of
   *    nodes by operating system.</p>
   * @public
   */
  Summary?: Record<string, string>[] | undefined;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to
   *    return, the string is empty.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const OpsItemEventFilterKey = {
  OPSITEM_ID: "OpsItemId",
} as const;

/**
 * @public
 */
export type OpsItemEventFilterKey = (typeof OpsItemEventFilterKey)[keyof typeof OpsItemEventFilterKey];

/**
 * @public
 * @enum
 */
export const OpsItemEventFilterOperator = {
  EQUAL: "Equal",
} as const;

/**
 * @public
 */
export type OpsItemEventFilterOperator = (typeof OpsItemEventFilterOperator)[keyof typeof OpsItemEventFilterOperator];

/**
 * <p>Describes a filter for a specific list of OpsItem events. You can filter event information
 *    by using tags. You specify tags by using a key-value pair mapping. </p>
 * @public
 */
export interface OpsItemEventFilter {
  /**
   * <p>The name of the filter key. Currently, the only supported value is
   *    <code>OpsItemId</code>.</p>
   * @public
   */
  Key: OpsItemEventFilterKey | undefined;

  /**
   * <p>The values for the filter, consisting of one or more OpsItem IDs.</p>
   * @public
   */
  Values: string[] | undefined;

  /**
   * <p>The operator used by the filter call. Currently, the only supported value is
   *     <code>Equal</code>.</p>
   * @public
   */
  Operator: OpsItemEventFilterOperator | undefined;
}

/**
 * @public
 */
export interface ListOpsItemEventsRequest {
  /**
   * <p>One or more OpsItem filters. Use a filter to return a more specific list of results. </p>
   * @public
   */
  Filters?: OpsItemEventFilter[] | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token to start the list. Use this token to get the next set of results. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Information about the user or resource that created an OpsItem event.</p>
 * @public
 */
export interface OpsItemIdentity {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM entity that created the OpsItem
   *    event.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>Summary information about an OpsItem event or that associated an OpsItem with a related
 *    item.</p>
 * @public
 */
export interface OpsItemEventSummary {
  /**
   * <p>The ID of the OpsItem.</p>
   * @public
   */
  OpsItemId?: string | undefined;

  /**
   * <p>The ID of the OpsItem event.</p>
   * @public
   */
  EventId?: string | undefined;

  /**
   * <p>The source of the OpsItem event.</p>
   * @public
   */
  Source?: string | undefined;

  /**
   * <p>The type of information provided as a detail.</p>
   * @public
   */
  DetailType?: string | undefined;

  /**
   * <p>Specific information about the OpsItem event.</p>
   * @public
   */
  Detail?: string | undefined;

  /**
   * <p>Information about the user or resource that created the OpsItem event.</p>
   * @public
   */
  CreatedBy?: OpsItemIdentity | undefined;

  /**
   * <p>The date and time the OpsItem event was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListOpsItemEventsResponse {
  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *    results. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of event information for the specified OpsItems.</p>
   * @public
   */
  Summaries?: OpsItemEventSummary[] | undefined;
}

/**
 * @public
 * @enum
 */
export const OpsItemRelatedItemsFilterKey = {
  ASSOCIATION_ID: "AssociationId",
  RESOURCE_TYPE: "ResourceType",
  RESOURCE_URI: "ResourceUri",
} as const;

/**
 * @public
 */
export type OpsItemRelatedItemsFilterKey =
  (typeof OpsItemRelatedItemsFilterKey)[keyof typeof OpsItemRelatedItemsFilterKey];

/**
 * @public
 * @enum
 */
export const OpsItemRelatedItemsFilterOperator = {
  EQUAL: "Equal",
} as const;

/**
 * @public
 */
export type OpsItemRelatedItemsFilterOperator =
  (typeof OpsItemRelatedItemsFilterOperator)[keyof typeof OpsItemRelatedItemsFilterOperator];

/**
 * <p>Describes a filter for a specific list of related-item resources. </p>
 * @public
 */
export interface OpsItemRelatedItemsFilter {
  /**
   * <p>The name of the filter key. Supported values include <code>ResourceUri</code>,
   *     <code>ResourceType</code>, or <code>AssociationId</code>.</p>
   * @public
   */
  Key: OpsItemRelatedItemsFilterKey | undefined;

  /**
   * <p>The values for the filter.</p>
   * @public
   */
  Values: string[] | undefined;

  /**
   * <p>The operator used by the filter call. The only supported operator is
   *    <code>EQUAL</code>.</p>
   * @public
   */
  Operator: OpsItemRelatedItemsFilterOperator | undefined;
}

/**
 * @public
 */
export interface ListOpsItemRelatedItemsRequest {
  /**
   * <p>The ID of the OpsItem for which you want to list all related-item resources.</p>
   * @public
   */
  OpsItemId?: string | undefined;

  /**
   * <p>One or more OpsItem filters. Use a filter to return a more specific list of results. </p>
   * @public
   */
  Filters?: OpsItemRelatedItemsFilter[] | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *    call.)</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Summary information about related-item resources for an OpsItem.</p>
 * @public
 */
export interface OpsItemRelatedItemSummary {
  /**
   * <p>The OpsItem ID.</p>
   * @public
   */
  OpsItemId?: string | undefined;

  /**
   * <p>The association ID.</p>
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * <p>The resource type.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The association type.</p>
   * @public
   */
  AssociationType?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the related-item resource.</p>
   * @public
   */
  ResourceUri?: string | undefined;

  /**
   * <p>Information about the user or resource that created an OpsItem event.</p>
   * @public
   */
  CreatedBy?: OpsItemIdentity | undefined;

  /**
   * <p>The time the related-item association was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>Information about the user or resource that created an OpsItem event.</p>
   * @public
   */
  LastModifiedBy?: OpsItemIdentity | undefined;

  /**
   * <p>The time the related-item association was last updated.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListOpsItemRelatedItemsResponse {
  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *    results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of related-item resources for the specified OpsItem.</p>
   * @public
   */
  Summaries?: OpsItemRelatedItemSummary[] | undefined;
}

/**
 * <p>A filter to limit the number of OpsMetadata objects displayed.</p>
 * @public
 */
export interface OpsMetadataFilter {
  /**
   * <p>A filter key.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>A filter value.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface ListOpsMetadataRequest {
  /**
   * <p>One or more filters to limit the number of OpsMetadata objects returned by the call.</p>
   * @public
   */
  Filters?: OpsMetadataFilter[] | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you
   *    can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token to start the list. Use this token to get the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Operational metadata for an application in Application Manager.</p>
 * @public
 */
export interface OpsMetadata {
  /**
   * <p>The ID of the Application Manager application.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the OpsMetadata Object or blob.</p>
   * @public
   */
  OpsMetadataArn?: string | undefined;

  /**
   * <p>The date the OpsMetadata object was last updated.</p>
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * <p>The user name who last updated the OpsMetadata object.</p>
   * @public
   */
  LastModifiedUser?: string | undefined;

  /**
   * <p>The date the OpsMetadata objects was created.</p>
   * @public
   */
  CreationDate?: Date | undefined;
}

/**
 * @public
 */
export interface ListOpsMetadataResult {
  /**
   * <p>Returns a list of OpsMetadata objects.</p>
   * @public
   */
  OpsMetadataList?: OpsMetadata[] | undefined;

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *    results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceComplianceSummariesRequest {
  /**
   * <p>One or more filters. Use a filter to return a more specific list of results.</p>
   * @public
   */
  Filters?: ComplianceStringFilter[] | undefined;

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
 * <p>Compliance summary information for a specific resource. </p>
 * @public
 */
export interface ResourceComplianceSummaryItem {
  /**
   * <p>The compliance type.</p>
   * @public
   */
  ComplianceType?: string | undefined;

  /**
   * <p>The resource type.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The resource ID.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The compliance status for the resource.</p>
   * @public
   */
  Status?: ComplianceStatus | undefined;

  /**
   * <p>The highest severity item found for the resource. The resource is compliant for this
   *    item.</p>
   * @public
   */
  OverallSeverity?: ComplianceSeverity | undefined;

  /**
   * <p>Information about the execution.</p>
   * @public
   */
  ExecutionSummary?: ComplianceExecutionSummary | undefined;

  /**
   * <p>A list of items that are compliant for the resource.</p>
   * @public
   */
  CompliantSummary?: CompliantSummary | undefined;

  /**
   * <p>A list of items that aren't compliant for the resource.</p>
   * @public
   */
  NonCompliantSummary?: NonCompliantSummary | undefined;
}

/**
 * @public
 */
export interface ListResourceComplianceSummariesResult {
  /**
   * <p>A summary count for specified or targeted managed nodes. Summary count includes information
   *    about compliant and non-compliant State Manager associations, patch status, or custom items
   *    according to the filter criteria that you specify. </p>
   * @public
   */
  ResourceComplianceSummaryItems?: ResourceComplianceSummaryItem[] | undefined;

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *    results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceDataSyncRequest {
  /**
   * <p>View a list of resource data syncs according to the sync type. Specify
   *     <code>SyncToDestination</code> to view resource data syncs that synchronize data to an Amazon S3 bucket. Specify <code>SyncFromSource</code> to view resource data syncs from Organizations
   *    or from multiple Amazon Web Services Regions.</p>
   * @public
   */
  SyncType?: string | undefined;

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
 * @enum
 */
export const LastResourceDataSyncStatus = {
  FAILED: "Failed",
  INPROGRESS: "InProgress",
  SUCCESSFUL: "Successful",
} as const;

/**
 * @public
 */
export type LastResourceDataSyncStatus = (typeof LastResourceDataSyncStatus)[keyof typeof LastResourceDataSyncStatus];

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
 * @public
 */
export interface ResourceDataSyncSourceWithState {
  /**
   * <p>The type of data source for the resource data sync. <code>SourceType</code> is either
   *     <code>AwsOrganizations</code> (if an organization is present in Organizations) or
   *     <code>singleAccountMultiRegions</code>.</p>
   * @public
   */
  SourceType?: string | undefined;

  /**
   * <p>The field name in <code>SyncSource</code> for the
   *     <code>ResourceDataSyncAwsOrganizationsSource</code> type.</p>
   * @public
   */
  AwsOrganizationsSource?: ResourceDataSyncAwsOrganizationsSource | undefined;

  /**
   * <p>The <code>SyncSource</code> Amazon Web Services Regions included in the resource data sync.</p>
   * @public
   */
  SourceRegions?: string[] | undefined;

  /**
   * <p>Whether to automatically synchronize and aggregate data from new Amazon Web Services Regions when those
   *    Regions come online.</p>
   * @public
   */
  IncludeFutureRegions?: boolean | undefined;

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
   * @public
   */
  State?: string | undefined;

  /**
   * <p>When you create a resource data sync, if you choose one of the Organizations options, then Systems Manager
   *    automatically enables all OpsData sources in the selected Amazon Web Services Regions for all Amazon Web Services accounts in
   *    your organization (or in the selected organization units). For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/Explorer-resource-data-sync.html">Setting up Systems Manager Explorer to display data from multiple accounts and Regions</a> in
   *    the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   * @public
   */
  EnableAllOpsDataSources?: boolean | undefined;
}

/**
 * <p>Information about a resource data sync configuration, including its current status and last
 *    successful sync.</p>
 * @public
 */
export interface ResourceDataSyncItem {
  /**
   * <p>The name of the resource data sync.</p>
   * @public
   */
  SyncName?: string | undefined;

  /**
   * <p>The type of resource data sync. If <code>SyncType</code> is <code>SyncToDestination</code>,
   *    then the resource data sync synchronizes data to an S3 bucket. If the <code>SyncType</code> is
   *     <code>SyncFromSource</code> then the resource data sync synchronizes data from Organizations or from
   *    multiple Amazon Web Services Regions.</p>
   * @public
   */
  SyncType?: string | undefined;

  /**
   * <p>Information about the source where the data was synchronized. </p>
   * @public
   */
  SyncSource?: ResourceDataSyncSourceWithState | undefined;

  /**
   * <p>Configuration information for the target S3 bucket.</p>
   * @public
   */
  S3Destination?: ResourceDataSyncS3Destination | undefined;

  /**
   * <p>The last time the configuration attempted to sync (UTC).</p>
   * @public
   */
  LastSyncTime?: Date | undefined;

  /**
   * <p>The last time the sync operations returned a status of <code>SUCCESSFUL</code> (UTC).</p>
   * @public
   */
  LastSuccessfulSyncTime?: Date | undefined;

  /**
   * <p>The date and time the resource data sync was changed. </p>
   * @public
   */
  SyncLastModifiedTime?: Date | undefined;

  /**
   * <p>The status reported by the last sync.</p>
   * @public
   */
  LastStatus?: LastResourceDataSyncStatus | undefined;

  /**
   * <p>The date and time the configuration was created (UTC).</p>
   * @public
   */
  SyncCreatedTime?: Date | undefined;

  /**
   * <p>The status message details reported by the last sync.</p>
   * @public
   */
  LastSyncStatusMessage?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceDataSyncResult {
  /**
   * <p>A list of your current resource data sync configurations and their statuses.</p>
   * @public
   */
  ResourceDataSyncItems?: ResourceDataSyncItem[] | undefined;

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *    results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>Returns a list of tags for a specific resource type.</p>
   * @public
   */
  ResourceType: ResourceTypeForTagging | undefined;

  /**
   * <p>The resource ID for which you want to see a list of tags.</p>
   * @public
   */
  ResourceId: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResult {
  /**
   * <p>A list of tags.</p>
   * @public
   */
  TagList?: Tag[] | undefined;
}

/**
 * <p>The document can't be shared with more Amazon Web Services accounts. You can specify a maximum of 20
 *    accounts per API operation to share a private document.</p>
 *          <p>By default, you can share a private document with a maximum of 1,000 accounts and publicly
 *    share up to five documents.</p>
 *          <p>If you need to increase the quota for privately or publicly shared Systems Manager documents, contact
 *    Amazon Web Services Support.</p>
 * @public
 */
export class DocumentPermissionLimit extends __BaseException {
  readonly name: "DocumentPermissionLimit" = "DocumentPermissionLimit";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * @public
 */
export interface ModifyDocumentPermissionRequest {
  /**
   * <p>The name of the document that you want to share.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The permission type for the document. The permission type can be
   *    <i>Share</i>.</p>
   * @public
   */
  PermissionType: DocumentPermissionType | undefined;

  /**
   * <p>The Amazon Web Services users that should have access to the document. The account IDs can either be a
   *    group of account IDs or <i>All</i>. You must specify a value for this parameter or
   *    the <code>AccountIdsToRemove</code> parameter.</p>
   * @public
   */
  AccountIdsToAdd?: string[] | undefined;

  /**
   * <p>The Amazon Web Services users that should no longer have access to the document. The Amazon Web Services user
   *    can either be a group of account IDs or <i>All</i>. This action has a higher
   *    priority than <code>AccountIdsToAdd</code>. If you specify an ID to add and the same ID to
   *    remove, the system removes access to the document. You must specify a value for this parameter or
   *    the <code>AccountIdsToAdd</code> parameter.</p>
   * @public
   */
  AccountIdsToRemove?: string[] | undefined;

  /**
   * <p>(Optional) The version of the document to share. If it isn't specified, the system choose
   *    the <code>Default</code> version to share.</p>
   * @public
   */
  SharedDocumentVersion?: string | undefined;
}

/**
 * @public
 */
export interface ModifyDocumentPermissionResponse {}

/**
 * <p>You specified too many custom compliance types. You can specify a maximum of 10 different
 *    types. </p>
 * @public
 */
export class ComplianceTypeCountLimitExceededException extends __BaseException {
  readonly name: "ComplianceTypeCountLimitExceededException" = "ComplianceTypeCountLimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * @public
 */
export class InvalidItemContentException extends __BaseException {
  readonly name: "InvalidItemContentException" = "InvalidItemContentException";
  readonly $fault: "client" = "client";
  TypeName?: string | undefined;
  Message?: string | undefined;
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
 * @public
 */
export class ItemSizeLimitExceededException extends __BaseException {
  readonly name: "ItemSizeLimitExceededException" = "ItemSizeLimitExceededException";
  readonly $fault: "client" = "client";
  TypeName?: string | undefined;
  Message?: string | undefined;
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
 * @public
 */
export interface ComplianceItemEntry {
  /**
   * <p>The compliance item ID. For example, if the compliance item is a Windows patch, the ID could
   *    be the number of the KB article.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The title of the compliance item. For example, if the compliance item is a Windows patch,
   *    the title could be the title of the KB article for the patch; for example: Security Update for
   *    Active Directory Federation Services. </p>
   * @public
   */
  Title?: string | undefined;

  /**
   * <p>The severity of the compliance status. Severity can be one of the following: Critical, High,
   *    Medium, Low, Informational, Unspecified.</p>
   * @public
   */
  Severity: ComplianceSeverity | undefined;

  /**
   * <p>The status of the compliance item. An item is either COMPLIANT or NON_COMPLIANT.</p>
   * @public
   */
  Status: ComplianceStatus | undefined;

  /**
   * <p>A "Key": "Value" tag combination for the compliance item.</p>
   * @public
   */
  Details?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const ComplianceUploadType = {
  Complete: "COMPLETE",
  Partial: "PARTIAL",
} as const;

/**
 * @public
 */
export type ComplianceUploadType = (typeof ComplianceUploadType)[keyof typeof ComplianceUploadType];

/**
 * @public
 */
export interface PutComplianceItemsRequest {
  /**
   * <p>Specify an ID for this resource. For a managed node, this is the node ID.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>Specify the type of resource. <code>ManagedInstance</code> is currently the only supported
   *    resource type.</p>
   * @public
   */
  ResourceType: string | undefined;

  /**
   * <p>Specify the compliance type. For example, specify Association (for a State Manager
   *    association), Patch, or Custom:<code>string</code>.</p>
   * @public
   */
  ComplianceType: string | undefined;

  /**
   * <p>A summary of the call execution that includes an execution ID, the type of execution (for
   *    example, <code>Command</code>), and the date/time of the execution using a datetime object that
   *    is saved in the following format: <code>yyyy-MM-dd'T'HH:mm:ss'Z'</code>
   *          </p>
   * @public
   */
  ExecutionSummary: ComplianceExecutionSummary | undefined;

  /**
   * <p>Information about the compliance as defined by the resource type. For example, for a patch
   *    compliance type, <code>Items</code> includes information about the PatchSeverity, Classification,
   *    and so on.</p>
   * @public
   */
  Items: ComplianceItemEntry[] | undefined;

  /**
   * <p>MD5 or SHA-256 content hash. The content hash is used to determine if existing information
   *    should be overwritten or ignored. If the content hashes match, the request to put compliance
   *    information is ignored.</p>
   * @public
   */
  ItemContentHash?: string | undefined;

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
   * @public
   */
  UploadType?: ComplianceUploadType | undefined;
}

/**
 * @public
 */
export interface PutComplianceItemsResult {}

/**
 * <p>The size of inventory data has exceeded the total size limit for the resource.</p>
 * @public
 */
export class TotalSizeLimitExceededException extends __BaseException {
  readonly name: "TotalSizeLimitExceededException" = "TotalSizeLimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * @public
 */
export class CustomSchemaCountLimitExceededException extends __BaseException {
  readonly name: "CustomSchemaCountLimitExceededException" = "CustomSchemaCountLimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * @public
 */
export class InvalidInventoryItemContextException extends __BaseException {
  readonly name: "InvalidInventoryItemContextException" = "InvalidInventoryItemContextException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * @public
 */
export class ItemContentMismatchException extends __BaseException {
  readonly name: "ItemContentMismatchException" = "ItemContentMismatchException";
  readonly $fault: "client" = "client";
  TypeName?: string | undefined;
  Message?: string | undefined;
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
 * @public
 */
export interface InventoryItem {
  /**
   * <p>The name of the inventory type. Default inventory item type names start with
   *     <code>AWS</code>. Custom inventory type names will start with Custom. Default inventory item
   *    types include the following: <code>AWS:AWSComponent</code>, <code>AWS:Application</code>,
   *     <code>AWS:InstanceInformation</code>, <code>AWS:Network</code>, and
   *     <code>AWS:WindowsUpdate</code>.</p>
   * @public
   */
  TypeName: string | undefined;

  /**
   * <p>The schema version for the inventory item.</p>
   * @public
   */
  SchemaVersion: string | undefined;

  /**
   * <p>The time the inventory information was collected.</p>
   * @public
   */
  CaptureTime: string | undefined;

  /**
   * <p>MD5 hash of the inventory item type contents. The content hash is used to determine whether
   *    to update inventory information. The PutInventory API doesn't update the inventory item type
   *    contents if the MD5 hash hasn't changed since last update. </p>
   * @public
   */
  ContentHash?: string | undefined;

  /**
   * <p>The inventory data of the inventory type.</p>
   * @public
   */
  Content?: Record<string, string>[] | undefined;

  /**
   * <p>A map of associated properties for a specified inventory type. For example, with this
   *    attribute, you can specify the <code>ExecutionId</code>, <code>ExecutionType</code>,
   *     <code>ComplianceType</code> properties of the <code>AWS:ComplianceItem</code> type.</p>
   * @public
   */
  Context?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutInventoryRequest {
  /**
   * <p>An managed node ID where you want to add or update inventory items.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The inventory items that you want to add or update on managed nodes.</p>
   * @public
   */
  Items: InventoryItem[] | undefined;
}

/**
 * @public
 */
export interface PutInventoryResult {
  /**
   * <p>Information about the request.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>The sub-type count exceeded the limit for the inventory type.</p>
 * @public
 */
export class SubTypeCountLimitExceededException extends __BaseException {
  readonly name: "SubTypeCountLimitExceededException" = "SubTypeCountLimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * @public
 */
export class UnsupportedInventoryItemContextException extends __BaseException {
  readonly name: "UnsupportedInventoryItemContextException" = "UnsupportedInventoryItemContextException";
  readonly $fault: "client" = "client";
  TypeName?: string | undefined;
  Message?: string | undefined;
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
 * @public
 */
export class UnsupportedInventorySchemaVersionException extends __BaseException {
  readonly name: "UnsupportedInventorySchemaVersionException" = "UnsupportedInventorySchemaVersionException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
 */
export interface PutParameterRequest {
  /**
   * <p>The fully qualified name of the parameter that you want to create or update.</p>
   *          <note>
   *             <p>You can't enter the Amazon Resource Name (ARN) for a parameter, only the parameter name
   *     itself.</p>
   *          </note>
   *          <p>The fully qualified name includes the complete hierarchy of the parameter path and name. For
   *    parameters in a hierarchy, you must include a leading forward slash character (/) when you create
   *    or reference a parameter. For example: <code>/Dev/DBServer/MySQL/db-string13</code>
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
   *             <p>The reported maximum length of 2048 characters for a parameter name includes 1037
   *     characters that are reserved for internal use by Systems Manager. The maximum length for a parameter name
   *     that you specify is 1011 characters.</p>
   *             <p>This count of 1011 characters includes the characters in the ARN that precede the name you
   *     specify. This ARN length will vary depending on your partition and Region. For example, the
   *     following 45 characters count toward the 1011 character maximum for a parameter created in the
   *     US East (Ohio) Region: <code>arn:aws:ssm:us-east-2:111122223333:parameter/</code>.</p>
   *          </note>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Information about the parameter that you want to add to the system. Optional but
   *    recommended.</p>
   *          <important>
   *             <p>Don't enter personally identifiable information in this field.</p>
   *          </important>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The parameter value that you want to add to the system. Standard parameters have a value
   *    limit of 4 KB. Advanced parameters have a value limit of 8 KB.</p>
   *          <note>
   *             <p>Parameters can't be referenced or nested in the values of other parameters. You can't
   *     include values wrapped in double brackets <code>\{\{\}\}</code> or
   *       <code>\{\{ssm:<i>parameter-name</i>\}\}</code> in a parameter value.</p>
   *          </note>
   * @public
   */
  Value: string | undefined;

  /**
   * <p>The type of parameter that you want to create.</p>
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
   * @public
   */
  Type?: ParameterType | undefined;

  /**
   * <p>The Key Management Service (KMS) ID that you want to use to encrypt a
   *    parameter. Use a custom key for better security. Required for parameters that use the <code>SecureString</code> data type.</p>
   *          <p>If you don't specify a key ID, the system uses the default key associated with your
   *    Amazon Web Services account, which is not as secure as using a custom key.</p>
   *          <ul>
   *             <li>
   *                <p>To use a custom KMS key, choose the <code>SecureString</code>
   *      data type with the <code>Key ID</code> parameter.</p>
   *             </li>
   *          </ul>
   * @public
   */
  KeyId?: string | undefined;

  /**
   * <p>Overwrite an existing parameter. The default value is <code>false</code>.</p>
   * @public
   */
  Overwrite?: boolean | undefined;

  /**
   * <p>A regular expression used to validate the parameter value. For example, for String types
   *    with values restricted to numbers, you can specify the following: AllowedPattern=^\d+$ </p>
   * @public
   */
  AllowedPattern?: string | undefined;

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
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The parameter tier to assign to a parameter.</p>
   *          <p>Parameter Store offers a standard tier and an advanced tier for parameters. Standard
   *    parameters have a content size limit of 4 KB and can't be configured to use parameter policies.
   *    You can create a maximum of 10,000 standard parameters for each Region in an Amazon Web Services account.
   *    Standard parameters are offered at no additional cost. </p>
   *          <p>Advanced parameters have a content size limit of 8 KB and can be configured to use parameter
   *    policies. You can create a maximum of 100,000 advanced parameters for each Region in an
   *    Amazon Web Services account. Advanced parameters incur a charge. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-advanced-parameters.html">Managing
   *     parameter tiers</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
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
   *          <p>For more information about configuring the default tier option, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-advanced-parameters.html#ps-default-tier">Specifying a default parameter tier</a> in the
   *    <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   * @public
   */
  Tier?: ParameterTier | undefined;

  /**
   * <p>One or more policies to apply to a parameter. This operation takes a JSON array. Parameter
   *    Store, a tool in Amazon Web Services Systems Manager supports the following policy types:</p>
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
   * @public
   */
  Policies?: string | undefined;

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
   *    Amazon Web Services account.</p>
   *          <note>
   *             <p>If the action is successful, the service sends back an HTTP 200 response which indicates a
   *     successful <code>PutParameter</code> call for all cases except for data type
   *      <code>aws:ec2:image</code>. If you call <code>PutParameter</code> with
   *      <code>aws:ec2:image</code> data type, a successful HTTP 200 response does not guarantee that
   *     your parameter was successfully created or updated. The <code>aws:ec2:image</code> value is
   *     validated asynchronously, and the <code>PutParameter</code> call returns before the validation
   *     is complete. If you submit an invalid AMI value, the PutParameter operation will return success,
   *     but the asynchronous validation will fail and the parameter will not be created or updated. To
   *     monitor whether your <code>aws:ec2:image</code> parameters are created successfully, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-paramstore-cwe.html">Setting
   *      up notifications or trigger actions based on Parameter Store events</a>. For more
   *     information about AMI format validation , see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-ec2-aliases.html">Native parameter
   *      support for Amazon Machine Image IDs</a>. </p>
   *          </note>
   * @public
   */
  DataType?: string | undefined;
}

/**
 * @public
 */
export interface PutParameterResult {
  /**
   * <p>The new version number of a parameter. If you edit a parameter value, Parameter Store
   *    automatically creates a new version and assigns this new version a unique ID. You can reference a
   *    parameter version ID in API operations or in Systems Manager documents (SSM documents). By default, if you
   *    don't specify a specific version, the system returns the latest parameter value when a parameter
   *    is called.</p>
   * @public
   */
  Version?: number | undefined;

  /**
   * <p>The tier assigned to the parameter.</p>
   * @public
   */
  Tier?: ParameterTier | undefined;
}

/**
 * <p>The parameter type isn't supported.</p>
 * @public
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
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the resource to which you want to attach a policy.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>A policy you want to associate with a resource.</p>
   * @public
   */
  Policy: string | undefined;

  /**
   * <p>The policy ID.</p>
   * @public
   */
  PolicyId?: string | undefined;

  /**
   * <p>ID of the current policy version. The hash helps to prevent a situation where multiple users
   *    attempt to overwrite a policy. You must provide this hash when updating or deleting a
   *    policy.</p>
   * @public
   */
  PolicyHash?: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyResponse {
  /**
   * <p>The policy ID. To update a policy, you must specify <code>PolicyId</code> and
   *     <code>PolicyHash</code>.</p>
   * @public
   */
  PolicyId?: string | undefined;

  /**
   * <p>ID of the current policy version.</p>
   * @public
   */
  PolicyHash?: string | undefined;
}

/**
 * <p>The <a>PutResourcePolicy</a> API action enforces two limits. A policy can't be
 *    greater than 1024 bytes in size. And only one policy can be attached to
 *    <code>OpsItemGroup</code>. Verify these limits and try again.</p>
 * @public
 */
export class ResourcePolicyLimitExceededException extends __BaseException {
  readonly name: "ResourcePolicyLimitExceededException" = "ResourcePolicyLimitExceededException";
  readonly $fault: "client" = "client";
  Limit?: number | undefined;
  LimitType?: string | undefined;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourcePolicyLimitExceededException, __BaseException>) {
    super({
      name: "ResourcePolicyLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourcePolicyLimitExceededException.prototype);
    this.Limit = opts.Limit;
    this.LimitType = opts.LimitType;
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface RegisterDefaultPatchBaselineRequest {
  /**
   * <p>The ID of the patch baseline that should be the default patch baseline.</p>
   * @public
   */
  BaselineId: string | undefined;
}

/**
 * @public
 */
export interface RegisterDefaultPatchBaselineResult {
  /**
   * <p>The ID of the default patch baseline.</p>
   * @public
   */
  BaselineId?: string | undefined;
}

/**
 * @public
 */
export interface RegisterPatchBaselineForPatchGroupRequest {
  /**
   * <p>The ID of the patch baseline to register with the patch group.</p>
   * @public
   */
  BaselineId: string | undefined;

  /**
   * <p>The name of the patch group to be registered with the patch baseline.</p>
   * @public
   */
  PatchGroup: string | undefined;
}

/**
 * @public
 */
export interface RegisterPatchBaselineForPatchGroupResult {
  /**
   * <p>The ID of the patch baseline the patch group was registered with.</p>
   * @public
   */
  BaselineId?: string | undefined;

  /**
   * <p>The name of the patch group registered with the patch baseline.</p>
   * @public
   */
  PatchGroup?: string | undefined;
}

/**
 * @public
 */
export interface RegisterTargetWithMaintenanceWindowRequest {
  /**
   * <p>The ID of the maintenance window the target should be registered with.</p>
   * @public
   */
  WindowId: string | undefined;

  /**
   * <p>The type of target being registered with the maintenance window.</p>
   * @public
   */
  ResourceType: MaintenanceWindowResourceType | undefined;

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
   *          <p>For more information about these examples formats, including the best use case for each one,
   *    see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/mw-cli-tutorial-targets-examples.html">Examples: Register
   *     targets with a maintenance window</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   * @public
   */
  Targets: Target[] | undefined;

  /**
   * <p>User-provided value that will be included in any Amazon CloudWatch Events events raised while
   *    running tasks for these targets in this maintenance window.</p>
   * @public
   */
  OwnerInformation?: string | undefined;

  /**
   * <p>An optional name for the target.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>An optional description for the target.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>User-provided idempotency token.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface RegisterTargetWithMaintenanceWindowResult {
  /**
   * <p>The ID of the target definition in this maintenance window.</p>
   * @public
   */
  WindowTargetId?: string | undefined;
}

/**
 * <p>You attempted to register a <code>LAMBDA</code> or <code>STEP_FUNCTIONS</code> task in a
 *    region where the corresponding service isn't available. </p>
 * @public
 */
export class FeatureNotAvailableException extends __BaseException {
  readonly name: "FeatureNotAvailableException" = "FeatureNotAvailableException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * @public
 */
export interface RegisterTaskWithMaintenanceWindowRequest {
  /**
   * <p>The ID of the maintenance window the task should be added to.</p>
   * @public
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
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * <p>The ARN of the task to run.</p>
   * @public
   */
  TaskArn: string | undefined;

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
   * <p>The type of task being registered.</p>
   * @public
   */
  TaskType: MaintenanceWindowTaskType | undefined;

  /**
   * <p>The parameters that should be passed to the task when it is run.</p>
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
   * <p>The parameters that the task should use during execution. Populate only the fields that
   *    match the task type. All other fields should be empty. </p>
   * @public
   */
  TaskInvocationParameters?: MaintenanceWindowTaskInvocationParameters | undefined;

  /**
   * <p>The priority of the task in the maintenance window, the lower the number the higher the
   *    priority. Tasks in a maintenance window are scheduled in priority order with tasks that have the
   *    same priority scheduled in parallel.</p>
   * @public
   */
  Priority?: number | undefined;

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
   * @public
   */
  MaxConcurrency?: string | undefined;

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
   * @public
   */
  MaxErrors?: string | undefined;

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
   * @public
   */
  LoggingInfo?: LoggingInfo | undefined;

  /**
   * <p>An optional name for the task.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>An optional description for the task.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>User-provided idempotency token.</p>
   * @public
   */
  ClientToken?: string | undefined;

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
export interface RegisterTaskWithMaintenanceWindowResult {
  /**
   * <p>The ID of the task in the maintenance window.</p>
   * @public
   */
  WindowTaskId?: string | undefined;
}

/**
 * @public
 */
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
   * @public
   */
  ResourceType: ResourceTypeForTagging | undefined;

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
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>Tag keys that you want to remove from the specified resource.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface RemoveTagsFromResourceResult {}

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

/**
 * @internal
 */
export const BaselineOverrideFilterSensitiveLog = (obj: BaselineOverride): any => ({
  ...obj,
  ...(obj.Sources && { Sources: obj.Sources.map((item) => PatchSourceFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const GetDeployablePatchSnapshotForInstanceRequestFilterSensitiveLog = (
  obj: GetDeployablePatchSnapshotForInstanceRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMaintenanceWindowResultFilterSensitiveLog = (obj: GetMaintenanceWindowResult): any => ({
  ...obj,
  ...(obj.Description && { Description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetMaintenanceWindowExecutionTaskResultFilterSensitiveLog = (
  obj: GetMaintenanceWindowExecutionTaskResult
): any => ({
  ...obj,
  ...(obj.TaskParameters && { TaskParameters: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetMaintenanceWindowExecutionTaskInvocationResultFilterSensitiveLog = (
  obj: GetMaintenanceWindowExecutionTaskInvocationResult
): any => ({
  ...obj,
  ...(obj.Parameters && { Parameters: SENSITIVE_STRING }),
  ...(obj.OwnerInformation && { OwnerInformation: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const MaintenanceWindowLambdaParametersFilterSensitiveLog = (obj: MaintenanceWindowLambdaParameters): any => ({
  ...obj,
  ...(obj.Payload && { Payload: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const MaintenanceWindowRunCommandParametersFilterSensitiveLog = (
  obj: MaintenanceWindowRunCommandParameters
): any => ({
  ...obj,
  ...(obj.Parameters && { Parameters: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const MaintenanceWindowStepFunctionsParametersFilterSensitiveLog = (
  obj: MaintenanceWindowStepFunctionsParameters
): any => ({
  ...obj,
  ...(obj.Input && { Input: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const MaintenanceWindowTaskInvocationParametersFilterSensitiveLog = (
  obj: MaintenanceWindowTaskInvocationParameters
): any => ({
  ...obj,
  ...(obj.RunCommand && { RunCommand: MaintenanceWindowRunCommandParametersFilterSensitiveLog(obj.RunCommand) }),
  ...(obj.StepFunctions && {
    StepFunctions: MaintenanceWindowStepFunctionsParametersFilterSensitiveLog(obj.StepFunctions),
  }),
  ...(obj.Lambda && { Lambda: MaintenanceWindowLambdaParametersFilterSensitiveLog(obj.Lambda) }),
});

/**
 * @internal
 */
export const GetMaintenanceWindowTaskResultFilterSensitiveLog = (obj: GetMaintenanceWindowTaskResult): any => ({
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
export const ParameterFilterSensitiveLog = (obj: Parameter): any => ({
  ...obj,
  ...(obj.Value && { Value: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetParameterResultFilterSensitiveLog = (obj: GetParameterResult): any => ({
  ...obj,
  ...(obj.Parameter && { Parameter: ParameterFilterSensitiveLog(obj.Parameter) }),
});

/**
 * @internal
 */
export const ParameterHistoryFilterSensitiveLog = (obj: ParameterHistory): any => ({
  ...obj,
  ...(obj.Value && { Value: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetParameterHistoryResultFilterSensitiveLog = (obj: GetParameterHistoryResult): any => ({
  ...obj,
  ...(obj.Parameters && { Parameters: obj.Parameters.map((item) => ParameterHistoryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const GetParametersResultFilterSensitiveLog = (obj: GetParametersResult): any => ({
  ...obj,
  ...(obj.Parameters && { Parameters: obj.Parameters.map((item) => ParameterFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const GetParametersByPathResultFilterSensitiveLog = (obj: GetParametersByPathResult): any => ({
  ...obj,
  ...(obj.Parameters && { Parameters: obj.Parameters.map((item) => ParameterFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const GetPatchBaselineResultFilterSensitiveLog = (obj: GetPatchBaselineResult): any => ({
  ...obj,
  ...(obj.Sources && { Sources: obj.Sources.map((item) => PatchSourceFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const AssociationVersionInfoFilterSensitiveLog = (obj: AssociationVersionInfo): any => ({
  ...obj,
  ...(obj.Parameters && { Parameters: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListAssociationVersionsResultFilterSensitiveLog = (obj: ListAssociationVersionsResult): any => ({
  ...obj,
  ...(obj.AssociationVersions && {
    AssociationVersions: obj.AssociationVersions.map((item) => AssociationVersionInfoFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const CommandFilterSensitiveLog = (obj: Command): any => ({
  ...obj,
  ...(obj.Parameters && { Parameters: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListCommandsResultFilterSensitiveLog = (obj: ListCommandsResult): any => ({
  ...obj,
  ...(obj.Commands && { Commands: obj.Commands.map((item) => CommandFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const InstanceInfoFilterSensitiveLog = (obj: InstanceInfo): any => ({
  ...obj,
  ...(obj.IpAddress && { IpAddress: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const NodeTypeFilterSensitiveLog = (obj: NodeType): any => {
  if (obj.Instance !== undefined) return { Instance: InstanceInfoFilterSensitiveLog(obj.Instance) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const NodeFilterSensitiveLog = (obj: Node): any => ({
  ...obj,
  ...(obj.NodeType && { NodeType: NodeTypeFilterSensitiveLog(obj.NodeType) }),
});

/**
 * @internal
 */
export const ListNodesResultFilterSensitiveLog = (obj: ListNodesResult): any => ({
  ...obj,
  ...(obj.Nodes && { Nodes: obj.Nodes.map((item) => NodeFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const PutParameterRequestFilterSensitiveLog = (obj: PutParameterRequest): any => ({
  ...obj,
  ...(obj.Value && { Value: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RegisterTargetWithMaintenanceWindowRequestFilterSensitiveLog = (
  obj: RegisterTargetWithMaintenanceWindowRequest
): any => ({
  ...obj,
  ...(obj.OwnerInformation && { OwnerInformation: SENSITIVE_STRING }),
  ...(obj.Description && { Description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RegisterTaskWithMaintenanceWindowRequestFilterSensitiveLog = (
  obj: RegisterTaskWithMaintenanceWindowRequest
): any => ({
  ...obj,
  ...(obj.TaskParameters && { TaskParameters: SENSITIVE_STRING }),
  ...(obj.TaskInvocationParameters && {
    TaskInvocationParameters: MaintenanceWindowTaskInvocationParametersFilterSensitiveLog(obj.TaskInvocationParameters),
  }),
  ...(obj.Description && { Description: SENSITIVE_STRING }),
});
