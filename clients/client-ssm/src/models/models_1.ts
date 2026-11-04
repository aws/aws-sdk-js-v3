// smithy-typescript generated code
import type {
  AssociationComplianceSeverity,
  AssociationFilterKey,
  AssociationSyncCompliance,
  CloudConnectorFilterKey,
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
  SourceType,
  StopType,
  ValidationFindingCode,
  ValidationFindingScopeType,
  ValidationFindingType,
} from "./enums";
import type {
  AlarmConfiguration,
  AlarmStateInformation,
  AssociationDescription,
  AssociationOverview,
  AssociationStatus,
  AttachmentsSource,
  CloudConnectorConfiguration,
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
  Parameter,
  ParameterStringFilter,
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
 * @public
 */
export interface GetParametersByPathRequest {
  /**
   * The hierarchy for the parameter. Hierarchies start with a forward slash (/). The hierarchy is the parameter name except the last part of the parameter. For the API call to succeed, the last part of the parameter name can't be in the path. A parameter name hierarchy can have a maximum of 15 levels. Here is an example of a hierarchy: `/Finance/Prod/IAD/WinServ2016/license33`
   *
   * @public
   */
  Path: string | undefined;

  /**
   * Retrieve all parameters within a hierarchy.
   *
   * > **Important:** If a user has access to a path, then the user can access all levels of that path. For example, if a user has permission to access path `/a`, then the user can also access `/a/b`. Even if a user has explicitly been denied access in IAM for parameter `/a/b`, they can still call the GetParametersByPath API operation recursively for `/a` and view `/a/b`.
   *
   * @public
   */
  Recursive?: boolean | undefined;

  /**
   * Filters to limit the request results.
   *
   * > **Note:**
   * >
   * > The following `Key` values are supported for `GetParametersByPath`: `Type`, `KeyId`, and `Label`.
   * >
   * > The following `Key` values aren't supported for `GetParametersByPath`: `tag`, `DataType`, `Name`, `Path`, and `Tier`.
   *
   * @public
   */
  ParameterFilters?: ParameterStringFilter[] | undefined;

  /**
   * Retrieve all parameters in a hierarchy with their value decrypted.
   *
   * @public
   */
  WithDecryption?: boolean | undefined;

  /**
   * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token to start the list. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetParametersByPathResult {
  /**
   * A list of parameters found in the specified hierarchy.
   *
   * @public
   */
  Parameters?: Parameter[] | undefined;

  /**
   * The token for the next set of items to return. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetPatchBaselineRequest {
  /**
   * The ID of the patch baseline to retrieve.
   *
   * > **Note:** To retrieve information about an Amazon Web Services managed patch baseline, specify the full Amazon Resource Name (ARN) of the baseline. For example, for the baseline `AWS-AmazonLinuxDefaultPatchBaseline`, specify `arn:aws:ssm:us-east-2:733109147000:patchbaseline/pb-0e392de35e7c563b7` instead of `pb-0e392de35e7c563b7`.
   *
   * @public
   */
  BaselineId: string | undefined;
}

/**
 * @public
 */
export interface GetPatchBaselineResult {
  /**
   * The ID of the retrieved patch baseline.
   *
   * @public
   */
  BaselineId?: string | undefined;

  /**
   * The name of the patch baseline.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Returns the operating system specified for the patch baseline.
   *
   * @public
   */
  OperatingSystem?: OperatingSystem | undefined;

  /**
   * A set of global filters used to exclude patches from the baseline.
   *
   * @public
   */
  GlobalFilters?: PatchFilterGroup | undefined;

  /**
   * A set of rules used to include patches in the baseline.
   *
   * @public
   */
  ApprovalRules?: PatchRuleGroup | undefined;

  /**
   * A list of explicitly approved patches for the baseline.
   *
   * @public
   */
  ApprovedPatches?: string[] | undefined;

  /**
   * Returns the specified compliance severity level for approved patches in the patch baseline.
   *
   * @public
   */
  ApprovedPatchesComplianceLevel?: PatchComplianceLevel | undefined;

  /**
   * Indicates whether the list of approved patches includes non-security updates that should be applied to the managed nodes. The default value is `false`. Applies to Linux managed nodes only.
   *
   * @public
   */
  ApprovedPatchesEnableNonSecurity?: boolean | undefined;

  /**
   * A list of explicitly rejected patches for the baseline.
   *
   * @public
   */
  RejectedPatches?: string[] | undefined;

  /**
   * The action specified to take on patches included in the `RejectedPatches` list. A patch can be allowed only if it is a dependency of another package, or blocked entirely along with packages that include it as a dependency.
   *
   * @public
   */
  RejectedPatchesAction?: PatchAction | undefined;

  /**
   * Patch groups included in the patch baseline.
   *
   * @public
   */
  PatchGroups?: string[] | undefined;

  /**
   * The date the patch baseline was created.
   *
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * The date the patch baseline was last modified.
   *
   * @public
   */
  ModifiedDate?: Date | undefined;

  /**
   * A description of the patch baseline.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Information about the patches to use to update the managed nodes, including target operating systems and source repositories. Applies to Linux managed nodes only.
   *
   * @public
   */
  Sources?: PatchSource[] | undefined;

  /**
   * Indicates the compliance status of managed nodes for which security-related patches are available but were not approved. This preference is specified when the `CreatePatchBaseline` or `UpdatePatchBaseline` commands are run.
   *
   * Applies to Windows Server managed nodes only.
   *
   * @public
   */
  AvailableSecurityUpdatesComplianceStatus?: PatchComplianceStatus | undefined;
}

/**
 * @public
 */
export interface GetPatchBaselineForPatchGroupRequest {
  /**
   * The name of the patch group whose patch baseline should be retrieved.
   *
   * @public
   */
  PatchGroup: string | undefined;

  /**
   * Returns the operating system rule specified for patch groups using the patch baseline. The default value is `WINDOWS`.
   *
   * @public
   */
  OperatingSystem?: OperatingSystem | undefined;
}

/**
 * @public
 */
export interface GetPatchBaselineForPatchGroupResult {
  /**
   * The ID of the patch baseline that should be used for the patch group.
   *
   * @public
   */
  BaselineId?: string | undefined;

  /**
   * The name of the patch group.
   *
   * @public
   */
  PatchGroup?: string | undefined;

  /**
   * The operating system rule specified for patch groups using the patch baseline.
   *
   * @public
   */
  OperatingSystem?: OperatingSystem | undefined;
}

/**
 * @public
 */
export interface GetResourcePoliciesRequest {
  /**
   * Amazon Resource Name (ARN) of the resource to which the policies are attached.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * A token to start the list. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * A resource policy helps you to define the IAM entity (for example, an Amazon Web Services account) that can manage your Systems Manager resources. Currently, `OpsItemGroup` is the only resource that supports Systems Manager resource policies. The resource policy for `OpsItemGroup` enables Amazon Web Services accounts to view and interact with OpsCenter operational work items (OpsItems).
 *
 * @public
 */
export interface GetResourcePoliciesResponseEntry {
  /**
   * A policy ID.
   *
   * @public
   */
  PolicyId?: string | undefined;

  /**
   * ID of the current policy version. The hash helps to prevent a situation where multiple users attempt to overwrite a policy. You must provide this hash when updating or deleting a policy.
   *
   * @public
   */
  PolicyHash?: string | undefined;

  /**
   * A resource policy helps you to define the IAM entity (for example, an Amazon Web Services account) that can manage your Systems Manager resources. Currently, `OpsItemGroup` is the only resource that supports Systems Manager resource policies. The resource policy for `OpsItemGroup` enables Amazon Web Services accounts to view and interact with OpsCenter operational work items (OpsItems).
   *
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePoliciesResponse {
  /**
   * The token for the next set of items to return. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An array of the `Policy` object.
   *
   * @public
   */
  Policies?: GetResourcePoliciesResponseEntry[] | undefined;
}

/**
 * The request body of the GetServiceSetting API operation.
 *
 * @public
 */
export interface GetServiceSettingRequest {
  /**
   * The ID of the service setting to get. The setting ID can be one of the following.
   *
   * - `/ssm/appmanager/appmanager-enabled`
   * - `/ssm/automation/customer-script-log-destination`
   * - `/ssm/automation/customer-script-log-group-name`
   * - /ssm/automation/enable-adaptive-concurrency
   * - `/ssm/documents/console/public-sharing-permission`
   * - `/ssm/managed-instance/activation-tier`
   * - `/ssm/managed-instance/default-ec2-instance-management-role`
   * - `/ssm/opsinsights/opscenter`
   * - `/ssm/parameter-store/default-parameter-tier`
   * - `/ssm/parameter-store/high-throughput-enabled`
   *
   * @public
   */
  SettingId: string | undefined;
}

/**
 * The service setting data structure.
 *
 * `ServiceSetting` is an account-level setting for an Amazon Web Services service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an Amazon Web Services service charges money to the account based on feature or service usage, then the Amazon Web Services service team might create a default setting of "false". This means the user can't use this feature unless they change the setting to "true" and intentionally opt in for a paid feature.
 *
 * Services map a `SettingId` object to a setting value. Amazon Web Services services teams define the default value for a `SettingId`. You can't create a new `SettingId`, but you can overwrite the default value if you have the `ssm:UpdateServiceSetting` permission for the setting. Use the UpdateServiceSetting API operation to change the default setting. Or, use the ResetServiceSetting to change the value back to the original value defined by the Amazon Web Services service team.
 *
 * @public
 */
export interface ServiceSetting {
  /**
   * The ID of the service setting.
   *
   * @public
   */
  SettingId?: string | undefined;

  /**
   * The value of the service setting.
   *
   * @public
   */
  SettingValue?: string | undefined;

  /**
   * The last time the service setting was modified.
   *
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * The ARN of the last modified user. This field is populated only if the setting value was overwritten.
   *
   * @public
   */
  LastModifiedUser?: string | undefined;

  /**
   * The ARN of the service setting.
   *
   * @public
   */
  ARN?: string | undefined;

  /**
   * The status of the service setting. The value can be Default, Customized or PendingUpdate.
   *
   * - Default: The current setting uses a default value provisioned by the Amazon Web Services service team.
   * - Customized: The current setting use a custom value specified by the customer.
   * - PendingUpdate: The current setting uses a default or custom value, but a setting change request is pending approval.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * The query result body of the GetServiceSetting API operation.
 *
 * @public
 */
export interface GetServiceSettingResult {
  /**
   * The query result of the current service setting.
   *
   * @public
   */
  ServiceSetting?: ServiceSetting | undefined;
}

/**
 * @public
 */
export interface LabelParameterVersionRequest {
  /**
   * The parameter name on which you want to attach one or more labels.
   *
   * > **Note:** You can't enter the Amazon Resource Name (ARN) for a parameter, only the parameter name itself.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The specific version of the parameter on which you want to attach one or more labels. If no version is specified, the system attaches the label to the latest version.
   *
   * @public
   */
  ParameterVersion?: number | undefined;

  /**
   * One or more labels to attach to the specified parameter version.
   *
   * @public
   */
  Labels: string[] | undefined;
}

/**
 * @public
 */
export interface LabelParameterVersionResult {
  /**
   * The label doesn't meet the requirements. For information about parameter label requirements, see [Working with parameter labels](https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-paramstore-labels.html) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  InvalidLabels?: string[] | undefined;

  /**
   * The version of the parameter that has been labeled.
   *
   * @public
   */
  ParameterVersion?: number | undefined;
}

/**
 * Describes a filter.
 *
 * @public
 */
export interface AssociationFilter {
  /**
   * The name of the filter.
   *
   * > **Note:** `InstanceId` has been deprecated.
   *
   * @public
   */
  key: AssociationFilterKey | undefined;

  /**
   * The filter value.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface ListAssociationsRequest {
  /**
   * One or more filters. Use a filter to return a more specific list of results.
   *
   * > **Note:** Filtering associations using the `InstanceID` attribute only returns legacy associations created using the `InstanceID` attribute. Associations targeting the managed node that are part of the Target Attributes `ResourceGroup` or `Tags` aren't returned.
   *
   * @public
   */
  AssociationFilterList?: AssociationFilter[] | undefined;

  /**
   * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Describes an association of a Amazon Web Services Systems Manager document (SSM document) and a managed node.
 *
 * @public
 */
export interface Association {
  /**
   * The name of the SSM document.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The managed node ID.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The ID created by the system when you create an association. An association is a binding between a document and a set of targets with a schedule.
   *
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * The association version.
   *
   * @public
   */
  AssociationVersion?: string | undefined;

  /**
   * The version of the document used in the association. If you change a document version for a State Manager association, Systems Manager immediately runs the association unless you previously specifed the `apply-only-at-cron-interval` parameter.
   *
   * > **Important:** State Manager doesn't support running associations that use a new version of a document if that document is shared from another account. State Manager always runs the `default` version of a document if shared from another account, even though the Systems Manager console shows that a new version was processed. If you want to run an association using a new version of a document shared form another account, you must set the document version to `default`.
   *
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * The managed nodes targeted by the request to create an association. You can target all managed nodes in an Amazon Web Services account by specifying the `InstanceIds` key with a value of `*`.
   *
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * The date on which the association was last run.
   *
   * @public
   */
  LastExecutionDate?: Date | undefined;

  /**
   * Information about the association.
   *
   * @public
   */
  Overview?: AssociationOverview | undefined;

  /**
   * A cron expression that specifies a schedule when the association runs. The schedule runs in Coordinated Universal Time (UTC).
   *
   * @public
   */
  ScheduleExpression?: string | undefined;

  /**
   * The association name.
   *
   * @public
   */
  AssociationName?: string | undefined;

  /**
   * Number of days to wait after the scheduled day to run an association.
   *
   * @public
   */
  ScheduleOffset?: number | undefined;

  /**
   * The number of hours that an association can run on specified targets. After the resulting cutoff time passes, associations that are currently running are cancelled, and no pending executions are started on remaining targets.
   *
   * @public
   */
  Duration?: number | undefined;

  /**
   * A key-value mapping of document parameters to target resources. Both Targets and TargetMaps can't be specified together.
   *
   * @public
   */
  TargetMaps?: Record<string, string[]>[] | undefined;
}

/**
 * @public
 */
export interface ListAssociationsResult {
  /**
   * The associations.
   *
   * @public
   */
  Associations?: Association[] | undefined;

  /**
   * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssociationVersionsRequest {
  /**
   * The association ID for which you want to view all versions.
   *
   * @public
   */
  AssociationId: string | undefined;

  /**
   * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token to start the list. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Information about the association version.
 *
 * @public
 */
export interface AssociationVersionInfo {
  /**
   * The ID created by the system when the association was created.
   *
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * The association version.
   *
   * @public
   */
  AssociationVersion?: string | undefined;

  /**
   * The date the association version was created.
   *
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * The name specified when the association was created.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The version of an Amazon Web Services Systems Manager document (SSM document) used when the association version was created.
   *
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * Parameters specified when the association version was created.
   *
   * @public
   */
  Parameters?: Record<string, string[]> | undefined;

  /**
   * The targets specified for the association when the association version was created.
   *
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * The cron or rate schedule specified for the association when the association version was created.
   *
   * @public
   */
  ScheduleExpression?: string | undefined;

  /**
   * The location in Amazon S3 specified for the association when the association version was created.
   *
   * @public
   */
  OutputLocation?: InstanceAssociationOutputLocation | undefined;

  /**
   * The name specified for the association version when the association version was created.
   *
   * @public
   */
  AssociationName?: string | undefined;

  /**
   * The number of errors that are allowed before the system stops sending requests to run the association on additional targets. You can specify either an absolute number of errors, for example 10, or a percentage of the target set, for example 10%. If you specify 3, for example, the system stops sending requests when the fourth error is received. If you specify 0, then the system stops sending requests after the first error is returned. If you run an association on 50 managed nodes and set `MaxError` to 10%, then the system stops sending the request when the sixth error is received.
   *
   * Executions that are already running an association when `MaxErrors` is reached are allowed to complete, but some of these executions may fail as well. If you need to ensure that there won't be more than max-errors failed executions, set `MaxConcurrency` to 1 so that executions proceed one at a time.
   *
   * @public
   */
  MaxErrors?: string | undefined;

  /**
   * The maximum number of targets allowed to run the association at the same time. You can specify a number, for example 10, or a percentage of the target set, for example 10%. The default value is 100%, which means all targets run the association at the same time.
   *
   * If a new managed node starts and attempts to run an association while Systems Manager is running `MaxConcurrency` associations, the association is allowed to run. During the next association interval, the new managed node will process its association within the limit specified for `MaxConcurrency`.
   *
   * @public
   */
  MaxConcurrency?: string | undefined;

  /**
   * The severity level that is assigned to the association.
   *
   * @public
   */
  ComplianceSeverity?: AssociationComplianceSeverity | undefined;

  /**
   * The mode for generating association compliance. You can specify `AUTO` or `MANUAL`. In `AUTO` mode, the system uses the status of the association execution to determine the compliance status. If the association execution runs successfully, then the association is `COMPLIANT`. If the association execution doesn't run successfully, the association is `NON-COMPLIANT`.
   *
   * In `MANUAL` mode, you must specify the `AssociationId` as a parameter for the PutComplianceItems API operation. In this case, compliance data isn't managed by State Manager, a tool in Amazon Web Services Systems Manager. It is managed by your direct call to the PutComplianceItems API operation.
   *
   * By default, all associations use `AUTO` mode.
   *
   * @public
   */
  SyncCompliance?: AssociationSyncCompliance | undefined;

  /**
   * By default, when you create new associations, the system runs it immediately after it is created and then according to the schedule you specified. Specify this option if you don't want an association to run immediately after you create it. This parameter isn't supported for rate expressions.
   *
   * @public
   */
  ApplyOnlyAtCronInterval?: boolean | undefined;

  /**
   * The names or Amazon Resource Names (ARNs) of the Change Calendar type documents your associations are gated under. The associations for this version only run when that Change Calendar is open. For more information, see [Amazon Web Services Systems Manager Change Calendar](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-change-calendar) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  CalendarNames?: string[] | undefined;

  /**
   * The combination of Amazon Web Services Regions and Amazon Web Services accounts where you wanted to run the association when this association version was created.
   *
   * @public
   */
  TargetLocations?: TargetLocation[] | undefined;

  /**
   * Number of days to wait after the scheduled day to run an association.
   *
   * @public
   */
  ScheduleOffset?: number | undefined;

  /**
   * The number of hours that an association can run on specified targets. After the resulting cutoff time passes, associations that are currently running are cancelled, and no pending executions are started on remaining targets.
   *
   * @public
   */
  Duration?: number | undefined;

  /**
   * A key-value mapping of document parameters to target resources. Both Targets and TargetMaps can't be specified together.
   *
   * @public
   */
  TargetMaps?: Record<string, string[]>[] | undefined;

  /**
   * A role used by association to take actions on your behalf. State Manager will assume this role and call required APIs when dispatching configurations to nodes. If not specified, [service-linked role for Systems Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/using-service-linked-roles.html) will be used by default.
   *
   * @public
   */
  AssociationDispatchAssumeRole?: string | undefined;
}

/**
 * @public
 */
export interface ListAssociationVersionsResult {
  /**
   * Information about all versions of the association for the specified association ID.
   *
   * @public
   */
  AssociationVersions?: AssociationVersionInfo[] | undefined;

  /**
   * The token for the next set of items to return. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A filter for listing cloud connectors.
 *
 * @public
 */
export interface CloudConnectorFilter {
  /**
   * The name of the filter key.
   *
   * @public
   */
  FilterKey?: CloudConnectorFilterKey | undefined;

  /**
   * The filter values. Valid values for each filter key are as follows:
   *
   * - **SubscriptionId**
   *
   *   The Azure subscription ID to filter by. To return only tenant-level connectors, specify `NONE`.
   *
   * - **TenantId**
   *
   *   The Azure tenant ID to filter by. Filters the results to connectors that target the specified tenant.
   *
   * @public
   */
  FilterValues?: string[] | undefined;
}

/**
 * @public
 */
export interface ListCloudConnectorsRequest {
  /**
   * The maximum number of items to return for this call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * One or more filters to limit the cloud connectors returned in the response.
   *
   * @public
   */
  Filters?: CloudConnectorFilter[] | undefined;
}

/**
 * Summary information about a cloud connector.
 *
 * @public
 */
export interface CloudConnectorSummary {
  /**
   * The ID of the cloud connector.
   *
   * @public
   */
  CloudConnectorId?: string | undefined;

  /**
   * The friendly name of the cloud connector.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The description of the cloud connector.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ARN of the IAM role used by the cloud connector.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The date and time the cloud connector was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The date and time the cloud connector was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListCloudConnectorsResult {
  /**
   * A list of cloud connector summary objects.
   *
   * @public
   */
  CloudConnectors?: CloudConnectorSummary[] | undefined;

  /**
   * The token to use when requesting the next set of items.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Describes a command filter.
 *
 * > **Note:** A managed node ID can't be specified when a command status is `Pending` because the command hasn't run on the node yet.
 *
 * @public
 */
export interface CommandFilter {
  /**
   * The name of the filter.
   *
   * > **Note:** The `ExecutionStage` filter can't be used with the `ListCommandInvocations` operation, only with `ListCommands`.
   *
   * @public
   */
  key: CommandFilterKey | undefined;

  /**
   * The filter value. Valid values for each filter key are as follows:
   *
   * - **InvokedAfter**: Specify a timestamp to limit your results. For example, specify `2024-07-07T00:00:00Z` to see a list of command executions occurring July 7, 2021, and later.
   * - **InvokedBefore**: Specify a timestamp to limit your results. For example, specify `2024-07-07T00:00:00Z` to see a list of command executions from before July 7, 2021.
   * - **Status**: Specify a valid command status to see a list of all command executions with that status. The status choices depend on the API you call.
   *
   *   The status values you can specify for `ListCommands` are:
   *
   *   - `Pending`
   *   - `InProgress`
   *   - `Success`
   *   - `Cancelled`
   *   - `Failed`
   *   - `TimedOut` (this includes both Delivery and Execution time outs)
   *   - `AccessDenied`
   *   - `DeliveryTimedOut`
   *   - `ExecutionTimedOut`
   *   - `Incomplete`
   *   - `NoInstancesInTag`
   *   - `LimitExceeded`
   *
   *   The status values you can specify for `ListCommandInvocations` are:
   *
   *   - `Pending`
   *   - `InProgress`
   *   - `Delayed`
   *   - `Success`
   *   - `Cancelled`
   *   - `Failed`
   *   - `TimedOut` (this includes both Delivery and Execution time outs)
   *   - `AccessDenied`
   *   - `DeliveryTimedOut`
   *   - `ExecutionTimedOut`
   *   - `Undeliverable`
   *   - `InvalidPlatform`
   *   - `Terminated`
   * - **DocumentName**: Specify name of the Amazon Web Services Systems Manager document (SSM document) for which you want to see command execution results. For example, specify `AWS-RunPatchBaseline` to see command executions that used this SSM document to perform security patching operations on managed nodes.
   * - **ExecutionStage**: Specify one of the following values (`ListCommands` operations only):
   *
   *   - `Executing`: Returns a list of command executions that are currently still running.
   *   - `Complete`: Returns a list of command executions that have already completed.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface ListCommandInvocationsRequest {
  /**
   * (Optional) The invocations for a specific command ID.
   *
   * @public
   */
  CommandId?: string | undefined;

  /**
   * (Optional) The command execution details for a specific managed node ID.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * (Optional) The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * (Optional) The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * (Optional) One or more filters. Use a filter to return a more specific list of results.
   *
   * @public
   */
  Filters?: CommandFilter[] | undefined;

  /**
   * (Optional) If set this returns the response of the command executions and any command output. The default value is `false`.
   *
   * @public
   */
  Details?: boolean | undefined;
}

/**
 * Describes plugin details.
 *
 * @public
 */
export interface CommandPlugin {
  /**
   * The name of the plugin. Must be one of the following: `aws:updateAgent`, `aws:domainjoin`, `aws:applications`, `aws:runPowerShellScript`, `aws:psmodule`, `aws:cloudWatch`, `aws:runShellScript`, or `aws:updateSSMAgent`.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The status of this plugin. You can run a document with multiple plugins.
   *
   * @public
   */
  Status?: CommandPluginStatus | undefined;

  /**
   * A detailed status of the plugin execution. `StatusDetails` includes more information than Status because it includes states resulting from error and concurrency control parameters. StatusDetails can show different results than Status. For more information about these statuses, see [Understanding command statuses](https://docs.aws.amazon.com/systems-manager/latest/userguide/monitor-commands.html) in the *Amazon Web Services Systems Manager User Guide*. StatusDetails can be one of the following values:
   *
   * - Pending: The command hasn't been sent to the managed node.
   * - In Progress: The command has been sent to the managed node but hasn't reached a terminal state.
   * - Success: The execution of the command or plugin was successfully completed. This is a terminal state.
   * - Delivery Timed Out: The command wasn't delivered to the managed node before the delivery timeout expired. Delivery timeouts don't count against the parent command's `MaxErrors` limit, but they do contribute to whether the parent command status is Success or Incomplete. This is a terminal state.
   * - Execution Timed Out: Command execution started on the managed node, but the execution wasn't complete before the execution timeout expired. Execution timeouts count against the `MaxErrors` limit of the parent command. This is a terminal state.
   * - Failed: The command wasn't successful on the managed node. For a plugin, this indicates that the result code wasn't zero. For a command invocation, this indicates that the result code for one or more plugins wasn't zero. Invocation failures count against the MaxErrors limit of the parent command. This is a terminal state.
   * - Cancelled: The command was terminated before it was completed. This is a terminal state.
   * - Undeliverable: The command can't be delivered to the managed node. The managed node might not exist, or it might not be responding. Undeliverable invocations don't count against the parent command's MaxErrors limit, and they don't contribute to whether the parent command status is Success or Incomplete. This is a terminal state.
   * - Terminated: The parent command exceeded its MaxErrors limit and subsequent command invocations were canceled by the system. This is a terminal state.
   *
   * @public
   */
  StatusDetails?: string | undefined;

  /**
   * A numeric response code generated after running the plugin.
   *
   * @public
   */
  ResponseCode?: number | undefined;

  /**
   * The time the plugin started running.
   *
   * @public
   */
  ResponseStartDateTime?: Date | undefined;

  /**
   * The time the plugin stopped running. Could stop prematurely if, for example, a cancel command was sent.
   *
   * @public
   */
  ResponseFinishDateTime?: Date | undefined;

  /**
   * Output of the plugin execution.
   *
   * @public
   */
  Output?: string | undefined;

  /**
   * The URL for the complete text written by the plugin to stdout in Amazon S3. If the S3 bucket for the command wasn't specified, then this string is empty.
   *
   * @public
   */
  StandardOutputUrl?: string | undefined;

  /**
   * The URL for the complete text written by the plugin to stderr. If execution isn't yet complete, then this string is empty.
   *
   * @public
   */
  StandardErrorUrl?: string | undefined;

  /**
   * (Deprecated) You can no longer specify this parameter. The system ignores it. Instead, Amazon Web Services Systems Manager automatically determines the S3 bucket region.
   *
   * @public
   */
  OutputS3Region?: string | undefined;

  /**
   * The S3 bucket where the responses to the command executions should be stored. This was requested when issuing the command. For example, in the following response:
   *
   * `amzn-s3-demo-bucket/my-prefix/i-02573cafcfEXAMPLE/awsrunShellScript`
   *
   * `amzn-s3-demo-bucket` is the name of the S3 bucket;
   *
   * `my-prefix` is the name of the S3 prefix;
   *
   * `i-02573cafcfEXAMPLE` is the managed node ID;
   *
   * `awsrunShellScript` is the name of the plugin.
   *
   * @public
   */
  OutputS3BucketName?: string | undefined;

  /**
   * The S3 directory path inside the bucket where the responses to the command executions should be stored. This was requested when issuing the command. For example, in the following response:
   *
   * `amzn-s3-demo-bucket/my-prefix/i-02573cafcfEXAMPLE/awsrunShellScript`
   *
   * `amzn-s3-demo-bucket` is the name of the S3 bucket;
   *
   * `my-prefix` is the name of the S3 prefix;
   *
   * `i-02573cafcfEXAMPLE` is the managed node ID;
   *
   * `awsrunShellScript` is the name of the plugin.
   *
   * @public
   */
  OutputS3KeyPrefix?: string | undefined;
}

/**
 * An invocation is a copy of a command sent to a specific managed node. A command can apply to one or more managed nodes. A command invocation applies to one managed node. For example, if a user runs `SendCommand` against three managed nodes, then a command invocation is created for each requested managed node ID. A command invocation returns status and detail information about a command you ran.
 *
 * @public
 */
export interface CommandInvocation {
  /**
   * The command against which this invocation was requested.
   *
   * @public
   */
  CommandId?: string | undefined;

  /**
   * The managed node ID in which this invocation was requested.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The fully qualified host name of the managed node.
   *
   * @public
   */
  InstanceName?: string | undefined;

  /**
   * User-specified information about the command, such as a brief description of what the command should do.
   *
   * @public
   */
  Comment?: string | undefined;

  /**
   * The document name that was requested for execution.
   *
   * @public
   */
  DocumentName?: string | undefined;

  /**
   * The Systems Manager document (SSM document) version.
   *
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * The time and date the request was sent to this managed node.
   *
   * @public
   */
  RequestedDateTime?: Date | undefined;

  /**
   * Whether or not the invocation succeeded, failed, or is pending.
   *
   * @public
   */
  Status?: CommandInvocationStatus | undefined;

  /**
   * A detailed status of the command execution for each invocation (each managed node targeted by the command). StatusDetails includes more information than Status because it includes states resulting from error and concurrency control parameters. StatusDetails can show different results than Status. For more information about these statuses, see [Understanding command statuses](https://docs.aws.amazon.com/systems-manager/latest/userguide/monitor-commands.html) in the *Amazon Web Services Systems Manager User Guide*. StatusDetails can be one of the following values:
   *
   * - Pending: The command hasn't been sent to the managed node.
   * - In Progress: The command has been sent to the managed node but hasn't reached a terminal state.
   * - Success: The execution of the command or plugin was successfully completed. This is a terminal state.
   * - Delivery Timed Out: The command wasn't delivered to the managed node before the delivery timeout expired. Delivery timeouts don't count against the parent command's `MaxErrors` limit, but they do contribute to whether the parent command status is Success or Incomplete. This is a terminal state.
   * - Execution Timed Out: Command execution started on the managed node, but the execution wasn't complete before the execution timeout expired. Execution timeouts count against the `MaxErrors` limit of the parent command. This is a terminal state.
   * - Failed: The command wasn't successful on the managed node. For a plugin, this indicates that the result code wasn't zero. For a command invocation, this indicates that the result code for one or more plugins wasn't zero. Invocation failures count against the `MaxErrors` limit of the parent command. This is a terminal state.
   * - Cancelled: The command was terminated before it was completed. This is a terminal state.
   * - Undeliverable: The command can't be delivered to the managed node. The managed node might not exist or might not be responding. Undeliverable invocations don't count against the parent command's MaxErrors limit and don't contribute to whether the parent command status is Success or Incomplete. This is a terminal state.
   * - Terminated: The parent command exceeded its MaxErrors limit and subsequent command invocations were canceled by the system. This is a terminal state.
   * - Delayed: The system attempted to send the command to the managed node but wasn't successful. The system retries again.
   *
   * @public
   */
  StatusDetails?: string | undefined;

  /**
   * Gets the trace output sent by the agent.
   *
   * @public
   */
  TraceOutput?: string | undefined;

  /**
   * The URL to the plugin's StdOut file in Amazon Simple Storage Service (Amazon S3), if the S3 bucket was defined for the parent command. For an invocation, `StandardOutputUrl` is populated if there is just one plugin defined for the command, and the S3 bucket was defined for the command.
   *
   * @public
   */
  StandardOutputUrl?: string | undefined;

  /**
   * The URL to the plugin's StdErr file in Amazon Simple Storage Service (Amazon S3), if the S3 bucket was defined for the parent command. For an invocation, `StandardErrorUrl` is populated if there is just one plugin defined for the command, and the S3 bucket was defined for the command.
   *
   * @public
   */
  StandardErrorUrl?: string | undefined;

  /**
   * Plugins processed by the command.
   *
   * @public
   */
  CommandPlugins?: CommandPlugin[] | undefined;

  /**
   * The Identity and Access Management (IAM) service role that Run Command, a tool in Amazon Web Services Systems Manager, uses to act on your behalf when sending notifications about command status changes on a per managed node basis.
   *
   * @public
   */
  ServiceRole?: string | undefined;

  /**
   * Configurations for sending notifications about command status changes on a per managed node basis.
   *
   * @public
   */
  NotificationConfig?: NotificationConfig | undefined;

  /**
   * Amazon CloudWatch Logs information where you want Amazon Web Services Systems Manager to send the command output.
   *
   * @public
   */
  CloudWatchOutputConfig?: CloudWatchOutputConfig | undefined;
}

/**
 * @public
 */
export interface ListCommandInvocationsResult {
  /**
   * (Optional) A list of all invocations.
   *
   * @public
   */
  CommandInvocations?: CommandInvocation[] | undefined;

  /**
   * (Optional) The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCommandsRequest {
  /**
   * (Optional) If provided, lists only the specified command.
   *
   * @public
   */
  CommandId?: string | undefined;

  /**
   * (Optional) Lists commands issued against this managed node ID.
   *
   * > **Note:** You can't specify a managed node ID in the same command that you specify `Status` = `Pending`. This is because the command hasn't reached the managed node yet.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * (Optional) The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * (Optional) The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * (Optional) One or more filters. Use a filter to return a more specific list of results.
   *
   * @public
   */
  Filters?: CommandFilter[] | undefined;
}

/**
 * Describes a command request.
 *
 * @public
 */
export interface Command {
  /**
   * A unique identifier for this command.
   *
   * @public
   */
  CommandId?: string | undefined;

  /**
   * The name of the document requested for execution.
   *
   * @public
   */
  DocumentName?: string | undefined;

  /**
   * The Systems Manager document (SSM document) version.
   *
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * User-specified information about the command, such as a brief description of what the command should do.
   *
   * @public
   */
  Comment?: string | undefined;

  /**
   * If a command expires, it changes status to `DeliveryTimedOut` for all invocations that have the status `InProgress`, `Pending`, or `Delayed`. `ExpiresAfter` is calculated based on the total timeout for the overall command. For more information, see [Understanding command timeout values](https://docs.aws.amazon.com/systems-manager/latest/userguide/monitor-commands.html?icmpid=docs_ec2_console#monitor-about-status-timeouts) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  ExpiresAfter?: Date | undefined;

  /**
   * The parameter values to be inserted in the document when running the command.
   *
   * @public
   */
  Parameters?: Record<string, string[]> | undefined;

  /**
   * The managed node IDs against which this command was requested.
   *
   * @public
   */
  InstanceIds?: string[] | undefined;

  /**
   * An array of search criteria that targets managed nodes using a Key,Value combination that you specify. Targets is required if you don't provide one or more managed node IDs in the call.
   *
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * The date and time the command was requested.
   *
   * @public
   */
  RequestedDateTime?: Date | undefined;

  /**
   * The status of the command.
   *
   * @public
   */
  Status?: CommandStatus | undefined;

  /**
   * A detailed status of the command execution. `StatusDetails` includes more information than `Status` because it includes states resulting from error and concurrency control parameters. `StatusDetails` can show different results than Status. For more information about these statuses, see [Understanding command statuses](https://docs.aws.amazon.com/systems-manager/latest/userguide/monitor-commands.html) in the *Amazon Web Services Systems Manager User Guide*. StatusDetails can be one of the following values:
   *
   * - Pending: The command hasn't been sent to any managed nodes.
   * - In Progress: The command has been sent to at least one managed node but hasn't reached a final state on all managed nodes.
   * - Success: The command successfully ran on all invocations. This is a terminal state.
   * - Delivery Timed Out: The value of MaxErrors or more command invocations shows a status of Delivery Timed Out. This is a terminal state.
   * - Execution Timed Out: The value of MaxErrors or more command invocations shows a status of Execution Timed Out. This is a terminal state.
   * - Failed: The value of MaxErrors or more command invocations shows a status of Failed. This is a terminal state.
   * - Incomplete: The command was attempted on all managed nodes and one or more invocations doesn't have a value of Success but not enough invocations failed for the status to be Failed. This is a terminal state.
   * - Cancelled: The command was terminated before it was completed. This is a terminal state.
   * - Rate Exceeded: The number of managed nodes targeted by the command exceeded the account limit for pending invocations. The system has canceled the command before running it on any managed node. This is a terminal state.
   * - Delayed: The system attempted to send the command to the managed node but wasn't successful. The system retries again.
   *
   * @public
   */
  StatusDetails?: string | undefined;

  /**
   * (Deprecated) You can no longer specify this parameter. The system ignores it. Instead, Systems Manager automatically determines the Amazon Web Services Region of the S3 bucket.
   *
   * @public
   */
  OutputS3Region?: string | undefined;

  /**
   * The S3 bucket where the responses to the command executions should be stored. This was requested when issuing the command.
   *
   * @public
   */
  OutputS3BucketName?: string | undefined;

  /**
   * The S3 directory path inside the bucket where the responses to the command executions should be stored. This was requested when issuing the command.
   *
   * @public
   */
  OutputS3KeyPrefix?: string | undefined;

  /**
   * The maximum number of managed nodes that are allowed to run the command at the same time. You can specify a number of managed nodes, such as 10, or a percentage of nodes, such as 10%. The default value is 50. For more information about how to use `MaxConcurrency`, see [Amazon Web Services Systems Manager Run Command](https://docs.aws.amazon.com/systems-manager/latest/userguide/run-command.html) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  MaxConcurrency?: string | undefined;

  /**
   * The maximum number of errors allowed before the system stops sending the command to additional targets. You can specify a number of errors, such as 10, or a percentage or errors, such as 10%. The default value is `0`. For more information about how to use `MaxErrors`, see [Amazon Web Services Systems Manager Run Command](https://docs.aws.amazon.com/systems-manager/latest/userguide/run-command.html) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  MaxErrors?: string | undefined;

  /**
   * The number of targets for the command.
   *
   * @public
   */
  TargetCount?: number | undefined;

  /**
   * The number of targets for which the command invocation reached a terminal state. Terminal states include the following: Success, Failed, Execution Timed Out, Delivery Timed Out, Cancelled, Terminated, or Undeliverable.
   *
   * @public
   */
  CompletedCount?: number | undefined;

  /**
   * The number of targets for which the status is Failed or Execution Timed Out.
   *
   * @public
   */
  ErrorCount?: number | undefined;

  /**
   * The number of targets for which the status is Delivery Timed Out.
   *
   * @public
   */
  DeliveryTimedOutCount?: number | undefined;

  /**
   * The Identity and Access Management (IAM) service role that Run Command, a tool in Amazon Web Services Systems Manager, uses to act on your behalf when sending notifications about command status changes.
   *
   * @public
   */
  ServiceRole?: string | undefined;

  /**
   * Configurations for sending notifications about command status changes.
   *
   * @public
   */
  NotificationConfig?: NotificationConfig | undefined;

  /**
   * Amazon CloudWatch Logs information where you want Amazon Web Services Systems Manager to send the command output.
   *
   * @public
   */
  CloudWatchOutputConfig?: CloudWatchOutputConfig | undefined;

  /**
   * The `TimeoutSeconds` value specified for a command.
   *
   * @public
   */
  TimeoutSeconds?: number | undefined;

  /**
   * The details for the CloudWatch alarm applied to your command.
   *
   * @public
   */
  AlarmConfiguration?: AlarmConfiguration | undefined;

  /**
   * The CloudWatch alarm that was invoked by the command.
   *
   * @public
   */
  TriggeredAlarms?: AlarmStateInformation[] | undefined;
}

/**
 * @public
 */
export interface ListCommandsResult {
  /**
   * (Optional) The list of commands requested by the user.
   *
   * @public
   */
  Commands?: Command[] | undefined;

  /**
   * (Optional) The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * One or more filters. Use a filter to return a more specific list of results.
 *
 * @public
 */
export interface ComplianceStringFilter {
  /**
   * The name of the filter.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The value for which to search.
   *
   * @public
   */
  Values?: string[] | undefined;

  /**
   * The type of comparison that should be performed for the value: Equal, NotEqual, BeginWith, LessThan, or GreaterThan.
   *
   * @public
   */
  Type?: ComplianceQueryOperatorType | undefined;
}

/**
 * @public
 */
export interface ListComplianceItemsRequest {
  /**
   * One or more compliance filters. Use a filter to return a more specific list of results.
   *
   * @public
   */
  Filters?: ComplianceStringFilter[] | undefined;

  /**
   * The ID for the resources from which to get compliance information. Currently, you can only specify one resource ID.
   *
   * @public
   */
  ResourceIds?: string[] | undefined;

  /**
   * The type of resource from which to get compliance information. Currently, the only supported resource type is `ManagedInstance`.
   *
   * @public
   */
  ResourceTypes?: string[] | undefined;

  /**
   * A token to start the list. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * A summary of the call execution that includes an execution ID, the type of execution (for example, `Command`), and the date/time of the execution using a datetime object that is saved in the following format: `yyyy-MM-dd'T'HH:mm:ss'Z'`
 *
 * @public
 */
export interface ComplianceExecutionSummary {
  /**
   * The time the execution ran as a datetime object that is saved in the following format: `yyyy-MM-dd'T'HH:mm:ss'Z'`
   *
   * > **Important:** For State Manager associations, this timestamp represents when the compliance status was captured and reported by the Systems Manager service, not when the underlying association was actually executed on the managed node. To track actual association execution times, use the DescribeAssociationExecutionTargets command or check the association execution history in the Systems Manager console.
   *
   * @public
   */
  ExecutionTime: Date | undefined;

  /**
   * An ID created by the system when `PutComplianceItems` was called. For example, `CommandID` is a valid execution ID. You can use this ID in subsequent calls.
   *
   * @public
   */
  ExecutionId?: string | undefined;

  /**
   * The type of execution. For example, `Command` is a valid execution type.
   *
   * @public
   */
  ExecutionType?: string | undefined;
}

/**
 * Information about the compliance as defined by the resource type. For example, for a patch resource type, `Items` includes information about the PatchSeverity, Classification, and so on.
 *
 * @public
 */
export interface ComplianceItem {
  /**
   * The compliance type. For example, Association (for a State Manager association), Patch, or Custom:`string` are all valid compliance types.
   *
   * @public
   */
  ComplianceType?: string | undefined;

  /**
   * The type of resource. `ManagedInstance` is currently the only supported resource type.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * An ID for the resource. For a managed node, this is the node ID.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * An ID for the compliance item. For example, if the compliance item is a Windows patch, the ID could be the number of the KB article; for example: KB4010320.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * A title for the compliance item. For example, if the compliance item is a Windows patch, the title could be the title of the KB article for the patch; for example: Security Update for Active Directory Federation Services.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * The status of the compliance item. An item is either COMPLIANT, NON_COMPLIANT, or an empty string (for Windows patches that aren't applicable).
   *
   * @public
   */
  Status?: ComplianceStatus | undefined;

  /**
   * The severity of the compliance status. Severity can be one of the following: Critical, High, Medium, Low, Informational, Unspecified.
   *
   * @public
   */
  Severity?: ComplianceSeverity | undefined;

  /**
   * A summary for the compliance item. The summary includes an execution ID, the execution type (for example, command), and the execution time.
   *
   * > **Important:** For State Manager associations, the `ExecutionTime` value represents when the compliance status was captured and aggregated by the Systems Manager service, not necessarily when the underlying association was executed on the managed node. State Manager updates compliance status for all associations on an instance whenever any association executes, which means multiple associations may show the same execution time even if they were executed at different times.
   *
   * @public
   */
  ExecutionSummary?: ComplianceExecutionSummary | undefined;

  /**
   * A "Key": "Value" tag combination for the compliance item.
   *
   * @public
   */
  Details?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListComplianceItemsResult {
  /**
   * A list of compliance information for the specified resource ID.
   *
   * @public
   */
  ComplianceItems?: ComplianceItem[] | undefined;

  /**
   * The token for the next set of items to return. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListComplianceSummariesRequest {
  /**
   * One or more compliance or inventory filters. Use a filter to return a more specific list of results.
   *
   * @public
   */
  Filters?: ComplianceStringFilter[] | undefined;

  /**
   * A token to start the list. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for this call. Currently, you can specify null or 50. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * The number of managed nodes found for each patch severity level defined in the request filter.
 *
 * @public
 */
export interface SeveritySummary {
  /**
   * The total number of resources or compliance items that have a severity level of `Critical`. Critical severity is determined by the organization that published the compliance items.
   *
   * @public
   */
  CriticalCount?: number | undefined;

  /**
   * The total number of resources or compliance items that have a severity level of high. High severity is determined by the organization that published the compliance items.
   *
   * @public
   */
  HighCount?: number | undefined;

  /**
   * The total number of resources or compliance items that have a severity level of medium. Medium severity is determined by the organization that published the compliance items.
   *
   * @public
   */
  MediumCount?: number | undefined;

  /**
   * The total number of resources or compliance items that have a severity level of low. Low severity is determined by the organization that published the compliance items.
   *
   * @public
   */
  LowCount?: number | undefined;

  /**
   * The total number of resources or compliance items that have a severity level of informational. Informational severity is determined by the organization that published the compliance items.
   *
   * @public
   */
  InformationalCount?: number | undefined;

  /**
   * The total number of resources or compliance items that have a severity level of unspecified. Unspecified severity is determined by the organization that published the compliance items.
   *
   * @public
   */
  UnspecifiedCount?: number | undefined;
}

/**
 * A summary of resources that are compliant. The summary is organized according to the resource count for each compliance type.
 *
 * @public
 */
export interface CompliantSummary {
  /**
   * The total number of resources that are compliant.
   *
   * @public
   */
  CompliantCount?: number | undefined;

  /**
   * A summary of the compliance severity by compliance type.
   *
   * @public
   */
  SeveritySummary?: SeveritySummary | undefined;
}

/**
 * A summary of resources that aren't compliant. The summary is organized according to resource type.
 *
 * @public
 */
export interface NonCompliantSummary {
  /**
   * The total number of compliance items that aren't compliant.
   *
   * @public
   */
  NonCompliantCount?: number | undefined;

  /**
   * A summary of the non-compliance severity by compliance type
   *
   * @public
   */
  SeveritySummary?: SeveritySummary | undefined;
}

/**
 * A summary of compliance information by compliance type.
 *
 * @public
 */
export interface ComplianceSummaryItem {
  /**
   * The type of compliance item. For example, the compliance type can be Association, Patch, or Custom:string.
   *
   * @public
   */
  ComplianceType?: string | undefined;

  /**
   * A list of COMPLIANT items for the specified compliance type.
   *
   * @public
   */
  CompliantSummary?: CompliantSummary | undefined;

  /**
   * A list of NON_COMPLIANT items for the specified compliance type.
   *
   * @public
   */
  NonCompliantSummary?: NonCompliantSummary | undefined;
}

/**
 * @public
 */
export interface ListComplianceSummariesResult {
  /**
   * A list of compliant and non-compliant summary counts based on compliance types. For example, this call returns State Manager associations, patches, or custom compliance types according to the filter criteria that you specified.
   *
   * @public
   */
  ComplianceSummaryItems?: ComplianceSummaryItem[] | undefined;

  /**
   * The token for the next set of items to return. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDocumentMetadataHistoryRequest {
  /**
   * The name of the change template.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The version of the change template.
   *
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * The type of data for which details are being requested. Currently, the only supported value is `DocumentReviews`.
   *
   * @public
   */
  Metadata: DocumentMetadataEnum | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Information about comments added to a document review request.
 *
 * @public
 */
export interface DocumentReviewCommentSource {
  /**
   * The type of information added to a review request. Currently, only the value `Comment` is supported.
   *
   * @public
   */
  Type?: DocumentReviewCommentType | undefined;

  /**
   * The content of a comment entered by a user who requests a review of a new document version, or who reviews the new version.
   *
   * @public
   */
  Content?: string | undefined;
}

/**
 * Information about a reviewer's response to a document review request.
 *
 * @public
 */
export interface DocumentReviewerResponseSource {
  /**
   * The date and time that a reviewer entered a response to a document review request.
   *
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * The date and time that a reviewer last updated a response to a document review request.
   *
   * @public
   */
  UpdatedTime?: Date | undefined;

  /**
   * The current review status of a new custom SSM document created by a member of your organization, or of the latest version of an existing SSM document.
   *
   * Only one version of a document can be in the APPROVED state at a time. When a new version is approved, the status of the previous version changes to REJECTED.
   *
   * Only one version of a document can be in review, or PENDING, at a time.
   *
   * @public
   */
  ReviewStatus?: ReviewStatus | undefined;

  /**
   * The comment entered by a reviewer as part of their document review response.
   *
   * @public
   */
  Comment?: DocumentReviewCommentSource[] | undefined;

  /**
   * The user in your organization assigned to review a document request.
   *
   * @public
   */
  Reviewer?: string | undefined;
}

/**
 * Details about the response to a document review request.
 *
 * @public
 */
export interface DocumentMetadataResponseInfo {
  /**
   * Details about a reviewer's response to a document review request.
   *
   * @public
   */
  ReviewerResponse?: DocumentReviewerResponseSource[] | undefined;
}

/**
 * @public
 */
export interface ListDocumentMetadataHistoryResponse {
  /**
   * The name of the change template.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The version of the change template.
   *
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * The user ID of the person in the organization who requested the review of the change template.
   *
   * @public
   */
  Author?: string | undefined;

  /**
   * Information about the response to the change template approval request.
   *
   * @public
   */
  Metadata?: DocumentMetadataResponseInfo | undefined;

  /**
   * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * This data type is deprecated. Instead, use DocumentKeyValuesFilter.
 *
 * @public
 */
export interface DocumentFilter {
  /**
   * The name of the filter.
   *
   * @public
   */
  key: DocumentFilterKey | undefined;

  /**
   * The value of the filter.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * One or more filters. Use a filter to return a more specific list of documents.
 *
 * For keys, you can specify one or more tags that have been applied to a document.
 *
 * You can also use Amazon Web Services-provided keys, some of which have specific allowed values. These keys and their associated values are as follows:
 *
 * - **DocumentType**
 *
 *   - `ApplicationConfiguration`
 *   - `ApplicationConfigurationSchema`
 *   - `Automation`
 *   - `ChangeCalendar`
 *   - `Command`
 *   - `Package`
 *   - `Policy`
 *   - `Session`
 *
 * - **Owner**
 *
 *   Note that only one `Owner` can be specified in a request. For example: `Key=Owner,Values=Self`.
 *
 *   - `Amazon`
 *   - `Private`
 *   - `Public`
 *   - `Self`
 *   - `ThirdParty`
 *
 * - **PlatformTypes**
 *
 *   - `Linux`
 *   - `Windows`
 *
 * `Name` is another Amazon Web Services-provided key. If you use `Name` as a key, you can use a name prefix to return a list of documents. For example, in the Amazon Web Services CLI, to return a list of all documents that begin with `Te`, run the following command:
 *
 * `aws ssm list-documents --filters Key=Name,Values=Te`
 *
 * You can also use the `TargetType` Amazon Web Services-provided key. For a list of valid resource type values that can be used with this key, see [Amazon Web Services resource and property types reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html) in the *CloudFormation User Guide*.
 *
 * If you specify more than two keys, only documents that are identified by all the tags are returned in the results. If you specify more than two values for a key, documents that are identified by any of the values are returned in the results.
 *
 * To specify a custom key-value pair, use the format `Key=tag:tagName,Values=valueName`.
 *
 * For example, if you created a key called region and are using the Amazon Web Services CLI to call the `list-documents` command:
 *
 * `aws ssm list-documents --filters Key=tag:region,Values=east,west Key=Owner,Values=Self`
 *
 * @public
 */
export interface DocumentKeyValuesFilter {
  /**
   * The name of the filter key.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The value for the filter key.
   *
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * @public
 */
export interface ListDocumentsRequest {
  /**
   * This data type is deprecated. Instead, use `Filters`.
   *
   * @public
   */
  DocumentFilterList?: DocumentFilter[] | undefined;

  /**
   * One or more `DocumentKeyValuesFilter` objects. Use a filter to return a more specific list of results. For keys, you can specify one or more key-value pair tags that have been applied to a document. Other valid keys include `Owner`, `Name`, `PlatformTypes`, `DocumentType`, and `TargetType`. For example, to return documents you own use `Key=Owner,Values=Self`. To specify a custom key-value pair, use the format `Key=tag:tagName,Values=valueName`.
   *
   * > **Note:** This API operation only supports filtering documents by using a single tag key and one or more tag values. For example: `Key=tag:tagName,Values=valueName1,valueName2`
   *
   * @public
   */
  Filters?: DocumentKeyValuesFilter[] | undefined;

  /**
   * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Describes the name of a SSM document.
 *
 * @public
 */
export interface DocumentIdentifier {
  /**
   * The name of the SSM document.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The date the SSM document was created.
   *
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * An optional field where you can specify a friendly name for the SSM document. This value can differ for each version of the document. If you want to update this value, see UpdateDocument.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The Amazon Web Services user that created the document.
   *
   * @public
   */
  Owner?: string | undefined;

  /**
   * An optional field specifying the version of the artifact associated with the document. For example, 12.6. This value is unique across all versions of a document, and can't be changed.
   *
   * @public
   */
  VersionName?: string | undefined;

  /**
   * The operating system platform.
   *
   * @public
   */
  PlatformTypes?: PlatformType[] | undefined;

  /**
   * The document version.
   *
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * The document type.
   *
   * @public
   */
  DocumentType?: DocumentType | undefined;

  /**
   * The schema version.
   *
   * @public
   */
  SchemaVersion?: string | undefined;

  /**
   * The document format, either JSON or YAML.
   *
   * @public
   */
  DocumentFormat?: DocumentFormat | undefined;

  /**
   * The target type which defines the kinds of resources the document can run on. For example, `/AWS::EC2::Instance`. For a list of valid resource types, see [Amazon Web Services resource and property types reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html) in the *CloudFormation User Guide*.
   *
   * @public
   */
  TargetType?: string | undefined;

  /**
   * The tags, or metadata, that have been applied to the document.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * A list of SSM documents required by a document. For example, an `ApplicationConfiguration` document requires an `ApplicationConfigurationSchema` document.
   *
   * @public
   */
  Requires?: DocumentRequires[] | undefined;

  /**
   * The current status of a document review.
   *
   * @public
   */
  ReviewStatus?: ReviewStatus | undefined;

  /**
   * The user in your organization who created the document.
   *
   * @public
   */
  Author?: string | undefined;
}

/**
 * @public
 */
export interface ListDocumentsResult {
  /**
   * The names of the SSM documents.
   *
   * @public
   */
  DocumentIdentifiers?: DocumentIdentifier[] | undefined;

  /**
   * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDocumentVersionsRequest {
  /**
   * The name of the document. You can specify an Amazon Resource Name (ARN).
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Version information about the document.
 *
 * @public
 */
export interface DocumentVersionInfo {
  /**
   * The document name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The friendly name of the SSM document. This value can differ for each version of the document. If you want to update this value, see UpdateDocument.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The document version.
   *
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * The version of the artifact associated with the document. For example, 12.6. This value is unique across all versions of a document, and can't be changed.
   *
   * @public
   */
  VersionName?: string | undefined;

  /**
   * The date the document was created.
   *
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * An identifier for the default version of the document.
   *
   * @public
   */
  IsDefaultVersion?: boolean | undefined;

  /**
   * The document format, either JSON or YAML.
   *
   * @public
   */
  DocumentFormat?: DocumentFormat | undefined;

  /**
   * The status of the SSM document, such as `Creating`, `Active`, `Failed`, and `Deleting`.
   *
   * @public
   */
  Status?: DocumentStatus | undefined;

  /**
   * A message returned by Amazon Web Services Systems Manager that explains the `Status` value. For example, a `Failed` status might be explained by the `StatusInformation` message, "The specified S3 bucket doesn't exist. Verify that the URL of the S3 bucket is correct."
   *
   * @public
   */
  StatusInformation?: string | undefined;

  /**
   * The current status of the approval review for the latest version of the document.
   *
   * @public
   */
  ReviewStatus?: ReviewStatus | undefined;
}

/**
 * @public
 */
export interface ListDocumentVersionsResult {
  /**
   * The document versions.
   *
   * @public
   */
  DocumentVersions?: DocumentVersionInfo[] | undefined;

  /**
   * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInventoryEntriesRequest {
  /**
   * The managed node ID for which you want inventory information.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The type of inventory item for which you want information.
   *
   * @public
   */
  TypeName: string | undefined;

  /**
   * One or more filters. Use a filter to return a more specific list of results.
   *
   * @public
   */
  Filters?: InventoryFilter[] | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListInventoryEntriesResult {
  /**
   * The type of inventory item returned by the request.
   *
   * @public
   */
  TypeName?: string | undefined;

  /**
   * The managed node ID targeted by the request to query inventory information.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The inventory schema version used by the managed nodes.
   *
   * @public
   */
  SchemaVersion?: string | undefined;

  /**
   * The time that inventory information was collected for the managed nodes.
   *
   * @public
   */
  CaptureTime?: string | undefined;

  /**
   * A list of inventory items on the managed nodes.
   *
   * @public
   */
  Entries?: Record<string, string>[] | undefined;

  /**
   * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The filters for the operation.
 *
 * @public
 */
export interface NodeFilter {
  /**
   * The name of the filter.
   *
   * @public
   */
  Key: NodeFilterKey | undefined;

  /**
   * A filter value supported by the specified key. For example, for the key `PlatformType`, supported values include `Linux` and `Windows`.
   *
   * @public
   */
  Values: string[] | undefined;

  /**
   * The type of filter operator.
   *
   * @public
   */
  Type?: NodeFilterOperatorType | undefined;
}

/**
 * @public
 */
export interface ListNodesRequest {
  /**
   * The name of the Amazon Web Services managed resource data sync to retrieve information about.
   *
   * For cross-account/cross-Region configurations, this parameter is required, and the name of the supported resource data sync is `AWS-QuickSetup-ManagedNode`.
   *
   * For single account/single-Region configurations, the parameter is not required.
   *
   * @public
   */
  SyncName?: string | undefined;

  /**
   * One or more filters. Use a filter to return a more specific list of managed nodes.
   *
   * @public
   */
  Filters?: NodeFilter[] | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Details about a specific managed node.
 *
 * @public
 */
export interface InstanceInfo {
  /**
   * The type of agent installed on the node.
   *
   * @public
   */
  AgentType?: string | undefined;

  /**
   * The version number of the agent installed on the node.
   *
   * @public
   */
  AgentVersion?: string | undefined;

  /**
   * The fully qualified host name of the managed node.
   *
   * @public
   */
  ComputerName?: string | undefined;

  /**
   * The current status of the managed node.
   *
   * @public
   */
  InstanceStatus?: string | undefined;

  /**
   * The IP address of the managed node.
   *
   * @public
   */
  IpAddress?: string | undefined;

  /**
   * Indicates whether the node is managed by Systems Manager.
   *
   * @public
   */
  ManagedStatus?: ManagedStatus | undefined;

  /**
   * The name assigned to the managed node.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The operating system platform type of the managed node.
   *
   * @public
   */
  PlatformType?: PlatformType | undefined;

  /**
   * The name of the operating system platform running on your managed node.
   *
   * @public
   */
  PlatformName?: string | undefined;

  /**
   * The version of the OS platform running on your managed node.
   *
   * @public
   */
  PlatformVersion?: string | undefined;

  /**
   * The type of instance, either an EC2 instance or another supported machine type in a hybrid fleet.
   *
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * The type of the source resource. For IoT Greengrass devices, `SourceType` is `AWS::IoT::Thing`.
   *
   * @public
   */
  SourceType?: SourceType | undefined;

  /**
   * The ID of the source resource. For IoT Greengrass devices, `SourceId` is the Thing name.
   *
   * @public
   */
  SourceId?: string | undefined;

  /**
   * The location of the source resource in the third-party cloud environment.
   *
   * @public
   */
  SourceLocation?: string | undefined;

  /**
   * The Availability Zone where the managed node is located.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The Availability Zone ID where the managed node is located.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;
}

/**
 * Information about a managed node's type.
 *
 * @public
 */
export type NodeType =
  | NodeType.InstanceMember
  | NodeType.$UnknownMember;

/**
 * @public
 */
export namespace NodeType {
  /**
   * Information about a specific managed node.
   *
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
 * Information about ownership of a managed node.
 *
 * @public
 */
export interface NodeOwnerInfo {
  /**
   * The ID of the Amazon Web Services account that owns the managed node.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The ID of the organization unit (OU) that the account is part of.
   *
   * @public
   */
  OrganizationalUnitId?: string | undefined;

  /**
   * The path for the organizational unit (OU) that owns the managed node. The path for the OU is built using the IDs of the organization, root, and all OUs in the path down to and including the OU. For example:
   *
   * `o-a1b2c3d4e5/r-f6g7h8i9j0example/ou-ghi0-awsccccc/ou-jkl0-awsddddd/`
   *
   * @public
   */
  OrganizationalUnitPath?: string | undefined;
}

/**
 * Details about an individual managed node.
 *
 * @public
 */
export interface Node {
  /**
   * The UTC timestamp for when the managed node data was last captured.
   *
   * @public
   */
  CaptureTime?: Date | undefined;

  /**
   * The ID of the managed node.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * Information about the ownership of the managed node.
   *
   * @public
   */
  Owner?: NodeOwnerInfo | undefined;

  /**
   * The Amazon Web Services Region that a managed node was created in or assigned to.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * Information about the type of node.
   *
   * @public
   */
  NodeType?: NodeType | undefined;
}

/**
 * @public
 */
export interface ListNodesResult {
  /**
   * A list of managed nodes that match the specified filter criteria.
   *
   * @public
   */
  Nodes?: Node[] | undefined;

  /**
   * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListNodesSummaryResult {
  /**
   * A collection of objects reporting information about your managed nodes, such as the count of nodes by operating system.
   *
   * @public
   */
  Summary?: Record<string, string>[] | undefined;

  /**
   * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Describes a filter for a specific list of OpsItem events. You can filter event information by using tags. You specify tags by using a key-value pair mapping.
 *
 * @public
 */
export interface OpsItemEventFilter {
  /**
   * The name of the filter key. Currently, the only supported value is `OpsItemId`.
   *
   * @public
   */
  Key: OpsItemEventFilterKey | undefined;

  /**
   * The values for the filter, consisting of one or more OpsItem IDs.
   *
   * @public
   */
  Values: string[] | undefined;

  /**
   * The operator used by the filter call. Currently, the only supported value is `Equal`.
   *
   * @public
   */
  Operator: OpsItemEventFilterOperator | undefined;
}

/**
 * @public
 */
export interface ListOpsItemEventsRequest {
  /**
   * One or more OpsItem filters. Use a filter to return a more specific list of results.
   *
   * @public
   */
  Filters?: OpsItemEventFilter[] | undefined;

  /**
   * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token to start the list. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Information about the user or resource that created an OpsItem event.
 *
 * @public
 */
export interface OpsItemIdentity {
  /**
   * The Amazon Resource Name (ARN) of the IAM entity that created the OpsItem event.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * Summary information about an OpsItem event or that associated an OpsItem with a related item.
 *
 * @public
 */
export interface OpsItemEventSummary {
  /**
   * The ID of the OpsItem.
   *
   * @public
   */
  OpsItemId?: string | undefined;

  /**
   * The ID of the OpsItem event.
   *
   * @public
   */
  EventId?: string | undefined;

  /**
   * The source of the OpsItem event.
   *
   * @public
   */
  Source?: string | undefined;

  /**
   * The type of information provided as a detail.
   *
   * @public
   */
  DetailType?: string | undefined;

  /**
   * Specific information about the OpsItem event.
   *
   * @public
   */
  Detail?: string | undefined;

  /**
   * Information about the user or resource that created the OpsItem event.
   *
   * @public
   */
  CreatedBy?: OpsItemIdentity | undefined;

  /**
   * The date and time the OpsItem event was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListOpsItemEventsResponse {
  /**
   * The token for the next set of items to return. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of event information for the specified OpsItems.
   *
   * @public
   */
  Summaries?: OpsItemEventSummary[] | undefined;
}

/**
 * Describes a filter for a specific list of related-item resources.
 *
 * @public
 */
export interface OpsItemRelatedItemsFilter {
  /**
   * The name of the filter key. Supported values include `ResourceUri`, `ResourceType`, or `AssociationId`.
   *
   * @public
   */
  Key: OpsItemRelatedItemsFilterKey | undefined;

  /**
   * The values for the filter.
   *
   * @public
   */
  Values: string[] | undefined;

  /**
   * The operator used by the filter call. The only supported operator is `EQUAL`.
   *
   * @public
   */
  Operator: OpsItemRelatedItemsFilterOperator | undefined;
}

/**
 * @public
 */
export interface ListOpsItemRelatedItemsRequest {
  /**
   * The ID of the OpsItem for which you want to list all related-item resources.
   *
   * @public
   */
  OpsItemId?: string | undefined;

  /**
   * One or more OpsItem filters. Use a filter to return a more specific list of results.
   *
   * @public
   */
  Filters?: OpsItemRelatedItemsFilter[] | undefined;

  /**
   * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Summary information about related-item resources for an OpsItem.
 *
 * @public
 */
export interface OpsItemRelatedItemSummary {
  /**
   * The OpsItem ID.
   *
   * @public
   */
  OpsItemId?: string | undefined;

  /**
   * The association ID.
   *
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * The resource type.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * The association type.
   *
   * @public
   */
  AssociationType?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the related-item resource.
   *
   * @public
   */
  ResourceUri?: string | undefined;

  /**
   * Information about the user or resource that created an OpsItem event.
   *
   * @public
   */
  CreatedBy?: OpsItemIdentity | undefined;

  /**
   * The time the related-item association was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * Information about the user or resource that created an OpsItem event.
   *
   * @public
   */
  LastModifiedBy?: OpsItemIdentity | undefined;

  /**
   * The time the related-item association was last updated.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListOpsItemRelatedItemsResponse {
  /**
   * The token for the next set of items to return. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of related-item resources for the specified OpsItem.
   *
   * @public
   */
  Summaries?: OpsItemRelatedItemSummary[] | undefined;
}

/**
 * A filter to limit the number of OpsMetadata objects displayed.
 *
 * @public
 */
export interface OpsMetadataFilter {
  /**
   * A filter key.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * A filter value.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface ListOpsMetadataRequest {
  /**
   * One or more filters to limit the number of OpsMetadata objects returned by the call.
   *
   * @public
   */
  Filters?: OpsMetadataFilter[] | undefined;

  /**
   * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token to start the list. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Operational metadata for an application in Application Manager.
 *
 * @public
 */
export interface OpsMetadata {
  /**
   * The ID of the Application Manager application.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the OpsMetadata Object or blob.
   *
   * @public
   */
  OpsMetadataArn?: string | undefined;

  /**
   * The date the OpsMetadata object was last updated.
   *
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * The user name who last updated the OpsMetadata object.
   *
   * @public
   */
  LastModifiedUser?: string | undefined;

  /**
   * The date the OpsMetadata objects was created.
   *
   * @public
   */
  CreationDate?: Date | undefined;
}

/**
 * @public
 */
export interface ListOpsMetadataResult {
  /**
   * Returns a list of OpsMetadata objects.
   *
   * @public
   */
  OpsMetadataList?: OpsMetadata[] | undefined;

  /**
   * The token for the next set of items to return. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceComplianceSummariesRequest {
  /**
   * One or more filters. Use a filter to return a more specific list of results.
   *
   * @public
   */
  Filters?: ComplianceStringFilter[] | undefined;

  /**
   * A token to start the list. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Compliance summary information for a specific resource.
 *
 * @public
 */
export interface ResourceComplianceSummaryItem {
  /**
   * The compliance type.
   *
   * @public
   */
  ComplianceType?: string | undefined;

  /**
   * The resource type.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * The resource ID.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The compliance status for the resource.
   *
   * @public
   */
  Status?: ComplianceStatus | undefined;

  /**
   * The highest severity item found for the resource. The resource is compliant for this item.
   *
   * @public
   */
  OverallSeverity?: ComplianceSeverity | undefined;

  /**
   * Information about the execution.
   *
   * @public
   */
  ExecutionSummary?: ComplianceExecutionSummary | undefined;

  /**
   * A list of items that are compliant for the resource.
   *
   * @public
   */
  CompliantSummary?: CompliantSummary | undefined;

  /**
   * A list of items that aren't compliant for the resource.
   *
   * @public
   */
  NonCompliantSummary?: NonCompliantSummary | undefined;
}

/**
 * @public
 */
export interface ListResourceComplianceSummariesResult {
  /**
   * A summary count for specified or targeted managed nodes. Summary count includes information about compliant and non-compliant State Manager associations, patch status, or custom items according to the filter criteria that you specify.
   *
   * @public
   */
  ResourceComplianceSummaryItems?: ResourceComplianceSummaryItem[] | undefined;

  /**
   * The token for the next set of items to return. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceDataSyncRequest {
  /**
   * View a list of resource data syncs according to the sync type. Specify `SyncToDestination` to view resource data syncs that synchronize data to an Amazon S3 bucket. Specify `SyncFromSource` to view resource data syncs from Organizations or from multiple Amazon Web Services Regions.
   *
   * @public
   */
  SyncType?: string | undefined;

  /**
   * A token to start the list. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * The data type name for including resource data sync state. There are four sync states:
 *
 * `OrganizationNotExists` (Your organization doesn't exist)
 *
 * `NoPermissions` (The system can't locate the service-linked role. This role is automatically created when a user creates a resource data sync in Amazon Web Services Systems Manager Explorer.)
 *
 * `InvalidOrganizationalUnit` (You specified or selected an invalid unit in the resource data sync configuration.)
 *
 * `TrustedAccessDisabled` (You disabled Systems Manager access in the organization in Organizations.)
 *
 * @public
 */
export interface ResourceDataSyncSourceWithState {
  /**
   * The type of data source for the resource data sync. `SourceType` is either `AwsOrganizations` (if an organization is present in Organizations) or `singleAccountMultiRegions`.
   *
   * @public
   */
  SourceType?: string | undefined;

  /**
   * The field name in `SyncSource` for the `ResourceDataSyncAwsOrganizationsSource` type.
   *
   * @public
   */
  AwsOrganizationsSource?: ResourceDataSyncAwsOrganizationsSource | undefined;

  /**
   * The `SyncSource` Amazon Web Services Regions included in the resource data sync.
   *
   * @public
   */
  SourceRegions?: string[] | undefined;

  /**
   * Whether to automatically synchronize and aggregate data from new Amazon Web Services Regions when those Regions come online.
   *
   * @public
   */
  IncludeFutureRegions?: boolean | undefined;

  /**
   * The data type name for including resource data sync state. There are four sync states:
   *
   * `OrganizationNotExists`: Your organization doesn't exist.
   *
   * `NoPermissions`: The system can't locate the service-linked role. This role is automatically created when a user creates a resource data sync in Explorer.
   *
   * `InvalidOrganizationalUnit`: You specified or selected an invalid unit in the resource data sync configuration.
   *
   * `TrustedAccessDisabled`: You disabled Systems Manager access in the organization in Organizations.
   *
   * @public
   */
  State?: string | undefined;

  /**
   * When you create a resource data sync, if you choose one of the Organizations options, then Systems Manager automatically enables all OpsData sources in the selected Amazon Web Services Regions for all Amazon Web Services accounts in your organization (or in the selected organization units). For more information, see [Setting up Systems Manager Explorer to display data from multiple accounts and Regions](https://docs.aws.amazon.com/systems-manager/latest/userguide/Explorer-resource-data-sync.html) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  EnableAllOpsDataSources?: boolean | undefined;
}

/**
 * Information about a resource data sync configuration, including its current status and last successful sync.
 *
 * @public
 */
export interface ResourceDataSyncItem {
  /**
   * The name of the resource data sync.
   *
   * @public
   */
  SyncName?: string | undefined;

  /**
   * The type of resource data sync. If `SyncType` is `SyncToDestination`, then the resource data sync synchronizes data to an S3 bucket. If the `SyncType` is `SyncFromSource` then the resource data sync synchronizes data from Organizations or from multiple Amazon Web Services Regions.
   *
   * @public
   */
  SyncType?: string | undefined;

  /**
   * Information about the source where the data was synchronized.
   *
   * @public
   */
  SyncSource?: ResourceDataSyncSourceWithState | undefined;

  /**
   * Configuration information for the target S3 bucket.
   *
   * @public
   */
  S3Destination?: ResourceDataSyncS3Destination | undefined;

  /**
   * The last time the configuration attempted to sync (UTC).
   *
   * @public
   */
  LastSyncTime?: Date | undefined;

  /**
   * The last time the sync operations returned a status of `SUCCESSFUL` (UTC).
   *
   * @public
   */
  LastSuccessfulSyncTime?: Date | undefined;

  /**
   * The date and time the resource data sync was changed.
   *
   * @public
   */
  SyncLastModifiedTime?: Date | undefined;

  /**
   * The status reported by the last sync.
   *
   * @public
   */
  LastStatus?: LastResourceDataSyncStatus | undefined;

  /**
   * The date and time the configuration was created (UTC).
   *
   * @public
   */
  SyncCreatedTime?: Date | undefined;

  /**
   * The status message details reported by the last sync.
   *
   * @public
   */
  LastSyncStatusMessage?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceDataSyncResult {
  /**
   * A list of your current resource data sync configurations and their statuses.
   *
   * @public
   */
  ResourceDataSyncItems?: ResourceDataSyncItem[] | undefined;

  /**
   * The token for the next set of items to return. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * Returns a list of tags for a specific resource type.
   *
   * @public
   */
  ResourceType: ResourceTypeForTagging | undefined;

  /**
   * The resource ID for which you want to see a list of tags.
   *
   * @public
   */
  ResourceId: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResult {
  /**
   * A list of tags.
   *
   * @public
   */
  TagList?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ModifyDocumentPermissionRequest {
  /**
   * The name of the document that you want to share.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The permission type for the document. The permission type can be *Share*.
   *
   * @public
   */
  PermissionType: DocumentPermissionType | undefined;

  /**
   * The Amazon Web Services users that should have access to the document. The account IDs can either be a group of account IDs or *All*. You must specify a value for this parameter or the `AccountIdsToRemove` parameter.
   *
   * @public
   */
  AccountIdsToAdd?: string[] | undefined;

  /**
   * The Amazon Web Services users that should no longer have access to the document. The Amazon Web Services user can either be a group of account IDs or *All*. This action has a higher priority than `AccountIdsToAdd`. If you specify an ID to add and the same ID to remove, the system removes access to the document. You must specify a value for this parameter or the `AccountIdsToAdd` parameter.
   *
   * @public
   */
  AccountIdsToRemove?: string[] | undefined;

  /**
   * (Optional) The version of the document to share. If it isn't specified, the system choose the `Default` version to share.
   *
   * @public
   */
  SharedDocumentVersion?: string | undefined;
}

/**
 * @public
 */
export interface ModifyDocumentPermissionResponse {}

/**
 * Information about a compliance item.
 *
 * @public
 */
export interface ComplianceItemEntry {
  /**
   * The compliance item ID. For example, if the compliance item is a Windows patch, the ID could be the number of the KB article.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The title of the compliance item. For example, if the compliance item is a Windows patch, the title could be the title of the KB article for the patch; for example: Security Update for Active Directory Federation Services.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * The severity of the compliance status. Severity can be one of the following: Critical, High, Medium, Low, Informational, Unspecified.
   *
   * @public
   */
  Severity: ComplianceSeverity | undefined;

  /**
   * The status of the compliance item. An item is either COMPLIANT or NON_COMPLIANT.
   *
   * @public
   */
  Status: ComplianceStatus | undefined;

  /**
   * A "Key": "Value" tag combination for the compliance item.
   *
   * @public
   */
  Details?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutComplianceItemsRequest {
  /**
   * Specify an ID for this resource. For a managed node, this is the node ID.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * Specify the type of resource. `ManagedInstance` is currently the only supported resource type.
   *
   * @public
   */
  ResourceType: string | undefined;

  /**
   * Specify the compliance type. For example, specify Association (for a State Manager association), Patch, or Custom:`string`.
   *
   * @public
   */
  ComplianceType: string | undefined;

  /**
   * A summary of the call execution that includes an execution ID, the type of execution (for example, `Command`), and the date/time of the execution using a datetime object that is saved in the following format: `yyyy-MM-dd'T'HH:mm:ss'Z'`
   *
   * @public
   */
  ExecutionSummary: ComplianceExecutionSummary | undefined;

  /**
   * Information about the compliance as defined by the resource type. For example, for a patch compliance type, `Items` includes information about the PatchSeverity, Classification, and so on.
   *
   * @public
   */
  Items: ComplianceItemEntry[] | undefined;

  /**
   * MD5 or SHA-256 content hash. The content hash is used to determine if existing information should be overwritten or ignored. If the content hashes match, the request to put compliance information is ignored.
   *
   * @public
   */
  ItemContentHash?: string | undefined;

  /**
   * The mode for uploading compliance items. You can specify `COMPLETE` or `PARTIAL`. In `COMPLETE` mode, the system overwrites all existing compliance information for the resource. You must provide a full list of compliance items each time you send the request.
   *
   * In `PARTIAL` mode, the system overwrites compliance information for a specific association. The association must be configured with `SyncCompliance` set to `MANUAL`. By default, all requests use `COMPLETE` mode.
   *
   * > **Note:** This attribute is only valid for association compliance.
   *
   * @public
   */
  UploadType?: ComplianceUploadType | undefined;
}

/**
 * @public
 */
export interface PutComplianceItemsResult {}

/**
 * Information collected from managed nodes based on your inventory policy document
 *
 * @public
 */
export interface InventoryItem {
  /**
   * The name of the inventory type. Default inventory item type names start with `AWS`. Custom inventory type names will start with Custom. Default inventory item types include the following: `AWS:AWSComponent`, `AWS:Application`, `AWS:InstanceInformation`, `AWS:Network`, and `AWS:WindowsUpdate`.
   *
   * @public
   */
  TypeName: string | undefined;

  /**
   * The schema version for the inventory item.
   *
   * @public
   */
  SchemaVersion: string | undefined;

  /**
   * The time the inventory information was collected.
   *
   * @public
   */
  CaptureTime: string | undefined;

  /**
   * MD5 hash of the inventory item type contents. The content hash is used to determine whether to update inventory information. The PutInventory API doesn't update the inventory item type contents if the MD5 hash hasn't changed since last update.
   *
   * @public
   */
  ContentHash?: string | undefined;

  /**
   * The inventory data of the inventory type.
   *
   * @public
   */
  Content?: Record<string, string>[] | undefined;

  /**
   * A map of associated properties for a specified inventory type. For example, with this attribute, you can specify the `ExecutionId`, `ExecutionType`, `ComplianceType` properties of the `AWS:ComplianceItem` type.
   *
   * @public
   */
  Context?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutInventoryRequest {
  /**
   * An managed node ID where you want to add or update inventory items.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The inventory items that you want to add or update on managed nodes.
   *
   * @public
   */
  Items: InventoryItem[] | undefined;
}

/**
 * @public
 */
export interface PutInventoryResult {
  /**
   * Information about the request.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface PutParameterRequest {
  /**
   * The fully qualified name of the parameter that you want to create or update.
   *
   * > **Note:** You can't enter the Amazon Resource Name (ARN) for a parameter, only the parameter name itself.
   *
   * The fully qualified name includes the complete hierarchy of the parameter path and name. For parameters in a hierarchy, you must include a leading forward slash character (/) when you create or reference a parameter. For example: `/Dev/DBServer/MySQL/db-string13`
   *
   * Naming Constraints:
   *
   * - Parameter names are case sensitive.
   * - A parameter name must be unique within an Amazon Web Services Region
   * - A parameter name can't be prefixed with "`aws`" or "`ssm`" (case-insensitive).
   * - Parameter names can include only the following symbols and letters: `a-zA-Z0-9_.-`
   *
   *   In addition, the slash character ( / ) is used to delineate hierarchies in parameter names. For example: `/Dev/Production/East/Project-ABC/MyParameter`
   * - Parameter names can't contain spaces. The service removes any spaces specified for the beginning or end of a parameter name. If the specified name for a parameter contains spaces between characters, the request fails with a `ValidationException` error.
   * - Parameter hierarchies are limited to a maximum depth of fifteen levels.
   *
   * For additional information about valid values for parameter names, see [Creating Systems Manager parameters](https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-paramstore-su-create.html) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * > **Note:**
   * >
   * > The reported maximum length of 2048 characters for a parameter name includes 1037 characters that are reserved for internal use by Systems Manager. The maximum length for a parameter name that you specify is 1011 characters.
   * >
   * > This count of 1011 characters includes the characters in the ARN that precede the name you specify. This ARN length will vary depending on your partition and Region. For example, the following 45 characters count toward the 1011 character maximum for a parameter created in the US East (Ohio) Region: `arn:aws:ssm:us-east-2:111122223333:parameter/`.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Information about the parameter that you want to add to the system. Optional but recommended.
   *
   * > **Important:** Don't enter personally identifiable information in this field.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The parameter value that you want to add to the system. Standard parameters have a value limit of 4 KB. Advanced parameters have a value limit of 8 KB.
   *
   * > **Note:** Parameters can't be referenced or nested in the values of other parameters. You can't include values wrapped in double brackets `\{\{\}\}` or `\{\{ssm:parameter-name\}\}` in a parameter value.
   *
   * @public
   */
  Value: string | undefined;

  /**
   * The type of parameter that you want to create.
   *
   * > **Note:** `SecureString` isn't currently supported for CloudFormation templates.
   *
   * Items in a `StringList` must be separated by a comma (,). You can't use other punctuation or special character to escape items in the list. If you have a parameter value that requires a comma, then use the `String` data type.
   *
   * > **Important:** Specifying a parameter type isn't required when updating a parameter. You must specify a parameter type when creating a parameter.
   *
   * @public
   */
  Type?: ParameterType | undefined;

  /**
   * The Key Management Service (KMS) ID that you want to use to encrypt a parameter. Use a custom key for better security. Required for parameters that use the `SecureString` data type.
   *
   * If you don't specify a key ID, the system uses the default key associated with your Amazon Web Services account, which is not as secure as using a custom key.
   *
   * - To use a custom KMS key, choose the `SecureString` data type with the `Key ID` parameter.
   *
   * @public
   */
  KeyId?: string | undefined;

  /**
   * Overwrite an existing parameter. The default value is `false`.
   *
   * @public
   */
  Overwrite?: boolean | undefined;

  /**
   * A regular expression used to validate the parameter value. For example, for String types with values restricted to numbers, you can specify the following: AllowedPattern=^\d+$
   *
   * @public
   */
  AllowedPattern?: string | undefined;

  /**
   * Optional metadata that you assign to a resource. Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment. For example, you might want to tag a Systems Manager parameter to identify the type of resource to which it applies, the environment, or the type of configuration data referenced by the parameter. In this case, you could specify the following key-value pairs:
   *
   * - `Key=Resource,Value=S3bucket`
   * - `Key=OS,Value=Windows`
   * - `Key=ParameterType,Value=LicenseKey`
   *
   * > **Note:** To add tags to an existing Systems Manager parameter, use the AddTagsToResource operation.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The parameter tier to assign to a parameter.
   *
   * Parameter Store offers a standard tier and an advanced tier for parameters. Standard parameters have a content size limit of 4 KB and can't be configured to use parameter policies. You can create a maximum of 10,000 standard parameters for each Region in an Amazon Web Services account. Standard parameters are offered at no additional cost.
   *
   * Advanced parameters have a content size limit of 8 KB and can be configured to use parameter policies. You can create a maximum of 100,000 advanced parameters for each Region in an Amazon Web Services account. Advanced parameters incur a charge. For more information, see [Managing parameter tiers](https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-advanced-parameters.html) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * You can change a standard parameter to an advanced parameter any time. But you can't revert an advanced parameter to a standard parameter. Reverting an advanced parameter to a standard parameter would result in data loss because the system would truncate the size of the parameter from 8 KB to 4 KB. Reverting would also remove any policies attached to the parameter. Lastly, advanced parameters use a different form of encryption than standard parameters.
   *
   * If you no longer need an advanced parameter, or if you no longer want to incur charges for an advanced parameter, you must delete it and recreate it as a new standard parameter.
   *
   * **Using the Default Tier Configuration**
   *
   * In `PutParameter` requests, you can specify the tier to create the parameter in. Whenever you specify a tier in the request, Parameter Store creates or updates the parameter according to that request. However, if you don't specify a tier in a request, Parameter Store assigns the tier based on the current Parameter Store default tier configuration.
   *
   * The default tier when you begin using Parameter Store is the standard-parameter tier. If you use the advanced-parameter tier, you can specify one of the following as the default:
   *
   * - **Advanced**: With this option, Parameter Store evaluates all requests as advanced parameters.
   * - **Intelligent-Tiering**: With this option, Parameter Store evaluates each request to determine if the parameter is standard or advanced.
   *
   *   If the request doesn't include any options that require an advanced parameter, the parameter is created in the standard-parameter tier. If one or more options requiring an advanced parameter are included in the request, Parameter Store create a parameter in the advanced-parameter tier.
   *
   *   This approach helps control your parameter-related costs by always creating standard parameters unless an advanced parameter is necessary.
   *
   * Options that require an advanced parameter include the following:
   *
   * - The content size of the parameter is more than 4 KB.
   * - The parameter uses a parameter policy.
   * - More than 10,000 parameters already exist in your Amazon Web Services account in the current Amazon Web Services Region.
   *
   * For more information about configuring the default tier option, see [Specifying a default parameter tier](https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-advanced-parameters.html#ps-default-tier) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  Tier?: ParameterTier | undefined;

  /**
   * One or more policies to apply to a parameter. This operation takes a JSON array. Parameter Store, a tool in Amazon Web Services Systems Manager supports the following policy types:
   *
   * Expiration: This policy deletes the parameter after it expires. When you create the policy, you specify the expiration date. You can update the expiration date and time by updating the policy. Updating the *parameter* doesn't affect the expiration date and time. When the expiration time is reached, Parameter Store deletes the parameter.
   *
   * ExpirationNotification: This policy initiates an event in Amazon CloudWatch Events that notifies you about the expiration. By using this policy, you can receive notification before or after the expiration time is reached, in units of days or hours.
   *
   * NoChangeNotification: This policy initiates a CloudWatch Events event if a parameter hasn't been modified for a specified period of time. This policy type is useful when, for example, a secret needs to be changed within a period of time, but it hasn't been changed.
   *
   * All existing policies are preserved until you send new policies or an empty policy. For more information about parameter policies, see [Assigning parameter policies](https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-policies.html).
   *
   * @public
   */
  Policies?: string | undefined;

  /**
   * The data type for a `String` parameter. Supported data types include plain text and Amazon Machine Image (AMI) IDs.
   *
   * **The following data type values are supported.**
   *
   * - `text`
   * - `aws:ec2:image`
   * - `aws:ssm:integration`
   *
   * When you create a `String` parameter and specify `aws:ec2:image`, Amazon Web Services Systems Manager validates the parameter value is in the required format, such as `ami-12345abcdeEXAMPLE`, and that the specified AMI is available in your Amazon Web Services account.
   *
   * > **Note:** If the action is successful, the service sends back an HTTP 200 response which indicates a successful `PutParameter` call for all cases except for data type `aws:ec2:image`. If you call `PutParameter` with `aws:ec2:image` data type, a successful HTTP 200 response does not guarantee that your parameter was successfully created or updated. The `aws:ec2:image` value is validated asynchronously, and the `PutParameter` call returns before the validation is complete. If you submit an invalid AMI value, the PutParameter operation will return success, but the asynchronous validation will fail and the parameter will not be created or updated. To monitor whether your `aws:ec2:image` parameters are created successfully, see [Setting up notifications or trigger actions based on Parameter Store events](https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-paramstore-cwe.html). For more information about AMI format validation , see [Native parameter support for Amazon Machine Image IDs](https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-ec2-aliases.html).
   *
   * @public
   */
  DataType?: string | undefined;
}

/**
 * @public
 */
export interface PutParameterResult {
  /**
   * The new version number of a parameter. If you edit a parameter value, Parameter Store automatically creates a new version and assigns this new version a unique ID. You can reference a parameter version ID in API operations or in Systems Manager documents (SSM documents). By default, if you don't specify a specific version, the system returns the latest parameter value when a parameter is called.
   *
   * @public
   */
  Version?: number | undefined;

  /**
   * The tier assigned to the parameter.
   *
   * @public
   */
  Tier?: ParameterTier | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * Amazon Resource Name (ARN) of the resource to which you want to attach a policy.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * A policy you want to associate with a resource.
   *
   * @public
   */
  Policy: string | undefined;

  /**
   * The policy ID.
   *
   * @public
   */
  PolicyId?: string | undefined;

  /**
   * ID of the current policy version. The hash helps to prevent a situation where multiple users attempt to overwrite a policy. You must provide this hash when updating or deleting a policy.
   *
   * @public
   */
  PolicyHash?: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyResponse {
  /**
   * The policy ID. To update a policy, you must specify `PolicyId` and `PolicyHash`.
   *
   * @public
   */
  PolicyId?: string | undefined;

  /**
   * ID of the current policy version.
   *
   * @public
   */
  PolicyHash?: string | undefined;
}

/**
 * @public
 */
export interface RegisterDefaultPatchBaselineRequest {
  /**
   * The ID of the patch baseline that should be the default patch baseline.
   *
   * @public
   */
  BaselineId: string | undefined;
}

/**
 * @public
 */
export interface RegisterDefaultPatchBaselineResult {
  /**
   * The ID of the default patch baseline.
   *
   * @public
   */
  BaselineId?: string | undefined;
}

/**
 * @public
 */
export interface RegisterPatchBaselineForPatchGroupRequest {
  /**
   * The ID of the patch baseline to register with the patch group.
   *
   * @public
   */
  BaselineId: string | undefined;

  /**
   * The name of the patch group to be registered with the patch baseline.
   *
   * @public
   */
  PatchGroup: string | undefined;
}

/**
 * @public
 */
export interface RegisterPatchBaselineForPatchGroupResult {
  /**
   * The ID of the patch baseline the patch group was registered with.
   *
   * @public
   */
  BaselineId?: string | undefined;

  /**
   * The name of the patch group registered with the patch baseline.
   *
   * @public
   */
  PatchGroup?: string | undefined;
}

/**
 * @public
 */
export interface RegisterTargetWithMaintenanceWindowRequest {
  /**
   * The ID of the maintenance window the target should be registered with.
   *
   * @public
   */
  WindowId: string | undefined;

  /**
   * The type of target being registered with the maintenance window.
   *
   * @public
   */
  ResourceType: MaintenanceWindowResourceType | undefined;

  /**
   * The targets to register with the maintenance window. In other words, the managed nodes to run commands on when the maintenance window runs.
   *
   * > **Note:** If a single maintenance window task is registered with multiple targets, its task invocations occur sequentially and not in parallel. If your task must run on multiple targets at the same time, register a task for each target individually and assign each task the same priority level.
   *
   * You can specify targets using managed node IDs, resource group names, or tags that have been applied to managed nodes.
   *
   * **Example 1**: Specify managed node IDs
   *
   * `Key=InstanceIds,Values=<instance-id-1>,<instance-id-2>,<instance-id-3>`
   *
   * **Example 2**: Use tag key-pairs applied to managed nodes
   *
   * `Key=tag:<my-tag-key>,Values=<my-tag-value-1>,<my-tag-value-2>`
   *
   * **Example 3**: Use tag-keys applied to managed nodes
   *
   * `Key=tag-key,Values=<my-tag-key-1>,<my-tag-key-2>`
   *
   * **Example 4**: Use resource group names
   *
   * `Key=resource-groups:Name,Values=<resource-group-name>`
   *
   * **Example 5**: Use filters for resource group types
   *
   * `Key=resource-groups:ResourceTypeFilters,Values=<resource-type-1>,<resource-type-2>`
   *
   * > **Note:**
   * >
   * > For `Key=resource-groups:ResourceTypeFilters`, specify resource types in the following format
   * >
   * > `Key=resource-groups:ResourceTypeFilters,Values=AWS::EC2::INSTANCE,AWS::EC2::VPC`
   *
   * For more information about these examples formats, including the best use case for each one, see [Examples: Register targets with a maintenance window](https://docs.aws.amazon.com/systems-manager/latest/userguide/mw-cli-tutorial-targets-examples.html) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  Targets: Target[] | undefined;

  /**
   * User-provided value that will be included in any Amazon CloudWatch Events events raised while running tasks for these targets in this maintenance window.
   *
   * @public
   */
  OwnerInformation?: string | undefined;

  /**
   * An optional name for the target.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * An optional description for the target.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * User-provided idempotency token.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface RegisterTargetWithMaintenanceWindowResult {
  /**
   * The ID of the target definition in this maintenance window.
   *
   * @public
   */
  WindowTargetId?: string | undefined;
}

/**
 * @public
 */
export interface RegisterTaskWithMaintenanceWindowRequest {
  /**
   * The ID of the maintenance window the task should be added to.
   *
   * @public
   */
  WindowId: string | undefined;

  /**
   * The targets (either managed nodes or maintenance window targets).
   *
   * > **Note:** One or more targets must be specified for maintenance window Run Command-type tasks. Depending on the task, targets are optional for other maintenance window task types (Automation, Lambda, and Step Functions). For more information about running tasks that don't specify targets, see [Registering maintenance window tasks without targets](https://docs.aws.amazon.com/systems-manager/latest/userguide/maintenance-windows-targetless-tasks.html) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * Specify managed nodes using the following format:
   *
   * `Key=InstanceIds,Values=<instance-id-1>,<instance-id-2>`
   *
   * Specify maintenance window targets using the following format:
   *
   * `Key=WindowTargetIds,Values=<window-target-id-1>,<window-target-id-2>`
   *
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * The ARN of the task to run.
   *
   * @public
   */
  TaskArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM service role for Amazon Web Services Systems Manager to assume when running a maintenance window task. If you do not specify a service role ARN, Systems Manager uses a service-linked role in your account. If no appropriate service-linked role for Systems Manager exists in your account, it is created when you run `RegisterTaskWithMaintenanceWindow`.
   *
   * However, for an improved security posture, we strongly recommend creating a custom policy and custom service role for running your maintenance window tasks. The policy can be crafted to provide only the permissions needed for your particular maintenance window tasks. For more information, see [Setting up Maintenance Windows](https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-maintenance-permissions.html) in the in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  ServiceRoleArn?: string | undefined;

  /**
   * The type of task being registered.
   *
   * @public
   */
  TaskType: MaintenanceWindowTaskType | undefined;

  /**
   * The parameters that should be passed to the task when it is run.
   *
   * > **Note:** `TaskParameters` has been deprecated. To specify parameters to pass to a task when it runs, instead use the `Parameters` option in the `TaskInvocationParameters` structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see MaintenanceWindowTaskInvocationParameters.
   *
   * @public
   */
  TaskParameters?: Record<string, MaintenanceWindowTaskParameterValueExpression> | undefined;

  /**
   * The parameters that the task should use during execution. Populate only the fields that match the task type. All other fields should be empty.
   *
   * @public
   */
  TaskInvocationParameters?: MaintenanceWindowTaskInvocationParameters | undefined;

  /**
   * The priority of the task in the maintenance window, the lower the number the higher the priority. Tasks in a maintenance window are scheduled in priority order with tasks that have the same priority scheduled in parallel.
   *
   * @public
   */
  Priority?: number | undefined;

  /**
   * The maximum number of targets this task can be run for, in parallel.
   *
   * > **Note:**
   * >
   * > Although this element is listed as "Required: No", a value can be omitted only when you are registering or updating a [targetless task](https://docs.aws.amazon.com/systems-manager/latest/userguide/maintenance-windows-targetless-tasks.html) You must provide a value in all other cases.
   * >
   * > For maintenance window tasks without a target specified, you can't supply a value for this option. Instead, the system inserts a placeholder value of `1`. This value doesn't affect the running of your task.
   *
   * @public
   */
  MaxConcurrency?: string | undefined;

  /**
   * The maximum number of errors allowed before this task stops being scheduled.
   *
   * > **Note:**
   * >
   * > Although this element is listed as "Required: No", a value can be omitted only when you are registering or updating a [targetless task](https://docs.aws.amazon.com/systems-manager/latest/userguide/maintenance-windows-targetless-tasks.html) You must provide a value in all other cases.
   * >
   * > For maintenance window tasks without a target specified, you can't supply a value for this option. Instead, the system inserts a placeholder value of `1`. This value doesn't affect the running of your task.
   *
   * @public
   */
  MaxErrors?: string | undefined;

  /**
   * A structure containing information about an Amazon Simple Storage Service (Amazon S3) bucket to write managed node-level logs to.
   *
   * > **Note:** `LoggingInfo` has been deprecated. To specify an Amazon Simple Storage Service (Amazon S3) bucket to contain logs, instead use the `OutputS3BucketName` and `OutputS3KeyPrefix` options in the `TaskInvocationParameters` structure. For information about how Amazon Web Services Systems Manager handles these options for the supported maintenance window task types, see MaintenanceWindowTaskInvocationParameters.
   *
   * @public
   */
  LoggingInfo?: LoggingInfo | undefined;

  /**
   * An optional name for the task.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * An optional description for the task.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * User-provided idempotency token.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Indicates whether tasks should continue to run after the cutoff time specified in the maintenance windows is reached.
   *
   * - `CONTINUE_TASK`: When the cutoff time is reached, any tasks that are running continue. The default value.
   * - `CANCEL_TASK`:
   *
   *   - For Automation, Lambda, Step Functions tasks: When the cutoff time is reached, any task invocations that are already running continue, but no new task invocations are started.
   *   - For Run Command tasks: When the cutoff time is reached, the system sends a CancelCommand operation that attempts to cancel the command associated with the task. However, there is no guarantee that the command will be terminated and the underlying process stopped.
   *
   *   The status for tasks that are not completed is `TIMED_OUT`.
   *
   * @public
   */
  CutoffBehavior?: MaintenanceWindowTaskCutoffBehavior | undefined;

  /**
   * The CloudWatch alarm you want to apply to your maintenance window task.
   *
   * @public
   */
  AlarmConfiguration?: AlarmConfiguration | undefined;
}

/**
 * @public
 */
export interface RegisterTaskWithMaintenanceWindowResult {
  /**
   * The ID of the task in the maintenance window.
   *
   * @public
   */
  WindowTaskId?: string | undefined;
}

/**
 * @public
 */
export interface RemoveTagsFromResourceRequest {
  /**
   * The type of resource from which you want to remove a tag.
   *
   * > **Note:** The `ManagedInstance` type for this API operation is only for on-premises managed nodes. Specify the name of the managed node in the following format: `mi-ID_number`. For example, `mi-1a2b3c4d5e6f`.
   *
   * @public
   */
  ResourceType: ResourceTypeForTagging | undefined;

  /**
   * The ID of the resource from which you want to remove tags. For example:
   *
   * ManagedInstance: mi-012345abcde
   *
   * MaintenanceWindow: mw-012345abcde
   *
   * `Automation`: `example-c160-4567-8519-012345abcde`
   *
   * PatchBaseline: pb-012345abcde
   *
   * OpsMetadata object: `ResourceID` for tagging is created from the Amazon Resource Name (ARN) for the object. Specifically, `ResourceID` is created from the strings that come after the word `opsmetadata` in the ARN. For example, an OpsMetadata object with an ARN of `arn:aws:ssm:us-east-2:1234567890:opsmetadata/aws/ssm/MyGroup/appmanager` has a `ResourceID` of either `aws/ssm/MyGroup/appmanager` or `/aws/ssm/MyGroup/appmanager`.
   *
   * For the Document and Parameter values, use the name of the resource.
   *
   * > **Note:** The `ManagedInstance` type for this API operation is only for on-premises managed nodes. Specify the name of the managed node in the following format: mi-ID_number. For example, mi-1a2b3c4d5e6f.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * Tag keys that you want to remove from the specified resource.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface RemoveTagsFromResourceResult {}

/**
 * The request body of the ResetServiceSetting API operation.
 *
 * @public
 */
export interface ResetServiceSettingRequest {
  /**
   * The Amazon Resource Name (ARN) of the service setting to reset. The setting ID can be one of the following.
   *
   * - `/ssm/appmanager/appmanager-enabled`
   * - `/ssm/automation/customer-script-log-destination`
   * - `/ssm/automation/customer-script-log-group-name`
   * - /ssm/automation/enable-adaptive-concurrency
   * - `/ssm/documents/console/public-sharing-permission`
   * - `/ssm/managed-instance/activation-tier`
   * - `/ssm/managed-instance/default-ec2-instance-management-role`
   * - `/ssm/opsinsights/opscenter`
   * - `/ssm/parameter-store/default-parameter-tier`
   * - `/ssm/parameter-store/high-throughput-enabled`
   *
   * @public
   */
  SettingId: string | undefined;
}

/**
 * The result body of the ResetServiceSetting API operation.
 *
 * @public
 */
export interface ResetServiceSettingResult {
  /**
   * The current, effective service setting after calling the ResetServiceSetting API operation.
   *
   * @public
   */
  ServiceSetting?: ServiceSetting | undefined;
}

/**
 * @public
 */
export interface ResumeSessionRequest {
  /**
   * The ID of the disconnected session to resume.
   *
   * @public
   */
  SessionId: string | undefined;
}

/**
 * @public
 */
export interface ResumeSessionResponse {
  /**
   * The ID of the session.
   *
   * @public
   */
  SessionId?: string | undefined;

  /**
   * An encrypted token value containing session and caller information. Used to authenticate the connection to the managed node.
   *
   * @public
   */
  TokenValue?: string | undefined;

  /**
   * A URL back to SSM Agent on the managed node that the Session Manager client uses to send commands and receive output from the managed node. Format: `wss://ssmmessages.region.amazonaws.com/v1/data-channel/session-id?stream=(input|output)`.
   *
   * **region** represents the Region identifier for an Amazon Web Services Region supported by Amazon Web Services Systems Manager, such as `us-east-2` for the US East (Ohio) Region. For a list of supported **region** values, see the **Region** column in [Systems Manager service endpoints](https://docs.aws.amazon.com/general/latest/gr/ssm.html#ssm_region) in the *Amazon Web Services General Reference*.
   *
   * **session-id** represents the ID of a Session Manager session, such as `1a2b3c4dEXAMPLE`.
   *
   * @public
   */
  StreamUrl?: string | undefined;
}

/**
 * @public
 */
export interface SendAutomationSignalRequest {
  /**
   * The unique identifier for an existing Automation execution that you want to send the signal to.
   *
   * @public
   */
  AutomationExecutionId: string | undefined;

  /**
   * The type of signal to send to an Automation execution.
   *
   * @public
   */
  SignalType: SignalType | undefined;

  /**
   * The data sent with the signal. The data schema depends on the type of signal used in the request.
   *
   * For `Approve` and `Reject` signal types, the payload is an optional comment that you can send with the signal type. For example:
   *
   * `Comment="Looks good"`
   *
   * For `StartStep` and `Resume` signal types, you must send the name of the Automation step to start or resume as the payload. For example:
   *
   * `StepName="step1"`
   *
   * For the `StopStep` signal type, you must send the step execution ID as the payload. For example:
   *
   * `StepExecutionId="97fff367-fc5a-4299-aed8-0123456789ab"`
   *
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
   * The IDs of the managed nodes where the command should run. Specifying managed node IDs is most useful when you are targeting a limited number of managed nodes, though you can specify up to 50 IDs.
   *
   * To target a larger number of managed nodes, or if you prefer not to list individual node IDs, we recommend using the `Targets` option instead. Using `Targets`, which accepts tag key-value pairs to identify the managed nodes to send commands to, you can a send command to tens, hundreds, or thousands of nodes at once.
   *
   * For more information about how to use targets, see [Run commands at scale](https://docs.aws.amazon.com/systems-manager/latest/userguide/send-commands-multiple.html) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  InstanceIds?: string[] | undefined;

  /**
   * An array of search criteria that targets managed nodes using a `Key,Value` combination that you specify. Specifying targets is most useful when you want to send a command to a large number of managed nodes at once. Using `Targets`, which accepts tag key-value pairs to identify managed nodes, you can send a command to tens, hundreds, or thousands of nodes at once.
   *
   * To send a command to a smaller number of managed nodes, you can use the `InstanceIds` option instead.
   *
   * For more information about how to use targets, see [Run commands at scale](https://docs.aws.amazon.com/systems-manager/latest/userguide/send-commands-multiple.html) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * The name of the Amazon Web Services Systems Manager document (SSM document) to run. This can be a public document or a custom document. To run a shared document belonging to another account, specify the document Amazon Resource Name (ARN). For more information about how to use shared documents, see [Sharing SSM documents](https://docs.aws.amazon.com/systems-manager/latest/userguide/ssm-using-shared.html) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * > **Note:** If you specify a document name or ARN that hasn't been shared with your account, you receive an `InvalidDocument` error.
   *
   * @public
   */
  DocumentName: string | undefined;

  /**
   * The SSM document version to use in the request. You can specify $DEFAULT, $LATEST, or a specific version number. If you run commands by using the Command Line Interface (Amazon Web Services CLI), then you must escape the first two options by using a backslash. If you specify a version number, then you don't need to use the backslash. For example:
   *
   * --document-version "\$DEFAULT"
   *
   * --document-version "\$LATEST"
   *
   * --document-version "3"
   *
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * The Sha256 or Sha1 hash created by the system when the document was created.
   *
   * > **Note:** Sha1 hashes have been deprecated.
   *
   * @public
   */
  DocumentHash?: string | undefined;

  /**
   * Sha256 or Sha1.
   *
   * > **Note:** Sha1 hashes have been deprecated.
   *
   * @public
   */
  DocumentHashType?: DocumentHashType | undefined;

  /**
   * If this time is reached and the command hasn't already started running, it won't run.
   *
   * @public
   */
  TimeoutSeconds?: number | undefined;

  /**
   * User-specified information about the command, such as a brief description of what the command should do.
   *
   * @public
   */
  Comment?: string | undefined;

  /**
   * The required and optional parameters specified in the document being run.
   *
   * @public
   */
  Parameters?: Record<string, string[]> | undefined;

  /**
   * (Deprecated) You can no longer specify this parameter. The system ignores it. Instead, Systems Manager automatically determines the Amazon Web Services Region of the S3 bucket.
   *
   * @public
   */
  OutputS3Region?: string | undefined;

  /**
   * The name of the S3 bucket where command execution responses should be stored.
   *
   * @public
   */
  OutputS3BucketName?: string | undefined;

  /**
   * The directory structure within the S3 bucket where the responses should be stored.
   *
   * @public
   */
  OutputS3KeyPrefix?: string | undefined;

  /**
   * (Optional) The maximum number of managed nodes that are allowed to run the command at the same time. You can specify a number such as 10 or a percentage such as 10%. The default value is `50`. For more information about how to use `MaxConcurrency`, see [Using concurrency controls](https://docs.aws.amazon.com/systems-manager/latest/userguide/send-commands-multiple.html#send-commands-velocity) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  MaxConcurrency?: string | undefined;

  /**
   * The maximum number of errors allowed without the command failing. When the command fails one more time beyond the value of `MaxErrors`, the systems stops sending the command to additional targets. You can specify a number like 10 or a percentage like 10%. The default value is `0`. For more information about how to use `MaxErrors`, see [Using error controls](https://docs.aws.amazon.com/systems-manager/latest/userguide/send-commands-multiple.html#send-commands-maxerrors) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  MaxErrors?: string | undefined;

  /**
   * The ARN of the Identity and Access Management (IAM) service role to use to publish Amazon Simple Notification Service (Amazon SNS) notifications for Run Command commands.
   *
   * This role must provide the `sns:Publish` permission for your notification topic. For information about creating and using this service role, see [Monitoring Systems Manager status changes using Amazon SNS notifications](https://docs.aws.amazon.com/systems-manager/latest/userguide/monitoring-sns-notifications.html) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  ServiceRoleArn?: string | undefined;

  /**
   * Configurations for sending notifications.
   *
   * @public
   */
  NotificationConfig?: NotificationConfig | undefined;

  /**
   * Enables Amazon Web Services Systems Manager to send Run Command output to Amazon CloudWatch Logs. Run Command is a tool in Amazon Web Services Systems Manager.
   *
   * @public
   */
  CloudWatchOutputConfig?: CloudWatchOutputConfig | undefined;

  /**
   * The CloudWatch alarm you want to apply to your command.
   *
   * @public
   */
  AlarmConfiguration?: AlarmConfiguration | undefined;
}

/**
 * @public
 */
export interface SendCommandResult {
  /**
   * The request as it was received by Systems Manager. Also provides the command ID which can be used future references to this request.
   *
   * @public
   */
  Command?: Command | undefined;
}

/**
 * @public
 */
export interface StartAccessRequestRequest {
  /**
   * A brief description explaining why you are requesting access to the node.
   *
   * @public
   */
  Reason: string | undefined;

  /**
   * The node you are requesting access to.
   *
   * @public
   */
  Targets: Target[] | undefined;

  /**
   * Key-value pairs of metadata you want to assign to the access request.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface StartAccessRequestResponse {
  /**
   * The ID of the access request.
   *
   * @public
   */
  AccessRequestId?: string | undefined;
}

/**
 * @public
 */
export interface StartAssociationsOnceRequest {
  /**
   * The association IDs that you want to run immediately and only one time.
   *
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
   * The name of the SSM document to run. This can be a public document or a custom document. To run a shared document belonging to another account, specify the document ARN. For more information about how to use shared documents, see [Sharing SSM documents](https://docs.aws.amazon.com/systems-manager/latest/userguide/documents-ssm-sharing.html) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  DocumentName: string | undefined;

  /**
   * The version of the Automation runbook to use for this execution.
   *
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * A key-value map of execution parameters, which match the declared parameters in the Automation runbook.
   *
   * @public
   */
  Parameters?: Record<string, string[]> | undefined;

  /**
   * User-provided idempotency token. The token must be unique, is case insensitive, enforces the UUID format, and can't be reused.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The execution mode of the automation. Valid modes include the following: Auto and Interactive. The default mode is Auto.
   *
   * @public
   */
  Mode?: ExecutionMode | undefined;

  /**
   * The name of the parameter used as the target resource for the rate-controlled execution. Required if you specify targets.
   *
   * @public
   */
  TargetParameterName?: string | undefined;

  /**
   * A key-value mapping to target resources. Required if you specify TargetParameterName.
   *
   * If both this parameter and the `TargetLocation:Targets` parameter are supplied, `TargetLocation:Targets` takes precedence.
   *
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * A key-value mapping of document parameters to target resources. Both Targets and TargetMaps can't be specified together.
   *
   * @public
   */
  TargetMaps?: Record<string, string[]>[] | undefined;

  /**
   * The maximum number of targets allowed to run this task in parallel. You can specify a number, such as 10, or a percentage, such as 10%. The default value is `10`.
   *
   * If both this parameter and the `TargetLocation:TargetsMaxConcurrency` are supplied, `TargetLocation:TargetsMaxConcurrency` takes precedence.
   *
   * @public
   */
  MaxConcurrency?: string | undefined;

  /**
   * The number of errors that are allowed before the system stops running the automation on additional targets. You can specify either an absolute number of errors, for example 10, or a percentage of the target set, for example 10%. If you specify 3, for example, the system stops running the automation when the fourth error is received. If you specify 0, then the system stops running the automation on additional targets after the first error result is returned. If you run an automation on 50 resources and set max-errors to 10%, then the system stops running the automation on additional targets when the sixth error is received.
   *
   * Executions that are already running an automation when max-errors is reached are allowed to complete, but some of these executions may fail as well. If you need to ensure that there won't be more than max-errors failed executions, set max-concurrency to 1 so the executions proceed one at a time.
   *
   * If this parameter and the `TargetLocation:TargetsMaxErrors` parameter are both supplied, `TargetLocation:TargetsMaxErrors` takes precedence.
   *
   * @public
   */
  MaxErrors?: string | undefined;

  /**
   * A location is a combination of Amazon Web Services Regions and/or Amazon Web Services accounts where you want to run the automation. Use this operation to start an automation in multiple Amazon Web Services Regions and multiple Amazon Web Services accounts. For more information, see [Running automations in multiple Amazon Web Services Regions and accounts](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-automation-multiple-accounts-and-regions.html) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  TargetLocations?: TargetLocation[] | undefined;

  /**
   * Optional metadata that you assign to a resource. You can specify a maximum of five tags for an automation. Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment. For example, you might want to tag an automation to identify an environment or operating system. In this case, you could specify the following key-value pairs:
   *
   * - `Key=environment,Value=test`
   * - `Key=OS,Value=Windows`
   *
   * > **Note:** The `Array Members` maximum value is reported as 1000. This number includes capacity reserved for internal operations. When calling the `StartAutomationExecution` action, you can specify a maximum of 5 tags. You can, however, use the AddTagsToResource action to add up to a total of 50 tags to an existing automation configuration.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The CloudWatch alarm you want to apply to your automation.
   *
   * @public
   */
  AlarmConfiguration?: AlarmConfiguration | undefined;

  /**
   * Specify a publicly accessible URL for a file that contains the `TargetLocations` body. Currently, only files in presigned Amazon S3 buckets are supported.
   *
   * @public
   */
  TargetLocationsURL?: string | undefined;
}

/**
 * @public
 */
export interface StartAutomationExecutionResult {
  /**
   * The unique ID of a newly scheduled automation execution.
   *
   * @public
   */
  AutomationExecutionId?: string | undefined;
}

/**
 * @public
 */
export interface StartChangeRequestExecutionRequest {
  /**
   * The date and time specified in the change request to run the Automation runbooks.
   *
   * > **Note:** The Automation runbooks specified for the runbook workflow can't run until all required approvals for the change request have been received.
   *
   * @public
   */
  ScheduledTime?: Date | undefined;

  /**
   * The name of the change template document to run during the runbook workflow.
   *
   * @public
   */
  DocumentName: string | undefined;

  /**
   * The version of the change template document to run during the runbook workflow.
   *
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * A key-value map of parameters that match the declared parameters in the change template document.
   *
   * @public
   */
  Parameters?: Record<string, string[]> | undefined;

  /**
   * The name of the change request associated with the runbook workflow to be run.
   *
   * @public
   */
  ChangeRequestName?: string | undefined;

  /**
   * The user-provided idempotency token. The token must be unique, is case insensitive, enforces the UUID format, and can't be reused.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Indicates whether the change request can be approved automatically without the need for manual approvals.
   *
   * If `AutoApprovable` is enabled in a change template, then setting `AutoApprove` to `true` in `StartChangeRequestExecution` creates a change request that bypasses approver review.
   *
   * > **Note:** Change Calendar restrictions are not bypassed in this scenario. If the state of an associated calendar is `CLOSED`, change freeze approvers must still grant permission for this change request to run. If they don't, the change won't be processed until the calendar state is again `OPEN`.
   *
   * @public
   */
  AutoApprove?: boolean | undefined;

  /**
   * Information about the Automation runbooks that are run during the runbook workflow.
   *
   * > **Note:** The Automation runbooks specified for the runbook workflow can't run until all required approvals for the change request have been received.
   *
   * @public
   */
  Runbooks: Runbook[] | undefined;

  /**
   * Optional metadata that you assign to a resource. You can specify a maximum of five tags for a change request. Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment. For example, you might want to tag a change request to identify an environment or target Amazon Web Services Region. In this case, you could specify the following key-value pairs:
   *
   * - `Key=Environment,Value=Production`
   * - `Key=Region,Value=us-east-2`
   *
   * > **Note:** The `Array Members` maximum value is reported as 1000. This number includes capacity reserved for internal operations. When calling the `StartChangeRequestExecution` action, you can specify a maximum of 5 tags. You can, however, use the AddTagsToResource action to add up to a total of 50 tags to an existing change request configuration.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The time that the requester expects the runbook workflow related to the change request to complete. The time is an estimate only that the requester provides for reviewers.
   *
   * @public
   */
  ScheduledEndTime?: Date | undefined;

  /**
   * User-provided details about the change. If no details are provided, content specified in the **Template information** section of the associated change template is added.
   *
   * @public
   */
  ChangeDetails?: string | undefined;
}

/**
 * @public
 */
export interface StartChangeRequestExecutionResult {
  /**
   * The unique ID of a runbook workflow operation. (A runbook workflow is a type of Automation operation.)
   *
   * @public
   */
  AutomationExecutionId?: string | undefined;
}

/**
 * Information about the optional inputs that can be specified for an automation execution preview.
 *
 * @public
 */
export interface AutomationExecutionInputs {
  /**
   * Information about parameters that can be specified for the preview operation.
   *
   * @public
   */
  Parameters?: Record<string, string[]> | undefined;

  /**
   * The name of the parameter used as the target resource for the rate-controlled execution. Required if you specify targets.
   *
   * @public
   */
  TargetParameterName?: string | undefined;

  /**
   * Information about the resources that would be included in the actual runbook execution, if it were to be run. Both Targets and TargetMaps can't be specified together.
   *
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * A key-value mapping of document parameters to target resources. Both Targets and TargetMaps can't be specified together.
   *
   * @public
   */
  TargetMaps?: Record<string, string[]>[] | undefined;

  /**
   * Information about the Amazon Web Services Regions and Amazon Web Services accounts targeted by the Automation execution preview operation.
   *
   * @public
   */
  TargetLocations?: TargetLocation[] | undefined;

  /**
   * A publicly accessible URL for a file that contains the `TargetLocations` body. Currently, only files in presigned Amazon S3 buckets are supported.
   *
   * @public
   */
  TargetLocationsURL?: string | undefined;
}

/**
 * Information about the inputs for an execution preview.
 *
 * @public
 */
export type ExecutionInputs =
  | ExecutionInputs.AutomationMember
  | ExecutionInputs.$UnknownMember;

/**
 * @public
 */
export namespace ExecutionInputs {
  /**
   * Information about the optional inputs that can be specified for an automation execution preview.
   *
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
   * The name of the Automation runbook to run. The result of the execution preview indicates what the impact would be of running this runbook.
   *
   * @public
   */
  DocumentName: string | undefined;

  /**
   * The version of the Automation runbook to run. The default value is `$DEFAULT`.
   *
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * Information about the inputs that can be specified for the preview operation.
   *
   * @public
   */
  ExecutionInputs?: ExecutionInputs | undefined;
}

/**
 * @public
 */
export interface StartExecutionPreviewResponse {
  /**
   * The ID of the execution preview generated by the system.
   *
   * @public
   */
  ExecutionPreviewId?: string | undefined;
}

/**
 * @public
 */
export interface StartSessionRequest {
  /**
   * The managed node to connect to for the session.
   *
   * @public
   */
  Target: string | undefined;

  /**
   * The name of the SSM document you want to use to define the type of session, input parameters, or preferences for the session. For example, `SSM-SessionManagerRunShell`. You can call the GetDocument API to verify the document exists before attempting to start a session. If no document name is provided, a shell to the managed node is launched by default. For more information, see [Start a session](https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-sessions-start.html) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  DocumentName?: string | undefined;

  /**
   * The reason for connecting to the instance. This value is included in the details for the Amazon CloudWatch Events event created when you start the session.
   *
   * @public
   */
  Reason?: string | undefined;

  /**
   * The values you want to specify for the parameters defined in the Session document. For more information about these parameters, see [Create a Session Manager preferences document](https://docs.aws.amazon.com/systems-manager/latest/userguide/getting-started-create-preferences-cli.html) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  Parameters?: Record<string, string[]> | undefined;
}

/**
 * @public
 */
export interface StartSessionResponse {
  /**
   * The ID of the session.
   *
   * @public
   */
  SessionId?: string | undefined;

  /**
   * An encrypted token value containing session and caller information. This token is used to authenticate the connection to the managed node, and is valid only long enough to ensure the connection is successful. Never share your session's token.
   *
   * @public
   */
  TokenValue?: string | undefined;

  /**
   * A URL back to SSM Agent on the managed node that the Session Manager client uses to send commands and receive output from the node. Format: `wss://ssmmessages.region.amazonaws.com/v1/data-channel/session-id?stream=(input|output)`
   *
   * **region** represents the Region identifier for an Amazon Web Services Region supported by Amazon Web Services Systems Manager, such as `us-east-2` for the US East (Ohio) Region. For a list of supported **region** values, see the **Region** column in [Systems Manager service endpoints](https://docs.aws.amazon.com/general/latest/gr/ssm.html#ssm_region) in the *Amazon Web Services General Reference*.
   *
   * **session-id** represents the ID of a Session Manager session, such as `1a2b3c4dEXAMPLE`.
   *
   * @public
   */
  StreamUrl?: string | undefined;
}

/**
 * @public
 */
export interface StopAutomationExecutionRequest {
  /**
   * The execution ID of the Automation to stop.
   *
   * @public
   */
  AutomationExecutionId: string | undefined;

  /**
   * The stop request type. Valid types include the following: Cancel and Complete. The default type is Cancel.
   *
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
   * The ID of the session to terminate.
   *
   * @public
   */
  SessionId: string | undefined;
}

/**
 * @public
 */
export interface TerminateSessionResponse {
  /**
   * The ID of the session that has been terminated.
   *
   * @public
   */
  SessionId?: string | undefined;
}

/**
 * @public
 */
export interface UnlabelParameterVersionRequest {
  /**
   * The name of the parameter from which you want to delete one or more labels.
   *
   * > **Note:** You can't enter the Amazon Resource Name (ARN) for a parameter, only the parameter name itself.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The specific version of the parameter which you want to delete one or more labels from. If it isn't present, the call will fail.
   *
   * @public
   */
  ParameterVersion: number | undefined;

  /**
   * One or more labels to delete from the specified parameter version.
   *
   * @public
   */
  Labels: string[] | undefined;
}

/**
 * @public
 */
export interface UnlabelParameterVersionResult {
  /**
   * A list of all labels deleted from the parameter.
   *
   * @public
   */
  RemovedLabels?: string[] | undefined;

  /**
   * The labels that aren't attached to the given parameter version.
   *
   * @public
   */
  InvalidLabels?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateAssociationRequest {
  /**
   * The ID of the association you want to update.
   *
   * @public
   */
  AssociationId: string | undefined;

  /**
   * The parameters you want to update for the association. If you create a parameter using Parameter Store, a tool in Amazon Web Services Systems Manager, you can reference the parameter using `\{\{ssm:parameter-name\}\}`.
   *
   * @public
   */
  Parameters?: Record<string, string[]> | undefined;

  /**
   * The document version you want update for the association.
   *
   * > **Important:** State Manager doesn't support running associations that use a new version of a document if that document is shared from another account. State Manager always runs the `default` version of a document if shared from another account, even though the Systems Manager console shows that a new version was processed. If you want to run an association using a new version of a document shared form another account, you must set the document version to `default`.
   *
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * The cron expression used to schedule the association that you want to update.
   *
   * @public
   */
  ScheduleExpression?: string | undefined;

  /**
   * An S3 bucket where you want to store the results of this request.
   *
   * @public
   */
  OutputLocation?: InstanceAssociationOutputLocation | undefined;

  /**
   * The name of the SSM Command document or Automation runbook that contains the configuration information for the managed node.
   *
   * You can specify Amazon Web Services-predefined documents, documents you created, or a document that is shared with you from another account.
   *
   * For Systems Manager document (SSM document) that are shared with you from other Amazon Web Services accounts, you must specify the complete SSM document ARN, in the following format:
   *
   * `arn:aws:ssm:region:account-id:document/document-name`
   *
   * For example:
   *
   * `arn:aws:ssm:us-east-2:12345678912:document/My-Shared-Document`
   *
   * For Amazon Web Services-predefined documents and SSM documents you created in your account, you only need to specify the document name. For example, `AWS-ApplyPatchBaseline` or `My-Document`.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The targets of the association.
   *
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * The name of the association that you want to update.
   *
   * @public
   */
  AssociationName?: string | undefined;

  /**
   * This parameter is provided for concurrency control purposes. You must specify the latest association version in the service. If you want to ensure that this request succeeds, either specify `$LATEST`, or omit this parameter.
   *
   * @public
   */
  AssociationVersion?: string | undefined;

  /**
   * Choose the parameter that will define how your automation will branch out. This target is required for associations that use an Automation runbook and target resources by using rate controls. Automation is a tool in Amazon Web Services Systems Manager.
   *
   * @public
   */
  AutomationTargetParameterName?: string | undefined;

  /**
   * The number of errors that are allowed before the system stops sending requests to run the association on additional targets. You can specify either an absolute number of errors, for example 10, or a percentage of the target set, for example 10%. If you specify 3, for example, the system stops sending requests when the fourth error is received. If you specify 0, then the system stops sending requests after the first error is returned. If you run an association on 50 managed nodes and set `MaxError` to 10%, then the system stops sending the request when the sixth error is received.
   *
   * Executions that are already running an association when `MaxErrors` is reached are allowed to complete, but some of these executions may fail as well. If you need to ensure that there won't be more than max-errors failed executions, set `MaxConcurrency` to 1 so that executions proceed one at a time.
   *
   * @public
   */
  MaxErrors?: string | undefined;

  /**
   * The maximum number of targets allowed to run the association at the same time. You can specify a number, for example 10, or a percentage of the target set, for example 10%. The default value is 100%, which means all targets run the association at the same time.
   *
   * If a new managed node starts and attempts to run an association while Systems Manager is running `MaxConcurrency` associations, the association is allowed to run. During the next association interval, the new managed node will process its association within the limit specified for `MaxConcurrency`.
   *
   * @public
   */
  MaxConcurrency?: string | undefined;

  /**
   * The severity level to assign to the association.
   *
   * @public
   */
  ComplianceSeverity?: AssociationComplianceSeverity | undefined;

  /**
   * The mode for generating association compliance. You can specify `AUTO` or `MANUAL`. In `AUTO` mode, the system uses the status of the association execution to determine the compliance status. If the association execution runs successfully, then the association is `COMPLIANT`. If the association execution doesn't run successfully, the association is `NON-COMPLIANT`.
   *
   * In `MANUAL` mode, you must specify the `AssociationId` as a parameter for the PutComplianceItems API operation. In this case, compliance data isn't managed by State Manager, a tool in Amazon Web Services Systems Manager. It is managed by your direct call to the PutComplianceItems API operation.
   *
   * By default, all associations use `AUTO` mode.
   *
   * @public
   */
  SyncCompliance?: AssociationSyncCompliance | undefined;

  /**
   * By default, when you update an association, the system runs it immediately after it is updated and then according to the schedule you specified. Specify `true` for `ApplyOnlyAtCronInterval` if you want the association to run only according to the schedule you specified.
   *
   * If you chose this option when you created an association and later you edit that association or you make changes to the Automation runbook or SSM document on which that association is based, State Manager applies the association at the next specified cron interval. For example, if you chose the `Latest` version of an SSM document when you created an association and you edit the association by choosing a different document version on the Documents page, State Manager applies the association at the next specified cron interval if you previously set `ApplyOnlyAtCronInterval` to `true`. If this option wasn't selected, State Manager immediately runs the association.
   *
   * For more information, see [Understanding when associations are applied to resources](https://docs.aws.amazon.com/systems-manager/latest/userguide/state-manager-about.html#state-manager-about-scheduling) and [About target updates with Automation runbooks](https://docs.aws.amazon.com/systems-manager/latest/userguide/state-manager-about.html#runbook-target-updates) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * This parameter isn't supported for rate expressions.
   *
   * You can reset this parameter. To do so, specify the `no-apply-only-at-cron-interval` parameter when you update the association from the command line. This parameter forces the association to run immediately after updating it and according to the interval specified.
   *
   * @public
   */
  ApplyOnlyAtCronInterval?: boolean | undefined;

  /**
   * The names or Amazon Resource Names (ARNs) of the Change Calendar type documents you want to gate your associations under. The associations only run when that change calendar is open. For more information, see [Amazon Web Services Systems Manager Change Calendar](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-change-calendar) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  CalendarNames?: string[] | undefined;

  /**
   * A location is a combination of Amazon Web Services Regions and Amazon Web Services accounts where you want to run the association. Use this action to update an association in multiple Regions and multiple accounts.
   *
   * > **Note:** The `TargetLocationAlarmConfiguration` parameter is not supported by State Manager.
   *
   * @public
   */
  TargetLocations?: TargetLocation[] | undefined;

  /**
   * Number of days to wait after the scheduled day to run an association. For example, if you specified a cron schedule of `cron(0 0 ? * THU#2 *)`, you could specify an offset of 3 to run the association each Sunday after the second Thursday of the month. For more information about cron schedules for associations, see [Reference: Cron and rate expressions for Systems Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/reference-cron-and-rate-expressions.html) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * > **Note:** To use offsets, you must specify the `ApplyOnlyAtCronInterval` parameter. This option tells the system not to run an association immediately after you create it.
   *
   * @public
   */
  ScheduleOffset?: number | undefined;

  /**
   * The number of hours the association can run before it is canceled. Duration applies to associations that are currently running, and any pending and in progress commands on all targets. If a target was taken offline for the association to run, it is made available again immediately, without a reboot.
   *
   * The `Duration` parameter applies only when both these conditions are true:
   *
   * - The association for which you specify a duration is cancelable according to the parameters of the SSM command document or Automation runbook associated with this execution.
   * - The command specifies the `ApplyOnlyAtCronInterval` parameter, which means that the association doesn't run immediately after it is updated, but only according to the specified schedule.
   *
   * @public
   */
  Duration?: number | undefined;

  /**
   * A key-value mapping of document parameters to target resources. Both Targets and TargetMaps can't be specified together.
   *
   * @public
   */
  TargetMaps?: Record<string, string[]>[] | undefined;

  /**
   * The details for the CloudWatch alarm you want to apply to an automation or command.
   *
   * @public
   */
  AlarmConfiguration?: AlarmConfiguration | undefined;

  /**
   * A role used by association to take actions on your behalf. State Manager will assume this role and call required APIs when dispatching configurations to nodes. If not specified, [service-linked role for Systems Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/using-service-linked-roles.html) will be used by default.
   *
   * > **Note:**
   * >
   * > It is recommended that you define a custom IAM role so that you have full control of the permissions that State Manager has when taking actions on your behalf.
   * >
   * > Service-linked role support in State Manager is being phased out. Associations relying on service-linked role may require updates in the future to continue functioning properly.
   *
   * @public
   */
  AssociationDispatchAssumeRole?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAssociationResult {
  /**
   * The description of the association that was updated.
   *
   * @public
   */
  AssociationDescription?: AssociationDescription | undefined;
}

/**
 * @public
 */
export interface UpdateAssociationStatusRequest {
  /**
   * The name of the SSM document.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The managed node ID.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The association status.
   *
   * @public
   */
  AssociationStatus: AssociationStatus | undefined;
}

/**
 * @public
 */
export interface UpdateAssociationStatusResult {
  /**
   * Information about the association.
   *
   * @public
   */
  AssociationDescription?: AssociationDescription | undefined;
}

/**
 * @public
 */
export interface UpdateCloudConnectorRequest {
  /**
   * The ID of the cloud connector to update.
   *
   * @public
   */
  CloudConnectorId: string | undefined;

  /**
   * A new friendly name for the cloud connector.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The updated configuration details for connecting to the third-party cloud environment.
   *
   * @public
   */
  Configuration?: CloudConnectorConfiguration | undefined;

  /**
   * A new description for the cloud connector.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateCloudConnectorResult {
  /**
   * The ID of the cloud connector that was updated.
   *
   * @public
   */
  CloudConnectorId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDocumentRequest {
  /**
   * A valid JSON or YAML string.
   *
   * @public
   */
  Content: string | undefined;

  /**
   * A list of key-value pairs that describe attachments to a version of a document.
   *
   * @public
   */
  Attachments?: AttachmentsSource[] | undefined;

  /**
   * The name of the SSM document that you want to update.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The friendly name of the SSM document that you want to update. This value can differ for each version of the document. If you don't specify a value for this parameter in your request, the existing value is applied to the new document version.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * An optional field specifying the version of the artifact you are updating with the document. For example, 12.6. This value is unique across all versions of a document, and can't be changed.
   *
   * @public
   */
  VersionName?: string | undefined;

  /**
   * The version of the document that you want to update. Currently, Systems Manager supports updating only the latest version of the document. You can specify the version number of the latest version or use the `$LATEST` variable.
   *
   * > **Note:** If you change a document version for a State Manager association, Systems Manager immediately runs the association unless you previously specifed the `apply-only-at-cron-interval` parameter.
   *
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * Specify the document format for the new document version. The document format can be JSON, YAML, or TEXT. JSON is the default format.
   *
   * @public
   */
  DocumentFormat?: DocumentFormat | undefined;

  /**
   * Specify a new target type for the document.
   *
   * @public
   */
  TargetType?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDocumentResult {
  /**
   * A description of the document that was updated.
   *
   * @public
   */
  DocumentDescription?: DocumentDescription | undefined;
}

/**
 * @public
 */
export interface UpdateDocumentDefaultVersionRequest {
  /**
   * The name of a custom document that you want to set as the default version.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The version of a custom document that you want to set as the default version.
   *
   * @public
   */
  DocumentVersion: string | undefined;
}

/**
 * A default version of a document.
 *
 * @public
 */
export interface DocumentDefaultVersionDescription {
  /**
   * The name of the document.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The default version of the document.
   *
   * @public
   */
  DefaultVersion?: string | undefined;

  /**
   * The default version of the artifact associated with the document.
   *
   * @public
   */
  DefaultVersionName?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDocumentDefaultVersionResult {
  /**
   * The description of a custom document that you want to set as the default version.
   *
   * @public
   */
  Description?: DocumentDefaultVersionDescription | undefined;
}

/**
 * Information about a document approval review.
 *
 * @public
 */
export interface DocumentReviews {
  /**
   * The action to take on a document approval review request.
   *
   * @public
   */
  Action: DocumentReviewAction | undefined;

  /**
   * A comment entered by a user in your organization about the document review request.
   *
   * @public
   */
  Comment?: DocumentReviewCommentSource[] | undefined;
}

/**
 * @public
 */
export interface UpdateDocumentMetadataRequest {
  /**
   * The name of the change template for which a version's metadata is to be updated.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The version of a change template in which to update approval metadata.
   *
   * @public
   */
  DocumentVersion?: string | undefined;

  /**
   * The change template review details to update.
   *
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
   * The ID of the maintenance window to update.
   *
   * @public
   */
  WindowId: string | undefined;

  /**
   * The name of the maintenance window.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * An optional description for the update request.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The date and time, in ISO-8601 Extended format, for when you want the maintenance window to become active. `StartDate` allows you to delay activation of the maintenance window until the specified future date.
   *
   * > **Note:** When using a rate schedule, if you provide a start date that occurs in the past, the current date and time are used as the start date.
   *
   * @public
   */
  StartDate?: string | undefined;

  /**
   * The date and time, in ISO-8601 Extended format, for when you want the maintenance window to become inactive. `EndDate` allows you to set a date and time in the future when the maintenance window will no longer run.
   *
   * @public
   */
  EndDate?: string | undefined;

  /**
   * The schedule of the maintenance window in the form of a cron or rate expression.
   *
   * @public
   */
  Schedule?: string | undefined;

  /**
   * The time zone that the scheduled maintenance window executions are based on, in Internet Assigned Numbers Authority (IANA) format. For example: "America/Los_Angeles", "UTC", or "Asia/Seoul". For more information, see the [Time Zone Database](https://www.iana.org/time-zones) on the IANA website.
   *
   * @public
   */
  ScheduleTimezone?: string | undefined;

  /**
   * The number of days to wait after the date and time specified by a cron expression before running the maintenance window.
   *
   * For example, the following cron expression schedules a maintenance window to run the third Tuesday of every month at 11:30 PM.
   *
   * `cron(30 23 ? * TUE#3 *)`
   *
   * If the schedule offset is `2`, the maintenance window won't run until two days later.
   *
   * @public
   */
  ScheduleOffset?: number | undefined;

  /**
   * The duration of the maintenance window in hours.
   *
   * @public
   */
  Duration?: number | undefined;

  /**
   * The number of hours before the end of the maintenance window that Amazon Web Services Systems Manager stops scheduling new tasks for execution.
   *
   * @public
   */
  Cutoff?: number | undefined;

  /**
   * Whether targets must be registered with the maintenance window before tasks can be defined for those targets.
   *
   * @public
   */
  AllowUnassociatedTargets?: boolean | undefined;

  /**
   * Whether the maintenance window is enabled.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * If `True`, then all fields that are required by the CreateMaintenanceWindow operation are also required for this API request. Optional fields that aren't specified are set to null.
   *
   * @public
   */
  Replace?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateMaintenanceWindowResult {
  /**
   * The ID of the created maintenance window.
   *
   * @public
   */
  WindowId?: string | undefined;

  /**
   * The name of the maintenance window.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * An optional description of the update.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled to become active. The maintenance window won't run before this specified time.
   *
   * @public
   */
  StartDate?: string | undefined;

  /**
   * The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled to become inactive. The maintenance window won't run after this specified time.
   *
   * @public
   */
  EndDate?: string | undefined;

  /**
   * The schedule of the maintenance window in the form of a cron or rate expression.
   *
   * @public
   */
  Schedule?: string | undefined;

  /**
   * The time zone that the scheduled maintenance window executions are based on, in Internet Assigned Numbers Authority (IANA) format. For example: "America/Los_Angeles", "UTC", or "Asia/Seoul". For more information, see the [Time Zone Database](https://www.iana.org/time-zones) on the IANA website.
   *
   * @public
   */
  ScheduleTimezone?: string | undefined;

  /**
   * The number of days to wait to run a maintenance window after the scheduled cron expression date and time.
   *
   * @public
   */
  ScheduleOffset?: number | undefined;

  /**
   * The duration of the maintenance window in hours.
   *
   * @public
   */
  Duration?: number | undefined;

  /**
   * The number of hours before the end of the maintenance window that Amazon Web Services Systems Manager stops scheduling new tasks for execution.
   *
   * @public
   */
  Cutoff?: number | undefined;

  /**
   * Whether targets must be registered with the maintenance window before tasks can be defined for those targets.
   *
   * @public
   */
  AllowUnassociatedTargets?: boolean | undefined;

  /**
   * Whether the maintenance window is enabled.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateMaintenanceWindowTargetRequest {
  /**
   * The maintenance window ID with which to modify the target.
   *
   * @public
   */
  WindowId: string | undefined;

  /**
   * The target ID to modify.
   *
   * @public
   */
  WindowTargetId: string | undefined;

  /**
   * The targets to add or replace.
   *
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * User-provided value that will be included in any Amazon CloudWatch Events events raised while running tasks for these targets in this maintenance window.
   *
   * @public
   */
  OwnerInformation?: string | undefined;

  /**
   * A name for the update.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * An optional description for the update.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * If `True`, then all fields that are required by the RegisterTargetWithMaintenanceWindow operation are also required for this API request. Optional fields that aren't specified are set to null.
   *
   * @public
   */
  Replace?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateMaintenanceWindowTargetResult {
  /**
   * The maintenance window ID specified in the update request.
   *
   * @public
   */
  WindowId?: string | undefined;

  /**
   * The target ID specified in the update request.
   *
   * @public
   */
  WindowTargetId?: string | undefined;

  /**
   * The updated targets.
   *
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * The updated owner.
   *
   * @public
   */
  OwnerInformation?: string | undefined;

  /**
   * The updated name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The updated description.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateMaintenanceWindowTaskRequest {
  /**
   * The maintenance window ID that contains the task to modify.
   *
   * @public
   */
  WindowId: string | undefined;

  /**
   * The task ID to modify.
   *
   * @public
   */
  WindowTaskId: string | undefined;

  /**
   * The targets (either managed nodes or tags) to modify. Managed nodes are specified using the format `Key=instanceids,Values=instanceID_1,instanceID_2`. Tags are specified using the format `Key=tag_name,Values=tag_value`.
   *
   * > **Note:** One or more targets must be specified for maintenance window Run Command-type tasks. Depending on the task, targets are optional for other maintenance window task types (Automation, Lambda, and Step Functions). For more information about running tasks that don't specify targets, see [Registering maintenance window tasks without targets](https://docs.aws.amazon.com/systems-manager/latest/userguide/maintenance-windows-targetless-tasks.html) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * The task ARN to modify.
   *
   * @public
   */
  TaskArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM service role for Amazon Web Services Systems Manager to assume when running a maintenance window task. If you do not specify a service role ARN, Systems Manager uses a service-linked role in your account. If no appropriate service-linked role for Systems Manager exists in your account, it is created when you run `RegisterTaskWithMaintenanceWindow`.
   *
   * However, for an improved security posture, we strongly recommend creating a custom policy and custom service role for running your maintenance window tasks. The policy can be crafted to provide only the permissions needed for your particular maintenance window tasks. For more information, see [Setting up Maintenance Windows](https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-maintenance-permissions.html) in the in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  ServiceRoleArn?: string | undefined;

  /**
   * The parameters to modify.
   *
   * > **Note:** `TaskParameters` has been deprecated. To specify parameters to pass to a task when it runs, instead use the `Parameters` option in the `TaskInvocationParameters` structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see MaintenanceWindowTaskInvocationParameters.
   *
   * The map has the following format:
   *
   * Key: string, between 1 and 255 characters
   *
   * Value: an array of strings, each string is between 1 and 255 characters
   *
   * @public
   */
  TaskParameters?: Record<string, MaintenanceWindowTaskParameterValueExpression> | undefined;

  /**
   * The parameters that the task should use during execution. Populate only the fields that match the task type. All other fields should be empty.
   *
   * > **Important:** When you update a maintenance window task that has options specified in `TaskInvocationParameters`, you must provide again all the `TaskInvocationParameters` values that you want to retain. The values you don't specify again are removed. For example, suppose that when you registered a Run Command task, you specified `TaskInvocationParameters` values for `Comment`, `NotificationConfig`, and `OutputS3BucketName`. If you update the maintenance window task and specify only a different `OutputS3BucketName` value, the values for `Comment` and `NotificationConfig` are removed.
   *
   * @public
   */
  TaskInvocationParameters?: MaintenanceWindowTaskInvocationParameters | undefined;

  /**
   * The new task priority to specify. The lower the number, the higher the priority. Tasks that have the same priority are scheduled in parallel.
   *
   * @public
   */
  Priority?: number | undefined;

  /**
   * The new `MaxConcurrency` value you want to specify. `MaxConcurrency` is the number of targets that are allowed to run this task, in parallel.
   *
   * > **Note:**
   * >
   * > Although this element is listed as "Required: No", a value can be omitted only when you are registering or updating a [targetless task](https://docs.aws.amazon.com/systems-manager/latest/userguide/maintenance-windows-targetless-tasks.html) You must provide a value in all other cases.
   * >
   * > For maintenance window tasks without a target specified, you can't supply a value for this option. Instead, the system inserts a placeholder value of `1`. This value doesn't affect the running of your task.
   *
   * @public
   */
  MaxConcurrency?: string | undefined;

  /**
   * The new `MaxErrors` value to specify. `MaxErrors` is the maximum number of errors that are allowed before the task stops being scheduled.
   *
   * > **Note:**
   * >
   * > Although this element is listed as "Required: No", a value can be omitted only when you are registering or updating a [targetless task](https://docs.aws.amazon.com/systems-manager/latest/userguide/maintenance-windows-targetless-tasks.html) You must provide a value in all other cases.
   * >
   * > For maintenance window tasks without a target specified, you can't supply a value for this option. Instead, the system inserts a placeholder value of `1`. This value doesn't affect the running of your task.
   *
   * @public
   */
  MaxErrors?: string | undefined;

  /**
   * The new logging location in Amazon S3 to specify.
   *
   * > **Note:** `LoggingInfo` has been deprecated. To specify an Amazon Simple Storage Service (Amazon S3) bucket to contain logs, instead use the `OutputS3BucketName` and `OutputS3KeyPrefix` options in the `TaskInvocationParameters` structure. For information about how Amazon Web Services Systems Manager handles these options for the supported maintenance window task types, see MaintenanceWindowTaskInvocationParameters.
   *
   * @public
   */
  LoggingInfo?: LoggingInfo | undefined;

  /**
   * The new task name to specify.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The new task description to specify.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * If True, then all fields that are required by the RegisterTaskWithMaintenanceWindow operation are also required for this API request. Optional fields that aren't specified are set to null.
   *
   * @public
   */
  Replace?: boolean | undefined;

  /**
   * Indicates whether tasks should continue to run after the cutoff time specified in the maintenance windows is reached.
   *
   * - `CONTINUE_TASK`: When the cutoff time is reached, any tasks that are running continue. The default value.
   * - `CANCEL_TASK`:
   *
   *   - For Automation, Lambda, Step Functions tasks: When the cutoff time is reached, any task invocations that are already running continue, but no new task invocations are started.
   *   - For Run Command tasks: When the cutoff time is reached, the system sends a CancelCommand operation that attempts to cancel the command associated with the task. However, there is no guarantee that the command will be terminated and the underlying process stopped.
   *
   *   The status for tasks that are not completed is `TIMED_OUT`.
   *
   * @public
   */
  CutoffBehavior?: MaintenanceWindowTaskCutoffBehavior | undefined;

  /**
   * The CloudWatch alarm you want to apply to your maintenance window task.
   *
   * @public
   */
  AlarmConfiguration?: AlarmConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateMaintenanceWindowTaskResult {
  /**
   * The ID of the maintenance window that was updated.
   *
   * @public
   */
  WindowId?: string | undefined;

  /**
   * The task ID of the maintenance window that was updated.
   *
   * @public
   */
  WindowTaskId?: string | undefined;

  /**
   * The updated target values.
   *
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * The updated task ARN value.
   *
   * @public
   */
  TaskArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM service role for Amazon Web Services Systems Manager to assume when running a maintenance window task. If you do not specify a service role ARN, Systems Manager uses a service-linked role in your account. If no appropriate service-linked role for Systems Manager exists in your account, it is created when you run `RegisterTaskWithMaintenanceWindow`.
   *
   * However, for an improved security posture, we strongly recommend creating a custom policy and custom service role for running your maintenance window tasks. The policy can be crafted to provide only the permissions needed for your particular maintenance window tasks. For more information, see [Setting up Maintenance Windows](https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-maintenance-permissions.html) in the in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  ServiceRoleArn?: string | undefined;

  /**
   * The updated parameter values.
   *
   * > **Note:** `TaskParameters` has been deprecated. To specify parameters to pass to a task when it runs, instead use the `Parameters` option in the `TaskInvocationParameters` structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see MaintenanceWindowTaskInvocationParameters.
   *
   * @public
   */
  TaskParameters?: Record<string, MaintenanceWindowTaskParameterValueExpression> | undefined;

  /**
   * The updated parameter values.
   *
   * @public
   */
  TaskInvocationParameters?: MaintenanceWindowTaskInvocationParameters | undefined;

  /**
   * The updated priority value.
   *
   * @public
   */
  Priority?: number | undefined;

  /**
   * The updated `MaxConcurrency` value.
   *
   * @public
   */
  MaxConcurrency?: string | undefined;

  /**
   * The updated `MaxErrors` value.
   *
   * @public
   */
  MaxErrors?: string | undefined;

  /**
   * The updated logging information in Amazon S3.
   *
   * > **Note:** `LoggingInfo` has been deprecated. To specify an Amazon Simple Storage Service (Amazon S3) bucket to contain logs, instead use the `OutputS3BucketName` and `OutputS3KeyPrefix` options in the `TaskInvocationParameters` structure. For information about how Amazon Web Services Systems Manager handles these options for the supported maintenance window task types, see MaintenanceWindowTaskInvocationParameters.
   *
   * @public
   */
  LoggingInfo?: LoggingInfo | undefined;

  /**
   * The updated task name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The updated task description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The specification for whether tasks should continue to run after the cutoff time specified in the maintenance windows is reached.
   *
   * @public
   */
  CutoffBehavior?: MaintenanceWindowTaskCutoffBehavior | undefined;

  /**
   * The details for the CloudWatch alarm you applied to your maintenance window task.
   *
   * @public
   */
  AlarmConfiguration?: AlarmConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateManagedInstanceRoleRequest {
  /**
   * The ID of the managed node where you want to update the role.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The name of the Identity and Access Management (IAM) role that you want to assign to the managed node. This IAM role must provide AssumeRole permissions for the Amazon Web Services Systems Manager service principal `ssm.amazonaws.com`. For more information, see [Create the IAM service role required for Systems Manager in hybrid and multicloud environments](https://docs.aws.amazon.com/systems-manager/latest/userguide/hybrid-multicloud-service-role.html) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * > **Note:** You can't specify an IAM service-linked role for this parameter. You must create a unique role.
   *
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
   * User-defined text that contains information about the OpsItem, in Markdown format.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Add new keys or edit existing key-value pairs of the OperationalData map in the OpsItem object.
   *
   * Operational data is custom data that provides useful reference details about the OpsItem. For example, you can specify log files, error strings, license keys, troubleshooting tips, or other relevant data. You enter operational data as key-value pairs. The key has a maximum length of 128 characters. The value has a maximum size of 20 KB.
   *
   * > **Important:** Operational data keys *can't* begin with the following: `amazon`, `aws`, `amzn`, `ssm`, `/amazon`, `/aws`, `/amzn`, `/ssm`.
   *
   * You can choose to make the data searchable by other users in the account or you can restrict search access. Searchable data means that all users with access to the OpsItem Overview page (as provided by the DescribeOpsItems API operation) can view and search on the specified data. Operational data that isn't searchable is only viewable by users who have access to the OpsItem (as provided by the GetOpsItem API operation).
   *
   * Use the `/aws/resources` key in OperationalData to specify a related resource in the request. Use the `/aws/automations` key in OperationalData to associate an Automation runbook with the OpsItem. To view Amazon Web Services CLI example commands that use these keys, see [Creating OpsItems manually](https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-manually-create-OpsItems.html) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  OperationalData?: Record<string, OpsItemDataValue> | undefined;

  /**
   * Keys that you want to remove from the OperationalData map.
   *
   * @public
   */
  OperationalDataToDelete?: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of an SNS topic where notifications are sent when this OpsItem is edited or changed.
   *
   * @public
   */
  Notifications?: OpsItemNotification[] | undefined;

  /**
   * The importance of this OpsItem in relation to other OpsItems in the system.
   *
   * @public
   */
  Priority?: number | undefined;

  /**
   * One or more OpsItems that share something in common with the current OpsItems. For example, related OpsItems can include OpsItems with similar error messages, impacted resources, or statuses for the impacted resource.
   *
   * @public
   */
  RelatedOpsItems?: RelatedOpsItem[] | undefined;

  /**
   * The OpsItem status. For more information, see [Editing OpsItem details](https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-working-with-OpsItems-editing-details.html) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  Status?: OpsItemStatus | undefined;

  /**
   * The ID of the OpsItem.
   *
   * @public
   */
  OpsItemId: string | undefined;

  /**
   * A short heading that describes the nature of the OpsItem and the impacted resource.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * Specify a new category for an OpsItem.
   *
   * @public
   */
  Category?: string | undefined;

  /**
   * Specify a new severity for an OpsItem.
   *
   * @public
   */
  Severity?: string | undefined;

  /**
   * The time a runbook workflow started. Currently reported only for the OpsItem type `/aws/changerequest`.
   *
   * @public
   */
  ActualStartTime?: Date | undefined;

  /**
   * The time a runbook workflow ended. Currently reported only for the OpsItem type `/aws/changerequest`.
   *
   * @public
   */
  ActualEndTime?: Date | undefined;

  /**
   * The time specified in a change request for a runbook workflow to start. Currently supported only for the OpsItem type `/aws/changerequest`.
   *
   * @public
   */
  PlannedStartTime?: Date | undefined;

  /**
   * The time specified in a change request for a runbook workflow to end. Currently supported only for the OpsItem type `/aws/changerequest`.
   *
   * @public
   */
  PlannedEndTime?: Date | undefined;

  /**
   * The OpsItem Amazon Resource Name (ARN).
   *
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
   * The Amazon Resource Name (ARN) of the OpsMetadata Object to update.
   *
   * @public
   */
  OpsMetadataArn: string | undefined;

  /**
   * Metadata to add to an OpsMetadata object.
   *
   * @public
   */
  MetadataToUpdate?: Record<string, MetadataValue> | undefined;

  /**
   * The metadata keys to delete from the OpsMetadata object.
   *
   * @public
   */
  KeysToDelete?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateOpsMetadataResult {
  /**
   * The Amazon Resource Name (ARN) of the OpsMetadata Object that was updated.
   *
   * @public
   */
  OpsMetadataArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePatchBaselineRequest {
  /**
   * The ID of the patch baseline to update.
   *
   * @public
   */
  BaselineId: string | undefined;

  /**
   * The name of the patch baseline.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A set of global filters used to include patches in the baseline.
   *
   * > **Important:** The `GlobalFilters` parameter can be configured only by using the CLI or an Amazon Web Services SDK. It can't be configured from the Patch Manager console, and its value isn't displayed in the console.
   *
   * @public
   */
  GlobalFilters?: PatchFilterGroup | undefined;

  /**
   * A set of rules used to include patches in the baseline.
   *
   * @public
   */
  ApprovalRules?: PatchRuleGroup | undefined;

  /**
   * A list of explicitly approved patches for the baseline.
   *
   * For information about accepted formats for lists of approved patches and rejected patches, see [Package name formats for approved and rejected patch lists](https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-approved-rejected-package-name-formats.html) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  ApprovedPatches?: string[] | undefined;

  /**
   * Assigns a new compliance severity level to an existing patch baseline.
   *
   * @public
   */
  ApprovedPatchesComplianceLevel?: PatchComplianceLevel | undefined;

  /**
   * Indicates whether the list of approved patches includes non-security updates that should be applied to the managed nodes. The default value is `false`. Applies to Linux managed nodes only.
   *
   * @public
   */
  ApprovedPatchesEnableNonSecurity?: boolean | undefined;

  /**
   * A list of explicitly rejected patches for the baseline.
   *
   * For information about accepted formats for lists of approved patches and rejected patches, see [Package name formats for approved and rejected patch lists](https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-approved-rejected-package-name-formats.html) in the *Amazon Web Services Systems Manager User Guide*.
   *
   * @public
   */
  RejectedPatches?: string[] | undefined;

  /**
   * The action for Patch Manager to take on patches included in the `RejectedPackages` list.
   *
   * - **ALLOW_AS_DEPENDENCY**
   *
   *   **Linux and macOS**: A package in the rejected patches list is installed only if it is a dependency of another package. It is considered compliant with the patch baseline, and its status is reported as `INSTALLED_OTHER`. This is the default action if no option is specified.
   *
   *   **Windows Server**: Windows Server doesn't support the concept of package dependencies. If a package in the rejected patches list and already installed on the node, its status is reported as `INSTALLED_OTHER`. Any package not already installed on the node is skipped. This is the default action if no option is specified.
   *
   * - **BLOCK**
   *
   *   **All OSs**: Packages in the rejected patches list, and packages that include them as dependencies, aren't installed by Patch Manager under any circumstances.
   *
   *   State value assignment for patch compliance:
   *
   *   - If a package was installed before it was added to the rejected patches list, or is installed outside of Patch Manager afterward, it's considered noncompliant with the patch baseline and its status is reported as `INSTALLED_REJECTED`.
   *   - If an update attempts to install a dependency package that is now rejected by the baseline, when previous versions of the package were not rejected, the package being updated is reported as `MISSING` for `SCAN` operations and as `FAILED` for `INSTALL` operations.
   *
   * @public
   */
  RejectedPatchesAction?: PatchAction | undefined;

  /**
   * A description of the patch baseline.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Information about the patches to use to update the managed nodes, including target operating systems and source repositories. Applies to Linux managed nodes only.
   *
   * @public
   */
  Sources?: PatchSource[] | undefined;

  /**
   * Indicates the status to be assigned to security patches that are available but not approved because they don't meet the installation criteria specified in the patch baseline.
   *
   * Example scenario: Security patches that you might want installed can be skipped if you have specified a long period to wait after a patch is released before installation. If an update to the patch is released during your specified waiting period, the waiting period for installing the patch starts over. If the waiting period is too long, multiple versions of the patch could be released but never installed.
   *
   * Supported for Windows Server managed nodes only.
   *
   * @public
   */
  AvailableSecurityUpdatesComplianceStatus?: PatchComplianceStatus | undefined;

  /**
   * If True, then all fields that are required by the CreatePatchBaseline operation are also required for this API request. Optional fields that aren't specified are set to null.
   *
   * @public
   */
  Replace?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdatePatchBaselineResult {
  /**
   * The ID of the deleted patch baseline.
   *
   * @public
   */
  BaselineId?: string | undefined;

  /**
   * The name of the patch baseline.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The operating system rule used by the updated patch baseline.
   *
   * @public
   */
  OperatingSystem?: OperatingSystem | undefined;

  /**
   * A set of global filters used to exclude patches from the baseline.
   *
   * @public
   */
  GlobalFilters?: PatchFilterGroup | undefined;

  /**
   * A set of rules used to include patches in the baseline.
   *
   * @public
   */
  ApprovalRules?: PatchRuleGroup | undefined;

  /**
   * A list of explicitly approved patches for the baseline.
   *
   * @public
   */
  ApprovedPatches?: string[] | undefined;

  /**
   * The compliance severity level assigned to the patch baseline after the update completed.
   *
   * @public
   */
  ApprovedPatchesComplianceLevel?: PatchComplianceLevel | undefined;

  /**
   * Indicates whether the list of approved patches includes non-security updates that should be applied to the managed nodes. The default value is `false`. Applies to Linux managed nodes only.
   *
   * @public
   */
  ApprovedPatchesEnableNonSecurity?: boolean | undefined;

  /**
   * A list of explicitly rejected patches for the baseline.
   *
   * @public
   */
  RejectedPatches?: string[] | undefined;

  /**
   * The action specified to take on patches included in the `RejectedPatches` list. A patch can be allowed only if it is a dependency of another package, or blocked entirely along with packages that include it as a dependency.
   *
   * @public
   */
  RejectedPatchesAction?: PatchAction | undefined;

  /**
   * The date when the patch baseline was created.
   *
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * The date when the patch baseline was last modified.
   *
   * @public
   */
  ModifiedDate?: Date | undefined;

  /**
   * A description of the patch baseline.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Information about the patches to use to update the managed nodes, including target operating systems and source repositories. Applies to Linux managed nodes only.
   *
   * @public
   */
  Sources?: PatchSource[] | undefined;

  /**
   * Indicates the compliance status of managed nodes for which security-related patches are available but were not approved. This preference is specified when the `CreatePatchBaseline` or `UpdatePatchBaseline` commands are run.
   *
   * Applies to Windows Server managed nodes only.
   *
   * @public
   */
  AvailableSecurityUpdatesComplianceStatus?: PatchComplianceStatus | undefined;
}

/**
 * @public
 */
export interface UpdateResourceDataSyncRequest {
  /**
   * The name of the resource data sync you want to update.
   *
   * @public
   */
  SyncName: string | undefined;

  /**
   * The type of resource data sync. The supported `SyncType` is SyncFromSource.
   *
   * @public
   */
  SyncType: string | undefined;

  /**
   * Specify information about the data sources to synchronize.
   *
   * @public
   */
  SyncSource: ResourceDataSyncSource | undefined;
}

/**
 * @public
 */
export interface UpdateResourceDataSyncResult {}

/**
 * The request body of the UpdateServiceSetting API operation.
 *
 * @public
 */
export interface UpdateServiceSettingRequest {
  /**
   * The Amazon Resource Name (ARN) of the service setting to update. For example, `arn:aws:ssm:us-east-1:111122223333:servicesetting/ssm/parameter-store/high-throughput-enabled`. The setting ID can be one of the following.
   *
   * - `/ssm/appmanager/appmanager-enabled`
   * - `/ssm/automation/customer-script-log-destination`
   * - `/ssm/automation/customer-script-log-group-name`
   * - /ssm/automation/enable-adaptive-concurrency
   * - `/ssm/documents/console/public-sharing-permission`
   * - `/ssm/managed-instance/activation-tier`
   * - `/ssm/managed-instance/default-ec2-instance-management-role`
   * - `/ssm/opsinsights/opscenter`
   * - `/ssm/parameter-store/default-parameter-tier`
   * - `/ssm/parameter-store/high-throughput-enabled`
   *
   * > **Note:** Permissions to update the `/ssm/managed-instance/default-ec2-instance-management-role` setting should only be provided to administrators. Implement least privilege access when allowing individuals to configure or modify the Default Host Management Configuration.
   *
   * @public
   */
  SettingId: string | undefined;

  /**
   * The new value to specify for the service setting. The following list specifies the available values for each setting.
   *
   * - For `/ssm/appmanager/appmanager-enabled`, enter `True` or `False`.
   * - For `/ssm/automation/customer-script-log-destination`, enter `CloudWatch`.
   * - For `/ssm/automation/customer-script-log-group-name`, enter the name of an Amazon CloudWatch Logs log group.
   * - For `/ssm/documents/console/public-sharing-permission`, enter `Enable` or `Disable`.
   * - For `/ssm/managed-instance/activation-tier`, enter `standard` or `advanced`.
   * - For `/ssm/managed-instance/default-ec2-instance-management-role`, enter the name of an IAM role.
   * - For `/ssm/opsinsights/opscenter`, enter `Enabled` or `Disabled`.
   * - For `/ssm/parameter-store/default-parameter-tier`, enter `Standard`, `Advanced`, or `Intelligent-Tiering`
   * - For `/ssm/parameter-store/high-throughput-enabled`, enter `true` or `false`.
   *
   * @public
   */
  SettingValue: string | undefined;
}

/**
 * The result body of the UpdateServiceSetting API operation.
 *
 * @public
 */
export interface UpdateServiceSettingResult {}

/**
 * @public
 */
export interface ValidateCloudConnectorRequest {
  /**
   * The ID of the cloud connector to validate.
   *
   * @public
   */
  CloudConnectorId: string | undefined;

  /**
   * The maximum number of validation findings to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Identifies the specific resource scope of a validation finding.
 *
 * @public
 */
export interface ValidationFindingScope {
  /**
   * The type of the resource scope.
   *
   * @public
   */
  Type?: ValidationFindingScopeType | undefined;

  /**
   * The ID of the resource within the scope.
   *
   * @public
   */
  Id?: string | undefined;
}

/**
 * A validation finding from a cloud connector validation check.
 *
 * @public
 */
export interface ValidationFinding {
  /**
   * The type of the validation finding.
   *
   * @public
   */
  Type?: ValidationFindingType | undefined;

  /**
   * A code that identifies the specific validation finding.
   *
   * @public
   */
  Code?: ValidationFindingCode | undefined;

  /**
   * A message that describes the validation finding.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * A message from the third-party cloud provider related to the validation finding.
   *
   * @public
   */
  ProviderMessage?: string | undefined;

  /**
   * The scope of the validation finding, identifying the specific resource affected.
   *
   * @public
   */
  Scope?: ValidationFindingScope | undefined;
}

/**
 * @public
 */
export interface ValidateCloudConnectorResult {
  /**
   * A list of validation findings for the cloud connector.
   *
   * @public
   */
  ValidationFindings?: ValidationFinding[] | undefined;

  /**
   * The token to use when requesting the next set of items.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Specifies the inventory type and attribute for the aggregation execution.
 *
 * @public
 */
export interface InventoryAggregator {
  /**
   * The inventory type and attribute name for aggregation.
   *
   * @public
   */
  Expression?: string | undefined;

  /**
   * Nested aggregators to further refine aggregation for an inventory type.
   *
   * @public
   */
  Aggregators?: InventoryAggregator[] | undefined;

  /**
   * A user-defined set of one or more filters on which to aggregate inventory data. Groups return a count of resources that match and don't match the specified criteria.
   *
   * @public
   */
  Groups?: InventoryGroup[] | undefined;
}

/**
 * One or more aggregators for viewing counts of nodes using different dimensions.
 *
 * @public
 */
export interface NodeAggregator {
  /**
   * The aggregator type for limiting a node summary. Currently, only `Count` is supported.
   *
   * @public
   */
  AggregatorType: NodeAggregatorType | undefined;

  /**
   * The data type name to use for viewing counts of nodes. Currently, only `Instance` is supported.
   *
   * @public
   */
  TypeName: NodeTypeName | undefined;

  /**
   * The name of a node attribute on which to limit the count of nodes.
   *
   * @public
   */
  AttributeName: NodeAttributeName | undefined;

  /**
   * Information about aggregators used to refine a node summary.
   *
   * @public
   */
  Aggregators?: NodeAggregator[] | undefined;
}

/**
 * One or more aggregators for viewing counts of OpsData using different dimensions such as `Source`, `CreatedTime`, or `Source and CreatedTime`, to name a few.
 *
 * @public
 */
export interface OpsAggregator {
  /**
   * Either a `Range` or `Count` aggregator for limiting an OpsData summary.
   *
   * @public
   */
  AggregatorType?: string | undefined;

  /**
   * The data type name to use for viewing counts of OpsData.
   *
   * @public
   */
  TypeName?: string | undefined;

  /**
   * The name of an OpsData attribute on which to limit the count of OpsData.
   *
   * @public
   */
  AttributeName?: string | undefined;

  /**
   * The aggregator value.
   *
   * @public
   */
  Values?: Record<string, string> | undefined;

  /**
   * The aggregator filters.
   *
   * @public
   */
  Filters?: OpsFilter[] | undefined;

  /**
   * A nested aggregator for viewing counts of OpsData.
   *
   * @public
   */
  Aggregators?: OpsAggregator[] | undefined;
}

/**
 * @public
 */
export interface GetInventoryRequest {
  /**
   * One or more filters. Use a filter to return a more specific list of results.
   *
   * @public
   */
  Filters?: InventoryFilter[] | undefined;

  /**
   * Returns counts of inventory types based on one or more expressions. For example, if you aggregate by using an expression that uses the `AWS:InstanceInformation.PlatformType` type, you can see a count of how many Windows and Linux managed nodes exist in your inventoried fleet.
   *
   * @public
   */
  Aggregators?: InventoryAggregator[] | undefined;

  /**
   * The list of inventory item types to return.
   *
   * @public
   */
  ResultAttributes?: ResultAttribute[] | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetOpsSummaryRequest {
  /**
   * Specify the name of a resource data sync to get.
   *
   * @public
   */
  SyncName?: string | undefined;

  /**
   * Optional filters used to scope down the returned OpsData.
   *
   * @public
   */
  Filters?: OpsFilter[] | undefined;

  /**
   * Optional aggregators that return counts of OpsData based on one or more expressions.
   *
   * @public
   */
  Aggregators?: OpsAggregator[] | undefined;

  /**
   * The OpsData data type to return.
   *
   * @public
   */
  ResultAttributes?: OpsResultAttribute[] | undefined;

  /**
   * A token to start the list. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListNodesSummaryRequest {
  /**
   * The name of the Amazon Web Services managed resource data sync to retrieve information about.
   *
   * For cross-account/cross-Region configurations, this parameter is required, and the name of the supported resource data sync is `AWS-QuickSetup-ManagedNode`.
   *
   * For single account/single-Region configurations, the parameter is not required.
   *
   * @public
   */
  SyncName?: string | undefined;

  /**
   * One or more filters. Use a filter to generate a summary that matches your specified filter criteria.
   *
   * @public
   */
  Filters?: NodeFilter[] | undefined;

  /**
   * Specify one or more aggregators to return a count of managed nodes that match that expression. For example, a count of managed nodes by operating system.
   *
   * @public
   */
  Aggregators: NodeAggregator[] | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.) The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}
