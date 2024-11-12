// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { AccountCustomization, ActiveIAMPolicyAssignment, ResourceStatus } from "./models_0";

import {
  _Parameters,
  _ParametersFilterSensitiveLog,
  AnalysisDefinition,
  AnalysisSearchFilter,
  AnalysisSourceEntity,
  AnalysisSummary,
  AnonymousUserEmbeddingExperienceConfiguration,
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
  AssetBundleImportSourceFilterSensitiveLog,
  AssignmentStatus,
  AuthorizedTargetsByService,
  BookmarksConfigurations,
  ColumnGroup,
  ColumnLevelPermissionRule,
  DashboardPublishOptions,
  DashboardSourceEntity,
  DashboardVersionDefinition,
  DashboardVisualId,
  DataSetImportMode,
  DatasetParameter,
  DataSetUsageConfiguration,
  DataSourceParameters,
  FieldFolder,
  FilterOperator,
  LinkSharingConfiguration,
  LogicalTable,
  LogicalTableFilterSensitiveLog,
  PhysicalTable,
  ResourcePermission,
  ServiceType,
  SharedViewConfigurations,
  SslProperties,
  Tag,
  TopicIR,
  TopicIRFilterSensitiveLog,
  TopicTemplate,
  ValidationStrategy,
  VisualRole,
  VpcConnectionProperties,
} from "./models_2";

import {
  DashboardSearchFilter,
  DashboardSummary,
  DashboardVersionSummary,
  DataSetRefreshProperties,
  DataSetSearchFilter,
  DataSetSummary,
  DataSource,
  DataSourceCredentials,
  DataSourceSearchFilter,
  DataSourceSummary,
  FolderType,
  Group,
  GroupMember,
  IncludeFolderMembers,
  Ingestion,
  NamespaceInfoV2,
  PersonalizationMode,
  RefreshSchedule,
  RegisteredCustomerManagedKey,
  Role,
  RowLevelPermissionDataSet,
  RowLevelPermissionTagConfiguration,
  RowLevelPermissionTagConfigurationFilterSensitiveLog,
  SharingModel,
  SnapshotConfiguration,
  TemplateAlias,
  TemplateSourceEntity,
  TemplateVersionDefinition,
  ThemeAlias,
  ThemeConfiguration,
  ThemeType,
  TopicDetails,
  TopicRefreshSchedule,
  TopicUserExperienceVersion,
  VPCConnectionAvailabilityStatus,
  VPCConnectionResourceStatus,
} from "./models_3";

import { QuickSightServiceException as __BaseException } from "./QuickSightServiceException";

/**
 * @public
 */
export interface DescribeTopicPermissionsResponse {
  /**
   * <p>The ID of the topic that you want to describe. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  TopicId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the topic.</p>
   * @public
   */
  TopicArn?: string | undefined;

  /**
   * <p>A list of resource permissions that are configured to the topic.</p>
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
export interface DescribeTopicRefreshRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the topic whose refresh you want
   *          to describe.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the topic that you want to describe. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  TopicId: string | undefined;

  /**
   * <p>The ID of the refresh, which is performed when the topic is created or updated.</p>
   * @public
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
 * <p>The details about the refresh of a topic.</p>
 * @public
 */
export interface TopicRefreshDetails {
  /**
   * <p>The Amazon Resource Name (ARN) of the topic refresh.</p>
   * @public
   */
  RefreshArn?: string | undefined;

  /**
   * <p>The ID of the refresh, which occurs as a result of topic creation or topic update.</p>
   * @public
   */
  RefreshId?: string | undefined;

  /**
   * <p>The status of the refresh job that indicates whether the job is still running, completed successfully, or failed.</p>
   * @public
   */
  RefreshStatus?: TopicRefreshStatus | undefined;
}

/**
 * @public
 */
export interface DescribeTopicRefreshResponse {
  /**
   * <p>Details of the refresh, which is performed when the topic is created or updated.</p>
   * @public
   */
  RefreshDetails?: TopicRefreshDetails | undefined;

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
export interface DescribeTopicRefreshScheduleRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the topic that contains the refresh schedule that you want to describe. This
   *          ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  TopicId: string | undefined;

  /**
   * <p>The ID of the dataset.</p>
   * @public
   */
  DatasetId: string | undefined;
}

/**
 * @public
 */
export interface DescribeTopicRefreshScheduleResponse {
  /**
   * <p>The ID of the topic that contains the refresh schedule that you want to describe. This
   *          ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
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
   * <p>The definition of a refresh schedule.</p>
   * @public
   */
  RefreshSchedule?: TopicRefreshSchedule | undefined;

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
export interface DescribeUserRequest {
  /**
   * <p>The name of the user that you want to describe.</p>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>The ID for the Amazon Web Services account that the user is in. Currently, you use the ID for the
   * 			Amazon Web Services account that contains your Amazon QuickSight account.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   * @public
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
  ADMIN_PRO: "ADMIN_PRO",
  AUTHOR: "AUTHOR",
  AUTHOR_PRO: "AUTHOR_PRO",
  READER: "READER",
  READER_PRO: "READER_PRO",
  RESTRICTED_AUTHOR: "RESTRICTED_AUTHOR",
  RESTRICTED_READER: "RESTRICTED_READER",
} as const;

/**
 * @public
 */
export type UserRole = (typeof UserRole)[keyof typeof UserRole];

/**
 * <p>A registered user of Amazon QuickSight. </p>
 * @public
 */
export interface User {
  /**
   * <p>The Amazon Resource Name (ARN) for the user.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The user's user name. This value is required if you are registering a user that will be managed in Amazon QuickSight. In the output, the value for <code>UserName</code> is
   *                 <code>N/A</code> when the value for <code>IdentityType</code> is <code>IAM</code>
   *             and the corresponding IAM user is deleted.</p>
   * @public
   */
  UserName?: string | undefined;

  /**
   * <p>The user's email address.</p>
   * @public
   */
  Email?: string | undefined;

  /**
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
   *                   <code>READER_PRO</code>: Reader Pro adds Generative BI capabilities to the Reader role. Reader Pros have access to Amazon Q in Amazon QuickSight, can build stories with Amazon Q, and can generate executive summaries from dashboards.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AUTHOR_PRO</code>: Author Pro adds Generative BI capabilities to the Author role. Author Pros can author dashboards with natural language with Amazon Q, build stories with Amazon Q, create Topics for Q&A, and generate executive summaries from dashboards.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ADMIN_PRO</code>: Admin Pros are Author Pros who can also manage Amazon QuickSight administrative settings. Admin Pro users are billed at Author Pro pricing.</p>
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
   * @public
   */
  Role?: UserRole | undefined;

  /**
   * <p>The type of identity authentication used by the user.</p>
   * @public
   */
  IdentityType?: IdentityType | undefined;

  /**
   * <p>The active status of user. When you create an Amazon QuickSight user that's not an IAM user or an Active Directory user, that user is inactive until they sign in and provide a
   *             password.</p>
   * @public
   */
  Active?: boolean | undefined;

  /**
   * <p>The principal ID of the user.</p>
   * @public
   */
  PrincipalId?: string | undefined;

  /**
   * <p>The custom permissions profile associated with this user.</p>
   * @public
   */
  CustomPermissionsName?: string | undefined;

  /**
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
   * @public
   */
  ExternalLoginFederationProviderType?: string | undefined;

  /**
   * <p>The URL of the external login provider.</p>
   * @public
   */
  ExternalLoginFederationProviderUrl?: string | undefined;

  /**
   * <p>The identity ID for the user in the external login provider.</p>
   * @public
   */
  ExternalLoginId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeUserResponse {
  /**
   * <p>The user name.</p>
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
export interface DescribeVPCConnectionRequest {
  /**
   * <p>The Amazon Web Services account ID of the account that contains the VPC connection that
   * 			you want described.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the VPC connection that
   * 			you're creating. This ID is a unique identifier for each Amazon Web Services Region in an Amazon Web Services account.</p>
   * @public
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
 * <p>The structure that contains information about a network interface.</p>
 * @public
 */
export interface NetworkInterface {
  /**
   * <p>The subnet ID associated with the network interface.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The availability zone that the network interface resides in.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>An error message.</p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p>The status of the network interface.</p>
   * @public
   */
  Status?: NetworkInterfaceStatus | undefined;

  /**
   * <p>The network interface ID.</p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;
}

/**
 * <p>The structure of a VPC connection.</p>
 * @public
 */
export interface VPCConnection {
  /**
   * <p>The ID of the VPC connection that you're creating. This ID is a unique identifier for each Amazon Web Services Region in an
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
   * <p>The ARN of the
   *                 IAM role associated with the VPC
   *             connection.</p>
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
export interface DescribeVPCConnectionResponse {
  /**
   * <p>A response object that provides information for the specified VPC connection.</p>
   * @public
   */
  VPCConnection?: VPCConnection | undefined;

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
 * <p>The domain specified isn't on the allow list. All domains for embedded dashboards must be
 * 			added to the approved list by an Amazon QuickSight admin.</p>
 * @public
 */
export class DomainNotWhitelistedException extends __BaseException {
  readonly name: "DomainNotWhitelistedException" = "DomainNotWhitelistedException";
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
 * <p>An entry that appears when a <code>KeyRegistration</code> update to Amazon QuickSight fails.</p>
 * @public
 */
export interface FailedKeyRegistrationEntry {
  /**
   * <p>The ARN of the KMS key that failed to update.</p>
   * @public
   */
  KeyArn?: string | undefined;

  /**
   * <p>A message that provides information about why a <code>FailedKeyRegistrationEntry</code> error occurred.</p>
   * @public
   */
  Message: string | undefined;

  /**
   * <p>The HTTP status of a <code>FailedKeyRegistrationEntry</code> error.</p>
   * @public
   */
  StatusCode: number | undefined;

  /**
   * <p>A boolean that indicates whether a <code>FailedKeyRegistrationEntry</code> resulted from user error. If the value of this property is <code>True</code>, the error was caused by user error. If the value of this property is <code>False</code>, the error occurred on the backend. If your job continues fail and with a <code>False</code>
   *             <code>SenderFault</code> value, contact Amazon Web Services Support.</p>
   * @public
   */
  SenderFault: boolean | undefined;
}

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
 * <p>An object that consists of a member Amazon Resource Name (ARN) and a member ID.</p>
 * @public
 */
export interface MemberIdArnPair {
  /**
   * <p>The ID of the member.</p>
   * @public
   */
  MemberId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the member.</p>
   * @public
   */
  MemberArn?: string | undefined;
}

/**
 * <p>A filter to use to search an Amazon QuickSight folder.</p>
 * @public
 */
export interface FolderSearchFilter {
  /**
   * <p>The comparison operator that you want to use as a filter, for example  <code>"Operator": "StringEquals"</code>. Valid values are  <code>"StringEquals"</code>  and  <code>"StringLike"</code>.</p>
   *          <p>If you set the operator value to <code>"StringEquals"</code>, you need to provide an ownership related filter in the <code>"NAME"</code> field and the arn of the user or group whose folders you want to search in the <code>"Value"</code> field. For example,  <code>"Name":"DIRECT_QUICKSIGHT_OWNER", "Operator": "StringEquals", "Value": "arn:aws:quicksight:us-east-1:1:user/default/UserName1"</code>.</p>
   *          <p>If you set the value to <code>"StringLike"</code>, you need to provide the name of the folders you are searching for. For example, <code>"Name":"FOLDER_NAME", "Operator": "StringLike", "Value": "Test"</code>. The <code>"StringLike"</code> operator only supports the <code>NAME</code> value <code>FOLDER_NAME</code>.</p>
   * @public
   */
  Operator?: FilterOperator | undefined;

  /**
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
   * @public
   */
  Name?: FolderFilterAttribute | undefined;

  /**
   * <p>The value of the named item (in this example, <code>PARENT_FOLDER_ARN</code>), that you want to use as a filter. For example, <code>"Value": "arn:aws:quicksight:us-east-1:1:folder/folderId"</code>.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>A summary of information about an existing Amazon QuickSight folder. </p>
 * @public
 */
export interface FolderSummary {
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
   * <p>The display name of the folder.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of folder.</p>
   * @public
   */
  FolderType?: FolderType | undefined;

  /**
   * <p>The time that the folder was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The time that the folder was last updated.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>The sharing scope of the folder.</p>
   * @public
   */
  SharingModel?: SharingModel | undefined;
}

/**
 * <p>The key-value pair used for the row-level security tags feature.</p>
 * @public
 */
export interface SessionTag {
  /**
   * <p>The key for the tag.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value that you want to assign the tag.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface GenerateEmbedUrlForAnonymousUserRequest {
  /**
   * <p>The ID for the Amazon Web Services account that contains the dashboard that you're embedding.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>How many minutes the session is valid. The session lifetime must be in [15-600] minutes range.</p>
   * @public
   */
  SessionLifetimeInMinutes?: number | undefined;

  /**
   * <p>The Amazon QuickSight namespace that the anonymous user virtually belongs to. If you are not using an Amazon QuickSight custom namespace, set this to <code>default</code>.</p>
   * @public
   */
  Namespace: string | undefined;

  /**
   * <p>The session tags used for row-level security. Before you use this parameter, make sure that you have configured the relevant datasets using the <code>DataSet$RowLevelPermissionTagConfiguration</code> parameter so that session tags can be used to provide row-level security.</p>
   *          <p>These are not the tags used for the Amazon Web Services resource tagging feature. For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/quicksight-dev-rls-tags.html">Using Row-Level Security (RLS) with Tags</a>in the <i>Amazon QuickSight User Guide</i>.</p>
   * @public
   */
  SessionTags?: SessionTag[] | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) for the Amazon QuickSight resources that the user
   *             is authorized to access during the lifetime of the session.</p>
   *          <p>If you choose <code>Dashboard</code> embedding experience, pass the list of dashboard ARNs in the
   *             account that you want the user to be able to view.</p>
   *          <p>If you want to make changes to the theme of your embedded content, pass a list of theme ARNs that the anonymous users need access to.</p>
   *          <p>Currently, you can pass up to 25 theme ARNs in each API call.</p>
   * @public
   */
  AuthorizedResourceArns: string[] | undefined;

  /**
   * <p>The configuration of the experience that you are embedding.</p>
   * @public
   */
  ExperienceConfiguration: AnonymousUserEmbeddingExperienceConfiguration | undefined;

  /**
   * <p>The domains that you want to add to the allow list for access to the generated URL that
   *             is then embedded. This optional parameter overrides the static domains that are
   *             configured in the Manage QuickSight menu in the Amazon QuickSight console. Instead, it
   *             allows only the domains that you include in this parameter. You can list up to three
   *             domains or subdomains in each API call.</p>
   *          <p>To include all subdomains under a specific domain to the allow list, use <code>*</code>.
   *             For example, <code>https://*.sapp.amazon.com</code> includes all subdomains under
   *             <code>https://sapp.amazon.com</code>.</p>
   * @public
   */
  AllowedDomains?: string[] | undefined;
}

/**
 * @public
 */
export interface GenerateEmbedUrlForAnonymousUserResponse {
  /**
   * <p>The embed URL for the dashboard.</p>
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

  /**
   * <p>The Amazon Resource Name (ARN) to use for the anonymous Amazon QuickSight user.</p>
   * @public
   */
  AnonymousUserArn: string | undefined;
}

/**
 * <p>The number of minutes specified for the lifetime of a session isn't valid. The session
 * 			lifetime must be 15-600 minutes.</p>
 * @public
 */
export class SessionLifetimeInMinutesInvalidException extends __BaseException {
  readonly name: "SessionLifetimeInMinutesInvalidException" = "SessionLifetimeInMinutesInvalidException";
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
 * <p>This error indicates that you are calling an embedding operation in Amazon QuickSight
 * 			without the required pricing plan on your Amazon Web Services account. Before you can use embedding
 * 			for anonymous users, a QuickSight administrator needs to add capacity pricing to Amazon QuickSight. You
 * 		    can do this on the <b>Manage Amazon QuickSight</b> page. </p>
 *          <p>After capacity pricing is added, you can use the
 *             <code>
 *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_GetDashboardEmbedUrl.html">GetDashboardEmbedUrl</a>
 *             </code> API operation with the
 *             <code>--identity-type ANONYMOUS</code> option.</p>
 * @public
 */
export class UnsupportedPricingPlanException extends __BaseException {
  readonly name: "UnsupportedPricingPlanException" = "UnsupportedPricingPlanException";
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
 * <p>The state perssitence configuration of an embedded dashboard.</p>
 * @public
 */
export interface StatePersistenceConfigurations {
  /**
   * <p>Determines if a Amazon QuickSight dashboard's state persistence settings are turned on or off.</p>
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * <p>The feature configuration for an embedded dashboard.</p>
 * @public
 */
export interface RegisteredUserDashboardFeatureConfigurations {
  /**
   * <p>The state persistence settings of an embedded dashboard.</p>
   * @public
   */
  StatePersistence?: StatePersistenceConfigurations | undefined;

  /**
   * <p>The shared view settings of an embedded dashboard.</p>
   * @public
   */
  SharedView?: SharedViewConfigurations | undefined;

  /**
   * <p>The bookmarks configuration for an embedded dashboard in Amazon QuickSight.</p>
   * @public
   */
  Bookmarks?: BookmarksConfigurations | undefined;
}

/**
 * <p>Information about the dashboard you want to embed.</p>
 * @public
 */
export interface RegisteredUserDashboardEmbeddingConfiguration {
  /**
   * <p>The dashboard ID for the dashboard that you want the user to see first. This ID is included in the output URL. When the URL in response is accessed, Amazon QuickSight renders this dashboard if the user has permissions to view it.</p>
   *          <p>If the user does not have permission to view this dashboard, they see a permissions error message.</p>
   * @public
   */
  InitialDashboardId: string | undefined;

  /**
   * <p>The feature configurations of an embbedded Amazon QuickSight dashboard.</p>
   * @public
   */
  FeatureConfigurations?: RegisteredUserDashboardFeatureConfigurations | undefined;
}

/**
 * <p>The experience that you are embedding. You can use this object to generate a url that embeds a visual into your application.</p>
 * @public
 */
export interface RegisteredUserDashboardVisualEmbeddingConfiguration {
  /**
   * <p>The visual ID for the visual that you want the user to embed. This ID is included in the output URL. When the URL in response is accessed, Amazon QuickSight renders this visual.</p>
   *          <p>The Amazon Resource Name (ARN) of the dashboard that the visual belongs to must be included in the <code>AuthorizedResourceArns</code> parameter. Otherwise, the request will fail with <code>InvalidParameterValueException</code>.</p>
   * @public
   */
  InitialDashboardVisualId: DashboardVisualId | undefined;
}

/**
 * <p>An object that provides information about the configuration of a Generative Q&A experience.</p>
 * @public
 */
export interface RegisteredUserGenerativeQnAEmbeddingConfiguration {
  /**
   * <p>The ID of the new Q reader experience topic that you want to make the starting topic in the Generative Q&A experience.
   *         You can find a topic ID by navigating to the Topics pane in the Amazon QuickSight application and opening
   *         a topic. The ID is in the URL for the topic that you open.</p>
   *          <p>If you don't specify an initial topic or you specify a legacy topic, a list of all shared new reader experience topics is shown in the Generative Q&A experience for your readers. When you select an initial new reader experience topic, you can specify whether or not readers are allowed to select other new reader experience topics from the available ones in the list.</p>
   * @public
   */
  InitialTopicId?: string | undefined;
}

/**
 * <p>Information about the Q search bar embedding experience.</p>
 * @public
 */
export interface RegisteredUserQSearchBarEmbeddingConfiguration {
  /**
   * <p>The ID of the legacy Q topic that you want to use as the starting topic in the Q search bar. To locate the topic ID of the topic that you want to use, open the <a href="https://quicksight.aws.amazon.com/">Amazon QuickSight console</a>, navigate to the <b>Topics</b> pane, and choose thre topic that you want to use. The <code>TopicID</code> is located in the URL of the topic that opens. When you select an initial topic, you can specify whether or not readers
   *       are allowed to select other topics from the list of available topics.</p>
   *          <p>If you don't specify an initial topic or if you specify a new reader experience topic, a list of all shared legacy topics is shown in the Q bar. </p>
   * @public
   */
  InitialTopicId?: string | undefined;
}

/**
 * <p>The feature configurations of an embedded Amazon QuickSight console.</p>
 * @public
 */
export interface RegisteredUserConsoleFeatureConfigurations {
  /**
   * <p>The state persistence configurations of an embedded Amazon QuickSight console.</p>
   * @public
   */
  StatePersistence?: StatePersistenceConfigurations | undefined;

  /**
   * <p>The shared view settings of an embedded dashboard.</p>
   * @public
   */
  SharedView?: SharedViewConfigurations | undefined;
}

/**
 * <p>Information about the Amazon QuickSight console that you want to embed.</p>
 * @public
 */
export interface RegisteredUserQuickSightConsoleEmbeddingConfiguration {
  /**
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
   * @public
   */
  InitialPath?: string | undefined;

  /**
   * <p>The embedding configuration of an embedded Amazon QuickSight console.</p>
   * @public
   */
  FeatureConfigurations?: RegisteredUserConsoleFeatureConfigurations | undefined;
}

/**
 * <p>The type of experience you want to embed. For registered users, you can embed Amazon QuickSight dashboards or the Amazon QuickSight console.</p>
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
   * @public
   */
  QuickSightConsole?: RegisteredUserQuickSightConsoleEmbeddingConfiguration | undefined;

  /**
   * <p>The configuration details for embedding the Q search bar.</p>
   *          <p>For more information about embedding the Q search bar, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/embedding-overview.html">Embedding Overview</a> in
   *             the <i>Amazon QuickSight User Guide</i>.</p>
   * @public
   */
  QSearchBar?: RegisteredUserQSearchBarEmbeddingConfiguration | undefined;

  /**
   * <p>The type of embedding experience. In this case, Amazon QuickSight visuals.</p>
   * @public
   */
  DashboardVisual?: RegisteredUserDashboardVisualEmbeddingConfiguration | undefined;

  /**
   * <p>The configuration details for embedding the Generative Q&A experience.</p>
   *          <p>For more information about embedding the Generative Q&A experience, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/embedding-overview.html">Embedding Overview</a> in
   *                 the <i>Amazon QuickSight User Guide</i>.</p>
   * @public
   */
  GenerativeQnA?: RegisteredUserGenerativeQnAEmbeddingConfiguration | undefined;
}

/**
 * @public
 */
export interface GenerateEmbedUrlForRegisteredUserRequest {
  /**
   * <p>The ID for the Amazon Web Services account that contains the dashboard that you're embedding.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>How many minutes the session is valid. The session lifetime must be in [15-600] minutes range.</p>
   * @public
   */
  SessionLifetimeInMinutes?: number | undefined;

  /**
   * <p>The Amazon Resource Name for the registered user.</p>
   * @public
   */
  UserArn: string | undefined;

  /**
   * <p>The experience that you want to embed. For registered users, you can embed Amazon QuickSight dashboards, Amazon QuickSight visuals, the Amazon QuickSight Q search bar, the Amazon QuickSight Generative Q&A experience, or the entire Amazon QuickSight console.</p>
   * @public
   */
  ExperienceConfiguration: RegisteredUserEmbeddingExperienceConfiguration | undefined;

  /**
   * <p>The domains that you want to add to the allow list for access to the generated URL that
   *           is then embedded. This optional parameter overrides the static domains that are
   *           configured in the Manage QuickSight menu in the Amazon QuickSight console. Instead, it
   *           allows only the domains that you include in this parameter. You can list up to three
   *           domains or subdomains in each API call.</p>
   *          <p>To include all subdomains under a specific domain to the allow list, use <code>*</code>.
   *             For example, <code>https://*.sapp.amazon.com</code> includes all subdomains under
   *             <code>https://sapp.amazon.com</code>.</p>
   * @public
   */
  AllowedDomains?: string[] | undefined;
}

/**
 * @public
 */
export interface GenerateEmbedUrlForRegisteredUserResponse {
  /**
   * <p>The embed URL for the Amazon QuickSight dashboard, visual, Q search bar, Generative Q&A experience, or console.</p>
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
export interface GetDashboardEmbedUrlRequest {
  /**
   * <p>The ID for the Amazon Web Services account that contains the dashboard that you're embedding.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dashboard, also added to the Identity and Access Management (IAM)
   *             policy.</p>
   * @public
   */
  DashboardId: string | undefined;

  /**
   * <p>The authentication method that the user uses to sign in.</p>
   * @public
   */
  IdentityType: EmbeddingIdentityType | undefined;

  /**
   * <p>How many minutes the session is valid. The session lifetime must be 15-600 minutes.</p>
   * @public
   */
  SessionLifetimeInMinutes?: number | undefined;

  /**
   * <p>Remove the undo/redo button on the embedded dashboard. The default is FALSE, which enables
   * 			the undo/redo button.</p>
   * @public
   */
  UndoRedoDisabled?: boolean | undefined;

  /**
   * <p>Remove the reset button on the embedded dashboard. The default is FALSE, which enables the
   * 			reset button.</p>
   * @public
   */
  ResetDisabled?: boolean | undefined;

  /**
   * <p>Adds persistence of state for the user session in an embedded dashboard. Persistence
   *             applies to the sheet and the parameter settings. These are control settings that the
   *             dashboard subscriber (Amazon QuickSight reader) chooses while viewing the dashboard. If this is
   *             set to <code>TRUE</code>, the settings are the same when the subscriber reopens the same
   *             dashboard URL. The state is stored in Amazon QuickSight, not in a browser cookie. If this is
   *             set to FALSE, the state of the user session is not persisted. The default is
   *                 <code>FALSE</code>.</p>
   * @public
   */
  StatePersistenceEnabled?: boolean | undefined;

  /**
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
   * @public
   */
  UserArn?: string | undefined;

  /**
   * <p>The Amazon QuickSight namespace that contains the dashboard IDs in this request.
   *     	   If you're not using a custom namespace, set <code>Namespace = default</code>.</p>
   * @public
   */
  Namespace?: string | undefined;

  /**
   * <p>A list of one or more dashboard IDs that you want anonymous users to have tempporary access to. Currently, the <code>IdentityType</code> parameter must be set to <code>ANONYMOUS</code> because other identity types authenticate as Amazon QuickSight or IAM users. For example, if you set "<code>--dashboard-id dash_id1 --dashboard-id dash_id2 dash_id3 identity-type ANONYMOUS</code>", the session can access all three dashboards.</p>
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
   * 			dashboard. This URL is valid for 5 minutes. The API operation provides the URL with an
   * 			<code>auth_code</code> value that enables one (and only one) sign-on to a user session
   * 			that is valid for 10 hours. </p>
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
export interface GetSessionEmbedUrlRequest {
  /**
   * <p>The ID for the Amazon Web Services account associated with your Amazon QuickSight subscription.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
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
   * @public
   */
  EntryPoint?: string | undefined;

  /**
   * <p>How many minutes the session is valid. The session lifetime must be 15-600 minutes.</p>
   * @public
   */
  SessionLifetimeInMinutes?: number | undefined;

  /**
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
   * @public
   */
  UserArn?: string | undefined;
}

/**
 * @public
 */
export interface GetSessionEmbedUrlResponse {
  /**
   * <p>A single-use URL that you can put into your server-side web page to embed your
   * 			Amazon QuickSight session. This URL is valid for 5 minutes. The API operation provides the URL with an
   * 			<code>auth_code</code> value that enables one (and only one) sign-on to a user session
   * 			that is valid for 10 hours. </p>
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
 * <p>You don't have this feature activated for your account. To fix this issue, contact Amazon Web Services support.</p>
 * @public
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
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
   * <p>A structure that contains all of the dashboards in your Amazon Web Services account. This structure
   *             provides basic information about the dashboards.</p>
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
   * <p>The ID of the Amazon Web Services account that contains the dashboard that you're listing versions
   *             for.</p>
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
   * 			Amazon Web Services account that contains your Amazon QuickSight account.</p>
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
   * 			Amazon Web Services account that contains your Amazon QuickSight account.</p>
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
   * <p>A list of services and their authorized targets that the Amazon QuickSight IAM Identity Center application can access.</p>
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
   * <p>The ID for the Amazon Web Services account that contains the Amazon QuickSight namespaces that you want to list.</p>
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
   * <p>The ID for the Amazon Web Services account that you want to create a group in. The Amazon Web Services account ID that you provide must be the same Amazon Web Services account that contains your Amazon QuickSight account.</p>
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
   * <p>The Amazon Resource Name (ARN) of the resource that you want a list of tags for.</p>
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
   *                   <code>CUSTOM</code> - Display only the themes created by people using Amazon QuickSight.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>QUICKSIGHT</code> - Display only the starting themes defined by Amazon QuickSight.</p>
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
   * <p>The Amazon QuickSight user name that you want to list group memberships for.</p>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>The Amazon Web Services account ID that the user is in. Currently, you use the ID for the Amazon Web Services account
   * 			that contains your Amazon QuickSight account.</p>
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
   * 			Amazon Web Services account that contains your Amazon QuickSight account.</p>
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
   * <p>The identity type that your Amazon QuickSight account uses to manage the identity of users.</p>
   * @public
   */
  IdentityType: IdentityType | undefined;

  /**
   * <p>The email address of the user that you want to register.</p>
   * @public
   */
  Email: string | undefined;

  /**
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
   *                   <code>READER_PRO</code>: Reader Pro adds Generative BI capabilities to the Reader role. Reader Pros have access to Amazon Q in Amazon QuickSight, can build stories with Amazon Q, and can generate executive summaries from dashboards.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AUTHOR_PRO</code>: Author Pro adds Generative BI capabilities to the Author role. Author Pros can author dashboards with natural language with Amazon Q, build stories with Amazon Q, create Topics for Q&A, and generate executive summaries from dashboards.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ADMIN_PRO</code>: Admin Pros are Author Pros who can also manage Amazon QuickSight administrative settings. Admin Pro users are billed at Author Pro pricing.</p>
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
   * <p>The ARN of the IAM user or role that you are registering with Amazon QuickSight. </p>
   * @public
   */
  IamArn?: string | undefined;

  /**
   * <p>You need to use this parameter only when you register one or more users using an assumed
   * 			IAM role. You don't need to provide the session name for other scenarios, for example when
   * 			you are registering an IAM user or an Amazon QuickSight user. You can register multiple
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
   * 			Amazon Web Services account that contains your Amazon QuickSight account.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   * @public
   */
  Namespace: string | undefined;

  /**
   * <p>The Amazon QuickSight user name that you want to create for the user you are
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
   *             you need to create the profile names for custom permission sets by using the Amazon QuickSight
   *             console. Then, you use the <code>RegisterUser</code> API operation to assign the named set of
   *             permissions to a Amazon QuickSight user. </p>
   *          <p>Amazon QuickSight custom permissions are applied through IAM policies. Therefore, they
   *             override the permissions typically granted by assigning Amazon QuickSight users to one of the
   *             default security cohorts in Amazon QuickSight (admin, author, reader, admin pro, author pro, reader pro).</p>
   *          <p>This feature is available only to Amazon QuickSight Enterprise edition subscriptions.</p>
   * @public
   */
  CustomPermissionsName?: string | undefined;

  /**
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
   * @public
   */
  ExternalLoginFederationProviderType?: string | undefined;

  /**
   * <p>The URL of the custom OpenID Connect (OIDC) provider that provides identity to let a user federate
   *          into Amazon QuickSight with an associated Identity and Access Management(IAM) role. This parameter should
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
   * <p>The ID of the Amazon Web Services account that contains the user whose dashboards you're searching
   *             for. </p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The filters to apply to the search. Currently, you can search only by user name, for
   *             example, <code>"Filters": [ \{ "Name": "QUICKSIGHT_USER", "Operator": "StringEquals",
   *             "Value": "arn:aws:quicksight:us-east-1:1:user/default/UserName1" \} ]</code>
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
   * <p>A <code>DataSourceSummaries</code> object that returns a summary of a data source.</p>
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
   *           Amazon Web Services account that contains your Amazon QuickSight account.</p>
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
 */
export interface StartAssetBundleExportJobRequest {
  /**
   * <p>The ID of the Amazon Web Services account to export assets from.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the job. This ID is unique while the job is running. After the job is completed, you can reuse this ID for another job.</p>
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
   *          <p>The API caller must have the necessary permissions in their IAM role to access each resource before the resources can be exported.</p>
   * @public
   */
  ResourceArns: string[] | undefined;

  /**
   * <p>A Boolean that determines whether all dependencies of each resource ARN are recursively
   *          exported with the job. For example, say you provided a Dashboard ARN to the
   *             <code>ResourceArns</code> parameter. If you set <code>IncludeAllDependencies</code> to
   *             <code>TRUE</code>, any theme, dataset, and data source resource that is a dependency of the dashboard is also
   *          exported.</p>
   * @public
   */
  IncludeAllDependencies?: boolean | undefined;

  /**
   * <p>The export data format.</p>
   * @public
   */
  ExportFormat: AssetBundleExportFormat | undefined;

  /**
   * <p>An optional collection of structures that generate CloudFormation parameters to override the existing resource property values when the resource is exported to a new CloudFormation template.</p>
   *          <p>Use this field if the <code>ExportFormat</code> field of a <code>StartAssetBundleExportJobRequest</code> API call is set to <code>CLOUDFORMATION_JSON</code>.</p>
   * @public
   */
  CloudFormationOverridePropertyConfiguration?: AssetBundleCloudFormationOverridePropertyConfiguration | undefined;

  /**
   * <p>A Boolean that determines whether all permissions for each resource ARN are exported with the job. If you set <code>IncludePermissions</code> to <code>TRUE</code>, any permissions associated with each resource are exported.
   *       </p>
   * @public
   */
  IncludePermissions?: boolean | undefined;

  /**
   * <p> A Boolean that determines whether all tags for each resource ARN are exported with the job. If you set <code>IncludeTags</code> to <code>TRUE</code>, any tags associated with each resource are exported.</p>
   * @public
   */
  IncludeTags?: boolean | undefined;

  /**
   * <p>An optional parameter that determines which validation strategy to use for the export job. If <code>StrictModeForAllResources</code> is set to <code>TRUE</code>, strict validation for every error is enforced. If it is set to <code>FALSE</code>, validation is skipped for specific UI errors that are shown as warnings. The default value for <code>StrictModeForAllResources</code> is <code>FALSE</code>.</p>
   * @public
   */
  ValidationStrategy?: AssetBundleExportJobValidationStrategy | undefined;

  /**
   * <p>A Boolean that determines if the exported asset carries over information about the folders that the asset is a member of. </p>
   * @public
   */
  IncludeFolderMemberships?: boolean | undefined;

  /**
   * <p>A setting that indicates whether you want to include folder assets. You can also use this setting to recusrsively include all subfolders of an exported folder.</p>
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
   * <p>The ID of the job. This ID is unique while the job is running. After the job is completed, you can reuse this ID for another job.</p>
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
   * <p>The ID of the job. This ID is unique while the job is running. After the job is completed, you can reuse this ID for another job.</p>
   * @public
   */
  AssetBundleImportJobId: string | undefined;

  /**
   * <p>The source of the asset bundle zip file that contains the data that you want to import. The file must be in <code>QUICKSIGHT_JSON</code> format.
   *       </p>
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
   *          <p>If you choose <code>ROLLBACK</code>, failed  import jobs will attempt to  undo any asset changes caused by the failed job.</p>
   *          <p>If you choose <code>DO_NOTHING</code>, failed import jobs will not attempt to roll back
   *          any asset changes caused by the failed job, possibly keeping the Amazon QuickSight account in an inconsistent state.</p>
   * @public
   */
  FailureAction?: AssetBundleImportFailureAction | undefined;

  /**
   * <p>Optional permission overrides that are applied to the resource configuration before import.</p>
   * @public
   */
  OverridePermissions?: AssetBundleImportJobOverridePermissions | undefined;

  /**
   * <p>Optional tag overrides that are applied to the resource configuration before import.</p>
   * @public
   */
  OverrideTags?: AssetBundleImportJobOverrideTags | undefined;

  /**
   * <p>An optional validation strategy override for all analyses and dashboards that is applied to the resource configuration before import. </p>
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
   * <p>The ID of the job. This ID is unique while the job is running. After the job is completed, you can reuse this ID for another job.</p>
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
   *          <p>These are not the tags that are used for Amazon Web Services resource tagging. For more information on row level security in Amazon QuickSight, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/quicksight-dev-rls-tags.html">Using Row-Level Security (RLS) with Tags</a>in the <i>Amazon QuickSight User Guide</i>.</p>
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
   *             A structure that contains information about the anonymous users that the generated snapshot is for. This API will not return information about registered Amazon QuickSight.</p>
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
   * <p>The ID of the schedule that you want to start a snapshot job schedule for. The schedule ID can be found in the Amazon QuickSight console in the <b>Schedules</b> pane of the dashboard that the schedule is configured for.</p>
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
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the resource.</p>
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
   * <p>The keys of the key-value pairs for the resource tag or tags assigned to the resource.</p>
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
   * <p>The ID for the Amazon Web Services account that you want to update Amazon QuickSight customizations
   *             for.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace that you want to update Amazon QuickSight customizations for.</p>
   * @public
   */
  Namespace?: string | undefined;

  /**
   * <p>The Amazon QuickSight customizations you're updating in the current Amazon Web Services Region. </p>
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
   * <p>The ID for the Amazon Web Services account that you want to update Amazon QuickSight customizations
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
   * <p>The Amazon QuickSight customizations you're updating in the current Amazon Web Services Region. </p>
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
export interface UpdateAccountSettingsRequest {
  /**
   * <p>The ID for the Amazon Web Services account that contains the Amazon QuickSight settings that you want to
   *             list.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The default namespace for this Amazon Web Services account. Currently, the default is
   *                 <code>default</code>. IAM users that
   *             register for the first time with Amazon QuickSight provide an email address that becomes
   *             associated with the default namespace.
   *         </p>
   * @public
   */
  DefaultNamespace: string | undefined;

  /**
   * <p>The email address that you want Amazon QuickSight to send notifications to regarding your
   *             Amazon Web Services account or Amazon QuickSight subscription.</p>
   * @public
   */
  NotificationEmail?: string | undefined;

  /**
   * <p>A boolean value that determines whether or not an Amazon QuickSight account can be deleted. A <code>True</code> value doesn't allow the account to be deleted and results in an error message if a user tries to make a <code>DeleteAccountSubscription</code> request. A <code>False</code> value will allow the account to be deleted.</p>
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
   *             analysis in the Amazon QuickSight console.</p>
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
   *             creating. To see the theme in the Amazon QuickSight console, make sure that you have access to
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
   * @public
   */
  DashboardPublishOptions?: DashboardPublishOptions | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the theme that is being used for this dashboard. If
   *             you add a value for this field, it overrides the value that was originally associated
   *             with the entity. The theme ARN must exist in the same Amazon Web Services account where you create the
   *             dashboard.</p>
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
   * <p>The option to relax the validation needed to update a dashboard with definition objects. This skips the validation step for specific errors.</p>
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
   * <p>The ID of the Amazon Web Services account that contains the dashboard whose links you want to update.</p>
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
   * <p>The ID of the Amazon Web Services account that contains the dashboard whose permissions you're
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
   * <p>Updates the permissions of a shared link to an Amazon QuickSight dashboard.</p>
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
export interface UpdateDataSetRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dataset that you want to update. This ID is unique per Amazon Web Services Region for each
   * 			Amazon Web Services account.</p>
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
   * <p>Configures the combination and transformation of the data from the physical tables.</p>
   * @public
   */
  LogicalTableMap?: Record<string, LogicalTable> | undefined;

  /**
   * <p>Indicates whether you want to import the data into SPICE.</p>
   * @public
   */
  ImportMode: DataSetImportMode | undefined;

  /**
   * <p>Groupings of columns that work together in certain Amazon QuickSight features. Currently, only geospatial hierarchy is supported.</p>
   * @public
   */
  ColumnGroups?: ColumnGroup[] | undefined;

  /**
   * <p>The folder that contains fields and nested subfolders for your dataset.</p>
   * @public
   */
  FieldFolders?: Record<string, FieldFolder> | undefined;

  /**
   * <p>The row-level security configuration for the data you want to create.</p>
   * @public
   */
  RowLevelPermissionDataSet?: RowLevelPermissionDataSet | undefined;

  /**
   * <p>The configuration of tags on a dataset to set row-level security. Row-level security tags are currently supported for anonymous embedding only.</p>
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
   * <p>The ID for the dataset that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  DataSetId?: string | undefined;

  /**
   * <p>The ARN for the ingestion, which is triggered as a result of dataset creation if the import
   * 			mode is SPICE.</p>
   * @public
   */
  IngestionArn?: string | undefined;

  /**
   * <p>The ID of the ingestion, which is triggered as a result of dataset creation if the import
   * 			mode is SPICE.</p>
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
   * 			Amazon Web Services Region for each Amazon Web Services account.</p>
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
   * 			Amazon Web Services Region for each Amazon Web Services account.</p>
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
   * <p>The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account. </p>
   * @public
   */
  DataSourceId: string | undefined;

  /**
   * <p>A display name for the data source.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The parameters that Amazon QuickSight uses to connect to your underlying source.</p>
   * @public
   */
  DataSourceParameters?: DataSourceParameters | undefined;

  /**
   * <p>The credentials that Amazon QuickSight that uses to connect to your underlying source. Currently,
   * 			only credentials based on user name and password are supported.</p>
   * @public
   */
  Credentials?: DataSourceCredentials | undefined;

  /**
   * <p>Use this parameter only when you want Amazon QuickSight to use a VPC connection when connecting to
   * 			your underlying source.</p>
   * @public
   */
  VpcConnectionProperties?: VpcConnectionProperties | undefined;

  /**
   * <p>Secure Socket Layer (SSL) properties that apply when Amazon QuickSight connects to your underlying
   * 			source.</p>
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
   * <p>The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
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
   * <p>The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account. </p>
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
   * <p>The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
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
   * 			Amazon Web Services account that contains your Amazon QuickSight account.</p>
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
   * <p>The ARN for the IAM policy to apply to the Amazon QuickSight users and
   * 			groups specified in this assignment.</p>
   * @public
   */
  PolicyArn?: string | undefined;

  /**
   * <p>The Amazon QuickSight users, groups, or both that you want to assign the policy
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
   * <p>The ARN for the IAM policy applied to the Amazon QuickSight users and
   * 			groups specified in this assignment.</p>
   * @public
   */
  PolicyArn?: string | undefined;

  /**
   * <p>The Amazon QuickSight users, groups, or both that the IAM policy is
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
   * <p>A list of <code>RegisteredCustomerManagedKey</code> objects to be updated to the Amazon QuickSight account.</p>
   * @public
   */
  KeyRegistration: RegisteredCustomerManagedKey[] | undefined;
}

/**
 * <p>A success entry that occurs when a <code>KeyRegistration</code> job is successfully applied to the Amazon QuickSight account.</p>
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
   * <p>The Amazon Web Services account ID associated with your Amazon QuickSight subscription.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>A Boolean value that indicates whether public sharing is turned on for an Amazon QuickSight account.</p>
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
   * <p>An option to allow Amazon QuickSight to customize data stories with user specific metadata, specifically location and job information, in your IAM Identity Center instance.</p>
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
   * <p>The ID for the Amazon Web Services account that you want to create a group in. The Amazon Web Services account ID that you provide must be the same Amazon Web Services account that contains your Amazon QuickSight account.</p>
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
   * 			ARN can contain any Amazon Web Services account and any Amazon QuickSight-supported Amazon Web Services Region;. </p>
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
   * <p>The theme ID, defined by Amazon QuickSight, that a custom theme inherits from.
   * 		All themes initially inherit from a default Amazon QuickSight theme.</p>
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
   * <p>The Amazon QuickSight user name that you want to update.</p>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>The ID for the Amazon Web Services account that the user is in. Currently, you use the ID for the
   * 			Amazon Web Services account that contains your Amazon QuickSight account.</p>
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
   *             <li>
   *                <p>
   *                   <code>READER_PRO</code>: Reader Pro adds Generative BI capabilities to the Reader role. Reader Pros have access to Amazon Q in Amazon QuickSight, can build stories with Amazon Q, and can generate executive summaries from dashboards.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AUTHOR_PRO</code>: Author Pro adds Generative BI capabilities to the Author role. Author Pros can author dashboards with natural language with Amazon Q, build stories with Amazon Q, create Topics for Q&A, and generate executive summaries from dashboards.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ADMIN_PRO</code>: Admin Pros are Author Pros who can also manage Amazon QuickSight administrative settings. Admin Pro users are billed at Author Pro pricing.</p>
   *             </li>
   *          </ul>
   *          <p>The name of the Amazon QuickSight role is invisible to the user except for the console
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
   *             you need to create the profile names for custom permission sets by using the Amazon QuickSight
   *             console. Then, you use the <code>RegisterUser</code> API operation to assign the named set of
   *             permissions to a Amazon QuickSight user. </p>
   *          <p>Amazon QuickSight custom permissions are applied through IAM policies. Therefore, they
   *             override the permissions typically granted by assigning Amazon QuickSight users to one of the
   *             default security cohorts in Amazon QuickSight (admin, author, reader).</p>
   *          <p>This feature is available only to Amazon QuickSight Enterprise edition subscriptions.</p>
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
   * @public
   */
  ExternalLoginFederationProviderType?: string | undefined;

  /**
   * <p>The URL of the custom OpenID Connect (OIDC) provider that provides identity to let a user federate
   *          into Amazon QuickSight with an associated Identity and Access Management(IAM) role. This parameter should
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
   * <p>The Amazon QuickSight user.</p>
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

/**
 * @internal
 */
export const TopicVisualFilterSensitiveLog = (obj: TopicVisual): any => ({
  ...obj,
  ...(obj.Ir && { Ir: TopicIRFilterSensitiveLog(obj.Ir) }),
});

/**
 * @internal
 */
export const CreateTopicReviewedAnswerFilterSensitiveLog = (obj: CreateTopicReviewedAnswer): any => ({
  ...obj,
  ...(obj.Mir && { Mir: TopicIRFilterSensitiveLog(obj.Mir) }),
  ...(obj.PrimaryVisual && { PrimaryVisual: TopicVisualFilterSensitiveLog(obj.PrimaryVisual) }),
});

/**
 * @internal
 */
export const TopicReviewedAnswerFilterSensitiveLog = (obj: TopicReviewedAnswer): any => ({
  ...obj,
  ...(obj.Mir && { Mir: TopicIRFilterSensitiveLog(obj.Mir) }),
  ...(obj.PrimaryVisual && { PrimaryVisual: TopicVisualFilterSensitiveLog(obj.PrimaryVisual) }),
});

/**
 * @internal
 */
export const BatchCreateTopicReviewedAnswerRequestFilterSensitiveLog = (
  obj: BatchCreateTopicReviewedAnswerRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTopicReviewedAnswersResponseFilterSensitiveLog = (obj: ListTopicReviewedAnswersResponse): any => ({
  ...obj,
});
