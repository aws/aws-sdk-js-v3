import {
  AccountCustomization,
  AnalysisSearchFilter,
  AnalysisSourceEntity,
  AnalysisSummary,
  AssignmentStatus,
  ColumnGroup,
  ColumnLevelPermissionRule,
  DashboardPublishOptions,
  DashboardSearchFilter,
  DashboardSourceEntity,
  DashboardSummary,
  DataSetImportMode,
  DataSourceCredentials,
  DataSourceParameters,
  Group,
  IdentityType,
  LogicalTable,
  NamespaceInfoV2,
  PhysicalTable,
  ResourcePermission,
  ResourceStatus,
  RowLevelPermissionDataSet,
  SslProperties,
  Tag,
  TemplateAlias,
  TemplateSourceEntity,
  ThemeAlias,
  ThemeConfiguration,
  ThemeType,
  User,
  UserRole,
  VpcConnectionProperties,
  _Parameters,
} from "./models_0";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";

export interface ListNamespacesRequest {
  /**
   * <p>The ID for the AWS account that contains the QuickSight namespaces that you want to list.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;
}

export namespace ListNamespacesRequest {
  export const filterSensitiveLog = (obj: ListNamespacesRequest): any => ({
    ...obj,
  });
}

export interface ListNamespacesResponse {
  /**
   * <p>The information about the namespaces in this AWS account. The response includes
   *         the namespace ARN, name, AWS Region, notification email address, creation status, and
   *         identity store.</p>
   */
  Namespaces?: NamespaceInfoV2[];

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export namespace ListNamespacesResponse {
  export const filterSensitiveLog = (obj: ListNamespacesResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want a list of tags for.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the
   * 			resource.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface ListTemplateAliasesRequest {
  /**
   * <p>The ID of the AWS account that contains the template aliases that you're listing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the template.</p>
   */
  TemplateId: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;
}

export namespace ListTemplateAliasesRequest {
  export const filterSensitiveLog = (obj: ListTemplateAliasesRequest): any => ({
    ...obj,
  });
}

export interface ListTemplateAliasesResponse {
  /**
   * <p>A structure containing the list of the template's aliases.</p>
   */
  TemplateAliasList?: TemplateAlias[];

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;
}

export namespace ListTemplateAliasesResponse {
  export const filterSensitiveLog = (obj: ListTemplateAliasesResponse): any => ({
    ...obj,
  });
}

export interface ListTemplatesRequest {
  /**
   * <p>The ID of the AWS account that contains the templates that you're listing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;
}

export namespace ListTemplatesRequest {
  export const filterSensitiveLog = (obj: ListTemplatesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The template summary.</p>
 */
export interface TemplateSummary {
  /**
   * <p>A summary of a template.</p>
   */
  Arn?: string;

  /**
   * <p>The ID of the template. This ID is unique per AWS Region for each AWS account.</p>
   */
  TemplateId?: string;

  /**
   * <p>A display name for the template.</p>
   */
  Name?: string;

  /**
   * <p>A structure containing a list of version numbers for the template summary.</p>
   */
  LatestVersionNumber?: number;

  /**
   * <p>The last time that this template was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The last time that this template was updated.</p>
   */
  LastUpdatedTime?: Date;
}

export namespace TemplateSummary {
  export const filterSensitiveLog = (obj: TemplateSummary): any => ({
    ...obj,
  });
}

export interface ListTemplatesResponse {
  /**
   * <p>A structure containing information about the templates in the list.</p>
   */
  TemplateSummaryList?: TemplateSummary[];

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace ListTemplatesResponse {
  export const filterSensitiveLog = (obj: ListTemplatesResponse): any => ({
    ...obj,
  });
}

export interface ListTemplateVersionsRequest {
  /**
   * <p>The ID of the AWS account that contains the templates that you're listing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the template.</p>
   */
  TemplateId: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;
}

export namespace ListTemplateVersionsRequest {
  export const filterSensitiveLog = (obj: ListTemplateVersionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The template version.</p>
 */
export interface TemplateVersionSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the template version.</p>
   */
  Arn?: string;

  /**
   * <p>The version number of the template version.</p>
   */
  VersionNumber?: number;

  /**
   * <p>The time that this template version was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The status of the template version.</p>
   */
  Status?: ResourceStatus | string;

  /**
   * <p>The description of the template version.</p>
   */
  Description?: string;
}

export namespace TemplateVersionSummary {
  export const filterSensitiveLog = (obj: TemplateVersionSummary): any => ({
    ...obj,
  });
}

export interface ListTemplateVersionsResponse {
  /**
   * <p>A structure containing a list of all the versions of the specified template.</p>
   */
  TemplateVersionSummaryList?: TemplateVersionSummary[];

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace ListTemplateVersionsResponse {
  export const filterSensitiveLog = (obj: ListTemplateVersionsResponse): any => ({
    ...obj,
  });
}

export interface ListThemeAliasesRequest {
  /**
   * <p>The ID of the AWS account that contains the theme aliases that you're listing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the theme.</p>
   */
  ThemeId: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;
}

export namespace ListThemeAliasesRequest {
  export const filterSensitiveLog = (obj: ListThemeAliasesRequest): any => ({
    ...obj,
  });
}

export interface ListThemeAliasesResponse {
  /**
   * <p>A structure containing the list of the theme's aliases.</p>
   */
  ThemeAliasList?: ThemeAlias[];

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;
}

export namespace ListThemeAliasesResponse {
  export const filterSensitiveLog = (obj: ListThemeAliasesResponse): any => ({
    ...obj,
  });
}

export interface ListThemesRequest {
  /**
   * <p>The ID of the AWS account that contains the themes that you're listing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The type of themes that you want to list. Valid options include the following:</p>
   *     	    <ul>
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
   *                   <code>QUICKSIGHT</code> - Display only the starting themes defined by QuickSight.</p>
   *             </li>
   *          </ul>
   */
  Type?: ThemeType | string;
}

export namespace ListThemesRequest {
  export const filterSensitiveLog = (obj: ListThemesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The theme summary.</p>
 */
export interface ThemeSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

  /**
   * <p>the display name for the theme.</p>
   */
  Name?: string;

  /**
   * <p>The ID of the theme. This ID is unique per AWS Region for each AWS account.</p>
   */
  ThemeId?: string;

  /**
   * <p>The latest version number for the theme. </p>
   */
  LatestVersionNumber?: number;

  /**
   * <p>The date and time that this theme was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The last date and time that this theme was updated.</p>
   */
  LastUpdatedTime?: Date;
}

export namespace ThemeSummary {
  export const filterSensitiveLog = (obj: ThemeSummary): any => ({
    ...obj,
  });
}

export interface ListThemesResponse {
  /**
   * <p>Information about the themes in the list.</p>
   */
  ThemeSummaryList?: ThemeSummary[];

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace ListThemesResponse {
  export const filterSensitiveLog = (obj: ListThemesResponse): any => ({
    ...obj,
  });
}

export interface ListThemeVersionsRequest {
  /**
   * <p>The ID of the AWS account that contains the themes that you're listing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the theme.</p>
   */
  ThemeId: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;
}

export namespace ListThemeVersionsRequest {
  export const filterSensitiveLog = (obj: ListThemeVersionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The theme version.</p>
 */
export interface ThemeVersionSummary {
  /**
   * <p>The version number of the theme version.</p>
   */
  VersionNumber?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the theme version.</p>
   */
  Arn?: string;

  /**
   * <p>The description of the theme version.</p>
   */
  Description?: string;

  /**
   * <p>The date and time that this theme version was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The status of the theme version.</p>
   */
  Status?: ResourceStatus | string;
}

export namespace ThemeVersionSummary {
  export const filterSensitiveLog = (obj: ThemeVersionSummary): any => ({
    ...obj,
  });
}

export interface ListThemeVersionsResponse {
  /**
   * <p>A structure containing a list of all the versions of the specified theme.</p>
   */
  ThemeVersionSummaryList?: ThemeVersionSummary[];

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace ListThemeVersionsResponse {
  export const filterSensitiveLog = (obj: ListThemeVersionsResponse): any => ({
    ...obj,
  });
}

export interface ListUserGroupsRequest {
  /**
   * <p>The Amazon QuickSight user name that you want to list group memberships for.</p>
   */
  UserName: string | undefined;

  /**
   * <p>The AWS account ID that the user is in. Currently, you use the ID for the AWS account
   * 			that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   */
  Namespace: string | undefined;

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return from this request.</p>
   */
  MaxResults?: number;
}

export namespace ListUserGroupsRequest {
  export const filterSensitiveLog = (obj: ListUserGroupsRequest): any => ({
    ...obj,
  });
}

export interface ListUserGroupsResponse {
  /**
   * <p>The list of groups the user is a member of.</p>
   */
  GroupList?: Group[];

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export namespace ListUserGroupsResponse {
  export const filterSensitiveLog = (obj: ListUserGroupsResponse): any => ({
    ...obj,
  });
}

export interface ListUsersRequest {
  /**
   * <p>The ID for the AWS account that the user is in. Currently, you use the ID for the AWS
   * 			account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return from this request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   */
  Namespace: string | undefined;
}

export namespace ListUsersRequest {
  export const filterSensitiveLog = (obj: ListUsersRequest): any => ({
    ...obj,
  });
}

export interface ListUsersResponse {
  /**
   * <p>The list of users.</p>
   */
  UserList?: User[];

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export namespace ListUsersResponse {
  export const filterSensitiveLog = (obj: ListUsersResponse): any => ({
    ...obj,
  });
}

export interface RegisterUserRequest {
  /**
   * <p>Amazon QuickSight supports several ways of managing the identity of users. This
   * 			parameter accepts two values:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>IAM</code>: A user whose identity maps to an existing IAM user or role.
   * 				</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>QUICKSIGHT</code>: A user whose identity is owned and managed internally by
   * 					Amazon QuickSight. </p>
   * 			         </li>
   *          </ul>
   */
  IdentityType: IdentityType | string | undefined;

  /**
   * <p>The email address of the user that you want to register.</p>
   */
  Email: string | undefined;

  /**
   * <p>The Amazon QuickSight role for the user. The user role can be one of the
   * 			following:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>READER</code>: A user who has read-only access to dashboards.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>AUTHOR</code>: A user who can create data sources, datasets, analyses, and
   * 					dashboards.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>ADMIN</code>: A user who is an author, who can also manage Amazon QuickSight
   * 					settings.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>RESTRICTED_READER</code>: This role isn't currently available for
   * 					use.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>RESTRICTED_AUTHOR</code>: This role isn't currently available for
   * 					use.</p>
   * 			         </li>
   *          </ul>
   */
  UserRole: UserRole | string | undefined;

  /**
   * <p>The ARN of the IAM user or role that you are registering with Amazon QuickSight. </p>
   */
  IamArn?: string;

  /**
   * <p>You need to use this parameter only when you register one or more users using an assumed
   * 			IAM role. You don't need to provide the session name for other scenarios, for example when
   * 			you are registering an IAM user or an Amazon QuickSight user. You can register multiple
   * 			users using the same IAM role if each user has a different session name. For more
   * 			information on assuming IAM roles, see <a href="https://awscli.amazonaws.com/v2/documentation/api/latest/reference/sts/assume-role.html">
   *                <code>assume-role</code>
   *             </a> in the <i>AWS CLI Reference.</i>
   *          </p>
   */
  SessionName?: string;

  /**
   * <p>The ID for the AWS account that the user is in. Currently, you use the ID for the AWS
   * 			account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   */
  Namespace: string | undefined;

  /**
   * <p>The Amazon QuickSight user name that you want to create for the user you are
   * 			registering.</p>
   */
  UserName?: string;

  /**
   * <p>(Enterprise edition only) The name of the custom permissions profile that you want to
   *             assign to this user. Customized permissions allows you to control a user's access by
   *             restricting access the following operations:</p>
   *         <ul>
   *             <li>
   *                 <p>Create and update data sources</p>
   *             </li>
   *             <li>
   *                 <p>Create and update datasets</p>
   *             </li>
   *             <li>
   *                 <p>Create and update email reports</p>
   *             </li>
   *             <li>
   *                 <p>Subscribe to email reports</p>
   *             </li>
   *          </ul>
   *         <p>To add custom permissions to an existing user, use <code>
   *                <a>UpdateUser</a>
   *             </code> instead.</p>
   *         <p>A set of custom permissions includes any combination of these restrictions. Currently,
   *             you need to create the profile names for custom permission sets by using the QuickSight
   *             console. Then, you use the <code>RegisterUser</code> API operation to assign the named set of
   *             permissions to a QuickSight user. </p>
   *         <p>QuickSight custom permissions are applied through IAM policies. Therefore, they
   *             override the permissions typically granted by assigning QuickSight users to one of the
   *             default security cohorts in QuickSight (admin, author, reader).</p>
   *         <p>This feature is available only to QuickSight Enterprise edition subscriptions that use
   *             SAML 2.0-Based Federation for Single Sign-On (SSO).</p>
   */
  CustomPermissionsName?: string;
}

export namespace RegisterUserRequest {
  export const filterSensitiveLog = (obj: RegisterUserRequest): any => ({
    ...obj,
  });
}

export interface RegisterUserResponse {
  /**
   * <p>The user's user name.</p>
   */
  User?: User;

  /**
   * <p>The URL the user visits to complete registration and provide a password. This is
   * 			returned only for users with an identity type of <code>QUICKSIGHT</code>.</p>
   */
  UserInvitationUrl?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export namespace RegisterUserResponse {
  export const filterSensitiveLog = (obj: RegisterUserResponse): any => ({
    ...obj,
  });
}

export interface RestoreAnalysisRequest {
  /**
   * <p>The ID of the AWS account that contains the analysis.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the analysis that you're restoring.</p>
   */
  AnalysisId: string | undefined;
}

export namespace RestoreAnalysisRequest {
  export const filterSensitiveLog = (obj: RestoreAnalysisRequest): any => ({
    ...obj,
  });
}

export interface RestoreAnalysisResponse {
  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the analysis that you're restoring.</p>
   */
  Arn?: string;

  /**
   * <p>The ID of the analysis that you're restoring.
   *         </p>
   */
  AnalysisId?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace RestoreAnalysisResponse {
  export const filterSensitiveLog = (obj: RestoreAnalysisResponse): any => ({
    ...obj,
  });
}

export interface SearchAnalysesRequest {
  /**
   * <p>The ID of the AWS account that contains the analyses that you're searching
   *             for.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The structure for the search filters that you want to apply to your search. </p>
   */
  Filters: AnalysisSearchFilter[] | undefined;

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;
}

export namespace SearchAnalysesRequest {
  export const filterSensitiveLog = (obj: SearchAnalysesRequest): any => ({
    ...obj,
  });
}

export interface SearchAnalysesResponse {
  /**
   * <p>Metadata describing the analyses that you searched for.</p>
   */
  AnalysisSummaryList?: AnalysisSummary[];

  /**
   * <p>A pagination token that can be used in a subsequent request.
   *             </p>
   */
  NextToken?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace SearchAnalysesResponse {
  export const filterSensitiveLog = (obj: SearchAnalysesResponse): any => ({
    ...obj,
  });
}

export interface SearchDashboardsRequest {
  /**
   * <p>The ID of the AWS account that contains the user whose dashboards you're searching
   *             for. </p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The filters to apply to the search. Currently, you can search only by user name, for
   *             example, <code>"Filters": [ { "Name": "QUICKSIGHT_USER", "Operator": "StringEquals",
   *             "Value": "arn:aws:quicksight:us-east-1:1:user/default/UserName1" } ]</code>
   *          </p>
   */
  Filters: DashboardSearchFilter[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;
}

export namespace SearchDashboardsRequest {
  export const filterSensitiveLog = (obj: SearchDashboardsRequest): any => ({
    ...obj,
  });
}

export interface SearchDashboardsResponse {
  /**
   * <p>The list of dashboards owned by the user specified in <code>Filters</code> in your
   *             request.</p>
   */
  DashboardSummaryList?: DashboardSummary[];

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace SearchDashboardsResponse {
  export const filterSensitiveLog = (obj: SearchDashboardsResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to tag.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the resource.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to untag.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The keys of the key-value pairs for the resource tag or tags assigned to the resource.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateAccountCustomizationRequest {
  /**
   * <p>The ID for the AWS account that you want to update QuickSight customizations
   *             for.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace that you want to update QuickSight customizations for.</p>
   */
  Namespace?: string;

  /**
   * <p>The QuickSight customizations you're updating in the current AWS Region. </p>
   */
  AccountCustomization: AccountCustomization | undefined;
}

export namespace UpdateAccountCustomizationRequest {
  export const filterSensitiveLog = (obj: UpdateAccountCustomizationRequest): any => ({
    ...obj,
  });
}

export interface UpdateAccountCustomizationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the updated customization for this AWS account.</p>
   */
  Arn?: string;

  /**
   * <p>The ID for the AWS account that you want to update QuickSight customizations
   *             for.</p>
   */
  AwsAccountId?: string;

  /**
   * <p>The namespace associated with the customization that you're updating.</p>
   */
  Namespace?: string;

  /**
   * <p>The QuickSight customizations you're updating in the current AWS Region. </p>
   */
  AccountCustomization?: AccountCustomization;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export namespace UpdateAccountCustomizationResponse {
  export const filterSensitiveLog = (obj: UpdateAccountCustomizationResponse): any => ({
    ...obj,
  });
}

export interface UpdateAccountSettingsRequest {
  /**
   * <p>The ID for the AWS account that contains the QuickSight settings that you want to
   *             list.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The default namespace for this AWS account. Currently, the default is
   *                 <code>default</code>. AWS Identity and Access Management (IAM) users that register
   *             for the first time with QuickSight provide an email that becomes associated with the
   *             default namespace.</p>
   */
  DefaultNamespace: string | undefined;

  /**
   * <p>The email address that you want QuickSight to send notifications to regarding your AWS
   *             account or QuickSight subscription.</p>
   */
  NotificationEmail?: string;
}

export namespace UpdateAccountSettingsRequest {
  export const filterSensitiveLog = (obj: UpdateAccountSettingsRequest): any => ({
    ...obj,
  });
}

export interface UpdateAccountSettingsResponse {
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export namespace UpdateAccountSettingsResponse {
  export const filterSensitiveLog = (obj: UpdateAccountSettingsResponse): any => ({
    ...obj,
  });
}

export interface UpdateAnalysisRequest {
  /**
   * <p>The ID of the AWS account that contains the analysis that you're updating.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the analysis that you're updating. This ID displays in the URL of the
   *             analysis.</p>
   */
  AnalysisId: string | undefined;

  /**
   * <p>A descriptive name for the analysis that you're updating. This name displays for the
   *             analysis in the QuickSight console.</p>
   */
  Name: string | undefined;

  /**
   * <p>The parameter names and override values that you want to use. An analysis can have
   *             any parameter type, and some parameters might accept multiple values. </p>
   */
  Parameters?: _Parameters;

  /**
   * <p>A source entity to use for the analysis that you're updating. This metadata structure
   *             contains details that describe a source template and one or more datasets.</p>
   */
  SourceEntity: AnalysisSourceEntity | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the theme to apply to the analysis that you're
   *             creating. To see the theme in the QuickSight console, make sure that you have access to
   *             it.</p>
   */
  ThemeArn?: string;
}

export namespace UpdateAnalysisRequest {
  export const filterSensitiveLog = (obj: UpdateAnalysisRequest): any => ({
    ...obj,
  });
}

export interface UpdateAnalysisResponse {
  /**
   * <p>The ARN of the analysis that you're updating.</p>
   */
  Arn?: string;

  /**
   * <p>The ID of the analysis.</p>
   */
  AnalysisId?: string;

  /**
   * <p>The update status of the last update that was made to the analysis.</p>
   */
  UpdateStatus?: ResourceStatus | string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace UpdateAnalysisResponse {
  export const filterSensitiveLog = (obj: UpdateAnalysisResponse): any => ({
    ...obj,
  });
}

export interface UpdateAnalysisPermissionsRequest {
  /**
   * <p>The ID of the AWS account that contains the analysis whose permissions you're
   *             updating. You must be using the AWS account that the analysis is in.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the analysis whose permissions you're updating. The ID is part of the
   *             analysis URL.</p>
   */
  AnalysisId: string | undefined;

  /**
   * <p>A structure that describes the permissions to add and the principal to add them
   *             to.</p>
   */
  GrantPermissions?: ResourcePermission[];

  /**
   * <p>A structure that describes the permissions to remove and the principal to remove them
   *             from.</p>
   */
  RevokePermissions?: ResourcePermission[];
}

export namespace UpdateAnalysisPermissionsRequest {
  export const filterSensitiveLog = (obj: UpdateAnalysisPermissionsRequest): any => ({
    ...obj,
  });
}

export interface UpdateAnalysisPermissionsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the analysis that you updated.</p>
   */
  AnalysisArn?: string;

  /**
   * <p>The ID of the analysis that you updated permissions for.</p>
   */
  AnalysisId?: string;

  /**
   * <p>A structure that describes the principals and the resource-level permissions on an
   *             analysis.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export namespace UpdateAnalysisPermissionsResponse {
  export const filterSensitiveLog = (obj: UpdateAnalysisPermissionsResponse): any => ({
    ...obj,
  });
}

export interface UpdateDashboardRequest {
  /**
   * <p>The ID of the AWS account that contains the dashboard that you're
   *             updating.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dashboard.</p>
   */
  DashboardId: string | undefined;

  /**
   * <p>The display name of the dashboard.</p>
   */
  Name: string | undefined;

  /**
   * <p>The entity that you are using as a source when you update the dashboard. In
   *             <code>SourceEntity</code>, you specify the type of object you're using as source. You
   *             can only update a dashboard from a template, so you use a <code>SourceTemplate</code>
   *             entity. If you need to update a dashboard from an analysis, first convert the analysis
   *             to a template by using the <a>CreateTemplate</a> API operation. For
   *             <code>SourceTemplate</code>, specify the Amazon Resource Name (ARN) of the source
   *             template. The <code>SourceTemplate</code> ARN can contain any AWS Account and any
   *             QuickSight-supported AWS Region. </p>
   *         <p>Use the <code>DataSetReferences</code> entity within <code>SourceTemplate</code> to
   *             list the replacement datasets for the placeholders listed in the original. The schema in
   *             each dataset must match its placeholder. </p>
   */
  SourceEntity: DashboardSourceEntity | undefined;

  /**
   * <p>A structure that contains the parameters of the dashboard. These are parameter
   *             overrides for a dashboard. A dashboard can have any type of parameters, and some
   *             parameters might accept multiple values.</p>
   */
  Parameters?: _Parameters;

  /**
   * <p>A description for the first version of the dashboard being created.</p>
   */
  VersionDescription?: string;

  /**
   * <p>Options for publishing the dashboard when you create it:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>AvailabilityStatus</code> for <code>AdHocFilteringOption</code> - This
   *                     status can be either <code>ENABLED</code> or <code>DISABLED</code>. When this is
   *                     set to <code>DISABLED</code>, QuickSight disables the left filter pane on the
   *                     published dashboard, which can be used for ad hoc (one-time) filtering. This
   *                     option is <code>ENABLED</code> by default. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>AvailabilityStatus</code> for <code>ExportToCSVOption</code> - This
   *                     status can be either <code>ENABLED</code> or <code>DISABLED</code>. The visual
   *                     option to export data to .CSV format isn't enabled when this is set to
   *                     <code>DISABLED</code>. This option is <code>ENABLED</code> by default. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>VisibilityState</code> for <code>SheetControlsOption</code> - This
   *                     visibility state can be either <code>COLLAPSED</code> or <code>EXPANDED</code>.
   *                     This option is <code>COLLAPSED</code> by default. </p>
   *             </li>
   *          </ul>
   */
  DashboardPublishOptions?: DashboardPublishOptions;

  /**
   * <p>The Amazon Resource Name (ARN) of the theme that is being used for this dashboard. If
   *             you add a value for this field, it overrides the value that was originally associated
   *             with the entity. The theme ARN must exist in the same AWS account where you create the
   *             dashboard.</p>
   */
  ThemeArn?: string;
}

export namespace UpdateDashboardRequest {
  export const filterSensitiveLog = (obj: UpdateDashboardRequest): any => ({
    ...obj,
  });
}

export interface UpdateDashboardResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

  /**
   * <p>The ARN of the dashboard, including the version number.</p>
   */
  VersionArn?: string;

  /**
   * <p>The ID for the dashboard.</p>
   */
  DashboardId?: string;

  /**
   * <p>The creation status of the request.</p>
   */
  CreationStatus?: ResourceStatus | string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace UpdateDashboardResponse {
  export const filterSensitiveLog = (obj: UpdateDashboardResponse): any => ({
    ...obj,
  });
}

export interface UpdateDashboardPermissionsRequest {
  /**
   * <p>The ID of the AWS account that contains the dashboard whose permissions you're
   *             updating.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dashboard.</p>
   */
  DashboardId: string | undefined;

  /**
   * <p>The permissions that you want to grant on this resource.</p>
   */
  GrantPermissions?: ResourcePermission[];

  /**
   * <p>The permissions that you want to revoke from this resource.</p>
   */
  RevokePermissions?: ResourcePermission[];
}

export namespace UpdateDashboardPermissionsRequest {
  export const filterSensitiveLog = (obj: UpdateDashboardPermissionsRequest): any => ({
    ...obj,
  });
}

export interface UpdateDashboardPermissionsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the dashboard.</p>
   */
  DashboardArn?: string;

  /**
   * <p>The ID for the dashboard.</p>
   */
  DashboardId?: string;

  /**
   * <p>Information about the permissions on the dashboard.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export namespace UpdateDashboardPermissionsResponse {
  export const filterSensitiveLog = (obj: UpdateDashboardPermissionsResponse): any => ({
    ...obj,
  });
}

export interface UpdateDashboardPublishedVersionRequest {
  /**
   * <p>The ID of the AWS account that contains the dashboard that you're
   *             updating.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dashboard.</p>
   */
  DashboardId: string | undefined;

  /**
   * <p>The version number of the dashboard.</p>
   */
  VersionNumber: number | undefined;
}

export namespace UpdateDashboardPublishedVersionRequest {
  export const filterSensitiveLog = (obj: UpdateDashboardPublishedVersionRequest): any => ({
    ...obj,
  });
}

export interface UpdateDashboardPublishedVersionResponse {
  /**
   * <p>The ID for the dashboard.</p>
   */
  DashboardId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the dashboard.</p>
   */
  DashboardArn?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace UpdateDashboardPublishedVersionResponse {
  export const filterSensitiveLog = (obj: UpdateDashboardPublishedVersionResponse): any => ({
    ...obj,
  });
}

export interface UpdateDataSetRequest {
  /**
   * <p>The AWS account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dataset that you want to update. This ID is unique per AWS Region for each
   * 			AWS account.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The display name for the dataset.</p>
   */
  Name: string | undefined;

  /**
   * <p>Declares the physical tables that are available in the underlying data sources.</p>
   */
  PhysicalTableMap: { [key: string]: PhysicalTable } | undefined;

  /**
   * <p>Configures the combination and transformation of the data from the physical tables.</p>
   */
  LogicalTableMap?: { [key: string]: LogicalTable };

  /**
   * <p>Indicates whether you want to import the data into SPICE.</p>
   */
  ImportMode: DataSetImportMode | string | undefined;

  /**
   * <p>Groupings of columns that work together in certain QuickSight features. Currently, only geospatial hierarchy is supported.</p>
   */
  ColumnGroups?: ColumnGroup[];

  /**
   * <p>The row-level security configuration for the data you want to create.</p>
   */
  RowLevelPermissionDataSet?: RowLevelPermissionDataSet;

  /**
   * <p>A set of one or more definitions of a <code>
   *                <a>ColumnLevelPermissionRule</a>
   *             </code>.</p>
   */
  ColumnLevelPermissionRules?: ColumnLevelPermissionRule[];
}

export namespace UpdateDataSetRequest {
  export const filterSensitiveLog = (obj: UpdateDataSetRequest): any => ({
    ...obj,
    ...(obj.PhysicalTableMap && {
      PhysicalTableMap: Object.entries(obj.PhysicalTableMap).reduce(
        (acc: any, [key, value]: [string, PhysicalTable]) => ({
          ...acc,
          [key]: PhysicalTable.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
    ...(obj.LogicalTableMap && {
      LogicalTableMap: Object.entries(obj.LogicalTableMap).reduce(
        (acc: any, [key, value]: [string, LogicalTable]) => ({
          ...acc,
          [key]: LogicalTable.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
  });
}

export interface UpdateDataSetResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   */
  Arn?: string;

  /**
   * <p>The ID for the dataset that you want to create. This ID is unique per AWS Region for each AWS account.</p>
   */
  DataSetId?: string;

  /**
   * <p>The ARN for the ingestion, which is triggered as a result of dataset creation if the import
   * 			mode is SPICE.</p>
   */
  IngestionArn?: string;

  /**
   * <p>The ID of the ingestion, which is triggered as a result of dataset creation if the import
   * 			mode is SPICE.</p>
   */
  IngestionId?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export namespace UpdateDataSetResponse {
  export const filterSensitiveLog = (obj: UpdateDataSetResponse): any => ({
    ...obj,
  });
}

export interface UpdateDataSetPermissionsRequest {
  /**
   * <p>The AWS account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dataset whose permissions you want to update. This ID is unique per AWS
   * 			Region for each AWS account.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The resource permissions that you want to grant to the dataset.</p>
   */
  GrantPermissions?: ResourcePermission[];

  /**
   * <p>The resource permissions that you want to revoke from the dataset.</p>
   */
  RevokePermissions?: ResourcePermission[];
}

export namespace UpdateDataSetPermissionsRequest {
  export const filterSensitiveLog = (obj: UpdateDataSetPermissionsRequest): any => ({
    ...obj,
  });
}

export interface UpdateDataSetPermissionsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   */
  DataSetArn?: string;

  /**
   * <p>The ID for the dataset whose permissions you want to update. This ID is unique per AWS
   * 			Region for each AWS account.</p>
   */
  DataSetId?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export namespace UpdateDataSetPermissionsResponse {
  export const filterSensitiveLog = (obj: UpdateDataSetPermissionsResponse): any => ({
    ...obj,
  });
}

export interface UpdateDataSourceRequest {
  /**
   * <p>The AWS account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the data source. This ID is unique per AWS Region for each AWS account. </p>
   */
  DataSourceId: string | undefined;

  /**
   * <p>A display name for the data source.</p>
   */
  Name: string | undefined;

  /**
   * <p>The parameters that QuickSight uses to connect to your underlying source.</p>
   */
  DataSourceParameters?: DataSourceParameters;

  /**
   * <p>The credentials that QuickSight that uses to connect to your underlying source. Currently,
   * 			only credentials based on user name and password are supported.</p>
   */
  Credentials?: DataSourceCredentials;

  /**
   * <p>Use this parameter only when you want QuickSight to use a VPC connection when connecting to
   * 			your underlying source.</p>
   */
  VpcConnectionProperties?: VpcConnectionProperties;

  /**
   * <p>Secure Socket Layer (SSL) properties that apply when QuickSight connects to your underlying
   * 			source.</p>
   */
  SslProperties?: SslProperties;
}

export namespace UpdateDataSourceRequest {
  export const filterSensitiveLog = (obj: UpdateDataSourceRequest): any => ({
    ...obj,
    ...(obj.DataSourceParameters && {
      DataSourceParameters: DataSourceParameters.filterSensitiveLog(obj.DataSourceParameters),
    }),
    ...(obj.Credentials && { Credentials: SENSITIVE_STRING }),
  });
}

export interface UpdateDataSourceResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the data source.</p>
   */
  Arn?: string;

  /**
   * <p>The ID of the data source. This ID is unique per AWS Region for each AWS account.</p>
   */
  DataSourceId?: string;

  /**
   * <p>The update status of the data source's last update.</p>
   */
  UpdateStatus?: ResourceStatus | string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export namespace UpdateDataSourceResponse {
  export const filterSensitiveLog = (obj: UpdateDataSourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateDataSourcePermissionsRequest {
  /**
   * <p>The AWS account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the data source. This ID is unique per AWS Region for each AWS account. </p>
   */
  DataSourceId: string | undefined;

  /**
   * <p>A list of resource permissions that you want to grant on the data source.</p>
   */
  GrantPermissions?: ResourcePermission[];

  /**
   * <p>A list of resource permissions that you want to revoke on the data source.</p>
   */
  RevokePermissions?: ResourcePermission[];
}

export namespace UpdateDataSourcePermissionsRequest {
  export const filterSensitiveLog = (obj: UpdateDataSourcePermissionsRequest): any => ({
    ...obj,
  });
}

export interface UpdateDataSourcePermissionsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the data source.</p>
   */
  DataSourceArn?: string;

  /**
   * <p>The ID of the data source. This ID is unique per AWS Region for each AWS account.</p>
   */
  DataSourceId?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export namespace UpdateDataSourcePermissionsResponse {
  export const filterSensitiveLog = (obj: UpdateDataSourcePermissionsResponse): any => ({
    ...obj,
  });
}

export interface UpdateGroupRequest {
  /**
   * <p>The name of the group that you want to update.</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The description for the group that you want to update.</p>
   */
  Description?: string;

  /**
   * <p>The ID for the AWS account that the group is in. Currently, you use the ID for the AWS
   * 			account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   */
  Namespace: string | undefined;
}

export namespace UpdateGroupRequest {
  export const filterSensitiveLog = (obj: UpdateGroupRequest): any => ({
    ...obj,
  });
}

export interface UpdateGroupResponse {
  /**
   * <p>The name of the group.</p>
   */
  Group?: Group;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export namespace UpdateGroupResponse {
  export const filterSensitiveLog = (obj: UpdateGroupResponse): any => ({
    ...obj,
  });
}

export interface UpdateIAMPolicyAssignmentRequest {
  /**
   * <p>The ID of the AWS account that contains the IAM policy assignment. </p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The name of the assignment, also called a rule. This name must be unique within an AWS account.</p>
   */
  AssignmentName: string | undefined;

  /**
   * <p>The namespace of the assignment.</p>
   */
  Namespace: string | undefined;

  /**
   * <p>The status of the assignment. Possible values are as follows:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> - Anything specified in this assignment is used when creating the data
   * 				source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> - This assignment isn't used when creating the data source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DRAFT</code> - This assignment is an unfinished draft and isn't used when creating the
   * 				data source.</p>
   *             </li>
   *          </ul>
   */
  AssignmentStatus?: AssignmentStatus | string;

  /**
   * <p>The ARN for the IAM policy to apply to the QuickSight users and groups
   * 			specified in this assignment.</p>
   */
  PolicyArn?: string;

  /**
   * <p>The QuickSight users, groups, or both that you want to assign the policy to.</p>
   */
  Identities?: { [key: string]: string[] };
}

export namespace UpdateIAMPolicyAssignmentRequest {
  export const filterSensitiveLog = (obj: UpdateIAMPolicyAssignmentRequest): any => ({
    ...obj,
  });
}

export interface UpdateIAMPolicyAssignmentResponse {
  /**
   * <p>The name of the assignment or rule.</p>
   */
  AssignmentName?: string;

  /**
   * <p>The ID of the assignment.</p>
   */
  AssignmentId?: string;

  /**
   * <p>The ARN for the IAM policy applied to the QuickSight users and groups specified in this
   * 			assignment.</p>
   */
  PolicyArn?: string;

  /**
   * <p>The QuickSight users, groups, or both that the IAM policy is assigned to.</p>
   */
  Identities?: { [key: string]: string[] };

  /**
   * <p>The status of the assignment. Possible values are as follows:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> - Anything specified in this assignment is used when creating the data
   * 				source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> - This assignment isn't used when creating the data source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DRAFT</code> - This assignment is an unfinished draft and isn't used when creating the
   * 				data source.</p>
   *             </li>
   *          </ul>
   */
  AssignmentStatus?: AssignmentStatus | string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export namespace UpdateIAMPolicyAssignmentResponse {
  export const filterSensitiveLog = (obj: UpdateIAMPolicyAssignmentResponse): any => ({
    ...obj,
  });
}

export interface UpdateTemplateRequest {
  /**
   * <p>The ID of the AWS account that contains the template that you're updating.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the template.</p>
   */
  TemplateId: string | undefined;

  /**
   * <p>The entity that you are using as a source when you update the template. In
   * 			<code>SourceEntity</code>, you specify the type of object you're using as source:
   * 			<code>SourceTemplate</code> for a template or <code>SourceAnalysis</code> for an
   * 			analysis. Both of these require an Amazon Resource Name (ARN). For
   * 			<code>SourceTemplate</code>, specify the ARN of the source template. For
   * 			<code>SourceAnalysis</code>, specify the ARN of the source analysis. The <code>SourceTemplate</code>
   * 			ARN can contain any AWS Account and any QuickSight-supported AWS Region. </p>
   * 		       <p>Use the <code>DataSetReferences</code> entity within <code>SourceTemplate</code> or
   * 			<code>SourceAnalysis</code> to list the replacement datasets for the placeholders listed
   * 			in the original. The schema in each dataset must match its placeholder. </p>
   */
  SourceEntity: TemplateSourceEntity | undefined;

  /**
   * <p>A description of the current template version that is being updated. Every time you call
   * 				<code>UpdateTemplate</code>, you create a new version of the template. Each version
   * 			of the template maintains a description of the version in the
   * 				<code>VersionDescription</code> field.</p>
   */
  VersionDescription?: string;

  /**
   * <p>The name for the template.</p>
   */
  Name?: string;
}

export namespace UpdateTemplateRequest {
  export const filterSensitiveLog = (obj: UpdateTemplateRequest): any => ({
    ...obj,
  });
}

export interface UpdateTemplateResponse {
  /**
   * <p>The ID for the template.</p>
   */
  TemplateId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the template.</p>
   */
  Arn?: string;

  /**
   * <p>The ARN for the template, including the version information of the first version.</p>
   */
  VersionArn?: string;

  /**
   * <p>The creation status of the template.</p>
   */
  CreationStatus?: ResourceStatus | string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace UpdateTemplateResponse {
  export const filterSensitiveLog = (obj: UpdateTemplateResponse): any => ({
    ...obj,
  });
}

export interface UpdateTemplateAliasRequest {
  /**
   * <p>The ID of the AWS account that contains the template alias that you're updating.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the template.</p>
   */
  TemplateId: string | undefined;

  /**
   * <p>The alias of the template that you want to update. If you name a specific alias, you update
   * 			the version that the alias points to. You can specify the latest version of the template
   * 			by providing the keyword <code>$LATEST</code> in the <code>AliasName</code> parameter.
   * 			The keyword <code>$PUBLISHED</code> doesn't apply to templates.</p>
   */
  AliasName: string | undefined;

  /**
   * <p>The version number of the template.</p>
   */
  TemplateVersionNumber: number | undefined;
}

export namespace UpdateTemplateAliasRequest {
  export const filterSensitiveLog = (obj: UpdateTemplateAliasRequest): any => ({
    ...obj,
  });
}

export interface UpdateTemplateAliasResponse {
  /**
   * <p>The template alias.</p>
   */
  TemplateAlias?: TemplateAlias;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace UpdateTemplateAliasResponse {
  export const filterSensitiveLog = (obj: UpdateTemplateAliasResponse): any => ({
    ...obj,
  });
}

export interface UpdateTemplatePermissionsRequest {
  /**
   * <p>The ID of the AWS account that contains the template.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the template.</p>
   */
  TemplateId: string | undefined;

  /**
   * <p>A list of resource permissions to be granted on the template. </p>
   */
  GrantPermissions?: ResourcePermission[];

  /**
   * <p>A list of resource permissions to be revoked from the template. </p>
   */
  RevokePermissions?: ResourcePermission[];
}

export namespace UpdateTemplatePermissionsRequest {
  export const filterSensitiveLog = (obj: UpdateTemplatePermissionsRequest): any => ({
    ...obj,
  });
}

export interface UpdateTemplatePermissionsResponse {
  /**
   * <p>The ID for the template.</p>
   */
  TemplateId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the template.</p>
   */
  TemplateArn?: string;

  /**
   * <p>A list of resource permissions to be set on the template.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export namespace UpdateTemplatePermissionsResponse {
  export const filterSensitiveLog = (obj: UpdateTemplatePermissionsResponse): any => ({
    ...obj,
  });
}

export interface UpdateThemeRequest {
  /**
   * <p>The ID of the AWS account that contains the theme that you're updating.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the theme.</p>
   */
  ThemeId: string | undefined;

  /**
   * <p>The name for the theme.</p>
   */
  Name?: string;

  /**
   * <p>The theme ID, defined by Amazon QuickSight, that a custom theme inherits from.
   * 		All themes initially inherit from a default QuickSight theme.</p>
   */
  BaseThemeId: string | undefined;

  /**
   * <p>A description of the theme version that you're updating Every time that you call
   * 				<code>UpdateTheme</code>, you create a new version of the theme. Each version of the
   * 			theme maintains a description of the version in <code>VersionDescription</code>.</p>
   */
  VersionDescription?: string;

  /**
   * <p>The theme configuration, which contains the theme display properties.</p>
   */
  Configuration?: ThemeConfiguration;
}

export namespace UpdateThemeRequest {
  export const filterSensitiveLog = (obj: UpdateThemeRequest): any => ({
    ...obj,
  });
}

export interface UpdateThemeResponse {
  /**
   * <p>The ID for the theme.</p>
   */
  ThemeId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the theme.</p>
   */
  Arn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the new version of the theme.</p>
   */
  VersionArn?: string;

  /**
   * <p>The creation status of the theme.</p>
   */
  CreationStatus?: ResourceStatus | string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace UpdateThemeResponse {
  export const filterSensitiveLog = (obj: UpdateThemeResponse): any => ({
    ...obj,
  });
}

export interface UpdateThemeAliasRequest {
  /**
   * <p>The ID of the AWS account that contains the theme alias that you're updating.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the theme.</p>
   */
  ThemeId: string | undefined;

  /**
   * <p>The name of the theme alias that you want to update.</p>
   */
  AliasName: string | undefined;

  /**
   * <p>The version number of the theme that the alias should reference.</p>
   */
  ThemeVersionNumber: number | undefined;
}

export namespace UpdateThemeAliasRequest {
  export const filterSensitiveLog = (obj: UpdateThemeAliasRequest): any => ({
    ...obj,
  });
}

export interface UpdateThemeAliasResponse {
  /**
   * <p>Information about the theme alias.</p>
   */
  ThemeAlias?: ThemeAlias;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace UpdateThemeAliasResponse {
  export const filterSensitiveLog = (obj: UpdateThemeAliasResponse): any => ({
    ...obj,
  });
}

export interface UpdateThemePermissionsRequest {
  /**
   * <p>The ID of the AWS account that contains the theme.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the theme.</p>
   */
  ThemeId: string | undefined;

  /**
   * <p>A list of resource permissions to be granted for the theme.</p>
   */
  GrantPermissions?: ResourcePermission[];

  /**
   * <p>A list of resource permissions to be revoked from the theme.</p>
   */
  RevokePermissions?: ResourcePermission[];
}

export namespace UpdateThemePermissionsRequest {
  export const filterSensitiveLog = (obj: UpdateThemePermissionsRequest): any => ({
    ...obj,
  });
}

export interface UpdateThemePermissionsResponse {
  /**
   * <p>The ID for the theme.</p>
   */
  ThemeId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the theme.</p>
   */
  ThemeArn?: string;

  /**
   * <p>The resulting list of resource permissions for the theme.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export namespace UpdateThemePermissionsResponse {
  export const filterSensitiveLog = (obj: UpdateThemePermissionsResponse): any => ({
    ...obj,
  });
}

export interface UpdateUserRequest {
  /**
   * <p>The Amazon QuickSight user name that you want to update.</p>
   */
  UserName: string | undefined;

  /**
   * <p>The ID for the AWS account that the user is in. Currently, you use the ID for the AWS
   * 			account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   */
  Namespace: string | undefined;

  /**
   * <p>The email address of the user that you want to update.</p>
   */
  Email: string | undefined;

  /**
   * <p>The Amazon QuickSight role of the user. The role can be one of the
   * 			following default security cohorts:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>READER</code>: A user who has read-only access to dashboards.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>AUTHOR</code>: A user who can create data sources, datasets, analyses, and
   * 					dashboards.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>ADMIN</code>: A user who is an author, who can also manage Amazon QuickSight
   * 					settings.</p>
   * 			         </li>
   *          </ul>
   * 	        <p>The name of the QuickSight role is invisible to the user except for the console
   * 	        screens dealing with permissions.</p>
   */
  Role: UserRole | string | undefined;

  /**
   * <p>(Enterprise edition only) The name of the custom permissions profile that you want to
   *             assign to this user. Customized permissions allows you to control a user's access by
   *             restricting access the following operations:</p>
   *         <ul>
   *             <li>
   *                 <p>Create and update data sources</p>
   *             </li>
   *             <li>
   *                 <p>Create and update datasets</p>
   *             </li>
   *             <li>
   *                 <p>Create and update email reports</p>
   *             </li>
   *             <li>
   *                 <p>Subscribe to email reports</p>
   *             </li>
   *          </ul>
   *         <p>A set of custom permissions includes any combination of these restrictions. Currently,
   *             you need to create the profile names for custom permission sets by using the QuickSight
   *             console. Then, you use the <code>RegisterUser</code> API operation to assign the named set of
   *             permissions to a QuickSight user. </p>
   *         <p>QuickSight custom permissions are applied through IAM policies. Therefore, they
   *             override the permissions typically granted by assigning QuickSight users to one of the
   *             default security cohorts in QuickSight (admin, author, reader).</p>
   *         <p>This feature is available only to QuickSight Enterprise edition subscriptions that use
   *             SAML 2.0-Based Federation for Single Sign-On (SSO).</p>
   */
  CustomPermissionsName?: string;

  /**
   * <p>A flag that you use to indicate that you want to remove all custom permissions
   *             from this user. Using this parameter resets the user to the state
   *             it was in before a custom permissions profile was applied. This parameter defaults to
   *             NULL and it doesn't accept any other value.</p>
   */
  UnapplyCustomPermissions?: boolean;
}

export namespace UpdateUserRequest {
  export const filterSensitiveLog = (obj: UpdateUserRequest): any => ({
    ...obj,
  });
}

export interface UpdateUserResponse {
  /**
   * <p>The Amazon QuickSight user.</p>
   */
  User?: User;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export namespace UpdateUserResponse {
  export const filterSensitiveLog = (obj: UpdateUserResponse): any => ({
    ...obj,
  });
}
