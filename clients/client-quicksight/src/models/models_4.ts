// smithy-typescript generated code
import { SENSITIVE_STRING } from "@smithy/smithy-client";

import { ResourceStatus } from "./models_0";
import {
  AssignmentStatus,
  ColumnGroup,
  ColumnLevelPermissionRule,
  DataSetImportMode,
  DatasetParameter,
  DataSetUsageConfiguration,
  DataSourceCredentials,
  DataSourceParameters,
  FieldFolder,
  Group,
  LogicalTable,
  LogicalTableFilterSensitiveLog,
  PhysicalTable,
  RefreshSchedule,
  ResourcePermission,
  RowLevelPermissionDataSet,
  RowLevelPermissionTagConfiguration,
  RowLevelPermissionTagConfigurationFilterSensitiveLog,
  SslProperties,
  TemplateAlias,
  TemplateSourceEntity,
  TemplateVersionDefinition,
  ThemeAlias,
  ThemeConfiguration,
  TopicDetails,
  TopicRefreshSchedule,
  VPCConnectionAvailabilityStatus,
  VpcConnectionProperties,
  VPCConnectionResourceStatus,
} from "./models_2";
import { LinkSharingConfiguration, User, UserRole } from "./models_3";

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
  ImportMode: DataSetImportMode | string | undefined;

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
  UpdateStatus?: ResourceStatus | string;

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
  AssignmentStatus?: AssignmentStatus | string;

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
  AssignmentStatus?: AssignmentStatus | string;

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
  CreationStatus?: ResourceStatus | string;

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
  CreationStatus?: ResourceStatus | string;

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
  Role: UserRole | string | undefined;

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
  UpdateStatus?: VPCConnectionResourceStatus | string;

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
