// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { QuickSightServiceException as __BaseException } from "./QuickSightServiceException";

/**
 * <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
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
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * <p>The Amazon QuickSight customizations associated with your Amazon Web Services account or a QuickSight namespace in a specific Amazon Web Services Region.</p>
 * @public
 */
export interface AccountCustomization {
  /**
   * <p>The default theme for this Amazon QuickSight subscription.</p>
   * @public
   */
  DefaultTheme?: string | undefined;

  /**
   * <p>The default email customization template.</p>
   * @public
   */
  DefaultEmailCustomizationTemplate?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Edition = {
  ENTERPRISE: "ENTERPRISE",
  ENTERPRISE_AND_Q: "ENTERPRISE_AND_Q",
  STANDARD: "STANDARD",
} as const;

/**
 * @public
 */
export type Edition = (typeof Edition)[keyof typeof Edition];

/**
 * <p>A structure that contains the following account information
 *             elements:</p>
 *          <ul>
 *             <li>
 *                <p>Your Amazon QuickSight account name.</p>
 *             </li>
 *             <li>
 *                <p>The edition of Amazon QuickSight that your account is using.</p>
 *             </li>
 *             <li>
 *                <p>The notification email address that is associated with the Amazon QuickSight account.
 *             </p>
 *             </li>
 *             <li>
 *                <p>The authentication type of the Amazon QuickSight account.</p>
 *             </li>
 *             <li>
 *                <p>The status of the Amazon QuickSight account's subscription.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface AccountInfo {
  /**
   * <p>The account name that you provided for the Amazon QuickSight subscription in your
   *                 Amazon Web Services account. You create this name when you sign up for Amazon QuickSight. It's unique over all of Amazon Web Services, and it appears only when
   *             users sign in.</p>
   * @public
   */
  AccountName?: string | undefined;

  /**
   * <p>The edition of your Amazon QuickSight account.</p>
   * @public
   */
  Edition?: Edition | undefined;

  /**
   * <p>The email address that will be used for Amazon QuickSight to send notifications regarding your Amazon Web Services account or Amazon QuickSight subscription.</p>
   * @public
   */
  NotificationEmail?: string | undefined;

  /**
   * <p>The way that your Amazon QuickSight account is authenticated.</p>
   * @public
   */
  AuthenticationType?: string | undefined;

  /**
   * <p>The status of your account subscription.</p>
   * @public
   */
  AccountSubscriptionStatus?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the IAM Identity Center instance.</p>
   * @public
   */
  IAMIdentityCenterInstanceArn?: string | undefined;
}

/**
 * <p>The Amazon QuickSight settings associated with your Amazon Web Services account.</p>
 * @public
 */
export interface AccountSettings {
  /**
   * <p>The "account name" you provided for the Amazon QuickSight subscription in your Amazon Web Services account.
   *             You create this name when you sign up for Amazon QuickSight. It is unique in all of Amazon Web Services and
   *             it appears only when users sign in.</p>
   * @public
   */
  AccountName?: string | undefined;

  /**
   * <p>The edition of Amazon QuickSight that you're currently subscribed to:
   *         Enterprise edition or Standard edition.</p>
   * @public
   */
  Edition?: Edition | undefined;

  /**
   * <p>The default Amazon QuickSight namespace for your Amazon Web Services account. </p>
   * @public
   */
  DefaultNamespace?: string | undefined;

  /**
   * <p>The main notification email for your Amazon QuickSight subscription.</p>
   * @public
   */
  NotificationEmail?: string | undefined;

  /**
   * <p>A Boolean value that indicates whether public sharing is turned on for an Amazon QuickSight account. For more information about turning on public sharing, see <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdatePublicSharingSettings.html">UpdatePublicSharingSettings</a>.</p>
   * @public
   */
  PublicSharingEnabled?: boolean | undefined;

  /**
   * <p>A boolean value that determines whether or not an Amazon QuickSight account can be deleted. A <code>True</code> value doesn't allow the account to be deleted and results in an error message if a user tries to make a <code>DeleteAccountSubsctiption</code> request. A <code>False</code> value will allow the ccount to be deleted. </p>
   * @public
   */
  TerminationProtectionEnabled?: boolean | undefined;
}

/**
 * <p>The active Identity and Access Management (IAM) policy assignment.</p>
 * @public
 */
export interface ActiveIAMPolicyAssignment {
  /**
   * <p>A name for the IAM policy assignment.</p>
   * @public
   */
  AssignmentName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  PolicyArn?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DashboardBehavior = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type DashboardBehavior = (typeof DashboardBehavior)[keyof typeof DashboardBehavior];

/**
 * <p>An ad hoc (one-time) filtering option.</p>
 * @public
 */
export interface AdHocFilteringOption {
  /**
   * <p>Availability status.</p>
   * @public
   */
  AvailabilityStatus?: DashboardBehavior | undefined;
}

/**
 * @public
 * @enum
 */
export const AggType = {
  AVERAGE: "AVERAGE",
  COLUMN: "COLUMN",
  COUNT: "COUNT",
  CUSTOM: "CUSTOM",
  DISTINCT_COUNT: "DISTINCT_COUNT",
  MAX: "MAX",
  MEDIAN: "MEDIAN",
  MIN: "MIN",
  PERCENTILE: "PERCENTILE",
  PTD_AVERAGE: "PTD_AVERAGE",
  PTD_COUNT: "PTD_COUNT",
  PTD_DISTINCT_COUNT: "PTD_DISTINCT_COUNT",
  PTD_MAX: "PTD_MAX",
  PTD_MIN: "PTD_MIN",
  PTD_SUM: "PTD_SUM",
  STDEV: "STDEV",
  STDEVP: "STDEVP",
  SUM: "SUM",
  VAR: "VAR",
  VARP: "VARP",
} as const;

/**
 * @public
 */
export type AggType = (typeof AggType)[keyof typeof AggType];

/**
 * @public
 * @enum
 */
export const TopicTimeGranularity = {
  DAY: "DAY",
  HOUR: "HOUR",
  MINUTE: "MINUTE",
  MONTH: "MONTH",
  QUARTER: "QUARTER",
  SECOND: "SECOND",
  WEEK: "WEEK",
  YEAR: "YEAR",
} as const;

/**
 * @public
 */
export type TopicTimeGranularity = (typeof TopicTimeGranularity)[keyof typeof TopicTimeGranularity];

/**
 * <p>The definition of an Agg function.</p>
 * @public
 */
export interface AggFunction {
  /**
   * <p>The aggregation of an Agg function.</p>
   * @public
   */
  Aggregation?: AggType | undefined;

  /**
   * <p>The aggregation parameters for an Agg function.</p>
   * @public
   */
  AggregationFunctionParameters?: Record<string, string> | undefined;

  /**
   * <p>The period of an Agg function.</p>
   * @public
   */
  Period?: TopicTimeGranularity | undefined;

  /**
   * <p>The period field for an Agg function.</p>
   * @public
   */
  PeriodField?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SimpleAttributeAggregationFunction = {
  UNIQUE_VALUE: "UNIQUE_VALUE",
} as const;

/**
 * @public
 */
export type SimpleAttributeAggregationFunction =
  (typeof SimpleAttributeAggregationFunction)[keyof typeof SimpleAttributeAggregationFunction];

/**
 * <p>Aggregation for attributes.</p>
 * @public
 */
export interface AttributeAggregationFunction {
  /**
   * <p>The built-in aggregation functions for attributes.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>UNIQUE_VALUE</code>: Returns the unique value for a field, aggregated by the dimension fields.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SimpleAttributeAggregation?: SimpleAttributeAggregationFunction | undefined;

  /**
   * <p>Used by the <code>UNIQUE_VALUE</code> aggregation function. If there are multiple values for the field used by the aggregation, the value for this property will be returned instead. Defaults to '*'.</p>
   * @public
   */
  ValueForMultipleValues?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CategoricalAggregationFunction = {
  COUNT: "COUNT",
  DISTINCT_COUNT: "DISTINCT_COUNT",
} as const;

/**
 * @public
 */
export type CategoricalAggregationFunction =
  (typeof CategoricalAggregationFunction)[keyof typeof CategoricalAggregationFunction];

/**
 * @public
 * @enum
 */
export const DateAggregationFunction = {
  COUNT: "COUNT",
  DISTINCT_COUNT: "DISTINCT_COUNT",
  MAX: "MAX",
  MIN: "MIN",
} as const;

/**
 * @public
 */
export type DateAggregationFunction = (typeof DateAggregationFunction)[keyof typeof DateAggregationFunction];

/**
 * <p>An aggregation based on the percentile of values in a dimension or measure.</p>
 * @public
 */
export interface PercentileAggregation {
  /**
   * <p>The percentile value. This value can be any numeric constant 0–100. A percentile value of 50 computes the median value of the measure.</p>
   * @public
   */
  PercentileValue?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const SimpleNumericalAggregationFunction = {
  AVERAGE: "AVERAGE",
  COUNT: "COUNT",
  DISTINCT_COUNT: "DISTINCT_COUNT",
  MAX: "MAX",
  MEDIAN: "MEDIAN",
  MIN: "MIN",
  STDEV: "STDEV",
  STDEVP: "STDEVP",
  SUM: "SUM",
  VAR: "VAR",
  VARP: "VARP",
} as const;

/**
 * @public
 */
export type SimpleNumericalAggregationFunction =
  (typeof SimpleNumericalAggregationFunction)[keyof typeof SimpleNumericalAggregationFunction];

/**
 * <p>Aggregation for numerical values.</p>
 * @public
 */
export interface NumericalAggregationFunction {
  /**
   * <p>Built-in aggregation functions for numerical values.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SUM</code>: The sum of a dimension or measure. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AVERAGE</code>: The average of a dimension or measure.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MIN</code>: The minimum value of a dimension or measure.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MAX</code>: The maximum value of a dimension or measure.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COUNT</code>: The count of a dimension or measure.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISTINCT_COUNT</code>: The count of distinct values in a dimension or measure.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VAR</code>: The variance of a dimension or measure.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VARP</code>: The partitioned variance of a dimension or measure.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STDEV</code>: The standard deviation of a dimension or measure.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STDEVP</code>: The partitioned standard deviation of a dimension or measure.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MEDIAN</code>: The median value of a dimension or measure.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SimpleNumericalAggregation?: SimpleNumericalAggregationFunction | undefined;

  /**
   * <p>An aggregation based on the percentile of values in a dimension or measure.</p>
   * @public
   */
  PercentileAggregation?: PercentileAggregation | undefined;
}

/**
 * <p>An aggregation function aggregates values from a dimension or measure.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 * @public
 */
export interface AggregationFunction {
  /**
   * <p>Aggregation for numerical values.</p>
   * @public
   */
  NumericalAggregationFunction?: NumericalAggregationFunction | undefined;

  /**
   * <p>Aggregation for categorical values.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>COUNT</code>: Aggregate by the total number of values, including duplicates.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISTINCT_COUNT</code>: Aggregate by the total number of distinct values.</p>
   *             </li>
   *          </ul>
   * @public
   */
  CategoricalAggregationFunction?: CategoricalAggregationFunction | undefined;

  /**
   * <p>Aggregation for date values.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>COUNT</code>: Aggregate by the total number of values, including duplicates.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISTINCT_COUNT</code>: Aggregate by the total number of distinct values.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MIN</code>: Select the smallest date value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MAX</code>: Select the largest date value.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DateAggregationFunction?: DateAggregationFunction | undefined;

  /**
   * <p>Aggregation for attributes.</p>
   * @public
   */
  AttributeAggregationFunction?: AttributeAggregationFunction | undefined;
}

/**
 * @public
 * @enum
 */
export const TimeGranularity = {
  DAY: "DAY",
  HOUR: "HOUR",
  MILLISECOND: "MILLISECOND",
  MINUTE: "MINUTE",
  MONTH: "MONTH",
  QUARTER: "QUARTER",
  SECOND: "SECOND",
  WEEK: "WEEK",
  YEAR: "YEAR",
} as const;

/**
 * @public
 */
export type TimeGranularity = (typeof TimeGranularity)[keyof typeof TimeGranularity];

/**
 * <p>The definition of an <code>AggregationPartitionBy</code>.</p>
 * @public
 */
export interface AggregationPartitionBy {
  /**
   * <p>The field Name for an <code>AggregationPartitionBy</code>.</p>
   * @public
   */
  FieldName?: string | undefined;

  /**
   * <p>The <code>TimeGranularity</code> for an <code>AggregationPartitionBy</code>.</p>
   * @public
   */
  TimeGranularity?: TimeGranularity | undefined;
}

/**
 * <p>A column of a data set.</p>
 * @public
 */
export interface ColumnIdentifier {
  /**
   * <p>The data set that the column belongs to.</p>
   * @public
   */
  DataSetIdentifier: string | undefined;

  /**
   * <p>The name of the column.</p>
   * @public
   */
  ColumnName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SortDirection = {
  ASC: "ASC",
  DESC: "DESC",
} as const;

/**
 * @public
 */
export type SortDirection = (typeof SortDirection)[keyof typeof SortDirection];

/**
 * <p>The configuration options to sort aggregated values.</p>
 * @public
 */
export interface AggregationSortConfiguration {
  /**
   * <p>The column that determines the sort order of aggregated values.</p>
   * @public
   */
  Column: ColumnIdentifier | undefined;

  /**
   * <p>The sort direction of values.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ASC</code>: Sort in ascending order.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DESC</code>: Sort in descending order.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SortDirection: SortDirection | undefined;

  /**
   * <p>The function that aggregates the values in <code>Column</code>.</p>
   * @public
   */
  AggregationFunction?: AggregationFunction | undefined;
}

/**
 * <p>An empty object that represents that the <code>AllSheets</code> option is the chosen value for the <code>FilterScopeConfiguration</code> parameter. This structure applies the filter to all visuals on all sheets of an Analysis, Dashboard, or Template.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 * @public
 */
export interface AllSheetsFilterScopeConfiguration {}

/**
 * <p>The parameters for OpenSearch.</p>
 * @public
 */
export interface AmazonElasticsearchParameters {
  /**
   * <p>The OpenSearch domain.</p>
   * @public
   */
  Domain: string | undefined;
}

/**
 * <p>The parameters for OpenSearch.</p>
 * @public
 */
export interface AmazonOpenSearchParameters {
  /**
   * <p>The OpenSearch domain.</p>
   * @public
   */
  Domain: string | undefined;
}

/**
 * <p>The generative Q&A settings of an embedded Amazon QuickSight console.</p>
 * @public
 */
export interface DataQnAConfigurations {
  /**
   * <p>The generative Q&A settings of an embedded Amazon QuickSight console.</p>
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * <p>The data story settings of an embedded Amazon QuickSight console.</p>
 * @public
 */
export interface DataStoriesConfigurations {
  /**
   * <p>The data story settings of an embedded Amazon QuickSight console.</p>
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * <p>The executive summary settings of an embedded Amazon QuickSight console or dashboard.</p>
 * @public
 */
export interface ExecutiveSummaryConfigurations {
  /**
   * <p>The executive summary settings of an embedded Amazon QuickSight console or dashboard.</p>
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * <p>The generative BI authoring settings of an embedded Amazon QuickSight console.</p>
 * @public
 */
export interface GenerativeAuthoringConfigurations {
  /**
   * <p>The generative BI authoring settings of an embedded Amazon QuickSight console.</p>
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * <p>A collection of Amazon Q feature configurations in an embedded Amazon QuickSight console.</p>
 * @public
 */
export interface AmazonQInQuickSightConsoleConfigurations {
  /**
   * <p>Adds generative Q&A capabilitiees to an embedded Amazon QuickSight console.</p>
   * @public
   */
  DataQnA?: DataQnAConfigurations | undefined;

  /**
   * <p>Adds the generative BI authoring experience to an embedded Amazon QuickSight console.</p>
   * @public
   */
  GenerativeAuthoring?: GenerativeAuthoringConfigurations | undefined;

  /**
   * <p>Adds the executive summaries feature to an embedded Amazon QuickSight console.</p>
   * @public
   */
  ExecutiveSummary?: ExecutiveSummaryConfigurations | undefined;

  /**
   * <p>Adds the data stories feature to an embedded Amazon QuickSight console.</p>
   * @public
   */
  DataStories?: DataStoriesConfigurations | undefined;
}

/**
 * <p>A collection of Amazon Q feature configurations in an embedded Amazon QuickSight dashboard.</p>
 * @public
 */
export interface AmazonQInQuickSightDashboardConfigurations {
  /**
   * <p>A generated executive summary of an embedded Amazon QuickSight dashboard.</p>
   * @public
   */
  ExecutiveSummary?: ExecutiveSummaryConfigurations | undefined;
}

/**
 * @public
 * @enum
 */
export const AnalysisErrorType = {
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
export type AnalysisErrorType = (typeof AnalysisErrorType)[keyof typeof AnalysisErrorType];

/**
 * <p>An object, structure, or sub-structure of an analysis, template, or dashboard.</p>
 * @public
 */
export interface Entity {
  /**
   * <p>The hierarchical path of the entity within the analysis, template, or dashboard definition tree.</p>
   * @public
   */
  Path?: string | undefined;
}

/**
 * <p>Analysis error.</p>
 * @public
 */
export interface AnalysisError {
  /**
   * <p>The type of the analysis error.</p>
   * @public
   */
  Type?: AnalysisErrorType | undefined;

  /**
   * <p>The message associated with the analysis error.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>Lists the violated entities that caused the analysis error</p>
   * @public
   */
  ViolatedEntities?: Entity[] | undefined;
}

/**
 * <p>The navigation configuration for <code>CustomActionNavigationOperation</code>.</p>
 * @public
 */
export interface LocalNavigationConfiguration {
  /**
   * <p>The sheet that is targeted for navigation in the same analysis.</p>
   * @public
   */
  TargetSheetId: string | undefined;
}

/**
 * <p>The navigation operation that navigates between different sheets in the same analysis.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 * @public
 */
export interface CustomActionNavigationOperation {
  /**
   * <p>The configuration that chooses the navigation target.</p>
   * @public
   */
  LocalNavigationConfiguration?: LocalNavigationConfiguration | undefined;
}

/**
 * <p>The customized parameter values.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 * @public
 */
export interface CustomParameterValues {
  /**
   * <p>A list of string-type parameter values.</p>
   * @public
   */
  StringValues?: string[] | undefined;

  /**
   * <p>A list of integer-type parameter values.</p>
   * @public
   */
  IntegerValues?: number[] | undefined;

  /**
   * <p>A list of decimal-type parameter values.</p>
   * @public
   */
  DecimalValues?: number[] | undefined;

  /**
   * <p>A list of datetime-type parameter values.</p>
   * @public
   */
  DateTimeValues?: Date[] | undefined;
}

/**
 * <p>The configuration of custom values for the destination parameter in <code>DestinationParameterValueConfiguration</code>.</p>
 * @public
 */
export interface CustomValuesConfiguration {
  /**
   * <p>Includes the null value in custom action parameter values.</p>
   * @public
   */
  IncludeNullValue?: boolean | undefined;

  /**
   * <p>The customized parameter values.</p>
   *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
   * @public
   */
  CustomValues: CustomParameterValues | undefined;
}

/**
 * @public
 * @enum
 */
export const SelectAllValueOptions = {
  ALL_VALUES: "ALL_VALUES",
} as const;

/**
 * @public
 */
export type SelectAllValueOptions = (typeof SelectAllValueOptions)[keyof typeof SelectAllValueOptions];

/**
 * <p>The configuration of destination parameter values.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 * @public
 */
export interface DestinationParameterValueConfiguration {
  /**
   * <p>The configuration of custom values for destination parameter in <code>DestinationParameterValueConfiguration</code>.</p>
   * @public
   */
  CustomValuesConfiguration?: CustomValuesConfiguration | undefined;

  /**
   * <p>The configuration that selects all options.</p>
   * @public
   */
  SelectAllValueOptions?: SelectAllValueOptions | undefined;

  /**
   * <p>The source parameter name of the destination parameter.</p>
   * @public
   */
  SourceParameterName?: string | undefined;

  /**
   * <p>The source field ID of the destination parameter.</p>
   * @public
   */
  SourceField?: string | undefined;

  /**
   * <p>A column of a data set.</p>
   * @public
   */
  SourceColumn?: ColumnIdentifier | undefined;
}

/**
 * <p>The configuration of adding parameters in action.</p>
 * @public
 */
export interface SetParameterValueConfiguration {
  /**
   * <p>The destination parameter name of the <code>SetParameterValueConfiguration</code>.</p>
   * @public
   */
  DestinationParameterName: string | undefined;

  /**
   * <p>The configuration of destination parameter values.</p>
   *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
   * @public
   */
  Value: DestinationParameterValueConfiguration | undefined;
}

/**
 * <p>The set parameter operation that sets parameters in custom action.</p>
 * @public
 */
export interface CustomActionSetParametersOperation {
  /**
   * <p>The parameter that determines the value configuration.</p>
   * @public
   */
  ParameterValueConfigurations: SetParameterValueConfiguration[] | undefined;
}

/**
 * @public
 * @enum
 */
export const URLTargetConfiguration = {
  NEW_TAB: "NEW_TAB",
  NEW_WINDOW: "NEW_WINDOW",
  SAME_TAB: "SAME_TAB",
} as const;

/**
 * @public
 */
export type URLTargetConfiguration = (typeof URLTargetConfiguration)[keyof typeof URLTargetConfiguration];

/**
 * <p>The URL operation that opens a link to another webpage.</p>
 * @public
 */
export interface CustomActionURLOperation {
  /**
   * <p>THe URL link of the <code>CustomActionURLOperation</code>.</p>
   * @public
   */
  URLTemplate: string | undefined;

  /**
   * <p>The target of the <code>CustomActionURLOperation</code>.</p>
   *          <p>Valid values are defined as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NEW_TAB</code>: Opens the target URL in a new browser tab.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NEW_WINDOW</code>: Opens the target URL in a new browser window.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SAME_TAB</code>: Opens the target URL in the same browser tab.</p>
   *             </li>
   *          </ul>
   * @public
   */
  URLTarget: URLTargetConfiguration | undefined;
}

/**
 * <p>The operation that is defined by the custom action.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 * @public
 */
export interface ImageCustomActionOperation {
  /**
   * <p>The navigation operation that navigates between different sheets in the same analysis.</p>
   *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
   * @public
   */
  NavigationOperation?: CustomActionNavigationOperation | undefined;

  /**
   * <p>The URL operation that opens a link to another webpage.</p>
   * @public
   */
  URLOperation?: CustomActionURLOperation | undefined;

  /**
   * <p>The set parameter operation that sets parameters in custom action.</p>
   * @public
   */
  SetParametersOperation?: CustomActionSetParametersOperation | undefined;
}

/**
 * @public
 * @enum
 */
export const WidgetStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type WidgetStatus = (typeof WidgetStatus)[keyof typeof WidgetStatus];

/**
 * @public
 * @enum
 */
export const ImageCustomActionTrigger = {
  CLICK: "CLICK",
  MENU: "MENU",
} as const;

/**
 * @public
 */
export type ImageCustomActionTrigger = (typeof ImageCustomActionTrigger)[keyof typeof ImageCustomActionTrigger];

/**
 * <p>A custom action defined on an image.</p>
 * @public
 */
export interface ImageCustomAction {
  /**
   * <p>The ID of the custom action.</p>
   * @public
   */
  CustomActionId: string | undefined;

  /**
   * <p>The name of the custom action.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The status of the custom action.</p>
   * @public
   */
  Status?: WidgetStatus | undefined;

  /**
   * <p>The trigger of the <code>VisualCustomAction</code>.</p>
   *          <p>Valid values are defined as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CLICK</code>: Initiates a custom action by a left pointer click on a data point.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MENU</code>: Initiates a custom action by right pointer click from the menu.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Trigger: ImageCustomActionTrigger | undefined;

  /**
   * <p>A list of <code>ImageCustomActionOperations</code>.</p>
   *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
   * @public
   */
  ActionOperations: ImageCustomActionOperation[] | undefined;
}

/**
 * <p>The menu options for the interactions of an image.</p>
 * @public
 */
export interface ImageMenuOption {
  /**
   * <p>The availability status of the image menu. If the value of this property is set to <code>ENABLED</code>, dashboard readers can interact with the image menu.</p>
   * @public
   */
  AvailabilityStatus?: DashboardBehavior | undefined;
}

/**
 * <p>The general image interactions setup for image publish options.</p>
 * @public
 */
export interface ImageInteractionOptions {
  /**
   * <p>The menu options for the image.</p>
   * @public
   */
  ImageMenuOption?: ImageMenuOption | undefined;
}

/**
 * @public
 * @enum
 */
export const SheetImageScalingType = {
  SCALE_NONE: "SCALE_NONE",
  SCALE_TO_CONTAINER: "SCALE_TO_CONTAINER",
  SCALE_TO_HEIGHT: "SCALE_TO_HEIGHT",
  SCALE_TO_WIDTH: "SCALE_TO_WIDTH",
} as const;

/**
 * @public
 */
export type SheetImageScalingType = (typeof SheetImageScalingType)[keyof typeof SheetImageScalingType];

/**
 * <p>Determines how the image is scaled</p>
 * @public
 */
export interface SheetImageScalingConfiguration {
  /**
   * <p>The scaling option to use when fitting the image inside the container.</p>
   *          <p>Valid values are defined as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SCALE_TO_WIDTH</code>: The image takes up the entire width of the container. The image aspect ratio is preserved.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SCALE_TO_HEIGHT</code>: The image takes up the entire height of the container. The image aspect ratio is preserved.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SCALE_TO_CONTAINER</code>: The image takes up the entire width and height of the container. The image aspect ratio is not preserved.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SCALE_NONE</code>: The image is displayed in its original size and is not scaled to the container.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ScalingType?: SheetImageScalingType | undefined;
}

/**
 * <p>The source of the static file that contains the image.</p>
 * @public
 */
export interface SheetImageStaticFileSource {
  /**
   * <p>The ID of the static file that contains the image.</p>
   * @public
   */
  StaticFileId: string | undefined;
}

/**
 * <p>The source of the image.</p>
 * @public
 */
export interface SheetImageSource {
  /**
   * <p>The source of the static file that contains the image.</p>
   * @public
   */
  SheetImageStaticFileSource?: SheetImageStaticFileSource | undefined;
}

/**
 * <p>The text that appears in the sheet image tooltip.</p>
 * @public
 */
export interface SheetImageTooltipText {
  /**
   * <p>The plain text format.</p>
   * @public
   */
  PlainText?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Visibility = {
  HIDDEN: "HIDDEN",
  VISIBLE: "VISIBLE",
} as const;

/**
 * @public
 */
export type Visibility = (typeof Visibility)[keyof typeof Visibility];

/**
 * <p>The tooltip configuration for a sheet image.</p>
 * @public
 */
export interface SheetImageTooltipConfiguration {
  /**
   * <p>The text that appears in the tooltip.</p>
   * @public
   */
  TooltipText?: SheetImageTooltipText | undefined;

  /**
   * <p>The visibility of the tooltip.</p>
   * @public
   */
  Visibility?: Visibility | undefined;
}

/**
 * <p>An image that is located on a sheet.</p>
 * @public
 */
export interface SheetImage {
  /**
   * <p>The ID of the sheet image.</p>
   * @public
   */
  SheetImageId: string | undefined;

  /**
   * <p>The source of the image.</p>
   * @public
   */
  Source: SheetImageSource | undefined;

  /**
   * <p>Determines how the image is scaled.</p>
   * @public
   */
  Scaling?: SheetImageScalingConfiguration | undefined;

  /**
   * <p>The tooltip to be shown when hovering over the image.</p>
   * @public
   */
  Tooltip?: SheetImageTooltipConfiguration | undefined;

  /**
   * <p>The alt text for the image.</p>
   * @public
   */
  ImageContentAltText?: string | undefined;

  /**
   * <p>The general image interactions setup for an image.</p>
   * @public
   */
  Interactions?: ImageInteractionOptions | undefined;

  /**
   * <p>A list of custom actions that are configured for an image.</p>
   * @public
   */
  Actions?: ImageCustomAction[] | undefined;
}

/**
 * <p>A <i>sheet</i>, which is an object that contains a set of visuals that
 *             are viewed together on one page in Amazon QuickSight. Every analysis and dashboard
 *             contains at least one sheet. Each sheet contains at least one visualization widget, for
 *             example a chart, pivot table, or narrative insight. Sheets can be associated with other
 *             components, such as controls, filters, and so on.</p>
 * @public
 */
export interface Sheet {
  /**
   * <p>The unique identifier associated with a sheet.</p>
   * @public
   */
  SheetId?: string | undefined;

  /**
   * <p>The name of a sheet. This name is displayed on the sheet's tab in the Amazon QuickSight
   *             console.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A list of images on a sheet.</p>
   * @public
   */
  Images?: SheetImage[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ResourceStatus = {
  CREATION_FAILED: "CREATION_FAILED",
  CREATION_IN_PROGRESS: "CREATION_IN_PROGRESS",
  CREATION_SUCCESSFUL: "CREATION_SUCCESSFUL",
  DELETED: "DELETED",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
  UPDATE_SUCCESSFUL: "UPDATE_SUCCESSFUL",
} as const;

/**
 * @public
 */
export type ResourceStatus = (typeof ResourceStatus)[keyof typeof ResourceStatus];

/**
 * <p>Metadata structure for an analysis in Amazon QuickSight</p>
 * @public
 */
export interface Analysis {
  /**
   * <p>The ID of the analysis.</p>
   * @public
   */
  AnalysisId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the analysis.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The descriptive name of the analysis.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Status associated with the analysis.</p>
   * @public
   */
  Status?: ResourceStatus | undefined;

  /**
   * <p>Errors associated with the analysis.</p>
   * @public
   */
  Errors?: AnalysisError[] | undefined;

  /**
   * <p>The ARNs of the datasets of the analysis.</p>
   * @public
   */
  DataSetArns?: string[] | undefined;

  /**
   * <p>The ARN of the theme of the analysis.</p>
   * @public
   */
  ThemeArn?: string | undefined;

  /**
   * <p>The time that the analysis was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The time that the analysis was last updated.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>A list of the associated sheets with the unique identifier and name of each sheet.</p>
   * @public
   */
  Sheets?: Sheet[] | undefined;
}

/**
 * <p>The options that determine the sizing of the canvas used in a free-form layout.</p>
 * @public
 */
export interface FreeFormLayoutScreenCanvasSizeOptions {
  /**
   * <p>The width that the view port will be optimized for when the layout renders.</p>
   * @public
   */
  OptimizedViewPortWidth: string | undefined;
}

/**
 * <p>Configuration options for the canvas of a free-form layout.</p>
 * @public
 */
export interface FreeFormLayoutCanvasSizeOptions {
  /**
   * <p>The options that determine the sizing of the canvas used in a free-form layout.</p>
   * @public
   */
  ScreenCanvasSizeOptions?: FreeFormLayoutScreenCanvasSizeOptions | undefined;
}

/**
 * <p>The options that determine the default settings of a free-form layout configuration.</p>
 * @public
 */
export interface DefaultFreeFormLayoutConfiguration {
  /**
   * <p>Determines the screen canvas size options for a free-form layout.</p>
   * @public
   */
  CanvasSizeOptions: FreeFormLayoutCanvasSizeOptions | undefined;
}

/**
 * @public
 * @enum
 */
export const ResizeOption = {
  FIXED: "FIXED",
  RESPONSIVE: "RESPONSIVE",
} as const;

/**
 * @public
 */
export type ResizeOption = (typeof ResizeOption)[keyof typeof ResizeOption];

/**
 * <p>The options that determine the sizing of the canvas used in a grid layout.</p>
 * @public
 */
export interface GridLayoutScreenCanvasSizeOptions {
  /**
   * <p>This value determines the layout behavior when the viewport is resized.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>FIXED</code>: A fixed width will be used when optimizing the layout. In
   *                     the Amazon QuickSight console, this option is called <code>Classic</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESPONSIVE</code>: The width of the canvas will be responsive and
   *                     optimized to the view port. In the Amazon QuickSight console, this option is called <code>Tiled</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ResizeOption: ResizeOption | undefined;

  /**
   * <p>The width that the view port will be optimized for when the layout renders.</p>
   * @public
   */
  OptimizedViewPortWidth?: string | undefined;
}

/**
 * <p>Configuration options for the canvas of a grid layout.</p>
 * @public
 */
export interface GridLayoutCanvasSizeOptions {
  /**
   * <p>The options that determine the sizing of the canvas used in a grid layout.</p>
   * @public
   */
  ScreenCanvasSizeOptions?: GridLayoutScreenCanvasSizeOptions | undefined;
}

/**
 * <p>The options that determine the default settings for a grid layout configuration.</p>
 * @public
 */
export interface DefaultGridLayoutConfiguration {
  /**
   * <p>Determines the screen canvas size options for a grid layout.</p>
   * @public
   */
  CanvasSizeOptions: GridLayoutCanvasSizeOptions | undefined;
}

/**
 * <p>The options that determine the default settings for interactive layout configuration.</p>
 * @public
 */
export interface DefaultInteractiveLayoutConfiguration {
  /**
   * <p>The options that determine the default settings for a grid layout configuration.</p>
   * @public
   */
  Grid?: DefaultGridLayoutConfiguration | undefined;

  /**
   * <p>The options that determine the default settings of a free-form layout configuration.</p>
   * @public
   */
  FreeForm?: DefaultFreeFormLayoutConfiguration | undefined;
}

/**
 * <p>The configuration of spacing (often a margin or padding).</p>
 * @public
 */
export interface Spacing {
  /**
   * <p>Define the top spacing.</p>
   * @public
   */
  Top?: string | undefined;

  /**
   * <p>Define the bottom spacing.</p>
   * @public
   */
  Bottom?: string | undefined;

  /**
   * <p>Define the left spacing.</p>
   * @public
   */
  Left?: string | undefined;

  /**
   * <p>Define the right spacing.</p>
   * @public
   */
  Right?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PaperOrientation = {
  LANDSCAPE: "LANDSCAPE",
  PORTRAIT: "PORTRAIT",
} as const;

/**
 * @public
 */
export type PaperOrientation = (typeof PaperOrientation)[keyof typeof PaperOrientation];

/**
 * @public
 * @enum
 */
export const PaperSize = {
  A0: "A0",
  A1: "A1",
  A2: "A2",
  A3: "A3",
  A4: "A4",
  A5: "A5",
  JIS_B4: "JIS_B4",
  JIS_B5: "JIS_B5",
  US_LEGAL: "US_LEGAL",
  US_LETTER: "US_LETTER",
  US_TABLOID_LEDGER: "US_TABLOID_LEDGER",
} as const;

/**
 * @public
 */
export type PaperSize = (typeof PaperSize)[keyof typeof PaperSize];

/**
 * <p>The options for a paper canvas of a section-based layout.</p>
 * @public
 */
export interface SectionBasedLayoutPaperCanvasSizeOptions {
  /**
   * <p>The paper size that is used to define canvas dimensions.</p>
   * @public
   */
  PaperSize?: PaperSize | undefined;

  /**
   * <p>The paper orientation that
   *             is used to define canvas dimensions. Choose one of the following
   *             options:</p>
   *          <ul>
   *             <li>
   *                <p>PORTRAIT</p>
   *             </li>
   *             <li>
   *                <p>LANDSCAPE</p>
   *             </li>
   *          </ul>
   * @public
   */
  PaperOrientation?: PaperOrientation | undefined;

  /**
   * <p>Defines the spacing between the canvas content and the top, bottom, left, and right edges.</p>
   * @public
   */
  PaperMargin?: Spacing | undefined;
}

/**
 * <p>The options for the canvas of a section-based layout.</p>
 * @public
 */
export interface SectionBasedLayoutCanvasSizeOptions {
  /**
   * <p>The options for a paper canvas of a section-based layout.</p>
   * @public
   */
  PaperCanvasSizeOptions?: SectionBasedLayoutPaperCanvasSizeOptions | undefined;
}

/**
 * <p>The options that determine the default settings for a section-based layout configuration.</p>
 * @public
 */
export interface DefaultSectionBasedLayoutConfiguration {
  /**
   * <p>Determines the screen canvas size options for a section-based layout.</p>
   * @public
   */
  CanvasSizeOptions: SectionBasedLayoutCanvasSizeOptions | undefined;
}

/**
 * <p>The options that determine the default settings for a paginated layout configuration.</p>
 * @public
 */
export interface DefaultPaginatedLayoutConfiguration {
  /**
   * <p>The options that determine the default settings for a section-based layout configuration.</p>
   * @public
   */
  SectionBased?: DefaultSectionBasedLayoutConfiguration | undefined;
}

/**
 * @public
 * @enum
 */
export const SheetContentType = {
  INTERACTIVE: "INTERACTIVE",
  PAGINATED: "PAGINATED",
} as const;

/**
 * @public
 */
export type SheetContentType = (typeof SheetContentType)[keyof typeof SheetContentType];

/**
 * <p>The configuration for default new sheet settings.</p>
 * @public
 */
export interface DefaultNewSheetConfiguration {
  /**
   * <p>The options that determine the default settings for interactive layout configuration.</p>
   * @public
   */
  InteractiveLayoutConfiguration?: DefaultInteractiveLayoutConfiguration | undefined;

  /**
   * <p>The options that determine the default settings for a paginated layout configuration.</p>
   * @public
   */
  PaginatedLayoutConfiguration?: DefaultPaginatedLayoutConfiguration | undefined;

  /**
   * <p>The option that determines the sheet content type.</p>
   * @public
   */
  SheetContentType?: SheetContentType | undefined;
}

/**
 * <p>The configuration for default analysis settings.</p>
 * @public
 */
export interface AnalysisDefaults {
  /**
   * <p>The configuration for default new sheet settings.</p>
   * @public
   */
  DefaultNewSheetConfiguration: DefaultNewSheetConfiguration | undefined;
}

/**
 * <p>The calculated field of an analysis.</p>
 * @public
 */
export interface CalculatedField {
  /**
   * <p>The data set that is used in this calculated field.</p>
   * @public
   */
  DataSetIdentifier: string | undefined;

  /**
   * <p>The name of the calculated field.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The expression of the calculated field.</p>
   * @public
   */
  Expression: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SpecialValue = {
  EMPTY: "EMPTY",
  NULL: "NULL",
  OTHER: "OTHER",
} as const;

/**
 * @public
 */
export type SpecialValue = (typeof SpecialValue)[keyof typeof SpecialValue];

/**
 * <p>Determines the color that's applied to a particular data value in a column.</p>
 * @public
 */
export interface CustomColor {
  /**
   * <p>The data value that the color is applied to.</p>
   * @public
   */
  FieldValue?: string | undefined;

  /**
   * <p>The color that is applied to the data value.</p>
   * @public
   */
  Color: string | undefined;

  /**
   * <p>The value of a special data value.</p>
   * @public
   */
  SpecialValue?: SpecialValue | undefined;
}

/**
 * <p>The color configurations for a column.</p>
 * @public
 */
export interface ColorsConfiguration {
  /**
   * <p>A list of up to 50 custom colors.</p>
   * @public
   */
  CustomColors?: CustomColor[] | undefined;
}

/**
 * <p>The options that determine the null value format configuration.</p>
 * @public
 */
export interface NullValueFormatConfiguration {
  /**
   * <p>Determines the null string of null values.</p>
   * @public
   */
  NullString: string | undefined;
}

/**
 * <p>The option that determines the decimal places configuration.</p>
 * @public
 */
export interface DecimalPlacesConfiguration {
  /**
   * <p>The values of the decimal places.</p>
   * @public
   */
  DecimalPlaces: number | undefined;
}

/**
 * @public
 * @enum
 */
export const NegativeValueDisplayMode = {
  NEGATIVE: "NEGATIVE",
  POSITIVE: "POSITIVE",
} as const;

/**
 * @public
 */
export type NegativeValueDisplayMode = (typeof NegativeValueDisplayMode)[keyof typeof NegativeValueDisplayMode];

/**
 * <p>The options that determine the negative value configuration.</p>
 * @public
 */
export interface NegativeValueConfiguration {
  /**
   * <p>Determines the display mode of the negative value configuration.</p>
   * @public
   */
  DisplayMode: NegativeValueDisplayMode | undefined;
}

/**
 * @public
 * @enum
 */
export const NumberScale = {
  AUTO: "AUTO",
  BILLIONS: "BILLIONS",
  CRORES: "CRORES",
  LAKHS: "LAKHS",
  MILLIONS: "MILLIONS",
  NONE: "NONE",
  THOUSANDS: "THOUSANDS",
  TRILLIONS: "TRILLIONS",
} as const;

/**
 * @public
 */
export type NumberScale = (typeof NumberScale)[keyof typeof NumberScale];

/**
 * @public
 * @enum
 */
export const NumericSeparatorSymbol = {
  COMMA: "COMMA",
  DOT: "DOT",
  SPACE: "SPACE",
} as const;

/**
 * @public
 */
export type NumericSeparatorSymbol = (typeof NumericSeparatorSymbol)[keyof typeof NumericSeparatorSymbol];

/**
 * @public
 * @enum
 */
export const DigitGroupingStyle = {
  DEFAULT: "DEFAULT",
  LAKHS: "LAKHS",
} as const;

/**
 * @public
 */
export type DigitGroupingStyle = (typeof DigitGroupingStyle)[keyof typeof DigitGroupingStyle];

/**
 * <p>The options that determine the thousands separator configuration.</p>
 * @public
 */
export interface ThousandSeparatorOptions {
  /**
   * <p>Determines the thousands separator symbol.</p>
   * @public
   */
  Symbol?: NumericSeparatorSymbol | undefined;

  /**
   * <p>Determines the visibility of the thousands separator.</p>
   * @public
   */
  Visibility?: Visibility | undefined;

  /**
   * <p>Determines the way numbers are styled to accommodate different readability standards. The <code>DEFAULT</code> value uses the standard international grouping system and groups numbers by the thousands. The <code>LAKHS</code> value uses the Indian numbering system and groups numbers by lakhs and crores.</p>
   * @public
   */
  GroupingStyle?: DigitGroupingStyle | undefined;
}

/**
 * <p>The options that determine the numeric separator configuration.</p>
 * @public
 */
export interface NumericSeparatorConfiguration {
  /**
   * <p>Determines the decimal separator.</p>
   * @public
   */
  DecimalSeparator?: NumericSeparatorSymbol | undefined;

  /**
   * <p>The options that determine the thousands separator configuration.</p>
   * @public
   */
  ThousandsSeparator?: ThousandSeparatorOptions | undefined;
}

/**
 * <p>The options that determine the currency display format configuration.</p>
 * @public
 */
export interface CurrencyDisplayFormatConfiguration {
  /**
   * <p>Determines the prefix value of the currency format.</p>
   * @public
   */
  Prefix?: string | undefined;

  /**
   * <p>Determines the suffix value of the currency format.</p>
   * @public
   */
  Suffix?: string | undefined;

  /**
   * <p>The options that determine the numeric separator configuration.</p>
   * @public
   */
  SeparatorConfiguration?: NumericSeparatorConfiguration | undefined;

  /**
   * <p>Determines the symbol for the currency format.</p>
   * @public
   */
  Symbol?: string | undefined;

  /**
   * <p>The option that determines the decimal places configuration.</p>
   * @public
   */
  DecimalPlacesConfiguration?: DecimalPlacesConfiguration | undefined;

  /**
   * <p>Determines the number scale value for the currency format.</p>
   * @public
   */
  NumberScale?: NumberScale | undefined;

  /**
   * <p>The options that determine the negative value configuration.</p>
   * @public
   */
  NegativeValueConfiguration?: NegativeValueConfiguration | undefined;

  /**
   * <p>The options that determine the null value format configuration.</p>
   * @public
   */
  NullValueFormatConfiguration?: NullValueFormatConfiguration | undefined;
}

/**
 * <p>The options that determine the number display format configuration.</p>
 * @public
 */
export interface NumberDisplayFormatConfiguration {
  /**
   * <p>Determines the prefix value of the number format.</p>
   * @public
   */
  Prefix?: string | undefined;

  /**
   * <p>Determines the suffix value of the number format.</p>
   * @public
   */
  Suffix?: string | undefined;

  /**
   * <p>The options that determine the numeric separator configuration.</p>
   * @public
   */
  SeparatorConfiguration?: NumericSeparatorConfiguration | undefined;

  /**
   * <p>The option that determines the decimal places configuration.</p>
   * @public
   */
  DecimalPlacesConfiguration?: DecimalPlacesConfiguration | undefined;

  /**
   * <p>Determines the number scale value of the number format.</p>
   * @public
   */
  NumberScale?: NumberScale | undefined;

  /**
   * <p>The options that determine the negative value configuration.</p>
   * @public
   */
  NegativeValueConfiguration?: NegativeValueConfiguration | undefined;

  /**
   * <p>The options that determine the null value format configuration.</p>
   * @public
   */
  NullValueFormatConfiguration?: NullValueFormatConfiguration | undefined;
}

/**
 * <p>The options that determine the percentage display format configuration.</p>
 * @public
 */
export interface PercentageDisplayFormatConfiguration {
  /**
   * <p>Determines the prefix value of the percentage format.</p>
   * @public
   */
  Prefix?: string | undefined;

  /**
   * <p>Determines the suffix value of the percentage format.</p>
   * @public
   */
  Suffix?: string | undefined;

  /**
   * <p>The options that determine the numeric separator configuration.</p>
   * @public
   */
  SeparatorConfiguration?: NumericSeparatorConfiguration | undefined;

  /**
   * <p>The option that determines the decimal places configuration.</p>
   * @public
   */
  DecimalPlacesConfiguration?: DecimalPlacesConfiguration | undefined;

  /**
   * <p>The options that determine the negative value configuration.</p>
   * @public
   */
  NegativeValueConfiguration?: NegativeValueConfiguration | undefined;

  /**
   * <p>The options that determine the null value format configuration.</p>
   * @public
   */
  NullValueFormatConfiguration?: NullValueFormatConfiguration | undefined;
}

/**
 * <p>The options that determine the numeric format configuration.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 * @public
 */
export interface NumericFormatConfiguration {
  /**
   * <p>The options that determine the number display format configuration.</p>
   * @public
   */
  NumberDisplayFormatConfiguration?: NumberDisplayFormatConfiguration | undefined;

  /**
   * <p>The options that determine the currency display format configuration.</p>
   * @public
   */
  CurrencyDisplayFormatConfiguration?: CurrencyDisplayFormatConfiguration | undefined;

  /**
   * <p>The options that determine the percentage display format configuration.</p>
   * @public
   */
  PercentageDisplayFormatConfiguration?: PercentageDisplayFormatConfiguration | undefined;
}

/**
 * <p>Formatting configuration for <code>DateTime</code> fields.</p>
 * @public
 */
export interface DateTimeFormatConfiguration {
  /**
   * <p>Determines the <code>DateTime</code> format.</p>
   * @public
   */
  DateTimeFormat?: string | undefined;

  /**
   * <p>The options that determine the null value format configuration.</p>
   * @public
   */
  NullValueFormatConfiguration?: NullValueFormatConfiguration | undefined;

  /**
   * <p>The formatting configuration for numeric <code>DateTime</code> fields.</p>
   * @public
   */
  NumericFormatConfiguration?: NumericFormatConfiguration | undefined;
}

/**
 * <p>Formatting configuration for number fields.</p>
 * @public
 */
export interface NumberFormatConfiguration {
  /**
   * <p>The options that determine the numeric format configuration.</p>
   * @public
   */
  FormatConfiguration?: NumericFormatConfiguration | undefined;
}

/**
 * <p>Formatting configuration for string fields.</p>
 * @public
 */
export interface StringFormatConfiguration {
  /**
   * <p>The options that determine the null value format configuration.</p>
   * @public
   */
  NullValueFormatConfiguration?: NullValueFormatConfiguration | undefined;

  /**
   * <p>The formatting configuration for numeric strings.</p>
   * @public
   */
  NumericFormatConfiguration?: NumericFormatConfiguration | undefined;
}

/**
 * <p>The formatting configuration for all types of field.</p>
 * @public
 */
export interface FormatConfiguration {
  /**
   * <p>Formatting configuration for string fields.</p>
   * @public
   */
  StringFormatConfiguration?: StringFormatConfiguration | undefined;

  /**
   * <p>Formatting configuration for number fields.</p>
   * @public
   */
  NumberFormatConfiguration?: NumberFormatConfiguration | undefined;

  /**
   * <p>Formatting configuration for <code>DateTime</code> fields.</p>
   * @public
   */
  DateTimeFormatConfiguration?: DateTimeFormatConfiguration | undefined;
}

/**
 * @public
 * @enum
 */
export const ColumnRole = {
  DIMENSION: "DIMENSION",
  MEASURE: "MEASURE",
} as const;

/**
 * @public
 */
export type ColumnRole = (typeof ColumnRole)[keyof typeof ColumnRole];

/**
 * <p>The general configuration of a column.</p>
 * @public
 */
export interface ColumnConfiguration {
  /**
   * <p>The column.</p>
   * @public
   */
  Column: ColumnIdentifier | undefined;

  /**
   * <p>The format configuration of a column.</p>
   * @public
   */
  FormatConfiguration?: FormatConfiguration | undefined;

  /**
   * <p>The role of the column.</p>
   * @public
   */
  Role?: ColumnRole | undefined;

  /**
   * <p>The color configurations of the column.</p>
   * @public
   */
  ColorsConfiguration?: ColorsConfiguration | undefined;
}

/**
 * <p>A data set.</p>
 * @public
 */
export interface DataSetIdentifierDeclaration {
  /**
   * <p>The identifier of the data set, typically the data set's name.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the data set.</p>
   * @public
   */
  DataSetArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CrossDatasetTypes = {
  ALL_DATASETS: "ALL_DATASETS",
  SINGLE_DATASET: "SINGLE_DATASET",
} as const;

/**
 * @public
 */
export type CrossDatasetTypes = (typeof CrossDatasetTypes)[keyof typeof CrossDatasetTypes];

/**
 * @public
 * @enum
 */
export const CategoryFilterMatchOperator = {
  CONTAINS: "CONTAINS",
  DOES_NOT_CONTAIN: "DOES_NOT_CONTAIN",
  DOES_NOT_EQUAL: "DOES_NOT_EQUAL",
  ENDS_WITH: "ENDS_WITH",
  EQUALS: "EQUALS",
  STARTS_WITH: "STARTS_WITH",
} as const;

/**
 * @public
 */
export type CategoryFilterMatchOperator =
  (typeof CategoryFilterMatchOperator)[keyof typeof CategoryFilterMatchOperator];

/**
 * @public
 * @enum
 */
export const FilterNullOption = {
  ALL_VALUES: "ALL_VALUES",
  NON_NULLS_ONLY: "NON_NULLS_ONLY",
  NULLS_ONLY: "NULLS_ONLY",
} as const;

/**
 * @public
 */
export type FilterNullOption = (typeof FilterNullOption)[keyof typeof FilterNullOption];

/**
 * @public
 * @enum
 */
export const CategoryFilterSelectAllOptions = {
  FILTER_ALL_VALUES: "FILTER_ALL_VALUES",
} as const;

/**
 * @public
 */
export type CategoryFilterSelectAllOptions =
  (typeof CategoryFilterSelectAllOptions)[keyof typeof CategoryFilterSelectAllOptions];

/**
 * <p>A custom filter that filters based on a single value. This filter can be partially matched.</p>
 * @public
 */
export interface CustomFilterConfiguration {
  /**
   * <p>The match operator that is used to determine if a filter should be applied.</p>
   * @public
   */
  MatchOperator: CategoryFilterMatchOperator | undefined;

  /**
   * <p>The category value for the filter.</p>
   *          <p>This field is mutually exclusive to <code>ParameterName</code>.</p>
   * @public
   */
  CategoryValue?: string | undefined;

  /**
   * <p>Select all of the values. Null is not the assigned value of select all.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>FILTER_ALL_VALUES</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  SelectAllOptions?: CategoryFilterSelectAllOptions | undefined;

  /**
   * <p>The parameter whose value should be used for the filter value.</p>
   *          <p>This field is mutually exclusive to <code>CategoryValue</code>.</p>
   * @public
   */
  ParameterName?: string | undefined;

  /**
   * <p>This option determines how null values should be treated when filtering data.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALL_VALUES</code>: Include null values in filtered results.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NULLS_ONLY</code>: Only include null values in filtered results.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NON_NULLS_ONLY</code>: Exclude null values from filtered results.</p>
   *             </li>
   *          </ul>
   * @public
   */
  NullOption: FilterNullOption | undefined;
}

/**
 * <p>A list of custom filter values.</p>
 * @public
 */
export interface CustomFilterListConfiguration {
  /**
   * <p>The match operator that is used to determine if a filter should be applied.</p>
   * @public
   */
  MatchOperator: CategoryFilterMatchOperator | undefined;

  /**
   * <p>The list of category values for the filter.</p>
   * @public
   */
  CategoryValues?: string[] | undefined;

  /**
   * <p>Select all of the values. Null is not the assigned value of select all.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>FILTER_ALL_VALUES</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  SelectAllOptions?: CategoryFilterSelectAllOptions | undefined;

  /**
   * <p>This option determines how null values should be treated when filtering data.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALL_VALUES</code>: Include null values in filtered results.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NULLS_ONLY</code>: Only include null values in filtered results.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NON_NULLS_ONLY</code>: Exclude null values from filtered results.</p>
   *             </li>
   *          </ul>
   * @public
   */
  NullOption: FilterNullOption | undefined;
}

/**
 * <p>A list of filter configurations.</p>
 * @public
 */
export interface FilterListConfiguration {
  /**
   * <p>The match operator that is used to determine if a filter should be applied.</p>
   * @public
   */
  MatchOperator: CategoryFilterMatchOperator | undefined;

  /**
   * <p>The list of category values for the filter.</p>
   * @public
   */
  CategoryValues?: string[] | undefined;

  /**
   * <p>Select all of the values. Null is not the assigned value of select all.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>FILTER_ALL_VALUES</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  SelectAllOptions?: CategoryFilterSelectAllOptions | undefined;

  /**
   * <p>This option determines how null values should be treated when filtering data.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALL_VALUES</code>: Include null values in filtered results.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NULLS_ONLY</code>: Only include null values in filtered results.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NON_NULLS_ONLY</code>: Exclude null values from filtered results.</p>
   *             </li>
   *          </ul>
   * @public
   */
  NullOption?: FilterNullOption | undefined;
}

/**
 * <p>The configuration for a <code>CategoryFilter</code>.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 * @public
 */
export interface CategoryFilterConfiguration {
  /**
   * <p>A list of filter configurations. In the Amazon QuickSight console, this filter type is called a filter list.</p>
   * @public
   */
  FilterListConfiguration?: FilterListConfiguration | undefined;

  /**
   * <p>A list of custom filter values. In the Amazon QuickSight console, this filter type is called a custom filter list.</p>
   * @public
   */
  CustomFilterListConfiguration?: CustomFilterListConfiguration | undefined;

  /**
   * <p>A custom filter that filters based on a single value. This filter can be partially matched.</p>
   * @public
   */
  CustomFilterConfiguration?: CustomFilterConfiguration | undefined;
}

/**
 * @public
 * @enum
 */
export const CommitMode = {
  AUTO: "AUTO",
  MANUAL: "MANUAL",
} as const;

/**
 * @public
 */
export type CommitMode = (typeof CommitMode)[keyof typeof CommitMode];

/**
 * <p>A control to display info icons for filters and parameters.</p>
 * @public
 */
export interface SheetControlInfoIconLabelOptions {
  /**
   * <p>The visibility configuration of info icon label options.</p>
   * @public
   */
  Visibility?: Visibility | undefined;

  /**
   * <p> The text content of info icon.</p>
   * @public
   */
  InfoIconText?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const FontDecoration = {
  NONE: "NONE",
  UNDERLINE: "UNDERLINE",
} as const;

/**
 * @public
 */
export type FontDecoration = (typeof FontDecoration)[keyof typeof FontDecoration];

/**
 * @public
 * @enum
 */
export const RelativeFontSize = {
  EXTRA_LARGE: "EXTRA_LARGE",
  EXTRA_SMALL: "EXTRA_SMALL",
  LARGE: "LARGE",
  MEDIUM: "MEDIUM",
  SMALL: "SMALL",
} as const;

/**
 * @public
 */
export type RelativeFontSize = (typeof RelativeFontSize)[keyof typeof RelativeFontSize];

/**
 * <p>The option that determines the text display size.</p>
 * @public
 */
export interface FontSize {
  /**
   * <p>The lexical name for the text size, proportional to its surrounding context.</p>
   * @public
   */
  Relative?: RelativeFontSize | undefined;

  /**
   * <p>The font size that you want to use in px.</p>
   * @public
   */
  Absolute?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const FontStyle = {
  ITALIC: "ITALIC",
  NORMAL: "NORMAL",
} as const;

/**
 * @public
 */
export type FontStyle = (typeof FontStyle)[keyof typeof FontStyle];

/**
 * @public
 * @enum
 */
export const FontWeightName = {
  BOLD: "BOLD",
  NORMAL: "NORMAL",
} as const;

/**
 * @public
 */
export type FontWeightName = (typeof FontWeightName)[keyof typeof FontWeightName];

/**
 * <p>The option that determines the text display weight, or boldness.</p>
 * @public
 */
export interface FontWeight {
  /**
   * <p>The lexical name for the level of boldness of the text display.</p>
   * @public
   */
  Name?: FontWeightName | undefined;
}

/**
 * <p>Configures the display properties of the given text.</p>
 * @public
 */
export interface FontConfiguration {
  /**
   * <p>The option that determines the text display size.</p>
   * @public
   */
  FontSize?: FontSize | undefined;

  /**
   * <p>Determines the appearance of decorative lines on the text.</p>
   * @public
   */
  FontDecoration?: FontDecoration | undefined;

  /**
   * <p>Determines the color of the text.</p>
   * @public
   */
  FontColor?: string | undefined;

  /**
   * <p>The option that determines the text display weight, or boldness.</p>
   * @public
   */
  FontWeight?: FontWeight | undefined;

  /**
   * <p>Determines the text display face that is inherited by the given font family.</p>
   * @public
   */
  FontStyle?: FontStyle | undefined;

  /**
   * <p>The font family that you want to use.</p>
   * @public
   */
  FontFamily?: string | undefined;
}

/**
 * <p>The share label options for the labels.</p>
 * @public
 */
export interface LabelOptions {
  /**
   * <p>Determines whether or not the label is visible.</p>
   * @public
   */
  Visibility?: Visibility | undefined;

  /**
   * <p>The font configuration of the label.</p>
   * @public
   */
  FontConfiguration?: FontConfiguration | undefined;

  /**
   * <p>The text for the label.</p>
   * @public
   */
  CustomLabel?: string | undefined;
}

/**
 * <p>The display options of a control.</p>
 * @public
 */
export interface DateTimePickerControlDisplayOptions {
  /**
   * <p>The options to configure the title visibility, name, and font size.</p>
   * @public
   */
  TitleOptions?: LabelOptions | undefined;

  /**
   * <p>Customize how dates are formatted in controls.</p>
   * @public
   */
  DateTimeFormat?: string | undefined;

  /**
   * <p>The configuration of info icon label options.</p>
   * @public
   */
  InfoIconLabelOptions?: SheetControlInfoIconLabelOptions | undefined;

  /**
   * <p>The helper text visibility of the <code>DateTimePickerControlDisplayOptions</code>.</p>
   * @public
   */
  HelperTextVisibility?: Visibility | undefined;

  /**
   * <p>The date icon visibility of the <code>DateTimePickerControlDisplayOptions</code>.</p>
   * @public
   */
  DateIconVisibility?: Visibility | undefined;
}

/**
 * @public
 * @enum
 */
export const SheetControlDateTimePickerType = {
  DATE_RANGE: "DATE_RANGE",
  SINGLE_VALUED: "SINGLE_VALUED",
} as const;

/**
 * @public
 */
export type SheetControlDateTimePickerType =
  (typeof SheetControlDateTimePickerType)[keyof typeof SheetControlDateTimePickerType];

/**
 * <p>The default options that correspond to the filter control type of a <code>DateTimePicker</code>.</p>
 * @public
 */
export interface DefaultDateTimePickerControlOptions {
  /**
   * <p>The date time picker type of the <code>DefaultDateTimePickerControlOptions</code>. Choose one of the following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SINGLE_VALUED</code>: The filter condition is a fixed date.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DATE_RANGE</code>: The filter condition is a date time range.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Type?: SheetControlDateTimePickerType | undefined;

  /**
   * <p>The display options of a control.</p>
   * @public
   */
  DisplayOptions?: DateTimePickerControlDisplayOptions | undefined;

  /**
   * <p>The visibility configuration of the Apply button on a <code>DateTimePickerControl</code>.</p>
   * @public
   */
  CommitMode?: CommitMode | undefined;
}

/**
 * <p>The configuration of the <code>Select all</code> options in a list control.</p>
 * @public
 */
export interface ListControlSelectAllOptions {
  /**
   * <p>The visibility configuration of the <code>Select all</code> options in a list control.</p>
   * @public
   */
  Visibility?: Visibility | undefined;
}

/**
 * <p>The display options of a control.</p>
 * @public
 */
export interface DropDownControlDisplayOptions {
  /**
   * <p>The configuration of the <code>Select all</code> options in a
   *             dropdown control.</p>
   * @public
   */
  SelectAllOptions?: ListControlSelectAllOptions | undefined;

  /**
   * <p>The options to configure the title visibility, name, and font size.</p>
   * @public
   */
  TitleOptions?: LabelOptions | undefined;

  /**
   * <p>The configuration of info icon label options.</p>
   * @public
   */
  InfoIconLabelOptions?: SheetControlInfoIconLabelOptions | undefined;
}

/**
 * <p>A list of selectable values that are used in a control.</p>
 * @public
 */
export interface FilterSelectableValues {
  /**
   * <p>The values that are used in the <code>FilterSelectableValues</code>.</p>
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const SheetControlListType = {
  MULTI_SELECT: "MULTI_SELECT",
  SINGLE_SELECT: "SINGLE_SELECT",
} as const;

/**
 * @public
 */
export type SheetControlListType = (typeof SheetControlListType)[keyof typeof SheetControlListType];

/**
 * <p>The default options that correspond to the <code>Dropdown</code> filter control type.</p>
 * @public
 */
export interface DefaultFilterDropDownControlOptions {
  /**
   * <p>The display options of a control.</p>
   * @public
   */
  DisplayOptions?: DropDownControlDisplayOptions | undefined;

  /**
   * <p>The type of the <code>FilterDropDownControl</code>. Choose one of the following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>MULTI_SELECT</code>: The user can select multiple entries from a dropdown menu.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SINGLE_SELECT</code>: The user can select a single entry from a dropdown menu.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Type?: SheetControlListType | undefined;

  /**
   * <p>A list of selectable values that are used in a control.</p>
   * @public
   */
  SelectableValues?: FilterSelectableValues | undefined;

  /**
   * <p>The visibility configuration of the Apply button on a <code>FilterDropDownControl</code>.</p>
   * @public
   */
  CommitMode?: CommitMode | undefined;
}

/**
 * <p>The configuration of the search options in a list control.</p>
 * @public
 */
export interface ListControlSearchOptions {
  /**
   * <p>The visibility configuration of the search options in a list control.</p>
   * @public
   */
  Visibility?: Visibility | undefined;
}

/**
 * <p>The display options of a control.</p>
 * @public
 */
export interface ListControlDisplayOptions {
  /**
   * <p>The configuration of the search options in a list control.</p>
   * @public
   */
  SearchOptions?: ListControlSearchOptions | undefined;

  /**
   * <p>The configuration of the <code>Select all</code> options in a list control.</p>
   * @public
   */
  SelectAllOptions?: ListControlSelectAllOptions | undefined;

  /**
   * <p>The options to configure the title visibility, name, and font size.</p>
   * @public
   */
  TitleOptions?: LabelOptions | undefined;

  /**
   * <p>The configuration of info icon label options.</p>
   * @public
   */
  InfoIconLabelOptions?: SheetControlInfoIconLabelOptions | undefined;
}

/**
 * <p>The default options that correspond to the <code>List</code> filter control type.</p>
 * @public
 */
export interface DefaultFilterListControlOptions {
  /**
   * <p>The display options of a control.</p>
   * @public
   */
  DisplayOptions?: ListControlDisplayOptions | undefined;

  /**
   * <p>The type of the <code>DefaultFilterListControlOptions</code>. Choose one of the following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>MULTI_SELECT</code>: The user can select multiple entries from the list.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SINGLE_SELECT</code>: The user can select a single entry from the list.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Type?: SheetControlListType | undefined;

  /**
   * <p>A list of selectable values that are used in a control.</p>
   * @public
   */
  SelectableValues?: FilterSelectableValues | undefined;
}

/**
 * <p>The display options of a control.</p>
 * @public
 */
export interface RelativeDateTimeControlDisplayOptions {
  /**
   * <p>The options to configure the title visibility, name, and font size.</p>
   * @public
   */
  TitleOptions?: LabelOptions | undefined;

  /**
   * <p>Customize how dates are formatted in controls.</p>
   * @public
   */
  DateTimeFormat?: string | undefined;

  /**
   * <p>The configuration of info icon label options.</p>
   * @public
   */
  InfoIconLabelOptions?: SheetControlInfoIconLabelOptions | undefined;
}

/**
 * <p>The default options that correspond to the <code>RelativeDateTime</code> filter control type.</p>
 * @public
 */
export interface DefaultRelativeDateTimeControlOptions {
  /**
   * <p>The display options of a control.</p>
   * @public
   */
  DisplayOptions?: RelativeDateTimeControlDisplayOptions | undefined;

  /**
   * <p>The visibility configuration of the Apply button on a <code>RelativeDateTimeControl</code>.</p>
   * @public
   */
  CommitMode?: CommitMode | undefined;
}

/**
 * <p>The display options of a control.</p>
 * @public
 */
export interface SliderControlDisplayOptions {
  /**
   * <p>The options to configure the title visibility, name, and font size.</p>
   * @public
   */
  TitleOptions?: LabelOptions | undefined;

  /**
   * <p>The configuration of info icon label options.</p>
   * @public
   */
  InfoIconLabelOptions?: SheetControlInfoIconLabelOptions | undefined;
}

/**
 * @public
 * @enum
 */
export const SheetControlSliderType = {
  RANGE: "RANGE",
  SINGLE_POINT: "SINGLE_POINT",
} as const;

/**
 * @public
 */
export type SheetControlSliderType = (typeof SheetControlSliderType)[keyof typeof SheetControlSliderType];

/**
 * <p>The default options that correspond to the <code>Slider</code> filter control type.</p>
 * @public
 */
export interface DefaultSliderControlOptions {
  /**
   * <p>The display options of a control.</p>
   * @public
   */
  DisplayOptions?: SliderControlDisplayOptions | undefined;

  /**
   * <p>The type of the <code>DefaultSliderControlOptions</code>. Choose one of the following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SINGLE_POINT</code>: Filter against(equals) a single data point.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RANGE</code>: Filter data that is in a specified range.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Type?: SheetControlSliderType | undefined;

  /**
   * <p>The larger value that is displayed at the right of the slider.</p>
   * @public
   */
  MaximumValue: number | undefined;

  /**
   * <p>The smaller value that is displayed at the left of the slider.</p>
   * @public
   */
  MinimumValue: number | undefined;

  /**
   * <p>The number of increments that the slider bar is divided into.</p>
   * @public
   */
  StepSize: number | undefined;
}

/**
 * <p>The configuration of the placeholder options in a text control.</p>
 * @public
 */
export interface TextControlPlaceholderOptions {
  /**
   * <p>The visibility configuration of the placeholder options in a text control.</p>
   * @public
   */
  Visibility?: Visibility | undefined;
}

/**
 * <p>The display options of a control.</p>
 * @public
 */
export interface TextAreaControlDisplayOptions {
  /**
   * <p>The options to configure the title visibility, name, and font size.</p>
   * @public
   */
  TitleOptions?: LabelOptions | undefined;

  /**
   * <p>The configuration of the placeholder options in a text area control.</p>
   * @public
   */
  PlaceholderOptions?: TextControlPlaceholderOptions | undefined;

  /**
   * <p>The configuration of info icon label options.</p>
   * @public
   */
  InfoIconLabelOptions?: SheetControlInfoIconLabelOptions | undefined;
}

/**
 * <p>The default options that correspond to the <code>TextArea</code> filter control type.</p>
 * @public
 */
export interface DefaultTextAreaControlOptions {
  /**
   * <p>The delimiter that is used to separate the lines in text.</p>
   * @public
   */
  Delimiter?: string | undefined;

  /**
   * <p>The display options of a control.</p>
   * @public
   */
  DisplayOptions?: TextAreaControlDisplayOptions | undefined;
}

/**
 * <p>The display options of a control.</p>
 * @public
 */
export interface TextFieldControlDisplayOptions {
  /**
   * <p>The options to configure the title visibility, name, and font size.</p>
   * @public
   */
  TitleOptions?: LabelOptions | undefined;

  /**
   * <p>The configuration of the placeholder options in a text field control.</p>
   * @public
   */
  PlaceholderOptions?: TextControlPlaceholderOptions | undefined;

  /**
   * <p>The configuration of info icon label options.</p>
   * @public
   */
  InfoIconLabelOptions?: SheetControlInfoIconLabelOptions | undefined;
}

/**
 * <p>The default options that correspond to the <code>TextField</code> filter control type.</p>
 * @public
 */
export interface DefaultTextFieldControlOptions {
  /**
   * <p>The display options of a control.</p>
   * @public
   */
  DisplayOptions?: TextFieldControlDisplayOptions | undefined;
}

/**
 * <p>The option that corresponds to the control type of the filter.</p>
 * @public
 */
export interface DefaultFilterControlOptions {
  /**
   * <p>The default options that correspond to the filter control type of a <code>DateTimePicker</code>.</p>
   * @public
   */
  DefaultDateTimePickerOptions?: DefaultDateTimePickerControlOptions | undefined;

  /**
   * <p>The default options that correspond to the <code>List</code> filter control type.</p>
   * @public
   */
  DefaultListOptions?: DefaultFilterListControlOptions | undefined;

  /**
   * <p>The default options that correspond to the <code>Dropdown</code> filter control type.</p>
   * @public
   */
  DefaultDropdownOptions?: DefaultFilterDropDownControlOptions | undefined;

  /**
   * <p>The default options that correspond to the <code>TextField</code> filter control type.</p>
   * @public
   */
  DefaultTextFieldOptions?: DefaultTextFieldControlOptions | undefined;

  /**
   * <p>The default options that correspond to the <code>TextArea</code> filter control type.</p>
   * @public
   */
  DefaultTextAreaOptions?: DefaultTextAreaControlOptions | undefined;

  /**
   * <p>The default options that correspond to the <code>Slider</code> filter control type.</p>
   * @public
   */
  DefaultSliderOptions?: DefaultSliderControlOptions | undefined;

  /**
   * <p>The default options that correspond to the <code>RelativeDateTime</code> filter control type.</p>
   * @public
   */
  DefaultRelativeDateTimeOptions?: DefaultRelativeDateTimeControlOptions | undefined;
}

/**
 * <p>The default configuration for all dependent controls of the filter.</p>
 * @public
 */
export interface DefaultFilterControlConfiguration {
  /**
   * <p>The title of the <code>DefaultFilterControlConfiguration</code>. This title is shared by all controls that are tied to this filter.</p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>The control option for the <code>DefaultFilterControlConfiguration</code>.</p>
   * @public
   */
  ControlOptions: DefaultFilterControlOptions | undefined;
}

/**
 * <p>A <code>CategoryFilter</code> filters text values.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/add-a-text-filter-data-prep.html">Adding text filters</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 * @public
 */
export interface CategoryFilter {
  /**
   * <p>An identifier that uniquely identifies a filter within a dashboard, analysis, or template.</p>
   * @public
   */
  FilterId: string | undefined;

  /**
   * <p>The column that the filter is applied to.</p>
   * @public
   */
  Column: ColumnIdentifier | undefined;

  /**
   * <p>The configuration for a <code>CategoryFilter</code>.</p>
   * @public
   */
  Configuration: CategoryFilterConfiguration | undefined;

  /**
   * <p>The default configurations for the associated controls. This applies only for filters that are scoped to multiple sheets.</p>
   * @public
   */
  DefaultFilterControlConfiguration?: DefaultFilterControlConfiguration | undefined;
}

/**
 * <p>A <code>CategoryInnerFilter</code> filters text values for the <code>NestedFilter</code>.</p>
 * @public
 */
export interface CategoryInnerFilter {
  /**
   * <p>A column of a data set.</p>
   * @public
   */
  Column: ColumnIdentifier | undefined;

  /**
   * <p>The configuration for a <code>CategoryFilter</code>.</p>
   *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
   * @public
   */
  Configuration: CategoryFilterConfiguration | undefined;

  /**
   * <p>The default configuration for all dependent controls of the filter.</p>
   * @public
   */
  DefaultFilterControlConfiguration?: DefaultFilterControlConfiguration | undefined;
}

/**
 * <p>The <code>InnerFilter</code> defines the subset of data to be used with the <code>NestedFilter</code>.</p>
 * @public
 */
export interface InnerFilter {
  /**
   * <p>A <code>CategoryInnerFilter</code> filters text values for the <code>NestedFilter</code>.</p>
   * @public
   */
  CategoryInnerFilter?: CategoryInnerFilter | undefined;
}

/**
 * <p>A <code>NestedFilter</code> filters data with a subset of data that is defined by the nested inner filter.</p>
 * @public
 */
export interface NestedFilter {
  /**
   * <p>An identifier that uniquely identifies a filter within a dashboard, analysis, or template.</p>
   * @public
   */
  FilterId: string | undefined;

  /**
   * <p>The column that the filter is applied to.</p>
   * @public
   */
  Column: ColumnIdentifier | undefined;

  /**
   * <p>A boolean condition to include or exclude the subset that is defined by the values of the nested inner filter.</p>
   * @public
   */
  IncludeInnerSet: boolean | undefined;

  /**
   * <p>The <code>InnerFilter</code> defines the subset of data to be used with the <code>NestedFilter</code>.</p>
   * @public
   */
  InnerFilter: InnerFilter | undefined;
}

/**
 * @public
 * @enum
 */
export const NumericEqualityMatchOperator = {
  DOES_NOT_EQUAL: "DOES_NOT_EQUAL",
  EQUALS: "EQUALS",
} as const;

/**
 * @public
 */
export type NumericEqualityMatchOperator =
  (typeof NumericEqualityMatchOperator)[keyof typeof NumericEqualityMatchOperator];

/**
 * @public
 * @enum
 */
export const NumericFilterSelectAllOptions = {
  FILTER_ALL_VALUES: "FILTER_ALL_VALUES",
} as const;

/**
 * @public
 */
export type NumericFilterSelectAllOptions =
  (typeof NumericFilterSelectAllOptions)[keyof typeof NumericFilterSelectAllOptions];

/**
 * <p>A <code>NumericEqualityFilter</code> filters values that are equal to the specified value.</p>
 * @public
 */
export interface NumericEqualityFilter {
  /**
   * <p>An identifier that uniquely identifies a filter within a dashboard, analysis, or template.</p>
   * @public
   */
  FilterId: string | undefined;

  /**
   * <p>The column that the filter is applied to.</p>
   * @public
   */
  Column: ColumnIdentifier | undefined;

  /**
   * <p>The input value.</p>
   * @public
   */
  Value?: number | undefined;

  /**
   * <p>Select all of the values. Null is not the assigned value of select all.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>FILTER_ALL_VALUES</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  SelectAllOptions?: NumericFilterSelectAllOptions | undefined;

  /**
   * <p>The match operator that is used to determine if a filter should be applied.</p>
   * @public
   */
  MatchOperator: NumericEqualityMatchOperator | undefined;

  /**
   * <p>The aggregation function of the filter.</p>
   * @public
   */
  AggregationFunction?: AggregationFunction | undefined;

  /**
   * <p>The parameter whose value should be used for the filter value.</p>
   * @public
   */
  ParameterName?: string | undefined;

  /**
   * <p>This option determines how null values should be treated when filtering data.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALL_VALUES</code>: Include null values in filtered results.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NULLS_ONLY</code>: Only include null values in filtered results.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NON_NULLS_ONLY</code>: Exclude null values from filtered results.</p>
   *             </li>
   *          </ul>
   * @public
   */
  NullOption: FilterNullOption | undefined;

  /**
   * <p>The default configurations for the associated controls. This applies only for filters that are scoped to multiple sheets.</p>
   * @public
   */
  DefaultFilterControlConfiguration?: DefaultFilterControlConfiguration | undefined;
}

/**
 * <p>The value input pf the numeric range filter.</p>
 * @public
 */
export interface NumericRangeFilterValue {
  /**
   * <p>The static value of the numeric range filter.</p>
   * @public
   */
  StaticValue?: number | undefined;

  /**
   * <p>The parameter that is used in the numeric range.</p>
   * @public
   */
  Parameter?: string | undefined;
}

/**
 * <p>A <code>NumericRangeFilter</code> filters values that are within the value range.</p>
 * @public
 */
export interface NumericRangeFilter {
  /**
   * <p>An identifier that uniquely identifies a filter within a dashboard, analysis, or template.</p>
   * @public
   */
  FilterId: string | undefined;

  /**
   * <p>The column that the filter is applied to.</p>
   * @public
   */
  Column: ColumnIdentifier | undefined;

  /**
   * <p>Determines whether the minimum value in the filter value range should be included in the filtered results.</p>
   * @public
   */
  IncludeMinimum?: boolean | undefined;

  /**
   * <p>Determines whether the maximum value in the filter value range should be included in the filtered results.</p>
   * @public
   */
  IncludeMaximum?: boolean | undefined;

  /**
   * <p>The minimum value for the filter value range.</p>
   * @public
   */
  RangeMinimum?: NumericRangeFilterValue | undefined;

  /**
   * <p>The maximum value for the filter value range.</p>
   * @public
   */
  RangeMaximum?: NumericRangeFilterValue | undefined;

  /**
   * <p>Select all of the values. Null is not the assigned value of select all.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>FILTER_ALL_VALUES</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  SelectAllOptions?: NumericFilterSelectAllOptions | undefined;

  /**
   * <p>The aggregation function of the filter.</p>
   * @public
   */
  AggregationFunction?: AggregationFunction | undefined;

  /**
   * <p>This option determines how null values should be treated when filtering data.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALL_VALUES</code>: Include null values in filtered results.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NULLS_ONLY</code>: Only include null values in filtered results.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NON_NULLS_ONLY</code>: Exclude null values from filtered results.</p>
   *             </li>
   *          </ul>
   * @public
   */
  NullOption: FilterNullOption | undefined;

  /**
   * <p>The default configurations for the associated controls. This applies only for filters that are scoped to multiple sheets.</p>
   * @public
   */
  DefaultFilterControlConfiguration?: DefaultFilterControlConfiguration | undefined;
}

/**
 * @public
 * @enum
 */
export const AnchorOption = {
  NOW: "NOW",
} as const;

/**
 * @public
 */
export type AnchorOption = (typeof AnchorOption)[keyof typeof AnchorOption];

/**
 * <p>The date configuration of the filter.</p>
 * @public
 */
export interface AnchorDateConfiguration {
  /**
   * <p>The options for the date configuration. Choose one of the options below:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NOW</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  AnchorOption?: AnchorOption | undefined;

  /**
   * <p>The name of the parameter that is used for the anchor date configuration.</p>
   * @public
   */
  ParameterName?: string | undefined;
}

/**
 * <p>The exclude period of <code>TimeRangeFilter</code> or <code>RelativeDatesFilter</code>.</p>
 * @public
 */
export interface ExcludePeriodConfiguration {
  /**
   * <p>The amount or number of the exclude period.</p>
   * @public
   */
  Amount: number | undefined;

  /**
   * <p>The granularity or unit (day, month, year) of the exclude period.</p>
   * @public
   */
  Granularity: TimeGranularity | undefined;

  /**
   * <p>The status of the exclude period. Choose from the following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: WidgetStatus | undefined;
}

/**
 * @public
 * @enum
 */
export const RelativeDateType = {
  LAST: "LAST",
  NEXT: "NEXT",
  NOW: "NOW",
  PREVIOUS: "PREVIOUS",
  THIS: "THIS",
} as const;

/**
 * @public
 */
export type RelativeDateType = (typeof RelativeDateType)[keyof typeof RelativeDateType];

/**
 * <p>A <code>RelativeDatesFilter</code> filters relative dates values.</p>
 * @public
 */
export interface RelativeDatesFilter {
  /**
   * <p>An identifier that uniquely identifies a filter within a dashboard, analysis, or template.</p>
   * @public
   */
  FilterId: string | undefined;

  /**
   * <p>The column that the filter is applied to.</p>
   * @public
   */
  Column: ColumnIdentifier | undefined;

  /**
   * <p>The date configuration of the filter.</p>
   * @public
   */
  AnchorDateConfiguration: AnchorDateConfiguration | undefined;

  /**
   * <p>The minimum granularity (period granularity) of the relative dates filter.</p>
   * @public
   */
  MinimumGranularity?: TimeGranularity | undefined;

  /**
   * <p>The level of time precision that is used to aggregate <code>DateTime</code> values.</p>
   * @public
   */
  TimeGranularity: TimeGranularity | undefined;

  /**
   * <p>The range date type of the filter. Choose one of the options below:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PREVIOUS</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>THIS</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LAST</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOW</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NEXT</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  RelativeDateType: RelativeDateType | undefined;

  /**
   * <p>The date value of the filter.</p>
   * @public
   */
  RelativeDateValue?: number | undefined;

  /**
   * <p>The parameter whose value should be used for the filter value.</p>
   * @public
   */
  ParameterName?: string | undefined;

  /**
   * <p>This option determines how null values should be treated when filtering data.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALL_VALUES</code>: Include null values in filtered results.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NULLS_ONLY</code>: Only include null values in filtered results.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NON_NULLS_ONLY</code>: Exclude null values from filtered results.</p>
   *             </li>
   *          </ul>
   * @public
   */
  NullOption: FilterNullOption | undefined;

  /**
   * <p>The configuration for the exclude period of the filter.</p>
   * @public
   */
  ExcludePeriodConfiguration?: ExcludePeriodConfiguration | undefined;

  /**
   * <p>The default configurations for the associated controls. This applies only for filters that are scoped to multiple sheets.</p>
   * @public
   */
  DefaultFilterControlConfiguration?: DefaultFilterControlConfiguration | undefined;
}

/**
 * <p>The rolling date configuration of a date time filter.</p>
 * @public
 */
export interface RollingDateConfiguration {
  /**
   * <p>The data set that is used in the rolling date configuration.</p>
   * @public
   */
  DataSetIdentifier?: string | undefined;

  /**
   * <p>The expression of the rolling date configuration.</p>
   * @public
   */
  Expression: string | undefined;
}

/**
 * <p>A <code>TimeEqualityFilter</code> filters values that are equal to a given value.</p>
 * @public
 */
export interface TimeEqualityFilter {
  /**
   * <p>An identifier that uniquely identifies a filter within a dashboard, analysis, or template.</p>
   * @public
   */
  FilterId: string | undefined;

  /**
   * <p>The column that the filter is applied to.</p>
   * @public
   */
  Column: ColumnIdentifier | undefined;

  /**
   * <p>The value of a <code>TimeEquality</code> filter.</p>
   *          <p>This field is mutually exclusive to <code>RollingDate</code> and <code>ParameterName</code>.</p>
   * @public
   */
  Value?: Date | undefined;

  /**
   * <p>The parameter whose value should be used for the filter value.</p>
   *          <p>This field is mutually exclusive to <code>Value</code> and <code>RollingDate</code>.</p>
   * @public
   */
  ParameterName?: string | undefined;

  /**
   * <p>The level of time precision that is used to aggregate <code>DateTime</code> values.</p>
   * @public
   */
  TimeGranularity?: TimeGranularity | undefined;

  /**
   * <p>The rolling date input for the <code>TimeEquality</code> filter.</p>
   *          <p>This field is mutually exclusive to <code>Value</code> and <code>ParameterName</code>.</p>
   * @public
   */
  RollingDate?: RollingDateConfiguration | undefined;

  /**
   * <p>The default configurations for the associated controls. This applies only for filters that are scoped to multiple sheets.</p>
   * @public
   */
  DefaultFilterControlConfiguration?: DefaultFilterControlConfiguration | undefined;
}

/**
 * <p>The value of a time range filter.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 * @public
 */
export interface TimeRangeFilterValue {
  /**
   * <p>The static input value.</p>
   * @public
   */
  StaticValue?: Date | undefined;

  /**
   * <p>The rolling date input value.</p>
   * @public
   */
  RollingDate?: RollingDateConfiguration | undefined;

  /**
   * <p>The parameter type input value.</p>
   * @public
   */
  Parameter?: string | undefined;
}

/**
 * <p>A <code>TimeRangeFilter</code> filters values that are between two specified values.</p>
 * @public
 */
export interface TimeRangeFilter {
  /**
   * <p>An identifier that uniquely identifies a filter within a dashboard, analysis, or template.</p>
   * @public
   */
  FilterId: string | undefined;

  /**
   * <p>The column that the filter is applied to.</p>
   * @public
   */
  Column: ColumnIdentifier | undefined;

  /**
   * <p>Determines whether the minimum value in the filter value range should be included in the filtered results.</p>
   * @public
   */
  IncludeMinimum?: boolean | undefined;

  /**
   * <p>Determines whether the maximum value in the filter value range should be included in the filtered results.</p>
   * @public
   */
  IncludeMaximum?: boolean | undefined;

  /**
   * <p>The minimum value for the filter value range.</p>
   * @public
   */
  RangeMinimumValue?: TimeRangeFilterValue | undefined;

  /**
   * <p>The maximum value for the filter value range.</p>
   * @public
   */
  RangeMaximumValue?: TimeRangeFilterValue | undefined;

  /**
   * <p>This option determines how null values should be treated when filtering data.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALL_VALUES</code>: Include null values in filtered results.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NULLS_ONLY</code>: Only include null values in filtered results.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NON_NULLS_ONLY</code>: Exclude null values from filtered results.</p>
   *             </li>
   *          </ul>
   * @public
   */
  NullOption: FilterNullOption | undefined;

  /**
   * <p>The exclude period of the time range filter.</p>
   * @public
   */
  ExcludePeriodConfiguration?: ExcludePeriodConfiguration | undefined;

  /**
   * <p>The level of time precision that is used to aggregate <code>DateTime</code> values.</p>
   * @public
   */
  TimeGranularity?: TimeGranularity | undefined;

  /**
   * <p>The default configurations for the associated controls. This applies only for filters that are scoped to multiple sheets.</p>
   * @public
   */
  DefaultFilterControlConfiguration?: DefaultFilterControlConfiguration | undefined;
}

/**
 * <p>A <code>TopBottomFilter</code> filters values that are at the top or the bottom.</p>
 * @public
 */
export interface TopBottomFilter {
  /**
   * <p>An identifier that uniquely identifies a filter within a dashboard, analysis, or template.</p>
   * @public
   */
  FilterId: string | undefined;

  /**
   * <p>The column that the filter is applied to.</p>
   * @public
   */
  Column: ColumnIdentifier | undefined;

  /**
   * <p>The number of items to include in the top bottom filter results.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>The aggregation and sort configuration of the top bottom filter.</p>
   * @public
   */
  AggregationSortConfigurations: AggregationSortConfiguration[] | undefined;

  /**
   * <p>The level of time precision that is used to aggregate <code>DateTime</code> values.</p>
   * @public
   */
  TimeGranularity?: TimeGranularity | undefined;

  /**
   * <p>The parameter whose value should be used for the filter value.</p>
   * @public
   */
  ParameterName?: string | undefined;

  /**
   * <p>The default configurations for the associated controls. This applies only for filters that are scoped to multiple sheets.</p>
   * @public
   */
  DefaultFilterControlConfiguration?: DefaultFilterControlConfiguration | undefined;
}

/**
 * <p>With a <code>Filter</code>, you can remove portions of data from a particular visual or view.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 * @public
 */
export interface Filter {
  /**
   * <p>A <code>CategoryFilter</code> filters text values.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/add-a-text-filter-data-prep.html">Adding text filters</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   * @public
   */
  CategoryFilter?: CategoryFilter | undefined;

  /**
   * <p>A <code>NumericRangeFilter</code> filters numeric values that are either inside or outside a given numeric range.</p>
   * @public
   */
  NumericRangeFilter?: NumericRangeFilter | undefined;

  /**
   * <p>A <code>NumericEqualityFilter</code> filters numeric values that equal or do not equal a given numeric value.</p>
   * @public
   */
  NumericEqualityFilter?: NumericEqualityFilter | undefined;

  /**
   * <p>A <code>TimeEqualityFilter</code> filters date-time values that equal or do not equal
   *             a given date/time value.</p>
   * @public
   */
  TimeEqualityFilter?: TimeEqualityFilter | undefined;

  /**
   * <p>A <code>TimeRangeFilter</code> filters date-time values that are either inside or outside a given date/time range.</p>
   * @public
   */
  TimeRangeFilter?: TimeRangeFilter | undefined;

  /**
   * <p>A <code>RelativeDatesFilter</code> filters date values that are relative to a given date.</p>
   * @public
   */
  RelativeDatesFilter?: RelativeDatesFilter | undefined;

  /**
   * <p>A <code>TopBottomFilter</code> filters data to the top or bottom values for a given column.</p>
   * @public
   */
  TopBottomFilter?: TopBottomFilter | undefined;

  /**
   * <p>A <code>NestedFilter</code> filters data with a subset of data that is defined by the nested inner filter.</p>
   * @public
   */
  NestedFilter?: NestedFilter | undefined;
}

/**
 * @public
 * @enum
 */
export const FilterVisualScope = {
  ALL_VISUALS: "ALL_VISUALS",
  SELECTED_VISUALS: "SELECTED_VISUALS",
} as const;

/**
 * @public
 */
export type FilterVisualScope = (typeof FilterVisualScope)[keyof typeof FilterVisualScope];

/**
 * <p>The filter that is applied to the options.</p>
 * @public
 */
export interface SheetVisualScopingConfiguration {
  /**
   * <p>The selected sheet that the filter is applied to.</p>
   * @public
   */
  SheetId: string | undefined;

  /**
   * <p>The scope of the applied entities. Choose one of the following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALL_VISUALS</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SELECTED_VISUALS</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Scope: FilterVisualScope | undefined;

  /**
   * <p>The selected visuals that the filter is applied to.</p>
   * @public
   */
  VisualIds?: string[] | undefined;
}

/**
 * <p>The configuration for applying a filter to specific sheets or visuals. You can apply this filter to multiple visuals that are on one sheet or to all visuals on a sheet.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 * @public
 */
export interface SelectedSheetsFilterScopeConfiguration {
  /**
   * <p>The sheet ID and visual IDs of the sheet and visuals that the filter is applied to.</p>
   * @public
   */
  SheetVisualScopingConfigurations?: SheetVisualScopingConfiguration[] | undefined;
}

/**
 * <p>The scope configuration for a <code>FilterGroup</code>.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 * @public
 */
export interface FilterScopeConfiguration {
  /**
   * <p>The configuration for applying a filter to specific sheets.</p>
   * @public
   */
  SelectedSheets?: SelectedSheetsFilterScopeConfiguration | undefined;

  /**
   * <p>The configuration that applies a filter to all sheets. When you choose <code>AllSheets</code> as the value for a <code>FilterScopeConfiguration</code>, this filter is applied to all visuals of all sheets in an Analysis, Dashboard, or Template. The <code>AllSheetsFilterScopeConfiguration</code> is chosen.</p>
   * @public
   */
  AllSheets?: AllSheetsFilterScopeConfiguration | undefined;
}

/**
 * <p>A grouping of individual filters. Filter groups are applied to the same group of visuals.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/add-a-compound-filter.html">Adding filter conditions (group filters) with AND and OR operators</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 * @public
 */
export interface FilterGroup {
  /**
   * <p>The value that uniquely identifies a <code>FilterGroup</code> within a dashboard, template, or analysis.</p>
   * @public
   */
  FilterGroupId: string | undefined;

  /**
   * <p>The list of filters that are present in a <code>FilterGroup</code>.</p>
   * @public
   */
  Filters: Filter[] | undefined;

  /**
   * <p>The configuration that specifies what scope to apply to a <code>FilterGroup</code>.</p>
   *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
   * @public
   */
  ScopeConfiguration: FilterScopeConfiguration | undefined;

  /**
   * <p>The status of the <code>FilterGroup</code>.</p>
   * @public
   */
  Status?: WidgetStatus | undefined;

  /**
   * <p>The filter new feature which can apply filter group to all data sets. Choose one of the following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALL_DATASETS</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SINGLE_DATASET</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  CrossDataset: CrossDatasetTypes | undefined;
}

/**
 * @public
 * @enum
 */
export const VisualHighlightTrigger = {
  DATA_POINT_CLICK: "DATA_POINT_CLICK",
  DATA_POINT_HOVER: "DATA_POINT_HOVER",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type VisualHighlightTrigger = (typeof VisualHighlightTrigger)[keyof typeof VisualHighlightTrigger];

/**
 * <p>Defines what initiates a highlight operation on a visual, such as a click or hover.</p>
 * @public
 */
export interface VisualHighlightOperation {
  /**
   * <p>Specifies whether a highlight operation is initiated by a click or hover, or whether it's disabled.</p>
   * @public
   */
  Trigger: VisualHighlightTrigger | undefined;
}

/**
 * <p>A list of custom actions applied to visuals in an analysis or sheet.</p>
 * @public
 */
export interface VisualCustomActionDefaults {
  /**
   * <p>A list of highlight operations available for visuals in an analysis or sheet.</p>
   * @public
   */
  highlightOperation?: VisualHighlightOperation | undefined;
}

/**
 * @public
 * @enum
 */
export const QBusinessInsightsStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type QBusinessInsightsStatus = (typeof QBusinessInsightsStatus)[keyof typeof QBusinessInsightsStatus];

/**
 * @public
 * @enum
 */
export const DayOfTheWeek = {
  FRIDAY: "FRIDAY",
  MONDAY: "MONDAY",
  SATURDAY: "SATURDAY",
  SUNDAY: "SUNDAY",
  THURSDAY: "THURSDAY",
  TUESDAY: "TUESDAY",
  WEDNESDAY: "WEDNESDAY",
} as const;

/**
 * @public
 */
export type DayOfTheWeek = (typeof DayOfTheWeek)[keyof typeof DayOfTheWeek];

/**
 * <p>An array of analysis level configurations.</p>
 * @public
 */
export interface AssetOptions {
  /**
   * <p>Determines the timezone for the analysis.</p>
   * @public
   */
  Timezone?: string | undefined;

  /**
   * <p>Determines the week start day for an analysis.</p>
   * @public
   */
  WeekStart?: DayOfTheWeek | undefined;

  /**
   * <p>Determines whether insight summaries from Amazon Q Business are allowed in Dashboard Q&A.</p>
   * @public
   */
  QBusinessInsightsStatus?: QBusinessInsightsStatus | undefined;

  /**
   * <p>A list of dataset ARNS to exclude from Dashboard Q&A.</p>
   * @public
   */
  ExcludedDataSetArns?: string[] | undefined;

  /**
   * <p>A list of visual custom actions for the analysis.</p>
   * @public
   */
  CustomActionDefaults?: VisualCustomActionDefaults | undefined;
}

/**
 * <p>Defines different defaults to the users or groups based on mapping.</p>
 * @public
 */
export interface DynamicDefaultValue {
  /**
   * <p>The column that contains the username.</p>
   * @public
   */
  UserNameColumn?: ColumnIdentifier | undefined;

  /**
   * <p>The column that contains the group name.</p>
   * @public
   */
  GroupNameColumn?: ColumnIdentifier | undefined;

  /**
   * <p>The column that contains the default value of each user or group.</p>
   * @public
   */
  DefaultValueColumn: ColumnIdentifier | undefined;
}

/**
 * <p>The default values of the <code>DateTimeParameterDeclaration</code>.</p>
 * @public
 */
export interface DateTimeDefaultValues {
  /**
   * <p>The dynamic value of the  <code>DataTimeDefaultValues</code>. Different defaults are displayed according to users, groups, and values mapping.</p>
   * @public
   */
  DynamicValue?: DynamicDefaultValue | undefined;

  /**
   * <p>The static values of the <code>DataTimeDefaultValues</code>.</p>
   * @public
   */
  StaticValues?: Date[] | undefined;

  /**
   * <p>The rolling date of the <code>DataTimeDefaultValues</code>. The date is determined from the dataset based on input expression.</p>
   * @public
   */
  RollingDate?: RollingDateConfiguration | undefined;
}

/**
 * <p>A dataset parameter that is mapped to an analysis parameter.</p>
 * @public
 */
export interface MappedDataSetParameter {
  /**
   * <p>A unique name that identifies a dataset within the analysis or dashboard.</p>
   * @public
   */
  DataSetIdentifier: string | undefined;

  /**
   * <p>The name of the dataset parameter.</p>
   * @public
   */
  DataSetParameterName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ValueWhenUnsetOption = {
  NULL: "NULL",
  RECOMMENDED_VALUE: "RECOMMENDED_VALUE",
} as const;

/**
 * @public
 */
export type ValueWhenUnsetOption = (typeof ValueWhenUnsetOption)[keyof typeof ValueWhenUnsetOption];

/**
 * <p>The configuration that defines the default value of a <code>DateTime</code> parameter when a value has not been set.</p>
 * @public
 */
export interface DateTimeValueWhenUnsetConfiguration {
  /**
   * <p>The built-in options for default values. The value can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>RECOMMENDED</code>: The recommended value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NULL</code>: The <code>NULL</code> value.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ValueWhenUnsetOption?: ValueWhenUnsetOption | undefined;

  /**
   * <p>A custom value that's used when the value of a parameter isn't set.</p>
   * @public
   */
  CustomValue?: Date | undefined;
}

/**
 * <p>A parameter declaration for the <code>DateTime</code> data type.</p>
 * @public
 */
export interface DateTimeParameterDeclaration {
  /**
   * <p>The name of the parameter that is being declared.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The default values of a parameter. If the parameter is a single-value parameter, a maximum of one default value can be provided.</p>
   * @public
   */
  DefaultValues?: DateTimeDefaultValues | undefined;

  /**
   * <p>The level of time precision that is used to aggregate <code>DateTime</code> values.</p>
   * @public
   */
  TimeGranularity?: TimeGranularity | undefined;

  /**
   * <p>The configuration that defines the default value of a <code>DateTime</code> parameter when a value has not been set.</p>
   * @public
   */
  ValueWhenUnset?: DateTimeValueWhenUnsetConfiguration | undefined;

  /**
   * <p>A list of dataset parameters that are mapped to an analysis parameter.</p>
   * @public
   */
  MappedDataSetParameters?: MappedDataSetParameter[] | undefined;
}

/**
 * <p>The default values of the <code>DecimalParameterDeclaration</code>.</p>
 * @public
 */
export interface DecimalDefaultValues {
  /**
   * <p>The dynamic value of the <code>DecimalDefaultValues</code>. Different defaults are displayed according to users, groups, and values mapping.</p>
   * @public
   */
  DynamicValue?: DynamicDefaultValue | undefined;

  /**
   * <p>The static values of the <code>DecimalDefaultValues</code>.</p>
   * @public
   */
  StaticValues?: number[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ParameterValueType = {
  MULTI_VALUED: "MULTI_VALUED",
  SINGLE_VALUED: "SINGLE_VALUED",
} as const;

/**
 * @public
 */
export type ParameterValueType = (typeof ParameterValueType)[keyof typeof ParameterValueType];

/**
 * <p>The configuration that defines the default value of a <code>Decimal</code> parameter when a value has not been set.</p>
 * @public
 */
export interface DecimalValueWhenUnsetConfiguration {
  /**
   * <p>The built-in options for default values. The value can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>RECOMMENDED</code>: The recommended value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NULL</code>: The <code>NULL</code> value.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ValueWhenUnsetOption?: ValueWhenUnsetOption | undefined;

  /**
   * <p>A custom value that's used when the value of a parameter isn't set.</p>
   * @public
   */
  CustomValue?: number | undefined;
}

/**
 * <p>A parameter declaration for the <code>Decimal</code> data type.</p>
 * @public
 */
export interface DecimalParameterDeclaration {
  /**
   * <p>The value type determines whether the parameter is a single-value or multi-value parameter.</p>
   * @public
   */
  ParameterValueType: ParameterValueType | undefined;

  /**
   * <p>The name of the parameter that is being declared.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The default values of a parameter. If the parameter is a single-value parameter, a maximum of one default value can be provided.</p>
   * @public
   */
  DefaultValues?: DecimalDefaultValues | undefined;

  /**
   * <p>The configuration that defines the default value of a <code>Decimal</code> parameter when a value has not been set.</p>
   * @public
   */
  ValueWhenUnset?: DecimalValueWhenUnsetConfiguration | undefined;

  /**
   * <p>A list of dataset parameters that are mapped to an analysis parameter.</p>
   * @public
   */
  MappedDataSetParameters?: MappedDataSetParameter[] | undefined;
}

/**
 * <p>The default values of the <code>IntegerParameterDeclaration</code>.</p>
 * @public
 */
export interface IntegerDefaultValues {
  /**
   * <p>The dynamic value of the <code>IntegerDefaultValues</code>. Different defaults are displayed according to users, groups, and values mapping.</p>
   * @public
   */
  DynamicValue?: DynamicDefaultValue | undefined;

  /**
   * <p>The static values of the <code>IntegerDefaultValues</code>.</p>
   * @public
   */
  StaticValues?: number[] | undefined;
}

/**
 * <p>A parameter declaration for the <code>Integer</code> data type.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 * @public
 */
export interface IntegerValueWhenUnsetConfiguration {
  /**
   * <p>The built-in options for default values. The value can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>RECOMMENDED</code>: The recommended value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NULL</code>: The <code>NULL</code> value.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ValueWhenUnsetOption?: ValueWhenUnsetOption | undefined;

  /**
   * <p>A custom value that's used when the value of a parameter isn't set.</p>
   * @public
   */
  CustomValue?: number | undefined;
}

/**
 * <p>A parameter declaration for the <code>Integer</code> data type.</p>
 * @public
 */
export interface IntegerParameterDeclaration {
  /**
   * <p>The value type determines whether the parameter is a single-value or multi-value parameter.</p>
   * @public
   */
  ParameterValueType: ParameterValueType | undefined;

  /**
   * <p>The name of the parameter that is being declared.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The default values of a parameter. If the parameter is a single-value parameter, a maximum of one default value can be provided.</p>
   * @public
   */
  DefaultValues?: IntegerDefaultValues | undefined;

  /**
   * <p>A parameter declaration for the <code>Integer</code> data type.</p>
   * @public
   */
  ValueWhenUnset?: IntegerValueWhenUnsetConfiguration | undefined;

  /**
   * <p>A list of dataset parameters that are mapped to an analysis parameter.</p>
   * @public
   */
  MappedDataSetParameters?: MappedDataSetParameter[] | undefined;
}

/**
 * <p>The default values of the <code>StringParameterDeclaration</code>.</p>
 * @public
 */
export interface StringDefaultValues {
  /**
   * <p>The dynamic value of the <code>StringDefaultValues</code>. Different defaults displayed according to users, groups, and values mapping.</p>
   * @public
   */
  DynamicValue?: DynamicDefaultValue | undefined;

  /**
   * <p>The static values of the <code>DecimalDefaultValues</code>.</p>
   * @public
   */
  StaticValues?: string[] | undefined;
}

/**
 * <p>The configuration that defines the default value of a <code>String</code> parameter when a value has not been set.</p>
 * @public
 */
export interface StringValueWhenUnsetConfiguration {
  /**
   * <p>The built-in options for default values. The value can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>RECOMMENDED</code>: The recommended value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NULL</code>: The <code>NULL</code> value.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ValueWhenUnsetOption?: ValueWhenUnsetOption | undefined;

  /**
   * <p>A custom value that's used when the value of a parameter isn't set.</p>
   * @public
   */
  CustomValue?: string | undefined;
}

/**
 * <p>A parameter declaration for the <code>String</code> data type.</p>
 * @public
 */
export interface StringParameterDeclaration {
  /**
   * <p>The value type determines whether the parameter is a single-value or multi-value parameter.</p>
   * @public
   */
  ParameterValueType: ParameterValueType | undefined;

  /**
   * <p>The name of the parameter that is being declared.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The default values of a parameter. If the parameter is a single-value parameter, a maximum of one default value can be provided.</p>
   * @public
   */
  DefaultValues?: StringDefaultValues | undefined;

  /**
   * <p>The configuration that defines the default value of a <code>String</code> parameter when a value has not been set.</p>
   * @public
   */
  ValueWhenUnset?: StringValueWhenUnsetConfiguration | undefined;

  /**
   * <p>A list of dataset parameters that are mapped to an analysis parameter.</p>
   * @public
   */
  MappedDataSetParameters?: MappedDataSetParameter[] | undefined;
}

/**
 * <p>The declaration definition of a parameter.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/parameters-in-quicksight.html">Parameters in Amazon QuickSight</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 * @public
 */
export interface ParameterDeclaration {
  /**
   * <p>A parameter declaration for the <code>String</code> data type.</p>
   * @public
   */
  StringParameterDeclaration?: StringParameterDeclaration | undefined;

  /**
   * <p>A parameter declaration for the <code>Decimal</code> data type.</p>
   * @public
   */
  DecimalParameterDeclaration?: DecimalParameterDeclaration | undefined;

  /**
   * <p>A parameter declaration for the <code>Integer</code> data type.</p>
   * @public
   */
  IntegerParameterDeclaration?: IntegerParameterDeclaration | undefined;

  /**
   * <p>A parameter declaration for the <code>DateTime</code> data type.</p>
   * @public
   */
  DateTimeParameterDeclaration?: DateTimeParameterDeclaration | undefined;
}

/**
 * @public
 * @enum
 */
export const QueryExecutionMode = {
  AUTO: "AUTO",
  MANUAL: "MANUAL",
} as const;

/**
 * @public
 */
export type QueryExecutionMode = (typeof QueryExecutionMode)[keyof typeof QueryExecutionMode];

/**
 * <p>A structure that describes the query execution options.</p>
 * @public
 */
export interface QueryExecutionOptions {
  /**
   * <p>A structure that describes the query execution mode.</p>
   * @public
   */
  QueryExecutionMode?: QueryExecutionMode | undefined;
}

/**
 * <p>The source controls that are used in a <code>CascadingControlConfiguration</code>.</p>
 * @public
 */
export interface CascadingControlSource {
  /**
   * <p>The source sheet control ID of a <code>CascadingControlSource</code>.</p>
   * @public
   */
  SourceSheetControlId?: string | undefined;

  /**
   * <p>The column identifier that determines which column to look up for the source sheet control.</p>
   * @public
   */
  ColumnToMatch?: ColumnIdentifier | undefined;
}

/**
 * <p>The values that are displayed in a control can be configured to only show values that are valid based on what's selected in other controls.</p>
 * @public
 */
export interface CascadingControlConfiguration {
  /**
   * <p>A list of source controls that determine the values that are used in the current control.</p>
   * @public
   */
  SourceControls?: CascadingControlSource[] | undefined;
}

/**
 * <p>A control from a filter that is scoped across more than one sheet. This represents your filter control on a sheet</p>
 * @public
 */
export interface FilterCrossSheetControl {
  /**
   * <p>The ID of the <code>FilterCrossSheetControl</code>.</p>
   * @public
   */
  FilterControlId: string | undefined;

  /**
   * <p>The source filter ID of the <code>FilterCrossSheetControl</code>.</p>
   * @public
   */
  SourceFilterId: string | undefined;

  /**
   * <p>The values that are displayed in a control can be configured to only show values that are valid based on what's selected in other controls.</p>
   * @public
   */
  CascadingControlConfiguration?: CascadingControlConfiguration | undefined;
}

/**
 * <p>A control from a date filter that is used to specify date and time.</p>
 * @public
 */
export interface FilterDateTimePickerControl {
  /**
   * <p>The ID of the <code>FilterDateTimePickerControl</code>.</p>
   * @public
   */
  FilterControlId: string | undefined;

  /**
   * <p>The title of the <code>FilterDateTimePickerControl</code>.</p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>The source filter ID of the <code>FilterDateTimePickerControl</code>.</p>
   * @public
   */
  SourceFilterId: string | undefined;

  /**
   * <p>The display options of a control.</p>
   * @public
   */
  DisplayOptions?: DateTimePickerControlDisplayOptions | undefined;

  /**
   * <p>The type of the <code>FilterDropDownControl</code>. Choose one of the following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>MULTI_SELECT</code>: The user can select multiple entries from a dropdown menu.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SINGLE_SELECT</code>: The user can select a single entry from a dropdown menu.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Type?: SheetControlDateTimePickerType | undefined;

  /**
   * <p>The visibility configurationof the Apply button on a <code>DateTimePickerControl</code>.</p>
   * @public
   */
  CommitMode?: CommitMode | undefined;
}

/**
 * <p>A control to display a dropdown list with buttons that are used to select a single value.</p>
 * @public
 */
export interface FilterDropDownControl {
  /**
   * <p>The ID of the <code>FilterDropDownControl</code>.</p>
   * @public
   */
  FilterControlId: string | undefined;

  /**
   * <p>The title of the <code>FilterDropDownControl</code>.</p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>The source filter ID of the <code>FilterDropDownControl</code>.</p>
   * @public
   */
  SourceFilterId: string | undefined;

  /**
   * <p>The display options of the <code>FilterDropDownControl</code>.</p>
   * @public
   */
  DisplayOptions?: DropDownControlDisplayOptions | undefined;

  /**
   * <p>The type of the <code>FilterDropDownControl</code>. Choose one of the following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>MULTI_SELECT</code>: The user can select multiple entries from a dropdown menu.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SINGLE_SELECT</code>: The user can select a single entry from a dropdown menu.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Type?: SheetControlListType | undefined;

  /**
   * <p>A list of selectable values that are used in a control.</p>
   * @public
   */
  SelectableValues?: FilterSelectableValues | undefined;

  /**
   * <p>The values that are displayed in a control can be configured to only show values that are valid based on what's selected in other controls.</p>
   * @public
   */
  CascadingControlConfiguration?: CascadingControlConfiguration | undefined;

  /**
   * <p>The visibility configuration of the Apply button on a <code>FilterDropDownControl</code>.</p>
   * @public
   */
  CommitMode?: CommitMode | undefined;
}

/**
 * <p>A control to display a list of buttons or boxes. This is used to select either a single value or multiple values.</p>
 * @public
 */
export interface FilterListControl {
  /**
   * <p>The ID of the <code>FilterListControl</code>.</p>
   * @public
   */
  FilterControlId: string | undefined;

  /**
   * <p>The title of the <code>FilterListControl</code>.</p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>The source filter ID of the <code>FilterListControl</code>.</p>
   * @public
   */
  SourceFilterId: string | undefined;

  /**
   * <p>The display options of a control.</p>
   * @public
   */
  DisplayOptions?: ListControlDisplayOptions | undefined;

  /**
   * <p>The type of the <code>FilterListControl</code>. Choose one of the following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>MULTI_SELECT</code>: The user can select multiple entries from the list.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SINGLE_SELECT</code>: The user can select a single entry from the list.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Type?: SheetControlListType | undefined;

  /**
   * <p>A list of selectable values that are used in a control.</p>
   * @public
   */
  SelectableValues?: FilterSelectableValues | undefined;

  /**
   * <p>The values that are displayed in a control can be configured to only show values that are valid based on what's selected in other controls.</p>
   * @public
   */
  CascadingControlConfiguration?: CascadingControlConfiguration | undefined;
}

/**
 * <p>A control from a date filter that is used to specify the relative date.</p>
 * @public
 */
export interface FilterRelativeDateTimeControl {
  /**
   * <p>The ID of the <code>FilterTextAreaControl</code>.</p>
   * @public
   */
  FilterControlId: string | undefined;

  /**
   * <p>The title of the <code>FilterTextAreaControl</code>.</p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>The source filter ID of the <code>FilterTextAreaControl</code>.</p>
   * @public
   */
  SourceFilterId: string | undefined;

  /**
   * <p>The display options of a control.</p>
   * @public
   */
  DisplayOptions?: RelativeDateTimeControlDisplayOptions | undefined;

  /**
   * <p>The visibility configuration of the Apply button on a <code>FilterRelativeDateTimeControl</code>.</p>
   * @public
   */
  CommitMode?: CommitMode | undefined;
}

/**
 * <p>A control to display a horizontal toggle bar. This is used to change a value by sliding the toggle.</p>
 * @public
 */
export interface FilterSliderControl {
  /**
   * <p>The ID of the <code>FilterSliderControl</code>.</p>
   * @public
   */
  FilterControlId: string | undefined;

  /**
   * <p>The title of the <code>FilterSliderControl</code>.</p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>The source filter ID of the <code>FilterSliderControl</code>.</p>
   * @public
   */
  SourceFilterId: string | undefined;

  /**
   * <p>The display options of a control.</p>
   * @public
   */
  DisplayOptions?: SliderControlDisplayOptions | undefined;

  /**
   * <p>The type of the <code>FilterSliderControl</code>. Choose one of the following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SINGLE_POINT</code>: Filter against(equals) a single data point.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RANGE</code>: Filter data that is in a specified range.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Type?: SheetControlSliderType | undefined;

  /**
   * <p>The larger value that is displayed at the right of the slider.</p>
   * @public
   */
  MaximumValue: number | undefined;

  /**
   * <p>The smaller value that is displayed at the left of the slider.</p>
   * @public
   */
  MinimumValue: number | undefined;

  /**
   * <p>The number of increments that the slider bar is divided into.</p>
   * @public
   */
  StepSize: number | undefined;
}

/**
 * <p>A control to display a text box that is used to enter multiple entries.</p>
 * @public
 */
export interface FilterTextAreaControl {
  /**
   * <p>The ID of the <code>FilterTextAreaControl</code>.</p>
   * @public
   */
  FilterControlId: string | undefined;

  /**
   * <p>The title of the <code>FilterTextAreaControl</code>.</p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>The source filter ID of the <code>FilterTextAreaControl</code>.</p>
   * @public
   */
  SourceFilterId: string | undefined;

  /**
   * <p>The delimiter that is used to separate the lines in text.</p>
   * @public
   */
  Delimiter?: string | undefined;

  /**
   * <p>The display options of a control.</p>
   * @public
   */
  DisplayOptions?: TextAreaControlDisplayOptions | undefined;
}

/**
 * <p>A control to display a text box that is used to enter a single entry.</p>
 * @public
 */
export interface FilterTextFieldControl {
  /**
   * <p>The ID of the <code>FilterTextFieldControl</code>.</p>
   * @public
   */
  FilterControlId: string | undefined;

  /**
   * <p>The title of the <code>FilterTextFieldControl</code>.</p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>The source filter ID of the <code>FilterTextFieldControl</code>.</p>
   * @public
   */
  SourceFilterId: string | undefined;

  /**
   * <p>The display options of a control.</p>
   * @public
   */
  DisplayOptions?: TextFieldControlDisplayOptions | undefined;
}

/**
 * <p>The control of a filter that is used to interact with a dashboard or an analysis.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 * @public
 */
export interface FilterControl {
  /**
   * <p>A control from a date filter that is used to specify date and time.</p>
   * @public
   */
  DateTimePicker?: FilterDateTimePickerControl | undefined;

  /**
   * <p>A control to display a list of buttons or boxes. This is used to select either a single value or multiple values.</p>
   * @public
   */
  List?: FilterListControl | undefined;

  /**
   * <p>A control to display a dropdown list with buttons that are used to select a single value.</p>
   * @public
   */
  Dropdown?: FilterDropDownControl | undefined;

  /**
   * <p>A control to display a text box that is used to enter a single entry.</p>
   * @public
   */
  TextField?: FilterTextFieldControl | undefined;

  /**
   * <p>A control to display a text box that is used to enter multiple entries.</p>
   * @public
   */
  TextArea?: FilterTextAreaControl | undefined;

  /**
   * <p>A control to display a horizontal toggle bar. This is used to change a value by sliding the toggle.</p>
   * @public
   */
  Slider?: FilterSliderControl | undefined;

  /**
   * <p>A control from a date filter that is used to specify the relative date.</p>
   * @public
   */
  RelativeDateTime?: FilterRelativeDateTimeControl | undefined;

  /**
   * <p>A control from a filter that is scoped across more than one sheet. This represents your filter control on a sheet</p>
   * @public
   */
  CrossSheet?: FilterCrossSheetControl | undefined;
}

/**
 * <p>The background style configuration of a free-form layout element.</p>
 * @public
 */
export interface FreeFormLayoutElementBackgroundStyle {
  /**
   * <p>The background visibility of a free-form layout element.</p>
   * @public
   */
  Visibility?: Visibility | undefined;

  /**
   * <p>The background color of a free-form layout element.</p>
   * @public
   */
  Color?: string | undefined;
}

/**
 * <p>The background style configuration of a free-form layout element.</p>
 * @public
 */
export interface FreeFormLayoutElementBorderStyle {
  /**
   * <p>The border visibility of a free-form layout element.</p>
   * @public
   */
  Visibility?: Visibility | undefined;

  /**
   * <p>The border color of a free-form layout element.</p>
   * @public
   */
  Color?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const LayoutElementType = {
  FILTER_CONTROL: "FILTER_CONTROL",
  IMAGE: "IMAGE",
  PARAMETER_CONTROL: "PARAMETER_CONTROL",
  TEXT_BOX: "TEXT_BOX",
  VISUAL: "VISUAL",
} as const;

/**
 * @public
 */
export type LayoutElementType = (typeof LayoutElementType)[keyof typeof LayoutElementType];

/**
 * <p>The configuration of loading animation in free-form layout. </p>
 * @public
 */
export interface LoadingAnimation {
  /**
   * <p>The visibility configuration of <code>LoadingAnimation</code>.</p>
   * @public
   */
  Visibility?: Visibility | undefined;
}

/**
 * <p>The override configuration of the rendering rules of a sheet.</p>
 * @public
 */
export interface SheetElementConfigurationOverrides {
  /**
   * <p>Determines whether or not the overrides are visible. Choose one of the following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>VISIBLE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HIDDEN</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Visibility?: Visibility | undefined;
}

/**
 * <p>The rendering rules of a sheet that uses a free-form layout.</p>
 * @public
 */
export interface SheetElementRenderingRule {
  /**
   * <p>The expression of the rendering rules of a sheet.</p>
   * @public
   */
  Expression: string | undefined;

  /**
   * <p>The override configuration of the rendering rules of a sheet.</p>
   * @public
   */
  ConfigurationOverrides: SheetElementConfigurationOverrides | undefined;
}

/**
 * <p>An element within a free-form layout.</p>
 * @public
 */
export interface FreeFormLayoutElement {
  /**
   * <p>A unique identifier for an element within a free-form layout.</p>
   * @public
   */
  ElementId: string | undefined;

  /**
   * <p>The type of element.</p>
   * @public
   */
  ElementType: LayoutElementType | undefined;

  /**
   * <p>The x-axis coordinate of the element.</p>
   * @public
   */
  XAxisLocation: string | undefined;

  /**
   * <p>The y-axis coordinate of the element.</p>
   * @public
   */
  YAxisLocation: string | undefined;

  /**
   * <p>The width of an element within a free-form layout.</p>
   * @public
   */
  Width: string | undefined;

  /**
   * <p>The height of an element within a free-form layout.</p>
   * @public
   */
  Height: string | undefined;

  /**
   * <p>The visibility of an element within a free-form layout.</p>
   * @public
   */
  Visibility?: Visibility | undefined;

  /**
   * <p>The rendering rules that determine when an element should be displayed within a free-form layout.</p>
   * @public
   */
  RenderingRules?: SheetElementRenderingRule[] | undefined;

  /**
   * <p>The border style configuration of a free-form layout element.</p>
   * @public
   */
  BorderStyle?: FreeFormLayoutElementBorderStyle | undefined;

  /**
   * <p>The border style configuration of a free-form layout element. This border style is used when the element is selected.</p>
   * @public
   */
  SelectedBorderStyle?: FreeFormLayoutElementBorderStyle | undefined;

  /**
   * <p>The background style configuration of a free-form layout element.</p>
   * @public
   */
  BackgroundStyle?: FreeFormLayoutElementBackgroundStyle | undefined;

  /**
   * <p>The loading animation configuration of a free-form layout element.</p>
   * @public
   */
  LoadingAnimation?: LoadingAnimation | undefined;
}

/**
 * <p>The configuration of a free-form layout.</p>
 * @public
 */
export interface FreeFormLayoutConfiguration {
  /**
   * <p>The elements that are included in a free-form layout.</p>
   * @public
   */
  Elements: FreeFormLayoutElement[] | undefined;

  /**
   * <p>Configuration options for the canvas of a free-form layout.</p>
   * @public
   */
  CanvasSizeOptions?: FreeFormLayoutCanvasSizeOptions | undefined;
}

/**
 * <p>An element within a grid layout.</p>
 * @public
 */
export interface GridLayoutElement {
  /**
   * <p>A unique identifier for an element within a grid layout.</p>
   * @public
   */
  ElementId: string | undefined;

  /**
   * <p>The type of element.</p>
   * @public
   */
  ElementType: LayoutElementType | undefined;

  /**
   * <p>The column index for the upper left corner of an element.</p>
   * @public
   */
  ColumnIndex?: number | undefined;

  /**
   * <p>The width of a grid element expressed as a number of grid columns.</p>
   * @public
   */
  ColumnSpan: number | undefined;

  /**
   * <p>The row index for the upper left corner of an element.</p>
   * @public
   */
  RowIndex?: number | undefined;

  /**
   * <p>The height of a grid element expressed as a number of grid rows.</p>
   * @public
   */
  RowSpan: number | undefined;
}

/**
 * <p>The configuration for a grid layout. Also called a tiled layout.</p>
 *          <p>Visuals snap to a grid with standard spacing and alignment. Dashboards are displayed as designed, with options to fit to screen or view at actual size.</p>
 * @public
 */
export interface GridLayoutConfiguration {
  /**
   * <p>The elements that are included in a grid layout.</p>
   * @public
   */
  Elements: GridLayoutElement[] | undefined;

  /**
   * <p>Configuration options for the canvas of a grid layout.</p>
   * @public
   */
  CanvasSizeOptions?: GridLayoutCanvasSizeOptions | undefined;
}

/**
 * <p>The free-form layout configuration of a section.</p>
 * @public
 */
export interface FreeFormSectionLayoutConfiguration {
  /**
   * <p>The elements that are included in the free-form layout.</p>
   * @public
   */
  Elements: FreeFormLayoutElement[] | undefined;
}

/**
 * <p>The layout configuration of a section.</p>
 * @public
 */
export interface SectionLayoutConfiguration {
  /**
   * <p>The free-form layout configuration of a section.</p>
   * @public
   */
  FreeFormLayout: FreeFormSectionLayoutConfiguration | undefined;
}

/**
 * <p>The configuration of content in a body section.</p>
 * @public
 */
export interface BodySectionContent {
  /**
   * <p>The layout configuration of a body section.</p>
   * @public
   */
  Layout?: SectionLayoutConfiguration | undefined;
}

/**
 * @public
 * @enum
 */
export const SectionPageBreakStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type SectionPageBreakStatus = (typeof SectionPageBreakStatus)[keyof typeof SectionPageBreakStatus];

/**
 * <p>The configuration of a page break after a section.</p>
 * @public
 */
export interface SectionAfterPageBreak {
  /**
   * <p>The option that enables or disables a page break at the end of a section.</p>
   * @public
   */
  Status?: SectionPageBreakStatus | undefined;
}

/**
 * <p>The configuration of a page break for a section.</p>
 * @public
 */
export interface SectionPageBreakConfiguration {
  /**
   * <p>The configuration of a page break after a section.</p>
   * @public
   */
  After?: SectionAfterPageBreak | undefined;
}

/**
 * <p>The sort configuration for a column that is not used in a field well.</p>
 * @public
 */
export interface ColumnSort {
  /**
   * <p>A column of a data set.</p>
   * @public
   */
  SortBy: ColumnIdentifier | undefined;

  /**
   * <p>The sort direction.</p>
   * @public
   */
  Direction: SortDirection | undefined;

  /**
   * <p>The aggregation function that is defined in the column sort.</p>
   * @public
   */
  AggregationFunction?: AggregationFunction | undefined;
}

/**
 * <p>Describes the <b>Category</b> dataset column and constraints for the dynamic values used to repeat the contents of a section.</p>
 * @public
 */
export interface BodySectionDynamicCategoryDimensionConfiguration {
  /**
   * <p>A column of a data set.</p>
   * @public
   */
  Column: ColumnIdentifier | undefined;

  /**
   * <p>Number of values to use from the column for repetition.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>Sort criteria on the column values that you use for repetition. </p>
   * @public
   */
  SortByMetrics?: ColumnSort[] | undefined;
}

/**
 * <p>Describes the <b>Numeric</b> dataset column and constraints for the dynamic values used to repeat the  contents of a section.</p>
 * @public
 */
export interface BodySectionDynamicNumericDimensionConfiguration {
  /**
   * <p>A column of a data set.</p>
   * @public
   */
  Column: ColumnIdentifier | undefined;

  /**
   * <p>Number of values to use from the column for repetition.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>Sort criteria on the column values that you use for repetition. </p>
   * @public
   */
  SortByMetrics?: ColumnSort[] | undefined;
}

/**
 * <p>Describes the dataset column and constraints for the dynamic values used to repeat the contents of a section. The dataset column is either <b>Category</b> or <b>Numeric</b> column configuration</p>
 * @public
 */
export interface BodySectionRepeatDimensionConfiguration {
  /**
   * <p>Describes the <b>Category</b> dataset column and constraints around the dynamic values that will be used in repeating the section contents.</p>
   * @public
   */
  DynamicCategoryDimensionConfiguration?: BodySectionDynamicCategoryDimensionConfiguration | undefined;

  /**
   * <p>Describes the <b>Numeric</b> dataset column and constraints around the dynamic values used to repeat the  contents of a section.</p>
   * @public
   */
  DynamicNumericDimensionConfiguration?: BodySectionDynamicNumericDimensionConfiguration | undefined;
}

/**
 * <p>The page break configuration to apply for each repeating instance.</p>
 * @public
 */
export interface BodySectionRepeatPageBreakConfiguration {
  /**
   * <p>The configuration of a page break after a section.</p>
   * @public
   */
  After?: SectionAfterPageBreak | undefined;
}

/**
 * <p>Describes the configurations that are required to declare a section as repeating.</p>
 * @public
 */
export interface BodySectionRepeatConfiguration {
  /**
   * <p>List of <code>BodySectionRepeatDimensionConfiguration</code> values that describe the dataset column and constraints for the column used to repeat the contents of a section.</p>
   * @public
   */
  DimensionConfigurations?: BodySectionRepeatDimensionConfiguration[] | undefined;

  /**
   * <p>Page break configuration to apply for each repeating instance.</p>
   * @public
   */
  PageBreakConfiguration?: BodySectionRepeatPageBreakConfiguration | undefined;

  /**
   * <p>List of visuals to exclude from repetition in repeating sections. The visuals will render identically, and ignore the repeating configurations in all repeating instances.</p>
   * @public
   */
  NonRepeatingVisuals?: string[] | undefined;
}

/**
 * <p>The options that style a section.</p>
 * @public
 */
export interface SectionStyle {
  /**
   * <p>The height of a section.</p>
   *          <p>Heights can only be defined for header and footer sections. The default height margin is 0.5 inches. </p>
   * @public
   */
  Height?: string | undefined;

  /**
   * <p>The spacing between section content and its top, bottom, left, and right edges.</p>
   *          <p>There is no padding by default.</p>
   * @public
   */
  Padding?: Spacing | undefined;
}

/**
 * <p>The configuration of a body section.</p>
 * @public
 */
export interface BodySectionConfiguration {
  /**
   * <p>The unique identifier of a body section.</p>
   * @public
   */
  SectionId: string | undefined;

  /**
   * <p>The configuration of content in a body section.</p>
   * @public
   */
  Content: BodySectionContent | undefined;

  /**
   * <p>The style options of a body section.</p>
   * @public
   */
  Style?: SectionStyle | undefined;

  /**
   * <p>The configuration of a page break for a section.</p>
   * @public
   */
  PageBreakConfiguration?: SectionPageBreakConfiguration | undefined;

  /**
   * <p>Describes the configurations that are required to declare a section as repeating.</p>
   * @public
   */
  RepeatConfiguration?: BodySectionRepeatConfiguration | undefined;
}

/**
 * <p>The configuration of a header or footer section.</p>
 * @public
 */
export interface HeaderFooterSectionConfiguration {
  /**
   * <p>The unique identifier of the header or footer section.</p>
   * @public
   */
  SectionId: string | undefined;

  /**
   * <p>The layout configuration of the header or footer section.</p>
   * @public
   */
  Layout: SectionLayoutConfiguration | undefined;

  /**
   * <p>The style options of a header or footer section.</p>
   * @public
   */
  Style?: SectionStyle | undefined;
}

/**
 * <p>The configuration for a
 *             section-based layout.</p>
 * @public
 */
export interface SectionBasedLayoutConfiguration {
  /**
   * <p>A list of header section configurations.</p>
   * @public
   */
  HeaderSections: HeaderFooterSectionConfiguration[] | undefined;

  /**
   * <p>A list of body section configurations.</p>
   * @public
   */
  BodySections: BodySectionConfiguration[] | undefined;

  /**
   * <p>A list of footer section configurations.</p>
   * @public
   */
  FooterSections: HeaderFooterSectionConfiguration[] | undefined;

  /**
   * <p>The options for the canvas of a section-based layout.</p>
   * @public
   */
  CanvasSizeOptions: SectionBasedLayoutCanvasSizeOptions | undefined;
}

/**
 * <p>The configuration that determines what the type of layout will be used on a sheet.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 * @public
 */
export interface LayoutConfiguration {
  /**
   * <p>A type of layout that can be used on a sheet. In a grid layout, visuals snap to a grid with standard spacing and alignment. Dashboards are displayed as designed, with options to fit to screen or view at actual size. A grid layout can be configured to behave in one of two ways when the viewport is resized: <code>FIXED</code> or <code>RESPONSIVE</code>.</p>
   * @public
   */
  GridLayout?: GridLayoutConfiguration | undefined;

  /**
   * <p>A free-form is optimized for a fixed width and has more control over the exact placement of layout elements.</p>
   * @public
   */
  FreeFormLayout?: FreeFormLayoutConfiguration | undefined;

  /**
   * <p>A section based layout organizes visuals into multiple sections and has customized header, footer and page break.</p>
   * @public
   */
  SectionBasedLayout?: SectionBasedLayoutConfiguration | undefined;
}

/**
 * <p>A <code>Layout</code> defines the placement of elements within a sheet.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/types-of-layout.html">Types of layout</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 * @public
 */
export interface Layout {
  /**
   * <p>The configuration that determines what the type of layout for a sheet.</p>
   * @public
   */
  Configuration: LayoutConfiguration | undefined;
}

/**
 * <p>A control from a date parameter that specifies date and time.</p>
 * @public
 */
export interface ParameterDateTimePickerControl {
  /**
   * <p>The ID of the <code>ParameterDateTimePickerControl</code>.</p>
   * @public
   */
  ParameterControlId: string | undefined;

  /**
   * <p>The title of the <code>ParameterDateTimePickerControl</code>.</p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>The name of the <code>ParameterDateTimePickerControl</code>.</p>
   * @public
   */
  SourceParameterName: string | undefined;

  /**
   * <p>The display options of a control.</p>
   * @public
   */
  DisplayOptions?: DateTimePickerControlDisplayOptions | undefined;
}

/**
 * <p>A list of selectable values that are used in a control.</p>
 * @public
 */
export interface ParameterSelectableValues {
  /**
   * <p>The values that are used in <code>ParameterSelectableValues</code>.</p>
   * @public
   */
  Values?: string[] | undefined;

  /**
   * <p>The column identifier that fetches values from the data set.</p>
   * @public
   */
  LinkToDataSetColumn?: ColumnIdentifier | undefined;
}

/**
 * <p>A control to display a dropdown list with buttons that are used to select a single value.</p>
 * @public
 */
export interface ParameterDropDownControl {
  /**
   * <p>The ID of the <code>ParameterDropDownControl</code>.</p>
   * @public
   */
  ParameterControlId: string | undefined;

  /**
   * <p>The title of the <code>ParameterDropDownControl</code>.</p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>The source parameter name of the <code>ParameterDropDownControl</code>.</p>
   * @public
   */
  SourceParameterName: string | undefined;

  /**
   * <p>The display options of a control.</p>
   * @public
   */
  DisplayOptions?: DropDownControlDisplayOptions | undefined;

  /**
   * <p>The type parameter name of the <code>ParameterDropDownControl</code>.</p>
   * @public
   */
  Type?: SheetControlListType | undefined;

  /**
   * <p>A list of selectable values that are used in a control.</p>
   * @public
   */
  SelectableValues?: ParameterSelectableValues | undefined;

  /**
   * <p>The values that are displayed in a control can be configured to only show values that are valid based on what's selected in other controls.</p>
   * @public
   */
  CascadingControlConfiguration?: CascadingControlConfiguration | undefined;

  /**
   * <p>The visibility configuration of the Apply button on a <code>ParameterDropDownControl</code>.</p>
   * @public
   */
  CommitMode?: CommitMode | undefined;
}

/**
 * <p>A control to display a list with buttons or boxes that are used to select either a single value or multiple values.</p>
 * @public
 */
export interface ParameterListControl {
  /**
   * <p>The ID of the <code>ParameterListControl</code>.</p>
   * @public
   */
  ParameterControlId: string | undefined;

  /**
   * <p>The title of the <code>ParameterListControl</code>.</p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>The source parameter name of the <code>ParameterListControl</code>.</p>
   * @public
   */
  SourceParameterName: string | undefined;

  /**
   * <p>The display options of a control.</p>
   * @public
   */
  DisplayOptions?: ListControlDisplayOptions | undefined;

  /**
   * <p>The type of <code>ParameterListControl</code>.</p>
   * @public
   */
  Type?: SheetControlListType | undefined;

  /**
   * <p>A list of selectable values that are used in a control.</p>
   * @public
   */
  SelectableValues?: ParameterSelectableValues | undefined;

  /**
   * <p>The values that are displayed in a control can be configured to only show values that are valid based on what's selected in other controls.</p>
   * @public
   */
  CascadingControlConfiguration?: CascadingControlConfiguration | undefined;
}

/**
 * <p>A control to display a horizontal toggle bar. This is used to change a value by sliding the toggle.</p>
 * @public
 */
export interface ParameterSliderControl {
  /**
   * <p>The ID of the <code>ParameterSliderControl</code>.</p>
   * @public
   */
  ParameterControlId: string | undefined;

  /**
   * <p>The title of the <code>ParameterSliderControl</code>.</p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>The source parameter name of the <code>ParameterSliderControl</code>.</p>
   * @public
   */
  SourceParameterName: string | undefined;

  /**
   * <p>The display options of a control.</p>
   * @public
   */
  DisplayOptions?: SliderControlDisplayOptions | undefined;

  /**
   * <p>The larger value that is displayed at the right of the slider.</p>
   * @public
   */
  MaximumValue: number | undefined;

  /**
   * <p>The smaller value that is displayed at the left of the slider.</p>
   * @public
   */
  MinimumValue: number | undefined;

  /**
   * <p>The number of increments that the slider bar is divided into.</p>
   * @public
   */
  StepSize: number | undefined;
}

/**
 * <p>A control to display a text box that is used to enter multiple entries.</p>
 * @public
 */
export interface ParameterTextAreaControl {
  /**
   * <p>The ID of the <code>ParameterTextAreaControl</code>.</p>
   * @public
   */
  ParameterControlId: string | undefined;

  /**
   * <p>The title of the <code>ParameterTextAreaControl</code>.</p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>The source parameter name of the <code>ParameterTextAreaControl</code>.</p>
   * @public
   */
  SourceParameterName: string | undefined;

  /**
   * <p>The delimiter that is used to separate the lines in text.</p>
   * @public
   */
  Delimiter?: string | undefined;

  /**
   * <p>The display options of a control.</p>
   * @public
   */
  DisplayOptions?: TextAreaControlDisplayOptions | undefined;
}

/**
 * <p>A control to display a text box that is used to enter a single entry.</p>
 * @public
 */
export interface ParameterTextFieldControl {
  /**
   * <p>The ID of the <code>ParameterTextFieldControl</code>.</p>
   * @public
   */
  ParameterControlId: string | undefined;

  /**
   * <p>The title of the <code>ParameterTextFieldControl</code>.</p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>The source parameter name of the <code>ParameterTextFieldControl</code>.</p>
   * @public
   */
  SourceParameterName: string | undefined;

  /**
   * <p>The display options of a control.</p>
   * @public
   */
  DisplayOptions?: TextFieldControlDisplayOptions | undefined;
}

/**
 * <p>The control of a parameter that users can interact with in a dashboard or an analysis.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 * @public
 */
export interface ParameterControl {
  /**
   * <p>A control from a date parameter that specifies date and time.</p>
   * @public
   */
  DateTimePicker?: ParameterDateTimePickerControl | undefined;

  /**
   * <p>A control to display a list with buttons or boxes that are used to select either a single value or multiple values.</p>
   * @public
   */
  List?: ParameterListControl | undefined;

  /**
   * <p>A control to display a dropdown list with buttons that are used to select a single value.</p>
   * @public
   */
  Dropdown?: ParameterDropDownControl | undefined;

  /**
   * <p>A control to display a text box that is used to enter a single entry.</p>
   * @public
   */
  TextField?: ParameterTextFieldControl | undefined;

  /**
   * <p>A control to display a text box that is used to enter multiple entries.</p>
   * @public
   */
  TextArea?: ParameterTextAreaControl | undefined;

  /**
   * <p>A control to display a horizontal toggle bar. This is used to change a value by sliding the toggle.</p>
   * @public
   */
  Slider?: ParameterSliderControl | undefined;
}

/**
 * <p>The configuration that determines the elements and canvas size options of sheet control.</p>
 * @public
 */
export interface SheetControlLayoutConfiguration {
  /**
   * <p>The configuration that determines the elements and canvas size options of sheet control.</p>
   * @public
   */
  GridLayout?: GridLayoutConfiguration | undefined;
}

/**
 * <p>A grid layout to define the placement of sheet control.</p>
 * @public
 */
export interface SheetControlLayout {
  /**
   * <p>The configuration that determines the elements and canvas size options of sheet control.</p>
   * @public
   */
  Configuration: SheetControlLayoutConfiguration | undefined;
}

/**
 * <p>The menu options for the interactions of a textbox.</p>
 * @public
 */
export interface TextBoxMenuOption {
  /**
   * <p>The availability status of the textbox menu. If the value of this property is set to <code>ENABLED</code>, dashboard readers can interact with the textbox menu.</p>
   * @public
   */
  AvailabilityStatus?: DashboardBehavior | undefined;
}

/**
 * <p>The general textbox interactions setup for textbox publish options.</p>
 * @public
 */
export interface TextBoxInteractionOptions {
  /**
   * <p>The menu options for the textbox.</p>
   * @public
   */
  TextBoxMenuOption?: TextBoxMenuOption | undefined;
}

/**
 * <p>A text box.</p>
 * @public
 */
export interface SheetTextBox {
  /**
   * <p>The unique identifier for a text box. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have text boxes that share identifiers.</p>
   * @public
   */
  SheetTextBoxId: string | undefined;

  /**
   * <p>The content that is displayed in the text box.</p>
   * @public
   */
  Content?: string | undefined;

  /**
   * <p>The general textbox interactions setup for a textbox.</p>
   * @public
   */
  Interactions?: TextBoxInteractionOptions | undefined;
}

/**
 * @public
 * @enum
 */
export const SelectedFieldOptions = {
  ALL_FIELDS: "ALL_FIELDS",
} as const;

/**
 * @public
 */
export type SelectedFieldOptions = (typeof SelectedFieldOptions)[keyof typeof SelectedFieldOptions];

/**
 * <p>The configuration of selected fields in the<code>CustomActionFilterOperation</code>.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 * @public
 */
export interface FilterOperationSelectedFieldsConfiguration {
  /**
   * <p>Chooses the fields that are filtered in <code>CustomActionFilterOperation</code>.</p>
   * @public
   */
  SelectedFields?: string[] | undefined;

  /**
   * <p>A structure that contains the options that choose which fields are filtered in the <code>CustomActionFilterOperation</code>.</p>
   *          <p>Valid values are defined as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALL_FIELDS</code>: Applies the filter operation to all fields.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SelectedFieldOptions?: SelectedFieldOptions | undefined;

  /**
   * <p>The selected columns of a dataset.</p>
   * @public
   */
  SelectedColumns?: ColumnIdentifier[] | undefined;
}

/**
 * @public
 * @enum
 */
export const TargetVisualOptions = {
  ALL_VISUALS: "ALL_VISUALS",
} as const;

/**
 * @public
 */
export type TargetVisualOptions = (typeof TargetVisualOptions)[keyof typeof TargetVisualOptions];

/**
 * <p>The configuration of the same-sheet target visuals that you want to be filtered.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 * @public
 */
export interface SameSheetTargetVisualConfiguration {
  /**
   * <p>A list of the target visual IDs that are located in the same sheet of the analysis.</p>
   * @public
   */
  TargetVisuals?: string[] | undefined;

  /**
   * <p>The options that choose the target visual in the same sheet.</p>
   *          <p>Valid values are defined as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALL_VISUALS</code>: Applies the filter operation to all visuals in the same sheet.</p>
   *             </li>
   *          </ul>
   * @public
   */
  TargetVisualOptions?: TargetVisualOptions | undefined;
}

/**
 * <p>The configuration of target visuals that you want to be filtered.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 * @public
 */
export interface FilterOperationTargetVisualsConfiguration {
  /**
   * <p>The configuration of the same-sheet target visuals that you want to be filtered.</p>
   * @public
   */
  SameSheetTargetVisualConfiguration?: SameSheetTargetVisualConfiguration | undefined;
}

/**
 * <p>The filter operation that filters data included in a visual or in an entire sheet.</p>
 * @public
 */
export interface CustomActionFilterOperation {
  /**
   * <p>The configuration that chooses the fields to be filtered.</p>
   * @public
   */
  SelectedFieldsConfiguration: FilterOperationSelectedFieldsConfiguration | undefined;

  /**
   * <p>The configuration that chooses the target visuals to be filtered.</p>
   * @public
   */
  TargetVisualsConfiguration: FilterOperationTargetVisualsConfiguration | undefined;
}

/**
 * <p>The operation that is defined by the custom action.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 * @public
 */
export interface VisualCustomActionOperation {
  /**
   * <p>The filter operation that filters data included in a visual or in an entire sheet.</p>
   * @public
   */
  FilterOperation?: CustomActionFilterOperation | undefined;

  /**
   * <p>The navigation operation that navigates between different sheets in the same analysis.</p>
   * @public
   */
  NavigationOperation?: CustomActionNavigationOperation | undefined;

  /**
   * <p>The URL operation that opens a link to another webpage.</p>
   * @public
   */
  URLOperation?: CustomActionURLOperation | undefined;

  /**
   * <p>The set parameter operation that sets parameters in custom action.</p>
   * @public
   */
  SetParametersOperation?: CustomActionSetParametersOperation | undefined;
}

/**
 * @public
 * @enum
 */
export const VisualCustomActionTrigger = {
  DATA_POINT_CLICK: "DATA_POINT_CLICK",
  DATA_POINT_MENU: "DATA_POINT_MENU",
} as const;

/**
 * @public
 */
export type VisualCustomActionTrigger = (typeof VisualCustomActionTrigger)[keyof typeof VisualCustomActionTrigger];

/**
 * <p>A custom action defined on a visual.</p>
 * @public
 */
export interface VisualCustomAction {
  /**
   * <p>The ID of the <code>VisualCustomAction</code>.</p>
   * @public
   */
  CustomActionId: string | undefined;

  /**
   * <p>The name of the <code>VisualCustomAction</code>.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The status of the <code>VisualCustomAction</code>.</p>
   * @public
   */
  Status?: WidgetStatus | undefined;

  /**
   * <p>The trigger of the <code>VisualCustomAction</code>.</p>
   *          <p>Valid values are defined as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DATA_POINT_CLICK</code>: Initiates a custom action by a left pointer click on a data point.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DATA_POINT_MENU</code>: Initiates a custom action by right pointer click from the menu.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Trigger: VisualCustomActionTrigger | undefined;

  /**
   * <p>A list of <code>VisualCustomActionOperations</code>.</p>
   *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
   * @public
   */
  ActionOperations: VisualCustomActionOperation[] | undefined;
}

/**
 * @public
 * @enum
 */
export const BarsArrangement = {
  CLUSTERED: "CLUSTERED",
  STACKED: "STACKED",
  STACKED_PERCENT: "STACKED_PERCENT",
} as const;

/**
 * @public
 */
export type BarsArrangement = (typeof BarsArrangement)[keyof typeof BarsArrangement];

/**
 * <p>The options that determine how a date axis is displayed.</p>
 * @public
 */
export interface DateAxisOptions {
  /**
   * <p>Determines whether or not missing dates are displayed.</p>
   * @public
   */
  MissingDateVisibility?: Visibility | undefined;
}

/**
 * <p>The options that are saved for future extension.</p>
 * @public
 */
export interface AxisDisplayDataDrivenRange {}

/**
 * <p>The minimum and maximum setup for an axis display range.</p>
 * @public
 */
export interface AxisDisplayMinMaxRange {
  /**
   * <p>The minimum setup for an axis display range.</p>
   * @public
   */
  Minimum?: number | undefined;

  /**
   * <p>The maximum setup for an axis display range.</p>
   * @public
   */
  Maximum?: number | undefined;
}

/**
 * <p>The range setup of a numeric axis display range.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 * @public
 */
export interface AxisDisplayRange {
  /**
   * <p>The minimum and maximum setup of an axis display range.</p>
   * @public
   */
  MinMax?: AxisDisplayMinMaxRange | undefined;

  /**
   * <p>The data-driven setup of an axis display range.</p>
   * @public
   */
  DataDriven?: AxisDisplayDataDrivenRange | undefined;
}

/**
 * <p>The liner axis scale setup.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 * @public
 */
export interface AxisLinearScale {
  /**
   * <p>The step count setup of a linear axis.</p>
   * @public
   */
  StepCount?: number | undefined;

  /**
   * <p>The step size setup of a linear axis.</p>
   * @public
   */
  StepSize?: number | undefined;
}

/**
 * <p>The logarithmic axis scale setup.</p>
 * @public
 */
export interface AxisLogarithmicScale {
  /**
   * <p>The base setup of a logarithmic axis scale.</p>
   * @public
   */
  Base?: number | undefined;
}

/**
 * <p>The scale setup
 *             options for a numeric axis display.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 * @public
 */
export interface AxisScale {
  /**
   * <p>The linear axis scale setup.</p>
   * @public
   */
  Linear?: AxisLinearScale | undefined;

  /**
   * <p>The logarithmic axis scale setup.</p>
   * @public
   */
  Logarithmic?: AxisLogarithmicScale | undefined;
}

/**
 * <p>The options for an axis with a numeric field.</p>
 * @public
 */
export interface NumericAxisOptions {
  /**
   * <p>The scale setup of a numeric axis.</p>
   * @public
   */
  Scale?: AxisScale | undefined;

  /**
   * <p>The range setup of a numeric axis.</p>
   * @public
   */
  Range?: AxisDisplayRange | undefined;
}

/**
 * <p>The data options for an axis.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 * @public
 */
export interface AxisDataOptions {
  /**
   * <p>The options for an axis with a numeric field.</p>
   * @public
   */
  NumericAxisOptions?: NumericAxisOptions | undefined;

  /**
   * <p>The options for an axis with a date field.</p>
   * @public
   */
  DateAxisOptions?: DateAxisOptions | undefined;
}

/**
 * <p>The percent range in the visible range.</p>
 * @public
 */
export interface PercentVisibleRange {
  /**
   * <p>The lower bound of the range.</p>
   * @public
   */
  From?: number | undefined;

  /**
   * <p>The top bound of the range.</p>
   * @public
   */
  To?: number | undefined;
}

/**
 * <p>The range options for the data zoom scroll bar.</p>
 * @public
 */
export interface VisibleRangeOptions {
  /**
   * <p>The percent range in the visible range.</p>
   * @public
   */
  PercentRange?: PercentVisibleRange | undefined;
}

/**
 * <p>The visual display options for a data zoom scroll bar.</p>
 * @public
 */
export interface ScrollBarOptions {
  /**
   * <p>The visibility of the data zoom scroll bar.</p>
   * @public
   */
  Visibility?: Visibility | undefined;

  /**
   * <p>The visibility range for the data zoom scroll bar.</p>
   * @public
   */
  VisibleRange?: VisibleRangeOptions | undefined;
}

/**
 * <p>The tick label options of an axis.</p>
 * @public
 */
export interface AxisTickLabelOptions {
  /**
   * <p>Determines whether or not the axis ticks are visible.</p>
   * @public
   */
  LabelOptions?: LabelOptions | undefined;

  /**
   * <p>The rotation angle of the axis tick labels.</p>
   * @public
   */
  RotationAngle?: number | undefined;
}

/**
 * <p>The display options for the axis label.</p>
 * @public
 */
export interface AxisDisplayOptions {
  /**
   * <p>The tick label options of an axis.</p>
   * @public
   */
  TickLabelOptions?: AxisTickLabelOptions | undefined;

  /**
   * <p>Determines whether or not the axis line is visible.</p>
   * @public
   */
  AxisLineVisibility?: Visibility | undefined;

  /**
   * <p>Determines whether or not the grid line is visible.</p>
   * @public
   */
  GridLineVisibility?: Visibility | undefined;

  /**
   * <p>The data options for an axis.</p>
   * @public
   */
  DataOptions?: AxisDataOptions | undefined;

  /**
   * <p>The scroll bar options for an axis.</p>
   * @public
   */
  ScrollbarOptions?: ScrollBarOptions | undefined;

  /**
   * <p>The offset value that determines the starting placement of the axis within a visual's bounds.</p>
   * @public
   */
  AxisOffset?: string | undefined;
}

/**
 * <p>The reference that specifies where the axis label is applied to.</p>
 * @public
 */
export interface AxisLabelReferenceOptions {
  /**
   * <p>The field that the axis label is targeted to.</p>
   * @public
   */
  FieldId: string | undefined;

  /**
   * <p>The column that the axis label is targeted to.</p>
   * @public
   */
  Column: ColumnIdentifier | undefined;
}

/**
 * <p>The label options for a chart axis. You must specify the field that the label is targeted to.</p>
 * @public
 */
export interface AxisLabelOptions {
  /**
   * <p>The font configuration of the axis label.</p>
   * @public
   */
  FontConfiguration?: FontConfiguration | undefined;

  /**
   * <p>The text for the axis label.</p>
   * @public
   */
  CustomLabel?: string | undefined;

  /**
   * <p>The options that indicate which field the label belongs to.</p>
   * @public
   */
  ApplyTo?: AxisLabelReferenceOptions | undefined;
}

/**
 * <p>The label options for an axis on a chart.</p>
 * @public
 */
export interface ChartAxisLabelOptions {
  /**
   * <p>The visibility of an axis label on a chart. Choose one of the following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>VISIBLE</code>: Shows the axis.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HIDDEN</code>: Hides the axis.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Visibility?: Visibility | undefined;

  /**
   * <p>The visibility configuration of the sort icon on a chart's axis label.</p>
   * @public
   */
  SortIconVisibility?: Visibility | undefined;

  /**
   * <p>The label options for a chart axis.</p>
   * @public
   */
  AxisLabelOptions?: AxisLabelOptions[] | undefined;
}

/**
 * <p>The contribution analysis visual display for a line, pie, or bar chart.</p>
 * @public
 */
export interface ContributionAnalysisDefault {
  /**
   * <p>The measure field that is used in the contribution analysis.</p>
   * @public
   */
  MeasureFieldId: string | undefined;

  /**
   * <p>The dimensions columns that are used in the contribution analysis,
   *             usually a list of <code>ColumnIdentifiers</code>.</p>
   * @public
   */
  ContributorDimensions: ColumnIdentifier[] | undefined;
}

/**
 * <p>The option that specifies individual data values for labels.</p>
 * @public
 */
export interface DataPathLabelType {
  /**
   * <p>The field ID of the field that the data label needs to be applied to.</p>
   * @public
   */
  FieldId?: string | undefined;

  /**
   * <p>The actual value of the field that is labeled.</p>
   * @public
   */
  FieldValue?: string | undefined;

  /**
   * <p>The visibility of the data label.</p>
   * @public
   */
  Visibility?: Visibility | undefined;
}

/**
 * <p>The field label type.</p>
 * @public
 */
export interface FieldLabelType {
  /**
   * <p>Indicates the field that is targeted by the field
   *             label.</p>
   * @public
   */
  FieldId?: string | undefined;

  /**
   * <p>The visibility of the field label.</p>
   * @public
   */
  Visibility?: Visibility | undefined;
}

/**
 * <p>The maximum label of a data path label.</p>
 * @public
 */
export interface MaximumLabelType {
  /**
   * <p>The visibility of the maximum label.</p>
   * @public
   */
  Visibility?: Visibility | undefined;
}

/**
 * <p>The minimum label of a data path label.</p>
 * @public
 */
export interface MinimumLabelType {
  /**
   * <p>The visibility of the minimum label.</p>
   * @public
   */
  Visibility?: Visibility | undefined;
}

/**
 * <p>The range ends label type of a data path label.</p>
 * @public
 */
export interface RangeEndsLabelType {
  /**
   * <p>The visibility of the range ends label.</p>
   * @public
   */
  Visibility?: Visibility | undefined;
}

/**
 * <p>The option that determines the data label type.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 * @public
 */
export interface DataLabelType {
  /**
   * <p>Determines the label configuration for the entire field.</p>
   * @public
   */
  FieldLabelType?: FieldLabelType | undefined;

  /**
   * <p>The option that specifies individual data values for labels.</p>
   * @public
   */
  DataPathLabelType?: DataPathLabelType | undefined;

  /**
   * <p>Determines the label configuration for range end value in a visual.</p>
   * @public
   */
  RangeEndsLabelType?: RangeEndsLabelType | undefined;

  /**
   * <p>Determines the label configuration for the minimum value in a visual.</p>
   * @public
   */
  MinimumLabelType?: MinimumLabelType | undefined;

  /**
   * <p>Determines the label configuration for the maximum value in a visual.</p>
   * @public
   */
  MaximumLabelType?: MaximumLabelType | undefined;
}

/**
 * @public
 * @enum
 */
export const DataLabelContent = {
  PERCENT: "PERCENT",
  VALUE: "VALUE",
  VALUE_AND_PERCENT: "VALUE_AND_PERCENT",
} as const;

/**
 * @public
 */
export type DataLabelContent = (typeof DataLabelContent)[keyof typeof DataLabelContent];

/**
 * @public
 * @enum
 */
export const DataLabelOverlap = {
  DISABLE_OVERLAP: "DISABLE_OVERLAP",
  ENABLE_OVERLAP: "ENABLE_OVERLAP",
} as const;

/**
 * @public
 */
export type DataLabelOverlap = (typeof DataLabelOverlap)[keyof typeof DataLabelOverlap];

/**
 * @public
 * @enum
 */
export const DataLabelPosition = {
  BOTTOM: "BOTTOM",
  INSIDE: "INSIDE",
  LEFT: "LEFT",
  OUTSIDE: "OUTSIDE",
  RIGHT: "RIGHT",
  TOP: "TOP",
} as const;

/**
 * @public
 */
export type DataLabelPosition = (typeof DataLabelPosition)[keyof typeof DataLabelPosition];

/**
 * <p>The options that determine the presentation of the data labels.</p>
 * @public
 */
export interface DataLabelOptions {
  /**
   * <p>Determines the visibility of the data labels.</p>
   * @public
   */
  Visibility?: Visibility | undefined;

  /**
   * <p>Determines the visibility of the category field labels.</p>
   * @public
   */
  CategoryLabelVisibility?: Visibility | undefined;

  /**
   * <p>Determines the visibility of the measure field labels.</p>
   * @public
   */
  MeasureLabelVisibility?: Visibility | undefined;

  /**
   * <p>The option that determines the data label type.</p>
   * @public
   */
  DataLabelTypes?: DataLabelType[] | undefined;

  /**
   * <p>Determines the position of the data labels.</p>
   * @public
   */
  Position?: DataLabelPosition | undefined;

  /**
   * <p>Determines the content of the data labels.</p>
   * @public
   */
  LabelContent?: DataLabelContent | undefined;

  /**
   * <p>Determines the font configuration of the data labels.</p>
   * @public
   */
  LabelFontConfiguration?: FontConfiguration | undefined;

  /**
   * <p>Determines the color of the data labels.</p>
   * @public
   */
  LabelColor?: string | undefined;

  /**
   * <p>Determines whether overlap is enabled or disabled for the data labels.</p>
   * @public
   */
  Overlap?: DataLabelOverlap | undefined;

  /**
   * <p>Determines the visibility of the total.</p>
   * @public
   */
  TotalsVisibility?: Visibility | undefined;
}

/**
 * <p>The dimension type field with categorical type columns..</p>
 * @public
 */
export interface CategoricalDimensionField {
  /**
   * <p>The custom field ID.</p>
   * @public
   */
  FieldId: string | undefined;

  /**
   * <p>The column that is used in the <code>CategoricalDimensionField</code>.</p>
   * @public
   */
  Column: ColumnIdentifier | undefined;

  /**
   * <p>The custom hierarchy ID.</p>
   * @public
   */
  HierarchyId?: string | undefined;

  /**
   * <p>The format configuration of the field.</p>
   * @public
   */
  FormatConfiguration?: StringFormatConfiguration | undefined;
}

/**
 * <p>The dimension type field with date type columns.</p>
 * @public
 */
export interface DateDimensionField {
  /**
   * <p>The custom field ID.</p>
   * @public
   */
  FieldId: string | undefined;

  /**
   * <p>The column that is used in the <code>DateDimensionField</code>.</p>
   * @public
   */
  Column: ColumnIdentifier | undefined;

  /**
   * <p>The date granularity of the <code>DateDimensionField</code>. Choose one of the following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>YEAR</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>QUARTER</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MONTH</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WEEK</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DAY</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HOUR</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MINUTE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SECOND</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MILLISECOND</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  DateGranularity?: TimeGranularity | undefined;

  /**
   * <p>The custom hierarchy ID.</p>
   * @public
   */
  HierarchyId?: string | undefined;

  /**
   * <p>The format configuration of the field.</p>
   * @public
   */
  FormatConfiguration?: DateTimeFormatConfiguration | undefined;
}

/**
 * <p>The dimension type field with numerical type columns.</p>
 * @public
 */
export interface NumericalDimensionField {
  /**
   * <p>The custom field ID.</p>
   * @public
   */
  FieldId: string | undefined;

  /**
   * <p>The column that is used in the <code>NumericalDimensionField</code>.</p>
   * @public
   */
  Column: ColumnIdentifier | undefined;

  /**
   * <p>The custom hierarchy ID.</p>
   * @public
   */
  HierarchyId?: string | undefined;

  /**
   * <p>The format configuration of the field.</p>
   * @public
   */
  FormatConfiguration?: NumberFormatConfiguration | undefined;
}

/**
 * <p>The dimension type field.</p>
 * @public
 */
export interface DimensionField {
  /**
   * <p>The dimension type field with numerical type columns.</p>
   * @public
   */
  NumericalDimensionField?: NumericalDimensionField | undefined;

  /**
   * <p>The dimension type field with categorical type columns.</p>
   * @public
   */
  CategoricalDimensionField?: CategoricalDimensionField | undefined;

  /**
   * <p>The dimension type field with date type columns.</p>
   * @public
   */
  DateDimensionField?: DateDimensionField | undefined;
}

/**
 * <p>The table calculation measure field for pivot tables.</p>
 * @public
 */
export interface CalculatedMeasureField {
  /**
   * <p>The custom field ID.</p>
   * @public
   */
  FieldId: string | undefined;

  /**
   * <p>The expression in the table calculation.</p>
   * @public
   */
  Expression: string | undefined;
}

/**
 * <p>The measure type field with categorical type columns.</p>
 * @public
 */
export interface CategoricalMeasureField {
  /**
   * <p>The custom field ID.</p>
   * @public
   */
  FieldId: string | undefined;

  /**
   * <p>The column that is used in the <code>CategoricalMeasureField</code>.</p>
   * @public
   */
  Column: ColumnIdentifier | undefined;

  /**
   * <p>The aggregation function of the measure field.</p>
   * @public
   */
  AggregationFunction?: CategoricalAggregationFunction | undefined;

  /**
   * <p>The format configuration of the field.</p>
   * @public
   */
  FormatConfiguration?: StringFormatConfiguration | undefined;
}

/**
 * <p>The measure type field with date type columns.</p>
 * @public
 */
export interface DateMeasureField {
  /**
   * <p>The custom field ID.</p>
   * @public
   */
  FieldId: string | undefined;

  /**
   * <p>The column that is used in the <code>DateMeasureField</code>.</p>
   * @public
   */
  Column: ColumnIdentifier | undefined;

  /**
   * <p>The aggregation function of the measure field.</p>
   * @public
   */
  AggregationFunction?: DateAggregationFunction | undefined;

  /**
   * <p>The format configuration of the field.</p>
   * @public
   */
  FormatConfiguration?: DateTimeFormatConfiguration | undefined;
}

/**
 * <p>The measure type field with numerical type columns.</p>
 * @public
 */
export interface NumericalMeasureField {
  /**
   * <p>The custom field ID.</p>
   * @public
   */
  FieldId: string | undefined;

  /**
   * <p>The column that is used in the <code>NumericalMeasureField</code>.</p>
   * @public
   */
  Column: ColumnIdentifier | undefined;

  /**
   * <p>The aggregation function of the measure field.</p>
   * @public
   */
  AggregationFunction?: NumericalAggregationFunction | undefined;

  /**
   * <p>The format configuration of the field.</p>
   * @public
   */
  FormatConfiguration?: NumberFormatConfiguration | undefined;
}

/**
 * <p>The measure (metric) type field.</p>
 * @public
 */
export interface MeasureField {
  /**
   * <p>The measure type field with numerical type columns.</p>
   * @public
   */
  NumericalMeasureField?: NumericalMeasureField | undefined;

  /**
   * <p>The measure type field with categorical type columns.</p>
   * @public
   */
  CategoricalMeasureField?: CategoricalMeasureField | undefined;

  /**
   * <p>The measure type field with date type columns.</p>
   * @public
   */
  DateMeasureField?: DateMeasureField | undefined;

  /**
   * <p>The calculated measure field only used in pivot tables.</p>
   * @public
   */
  CalculatedMeasureField?: CalculatedMeasureField | undefined;
}

/**
 * <p>The aggregated field wells of a bar chart.</p>
 * @public
 */
export interface BarChartAggregatedFieldWells {
  /**
   * <p>The category (y-axis) field well of a bar chart.</p>
   * @public
   */
  Category?: DimensionField[] | undefined;

  /**
   * <p>The value field wells of a bar chart. Values are aggregated by
   *             category.</p>
   * @public
   */
  Values?: MeasureField[] | undefined;

  /**
   * <p>The color (group/color) field well of a bar chart.</p>
   * @public
   */
  Colors?: DimensionField[] | undefined;

  /**
   * <p>The small multiples field well of a bar chart.</p>
   * @public
   */
  SmallMultiples?: DimensionField[] | undefined;
}

/**
 * <p>The field wells of a <code>BarChartVisual</code>.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 * @public
 */
export interface BarChartFieldWells {
  /**
   * <p>The aggregated field wells of a bar chart.</p>
   * @public
   */
  BarChartAggregatedFieldWells?: BarChartAggregatedFieldWells | undefined;
}

/**
 * <p>The context menu options for a visual's interactions.</p>
 * @public
 */
export interface ContextMenuOption {
  /**
   * <p>The availability status of the context menu options. If the value of this property is set to <code>ENABLED</code>, dashboard readers can interact with the context menu.</p>
   * @public
   */
  AvailabilityStatus?: DashboardBehavior | undefined;
}

/**
 * <p>The menu options for a visual.</p>
 * @public
 */
export interface VisualMenuOption {
  /**
   * <p>The availaiblity status of a visual's menu options.</p>
   * @public
   */
  AvailabilityStatus?: DashboardBehavior | undefined;
}

/**
 * <p>The general visual interactions setup for visual publish options</p>
 * @public
 */
export interface VisualInteractionOptions {
  /**
   * <p>The on-visual menu options for a visual.</p>
   * @public
   */
  VisualMenuOption?: VisualMenuOption | undefined;

  /**
   * <p>The context menu options for a visual.</p>
   * @public
   */
  ContextMenuOption?: ContextMenuOption | undefined;
}

/**
 * @internal
 */
export const CustomParameterValuesFilterSensitiveLog = (obj: CustomParameterValues): any => ({
  ...obj,
  ...(obj.StringValues && { StringValues: SENSITIVE_STRING }),
  ...(obj.IntegerValues && { IntegerValues: SENSITIVE_STRING }),
  ...(obj.DecimalValues && { DecimalValues: SENSITIVE_STRING }),
  ...(obj.DateTimeValues && { DateTimeValues: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CustomValuesConfigurationFilterSensitiveLog = (obj: CustomValuesConfiguration): any => ({
  ...obj,
  ...(obj.CustomValues && { CustomValues: CustomParameterValuesFilterSensitiveLog(obj.CustomValues) }),
});

/**
 * @internal
 */
export const DestinationParameterValueConfigurationFilterSensitiveLog = (
  obj: DestinationParameterValueConfiguration
): any => ({
  ...obj,
  ...(obj.CustomValuesConfiguration && {
    CustomValuesConfiguration: CustomValuesConfigurationFilterSensitiveLog(obj.CustomValuesConfiguration),
  }),
});

/**
 * @internal
 */
export const SetParameterValueConfigurationFilterSensitiveLog = (obj: SetParameterValueConfiguration): any => ({
  ...obj,
  ...(obj.Value && { Value: DestinationParameterValueConfigurationFilterSensitiveLog(obj.Value) }),
});

/**
 * @internal
 */
export const CustomActionSetParametersOperationFilterSensitiveLog = (obj: CustomActionSetParametersOperation): any => ({
  ...obj,
  ...(obj.ParameterValueConfigurations && {
    ParameterValueConfigurations: obj.ParameterValueConfigurations.map((item) =>
      SetParameterValueConfigurationFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const ImageCustomActionOperationFilterSensitiveLog = (obj: ImageCustomActionOperation): any => ({
  ...obj,
  ...(obj.SetParametersOperation && {
    SetParametersOperation: CustomActionSetParametersOperationFilterSensitiveLog(obj.SetParametersOperation),
  }),
});

/**
 * @internal
 */
export const ImageCustomActionFilterSensitiveLog = (obj: ImageCustomAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SheetImageFilterSensitiveLog = (obj: SheetImage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SheetFilterSensitiveLog = (obj: Sheet): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AnalysisFilterSensitiveLog = (obj: Analysis): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CalculatedFieldFilterSensitiveLog = (obj: CalculatedField): any => ({
  ...obj,
  ...(obj.Expression && { Expression: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CustomColorFilterSensitiveLog = (obj: CustomColor): any => ({
  ...obj,
  ...(obj.FieldValue && { FieldValue: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ColorsConfigurationFilterSensitiveLog = (obj: ColorsConfiguration): any => ({
  ...obj,
  ...(obj.CustomColors && { CustomColors: obj.CustomColors.map((item) => CustomColorFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const NullValueFormatConfigurationFilterSensitiveLog = (obj: NullValueFormatConfiguration): any => ({
  ...obj,
  ...(obj.NullString && { NullString: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CurrencyDisplayFormatConfigurationFilterSensitiveLog = (obj: CurrencyDisplayFormatConfiguration): any => ({
  ...obj,
  ...(obj.Prefix && { Prefix: SENSITIVE_STRING }),
  ...(obj.Suffix && { Suffix: SENSITIVE_STRING }),
  ...(obj.NullValueFormatConfiguration && {
    NullValueFormatConfiguration: NullValueFormatConfigurationFilterSensitiveLog(obj.NullValueFormatConfiguration),
  }),
});

/**
 * @internal
 */
export const NumberDisplayFormatConfigurationFilterSensitiveLog = (obj: NumberDisplayFormatConfiguration): any => ({
  ...obj,
  ...(obj.Prefix && { Prefix: SENSITIVE_STRING }),
  ...(obj.Suffix && { Suffix: SENSITIVE_STRING }),
  ...(obj.NullValueFormatConfiguration && {
    NullValueFormatConfiguration: NullValueFormatConfigurationFilterSensitiveLog(obj.NullValueFormatConfiguration),
  }),
});

/**
 * @internal
 */
export const PercentageDisplayFormatConfigurationFilterSensitiveLog = (
  obj: PercentageDisplayFormatConfiguration
): any => ({
  ...obj,
  ...(obj.Prefix && { Prefix: SENSITIVE_STRING }),
  ...(obj.Suffix && { Suffix: SENSITIVE_STRING }),
  ...(obj.NullValueFormatConfiguration && {
    NullValueFormatConfiguration: NullValueFormatConfigurationFilterSensitiveLog(obj.NullValueFormatConfiguration),
  }),
});

/**
 * @internal
 */
export const NumericFormatConfigurationFilterSensitiveLog = (obj: NumericFormatConfiguration): any => ({
  ...obj,
  ...(obj.NumberDisplayFormatConfiguration && {
    NumberDisplayFormatConfiguration: NumberDisplayFormatConfigurationFilterSensitiveLog(
      obj.NumberDisplayFormatConfiguration
    ),
  }),
  ...(obj.CurrencyDisplayFormatConfiguration && {
    CurrencyDisplayFormatConfiguration: CurrencyDisplayFormatConfigurationFilterSensitiveLog(
      obj.CurrencyDisplayFormatConfiguration
    ),
  }),
  ...(obj.PercentageDisplayFormatConfiguration && {
    PercentageDisplayFormatConfiguration: PercentageDisplayFormatConfigurationFilterSensitiveLog(
      obj.PercentageDisplayFormatConfiguration
    ),
  }),
});

/**
 * @internal
 */
export const DateTimeFormatConfigurationFilterSensitiveLog = (obj: DateTimeFormatConfiguration): any => ({
  ...obj,
  ...(obj.NullValueFormatConfiguration && {
    NullValueFormatConfiguration: NullValueFormatConfigurationFilterSensitiveLog(obj.NullValueFormatConfiguration),
  }),
  ...(obj.NumericFormatConfiguration && {
    NumericFormatConfiguration: NumericFormatConfigurationFilterSensitiveLog(obj.NumericFormatConfiguration),
  }),
});

/**
 * @internal
 */
export const NumberFormatConfigurationFilterSensitiveLog = (obj: NumberFormatConfiguration): any => ({
  ...obj,
  ...(obj.FormatConfiguration && {
    FormatConfiguration: NumericFormatConfigurationFilterSensitiveLog(obj.FormatConfiguration),
  }),
});

/**
 * @internal
 */
export const StringFormatConfigurationFilterSensitiveLog = (obj: StringFormatConfiguration): any => ({
  ...obj,
  ...(obj.NullValueFormatConfiguration && {
    NullValueFormatConfiguration: NullValueFormatConfigurationFilterSensitiveLog(obj.NullValueFormatConfiguration),
  }),
  ...(obj.NumericFormatConfiguration && {
    NumericFormatConfiguration: NumericFormatConfigurationFilterSensitiveLog(obj.NumericFormatConfiguration),
  }),
});

/**
 * @internal
 */
export const FormatConfigurationFilterSensitiveLog = (obj: FormatConfiguration): any => ({
  ...obj,
  ...(obj.StringFormatConfiguration && {
    StringFormatConfiguration: StringFormatConfigurationFilterSensitiveLog(obj.StringFormatConfiguration),
  }),
  ...(obj.NumberFormatConfiguration && {
    NumberFormatConfiguration: NumberFormatConfigurationFilterSensitiveLog(obj.NumberFormatConfiguration),
  }),
  ...(obj.DateTimeFormatConfiguration && {
    DateTimeFormatConfiguration: DateTimeFormatConfigurationFilterSensitiveLog(obj.DateTimeFormatConfiguration),
  }),
});

/**
 * @internal
 */
export const ColumnConfigurationFilterSensitiveLog = (obj: ColumnConfiguration): any => ({
  ...obj,
  ...(obj.FormatConfiguration && {
    FormatConfiguration: FormatConfigurationFilterSensitiveLog(obj.FormatConfiguration),
  }),
  ...(obj.ColorsConfiguration && {
    ColorsConfiguration: ColorsConfigurationFilterSensitiveLog(obj.ColorsConfiguration),
  }),
});

/**
 * @internal
 */
export const RollingDateConfigurationFilterSensitiveLog = (obj: RollingDateConfiguration): any => ({
  ...obj,
  ...(obj.Expression && { Expression: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TimeEqualityFilterFilterSensitiveLog = (obj: TimeEqualityFilter): any => ({
  ...obj,
  ...(obj.RollingDate && { RollingDate: RollingDateConfigurationFilterSensitiveLog(obj.RollingDate) }),
});

/**
 * @internal
 */
export const TimeRangeFilterValueFilterSensitiveLog = (obj: TimeRangeFilterValue): any => ({
  ...obj,
  ...(obj.RollingDate && { RollingDate: RollingDateConfigurationFilterSensitiveLog(obj.RollingDate) }),
});

/**
 * @internal
 */
export const TimeRangeFilterFilterSensitiveLog = (obj: TimeRangeFilter): any => ({
  ...obj,
  ...(obj.RangeMinimumValue && { RangeMinimumValue: TimeRangeFilterValueFilterSensitiveLog(obj.RangeMinimumValue) }),
  ...(obj.RangeMaximumValue && { RangeMaximumValue: TimeRangeFilterValueFilterSensitiveLog(obj.RangeMaximumValue) }),
});

/**
 * @internal
 */
export const FilterFilterSensitiveLog = (obj: Filter): any => ({
  ...obj,
  ...(obj.TimeEqualityFilter && { TimeEqualityFilter: TimeEqualityFilterFilterSensitiveLog(obj.TimeEqualityFilter) }),
  ...(obj.TimeRangeFilter && { TimeRangeFilter: TimeRangeFilterFilterSensitiveLog(obj.TimeRangeFilter) }),
});

/**
 * @internal
 */
export const FilterGroupFilterSensitiveLog = (obj: FilterGroup): any => ({
  ...obj,
  ...(obj.Filters && { Filters: obj.Filters.map((item) => FilterFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const DateTimeDefaultValuesFilterSensitiveLog = (obj: DateTimeDefaultValues): any => ({
  ...obj,
  ...(obj.StaticValues && { StaticValues: SENSITIVE_STRING }),
  ...(obj.RollingDate && { RollingDate: RollingDateConfigurationFilterSensitiveLog(obj.RollingDate) }),
});

/**
 * @internal
 */
export const DateTimeValueWhenUnsetConfigurationFilterSensitiveLog = (
  obj: DateTimeValueWhenUnsetConfiguration
): any => ({
  ...obj,
  ...(obj.CustomValue && { CustomValue: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DateTimeParameterDeclarationFilterSensitiveLog = (obj: DateTimeParameterDeclaration): any => ({
  ...obj,
  ...(obj.DefaultValues && { DefaultValues: DateTimeDefaultValuesFilterSensitiveLog(obj.DefaultValues) }),
  ...(obj.ValueWhenUnset && {
    ValueWhenUnset: DateTimeValueWhenUnsetConfigurationFilterSensitiveLog(obj.ValueWhenUnset),
  }),
});

/**
 * @internal
 */
export const DecimalDefaultValuesFilterSensitiveLog = (obj: DecimalDefaultValues): any => ({
  ...obj,
  ...(obj.StaticValues && { StaticValues: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DecimalValueWhenUnsetConfigurationFilterSensitiveLog = (obj: DecimalValueWhenUnsetConfiguration): any => ({
  ...obj,
  ...(obj.CustomValue && { CustomValue: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DecimalParameterDeclarationFilterSensitiveLog = (obj: DecimalParameterDeclaration): any => ({
  ...obj,
  ...(obj.DefaultValues && { DefaultValues: DecimalDefaultValuesFilterSensitiveLog(obj.DefaultValues) }),
  ...(obj.ValueWhenUnset && {
    ValueWhenUnset: DecimalValueWhenUnsetConfigurationFilterSensitiveLog(obj.ValueWhenUnset),
  }),
});

/**
 * @internal
 */
export const IntegerDefaultValuesFilterSensitiveLog = (obj: IntegerDefaultValues): any => ({
  ...obj,
  ...(obj.StaticValues && { StaticValues: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const IntegerValueWhenUnsetConfigurationFilterSensitiveLog = (obj: IntegerValueWhenUnsetConfiguration): any => ({
  ...obj,
  ...(obj.CustomValue && { CustomValue: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const IntegerParameterDeclarationFilterSensitiveLog = (obj: IntegerParameterDeclaration): any => ({
  ...obj,
  ...(obj.DefaultValues && { DefaultValues: IntegerDefaultValuesFilterSensitiveLog(obj.DefaultValues) }),
  ...(obj.ValueWhenUnset && {
    ValueWhenUnset: IntegerValueWhenUnsetConfigurationFilterSensitiveLog(obj.ValueWhenUnset),
  }),
});

/**
 * @internal
 */
export const StringDefaultValuesFilterSensitiveLog = (obj: StringDefaultValues): any => ({
  ...obj,
  ...(obj.StaticValues && { StaticValues: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StringValueWhenUnsetConfigurationFilterSensitiveLog = (obj: StringValueWhenUnsetConfiguration): any => ({
  ...obj,
  ...(obj.CustomValue && { CustomValue: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StringParameterDeclarationFilterSensitiveLog = (obj: StringParameterDeclaration): any => ({
  ...obj,
  ...(obj.DefaultValues && { DefaultValues: StringDefaultValuesFilterSensitiveLog(obj.DefaultValues) }),
  ...(obj.ValueWhenUnset && {
    ValueWhenUnset: StringValueWhenUnsetConfigurationFilterSensitiveLog(obj.ValueWhenUnset),
  }),
});

/**
 * @internal
 */
export const ParameterDeclarationFilterSensitiveLog = (obj: ParameterDeclaration): any => ({
  ...obj,
  ...(obj.StringParameterDeclaration && {
    StringParameterDeclaration: StringParameterDeclarationFilterSensitiveLog(obj.StringParameterDeclaration),
  }),
  ...(obj.DecimalParameterDeclaration && {
    DecimalParameterDeclaration: DecimalParameterDeclarationFilterSensitiveLog(obj.DecimalParameterDeclaration),
  }),
  ...(obj.IntegerParameterDeclaration && {
    IntegerParameterDeclaration: IntegerParameterDeclarationFilterSensitiveLog(obj.IntegerParameterDeclaration),
  }),
  ...(obj.DateTimeParameterDeclaration && {
    DateTimeParameterDeclaration: DateTimeParameterDeclarationFilterSensitiveLog(obj.DateTimeParameterDeclaration),
  }),
});

/**
 * @internal
 */
export const SheetElementRenderingRuleFilterSensitiveLog = (obj: SheetElementRenderingRule): any => ({
  ...obj,
  ...(obj.Expression && { Expression: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const FreeFormLayoutElementFilterSensitiveLog = (obj: FreeFormLayoutElement): any => ({
  ...obj,
  ...(obj.RenderingRules && {
    RenderingRules: obj.RenderingRules.map((item) => SheetElementRenderingRuleFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const FreeFormLayoutConfigurationFilterSensitiveLog = (obj: FreeFormLayoutConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FreeFormSectionLayoutConfigurationFilterSensitiveLog = (obj: FreeFormSectionLayoutConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SectionLayoutConfigurationFilterSensitiveLog = (obj: SectionLayoutConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BodySectionContentFilterSensitiveLog = (obj: BodySectionContent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BodySectionConfigurationFilterSensitiveLog = (obj: BodySectionConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HeaderFooterSectionConfigurationFilterSensitiveLog = (obj: HeaderFooterSectionConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SectionBasedLayoutConfigurationFilterSensitiveLog = (obj: SectionBasedLayoutConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LayoutConfigurationFilterSensitiveLog = (obj: LayoutConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LayoutFilterSensitiveLog = (obj: Layout): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VisualCustomActionOperationFilterSensitiveLog = (obj: VisualCustomActionOperation): any => ({
  ...obj,
  ...(obj.SetParametersOperation && {
    SetParametersOperation: CustomActionSetParametersOperationFilterSensitiveLog(obj.SetParametersOperation),
  }),
});

/**
 * @internal
 */
export const VisualCustomActionFilterSensitiveLog = (obj: VisualCustomAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataPathLabelTypeFilterSensitiveLog = (obj: DataPathLabelType): any => ({
  ...obj,
  ...(obj.FieldValue && { FieldValue: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DataLabelTypeFilterSensitiveLog = (obj: DataLabelType): any => ({
  ...obj,
  ...(obj.DataPathLabelType && { DataPathLabelType: DataPathLabelTypeFilterSensitiveLog(obj.DataPathLabelType) }),
});

/**
 * @internal
 */
export const DataLabelOptionsFilterSensitiveLog = (obj: DataLabelOptions): any => ({
  ...obj,
  ...(obj.DataLabelTypes && {
    DataLabelTypes: obj.DataLabelTypes.map((item) => DataLabelTypeFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const CategoricalDimensionFieldFilterSensitiveLog = (obj: CategoricalDimensionField): any => ({
  ...obj,
  ...(obj.FormatConfiguration && {
    FormatConfiguration: StringFormatConfigurationFilterSensitiveLog(obj.FormatConfiguration),
  }),
});

/**
 * @internal
 */
export const DateDimensionFieldFilterSensitiveLog = (obj: DateDimensionField): any => ({
  ...obj,
  ...(obj.FormatConfiguration && {
    FormatConfiguration: DateTimeFormatConfigurationFilterSensitiveLog(obj.FormatConfiguration),
  }),
});

/**
 * @internal
 */
export const NumericalDimensionFieldFilterSensitiveLog = (obj: NumericalDimensionField): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DimensionFieldFilterSensitiveLog = (obj: DimensionField): any => ({
  ...obj,
  ...(obj.CategoricalDimensionField && {
    CategoricalDimensionField: CategoricalDimensionFieldFilterSensitiveLog(obj.CategoricalDimensionField),
  }),
  ...(obj.DateDimensionField && { DateDimensionField: DateDimensionFieldFilterSensitiveLog(obj.DateDimensionField) }),
});

/**
 * @internal
 */
export const CalculatedMeasureFieldFilterSensitiveLog = (obj: CalculatedMeasureField): any => ({
  ...obj,
  ...(obj.Expression && { Expression: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CategoricalMeasureFieldFilterSensitiveLog = (obj: CategoricalMeasureField): any => ({
  ...obj,
  ...(obj.FormatConfiguration && {
    FormatConfiguration: StringFormatConfigurationFilterSensitiveLog(obj.FormatConfiguration),
  }),
});

/**
 * @internal
 */
export const DateMeasureFieldFilterSensitiveLog = (obj: DateMeasureField): any => ({
  ...obj,
  ...(obj.FormatConfiguration && {
    FormatConfiguration: DateTimeFormatConfigurationFilterSensitiveLog(obj.FormatConfiguration),
  }),
});

/**
 * @internal
 */
export const NumericalMeasureFieldFilterSensitiveLog = (obj: NumericalMeasureField): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MeasureFieldFilterSensitiveLog = (obj: MeasureField): any => ({
  ...obj,
  ...(obj.CategoricalMeasureField && {
    CategoricalMeasureField: CategoricalMeasureFieldFilterSensitiveLog(obj.CategoricalMeasureField),
  }),
  ...(obj.DateMeasureField && { DateMeasureField: DateMeasureFieldFilterSensitiveLog(obj.DateMeasureField) }),
  ...(obj.CalculatedMeasureField && {
    CalculatedMeasureField: CalculatedMeasureFieldFilterSensitiveLog(obj.CalculatedMeasureField),
  }),
});

/**
 * @internal
 */
export const BarChartAggregatedFieldWellsFilterSensitiveLog = (obj: BarChartAggregatedFieldWells): any => ({
  ...obj,
  ...(obj.Values && { Values: obj.Values.map((item) => MeasureFieldFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const BarChartFieldWellsFilterSensitiveLog = (obj: BarChartFieldWells): any => ({
  ...obj,
});
