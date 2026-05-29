// smithy-typescript generated code
import type {
  PurchaseMode,
  ResourceStatus,
  SelfUpgradeAdminAction,
  SelfUpgradeStatus,
  UserRole,
  VisualRole,
  VPCConnectionAvailabilityStatus,
  VPCConnectionResourceStatus,
} from "./enums";
import type { ResourcePermission, TopicIR, TopicTemplate, ValidationStrategy } from "./models_2";
import type {
  CustomInstructions,
  TemplateAlias,
  TemplateSourceEntity,
  TemplateVersionDefinition,
  ThemeAlias,
  ThemeConfiguration,
  TopicDetails,
  TopicRefreshSchedule,
} from "./models_3";
import type { SelfUpgradeRequestDetail, User } from "./models_4";

/**
 * @public
 */
export interface UpdateRoleCustomPermissionResponse {
  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface UpdateSelfUpgradeRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the self-upgrade request.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The Quick namespace for the self-upgrade request.</p>
   * @public
   */
  Namespace: string | undefined;

  /**
   * <p>The ID of the self-upgrade request to update.</p>
   * @public
   */
  UpgradeRequestId: string | undefined;

  /**
   * <p>The action to perform on the self-upgrade request. Valid values are <code>APPROVE</code>, <code>DENY</code>, or <code>VERIFY</code>.</p>
   * @public
   */
  Action: SelfUpgradeAdminAction | undefined;
}

/**
 * @public
 */
export interface UpdateSelfUpgradeResponse {
  /**
   * <p>Details of the updated self-upgrade request.</p>
   * @public
   */
  SelfUpgradeRequestDetail?: SelfUpgradeRequestDetail | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface UpdateSelfUpgradeConfigurationRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the Quick self-upgrade configuration that you want to update.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The Quick namespace that you want to update the Quick self-upgrade configuration for.</p>
   * @public
   */
  Namespace: string | undefined;

  /**
   * <p>The self-upgrade status that you want to set for the Quick account.</p>
   * @public
   */
  SelfUpgradeStatus: SelfUpgradeStatus | undefined;
}

/**
 * @public
 */
export interface UpdateSelfUpgradeConfigurationResponse {
  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface UpdateSPICECapacityConfigurationRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the SPICE configuration that you want to update.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>Determines how SPICE capacity can be purchased. The following options are available. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>MANUAL</code>: SPICE capacity can only be purchased manually.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AUTO_PURCHASE</code>: Extra SPICE capacity is automatically purchased on your behalf as needed. SPICE capacity can also be purchased manually with this option.</p>
   *             </li>
   *          </ul>
   * @public
   */
  PurchaseMode: PurchaseMode | undefined;
}

/**
 * @public
 */
export interface UpdateSPICECapacityConfigurationResponse {
  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface UpdateTemplateRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the template that you're updating.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the template.</p>
   * @public
   */
  TemplateId: string | undefined;

  /**
   * <p>The entity that you are using as a source when you update the template. In
   * 			<code>SourceEntity</code>, you specify the type of object you're using as source:
   * 			<code>SourceTemplate</code> for a template or <code>SourceAnalysis</code> for an
   * 			analysis. Both of these require an Amazon Resource Name (ARN). For
   * 			<code>SourceTemplate</code>, specify the ARN of the source template. For
   * 			<code>SourceAnalysis</code>, specify the ARN of the source analysis. The <code>SourceTemplate</code>
   * 			ARN can contain any Amazon Web Services account and any Quick Sight-supported Amazon Web Services Region;. </p>
   *          <p>Use the <code>DataSetReferences</code> entity within <code>SourceTemplate</code> or
   * 			<code>SourceAnalysis</code> to list the replacement datasets for the placeholders listed
   * 			in the original. The schema in each dataset must match its placeholder. </p>
   * @public
   */
  SourceEntity?: TemplateSourceEntity | undefined;

  /**
   * <p>A description of the current template version that is being updated. Every time you call
   * 				<code>UpdateTemplate</code>, you create a new version of the template. Each version
   * 			of the template maintains a description of the version in the
   * 				<code>VersionDescription</code> field.</p>
   * @public
   */
  VersionDescription?: string | undefined;

  /**
   * <p>The name for the template.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The definition of a template.</p>
   *          <p>A definition is the data model of all features in a Dashboard, Template, or Analysis.</p>
   * @public
   */
  Definition?: TemplateVersionDefinition | undefined;

  /**
   * <p>The option to relax the validation needed to update a template with definition objects. This skips the validation step for specific errors.</p>
   * @public
   */
  ValidationStrategy?: ValidationStrategy | undefined;
}

/**
 * @public
 */
export interface UpdateTemplateResponse {
  /**
   * <p>The ID for the template.</p>
   * @public
   */
  TemplateId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the template.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ARN for the template, including the version information of the first version.</p>
   * @public
   */
  VersionArn?: string | undefined;

  /**
   * <p>The creation status of the template.</p>
   * @public
   */
  CreationStatus?: ResourceStatus | undefined;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateTemplateAliasRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the template alias that you're updating.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the template.</p>
   * @public
   */
  TemplateId: string | undefined;

  /**
   * <p>The alias of the template that you want to update. If you name a specific alias, you update
   * 			the version that the alias points to. You can specify the latest version of the template
   * 			by providing the keyword <code>$LATEST</code> in the <code>AliasName</code> parameter.
   * 			The keyword <code>$PUBLISHED</code> doesn't apply to templates.</p>
   * @public
   */
  AliasName: string | undefined;

  /**
   * <p>The version number of the template.</p>
   * @public
   */
  TemplateVersionNumber: number | undefined;
}

/**
 * @public
 */
export interface UpdateTemplateAliasResponse {
  /**
   * <p>The template alias.</p>
   * @public
   */
  TemplateAlias?: TemplateAlias | undefined;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateTemplatePermissionsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the template.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the template.</p>
   * @public
   */
  TemplateId: string | undefined;

  /**
   * <p>A list of resource permissions to be granted on the template. </p>
   * @public
   */
  GrantPermissions?: ResourcePermission[] | undefined;

  /**
   * <p>A list of resource permissions to be revoked from the template. </p>
   * @public
   */
  RevokePermissions?: ResourcePermission[] | undefined;
}

/**
 * @public
 */
export interface UpdateTemplatePermissionsResponse {
  /**
   * <p>The ID for the template.</p>
   * @public
   */
  TemplateId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the template.</p>
   * @public
   */
  TemplateArn?: string | undefined;

  /**
   * <p>A list of resource permissions to be set on the template.</p>
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface UpdateThemeRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the theme that you're updating.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the theme.</p>
   * @public
   */
  ThemeId: string | undefined;

  /**
   * <p>The name for the theme.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The theme ID, defined by Amazon Quick Sight, that a custom theme inherits from.
   * 		All themes initially inherit from a default Quick Sight theme.</p>
   * @public
   */
  BaseThemeId: string | undefined;

  /**
   * <p>A description of the theme version that you're updating Every time that you call
   * 				<code>UpdateTheme</code>, you create a new version of the theme. Each version of the
   * 			theme maintains a description of the version in <code>VersionDescription</code>.</p>
   * @public
   */
  VersionDescription?: string | undefined;

  /**
   * <p>The theme configuration, which contains the theme display properties.</p>
   * @public
   */
  Configuration?: ThemeConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateThemeResponse {
  /**
   * <p>The ID for the theme.</p>
   * @public
   */
  ThemeId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the theme.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the new version of the theme.</p>
   * @public
   */
  VersionArn?: string | undefined;

  /**
   * <p>The creation status of the theme.</p>
   * @public
   */
  CreationStatus?: ResourceStatus | undefined;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateThemeAliasRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the theme alias that you're updating.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the theme.</p>
   * @public
   */
  ThemeId: string | undefined;

  /**
   * <p>The name of the theme alias that you want to update.</p>
   * @public
   */
  AliasName: string | undefined;

  /**
   * <p>The version number of the theme that the alias should reference.</p>
   * @public
   */
  ThemeVersionNumber: number | undefined;
}

/**
 * @public
 */
export interface UpdateThemeAliasResponse {
  /**
   * <p>Information about the theme alias.</p>
   * @public
   */
  ThemeAlias?: ThemeAlias | undefined;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateThemePermissionsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the theme.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the theme.</p>
   * @public
   */
  ThemeId: string | undefined;

  /**
   * <p>A list of resource permissions to be granted for the theme.</p>
   * @public
   */
  GrantPermissions?: ResourcePermission[] | undefined;

  /**
   * <p>A list of resource permissions to be revoked from the theme.</p>
   * @public
   */
  RevokePermissions?: ResourcePermission[] | undefined;
}

/**
 * @public
 */
export interface UpdateThemePermissionsResponse {
  /**
   * <p>The ID for the theme.</p>
   * @public
   */
  ThemeId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the theme.</p>
   * @public
   */
  ThemeArn?: string | undefined;

  /**
   * <p>The resulting list of resource permissions for the theme.</p>
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface UpdateTopicRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the topic that you want to
   *          update.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the topic that you want to modify. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  TopicId: string | undefined;

  /**
   * <p>The definition of the topic that you want to update.</p>
   * @public
   */
  Topic: TopicDetails | undefined;

  /**
   * <p>Custom instructions for the topic.</p>
   * @public
   */
  CustomInstructions?: CustomInstructions | undefined;
}

/**
 * @public
 */
export interface UpdateTopicResponse {
  /**
   * <p>The ID of the topic that you want to modify. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  TopicId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the topic.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the topic refresh.</p>
   * @public
   */
  RefreshArn?: string | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface UpdateTopicPermissionsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the topic that you want to update
   *          the permissions for.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the topic that you want to modify. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  TopicId: string | undefined;

  /**
   * <p>The resource permissions that you want to grant to the topic.</p>
   * @public
   */
  GrantPermissions?: ResourcePermission[] | undefined;

  /**
   * <p>The resource permissions that you want to revoke from the topic.</p>
   * @public
   */
  RevokePermissions?: ResourcePermission[] | undefined;
}

/**
 * @public
 */
export interface UpdateTopicPermissionsResponse {
  /**
   * <p>The ID of the topic that you want to modify. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  TopicId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the topic.</p>
   * @public
   */
  TopicArn?: string | undefined;

  /**
   * <p>A list of resource permissions on the topic.</p>
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateTopicRefreshScheduleRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the topic whose refresh schedule
   *          you want to update.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the topic that you want to modify. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  TopicId: string | undefined;

  /**
   * <p>The ID of the dataset.</p>
   * @public
   */
  DatasetId: string | undefined;

  /**
   * <p>The definition of a refresh schedule.</p>
   * @public
   */
  RefreshSchedule: TopicRefreshSchedule | undefined;
}

/**
 * @public
 */
export interface UpdateTopicRefreshScheduleResponse {
  /**
   * <p>The ID of the topic that you want to modify. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  TopicId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the topic.</p>
   * @public
   */
  TopicArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   * @public
   */
  DatasetArn?: string | undefined;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateUserRequest {
  /**
   * <p>The Amazon Quick Sight user name that you want to update.</p>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>The ID for the Amazon Web Services account that the user is in. Currently, you use the ID for the
   * 			Amazon Web Services account that contains your Amazon Quick Sight account.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   * @public
   */
  Namespace: string | undefined;

  /**
   * <p>The email address of the user that you want to update.</p>
   * @public
   */
  Email: string | undefined;

  /**
   * <p>The Amazon Quick Sight role of the user. The role can be one of the
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
   *                   <code>ADMIN</code>: A user who is an author, who can also manage Amazon Quick Sight
   * 					settings.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>READER_PRO</code>: Reader Pro adds Generative BI capabilities to the Reader role. Reader Pros have access to Amazon Q in Quick Sight, can build stories with Amazon Q, and can generate executive summaries from dashboards.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AUTHOR_PRO</code>: Author Pro adds Generative BI capabilities to the Author role. Author Pros can author dashboards with natural language with Amazon Q, build stories with Amazon Q, create Topics for Q&A, and generate executive summaries from dashboards.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ADMIN_PRO</code>: Admin Pros are Author Pros who can also manage Amazon Quick Sight administrative settings. Admin Pro users are billed at Author Pro pricing.</p>
   *             </li>
   *          </ul>
   *          <p>The name of the Quick Sight role is invisible to the user except for the console
   * 	        screens dealing with permissions.</p>
   * @public
   */
  Role: UserRole | undefined;

  /**
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
   *             you need to create the profile names for custom permission sets by using the Quick Sight
   *             console. Then, you use the <code>RegisterUser</code> API operation to assign the named set of
   *             permissions to a Quick Sight user. </p>
   *          <p>Quick Sight custom permissions are applied through IAM policies. Therefore, they
   *             override the permissions typically granted by assigning Quick Sight users to one of the
   *             default security cohorts in Quick Sight (admin, author, reader).</p>
   *          <p>This feature is available only to Quick Sight Enterprise edition subscriptions.</p>
   * @public
   */
  CustomPermissionsName?: string | undefined;

  /**
   * <p>A flag that you use to indicate that you want to remove all custom permissions
   *             from this user. Using this parameter resets the user to the state
   *             it was in before a custom permissions profile was applied. This parameter defaults to
   *             NULL and it doesn't accept any other value.</p>
   * @public
   */
  UnapplyCustomPermissions?: boolean | undefined;

  /**
   * <p>The type of supported external login provider that provides identity to let a user federate into Quick Sight with an associated Identity and Access Management(IAM) role. The type of supported external login provider can be one of the following.</p>
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
   * @public
   */
  ExternalLoginFederationProviderType?: string | undefined;

  /**
   * <p>The URL of the custom OpenID Connect (OIDC) provider that provides identity to let a user federate
   *          into Quick Sight with an associated Identity and Access Management(IAM) role. This parameter should
   *          only be used when <code>ExternalLoginFederationProviderType</code> parameter is set to <code>CUSTOM_OIDC</code>.</p>
   * @public
   */
  CustomFederationProviderUrl?: string | undefined;

  /**
   * <p>The identity ID for a user in the external login provider.</p>
   * @public
   */
  ExternalLoginId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateUserResponse {
  /**
   * <p>The Amazon Quick Sight user.</p>
   * @public
   */
  User?: User | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface UpdateUserCustomPermissionRequest {
  /**
   * <p>The username of the user that you want to update custom permissions for.</p>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that contains the custom permission configuration that you want to update.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace that the user belongs to.</p>
   * @public
   */
  Namespace: string | undefined;

  /**
   * <p>The name of the custom permissions that you want to update.</p>
   * @public
   */
  CustomPermissionsName: string | undefined;
}

/**
 * @public
 */
export interface UpdateUserCustomPermissionResponse {
  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface UpdateVPCConnectionRequest {
  /**
   * <p>The Amazon Web Services account ID of the account that contains the VPC connection that
   * 			you want to update.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the VPC connection that
   * 			you're updating. This ID is a unique identifier for each Amazon Web Services Region in an
   * 				Amazon Web Services account.</p>
   * @public
   */
  VPCConnectionId: string | undefined;

  /**
   * <p>The display name for the VPC connection.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A list of subnet IDs for the VPC connection.</p>
   * @public
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>A list of security group IDs for the VPC connection.</p>
   * @public
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * <p>A list of IP addresses of DNS resolver endpoints for the VPC connection.</p>
   * @public
   */
  DnsResolvers?: string[] | undefined;

  /**
   * <p>An IAM role associated with the VPC connection.</p>
   * @public
   */
  RoleArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateVPCConnectionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the VPC connection.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID of the VPC connection that you are updating. This ID is a unique identifier for each Amazon Web Services Region in anAmazon Web Services account.</p>
   * @public
   */
  VPCConnectionId?: string | undefined;

  /**
   * <p>The update status of the VPC connection's last update.</p>
   * @public
   */
  UpdateStatus?: VPCConnectionResourceStatus | undefined;

  /**
   * <p>The availability status of the VPC connection.</p>
   * @public
   */
  AvailabilityStatus?: VPCConnectionAvailabilityStatus | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;
}

/**
 * <p>The definition for a <code>TopicVisual</code>.</p>
 * @public
 */
export interface TopicVisual {
  /**
   * <p>The visual ID for the <code>TopicVisual</code>.</p>
   * @public
   */
  VisualId?: string | undefined;

  /**
   * <p>The role for the <code>TopicVisual</code>.</p>
   * @public
   */
  Role?: VisualRole | undefined;

  /**
   * <p>The ir for the <code>TopicVisual</code>.</p>
   * @public
   */
  Ir?: TopicIR | undefined;

  /**
   * <p>The supporting visuals for the <code>TopicVisual</code>.</p>
   * @public
   */
  SupportingVisuals?: TopicVisual[] | undefined;
}

/**
 * <p>The definition for a <code>CreateTopicReviewedAnswer</code>.</p>
 * @public
 */
export interface CreateTopicReviewedAnswer {
  /**
   * <p>The answer ID for the <code>CreateTopicReviewedAnswer</code>.</p>
   * @public
   */
  AnswerId: string | undefined;

  /**
   * <p>The Dataset arn for the <code>CreateTopicReviewedAnswer</code>.</p>
   * @public
   */
  DatasetArn: string | undefined;

  /**
   * <p>The Question to be created.</p>
   * @public
   */
  Question: string | undefined;

  /**
   * <p>The Mir for the <code>CreateTopicReviewedAnswer</code>.</p>
   * @public
   */
  Mir?: TopicIR | undefined;

  /**
   * <p>The <code>PrimaryVisual</code> for the <code>CreateTopicReviewedAnswer</code>.</p>
   * @public
   */
  PrimaryVisual?: TopicVisual | undefined;

  /**
   * <p>The template for the <code>CreateTopicReviewedAnswer</code>.</p>
   * @public
   */
  Template?: TopicTemplate | undefined;
}

/**
 * <p>The deinition for a <code>TopicReviewedAnswer</code>.</p>
 * @public
 */
export interface TopicReviewedAnswer {
  /**
   * <p>The Amazon Resource Name (ARN) of the reviewed answer.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The answer ID of the reviewed answer.</p>
   * @public
   */
  AnswerId: string | undefined;

  /**
   * <p>The Dataset ARN for the <code>TopicReviewedAnswer</code>.</p>
   * @public
   */
  DatasetArn: string | undefined;

  /**
   * <p>The question for the <code>TopicReviewedAnswer</code>.</p>
   * @public
   */
  Question: string | undefined;

  /**
   * <p>The mir for the <code>TopicReviewedAnswer</code>.</p>
   * @public
   */
  Mir?: TopicIR | undefined;

  /**
   * <p>The primary visual for the <code>TopicReviewedAnswer</code>.</p>
   * @public
   */
  PrimaryVisual?: TopicVisual | undefined;

  /**
   * <p>The template for the <code>TopicReviewedAnswer</code>.</p>
   * @public
   */
  Template?: TopicTemplate | undefined;
}

/**
 * @public
 */
export interface BatchCreateTopicReviewedAnswerRequest {
  /**
   * <p>The ID of the Amazon Web Services account that you want to create a reviewed answer in.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the topic reviewed answer that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  TopicId: string | undefined;

  /**
   * <p>The definition of the Answers to be created.</p>
   * @public
   */
  Answers: CreateTopicReviewedAnswer[] | undefined;
}

/**
 * @public
 */
export interface ListTopicReviewedAnswersResponse {
  /**
   * <p>The ID for the topic that contains the reviewed answer that you want to list. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  TopicId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the topic.</p>
   * @public
   */
  TopicArn?: string | undefined;

  /**
   * <p>The definition of all Answers in the topic.</p>
   * @public
   */
  Answers?: TopicReviewedAnswer[] | undefined;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;
}
