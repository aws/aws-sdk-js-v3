// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import {
  AccountCustomization,
  ActionConnectorSearchFilter,
  ActionConnectorSummary,
  ActiveIAMPolicyAssignment,
  ResourceStatus,
} from "./models_0";

import {
  AnalysisDefinition,
  AnalysisSearchFilter,
  AnalysisSourceEntity,
  AnalysisSummary,
  AssetBundleCloudFormationOverridePropertyConfiguration,
  AssetBundleExportFormat,
  AssetBundleExportJobSummary,
  AssetBundleExportJobValidationStrategy,
  AssetBundleImportFailureAction,
  AssetBundleImportJobOverrideParameters,
  AssetBundleImportJobOverridePermissions,
  AssetBundleImportJobOverrideTags,
  AssetBundleImportJobOverrideValidationStrategy,
  AssetBundleImportJobSummary,
  AssetBundleImportSource,
  AssignmentStatus,
  AuthConfig,
  AuthorizedTargetsByService,
  DataSetRefreshProperties,
  DataSourceParameters,
  ServiceType,
  SslProperties,
  Tag,
  VpcConnectionProperties,
} from "./models_2";

import {
  _Parameters,
  BrandDefinition,
  BrandDetail,
  BrandSummary,
  Capabilities,
  ColumnGroup,
  ColumnLevelPermissionRule,
  CustomInstructions,
  DashboardPublishOptions,
  DashboardSourceEntity,
  DashboardVersionDefinition,
  DataPrepConfiguration,
  DataSetImportMode,
  DatasetParameter,
  DataSetUsageConfiguration,
  DataSourceCredentials,
  FieldFolder,
  Group,
  GroupMember,
  LinkSharingConfiguration,
  LogicalTable,
  PerformanceConfiguration,
  PhysicalTable,
  RefreshSchedule,
  ResourcePermission,
  Role,
  RowLevelPermissionDataSet,
  RowLevelPermissionTagConfiguration,
  SemanticModelConfiguration,
  TemplateAlias,
  TemplateSourceEntity,
  TemplateVersionDefinition,
  ThemeAlias,
  ThemeConfiguration,
  TopicIR,
  TopicTemplate,
  ValidationStrategy,
  VisualRole,
} from "./models_3";

import {
  CustomPermissions,
  DashboardSearchFilter,
  DashboardsQAStatus,
  DashboardSummary,
  DashboardVersionSummary,
  DashboardVisualResult,
  DataSetSearchFilter,
  DataSetSummary,
  DataSource,
  DataSourceSearchFilter,
  DataSourceSummary,
  EmbeddingIdentityType,
  FailedKeyRegistrationEntry,
  FieldName,
  FlowPublishState,
  FlowSummary,
  FolderSearchFilter,
  FolderSummary,
  GeneratedAnswerResult,
  IdentityType,
  IncludeFolderMembers,
  Ingestion,
  MemberIdArnPair,
  NamespaceInfoV2,
  NetworkInterface,
  PersonalizationMode,
  QSearchStatus,
  RegisteredCustomerManagedKey,
  RegisteredUserConsoleFeatureConfigurations,
  RegisteredUserDashboardEmbeddingConfiguration,
  RegisteredUserDashboardVisualEmbeddingConfiguration,
  RegisteredUserGenerativeQnAEmbeddingConfiguration,
  RegisteredUserQSearchBarEmbeddingConfiguration,
  SessionTag,
  SnapshotConfiguration,
  ThemeType,
  TopicDetails,
  TopicRefreshSchedule,
  TopicUserExperienceVersion,
  User,
  UserRole,
  VPCConnectionAvailabilityStatus,
  VPCConnectionResourceStatus,
} from "./models_4";

import { QuickSightServiceException as __BaseException } from "./QuickSightServiceException";

/**
 * <p>Information about the Amazon Quick Sight console that you want to embed.</p>
 * @public
 */
export interface RegisteredUserQuickSightConsoleEmbeddingConfiguration {
  /**
   * <p>The initial URL path for the Amazon Quick Sight console. <code>InitialPath</code> is
   *             required.</p>
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
   *                   <code>/dashboards/DashboardId</code>. <i>DashboardId</i> is the
   *                     actual ID key from the Amazon Quick Sight console URL of the dashboard.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/analyses/AnalysisId</code>. <i>AnalysisId</i> is the
   *                     actual ID key from the Amazon Quick Sight console URL of the analysis.</p>
   *             </li>
   *          </ul>
   * @public
   */
  InitialPath?: string | undefined;

  /**
   * <p>The embedding configuration of an embedded Amazon Quick Sight console.</p>
   * @public
   */
  FeatureConfigurations?: RegisteredUserConsoleFeatureConfigurations | undefined;
}

/**
 * <p>The type of experience you want to embed. For registered users, you can embed Quick Suite dashboards or the Amazon Quick Sight console.</p>
 *          <note>
 *             <p>Exactly one of the experience configurations is required. You can choose
 *                     <code>Dashboard</code> or <code>QuickSightConsole</code>. You cannot choose more
 *                 than one experience configuration.</p>
 *          </note>
 * @public
 */
export interface RegisteredUserEmbeddingExperienceConfiguration {
  /**
   * <p>The configuration details for providing a dashboard embedding experience.</p>
   * @public
   */
  Dashboard?: RegisteredUserDashboardEmbeddingConfiguration | undefined;

  /**
   * <p>The configuration details for providing each Amazon Quick Sight console embedding
   *             experience. This can be used along with custom permissions to restrict access to certain
   *             features. For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/customizing-permissions-to-the-quicksight-console.html">Customizing Access to the Amazon Quick Sight Console</a> in the
   *                     <i>Amazon Quick Suite User Guide</i>.</p>
   *          <p>Use <code>
   *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_GenerateEmbedUrlForRegisteredUser.html">GenerateEmbedUrlForRegisteredUser</a>
   *             </code> where you want to provide an
   *             authoring portal that allows users to create data sources, datasets, analyses, and
   *             dashboards. The users who accesses an embedded Amazon Quick Sight console needs to belong
   *             to the author or admin security cohort. If you want to restrict permissions to some of
   *             these features, add a custom permissions profile to the user with the <code>
   *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateUser.html">UpdateUser</a>
   *             </code> API operation. Use the <code>
   *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_RegisterUser.html">RegisterUser</a>
   *             </code> API operation to add a new user with a custom
   *             permission profile attached. For more information, see the following sections in the
   *                     <i>Amazon Quick Suite User Guide</i>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/quicksight/latest/user/embedded-analytics-full-console-for-authenticated-users.html">Embedding the Full Functionality of the Amazon Quick Sight Console for
   *                         Authenticated Users</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/quicksight/latest/user/customizing-permissions-to-the-quicksight-console.html">Customizing Access to the Amazon Quick Suite Console</a>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information about the high-level steps for embedding and for an interactive
   *             demo of the ways you can customize embedding, visit the <a href="https://docs.aws.amazon.com/quicksight/latest/user/quicksight-dev-portal.html">Amazon Quick Suite
   *                 Developer Portal</a>.</p>
   * @public
   */
  QuickSightConsole?: RegisteredUserQuickSightConsoleEmbeddingConfiguration | undefined;

  /**
   * <p>The configuration details for embedding the Q search bar.</p>
   *          <p>For more information about embedding the Q search bar, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/embedding-overview.html">Embedding Overview</a> in
   *             the <i>Amazon Quick Sight User Guide</i>.</p>
   * @public
   */
  QSearchBar?: RegisteredUserQSearchBarEmbeddingConfiguration | undefined;

  /**
   * <p>The type of embedding experience. In this case, Amazon Quick Sight visuals.</p>
   * @public
   */
  DashboardVisual?: RegisteredUserDashboardVisualEmbeddingConfiguration | undefined;

  /**
   * <p>The configuration details for embedding the Generative Q&A experience.</p>
   *          <p>For more information about embedding the Generative Q&A experience, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/embedding-overview.html">Embedding Overview</a> in
   *             the <i>Amazon Quick Sight User Guide</i>.</p>
   * @public
   */
  GenerativeQnA?: RegisteredUserGenerativeQnAEmbeddingConfiguration | undefined;
}

/**
 * @public
 */
export interface GenerateEmbedUrlForRegisteredUserRequest {
  /**
   * <p>The ID for the Amazon Web Services account that contains the dashboard that you're
   *             embedding.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>How many minutes the session is valid. The session lifetime must be in [15-600]
   *             minutes range.</p>
   * @public
   */
  SessionLifetimeInMinutes?: number | undefined;

  /**
   * <p>The Amazon Resource Name for the registered user.</p>
   * @public
   */
  UserArn: string | undefined;

  /**
   * <p>The experience that you want to embed. For registered users, you can embed Quick Suite dashboards, Amazon Quick Sight visuals, the Amazon Quick Sight Q search bar,
   *             the Amazon Quick Sight Generative Q&A experience, or the entire Amazon Quick Sight console.</p>
   * @public
   */
  ExperienceConfiguration: RegisteredUserEmbeddingExperienceConfiguration | undefined;

  /**
   * <p>The domains that you want to add to the allow list for access to the generated URL
   *             that is then embedded. This optional parameter overrides the static domains that are
   *             configured in the Manage Quick Sight menu in the Amazon Quick Sight console. Instead, it
   *             allows only the domains that you include in this parameter. You can list up to three
   *             domains or subdomains in each API call.</p>
   *          <p>To include all subdomains under a specific domain to the allow list, use
   *                 <code>*</code>. For example, <code>https://*.sapp.amazon.com</code> includes all
   *             subdomains under <code>https://sapp.amazon.com</code>.</p>
   * @public
   */
  AllowedDomains?: string[] | undefined;
}

/**
 * @public
 */
export interface GenerateEmbedUrlForRegisteredUserResponse {
  /**
   * <p>The embed URL for the Amazon Quick Sight dashboard, visual, Q search bar, Generative Q&A experience, or
   *             console.</p>
   * @public
   */
  EmbedUrl: string | undefined;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status: number | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId: string | undefined;
}

/**
 * <p>The user with the provided name isn't found. This error can happen in any operation
 * 			that requires finding a user based on a provided user name, such as
 * 				<code>DeleteUser</code>, <code>DescribeUser</code>, and so on.</p>
 * @public
 */
export class QuickSightUserNotFoundException extends __BaseException {
  readonly name: "QuickSightUserNotFoundException" = "QuickSightUserNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * <p>The Amazon Web Services request ID for this request.</p>
   * @public
   */
  RequestId?: string | undefined;
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
export interface GenerateEmbedUrlForRegisteredUserWithIdentityRequest {
  /**
   * <p>The ID of the Amazon Web Services registered user.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The validity of the session in minutes.</p>
   * @public
   */
  SessionLifetimeInMinutes?: number | undefined;

  /**
   * <p>The type of experience you want to embed. For registered users, you can embed Quick Suite dashboards or the Amazon Quick Sight console.</p>
   *          <note>
   *             <p>Exactly one of the experience configurations is required. You can choose
   *                     <code>Dashboard</code> or <code>QuickSightConsole</code>. You cannot choose more
   *                 than one experience configuration.</p>
   *          </note>
   * @public
   */
  ExperienceConfiguration: RegisteredUserEmbeddingExperienceConfiguration | undefined;

  /**
   * <p>A list of domains to be allowed to generate the embed URL.</p>
   * @public
   */
  AllowedDomains?: string[] | undefined;
}

/**
 * @public
 */
export interface GenerateEmbedUrlForRegisteredUserWithIdentityResponse {
  /**
   * <p>The generated embed URL for the registered user.</p>
   * @public
   */
  EmbedUrl: string | undefined;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status: number | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId: string | undefined;
}

/**
 * @public
 */
export interface GetDashboardEmbedUrlRequest {
  /**
   * <p>The ID for the Amazon Web Services account that contains the dashboard that you're
   *             embedding.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dashboard, also added to the Identity and Access Management (IAM) policy.</p>
   * @public
   */
  DashboardId: string | undefined;

  /**
   * <p>The authentication method that the user uses to sign in.</p>
   * @public
   */
  IdentityType: EmbeddingIdentityType | undefined;

  /**
   * <p>How many minutes the session is valid. The session lifetime must be 15-600
   *             minutes.</p>
   * @public
   */
  SessionLifetimeInMinutes?: number | undefined;

  /**
   * <p>Remove the undo/redo button on the embedded dashboard. The default is FALSE, which
   *             enables the undo/redo button.</p>
   * @public
   */
  UndoRedoDisabled?: boolean | undefined;

  /**
   * <p>Remove the reset button on the embedded dashboard. The default is FALSE, which enables
   *             the reset button.</p>
   * @public
   */
  ResetDisabled?: boolean | undefined;

  /**
   * <p>Adds persistence of state for the user session in an embedded dashboard. Persistence
   *             applies to the sheet and the parameter settings. These are control settings that the
   *             dashboard subscriber (Amazon Quick Sight reader) chooses while viewing the dashboard. If
   *             this is set to <code>TRUE</code>, the settings are the same when the subscriber reopens
   *             the same dashboard URL. The state is stored in Amazon Quick Sight, not in a browser
   *             cookie. If this is set to FALSE, the state of the user session is not persisted. The
   *             default is <code>FALSE</code>.</p>
   * @public
   */
  StatePersistenceEnabled?: boolean | undefined;

  /**
   * <p>The Amazon Quick Suite user's Amazon Resource Name (ARN), for use with
   *                 <code>QUICKSIGHT</code> identity type. You can use this for any Amazon Quick Suite users in your account (readers, authors, or admins) authenticated as one of the
   *             following:</p>
   *          <ul>
   *             <li>
   *                <p>Active Directory (AD) users or group members</p>
   *             </li>
   *             <li>
   *                <p>Invited nonfederated users</p>
   *             </li>
   *             <li>
   *                <p>IAM users and IAM role-based sessions
   *                     authenticated through Federated Single Sign-On using SAML, OpenID Connect, or
   *                         IAM federation.</p>
   *             </li>
   *          </ul>
   *          <p>Omit this parameter for users in the third group – IAM users and IAM
   *             role-based sessions.</p>
   * @public
   */
  UserArn?: string | undefined;

  /**
   * <p>The Amazon Quick Sight namespace that contains the dashboard IDs in this request. If
   *             you're not using a custom namespace, set <code>Namespace = default</code>.</p>
   * @public
   */
  Namespace?: string | undefined;

  /**
   * <p>A list of one or more dashboard IDs that you want anonymous users to have tempporary
   *             access to. Currently, the <code>IdentityType</code> parameter must be set to
   *                 <code>ANONYMOUS</code> because other identity types authenticate as Quick Suite or IAM users. For example, if you set "<code>--dashboard-id
   *                 dash_id1 --dashboard-id dash_id2 dash_id3 identity-type ANONYMOUS</code>", the
   *             session can access all three dashboards.</p>
   * @public
   */
  AdditionalDashboardIds?: string[] | undefined;
}

/**
 * <p>Output returned from the <code>GetDashboardEmbedUrl</code> operation.</p>
 * @public
 */
export interface GetDashboardEmbedUrlResponse {
  /**
   * <p>A single-use URL that you can put into your server-side webpage to embed your
   *             dashboard. This URL is valid for 5 minutes. The API operation provides the URL with an
   *                 <code>auth_code</code> value that enables one (and only one) sign-on to a user
   *             session that is valid for 10 hours. </p>
   * @public
   */
  EmbedUrl?: string | undefined;

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
 * <p>The identity type specified isn't supported. Supported identity types include
 * 				<code>IAM</code> and <code>QUICKSIGHT</code>.</p>
 * @public
 */
export class IdentityTypeNotSupportedException extends __BaseException {
  readonly name: "IdentityTypeNotSupportedException" = "IdentityTypeNotSupportedException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * <p>The Amazon Web Services request ID for this request.</p>
   * @public
   */
  RequestId?: string | undefined;
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
export interface GetFlowMetadataInput {
  /**
   * <p>The ID of the Amazon Web Services account that contains the flow that you are getting metadata for.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The unique identifier of the flow.</p>
   * @public
   */
  FlowId: string | undefined;
}

/**
 * @public
 */
export interface GetFlowMetadataOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the flow.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The unique identifier of the flow.</p>
   * @public
   */
  FlowId: string | undefined;

  /**
   * <p>A display name for the flow.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description for the flow.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The publish state for the flow. Valid values are <code>DRAFT</code>, <code>PUBLISHED</code>,
   *             or <code>PENDING_APPROVAL</code>.</p>
   * @public
   */
  PublishState?: FlowPublishState | undefined;

  /**
   * <p>The number of users who have used the flow.</p>
   * @public
   */
  UserCount?: number | undefined;

  /**
   * <p>The number of runs done for the flow.</p>
   * @public
   */
  RunCount?: number | undefined;

  /**
   * <p>The time this flow was created.</p>
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * <p>The last time this flow was modified.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

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
export interface GetFlowPermissionsInput {
  /**
   * <p>The ID of the Amazon Web Services account that contains the flow that you are getting permissions for.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The unique identifier of the flow to get permissions from.</p>
   * @public
   */
  FlowId: string | undefined;
}

/**
 * <p>A structure that contains the permission information for one principal against one flow.</p>
 * @public
 */
export interface Permission {
  /**
   * <p>A list of actions that the principal can perform against the flow.</p>
   *          <p>The following are the list of values to set a principal as a flow owner:</p>
   *          <ul>
   *             <li>
   *                <p>quicksight:PublishFlow</p>
   *             </li>
   *             <li>
   *                <p>quicksight:GetFlow</p>
   *             </li>
   *             <li>
   *                <p>quicksight:UpdateFlowPermissions</p>
   *             </li>
   *             <li>
   *                <p>quicksight:GetFlowSession</p>
   *             </li>
   *             <li>
   *                <p>quicksight:StartFlowSession</p>
   *             </li>
   *             <li>
   *                <p>quicksight:StopFlowSession</p>
   *             </li>
   *             <li>
   *                <p>quicksight:UpdateFlowSession</p>
   *             </li>
   *             <li>
   *                <p>quicksight:UnpublishFlow</p>
   *             </li>
   *             <li>
   *                <p>quicksight:GetFlowStages</p>
   *             </li>
   *             <li>
   *                <p>quicksight:DeleteFlow</p>
   *             </li>
   *             <li>
   *                <p>quicksight:DescribeFlowPermissions</p>
   *             </li>
   *             <li>
   *                <p>quicksight:UpdateFlow</p>
   *             </li>
   *             <li>
   *                <p>quicksight:CreatePresignedUrl</p>
   *             </li>
   *          </ul>
   *          <p>The following are the list of values to set a principal as a flow viewer:</p>
   *          <ul>
   *             <li>
   *                <p>quicksight:GetFlow</p>
   *             </li>
   *             <li>
   *                <p>quicksight:UpdateFlowSession</p>
   *             </li>
   *             <li>
   *                <p>quicksight:StartFlowSession</p>
   *             </li>
   *             <li>
   *                <p>quicksight:StopFlowSession</p>
   *             </li>
   *             <li>
   *                <p>quicksight:GetFlowSession</p>
   *             </li>
   *             <li>
   *                <p>quicksight:CreatePresignedUrl</p>
   *             </li>
   *             <li>
   *                <p>quicksight:GetFlowStages</p>
   *             </li>
   *          </ul>
   * @public
   */
  Actions: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the principal.
   *             This can be an Amazon Quick Suite user, group or namespace associated with the flow.
   *             Namespace principal can only be set as a viewer and will grant everyone in the same namespace viewer permissions.</p>
   * @public
   */
  Principal: string | undefined;
}

/**
 * @public
 */
export interface GetFlowPermissionsOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the flow you are getting permissions against.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The unique identifier of the flow with permissions.</p>
   * @public
   */
  FlowId: string | undefined;

  /**
   * <p>A structure that contains the permissions for the flow.</p>
   * @public
   */
  Permissions: Permission[] | undefined;

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
export interface GetSessionEmbedUrlRequest {
  /**
   * <p>The ID for the Amazon Web Services account associated with your Amazon Quick Sight
   *             subscription.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The URL you use to access the embedded session. The entry point URL is constrained to
   *             the following paths:</p>
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
   *                   </code> - where
   *                         <code>DashboardId</code> is the actual ID key from the Amazon Quick Sight
   *                     console URL of the dashboard</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/analyses/<i>AnalysisId</i>
   *                   </code> - where
   *                         <code>AnalysisId</code> is the actual ID key from the Amazon Quick Sight
   *                     console URL of the analysis</p>
   *             </li>
   *          </ul>
   * @public
   */
  EntryPoint?: string | undefined;

  /**
   * <p>How many minutes the session is valid. The session lifetime must be 15-600
   *             minutes.</p>
   * @public
   */
  SessionLifetimeInMinutes?: number | undefined;

  /**
   * <p>The Amazon Quick Suite user's Amazon Resource Name (ARN), for use with
   *                 <code>QUICKSIGHT</code> identity type. You can use this for any type of Amazon Quick Suite users in your account (readers, authors, or admins). They need to be
   *             authenticated as one of the following:</p>
   *          <ol>
   *             <li>
   *                <p>Active Directory (AD) users or group members</p>
   *             </li>
   *             <li>
   *                <p>Invited nonfederated users</p>
   *             </li>
   *             <li>
   *                <p>IAM users and IAM role-based sessions
   *                     authenticated through Federated Single Sign-On using SAML, OpenID Connect, or
   *                         IAM federation</p>
   *             </li>
   *          </ol>
   *          <p>Omit this parameter for users in the third group, IAM users and IAM role-based sessions.</p>
   * @public
   */
  UserArn?: string | undefined;
}

/**
 * @public
 */
export interface GetSessionEmbedUrlResponse {
  /**
   * <p>A single-use URL that you can put into your server-side web page to embed your Quick Suite session. This URL is valid for 5 minutes. The API operation provides the
   *             URL with an <code>auth_code</code> value that enables one (and only one) sign-on to a
   *             user session that is valid for 10 hours. </p>
   * @public
   */
  EmbedUrl?: string | undefined;

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
 * <p>A <code>GroupSearchFilter</code> object that you want to apply to your search.</p>
 * @public
 */
export interface GroupSearchFilter {
  /**
   * <p>The comparison operator that you want to use as a filter, for example <code>"Operator":
   *                 "StartsWith"</code>. Currently, the only supported operator is
   *                 <code>StartsWith</code>.</p>
   * @public
   */
  Operator: GroupFilterOperator | undefined;

  /**
   * <p>The name of the value that you want to use as a filter, for example <code>"Name":
   *                 "GROUP_NAME"</code>. Currently, the only supported name is
   *             <code>GROUP_NAME</code>.</p>
   * @public
   */
  Name: GroupFilterAttribute | undefined;

  /**
   * <p>The value of the named item, in this case <code>GROUP_NAME</code>, that you want to use as a filter.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>IAM policy assignment summary.</p>
 * @public
 */
export interface IAMPolicyAssignmentSummary {
  /**
   * <p>Assignment name.</p>
   * @public
   */
  AssignmentName?: string | undefined;

  /**
   * <p>Assignment status.</p>
   * @public
   */
  AssignmentStatus?: AssignmentStatus | undefined;
}

/**
 * @public
 * @enum
 */
export const IncludeGeneratedAnswer = {
  EXCLUDE: "EXCLUDE",
  INCLUDE: "INCLUDE",
} as const;

/**
 * @public
 */
export type IncludeGeneratedAnswer = (typeof IncludeGeneratedAnswer)[keyof typeof IncludeGeneratedAnswer];

/**
 * @public
 * @enum
 */
export const IncludeQuickSightQIndex = {
  EXCLUDE: "EXCLUDE",
  INCLUDE: "INCLUDE",
} as const;

/**
 * @public
 */
export type IncludeQuickSightQIndex = (typeof IncludeQuickSightQIndex)[keyof typeof IncludeQuickSightQIndex];

/**
 * @public
 */
export interface ListActionConnectorsRequest {
  /**
   * <p>The Amazon Web Services account ID for which to list action connectors.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The maximum number of action connectors to return in a single response. Valid range is 1 to 100.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A pagination token to retrieve the next set of results. Use the token returned from a previous call to continue listing action connectors.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListActionConnectorsResponse {
  /**
   * <p>A list of action connector summaries containing basic information about each connector.</p>
   * @public
   */
  ActionConnectorSummaries: ActionConnectorSummary[] | undefined;

  /**
   * <p>A pagination token to retrieve the next set of results. If null, there are no more results to retrieve.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>The HTTP status code of the request.</p>
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface ListAnalysesRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the analyses.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAnalysesResponse {
  /**
   * <p>Metadata describing each of the analyses that are listed.</p>
   * @public
   */
  AnalysisSummaryList?: AnalysisSummary[] | undefined;

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   * @public
   */
  NextToken?: string | undefined;

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
export interface ListAssetBundleExportJobsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that the export jobs were executed in. </p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAssetBundleExportJobsResponse {
  /**
   * <p>A list of export job summaries.</p>
   * @public
   */
  AssetBundleExportJobSummaryList?: AssetBundleExportJobSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

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
export interface ListAssetBundleImportJobsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that the import jobs were executed in.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAssetBundleImportJobsResponse {
  /**
   * <p>A list of import job summaries.</p>
   * @public
   */
  AssetBundleImportJobSummaryList?: AssetBundleImportJobSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>The HTTP status of the response.</p>
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface ListBrandsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that owns the brands that you want to list.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The maximum number of results to be returned in a single request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBrandsResponse {
  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of all brands in your Amazon Web Services account. This structure provides basic
   * 	          information about each brand.</p>
   * @public
   */
  Brands?: BrandSummary[] | undefined;
}

/**
 * @public
 */
export interface ListCustomPermissionsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the custom permissions profiles that you want to list.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCustomPermissionsResponse {
  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;

  /**
   * <p>A list of custom permissions profiles.</p>
   * @public
   */
  CustomPermissionsList?: CustomPermissions[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface ListDashboardsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the dashboards that you're
   *             listing.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDashboardsResponse {
  /**
   * <p>A structure that contains all of the dashboards in your Amazon Web Services account.
   *             This structure provides basic information about the dashboards.</p>
   * @public
   */
  DashboardSummaryList?: DashboardSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

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
export interface ListDashboardVersionsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the dashboard that you're
   *             listing versions for.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dashboard.</p>
   * @public
   */
  DashboardId: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDashboardVersionsResponse {
  /**
   * <p>A structure that contains information about each version of the dashboard.</p>
   * @public
   */
  DashboardVersionSummaryList?: DashboardVersionSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

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
export interface ListDataSetsRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDataSetsResponse {
  /**
   * <p>The list of dataset summaries.</p>
   * @public
   */
  DataSetSummaries?: DataSetSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

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
export interface ListDataSourcesRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDataSourcesResponse {
  /**
   * <p>A list of data sources.</p>
   * @public
   */
  DataSources?: DataSource[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

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
export interface ListFlowsInput {
  /**
   * <p>The ID of the Amazon Web Services account that contains the flow list that you are getting.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The token to request the next set of results, or null if you want to retrieve the first set.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListFlowsOutput {
  /**
   * <p>A structure that contains all of the flows in your Amazon Web Services account. This structure
   *             provides basic information about the flows.</p>
   * @public
   */
  FlowSummaryList?: FlowSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

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
export interface ListFolderMembersRequest {
  /**
   * <p>The ID for the Amazon Web Services account that contains the folder.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the folder.</p>
   * @public
   */
  FolderId: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListFolderMembersResponse {
  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;

  /**
   * <p>A structure that contains all of the folder members (dashboards, analyses, and datasets) in the folder.</p>
   * @public
   */
  FolderMemberList?: MemberIdArnPair[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface ListFoldersRequest {
  /**
   * <p>The ID for the Amazon Web Services account that contains the folder.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListFoldersResponse {
  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;

  /**
   * <p>A structure that contains all of the folders in the Amazon Web Services account. This structure provides basic information about the folders.</p>
   * @public
   */
  FolderSummaryList?: FolderSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface ListFoldersForResourceRequest {
  /**
   * <p>The ID for the Amazon Web Services account that contains the resource.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) the resource whose folders you need to list.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListFoldersForResourceResponse {
  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;

  /**
   * <p>A list that contains the Amazon Resource Names (ARNs) of all folders that the resource is a member of.</p>
   * @public
   */
  Folders?: string[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface ListGroupMembershipsRequest {
  /**
   * <p>The name of the group that you want to see a membership list of.</p>
   * @public
   */
  GroupName: string | undefined;

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return from this request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the
   * 			Amazon Web Services account that contains your Amazon Quick Sight account.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace of the group that you want a list of users from.</p>
   * @public
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface ListGroupMembershipsResponse {
  /**
   * <p>The list of the members of the group.</p>
   * @public
   */
  GroupMemberList?: GroupMember[] | undefined;

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   * @public
   */
  NextToken?: string | undefined;

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
export interface ListGroupsRequest {
  /**
   * <p>The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the
   * 			Amazon Web Services account that contains your Amazon Quick Sight account.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The namespace that you want a list of groups from.</p>
   * @public
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface ListGroupsResponse {
  /**
   * <p>The list of the groups.</p>
   * @public
   */
  GroupList?: Group[] | undefined;

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   * @public
   */
  NextToken?: string | undefined;

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
export interface ListIAMPolicyAssignmentsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains these IAM policy
   * 			assignments.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The status of the assignments.</p>
   * @public
   */
  AssignmentStatus?: AssignmentStatus | undefined;

  /**
   * <p>The namespace for the assignments.</p>
   * @public
   */
  Namespace: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListIAMPolicyAssignmentsResponse {
  /**
   * <p>Information describing the IAM policy assignments.</p>
   * @public
   */
  IAMPolicyAssignments?: IAMPolicyAssignmentSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

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
export interface ListIAMPolicyAssignmentsForUserRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the assignments.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The name of the user.</p>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The namespace of the assignment.</p>
   * @public
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface ListIAMPolicyAssignmentsForUserResponse {
  /**
   * <p>The active assignments for this user.</p>
   * @public
   */
  ActiveAssignments?: ActiveIAMPolicyAssignment[] | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface ListIdentityPropagationConfigsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contain the identity propagation configurations of.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The maximum number of results to be returned.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListIdentityPropagationConfigsResponse {
  /**
   * <p>A list of services and their authorized targets that the Quick Sight IAM Identity Center application can access.</p>
   * @public
   */
  Services?: AuthorizedTargetsByService[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

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
export interface ListIngestionsRequest {
  /**
   * <p>The ID of the dataset used in the ingestion.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListIngestionsResponse {
  /**
   * <p>A list of the ingestions.</p>
   * @public
   */
  Ingestions?: Ingestion[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

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
export interface ListNamespacesRequest {
  /**
   * <p>The ID for the Amazon Web Services account that contains the Quick Sight namespaces that you want to list.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>A unique pagination token that can be used in a subsequent request. You will receive a pagination token in the response body of a previous <code>ListNameSpaces</code> API call if there is more data that can be returned. To receive the data, make another <code>ListNamespaces</code> API call with the returned token to retrieve the next page of data. Each token is valid for 24 hours. If you try to make a <code>ListNamespaces</code> API call with an expired token, you will receive a <code>HTTP 400 InvalidNextTokenException</code> error.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListNamespacesResponse {
  /**
   * <p>The information about the namespaces in this Amazon Web Services account. The response includes
   *         the namespace ARN, name, Amazon Web Services Region, notification email address, creation status, and
   *         identity store.</p>
   * @public
   */
  Namespaces?: NamespaceInfoV2[] | undefined;

  /**
   * <p>A unique pagination token that can be used in a subsequent request. Receiving <code>NextToken</code> in your response inticates that there is more data that can be returned. To receive the data, make another <code>ListNamespaces</code> API call with the returned token to retrieve the next page of data. Each token is valid for 24 hours. If you try to make a <code>ListNamespaces</code> API call with an expired token, you will receive a <code>HTTP 400 InvalidNextTokenException</code> error.</p>
   * @public
   */
  NextToken?: string | undefined;

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
export interface ListRefreshSchedulesRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the dataset.</p>
   * @public
   */
  DataSetId: string | undefined;
}

/**
 * @public
 */
export interface ListRefreshSchedulesResponse {
  /**
   * <p>The list of refresh schedules for the dataset.</p>
   * @public
   */
  RefreshSchedules?: RefreshSchedule[] | undefined;

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
export interface ListRoleMembershipsRequest {
  /**
   * <p>The name of the role.</p>
   * @public
   */
  Role: Role | undefined;

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The ID for the Amazon Web Services account that you want to create a group in. The Amazon Web Services account ID that you provide must be the same Amazon Web Services account that contains your Amazon Quick Sight account.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace that includes the role.</p>
   * @public
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface ListRoleMembershipsResponse {
  /**
   * <p>The list of groups associated with a role</p>
   * @public
   */
  MembersList?: string[] | undefined;

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   * @public
   */
  NextToken?: string | undefined;

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
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want a list of tags
   * 			for.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the
   * 			resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

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
export interface ListTemplateAliasesRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the template aliases that you're listing.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the template.</p>
   * @public
   */
  TemplateId: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListTemplateAliasesResponse {
  /**
   * <p>A structure containing the list of the template's aliases.</p>
   * @public
   */
  TemplateAliasList?: TemplateAlias[] | undefined;

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

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTemplatesRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the templates that you're listing.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>The template summary.</p>
 * @public
 */
export interface TemplateSummary {
  /**
   * <p>A summary of a template.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID of the template. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  TemplateId?: string | undefined;

  /**
   * <p>A display name for the template.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A structure containing a list of version numbers for the template summary.</p>
   * @public
   */
  LatestVersionNumber?: number | undefined;

  /**
   * <p>The last time that this template was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The last time that this template was updated.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListTemplatesResponse {
  /**
   * <p>A structure containing information about the templates in the list.</p>
   * @public
   */
  TemplateSummaryList?: TemplateSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

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
export interface ListTemplateVersionsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the templates that you're listing.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the template.</p>
   * @public
   */
  TemplateId: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>The template version.</p>
 * @public
 */
export interface TemplateVersionSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the template version.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The version number of the template version.</p>
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * <p>The time that this template version was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The status of the template version.</p>
   * @public
   */
  Status?: ResourceStatus | undefined;

  /**
   * <p>The description of the template version.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface ListTemplateVersionsResponse {
  /**
   * <p>A structure containing a list of all the versions of the specified template.</p>
   * @public
   */
  TemplateVersionSummaryList?: TemplateVersionSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

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
export interface ListThemeAliasesRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the theme aliases that you're listing.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the theme.</p>
   * @public
   */
  ThemeId: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListThemeAliasesResponse {
  /**
   * <p>A structure containing the list of the theme's aliases.</p>
   * @public
   */
  ThemeAliasList?: ThemeAlias[] | undefined;

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

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListThemesRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the themes that you're listing.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The type of themes that you want to list. Valid options include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALL (default)</code>- Display all existing themes.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CUSTOM</code> - Display only the themes created by people using Amazon Quick Sight.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>QUICKSIGHT</code> - Display only the starting themes defined by Quick Sight.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Type?: ThemeType | undefined;
}

/**
 * <p>The theme summary.</p>
 * @public
 */
export interface ThemeSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>the display name for the theme.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The ID of the theme. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  ThemeId?: string | undefined;

  /**
   * <p>The latest version number for the theme. </p>
   * @public
   */
  LatestVersionNumber?: number | undefined;

  /**
   * <p>The date and time that this theme was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The last date and time that this theme was updated.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListThemesResponse {
  /**
   * <p>Information about the themes in the list.</p>
   * @public
   */
  ThemeSummaryList?: ThemeSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

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
export interface ListThemeVersionsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the themes that you're listing.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the theme.</p>
   * @public
   */
  ThemeId: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>The theme version.</p>
 * @public
 */
export interface ThemeVersionSummary {
  /**
   * <p>The version number of the theme version.</p>
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the theme version.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The description of the theme version.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The date and time that this theme version was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The status of the theme version.</p>
   * @public
   */
  Status?: ResourceStatus | undefined;
}

/**
 * @public
 */
export interface ListThemeVersionsResponse {
  /**
   * <p>A structure containing a list of all the versions of the specified theme.</p>
   * @public
   */
  ThemeVersionSummaryList?: ThemeVersionSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

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
export interface ListTopicRefreshSchedulesRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the topic whose refresh schedule
   *          you want described.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the topic that you want to describe. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  TopicId: string | undefined;
}

/**
 * <p>A summary of the refresh schedule details for a dataset.</p>
 * @public
 */
export interface TopicRefreshScheduleSummary {
  /**
   * <p>The ID of the dataset.</p>
   * @public
   */
  DatasetId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   * @public
   */
  DatasetArn?: string | undefined;

  /**
   * <p>The name of the dataset.</p>
   * @public
   */
  DatasetName?: string | undefined;

  /**
   * <p>The definition of a refresh schedule.</p>
   * @public
   */
  RefreshSchedule?: TopicRefreshSchedule | undefined;
}

/**
 * @public
 */
export interface ListTopicRefreshSchedulesResponse {
  /**
   * <p>The ID for the topic that you want to describe. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  TopicId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the topic.</p>
   * @public
   */
  TopicArn?: string | undefined;

  /**
   * <p>The list of topic refresh schedules.</p>
   * @public
   */
  RefreshSchedules?: TopicRefreshScheduleSummary[] | undefined;

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
export interface ListTopicReviewedAnswersRequest {
  /**
   * <p>The ID of the Amazon Web Services account that containd the reviewed answers that you want listed.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the topic that contains the reviewed answer that you want to list. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  TopicId: string | undefined;
}

/**
 * @public
 */
export interface ListTopicsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the topics that you want to
   *          list.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>A topic summary.</p>
 * @public
 */
export interface TopicSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the topic.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID for the topic. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  TopicId?: string | undefined;

  /**
   * <p>The name of the topic.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The user experience version of the topic.</p>
   * @public
   */
  UserExperienceVersion?: TopicUserExperienceVersion | undefined;
}

/**
 * @public
 */
export interface ListTopicsResponse {
  /**
   * <p>A list of topic summaries.</p>
   * @public
   */
  TopicsSummaries?: TopicSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

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
export interface ListUserGroupsRequest {
  /**
   * <p>The Amazon Quick Sight user name that you want to list group memberships for.</p>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>The Amazon Web Services account ID that the user is in. Currently, you use the ID for the Amazon Web Services account
   * 			that contains your Amazon Quick Sight account.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   * @public
   */
  Namespace: string | undefined;

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return from this request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListUserGroupsResponse {
  /**
   * <p>The list of groups the user is a member of.</p>
   * @public
   */
  GroupList?: Group[] | undefined;

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   * @public
   */
  NextToken?: string | undefined;

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
export interface ListUsersRequest {
  /**
   * <p>The ID for the Amazon Web Services account that the user is in. Currently, you use the ID for the
   * 			Amazon Web Services account that contains your Amazon Quick Sight account.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return from this request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   * @public
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface ListUsersResponse {
  /**
   * <p>The list of users.</p>
   * @public
   */
  UserList?: User[] | undefined;

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   * @public
   */
  NextToken?: string | undefined;

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
export interface ListVPCConnectionsRequest {
  /**
   * <p>The Amazon Web Services account ID of the account that contains the VPC connections
   * 			that you want to list.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>The summary metadata that describes a VPC connection.</p>
 * @public
 */
export interface VPCConnectionSummary {
  /**
   * <p>The ID of the VPC connection that
   *             you're
   *             creating. This ID is a unique identifier for each Amazon Web Services Region in an
   *                 Amazon Web Services account.</p>
   * @public
   */
  VPCConnectionId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the VPC connection.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The display name for the VPC connection.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon EC2 VPC ID associated with the VPC connection.</p>
   * @public
   */
  VPCId?: string | undefined;

  /**
   * <p>The Amazon EC2 security group IDs associated with the VPC connection.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>A list of IP addresses of DNS resolver endpoints for the VPC connection.</p>
   * @public
   */
  DnsResolvers?: string[] | undefined;

  /**
   * <p>The status of the VPC connection.</p>
   * @public
   */
  Status?: VPCConnectionResourceStatus | undefined;

  /**
   * <p>The availability status of the VPC connection.</p>
   * @public
   */
  AvailabilityStatus?: VPCConnectionAvailabilityStatus | undefined;

  /**
   * <p>A list of network interfaces.</p>
   * @public
   */
  NetworkInterfaces?: NetworkInterface[] | undefined;

  /**
   * <p>The ARN of the IAM role associated
   *             with the VPC connection.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The time that the VPC connection was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The time that the VPC connection was last updated.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListVPCConnectionsResponse {
  /**
   * <p>A <code>VPCConnectionSummaries</code> object that returns a summary of VPC connection
   * 			objects.</p>
   * @public
   */
  VPCConnectionSummaries?: VPCConnectionSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more
   * 			results.</p>
   * @public
   */
  NextToken?: string | undefined;

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
export interface PredictQAResultsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that the user wants to execute Predict QA results in.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The query text to be used to predict QA results.</p>
   * @public
   */
  QueryText: string | undefined;

  /**
   * <p>Indicates whether Q indicies are included or excluded.</p>
   * @public
   */
  IncludeQuickSightQIndex?: IncludeQuickSightQIndex | undefined;

  /**
   * <p>Indicates whether generated answers are included or excluded.</p>
   * @public
   */
  IncludeGeneratedAnswer?: IncludeGeneratedAnswer | undefined;

  /**
   * <p>The number of maximum topics to be considered to predict QA results.</p>
   * @public
   */
  MaxTopicsToConsider?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const QAResultType = {
  DASHBOARD_VISUAL: "DASHBOARD_VISUAL",
  GENERATED_ANSWER: "GENERATED_ANSWER",
  NO_ANSWER: "NO_ANSWER",
} as const;

/**
 * @public
 */
export type QAResultType = (typeof QAResultType)[keyof typeof QAResultType];

/**
 * <p>The QA result that is made from the <code>DashboardVisual</code> or <code>GeneratedAnswer</code>.</p>
 * @public
 */
export interface QAResult {
  /**
   * <p>The type of QA result.</p>
   * @public
   */
  ResultType?: QAResultType | undefined;

  /**
   * <p>The representation of a dashboard visual result.</p>
   * @public
   */
  DashboardVisual?: DashboardVisualResult | undefined;

  /**
   * <p>The representation of a generated answer result.</p>
   * @public
   */
  GeneratedAnswer?: GeneratedAnswerResult | undefined;
}

/**
 * @public
 */
export interface PredictQAResultsResponse {
  /**
   * <p>The primary visual response.</p>
   * @public
   */
  PrimaryResult?: QAResult | undefined;

  /**
   * <p>Additional visual responses.</p>
   * @public
   */
  AdditionalResults?: QAResult[] | undefined;

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
 * @enum
 */
export const PurchaseMode = {
  AUTO_PURCHASE: "AUTO_PURCHASE",
  MANUAL: "MANUAL",
} as const;

/**
 * @public
 */
export type PurchaseMode = (typeof PurchaseMode)[keyof typeof PurchaseMode];

/**
 * @public
 */
export interface PutDataSetRefreshPropertiesRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the dataset.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>The dataset refresh properties.</p>
   * @public
   */
  DataSetRefreshProperties: DataSetRefreshProperties | undefined;
}

/**
 * @public
 */
export interface PutDataSetRefreshPropertiesResponse {
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
export interface RegisterUserRequest {
  /**
   * <p>The identity type that your Quick Sight account uses to manage the identity of users.</p>
   * @public
   */
  IdentityType: IdentityType | undefined;

  /**
   * <p>The email address of the user that you want to register.</p>
   * @public
   */
  Email: string | undefined;

  /**
   * <p>The Amazon Quick Sight role for the user. The user role can be one of the
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
   * @public
   */
  UserRole: UserRole | undefined;

  /**
   * <p>The ARN of the IAM user or role that you are registering with Amazon Quick Sight. </p>
   * @public
   */
  IamArn?: string | undefined;

  /**
   * <p>You need to use this parameter only when you register one or more users using an assumed
   * 			IAM role. You don't need to provide the session name for other scenarios, for example when
   * 			you are registering an IAM user or an Amazon Quick Sight user. You can register multiple
   * 			users using the same IAM role if each user has a different session name. For more
   * 			information on assuming IAM roles, see <a href="https://docs.aws.amazon.com/cli/latest/reference/sts/assume-role.html">
   *                <code>assume-role</code>
   *             </a> in the <i>CLI Reference.</i>
   *          </p>
   * @public
   */
  SessionName?: string | undefined;

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
   * <p>The Amazon Quick Sight user name that you want to create for the user you are
   * 			registering.</p>
   * @public
   */
  UserName?: string | undefined;

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
   *          <p>To add custom permissions to an existing user, use <code>
   *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateUser.html">UpdateUser</a>
   *             </code> instead.</p>
   *          <p>A set of custom permissions includes any combination of these restrictions. Currently,
   *             you need to create the profile names for custom permission sets by using the Quick Sight
   *             console. Then, you use the <code>RegisterUser</code> API operation to assign the named set of
   *             permissions to a Quick Sight user. </p>
   *          <p>Quick Sight custom permissions are applied through IAM policies. Therefore, they
   *             override the permissions typically granted by assigning Quick Sight users to one of the
   *             default security cohorts in Quick Sight (admin, author, reader, admin pro, author pro, reader pro).</p>
   *          <p>This feature is available only to Quick Sight Enterprise edition subscriptions.</p>
   * @public
   */
  CustomPermissionsName?: string | undefined;

  /**
   * <p>The type of supported external login provider that provides identity to let a user federate into Amazon Quick Sight with an associated Identity and Access Management(IAM) role. The type of supported external login provider can be one of the following.</p>
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

  /**
   * <p>The tags to associate with the user.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface RegisterUserResponse {
  /**
   * <p>The user's user name.</p>
   * @public
   */
  User?: User | undefined;

  /**
   * <p>The URL the user visits to complete registration and provide a password. This is
   * 			returned only for users with an identity type of <code>QUICKSIGHT</code>.</p>
   * @public
   */
  UserInvitationUrl?: string | undefined;

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
export interface RestoreAnalysisRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the analysis.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the analysis that you're restoring.</p>
   * @public
   */
  AnalysisId: string | undefined;

  /**
   * <p>A boolean value that determines if the analysis will be restored to folders that it previously resided in. A <code>True</code> value restores analysis back to all folders that it previously resided in. A <code>False</code> value restores the analysis but does not restore the analysis back to all previously resided folders. Restoring a restricted analysis requires this parameter to be set to <code>True</code>.</p>
   * @public
   */
  RestoreToFolders?: boolean | undefined;
}

/**
 * @public
 */
export interface RestoreAnalysisResponse {
  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the analysis that you're restoring.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID of the analysis that you're restoring.
   *         </p>
   * @public
   */
  AnalysisId?: string | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>A list of folder arns thatthe analysis failed to be restored to.</p>
   * @public
   */
  RestorationFailedFolderArns?: string[] | undefined;
}

/**
 * @public
 */
export interface SearchActionConnectorsRequest {
  /**
   * <p>The Amazon Web Services account ID in which to search for action connectors.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The maximum number of action connectors to return in a single response. Valid range is 1 to 100.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A pagination token to retrieve the next set of results. Use the token returned from a previous call to continue searching.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The search filters to apply. You can filter by connector name, type, or user permissions. Maximum of one filter is supported.</p>
   * @public
   */
  Filters: ActionConnectorSearchFilter[] | undefined;
}

/**
 * @public
 */
export interface SearchActionConnectorsResponse {
  /**
   * <p>A pagination token to retrieve the next set of results. If null, there are no more results to retrieve.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>The HTTP status code of the request.</p>
   * @public
   */
  Status?: number | undefined;

  /**
   * <p>A list of action connector summaries that match the search criteria.</p>
   * @public
   */
  ActionConnectorSummaries?: ActionConnectorSummary[] | undefined;
}

/**
 * @public
 */
export interface SearchAnalysesRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the analyses that you're searching
   *             for.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The structure for the search filters that you want to apply to your search. </p>
   * @public
   */
  Filters: AnalysisSearchFilter[] | undefined;

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface SearchAnalysesResponse {
  /**
   * <p>Metadata describing the analyses that you searched for.</p>
   * @public
   */
  AnalysisSummaryList?: AnalysisSummary[] | undefined;

  /**
   * <p>A pagination token that can be used in a subsequent request.
   *             </p>
   * @public
   */
  NextToken?: string | undefined;

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
export interface SearchDashboardsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the user whose dashboards
   *             you're searching for. </p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The filters to apply to the search. Currently, you can search only by user name, for
   *             example, <code>"Filters": [ \{ "Name": "QUICKSIGHT_USER", "Operator": "StringEquals",
   *                 "Value": "arn:aws:quicksight:us-east-1:1:user/default/UserName1" \}
   *             ]</code>
   *          </p>
   * @public
   */
  Filters: DashboardSearchFilter[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface SearchDashboardsResponse {
  /**
   * <p>The list of dashboards owned by the user specified in <code>Filters</code> in your
   *             request.</p>
   * @public
   */
  DashboardSummaryList?: DashboardSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

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
export interface SearchDataSetsRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The filters to apply to the search.</p>
   * @public
   */
  Filters: DataSetSearchFilter[] | undefined;

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface SearchDataSetsResponse {
  /**
   * <p>A <code>DataSetSummaries</code> object that returns a summary of a dataset.</p>
   * @public
   */
  DataSetSummaries?: DataSetSummary[] | undefined;

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   * @public
   */
  NextToken?: string | undefined;

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
export interface SearchDataSourcesRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The filters to apply to the search.</p>
   * @public
   */
  Filters: DataSourceSearchFilter[] | undefined;

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface SearchDataSourcesResponse {
  /**
   * <p>A <code>DataSourceSummaries</code> object that returns a summary of a data
   * 			source.</p>
   * @public
   */
  DataSourceSummaries?: DataSourceSummary[] | undefined;

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   * @public
   */
  NextToken?: string | undefined;

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
 * @enum
 */
export const SearchFilterOperator = {
  STRING_EQUALS: "StringEquals",
  STRING_LIKE: "StringLike",
} as const;

/**
 * @public
 */
export type SearchFilterOperator = (typeof SearchFilterOperator)[keyof typeof SearchFilterOperator];

/**
 * <p>A structure that contains the filter information when searching flows.</p>
 * @public
 */
export interface SearchFlowsFilter {
  /**
   * <p>The name of the value that you want to use as a filter, for example <code>"Name":
   *                 "DIRECT_QUICKSIGHT_SOLE_OWNER"</code>.</p>
   *          <p>Valid values are defined as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>assetName</code>: Any flows whose names have a substring match to this value will be returned.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>assetDescription</code>: Any flows whose descriptions have a substring match to this value will be returned.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DIRECT_QUICKSIGHT_SOLE_OWNER</code>: Provide an ARN of a user or group, and any analyses with that ARN listed as the only owner of the analysis are returned. Implicit permissions from folders or groups are not considered.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DIRECT_QUICKSIGHT_OWNER</code>: Provide an ARN of a user or group, and any analyses with that ARN listed as one of the owners of the analyses are returned. Implicit permissions from folders or groups are not considered.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DIRECT_QUICKSIGHT_VIEWER_OR_OWNER</code>: Provide an ARN of a user or group, and any analyses with that ARN listed as one of the owners or viewers of the analyses are returned. Implicit permissions from folders or groups are not considered. </p>
   *             </li>
   *          </ul>
   * @public
   */
  Name: FieldName | undefined;

  /**
   * <p>The comparison operator that you want to use as a filter, for example  <code>"Operator": "StringEquals"</code>. Valid values are  <code>"StringEquals"</code>  and  <code>"StringLike"</code>.</p>
   * @public
   */
  Operator: SearchFilterOperator | undefined;

  /**
   * <p>The value of the named item, in this case <code>DIRECT_QUICKSIGHT_SOLE_OWNER</code>, that you want
   *             to use as a filter, for example <code>"Value"</code>. An example is
   *             <code>"arn:aws:quicksight:us-east-1:1:user/default/UserName1"</code>.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface SearchFlowsInput {
  /**
   * <p>The ID of the Amazon Web Services account where you are searching for flows from.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The filters applied to the search when searching for flows in the Amazon Web Services account.</p>
   * @public
   */
  Filters: SearchFlowsFilter[] | undefined;

  /**
   * <p>The token to request the next set of results, or null if you want to retrieve the first set.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface SearchFlowsOutput {
  /**
   * <p>The list of flows found against the search.</p>
   * @public
   */
  FlowSummaryList: FlowSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

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
export interface SearchFoldersRequest {
  /**
   * <p>The ID for the Amazon Web Services account that contains the folder.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The filters to apply to the search. Currently, you can search only by the parent folder ARN. For example, <code>"Filters": [ \{ "Name": "PARENT_FOLDER_ARN", "Operator": "StringEquals", "Value": "arn:aws:quicksight:us-east-1:1:folder/folderId" \} ]</code>.</p>
   * @public
   */
  Filters: FolderSearchFilter[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface SearchFoldersResponse {
  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;

  /**
   * <p>A structure that contains all of the folders in the Amazon Web Services account. This structure provides basic information about the folders.</p>
   * @public
   */
  FolderSummaryList?: FolderSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface SearchGroupsRequest {
  /**
   * <p>The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the
   *           Amazon Web Services account that contains your Amazon Quick Sight account.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return from this request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The namespace that you want to search.</p>
   * @public
   */
  Namespace: string | undefined;

  /**
   * <p>The structure for the search filters that you want to apply to your search.</p>
   * @public
   */
  Filters: GroupSearchFilter[] | undefined;
}

/**
 * @public
 */
export interface SearchGroupsResponse {
  /**
   * <p>A list of groups in a specified namespace that match the filters you set in your <code>SearchGroups</code> request.</p>
   * @public
   */
  GroupList?: Group[] | undefined;

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   * @public
   */
  NextToken?: string | undefined;

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
 * @enum
 */
export const TopicFilterAttribute = {
  DIRECT_QUICKSIGHT_OWNER: "DIRECT_QUICKSIGHT_OWNER",
  DIRECT_QUICKSIGHT_SOLE_OWNER: "DIRECT_QUICKSIGHT_SOLE_OWNER",
  DIRECT_QUICKSIGHT_VIEWER_OR_OWNER: "DIRECT_QUICKSIGHT_VIEWER_OR_OWNER",
  QUICKSIGHT_OWNER: "QUICKSIGHT_OWNER",
  QUICKSIGHT_USER: "QUICKSIGHT_USER",
  QUICKSIGHT_VIEWER_OR_OWNER: "QUICKSIGHT_VIEWER_OR_OWNER",
  TOPIC_NAME: "TOPIC_NAME",
} as const;

/**
 * @public
 */
export type TopicFilterAttribute = (typeof TopicFilterAttribute)[keyof typeof TopicFilterAttribute];

/**
 * @public
 * @enum
 */
export const TopicFilterOperator = {
  StringEquals: "StringEquals",
  StringLike: "StringLike",
} as const;

/**
 * @public
 */
export type TopicFilterOperator = (typeof TopicFilterOperator)[keyof typeof TopicFilterOperator];

/**
 * <p>The filter that is used to search for a topic.</p>
 * @public
 */
export interface TopicSearchFilter {
  /**
   * <p>The operator like equals or like.</p>
   * @public
   */
  Operator: TopicFilterOperator | undefined;

  /**
   * <p>The name of the topic search filter.</p>
   * @public
   */
  Name: TopicFilterAttribute | undefined;

  /**
   * <p>The value of the topic search filter.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface SearchTopicsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the topic that you want to find.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The filters that you want to use to search for the topic.</p>
   * @public
   */
  Filters: TopicSearchFilter[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface SearchTopicsResponse {
  /**
   * <p>A list of topic summaries that is returned by the search topic request.</p>
   * @public
   */
  TopicSummaryList?: TopicSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

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
export interface StartAssetBundleExportJobRequest {
  /**
   * <p>The ID of the Amazon Web Services account to export assets from.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the job. This ID is unique while the job is running. After the job is
   *          completed, you can reuse this ID for another job.</p>
   * @public
   */
  AssetBundleExportJobId: string | undefined;

  /**
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
   *          <p>The API caller must have the necessary permissions in their IAM role to
   *          access each resource before the resources can be exported.</p>
   * @public
   */
  ResourceArns: string[] | undefined;

  /**
   * <p>A Boolean that determines whether all dependencies of each resource ARN are recursively
   *          exported with the job. For example, say you provided a Dashboard ARN to the
   *             <code>ResourceArns</code> parameter. If you set <code>IncludeAllDependencies</code> to
   *             <code>TRUE</code>, any theme, dataset, and data source resource that is a dependency of
   *          the dashboard is also exported.</p>
   * @public
   */
  IncludeAllDependencies?: boolean | undefined;

  /**
   * <p>The export data format.</p>
   * @public
   */
  ExportFormat: AssetBundleExportFormat | undefined;

  /**
   * <p>An optional collection of structures that generate CloudFormation parameters to
   *          override the existing resource property values when the resource is exported to a new
   *             CloudFormation template.</p>
   *          <p>Use this field if the <code>ExportFormat</code> field of a
   *             <code>StartAssetBundleExportJobRequest</code> API call is set to
   *             <code>CLOUDFORMATION_JSON</code>.</p>
   * @public
   */
  CloudFormationOverridePropertyConfiguration?: AssetBundleCloudFormationOverridePropertyConfiguration | undefined;

  /**
   * <p>A Boolean that determines whether all permissions for each resource ARN are exported
   *          with the job. If you set <code>IncludePermissions</code> to <code>TRUE</code>, any
   *          permissions associated with each resource are exported. </p>
   * @public
   */
  IncludePermissions?: boolean | undefined;

  /**
   * <p> A Boolean that determines whether all tags for each resource ARN are exported with the
   *          job. If you set <code>IncludeTags</code> to <code>TRUE</code>, any tags associated with
   *          each resource are exported.</p>
   * @public
   */
  IncludeTags?: boolean | undefined;

  /**
   * <p>An optional parameter that determines which validation strategy to use for the export
   *          job. If <code>StrictModeForAllResources</code> is set to <code>TRUE</code>, strict
   *          validation for every error is enforced. If it is set to <code>FALSE</code>, validation is
   *          skipped for specific UI errors that are shown as warnings. The default value for
   *             <code>StrictModeForAllResources</code> is <code>FALSE</code>.</p>
   * @public
   */
  ValidationStrategy?: AssetBundleExportJobValidationStrategy | undefined;

  /**
   * <p>A Boolean that determines if the exported asset carries over information about the
   *          folders that the asset is a member of. </p>
   * @public
   */
  IncludeFolderMemberships?: boolean | undefined;

  /**
   * <p>A setting that indicates whether you want to include folder assets. You can also use
   *          this setting to recusrsively include all subfolders of an exported folder.</p>
   * @public
   */
  IncludeFolderMembers?: IncludeFolderMembers | undefined;
}

/**
 * @public
 */
export interface StartAssetBundleExportJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the export job.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID of the job. This ID is unique while the job is running. After the job is
   *          completed, you can reuse this ID for another job.</p>
   * @public
   */
  AssetBundleExportJobId?: string | undefined;

  /**
   * <p>The Amazon Web Services response ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>The HTTP status of the response.</p>
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface StartAssetBundleImportJobRequest {
  /**
   * <p>The ID of the Amazon Web Services account to import assets into. </p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the job. This ID is unique while the job is running. After the job is
   *          completed, you can reuse this ID for another job.</p>
   * @public
   */
  AssetBundleImportJobId: string | undefined;

  /**
   * <p>The source of the asset bundle zip file that contains the data that you want to import.
   *          The file must be in <code>QUICKSIGHT_JSON</code> format. </p>
   * @public
   */
  AssetBundleImportSource: AssetBundleImportSource | undefined;

  /**
   * <p>Optional overrides that are applied to the resource configuration before import.</p>
   * @public
   */
  OverrideParameters?: AssetBundleImportJobOverrideParameters | undefined;

  /**
   * <p>The failure action for the import job.</p>
   *          <p>If you choose <code>ROLLBACK</code>, failed import jobs will attempt to undo any asset
   *          changes caused by the failed job.</p>
   *          <p>If you choose <code>DO_NOTHING</code>, failed import jobs will not attempt to roll back
   *          any asset changes caused by the failed job, possibly keeping the Amazon Quick Sight account
   *          in an inconsistent state.</p>
   * @public
   */
  FailureAction?: AssetBundleImportFailureAction | undefined;

  /**
   * <p>Optional permission overrides that are applied to the resource configuration before
   *          import.</p>
   * @public
   */
  OverridePermissions?: AssetBundleImportJobOverridePermissions | undefined;

  /**
   * <p>Optional tag overrides that are applied to the resource configuration before
   *          import.</p>
   * @public
   */
  OverrideTags?: AssetBundleImportJobOverrideTags | undefined;

  /**
   * <p>An optional validation strategy override for all analyses and dashboards that is applied
   *          to the resource configuration before import. </p>
   * @public
   */
  OverrideValidationStrategy?: AssetBundleImportJobOverrideValidationStrategy | undefined;
}

/**
 * @public
 */
export interface StartAssetBundleImportJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the import job.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID of the job. This ID is unique while the job is running. After the job is
   *          completed, you can reuse this ID for another job.</p>
   * @public
   */
  AssetBundleImportJobId?: string | undefined;

  /**
   * <p>The Amazon Web Services response ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>The HTTP status of the response.</p>
   * @public
   */
  Status?: number | undefined;
}

/**
 * <p>A structure that contains information on the anonymous user configuration.</p>
 * @public
 */
export interface SnapshotAnonymousUser {
  /**
   * <p>The tags to be used for row-level security (RLS). Make sure that the relevant datasets have RLS tags configured before you start a snapshot export job. You can configure the RLS tags of a dataset with a <code>DataSet$RowLevelPermissionTagConfiguration</code> API call.</p>
   *          <p>These are not the tags that are used for Amazon Web Services resource tagging. For more information on row level security in Amazon Quick Sight, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/quicksight-dev-rls-tags.html">Using Row-Level Security (RLS) with Tags</a>in the <i>Amazon Quick Suite User Guide</i>.</p>
   * @public
   */
  RowLevelPermissionTags?: SessionTag[] | undefined;
}

/**
 * <p>A structure that contains information about the users that the dashboard snapshot is generated for.</p>
 * @public
 */
export interface SnapshotUserConfiguration {
  /**
   * <p>An array of records that describe the anonymous users that the dashboard snapshot is generated for.</p>
   * @public
   */
  AnonymousUsers?: SnapshotAnonymousUser[] | undefined;
}

/**
 * @public
 */
export interface StartDashboardSnapshotJobRequest {
  /**
   * <p>The ID of the Amazon Web Services account that the dashboard snapshot job is executed in.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the dashboard that you want to start a snapshot job for.
   *         </p>
   * @public
   */
  DashboardId: string | undefined;

  /**
   * <p>An ID for the dashboard snapshot job. This ID is unique to the dashboard while the job is running. This ID can be used to poll the status of a job with a <code>DescribeDashboardSnapshotJob</code> while the job runs. You can reuse this ID for another job 24 hours after the current job is completed.</p>
   * @public
   */
  SnapshotJobId: string | undefined;

  /**
   * <p>
   *             A structure that contains information about the anonymous users that the generated snapshot is for. This API will not return information about registered Amazon Quick Sight.</p>
   * @public
   */
  UserConfiguration: SnapshotUserConfiguration | undefined;

  /**
   * <p>A structure that describes the configuration of the dashboard snapshot.</p>
   * @public
   */
  SnapshotConfiguration: SnapshotConfiguration | undefined;
}

/**
 * @public
 */
export interface StartDashboardSnapshotJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the dashboard snapshot job.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID of the job. The job ID is set when you start a new job with a <code>StartDashboardSnapshotJob</code> API call.</p>
   * @public
   */
  SnapshotJobId?: string | undefined;

  /**
   * <p>
   *             The Amazon Web Services request ID for this operation.
   *         </p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>The HTTP status of the request</p>
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface StartDashboardSnapshotJobScheduleRequest {
  /**
   * <p>The ID of the Amazon Web Services account that the dashboard snapshot job is executed in.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the dashboard that you want to start a snapshot job schedule for.
   *         </p>
   * @public
   */
  DashboardId: string | undefined;

  /**
   * <p>The ID of the schedule that you want to start a snapshot job schedule for. The schedule ID can be found in the Amazon Quick Sight console in the <b>Schedules</b> pane of the dashboard that the schedule is configured for.</p>
   * @public
   */
  ScheduleId: string | undefined;
}

/**
 * @public
 */
export interface StartDashboardSnapshotJobScheduleResponse {
  /**
   * <p>
   *             The Amazon Web Services request ID for this operation.
   *         </p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>The HTTP status of the request</p>
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to tag.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the
   * 			resource.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {
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
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to untag.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The keys of the key-value pairs for the resource tag or tags assigned to the
   * 			resource.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {
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
export interface UpdateAccountCustomizationRequest {
  /**
   * <p>The ID for the Amazon Web Services account that you want to update Quick Sight customizations
   *             for.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace that you want to update Quick Sight customizations for.</p>
   * @public
   */
  Namespace?: string | undefined;

  /**
   * <p>The Quick Sight customizations you're updating. </p>
   * @public
   */
  AccountCustomization: AccountCustomization | undefined;
}

/**
 * @public
 */
export interface UpdateAccountCustomizationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the updated customization for this Amazon Web Services account.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID for the Amazon Web Services account that you want to update Quick Sight customizations
   *             for.</p>
   * @public
   */
  AwsAccountId?: string | undefined;

  /**
   * <p>The namespace associated with the customization that you're updating.</p>
   * @public
   */
  Namespace?: string | undefined;

  /**
   * <p>The Quick Sight customizations you're updating. </p>
   * @public
   */
  AccountCustomization?: AccountCustomization | undefined;

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
export interface UpdateAccountCustomPermissionRequest {
  /**
   * <p>The name of the custom permissions profile that you want to apply to an account.</p>
   * @public
   */
  CustomPermissionsName: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account for which you want to apply a custom permissions profile.</p>
   * @public
   */
  AwsAccountId: string | undefined;
}

/**
 * @public
 */
export interface UpdateAccountCustomPermissionResponse {
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
export interface UpdateAccountSettingsRequest {
  /**
   * <p>The ID for the Amazon Web Services account that contains the Quick Sight settings that you want to
   *             list.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The default namespace for this Amazon Web Services account. Currently, the default is
   *                 <code>default</code>. IAM users that
   *             register for the first time with Amazon Quick Sight provide an email address that becomes
   *             associated with the default namespace.
   *         </p>
   * @public
   */
  DefaultNamespace: string | undefined;

  /**
   * <p>The email address that you want Quick Sight to send notifications to regarding your
   *             Amazon Web Services account or Quick Sight subscription.</p>
   * @public
   */
  NotificationEmail?: string | undefined;

  /**
   * <p>A boolean value that determines whether or not an Quick Sight account can be deleted. A <code>True</code> value doesn't allow the account to be deleted and results in an error message if a user tries to make a <code>DeleteAccountSubscription</code> request. A <code>False</code> value will allow the account to be deleted.</p>
   * @public
   */
  TerminationProtectionEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateAccountSettingsResponse {
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
export interface UpdateActionConnectorRequest {
  /**
   * <p>The Amazon Web Services account ID that contains the action connector to update.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The unique identifier of the action connector to update.</p>
   * @public
   */
  ActionConnectorId: string | undefined;

  /**
   * <p>The new name for the action connector.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The updated authentication configuration for connecting to the external service.</p>
   * @public
   */
  AuthenticationConfig: AuthConfig | undefined;

  /**
   * <p>The updated description of the action connector.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The updated ARN of the VPC connection to use for secure connectivity.</p>
   * @public
   */
  VpcConnectionArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateActionConnectorResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated action connector.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The unique identifier of the updated action connector.</p>
   * @public
   */
  ActionConnectorId?: string | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>The status of the update operation.</p>
   * @public
   */
  UpdateStatus?: ResourceStatus | undefined;

  /**
   * <p>The HTTP status code of the request.</p>
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface UpdateActionConnectorPermissionsRequest {
  /**
   * <p>The Amazon Web Services account ID that contains the action connector.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The unique identifier of the action connector whose permissions you want to update.</p>
   * @public
   */
  ActionConnectorId: string | undefined;

  /**
   * <p>The permissions to grant to users and groups for this action connector.</p>
   * @public
   */
  GrantPermissions?: ResourcePermission[] | undefined;

  /**
   * <p>The permissions to revoke from users and groups for this action connector.</p>
   * @public
   */
  RevokePermissions?: ResourcePermission[] | undefined;
}

/**
 * @public
 */
export interface UpdateActionConnectorPermissionsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the action connector.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The unique identifier of the action connector.</p>
   * @public
   */
  ActionConnectorId?: string | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>The HTTP status code of the request.</p>
   * @public
   */
  Status?: number | undefined;

  /**
   * <p>The updated permissions configuration for the action connector.</p>
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;
}

/**
 * @public
 */
export interface UpdateAnalysisRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the analysis that you're updating.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the analysis that you're updating. This ID displays in the URL of the
   *             analysis.</p>
   * @public
   */
  AnalysisId: string | undefined;

  /**
   * <p>A descriptive name for the analysis that you're updating. This name displays for the
   *             analysis in the Amazon Quick Sight console.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The parameter names and override values that you want to use. An analysis can have
   *             any parameter type, and some parameters might accept multiple values. </p>
   * @public
   */
  Parameters?: _Parameters | undefined;

  /**
   * <p>A source entity to use for the analysis that you're updating. This metadata structure
   *             contains details that describe a source template and one or more datasets.</p>
   * @public
   */
  SourceEntity?: AnalysisSourceEntity | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the theme to apply to the analysis that you're
   *             creating. To see the theme in the Amazon Quick Sight console, make sure that you have access to
   *             it.</p>
   * @public
   */
  ThemeArn?: string | undefined;

  /**
   * <p>The definition of an analysis.</p>
   *          <p>A definition is the data model of all features in a Dashboard, Template, or Analysis.</p>
   * @public
   */
  Definition?: AnalysisDefinition | undefined;

  /**
   * <p>The option to relax the validation needed to update an analysis with definition objects. This skips the validation step for specific errors.</p>
   * @public
   */
  ValidationStrategy?: ValidationStrategy | undefined;
}

/**
 * @public
 */
export interface UpdateAnalysisResponse {
  /**
   * <p>The ARN of the analysis that you're updating.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID of the analysis.</p>
   * @public
   */
  AnalysisId?: string | undefined;

  /**
   * <p>The update status of the last update that was made to the analysis.</p>
   * @public
   */
  UpdateStatus?: ResourceStatus | undefined;

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
export interface UpdateAnalysisPermissionsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the analysis whose permissions you're
   *             updating. You must be using the Amazon Web Services account that the analysis is in.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the analysis whose permissions you're updating. The ID is part of the
   *             analysis URL.</p>
   * @public
   */
  AnalysisId: string | undefined;

  /**
   * <p>A structure that describes the permissions to add and the principal to add them
   *             to.</p>
   * @public
   */
  GrantPermissions?: ResourcePermission[] | undefined;

  /**
   * <p>A structure that describes the permissions to remove and the principal to remove them
   *             from.</p>
   * @public
   */
  RevokePermissions?: ResourcePermission[] | undefined;
}

/**
 * @public
 */
export interface UpdateAnalysisPermissionsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the analysis that you updated.</p>
   * @public
   */
  AnalysisArn?: string | undefined;

  /**
   * <p>The ID of the analysis that you updated permissions for.</p>
   * @public
   */
  AnalysisId?: string | undefined;

  /**
   * <p>A structure that describes the principals and the resource-level permissions on an
   *             analysis.</p>
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
export interface UpdateApplicationWithTokenExchangeGrantRequest {
  /**
   * <p>The ID of the Amazon Web Services account to be updated with a token exchange grant.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace of the Quick Suite application.</p>
   * @public
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationWithTokenExchangeGrantResponse {
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
export interface UpdateBrandRequest {
  /**
   * <p>The ID of the Amazon Web Services account that owns the brand.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the Quick Suite brand.</p>
   * @public
   */
  BrandId: string | undefined;

  /**
   * <p>The definition of the brand.</p>
   * @public
   */
  BrandDefinition?: BrandDefinition | undefined;
}

/**
 * @public
 */
export interface UpdateBrandResponse {
  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>The details of the brand.</p>
   * @public
   */
  BrandDetail?: BrandDetail | undefined;

  /**
   * <p>The definition of the brand.</p>
   * @public
   */
  BrandDefinition?: BrandDefinition | undefined;
}

/**
 * @public
 */
export interface UpdateBrandAssignmentRequest {
  /**
   * <p>The ID of the Amazon Web Services account that owns the brand assignment.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the brand.</p>
   * @public
   */
  BrandArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateBrandAssignmentResponse {
  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the brand.</p>
   * @public
   */
  BrandArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateBrandPublishedVersionRequest {
  /**
   * <p>The ID of the Amazon Web Services account that owns the brand.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the Quick Suite brand.</p>
   * @public
   */
  BrandId: string | undefined;

  /**
   * <p>The ID of the published version.</p>
   * @public
   */
  VersionId: string | undefined;
}

/**
 * @public
 */
export interface UpdateBrandPublishedVersionResponse {
  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>The ID of the published version.</p>
   * @public
   */
  VersionId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateCustomPermissionsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the custom permissions profile that you want to update.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The name of the custom permissions profile that you want to update.</p>
   * @public
   */
  CustomPermissionsName: string | undefined;

  /**
   * <p>A set of actions to include in the custom permissions profile.</p>
   * @public
   */
  Capabilities?: Capabilities | undefined;
}

/**
 * @public
 */
export interface UpdateCustomPermissionsResponse {
  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the custom permissions profile.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDashboardRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the dashboard that you're
   *             updating.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dashboard.</p>
   * @public
   */
  DashboardId: string | undefined;

  /**
   * <p>The display name of the dashboard.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The entity that you are using as a source when you update the dashboard. In
   *                 <code>SourceEntity</code>, you specify the type of object you're using as source.
   *             You can only update a dashboard from a template, so you use a
   *                 <code>SourceTemplate</code> entity. If you need to update a dashboard from an
   *             analysis, first convert the analysis to a template by using the <code>
   *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateTemplate.html">CreateTemplate</a>
   *             </code> API operation. For <code>SourceTemplate</code>,
   *             specify the Amazon Resource Name (ARN) of the source template. The
   *                 <code>SourceTemplate</code> ARN can contain any Amazon Web Services account and any
   *                 Amazon Quick Sight-supported Amazon Web Services Region. </p>
   *          <p>Use the <code>DataSetReferences</code> entity within <code>SourceTemplate</code> to
   *             list the replacement datasets for the placeholders listed in the original. The schema in
   *             each dataset must match its placeholder. </p>
   * @public
   */
  SourceEntity?: DashboardSourceEntity | undefined;

  /**
   * <p>A structure that contains the parameters of the dashboard. These are parameter
   *             overrides for a dashboard. A dashboard can have any type of parameters, and some
   *             parameters might accept multiple values.</p>
   * @public
   */
  Parameters?: _Parameters | undefined;

  /**
   * <p>A description for the first version of the dashboard being created.</p>
   * @public
   */
  VersionDescription?: string | undefined;

  /**
   * <p>Options for publishing the dashboard when you create it:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AvailabilityStatus</code> for <code>AdHocFilteringOption</code> - This
   *                     status can be either <code>ENABLED</code> or <code>DISABLED</code>. When this is
   *                     set to <code>DISABLED</code>, Amazon Quick Sight disables the left filter pane on
   *                     the published dashboard, which can be used for ad hoc (one-time) filtering. This
   *                     option is <code>ENABLED</code> by default. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AvailabilityStatus</code> for <code>ExportToCSVOption</code> - This
   *                     status can be either <code>ENABLED</code> or <code>DISABLED</code>. The visual
   *                     option to export data to .CSV format isn't enabled when this is set to
   *                         <code>DISABLED</code>. This option is <code>ENABLED</code> by default.
   *                 </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VisibilityState</code> for <code>SheetControlsOption</code> - This
   *                     visibility state can be either <code>COLLAPSED</code> or <code>EXPANDED</code>.
   *                     This option is <code>COLLAPSED</code> by default. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AvailabilityStatus</code> for <code>QuickSuiteActionsOption</code> -
   *                     This status can be either <code>ENABLED</code> or <code>DISABLED</code>.
   *                     Features related to Actions in Amazon Quick Suite on dashboards are disabled
   *                     when this is set to <code>DISABLED</code>. This option is <code>DISABLED</code>
   *                     by default.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AvailabilityStatus</code> for <code>ExecutiveSummaryOption</code> - This
   *                     status can be either <code>ENABLED</code> or <code>DISABLED</code>. The option
   *                     to build an executive summary is disabled when this is set to
   *                         <code>DISABLED</code>. This option is <code>ENABLED</code> by
   *                     default.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AvailabilityStatus</code> for <code>DataStoriesSharingOption</code> -
   *                     This status can be either <code>ENABLED</code> or <code>DISABLED</code>. The
   *                     option to share a data story is disabled when this is set to
   *                         <code>DISABLED</code>. This option is <code>ENABLED</code> by
   *                     default.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DashboardPublishOptions?: DashboardPublishOptions | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the theme that is being used for this dashboard. If
   *             you add a value for this field, it overrides the value that was originally associated
   *             with the entity. The theme ARN must exist in the same Amazon Web Services account where
   *             you create the dashboard.</p>
   * @public
   */
  ThemeArn?: string | undefined;

  /**
   * <p>The definition of a dashboard.</p>
   *          <p>A definition is the data model of all features in a Dashboard, Template, or Analysis.</p>
   * @public
   */
  Definition?: DashboardVersionDefinition | undefined;

  /**
   * <p>The option to relax the validation needed to update a dashboard with definition
   *             objects. This skips the validation step for specific errors.</p>
   * @public
   */
  ValidationStrategy?: ValidationStrategy | undefined;
}

/**
 * @public
 */
export interface UpdateDashboardResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ARN of the dashboard, including the version number.</p>
   * @public
   */
  VersionArn?: string | undefined;

  /**
   * <p>The ID for the dashboard.</p>
   * @public
   */
  DashboardId?: string | undefined;

  /**
   * <p>The creation status of the request.</p>
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
export interface UpdateDashboardLinksRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the dashboard whose links you
   *             want to update.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dashboard.</p>
   * @public
   */
  DashboardId: string | undefined;

  /**
   * <p> list of analysis Amazon Resource Names (ARNs) to be linked to the dashboard.</p>
   * @public
   */
  LinkEntities: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateDashboardLinksResponse {
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

  /**
   * <p>The Amazon Resource Name (ARN) of the dashboard.</p>
   * @public
   */
  DashboardArn?: string | undefined;

  /**
   * <p>A list of analysis Amazon Resource Names (ARNs) to be linked to the dashboard.</p>
   * @public
   */
  LinkEntities?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateDashboardPermissionsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the dashboard whose permissions
   *             you're updating.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dashboard.</p>
   * @public
   */
  DashboardId: string | undefined;

  /**
   * <p>The permissions that you want to grant on this resource.</p>
   * @public
   */
  GrantPermissions?: ResourcePermission[] | undefined;

  /**
   * <p>The permissions that you want to revoke from this resource.</p>
   * @public
   */
  RevokePermissions?: ResourcePermission[] | undefined;

  /**
   * <p>Grants link permissions to all users in a defined namespace.</p>
   * @public
   */
  GrantLinkPermissions?: ResourcePermission[] | undefined;

  /**
   * <p>Revokes link permissions from all users in a defined namespace.</p>
   * @public
   */
  RevokeLinkPermissions?: ResourcePermission[] | undefined;
}

/**
 * @public
 */
export interface UpdateDashboardPermissionsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the dashboard.</p>
   * @public
   */
  DashboardArn?: string | undefined;

  /**
   * <p>The ID for the dashboard.</p>
   * @public
   */
  DashboardId?: string | undefined;

  /**
   * <p>Information about the permissions on the dashboard.</p>
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

  /**
   * <p>Updates the permissions of a shared link to an Quick Sight dashboard.</p>
   * @public
   */
  LinkSharingConfiguration?: LinkSharingConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateDashboardPublishedVersionRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the dashboard that you're
   *             updating.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dashboard.</p>
   * @public
   */
  DashboardId: string | undefined;

  /**
   * <p>The version number of the dashboard.</p>
   * @public
   */
  VersionNumber: number | undefined;
}

/**
 * @public
 */
export interface UpdateDashboardPublishedVersionResponse {
  /**
   * <p>The ID for the dashboard.</p>
   * @public
   */
  DashboardId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the dashboard.</p>
   * @public
   */
  DashboardArn?: string | undefined;

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
export interface UpdateDashboardsQAConfigurationRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the dashboard QA configuration that you want to update.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The status of dashboards QA configuration that you want to update.</p>
   * @public
   */
  DashboardsQAStatus: DashboardsQAStatus | undefined;
}

/**
 * @public
 */
export interface UpdateDashboardsQAConfigurationResponse {
  /**
   * <p>A value that indicates whether the dashboard QA configuration is enabled or not.</p>
   * @public
   */
  DashboardsQAStatus?: DashboardsQAStatus | undefined;

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
export interface UpdateDataSetRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dataset that you want to update. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>The display name for the dataset.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Declares the physical tables that are available in the underlying data sources.</p>
   * @public
   */
  PhysicalTableMap: Record<string, PhysicalTable> | undefined;

  /**
   * <p>Configures the combination and transformation of the data from the physical
   * 			tables. This parameter is used with the legacy data preparation experience.</p>
   *
   * @deprecated Only used in the legacy data preparation experience.
   * @public
   */
  LogicalTableMap?: Record<string, LogicalTable> | undefined;

  /**
   * <p>Indicates whether you want to import the data into SPICE.</p>
   * @public
   */
  ImportMode: DataSetImportMode | undefined;

  /**
   * <p>Groupings of columns that work together in certain Amazon Quick Sight features.
   * 			Currently, only geospatial hierarchy is supported.</p>
   * @public
   */
  ColumnGroups?: ColumnGroup[] | undefined;

  /**
   * <p>The folder that contains fields and nested subfolders for your dataset.</p>
   * @public
   */
  FieldFolders?: Record<string, FieldFolder> | undefined;

  /**
   * <p>The row-level security configuration for the data you want to create. This parameter is used
   * 			with the legacy data preparation experience.</p>
   *
   * @deprecated Only used in the legacy data preparation experience.
   * @public
   */
  RowLevelPermissionDataSet?: RowLevelPermissionDataSet | undefined;

  /**
   * <p>The configuration of tags on a dataset to set row-level security. Row-level security
   * 			tags are currently supported for anonymous embedding only. This parameter is used with
   * 		the legacy data preparation experience.</p>
   *
   * @deprecated Only used in the legacy data preparation experience.
   * @public
   */
  RowLevelPermissionTagConfiguration?: RowLevelPermissionTagConfiguration | undefined;

  /**
   * <p>A set of one or more definitions of a <code>
   *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ColumnLevelPermissionRule.html">ColumnLevelPermissionRule</a>
   *             </code>.</p>
   * @public
   */
  ColumnLevelPermissionRules?: ColumnLevelPermissionRule[] | undefined;

  /**
   * <p>The usage configuration to apply to child datasets that reference this dataset as a source.</p>
   * @public
   */
  DataSetUsageConfiguration?: DataSetUsageConfiguration | undefined;

  /**
   * <p>The parameter declarations of the dataset.</p>
   * @public
   */
  DatasetParameters?: DatasetParameter[] | undefined;

  /**
   * <p>The configuration for the performance optimization of the dataset that contains a
   * 				<code>UniqueKey</code> configuration.</p>
   * @public
   */
  PerformanceConfiguration?: PerformanceConfiguration | undefined;

  /**
   * <p>The data preparation configuration for the dataset. This configuration defines the source tables,
   * 			transformation steps, and destination tables used to prepare the data.
   * 			Required when using the new data preparation experience.</p>
   * @public
   */
  DataPrepConfiguration?: DataPrepConfiguration | undefined;

  /**
   * <p>The semantic model configuration for the dataset. This configuration defines how the prepared
   * 			data is structured for an analysis, including table mappings and row-level security configurations.
   * 			Required when using the new data preparation experience.</p>
   * @public
   */
  SemanticModelConfiguration?: SemanticModelConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateDataSetResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID for the dataset that you want to update. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  DataSetId?: string | undefined;

  /**
   * <p>The ARN for the ingestion, which is triggered as a result of dataset creation if the
   * 			import mode is SPICE.</p>
   * @public
   */
  IngestionArn?: string | undefined;

  /**
   * <p>The ID of the ingestion, which is triggered as a result of dataset creation if the
   * 			import mode is SPICE.</p>
   * @public
   */
  IngestionId?: string | undefined;

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
export interface UpdateDataSetPermissionsRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dataset whose permissions you want to update. This ID is unique per
   * 				Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>The resource permissions that you want to grant to the dataset.</p>
   * @public
   */
  GrantPermissions?: ResourcePermission[] | undefined;

  /**
   * <p>The resource permissions that you want to revoke from the dataset.</p>
   * @public
   */
  RevokePermissions?: ResourcePermission[] | undefined;
}

/**
 * @public
 */
export interface UpdateDataSetPermissionsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   * @public
   */
  DataSetArn?: string | undefined;

  /**
   * <p>The ID for the dataset whose permissions you want to update. This ID is unique per
   * 				Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  DataSetId?: string | undefined;

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
export interface UpdateDataSourceRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the data source. This ID is unique per Amazon Web Services Region for each
   * 				Amazon Web Services account. </p>
   * @public
   */
  DataSourceId: string | undefined;

  /**
   * <p>A display name for the data source.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The parameters that Amazon Quick Sight uses to connect to your underlying
   * 			source.</p>
   * @public
   */
  DataSourceParameters?: DataSourceParameters | undefined;

  /**
   * <p>The credentials that Amazon Quick Sight that uses to connect to your underlying source.
   * 			Currently, only credentials based on user name and password are supported.</p>
   * @public
   */
  Credentials?: DataSourceCredentials | undefined;

  /**
   * <p>Use this parameter only when you want Amazon Quick Sight to use a VPC connection when
   * 			connecting to your underlying source.</p>
   * @public
   */
  VpcConnectionProperties?: VpcConnectionProperties | undefined;

  /**
   * <p>Secure Socket Layer (SSL) properties that apply when Amazon Quick Sight connects to
   * 			your underlying source.</p>
   * @public
   */
  SslProperties?: SslProperties | undefined;
}

/**
 * @public
 */
export interface UpdateDataSourceResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the data source.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID of the data source. This ID is unique per Amazon Web Services Region for each
   * 				Amazon Web Services account.</p>
   * @public
   */
  DataSourceId?: string | undefined;

  /**
   * <p>The update status of the data source's last update.</p>
   * @public
   */
  UpdateStatus?: ResourceStatus | undefined;

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
export interface UpdateDataSourcePermissionsRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the data source. This ID is unique per Amazon Web Services Region for each
   * 				Amazon Web Services account. </p>
   * @public
   */
  DataSourceId: string | undefined;

  /**
   * <p>A list of resource permissions that you want to grant on the data source.</p>
   * @public
   */
  GrantPermissions?: ResourcePermission[] | undefined;

  /**
   * <p>A list of resource permissions that you want to revoke on the data source.</p>
   * @public
   */
  RevokePermissions?: ResourcePermission[] | undefined;
}

/**
 * @public
 */
export interface UpdateDataSourcePermissionsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the data source.</p>
   * @public
   */
  DataSourceArn?: string | undefined;

  /**
   * <p>The ID of the data source. This ID is unique per Amazon Web Services Region for each
   * 				Amazon Web Services account.</p>
   * @public
   */
  DataSourceId?: string | undefined;

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
export interface UpdateDefaultQBusinessApplicationRequest {
  /**
   * <p>The ID of the Quick Sight account that is connected to the Amazon Q Business application that you want to update.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The Quick Sight namespace that contains the linked Amazon Q Business application. If this field is left blank, the default namespace is used. Currently, the default namespace is the only valid value for this parameter.</p>
   * @public
   */
  Namespace?: string | undefined;

  /**
   * <p>The ID of the Amazon Q Business application that you want to update.</p>
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface UpdateDefaultQBusinessApplicationResponse {
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
export interface UpdateFlowPermissionsInput {
  /**
   * <p>The ID of the Amazon Web Services account that contains the flow you are updating permissions against.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The unique identifier of the flow to update permissions for.</p>
   * @public
   */
  FlowId: string | undefined;

  /**
   * <p>The permissions that you want to grant on this flow.</p>
   * @public
   */
  GrantPermissions?: Permission[] | undefined;

  /**
   * <p>The permissions that you want to revoke from this flow.</p>
   * @public
   */
  RevokePermissions?: Permission[] | undefined;
}

/**
 * @public
 */
export interface UpdateFlowPermissionsOutput {
  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow you are updating permissions against.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The permissions on the flow after they are updated.</p>
   * @public
   */
  Permissions: Permission[] | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId: string | undefined;

  /**
   * <p>The unique identifier of the flow with updated permissions.</p>
   * @public
   */
  FlowId: string | undefined;
}

/**
 * @public
 */
export interface UpdateFolderRequest {
  /**
   * <p>The ID for the Amazon Web Services account that contains the folder to update.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the folder.</p>
   * @public
   */
  FolderId: string | undefined;

  /**
   * <p>The name of the folder.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface UpdateFolderResponse {
  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the folder.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID of the folder.</p>
   * @public
   */
  FolderId?: string | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFolderPermissionsRequest {
  /**
   * <p>The ID for the Amazon Web Services account that contains the folder to update.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the folder.</p>
   * @public
   */
  FolderId: string | undefined;

  /**
   * <p>The permissions that you want to grant on a resource. Namespace ARNs are not supported <code>Principal</code> values for folder permissions.</p>
   * @public
   */
  GrantPermissions?: ResourcePermission[] | undefined;

  /**
   * <p>The permissions that you want to revoke from a resource.  Namespace ARNs are not supported <code>Principal</code> values for folder permissions.</p>
   * @public
   */
  RevokePermissions?: ResourcePermission[] | undefined;
}

/**
 * @public
 */
export interface UpdateFolderPermissionsResponse {
  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the folder.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID of the folder.</p>
   * @public
   */
  FolderId?: string | undefined;

  /**
   * <p>Information about the permissions for the folder.</p>
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateGroupRequest {
  /**
   * <p>The name of the group that you want to update.</p>
   * @public
   */
  GroupName: string | undefined;

  /**
   * <p>The description for the group that you want to update.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the
   * 			Amazon Web Services account that contains your Amazon Quick Sight account.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace of the group that you want to update.</p>
   * @public
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface UpdateGroupResponse {
  /**
   * <p>The name of the group.</p>
   * @public
   */
  Group?: Group | undefined;

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
export interface UpdateIAMPolicyAssignmentRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the IAM policy
   * 			assignment. </p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The name of the assignment, also called a rule.
   * 			The
   * 			name must be unique within the
   * 			Amazon Web Services account.</p>
   * @public
   */
  AssignmentName: string | undefined;

  /**
   * <p>The namespace of the assignment.</p>
   * @public
   */
  Namespace: string | undefined;

  /**
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
   * @public
   */
  AssignmentStatus?: AssignmentStatus | undefined;

  /**
   * <p>The ARN for the IAM policy to apply to the Amazon Quick Sight users and
   * 			groups specified in this assignment.</p>
   * @public
   */
  PolicyArn?: string | undefined;

  /**
   * <p>The Amazon Quick Sight users, groups, or both that you want to assign the policy
   * 			to.</p>
   * @public
   */
  Identities?: Record<string, string[]> | undefined;
}

/**
 * @public
 */
export interface UpdateIAMPolicyAssignmentResponse {
  /**
   * <p>The name of the assignment or rule.</p>
   * @public
   */
  AssignmentName?: string | undefined;

  /**
   * <p>The ID of the assignment.</p>
   * @public
   */
  AssignmentId?: string | undefined;

  /**
   * <p>The ARN for the IAM policy applied to the Amazon Quick Sight users and
   * 			groups specified in this assignment.</p>
   * @public
   */
  PolicyArn?: string | undefined;

  /**
   * <p>The Amazon Quick Sight users, groups, or both that the IAM policy is
   * 			assigned to.</p>
   * @public
   */
  Identities?: Record<string, string[]> | undefined;

  /**
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
   * @public
   */
  AssignmentStatus?: AssignmentStatus | undefined;

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
export interface UpdateIdentityPropagationConfigRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the identity propagation configuration that you want to update.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The name of the Amazon Web Services service that contains the authorized targets that you want to add or update.</p>
   * @public
   */
  Service: ServiceType | undefined;

  /**
   * <p>Specifies a list of application ARNs that represent the authorized targets for a service.</p>
   * @public
   */
  AuthorizedTargets?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateIdentityPropagationConfigResponse {
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
export interface UpdateIpRestrictionRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the IP rules.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>A map that describes the updated IP rules with CIDR ranges and descriptions.</p>
   * @public
   */
  IpRestrictionRuleMap?: Record<string, string> | undefined;

  /**
   * <p>A map of VPC IDs and their corresponding rules. When you configure this parameter, traffic from all VPC endpoints that are present in the specified VPC is allowed.</p>
   * @public
   */
  VpcIdRestrictionRuleMap?: Record<string, string> | undefined;

  /**
   * <p>A map of allowed VPC endpoint IDs and their corresponding rule descriptions.</p>
   * @public
   */
  VpcEndpointIdRestrictionRuleMap?: Record<string, string> | undefined;

  /**
   * <p>A value that specifies whether IP rules are turned on.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateIpRestrictionResponse {
  /**
   * <p>The ID of the Amazon Web Services account that contains the IP rules.</p>
   * @public
   */
  AwsAccountId?: string | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>The HTTP status of the request. </p>
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface UpdateKeyRegistrationRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the customer managed key registration that you want to update.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>A list of <code>RegisteredCustomerManagedKey</code> objects to be updated to the Quick Sight account.</p>
   * @public
   */
  KeyRegistration: RegisteredCustomerManagedKey[] | undefined;
}

/**
 * <p>A success entry that occurs when a <code>KeyRegistration</code> job is successfully applied to the Quick Sight account.</p>
 * @public
 */
export interface SuccessfulKeyRegistrationEntry {
  /**
   * <p>The ARN of the KMS key that is associated with the <code>SuccessfulKeyRegistrationEntry</code> entry.</p>
   * @public
   */
  KeyArn: string | undefined;

  /**
   * <p>The HTTP status of a <code>SuccessfulKeyRegistrationEntry</code> entry.</p>
   * @public
   */
  StatusCode: number | undefined;
}

/**
 * @public
 */
export interface UpdateKeyRegistrationResponse {
  /**
   * <p>A list of all customer managed key registrations that failed to update.</p>
   * @public
   */
  FailedKeyRegistration?: FailedKeyRegistrationEntry[] | undefined;

  /**
   * <p>A list of all customer managed key registrations that were successfully updated.</p>
   * @public
   */
  SuccessfulKeyRegistration?: SuccessfulKeyRegistrationEntry[] | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePublicSharingSettingsRequest {
  /**
   * <p>The Amazon Web Services account ID associated with your Amazon Quick Sight
   *             subscription.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>A Boolean value that indicates whether public sharing is turned on for an Quick Suite account.</p>
   * @public
   */
  PublicSharingEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdatePublicSharingSettingsResponse {
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
export interface UpdateQPersonalizationConfigurationRequest {
  /**
   * <p>The ID of the Amazon Web Services account account that contains the personalization configuration that the user wants to update.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>An option to allow Amazon Quick Sight to customize data stories with user specific metadata, specifically location and job information, in your IAM Identity Center instance.</p>
   * @public
   */
  PersonalizationMode: PersonalizationMode | undefined;
}

/**
 * @public
 */
export interface UpdateQPersonalizationConfigurationResponse {
  /**
   * <p>The personalization mode that is used for the personalization configuration.</p>
   * @public
   */
  PersonalizationMode?: PersonalizationMode | undefined;

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
export interface UpdateQuickSightQSearchConfigurationRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the Quick Sight Q Search configuration that you want to update.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The status of the Quick Sight Q Search configuration that the user wants to update.</p>
   * @public
   */
  QSearchStatus: QSearchStatus | undefined;
}

/**
 * @public
 */
export interface UpdateQuickSightQSearchConfigurationResponse {
  /**
   * <p>The status of the Quick Sight Q Search configuration.</p>
   * @public
   */
  QSearchStatus?: QSearchStatus | undefined;

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
export interface UpdateRefreshScheduleRequest {
  /**
   * <p>The ID of the dataset.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The refresh schedule.</p>
   * @public
   */
  Schedule: RefreshSchedule | undefined;
}

/**
 * @public
 */
export interface UpdateRefreshScheduleResponse {
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

  /**
   * <p>The ID of the refresh schedule.</p>
   * @public
   */
  ScheduleId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the refresh schedule.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRoleCustomPermissionRequest {
  /**
   * <p>The name of the custom permission that you want to update the role with.</p>
   * @public
   */
  CustomPermissionsName: string | undefined;

  /**
   * <p>The name of role tht you want to update.</p>
   * @public
   */
  Role: Role | undefined;

  /**
   * <p>The ID for the Amazon Web Services account that you want to create a group in. The Amazon Web Services account ID that you provide must be the same Amazon Web Services account that contains your Amazon Quick Sight account.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace that contains the role that you want to update.</p>
   * @public
   */
  Namespace: string | undefined;
}

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
