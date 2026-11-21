// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  AccessControlApplicationStatus,
  AgentStatus,
  AppVisibility,
  AssetBundleExportFormat,
  AssetBundleImportFailureAction,
  AssetType,
  AssignmentStatus,
  DashboardsQAStatus,
  DataSetImportMode,
  DataSetStatus,
  DataSourceType,
  DlpAction,
  DlpProviderType,
  FieldName,
  FilterOperator,
  GovernedAction,
  IdentityType,
  InboundConnectorStatus,
  InboundConnectorType,
  IncludeFolderMembers,
  IncludeGeneratedAnswer,
  IncludeQuickSightQIndex,
  KnowledgeBaseSearchFilterName,
  KnowledgeBaseSearchOperator,
  KnowledgeBaseSortByField,
  OAuthClientAuthenticationType,
  PersonalizationMode,
  PrincipalType,
  PurchaseMode,
  QAResultType,
  QSearchStatus,
  ResourceStatus,
  ResourceType,
  Role,
  ScheduleState,
  SearchAppsFilterName,
  SearchFilterOperator,
  SelfUpgradeAdminAction,
  SelfUpgradeRequestStatus,
  SelfUpgradeStatus,
  ServiceRoleType,
  ServiceType,
  SortOrder,
  SpaceQuickSightResourceType,
  SpaceQuickSightSearchFilterName,
  SpaceSearchOperator,
  ThemeType,
  TopicFilterAttribute,
  TopicFilterOperator,
  TopicUserExperienceVersion,
  UserIndexCapacitySortBy,
  UserIndexCapacitySortOrder,
  UserRole,
  VPCConnectionAvailabilityStatus,
  VPCConnectionResourceStatus,
} from "./enums";
import type {
  AccessControlApplicationSummary,
  AccessControlConfiguration,
  AccountCustomization,
  ActionConnectorSearchFilter,
  ActionConnectorSummary,
  ActiveIAMPolicyAssignment,
  AgentSearchFilter,
  AgentSummary,
} from "./models_0";
import type {
  AnalysisSearchFilter,
  AnalysisSummary,
  ApplicableTo,
  ApprovalPolicy,
  AppSummary,
  AssetBundleCloudFormationOverridePropertyConfiguration,
  AssetBundleExportJobSummary,
  AssetBundleExportJobValidationStrategy,
  AssetBundleImportJobOverrideParameters,
  AssetBundleImportJobOverridePermissions,
  AssetBundleImportJobOverrideTags,
  AssetBundleImportJobOverrideValidationStrategy,
  AssetBundleImportJobSummary,
  AssetBundleImportSource,
  AuthConfig,
  AuthorizedTargetsByService,
  BrandDefinition,
  BrandDetail,
  BrandSummary,
  Capabilities,
  CapacityBytesRangeFilter,
  ColumnGroup,
  ColumnLevelPermissionRule,
  DataSetRefreshProperties,
  DataSourceParameters,
  QuickAuthenticationConfigInput,
  ResourcePermission,
  SslProperties,
  Tag,
  VpcConnectionProperties,
} from "./models_2";
import type {
  CustomPermissions,
  CustomPromptInput,
  DashboardSearchFilter,
  DashboardSummary,
  DashboardVersionSummary,
  DashboardVisualResult,
  DataPrepConfiguration,
  DatasetParameter,
  DataSetSearchFilter,
  DataSetSummary,
  DataSetUsageConfiguration,
  DataSource,
  DataSourceCredentials,
  DataSourceSearchFilter,
  DataSourceSummary,
  FieldFolder,
  Governance,
  Group,
  GroupMember,
  InboundConnectorConfig,
  KnowledgeBaseConfiguration,
  KnowledgeBaseRefreshFrequency,
  LinkSharingConfiguration,
  LogicalTable,
  MediaExtractionConfiguration,
  PerformanceConfiguration,
  Permission,
  PhysicalTable,
  ProfileLimitValue,
  ProviderConfig,
  RefreshSchedule,
  RowLevelPermissionDataSet,
  RowLevelPermissionTagConfiguration,
  SemanticModelConfiguration,
  TemplateAlias,
  ThemeAlias,
  TopicRefreshSchedule,
  UnmaterializedCalculatedColumn,
} from "./models_3";
import type {
  DlpSettingSummary,
  FailedKeyRegistrationEntry,
  FailedSpaceResourceOperation,
  FailedToUpdateAssociation,
  FlowSummary,
  FolderSearchFilter,
  FolderSummary,
  GeneratedAnswerResult,
  GroupSearchFilter,
  IAMPolicyAssignmentSummary,
  IdpAuthorizingConfigUpdateInput,
  InboundConnectorApplicationAssociationSummary,
  Ingestion,
  KnowledgeBaseRefreshScheduleSummary,
  LimitsProfile,
  MemberIdArnPair,
  NamespaceInfoV2,
  NetworkInterface,
  RegisteredCustomerManagedKey,
  SessionTag,
  SnapshotConfiguration,
  SpaceQuickSightResourceDetails,
  User,
} from "./models_4";

/**
 * <p>A summary of an inbound connector, including its ID, ARN, name, status, tenant URL, configuration, and timestamps.</p>
 * @public
 */
export interface InboundConnectorSummary {
  /**
   * <p>The ID of the inbound connector.</p>
   * @public
   */
  InboundConnectorId: string | undefined;

  /**
   * <p>The ARN of the inbound connector.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name of the inbound connector.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The status of the inbound connector.</p>
   * @public
   */
  Status: InboundConnectorStatus | undefined;

  /**
   * <p>The time when the inbound connector was created.</p>
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * <p>The time when the inbound connector was last updated.</p>
   * @public
   */
  LastUpdatedTime: Date | undefined;

  /**
   * <p>The endpoint URL that clients use to reach Quick Sight through the inbound connector.</p>
   * @public
   */
  TenantUrl: string | undefined;

  /**
   * <p>The configuration of the inbound connector.</p>
   * @public
   */
  InboundConnectorConfiguration: InboundConnectorConfig | undefined;

  /**
   * <p>The description of the inbound connector.</p>
   * @public
   */
  Description?: string | undefined;
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
export interface ListAccessControlApplicationsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the Quick Sight account.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace to filter by. If you don't specify a namespace, access control applications in all namespaces are returned.</p>
   * @public
   */
  Namespace?: string | undefined;

  /**
   * <p>The maximum number of results to return. The default is 100.</p>
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
export interface ListAccessControlApplicationsResponse {
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
   * <p>A list of access control application summaries.</p>
   * @public
   */
  AccessControlApplications: AccessControlApplicationSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;
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
export interface ListApprovalPoliciesRequest {
  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. If you don't specify a value, the
   *          service returns a default number of results. Use the <code>NextToken</code> value in the response
   *          to retrieve additional results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListApprovalPoliciesResponse {
  /**
   * <p>The list of approval policies.</p>
   * @public
   */
  Policies: ApprovalPolicy[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAppsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the apps.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The maximum number of results to return in a single request. Valid range is 1 to 100. If you don't specify a value, the default is 20.</p>
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
export interface ListAppsResponse {
  /**
   * <p>A list of app summaries.</p>
   * @public
   */
  AppSummaryList: AppSummary[] | undefined;

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
export interface ListDlpSettingsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the DLP settings that you want to list.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDlpSettingsResponse {
  /**
   * <p>A list of <code>DlpSettingSummary</code> objects for the DLP settings in the account. The list is empty if no DLP settings have been configured.</p>
   * @public
   */
  DlpSettingSummaries: DlpSettingSummary[] | undefined;

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
export interface ListInboundConnectorApplicationAssociationsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the Quick Sight account.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the inbound connector.</p>
   * @public
   */
  InboundConnectorId: string | undefined;

  /**
   * <p>The maximum number of results to return. The default is 100.</p>
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
export interface ListInboundConnectorApplicationAssociationsResponse {
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
   * <p>A list of the access control applications that are associated with the inbound connector.</p>
   * @public
   */
  ApplicationAssociations: InboundConnectorApplicationAssociationSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInboundConnectorsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the Quick Sight account.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The maximum number of results to return. The default is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The inbound connector type to filter by.</p>
   * @public
   */
  Type?: InboundConnectorType[] | undefined;
}

/**
 * @public
 */
export interface ListInboundConnectorsResponse {
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
   * <p>A list of inbound connector summaries.</p>
   * @public
   */
  InboundConnectorSummaries: InboundConnectorSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;
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
export interface ListKnowledgeBaseRefreshSchedulesRequest {
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

  /**
   * <p>The token for the next set of results. If you don't specify a value, the request returns the first page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single page. Valid values are 1 through 100. If you don't specify a value, the default is 25.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListKnowledgeBaseRefreshSchedulesResponse {
  /**
   * <p>A list of refresh schedules for the knowledge base.</p>
   * @public
   */
  ScheduleSummaries: KnowledgeBaseRefreshScheduleSummary[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the knowledge base that the schedules apply to.</p>
   * @public
   */
  KnowledgeBaseArn: string | undefined;

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
export interface ListLimitsProfilesRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the limits profiles.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>An optional filter that limits the results to profiles that contain the specified resource type. If you don't specify a value, the operation returns all profiles.</p>
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * <p>The maximum number of results to return in a single call. If you don't specify a value, the service uses the default maximum.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLimitsProfilesResponse {
  /**
   * <p>A list of limits profiles.</p>
   * @public
   */
  profiles: LimitsProfile[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  nextToken?: string | undefined;
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
export interface ListPrincipalsForPolicyRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the policy.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The ARN of the policy.</p>
   * @public
   */
  PolicyArn: string | undefined;

  /**
   * <p>An optional filter that limits the results to principals of the specified type. If you don't specify
   *          a value, the operation returns principals of all types. You can specify one of the following
   *          values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>USER</code> – An Amazon Quick Sight user.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GROUP</code> – An Amazon Quick Sight group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACCOUNT</code> – The Amazon Quick Sight account.</p>
   *             </li>
   *          </ul>
   * @public
   */
  PrincipalType?: PrincipalType | undefined;

  /**
   * <p>The maximum number of results to return in a single call. Valid range is 1–100. If you don't specify
   *          a value, the operation returns up to 100 results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token returned by a previous call. Use it to get the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A principal that a governance policy is assigned to.</p>
 * @public
 */
export interface PolicyPrincipal {
  /**
   * <p>The ARN of the user, group, or account.</p>
   * @public
   */
  PrincipalArn: string | undefined;

  /**
   * <p>The type of the principal.</p>
   * @public
   */
  PrincipalType?: PrincipalType | undefined;

  /**
   * <p>The date and time that the assignment was last updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>The current revision of the assignment.</p>
   * @public
   */
  Revision?: number | undefined;
}

/**
 * @public
 */
export interface ListPrincipalsForPolicyResponse {
  /**
   * <p>A list of principals that the policy is assigned to.</p>
   * @public
   */
  Principals: PolicyPrincipal[] | undefined;

  /**
   * <p>The token for the next page of results. This value is absent if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;
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
export interface ListTopicsV2Request {
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
 * <p>A summary of the topic.</p>
 * @public
 */
export interface TopicV2Summary {
  /**
   * <p>The Amazon Resource Name (ARN) of the topic.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID of the topic. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  TopicId?: string | undefined;

  /**
   * <p>The name of the topic.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface ListTopicsV2Response {
  /**
   * <p>A list of topic summaries.</p>
   * @public
   */
  TopicSummaryList?: TopicV2Summary[] | undefined;

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
export interface PutPolicyAssignmentRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the policy and the principal.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the policy to assign.</p>
   * @public
   */
  PolicyArn: string | undefined;

  /**
   * <p>The ARN of the user, group, or account to assign the policy to.</p>
   * @public
   */
  PrincipalArn: string | undefined;

  /**
   * <p>The ARN of the policy that you expect the principal to have before this request. If the principal has
   *          a different policy of the same type, or no policy of that type, the request fails with a
   *          <code>ConflictException</code> and makes no change. If you don't specify a value, the operation doesn't
   *          check the existing assignment.</p>
   * @public
   */
  ExistingPolicyArn?: string | undefined;

  /**
   * <p>The revision of the assignment from your most recent read. If the assignment has changed since that
   *          revision, the request fails with a <code>ConflictException</code>. If you don't specify a value, the
   *          operation doesn't check the revision.</p>
   * @public
   */
  Revision?: number | undefined;
}

/**
 * @public
 */
export interface PutPolicyAssignmentResponse {
  /**
   * <p>The ARN of the policy that is now assigned to the principal.</p>
   * @public
   */
  PolicyArn: string | undefined;

  /**
   * <p>The ARN of the policy that this request replaced. This value is absent if the principal had no policy
   *          of this type before the request.</p>
   * @public
   */
  ReplacedPolicyArn?: string | undefined;

  /**
   * <p>The revision of the assignment after this request. Use this value in later requests to detect
   *          concurrent changes.</p>
   * @public
   */
  Revision: number | undefined;
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
 * <p>A filter to apply when searching for apps.</p>
 * @public
 */
export interface SearchAppsFilter {
  /**
   * <p>The name of the filter attribute.</p>
   * @public
   */
  Name: SearchAppsFilterName | undefined;

  /**
   * <p>The comparison operator for the filter.</p>
   * @public
   */
  Operator: FilterOperator | undefined;

  /**
   * <p>The value to filter on.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface SearchAppsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the apps to search.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The filters to apply to the search.</p>
   * @public
   */
  Filters: SearchAppsFilter[] | undefined;

  /**
   * <p>The maximum number of results to return in a single request. Valid range is 1 to 100. If you don't specify a value, the default is 20.</p>
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
export interface SearchAppsResponse {
  /**
   * <p>A list of app summaries that match the search criteria.</p>
   * @public
   */
  AppSummaryList: AppSummary[] | undefined;

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
export interface SearchTopicsV2Request {
  /**
   * <p>The ID of the Amazon Web Services account that contains the topic that you want to
   *          search.</p>
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
export interface SearchTopicsV2Response {
  /**
   * <p>A list of topic summaries that is returned by the search topic request.</p>
   * @public
   */
  TopicSummaryList?: TopicV2Summary[] | undefined;

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

/**
 * <p>A structure that contains information on the anonymous user configuration.</p>
 * @public
 */
export interface SnapshotAnonymousUser {
  /**
   * <p>The tags to be used for row-level security (RLS). Make sure that the relevant datasets have RLS tags configured before you start a snapshot export job. You can configure the RLS tags of a dataset with a <code>DataSet$RowLevelPermissionTagConfiguration</code> API call.</p>
   *          <p>These are not the tags that are used for Amazon Web Services resource tagging. For more information on row level security in Amazon Quick Sight, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/quicksight-dev-rls-tags.html">Using Row-Level Security (RLS) with Tags</a>in the <i>Quick User Guide</i>.</p>
   * @public
   */
  RowLevelPermissionTags?: SessionTag[] | undefined;
}

/**
 * <p>A structure that contains information about the users that the dashboard snapshot is generated for.</p>
 *          <important>
 *             <p>When using identity-enhanced session credentials, set the UserConfiguration request attribute to null. Otherwise, the request will be invalid.</p>
 *          </important>
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
   * <p>A structure that contains information about the users that the dashboard snapshot is generated for. The users can be either anonymous users or registered users. Anonymous users cannot be used together with registered users.</p>
   *          <important>
   *             <p>When using identity-enhanced session credentials, set the UserConfiguration request attribute to null. Otherwise, the request will be invalid.</p>
   *          </important>
   * @public
   */
  UserConfiguration?: SnapshotUserConfiguration | undefined;

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
export interface UpdateAccessControlApplicationRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the Quick Sight account.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the access control application.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The new name of the access control application.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The new description of the access control application.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The identity provider settings to update, such as the client ID and issuer URL. You can't change the <code>IdpAuthorizingType</code> or the trusted token issuer. To manage client secrets, use the client secret operations.</p>
   * @public
   */
  IdpAuthorizingConfiguration?: IdpAuthorizingConfigUpdateInput | undefined;

  /**
   * <p>The Quick Sight authentication settings to update, such as redirect URIs. You can't change the <code>QuickAuthenticationType</code>.</p>
   * @public
   */
  QuickAuthenticationConfiguration?: QuickAuthenticationConfigInput | undefined;

  /**
   * <p>The new status of the access control application.</p>
   * @public
   */
  Status?: AccessControlApplicationStatus | undefined;
}

/**
 * @public
 */
export interface UpdateAccessControlApplicationResponse {
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
   * <p>The ID of the access control application.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The ARN of the access control application.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The status of the access control application.</p>
   * @public
   */
  AccessControlApplicationStatus: AccessControlApplicationStatus | undefined;

  /**
   * <p>The time when the access control application was last updated.</p>
   * @public
   */
  LastUpdatedTime: Date | undefined;
}

/**
 * @public
 */
export interface UpdateAccessControlApplicationSecretRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the Quick Sight account.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the access control application.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The ID of the client secret.</p>
   * @public
   */
  ClientSecretId: string | undefined;

  /**
   * <p>The Region ARNs to add or replace. The Region in each ARN must match its key.</p>
   * @public
   */
  UpdateRegionalSecretManagerArns?: Record<string, string> | undefined;

  /**
   * <p>The Regions whose ARNs to remove. You can't remove the last remaining Region. To remove it, delete the client secret instead.</p>
   * @public
   */
  RemoveRegionalSecretManagerArns?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateAccessControlApplicationSecretResponse {
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
   * <p>The ID of the client secret.</p>
   * @public
   */
  ClientSecretId: string | undefined;

  /**
   * <p>The time when the client secret was updated.</p>
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * <p>The Region ARNs of the client secret after the update.</p>
   * @public
   */
  RegionalSecretManagerArns: Record<string, string> | undefined;
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
export interface UpdateAgentRequest {
  /**
   * <p>The unique identifier for the agent to update.</p>
   * @public
   */
  AgentId: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that contains the agent.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The name of the agent.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A description of the agent.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The icon identifier for the agent.</p>
   * @public
   */
  IconId?: string | undefined;

  /**
   * <p>A list of starter prompts that are displayed to users when they begin interacting with the agent.</p>
   * @public
   */
  StarterPrompts?: string[] | undefined;

  /**
   * <p>The welcome message that is displayed when a user starts a conversation with the agent.</p>
   * @public
   */
  WelcomeMessage?: string | undefined;

  /**
   * <p>The custom prompt configuration for the agent.</p>
   * @public
   */
  CustomPromptInput?: CustomPromptInput | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the spaces to attach to the agent.</p>
   * @public
   */
  SpacesToAdd?: string[] | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the spaces to detach from the agent.</p>
   * @public
   */
  SpacesToRemove?: string[] | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the action connectors to attach to the agent.</p>
   * @public
   */
  ActionConnectorsToAdd?: string[] | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the action connectors to detach from the agent.</p>
   * @public
   */
  ActionConnectorsToRemove?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateAgentResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the agent.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The unique identifier for the agent.</p>
   * @public
   */
  AgentId: string | undefined;

  /**
   * <p>The status of the agent.</p>
   * @public
   */
  AgentStatus: AgentStatus | undefined;

  /**
   * <p>A list of per-ARN failures from the spaces that were requested to be added.</p>
   * @public
   */
  FailedToAddSpaces?: FailedToUpdateAssociation[] | undefined;

  /**
   * <p>A list of per-ARN failures from the spaces that were requested to be removed.</p>
   * @public
   */
  FailedToRemoveSpaces?: FailedToUpdateAssociation[] | undefined;

  /**
   * <p>A list of per-ARN failures from the action connectors that were requested to be added.</p>
   * @public
   */
  FailedToAddActionConnectors?: FailedToUpdateAssociation[] | undefined;

  /**
   * <p>A list of per-ARN failures from the action connectors that were requested to be removed.</p>
   * @public
   */
  FailedToRemoveActionConnectors?: FailedToUpdateAssociation[] | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAgentPermissionsRequest {
  /**
   * <p>The unique identifier for the agent.</p>
   * @public
   */
  AgentId: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that contains the agent.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The resource permissions that you want to grant on the agent.</p>
   * @public
   */
  GrantPermissions?: ResourcePermission[] | undefined;

  /**
   * <p>The resource permissions that you want to revoke from the agent.</p>
   * @public
   */
  RevokePermissions?: ResourcePermission[] | undefined;
}

/**
 * @public
 */
export interface UpdateAgentPermissionsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the agent.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The unique identifier for the agent.</p>
   * @public
   */
  AgentId: string | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>The resource permissions for the agent.</p>
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;
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
   * <p>The namespace of the Quick application.</p>
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
export interface UpdateAppPermissionsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the app.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the app.</p>
   * @public
   */
  AppId: string | undefined;

  /**
   * <p>The permissions that you want to grant on the app.</p>
   * @public
   */
  GrantPermissions?: ResourcePermission[] | undefined;

  /**
   * <p>The permissions that you want to revoke from the app.</p>
   * @public
   */
  RevokePermissions?: ResourcePermission[] | undefined;

  /**
   * <p>The visibility to set for the app. Currently, only <code>PRIVATE</code> is accepted, which removes public (anonymous) access from the app. If you don't specify a value, the app's visibility is unchanged. Setting an app to <code>PUBLIC</code> through this operation is not supported.</p>
   * @public
   */
  Visibility?: AppVisibility | undefined;
}

/**
 * @public
 */
export interface UpdateAppPermissionsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the app.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID of the app.</p>
   * @public
   */
  AppId?: string | undefined;

  /**
   * <p>The updated resource permissions for the app.</p>
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;

  /**
   * <p>The visibility of the app after the update (<code>PRIVATE</code> or <code>PUBLIC</code>).</p>
   * @public
   */
  Visibility?: AppVisibility | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateApprovalPolicyRequest {
  /**
   * <p>The unique identifier of the approval policy to update.</p>
   * @public
   */
  PolicyId: string | undefined;

  /**
   * <p>The name of the approval policy.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A description of the approval policy.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The list of governed actions that trigger the approval workflow.</p>
   * @public
   */
  Actions?: GovernedAction[] | undefined;

  /**
   * <p>The list of asset types that the approval policy applies to.</p>
   * @public
   */
  AssetTypes?: AssetType[] | undefined;

  /**
   * <p>The scoping configuration that determines who the approval policy applies to.</p>
   * @public
   */
  ApplicableTo?: ApplicableTo | undefined;

  /**
   * <p>The list of group ARNs whose members can approve requests.</p>
   * @public
   */
  ApprovalGroups?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateApprovalPolicyResponse {
  /**
   * <p>The updated approval policy.</p>
   * @public
   */
  Policy: ApprovalPolicy | undefined;
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
   * <p>The ID of the Quick brand.</p>
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
   * <p>The ID of the Quick brand.</p>
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

  /**
   * <p>The governance configuration for the custom permissions profile. The <code>UpdateCustomPermissions</code> operation replaces all existing <code>Capabilities</code> and <code>Governance</code> values. If you omit this parameter, Amazon Quick removes governance from the profile and the existing custom permission behavior applies.</p>
   * @public
   */
  Governance?: Governance | undefined;
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
   * @deprecated (since 2025-10-23) Only used in the legacy data preparation experience.
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
   * @deprecated (since 2025-10-23) Only used in the legacy data preparation experience.
   * @public
   */
  RowLevelPermissionDataSet?: RowLevelPermissionDataSet | undefined;

  /**
   * <p>The configuration of tags on a dataset to set row-level security. Row-level security
   * 			tags are currently supported for anonymous embedding only. This parameter is used with
   * 		the legacy data preparation experience.</p>
   *
   * @deprecated (since 2025-10-23) Only used in the legacy data preparation experience.
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

  /**
   * <p>A list of unmaterialized calculated columns for the dataset. These columns are computed
   * 			at analysis time and are not stored in the prepared data.
   * 			You can only use this with the new data preparation experience.</p>
   * @public
   */
  UnmaterializedCalculatedColumns?: UnmaterializedCalculatedColumn[] | undefined;
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
export interface UpdateDlpSettingRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the DLP setting that you want to update.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the DLP setting that you want to update.</p>
   * @public
   */
  DlpSettingId: string | undefined;

  /**
   * <p>An updated display name for the DLP setting.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>An updated DLP provider type. Currently, the only supported value is <code>MICROSOFT_PURVIEW</code>.</p>
   * @public
   */
  ProviderType?: DlpProviderType | undefined;

  /**
   * <p>An updated provider-specific configuration for the DLP integration. This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
   * @public
   */
  ProviderConfig?: ProviderConfig | undefined;

  /**
   * <p>An updated behavior to apply when the DLP provider is unreachable. Valid values are <code>ALLOW</code>, <code>WARN</code>, and <code>BLOCK</code>.</p>
   * @public
   */
  ProviderOutageAction?: DlpAction | undefined;

  /**
   * <p>Specifies whether DLP enforcement is active for this setting. Set to <code>true</code> to enable enforcement, or <code>false</code> to disable it.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateDlpSettingResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated DLP setting.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The ID of the updated DLP setting.</p>
   * @public
   */
  DlpSettingId: string | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFlowRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the flow that you are updating.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The unique identifier of the flow to update.</p>
   * @public
   */
  FlowId: string | undefined;

  /**
   * <p>Updated display name for the flow. Omit to preserve the existing name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Updated description for the flow. Omit to preserve the existing description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The definition of the flow, specifying the steps and configurations. This is the flow definition in Quick Flow's internal format. The format is subject to change. When provided, all existing steps are replaced. Omit to preserve the existing definition.</p>
   *          <note>
   *             <p>Always derive or depend on the flow definition from the <code>DescribeFlow</code> operation to ensure you are working with the latest format.</p>
   *          </note>
   * @public
   */
  FlowDefinition?: __DocumentType | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFlowResponse {
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
export interface UpdateInboundConnectorRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the Quick Sight account.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the inbound connector.</p>
   * @public
   */
  InboundConnectorId: string | undefined;

  /**
   * <p>The new name of the inbound connector.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The new description of the inbound connector.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The new configuration of the inbound connector. You can't change the <code>InboundConnectorType</code>.</p>
   * @public
   */
  InboundConnectorConfiguration?: InboundConnectorConfig | undefined;

  /**
   * <p>The new status of the inbound connector.</p>
   * @public
   */
  InboundConnectorStatus?: InboundConnectorStatus | undefined;
}

/**
 * @public
 */
export interface UpdateInboundConnectorResponse {
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
   * <p>The ID of the inbound connector.</p>
   * @public
   */
  InboundConnectorId: string | undefined;

  /**
   * <p>The ARN of the inbound connector.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The status of the inbound connector.</p>
   * @public
   */
  InboundConnectorStatus: InboundConnectorStatus | undefined;

  /**
   * <p>The time when the inbound connector was last updated.</p>
   * @public
   */
  LastUpdatedTime: Date | undefined;
}

/**
 * @public
 */
export interface UpdateInboundConnectorApplicationAssociationsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the Quick Sight account.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the inbound connector.</p>
   * @public
   */
  InboundConnectorId: string | undefined;

  /**
   * <p>The ARNs of up to 20 access control applications to associate with the inbound connector. ARNs that are already associated are ignored.</p>
   * @public
   */
  AssociateAccessControlApplications?: string[] | undefined;

  /**
   * <p>The ARNs of up to 20 access control applications to disassociate from the inbound connector. ARNs that aren't associated are ignored.</p>
   * @public
   */
  DisassociateAccessControlApplications?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateInboundConnectorApplicationAssociationsResponse {
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
export interface UpdateKnowledgeBaseRequest {
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

  /**
   * <p>The name of the knowledge base. If you don't specify a name, the existing name is retained.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A description for the knowledge base. If you don't specify a description, the existing description is retained.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The configuration settings for a knowledge base.</p>
   * @public
   */
  KnowledgeBaseConfiguration?: KnowledgeBaseConfiguration | undefined;

  /**
   * <p>The configuration for media extraction from knowledge base documents.</p>
   * @public
   */
  MediaExtractionConfiguration?: MediaExtractionConfiguration | undefined;

  /**
   * <p>Specifies whether email notifications are enabled for ingestion failures.</p>
   * @public
   */
  IsEmailNotificationOptedForIngestionFailures?: boolean | undefined;

  /**
   * <p>The access control configuration for the knowledge base. If you don't specify this parameter, the existing setting is retained.</p>
   * @public
   */
  AccessControlConfiguration?: AccessControlConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateKnowledgeBaseResponse {
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
export interface UpdateKnowledgeBasePermissionsRequest {
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

  /**
   * <p>The resource permissions that you want to grant on the knowledge base.</p>
   * @public
   */
  GrantPermissions?: ResourcePermission[] | undefined;

  /**
   * <p>The resource permissions that you want to revoke from the knowledge base.</p>
   * @public
   */
  RevokePermissions?: ResourcePermission[] | undefined;
}

/**
 * @public
 */
export interface UpdateKnowledgeBasePermissionsResponse {
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
export interface UpdateKnowledgeBaseRefreshScheduleRequest {
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

  /**
   * <p>The unique identifier for the refresh schedule to update.</p>
   * @public
   */
  ScheduleId: string | undefined;

  /**
   * <p>The frequency configuration for the refresh schedule. The frequency configuration specifies how often the schedule runs and, for weekly or monthly schedules, the day on which it runs. If you don't specify this parameter, the schedule keeps its existing frequency.</p>
   * @public
   */
  ScheduleFrequency?: KnowledgeBaseRefreshFrequency | undefined;

  /**
   * <p>The date and time, in ISO 8601 format, after which the schedule can start refreshing the knowledge base. The first refresh runs at the next scheduled time after this date and time. If you don't specify this parameter, the schedule keeps its existing start time.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The state of the refresh schedule. A schedule that isn't <code>ENABLED</code> doesn't run refreshes. If you don't specify this parameter, the schedule keeps its existing state.</p>
   * @public
   */
  State?: ScheduleState | undefined;
}

/**
 * @public
 */
export interface UpdateKnowledgeBaseRefreshScheduleResponse {
  /**
   * <p>The unique identifier for the refresh schedule.</p>
   * @public
   */
  ScheduleId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the knowledge base that the schedule applies to.</p>
   * @public
   */
  KnowledgeBaseArn: string | undefined;

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
export interface UpdateLimitsProfileRequest {
  /**
   * <p>The unique identifier for the limits profile to update.</p>
   * @public
   */
  profileId: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that contains the limits profile.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>A new display name for the limits profile.</p>
   * @public
   */
  profileName?: string | undefined;

  /**
   * <p>A new description for the limits profile.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A map of resource types to their updated limit values.</p>
   * @public
   */
  resourceLimits?: Partial<Record<ResourceType, ProfileLimitValue>> | undefined;
}

/**
 * @public
 */
export interface UpdateLimitsProfileResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated limits profile.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface UpdateOAuthClientApplicationRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the OAuthClientApplication that you want to update.</p>
   * @public
   */
  OAuthClientApplicationId: string | undefined;

  /**
   * <p>The display name for the OAuthClientApplication.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The client ID of the OAuth application that is registered with the identity provider.</p>
   * @public
   */
  ClientId?: string | undefined;

  /**
   * <p>The client secret of the OAuth application that is registered with the identity provider.</p>
   * @public
   */
  ClientSecret?: string | undefined;

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
}

/**
 * @public
 */
export interface UpdateOAuthClientApplicationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the OAuthClientApplication.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID of the OAuthClientApplication. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  OAuthClientApplicationId?: string | undefined;

  /**
   * <p>The status of updating the OAuthClientApplication.</p>
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
export interface UpdatePublicSharingSettingsRequest {
  /**
   * <p>The Amazon Web Services account ID associated with your Amazon Quick Sight
   *             subscription.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>A Boolean value that indicates whether public sharing is turned on for an Quick account.</p>
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
export interface UpdateResourcePermissionsRequest {
  /**
   * <p>The ID of the Amazon Web Services account whose service role configuration you want to
   *             update.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The type of service role that you want Amazon Quick Sight to use. The only supported value for this
   *             operation is <code>CUSTOMER_MANAGED</code>. Requests that specify
   *             <code>QUICKSIGHT_MANAGED</code> are rejected.</p>
   * @public
   */
  RoleType: ServiceRoleType | undefined;

  /**
   * <p>The ARN of the customer-managed role that you want Amazon Quick Sight to use. To use this
   *             operation, you must have the
   *             <code>iam:PassRole</code> permission for the role.</p>
   *          <p>Configure the role as follows:</p>
   *          <ul>
   *             <li>
   *                <p>The role must belong to the Amazon Web Services account specified by
   *                     <code>AwsAccountId</code>.</p>
   *             </li>
   *             <li>
   *                <p>Configure the role trust policy to allow the Amazon Quick Sight service principal to call
   *                     <code>sts:AssumeRole</code>.</p>
   *             </li>
   *             <li>
   *                <p>Attach a permissions policy that allows access to the resources that you want
   *                     Amazon Quick Sight to use.</p>
   *             </li>
   *             <li>
   *                <p>To use features that rely on session tags, configure the role trust policy to
   *                     allow the Amazon Quick Sight service principal to call <code>sts:TagSession</code>.</p>
   *             </li>
   *          </ul>
   *          <p>If the role doesn't exist or its trust policy doesn't allow
   *             <code>sts:AssumeRole</code>, the request returns an
   *             <code>AccessDeniedException</code>.</p>
   *          <p>When you call this operation, Amazon Quick Sight attempts to assume the role with session tags
   *             and records whether the attempt succeeds. If you later add or remove
   *             <code>sts:TagSession</code> from the trust policy, call this operation again with the
   *             same role ARN to refresh the stored capability.</p>
   * @public
   */
  CustomerManagedRoleArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateResourcePermissionsResponse {
  /**
   * <p>The type of service role that Amazon Quick Sight uses for your account after the update.
   *             This value is <code>CUSTOMER_MANAGED</code>.</p>
   * @public
   */
  RoleType?: ServiceRoleType | undefined;

  /**
   * <p>The ARN of the customer-managed role that Amazon Quick Sight uses for your account after
   *             the update.</p>
   * @public
   */
  CustomerManagedRoleArn?: string | undefined;

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
export interface UpdateSpaceRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the space.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the space that you want to update.</p>
   * @public
   */
  SpaceId: string | undefined;

  /**
   * <p>A new display name for the space.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A new description for the space.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSpaceResponse {
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
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSpacePermissionsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the space.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the space that you want to update permissions for.</p>
   * @public
   */
  SpaceId: string | undefined;

  /**
   * <p>The permissions that you want to grant on the space.</p>
   * @public
   */
  GrantPermissions?: ResourcePermission[] | undefined;

  /**
   * <p>The permissions that you want to revoke from the space.</p>
   * @public
   */
  RevokePermissions?: ResourcePermission[] | undefined;
}

/**
 * @public
 */
export interface UpdateSpacePermissionsResponse {
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
   * <p>The updated permissions for the space.</p>
   * @public
   */
  permissions?: ResourcePermission[] | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  requestId?: string | undefined;
}

/**
 * <p>An operation to perform on a resource in a space.</p>
 * @public
 */
export interface SpaceResourceOperation {
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
}

/**
 * @public
 */
export interface UpdateSpaceResourcesRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the space.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the space that you want to update resources for.</p>
   * @public
   */
  SpaceId: string | undefined;

  /**
   * <p>A list of resources to add to the space.</p>
   * @public
   */
  AddResources?: SpaceResourceOperation[] | undefined;

  /**
   * <p>A list of resources to remove from the space.</p>
   * @public
   */
  RemoveResources?: SpaceResourceOperation[] | undefined;
}

/**
 * @public
 */
export interface UpdateSpaceResourcesResponse {
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
   * <p>A list of resource operations that failed.</p>
   * @public
   */
  FailedResourceOperations?: FailedSpaceResourceOperation[] | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;
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
