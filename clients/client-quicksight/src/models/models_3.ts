// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  AccountCustomization,
  AccountInfo,
  AccountSettings,
  ActiveIAMPolicyAssignment,
  Analysis,
  AnalysisError,
  Entity,
  ResourceStatus,
  Sheet,
} from "./models_0";
import {
  AnalysisDefinition,
  AnalysisSearchFilter,
  AnalysisSummary,
  AnonymousUserEmbeddingExperienceConfiguration,
  AnonymousUserSnapshotJobResult,
  DashboardVisualId,
  FilterOperator,
  SnapshotFile,
  SnapshotS3DestinationConfiguration,
} from "./models_1";
import {
  _Parameters,
  _ParametersFilterSensitiveLog,
  AssetBundleCloudFormationOverridePropertyConfiguration,
  AssetBundleExportFormat,
  AssetBundleExportJobError,
  AssetBundleExportJobStatus,
  AssetBundleExportJobSummary,
  AssetBundleImportFailureAction,
  AssetBundleImportJobError,
  AssetBundleImportJobOverrideParameters,
  AssetBundleImportJobStatus,
  AssetBundleImportJobSummary,
  AssetBundleImportSource,
  AssetBundleImportSourceDescription,
  AssetBundleImportSourceFilterSensitiveLog,
  AssignmentStatus,
  BookmarksConfigurations,
  Dashboard,
  DashboardError,
  DashboardPublishOptions,
  DashboardSearchFilter,
  DashboardSummary,
  DashboardVersionDefinition,
  DashboardVersionSummary,
  DataSet,
  DataSetConfiguration,
  DataSetFilterSensitiveLog,
  DataSetRefreshProperties,
  DataSetSearchFilter,
  DataSetSummary,
  DataSourceErrorInfoType,
  DataSourceParameters,
  DataSourceType,
  FolderType,
  Group,
  GroupMember,
  IdentityStore,
  IngestionStatus,
  MemberType,
  NamespaceStatus,
  RefreshSchedule,
  ResourcePermission,
  SharingModel,
  SslProperties,
  Tag,
  TemplateAlias,
  TemplateVersionDefinition,
  ThemeAlias,
  ThemeConfiguration,
  TopicDetails,
  TopicRefreshSchedule,
  VPCConnectionAvailabilityStatus,
  VpcConnectionProperties,
  VPCConnectionResourceStatus,
} from "./models_2";
import { QuickSightServiceException as __BaseException } from "./QuickSightServiceException";

/**
 * @public
 * <p>Error information for the data source creation or update.</p>
 */
export interface DataSourceErrorInfo {
  /**
   * @public
   * <p>Error type.</p>
   */
  Type?: DataSourceErrorInfoType | string;

  /**
   * @public
   * <p>Error message.</p>
   */
  Message?: string;
}

/**
 * @public
 * <p>The structure of a data source.</p>
 */
export interface DataSource {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the data source.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The ID of the data source. This ID is unique per Amazon Web Services Region for each
   *             Amazon Web Services account.</p>
   */
  DataSourceId?: string;

  /**
   * @public
   * <p>A display name for the data source.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The type of the data source. This type indicates which database engine the data source
   *             connects to.</p>
   */
  Type?: DataSourceType | string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: ResourceStatus | string;

  /**
   * @public
   * <p>The time that this data source was created.</p>
   */
  CreatedTime?: Date;

  /**
   * @public
   * <p>The last time that this data source was updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * @public
   * <p>The parameters that Amazon QuickSight uses to connect to your underlying source. This
   *             is a variant type structure. For this structure to be valid, only one of the attributes
   *             can be non-null.</p>
   */
  DataSourceParameters?: DataSourceParameters;

  /**
   * @public
   * <p>A set of alternate data source parameters that you want to share for the credentials
   *             stored with this data source. The credentials are applied in tandem with the data source
   *             parameters when you copy a data source by using a create or update request. The API
   *             operation compares the <code>DataSourceParameters</code> structure that's in the request
   *             with the structures in the <code>AlternateDataSourceParameters</code> allow list. If the
   *             structures are an exact match, the request is allowed to use the credentials from this
   *             existing data source. If the <code>AlternateDataSourceParameters</code> list is null,
   *             the <code>Credentials</code> originally used with this <code>DataSourceParameters</code>
   *             are automatically allowed.</p>
   */
  AlternateDataSourceParameters?: DataSourceParameters[];

  /**
   * @public
   * <p>The VPC connection information. You need to use this parameter only when you want
   *             Amazon QuickSight to use a VPC connection when connecting to your underlying source.</p>
   */
  VpcConnectionProperties?: VpcConnectionProperties;

  /**
   * @public
   * <p>Secure Socket Layer (SSL) properties that apply when Amazon QuickSight connects to your
   *             underlying source.</p>
   */
  SslProperties?: SslProperties;

  /**
   * @public
   * <p>Error information from the last update or the creation of the data source.</p>
   */
  ErrorInfo?: DataSourceErrorInfo;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the secret associated with the data source in Amazon Secrets Manager.</p>
   */
  SecretArn?: string;
}

/**
 * @public
 * @enum
 */
export const DataSourceFilterAttribute = {
  DATASOURCE_NAME: "DATASOURCE_NAME",
  DIRECT_QUICKSIGHT_OWNER: "DIRECT_QUICKSIGHT_OWNER",
  DIRECT_QUICKSIGHT_SOLE_OWNER: "DIRECT_QUICKSIGHT_SOLE_OWNER",
  DIRECT_QUICKSIGHT_VIEWER_OR_OWNER: "DIRECT_QUICKSIGHT_VIEWER_OR_OWNER",
} as const;

/**
 * @public
 */
export type DataSourceFilterAttribute = (typeof DataSourceFilterAttribute)[keyof typeof DataSourceFilterAttribute];

/**
 * @public
 * <p>A filter that you apply when searching for data sources.</p>
 */
export interface DataSourceSearchFilter {
  /**
   * @public
   * <p>The comparison operator that you want to use as a filter, for example <code>"Operator": "StringEquals"</code>. Valid values are <code>"StringEquals"</code> and <code>"StringLike"</code>.</p>
   *          <p>If you set the operator value to <code>"StringEquals"</code>, you need to provide an ownership related filter in the <code>"NAME"</code> field and the arn of the user or group whose data sources you want to search in the <code>"Value"</code> field. For example, <code>"Name":"DIRECT_QUICKSIGHT_OWNER", "Operator": "StringEquals", "Value": "arn:aws:quicksight:us-east-1:1:user/default/UserName1"</code>.</p>
   *          <p>If you set the value to <code>"StringLike"</code>, you need to provide the name of the data sources you are searching for. For example, <code>"Name":"DATASOURCE_NAME", "Operator": "StringLike", "Value": "Test"</code>. The <code>"StringLike"</code> operator only supports the <code>NAME</code> value <code>DATASOURCE_NAME</code>.</p>
   */
  Operator: FilterOperator | string | undefined;

  /**
   * @public
   * <p>The name of the value that you want to use as a filter, for example, <code>"Name":
   *             "DIRECT_QUICKSIGHT_OWNER"</code>.</p>
   *          <p>Valid values are defined as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DIRECT_QUICKSIGHT_VIEWER_OR_OWNER</code>: Provide an ARN of a user or group, and any data sources with that ARN listed as one of the owners or viewers of the data sources are returned. Implicit permissions from folders or groups are not considered.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DIRECT_QUICKSIGHT_OWNER</code>: Provide an ARN of a user or group, and any data sources with that ARN listed as one of the owners if the data source are returned. Implicit permissions from folders or groups are not considered.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DIRECT_QUICKSIGHT_SOLE_OWNER</code>: Provide an ARN of a user or group, and any data sources with that ARN listed as the only owner of the data source are returned. Implicit permissions from folders or groups are not considered.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DATASOURCE_NAME</code>: Any data sources whose names have a substring match to the provided value are returned.</p>
   *             </li>
   *          </ul>
   */
  Name: DataSourceFilterAttribute | string | undefined;

  /**
   * @public
   * <p>The value of the named item, for example <code>DIRECT_QUICKSIGHT_OWNER</code>, that you want
   *             to use as a filter, for example, <code>"Value":
   *             "arn:aws:quicksight:us-east-1:1:user/default/UserName1"</code>.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 * <p>A <code>DataSourceSummary</code> object that returns a summary of a data source.</p>
 */
export interface DataSourceSummary {
  /**
   * @public
   * <p>The arn of the datasource.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The unique ID of the data source.</p>
   */
  DataSourceId?: string;

  /**
   * @public
   * <p>The name of the data source.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The type of the data source.</p>
   */
  Type?: DataSourceType | string;

  /**
   * @public
   * <p>The date and time that the data source was created. This value is expressed in MM-DD-YYYY HH:MM:SS format.</p>
   */
  CreatedTime?: Date;

  /**
   * @public
   * <p>The date and time the data source was last updated. This value is expressed in MM-DD-YYYY HH:MM:SS format.</p>
   */
  LastUpdatedTime?: Date;
}

/**
 * @public
 */
export interface DeleteAccountCustomizationRequest {
  /**
   * @public
   * <p>The ID for the Amazon Web Services account that you want to delete Amazon QuickSight customizations from in
   *             this Amazon Web Services Region.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The Amazon QuickSight namespace that you're deleting the customizations from.</p>
   */
  Namespace?: string;
}

/**
 * @public
 */
export interface DeleteAccountCustomizationResponse {
  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface DeleteAccountSubscriptionRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID of the account that you want to delete.</p>
   */
  AwsAccountId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccountSubscriptionResponse {
  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface DeleteAnalysisRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account where you want to delete an analysis.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the analysis that you're deleting.</p>
   */
  AnalysisId: string | undefined;

  /**
   * @public
   * <p>A value that specifies the number of days that Amazon QuickSight waits before it deletes the
   *             analysis. You can't use this parameter with the <code>ForceDeleteWithoutRecovery</code>
   *             option in the same API call. The default value is 30.</p>
   */
  RecoveryWindowInDays?: number;

  /**
   * @public
   * <p>This option defaults to the value <code>NoForceDeleteWithoutRecovery</code>. To
   *             immediately delete the analysis, add the <code>ForceDeleteWithoutRecovery</code> option.
   *             You can't restore an analysis after it's deleted. </p>
   */
  ForceDeleteWithoutRecovery?: boolean;
}

/**
 * @public
 */
export interface DeleteAnalysisResponse {
  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the deleted analysis.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The ID of the deleted analysis.</p>
   */
  AnalysisId?: string;

  /**
   * @public
   * <p>The date and time that the analysis is scheduled to be deleted.</p>
   */
  DeletionTime?: Date;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface DeleteDashboardRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the dashboard that you're
   *             deleting.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the dashboard.</p>
   */
  DashboardId: string | undefined;

  /**
   * @public
   * <p>The version number of the dashboard. If the version number property is provided, only
   *             the specified version of the dashboard is deleted.</p>
   */
  VersionNumber?: number;
}

/**
 * @public
 */
export interface DeleteDashboardResponse {
  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The Secure Socket Layer (SSL) properties that apply for the resource.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The ID of the dashboard.</p>
   */
  DashboardId?: string;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface DeleteDataSetRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the dataset that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  DataSetId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataSetResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The ID for the dataset that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  DataSetId?: string;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface DeleteDataSetRefreshPropertiesRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the dataset.</p>
   */
  DataSetId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataSetRefreshPropertiesResponse {
  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface DeleteDataSourceRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  DataSourceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataSourceResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the data source that you deleted.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  DataSourceId?: string;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface DeleteFolderRequest {
  /**
   * @public
   * <p>The ID for the Amazon Web Services account that contains the folder.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the folder.</p>
   */
  FolderId: string | undefined;
}

/**
 * @public
 */
export interface DeleteFolderResponse {
  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The Amazon Resource Name of the deleted folder.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The ID of the folder.</p>
   */
  FolderId?: string;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface DeleteFolderMembershipRequest {
  /**
   * @public
   * <p>The ID for the Amazon Web Services account that contains the folder.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The Folder ID.</p>
   */
  FolderId: string | undefined;

  /**
   * @public
   * <p>The ID of the asset that you want to delete.</p>
   */
  MemberId: string | undefined;

  /**
   * @public
   * <p>The member type of the asset that you want to delete from a folder.</p>
   */
  MemberType: MemberType | string | undefined;
}

/**
 * @public
 */
export interface DeleteFolderMembershipResponse {
  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface DeleteGroupRequest {
  /**
   * @public
   * <p>The name of the group that you want to delete.</p>
   */
  GroupName: string | undefined;

  /**
   * @public
   * <p>The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the
   * 			Amazon Web Services account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The namespace of the group that you want to delete.</p>
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface DeleteGroupResponse {
  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface DeleteGroupMembershipRequest {
  /**
   * @public
   * <p>The name of the user that you want to delete from the group membership.</p>
   */
  MemberName: string | undefined;

  /**
   * @public
   * <p>The name of the group that you want to delete the user from.</p>
   */
  GroupName: string | undefined;

  /**
   * @public
   * <p>The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the
   * 			Amazon Web Services account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The namespace of the group that you want to remove a user from.</p>
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface DeleteGroupMembershipResponse {
  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface DeleteIAMPolicyAssignmentRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID where you want to delete the IAM
   * 			policy assignment.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The name of the assignment. </p>
   */
  AssignmentName: string | undefined;

  /**
   * @public
   * <p>The namespace that contains the assignment.</p>
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface DeleteIAMPolicyAssignmentResponse {
  /**
   * @public
   * <p>The name of the assignment. </p>
   */
  AssignmentName?: string;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface DeleteNamespaceRequest {
  /**
   * @public
   * <p>The ID for the Amazon Web Services account that you want to delete the Amazon QuickSight namespace from.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The namespace that you want to delete.</p>
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface DeleteNamespaceResponse {
  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface DeleteRefreshScheduleRequest {
  /**
   * @public
   * <p>The ID of the dataset.</p>
   */
  DataSetId: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the refresh schedule.</p>
   */
  ScheduleId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRefreshScheduleResponse {
  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The ID of the refresh schedule.</p>
   */
  ScheduleId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the refresh schedule.</p>
   */
  Arn?: string;
}

/**
 * @public
 */
export interface DeleteTemplateRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the template that you're deleting.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>An ID for the template you want to delete.</p>
   */
  TemplateId: string | undefined;

  /**
   * @public
   * <p>Specifies the version of the template that you want to delete.
   * 			If you don't provide a version number, <code>DeleteTemplate</code> deletes all versions of the template.
   * 	 </p>
   */
  VersionNumber?: number;
}

/**
 * @public
 */
export interface DeleteTemplateResponse {
  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>An ID for the template.</p>
   */
  TemplateId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface DeleteTemplateAliasRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the item to delete.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the template that the specified alias is for.</p>
   */
  TemplateId: string | undefined;

  /**
   * @public
   * <p>The name for the template alias. To delete a specific alias, you delete the version that the
   * 			alias points to. You can specify the alias name, or specify the latest version of the
   * 			template by providing the keyword <code>$LATEST</code> in the <code>AliasName</code>
   * 			parameter. </p>
   */
  AliasName: string | undefined;
}

/**
 * @public
 */
export interface DeleteTemplateAliasResponse {
  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>An ID for the template associated with the deletion.</p>
   */
  TemplateId?: string;

  /**
   * @public
   * <p>The name for the template alias.</p>
   */
  AliasName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the template you want to delete.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface DeleteThemeRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the theme that you're deleting.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>An ID for the theme that you want to delete.</p>
   */
  ThemeId: string | undefined;

  /**
   * @public
   * <p>The version of the theme that you want to delete. </p>
   *          <p>
   *             <b>Note:</b> If you don't provide a version number, you're
   * 			using this call to <code>DeleteTheme</code> to delete all versions of the theme.</p>
   */
  VersionNumber?: number;
}

/**
 * @public
 */
export interface DeleteThemeResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>An ID for the theme.</p>
   */
  ThemeId?: string;
}

/**
 * @public
 */
export interface DeleteThemeAliasRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the theme alias to delete.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the theme that the specified alias is for.</p>
   */
  ThemeId: string | undefined;

  /**
   * @public
   * <p>The unique name for the theme alias to delete.</p>
   */
  AliasName: string | undefined;
}

/**
 * @public
 */
export interface DeleteThemeAliasResponse {
  /**
   * @public
   * <p>The name for the theme alias.</p>
   */
  AliasName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the theme resource using the deleted alias.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>An ID for the theme associated with the deletion.</p>
   */
  ThemeId?: string;
}

/**
 * @public
 */
export interface DeleteTopicRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the topic that you want to
   *          delete.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the topic that you want to delete. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  TopicId: string | undefined;
}

/**
 * @public
 */
export interface DeleteTopicResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the topic.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The ID of the topic that you want to delete. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  TopicId?: string;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface DeleteTopicRefreshScheduleRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the topic that you want to modify. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  TopicId: string | undefined;

  /**
   * @public
   * <p>The ID of the dataset.</p>
   */
  DatasetId: string | undefined;
}

/**
 * @public
 */
export interface DeleteTopicRefreshScheduleResponse {
  /**
   * @public
   * <p>The ID of the topic that you want to modify. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  TopicId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the topic.</p>
   */
  TopicArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   */
  DatasetArn?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface DeleteUserRequest {
  /**
   * @public
   * <p>The name of the user that you want to delete.</p>
   */
  UserName: string | undefined;

  /**
   * @public
   * <p>The ID for the Amazon Web Services account that the user is in. Currently, you use the ID for the
   * 			Amazon Web Services account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserResponse {
  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 * <p></p>
 */
export interface DeleteUserByPrincipalIdRequest {
  /**
   * @public
   * <p>The principal ID of the user.</p>
   */
  PrincipalId: string | undefined;

  /**
   * @public
   * <p>The ID for the Amazon Web Services account that the user is in. Currently, you use the ID for the
   * 			Amazon Web Services account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserByPrincipalIdResponse {
  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface DeleteVPCConnectionRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID of the account where you want to delete a VPC
   * 			connection.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the VPC connection that you're creating. This ID is a unique identifier for each Amazon Web Services Region in an
   * 				Amazon Web Services account.</p>
   */
  VPCConnectionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVPCConnectionResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the deleted VPC connection.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The ID of the VPC connection that
   * 			you're creating. This ID is a unique identifier for each Amazon Web Services Region in an
   * 				Amazon Web Services account.</p>
   */
  VPCConnectionId?: string;

  /**
   * @public
   * <p>The deletion status of the VPC connection.</p>
   */
  DeletionStatus?: VPCConnectionResourceStatus | string;

  /**
   * @public
   * <p>The availability status of the VPC connection.</p>
   */
  AvailabilityStatus?: VPCConnectionAvailabilityStatus | string;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface DescribeAccountCustomizationRequest {
  /**
   * @public
   * <p>The ID for the Amazon Web Services account that you want to describe Amazon QuickSight customizations
   *             for.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The Amazon QuickSight namespace that you want to describe Amazon QuickSight customizations
   *             for.</p>
   */
  Namespace?: string;

  /**
   * @public
   * <p>The <code>Resolved</code> flag works with the other parameters to determine which view
   *             of Amazon QuickSight customizations is returned. You can add this flag to your command to use
   *             the same view that Amazon QuickSight uses to identify which customizations to apply to the
   *             console. Omit this flag, or set it to <code>no-resolved</code>, to reveal customizations
   *             that are configured at different levels. </p>
   */
  Resolved?: boolean;
}

/**
 * @public
 */
export interface DescribeAccountCustomizationResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the customization that's associated with this Amazon Web Services account.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The ID for the Amazon Web Services account that you're describing.</p>
   */
  AwsAccountId?: string;

  /**
   * @public
   * <p>The Amazon QuickSight namespace that you're describing. </p>
   */
  Namespace?: string;

  /**
   * @public
   * <p>The Amazon QuickSight customizations that exist in the current Amazon Web Services Region. </p>
   */
  AccountCustomization?: AccountCustomization;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface DescribeAccountSettingsRequest {
  /**
   * @public
   * <p>The ID for the Amazon Web Services account that contains the settings that you want to list.</p>
   */
  AwsAccountId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAccountSettingsResponse {
  /**
   * @public
   * <p>The Amazon QuickSight settings for this Amazon Web Services account. This information
   *             includes the edition of Amazon Amazon QuickSight that you subscribed to (Standard or
   *             Enterprise) and the notification email for the Amazon QuickSight subscription. </p>
   *          <p>In the QuickSight console, the Amazon QuickSight subscription is sometimes referred to
   *             as a QuickSight "account" even though it's technically not an account by
   *             itself. Instead, it's a subscription to the Amazon QuickSight service for your
   *                 Amazon Web Services account. The edition that you subscribe to applies to Amazon QuickSight in every Amazon Web Services Region where you use it.</p>
   */
  AccountSettings?: AccountSettings;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface DescribeAccountSubscriptionRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID associated with your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAccountSubscriptionResponse {
  /**
   * @public
   * <p>A structure that contains the following elements:</p>
   *          <ul>
   *             <li>
   *                <p>Your Amazon QuickSight account name.</p>
   *             </li>
   *             <li>
   *                <p>The edition of Amazon QuickSight that your account is using.</p>
   *             </li>
   *             <li>
   *                <p>The notification email address that is associated with the Amazon QuickSight
   *                     account.
   *             </p>
   *             </li>
   *             <li>
   *                <p>The authentication type of the Amazon QuickSight account.</p>
   *             </li>
   *             <li>
   *                <p>The status of the Amazon QuickSight account's subscription.</p>
   *             </li>
   *          </ul>
   */
  AccountInfo?: AccountInfo;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface DescribeAnalysisRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the analysis. You must be using the
   *             Amazon Web Services account that the analysis is in.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the analysis that you're describing. The ID is part of the URL of the
   *             analysis.</p>
   */
  AnalysisId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAnalysisResponse {
  /**
   * @public
   * <p>A metadata structure that contains summary information for the analysis that you're
   *             describing.</p>
   */
  Analysis?: Analysis;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface DescribeAnalysisDefinitionRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the analysis. You must be using the
   *             Amazon Web Services account that the analysis is in.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the analysis that you're describing. The ID is part of the URL of the
   *             analysis.</p>
   */
  AnalysisId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAnalysisDefinitionResponse {
  /**
   * @public
   * <p>The ID of the analysis described.</p>
   */
  AnalysisId?: string;

  /**
   * @public
   * <p>The descriptive name of the analysis.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>Errors associated with the analysis.</p>
   */
  Errors?: AnalysisError[];

  /**
   * @public
   * <p>Status associated with the analysis.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATION_IN_PROGRESS</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATION_SUCCESSFUL</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATION_FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_IN_PROGRESS</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_SUCCESSFUL</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETED</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ResourceStatus?: ResourceStatus | string;

  /**
   * @public
   * <p>The ARN of the theme of the analysis.</p>
   */
  ThemeArn?: string;

  /**
   * @public
   * <p>The definition of an analysis.</p>
   *          <p>A definition is the data model of all features in a Dashboard, Template, or Analysis.</p>
   */
  Definition?: AnalysisDefinition;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface DescribeAnalysisPermissionsRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the analysis whose permissions you're
   *             describing. You must be using the Amazon Web Services account that the analysis is in.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the analysis whose permissions you're describing. The ID is part of the
   *             analysis URL.</p>
   */
  AnalysisId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAnalysisPermissionsResponse {
  /**
   * @public
   * <p>The ID of the analysis whose permissions you're describing.</p>
   */
  AnalysisId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the analysis whose permissions you're
   *             describing.</p>
   */
  AnalysisArn?: string;

  /**
   * @public
   * <p>A structure that describes the principals and the resource-level permissions on an
   *             analysis.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface DescribeAssetBundleExportJobRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account the export job is executed in. </p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the job that you want described. The job ID is set when you start a new job with a <code>StartAssetBundleExportJob</code> API call.</p>
   */
  AssetBundleExportJobId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAssetBundleExportJobResponse {
  /**
   * @public
   * <p>Indicates the status of a job through its queuing and execution.</p>
   *          <p>Poll this <code>DescribeAssetBundleExportApi</code> until <code>JobStatus</code> is either <code>SUCCESSFUL</code> or <code>FAILED</code>.</p>
   */
  JobStatus?: AssetBundleExportJobStatus | string;

  /**
   * @public
   * <p>The URL to download the exported asset bundle data from.</p>
   *          <p>This URL is available only after the job has succeeded. This URL is valid for 5 minutes after issuance. Call <code>DescribeAssetBundleExportJob</code> again for a fresh URL if needed.</p>
   *          <p>The downloaded asset bundle is a zip file named <code>assetbundle-\{jobId\}.qs</code>. The file has a <code>.qs</code> extension.</p>
   *          <p>This URL can't be used in a <code>StartAssetBundleImportJob</code> API call and should only be used for download purposes.</p>
   */
  DownloadUrl?: string;

  /**
   * @public
   * <p>An array of error records that describes any failures that occurred during the export job processing.</p>
   *          <p>Error records accumulate while the job runs. The complete set of error records is available after the job has completed and failed.</p>
   */
  Errors?: AssetBundleExportJobError[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the export job.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The time that the export job was created.</p>
   */
  CreatedTime?: Date;

  /**
   * @public
   * <p>The ID of the job. The job ID is set when you start a new job with a <code>StartAssetBundleExportJob</code> API call.</p>
   */
  AssetBundleExportJobId?: string;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account that the export job was executed in. </p>
   */
  AwsAccountId?: string;

  /**
   * @public
   * <p>A list of resource ARNs that exported with the job.</p>
   */
  ResourceArns?: string[];

  /**
   * @public
   * <p>The include dependencies flag.</p>
   */
  IncludeAllDependencies?: boolean;

  /**
   * @public
   * <p>The format of the exported asset bundle. A <code>QUICKSIGHT_JSON</code> formatted file can be used to make a <code>StartAssetBundleImportJob</code> API call. A <code>CLOUDFORMATION_JSON</code> formatted file can be used in the CloudFormation console and with the CloudFormation APIs.</p>
   */
  ExportFormat?: AssetBundleExportFormat | string;

  /**
   * @public
   * <p>The CloudFormation override property configuration for the export job.</p>
   */
  CloudFormationOverridePropertyConfiguration?: AssetBundleCloudFormationOverridePropertyConfiguration;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the response.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface DescribeAssetBundleImportJobRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account the import job was executed in. </p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the job. The job ID is set when you start a new job with a <code>StartAssetBundleImportJob</code> API call.</p>
   */
  AssetBundleImportJobId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAssetBundleImportJobResponse {
  /**
   * @public
   * <p>Indicates the status of a job through its queuing and execution.</p>
   *          <p>Poll the <code>DescribeAssetBundleImport</code> API until <code>JobStatus</code> returns one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SUCCESSFUL</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED_ROLLBACK_COMPLETED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED_ROLLBACK_ERROR</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  JobStatus?: AssetBundleImportJobStatus | string;

  /**
   * @public
   * <p>An array of error records that describes any failures that occurred during the export job processing.</p>
   *          <p>Error records accumulate while the job is still running. The complete set of error records is available after the job has completed and failed.</p>
   */
  Errors?: AssetBundleImportJobError[];

  /**
   * @public
   * <p>An array of error records that describes any failures that occurred while an import job was attempting a rollback.</p>
   *          <p>Error records accumulate while the job is still running. The complete set of error records is available after the job has completed and failed.</p>
   */
  RollbackErrors?: AssetBundleImportJobError[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the import job.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The time that the import job was created.</p>
   */
  CreatedTime?: Date;

  /**
   * @public
   * <p>The ID of the job. The job ID is set when you start a new job with a <code>StartAssetBundleImportJob</code> API call.</p>
   */
  AssetBundleImportJobId?: string;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account the import job was executed in. </p>
   */
  AwsAccountId?: string;

  /**
   * @public
   * <p>The source of the asset bundle zip file that contains the data that is imported by the job.</p>
   */
  AssetBundleImportSource?: AssetBundleImportSourceDescription;

  /**
   * @public
   * <p>Optional overrides to be applied to the resource configuration before import.</p>
   */
  OverrideParameters?: AssetBundleImportJobOverrideParameters;

  /**
   * @public
   * <p>The failure action for the import job.</p>
   */
  FailureAction?: AssetBundleImportFailureAction | string;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the response.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface DescribeDashboardRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the dashboard that you're
   *             describing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the dashboard.</p>
   */
  DashboardId: string | undefined;

  /**
   * @public
   * <p>The version number for the dashboard. If a version number isn't passed, the
   *             latest published dashboard version is described. </p>
   */
  VersionNumber?: number;

  /**
   * @public
   * <p>The alias name.</p>
   */
  AliasName?: string;
}

/**
 * @public
 */
export interface DescribeDashboardResponse {
  /**
   * @public
   * <p>Information about the dashboard.</p>
   */
  Dashboard?: Dashboard;

  /**
   * @public
   * <p>The HTTP status of this request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface DescribeDashboardDefinitionRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the dashboard that you're
   *             describing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the dashboard.</p>
   */
  DashboardId: string | undefined;

  /**
   * @public
   * <p>The version number for the dashboard. If a version number isn't passed, the
   *             latest published dashboard version is described. </p>
   */
  VersionNumber?: number;

  /**
   * @public
   * <p>The alias name.</p>
   */
  AliasName?: string;
}

/**
 * @public
 */
export interface DescribeDashboardDefinitionResponse {
  /**
   * @public
   * <p>The ID of the dashboard described.</p>
   */
  DashboardId?: string;

  /**
   * @public
   * <p>Errors associated with this dashboard version.</p>
   */
  Errors?: DashboardError[];

  /**
   * @public
   * <p>The display name of the dashboard.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>Status associated with the dashboard version.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATION_IN_PROGRESS</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATION_SUCCESSFUL</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATION_FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_IN_PROGRESS</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_SUCCESSFUL</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETED</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ResourceStatus?: ResourceStatus | string;

  /**
   * @public
   * <p>The ARN of the theme of the dashboard.</p>
   */
  ThemeArn?: string;

  /**
   * @public
   * <p>The definition of a dashboard.</p>
   *          <p>A definition is the data model of all features in a Dashboard, Template, or Analysis.</p>
   */
  Definition?: DashboardVersionDefinition;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>Options for publishing the dashboard:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AvailabilityStatus</code> for <code>AdHocFilteringOption</code> - This
   *                     status can be either <code>ENABLED</code> or <code>DISABLED</code>. When this is
   *                     set to <code>DISABLED</code>, Amazon QuickSight disables the left filter pane on the
   *                     published dashboard, which can be used for ad hoc (one-time) filtering. This
   *                     option is <code>ENABLED</code> by default. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AvailabilityStatus</code> for <code>ExportToCSVOption</code> - This
   *                     status can be either <code>ENABLED</code> or <code>DISABLED</code>. The visual
   *                     option to export data to .CSV format isn't enabled when this is set to
   *                     <code>DISABLED</code>. This option is <code>ENABLED</code> by default. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VisibilityState</code> for <code>SheetControlsOption</code> - This
   *                     visibility state can be either <code>COLLAPSED</code> or <code>EXPANDED</code>.
   *                     This option is <code>COLLAPSED</code> by default. </p>
   *             </li>
   *          </ul>
   */
  DashboardPublishOptions?: DashboardPublishOptions;
}

/**
 * @public
 */
export interface DescribeDashboardPermissionsRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the dashboard that you're describing
   *             permissions for.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the dashboard, also added to the IAM policy.</p>
   */
  DashboardId: string | undefined;
}

/**
 * @public
 * <p>A structure that contains the configuration of a shareable link to the dashboard.</p>
 */
export interface LinkSharingConfiguration {
  /**
   * @public
   * <p>A structure that contains the permissions of a shareable link.</p>
   */
  Permissions?: ResourcePermission[];
}

/**
 * @public
 */
export interface DescribeDashboardPermissionsResponse {
  /**
   * @public
   * <p>The ID for the dashboard.</p>
   */
  DashboardId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the dashboard.</p>
   */
  DashboardArn?: string;

  /**
   * @public
   * <p>A structure that contains the permissions for the dashboard.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>A structure that contains the configuration of a shareable link that grants access to
   *             the dashboard. Your users can use the link to view and interact with the dashboard, if
   *             the dashboard has been shared with them. For more information about sharing dashboards,
   *             see <a href="https://docs.aws.amazon.com/quicksight/latest/user/sharing-a-dashboard.html">Sharing Dashboards</a>.</p>
   */
  LinkSharingConfiguration?: LinkSharingConfiguration;
}

/**
 * @public
 */
export interface DescribeDashboardSnapshotJobRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that the dashboard snapshot job is executed in.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the dashboard that you have started a snapshot job for.</p>
   */
  DashboardId: string | undefined;

  /**
   * @public
   * <p>The ID of the job to be described. The job ID is set when you start a new job with a <code>StartDashboardSnapshotJob</code> API call.</p>
   */
  SnapshotJobId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SnapshotJobStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  QUEUED: "QUEUED",
  RUNNING: "RUNNING",
} as const;

/**
 * @public
 */
export type SnapshotJobStatus = (typeof SnapshotJobStatus)[keyof typeof SnapshotJobStatus];

/**
 * @public
 * <p>A structure that contains information on the Amazon S3 destinations of the generated snapshot.</p>
 */
export interface SnapshotDestinationConfiguration {
  /**
   * @public
   * <p>
   *             A list of <code>SnapshotS3DestinationConfiguration</code> objects that contain Amazon S3 destination configurations. This structure can hold a maximum of 1 <code>S3DestinationConfiguration</code>.
   *         </p>
   */
  S3Destinations?: SnapshotS3DestinationConfiguration[];
}

/**
 * @public
 * <p>A structure that contains the information on the snapshot files.</p>
 */
export interface SnapshotFileGroup {
  /**
   * @public
   * <p>A list of <code>SnapshotFile</code> objects that contain the information on the snapshot files that need to be generated. This structure can hold 1 configuration at a time.</p>
   */
  Files?: SnapshotFile[];
}

/**
 * @public
 * <p>Describes the configuration of the dashboard snapshot.</p>
 */
export interface SnapshotConfiguration {
  /**
   * @public
   * <p>A list of <code>SnapshotJobResultFileGroup</code> objects that contain information about the snapshot that is generated. This list can hold a maximum of 6 <code>FileGroup</code> configurations.</p>
   */
  FileGroups: SnapshotFileGroup[] | undefined;

  /**
   * @public
   * <p>A structure that contains information on the Amazon S3 bucket that the generated snapshot is stored in.</p>
   */
  DestinationConfiguration?: SnapshotDestinationConfiguration;

  /**
   * @public
   * <p>A list of Amazon QuickSight parameters and the list's override values.</p>
   */
  Parameters?: _Parameters;
}

/**
 * @public
 * <p>Use this structure to redact sensitive information that you provide about an anonymous user from the snapshot.</p>
 */
export interface SnapshotAnonymousUserRedacted {
  /**
   * @public
   * <p>The tag keys for the <code>RowLevelPermissionTags</code>.</p>
   */
  RowLevelPermissionTagKeys?: string[];
}

/**
 * @public
 * <p>A structure that contains information about the users that the dashboard snapshot is generated for. Sensitive user information is excluded.
 *         </p>
 */
export interface SnapshotUserConfigurationRedacted {
  /**
   * @public
   * <p>
   *             An array of records that describe anonymous users that the dashboard snapshot is generated for. Sensitive user information is excluded.
   *         </p>
   */
  AnonymousUsers?: SnapshotAnonymousUserRedacted[];
}

/**
 * @public
 */
export interface DescribeDashboardSnapshotJobResponse {
  /**
   * @public
   * <p>
   *             The ID of the Amazon Web Services account that the dashboard snapshot job is executed in.
   *         </p>
   */
  AwsAccountId?: string;

  /**
   * @public
   * <p>The ID of the dashboard that you have started a snapshot job for.</p>
   */
  DashboardId?: string;

  /**
   * @public
   * <p>The ID of the job to be described. The job ID is set when you start a new job with a <code>StartDashboardSnapshotJob</code> API call.</p>
   */
  SnapshotJobId?: string;

  /**
   * @public
   * <p>The user configuration for the snapshot job. This information is provided when you make a <code>StartDashboardSnapshotJob</code> API call.</p>
   */
  UserConfiguration?: SnapshotUserConfigurationRedacted;

  /**
   * @public
   * <p>The snapshot configuration of the job. This information is provided when you make a <code>StartDashboardSnapshotJob</code> API call.</p>
   */
  SnapshotConfiguration?: SnapshotConfiguration;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the snapshot job. The job ARN is generated when you start a new job with a <code>StartDashboardSnapshotJob</code> API call.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>Indicates the status of a job. The status updates as the job executes. This shows one of the following values.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>COMPLETED</code> - The job was completed successfully.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - The job failed to execute.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>QUEUED</code> - The job is queued and hasn't started yet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RUNNING</code> - The job is still running.</p>
   *             </li>
   *          </ul>
   */
  JobStatus?: SnapshotJobStatus | string;

  /**
   * @public
   * <p>
   *             The time that the snapshot job was created.
   *         </p>
   */
  CreatedTime?: Date;

  /**
   * @public
   * <p>
   *             The time that the snapshot job status was last updated.
   *         </p>
   */
  LastUpdatedTime?: Date;

  /**
   * @public
   * <p>
   *             The Amazon Web Services request ID for this operation.
   *         </p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface DescribeDashboardSnapshotJobResultRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that the dashboard snapshot job is executed in.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the dashboard that you have started a snapshot job for.</p>
   */
  DashboardId: string | undefined;

  /**
   * @public
   * <p>The ID of the job to be described. The job ID is set when you start a new job with a <code>StartDashboardSnapshotJob</code> API call.</p>
   */
  SnapshotJobId: string | undefined;
}

/**
 * @public
 * <p>An object that contains information on the error that caused the snapshot job to fail.</p>
 */
export interface SnapshotJobErrorInfo {
  /**
   * @public
   * <p>The error message.</p>
   */
  ErrorMessage?: string;

  /**
   * @public
   * <p>The error type.</p>
   */
  ErrorType?: string;
}

/**
 * @public
 * <p>An object that provides information on the result of a snapshot job. This object provides information about the job, the job status, and the location of the generated file.</p>
 */
export interface SnapshotJobResult {
  /**
   * @public
   * <p> A list of <code>AnonymousUserSnapshotJobResult</code> objects that contain information on anonymous users and their user configurations. This data provided by you when you make a <code>StartDashboardSnapshotJob</code> API call.</p>
   */
  AnonymousUsers?: AnonymousUserSnapshotJobResult[];
}

/**
 * @public
 */
export interface DescribeDashboardSnapshotJobResultResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the snapshot job. The job ARN is generated when you start a new job with a <code>StartDashboardSnapshotJob</code> API call.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>Indicates the status of a job after it has reached a terminal state. A finished snapshot job will retuen a <code>COMPLETED</code> or <code>FAILED</code> status.</p>
   */
  JobStatus?: SnapshotJobStatus | string;

  /**
   * @public
   * <p>The time that a snapshot job was created.</p>
   */
  CreatedTime?: Date;

  /**
   * @public
   * <p>The time that a snapshot job status was last updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * @public
   * <p>The result of the snapshot job. Jobs that have successfully completed will return the S3Uri where they are located. Jobs that have failedwill return information on the error that caused the job to fail.</p>
   */
  Result?: SnapshotJobResult;

  /**
   * @public
   * <p>Displays information for the error that caused a job to fail.</p>
   */
  ErrorInfo?: SnapshotJobErrorInfo;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface DescribeDataSetRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the dataset that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  DataSetId: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataSetResponse {
  /**
   * @public
   * <p>Information on the dataset.</p>
   */
  DataSet?: DataSet;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface DescribeDataSetPermissionsRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the dataset that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  DataSetId: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataSetPermissionsResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   */
  DataSetArn?: string;

  /**
   * @public
   * <p>The ID for the dataset that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  DataSetId?: string;

  /**
   * @public
   * <p>A list of resource permissions on the dataset.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface DescribeDataSetRefreshPropertiesRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the dataset.</p>
   */
  DataSetId: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataSetRefreshPropertiesResponse {
  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The dataset refresh properties.</p>
   */
  DataSetRefreshProperties?: DataSetRefreshProperties;
}

/**
 * @public
 */
export interface DescribeDataSourceRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  DataSourceId: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataSourceResponse {
  /**
   * @public
   * <p>The information on the data source.</p>
   */
  DataSource?: DataSource;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface DescribeDataSourcePermissionsRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  DataSourceId: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataSourcePermissionsResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the data source.</p>
   */
  DataSourceArn?: string;

  /**
   * @public
   * <p>The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  DataSourceId?: string;

  /**
   * @public
   * <p>A list of resource permissions on the data source.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface DescribeFolderRequest {
  /**
   * @public
   * <p>The ID for the Amazon Web Services account that contains the folder.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the folder.</p>
   */
  FolderId: string | undefined;
}

/**
 * @public
 * <p>A folder in Amazon QuickSight.</p>
 */
export interface Folder {
  /**
   * @public
   * <p>The ID of the folder.</p>
   */
  FolderId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the folder.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>A display name for the folder.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The type of folder it is.</p>
   */
  FolderType?: FolderType | string;

  /**
   * @public
   * <p>An array of ancestor ARN strings for the folder.</p>
   */
  FolderPath?: string[];

  /**
   * @public
   * <p>The time that the folder was created.</p>
   */
  CreatedTime?: Date;

  /**
   * @public
   * <p>The time that the folder was last updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * @public
   * <p>The sharing scope of the folder.</p>
   */
  SharingModel?: SharingModel | string;
}

/**
 * @public
 */
export interface DescribeFolderResponse {
  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>Information about the folder.</p>
   */
  Folder?: Folder;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface DescribeFolderPermissionsRequest {
  /**
   * @public
   * <p>The ID for the Amazon Web Services account that contains the folder.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the folder.</p>
   */
  FolderId: string | undefined;

  /**
   * @public
   * <p>The namespace of the folder whose permissions you want described.</p>
   */
  Namespace?: string;

  /**
   * @public
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A pagination token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeFolderPermissionsResponse {
  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The ID of the folder.</p>
   */
  FolderId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the folder.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>Information about the permissions on the folder.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The pagination token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The <code>NextToken</code> value isn't valid.</p>
 */
export class InvalidNextTokenException extends __BaseException {
  readonly name: "InvalidNextTokenException" = "InvalidNextTokenException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @public
   * <p>The Amazon Web Services request ID for this request.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNextTokenException, __BaseException>) {
    super({
      name: "InvalidNextTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNextTokenException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * @public
 */
export interface DescribeFolderResolvedPermissionsRequest {
  /**
   * @public
   * <p>The ID for the Amazon Web Services account that contains the folder.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the folder.</p>
   */
  FolderId: string | undefined;

  /**
   * @public
   * <p>The namespace of the folder whose permissions you want described.</p>
   */
  Namespace?: string;

  /**
   * @public
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A pagination token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeFolderResolvedPermissionsResponse {
  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The ID of the folder.</p>
   */
  FolderId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the folder.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>Information about the permissions for the folder.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>A pagination token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeGroupRequest {
  /**
   * @public
   * <p>The name of the group that you want to describe.</p>
   */
  GroupName: string | undefined;

  /**
   * @public
   * <p>The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the
   * 			Amazon Web Services account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The namespace of the group that you want described.</p>
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface DescribeGroupResponse {
  /**
   * @public
   * <p>The name of the group.</p>
   */
  Group?: Group;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface DescribeGroupMembershipRequest {
  /**
   * @public
   * <p>The user name of the user that you want to search for.</p>
   */
  MemberName: string | undefined;

  /**
   * @public
   * <p>The name of the group that you want to search.</p>
   */
  GroupName: string | undefined;

  /**
   * @public
   * <p>The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the
   *          Amazon Web Services account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The namespace that includes the group you are searching within.</p>
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface DescribeGroupMembershipResponse {
  /**
   * @public
   * <p>A member of an Amazon QuickSight group. Currently, group members must be users. Groups
   *             can't be members of another group. .</p>
   */
  GroupMember?: GroupMember;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface DescribeIAMPolicyAssignmentRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the assignment that you want to
   * 			describe.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The name of the assignment, also called a rule.</p>
   */
  AssignmentName: string | undefined;

  /**
   * @public
   * <p>The namespace that contains the assignment.</p>
   */
  Namespace: string | undefined;
}

/**
 * @public
 * <p>An Identity and Access Management (IAM) policy assignment.</p>
 */
export interface IAMPolicyAssignment {
  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId?: string;

  /**
   * @public
   * <p>Assignment ID.</p>
   */
  AssignmentId?: string;

  /**
   * @public
   * <p>Assignment name.</p>
   */
  AssignmentName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the IAM policy.</p>
   */
  PolicyArn?: string;

  /**
   * @public
   * <p>Identities.</p>
   */
  Identities?: Record<string, string[]>;

  /**
   * @public
   * <p>Assignment status.</p>
   */
  AssignmentStatus?: AssignmentStatus | string;
}

/**
 * @public
 */
export interface DescribeIAMPolicyAssignmentResponse {
  /**
   * @public
   * <p>Information describing the IAM policy assignment.</p>
   */
  IAMPolicyAssignment?: IAMPolicyAssignment;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface DescribeIngestionRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the dataset used in the ingestion.</p>
   */
  DataSetId: string | undefined;

  /**
   * @public
   * <p>An ID for the ingestion.</p>
   */
  IngestionId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const IngestionErrorType = {
  ACCOUNT_CAPACITY_LIMIT_EXCEEDED: "ACCOUNT_CAPACITY_LIMIT_EXCEEDED",
  CONNECTION_FAILURE: "CONNECTION_FAILURE",
  CURSOR_NOT_ENABLED: "CURSOR_NOT_ENABLED",
  CUSTOMER_ERROR: "CUSTOMER_ERROR",
  DATA_SET_DELETED: "DATA_SET_DELETED",
  DATA_SET_NOT_SPICE: "DATA_SET_NOT_SPICE",
  DATA_SET_SIZE_LIMIT_EXCEEDED: "DATA_SET_SIZE_LIMIT_EXCEEDED",
  DATA_SOURCE_AUTH_FAILED: "DATA_SOURCE_AUTH_FAILED",
  DATA_SOURCE_CONNECTION_FAILED: "DATA_SOURCE_CONNECTION_FAILED",
  DATA_SOURCE_NOT_FOUND: "DATA_SOURCE_NOT_FOUND",
  DATA_TOLERANCE_EXCEPTION: "DATA_TOLERANCE_EXCEPTION",
  DUPLICATE_COLUMN_NAMES_FOUND: "DUPLICATE_COLUMN_NAMES_FOUND",
  ELASTICSEARCH_CURSOR_NOT_ENABLED: "ELASTICSEARCH_CURSOR_NOT_ENABLED",
  FAILURE_TO_ASSUME_ROLE: "FAILURE_TO_ASSUME_ROLE",
  FAILURE_TO_PROCESS_JSON_FILE: "FAILURE_TO_PROCESS_JSON_FILE",
  IAM_ROLE_NOT_AVAILABLE: "IAM_ROLE_NOT_AVAILABLE",
  INGESTION_CANCELED: "INGESTION_CANCELED",
  INGESTION_SUPERSEDED: "INGESTION_SUPERSEDED",
  INTERNAL_SERVICE_ERROR: "INTERNAL_SERVICE_ERROR",
  INVALID_DATAPREP_SYNTAX: "INVALID_DATAPREP_SYNTAX",
  INVALID_DATA_SOURCE_CONFIG: "INVALID_DATA_SOURCE_CONFIG",
  INVALID_DATE_FORMAT: "INVALID_DATE_FORMAT",
  IOT_DATA_SET_FILE_EMPTY: "IOT_DATA_SET_FILE_EMPTY",
  IOT_FILE_NOT_FOUND: "IOT_FILE_NOT_FOUND",
  OAUTH_TOKEN_FAILURE: "OAUTH_TOKEN_FAILURE",
  PASSWORD_AUTHENTICATION_FAILURE: "PASSWORD_AUTHENTICATION_FAILURE",
  PERMISSION_DENIED: "PERMISSION_DENIED",
  PERMISSION_NOT_FOUND: "PERMISSION_NOT_FOUND",
  QUERY_TIMEOUT: "QUERY_TIMEOUT",
  REFRESH_SUPPRESSED_BY_EDIT: "REFRESH_SUPPRESSED_BY_EDIT",
  ROW_SIZE_LIMIT_EXCEEDED: "ROW_SIZE_LIMIT_EXCEEDED",
  S3_FILE_INACCESSIBLE: "S3_FILE_INACCESSIBLE",
  S3_MANIFEST_ERROR: "S3_MANIFEST_ERROR",
  S3_UPLOADED_FILE_DELETED: "S3_UPLOADED_FILE_DELETED",
  SOURCE_API_LIMIT_EXCEEDED_FAILURE: "SOURCE_API_LIMIT_EXCEEDED_FAILURE",
  SOURCE_RESOURCE_LIMIT_EXCEEDED: "SOURCE_RESOURCE_LIMIT_EXCEEDED",
  SPICE_TABLE_NOT_FOUND: "SPICE_TABLE_NOT_FOUND",
  SQL_EXCEPTION: "SQL_EXCEPTION",
  SQL_INVALID_PARAMETER_VALUE: "SQL_INVALID_PARAMETER_VALUE",
  SQL_NUMERIC_OVERFLOW: "SQL_NUMERIC_OVERFLOW",
  SQL_SCHEMA_MISMATCH_ERROR: "SQL_SCHEMA_MISMATCH_ERROR",
  SQL_TABLE_NOT_FOUND: "SQL_TABLE_NOT_FOUND",
  SSL_CERTIFICATE_VALIDATION_FAILURE: "SSL_CERTIFICATE_VALIDATION_FAILURE",
  UNRESOLVABLE_HOST: "UNRESOLVABLE_HOST",
  UNROUTABLE_HOST: "UNROUTABLE_HOST",
} as const;

/**
 * @public
 */
export type IngestionErrorType = (typeof IngestionErrorType)[keyof typeof IngestionErrorType];

/**
 * @public
 * <p>Error information for the SPICE ingestion of a dataset.</p>
 */
export interface ErrorInfo {
  /**
   * @public
   * <p>Error type.</p>
   */
  Type?: IngestionErrorType | string;

  /**
   * @public
   * <p>Error message.</p>
   */
  Message?: string;
}

/**
 * @public
 * <p>Information about a queued dataset SPICE ingestion.</p>
 */
export interface QueueInfo {
  /**
   * @public
   * <p>The ID of the queued ingestion.</p>
   */
  WaitingOnIngestion: string | undefined;

  /**
   * @public
   * <p>The ID of the ongoing ingestion. The queued ingestion is waiting for the ongoing
   *             ingestion to complete.</p>
   */
  QueuedIngestion: string | undefined;
}

/**
 * @public
 * @enum
 */
export const IngestionRequestSource = {
  MANUAL: "MANUAL",
  SCHEDULED: "SCHEDULED",
} as const;

/**
 * @public
 */
export type IngestionRequestSource = (typeof IngestionRequestSource)[keyof typeof IngestionRequestSource];

/**
 * @public
 * @enum
 */
export const IngestionRequestType = {
  EDIT: "EDIT",
  FULL_REFRESH: "FULL_REFRESH",
  INCREMENTAL_REFRESH: "INCREMENTAL_REFRESH",
  INITIAL_INGESTION: "INITIAL_INGESTION",
} as const;

/**
 * @public
 */
export type IngestionRequestType = (typeof IngestionRequestType)[keyof typeof IngestionRequestType];

/**
 * @public
 * <p>Information about rows for a data set SPICE ingestion.</p>
 */
export interface RowInfo {
  /**
   * @public
   * <p>The number of rows that were ingested.</p>
   */
  RowsIngested?: number;

  /**
   * @public
   * <p>The number of rows that were not ingested.</p>
   */
  RowsDropped?: number;

  /**
   * @public
   * <p>The total number of rows in the dataset.</p>
   */
  TotalRowsInDataset?: number;
}

/**
 * @public
 * <p>Information about the SPICE ingestion for a dataset.</p>
 */
export interface Ingestion {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn: string | undefined;

  /**
   * @public
   * <p>Ingestion ID.</p>
   */
  IngestionId?: string;

  /**
   * @public
   * <p>Ingestion status.</p>
   */
  IngestionStatus: IngestionStatus | string | undefined;

  /**
   * @public
   * <p>Error information for this ingestion.</p>
   */
  ErrorInfo?: ErrorInfo;

  /**
   * @public
   * <p>Information about rows for a data set SPICE ingestion.</p>
   */
  RowInfo?: RowInfo;

  /**
   * @public
   * <p>Information about a queued dataset SPICE ingestion.</p>
   */
  QueueInfo?: QueueInfo;

  /**
   * @public
   * <p>The time that this ingestion started.</p>
   */
  CreatedTime: Date | undefined;

  /**
   * @public
   * <p>The time that this ingestion took, measured in seconds.</p>
   */
  IngestionTimeInSeconds?: number;

  /**
   * @public
   * <p>The size of the data ingested, in bytes.</p>
   */
  IngestionSizeInBytes?: number;

  /**
   * @public
   * <p>Event source for this ingestion.</p>
   */
  RequestSource?: IngestionRequestSource | string;

  /**
   * @public
   * <p>Type of this ingestion.</p>
   */
  RequestType?: IngestionRequestType | string;
}

/**
 * @public
 */
export interface DescribeIngestionResponse {
  /**
   * @public
   * <p>Information about the ingestion.</p>
   */
  Ingestion?: Ingestion;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface DescribeIpRestrictionRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the IP rules.</p>
   */
  AwsAccountId: string | undefined;
}

/**
 * @public
 */
export interface DescribeIpRestrictionResponse {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the IP rules.</p>
   */
  AwsAccountId?: string;

  /**
   * @public
   * <p>A map that describes the IP rules with CIDR range and description.</p>
   */
  IpRestrictionRuleMap?: Record<string, string>;

  /**
   * @public
   * <p>A value that specifies whether IP rules are turned on.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.
   * 			</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface DescribeNamespaceRequest {
  /**
   * @public
   * <p>The ID for the Amazon Web Services account that contains the Amazon QuickSight namespace that you want to describe.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The namespace that you want to describe.</p>
   */
  Namespace: string | undefined;
}

/**
 * @public
 * @enum
 */
export const NamespaceErrorType = {
  INTERNAL_SERVICE_ERROR: "INTERNAL_SERVICE_ERROR",
  PERMISSION_DENIED: "PERMISSION_DENIED",
} as const;

/**
 * @public
 */
export type NamespaceErrorType = (typeof NamespaceErrorType)[keyof typeof NamespaceErrorType];

/**
 * @public
 * <p>Errors that occur during namespace creation.</p>
 */
export interface NamespaceError {
  /**
   * @public
   * <p>The error type.</p>
   */
  Type?: NamespaceErrorType | string;

  /**
   * @public
   * <p>The message for the error.</p>
   */
  Message?: string;
}

/**
 * @public
 * <p>The error type.</p>
 */
export interface NamespaceInfoV2 {
  /**
   * @public
   * <p>The name of the error.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The namespace ARN.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The namespace Amazon Web Services Region.</p>
   */
  CapacityRegion?: string;

  /**
   * @public
   * <p>The creation status of a namespace that is not yet completely created.</p>
   */
  CreationStatus?: NamespaceStatus | string;

  /**
   * @public
   * <p>The identity store used for the namespace.</p>
   */
  IdentityStore?: IdentityStore | string;

  /**
   * @public
   * <p>An error that occurred when the namespace was created.</p>
   */
  NamespaceError?: NamespaceError;
}

/**
 * @public
 */
export interface DescribeNamespaceResponse {
  /**
   * @public
   * <p>The information about the namespace that you're describing. The response includes
   *         the namespace ARN, name, Amazon Web Services Region, creation status, and identity store. <code>DescribeNamespace</code> also
   *         works for namespaces that are in the process of being created. For incomplete namespaces,
   *         this API operation lists the namespace error types and messages associated with the creation process.</p>
   */
  Namespace?: NamespaceInfoV2;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface DescribeRefreshScheduleRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the dataset.</p>
   */
  DataSetId: string | undefined;

  /**
   * @public
   * <p>The ID of the refresh schedule.</p>
   */
  ScheduleId: string | undefined;
}

/**
 * @public
 */
export interface DescribeRefreshScheduleResponse {
  /**
   * @public
   * <p>The refresh schedule.</p>
   */
  RefreshSchedule?: RefreshSchedule;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the refresh schedule.</p>
   */
  Arn?: string;
}

/**
 * @public
 */
export interface DescribeTemplateRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the template that you're describing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the template.</p>
   */
  TemplateId: string | undefined;

  /**
   * @public
   * <p>(Optional) The number for the version to describe. If a <code>VersionNumber</code> parameter
   * 			value isn't provided, the latest version of the template is described.</p>
   */
  VersionNumber?: number;

  /**
   * @public
   * <p>The alias of the template that you want to describe. If you name a specific alias, you
   * 			describe the version that the alias points to. You can specify the latest version of the
   * 			template by providing the keyword <code>$LATEST</code> in the <code>AliasName</code>
   * 			parameter. The keyword <code>$PUBLISHED</code> doesn't apply to templates.</p>
   */
  AliasName?: string;
}

/**
 * @public
 * @enum
 */
export const TemplateErrorType = {
  ACCESS_DENIED: "ACCESS_DENIED",
  DATA_SET_NOT_FOUND: "DATA_SET_NOT_FOUND",
  INTERNAL_FAILURE: "INTERNAL_FAILURE",
  SOURCE_NOT_FOUND: "SOURCE_NOT_FOUND",
} as const;

/**
 * @public
 */
export type TemplateErrorType = (typeof TemplateErrorType)[keyof typeof TemplateErrorType];

/**
 * @public
 * <p>List of errors that occurred when the template version creation failed.</p>
 */
export interface TemplateError {
  /**
   * @public
   * <p>Type of error.</p>
   */
  Type?: TemplateErrorType | string;

  /**
   * @public
   * <p>Description of the error type.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>An error path that shows which entities caused the template error.</p>
   */
  ViolatedEntities?: Entity[];
}

/**
 * @public
 * <p>A version of a template.</p>
 */
export interface TemplateVersion {
  /**
   * @public
   * <p>The time that this template version was created.</p>
   */
  CreatedTime?: Date;

  /**
   * @public
   * <p>Errors associated with this template version.</p>
   */
  Errors?: TemplateError[];

  /**
   * @public
   * <p>The version number of the template version.</p>
   */
  VersionNumber?: number;

  /**
   * @public
   * <p>The status that is associated with the template.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATION_IN_PROGRESS</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATION_SUCCESSFUL</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATION_FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_IN_PROGRESS</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_SUCCESSFUL</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETED</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Status?: ResourceStatus | string;

  /**
   * @public
   * <p>Schema of the dataset identified by the placeholder. Any dashboard created from this
   *             template should be bound to new datasets matching the same schema described through this
   *             API operation.</p>
   */
  DataSetConfigurations?: DataSetConfiguration[];

  /**
   * @public
   * <p>The description of the template.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an analysis or template that was used to create this
   *             template.</p>
   */
  SourceEntityArn?: string;

  /**
   * @public
   * <p>The ARN of the theme associated with this version of the template.</p>
   */
  ThemeArn?: string;

  /**
   * @public
   * <p>A list of the associated sheets with the unique identifier and name of each sheet.</p>
   */
  Sheets?: Sheet[];
}

/**
 * @public
 * <p>A template object. A <i>template</i> is an entity in Amazon QuickSight that
 *             encapsulates the metadata required to create an analysis and that you can use to create
 *             a dashboard. A template adds a layer of abstraction by using placeholders to replace the
 *             dataset associated with an analysis. You can use templates to create dashboards by
 *             replacing dataset placeholders with datasets that follow the same schema that was used
 *             to create the source analysis and template.</p>
 *          <p>You can share templates across Amazon Web Services accounts by allowing users in other Amazon Web Services accounts to
 *             create a template or a dashboard from an existing template.</p>
 */
export interface Template {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the template.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The display name of the template.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A structure describing the versions of the template.</p>
   */
  Version?: TemplateVersion;

  /**
   * @public
   * <p>The ID for the template. This is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  TemplateId?: string;

  /**
   * @public
   * <p>Time when this was last updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * @public
   * <p>Time when this was created.</p>
   */
  CreatedTime?: Date;
}

/**
 * @public
 */
export interface DescribeTemplateResponse {
  /**
   * @public
   * <p>The template structure for the object you want to describe.</p>
   */
  Template?: Template;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface DescribeTemplateAliasRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the template alias that you're
   * 			describing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the template.</p>
   */
  TemplateId: string | undefined;

  /**
   * @public
   * <p>The name of the template alias that you want to describe. If you name a specific alias, you
   * 			describe the version that the alias points to. You can specify the latest version of the
   * 			template by providing the keyword <code>$LATEST</code> in the <code>AliasName</code>
   * 			parameter. The keyword <code>$PUBLISHED</code> doesn't apply to templates.</p>
   */
  AliasName: string | undefined;
}

/**
 * @public
 */
export interface DescribeTemplateAliasResponse {
  /**
   * @public
   * <p>Information about the template alias.</p>
   */
  TemplateAlias?: TemplateAlias;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface DescribeTemplateDefinitionRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the template. You must be using the
   * 			 Amazon Web Services account that the template is in.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the template that you're describing.</p>
   */
  TemplateId: string | undefined;

  /**
   * @public
   * <p>The version number of the template.</p>
   */
  VersionNumber?: number;

  /**
   * @public
   * <p>The alias of the template that you want to describe. If you name a specific alias, you
   * 			 describe the version that the alias points to. You can specify the latest version of the
   * 			 template by providing the keyword <code>$LATEST</code> in the <code>AliasName</code>
   * 			 parameter. The keyword <code>$PUBLISHED</code> doesn't apply to templates.</p>
   */
  AliasName?: string;
}

/**
 * @public
 */
export interface DescribeTemplateDefinitionResponse {
  /**
   * @public
   * <p>The descriptive name of the template.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The ID of the template described.</p>
   */
  TemplateId?: string;

  /**
   * @public
   * <p>Errors associated with the template version.</p>
   */
  Errors?: TemplateError[];

  /**
   * @public
   * <p>Status associated with the template.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATION_IN_PROGRESS</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATION_SUCCESSFUL</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATION_FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_IN_PROGRESS</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_SUCCESSFUL</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETED</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ResourceStatus?: ResourceStatus | string;

  /**
   * @public
   * <p>The ARN of the theme of the template.</p>
   */
  ThemeArn?: string;

  /**
   * @public
   * <p>The definition of the template.</p>
   *          <p>A definition is the data model of all features in a Dashboard, Template, or Analysis.</p>
   */
  Definition?: TemplateVersionDefinition;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface DescribeTemplatePermissionsRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the template that you're describing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the template.</p>
   */
  TemplateId: string | undefined;
}

/**
 * @public
 */
export interface DescribeTemplatePermissionsResponse {
  /**
   * @public
   * <p>The ID for the template.</p>
   */
  TemplateId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the template.</p>
   */
  TemplateArn?: string;

  /**
   * @public
   * <p>A list of resource permissions to be set on the template. </p>
   */
  Permissions?: ResourcePermission[];

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface DescribeThemeRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the theme that you're describing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the theme.</p>
   */
  ThemeId: string | undefined;

  /**
   * @public
   * <p>The version number for the version to describe. If a <code>VersionNumber</code> parameter
   * 			value isn't provided, the latest version of the theme is described.</p>
   */
  VersionNumber?: number;

  /**
   * @public
   * <p>The alias of the theme that you want to describe. If you name a specific alias, you
   * 			describe the version that the alias points to. You can specify the latest version of the
   * 			theme by providing the keyword <code>$LATEST</code> in the <code>AliasName</code>
   * 			parameter. The keyword <code>$PUBLISHED</code> doesn't apply to themes.</p>
   */
  AliasName?: string;
}

/**
 * @public
 * @enum
 */
export const ThemeType = {
  ALL: "ALL",
  CUSTOM: "CUSTOM",
  QUICKSIGHT: "QUICKSIGHT",
} as const;

/**
 * @public
 */
export type ThemeType = (typeof ThemeType)[keyof typeof ThemeType];

/**
 * @public
 * @enum
 */
export const ThemeErrorType = {
  INTERNAL_FAILURE: "INTERNAL_FAILURE",
} as const;

/**
 * @public
 */
export type ThemeErrorType = (typeof ThemeErrorType)[keyof typeof ThemeErrorType];

/**
 * @public
 * <p>Theme error.</p>
 */
export interface ThemeError {
  /**
   * @public
   * <p>The type of error.</p>
   */
  Type?: ThemeErrorType | string;

  /**
   * @public
   * <p>The error message.</p>
   */
  Message?: string;
}

/**
 * @public
 * <p>A version of a theme.</p>
 */
export interface ThemeVersion {
  /**
   * @public
   * <p>The version number of the theme.</p>
   */
  VersionNumber?: number;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The description of the theme.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The Amazon QuickSight-defined ID of the theme that a custom theme inherits from. All
   *             themes initially inherit from a default Amazon QuickSight theme.</p>
   */
  BaseThemeId?: string;

  /**
   * @public
   * <p>The date and time that this theme version was created.</p>
   */
  CreatedTime?: Date;

  /**
   * @public
   * <p>The theme configuration, which contains all the theme display properties.</p>
   */
  Configuration?: ThemeConfiguration;

  /**
   * @public
   * <p>Errors associated with the theme.</p>
   */
  Errors?: ThemeError[];

  /**
   * @public
   * <p>The status of the theme version.</p>
   */
  Status?: ResourceStatus | string;
}

/**
 * @public
 * <p>Summary information about a theme.</p>
 */
export interface Theme {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the theme.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name that the user gives to the theme.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The identifier that the user gives to the theme.</p>
   */
  ThemeId?: string;

  /**
   * @public
   * <p>A version of a theme.</p>
   */
  Version?: ThemeVersion;

  /**
   * @public
   * <p>The date and time that the theme was created.</p>
   */
  CreatedTime?: Date;

  /**
   * @public
   * <p>The date and time that the theme was last updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * @public
   * <p>The type of theme, based on how it was created. Valid values include:
   *             <code>QUICKSIGHT</code> and <code>CUSTOM</code>.</p>
   */
  Type?: ThemeType | string;
}

/**
 * @public
 */
export interface DescribeThemeResponse {
  /**
   * @public
   * <p>The information about the theme that you are describing.</p>
   */
  Theme?: Theme;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface DescribeThemeAliasRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the theme alias that you're
   * 			describing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the theme.</p>
   */
  ThemeId: string | undefined;

  /**
   * @public
   * <p>The name of the theme alias that you want to describe.</p>
   */
  AliasName: string | undefined;
}

/**
 * @public
 */
export interface DescribeThemeAliasResponse {
  /**
   * @public
   * <p>Information about the theme alias.</p>
   */
  ThemeAlias?: ThemeAlias;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface DescribeThemePermissionsRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the theme that you're describing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the theme that you want to describe permissions for.</p>
   */
  ThemeId: string | undefined;
}

/**
 * @public
 */
export interface DescribeThemePermissionsResponse {
  /**
   * @public
   * <p>The ID for the theme.</p>
   */
  ThemeId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the theme.</p>
   */
  ThemeArn?: string;

  /**
   * @public
   * <p>A list of resource permissions set on the theme. </p>
   */
  Permissions?: ResourcePermission[];

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface DescribeTopicRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the topic that you want to describe. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  TopicId: string | undefined;
}

/**
 * @public
 */
export interface DescribeTopicResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the topic.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The ID of the topic that you want to describe. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  TopicId?: string;

  /**
   * @public
   * <p>The definition of a topic.</p>
   */
  Topic?: TopicDetails;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface DescribeTopicPermissionsRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the topic that you want
   *          described.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the topic that you want to describe. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  TopicId: string | undefined;
}

/**
 * @public
 */
export interface DescribeTopicPermissionsResponse {
  /**
   * @public
   * <p>The ID of the topic that you want to describe. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  TopicId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the topic.</p>
   */
  TopicArn?: string;

  /**
   * @public
   * <p>A list of resource permissions that are configured to the topic.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface DescribeTopicRefreshRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the topic whose refresh you want
   *          to describe.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the topic that you want to describe. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  TopicId: string | undefined;

  /**
   * @public
   * <p>The ID of the refresh, which is performed when the topic is created or updated.</p>
   */
  RefreshId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TopicRefreshStatus = {
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  INITIALIZED: "INITIALIZED",
  RUNNING: "RUNNING",
} as const;

/**
 * @public
 */
export type TopicRefreshStatus = (typeof TopicRefreshStatus)[keyof typeof TopicRefreshStatus];

/**
 * @public
 * <p>The details about the refresh of a topic.</p>
 */
export interface TopicRefreshDetails {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the topic refresh.</p>
   */
  RefreshArn?: string;

  /**
   * @public
   * <p>The ID of the refresh, which occurs as a result of topic creation or topic update.</p>
   */
  RefreshId?: string;

  /**
   * @public
   * <p>The status of the refresh job that indicates whether the job is still running, completed successfully, or failed.</p>
   */
  RefreshStatus?: TopicRefreshStatus | string;
}

/**
 * @public
 */
export interface DescribeTopicRefreshResponse {
  /**
   * @public
   * <p>Details of the refresh, which is performed when the topic is created or updated.</p>
   */
  RefreshDetails?: TopicRefreshDetails;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface DescribeTopicRefreshScheduleRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the topic that contains the refresh schedule that you want to describe. This
   *          ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  TopicId: string | undefined;

  /**
   * @public
   * <p>The ID of the dataset.</p>
   */
  DatasetId: string | undefined;
}

/**
 * @public
 */
export interface DescribeTopicRefreshScheduleResponse {
  /**
   * @public
   * <p>The ID of the topic that contains the refresh schedule that you want to describe. This
   *          ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  TopicId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the topic.</p>
   */
  TopicArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   */
  DatasetArn?: string;

  /**
   * @public
   * <p>The definition of a refresh schedule.</p>
   */
  RefreshSchedule?: TopicRefreshSchedule;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface DescribeUserRequest {
  /**
   * @public
   * <p>The name of the user that you want to describe.</p>
   */
  UserName: string | undefined;

  /**
   * @public
   * <p>The ID for the Amazon Web Services account that the user is in. Currently, you use the ID for the
   * 			Amazon Web Services account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   */
  Namespace: string | undefined;
}

/**
 * @public
 * @enum
 */
export const IdentityType = {
  IAM: "IAM",
  IAM_IDENTITY_CENTER: "IAM_IDENTITY_CENTER",
  QUICKSIGHT: "QUICKSIGHT",
} as const;

/**
 * @public
 */
export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

/**
 * @public
 * @enum
 */
export const UserRole = {
  ADMIN: "ADMIN",
  AUTHOR: "AUTHOR",
  READER: "READER",
  RESTRICTED_AUTHOR: "RESTRICTED_AUTHOR",
  RESTRICTED_READER: "RESTRICTED_READER",
} as const;

/**
 * @public
 */
export type UserRole = (typeof UserRole)[keyof typeof UserRole];

/**
 * @public
 * <p>A registered user of Amazon QuickSight. </p>
 */
export interface User {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the user.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The user's user name. This value is required if you are registering a user that will be managed in Amazon QuickSight. In the output, the value for <code>UserName</code> is
   *                 <code>N/A</code> when the value for <code>IdentityType</code> is <code>IAM</code>
   *             and the corresponding IAM user is deleted.</p>
   */
  UserName?: string;

  /**
   * @public
   * <p>The user's email address.</p>
   */
  Email?: string;

  /**
   * @public
   * <p>The Amazon QuickSight role for the user. The user role can be one of the
   *             following:.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>READER</code>: A user who has read-only access to dashboards.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AUTHOR</code>: A user who can create data sources, datasets, analyses,
   *                     and dashboards.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ADMIN</code>: A user who is an author, who can also manage Amazon
   *                     Amazon QuickSight settings.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESTRICTED_READER</code>: This role isn't currently available for
   *                     use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESTRICTED_AUTHOR</code>: This role isn't currently available for
   *                     use.</p>
   *             </li>
   *          </ul>
   */
  Role?: UserRole | string;

  /**
   * @public
   * <p>The type of identity authentication used by the user.</p>
   */
  IdentityType?: IdentityType | string;

  /**
   * @public
   * <p>The active status of user. When you create an Amazon QuickSight user that's not an IAM user or an Active Directory user, that user is inactive until they sign in and provide a
   *             password.</p>
   */
  Active?: boolean;

  /**
   * @public
   * <p>The principal ID of the user.</p>
   */
  PrincipalId?: string;

  /**
   * @public
   * <p>The custom permissions profile associated with this user.</p>
   */
  CustomPermissionsName?: string;

  /**
   * @public
   * <p>The type of supported external login provider that provides identity to let the user
   *             federate into Amazon QuickSight with an associated IAM role. The type can be one of the following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>COGNITO</code>: Amazon Cognito. The provider URL is cognito-identity.amazonaws.com.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CUSTOM_OIDC</code>: Custom OpenID Connect (OIDC) provider.</p>
   *             </li>
   *          </ul>
   */
  ExternalLoginFederationProviderType?: string;

  /**
   * @public
   * <p>The URL of the external login provider.</p>
   */
  ExternalLoginFederationProviderUrl?: string;

  /**
   * @public
   * <p>The identity ID for the user in the external login provider.</p>
   */
  ExternalLoginId?: string;
}

/**
 * @public
 */
export interface DescribeUserResponse {
  /**
   * @public
   * <p>The user name.</p>
   */
  User?: User;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface DescribeVPCConnectionRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID of the account that contains the VPC connection that
   * 			you want described.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the VPC connection that
   * 			you're creating. This ID is a unique identifier for each Amazon Web Services Region in an Amazon Web Services account.</p>
   */
  VPCConnectionId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const NetworkInterfaceStatus = {
  ATTACHMENT_FAILED_ROLLBACK_FAILED: "ATTACHMENT_FAILED_ROLLBACK_FAILED",
  AVAILABLE: "AVAILABLE",
  CREATING: "CREATING",
  CREATION_FAILED: "CREATION_FAILED",
  DELETED: "DELETED",
  DELETING: "DELETING",
  DELETION_FAILED: "DELETION_FAILED",
  DELETION_SCHEDULED: "DELETION_SCHEDULED",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type NetworkInterfaceStatus = (typeof NetworkInterfaceStatus)[keyof typeof NetworkInterfaceStatus];

/**
 * @public
 * <p>The structure that contains information about a network interface.</p>
 */
export interface NetworkInterface {
  /**
   * @public
   * <p>The subnet ID associated with the network interface.</p>
   */
  SubnetId?: string;

  /**
   * @public
   * <p>The availability zone that the network interface resides in.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>An error message.</p>
   */
  ErrorMessage?: string;

  /**
   * @public
   * <p>The status of the network interface.</p>
   */
  Status?: NetworkInterfaceStatus | string;

  /**
   * @public
   * <p>The network interface ID.</p>
   */
  NetworkInterfaceId?: string;
}

/**
 * @public
 * <p>The structure of a VPC connection.</p>
 */
export interface VPCConnection {
  /**
   * @public
   * <p>The ID of the VPC connection that you're creating. This ID is a unique identifier for each Amazon Web Services Region in an
   *                 Amazon Web Services account.</p>
   */
  VPCConnectionId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the VPC connection.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The display name for the VPC connection.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The Amazon EC2 VPC ID associated with the VPC connection.</p>
   */
  VPCId?: string;

  /**
   * @public
   * <p>The Amazon EC2 security group IDs associated with the VPC connection.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * @public
   * <p>A list of IP addresses of DNS resolver endpoints for the VPC connection.</p>
   */
  DnsResolvers?: string[];

  /**
   * @public
   * <p>The status of the VPC connection.</p>
   */
  Status?: VPCConnectionResourceStatus | string;

  /**
   * @public
   * <p>The availability status of the VPC connection.</p>
   */
  AvailabilityStatus?: VPCConnectionAvailabilityStatus | string;

  /**
   * @public
   * <p>A list of network interfaces.</p>
   */
  NetworkInterfaces?: NetworkInterface[];

  /**
   * @public
   * <p>The ARN of the
   *                 IAM role associated with the VPC
   *             connection.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>The time that the VPC connection was created.</p>
   */
  CreatedTime?: Date;

  /**
   * @public
   * <p>The time that the VPC connection was last updated.</p>
   */
  LastUpdatedTime?: Date;
}

/**
 * @public
 */
export interface DescribeVPCConnectionResponse {
  /**
   * @public
   * <p>A response object that provides information for the specified VPC connection.</p>
   */
  VPCConnection?: VPCConnection;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 * <p>The domain specified isn't on the allow list. All domains for embedded dashboards must be
 * 			added to the approved list by an Amazon QuickSight admin.</p>
 */
export class DomainNotWhitelistedException extends __BaseException {
  readonly name: "DomainNotWhitelistedException" = "DomainNotWhitelistedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @public
   * <p>The Amazon Web Services request ID for this request.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DomainNotWhitelistedException, __BaseException>) {
    super({
      name: "DomainNotWhitelistedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DomainNotWhitelistedException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * @public
 * @enum
 */
export const EmbeddingIdentityType = {
  ANONYMOUS: "ANONYMOUS",
  IAM: "IAM",
  QUICKSIGHT: "QUICKSIGHT",
} as const;

/**
 * @public
 */
export type EmbeddingIdentityType = (typeof EmbeddingIdentityType)[keyof typeof EmbeddingIdentityType];

/**
 * @public
 * @enum
 */
export const FolderFilterAttribute = {
  DIRECT_QUICKSIGHT_OWNER: "DIRECT_QUICKSIGHT_OWNER",
  DIRECT_QUICKSIGHT_SOLE_OWNER: "DIRECT_QUICKSIGHT_SOLE_OWNER",
  DIRECT_QUICKSIGHT_VIEWER_OR_OWNER: "DIRECT_QUICKSIGHT_VIEWER_OR_OWNER",
  FOLDER_NAME: "FOLDER_NAME",
  PARENT_FOLDER_ARN: "PARENT_FOLDER_ARN",
  QUICKSIGHT_OWNER: "QUICKSIGHT_OWNER",
  QUICKSIGHT_VIEWER_OR_OWNER: "QUICKSIGHT_VIEWER_OR_OWNER",
} as const;

/**
 * @public
 */
export type FolderFilterAttribute = (typeof FolderFilterAttribute)[keyof typeof FolderFilterAttribute];

/**
 * @public
 * <p>An object that consists of a member Amazon Resource Name (ARN) and a member ID.</p>
 */
export interface MemberIdArnPair {
  /**
   * @public
   * <p>The ID of the member.</p>
   */
  MemberId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the member.</p>
   */
  MemberArn?: string;
}

/**
 * @public
 * <p>A filter to use to search an Amazon QuickSight folder.</p>
 */
export interface FolderSearchFilter {
  /**
   * @public
   * <p>The comparison operator that you want to use as a filter, for example  <code>"Operator": "StringEquals"</code>. Valid values are  <code>"StringEquals"</code>  and  <code>"StringLike"</code>.</p>
   *          <p>If you set the operator value to <code>"StringEquals"</code>, you need to provide an ownership related filter in the <code>"NAME"</code> field and the arn of the user or group whose folders you want to search in the <code>"Value"</code> field. For example,  <code>"Name":"DIRECT_QUICKSIGHT_OWNER", "Operator": "StringEquals", "Value": "arn:aws:quicksight:us-east-1:1:user/default/UserName1"</code>.</p>
   *          <p>If you set the value to <code>"StringLike"</code>, you need to provide the name of the folders you are searching for. For example, <code>"Name":"FOLDER_NAME", "Operator": "StringLike", "Value": "Test"</code>. The <code>"StringLike"</code> operator only supports the <code>NAME</code> value <code>FOLDER_NAME</code>.</p>
   */
  Operator?: FilterOperator | string;

  /**
   * @public
   * <p>The name of a value that you want to use in the filter. For example, <code>"Name": "QUICKSIGHT_OWNER"</code>.</p>
   *          <p>Valid values are defined as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>QUICKSIGHT_VIEWER_OR_OWNER</code>: Provide an ARN of a user or group, and any folders with that ARN listed as one of the folder's owners or viewers are returned. Implicit permissions from folders or groups are considered.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>QUICKSIGHT_OWNER</code>: Provide an ARN of a user or group, and any folders with that ARN listed as one of the owners of the folders are returned. Implicit permissions from folders or groups are considered.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DIRECT_QUICKSIGHT_SOLE_OWNER</code>: Provide an ARN of a user or group, and any folders with that ARN listed as the only owner of the folder are returned. Implicit permissions from folders or groups are not considered.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DIRECT_QUICKSIGHT_OWNER</code>: Provide an ARN of a user or group, and any folders with that ARN listed as one of the owners of the folders are returned. Implicit permissions from folders or groups are not considered.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DIRECT_QUICKSIGHT_VIEWER_OR_OWNER</code>: Provide an ARN of a user or group, and any folders with that ARN listed as one of the owners or viewers of the folders are returned. Implicit permissions from folders or groups are not considered. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FOLDER_NAME</code>: Any folders whose names have a substring match to this value will be returned.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PARENT_FOLDER_ARN</code>: Provide an ARN of a folder, and any folders that are directly under that parent folder are returned. If you choose to use this option and leave the value blank, all root-level folders in the account are returned. </p>
   *             </li>
   *          </ul>
   */
  Name?: FolderFilterAttribute | string;

  /**
   * @public
   * <p>The value of the named item (in this example, <code>PARENT_FOLDER_ARN</code>), that you want to use as a filter. For example, <code>"Value": "arn:aws:quicksight:us-east-1:1:folder/folderId"</code>.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>A summary of information about an existing Amazon QuickSight folder. </p>
 */
export interface FolderSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the folder.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The ID of the folder.</p>
   */
  FolderId?: string;

  /**
   * @public
   * <p>The display name of the folder.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The type of folder.</p>
   */
  FolderType?: FolderType | string;

  /**
   * @public
   * <p>The time that the folder was created.</p>
   */
  CreatedTime?: Date;

  /**
   * @public
   * <p>The time that the folder was last updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * @public
   * <p>The sharing scope of the folder.</p>
   */
  SharingModel?: SharingModel | string;
}

/**
 * @public
 * <p>The key-value pair used for the row-level security tags feature.</p>
 */
export interface SessionTag {
  /**
   * @public
   * <p>The key for the tag.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The value that you want to assign the tag.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface GenerateEmbedUrlForAnonymousUserRequest {
  /**
   * @public
   * <p>The ID for the Amazon Web Services account that contains the dashboard that you're embedding.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>How many minutes the session is valid. The session lifetime must be in [15-600] minutes range.</p>
   */
  SessionLifetimeInMinutes?: number;

  /**
   * @public
   * <p>The Amazon QuickSight namespace that the anonymous user virtually belongs to. If you are not using an Amazon QuickSight custom namespace, set this to <code>default</code>.</p>
   */
  Namespace: string | undefined;

  /**
   * @public
   * <p>The session tags used for row-level security. Before you use this parameter, make sure that you have configured the relevant datasets using the <code>DataSet$RowLevelPermissionTagConfiguration</code> parameter so that session tags can be used to provide row-level security.</p>
   *          <p>These are not the tags used for the Amazon Web Services resource tagging feature. For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/quicksight-dev-rls-tags.html">Using Row-Level Security (RLS) with Tags</a>in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  SessionTags?: SessionTag[];

  /**
   * @public
   * <p>The Amazon Resource Names (ARNs) for the Amazon QuickSight resources that the user
   *             is authorized to access during the lifetime of the session. If you choose
   *                 <code>Dashboard</code> embedding experience, pass the list of dashboard ARNs in the
   *             account that you want the user to be able to view. Currently, you can pass up to 25
   *             dashboard ARNs in each API call.</p>
   */
  AuthorizedResourceArns: string[] | undefined;

  /**
   * @public
   * <p>The configuration of the experience that you are embedding.</p>
   */
  ExperienceConfiguration: AnonymousUserEmbeddingExperienceConfiguration | undefined;

  /**
   * @public
   * <p>The domains that you want to add to the allow list for access to the generated URL that
   *             is then embedded. This optional parameter overrides the static domains that are
   *             configured in the Manage QuickSight menu in the Amazon QuickSight console. Instead, it
   *             allows only the domains that you include in this parameter. You can list up to three
   *             domains or subdomains in each API call.</p>
   *          <p>To include all subdomains under a specific domain to the allow list, use <code>*</code>.
   *             For example, <code>https://*.sapp.amazon.com</code> includes all subdomains under
   *             <code>https://sapp.amazon.com</code>.</p>
   */
  AllowedDomains?: string[];
}

/**
 * @public
 */
export interface GenerateEmbedUrlForAnonymousUserResponse {
  /**
   * @public
   * <p>The embed URL for the dashboard.</p>
   */
  EmbedUrl: string | undefined;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status: number | undefined;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) to use for the anonymous Amazon QuickSight user.</p>
   */
  AnonymousUserArn: string | undefined;
}

/**
 * @public
 * <p>The number of minutes specified for the lifetime of a session isn't valid. The session
 * 			lifetime must be 15-600 minutes.</p>
 */
export class SessionLifetimeInMinutesInvalidException extends __BaseException {
  readonly name: "SessionLifetimeInMinutesInvalidException" = "SessionLifetimeInMinutesInvalidException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @public
   * <p>The Amazon Web Services request ID for this request.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SessionLifetimeInMinutesInvalidException, __BaseException>) {
    super({
      name: "SessionLifetimeInMinutesInvalidException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SessionLifetimeInMinutesInvalidException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * @public
 * <p>This error indicates that you are calling an embedding operation in Amazon QuickSight
 * 			without the required pricing plan on your Amazon Web Services account. Before you can use embedding
 * 			for anonymous users, a QuickSight administrator needs to add capacity pricing to Amazon QuickSight. You
 * 		    can do this on the <b>Manage Amazon QuickSight</b> page. </p>
 *          <p>After capacity pricing is added, you can use the
 *             <code>
 *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_GetDashboardEmbedUrl.html">GetDashboardEmbedUrl</a>
 *             </code> API operation with the
 *             <code>--identity-type ANONYMOUS</code> option.</p>
 */
export class UnsupportedPricingPlanException extends __BaseException {
  readonly name: "UnsupportedPricingPlanException" = "UnsupportedPricingPlanException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @public
   * <p>The Amazon Web Services request ID for this request.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedPricingPlanException, __BaseException>) {
    super({
      name: "UnsupportedPricingPlanException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedPricingPlanException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * @public
 * <p>The state perssitence configuration of an embedded dashboard.</p>
 */
export interface StatePersistenceConfigurations {
  /**
   * @public
   * <p>Determines if a Amazon QuickSight dashboard's state persistence settings are turned on or off.</p>
   */
  Enabled: boolean | undefined;
}

/**
 * @public
 * <p>The feature configuration for an embedded dashboard.</p>
 */
export interface RegisteredUserDashboardFeatureConfigurations {
  /**
   * @public
   * <p>The state persistence settings of an embedded dashboard.</p>
   */
  StatePersistence?: StatePersistenceConfigurations;

  /**
   * @public
   * <p>The bookmarks configuration for an embedded dashboard in Amazon QuickSight.</p>
   */
  Bookmarks?: BookmarksConfigurations;
}

/**
 * @public
 * <p>Information about the dashboard you want to embed.</p>
 */
export interface RegisteredUserDashboardEmbeddingConfiguration {
  /**
   * @public
   * <p>The dashboard ID for the dashboard that you want the user to see first. This ID is included in the output URL. When the URL in response is accessed, Amazon QuickSight renders this dashboard if the user has permissions to view it.</p>
   *          <p>If the user does not have permission to view this dashboard, they see a permissions error message.</p>
   */
  InitialDashboardId: string | undefined;

  /**
   * @public
   * <p>The feature configurations of an embbedded Amazon QuickSight dashboard.</p>
   */
  FeatureConfigurations?: RegisteredUserDashboardFeatureConfigurations;
}

/**
 * @public
 * <p>The experience that you are embedding. You can use this object to generate a url that embeds a visual into your application.</p>
 */
export interface RegisteredUserDashboardVisualEmbeddingConfiguration {
  /**
   * @public
   * <p>The visual ID for the visual that you want the user to embed. This ID is included in the output URL. When the URL in response is accessed, Amazon QuickSight renders this visual.</p>
   *          <p>The Amazon Resource Name (ARN) of the dashboard that the visual belongs to must be included in the <code>AuthorizedResourceArns</code> parameter. Otherwise, the request will fail with <code>InvalidParameterValueException</code>.</p>
   */
  InitialDashboardVisualId: DashboardVisualId | undefined;
}

/**
 * @public
 * <p>Information about the Q search bar embedding experience.</p>
 */
export interface RegisteredUserQSearchBarEmbeddingConfiguration {
  /**
   * @public
   * <p>The ID of the Q topic that you want to make the starting topic in the Q search bar.
   *       You can find a topic ID by navigating to the Topics pane in the Amazon QuickSight application and opening
   *       a topic. The ID is in the URL for the topic that you open.</p>
   *          <p>If you don't specify an initial topic, a list of all shared topics is shown in the Q bar
   *       for your readers. When you select an initial topic, you can specify whether or not readers
   *       are allowed to select other topics from the available ones in the list.</p>
   */
  InitialTopicId?: string;
}

/**
 * @public
 * <p>The feature configurations of an embedded Amazon QuickSight console.</p>
 */
export interface RegisteredUserConsoleFeatureConfigurations {
  /**
   * @public
   * <p>The state persistence configurations of an embedded Amazon QuickSight console.</p>
   */
  StatePersistence?: StatePersistenceConfigurations;
}

/**
 * @public
 * <p>Information about the Amazon QuickSight console that you want to embed.</p>
 */
export interface RegisteredUserQuickSightConsoleEmbeddingConfiguration {
  /**
   * @public
   * <p>The initial URL path for the Amazon QuickSight console. <code>InitialPath</code> is required.</p>
   *          <p>The entry point URL is constrained to the following paths:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>/start</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/start/analyses</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/start/dashboards</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/start/favorites</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/dashboards/DashboardId</code>. <i>DashboardId</i> is the actual ID key from the Amazon QuickSight console URL of the dashboard.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/analyses/AnalysisId</code>. <i>AnalysisId</i> is the actual ID key from the Amazon QuickSight console URL of the analysis.</p>
   *             </li>
   *          </ul>
   */
  InitialPath?: string;

  /**
   * @public
   * <p>The embedding configuration of an embedded Amazon QuickSight console.</p>
   */
  FeatureConfigurations?: RegisteredUserConsoleFeatureConfigurations;
}

/**
 * @public
 * <p>The type of experience you want to embed. For registered users, you can embed Amazon QuickSight dashboards or the Amazon QuickSight console.</p>
 *          <note>
 *             <p>Exactly one of the experience configurations is required. You can choose
 *                     <code>Dashboard</code> or <code>QuickSightConsole</code>. You cannot choose more
 *                 than one experience configuration.</p>
 *          </note>
 */
export interface RegisteredUserEmbeddingExperienceConfiguration {
  /**
   * @public
   * <p>The configuration details for providing a dashboard embedding experience.</p>
   */
  Dashboard?: RegisteredUserDashboardEmbeddingConfiguration;

  /**
   * @public
   * <p>The configuration details for providing each Amazon QuickSight console embedding experience. This can be used along with custom permissions to restrict access to certain features. For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/customizing-permissions-to-the-quicksight-console.html">Customizing Access to the Amazon QuickSight Console</a> in the <i>Amazon QuickSight User
   *             Guide</i>.</p>
   *          <p>Use <code>
   *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_GenerateEmbedUrlForRegisteredUser.html">GenerateEmbedUrlForRegisteredUser</a>
   *             </code>
   *             where
   *             you want to provide an authoring portal that allows users to create data sources,
   *             datasets, analyses, and dashboards. The users who accesses an embedded Amazon QuickSight console
   *             needs to belong to the author or admin security cohort. If you want to restrict permissions
   *             to some of these features, add a custom permissions profile to the user with the
   *             <code>
   *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateUser.html">UpdateUser</a>
   *             </code> API operation. Use the <code>
   *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_RegisterUser.html">RegisterUser</a>
   *             </code> API operation to add a new user with a custom permission profile attached. For more
   *             information, see the following sections in the <i>Amazon QuickSight User
   *             Guide</i>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/quicksight/latest/user/embedded-analytics-full-console-for-authenticated-users.html">Embedding the Full Functionality of the Amazon QuickSight Console for Authenticated Users</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/quicksight/latest/user/customizing-permissions-to-the-quicksight-console.html">Customizing Access to the Amazon QuickSight Console</a>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information about the high-level steps for embedding and for an interactive demo of the ways you can customize embedding, visit the <a href="https://docs.aws.amazon.com/quicksight/latest/user/quicksight-dev-portal.html">Amazon QuickSight Developer Portal</a>.</p>
   */
  QuickSightConsole?: RegisteredUserQuickSightConsoleEmbeddingConfiguration;

  /**
   * @public
   * <p>The configuration details for embedding the Q search bar.</p>
   *          <p>For more information about embedding the Q search bar, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/embedding-overview.html">Embedding Overview</a> in
   *             the <i>Amazon QuickSight User Guide</i>.</p>
   */
  QSearchBar?: RegisteredUserQSearchBarEmbeddingConfiguration;

  /**
   * @public
   * <p>The type of embedding experience. In this case, Amazon QuickSight visuals.</p>
   */
  DashboardVisual?: RegisteredUserDashboardVisualEmbeddingConfiguration;
}

/**
 * @public
 */
export interface GenerateEmbedUrlForRegisteredUserRequest {
  /**
   * @public
   * <p>The ID for the Amazon Web Services account that contains the dashboard that you're embedding.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>How many minutes the session is valid. The session lifetime must be in [15-600] minutes range.</p>
   */
  SessionLifetimeInMinutes?: number;

  /**
   * @public
   * <p>The Amazon Resource Name for the registered user.</p>
   */
  UserArn: string | undefined;

  /**
   * @public
   * <p>The experience you are embedding. For registered users, you can embed Amazon QuickSight dashboards, Amazon QuickSight visuals, the Amazon QuickSight Q search bar, or the entire Amazon QuickSight console.</p>
   */
  ExperienceConfiguration: RegisteredUserEmbeddingExperienceConfiguration | undefined;

  /**
   * @public
   * <p>The domains that you want to add to the allow list for access to the generated URL that
   *           is then embedded. This optional parameter overrides the static domains that are
   *           configured in the Manage QuickSight menu in the Amazon QuickSight console. Instead, it
   *           allows only the domains that you include in this parameter. You can list up to three
   *           domains or subdomains in each API call.</p>
   *          <p>To include all subdomains under a specific domain to the allow list, use <code>*</code>.
   *             For example, <code>https://*.sapp.amazon.com</code> includes all subdomains under
   *             <code>https://sapp.amazon.com</code>.</p>
   */
  AllowedDomains?: string[];
}

/**
 * @public
 */
export interface GenerateEmbedUrlForRegisteredUserResponse {
  /**
   * @public
   * <p>The embed URL for the Amazon QuickSight dashboard, visual, Q search bar, or console.</p>
   */
  EmbedUrl: string | undefined;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status: number | undefined;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId: string | undefined;
}

/**
 * @public
 * <p>The user with the provided name isn't found. This error can happen in any operation
 * 			that requires finding a user based on a provided user name, such as
 * 				<code>DeleteUser</code>, <code>DescribeUser</code>, and so on.</p>
 */
export class QuickSightUserNotFoundException extends __BaseException {
  readonly name: "QuickSightUserNotFoundException" = "QuickSightUserNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @public
   * <p>The Amazon Web Services request ID for this request.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<QuickSightUserNotFoundException, __BaseException>) {
    super({
      name: "QuickSightUserNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, QuickSightUserNotFoundException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * @public
 */
export interface GetDashboardEmbedUrlRequest {
  /**
   * @public
   * <p>The ID for the Amazon Web Services account that contains the dashboard that you're embedding.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the dashboard, also added to the Identity and Access Management (IAM)
   *             policy.</p>
   */
  DashboardId: string | undefined;

  /**
   * @public
   * <p>The authentication method that the user uses to sign in.</p>
   */
  IdentityType: EmbeddingIdentityType | string | undefined;

  /**
   * @public
   * <p>How many minutes the session is valid. The session lifetime must be 15-600 minutes.</p>
   */
  SessionLifetimeInMinutes?: number;

  /**
   * @public
   * <p>Remove the undo/redo button on the embedded dashboard. The default is FALSE, which enables
   * 			the undo/redo button.</p>
   */
  UndoRedoDisabled?: boolean;

  /**
   * @public
   * <p>Remove the reset button on the embedded dashboard. The default is FALSE, which enables the
   * 			reset button.</p>
   */
  ResetDisabled?: boolean;

  /**
   * @public
   * <p>Adds persistence of state for the user session in an embedded dashboard. Persistence
   *             applies to the sheet and the parameter settings. These are control settings that the
   *             dashboard subscriber (Amazon QuickSight reader) chooses while viewing the dashboard. If this is
   *             set to <code>TRUE</code>, the settings are the same when the subscriber reopens the same
   *             dashboard URL. The state is stored in Amazon QuickSight, not in a browser cookie. If this is
   *             set to FALSE, the state of the user session is not persisted. The default is
   *                 <code>FALSE</code>.</p>
   */
  StatePersistenceEnabled?: boolean;

  /**
   * @public
   * <p>The Amazon QuickSight user's Amazon Resource Name (ARN), for use with <code>QUICKSIGHT</code> identity type.
   * 			You can use this for any Amazon QuickSight users in your account (readers, authors, or
   * 			admins) authenticated as one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Active Directory (AD) users or group members</p>
   *             </li>
   *             <li>
   *                <p>Invited nonfederated users</p>
   *             </li>
   *             <li>
   *                <p>IAM users and IAM role-based sessions authenticated through Federated Single Sign-On using
   * 					SAML, OpenID Connect, or IAM federation.</p>
   *             </li>
   *          </ul>
   *          <p>Omit this parameter for users in the third group – IAM users and IAM
   *             role-based sessions.</p>
   */
  UserArn?: string;

  /**
   * @public
   * <p>The Amazon QuickSight namespace that contains the dashboard IDs in this request.
   *     	   If you're not using a custom namespace, set <code>Namespace = default</code>.</p>
   */
  Namespace?: string;

  /**
   * @public
   * <p>A list of one or more dashboard IDs that you want anonymous users to have tempporary access to. Currently, the <code>IdentityType</code> parameter must be set to <code>ANONYMOUS</code> because other identity types authenticate as Amazon QuickSight or IAM users. For example, if you set "<code>--dashboard-id dash_id1 --dashboard-id dash_id2 dash_id3 identity-type ANONYMOUS</code>", the session can access all three dashboards.</p>
   */
  AdditionalDashboardIds?: string[];
}

/**
 * @public
 * <p>Output returned from the <code>GetDashboardEmbedUrl</code> operation.</p>
 */
export interface GetDashboardEmbedUrlResponse {
  /**
   * @public
   * <p>A single-use URL that you can put into your server-side webpage to embed your
   * 			dashboard. This URL is valid for 5 minutes. The API operation provides the URL with an
   * 			<code>auth_code</code> value that enables one (and only one) sign-on to a user session
   * 			that is valid for 10 hours. </p>
   */
  EmbedUrl?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 * <p>The identity type specified isn't supported. Supported identity types include
 * 				<code>IAM</code> and <code>QUICKSIGHT</code>.</p>
 */
export class IdentityTypeNotSupportedException extends __BaseException {
  readonly name: "IdentityTypeNotSupportedException" = "IdentityTypeNotSupportedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @public
   * <p>The Amazon Web Services request ID for this request.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IdentityTypeNotSupportedException, __BaseException>) {
    super({
      name: "IdentityTypeNotSupportedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IdentityTypeNotSupportedException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * @public
 */
export interface GetSessionEmbedUrlRequest {
  /**
   * @public
   * <p>The ID for the Amazon Web Services account associated with your Amazon QuickSight subscription.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The URL you use to access the embedded session. The entry point URL is constrained to
   *           the following paths:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>/start</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/start/analyses</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/start/dashboards</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/start/favorites</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/dashboards/<i>DashboardId</i>
   *                   </code> - where <code>DashboardId</code> is the actual ID key from the Amazon QuickSight console URL of the dashboard</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/analyses/<i>AnalysisId</i>
   *                   </code> - where <code>AnalysisId</code> is the actual ID key from the Amazon QuickSight console URL of the analysis</p>
   *             </li>
   *          </ul>
   */
  EntryPoint?: string;

  /**
   * @public
   * <p>How many minutes the session is valid. The session lifetime must be 15-600 minutes.</p>
   */
  SessionLifetimeInMinutes?: number;

  /**
   * @public
   * <p>The Amazon QuickSight user's Amazon Resource Name (ARN), for use with <code>QUICKSIGHT</code> identity type.
   * 			You can use this for any type of Amazon QuickSight users in your account (readers, authors, or
   * 			admins). They need to be authenticated as one of the following:</p>
   *          <ol>
   *             <li>
   *                <p>Active Directory (AD) users or group members</p>
   *             </li>
   *             <li>
   *                <p>Invited nonfederated users</p>
   *             </li>
   *             <li>
   *                <p>IAM users and IAM role-based sessions authenticated
   *                     through Federated Single Sign-On using SAML, OpenID Connect, or IAM
   *                     federation</p>
   *             </li>
   *          </ol>
   *          <p>Omit this parameter for users in the third group, IAM users and IAM role-based
   *             sessions.</p>
   */
  UserArn?: string;
}

/**
 * @public
 */
export interface GetSessionEmbedUrlResponse {
  /**
   * @public
   * <p>A single-use URL that you can put into your server-side web page to embed your
   * 			Amazon QuickSight session. This URL is valid for 5 minutes. The API operation provides the URL with an
   * 			<code>auth_code</code> value that enables one (and only one) sign-on to a user session
   * 			that is valid for 10 hours. </p>
   */
  EmbedUrl?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 * @enum
 */
export const GroupFilterAttribute = {
  GROUP_NAME: "GROUP_NAME",
} as const;

/**
 * @public
 */
export type GroupFilterAttribute = (typeof GroupFilterAttribute)[keyof typeof GroupFilterAttribute];

/**
 * @public
 * @enum
 */
export const GroupFilterOperator = {
  StartsWith: "StartsWith",
} as const;

/**
 * @public
 */
export type GroupFilterOperator = (typeof GroupFilterOperator)[keyof typeof GroupFilterOperator];

/**
 * @public
 * <p>A <code>GroupSearchFilter</code> object that you want to apply to your search.</p>
 */
export interface GroupSearchFilter {
  /**
   * @public
   * <p>The comparison operator that you want to use as a filter, for example <code>"Operator":
   *                 "StartsWith"</code>. Currently, the only supported operator is
   *                 <code>StartsWith</code>.</p>
   */
  Operator: GroupFilterOperator | string | undefined;

  /**
   * @public
   * <p>The name of the value that you want to use as a filter, for example <code>"Name":
   *                 "GROUP_NAME"</code>. Currently, the only supported name is
   *             <code>GROUP_NAME</code>.</p>
   */
  Name: GroupFilterAttribute | string | undefined;

  /**
   * @public
   * <p>The value of the named item, in this case <code>GROUP_NAME</code>, that you want to use as a filter.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 * <p>IAM policy assignment summary.</p>
 */
export interface IAMPolicyAssignmentSummary {
  /**
   * @public
   * <p>Assignment name.</p>
   */
  AssignmentName?: string;

  /**
   * @public
   * <p>Assignment status.</p>
   */
  AssignmentStatus?: AssignmentStatus | string;
}

/**
 * @public
 * <p>You don't have this feature activated for your account. To fix this issue, contact Amazon Web Services support.</p>
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @public
   * <p>The Amazon Web Services request ID for this request.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * @public
 */
export interface ListAnalysesRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the analyses.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListAnalysesResponse {
  /**
   * @public
   * <p>Metadata describing each of the analyses that are listed.</p>
   */
  AnalysisSummaryList?: AnalysisSummary[];

  /**
   * @public
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface ListAssetBundleExportJobsRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that the export jobs were executed in. </p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListAssetBundleExportJobsResponse {
  /**
   * @public
   * <p>A list of export job summaries.</p>
   */
  AssetBundleExportJobSummaryList?: AssetBundleExportJobSummary[];

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface ListAssetBundleImportJobsRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that the import jobs were executed in.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListAssetBundleImportJobsResponse {
  /**
   * @public
   * <p>A list of import job summaries.</p>
   */
  AssetBundleImportJobSummaryList?: AssetBundleImportJobSummary[];

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the response.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface ListDashboardsRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the dashboards that you're
   *             listing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListDashboardsResponse {
  /**
   * @public
   * <p>A structure that contains all of the dashboards in your Amazon Web Services account. This structure
   *             provides basic information about the dashboards.</p>
   */
  DashboardSummaryList?: DashboardSummary[];

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface ListDashboardVersionsRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the dashboard that you're listing versions
   *             for.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the dashboard.</p>
   */
  DashboardId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListDashboardVersionsResponse {
  /**
   * @public
   * <p>A structure that contains information about each version of the dashboard.</p>
   */
  DashboardVersionSummaryList?: DashboardVersionSummary[];

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface ListDataSetsRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListDataSetsResponse {
  /**
   * @public
   * <p>The list of dataset summaries.</p>
   */
  DataSetSummaries?: DataSetSummary[];

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface ListDataSourcesRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListDataSourcesResponse {
  /**
   * @public
   * <p>A list of data sources.</p>
   */
  DataSources?: DataSource[];

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface ListFolderMembersRequest {
  /**
   * @public
   * <p>The ID for the Amazon Web Services account that contains the folder.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the folder.</p>
   */
  FolderId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListFolderMembersResponse {
  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>A structure that contains all of the folder members (dashboards, analyses, and datasets) in the folder.</p>
   */
  FolderMemberList?: MemberIdArnPair[];

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface ListFoldersRequest {
  /**
   * @public
   * <p>The ID for the Amazon Web Services account that contains the folder.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListFoldersResponse {
  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>A structure that contains all of the folders in the Amazon Web Services account. This structure provides basic information about the folders.</p>
   */
  FolderSummaryList?: FolderSummary[];

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface ListGroupMembershipsRequest {
  /**
   * @public
   * <p>The name of the group that you want to see a membership list of.</p>
   */
  GroupName: string | undefined;

  /**
   * @public
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return from this request.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the
   * 			Amazon Web Services account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The namespace of the group that you want a list of users from.</p>
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface ListGroupMembershipsResponse {
  /**
   * @public
   * <p>The list of the members of the group.</p>
   */
  GroupMemberList?: GroupMember[];

  /**
   * @public
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface ListGroupsRequest {
  /**
   * @public
   * <p>The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the
   * 			Amazon Web Services account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The namespace that you want a list of groups from.</p>
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface ListGroupsResponse {
  /**
   * @public
   * <p>The list of the groups.</p>
   */
  GroupList?: Group[];

  /**
   * @public
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface ListIAMPolicyAssignmentsRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains these IAM policy
   * 			assignments.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The status of the assignments.</p>
   */
  AssignmentStatus?: AssignmentStatus | string;

  /**
   * @public
   * <p>The namespace for the assignments.</p>
   */
  Namespace: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListIAMPolicyAssignmentsResponse {
  /**
   * @public
   * <p>Information describing the IAM policy assignments.</p>
   */
  IAMPolicyAssignments?: IAMPolicyAssignmentSummary[];

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface ListIAMPolicyAssignmentsForUserRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the assignments.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The name of the user.</p>
   */
  UserName: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The namespace of the assignment.</p>
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface ListIAMPolicyAssignmentsForUserResponse {
  /**
   * @public
   * <p>The active assignments for this user.</p>
   */
  ActiveAssignments?: ActiveIAMPolicyAssignment[];

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface ListIngestionsRequest {
  /**
   * @public
   * <p>The ID of the dataset used in the ingestion.</p>
   */
  DataSetId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListIngestionsResponse {
  /**
   * @public
   * <p>A list of the ingestions.</p>
   */
  Ingestions?: Ingestion[];

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface ListNamespacesRequest {
  /**
   * @public
   * <p>The ID for the Amazon Web Services account that contains the Amazon QuickSight namespaces that you want to list.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>A unique pagination token that can be used in a subsequent request. You will receive a pagination token in the response body of a previous <code>ListNameSpaces</code> API call if there is more data that can be returned. To receive the data, make another <code>ListNamespaces</code> API call with the returned token to retrieve the next page of data. Each token is valid for 24 hours. If you try to make a <code>ListNamespaces</code> API call with an expired token, you will receive a <code>HTTP 400 InvalidNextTokenException</code> error.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListNamespacesResponse {
  /**
   * @public
   * <p>The information about the namespaces in this Amazon Web Services account. The response includes
   *         the namespace ARN, name, Amazon Web Services Region, notification email address, creation status, and
   *         identity store.</p>
   */
  Namespaces?: NamespaceInfoV2[];

  /**
   * @public
   * <p>A unique pagination token that can be used in a subsequent request. Receiving <code>NextToken</code> in your response inticates that there is more data that can be returned. To receive the data, make another <code>ListNamespaces</code> API call with the returned token to retrieve the next page of data. Each token is valid for 24 hours. If you try to make a <code>ListNamespaces</code> API call with an expired token, you will receive a <code>HTTP 400 InvalidNextTokenException</code> error.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface ListRefreshSchedulesRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the dataset.</p>
   */
  DataSetId: string | undefined;
}

/**
 * @public
 */
export interface ListRefreshSchedulesResponse {
  /**
   * @public
   * <p>The list of refresh schedules for the dataset.</p>
   */
  RefreshSchedules?: RefreshSchedule[];

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource that you want a list of tags for.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the
   * 			resource.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface ListTemplateAliasesRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the template aliases that you're listing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the template.</p>
   */
  TemplateId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListTemplateAliasesResponse {
  /**
   * @public
   * <p>A structure containing the list of the template's aliases.</p>
   */
  TemplateAliasList?: TemplateAlias[];

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTemplatesRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the templates that you're listing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>The template summary.</p>
 */
export interface TemplateSummary {
  /**
   * @public
   * <p>A summary of a template.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The ID of the template. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  TemplateId?: string;

  /**
   * @public
   * <p>A display name for the template.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A structure containing a list of version numbers for the template summary.</p>
   */
  LatestVersionNumber?: number;

  /**
   * @public
   * <p>The last time that this template was created.</p>
   */
  CreatedTime?: Date;

  /**
   * @public
   * <p>The last time that this template was updated.</p>
   */
  LastUpdatedTime?: Date;
}

/**
 * @public
 */
export interface ListTemplatesResponse {
  /**
   * @public
   * <p>A structure containing information about the templates in the list.</p>
   */
  TemplateSummaryList?: TemplateSummary[];

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface ListTemplateVersionsRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the templates that you're listing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the template.</p>
   */
  TemplateId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>The template version.</p>
 */
export interface TemplateVersionSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the template version.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The version number of the template version.</p>
   */
  VersionNumber?: number;

  /**
   * @public
   * <p>The time that this template version was created.</p>
   */
  CreatedTime?: Date;

  /**
   * @public
   * <p>The status of the template version.</p>
   */
  Status?: ResourceStatus | string;

  /**
   * @public
   * <p>The description of the template version.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface ListTemplateVersionsResponse {
  /**
   * @public
   * <p>A structure containing a list of all the versions of the specified template.</p>
   */
  TemplateVersionSummaryList?: TemplateVersionSummary[];

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface ListThemeAliasesRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the theme aliases that you're listing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the theme.</p>
   */
  ThemeId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListThemeAliasesResponse {
  /**
   * @public
   * <p>A structure containing the list of the theme's aliases.</p>
   */
  ThemeAliasList?: ThemeAlias[];

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListThemesRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the themes that you're listing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The type of themes that you want to list. Valid options include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALL (default)</code>- Display all existing themes.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CUSTOM</code> - Display only the themes created by people using Amazon QuickSight.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>QUICKSIGHT</code> - Display only the starting themes defined by Amazon QuickSight.</p>
   *             </li>
   *          </ul>
   */
  Type?: ThemeType | string;
}

/**
 * @public
 * <p>The theme summary.</p>
 */
export interface ThemeSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>the display name for the theme.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The ID of the theme. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  ThemeId?: string;

  /**
   * @public
   * <p>The latest version number for the theme. </p>
   */
  LatestVersionNumber?: number;

  /**
   * @public
   * <p>The date and time that this theme was created.</p>
   */
  CreatedTime?: Date;

  /**
   * @public
   * <p>The last date and time that this theme was updated.</p>
   */
  LastUpdatedTime?: Date;
}

/**
 * @public
 */
export interface ListThemesResponse {
  /**
   * @public
   * <p>Information about the themes in the list.</p>
   */
  ThemeSummaryList?: ThemeSummary[];

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface ListThemeVersionsRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the themes that you're listing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the theme.</p>
   */
  ThemeId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>The theme version.</p>
 */
export interface ThemeVersionSummary {
  /**
   * @public
   * <p>The version number of the theme version.</p>
   */
  VersionNumber?: number;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the theme version.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The description of the theme version.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The date and time that this theme version was created.</p>
   */
  CreatedTime?: Date;

  /**
   * @public
   * <p>The status of the theme version.</p>
   */
  Status?: ResourceStatus | string;
}

/**
 * @public
 */
export interface ListThemeVersionsResponse {
  /**
   * @public
   * <p>A structure containing a list of all the versions of the specified theme.</p>
   */
  ThemeVersionSummaryList?: ThemeVersionSummary[];

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface ListTopicRefreshSchedulesRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the topic whose refresh schedule
   *          you want described.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the topic that you want to describe. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  TopicId: string | undefined;
}

/**
 * @public
 * <p>A summary of the refresh schedule details for a dataset.</p>
 */
export interface TopicRefreshScheduleSummary {
  /**
   * @public
   * <p>The ID of the dataset.</p>
   */
  DatasetId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   */
  DatasetArn?: string;

  /**
   * @public
   * <p>The name of the dataset.</p>
   */
  DatasetName?: string;

  /**
   * @public
   * <p>The definition of a refresh schedule.</p>
   */
  RefreshSchedule?: TopicRefreshSchedule;
}

/**
 * @public
 */
export interface ListTopicRefreshSchedulesResponse {
  /**
   * @public
   * <p>The ID for the topic that you want to describe. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  TopicId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the topic.</p>
   */
  TopicArn?: string;

  /**
   * @public
   * <p>The list of topic refresh schedules.</p>
   */
  RefreshSchedules?: TopicRefreshScheduleSummary[];

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface ListTopicsRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the topics that you want to
   *          list.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>A topic summary.</p>
 */
export interface TopicSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the topic.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The ID for the topic. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  TopicId?: string;

  /**
   * @public
   * <p>The name of the topic.</p>
   */
  Name?: string;
}

/**
 * @public
 */
export interface ListTopicsResponse {
  /**
   * @public
   * <p>A list of topic summaries.</p>
   */
  TopicsSummaries?: TopicSummary[];

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface ListUserGroupsRequest {
  /**
   * @public
   * <p>The Amazon QuickSight user name that you want to list group memberships for.</p>
   */
  UserName: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services account ID that the user is in. Currently, you use the ID for the Amazon Web Services account
   * 			that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   */
  Namespace: string | undefined;

  /**
   * @public
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return from this request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListUserGroupsResponse {
  /**
   * @public
   * <p>The list of groups the user is a member of.</p>
   */
  GroupList?: Group[];

  /**
   * @public
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface ListUsersRequest {
  /**
   * @public
   * <p>The ID for the Amazon Web Services account that the user is in. Currently, you use the ID for the
   * 			Amazon Web Services account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return from this request.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface ListUsersResponse {
  /**
   * @public
   * <p>The list of users.</p>
   */
  UserList?: User[];

  /**
   * @public
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface ListVPCConnectionsRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID of the account that contains the VPC connections
   * 			that you want to list.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>The summary metadata that describes a VPC connection.</p>
 */
export interface VPCConnectionSummary {
  /**
   * @public
   * <p>The ID of the VPC connection that
   *             you're
   *             creating. This ID is a unique identifier for each Amazon Web Services Region in an
   *                 Amazon Web Services account.</p>
   */
  VPCConnectionId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the VPC connection.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The display name for the VPC connection.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The Amazon EC2 VPC ID associated with the VPC connection.</p>
   */
  VPCId?: string;

  /**
   * @public
   * <p>The Amazon EC2 security group IDs associated with the VPC connection.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * @public
   * <p>A list of IP addresses of DNS resolver endpoints for the VPC connection.</p>
   */
  DnsResolvers?: string[];

  /**
   * @public
   * <p>The status of the VPC connection.</p>
   */
  Status?: VPCConnectionResourceStatus | string;

  /**
   * @public
   * <p>The availability status of the VPC connection.</p>
   */
  AvailabilityStatus?: VPCConnectionAvailabilityStatus | string;

  /**
   * @public
   * <p>A list of network interfaces.</p>
   */
  NetworkInterfaces?: NetworkInterface[];

  /**
   * @public
   * <p>The ARN of the IAM role associated
   *             with the VPC connection.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>The time that the VPC connection was created.</p>
   */
  CreatedTime?: Date;

  /**
   * @public
   * <p>The time that the VPC connection was last updated.</p>
   */
  LastUpdatedTime?: Date;
}

/**
 * @public
 */
export interface ListVPCConnectionsResponse {
  /**
   * @public
   * <p>A <code>VPCConnectionSummaries</code> object that returns a summary of VPC connection
   * 			objects.</p>
   */
  VPCConnectionSummaries?: VPCConnectionSummary[];

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more
   * 			results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface PutDataSetRefreshPropertiesRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the dataset.</p>
   */
  DataSetId: string | undefined;

  /**
   * @public
   * <p>The dataset refresh properties.</p>
   */
  DataSetRefreshProperties: DataSetRefreshProperties | undefined;
}

/**
 * @public
 */
export interface PutDataSetRefreshPropertiesResponse {
  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface RegisterUserRequest {
  /**
   * @public
   * <p>Amazon QuickSight supports several ways of managing the identity of users. This
   * 			parameter accepts two values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>IAM</code>: A user whose identity maps to an existing IAM user or role.
   * 				</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>QUICKSIGHT</code>: A user whose identity is owned and managed internally by
   * 					Amazon QuickSight. </p>
   *             </li>
   *          </ul>
   */
  IdentityType: IdentityType | string | undefined;

  /**
   * @public
   * <p>The email address of the user that you want to register.</p>
   */
  Email: string | undefined;

  /**
   * @public
   * <p>The Amazon QuickSight role for the user. The user role can be one of the
   * 			following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>READER</code>: A user who has read-only access to dashboards.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AUTHOR</code>: A user who can create data sources, datasets, analyses, and
   * 					dashboards.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ADMIN</code>: A user who is an author, who can also manage Amazon QuickSight
   * 					settings.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESTRICTED_READER</code>: This role isn't currently available for
   * 					use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESTRICTED_AUTHOR</code>: This role isn't currently available for
   * 					use.</p>
   *             </li>
   *          </ul>
   */
  UserRole: UserRole | string | undefined;

  /**
   * @public
   * <p>The ARN of the IAM user or role that you are registering with Amazon QuickSight. </p>
   */
  IamArn?: string;

  /**
   * @public
   * <p>You need to use this parameter only when you register one or more users using an assumed
   * 			IAM role. You don't need to provide the session name for other scenarios, for example when
   * 			you are registering an IAM user or an Amazon QuickSight user. You can register multiple
   * 			users using the same IAM role if each user has a different session name. For more
   * 			information on assuming IAM roles, see <a href="https://docs.aws.amazon.com/cli/latest/reference/sts/assume-role.html">
   *                <code>assume-role</code>
   *             </a> in the <i>CLI Reference.</i>
   *          </p>
   */
  SessionName?: string;

  /**
   * @public
   * <p>The ID for the Amazon Web Services account that the user is in. Currently, you use the ID for the
   * 			Amazon Web Services account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   */
  Namespace: string | undefined;

  /**
   * @public
   * <p>The Amazon QuickSight user name that you want to create for the user you are
   * 			registering.</p>
   */
  UserName?: string;

  /**
   * @public
   * <p>(Enterprise edition only) The name of the custom permissions profile that you want to
   *             assign to this user. Customized permissions allows you to control a user's access by
   *             restricting access the following operations:</p>
   *          <ul>
   *             <li>
   *                <p>Create and update data sources</p>
   *             </li>
   *             <li>
   *                <p>Create and update datasets</p>
   *             </li>
   *             <li>
   *                <p>Create and update email reports</p>
   *             </li>
   *             <li>
   *                <p>Subscribe to email reports</p>
   *             </li>
   *          </ul>
   *          <p>To add custom permissions to an existing user, use <code>
   *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateUser.html">UpdateUser</a>
   *             </code> instead.</p>
   *          <p>A set of custom permissions includes any combination of these restrictions. Currently,
   *             you need to create the profile names for custom permission sets by using the Amazon QuickSight
   *             console. Then, you use the <code>RegisterUser</code> API operation to assign the named set of
   *             permissions to a Amazon QuickSight user. </p>
   *          <p>Amazon QuickSight custom permissions are applied through IAM policies. Therefore, they
   *             override the permissions typically granted by assigning Amazon QuickSight users to one of the
   *             default security cohorts in Amazon QuickSight (admin, author, reader).</p>
   *          <p>This feature is available only to Amazon QuickSight Enterprise edition subscriptions.</p>
   */
  CustomPermissionsName?: string;

  /**
   * @public
   * <p>The type of supported external login provider that provides identity to let a user federate into Amazon QuickSight with an associated Identity and Access Management(IAM) role. The type of supported external login provider can be one of the following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>COGNITO</code>: Amazon Cognito. The provider URL is cognito-identity.amazonaws.com. When choosing the <code>COGNITO</code> provider type, don’t use the "CustomFederationProviderUrl" parameter which is only needed when the external provider is custom.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CUSTOM_OIDC</code>: Custom OpenID Connect (OIDC) provider. When choosing <code>CUSTOM_OIDC</code> type, use the <code>CustomFederationProviderUrl</code> parameter to provide the custom OIDC provider URL.</p>
   *             </li>
   *          </ul>
   */
  ExternalLoginFederationProviderType?: string;

  /**
   * @public
   * <p>The URL of the custom OpenID Connect (OIDC) provider that provides identity to let a user federate
   *          into Amazon QuickSight with an associated Identity and Access Management(IAM) role. This parameter should
   *          only be used when <code>ExternalLoginFederationProviderType</code> parameter is set to <code>CUSTOM_OIDC</code>.</p>
   */
  CustomFederationProviderUrl?: string;

  /**
   * @public
   * <p>The identity ID for a user in the external login provider.</p>
   */
  ExternalLoginId?: string;
}

/**
 * @public
 */
export interface RegisterUserResponse {
  /**
   * @public
   * <p>The user's user name.</p>
   */
  User?: User;

  /**
   * @public
   * <p>The URL the user visits to complete registration and provide a password. This is
   * 			returned only for users with an identity type of <code>QUICKSIGHT</code>.</p>
   */
  UserInvitationUrl?: string;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface RestoreAnalysisRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the analysis.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the analysis that you're restoring.</p>
   */
  AnalysisId: string | undefined;
}

/**
 * @public
 */
export interface RestoreAnalysisResponse {
  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the analysis that you're restoring.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The ID of the analysis that you're restoring.
   *         </p>
   */
  AnalysisId?: string;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface SearchAnalysesRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the analyses that you're searching
   *             for.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The structure for the search filters that you want to apply to your search. </p>
   */
  Filters: AnalysisSearchFilter[] | undefined;

  /**
   * @public
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface SearchAnalysesResponse {
  /**
   * @public
   * <p>Metadata describing the analyses that you searched for.</p>
   */
  AnalysisSummaryList?: AnalysisSummary[];

  /**
   * @public
   * <p>A pagination token that can be used in a subsequent request.
   *             </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface SearchDashboardsRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the user whose dashboards you're searching
   *             for. </p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The filters to apply to the search. Currently, you can search only by user name, for
   *             example, <code>"Filters": [ \{ "Name": "QUICKSIGHT_USER", "Operator": "StringEquals",
   *             "Value": "arn:aws:quicksight:us-east-1:1:user/default/UserName1" \} ]</code>
   *          </p>
   */
  Filters: DashboardSearchFilter[] | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface SearchDashboardsResponse {
  /**
   * @public
   * <p>The list of dashboards owned by the user specified in <code>Filters</code> in your
   *             request.</p>
   */
  DashboardSummaryList?: DashboardSummary[];

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface SearchDataSetsRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The filters to apply to the search.</p>
   */
  Filters: DataSetSearchFilter[] | undefined;

  /**
   * @public
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface SearchDataSetsResponse {
  /**
   * @public
   * <p>A <code>DataSetSummaries</code> object that returns a summary of a dataset.</p>
   */
  DataSetSummaries?: DataSetSummary[];

  /**
   * @public
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface SearchDataSourcesRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The filters to apply to the search.</p>
   */
  Filters: DataSourceSearchFilter[] | undefined;

  /**
   * @public
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface SearchDataSourcesResponse {
  /**
   * @public
   * <p>A <code>DataSourceSummaries</code> object that returns a summary of a data source.</p>
   */
  DataSourceSummaries?: DataSourceSummary[];

  /**
   * @public
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface SearchFoldersRequest {
  /**
   * @public
   * <p>The ID for the Amazon Web Services account that contains the folder.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The filters to apply to the search. Currently, you can search only by the parent folder ARN. For example, <code>"Filters": [ \{ "Name": "PARENT_FOLDER_ARN", "Operator": "StringEquals", "Value": "arn:aws:quicksight:us-east-1:1:folder/folderId" \} ]</code>.</p>
   */
  Filters: FolderSearchFilter[] | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface SearchFoldersResponse {
  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>A structure that contains all of the folders in the Amazon Web Services account. This structure provides basic information about the folders.</p>
   */
  FolderSummaryList?: FolderSummary[];

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface SearchGroupsRequest {
  /**
   * @public
   * <p>The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the
   *           Amazon Web Services account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return from this request.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The namespace that you want to search.</p>
   */
  Namespace: string | undefined;

  /**
   * @public
   * <p>The structure for the search filters that you want to apply to your search.</p>
   */
  Filters: GroupSearchFilter[] | undefined;
}

/**
 * @public
 */
export interface SearchGroupsResponse {
  /**
   * @public
   * <p>A list of groups in a specified namespace that match the filters you set in your <code>SearchGroups</code> request.</p>
   */
  GroupList?: Group[];

  /**
   * @public
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface StartAssetBundleExportJobRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account to export assets from.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the job. This ID is unique while the job is running. After the job is completed, you can reuse this ID for another job.</p>
   */
  AssetBundleExportJobId: string | undefined;

  /**
   * @public
   * <p>An array of resource ARNs to export. The following resources are supported.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Analysis</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Dashboard</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DataSet</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DataSource</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RefreshSchedule</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Theme</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VPCConnection</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>The API caller must have the necessary permissions in their IAM role to access each resource before the resources can be exported.</p>
   */
  ResourceArns: string[] | undefined;

  /**
   * @public
   * <p>A Boolean that determines whether all dependencies of each resource ARN are recursively
   *          exported with the job. For example, say you provided a Dashboard ARN to the
   *             <code>ResourceArns</code> parameter. If you set <code>IncludeAllDependencies</code> to
   *             <code>TRUE</code>, any theme, dataset, and data source resource that is a dependency of the dashboard is also
   *          exported.</p>
   */
  IncludeAllDependencies?: boolean;

  /**
   * @public
   * <p>The export data format.</p>
   */
  ExportFormat: AssetBundleExportFormat | string | undefined;

  /**
   * @public
   * <p>An optional collection of structures that generate CloudFormation parameters to override the existing resource property values when the resource is exported to a new CloudFormation template.</p>
   *          <p>Use this field if the <code>ExportFormat</code> field of a <code>StartAssetBundleExportJobRequest</code> API call is set to <code>CLOUDFORMATION_JSON</code>.</p>
   */
  CloudFormationOverridePropertyConfiguration?: AssetBundleCloudFormationOverridePropertyConfiguration;
}

/**
 * @public
 */
export interface StartAssetBundleExportJobResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the export job.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The ID of the job. This ID is unique while the job is running. After the job is completed, you can reuse this ID for another job.</p>
   */
  AssetBundleExportJobId?: string;

  /**
   * @public
   * <p>The Amazon Web Services response ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the response.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface StartAssetBundleImportJobRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account to import assets into. </p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the job. This ID is unique while the job is running. After the job is completed, you can reuse this ID for another job.</p>
   */
  AssetBundleImportJobId: string | undefined;

  /**
   * @public
   * <p>The source of the asset bundle zip file that contains the data that you want to import. The file must be in <code>QUICKSIGHT_JSON</code> format.
   *       </p>
   */
  AssetBundleImportSource: AssetBundleImportSource | undefined;

  /**
   * @public
   * <p>Optional overrides to be applied to the resource configuration before import.</p>
   */
  OverrideParameters?: AssetBundleImportJobOverrideParameters;

  /**
   * @public
   * <p>The failure action for the import job.</p>
   *          <p>If you choose <code>ROLLBACK</code>, failed  import jobs will attempt to  undo any asset changes caused by the failed job.</p>
   *          <p>If you choose <code>DO_NOTHING</code>, failed import jobs will not attempt to roll back
   *          any asset changes caused by the failed job, possibly keeping the Amazon QuickSight account in an inconsistent state.</p>
   */
  FailureAction?: AssetBundleImportFailureAction | string;
}

/**
 * @public
 */
export interface StartAssetBundleImportJobResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the import job.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The ID of the job. This ID is unique while the job is running. After the job is completed, you can reuse this ID for another job.</p>
   */
  AssetBundleImportJobId?: string;

  /**
   * @public
   * <p>The Amazon Web Services response ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the response.</p>
   */
  Status?: number;
}

/**
 * @public
 * <p>A structure that contains information on the anonymous user configuration.</p>
 */
export interface SnapshotAnonymousUser {
  /**
   * @public
   * <p>The tags to be used for row-level security (RLS). Make sure that the relevant datasets have RLS tags configured before you start a snapshot export job. You can configure the RLS tags of a dataset with a <code>DataSet$RowLevelPermissionTagConfiguration</code> API call.</p>
   *          <p>These are not the tags that are used for Amazon Web Services resource tagging. For more information on row level security in Amazon QuickSight, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/quicksight-dev-rls-tags.html">Using Row-Level Security (RLS) with Tags</a>in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  RowLevelPermissionTags?: SessionTag[];
}

/**
 * @public
 * <p>A structure that contains information about the users that the dashboard snapshot is generated for.</p>
 */
export interface SnapshotUserConfiguration {
  /**
   * @public
   * <p>An array of records that describe the anonymous users that the dashboard snapshot is generated for.</p>
   */
  AnonymousUsers?: SnapshotAnonymousUser[];
}

/**
 * @public
 */
export interface StartDashboardSnapshotJobRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that the dashboard snapshot job is executed in.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the dashboard that you want to start a snapshot job for.
   *         </p>
   */
  DashboardId: string | undefined;

  /**
   * @public
   * <p>An ID for the dashboard snapshot job. This ID is unique to the dashboard while the job is running. This ID can be used to poll the status of a job with a <code>DescribeDashboardSnapshotJob</code> while the job runs. You can reuse this ID for another job 24 hours after the current job is completed.</p>
   */
  SnapshotJobId: string | undefined;

  /**
   * @public
   * <p>
   *             A structure that contains information about the anonymous users that the generated snapshot is for. This API will not return information about registered Amazon QuickSight.</p>
   */
  UserConfiguration: SnapshotUserConfiguration | undefined;

  /**
   * @public
   * <p>A structure that describes the configuration of the dashboard snapshot.</p>
   */
  SnapshotConfiguration: SnapshotConfiguration | undefined;
}

/**
 * @public
 */
export interface StartDashboardSnapshotJobResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the dashboard snapshot job.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The ID of the job. The job ID is set when you start a new job with a <code>StartDashboardSnapshotJob</code> API call.</p>
   */
  SnapshotJobId?: string;

  /**
   * @public
   * <p>
   *             The Amazon Web Services request ID for this operation.
   *         </p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource that you want to tag.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the resource.</p>
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {
  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource that you want to untag.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The keys of the key-value pairs for the resource tag or tags assigned to the resource.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {
  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface UpdateAccountCustomizationRequest {
  /**
   * @public
   * <p>The ID for the Amazon Web Services account that you want to update Amazon QuickSight customizations
   *             for.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The namespace that you want to update Amazon QuickSight customizations for.</p>
   */
  Namespace?: string;

  /**
   * @public
   * <p>The Amazon QuickSight customizations you're updating in the current Amazon Web Services Region. </p>
   */
  AccountCustomization: AccountCustomization | undefined;
}

/**
 * @public
 */
export interface UpdateAccountCustomizationResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the updated customization for this Amazon Web Services account.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The ID for the Amazon Web Services account that you want to update Amazon QuickSight customizations
   *             for.</p>
   */
  AwsAccountId?: string;

  /**
   * @public
   * <p>The namespace associated with the customization that you're updating.</p>
   */
  Namespace?: string;

  /**
   * @public
   * <p>The Amazon QuickSight customizations you're updating in the current Amazon Web Services Region. </p>
   */
  AccountCustomization?: AccountCustomization;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface UpdateAccountSettingsRequest {
  /**
   * @public
   * <p>The ID for the Amazon Web Services account that contains the Amazon QuickSight settings that you want to
   *             list.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The default namespace for this Amazon Web Services account. Currently, the default is
   *                 <code>default</code>. IAM users that
   *             register for the first time with Amazon QuickSight provide an email address that becomes
   *             associated with the default namespace.
   *         </p>
   */
  DefaultNamespace: string | undefined;

  /**
   * @public
   * <p>The email address that you want Amazon QuickSight to send notifications to regarding your
   *             Amazon Web Services account or Amazon QuickSight subscription.</p>
   */
  NotificationEmail?: string;

  /**
   * @public
   * <p>A boolean value that determines whether or not an Amazon QuickSight account can be deleted. A <code>True</code> value doesn't allow the account to be deleted and results in an error message if a user tries to make a <code>DeleteAccountSubscription</code> request. A <code>False</code> value will allow the account to be deleted.</p>
   */
  TerminationProtectionEnabled?: boolean;
}

/**
 * @internal
 */
export const DescribeAnalysisDefinitionResponseFilterSensitiveLog = (obj: DescribeAnalysisDefinitionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAssetBundleImportJobResponseFilterSensitiveLog = (
  obj: DescribeAssetBundleImportJobResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDashboardDefinitionResponseFilterSensitiveLog = (
  obj: DescribeDashboardDefinitionResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SnapshotConfigurationFilterSensitiveLog = (obj: SnapshotConfiguration): any => ({
  ...obj,
  ...(obj.Parameters && { Parameters: _ParametersFilterSensitiveLog(obj.Parameters) }),
});

/**
 * @internal
 */
export const DescribeDashboardSnapshotJobResponseFilterSensitiveLog = (
  obj: DescribeDashboardSnapshotJobResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SnapshotJobResultFilterSensitiveLog = (obj: SnapshotJobResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDashboardSnapshotJobResultResponseFilterSensitiveLog = (
  obj: DescribeDashboardSnapshotJobResultResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDataSetResponseFilterSensitiveLog = (obj: DescribeDataSetResponse): any => ({
  ...obj,
  ...(obj.DataSet && { DataSet: DataSetFilterSensitiveLog(obj.DataSet) }),
});

/**
 * @internal
 */
export const DescribeTemplateDefinitionResponseFilterSensitiveLog = (obj: DescribeTemplateDefinitionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTopicResponseFilterSensitiveLog = (obj: DescribeTopicResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SessionTagFilterSensitiveLog = (obj: SessionTag): any => ({
  ...obj,
  ...(obj.Value && { Value: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GenerateEmbedUrlForAnonymousUserRequestFilterSensitiveLog = (
  obj: GenerateEmbedUrlForAnonymousUserRequest
): any => ({
  ...obj,
  ...(obj.SessionTags && { SessionTags: obj.SessionTags.map((item) => SessionTagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const GenerateEmbedUrlForAnonymousUserResponseFilterSensitiveLog = (
  obj: GenerateEmbedUrlForAnonymousUserResponse
): any => ({
  ...obj,
  ...(obj.EmbedUrl && { EmbedUrl: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GenerateEmbedUrlForRegisteredUserResponseFilterSensitiveLog = (
  obj: GenerateEmbedUrlForRegisteredUserResponse
): any => ({
  ...obj,
  ...(obj.EmbedUrl && { EmbedUrl: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetDashboardEmbedUrlResponseFilterSensitiveLog = (obj: GetDashboardEmbedUrlResponse): any => ({
  ...obj,
  ...(obj.EmbedUrl && { EmbedUrl: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetSessionEmbedUrlResponseFilterSensitiveLog = (obj: GetSessionEmbedUrlResponse): any => ({
  ...obj,
  ...(obj.EmbedUrl && { EmbedUrl: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StartAssetBundleImportJobRequestFilterSensitiveLog = (obj: StartAssetBundleImportJobRequest): any => ({
  ...obj,
  ...(obj.AssetBundleImportSource && {
    AssetBundleImportSource: AssetBundleImportSourceFilterSensitiveLog(obj.AssetBundleImportSource),
  }),
});

/**
 * @internal
 */
export const SnapshotAnonymousUserFilterSensitiveLog = (obj: SnapshotAnonymousUser): any => ({
  ...obj,
  ...(obj.RowLevelPermissionTags && {
    RowLevelPermissionTags: obj.RowLevelPermissionTags.map((item) => SessionTagFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const SnapshotUserConfigurationFilterSensitiveLog = (obj: SnapshotUserConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartDashboardSnapshotJobRequestFilterSensitiveLog = (obj: StartDashboardSnapshotJobRequest): any => ({
  ...obj,
});
