// smithy-typescript generated code
import {
  AssociationComplianceSeverity,
  AssociationFilterKey,
  AssociationSyncCompliance,
  CommandFilterKey,
  CommandInvocationStatus,
  CommandPluginStatus,
  CommandStatus,
  ComplianceQueryOperatorType,
  ComplianceSeverity,
  ComplianceStatus,
  ComplianceUploadType,
  DocumentFilterKey,
  DocumentFormat,
  DocumentHashType,
  DocumentMetadataEnum,
  DocumentPermissionType,
  DocumentReviewAction,
  DocumentReviewCommentType,
  DocumentStatus,
  DocumentType,
  ExecutionMode,
  LastResourceDataSyncStatus,
  MaintenanceWindowResourceType,
  MaintenanceWindowTaskCutoffBehavior,
  MaintenanceWindowTaskType,
  ManagedStatus,
  NodeAggregatorType,
  NodeAttributeName,
  NodeFilterKey,
  NodeFilterOperatorType,
  NodeTypeName,
  OperatingSystem,
  OpsItemEventFilterKey,
  OpsItemEventFilterOperator,
  OpsItemRelatedItemsFilterKey,
  OpsItemRelatedItemsFilterOperator,
  OpsItemStatus,
  ParameterTier,
  ParameterType,
  PatchAction,
  PatchComplianceLevel,
  PatchComplianceStatus,
  PlatformType,
  ResourceType,
  ResourceTypeForTagging,
  ReviewStatus,
  SignalType,
  StopType,
} from "./enums";

import {
  AlarmConfiguration,
  AlarmStateInformation,
  AssociationDescription,
  AssociationOverview,
  AssociationStatus,
  AttachmentsSource,
  CloudWatchOutputConfig,
  DocumentDescription,
  DocumentRequires,
  InstanceAssociationOutputLocation,
  InventoryFilter,
  InventoryGroup,
  LoggingInfo,
  MaintenanceWindowTaskInvocationParameters,
  MaintenanceWindowTaskParameterValueExpression,
  MetadataValue,
  NotificationConfig,
  OpsFilter,
  OpsItemDataValue,
  OpsItemNotification,
  OpsResultAttribute,
  PatchFilterGroup,
  PatchRuleGroup,
  PatchSource,
  RelatedOpsItem,
  ResourceDataSyncAwsOrganizationsSource,
  ResourceDataSyncS3Destination,
  ResourceDataSyncSource,
  ResultAttribute,
  Runbook,
  Tag,
  Target,
  TargetLocation,
} from "./models_0";

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
   *          <important>
   *             <p>For State Manager associations, this timestamp represents when the compliance status was
   *     captured and reported by the Systems Manager service, not when the underlying association was actually
   *     executed on the managed node. To track actual association execution times, use the <a>DescribeAssociationExecutionTargets</a> command or check the association execution
   *     history in the Systems Manager console.</p>
   *          </important>
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
   *          <important>
   *             <p>For State Manager associations, the <code>ExecutionTime</code> value represents when the
   *     compliance status was captured and aggregated by the Systems Manager service, not necessarily when the
   *     underlying association was executed on the managed node. State Manager updates compliance status
   *     for all associations on an instance whenever any association executes, which means multiple
   *     associations may show the same execution time even if they were executed at different
   *     times.</p>
   *          </important>
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Instance: (value: InstanceInfo) => T;
    _: (name: string, value: any) => T;
  }
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
   *                <p>Parameter names can't contain spaces. The service removes any spaces specified for
   *      the beginning or end of a parameter name. If the specified name for a parameter contains spaces
   *      between characters, the request fails with a <code>ValidationException</code> error.</p>
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
 * <p>The request body of the ResetServiceSetting API operation.</p>
 * @public
 */
export interface ResetServiceSettingRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the service setting to reset. The setting ID can be one of
   *    the following.</p>
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
 * @public
 */
export interface StartAccessRequestRequest {
  /**
   * <p>A brief description explaining why you are requesting access to the node.</p>
   * @public
   */
  Reason: string | undefined;

  /**
   * <p>The node you are requesting access to.</p>
   * @public
   */
  Targets: Target[] | undefined;

  /**
   * <p>Key-value pairs of metadata you want to assign to the access request.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface StartAccessRequestResponse {
  /**
   * <p>The ID of the access request.</p>
   * @public
   */
  AccessRequestId?: string | undefined;
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Automation: (value: AutomationExecutionInputs) => T;
    _: (name: string, value: any) => T;
  }
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
   *          <note>
   *             <p>The <code>IncludeChildOrganizationUnits</code> parameter is not supported by State
   *     Manager.</p>
   *          </note>
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
   *       circumstances. </p>
   *                <p>State value assignment for patch compliance:</p>
   *                <ul>
   *                   <li>
   *                      <p>If a package was installed before it was added to the rejected patches list, or is
   *         installed outside of Patch Manager afterward, it's considered noncompliant with the patch
   *         baseline and its status is reported as <code>INSTALLED_REJECTED</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>If an update attempts to install a dependency package that is now rejected by the
   *         baseline, when previous versions of the package were not rejected, the package being updated
   *         is reported as <code>MISSING</code> for <code>SCAN</code> operations and as
   *          <code>FAILED</code> for <code>INSTALL</code> operations.</p>
   *                   </li>
   *                </ul>
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
   * <p>Indicates the status to be assigned to security patches that are available but not approved
   *    because they don't meet the installation criteria specified in the patch baseline.</p>
   *          <p>Example scenario: Security patches that you might want installed can be skipped if you have
   *    specified a long period to wait after a patch is released before installation. If an update to
   *    the patch is released during your specified waiting period, the waiting period for installing the
   *    patch starts over. If the waiting period is too long, multiple versions of the patch could be
   *    released but never installed.</p>
   *          <p>Supported for Windows Server managed nodes only.</p>
   * @public
   */
  AvailableSecurityUpdatesComplianceStatus?: PatchComplianceStatus | undefined;

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
