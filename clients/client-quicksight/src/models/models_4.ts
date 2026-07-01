// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  AssetBundleExportFormat,
  AssetBundleImportFailureAction,
  AssignmentStatus,
  DataSetStatus,
  DataSourceType,
  EmbeddingIdentityType,
  FieldName,
  FilterOperator,
  FlowPublishState,
  FolderFilterAttribute,
  FolderType,
  GeneratedAnswerStatus,
  GroupFilterAttribute,
  GroupFilterOperator,
  IdentityStore,
  IdentityType,
  ImageExtractionStatus,
  IncludeFolderMembers,
  IncludeGeneratedAnswer,
  IncludeQuickSightQIndex,
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
  QAResultType,
  QDataKeyType,
  QSearchStatus,
  ResourceStatus,
  Role,
  SearchFilterOperator,
  SelfUpgradeRequestStatus,
  SelfUpgradeStatus,
  SharingModel,
  SortOrder,
  SpaceQuickSightResourceType,
  SpaceQuickSightSearchFilterName,
  SpaceSearchOperator,
  TemplateErrorType,
  ThemeErrorType,
  ThemeType,
  TopicFilterAttribute,
  TopicFilterOperator,
  TopicRefreshStatus,
  TopicUserExperienceVersion,
  UserIndexCapacitySortBy,
  UserIndexCapacitySortOrder,
  UserRole,
  VideoExtractionStatus,
  VideoExtractionType,
  VPCConnectionAvailabilityStatus,
  VPCConnectionResourceStatus,
} from "./enums";
import type {
  ActionConnectorSearchFilter,
  ActionConnectorSummary,
  ActiveIAMPolicyAssignment,
  AgentSearchFilter,
  AgentSummary,
  AmazonQInQuickSightConsoleConfigurations,
  AmazonQInQuickSightDashboardConfigurations,
  Entity,
  Sheet,
} from "./models_0";
import type {
  AnalysisSearchFilter,
  AnalysisSummary,
  AnonymousUserEmbeddingExperienceConfiguration,
  AssetBundleCloudFormationOverridePropertyConfiguration,
  AssetBundleExportJobSummary,
  AssetBundleExportJobValidationStrategy,
  AssetBundleImportJobOverrideParameters,
  AssetBundleImportJobOverridePermissions,
  AssetBundleImportJobOverrideTags,
  AssetBundleImportJobOverrideValidationStrategy,
  AssetBundleImportJobSummary,
  AssetBundleImportSource,
  AudioExtractionConfiguration,
  AuthorizedTargetsByService,
  BookmarksConfigurations,
  BrandSummary,
  CapacityBytesRangeFilter,
  DashboardVisualId,
  DataSetRefreshProperties,
  ResourcePermission,
  SharedViewConfigurations,
  Tag,
  VpcConnectionProperties,
} from "./models_2";
import type {
  CustomInstructions,
  CustomPermissions,
  DashboardCustomizationSummaryConfigurations,
  DashboardSearchFilter,
  DashboardSummary,
  DashboardVersionSummary,
  DashboardVisualResult,
  DataSet,
  DataSetConfiguration,
  DataSetSearchFilter,
  DataSetSummary,
  DataSource,
  DataSourceSearchFilter,
  DataSourceSummary,
  Group,
  GroupMember,
  Permission,
  RefreshSchedule,
  TemplateAlias,
  TemplateVersionDefinition,
  ThemeAlias,
  ThemeConfiguration,
  TopicDetails,
  TopicRefreshSchedule,
} from "./models_3";

/**
 * @public
 */
export interface DescribeDataSetRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dataset that you want to describe. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  DataSetId: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataSetResponse {
  /**
   * <p>Information on the dataset.</p>
   * @public
   */
  DataSet?: DataSet | undefined;

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
export interface DescribeDataSetPermissionsRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dataset that you want to describe. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  DataSetId: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataSetPermissionsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   * @public
   */
  DataSetArn?: string | undefined;

  /**
   * <p>The ID for the dataset that you want to describe. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  DataSetId?: string | undefined;

  /**
   * <p>A list of resource permissions on the dataset.</p>
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
export interface DescribeDataSetRefreshPropertiesRequest {
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
export interface DescribeDataSetRefreshPropertiesResponse {
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
   * <p>The dataset refresh properties.</p>
   * @public
   */
  DataSetRefreshProperties?: DataSetRefreshProperties | undefined;
}

/**
 * @public
 */
export interface DescribeDataSourceRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the data source. This ID is unique per Amazon Web Services Region for each
   * 				Amazon Web Services account.</p>
   * @public
   */
  DataSourceId: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataSourceResponse {
  /**
   * <p>The information on the data source.</p>
   * @public
   */
  DataSource?: DataSource | undefined;

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
export interface DescribeDataSourcePermissionsRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the data source. This ID is unique per Amazon Web Services Region for each
   * 				Amazon Web Services account.</p>
   * @public
   */
  DataSourceId: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataSourcePermissionsResponse {
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
   * <p>A list of resource permissions on the data source.</p>
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
export interface DescribeDefaultQBusinessApplicationRequest {
  /**
   * <p>The ID of the Quick Sight account that is linked to the Amazon Q Business application that you want described.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The Quick Sight namespace that contains the linked Amazon Q Business application. If this field is left blank, the default namespace is used. Currently, the default namespace is the only valid value for this parameter.</p>
   * @public
   */
  Namespace?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDefaultQBusinessApplicationResponse {
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
   * <p>The ID of the Amazon Q Business application that is linked to the Quick Sight account.</p>
   * @public
   */
  ApplicationId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFlowRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the flow that you are describing.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The unique identifier of the flow.</p>
   * @public
   */
  FlowId: string | undefined;

  /**
   * <p>The publish state of the flow version to describe. Valid values are <code>DRAFT</code>, <code>PUBLISHED</code>,
   *             or <code>PENDING_APPROVAL</code>.</p>
   * @public
   */
  PublishState: FlowPublishState | undefined;
}

/**
 * <p>A mapping between a step identifier and its alias in a flow.</p>
 * @public
 */
export interface StepAliasMapping {
  /**
   * <p>The unique identifier of the step.</p>
   * @public
   */
  StepId: string | undefined;

  /**
   * <p>The alias for the step.</p>
   * @public
   */
  StepAlias: string | undefined;
}

/**
 * <p>The full details of a flow, including its definition specifying the steps.</p>
 * @public
 */
export interface FlowDetail {
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
   * <p>The display name of the flow.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the flow.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The publish state of the flow. Valid values are <code>DRAFT</code>, <code>PUBLISHED</code>,
   *             or <code>PENDING_APPROVAL</code>.</p>
   * @public
   */
  PublishState: FlowPublishState | undefined;

  /**
   * <p>The time this flow was created.</p>
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * <p>The identifier of the principal who created the flow.</p>
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * <p>The last time this flow was modified.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>The identifier of the last principal who updated the flow.</p>
   * @public
   */
  LastUpdatedBy?: string | undefined;

  /**
   * <p>The definition of the flow, specifying the steps and configurations. This is the flow definition in Quick Flow's internal format. The format is subject to change.</p>
   * @public
   */
  FlowDefinition: __DocumentType | undefined;

  /**
   * <p>A list of step alias mappings for the flow.</p>
   * @public
   */
  StepAliases?: StepAliasMapping[] | undefined;
}

/**
 * @public
 */
export interface DescribeFlowResponse {
  /**
   * <p>The full details of the flow.</p>
   * @public
   */
  Flow: FlowDetail | undefined;

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
export interface DescribeFolderRequest {
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
}

/**
 * <p>A folder in Quick Sight.</p>
 * @public
 */
export interface Folder {
  /**
   * <p>The ID of the folder.</p>
   * @public
   */
  FolderId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the folder.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>A display name for the folder.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of folder it is.</p>
   * @public
   */
  FolderType?: FolderType | undefined;

  /**
   * <p>An array of ancestor ARN strings for the folder.</p>
   * @public
   */
  FolderPath?: string[] | undefined;

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
 * @public
 */
export interface DescribeFolderResponse {
  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;

  /**
   * <p>Information about the folder.</p>
   * @public
   */
  Folder?: Folder | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFolderPermissionsRequest {
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
   * <p>The namespace of the folder whose permissions you want described.</p>
   * @public
   */
  Namespace?: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A pagination token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFolderPermissionsResponse {
  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;

  /**
   * <p>The ID of the folder.</p>
   * @public
   */
  FolderId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the folder.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>Information about the permissions on the folder.</p>
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>The pagination token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFolderResolvedPermissionsRequest {
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
   * <p>The namespace of the folder whose permissions you want described.</p>
   * @public
   */
  Namespace?: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A pagination token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFolderResolvedPermissionsResponse {
  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;

  /**
   * <p>The ID of the folder.</p>
   * @public
   */
  FolderId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the folder.</p>
   * @public
   */
  Arn?: string | undefined;

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

  /**
   * <p>A pagination token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeGroupRequest {
  /**
   * <p>The name of the group that you want to describe.</p>
   * @public
   */
  GroupName: string | undefined;

  /**
   * <p>The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the
   * 			Amazon Web Services account that contains your Amazon Quick Sight account.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace of the group that you want described.</p>
   * @public
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface DescribeGroupResponse {
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
export interface DescribeGroupMembershipRequest {
  /**
   * <p>The user name of the user that you want to search for.</p>
   * @public
   */
  MemberName: string | undefined;

  /**
   * <p>The name of the group that you want to search.</p>
   * @public
   */
  GroupName: string | undefined;

  /**
   * <p>The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the
   *          Amazon Web Services account that contains your Amazon Quick Sight account.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace that includes the group you are searching within.</p>
   * @public
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface DescribeGroupMembershipResponse {
  /**
   * <p>A member of an Quick Sight group. Currently, group members must be users. Groups
   *             can't be members of another group. .</p>
   * @public
   */
  GroupMember?: GroupMember | undefined;

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
export interface DescribeIAMPolicyAssignmentRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the assignment that you want to
   * 			describe.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The name of the assignment, also called a rule.</p>
   * @public
   */
  AssignmentName: string | undefined;

  /**
   * <p>The namespace that contains the assignment.</p>
   * @public
   */
  Namespace: string | undefined;
}

/**
 * <p>An Identity and Access Management (IAM) policy assignment.</p>
 * @public
 */
export interface IAMPolicyAssignment {
  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AwsAccountId?: string | undefined;

  /**
   * <p>Assignment ID.</p>
   * @public
   */
  AssignmentId?: string | undefined;

  /**
   * <p>Assignment name.</p>
   * @public
   */
  AssignmentName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the IAM policy.</p>
   * @public
   */
  PolicyArn?: string | undefined;

  /**
   * <p>Identities.</p>
   * @public
   */
  Identities?: Record<string, string[]> | undefined;

  /**
   * <p>Assignment status.</p>
   * @public
   */
  AssignmentStatus?: AssignmentStatus | undefined;
}

/**
 * @public
 */
export interface DescribeIAMPolicyAssignmentResponse {
  /**
   * <p>Information describing the IAM policy assignment.</p>
   * @public
   */
  IAMPolicyAssignment?: IAMPolicyAssignment | undefined;

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
export interface DescribeIngestionRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the dataset used in the ingestion.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>An ID for the ingestion.</p>
   * @public
   */
  IngestionId: string | undefined;
}

/**
 * <p>Error information for the SPICE ingestion of a dataset.</p>
 * @public
 */
export interface ErrorInfo {
  /**
   * <p>Error type.</p>
   * @public
   */
  Type?: IngestionErrorType | undefined;

  /**
   * <p>Error message.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>Information about a queued dataset SPICE ingestion.</p>
 * @public
 */
export interface QueueInfo {
  /**
   * <p>The ID of the queued ingestion.</p>
   * @public
   */
  WaitingOnIngestion: string | undefined;

  /**
   * <p>The ID of the ongoing ingestion. The queued ingestion is waiting for the ongoing
   *             ingestion to complete.</p>
   * @public
   */
  QueuedIngestion: string | undefined;
}

/**
 * <p>Information about rows for a data set SPICE ingestion.</p>
 * @public
 */
export interface RowInfo {
  /**
   * <p>The number of rows that were ingested.</p>
   * @public
   */
  RowsIngested?: number | undefined;

  /**
   * <p>The number of rows that were not ingested.</p>
   * @public
   */
  RowsDropped?: number | undefined;

  /**
   * <p>The total number of rows in the dataset.</p>
   * @public
   */
  TotalRowsInDataset?: number | undefined;
}

/**
 * <p>Information about the SPICE ingestion for a dataset.</p>
 * @public
 */
export interface Ingestion {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>Ingestion ID.</p>
   * @public
   */
  IngestionId?: string | undefined;

  /**
   * <p>Ingestion status.</p>
   * @public
   */
  IngestionStatus: IngestionStatus | undefined;

  /**
   * <p>Error information for this ingestion.</p>
   * @public
   */
  ErrorInfo?: ErrorInfo | undefined;

  /**
   * <p>Information about rows for a data set SPICE ingestion.</p>
   * @public
   */
  RowInfo?: RowInfo | undefined;

  /**
   * <p>Information about a queued dataset SPICE ingestion.</p>
   * @public
   */
  QueueInfo?: QueueInfo | undefined;

  /**
   * <p>The time that this ingestion started.</p>
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * <p>The time that this ingestion took, measured in seconds.</p>
   * @public
   */
  IngestionTimeInSeconds?: number | undefined;

  /**
   * <p>The size of the data ingested, in bytes.</p>
   * @public
   */
  IngestionSizeInBytes?: number | undefined;

  /**
   * <p>Event source for this ingestion.</p>
   * @public
   */
  RequestSource?: IngestionRequestSource | undefined;

  /**
   * <p>Type of this ingestion.</p>
   * @public
   */
  RequestType?: IngestionRequestType | undefined;
}

/**
 * @public
 */
export interface DescribeIngestionResponse {
  /**
   * <p>Information about the ingestion.</p>
   * @public
   */
  Ingestion?: Ingestion | undefined;

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
export interface DescribeIpRestrictionRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the IP rules.</p>
   * @public
   */
  AwsAccountId: string | undefined;
}

/**
 * @public
 */
export interface DescribeIpRestrictionResponse {
  /**
   * <p>The ID of the Amazon Web Services account that contains the IP rules.</p>
   * @public
   */
  AwsAccountId?: string | undefined;

  /**
   * <p>A map that describes the IP rules with CIDR range and description.</p>
   * @public
   */
  IpRestrictionRuleMap?: Record<string, string> | undefined;

  /**
   * <p>A map of allowed VPC IDs and their rule descriptions.</p>
   * @public
   */
  VpcIdRestrictionRuleMap?: Record<string, string> | undefined;

  /**
   * <p>A map of allowed VPC endpoint IDs and their rule descriptions.</p>
   * @public
   */
  VpcEndpointIdRestrictionRuleMap?: Record<string, string> | undefined;

  /**
   * <p>A value that specifies whether IP rules are turned on.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>The HTTP status of the request.
   * 			</p>
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface DescribeKeyRegistrationRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the customer managed key registration that you want to describe.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>Determines whether the request returns the default key only.</p>
   * @public
   */
  DefaultKeyOnly?: boolean | undefined;
}

/**
 * <p>A customer managed key structure that contains the information listed below: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>KeyArn</code> - The ARN of a KMS key that is registered to a Quick Sight account for encryption and decryption use.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DefaultKey</code> - Indicates whether the current key is set as the default key for encryption and decryption use.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface RegisteredCustomerManagedKey {
  /**
   * <p>The ARN of the KMS key that is registered to a Quick Sight account for encryption and decryption use.</p>
   * @public
   */
  KeyArn?: string | undefined;

  /**
   * <p>Indicates whether a <code>RegisteredCustomerManagedKey</code> is set as the default key for encryption and decryption use.</p>
   * @public
   */
  DefaultKey?: boolean | undefined;
}

/**
 * <p>A structure that contains information about the <code>QDataKey</code>.</p>
 * @public
 */
export interface QDataKey {
  /**
   * <p>The ARN of the KMS key that is registered to a Quick Sight account for encryption and decryption use as a <code>QDataKey</code>.</p>
   * @public
   */
  QDataKeyArn?: string | undefined;

  /**
   * <p>The type of <code>QDataKey</code>.</p>
   * @public
   */
  QDataKeyType?: QDataKeyType | undefined;
}

/**
 * @public
 */
export interface DescribeKeyRegistrationResponse {
  /**
   * <p>The ID of the Amazon Web Services account that contains the customer managed key registration specified in the request.</p>
   * @public
   */
  AwsAccountId?: string | undefined;

  /**
   * <p>A list of <code>RegisteredCustomerManagedKey</code> objects in a Quick Sight account.</p>
   * @public
   */
  KeyRegistration?: RegisteredCustomerManagedKey[] | undefined;

  /**
   * <p>A list of <code>QDataKey</code> objects in a Quick Sight account.</p>
   * @public
   */
  QDataKey?: QDataKey | undefined;

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
export interface DescribeKnowledgeBaseRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the knowledge base.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The unique identifier for the knowledge base.</p>
   * @public
   */
  KnowledgeBaseId: string | undefined;
}

/**
 * <p>A summary of an ingestion job for a knowledge base.</p>
 * @public
 */
export interface KnowledgeBaseIngestionSummary {
  /**
   * <p>The unique identifier for the ingestion job.</p>
   * @public
   */
  IngestionId: string | undefined;

  /**
   * <p>The status of the ingestion job.</p>
   * @public
   */
  IngestionStatus: KbIngestionStatus | undefined;

  /**
   * <p>The start time of the ingestion job.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The end time of the ingestion job.</p>
   * @public
   */
  EndTime?: Date | undefined;
}

/**
 * <p>The template configuration for a knowledge base.</p>
 * @public
 */
export interface KbTemplateConfiguration {
  /**
   * <p>The template document that defines the knowledge base behavior.</p>
   * @public
   */
  template?: __DocumentType | undefined;
}

/**
 * <p>The configuration settings for a knowledge base.</p>
 * @public
 */
export interface KnowledgeBaseConfiguration {
  /**
   * <p>The template configuration for the knowledge base.</p>
   * @public
   */
  templateConfiguration?: KbTemplateConfiguration | undefined;

  /**
   * <p>Indicates whether event notifications are enabled for the knowledge base.</p>
   * @public
   */
  eventEnabled?: boolean | undefined;
}

/**
 * <p>The configuration for image extraction from knowledge base documents.</p>
 * @public
 */
export interface ImageExtractionConfiguration {
  /**
   * <p>The status of image extraction. Valid values are ENABLED and DISABLED.</p>
   * @public
   */
  imageExtractionStatus: ImageExtractionStatus | undefined;
}

/**
 * <p>The configuration for video extraction from knowledge base documents.</p>
 * @public
 */
export interface VideoExtractionConfiguration {
  /**
   * <p>The status of video extraction. Valid values are ENABLED and DISABLED.</p>
   * @public
   */
  videoExtractionStatus: VideoExtractionStatus | undefined;

  /**
   * <p>The type of video extraction to perform.</p>
   * @public
   */
  videoExtractionType?: VideoExtractionType | undefined;
}

/**
 * <p>The configuration for media extraction from knowledge base documents.</p>
 * @public
 */
export interface MediaExtractionConfiguration {
  /**
   * <p>The configuration for image extraction.</p>
   * @public
   */
  imageExtractionConfiguration?: ImageExtractionConfiguration | undefined;

  /**
   * <p>The configuration for audio extraction.</p>
   * @public
   */
  audioExtractionConfiguration?: AudioExtractionConfiguration | undefined;

  /**
   * <p>The configuration for video extraction.</p>
   * @public
   */
  videoExtractionConfiguration?: VideoExtractionConfiguration | undefined;
}

/**
 * <p>A knowledge base resource that provides data from connected sources for AI-powered experiences in Amazon QuickSight.</p>
 * @public
 */
export interface KnowledgeBase {
  /**
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   * @public
   */
  KnowledgeBaseArn: string | undefined;

  /**
   * <p>The unique identifier for the knowledge base.</p>
   * @public
   */
  KnowledgeBaseId: string | undefined;

  /**
   * <p>The name of the knowledge base.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The status of the knowledge base.</p>
   * @public
   */
  Status: DataSetStatus | undefined;

  /**
   * <p>The ARN of the data source associated with the knowledge base.</p>
   * @public
   */
  DataSourceArn: string | undefined;

  /**
   * <p>The configuration settings for the knowledge base.</p>
   * @public
   */
  KnowledgeBaseConfiguration: KnowledgeBaseConfiguration | undefined;

  /**
   * <p>The media extraction configuration for the knowledge base.</p>
   * @public
   */
  MediaExtractionConfiguration?: MediaExtractionConfiguration | undefined;

  /**
   * <p>The type of the knowledge base.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>The date and time that the knowledge base was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The date and time that the knowledge base was last updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>The description of the knowledge base.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Indicates whether email notifications are enabled for ingestion failures.</p>
   * @public
   */
  IsEmailNotificationOptedForIngestionFailures?: boolean | undefined;

  /**
   * <p>A summary of the first completed ingestion for the knowledge base.</p>
   * @public
   */
  FirstCompletedIngestionSummary?: KnowledgeBaseIngestionSummary | undefined;

  /**
   * <p>A summary of the first incomplete ingestion for the knowledge base.</p>
   * @public
   */
  FirstIncompleteIngestionSummary?: KnowledgeBaseIngestionSummary | undefined;

  /**
   * <p>A summary of the most recent ingestion for the knowledge base.</p>
   * @public
   */
  LatestIngestionSummary?: KnowledgeBaseIngestionSummary | undefined;

  /**
   * <p>The size of the knowledge base in bytes.</p>
   * @public
   */
  KnowledgeBaseSizeBytes?: number | undefined;

  /**
   * <p>The number of documents in the knowledge base.</p>
   * @public
   */
  DocumentCount?: number | undefined;

  /**
   * <p>The ARN of the primary owner of the knowledge base.</p>
   * @public
   */
  PrimaryOwnerArn?: string | undefined;

  /**
   * <p>The username of the primary owner of the knowledge base.</p>
   * @public
   */
  PrimaryOwnerUsername?: string | undefined;
}

/**
 * @public
 */
export interface DescribeKnowledgeBaseResponse {
  /**
   * <p>The knowledge base.</p>
   * @public
   */
  KnowledgeBase: KnowledgeBase | undefined;

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
export interface DescribeKnowledgeBasePermissionsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the knowledge base.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The unique identifier for the knowledge base.</p>
   * @public
   */
  KnowledgeBaseId: string | undefined;
}

/**
 * @public
 */
export interface DescribeKnowledgeBasePermissionsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   * @public
   */
  KnowledgeBaseArn: string | undefined;

  /**
   * <p>The unique identifier for the knowledge base.</p>
   * @public
   */
  KnowledgeBaseId: string | undefined;

  /**
   * <p>The resource permissions for the knowledge base.</p>
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
export interface DescribeNamespaceRequest {
  /**
   * <p>The ID for the Amazon Web Services account that contains the Quick Sight namespace that you want to describe.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace that you want to describe.</p>
   * @public
   */
  Namespace: string | undefined;
}

/**
 * <p>Errors that occur during namespace creation.</p>
 * @public
 */
export interface NamespaceError {
  /**
   * <p>The error type.</p>
   * @public
   */
  Type?: NamespaceErrorType | undefined;

  /**
   * <p>The message for the error.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>The error type.</p>
 * @public
 */
export interface NamespaceInfoV2 {
  /**
   * <p>The name of the error.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The namespace ARN.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The namespace Amazon Web Services Region.</p>
   * @public
   */
  CapacityRegion?: string | undefined;

  /**
   * <p>The creation status of a namespace that is not yet completely created.</p>
   * @public
   */
  CreationStatus?: NamespaceStatus | undefined;

  /**
   * <p>The identity store used for the namespace.</p>
   * @public
   */
  IdentityStore?: IdentityStore | undefined;

  /**
   * <p>An error that occurred when the namespace was created.</p>
   * @public
   */
  NamespaceError?: NamespaceError | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the IAM Identity Center application.</p>
   * @public
   */
  IamIdentityCenterApplicationArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the IAM Identity Center instance.</p>
   * @public
   */
  IamIdentityCenterInstanceArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeNamespaceResponse {
  /**
   * <p>The information about the namespace that you're describing. The response includes
   *         the namespace ARN, name, Amazon Web Services Region, creation status, and identity store. <code>DescribeNamespace</code> also
   *         works for namespaces that are in the process of being created. For incomplete namespaces,
   *         this API operation lists the namespace error types and messages associated with the creation process.</p>
   * @public
   */
  Namespace?: NamespaceInfoV2 | undefined;

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
export interface DescribeOAuthClientApplicationRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the OAuthClientApplication that you want to describe.</p>
   * @public
   */
  OAuthClientApplicationId: string | undefined;
}

/**
 * <p>An OAuth client application that is used to authenticate connections to a data source through an OAuth identity provider.</p>
 * @public
 */
export interface OAuthClientApplication {
  /**
   * <p>The ID of the OAuthClientApplication. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  OAuthClientApplicationId?: string | undefined;

  /**
   * <p>The display name of the OAuthClientApplication.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The OAuth client authentication type used by the OAuthClientApplication. Valid values are <code>TOKEN</code>.</p>
   * @public
   */
  OAuthClientAuthenticationType?: OAuthClientAuthenticationType | undefined;

  /**
   * <p>The token endpoint URL of the identity provider that is used to obtain access tokens.</p>
   * @public
   */
  OAuthTokenEndpointUrl?: string | undefined;

  /**
   * <p>The authorization endpoint URL of the identity provider that is used to obtain authorization codes.</p>
   * @public
   */
  OAuthAuthorizationEndpointUrl?: string | undefined;

  /**
   * <p>The OAuth scopes that are requested when the OAuthClientApplication obtains an access token from the identity provider.</p>
   * @public
   */
  OAuthScopes?: string | undefined;

  /**
   * <p>The type of data source that the OAuthClientApplication is used with. Valid values are <code>SNOWFLAKE</code>.</p>
   * @public
   */
  DataSourceType?: DataSourceType | undefined;

  /**
   * <p>VPC connection properties.</p>
   * @public
   */
  IdentityProviderVpcConnectionProperties?: VpcConnectionProperties | undefined;

  /**
   * <p>The time that the OAuthClientApplication was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The time that the OAuthClientApplication was last updated.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the OAuthClientApplication.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeOAuthClientApplicationResponse {
  /**
   * <p>The information about the OAuthClientApplication.</p>
   * @public
   */
  OAuthClientApplication?: OAuthClientApplication | undefined;

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
export interface DescribeQPersonalizationConfigurationRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the personalization configuration that the user wants described.</p>
   * @public
   */
  AwsAccountId: string | undefined;
}

/**
 * @public
 */
export interface DescribeQPersonalizationConfigurationResponse {
  /**
   * <p>A value that indicates whether personalization is enabled or not.</p>
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
export interface DescribeQuickSightQSearchConfigurationRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the Quick Sight Q Search configuration that the user wants described.</p>
   * @public
   */
  AwsAccountId: string | undefined;
}

/**
 * @public
 */
export interface DescribeQuickSightQSearchConfigurationResponse {
  /**
   * <p>The status of Quick Sight Q Search configuration.</p>
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
export interface DescribeRefreshScheduleRequest {
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
   * <p>The ID of the refresh schedule.</p>
   * @public
   */
  ScheduleId: string | undefined;
}

/**
 * @public
 */
export interface DescribeRefreshScheduleResponse {
  /**
   * <p>The refresh schedule.</p>
   * @public
   */
  RefreshSchedule?: RefreshSchedule | undefined;

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
   * <p>The Amazon Resource Name (ARN) for the refresh schedule.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRoleCustomPermissionRequest {
  /**
   * <p>The name of the role whose permissions you want described.</p>
   * @public
   */
  Role: Role | undefined;

  /**
   * <p>The ID for the Amazon Web Services account that you want to create a group in. The Amazon Web Services account ID that you provide must be the same Amazon Web Services account that contains your Amazon Quick Sight account.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace that contains the role.</p>
   * @public
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface DescribeRoleCustomPermissionResponse {
  /**
   * <p>The name of the custom permission that is described.</p>
   * @public
   */
  CustomPermissionsName?: string | undefined;

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
export interface DescribeSelfUpgradeConfigurationRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the Quick self-upgrade configuration.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The Quick namespace that you want to describe the Quick self-upgrade configuration for.</p>
   * @public
   */
  Namespace: string | undefined;
}

/**
 * <p>The self-upgrade configuration for the Quick account.</p>
 * @public
 */
export interface SelfUpgradeConfiguration {
  /**
   * <p>Status set for the self-upgrade configuration for the Quick account. It can contain the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AUTO_APPROVAL</code>: All the self-upgrade requests will be auto approved.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ADMIN_APPROVAL</code>: All the self-upgrade requests will require admin approval.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SelfUpgradeStatus?: SelfUpgradeStatus | undefined;
}

/**
 * @public
 */
export interface DescribeSelfUpgradeConfigurationResponse {
  /**
   * <p>The self-upgrade configuration for the Quick account.</p>
   * @public
   */
  SelfUpgradeConfiguration?: SelfUpgradeConfiguration | undefined;

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
export interface DescribeSpaceRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the space.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the space that you want to describe.</p>
   * @public
   */
  SpaceId: string | undefined;

  /**
   * <p>The maximum number of contributors to include in the response.</p>
   * @public
   */
  MaxContributors?: number | undefined;
}

/**
 * <p>A contributor to an Amazon QuickSight space.</p>
 * @public
 */
export interface SpaceContributor {
  /**
   * <p>The user name of the contributor.</p>
   * @public
   */
  userName?: string | undefined;

  /**
   * <p>The raw file size in bytes contributed by the user.</p>
   * @public
   */
  rawFileSizeBytes: number | undefined;

  /**
   * <p>The percentage of total contributions made by the user.</p>
   * @public
   */
  percentage?: number | undefined;
}

/**
 * <p>The details of a QuickSight resource in a space.</p>
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
   * <p>The ARN of the QuickSight resource.</p>
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
 * <p>A QuickSight resource that is associated with a space.</p>
 * @public
 */
export interface SpaceQuickSightResource {
  /**
   * <p>The type of the QuickSight resource.</p>
   * @public
   */
  resourceType: SpaceQuickSightResourceType | undefined;

  /**
   * <p>The details of the QuickSight resource.</p>
   * @public
   */
  resourceDetails: SpaceQuickSightResourceDetails | undefined;
}

/**
 * <p>The details of an Amazon QuickSight space.</p>
 * @public
 */
export interface SpaceDetails {
  /**
   * <p>The display name of the space.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the space.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The resources in the space.</p>
   * @public
   */
  resources?: SpaceQuickSightResource[] | undefined;

  /**
   * <p>The date and time that the space was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time that the space was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The total consumed source size in bytes.</p>
   * @public
   */
  consumedSourceSize?: number | undefined;

  /**
   * <p>The number of consumed source documents.</p>
   * @public
   */
  consumedSourceDocCount?: number | undefined;

  /**
   * <p>The user who created the space.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The ARN of the user who created the space.</p>
   * @public
   */
  createdByArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSpaceResponse {
  /**
   * <p>The ID of the space.</p>
   * @public
   */
  spaceId: string | undefined;

  /**
   * <p>The ARN of the space.</p>
   * @public
   */
  spaceArn?: string | undefined;

  /**
   * <p>The details of the space.</p>
   * @public
   */
  Space: SpaceDetails | undefined;

  /**
   * <p>A list of contributors to the space.</p>
   * @public
   */
  Contributors?: SpaceContributor[] | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSpacePermissionsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the space.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the space that you want to describe permissions for.</p>
   * @public
   */
  SpaceId: string | undefined;
}

/**
 * @public
 */
export interface DescribeSpacePermissionsResponse {
  /**
   * <p>The ID of the space.</p>
   * @public
   */
  spaceId: string | undefined;

  /**
   * <p>The ARN of the space.</p>
   * @public
   */
  spaceArn?: string | undefined;

  /**
   * <p>A list of resource permissions for the space.</p>
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
export interface DescribeTemplateRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the template that you're describing.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the template.</p>
   * @public
   */
  TemplateId: string | undefined;

  /**
   * <p>(Optional) The number for the version to describe. If a <code>VersionNumber</code> parameter
   * 			value isn't provided, the latest version of the template is described.</p>
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * <p>The alias of the template that you want to describe. If you name a specific alias, you
   * 			describe the version that the alias points to. You can specify the latest version of the
   * 			template by providing the keyword <code>$LATEST</code> in the <code>AliasName</code>
   * 			parameter. The keyword <code>$PUBLISHED</code> doesn't apply to templates.</p>
   * @public
   */
  AliasName?: string | undefined;
}

/**
 * <p>List of errors that occurred when the template version creation failed.</p>
 * @public
 */
export interface TemplateError {
  /**
   * <p>Type of error.</p>
   * @public
   */
  Type?: TemplateErrorType | undefined;

  /**
   * <p>Description of the error type.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>An error path that shows which entities caused the template error.</p>
   * @public
   */
  ViolatedEntities?: Entity[] | undefined;
}

/**
 * <p>A version of a template.</p>
 * @public
 */
export interface TemplateVersion {
  /**
   * <p>The time that this template version was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>Errors associated with this template version.</p>
   * @public
   */
  Errors?: TemplateError[] | undefined;

  /**
   * <p>The version number of the template version.</p>
   * @public
   */
  VersionNumber?: number | undefined;

  /**
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
   * @public
   */
  Status?: ResourceStatus | undefined;

  /**
   * <p>Schema of the dataset identified by the placeholder. Any dashboard created from this
   *             template should be bound to new datasets matching the same schema described through this
   *             API operation.</p>
   * @public
   */
  DataSetConfigurations?: DataSetConfiguration[] | undefined;

  /**
   * <p>The description of the template.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an analysis or template that was used to create this
   *             template.</p>
   * @public
   */
  SourceEntityArn?: string | undefined;

  /**
   * <p>The ARN of the theme associated with this version of the template.</p>
   * @public
   */
  ThemeArn?: string | undefined;

  /**
   * <p>A list of the associated sheets with the unique identifier and name of each sheet.</p>
   * @public
   */
  Sheets?: Sheet[] | undefined;
}

/**
 * <p>A template object. A <i>template</i> is an entity in Quick Sight that
 *             encapsulates the metadata required to create an analysis and that you can use to create
 *             a dashboard. A template adds a layer of abstraction by using placeholders to replace the
 *             dataset associated with an analysis. You can use templates to create dashboards by
 *             replacing dataset placeholders with datasets that follow the same schema that was used
 *             to create the source analysis and template.</p>
 *          <p>You can share templates across Amazon Web Services accounts by allowing users in other Amazon Web Services accounts to
 *             create a template or a dashboard from an existing template.</p>
 * @public
 */
export interface Template {
  /**
   * <p>The Amazon Resource Name (ARN) of the template.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The display name of the template.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A structure describing the versions of the template.</p>
   * @public
   */
  Version?: TemplateVersion | undefined;

  /**
   * <p>The ID for the template. This is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  TemplateId?: string | undefined;

  /**
   * <p>Time when this was last updated.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>Time when this was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeTemplateResponse {
  /**
   * <p>The template structure for the object you want to describe.</p>
   * @public
   */
  Template?: Template | undefined;

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
export interface DescribeTemplateAliasRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the template alias that you're
   * 			describing.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the template.</p>
   * @public
   */
  TemplateId: string | undefined;

  /**
   * <p>The name of the template alias that you want to describe. If you name a specific alias, you
   * 			describe the version that the alias points to. You can specify the latest version of the
   * 			template by providing the keyword <code>$LATEST</code> in the <code>AliasName</code>
   * 			parameter. The keyword <code>$PUBLISHED</code> doesn't apply to templates.</p>
   * @public
   */
  AliasName: string | undefined;
}

/**
 * @public
 */
export interface DescribeTemplateAliasResponse {
  /**
   * <p>Information about the template alias.</p>
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
export interface DescribeTemplateDefinitionRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the template. You must be using the
   * 			 Amazon Web Services account that the template is in.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the template that you're describing.</p>
   * @public
   */
  TemplateId: string | undefined;

  /**
   * <p>The version number of the template.</p>
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * <p>The alias of the template that you want to describe. If you name a specific alias, you
   * 			 describe the version that the alias points to. You can specify the latest version of the
   * 			 template by providing the keyword <code>$LATEST</code> in the <code>AliasName</code>
   * 			 parameter. The keyword <code>$PUBLISHED</code> doesn't apply to templates.</p>
   * @public
   */
  AliasName?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTemplateDefinitionResponse {
  /**
   * <p>The descriptive name of the template.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The ID of the template described.</p>
   * @public
   */
  TemplateId?: string | undefined;

  /**
   * <p>Errors associated with the template version.</p>
   * @public
   */
  Errors?: TemplateError[] | undefined;

  /**
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
   * @public
   */
  ResourceStatus?: ResourceStatus | undefined;

  /**
   * <p>The ARN of the theme of the template.</p>
   * @public
   */
  ThemeArn?: string | undefined;

  /**
   * <p>The definition of the template.</p>
   *          <p>A definition is the data model of all features in a Dashboard, Template, or Analysis.</p>
   * @public
   */
  Definition?: TemplateVersionDefinition | undefined;

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
export interface DescribeTemplatePermissionsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the template that you're describing.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the template.</p>
   * @public
   */
  TemplateId: string | undefined;
}

/**
 * @public
 */
export interface DescribeTemplatePermissionsResponse {
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
   * <p>A list of resource permissions to be set on the template. </p>
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
export interface DescribeThemeRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the theme that you're describing.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the theme.</p>
   * @public
   */
  ThemeId: string | undefined;

  /**
   * <p>The version number for the version to describe. If a <code>VersionNumber</code> parameter
   * 			value isn't provided, the latest version of the theme is described.</p>
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * <p>The alias of the theme that you want to describe. If you name a specific alias, you
   * 			describe the version that the alias points to. You can specify the latest version of the
   * 			theme by providing the keyword <code>$LATEST</code> in the <code>AliasName</code>
   * 			parameter. The keyword <code>$PUBLISHED</code> doesn't apply to themes.</p>
   * @public
   */
  AliasName?: string | undefined;
}

/**
 * <p>Theme error.</p>
 * @public
 */
export interface ThemeError {
  /**
   * <p>The type of error.</p>
   * @public
   */
  Type?: ThemeErrorType | undefined;

  /**
   * <p>The error message.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>A version of a theme.</p>
 * @public
 */
export interface ThemeVersion {
  /**
   * <p>The version number of the theme.</p>
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The description of the theme.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The Quick Sight-defined ID of the theme that a custom theme inherits from. All
   *             themes initially inherit from a default Quick Sight theme.</p>
   * @public
   */
  BaseThemeId?: string | undefined;

  /**
   * <p>The date and time that this theme version was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The theme configuration, which contains all the theme display properties.</p>
   * @public
   */
  Configuration?: ThemeConfiguration | undefined;

  /**
   * <p>Errors associated with the theme.</p>
   * @public
   */
  Errors?: ThemeError[] | undefined;

  /**
   * <p>The status of the theme version.</p>
   * @public
   */
  Status?: ResourceStatus | undefined;
}

/**
 * <p>Summary information about a theme.</p>
 * @public
 */
export interface Theme {
  /**
   * <p>The Amazon Resource Name (ARN) of the theme.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name that the user gives to the theme.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The identifier that the user gives to the theme.</p>
   * @public
   */
  ThemeId?: string | undefined;

  /**
   * <p>A version of a theme.</p>
   * @public
   */
  Version?: ThemeVersion | undefined;

  /**
   * <p>The date and time that the theme was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The date and time that the theme was last updated.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>The type of theme, based on how it was created. Valid values include:
   *             <code>QUICKSIGHT</code> and <code>CUSTOM</code>.</p>
   * @public
   */
  Type?: ThemeType | undefined;
}

/**
 * @public
 */
export interface DescribeThemeResponse {
  /**
   * <p>The information about the theme that you are describing.</p>
   * @public
   */
  Theme?: Theme | undefined;

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
export interface DescribeThemeAliasRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the theme alias that you're
   * 			describing.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the theme.</p>
   * @public
   */
  ThemeId: string | undefined;

  /**
   * <p>The name of the theme alias that you want to describe.</p>
   * @public
   */
  AliasName: string | undefined;
}

/**
 * @public
 */
export interface DescribeThemeAliasResponse {
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
export interface DescribeThemePermissionsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the theme that you're describing.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the theme that you want to describe permissions for.</p>
   * @public
   */
  ThemeId: string | undefined;
}

/**
 * @public
 */
export interface DescribeThemePermissionsResponse {
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
   * <p>A list of resource permissions set on the theme. </p>
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
export interface DescribeTopicRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the topic that you want to describe. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  TopicId: string | undefined;
}

/**
 * @public
 */
export interface DescribeTopicResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the topic.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID of the topic that you want to describe. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  TopicId?: string | undefined;

  /**
   * <p>The definition of a topic.</p>
   * @public
   */
  Topic?: TopicDetails | undefined;

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
   * <p>Custom instructions for the topic.</p>
   * @public
   */
  CustomInstructions?: CustomInstructions | undefined;
}

/**
 * @public
 */
export interface DescribeTopicPermissionsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the topic that you want
   *          described.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the topic that you want to describe. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  TopicId: string | undefined;
}

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
   * 			Amazon Web Services account that contains your Amazon Quick Sight account.</p>
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
 * <p>A registered user of Quick Sight. </p>
 * @public
 */
export interface User {
  /**
   * <p>The Amazon Resource Name (ARN) for the user.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The user's user name. This value is required if you are registering a user that will be managed in Quick Sight. In the output, the value for <code>UserName</code> is
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
   * <p>The Quick Sight role for the user. The user role can be one of the
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
   *                     Quick Sight settings.</p>
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
   *                   <code>ADMIN_PRO</code>: Admin Pros are Author Pros who can also manage Quick Sight administrative settings. Admin Pro users are billed at Author Pro pricing.</p>
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
   * <p>The active status of user. When you create an Quick Sight user that's not an IAM user or an Active Directory user, that user is inactive until they sign in and provide a
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
   *             federate into Quick Sight with an associated IAM role. The type can be one of the following.</p>
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
 * <p>An entry that appears when a <code>KeyRegistration</code> update to Quick Sight fails.</p>
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
 * <p>A resource operation that failed.</p>
 * @public
 */
export interface FailedSpaceResourceOperation {
  /**
   * <p>The type of the resource.</p>
   * @public
   */
  ResourceType: SpaceQuickSightResourceType | undefined;

  /**
   * <p>The details of the resource.</p>
   * @public
   */
  ResourceDetails?: SpaceQuickSightResourceDetails | undefined;

  /**
   * <p>The error message that describes why the operation failed.</p>
   * @public
   */
  ErrorMessage: string | undefined;
}

/**
 * <p>Information about a per-ARN failure when updating agent associations.</p>
 * @public
 */
export interface FailedToUpdateAssociation {
  /**
   * <p>The ARN that could not be added or removed.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>A description of the failure.</p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p>The error code for the failure.</p>
   * @public
   */
  ErrorCode?: string | undefined;
}

/**
 * <p>The basic information of the flow exluding its definition specifying the steps.</p>
 * @public
 */
export interface FlowSummary {
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
   * <p>The display name of the flow.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the flow.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The time this flow was created.</p>
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * <p>The identifier of the principal who created the flow.</p>
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * <p>The last time this flow was modified.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>The identifier of the last principal who updated the flow.</p>
   * @public
   */
  LastUpdatedBy?: string | undefined;

  /**
   * <p>The publish state for the flow. The valid values are <code>DRAFT</code>, <code>PUBLISHED</code>,
   *             or <code>PENDING_APPROVAL</code>.</p>
   * @public
   */
  PublishState?: FlowPublishState | undefined;

  /**
   * <p>The number of runs done for the flow.</p>
   * @public
   */
  RunCount?: number | undefined;

  /**
   * <p>The number of users who have used the flow.</p>
   * @public
   */
  UserCount?: number | undefined;

  /**
   * <p>The identifier of the last principal who published the flow.</p>
   * @public
   */
  LastPublishedBy?: string | undefined;

  /**
   * <p>The last time this flow was published.</p>
   * @public
   */
  LastPublishedAt?: Date | undefined;
}

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
 * <p>A filter to use to search an Quick Sight folder.</p>
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
 * <p>A summary of information about an existing Quick Sight folder. </p>
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
 * <p>The QA result that is made from generated answer.</p>
 * @public
 */
export interface GeneratedAnswerResult {
  /**
   * <p>The question text.</p>
   * @public
   */
  QuestionText?: string | undefined;

  /**
   * <p>The answer status of the generated answer.</p>
   * @public
   */
  AnswerStatus?: GeneratedAnswerStatus | undefined;

  /**
   * <p>The ID of the topic.</p>
   * @public
   */
  TopicId?: string | undefined;

  /**
   * <p>The name of the topic.</p>
   * @public
   */
  TopicName?: string | undefined;

  /**
   * <p>The restatement for the answer.</p>
   * @public
   */
  Restatement?: string | undefined;

  /**
   * <p>The ID of the question.</p>
   * @public
   */
  QuestionId?: string | undefined;

  /**
   * <p>The ID of the answer.</p>
   * @public
   */
  AnswerId?: string | undefined;

  /**
   * <p>The URL of the question.</p>
   * @public
   */
  QuestionUrl?: string | undefined;
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
   * <p>The Amazon Quick Sight namespace that the anonymous user virtually belongs to. If you
   *             are not using an Amazon Quick custom namespace, set this to
   *                 <code>default</code>.</p>
   * @public
   */
  Namespace: string | undefined;

  /**
   * <p>Session tags are user-specified strings that identify a session in your application. You can use these tags to implement row-level security (RLS) controls.
   *             Before you use the <code>SessionTags</code> parameter, make sure that you have configured the relevant datasets using the <code>DataSet$RowLevelPermissionTagConfiguration</code> parameter
   *             so that session tags can be used to provide row-level security.</p>
   *          <p>When using <code>SessionTags</code> in <code>GenerateEmbedUrlForAnonymousUser</code>,</p>
   *          <ul>
   *             <li>
   *                <p>Treat <code>SessionTags</code> as security credentials. Do not expose <code>SessionTags</code> to end users or client-side code.</p>
   *             </li>
   *             <li>
   *                <p>Implement server-side controls. Ensure that <code>SessionTags</code> are set exclusively by your trusted backend services, not by parameters that end users can modify.</p>
   *             </li>
   *             <li>
   *                <p>Protect <code>SessionTags</code> from enumeration. Ensure that users in one tenant cannot discover or guess sessionTag values belonging to other tenants.</p>
   *             </li>
   *             <li>
   *                <p>Review your architecture. If downstream customers or partners are allowed to call the <code>GenerateEmbedUrlForAnonymousUser</code> API directly,
   *                     evaluate whether those parties could specify sessionTag values for tenants they should not access.</p>
   *             </li>
   *          </ul>
   *          <p>Besides, these are not the tags used for the Amazon Web Services resource tagging feature.
   *             For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/quicksight-dev-rls-tags.html">Using Row-Level Security (RLS) with Tags</a> in the <i>Amazon Quick User Guide</i>.</p>
   * @public
   */
  SessionTags?: SessionTag[] | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) for the Quick Sight resources that the user is authorized to
   *             access during the lifetime of the session.</p>
   *          <p>If you choose <code>Dashboard</code> embedding experience, pass the list of dashboard
   *             ARNs in the account that you want the user to be able to view.</p>
   *          <p>If you want to make changes to the theme of your embedded content, pass a list of
   *             theme ARNs that the anonymous users need access to.</p>
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
   * <p>The Amazon Resource Name (ARN) to use for the anonymous Amazon Quick
   *             user.</p>
   * @public
   */
  AnonymousUserArn: string | undefined;
}

/**
 * <p>The recent snapshots configuration for an embedded Quick Sight dashboard.</p>
 * @public
 */
export interface RecentSnapshotsConfigurations {
  /**
   * <p>The recent snapshots configuration for an embedded Quick Sight dashboard.</p>
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * <p>The schedules configuration for an embedded Quick Sight dashboard.</p>
 * @public
 */
export interface SchedulesConfigurations {
  /**
   * <p>The schedules configuration for an embedded Quick Sight dashboard.</p>
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * <p>The state perssitence configuration of an embedded dashboard.</p>
 * @public
 */
export interface StatePersistenceConfigurations {
  /**
   * <p>Determines if a Quick Sight dashboard's state persistence settings are turned on or off.</p>
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * <p>The threshold alerts configuration for an embedded Quick Sight dashboard.</p>
 * @public
 */
export interface ThresholdAlertsConfigurations {
  /**
   * <p>The threshold alerts configuration for an embedded Quick Sight dashboard.</p>
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
   * <p>The bookmarks configuration for an embedded dashboard in Amazon Quick Sight.</p>
   * @public
   */
  Bookmarks?: BookmarksConfigurations | undefined;

  /**
   * <p>The shared view settings of an embedded dashboard.</p>
   * @public
   */
  SharedView?: SharedViewConfigurations | undefined;

  /**
   * <p>The Amazon Q configurations of an embedded Amazon Quick Sight
   *             dashboard.</p>
   * @public
   */
  AmazonQInQuickSight?: AmazonQInQuickSightDashboardConfigurations | undefined;

  /**
   * <p>The schedules configuration for an embedded Quick Sight dashboard.</p>
   * @public
   */
  Schedules?: SchedulesConfigurations | undefined;

  /**
   * <p>The recent snapshots configuration for an Quick Sight embedded dashboard</p>
   * @public
   */
  RecentSnapshots?: RecentSnapshotsConfigurations | undefined;

  /**
   * <p>The threshold alerts configuration for an Quick Sight embedded dashboard.</p>
   * @public
   */
  ThresholdAlerts?: ThresholdAlertsConfigurations | undefined;

  /**
   * <p>The dashboard customization summary configuration for an embedded Quick Sight dashboard.</p>
   * @public
   */
  DashboardCustomizationSummary?: DashboardCustomizationSummaryConfigurations | undefined;
}

/**
 * <p>Information about the dashboard you want to embed.</p>
 * @public
 */
export interface RegisteredUserDashboardEmbeddingConfiguration {
  /**
   * <p>The dashboard ID for the dashboard that you want the user to see first. This ID is
   *             included in the output URL. When the URL in response is accessed, Amazon Quick Sight
   *             renders this dashboard if the user has permissions to view it.</p>
   *          <p>If the user does not have permission to view this dashboard, they see a permissions
   *             error message.</p>
   * @public
   */
  InitialDashboardId: string | undefined;

  /**
   * <p>The feature configurations of an embbedded Amazon Quick Sight dashboard.</p>
   * @public
   */
  FeatureConfigurations?: RegisteredUserDashboardFeatureConfigurations | undefined;
}

/**
 * <p>The experience that you are embedding. You can use this object to generate a url that
 *             embeds a visual into your application.</p>
 * @public
 */
export interface RegisteredUserDashboardVisualEmbeddingConfiguration {
  /**
   * <p>The visual ID for the visual that you want the user to embed. This ID is included in
   *             the output URL. When the URL in response is accessed, Amazon Quick Sight renders this
   *             visual.</p>
   *          <p>The Amazon Resource Name (ARN) of the dashboard that the visual belongs to must be
   *             included in the <code>AuthorizedResourceArns</code> parameter. Otherwise, the request
   *             will fail with <code>InvalidParameterValueException</code>.</p>
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
   * <p>The ID of the new Q reader experience topic that you want to make the starting topic
   *             in the Generative Q&A experience. You can find a topic ID by navigating to the Topics pane in the Quick application and opening a topic. The ID is in the URL for the topic that
   *             you open.</p>
   *          <p>If you don't specify an initial topic or you specify a legacy topic, a list of all
   *             shared new reader experience topics is shown in the Generative Q&A experience for
   *             your readers. When you select an initial new reader experience topic, you can specify
   *             whether or not readers are allowed to select other new reader experience topics from the
   *             available ones in the list.</p>
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
   * <p>The ID of the legacy Q topic that you want to use as the starting topic in the Q
   *             search bar. To locate the topic ID of the topic that you want to use, open the <a href="https://quicksight.aws.amazon.com/">Quick Sight console</a>, navigate to the
   *                 <b>Topics</b> pane, and choose thre topic that you want to
   *             use. The <code>TopicID</code> is located in the URL of the topic that opens. When you
   *             select an initial topic, you can specify whether or not readers are allowed to select
   *             other topics from the list of available topics.</p>
   *          <p>If you don't specify an initial topic or if you specify a new reader experience topic,
   *             a list of all shared legacy topics is shown in the Q bar. </p>
   * @public
   */
  InitialTopicId?: string | undefined;
}

/**
 * <p>An object that provides information about the configuration of a chat agent.</p>
 * @public
 */
export interface RegisteredUserQuickChatEmbeddingConfiguration {}

/**
 * <p>The feature configurations of an embedded Amazon Quick Sight console.</p>
 * @public
 */
export interface RegisteredUserConsoleFeatureConfigurations {
  /**
   * <p>The state persistence configurations of an embedded Amazon Quick Sight console.</p>
   * @public
   */
  StatePersistence?: StatePersistenceConfigurations | undefined;

  /**
   * <p>The shared view settings of an embedded dashboard.</p>
   * @public
   */
  SharedView?: SharedViewConfigurations | undefined;

  /**
   * <p>The Amazon Q configurations of an embedded Amazon Quick Sight
   *             console.</p>
   * @public
   */
  AmazonQInQuickSight?: AmazonQInQuickSightConsoleConfigurations | undefined;

  /**
   * <p>The schedules configuration for an embedded Quick Sight dashboard.</p>
   * @public
   */
  Schedules?: SchedulesConfigurations | undefined;

  /**
   * <p>The recent snapshots configuration for an embedded Quick Sight dashboard.</p>
   * @public
   */
  RecentSnapshots?: RecentSnapshotsConfigurations | undefined;

  /**
   * <p>The threshold alerts configuration for an embedded Quick Sight dashboard.</p>
   * @public
   */
  ThresholdAlerts?: ThresholdAlertsConfigurations | undefined;

  /**
   * <p>The dashboard customization summary configuration for an embedded Quick Sight console.</p>
   * @public
   */
  DashboardCustomizationSummary?: DashboardCustomizationSummaryConfigurations | undefined;
}

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
 * <p>The type of experience you want to embed. For registered users, you can embed Quick dashboards or the Amazon Quick Sight console.</p>
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
   *                     <i>Amazon Quick User Guide</i>.</p>
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
   *                     <i>Amazon Quick User Guide</i>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/quicksight/latest/user/embedded-analytics-full-console-for-authenticated-users.html">Embedding the Full Functionality of the Amazon Quick Sight Console for
   *                         Authenticated Users</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/quicksight/latest/user/customizing-permissions-to-the-quicksight-console.html">Customizing Access to the Amazon Quick Console</a>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information about the high-level steps for embedding and for an interactive
   *             demo of the ways you can customize embedding, visit the <a href="https://docs.aws.amazon.com/quicksight/latest/user/quicksight-dev-portal.html">Amazon Quick
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

  /**
   * <p>The configuration details for embedding the Quick chat agent.</p>
   * @public
   */
  QuickChat?: RegisteredUserQuickChatEmbeddingConfiguration | undefined;
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
   * <p>The experience that you want to embed. For registered users, you can embed Quick dashboards, Amazon Quick Sight visuals, the Amazon Quick Sight Q search bar,
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
   * <p>The type of experience you want to embed. For registered users, you can embed Quick dashboards or the Amazon Quick Sight console.</p>
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
   * <p>The Amazon Quick user's Amazon Resource Name (ARN), for use with
   *                 <code>QUICKSIGHT</code> identity type. You can use this for any Amazon Quick users in your account (readers, authors, or admins) authenticated as one of the
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
   *                 <code>ANONYMOUS</code> because other identity types authenticate as Quick or IAM users. For example, if you set "<code>--dashboard-id
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
 * <p>A structure that contains information to identify a user.</p>
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
   * <p>The name of the user that you want to get identity context for.</p>
   * @public
   */
  export interface UserNameMember {
    UserName: string;
    Email?: never;
    UserArn?: never;
    $unknown?: never;
  }

  /**
   * <p>The email address of the user that you want to get identity context for.</p>
   * @public
   */
  export interface EmailMember {
    UserName?: never;
    Email: string;
    UserArn?: never;
    $unknown?: never;
  }

  /**
   * <p>The Amazon Resource Name (ARN) of the user that you want to get identity context for.</p>
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
 * <p>/////////////////////////
 * /////////////////////////</p>
 * @public
 */
export interface GetIdentityContextRequest {
  /**
   * <p>The ID for the Amazon Web Services account that the user whose identity context you want to retrieve is in. Currently, you use the ID for the Amazon Web Services account that contains your Quick Sight account.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The identifier for the user whose identity context you want to retrieve.</p>
   * @public
   */
  UserIdentifier: UserIdentifier | undefined;

  /**
   * <p>The namespace of the user that you want to get identity context for. This parameter is required when the UserIdentifier is specified using Email or UserName.</p>
   * @public
   */
  Namespace?: string | undefined;

  /**
   * <p>The timestamp at which the session will expire.</p>
   * @public
   */
  SessionExpiresAt?: Date | undefined;

  /**
   * <p>The region in which the context is to be used. Use this parameter to obtain an identity context for cross-region use.</p>
   *          <p>The specified region must meet the following conditions:</p>
   *          <ul>
   *             <li>
   *                <p>The region must be in the same Amazon Web Services partition as the region you are calling from. Cross-partition requests are not supported. For example, you cannot specify a region in the <code>aws-cn</code> partition when calling from a region in the <code>aws</code> partition.</p>
   *             </li>
   *             <li>
   *                <p>It must be a valid Amazon QuickSight supported region.</p>
   *             </li>
   *             <li>
   *                <p>The calling customer account must be enabled in the specified context region.</p>
   *             </li>
   *             <li>
   *                <p>This parameter is not supported when calling from an opt-in region.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ContextRegion?: string | undefined;
}

/**
 * @public
 */
export interface GetIdentityContextResponse {
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
   * <p>The identity context information for the user. This is an identity token that should be used as the ContextAssertion parameter in the <a href="https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html">STS AssumeRole API</a> call to obtain identity enhanced Amazon Web Services credentials.</p>
   * @public
   */
  Context?: string | undefined;
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
   * <p>The Amazon Quick user's Amazon Resource Name (ARN), for use with
   *                 <code>QUICKSIGHT</code> identity type. You can use this for any type of Amazon Quick users in your account (readers, authors, or admins). They need to be
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
   * <p>A single-use URL that you can put into your server-side web page to embed your Quick session. This URL is valid for 5 minutes. The API operation provides the
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
 * <p>A filter to apply when searching knowledge bases.</p>
 * @public
 */
export interface KnowledgeBaseSearchFilter {
  /**
   * <p>The name of the field to filter on.</p>
   * @public
   */
  name: KnowledgeBaseSearchFilterName | undefined;

  /**
   * <p>The comparison operator to use for the filter.</p>
   * @public
   */
  operator: KnowledgeBaseSearchOperator | undefined;

  /**
   * <p>The value to filter on.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>The sort configuration for searching knowledge bases.</p>
 * @public
 */
export interface KnowledgeBaseSortBy {
  /**
   * <p>The field to sort by.</p>
   * @public
   */
  sortByField: KnowledgeBaseSortByField | undefined;

  /**
   * <p>The sort order (ascending or descending).</p>
   * @public
   */
  sortOrder: SortOrder | undefined;
}

/**
 * <p>A summary of a knowledge base, including its identifier, name, status, and metadata.</p>
 * @public
 */
export interface KnowledgeBaseSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   * @public
   */
  KnowledgeBaseArn: string | undefined;

  /**
   * <p>The unique identifier for the knowledge base.</p>
   * @public
   */
  KnowledgeBaseId: string | undefined;

  /**
   * <p>The name of the knowledge base.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The status of the knowledge base.</p>
   * @public
   */
  Status: DataSetStatus | undefined;

  /**
   * <p>The ARN of the data source associated with the knowledge base.</p>
   * @public
   */
  DataSourceArn: string | undefined;

  /**
   * <p>The type of the knowledge base.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>The date and time that the knowledge base was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The date and time that the knowledge base was last updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>The size of the knowledge base in bytes.</p>
   * @public
   */
  KnowledgeBaseSizeBytes?: number | undefined;

  /**
   * <p>The number of documents in the knowledge base.</p>
   * @public
   */
  DocumentCount?: number | undefined;

  /**
   * <p>The ARN of the primary owner of the knowledge base.</p>
   * @public
   */
  PrimaryOwnerArn?: string | undefined;

  /**
   * <p>The username of the primary owner of the knowledge base.</p>
   * @public
   */
  PrimaryOwnerUsername?: string | undefined;
}

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
export interface ListAgentsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the agents.</p>
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
export interface ListAgentsResponse {
  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>A list of agent summaries.</p>
   * @public
   */
  AgentSummaries: AgentSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;
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
export interface ListKnowledgeBasesRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the knowledge base.</p>
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
export interface ListKnowledgeBasesResponse {
  /**
   * <p>A list of knowledge base summaries.</p>
   * @public
   */
  KnowledgeBaseSummaries: KnowledgeBaseSummary[] | undefined;

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
export interface ListOAuthClientApplicationsRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
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
 * <p>A summary of an OAuthClientApplication.</p>
 * @public
 */
export interface OAuthClientApplicationSummary {
  /**
   * <p>The ID of the OAuthClientApplication. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  OAuthClientApplicationId?: string | undefined;

  /**
   * <p>The display name of the OAuthClientApplication.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The OAuth client authentication type used by the OAuthClientApplication. Valid values are <code>TOKEN</code>.</p>
   * @public
   */
  OAuthClientAuthenticationType?: OAuthClientAuthenticationType | undefined;

  /**
   * <p>The type of data source that the OAuthClientApplication is used with. Valid values are <code>SNOWFLAKE</code>.</p>
   * @public
   */
  DataSourceType?: DataSourceType | undefined;

  /**
   * <p>VPC connection properties.</p>
   * @public
   */
  IdentityProviderVpcConnectionProperties?: VpcConnectionProperties | undefined;

  /**
   * <p>The time that the OAuthClientApplication was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The time that the OAuthClientApplication was last updated.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the OAuthClientApplication.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface ListOAuthClientApplicationsResponse {
  /**
   * <p>A list of OAuthClientApplication summaries.</p>
   * @public
   */
  OAuthClientApplications?: OAuthClientApplicationSummary[] | undefined;

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
export interface ListSelfUpgradesRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the self-upgrade requests.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The Quick namespace for the self-upgrade requests.</p>
   * @public
   */
  Namespace: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
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
 * <p>Details of a self-upgrade request.</p>
 * @public
 */
export interface SelfUpgradeRequestDetail {
  /**
   * <p>The ID of the self-upgrade request.</p>
   * @public
   */
  UpgradeRequestId?: string | undefined;

  /**
   * <p>The username of the user who initiated the self-upgrade request.</p>
   * @public
   */
  UserName?: string | undefined;

  /**
   * <p>The original role of the user before the upgrade.</p>
   * @public
   */
  OriginalRole?: UserRole | undefined;

  /**
   * <p>The role that the user is requesting to upgrade to.</p>
   * @public
   */
  RequestedRole?: UserRole | undefined;

  /**
   * <p>An optional note explaining the reason for the self-upgrade request.</p>
   * @public
   */
  RequestNote?: string | undefined;

  /**
   * <p>The time when the self-upgrade request was created.</p>
   * @public
   */
  CreationTime?: number | undefined;

  /**
   * <p>The status of the self-upgrade request.</p>
   * @public
   */
  RequestStatus?: SelfUpgradeRequestStatus | undefined;

  /**
   * <p>The time of the last update attempt for the self-upgrade request.</p>
   * @public
   */
  lastUpdateAttemptTime?: number | undefined;

  /**
   * <p>The reason for the last update failure, if applicable.</p>
   * @public
   */
  lastUpdateFailureReason?: string | undefined;
}

/**
 * @public
 */
export interface ListSelfUpgradesResponse {
  /**
   * <p>A list of self-upgrade request details.</p>
   * @public
   */
  SelfUpgradeRequestDetails?: SelfUpgradeRequestDetail[] | undefined;

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
export interface ListSpaceResourcesRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the space.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the space that you want to list resources for.</p>
   * @public
   */
  SpaceId: string | undefined;
}

/**
 * <p>A summary of a resource in a space.</p>
 * @public
 */
export interface SpaceResourceSummary {
  /**
   * <p>The type of the resource.</p>
   * @public
   */
  ResourceType: SpaceQuickSightResourceType | undefined;

  /**
   * <p>The details of the resource.</p>
   * @public
   */
  ResourceDetails: SpaceQuickSightResourceDetails | undefined;

  /**
   * <p>The name of the resource.</p>
   * @public
   */
  ResourceName?: string | undefined;

  /**
   * <p>The date and time that the resource was last updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListSpaceResourcesResponse {
  /**
   * <p>The ID of the space.</p>
   * @public
   */
  spaceId: string | undefined;

  /**
   * <p>The ARN of the space.</p>
   * @public
   */
  spaceArn?: string | undefined;

  /**
   * <p>A list of resource summaries in the space.</p>
   * @public
   */
  SpaceResources: SpaceResourceSummary[] | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface ListSpacesRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the spaces.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
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
 * <p>A summary of an Amazon QuickSight space.</p>
 * @public
 */
export interface SpaceSummary {
  /**
   * <p>The ID of the space.</p>
   * @public
   */
  spaceId: string | undefined;

  /**
   * <p>The ARN of the space.</p>
   * @public
   */
  spaceArn?: string | undefined;

  /**
   * <p>The display name of the space.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the space.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The date and time that the space was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The total consumed source size in bytes.</p>
   * @public
   */
  consumedSourceSize?: number | undefined;

  /**
   * <p>The number of consumed source documents.</p>
   * @public
   */
  consumedSourceDocCount?: number | undefined;

  /**
   * <p>The date and time that the space was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The user who created the space.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The ARN of the user who created the space.</p>
   * @public
   */
  createdByArn?: string | undefined;

  /**
   * <p>The number of resources in the space.</p>
   * @public
   */
  resourcesCount?: number | undefined;
}

/**
 * @public
 */
export interface ListSpacesResponse {
  /**
   * <p>The ID of the space.</p>
   * @public
   */
  spaceId: string | undefined;

  /**
   * <p>The ARN of the space.</p>
   * @public
   */
  spaceArn?: string | undefined;

  /**
   * <p>A list of space summaries.</p>
   * @public
   */
  SpaceSummaries: SpaceSummary[] | undefined;

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
 * <p>A filter that matches users by username or email prefix.</p>
 * @public
 */
export interface UserNameOrEmailFilter {
  /**
   * <p>The prefix to match against username or email (starts-with match).</p>
   * @public
   */
  prefix: string | undefined;
}

/**
 * <p>A filter for user index capacity queries. Only one filter type can be specified per request.</p>
 * @public
 */
export type UserIndexCapacityFilter =
  | UserIndexCapacityFilter.TotalCapacityBytesMember
  | UserIndexCapacityFilter.UserNameOrEmailMember
  | UserIndexCapacityFilter.$UnknownMember;

/**
 * @public
 */
export namespace UserIndexCapacityFilter {
  /**
   * <p>Filter users by username or email prefix.</p>
   * @public
   */
  export interface UserNameOrEmailMember {
    userNameOrEmail: UserNameOrEmailFilter;
    totalCapacityBytes?: never;
    $unknown?: never;
  }

  /**
   * <p>Filter users by total capacity range in bytes.</p>
   * @public
   */
  export interface TotalCapacityBytesMember {
    userNameOrEmail?: never;
    totalCapacityBytes: CapacityBytesRangeFilter;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    userNameOrEmail?: never;
    totalCapacityBytes?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    userNameOrEmail: (value: UserNameOrEmailFilter) => T;
    totalCapacityBytes: (value: CapacityBytesRangeFilter) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface ListUsersIndexCapacityRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the index capacity data.</p>
   * @public
   */
  awsAccountId: string | undefined;

  /**
   * <p>The namespace to scope the user search to. Required when the userNameOrEmail filter is present.</p>
   * @public
   */
  namespace?: string | undefined;

  /**
   * <p>Filters to apply. Only one filter is supported per request. The userNameOrEmail and totalCapacityBytes filters are mutually exclusive.</p>
   * @public
   */
  filters?: UserIndexCapacityFilter[] | undefined;

  /**
   * <p>The field to sort results by.</p>
   * @public
   */
  sortBy?: UserIndexCapacitySortBy | undefined;

  /**
   * <p>The sort order for results. Defaults to DESC if not specified.</p>
   * @public
   */
  sortOrder?: UserIndexCapacitySortOrder | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next set of results, received from a previous call.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>A summary of a user's index capacity consumption.</p>
 * @public
 */
export interface UserIndexCapacity {
  /**
   * <p>The ARN of the user.</p>
   * @public
   */
  userArn?: string | undefined;

  /**
   * <p>The username of the user.</p>
   * @public
   */
  userName?: string | undefined;

  /**
   * <p>The email address of the user.</p>
   * @public
   */
  email?: string | undefined;

  /**
   * <p>The role of the user.</p>
   * @public
   */
  role?: string | undefined;

  /**
   * <p>The total index capacity consumed by the user in bytes.</p>
   * @public
   */
  totalCapacityBytes?: number | undefined;

  /**
   * <p>The total index capacity consumed by the user's knowledge bases in bytes.</p>
   * @public
   */
  totalKBCapacityBytes?: number | undefined;

  /**
   * <p>The total index capacity consumed by the user's spaces in bytes.</p>
   * @public
   */
  totalSpaceCapacityBytes?: number | undefined;

  /**
   * <p>The number of knowledge bases owned by the user.</p>
   * @public
   */
  kbCount?: number | undefined;

  /**
   * <p>The number of spaces owned by the user.</p>
   * @public
   */
  spaceCount?: number | undefined;
}

/**
 * @public
 */
export interface ListUsersIndexCapacityResponse {
  /**
   * <p>The list of users with their index capacity metrics.</p>
   * @public
   */
  users?: UserIndexCapacity[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  requestId?: string | undefined;
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
export interface SearchAgentsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the agents.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The filters to apply when searching agents.</p>
   * @public
   */
  Filters: AgentSearchFilter[] | undefined;

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
export interface SearchAgentsResponse {
  /**
   * <p>A list of agent summaries.</p>
   * @public
   */
  AgentSummaries?: AgentSummary[] | undefined;

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
 */
export interface SearchKnowledgeBasesRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the knowledge base.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The filters to apply when searching knowledge bases.</p>
   * @public
   */
  Filters?: KnowledgeBaseSearchFilter[] | undefined;

  /**
   * <p>The sort configuration for the search results.</p>
   * @public
   */
  SortBy?: KnowledgeBaseSortBy | undefined;
}

/**
 * @public
 */
export interface SearchKnowledgeBasesResponse {
  /**
   * <p>A list of knowledge base summaries.</p>
   * @public
   */
  KnowledgeBaseSummaries: KnowledgeBaseSummary[] | undefined;

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
 * <p>A filter to use when searching for spaces.</p>
 * @public
 */
export interface SpaceQuicksightSearchFilter {
  /**
   * <p>The name of the filter field to use.</p>
   * @public
   */
  name: SpaceQuickSightSearchFilterName | undefined;

  /**
   * <p>The comparison operator to use for the filter.</p>
   * @public
   */
  operator: SpaceSearchOperator | undefined;

  /**
   * <p>The value to use for the filter.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface SearchSpacesRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the spaces.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The filters to apply to the search.</p>
   * @public
   */
  Filters: SpaceQuicksightSearchFilter[] | undefined;
}

/**
 * @public
 */
export interface SearchSpacesResponse {
  /**
   * <p>The ID of the space.</p>
   * @public
   */
  spaceId: string | undefined;

  /**
   * <p>The ARN of the space.</p>
   * @public
   */
  spaceArn?: string | undefined;

  /**
   * <p>A list of space summaries that match the search criteria.</p>
   * @public
   */
  SpaceSummaries: SpaceSummary[] | undefined;

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
 * @public
 */
export interface StartAutomationJobRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the automation.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the automation group that contains the automation to run.</p>
   * @public
   */
  AutomationGroupId: string | undefined;

  /**
   * <p>The ID of the automation to run.</p>
   * @public
   */
  AutomationId: string | undefined;

  /**
   * <p>The input payload for the automation job, provided as a JSON string.</p>
   * @public
   */
  InputPayload?: string | undefined;
}

/**
 * @public
 */
export interface StartAutomationJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the automation job.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The ID of the automation job that was started.</p>
   * @public
   */
  JobId: string | undefined;

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
