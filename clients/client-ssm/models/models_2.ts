import {
  LoggingInfo,
  MaintenanceWindowTaskParameterValueExpression,
  MetadataValue,
  OperatingSystem,
  OpsItemDataValue,
  OpsItemNotification,
  OpsItemStatus,
  PatchAction,
  PatchComplianceLevel,
  PatchFilterGroup,
  PatchRuleGroup,
  PatchSource,
  RelatedOpsItem,
  ResourceDataSyncSource,
  Target,
} from "./models_0";
import {
  InventoryFilter,
  InventoryGroup,
  MaintenanceWindowTaskInvocationParameters,
  OpsFilter,
  OpsResultAttribute,
  ResultAttribute,
} from "./models_1";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

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
   * <p>The targets (either instances or tags) to modify. Instances are specified using the format
   *     <code>Key=instanceids,Values=instanceID_1,instanceID_2</code>. Tags are specified using the
   *    format <code> Key=tag_name,Values=tag_value</code>. </p>
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
  TaskParameters?: { [key: string]: MaintenanceWindowTaskParameterValueExpression };

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
   *    is the number of targets that are allowed to run this task in parallel.</p>
   *          <note>
   *             <p>For maintenance window tasks without a target specified, you can't supply a value for this
   *     option. Instead, the system inserts a placeholder value of <code>1</code>, which may be reported
   *     in the response to this command. This value doesn't affect the running of your task and can be
   *     ignored.</p>
   *          </note>
   */
  MaxConcurrency?: string;

  /**
   * <p>The new <code>MaxErrors</code> value to specify. <code>MaxErrors</code> is the maximum
   *    number of errors that are allowed before the task stops being scheduled.</p>
   *          <note>
   *             <p>For maintenance window tasks without a target specified, you can't supply a value for this
   *     option. Instead, the system inserts a placeholder value of <code>1</code>, which may be reported
   *     in the response to this command. This value doesn't affect the running of your task and can be
   *     ignored.</p>
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
  TaskParameters?: { [key: string]: MaintenanceWindowTaskParameterValueExpression };

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
   * <p>The ID of the managed instance where you want to update the role.</p>
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
  OperationalData?: { [key: string]: OpsItemDataValue };

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

/**
 * <p>The OpsMetadata object exceeds the maximum number of OpsMetadata keys that you can assign to
 *    an application in Application Manager.</p>
 */
export interface OpsMetadataKeyLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "OpsMetadataKeyLimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace OpsMetadataKeyLimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OpsMetadataKeyLimitExceededException): any => ({
    ...obj,
  });
}

export interface UpdateOpsMetadataRequest {
  /**
   * <p>The Amazon Resoure Name (ARN) of the OpsMetadata Object to update.</p>
   */
  OpsMetadataArn: string | undefined;

  /**
   * <p>Metadata to add to an OpsMetadata object.</p>
   */
  MetadataToUpdate?: { [key: string]: MetadataValue };

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
   * <p>Information about the patches to use to update the instances, including target operating
   *    systems and source repositories. Applies to Linux instances only.</p>
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
   *    applied to the instances. The default value is <code>false</code>. Applies to Linux instances
   *    only.</p>
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
   * <p>Information about the patches to use to update the instances, including target operating
   *    systems and source repositories. Applies to Linux instances only.</p>
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

/**
 * <p>Another <code>UpdateResourceDataSync</code> request is being processed. Wait a few minutes
 *    and try again.</p>
 */
export interface ResourceDataSyncConflictException extends __SmithyException, $MetadataBearer {
  name: "ResourceDataSyncConflictException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceDataSyncConflictException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceDataSyncConflictException): any => ({
    ...obj,
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
   * <p>The new value to specify for the service setting. For the
   *     <code>/ssm/parameter-store/default-parameter-tier</code> setting ID, the setting value can be
   *    one of the following.</p>
   *          <ul>
   *             <li>
   *                <p>Standard</p>
   *             </li>
   *             <li>
   *                <p>Advanced</p>
   *             </li>
   *             <li>
   *                <p>Intelligent-Tiering</p>
   *             </li>
   *          </ul>
   *          <p>For the <code>/ssm/parameter-store/high-throughput-enabled</code>, and
   *     <code>/ssm/managed-instance/activation-tier</code> setting IDs, the setting value can be true or
   *    false.</p>
   *          <p>For the <code>/ssm/automation/customer-script-log-destination</code> setting ID, the setting
   *    value can be <code>CloudWatch</code>.</p>
   *          <p>For the <code>/ssm/automation/customer-script-log-group-name</code> setting ID, the setting
   *    value can be the name of an Amazon CloudWatch Logs log group.</p>
   *          <p>For the <code>/ssm/documents/console/public-sharing-permission</code> setting ID, the
   *    setting value can be <code>Enable</code> or <code>Disable</code>.</p>
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
  Values?: { [key: string]: string };

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

export interface GetInventoryRequest {
  /**
   * <p>One or more filters. Use a filter to return a more specific list of results.</p>
   */
  Filters?: InventoryFilter[];

  /**
   * <p>Returns counts of inventory types based on one or more expressions. For example, if you
   *    aggregate by using an expression that uses the <code>AWS:InstanceInformation.PlatformType</code>
   *    type, you can see a count of how many Windows and Linux instances exist in your inventoried
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
