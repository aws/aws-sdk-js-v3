// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  AgentStatus,
  AppVisibility,
  AssetBundleExportFormat,
  AssetBundleImportFailureAction,
  AssetType,
  AssignmentStatus,
  CrossDatasetTypes,
  DashboardsQAStatus,
  DataSetImportMode,
  DataSourceType,
  DlpAction,
  DlpProviderType,
  FieldName,
  FilterNullOption,
  FilterOperator,
  GovernedAction,
  HierarchyFilterMatchOperator,
  IdentityType,
  IncludeFolderMembers,
  IncludeGeneratedAnswer,
  IncludeQuickSightQIndex,
  PersonalizationMode,
  PurchaseMode,
  QAResultType,
  QSearchStatus,
  ResourceStatus,
  ResourceType,
  Role,
  SearchAppsFilterName,
  SearchFilterOperator,
  SelfUpgradeAdminAction,
  SelfUpgradeStatus,
  ServiceType,
  SpaceQuickSightResourceType,
  SpaceQuickSightSearchFilterName,
  SpaceSearchOperator,
  ThemeType,
  TopicFilterAttribute,
  TopicFilterOperator,
  TopicUserExperienceVersion,
  TopicV2PublishOption,
  UserIndexCapacitySortBy,
  UserIndexCapacitySortOrder,
  UserRole,
  VisualRole,
  VPCConnectionAvailabilityStatus,
  VPCConnectionResourceStatus,
  WidgetStatus,
} from "./enums";
import type {
  AccessControlConfiguration,
  AccountCustomization,
  ActionConnectorSearchFilter,
  ActionConnectorSummary,
  AgentSearchFilter,
  AgentSummary,
  AnalysisDefaults,
  AnalysisError,
  AssetOptions,
  CalculatedField,
  CategoryFilter,
  ColumnConfiguration,
  ColumnIdentifier,
  DataSetIdentifierDeclaration,
  DefaultFilterControlConfiguration,
  FilterScopeConfiguration,
  HierarchyFilterLevel,
  NestedFilter,
  NumericEqualityFilter,
  NumericRangeFilter,
  ParameterDeclaration,
  QueryExecutionOptions,
  RelativeDatesFilter,
  TimeEqualityFilter,
  TimeRangeFilter,
  TopBottomFilter,
} from "./models_0";
import type {
  _Parameters,
  AnalysisSearchFilter,
  AnalysisSourceEntity,
  AnalysisSummary,
  ApplicableTo,
  ApprovalPolicy,
  AppSummary,
  AssetBundleCloudFormationOverridePropertyConfiguration,
  AssetBundleExportJobValidationStrategy,
  AssetBundleImportJobOverrideParameters,
  AssetBundleImportJobOverridePermissions,
  AssetBundleImportJobOverrideTags,
  AssetBundleImportJobOverrideValidationStrategy,
  AssetBundleImportSource,
  AuthConfig,
  BrandDefinition,
  BrandDetail,
  Capabilities,
  CapacityBytesRangeFilter,
  ColumnGroup,
  ColumnLevelPermissionRule,
  CustomPromptInput,
  DashboardPublishOptions,
  DashboardSourceEntity,
  DataSetRefreshProperties,
  DataSourceParameters,
  Governance,
  LinkSharingConfiguration,
  ResourcePermission,
  SheetDefinition,
  SslProperties,
  StaticFile,
  Tag,
  TooltipSheetDefinition,
  TopicIdentifierDeclaration,
  TopicIR,
  TopicTemplate,
  ValidationStrategy,
  VpcConnectionProperties,
} from "./models_2";
import type {
  CustomInstructions,
  DashboardError,
  DashboardSearchFilter,
  DashboardSummary,
  DashboardVisualResult,
  DataPrepConfiguration,
  DataSetConfiguration,
  DatasetParameter,
  DataSetSearchFilter,
  DataSetSummary,
  DataSetUsageConfiguration,
  DataSourceCredentials,
  DataSourceSearchFilter,
  DataSourceSummary,
  FieldFolder,
  Group,
  KnowledgeBaseConfiguration,
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
  TemplateSourceEntity,
  ThemeAlias,
  ThemeConfiguration,
  TopicConfiguration,
  TopicDetails,
  TopicRefreshSchedule,
  TopicV2Details,
} from "./models_3";
import type {
  FailedKeyRegistrationEntry,
  FailedSpaceResourceOperation,
  FailedToUpdateAssociation,
  FlowSummary,
  FolderSearchFilter,
  FolderSummary,
  GeneratedAnswerResult,
  GroupSearchFilter,
  KnowledgeBaseSearchFilter,
  KnowledgeBaseSortBy,
  KnowledgeBaseSummary,
  NetworkInterface,
  RegisteredCustomerManagedKey,
  SelfUpgradeRequestDetail,
  SessionTag,
  SnapshotConfiguration,
  SpaceQuickSightResourceDetails,
  SpaceSummary,
  TemplateError,
  User,
} from "./models_4";

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource that you want a list of tags for.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * Contains a map of the key-value pairs for the resource tag or tags assigned to the resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

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
export interface ListTemplateAliasesRequest {
  /**
   * The ID of the Amazon Web Services account that contains the template aliases that you're listing.
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
export interface ListTemplateAliasesResponse {
  /**
   * A structure containing the list of the template's aliases.
   *
   * @public
   */
  TemplateAliasList?: TemplateAlias[] | undefined;

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
   * The token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTemplatesRequest {
  /**
   * The ID of the Amazon Web Services account that contains the templates that you're listing.
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
 * The template summary.
 *
 * @public
 */
export interface TemplateSummary {
  /**
   * A summary of a template.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of the template. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  TemplateId?: string | undefined;

  /**
   * A display name for the template.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A structure containing a list of version numbers for the template summary.
   *
   * @public
   */
  LatestVersionNumber?: number | undefined;

  /**
   * The last time that this template was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The last time that this template was updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListTemplatesResponse {
  /**
   * A structure containing information about the templates in the list.
   *
   * @public
   */
  TemplateSummaryList?: TemplateSummary[] | undefined;

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
export interface ListTemplateVersionsRequest {
  /**
   * The ID of the Amazon Web Services account that contains the templates that you're listing.
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
 * The template version.
 *
 * @public
 */
export interface TemplateVersionSummary {
  /**
   * The Amazon Resource Name (ARN) of the template version.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The version number of the template version.
   *
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * The time that this template version was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The status of the template version.
   *
   * @public
   */
  Status?: ResourceStatus | undefined;

  /**
   * The description of the template version.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface ListTemplateVersionsResponse {
  /**
   * A structure containing a list of all the versions of the specified template.
   *
   * @public
   */
  TemplateVersionSummaryList?: TemplateVersionSummary[] | undefined;

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
export interface ListThemeAliasesRequest {
  /**
   * The ID of the Amazon Web Services account that contains the theme aliases that you're listing.
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
export interface ListThemeAliasesResponse {
  /**
   * A structure containing the list of the theme's aliases.
   *
   * @public
   */
  ThemeAliasList?: ThemeAlias[] | undefined;

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
   * The token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListThemesRequest {
  /**
   * The ID of the Amazon Web Services account that contains the themes that you're listing.
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

  /**
   * The type of themes that you want to list. Valid options include the following:
   *
   * - `ALL (default)`- Display all existing themes.
   * - `CUSTOM` - Display only the themes created by people using Amazon Quick Sight.
   * - `QUICKSIGHT` - Display only the starting themes defined by Quick Sight.
   *
   * @public
   */
  Type?: ThemeType | undefined;
}

/**
 * The theme summary.
 *
 * @public
 */
export interface ThemeSummary {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * the display name for the theme.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The ID of the theme. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  ThemeId?: string | undefined;

  /**
   * The latest version number for the theme.
   *
   * @public
   */
  LatestVersionNumber?: number | undefined;

  /**
   * The date and time that this theme was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The last date and time that this theme was updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListThemesResponse {
  /**
   * Information about the themes in the list.
   *
   * @public
   */
  ThemeSummaryList?: ThemeSummary[] | undefined;

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
export interface ListThemeVersionsRequest {
  /**
   * The ID of the Amazon Web Services account that contains the themes that you're listing.
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
 * The theme version.
 *
 * @public
 */
export interface ThemeVersionSummary {
  /**
   * The version number of the theme version.
   *
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the theme version.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The description of the theme version.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The date and time that this theme version was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The status of the theme version.
   *
   * @public
   */
  Status?: ResourceStatus | undefined;
}

/**
 * @public
 */
export interface ListThemeVersionsResponse {
  /**
   * A structure containing a list of all the versions of the specified theme.
   *
   * @public
   */
  ThemeVersionSummaryList?: ThemeVersionSummary[] | undefined;

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
export interface ListTopicRefreshSchedulesRequest {
  /**
   * The ID of the Amazon Web Services account that contains the topic whose refresh schedule you want described.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID for the topic that you want to describe. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  TopicId: string | undefined;
}

/**
 * A summary of the refresh schedule details for a dataset.
 *
 * @public
 */
export interface TopicRefreshScheduleSummary {
  /**
   * The ID of the dataset.
   *
   * @public
   */
  DatasetId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the dataset.
   *
   * @public
   */
  DatasetArn?: string | undefined;

  /**
   * The name of the dataset.
   *
   * @public
   */
  DatasetName?: string | undefined;

  /**
   * The definition of a refresh schedule.
   *
   * @public
   */
  RefreshSchedule?: TopicRefreshSchedule | undefined;
}

/**
 * @public
 */
export interface ListTopicRefreshSchedulesResponse {
  /**
   * The ID for the topic that you want to describe. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
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
   * The list of topic refresh schedules.
   *
   * @public
   */
  RefreshSchedules?: TopicRefreshScheduleSummary[] | undefined;

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
export interface ListTopicReviewedAnswersRequest {
  /**
   * The ID of the Amazon Web Services account that containd the reviewed answers that you want listed.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID for the topic that contains the reviewed answer that you want to list. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  TopicId: string | undefined;
}

/**
 * @public
 */
export interface ListTopicsRequest {
  /**
   * The ID of the Amazon Web Services account that contains the topics that you want to list.
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
 * A topic summary.
 *
 * @public
 */
export interface TopicSummary {
  /**
   * The Amazon Resource Name (ARN) of the topic.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID for the topic. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  TopicId?: string | undefined;

  /**
   * The name of the topic.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The user experience version of the topic.
   *
   * @public
   */
  UserExperienceVersion?: TopicUserExperienceVersion | undefined;
}

/**
 * @public
 */
export interface ListTopicsResponse {
  /**
   * A list of topic summaries.
   *
   * @public
   */
  TopicsSummaries?: TopicSummary[] | undefined;

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
export interface ListTopicsV2Request {
  /**
   * The ID of the Amazon Web Services account that contains the topics that you want to list.
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
 * A summary of the topic.
 *
 * @public
 */
export interface TopicV2Summary {
  /**
   * The Amazon Resource Name (ARN) of the topic.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of the topic. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  TopicId?: string | undefined;

  /**
   * The name of the topic.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface ListTopicsV2Response {
  /**
   * A list of topic summaries.
   *
   * @public
   */
  TopicSummaryList?: TopicV2Summary[] | undefined;

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
export interface ListUserGroupsRequest {
  /**
   * The Amazon Quick Sight user name that you want to list group memberships for.
   *
   * @public
   */
  UserName: string | undefined;

  /**
   * The Amazon Web Services account ID that the user is in. Currently, you use the ID for the Amazon Web Services account that contains your Amazon Quick Sight account.
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
}

/**
 * @public
 */
export interface ListUserGroupsResponse {
  /**
   * The list of groups the user is a member of.
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
export interface ListUsersRequest {
  /**
   * The ID for the Amazon Web Services account that the user is in. Currently, you use the ID for the Amazon Web Services account that contains your Amazon Quick Sight account.
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
   * The maximum number of results to return from this request.
   *
   * @public
   */
  MaxResults?: number | undefined;

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
export interface ListUsersResponse {
  /**
   * The list of users.
   *
   * @public
   */
  UserList?: User[] | undefined;

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
 * A filter that matches users by username or email prefix.
 *
 * @public
 */
export interface UserNameOrEmailFilter {
  /**
   * The prefix to match against username or email (starts-with match).
   *
   * @public
   */
  prefix: string | undefined;
}

/**
 * A filter for user index capacity queries. Only one filter type can be specified per request.
 *
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
   * Filter users by username or email prefix.
   *
   * @public
   */
  export interface UserNameOrEmailMember {
    userNameOrEmail: UserNameOrEmailFilter;
    totalCapacityBytes?: never;
    $unknown?: never;
  }

  /**
   * Filter users by total capacity range in bytes.
   *
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
   * The ID of the Amazon Web Services account that contains the index capacity data.
   *
   * @public
   */
  awsAccountId: string | undefined;

  /**
   * The namespace to scope the user search to. Required when the userNameOrEmail filter is present.
   *
   * @public
   */
  namespace?: string | undefined;

  /**
   * Filters to apply. Only one filter is supported per request. The userNameOrEmail and totalCapacityBytes filters are mutually exclusive.
   *
   * @public
   */
  filters?: UserIndexCapacityFilter[] | undefined;

  /**
   * The field to sort results by.
   *
   * @public
   */
  sortBy?: UserIndexCapacitySortBy | undefined;

  /**
   * The sort order for results. Defaults to DESC if not specified.
   *
   * @public
   */
  sortOrder?: UserIndexCapacitySortOrder | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of results, received from a previous call.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A summary of a user's index capacity consumption.
 *
 * @public
 */
export interface UserIndexCapacity {
  /**
   * The ARN of the user.
   *
   * @public
   */
  userArn?: string | undefined;

  /**
   * The username of the user.
   *
   * @public
   */
  userName?: string | undefined;

  /**
   * The email address of the user.
   *
   * @public
   */
  email?: string | undefined;

  /**
   * The role of the user.
   *
   * @public
   */
  role?: string | undefined;

  /**
   * The total index capacity consumed by the user in bytes.
   *
   * @public
   */
  totalCapacityBytes?: number | undefined;

  /**
   * The total index capacity consumed by the user's knowledge bases in bytes.
   *
   * @public
   */
  totalKBCapacityBytes?: number | undefined;

  /**
   * The total index capacity consumed by the user's spaces in bytes.
   *
   * @public
   */
  totalSpaceCapacityBytes?: number | undefined;

  /**
   * The number of knowledge bases owned by the user.
   *
   * @public
   */
  kbCount?: number | undefined;

  /**
   * The number of spaces owned by the user.
   *
   * @public
   */
  spaceCount?: number | undefined;
}

/**
 * @public
 */
export interface ListUsersIndexCapacityResponse {
  /**
   * The list of users with their index capacity metrics.
   *
   * @public
   */
  users?: UserIndexCapacity[] | undefined;

  /**
   * The token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  requestId?: string | undefined;
}

/**
 * @public
 */
export interface ListVPCConnectionsRequest {
  /**
   * The Amazon Web Services account ID of the account that contains the VPC connections that you want to list.
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
 * The summary metadata that describes a VPC connection.
 *
 * @public
 */
export interface VPCConnectionSummary {
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
export interface ListVPCConnectionsResponse {
  /**
   * A `VPCConnectionSummaries` object that returns a summary of VPC connection objects.
   *
   * @public
   */
  VPCConnectionSummaries?: VPCConnectionSummary[] | undefined;

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
export interface PredictQAResultsRequest {
  /**
   * The ID of the Amazon Web Services account that the user wants to execute Predict QA results in.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The query text to be used to predict QA results.
   *
   * @public
   */
  QueryText: string | undefined;

  /**
   * Indicates whether Q indicies are included or excluded.
   *
   * @public
   */
  IncludeQuickSightQIndex?: IncludeQuickSightQIndex | undefined;

  /**
   * Indicates whether generated answers are included or excluded.
   *
   * @public
   */
  IncludeGeneratedAnswer?: IncludeGeneratedAnswer | undefined;

  /**
   * The number of maximum topics to be considered to predict QA results.
   *
   * @public
   */
  MaxTopicsToConsider?: number | undefined;
}

/**
 * The QA result that is made from the `DashboardVisual` or `GeneratedAnswer`.
 *
 * @public
 */
export interface QAResult {
  /**
   * The type of QA result.
   *
   * @public
   */
  ResultType?: QAResultType | undefined;

  /**
   * The representation of a dashboard visual result.
   *
   * @public
   */
  DashboardVisual?: DashboardVisualResult | undefined;

  /**
   * The representation of a generated answer result.
   *
   * @public
   */
  GeneratedAnswer?: GeneratedAnswerResult | undefined;
}

/**
 * @public
 */
export interface PredictQAResultsResponse {
  /**
   * The primary visual response.
   *
   * @public
   */
  PrimaryResult?: QAResult | undefined;

  /**
   * Additional visual responses.
   *
   * @public
   */
  AdditionalResults?: QAResult[] | undefined;

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
export interface PutDataSetRefreshPropertiesRequest {
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
   * The dataset refresh properties.
   *
   * @public
   */
  DataSetRefreshProperties: DataSetRefreshProperties | undefined;
}

/**
 * @public
 */
export interface PutDataSetRefreshPropertiesResponse {
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
export interface RegisterUserRequest {
  /**
   * The identity type that your Quick Sight account uses to manage the identity of users.
   *
   * @public
   */
  IdentityType: IdentityType | undefined;

  /**
   * The email address of the user that you want to register.
   *
   * @public
   */
  Email: string | undefined;

  /**
   * The Amazon Quick Sight role for the user. The user role can be one of the following:
   *
   * - `READER`: A user who has read-only access to dashboards.
   * - `AUTHOR`: A user who can create data sources, datasets, analyses, and dashboards.
   * - `ADMIN`: A user who is an author, who can also manage Amazon Quick Sight settings.
   * - `READER_PRO`: Reader Pro adds Generative BI capabilities to the Reader role. Reader Pros have access to Amazon Q in Quick Sight, can build stories with Amazon Q, and can generate executive summaries from dashboards.
   * - `AUTHOR_PRO`: Author Pro adds Generative BI capabilities to the Author role. Author Pros can author dashboards with natural language with Amazon Q, build stories with Amazon Q, create Topics for Q&A, and generate executive summaries from dashboards.
   * - `ADMIN_PRO`: Admin Pros are Author Pros who can also manage Amazon Quick Sight administrative settings. Admin Pro users are billed at Author Pro pricing.
   * - `RESTRICTED_READER`: This role isn't currently available for use.
   * - `RESTRICTED_AUTHOR`: This role isn't currently available for use.
   *
   * @public
   */
  UserRole: UserRole | undefined;

  /**
   * The ARN of the IAM user or role that you are registering with Amazon Quick Sight.
   *
   * @public
   */
  IamArn?: string | undefined;

  /**
   * You need to use this parameter only when you register one or more users using an assumed IAM role. You don't need to provide the session name for other scenarios, for example when you are registering an IAM user or an Amazon Quick Sight user. You can register multiple users using the same IAM role if each user has a different session name. For more information on assuming IAM roles, see [`assume-role`](https://docs.aws.amazon.com/cli/latest/reference/sts/assume-role.html) in the *CLI Reference.*
   *
   * @public
   */
  SessionName?: string | undefined;

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

  /**
   * The Amazon Quick Sight user name that you want to create for the user you are registering.
   *
   * @public
   */
  UserName?: string | undefined;

  /**
   * (Enterprise edition only) The name of the custom permissions profile that you want to assign to this user. Customized permissions allows you to control a user's access by restricting access the following operations:
   *
   * - Create and update data sources
   * - Create and update datasets
   * - Create and update email reports
   * - Subscribe to email reports
   *
   * To add custom permissions to an existing user, use `UpdateUser` instead.
   *
   * A set of custom permissions includes any combination of these restrictions. Currently, you need to create the profile names for custom permission sets by using the Quick Sight console. Then, you use the `RegisterUser` API operation to assign the named set of permissions to a Quick Sight user.
   *
   * Quick Sight custom permissions are applied through IAM policies. Therefore, they override the permissions typically granted by assigning Quick Sight users to one of the default security cohorts in Quick Sight (admin, author, reader, admin pro, author pro, reader pro).
   *
   * This feature is available only to Quick Sight Enterprise edition subscriptions.
   *
   * @public
   */
  CustomPermissionsName?: string | undefined;

  /**
   * The type of supported external login provider that provides identity to let a user federate into Amazon Quick Sight with an associated Identity and Access Management(IAM) role. The type of supported external login provider can be one of the following.
   *
   * - `COGNITO`: Amazon Cognito. The provider URL is cognito-identity.amazonaws.com. When choosing the `COGNITO` provider type, don’t use the "CustomFederationProviderUrl" parameter which is only needed when the external provider is custom.
   * - `CUSTOM_OIDC`: Custom OpenID Connect (OIDC) provider. When choosing `CUSTOM_OIDC` type, use the `CustomFederationProviderUrl` parameter to provide the custom OIDC provider URL.
   *
   * @public
   */
  ExternalLoginFederationProviderType?: string | undefined;

  /**
   * The URL of the custom OpenID Connect (OIDC) provider that provides identity to let a user federate into Quick Sight with an associated Identity and Access Management(IAM) role. This parameter should only be used when `ExternalLoginFederationProviderType` parameter is set to `CUSTOM_OIDC`.
   *
   * @public
   */
  CustomFederationProviderUrl?: string | undefined;

  /**
   * The identity ID for a user in the external login provider.
   *
   * @public
   */
  ExternalLoginId?: string | undefined;

  /**
   * The tags to associate with the user.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface RegisterUserResponse {
  /**
   * The user's user name.
   *
   * @public
   */
  User?: User | undefined;

  /**
   * The URL the user visits to complete registration and provide a password. This is returned only for users with an identity type of `QUICKSIGHT`.
   *
   * @public
   */
  UserInvitationUrl?: string | undefined;

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
export interface RestoreAnalysisRequest {
  /**
   * The ID of the Amazon Web Services account that contains the analysis.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the analysis that you're restoring.
   *
   * @public
   */
  AnalysisId: string | undefined;

  /**
   * A boolean value that determines if the analysis will be restored to folders that it previously resided in. A `True` value restores analysis back to all folders that it previously resided in. A `False` value restores the analysis but does not restore the analysis back to all previously resided folders. Restoring a restricted analysis requires this parameter to be set to `True`.
   *
   * @public
   */
  RestoreToFolders?: boolean | undefined;
}

/**
 * @public
 */
export interface RestoreAnalysisResponse {
  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the analysis that you're restoring.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of the analysis that you're restoring.
   *
   * @public
   */
  AnalysisId?: string | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * A list of folder arns thatthe analysis failed to be restored to.
   *
   * @public
   */
  RestorationFailedFolderArns?: string[] | undefined;
}

/**
 * @public
 */
export interface SearchActionConnectorsRequest {
  /**
   * The Amazon Web Services account ID in which to search for action connectors.
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
   * A pagination token to retrieve the next set of results. Use the token returned from a previous call to continue searching.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The search filters to apply. You can filter by connector name, type, or user permissions. Maximum of one filter is supported.
   *
   * @public
   */
  Filters: ActionConnectorSearchFilter[] | undefined;
}

/**
 * @public
 */
export interface SearchActionConnectorsResponse {
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

  /**
   * A list of action connector summaries that match the search criteria.
   *
   * @public
   */
  ActionConnectorSummaries?: ActionConnectorSummary[] | undefined;
}

/**
 * @public
 */
export interface SearchAgentsRequest {
  /**
   * The ID of the Amazon Web Services account that contains the agents.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The filters to apply when searching agents.
   *
   * @public
   */
  Filters: AgentSearchFilter[] | undefined;

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
export interface SearchAgentsResponse {
  /**
   * A list of agent summaries.
   *
   * @public
   */
  AgentSummaries?: AgentSummary[] | undefined;

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
export interface SearchAnalysesRequest {
  /**
   * The ID of the Amazon Web Services account that contains the analyses that you're searching for.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The structure for the search filters that you want to apply to your search.
   *
   * @public
   */
  Filters: AnalysisSearchFilter[] | undefined;

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
export interface SearchAnalysesResponse {
  /**
   * Metadata describing the analyses that you searched for.
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
 * A filter to apply when searching for apps.
 *
 * @public
 */
export interface SearchAppsFilter {
  /**
   * The name of the filter attribute.
   *
   * @public
   */
  Name: SearchAppsFilterName | undefined;

  /**
   * The comparison operator for the filter.
   *
   * @public
   */
  Operator: FilterOperator | undefined;

  /**
   * The value to filter on.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface SearchAppsRequest {
  /**
   * The ID of the Amazon Web Services account that contains the apps to search.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The filters to apply to the search.
   *
   * @public
   */
  Filters: SearchAppsFilter[] | undefined;

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
export interface SearchAppsResponse {
  /**
   * A list of app summaries that match the search criteria.
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
export interface SearchDashboardsRequest {
  /**
   * The ID of the Amazon Web Services account that contains the user whose dashboards you're searching for.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The filters to apply to the search. Currently, you can search only by user name, for example, `"Filters": [ \{ "Name": "QUICKSIGHT_USER", "Operator": "StringEquals", "Value": "arn:aws:quicksight:us-east-1:1:user/default/UserName1" \} ]`
   *
   * @public
   */
  Filters: DashboardSearchFilter[] | undefined;

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
export interface SearchDashboardsResponse {
  /**
   * The list of dashboards owned by the user specified in `Filters` in your request.
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
export interface SearchDataSetsRequest {
  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The filters to apply to the search.
   *
   * @public
   */
  Filters: DataSetSearchFilter[] | undefined;

  /**
   * A pagination token that can be used in a subsequent request.
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
export interface SearchDataSetsResponse {
  /**
   * A `DataSetSummaries` object that returns a summary of a dataset.
   *
   * @public
   */
  DataSetSummaries?: DataSetSummary[] | undefined;

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
export interface SearchDataSourcesRequest {
  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The filters to apply to the search.
   *
   * @public
   */
  Filters: DataSourceSearchFilter[] | undefined;

  /**
   * A pagination token that can be used in a subsequent request.
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
export interface SearchDataSourcesResponse {
  /**
   * A `DataSourceSummaries` object that returns a summary of a data source.
   *
   * @public
   */
  DataSourceSummaries?: DataSourceSummary[] | undefined;

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
 * A structure that contains the filter information when searching flows.
 *
 * @public
 */
export interface SearchFlowsFilter {
  /**
   * The name of the value that you want to use as a filter, for example `"Name": "DIRECT_QUICKSIGHT_SOLE_OWNER"`.
   *
   * Valid values are defined as follows:
   *
   * - `assetName`: Any flows whose names have a substring match to this value will be returned.
   * - `assetDescription`: Any flows whose descriptions have a substring match to this value will be returned.
   * - `DIRECT_QUICKSIGHT_SOLE_OWNER`: Provide an ARN of a user or group, and any analyses with that ARN listed as the only owner of the analysis are returned. Implicit permissions from folders or groups are not considered.
   * - `DIRECT_QUICKSIGHT_OWNER`: Provide an ARN of a user or group, and any analyses with that ARN listed as one of the owners of the analyses are returned. Implicit permissions from folders or groups are not considered.
   * - `DIRECT_QUICKSIGHT_VIEWER_OR_OWNER`: Provide an ARN of a user or group, and any analyses with that ARN listed as one of the owners or viewers of the analyses are returned. Implicit permissions from folders or groups are not considered.
   *
   * @public
   */
  Name: FieldName | undefined;

  /**
   * The comparison operator that you want to use as a filter, for example `"Operator": "StringEquals"`. Valid values are `"StringEquals"` and `"StringLike"`.
   *
   * @public
   */
  Operator: SearchFilterOperator | undefined;

  /**
   * The value of the named item, in this case `DIRECT_QUICKSIGHT_SOLE_OWNER`, that you want to use as a filter, for example `"Value"`. An example is `"arn:aws:quicksight:us-east-1:1:user/default/UserName1"`.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface SearchFlowsInput {
  /**
   * The ID of the Amazon Web Services account where you are searching for flows from.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The filters applied to the search when searching for flows in the Amazon Web Services account.
   *
   * @public
   */
  Filters: SearchFlowsFilter[] | undefined;

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
export interface SearchFlowsOutput {
  /**
   * The list of flows found against the search.
   *
   * @public
   */
  FlowSummaryList: FlowSummary[] | undefined;

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
export interface SearchFoldersRequest {
  /**
   * The ID for the Amazon Web Services account that contains the folder.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The filters to apply to the search. Currently, you can search only by the parent folder ARN. For example, `"Filters": [ \{ "Name": "PARENT_FOLDER_ARN", "Operator": "StringEquals", "Value": "arn:aws:quicksight:us-east-1:1:folder/folderId" \} ]`.
   *
   * @public
   */
  Filters: FolderSearchFilter[] | undefined;

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
export interface SearchFoldersResponse {
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
export interface SearchGroupsRequest {
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
   * The maximum number of results to return from this request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The namespace that you want to search.
   *
   * @public
   */
  Namespace: string | undefined;

  /**
   * The structure for the search filters that you want to apply to your search.
   *
   * @public
   */
  Filters: GroupSearchFilter[] | undefined;
}

/**
 * @public
 */
export interface SearchGroupsResponse {
  /**
   * A list of groups in a specified namespace that match the filters you set in your `SearchGroups` request.
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
export interface SearchKnowledgeBasesRequest {
  /**
   * The ID of the Amazon Web Services account that contains the knowledge base.
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

  /**
   * The filters to apply when searching knowledge bases.
   *
   * @public
   */
  Filters?: KnowledgeBaseSearchFilter[] | undefined;

  /**
   * The sort configuration for the search results.
   *
   * @public
   */
  SortBy?: KnowledgeBaseSortBy | undefined;
}

/**
 * @public
 */
export interface SearchKnowledgeBasesResponse {
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
 * A filter to use when searching for spaces.
 *
 * @public
 */
export interface SpaceQuicksightSearchFilter {
  /**
   * The name of the filter field to use.
   *
   * @public
   */
  name: SpaceQuickSightSearchFilterName | undefined;

  /**
   * The comparison operator to use for the filter.
   *
   * @public
   */
  operator: SpaceSearchOperator | undefined;

  /**
   * The value to use for the filter.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface SearchSpacesRequest {
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

  /**
   * The filters to apply to the search.
   *
   * @public
   */
  Filters: SpaceQuicksightSearchFilter[] | undefined;
}

/**
 * @public
 */
export interface SearchSpacesResponse {
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
   * A list of space summaries that match the search criteria.
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

/**
 * The filter that is used to search for a topic.
 *
 * @public
 */
export interface TopicSearchFilter {
  /**
   * The operator like equals or like.
   *
   * @public
   */
  Operator: TopicFilterOperator | undefined;

  /**
   * The name of the topic search filter.
   *
   * @public
   */
  Name: TopicFilterAttribute | undefined;

  /**
   * The value of the topic search filter.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface SearchTopicsRequest {
  /**
   * The ID of the Amazon Web Services account that contains the topic that you want to find.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The filters that you want to use to search for the topic.
   *
   * @public
   */
  Filters: TopicSearchFilter[] | undefined;

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
export interface SearchTopicsResponse {
  /**
   * A list of topic summaries that is returned by the search topic request.
   *
   * @public
   */
  TopicSummaryList?: TopicSummary[] | undefined;

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
export interface SearchTopicsV2Request {
  /**
   * The ID of the Amazon Web Services account that contains the topic that you want to search.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The filters that you want to use to search for the topic.
   *
   * @public
   */
  Filters: TopicSearchFilter[] | undefined;

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
export interface SearchTopicsV2Response {
  /**
   * A list of topic summaries that is returned by the search topic request.
   *
   * @public
   */
  TopicSummaryList?: TopicV2Summary[] | undefined;

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
export interface StartAssetBundleExportJobRequest {
  /**
   * The ID of the Amazon Web Services account to export assets from.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the job. This ID is unique while the job is running. After the job is completed, you can reuse this ID for another job.
   *
   * @public
   */
  AssetBundleExportJobId: string | undefined;

  /**
   * An array of resource ARNs to export. The following resources are supported.
   *
   * - `Analysis`
   * - `Dashboard`
   * - `DataSet`
   * - `DataSource`
   * - `RefreshSchedule`
   * - `Theme`
   * - `VPCConnection`
   *
   * The API caller must have the necessary permissions in their IAM role to access each resource before the resources can be exported.
   *
   * @public
   */
  ResourceArns: string[] | undefined;

  /**
   * A Boolean that determines whether all dependencies of each resource ARN are recursively exported with the job. For example, say you provided a Dashboard ARN to the `ResourceArns` parameter. If you set `IncludeAllDependencies` to `TRUE`, any theme, dataset, and data source resource that is a dependency of the dashboard is also exported.
   *
   * @public
   */
  IncludeAllDependencies?: boolean | undefined;

  /**
   * The export data format.
   *
   * @public
   */
  ExportFormat: AssetBundleExportFormat | undefined;

  /**
   * An optional collection of structures that generate CloudFormation parameters to override the existing resource property values when the resource is exported to a new CloudFormation template.
   *
   * Use this field if the `ExportFormat` field of a `StartAssetBundleExportJobRequest` API call is set to `CLOUDFORMATION_JSON`.
   *
   * @public
   */
  CloudFormationOverridePropertyConfiguration?: AssetBundleCloudFormationOverridePropertyConfiguration | undefined;

  /**
   * A Boolean that determines whether all permissions for each resource ARN are exported with the job. If you set `IncludePermissions` to `TRUE`, any permissions associated with each resource are exported.
   *
   * @public
   */
  IncludePermissions?: boolean | undefined;

  /**
   * A Boolean that determines whether all tags for each resource ARN are exported with the job. If you set `IncludeTags` to `TRUE`, any tags associated with each resource are exported.
   *
   * @public
   */
  IncludeTags?: boolean | undefined;

  /**
   * An optional parameter that determines which validation strategy to use for the export job. If `StrictModeForAllResources` is set to `TRUE`, strict validation for every error is enforced. If it is set to `FALSE`, validation is skipped for specific UI errors that are shown as warnings. The default value for `StrictModeForAllResources` is `FALSE`.
   *
   * @public
   */
  ValidationStrategy?: AssetBundleExportJobValidationStrategy | undefined;

  /**
   * A Boolean that determines if the exported asset carries over information about the folders that the asset is a member of.
   *
   * @public
   */
  IncludeFolderMemberships?: boolean | undefined;

  /**
   * A setting that indicates whether you want to include folder assets. You can also use this setting to recusrsively include all subfolders of an exported folder.
   *
   * @public
   */
  IncludeFolderMembers?: IncludeFolderMembers | undefined;
}

/**
 * @public
 */
export interface StartAssetBundleExportJobResponse {
  /**
   * The Amazon Resource Name (ARN) for the export job.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of the job. This ID is unique while the job is running. After the job is completed, you can reuse this ID for another job.
   *
   * @public
   */
  AssetBundleExportJobId?: string | undefined;

  /**
   * The Amazon Web Services response ID for this operation.
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
export interface StartAssetBundleImportJobRequest {
  /**
   * The ID of the Amazon Web Services account to import assets into.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the job. This ID is unique while the job is running. After the job is completed, you can reuse this ID for another job.
   *
   * @public
   */
  AssetBundleImportJobId: string | undefined;

  /**
   * The source of the asset bundle zip file that contains the data that you want to import. The file must be in `QUICKSIGHT_JSON` format.
   *
   * @public
   */
  AssetBundleImportSource: AssetBundleImportSource | undefined;

  /**
   * Optional overrides that are applied to the resource configuration before import.
   *
   * @public
   */
  OverrideParameters?: AssetBundleImportJobOverrideParameters | undefined;

  /**
   * The failure action for the import job.
   *
   * If you choose `ROLLBACK`, failed import jobs will attempt to undo any asset changes caused by the failed job.
   *
   * If you choose `DO_NOTHING`, failed import jobs will not attempt to roll back any asset changes caused by the failed job, possibly keeping the Amazon Quick Sight account in an inconsistent state.
   *
   * @public
   */
  FailureAction?: AssetBundleImportFailureAction | undefined;

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
   * An optional validation strategy override for all analyses and dashboards that is applied to the resource configuration before import.
   *
   * @public
   */
  OverrideValidationStrategy?: AssetBundleImportJobOverrideValidationStrategy | undefined;
}

/**
 * @public
 */
export interface StartAssetBundleImportJobResponse {
  /**
   * The Amazon Resource Name (ARN) for the import job.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of the job. This ID is unique while the job is running. After the job is completed, you can reuse this ID for another job.
   *
   * @public
   */
  AssetBundleImportJobId?: string | undefined;

  /**
   * The Amazon Web Services response ID for this operation.
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
export interface StartAutomationJobRequest {
  /**
   * The ID of the Amazon Web Services account that contains the automation.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the automation group that contains the automation to run.
   *
   * @public
   */
  AutomationGroupId: string | undefined;

  /**
   * The ID of the automation to run.
   *
   * @public
   */
  AutomationId: string | undefined;

  /**
   * The input payload for the automation job, provided as a JSON string.
   *
   * @public
   */
  InputPayload?: string | undefined;
}

/**
 * @public
 */
export interface StartAutomationJobResponse {
  /**
   * The Amazon Resource Name (ARN) of the automation job.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The ID of the automation job that was started.
   *
   * @public
   */
  JobId: string | undefined;

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
 * A structure that contains information on the anonymous user configuration.
 *
 * @public
 */
export interface SnapshotAnonymousUser {
  /**
   * The tags to be used for row-level security (RLS). Make sure that the relevant datasets have RLS tags configured before you start a snapshot export job. You can configure the RLS tags of a dataset with a `DataSet$RowLevelPermissionTagConfiguration` API call.
   *
   * These are not the tags that are used for Amazon Web Services resource tagging. For more information on row level security in Amazon Quick Sight, see [Using Row-Level Security (RLS) with Tags](https://docs.aws.amazon.com/quicksight/latest/user/quicksight-dev-rls-tags.html)in the *Amazon Quick User Guide*.
   *
   * @public
   */
  RowLevelPermissionTags?: SessionTag[] | undefined;
}

/**
 * A structure that contains information about the users that the dashboard snapshot is generated for.
 *
 * > **Important:** When using identity-enhanced session credentials, set the UserConfiguration request attribute to null. Otherwise, the request will be invalid.
 *
 * @public
 */
export interface SnapshotUserConfiguration {
  /**
   * An array of records that describe the anonymous users that the dashboard snapshot is generated for.
   *
   * @public
   */
  AnonymousUsers?: SnapshotAnonymousUser[] | undefined;
}

/**
 * @public
 */
export interface StartDashboardSnapshotJobRequest {
  /**
   * The ID of the Amazon Web Services account that the dashboard snapshot job is executed in.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the dashboard that you want to start a snapshot job for.
   *
   * @public
   */
  DashboardId: string | undefined;

  /**
   * An ID for the dashboard snapshot job. This ID is unique to the dashboard while the job is running. This ID can be used to poll the status of a job with a `DescribeDashboardSnapshotJob` while the job runs. You can reuse this ID for another job 24 hours after the current job is completed.
   *
   * @public
   */
  SnapshotJobId: string | undefined;

  /**
   * A structure that contains information about the users that the dashboard snapshot is generated for. The users can be either anonymous users or registered users. Anonymous users cannot be used together with registered users.
   *
   * > **Important:** When using identity-enhanced session credentials, set the UserConfiguration request attribute to null. Otherwise, the request will be invalid.
   *
   * @public
   */
  UserConfiguration?: SnapshotUserConfiguration | undefined;

  /**
   * A structure that describes the configuration of the dashboard snapshot.
   *
   * @public
   */
  SnapshotConfiguration: SnapshotConfiguration | undefined;
}

/**
 * @public
 */
export interface StartDashboardSnapshotJobResponse {
  /**
   * The Amazon Resource Name (ARN) for the dashboard snapshot job.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of the job. The job ID is set when you start a new job with a `StartDashboardSnapshotJob` API call.
   *
   * @public
   */
  SnapshotJobId?: string | undefined;

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
export interface StartDashboardSnapshotJobScheduleRequest {
  /**
   * The ID of the Amazon Web Services account that the dashboard snapshot job is executed in.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the dashboard that you want to start a snapshot job schedule for.
   *
   * @public
   */
  DashboardId: string | undefined;

  /**
   * The ID of the schedule that you want to start a snapshot job schedule for. The schedule ID can be found in the Amazon Quick Sight console in the **Schedules** pane of the dashboard that the schedule is configured for.
   *
   * @public
   */
  ScheduleId: string | undefined;
}

/**
 * @public
 */
export interface StartDashboardSnapshotJobScheduleResponse {
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
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource that you want to tag.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Contains a map of the key-value pairs for the resource tag or tags assigned to the resource.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {
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
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource that you want to untag.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The keys of the key-value pairs for the resource tag or tags assigned to the resource.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {
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
export interface UpdateAccountCustomizationRequest {
  /**
   * The ID for the Amazon Web Services account that you want to update Quick Sight customizations for.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The namespace that you want to update Quick Sight customizations for.
   *
   * @public
   */
  Namespace?: string | undefined;

  /**
   * The Quick Sight customizations you're updating.
   *
   * @public
   */
  AccountCustomization: AccountCustomization | undefined;
}

/**
 * @public
 */
export interface UpdateAccountCustomizationResponse {
  /**
   * The Amazon Resource Name (ARN) for the updated customization for this Amazon Web Services account.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID for the Amazon Web Services account that you want to update Quick Sight customizations for.
   *
   * @public
   */
  AwsAccountId?: string | undefined;

  /**
   * The namespace associated with the customization that you're updating.
   *
   * @public
   */
  Namespace?: string | undefined;

  /**
   * The Quick Sight customizations you're updating.
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
export interface UpdateAccountCustomPermissionRequest {
  /**
   * The name of the custom permissions profile that you want to apply to an account.
   *
   * @public
   */
  CustomPermissionsName: string | undefined;

  /**
   * The ID of the Amazon Web Services account for which you want to apply a custom permissions profile.
   *
   * @public
   */
  AwsAccountId: string | undefined;
}

/**
 * @public
 */
export interface UpdateAccountCustomPermissionResponse {
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
export interface UpdateAccountSettingsRequest {
  /**
   * The ID for the Amazon Web Services account that contains the Quick Sight settings that you want to list.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The default namespace for this Amazon Web Services account. Currently, the default is `default`. IAM users that register for the first time with Amazon Quick Sight provide an email address that becomes associated with the default namespace.
   *
   * @public
   */
  DefaultNamespace: string | undefined;

  /**
   * The email address that you want Quick Sight to send notifications to regarding your Amazon Web Services account or Quick Sight subscription.
   *
   * @public
   */
  NotificationEmail?: string | undefined;

  /**
   * A boolean value that determines whether or not an Quick Sight account can be deleted. A `True` value doesn't allow the account to be deleted and results in an error message if a user tries to make a `DeleteAccountSubscription` request. A `False` value will allow the account to be deleted.
   *
   * @public
   */
  TerminationProtectionEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateAccountSettingsResponse {
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
export interface UpdateActionConnectorRequest {
  /**
   * The Amazon Web Services account ID that contains the action connector to update.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The unique identifier of the action connector to update.
   *
   * @public
   */
  ActionConnectorId: string | undefined;

  /**
   * The new name for the action connector.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The updated authentication configuration for connecting to the external service.
   *
   * @public
   */
  AuthenticationConfig: AuthConfig | undefined;

  /**
   * The updated description of the action connector.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The updated ARN of the VPC connection to use for secure connectivity.
   *
   * @public
   */
  VpcConnectionArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateActionConnectorResponse {
  /**
   * The Amazon Resource Name (ARN) of the updated action connector.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The unique identifier of the updated action connector.
   *
   * @public
   */
  ActionConnectorId?: string | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The status of the update operation.
   *
   * @public
   */
  UpdateStatus?: ResourceStatus | undefined;

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
export interface UpdateActionConnectorPermissionsRequest {
  /**
   * The Amazon Web Services account ID that contains the action connector.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The unique identifier of the action connector whose permissions you want to update.
   *
   * @public
   */
  ActionConnectorId: string | undefined;

  /**
   * The permissions to grant to users and groups for this action connector.
   *
   * @public
   */
  GrantPermissions?: ResourcePermission[] | undefined;

  /**
   * The permissions to revoke from users and groups for this action connector.
   *
   * @public
   */
  RevokePermissions?: ResourcePermission[] | undefined;
}

/**
 * @public
 */
export interface UpdateActionConnectorPermissionsResponse {
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

  /**
   * The updated permissions configuration for the action connector.
   *
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;
}

/**
 * @public
 */
export interface UpdateAgentRequest {
  /**
   * The unique identifier for the agent to update.
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

  /**
   * The name of the agent.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A description of the agent.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The icon identifier for the agent.
   *
   * @public
   */
  IconId?: string | undefined;

  /**
   * A list of starter prompts that are displayed to users when they begin interacting with the agent.
   *
   * @public
   */
  StarterPrompts?: string[] | undefined;

  /**
   * The welcome message that is displayed when a user starts a conversation with the agent.
   *
   * @public
   */
  WelcomeMessage?: string | undefined;

  /**
   * The custom prompt configuration for the agent.
   *
   * @public
   */
  CustomPromptInput?: CustomPromptInput | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the spaces to attach to the agent.
   *
   * @public
   */
  SpacesToAdd?: string[] | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the spaces to detach from the agent.
   *
   * @public
   */
  SpacesToRemove?: string[] | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the action connectors to attach to the agent.
   *
   * @public
   */
  ActionConnectorsToAdd?: string[] | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the action connectors to detach from the agent.
   *
   * @public
   */
  ActionConnectorsToRemove?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateAgentResponse {
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
   * The status of the agent.
   *
   * @public
   */
  AgentStatus: AgentStatus | undefined;

  /**
   * A list of per-ARN failures from the spaces that were requested to be added.
   *
   * @public
   */
  FailedToAddSpaces?: FailedToUpdateAssociation[] | undefined;

  /**
   * A list of per-ARN failures from the spaces that were requested to be removed.
   *
   * @public
   */
  FailedToRemoveSpaces?: FailedToUpdateAssociation[] | undefined;

  /**
   * A list of per-ARN failures from the action connectors that were requested to be added.
   *
   * @public
   */
  FailedToAddActionConnectors?: FailedToUpdateAssociation[] | undefined;

  /**
   * A list of per-ARN failures from the action connectors that were requested to be removed.
   *
   * @public
   */
  FailedToRemoveActionConnectors?: FailedToUpdateAssociation[] | undefined;

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
export interface UpdateAgentPermissionsRequest {
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

  /**
   * The resource permissions that you want to grant on the agent.
   *
   * @public
   */
  GrantPermissions?: ResourcePermission[] | undefined;

  /**
   * The resource permissions that you want to revoke from the agent.
   *
   * @public
   */
  RevokePermissions?: ResourcePermission[] | undefined;
}

/**
 * @public
 */
export interface UpdateAgentPermissionsResponse {
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
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The resource permissions for the agent.
   *
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;
}

/**
 * @public
 */
export interface UpdateAnalysisResponse {
  /**
   * The ARN of the analysis that you're updating.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of the analysis.
   *
   * @public
   */
  AnalysisId?: string | undefined;

  /**
   * The update status of the last update that was made to the analysis.
   *
   * @public
   */
  UpdateStatus?: ResourceStatus | undefined;

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
export interface UpdateAnalysisPermissionsRequest {
  /**
   * The ID of the Amazon Web Services account that contains the analysis whose permissions you're updating. You must be using the Amazon Web Services account that the analysis is in.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the analysis whose permissions you're updating. The ID is part of the analysis URL.
   *
   * @public
   */
  AnalysisId: string | undefined;

  /**
   * A structure that describes the permissions to add and the principal to add them to.
   *
   * @public
   */
  GrantPermissions?: ResourcePermission[] | undefined;

  /**
   * A structure that describes the permissions to remove and the principal to remove them from.
   *
   * @public
   */
  RevokePermissions?: ResourcePermission[] | undefined;
}

/**
 * @public
 */
export interface UpdateAnalysisPermissionsResponse {
  /**
   * The Amazon Resource Name (ARN) of the analysis that you updated.
   *
   * @public
   */
  AnalysisArn?: string | undefined;

  /**
   * The ID of the analysis that you updated permissions for.
   *
   * @public
   */
  AnalysisId?: string | undefined;

  /**
   * A structure that describes the principals and the resource-level permissions on an analysis.
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
export interface UpdateApplicationWithTokenExchangeGrantRequest {
  /**
   * The ID of the Amazon Web Services account to be updated with a token exchange grant.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The namespace of the Quick application.
   *
   * @public
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationWithTokenExchangeGrantResponse {
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
export interface UpdateAppPermissionsRequest {
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

  /**
   * The permissions that you want to grant on the app.
   *
   * @public
   */
  GrantPermissions?: ResourcePermission[] | undefined;

  /**
   * The permissions that you want to revoke from the app.
   *
   * @public
   */
  RevokePermissions?: ResourcePermission[] | undefined;

  /**
   * The visibility to set for the app. Currently, only `PRIVATE` is accepted, which removes public (anonymous) access from the app. If you don't specify a value, the app's visibility is unchanged. Setting an app to `PUBLIC` through this operation is not supported.
   *
   * @public
   */
  Visibility?: AppVisibility | undefined;
}

/**
 * @public
 */
export interface UpdateAppPermissionsResponse {
  /**
   * The Amazon Resource Name (ARN) of the app.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of the app.
   *
   * @public
   */
  AppId?: string | undefined;

  /**
   * The updated resource permissions for the app.
   *
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;

  /**
   * The visibility of the app after the update (`PRIVATE` or `PUBLIC`).
   *
   * @public
   */
  Visibility?: AppVisibility | undefined;

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
export interface UpdateApprovalPolicyRequest {
  /**
   * The unique identifier of the approval policy to update.
   *
   * @public
   */
  PolicyId: string | undefined;

  /**
   * The name of the approval policy.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A description of the approval policy.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The list of governed actions that trigger the approval workflow.
   *
   * @public
   */
  Actions?: GovernedAction[] | undefined;

  /**
   * The list of asset types that the approval policy applies to.
   *
   * @public
   */
  AssetTypes?: AssetType[] | undefined;

  /**
   * The scoping configuration that determines who the approval policy applies to.
   *
   * @public
   */
  ApplicableTo?: ApplicableTo | undefined;

  /**
   * The list of group ARNs whose members can approve requests.
   *
   * @public
   */
  ApprovalGroups?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateApprovalPolicyResponse {
  /**
   * The updated approval policy.
   *
   * @public
   */
  Policy: ApprovalPolicy | undefined;
}

/**
 * @public
 */
export interface UpdateBrandRequest {
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
   * The definition of the brand.
   *
   * @public
   */
  BrandDefinition?: BrandDefinition | undefined;
}

/**
 * @public
 */
export interface UpdateBrandResponse {
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
export interface UpdateBrandAssignmentRequest {
  /**
   * The ID of the Amazon Web Services account that owns the brand assignment.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the brand.
   *
   * @public
   */
  BrandArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateBrandAssignmentResponse {
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
export interface UpdateBrandPublishedVersionRequest {
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
   * The ID of the published version.
   *
   * @public
   */
  VersionId: string | undefined;
}

/**
 * @public
 */
export interface UpdateBrandPublishedVersionResponse {
  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The ID of the published version.
   *
   * @public
   */
  VersionId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateCustomPermissionsRequest {
  /**
   * The ID of the Amazon Web Services account that contains the custom permissions profile that you want to update.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The name of the custom permissions profile that you want to update.
   *
   * @public
   */
  CustomPermissionsName: string | undefined;

  /**
   * A set of actions to include in the custom permissions profile.
   *
   * @public
   */
  Capabilities?: Capabilities | undefined;

  /**
   * The governance configuration for the custom permissions profile. The `UpdateCustomPermissions` operation replaces all existing `Capabilities` and `Governance` values. If you omit this parameter, Amazon Quick removes governance from the profile and the existing custom permission behavior applies.
   *
   * @public
   */
  Governance?: Governance | undefined;
}

/**
 * @public
 */
export interface UpdateCustomPermissionsResponse {
  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the custom permissions profile.
   *
   * @public
   */
  Arn?: string | undefined;

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
export interface UpdateDashboardResponse {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ARN of the dashboard, including the version number.
   *
   * @public
   */
  VersionArn?: string | undefined;

  /**
   * The ID for the dashboard.
   *
   * @public
   */
  DashboardId?: string | undefined;

  /**
   * The creation status of the request.
   *
   * @public
   */
  CreationStatus?: ResourceStatus | undefined;

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
export interface UpdateDashboardLinksRequest {
  /**
   * The ID of the Amazon Web Services account that contains the dashboard whose links you want to update.
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
   * list of analysis Amazon Resource Names (ARNs) to be linked to the dashboard.
   *
   * @public
   */
  LinkEntities: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateDashboardLinksResponse {
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
   * The Amazon Resource Name (ARN) of the dashboard.
   *
   * @public
   */
  DashboardArn?: string | undefined;

  /**
   * A list of analysis Amazon Resource Names (ARNs) to be linked to the dashboard.
   *
   * @public
   */
  LinkEntities?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateDashboardPermissionsRequest {
  /**
   * The ID of the Amazon Web Services account that contains the dashboard whose permissions you're updating.
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
   * The permissions that you want to grant on this resource.
   *
   * @public
   */
  GrantPermissions?: ResourcePermission[] | undefined;

  /**
   * The permissions that you want to revoke from this resource.
   *
   * @public
   */
  RevokePermissions?: ResourcePermission[] | undefined;

  /**
   * Grants link permissions to all users in a defined namespace.
   *
   * @public
   */
  GrantLinkPermissions?: ResourcePermission[] | undefined;

  /**
   * Revokes link permissions from all users in a defined namespace.
   *
   * @public
   */
  RevokeLinkPermissions?: ResourcePermission[] | undefined;
}

/**
 * @public
 */
export interface UpdateDashboardPermissionsResponse {
  /**
   * The Amazon Resource Name (ARN) of the dashboard.
   *
   * @public
   */
  DashboardArn?: string | undefined;

  /**
   * The ID for the dashboard.
   *
   * @public
   */
  DashboardId?: string | undefined;

  /**
   * Information about the permissions on the dashboard.
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

  /**
   * Updates the permissions of a shared link to an Quick Sight dashboard.
   *
   * @public
   */
  LinkSharingConfiguration?: LinkSharingConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateDashboardPublishedVersionRequest {
  /**
   * The ID of the Amazon Web Services account that contains the dashboard that you're updating.
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
   * The version number of the dashboard.
   *
   * @public
   */
  VersionNumber: number | undefined;
}

/**
 * @public
 */
export interface UpdateDashboardPublishedVersionResponse {
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
export interface UpdateDashboardsQAConfigurationRequest {
  /**
   * The ID of the Amazon Web Services account that contains the dashboard QA configuration that you want to update.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The status of dashboards QA configuration that you want to update.
   *
   * @public
   */
  DashboardsQAStatus: DashboardsQAStatus | undefined;
}

/**
 * @public
 */
export interface UpdateDashboardsQAConfigurationResponse {
  /**
   * A value that indicates whether the dashboard QA configuration is enabled or not.
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
export interface UpdateDataSetRequest {
  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID for the dataset that you want to update. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  DataSetId: string | undefined;

  /**
   * The display name for the dataset.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Declares the physical tables that are available in the underlying data sources.
   *
   * @public
   */
  PhysicalTableMap: Record<string, PhysicalTable> | undefined;

  /**
   * Configures the combination and transformation of the data from the physical tables. This parameter is used with the legacy data preparation experience.
   *
   * @deprecated (since 2025-10-23) Only used in the legacy data preparation experience.
   * @public
   */
  LogicalTableMap?: Record<string, LogicalTable> | undefined;

  /**
   * Indicates whether you want to import the data into SPICE.
   *
   * @public
   */
  ImportMode: DataSetImportMode | undefined;

  /**
   * Groupings of columns that work together in certain Amazon Quick Sight features. Currently, only geospatial hierarchy is supported.
   *
   * @public
   */
  ColumnGroups?: ColumnGroup[] | undefined;

  /**
   * The folder that contains fields and nested subfolders for your dataset.
   *
   * @public
   */
  FieldFolders?: Record<string, FieldFolder> | undefined;

  /**
   * The row-level security configuration for the data you want to create. This parameter is used with the legacy data preparation experience.
   *
   * @deprecated (since 2025-10-23) Only used in the legacy data preparation experience.
   * @public
   */
  RowLevelPermissionDataSet?: RowLevelPermissionDataSet | undefined;

  /**
   * The configuration of tags on a dataset to set row-level security. Row-level security tags are currently supported for anonymous embedding only. This parameter is used with the legacy data preparation experience.
   *
   * @deprecated (since 2025-10-23) Only used in the legacy data preparation experience.
   * @public
   */
  RowLevelPermissionTagConfiguration?: RowLevelPermissionTagConfiguration | undefined;

  /**
   * A set of one or more definitions of a `ColumnLevelPermissionRule`.
   *
   * @public
   */
  ColumnLevelPermissionRules?: ColumnLevelPermissionRule[] | undefined;

  /**
   * The usage configuration to apply to child datasets that reference this dataset as a source.
   *
   * @public
   */
  DataSetUsageConfiguration?: DataSetUsageConfiguration | undefined;

  /**
   * The parameter declarations of the dataset.
   *
   * @public
   */
  DatasetParameters?: DatasetParameter[] | undefined;

  /**
   * The configuration for the performance optimization of the dataset that contains a `UniqueKey` configuration.
   *
   * @public
   */
  PerformanceConfiguration?: PerformanceConfiguration | undefined;

  /**
   * The data preparation configuration for the dataset. This configuration defines the source tables, transformation steps, and destination tables used to prepare the data. Required when using the new data preparation experience.
   *
   * @public
   */
  DataPrepConfiguration?: DataPrepConfiguration | undefined;

  /**
   * The semantic model configuration for the dataset. This configuration defines how the prepared data is structured for an analysis, including table mappings and row-level security configurations. Required when using the new data preparation experience.
   *
   * @public
   */
  SemanticModelConfiguration?: SemanticModelConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateDataSetResponse {
  /**
   * The Amazon Resource Name (ARN) of the dataset.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID for the dataset that you want to update. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  DataSetId?: string | undefined;

  /**
   * The ARN for the ingestion, which is triggered as a result of dataset creation if the import mode is SPICE.
   *
   * @public
   */
  IngestionArn?: string | undefined;

  /**
   * The ID of the ingestion, which is triggered as a result of dataset creation if the import mode is SPICE.
   *
   * @public
   */
  IngestionId?: string | undefined;

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
export interface UpdateDataSetPermissionsRequest {
  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID for the dataset whose permissions you want to update. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  DataSetId: string | undefined;

  /**
   * The resource permissions that you want to grant to the dataset.
   *
   * @public
   */
  GrantPermissions?: ResourcePermission[] | undefined;

  /**
   * The resource permissions that you want to revoke from the dataset.
   *
   * @public
   */
  RevokePermissions?: ResourcePermission[] | undefined;
}

/**
 * @public
 */
export interface UpdateDataSetPermissionsResponse {
  /**
   * The Amazon Resource Name (ARN) of the dataset.
   *
   * @public
   */
  DataSetArn?: string | undefined;

  /**
   * The ID for the dataset whose permissions you want to update. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  DataSetId?: string | undefined;

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
export interface UpdateDataSourceRequest {
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

  /**
   * A display name for the data source.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The parameters that Amazon Quick Sight uses to connect to your underlying source.
   *
   * @public
   */
  DataSourceParameters?: DataSourceParameters | undefined;

  /**
   * The credentials that Amazon Quick Sight that uses to connect to your underlying source. Currently, only credentials based on user name and password are supported.
   *
   * @public
   */
  Credentials?: DataSourceCredentials | undefined;

  /**
   * Use this parameter only when you want Amazon Quick Sight to use a VPC connection when connecting to your underlying source.
   *
   * @public
   */
  VpcConnectionProperties?: VpcConnectionProperties | undefined;

  /**
   * Secure Socket Layer (SSL) properties that apply when Amazon Quick Sight connects to your underlying source.
   *
   * @public
   */
  SslProperties?: SslProperties | undefined;
}

/**
 * @public
 */
export interface UpdateDataSourceResponse {
  /**
   * The Amazon Resource Name (ARN) of the data source.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  DataSourceId?: string | undefined;

  /**
   * The update status of the data source's last update.
   *
   * @public
   */
  UpdateStatus?: ResourceStatus | undefined;

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
export interface UpdateDataSourcePermissionsRequest {
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

  /**
   * A list of resource permissions that you want to grant on the data source.
   *
   * @public
   */
  GrantPermissions?: ResourcePermission[] | undefined;

  /**
   * A list of resource permissions that you want to revoke on the data source.
   *
   * @public
   */
  RevokePermissions?: ResourcePermission[] | undefined;
}

/**
 * @public
 */
export interface UpdateDataSourcePermissionsResponse {
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
export interface UpdateDefaultQBusinessApplicationRequest {
  /**
   * The ID of the Quick Sight account that is connected to the Amazon Q Business application that you want to update.
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

  /**
   * The ID of the Amazon Q Business application that you want to update.
   *
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface UpdateDefaultQBusinessApplicationResponse {
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
export interface UpdateDlpSettingRequest {
  /**
   * The ID of the Amazon Web Services account that contains the DLP setting that you want to update.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the DLP setting that you want to update.
   *
   * @public
   */
  DlpSettingId: string | undefined;

  /**
   * An updated display name for the DLP setting.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * An updated DLP provider type. Currently, the only supported value is `MICROSOFT_PURVIEW`.
   *
   * @public
   */
  ProviderType?: DlpProviderType | undefined;

  /**
   * An updated provider-specific configuration for the DLP integration. This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
   *
   * @public
   */
  ProviderConfig?: ProviderConfig | undefined;

  /**
   * An updated behavior to apply when the DLP provider is unreachable. Valid values are `ALLOW`, `WARN`, and `BLOCK`.
   *
   * @public
   */
  ProviderOutageAction?: DlpAction | undefined;

  /**
   * Specifies whether DLP enforcement is active for this setting. Set to `true` to enable enforcement, or `false` to disable it.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateDlpSettingResponse {
  /**
   * The Amazon Resource Name (ARN) of the updated DLP setting.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The ID of the updated DLP setting.
   *
   * @public
   */
  DlpSettingId: string | undefined;

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
export interface UpdateFlowRequest {
  /**
   * The ID of the Amazon Web Services account that contains the flow that you are updating.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The unique identifier of the flow to update.
   *
   * @public
   */
  FlowId: string | undefined;

  /**
   * Updated display name for the flow. Omit to preserve the existing name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Updated description for the flow. Omit to preserve the existing description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The definition of the flow, specifying the steps and configurations. This is the flow definition in Quick Flow's internal format. The format is subject to change. When provided, all existing steps are replaced. Omit to preserve the existing definition.
   *
   * > **Note:** Always derive or depend on the flow definition from the `DescribeFlow` operation to ensure you are working with the latest format.
   *
   * @public
   */
  FlowDefinition?: __DocumentType | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFlowResponse {
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
export interface UpdateFlowPermissionsInput {
  /**
   * The ID of the Amazon Web Services account that contains the flow you are updating permissions against.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The unique identifier of the flow to update permissions for.
   *
   * @public
   */
  FlowId: string | undefined;

  /**
   * The permissions that you want to grant on this flow.
   *
   * @public
   */
  GrantPermissions?: Permission[] | undefined;

  /**
   * The permissions that you want to revoke from this flow.
   *
   * @public
   */
  RevokePermissions?: Permission[] | undefined;
}

/**
 * @public
 */
export interface UpdateFlowPermissionsOutput {
  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the flow you are updating permissions against.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The permissions on the flow after they are updated.
   *
   * @public
   */
  Permissions: Permission[] | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId: string | undefined;

  /**
   * The unique identifier of the flow with updated permissions.
   *
   * @public
   */
  FlowId: string | undefined;
}

/**
 * @public
 */
export interface UpdateFolderRequest {
  /**
   * The ID for the Amazon Web Services account that contains the folder to update.
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
   * The name of the folder.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface UpdateFolderResponse {
  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;

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
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFolderPermissionsRequest {
  /**
   * The ID for the Amazon Web Services account that contains the folder to update.
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
   * The permissions that you want to grant on a resource. Namespace ARNs are not supported `Principal` values for folder permissions.
   *
   * @public
   */
  GrantPermissions?: ResourcePermission[] | undefined;

  /**
   * The permissions that you want to revoke from a resource. Namespace ARNs are not supported `Principal` values for folder permissions.
   *
   * @public
   */
  RevokePermissions?: ResourcePermission[] | undefined;
}

/**
 * @public
 */
export interface UpdateFolderPermissionsResponse {
  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;

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
}

/**
 * @public
 */
export interface UpdateGroupRequest {
  /**
   * The name of the group that you want to update.
   *
   * @public
   */
  GroupName: string | undefined;

  /**
   * The description for the group that you want to update.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the Amazon Web Services account that contains your Amazon Quick Sight account.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The namespace of the group that you want to update.
   *
   * @public
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface UpdateGroupResponse {
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
export interface UpdateIAMPolicyAssignmentRequest {
  /**
   * The ID of the Amazon Web Services account that contains the IAM policy assignment.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The name of the assignment, also called a rule. The name must be unique within the Amazon Web Services account.
   *
   * @public
   */
  AssignmentName: string | undefined;

  /**
   * The namespace of the assignment.
   *
   * @public
   */
  Namespace: string | undefined;

  /**
   * The status of the assignment. Possible values are as follows:
   *
   * - `ENABLED` - Anything specified in this assignment is used when creating the data source.
   * - `DISABLED` - This assignment isn't used when creating the data source.
   * - `DRAFT` - This assignment is an unfinished draft and isn't used when creating the data source.
   *
   * @public
   */
  AssignmentStatus?: AssignmentStatus | undefined;

  /**
   * The ARN for the IAM policy to apply to the Amazon Quick Sight users and groups specified in this assignment.
   *
   * @public
   */
  PolicyArn?: string | undefined;

  /**
   * The Amazon Quick Sight users, groups, or both that you want to assign the policy to.
   *
   * @public
   */
  Identities?: Record<string, string[]> | undefined;
}

/**
 * @public
 */
export interface UpdateIAMPolicyAssignmentResponse {
  /**
   * The name of the assignment or rule.
   *
   * @public
   */
  AssignmentName?: string | undefined;

  /**
   * The ID of the assignment.
   *
   * @public
   */
  AssignmentId?: string | undefined;

  /**
   * The ARN for the IAM policy applied to the Amazon Quick Sight users and groups specified in this assignment.
   *
   * @public
   */
  PolicyArn?: string | undefined;

  /**
   * The Amazon Quick Sight users, groups, or both that the IAM policy is assigned to.
   *
   * @public
   */
  Identities?: Record<string, string[]> | undefined;

  /**
   * The status of the assignment. Possible values are as follows:
   *
   * - `ENABLED` - Anything specified in this assignment is used when creating the data source.
   * - `DISABLED` - This assignment isn't used when creating the data source.
   * - `DRAFT` - This assignment is an unfinished draft and isn't used when creating the data source.
   *
   * @public
   */
  AssignmentStatus?: AssignmentStatus | undefined;

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
export interface UpdateIdentityPropagationConfigRequest {
  /**
   * The ID of the Amazon Web Services account that contains the identity propagation configuration that you want to update.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The name of the Amazon Web Services service that contains the authorized targets that you want to add or update.
   *
   * @public
   */
  Service: ServiceType | undefined;

  /**
   * Specifies a list of application ARNs that represent the authorized targets for a service.
   *
   * @public
   */
  AuthorizedTargets?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateIdentityPropagationConfigResponse {
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
export interface UpdateIpRestrictionRequest {
  /**
   * The ID of the Amazon Web Services account that contains the IP rules.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * A map that describes the updated IP rules with CIDR ranges and descriptions.
   *
   * @public
   */
  IpRestrictionRuleMap?: Record<string, string> | undefined;

  /**
   * A map of VPC IDs and their corresponding rules. When you configure this parameter, traffic from all VPC endpoints that are present in the specified VPC is allowed.
   *
   * @public
   */
  VpcIdRestrictionRuleMap?: Record<string, string> | undefined;

  /**
   * A map of allowed VPC endpoint IDs and their corresponding rule descriptions.
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
}

/**
 * @public
 */
export interface UpdateIpRestrictionResponse {
  /**
   * The ID of the Amazon Web Services account that contains the IP rules.
   *
   * @public
   */
  AwsAccountId?: string | undefined;

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
export interface UpdateKeyRegistrationRequest {
  /**
   * The ID of the Amazon Web Services account that contains the customer managed key registration that you want to update.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * A list of `RegisteredCustomerManagedKey` objects to be updated to the Quick Sight account.
   *
   * @public
   */
  KeyRegistration: RegisteredCustomerManagedKey[] | undefined;
}

/**
 * A success entry that occurs when a `KeyRegistration` job is successfully applied to the Quick Sight account.
 *
 * @public
 */
export interface SuccessfulKeyRegistrationEntry {
  /**
   * The ARN of the KMS key that is associated with the `SuccessfulKeyRegistrationEntry` entry.
   *
   * @public
   */
  KeyArn: string | undefined;

  /**
   * The HTTP status of a `SuccessfulKeyRegistrationEntry` entry.
   *
   * @public
   */
  StatusCode: number | undefined;
}

/**
 * @public
 */
export interface UpdateKeyRegistrationResponse {
  /**
   * A list of all customer managed key registrations that failed to update.
   *
   * @public
   */
  FailedKeyRegistration?: FailedKeyRegistrationEntry[] | undefined;

  /**
   * A list of all customer managed key registrations that were successfully updated.
   *
   * @public
   */
  SuccessfulKeyRegistration?: SuccessfulKeyRegistrationEntry[] | undefined;

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
export interface UpdateKnowledgeBaseRequest {
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

  /**
   * The name of the knowledge base. If you don't specify a name, the existing name is retained.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A description for the knowledge base. If you don't specify a description, the existing description is retained.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The configuration settings for a knowledge base.
   *
   * @public
   */
  KnowledgeBaseConfiguration?: KnowledgeBaseConfiguration | undefined;

  /**
   * The configuration for media extraction from knowledge base documents.
   *
   * @public
   */
  MediaExtractionConfiguration?: MediaExtractionConfiguration | undefined;

  /**
   * Specifies whether email notifications are enabled for ingestion failures.
   *
   * @public
   */
  IsEmailNotificationOptedForIngestionFailures?: boolean | undefined;

  /**
   * The access control configuration for the knowledge base. If you don't specify this parameter, the existing setting is retained.
   *
   * @public
   */
  AccessControlConfiguration?: AccessControlConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateKnowledgeBaseResponse {
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
export interface UpdateKnowledgeBasePermissionsRequest {
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

  /**
   * The resource permissions that you want to grant on the knowledge base.
   *
   * @public
   */
  GrantPermissions?: ResourcePermission[] | undefined;

  /**
   * The resource permissions that you want to revoke from the knowledge base.
   *
   * @public
   */
  RevokePermissions?: ResourcePermission[] | undefined;
}

/**
 * @public
 */
export interface UpdateKnowledgeBasePermissionsResponse {
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
export interface UpdateLimitsProfileRequest {
  /**
   * The unique identifier for the limits profile to update.
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

  /**
   * A new display name for the limits profile.
   *
   * @public
   */
  profileName?: string | undefined;

  /**
   * A new description for the limits profile.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A map of resource types to their updated limit values.
   *
   * @public
   */
  resourceLimits?: Partial<Record<ResourceType, ProfileLimitValue>> | undefined;
}

/**
 * @public
 */
export interface UpdateLimitsProfileResponse {
  /**
   * The Amazon Resource Name (ARN) of the updated limits profile.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface UpdateOAuthClientApplicationRequest {
  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the OAuthClientApplication that you want to update.
   *
   * @public
   */
  OAuthClientApplicationId: string | undefined;

  /**
   * The display name for the OAuthClientApplication.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The client ID of the OAuth application that is registered with the identity provider.
   *
   * @public
   */
  ClientId?: string | undefined;

  /**
   * The client secret of the OAuth application that is registered with the identity provider.
   *
   * @public
   */
  ClientSecret?: string | undefined;

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
}

/**
 * @public
 */
export interface UpdateOAuthClientApplicationResponse {
  /**
   * The Amazon Resource Name (ARN) of the OAuthClientApplication.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of the OAuthClientApplication. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  OAuthClientApplicationId?: string | undefined;

  /**
   * The status of updating the OAuthClientApplication.
   *
   * @public
   */
  UpdateStatus?: ResourceStatus | undefined;

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
export interface UpdatePublicSharingSettingsRequest {
  /**
   * The Amazon Web Services account ID associated with your Amazon Quick Sight subscription.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * A Boolean value that indicates whether public sharing is turned on for an Quick account.
   *
   * @public
   */
  PublicSharingEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdatePublicSharingSettingsResponse {
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
export interface UpdateQPersonalizationConfigurationRequest {
  /**
   * The ID of the Amazon Web Services account account that contains the personalization configuration that the user wants to update.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * An option to allow Amazon Quick Sight to customize data stories with user specific metadata, specifically location and job information, in your IAM Identity Center instance.
   *
   * @public
   */
  PersonalizationMode: PersonalizationMode | undefined;
}

/**
 * @public
 */
export interface UpdateQPersonalizationConfigurationResponse {
  /**
   * The personalization mode that is used for the personalization configuration.
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
export interface UpdateQuickSightQSearchConfigurationRequest {
  /**
   * The ID of the Amazon Web Services account that contains the Quick Sight Q Search configuration that you want to update.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The status of the Quick Sight Q Search configuration that the user wants to update.
   *
   * @public
   */
  QSearchStatus: QSearchStatus | undefined;
}

/**
 * @public
 */
export interface UpdateQuickSightQSearchConfigurationResponse {
  /**
   * The status of the Quick Sight Q Search configuration.
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
export interface UpdateRefreshScheduleRequest {
  /**
   * The ID of the dataset.
   *
   * @public
   */
  DataSetId: string | undefined;

  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The refresh schedule.
   *
   * @public
   */
  Schedule: RefreshSchedule | undefined;
}

/**
 * @public
 */
export interface UpdateRefreshScheduleResponse {
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
   * The ID of the refresh schedule.
   *
   * @public
   */
  ScheduleId?: string | undefined;

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
export interface UpdateRoleCustomPermissionRequest {
  /**
   * The name of the custom permission that you want to update the role with.
   *
   * @public
   */
  CustomPermissionsName: string | undefined;

  /**
   * The name of role tht you want to update.
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
   * The namespace that contains the role that you want to update.
   *
   * @public
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface UpdateRoleCustomPermissionResponse {
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
export interface UpdateSelfUpgradeRequest {
  /**
   * The ID of the Amazon Web Services account that contains the self-upgrade request.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The Quick namespace for the self-upgrade request.
   *
   * @public
   */
  Namespace: string | undefined;

  /**
   * The ID of the self-upgrade request to update.
   *
   * @public
   */
  UpgradeRequestId: string | undefined;

  /**
   * The action to perform on the self-upgrade request. Valid values are `APPROVE`, `DENY`, or `VERIFY`.
   *
   * @public
   */
  Action: SelfUpgradeAdminAction | undefined;
}

/**
 * @public
 */
export interface UpdateSelfUpgradeResponse {
  /**
   * Details of the updated self-upgrade request.
   *
   * @public
   */
  SelfUpgradeRequestDetail?: SelfUpgradeRequestDetail | undefined;

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
export interface UpdateSelfUpgradeConfigurationRequest {
  /**
   * The ID of the Amazon Web Services account that contains the Quick self-upgrade configuration that you want to update.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The Quick namespace that you want to update the Quick self-upgrade configuration for.
   *
   * @public
   */
  Namespace: string | undefined;

  /**
   * The self-upgrade status that you want to set for the Quick account.
   *
   * @public
   */
  SelfUpgradeStatus: SelfUpgradeStatus | undefined;
}

/**
 * @public
 */
export interface UpdateSelfUpgradeConfigurationResponse {
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
export interface UpdateSpaceRequest {
  /**
   * The ID of the Amazon Web Services account that contains the space.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the space that you want to update.
   *
   * @public
   */
  SpaceId: string | undefined;

  /**
   * A new display name for the space.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A new description for the space.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSpaceResponse {
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
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSpacePermissionsRequest {
  /**
   * The ID of the Amazon Web Services account that contains the space.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the space that you want to update permissions for.
   *
   * @public
   */
  SpaceId: string | undefined;

  /**
   * The permissions that you want to grant on the space.
   *
   * @public
   */
  GrantPermissions?: ResourcePermission[] | undefined;

  /**
   * The permissions that you want to revoke from the space.
   *
   * @public
   */
  RevokePermissions?: ResourcePermission[] | undefined;
}

/**
 * @public
 */
export interface UpdateSpacePermissionsResponse {
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
   * The updated permissions for the space.
   *
   * @public
   */
  permissions?: ResourcePermission[] | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  requestId?: string | undefined;
}

/**
 * An operation to perform on a resource in a space.
 *
 * @public
 */
export interface SpaceResourceOperation {
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
}

/**
 * @public
 */
export interface UpdateSpaceResourcesRequest {
  /**
   * The ID of the Amazon Web Services account that contains the space.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the space that you want to update resources for.
   *
   * @public
   */
  SpaceId: string | undefined;

  /**
   * A list of resources to add to the space.
   *
   * @public
   */
  AddResources?: SpaceResourceOperation[] | undefined;

  /**
   * A list of resources to remove from the space.
   *
   * @public
   */
  RemoveResources?: SpaceResourceOperation[] | undefined;
}

/**
 * @public
 */
export interface UpdateSpaceResourcesResponse {
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
   * A list of resource operations that failed.
   *
   * @public
   */
  FailedResourceOperations?: FailedSpaceResourceOperation[] | undefined;

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
export interface UpdateSPICECapacityConfigurationRequest {
  /**
   * The ID of the Amazon Web Services account that contains the SPICE configuration that you want to update.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * Determines how SPICE capacity can be purchased. The following options are available.
   *
   * - `MANUAL`: SPICE capacity can only be purchased manually.
   * - `AUTO_PURCHASE`: Extra SPICE capacity is automatically purchased on your behalf as needed. SPICE capacity can also be purchased manually with this option.
   *
   * @public
   */
  PurchaseMode: PurchaseMode | undefined;
}

/**
 * @public
 */
export interface UpdateSPICECapacityConfigurationResponse {
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
export interface UpdateTemplateResponse {
  /**
   * The ID for the template.
   *
   * @public
   */
  TemplateId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the template.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ARN for the template, including the version information of the first version.
   *
   * @public
   */
  VersionArn?: string | undefined;

  /**
   * The creation status of the template.
   *
   * @public
   */
  CreationStatus?: ResourceStatus | undefined;

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
export interface UpdateTemplateAliasRequest {
  /**
   * The ID of the Amazon Web Services account that contains the template alias that you're updating.
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
   * The alias of the template that you want to update. If you name a specific alias, you update the version that the alias points to. You can specify the latest version of the template by providing the keyword `$LATEST` in the `AliasName` parameter. The keyword `$PUBLISHED` doesn't apply to templates.
   *
   * @public
   */
  AliasName: string | undefined;

  /**
   * The version number of the template.
   *
   * @public
   */
  TemplateVersionNumber: number | undefined;
}

/**
 * @public
 */
export interface UpdateTemplateAliasResponse {
  /**
   * The template alias.
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
export interface UpdateTemplatePermissionsRequest {
  /**
   * The ID of the Amazon Web Services account that contains the template.
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
   * A list of resource permissions to be granted on the template.
   *
   * @public
   */
  GrantPermissions?: ResourcePermission[] | undefined;

  /**
   * A list of resource permissions to be revoked from the template.
   *
   * @public
   */
  RevokePermissions?: ResourcePermission[] | undefined;
}

/**
 * @public
 */
export interface UpdateTemplatePermissionsResponse {
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
export interface UpdateThemeRequest {
  /**
   * The ID of the Amazon Web Services account that contains the theme that you're updating.
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
   * The name for the theme.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The theme ID, defined by Amazon Quick Sight, that a custom theme inherits from. All themes initially inherit from a default Quick Sight theme.
   *
   * @public
   */
  BaseThemeId: string | undefined;

  /**
   * A description of the theme version that you're updating Every time that you call `UpdateTheme`, you create a new version of the theme. Each version of the theme maintains a description of the version in `VersionDescription`.
   *
   * @public
   */
  VersionDescription?: string | undefined;

  /**
   * The theme configuration, which contains the theme display properties.
   *
   * @public
   */
  Configuration?: ThemeConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateThemeResponse {
  /**
   * The ID for the theme.
   *
   * @public
   */
  ThemeId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the theme.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the new version of the theme.
   *
   * @public
   */
  VersionArn?: string | undefined;

  /**
   * The creation status of the theme.
   *
   * @public
   */
  CreationStatus?: ResourceStatus | undefined;

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
export interface UpdateThemeAliasRequest {
  /**
   * The ID of the Amazon Web Services account that contains the theme alias that you're updating.
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
   * The name of the theme alias that you want to update.
   *
   * @public
   */
  AliasName: string | undefined;

  /**
   * The version number of the theme that the alias should reference.
   *
   * @public
   */
  ThemeVersionNumber: number | undefined;
}

/**
 * @public
 */
export interface UpdateThemeAliasResponse {
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
export interface UpdateThemePermissionsRequest {
  /**
   * The ID of the Amazon Web Services account that contains the theme.
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
   * A list of resource permissions to be granted for the theme.
   *
   * @public
   */
  GrantPermissions?: ResourcePermission[] | undefined;

  /**
   * A list of resource permissions to be revoked from the theme.
   *
   * @public
   */
  RevokePermissions?: ResourcePermission[] | undefined;
}

/**
 * @public
 */
export interface UpdateThemePermissionsResponse {
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
   * The resulting list of resource permissions for the theme.
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
export interface UpdateTopicRequest {
  /**
   * The ID of the Amazon Web Services account that contains the topic that you want to update.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the topic that you want to modify. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  TopicId: string | undefined;

  /**
   * The definition of the topic that you want to update.
   *
   * @public
   */
  Topic: TopicDetails | undefined;

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
export interface UpdateTopicResponse {
  /**
   * The ID of the topic that you want to modify. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  TopicId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the topic.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the topic refresh.
   *
   * @public
   */
  RefreshArn?: string | undefined;

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
export interface UpdateTopicPermissionsRequest {
  /**
   * The ID of the Amazon Web Services account that contains the topic that you want to update the permissions for.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the topic that you want to modify. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  TopicId: string | undefined;

  /**
   * The resource permissions that you want to grant to the topic.
   *
   * @public
   */
  GrantPermissions?: ResourcePermission[] | undefined;

  /**
   * The resource permissions that you want to revoke from the topic.
   *
   * @public
   */
  RevokePermissions?: ResourcePermission[] | undefined;
}

/**
 * @public
 */
export interface UpdateTopicPermissionsResponse {
  /**
   * The ID of the topic that you want to modify. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
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
   * A list of resource permissions on the topic.
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
export interface UpdateTopicPermissionsV2Request {
  /**
   * The ID of the Amazon Web Services account that contains the topic that you want to update the permissions for.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the topic that you want to modify. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  TopicId: string | undefined;

  /**
   * The resource permissions that you want to grant to the topic.
   *
   * @public
   */
  GrantPermissions?: ResourcePermission[] | undefined;

  /**
   * The resource permissions that you want to revoke from the topic.
   *
   * @public
   */
  RevokePermissions?: ResourcePermission[] | undefined;
}

/**
 * @public
 */
export interface UpdateTopicPermissionsV2Response {
  /**
   * The ID of the topic that you want to modify. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
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
   * A list of resource permissions on the topic.
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
export interface UpdateTopicRefreshScheduleRequest {
  /**
   * The ID of the Amazon Web Services account that contains the topic whose refresh schedule you want to update.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the topic that you want to modify. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
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

  /**
   * The definition of a refresh schedule.
   *
   * @public
   */
  RefreshSchedule: TopicRefreshSchedule | undefined;
}

/**
 * @public
 */
export interface UpdateTopicRefreshScheduleResponse {
  /**
   * The ID of the topic that you want to modify. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
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
export interface UpdateTopicV2Request {
  /**
   * The ID of the Amazon Web Services account that contains the topic that you want to update.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the topic that you want to modify. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  TopicId: string | undefined;

  /**
   * The definition of the topic that you want to update.
   *
   * @public
   */
  Topic: TopicV2Details | undefined;

  /**
   * Instructions that provide additional guidance and context for response generation.
   *
   * @public
   */
  CustomInstructions?: CustomInstructions | undefined;

  /**
   * The publish option for the topic that you want to update.
   *
   * @public
   */
  PublishOption?: TopicV2PublishOption | undefined;
}

/**
 * @public
 */
export interface UpdateTopicV2Response {
  /**
   * The Amazon Resource Name (ARN) of the topic.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of the topic that you want to modify. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  TopicId?: string | undefined;

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
export interface UpdateUserRequest {
  /**
   * The Amazon Quick Sight user name that you want to update.
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

  /**
   * The email address of the user that you want to update.
   *
   * @public
   */
  Email: string | undefined;

  /**
   * The Amazon Quick Sight role of the user. The role can be one of the following default security cohorts:
   *
   * - `READER`: A user who has read-only access to dashboards.
   * - `AUTHOR`: A user who can create data sources, datasets, analyses, and dashboards.
   * - `ADMIN`: A user who is an author, who can also manage Amazon Quick Sight settings.
   * - `READER_PRO`: Reader Pro adds Generative BI capabilities to the Reader role. Reader Pros have access to Amazon Q in Quick Sight, can build stories with Amazon Q, and can generate executive summaries from dashboards.
   * - `AUTHOR_PRO`: Author Pro adds Generative BI capabilities to the Author role. Author Pros can author dashboards with natural language with Amazon Q, build stories with Amazon Q, create Topics for Q&A, and generate executive summaries from dashboards.
   * - `ADMIN_PRO`: Admin Pros are Author Pros who can also manage Amazon Quick Sight administrative settings. Admin Pro users are billed at Author Pro pricing.
   *
   * The name of the Quick Sight role is invisible to the user except for the console screens dealing with permissions.
   *
   * @public
   */
  Role: UserRole | undefined;

  /**
   * (Enterprise edition only) The name of the custom permissions profile that you want to assign to this user. Customized permissions allows you to control a user's access by restricting access the following operations:
   *
   * - Create and update data sources
   * - Create and update datasets
   * - Create and update email reports
   * - Subscribe to email reports
   *
   * A set of custom permissions includes any combination of these restrictions. Currently, you need to create the profile names for custom permission sets by using the Quick Sight console. Then, you use the `RegisterUser` API operation to assign the named set of permissions to a Quick Sight user.
   *
   * Quick Sight custom permissions are applied through IAM policies. Therefore, they override the permissions typically granted by assigning Quick Sight users to one of the default security cohorts in Quick Sight (admin, author, reader).
   *
   * This feature is available only to Quick Sight Enterprise edition subscriptions.
   *
   * @public
   */
  CustomPermissionsName?: string | undefined;

  /**
   * A flag that you use to indicate that you want to remove all custom permissions from this user. Using this parameter resets the user to the state it was in before a custom permissions profile was applied. This parameter defaults to NULL and it doesn't accept any other value.
   *
   * @public
   */
  UnapplyCustomPermissions?: boolean | undefined;

  /**
   * The type of supported external login provider that provides identity to let a user federate into Quick Sight with an associated Identity and Access Management(IAM) role. The type of supported external login provider can be one of the following.
   *
   * - `COGNITO`: Amazon Cognito. The provider URL is cognito-identity.amazonaws.com. When choosing the `COGNITO` provider type, don’t use the "CustomFederationProviderUrl" parameter which is only needed when the external provider is custom.
   * - `CUSTOM_OIDC`: Custom OpenID Connect (OIDC) provider. When choosing `CUSTOM_OIDC` type, use the `CustomFederationProviderUrl` parameter to provide the custom OIDC provider URL.
   * - `NONE`: This clears all the previously saved external login information for a user. Use the `DescribeUser` API operation to check the external login information.
   *
   * @public
   */
  ExternalLoginFederationProviderType?: string | undefined;

  /**
   * The URL of the custom OpenID Connect (OIDC) provider that provides identity to let a user federate into Quick Sight with an associated Identity and Access Management(IAM) role. This parameter should only be used when `ExternalLoginFederationProviderType` parameter is set to `CUSTOM_OIDC`.
   *
   * @public
   */
  CustomFederationProviderUrl?: string | undefined;

  /**
   * The identity ID for a user in the external login provider.
   *
   * @public
   */
  ExternalLoginId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateUserResponse {
  /**
   * The Amazon Quick Sight user.
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
export interface UpdateUserCustomPermissionRequest {
  /**
   * The username of the user that you want to update custom permissions for.
   *
   * @public
   */
  UserName: string | undefined;

  /**
   * The ID of the Amazon Web Services account that contains the custom permission configuration that you want to update.
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

  /**
   * The name of the custom permissions that you want to update.
   *
   * @public
   */
  CustomPermissionsName: string | undefined;
}

/**
 * @public
 */
export interface UpdateUserCustomPermissionResponse {
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
export interface UpdateVPCConnectionRequest {
  /**
   * The Amazon Web Services account ID of the account that contains the VPC connection that you want to update.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the VPC connection that you're updating. This ID is a unique identifier for each Amazon Web Services Region in an Amazon Web Services account.
   *
   * @public
   */
  VPCConnectionId: string | undefined;

  /**
   * The display name for the VPC connection.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A list of subnet IDs for the VPC connection.
   *
   * @public
   */
  SubnetIds: string[] | undefined;

  /**
   * A list of security group IDs for the VPC connection.
   *
   * @public
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * A list of IP addresses of DNS resolver endpoints for the VPC connection.
   *
   * @public
   */
  DnsResolvers?: string[] | undefined;

  /**
   * An IAM role associated with the VPC connection.
   *
   * @public
   */
  RoleArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateVPCConnectionResponse {
  /**
   * The Amazon Resource Name (ARN) of the VPC connection.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of the VPC connection that you are updating. This ID is a unique identifier for each Amazon Web Services Region in anAmazon Web Services account.
   *
   * @public
   */
  VPCConnectionId?: string | undefined;

  /**
   * The update status of the VPC connection's last update.
   *
   * @public
   */
  UpdateStatus?: VPCConnectionResourceStatus | undefined;

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
 * A node in the selection tree of a `HierarchyFilter`. Each node records the values that are selected at one level of the hierarchy. Nodes nest through `Children` to record selections at deeper levels.
 *
 * The tree cannot be deeper than the number of levels declared in `HierarchyLevels`. A tree can be a maximum of 5 levels deep, and a node can have a maximum of 1,000 children.
 *
 * @public
 */
export interface HierarchyFilterNode {
  /**
   * The column that this node selects values from. This column must match the column of the corresponding level in `HierarchyFilter$HierarchyLevels`. The node at depth 1 must match the first level, the node at depth 2 must match the second level, and so on.
   *
   * @public
   */
  Column: ColumnIdentifier | undefined;

  /**
   * The value in the parent node's `HierarchyValues` that this node belongs to. When a parent selects several values, each of its children repeats one of them here to identify which branch of the hierarchy that child describes.
   *
   * Omit this attribute on the root node of `HierarchyTree`, which has no parent.
   *
   * @public
   */
  ParentValue?: string | undefined;

  /**
   * The values that are selected at this level of the hierarchy. You can specify a maximum of 2,000 values per node.
   *
   * @public
   */
  HierarchyValues?: string[] | undefined;

  /**
   * The nodes that record the selections at the next level of the hierarchy. You can specify a maximum of 1,000 children per node.
   *
   * @public
   */
  Children?: HierarchyFilterNode[] | undefined;
}

/**
 * The definition for a `TopicVisual`.
 *
 * @public
 */
export interface TopicVisual {
  /**
   * The visual ID for the `TopicVisual`.
   *
   * @public
   */
  VisualId?: string | undefined;

  /**
   * The role for the `TopicVisual`.
   *
   * @public
   */
  Role?: VisualRole | undefined;

  /**
   * The ir for the `TopicVisual`.
   *
   * @public
   */
  Ir?: TopicIR | undefined;

  /**
   * The supporting visuals for the `TopicVisual`.
   *
   * @public
   */
  SupportingVisuals?: TopicVisual[] | undefined;
}

/**
 * The definition for a `CreateTopicReviewedAnswer`.
 *
 * @public
 */
export interface CreateTopicReviewedAnswer {
  /**
   * The answer ID for the `CreateTopicReviewedAnswer`.
   *
   * @public
   */
  AnswerId: string | undefined;

  /**
   * The Dataset arn for the `CreateTopicReviewedAnswer`.
   *
   * @public
   */
  DatasetArn: string | undefined;

  /**
   * The Question to be created.
   *
   * @public
   */
  Question: string | undefined;

  /**
   * The Mir for the `CreateTopicReviewedAnswer`.
   *
   * @public
   */
  Mir?: TopicIR | undefined;

  /**
   * The `PrimaryVisual` for the `CreateTopicReviewedAnswer`.
   *
   * @public
   */
  PrimaryVisual?: TopicVisual | undefined;

  /**
   * The template for the `CreateTopicReviewedAnswer`.
   *
   * @public
   */
  Template?: TopicTemplate | undefined;
}

/**
 * A `HierarchyFilter` filters data by drilling down through an ordered list of columns. Each level in the list narrows the data by one column, and the selected values at each level determine which values are available at the next.
 *
 * @public
 */
export interface HierarchyFilter {
  /**
   * An identifier that uniquely identifies a filter within a dashboard, analysis, or template.
   *
   * @public
   */
  FilterId: string | undefined;

  /**
   * The column that anchors the filter. This column determines the dataset that the whole filter applies to, so every column in `HierarchyLevels` and in `HierarchyTree` must belong to the same dataset.
   *
   * @public
   */
  Column: ColumnIdentifier | undefined;

  /**
   * The ordered list of columns that defines the drill-down path of the filter. The first level is the top of the hierarchy. You can specify a maximum of 5 levels.
   *
   * @public
   */
  HierarchyLevels: HierarchyFilterLevel[] | undefined;

  /**
   * The tree of selected values for the filter. Each node records the values that are selected at one level of the hierarchy, and its children record the selections beneath those values. Omit this attribute to define the drill-down path without restricting any values.
   *
   * @public
   */
  HierarchyTree?: HierarchyFilterNode | undefined;

  /**
   * This option determines how null values should be treated when filtering data.
   *
   * - `ALL_VALUES`: Include null values in filtered results.
   * - `NULLS_ONLY`: Only include null values in filtered results.
   * - `NON_NULLS_ONLY`: Exclude null values from filtered results.
   *
   * @public
   */
  NullOption: FilterNullOption | undefined;

  /**
   * Determines whether the values selected in `HierarchyTree` are kept or removed. Choose one of the following options:
   *
   * - `INCLUDE`: Keep only the selected values.
   * - `EXCLUDE`: Remove the selected values.
   *
   * @public
   */
  MatchOperator: HierarchyFilterMatchOperator | undefined;

  /**
   * The default configurations for the associated controls. This applies only for filters that are scoped to multiple sheets.
   *
   * @public
   */
  DefaultFilterControlConfiguration?: DefaultFilterControlConfiguration | undefined;
}

/**
 * The deinition for a `TopicReviewedAnswer`.
 *
 * @public
 */
export interface TopicReviewedAnswer {
  /**
   * The Amazon Resource Name (ARN) of the reviewed answer.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The answer ID of the reviewed answer.
   *
   * @public
   */
  AnswerId: string | undefined;

  /**
   * The Dataset ARN for the `TopicReviewedAnswer`.
   *
   * @public
   */
  DatasetArn: string | undefined;

  /**
   * The question for the `TopicReviewedAnswer`.
   *
   * @public
   */
  Question: string | undefined;

  /**
   * The mir for the `TopicReviewedAnswer`.
   *
   * @public
   */
  Mir?: TopicIR | undefined;

  /**
   * The primary visual for the `TopicReviewedAnswer`.
   *
   * @public
   */
  PrimaryVisual?: TopicVisual | undefined;

  /**
   * The template for the `TopicReviewedAnswer`.
   *
   * @public
   */
  Template?: TopicTemplate | undefined;
}

/**
 * With a `Filter`, you can remove portions of data from a particular visual or view.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 *
 * @public
 */
export interface Filter {
  /**
   * A `CategoryFilter` filters text values.
   *
   * For more information, see [Adding text filters](https://docs.aws.amazon.com/quicksight/latest/user/add-a-text-filter-data-prep.html) in the *Amazon Quick Suite User Guide*.
   *
   * @public
   */
  CategoryFilter?: CategoryFilter | undefined;

  /**
   * A `NumericRangeFilter` filters numeric values that are either inside or outside a given numeric range.
   *
   * @public
   */
  NumericRangeFilter?: NumericRangeFilter | undefined;

  /**
   * A `NumericEqualityFilter` filters numeric values that equal or do not equal a given numeric value.
   *
   * @public
   */
  NumericEqualityFilter?: NumericEqualityFilter | undefined;

  /**
   * A `TimeEqualityFilter` filters date-time values that equal or do not equal a given date/time value.
   *
   * @public
   */
  TimeEqualityFilter?: TimeEqualityFilter | undefined;

  /**
   * A `TimeRangeFilter` filters date-time values that are either inside or outside a given date/time range.
   *
   * @public
   */
  TimeRangeFilter?: TimeRangeFilter | undefined;

  /**
   * A `RelativeDatesFilter` filters date values that are relative to a given date.
   *
   * @public
   */
  RelativeDatesFilter?: RelativeDatesFilter | undefined;

  /**
   * A `TopBottomFilter` filters data to the top or bottom values for a given column.
   *
   * @public
   */
  TopBottomFilter?: TopBottomFilter | undefined;

  /**
   * A `NestedFilter` filters data with a subset of data that is defined by the nested inner filter.
   *
   * @public
   */
  NestedFilter?: NestedFilter | undefined;

  /**
   * A `HierarchyFilter` filters data by drilling down through an ordered list of columns. Each level in the list narrows the data by one column, and the selected values at each level determine which values are available at the next.
   *
   * @public
   */
  HierarchyFilter?: HierarchyFilter | undefined;
}

/**
 * @public
 */
export interface BatchCreateTopicReviewedAnswerRequest {
  /**
   * The ID of the Amazon Web Services account that you want to create a reviewed answer in.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID for the topic reviewed answer that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  TopicId: string | undefined;

  /**
   * The definition of the Answers to be created.
   *
   * @public
   */
  Answers: CreateTopicReviewedAnswer[] | undefined;
}

/**
 * @public
 */
export interface ListTopicReviewedAnswersResponse {
  /**
   * The ID for the topic that contains the reviewed answer that you want to list. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
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
   * The definition of all Answers in the topic.
   *
   * @public
   */
  Answers?: TopicReviewedAnswer[] | undefined;

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
 * A grouping of individual filters. Filter groups are applied to the same group of visuals.
 *
 * For more information, see [Adding filter conditions (group filters) with AND and OR operators](https://docs.aws.amazon.com/quicksight/latest/user/add-a-compound-filter.html) in the *Amazon Quick Suite User Guide*.
 *
 * @public
 */
export interface FilterGroup {
  /**
   * The value that uniquely identifies a `FilterGroup` within a dashboard, template, or analysis.
   *
   * @public
   */
  FilterGroupId: string | undefined;

  /**
   * The list of filters that are present in a `FilterGroup`.
   *
   * @public
   */
  Filters: Filter[] | undefined;

  /**
   * The configuration that specifies what scope to apply to a `FilterGroup`.
   *
   * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
   *
   * @public
   */
  ScopeConfiguration: FilterScopeConfiguration | undefined;

  /**
   * The status of the `FilterGroup`.
   *
   * @public
   */
  Status?: WidgetStatus | undefined;

  /**
   * The filter new feature which can apply filter group to all data sets. Choose one of the following options:
   *
   * - `ALL_DATASETS`
   * - `SINGLE_DATASET`
   *
   * @public
   */
  CrossDataset: CrossDatasetTypes | undefined;
}

/**
 * The definition of an analysis.
 *
 * @public
 */
export interface AnalysisDefinition {
  /**
   * An array of dataset identifier declarations. This mapping allows the usage of dataset identifiers instead of dataset ARNs throughout analysis sub-structures.
   *
   * @public
   */
  DataSetIdentifierDeclarations: DataSetIdentifierDeclaration[] | undefined;

  /**
   * An array of topic identifier declarations. This mapping allows the usage of topic identifiers instead of topic ARNs throughout analysis sub-structures.
   *
   * @public
   */
  TopicIdentifierDeclarations?: TopicIdentifierDeclaration[] | undefined;

  /**
   * An array of sheet definitions for an analysis. Each `SheetDefinition` provides detailed information about a sheet within this analysis.
   *
   * @public
   */
  Sheets?: SheetDefinition[] | undefined;

  /**
   * An array of tooltip sheet definitions for an analysis. Each `TooltipSheetDefinition` provides detailed information about a tooltip sheet within this analysis.
   *
   * @public
   */
  TooltipSheets?: TooltipSheetDefinition[] | undefined;

  /**
   * An array of calculated field definitions for the analysis.
   *
   * @public
   */
  CalculatedFields?: CalculatedField[] | undefined;

  /**
   * An array of parameter declarations for an analysis.
   *
   * Parameters are named variables that can transfer a value for use by an action or an object.
   *
   * For more information, see [Parameters in Amazon Quick Sight](https://docs.aws.amazon.com/quicksight/latest/user/parameters-in-quicksight.html) in the *Amazon Quick Suite User Guide*.
   *
   * @public
   */
  ParameterDeclarations?: ParameterDeclaration[] | undefined;

  /**
   * Filter definitions for an analysis.
   *
   * For more information, see [Filtering Data in Amazon Quick Sight](https://docs.aws.amazon.com/quicksight/latest/user/adding-a-filter.html) in the *Amazon Quick Suite User Guide*.
   *
   * @public
   */
  FilterGroups?: FilterGroup[] | undefined;

  /**
   * An array of analysis-level column configurations. Column configurations can be used to set default formatting for a column to be used throughout an analysis.
   *
   * @public
   */
  ColumnConfigurations?: ColumnConfiguration[] | undefined;

  /**
   * The configuration for default analysis settings.
   *
   * @public
   */
  AnalysisDefaults?: AnalysisDefaults | undefined;

  /**
   * An array of option definitions for an analysis.
   *
   * @public
   */
  Options?: AssetOptions | undefined;

  /**
   * A structure that describes the query execution options.
   *
   * @public
   */
  QueryExecutionOptions?: QueryExecutionOptions | undefined;

  /**
   * The static files for the definition.
   *
   * @public
   */
  StaticFiles?: StaticFile[] | undefined;
}

/**
 * The contents of a dashboard.
 *
 * @public
 */
export interface DashboardVersionDefinition {
  /**
   * An array of dataset identifier declarations. With this mapping,you can use dataset identifiers instead of dataset Amazon Resource Names (ARNs) throughout the dashboard's sub-structures.
   *
   * @public
   */
  DataSetIdentifierDeclarations: DataSetIdentifierDeclaration[] | undefined;

  /**
   * An array of topic identifier declarations. With this mapping, you can use topic identifiers instead of topic Amazon Resource Names (ARNs) throughout the dashboard's sub-structures.
   *
   * @public
   */
  TopicIdentifierDeclarations?: TopicIdentifierDeclaration[] | undefined;

  /**
   * An array of sheet definitions for a dashboard.
   *
   * @public
   */
  Sheets?: SheetDefinition[] | undefined;

  /**
   * An array of tooltip sheet definitions for a dashboard.
   *
   * @public
   */
  TooltipSheets?: TooltipSheetDefinition[] | undefined;

  /**
   * An array of calculated field definitions for the dashboard.
   *
   * @public
   */
  CalculatedFields?: CalculatedField[] | undefined;

  /**
   * The parameter declarations for a dashboard. Parameters are named variables that can transfer a value for use by an action or an object.
   *
   * For more information, see [Parameters in Amazon Quick Sight](https://docs.aws.amazon.com/quicksight/latest/user/parameters-in-quicksight.html) in the *Amazon Quick Suite User Guide*.
   *
   * @public
   */
  ParameterDeclarations?: ParameterDeclaration[] | undefined;

  /**
   * The filter definitions for a dashboard.
   *
   * For more information, see [Filtering Data in Amazon Quick Sight](https://docs.aws.amazon.com/quicksight/latest/user/adding-a-filter.html) in the *Amazon Quick Suite User Guide*.
   *
   * @public
   */
  FilterGroups?: FilterGroup[] | undefined;

  /**
   * An array of dashboard-level column configurations. Column configurations are used to set the default formatting for a column that is used throughout a dashboard.
   *
   * @public
   */
  ColumnConfigurations?: ColumnConfiguration[] | undefined;

  /**
   * The configuration for default analysis settings.
   *
   * @public
   */
  AnalysisDefaults?: AnalysisDefaults | undefined;

  /**
   * An array of option definitions for a dashboard.
   *
   * @public
   */
  Options?: AssetOptions | undefined;

  /**
   * The static files for the definition.
   *
   * @public
   */
  StaticFiles?: StaticFile[] | undefined;
}

/**
 * The detailed definition of a template.
 *
 * @public
 */
export interface TemplateVersionDefinition {
  /**
   * An array of dataset configurations. These configurations define the required columns for each dataset used within a template.
   *
   * @public
   */
  DataSetConfigurations: DataSetConfiguration[] | undefined;

  /**
   * An array of topic configurations. These configurations define the required columns for each topic used within a template.
   *
   * @public
   */
  TopicConfigurations?: TopicConfiguration[] | undefined;

  /**
   * An array of sheet definitions for a template.
   *
   * @public
   */
  Sheets?: SheetDefinition[] | undefined;

  /**
   * An array of tooltip sheet definitions for a template.
   *
   * @public
   */
  TooltipSheets?: TooltipSheetDefinition[] | undefined;

  /**
   * An array of calculated field definitions for the template.
   *
   * @public
   */
  CalculatedFields?: CalculatedField[] | undefined;

  /**
   * An array of parameter declarations for a template.
   *
   * *Parameters* are named variables that can transfer a value for use by an action or an object.
   *
   * For more information, see [Parameters in Amazon Quick Sight](https://docs.aws.amazon.com/quicksight/latest/user/parameters-in-quicksight.html) in the *Amazon Quick Suite User Guide*.
   *
   * @public
   */
  ParameterDeclarations?: ParameterDeclaration[] | undefined;

  /**
   * Filter definitions for a template.
   *
   * For more information, see [Filtering Data](https://docs.aws.amazon.com/quicksight/latest/user/filtering-visual-data.html) in the *Amazon Quick Suite User Guide*.
   *
   * @public
   */
  FilterGroups?: FilterGroup[] | undefined;

  /**
   * An array of template-level column configurations. Column configurations are used to set default formatting for a column that's used throughout a template.
   *
   * @public
   */
  ColumnConfigurations?: ColumnConfiguration[] | undefined;

  /**
   * The configuration for default analysis settings.
   *
   * @public
   */
  AnalysisDefaults?: AnalysisDefaults | undefined;

  /**
   * An array of option definitions for a template.
   *
   * @public
   */
  Options?: AssetOptions | undefined;

  /**
   * A structure that describes the query execution options.
   *
   * @public
   */
  QueryExecutionOptions?: QueryExecutionOptions | undefined;

  /**
   * The static files for the definition.
   *
   * @public
   */
  StaticFiles?: StaticFile[] | undefined;
}

/**
 * @public
 */
export interface CreateAnalysisRequest {
  /**
   * The ID of the Amazon Web Services account where you are creating an analysis.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID for the analysis that you're creating. This ID displays in the URL of the analysis.
   *
   * @public
   */
  AnalysisId: string | undefined;

  /**
   * A descriptive name for the analysis that you're creating. This name displays for the analysis in the Amazon Quick Sight console.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The parameter names and override values that you want to use. An analysis can have any parameter type, and some parameters might accept multiple values.
   *
   * @public
   */
  Parameters?: _Parameters | undefined;

  /**
   * A structure that describes the principals and the resource-level permissions on an analysis. You can use the `Permissions` structure to grant permissions by providing a list of Identity and Access Management (IAM) action information for each principal listed by Amazon Resource Name (ARN).
   *
   * To specify no permissions, omit `Permissions`.
   *
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;

  /**
   * A source entity to use for the analysis that you're creating. This metadata structure contains details that describe a source template and one or more datasets or topics.
   *
   * Either a `SourceEntity` or a `Definition` must be provided in order for the request to be valid.
   *
   * @public
   */
  SourceEntity?: AnalysisSourceEntity | undefined;

  /**
   * The ARN for the theme to apply to the analysis that you're creating. To see the theme in the Amazon Quick Sight console, make sure that you have access to it.
   *
   * @public
   */
  ThemeArn?: string | undefined;

  /**
   * Contains a map of the key-value pairs for the resource tag or tags assigned to the analysis.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The definition of an analysis.
   *
   * A definition is the data model of all features in a Dashboard, Template, or Analysis.
   *
   * Either a `SourceEntity` or a `Definition` must be provided in order for the request to be valid.
   *
   * @public
   */
  Definition?: AnalysisDefinition | undefined;

  /**
   * The option to relax the validation needed to create an analysis with definition objects. This skips the validation step for specific errors.
   *
   * @public
   */
  ValidationStrategy?: ValidationStrategy | undefined;

  /**
   * When you create the analysis, Amazon Quick Sight adds the analysis to these folders.
   *
   * @public
   */
  FolderArns?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateDashboardRequest {
  /**
   * The ID of the Amazon Web Services account where you want to create the dashboard.
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

  /**
   * The display name of the dashboard.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The parameters for the creation of the dashboard, which you want to use to override the default settings. A dashboard can have any type of parameters, and some parameters might accept multiple values.
   *
   * @public
   */
  Parameters?: _Parameters | undefined;

  /**
   * A structure that contains the permissions of the dashboard. You can use this structure for granting permissions by providing a list of IAM action information for each principal ARN.
   *
   * To specify no permissions, omit the permissions list.
   *
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;

  /**
   * The entity that you are using as a source when you create the dashboard. In `SourceEntity`, you specify the type of object you're using as source. You can only create a dashboard from a template, so you use a `SourceTemplate` entity. If you need to create a dashboard from an analysis, first convert the analysis to a template by using the `CreateTemplate` API operation. For `SourceTemplate`, specify the Amazon Resource Name (ARN) of the source template. The `SourceTemplate`ARN can contain any Amazon Web Services account and any Amazon Quick Sight-supported Amazon Web Services Region.
   *
   * Use the `DataSetReferences` entity within `SourceTemplate` to list the replacement datasets for the placeholders listed in the original. The schema in each dataset must match its placeholder. Use the `TopicReferences` entity to list the replacement topics for the topic placeholders listed in the original. The schema in each topic must match its placeholder.
   *
   * Either a `SourceEntity` or a `Definition` must be provided in order for the request to be valid.
   *
   * @public
   */
  SourceEntity?: DashboardSourceEntity | undefined;

  /**
   * Contains a map of the key-value pairs for the resource tag or tags assigned to the dashboard.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * A description for the first version of the dashboard being created.
   *
   * @public
   */
  VersionDescription?: string | undefined;

  /**
   * Options for publishing the dashboard when you create it:
   *
   * - `AvailabilityStatus` for `AdHocFilteringOption` - This status can be either `ENABLED` or `DISABLED`. When this is set to `DISABLED`, Amazon Quick Sight disables the left filter pane on the published dashboard, which can be used for ad hoc (one-time) filtering. This option is `ENABLED` by default.
   * - `AvailabilityStatus` for `ExportToCSVOption` - This status can be either `ENABLED` or `DISABLED`. The visual option to export data to .CSV format isn't enabled when this is set to `DISABLED`. This option is `ENABLED` by default.
   * - `VisibilityState` for `SheetControlsOption` - This visibility state can be either `COLLAPSED` or `EXPANDED`. This option is `COLLAPSED` by default.
   * - `AvailabilityStatus` for `QuickSuiteActionsOption` - This status can be either `ENABLED` or `DISABLED`. Features related to Actions in Amazon Quick Suite on dashboards are disabled when this is set to `DISABLED`. This option is `DISABLED` by default.
   * - `AvailabilityStatus` for `ExecutiveSummaryOption` - This status can be either `ENABLED` or `DISABLED`. The option to build an executive summary is disabled when this is set to `DISABLED`. This option is `ENABLED` by default.
   * - `AvailabilityStatus` for `DataStoriesSharingOption` - This status can be either `ENABLED` or `DISABLED`. The option to share a data story is disabled when this is set to `DISABLED`. This option is `ENABLED` by default.
   *
   * @public
   */
  DashboardPublishOptions?: DashboardPublishOptions | undefined;

  /**
   * The Amazon Resource Name (ARN) of the theme that is being used for this dashboard. If you add a value for this field, it overrides the value that is used in the source entity. The theme ARN must exist in the same Amazon Web Services account where you create the dashboard.
   *
   * @public
   */
  ThemeArn?: string | undefined;

  /**
   * The definition of a dashboard.
   *
   * A definition is the data model of all features in a Dashboard, Template, or Analysis.
   *
   * Either a `SourceEntity` or a `Definition` must be provided in order for the request to be valid.
   *
   * @public
   */
  Definition?: DashboardVersionDefinition | undefined;

  /**
   * The option to relax the validation needed to create a dashboard with definition objects. This option skips the validation step for specific errors.
   *
   * @public
   */
  ValidationStrategy?: ValidationStrategy | undefined;

  /**
   * When you create the dashboard, Amazon Quick Sight adds the dashboard to these folders.
   *
   * @public
   */
  FolderArns?: string[] | undefined;

  /**
   * A structure that contains the permissions of a shareable link to the dashboard.
   *
   * @public
   */
  LinkSharingConfiguration?: LinkSharingConfiguration | undefined;

  /**
   * A list of analysis Amazon Resource Names (ARNs) to be linked to the dashboard.
   *
   * @public
   */
  LinkEntities?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateTemplateRequest {
  /**
   * The ID for the Amazon Web Services account that the group is in. You use the ID for the Amazon Web Services account that contains your Amazon Quick Sight account.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * An ID for the template that you want to create. This template is unique per Amazon Web Services Region; in each Amazon Web Services account.
   *
   * @public
   */
  TemplateId: string | undefined;

  /**
   * A display name for the template.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A list of resource permissions to be set on the template.
   *
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;

  /**
   * The entity that you are using as a source when you create the template. In `SourceEntity`, you specify the type of object you're using as source: `SourceTemplate` for a template or `SourceAnalysis` for an analysis. Both of these require an Amazon Resource Name (ARN). For `SourceTemplate`, specify the ARN of the source template. For `SourceAnalysis`, specify the ARN of the source analysis. The `SourceTemplate` ARN can contain any Amazon Web Services account and any Quick Sight-supported Amazon Web Services Region.
   *
   * Use the `DataSetReferences` entity within `SourceTemplate` or `SourceAnalysis` to list the replacement datasets for the placeholders listed in the original. The schema in each dataset must match its placeholder. Use the `TopicReferences` entity to list the replacement topics for the topic placeholders listed in the original. The schema in each topic must match its placeholder.
   *
   * Either a `SourceEntity` or a `Definition` must be provided in order for the request to be valid.
   *
   * @public
   */
  SourceEntity?: TemplateSourceEntity | undefined;

  /**
   * Contains a map of the key-value pairs for the resource tag or tags assigned to the resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * A description of the current template version being created. This API operation creates the first version of the template. Every time `UpdateTemplate` is called, a new version is created. Each version of the template maintains a description of the version in the `VersionDescription` field.
   *
   * @public
   */
  VersionDescription?: string | undefined;

  /**
   * The definition of a template.
   *
   * A definition is the data model of all features in a Dashboard, Template, or Analysis.
   *
   * Either a `SourceEntity` or a `Definition` must be provided in order for the request to be valid.
   *
   * @public
   */
  Definition?: TemplateVersionDefinition | undefined;

  /**
   * TThe option to relax the validation needed to create a template with definition objects. This skips the validation step for specific errors.
   *
   * @public
   */
  ValidationStrategy?: ValidationStrategy | undefined;
}

/**
 * @public
 */
export interface DescribeAnalysisDefinitionResponse {
  /**
   * The ID of the analysis described.
   *
   * @public
   */
  AnalysisId?: string | undefined;

  /**
   * The descriptive name of the analysis.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Errors associated with the analysis.
   *
   * @public
   */
  Errors?: AnalysisError[] | undefined;

  /**
   * Status associated with the analysis.
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
  ResourceStatus?: ResourceStatus | undefined;

  /**
   * The ARN of the theme of the analysis.
   *
   * @public
   */
  ThemeArn?: string | undefined;

  /**
   * The definition of an analysis.
   *
   * A definition is the data model of all features in a Dashboard, Template, or Analysis.
   *
   * @public
   */
  Definition?: AnalysisDefinition | undefined;

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
export interface DescribeDashboardDefinitionResponse {
  /**
   * The ID of the dashboard described.
   *
   * @public
   */
  DashboardId?: string | undefined;

  /**
   * Errors associated with this dashboard version.
   *
   * @public
   */
  Errors?: DashboardError[] | undefined;

  /**
   * The display name of the dashboard.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Status associated with the dashboard version.
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
  ResourceStatus?: ResourceStatus | undefined;

  /**
   * The ARN of the theme of the dashboard.
   *
   * @public
   */
  ThemeArn?: string | undefined;

  /**
   * The definition of a dashboard.
   *
   * A definition is the data model of all features in a Dashboard, Template, or Analysis.
   *
   * @public
   */
  Definition?: DashboardVersionDefinition | undefined;

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
   * Options for publishing the dashboard:
   *
   * - `AvailabilityStatus` for `AdHocFilteringOption` - This status can be either `ENABLED` or `DISABLED`. When this is set to `DISABLED`, Amazon Quick Sight disables the left filter pane on the published dashboard, which can be used for ad hoc (one-time) filtering. This option is `ENABLED` by default.
   * - `AvailabilityStatus` for `ExportToCSVOption` - This status can be either `ENABLED` or `DISABLED`. The visual option to export data to .CSV format isn't enabled when this is set to `DISABLED`. This option is `ENABLED` by default.
   * - `VisibilityState` for `SheetControlsOption` - This visibility state can be either `COLLAPSED` or `EXPANDED`. This option is `COLLAPSED` by default.
   * - `AvailabilityStatus` for `QuickSuiteActionsOption` - This status can be either `ENABLED` or `DISABLED`. Features related to Actions in Amazon Quick Suite on dashboards are disabled when this is set to `DISABLED`. This option is `DISABLED` by default.
   * - `AvailabilityStatus` for `ExecutiveSummaryOption` - This status can be either `ENABLED` or `DISABLED`. The option to build an executive summary is disabled when this is set to `DISABLED`. This option is `ENABLED` by default.
   * - `AvailabilityStatus` for `DataStoriesSharingOption` - This status can be either `ENABLED` or `DISABLED`. The option to share a data story is disabled when this is set to `DISABLED`. This option is `ENABLED` by default.
   *
   * @public
   */
  DashboardPublishOptions?: DashboardPublishOptions | undefined;
}

/**
 * @public
 */
export interface DescribeTemplateDefinitionResponse {
  /**
   * The descriptive name of the template.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The ID of the template described.
   *
   * @public
   */
  TemplateId?: string | undefined;

  /**
   * Errors associated with the template version.
   *
   * @public
   */
  Errors?: TemplateError[] | undefined;

  /**
   * Status associated with the template.
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
  ResourceStatus?: ResourceStatus | undefined;

  /**
   * The ARN of the theme of the template.
   *
   * @public
   */
  ThemeArn?: string | undefined;

  /**
   * The definition of the template.
   *
   * A definition is the data model of all features in a Dashboard, Template, or Analysis.
   *
   * @public
   */
  Definition?: TemplateVersionDefinition | undefined;

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
export interface UpdateAnalysisRequest {
  /**
   * The ID of the Amazon Web Services account that contains the analysis that you're updating.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID for the analysis that you're updating. This ID displays in the URL of the analysis.
   *
   * @public
   */
  AnalysisId: string | undefined;

  /**
   * A descriptive name for the analysis that you're updating. This name displays for the analysis in the Amazon Quick Sight console.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The parameter names and override values that you want to use. An analysis can have any parameter type, and some parameters might accept multiple values.
   *
   * @public
   */
  Parameters?: _Parameters | undefined;

  /**
   * A source entity to use for the analysis that you're updating. This metadata structure contains details that describe a source template and one or more datasets or topics.
   *
   * @public
   */
  SourceEntity?: AnalysisSourceEntity | undefined;

  /**
   * The Amazon Resource Name (ARN) for the theme to apply to the analysis that you're creating. To see the theme in the Amazon Quick Sight console, make sure that you have access to it.
   *
   * @public
   */
  ThemeArn?: string | undefined;

  /**
   * The definition of an analysis.
   *
   * A definition is the data model of all features in a Dashboard, Template, or Analysis.
   *
   * @public
   */
  Definition?: AnalysisDefinition | undefined;

  /**
   * The option to relax the validation needed to update an analysis with definition objects. This skips the validation step for specific errors.
   *
   * @public
   */
  ValidationStrategy?: ValidationStrategy | undefined;
}

/**
 * @public
 */
export interface UpdateDashboardRequest {
  /**
   * The ID of the Amazon Web Services account that contains the dashboard that you're updating.
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
   * The display name of the dashboard.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The entity that you are using as a source when you update the dashboard. In `SourceEntity`, you specify the type of object you're using as source. You can only update a dashboard from a template, so you use a `SourceTemplate` entity. If you need to update a dashboard from an analysis, first convert the analysis to a template by using the `CreateTemplate` API operation. For `SourceTemplate`, specify the Amazon Resource Name (ARN) of the source template. The `SourceTemplate` ARN can contain any Amazon Web Services account and any Amazon Quick Sight-supported Amazon Web Services Region.
   *
   * Use the `DataSetReferences` entity within `SourceTemplate` to list the replacement datasets for the placeholders listed in the original. The schema in each dataset must match its placeholder. Use the `TopicReferences` entity to list the replacement topics for the topic placeholders listed in the original. The schema in each topic must match its placeholder.
   *
   * @public
   */
  SourceEntity?: DashboardSourceEntity | undefined;

  /**
   * A structure that contains the parameters of the dashboard. These are parameter overrides for a dashboard. A dashboard can have any type of parameters, and some parameters might accept multiple values.
   *
   * @public
   */
  Parameters?: _Parameters | undefined;

  /**
   * A description for the first version of the dashboard being created.
   *
   * @public
   */
  VersionDescription?: string | undefined;

  /**
   * Options for publishing the dashboard when you create it:
   *
   * - `AvailabilityStatus` for `AdHocFilteringOption` - This status can be either `ENABLED` or `DISABLED`. When this is set to `DISABLED`, Amazon Quick Sight disables the left filter pane on the published dashboard, which can be used for ad hoc (one-time) filtering. This option is `ENABLED` by default.
   * - `AvailabilityStatus` for `ExportToCSVOption` - This status can be either `ENABLED` or `DISABLED`. The visual option to export data to .CSV format isn't enabled when this is set to `DISABLED`. This option is `ENABLED` by default.
   * - `VisibilityState` for `SheetControlsOption` - This visibility state can be either `COLLAPSED` or `EXPANDED`. This option is `COLLAPSED` by default.
   * - `AvailabilityStatus` for `QuickSuiteActionsOption` - This status can be either `ENABLED` or `DISABLED`. Features related to Actions in Amazon Quick Suite on dashboards are disabled when this is set to `DISABLED`. This option is `DISABLED` by default.
   * - `AvailabilityStatus` for `ExecutiveSummaryOption` - This status can be either `ENABLED` or `DISABLED`. The option to build an executive summary is disabled when this is set to `DISABLED`. This option is `ENABLED` by default.
   * - `AvailabilityStatus` for `DataStoriesSharingOption` - This status can be either `ENABLED` or `DISABLED`. The option to share a data story is disabled when this is set to `DISABLED`. This option is `ENABLED` by default.
   *
   * @public
   */
  DashboardPublishOptions?: DashboardPublishOptions | undefined;

  /**
   * The Amazon Resource Name (ARN) of the theme that is being used for this dashboard. If you add a value for this field, it overrides the value that was originally associated with the entity. The theme ARN must exist in the same Amazon Web Services account where you create the dashboard.
   *
   * @public
   */
  ThemeArn?: string | undefined;

  /**
   * The definition of a dashboard.
   *
   * A definition is the data model of all features in a Dashboard, Template, or Analysis.
   *
   * @public
   */
  Definition?: DashboardVersionDefinition | undefined;

  /**
   * The option to relax the validation needed to update a dashboard with definition objects. This skips the validation step for specific errors.
   *
   * @public
   */
  ValidationStrategy?: ValidationStrategy | undefined;
}

/**
 * @public
 */
export interface UpdateTemplateRequest {
  /**
   * The ID of the Amazon Web Services account that contains the template that you're updating.
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
   * The entity that you are using as a source when you update the template. In `SourceEntity`, you specify the type of object you're using as source: `SourceTemplate` for a template or `SourceAnalysis` for an analysis. Both of these require an Amazon Resource Name (ARN). For `SourceTemplate`, specify the ARN of the source template. For `SourceAnalysis`, specify the ARN of the source analysis. The `SourceTemplate` ARN can contain any Amazon Web Services account and any Quick Sight-supported Amazon Web Services Region;.
   *
   * Use the `DataSetReferences` entity within `SourceTemplate` or `SourceAnalysis` to list the replacement datasets for the placeholders listed in the original. The schema in each dataset must match its placeholder. Use the `TopicReferences` entity to list the replacement topics for the topic placeholders listed in the original. The schema in each topic must match its placeholder.
   *
   * @public
   */
  SourceEntity?: TemplateSourceEntity | undefined;

  /**
   * A description of the current template version that is being updated. Every time you call `UpdateTemplate`, you create a new version of the template. Each version of the template maintains a description of the version in the `VersionDescription` field.
   *
   * @public
   */
  VersionDescription?: string | undefined;

  /**
   * The name for the template.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The definition of a template.
   *
   * A definition is the data model of all features in a Dashboard, Template, or Analysis.
   *
   * @public
   */
  Definition?: TemplateVersionDefinition | undefined;

  /**
   * The option to relax the validation needed to update a template with definition objects. This skips the validation step for specific errors.
   *
   * @public
   */
  ValidationStrategy?: ValidationStrategy | undefined;
}
