// smithy-typescript generated code
import { SENSITIVE_STRING } from "@smithy/smithy-client";

import { AccountCustomization, ResourceStatus } from "./models_0";

import { AnalysisDefinition, AnalysisSearchFilter, AnalysisSourceEntity, AnalysisSummary } from "./models_1";

import {
  _Parameters,
  _ParametersFilterSensitiveLog,
  AssetBundleCloudFormationOverridePropertyConfiguration,
  AssetBundleExportFormat,
  AssetBundleExportJobValidationStrategy,
  AssetBundleImportFailureAction,
  AssetBundleImportJobOverrideParameters,
  AssetBundleImportJobOverridePermissions,
  AssetBundleImportJobOverrideTags,
  AssetBundleImportJobOverrideValidationStrategy,
  AssetBundleImportSource,
  AssetBundleImportSourceFilterSensitiveLog,
  AssignmentStatus,
  ColumnGroup,
  ColumnLevelPermissionRule,
  DashboardPublishOptions,
  DashboardSourceEntity,
  DashboardVersionDefinition,
  DataSetImportMode,
  DatasetParameter,
  DataSetUsageConfiguration,
  DataSourceCredentials,
  DataSourceParameters,
  FieldFolder,
  Group,
  LinkSharingConfiguration,
  LogicalTable,
  LogicalTableFilterSensitiveLog,
  PhysicalTable,
  RefreshSchedule,
  ResourcePermission,
  Role,
  RowLevelPermissionDataSet,
  RowLevelPermissionTagConfiguration,
  RowLevelPermissionTagConfigurationFilterSensitiveLog,
  ServiceType,
  SslProperties,
  Tag,
  TemplateAlias,
  TemplateSourceEntity,
  TemplateVersionDefinition,
  ThemeAlias,
  ThemeConfiguration,
  ValidationStrategy,
  VpcConnectionProperties,
} from "./models_2";

import {
  DashboardSearchFilter,
  DashboardSummary,
  DataSetRefreshProperties,
  DataSetSearchFilter,
  DataSetSummary,
  DataSourceSearchFilter,
  DataSourceSummary,
  FolderSearchFilter,
  FolderSummary,
  GroupSearchFilter,
  IdentityType,
  NetworkInterface,
  SessionTag,
  SessionTagFilterSensitiveLog,
  SnapshotConfiguration,
  ThemeType,
  TopicDetails,
  TopicRefreshSchedule,
  User,
  UserRole,
  VPCConnectionAvailabilityStatus,
  VPCConnectionResourceStatus,
} from "./models_3";

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
  Status?: ResourceStatus;

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
  Type?: ThemeType;
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
  Status?: ResourceStatus;
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
  Status?: VPCConnectionResourceStatus;

  /**
   * @public
   * <p>The availability status of the VPC connection.</p>
   */
  AvailabilityStatus?: VPCConnectionAvailabilityStatus;

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
  IdentityType: IdentityType | undefined;

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
  UserRole: UserRole | undefined;

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

  /**
   * @public
   * <p>The tags to associate with the user.</p>
   */
  Tags?: Tag[];
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
  ExportFormat: AssetBundleExportFormat | undefined;

  /**
   * @public
   * <p>An optional collection of structures that generate CloudFormation parameters to override the existing resource property values when the resource is exported to a new CloudFormation template.</p>
   *          <p>Use this field if the <code>ExportFormat</code> field of a <code>StartAssetBundleExportJobRequest</code> API call is set to <code>CLOUDFORMATION_JSON</code>.</p>
   */
  CloudFormationOverridePropertyConfiguration?: AssetBundleCloudFormationOverridePropertyConfiguration;

  /**
   * @public
   * <p>A Boolean that determines whether all permissions for each resource ARN are exported with the job. If you set <code>IncludePermissions</code> to <code>TRUE</code>, any permissions associated with each resource are exported.
   *       </p>
   */
  IncludePermissions?: boolean;

  /**
   * @public
   * <p> A Boolean that determines whether all tags for each resource ARN are exported with the job. If you set <code>IncludeTags</code> to <code>TRUE</code>, any tags associated with each resource are exported.</p>
   */
  IncludeTags?: boolean;

  /**
   * @public
   * <p>An optional parameter that determines which validation strategy to use for the export job. If <code>StrictModeForAllResources</code> is set to <code>TRUE</code>, strict validation for every error is enforced. If it is set to <code>FALSE</code>, validation is skipped for specific UI errors that are shown as warnings. The default value for <code>StrictModeForAllResources</code> is <code>FALSE</code>.</p>
   */
  ValidationStrategy?: AssetBundleExportJobValidationStrategy;
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
   * <p>Optional overrides that are applied to the resource configuration before import.</p>
   */
  OverrideParameters?: AssetBundleImportJobOverrideParameters;

  /**
   * @public
   * <p>The failure action for the import job.</p>
   *          <p>If you choose <code>ROLLBACK</code>, failed  import jobs will attempt to  undo any asset changes caused by the failed job.</p>
   *          <p>If you choose <code>DO_NOTHING</code>, failed import jobs will not attempt to roll back
   *          any asset changes caused by the failed job, possibly keeping the Amazon QuickSight account in an inconsistent state.</p>
   */
  FailureAction?: AssetBundleImportFailureAction;

  /**
   * @public
   * <p>Optional permission overrides that are applied to the resource configuration before import.</p>
   */
  OverridePermissions?: AssetBundleImportJobOverridePermissions;

  /**
   * @public
   * <p>Optional tag overrides that are applied to the resource configuration before import.</p>
   */
  OverrideTags?: AssetBundleImportJobOverrideTags;

  /**
   * @public
   * <p>An optional validation strategy override for all analyses and dashboards that is applied to the resource configuration before import. </p>
   */
  OverrideValidationStrategy?: AssetBundleImportJobOverrideValidationStrategy;
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
 * @public
 */
export interface UpdateAccountSettingsResponse {
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
export interface UpdateAnalysisRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the analysis that you're updating.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the analysis that you're updating. This ID displays in the URL of the
   *             analysis.</p>
   */
  AnalysisId: string | undefined;

  /**
   * @public
   * <p>A descriptive name for the analysis that you're updating. This name displays for the
   *             analysis in the Amazon QuickSight console.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The parameter names and override values that you want to use. An analysis can have
   *             any parameter type, and some parameters might accept multiple values. </p>
   */
  Parameters?: _Parameters;

  /**
   * @public
   * <p>A source entity to use for the analysis that you're updating. This metadata structure
   *             contains details that describe a source template and one or more datasets.</p>
   */
  SourceEntity?: AnalysisSourceEntity;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the theme to apply to the analysis that you're
   *             creating. To see the theme in the Amazon QuickSight console, make sure that you have access to
   *             it.</p>
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
   * <p>The option to relax the validation needed to update an analysis with definition objects. This skips the validation step for specific errors.</p>
   */
  ValidationStrategy?: ValidationStrategy;
}

/**
 * @public
 */
export interface UpdateAnalysisResponse {
  /**
   * @public
   * <p>The ARN of the analysis that you're updating.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The ID of the analysis.</p>
   */
  AnalysisId?: string;

  /**
   * @public
   * <p>The update status of the last update that was made to the analysis.</p>
   */
  UpdateStatus?: ResourceStatus;

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
export interface UpdateAnalysisPermissionsRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the analysis whose permissions you're
   *             updating. You must be using the Amazon Web Services account that the analysis is in.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the analysis whose permissions you're updating. The ID is part of the
   *             analysis URL.</p>
   */
  AnalysisId: string | undefined;

  /**
   * @public
   * <p>A structure that describes the permissions to add and the principal to add them
   *             to.</p>
   */
  GrantPermissions?: ResourcePermission[];

  /**
   * @public
   * <p>A structure that describes the permissions to remove and the principal to remove them
   *             from.</p>
   */
  RevokePermissions?: ResourcePermission[];
}

/**
 * @public
 */
export interface UpdateAnalysisPermissionsResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the analysis that you updated.</p>
   */
  AnalysisArn?: string;

  /**
   * @public
   * <p>The ID of the analysis that you updated permissions for.</p>
   */
  AnalysisId?: string;

  /**
   * @public
   * <p>A structure that describes the principals and the resource-level permissions on an
   *             analysis.</p>
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
export interface UpdateDashboardRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the dashboard that you're
   *             updating.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the dashboard.</p>
   */
  DashboardId: string | undefined;

  /**
   * @public
   * <p>The display name of the dashboard.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The entity that you are using as a source when you update the dashboard. In
   *             <code>SourceEntity</code>, you specify the type of object you're using as source. You
   *             can only update a dashboard from a template, so you use a <code>SourceTemplate</code>
   *             entity. If you need to update a dashboard from an analysis, first convert the analysis
   *             to a template by using the <code>
   *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateTemplate.html">CreateTemplate</a>
   *             </code> API operation. For
   *             <code>SourceTemplate</code>, specify the Amazon Resource Name (ARN) of the source
   *             template. The <code>SourceTemplate</code> ARN can contain any Amazon Web Services account and any
   *             Amazon QuickSight-supported Amazon Web Services Region. </p>
   *          <p>Use the <code>DataSetReferences</code> entity within <code>SourceTemplate</code> to
   *             list the replacement datasets for the placeholders listed in the original. The schema in
   *             each dataset must match its placeholder. </p>
   */
  SourceEntity?: DashboardSourceEntity;

  /**
   * @public
   * <p>A structure that contains the parameters of the dashboard. These are parameter
   *             overrides for a dashboard. A dashboard can have any type of parameters, and some
   *             parameters might accept multiple values.</p>
   */
  Parameters?: _Parameters;

  /**
   * @public
   * <p>A description for the first version of the dashboard being created.</p>
   */
  VersionDescription?: string;

  /**
   * @public
   * <p>Options for publishing the dashboard when you create it:</p>
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

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the theme that is being used for this dashboard. If
   *             you add a value for this field, it overrides the value that was originally associated
   *             with the entity. The theme ARN must exist in the same Amazon Web Services account where you create the
   *             dashboard.</p>
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
   * <p>The option to relax the validation needed to update a dashboard with definition objects. This skips the validation step for specific errors.</p>
   */
  ValidationStrategy?: ValidationStrategy;
}

/**
 * @public
 */
export interface UpdateDashboardResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The ARN of the dashboard, including the version number.</p>
   */
  VersionArn?: string;

  /**
   * @public
   * <p>The ID for the dashboard.</p>
   */
  DashboardId?: string;

  /**
   * @public
   * <p>The creation status of the request.</p>
   */
  CreationStatus?: ResourceStatus;

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
export interface UpdateDashboardLinksRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the dashboard whose links you want to update.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the dashboard.</p>
   */
  DashboardId: string | undefined;

  /**
   * @public
   * <p> list of analysis Amazon Resource Names (ARNs) to be linked to the dashboard.</p>
   */
  LinkEntities: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateDashboardLinksResponse {
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
   * <p>The Amazon Resource Name (ARN) of the dashboard.</p>
   */
  DashboardArn?: string;

  /**
   * @public
   * <p>A list of analysis Amazon Resource Names (ARNs) to be linked to the dashboard.</p>
   */
  LinkEntities?: string[];
}

/**
 * @public
 */
export interface UpdateDashboardPermissionsRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the dashboard whose permissions you're
   *             updating.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the dashboard.</p>
   */
  DashboardId: string | undefined;

  /**
   * @public
   * <p>The permissions that you want to grant on this resource.</p>
   */
  GrantPermissions?: ResourcePermission[];

  /**
   * @public
   * <p>The permissions that you want to revoke from this resource.</p>
   */
  RevokePermissions?: ResourcePermission[];

  /**
   * @public
   * <p>Grants link permissions to all users in a defined namespace.</p>
   */
  GrantLinkPermissions?: ResourcePermission[];

  /**
   * @public
   * <p>Revokes link permissions from all users in a defined namespace.</p>
   */
  RevokeLinkPermissions?: ResourcePermission[];
}

/**
 * @public
 */
export interface UpdateDashboardPermissionsResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the dashboard.</p>
   */
  DashboardArn?: string;

  /**
   * @public
   * <p>The ID for the dashboard.</p>
   */
  DashboardId?: string;

  /**
   * @public
   * <p>Information about the permissions on the dashboard.</p>
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

  /**
   * @public
   * <p>Updates the permissions of a shared link to an Amazon QuickSight dashboard.</p>
   */
  LinkSharingConfiguration?: LinkSharingConfiguration;
}

/**
 * @public
 */
export interface UpdateDashboardPublishedVersionRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the dashboard that you're
   *             updating.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the dashboard.</p>
   */
  DashboardId: string | undefined;

  /**
   * @public
   * <p>The version number of the dashboard.</p>
   */
  VersionNumber: number | undefined;
}

/**
 * @public
 */
export interface UpdateDashboardPublishedVersionResponse {
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
export interface UpdateDataSetRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the dataset that you want to update. This ID is unique per Amazon Web Services Region for each
   * 			Amazon Web Services account.</p>
   */
  DataSetId: string | undefined;

  /**
   * @public
   * <p>The display name for the dataset.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Declares the physical tables that are available in the underlying data sources.</p>
   */
  PhysicalTableMap: Record<string, PhysicalTable> | undefined;

  /**
   * @public
   * <p>Configures the combination and transformation of the data from the physical tables.</p>
   */
  LogicalTableMap?: Record<string, LogicalTable>;

  /**
   * @public
   * <p>Indicates whether you want to import the data into SPICE.</p>
   */
  ImportMode: DataSetImportMode | undefined;

  /**
   * @public
   * <p>Groupings of columns that work together in certain Amazon QuickSight features. Currently, only geospatial hierarchy is supported.</p>
   */
  ColumnGroups?: ColumnGroup[];

  /**
   * @public
   * <p>The folder that contains fields and nested subfolders for your dataset.</p>
   */
  FieldFolders?: Record<string, FieldFolder>;

  /**
   * @public
   * <p>The row-level security configuration for the data you want to create.</p>
   */
  RowLevelPermissionDataSet?: RowLevelPermissionDataSet;

  /**
   * @public
   * <p>The configuration of tags on a dataset to set row-level security. Row-level security tags are currently supported for anonymous embedding only.</p>
   */
  RowLevelPermissionTagConfiguration?: RowLevelPermissionTagConfiguration;

  /**
   * @public
   * <p>A set of one or more definitions of a <code>
   *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ColumnLevelPermissionRule.html">ColumnLevelPermissionRule</a>
   *             </code>.</p>
   */
  ColumnLevelPermissionRules?: ColumnLevelPermissionRule[];

  /**
   * @public
   * <p>The usage configuration to apply to child datasets that reference this dataset as a source.</p>
   */
  DataSetUsageConfiguration?: DataSetUsageConfiguration;

  /**
   * @public
   * <p>The parameter declarations of the dataset.</p>
   */
  DatasetParameters?: DatasetParameter[];
}

/**
 * @public
 */
export interface UpdateDataSetResponse {
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
   * <p>The ARN for the ingestion, which is triggered as a result of dataset creation if the import
   * 			mode is SPICE.</p>
   */
  IngestionArn?: string;

  /**
   * @public
   * <p>The ID of the ingestion, which is triggered as a result of dataset creation if the import
   * 			mode is SPICE.</p>
   */
  IngestionId?: string;

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
export interface UpdateDataSetPermissionsRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the dataset whose permissions you want to update. This ID is unique per
   * 			Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  DataSetId: string | undefined;

  /**
   * @public
   * <p>The resource permissions that you want to grant to the dataset.</p>
   */
  GrantPermissions?: ResourcePermission[];

  /**
   * @public
   * <p>The resource permissions that you want to revoke from the dataset.</p>
   */
  RevokePermissions?: ResourcePermission[];
}

/**
 * @public
 */
export interface UpdateDataSetPermissionsResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   */
  DataSetArn?: string;

  /**
   * @public
   * <p>The ID for the dataset whose permissions you want to update. This ID is unique per
   * 			Amazon Web Services Region for each Amazon Web Services account.</p>
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
export interface UpdateDataSourceRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account. </p>
   */
  DataSourceId: string | undefined;

  /**
   * @public
   * <p>A display name for the data source.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The parameters that Amazon QuickSight uses to connect to your underlying source.</p>
   */
  DataSourceParameters?: DataSourceParameters;

  /**
   * @public
   * <p>The credentials that Amazon QuickSight that uses to connect to your underlying source. Currently,
   * 			only credentials based on user name and password are supported.</p>
   */
  Credentials?: DataSourceCredentials;

  /**
   * @public
   * <p>Use this parameter only when you want Amazon QuickSight to use a VPC connection when connecting to
   * 			your underlying source.</p>
   */
  VpcConnectionProperties?: VpcConnectionProperties;

  /**
   * @public
   * <p>Secure Socket Layer (SSL) properties that apply when Amazon QuickSight connects to your underlying
   * 			source.</p>
   */
  SslProperties?: SslProperties;
}

/**
 * @public
 */
export interface UpdateDataSourceResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the data source.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  DataSourceId?: string;

  /**
   * @public
   * <p>The update status of the data source's last update.</p>
   */
  UpdateStatus?: ResourceStatus;

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
export interface UpdateDataSourcePermissionsRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account. </p>
   */
  DataSourceId: string | undefined;

  /**
   * @public
   * <p>A list of resource permissions that you want to grant on the data source.</p>
   */
  GrantPermissions?: ResourcePermission[];

  /**
   * @public
   * <p>A list of resource permissions that you want to revoke on the data source.</p>
   */
  RevokePermissions?: ResourcePermission[];
}

/**
 * @public
 */
export interface UpdateDataSourcePermissionsResponse {
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
export interface UpdateFolderRequest {
  /**
   * @public
   * <p>The ID for the Amazon Web Services account that contains the folder to update.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the folder.</p>
   */
  FolderId: string | undefined;

  /**
   * @public
   * <p>The name of the folder.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface UpdateFolderResponse {
  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

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
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface UpdateFolderPermissionsRequest {
  /**
   * @public
   * <p>The ID for the Amazon Web Services account that contains the folder to update.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the folder.</p>
   */
  FolderId: string | undefined;

  /**
   * @public
   * <p>The permissions that you want to grant on a resource.</p>
   */
  GrantPermissions?: ResourcePermission[];

  /**
   * @public
   * <p>The permissions that you want to revoke from a resource.</p>
   */
  RevokePermissions?: ResourcePermission[];
}

/**
 * @public
 */
export interface UpdateFolderPermissionsResponse {
  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

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
   * <p>Information about the permissions for the folder.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface UpdateGroupRequest {
  /**
   * @public
   * <p>The name of the group that you want to update.</p>
   */
  GroupName: string | undefined;

  /**
   * @public
   * <p>The description for the group that you want to update.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the
   * 			Amazon Web Services account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The namespace of the group that you want to update.</p>
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface UpdateGroupResponse {
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
export interface UpdateIAMPolicyAssignmentRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the IAM policy
   * 			assignment. </p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The name of the assignment, also called a rule.
   * 			The
   * 			name must be unique within the
   * 			Amazon Web Services account.</p>
   */
  AssignmentName: string | undefined;

  /**
   * @public
   * <p>The namespace of the assignment.</p>
   */
  Namespace: string | undefined;

  /**
   * @public
   * <p>The status of the assignment. Possible values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> - Anything specified in this assignment is used when
   * 					creating the data source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> - This assignment isn't used when creating the data
   * 					source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DRAFT</code> - This assignment is an unfinished draft and isn't used
   * 					when creating the data source.</p>
   *             </li>
   *          </ul>
   */
  AssignmentStatus?: AssignmentStatus;

  /**
   * @public
   * <p>The ARN for the IAM policy to apply to the Amazon QuickSight users and
   * 			groups specified in this assignment.</p>
   */
  PolicyArn?: string;

  /**
   * @public
   * <p>The Amazon QuickSight users, groups, or both that you want to assign the policy
   * 			to.</p>
   */
  Identities?: Record<string, string[]>;
}

/**
 * @public
 */
export interface UpdateIAMPolicyAssignmentResponse {
  /**
   * @public
   * <p>The name of the assignment or rule.</p>
   */
  AssignmentName?: string;

  /**
   * @public
   * <p>The ID of the assignment.</p>
   */
  AssignmentId?: string;

  /**
   * @public
   * <p>The ARN for the IAM policy applied to the Amazon QuickSight users and
   * 			groups specified in this assignment.</p>
   */
  PolicyArn?: string;

  /**
   * @public
   * <p>The Amazon QuickSight users, groups, or both that the IAM policy is
   * 			assigned to.</p>
   */
  Identities?: Record<string, string[]>;

  /**
   * @public
   * <p>The status of the assignment. Possible values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> - Anything specified in this assignment is used when
   * 					creating the data source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> - This assignment isn't used when creating the data
   * 					source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DRAFT</code> - This assignment is an unfinished draft and isn't used
   * 					when creating the data source.</p>
   *             </li>
   *          </ul>
   */
  AssignmentStatus?: AssignmentStatus;

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
export interface UpdateIdentityPropagationConfigRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the identity propagation configuration that you want to update.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The name of the Amazon Web Services service that contains the authorized targets that you want to add or update.</p>
   */
  Service: ServiceType | undefined;

  /**
   * @public
   * <p>Specifies a list of application ARNs that represent the authorized targets for a service.</p>
   */
  AuthorizedTargets?: string[];
}

/**
 * @public
 */
export interface UpdateIdentityPropagationConfigResponse {
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
export interface UpdateIpRestrictionRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the IP rules.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>A map that describes the updated IP rules with CIDR ranges and descriptions.</p>
   */
  IpRestrictionRuleMap?: Record<string, string>;

  /**
   * @public
   * <p>A value that specifies whether IP rules are turned on.</p>
   */
  Enabled?: boolean;
}

/**
 * @public
 */
export interface UpdateIpRestrictionResponse {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the IP rules.</p>
   */
  AwsAccountId?: string;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request. </p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface UpdatePublicSharingSettingsRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID associated with your Amazon QuickSight subscription.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>A Boolean value that indicates whether public sharing is turned on for an Amazon QuickSight account.</p>
   */
  PublicSharingEnabled?: boolean;
}

/**
 * @public
 */
export interface UpdatePublicSharingSettingsResponse {
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
export interface UpdateRefreshScheduleRequest {
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
   * <p>The refresh schedule.</p>
   */
  Schedule: RefreshSchedule | undefined;
}

/**
 * @public
 */
export interface UpdateRefreshScheduleResponse {
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
export interface UpdateRoleCustomPermissionRequest {
  /**
   * @public
   * <p>The name of the custom permission that you want to update the role with.</p>
   */
  CustomPermissionsName: string | undefined;

  /**
   * @public
   * <p>The name of role tht you want to update.</p>
   */
  Role: Role | undefined;

  /**
   * @public
   * <p>The ID for the Amazon Web Services account that you want to create a group in. The Amazon Web Services account ID that you provide must be the same Amazon Web Services account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The namespace that contains the role that you want to update.</p>
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface UpdateRoleCustomPermissionResponse {
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
export interface UpdateTemplateRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the template that you're updating.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the template.</p>
   */
  TemplateId: string | undefined;

  /**
   * @public
   * <p>The entity that you are using as a source when you update the template. In
   * 			<code>SourceEntity</code>, you specify the type of object you're using as source:
   * 			<code>SourceTemplate</code> for a template or <code>SourceAnalysis</code> for an
   * 			analysis. Both of these require an Amazon Resource Name (ARN). For
   * 			<code>SourceTemplate</code>, specify the ARN of the source template. For
   * 			<code>SourceAnalysis</code>, specify the ARN of the source analysis. The <code>SourceTemplate</code>
   * 			ARN can contain any Amazon Web Services account and any Amazon QuickSight-supported Amazon Web Services Region;. </p>
   *          <p>Use the <code>DataSetReferences</code> entity within <code>SourceTemplate</code> or
   * 			<code>SourceAnalysis</code> to list the replacement datasets for the placeholders listed
   * 			in the original. The schema in each dataset must match its placeholder. </p>
   */
  SourceEntity?: TemplateSourceEntity;

  /**
   * @public
   * <p>A description of the current template version that is being updated. Every time you call
   * 				<code>UpdateTemplate</code>, you create a new version of the template. Each version
   * 			of the template maintains a description of the version in the
   * 				<code>VersionDescription</code> field.</p>
   */
  VersionDescription?: string;

  /**
   * @public
   * <p>The name for the template.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The definition of a template.</p>
   *          <p>A definition is the data model of all features in a Dashboard, Template, or Analysis.</p>
   */
  Definition?: TemplateVersionDefinition;

  /**
   * @public
   * <p>The option to relax the validation needed to update a template with definition objects. This skips the validation step for specific errors.</p>
   */
  ValidationStrategy?: ValidationStrategy;
}

/**
 * @public
 */
export interface UpdateTemplateResponse {
  /**
   * @public
   * <p>The ID for the template.</p>
   */
  TemplateId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the template.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The ARN for the template, including the version information of the first version.</p>
   */
  VersionArn?: string;

  /**
   * @public
   * <p>The creation status of the template.</p>
   */
  CreationStatus?: ResourceStatus;

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
export interface UpdateTemplateAliasRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the template alias that you're updating.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the template.</p>
   */
  TemplateId: string | undefined;

  /**
   * @public
   * <p>The alias of the template that you want to update. If you name a specific alias, you update
   * 			the version that the alias points to. You can specify the latest version of the template
   * 			by providing the keyword <code>$LATEST</code> in the <code>AliasName</code> parameter.
   * 			The keyword <code>$PUBLISHED</code> doesn't apply to templates.</p>
   */
  AliasName: string | undefined;

  /**
   * @public
   * <p>The version number of the template.</p>
   */
  TemplateVersionNumber: number | undefined;
}

/**
 * @public
 */
export interface UpdateTemplateAliasResponse {
  /**
   * @public
   * <p>The template alias.</p>
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
export interface UpdateTemplatePermissionsRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the template.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the template.</p>
   */
  TemplateId: string | undefined;

  /**
   * @public
   * <p>A list of resource permissions to be granted on the template. </p>
   */
  GrantPermissions?: ResourcePermission[];

  /**
   * @public
   * <p>A list of resource permissions to be revoked from the template. </p>
   */
  RevokePermissions?: ResourcePermission[];
}

/**
 * @public
 */
export interface UpdateTemplatePermissionsResponse {
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
   * <p>A list of resource permissions to be set on the template.</p>
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
export interface UpdateThemeRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the theme that you're updating.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the theme.</p>
   */
  ThemeId: string | undefined;

  /**
   * @public
   * <p>The name for the theme.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The theme ID, defined by Amazon QuickSight, that a custom theme inherits from.
   * 		All themes initially inherit from a default Amazon QuickSight theme.</p>
   */
  BaseThemeId: string | undefined;

  /**
   * @public
   * <p>A description of the theme version that you're updating Every time that you call
   * 				<code>UpdateTheme</code>, you create a new version of the theme. Each version of the
   * 			theme maintains a description of the version in <code>VersionDescription</code>.</p>
   */
  VersionDescription?: string;

  /**
   * @public
   * <p>The theme configuration, which contains the theme display properties.</p>
   */
  Configuration?: ThemeConfiguration;
}

/**
 * @public
 */
export interface UpdateThemeResponse {
  /**
   * @public
   * <p>The ID for the theme.</p>
   */
  ThemeId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the theme.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the new version of the theme.</p>
   */
  VersionArn?: string;

  /**
   * @public
   * <p>The creation status of the theme.</p>
   */
  CreationStatus?: ResourceStatus;

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
export interface UpdateThemeAliasRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the theme alias that you're updating.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the theme.</p>
   */
  ThemeId: string | undefined;

  /**
   * @public
   * <p>The name of the theme alias that you want to update.</p>
   */
  AliasName: string | undefined;

  /**
   * @public
   * <p>The version number of the theme that the alias should reference.</p>
   */
  ThemeVersionNumber: number | undefined;
}

/**
 * @public
 */
export interface UpdateThemeAliasResponse {
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
export interface UpdateThemePermissionsRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the theme.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the theme.</p>
   */
  ThemeId: string | undefined;

  /**
   * @public
   * <p>A list of resource permissions to be granted for the theme.</p>
   */
  GrantPermissions?: ResourcePermission[];

  /**
   * @public
   * <p>A list of resource permissions to be revoked from the theme.</p>
   */
  RevokePermissions?: ResourcePermission[];
}

/**
 * @public
 */
export interface UpdateThemePermissionsResponse {
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
   * <p>The resulting list of resource permissions for the theme.</p>
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
export interface UpdateTopicRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the topic that you want to
   *          update.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the topic that you want to modify. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  TopicId: string | undefined;

  /**
   * @public
   * <p>The definition of the topic that you want to update.</p>
   */
  Topic: TopicDetails | undefined;
}

/**
 * @public
 */
export interface UpdateTopicResponse {
  /**
   * @public
   * <p>The ID of the topic that you want to modify. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  TopicId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the topic.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the topic refresh.</p>
   */
  RefreshArn?: string;

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
export interface UpdateTopicPermissionsRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the topic that you want to update
   *          the permissions for.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the topic that you want to modify. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  TopicId: string | undefined;

  /**
   * @public
   * <p>The resource permissions that you want to grant to the topic.</p>
   */
  GrantPermissions?: ResourcePermission[];

  /**
   * @public
   * <p>The resource permissions that you want to revoke from the topic.</p>
   */
  RevokePermissions?: ResourcePermission[];
}

/**
 * @public
 */
export interface UpdateTopicPermissionsResponse {
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
   * <p>A list of resource permissions on the topic.</p>
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
export interface UpdateTopicRefreshScheduleRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the topic whose refresh schedule
   *          you want to update.</p>
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

  /**
   * @public
   * <p>The definition of a refresh schedule.</p>
   */
  RefreshSchedule: TopicRefreshSchedule | undefined;
}

/**
 * @public
 */
export interface UpdateTopicRefreshScheduleResponse {
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
export interface UpdateUserRequest {
  /**
   * @public
   * <p>The Amazon QuickSight user name that you want to update.</p>
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

  /**
   * @public
   * <p>The email address of the user that you want to update.</p>
   */
  Email: string | undefined;

  /**
   * @public
   * <p>The Amazon QuickSight role of the user. The role can be one of the
   * 			following default security cohorts:</p>
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
   *          </ul>
   *          <p>The name of the Amazon QuickSight role is invisible to the user except for the console
   * 	        screens dealing with permissions.</p>
   */
  Role: UserRole | undefined;

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
   * <p>A flag that you use to indicate that you want to remove all custom permissions
   *             from this user. Using this parameter resets the user to the state
   *             it was in before a custom permissions profile was applied. This parameter defaults to
   *             NULL and it doesn't accept any other value.</p>
   */
  UnapplyCustomPermissions?: boolean;

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
   *             <li>
   *                <p>
   *                   <code>NONE</code>: This clears all the previously saved external login information for a user. Use the
   *           <code>
   *                      <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeUser.html">DescribeUser</a>
   *                   </code>
   *           API operation to check the external login information.</p>
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
export interface UpdateUserResponse {
  /**
   * @public
   * <p>The Amazon QuickSight user.</p>
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
export interface UpdateVPCConnectionRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID of the account that contains the VPC connection that
   * 			you want to update.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the VPC connection that
   * 			you're updating. This ID is a unique identifier for each Amazon Web Services Region in an
   * 				Amazon Web Services account.</p>
   */
  VPCConnectionId: string | undefined;

  /**
   * @public
   * <p>The display name for the VPC connection.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A list of subnet IDs for the VPC connection.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * @public
   * <p>A list of security group IDs for the VPC connection.</p>
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * @public
   * <p>A list of IP addresses of DNS resolver endpoints for the VPC connection.</p>
   */
  DnsResolvers?: string[];

  /**
   * @public
   * <p>An IAM role associated with the VPC connection.</p>
   */
  RoleArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateVPCConnectionResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the VPC connection.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The ID of the VPC connection that you are updating. This ID is a unique identifier for each Amazon Web Services Region in anAmazon Web Services account.</p>
   */
  VPCConnectionId?: string;

  /**
   * @public
   * <p>The update status of the VPC connection's last update.</p>
   */
  UpdateStatus?: VPCConnectionResourceStatus;

  /**
   * @public
   * <p>The availability status of the VPC connection.</p>
   */
  AvailabilityStatus?: VPCConnectionAvailabilityStatus;

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

/**
 * @internal
 */
export const UpdateAnalysisRequestFilterSensitiveLog = (obj: UpdateAnalysisRequest): any => ({
  ...obj,
  ...(obj.Parameters && { Parameters: _ParametersFilterSensitiveLog(obj.Parameters) }),
});

/**
 * @internal
 */
export const UpdateDashboardRequestFilterSensitiveLog = (obj: UpdateDashboardRequest): any => ({
  ...obj,
  ...(obj.Parameters && { Parameters: _ParametersFilterSensitiveLog(obj.Parameters) }),
});

/**
 * @internal
 */
export const UpdateDataSetRequestFilterSensitiveLog = (obj: UpdateDataSetRequest): any => ({
  ...obj,
  ...(obj.PhysicalTableMap && {
    PhysicalTableMap: Object.entries(obj.PhysicalTableMap).reduce(
      (acc: any, [key, value]: [string, PhysicalTable]) => ((acc[key] = value), acc),
      {}
    ),
  }),
  ...(obj.LogicalTableMap && {
    LogicalTableMap: Object.entries(obj.LogicalTableMap).reduce(
      (acc: any, [key, value]: [string, LogicalTable]) => ((acc[key] = LogicalTableFilterSensitiveLog(value)), acc),
      {}
    ),
  }),
  ...(obj.RowLevelPermissionTagConfiguration && {
    RowLevelPermissionTagConfiguration: RowLevelPermissionTagConfigurationFilterSensitiveLog(
      obj.RowLevelPermissionTagConfiguration
    ),
  }),
});

/**
 * @internal
 */
export const UpdateDataSourceRequestFilterSensitiveLog = (obj: UpdateDataSourceRequest): any => ({
  ...obj,
  ...(obj.DataSourceParameters && { DataSourceParameters: obj.DataSourceParameters }),
  ...(obj.Credentials && { Credentials: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateTemplateRequestFilterSensitiveLog = (obj: UpdateTemplateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateTopicRequestFilterSensitiveLog = (obj: UpdateTopicRequest): any => ({
  ...obj,
});
