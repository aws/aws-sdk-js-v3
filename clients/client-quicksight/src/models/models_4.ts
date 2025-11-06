// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  AccountCustomization,
  AccountInfo,
  AccountSettings,
  ActionConnector,
  ActionConnectorFilterSensitiveLog,
  AmazonQInQuickSightConsoleConfigurations,
  AmazonQInQuickSightDashboardConfigurations,
  Analysis,
  AnalysisError,
  Entity,
  FilterOperator,
  ResourceStatus,
  Sheet,
  TopicTimeGranularity,
} from "./models_0";

import {
  AnalysisDefinition,
  AnonymousUserEmbeddingExperienceConfiguration,
  AnonymousUserSnapshotJobResult,
  AssetBundleCloudFormationOverridePropertyConfiguration,
  AssetBundleExportFormat,
  AssetBundleExportJobError,
  AssetBundleExportJobStatus,
  AssetBundleExportJobValidationStrategy,
  AssetBundleExportJobWarning,
  AssetBundleImportFailureAction,
  AssetBundleImportJobError,
  AssetBundleImportJobOverrideParameters,
  AssetBundleImportJobOverridePermissions,
  AssetBundleImportJobOverrideTags,
  AssetBundleImportJobOverrideValidationStrategy,
  AssetBundleImportJobStatus,
  AssetBundleImportJobWarning,
  AssetBundleImportSourceDescription,
  AssetBundleImportSourceDescriptionFilterSensitiveLog,
  AssignmentStatus,
  DashboardVisualId,
  DataSetRefreshProperties,
  DataSourceParameters,
  ServiceType,
  SharedViewConfigurations,
  SnapshotFile,
  SnapshotS3DestinationConfiguration,
  SslProperties,
  Tag,
  VpcConnectionProperties,
} from "./models_2";

import {
  _Parameters,
  _ParametersFilterSensitiveLog,
  BookmarksConfigurations,
  BrandDefinition,
  BrandDetail,
  Capabilities,
  ColumnDataSubType,
  ColumnDataType,
  ColumnGroup,
  ColumnLevelPermissionRule,
  ConstantType,
  CustomInstructions,
  CustomInstructionsFilterSensitiveLog,
  DashboardPublishOptions,
  DashboardVersionDefinition,
  DataAggregation,
  DataPrepConfiguration,
  DataSetConfiguration,
  DataSetImportMode,
  DatasetParameter,
  DataSetUsageConfiguration,
  DataSetUseAs,
  DataSourceType,
  FieldFolder,
  FilterClass,
  FolderType,
  Group,
  GroupMember,
  IdentityStore,
  IngestionStatus,
  LinkSharingConfiguration,
  LogicalTable,
  LogicalTableFilterSensitiveLog,
  MemberType,
  NamespaceStatus,
  PerformanceConfiguration,
  PhysicalTable,
  PhysicalTableFilterSensitiveLog,
  RefreshSchedule,
  ResourcePermission,
  Role,
  RowLevelPermissionDataSet,
  RowLevelPermissionTagConfiguration,
  RowLevelPermissionTagConfigurationFilterSensitiveLog,
  SemanticModelConfiguration,
  SemanticModelConfigurationFilterSensitiveLog,
  SharingModel,
  TemplateAlias,
  TemplateVersionDefinition,
  ThemeAlias,
  ThemeConfiguration,
  TopicCalculatedField,
  TopicCalculatedFieldFilterSensitiveLog,
  TopicCategoryFilter,
  TopicCategoryFilterFilterSensitiveLog,
  TopicColumn,
  TopicColumnFilterSensitiveLog,
  TopicConfigOptions,
} from "./models_3";

import { QuickSightServiceException as __BaseException } from "./QuickSightServiceException";

/**
 * <p>A structure that represents a range constant.</p>
 * @public
 */
export interface RangeConstant {
  /**
   * <p>The minimum value for a range constant.</p>
   * @public
   */
  Minimum?: string | undefined;

  /**
   * <p>The maximum value for a range constant.</p>
   * @public
   */
  Maximum?: string | undefined;
}

/**
 * <p>A constant value that is used in a range filter to specify the endpoints of the range.</p>
 * @public
 */
export interface TopicRangeFilterConstant {
  /**
   * <p>The data type of the constant value that is used in a range filter. Valid values for this structure are <code>RANGE</code>.</p>
   * @public
   */
  ConstantType?: ConstantType | undefined;

  /**
   * <p>The value of the constant that is used to specify the endpoints of a range filter.</p>
   * @public
   */
  RangeConstant?: RangeConstant | undefined;
}

/**
 * <p>A filter used to restrict data based on a range of dates or times.</p>
 * @public
 */
export interface TopicDateRangeFilter {
  /**
   * <p>A Boolean value that indicates whether the date range filter should include the boundary values. If
   *          set to true, the filter includes the start and end dates. If set to false, the filter
   *          excludes them.</p>
   * @public
   */
  Inclusive?: boolean | undefined;

  /**
   * <p>The constant used in a date range filter.</p>
   * @public
   */
  Constant?: TopicRangeFilterConstant | undefined;
}

/**
 * @public
 * @enum
 */
export const NamedFilterType = {
  CATEGORY_FILTER: "CATEGORY_FILTER",
  DATE_RANGE_FILTER: "DATE_RANGE_FILTER",
  NULL_FILTER: "NULL_FILTER",
  NUMERIC_EQUALITY_FILTER: "NUMERIC_EQUALITY_FILTER",
  NUMERIC_RANGE_FILTER: "NUMERIC_RANGE_FILTER",
  RELATIVE_DATE_FILTER: "RELATIVE_DATE_FILTER",
} as const;

/**
 * @public
 */
export type NamedFilterType = (typeof NamedFilterType)[keyof typeof NamedFilterType];

/**
 * <p>A structure that represents a singular filter constant, used in filters to specify a single value to match against.</p>
 * @public
 */
export interface TopicSingularFilterConstant {
  /**
   * <p>The type of the singular filter constant. Valid values for this structure are <code>SINGULAR</code>.</p>
   * @public
   */
  ConstantType?: ConstantType | undefined;

  /**
   * <p>The value of the singular filter constant.</p>
   * @public
   */
  SingularConstant?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const NullFilterType = {
  ALL_VALUES: "ALL_VALUES",
  NON_NULLS_ONLY: "NON_NULLS_ONLY",
  NULLS_ONLY: "NULLS_ONLY",
} as const;

/**
 * @public
 */
export type NullFilterType = (typeof NullFilterType)[keyof typeof NullFilterType];

/**
 * <p>The structure that represents a null filter.</p>
 * @public
 */
export interface TopicNullFilter {
  /**
   * <p>The type of the null filter. Valid values for this type are <code>NULLS_ONLY</code>, <code>NON_NULLS_ONLY</code>, and <code>ALL_VALUES</code>.</p>
   * @public
   */
  NullFilterType?: NullFilterType | undefined;

  /**
   * <p>A structure that represents a singular filter constant, used in filters to specify a single value to match against.</p>
   * @public
   */
  Constant?: TopicSingularFilterConstant | undefined;

  /**
   * <p>A Boolean value that indicates if the filter is inverse.</p>
   * @public
   */
  Inverse?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const NamedFilterAggType = {
  AVERAGE: "AVERAGE",
  COUNT: "COUNT",
  DISTINCT_COUNT: "DISTINCT_COUNT",
  MAX: "MAX",
  MEDIAN: "MEDIAN",
  MIN: "MIN",
  NO_AGGREGATION: "NO_AGGREGATION",
  STDEV: "STDEV",
  STDEVP: "STDEVP",
  SUM: "SUM",
  VAR: "VAR",
  VARP: "VARP",
} as const;

/**
 * @public
 */
export type NamedFilterAggType = (typeof NamedFilterAggType)[keyof typeof NamedFilterAggType];

/**
 * <p>A filter that filters topics based on the value of a numeric field. The filter includes only topics whose numeric field value matches the specified value.</p>
 * @public
 */
export interface TopicNumericEqualityFilter {
  /**
   * <p>The constant used in a numeric equality filter.</p>
   * @public
   */
  Constant?: TopicSingularFilterConstant | undefined;

  /**
   * <p>An aggregation function that specifies how to calculate the value of a numeric field for
   *          a topic. Valid values for this structure are <code>NO_AGGREGATION</code>, <code>SUM</code>,
   *             <code>AVERAGE</code>, <code>COUNT</code>, <code>DISTINCT_COUNT</code>, <code>MAX</code>,
   *             <code>MEDIAN</code>, <code>MIN</code>, <code>STDEV</code>, <code>STDEVP</code>,
   *             <code>VAR</code>,
   *          and <code>VARP</code>.</p>
   * @public
   */
  Aggregation?: NamedFilterAggType | undefined;
}

/**
 * <p>A filter that filters topics based on the value of a numeric field. The filter includes only topics whose numeric field value falls within the specified range.</p>
 * @public
 */
export interface TopicNumericRangeFilter {
  /**
   * <p>A Boolean value that indicates whether the endpoints of the numeric range are included in the filter.
   *          If set to true, topics whose numeric field value is equal to the endpoint values will be
   *          included in the filter. If set to false, topics whose numeric field value is equal to the
   *          endpoint values will be excluded from the filter.</p>
   * @public
   */
  Inclusive?: boolean | undefined;

  /**
   * <p>The constant used in a
   *          numeric range filter.</p>
   * @public
   */
  Constant?: TopicRangeFilterConstant | undefined;

  /**
   * <p>An aggregation function that specifies how to calculate the value of a numeric field for
   *          a topic, Valid values for this structure are <code>NO_AGGREGATION</code>, <code>SUM</code>,
   *             <code>AVERAGE</code>, <code>COUNT</code>, <code>DISTINCT_COUNT</code>, <code>MAX</code>,
   *             <code>MEDIAN</code>, <code>MIN</code>, <code>STDEV</code>, <code>STDEVP</code>,
   *             <code>VAR</code>,
   *          and <code>VARP</code>.</p>
   * @public
   */
  Aggregation?: NamedFilterAggType | undefined;
}

/**
 * @public
 * @enum
 */
export const TopicRelativeDateFilterFunction = {
  LAST: "LAST",
  NEXT: "NEXT",
  NOW: "NOW",
  PREVIOUS: "PREVIOUS",
  THIS: "THIS",
} as const;

/**
 * @public
 */
export type TopicRelativeDateFilterFunction =
  (typeof TopicRelativeDateFilterFunction)[keyof typeof TopicRelativeDateFilterFunction];

/**
 * <p>A structure that represents a relative date filter.</p>
 * @public
 */
export interface TopicRelativeDateFilter {
  /**
   * <p>The level of time precision that is used to aggregate <code>DateTime</code> values.</p>
   * @public
   */
  TimeGranularity?: TopicTimeGranularity | undefined;

  /**
   * <p>The function to be used in a relative date filter to determine the range of dates to include in the results. Valid values for this structure are <code>BEFORE</code>, <code>AFTER</code>, and <code>BETWEEN</code>.</p>
   * @public
   */
  RelativeDateFilterFunction?: TopicRelativeDateFilterFunction | undefined;

  /**
   * <p>The constant used in a
   *          relative date filter.</p>
   * @public
   */
  Constant?: TopicSingularFilterConstant | undefined;
}

/**
 * <p>A structure that represents a filter used to select items for a topic.</p>
 * @public
 */
export interface TopicFilter {
  /**
   * <p>A description of the filter used to select items for a topic.</p>
   * @public
   */
  FilterDescription?: string | undefined;

  /**
   * <p>The class of the filter. Valid values for this structure are
   *             <code>ENFORCED_VALUE_FILTER</code>,
   *          <code>CONDITIONAL_VALUE_FILTER</code>,
   *          and <code>NAMED_VALUE_FILTER</code>.</p>
   * @public
   */
  FilterClass?: FilterClass | undefined;

  /**
   * <p>The name of the filter.</p>
   * @public
   */
  FilterName: string | undefined;

  /**
   * <p>The other names or aliases for the filter.</p>
   * @public
   */
  FilterSynonyms?: string[] | undefined;

  /**
   * <p>The name of the field that the filter operates on.</p>
   * @public
   */
  OperandFieldName: string | undefined;

  /**
   * <p>The type of the filter. Valid values for this structure are
   *          <code>CATEGORY_FILTER</code>, <code>NUMERIC_EQUALITY_FILTER</code>,
   *             <code>NUMERIC_RANGE_FILTER</code>,
   *          <code>DATE_RANGE_FILTER</code>,
   *          and <code>RELATIVE_DATE_FILTER</code>.</p>
   * @public
   */
  FilterType?: NamedFilterType | undefined;

  /**
   * <p>The category filter that is associated with this filter.</p>
   * @public
   */
  CategoryFilter?: TopicCategoryFilter | undefined;

  /**
   * <p>The numeric equality filter.</p>
   * @public
   */
  NumericEqualityFilter?: TopicNumericEqualityFilter | undefined;

  /**
   * <p>The numeric range filter.</p>
   * @public
   */
  NumericRangeFilter?: TopicNumericRangeFilter | undefined;

  /**
   * <p>The date range filter.</p>
   * @public
   */
  DateRangeFilter?: TopicDateRangeFilter | undefined;

  /**
   * <p>The relative date filter.</p>
   * @public
   */
  RelativeDateFilter?: TopicRelativeDateFilter | undefined;

  /**
   * <p>The null filter.</p>
   * @public
   */
  NullFilter?: TopicNullFilter | undefined;
}

/**
 * @public
 * @enum
 */
export const NamedEntityAggType = {
  AVERAGE: "AVERAGE",
  COUNT: "COUNT",
  CUSTOM: "CUSTOM",
  DISTINCT_COUNT: "DISTINCT_COUNT",
  MAX: "MAX",
  MEDIAN: "MEDIAN",
  MIN: "MIN",
  PERCENTILE: "PERCENTILE",
  STDEV: "STDEV",
  STDEVP: "STDEVP",
  SUM: "SUM",
  VAR: "VAR",
  VARP: "VARP",
} as const;

/**
 * @public
 */
export type NamedEntityAggType = (typeof NamedEntityAggType)[keyof typeof NamedEntityAggType];

/**
 * <p>A structure that represents a metric.</p>
 * @public
 */
export interface NamedEntityDefinitionMetric {
  /**
   * <p>The aggregation of a named entity. Valid values for this structure are <code>SUM</code>,
   *             <code>MIN</code>, <code>MAX</code>, <code>COUNT</code>, <code>AVERAGE</code>,
   *             <code>DISTINCT_COUNT</code>, <code>STDEV</code>, <code>STDEVP</code>, <code>VAR</code>,
   *             <code>VARP</code>, <code>PERCENTILE</code>,
   *          <code>MEDIAN</code>,
   *          and <code>CUSTOM</code>.</p>
   * @public
   */
  Aggregation?: NamedEntityAggType | undefined;

  /**
   * <p>The additional parameters for an aggregation function.</p>
   * @public
   */
  AggregationFunctionParameters?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const PropertyRole = {
  ID: "ID",
  PRIMARY: "PRIMARY",
} as const;

/**
 * @public
 */
export type PropertyRole = (typeof PropertyRole)[keyof typeof PropertyRole];

/**
 * @public
 * @enum
 */
export const PropertyUsage = {
  DIMENSION: "DIMENSION",
  INHERIT: "INHERIT",
  MEASURE: "MEASURE",
} as const;

/**
 * @public
 */
export type PropertyUsage = (typeof PropertyUsage)[keyof typeof PropertyUsage];

/**
 * <p>A structure that represents a named entity.</p>
 * @public
 */
export interface NamedEntityDefinition {
  /**
   * <p>The name of the entity.</p>
   * @public
   */
  FieldName?: string | undefined;

  /**
   * <p>The property name to be used for the named entity.</p>
   * @public
   */
  PropertyName?: string | undefined;

  /**
   * <p>The property role. Valid values for this structure are <code>PRIMARY</code> and <code>ID</code>.</p>
   * @public
   */
  PropertyRole?: PropertyRole | undefined;

  /**
   * <p>The property usage. Valid values for this structure are <code>INHERIT</code>,
   *             <code>DIMENSION</code>,
   *          and <code>MEASURE</code>.</p>
   * @public
   */
  PropertyUsage?: PropertyUsage | undefined;

  /**
   * <p>The definition of a metric.</p>
   * @public
   */
  Metric?: NamedEntityDefinitionMetric | undefined;
}

/**
 * <p>A structure that represents a semantic entity type.</p>
 * @public
 */
export interface SemanticEntityType {
  /**
   * <p>The semantic entity type name.</p>
   * @public
   */
  TypeName?: string | undefined;

  /**
   * <p>The semantic entity sub type name.</p>
   * @public
   */
  SubTypeName?: string | undefined;

  /**
   * <p>The semantic entity type parameters.</p>
   * @public
   */
  TypeParameters?: Record<string, string> | undefined;
}

/**
 * <p>A structure that represents a named entity.</p>
 * @public
 */
export interface TopicNamedEntity {
  /**
   * <p>The name of the named entity.</p>
   * @public
   */
  EntityName: string | undefined;

  /**
   * <p>The description of the named entity.</p>
   * @public
   */
  EntityDescription?: string | undefined;

  /**
   * <p>The other
   *          names or aliases for the named entity.</p>
   * @public
   */
  EntitySynonyms?: string[] | undefined;

  /**
   * <p>The type of named entity that a topic represents.</p>
   * @public
   */
  SemanticEntityType?: SemanticEntityType | undefined;

  /**
   * <p>The definition of a named entity.</p>
   * @public
   */
  Definition?: NamedEntityDefinition[] | undefined;
}

/**
 * <p>A structure that represents a dataset.</p>
 * @public
 */
export interface DatasetMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   * @public
   */
  DatasetArn: string | undefined;

  /**
   * <p>The name of the dataset.</p>
   * @public
   */
  DatasetName?: string | undefined;

  /**
   * <p>The description of the dataset.</p>
   * @public
   */
  DatasetDescription?: string | undefined;

  /**
   * <p>The definition of a data aggregation.</p>
   * @public
   */
  DataAggregation?: DataAggregation | undefined;

  /**
   * <p>The list of filter definitions.</p>
   * @public
   */
  Filters?: TopicFilter[] | undefined;

  /**
   * <p>The list of column definitions.</p>
   * @public
   */
  Columns?: TopicColumn[] | undefined;

  /**
   * <p>The list of calculated field definitions.</p>
   * @public
   */
  CalculatedFields?: TopicCalculatedField[] | undefined;

  /**
   * <p>The list of named entities definitions.</p>
   * @public
   */
  NamedEntities?: TopicNamedEntity[] | undefined;
}

/**
 * @public
 * @enum
 */
export const TopicUserExperienceVersion = {
  LEGACY: "LEGACY",
  NEW_READER_EXPERIENCE: "NEW_READER_EXPERIENCE",
} as const;

/**
 * @public
 */
export type TopicUserExperienceVersion = (typeof TopicUserExperienceVersion)[keyof typeof TopicUserExperienceVersion];

/**
 * <p>A structure that describes the details of a topic, such as its name, description, and associated data sets.</p>
 * @public
 */
export interface TopicDetails {
  /**
   * <p>The name of the topic.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the topic.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The user experience version of a topic.</p>
   * @public
   */
  UserExperienceVersion?: TopicUserExperienceVersion | undefined;

  /**
   * <p>The data sets that the topic is associated with.</p>
   * @public
   */
  DataSets?: DatasetMetadata[] | undefined;

  /**
   * <p>Configuration options for a <code>Topic</code>.</p>
   * @public
   */
  ConfigOptions?: TopicConfigOptions | undefined;
}

/**
 * @public
 */
export interface CreateTopicRequest {
  /**
   * <p>The ID of the Amazon Web Services account that you want to create a topic in.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the topic that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  TopicId: string | undefined;

  /**
   * <p>The definition of a topic to create.</p>
   * @public
   */
  Topic: TopicDetails | undefined;

  /**
   * <p>Contains a map of the key-value pairs for the resource tag or tags that are assigned to
   *          the dataset.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The Folder ARN of the folder that you want the topic to reside in.</p>
   * @public
   */
  FolderArns?: string[] | undefined;

  /**
   * <p>Custom instructions for the topic.</p>
   * @public
   */
  CustomInstructions?: CustomInstructions | undefined;
}

/**
 * @public
 */
export interface CreateTopicResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the topic.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID for the topic that you want to create. This ID is unique per Amazon Web Services Region
   *          for each Amazon Web Services account.</p>
   * @public
   */
  TopicId?: string | undefined;

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
 * @enum
 */
export const TopicScheduleType = {
  DAILY: "DAILY",
  HOURLY: "HOURLY",
  MONTHLY: "MONTHLY",
  WEEKLY: "WEEKLY",
} as const;

/**
 * @public
 */
export type TopicScheduleType = (typeof TopicScheduleType)[keyof typeof TopicScheduleType];

/**
 * <p>A structure that represents a topic refresh schedule.</p>
 * @public
 */
export interface TopicRefreshSchedule {
  /**
   * <p>A Boolean value that controls whether to schedule is enabled.</p>
   * @public
   */
  IsEnabled: boolean | undefined;

  /**
   * <p>A Boolean value that controls whether to schedule runs at the same schedule that is specified in
   *          SPICE dataset.</p>
   * @public
   */
  BasedOnSpiceSchedule: boolean | undefined;

  /**
   * <p>The starting date and time for the refresh schedule.</p>
   * @public
   */
  StartingAt?: Date | undefined;

  /**
   * <p>The timezone that you want the refresh schedule to use.</p>
   * @public
   */
  Timezone?: string | undefined;

  /**
   * <p>The time of day when the refresh should run, for
   *          example, Monday-Sunday.</p>
   * @public
   */
  RepeatAt?: string | undefined;

  /**
   * <p>The type of refresh schedule. Valid values for this structure are <code>HOURLY</code>,
   *             <code>DAILY</code>,
   *          <code>WEEKLY</code>,
   *          and <code>MONTHLY</code>.</p>
   * @public
   */
  TopicScheduleType?: TopicScheduleType | undefined;
}

/**
 * @public
 */
export interface CreateTopicRefreshScheduleRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the topic
   *          you're creating a refresh schedule for.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the topic that you want to modify. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  TopicId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   * @public
   */
  DatasetArn: string | undefined;

  /**
   * <p>The name of the dataset.</p>
   * @public
   */
  DatasetName?: string | undefined;

  /**
   * <p>The definition of a refresh schedule.</p>
   * @public
   */
  RefreshSchedule: TopicRefreshSchedule | undefined;
}

/**
 * @public
 */
export interface CreateTopicRefreshScheduleResponse {
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
export interface CreateVPCConnectionRequest {
  /**
   * <p>The Amazon Web Services account ID of the account where you want to create a new VPC
   * 			connection.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the VPC connection that
   * 			you're creating. This ID is a unique identifier for each Amazon Web Services Region in an
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
   * <p>The IAM role to associate with the VPC connection.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>A map of the key-value pairs for the resource tag or tags assigned to the VPC
   * 			connection.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 * @enum
 */
export const VPCConnectionAvailabilityStatus = {
  AVAILABLE: "AVAILABLE",
  PARTIALLY_AVAILABLE: "PARTIALLY_AVAILABLE",
  UNAVAILABLE: "UNAVAILABLE",
} as const;

/**
 * @public
 */
export type VPCConnectionAvailabilityStatus =
  (typeof VPCConnectionAvailabilityStatus)[keyof typeof VPCConnectionAvailabilityStatus];

/**
 * @public
 * @enum
 */
export const VPCConnectionResourceStatus = {
  CREATION_FAILED: "CREATION_FAILED",
  CREATION_IN_PROGRESS: "CREATION_IN_PROGRESS",
  CREATION_SUCCESSFUL: "CREATION_SUCCESSFUL",
  DELETED: "DELETED",
  DELETION_FAILED: "DELETION_FAILED",
  DELETION_IN_PROGRESS: "DELETION_IN_PROGRESS",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
  UPDATE_SUCCESSFUL: "UPDATE_SUCCESSFUL",
} as const;

/**
 * @public
 */
export type VPCConnectionResourceStatus =
  (typeof VPCConnectionResourceStatus)[keyof typeof VPCConnectionResourceStatus];

/**
 * @public
 */
export interface CreateVPCConnectionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the VPC connection.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID for the VPC connection that
   * 			you're creating. This ID is unique per Amazon Web Services Region for each Amazon Web Services
   * 			account.</p>
   * @public
   */
  VPCConnectionId?: string | undefined;

  /**
   * <p>The status of the creation of the VPC connection.</p>
   * @public
   */
  CreationStatus?: VPCConnectionResourceStatus | undefined;

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
 * <p>The custom permissions profile.</p>
 * @public
 */
export interface CustomPermissions {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom permissions profile.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the custom permissions profile.</p>
   * @public
   */
  CustomPermissionsName?: string | undefined;

  /**
   * <p>A set of actions in the custom permissions profile.</p>
   * @public
   */
  Capabilities?: Capabilities | undefined;
}

/**
 * @public
 * @enum
 */
export const DashboardErrorType = {
  ACCESS_DENIED: "ACCESS_DENIED",
  COLUMN_GEOGRAPHIC_ROLE_MISMATCH: "COLUMN_GEOGRAPHIC_ROLE_MISMATCH",
  COLUMN_REPLACEMENT_MISSING: "COLUMN_REPLACEMENT_MISSING",
  COLUMN_TYPE_MISMATCH: "COLUMN_TYPE_MISMATCH",
  DATA_SET_NOT_FOUND: "DATA_SET_NOT_FOUND",
  INTERNAL_FAILURE: "INTERNAL_FAILURE",
  PARAMETER_NOT_FOUND: "PARAMETER_NOT_FOUND",
  PARAMETER_TYPE_INVALID: "PARAMETER_TYPE_INVALID",
  PARAMETER_VALUE_INCOMPATIBLE: "PARAMETER_VALUE_INCOMPATIBLE",
  SOURCE_NOT_FOUND: "SOURCE_NOT_FOUND",
} as const;

/**
 * @public
 */
export type DashboardErrorType = (typeof DashboardErrorType)[keyof typeof DashboardErrorType];

/**
 * <p>Dashboard error.</p>
 * @public
 */
export interface DashboardError {
  /**
   * <p>Type.</p>
   * @public
   */
  Type?: DashboardErrorType | undefined;

  /**
   * <p>Message.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>Lists the violated entities that caused the dashboard error.</p>
   * @public
   */
  ViolatedEntities?: Entity[] | undefined;
}

/**
 * <p>Dashboard version.</p>
 * @public
 */
export interface DashboardVersion {
  /**
   * <p>The time that this dashboard version was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>Errors associated with this dashboard version.</p>
   * @public
   */
  Errors?: DashboardError[] | undefined;

  /**
   * <p>Version number for this version of the dashboard.</p>
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: ResourceStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>Source entity ARN.</p>
   * @public
   */
  SourceEntityArn?: string | undefined;

  /**
   * <p>The Amazon Resource Numbers (ARNs) for the datasets that are associated with this
   *             version of the dashboard.</p>
   * @public
   */
  DataSetArns?: string[] | undefined;

  /**
   * <p>Description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ARN of the theme associated with a version of the dashboard.</p>
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
 * <p>Dashboard.</p>
 * @public
 */
export interface Dashboard {
  /**
   * <p>Dashboard ID.</p>
   * @public
   */
  DashboardId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>A display name for the dashboard.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Version.</p>
   * @public
   */
  Version?: DashboardVersion | undefined;

  /**
   * <p>The time that this dashboard was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The last time that this dashboard was published.</p>
   * @public
   */
  LastPublishedTime?: Date | undefined;

  /**
   * <p>The last time that this dashboard was updated.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>A list of analysis Amazon Resource Names (ARNs) to be linked to the dashboard.</p>
   * @public
   */
  LinkEntities?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const DashboardFilterAttribute = {
  DASHBOARD_NAME: "DASHBOARD_NAME",
  DIRECT_QUICKSIGHT_OWNER: "DIRECT_QUICKSIGHT_OWNER",
  DIRECT_QUICKSIGHT_SOLE_OWNER: "DIRECT_QUICKSIGHT_SOLE_OWNER",
  DIRECT_QUICKSIGHT_VIEWER_OR_OWNER: "DIRECT_QUICKSIGHT_VIEWER_OR_OWNER",
  QUICKSIGHT_OWNER: "QUICKSIGHT_OWNER",
  QUICKSIGHT_USER: "QUICKSIGHT_USER",
  QUICKSIGHT_VIEWER_OR_OWNER: "QUICKSIGHT_VIEWER_OR_OWNER",
} as const;

/**
 * @public
 */
export type DashboardFilterAttribute = (typeof DashboardFilterAttribute)[keyof typeof DashboardFilterAttribute];

/**
 * <p>A filter that you apply when searching for dashboards. </p>
 * @public
 */
export interface DashboardSearchFilter {
  /**
   * <p>The comparison operator that you want to use as a filter, for example  <code>"Operator": "StringEquals"</code>. Valid values are <code>"StringEquals"</code> and  <code>"StringLike"</code>.</p>
   *          <p>If you set the operator value to <code>"StringEquals"</code>, you need to provide an ownership related filter in the <code>"NAME"</code> field and the arn of the user or group whose folders you want to search in the <code>"Value"</code> field. For example,  <code>"Name":"DIRECT_QUICKSIGHT_OWNER", "Operator": "StringEquals", "Value": "arn:aws:quicksight:us-east-1:1:user/default/UserName1"</code>.</p>
   *          <p>If you set the value to <code>"StringLike"</code>, you need to provide the name of the folders you are searching for. For example, <code>"Name":"DASHBOARD_NAME", "Operator": "StringLike", "Value": "Test"</code>. The <code>"StringLike"</code> operator only supports the <code>NAME</code> value <code>DASHBOARD_NAME</code>.</p>
   * @public
   */
  Operator: FilterOperator | undefined;

  /**
   * <p>The name of the value that you want to use as a filter, for example, <code>"Name":
   *             "QUICKSIGHT_OWNER"</code>.</p>
   *          <p>Valid values are defined as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>QUICKSIGHT_VIEWER_OR_OWNER</code>: Provide an ARN of a user or group, and any dashboards with that ARN listed as one of the dashboards's owners or viewers are returned. Implicit permissions from folders or groups are considered.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>QUICKSIGHT_OWNER</code>: Provide an ARN of a user or group, and any dashboards with that ARN listed as one of the owners of the dashboards are returned. Implicit permissions from folders or groups are considered.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DIRECT_QUICKSIGHT_SOLE_OWNER</code>: Provide an ARN of a user or group, and any dashboards with that ARN listed as the only owner of the dashboard are returned. Implicit permissions from folders or groups are not considered.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DIRECT_QUICKSIGHT_OWNER</code>: Provide an ARN of a user or group, and any dashboards with that ARN listed as one of the owners of the dashboards are returned. Implicit permissions from folders or groups are not considered.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DIRECT_QUICKSIGHT_VIEWER_OR_OWNER</code>: Provide an ARN of a user or group, and any dashboards with that ARN listed as one of the owners or viewers of the dashboards are returned. Implicit permissions from folders or groups are not considered.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DASHBOARD_NAME</code>: Any dashboards whose names have a substring match to this value will be returned.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Name?: DashboardFilterAttribute | undefined;

  /**
   * <p>The value of the named item, in this case <code>QUICKSIGHT_USER</code>, that you want
   *             to use as a filter, for example, <code>"Value":
   *             "arn:aws:quicksight:us-east-1:1:user/default/UserName1"</code>. </p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DashboardsQAStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type DashboardsQAStatus = (typeof DashboardsQAStatus)[keyof typeof DashboardsQAStatus];

/**
 * <p>Dashboard summary.</p>
 * @public
 */
export interface DashboardSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>Dashboard ID.</p>
   * @public
   */
  DashboardId?: string | undefined;

  /**
   * <p>A display name for the dashboard.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The time that this dashboard was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The last time that this dashboard was updated.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>Published version number.</p>
   * @public
   */
  PublishedVersionNumber?: number | undefined;

  /**
   * <p>The last time that this dashboard was published.</p>
   * @public
   */
  LastPublishedTime?: Date | undefined;
}

/**
 * <p>Dashboard version summary.</p>
 * @public
 */
export interface DashboardVersionSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The time that this dashboard version was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>Version number.</p>
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: ResourceStatus | undefined;

  /**
   * <p>Source entity ARN.</p>
   * @public
   */
  SourceEntityArn?: string | undefined;

  /**
   * <p>Description.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * <p>The QA result that is made from dashboard visual.</p>
 * @public
 */
export interface DashboardVisualResult {
  /**
   * <p>The ID of the dashboard.</p>
   * @public
   */
  DashboardId?: string | undefined;

  /**
   * <p>The name of the dashboard.</p>
   * @public
   */
  DashboardName?: string | undefined;

  /**
   * <p>The ID of the sheet.</p>
   * @public
   */
  SheetId?: string | undefined;

  /**
   * <p>The name of the sheet.</p>
   * @public
   */
  SheetName?: string | undefined;

  /**
   * <p>The ID of the visual.</p>
   * @public
   */
  VisualId?: string | undefined;

  /**
   * <p>The title of the visual.</p>
   * @public
   */
  VisualTitle?: string | undefined;

  /**
   * <p>The subtitle of the visual.</p>
   * @public
   */
  VisualSubtitle?: string | undefined;

  /**
   * <p>The URL of the dashboard.</p>
   * @public
   */
  DashboardUrl?: string | undefined;
}

/**
 * <p>Output column.</p>
 * @public
 */
export interface OutputColumn {
  /**
   * <p>The display name of the column..</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A unique identifier for the output column.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>A description for a column.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The data type of the column.</p>
   * @public
   */
  Type?: ColumnDataType | undefined;

  /**
   * <p>The sub data type of the column.</p>
   * @public
   */
  SubType?: ColumnDataSubType | undefined;
}

/**
 * <p>Dataset.</p>
 * @public
 */
export interface DataSet {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID of the dataset. Limited to 96 characters.</p>
   * @public
   */
  DataSetId?: string | undefined;

  /**
   * <p>A display name for the dataset.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The time that this dataset was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The last time that this dataset was updated.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>Declares the physical tables that are available in the underlying data sources.</p>
   * @public
   */
  PhysicalTableMap?: Record<string, PhysicalTable> | undefined;

  /**
   * <p>Configures the combination and transformation of the data from the physical
   *             tables.</p>
   * @public
   */
  LogicalTableMap?: Record<string, LogicalTable> | undefined;

  /**
   * <p>The list of columns after all transforms. These columns are available in templates,
   *             analyses, and dashboards.</p>
   * @public
   */
  OutputColumns?: OutputColumn[] | undefined;

  /**
   * <p>A value that indicates whether you want to import the data into SPICE.</p>
   * @public
   */
  ImportMode?: DataSetImportMode | undefined;

  /**
   * <p>The amount of SPICE capacity used by this dataset. This is 0 if the dataset isn't
   *             imported into SPICE.</p>
   * @public
   */
  ConsumedSpiceCapacityInBytes?: number | undefined;

  /**
   * <p>Groupings of columns that work together in certain Quick Sight features.
   *             Currently, only geospatial hierarchy is supported.</p>
   * @public
   */
  ColumnGroups?: ColumnGroup[] | undefined;

  /**
   * <p>The folder that contains fields and nested subfolders for your dataset.</p>
   * @public
   */
  FieldFolders?: Record<string, FieldFolder> | undefined;

  /**
   * <p>The row-level security configuration for the dataset.</p>
   * @public
   */
  RowLevelPermissionDataSet?: RowLevelPermissionDataSet | undefined;

  /**
   * <p>The element you can use to define tags for row-level security.</p>
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
   * <p>The parameters that are declared in a dataset.</p>
   * @public
   */
  DatasetParameters?: DatasetParameter[] | undefined;

  /**
   * <p>The performance optimization configuration of a dataset.</p>
   * @public
   */
  PerformanceConfiguration?: PerformanceConfiguration | undefined;

  /**
   * <p>The usage of the dataset.</p>
   * @public
   */
  UseAs?: DataSetUseAs | undefined;

  /**
   * <p>The data preparation configuration associated with this dataset.</p>
   * @public
   */
  DataPrepConfiguration?: DataPrepConfiguration | undefined;

  /**
   * <p>The semantic model configuration associated with this dataset.</p>
   * @public
   */
  SemanticModelConfiguration?: SemanticModelConfiguration | undefined;
}

/**
 * @public
 * @enum
 */
export const DataSetFilterAttribute = {
  DATASET_NAME: "DATASET_NAME",
  DIRECT_QUICKSIGHT_OWNER: "DIRECT_QUICKSIGHT_OWNER",
  DIRECT_QUICKSIGHT_SOLE_OWNER: "DIRECT_QUICKSIGHT_SOLE_OWNER",
  DIRECT_QUICKSIGHT_VIEWER_OR_OWNER: "DIRECT_QUICKSIGHT_VIEWER_OR_OWNER",
  QUICKSIGHT_OWNER: "QUICKSIGHT_OWNER",
  QUICKSIGHT_VIEWER_OR_OWNER: "QUICKSIGHT_VIEWER_OR_OWNER",
} as const;

/**
 * @public
 */
export type DataSetFilterAttribute = (typeof DataSetFilterAttribute)[keyof typeof DataSetFilterAttribute];

/**
 * <p>A filter that you apply when searching for datasets.</p>
 * @public
 */
export interface DataSetSearchFilter {
  /**
   * <p>The comparison operator that you want to use as a filter, for example <code>"Operator": "StringEquals"</code>. Valid values are <code>"StringEquals"</code> and <code>"StringLike"</code>.</p>
   *          <p>If you set the operator value to <code>"StringEquals"</code>, you need to provide an ownership related filter in the <code>"NAME"</code> field and the arn of the user or group whose datasets you want to search in the <code>"Value"</code> field. For example, <code>"Name":"QUICKSIGHT_OWNER", "Operator": "StringEquals", "Value": "arn:aws:quicksight:us-east- 1:1:user/default/UserName1"</code>.</p>
   *          <p>If you set the value to <code>"StringLike"</code>, you need to provide the name of the datasets you are searching for. For example, <code>"Name":"DATASET_NAME", "Operator": "StringLike", "Value": "Test"</code>. The <code>"StringLike"</code> operator only supports the <code>NAME</code> value <code>DATASET_NAME</code>.</p>
   * @public
   */
  Operator: FilterOperator | undefined;

  /**
   * <p>The name of the value that you want to use as a filter, for example, <code>"Name":
   *             "QUICKSIGHT_OWNER"</code>.</p>
   *          <p>Valid values are defined as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>QUICKSIGHT_VIEWER_OR_OWNER</code>: Provide an ARN of a user or group, and any datasets with that ARN listed as one of the dataset owners or viewers are returned. Implicit permissions from folders or groups are considered.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>QUICKSIGHT_OWNER</code>: Provide an ARN of a user or group, and any datasets with that ARN listed as one of the owners of the dataset are returned. Implicit permissions from folders or groups are considered.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DIRECT_QUICKSIGHT_SOLE_OWNER</code>: Provide an ARN of a user or group, and any datasets with that ARN listed as the only owner of the dataset are returned. Implicit permissions from folders or groups are not considered.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DIRECT_QUICKSIGHT_OWNER</code>: Provide an ARN of a user or group, and any datasets with that ARN listed as one of the owners if the dataset are returned. Implicit permissions from folders or groups are not considered.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DIRECT_QUICKSIGHT_VIEWER_OR_OWNER</code>: Provide an ARN of a user or group, and any datasets with that ARN listed as one of the owners or viewers of the dataset are returned. Implicit permissions from folders or groups are not considered.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DATASET_NAME</code>: Any datasets whose names have a substring match to this value will be returned.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Name: DataSetFilterAttribute | undefined;

  /**
   * <p>The value of the named item, in this case <code>QUICKSIGHT_OWNER</code>, that you want
   *             to use as a filter, for example, <code>"Value":
   *             "arn:aws:quicksight:us-east-1:1:user/default/UserName1"</code>.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>Dataset summary.</p>
 * @public
 */
export interface DataSetSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID of the dataset.</p>
   * @public
   */
  DataSetId?: string | undefined;

  /**
   * <p>A display name for the dataset.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The time that this dataset was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The last time that this dataset was updated.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>A value that indicates whether you want to import the data into SPICE.</p>
   * @public
   */
  ImportMode?: DataSetImportMode | undefined;

  /**
   * <p>The row-level security configuration for the dataset in the legacy data preparation experience.</p>
   * @public
   */
  RowLevelPermissionDataSet?: RowLevelPermissionDataSet | undefined;

  /**
   * <p>The row-level security configuration for the dataset in the new data preparation experience.</p>
   * @public
   */
  RowLevelPermissionDataSetMap?: Record<string, RowLevelPermissionDataSet> | undefined;

  /**
   * <p>Whether or not the row level permission tags are applied.</p>
   * @public
   */
  RowLevelPermissionTagConfigurationApplied?: boolean | undefined;

  /**
   * <p>A value that indicates if the dataset has column level permission configured.</p>
   * @public
   */
  ColumnLevelPermissionRulesApplied?: boolean | undefined;

  /**
   * <p>The usage of the dataset.</p>
   * @public
   */
  UseAs?: DataSetUseAs | undefined;
}

/**
 * @public
 * @enum
 */
export const DataSourceErrorInfoType = {
  ACCESS_DENIED: "ACCESS_DENIED",
  CONFLICT: "CONFLICT",
  COPY_SOURCE_NOT_FOUND: "COPY_SOURCE_NOT_FOUND",
  ENGINE_VERSION_NOT_SUPPORTED: "ENGINE_VERSION_NOT_SUPPORTED",
  GENERIC_SQL_FAILURE: "GENERIC_SQL_FAILURE",
  TIMEOUT: "TIMEOUT",
  UNKNOWN: "UNKNOWN",
  UNKNOWN_HOST: "UNKNOWN_HOST",
} as const;

/**
 * @public
 */
export type DataSourceErrorInfoType = (typeof DataSourceErrorInfoType)[keyof typeof DataSourceErrorInfoType];

/**
 * <p>Error information for the data source creation or update.</p>
 * @public
 */
export interface DataSourceErrorInfo {
  /**
   * <p>Error type.</p>
   * @public
   */
  Type?: DataSourceErrorInfoType | undefined;

  /**
   * <p>Error message.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>The structure of a data source.</p>
 * @public
 */
export interface DataSource {
  /**
   * <p>The Amazon Resource Name (ARN) of the data source.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID of the data source. This ID is unique per Amazon Web Services Region for each
   *             Amazon Web Services account.</p>
   * @public
   */
  DataSourceId?: string | undefined;

  /**
   * <p>A display name for the data source.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of the data source. This type indicates which database engine the data source
   *             connects to.</p>
   * @public
   */
  Type?: DataSourceType | undefined;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: ResourceStatus | undefined;

  /**
   * <p>The time that this data source was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The last time that this data source was updated.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>The parameters that Quick Sight uses to connect to your underlying source. This
   *             is a variant type structure. For this structure to be valid, only one of the attributes
   *             can be non-null.</p>
   * @public
   */
  DataSourceParameters?: DataSourceParameters | undefined;

  /**
   * <p>A set of alternate data source parameters that you want to share for the credentials
   *             stored with this data source. The credentials are applied in tandem with the data source
   *             parameters when you copy a data source by using a create or update request. The API
   *             operation compares the <code>DataSourceParameters</code> structure that's in the request
   *             with the structures in the <code>AlternateDataSourceParameters</code> allow list. If the
   *             structures are an exact match, the request is allowed to use the credentials from this
   *             existing data source. If the <code>AlternateDataSourceParameters</code> list is null,
   *             the <code>Credentials</code> originally used with this <code>DataSourceParameters</code>
   *             are automatically allowed.</p>
   * @public
   */
  AlternateDataSourceParameters?: DataSourceParameters[] | undefined;

  /**
   * <p>The VPC connection information. You need to use this parameter only when you want
   *             Quick Sight to use a VPC connection when connecting to your underlying source.</p>
   * @public
   */
  VpcConnectionProperties?: VpcConnectionProperties | undefined;

  /**
   * <p>Secure Socket Layer (SSL) properties that apply when Quick Sight connects to your
   *             underlying source.</p>
   * @public
   */
  SslProperties?: SslProperties | undefined;

  /**
   * <p>Error information from the last update or the creation of the data source.</p>
   * @public
   */
  ErrorInfo?: DataSourceErrorInfo | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the secret associated with the data source in Amazon Secrets Manager.</p>
   * @public
   */
  SecretArn?: string | undefined;
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
 * <p>A filter that you apply when searching for data sources.</p>
 * @public
 */
export interface DataSourceSearchFilter {
  /**
   * <p>The comparison operator that you want to use as a filter, for example <code>"Operator": "StringEquals"</code>. Valid values are <code>"StringEquals"</code> and <code>"StringLike"</code>.</p>
   *          <p>If you set the operator value to <code>"StringEquals"</code>, you need to provide an ownership related filter in the <code>"NAME"</code> field and the arn of the user or group whose data sources you want to search in the <code>"Value"</code> field. For example, <code>"Name":"DIRECT_QUICKSIGHT_OWNER", "Operator": "StringEquals", "Value": "arn:aws:quicksight:us-east-1:1:user/default/UserName1"</code>.</p>
   *          <p>If you set the value to <code>"StringLike"</code>, you need to provide the name of the data sources you are searching for. For example, <code>"Name":"DATASOURCE_NAME", "Operator": "StringLike", "Value": "Test"</code>. The <code>"StringLike"</code> operator only supports the <code>NAME</code> value <code>DATASOURCE_NAME</code>.</p>
   * @public
   */
  Operator: FilterOperator | undefined;

  /**
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
   * @public
   */
  Name: DataSourceFilterAttribute | undefined;

  /**
   * <p>The value of the named item, for example <code>DIRECT_QUICKSIGHT_OWNER</code>, that you want
   *             to use as a filter, for example, <code>"Value":
   *             "arn:aws:quicksight:us-east-1:1:user/default/UserName1"</code>.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>A <code>DataSourceSummary</code> object that returns a summary of a data source.</p>
 * @public
 */
export interface DataSourceSummary {
  /**
   * <p>The arn of the datasource.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The unique ID of the data source.</p>
   * @public
   */
  DataSourceId?: string | undefined;

  /**
   * <p>The name of the data source.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of the data source.</p>
   * @public
   */
  Type?: DataSourceType | undefined;

  /**
   * <p>The date and time that the data source was created. This value is expressed in MM-DD-YYYY HH:MM:SS format.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The date and time the data source was last updated. This value is expressed in MM-DD-YYYY HH:MM:SS format.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteAccountCustomizationRequest {
  /**
   * <p>The ID for the Amazon Web Services account that you want to delete Quick Sight customizations from.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The Quick Sight namespace that you're deleting the customizations from.</p>
   * @public
   */
  Namespace?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccountCustomizationResponse {
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
export interface DeleteAccountCustomPermissionRequest {
  /**
   * <p>The ID of the Amazon Web Services account from which you want to unapply the custom permissions profile.</p>
   * @public
   */
  AwsAccountId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccountCustomPermissionResponse {
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
export interface DeleteAccountSubscriptionRequest {
  /**
   * <p>The Amazon Web Services account ID of the account that you want to delete.</p>
   * @public
   */
  AwsAccountId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccountSubscriptionResponse {
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
export interface DeleteActionConnectorRequest {
  /**
   * <p>The Amazon Web Services account ID that contains the action connector to delete.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The unique identifier of the action connector to delete.</p>
   * @public
   */
  ActionConnectorId: string | undefined;
}

/**
 * @public
 */
export interface DeleteActionConnectorResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the deleted action connector.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The unique identifier of the deleted action connector.</p>
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
}

/**
 * @public
 */
export interface DeleteAnalysisRequest {
  /**
   * <p>The ID of the Amazon Web Services account where you want to delete an analysis.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the analysis that you're deleting.</p>
   * @public
   */
  AnalysisId: string | undefined;

  /**
   * <p>A value that specifies the number of days that Amazon Quick Sight waits before it deletes the
   *             analysis. You can't use this parameter with the <code>ForceDeleteWithoutRecovery</code>
   *             option in the same API call. The default value is 30.</p>
   * @public
   */
  RecoveryWindowInDays?: number | undefined;

  /**
   * <p>This option defaults to the value <code>NoForceDeleteWithoutRecovery</code>. To
   *             immediately delete the analysis, add the <code>ForceDeleteWithoutRecovery</code> option.
   *             You can't restore an analysis after it's deleted. </p>
   * @public
   */
  ForceDeleteWithoutRecovery?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteAnalysisResponse {
  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the deleted analysis.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID of the deleted analysis.</p>
   * @public
   */
  AnalysisId?: string | undefined;

  /**
   * <p>The date and time that the analysis is scheduled to be deleted.</p>
   * @public
   */
  DeletionTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteBrandRequest {
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
}

/**
 * @public
 */
export interface DeleteBrandResponse {
  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteBrandAssignmentRequest {
  /**
   * <p>The ID of the Amazon Web Services account that owns the brand assignment.</p>
   * @public
   */
  AwsAccountId: string | undefined;
}

/**
 * @public
 */
export interface DeleteBrandAssignmentResponse {
  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteCustomPermissionsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the custom permissions profile that you want to delete.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The name of the custom permissions profile that you want to delete.</p>
   * @public
   */
  CustomPermissionsName: string | undefined;
}

/**
 * @public
 */
export interface DeleteCustomPermissionsResponse {
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
export interface DeleteDashboardRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the dashboard that you're
   *             deleting.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dashboard.</p>
   * @public
   */
  DashboardId: string | undefined;

  /**
   * <p>The version number of the dashboard. If the version number property is provided, only
   *             the specified version of the dashboard is deleted.</p>
   * @public
   */
  VersionNumber?: number | undefined;
}

/**
 * @public
 */
export interface DeleteDashboardResponse {
  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;

  /**
   * <p>The Secure Socket Layer (SSL) properties that apply for the resource.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID of the dashboard.</p>
   * @public
   */
  DashboardId?: string | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataSetRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dataset that you want to delete. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  DataSetId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataSetResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID for the dataset that you want to delete. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
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
export interface DeleteDataSetRefreshPropertiesRequest {
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
export interface DeleteDataSetRefreshPropertiesResponse {
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
export interface DeleteDataSourceRequest {
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
export interface DeleteDataSourceResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the data source that you deleted.</p>
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
export interface DeleteDefaultQBusinessApplicationRequest {
  /**
   * <p>The ID of the Quick Sight account that you want to disconnect from a Amazon Q Business application.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The Quick Sight namespace that you want to delete a linked Amazon Q Business application from. If this field is left blank, the Amazon Q Business application is deleted from the default namespace. Currently, the default namespace is the only valid value for this parameter.</p>
   * @public
   */
  Namespace?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDefaultQBusinessApplicationResponse {
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
export interface DeleteFolderRequest {
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
 * @public
 */
export interface DeleteFolderResponse {
  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;

  /**
   * <p>The Amazon Resource Name of the deleted folder.</p>
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
export interface DeleteFolderMembershipRequest {
  /**
   * <p>The ID for the Amazon Web Services account that contains the folder.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The Folder ID.</p>
   * @public
   */
  FolderId: string | undefined;

  /**
   * <p>The ID of the asset that you want to delete.</p>
   * @public
   */
  MemberId: string | undefined;

  /**
   * <p>The member type of the asset that you want to delete from a folder.</p>
   * @public
   */
  MemberType: MemberType | undefined;
}

/**
 * @public
 */
export interface DeleteFolderMembershipResponse {
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
export interface DeleteGroupRequest {
  /**
   * <p>The name of the group that you want to delete.</p>
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
   * <p>The namespace of the group that you want to delete.</p>
   * @public
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface DeleteGroupResponse {
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
export interface DeleteGroupMembershipRequest {
  /**
   * <p>The name of the user that you want to delete from the group membership.</p>
   * @public
   */
  MemberName: string | undefined;

  /**
   * <p>The name of the group that you want to delete the user from.</p>
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
   * <p>The namespace of the group that you want to remove a user from.</p>
   * @public
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface DeleteGroupMembershipResponse {
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
export interface DeleteIAMPolicyAssignmentRequest {
  /**
   * <p>The Amazon Web Services account ID where you want to delete the IAM
   * 			policy assignment.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The name of the assignment. </p>
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
 * @public
 */
export interface DeleteIAMPolicyAssignmentResponse {
  /**
   * <p>The name of the assignment. </p>
   * @public
   */
  AssignmentName?: string | undefined;

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
export interface DeleteIdentityPropagationConfigRequest {
  /**
   * <p>The ID of the Amazon Web Services account that you want to delete an identity propagation configuration from.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The name of the Amazon Web Services service that you want to delete the associated access scopes and authorized targets from.</p>
   * @public
   */
  Service: ServiceType | undefined;
}

/**
 * @public
 */
export interface DeleteIdentityPropagationConfigResponse {
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
export interface DeleteNamespaceRequest {
  /**
   * <p>The ID for the Amazon Web Services account that you want to delete the Quick Sight namespace from.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace that you want to delete.</p>
   * @public
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface DeleteNamespaceResponse {
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
export interface DeleteRefreshScheduleRequest {
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
   * <p>The ID of the refresh schedule.</p>
   * @public
   */
  ScheduleId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRefreshScheduleResponse {
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
export interface DeleteRoleCustomPermissionRequest {
  /**
   * <p>The role that you want to remove permissions from.</p>
   * @public
   */
  Role: Role | undefined;

  /**
   * <p>The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the
   *             Amazon Web Services account that contains your Amazon Quick Sight account.</p>
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
export interface DeleteRoleCustomPermissionResponse {
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
export interface DeleteRoleMembershipRequest {
  /**
   * <p>The name of the group.</p>
   * @public
   */
  MemberName: string | undefined;

  /**
   * <p>The role that you want to remove permissions from.</p>
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
export interface DeleteRoleMembershipResponse {
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
export interface DeleteTemplateRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the template that you're deleting.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>An ID for the template you want to delete.</p>
   * @public
   */
  TemplateId: string | undefined;

  /**
   * <p>Specifies the version of the template that you want to delete.
   * 			If you don't provide a version number, <code>DeleteTemplate</code> deletes all versions of the template.
   * 	 </p>
   * @public
   */
  VersionNumber?: number | undefined;
}

/**
 * @public
 */
export interface DeleteTemplateResponse {
  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>An ID for the template.</p>
   * @public
   */
  TemplateId?: string | undefined;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface DeleteTemplateAliasRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the item to delete.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the template that the specified alias is for.</p>
   * @public
   */
  TemplateId: string | undefined;

  /**
   * <p>The name for the template alias. To delete a specific alias, you delete the version that the
   * 			alias points to. You can specify the alias name, or specify the latest version of the
   * 			template by providing the keyword <code>$LATEST</code> in the <code>AliasName</code>
   * 			parameter. </p>
   * @public
   */
  AliasName: string | undefined;
}

/**
 * @public
 */
export interface DeleteTemplateAliasResponse {
  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;

  /**
   * <p>An ID for the template associated with the deletion.</p>
   * @public
   */
  TemplateId?: string | undefined;

  /**
   * <p>The name for the template alias.</p>
   * @public
   */
  AliasName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the template you want to delete.</p>
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
export interface DeleteThemeRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the theme that you're deleting.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>An ID for the theme that you want to delete.</p>
   * @public
   */
  ThemeId: string | undefined;

  /**
   * <p>The version of the theme that you want to delete. </p>
   *          <p>
   *             <b>Note:</b> If you don't provide a version number, you're
   * 			using this call to <code>DeleteTheme</code> to delete all versions of the theme.</p>
   * @public
   */
  VersionNumber?: number | undefined;
}

/**
 * @public
 */
export interface DeleteThemeResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  Arn?: string | undefined;

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
   * <p>An ID for the theme.</p>
   * @public
   */
  ThemeId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteThemeAliasRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the theme alias to delete.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the theme that the specified alias is for.</p>
   * @public
   */
  ThemeId: string | undefined;

  /**
   * <p>The unique name for the theme alias to delete.</p>
   * @public
   */
  AliasName: string | undefined;
}

/**
 * @public
 */
export interface DeleteThemeAliasResponse {
  /**
   * <p>The name for the theme alias.</p>
   * @public
   */
  AliasName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the theme resource using the deleted alias.</p>
   * @public
   */
  Arn?: string | undefined;

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
   * <p>An ID for the theme associated with the deletion.</p>
   * @public
   */
  ThemeId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteTopicRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the topic that you want to
   *          delete.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the topic that you want to delete. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  TopicId: string | undefined;
}

/**
 * @public
 */
export interface DeleteTopicResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the topic.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID of the topic that you want to delete. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  TopicId?: string | undefined;

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
export interface DeleteTopicRefreshScheduleRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
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
}

/**
 * @public
 */
export interface DeleteTopicRefreshScheduleResponse {
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
export interface DeleteUserRequest {
  /**
   * <p>The name of the user that you want to delete.</p>
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
 * @public
 */
export interface DeleteUserResponse {
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
 * <p></p>
 * @public
 */
export interface DeleteUserByPrincipalIdRequest {
  /**
   * <p>The principal ID of the user.</p>
   * @public
   */
  PrincipalId: string | undefined;

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
 * @public
 */
export interface DeleteUserByPrincipalIdResponse {
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
export interface DeleteUserCustomPermissionRequest {
  /**
   * <p>The username of the user that you want to remove custom permissions from.</p>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that contains the custom permission configuration that you want to delete.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace that the user belongs to.</p>
   * @public
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserCustomPermissionResponse {
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
export interface DeleteVPCConnectionRequest {
  /**
   * <p>The Amazon Web Services account ID of the account where you want to delete a VPC
   * 			connection.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the VPC connection that you're creating. This ID is a unique identifier for each Amazon Web Services Region in an
   * 				Amazon Web Services account.</p>
   * @public
   */
  VPCConnectionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVPCConnectionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the deleted VPC connection.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID of the VPC connection that
   * 			you're creating. This ID is a unique identifier for each Amazon Web Services Region in an
   * 				Amazon Web Services account.</p>
   * @public
   */
  VPCConnectionId?: string | undefined;

  /**
   * <p>The deletion status of the VPC connection.</p>
   * @public
   */
  DeletionStatus?: VPCConnectionResourceStatus | undefined;

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
 * @public
 */
export interface DescribeAccountCustomizationRequest {
  /**
   * <p>The ID for the Amazon Web Services account that you want to describe Quick Sight customizations
   *             for.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The Quick Sight namespace that you want to describe Quick Sight customizations
   *             for.</p>
   * @public
   */
  Namespace?: string | undefined;

  /**
   * <p>The <code>Resolved</code> flag works with the other parameters to determine which view
   *             of Quick Sight customizations is returned. You can add this flag to your command to use
   *             the same view that Quick Sight uses to identify which customizations to apply to the
   *             console. Omit this flag, or set it to <code>no-resolved</code>, to reveal customizations
   *             that are configured at different levels. </p>
   * @public
   */
  Resolved?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeAccountCustomizationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the customization that's associated with this Amazon Web Services account.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID for the Amazon Web Services account that you're describing.</p>
   * @public
   */
  AwsAccountId?: string | undefined;

  /**
   * <p>The Quick Sight namespace that you're describing. </p>
   * @public
   */
  Namespace?: string | undefined;

  /**
   * <p>The Quick Sight customizations that exist. </p>
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
export interface DescribeAccountCustomPermissionRequest {
  /**
   * <p>The ID of the Amazon Web Services account for which you want to describe the applied custom permissions profile.</p>
   * @public
   */
  AwsAccountId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAccountCustomPermissionResponse {
  /**
   * <p>The name of the custom permissions profile.</p>
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
export interface DescribeAccountSettingsRequest {
  /**
   * <p>The ID for the Amazon Web Services account that contains the settings that you want to list.</p>
   * @public
   */
  AwsAccountId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAccountSettingsResponse {
  /**
   * <p>The Amazon Quick Sight settings for this Amazon Web Services account. This information
   *             includes the edition of Amazon Quick Sight that you subscribed to (Standard or
   *             Enterprise) and the notification email for the Amazon Quick Sight subscription. </p>
   *          <p>In the Quick Sight console, the Amazon Quick Sight subscription is sometimes referred to
   *             as a Quick Sight "account" even though it's technically not an account by
   *             itself. Instead, it's a subscription to the Amazon Quick Sight service for your
   *                 Amazon Web Services account. The edition that you subscribe to applies to Quick Suite in every Amazon Web Services Region where you use it.</p>
   * @public
   */
  AccountSettings?: AccountSettings | undefined;

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
export interface DescribeAccountSubscriptionRequest {
  /**
   * <p>The Amazon Web Services account ID associated with your Quick Sight account.</p>
   * @public
   */
  AwsAccountId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAccountSubscriptionResponse {
  /**
   * <p>A structure that contains the following elements:</p>
   *          <ul>
   *             <li>
   *                <p>Your Quick Sight account name.</p>
   *             </li>
   *             <li>
   *                <p>The edition of Quick Sight that your account is using.</p>
   *             </li>
   *             <li>
   *                <p>The notification email address that is associated with the Amazon Quick Sight
   *                     account.
   *             </p>
   *             </li>
   *             <li>
   *                <p>The authentication type of the Quick Sight account.</p>
   *             </li>
   *             <li>
   *                <p>The status of the Quick Sight account's subscription.</p>
   *             </li>
   *          </ul>
   * @public
   */
  AccountInfo?: AccountInfo | undefined;

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
export interface DescribeActionConnectorRequest {
  /**
   * <p>The Amazon Web Services account ID that contains the action connector.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The unique identifier of the action connector to describe.</p>
   * @public
   */
  ActionConnectorId: string | undefined;
}

/**
 * @public
 */
export interface DescribeActionConnectorResponse {
  /**
   * <p>The detailed information about the action connector, including its configuration and current state.</p>
   * @public
   */
  ActionConnector?: ActionConnector | undefined;

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
export interface DescribeActionConnectorPermissionsRequest {
  /**
   * <p>The Amazon Web Services account ID that contains the action connector.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The unique identifier of the action connector whose permissions you want to describe.</p>
   * @public
   */
  ActionConnectorId: string | undefined;
}

/**
 * @public
 */
export interface DescribeActionConnectorPermissionsResponse {
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
   * <p>The list of permissions associated with the action connector, including the principals and their allowed actions.</p>
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;

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
export interface DescribeAnalysisRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the analysis. You must be using the
   *             Amazon Web Services account that the analysis is in.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the analysis that you're describing. The ID is part of the URL of the
   *             analysis.</p>
   * @public
   */
  AnalysisId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAnalysisResponse {
  /**
   * <p>A metadata structure that contains summary information for the analysis that you're
   *             describing.</p>
   * @public
   */
  Analysis?: Analysis | undefined;

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
export interface DescribeAnalysisDefinitionRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the analysis. You must be using the
   *             Amazon Web Services account that the analysis is in.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the analysis that you're describing. The ID is part of the URL of the
   *             analysis.</p>
   * @public
   */
  AnalysisId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAnalysisDefinitionResponse {
  /**
   * <p>The ID of the analysis described.</p>
   * @public
   */
  AnalysisId?: string | undefined;

  /**
   * <p>The descriptive name of the analysis.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Errors associated with the analysis.</p>
   * @public
   */
  Errors?: AnalysisError[] | undefined;

  /**
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
   * @public
   */
  ResourceStatus?: ResourceStatus | undefined;

  /**
   * <p>The ARN of the theme of the analysis.</p>
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
export interface DescribeAnalysisPermissionsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the analysis whose permissions you're
   *             describing. You must be using the Amazon Web Services account that the analysis is in.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the analysis whose permissions you're describing. The ID is part of the
   *             analysis URL.</p>
   * @public
   */
  AnalysisId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAnalysisPermissionsResponse {
  /**
   * <p>The ID of the analysis whose permissions you're describing.</p>
   * @public
   */
  AnalysisId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the analysis whose permissions you're
   *             describing.</p>
   * @public
   */
  AnalysisArn?: string | undefined;

  /**
   * <p>A structure that describes the principals and the resource-level permissions on an
   *             analysis.</p>
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
export interface DescribeAssetBundleExportJobRequest {
  /**
   * <p>The ID of the Amazon Web Services account the export job is executed in. </p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the job that you want described. The job ID is set when you start a new job
   *          with a <code>StartAssetBundleExportJob</code> API call.</p>
   * @public
   */
  AssetBundleExportJobId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const IncludeFolderMembers = {
  NONE: "NONE",
  ONE_LEVEL: "ONE_LEVEL",
  RECURSE: "RECURSE",
} as const;

/**
 * @public
 */
export type IncludeFolderMembers = (typeof IncludeFolderMembers)[keyof typeof IncludeFolderMembers];

/**
 * @public
 */
export interface DescribeAssetBundleExportJobResponse {
  /**
   * <p>Indicates the status of a job through its queuing and execution.</p>
   *          <p>Poll this <code>DescribeAssetBundleExportApi</code> until <code>JobStatus</code> is
   *          either <code>SUCCESSFUL</code> or <code>FAILED</code>.</p>
   * @public
   */
  JobStatus?: AssetBundleExportJobStatus | undefined;

  /**
   * <p>The URL to download the exported asset bundle data from.</p>
   *          <p>This URL is available only after the job has succeeded. This URL is valid for 5 minutes
   *          after issuance. Call <code>DescribeAssetBundleExportJob</code> again for a fresh URL if
   *          needed.</p>
   *          <p>The downloaded asset bundle is a zip file named <code>assetbundle-\{jobId\}.qs</code>. The
   *          file has a <code>.qs</code> extension.</p>
   *          <p>This URL can't be used in a <code>StartAssetBundleImportJob</code> API call and
   *          should only be used for download purposes.</p>
   * @public
   */
  DownloadUrl?: string | undefined;

  /**
   * <p>An array of error records that describes any failures that occurred during the export
   *          job processing.</p>
   *          <p>Error records accumulate while the job runs. The complete set of error records is
   *          available after the job has completed and failed.</p>
   * @public
   */
  Errors?: AssetBundleExportJobError[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the export job.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The time that the export job was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The ID of the job. The job ID is set when you start a new job with a
   *             <code>StartAssetBundleExportJob</code> API call.</p>
   * @public
   */
  AssetBundleExportJobId?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that the export job was executed in. </p>
   * @public
   */
  AwsAccountId?: string | undefined;

  /**
   * <p>A list of resource ARNs that exported with the job.</p>
   * @public
   */
  ResourceArns?: string[] | undefined;

  /**
   * <p>The include dependencies flag.</p>
   * @public
   */
  IncludeAllDependencies?: boolean | undefined;

  /**
   * <p>The format of the exported asset bundle. A <code>QUICKSIGHT_JSON</code> formatted file
   *          can be used to make a <code>StartAssetBundleImportJob</code> API call. A
   *             <code>CLOUDFORMATION_JSON</code> formatted file can be used in the CloudFormation
   *          console and with the CloudFormation APIs.</p>
   * @public
   */
  ExportFormat?: AssetBundleExportFormat | undefined;

  /**
   * <p>The CloudFormation override property configuration for the export job.</p>
   * @public
   */
  CloudFormationOverridePropertyConfiguration?: AssetBundleCloudFormationOverridePropertyConfiguration | undefined;

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

  /**
   * <p>The include permissions flag.</p>
   * @public
   */
  IncludePermissions?: boolean | undefined;

  /**
   * <p>The include tags flag.</p>
   * @public
   */
  IncludeTags?: boolean | undefined;

  /**
   * <p>The validation strategy that is used to export the analysis or dashboard.</p>
   * @public
   */
  ValidationStrategy?: AssetBundleExportJobValidationStrategy | undefined;

  /**
   * <p>An array of warning records that describe the analysis or dashboard that is exported.
   *          This array includes UI errors that can be skipped during the validation process.</p>
   *          <p>This property only appears if <code>StrictModeForAllResources</code> in
   *             <code>ValidationStrategy</code> is set to <code>FALSE</code>.</p>
   * @public
   */
  Warnings?: AssetBundleExportJobWarning[] | undefined;

  /**
   * <p>The include folder memberships flag.</p>
   * @public
   */
  IncludeFolderMemberships?: boolean | undefined;

  /**
   * <p>A setting that determines whether folder members are included.</p>
   * @public
   */
  IncludeFolderMembers?: IncludeFolderMembers | undefined;
}

/**
 * @public
 */
export interface DescribeAssetBundleImportJobRequest {
  /**
   * <p>The ID of the Amazon Web Services account the import job was executed in. </p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the job. The job ID is set when you start a new job with a
   *             <code>StartAssetBundleImportJob</code> API call.</p>
   * @public
   */
  AssetBundleImportJobId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAssetBundleImportJobResponse {
  /**
   * <p>Indicates the status of a job through its queuing and execution.</p>
   *          <p>Poll the <code>DescribeAssetBundleImport</code> API until <code>JobStatus</code> returns
   *          one of the following values:</p>
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
   * @public
   */
  JobStatus?: AssetBundleImportJobStatus | undefined;

  /**
   * <p>An array of error records that describes any failures that occurred during the export
   *          job processing.</p>
   *          <p>Error records accumulate while the job is still running. The complete set of error
   *          records is available after the job has completed and failed.</p>
   * @public
   */
  Errors?: AssetBundleImportJobError[] | undefined;

  /**
   * <p>An array of error records that describes any failures that occurred while an import job
   *          was attempting a rollback.</p>
   *          <p>Error records accumulate while the job is still running. The complete set of error
   *          records is available after the job has completed and failed.</p>
   * @public
   */
  RollbackErrors?: AssetBundleImportJobError[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the import job.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The time that the import job was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The ID of the job. The job ID is set when you start a new job with a
   *             <code>StartAssetBundleImportJob</code> API call.</p>
   * @public
   */
  AssetBundleImportJobId?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account the import job was executed in. </p>
   * @public
   */
  AwsAccountId?: string | undefined;

  /**
   * <p>The source of the asset bundle zip file that contains the data that is imported by the
   *          job.</p>
   * @public
   */
  AssetBundleImportSource?: AssetBundleImportSourceDescription | undefined;

  /**
   * <p>Optional overrides that are applied to the resource configuration before import.</p>
   * @public
   */
  OverrideParameters?: AssetBundleImportJobOverrideParameters | undefined;

  /**
   * <p>The failure action for the import job.</p>
   * @public
   */
  FailureAction?: AssetBundleImportFailureAction | undefined;

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
   * <p>An optional validation strategy override for all analyses and dashboards to be applied
   *          to the resource configuration before import.</p>
   * @public
   */
  OverrideValidationStrategy?: AssetBundleImportJobOverrideValidationStrategy | undefined;

  /**
   * <p>An array of warning records that describe all permitted errors that are encountered
   *          during the import job.</p>
   * @public
   */
  Warnings?: AssetBundleImportJobWarning[] | undefined;
}

/**
 * @public
 */
export interface DescribeBrandRequest {
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
   * <p>The ID of the specific version. The default value is the latest version.</p>
   * @public
   */
  VersionId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeBrandResponse {
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
export interface DescribeBrandAssignmentRequest {
  /**
   * <p>The ID of the Amazon Web Services account that owns the brand assignment.</p>
   * @public
   */
  AwsAccountId: string | undefined;
}

/**
 * @public
 */
export interface DescribeBrandAssignmentResponse {
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
export interface DescribeBrandPublishedVersionRequest {
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
}

/**
 * @public
 */
export interface DescribeBrandPublishedVersionResponse {
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
export interface DescribeCustomPermissionsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the custom permissions profile that you want described.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The name of the custom permissions profile to describe.</p>
   * @public
   */
  CustomPermissionsName: string | undefined;
}

/**
 * @public
 */
export interface DescribeCustomPermissionsResponse {
  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;

  /**
   * <p>The custom permissions profile.</p>
   * @public
   */
  CustomPermissions?: CustomPermissions | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDashboardRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the dashboard that you're
   *             describing.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dashboard.</p>
   * @public
   */
  DashboardId: string | undefined;

  /**
   * <p>The version number for the dashboard. If a version number isn't passed, the
   *             latest published dashboard version is described. </p>
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * <p>The alias name.</p>
   * @public
   */
  AliasName?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDashboardResponse {
  /**
   * <p>Information about the dashboard.</p>
   * @public
   */
  Dashboard?: Dashboard | undefined;

  /**
   * <p>The HTTP status of this request.</p>
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
export interface DescribeDashboardDefinitionRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the dashboard that you're
   *             describing.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dashboard.</p>
   * @public
   */
  DashboardId: string | undefined;

  /**
   * <p>The version number for the dashboard. If a version number isn't passed, the
   *             latest published dashboard version is described. </p>
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * <p>The alias name.</p>
   * @public
   */
  AliasName?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDashboardDefinitionResponse {
  /**
   * <p>The ID of the dashboard described.</p>
   * @public
   */
  DashboardId?: string | undefined;

  /**
   * <p>Errors associated with this dashboard version.</p>
   * @public
   */
  Errors?: DashboardError[] | undefined;

  /**
   * <p>The display name of the dashboard.</p>
   * @public
   */
  Name?: string | undefined;

  /**
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
   * @public
   */
  ResourceStatus?: ResourceStatus | undefined;

  /**
   * <p>The ARN of the theme of the dashboard.</p>
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
   * <p>Options for publishing the dashboard:</p>
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
}

/**
 * @public
 */
export interface DescribeDashboardPermissionsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the dashboard that you're
   *             describing permissions for.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dashboard, also added to the IAM policy.</p>
   * @public
   */
  DashboardId: string | undefined;
}

/**
 * @public
 */
export interface DescribeDashboardPermissionsResponse {
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
   * <p>A structure that contains the permissions for the dashboard.</p>
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

  /**
   * <p>A structure that contains the configuration of a shareable link that grants access to
   *             the dashboard. Your users can use the link to view and interact with the dashboard, if
   *             the dashboard has been shared with them. For more information about sharing dashboards,
   *             see <a href="https://docs.aws.amazon.com/quicksight/latest/user/sharing-a-dashboard.html">Sharing Dashboards</a>.</p>
   * @public
   */
  LinkSharingConfiguration?: LinkSharingConfiguration | undefined;
}

/**
 * @public
 */
export interface DescribeDashboardSnapshotJobRequest {
  /**
   * <p>The ID of the Amazon Web Services account that the dashboard snapshot job is executed in.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the dashboard that you have started a snapshot job for.</p>
   * @public
   */
  DashboardId: string | undefined;

  /**
   * <p>The ID of the job to be described. The job ID is set when you start a new job with a <code>StartDashboardSnapshotJob</code> API call.</p>
   * @public
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
 * <p>A structure that contains information on the Amazon S3 destinations of the generated snapshot.</p>
 * @public
 */
export interface SnapshotDestinationConfiguration {
  /**
   * <p>
   *             A list of <code>SnapshotS3DestinationConfiguration</code> objects that contain Amazon S3 destination configurations. This structure can hold a maximum of 1 <code>S3DestinationConfiguration</code>.
   *         </p>
   * @public
   */
  S3Destinations?: SnapshotS3DestinationConfiguration[] | undefined;
}

/**
 * <p>A structure that contains the information on the snapshot files.</p>
 * @public
 */
export interface SnapshotFileGroup {
  /**
   * <p>A list of <code>SnapshotFile</code> objects that contain the information on the snapshot files that need to be generated. This structure can hold 1 configuration at a time.</p>
   * @public
   */
  Files?: SnapshotFile[] | undefined;
}

/**
 * <p>Describes the configuration of the dashboard snapshot.</p>
 * @public
 */
export interface SnapshotConfiguration {
  /**
   * <p>A list of <code>SnapshotJobResultFileGroup</code> objects that contain information about the snapshot that is generated. This list can hold a maximum of 6 <code>FileGroup</code> configurations.</p>
   * @public
   */
  FileGroups: SnapshotFileGroup[] | undefined;

  /**
   * <p>A structure that contains information on the Amazon S3 bucket that the generated snapshot is stored in.</p>
   * @public
   */
  DestinationConfiguration?: SnapshotDestinationConfiguration | undefined;

  /**
   * <p>A list of Quick Sight parameters and the list's override values.</p>
   * @public
   */
  Parameters?: _Parameters | undefined;
}

/**
 * <p>Use this structure to redact sensitive information that you provide about an anonymous user from the snapshot.</p>
 * @public
 */
export interface SnapshotAnonymousUserRedacted {
  /**
   * <p>The tag keys for the <code>RowLevelPermissionTags</code>.</p>
   * @public
   */
  RowLevelPermissionTagKeys?: string[] | undefined;
}

/**
 * <p>A structure that contains information about the users that the dashboard snapshot is generated for. Sensitive user information is excluded.
 *         </p>
 * @public
 */
export interface SnapshotUserConfigurationRedacted {
  /**
   * <p>
   *             An array of records that describe anonymous users that the dashboard snapshot is generated for. Sensitive user information is excluded.
   *         </p>
   * @public
   */
  AnonymousUsers?: SnapshotAnonymousUserRedacted[] | undefined;
}

/**
 * @public
 */
export interface DescribeDashboardSnapshotJobResponse {
  /**
   * <p>
   *             The ID of the Amazon Web Services account that the dashboard snapshot job is executed in.
   *         </p>
   * @public
   */
  AwsAccountId?: string | undefined;

  /**
   * <p>The ID of the dashboard that you have started a snapshot job for.</p>
   * @public
   */
  DashboardId?: string | undefined;

  /**
   * <p>The ID of the job to be described. The job ID is set when you start a new job with a <code>StartDashboardSnapshotJob</code> API call.</p>
   * @public
   */
  SnapshotJobId?: string | undefined;

  /**
   * <p>The user configuration for the snapshot job. This information is provided when you make a <code>StartDashboardSnapshotJob</code> API call.</p>
   * @public
   */
  UserConfiguration?: SnapshotUserConfigurationRedacted | undefined;

  /**
   * <p>The snapshot configuration of the job. This information is provided when you make a <code>StartDashboardSnapshotJob</code> API call.</p>
   * @public
   */
  SnapshotConfiguration?: SnapshotConfiguration | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the snapshot job. The job ARN is generated when you start a new job with a <code>StartDashboardSnapshotJob</code> API call.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
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
   * @public
   */
  JobStatus?: SnapshotJobStatus | undefined;

  /**
   * <p>
   *             The time that the snapshot job was created.
   *         </p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>
   *             The time that the snapshot job status was last updated.
   *         </p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

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
export interface DescribeDashboardSnapshotJobResultRequest {
  /**
   * <p>The ID of the Amazon Web Services account that the dashboard snapshot job is executed in.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the dashboard that you have started a snapshot job for.</p>
   * @public
   */
  DashboardId: string | undefined;

  /**
   * <p>The ID of the job to be described. The job ID is set when you start a new job with a <code>StartDashboardSnapshotJob</code> API call.</p>
   * @public
   */
  SnapshotJobId: string | undefined;
}

/**
 * <p>An object that contains information on the error that caused the snapshot job to fail.</p>
 * @public
 */
export interface SnapshotJobErrorInfo {
  /**
   * <p>The error message.</p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p>The error type.</p>
   * @public
   */
  ErrorType?: string | undefined;
}

/**
 * <p>An object that provides information on the result of a snapshot job. This object provides information about the job, the job status, and the location of the generated file.</p>
 * @public
 */
export interface SnapshotJobResult {
  /**
   * <p> A list of <code>AnonymousUserSnapshotJobResult</code> objects that contain information on anonymous users and their user configurations. This data provided by you when you make a <code>StartDashboardSnapshotJob</code> API call.</p>
   * @public
   */
  AnonymousUsers?: AnonymousUserSnapshotJobResult[] | undefined;
}

/**
 * @public
 */
export interface DescribeDashboardSnapshotJobResultResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the snapshot job. The job ARN is generated when you start a new job with a <code>StartDashboardSnapshotJob</code> API call.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>Indicates the status of a job after it has reached a terminal state. A finished snapshot job will retuen a <code>COMPLETED</code> or <code>FAILED</code> status.</p>
   * @public
   */
  JobStatus?: SnapshotJobStatus | undefined;

  /**
   * <p>The time that a snapshot job was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The time that a snapshot job status was last updated.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>The result of the snapshot job. Jobs that have successfully completed will return the S3Uri where they are located. Jobs that have failedwill return information on the error that caused the job to fail.</p>
   * @public
   */
  Result?: SnapshotJobResult | undefined;

  /**
   * <p>Displays information for the error that caused a job to fail.</p>
   * @public
   */
  ErrorInfo?: SnapshotJobErrorInfo | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
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
export interface DescribeDashboardsQAConfigurationRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the dashboard QA configuration that you want described.</p>
   * @public
   */
  AwsAccountId: string | undefined;
}

/**
 * @public
 */
export interface DescribeDashboardsQAConfigurationResponse {
  /**
   * <p>The status of dashboards QA configuration that you want described.</p>
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
 * <p>The <code>NextToken</code> value isn't valid.</p>
 * @public
 */
export class InvalidNextTokenException extends __BaseException {
  readonly name: "InvalidNextTokenException" = "InvalidNextTokenException";
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
 * @public
 * @enum
 */
export const QDataKeyType = {
  AWS_OWNED: "AWS_OWNED",
  CMK: "CMK",
} as const;

/**
 * @public
 */
export type QDataKeyType = (typeof QDataKeyType)[keyof typeof QDataKeyType];

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
export interface DescribeQPersonalizationConfigurationRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the personalization configuration that the user wants described.</p>
   * @public
   */
  AwsAccountId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PersonalizationMode = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type PersonalizationMode = (typeof PersonalizationMode)[keyof typeof PersonalizationMode];

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
 * @enum
 */
export const QSearchStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type QSearchStatus = (typeof QSearchStatus)[keyof typeof QSearchStatus];

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
 * 			added to the approved list by an Amazon Quick Suite admin.</p>
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
 * @public
 * @enum
 */
export const FieldName = {
  DIRECT_QUICKSIGHT_OWNER: "DIRECT_QUICKSIGHT_OWNER",
  DIRECT_QUICKSIGHT_SOLE_OWNER: "DIRECT_QUICKSIGHT_SOLE_OWNER",
  DIRECT_QUICKSIGHT_VIEWER_OR_OWNER: "DIRECT_QUICKSIGHT_VIEWER_OR_OWNER",
  FLOW_DESCRIPTION: "assetDescription",
  FLOW_NAME: "assetName",
} as const;

/**
 * @public
 */
export type FieldName = (typeof FieldName)[keyof typeof FieldName];

/**
 * @public
 * @enum
 */
export const FlowPublishState = {
  DRAFT: "DRAFT",
  PENDING_APPROVAL: "PENDING_APPROVAL",
  PUBLISHED: "PUBLISHED",
} as const;

/**
 * @public
 */
export type FlowPublishState = (typeof FlowPublishState)[keyof typeof FlowPublishState];

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
 * @public
 * @enum
 */
export const GeneratedAnswerStatus = {
  ANSWER_DOWNGRADE: "ANSWER_DOWNGRADE",
  ANSWER_GENERATED: "ANSWER_GENERATED",
  ANSWER_RETRIEVED: "ANSWER_RETRIEVED",
} as const;

/**
 * @public
 */
export type GeneratedAnswerStatus = (typeof GeneratedAnswerStatus)[keyof typeof GeneratedAnswerStatus];

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
   *             are not using an Amazon Quick Suite custom namespace, set this to
   *                 <code>default</code>.</p>
   * @public
   */
  Namespace: string | undefined;

  /**
   * <p>The session tags used for row-level security. Before you use this parameter, make sure
   *             that you have configured the relevant datasets using the
   *                 <code>DataSet$RowLevelPermissionTagConfiguration</code> parameter so that session
   *             tags can be used to provide row-level security.</p>
   *          <p>These are not the tags used for the Amazon Web Services resource tagging feature. For
   *             more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/quicksight-dev-rls-tags.html">Using Row-Level Security
   *                 (RLS) with Tags</a>in the <i>Amazon Quick Sight User
   *             Guide</i>.</p>
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
   * <p>The Amazon Resource Name (ARN) to use for the anonymous Amazon Quick Suite
   *             user.</p>
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
 * <p>This error indicates that you are calling an embedding operation in Amazon Quick Sight
 * 			without the required pricing plan on your Amazon Web Services account. Before you can use embedding
 * 			for anonymous users, a Quick Suite administrator needs to add capacity pricing to Quick Sight. You
 * 		    can do this on the <b>Manage Quick Suite</b> page. </p>
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
   * <p>The shared view settings of an embedded dashboard.</p>
   * @public
   */
  SharedView?: SharedViewConfigurations | undefined;

  /**
   * <p>The bookmarks configuration for an embedded dashboard in Amazon Quick Sight.</p>
   * @public
   */
  Bookmarks?: BookmarksConfigurations | undefined;

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
   *             in the Generative Q&A experience. You can find a topic ID by navigating to the Topics pane in the Quick Suite application and opening a topic. The ID is in the URL for the topic that
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
}

/**
 * @internal
 */
export const TopicRangeFilterConstantFilterSensitiveLog = (obj: TopicRangeFilterConstant): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TopicDateRangeFilterFilterSensitiveLog = (obj: TopicDateRangeFilter): any => ({
  ...obj,
  ...(obj.Constant && { Constant: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TopicSingularFilterConstantFilterSensitiveLog = (obj: TopicSingularFilterConstant): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TopicNullFilterFilterSensitiveLog = (obj: TopicNullFilter): any => ({
  ...obj,
  ...(obj.Constant && { Constant: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TopicNumericEqualityFilterFilterSensitiveLog = (obj: TopicNumericEqualityFilter): any => ({
  ...obj,
  ...(obj.Constant && { Constant: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TopicNumericRangeFilterFilterSensitiveLog = (obj: TopicNumericRangeFilter): any => ({
  ...obj,
  ...(obj.Constant && { Constant: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TopicRelativeDateFilterFilterSensitiveLog = (obj: TopicRelativeDateFilter): any => ({
  ...obj,
  ...(obj.Constant && { Constant: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TopicFilterFilterSensitiveLog = (obj: TopicFilter): any => ({
  ...obj,
  ...(obj.CategoryFilter && { CategoryFilter: TopicCategoryFilterFilterSensitiveLog(obj.CategoryFilter) }),
  ...(obj.NumericEqualityFilter && {
    NumericEqualityFilter: TopicNumericEqualityFilterFilterSensitiveLog(obj.NumericEqualityFilter),
  }),
  ...(obj.NumericRangeFilter && {
    NumericRangeFilter: TopicNumericRangeFilterFilterSensitiveLog(obj.NumericRangeFilter),
  }),
  ...(obj.DateRangeFilter && { DateRangeFilter: TopicDateRangeFilterFilterSensitiveLog(obj.DateRangeFilter) }),
  ...(obj.RelativeDateFilter && {
    RelativeDateFilter: TopicRelativeDateFilterFilterSensitiveLog(obj.RelativeDateFilter),
  }),
  ...(obj.NullFilter && { NullFilter: TopicNullFilterFilterSensitiveLog(obj.NullFilter) }),
});

/**
 * @internal
 */
export const DatasetMetadataFilterSensitiveLog = (obj: DatasetMetadata): any => ({
  ...obj,
  ...(obj.Filters && { Filters: obj.Filters.map((item) => TopicFilterFilterSensitiveLog(item)) }),
  ...(obj.Columns && { Columns: obj.Columns.map((item) => TopicColumnFilterSensitiveLog(item)) }),
  ...(obj.CalculatedFields && {
    CalculatedFields: obj.CalculatedFields.map((item) => TopicCalculatedFieldFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const TopicDetailsFilterSensitiveLog = (obj: TopicDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTopicRequestFilterSensitiveLog = (obj: CreateTopicRequest): any => ({
  ...obj,
  ...(obj.CustomInstructions && { CustomInstructions: CustomInstructionsFilterSensitiveLog(obj.CustomInstructions) }),
});

/**
 * @internal
 */
export const DashboardVersionFilterSensitiveLog = (obj: DashboardVersion): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DashboardFilterSensitiveLog = (obj: Dashboard): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OutputColumnFilterSensitiveLog = (obj: OutputColumn): any => ({
  ...obj,
  ...(obj.Description && { Description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DataSetFilterSensitiveLog = (obj: DataSet): any => ({
  ...obj,
  ...(obj.PhysicalTableMap && {
    PhysicalTableMap: Object.entries(obj.PhysicalTableMap).reduce(
      (acc: any, [key, value]: [string, PhysicalTable]) => ((acc[key] = PhysicalTableFilterSensitiveLog(value)), acc),
      {}
    ),
  }),
  ...(obj.LogicalTableMap && {
    LogicalTableMap: Object.entries(obj.LogicalTableMap).reduce(
      (acc: any, [key, value]: [string, LogicalTable]) => ((acc[key] = LogicalTableFilterSensitiveLog(value)), acc),
      {}
    ),
  }),
  ...(obj.OutputColumns && { OutputColumns: obj.OutputColumns.map((item) => OutputColumnFilterSensitiveLog(item)) }),
  ...(obj.RowLevelPermissionTagConfiguration && {
    RowLevelPermissionTagConfiguration: RowLevelPermissionTagConfigurationFilterSensitiveLog(
      obj.RowLevelPermissionTagConfiguration
    ),
  }),
  ...(obj.SemanticModelConfiguration && {
    SemanticModelConfiguration: SemanticModelConfigurationFilterSensitiveLog(obj.SemanticModelConfiguration),
  }),
});

/**
 * @internal
 */
export const DescribeActionConnectorResponseFilterSensitiveLog = (obj: DescribeActionConnectorResponse): any => ({
  ...obj,
  ...(obj.ActionConnector && { ActionConnector: ActionConnectorFilterSensitiveLog(obj.ActionConnector) }),
});

/**
 * @internal
 */
export const DescribeAnalysisResponseFilterSensitiveLog = (obj: DescribeAnalysisResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAnalysisDefinitionResponseFilterSensitiveLog = (obj: DescribeAnalysisDefinitionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAssetBundleExportJobResponseFilterSensitiveLog = (
  obj: DescribeAssetBundleExportJobResponse
): any => ({
  ...obj,
  ...(obj.DownloadUrl && { DownloadUrl: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeAssetBundleImportJobResponseFilterSensitiveLog = (
  obj: DescribeAssetBundleImportJobResponse
): any => ({
  ...obj,
  ...(obj.AssetBundleImportSource && {
    AssetBundleImportSource: AssetBundleImportSourceDescriptionFilterSensitiveLog(obj.AssetBundleImportSource),
  }),
});

/**
 * @internal
 */
export const DescribeDashboardResponseFilterSensitiveLog = (obj: DescribeDashboardResponse): any => ({
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
export const TemplateVersionFilterSensitiveLog = (obj: TemplateVersion): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TemplateFilterSensitiveLog = (obj: Template): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTemplateResponseFilterSensitiveLog = (obj: DescribeTemplateResponse): any => ({
  ...obj,
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
  ...(obj.CustomInstructions && { CustomInstructions: CustomInstructionsFilterSensitiveLog(obj.CustomInstructions) }),
});

/**
 * @internal
 */
export const GeneratedAnswerResultFilterSensitiveLog = (obj: GeneratedAnswerResult): any => ({
  ...obj,
  ...(obj.QuestionText && { QuestionText: SENSITIVE_STRING }),
  ...(obj.Restatement && { Restatement: SENSITIVE_STRING }),
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
