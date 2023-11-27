// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  AccountCustomization,
  AccountInfo,
  AccountSettings,
  ActiveIAMPolicyAssignment,
  Analysis,
  AnalysisError,
  Entity,
  ResourceStatus,
  Sheet,
} from "./models_0";
import {
  AnalysisDefinition,
  AnalysisSummary,
  AnonymousUserEmbeddingExperienceConfiguration,
  DashboardVisualId,
  FilterOperator,
} from "./models_1";
import {
  _Parameters,
  _ParametersFilterSensitiveLog,
  AnonymousUserSnapshotJobResult,
  AssetBundleCloudFormationOverridePropertyConfiguration,
  AssetBundleExportFormat,
  AssetBundleExportJobError,
  AssetBundleExportJobStatus,
  AssetBundleExportJobSummary,
  AssetBundleExportJobValidationStrategy,
  AssetBundleExportJobWarning,
  AssetBundleImportFailureAction,
  AssetBundleImportJobError,
  AssetBundleImportJobOverrideParameters,
  AssetBundleImportJobOverridePermissions,
  AssetBundleImportJobOverrideTags,
  AssetBundleImportJobOverrideValidationStrategy,
  AssetBundleImportJobStatus,
  AssetBundleImportJobSummary,
  AssetBundleImportSourceDescription,
  AssetBundleImportSourceDescriptionFilterSensitiveLog,
  AssignmentStatus,
  AuthorizedTargetsByService,
  BookmarksConfigurations,
  ColumnDataSubType,
  ColumnDataType,
  ColumnGroup,
  ColumnLevelPermissionRule,
  ConstantType,
  DashboardPublishOptions,
  DashboardVersionDefinition,
  DataAggregation,
  DataSetConfiguration,
  DataSetImportMode,
  DatasetParameter,
  DataSetUsageConfiguration,
  DataSourceParameters,
  DataSourceType,
  FieldFolder,
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
  PhysicalTable,
  RefreshSchedule,
  ResourcePermission,
  Role,
  RowLevelPermissionDataSet,
  RowLevelPermissionTagConfiguration,
  RowLevelPermissionTagConfigurationFilterSensitiveLog,
  ServiceType,
  SharingModel,
  SnapshotFile,
  SnapshotS3DestinationConfiguration,
  SslProperties,
  Tag,
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
  TopicRangeFilterConstant,
  TopicTimeGranularity,
  VpcConnectionProperties,
} from "./models_2";
import { QuickSightServiceException as __BaseException } from "./QuickSightServiceException";

/**
 * @public
 * <p>A filter used to restrict data based on a range of dates or times.</p>
 */
export interface TopicDateRangeFilter {
  /**
   * @public
   * <p>A Boolean value that indicates whether the date range filter should include the boundary values. If
   *          set to true, the filter includes the start and end dates. If set to false, the filter
   *          excludes them.</p>
   */
  Inclusive?: boolean;

  /**
   * @public
   * <p>The constant used in a date range filter.</p>
   */
  Constant?: TopicRangeFilterConstant;
}

/**
 * @public
 * @enum
 */
export const FilterClass = {
  CONDITIONAL_VALUE_FILTER: "CONDITIONAL_VALUE_FILTER",
  ENFORCED_VALUE_FILTER: "ENFORCED_VALUE_FILTER",
  NAMED_VALUE_FILTER: "NAMED_VALUE_FILTER",
} as const;

/**
 * @public
 */
export type FilterClass = (typeof FilterClass)[keyof typeof FilterClass];

/**
 * @public
 * @enum
 */
export const NamedFilterType = {
  CATEGORY_FILTER: "CATEGORY_FILTER",
  DATE_RANGE_FILTER: "DATE_RANGE_FILTER",
  NUMERIC_EQUALITY_FILTER: "NUMERIC_EQUALITY_FILTER",
  NUMERIC_RANGE_FILTER: "NUMERIC_RANGE_FILTER",
  RELATIVE_DATE_FILTER: "RELATIVE_DATE_FILTER",
} as const;

/**
 * @public
 */
export type NamedFilterType = (typeof NamedFilterType)[keyof typeof NamedFilterType];

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
 * @public
 * <p>A structure that represents a singular filter constant, used in filters to specify a single value to match against.</p>
 */
export interface TopicSingularFilterConstant {
  /**
   * @public
   * <p>The type of the singular filter constant. Valid values for this structure are <code>SINGULAR</code>.</p>
   */
  ConstantType?: ConstantType;

  /**
   * @public
   * <p>The value of the singular filter constant.</p>
   */
  SingularConstant?: string;
}

/**
 * @public
 * <p>A filter that filters topics based on the value of a numeric field. The filter includes only topics whose numeric field value matches the specified value.</p>
 */
export interface TopicNumericEqualityFilter {
  /**
   * @public
   * <p>The constant used in a numeric equality filter.</p>
   */
  Constant?: TopicSingularFilterConstant;

  /**
   * @public
   * <p>An aggregation function that specifies how to calculate the value of a numeric field for
   *          a topic. Valid values for this structure are <code>NO_AGGREGATION</code>, <code>SUM</code>,
   *             <code>AVERAGE</code>, <code>COUNT</code>, <code>DISTINCT_COUNT</code>, <code>MAX</code>,
   *             <code>MEDIAN</code>, <code>MIN</code>, <code>STDEV</code>, <code>STDEVP</code>,
   *             <code>VAR</code>,
   *          and <code>VARP</code>.</p>
   */
  Aggregation?: NamedFilterAggType;
}

/**
 * @public
 * <p>A filter that filters topics based on the value of a numeric field. The filter includes only topics whose numeric field value falls within the specified range.</p>
 */
export interface TopicNumericRangeFilter {
  /**
   * @public
   * <p>A Boolean value that indicates whether the endpoints of the numeric range are included in the filter.
   *          If set to true, topics whose numeric field value is equal to the endpoint values will be
   *          included in the filter. If set to false, topics whose numeric field value is equal to the
   *          endpoint values will be excluded from the filter.</p>
   */
  Inclusive?: boolean;

  /**
   * @public
   * <p>The constant used in a
   *          numeric range filter.</p>
   */
  Constant?: TopicRangeFilterConstant;

  /**
   * @public
   * <p>An aggregation function that specifies how to calculate the value of a numeric field for
   *          a topic, Valid values for this structure are <code>NO_AGGREGATION</code>, <code>SUM</code>,
   *             <code>AVERAGE</code>, <code>COUNT</code>, <code>DISTINCT_COUNT</code>, <code>MAX</code>,
   *             <code>MEDIAN</code>, <code>MIN</code>, <code>STDEV</code>, <code>STDEVP</code>,
   *             <code>VAR</code>,
   *          and <code>VARP</code>.</p>
   */
  Aggregation?: NamedFilterAggType;
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
 * @public
 * <p>A structure that represents a relative date filter.</p>
 */
export interface TopicRelativeDateFilter {
  /**
   * @public
   * <p>The level of time precision that is used to aggregate <code>DateTime</code> values.</p>
   */
  TimeGranularity?: TopicTimeGranularity;

  /**
   * @public
   * <p>The function to be used in a relative date filter to determine the range of dates to include in the results. Valid values for this structure are <code>BEFORE</code>, <code>AFTER</code>, and <code>BETWEEN</code>.</p>
   */
  RelativeDateFilterFunction?: TopicRelativeDateFilterFunction;

  /**
   * @public
   * <p>The constant used in a
   *          relative date filter.</p>
   */
  Constant?: TopicSingularFilterConstant;
}

/**
 * @public
 * <p>A structure that represents a filter used to select items for a topic.</p>
 */
export interface TopicFilter {
  /**
   * @public
   * <p>A description of the filter used to select items for a topic.</p>
   */
  FilterDescription?: string;

  /**
   * @public
   * <p>The class of the filter. Valid values for this structure are
   *             <code>ENFORCED_VALUE_FILTER</code>,
   *          <code>CONDITIONAL_VALUE_FILTER</code>,
   *          and <code>NAMED_VALUE_FILTER</code>.</p>
   */
  FilterClass?: FilterClass;

  /**
   * @public
   * <p>The name of the filter.</p>
   */
  FilterName: string | undefined;

  /**
   * @public
   * <p>The other names or aliases for the filter.</p>
   */
  FilterSynonyms?: string[];

  /**
   * @public
   * <p>The name of the field that the filter operates on.</p>
   */
  OperandFieldName: string | undefined;

  /**
   * @public
   * <p>The type of the filter. Valid values for this structure are
   *          <code>CATEGORY_FILTER</code>, <code>NUMERIC_EQUALITY_FILTER</code>,
   *             <code>NUMERIC_RANGE_FILTER</code>,
   *          <code>DATE_RANGE_FILTER</code>,
   *          and <code>RELATIVE_DATE_FILTER</code>.</p>
   */
  FilterType?: NamedFilterType;

  /**
   * @public
   * <p>The category filter that is associated with this filter.</p>
   */
  CategoryFilter?: TopicCategoryFilter;

  /**
   * @public
   * <p>The numeric equality filter.</p>
   */
  NumericEqualityFilter?: TopicNumericEqualityFilter;

  /**
   * @public
   * <p>The numeric range filter.</p>
   */
  NumericRangeFilter?: TopicNumericRangeFilter;

  /**
   * @public
   * <p>The date range filter.</p>
   */
  DateRangeFilter?: TopicDateRangeFilter;

  /**
   * @public
   * <p>The relative date filter.</p>
   */
  RelativeDateFilter?: TopicRelativeDateFilter;
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
 * @public
 * <p>A structure that represents a metric.</p>
 */
export interface NamedEntityDefinitionMetric {
  /**
   * @public
   * <p>The aggregation of a named entity. Valid values for this structure are <code>SUM</code>,
   *             <code>MIN</code>, <code>MAX</code>, <code>COUNT</code>, <code>AVERAGE</code>,
   *             <code>DISTINCT_COUNT</code>, <code>STDEV</code>, <code>STDEVP</code>, <code>VAR</code>,
   *             <code>VARP</code>, <code>PERCENTILE</code>,
   *          <code>MEDIAN</code>,
   *          and <code>CUSTOM</code>.</p>
   */
  Aggregation?: NamedEntityAggType;

  /**
   * @public
   * <p>The additional parameters for an aggregation function.</p>
   */
  AggregationFunctionParameters?: Record<string, string>;
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
 * @public
 * <p>A structure that represents a named entity.</p>
 */
export interface NamedEntityDefinition {
  /**
   * @public
   * <p>The name of the entity.</p>
   */
  FieldName?: string;

  /**
   * @public
   * <p>The property name to be used for the named entity.</p>
   */
  PropertyName?: string;

  /**
   * @public
   * <p>The property role. Valid values for this structure are <code>PRIMARY</code> and <code>ID</code>.</p>
   */
  PropertyRole?: PropertyRole;

  /**
   * @public
   * <p>The property usage. Valid values for this structure are <code>INHERIT</code>,
   *             <code>DIMENSION</code>,
   *          and <code>MEASURE</code>.</p>
   */
  PropertyUsage?: PropertyUsage;

  /**
   * @public
   * <p>The definition of a metric.</p>
   */
  Metric?: NamedEntityDefinitionMetric;
}

/**
 * @public
 * <p>A structure that represents a semantic entity type.</p>
 */
export interface SemanticEntityType {
  /**
   * @public
   * <p>The semantic entity type name.</p>
   */
  TypeName?: string;

  /**
   * @public
   * <p>The semantic entity sub type name.</p>
   */
  SubTypeName?: string;

  /**
   * @public
   * <p>The semantic entity type parameters.</p>
   */
  TypeParameters?: Record<string, string>;
}

/**
 * @public
 * <p>A structure that represents a named entity.</p>
 */
export interface TopicNamedEntity {
  /**
   * @public
   * <p>The name of the named entity.</p>
   */
  EntityName: string | undefined;

  /**
   * @public
   * <p>The description of the named entity.</p>
   */
  EntityDescription?: string;

  /**
   * @public
   * <p>The other
   *          names or aliases for the named entity.</p>
   */
  EntitySynonyms?: string[];

  /**
   * @public
   * <p>The type of named entity that a topic represents.</p>
   */
  SemanticEntityType?: SemanticEntityType;

  /**
   * @public
   * <p>The definition of a named entity.</p>
   */
  Definition?: NamedEntityDefinition[];
}

/**
 * @public
 * <p>A structure that represents a dataset.</p>
 */
export interface DatasetMetadata {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   */
  DatasetArn: string | undefined;

  /**
   * @public
   * <p>The name of the dataset.</p>
   */
  DatasetName?: string;

  /**
   * @public
   * <p>The description of the dataset.</p>
   */
  DatasetDescription?: string;

  /**
   * @public
   * <p>The definition of a data aggregation.</p>
   */
  DataAggregation?: DataAggregation;

  /**
   * @public
   * <p>The list of filter definitions.</p>
   */
  Filters?: TopicFilter[];

  /**
   * @public
   * <p>The list of column definitions.</p>
   */
  Columns?: TopicColumn[];

  /**
   * @public
   * <p>The list of calculated field definitions.</p>
   */
  CalculatedFields?: TopicCalculatedField[];

  /**
   * @public
   * <p>The list of named entities definitions.</p>
   */
  NamedEntities?: TopicNamedEntity[];
}

/**
 * @public
 * <p>A structure that describes the details of a topic, such as its name, description, and associated data sets.</p>
 */
export interface TopicDetails {
  /**
   * @public
   * <p>The name of the topic.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description of the topic.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The data sets that the topic is associated with.</p>
   */
  DataSets?: DatasetMetadata[];
}

/**
 * @public
 */
export interface CreateTopicRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that you want to create a topic in.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the topic that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  TopicId: string | undefined;

  /**
   * @public
   * <p>The definition of a topic to create.</p>
   */
  Topic: TopicDetails | undefined;

  /**
   * @public
   * <p>Contains a map of the key-value pairs for the resource tag or tags that are assigned to
   *          the dataset.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateTopicResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the topic.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The ID for the topic that you want to create. This ID is unique per Amazon Web Services Region
   *          for each Amazon Web Services account.</p>
   */
  TopicId?: string;

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
 * @public
 * <p>A structure that represents a topic refresh schedule.</p>
 */
export interface TopicRefreshSchedule {
  /**
   * @public
   * <p>A Boolean value that controls whether to schedule is enabled.</p>
   */
  IsEnabled: boolean | undefined;

  /**
   * @public
   * <p>A Boolean value that controls whether to schedule runs at the same schedule that is specified in
   *          SPICE dataset.</p>
   */
  BasedOnSpiceSchedule: boolean | undefined;

  /**
   * @public
   * <p>The starting date and time for the refresh schedule.</p>
   */
  StartingAt?: Date;

  /**
   * @public
   * <p>The timezone that you want the refresh schedule to use.</p>
   */
  Timezone?: string;

  /**
   * @public
   * <p>The time of day when the refresh should run, for
   *          example, Monday-Sunday.</p>
   */
  RepeatAt?: string;

  /**
   * @public
   * <p>The type of refresh schedule. Valid values for this structure are <code>HOURLY</code>,
   *             <code>DAILY</code>,
   *          <code>WEEKLY</code>,
   *          and <code>MONTHLY</code>.</p>
   */
  TopicScheduleType?: TopicScheduleType;
}

/**
 * @public
 */
export interface CreateTopicRefreshScheduleRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the topic
   *          you're creating a refresh schedule for.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the topic that you want to modify. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  TopicId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   */
  DatasetArn: string | undefined;

  /**
   * @public
   * <p>The name of the dataset.</p>
   */
  DatasetName?: string;

  /**
   * @public
   * <p>The definition of a refresh schedule.</p>
   */
  RefreshSchedule: TopicRefreshSchedule | undefined;
}

/**
 * @public
 */
export interface CreateTopicRefreshScheduleResponse {
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
export interface CreateVPCConnectionRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID of the account where you want to create a new VPC
   * 			connection.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the VPC connection that
   * 			you're creating. This ID is a unique identifier for each Amazon Web Services Region in an
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
   * <p>The IAM role to associate with the VPC connection.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>A map of the key-value pairs for the resource tag or tags assigned to the VPC
   * 			connection.</p>
   */
  Tags?: Tag[];
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
   * @public
   * <p>The Amazon Resource Name (ARN) of the VPC connection.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The ID for the VPC connection that
   * 			you're creating. This ID is unique per Amazon Web Services Region for each Amazon Web Services
   * 			account.</p>
   */
  VPCConnectionId?: string;

  /**
   * @public
   * <p>The status of the creation of the VPC connection.</p>
   */
  CreationStatus?: VPCConnectionResourceStatus;

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
 * @public
 * <p>Dashboard error.</p>
 */
export interface DashboardError {
  /**
   * @public
   * <p>Type.</p>
   */
  Type?: DashboardErrorType;

  /**
   * @public
   * <p>Message.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>Lists the violated entities that caused the dashboard error.</p>
   */
  ViolatedEntities?: Entity[];
}

/**
 * @public
 * <p>Dashboard version.</p>
 */
export interface DashboardVersion {
  /**
   * @public
   * <p>The time that this dashboard version was created.</p>
   */
  CreatedTime?: Date;

  /**
   * @public
   * <p>Errors associated with this dashboard version.</p>
   */
  Errors?: DashboardError[];

  /**
   * @public
   * <p>Version number for this version of the dashboard.</p>
   */
  VersionNumber?: number;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: ResourceStatus;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>Source entity ARN.</p>
   */
  SourceEntityArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Numbers (ARNs) for the datasets that are associated with this
   *             version of the dashboard.</p>
   */
  DataSetArns?: string[];

  /**
   * @public
   * <p>Description.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The ARN of the theme associated with a version of the dashboard.</p>
   */
  ThemeArn?: string;

  /**
   * @public
   * <p>A list of the associated sheets with the unique identifier and name of each sheet.</p>
   */
  Sheets?: Sheet[];
}

/**
 * @public
 * <p>Dashboard.</p>
 */
export interface Dashboard {
  /**
   * @public
   * <p>Dashboard ID.</p>
   */
  DashboardId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>A display name for the dashboard.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>Version.</p>
   */
  Version?: DashboardVersion;

  /**
   * @public
   * <p>The time that this dashboard was created.</p>
   */
  CreatedTime?: Date;

  /**
   * @public
   * <p>The last time that this dashboard was published.</p>
   */
  LastPublishedTime?: Date;

  /**
   * @public
   * <p>The last time that this dashboard was updated.</p>
   */
  LastUpdatedTime?: Date;
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
 * @public
 * <p>A filter that you apply when searching for dashboards. </p>
 */
export interface DashboardSearchFilter {
  /**
   * @public
   * <p>The comparison operator that you want to use as a filter, for example  <code>"Operator": "StringEquals"</code>. Valid values are <code>"StringEquals"</code> and  <code>"StringLike"</code>.</p>
   *          <p>If you set the operator value to <code>"StringEquals"</code>, you need to provide an ownership related filter in the <code>"NAME"</code> field and the arn of the user or group whose folders you want to search in the <code>"Value"</code> field. For example,  <code>"Name":"DIRECT_QUICKSIGHT_OWNER", "Operator": "StringEquals", "Value": "arn:aws:quicksight:us-east-1:1:user/default/UserName1"</code>.</p>
   *          <p>If you set the value to <code>"StringLike"</code>, you need to provide the name of the folders you are searching for. For example, <code>"Name":"DASHBOARD_NAME", "Operator": "StringLike", "Value": "Test"</code>. The <code>"StringLike"</code> operator only supports the <code>NAME</code> value <code>DASHBOARD_NAME</code>.</p>
   */
  Operator: FilterOperator | undefined;

  /**
   * @public
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
   */
  Name?: DashboardFilterAttribute;

  /**
   * @public
   * <p>The value of the named item, in this case <code>QUICKSIGHT_USER</code>, that you want
   *             to use as a filter, for example, <code>"Value":
   *             "arn:aws:quicksight:us-east-1:1:user/default/UserName1"</code>. </p>
   */
  Value?: string;
}

/**
 * @public
 * <p>Dashboard summary.</p>
 */
export interface DashboardSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>Dashboard ID.</p>
   */
  DashboardId?: string;

  /**
   * @public
   * <p>A display name for the dashboard.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The time that this dashboard was created.</p>
   */
  CreatedTime?: Date;

  /**
   * @public
   * <p>The last time that this dashboard was updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * @public
   * <p>Published version number.</p>
   */
  PublishedVersionNumber?: number;

  /**
   * @public
   * <p>The last time that this dashboard was published.</p>
   */
  LastPublishedTime?: Date;
}

/**
 * @public
 * <p>Dashboard version summary.</p>
 */
export interface DashboardVersionSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The time that this dashboard version was created.</p>
   */
  CreatedTime?: Date;

  /**
   * @public
   * <p>Version number.</p>
   */
  VersionNumber?: number;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: ResourceStatus;

  /**
   * @public
   * <p>Source entity ARN.</p>
   */
  SourceEntityArn?: string;

  /**
   * @public
   * <p>Description.</p>
   */
  Description?: string;
}

/**
 * @public
 * <p>Output column.</p>
 */
export interface OutputColumn {
  /**
   * @public
   * <p>The display name of the column..</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A description for a column.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The data type of the column.</p>
   */
  Type?: ColumnDataType;

  /**
   * @public
   * <p>The sub data type of the column.</p>
   */
  SubType?: ColumnDataSubType;
}

/**
 * @public
 * <p>Dataset.</p>
 */
export interface DataSet {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The ID of the dataset.</p>
   */
  DataSetId?: string;

  /**
   * @public
   * <p>A display name for the dataset.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The time that this dataset was created.</p>
   */
  CreatedTime?: Date;

  /**
   * @public
   * <p>The last time that this dataset was updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * @public
   * <p>Declares the physical tables that are available in the underlying data sources.</p>
   */
  PhysicalTableMap?: Record<string, PhysicalTable>;

  /**
   * @public
   * <p>Configures the combination and transformation of the data from the physical
   *             tables.</p>
   */
  LogicalTableMap?: Record<string, LogicalTable>;

  /**
   * @public
   * <p>The list of columns after all transforms. These columns are available in templates,
   *             analyses, and dashboards.</p>
   */
  OutputColumns?: OutputColumn[];

  /**
   * @public
   * <p>A value that indicates whether you want to import the data into SPICE.</p>
   */
  ImportMode?: DataSetImportMode;

  /**
   * @public
   * <p>The amount of SPICE capacity used by this dataset. This is 0 if the dataset isn't
   *             imported into SPICE.</p>
   */
  ConsumedSpiceCapacityInBytes?: number;

  /**
   * @public
   * <p>Groupings of columns that work together in certain Amazon QuickSight features.
   *             Currently, only geospatial hierarchy is supported.</p>
   */
  ColumnGroups?: ColumnGroup[];

  /**
   * @public
   * <p>The folder that contains fields and nested subfolders for your dataset.</p>
   */
  FieldFolders?: Record<string, FieldFolder>;

  /**
   * @public
   * <p>The row-level security configuration for the dataset.</p>
   */
  RowLevelPermissionDataSet?: RowLevelPermissionDataSet;

  /**
   * @public
   * <p>The element you can use to define tags for row-level security.</p>
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
   * <p>The parameters that are declared in a dataset.</p>
   */
  DatasetParameters?: DatasetParameter[];
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
 * @public
 * @enum
 */
export const LookbackWindowSizeUnit = {
  DAY: "DAY",
  HOUR: "HOUR",
  WEEK: "WEEK",
} as const;

/**
 * @public
 */
export type LookbackWindowSizeUnit = (typeof LookbackWindowSizeUnit)[keyof typeof LookbackWindowSizeUnit];

/**
 * @public
 * <p>The lookback window setup of an incremental refresh configuration.</p>
 */
export interface LookbackWindow {
  /**
   * @public
   * <p>The name of the lookback window column.</p>
   */
  ColumnName: string | undefined;

  /**
   * @public
   * <p>The lookback window column size.</p>
   */
  Size: number | undefined;

  /**
   * @public
   * <p>The size unit that is used for the lookback window column. Valid values for this structure are <code>HOUR</code>, <code>DAY</code>, and <code>WEEK</code>.</p>
   */
  SizeUnit: LookbackWindowSizeUnit | undefined;
}

/**
 * @public
 * <p>The incremental refresh configuration for a dataset.</p>
 */
export interface IncrementalRefresh {
  /**
   * @public
   * <p>The lookback window setup for an incremental refresh configuration.</p>
   */
  LookbackWindow: LookbackWindow | undefined;
}

/**
 * @public
 * <p>The refresh configuration of a dataset.</p>
 */
export interface RefreshConfiguration {
  /**
   * @public
   * <p>The incremental refresh for the dataset.</p>
   */
  IncrementalRefresh: IncrementalRefresh | undefined;
}

/**
 * @public
 * <p>The refresh properties of a dataset.</p>
 */
export interface DataSetRefreshProperties {
  /**
   * @public
   * <p>The refresh configuration for a dataset.</p>
   */
  RefreshConfiguration: RefreshConfiguration | undefined;
}

/**
 * @public
 * <p>A filter that you apply when searching for datasets.</p>
 */
export interface DataSetSearchFilter {
  /**
   * @public
   * <p>The comparison operator that you want to use as a filter, for example <code>"Operator": "StringEquals"</code>. Valid values are <code>"StringEquals"</code> and <code>"StringLike"</code>.</p>
   *          <p>If you set the operator value to <code>"StringEquals"</code>, you need to provide an ownership related filter in the <code>"NAME"</code> field and the arn of the user or group whose datasets you want to search in the <code>"Value"</code> field. For example, <code>"Name":"QUICKSIGHT_OWNER", "Operator": "StringEquals", "Value": "arn:aws:quicksight:us-east- 1:1:user/default/UserName1"</code>.</p>
   *          <p>If you set the value to <code>"StringLike"</code>, you need to provide the name of the datasets you are searching for. For example, <code>"Name":"DATASET_NAME", "Operator": "StringLike", "Value": "Test"</code>. The <code>"StringLike"</code> operator only supports the <code>NAME</code> value <code>DATASET_NAME</code>.</p>
   */
  Operator: FilterOperator | undefined;

  /**
   * @public
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
   */
  Name: DataSetFilterAttribute | undefined;

  /**
   * @public
   * <p>The value of the named item, in this case <code>QUICKSIGHT_OWNER</code>, that you want
   *             to use as a filter, for example, <code>"Value":
   *             "arn:aws:quicksight:us-east-1:1:user/default/UserName1"</code>.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 * <p>Dataset summary.</p>
 */
export interface DataSetSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The ID of the dataset.</p>
   */
  DataSetId?: string;

  /**
   * @public
   * <p>A display name for the dataset.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The time that this dataset was created.</p>
   */
  CreatedTime?: Date;

  /**
   * @public
   * <p>The last time that this dataset was updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * @public
   * <p>A value that indicates whether you want to import the data into SPICE.</p>
   */
  ImportMode?: DataSetImportMode;

  /**
   * @public
   * <p>The row-level security configuration for the dataset.</p>
   */
  RowLevelPermissionDataSet?: RowLevelPermissionDataSet;

  /**
   * @public
   * <p>Whether or not the row level permission tags are applied.</p>
   */
  RowLevelPermissionTagConfigurationApplied?: boolean;

  /**
   * @public
   * <p>A value that indicates if the dataset has column level permission configured.</p>
   */
  ColumnLevelPermissionRulesApplied?: boolean;
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
 * @public
 * <p>Error information for the data source creation or update.</p>
 */
export interface DataSourceErrorInfo {
  /**
   * @public
   * <p>Error type.</p>
   */
  Type?: DataSourceErrorInfoType;

  /**
   * @public
   * <p>Error message.</p>
   */
  Message?: string;
}

/**
 * @public
 * <p>The structure of a data source.</p>
 */
export interface DataSource {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the data source.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The ID of the data source. This ID is unique per Amazon Web Services Region for each
   *             Amazon Web Services account.</p>
   */
  DataSourceId?: string;

  /**
   * @public
   * <p>A display name for the data source.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The type of the data source. This type indicates which database engine the data source
   *             connects to.</p>
   */
  Type?: DataSourceType;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: ResourceStatus;

  /**
   * @public
   * <p>The time that this data source was created.</p>
   */
  CreatedTime?: Date;

  /**
   * @public
   * <p>The last time that this data source was updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * @public
   * <p>The parameters that Amazon QuickSight uses to connect to your underlying source. This
   *             is a variant type structure. For this structure to be valid, only one of the attributes
   *             can be non-null.</p>
   */
  DataSourceParameters?: DataSourceParameters;

  /**
   * @public
   * <p>A set of alternate data source parameters that you want to share for the credentials
   *             stored with this data source. The credentials are applied in tandem with the data source
   *             parameters when you copy a data source by using a create or update request. The API
   *             operation compares the <code>DataSourceParameters</code> structure that's in the request
   *             with the structures in the <code>AlternateDataSourceParameters</code> allow list. If the
   *             structures are an exact match, the request is allowed to use the credentials from this
   *             existing data source. If the <code>AlternateDataSourceParameters</code> list is null,
   *             the <code>Credentials</code> originally used with this <code>DataSourceParameters</code>
   *             are automatically allowed.</p>
   */
  AlternateDataSourceParameters?: DataSourceParameters[];

  /**
   * @public
   * <p>The VPC connection information. You need to use this parameter only when you want
   *             Amazon QuickSight to use a VPC connection when connecting to your underlying source.</p>
   */
  VpcConnectionProperties?: VpcConnectionProperties;

  /**
   * @public
   * <p>Secure Socket Layer (SSL) properties that apply when Amazon QuickSight connects to your
   *             underlying source.</p>
   */
  SslProperties?: SslProperties;

  /**
   * @public
   * <p>Error information from the last update or the creation of the data source.</p>
   */
  ErrorInfo?: DataSourceErrorInfo;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the secret associated with the data source in Amazon Secrets Manager.</p>
   */
  SecretArn?: string;
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
 * @public
 * <p>A filter that you apply when searching for data sources.</p>
 */
export interface DataSourceSearchFilter {
  /**
   * @public
   * <p>The comparison operator that you want to use as a filter, for example <code>"Operator": "StringEquals"</code>. Valid values are <code>"StringEquals"</code> and <code>"StringLike"</code>.</p>
   *          <p>If you set the operator value to <code>"StringEquals"</code>, you need to provide an ownership related filter in the <code>"NAME"</code> field and the arn of the user or group whose data sources you want to search in the <code>"Value"</code> field. For example, <code>"Name":"DIRECT_QUICKSIGHT_OWNER", "Operator": "StringEquals", "Value": "arn:aws:quicksight:us-east-1:1:user/default/UserName1"</code>.</p>
   *          <p>If you set the value to <code>"StringLike"</code>, you need to provide the name of the data sources you are searching for. For example, <code>"Name":"DATASOURCE_NAME", "Operator": "StringLike", "Value": "Test"</code>. The <code>"StringLike"</code> operator only supports the <code>NAME</code> value <code>DATASOURCE_NAME</code>.</p>
   */
  Operator: FilterOperator | undefined;

  /**
   * @public
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
   */
  Name: DataSourceFilterAttribute | undefined;

  /**
   * @public
   * <p>The value of the named item, for example <code>DIRECT_QUICKSIGHT_OWNER</code>, that you want
   *             to use as a filter, for example, <code>"Value":
   *             "arn:aws:quicksight:us-east-1:1:user/default/UserName1"</code>.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 * <p>A <code>DataSourceSummary</code> object that returns a summary of a data source.</p>
 */
export interface DataSourceSummary {
  /**
   * @public
   * <p>The arn of the datasource.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The unique ID of the data source.</p>
   */
  DataSourceId?: string;

  /**
   * @public
   * <p>The name of the data source.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The type of the data source.</p>
   */
  Type?: DataSourceType;

  /**
   * @public
   * <p>The date and time that the data source was created. This value is expressed in MM-DD-YYYY HH:MM:SS format.</p>
   */
  CreatedTime?: Date;

  /**
   * @public
   * <p>The date and time the data source was last updated. This value is expressed in MM-DD-YYYY HH:MM:SS format.</p>
   */
  LastUpdatedTime?: Date;
}

/**
 * @public
 */
export interface DeleteAccountCustomizationRequest {
  /**
   * @public
   * <p>The ID for the Amazon Web Services account that you want to delete Amazon QuickSight customizations from in
   *             this Amazon Web Services Region.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The Amazon QuickSight namespace that you're deleting the customizations from.</p>
   */
  Namespace?: string;
}

/**
 * @public
 */
export interface DeleteAccountCustomizationResponse {
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
export interface DeleteAccountSubscriptionRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID of the account that you want to delete.</p>
   */
  AwsAccountId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccountSubscriptionResponse {
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
export interface DeleteAnalysisRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account where you want to delete an analysis.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the analysis that you're deleting.</p>
   */
  AnalysisId: string | undefined;

  /**
   * @public
   * <p>A value that specifies the number of days that Amazon QuickSight waits before it deletes the
   *             analysis. You can't use this parameter with the <code>ForceDeleteWithoutRecovery</code>
   *             option in the same API call. The default value is 30.</p>
   */
  RecoveryWindowInDays?: number;

  /**
   * @public
   * <p>This option defaults to the value <code>NoForceDeleteWithoutRecovery</code>. To
   *             immediately delete the analysis, add the <code>ForceDeleteWithoutRecovery</code> option.
   *             You can't restore an analysis after it's deleted. </p>
   */
  ForceDeleteWithoutRecovery?: boolean;
}

/**
 * @public
 */
export interface DeleteAnalysisResponse {
  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the deleted analysis.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The ID of the deleted analysis.</p>
   */
  AnalysisId?: string;

  /**
   * @public
   * <p>The date and time that the analysis is scheduled to be deleted.</p>
   */
  DeletionTime?: Date;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface DeleteDashboardRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the dashboard that you're
   *             deleting.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the dashboard.</p>
   */
  DashboardId: string | undefined;

  /**
   * @public
   * <p>The version number of the dashboard. If the version number property is provided, only
   *             the specified version of the dashboard is deleted.</p>
   */
  VersionNumber?: number;
}

/**
 * @public
 */
export interface DeleteDashboardResponse {
  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The Secure Socket Layer (SSL) properties that apply for the resource.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The ID of the dashboard.</p>
   */
  DashboardId?: string;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface DeleteDataSetRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the dataset that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  DataSetId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataSetResponse {
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
export interface DeleteDataSetRefreshPropertiesRequest {
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
}

/**
 * @public
 */
export interface DeleteDataSetRefreshPropertiesResponse {
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
export interface DeleteDataSourceRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  DataSourceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataSourceResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the data source that you deleted.</p>
   */
  Arn?: string;

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
export interface DeleteFolderRequest {
  /**
   * @public
   * <p>The ID for the Amazon Web Services account that contains the folder.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the folder.</p>
   */
  FolderId: string | undefined;
}

/**
 * @public
 */
export interface DeleteFolderResponse {
  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The Amazon Resource Name of the deleted folder.</p>
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
export interface DeleteFolderMembershipRequest {
  /**
   * @public
   * <p>The ID for the Amazon Web Services account that contains the folder.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The Folder ID.</p>
   */
  FolderId: string | undefined;

  /**
   * @public
   * <p>The ID of the asset that you want to delete.</p>
   */
  MemberId: string | undefined;

  /**
   * @public
   * <p>The member type of the asset that you want to delete from a folder.</p>
   */
  MemberType: MemberType | undefined;
}

/**
 * @public
 */
export interface DeleteFolderMembershipResponse {
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
export interface DeleteGroupRequest {
  /**
   * @public
   * <p>The name of the group that you want to delete.</p>
   */
  GroupName: string | undefined;

  /**
   * @public
   * <p>The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the
   * 			Amazon Web Services account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The namespace of the group that you want to delete.</p>
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface DeleteGroupResponse {
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
export interface DeleteGroupMembershipRequest {
  /**
   * @public
   * <p>The name of the user that you want to delete from the group membership.</p>
   */
  MemberName: string | undefined;

  /**
   * @public
   * <p>The name of the group that you want to delete the user from.</p>
   */
  GroupName: string | undefined;

  /**
   * @public
   * <p>The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the
   * 			Amazon Web Services account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The namespace of the group that you want to remove a user from.</p>
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface DeleteGroupMembershipResponse {
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
export interface DeleteIAMPolicyAssignmentRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID where you want to delete the IAM
   * 			policy assignment.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The name of the assignment. </p>
   */
  AssignmentName: string | undefined;

  /**
   * @public
   * <p>The namespace that contains the assignment.</p>
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface DeleteIAMPolicyAssignmentResponse {
  /**
   * @public
   * <p>The name of the assignment. </p>
   */
  AssignmentName?: string;

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
export interface DeleteIdentityPropagationConfigRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that you want to delete an identity propagation configuration from.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The name of the Amazon Web Services service that you want to delete the associated access scopes and authorized targets from.</p>
   */
  Service: ServiceType | undefined;
}

/**
 * @public
 */
export interface DeleteIdentityPropagationConfigResponse {
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
export interface DeleteNamespaceRequest {
  /**
   * @public
   * <p>The ID for the Amazon Web Services account that you want to delete the Amazon QuickSight namespace from.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The namespace that you want to delete.</p>
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface DeleteNamespaceResponse {
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
export interface DeleteRefreshScheduleRequest {
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
   * <p>The ID of the refresh schedule.</p>
   */
  ScheduleId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRefreshScheduleResponse {
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
export interface DeleteRoleCustomPermissionRequest {
  /**
   * @public
   * <p>The role that you want to remove permissions from.</p>
   */
  Role: Role | undefined;

  /**
   * @public
   * <p>The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the
   *             Amazon Web Services account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The namespace that includes the role.</p>
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface DeleteRoleCustomPermissionResponse {
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
export interface DeleteRoleMembershipRequest {
  /**
   * @public
   * <p>The name of the group.</p>
   */
  MemberName: string | undefined;

  /**
   * @public
   * <p>The role that you want to remove permissions from.</p>
   */
  Role: Role | undefined;

  /**
   * @public
   * <p>The ID for the Amazon Web Services account that you want to create a group in. The Amazon Web Services account ID that you provide must be the same Amazon Web Services account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The namespace that contains the role.</p>
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface DeleteRoleMembershipResponse {
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
export interface DeleteTemplateRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the template that you're deleting.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>An ID for the template you want to delete.</p>
   */
  TemplateId: string | undefined;

  /**
   * @public
   * <p>Specifies the version of the template that you want to delete.
   * 			If you don't provide a version number, <code>DeleteTemplate</code> deletes all versions of the template.
   * 	 </p>
   */
  VersionNumber?: number;
}

/**
 * @public
 */
export interface DeleteTemplateResponse {
  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>An ID for the template.</p>
   */
  TemplateId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface DeleteTemplateAliasRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the item to delete.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the template that the specified alias is for.</p>
   */
  TemplateId: string | undefined;

  /**
   * @public
   * <p>The name for the template alias. To delete a specific alias, you delete the version that the
   * 			alias points to. You can specify the alias name, or specify the latest version of the
   * 			template by providing the keyword <code>$LATEST</code> in the <code>AliasName</code>
   * 			parameter. </p>
   */
  AliasName: string | undefined;
}

/**
 * @public
 */
export interface DeleteTemplateAliasResponse {
  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>An ID for the template associated with the deletion.</p>
   */
  TemplateId?: string;

  /**
   * @public
   * <p>The name for the template alias.</p>
   */
  AliasName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the template you want to delete.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface DeleteThemeRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the theme that you're deleting.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>An ID for the theme that you want to delete.</p>
   */
  ThemeId: string | undefined;

  /**
   * @public
   * <p>The version of the theme that you want to delete. </p>
   *          <p>
   *             <b>Note:</b> If you don't provide a version number, you're
   * 			using this call to <code>DeleteTheme</code> to delete all versions of the theme.</p>
   */
  VersionNumber?: number;
}

/**
 * @public
 */
export interface DeleteThemeResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

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
   * <p>An ID for the theme.</p>
   */
  ThemeId?: string;
}

/**
 * @public
 */
export interface DeleteThemeAliasRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the theme alias to delete.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the theme that the specified alias is for.</p>
   */
  ThemeId: string | undefined;

  /**
   * @public
   * <p>The unique name for the theme alias to delete.</p>
   */
  AliasName: string | undefined;
}

/**
 * @public
 */
export interface DeleteThemeAliasResponse {
  /**
   * @public
   * <p>The name for the theme alias.</p>
   */
  AliasName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the theme resource using the deleted alias.</p>
   */
  Arn?: string;

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
   * <p>An ID for the theme associated with the deletion.</p>
   */
  ThemeId?: string;
}

/**
 * @public
 */
export interface DeleteTopicRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the topic that you want to
   *          delete.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the topic that you want to delete. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  TopicId: string | undefined;
}

/**
 * @public
 */
export interface DeleteTopicResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the topic.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The ID of the topic that you want to delete. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  TopicId?: string;

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
export interface DeleteTopicRefreshScheduleRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
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
}

/**
 * @public
 */
export interface DeleteTopicRefreshScheduleResponse {
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
export interface DeleteUserRequest {
  /**
   * @public
   * <p>The name of the user that you want to delete.</p>
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
}

/**
 * @public
 */
export interface DeleteUserResponse {
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
 * <p></p>
 */
export interface DeleteUserByPrincipalIdRequest {
  /**
   * @public
   * <p>The principal ID of the user.</p>
   */
  PrincipalId: string | undefined;

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
}

/**
 * @public
 */
export interface DeleteUserByPrincipalIdResponse {
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
export interface DeleteVPCConnectionRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID of the account where you want to delete a VPC
   * 			connection.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the VPC connection that you're creating. This ID is a unique identifier for each Amazon Web Services Region in an
   * 				Amazon Web Services account.</p>
   */
  VPCConnectionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVPCConnectionResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the deleted VPC connection.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The ID of the VPC connection that
   * 			you're creating. This ID is a unique identifier for each Amazon Web Services Region in an
   * 				Amazon Web Services account.</p>
   */
  VPCConnectionId?: string;

  /**
   * @public
   * <p>The deletion status of the VPC connection.</p>
   */
  DeletionStatus?: VPCConnectionResourceStatus;

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
 * @public
 */
export interface DescribeAccountCustomizationRequest {
  /**
   * @public
   * <p>The ID for the Amazon Web Services account that you want to describe Amazon QuickSight customizations
   *             for.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The Amazon QuickSight namespace that you want to describe Amazon QuickSight customizations
   *             for.</p>
   */
  Namespace?: string;

  /**
   * @public
   * <p>The <code>Resolved</code> flag works with the other parameters to determine which view
   *             of Amazon QuickSight customizations is returned. You can add this flag to your command to use
   *             the same view that Amazon QuickSight uses to identify which customizations to apply to the
   *             console. Omit this flag, or set it to <code>no-resolved</code>, to reveal customizations
   *             that are configured at different levels. </p>
   */
  Resolved?: boolean;
}

/**
 * @public
 */
export interface DescribeAccountCustomizationResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the customization that's associated with this Amazon Web Services account.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The ID for the Amazon Web Services account that you're describing.</p>
   */
  AwsAccountId?: string;

  /**
   * @public
   * <p>The Amazon QuickSight namespace that you're describing. </p>
   */
  Namespace?: string;

  /**
   * @public
   * <p>The Amazon QuickSight customizations that exist in the current Amazon Web Services Region. </p>
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
export interface DescribeAccountSettingsRequest {
  /**
   * @public
   * <p>The ID for the Amazon Web Services account that contains the settings that you want to list.</p>
   */
  AwsAccountId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAccountSettingsResponse {
  /**
   * @public
   * <p>The Amazon QuickSight settings for this Amazon Web Services account. This information
   *             includes the edition of Amazon Amazon QuickSight that you subscribed to (Standard or
   *             Enterprise) and the notification email for the Amazon QuickSight subscription. </p>
   *          <p>In the QuickSight console, the Amazon QuickSight subscription is sometimes referred to
   *             as a QuickSight "account" even though it's technically not an account by
   *             itself. Instead, it's a subscription to the Amazon QuickSight service for your
   *                 Amazon Web Services account. The edition that you subscribe to applies to Amazon QuickSight in every Amazon Web Services Region where you use it.</p>
   */
  AccountSettings?: AccountSettings;

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
export interface DescribeAccountSubscriptionRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID associated with your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAccountSubscriptionResponse {
  /**
   * @public
   * <p>A structure that contains the following elements:</p>
   *          <ul>
   *             <li>
   *                <p>Your Amazon QuickSight account name.</p>
   *             </li>
   *             <li>
   *                <p>The edition of Amazon QuickSight that your account is using.</p>
   *             </li>
   *             <li>
   *                <p>The notification email address that is associated with the Amazon QuickSight
   *                     account.
   *             </p>
   *             </li>
   *             <li>
   *                <p>The authentication type of the Amazon QuickSight account.</p>
   *             </li>
   *             <li>
   *                <p>The status of the Amazon QuickSight account's subscription.</p>
   *             </li>
   *          </ul>
   */
  AccountInfo?: AccountInfo;

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
export interface DescribeAnalysisRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the analysis. You must be using the
   *             Amazon Web Services account that the analysis is in.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the analysis that you're describing. The ID is part of the URL of the
   *             analysis.</p>
   */
  AnalysisId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAnalysisResponse {
  /**
   * @public
   * <p>A metadata structure that contains summary information for the analysis that you're
   *             describing.</p>
   */
  Analysis?: Analysis;

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
export interface DescribeAnalysisDefinitionRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the analysis. You must be using the
   *             Amazon Web Services account that the analysis is in.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the analysis that you're describing. The ID is part of the URL of the
   *             analysis.</p>
   */
  AnalysisId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAnalysisDefinitionResponse {
  /**
   * @public
   * <p>The ID of the analysis described.</p>
   */
  AnalysisId?: string;

  /**
   * @public
   * <p>The descriptive name of the analysis.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>Errors associated with the analysis.</p>
   */
  Errors?: AnalysisError[];

  /**
   * @public
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
   */
  ResourceStatus?: ResourceStatus;

  /**
   * @public
   * <p>The ARN of the theme of the analysis.</p>
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
export interface DescribeAnalysisPermissionsRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the analysis whose permissions you're
   *             describing. You must be using the Amazon Web Services account that the analysis is in.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the analysis whose permissions you're describing. The ID is part of the
   *             analysis URL.</p>
   */
  AnalysisId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAnalysisPermissionsResponse {
  /**
   * @public
   * <p>The ID of the analysis whose permissions you're describing.</p>
   */
  AnalysisId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the analysis whose permissions you're
   *             describing.</p>
   */
  AnalysisArn?: string;

  /**
   * @public
   * <p>A structure that describes the principals and the resource-level permissions on an
   *             analysis.</p>
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
export interface DescribeAssetBundleExportJobRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account the export job is executed in. </p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the job that you want described. The job ID is set when you start a new job with a <code>StartAssetBundleExportJob</code> API call.</p>
   */
  AssetBundleExportJobId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAssetBundleExportJobResponse {
  /**
   * @public
   * <p>Indicates the status of a job through its queuing and execution.</p>
   *          <p>Poll this <code>DescribeAssetBundleExportApi</code> until <code>JobStatus</code> is either <code>SUCCESSFUL</code> or <code>FAILED</code>.</p>
   */
  JobStatus?: AssetBundleExportJobStatus;

  /**
   * @public
   * <p>The URL to download the exported asset bundle data from.</p>
   *          <p>This URL is available only after the job has succeeded. This URL is valid for 5 minutes after issuance. Call <code>DescribeAssetBundleExportJob</code> again for a fresh URL if needed.</p>
   *          <p>The downloaded asset bundle is a zip file named <code>assetbundle-\{jobId\}.qs</code>. The file has a <code>.qs</code> extension.</p>
   *          <p>This URL can't be used in a <code>StartAssetBundleImportJob</code> API call and should only be used for download purposes.</p>
   */
  DownloadUrl?: string;

  /**
   * @public
   * <p>An array of error records that describes any failures that occurred during the export job processing.</p>
   *          <p>Error records accumulate while the job runs. The complete set of error records is available after the job has completed and failed.</p>
   */
  Errors?: AssetBundleExportJobError[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the export job.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The time that the export job was created.</p>
   */
  CreatedTime?: Date;

  /**
   * @public
   * <p>The ID of the job. The job ID is set when you start a new job with a <code>StartAssetBundleExportJob</code> API call.</p>
   */
  AssetBundleExportJobId?: string;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account that the export job was executed in. </p>
   */
  AwsAccountId?: string;

  /**
   * @public
   * <p>A list of resource ARNs that exported with the job.</p>
   */
  ResourceArns?: string[];

  /**
   * @public
   * <p>The include dependencies flag.</p>
   */
  IncludeAllDependencies?: boolean;

  /**
   * @public
   * <p>The format of the exported asset bundle. A <code>QUICKSIGHT_JSON</code> formatted file can be used to make a <code>StartAssetBundleImportJob</code> API call. A <code>CLOUDFORMATION_JSON</code> formatted file can be used in the CloudFormation console and with the CloudFormation APIs.</p>
   */
  ExportFormat?: AssetBundleExportFormat;

  /**
   * @public
   * <p>The CloudFormation override property configuration for the export job.</p>
   */
  CloudFormationOverridePropertyConfiguration?: AssetBundleCloudFormationOverridePropertyConfiguration;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the response.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The include permissions flag.</p>
   */
  IncludePermissions?: boolean;

  /**
   * @public
   * <p>The include tags flag.</p>
   */
  IncludeTags?: boolean;

  /**
   * @public
   * <p>The validation strategy that is used to export the analysis or dashboard.</p>
   */
  ValidationStrategy?: AssetBundleExportJobValidationStrategy;

  /**
   * @public
   * <p>An array of warning records that describe the analysis or dashboard that is exported. This array includes UI errors that can be skipped during the validation process.</p>
   *          <p>This property only appears if <code>StrictModeForAllResources</code> in <code>ValidationStrategy</code> is set to <code>FALSE</code>.</p>
   */
  Warnings?: AssetBundleExportJobWarning[];
}

/**
 * @public
 */
export interface DescribeAssetBundleImportJobRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account the import job was executed in. </p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the job. The job ID is set when you start a new job with a <code>StartAssetBundleImportJob</code> API call.</p>
   */
  AssetBundleImportJobId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAssetBundleImportJobResponse {
  /**
   * @public
   * <p>Indicates the status of a job through its queuing and execution.</p>
   *          <p>Poll the <code>DescribeAssetBundleImport</code> API until <code>JobStatus</code> returns one of the following values:</p>
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
   */
  JobStatus?: AssetBundleImportJobStatus;

  /**
   * @public
   * <p>An array of error records that describes any failures that occurred during the export job processing.</p>
   *          <p>Error records accumulate while the job is still running. The complete set of error records is available after the job has completed and failed.</p>
   */
  Errors?: AssetBundleImportJobError[];

  /**
   * @public
   * <p>An array of error records that describes any failures that occurred while an import job was attempting a rollback.</p>
   *          <p>Error records accumulate while the job is still running. The complete set of error records is available after the job has completed and failed.</p>
   */
  RollbackErrors?: AssetBundleImportJobError[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the import job.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The time that the import job was created.</p>
   */
  CreatedTime?: Date;

  /**
   * @public
   * <p>The ID of the job. The job ID is set when you start a new job with a <code>StartAssetBundleImportJob</code> API call.</p>
   */
  AssetBundleImportJobId?: string;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account the import job was executed in. </p>
   */
  AwsAccountId?: string;

  /**
   * @public
   * <p>The source of the asset bundle zip file that contains the data that is imported by the job.</p>
   */
  AssetBundleImportSource?: AssetBundleImportSourceDescription;

  /**
   * @public
   * <p>Optional overrides that are applied to the resource configuration before import.</p>
   */
  OverrideParameters?: AssetBundleImportJobOverrideParameters;

  /**
   * @public
   * <p>The failure action for the import job.</p>
   */
  FailureAction?: AssetBundleImportFailureAction;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the response.</p>
   */
  Status?: number;

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
   * <p>An optional validation strategy override for all analyses and dashboards to be applied to the resource configuration before import.</p>
   */
  OverrideValidationStrategy?: AssetBundleImportJobOverrideValidationStrategy;
}

/**
 * @public
 */
export interface DescribeDashboardRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the dashboard that you're
   *             describing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the dashboard.</p>
   */
  DashboardId: string | undefined;

  /**
   * @public
   * <p>The version number for the dashboard. If a version number isn't passed, the
   *             latest published dashboard version is described. </p>
   */
  VersionNumber?: number;

  /**
   * @public
   * <p>The alias name.</p>
   */
  AliasName?: string;
}

/**
 * @public
 */
export interface DescribeDashboardResponse {
  /**
   * @public
   * <p>Information about the dashboard.</p>
   */
  Dashboard?: Dashboard;

  /**
   * @public
   * <p>The HTTP status of this request.</p>
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
export interface DescribeDashboardDefinitionRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the dashboard that you're
   *             describing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the dashboard.</p>
   */
  DashboardId: string | undefined;

  /**
   * @public
   * <p>The version number for the dashboard. If a version number isn't passed, the
   *             latest published dashboard version is described. </p>
   */
  VersionNumber?: number;

  /**
   * @public
   * <p>The alias name.</p>
   */
  AliasName?: string;
}

/**
 * @public
 */
export interface DescribeDashboardDefinitionResponse {
  /**
   * @public
   * <p>The ID of the dashboard described.</p>
   */
  DashboardId?: string;

  /**
   * @public
   * <p>Errors associated with this dashboard version.</p>
   */
  Errors?: DashboardError[];

  /**
   * @public
   * <p>The display name of the dashboard.</p>
   */
  Name?: string;

  /**
   * @public
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
   */
  ResourceStatus?: ResourceStatus;

  /**
   * @public
   * <p>The ARN of the theme of the dashboard.</p>
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
   * <p>Options for publishing the dashboard:</p>
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
}

/**
 * @public
 */
export interface DescribeDashboardPermissionsRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the dashboard that you're describing
   *             permissions for.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the dashboard, also added to the IAM policy.</p>
   */
  DashboardId: string | undefined;
}

/**
 * @public
 */
export interface DescribeDashboardPermissionsResponse {
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
   * <p>A structure that contains the permissions for the dashboard.</p>
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

  /**
   * @public
   * <p>A structure that contains the configuration of a shareable link that grants access to
   *             the dashboard. Your users can use the link to view and interact with the dashboard, if
   *             the dashboard has been shared with them. For more information about sharing dashboards,
   *             see <a href="https://docs.aws.amazon.com/quicksight/latest/user/sharing-a-dashboard.html">Sharing Dashboards</a>.</p>
   */
  LinkSharingConfiguration?: LinkSharingConfiguration;
}

/**
 * @public
 */
export interface DescribeDashboardSnapshotJobRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that the dashboard snapshot job is executed in.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the dashboard that you have started a snapshot job for.</p>
   */
  DashboardId: string | undefined;

  /**
   * @public
   * <p>The ID of the job to be described. The job ID is set when you start a new job with a <code>StartDashboardSnapshotJob</code> API call.</p>
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
 * @public
 * <p>A structure that contains information on the Amazon S3 destinations of the generated snapshot.</p>
 */
export interface SnapshotDestinationConfiguration {
  /**
   * @public
   * <p>
   *             A list of <code>SnapshotS3DestinationConfiguration</code> objects that contain Amazon S3 destination configurations. This structure can hold a maximum of 1 <code>S3DestinationConfiguration</code>.
   *         </p>
   */
  S3Destinations?: SnapshotS3DestinationConfiguration[];
}

/**
 * @public
 * <p>A structure that contains the information on the snapshot files.</p>
 */
export interface SnapshotFileGroup {
  /**
   * @public
   * <p>A list of <code>SnapshotFile</code> objects that contain the information on the snapshot files that need to be generated. This structure can hold 1 configuration at a time.</p>
   */
  Files?: SnapshotFile[];
}

/**
 * @public
 * <p>Describes the configuration of the dashboard snapshot.</p>
 */
export interface SnapshotConfiguration {
  /**
   * @public
   * <p>A list of <code>SnapshotJobResultFileGroup</code> objects that contain information about the snapshot that is generated. This list can hold a maximum of 6 <code>FileGroup</code> configurations.</p>
   */
  FileGroups: SnapshotFileGroup[] | undefined;

  /**
   * @public
   * <p>A structure that contains information on the Amazon S3 bucket that the generated snapshot is stored in.</p>
   */
  DestinationConfiguration?: SnapshotDestinationConfiguration;

  /**
   * @public
   * <p>A list of Amazon QuickSight parameters and the list's override values.</p>
   */
  Parameters?: _Parameters;
}

/**
 * @public
 * <p>Use this structure to redact sensitive information that you provide about an anonymous user from the snapshot.</p>
 */
export interface SnapshotAnonymousUserRedacted {
  /**
   * @public
   * <p>The tag keys for the <code>RowLevelPermissionTags</code>.</p>
   */
  RowLevelPermissionTagKeys?: string[];
}

/**
 * @public
 * <p>A structure that contains information about the users that the dashboard snapshot is generated for. Sensitive user information is excluded.
 *         </p>
 */
export interface SnapshotUserConfigurationRedacted {
  /**
   * @public
   * <p>
   *             An array of records that describe anonymous users that the dashboard snapshot is generated for. Sensitive user information is excluded.
   *         </p>
   */
  AnonymousUsers?: SnapshotAnonymousUserRedacted[];
}

/**
 * @public
 */
export interface DescribeDashboardSnapshotJobResponse {
  /**
   * @public
   * <p>
   *             The ID of the Amazon Web Services account that the dashboard snapshot job is executed in.
   *         </p>
   */
  AwsAccountId?: string;

  /**
   * @public
   * <p>The ID of the dashboard that you have started a snapshot job for.</p>
   */
  DashboardId?: string;

  /**
   * @public
   * <p>The ID of the job to be described. The job ID is set when you start a new job with a <code>StartDashboardSnapshotJob</code> API call.</p>
   */
  SnapshotJobId?: string;

  /**
   * @public
   * <p>The user configuration for the snapshot job. This information is provided when you make a <code>StartDashboardSnapshotJob</code> API call.</p>
   */
  UserConfiguration?: SnapshotUserConfigurationRedacted;

  /**
   * @public
   * <p>The snapshot configuration of the job. This information is provided when you make a <code>StartDashboardSnapshotJob</code> API call.</p>
   */
  SnapshotConfiguration?: SnapshotConfiguration;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the snapshot job. The job ARN is generated when you start a new job with a <code>StartDashboardSnapshotJob</code> API call.</p>
   */
  Arn?: string;

  /**
   * @public
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
   */
  JobStatus?: SnapshotJobStatus;

  /**
   * @public
   * <p>
   *             The time that the snapshot job was created.
   *         </p>
   */
  CreatedTime?: Date;

  /**
   * @public
   * <p>
   *             The time that the snapshot job status was last updated.
   *         </p>
   */
  LastUpdatedTime?: Date;

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
export interface DescribeDashboardSnapshotJobResultRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that the dashboard snapshot job is executed in.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the dashboard that you have started a snapshot job for.</p>
   */
  DashboardId: string | undefined;

  /**
   * @public
   * <p>The ID of the job to be described. The job ID is set when you start a new job with a <code>StartDashboardSnapshotJob</code> API call.</p>
   */
  SnapshotJobId: string | undefined;
}

/**
 * @public
 * <p>An object that contains information on the error that caused the snapshot job to fail.</p>
 */
export interface SnapshotJobErrorInfo {
  /**
   * @public
   * <p>The error message.</p>
   */
  ErrorMessage?: string;

  /**
   * @public
   * <p>The error type.</p>
   */
  ErrorType?: string;
}

/**
 * @public
 * <p>An object that provides information on the result of a snapshot job. This object provides information about the job, the job status, and the location of the generated file.</p>
 */
export interface SnapshotJobResult {
  /**
   * @public
   * <p> A list of <code>AnonymousUserSnapshotJobResult</code> objects that contain information on anonymous users and their user configurations. This data provided by you when you make a <code>StartDashboardSnapshotJob</code> API call.</p>
   */
  AnonymousUsers?: AnonymousUserSnapshotJobResult[];
}

/**
 * @public
 */
export interface DescribeDashboardSnapshotJobResultResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the snapshot job. The job ARN is generated when you start a new job with a <code>StartDashboardSnapshotJob</code> API call.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>Indicates the status of a job after it has reached a terminal state. A finished snapshot job will retuen a <code>COMPLETED</code> or <code>FAILED</code> status.</p>
   */
  JobStatus?: SnapshotJobStatus;

  /**
   * @public
   * <p>The time that a snapshot job was created.</p>
   */
  CreatedTime?: Date;

  /**
   * @public
   * <p>The time that a snapshot job status was last updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * @public
   * <p>The result of the snapshot job. Jobs that have successfully completed will return the S3Uri where they are located. Jobs that have failedwill return information on the error that caused the job to fail.</p>
   */
  Result?: SnapshotJobResult;

  /**
   * @public
   * <p>Displays information for the error that caused a job to fail.</p>
   */
  ErrorInfo?: SnapshotJobErrorInfo;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
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
export interface DescribeDataSetRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the dataset that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  DataSetId: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataSetResponse {
  /**
   * @public
   * <p>Information on the dataset.</p>
   */
  DataSet?: DataSet;

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
export interface DescribeDataSetPermissionsRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the dataset that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  DataSetId: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataSetPermissionsResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   */
  DataSetArn?: string;

  /**
   * @public
   * <p>The ID for the dataset that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  DataSetId?: string;

  /**
   * @public
   * <p>A list of resource permissions on the dataset.</p>
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
export interface DescribeDataSetRefreshPropertiesRequest {
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
}

/**
 * @public
 */
export interface DescribeDataSetRefreshPropertiesResponse {
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
   * <p>The dataset refresh properties.</p>
   */
  DataSetRefreshProperties?: DataSetRefreshProperties;
}

/**
 * @public
 */
export interface DescribeDataSourceRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  DataSourceId: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataSourceResponse {
  /**
   * @public
   * <p>The information on the data source.</p>
   */
  DataSource?: DataSource;

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
export interface DescribeDataSourcePermissionsRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  DataSourceId: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataSourcePermissionsResponse {
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
   * <p>A list of resource permissions on the data source.</p>
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
export interface DescribeFolderRequest {
  /**
   * @public
   * <p>The ID for the Amazon Web Services account that contains the folder.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the folder.</p>
   */
  FolderId: string | undefined;
}

/**
 * @public
 * <p>A folder in Amazon QuickSight.</p>
 */
export interface Folder {
  /**
   * @public
   * <p>The ID of the folder.</p>
   */
  FolderId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the folder.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>A display name for the folder.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The type of folder it is.</p>
   */
  FolderType?: FolderType;

  /**
   * @public
   * <p>An array of ancestor ARN strings for the folder.</p>
   */
  FolderPath?: string[];

  /**
   * @public
   * <p>The time that the folder was created.</p>
   */
  CreatedTime?: Date;

  /**
   * @public
   * <p>The time that the folder was last updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * @public
   * <p>The sharing scope of the folder.</p>
   */
  SharingModel?: SharingModel;
}

/**
 * @public
 */
export interface DescribeFolderResponse {
  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>Information about the folder.</p>
   */
  Folder?: Folder;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface DescribeFolderPermissionsRequest {
  /**
   * @public
   * <p>The ID for the Amazon Web Services account that contains the folder.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the folder.</p>
   */
  FolderId: string | undefined;

  /**
   * @public
   * <p>The namespace of the folder whose permissions you want described.</p>
   */
  Namespace?: string;

  /**
   * @public
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A pagination token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeFolderPermissionsResponse {
  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The ID of the folder.</p>
   */
  FolderId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the folder.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>Information about the permissions on the folder.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The pagination token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The <code>NextToken</code> value isn't valid.</p>
 */
export class InvalidNextTokenException extends __BaseException {
  readonly name: "InvalidNextTokenException" = "InvalidNextTokenException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @public
   * <p>The Amazon Web Services request ID for this request.</p>
   */
  RequestId?: string;
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
   * @public
   * <p>The ID for the Amazon Web Services account that contains the folder.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the folder.</p>
   */
  FolderId: string | undefined;

  /**
   * @public
   * <p>The namespace of the folder whose permissions you want described.</p>
   */
  Namespace?: string;

  /**
   * @public
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A pagination token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeFolderResolvedPermissionsResponse {
  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The ID of the folder.</p>
   */
  FolderId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the folder.</p>
   */
  Arn?: string;

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

  /**
   * @public
   * <p>A pagination token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeGroupRequest {
  /**
   * @public
   * <p>The name of the group that you want to describe.</p>
   */
  GroupName: string | undefined;

  /**
   * @public
   * <p>The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the
   * 			Amazon Web Services account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The namespace of the group that you want described.</p>
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface DescribeGroupResponse {
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
export interface DescribeGroupMembershipRequest {
  /**
   * @public
   * <p>The user name of the user that you want to search for.</p>
   */
  MemberName: string | undefined;

  /**
   * @public
   * <p>The name of the group that you want to search.</p>
   */
  GroupName: string | undefined;

  /**
   * @public
   * <p>The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the
   *          Amazon Web Services account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The namespace that includes the group you are searching within.</p>
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface DescribeGroupMembershipResponse {
  /**
   * @public
   * <p>A member of an Amazon QuickSight group. Currently, group members must be users. Groups
   *             can't be members of another group. .</p>
   */
  GroupMember?: GroupMember;

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
export interface DescribeIAMPolicyAssignmentRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the assignment that you want to
   * 			describe.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The name of the assignment, also called a rule.</p>
   */
  AssignmentName: string | undefined;

  /**
   * @public
   * <p>The namespace that contains the assignment.</p>
   */
  Namespace: string | undefined;
}

/**
 * @public
 * <p>An Identity and Access Management (IAM) policy assignment.</p>
 */
export interface IAMPolicyAssignment {
  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId?: string;

  /**
   * @public
   * <p>Assignment ID.</p>
   */
  AssignmentId?: string;

  /**
   * @public
   * <p>Assignment name.</p>
   */
  AssignmentName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the IAM policy.</p>
   */
  PolicyArn?: string;

  /**
   * @public
   * <p>Identities.</p>
   */
  Identities?: Record<string, string[]>;

  /**
   * @public
   * <p>Assignment status.</p>
   */
  AssignmentStatus?: AssignmentStatus;
}

/**
 * @public
 */
export interface DescribeIAMPolicyAssignmentResponse {
  /**
   * @public
   * <p>Information describing the IAM policy assignment.</p>
   */
  IAMPolicyAssignment?: IAMPolicyAssignment;

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
export interface DescribeIngestionRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the dataset used in the ingestion.</p>
   */
  DataSetId: string | undefined;

  /**
   * @public
   * <p>An ID for the ingestion.</p>
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
 * @public
 * <p>Error information for the SPICE ingestion of a dataset.</p>
 */
export interface ErrorInfo {
  /**
   * @public
   * <p>Error type.</p>
   */
  Type?: IngestionErrorType;

  /**
   * @public
   * <p>Error message.</p>
   */
  Message?: string;
}

/**
 * @public
 * <p>Information about a queued dataset SPICE ingestion.</p>
 */
export interface QueueInfo {
  /**
   * @public
   * <p>The ID of the queued ingestion.</p>
   */
  WaitingOnIngestion: string | undefined;

  /**
   * @public
   * <p>The ID of the ongoing ingestion. The queued ingestion is waiting for the ongoing
   *             ingestion to complete.</p>
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
 * @public
 * <p>Information about rows for a data set SPICE ingestion.</p>
 */
export interface RowInfo {
  /**
   * @public
   * <p>The number of rows that were ingested.</p>
   */
  RowsIngested?: number;

  /**
   * @public
   * <p>The number of rows that were not ingested.</p>
   */
  RowsDropped?: number;

  /**
   * @public
   * <p>The total number of rows in the dataset.</p>
   */
  TotalRowsInDataset?: number;
}

/**
 * @public
 * <p>Information about the SPICE ingestion for a dataset.</p>
 */
export interface Ingestion {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn: string | undefined;

  /**
   * @public
   * <p>Ingestion ID.</p>
   */
  IngestionId?: string;

  /**
   * @public
   * <p>Ingestion status.</p>
   */
  IngestionStatus: IngestionStatus | undefined;

  /**
   * @public
   * <p>Error information for this ingestion.</p>
   */
  ErrorInfo?: ErrorInfo;

  /**
   * @public
   * <p>Information about rows for a data set SPICE ingestion.</p>
   */
  RowInfo?: RowInfo;

  /**
   * @public
   * <p>Information about a queued dataset SPICE ingestion.</p>
   */
  QueueInfo?: QueueInfo;

  /**
   * @public
   * <p>The time that this ingestion started.</p>
   */
  CreatedTime: Date | undefined;

  /**
   * @public
   * <p>The time that this ingestion took, measured in seconds.</p>
   */
  IngestionTimeInSeconds?: number;

  /**
   * @public
   * <p>The size of the data ingested, in bytes.</p>
   */
  IngestionSizeInBytes?: number;

  /**
   * @public
   * <p>Event source for this ingestion.</p>
   */
  RequestSource?: IngestionRequestSource;

  /**
   * @public
   * <p>Type of this ingestion.</p>
   */
  RequestType?: IngestionRequestType;
}

/**
 * @public
 */
export interface DescribeIngestionResponse {
  /**
   * @public
   * <p>Information about the ingestion.</p>
   */
  Ingestion?: Ingestion;

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
export interface DescribeIpRestrictionRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the IP rules.</p>
   */
  AwsAccountId: string | undefined;
}

/**
 * @public
 */
export interface DescribeIpRestrictionResponse {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the IP rules.</p>
   */
  AwsAccountId?: string;

  /**
   * @public
   * <p>A map that describes the IP rules with CIDR range and description.</p>
   */
  IpRestrictionRuleMap?: Record<string, string>;

  /**
   * @public
   * <p>A value that specifies whether IP rules are turned on.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.
   * 			</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface DescribeNamespaceRequest {
  /**
   * @public
   * <p>The ID for the Amazon Web Services account that contains the Amazon QuickSight namespace that you want to describe.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The namespace that you want to describe.</p>
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
 * @public
 * <p>Errors that occur during namespace creation.</p>
 */
export interface NamespaceError {
  /**
   * @public
   * <p>The error type.</p>
   */
  Type?: NamespaceErrorType;

  /**
   * @public
   * <p>The message for the error.</p>
   */
  Message?: string;
}

/**
 * @public
 * <p>The error type.</p>
 */
export interface NamespaceInfoV2 {
  /**
   * @public
   * <p>The name of the error.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The namespace ARN.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The namespace Amazon Web Services Region.</p>
   */
  CapacityRegion?: string;

  /**
   * @public
   * <p>The creation status of a namespace that is not yet completely created.</p>
   */
  CreationStatus?: NamespaceStatus;

  /**
   * @public
   * <p>The identity store used for the namespace.</p>
   */
  IdentityStore?: IdentityStore;

  /**
   * @public
   * <p>An error that occurred when the namespace was created.</p>
   */
  NamespaceError?: NamespaceError;
}

/**
 * @public
 */
export interface DescribeNamespaceResponse {
  /**
   * @public
   * <p>The information about the namespace that you're describing. The response includes
   *         the namespace ARN, name, Amazon Web Services Region, creation status, and identity store. <code>DescribeNamespace</code> also
   *         works for namespaces that are in the process of being created. For incomplete namespaces,
   *         this API operation lists the namespace error types and messages associated with the creation process.</p>
   */
  Namespace?: NamespaceInfoV2;

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
export interface DescribeRefreshScheduleRequest {
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
   * <p>The ID of the refresh schedule.</p>
   */
  ScheduleId: string | undefined;
}

/**
 * @public
 */
export interface DescribeRefreshScheduleResponse {
  /**
   * @public
   * <p>The refresh schedule.</p>
   */
  RefreshSchedule?: RefreshSchedule;

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
   * <p>The Amazon Resource Name (ARN) for the refresh schedule.</p>
   */
  Arn?: string;
}

/**
 * @public
 */
export interface DescribeRoleCustomPermissionRequest {
  /**
   * @public
   * <p>The name of the role whose permissions you want described.</p>
   */
  Role: Role | undefined;

  /**
   * @public
   * <p>The ID for the Amazon Web Services account that you want to create a group in. The Amazon Web Services account ID that you provide must be the same Amazon Web Services account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The namespace that contains the role.</p>
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface DescribeRoleCustomPermissionResponse {
  /**
   * @public
   * <p>The name of the custom permission that is described.</p>
   */
  CustomPermissionsName?: string;

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
export interface DescribeTemplateRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the template that you're describing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the template.</p>
   */
  TemplateId: string | undefined;

  /**
   * @public
   * <p>(Optional) The number for the version to describe. If a <code>VersionNumber</code> parameter
   * 			value isn't provided, the latest version of the template is described.</p>
   */
  VersionNumber?: number;

  /**
   * @public
   * <p>The alias of the template that you want to describe. If you name a specific alias, you
   * 			describe the version that the alias points to. You can specify the latest version of the
   * 			template by providing the keyword <code>$LATEST</code> in the <code>AliasName</code>
   * 			parameter. The keyword <code>$PUBLISHED</code> doesn't apply to templates.</p>
   */
  AliasName?: string;
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
 * @public
 * <p>List of errors that occurred when the template version creation failed.</p>
 */
export interface TemplateError {
  /**
   * @public
   * <p>Type of error.</p>
   */
  Type?: TemplateErrorType;

  /**
   * @public
   * <p>Description of the error type.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>An error path that shows which entities caused the template error.</p>
   */
  ViolatedEntities?: Entity[];
}

/**
 * @public
 * <p>A version of a template.</p>
 */
export interface TemplateVersion {
  /**
   * @public
   * <p>The time that this template version was created.</p>
   */
  CreatedTime?: Date;

  /**
   * @public
   * <p>Errors associated with this template version.</p>
   */
  Errors?: TemplateError[];

  /**
   * @public
   * <p>The version number of the template version.</p>
   */
  VersionNumber?: number;

  /**
   * @public
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
   */
  Status?: ResourceStatus;

  /**
   * @public
   * <p>Schema of the dataset identified by the placeholder. Any dashboard created from this
   *             template should be bound to new datasets matching the same schema described through this
   *             API operation.</p>
   */
  DataSetConfigurations?: DataSetConfiguration[];

  /**
   * @public
   * <p>The description of the template.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an analysis or template that was used to create this
   *             template.</p>
   */
  SourceEntityArn?: string;

  /**
   * @public
   * <p>The ARN of the theme associated with this version of the template.</p>
   */
  ThemeArn?: string;

  /**
   * @public
   * <p>A list of the associated sheets with the unique identifier and name of each sheet.</p>
   */
  Sheets?: Sheet[];
}

/**
 * @public
 * <p>A template object. A <i>template</i> is an entity in Amazon QuickSight that
 *             encapsulates the metadata required to create an analysis and that you can use to create
 *             a dashboard. A template adds a layer of abstraction by using placeholders to replace the
 *             dataset associated with an analysis. You can use templates to create dashboards by
 *             replacing dataset placeholders with datasets that follow the same schema that was used
 *             to create the source analysis and template.</p>
 *          <p>You can share templates across Amazon Web Services accounts by allowing users in other Amazon Web Services accounts to
 *             create a template or a dashboard from an existing template.</p>
 */
export interface Template {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the template.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The display name of the template.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A structure describing the versions of the template.</p>
   */
  Version?: TemplateVersion;

  /**
   * @public
   * <p>The ID for the template. This is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  TemplateId?: string;

  /**
   * @public
   * <p>Time when this was last updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * @public
   * <p>Time when this was created.</p>
   */
  CreatedTime?: Date;
}

/**
 * @public
 */
export interface DescribeTemplateResponse {
  /**
   * @public
   * <p>The template structure for the object you want to describe.</p>
   */
  Template?: Template;

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
export interface DescribeTemplateAliasRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the template alias that you're
   * 			describing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the template.</p>
   */
  TemplateId: string | undefined;

  /**
   * @public
   * <p>The name of the template alias that you want to describe. If you name a specific alias, you
   * 			describe the version that the alias points to. You can specify the latest version of the
   * 			template by providing the keyword <code>$LATEST</code> in the <code>AliasName</code>
   * 			parameter. The keyword <code>$PUBLISHED</code> doesn't apply to templates.</p>
   */
  AliasName: string | undefined;
}

/**
 * @public
 */
export interface DescribeTemplateAliasResponse {
  /**
   * @public
   * <p>Information about the template alias.</p>
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
export interface DescribeTemplateDefinitionRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the template. You must be using the
   * 			 Amazon Web Services account that the template is in.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the template that you're describing.</p>
   */
  TemplateId: string | undefined;

  /**
   * @public
   * <p>The version number of the template.</p>
   */
  VersionNumber?: number;

  /**
   * @public
   * <p>The alias of the template that you want to describe. If you name a specific alias, you
   * 			 describe the version that the alias points to. You can specify the latest version of the
   * 			 template by providing the keyword <code>$LATEST</code> in the <code>AliasName</code>
   * 			 parameter. The keyword <code>$PUBLISHED</code> doesn't apply to templates.</p>
   */
  AliasName?: string;
}

/**
 * @public
 */
export interface DescribeTemplateDefinitionResponse {
  /**
   * @public
   * <p>The descriptive name of the template.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The ID of the template described.</p>
   */
  TemplateId?: string;

  /**
   * @public
   * <p>Errors associated with the template version.</p>
   */
  Errors?: TemplateError[];

  /**
   * @public
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
   */
  ResourceStatus?: ResourceStatus;

  /**
   * @public
   * <p>The ARN of the theme of the template.</p>
   */
  ThemeArn?: string;

  /**
   * @public
   * <p>The definition of the template.</p>
   *          <p>A definition is the data model of all features in a Dashboard, Template, or Analysis.</p>
   */
  Definition?: TemplateVersionDefinition;

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
export interface DescribeTemplatePermissionsRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the template that you're describing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the template.</p>
   */
  TemplateId: string | undefined;
}

/**
 * @public
 */
export interface DescribeTemplatePermissionsResponse {
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
   * <p>A list of resource permissions to be set on the template. </p>
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
export interface DescribeThemeRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the theme that you're describing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the theme.</p>
   */
  ThemeId: string | undefined;

  /**
   * @public
   * <p>The version number for the version to describe. If a <code>VersionNumber</code> parameter
   * 			value isn't provided, the latest version of the theme is described.</p>
   */
  VersionNumber?: number;

  /**
   * @public
   * <p>The alias of the theme that you want to describe. If you name a specific alias, you
   * 			describe the version that the alias points to. You can specify the latest version of the
   * 			theme by providing the keyword <code>$LATEST</code> in the <code>AliasName</code>
   * 			parameter. The keyword <code>$PUBLISHED</code> doesn't apply to themes.</p>
   */
  AliasName?: string;
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
 * @public
 * <p>Theme error.</p>
 */
export interface ThemeError {
  /**
   * @public
   * <p>The type of error.</p>
   */
  Type?: ThemeErrorType;

  /**
   * @public
   * <p>The error message.</p>
   */
  Message?: string;
}

/**
 * @public
 * <p>A version of a theme.</p>
 */
export interface ThemeVersion {
  /**
   * @public
   * <p>The version number of the theme.</p>
   */
  VersionNumber?: number;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The description of the theme.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The Amazon QuickSight-defined ID of the theme that a custom theme inherits from. All
   *             themes initially inherit from a default Amazon QuickSight theme.</p>
   */
  BaseThemeId?: string;

  /**
   * @public
   * <p>The date and time that this theme version was created.</p>
   */
  CreatedTime?: Date;

  /**
   * @public
   * <p>The theme configuration, which contains all the theme display properties.</p>
   */
  Configuration?: ThemeConfiguration;

  /**
   * @public
   * <p>Errors associated with the theme.</p>
   */
  Errors?: ThemeError[];

  /**
   * @public
   * <p>The status of the theme version.</p>
   */
  Status?: ResourceStatus;
}

/**
 * @public
 * <p>Summary information about a theme.</p>
 */
export interface Theme {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the theme.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name that the user gives to the theme.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The identifier that the user gives to the theme.</p>
   */
  ThemeId?: string;

  /**
   * @public
   * <p>A version of a theme.</p>
   */
  Version?: ThemeVersion;

  /**
   * @public
   * <p>The date and time that the theme was created.</p>
   */
  CreatedTime?: Date;

  /**
   * @public
   * <p>The date and time that the theme was last updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * @public
   * <p>The type of theme, based on how it was created. Valid values include:
   *             <code>QUICKSIGHT</code> and <code>CUSTOM</code>.</p>
   */
  Type?: ThemeType;
}

/**
 * @public
 */
export interface DescribeThemeResponse {
  /**
   * @public
   * <p>The information about the theme that you are describing.</p>
   */
  Theme?: Theme;

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
export interface DescribeThemeAliasRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the theme alias that you're
   * 			describing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the theme.</p>
   */
  ThemeId: string | undefined;

  /**
   * @public
   * <p>The name of the theme alias that you want to describe.</p>
   */
  AliasName: string | undefined;
}

/**
 * @public
 */
export interface DescribeThemeAliasResponse {
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
export interface DescribeThemePermissionsRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the theme that you're describing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the theme that you want to describe permissions for.</p>
   */
  ThemeId: string | undefined;
}

/**
 * @public
 */
export interface DescribeThemePermissionsResponse {
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
   * <p>A list of resource permissions set on the theme. </p>
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
export interface DescribeTopicRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the topic that you want to describe. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  TopicId: string | undefined;
}

/**
 * @public
 */
export interface DescribeTopicResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the topic.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The ID of the topic that you want to describe. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  TopicId?: string;

  /**
   * @public
   * <p>The definition of a topic.</p>
   */
  Topic?: TopicDetails;

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
export interface DescribeTopicPermissionsRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the topic that you want
   *          described.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the topic that you want to describe. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  TopicId: string | undefined;
}

/**
 * @public
 */
export interface DescribeTopicPermissionsResponse {
  /**
   * @public
   * <p>The ID of the topic that you want to describe. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  TopicId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the topic.</p>
   */
  TopicArn?: string;

  /**
   * @public
   * <p>A list of resource permissions that are configured to the topic.</p>
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
export interface DescribeTopicRefreshRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the topic whose refresh you want
   *          to describe.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the topic that you want to describe. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  TopicId: string | undefined;

  /**
   * @public
   * <p>The ID of the refresh, which is performed when the topic is created or updated.</p>
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
 * @public
 * <p>The details about the refresh of a topic.</p>
 */
export interface TopicRefreshDetails {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the topic refresh.</p>
   */
  RefreshArn?: string;

  /**
   * @public
   * <p>The ID of the refresh, which occurs as a result of topic creation or topic update.</p>
   */
  RefreshId?: string;

  /**
   * @public
   * <p>The status of the refresh job that indicates whether the job is still running, completed successfully, or failed.</p>
   */
  RefreshStatus?: TopicRefreshStatus;
}

/**
 * @public
 */
export interface DescribeTopicRefreshResponse {
  /**
   * @public
   * <p>Details of the refresh, which is performed when the topic is created or updated.</p>
   */
  RefreshDetails?: TopicRefreshDetails;

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
export interface DescribeTopicRefreshScheduleRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the topic that contains the refresh schedule that you want to describe. This
   *          ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  TopicId: string | undefined;

  /**
   * @public
   * <p>The ID of the dataset.</p>
   */
  DatasetId: string | undefined;
}

/**
 * @public
 */
export interface DescribeTopicRefreshScheduleResponse {
  /**
   * @public
   * <p>The ID of the topic that contains the refresh schedule that you want to describe. This
   *          ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
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
   * <p>The definition of a refresh schedule.</p>
   */
  RefreshSchedule?: TopicRefreshSchedule;

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
export interface DescribeUserRequest {
  /**
   * @public
   * <p>The name of the user that you want to describe.</p>
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
  AUTHOR: "AUTHOR",
  READER: "READER",
  RESTRICTED_AUTHOR: "RESTRICTED_AUTHOR",
  RESTRICTED_READER: "RESTRICTED_READER",
} as const;

/**
 * @public
 */
export type UserRole = (typeof UserRole)[keyof typeof UserRole];

/**
 * @public
 * <p>A registered user of Amazon QuickSight. </p>
 */
export interface User {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the user.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The user's user name. This value is required if you are registering a user that will be managed in Amazon QuickSight. In the output, the value for <code>UserName</code> is
   *                 <code>N/A</code> when the value for <code>IdentityType</code> is <code>IAM</code>
   *             and the corresponding IAM user is deleted.</p>
   */
  UserName?: string;

  /**
   * @public
   * <p>The user's email address.</p>
   */
  Email?: string;

  /**
   * @public
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
   *                   <code>RESTRICTED_READER</code>: This role isn't currently available for
   *                     use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESTRICTED_AUTHOR</code>: This role isn't currently available for
   *                     use.</p>
   *             </li>
   *          </ul>
   */
  Role?: UserRole;

  /**
   * @public
   * <p>The type of identity authentication used by the user.</p>
   */
  IdentityType?: IdentityType;

  /**
   * @public
   * <p>The active status of user. When you create an Amazon QuickSight user that's not an IAM user or an Active Directory user, that user is inactive until they sign in and provide a
   *             password.</p>
   */
  Active?: boolean;

  /**
   * @public
   * <p>The principal ID of the user.</p>
   */
  PrincipalId?: string;

  /**
   * @public
   * <p>The custom permissions profile associated with this user.</p>
   */
  CustomPermissionsName?: string;

  /**
   * @public
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
   */
  ExternalLoginFederationProviderType?: string;

  /**
   * @public
   * <p>The URL of the external login provider.</p>
   */
  ExternalLoginFederationProviderUrl?: string;

  /**
   * @public
   * <p>The identity ID for the user in the external login provider.</p>
   */
  ExternalLoginId?: string;
}

/**
 * @public
 */
export interface DescribeUserResponse {
  /**
   * @public
   * <p>The user name.</p>
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
export interface DescribeVPCConnectionRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID of the account that contains the VPC connection that
   * 			you want described.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the VPC connection that
   * 			you're creating. This ID is a unique identifier for each Amazon Web Services Region in an Amazon Web Services account.</p>
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
 * @public
 * <p>The structure that contains information about a network interface.</p>
 */
export interface NetworkInterface {
  /**
   * @public
   * <p>The subnet ID associated with the network interface.</p>
   */
  SubnetId?: string;

  /**
   * @public
   * <p>The availability zone that the network interface resides in.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>An error message.</p>
   */
  ErrorMessage?: string;

  /**
   * @public
   * <p>The status of the network interface.</p>
   */
  Status?: NetworkInterfaceStatus;

  /**
   * @public
   * <p>The network interface ID.</p>
   */
  NetworkInterfaceId?: string;
}

/**
 * @public
 * <p>The structure of a VPC connection.</p>
 */
export interface VPCConnection {
  /**
   * @public
   * <p>The ID of the VPC connection that you're creating. This ID is a unique identifier for each Amazon Web Services Region in an
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
   * <p>The ARN of the
   *                 IAM role associated with the VPC
   *             connection.</p>
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
export interface DescribeVPCConnectionResponse {
  /**
   * @public
   * <p>A response object that provides information for the specified VPC connection.</p>
   */
  VPCConnection?: VPCConnection;

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
 * <p>The domain specified isn't on the allow list. All domains for embedded dashboards must be
 * 			added to the approved list by an Amazon QuickSight admin.</p>
 */
export class DomainNotWhitelistedException extends __BaseException {
  readonly name: "DomainNotWhitelistedException" = "DomainNotWhitelistedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @public
   * <p>The Amazon Web Services request ID for this request.</p>
   */
  RequestId?: string;
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
 * @public
 * <p>An object that consists of a member Amazon Resource Name (ARN) and a member ID.</p>
 */
export interface MemberIdArnPair {
  /**
   * @public
   * <p>The ID of the member.</p>
   */
  MemberId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the member.</p>
   */
  MemberArn?: string;
}

/**
 * @public
 * <p>A filter to use to search an Amazon QuickSight folder.</p>
 */
export interface FolderSearchFilter {
  /**
   * @public
   * <p>The comparison operator that you want to use as a filter, for example  <code>"Operator": "StringEquals"</code>. Valid values are  <code>"StringEquals"</code>  and  <code>"StringLike"</code>.</p>
   *          <p>If you set the operator value to <code>"StringEquals"</code>, you need to provide an ownership related filter in the <code>"NAME"</code> field and the arn of the user or group whose folders you want to search in the <code>"Value"</code> field. For example,  <code>"Name":"DIRECT_QUICKSIGHT_OWNER", "Operator": "StringEquals", "Value": "arn:aws:quicksight:us-east-1:1:user/default/UserName1"</code>.</p>
   *          <p>If you set the value to <code>"StringLike"</code>, you need to provide the name of the folders you are searching for. For example, <code>"Name":"FOLDER_NAME", "Operator": "StringLike", "Value": "Test"</code>. The <code>"StringLike"</code> operator only supports the <code>NAME</code> value <code>FOLDER_NAME</code>.</p>
   */
  Operator?: FilterOperator;

  /**
   * @public
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
   */
  Name?: FolderFilterAttribute;

  /**
   * @public
   * <p>The value of the named item (in this example, <code>PARENT_FOLDER_ARN</code>), that you want to use as a filter. For example, <code>"Value": "arn:aws:quicksight:us-east-1:1:folder/folderId"</code>.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>A summary of information about an existing Amazon QuickSight folder. </p>
 */
export interface FolderSummary {
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
   * <p>The display name of the folder.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The type of folder.</p>
   */
  FolderType?: FolderType;

  /**
   * @public
   * <p>The time that the folder was created.</p>
   */
  CreatedTime?: Date;

  /**
   * @public
   * <p>The time that the folder was last updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * @public
   * <p>The sharing scope of the folder.</p>
   */
  SharingModel?: SharingModel;
}

/**
 * @public
 * <p>The key-value pair used for the row-level security tags feature.</p>
 */
export interface SessionTag {
  /**
   * @public
   * <p>The key for the tag.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The value that you want to assign the tag.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface GenerateEmbedUrlForAnonymousUserRequest {
  /**
   * @public
   * <p>The ID for the Amazon Web Services account that contains the dashboard that you're embedding.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>How many minutes the session is valid. The session lifetime must be in [15-600] minutes range.</p>
   */
  SessionLifetimeInMinutes?: number;

  /**
   * @public
   * <p>The Amazon QuickSight namespace that the anonymous user virtually belongs to. If you are not using an Amazon QuickSight custom namespace, set this to <code>default</code>.</p>
   */
  Namespace: string | undefined;

  /**
   * @public
   * <p>The session tags used for row-level security. Before you use this parameter, make sure that you have configured the relevant datasets using the <code>DataSet$RowLevelPermissionTagConfiguration</code> parameter so that session tags can be used to provide row-level security.</p>
   *          <p>These are not the tags used for the Amazon Web Services resource tagging feature. For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/quicksight-dev-rls-tags.html">Using Row-Level Security (RLS) with Tags</a>in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  SessionTags?: SessionTag[];

  /**
   * @public
   * <p>The Amazon Resource Names (ARNs) for the Amazon QuickSight resources that the user
   *             is authorized to access during the lifetime of the session. If you choose
   *                 <code>Dashboard</code> embedding experience, pass the list of dashboard ARNs in the
   *             account that you want the user to be able to view. Currently, you can pass up to 25
   *             dashboard ARNs in each API call.</p>
   */
  AuthorizedResourceArns: string[] | undefined;

  /**
   * @public
   * <p>The configuration of the experience that you are embedding.</p>
   */
  ExperienceConfiguration: AnonymousUserEmbeddingExperienceConfiguration | undefined;

  /**
   * @public
   * <p>The domains that you want to add to the allow list for access to the generated URL that
   *             is then embedded. This optional parameter overrides the static domains that are
   *             configured in the Manage QuickSight menu in the Amazon QuickSight console. Instead, it
   *             allows only the domains that you include in this parameter. You can list up to three
   *             domains or subdomains in each API call.</p>
   *          <p>To include all subdomains under a specific domain to the allow list, use <code>*</code>.
   *             For example, <code>https://*.sapp.amazon.com</code> includes all subdomains under
   *             <code>https://sapp.amazon.com</code>.</p>
   */
  AllowedDomains?: string[];
}

/**
 * @public
 */
export interface GenerateEmbedUrlForAnonymousUserResponse {
  /**
   * @public
   * <p>The embed URL for the dashboard.</p>
   */
  EmbedUrl: string | undefined;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status: number | undefined;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) to use for the anonymous Amazon QuickSight user.</p>
   */
  AnonymousUserArn: string | undefined;
}

/**
 * @public
 * <p>The number of minutes specified for the lifetime of a session isn't valid. The session
 * 			lifetime must be 15-600 minutes.</p>
 */
export class SessionLifetimeInMinutesInvalidException extends __BaseException {
  readonly name: "SessionLifetimeInMinutesInvalidException" = "SessionLifetimeInMinutesInvalidException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @public
   * <p>The Amazon Web Services request ID for this request.</p>
   */
  RequestId?: string;
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
 * @public
 * <p>This error indicates that you are calling an embedding operation in Amazon QuickSight
 * 			without the required pricing plan on your Amazon Web Services account. Before you can use embedding
 * 			for anonymous users, a QuickSight administrator needs to add capacity pricing to Amazon QuickSight. You
 * 		    can do this on the <b>Manage Amazon QuickSight</b> page. </p>
 *          <p>After capacity pricing is added, you can use the
 *             <code>
 *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_GetDashboardEmbedUrl.html">GetDashboardEmbedUrl</a>
 *             </code> API operation with the
 *             <code>--identity-type ANONYMOUS</code> option.</p>
 */
export class UnsupportedPricingPlanException extends __BaseException {
  readonly name: "UnsupportedPricingPlanException" = "UnsupportedPricingPlanException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @public
   * <p>The Amazon Web Services request ID for this request.</p>
   */
  RequestId?: string;
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
 * @public
 * <p>The state perssitence configuration of an embedded dashboard.</p>
 */
export interface StatePersistenceConfigurations {
  /**
   * @public
   * <p>Determines if a Amazon QuickSight dashboard's state persistence settings are turned on or off.</p>
   */
  Enabled: boolean | undefined;
}

/**
 * @public
 * <p>The feature configuration for an embedded dashboard.</p>
 */
export interface RegisteredUserDashboardFeatureConfigurations {
  /**
   * @public
   * <p>The state persistence settings of an embedded dashboard.</p>
   */
  StatePersistence?: StatePersistenceConfigurations;

  /**
   * @public
   * <p>The bookmarks configuration for an embedded dashboard in Amazon QuickSight.</p>
   */
  Bookmarks?: BookmarksConfigurations;
}

/**
 * @public
 * <p>Information about the dashboard you want to embed.</p>
 */
export interface RegisteredUserDashboardEmbeddingConfiguration {
  /**
   * @public
   * <p>The dashboard ID for the dashboard that you want the user to see first. This ID is included in the output URL. When the URL in response is accessed, Amazon QuickSight renders this dashboard if the user has permissions to view it.</p>
   *          <p>If the user does not have permission to view this dashboard, they see a permissions error message.</p>
   */
  InitialDashboardId: string | undefined;

  /**
   * @public
   * <p>The feature configurations of an embbedded Amazon QuickSight dashboard.</p>
   */
  FeatureConfigurations?: RegisteredUserDashboardFeatureConfigurations;
}

/**
 * @public
 * <p>The experience that you are embedding. You can use this object to generate a url that embeds a visual into your application.</p>
 */
export interface RegisteredUserDashboardVisualEmbeddingConfiguration {
  /**
   * @public
   * <p>The visual ID for the visual that you want the user to embed. This ID is included in the output URL. When the URL in response is accessed, Amazon QuickSight renders this visual.</p>
   *          <p>The Amazon Resource Name (ARN) of the dashboard that the visual belongs to must be included in the <code>AuthorizedResourceArns</code> parameter. Otherwise, the request will fail with <code>InvalidParameterValueException</code>.</p>
   */
  InitialDashboardVisualId: DashboardVisualId | undefined;
}

/**
 * @public
 * <p>Information about the Q search bar embedding experience.</p>
 */
export interface RegisteredUserQSearchBarEmbeddingConfiguration {
  /**
   * @public
   * <p>The ID of the Q topic that you want to make the starting topic in the Q search bar.
   *       You can find a topic ID by navigating to the Topics pane in the Amazon QuickSight application and opening
   *       a topic. The ID is in the URL for the topic that you open.</p>
   *          <p>If you don't specify an initial topic, a list of all shared topics is shown in the Q bar
   *       for your readers. When you select an initial topic, you can specify whether or not readers
   *       are allowed to select other topics from the available ones in the list.</p>
   */
  InitialTopicId?: string;
}

/**
 * @public
 * <p>The feature configurations of an embedded Amazon QuickSight console.</p>
 */
export interface RegisteredUserConsoleFeatureConfigurations {
  /**
   * @public
   * <p>The state persistence configurations of an embedded Amazon QuickSight console.</p>
   */
  StatePersistence?: StatePersistenceConfigurations;
}

/**
 * @public
 * <p>Information about the Amazon QuickSight console that you want to embed.</p>
 */
export interface RegisteredUserQuickSightConsoleEmbeddingConfiguration {
  /**
   * @public
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
   */
  InitialPath?: string;

  /**
   * @public
   * <p>The embedding configuration of an embedded Amazon QuickSight console.</p>
   */
  FeatureConfigurations?: RegisteredUserConsoleFeatureConfigurations;
}

/**
 * @public
 * <p>The type of experience you want to embed. For registered users, you can embed Amazon QuickSight dashboards or the Amazon QuickSight console.</p>
 *          <note>
 *             <p>Exactly one of the experience configurations is required. You can choose
 *                     <code>Dashboard</code> or <code>QuickSightConsole</code>. You cannot choose more
 *                 than one experience configuration.</p>
 *          </note>
 */
export interface RegisteredUserEmbeddingExperienceConfiguration {
  /**
   * @public
   * <p>The configuration details for providing a dashboard embedding experience.</p>
   */
  Dashboard?: RegisteredUserDashboardEmbeddingConfiguration;

  /**
   * @public
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
   */
  QuickSightConsole?: RegisteredUserQuickSightConsoleEmbeddingConfiguration;

  /**
   * @public
   * <p>The configuration details for embedding the Q search bar.</p>
   *          <p>For more information about embedding the Q search bar, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/embedding-overview.html">Embedding Overview</a> in
   *             the <i>Amazon QuickSight User Guide</i>.</p>
   */
  QSearchBar?: RegisteredUserQSearchBarEmbeddingConfiguration;

  /**
   * @public
   * <p>The type of embedding experience. In this case, Amazon QuickSight visuals.</p>
   */
  DashboardVisual?: RegisteredUserDashboardVisualEmbeddingConfiguration;
}

/**
 * @public
 */
export interface GenerateEmbedUrlForRegisteredUserRequest {
  /**
   * @public
   * <p>The ID for the Amazon Web Services account that contains the dashboard that you're embedding.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>How many minutes the session is valid. The session lifetime must be in [15-600] minutes range.</p>
   */
  SessionLifetimeInMinutes?: number;

  /**
   * @public
   * <p>The Amazon Resource Name for the registered user.</p>
   */
  UserArn: string | undefined;

  /**
   * @public
   * <p>The experience you are embedding. For registered users, you can embed Amazon QuickSight dashboards, Amazon QuickSight visuals, the Amazon QuickSight Q search bar, or the entire Amazon QuickSight console.</p>
   */
  ExperienceConfiguration: RegisteredUserEmbeddingExperienceConfiguration | undefined;

  /**
   * @public
   * <p>The domains that you want to add to the allow list for access to the generated URL that
   *           is then embedded. This optional parameter overrides the static domains that are
   *           configured in the Manage QuickSight menu in the Amazon QuickSight console. Instead, it
   *           allows only the domains that you include in this parameter. You can list up to three
   *           domains or subdomains in each API call.</p>
   *          <p>To include all subdomains under a specific domain to the allow list, use <code>*</code>.
   *             For example, <code>https://*.sapp.amazon.com</code> includes all subdomains under
   *             <code>https://sapp.amazon.com</code>.</p>
   */
  AllowedDomains?: string[];
}

/**
 * @public
 */
export interface GenerateEmbedUrlForRegisteredUserResponse {
  /**
   * @public
   * <p>The embed URL for the Amazon QuickSight dashboard, visual, Q search bar, or console.</p>
   */
  EmbedUrl: string | undefined;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status: number | undefined;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId: string | undefined;
}

/**
 * @public
 * <p>The user with the provided name isn't found. This error can happen in any operation
 * 			that requires finding a user based on a provided user name, such as
 * 				<code>DeleteUser</code>, <code>DescribeUser</code>, and so on.</p>
 */
export class QuickSightUserNotFoundException extends __BaseException {
  readonly name: "QuickSightUserNotFoundException" = "QuickSightUserNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @public
   * <p>The Amazon Web Services request ID for this request.</p>
   */
  RequestId?: string;
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
   * @public
   * <p>The ID for the Amazon Web Services account that contains the dashboard that you're embedding.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the dashboard, also added to the Identity and Access Management (IAM)
   *             policy.</p>
   */
  DashboardId: string | undefined;

  /**
   * @public
   * <p>The authentication method that the user uses to sign in.</p>
   */
  IdentityType: EmbeddingIdentityType | undefined;

  /**
   * @public
   * <p>How many minutes the session is valid. The session lifetime must be 15-600 minutes.</p>
   */
  SessionLifetimeInMinutes?: number;

  /**
   * @public
   * <p>Remove the undo/redo button on the embedded dashboard. The default is FALSE, which enables
   * 			the undo/redo button.</p>
   */
  UndoRedoDisabled?: boolean;

  /**
   * @public
   * <p>Remove the reset button on the embedded dashboard. The default is FALSE, which enables the
   * 			reset button.</p>
   */
  ResetDisabled?: boolean;

  /**
   * @public
   * <p>Adds persistence of state for the user session in an embedded dashboard. Persistence
   *             applies to the sheet and the parameter settings. These are control settings that the
   *             dashboard subscriber (Amazon QuickSight reader) chooses while viewing the dashboard. If this is
   *             set to <code>TRUE</code>, the settings are the same when the subscriber reopens the same
   *             dashboard URL. The state is stored in Amazon QuickSight, not in a browser cookie. If this is
   *             set to FALSE, the state of the user session is not persisted. The default is
   *                 <code>FALSE</code>.</p>
   */
  StatePersistenceEnabled?: boolean;

  /**
   * @public
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
   */
  UserArn?: string;

  /**
   * @public
   * <p>The Amazon QuickSight namespace that contains the dashboard IDs in this request.
   *     	   If you're not using a custom namespace, set <code>Namespace = default</code>.</p>
   */
  Namespace?: string;

  /**
   * @public
   * <p>A list of one or more dashboard IDs that you want anonymous users to have tempporary access to. Currently, the <code>IdentityType</code> parameter must be set to <code>ANONYMOUS</code> because other identity types authenticate as Amazon QuickSight or IAM users. For example, if you set "<code>--dashboard-id dash_id1 --dashboard-id dash_id2 dash_id3 identity-type ANONYMOUS</code>", the session can access all three dashboards.</p>
   */
  AdditionalDashboardIds?: string[];
}

/**
 * @public
 * <p>Output returned from the <code>GetDashboardEmbedUrl</code> operation.</p>
 */
export interface GetDashboardEmbedUrlResponse {
  /**
   * @public
   * <p>A single-use URL that you can put into your server-side webpage to embed your
   * 			dashboard. This URL is valid for 5 minutes. The API operation provides the URL with an
   * 			<code>auth_code</code> value that enables one (and only one) sign-on to a user session
   * 			that is valid for 10 hours. </p>
   */
  EmbedUrl?: string;

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
 * <p>The identity type specified isn't supported. Supported identity types include
 * 				<code>IAM</code> and <code>QUICKSIGHT</code>.</p>
 */
export class IdentityTypeNotSupportedException extends __BaseException {
  readonly name: "IdentityTypeNotSupportedException" = "IdentityTypeNotSupportedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @public
   * <p>The Amazon Web Services request ID for this request.</p>
   */
  RequestId?: string;
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
   * @public
   * <p>The ID for the Amazon Web Services account associated with your Amazon QuickSight subscription.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
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
   */
  EntryPoint?: string;

  /**
   * @public
   * <p>How many minutes the session is valid. The session lifetime must be 15-600 minutes.</p>
   */
  SessionLifetimeInMinutes?: number;

  /**
   * @public
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
   */
  UserArn?: string;
}

/**
 * @public
 */
export interface GetSessionEmbedUrlResponse {
  /**
   * @public
   * <p>A single-use URL that you can put into your server-side web page to embed your
   * 			Amazon QuickSight session. This URL is valid for 5 minutes. The API operation provides the URL with an
   * 			<code>auth_code</code> value that enables one (and only one) sign-on to a user session
   * 			that is valid for 10 hours. </p>
   */
  EmbedUrl?: string;

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
 * @public
 * <p>A <code>GroupSearchFilter</code> object that you want to apply to your search.</p>
 */
export interface GroupSearchFilter {
  /**
   * @public
   * <p>The comparison operator that you want to use as a filter, for example <code>"Operator":
   *                 "StartsWith"</code>. Currently, the only supported operator is
   *                 <code>StartsWith</code>.</p>
   */
  Operator: GroupFilterOperator | undefined;

  /**
   * @public
   * <p>The name of the value that you want to use as a filter, for example <code>"Name":
   *                 "GROUP_NAME"</code>. Currently, the only supported name is
   *             <code>GROUP_NAME</code>.</p>
   */
  Name: GroupFilterAttribute | undefined;

  /**
   * @public
   * <p>The value of the named item, in this case <code>GROUP_NAME</code>, that you want to use as a filter.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 * <p>IAM policy assignment summary.</p>
 */
export interface IAMPolicyAssignmentSummary {
  /**
   * @public
   * <p>Assignment name.</p>
   */
  AssignmentName?: string;

  /**
   * @public
   * <p>Assignment status.</p>
   */
  AssignmentStatus?: AssignmentStatus;
}

/**
 * @public
 * <p>You don't have this feature activated for your account. To fix this issue, contact Amazon Web Services support.</p>
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @public
   * <p>The Amazon Web Services request ID for this request.</p>
   */
  RequestId?: string;
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
   * @public
   * <p>The ID of the Amazon Web Services account that contains the analyses.</p>
   */
  AwsAccountId: string | undefined;

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
export interface ListAnalysesResponse {
  /**
   * @public
   * <p>Metadata describing each of the analyses that are listed.</p>
   */
  AnalysisSummaryList?: AnalysisSummary[];

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
export interface ListAssetBundleExportJobsRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that the export jobs were executed in. </p>
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
 */
export interface ListAssetBundleExportJobsResponse {
  /**
   * @public
   * <p>A list of export job summaries.</p>
   */
  AssetBundleExportJobSummaryList?: AssetBundleExportJobSummary[];

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
export interface ListAssetBundleImportJobsRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that the import jobs were executed in.</p>
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
 */
export interface ListAssetBundleImportJobsResponse {
  /**
   * @public
   * <p>A list of import job summaries.</p>
   */
  AssetBundleImportJobSummaryList?: AssetBundleImportJobSummary[];

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
   * <p>The HTTP status of the response.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface ListDashboardsRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the dashboards that you're
   *             listing.</p>
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
 */
export interface ListDashboardsResponse {
  /**
   * @public
   * <p>A structure that contains all of the dashboards in your Amazon Web Services account. This structure
   *             provides basic information about the dashboards.</p>
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
export interface ListDashboardVersionsRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the dashboard that you're listing versions
   *             for.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the dashboard.</p>
   */
  DashboardId: string | undefined;

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
export interface ListDashboardVersionsResponse {
  /**
   * @public
   * <p>A structure that contains information about each version of the dashboard.</p>
   */
  DashboardVersionSummaryList?: DashboardVersionSummary[];

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
export interface ListDataSetsRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
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
 */
export interface ListDataSetsResponse {
  /**
   * @public
   * <p>The list of dataset summaries.</p>
   */
  DataSetSummaries?: DataSetSummary[];

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
export interface ListDataSourcesRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
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
 */
export interface ListDataSourcesResponse {
  /**
   * @public
   * <p>A list of data sources.</p>
   */
  DataSources?: DataSource[];

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
export interface ListFolderMembersRequest {
  /**
   * @public
   * <p>The ID for the Amazon Web Services account that contains the folder.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the folder.</p>
   */
  FolderId: string | undefined;

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
export interface ListFolderMembersResponse {
  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>A structure that contains all of the folder members (dashboards, analyses, and datasets) in the folder.</p>
   */
  FolderMemberList?: MemberIdArnPair[];

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
export interface ListFoldersRequest {
  /**
   * @public
   * <p>The ID for the Amazon Web Services account that contains the folder.</p>
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
 */
export interface ListFoldersResponse {
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
export interface ListGroupMembershipsRequest {
  /**
   * @public
   * <p>The name of the group that you want to see a membership list of.</p>
   */
  GroupName: string | undefined;

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
   * <p>The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the
   * 			Amazon Web Services account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The namespace of the group that you want a list of users from.</p>
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface ListGroupMembershipsResponse {
  /**
   * @public
   * <p>The list of the members of the group.</p>
   */
  GroupMemberList?: GroupMember[];

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
export interface ListGroupsRequest {
  /**
   * @public
   * <p>The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the
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
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The namespace that you want a list of groups from.</p>
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface ListGroupsResponse {
  /**
   * @public
   * <p>The list of the groups.</p>
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
export interface ListIAMPolicyAssignmentsRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains these IAM policy
   * 			assignments.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The status of the assignments.</p>
   */
  AssignmentStatus?: AssignmentStatus;

  /**
   * @public
   * <p>The namespace for the assignments.</p>
   */
  Namespace: string | undefined;

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
export interface ListIAMPolicyAssignmentsResponse {
  /**
   * @public
   * <p>Information describing the IAM policy assignments.</p>
   */
  IAMPolicyAssignments?: IAMPolicyAssignmentSummary[];

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
export interface ListIAMPolicyAssignmentsForUserRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the assignments.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The name of the user.</p>
   */
  UserName: string | undefined;

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
   * <p>The namespace of the assignment.</p>
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface ListIAMPolicyAssignmentsForUserResponse {
  /**
   * @public
   * <p>The active assignments for this user.</p>
   */
  ActiveAssignments?: ActiveIAMPolicyAssignment[];

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

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface ListIdentityPropagationConfigsRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contain the identity propagation configurations of.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to be returned.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListIdentityPropagationConfigsResponse {
  /**
   * @public
   * <p>A list of services and their authorized targets that the Amazon QuickSight IAM Identity Center application can access.</p>
   */
  Services?: AuthorizedTargetsByService[];

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
export interface ListIngestionsRequest {
  /**
   * @public
   * <p>The ID of the dataset used in the ingestion.</p>
   */
  DataSetId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListIngestionsResponse {
  /**
   * @public
   * <p>A list of the ingestions.</p>
   */
  Ingestions?: Ingestion[];

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
export interface ListNamespacesRequest {
  /**
   * @public
   * <p>The ID for the Amazon Web Services account that contains the Amazon QuickSight namespaces that you want to list.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>A unique pagination token that can be used in a subsequent request. You will receive a pagination token in the response body of a previous <code>ListNameSpaces</code> API call if there is more data that can be returned. To receive the data, make another <code>ListNamespaces</code> API call with the returned token to retrieve the next page of data. Each token is valid for 24 hours. If you try to make a <code>ListNamespaces</code> API call with an expired token, you will receive a <code>HTTP 400 InvalidNextTokenException</code> error.</p>
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
export interface ListNamespacesResponse {
  /**
   * @public
   * <p>The information about the namespaces in this Amazon Web Services account. The response includes
   *         the namespace ARN, name, Amazon Web Services Region, notification email address, creation status, and
   *         identity store.</p>
   */
  Namespaces?: NamespaceInfoV2[];

  /**
   * @public
   * <p>A unique pagination token that can be used in a subsequent request. Receiving <code>NextToken</code> in your response inticates that there is more data that can be returned. To receive the data, make another <code>ListNamespaces</code> API call with the returned token to retrieve the next page of data. Each token is valid for 24 hours. If you try to make a <code>ListNamespaces</code> API call with an expired token, you will receive a <code>HTTP 400 InvalidNextTokenException</code> error.</p>
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
export interface ListRefreshSchedulesRequest {
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
}

/**
 * @public
 */
export interface ListRefreshSchedulesResponse {
  /**
   * @public
   * <p>The list of refresh schedules for the dataset.</p>
   */
  RefreshSchedules?: RefreshSchedule[];

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
export interface ListRoleMembershipsRequest {
  /**
   * @public
   * <p>The name of the role.</p>
   */
  Role: Role | undefined;

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

  /**
   * @public
   * <p>The ID for the Amazon Web Services account that you want to create a group in. The Amazon Web Services account ID that you provide must be the same Amazon Web Services account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The namespace that includes the role.</p>
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface ListRoleMembershipsResponse {
  /**
   * @public
   * <p>The list of groups associated with a role</p>
   */
  MembersList?: string[];

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
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource that you want a list of tags for.</p>
   */
  ResourceArn: string | undefined;
}

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
});

/**
 * @internal
 */
export const DataSetFilterSensitiveLog = (obj: DataSet): any => ({
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
export const DescribeTemplateDefinitionResponseFilterSensitiveLog = (obj: DescribeTemplateDefinitionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTopicResponseFilterSensitiveLog = (obj: DescribeTopicResponse): any => ({
  ...obj,
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
