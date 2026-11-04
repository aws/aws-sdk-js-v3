// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  AssetBundleExportFormat,
  AssetBundleExportJobStatus,
  AssetBundleImportFailureAction,
  AssetBundleImportJobStatus,
  AssignmentStatus,
  AutomationJobStatus,
  DashboardsQAStatus,
  DataSetStatus,
  DataSourceType,
  DlpAction,
  DlpProviderType,
  DlpSettingStatus,
  EmbeddingIdentityType,
  FilterOperator,
  FlowPublishState,
  FolderFilterAttribute,
  FolderType,
  GeneratedAnswerStatus,
  GroupFilterAttribute,
  GroupFilterOperator,
  IdentityStore,
  IdentityType,
  IncludeFolderMembers,
  IngestionErrorType,
  IngestionRequestSource,
  IngestionRequestType,
  IngestionStatus,
  KbIngestionStatus,
  KnowledgeBaseSearchFilterName,
  KnowledgeBaseSearchOperator,
  KnowledgeBaseSortByField,
  NamespaceErrorType,
  NamespaceStatus,
  NetworkInterfaceStatus,
  OAuthClientAuthenticationType,
  PersonalizationMode,
  QDataKeyType,
  QSearchStatus,
  ResourceStatus,
  ResourceType,
  Role,
  SelfUpgradeRequestStatus,
  SelfUpgradeStatus,
  SharingModel,
  SnapshotJobStatus,
  SortOrder,
  SpaceQuickSightResourceType,
  TemplateErrorType,
  ThemeErrorType,
  ThemeType,
  TopicRefreshStatus,
  UserRole,
  VPCConnectionAvailabilityStatus,
  VPCConnectionResourceStatus,
} from "./enums";
import type {
  AccessControlConfiguration,
  AccountCustomization,
  AccountInfo,
  AccountSettings,
  ActionConnector,
  ActionConnectorSummary,
  ActiveIAMPolicyAssignment,
  Agent,
  AgentSummary,
  AmazonQInQuickSightConsoleConfigurations,
  AmazonQInQuickSightDashboardConfigurations,
  Analysis,
  Entity,
  Sheet,
} from "./models_0";
import type {
  _Parameters,
  AnalysisSummary,
  AnonymousUserEmbeddingExperienceConfiguration,
  AnonymousUserSnapshotJobResult,
  ApprovalPolicy,
  AppSummary,
  AssetBundleCloudFormationOverridePropertyConfiguration,
  AssetBundleExportJobError,
  AssetBundleExportJobSummary,
  AssetBundleExportJobValidationStrategy,
  AssetBundleExportJobWarning,
  AssetBundleImportJobError,
  AssetBundleImportJobOverrideParameters,
  AssetBundleImportJobOverridePermissions,
  AssetBundleImportJobOverrideTags,
  AssetBundleImportJobOverrideValidationStrategy,
  AssetBundleImportJobSummary,
  AssetBundleImportJobWarning,
  AssetBundleImportSourceDescription,
  AuthorizedTargetsByService,
  BookmarksConfigurations,
  BrandDefinition,
  BrandDetail,
  BrandSummary,
  DashboardVisualId,
  DataSetRefreshProperties,
  LinkSharingConfiguration,
  ResourcePermission,
  SharedViewConfigurations,
  SnapshotFile,
  SnapshotJobResultFileGroup,
  SnapshotS3DestinationConfiguration,
  VpcConnectionProperties,
} from "./models_2";
import type {
  CustomInstructions,
  CustomPermissions,
  Dashboard,
  DashboardCustomizationSummaryConfigurations,
  DashboardSummary,
  DashboardVersionSummary,
  DataSet,
  DataSetConfiguration,
  DataSetSummary,
  DataSource,
  Group,
  GroupMember,
  KnowledgeBaseConfiguration,
  MediaExtractionConfiguration,
  Permission,
  ProfileLimitValue,
  ProviderConfig,
  RefreshSchedule,
  TemplateAlias,
  ThemeAlias,
  ThemeConfiguration,
  TopicConfiguration,
  TopicDetails,
  TopicRefreshSchedule,
  TopicV2Details,
} from "./models_3";

/**
 * @public
 */
export interface DeleteUserByPrincipalIdRequest {
  /**
   * The principal ID of the user.
   *
   * @public
   */
  PrincipalId: string | undefined;

  /**
   * The ID for the Amazon Web Services account that the user is in. Currently, you use the ID for the Amazon Web Services account that contains your Amazon Quick Sight account.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The namespace. Currently, you should set this to `default`.
   *
   * @public
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserByPrincipalIdResponse {
  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface DeleteUserCustomPermissionRequest {
  /**
   * The username of the user that you want to remove custom permissions from.
   *
   * @public
   */
  UserName: string | undefined;

  /**
   * The ID of the Amazon Web Services account that contains the custom permission configuration that you want to delete.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The namespace that the user belongs to.
   *
   * @public
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserCustomPermissionResponse {
  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface DeleteVPCConnectionRequest {
  /**
   * The Amazon Web Services account ID of the account where you want to delete a VPC connection.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the VPC connection that you're creating. This ID is a unique identifier for each Amazon Web Services Region in an Amazon Web Services account.
   *
   * @public
   */
  VPCConnectionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVPCConnectionResponse {
  /**
   * The Amazon Resource Name (ARN) of the deleted VPC connection.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of the VPC connection that you're creating. This ID is a unique identifier for each Amazon Web Services Region in an Amazon Web Services account.
   *
   * @public
   */
  VPCConnectionId?: string | undefined;

  /**
   * The deletion status of the VPC connection.
   *
   * @public
   */
  DeletionStatus?: VPCConnectionResourceStatus | undefined;

  /**
   * The availability status of the VPC connection.
   *
   * @public
   */
  AvailabilityStatus?: VPCConnectionAvailabilityStatus | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface DescribeAccountCustomizationRequest {
  /**
   * The ID for the Amazon Web Services account that you want to describe Quick Sight customizations for.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The Quick Sight namespace that you want to describe Quick Sight customizations for.
   *
   * @public
   */
  Namespace?: string | undefined;

  /**
   * The `Resolved` flag works with the other parameters to determine which view of Quick Sight customizations is returned. You can add this flag to your command to use the same view that Quick Sight uses to identify which customizations to apply to the console. Omit this flag, or set it to `no-resolved`, to reveal customizations that are configured at different levels.
   *
   * @public
   */
  Resolved?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeAccountCustomizationResponse {
  /**
   * The Amazon Resource Name (ARN) of the customization that's associated with this Amazon Web Services account.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID for the Amazon Web Services account that you're describing.
   *
   * @public
   */
  AwsAccountId?: string | undefined;

  /**
   * The Quick Sight namespace that you're describing.
   *
   * @public
   */
  Namespace?: string | undefined;

  /**
   * The Quick Sight customizations that exist.
   *
   * @public
   */
  AccountCustomization?: AccountCustomization | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface DescribeAccountCustomPermissionRequest {
  /**
   * The ID of the Amazon Web Services account for which you want to describe the applied custom permissions profile.
   *
   * @public
   */
  AwsAccountId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAccountCustomPermissionResponse {
  /**
   * The name of the custom permissions profile.
   *
   * @public
   */
  CustomPermissionsName?: string | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface DescribeAccountSettingsRequest {
  /**
   * The ID for the Amazon Web Services account that contains the settings that you want to list.
   *
   * @public
   */
  AwsAccountId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAccountSettingsResponse {
  /**
   * The Amazon Quick Sight settings for this Amazon Web Services account. This information includes the edition of Amazon Quick Sight that you subscribed to (Standard or Enterprise) and the notification email for the Amazon Quick Sight subscription.
   *
   * In the Quick Sight console, the Amazon Quick Sight subscription is sometimes referred to as a Quick Sight "account" even though it's technically not an account by itself. Instead, it's a subscription to the Amazon Quick Sight service for your Amazon Web Services account. The edition that you subscribe to applies to Quick in every Amazon Web Services Region where you use it.
   *
   * @public
   */
  AccountSettings?: AccountSettings | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface DescribeAccountSubscriptionRequest {
  /**
   * The Amazon Web Services account ID associated with your Quick Sight account.
   *
   * @public
   */
  AwsAccountId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAccountSubscriptionResponse {
  /**
   * A structure that contains the following elements:
   *
   * - Your Quick Sight account name.
   * - The edition of Quick Sight that your account is using.
   * - The notification email address that is associated with the Amazon Quick Sight account.
   * - The authentication type of the Quick Sight account.
   * - The status of the Quick Sight account's subscription.
   *
   * @public
   */
  AccountInfo?: AccountInfo | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeActionConnectorRequest {
  /**
   * The Amazon Web Services account ID that contains the action connector.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The unique identifier of the action connector to describe.
   *
   * @public
   */
  ActionConnectorId: string | undefined;
}

/**
 * @public
 */
export interface DescribeActionConnectorResponse {
  /**
   * The detailed information about the action connector, including its configuration and current state.
   *
   * @public
   */
  ActionConnector?: ActionConnector | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status code of the request.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface DescribeActionConnectorPermissionsRequest {
  /**
   * The Amazon Web Services account ID that contains the action connector.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The unique identifier of the action connector whose permissions you want to describe.
   *
   * @public
   */
  ActionConnectorId: string | undefined;
}

/**
 * @public
 */
export interface DescribeActionConnectorPermissionsResponse {
  /**
   * The Amazon Resource Name (ARN) of the action connector.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The unique identifier of the action connector.
   *
   * @public
   */
  ActionConnectorId?: string | undefined;

  /**
   * The list of permissions associated with the action connector, including the principals and their allowed actions.
   *
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status code of the request.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface DescribeAgentRequest {
  /**
   * The unique identifier for the agent.
   *
   * @public
   */
  AgentId: string | undefined;

  /**
   * The ID of the Amazon Web Services account that contains the agent.
   *
   * @public
   */
  AwsAccountId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAgentResponse {
  /**
   * The full details of the agent, including its configuration, status, and associations.
   *
   * @public
   */
  Agent: Agent | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAgentPermissionsRequest {
  /**
   * The unique identifier for the agent.
   *
   * @public
   */
  AgentId: string | undefined;

  /**
   * The ID of the Amazon Web Services account that contains the agent.
   *
   * @public
   */
  AwsAccountId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAgentPermissionsResponse {
  /**
   * The Amazon Resource Name (ARN) of the agent.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The unique identifier for the agent.
   *
   * @public
   */
  AgentId: string | undefined;

  /**
   * The resource permissions for the agent.
   *
   * @public
   */
  Permissions: ResourcePermission[] | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAnalysisRequest {
  /**
   * The ID of the Amazon Web Services account that contains the analysis. You must be using the Amazon Web Services account that the analysis is in.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the analysis that you're describing. The ID is part of the URL of the analysis.
   *
   * @public
   */
  AnalysisId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAnalysisResponse {
  /**
   * A metadata structure that contains summary information for the analysis that you're describing.
   *
   * @public
   */
  Analysis?: Analysis | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAnalysisDefinitionRequest {
  /**
   * The ID of the Amazon Web Services account that contains the analysis. You must be using the Amazon Web Services account that the analysis is in.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the analysis that you're describing. The ID is part of the URL of the analysis.
   *
   * @public
   */
  AnalysisId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAnalysisPermissionsRequest {
  /**
   * The ID of the Amazon Web Services account that contains the analysis whose permissions you're describing. You must be using the Amazon Web Services account that the analysis is in.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the analysis whose permissions you're describing. The ID is part of the analysis URL.
   *
   * @public
   */
  AnalysisId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAnalysisPermissionsResponse {
  /**
   * The ID of the analysis whose permissions you're describing.
   *
   * @public
   */
  AnalysisId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the analysis whose permissions you're describing.
   *
   * @public
   */
  AnalysisArn?: string | undefined;

  /**
   * A structure that describes the principals and the resource-level permissions on an analysis.
   *
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppRequest {
  /**
   * The ID of the Amazon Web Services account that contains the app.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the app that you want to describe.
   *
   * @public
   */
  AppId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppResponse {
  /**
   * The information about the app.
   *
   * @public
   */
  App: AppSummary | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppPermissionsRequest {
  /**
   * The ID of the Amazon Web Services account that contains the app.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the app.
   *
   * @public
   */
  AppId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppPermissionsResponse {
  /**
   * The ID of the app.
   *
   * @public
   */
  AppId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the app.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The resource permissions for the app.
   *
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeApprovalPolicyRequest {
  /**
   * The unique identifier of the approval policy to describe.
   *
   * @public
   */
  PolicyId: string | undefined;
}

/**
 * @public
 */
export interface DescribeApprovalPolicyResponse {
  /**
   * The approval policy.
   *
   * @public
   */
  Policy: ApprovalPolicy | undefined;
}

/**
 * @public
 */
export interface DescribeAssetBundleExportJobRequest {
  /**
   * The ID of the Amazon Web Services account the export job is executed in.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the job that you want described. The job ID is set when you start a new job with a `StartAssetBundleExportJob` API call.
   *
   * @public
   */
  AssetBundleExportJobId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAssetBundleExportJobResponse {
  /**
   * Indicates the status of a job through its queuing and execution.
   *
   * Poll this `DescribeAssetBundleExportApi` until `JobStatus` is either `SUCCESSFUL` or `FAILED`.
   *
   * @public
   */
  JobStatus?: AssetBundleExportJobStatus | undefined;

  /**
   * The URL to download the exported asset bundle data from.
   *
   * This URL is available only after the job has succeeded. This URL is valid for 5 minutes after issuance. Call `DescribeAssetBundleExportJob` again for a fresh URL if needed.
   *
   * The downloaded asset bundle is a zip file named `assetbundle-\{jobId\}.qs`. The file has a `.qs` extension.
   *
   * This URL can't be used in a `StartAssetBundleImportJob` API call and should only be used for download purposes.
   *
   * @public
   */
  DownloadUrl?: string | undefined;

  /**
   * An array of error records that describes any failures that occurred during the export job processing.
   *
   * Error records accumulate while the job runs. The complete set of error records is available after the job has completed and failed.
   *
   * @public
   */
  Errors?: AssetBundleExportJobError[] | undefined;

  /**
   * The Amazon Resource Name (ARN) for the export job.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The time that the export job was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The ID of the job. The job ID is set when you start a new job with a `StartAssetBundleExportJob` API call.
   *
   * @public
   */
  AssetBundleExportJobId?: string | undefined;

  /**
   * The ID of the Amazon Web Services account that the export job was executed in.
   *
   * @public
   */
  AwsAccountId?: string | undefined;

  /**
   * A list of resource ARNs that exported with the job.
   *
   * @public
   */
  ResourceArns?: string[] | undefined;

  /**
   * The include dependencies flag.
   *
   * @public
   */
  IncludeAllDependencies?: boolean | undefined;

  /**
   * The format of the exported asset bundle. A `QUICKSIGHT_JSON` formatted file can be used to make a `StartAssetBundleImportJob` API call. A `CLOUDFORMATION_JSON` formatted file can be used in the CloudFormation console and with the CloudFormation APIs.
   *
   * @public
   */
  ExportFormat?: AssetBundleExportFormat | undefined;

  /**
   * The CloudFormation override property configuration for the export job.
   *
   * @public
   */
  CloudFormationOverridePropertyConfiguration?: AssetBundleCloudFormationOverridePropertyConfiguration | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the response.
   *
   * @public
   */
  Status?: number | undefined;

  /**
   * The include permissions flag.
   *
   * @public
   */
  IncludePermissions?: boolean | undefined;

  /**
   * The include tags flag.
   *
   * @public
   */
  IncludeTags?: boolean | undefined;

  /**
   * The validation strategy that is used to export the analysis or dashboard.
   *
   * @public
   */
  ValidationStrategy?: AssetBundleExportJobValidationStrategy | undefined;

  /**
   * An array of warning records that describe the analysis or dashboard that is exported. This array includes UI errors that can be skipped during the validation process.
   *
   * This property only appears if `StrictModeForAllResources` in `ValidationStrategy` is set to `FALSE`.
   *
   * @public
   */
  Warnings?: AssetBundleExportJobWarning[] | undefined;

  /**
   * The include folder memberships flag.
   *
   * @public
   */
  IncludeFolderMemberships?: boolean | undefined;

  /**
   * A setting that determines whether folder members are included.
   *
   * @public
   */
  IncludeFolderMembers?: IncludeFolderMembers | undefined;
}

/**
 * @public
 */
export interface DescribeAssetBundleImportJobRequest {
  /**
   * The ID of the Amazon Web Services account the import job was executed in.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the job. The job ID is set when you start a new job with a `StartAssetBundleImportJob` API call.
   *
   * @public
   */
  AssetBundleImportJobId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAssetBundleImportJobResponse {
  /**
   * Indicates the status of a job through its queuing and execution.
   *
   * Poll the `DescribeAssetBundleImport` API until `JobStatus` returns one of the following values:
   *
   * - `SUCCESSFUL`
   * - `FAILED`
   * - `FAILED_ROLLBACK_COMPLETED`
   * - `FAILED_ROLLBACK_ERROR`
   *
   * @public
   */
  JobStatus?: AssetBundleImportJobStatus | undefined;

  /**
   * An array of error records that describes any failures that occurred during the export job processing.
   *
   * Error records accumulate while the job is still running. The complete set of error records is available after the job has completed and failed.
   *
   * @public
   */
  Errors?: AssetBundleImportJobError[] | undefined;

  /**
   * An array of error records that describes any failures that occurred while an import job was attempting a rollback.
   *
   * Error records accumulate while the job is still running. The complete set of error records is available after the job has completed and failed.
   *
   * @public
   */
  RollbackErrors?: AssetBundleImportJobError[] | undefined;

  /**
   * The Amazon Resource Name (ARN) for the import job.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The time that the import job was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The ID of the job. The job ID is set when you start a new job with a `StartAssetBundleImportJob` API call.
   *
   * @public
   */
  AssetBundleImportJobId?: string | undefined;

  /**
   * The ID of the Amazon Web Services account the import job was executed in.
   *
   * @public
   */
  AwsAccountId?: string | undefined;

  /**
   * The source of the asset bundle zip file that contains the data that is imported by the job.
   *
   * @public
   */
  AssetBundleImportSource?: AssetBundleImportSourceDescription | undefined;

  /**
   * Optional overrides that are applied to the resource configuration before import.
   *
   * @public
   */
  OverrideParameters?: AssetBundleImportJobOverrideParameters | undefined;

  /**
   * The failure action for the import job.
   *
   * @public
   */
  FailureAction?: AssetBundleImportFailureAction | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the response.
   *
   * @public
   */
  Status?: number | undefined;

  /**
   * Optional permission overrides that are applied to the resource configuration before import.
   *
   * @public
   */
  OverridePermissions?: AssetBundleImportJobOverridePermissions | undefined;

  /**
   * Optional tag overrides that are applied to the resource configuration before import.
   *
   * @public
   */
  OverrideTags?: AssetBundleImportJobOverrideTags | undefined;

  /**
   * An optional validation strategy override for all analyses and dashboards to be applied to the resource configuration before import.
   *
   * @public
   */
  OverrideValidationStrategy?: AssetBundleImportJobOverrideValidationStrategy | undefined;

  /**
   * An array of warning records that describe all permitted errors that are encountered during the import job.
   *
   * @public
   */
  Warnings?: AssetBundleImportJobWarning[] | undefined;
}

/**
 * @public
 */
export interface DescribeAutomationJobRequest {
  /**
   * The ID of the Amazon Web Services account that contains the automation job.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the automation group that contains the automation.
   *
   * @public
   */
  AutomationGroupId: string | undefined;

  /**
   * The ID of the automation that the job belongs to.
   *
   * @public
   */
  AutomationId: string | undefined;

  /**
   * A Boolean value that indicates whether to include the input payload in the response. If set to `true`, the input payload will be included. If set to `false`, the input payload will be returned as `null`.
   *
   * @public
   */
  IncludeInputPayload?: boolean | undefined;

  /**
   * A Boolean value that indicates whether to include the output payload in the response. If set to `true`, the output payload will be included. If set to `false`, the output payload will be returned as `null`.
   *
   * @public
   */
  IncludeOutputPayload?: boolean | undefined;

  /**
   * The ID of the automation job to describe.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAutomationJobResponse {
  /**
   * The Amazon Resource Name (ARN) of the automation job.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The time that the automation job was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The time that the automation job started running.
   *
   * @public
   */
  StartedAt?: Date | undefined;

  /**
   * The time that the automation job finished running.
   *
   * @public
   */
  EndedAt?: Date | undefined;

  /**
   * The current status of the automation job.
   *
   * @public
   */
  JobStatus: AutomationJobStatus | undefined;

  /**
   * The input payload that was provided when the automation job was started. This field is only included when `IncludeInputPayload` is set to `true` in the request.
   *
   * @public
   */
  InputPayload?: string | undefined;

  /**
   * The output payload that was generated by the automation job. This field is only included when `IncludeOutputPayload` is set to `true` in the request.
   *
   * @public
   */
  OutputPayload?: string | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeBrandRequest {
  /**
   * The ID of the Amazon Web Services account that owns the brand.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the Quick brand.
   *
   * @public
   */
  BrandId: string | undefined;

  /**
   * The ID of the specific version. The default value is the latest version.
   *
   * @public
   */
  VersionId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeBrandResponse {
  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The details of the brand.
   *
   * @public
   */
  BrandDetail?: BrandDetail | undefined;

  /**
   * The definition of the brand.
   *
   * @public
   */
  BrandDefinition?: BrandDefinition | undefined;
}

/**
 * @public
 */
export interface DescribeBrandAssignmentRequest {
  /**
   * The ID of the Amazon Web Services account that owns the brand assignment.
   *
   * @public
   */
  AwsAccountId: string | undefined;
}

/**
 * @public
 */
export interface DescribeBrandAssignmentResponse {
  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the brand.
   *
   * @public
   */
  BrandArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeBrandPublishedVersionRequest {
  /**
   * The ID of the Amazon Web Services account that owns the brand.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the Quick brand.
   *
   * @public
   */
  BrandId: string | undefined;
}

/**
 * @public
 */
export interface DescribeBrandPublishedVersionResponse {
  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The details of the brand.
   *
   * @public
   */
  BrandDetail?: BrandDetail | undefined;

  /**
   * The definition of the brand.
   *
   * @public
   */
  BrandDefinition?: BrandDefinition | undefined;
}

/**
 * @public
 */
export interface DescribeCustomPermissionsRequest {
  /**
   * The ID of the Amazon Web Services account that contains the custom permissions profile that you want described.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The name of the custom permissions profile to describe.
   *
   * @public
   */
  CustomPermissionsName: string | undefined;
}

/**
 * @public
 */
export interface DescribeCustomPermissionsResponse {
  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;

  /**
   * The custom permissions profile.
   *
   * @public
   */
  CustomPermissions?: CustomPermissions | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDashboardRequest {
  /**
   * The ID of the Amazon Web Services account that contains the dashboard that you're describing.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID for the dashboard.
   *
   * @public
   */
  DashboardId: string | undefined;

  /**
   * The version number for the dashboard. If a version number isn't passed, the latest published dashboard version is described.
   *
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * The alias name.
   *
   * @public
   */
  AliasName?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDashboardResponse {
  /**
   * Information about the dashboard.
   *
   * @public
   */
  Dashboard?: Dashboard | undefined;

  /**
   * The HTTP status of this request.
   *
   * @public
   */
  Status?: number | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDashboardDefinitionRequest {
  /**
   * The ID of the Amazon Web Services account that contains the dashboard that you're describing.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID for the dashboard.
   *
   * @public
   */
  DashboardId: string | undefined;

  /**
   * The version number for the dashboard. If a version number isn't passed, the latest published dashboard version is described.
   *
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * The alias name.
   *
   * @public
   */
  AliasName?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDashboardPermissionsRequest {
  /**
   * The ID of the Amazon Web Services account that contains the dashboard that you're describing permissions for.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID for the dashboard, also added to the IAM policy.
   *
   * @public
   */
  DashboardId: string | undefined;
}

/**
 * @public
 */
export interface DescribeDashboardPermissionsResponse {
  /**
   * The ID for the dashboard.
   *
   * @public
   */
  DashboardId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the dashboard.
   *
   * @public
   */
  DashboardArn?: string | undefined;

  /**
   * A structure that contains the permissions for the dashboard.
   *
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * A structure that contains the configuration of a shareable link that grants access to the dashboard. Your users can use the link to view and interact with the dashboard, if the dashboard has been shared with them. For more information about sharing dashboards, see [Sharing Dashboards](https://docs.aws.amazon.com/quicksight/latest/user/sharing-a-dashboard.html).
   *
   * @public
   */
  LinkSharingConfiguration?: LinkSharingConfiguration | undefined;
}

/**
 * @public
 */
export interface DescribeDashboardSnapshotJobRequest {
  /**
   * The ID of the Amazon Web Services account that the dashboard snapshot job is executed in.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the dashboard that you have started a snapshot job for.
   *
   * @public
   */
  DashboardId: string | undefined;

  /**
   * The ID of the job to be described. The job ID is set when you start a new job with a `StartDashboardSnapshotJob` API call.
   *
   * @public
   */
  SnapshotJobId: string | undefined;
}

/**
 * A structure that contains information on the Amazon S3 destinations of the generated snapshot.
 *
 * @public
 */
export interface SnapshotDestinationConfiguration {
  /**
   * A list of `SnapshotS3DestinationConfiguration` objects that contain Amazon S3 destination configurations. This structure can hold a maximum of 1 `S3DestinationConfiguration`.
   *
   * @public
   */
  S3Destinations?: SnapshotS3DestinationConfiguration[] | undefined;
}

/**
 * A structure that contains the information on the snapshot files.
 *
 * @public
 */
export interface SnapshotFileGroup {
  /**
   * A list of `SnapshotFile` objects that contain the information on the snapshot files that need to be generated. This structure can hold 1 configuration at a time.
   *
   * @public
   */
  Files?: SnapshotFile[] | undefined;
}

/**
 * Describes the configuration of the dashboard snapshot.
 *
 * @public
 */
export interface SnapshotConfiguration {
  /**
   * A list of `SnapshotJobResultFileGroup` objects that contain information about the snapshot that is generated. This list can hold a maximum of 6 `FileGroup` configurations.
   *
   * @public
   */
  FileGroups: SnapshotFileGroup[] | undefined;

  /**
   * A structure that contains information on the Amazon S3 bucket that the generated snapshot is stored in.
   *
   * @public
   */
  DestinationConfiguration?: SnapshotDestinationConfiguration | undefined;

  /**
   * A list of Quick Sight parameters and the list's override values.
   *
   * @public
   */
  Parameters?: _Parameters | undefined;
}

/**
 * Use this structure to redact sensitive information that you provide about an anonymous user from the snapshot.
 *
 * @public
 */
export interface SnapshotAnonymousUserRedacted {
  /**
   * The tag keys for the `RowLevelPermissionTags`.
   *
   * @public
   */
  RowLevelPermissionTagKeys?: string[] | undefined;
}

/**
 * A structure that contains information about the users that the dashboard snapshot is generated for. Sensitive user information is excluded.
 *
 * @public
 */
export interface SnapshotUserConfigurationRedacted {
  /**
   * An array of records that describe anonymous users that the dashboard snapshot is generated for. Sensitive user information is excluded.
   *
   * @public
   */
  AnonymousUsers?: SnapshotAnonymousUserRedacted[] | undefined;
}

/**
 * @public
 */
export interface DescribeDashboardSnapshotJobResponse {
  /**
   * The ID of the Amazon Web Services account that the dashboard snapshot job is executed in.
   *
   * @public
   */
  AwsAccountId?: string | undefined;

  /**
   * The ID of the dashboard that you have started a snapshot job for.
   *
   * @public
   */
  DashboardId?: string | undefined;

  /**
   * The ID of the job to be described. The job ID is set when you start a new job with a `StartDashboardSnapshotJob` API call.
   *
   * @public
   */
  SnapshotJobId?: string | undefined;

  /**
   * The user configuration for the snapshot job. This information is provided when you make a `StartDashboardSnapshotJob` API call.
   *
   * @public
   */
  UserConfiguration?: SnapshotUserConfigurationRedacted | undefined;

  /**
   * The snapshot configuration of the job. This information is provided when you make a `StartDashboardSnapshotJob` API call.
   *
   * @public
   */
  SnapshotConfiguration?: SnapshotConfiguration | undefined;

  /**
   * The Amazon Resource Name (ARN) for the snapshot job. The job ARN is generated when you start a new job with a `StartDashboardSnapshotJob` API call.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * Indicates the status of a job. The status updates as the job executes. This shows one of the following values.
   *
   * - `COMPLETED` - The job was completed successfully.
   * - `FAILED` - The job failed to execute.
   * - `QUEUED` - The job is queued and hasn't started yet.
   * - `RUNNING` - The job is still running.
   *
   * @public
   */
  JobStatus?: SnapshotJobStatus | undefined;

  /**
   * The time that the snapshot job was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The time that the snapshot job status was last updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the request
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface DescribeDashboardSnapshotJobResultRequest {
  /**
   * The ID of the Amazon Web Services account that the dashboard snapshot job is executed in.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the dashboard that you have started a snapshot job for.
   *
   * @public
   */
  DashboardId: string | undefined;

  /**
   * The ID of the job to be described. The job ID is set when you start a new job with a `StartDashboardSnapshotJob` API call.
   *
   * @public
   */
  SnapshotJobId: string | undefined;
}

/**
 * An object that contains information on the error that caused the snapshot job to fail.
 *
 * For more information, see [DescribeDashboardSnapshotJobResult API](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeDashboardSnapshotJobResult.html).
 *
 * @public
 */
export interface SnapshotJobErrorInfo {
  /**
   * The error message.
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * The error type.
   *
   * @public
   */
  ErrorType?: string | undefined;
}

/**
 * A structure that contains information about files that are requested for registered user during a `StartDashboardSnapshotJob` API call.
 *
 * @public
 */
export interface RegisteredUserSnapshotJobResult {
  /**
   * A list of `SnapshotJobResultFileGroup` objects that contain information on the files that are requested for registered user during a `StartDashboardSnapshotJob` API call. If the job succeeds, these objects contain the location where the snapshot artifacts are stored. If the job fails, the objects contain information about the error that caused the job to fail.
   *
   * @public
   */
  FileGroups?: SnapshotJobResultFileGroup[] | undefined;
}

/**
 * An object that provides information on the result of a snapshot job. This object provides information about the job, the job status, and the location of the generated file.
 *
 * @public
 */
export interface SnapshotJobResult {
  /**
   * A list of `AnonymousUserSnapshotJobResult` objects that contain information on anonymous users and their user configurations. This data provided by you when you make a `StartDashboardSnapshotJob` API call.
   *
   * @public
   */
  AnonymousUsers?: AnonymousUserSnapshotJobResult[] | undefined;

  /**
   * A list of `RegisteredUserSnapshotJobResult` objects that contain information about files that are requested for registered user during a `StartDashboardSnapshotJob` API call.
   *
   * @public
   */
  RegisteredUsers?: RegisteredUserSnapshotJobResult[] | undefined;
}

/**
 * @public
 */
export interface DescribeDashboardSnapshotJobResultResponse {
  /**
   * The Amazon Resource Name (ARN) for the snapshot job. The job ARN is generated when you start a new job with a `StartDashboardSnapshotJob` API call.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * Indicates the status of a job after it has reached a terminal state. A finished snapshot job will retuen a `COMPLETED` or `FAILED` status.
   *
   * @public
   */
  JobStatus?: SnapshotJobStatus | undefined;

  /**
   * The time that a snapshot job was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The time that a snapshot job status was last updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * The result of the snapshot job. Jobs that have successfully completed will return the S3Uri where they are located. Jobs that have failedwill return information on the error that caused the job to fail.
   *
   * @public
   */
  Result?: SnapshotJobResult | undefined;

  /**
   * Displays information for the error that caused a job to fail.
   *
   * @public
   */
  ErrorInfo?: SnapshotJobErrorInfo | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the request
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface DescribeDashboardsQAConfigurationRequest {
  /**
   * The ID of the Amazon Web Services account that contains the dashboard QA configuration that you want described.
   *
   * @public
   */
  AwsAccountId: string | undefined;
}

/**
 * @public
 */
export interface DescribeDashboardsQAConfigurationResponse {
  /**
   * The status of dashboards QA configuration that you want described.
   *
   * @public
   */
  DashboardsQAStatus?: DashboardsQAStatus | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface DescribeDataSetRequest {
  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID for the dataset that you want to describe. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  DataSetId: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataSetResponse {
  /**
   * Information on the dataset.
   *
   * @public
   */
  DataSet?: DataSet | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface DescribeDataSetPermissionsRequest {
  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID for the dataset that you want to describe. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  DataSetId: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataSetPermissionsResponse {
  /**
   * The Amazon Resource Name (ARN) of the dataset.
   *
   * @public
   */
  DataSetArn?: string | undefined;

  /**
   * The ID for the dataset that you want to describe. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  DataSetId?: string | undefined;

  /**
   * A list of resource permissions on the dataset.
   *
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface DescribeDataSetRefreshPropertiesRequest {
  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the dataset.
   *
   * @public
   */
  DataSetId: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataSetRefreshPropertiesResponse {
  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;

  /**
   * The dataset refresh properties.
   *
   * @public
   */
  DataSetRefreshProperties?: DataSetRefreshProperties | undefined;
}

/**
 * @public
 */
export interface DescribeDataSourceRequest {
  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  DataSourceId: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataSourceResponse {
  /**
   * The information on the data source.
   *
   * @public
   */
  DataSource?: DataSource | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface DescribeDataSourcePermissionsRequest {
  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  DataSourceId: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataSourcePermissionsResponse {
  /**
   * The Amazon Resource Name (ARN) of the data source.
   *
   * @public
   */
  DataSourceArn?: string | undefined;

  /**
   * The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  DataSourceId?: string | undefined;

  /**
   * A list of resource permissions on the data source.
   *
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface DescribeDefaultQBusinessApplicationRequest {
  /**
   * The ID of the Quick Sight account that is linked to the Amazon Q Business application that you want described.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The Quick Sight namespace that contains the linked Amazon Q Business application. If this field is left blank, the default namespace is used. Currently, the default namespace is the only valid value for this parameter.
   *
   * @public
   */
  Namespace?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDefaultQBusinessApplicationResponse {
  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;

  /**
   * The ID of the Amazon Q Business application that is linked to the Quick Sight account.
   *
   * @public
   */
  ApplicationId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDlpSettingRequest {
  /**
   * The ID of the Amazon Web Services account that contains the DLP setting that you want to describe.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the DLP setting that you want to describe.
   *
   * @public
   */
  DlpSettingId: string | undefined;
}

/**
 * The full configuration details of a DLP setting.
 *
 * @public
 */
export interface DlpSettingDetails {
  /**
   * The ID of the DLP setting.
   *
   * @public
   */
  DlpSettingId: string | undefined;

  /**
   * The display name of the DLP setting.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the DLP setting.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The status of the DLP setting. Valid values are `ACTIVE` and `INACTIVE`.
   *
   * @public
   */
  Status: DlpSettingStatus | undefined;

  /**
   * The type of external DLP provider used for sensitivity label classification.
   *
   * @public
   */
  ProviderType: DlpProviderType | undefined;

  /**
   * The provider-specific configuration for the DLP integration.
   *
   * @public
   */
  ProviderConfig: ProviderConfig | undefined;

  /**
   * The behavior applied when the DLP provider is unreachable. Valid values are `ALLOW`, `WARN`, and `BLOCK`.
   *
   * @public
   */
  ProviderOutageAction: DlpAction | undefined;

  /**
   * The date and time that the DLP setting was created, in ISO 8601 format.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The date and time that the DLP setting was most recently updated, in ISO 8601 format.
   *
   * @public
   */
  UpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface DescribeDlpSettingResponse {
  /**
   * The full configuration of the requested DLP setting, returned as a `DlpSettingDetails` object.
   *
   * @public
   */
  DlpSetting: DlpSettingDetails | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFlowRequest {
  /**
   * The ID of the Amazon Web Services account that contains the flow that you are describing.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The unique identifier of the flow.
   *
   * @public
   */
  FlowId: string | undefined;

  /**
   * The publish state of the flow version to describe. Valid values are `DRAFT`, `PUBLISHED`, or `PENDING_APPROVAL`.
   *
   * @public
   */
  PublishState: FlowPublishState | undefined;
}

/**
 * A mapping between a step identifier and its alias in a flow.
 *
 * @public
 */
export interface StepAliasMapping {
  /**
   * The unique identifier of the step.
   *
   * @public
   */
  StepId: string | undefined;

  /**
   * The alias for the step.
   *
   * @public
   */
  StepAlias: string | undefined;
}

/**
 * The full details of a flow, including its definition specifying the steps.
 *
 * @public
 */
export interface FlowDetail {
  /**
   * The Amazon Resource Name (ARN) of the flow.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The unique identifier of the flow.
   *
   * @public
   */
  FlowId: string | undefined;

  /**
   * The display name of the flow.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description of the flow.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The publish state of the flow. Valid values are `DRAFT`, `PUBLISHED`, or `PENDING_APPROVAL`.
   *
   * @public
   */
  PublishState: FlowPublishState | undefined;

  /**
   * The time this flow was created.
   *
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * The identifier of the principal who created the flow.
   *
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * The last time this flow was modified.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * The identifier of the last principal who updated the flow.
   *
   * @public
   */
  LastUpdatedBy?: string | undefined;

  /**
   * The definition of the flow, specifying the steps and configurations. This is the flow definition in Quick Flow's internal format. The format is subject to change.
   *
   * @public
   */
  FlowDefinition: __DocumentType | undefined;

  /**
   * A list of step alias mappings for the flow.
   *
   * @public
   */
  StepAliases?: StepAliasMapping[] | undefined;
}

/**
 * @public
 */
export interface DescribeFlowResponse {
  /**
   * The full details of the flow.
   *
   * @public
   */
  Flow: FlowDetail | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface DescribeFolderRequest {
  /**
   * The ID for the Amazon Web Services account that contains the folder.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the folder.
   *
   * @public
   */
  FolderId: string | undefined;
}

/**
 * A folder in Quick Sight.
 *
 * @public
 */
export interface Folder {
  /**
   * The ID of the folder.
   *
   * @public
   */
  FolderId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the folder.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * A display name for the folder.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The type of folder it is.
   *
   * @public
   */
  FolderType?: FolderType | undefined;

  /**
   * An array of ancestor ARN strings for the folder.
   *
   * @public
   */
  FolderPath?: string[] | undefined;

  /**
   * The time that the folder was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The time that the folder was last updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * The sharing scope of the folder.
   *
   * @public
   */
  SharingModel?: SharingModel | undefined;
}

/**
 * @public
 */
export interface DescribeFolderResponse {
  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;

  /**
   * Information about the folder.
   *
   * @public
   */
  Folder?: Folder | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFolderPermissionsRequest {
  /**
   * The ID for the Amazon Web Services account that contains the folder.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the folder.
   *
   * @public
   */
  FolderId: string | undefined;

  /**
   * The namespace of the folder whose permissions you want described.
   *
   * @public
   */
  Namespace?: string | undefined;

  /**
   * The maximum number of results to be returned per request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A pagination token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFolderPermissionsResponse {
  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;

  /**
   * The ID of the folder.
   *
   * @public
   */
  FolderId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the folder.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * Information about the permissions on the folder.
   *
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The pagination token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFolderResolvedPermissionsRequest {
  /**
   * The ID for the Amazon Web Services account that contains the folder.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the folder.
   *
   * @public
   */
  FolderId: string | undefined;

  /**
   * The namespace of the folder whose permissions you want described.
   *
   * @public
   */
  Namespace?: string | undefined;

  /**
   * The maximum number of results to be returned per request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A pagination token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFolderResolvedPermissionsResponse {
  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;

  /**
   * The ID of the folder.
   *
   * @public
   */
  FolderId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the folder.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * Information about the permissions for the folder.
   *
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * A pagination token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeGroupRequest {
  /**
   * The name of the group that you want to describe.
   *
   * @public
   */
  GroupName: string | undefined;

  /**
   * The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the Amazon Web Services account that contains your Amazon Quick Sight account.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The namespace of the group that you want described.
   *
   * @public
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface DescribeGroupResponse {
  /**
   * The name of the group.
   *
   * @public
   */
  Group?: Group | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface DescribeGroupMembershipRequest {
  /**
   * The user name of the user that you want to search for.
   *
   * @public
   */
  MemberName: string | undefined;

  /**
   * The name of the group that you want to search.
   *
   * @public
   */
  GroupName: string | undefined;

  /**
   * The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the Amazon Web Services account that contains your Amazon Quick Sight account.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The namespace that includes the group you are searching within.
   *
   * @public
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface DescribeGroupMembershipResponse {
  /**
   * A member of an Quick Sight group. Currently, group members must be users. Groups can't be members of another group. .
   *
   * @public
   */
  GroupMember?: GroupMember | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface DescribeIAMPolicyAssignmentRequest {
  /**
   * The ID of the Amazon Web Services account that contains the assignment that you want to describe.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The name of the assignment, also called a rule.
   *
   * @public
   */
  AssignmentName: string | undefined;

  /**
   * The namespace that contains the assignment.
   *
   * @public
   */
  Namespace: string | undefined;
}

/**
 * An Identity and Access Management (IAM) policy assignment.
 *
 * @public
 */
export interface IAMPolicyAssignment {
  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  AwsAccountId?: string | undefined;

  /**
   * Assignment ID.
   *
   * @public
   */
  AssignmentId?: string | undefined;

  /**
   * Assignment name.
   *
   * @public
   */
  AssignmentName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the IAM policy.
   *
   * @public
   */
  PolicyArn?: string | undefined;

  /**
   * Identities.
   *
   * @public
   */
  Identities?: Record<string, string[]> | undefined;

  /**
   * Assignment status.
   *
   * @public
   */
  AssignmentStatus?: AssignmentStatus | undefined;
}

/**
 * @public
 */
export interface DescribeIAMPolicyAssignmentResponse {
  /**
   * Information describing the IAM policy assignment.
   *
   * @public
   */
  IAMPolicyAssignment?: IAMPolicyAssignment | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface DescribeIngestionRequest {
  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the dataset used in the ingestion.
   *
   * @public
   */
  DataSetId: string | undefined;

  /**
   * An ID for the ingestion.
   *
   * @public
   */
  IngestionId: string | undefined;
}

/**
 * Error information for the SPICE ingestion of a dataset.
 *
 * @public
 */
export interface ErrorInfo {
  /**
   * Error type.
   *
   * @public
   */
  Type?: IngestionErrorType | undefined;

  /**
   * Error message.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Information about a queued dataset SPICE ingestion.
 *
 * @public
 */
export interface QueueInfo {
  /**
   * The ID of the queued ingestion.
   *
   * @public
   */
  WaitingOnIngestion: string | undefined;

  /**
   * The ID of the ongoing ingestion. The queued ingestion is waiting for the ongoing ingestion to complete.
   *
   * @public
   */
  QueuedIngestion: string | undefined;
}

/**
 * Information about rows for a data set SPICE ingestion.
 *
 * @public
 */
export interface RowInfo {
  /**
   * The number of rows that were ingested.
   *
   * @public
   */
  RowsIngested?: number | undefined;

  /**
   * The number of rows that were not ingested.
   *
   * @public
   */
  RowsDropped?: number | undefined;

  /**
   * The total number of rows in the dataset.
   *
   * @public
   */
  TotalRowsInDataset?: number | undefined;
}

/**
 * Information about the SPICE ingestion for a dataset.
 *
 * @public
 */
export interface Ingestion {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * Ingestion ID.
   *
   * @public
   */
  IngestionId?: string | undefined;

  /**
   * Ingestion status.
   *
   * @public
   */
  IngestionStatus: IngestionStatus | undefined;

  /**
   * Error information for this ingestion.
   *
   * @public
   */
  ErrorInfo?: ErrorInfo | undefined;

  /**
   * Information about rows for a data set SPICE ingestion.
   *
   * @public
   */
  RowInfo?: RowInfo | undefined;

  /**
   * Information about a queued dataset SPICE ingestion.
   *
   * @public
   */
  QueueInfo?: QueueInfo | undefined;

  /**
   * The time that this ingestion started.
   *
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * The time that this ingestion took, measured in seconds.
   *
   * @public
   */
  IngestionTimeInSeconds?: number | undefined;

  /**
   * The size of the data ingested, in bytes.
   *
   * @public
   */
  IngestionSizeInBytes?: number | undefined;

  /**
   * Event source for this ingestion.
   *
   * @public
   */
  RequestSource?: IngestionRequestSource | undefined;

  /**
   * Type of this ingestion.
   *
   * @public
   */
  RequestType?: IngestionRequestType | undefined;
}

/**
 * @public
 */
export interface DescribeIngestionResponse {
  /**
   * Information about the ingestion.
   *
   * @public
   */
  Ingestion?: Ingestion | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface DescribeIpRestrictionRequest {
  /**
   * The ID of the Amazon Web Services account that contains the IP rules.
   *
   * @public
   */
  AwsAccountId: string | undefined;
}

/**
 * @public
 */
export interface DescribeIpRestrictionResponse {
  /**
   * The ID of the Amazon Web Services account that contains the IP rules.
   *
   * @public
   */
  AwsAccountId?: string | undefined;

  /**
   * A map that describes the IP rules with CIDR range and description.
   *
   * @public
   */
  IpRestrictionRuleMap?: Record<string, string> | undefined;

  /**
   * A map of allowed VPC IDs and their rule descriptions.
   *
   * @public
   */
  VpcIdRestrictionRuleMap?: Record<string, string> | undefined;

  /**
   * A map of allowed VPC endpoint IDs and their rule descriptions.
   *
   * @public
   */
  VpcEndpointIdRestrictionRuleMap?: Record<string, string> | undefined;

  /**
   * A value that specifies whether IP rules are turned on.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface DescribeKeyRegistrationRequest {
  /**
   * The ID of the Amazon Web Services account that contains the customer managed key registration that you want to describe.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * Determines whether the request returns the default key only.
   *
   * @public
   */
  DefaultKeyOnly?: boolean | undefined;
}

/**
 * A customer managed key structure that contains the information listed below:
 *
 * - `KeyArn` - The ARN of a KMS key that is registered to a Quick Sight account for encryption and decryption use.
 * - `DefaultKey` - Indicates whether the current key is set as the default key for encryption and decryption use.
 *
 * @public
 */
export interface RegisteredCustomerManagedKey {
  /**
   * The ARN of the KMS key that is registered to a Quick Sight account for encryption and decryption use.
   *
   * @public
   */
  KeyArn?: string | undefined;

  /**
   * Indicates whether a `RegisteredCustomerManagedKey` is set as the default key for encryption and decryption use.
   *
   * @public
   */
  DefaultKey?: boolean | undefined;
}

/**
 * A structure that contains information about the `QDataKey`.
 *
 * @public
 */
export interface QDataKey {
  /**
   * The ARN of the KMS key that is registered to a Quick Sight account for encryption and decryption use as a `QDataKey`.
   *
   * @public
   */
  QDataKeyArn?: string | undefined;

  /**
   * The type of `QDataKey`.
   *
   * @public
   */
  QDataKeyType?: QDataKeyType | undefined;
}

/**
 * @public
 */
export interface DescribeKeyRegistrationResponse {
  /**
   * The ID of the Amazon Web Services account that contains the customer managed key registration specified in the request.
   *
   * @public
   */
  AwsAccountId?: string | undefined;

  /**
   * A list of `RegisteredCustomerManagedKey` objects in a Quick Sight account.
   *
   * @public
   */
  KeyRegistration?: RegisteredCustomerManagedKey[] | undefined;

  /**
   * A list of `QDataKey` objects in a Quick Sight account.
   *
   * @public
   */
  QDataKey?: QDataKey | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface DescribeKnowledgeBaseRequest {
  /**
   * The ID of the Amazon Web Services account that contains the knowledge base.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The unique identifier for the knowledge base.
   *
   * @public
   */
  KnowledgeBaseId: string | undefined;
}

/**
 * A summary of an ingestion job for a knowledge base.
 *
 * @public
 */
export interface KnowledgeBaseIngestionSummary {
  /**
   * The unique identifier for the ingestion job.
   *
   * @public
   */
  IngestionId: string | undefined;

  /**
   * The status of the ingestion job.
   *
   * @public
   */
  IngestionStatus: KbIngestionStatus | undefined;

  /**
   * The start time of the ingestion job.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The end time of the ingestion job.
   *
   * @public
   */
  EndTime?: Date | undefined;
}

/**
 * A knowledge base resource that provides data from connected sources for AI-powered experiences in Amazon QuickSight.
 *
 * @public
 */
export interface KnowledgeBase {
  /**
   * The Amazon Resource Name (ARN) of the knowledge base.
   *
   * @public
   */
  KnowledgeBaseArn: string | undefined;

  /**
   * The unique identifier for the knowledge base.
   *
   * @public
   */
  KnowledgeBaseId: string | undefined;

  /**
   * The name of the knowledge base.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The status of the knowledge base.
   *
   * @public
   */
  Status: DataSetStatus | undefined;

  /**
   * The ARN of the data source associated with the knowledge base.
   *
   * @public
   */
  DataSourceArn: string | undefined;

  /**
   * The configuration settings for the knowledge base.
   *
   * @public
   */
  KnowledgeBaseConfiguration: KnowledgeBaseConfiguration | undefined;

  /**
   * The media extraction configuration for the knowledge base.
   *
   * @public
   */
  MediaExtractionConfiguration?: MediaExtractionConfiguration | undefined;

  /**
   * The access control configuration for the knowledge base.
   *
   * @public
   */
  AccessControlConfiguration?: AccessControlConfiguration | undefined;

  /**
   * The type of the knowledge base.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The date and time that the knowledge base was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The date and time that the knowledge base was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * The description of the knowledge base.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Specifies whether email notifications are enabled for ingestion failures.
   *
   * @public
   */
  IsEmailNotificationOptedForIngestionFailures?: boolean | undefined;

  /**
   * A summary of the first completed ingestion for the knowledge base.
   *
   * @public
   */
  FirstCompletedIngestionSummary?: KnowledgeBaseIngestionSummary | undefined;

  /**
   * A summary of the first incomplete ingestion for the knowledge base.
   *
   * @public
   */
  FirstIncompleteIngestionSummary?: KnowledgeBaseIngestionSummary | undefined;

  /**
   * A summary of the most recent ingestion for the knowledge base.
   *
   * @public
   */
  LatestIngestionSummary?: KnowledgeBaseIngestionSummary | undefined;

  /**
   * The size of the knowledge base in bytes.
   *
   * @public
   */
  KnowledgeBaseSizeBytes?: number | undefined;

  /**
   * The number of documents in the knowledge base.
   *
   * @public
   */
  DocumentCount?: number | undefined;

  /**
   * The ARN of the primary owner of the knowledge base.
   *
   * @public
   */
  PrimaryOwnerArn?: string | undefined;

  /**
   * The username of the primary owner of the knowledge base.
   *
   * @public
   */
  PrimaryOwnerUsername?: string | undefined;
}

/**
 * @public
 */
export interface DescribeKnowledgeBaseResponse {
  /**
   * The knowledge base.
   *
   * @public
   */
  KnowledgeBase: KnowledgeBase | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface DescribeKnowledgeBasePermissionsRequest {
  /**
   * The ID of the Amazon Web Services account that contains the knowledge base.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The unique identifier for the knowledge base.
   *
   * @public
   */
  KnowledgeBaseId: string | undefined;
}

/**
 * @public
 */
export interface DescribeKnowledgeBasePermissionsResponse {
  /**
   * The Amazon Resource Name (ARN) of the knowledge base.
   *
   * @public
   */
  KnowledgeBaseArn: string | undefined;

  /**
   * The unique identifier for the knowledge base.
   *
   * @public
   */
  KnowledgeBaseId: string | undefined;

  /**
   * The resource permissions for the knowledge base.
   *
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface DescribeLimitsProfileRequest {
  /**
   * The unique identifier for the limits profile.
   *
   * @public
   */
  profileId: string | undefined;

  /**
   * The ID of the Amazon Web Services account that contains the limits profile.
   *
   * @public
   */
  accountId: string | undefined;
}

/**
 * A limits profile that defines resource usage limits for Amazon Quick Sight users. Limits profiles can be assigned to users, groups, or roles to control resource consumption.
 *
 * @public
 */
export interface LimitsProfile {
  /**
   * The unique identifier for the limits profile.
   *
   * @public
   */
  profileId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the limits profile.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The ID of the Amazon Web Services account that contains the limits profile.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The display name of the limits profile.
   *
   * @public
   */
  profileName: string | undefined;

  /**
   * The description of the limits profile.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A map of resource types to their limit values.
   *
   * @public
   */
  resourceLimits: Partial<Record<ResourceType, ProfileLimitValue>> | undefined;

  /**
   * The date and time that the limits profile was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time that the limits profile was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface DescribeLimitsProfileResponse {
  /**
   * The details of the requested limits profile, including its name, description, resource limits, and metadata.
   *
   * @public
   */
  profile: LimitsProfile | undefined;
}

/**
 * @public
 */
export interface DescribeNamespaceRequest {
  /**
   * The ID for the Amazon Web Services account that contains the Quick Sight namespace that you want to describe.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The namespace that you want to describe.
   *
   * @public
   */
  Namespace: string | undefined;
}

/**
 * Errors that occur during namespace creation.
 *
 * @public
 */
export interface NamespaceError {
  /**
   * The error type.
   *
   * @public
   */
  Type?: NamespaceErrorType | undefined;

  /**
   * The message for the error.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * The error type.
 *
 * @public
 */
export interface NamespaceInfoV2 {
  /**
   * The name of the error.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The namespace ARN.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The namespace Amazon Web Services Region.
   *
   * @public
   */
  CapacityRegion?: string | undefined;

  /**
   * The creation status of a namespace that is not yet completely created.
   *
   * @public
   */
  CreationStatus?: NamespaceStatus | undefined;

  /**
   * The identity store used for the namespace.
   *
   * @public
   */
  IdentityStore?: IdentityStore | undefined;

  /**
   * An error that occurred when the namespace was created.
   *
   * @public
   */
  NamespaceError?: NamespaceError | undefined;

  /**
   * The Amazon Resource Name (ARN) for the IAM Identity Center application.
   *
   * @public
   */
  IamIdentityCenterApplicationArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the IAM Identity Center instance.
   *
   * @public
   */
  IamIdentityCenterInstanceArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeNamespaceResponse {
  /**
   * The information about the namespace that you're describing. The response includes the namespace ARN, name, Amazon Web Services Region, creation status, and identity store. `DescribeNamespace` also works for namespaces that are in the process of being created. For incomplete namespaces, this API operation lists the namespace error types and messages associated with the creation process.
   *
   * @public
   */
  Namespace?: NamespaceInfoV2 | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface DescribeOAuthClientApplicationRequest {
  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the OAuthClientApplication that you want to describe.
   *
   * @public
   */
  OAuthClientApplicationId: string | undefined;
}

/**
 * An OAuth client application that is used to authenticate connections to a data source through an OAuth identity provider.
 *
 * @public
 */
export interface OAuthClientApplication {
  /**
   * The ID of the OAuthClientApplication. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  OAuthClientApplicationId?: string | undefined;

  /**
   * The display name of the OAuthClientApplication.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The OAuth client authentication type used by the OAuthClientApplication. Valid values are `TOKEN`.
   *
   * @public
   */
  OAuthClientAuthenticationType?: OAuthClientAuthenticationType | undefined;

  /**
   * The token endpoint URL of the identity provider that is used to obtain access tokens.
   *
   * @public
   */
  OAuthTokenEndpointUrl?: string | undefined;

  /**
   * The authorization endpoint URL of the identity provider that is used to obtain authorization codes.
   *
   * @public
   */
  OAuthAuthorizationEndpointUrl?: string | undefined;

  /**
   * The OAuth scopes that are requested when the OAuthClientApplication obtains an access token from the identity provider.
   *
   * @public
   */
  OAuthScopes?: string | undefined;

  /**
   * The type of data source that the OAuthClientApplication is used with. Valid values are `SNOWFLAKE`.
   *
   * @public
   */
  DataSourceType?: DataSourceType | undefined;

  /**
   * VPC connection properties.
   *
   * @public
   */
  IdentityProviderVpcConnectionProperties?: VpcConnectionProperties | undefined;

  /**
   * The time that the OAuthClientApplication was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The time that the OAuthClientApplication was last updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the OAuthClientApplication.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeOAuthClientApplicationResponse {
  /**
   * The information about the OAuthClientApplication.
   *
   * @public
   */
  OAuthClientApplication?: OAuthClientApplication | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface DescribeQPersonalizationConfigurationRequest {
  /**
   * The ID of the Amazon Web Services account that contains the personalization configuration that the user wants described.
   *
   * @public
   */
  AwsAccountId: string | undefined;
}

/**
 * @public
 */
export interface DescribeQPersonalizationConfigurationResponse {
  /**
   * A value that indicates whether personalization is enabled or not.
   *
   * @public
   */
  PersonalizationMode?: PersonalizationMode | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface DescribeQuickSightQSearchConfigurationRequest {
  /**
   * The ID of the Amazon Web Services account that contains the Quick Sight Q Search configuration that the user wants described.
   *
   * @public
   */
  AwsAccountId: string | undefined;
}

/**
 * @public
 */
export interface DescribeQuickSightQSearchConfigurationResponse {
  /**
   * The status of Quick Sight Q Search configuration.
   *
   * @public
   */
  QSearchStatus?: QSearchStatus | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface DescribeRefreshScheduleRequest {
  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the dataset.
   *
   * @public
   */
  DataSetId: string | undefined;

  /**
   * The ID of the refresh schedule.
   *
   * @public
   */
  ScheduleId: string | undefined;
}

/**
 * @public
 */
export interface DescribeRefreshScheduleResponse {
  /**
   * The refresh schedule.
   *
   * @public
   */
  RefreshSchedule?: RefreshSchedule | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the refresh schedule.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRoleCustomPermissionRequest {
  /**
   * The name of the role whose permissions you want described.
   *
   * @public
   */
  Role: Role | undefined;

  /**
   * The ID for the Amazon Web Services account that you want to create a group in. The Amazon Web Services account ID that you provide must be the same Amazon Web Services account that contains your Amazon Quick Sight account.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The namespace that contains the role.
   *
   * @public
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface DescribeRoleCustomPermissionResponse {
  /**
   * The name of the custom permission that is described.
   *
   * @public
   */
  CustomPermissionsName?: string | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface DescribeSelfUpgradeConfigurationRequest {
  /**
   * The ID of the Amazon Web Services account that contains the Quick self-upgrade configuration.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The Quick namespace that you want to describe the Quick self-upgrade configuration for.
   *
   * @public
   */
  Namespace: string | undefined;
}

/**
 * The self-upgrade configuration for the Quick account.
 *
 * @public
 */
export interface SelfUpgradeConfiguration {
  /**
   * Status set for the self-upgrade configuration for the Quick account. It can contain the following values:
   *
   * - `AUTO_APPROVAL`: All the self-upgrade requests will be auto approved.
   * - `ADMIN_APPROVAL`: All the self-upgrade requests will require admin approval.
   *
   * @public
   */
  SelfUpgradeStatus?: SelfUpgradeStatus | undefined;
}

/**
 * @public
 */
export interface DescribeSelfUpgradeConfigurationResponse {
  /**
   * The self-upgrade configuration for the Quick account.
   *
   * @public
   */
  SelfUpgradeConfiguration?: SelfUpgradeConfiguration | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface DescribeSpaceRequest {
  /**
   * The ID of the Amazon Web Services account that contains the space.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the space that you want to describe.
   *
   * @public
   */
  SpaceId: string | undefined;

  /**
   * The maximum number of contributors to include in the response.
   *
   * @public
   */
  MaxContributors?: number | undefined;
}

/**
 * A contributor to an Amazon QuickSight space.
 *
 * @public
 */
export interface SpaceContributor {
  /**
   * The user name of the contributor.
   *
   * @public
   */
  userName?: string | undefined;

  /**
   * The raw file size in bytes contributed by the user.
   *
   * @public
   */
  rawFileSizeBytes: number | undefined;

  /**
   * The percentage of total contributions made by the user.
   *
   * @public
   */
  percentage?: number | undefined;
}

/**
 * The details of a QuickSight resource in a space.
 *
 * @public
 */
export type SpaceQuickSightResourceDetails =
  | SpaceQuickSightResourceDetails.ResourceArnMember
  | SpaceQuickSightResourceDetails.$UnknownMember;

/**
 * @public
 */
export namespace SpaceQuickSightResourceDetails {
  /**
   * The ARN of the QuickSight resource.
   *
   * @public
   */
  export interface ResourceArnMember {
    resourceArn: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    resourceArn?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    resourceArn: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A QuickSight resource that is associated with a space.
 *
 * @public
 */
export interface SpaceQuickSightResource {
  /**
   * The type of the QuickSight resource.
   *
   * @public
   */
  resourceType: SpaceQuickSightResourceType | undefined;

  /**
   * The details of the QuickSight resource.
   *
   * @public
   */
  resourceDetails: SpaceQuickSightResourceDetails | undefined;
}

/**
 * The details of an Amazon QuickSight space.
 *
 * @public
 */
export interface SpaceDetails {
  /**
   * The display name of the space.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the space.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The resources in the space.
   *
   * @public
   */
  resources?: SpaceQuickSightResource[] | undefined;

  /**
   * The date and time that the space was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time that the space was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The total consumed source size in bytes.
   *
   * @public
   */
  consumedSourceSize?: number | undefined;

  /**
   * The number of consumed source documents.
   *
   * @public
   */
  consumedSourceDocCount?: number | undefined;

  /**
   * The user who created the space.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The ARN of the user who created the space.
   *
   * @public
   */
  createdByArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSpaceResponse {
  /**
   * The ID of the space.
   *
   * @public
   */
  spaceId: string | undefined;

  /**
   * The ARN of the space.
   *
   * @public
   */
  spaceArn?: string | undefined;

  /**
   * The details of the space.
   *
   * @public
   */
  Space: SpaceDetails | undefined;

  /**
   * A list of contributors to the space.
   *
   * @public
   */
  Contributors?: SpaceContributor[] | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSpacePermissionsRequest {
  /**
   * The ID of the Amazon Web Services account that contains the space.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the space that you want to describe permissions for.
   *
   * @public
   */
  SpaceId: string | undefined;
}

/**
 * @public
 */
export interface DescribeSpacePermissionsResponse {
  /**
   * The ID of the space.
   *
   * @public
   */
  spaceId: string | undefined;

  /**
   * The ARN of the space.
   *
   * @public
   */
  spaceArn?: string | undefined;

  /**
   * A list of resource permissions for the space.
   *
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTemplateRequest {
  /**
   * The ID of the Amazon Web Services account that contains the template that you're describing.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID for the template.
   *
   * @public
   */
  TemplateId: string | undefined;

  /**
   * (Optional) The number for the version to describe. If a `VersionNumber` parameter value isn't provided, the latest version of the template is described.
   *
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * The alias of the template that you want to describe. If you name a specific alias, you describe the version that the alias points to. You can specify the latest version of the template by providing the keyword `$LATEST` in the `AliasName` parameter. The keyword `$PUBLISHED` doesn't apply to templates.
   *
   * @public
   */
  AliasName?: string | undefined;
}

/**
 * List of errors that occurred when the template version creation failed.
 *
 * @public
 */
export interface TemplateError {
  /**
   * Type of error.
   *
   * @public
   */
  Type?: TemplateErrorType | undefined;

  /**
   * Description of the error type.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * An error path that shows which entities caused the template error.
   *
   * @public
   */
  ViolatedEntities?: Entity[] | undefined;
}

/**
 * A version of a template.
 *
 * @public
 */
export interface TemplateVersion {
  /**
   * The time that this template version was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * Errors associated with this template version.
   *
   * @public
   */
  Errors?: TemplateError[] | undefined;

  /**
   * The version number of the template version.
   *
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * The status that is associated with the template.
   *
   * - `CREATION_IN_PROGRESS`
   * - `CREATION_SUCCESSFUL`
   * - `CREATION_FAILED`
   * - `UPDATE_IN_PROGRESS`
   * - `UPDATE_SUCCESSFUL`
   * - `UPDATE_FAILED`
   * - `DELETED`
   *
   * @public
   */
  Status?: ResourceStatus | undefined;

  /**
   * Schema of the dataset identified by the placeholder. Any dashboard created from this template should be bound to new datasets matching the same schema described through this API operation.
   *
   * @public
   */
  DataSetConfigurations?: DataSetConfiguration[] | undefined;

  /**
   * Schema of the topic identified by the placeholder. Any dashboard created from this template should be bound to new topics matching the same schema described through this API operation.
   *
   * @public
   */
  TopicConfigurations?: TopicConfiguration[] | undefined;

  /**
   * The description of the template.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an analysis or template that was used to create this template.
   *
   * @public
   */
  SourceEntityArn?: string | undefined;

  /**
   * The ARN of the theme associated with this version of the template.
   *
   * @public
   */
  ThemeArn?: string | undefined;

  /**
   * A list of the associated sheets with the unique identifier and name of each sheet.
   *
   * @public
   */
  Sheets?: Sheet[] | undefined;
}

/**
 * A template object. A *template* is an entity in Quick Sight that encapsulates the metadata required to create an analysis and that you can use to create a dashboard. A template adds a layer of abstraction by using placeholders to replace the dataset associated with an analysis. You can use templates to create dashboards by replacing dataset placeholders with datasets that follow the same schema that was used to create the source analysis and template.
 *
 * You can share templates across Amazon Web Services accounts by allowing users in other Amazon Web Services accounts to create a template or a dashboard from an existing template.
 *
 * @public
 */
export interface Template {
  /**
   * The Amazon Resource Name (ARN) of the template.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The display name of the template.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A structure describing the versions of the template.
   *
   * @public
   */
  Version?: TemplateVersion | undefined;

  /**
   * The ID for the template. This is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  TemplateId?: string | undefined;

  /**
   * Time when this was last updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * Time when this was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeTemplateResponse {
  /**
   * The template structure for the object you want to describe.
   *
   * @public
   */
  Template?: Template | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTemplateAliasRequest {
  /**
   * The ID of the Amazon Web Services account that contains the template alias that you're describing.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID for the template.
   *
   * @public
   */
  TemplateId: string | undefined;

  /**
   * The name of the template alias that you want to describe. If you name a specific alias, you describe the version that the alias points to. You can specify the latest version of the template by providing the keyword `$LATEST` in the `AliasName` parameter. The keyword `$PUBLISHED` doesn't apply to templates.
   *
   * @public
   */
  AliasName: string | undefined;
}

/**
 * @public
 */
export interface DescribeTemplateAliasResponse {
  /**
   * Information about the template alias.
   *
   * @public
   */
  TemplateAlias?: TemplateAlias | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTemplateDefinitionRequest {
  /**
   * The ID of the Amazon Web Services account that contains the template. You must be using the Amazon Web Services account that the template is in.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the template that you're describing.
   *
   * @public
   */
  TemplateId: string | undefined;

  /**
   * The version number of the template.
   *
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * The alias of the template that you want to describe. If you name a specific alias, you describe the version that the alias points to. You can specify the latest version of the template by providing the keyword `$LATEST` in the `AliasName` parameter. The keyword `$PUBLISHED` doesn't apply to templates.
   *
   * @public
   */
  AliasName?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTemplatePermissionsRequest {
  /**
   * The ID of the Amazon Web Services account that contains the template that you're describing.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID for the template.
   *
   * @public
   */
  TemplateId: string | undefined;
}

/**
 * @public
 */
export interface DescribeTemplatePermissionsResponse {
  /**
   * The ID for the template.
   *
   * @public
   */
  TemplateId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the template.
   *
   * @public
   */
  TemplateArn?: string | undefined;

  /**
   * A list of resource permissions to be set on the template.
   *
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface DescribeThemeRequest {
  /**
   * The ID of the Amazon Web Services account that contains the theme that you're describing.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID for the theme.
   *
   * @public
   */
  ThemeId: string | undefined;

  /**
   * The version number for the version to describe. If a `VersionNumber` parameter value isn't provided, the latest version of the theme is described.
   *
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * The alias of the theme that you want to describe. If you name a specific alias, you describe the version that the alias points to. You can specify the latest version of the theme by providing the keyword `$LATEST` in the `AliasName` parameter. The keyword `$PUBLISHED` doesn't apply to themes.
   *
   * @public
   */
  AliasName?: string | undefined;
}

/**
 * Theme error.
 *
 * @public
 */
export interface ThemeError {
  /**
   * The type of error.
   *
   * @public
   */
  Type?: ThemeErrorType | undefined;

  /**
   * The error message.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * A version of a theme.
 *
 * @public
 */
export interface ThemeVersion {
  /**
   * The version number of the theme.
   *
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The description of the theme.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Quick Sight-defined ID of the theme that a custom theme inherits from. All themes initially inherit from a default Quick Sight theme.
   *
   * @public
   */
  BaseThemeId?: string | undefined;

  /**
   * The date and time that this theme version was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The theme configuration, which contains all the theme display properties.
   *
   * @public
   */
  Configuration?: ThemeConfiguration | undefined;

  /**
   * Errors associated with the theme.
   *
   * @public
   */
  Errors?: ThemeError[] | undefined;

  /**
   * The status of the theme version.
   *
   * @public
   */
  Status?: ResourceStatus | undefined;
}

/**
 * Summary information about a theme.
 *
 * @public
 */
export interface Theme {
  /**
   * The Amazon Resource Name (ARN) of the theme.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name that the user gives to the theme.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The identifier that the user gives to the theme.
   *
   * @public
   */
  ThemeId?: string | undefined;

  /**
   * A version of a theme.
   *
   * @public
   */
  Version?: ThemeVersion | undefined;

  /**
   * The date and time that the theme was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The date and time that the theme was last updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * The type of theme, based on how it was created. Valid values include: `QUICKSIGHT` and `CUSTOM`.
   *
   * @public
   */
  Type?: ThemeType | undefined;
}

/**
 * @public
 */
export interface DescribeThemeResponse {
  /**
   * The information about the theme that you are describing.
   *
   * @public
   */
  Theme?: Theme | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeThemeAliasRequest {
  /**
   * The ID of the Amazon Web Services account that contains the theme alias that you're describing.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID for the theme.
   *
   * @public
   */
  ThemeId: string | undefined;

  /**
   * The name of the theme alias that you want to describe.
   *
   * @public
   */
  AliasName: string | undefined;
}

/**
 * @public
 */
export interface DescribeThemeAliasResponse {
  /**
   * Information about the theme alias.
   *
   * @public
   */
  ThemeAlias?: ThemeAlias | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeThemePermissionsRequest {
  /**
   * The ID of the Amazon Web Services account that contains the theme that you're describing.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID for the theme that you want to describe permissions for.
   *
   * @public
   */
  ThemeId: string | undefined;
}

/**
 * @public
 */
export interface DescribeThemePermissionsResponse {
  /**
   * The ID for the theme.
   *
   * @public
   */
  ThemeId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the theme.
   *
   * @public
   */
  ThemeArn?: string | undefined;

  /**
   * A list of resource permissions set on the theme.
   *
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface DescribeTopicRequest {
  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the topic that you want to describe. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  TopicId: string | undefined;
}

/**
 * @public
 */
export interface DescribeTopicResponse {
  /**
   * The Amazon Resource Name (ARN) of the topic.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of the topic that you want to describe. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  TopicId?: string | undefined;

  /**
   * The definition of a topic.
   *
   * @public
   */
  Topic?: TopicDetails | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;

  /**
   * Custom instructions for the topic.
   *
   * @public
   */
  CustomInstructions?: CustomInstructions | undefined;
}

/**
 * @public
 */
export interface DescribeTopicPermissionsRequest {
  /**
   * The ID of the Amazon Web Services account that contains the topic that you want described.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the topic that you want to describe. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  TopicId: string | undefined;
}

/**
 * @public
 */
export interface DescribeTopicPermissionsResponse {
  /**
   * The ID of the topic that you want to describe. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  TopicId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the topic.
   *
   * @public
   */
  TopicArn?: string | undefined;

  /**
   * A list of resource permissions that are configured to the topic.
   *
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTopicPermissionsV2Request {
  /**
   * The ID of the Amazon Web Services account that contains the topic that you want described.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the topic that you want to describe. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  TopicId: string | undefined;
}

/**
 * @public
 */
export interface DescribeTopicPermissionsV2Response {
  /**
   * The ID of the topic that you want to describe. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  TopicId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the topic.
   *
   * @public
   */
  TopicArn?: string | undefined;

  /**
   * A list of resource permissions that are configured to the topic.
   *
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTopicRefreshRequest {
  /**
   * The ID of the Amazon Web Services account that contains the topic whose refresh you want to describe.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the topic that you want to describe. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  TopicId: string | undefined;

  /**
   * The ID of the refresh, which is performed when the topic is created or updated.
   *
   * @public
   */
  RefreshId: string | undefined;
}

/**
 * The details about the refresh of a topic.
 *
 * @public
 */
export interface TopicRefreshDetails {
  /**
   * The Amazon Resource Name (ARN) of the topic refresh.
   *
   * @public
   */
  RefreshArn?: string | undefined;

  /**
   * The ID of the refresh, which occurs as a result of topic creation or topic update.
   *
   * @public
   */
  RefreshId?: string | undefined;

  /**
   * The status of the refresh job that indicates whether the job is still running, completed successfully, or failed.
   *
   * @public
   */
  RefreshStatus?: TopicRefreshStatus | undefined;
}

/**
 * @public
 */
export interface DescribeTopicRefreshResponse {
  /**
   * Details of the refresh, which is performed when the topic is created or updated.
   *
   * @public
   */
  RefreshDetails?: TopicRefreshDetails | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface DescribeTopicRefreshScheduleRequest {
  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the topic that contains the refresh schedule that you want to describe. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  TopicId: string | undefined;

  /**
   * The ID of the dataset.
   *
   * @public
   */
  DatasetId: string | undefined;
}

/**
 * @public
 */
export interface DescribeTopicRefreshScheduleResponse {
  /**
   * The ID of the topic that contains the refresh schedule that you want to describe. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  TopicId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the topic.
   *
   * @public
   */
  TopicArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the dataset.
   *
   * @public
   */
  DatasetArn?: string | undefined;

  /**
   * The definition of a refresh schedule.
   *
   * @public
   */
  RefreshSchedule?: TopicRefreshSchedule | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTopicV2Request {
  /**
   * The ID of the Amazon Web Services account that contains the topic that you want to describe.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the topic that you want to describe. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  TopicId: string | undefined;
}

/**
 * @public
 */
export interface DescribeTopicV2Response {
  /**
   * The Amazon Resource Name (ARN) of the topic.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of the topic that you want to describe. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  TopicId?: string | undefined;

  /**
   * The definition of a topic.
   *
   * @public
   */
  Topic?: TopicV2Details | undefined;

  /**
   * Instructions that provide additional guidance and context for response generation.
   *
   * @public
   */
  CustomInstructions?: CustomInstructions | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeUserRequest {
  /**
   * The name of the user that you want to describe.
   *
   * @public
   */
  UserName: string | undefined;

  /**
   * The ID for the Amazon Web Services account that the user is in. Currently, you use the ID for the Amazon Web Services account that contains your Amazon Quick Sight account.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The namespace. Currently, you should set this to `default`.
   *
   * @public
   */
  Namespace: string | undefined;
}

/**
 * A registered user of Quick Sight.
 *
 * @public
 */
export interface User {
  /**
   * The Amazon Resource Name (ARN) for the user.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The user's user name. This value is required if you are registering a user that will be managed in Quick Sight. In the output, the value for `UserName` is `N/A` when the value for `IdentityType` is `IAM` and the corresponding IAM user is deleted.
   *
   * @public
   */
  UserName?: string | undefined;

  /**
   * The user's email address.
   *
   * @public
   */
  Email?: string | undefined;

  /**
   * The Quick Sight role for the user. The user role can be one of the following:.
   *
   * - `READER`: A user who has read-only access to dashboards.
   * - `AUTHOR`: A user who can create data sources, datasets, analyses, and dashboards.
   * - `ADMIN`: A user who is an author, who can also manage Amazon Quick Sight settings.
   * - `READER_PRO`: Reader Pro adds Generative BI capabilities to the Reader role. Reader Pros have access to Amazon Q in Quick Sight, can build stories with Amazon Q, and can generate executive summaries from dashboards.
   * - `AUTHOR_PRO`: Author Pro adds Generative BI capabilities to the Author role. Author Pros can author dashboards with natural language with Amazon Q, build stories with Amazon Q, create Topics for Q&A, and generate executive summaries from dashboards.
   * - `ADMIN_PRO`: Admin Pros are Author Pros who can also manage Quick Sight administrative settings. Admin Pro users are billed at Author Pro pricing.
   * - `RESTRICTED_READER`: This role isn't currently available for use.
   * - `RESTRICTED_AUTHOR`: This role isn't currently available for use.
   *
   * @public
   */
  Role?: UserRole | undefined;

  /**
   * The type of identity authentication used by the user.
   *
   * @public
   */
  IdentityType?: IdentityType | undefined;

  /**
   * The active status of user. When you create an Quick Sight user that's not an IAM user or an Active Directory user, that user is inactive until they sign in and provide a password.
   *
   * @public
   */
  Active?: boolean | undefined;

  /**
   * The principal ID of the user.
   *
   * @public
   */
  PrincipalId?: string | undefined;

  /**
   * The custom permissions profile associated with this user.
   *
   * @public
   */
  CustomPermissionsName?: string | undefined;

  /**
   * The type of supported external login provider that provides identity to let the user federate into Quick Sight with an associated IAM role. The type can be one of the following.
   *
   * - `COGNITO`: Amazon Cognito. The provider URL is cognito-identity.amazonaws.com.
   * - `CUSTOM_OIDC`: Custom OpenID Connect (OIDC) provider.
   *
   * @public
   */
  ExternalLoginFederationProviderType?: string | undefined;

  /**
   * The URL of the external login provider.
   *
   * @public
   */
  ExternalLoginFederationProviderUrl?: string | undefined;

  /**
   * The identity ID for the user in the external login provider.
   *
   * @public
   */
  ExternalLoginId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeUserResponse {
  /**
   * The user name.
   *
   * @public
   */
  User?: User | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface DescribeVPCConnectionRequest {
  /**
   * The Amazon Web Services account ID of the account that contains the VPC connection that you want described.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the VPC connection that you're creating. This ID is a unique identifier for each Amazon Web Services Region in an Amazon Web Services account.
   *
   * @public
   */
  VPCConnectionId: string | undefined;
}

/**
 * The structure that contains information about a network interface.
 *
 * @public
 */
export interface NetworkInterface {
  /**
   * The subnet ID associated with the network interface.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * The availability zone that the network interface resides in.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * An error message.
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * The status of the network interface.
   *
   * @public
   */
  Status?: NetworkInterfaceStatus | undefined;

  /**
   * The network interface ID.
   *
   * @public
   */
  NetworkInterfaceId?: string | undefined;
}

/**
 * The structure of a VPC connection.
 *
 * @public
 */
export interface VPCConnection {
  /**
   * The ID of the VPC connection that you're creating. This ID is a unique identifier for each Amazon Web Services Region in an Amazon Web Services account.
   *
   * @public
   */
  VPCConnectionId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the VPC connection.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The display name for the VPC connection.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon EC2 VPC ID associated with the VPC connection.
   *
   * @public
   */
  VPCId?: string | undefined;

  /**
   * The Amazon EC2 security group IDs associated with the VPC connection.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * A list of IP addresses of DNS resolver endpoints for the VPC connection.
   *
   * @public
   */
  DnsResolvers?: string[] | undefined;

  /**
   * The status of the VPC connection.
   *
   * @public
   */
  Status?: VPCConnectionResourceStatus | undefined;

  /**
   * The availability status of the VPC connection.
   *
   * @public
   */
  AvailabilityStatus?: VPCConnectionAvailabilityStatus | undefined;

  /**
   * A list of network interfaces.
   *
   * @public
   */
  NetworkInterfaces?: NetworkInterface[] | undefined;

  /**
   * The ARN of the IAM role associated with the VPC connection.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The time that the VPC connection was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The time that the VPC connection was last updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeVPCConnectionResponse {
  /**
   * A response object that provides information for the specified VPC connection.
   *
   * @public
   */
  VPCConnection?: VPCConnection | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * A summary of a DLP setting returned by list operations.
 *
 * @public
 */
export interface DlpSettingSummary {
  /**
   * The ID of the DLP setting.
   *
   * @public
   */
  DlpSettingId: string | undefined;

  /**
   * The display name of the DLP setting.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the DLP setting.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The status of the DLP setting. Valid values are `ACTIVE` and `INACTIVE`.
   *
   * @public
   */
  Status: DlpSettingStatus | undefined;

  /**
   * The type of external DLP provider used for sensitivity label classification.
   *
   * @public
   */
  ProviderType: DlpProviderType | undefined;

  /**
   * The date and time that the DLP setting was created, in ISO 8601 format.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The date and time that the DLP setting was most recently updated, in ISO 8601 format.
   *
   * @public
   */
  UpdatedAt: Date | undefined;
}

/**
 * An entry that appears when a `KeyRegistration` update to Quick Sight fails.
 *
 * @public
 */
export interface FailedKeyRegistrationEntry {
  /**
   * The ARN of the KMS key that failed to update.
   *
   * @public
   */
  KeyArn?: string | undefined;

  /**
   * A message that provides information about why a `FailedKeyRegistrationEntry` error occurred.
   *
   * @public
   */
  Message: string | undefined;

  /**
   * The HTTP status of a `FailedKeyRegistrationEntry` error.
   *
   * @public
   */
  StatusCode: number | undefined;

  /**
   * A boolean that indicates whether a `FailedKeyRegistrationEntry` resulted from user error. If the value of this property is `True`, the error was caused by user error. If the value of this property is `False`, the error occurred on the backend. If your job continues fail and with a `False` `SenderFault` value, contact Amazon Web Services Support.
   *
   * @public
   */
  SenderFault: boolean | undefined;
}

/**
 * A resource operation that failed.
 *
 * @public
 */
export interface FailedSpaceResourceOperation {
  /**
   * The type of the resource.
   *
   * @public
   */
  ResourceType: SpaceQuickSightResourceType | undefined;

  /**
   * The details of the resource.
   *
   * @public
   */
  ResourceDetails?: SpaceQuickSightResourceDetails | undefined;

  /**
   * The error message that describes why the operation failed.
   *
   * @public
   */
  ErrorMessage: string | undefined;
}

/**
 * Information about a per-ARN failure when updating agent associations.
 *
 * @public
 */
export interface FailedToUpdateAssociation {
  /**
   * The ARN that could not be added or removed.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * A description of the failure.
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * The error code for the failure.
   *
   * @public
   */
  ErrorCode?: string | undefined;
}

/**
 * The basic information of the flow exluding its definition specifying the steps.
 *
 * @public
 */
export interface FlowSummary {
  /**
   * The Amazon Resource Name (ARN) of the flow.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The unique identifier of the flow.
   *
   * @public
   */
  FlowId: string | undefined;

  /**
   * The display name of the flow.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description of the flow.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The time this flow was created.
   *
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * The identifier of the principal who created the flow.
   *
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * The last time this flow was modified.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * The identifier of the last principal who updated the flow.
   *
   * @public
   */
  LastUpdatedBy?: string | undefined;

  /**
   * The publish state for the flow. The valid values are `DRAFT`, `PUBLISHED`, or `PENDING_APPROVAL`.
   *
   * @public
   */
  PublishState?: FlowPublishState | undefined;

  /**
   * The number of runs done for the flow.
   *
   * @public
   */
  RunCount?: number | undefined;

  /**
   * The number of users who have used the flow.
   *
   * @public
   */
  UserCount?: number | undefined;

  /**
   * The identifier of the last principal who published the flow.
   *
   * @public
   */
  LastPublishedBy?: string | undefined;

  /**
   * The last time this flow was published.
   *
   * @public
   */
  LastPublishedAt?: Date | undefined;
}

/**
 * An object that consists of a member Amazon Resource Name (ARN) and a member ID.
 *
 * @public
 */
export interface MemberIdArnPair {
  /**
   * The ID of the member.
   *
   * @public
   */
  MemberId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the member.
   *
   * @public
   */
  MemberArn?: string | undefined;
}

/**
 * A filter to use to search an Quick Sight folder.
 *
 * @public
 */
export interface FolderSearchFilter {
  /**
   * The comparison operator that you want to use as a filter, for example `"Operator": "StringEquals"`. Valid values are `"StringEquals"` and `"StringLike"`.
   *
   * If you set the operator value to `"StringEquals"`, you need to provide an ownership related filter in the `"NAME"` field and the arn of the user or group whose folders you want to search in the `"Value"` field. For example, `"Name":"DIRECT_QUICKSIGHT_OWNER", "Operator": "StringEquals", "Value": "arn:aws:quicksight:us-east-1:1:user/default/UserName1"`.
   *
   * If you set the value to `"StringLike"`, you need to provide the name of the folders you are searching for. For example, `"Name":"FOLDER_NAME", "Operator": "StringLike", "Value": "Test"`. The `"StringLike"` operator only supports the `NAME` value `FOLDER_NAME`.
   *
   * @public
   */
  Operator?: FilterOperator | undefined;

  /**
   * The name of a value that you want to use in the filter. For example, `"Name": "QUICKSIGHT_OWNER"`.
   *
   * Valid values are defined as follows:
   *
   * - `QUICKSIGHT_VIEWER_OR_OWNER`: Provide an ARN of a user or group, and any folders with that ARN listed as one of the folder's owners or viewers are returned. Implicit permissions from folders or groups are considered.
   * - `QUICKSIGHT_OWNER`: Provide an ARN of a user or group, and any folders with that ARN listed as one of the owners of the folders are returned. Implicit permissions from folders or groups are considered.
   * - `DIRECT_QUICKSIGHT_SOLE_OWNER`: Provide an ARN of a user or group, and any folders with that ARN listed as the only owner of the folder are returned. Implicit permissions from folders or groups are not considered.
   * - `DIRECT_QUICKSIGHT_OWNER`: Provide an ARN of a user or group, and any folders with that ARN listed as one of the owners of the folders are returned. Implicit permissions from folders or groups are not considered.
   * - `DIRECT_QUICKSIGHT_VIEWER_OR_OWNER`: Provide an ARN of a user or group, and any folders with that ARN listed as one of the owners or viewers of the folders are returned. Implicit permissions from folders or groups are not considered.
   * - `FOLDER_NAME`: Any folders whose names have a substring match to this value will be returned.
   * - `PARENT_FOLDER_ARN`: Provide an ARN of a folder, and any folders that are directly under that parent folder are returned. If you choose to use this option and leave the value blank, all root-level folders in the account are returned.
   *
   * @public
   */
  Name?: FolderFilterAttribute | undefined;

  /**
   * The value of the named item (in this example, `PARENT_FOLDER_ARN`), that you want to use as a filter. For example, `"Value": "arn:aws:quicksight:us-east-1:1:folder/folderId"`.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * A summary of information about an existing Quick Sight folder.
 *
 * @public
 */
export interface FolderSummary {
  /**
   * The Amazon Resource Name (ARN) of the folder.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of the folder.
   *
   * @public
   */
  FolderId?: string | undefined;

  /**
   * The display name of the folder.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The type of folder.
   *
   * @public
   */
  FolderType?: FolderType | undefined;

  /**
   * The time that the folder was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The time that the folder was last updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * The sharing scope of the folder.
   *
   * @public
   */
  SharingModel?: SharingModel | undefined;
}

/**
 * The QA result that is made from generated answer.
 *
 * @public
 */
export interface GeneratedAnswerResult {
  /**
   * The question text.
   *
   * @public
   */
  QuestionText?: string | undefined;

  /**
   * The answer status of the generated answer.
   *
   * @public
   */
  AnswerStatus?: GeneratedAnswerStatus | undefined;

  /**
   * The ID of the topic.
   *
   * @public
   */
  TopicId?: string | undefined;

  /**
   * The name of the topic.
   *
   * @public
   */
  TopicName?: string | undefined;

  /**
   * The restatement for the answer.
   *
   * @public
   */
  Restatement?: string | undefined;

  /**
   * The ID of the question.
   *
   * @public
   */
  QuestionId?: string | undefined;

  /**
   * The ID of the answer.
   *
   * @public
   */
  AnswerId?: string | undefined;

  /**
   * The URL of the question.
   *
   * @public
   */
  QuestionUrl?: string | undefined;
}

/**
 * The key-value pair used for the row-level security tags feature.
 *
 * @public
 */
export interface SessionTag {
  /**
   * The key for the tag.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value that you want to assign the tag.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface GenerateEmbedUrlForAnonymousUserRequest {
  /**
   * The ID for the Amazon Web Services account that contains the dashboard that you're embedding.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * How many minutes the session is valid. The session lifetime must be in [15-600] minutes range.
   *
   * @public
   */
  SessionLifetimeInMinutes?: number | undefined;

  /**
   * The Amazon Quick Sight namespace that the anonymous user virtually belongs to. If you are not using an Amazon Quick custom namespace, set this to `default`.
   *
   * @public
   */
  Namespace: string | undefined;

  /**
   * Session tags are user-specified strings that identify a session in your application. You can use these tags to implement row-level security (RLS) controls. Before you use the `SessionTags` parameter, make sure that you have configured the relevant datasets using the `DataSet$RowLevelPermissionTagConfiguration` parameter so that session tags can be used to provide row-level security.
   *
   * When using `SessionTags` in `GenerateEmbedUrlForAnonymousUser`,
   *
   * - Treat `SessionTags` as security credentials. Do not expose `SessionTags` to end users or client-side code.
   * - Implement server-side controls. Ensure that `SessionTags` are set exclusively by your trusted backend services, not by parameters that end users can modify.
   * - Protect `SessionTags` from enumeration. Ensure that users in one tenant cannot discover or guess sessionTag values belonging to other tenants.
   * - Review your architecture. If downstream customers or partners are allowed to call the `GenerateEmbedUrlForAnonymousUser` API directly, evaluate whether those parties could specify sessionTag values for tenants they should not access.
   *
   * Besides, these are not the tags used for the Amazon Web Services resource tagging feature. For more information, see [Using Row-Level Security (RLS) with Tags](https://docs.aws.amazon.com/quicksight/latest/user/quicksight-dev-rls-tags.html) in the *Amazon Quick User Guide*.
   *
   * @public
   */
  SessionTags?: SessionTag[] | undefined;

  /**
   * The Amazon Resource Names (ARNs) for the Quick Sight resources that the user is authorized to access during the lifetime of the session.
   *
   * If you choose `Dashboard` embedding experience, pass the list of dashboard ARNs in the account that you want the user to be able to view.
   *
   * If you want to make changes to the theme of your embedded content, pass a list of theme ARNs that the anonymous users need access to.
   *
   * Currently, you can pass up to 25 theme ARNs in each API call.
   *
   * @public
   */
  AuthorizedResourceArns: string[] | undefined;

  /**
   * The configuration of the experience that you are embedding.
   *
   * @public
   */
  ExperienceConfiguration: AnonymousUserEmbeddingExperienceConfiguration | undefined;

  /**
   * The domains that you want to add to the allow list for access to the generated URL that is then embedded. This optional parameter overrides the static domains that are configured in the Manage Quick Sight menu in the Amazon Quick Sight console. Instead, it allows only the domains that you include in this parameter. You can list up to three domains or subdomains in each API call.
   *
   * To include all subdomains under a specific domain to the allow list, use `*`. For example, `https://*.sapp.amazon.com` includes all subdomains under `https://sapp.amazon.com`.
   *
   * @public
   */
  AllowedDomains?: string[] | undefined;
}

/**
 * @public
 */
export interface GenerateEmbedUrlForAnonymousUserResponse {
  /**
   * The embed URL for the dashboard.
   *
   * @public
   */
  EmbedUrl: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status: number | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) to use for the anonymous Amazon Quick user.
   *
   * @public
   */
  AnonymousUserArn: string | undefined;
}

/**
 * The recent snapshots configuration for an embedded Quick Sight dashboard.
 *
 * @public
 */
export interface RecentSnapshotsConfigurations {
  /**
   * The recent snapshots configuration for an embedded Quick Sight dashboard.
   *
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * The schedules configuration for an embedded Quick Sight dashboard.
 *
 * @public
 */
export interface SchedulesConfigurations {
  /**
   * The schedules configuration for an embedded Quick Sight dashboard.
   *
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * The state perssitence configuration of an embedded dashboard.
 *
 * @public
 */
export interface StatePersistenceConfigurations {
  /**
   * Determines if a Quick Sight dashboard's state persistence settings are turned on or off.
   *
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * The threshold alerts configuration for an embedded Quick Sight dashboard.
 *
 * @public
 */
export interface ThresholdAlertsConfigurations {
  /**
   * The threshold alerts configuration for an embedded Quick Sight dashboard.
   *
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * The feature configuration for an embedded dashboard.
 *
 * @public
 */
export interface RegisteredUserDashboardFeatureConfigurations {
  /**
   * The state persistence settings of an embedded dashboard.
   *
   * @public
   */
  StatePersistence?: StatePersistenceConfigurations | undefined;

  /**
   * The bookmarks configuration for an embedded dashboard in Amazon Quick Sight.
   *
   * @public
   */
  Bookmarks?: BookmarksConfigurations | undefined;

  /**
   * The shared view settings of an embedded dashboard.
   *
   * @public
   */
  SharedView?: SharedViewConfigurations | undefined;

  /**
   * The Amazon Q configurations of an embedded Amazon Quick Sight dashboard.
   *
   * @public
   */
  AmazonQInQuickSight?: AmazonQInQuickSightDashboardConfigurations | undefined;

  /**
   * The schedules configuration for an embedded Quick Sight dashboard.
   *
   * @public
   */
  Schedules?: SchedulesConfigurations | undefined;

  /**
   * The recent snapshots configuration for an Quick Sight embedded dashboard
   *
   * @public
   */
  RecentSnapshots?: RecentSnapshotsConfigurations | undefined;

  /**
   * The threshold alerts configuration for an Quick Sight embedded dashboard.
   *
   * @public
   */
  ThresholdAlerts?: ThresholdAlertsConfigurations | undefined;

  /**
   * The dashboard customization summary configuration for an embedded Quick Sight dashboard.
   *
   * @public
   */
  DashboardCustomizationSummary?: DashboardCustomizationSummaryConfigurations | undefined;
}

/**
 * Information about the dashboard you want to embed.
 *
 * @public
 */
export interface RegisteredUserDashboardEmbeddingConfiguration {
  /**
   * The dashboard ID for the dashboard that you want the user to see first. This ID is included in the output URL. When the URL in response is accessed, Amazon Quick Sight renders this dashboard if the user has permissions to view it.
   *
   * If the user does not have permission to view this dashboard, they see a permissions error message.
   *
   * @public
   */
  InitialDashboardId: string | undefined;

  /**
   * The feature configurations of an embbedded Amazon Quick Sight dashboard.
   *
   * @public
   */
  FeatureConfigurations?: RegisteredUserDashboardFeatureConfigurations | undefined;
}

/**
 * The experience that you are embedding. You can use this object to generate a url that embeds a visual into your application.
 *
 * @public
 */
export interface RegisteredUserDashboardVisualEmbeddingConfiguration {
  /**
   * The visual ID for the visual that you want the user to embed. This ID is included in the output URL. When the URL in response is accessed, Amazon Quick Sight renders this visual.
   *
   * The Amazon Resource Name (ARN) of the dashboard that the visual belongs to must be included in the `AuthorizedResourceArns` parameter. Otherwise, the request will fail with `InvalidParameterValueException`.
   *
   * @public
   */
  InitialDashboardVisualId: DashboardVisualId | undefined;
}

/**
 * An object that provides information about the configuration of a Generative Q&A experience.
 *
 * @public
 */
export interface RegisteredUserGenerativeQnAEmbeddingConfiguration {
  /**
   * The ID of the new Q reader experience topic that you want to make the starting topic in the Generative Q&A experience. You can find a topic ID by navigating to the Topics pane in the Quick application and opening a topic. The ID is in the URL for the topic that you open.
   *
   * If you don't specify an initial topic or you specify a legacy topic, a list of all shared new reader experience topics is shown in the Generative Q&A experience for your readers. When you select an initial new reader experience topic, you can specify whether or not readers are allowed to select other new reader experience topics from the available ones in the list.
   *
   * @public
   */
  InitialTopicId?: string | undefined;
}

/**
 * Information about the Q search bar embedding experience.
 *
 * @public
 */
export interface RegisteredUserQSearchBarEmbeddingConfiguration {
  /**
   * The ID of the legacy Q topic that you want to use as the starting topic in the Q search bar. To locate the topic ID of the topic that you want to use, open the [Quick Sight console](https://quicksight.aws.amazon.com/), navigate to the **Topics** pane, and choose thre topic that you want to use. The `TopicID` is located in the URL of the topic that opens. When you select an initial topic, you can specify whether or not readers are allowed to select other topics from the list of available topics.
   *
   * If you don't specify an initial topic or if you specify a new reader experience topic, a list of all shared legacy topics is shown in the Q bar.
   *
   * @public
   */
  InitialTopicId?: string | undefined;
}

/**
 * An object that provides information about the configuration of a chat agent.
 *
 * @public
 */
export interface RegisteredUserQuickChatEmbeddingConfiguration {}

/**
 * The feature configurations of an embedded Amazon Quick Sight console.
 *
 * @public
 */
export interface RegisteredUserConsoleFeatureConfigurations {
  /**
   * The state persistence configurations of an embedded Amazon Quick Sight console.
   *
   * @public
   */
  StatePersistence?: StatePersistenceConfigurations | undefined;

  /**
   * The shared view settings of an embedded dashboard.
   *
   * @public
   */
  SharedView?: SharedViewConfigurations | undefined;

  /**
   * The Amazon Q configurations of an embedded Amazon Quick Sight console.
   *
   * @public
   */
  AmazonQInQuickSight?: AmazonQInQuickSightConsoleConfigurations | undefined;

  /**
   * The schedules configuration for an embedded Quick Sight dashboard.
   *
   * @public
   */
  Schedules?: SchedulesConfigurations | undefined;

  /**
   * The recent snapshots configuration for an embedded Quick Sight dashboard.
   *
   * @public
   */
  RecentSnapshots?: RecentSnapshotsConfigurations | undefined;

  /**
   * The threshold alerts configuration for an embedded Quick Sight dashboard.
   *
   * @public
   */
  ThresholdAlerts?: ThresholdAlertsConfigurations | undefined;

  /**
   * The dashboard customization summary configuration for an embedded Quick Sight console.
   *
   * @public
   */
  DashboardCustomizationSummary?: DashboardCustomizationSummaryConfigurations | undefined;
}

/**
 * Information about the Amazon Quick Sight console that you want to embed.
 *
 * @public
 */
export interface RegisteredUserQuickSightConsoleEmbeddingConfiguration {
  /**
   * The initial URL path for the Amazon Quick Sight console. `InitialPath` is required.
   *
   * The entry point URL is constrained to the following paths:
   *
   * - `/start`
   * - `/start/analyses`
   * - `/start/dashboards`
   * - `/start/favorites`
   * - `/dashboards/DashboardId`. *DashboardId* is the actual ID key from the Amazon Quick Sight console URL of the dashboard.
   * - `/analyses/AnalysisId`. *AnalysisId* is the actual ID key from the Amazon Quick Sight console URL of the analysis.
   *
   * @public
   */
  InitialPath?: string | undefined;

  /**
   * The embedding configuration of an embedded Amazon Quick Sight console.
   *
   * @public
   */
  FeatureConfigurations?: RegisteredUserConsoleFeatureConfigurations | undefined;
}

/**
 * The type of experience you want to embed. For registered users, you can embed Quick dashboards or the Amazon Quick Sight console.
 *
 * > **Note:** Exactly one of the experience configurations is required. You can choose `Dashboard` or `QuickSightConsole`. You cannot choose more than one experience configuration.
 *
 * @public
 */
export interface RegisteredUserEmbeddingExperienceConfiguration {
  /**
   * The configuration details for providing a dashboard embedding experience.
   *
   * @public
   */
  Dashboard?: RegisteredUserDashboardEmbeddingConfiguration | undefined;

  /**
   * The configuration details for providing each Amazon Quick Sight console embedding experience. This can be used along with custom permissions to restrict access to certain features. For more information, see [Customizing Access to the Amazon Quick Sight Console](https://docs.aws.amazon.com/quicksight/latest/user/customizing-permissions-to-the-quicksight-console.html) in the *Amazon Quick User Guide*.
   *
   * Use `GenerateEmbedUrlForRegisteredUser` where you want to provide an authoring portal that allows users to create data sources, datasets, analyses, and dashboards. The users who accesses an embedded Amazon Quick Sight console needs to belong to the author or admin security cohort. If you want to restrict permissions to some of these features, add a custom permissions profile to the user with the `UpdateUser` API operation. Use the `RegisterUser` API operation to add a new user with a custom permission profile attached. For more information, see the following sections in the *Amazon Quick User Guide*:
   *
   * - [Embedding the Full Functionality of the Amazon Quick Sight Console for Authenticated Users](https://docs.aws.amazon.com/quicksight/latest/user/embedded-analytics-full-console-for-authenticated-users.html)
   * - [Customizing Access to the Amazon Quick Console](https://docs.aws.amazon.com/quicksight/latest/user/customizing-permissions-to-the-quicksight-console.html)
   *
   * For more information about the high-level steps for embedding and for an interactive demo of the ways you can customize embedding, visit the [Amazon Quick Developer Portal](https://docs.aws.amazon.com/quicksight/latest/user/quicksight-dev-portal.html).
   *
   * @public
   */
  QuickSightConsole?: RegisteredUserQuickSightConsoleEmbeddingConfiguration | undefined;

  /**
   * The configuration details for embedding the Q search bar.
   *
   * For more information about embedding the Q search bar, see [Embedding Overview](https://docs.aws.amazon.com/quicksight/latest/user/embedding-overview.html) in the *Amazon Quick Sight User Guide*.
   *
   * @public
   */
  QSearchBar?: RegisteredUserQSearchBarEmbeddingConfiguration | undefined;

  /**
   * The type of embedding experience. In this case, Amazon Quick Sight visuals.
   *
   * @public
   */
  DashboardVisual?: RegisteredUserDashboardVisualEmbeddingConfiguration | undefined;

  /**
   * The configuration details for embedding the Generative Q&A experience.
   *
   * For more information about embedding the Generative Q&A experience, see [Embedding Overview](https://docs.aws.amazon.com/quicksight/latest/user/embedding-overview.html) in the *Amazon Quick Sight User Guide*.
   *
   * @public
   */
  GenerativeQnA?: RegisteredUserGenerativeQnAEmbeddingConfiguration | undefined;

  /**
   * The configuration details for embedding the Quick chat agent.
   *
   * @public
   */
  QuickChat?: RegisteredUserQuickChatEmbeddingConfiguration | undefined;
}

/**
 * @public
 */
export interface GenerateEmbedUrlForRegisteredUserRequest {
  /**
   * The ID for the Amazon Web Services account that contains the dashboard that you're embedding.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * How many minutes the session is valid. The session lifetime must be in [15-600] minutes range.
   *
   * @public
   */
  SessionLifetimeInMinutes?: number | undefined;

  /**
   * The Amazon Resource Name for the registered user.
   *
   * @public
   */
  UserArn: string | undefined;

  /**
   * The experience that you want to embed. For registered users, you can embed Quick dashboards, Amazon Quick Sight visuals, the Amazon Quick Sight Q search bar, the Amazon Quick Sight Generative Q&A experience, or the entire Amazon Quick Sight console.
   *
   * @public
   */
  ExperienceConfiguration: RegisteredUserEmbeddingExperienceConfiguration | undefined;

  /**
   * The domains that you want to add to the allow list for access to the generated URL that is then embedded. This optional parameter overrides the static domains that are configured in the Manage Quick Sight menu in the Amazon Quick Sight console. Instead, it allows only the domains that you include in this parameter. You can list up to three domains or subdomains in each API call.
   *
   * To include all subdomains under a specific domain to the allow list, use `*`. For example, `https://*.sapp.amazon.com` includes all subdomains under `https://sapp.amazon.com`.
   *
   * @public
   */
  AllowedDomains?: string[] | undefined;
}

/**
 * @public
 */
export interface GenerateEmbedUrlForRegisteredUserResponse {
  /**
   * The embed URL for the Amazon Quick Sight dashboard, visual, Q search bar, Generative Q&A experience, or console.
   *
   * @public
   */
  EmbedUrl: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status: number | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId: string | undefined;
}

/**
 * @public
 */
export interface GenerateEmbedUrlForRegisteredUserWithIdentityRequest {
  /**
   * The ID of the Amazon Web Services registered user.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The validity of the session in minutes.
   *
   * @public
   */
  SessionLifetimeInMinutes?: number | undefined;

  /**
   * The type of experience you want to embed. For registered users, you can embed Quick dashboards or the Amazon Quick Sight console.
   *
   * > **Note:** Exactly one of the experience configurations is required. You can choose `Dashboard` or `QuickSightConsole`. You cannot choose more than one experience configuration.
   *
   * @public
   */
  ExperienceConfiguration: RegisteredUserEmbeddingExperienceConfiguration | undefined;

  /**
   * A list of domains to be allowed to generate the embed URL.
   *
   * @public
   */
  AllowedDomains?: string[] | undefined;
}

/**
 * @public
 */
export interface GenerateEmbedUrlForRegisteredUserWithIdentityResponse {
  /**
   * The generated embed URL for the registered user.
   *
   * @public
   */
  EmbedUrl: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status: number | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId: string | undefined;
}

/**
 * @public
 */
export interface GetDashboardEmbedUrlRequest {
  /**
   * The ID for the Amazon Web Services account that contains the dashboard that you're embedding.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID for the dashboard, also added to the Identity and Access Management (IAM) policy.
   *
   * @public
   */
  DashboardId: string | undefined;

  /**
   * The authentication method that the user uses to sign in.
   *
   * @public
   */
  IdentityType: EmbeddingIdentityType | undefined;

  /**
   * How many minutes the session is valid. The session lifetime must be 15-600 minutes.
   *
   * @public
   */
  SessionLifetimeInMinutes?: number | undefined;

  /**
   * Remove the undo/redo button on the embedded dashboard. The default is FALSE, which enables the undo/redo button.
   *
   * @public
   */
  UndoRedoDisabled?: boolean | undefined;

  /**
   * Remove the reset button on the embedded dashboard. The default is FALSE, which enables the reset button.
   *
   * @public
   */
  ResetDisabled?: boolean | undefined;

  /**
   * Adds persistence of state for the user session in an embedded dashboard. Persistence applies to the sheet and the parameter settings. These are control settings that the dashboard subscriber (Amazon Quick Sight reader) chooses while viewing the dashboard. If this is set to `TRUE`, the settings are the same when the subscriber reopens the same dashboard URL. The state is stored in Amazon Quick Sight, not in a browser cookie. If this is set to FALSE, the state of the user session is not persisted. The default is `FALSE`.
   *
   * @public
   */
  StatePersistenceEnabled?: boolean | undefined;

  /**
   * The Amazon Quick user's Amazon Resource Name (ARN), for use with `QUICKSIGHT` identity type. You can use this for any Amazon Quick users in your account (readers, authors, or admins) authenticated as one of the following:
   *
   * - Active Directory (AD) users or group members
   * - Invited nonfederated users
   * - IAM users and IAM role-based sessions authenticated through Federated Single Sign-On using SAML, OpenID Connect, or IAM federation.
   *
   * Omit this parameter for users in the third group – IAM users and IAM role-based sessions.
   *
   * @public
   */
  UserArn?: string | undefined;

  /**
   * The Amazon Quick Sight namespace that contains the dashboard IDs in this request. If you're not using a custom namespace, set `Namespace = default`.
   *
   * @public
   */
  Namespace?: string | undefined;

  /**
   * A list of one or more dashboard IDs that you want anonymous users to have tempporary access to. Currently, the `IdentityType` parameter must be set to `ANONYMOUS` because other identity types authenticate as Quick or IAM users. For example, if you set "`--dashboard-id dash_id1 --dashboard-id dash_id2 dash_id3 identity-type ANONYMOUS`", the session can access all three dashboards.
   *
   * @public
   */
  AdditionalDashboardIds?: string[] | undefined;
}

/**
 * Output returned from the `GetDashboardEmbedUrl` operation.
 *
 * @public
 */
export interface GetDashboardEmbedUrlResponse {
  /**
   * A single-use URL that you can put into your server-side webpage to embed your dashboard. This URL is valid for 5 minutes. The API operation provides the URL with an `auth_code` value that enables one (and only one) sign-on to a user session that is valid for 10 hours.
   *
   * @public
   */
  EmbedUrl?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface GetFlowMetadataInput {
  /**
   * The ID of the Amazon Web Services account that contains the flow that you are getting metadata for.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The unique identifier of the flow.
   *
   * @public
   */
  FlowId: string | undefined;
}

/**
 * @public
 */
export interface GetFlowMetadataOutput {
  /**
   * The Amazon Resource Name (ARN) of the flow.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The unique identifier of the flow.
   *
   * @public
   */
  FlowId: string | undefined;

  /**
   * A display name for the flow.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description for the flow.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The publish state for the flow. Valid values are `DRAFT`, `PUBLISHED`, or `PENDING_APPROVAL`.
   *
   * @public
   */
  PublishState?: FlowPublishState | undefined;

  /**
   * The number of users who have used the flow.
   *
   * @public
   */
  UserCount?: number | undefined;

  /**
   * The number of runs done for the flow.
   *
   * @public
   */
  RunCount?: number | undefined;

  /**
   * The time this flow was created.
   *
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * The last time this flow was modified.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface GetFlowPermissionsInput {
  /**
   * The ID of the Amazon Web Services account that contains the flow that you are getting permissions for.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The unique identifier of the flow to get permissions from.
   *
   * @public
   */
  FlowId: string | undefined;
}

/**
 * @public
 */
export interface GetFlowPermissionsOutput {
  /**
   * The Amazon Resource Name (ARN) of the flow you are getting permissions against.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The unique identifier of the flow with permissions.
   *
   * @public
   */
  FlowId: string | undefined;

  /**
   * A structure that contains the permissions for the flow.
   *
   * @public
   */
  Permissions: Permission[] | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * A structure that contains information to identify a user.
 *
 * @public
 */
export type UserIdentifier =
  | UserIdentifier.EmailMember
  | UserIdentifier.UserArnMember
  | UserIdentifier.UserNameMember
  | UserIdentifier.$UnknownMember;

/**
 * @public
 */
export namespace UserIdentifier {
  /**
   * The name of the user that you want to get identity context for.
   *
   * @public
   */
  export interface UserNameMember {
    UserName: string;
    Email?: never;
    UserArn?: never;
    $unknown?: never;
  }

  /**
   * The email address of the user that you want to get identity context for.
   *
   * @public
   */
  export interface EmailMember {
    UserName?: never;
    Email: string;
    UserArn?: never;
    $unknown?: never;
  }

  /**
   * The Amazon Resource Name (ARN) of the user that you want to get identity context for.
   *
   * @public
   */
  export interface UserArnMember {
    UserName?: never;
    Email?: never;
    UserArn: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    UserName?: never;
    Email?: never;
    UserArn?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    UserName: (value: string) => T;
    Email: (value: string) => T;
    UserArn: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * ///////////////////////// /////////////////////////
 *
 * @public
 */
export interface GetIdentityContextRequest {
  /**
   * The ID for the Amazon Web Services account that the user whose identity context you want to retrieve is in. Currently, you use the ID for the Amazon Web Services account that contains your Quick Sight account.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The identifier for the user whose identity context you want to retrieve.
   *
   * @public
   */
  UserIdentifier: UserIdentifier | undefined;

  /**
   * The namespace of the user that you want to get identity context for. This parameter is required when the UserIdentifier is specified using Email or UserName.
   *
   * @public
   */
  Namespace?: string | undefined;

  /**
   * The timestamp at which the session will expire.
   *
   * @public
   */
  SessionExpiresAt?: Date | undefined;

  /**
   * The region in which the context is to be used. Use this parameter to obtain an identity context for cross-region use.
   *
   * The specified region must meet the following conditions:
   *
   * - The region must be in the same Amazon Web Services partition as the region you are calling from. Cross-partition requests are not supported. For example, you cannot specify a region in the `aws-cn` partition when calling from a region in the `aws` partition.
   * - It must be a valid Amazon QuickSight supported region.
   * - The calling customer account must be enabled in the specified context region.
   * - This parameter is not supported when calling from an opt-in region.
   *
   * @public
   */
  ContextRegion?: string | undefined;
}

/**
 * @public
 */
export interface GetIdentityContextResponse {
  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status: number | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId: string | undefined;

  /**
   * The identity context information for the user. This is an identity token that should be used as the ContextAssertion parameter in the [STS AssumeRole API](https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html) call to obtain identity enhanced Amazon Web Services credentials.
   *
   * @public
   */
  Context?: string | undefined;
}

/**
 * @public
 */
export interface GetSessionEmbedUrlRequest {
  /**
   * The ID for the Amazon Web Services account associated with your Amazon Quick Sight subscription.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The URL you use to access the embedded session. The entry point URL is constrained to the following paths:
   *
   * - `/start`
   * - `/start/analyses`
   * - `/start/dashboards`
   * - `/start/favorites`
   * - `/dashboards/DashboardId` - where `DashboardId` is the actual ID key from the Amazon Quick Sight console URL of the dashboard
   * - `/analyses/AnalysisId` - where `AnalysisId` is the actual ID key from the Amazon Quick Sight console URL of the analysis
   *
   * @public
   */
  EntryPoint?: string | undefined;

  /**
   * How many minutes the session is valid. The session lifetime must be 15-600 minutes.
   *
   * @public
   */
  SessionLifetimeInMinutes?: number | undefined;

  /**
   * The Amazon Quick user's Amazon Resource Name (ARN), for use with `QUICKSIGHT` identity type. You can use this for any type of Amazon Quick users in your account (readers, authors, or admins). They need to be authenticated as one of the following:
   *
   * 1. Active Directory (AD) users or group members
   * 2. Invited nonfederated users
   * 3. IAM users and IAM role-based sessions authenticated through Federated Single Sign-On using SAML, OpenID Connect, or IAM federation
   *
   * Omit this parameter for users in the third group, IAM users and IAM role-based sessions.
   *
   * @public
   */
  UserArn?: string | undefined;
}

/**
 * @public
 */
export interface GetSessionEmbedUrlResponse {
  /**
   * A single-use URL that you can put into your server-side web page to embed your Quick session. This URL is valid for 5 minutes. The API operation provides the URL with an `auth_code` value that enables one (and only one) sign-on to a user session that is valid for 10 hours.
   *
   * @public
   */
  EmbedUrl?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * A `GroupSearchFilter` object that you want to apply to your search.
 *
 * @public
 */
export interface GroupSearchFilter {
  /**
   * The comparison operator that you want to use as a filter, for example `"Operator": "StartsWith"`. Currently, the only supported operator is `StartsWith`.
   *
   * @public
   */
  Operator: GroupFilterOperator | undefined;

  /**
   * The name of the value that you want to use as a filter, for example `"Name": "GROUP_NAME"`. Currently, the only supported name is `GROUP_NAME`.
   *
   * @public
   */
  Name: GroupFilterAttribute | undefined;

  /**
   * The value of the named item, in this case `GROUP_NAME`, that you want to use as a filter.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * IAM policy assignment summary.
 *
 * @public
 */
export interface IAMPolicyAssignmentSummary {
  /**
   * Assignment name.
   *
   * @public
   */
  AssignmentName?: string | undefined;

  /**
   * Assignment status.
   *
   * @public
   */
  AssignmentStatus?: AssignmentStatus | undefined;
}

/**
 * A filter to apply when searching knowledge bases.
 *
 * @public
 */
export interface KnowledgeBaseSearchFilter {
  /**
   * The name of the field to filter on.
   *
   * @public
   */
  name: KnowledgeBaseSearchFilterName | undefined;

  /**
   * The comparison operator to use for the filter.
   *
   * @public
   */
  operator: KnowledgeBaseSearchOperator | undefined;

  /**
   * The value to filter on.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * The sort configuration for searching knowledge bases.
 *
 * @public
 */
export interface KnowledgeBaseSortBy {
  /**
   * The field to sort by.
   *
   * @public
   */
  sortByField: KnowledgeBaseSortByField | undefined;

  /**
   * The sort order (ascending or descending).
   *
   * @public
   */
  sortOrder: SortOrder | undefined;
}

/**
 * A summary of a knowledge base, including its identifier, name, status, and metadata.
 *
 * @public
 */
export interface KnowledgeBaseSummary {
  /**
   * The Amazon Resource Name (ARN) of the knowledge base.
   *
   * @public
   */
  KnowledgeBaseArn: string | undefined;

  /**
   * The unique identifier for the knowledge base.
   *
   * @public
   */
  KnowledgeBaseId: string | undefined;

  /**
   * The name of the knowledge base.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The status of the knowledge base.
   *
   * @public
   */
  Status: DataSetStatus | undefined;

  /**
   * The ARN of the data source associated with the knowledge base.
   *
   * @public
   */
  DataSourceArn: string | undefined;

  /**
   * The type of the knowledge base.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The date and time that the knowledge base was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The date and time that the knowledge base was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * The size of the knowledge base in bytes.
   *
   * @public
   */
  KnowledgeBaseSizeBytes?: number | undefined;

  /**
   * The number of documents in the knowledge base.
   *
   * @public
   */
  DocumentCount?: number | undefined;

  /**
   * The ARN of the primary owner of the knowledge base.
   *
   * @public
   */
  PrimaryOwnerArn?: string | undefined;

  /**
   * The username of the primary owner of the knowledge base.
   *
   * @public
   */
  PrimaryOwnerUsername?: string | undefined;
}

/**
 * @public
 */
export interface ListActionConnectorsRequest {
  /**
   * The Amazon Web Services account ID for which to list action connectors.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The maximum number of action connectors to return in a single response. Valid range is 1 to 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A pagination token to retrieve the next set of results. Use the token returned from a previous call to continue listing action connectors.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListActionConnectorsResponse {
  /**
   * A list of action connector summaries containing basic information about each connector.
   *
   * @public
   */
  ActionConnectorSummaries: ActionConnectorSummary[] | undefined;

  /**
   * A pagination token to retrieve the next set of results. If null, there are no more results to retrieve.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status code of the request.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface ListAgentsRequest {
  /**
   * The ID of the Amazon Web Services account that contains the agents.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAgentsResponse {
  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * A list of agent summaries.
   *
   * @public
   */
  AgentSummaries: AgentSummary[] | undefined;

  /**
   * The token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAnalysesRequest {
  /**
   * The ID of the Amazon Web Services account that contains the analyses.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * A pagination token that can be used in a subsequent request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAnalysesResponse {
  /**
   * Metadata describing each of the analyses that are listed.
   *
   * @public
   */
  AnalysisSummaryList?: AnalysisSummary[] | undefined;

  /**
   * A pagination token that can be used in a subsequent request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface ListApprovalPoliciesRequest {
  /**
   * The token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single call. If you don't specify a value, the service returns a default number of results. Use the `NextToken` value in the response to retrieve additional results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListApprovalPoliciesResponse {
  /**
   * The list of approval policies.
   *
   * @public
   */
  Policies: ApprovalPolicy[] | undefined;

  /**
   * The token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAppsRequest {
  /**
   * The ID of the Amazon Web Services account that contains the apps.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The maximum number of results to return in a single request. Valid range is 1 to 100. If you don't specify a value, the default is 20.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAppsResponse {
  /**
   * A list of app summaries.
   *
   * @public
   */
  AppSummaryList: AppSummary[] | undefined;

  /**
   * The token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface ListAssetBundleExportJobsRequest {
  /**
   * The ID of the Amazon Web Services account that the export jobs were executed in.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to be returned per request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAssetBundleExportJobsResponse {
  /**
   * A list of export job summaries.
   *
   * @public
   */
  AssetBundleExportJobSummaryList?: AssetBundleExportJobSummary[] | undefined;

  /**
   * The token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface ListAssetBundleImportJobsRequest {
  /**
   * The ID of the Amazon Web Services account that the import jobs were executed in.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to be returned per request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAssetBundleImportJobsResponse {
  /**
   * A list of import job summaries.
   *
   * @public
   */
  AssetBundleImportJobSummaryList?: AssetBundleImportJobSummary[] | undefined;

  /**
   * The token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the response.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface ListBrandsRequest {
  /**
   * The ID of the Amazon Web Services account that owns the brands that you want to list.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The maximum number of results to be returned in a single request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBrandsResponse {
  /**
   * The token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of all brands in your Amazon Web Services account. This structure provides basic information about each brand.
   *
   * @public
   */
  Brands?: BrandSummary[] | undefined;
}

/**
 * @public
 */
export interface ListCustomPermissionsRequest {
  /**
   * The ID of the Amazon Web Services account that contains the custom permissions profiles that you want to list.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCustomPermissionsResponse {
  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;

  /**
   * A list of custom permissions profiles.
   *
   * @public
   */
  CustomPermissionsList?: CustomPermissions[] | undefined;

  /**
   * The token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface ListDashboardsRequest {
  /**
   * The ID of the Amazon Web Services account that contains the dashboards that you're listing.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to be returned per request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDashboardsResponse {
  /**
   * A structure that contains all of the dashboards in your Amazon Web Services account. This structure provides basic information about the dashboards.
   *
   * @public
   */
  DashboardSummaryList?: DashboardSummary[] | undefined;

  /**
   * The token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface ListDashboardVersionsRequest {
  /**
   * The ID of the Amazon Web Services account that contains the dashboard that you're listing versions for.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID for the dashboard.
   *
   * @public
   */
  DashboardId: string | undefined;

  /**
   * The token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to be returned per request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDashboardVersionsResponse {
  /**
   * A structure that contains information about each version of the dashboard.
   *
   * @public
   */
  DashboardVersionSummaryList?: DashboardVersionSummary[] | undefined;

  /**
   * The token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface ListDataSetsRequest {
  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to be returned per request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDataSetsResponse {
  /**
   * The list of dataset summaries.
   *
   * @public
   */
  DataSetSummaries?: DataSetSummary[] | undefined;

  /**
   * The token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface ListDataSourcesRequest {
  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to be returned per request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDataSourcesResponse {
  /**
   * A list of data sources.
   *
   * @public
   */
  DataSources?: DataSource[] | undefined;

  /**
   * The token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface ListDlpSettingsRequest {
  /**
   * The ID of the Amazon Web Services account that contains the DLP settings that you want to list.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDlpSettingsResponse {
  /**
   * A list of `DlpSettingSummary` objects for the DLP settings in the account. The list is empty if no DLP settings have been configured.
   *
   * @public
   */
  DlpSettingSummaries: DlpSettingSummary[] | undefined;

  /**
   * The token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface ListFlowsInput {
  /**
   * The ID of the Amazon Web Services account that contains the flow list that you are getting.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The token to request the next set of results, or null if you want to retrieve the first set.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to be returned per request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListFlowsOutput {
  /**
   * A structure that contains all of the flows in your Amazon Web Services account. This structure provides basic information about the flows.
   *
   * @public
   */
  FlowSummaryList?: FlowSummary[] | undefined;

  /**
   * The token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface ListFolderMembersRequest {
  /**
   * The ID for the Amazon Web Services account that contains the folder.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the folder.
   *
   * @public
   */
  FolderId: string | undefined;

  /**
   * The token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to be returned per request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListFolderMembersResponse {
  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;

  /**
   * A structure that contains all of the folder members (dashboards, analyses, and datasets) in the folder.
   *
   * @public
   */
  FolderMemberList?: MemberIdArnPair[] | undefined;

  /**
   * The token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface ListFoldersRequest {
  /**
   * The ID for the Amazon Web Services account that contains the folder.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to be returned per request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListFoldersResponse {
  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;

  /**
   * A structure that contains all of the folders in the Amazon Web Services account. This structure provides basic information about the folders.
   *
   * @public
   */
  FolderSummaryList?: FolderSummary[] | undefined;

  /**
   * The token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface ListFoldersForResourceRequest {
  /**
   * The ID for the Amazon Web Services account that contains the resource.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) the resource whose folders you need to list.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to be returned per request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListFoldersForResourceResponse {
  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;

  /**
   * A list that contains the Amazon Resource Names (ARNs) of all folders that the resource is a member of.
   *
   * @public
   */
  Folders?: string[] | undefined;

  /**
   * The token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface ListGroupMembershipsRequest {
  /**
   * The name of the group that you want to see a membership list of.
   *
   * @public
   */
  GroupName: string | undefined;

  /**
   * A pagination token that can be used in a subsequent request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return from this request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the Amazon Web Services account that contains your Amazon Quick Sight account.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The namespace of the group that you want a list of users from.
   *
   * @public
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface ListGroupMembershipsResponse {
  /**
   * The list of the members of the group.
   *
   * @public
   */
  GroupMemberList?: GroupMember[] | undefined;

  /**
   * A pagination token that can be used in a subsequent request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface ListGroupsRequest {
  /**
   * The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the Amazon Web Services account that contains your Amazon Quick Sight account.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * A pagination token that can be used in a subsequent request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The namespace that you want a list of groups from.
   *
   * @public
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface ListGroupsResponse {
  /**
   * The list of the groups.
   *
   * @public
   */
  GroupList?: Group[] | undefined;

  /**
   * A pagination token that can be used in a subsequent request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface ListIAMPolicyAssignmentsRequest {
  /**
   * The ID of the Amazon Web Services account that contains these IAM policy assignments.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The status of the assignments.
   *
   * @public
   */
  AssignmentStatus?: AssignmentStatus | undefined;

  /**
   * The namespace for the assignments.
   *
   * @public
   */
  Namespace: string | undefined;

  /**
   * The token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to be returned per request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListIAMPolicyAssignmentsResponse {
  /**
   * Information describing the IAM policy assignments.
   *
   * @public
   */
  IAMPolicyAssignments?: IAMPolicyAssignmentSummary[] | undefined;

  /**
   * The token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface ListIAMPolicyAssignmentsForUserRequest {
  /**
   * The ID of the Amazon Web Services account that contains the assignments.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The name of the user.
   *
   * @public
   */
  UserName: string | undefined;

  /**
   * The token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to be returned per request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The namespace of the assignment.
   *
   * @public
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface ListIAMPolicyAssignmentsForUserResponse {
  /**
   * The active assignments for this user.
   *
   * @public
   */
  ActiveAssignments?: ActiveIAMPolicyAssignment[] | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface ListIdentityPropagationConfigsRequest {
  /**
   * The ID of the Amazon Web Services account that contain the identity propagation configurations of.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The maximum number of results to be returned.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListIdentityPropagationConfigsResponse {
  /**
   * A list of services and their authorized targets that the Quick Sight IAM Identity Center application can access.
   *
   * @public
   */
  Services?: AuthorizedTargetsByService[] | undefined;

  /**
   * The token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface ListIngestionsRequest {
  /**
   * The ID of the dataset used in the ingestion.
   *
   * @public
   */
  DataSetId: string | undefined;

  /**
   * The token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The maximum number of results to be returned per request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListIngestionsResponse {
  /**
   * A list of the ingestions.
   *
   * @public
   */
  Ingestions?: Ingestion[] | undefined;

  /**
   * The token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface ListKnowledgeBasesRequest {
  /**
   * The ID of the Amazon Web Services account that contains the knowledge base.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListKnowledgeBasesResponse {
  /**
   * A list of knowledge base summaries.
   *
   * @public
   */
  KnowledgeBaseSummaries: KnowledgeBaseSummary[] | undefined;

  /**
   * The token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface ListLimitsProfilesRequest {
  /**
   * The ID of the Amazon Web Services account that contains the limits profiles.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * An optional filter that limits the results to profiles that contain the specified resource type. If you don't specify a value, the operation returns all profiles.
   *
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * The maximum number of results to return in a single call. If you don't specify a value, the service uses the default maximum.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLimitsProfilesResponse {
  /**
   * A list of limits profiles.
   *
   * @public
   */
  profiles: LimitsProfile[] | undefined;

  /**
   * The token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListNamespacesRequest {
  /**
   * The ID for the Amazon Web Services account that contains the Quick Sight namespaces that you want to list.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * A unique pagination token that can be used in a subsequent request. You will receive a pagination token in the response body of a previous `ListNameSpaces` API call if there is more data that can be returned. To receive the data, make another `ListNamespaces` API call with the returned token to retrieve the next page of data. Each token is valid for 24 hours. If you try to make a `ListNamespaces` API call with an expired token, you will receive a `HTTP 400 InvalidNextTokenException` error.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListNamespacesResponse {
  /**
   * The information about the namespaces in this Amazon Web Services account. The response includes the namespace ARN, name, Amazon Web Services Region, notification email address, creation status, and identity store.
   *
   * @public
   */
  Namespaces?: NamespaceInfoV2[] | undefined;

  /**
   * A unique pagination token that can be used in a subsequent request. Receiving `NextToken` in your response inticates that there is more data that can be returned. To receive the data, make another `ListNamespaces` API call with the returned token to retrieve the next page of data. Each token is valid for 24 hours. If you try to make a `ListNamespaces` API call with an expired token, you will receive a `HTTP 400 InvalidNextTokenException` error.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface ListOAuthClientApplicationsRequest {
  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * A pagination token that can be used in a subsequent request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * A summary of an OAuthClientApplication.
 *
 * @public
 */
export interface OAuthClientApplicationSummary {
  /**
   * The ID of the OAuthClientApplication. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  OAuthClientApplicationId?: string | undefined;

  /**
   * The display name of the OAuthClientApplication.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The OAuth client authentication type used by the OAuthClientApplication. Valid values are `TOKEN`.
   *
   * @public
   */
  OAuthClientAuthenticationType?: OAuthClientAuthenticationType | undefined;

  /**
   * The type of data source that the OAuthClientApplication is used with. Valid values are `SNOWFLAKE`.
   *
   * @public
   */
  DataSourceType?: DataSourceType | undefined;

  /**
   * VPC connection properties.
   *
   * @public
   */
  IdentityProviderVpcConnectionProperties?: VpcConnectionProperties | undefined;

  /**
   * The time that the OAuthClientApplication was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The time that the OAuthClientApplication was last updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the OAuthClientApplication.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface ListOAuthClientApplicationsResponse {
  /**
   * A list of OAuthClientApplication summaries.
   *
   * @public
   */
  OAuthClientApplications?: OAuthClientApplicationSummary[] | undefined;

  /**
   * A pagination token that can be used in a subsequent request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface ListRefreshSchedulesRequest {
  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the dataset.
   *
   * @public
   */
  DataSetId: string | undefined;
}

/**
 * @public
 */
export interface ListRefreshSchedulesResponse {
  /**
   * The list of refresh schedules for the dataset.
   *
   * @public
   */
  RefreshSchedules?: RefreshSchedule[] | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface ListRoleMembershipsRequest {
  /**
   * The name of the role.
   *
   * @public
   */
  Role: Role | undefined;

  /**
   * A pagination token that can be used in a subsequent request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The ID for the Amazon Web Services account that you want to create a group in. The Amazon Web Services account ID that you provide must be the same Amazon Web Services account that contains your Amazon Quick Sight account.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The namespace that includes the role.
   *
   * @public
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface ListRoleMembershipsResponse {
  /**
   * The list of groups associated with a role
   *
   * @public
   */
  MembersList?: string[] | undefined;

  /**
   * A pagination token that can be used in a subsequent request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface ListSelfUpgradesRequest {
  /**
   * The ID of the Amazon Web Services account that contains the self-upgrade requests.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The Quick namespace for the self-upgrade requests.
   *
   * @public
   */
  Namespace: string | undefined;

  /**
   * The token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Details of a self-upgrade request.
 *
 * @public
 */
export interface SelfUpgradeRequestDetail {
  /**
   * The ID of the self-upgrade request.
   *
   * @public
   */
  UpgradeRequestId?: string | undefined;

  /**
   * The username of the user who initiated the self-upgrade request.
   *
   * @public
   */
  UserName?: string | undefined;

  /**
   * The original role of the user before the upgrade.
   *
   * @public
   */
  OriginalRole?: UserRole | undefined;

  /**
   * The role that the user is requesting to upgrade to.
   *
   * @public
   */
  RequestedRole?: UserRole | undefined;

  /**
   * An optional note explaining the reason for the self-upgrade request.
   *
   * @public
   */
  RequestNote?: string | undefined;

  /**
   * The time when the self-upgrade request was created.
   *
   * @public
   */
  CreationTime?: number | undefined;

  /**
   * The status of the self-upgrade request.
   *
   * @public
   */
  RequestStatus?: SelfUpgradeRequestStatus | undefined;

  /**
   * The time of the last update attempt for the self-upgrade request.
   *
   * @public
   */
  lastUpdateAttemptTime?: number | undefined;

  /**
   * The reason for the last update failure, if applicable.
   *
   * @public
   */
  lastUpdateFailureReason?: string | undefined;
}

/**
 * @public
 */
export interface ListSelfUpgradesResponse {
  /**
   * A list of self-upgrade request details.
   *
   * @public
   */
  SelfUpgradeRequestDetails?: SelfUpgradeRequestDetail[] | undefined;

  /**
   * The token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface ListSpaceResourcesRequest {
  /**
   * The ID of the Amazon Web Services account that contains the space.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the space that you want to list resources for.
   *
   * @public
   */
  SpaceId: string | undefined;
}

/**
 * A summary of a resource in a space.
 *
 * @public
 */
export interface SpaceResourceSummary {
  /**
   * The type of the resource.
   *
   * @public
   */
  ResourceType: SpaceQuickSightResourceType | undefined;

  /**
   * The details of the resource.
   *
   * @public
   */
  ResourceDetails: SpaceQuickSightResourceDetails | undefined;

  /**
   * The name of the resource.
   *
   * @public
   */
  ResourceName?: string | undefined;

  /**
   * The date and time that the resource was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListSpaceResourcesResponse {
  /**
   * The ID of the space.
   *
   * @public
   */
  spaceId: string | undefined;

  /**
   * The ARN of the space.
   *
   * @public
   */
  spaceArn?: string | undefined;

  /**
   * A list of resource summaries in the space.
   *
   * @public
   */
  SpaceResources: SpaceResourceSummary[] | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface ListSpacesRequest {
  /**
   * The ID of the Amazon Web Services account that contains the spaces.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * A summary of an Amazon QuickSight space.
 *
 * @public
 */
export interface SpaceSummary {
  /**
   * The ID of the space.
   *
   * @public
   */
  spaceId: string | undefined;

  /**
   * The ARN of the space.
   *
   * @public
   */
  spaceArn?: string | undefined;

  /**
   * The display name of the space.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the space.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The date and time that the space was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The total consumed source size in bytes.
   *
   * @public
   */
  consumedSourceSize?: number | undefined;

  /**
   * The number of consumed source documents.
   *
   * @public
   */
  consumedSourceDocCount?: number | undefined;

  /**
   * The date and time that the space was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The user who created the space.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The ARN of the user who created the space.
   *
   * @public
   */
  createdByArn?: string | undefined;

  /**
   * The number of resources in the space.
   *
   * @public
   */
  resourcesCount?: number | undefined;
}

/**
 * @public
 */
export interface ListSpacesResponse {
  /**
   * The ID of the space.
   *
   * @public
   */
  spaceId: string | undefined;

  /**
   * The ARN of the space.
   *
   * @public
   */
  spaceArn?: string | undefined;

  /**
   * A list of space summaries.
   *
   * @public
   */
  SpaceSummaries: SpaceSummary[] | undefined;

  /**
   * The token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;
}
