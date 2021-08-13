import {
  AssociationComplianceSeverity,
  AssociationDescription,
  AssociationOverview,
  AssociationStatus,
  AssociationSyncCompliance,
  AttachmentsSource,
  AutomationExecutionStatus,
  AutomationSubtype,
  DocumentDescription,
  DocumentFormat,
  DocumentHashType,
  DocumentPermissionType,
  DocumentRequires,
  DocumentStatus,
  DocumentType,
  ExecutionMode,
  InstanceAssociationOutputLocation,
  LoggingInfo,
  MaintenanceWindowExecutionStatus,
  MaintenanceWindowResourceType,
  MaintenanceWindowTaskParameterValueExpression,
  MaintenanceWindowTaskType,
  MetadataValue,
  OperatingSystem,
  OpsItemDataValue,
  OpsItemNotification,
  OpsItemStatus,
  ParameterInlinePolicy,
  ParameterStringFilter,
  ParameterTier,
  ParameterType,
  PatchAction,
  PatchComplianceLevel,
  PatchFilterGroup,
  PatchOrchestratorFilter,
  PatchRuleGroup,
  PatchSource,
  PlatformType,
  RelatedOpsItem,
  ResolvedTargets,
  ResourceDataSyncAwsOrganizationsSource,
  ResourceDataSyncS3Destination,
  ResourceTypeForTagging,
  ReviewStatus,
  Runbook,
  StepExecution,
  Tag,
  Target,
  TargetLocation,
} from "./models_0";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>The specified filter option isn't valid. Valid options are Equals and BeginsWith. For Path
 *    filter, valid options are Recursive and OneLevel.</p>
 */
export interface InvalidFilterOption extends __SmithyException, $MetadataBearer {
  name: "InvalidFilterOption";
  $fault: "client";
  /**
   * <p>The specified filter option isn't valid. Valid options are Equals and BeginsWith. For Path
   *    filter, valid options are Recursive and OneLevel.</p>
   */
  message?: string;
}

export namespace InvalidFilterOption {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidFilterOption): any => ({
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
   * <p>The number of instances in the patch group.</p>
   */
  Instances?: number;

  /**
   * <p>The number of instances with installed patches.</p>
   */
  InstancesWithInstalledPatches?: number;

  /**
   * <p>The number of instances with patches installed that aren't defined in the patch
   *    baseline.</p>
   */
  InstancesWithInstalledOtherPatches?: number;

  /**
   * <p>The number of instances with patches installed by Patch Manager that haven't been rebooted
   *    after the patch installation. The status of these instances is <code>NON_COMPLIANT</code>.</p>
   */
  InstancesWithInstalledPendingRebootPatches?: number;

  /**
   * <p>The number of instances with patches installed that are specified in a
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
   * <p>The number of instances with missing patches from the patch baseline.</p>
   */
  InstancesWithMissingPatches?: number;

  /**
   * <p>The number of instances with patches from the patch baseline that failed to install.</p>
   */
  InstancesWithFailedPatches?: number;

  /**
   * <p>The number of instances with patches that aren't applicable.</p>
   */
  InstancesWithNotApplicablePatches?: number;

  /**
   * <p>The number of instances with <code>NotApplicable</code> patches beyond the supported limit,
   *    which aren't reported by name to Inventory. Inventory is a capability of Amazon Web Services Systems Manager.</p>
   */
  InstancesWithUnreportedNotApplicablePatches?: number;

  /**
   * <p>The number of instances where patches that are specified as <code>Critical</code> for
   *    compliance reporting in the patch baseline aren't installed. These patches might be missing, have
   *    failed installation, were rejected, or were installed but awaiting a required instance reboot.
   *    The status of these instances is <code>NON_COMPLIANT</code>.</p>
   */
  InstancesWithCriticalNonCompliantPatches?: number;

  /**
   * <p>The number of instances where patches that are specified as <code>Security</code> in a patch
   *    advisory aren't installed. These patches might be missing, have failed installation, were
   *    rejected, or were installed but awaiting a required instance reboot. The status of these
   *    instances is <code>NON_COMPLIANT</code>.</p>
   */
  InstancesWithSecurityNonCompliantPatches?: number;

  /**
   * <p>The number of instances with patches installed that are specified as other than
   *     <code>Critical</code> or <code>Security</code> but aren't compliant with the patch baseline. The
   *    status of these instances is <code>NON_COMPLIANT</code>.</p>
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
  Properties?: { [key: string]: string }[];

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
   *                <p>Target: Specify an instance to which session connections have been made.</p>
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
 * <p>Information about a Session Manager connection to an instance.</p>
 */
export interface Session {
  /**
   * <p>The ID of the session.</p>
   */
  SessionId?: string;

  /**
   * <p>The instance that the Session Manager session connected to.</p>
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
   * <p>Reserved for future use.</p>
   */
  Details?: string;

  /**
   * <p>Reserved for future use.</p>
   */
  OutputUrl?: SessionManagerOutputUrl;
}

export namespace Session {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Session): any => ({
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
   *    related resource.</p>
   */
  OpsItemId: string | undefined;

  /**
   * <p>The ID of the association for which you want to delete an association between the OpsItem
   *    and a related resource.</p>
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

/**
 * <p>The association wasn't found using the parameters you specified in the call. Verify the
 *    information and try again.</p>
 */
export interface OpsItemRelatedItemAssociationNotFoundException extends __SmithyException, $MetadataBearer {
  name: "OpsItemRelatedItemAssociationNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace OpsItemRelatedItemAssociationNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OpsItemRelatedItemAssociationNotFoundException): any => ({
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
  Parameters?: { [key: string]: string[] };

  /**
   * <p>The list of execution outputs as defined in the Automation runbook.</p>
   */
  Outputs?: { [key: string]: string[] };

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
  TargetMaps?: { [key: string]: string[] }[];

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

export enum CalendarState {
  CLOSED = "CLOSED",
  OPEN = "OPEN",
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

/**
 * <p>The SSM document type isn't valid. Valid document types are described in the
 *     <code>DocumentType</code> property.</p>
 */
export interface InvalidDocumentType extends __SmithyException, $MetadataBearer {
  name: "InvalidDocumentType";
  $fault: "client";
  Message?: string;
}

export namespace InvalidDocumentType {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidDocumentType): any => ({
    ...obj,
  });
}

/**
 * <p>The calendar entry contained in the specified SSM document isn't supported.</p>
 */
export interface UnsupportedCalendarException extends __SmithyException, $MetadataBearer {
  name: "UnsupportedCalendarException";
  $fault: "client";
  Message?: string;
}

export namespace UnsupportedCalendarException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnsupportedCalendarException): any => ({
    ...obj,
  });
}

export interface GetCommandInvocationRequest {
  /**
   * <p>(Required) The parent command ID of the invocation plugin.</p>
   */
  CommandId: string | undefined;

  /**
   * <p>(Required) The ID of the managed instance targeted by the command. A managed instance can be
   *    an Amazon Elastic Compute Cloud (Amazon EC2) instance or an instance in your hybrid environment that is configured for
   *    Amazon Web Services Systems Manager.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The name of the plugin for which you want detailed results. If the document contains only
   *    one plugin, you can omit the name and details for that plugin. If the document contains more than
   *    one plugin, you must specify the name of the plugin for which you want to view details.</p>
   *          <p>Plugin names are also referred to as <i>step names</i> in Systems Manager documents (SSM
   *    documents). For example, <code>aws:RunShellScript</code> is a plugin.</p>
   *          <p>To find the <code>PluginName</code>, check the document content and find the name of the
   *    plugin. Alternatively, use <a>ListCommandInvocations</a> with the
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

export enum CommandInvocationStatus {
  CANCELLED = "Cancelled",
  CANCELLING = "Cancelling",
  DELAYED = "Delayed",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  PENDING = "Pending",
  SUCCESS = "Success",
  TIMED_OUT = "TimedOut",
}

export interface GetCommandInvocationResult {
  /**
   * <p>The parent command ID of the invocation plugin.</p>
   */
  CommandId?: string;

  /**
   * <p>The ID of the managed instance targeted by the command. A managed instance can be an EC2
   *    instance or an instance in your hybrid environment that is configured for Systems Manager.</p>
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
   *    <code>-1</code>, then the command hasn't started running on the instance, or it wasn't received
   *    by the instance.</p>
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
   *                <p>Pending: The command hasn't been sent to the instance.</p>
   *             </li>
   *             <li>
   *                <p>In Progress: The command has been sent to the instance but hasn't reached a terminal
   *      state.</p>
   *             </li>
   *             <li>
   *                <p>Delayed: The system attempted to send the command to the target, but the target wasn't
   *      available. The instance might not be available because of network issues, because the instance
   *      was stopped, or for similar reasons. The system will try to send the command again.</p>
   *             </li>
   *             <li>
   *                <p>Success: The command or plugin ran successfully. This is a terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Delivery Timed Out: The command wasn't delivered to the instance before the delivery
   *      timeout expired. Delivery timeouts don't count against the parent command's
   *       <code>MaxErrors</code> limit, but they do contribute to whether the parent command status is
   *      Success or Incomplete. This is a terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Execution Timed Out: The command started to run on the instance, but the execution wasn't
   *      complete before the timeout expired. Execution timeouts count against the
   *       <code>MaxErrors</code> limit of the parent command. This is a terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Failed: The command wasn't run successfully on the instance. For a plugin, this indicates
   *      that the result code wasn't zero. For a command invocation, this indicates that the result code
   *      for one or more plugins wasn't zero. Invocation failures count against the
   *       <code>MaxErrors</code> limit of the parent command. This is a terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Canceled: The command was terminated before it was completed. This is a terminal
   *      state.</p>
   *             </li>
   *             <li>
   *                <p>Undeliverable: The command can't be delivered to the instance. The instance might not
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

/**
 * <p>The plugin name isn't valid.</p>
 */
export interface InvalidPluginName extends __SmithyException, $MetadataBearer {
  name: "InvalidPluginName";
  $fault: "client";
}

export namespace InvalidPluginName {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidPluginName): any => ({
    ...obj,
  });
}

/**
 * <p>The command ID and instance ID you specified didn't match any invocations. Verify the
 *    command ID and the instance ID and try again. </p>
 */
export interface InvocationDoesNotExist extends __SmithyException, $MetadataBearer {
  name: "InvocationDoesNotExist";
  $fault: "client";
}

export namespace InvocationDoesNotExist {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvocationDoesNotExist): any => ({
    ...obj,
  });
}

export interface GetConnectionStatusRequest {
  /**
   * <p>The instance ID.</p>
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

export enum ConnectionStatus {
  CONNECTED = "Connected",
  NOT_CONNECTED = "NotConnected",
}

export interface GetConnectionStatusResponse {
  /**
   * <p>The ID of the instance to check connection status. </p>
   */
  Target?: string;

  /**
   * <p>The status of the connection to the instance. For example, 'Connected' or 'Not
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
   *    applied to the instances. The default value is <code>false</code>. Applies to Linux instances
   *    only.</p>
   */
  ApprovedPatchesEnableNonSecurity?: boolean;

  /**
   * <p>Information about the patches to use to update the instances, including target operating
   *    systems and source repositories. Applies to Linux instances only.</p>
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

export interface GetDeployablePatchSnapshotForInstanceRequest {
  /**
   * <p>The ID of the instance for which the appropriate patch snapshot should be retrieved.</p>
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
   * <p>The instance ID.</p>
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
   *    2015.09) on the instance for the specified patch snapshot.</p>
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

/**
 * <p>Patching for applications released by Microsoft is only available on EC2 instances and
 *    advanced instances. To patch applications released by Microsoft on on-premises servers and VMs,
 *    you must enable advanced instances. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-managedinstances-advanced.html">Enabling
 *     the advanced-instances tier</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
 */
export interface UnsupportedFeatureRequiredException extends __SmithyException, $MetadataBearer {
  name: "UnsupportedFeatureRequiredException";
  $fault: "client";
  Message?: string;
}

export namespace UnsupportedFeatureRequiredException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnsupportedFeatureRequiredException): any => ({
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

export enum AttachmentHashType {
  SHA256 = "Sha256",
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

export enum InventoryQueryOperatorType {
  BEGIN_WITH = "BeginWith",
  EQUAL = "Equal",
  EXISTS = "Exists",
  GREATER_THAN = "GreaterThan",
  LESS_THAN = "LessThan",
  NOT_EQUAL = "NotEqual",
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
   * <p>Inventory filter values. Example: inventory filter where instance IDs are specified as
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
  Content: { [key: string]: string }[] | undefined;
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
   * <p>ID of the inventory result entity. For example, for managed instance inventory the result
   *    will be the managed instance ID. For EC2 instance inventory, the result will be the instance ID.
   *   </p>
   */
  Id?: string;

  /**
   * <p>The data section in the inventory result entity JSON.</p>
   */
  Data?: { [key: string]: InventoryResultItem };
}

export namespace InventoryResultEntity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InventoryResultEntity): any => ({
    ...obj,
  });
}

export interface GetInventoryResult {
  /**
   * <p>Collection of inventory entities such as a collection of instance inventory. </p>
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

/**
 * <p>The specified aggregator isn't valid for inventory groups. Verify that the aggregator uses a
 *    valid inventory type such as <code>AWS:Application</code> or
 *    <code>AWS:InstanceInformation</code>.</p>
 */
export interface InvalidAggregatorException extends __SmithyException, $MetadataBearer {
  name: "InvalidAggregatorException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidAggregatorException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidAggregatorException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified inventory group isn't valid.</p>
 */
export interface InvalidInventoryGroupException extends __SmithyException, $MetadataBearer {
  name: "InvalidInventoryGroupException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidInventoryGroupException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidInventoryGroupException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified inventory item result attribute isn't valid.</p>
 */
export interface InvalidResultAttributeException extends __SmithyException, $MetadataBearer {
  name: "InvalidResultAttributeException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidResultAttributeException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidResultAttributeException): any => ({
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

export enum InventoryAttributeDataType {
  NUMBER = "number",
  STRING = "string",
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
  TaskParameters?: { [key: string]: MaintenanceWindowTaskParameterValueExpression }[];

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
  Parameters?: { [key: string]: string[] };
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

export enum NotificationType {
  Command = "Command",
  Invocation = "Invocation",
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
   *                   <code>Invocation</code>: For commands sent to multiple instances, receive notification on
   *      a per-instance basis when the status of a command changes. </p>
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
   * <p>Configurations for sending notifications about command status changes on a per-instance
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
  Parameters?: { [key: string]: string[] };

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
    ...(obj.StepFunctions && {
      StepFunctions: MaintenanceWindowStepFunctionsParameters.filterSensitiveLog(obj.StepFunctions),
    }),
    ...(obj.Lambda && { Lambda: MaintenanceWindowLambdaParameters.filterSensitiveLog(obj.Lambda) }),
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
  TaskParameters?: { [key: string]: MaintenanceWindowTaskParameterValueExpression };

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
  OperationalData?: { [key: string]: OpsItemDataValue };

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
  Metadata?: { [key: string]: MetadataValue };

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

export enum OpsFilterOperatorType {
  BEGIN_WITH = "BeginWith",
  EQUAL = "Equal",
  EXISTS = "Exists",
  GREATER_THAN = "GreaterThan",
  LESS_THAN = "LessThan",
  NOT_EQUAL = "NotEqual",
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
  Content?: { [key: string]: string }[];
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
  Data?: { [key: string]: OpsEntityItem };
}

export namespace OpsEntity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OpsEntity): any => ({
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
   */
  Type?: ParameterType | string;

  /**
   * <p>The parameter value.</p>
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
  });
}

/**
 * <p>The query key ID isn't valid.</p>
 */
export interface InvalidKeyId extends __SmithyException, $MetadataBearer {
  name: "InvalidKeyId";
  $fault: "client";
  message?: string;
}

export namespace InvalidKeyId {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidKeyId): any => ({
    ...obj,
  });
}

/**
 * <p>The specified parameter version wasn't found. Verify the parameter name and version, and try
 *    again.</p>
 */
export interface ParameterVersionNotFound extends __SmithyException, $MetadataBearer {
  name: "ParameterVersionNotFound";
  $fault: "client";
  message?: string;
}

export namespace ParameterVersionNotFound {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ParameterVersionNotFound): any => ({
    ...obj,
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
  });
}

export interface GetParametersByPathRequest {
  /**
   * <p>The hierarchy for the parameter. Hierarchies start with a forward slash (/). The hierachy is
   *    the parameter name except the last part of the parameter. For the API call to succeeed, the last
   *    part of the parameter name can't be in the path. A parameter name hierarchy can have a maximum of
   *    15 levels. Here is an example of a hierarchy: <code>/Finance/Prod/IAD/WinServ2016/license33
   *    </code>
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
   *             <p>For <code>GetParametersByPath</code>, the following filter <code>Key</code> names are
   *     supported: <code>Type</code>, <code>KeyId</code>, <code>Label</code>, and
   *     <code>DataType</code>.</p>
   *             <p>The following <code>Key</code> values are not supported for
   *      <code>GetParametersByPath</code>: <code>tag</code>, <code>Name</code>, <code>Path</code>, and
   *      <code>Tier</code>.</p>
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
   * <p>Information about the patches to use to update the instances, including target operating
   *    systems and source repositories. Applies to Linux instances only.</p>
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
   * <p>Returns he operating system rule specified for patch groups using the patch baseline.</p>
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

/**
 * <p>The specified service setting wasn't found. Either the service name or the setting hasn't
 *    been provisioned by the Amazon Web Services service team.</p>
 */
export interface ServiceSettingNotFound extends __SmithyException, $MetadataBearer {
  name: "ServiceSettingNotFound";
  $fault: "client";
  Message?: string;
}

export namespace ServiceSettingNotFound {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceSettingNotFound): any => ({
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

/**
 * <p>A parameter version can have a maximum of ten labels.</p>
 */
export interface ParameterVersionLabelLimitExceeded extends __SmithyException, $MetadataBearer {
  name: "ParameterVersionLabelLimitExceeded";
  $fault: "client";
  message?: string;
}

export namespace ParameterVersionLabelLimitExceeded {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ParameterVersionLabelLimitExceeded): any => ({
    ...obj,
  });
}

export enum AssociationFilterKey {
  AssociationId = "AssociationId",
  AssociationName = "AssociationName",
  InstanceId = "InstanceId",
  LastExecutedAfter = "LastExecutedAfter",
  LastExecutedBefore = "LastExecutedBefore",
  Name = "Name",
  ResourceGroupName = "ResourceGroupName",
  Status = "AssociationStatusName",
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

export interface ListAssociationsRequest {
  /**
   * <p>One or more filters. Use a filter to return a more specific list of results.</p>
   *          <note>
   *             <p>Filtering associations using the <code>InstanceID</code> attribute only returns legacy
   *     associations created using the <code>InstanceID</code> attribute. Associations targeting the
   *     instance that are part of the Target Attributes <code>ResourceGroup</code> or <code>Tags</code>
   *     aren't returned.</p>
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

/**
 * <p>Describes an association of a Amazon Web Services Systems Manager document (SSM document) and an instance.</p>
 */
export interface Association {
  /**
   * <p>The name of the SSM document.</p>
   */
  Name?: string;

  /**
   * <p>The instance ID.</p>
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
   * <p>The version of the document used in the association.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>The instances targeted by the request to create an association. </p>
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
}

export namespace Association {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Association): any => ({
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
  Parameters?: { [key: string]: string[] };

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
}

export namespace AssociationVersionInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociationVersionInfo): any => ({
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
  });
}

export enum CommandFilterKey {
  DOCUMENT_NAME = "DocumentName",
  EXECUTION_STAGE = "ExecutionStage",
  INVOKED_AFTER = "InvokedAfter",
  INVOKED_BEFORE = "InvokedBefore",
  STATUS = "Status",
}

/**
 * <p>Describes a command filter.</p>
 *          <note>
 *             <p>An instance ID can't be specified when a command status is <code>Pending</code> because the
 *     command hasn't run on the instance yet.</p>
 *          </note>
 */
export interface CommandFilter {
  /**
   * <p>The name of the filter.</p>
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
   *      all command executions with that status. Status values you can specify include:</p>
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
   *                         <code>TimedOut</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Cancelling</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>DocumentName</b>: Specify name of the Amazon Web Services Systems Manager document (SSM
   *      document) for which you want to see command execution results. For example, specify
   *       <code>AWS-RunPatchBaseline</code> to see command executions that used this SSM document to
   *      perform security patching operations on instances. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ExecutionStage</b>: Specify one of the following
   *      values:</p>
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

export interface ListCommandInvocationsRequest {
  /**
   * <p>(Optional) The invocations for a specific command ID.</p>
   */
  CommandId?: string;

  /**
   * <p>(Optional) The command execution details for a specific instance ID.</p>
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

export enum CommandPluginStatus {
  CANCELLED = "Cancelled",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  PENDING = "Pending",
  SUCCESS = "Success",
  TIMED_OUT = "TimedOut",
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
   *                <p>Pending: The command hasn't been sent to the instance.</p>
   *             </li>
   *             <li>
   *                <p>In Progress: The command has been sent to the instance but hasn't reached a terminal
   *      state.</p>
   *             </li>
   *             <li>
   *                <p>Success: The execution of the command or plugin was successfully completed. This is a
   *      terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Delivery Timed Out: The command wasn't delivered to the instance before the delivery
   *      timeout expired. Delivery timeouts don't count against the parent command's
   *       <code>MaxErrors</code> limit, but they do contribute to whether the parent command status is
   *      Success or Incomplete. This is a terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Execution Timed Out: Command execution started on the instance, but the execution wasn't
   *      complete before the execution timeout expired. Execution timeouts count against the
   *       <code>MaxErrors</code> limit of the parent command. This is a terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Failed: The command wasn't successful on the instance. For a plugin, this indicates that
   *      the result code wasn't zero. For a command invocation, this indicates that the result code for
   *      one or more plugins wasn't zero. Invocation failures count against the MaxErrors limit of the
   *      parent command. This is a terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Canceled: The command was terminated before it was completed. This is a terminal
   *      state.</p>
   *             </li>
   *             <li>
   *                <p>Undeliverable: The command can't be delivered to the instance. The instance might not
   *      exist, or it might not be responding. Undeliverable invocations don't count against the parent
   *      command's MaxErrors limit, and they don't contribute to whether the parent command status is
   *      Success or Incomplete. This is a terminal state.</p>
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
   *             <code>i-02573cafcfEXAMPLE</code> is the instance ID;</p>
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
   *             <code>i-02573cafcfEXAMPLE</code> is the instance ID;</p>
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
 * <p>An invocation is copy of a command sent to a specific instance. A command can apply to one
 *    or more instances. A command invocation applies to one instance. For example, if a user runs
 *    SendCommand against three instances, then a command invocation is created for each requested
 *    instance ID. A command invocation returns status and detail information about a command you ran.
 *   </p>
 */
export interface CommandInvocation {
  /**
   * <p>The command against which this invocation was requested.</p>
   */
  CommandId?: string;

  /**
   * <p>The instance ID in which this invocation was requested.</p>
   */
  InstanceId?: string;

  /**
   * <p>The name of the invocation target. For EC2 instances this is the value for the
   *     <code>aws:Name</code> tag. For on-premises instances, this is the name of the instance.</p>
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
   * <p>The time and date the request was sent to this instance.</p>
   */
  RequestedDateTime?: Date;

  /**
   * <p>Whether or not the invocation succeeded, failed, or is pending.</p>
   */
  Status?: CommandInvocationStatus | string;

  /**
   * <p>A detailed status of the command execution for each invocation (each instance targeted by
   *    the command). StatusDetails includes more information than Status because it includes states
   *    resulting from error and concurrency control parameters. StatusDetails can show different results
   *    than Status. For more information about these statuses, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/monitor-commands.html">Understanding command
   *     statuses</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. StatusDetails can be one of the
   *    following values:</p>
   *          <ul>
   *             <li>
   *                <p>Pending: The command hasn't been sent to the instance.</p>
   *             </li>
   *             <li>
   *                <p>In Progress: The command has been sent to the instance but hasn't reached a terminal
   *      state.</p>
   *             </li>
   *             <li>
   *                <p>Success: The execution of the command or plugin was successfully completed. This is a
   *      terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Delivery Timed Out: The command wasn't delivered to the instance before the delivery
   *      timeout expired. Delivery timeouts don't count against the parent command's
   *       <code>MaxErrors</code> limit, but they do contribute to whether the parent command status is
   *      Success or Incomplete. This is a terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Execution Timed Out: Command execution started on the instance, but the execution wasn't
   *      complete before the execution timeout expired. Execution timeouts count against the
   *       <code>MaxErrors</code> limit of the parent command. This is a terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Failed: The command wasn't successful on the instance. For a plugin, this indicates that
   *      the result code wasn't zero. For a command invocation, this indicates that the result code for
   *      one or more plugins wasn't zero. Invocation failures count against the <code>MaxErrors</code>
   *      limit of the parent command. This is a terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Canceled: The command was terminated before it was completed. This is a terminal
   *      state.</p>
   *             </li>
   *             <li>
   *                <p>Undeliverable: The command can't be delivered to the instance. The instance might not
   *      exist or might not be responding. Undeliverable invocations don't count against the parent
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
   *    on a per instance basis.</p>
   */
  ServiceRole?: string;

  /**
   * <p>Configurations for sending notifications about command status changes on a per instance
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
   * <p>(Optional) Lists commands issued against this instance ID.</p>
   *          <note>
   *             <p>You can't specify an instance ID in the same command that you specify <code>Status</code> =
   *      <code>Pending</code>. This is because the command hasn't reached the instance yet.</p>
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

export enum CommandStatus {
  CANCELLED = "Cancelled",
  CANCELLING = "Cancelling",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  PENDING = "Pending",
  SUCCESS = "Success",
  TIMED_OUT = "TimedOut",
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
  Parameters?: { [key: string]: string[] };

  /**
   * <p>The instance IDs against which this command was requested.</p>
   */
  InstanceIds?: string[];

  /**
   * <p>An array of search criteria that targets instances using a Key,Value combination that you
   *    specify. Targets is required if you don't provide one or more instance IDs in the call.</p>
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
   *                <p>Pending: The command hasn't been sent to any instances.</p>
   *             </li>
   *             <li>
   *                <p>In Progress: The command has been sent to at least one instance but hasn't reached a final
   *      state on all instances.</p>
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
   *                <p>Incomplete: The command was attempted on all instances and one or more invocations doesn't
   *      have a value of Success but not enough invocations failed for the status to be Failed. This is
   *      a terminal state.</p>
   *             </li>
   *             <li>
   *                <p>Canceled: The command was terminated before it was completed. This is a terminal
   *      state.</p>
   *             </li>
   *             <li>
   *                <p>Rate Exceeded: The number of instances targeted by the command exceeded the account limit
   *      for pending invocations. The system has canceled the command before running it on any instance.
   *      This is a terminal state.</p>
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
   * <p>The maximum number of instances that are allowed to run the command at the same time. You
   *    can specify a number of instances, such as 10, or a percentage of instances, such as 10%. The
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
   *    states include the following: Success, Failed, Execution Timed Out, Delivery Timed Out, Canceled,
   *    Terminated, or Undeliverable.</p>
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
  });
}

export enum ComplianceQueryOperatorType {
  BeginWith = "BEGIN_WITH",
  Equal = "EQUAL",
  GreaterThan = "GREATER_THAN",
  LessThan = "LESS_THAN",
  NotEqual = "NOT_EQUAL",
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

export enum ComplianceSeverity {
  Critical = "CRITICAL",
  High = "HIGH",
  Informational = "INFORMATIONAL",
  Low = "LOW",
  Medium = "MEDIUM",
  Unspecified = "UNSPECIFIED",
}

export enum ComplianceStatus {
  Compliant = "COMPLIANT",
  NonCompliant = "NON_COMPLIANT",
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
   * <p>An ID for the resource. For a managed instance, this is the instance ID.</p>
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
  Details?: { [key: string]: string };
}

export namespace ComplianceItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ComplianceItem): any => ({
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

/**
 * <p>The number of managed instances found for each patch severity level defined in the request
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

export enum DocumentMetadataEnum {
  DocumentReviews = "DocumentReviews",
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

export enum DocumentReviewCommentType {
  Comment = "Comment",
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

export enum DocumentFilterKey {
  DocumentType = "DocumentType",
  Name = "Name",
  Owner = "Owner",
  PlatformTypes = "PlatformTypes",
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
 *                         <code>DeploymentStrategy</code>
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
   * <p>The instance ID for which you want inventory information.</p>
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
   * <p>The instance ID targeted by the request to query inventory information.</p>
   */
  InstanceId?: string;

  /**
   * <p>The inventory schema version used by the instance(s).</p>
   */
  SchemaVersion?: string;

  /**
   * <p>The time that inventory information was collected for the instance(s).</p>
   */
  CaptureTime?: string;

  /**
   * <p>A list of inventory items on the instance(s).</p>
   */
  Entries?: { [key: string]: string }[];

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

export enum OpsItemEventFilterKey {
  OPSITEM_ID = "OpsItemId",
}

export enum OpsItemEventFilterOperator {
  EQUAL = "Equal",
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

export enum OpsItemRelatedItemsFilterKey {
  ASSOCIATION_ID = "AssociationId",
  RESOURCE_TYPE = "ResourceType",
  RESOURCE_URI = "ResourceUri",
}

export enum OpsItemRelatedItemsFilterOperator {
  EQUAL = "Equal",
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

export interface ListResourceComplianceSummariesResult {
  /**
   * <p>A summary count for specified or targeted managed instances. Summary count includes
   *    information about compliant and non-compliant State Manager associations, patch status, or custom
   *    items according to the filter criteria that you specify. </p>
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

export enum LastResourceDataSyncStatus {
  FAILED = "Failed",
  INPROGRESS = "InProgress",
  SUCCESSFUL = "Successful",
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

/**
 * <p>The document can't be shared with more Amazon Web Services user accounts. You can share a document
 *    with a maximum of 20 accounts. You can publicly share up to five documents. If you need to
 *    increase this limit, contact Amazon Web Services Support.</p>
 */
export interface DocumentPermissionLimit extends __SmithyException, $MetadataBearer {
  name: "DocumentPermissionLimit";
  $fault: "client";
  Message?: string;
}

export namespace DocumentPermissionLimit {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DocumentPermissionLimit): any => ({
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

/**
 * <p>You specified too many custom compliance types. You can specify a maximum of 10 different
 *    types. </p>
 */
export interface ComplianceTypeCountLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "ComplianceTypeCountLimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace ComplianceTypeCountLimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ComplianceTypeCountLimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>One or more content items isn't valid.</p>
 */
export interface InvalidItemContentException extends __SmithyException, $MetadataBearer {
  name: "InvalidItemContentException";
  $fault: "client";
  TypeName?: string;
  Message?: string;
}

export namespace InvalidItemContentException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidItemContentException): any => ({
    ...obj,
  });
}

/**
 * <p>The inventory item size has exceeded the size limit.</p>
 */
export interface ItemSizeLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "ItemSizeLimitExceededException";
  $fault: "client";
  TypeName?: string;
  Message?: string;
}

export namespace ItemSizeLimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ItemSizeLimitExceededException): any => ({
    ...obj,
  });
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
  Details?: { [key: string]: string };
}

export namespace ComplianceItemEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ComplianceItemEntry): any => ({
    ...obj,
  });
}

export enum ComplianceUploadType {
  Complete = "COMPLETE",
  Partial = "PARTIAL",
}

export interface PutComplianceItemsRequest {
  /**
   * <p>Specify an ID for this resource. For a managed instance, this is the instance ID.</p>
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

/**
 * <p>The size of inventory data has exceeded the total size limit for the resource.</p>
 */
export interface TotalSizeLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "TotalSizeLimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace TotalSizeLimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TotalSizeLimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>You have exceeded the limit for custom schemas. Delete one or more custom schemas and try
 *    again.</p>
 */
export interface CustomSchemaCountLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "CustomSchemaCountLimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace CustomSchemaCountLimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomSchemaCountLimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>You specified invalid keys or values in the <code>Context</code> attribute for
 *     <code>InventoryItem</code>. Verify the keys and values, and try again.</p>
 */
export interface InvalidInventoryItemContextException extends __SmithyException, $MetadataBearer {
  name: "InvalidInventoryItemContextException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidInventoryItemContextException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidInventoryItemContextException): any => ({
    ...obj,
  });
}

/**
 * <p>The inventory item has invalid content. </p>
 */
export interface ItemContentMismatchException extends __SmithyException, $MetadataBearer {
  name: "ItemContentMismatchException";
  $fault: "client";
  TypeName?: string;
  Message?: string;
}

export namespace ItemContentMismatchException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ItemContentMismatchException): any => ({
    ...obj,
  });
}

/**
 * <p>Information collected from managed instances based on your inventory policy document</p>
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
  Content?: { [key: string]: string }[];

  /**
   * <p>A map of associated properties for a specified inventory type. For example, with this
   *    attribute, you can specify the <code>ExecutionId</code>, <code>ExecutionType</code>,
   *     <code>ComplianceType</code> properties of the <code>AWS:ComplianceItem</code> type.</p>
   */
  Context?: { [key: string]: string };
}

export namespace InventoryItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InventoryItem): any => ({
    ...obj,
  });
}

export interface PutInventoryRequest {
  /**
   * <p>An instance ID where you want to add or update inventory items.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The inventory items that you want to add or update on instances.</p>
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

/**
 * <p>The sub-type count exceeded the limit for the inventory type.</p>
 */
export interface SubTypeCountLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "SubTypeCountLimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace SubTypeCountLimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SubTypeCountLimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>The <code>Context</code> attribute that you specified for the <code>InventoryItem</code>
 *    isn't allowed for this inventory type. You can only use the <code>Context</code> attribute with
 *    inventory types like <code>AWS:ComplianceItem</code>.</p>
 */
export interface UnsupportedInventoryItemContextException extends __SmithyException, $MetadataBearer {
  name: "UnsupportedInventoryItemContextException";
  $fault: "client";
  TypeName?: string;
  Message?: string;
}

export namespace UnsupportedInventoryItemContextException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnsupportedInventoryItemContextException): any => ({
    ...obj,
  });
}

/**
 * <p>Inventory item type schema version has to match supported versions in the service. Check
 *    output of GetInventorySchema to see the available schema version for each type.</p>
 */
export interface UnsupportedInventorySchemaVersionException extends __SmithyException, $MetadataBearer {
  name: "UnsupportedInventorySchemaVersionException";
  $fault: "client";
  Message?: string;
}

export namespace UnsupportedInventorySchemaVersionException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnsupportedInventorySchemaVersionException): any => ({
    ...obj,
  });
}

/**
 * <p>A hierarchy can have a maximum of 15 levels. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-parameter-name-constraints.html">Requirements and
 *     constraints for parameter names</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p>
 */
export interface HierarchyLevelLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "HierarchyLevelLimitExceededException";
  $fault: "client";
  /**
   * <p>A hierarchy can have a maximum of 15 levels. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-parameter-name-constraints.html">Requirements and
   *     constraints for parameter names</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p>
   */
  message?: string;
}

export namespace HierarchyLevelLimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HierarchyLevelLimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>Parameter Store doesn't support changing a parameter type in a hierarchy. For example, you
 *    can't change a parameter from a <code>String</code> type to a <code>SecureString</code> type. You
 *    must create a new, unique parameter.</p>
 */
export interface HierarchyTypeMismatchException extends __SmithyException, $MetadataBearer {
  name: "HierarchyTypeMismatchException";
  $fault: "client";
  /**
   * <p>Parameter Store doesn't support changing a parameter type in a hierarchy. For example, you
   *    can't change a parameter from a <code>String</code> type to a <code>SecureString</code> type. You
   *    must create a new, unique parameter.</p>
   */
  message?: string;
}

export namespace HierarchyTypeMismatchException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HierarchyTypeMismatchException): any => ({
    ...obj,
  });
}

/**
 * <p>There is a conflict in the policies specified for this parameter. You can't, for example,
 *    specify two Expiration policies for a parameter. Review your policies, and try again.</p>
 */
export interface IncompatiblePolicyException extends __SmithyException, $MetadataBearer {
  name: "IncompatiblePolicyException";
  $fault: "client";
  message?: string;
}

export namespace IncompatiblePolicyException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IncompatiblePolicyException): any => ({
    ...obj,
  });
}

/**
 * <p>The request doesn't meet the regular expression requirement.</p>
 */
export interface InvalidAllowedPatternException extends __SmithyException, $MetadataBearer {
  name: "InvalidAllowedPatternException";
  $fault: "client";
  /**
   * <p>The request doesn't meet the regular expression requirement.</p>
   */
  message?: string;
}

export namespace InvalidAllowedPatternException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidAllowedPatternException): any => ({
    ...obj,
  });
}

/**
 * <p>A policy attribute or its value is invalid. </p>
 */
export interface InvalidPolicyAttributeException extends __SmithyException, $MetadataBearer {
  name: "InvalidPolicyAttributeException";
  $fault: "client";
  message?: string;
}

export namespace InvalidPolicyAttributeException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidPolicyAttributeException): any => ({
    ...obj,
  });
}

/**
 * <p>The policy type isn't supported. Parameter Store supports the following policy types:
 *    Expiration, ExpirationNotification, and NoChangeNotification.</p>
 */
export interface InvalidPolicyTypeException extends __SmithyException, $MetadataBearer {
  name: "InvalidPolicyTypeException";
  $fault: "client";
  message?: string;
}

export namespace InvalidPolicyTypeException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidPolicyTypeException): any => ({
    ...obj,
  });
}

/**
 * <p>The parameter already exists. You can't create duplicate parameters.</p>
 */
export interface ParameterAlreadyExists extends __SmithyException, $MetadataBearer {
  name: "ParameterAlreadyExists";
  $fault: "client";
  message?: string;
}

export namespace ParameterAlreadyExists {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ParameterAlreadyExists): any => ({
    ...obj,
  });
}

/**
 * <p>You have exceeded the number of parameters for this Amazon Web Services account. Delete one or more
 *    parameters and try again.</p>
 */
export interface ParameterLimitExceeded extends __SmithyException, $MetadataBearer {
  name: "ParameterLimitExceeded";
  $fault: "client";
  message?: string;
}

export namespace ParameterLimitExceeded {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ParameterLimitExceeded): any => ({
    ...obj,
  });
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
export interface ParameterMaxVersionLimitExceeded extends __SmithyException, $MetadataBearer {
  name: "ParameterMaxVersionLimitExceeded";
  $fault: "client";
  message?: string;
}

export namespace ParameterMaxVersionLimitExceeded {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ParameterMaxVersionLimitExceeded): any => ({
    ...obj,
  });
}

/**
 * <p>The parameter name isn't valid.</p>
 */
export interface ParameterPatternMismatchException extends __SmithyException, $MetadataBearer {
  name: "ParameterPatternMismatchException";
  $fault: "client";
  /**
   * <p>The parameter name isn't valid.</p>
   */
  message?: string;
}

export namespace ParameterPatternMismatchException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ParameterPatternMismatchException): any => ({
    ...obj,
  });
}

/**
 * <p>You specified more than the maximum number of allowed policies for the parameter. The
 *    maximum is 10.</p>
 */
export interface PoliciesLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "PoliciesLimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace PoliciesLimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PoliciesLimitExceededException): any => ({
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
   *             <p>The maximum length constraint listed below includes capacity for additional system
   *     attributes that aren't part of the name. The maximum length for a parameter name, including the
   *     full length of the parameter ARN, is 1011 characters. For example, the length of the following
   *     parameter name is 65 characters, not 20 characters:</p>
   *             <p>
   *                <code>arn:aws:ssm:us-east-2:111122223333:parameter/ExampleParameterName</code>
   *             </p>
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
   *          <p>ExpirationNotification: This policy triggers an event in Amazon CloudWatch Events that
   *    notifies you about the expiration. By using this policy, you can receive notification before or
   *    after the expiration time is reached, in units of days or hours.</p>
   *          <p>NoChangeNotification: This policy triggers a CloudWatch Events event if a parameter hasn't
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

/**
 * <p>The parameter type isn't supported.</p>
 */
export interface UnsupportedParameterType extends __SmithyException, $MetadataBearer {
  name: "UnsupportedParameterType";
  $fault: "client";
  message?: string;
}

export namespace UnsupportedParameterType {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnsupportedParameterType): any => ({
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
   * <p>The targets to register with the maintenance window. In other words, the instances to run
   *    commands on when the maintenance window runs.</p>
   *          <note>
   *             <p>If a single maintenance window task is registered with multiple targets, its task
   *     invocations occur sequentially and not in parallel. If your task must run on multiple targets at
   *     the same time, register a task for each target individually and assign each task the same
   *     priority level.</p>
   *          </note>
   *          <p>You can specify targets using instance IDs, resource group names, or tags that have been
   *    applied to instances.</p>
   *          <p>
   *             <b>Example 1</b>: Specify instance IDs</p>
   *          <p>
   *             <code>Key=InstanceIds,Values=<i>instance-id-1</i>,<i>instance-id-2</i>,<i>instance-id-3</i>
   *             </code>
   *          </p>
   *          <p>
   *             <b>Example 2</b>: Use tag key-pairs applied to instances</p>
   *          <p>
   *             <code>Key=tag:<i>my-tag-key</i>,Values=<i>my-tag-value-1</i>,<i>my-tag-value-2</i>
   *             </code>
   *          </p>
   *          <p>
   *             <b>Example 3</b>: Use tag-keys applied to instances</p>
   *          <p>
   *             <code>Key=tag-key,Values=<i>my-tag-key-1</i>,<i>my-tag-key-2</i>
   *             </code>
   *          </p>
   *
   *          <p>
   *             <b>Example 4</b>: Use resource group names</p>
   *          <p>
   *             <code>Key=resource-groups:Name,Values=<i>resource-group-name</i>
   *             </code>
   *          </p>
   *          <p>
   *             <b>Example 5</b>: Use filters for resource group types</p>
   *          <p>
   *             <code>Key=resource-groups:ResourceTypeFilters,Values=<i>resource-type-1</i>,<i>resource-type-2</i>
   *             </code>
   *          </p>
   *          <note>
   *             <p>For <code>Key=resource-groups:ResourceTypeFilters</code>, specify resource types in the
   *     following format</p>
   *             <p>
   *                <code>Key=resource-groups:ResourceTypeFilters,Values=<i>AWS::EC2::INSTANCE</i>,<i>AWS::EC2::VPC</i>
   *                </code>
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

/**
 * <p>You attempted to register a <code>LAMBDA</code> or <code>STEP_FUNCTIONS</code> task in a
 *    region where the corresponding service isn't available. </p>
 */
export interface FeatureNotAvailableException extends __SmithyException, $MetadataBearer {
  name: "FeatureNotAvailableException";
  $fault: "client";
  Message?: string;
}

export namespace FeatureNotAvailableException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FeatureNotAvailableException): any => ({
    ...obj,
  });
}

export interface RegisterTaskWithMaintenanceWindowRequest {
  /**
   * <p>The ID of the maintenance window the task should be added to.</p>
   */
  WindowId: string | undefined;

  /**
   * <p>The targets (either instances or maintenance window targets).</p>
   *          <note>
   *             <p>One or more targets must be specified for maintenance window Run Command-type tasks.
   *     Depending on the task, targets are optional for other maintenance window task types (Automation,
   *      Lambda, and Step Functions). For more information about running tasks
   *     that don't specify targets, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/maintenance-windows-targetless-tasks.html">Registering
   *      maintenance window tasks without targets</a> in the
   *     <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   *          </note>
   *          <p>Specify instances using the following format: </p>
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
  TaskParameters?: { [key: string]: MaintenanceWindowTaskParameterValueExpression };

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
   * <p>The maximum number of targets this task can be run for in parallel.</p>
   *          <note>
   *             <p>For maintenance window tasks without a target specified, you can't supply a value for this
   *     option. Instead, the system inserts a placeholder value of <code>1</code>. This value doesn't
   *     affect the running of your task.</p>
   *          </note>
   */
  MaxConcurrency?: string;

  /**
   * <p>The maximum number of errors allowed before this task stops being scheduled.</p>
   *          <note>
   *             <p>For maintenance window tasks without a target specified, you can't supply a value for this
   *     option. Instead, the system inserts a placeholder value of <code>1</code>. This value doesn't
   *     affect the running of your task.</p>
   *          </note>
   */
  MaxErrors?: string;

  /**
   * <p>A structure containing information about an Amazon Simple Storage Service (Amazon S3) bucket
   *    to write instance-level logs to. </p>
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
   *     managed instances. Specify the name of the managed instance in the following format:
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
   *          <p>PatchBaseline: pb-012345abcde</p>
   *          <p>OpsMetadata object: <code>ResourceID</code> for tagging is created from the Amazon Resource
   *    Name (ARN) for the object. Specifically, <code>ResourceID</code> is created from the strings that
   *    come after the word <code>opsmetadata</code> in the ARN. For example, an OpsMetadata object with
   *    an ARN of <code>arn:aws:ssm:us-east-2:1234567890:opsmetadata/aws/ssm/MyGroup/appmanager</code>
   *    has a <code>ResourceID</code> of either <code>aws/ssm/MyGroup/appmanager</code> or
   *     <code>/aws/ssm/MyGroup/appmanager</code>.</p>
   *          <p>For the Document and Parameter values, use the name of the resource.</p>
   *          <note>
   *             <p>The ManagedInstance type for this API operation is only for on-premises managed instances.
   *     Specify the name of the managed instance in the following format: mi-ID_number. For example,
   *     mi-1a2b3c4d5e6f.</p>
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
   *    connection to the instance.</p>
   */
  TokenValue?: string;

  /**
   * <p>A URL back to SSM Agent on the instance that the Session Manager client uses to send commands and
   *    receive output from the instance. Format: <code>wss://ssmmessages.<b>region</b>.amazonaws.com/v1/data-channel/<b>session-id</b>?stream=(input|output)</code>.</p>
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

/**
 * <p>The specified step name and execution ID don't exist. Verify the information and try
 *    again.</p>
 */
export interface AutomationStepNotFoundException extends __SmithyException, $MetadataBearer {
  name: "AutomationStepNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace AutomationStepNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutomationStepNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>The signal isn't valid for the current Automation execution.</p>
 */
export interface InvalidAutomationSignalException extends __SmithyException, $MetadataBearer {
  name: "InvalidAutomationSignalException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidAutomationSignalException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidAutomationSignalException): any => ({
    ...obj,
  });
}

export enum SignalType {
  APPROVE = "Approve",
  REJECT = "Reject",
  RESUME = "Resume",
  START_STEP = "StartStep",
  STOP_STEP = "StopStep",
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
  Payload?: { [key: string]: string[] };
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

/**
 * <p>One or more configuration items isn't valid. Verify that a valid Amazon Resource Name (ARN)
 *    was provided for an Amazon Simple Notification Service topic.</p>
 */
export interface InvalidNotificationConfig extends __SmithyException, $MetadataBearer {
  name: "InvalidNotificationConfig";
  $fault: "client";
  Message?: string;
}

export namespace InvalidNotificationConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidNotificationConfig): any => ({
    ...obj,
  });
}

/**
 * <p>The S3 bucket doesn't exist.</p>
 */
export interface InvalidOutputFolder extends __SmithyException, $MetadataBearer {
  name: "InvalidOutputFolder";
  $fault: "client";
}

export namespace InvalidOutputFolder {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidOutputFolder): any => ({
    ...obj,
  });
}

/**
 * <p>The role name can't contain invalid characters. Also verify that you specified an IAM role for notifications that includes the required trust policy. For information about
 *    configuring the IAM role for Run Command notifications, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/rc-sns-notifications.html">Configuring Amazon SNS Notifications for Run Command</a> in the
 *     <i>Amazon Web Services Systems Manager User Guide</i>.</p>
 */
export interface InvalidRole extends __SmithyException, $MetadataBearer {
  name: "InvalidRole";
  $fault: "client";
  Message?: string;
}

export namespace InvalidRole {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidRole): any => ({
    ...obj,
  });
}

export interface SendCommandRequest {
  /**
   * <p>The IDs of the instances where the command should run. Specifying instance IDs is most
   *    useful when you are targeting a limited number of instances, though you can specify up to 50
   *    IDs.</p>
   *          <p>To target a larger number of instances, or if you prefer not to list individual instance
   *    IDs, we recommend using the <code>Targets</code> option instead. Using <code>Targets</code>,
   *    which accepts tag key-value pairs to identify the instances to send commands to, you can a send
   *    command to tens, hundreds, or thousands of instances at once.</p>
   *          <p>For more information about how to use targets, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/send-commands-multiple.html">Using targets and rate
   *     controls to send commands to a fleet</a> in the
   *    <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   */
  InstanceIds?: string[];

  /**
   * <p>An array of search criteria that targets instances using a <code>Key,Value</code>
   *    combination that you specify. Specifying targets is most useful when you want to send a command
   *    to a large number of instances at once. Using <code>Targets</code>, which accepts tag key-value
   *    pairs to identify instances, you can send a command to tens, hundreds, or thousands of instances
   *    at once.</p>
   *          <p>To send a command to a smaller number of instances, you can use the <code>InstanceIds</code>
   *    option instead.</p>
   *          <p>For more information about how to use targets, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/send-commands-multiple.html">Sending commands to a
   *     fleet</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
   */
  Targets?: Target[];

  /**
   * <p>The name of the Amazon Web Services Systems Manager document (SSM document) to run. This can be a public document or a
   *    custom document. To run a shared document belonging to another account, specify the document ARN.
   *    For more information about how to use shared documents, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/ssm-using-shared.html">Using shared SSM documents</a>
   *    in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
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
  Parameters?: { [key: string]: string[] };

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
   * <p>(Optional) The maximum number of instances that are allowed to run the command at the same
   *    time. You can specify a number such as 10 or a percentage such as 10%. The default value is
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
  });
}

/**
 * <p>The association isn't valid or doesn't exist. </p>
 */
export interface InvalidAssociation extends __SmithyException, $MetadataBearer {
  name: "InvalidAssociation";
  $fault: "client";
  Message?: string;
}

export namespace InvalidAssociation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidAssociation): any => ({
    ...obj,
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

/**
 * <p>An Automation runbook with the specified name couldn't be found.</p>
 */
export interface AutomationDefinitionNotFoundException extends __SmithyException, $MetadataBearer {
  name: "AutomationDefinitionNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace AutomationDefinitionNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutomationDefinitionNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>An Automation runbook with the specified name and version couldn't be found.</p>
 */
export interface AutomationDefinitionVersionNotFoundException extends __SmithyException, $MetadataBearer {
  name: "AutomationDefinitionVersionNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace AutomationDefinitionVersionNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutomationDefinitionVersionNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>The number of simultaneously running Automation executions exceeded the allowable
 *    limit.</p>
 */
export interface AutomationExecutionLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "AutomationExecutionLimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace AutomationExecutionLimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutomationExecutionLimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>The supplied parameters for invoking the specified Automation runbook are incorrect. For
 *    example, they may not match the set of parameters permitted for the specified Automation
 *    document.</p>
 */
export interface InvalidAutomationExecutionParametersException extends __SmithyException, $MetadataBearer {
  name: "InvalidAutomationExecutionParametersException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidAutomationExecutionParametersException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidAutomationExecutionParametersException): any => ({
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
  Parameters?: { [key: string]: string[] };

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
  TargetMaps?: { [key: string]: string[] }[];

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
   *             <p>To add tags to an existing patch baseline, use the <a>AddTagsToResource</a>
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

/**
 * <p>Indicates that the Change Manager change template used in the change request was rejected or is
 *    still in a pending state.</p>
 */
export interface AutomationDefinitionNotApprovedException extends __SmithyException, $MetadataBearer {
  name: "AutomationDefinitionNotApprovedException";
  $fault: "client";
  Message?: string;
}

export namespace AutomationDefinitionNotApprovedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutomationDefinitionNotApprovedException): any => ({
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
  Parameters?: { [key: string]: string[] };

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
   * <p>The instance to connect to for the session.</p>
   */
  Target: string | undefined;

  /**
   * <p>The name of the SSM document to define the parameters and plugin settings for the session.
   *    For example, <code>SSM-SessionManagerRunShell</code>. You can call the <a>GetDocument</a> API to verify the document exists before attempting to start a session.
   *    If no document name is provided, a shell to the instance is launched by default.</p>
   */
  DocumentName?: string;

  /**
   * <p>Reserved for future use.</p>
   */
  Parameters?: { [key: string]: string[] };
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
   *    connection to the instance.</p>
   */
  TokenValue?: string;

  /**
   * <p>A URL back to SSM Agent on the instance that the Session Manager client uses to send commands and
   *    receive output from the instance. Format: <code>wss://ssmmessages.<b>region</b>.amazonaws.com/v1/data-channel/<b>session-id</b>?stream=(input|output)</code>
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

/**
 * <p>The specified target instance for the session isn't fully configured for use with Session Manager. For
 *    more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-getting-started.html">Getting started with
 *     Session Manager</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. This error is also returned if you
 *    attempt to start a session on an instance that is located in a different account or Region</p>
 */
export interface TargetNotConnected extends __SmithyException, $MetadataBearer {
  name: "TargetNotConnected";
  $fault: "client";
  Message?: string;
}

export namespace TargetNotConnected {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TargetNotConnected): any => ({
    ...obj,
  });
}

/**
 * <p>The specified update status operation isn't valid.</p>
 */
export interface InvalidAutomationStatusUpdateException extends __SmithyException, $MetadataBearer {
  name: "InvalidAutomationStatusUpdateException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidAutomationStatusUpdateException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidAutomationStatusUpdateException): any => ({
    ...obj,
  });
}

export enum StopType {
  CANCEL = "Cancel",
  COMPLETE = "Complete",
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

/**
 * <p>You have reached the maximum number versions allowed for an association. Each association
 *    has a limit of 1,000 versions. </p>
 */
export interface AssociationVersionLimitExceeded extends __SmithyException, $MetadataBearer {
  name: "AssociationVersionLimitExceeded";
  $fault: "client";
  Message?: string;
}

export namespace AssociationVersionLimitExceeded {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociationVersionLimitExceeded): any => ({
    ...obj,
  });
}

/**
 * <p>The update isn't valid.</p>
 */
export interface InvalidUpdate extends __SmithyException, $MetadataBearer {
  name: "InvalidUpdate";
  $fault: "client";
  Message?: string;
}

export namespace InvalidUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidUpdate): any => ({
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
  Parameters?: { [key: string]: string[] };

  /**
   * <p>The document version you want update for the association. </p>
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
   *    information for the instance.</p>
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
   *          <p>Also, if you specified this option when you created the association, you can reset it. To do
   *    so, specify the <code>no-apply-only-at-cron-interval</code> parameter when you update the
   *    association from the command line. This parameter forces the association to run immediately after
   *    updating it and according to the interval specified.</p>
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
}

export namespace UpdateAssociationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAssociationRequest): any => ({
    ...obj,
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
  });
}

/**
 * <p>The updated status is the same as the current status.</p>
 */
export interface StatusUnchanged extends __SmithyException, $MetadataBearer {
  name: "StatusUnchanged";
  $fault: "client";
}

export namespace StatusUnchanged {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StatusUnchanged): any => ({
    ...obj,
  });
}

export interface UpdateAssociationStatusRequest {
  /**
   * <p>The name of the SSM document.</p>
   */
  Name: string | undefined;

  /**
   * <p>The instance ID.</p>
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
  });
}

/**
 * <p>The document has too many versions. Delete one or more document versions and try
 *    again.</p>
 */
export interface DocumentVersionLimitExceeded extends __SmithyException, $MetadataBearer {
  name: "DocumentVersionLimitExceeded";
  $fault: "client";
  Message?: string;
}

export namespace DocumentVersionLimitExceeded {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DocumentVersionLimitExceeded): any => ({
    ...obj,
  });
}

/**
 * <p>The content of the association document matches another document. Change the content of the
 *    document and try again.</p>
 */
export interface DuplicateDocumentContent extends __SmithyException, $MetadataBearer {
  name: "DuplicateDocumentContent";
  $fault: "client";
  Message?: string;
}

export namespace DuplicateDocumentContent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DuplicateDocumentContent): any => ({
    ...obj,
  });
}

/**
 * <p>The version name has already been used in this document. Specify a different version name,
 *    and then try again.</p>
 */
export interface DuplicateDocumentVersionName extends __SmithyException, $MetadataBearer {
  name: "DuplicateDocumentVersionName";
  $fault: "client";
  Message?: string;
}

export namespace DuplicateDocumentVersionName {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DuplicateDocumentVersionName): any => ({
    ...obj,
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

export enum DocumentReviewAction {
  Approve = "Approve",
  Reject = "Reject",
  SendForReview = "SendForReview",
  UpdateReview = "UpdateReview",
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
   * <p>The time zone that the scheduled maintenance window executions are based on, in Internet
   *    Assigned Numbers Authority (IANA) format. For example: "America/Los_Angeles", "UTC", or
   *    "Asia/Seoul". For more information, see the <a href="https://www.iana.org/time-zones">Time
   *     Zone Database</a> on the IANA website.</p>
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
