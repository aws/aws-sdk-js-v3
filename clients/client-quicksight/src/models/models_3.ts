// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  AccountCustomization,
  ActionConnectorType,
  AdHocFilteringOption,
  AggFunction,
  AggregateOperation,
  AggregationPartitionBy,
  AggType,
  AnalysisDefaults,
  AssetOptions,
  CalculatedField,
  CalculatedFieldFilterSensitiveLog,
  ColumnConfiguration,
  ColumnConfigurationFilterSensitiveLog,
  DashboardBehavior,
  DataPrepAggregationFunction,
  DataSetColumnIdMapping,
  DataSetIdentifierDeclaration,
  Edition,
  FilterGroup,
  NumberScale,
  ParameterDeclaration,
  ParameterDeclarationFilterSensitiveLog,
  QueryExecutionOptions,
  ResourceStatus,
  TimeGranularity,
  TopicTimeGranularity,
  TransformOperationSource,
} from "./models_0";

import { VisualMenuOption } from "./models_1";

import {
  AnalysisDefinition,
  AnalysisSourceEntity,
  Anchor,
  AppendOperation,
  ApplicationTheme,
  AssignmentStatus,
  AuthConfig,
  AuthConfigFilterSensitiveLog,
  AuthenticationMethodOption,
  AuthorSpecifiedAggregation,
  ContributionAnalysisDirection,
  ContributionAnalysisFactor,
  ContributionAnalysisSortType,
  DataSetReference,
  DataSourceParameters,
  Identifier,
  SheetDefinition,
  SslProperties,
  StaticFile,
  Tag,
  TopicSortDirection,
  VpcConnectionProperties,
} from "./models_2";

import { QuickSightServiceException as __BaseException } from "./QuickSightServiceException";

/**
 * <p>The definition for the <code>FilterAggMetrics</code>.</p>
 * @public
 */
export interface FilterAggMetrics {
  /**
   * <p>The metric operand of the <code>FilterAggMetrics</code>.</p>
   * @public
   */
  MetricOperand?: Identifier | undefined;

  /**
   * <p>The function for the <code>FilterAggMetrics</code>.</p>
   * @public
   */
  Function?: AggType | undefined;

  /**
   * <p>The sort direction for <code>FilterAggMetrics</code>.</p>
   * @public
   */
  SortDirection?: TopicSortDirection | undefined;
}

/**
 * @public
 * @enum
 */
export const ConstantType = {
  COLLECTIVE: "COLLECTIVE",
  RANGE: "RANGE",
  SINGULAR: "SINGULAR",
} as const;

/**
 * @public
 */
export type ConstantType = (typeof ConstantType)[keyof typeof ConstantType];

/**
 * <p>The definition for a <code>CollectiveConstantEntry</code>.</p>
 * @public
 */
export interface CollectiveConstantEntry {
  /**
   * <p>The <code>ConstantType</code> of a <code>CollectiveConstantEntry</code>.</p>
   * @public
   */
  ConstantType?: ConstantType | undefined;

  /**
   * <p>The value of a <code>CollectiveConstantEntry</code>.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>The definition for a <code>TopicConstantValue</code>.</p>
 * @public
 */
export interface TopicConstantValue {
  /**
   * <p>The constant type of a <code>TopicConstantValue</code>.</p>
   * @public
   */
  ConstantType?: ConstantType | undefined;

  /**
   * <p>The value of the <code>TopicConstantValue</code>.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>The minimum for the <code>TopicConstantValue</code>.</p>
   * @public
   */
  Minimum?: string | undefined;

  /**
   * <p>The maximum for the <code>TopicConstantValue</code>.</p>
   * @public
   */
  Maximum?: string | undefined;

  /**
   * <p>The value list of the <code>TopicConstantValue</code>.</p>
   * @public
   */
  ValueList?: CollectiveConstantEntry[] | undefined;
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
export const TopicIRFilterType = {
  ACCEPT_ALL_FILTER: "ACCEPT_ALL_FILTER",
  CATEGORY_FILTER: "CATEGORY_FILTER",
  DATE_RANGE_FILTER: "DATE_RANGE_FILTER",
  EQUALS: "EQUALS",
  NUMERIC_EQUALITY_FILTER: "NUMERIC_EQUALITY_FILTER",
  NUMERIC_RANGE_FILTER: "NUMERIC_RANGE_FILTER",
  RANK_LIMIT_FILTER: "RANK_LIMIT_FILTER",
  RELATIVE_DATE_FILTER: "RELATIVE_DATE_FILTER",
  TOP_BOTTOM_FILTER: "TOP_BOTTOM_FILTER",
} as const;

/**
 * @public
 */
export type TopicIRFilterType = (typeof TopicIRFilterType)[keyof typeof TopicIRFilterType];

/**
 * @public
 * @enum
 */
export const TopicIRFilterFunction = {
  CONTAINS: "CONTAINS",
  CONTAINS_STRING: "CONTAINS_STRING",
  ENDS_WITH: "ENDS_WITH",
  EXACT: "EXACT",
  LAST: "LAST",
  NEXT: "NEXT",
  NOW: "NOW",
  PREVIOUS: "PREVIOUS",
  STARTS_WITH: "STARTS_WITH",
  THIS: "THIS",
} as const;

/**
 * @public
 */
export type TopicIRFilterFunction = (typeof TopicIRFilterFunction)[keyof typeof TopicIRFilterFunction];

/**
 * @public
 * @enum
 */
export const NullFilterOption = {
  ALL_VALUES: "ALL_VALUES",
  NON_NULLS_ONLY: "NON_NULLS_ONLY",
  NULLS_ONLY: "NULLS_ONLY",
} as const;

/**
 * @public
 */
export type NullFilterOption = (typeof NullFilterOption)[keyof typeof NullFilterOption];

/**
 * <p>The definition for a <code>TopicIRFilterOption</code>.</p>
 * @public
 */
export interface TopicIRFilterOption {
  /**
   * <p>The filter type for the <code>TopicIRFilterOption</code>.</p>
   * @public
   */
  FilterType?: TopicIRFilterType | undefined;

  /**
   * <p>The filter class for the <code>TopicIRFilterOption</code>.</p>
   * @public
   */
  FilterClass?: FilterClass | undefined;

  /**
   * <p>The operand field for the <code>TopicIRFilterOption</code>.</p>
   * @public
   */
  OperandField?: Identifier | undefined;

  /**
   * <p>The function for the <code>TopicIRFilterOption</code>.</p>
   * @public
   */
  Function?: TopicIRFilterFunction | undefined;

  /**
   * <p>The constant for the <code>TopicIRFilterOption</code>.</p>
   * @public
   */
  Constant?: TopicConstantValue | undefined;

  /**
   * <p>The inverse for the <code>TopicIRFilterOption</code>.</p>
   * @public
   */
  Inverse?: boolean | undefined;

  /**
   * <p>The null filter for the <code>TopicIRFilterOption</code>.</p>
   * @public
   */
  NullFilter?: NullFilterOption | undefined;

  /**
   * <p>The aggregation for the <code>TopicIRFilterOption</code>.</p>
   * @public
   */
  Aggregation?: AggType | undefined;

  /**
   * <p>The aggregation function parameters for the <code>TopicIRFilterOption</code>.</p>
   * @public
   */
  AggregationFunctionParameters?: Record<string, string> | undefined;

  /**
   * <p>The <code>AggregationPartitionBy</code> for the <code>TopicIRFilterOption</code>.</p>
   * @public
   */
  AggregationPartitionBy?: AggregationPartitionBy[] | undefined;

  /**
   * <p>The range for the <code>TopicIRFilterOption</code>.</p>
   * @public
   */
  Range?: TopicConstantValue | undefined;

  /**
   * <p>The inclusive for the <code>TopicIRFilterOption</code>.</p>
   * @public
   */
  Inclusive?: boolean | undefined;

  /**
   * <p>The time granularity for the <code>TopicIRFilterOption</code>.</p>
   * @public
   */
  TimeGranularity?: TimeGranularity | undefined;

  /**
   * <p>The last next offset for the <code>TopicIRFilterOption</code>.</p>
   * @public
   */
  LastNextOffset?: TopicConstantValue | undefined;

  /**
   * <p>The agg metrics for the <code>TopicIRFilterOption</code>.</p>
   * @public
   */
  AggMetrics?: FilterAggMetrics[] | undefined;

  /**
   * <p>The <code>TopBottomLimit</code> for the <code>TopicIRFilterOption</code>.</p>
   * @public
   */
  TopBottomLimit?: TopicConstantValue | undefined;

  /**
   * <p>The sort direction for the <code>TopicIRFilterOption</code>.</p>
   * @public
   */
  SortDirection?: TopicSortDirection | undefined;

  /**
   * <p>The anchor for the <code>TopicIRFilterOption</code>.</p>
   * @public
   */
  Anchor?: Anchor | undefined;
}

/**
 * <p>The definition for the <code>ContributionAnalysisTimeRanges</code>.</p>
 * @public
 */
export interface ContributionAnalysisTimeRanges {
  /**
   * <p>The start range for the <code>ContributionAnalysisTimeRanges</code>.</p>
   * @public
   */
  StartRange?: TopicIRFilterOption | undefined;

  /**
   * <p>The end range for the <code>ContributionAnalysisTimeRanges</code>.</p>
   * @public
   */
  EndRange?: TopicIRFilterOption | undefined;
}

/**
 * <p>The definition for a <code>TopicIRContributionAnalysis</code>.</p>
 * @public
 */
export interface TopicIRContributionAnalysis {
  /**
   * <p>The factors for a <code>TopicIRContributionAnalysis</code>.</p>
   * @public
   */
  Factors?: ContributionAnalysisFactor[] | undefined;

  /**
   * <p>The time ranges for the <code>TopicIRContributionAnalysis</code>.</p>
   * @public
   */
  TimeRanges?: ContributionAnalysisTimeRanges | undefined;

  /**
   * <p>The direction for the <code>TopicIRContributionAnalysis</code>.</p>
   * @public
   */
  Direction?: ContributionAnalysisDirection | undefined;

  /**
   * <p>The sort type for the <code>TopicIRContributionAnalysis</code>.</p>
   * @public
   */
  SortType?: ContributionAnalysisSortType | undefined;
}

/**
 * @public
 * @enum
 */
export const DisplayFormat = {
  AUTO: "AUTO",
  CURRENCY: "CURRENCY",
  DATE: "DATE",
  NUMBER: "NUMBER",
  PERCENT: "PERCENT",
  STRING: "STRING",
} as const;

/**
 * @public
 */
export type DisplayFormat = (typeof DisplayFormat)[keyof typeof DisplayFormat];

/**
 * @public
 * @enum
 */
export const TopicNumericSeparatorSymbol = {
  COMMA: "COMMA",
  DOT: "DOT",
} as const;

/**
 * @public
 */
export type TopicNumericSeparatorSymbol =
  (typeof TopicNumericSeparatorSymbol)[keyof typeof TopicNumericSeparatorSymbol];

/**
 * <p>A structure that represents a negative format.</p>
 * @public
 */
export interface NegativeFormat {
  /**
   * <p>The prefix for a negative format.</p>
   * @public
   */
  Prefix?: string | undefined;

  /**
   * <p>The suffix for a negative format.</p>
   * @public
   */
  Suffix?: string | undefined;
}

/**
 * <p>A structure that represents additional options for display formatting.</p>
 * @public
 */
export interface DisplayFormatOptions {
  /**
   * <p>A Boolean value that indicates whether to use blank cell format.</p>
   * @public
   */
  UseBlankCellFormat?: boolean | undefined;

  /**
   * <p>Determines the blank cell format.</p>
   * @public
   */
  BlankCellFormat?: string | undefined;

  /**
   * <p>Determines the <code>DateTime</code> format.</p>
   * @public
   */
  DateFormat?: string | undefined;

  /**
   * <p>Determines the decimal separator.</p>
   * @public
   */
  DecimalSeparator?: TopicNumericSeparatorSymbol | undefined;

  /**
   * <p>Determines the grouping separator.</p>
   * @public
   */
  GroupingSeparator?: string | undefined;

  /**
   * <p>A Boolean value that indicates whether to use grouping.</p>
   * @public
   */
  UseGrouping?: boolean | undefined;

  /**
   * <p>Determines the number of fraction digits.</p>
   * @public
   */
  FractionDigits?: number | undefined;

  /**
   * <p>The prefix value for a display format.</p>
   * @public
   */
  Prefix?: string | undefined;

  /**
   * <p>The suffix value for a display format.</p>
   * @public
   */
  Suffix?: string | undefined;

  /**
   * <p>The unit scaler. Valid values for this structure are: <code>NONE</code>,
   *             <code>AUTO</code>, <code>THOUSANDS</code>, <code>MILLIONS</code>,
   *          <code>BILLIONS</code>,
   *          and <code>TRILLIONS</code>.</p>
   * @public
   */
  UnitScaler?: NumberScale | undefined;

  /**
   * <p>The negative format.</p>
   * @public
   */
  NegativeFormat?: NegativeFormat | undefined;

  /**
   * <p>The currency symbol, such as <code>USD</code>.</p>
   * @public
   */
  CurrencySymbol?: string | undefined;
}

/**
 * <p>The definition for a <code>NamedEntityRef</code>.</p>
 * @public
 */
export interface NamedEntityRef {
  /**
   * <p>The <code>NamedEntityName</code> for the <code>NamedEntityRef</code>.</p>
   * @public
   */
  NamedEntityName?: string | undefined;
}

/**
 * <p>The definition for a <code>TopicSortClause</code>.</p>
 * @public
 */
export interface TopicSortClause {
  /**
   * <p>The operand for a <code>TopicSortClause</code>.</p>
   * @public
   */
  Operand?: Identifier | undefined;

  /**
   * <p>The sort direction for the <code>TopicSortClause</code>.</p>
   * @public
   */
  SortDirection?: TopicSortDirection | undefined;
}

/**
 * <p>The definition for a <code>TopicIRGroupBy</code>.</p>
 * @public
 */
export interface TopicIRGroupBy {
  /**
   * <p>The field name for the <code>TopicIRGroupBy</code>.</p>
   * @public
   */
  FieldName?: Identifier | undefined;

  /**
   * <p>The time granularity for the <code>TopicIRGroupBy</code>.</p>
   * @public
   */
  TimeGranularity?: TopicTimeGranularity | undefined;

  /**
   * <p>The sort for the <code>TopicIRGroupBy</code>.</p>
   * @public
   */
  Sort?: TopicSortClause | undefined;

  /**
   * <p>The display format for the <code>TopicIRGroupBy</code>.</p>
   * @public
   */
  DisplayFormat?: DisplayFormat | undefined;

  /**
   * <p>A structure that represents additional options for display formatting.</p>
   * @public
   */
  DisplayFormatOptions?: DisplayFormatOptions | undefined;

  /**
   * <p>The named entity for the <code>TopicIRGroupBy</code>.</p>
   * @public
   */
  NamedEntity?: NamedEntityRef | undefined;
}

/**
 * @public
 * @enum
 */
export const ComparisonMethodType = {
  DIFF: "DIFF",
  DIFF_AS_PERC: "DIFF_AS_PERC",
  MOVING_AVERAGE: "MOVING_AVERAGE",
  PERCENT_OF_TOTAL: "PERCENT_OF_TOTAL",
  PERC_DIFF: "PERC_DIFF",
  POP_CURRENT_DIFF: "POP_CURRENT_DIFF",
  POP_CURRENT_DIFF_AS_PERC: "POP_CURRENT_DIFF_AS_PERC",
  POP_OVERTIME_DIFF: "POP_OVERTIME_DIFF",
  POP_OVERTIME_DIFF_AS_PERC: "POP_OVERTIME_DIFF_AS_PERC",
  RUNNING_SUM: "RUNNING_SUM",
} as const;

/**
 * @public
 */
export type ComparisonMethodType = (typeof ComparisonMethodType)[keyof typeof ComparisonMethodType];

/**
 * <p>The definition of a <code>TopicIRComparisonMethod</code>.</p>
 * @public
 */
export interface TopicIRComparisonMethod {
  /**
   * <p>The type for the <code>TopicIRComparisonMethod</code>.</p>
   * @public
   */
  Type?: ComparisonMethodType | undefined;

  /**
   * <p>The period for the <code>TopicIRComparisonMethod</code>.</p>
   * @public
   */
  Period?: TopicTimeGranularity | undefined;

  /**
   * <p>The window size for the <code>TopicIRComparisonMethod</code>.</p>
   * @public
   */
  WindowSize?: number | undefined;
}

/**
 * <p>The definition for a <code>TopicIRMetric</code>.</p>
 * @public
 */
export interface TopicIRMetric {
  /**
   * <p>The metric ID for the <code>TopicIRMetric</code>.</p>
   * @public
   */
  MetricId?: Identifier | undefined;

  /**
   * <p>The function for the <code>TopicIRMetric</code>.</p>
   * @public
   */
  Function?: AggFunction | undefined;

  /**
   * <p>The operands for the <code>TopicIRMetric</code>.</p>
   * @public
   */
  Operands?: Identifier[] | undefined;

  /**
   * <p>The comparison method for the <code>TopicIRMetric</code>.</p>
   * @public
   */
  ComparisonMethod?: TopicIRComparisonMethod | undefined;

  /**
   * <p>The expression for the <code>TopicIRMetric</code>.</p>
   * @public
   */
  Expression?: string | undefined;

  /**
   * <p>The calculated field references for the <code>TopicIRMetric</code>.</p>
   * @public
   */
  CalculatedFieldReferences?: Identifier[] | undefined;

  /**
   * <p>The display format for the <code>TopicIRMetric</code>.</p>
   * @public
   */
  DisplayFormat?: DisplayFormat | undefined;

  /**
   * <p>A structure that represents additional options for display formatting.</p>
   * @public
   */
  DisplayFormatOptions?: DisplayFormatOptions | undefined;

  /**
   * <p>The named entity for the <code>TopicIRMetric</code>.</p>
   * @public
   */
  NamedEntity?: NamedEntityRef | undefined;
}

/**
 * <p>The definition for a <code>VisualOptions</code>.</p>
 * @public
 */
export interface VisualOptions {
  /**
   * <p>The type for a <code>VisualOptions</code>.</p>
   * @public
   */
  type?: string | undefined;
}

/**
 * <p>The definition for a <code>TopicIR</code>.</p>
 * @public
 */
export interface TopicIR {
  /**
   * <p>The metrics for the <code>TopicIR</code>.</p>
   * @public
   */
  Metrics?: TopicIRMetric[] | undefined;

  /**
   * <p>The GroupBy list for the <code>TopicIR</code>.</p>
   * @public
   */
  GroupByList?: TopicIRGroupBy[] | undefined;

  /**
   * <p>The filters for the <code>TopicIR</code>.</p>
   * @public
   */
  Filters?: TopicIRFilterOption[][] | undefined;

  /**
   * <p>The sort for the <code>TopicIR</code>.</p>
   * @public
   */
  Sort?: TopicSortClause | undefined;

  /**
   * <p>The contribution analysis for the <code>TopicIR</code>.</p>
   * @public
   */
  ContributionAnalysis?: TopicIRContributionAnalysis | undefined;

  /**
   * <p>The visual for the <code>TopicIR</code>.</p>
   * @public
   */
  Visual?: VisualOptions | undefined;
}

/**
 * @public
 * @enum
 */
export const VisualRole = {
  COMPLIMENTARY: "COMPLIMENTARY",
  FALLBACK: "FALLBACK",
  FRAGMENT: "FRAGMENT",
  MULTI_INTENT: "MULTI_INTENT",
  PRIMARY: "PRIMARY",
} as const;

/**
 * @public
 */
export type VisualRole = (typeof VisualRole)[keyof typeof VisualRole];

/**
 * <p>The definition for the slot.</p>
 * @public
 */
export interface Slot {
  /**
   * <p>The slot ID of the slot.</p>
   * @public
   */
  SlotId?: string | undefined;

  /**
   * <p>The visual ID for the slot.</p>
   * @public
   */
  VisualId?: string | undefined;
}

/**
 * <p>The definition for a <code>TopicTemplate</code>.</p>
 * @public
 */
export interface TopicTemplate {
  /**
   * <p>The template type for the <code>TopicTemplate</code>.</p>
   * @public
   */
  TemplateType?: string | undefined;

  /**
   * <p>The slots for the <code>TopicTemplate</code>.</p>
   * @public
   */
  Slots?: Slot[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ReviewedAnswerErrorCode = {
  DATASET_DOES_NOT_EXIST: "DATASET_DOES_NOT_EXIST",
  DUPLICATED_ANSWER: "DUPLICATED_ANSWER",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  INVALID_DATA: "INVALID_DATA",
  INVALID_DATASET_ARN: "INVALID_DATASET_ARN",
  MISSING_ANSWER: "MISSING_ANSWER",
  MISSING_REQUIRED_FIELDS: "MISSING_REQUIRED_FIELDS",
} as const;

/**
 * @public
 */
export type ReviewedAnswerErrorCode = (typeof ReviewedAnswerErrorCode)[keyof typeof ReviewedAnswerErrorCode];

/**
 * <p>The definition for a <code>InvalidTopicReviewedAnswer</code>.</p>
 * @public
 */
export interface InvalidTopicReviewedAnswer {
  /**
   * <p>The answer ID for the <code>InvalidTopicReviewedAnswer</code>.</p>
   * @public
   */
  AnswerId?: string | undefined;

  /**
   * <p>The error that is returned for the <code>InvalidTopicReviewedAnswer</code>.</p>
   * @public
   */
  Error?: ReviewedAnswerErrorCode | undefined;
}

/**
 * <p>The definition for a <code>SucceededTopicReviewedAnswer</code>.</p>
 * @public
 */
export interface SucceededTopicReviewedAnswer {
  /**
   * <p>The answer ID for the <code>SucceededTopicReviewedAnswer</code>.</p>
   * @public
   */
  AnswerId?: string | undefined;
}

/**
 * @public
 */
export interface BatchCreateTopicReviewedAnswerResponse {
  /**
   * <p>The ID for the topic reviewed answer that you want to create. This ID is unique per Amazon Web Services Region
   *          for each Amazon Web Services account.</p>
   * @public
   */
  TopicId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the topic.</p>
   * @public
   */
  TopicArn?: string | undefined;

  /**
   * <p>The definition of Answers that are successfully created.</p>
   * @public
   */
  SucceededAnswers?: SucceededTopicReviewedAnswer[] | undefined;

  /**
   * <p>The definition of Answers that are invalid and not created.</p>
   * @public
   */
  InvalidAnswers?: InvalidTopicReviewedAnswer[] | undefined;

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
 * <p>An internal failure occurred.</p>
 * @public
 */
export class InternalFailureException extends __BaseException {
  readonly name: "InternalFailureException" = "InternalFailureException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  /**
   * <p>The Amazon Web Services request ID for this request.</p>
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalFailureException, __BaseException>) {
    super({
      name: "InternalFailureException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalFailureException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * <p>One or more parameters has a value that isn't valid.</p>
 * @public
 */
export class InvalidParameterValueException extends __BaseException {
  readonly name: "InvalidParameterValueException" = "InvalidParameterValueException";
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
  constructor(opts: __ExceptionOptionType<InvalidParameterValueException, __BaseException>) {
    super({
      name: "InvalidParameterValueException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterValueException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * @public
 * @enum
 */
export const ExceptionResourceType = {
  ACCOUNT_SETTINGS: "ACCOUNT_SETTINGS",
  DATA_SET: "DATA_SET",
  DATA_SOURCE: "DATA_SOURCE",
  GROUP: "GROUP",
  IAMPOLICY_ASSIGNMENT: "IAMPOLICY_ASSIGNMENT",
  INGESTION: "INGESTION",
  NAMESPACE: "NAMESPACE",
  USER: "USER",
  VPC_CONNECTION: "VPC_CONNECTION",
} as const;

/**
 * @public
 */
export type ExceptionResourceType = (typeof ExceptionResourceType)[keyof typeof ExceptionResourceType];

/**
 * <p>One or more resources can't be found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * <p>The resource type for this request.</p>
   * @public
   */
  ResourceType?: ExceptionResourceType | undefined;

  /**
   * <p>The Amazon Web Services request ID for this request.</p>
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Message = opts.Message;
    this.ResourceType = opts.ResourceType;
    this.RequestId = opts.RequestId;
  }
}

/**
 * <p>Access is throttled.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
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
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * @public
 */
export interface BatchDeleteTopicReviewedAnswerRequest {
  /**
   * <p>The ID of the Amazon Web Services account that you want to delete a reviewed answers in.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the topic reviewed answer that you want to delete. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  TopicId: string | undefined;

  /**
   * <p>The Answer IDs of the Answers to be deleted.</p>
   * @public
   */
  AnswerIds?: string[] | undefined;
}

/**
 * @public
 */
export interface BatchDeleteTopicReviewedAnswerResponse {
  /**
   * <p>The ID of the topic reviewed answer that you want to delete. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  TopicId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the topic.</p>
   * @public
   */
  TopicArn?: string | undefined;

  /**
   * <p>The definition of Answers that are successfully deleted.</p>
   * @public
   */
  SucceededAnswers?: SucceededTopicReviewedAnswer[] | undefined;

  /**
   * <p>The definition of Answers that are invalid and not deleted.</p>
   * @public
   */
  InvalidAnswers?: InvalidTopicReviewedAnswer[] | undefined;

  /**
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
 * <p>Updating or deleting a resource can cause an inconsistent state.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
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
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * <p>The bookmarks configuration of an embedded dashboard.</p>
 * @public
 */
export interface BookmarksConfigurations {
  /**
   * <p>A Boolean value that determines whether a user
   *             can bookmark an embedded dashboard.</p>
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * <p>The display options for tile borders for visuals.</p>
 * @public
 */
export interface BorderStyle {
  /**
   * <p>The option to enable display of borders for visuals.</p>
   * @public
   */
  Show?: boolean | undefined;
}

/**
 * <p>The source of the image.</p>
 * @public
 */
export type ImageSource = ImageSource.PublicUrlMember | ImageSource.S3UriMember | ImageSource.$UnknownMember;

/**
 * @public
 */
export namespace ImageSource {
  /**
   * <p>The public URL that points to the source image.</p>
   * @public
   */
  export interface PublicUrlMember {
    PublicUrl: string;
    S3Uri?: never;
    $unknown?: never;
  }

  /**
   * <p>The Amazon S3 URI that points to the source image.</p>
   * @public
   */
  export interface S3UriMember {
    PublicUrl?: never;
    S3Uri: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    PublicUrl?: never;
    S3Uri?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    PublicUrl: (value: string) => T;
    S3Uri: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ImageSource, visitor: Visitor<T>): T => {
    if (value.PublicUrl !== undefined) return visitor.PublicUrl(value.PublicUrl);
    if (value.S3Uri !== undefined) return visitor.S3Uri(value.S3Uri);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The logo image configuration.</p>
 * @public
 */
export interface ImageConfiguration {
  /**
   * <p>The source of the image.</p>
   * @public
   */
  Source?: ImageSource | undefined;
}

/**
 * <p>The image set configuration.</p>
 * @public
 */
export interface ImageSetConfiguration {
  /**
   * <p>The original image.</p>
   * @public
   */
  Original: ImageConfiguration | undefined;
}

/**
 * <p>The logo set configuration.</p>
 * @public
 */
export interface LogoSetConfiguration {
  /**
   * <p>The primary logo.</p>
   * @public
   */
  Primary: ImageSetConfiguration | undefined;

  /**
   * <p>The favicon logo.</p>
   * @public
   */
  Favicon?: ImageSetConfiguration | undefined;
}

/**
 * <p>The logo configuration.</p>
 * @public
 */
export interface LogoConfiguration {
  /**
   * <p>The alt text for the logo.</p>
   * @public
   */
  AltText: string | undefined;

  /**
   * <p>A set of configured logos.</p>
   * @public
   */
  LogoSet: LogoSetConfiguration | undefined;
}

/**
 * <p>The definition of the brand.</p>
 * @public
 */
export interface BrandDefinition {
  /**
   * <p>The name of the brand.</p>
   * @public
   */
  BrandName: string | undefined;

  /**
   * <p>The description of the brand.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The application theme of the brand.</p>
   * @public
   */
  ApplicationTheme?: ApplicationTheme | undefined;

  /**
   * <p>The logo configuration of the brand.</p>
   * @public
   */
  LogoConfiguration?: LogoConfiguration | undefined;
}

/**
 * @public
 * @enum
 */
export const BrandStatus = {
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  CREATE_SUCCEEDED: "CREATE_SUCCEEDED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type BrandStatus = (typeof BrandStatus)[keyof typeof BrandStatus];

/**
 * <p>The logo image.</p>
 * @public
 */
export interface Image {
  /**
   * <p>The source of the logo image.</p>
   * @public
   */
  Source?: ImageSource | undefined;

  /**
   * <p>The URL that points to the generated logo image.</p>
   * @public
   */
  GeneratedImageUrl?: string | undefined;
}

/**
 * <p>The image set.</p>
 * @public
 */
export interface ImageSet {
  /**
   * <p>The original image.</p>
   * @public
   */
  Original: Image | undefined;

  /**
   * <p>The image with the height set to 64 pixels.</p>
   * @public
   */
  Height64?: Image | undefined;

  /**
   * <p>The image with the height set to 32 pixels.</p>
   * @public
   */
  Height32?: Image | undefined;
}

/**
 * <p>A set of logos.</p>
 * @public
 */
export interface LogoSet {
  /**
   * <p>The primary logo.</p>
   * @public
   */
  Primary: ImageSet | undefined;

  /**
   * <p>The favicon logo.</p>
   * @public
   */
  Favicon?: ImageSet | undefined;
}

/**
 * <p>The logo configuration.</p>
 * @public
 */
export interface Logo {
  /**
   * <p>The alt text for the logo.</p>
   * @public
   */
  AltText: string | undefined;

  /**
   * <p>A set of configured logos.</p>
   * @public
   */
  LogoSet: LogoSet | undefined;
}

/**
 * @public
 * @enum
 */
export const BrandVersionStatus = {
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  CREATE_SUCCEEDED: "CREATE_SUCCEEDED",
} as const;

/**
 * @public
 */
export type BrandVersionStatus = (typeof BrandVersionStatus)[keyof typeof BrandVersionStatus];

/**
 * <p>The details of the brand.</p>
 * @public
 */
export interface BrandDetail {
  /**
   * <p>The ID of the Quick Suite brand.</p>
   * @public
   */
  BrandId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the brand.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The status of the brand.</p>
   * @public
   */
  BrandStatus?: BrandStatus | undefined;

  /**
   * <p>The time that the brand was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The last time the brand was updated.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>The ID of the version.</p>
   * @public
   */
  VersionId?: string | undefined;

  /**
   * <p>The status of the version.</p>
   * @public
   */
  VersionStatus?: BrandVersionStatus | undefined;

  /**
   * <p>A list of errors that occurred during the most recent brand operation.</p>
   * @public
   */
  Errors?: string[] | undefined;

  /**
   * <p>The logo details.</p>
   * @public
   */
  Logo?: Logo | undefined;
}

/**
 * <p>A summary of the brand.</p>
 * @public
 */
export interface BrandSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the brand.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID of the Quick Suite brand.</p>
   * @public
   */
  BrandId?: string | undefined;

  /**
   * <p>The name of the brand.</p>
   * @public
   */
  BrandName?: string | undefined;

  /**
   * <p>The description of the brand.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The status of the brand.</p>
   * @public
   */
  BrandStatus?: BrandStatus | undefined;

  /**
   * <p>The time that the brand was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The time when the brand was last updated.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;
}

/**
 * <p>A calculated column for a dataset.</p>
 * @public
 */
export interface CalculatedColumn {
  /**
   * <p>Column name.</p>
   * @public
   */
  ColumnName: string | undefined;

  /**
   * <p>A unique ID to identify a calculated column. During a dataset update, if the column ID
   *             of a calculated column matches that of an existing calculated column, Quick Sight
   *             preserves the existing calculated column.</p>
   * @public
   */
  ColumnId: string | undefined;

  /**
   * <p>An expression that defines the calculated column.</p>
   * @public
   */
  Expression: string | undefined;
}

/**
 * @public
 */
export interface CancelIngestionRequest {
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
 */
export interface CancelIngestionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the data ingestion.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>An ID for the ingestion.</p>
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
 * <p>The resource specified already exists. </p>
 * @public
 */
export class ResourceExistsException extends __BaseException {
  readonly name: "ResourceExistsException" = "ResourceExistsException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * <p>The resource type for this request.</p>
   * @public
   */
  ResourceType?: ExceptionResourceType | undefined;

  /**
   * <p>The Amazon Web Services request ID for this request.</p>
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceExistsException, __BaseException>) {
    super({
      name: "ResourceExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceExistsException.prototype);
    this.Message = opts.Message;
    this.ResourceType = opts.ResourceType;
    this.RequestId = opts.RequestId;
  }
}

/**
 * @public
 * @enum
 */
export const CapabilityState = {
  DENY: "DENY",
} as const;

/**
 * @public
 */
export type CapabilityState = (typeof CapabilityState)[keyof typeof CapabilityState];

/**
 * <p>A set of actions that correspond to Amazon Quick Sight permissions.</p>
 * @public
 */
export interface Capabilities {
  /**
   * <p>The ability to export to CSV files from the UI.</p>
   * @public
   */
  ExportToCsv?: CapabilityState | undefined;

  /**
   * <p>The ability to export to Excel files from the UI.</p>
   * @public
   */
  ExportToExcel?: CapabilityState | undefined;

  /**
   * <p>The ability to export to PDF files from the UI.</p>
   * @public
   */
  ExportToPdf?: CapabilityState | undefined;

  /**
   * <p>The ability to print reports.</p>
   * @public
   */
  PrintReports?: CapabilityState | undefined;

  /**
   * <p>The ability to export to Create and Update themes.</p>
   * @public
   */
  CreateAndUpdateThemes?: CapabilityState | undefined;

  /**
   * <p>The ability to add or run anomaly detection.</p>
   * @public
   */
  AddOrRunAnomalyDetectionForAnalyses?: CapabilityState | undefined;

  /**
   * <p>The ability to share analyses.</p>
   * @public
   */
  ShareAnalyses?: CapabilityState | undefined;

  /**
   * <p>The ability to create and update datasets.</p>
   * @public
   */
  CreateAndUpdateDatasets?: CapabilityState | undefined;

  /**
   * <p>The ability to share datasets.</p>
   * @public
   */
  ShareDatasets?: CapabilityState | undefined;

  /**
   * <p>The ability to subscribe to email reports.</p>
   * @public
   */
  SubscribeDashboardEmailReports?: CapabilityState | undefined;

  /**
   * <p>The ability to create and update email reports.</p>
   * @public
   */
  CreateAndUpdateDashboardEmailReports?: CapabilityState | undefined;

  /**
   * <p>The ability to share dashboards.</p>
   * @public
   */
  ShareDashboards?: CapabilityState | undefined;

  /**
   * <p>The ability to create and update threshold alerts.</p>
   * @public
   */
  CreateAndUpdateThresholdAlerts?: CapabilityState | undefined;

  /**
   * <p>The ability to rename shared folders.</p>
   * @public
   */
  RenameSharedFolders?: CapabilityState | undefined;

  /**
   * <p>The ability to create shared folders.</p>
   * @public
   */
  CreateSharedFolders?: CapabilityState | undefined;

  /**
   * <p>The ability to create and update data sources.</p>
   * @public
   */
  CreateAndUpdateDataSources?: CapabilityState | undefined;

  /**
   * <p>The ability to share data sources.</p>
   * @public
   */
  ShareDataSources?: CapabilityState | undefined;

  /**
   * <p>The ability to view account SPICE capacity.</p>
   * @public
   */
  ViewAccountSPICECapacity?: CapabilityState | undefined;

  /**
   * <p>The ability to create a SPICE dataset.</p>
   * @public
   */
  CreateSPICEDataset?: CapabilityState | undefined;

  /**
   * <p>The ability to export to PDF files in scheduled email reports.</p>
   * @public
   */
  ExportToPdfInScheduledReports?: CapabilityState | undefined;

  /**
   * <p>The ability to export to CSV files in scheduled email reports.</p>
   * @public
   */
  ExportToCsvInScheduledReports?: CapabilityState | undefined;

  /**
   * <p>The ability to export to Excel files in scheduled email reports.</p>
   * @public
   */
  ExportToExcelInScheduledReports?: CapabilityState | undefined;

  /**
   * <p>The ability to include content in scheduled email reports.</p>
   * @public
   */
  IncludeContentInScheduledReportsEmail?: CapabilityState | undefined;

  /**
   * <p>The ability to perform dashboard-related actions.</p>
   * @public
   */
  Dashboard?: CapabilityState | undefined;

  /**
   * <p>The ability to perform analysis-related actions.</p>
   * @public
   */
  Analysis?: CapabilityState | undefined;

  /**
   * <p>The ability to perform automate-related actions.</p>
   * @public
   */
  Automate?: CapabilityState | undefined;

  /**
   * <p>The ability to perform flow-related actions.</p>
   * @public
   */
  Flow?: CapabilityState | undefined;

  /**
   * <p>The ability to enable approvals for flow share.</p>
   * @public
   */
  PublishWithoutApproval?: CapabilityState | undefined;

  /**
   * <p>The ability to use Bedrock models for general knowledge step in flows.</p>
   * @public
   */
  UseBedrockModels?: CapabilityState | undefined;

  /**
   * <p>The ability to use UI Agent step to perform tasks on public websites.</p>
   * @public
   */
  PerformFlowUiTask?: CapabilityState | undefined;

  /**
   * <p>The ability to use internet to enhance results in Chat Agents, Flows, and Quick Research.
   * 	          Web search queries will be processed securely in an Amazon Web Services region <code>us-east-1</code>.</p>
   * @public
   */
  UseAgentWebSearch?: CapabilityState | undefined;

  /**
   * <p>The ability to use knowledge bases to specify content from external applications.</p>
   * @public
   */
  KnowledgeBase?: CapabilityState | undefined;

  /**
   * <p>The ability to perform actions in external services through Action connectors. Actions allow users to interact with third-party systems.</p>
   * @public
   */
  Action?: CapabilityState | undefined;

  /**
   * <p>The ability to perform space-related actions.</p>
   * @public
   */
  Space?: CapabilityState | undefined;

  /**
   * <p>The ability to perform chat-related actions.</p>
   * @public
   */
  ChatAgent?: CapabilityState | undefined;

  /**
   * <p>The ability to create chat agents.</p>
   * @public
   */
  CreateChatAgents?: CapabilityState | undefined;

  /**
   * <p>The ability to perform research-related actions.</p>
   * @public
   */
  Research?: CapabilityState | undefined;
}

/**
 * @public
 * @enum
 */
export const ColumnDataType = {
  DATETIME: "DATETIME",
  DECIMAL: "DECIMAL",
  INTEGER: "INTEGER",
  STRING: "STRING",
} as const;

/**
 * @public
 */
export type ColumnDataType = (typeof ColumnDataType)[keyof typeof ColumnDataType];

/**
 * @public
 * @enum
 */
export const ColumnDataSubType = {
  FIXED: "FIXED",
  FLOAT: "FLOAT",
} as const;

/**
 * @public
 */
export type ColumnDataSubType = (typeof ColumnDataSubType)[keyof typeof ColumnDataSubType];

/**
 * <p>A transform operation that casts a column to a different type.</p>
 * @public
 */
export interface CastColumnTypeOperation {
  /**
   * <p>Column name.</p>
   * @public
   */
  ColumnName: string | undefined;

  /**
   * <p>New column data type.</p>
   * @public
   */
  NewColumnType: ColumnDataType | undefined;

  /**
   * <p>The sub data type of the new column. Sub types are only available for decimal columns that are part of a SPICE dataset.</p>
   * @public
   */
  SubType?: ColumnDataSubType | undefined;

  /**
   * <p>When casting a column from string to datetime type, you can supply a string in a
   *             format supported by Quick Sight to denote the source data format.</p>
   * @public
   */
  Format?: string | undefined;
}

/**
 * <p>A transform operation that changes the data types of one or more columns in the dataset.</p>
 * @public
 */
export interface CastColumnTypesOperation {
  /**
   * <p>Alias for this operation.</p>
   * @public
   */
  Alias: string | undefined;

  /**
   * <p>The source transform operation that provides input data for the type casting.</p>
   * @public
   */
  Source: TransformOperationSource | undefined;

  /**
   * <p>The list of column type casting operations to perform.</p>
   * @public
   */
  CastColumnTypeOperations: CastColumnTypeOperation[] | undefined;
}

/**
 * @public
 * @enum
 */
export const CategoryFilterFunction = {
  CONTAINS: "CONTAINS",
  EXACT: "EXACT",
} as const;

/**
 * @public
 */
export type CategoryFilterFunction = (typeof CategoryFilterFunction)[keyof typeof CategoryFilterFunction];

/**
 * @public
 * @enum
 */
export const CategoryFilterType = {
  CUSTOM_FILTER: "CUSTOM_FILTER",
  CUSTOM_FILTER_LIST: "CUSTOM_FILTER_LIST",
  FILTER_LIST: "FILTER_LIST",
} as const;

/**
 * @public
 */
export type CategoryFilterType = (typeof CategoryFilterType)[keyof typeof CategoryFilterType];

/**
 * <p>A structure that represents the cell value synonym.</p>
 * @public
 */
export interface CellValueSynonym {
  /**
   * <p>The cell value.</p>
   * @public
   */
  CellValue?: string | undefined;

  /**
   * <p>Other names or aliases for the cell value.</p>
   * @public
   */
  Synonyms?: string[] | undefined;
}

/**
 * <p>A structure that represents a collective constant.</p>
 * @public
 */
export interface CollectiveConstant {
  /**
   * <p>A list of values for the collective constant.</p>
   * @public
   */
  ValueList?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ColumnDataRole = {
  DIMENSION: "DIMENSION",
  MEASURE: "MEASURE",
} as const;

/**
 * @public
 */
export type ColumnDataRole = (typeof ColumnDataRole)[keyof typeof ColumnDataRole];

/**
 * <p>Metadata that contains a description for a column.</p>
 * @public
 */
export interface ColumnDescription {
  /**
   * <p>The text of a description for a column.</p>
   * @public
   */
  Text?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const GeoSpatialCountryCode = {
  US: "US",
} as const;

/**
 * @public
 */
export type GeoSpatialCountryCode = (typeof GeoSpatialCountryCode)[keyof typeof GeoSpatialCountryCode];

/**
 * <p>Geospatial column group that denotes a hierarchy.</p>
 * @public
 */
export interface GeoSpatialColumnGroup {
  /**
   * <p>A display name for the hierarchy.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Country code.</p>
   * @public
   */
  CountryCode?: GeoSpatialCountryCode | undefined;

  /**
   * <p>Columns in this hierarchy.</p>
   * @public
   */
  Columns: string[] | undefined;
}

/**
 * <p>Groupings of columns that work together in certain Quick Sight features. This is
 *             a variant type structure. For this structure to be valid, only one of the attributes can
 *             be non-null.</p>
 * @public
 */
export interface ColumnGroup {
  /**
   * <p>Geospatial column group that denotes a hierarchy.</p>
   * @public
   */
  GeoSpatialColumnGroup?: GeoSpatialColumnGroup | undefined;
}

/**
 * <p>A structure describing the name, data type, and geographic role of the columns.</p>
 * @public
 */
export interface ColumnGroupColumnSchema {
  /**
   * <p>The name of the column group's column schema.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>The column group schema.</p>
 * @public
 */
export interface ColumnGroupSchema {
  /**
   * <p>The name of the column group schema.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A structure containing the list of schemas for column group columns.</p>
   * @public
   */
  ColumnGroupColumnSchemaList?: ColumnGroupColumnSchema[] | undefined;
}

/**
 * <p>A rule defined to grant access on one or more restricted columns.
 *             Each dataset can have multiple rules.
 *             To create a restricted column, you add it to one or more rules.
 *             Each rule must contain at least one column and at least one user or group.
 *             To be able to see a restricted column, a user or group needs to be added
 *             to a rule for that column.</p>
 * @public
 */
export interface ColumnLevelPermissionRule {
  /**
   * <p>An array of Amazon Resource Names (ARNs) for Quick Sight users or groups.</p>
   * @public
   */
  Principals?: string[] | undefined;

  /**
   * <p>An array of column names.</p>
   * @public
   */
  ColumnNames?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ColumnOrderingType = {
  GREATER_IS_BETTER: "GREATER_IS_BETTER",
  LESSER_IS_BETTER: "LESSER_IS_BETTER",
  SPECIFIED: "SPECIFIED",
} as const;

/**
 * @public
 */
export type ColumnOrderingType = (typeof ColumnOrderingType)[keyof typeof ColumnOrderingType];

/**
 * <p>The column schema.</p>
 * @public
 */
export interface ColumnSchema {
  /**
   * <p>The name of the column schema.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The data type of the column schema.</p>
   * @public
   */
  DataType?: string | undefined;

  /**
   * <p>The geographic role of the column schema.</p>
   * @public
   */
  GeographicRole?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const GeoSpatialDataRole = {
  CITY: "CITY",
  COUNTRY: "COUNTRY",
  COUNTY: "COUNTY",
  LATITUDE: "LATITUDE",
  LONGITUDE: "LONGITUDE",
  POSTCODE: "POSTCODE",
  STATE: "STATE",
} as const;

/**
 * @public
 */
export type GeoSpatialDataRole = (typeof GeoSpatialDataRole)[keyof typeof GeoSpatialDataRole];

/**
 * <p>A tag for a column in a
 *             <code>
 *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_TagColumnOperation.html">TagColumnOperation</a>
 *             </code>
 *             structure. This is a
 *             variant type structure. For this structure to be valid, only one of the attributes can
 *             be non-null.</p>
 * @public
 */
export interface ColumnTag {
  /**
   * <p>A geospatial role for a column.</p>
   * @public
   */
  ColumnGeographicRole?: GeoSpatialDataRole | undefined;

  /**
   * <p>A description for a column.</p>
   * @public
   */
  ColumnDescription?: ColumnDescription | undefined;
}

/**
 * @public
 * @enum
 */
export const ColumnTagName = {
  COLUMN_DESCRIPTION: "COLUMN_DESCRIPTION",
  COLUMN_GEOGRAPHIC_ROLE: "COLUMN_GEOGRAPHIC_ROLE",
} as const;

/**
 * @public
 */
export type ColumnTagName = (typeof ColumnTagName)[keyof typeof ColumnTagName];

/**
 * <p>Specifies a column to be unpivoted, transforming it from a column into rows with associated values.</p>
 * @public
 */
export interface ColumnToUnpivot {
  /**
   * <p>The name of the column to unpivot from the source data.</p>
   * @public
   */
  ColumnName?: string | undefined;

  /**
   * <p>The value to assign to this column in the unpivoted result, typically the column name or a descriptive label.</p>
   * @public
   */
  NewValue?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const UndefinedSpecifiedValueType = {
  LEAST: "LEAST",
  MOST: "MOST",
} as const;

/**
 * @public
 */
export type UndefinedSpecifiedValueType =
  (typeof UndefinedSpecifiedValueType)[keyof typeof UndefinedSpecifiedValueType];

/**
 * <p>A structure that represents a comparative order.</p>
 * @public
 */
export interface ComparativeOrder {
  /**
   * <p>The ordering type for a column. Valid values for this structure are <code>GREATER_IS_BETTER</code>, <code>LESSER_IS_BETTER</code> and <code>SPECIFIED</code>.</p>
   * @public
   */
  UseOrdering?: ColumnOrderingType | undefined;

  /**
   * <p>The list of columns to be used in the ordering.</p>
   * @public
   */
  SpecifedOrder?: string[] | undefined;

  /**
   * <p>The treat of undefined specified values. Valid values for this structure are <code>LEAST</code> and <code>MOST</code>.</p>
   * @public
   */
  TreatUndefinedSpecifiedValues?: UndefinedSpecifiedValueType | undefined;
}

/**
 * <p>A resource is already in a state that indicates an operation is happening that must complete
 * 			before a new update can be applied.</p>
 * @public
 */
export class ConcurrentUpdatingException extends __BaseException {
  readonly name: "ConcurrentUpdatingException" = "ConcurrentUpdatingException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentUpdatingException, __BaseException>) {
    super({
      name: "ConcurrentUpdatingException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentUpdatingException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * @public
 */
export interface CreateAccountCustomizationRequest {
  /**
   * <p>The ID for the Amazon Web Services account that you want to customize Quick Sight for.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The Quick Sight namespace that you want to add customizations to.</p>
   * @public
   */
  Namespace?: string | undefined;

  /**
   * <p>The Quick Sight customizations you're adding. You can add
   *             these to an Amazon Web Services account and a QuickSight namespace. </p>
   *          <p>For example, you can add a default theme by setting <code>AccountCustomization</code>
   *             to the midnight theme: <code>"AccountCustomization": \{ "DefaultTheme":
   *                 "arn:aws:quicksight::aws:theme/MIDNIGHT" \}</code>. Or, you can add a custom theme by
   *             specifying <code>"AccountCustomization": \{ "DefaultTheme":
   *                 "arn:aws:quicksight:us-west-2:111122223333:theme/bdb844d0-0fe9-4d9d-b520-0fe602d93639"
   *                 \}</code>. </p>
   * @public
   */
  AccountCustomization: AccountCustomization | undefined;

  /**
   * <p>A list of the tags that you want to attach to this resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateAccountCustomizationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the customization that you created for this Amazon Web Services account.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID for the Amazon Web Services account that you want to customize Quick Sight for.</p>
   * @public
   */
  AwsAccountId?: string | undefined;

  /**
   * <p>The namespace associated with the customization you're creating. </p>
   * @public
   */
  Namespace?: string | undefined;

  /**
   * <p>The Quick Sight customizations you're adding. </p>
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
 * <p>This resource is currently unavailable.</p>
 * @public
 */
export class ResourceUnavailableException extends __BaseException {
  readonly name: "ResourceUnavailableException" = "ResourceUnavailableException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  /**
   * <p>The resource type for this request.</p>
   * @public
   */
  ResourceType?: ExceptionResourceType | undefined;

  /**
   * <p>The Amazon Web Services request ID for this request.</p>
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceUnavailableException, __BaseException>) {
    super({
      name: "ResourceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceUnavailableException.prototype);
    this.Message = opts.Message;
    this.ResourceType = opts.ResourceType;
    this.RequestId = opts.RequestId;
  }
}

/**
 * @public
 */
export interface CreateAccountSubscriptionRequest {
  /**
   * <p>The edition of Amazon Quick Sight that you want your account to have. Currently, you can
   *             choose from <code>ENTERPRISE</code> or
   *                 <code>ENTERPRISE_AND_Q</code>.</p>
   *          <p>If you choose <code>ENTERPRISE_AND_Q</code>, the following parameters are
   *             required:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>FirstName</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LastName</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EmailAddress</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ContactNumber</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Edition?: Edition | undefined;

  /**
   * <p>The method that you want to use to authenticate your Quick Sight account.</p>
   *          <p>If you choose <code>ACTIVE_DIRECTORY</code>, provide an <code>ActiveDirectoryName</code>
   *             and an <code>AdminGroup</code> associated with your Active Directory.</p>
   *          <p>If you choose <code>IAM_IDENTITY_CENTER</code>, provide an <code>AdminGroup</code> associated with your IAM Identity Center account.</p>
   * @public
   */
  AuthenticationMethod: AuthenticationMethodOption | undefined;

  /**
   * <p>The Amazon Web Services account ID of the account that you're using to create your Quick Sight account.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The name of your Amazon Quick Sight account. This name is unique over all of Amazon Web Services, and it appears only when users sign in. You can't change
   *                 <code>AccountName</code> value after the Amazon Quick Sight account is
   *             created.</p>
   * @public
   */
  AccountName: string | undefined;

  /**
   * <p>The email address that you want Quick Sight to send notifications to regarding your Quick Sight account or Quick Sight subscription.</p>
   * @public
   */
  NotificationEmail: string | undefined;

  /**
   * <p>The name of your Active Directory. This field is required if <code>ACTIVE_DIRECTORY</code> is the selected authentication method of the new Quick Sight account.</p>
   * @public
   */
  ActiveDirectoryName?: string | undefined;

  /**
   * <p>The realm of the Active Directory that is associated with your Quick Sight account. This field is required if <code>ACTIVE_DIRECTORY</code> is the selected authentication method of the new Quick Sight account.</p>
   * @public
   */
  Realm?: string | undefined;

  /**
   * <p>The ID of the Active Directory that is associated with your Quick Sight account.</p>
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * <p>The admin group associated with your Active Directory or IAM Identity Center account. Either this field or the <code>AdminProGroup</code> field is required if <code>ACTIVE_DIRECTORY</code> or <code>IAM_IDENTITY_CENTER</code> is the selected authentication method of the new Quick Sight account.</p>
   *          <p>For more information about using IAM Identity Center in Amazon Quick Sight, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/sec-identity-management-identity-center.html">Using IAM Identity Center with Amazon Quick Sight Enterprise Edition</a> in the Amazon Quick Sight User Guide. For more information about using Active Directory in Amazon Quick Sight, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/aws-directory-service.html">Using Active Directory with Amazon Quick Sight Enterprise Edition</a> in the Amazon Quick Sight User Guide.</p>
   * @public
   */
  AdminGroup?: string[] | undefined;

  /**
   * <p>The author group associated with your Active Directory or IAM Identity Center account.</p>
   *          <p>For more information about using IAM Identity Center in Amazon Quick Sight, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/sec-identity-management-identity-center.html">Using IAM Identity Center with Amazon Quick Sight Enterprise Edition</a> in the Amazon Quick Sight User Guide. For more information about using Active Directory in Amazon Quick Sight, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/aws-directory-service.html">Using Active Directory with Amazon Quick Sight Enterprise Edition</a> in the Amazon Quick Sight User Guide.</p>
   * @public
   */
  AuthorGroup?: string[] | undefined;

  /**
   * <p>The reader group associated with your Active Directory or IAM Identity Center account.</p>
   *          <p>For more information about using IAM Identity Center in Amazon Quick Sight, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/sec-identity-management-identity-center.html">Using IAM Identity Center with Amazon Quick Sight Enterprise Edition</a> in the Amazon Quick Sight User Guide. For more information about using Active Directory in Amazon Quick Sight, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/aws-directory-service.html">Using Active Directory with Amazon Quick Sight Enterprise Edition</a> in the Amazon Quick Sight User Guide.</p>
   * @public
   */
  ReaderGroup?: string[] | undefined;

  /**
   * <p>The admin pro group associated with your Active Directory or IAM Identity Center account. Either this field or the <code>AdminGroup</code> field is required if <code>ACTIVE_DIRECTORY</code> or <code>IAM_IDENTITY_CENTER</code> is the selected authentication method of the new Quick Sight account.</p>
   *          <p>For more information about using IAM Identity Center in Amazon Quick Sight, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/sec-identity-management-identity-center.html">Using IAM Identity Center with Amazon Quick Sight Enterprise Edition</a> in the Amazon Quick Sight User Guide. For more information about using Active Directory in Amazon Quick Sight, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/aws-directory-service.html">Using Active Directory with Amazon Quick Sight Enterprise Edition</a> in the Amazon Quick Sight User Guide.</p>
   * @public
   */
  AdminProGroup?: string[] | undefined;

  /**
   * <p>The author pro group associated with your Active Directory or IAM Identity Center account.</p>
   *          <p>For more information about using IAM Identity Center in Amazon Quick Sight, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/sec-identity-management-identity-center.html">Using IAM Identity Center with Amazon Quick Sight Enterprise Edition</a> in the Amazon Quick Sight User Guide. For more information about using Active Directory in Amazon Quick Sight, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/aws-directory-service.html">Using Active Directory with Amazon Quick Sight Enterprise Edition</a> in the Amazon Quick Sight User Guide.</p>
   * @public
   */
  AuthorProGroup?: string[] | undefined;

  /**
   * <p>The reader pro group associated with your Active Directory or IAM Identity Center account.</p>
   *          <p>For more information about using IAM Identity Center in Amazon Quick Sight, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/sec-identity-management-identity-center.html">Using IAM Identity Center with Amazon Quick Sight Enterprise Edition</a> in the Amazon Quick Sight User Guide. For more information about using Active Directory in Amazon Quick Sight, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/aws-directory-service.html">Using Active Directory with Amazon Quick Sight Enterprise Edition</a> in the Amazon Quick Sight User Guide.</p>
   * @public
   */
  ReaderProGroup?: string[] | undefined;

  /**
   * <p>The first name of the author of the Amazon Quick Sight account to use for future
   *             communications. This field is required if <code>ENTERPPRISE_AND_Q</code> is the selected
   *             edition of the new Amazon Quick Sight account.</p>
   * @public
   */
  FirstName?: string | undefined;

  /**
   * <p>The last name of the author of the Amazon Quick Sight account to use for future
   *             communications. This field is required if <code>ENTERPPRISE_AND_Q</code> is the selected
   *             edition of the new Amazon Quick Sight account.</p>
   * @public
   */
  LastName?: string | undefined;

  /**
   * <p>The email address of the author of the Amazon Quick Sight account to use for future
   *             communications. This field is required if <code>ENTERPPRISE_AND_Q</code> is the selected
   *             edition of the new Amazon Quick Sight account.</p>
   * @public
   */
  EmailAddress?: string | undefined;

  /**
   * <p>A 10-digit phone number for the author of the Amazon Quick Sight account to use for
   *             future communications. This field is required if <code>ENTERPPRISE_AND_Q</code> is the
   *             selected edition of the new Amazon Quick Sight account.</p>
   * @public
   */
  ContactNumber?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the IAM Identity Center instance.</p>
   * @public
   */
  IAMIdentityCenterInstanceArn?: string | undefined;
}

/**
 * <p>A <code>SignupResponse</code> object that contains a summary of a newly created account.</p>
 * @public
 */
export interface SignupResponse {
  /**
   * <p>A Boolean that is <code>TRUE</code> if the Amazon Quick Sight uses IAM as an
   *             authentication method.</p>
   * @public
   */
  IAMUser?: boolean | undefined;

  /**
   * <p>The user login name for your Amazon Quick Sight account.</p>
   * @public
   */
  userLoginName?: string | undefined;

  /**
   * <p>The name of your Quick Sight account.</p>
   * @public
   */
  accountName?: string | undefined;

  /**
   * <p>The type of Active Directory that is being used to authenticate the Amazon Quick Sight
   *             account. Valid values are <code>SIMPLE_AD</code>, <code>AD_CONNECTOR</code>, and
   *                 <code>MICROSOFT_AD</code>.</p>
   * @public
   */
  directoryType?: string | undefined;
}

/**
 * @public
 */
export interface CreateAccountSubscriptionResponse {
  /**
   * <p>A <code>SignupResponse</code> object that returns information about a newly created Quick Sight account.</p>
   * @public
   */
  SignupResponse?: SignupResponse | undefined;

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
 * <p>One or more preconditions aren't met.</p>
 * @public
 */
export class PreconditionNotMetException extends __BaseException {
  readonly name: "PreconditionNotMetException" = "PreconditionNotMetException";
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
  constructor(opts: __ExceptionOptionType<PreconditionNotMetException, __BaseException>) {
    super({
      name: "PreconditionNotMetException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PreconditionNotMetException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * <p>Permission for the resource.</p>
 * @public
 */
export interface ResourcePermission {
  /**
   * <p>The Amazon Resource Name (ARN) of the principal. This can be one of the
   *             following:</p>
   *          <ul>
   *             <li>
   *                <p>The ARN of an Quick Sight user or group associated with a data source or dataset. (This is common.)</p>
   *             </li>
   *             <li>
   *                <p>The ARN of an Quick Sight user, group, or namespace associated with an analysis, dashboard, template, or theme. Namespace sharing is not supported for action connectors. (This is common.)</p>
   *             </li>
   *             <li>
   *                <p>The ARN of an Amazon Web Services account root: This is an IAM ARN rather than a Quick Sight
   *                     ARN. Use this option only to share resources (templates) across Amazon Web Services accounts. Account root sharing is not supported for action connectors.
   *                     (This is less common.) </p>
   *             </li>
   *          </ul>
   * @public
   */
  Principal: string | undefined;

  /**
   * <p>The IAM action to grant or revoke permissions on.</p>
   * @public
   */
  Actions: string[] | undefined;
}

/**
 * @public
 */
export interface CreateActionConnectorRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the action connector.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>A unique identifier for the action connector. This ID must be unique within the Amazon Web Services account. The <code>ActionConnectorId</code> must not
   * 	          start with the prefix <code>quicksuite-</code>
   *          </p>
   * @public
   */
  ActionConnectorId: string | undefined;

  /**
   * <p>A descriptive name for the action connector.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The type of action connector.</p>
   * @public
   */
  Type: ActionConnectorType | undefined;

  /**
   * <p>The authentication configuration for connecting to the external service. This includes the authentication type, base URL, and authentication metadata such as client credentials or API keys.</p>
   * @public
   */
  AuthenticationConfig: AuthConfig | undefined;

  /**
   * <p>An optional description of the action connector.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The permissions configuration that defines which users, groups, or namespaces can access this action connector and what operations they can perform.</p>
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;

  /**
   * <p>The ARN of the VPC connection to use for secure connectivity to the external service.</p>
   * @public
   */
  VpcConnectionArn?: string | undefined;

  /**
   * <p>A list of tags to apply to the action connector for resource management and organization.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateActionConnectorResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the created action connector.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The creation status of the action connector.</p>
   * @public
   */
  CreationStatus?: ResourceStatus | undefined;

  /**
   * <p>The unique identifier of the created action connector.</p>
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
 * <p>A date-time parameter.</p>
 * @public
 */
export interface DateTimeParameter {
  /**
   * <p>A display name for the date-time parameter.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The values for the date-time parameter.</p>
   * @public
   */
  Values: Date[] | undefined;
}

/**
 * <p>A decimal parameter.</p>
 * @public
 */
export interface DecimalParameter {
  /**
   * <p>A display name for the decimal parameter.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The values for the decimal parameter.</p>
   * @public
   */
  Values: number[] | undefined;
}

/**
 * <p>An integer parameter.</p>
 * @public
 */
export interface IntegerParameter {
  /**
   * <p>The name of the integer parameter.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The values for the integer parameter.</p>
   * @public
   */
  Values: number[] | undefined;
}

/**
 * <p>A string parameter.</p>
 * @public
 */
export interface StringParameter {
  /**
   * <p>A display name for a string parameter.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The values of a string parameter.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * <p>A list of Quick Sight parameters and the list's override values.</p>
 * @public
 */
export interface _Parameters {
  /**
   * <p>The parameters that have a data type of string.</p>
   * @public
   */
  StringParameters?: StringParameter[] | undefined;

  /**
   * <p>The parameters that have a data type of integer.</p>
   * @public
   */
  IntegerParameters?: IntegerParameter[] | undefined;

  /**
   * <p>The parameters that have a data type of decimal.</p>
   * @public
   */
  DecimalParameters?: DecimalParameter[] | undefined;

  /**
   * <p>The parameters that have a data type of date-time.</p>
   * @public
   */
  DateTimeParameters?: DateTimeParameter[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ValidationStrategyMode = {
  LENIENT: "LENIENT",
  STRICT: "STRICT",
} as const;

/**
 * @public
 */
export type ValidationStrategyMode = (typeof ValidationStrategyMode)[keyof typeof ValidationStrategyMode];

/**
 * <p>The option to relax the validation that is required to create and update analyses, dashboards, and templates with definition objects. When you set this value to <code>LENIENT</code>, validation is skipped for specific errors.</p>
 * @public
 */
export interface ValidationStrategy {
  /**
   * <p>The mode of validation for the asset to be created or updated. When you set this value to <code>STRICT</code>, strict validation for every error is enforced. When you set this value to <code>LENIENT</code>, validation is skipped for specific UI errors.</p>
   * @public
   */
  Mode: ValidationStrategyMode | undefined;
}

/**
 * @public
 */
export interface CreateAnalysisRequest {
  /**
   * <p>The ID of the Amazon Web Services account where you are creating an analysis.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the analysis that you're creating. This ID displays in the URL of the
   *             analysis.</p>
   * @public
   */
  AnalysisId: string | undefined;

  /**
   * <p>A descriptive name for the analysis that you're creating. This name displays for the
   *             analysis in the Amazon Quick Sight console. </p>
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
   * <p>A structure that describes the principals and the resource-level permissions on an
   *             analysis. You can use the <code>Permissions</code> structure to grant permissions by
   *             providing a list of Identity and Access Management (IAM) action information for each
   *             principal listed by Amazon Resource Name (ARN). </p>
   *          <p>To specify no permissions, omit <code>Permissions</code>.</p>
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;

  /**
   * <p>A source entity to use for the analysis that you're creating. This metadata structure
   *             contains details that describe a source template and one or more datasets.</p>
   *          <p>Either a <code>SourceEntity</code> or a <code>Definition</code> must be provided in
   *             order for the request to be valid.</p>
   * @public
   */
  SourceEntity?: AnalysisSourceEntity | undefined;

  /**
   * <p>The ARN for the theme to apply to the analysis that you're creating. To see the theme
   *             in the Amazon Quick Sight console, make sure that you have access to it.</p>
   * @public
   */
  ThemeArn?: string | undefined;

  /**
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the
   *             analysis.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The definition of an analysis.</p>
   *          <p>A definition is the data model of all features in a Dashboard, Template, or Analysis.</p>
   *          <p>Either a <code>SourceEntity</code> or a <code>Definition</code> must be provided in
   *             order for the request to be valid.</p>
   * @public
   */
  Definition?: AnalysisDefinition | undefined;

  /**
   * <p>The option to relax the validation needed to create an analysis with definition objects. This skips the validation step for specific errors.</p>
   * @public
   */
  ValidationStrategy?: ValidationStrategy | undefined;

  /**
   * <p>When you create the analysis, Amazon Quick Sight adds the analysis to these folders.</p>
   * @public
   */
  FolderArns?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateAnalysisResponse {
  /**
   * <p>The ARN for the analysis.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID of the analysis.</p>
   * @public
   */
  AnalysisId?: string | undefined;

  /**
   * <p>The status of the creation of the analysis. </p>
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
 * <p>A limit is exceeded.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * <p>Limit exceeded.</p>
   * @public
   */
  ResourceType?: ExceptionResourceType | undefined;

  /**
   * <p>The Amazon Web Services request ID for this request.</p>
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
    this.Message = opts.Message;
    this.ResourceType = opts.ResourceType;
    this.RequestId = opts.RequestId;
  }
}

/**
 * <p>This error indicates that you are calling an operation on an Amazon Quick Suite
 * 			subscription where the edition doesn't include support for that operation. Amazon
 * 			Quick Suite currently has Standard Edition and Enterprise Edition. Not every operation and
 * 			capability is available in every edition.</p>
 * @public
 */
export class UnsupportedUserEditionException extends __BaseException {
  readonly name: "UnsupportedUserEditionException" = "UnsupportedUserEditionException";
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
  constructor(opts: __ExceptionOptionType<UnsupportedUserEditionException, __BaseException>) {
    super({
      name: "UnsupportedUserEditionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedUserEditionException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * @public
 */
export interface CreateBrandRequest {
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

  /**
   * <p>A map of the key-value pairs that are assigned to the brand.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateBrandResponse {
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
 * <p>An internal service exception.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.Message = opts.Message;
  }
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
 * <p>A transform operation that creates calculated columns. Columns created in one such
 *             operation form a lexical closure.</p>
 * @public
 */
export interface CreateColumnsOperation {
  /**
   * <p>Alias for this operation.</p>
   * @public
   */
  Alias?: string | undefined;

  /**
   * <p>The source transform operation that provides input data for creating new calculated columns.</p>
   * @public
   */
  Source?: TransformOperationSource | undefined;

  /**
   * <p>Calculated columns to create.</p>
   * @public
   */
  Columns: CalculatedColumn[] | undefined;
}

/**
 * @public
 */
export interface CreateCustomPermissionsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that you want to create the custom permissions profile in.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The name of the custom permissions profile that you want to create.</p>
   * @public
   */
  CustomPermissionsName: string | undefined;

  /**
   * <p>A set of actions to include in the custom permissions profile.</p>
   * @public
   */
  Capabilities?: Capabilities | undefined;

  /**
   * <p>The tags to associate with the custom permissions profile.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateCustomPermissionsResponse {
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
 * <p>The drill down options for data points in a dashbaord.</p>
 * @public
 */
export interface DataPointDrillUpDownOption {
  /**
   * <p>The status of the drill down options of data points.</p>
   * @public
   */
  AvailabilityStatus?: DashboardBehavior | undefined;
}

/**
 * <p>The data point menu options of a dashboard.</p>
 * @public
 */
export interface DataPointMenuLabelOption {
  /**
   * <p>The status of the data point menu options.</p>
   * @public
   */
  AvailabilityStatus?: DashboardBehavior | undefined;
}

/**
 * <p>The data point tooltip options.</p>
 * @public
 */
export interface DataPointTooltipOption {
  /**
   * <p>The status of the data point tool tip options.</p>
   * @public
   */
  AvailabilityStatus?: DashboardBehavior | undefined;
}

/**
 * <p>Adds Q&A capabilities to a dashboard. If no topic is linked, Dashboard Q&A uses the data values that are rendered on the dashboard. End users can use Dashboard Q&A to ask for different slices of the data that they see on the dashboard. If a topic is linked, Topic Q&A is enabled.</p>
 * @public
 */
export interface DataQAEnabledOption {
  /**
   * <p>The status of the Data Q&A option on the dashboard.</p>
   * @public
   */
  AvailabilityStatus?: DashboardBehavior | undefined;
}

/**
 * <p>Executive summary option.</p>
 * @public
 */
export interface DataStoriesSharingOption {
  /**
   * <p>Availability status.</p>
   * @public
   */
  AvailabilityStatus?: DashboardBehavior | undefined;
}

/**
 * <p>Data stories sharing option.</p>
 * @public
 */
export interface ExecutiveSummaryOption {
  /**
   * <p>Availability status.</p>
   * @public
   */
  AvailabilityStatus?: DashboardBehavior | undefined;
}

/**
 * <p>Export to .csv option.</p>
 * @public
 */
export interface ExportToCSVOption {
  /**
   * <p>Availability status.</p>
   * @public
   */
  AvailabilityStatus?: DashboardBehavior | undefined;
}

/**
 * <p>Determines whether or not hidden fields are visible on exported dashbaords.</p>
 * @public
 */
export interface ExportWithHiddenFieldsOption {
  /**
   * <p>The status of the export with hidden fields options.</p>
   * @public
   */
  AvailabilityStatus?: DashboardBehavior | undefined;
}

/**
 * <p>Determines if Actions in Amazon Quick Suite are enabled in a dashboard..</p>
 * @public
 */
export interface QuickSuiteActionsOption {
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
export const DashboardUIState = {
  COLLAPSED: "COLLAPSED",
  EXPANDED: "EXPANDED",
} as const;

/**
 * @public
 */
export type DashboardUIState = (typeof DashboardUIState)[keyof typeof DashboardUIState];

/**
 * <p>Sheet controls option.</p>
 * @public
 */
export interface SheetControlsOption {
  /**
   * <p>Visibility state.</p>
   * @public
   */
  VisibilityState?: DashboardUIState | undefined;
}

/**
 * <p>The sheet layout maximization options of a dashbaord.</p>
 * @public
 */
export interface SheetLayoutElementMaximizationOption {
  /**
   * <p>The status of the sheet layout maximization options of a dashbaord.</p>
   * @public
   */
  AvailabilityStatus?: DashboardBehavior | undefined;
}

/**
 * <p>The axis sort options for a visual.</p>
 * @public
 */
export interface VisualAxisSortOption {
  /**
   * <p>The availaiblity status of a visual's axis sort options.</p>
   * @public
   */
  AvailabilityStatus?: DashboardBehavior | undefined;
}

/**
 * <p>Determines if hidden fields are included in an exported dashboard.</p>
 * @public
 */
export interface ExportHiddenFieldsOption {
  /**
   * <p>The status of the export hidden fields options of a dashbaord.</p>
   * @public
   */
  AvailabilityStatus?: DashboardBehavior | undefined;
}

/**
 * <p>The visual publish options of a visual in a dashboard</p>
 * @public
 */
export interface DashboardVisualPublishOptions {
  /**
   * <p>Determines if hidden fields are included in an exported dashboard.</p>
   * @public
   */
  ExportHiddenFieldsOption?: ExportHiddenFieldsOption | undefined;
}

/**
 * <p>Dashboard publish options.</p>
 * @public
 */
export interface DashboardPublishOptions {
  /**
   * <p>Ad hoc (one-time) filtering option.</p>
   * @public
   */
  AdHocFilteringOption?: AdHocFilteringOption | undefined;

  /**
   * <p>Export to .csv option.</p>
   * @public
   */
  ExportToCSVOption?: ExportToCSVOption | undefined;

  /**
   * <p>Sheet controls option.</p>
   * @public
   */
  SheetControlsOption?: SheetControlsOption | undefined;

  /**
   * <p>The visual publish options of a visual in a dashboard.</p>
   *
   * @deprecated VisualPublishOptions property will reach its end of standard support in a future release. To perform this action, use ExportWithHiddenFields.
   * @public
   */
  VisualPublishOptions?: DashboardVisualPublishOptions | undefined;

  /**
   * <p>The sheet layout maximization options of a dashbaord.</p>
   * @public
   */
  SheetLayoutElementMaximizationOption?: SheetLayoutElementMaximizationOption | undefined;

  /**
   * <p>The menu options of a visual in a dashboard.</p>
   * @public
   */
  VisualMenuOption?: VisualMenuOption | undefined;

  /**
   * <p>The axis sort options of a dashboard.</p>
   * @public
   */
  VisualAxisSortOption?: VisualAxisSortOption | undefined;

  /**
   * <p>Determines if hidden fields are exported with a dashboard.</p>
   * @public
   */
  ExportWithHiddenFieldsOption?: ExportWithHiddenFieldsOption | undefined;

  /**
   * <p>The drill-down options of data points in a dashboard.</p>
   * @public
   */
  DataPointDrillUpDownOption?: DataPointDrillUpDownOption | undefined;

  /**
   * <p>The data point menu label options of a dashboard.</p>
   * @public
   */
  DataPointMenuLabelOption?: DataPointMenuLabelOption | undefined;

  /**
   * <p>The data point tool tip options of a dashboard.</p>
   * @public
   */
  DataPointTooltipOption?: DataPointTooltipOption | undefined;

  /**
   * <p>Adds Q&A capabilities to an Quick Sight dashboard. If no topic is linked, Dashboard Q&A uses the data values that are rendered on the dashboard. End users can use Dashboard Q&A to ask for different slices of the data that they see on the dashboard. If a topic is linked, Topic Q&A is used.</p>
   * @public
   */
  DataQAEnabledOption?: DataQAEnabledOption | undefined;

  /**
   * <p>Determines if Actions in Amazon Quick Suite are enabled in a dashboard.</p>
   * @public
   */
  QuickSuiteActionsOption?: QuickSuiteActionsOption | undefined;

  /**
   * <p>Executive summary option.</p>
   * @public
   */
  ExecutiveSummaryOption?: ExecutiveSummaryOption | undefined;

  /**
   * <p>Data stories sharing option.</p>
   * @public
   */
  DataStoriesSharingOption?: DataStoriesSharingOption | undefined;
}

/**
 * <p>The contents of a dashboard.</p>
 * @public
 */
export interface DashboardVersionDefinition {
  /**
   * <p>An array of dataset identifier declarations. With
   *             this mapping,you can use dataset identifiers instead of dataset Amazon Resource Names (ARNs) throughout the dashboard's sub-structures.</p>
   * @public
   */
  DataSetIdentifierDeclarations: DataSetIdentifierDeclaration[] | undefined;

  /**
   * <p>An array of sheet definitions for a dashboard.</p>
   * @public
   */
  Sheets?: SheetDefinition[] | undefined;

  /**
   * <p>An array of calculated field definitions for the dashboard.</p>
   * @public
   */
  CalculatedFields?: CalculatedField[] | undefined;

  /**
   * <p>The parameter declarations for a dashboard. Parameters are named variables that can transfer a value for use by an action or an object.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/parameters-in-quicksight.html">Parameters in Amazon Quick Sight</a> in the <i>Amazon Quick Suite User Guide</i>.</p>
   * @public
   */
  ParameterDeclarations?: ParameterDeclaration[] | undefined;

  /**
   * <p>The filter definitions for a dashboard.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/adding-a-filter.html">Filtering Data in Amazon Quick Sight</a> in the <i>Amazon Quick Suite User Guide</i>.</p>
   * @public
   */
  FilterGroups?: FilterGroup[] | undefined;

  /**
   * <p>An array of dashboard-level column configurations. Column configurations
   *             are used to set the default formatting for a column that
   *             is used throughout a dashboard. </p>
   * @public
   */
  ColumnConfigurations?: ColumnConfiguration[] | undefined;

  /**
   * <p>The configuration for default analysis settings.</p>
   * @public
   */
  AnalysisDefaults?: AnalysisDefaults | undefined;

  /**
   * <p>An array of option definitions for a dashboard.</p>
   * @public
   */
  Options?: AssetOptions | undefined;

  /**
   * <p>The static files for the definition.</p>
   * @public
   */
  StaticFiles?: StaticFile[] | undefined;
}

/**
 * <p>A structure that contains the configuration of a shareable link to the
 *             dashboard.</p>
 * @public
 */
export interface LinkSharingConfiguration {
  /**
   * <p>A structure that contains the permissions of a shareable link.</p>
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;
}

/**
 * <p>Dashboard source template.</p>
 * @public
 */
export interface DashboardSourceTemplate {
  /**
   * <p>Dataset references.</p>
   * @public
   */
  DataSetReferences: DataSetReference[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * <p>Dashboard source entity.</p>
 * @public
 */
export interface DashboardSourceEntity {
  /**
   * <p>Source template.</p>
   * @public
   */
  SourceTemplate?: DashboardSourceTemplate | undefined;
}

/**
 * @public
 */
export interface CreateDashboardRequest {
  /**
   * <p>The ID of the Amazon Web Services account where you want to create the
   *             dashboard.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dashboard, also added to the IAM policy.</p>
   * @public
   */
  DashboardId: string | undefined;

  /**
   * <p>The display name of the dashboard.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The parameters for the creation of the dashboard, which you want to use to override
   *             the default settings. A dashboard can have any type of parameters, and some parameters
   *             might accept multiple values. </p>
   * @public
   */
  Parameters?: _Parameters | undefined;

  /**
   * <p>A structure that contains the permissions of the dashboard. You can use this structure
   *             for granting permissions by providing a list of IAM action information
   *             for each principal ARN. </p>
   *          <p>To specify no permissions, omit the permissions list.</p>
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;

  /**
   * <p>The entity that you are using as a source when you create the dashboard. In
   *                 <code>SourceEntity</code>, you specify the type of object you're using as source.
   *             You can only create a dashboard from a template, so you use a
   *                 <code>SourceTemplate</code> entity. If you need to create a dashboard from an
   *             analysis, first convert the analysis to a template by using the <code>
   *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateTemplate.html">CreateTemplate</a>
   *             </code> API operation. For <code>SourceTemplate</code>,
   *             specify the Amazon Resource Name (ARN) of the source template. The
   *                 <code>SourceTemplate</code>ARN can contain any Amazon Web Services account and any
   *                 Amazon Quick Sight-supported Amazon Web Services Region. </p>
   *          <p>Use the <code>DataSetReferences</code> entity within <code>SourceTemplate</code> to
   *             list the replacement datasets for the placeholders listed in the original. The schema in
   *             each dataset must match its placeholder. </p>
   *          <p>Either a <code>SourceEntity</code> or a <code>Definition</code> must be provided in
   *             order for the request to be valid.</p>
   * @public
   */
  SourceEntity?: DashboardSourceEntity | undefined;

  /**
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the
   *             dashboard.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

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
   *             you add a value for this field, it overrides the value that is used in the source
   *             entity. The theme ARN must exist in the same Amazon Web Services account where you create
   *             the dashboard.</p>
   * @public
   */
  ThemeArn?: string | undefined;

  /**
   * <p>The definition of a dashboard.</p>
   *          <p>A definition is the data model of all features in a Dashboard, Template, or Analysis.</p>
   *          <p>Either a <code>SourceEntity</code> or a <code>Definition</code> must be provided in
   *             order for the request to be valid.</p>
   * @public
   */
  Definition?: DashboardVersionDefinition | undefined;

  /**
   * <p>The option to relax the validation needed to create a dashboard with definition
   *             objects. This option skips the validation step for specific errors.</p>
   * @public
   */
  ValidationStrategy?: ValidationStrategy | undefined;

  /**
   * <p>When you create the dashboard, Amazon Quick Sight adds the dashboard to these
   *             folders.</p>
   * @public
   */
  FolderArns?: string[] | undefined;

  /**
   * <p>A structure that contains the permissions of a shareable link to the dashboard.</p>
   * @public
   */
  LinkSharingConfiguration?: LinkSharingConfiguration | undefined;

  /**
   * <p>A list of analysis Amazon Resource Names (ARNs) to be linked to the dashboard.</p>
   * @public
   */
  LinkEntities?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateDashboardResponse {
  /**
   * <p>The ARN of the dashboard.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ARN of the dashboard, including the version number of the first version that is
   *             created.</p>
   * @public
   */
  VersionArn?: string | undefined;

  /**
   * <p>The ID for the dashboard.</p>
   * @public
   */
  DashboardId?: string | undefined;

  /**
   * <p>The status of the dashboard creation request.</p>
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
 * <p>Specifies the source of data for a destination table, including the transform operation and column mappings.</p>
 * @public
 */
export interface DestinationTableSource {
  /**
   * <p>The identifier of the transform operation that provides data to the destination table.</p>
   * @public
   */
  TransformOperationId: string | undefined;
}

/**
 * <p>Defines a destination table in data preparation that receives the final transformed data.</p>
 * @public
 */
export interface DestinationTable {
  /**
   * <p>Alias for the destination table.</p>
   * @public
   */
  Alias: string | undefined;

  /**
   * <p>The source configuration that specifies which transform operation provides data to this destination table.</p>
   * @public
   */
  Source: DestinationTableSource | undefined;
}

/**
 * @public
 * @enum
 */
export const InputColumnDataType = {
  BIT: "BIT",
  BOOLEAN: "BOOLEAN",
  DATETIME: "DATETIME",
  DECIMAL: "DECIMAL",
  INTEGER: "INTEGER",
  JSON: "JSON",
  STRING: "STRING",
} as const;

/**
 * @public
 */
export type InputColumnDataType = (typeof InputColumnDataType)[keyof typeof InputColumnDataType];

/**
 * <p>Metadata for a column that is used as the input of a transform operation.</p>
 * @public
 */
export interface InputColumn {
  /**
   * <p>The name of this column in the underlying data source.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A unique identifier for the input column.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The data type of the column.</p>
   * @public
   */
  Type: InputColumnDataType | undefined;

  /**
   * <p>The sub data type of the column. Sub types are only available for decimal columns that are part of a SPICE dataset.</p>
   * @public
   */
  SubType?: ColumnDataSubType | undefined;
}

/**
 * <p>References a parent dataset that serves as a data source, including its columns and metadata.</p>
 * @public
 */
export interface ParentDataSet {
  /**
   * <p>The Amazon Resource Name (ARN) of the parent dataset.</p>
   * @public
   */
  DataSetArn: string | undefined;

  /**
   * <p>The list of input columns available from the parent dataset.</p>
   * @public
   */
  InputColumns: InputColumn[] | undefined;
}

/**
 * <p>A source table that provides initial data from either a physical table or parent dataset.</p>
 * @public
 */
export interface SourceTable {
  /**
   * <p>The identifier of the physical table that serves as the data source.</p>
   * @public
   */
  PhysicalTableId?: string | undefined;

  /**
   * <p>A parent dataset that serves as the data source instead of a physical table.</p>
   * @public
   */
  DataSet?: ParentDataSet | undefined;
}

/**
 * @public
 * @enum
 */
export const DataSetDateComparisonFilterOperator = {
  AFTER: "AFTER",
  AFTER_OR_EQUALS_TO: "AFTER_OR_EQUALS_TO",
  BEFORE: "BEFORE",
  BEFORE_OR_EQUALS_TO: "BEFORE_OR_EQUALS_TO",
} as const;

/**
 * @public
 */
export type DataSetDateComparisonFilterOperator =
  (typeof DataSetDateComparisonFilterOperator)[keyof typeof DataSetDateComparisonFilterOperator];

/**
 * <p>Represents a date value used in filter conditions.</p>
 * @public
 */
export interface DataSetDateFilterValue {
  /**
   * <p>A static date value used for filtering.</p>
   * @public
   */
  StaticValue?: Date | undefined;
}

/**
 * <p>A filter condition that compares date values using operators like <code>BEFORE</code>, <code>AFTER</code>, or
 *            their inclusive variants.</p>
 * @public
 */
export interface DataSetDateComparisonFilterCondition {
  /**
   * <p>The comparison operator to use, such as <code>BEFORE</code>, <code>BEFORE_OR_EQUALS_TO</code>, <code>AFTER</code>,
   *            or <code>AFTER_OR_EQUALS_TO</code>.</p>
   * @public
   */
  Operator: DataSetDateComparisonFilterOperator | undefined;

  /**
   * <p>The date value to compare against.</p>
   * @public
   */
  Value?: DataSetDateFilterValue | undefined;
}

/**
 * <p>A filter condition that filters date values within a specified range.</p>
 * @public
 */
export interface DataSetDateRangeFilterCondition {
  /**
   * <p>The minimum date value for the range filter.</p>
   * @public
   */
  RangeMinimum?: DataSetDateFilterValue | undefined;

  /**
   * <p>The maximum date value for the range filter.</p>
   * @public
   */
  RangeMaximum?: DataSetDateFilterValue | undefined;

  /**
   * <p>Whether to include the minimum value in the filter range.</p>
   * @public
   */
  IncludeMinimum?: boolean | undefined;

  /**
   * <p>Whether to include the maximum value in the filter range.</p>
   * @public
   */
  IncludeMaximum?: boolean | undefined;
}

/**
 * <p>A filter condition for date columns, supporting both comparison and range-based filtering.</p>
 * @public
 */
export interface DataSetDateFilterCondition {
  /**
   * <p>The name of the date column to filter.</p>
   * @public
   */
  ColumnName?: string | undefined;

  /**
   * <p>A comparison-based filter condition for the date column.</p>
   * @public
   */
  ComparisonFilterCondition?: DataSetDateComparisonFilterCondition | undefined;

  /**
   * <p>A range-based filter condition for the date column, filtering values between minimum and maximum dates.</p>
   * @public
   */
  RangeFilterCondition?: DataSetDateRangeFilterCondition | undefined;
}

/**
 * @public
 * @enum
 */
export const DataSetNumericComparisonFilterOperator = {
  DOES_NOT_EQUAL: "DOES_NOT_EQUAL",
  EQUALS: "EQUALS",
  GREATER_THAN: "GREATER_THAN",
  GREATER_THAN_OR_EQUALS_TO: "GREATER_THAN_OR_EQUALS_TO",
  LESS_THAN: "LESS_THAN",
  LESS_THAN_OR_EQUALS_TO: "LESS_THAN_OR_EQUALS_TO",
} as const;

/**
 * @public
 */
export type DataSetNumericComparisonFilterOperator =
  (typeof DataSetNumericComparisonFilterOperator)[keyof typeof DataSetNumericComparisonFilterOperator];

/**
 * <p>Represents a numeric value used in filter conditions.</p>
 * @public
 */
export interface DataSetNumericFilterValue {
  /**
   * <p>A static numeric value used for filtering.</p>
   * @public
   */
  StaticValue?: number | undefined;
}

/**
 * <p>A filter condition that compares numeric values using operators like <code>EQUALS</code>, <code>GREATER_THAN</code>,
 *            or <code>LESS_THAN</code>.</p>
 * @public
 */
export interface DataSetNumericComparisonFilterCondition {
  /**
   * <p>The comparison operator to use, such as <code>EQUALS</code>, <code>GREATER_THAN</code>, <code>LESS_THAN</code>,
   *            or their variants.</p>
   * @public
   */
  Operator: DataSetNumericComparisonFilterOperator | undefined;

  /**
   * <p>The numeric value to compare against.</p>
   * @public
   */
  Value?: DataSetNumericFilterValue | undefined;
}

/**
 * <p>A filter condition that filters numeric values within a specified range.</p>
 * @public
 */
export interface DataSetNumericRangeFilterCondition {
  /**
   * <p>The minimum numeric value for the range filter.</p>
   * @public
   */
  RangeMinimum?: DataSetNumericFilterValue | undefined;

  /**
   * <p>The maximum numeric value for the range filter.</p>
   * @public
   */
  RangeMaximum?: DataSetNumericFilterValue | undefined;

  /**
   * <p>Whether to include the minimum value in the filter range.</p>
   * @public
   */
  IncludeMinimum?: boolean | undefined;

  /**
   * <p>Whether to include the maximum value in the filter range.</p>
   * @public
   */
  IncludeMaximum?: boolean | undefined;
}

/**
 * <p>A filter condition for numeric columns, supporting both comparison and range-based filtering.</p>
 * @public
 */
export interface DataSetNumericFilterCondition {
  /**
   * <p>The name of the numeric column to filter.</p>
   * @public
   */
  ColumnName?: string | undefined;

  /**
   * <p>A comparison-based filter condition for the numeric column.</p>
   * @public
   */
  ComparisonFilterCondition?: DataSetNumericComparisonFilterCondition | undefined;

  /**
   * <p>A range-based filter condition for the numeric column, filtering values between minimum and maximum numbers.</p>
   * @public
   */
  RangeFilterCondition?: DataSetNumericRangeFilterCondition | undefined;
}

/**
 * @public
 * @enum
 */
export const DataSetStringComparisonFilterOperator = {
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
export type DataSetStringComparisonFilterOperator =
  (typeof DataSetStringComparisonFilterOperator)[keyof typeof DataSetStringComparisonFilterOperator];

/**
 * <p>Represents a string value used in filter conditions.</p>
 * @public
 */
export interface DataSetStringFilterValue {
  /**
   * <p>A static string value used for filtering.</p>
   * @public
   */
  StaticValue?: string | undefined;
}

/**
 * <p>A filter condition that compares string values using operators like <code>EQUALS</code>, <code>CONTAINS</code>,
 *            or <code>STARTS_WITH</code>.</p>
 * @public
 */
export interface DataSetStringComparisonFilterCondition {
  /**
   * <p>The comparison operator to use, such as <code>EQUALS</code>, <code>CONTAINS</code>, <code>STARTS_WITH</code>,
   *            <code>ENDS_WITH</code>, or their negations.</p>
   * @public
   */
  Operator: DataSetStringComparisonFilterOperator | undefined;

  /**
   * <p>The string value to compare against.</p>
   * @public
   */
  Value?: DataSetStringFilterValue | undefined;
}

/**
 * @public
 * @enum
 */
export const DataSetStringListFilterOperator = {
  EXCLUDE: "EXCLUDE",
  INCLUDE: "INCLUDE",
} as const;

/**
 * @public
 */
export type DataSetStringListFilterOperator =
  (typeof DataSetStringListFilterOperator)[keyof typeof DataSetStringListFilterOperator];

/**
 * <p>Represents a list of string values used in filter conditions.</p>
 * @public
 */
export interface DataSetStringListFilterValue {
  /**
   * <p>A list of static string values used for filtering.</p>
   * @public
   */
  StaticValues?: string[] | undefined;
}

/**
 * <p>A filter condition that includes or excludes string values from a specified list.</p>
 * @public
 */
export interface DataSetStringListFilterCondition {
  /**
   * <p>The list operator to use, either <code>INCLUDE</code> to match values in the list or <code>EXCLUDE</code> to
   *            filter out values in the list.</p>
   * @public
   */
  Operator: DataSetStringListFilterOperator | undefined;

  /**
   * <p>The list of string values to include or exclude in the filter.</p>
   * @public
   */
  Values?: DataSetStringListFilterValue | undefined;
}

/**
 * <p>A filter condition for string columns, supporting both comparison and list-based filtering.</p>
 * @public
 */
export interface DataSetStringFilterCondition {
  /**
   * <p>The name of the string column to filter.</p>
   * @public
   */
  ColumnName?: string | undefined;

  /**
   * <p>A comparison-based filter condition for the string column.</p>
   * @public
   */
  ComparisonFilterCondition?: DataSetStringComparisonFilterCondition | undefined;

  /**
   * <p>A list-based filter condition that includes or excludes values from a specified list.</p>
   * @public
   */
  ListFilterCondition?: DataSetStringListFilterCondition | undefined;
}

/**
 * <p>A transform operation that filters rows based on a condition.</p>
 * @public
 */
export interface FilterOperation {
  /**
   * <p>An expression that must evaluate to a Boolean value. Rows for which the expression
   *             evaluates to true are kept in the dataset.</p>
   * @public
   */
  ConditionExpression?: string | undefined;

  /**
   * <p>A string-based filter condition within a filter operation.</p>
   * @public
   */
  StringFilterCondition?: DataSetStringFilterCondition | undefined;

  /**
   * <p>A numeric-based filter condition within a filter operation.</p>
   * @public
   */
  NumericFilterCondition?: DataSetNumericFilterCondition | undefined;

  /**
   * <p>A date-based filter condition within a filter operation.</p>
   * @public
   */
  DateFilterCondition?: DataSetDateFilterCondition | undefined;
}

/**
 * <p>A transform operation that applies one or more filter conditions.</p>
 * @public
 */
export interface FiltersOperation {
  /**
   * <p>Alias for this operation.</p>
   * @public
   */
  Alias: string | undefined;

  /**
   * <p>The source transform operation that provides input data for filtering.</p>
   * @public
   */
  Source: TransformOperationSource | undefined;

  /**
   * <p>The list of filter operations to apply.</p>
   * @public
   */
  FilterOperations: FilterOperation[] | undefined;
}

/**
 * <p>Specifies the source table and column mappings for an import table operation.</p>
 * @public
 */
export interface ImportTableOperationSource {
  /**
   * <p>The identifier of the source table to import data from.</p>
   * @public
   */
  SourceTableId: string | undefined;

  /**
   * <p>The mappings between source column identifiers and target column identifiers during the import.</p>
   * @public
   */
  ColumnIdMappings?: DataSetColumnIdMapping[] | undefined;
}

/**
 * <p>A transform operation that imports data from a source table.</p>
 * @public
 */
export interface ImportTableOperation {
  /**
   * <p>Alias for this operation.</p>
   * @public
   */
  Alias: string | undefined;

  /**
   * <p>The source configuration that specifies which source table to import and any column mappings.</p>
   * @public
   */
  Source: ImportTableOperationSource | undefined;
}

/**
 * <p>Specifies a mapping to override the name of an output column from a transform operation.</p>
 * @public
 */
export interface OutputColumnNameOverride {
  /**
   * <p>The original name of the column from the source transform operation.</p>
   * @public
   */
  SourceColumnName?: string | undefined;

  /**
   * <p>The new name to assign to the column in the output.</p>
   * @public
   */
  OutputColumnName: string | undefined;
}

/**
 * <p>Properties that control how columns are handled for a join operand, including column name overrides.</p>
 * @public
 */
export interface JoinOperandProperties {
  /**
   * <p>A list of column name overrides to apply to the join operand's output columns.</p>
   * @public
   */
  OutputColumnNameOverrides: OutputColumnNameOverride[] | undefined;
}

/**
 * @public
 * @enum
 */
export const JoinOperationType = {
  INNER: "INNER",
  LEFT: "LEFT",
  OUTER: "OUTER",
  RIGHT: "RIGHT",
} as const;

/**
 * @public
 */
export type JoinOperationType = (typeof JoinOperationType)[keyof typeof JoinOperationType];

/**
 * <p>A transform operation that combines data from two sources based on specified join conditions.</p>
 * @public
 */
export interface JoinOperation {
  /**
   * <p>Alias for this operation.</p>
   * @public
   */
  Alias: string | undefined;

  /**
   * <p>The left operand for the join operation.</p>
   * @public
   */
  LeftOperand: TransformOperationSource | undefined;

  /**
   * <p>The right operand for the join operation.</p>
   * @public
   */
  RightOperand: TransformOperationSource | undefined;

  /**
   * <p>The type of join to perform, such as <code>INNER</code>, <code>LEFT</code>, <code>RIGHT</code>, or <code>OUTER</code>.</p>
   * @public
   */
  Type: JoinOperationType | undefined;

  /**
   * <p>The join condition that specifies how to match rows between the left and right operands.</p>
   * @public
   */
  OnClause: string | undefined;

  /**
   * <p>Properties that control how the left operand's columns are handled in the join result.</p>
   * @public
   */
  LeftOperandProperties?: JoinOperandProperties | undefined;

  /**
   * <p>Properties that control how the right operand's columns are handled in the join result.</p>
   * @public
   */
  RightOperandProperties?: JoinOperandProperties | undefined;
}

/**
 * <p>Specifies a label value to be pivoted into a separate column, including the new column name and identifier.</p>
 * @public
 */
export interface PivotedLabel {
  /**
   * <p>The label value from the source data to be pivoted.</p>
   * @public
   */
  LabelName: string | undefined;

  /**
   * <p>The name for the new column created from this pivoted label.</p>
   * @public
   */
  NewColumnName: string | undefined;

  /**
   * <p>A unique identifier for the new column created from this pivoted label.</p>
   * @public
   */
  NewColumnId: string | undefined;
}

/**
 * <p>Configuration for a pivot operation, specifying which column contains labels and how to pivot them.</p>
 * @public
 */
export interface PivotConfiguration {
  /**
   * <p>The name of the column that contains the labels to be pivoted into separate columns.</p>
   * @public
   */
  LabelColumnName?: string | undefined;

  /**
   * <p>The list of specific label values to pivot into separate columns.</p>
   * @public
   */
  PivotedLabels: PivotedLabel[] | undefined;
}

/**
 * <p>Configuration for how to handle value columns in pivot operations, including aggregation settings.</p>
 * @public
 */
export interface ValueColumnConfiguration {
  /**
   * <p>The aggregation function to apply when multiple values map to the same pivoted cell.</p>
   * @public
   */
  AggregationFunction?: DataPrepAggregationFunction | undefined;
}

/**
 * <p>A transform operation that pivots data by converting row values into columns.</p>
 * @public
 */
export interface PivotOperation {
  /**
   * <p>Alias for this operation.</p>
   * @public
   */
  Alias: string | undefined;

  /**
   * <p>The source transform operation that provides input data for pivoting.</p>
   * @public
   */
  Source: TransformOperationSource | undefined;

  /**
   * <p>The list of column names to group by when performing the pivot operation.</p>
   * @public
   */
  GroupByColumnNames?: string[] | undefined;

  /**
   * <p>Configuration for how to aggregate values when multiple rows map to the same pivoted column.</p>
   * @public
   */
  ValueColumnConfiguration: ValueColumnConfiguration | undefined;

  /**
   * <p>Configuration that specifies which labels to pivot and how to structure the resulting columns.</p>
   * @public
   */
  PivotConfiguration: PivotConfiguration | undefined;
}

/**
 * <p>A transform operation that projects columns. Operations that come after a projection
 *             can only refer to projected columns.</p>
 * @public
 */
export interface ProjectOperation {
  /**
   * <p>Alias for this operation.</p>
   * @public
   */
  Alias?: string | undefined;

  /**
   * <p>The source transform operation that provides input data for column projection.</p>
   * @public
   */
  Source?: TransformOperationSource | undefined;

  /**
   * <p>Projected columns.</p>
   * @public
   */
  ProjectedColumns: string[] | undefined;
}

/**
 * <p>A transform operation that renames a column.</p>
 * @public
 */
export interface RenameColumnOperation {
  /**
   * <p>The name of the column to be renamed.</p>
   * @public
   */
  ColumnName: string | undefined;

  /**
   * <p>The new name for the column.</p>
   * @public
   */
  NewColumnName: string | undefined;
}

/**
 * <p>A transform operation that renames one or more columns in the dataset.</p>
 * @public
 */
export interface RenameColumnsOperation {
  /**
   * <p>Alias for this operation.</p>
   * @public
   */
  Alias: string | undefined;

  /**
   * <p>The source transform operation that provides input data for column renaming.</p>
   * @public
   */
  Source: TransformOperationSource | undefined;

  /**
   * <p>The list of column rename operations to perform, specifying old and new column names.</p>
   * @public
   */
  RenameColumnOperations: RenameColumnOperation[] | undefined;
}

/**
 * <p>A transform operation that converts columns into rows, normalizing the data structure.</p>
 * @public
 */
export interface UnpivotOperation {
  /**
   * <p>Alias for this operation.</p>
   * @public
   */
  Alias: string | undefined;

  /**
   * <p>The source transform operation that provides input data for unpivoting.</p>
   * @public
   */
  Source: TransformOperationSource | undefined;

  /**
   * <p>The list of columns to unpivot from the source data.</p>
   * @public
   */
  ColumnsToUnpivot: ColumnToUnpivot[] | undefined;

  /**
   * <p>The name for the new column that will contain the unpivoted column names.</p>
   * @public
   */
  UnpivotedLabelColumnName: string | undefined;

  /**
   * <p>A unique identifier for the new column that will contain the unpivoted column names.</p>
   * @public
   */
  UnpivotedLabelColumnId: string | undefined;

  /**
   * <p>The name for the new column that will contain the unpivoted values.</p>
   * @public
   */
  UnpivotedValueColumnName: string | undefined;

  /**
   * <p>A unique identifier for the new column that will contain the unpivoted values.</p>
   * @public
   */
  UnpivotedValueColumnId: string | undefined;
}

/**
 * <p>A step in data preparation that performs a specific operation on the data.</p>
 * @public
 */
export interface TransformStep {
  /**
   * <p>A transform step that brings data from a source table.</p>
   * @public
   */
  ImportTableStep?: ImportTableOperation | undefined;

  /**
   * <p>A transform operation that projects columns. Operations that come after a projection
   *             can only refer to projected columns.</p>
   * @public
   */
  ProjectStep?: ProjectOperation | undefined;

  /**
   * <p>A transform step that applies filter conditions.</p>
   * @public
   */
  FiltersStep?: FiltersOperation | undefined;

  /**
   * <p>A transform operation that creates calculated columns. Columns created in one such
   *             operation form a lexical closure.</p>
   * @public
   */
  CreateColumnsStep?: CreateColumnsOperation | undefined;

  /**
   * <p>A transform step that changes the names of one or more columns.</p>
   * @public
   */
  RenameColumnsStep?: RenameColumnsOperation | undefined;

  /**
   * <p>A transform step that changes the data types of one or more columns.</p>
   * @public
   */
  CastColumnTypesStep?: CastColumnTypesOperation | undefined;

  /**
   * <p>A transform step that combines data from two sources based on specified join conditions.</p>
   * @public
   */
  JoinStep?: JoinOperation | undefined;

  /**
   * <p>A transform step that groups data and applies aggregation functions to calculate summary values.</p>
   * @public
   */
  AggregateStep?: AggregateOperation | undefined;

  /**
   * <p>A transform step that converts row values into columns to reshape the data structure.</p>
   * @public
   */
  PivotStep?: PivotOperation | undefined;

  /**
   * <p>A transform step that converts columns into rows to normalize the data structure.</p>
   * @public
   */
  UnpivotStep?: UnpivotOperation | undefined;

  /**
   * <p>A transform step that combines rows from multiple sources by stacking them vertically.</p>
   * @public
   */
  AppendStep?: AppendOperation | undefined;
}

/**
 * <p>Configuration for data preparation operations, defining the complete pipeline from source tables
 *            through transformations to destination tables.</p>
 * @public
 */
export interface DataPrepConfiguration {
  /**
   * <p>A map of source tables that provide information about underlying sources.</p>
   * @public
   */
  SourceTableMap: Record<string, SourceTable> | undefined;

  /**
   * <p>A map of transformation steps that process the data.</p>
   * @public
   */
  TransformStepMap: Record<string, TransformStep> | undefined;

  /**
   * <p>A map of destination tables that receive the final prepared data.</p>
   * @public
   */
  DestinationTableMap: Record<string, DestinationTable> | undefined;
}

/**
 * <p>The default values of a date time parameter.</p>
 * @public
 */
export interface DateTimeDatasetParameterDefaultValues {
  /**
   * <p>A list of static default values for a given date time parameter.</p>
   * @public
   */
  StaticValues?: Date[] | undefined;
}

/**
 * @public
 * @enum
 */
export const DatasetParameterValueType = {
  MULTI_VALUED: "MULTI_VALUED",
  SINGLE_VALUED: "SINGLE_VALUED",
} as const;

/**
 * @public
 */
export type DatasetParameterValueType = (typeof DatasetParameterValueType)[keyof typeof DatasetParameterValueType];

/**
 * <p>A date time parameter for a dataset.</p>
 * @public
 */
export interface DateTimeDatasetParameter {
  /**
   * <p>An identifier for the parameter that is created in the dataset.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The name of the date time parameter that is created in the dataset.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The value type of the dataset parameter. Valid values are <code>single value</code> or <code>multi value</code>.</p>
   * @public
   */
  ValueType: DatasetParameterValueType | undefined;

  /**
   * <p>The time granularity of the date time parameter.</p>
   * @public
   */
  TimeGranularity?: TimeGranularity | undefined;

  /**
   * <p>A list of default values for a given date time parameter. This structure only accepts static values.</p>
   * @public
   */
  DefaultValues?: DateTimeDatasetParameterDefaultValues | undefined;
}

/**
 * <p>The default values of a decimal parameter.</p>
 * @public
 */
export interface DecimalDatasetParameterDefaultValues {
  /**
   * <p>A list of static default values for a given decimal parameter.</p>
   * @public
   */
  StaticValues?: number[] | undefined;
}

/**
 * <p>A decimal parameter for a dataset.</p>
 * @public
 */
export interface DecimalDatasetParameter {
  /**
   * <p>An identifier for the decimal parameter created in the dataset.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The name of the decimal parameter that is created in the dataset.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The value type of the dataset parameter. Valid values are <code>single value</code> or <code>multi value</code>.</p>
   * @public
   */
  ValueType: DatasetParameterValueType | undefined;

  /**
   * <p>A list of default values for a given decimal parameter. This structure only accepts static values.</p>
   * @public
   */
  DefaultValues?: DecimalDatasetParameterDefaultValues | undefined;
}

/**
 * <p>The default values of an integer parameter.</p>
 * @public
 */
export interface IntegerDatasetParameterDefaultValues {
  /**
   * <p>A list of static default values for a given integer parameter.</p>
   * @public
   */
  StaticValues?: number[] | undefined;
}

/**
 * <p>An integer parameter for a dataset.</p>
 * @public
 */
export interface IntegerDatasetParameter {
  /**
   * <p>An identifier for the integer parameter created in the dataset.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The name of the integer parameter that is created in the dataset.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The value type of the dataset parameter. Valid values are <code>single value</code> or <code>multi value</code>.</p>
   * @public
   */
  ValueType: DatasetParameterValueType | undefined;

  /**
   * <p>A list of default values for a given integer parameter. This structure only accepts static values.</p>
   * @public
   */
  DefaultValues?: IntegerDatasetParameterDefaultValues | undefined;
}

/**
 * <p>The default values of a string parameter.</p>
 * @public
 */
export interface StringDatasetParameterDefaultValues {
  /**
   * <p>A list of static default values for a given string parameter.</p>
   * @public
   */
  StaticValues?: string[] | undefined;
}

/**
 * <p>A string parameter for a dataset.</p>
 * @public
 */
export interface StringDatasetParameter {
  /**
   * <p>An identifier for the string parameter that is created in the dataset.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The name of the string parameter that is created in the dataset.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The value type of the dataset parameter. Valid values are <code>single value</code> or <code>multi value</code>.</p>
   * @public
   */
  ValueType: DatasetParameterValueType | undefined;

  /**
   * <p>A list of default values for a given string dataset parameter type. This structure only accepts static values.</p>
   * @public
   */
  DefaultValues?: StringDatasetParameterDefaultValues | undefined;
}

/**
 * <p>A parameter that is created in a dataset. The parameter can be a string, integer, decimal, or datetime data type.</p>
 * @public
 */
export interface DatasetParameter {
  /**
   * <p>A string parameter that is created in the dataset.</p>
   * @public
   */
  StringDatasetParameter?: StringDatasetParameter | undefined;

  /**
   * <p>A decimal parameter that is created in the dataset.</p>
   * @public
   */
  DecimalDatasetParameter?: DecimalDatasetParameter | undefined;

  /**
   * <p>An integer parameter that is created in the dataset.</p>
   * @public
   */
  IntegerDatasetParameter?: IntegerDatasetParameter | undefined;

  /**
   * <p>A date time parameter that is created in the dataset.</p>
   * @public
   */
  DateTimeDatasetParameter?: DateTimeDatasetParameter | undefined;
}

/**
 * <p>The usage configuration to apply to child datasets that reference this dataset as a source.</p>
 * @public
 */
export interface DataSetUsageConfiguration {
  /**
   * <p>An option that controls whether a child dataset of a direct query can use this dataset as a source.</p>
   * @public
   */
  DisableUseAsDirectQuerySource?: boolean | undefined;

  /**
   * <p>An option that controls whether a child dataset that's stored in Quick Sight can use this dataset as a source.</p>
   * @public
   */
  DisableUseAsImportedSource?: boolean | undefined;
}

/**
 * <p>A FieldFolder element is a folder that contains fields and nested subfolders.</p>
 * @public
 */
export interface FieldFolder {
  /**
   * <p>The description for a field folder.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A folder has a list of columns. A column can only be in one folder.</p>
   * @public
   */
  columns?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const DataSetImportMode = {
  DIRECT_QUERY: "DIRECT_QUERY",
  SPICE: "SPICE",
} as const;

/**
 * @public
 */
export type DataSetImportMode = (typeof DataSetImportMode)[keyof typeof DataSetImportMode];

/**
 * <p>The configuration that overrides the existing default values for a dataset parameter that is inherited from another dataset.</p>
 * @public
 */
export interface NewDefaultValues {
  /**
   * <p>A list of static default values for a given string parameter.</p>
   * @public
   */
  StringStaticValues?: string[] | undefined;

  /**
   * <p>A list of static default values for a given decimal parameter.</p>
   * @public
   */
  DecimalStaticValues?: number[] | undefined;

  /**
   * <p>A list of static default values for a given date time parameter.</p>
   * @public
   */
  DateTimeStaticValues?: Date[] | undefined;

  /**
   * <p>A list of static default values for a given integer parameter.</p>
   * @public
   */
  IntegerStaticValues?: number[] | undefined;
}

/**
 * <p>A transform operation that overrides the dataset parameter values that are defined in another dataset.</p>
 * @public
 */
export interface OverrideDatasetParameterOperation {
  /**
   * <p>The name of the parameter to be overridden with different values.</p>
   * @public
   */
  ParameterName: string | undefined;

  /**
   * <p>The new name for the parameter.</p>
   * @public
   */
  NewParameterName?: string | undefined;

  /**
   * <p>The new default values for the parameter.</p>
   * @public
   */
  NewDefaultValues?: NewDefaultValues | undefined;
}

/**
 * <p>A transform operation that tags a column with additional information.</p>
 * @public
 */
export interface TagColumnOperation {
  /**
   * <p>The column that this operation acts on.</p>
   * @public
   */
  ColumnName: string | undefined;

  /**
   * <p>The dataset column tag, currently only used for geospatial type tagging.</p>
   *          <note>
   *             <p>This is not tags for the Amazon Web Services tagging feature.</p>
   *          </note>
   * @public
   */
  Tags: ColumnTag[] | undefined;
}

/**
 * <p>A transform operation that removes tags associated with a column.</p>
 * @public
 */
export interface UntagColumnOperation {
  /**
   * <p>The column that this operation acts on.</p>
   * @public
   */
  ColumnName: string | undefined;

  /**
   * <p>The column tags to remove from this column.</p>
   * @public
   */
  TagNames: ColumnTagName[] | undefined;
}

/**
 * <p>A data transformation on a logical table. This is a variant type structure. For this
 *             structure to be valid, only one of the attributes can be non-null.</p>
 * @public
 */
export type TransformOperation =
  | TransformOperation.CastColumnTypeOperationMember
  | TransformOperation.CreateColumnsOperationMember
  | TransformOperation.FilterOperationMember
  | TransformOperation.OverrideDatasetParameterOperationMember
  | TransformOperation.ProjectOperationMember
  | TransformOperation.RenameColumnOperationMember
  | TransformOperation.TagColumnOperationMember
  | TransformOperation.UntagColumnOperationMember
  | TransformOperation.$UnknownMember;

/**
 * @public
 */
export namespace TransformOperation {
  /**
   * <p>An operation that projects columns. Operations that come after a projection can only
   *             refer to projected columns.</p>
   * @public
   */
  export interface ProjectOperationMember {
    ProjectOperation: ProjectOperation;
    FilterOperation?: never;
    CreateColumnsOperation?: never;
    RenameColumnOperation?: never;
    CastColumnTypeOperation?: never;
    TagColumnOperation?: never;
    UntagColumnOperation?: never;
    OverrideDatasetParameterOperation?: never;
    $unknown?: never;
  }

  /**
   * <p>An operation that filters rows based on some condition.</p>
   * @public
   */
  export interface FilterOperationMember {
    ProjectOperation?: never;
    FilterOperation: FilterOperation;
    CreateColumnsOperation?: never;
    RenameColumnOperation?: never;
    CastColumnTypeOperation?: never;
    TagColumnOperation?: never;
    UntagColumnOperation?: never;
    OverrideDatasetParameterOperation?: never;
    $unknown?: never;
  }

  /**
   * <p>An operation that creates calculated columns. Columns created in one such operation
   *             form a lexical closure.</p>
   * @public
   */
  export interface CreateColumnsOperationMember {
    ProjectOperation?: never;
    FilterOperation?: never;
    CreateColumnsOperation: CreateColumnsOperation;
    RenameColumnOperation?: never;
    CastColumnTypeOperation?: never;
    TagColumnOperation?: never;
    UntagColumnOperation?: never;
    OverrideDatasetParameterOperation?: never;
    $unknown?: never;
  }

  /**
   * <p>An operation that renames a column.</p>
   * @public
   */
  export interface RenameColumnOperationMember {
    ProjectOperation?: never;
    FilterOperation?: never;
    CreateColumnsOperation?: never;
    RenameColumnOperation: RenameColumnOperation;
    CastColumnTypeOperation?: never;
    TagColumnOperation?: never;
    UntagColumnOperation?: never;
    OverrideDatasetParameterOperation?: never;
    $unknown?: never;
  }

  /**
   * <p>A transform operation that casts a column to a different type.</p>
   * @public
   */
  export interface CastColumnTypeOperationMember {
    ProjectOperation?: never;
    FilterOperation?: never;
    CreateColumnsOperation?: never;
    RenameColumnOperation?: never;
    CastColumnTypeOperation: CastColumnTypeOperation;
    TagColumnOperation?: never;
    UntagColumnOperation?: never;
    OverrideDatasetParameterOperation?: never;
    $unknown?: never;
  }

  /**
   * <p>An operation that tags a column with additional information.</p>
   * @public
   */
  export interface TagColumnOperationMember {
    ProjectOperation?: never;
    FilterOperation?: never;
    CreateColumnsOperation?: never;
    RenameColumnOperation?: never;
    CastColumnTypeOperation?: never;
    TagColumnOperation: TagColumnOperation;
    UntagColumnOperation?: never;
    OverrideDatasetParameterOperation?: never;
    $unknown?: never;
  }

  /**
   * <p>A transform operation that removes tags associated with a column.</p>
   * @public
   */
  export interface UntagColumnOperationMember {
    ProjectOperation?: never;
    FilterOperation?: never;
    CreateColumnsOperation?: never;
    RenameColumnOperation?: never;
    CastColumnTypeOperation?: never;
    TagColumnOperation?: never;
    UntagColumnOperation: UntagColumnOperation;
    OverrideDatasetParameterOperation?: never;
    $unknown?: never;
  }

  /**
   * <p>A transform operation that overrides the dataset parameter values that are defined in another dataset.</p>
   * @public
   */
  export interface OverrideDatasetParameterOperationMember {
    ProjectOperation?: never;
    FilterOperation?: never;
    CreateColumnsOperation?: never;
    RenameColumnOperation?: never;
    CastColumnTypeOperation?: never;
    TagColumnOperation?: never;
    UntagColumnOperation?: never;
    OverrideDatasetParameterOperation: OverrideDatasetParameterOperation;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    ProjectOperation?: never;
    FilterOperation?: never;
    CreateColumnsOperation?: never;
    RenameColumnOperation?: never;
    CastColumnTypeOperation?: never;
    TagColumnOperation?: never;
    UntagColumnOperation?: never;
    OverrideDatasetParameterOperation?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    ProjectOperation: (value: ProjectOperation) => T;
    FilterOperation: (value: FilterOperation) => T;
    CreateColumnsOperation: (value: CreateColumnsOperation) => T;
    RenameColumnOperation: (value: RenameColumnOperation) => T;
    CastColumnTypeOperation: (value: CastColumnTypeOperation) => T;
    TagColumnOperation: (value: TagColumnOperation) => T;
    UntagColumnOperation: (value: UntagColumnOperation) => T;
    OverrideDatasetParameterOperation: (value: OverrideDatasetParameterOperation) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: TransformOperation, visitor: Visitor<T>): T => {
    if (value.ProjectOperation !== undefined) return visitor.ProjectOperation(value.ProjectOperation);
    if (value.FilterOperation !== undefined) return visitor.FilterOperation(value.FilterOperation);
    if (value.CreateColumnsOperation !== undefined) return visitor.CreateColumnsOperation(value.CreateColumnsOperation);
    if (value.RenameColumnOperation !== undefined) return visitor.RenameColumnOperation(value.RenameColumnOperation);
    if (value.CastColumnTypeOperation !== undefined)
      return visitor.CastColumnTypeOperation(value.CastColumnTypeOperation);
    if (value.TagColumnOperation !== undefined) return visitor.TagColumnOperation(value.TagColumnOperation);
    if (value.UntagColumnOperation !== undefined) return visitor.UntagColumnOperation(value.UntagColumnOperation);
    if (value.OverrideDatasetParameterOperation !== undefined)
      return visitor.OverrideDatasetParameterOperation(value.OverrideDatasetParameterOperation);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Properties associated with the columns participating in a join.</p>
 * @public
 */
export interface JoinKeyProperties {
  /**
   * <p>A value that indicates that a row in a table is uniquely identified by the columns in
   *             a join key. This is used by Quick Sight to optimize query performance.</p>
   * @public
   */
  UniqueKey?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const JoinType = {
  INNER: "INNER",
  LEFT: "LEFT",
  OUTER: "OUTER",
  RIGHT: "RIGHT",
} as const;

/**
 * @public
 */
export type JoinType = (typeof JoinType)[keyof typeof JoinType];

/**
 * <p>The instructions associated with a join. </p>
 * @public
 */
export interface JoinInstruction {
  /**
   * <p>The operand on the left side of a join.</p>
   * @public
   */
  LeftOperand: string | undefined;

  /**
   * <p>The operand on the right side of a join.</p>
   * @public
   */
  RightOperand: string | undefined;

  /**
   * <p>Join key properties of the left operand.</p>
   * @public
   */
  LeftJoinKeyProperties?: JoinKeyProperties | undefined;

  /**
   * <p>Join key properties of the right operand.</p>
   * @public
   */
  RightJoinKeyProperties?: JoinKeyProperties | undefined;

  /**
   * <p>The type of join that it is.</p>
   * @public
   */
  Type: JoinType | undefined;

  /**
   * <p>The join instructions provided in the <code>ON</code> clause of a join.</p>
   * @public
   */
  OnClause: string | undefined;
}

/**
 * <p>Information about the source of a logical table. This is a variant type structure. For
 *             this structure to be valid, only one of the attributes can be non-null.</p>
 * @public
 */
export interface LogicalTableSource {
  /**
   * <p>Specifies the result of a join of two logical tables.</p>
   * @public
   */
  JoinInstruction?: JoinInstruction | undefined;

  /**
   * <p>Physical table ID.</p>
   * @public
   */
  PhysicalTableId?: string | undefined;

  /**
   * <p>The Amazon Resource Number (ARN) of the parent dataset.</p>
   * @public
   */
  DataSetArn?: string | undefined;
}

/**
 * <p>A <i>logical table</i> is a unit that joins and that data
 *             transformations operate on. A logical table has a source, which can be either a physical
 *             table or result of a join. When a logical table points to a physical table, the logical
 *             table acts as a mutable copy of that physical table through transform operations.</p>
 * @public
 */
export interface LogicalTable {
  /**
   * <p>A display name for the logical table.</p>
   * @public
   */
  Alias: string | undefined;

  /**
   * <p>Transform operations that act on this logical table. For this structure to be valid, only one of the attributes can be non-null. </p>
   * @public
   */
  DataTransforms?: TransformOperation[] | undefined;

  /**
   * <p>Source of this logical table.</p>
   * @public
   */
  Source: LogicalTableSource | undefined;
}

/**
 * <p>A <code>UniqueKey</code> configuration that references a dataset column.</p>
 * @public
 */
export interface UniqueKey {
  /**
   * <p>The name of the column that is referenced in the <code>UniqueKey</code>
   * 			configuration.</p>
   * @public
   */
  ColumnNames: string[] | undefined;
}

/**
 * <p>The configuration for the performance optimization of the dataset that contains a
 * 				<code>UniqueKey</code> configuration.</p>
 * @public
 */
export interface PerformanceConfiguration {
  /**
   * <p>A <code>UniqueKey</code> configuration.</p>
   * @public
   */
  UniqueKeys?: UniqueKey[] | undefined;
}

/**
 * <p>A physical table type built from the results of the custom SQL query.</p>
 * @public
 */
export interface CustomSql {
  /**
   * <p>The Amazon Resource Name (ARN) of the data source.</p>
   * @public
   */
  DataSourceArn: string | undefined;

  /**
   * <p>A display name for the SQL query result.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The SQL query.</p>
   * @public
   */
  SqlQuery: string | undefined;

  /**
   * <p>The column schema from the SQL query result set.</p>
   * @public
   */
  Columns?: InputColumn[] | undefined;
}

/**
 * <p>A physical table type for relational data sources.</p>
 * @public
 */
export interface RelationalTable {
  /**
   * <p>The Amazon Resource Name (ARN) for the data source.</p>
   * @public
   */
  DataSourceArn: string | undefined;

  /**
   * <p>The catalog associated with a table.</p>
   * @public
   */
  Catalog?: string | undefined;

  /**
   * <p>The schema name. This name applies to certain relational database engines.</p>
   * @public
   */
  Schema?: string | undefined;

  /**
   * <p>The name of the relational table.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The column schema of the table.</p>
   * @public
   */
  InputColumns: InputColumn[] | undefined;
}

/**
 * @public
 * @enum
 */
export const FileFormat = {
  CLF: "CLF",
  CSV: "CSV",
  ELF: "ELF",
  JSON: "JSON",
  TSV: "TSV",
  XLSX: "XLSX",
} as const;

/**
 * @public
 */
export type FileFormat = (typeof FileFormat)[keyof typeof FileFormat];

/**
 * @public
 * @enum
 */
export const TextQualifier = {
  DOUBLE_QUOTE: "DOUBLE_QUOTE",
  SINGLE_QUOTE: "SINGLE_QUOTE",
} as const;

/**
 * @public
 */
export type TextQualifier = (typeof TextQualifier)[keyof typeof TextQualifier];

/**
 * <p>Information about the format for a source file or files.</p>
 * @public
 */
export interface UploadSettings {
  /**
   * <p>File format.</p>
   * @public
   */
  Format?: FileFormat | undefined;

  /**
   * <p>A row number to start reading data from.</p>
   * @public
   */
  StartFromRow?: number | undefined;

  /**
   * <p>Whether the file has a header row, or the files each have a header row.</p>
   * @public
   */
  ContainsHeader?: boolean | undefined;

  /**
   * <p>Text qualifier.</p>
   * @public
   */
  TextQualifier?: TextQualifier | undefined;

  /**
   * <p>The delimiter between values in the file.</p>
   * @public
   */
  Delimiter?: string | undefined;

  /**
   * <p>A custom cell address range for Excel files, specifying which cells to import from the spreadsheet.</p>
   * @public
   */
  CustomCellAddressRange?: string | undefined;
}

/**
 * <p>A physical table type for an S3 data source.</p>
 * @public
 */
export interface S3Source {
  /**
   * <p>The Amazon Resource Name (ARN) for the data source.</p>
   * @public
   */
  DataSourceArn: string | undefined;

  /**
   * <p>Information about the format for the S3 source file or files.</p>
   * @public
   */
  UploadSettings?: UploadSettings | undefined;

  /**
   * <p>A physical table type for an S3 data source.</p>
   *          <note>
   *             <p>For files that aren't JSON, only <code>STRING</code> data types are supported in input columns.</p>
   *          </note>
   * @public
   */
  InputColumns: InputColumn[] | undefined;
}

/**
 * <p>An element in the hierarchical path to a table within a data source, containing both name and identifier.</p>
 * @public
 */
export interface TablePathElement {
  /**
   * <p>The name of the path element.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The unique identifier of the path element.</p>
   * @public
   */
  Id?: string | undefined;
}

/**
 * <p>A table from a Software-as-a-Service (SaaS) data source, including connection details and column definitions.</p>
 * @public
 */
export interface SaaSTable {
  /**
   * <p>The Amazon Resource Name (ARN) of the SaaS data source.</p>
   * @public
   */
  DataSourceArn: string | undefined;

  /**
   * <p>The hierarchical path to the table within the SaaS data source.</p>
   * @public
   */
  TablePath: TablePathElement[] | undefined;

  /**
   * <p>The list of input columns available from the SaaS table.</p>
   * @public
   */
  InputColumns: InputColumn[] | undefined;
}

/**
 * <p>A view of a data source that contains information about the shape of the data in the
 *             underlying source. This is a variant type structure. For this structure to be valid,
 *             only one of the attributes can be non-null.</p>
 * @public
 */
export type PhysicalTable =
  | PhysicalTable.CustomSqlMember
  | PhysicalTable.RelationalTableMember
  | PhysicalTable.S3SourceMember
  | PhysicalTable.SaaSTableMember
  | PhysicalTable.$UnknownMember;

/**
 * @public
 */
export namespace PhysicalTable {
  /**
   * <p>A physical table type for relational data sources.</p>
   * @public
   */
  export interface RelationalTableMember {
    RelationalTable: RelationalTable;
    CustomSql?: never;
    S3Source?: never;
    SaaSTable?: never;
    $unknown?: never;
  }

  /**
   * <p>A physical table type built from the results of the custom SQL query.</p>
   * @public
   */
  export interface CustomSqlMember {
    RelationalTable?: never;
    CustomSql: CustomSql;
    S3Source?: never;
    SaaSTable?: never;
    $unknown?: never;
  }

  /**
   * <p>A physical table type for as S3 data source.</p>
   * @public
   */
  export interface S3SourceMember {
    RelationalTable?: never;
    CustomSql?: never;
    S3Source: S3Source;
    SaaSTable?: never;
    $unknown?: never;
  }

  /**
   * <p>A physical table type for Software-as-a-Service (SaaS) sources.</p>
   * @public
   */
  export interface SaaSTableMember {
    RelationalTable?: never;
    CustomSql?: never;
    S3Source?: never;
    SaaSTable: SaaSTable;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    RelationalTable?: never;
    CustomSql?: never;
    S3Source?: never;
    SaaSTable?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    RelationalTable: (value: RelationalTable) => T;
    CustomSql: (value: CustomSql) => T;
    S3Source: (value: S3Source) => T;
    SaaSTable: (value: SaaSTable) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: PhysicalTable, visitor: Visitor<T>): T => {
    if (value.RelationalTable !== undefined) return visitor.RelationalTable(value.RelationalTable);
    if (value.CustomSql !== undefined) return visitor.CustomSql(value.CustomSql);
    if (value.S3Source !== undefined) return visitor.S3Source(value.S3Source);
    if (value.SaaSTable !== undefined) return visitor.SaaSTable(value.SaaSTable);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const RowLevelPermissionFormatVersion = {
  VERSION_1: "VERSION_1",
  VERSION_2: "VERSION_2",
} as const;

/**
 * @public
 */
export type RowLevelPermissionFormatVersion =
  (typeof RowLevelPermissionFormatVersion)[keyof typeof RowLevelPermissionFormatVersion];

/**
 * @public
 * @enum
 */
export const RowLevelPermissionPolicy = {
  DENY_ACCESS: "DENY_ACCESS",
  GRANT_ACCESS: "GRANT_ACCESS",
} as const;

/**
 * @public
 */
export type RowLevelPermissionPolicy = (typeof RowLevelPermissionPolicy)[keyof typeof RowLevelPermissionPolicy];

/**
 * @public
 * @enum
 */
export const Status = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * <p>Information about a dataset that contains permissions for row-level security (RLS).
 *             The permissions dataset maps fields to users or groups. For more information, see
 *             <a href="https://docs.aws.amazon.com/quicksight/latest/user/restrict-access-to-a-data-set-using-row-level-security.html">Using Row-Level Security (RLS) to Restrict Access to a Dataset</a> in the <i>Quick Sight User
 *                 Guide</i>.</p>
 *          <p>The option to deny permissions by setting <code>PermissionPolicy</code> to <code>DENY_ACCESS</code> is
 *             not supported for new RLS datasets.</p>
 * @public
 */
export interface RowLevelPermissionDataSet {
  /**
   * <p>The namespace associated with the dataset that contains permissions for RLS.</p>
   * @public
   */
  Namespace?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset that contains permissions for RLS.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The type of permissions to use when interpreting the permissions for RLS. <code>DENY_ACCESS</code>
   *         is included for backward compatibility only.</p>
   * @public
   */
  PermissionPolicy: RowLevelPermissionPolicy | undefined;

  /**
   * <p>The user or group rules associated with the dataset that contains permissions for RLS.</p>
   *          <p>By default, <code>FormatVersion</code> is <code>VERSION_1</code>. When <code>FormatVersion</code> is <code>VERSION_1</code>, <code>UserName</code> and <code>GroupName</code> are required. When <code>FormatVersion</code> is <code>VERSION_2</code>, <code>UserARN</code> and <code>GroupARN</code> are required, and <code>Namespace</code> must not exist.</p>
   * @public
   */
  FormatVersion?: RowLevelPermissionFormatVersion | undefined;

  /**
   * <p>The status of the row-level security permission dataset. If enabled, the status is <code>ENABLED</code>. If disabled, the status is <code>DISABLED</code>.</p>
   * @public
   */
  Status?: Status | undefined;
}

/**
 * <p>A set of rules associated with a tag.</p>
 * @public
 */
export interface RowLevelPermissionTagRule {
  /**
   * <p>The unique key for a tag.</p>
   * @public
   */
  TagKey: string | undefined;

  /**
   * <p>The column name that a tag key is assigned to.</p>
   * @public
   */
  ColumnName: string | undefined;

  /**
   * <p>A string that you want to use to delimit the values when you pass the values at run time. For example, you can delimit the values with a comma.</p>
   * @public
   */
  TagMultiValueDelimiter?: string | undefined;

  /**
   * <p>A string that you want to use to filter by all the values in a column in the dataset and don’t want to list the values one by one. For example, you can use an asterisk as your match all value.</p>
   * @public
   */
  MatchAllValue?: string | undefined;
}

/**
 * <p>The configuration of tags on a dataset to set row-level security. </p>
 * @public
 */
export interface RowLevelPermissionTagConfiguration {
  /**
   * <p>The status of row-level security tags. If enabled, the status is <code>ENABLED</code>. If disabled, the status is <code>DISABLED</code>.</p>
   * @public
   */
  Status?: Status | undefined;

  /**
   * <p>A set of rules associated with row-level security, such as the tag names and columns that they are assigned to.</p>
   * @public
   */
  TagRules: RowLevelPermissionTagRule[] | undefined;

  /**
   * <p>A list of tag configuration rules to apply to a dataset. All tag configurations have the OR condition. Tags within each tile will be joined (AND). At least one rule in this structure must have all tag values assigned to it to apply Row-level security (RLS) to the dataset.</p>
   * @public
   */
  TagRuleConfigurations?: string[][] | undefined;
}

/**
 * <p>Configuration for row level security.</p>
 * @public
 */
export interface RowLevelPermissionConfiguration {
  /**
   * <p>The configuration of tags on a dataset to set row-level security. </p>
   * @public
   */
  TagConfiguration?: RowLevelPermissionTagConfiguration | undefined;

  /**
   * <p>Information about a dataset that contains permissions for row-level security (RLS).
   *             The permissions dataset maps fields to users or groups. For more information, see
   *             <a href="https://docs.aws.amazon.com/quicksight/latest/user/restrict-access-to-a-data-set-using-row-level-security.html">Using Row-Level Security (RLS) to Restrict Access to a Dataset</a> in the <i>Quick Sight User
   *                 Guide</i>.</p>
   *          <p>The option to deny permissions by setting <code>PermissionPolicy</code> to <code>DENY_ACCESS</code> is
   *             not supported for new RLS datasets.</p>
   * @public
   */
  RowLevelPermissionDataSet?: RowLevelPermissionDataSet | undefined;
}

/**
 * <p>A semantic table that represents the final analytical structure of the data.</p>
 * @public
 */
export interface SemanticTable {
  /**
   * <p>Alias for the semantic table.</p>
   * @public
   */
  Alias: string | undefined;

  /**
   * <p>The identifier of the destination table from data preparation that provides data to this semantic table.</p>
   * @public
   */
  DestinationTableId: string | undefined;

  /**
   * <p>Configuration for row level security that control data access for this semantic table.</p>
   * @public
   */
  RowLevelPermissionConfiguration?: RowLevelPermissionConfiguration | undefined;
}

/**
 * <p>Configuration for the semantic model that defines how prepared data is structured for analysis and reporting.</p>
 * @public
 */
export interface SemanticModelConfiguration {
  /**
   * <p>A map of semantic tables that define the analytical structure.</p>
   * @public
   */
  TableMap?: Record<string, SemanticTable> | undefined;
}

/**
 * @public
 * @enum
 */
export const DataSetUseAs = {
  RLS_RULES: "RLS_RULES",
} as const;

/**
 * @public
 */
export type DataSetUseAs = (typeof DataSetUseAs)[keyof typeof DataSetUseAs];

/**
 * @public
 */
export interface CreateDataSetRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>An ID for the dataset that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
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
   * <p>A list of resource permissions on the dataset.</p>
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;

  /**
   * <p>The row-level security configuration for the data that you want to create. This parameter is
   * 			used with the legacy data preparation experience.</p>
   *
   * @deprecated Only used in the legacy data preparation experience.
   * @public
   */
  RowLevelPermissionDataSet?: RowLevelPermissionDataSet | undefined;

  /**
   * <p>The configuration of tags on a dataset to set row-level security. Row-level security
   * 			tags are currently supported for anonymous embedding only. This parameter is
   * 			used with the legacy data preparation experience.</p>
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
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the
   * 			dataset.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

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
   * <p>When you create the dataset, Amazon Quick Sight adds the dataset to these
   * 			folders.</p>
   * @public
   */
  FolderArns?: string[] | undefined;

  /**
   * <p>The configuration for the performance optimization of the dataset that contains a
   * 				<code>UniqueKey</code> configuration.</p>
   * @public
   */
  PerformanceConfiguration?: PerformanceConfiguration | undefined;

  /**
   * <p>The usage of the dataset. <code>RLS_RULES</code> must be specified for RLS permission
   * 			datasets.</p>
   * @public
   */
  UseAs?: DataSetUseAs | undefined;

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
export interface CreateDataSetResponse {
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
 * <p>An exception thrown when an invalid parameter value is provided for dataset operations.</p>
 * @public
 */
export class InvalidDataSetParameterValueException extends __BaseException {
  readonly name: "InvalidDataSetParameterValueException" = "InvalidDataSetParameterValueException";
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
  constructor(opts: __ExceptionOptionType<InvalidDataSetParameterValueException, __BaseException>) {
    super({
      name: "InvalidDataSetParameterValueException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDataSetParameterValueException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * <p>The combination of user name and password that are used as credentials.</p>
 * @public
 */
export interface CredentialPair {
  /**
   * <p>User name.</p>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>Password.</p>
   * @public
   */
  Password: string | undefined;

  /**
   * <p>A set of alternate data source parameters that you want to share for these
   *             credentials. The credentials are applied in tandem with the data source parameters when
   *             you copy a data source by using a create or update request. The API operation compares
   *             the <code>DataSourceParameters</code> structure that's in the request with the
   *             structures in the <code>AlternateDataSourceParameters</code> allow list. If the
   *             structures are an exact match, the request is allowed to use the new data source with
   *             the existing credentials. If the <code>AlternateDataSourceParameters</code> list is
   *             null, the <code>DataSourceParameters</code> originally used with these
   *                 <code>Credentials</code> is automatically allowed.</p>
   * @public
   */
  AlternateDataSourceParameters?: DataSourceParameters[] | undefined;
}

/**
 * <p>The credentials for authenticating with a web proxy server.</p>
 * @public
 */
export interface WebProxyCredentials {
  /**
   * <p>The username for authenticating with the web proxy server.</p>
   * @public
   */
  WebProxyUsername: string | undefined;

  /**
   * <p>The password for authenticating with the web proxy server.</p>
   * @public
   */
  WebProxyPassword: string | undefined;
}

/**
 * <p>Data source credentials. This is a variant type structure. For this structure to be
 *             valid, only one of the attributes can be non-null.</p>
 * @public
 */
export interface DataSourceCredentials {
  /**
   * <p>Credential pair. For more information, see
   *             <code>
   *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CredentialPair.html">CredentialPair</a>
   *             </code>.</p>
   * @public
   */
  CredentialPair?: CredentialPair | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a data source that has the credential pair that you
   *             want to use. When <code>CopySourceArn</code> is not null, the credential pair from the
   *             data source in the ARN is used as the credentials for the
   *             <code>DataSourceCredentials</code> structure.</p>
   * @public
   */
  CopySourceArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the secret associated with the data source in Amazon Secrets Manager.</p>
   * @public
   */
  SecretArn?: string | undefined;

  /**
   * <p>The credentials for connecting through a web proxy server.</p>
   * @public
   */
  WebProxyCredentials?: WebProxyCredentials | undefined;
}

/**
 * @public
 * @enum
 */
export const DataSourceType = {
  ADOBE_ANALYTICS: "ADOBE_ANALYTICS",
  AMAZON_ELASTICSEARCH: "AMAZON_ELASTICSEARCH",
  AMAZON_OPENSEARCH: "AMAZON_OPENSEARCH",
  ATHENA: "ATHENA",
  AURORA: "AURORA",
  AURORA_POSTGRESQL: "AURORA_POSTGRESQL",
  AWS_IOT_ANALYTICS: "AWS_IOT_ANALYTICS",
  BIGQUERY: "BIGQUERY",
  CONFLUENCE: "CONFLUENCE",
  DATABRICKS: "DATABRICKS",
  EXASOL: "EXASOL",
  GITHUB: "GITHUB",
  GOOGLESHEETS: "GOOGLESHEETS",
  GOOGLE_DRIVE: "GOOGLE_DRIVE",
  JIRA: "JIRA",
  MARIADB: "MARIADB",
  MYSQL: "MYSQL",
  ONE_DRIVE: "ONE_DRIVE",
  ORACLE: "ORACLE",
  POSTGRESQL: "POSTGRESQL",
  PRESTO: "PRESTO",
  QBUSINESS: "QBUSINESS",
  REDSHIFT: "REDSHIFT",
  S3: "S3",
  S3_KNOWLEDGE_BASE: "S3_KNOWLEDGE_BASE",
  SALESFORCE: "SALESFORCE",
  SERVICENOW: "SERVICENOW",
  SHAREPOINT: "SHAREPOINT",
  SNOWFLAKE: "SNOWFLAKE",
  SPARK: "SPARK",
  SQLSERVER: "SQLSERVER",
  STARBURST: "STARBURST",
  TERADATA: "TERADATA",
  TIMESTREAM: "TIMESTREAM",
  TRINO: "TRINO",
  TWITTER: "TWITTER",
  WEB_CRAWLER: "WEB_CRAWLER",
} as const;

/**
 * @public
 */
export type DataSourceType = (typeof DataSourceType)[keyof typeof DataSourceType];

/**
 * @public
 */
export interface CreateDataSourceRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>An ID for the data source. This ID is unique per Amazon Web Services Region for each
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
   * <p>The type of the data source. To return a list of all data sources, use
   * 				<code>ListDataSources</code>.</p>
   *          <p>Use <code>AMAZON_ELASTICSEARCH</code> for Amazon OpenSearch Service.</p>
   * @public
   */
  Type: DataSourceType | undefined;

  /**
   * <p>The parameters that Amazon Quick Sight uses to connect to your underlying
   * 			source.</p>
   * @public
   */
  DataSourceParameters?: DataSourceParameters | undefined;

  /**
   * <p>The credentials Amazon Quick Sight that uses to connect to your underlying source.
   * 			Currently, only credentials based on user name and password are supported.</p>
   * @public
   */
  Credentials?: DataSourceCredentials | undefined;

  /**
   * <p>A list of resource permissions on the data source.</p>
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;

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

  /**
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the
   * 			data source.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>When you create the data source, Amazon Quick Sight adds the data source to these
   * 			folders.</p>
   * @public
   */
  FolderArns?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateDataSourceResponse {
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
   * <p>The status of creating the data source.</p>
   * @public
   */
  CreationStatus?: ResourceStatus | undefined;

  /**
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
 * <p>The customer managed key that is registered to your Amazon Quick Sight account is unavailable.</p>
 * @public
 */
export class CustomerManagedKeyUnavailableException extends __BaseException {
  readonly name: "CustomerManagedKeyUnavailableException" = "CustomerManagedKeyUnavailableException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CustomerManagedKeyUnavailableException, __BaseException>) {
    super({
      name: "CustomerManagedKeyUnavailableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CustomerManagedKeyUnavailableException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * @public
 * @enum
 */
export const FolderType = {
  RESTRICTED: "RESTRICTED",
  SHARED: "SHARED",
} as const;

/**
 * @public
 */
export type FolderType = (typeof FolderType)[keyof typeof FolderType];

/**
 * @public
 * @enum
 */
export const SharingModel = {
  ACCOUNT: "ACCOUNT",
  NAMESPACE: "NAMESPACE",
} as const;

/**
 * @public
 */
export type SharingModel = (typeof SharingModel)[keyof typeof SharingModel];

/**
 * @public
 */
export interface CreateFolderRequest {
  /**
   * <p>The ID for the Amazon Web Services account where you want to create the folder.</p>
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
  Name?: string | undefined;

  /**
   * <p>The type of folder. By default, <code>folderType</code> is <code>SHARED</code>.</p>
   * @public
   */
  FolderType?: FolderType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the parent folder.</p>
   *          <p>
   *             <code>ParentFolderArn</code> can be null. An empty <code>parentFolderArn</code> creates a root-level folder.</p>
   * @public
   */
  ParentFolderArn?: string | undefined;

  /**
   * <p>A structure that describes the principals and the resource-level permissions of a folder.</p>
   *          <p>To specify no permissions, omit <code>Permissions</code>.</p>
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;

  /**
   * <p>Tags for the folder.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>An optional parameter that determines the sharing scope of the folder. The default value for this parameter is <code>ACCOUNT</code>.</p>
   * @public
   */
  SharingModel?: SharingModel | undefined;
}

/**
 * @public
 */
export interface CreateFolderResponse {
  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the newly created folder.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The folder ID for the newly created folder.</p>
   * @public
   */
  FolderId?: string | undefined;

  /**
   * <p>The request ID for the newly created folder.</p>
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const MemberType = {
  ANALYSIS: "ANALYSIS",
  DASHBOARD: "DASHBOARD",
  DATASET: "DATASET",
  DATASOURCE: "DATASOURCE",
  TOPIC: "TOPIC",
} as const;

/**
 * @public
 */
export type MemberType = (typeof MemberType)[keyof typeof MemberType];

/**
 * @public
 */
export interface CreateFolderMembershipRequest {
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
   * <p>The ID of the asset that you want to add to the folder.</p>
   * @public
   */
  MemberId: string | undefined;

  /**
   * <p>The member type of the asset that you want to add to a folder.</p>
   * @public
   */
  MemberType: MemberType | undefined;
}

/**
 * <p>An asset in a Quick Sight folder, such as a dashboard, analysis, or dataset.</p>
 * @public
 */
export interface FolderMember {
  /**
   * <p>The ID of an asset in the folder.</p>
   * @public
   */
  MemberId?: string | undefined;

  /**
   * <p>The type of asset that it is.</p>
   * @public
   */
  MemberType?: MemberType | undefined;
}

/**
 * @public
 */
export interface CreateFolderMembershipResponse {
  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;

  /**
   * <p>Information about the member in the folder.</p>
   * @public
   */
  FolderMember?: FolderMember | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * <p>The request object for this operation. </p>
 * @public
 */
export interface CreateGroupRequest {
  /**
   * <p>A name for the group that you want to create.</p>
   * @public
   */
  GroupName: string | undefined;

  /**
   * <p>A description for the group that you want to create.</p>
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
   * <p>The namespace that you want the group to be a part of.</p>
   * @public
   */
  Namespace: string | undefined;
}

/**
 * <p>A <i>group</i> in Quick Sight consists of a set of users. You can
 *             use groups to make it easier to manage access and security. </p>
 * @public
 */
export interface Group {
  /**
   * <p>The Amazon Resource Name (ARN) for the group.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the group.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The group description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The principal ID of the group.</p>
   * @public
   */
  PrincipalId?: string | undefined;
}

/**
 * <p>The response object for this operation.</p>
 * @public
 */
export interface CreateGroupResponse {
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
export interface CreateGroupMembershipRequest {
  /**
   * <p>The name of the user that you want to add to the group membership.</p>
   * @public
   */
  MemberName: string | undefined;

  /**
   * <p>The name of the group that you want to add the user to.</p>
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
   * <p>The namespace that you want the user to be a part of.</p>
   * @public
   */
  Namespace: string | undefined;
}

/**
 * <p>A member of an Quick Sight group. Currently, group members must be users. Groups
 *             can't be members of another group. .</p>
 * @public
 */
export interface GroupMember {
  /**
   * <p>The Amazon Resource Name (ARN) for the group member (user).</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the group member (user).</p>
   * @public
   */
  MemberName?: string | undefined;
}

/**
 * @public
 */
export interface CreateGroupMembershipResponse {
  /**
   * <p>The group member.</p>
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
export interface CreateIAMPolicyAssignmentRequest {
  /**
   * <p>The ID of the Amazon Web Services account where you want to assign an IAM policy to Amazon Quick Sight users or groups.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The name of the assignment, also called a rule.
   * 			The
   * 			name
   * 			must be unique within the
   * 			Amazon Web Services account.</p>
   * @public
   */
  AssignmentName: string | undefined;

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
  AssignmentStatus: AssignmentStatus | undefined;

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

  /**
   * <p>The namespace that contains the assignment.</p>
   * @public
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface CreateIAMPolicyAssignmentResponse {
  /**
   * <p>The name of the assignment.
   * 			The
   * 			name must be unique within the Amazon Web Services account.</p>
   * @public
   */
  AssignmentName?: string | undefined;

  /**
   * <p>The ID for the assignment.</p>
   * @public
   */
  AssignmentId?: string | undefined;

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
   * <p>The ARN for the IAM policy that is applied to the Amazon Quick Sight
   * 			users and groups specified in this assignment.</p>
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
export const IngestionType = {
  FULL_REFRESH: "FULL_REFRESH",
  INCREMENTAL_REFRESH: "INCREMENTAL_REFRESH",
} as const;

/**
 * @public
 */
export type IngestionType = (typeof IngestionType)[keyof typeof IngestionType];

/**
 * @public
 */
export interface CreateIngestionRequest {
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

  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The type of ingestion that you want to create.</p>
   * @public
   */
  IngestionType?: IngestionType | undefined;
}

/**
 * @public
 * @enum
 */
export const IngestionStatus = {
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  INITIALIZED: "INITIALIZED",
  QUEUED: "QUEUED",
  RUNNING: "RUNNING",
} as const;

/**
 * @public
 */
export type IngestionStatus = (typeof IngestionStatus)[keyof typeof IngestionStatus];

/**
 * @public
 */
export interface CreateIngestionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the data ingestion.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>An ID for the ingestion.</p>
   * @public
   */
  IngestionId?: string | undefined;

  /**
   * <p>The ingestion status.</p>
   * @public
   */
  IngestionStatus?: IngestionStatus | undefined;

  /**
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
export const IdentityStore = {
  QUICKSIGHT: "QUICKSIGHT",
} as const;

/**
 * @public
 */
export type IdentityStore = (typeof IdentityStore)[keyof typeof IdentityStore];

/**
 * @public
 */
export interface CreateNamespaceRequest {
  /**
   * <p>The ID for the Amazon Web Services account that you want to create the Quick Sight namespace in.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The name that you want to use to describe the new namespace.</p>
   * @public
   */
  Namespace: string | undefined;

  /**
   * <p>Specifies the type of your user identity directory. Currently, this supports users
   *             with an identity type of <code>QUICKSIGHT</code>.</p>
   * @public
   */
  IdentityStore: IdentityStore | undefined;

  /**
   * <p>The tags that you want to associate with the namespace that you're creating.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 * @enum
 */
export const NamespaceStatus = {
  CREATED: "CREATED",
  CREATING: "CREATING",
  DELETING: "DELETING",
  NON_RETRYABLE_FAILURE: "NON_RETRYABLE_FAILURE",
  RETRYABLE_FAILURE: "RETRYABLE_FAILURE",
} as const;

/**
 * @public
 */
export type NamespaceStatus = (typeof NamespaceStatus)[keyof typeof NamespaceStatus];

/**
 * @public
 */
export interface CreateNamespaceResponse {
  /**
   * <p>The ARN of the Quick Sight namespace you created. </p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the new namespace that you created.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Web Services Region; that you want to use for the free SPICE capacity for the new namespace.
   *             This is set to the region that you run CreateNamespace in. </p>
   * @public
   */
  CapacityRegion?: string | undefined;

  /**
   * <p>The status of the creation of the namespace. This is an asynchronous process. A status
   *             of <code>CREATED</code> means that your namespace is ready to use. If an error occurs,
   *             it indicates if the process is <code>retryable</code> or <code>non-retryable</code>. In
   *             the case of a non-retryable error, refer to the error message for follow-up
   *             tasks.</p>
   * @public
   */
  CreationStatus?: NamespaceStatus | undefined;

  /**
   * <p>Specifies the type of your user identity directory. Currently, this supports users
   *             with an identity type of <code>QUICKSIGHT</code>.</p>
   * @public
   */
  IdentityStore?: IdentityStore | undefined;

  /**
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
export const RefreshInterval = {
  DAILY: "DAILY",
  HOURLY: "HOURLY",
  MINUTE15: "MINUTE15",
  MINUTE30: "MINUTE30",
  MONTHLY: "MONTHLY",
  WEEKLY: "WEEKLY",
} as const;

/**
 * @public
 */
export type RefreshInterval = (typeof RefreshInterval)[keyof typeof RefreshInterval];

/**
 * @public
 * @enum
 */
export const DayOfWeek = {
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
export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek];

/**
 * <p>The refresh on entity for weekly or monthly schedules.</p>
 * @public
 */
export interface ScheduleRefreshOnEntity {
  /**
   * <p>The day of the week that you want to schedule a refresh on.</p>
   * @public
   */
  DayOfWeek?: DayOfWeek | undefined;

  /**
   * <p>The day of the month that you want to schedule refresh on.</p>
   * @public
   */
  DayOfMonth?: string | undefined;
}

/**
 * <p>Specifies the interval between each scheduled refresh of a dataset.</p>
 * @public
 */
export interface RefreshFrequency {
  /**
   * <p>The interval between scheduled refreshes. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>MINUTE15</code>: The dataset refreshes every 15 minutes. This value is only supported for incremental refreshes. This interval can only be used for one schedule per dataset.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MINUTE30</code>:The dataset refreshes every 30 minutes. This value is only supported for incremental refreshes. This interval can only be used for one schedule per dataset.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HOURLY</code>: The dataset refreshes every hour. This interval can only be used for one schedule per dataset.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DAILY</code>: The dataset refreshes every day.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WEEKLY</code>: The dataset refreshes every week.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MONTHLY</code>: The dataset refreshes every month.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Interval: RefreshInterval | undefined;

  /**
   * <p>The day of the week that you want to schedule the refresh on. This value is required for weekly and monthly refresh intervals.</p>
   * @public
   */
  RefreshOnDay?: ScheduleRefreshOnEntity | undefined;

  /**
   * <p>The timezone that you want the refresh schedule to use. The timezone ID must match a corresponding ID found on <code>java.util.time.getAvailableIDs()</code>.</p>
   * @public
   */
  Timezone?: string | undefined;

  /**
   * <p>The time of day that you want the datset to refresh. This value is expressed in HH:MM format. This field is not required for schedules that refresh hourly.</p>
   * @public
   */
  TimeOfTheDay?: string | undefined;
}

/**
 * <p>The refresh schedule of a dataset.</p>
 * @public
 */
export interface RefreshSchedule {
  /**
   * <p>An identifier for the refresh schedule.</p>
   * @public
   */
  ScheduleId: string | undefined;

  /**
   * <p>The frequency for the refresh schedule.</p>
   * @public
   */
  ScheduleFrequency: RefreshFrequency | undefined;

  /**
   * <p>Time after which the refresh schedule can be started, expressed in <code>YYYY-MM-DDTHH:MM:SS</code> format.</p>
   * @public
   */
  StartAfterDateTime?: Date | undefined;

  /**
   * <p>The type of refresh that a datset undergoes. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>FULL_REFRESH</code>: A complete refresh of a dataset.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INCREMENTAL_REFRESH</code>: A partial refresh of some rows of a dataset, based on the time window specified.</p>
   *             </li>
   *          </ul>
   *          <p>For more information on full and incremental refreshes, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/refreshing-imported-data.html">Refreshing SPICE data</a> in the <i>Amazon Quick Suite User Guide</i>.</p>
   * @public
   */
  RefreshType: IngestionType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the refresh schedule.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface CreateRefreshScheduleRequest {
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
export interface CreateRefreshScheduleResponse {
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
 * @enum
 */
export const Role = {
  ADMIN: "ADMIN",
  ADMIN_PRO: "ADMIN_PRO",
  AUTHOR: "AUTHOR",
  AUTHOR_PRO: "AUTHOR_PRO",
  READER: "READER",
  READER_PRO: "READER_PRO",
} as const;

/**
 * @public
 */
export type Role = (typeof Role)[keyof typeof Role];

/**
 * @public
 */
export interface CreateRoleMembershipRequest {
  /**
   * <p>The name of the group that you want to add to the role.</p>
   * @public
   */
  MemberName: string | undefined;

  /**
   * <p>The ID for the Amazon Web Services account that you want to create a group in. The Amazon Web Services account ID that you provide must be the same Amazon Web Services account that contains your Amazon Quick Sight account.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace that the role belongs to.</p>
   * @public
   */
  Namespace: string | undefined;

  /**
   * <p>The role that you want to add a group to.</p>
   * @public
   */
  Role: Role | undefined;
}

/**
 * @public
 */
export interface CreateRoleMembershipResponse {
  /**
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
 * <p>Dataset schema.</p>
 * @public
 */
export interface DataSetSchema {
  /**
   * <p>A structure containing the list of column schemas.</p>
   * @public
   */
  ColumnSchemaList?: ColumnSchema[] | undefined;
}

/**
 * <p>Dataset configuration.</p>
 * @public
 */
export interface DataSetConfiguration {
  /**
   * <p>Placeholder.</p>
   * @public
   */
  Placeholder?: string | undefined;

  /**
   * <p>Dataset schema.</p>
   * @public
   */
  DataSetSchema?: DataSetSchema | undefined;

  /**
   * <p>A structure containing the list of column group schemas.</p>
   * @public
   */
  ColumnGroupSchemaList?: ColumnGroupSchema[] | undefined;
}

/**
 * <p>The detailed definition of a template.</p>
 * @public
 */
export interface TemplateVersionDefinition {
  /**
   * <p>An array of dataset configurations. These configurations define the required columns for each dataset used within a template.</p>
   * @public
   */
  DataSetConfigurations: DataSetConfiguration[] | undefined;

  /**
   * <p>An array of sheet definitions for a template.</p>
   * @public
   */
  Sheets?: SheetDefinition[] | undefined;

  /**
   * <p>An array of calculated field definitions for the template.</p>
   * @public
   */
  CalculatedFields?: CalculatedField[] | undefined;

  /**
   * <p>An array of parameter declarations for a template.</p>
   *          <p>
   *             <i>Parameters</i> are named variables that can transfer a value for use by an action or an object.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/parameters-in-quicksight.html">Parameters in Amazon Quick Sight</a> in the
   *             <i>Amazon Quick Suite User Guide</i>.
   *         </p>
   * @public
   */
  ParameterDeclarations?: ParameterDeclaration[] | undefined;

  /**
   * <p>Filter definitions for a template.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/filtering-visual-data.html">Filtering Data</a> in the <i>Amazon Quick Suite User Guide</i>.
   *         </p>
   * @public
   */
  FilterGroups?: FilterGroup[] | undefined;

  /**
   * <p> An array of template-level column
   *             configurations. Column configurations are used to set default formatting for a column that's used throughout a template. </p>
   * @public
   */
  ColumnConfigurations?: ColumnConfiguration[] | undefined;

  /**
   * <p>The configuration for default analysis settings.</p>
   * @public
   */
  AnalysisDefaults?: AnalysisDefaults | undefined;

  /**
   * <p>An array of option definitions for a template.</p>
   * @public
   */
  Options?: AssetOptions | undefined;

  /**
   * <p>A structure that describes the query execution options.</p>
   * @public
   */
  QueryExecutionOptions?: QueryExecutionOptions | undefined;

  /**
   * <p>The static files for the definition.</p>
   * @public
   */
  StaticFiles?: StaticFile[] | undefined;
}

/**
 * <p>The source analysis of the template.</p>
 * @public
 */
export interface TemplateSourceAnalysis {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>A structure containing information about the dataset references used as placeholders
   *             in the template.</p>
   * @public
   */
  DataSetReferences: DataSetReference[] | undefined;
}

/**
 * <p>The source template of the template.</p>
 * @public
 */
export interface TemplateSourceTemplate {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * <p>The source entity of the template.</p>
 * @public
 */
export interface TemplateSourceEntity {
  /**
   * <p>The source analysis, if it is based on an analysis.</p>
   * @public
   */
  SourceAnalysis?: TemplateSourceAnalysis | undefined;

  /**
   * <p>The source template, if it is based on an template.</p>
   * @public
   */
  SourceTemplate?: TemplateSourceTemplate | undefined;
}

/**
 * @public
 */
export interface CreateTemplateRequest {
  /**
   * <p>The ID for the Amazon Web Services account that the group is in. You use the ID for the Amazon Web Services account that contains your Amazon Quick Sight account.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>An ID for the template that you want to create. This template is unique per Amazon Web Services Region; in
   * 			each Amazon Web Services account.</p>
   * @public
   */
  TemplateId: string | undefined;

  /**
   * <p>A display name for the template.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A list of resource permissions to be set on the template. </p>
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;

  /**
   * <p>The entity that you are using as a source when you create the template. In
   * 			<code>SourceEntity</code>, you specify the type of object you're using as source:
   * 			<code>SourceTemplate</code> for a template or <code>SourceAnalysis</code> for an
   * 			analysis. Both of these require an Amazon Resource Name (ARN). For
   * 			<code>SourceTemplate</code>, specify the ARN of the source template. For
   * 			<code>SourceAnalysis</code>, specify the ARN of the source analysis. The <code>SourceTemplate</code>
   * 			ARN can contain any Amazon Web Services account and any Quick Sight-supported Amazon Web Services Region. </p>
   *          <p>Use the <code>DataSetReferences</code> entity within <code>SourceTemplate</code> or
   * 			<code>SourceAnalysis</code> to list the replacement datasets for the placeholders listed
   * 			in the original. The schema in each dataset must match its placeholder. </p>
   *          <p>Either a <code>SourceEntity</code> or a <code>Definition</code> must be provided in
   * 			order for the request to be valid.</p>
   * @public
   */
  SourceEntity?: TemplateSourceEntity | undefined;

  /**
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>A description of the current template version being created. This API operation creates the
   * 			first version of the template. Every time <code>UpdateTemplate</code> is called, a new
   * 			version is created. Each version of the template maintains a description of the version
   * 			in the <code>VersionDescription</code> field.</p>
   * @public
   */
  VersionDescription?: string | undefined;

  /**
   * <p>The definition of a template.</p>
   *          <p>A definition is the data model of all features in a Dashboard, Template, or Analysis.</p>
   *          <p>Either a <code>SourceEntity</code> or a <code>Definition</code> must be provided in
   * 			order for the request to be valid.</p>
   * @public
   */
  Definition?: TemplateVersionDefinition | undefined;

  /**
   * <p>TThe option to relax the validation needed to create a template with definition objects. This skips the validation step for specific errors.</p>
   * @public
   */
  ValidationStrategy?: ValidationStrategy | undefined;
}

/**
 * @public
 */
export interface CreateTemplateResponse {
  /**
   * <p>The ARN for the template.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ARN for the template, including the version information of
   * 			the first version.</p>
   * @public
   */
  VersionArn?: string | undefined;

  /**
   * <p>The ID of the template.</p>
   * @public
   */
  TemplateId?: string | undefined;

  /**
   * <p>The template creation status.</p>
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
export interface CreateTemplateAliasRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the template that you creating an alias for.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>An ID for the template.</p>
   * @public
   */
  TemplateId: string | undefined;

  /**
   * <p>The name that you want to give to the template alias that you're creating. Don't start the
   * 			alias name with the <code>$</code> character. Alias names that start with <code>$</code>
   * 			are reserved by Quick Sight. </p>
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
 * <p>The template alias.</p>
 * @public
 */
export interface TemplateAlias {
  /**
   * <p>The display name of the template alias.</p>
   * @public
   */
  AliasName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the template alias.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The version number of the template alias.</p>
   * @public
   */
  TemplateVersionNumber?: number | undefined;
}

/**
 * @public
 */
export interface CreateTemplateAliasResponse {
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
 * <p>The theme colors that are used for data colors in charts. The colors description is a
 *             hexadecimal color code that consists of six alphanumerical characters, prefixed with
 *                 <code>#</code>, for example #37BFF5. </p>
 * @public
 */
export interface DataColorPalette {
  /**
   * <p>The hexadecimal codes for the colors.</p>
   * @public
   */
  Colors?: string[] | undefined;

  /**
   * <p>The minimum and maximum hexadecimal codes that describe a color gradient. </p>
   * @public
   */
  MinMaxGradient?: string[] | undefined;

  /**
   * <p>The hexadecimal code of a color that applies to charts where a lack of data is
   *             highlighted.</p>
   * @public
   */
  EmptyFillColor?: string | undefined;
}

/**
 * <p>Display options related to tiles on a sheet.</p>
 * @public
 */
export interface TileStyle {
  /**
   * <p>The border around a tile.</p>
   * @public
   */
  Border?: BorderStyle | undefined;
}

/**
 * <p>The display options for gutter spacing between tiles on a sheet.</p>
 * @public
 */
export interface GutterStyle {
  /**
   * <p>This Boolean value controls whether to display a gutter space between sheet tiles.
   *         </p>
   * @public
   */
  Show?: boolean | undefined;
}

/**
 * <p>The display options for margins around the outside edge of sheets.</p>
 * @public
 */
export interface MarginStyle {
  /**
   * <p>This Boolean value controls whether to display sheet margins.</p>
   * @public
   */
  Show?: boolean | undefined;
}

/**
 * <p>The display options for the layout of tiles on a sheet.</p>
 * @public
 */
export interface TileLayoutStyle {
  /**
   * <p>The gutter settings that apply between tiles. </p>
   * @public
   */
  Gutter?: GutterStyle | undefined;

  /**
   * <p>The margin settings that apply around the outside edge of sheets.</p>
   * @public
   */
  Margin?: MarginStyle | undefined;
}

/**
 * <p>The theme display options for sheets. </p>
 * @public
 */
export interface SheetStyle {
  /**
   * <p>The display options for tiles.</p>
   * @public
   */
  Tile?: TileStyle | undefined;

  /**
   * <p>The layout options for tiles.</p>
   * @public
   */
  TileLayout?: TileLayoutStyle | undefined;
}

/**
 * <p>Determines the font settings.</p>
 * @public
 */
export interface Font {
  /**
   * <p>Determines the font family settings.</p>
   * @public
   */
  FontFamily?: string | undefined;
}

/**
 * <p>Determines the typography options.</p>
 * @public
 */
export interface Typography {
  /**
   * <p>Determines the list of font families.</p>
   * @public
   */
  FontFamilies?: Font[] | undefined;
}

/**
 * <p>The theme colors that apply to UI and to charts, excluding data colors. The colors
 *             description is a hexadecimal color code that consists of six alphanumerical characters,
 *             prefixed with <code>#</code>, for example #37BFF5. For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/themes-in-quicksight.html">Using Themes in Quick Sight</a> in the <i>Quick Sight User
 *                 Guide.</i>
 *          </p>
 * @public
 */
export interface UIColorPalette {
  /**
   * <p>The color of text and other foreground elements that appear over the primary
   *             background regions, such as grid lines, borders, table banding, icons, and so on.</p>
   * @public
   */
  PrimaryForeground?: string | undefined;

  /**
   * <p>The background color that applies to visuals and other high emphasis UI.</p>
   * @public
   */
  PrimaryBackground?: string | undefined;

  /**
   * <p>The foreground color that applies to any sheet title, sheet control text, or UI that
   *             appears over the secondary background.</p>
   * @public
   */
  SecondaryForeground?: string | undefined;

  /**
   * <p>The background color that applies to the sheet background and sheet controls.</p>
   * @public
   */
  SecondaryBackground?: string | undefined;

  /**
   * <p>This color is that applies to selected states and buttons.</p>
   * @public
   */
  Accent?: string | undefined;

  /**
   * <p>The foreground color that applies to any text or other elements that appear over the
   *             accent color.</p>
   * @public
   */
  AccentForeground?: string | undefined;

  /**
   * <p>The color that applies to error messages.</p>
   * @public
   */
  Danger?: string | undefined;

  /**
   * <p>The foreground color that applies to any text or other elements that appear over the
   *             error color.</p>
   * @public
   */
  DangerForeground?: string | undefined;

  /**
   * <p>This color that applies to warning and informational messages.</p>
   * @public
   */
  Warning?: string | undefined;

  /**
   * <p>The foreground color that applies to any text or other elements that appear over the
   *             warning color.</p>
   * @public
   */
  WarningForeground?: string | undefined;

  /**
   * <p>The color that applies to success messages, for example the check mark for a
   *             successful download.</p>
   * @public
   */
  Success?: string | undefined;

  /**
   * <p>The foreground color that applies to any text or other elements that appear over the
   *             success color.</p>
   * @public
   */
  SuccessForeground?: string | undefined;

  /**
   * <p>The color that applies to the names of fields that are identified as
   *             dimensions.</p>
   * @public
   */
  Dimension?: string | undefined;

  /**
   * <p>The foreground color that applies to any text or other elements that appear over the
   *             dimension color.</p>
   * @public
   */
  DimensionForeground?: string | undefined;

  /**
   * <p>The color that applies to the names of fields that are identified as measures.</p>
   * @public
   */
  Measure?: string | undefined;

  /**
   * <p>The foreground color that applies to any text or other elements that appear over the
   *             measure color.</p>
   * @public
   */
  MeasureForeground?: string | undefined;
}

/**
 * <p>The theme configuration. This configuration contains all of the display properties for
 *             a theme.</p>
 * @public
 */
export interface ThemeConfiguration {
  /**
   * <p>Color properties that apply to chart data colors.</p>
   * @public
   */
  DataColorPalette?: DataColorPalette | undefined;

  /**
   * <p>Color properties that apply to the UI and to charts, excluding the colors that apply
   *             to data. </p>
   * @public
   */
  UIColorPalette?: UIColorPalette | undefined;

  /**
   * <p>Display options related to sheets.</p>
   * @public
   */
  Sheet?: SheetStyle | undefined;

  /**
   * <p>Determines the typography options.</p>
   * @public
   */
  Typography?: Typography | undefined;
}

/**
 * @public
 */
export interface CreateThemeRequest {
  /**
   * <p>The ID of the Amazon Web Services account where you want to store the new theme. </p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>An ID for the theme that you want to create. The theme ID is unique per Amazon Web Services Region in
   * 			each Amazon Web Services account.</p>
   * @public
   */
  ThemeId: string | undefined;

  /**
   * <p>A display name for the theme.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The ID of the theme that a custom theme will inherit from. All themes inherit from one of
   * 			the starting themes defined by Amazon Quick Sight. For a list of the starting themes, use
   * 				<code>ListThemes</code> or choose <b>Themes</b> from
   * 			within an analysis. </p>
   * @public
   */
  BaseThemeId: string | undefined;

  /**
   * <p>A description of the first version of the theme that you're creating. Every time
   * 				<code>UpdateTheme</code> is called, a new version is created. Each version of the
   * 			theme has a description of the version in the <code>VersionDescription</code>
   * 			field.</p>
   * @public
   */
  VersionDescription?: string | undefined;

  /**
   * <p>The theme configuration, which contains the theme display properties.</p>
   * @public
   */
  Configuration: ThemeConfiguration | undefined;

  /**
   * <p>A valid grouping of resource permissions to apply to the new theme.
   * 			</p>
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;

  /**
   * <p>A map of the key-value pairs for the resource tag or tags that you want to add to the
   * 			resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateThemeResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the theme.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the new theme.</p>
   * @public
   */
  VersionArn?: string | undefined;

  /**
   * <p>The ID of the theme.</p>
   * @public
   */
  ThemeId?: string | undefined;

  /**
   * <p>The theme creation status.</p>
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
export interface CreateThemeAliasRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the theme for the new theme alias.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>An ID for the theme alias.</p>
   * @public
   */
  ThemeId: string | undefined;

  /**
   * <p>The name that you want to give to the theme alias that you are creating. The
   * 			alias name can't begin with a <code>$</code>. Alias names that start with <code>$</code>
   * 			are reserved by Amazon Quick Sight. </p>
   * @public
   */
  AliasName: string | undefined;

  /**
   * <p>The version number of the theme.</p>
   * @public
   */
  ThemeVersionNumber: number | undefined;
}

/**
 * <p>An alias for a theme.</p>
 * @public
 */
export interface ThemeAlias {
  /**
   * <p>The Amazon Resource Name (ARN) of the theme alias.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The display name of the theme alias.</p>
   * @public
   */
  AliasName?: string | undefined;

  /**
   * <p>The version number of the theme alias.</p>
   * @public
   */
  ThemeVersionNumber?: number | undefined;
}

/**
 * @public
 */
export interface CreateThemeAliasResponse {
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
 * <p>Instructions that provide additional guidance and context for response generation.</p>
 * @public
 */
export interface CustomInstructions {
  /**
   * <p>A text field for providing additional guidance or context for response generation.</p>
   * @public
   */
  CustomInstructionsString: string | undefined;
}

/**
 * <p>Configuration options for a <code>Topic</code>.</p>
 * @public
 */
export interface TopicConfigOptions {
  /**
   * <p>Enables Amazon Q Business Insights for a <code>Topic</code>.</p>
   * @public
   */
  QBusinessInsightsEnabled?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const DefaultAggregation = {
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
export type DefaultAggregation = (typeof DefaultAggregation)[keyof typeof DefaultAggregation];

/**
 * <p>A structure that represents a default formatting definition.</p>
 * @public
 */
export interface DefaultFormatting {
  /**
   * <p>The display format. Valid values for this structure are <code>AUTO</code>,
   *             <code>PERCENT</code>, <code>CURRENCY</code>, <code>NUMBER</code>, <code>DATE</code>, and
   *             <code>STRING</code>.</p>
   * @public
   */
  DisplayFormat?: DisplayFormat | undefined;

  /**
   * <p>The additional options for display formatting.</p>
   * @public
   */
  DisplayFormatOptions?: DisplayFormatOptions | undefined;
}

/**
 * <p>A structure that represents a semantic type.</p>
 * @public
 */
export interface SemanticType {
  /**
   * <p>The semantic type name.</p>
   * @public
   */
  TypeName?: string | undefined;

  /**
   * <p>The semantic type sub type name.</p>
   * @public
   */
  SubTypeName?: string | undefined;

  /**
   * <p>The semantic type parameters.</p>
   * @public
   */
  TypeParameters?: Record<string, string> | undefined;

  /**
   * <p>The semantic type truthy cell value.</p>
   * @public
   */
  TruthyCellValue?: string | undefined;

  /**
   * <p>The other names or aliases for the true cell value.</p>
   * @public
   */
  TruthyCellValueSynonyms?: string[] | undefined;

  /**
   * <p>The semantic type falsey cell value.</p>
   * @public
   */
  FalseyCellValue?: string | undefined;

  /**
   * <p>The other names or aliases for the false cell value.</p>
   * @public
   */
  FalseyCellValueSynonyms?: string[] | undefined;
}

/**
 * <p>A structure that represents a calculated field.</p>
 * @public
 */
export interface TopicCalculatedField {
  /**
   * <p>The calculated field name.</p>
   * @public
   */
  CalculatedFieldName: string | undefined;

  /**
   * <p>The calculated field description.</p>
   * @public
   */
  CalculatedFieldDescription?: string | undefined;

  /**
   * <p>The calculated field expression.</p>
   * @public
   */
  Expression: string | undefined;

  /**
   * <p>The other names or aliases for the calculated field.</p>
   * @public
   */
  CalculatedFieldSynonyms?: string[] | undefined;

  /**
   * <p>A boolean value that indicates if a calculated field is included in the topic.</p>
   * @public
   */
  IsIncludedInTopic?: boolean | undefined;

  /**
   * <p>A Boolean value that indicates if a calculated field is visible in the autocomplete.</p>
   * @public
   */
  DisableIndexing?: boolean | undefined;

  /**
   * <p>The column data role for a calculated field. Valid values for this structure are <code>DIMENSION</code> and <code>MEASURE</code>.</p>
   * @public
   */
  ColumnDataRole?: ColumnDataRole | undefined;

  /**
   * <p>The level of time precision that is used to aggregate <code>DateTime</code> values.</p>
   * @public
   */
  TimeGranularity?: TopicTimeGranularity | undefined;

  /**
   * <p>The default formatting definition.</p>
   * @public
   */
  DefaultFormatting?: DefaultFormatting | undefined;

  /**
   * <p>The default aggregation. Valid values for this structure are <code>SUM</code>,
   *             <code>MAX</code>, <code>MIN</code>, <code>COUNT</code>,
   *          <code>DISTINCT_COUNT</code>,
   *          and <code>AVERAGE</code>.</p>
   * @public
   */
  Aggregation?: DefaultAggregation | undefined;

  /**
   * <p>The order in which data is displayed for the calculated field when
   *          it's used in a comparative context.</p>
   * @public
   */
  ComparativeOrder?: ComparativeOrder | undefined;

  /**
   * <p>The semantic type.</p>
   * @public
   */
  SemanticType?: SemanticType | undefined;

  /**
   * <p>The list of aggregation types that are allowed for the calculated field. Valid values
   *          for this structure are <code>COUNT</code>, <code>DISTINCT_COUNT</code>, <code>MIN</code>,
   *             <code>MAX</code>, <code>MEDIAN</code>, <code>SUM</code>, <code>AVERAGE</code>,
   *             <code>STDEV</code>, <code>STDEVP</code>, <code>VAR</code>,
   *          <code>VARP</code>, and <code>PERCENTILE</code>.</p>
   * @public
   */
  AllowedAggregations?: AuthorSpecifiedAggregation[] | undefined;

  /**
   * <p>The list of aggregation types that are not allowed for the calculated field. Valid
   *          values for this structure are <code>COUNT</code>, <code>DISTINCT_COUNT</code>,
   *             <code>MIN</code>, <code>MAX</code>, <code>MEDIAN</code>, <code>SUM</code>,
   *             <code>AVERAGE</code>, <code>STDEV</code>, <code>STDEVP</code>, <code>VAR</code>,
   *             <code>VARP</code>, and <code>PERCENTILE</code>.</p>
   * @public
   */
  NotAllowedAggregations?: AuthorSpecifiedAggregation[] | undefined;

  /**
   * <p>A Boolean value that indicates whether to never aggregate calculated field in filters.</p>
   * @public
   */
  NeverAggregateInFilter?: boolean | undefined;

  /**
   * <p>The other
   *          names or aliases for the calculated field cell value.</p>
   * @public
   */
  CellValueSynonyms?: CellValueSynonym[] | undefined;

  /**
   * <p>The non additive for the table style target.</p>
   * @public
   */
  NonAdditive?: boolean | undefined;
}

/**
 * <p>Represents a column in a dataset.</p>
 * @public
 */
export interface TopicColumn {
  /**
   * <p>The name of the column.</p>
   * @public
   */
  ColumnName: string | undefined;

  /**
   * <p>A user-friendly name for the column.</p>
   * @public
   */
  ColumnFriendlyName?: string | undefined;

  /**
   * <p>A description of the column and its contents.</p>
   * @public
   */
  ColumnDescription?: string | undefined;

  /**
   * <p>The other names or aliases for the column.</p>
   * @public
   */
  ColumnSynonyms?: string[] | undefined;

  /**
   * <p>The role of the column in the data. Valid values are <code>DIMENSION</code> and <code>MEASURE</code>.</p>
   * @public
   */
  ColumnDataRole?: ColumnDataRole | undefined;

  /**
   * <p>The type of aggregation that is performed on the column data when
   *          it's queried.</p>
   * @public
   */
  Aggregation?: DefaultAggregation | undefined;

  /**
   * <p>A Boolean value that indicates whether the column is included in the query results.</p>
   * @public
   */
  IsIncludedInTopic?: boolean | undefined;

  /**
   * <p>A Boolean value that indicates whether the column shows in the autocomplete functionality.</p>
   * @public
   */
  DisableIndexing?: boolean | undefined;

  /**
   * <p>The order in which data is displayed for the column when
   *          it's used in a comparative context.</p>
   * @public
   */
  ComparativeOrder?: ComparativeOrder | undefined;

  /**
   * <p>The semantic type of data contained in the column.</p>
   * @public
   */
  SemanticType?: SemanticType | undefined;

  /**
   * <p>The level of time precision that is used to aggregate <code>DateTime</code> values.</p>
   * @public
   */
  TimeGranularity?: TopicTimeGranularity | undefined;

  /**
   * <p>The list of aggregation types that are allowed for the column. Valid values for this
   *          structure are <code>COUNT</code>, <code>DISTINCT_COUNT</code>, <code>MIN</code>,
   *             <code>MAX</code>, <code>MEDIAN</code>, <code>SUM</code>, <code>AVERAGE</code>,
   *             <code>STDEV</code>, <code>STDEVP</code>, <code>VAR</code>,
   *          <code>VARP</code>,
   *          and <code>PERCENTILE</code>.</p>
   * @public
   */
  AllowedAggregations?: AuthorSpecifiedAggregation[] | undefined;

  /**
   * <p>The list of aggregation types that are not allowed for the column. Valid values for this
   *          structure are <code>COUNT</code>, <code>DISTINCT_COUNT</code>, <code>MIN</code>,
   *             <code>MAX</code>, <code>MEDIAN</code>, <code>SUM</code>, <code>AVERAGE</code>,
   *             <code>STDEV</code>, <code>STDEVP</code>, <code>VAR</code>,
   *          <code>VARP</code>,
   *          and <code>PERCENTILE</code>.</p>
   * @public
   */
  NotAllowedAggregations?: AuthorSpecifiedAggregation[] | undefined;

  /**
   * <p>The default formatting used for values in the column.</p>
   * @public
   */
  DefaultFormatting?: DefaultFormatting | undefined;

  /**
   * <p>A Boolean
   *          value that indicates whether to aggregate the column data when
   *          it's used in a filter context.</p>
   * @public
   */
  NeverAggregateInFilter?: boolean | undefined;

  /**
   * <p>The other names or aliases for the column cell value.</p>
   * @public
   */
  CellValueSynonyms?: CellValueSynonym[] | undefined;

  /**
   * <p>The non additive value for the column.</p>
   * @public
   */
  NonAdditive?: boolean | undefined;
}

/**
 * <p>A structure that represents a data aggregation.</p>
 * @public
 */
export interface DataAggregation {
  /**
   * <p>The level of time precision that is used to aggregate <code>DateTime</code> values.</p>
   * @public
   */
  DatasetRowDateGranularity?: TopicTimeGranularity | undefined;

  /**
   * <p>The column name for the default date.</p>
   * @public
   */
  DefaultDateColumnName?: string | undefined;
}

/**
 * <p>A constant used in a category filter.</p>
 * @public
 */
export interface TopicCategoryFilterConstant {
  /**
   * <p>The type of category filter constant. This element is used to specify whether a constant is a singular or collective. Valid values are <code>SINGULAR</code> and <code>COLLECTIVE</code>.</p>
   * @public
   */
  ConstantType?: ConstantType | undefined;

  /**
   * <p>A singular constant used in a category filter. This element is used to specify a single value for the constant.</p>
   * @public
   */
  SingularConstant?: string | undefined;

  /**
   * <p>A collective constant used in a category filter. This element is used to specify a list of values for the constant.</p>
   * @public
   */
  CollectiveConstant?: CollectiveConstant | undefined;
}

/**
 * <p>A structure that represents a category filter.</p>
 * @public
 */
export interface TopicCategoryFilter {
  /**
   * <p>The category filter function. Valid values for this structure are <code>EXACT</code> and <code>CONTAINS</code>.</p>
   * @public
   */
  CategoryFilterFunction?: CategoryFilterFunction | undefined;

  /**
   * <p>The category filter type. This element is used to specify whether a filter is a simple category filter or an inverse category filter.</p>
   * @public
   */
  CategoryFilterType?: CategoryFilterType | undefined;

  /**
   * <p>The constant used in a category filter.</p>
   * @public
   */
  Constant?: TopicCategoryFilterConstant | undefined;

  /**
   * <p>A Boolean value that indicates if the filter is inverse.</p>
   * @public
   */
  Inverse?: boolean | undefined;
}

/**
 * @internal
 */
export const TopicIRMetricFilterSensitiveLog = (obj: TopicIRMetric): any => ({
  ...obj,
  ...(obj.Expression && { Expression: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TopicIRFilterSensitiveLog = (obj: TopicIR): any => ({
  ...obj,
  ...(obj.Metrics && { Metrics: obj.Metrics.map((item) => TopicIRMetricFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CalculatedColumnFilterSensitiveLog = (obj: CalculatedColumn): any => ({
  ...obj,
  ...(obj.Expression && { Expression: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ColumnDescriptionFilterSensitiveLog = (obj: ColumnDescription): any => ({
  ...obj,
  ...(obj.Text && { Text: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ColumnTagFilterSensitiveLog = (obj: ColumnTag): any => ({
  ...obj,
  ...(obj.ColumnDescription && { ColumnDescription: ColumnDescriptionFilterSensitiveLog(obj.ColumnDescription) }),
});

/**
 * @internal
 */
export const CreateActionConnectorRequestFilterSensitiveLog = (obj: CreateActionConnectorRequest): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.AuthenticationConfig && { AuthenticationConfig: AuthConfigFilterSensitiveLog(obj.AuthenticationConfig) }),
  ...(obj.Description && { Description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DateTimeParameterFilterSensitiveLog = (obj: DateTimeParameter): any => ({
  ...obj,
  ...(obj.Values && { Values: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DecimalParameterFilterSensitiveLog = (obj: DecimalParameter): any => ({
  ...obj,
  ...(obj.Values && { Values: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const IntegerParameterFilterSensitiveLog = (obj: IntegerParameter): any => ({
  ...obj,
  ...(obj.Values && { Values: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StringParameterFilterSensitiveLog = (obj: StringParameter): any => ({
  ...obj,
  ...(obj.Values && { Values: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const _ParametersFilterSensitiveLog = (obj: _Parameters): any => ({
  ...obj,
  ...(obj.StringParameters && {
    StringParameters: obj.StringParameters.map((item) => StringParameterFilterSensitiveLog(item)),
  }),
  ...(obj.IntegerParameters && {
    IntegerParameters: obj.IntegerParameters.map((item) => IntegerParameterFilterSensitiveLog(item)),
  }),
  ...(obj.DecimalParameters && {
    DecimalParameters: obj.DecimalParameters.map((item) => DecimalParameterFilterSensitiveLog(item)),
  }),
  ...(obj.DateTimeParameters && {
    DateTimeParameters: obj.DateTimeParameters.map((item) => DateTimeParameterFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const CreateAnalysisRequestFilterSensitiveLog = (obj: CreateAnalysisRequest): any => ({
  ...obj,
  ...(obj.Parameters && { Parameters: _ParametersFilterSensitiveLog(obj.Parameters) }),
});

/**
 * @internal
 */
export const CreateColumnsOperationFilterSensitiveLog = (obj: CreateColumnsOperation): any => ({
  ...obj,
  ...(obj.Columns && { Columns: obj.Columns.map((item) => CalculatedColumnFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const DashboardVersionDefinitionFilterSensitiveLog = (obj: DashboardVersionDefinition): any => ({
  ...obj,
  ...(obj.CalculatedFields && {
    CalculatedFields: obj.CalculatedFields.map((item) => CalculatedFieldFilterSensitiveLog(item)),
  }),
  ...(obj.ParameterDeclarations && {
    ParameterDeclarations: obj.ParameterDeclarations.map((item) => ParameterDeclarationFilterSensitiveLog(item)),
  }),
  ...(obj.ColumnConfigurations && {
    ColumnConfigurations: obj.ColumnConfigurations.map((item) => ColumnConfigurationFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const CreateDashboardRequestFilterSensitiveLog = (obj: CreateDashboardRequest): any => ({
  ...obj,
  ...(obj.Parameters && { Parameters: _ParametersFilterSensitiveLog(obj.Parameters) }),
});

/**
 * @internal
 */
export const DataSetDateFilterValueFilterSensitiveLog = (obj: DataSetDateFilterValue): any => ({
  ...obj,
  ...(obj.StaticValue && { StaticValue: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DataSetDateComparisonFilterConditionFilterSensitiveLog = (
  obj: DataSetDateComparisonFilterCondition
): any => ({
  ...obj,
  ...(obj.Value && { Value: DataSetDateFilterValueFilterSensitiveLog(obj.Value) }),
});

/**
 * @internal
 */
export const DataSetDateRangeFilterConditionFilterSensitiveLog = (obj: DataSetDateRangeFilterCondition): any => ({
  ...obj,
  ...(obj.RangeMinimum && { RangeMinimum: DataSetDateFilterValueFilterSensitiveLog(obj.RangeMinimum) }),
  ...(obj.RangeMaximum && { RangeMaximum: DataSetDateFilterValueFilterSensitiveLog(obj.RangeMaximum) }),
});

/**
 * @internal
 */
export const DataSetDateFilterConditionFilterSensitiveLog = (obj: DataSetDateFilterCondition): any => ({
  ...obj,
  ...(obj.ComparisonFilterCondition && {
    ComparisonFilterCondition: DataSetDateComparisonFilterConditionFilterSensitiveLog(obj.ComparisonFilterCondition),
  }),
  ...(obj.RangeFilterCondition && {
    RangeFilterCondition: DataSetDateRangeFilterConditionFilterSensitiveLog(obj.RangeFilterCondition),
  }),
});

/**
 * @internal
 */
export const DataSetNumericFilterValueFilterSensitiveLog = (obj: DataSetNumericFilterValue): any => ({
  ...obj,
  ...(obj.StaticValue && { StaticValue: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DataSetNumericComparisonFilterConditionFilterSensitiveLog = (
  obj: DataSetNumericComparisonFilterCondition
): any => ({
  ...obj,
  ...(obj.Value && { Value: DataSetNumericFilterValueFilterSensitiveLog(obj.Value) }),
});

/**
 * @internal
 */
export const DataSetNumericRangeFilterConditionFilterSensitiveLog = (obj: DataSetNumericRangeFilterCondition): any => ({
  ...obj,
  ...(obj.RangeMinimum && { RangeMinimum: DataSetNumericFilterValueFilterSensitiveLog(obj.RangeMinimum) }),
  ...(obj.RangeMaximum && { RangeMaximum: DataSetNumericFilterValueFilterSensitiveLog(obj.RangeMaximum) }),
});

/**
 * @internal
 */
export const DataSetNumericFilterConditionFilterSensitiveLog = (obj: DataSetNumericFilterCondition): any => ({
  ...obj,
  ...(obj.ComparisonFilterCondition && {
    ComparisonFilterCondition: DataSetNumericComparisonFilterConditionFilterSensitiveLog(obj.ComparisonFilterCondition),
  }),
  ...(obj.RangeFilterCondition && {
    RangeFilterCondition: DataSetNumericRangeFilterConditionFilterSensitiveLog(obj.RangeFilterCondition),
  }),
});

/**
 * @internal
 */
export const DataSetStringFilterValueFilterSensitiveLog = (obj: DataSetStringFilterValue): any => ({
  ...obj,
  ...(obj.StaticValue && { StaticValue: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DataSetStringComparisonFilterConditionFilterSensitiveLog = (
  obj: DataSetStringComparisonFilterCondition
): any => ({
  ...obj,
  ...(obj.Value && { Value: DataSetStringFilterValueFilterSensitiveLog(obj.Value) }),
});

/**
 * @internal
 */
export const DataSetStringListFilterValueFilterSensitiveLog = (obj: DataSetStringListFilterValue): any => ({
  ...obj,
  ...(obj.StaticValues && { StaticValues: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DataSetStringListFilterConditionFilterSensitiveLog = (obj: DataSetStringListFilterCondition): any => ({
  ...obj,
  ...(obj.Values && { Values: DataSetStringListFilterValueFilterSensitiveLog(obj.Values) }),
});

/**
 * @internal
 */
export const DataSetStringFilterConditionFilterSensitiveLog = (obj: DataSetStringFilterCondition): any => ({
  ...obj,
  ...(obj.ComparisonFilterCondition && {
    ComparisonFilterCondition: DataSetStringComparisonFilterConditionFilterSensitiveLog(obj.ComparisonFilterCondition),
  }),
  ...(obj.ListFilterCondition && {
    ListFilterCondition: DataSetStringListFilterConditionFilterSensitiveLog(obj.ListFilterCondition),
  }),
});

/**
 * @internal
 */
export const FilterOperationFilterSensitiveLog = (obj: FilterOperation): any => ({
  ...obj,
  ...(obj.ConditionExpression && { ConditionExpression: SENSITIVE_STRING }),
  ...(obj.StringFilterCondition && {
    StringFilterCondition: DataSetStringFilterConditionFilterSensitiveLog(obj.StringFilterCondition),
  }),
  ...(obj.NumericFilterCondition && {
    NumericFilterCondition: DataSetNumericFilterConditionFilterSensitiveLog(obj.NumericFilterCondition),
  }),
  ...(obj.DateFilterCondition && {
    DateFilterCondition: DataSetDateFilterConditionFilterSensitiveLog(obj.DateFilterCondition),
  }),
});

/**
 * @internal
 */
export const FiltersOperationFilterSensitiveLog = (obj: FiltersOperation): any => ({
  ...obj,
  ...(obj.FilterOperations && {
    FilterOperations: obj.FilterOperations.map((item) => FilterOperationFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const JoinOperationFilterSensitiveLog = (obj: JoinOperation): any => ({
  ...obj,
  ...(obj.OnClause && { OnClause: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TransformStepFilterSensitiveLog = (obj: TransformStep): any => ({
  ...obj,
  ...(obj.JoinStep && { JoinStep: JoinOperationFilterSensitiveLog(obj.JoinStep) }),
});

/**
 * @internal
 */
export const DataPrepConfigurationFilterSensitiveLog = (obj: DataPrepConfiguration): any => ({
  ...obj,
  ...(obj.TransformStepMap && {
    TransformStepMap: Object.entries(obj.TransformStepMap).reduce(
      (acc: any, [key, value]: [string, TransformStep]) => ((acc[key] = TransformStepFilterSensitiveLog(value)), acc),
      {}
    ),
  }),
});

/**
 * @internal
 */
export const TagColumnOperationFilterSensitiveLog = (obj: TagColumnOperation): any => ({
  ...obj,
  ...(obj.Tags && { Tags: obj.Tags.map((item) => ColumnTagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const TransformOperationFilterSensitiveLog = (obj: TransformOperation): any => {
  if (obj.ProjectOperation !== undefined) return { ProjectOperation: obj.ProjectOperation };
  if (obj.FilterOperation !== undefined)
    return { FilterOperation: FilterOperationFilterSensitiveLog(obj.FilterOperation) };
  if (obj.CreateColumnsOperation !== undefined)
    return { CreateColumnsOperation: CreateColumnsOperationFilterSensitiveLog(obj.CreateColumnsOperation) };
  if (obj.RenameColumnOperation !== undefined) return { RenameColumnOperation: obj.RenameColumnOperation };
  if (obj.CastColumnTypeOperation !== undefined) return { CastColumnTypeOperation: obj.CastColumnTypeOperation };
  if (obj.TagColumnOperation !== undefined)
    return { TagColumnOperation: TagColumnOperationFilterSensitiveLog(obj.TagColumnOperation) };
  if (obj.UntagColumnOperation !== undefined) return { UntagColumnOperation: obj.UntagColumnOperation };
  if (obj.OverrideDatasetParameterOperation !== undefined)
    return { OverrideDatasetParameterOperation: obj.OverrideDatasetParameterOperation };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const LogicalTableFilterSensitiveLog = (obj: LogicalTable): any => ({
  ...obj,
  ...(obj.DataTransforms && {
    DataTransforms: obj.DataTransforms.map((item) => TransformOperationFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const CustomSqlFilterSensitiveLog = (obj: CustomSql): any => ({
  ...obj,
  ...(obj.SqlQuery && { SqlQuery: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PhysicalTableFilterSensitiveLog = (obj: PhysicalTable): any => {
  if (obj.RelationalTable !== undefined) return { RelationalTable: obj.RelationalTable };
  if (obj.CustomSql !== undefined) return { CustomSql: CustomSqlFilterSensitiveLog(obj.CustomSql) };
  if (obj.S3Source !== undefined) return { S3Source: obj.S3Source };
  if (obj.SaaSTable !== undefined) return { SaaSTable: obj.SaaSTable };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const RowLevelPermissionTagRuleFilterSensitiveLog = (obj: RowLevelPermissionTagRule): any => ({
  ...obj,
  ...(obj.MatchAllValue && { MatchAllValue: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RowLevelPermissionTagConfigurationFilterSensitiveLog = (obj: RowLevelPermissionTagConfiguration): any => ({
  ...obj,
  ...(obj.TagRules && { TagRules: obj.TagRules.map((item) => RowLevelPermissionTagRuleFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const RowLevelPermissionConfigurationFilterSensitiveLog = (obj: RowLevelPermissionConfiguration): any => ({
  ...obj,
  ...(obj.TagConfiguration && {
    TagConfiguration: RowLevelPermissionTagConfigurationFilterSensitiveLog(obj.TagConfiguration),
  }),
});

/**
 * @internal
 */
export const SemanticTableFilterSensitiveLog = (obj: SemanticTable): any => ({
  ...obj,
  ...(obj.RowLevelPermissionConfiguration && {
    RowLevelPermissionConfiguration: RowLevelPermissionConfigurationFilterSensitiveLog(
      obj.RowLevelPermissionConfiguration
    ),
  }),
});

/**
 * @internal
 */
export const SemanticModelConfigurationFilterSensitiveLog = (obj: SemanticModelConfiguration): any => ({
  ...obj,
  ...(obj.TableMap && {
    TableMap: Object.entries(obj.TableMap).reduce(
      (acc: any, [key, value]: [string, SemanticTable]) => ((acc[key] = SemanticTableFilterSensitiveLog(value)), acc),
      {}
    ),
  }),
});

/**
 * @internal
 */
export const CreateDataSetRequestFilterSensitiveLog = (obj: CreateDataSetRequest): any => ({
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
export const DataSourceCredentialsFilterSensitiveLog = (obj: DataSourceCredentials): any => ({
  ...obj,
  ...(obj.CredentialPair && { CredentialPair: obj.CredentialPair }),
});

/**
 * @internal
 */
export const CreateDataSourceRequestFilterSensitiveLog = (obj: CreateDataSourceRequest): any => ({
  ...obj,
  ...(obj.DataSourceParameters && { DataSourceParameters: obj.DataSourceParameters }),
  ...(obj.Credentials && { Credentials: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TemplateVersionDefinitionFilterSensitiveLog = (obj: TemplateVersionDefinition): any => ({
  ...obj,
  ...(obj.CalculatedFields && {
    CalculatedFields: obj.CalculatedFields.map((item) => CalculatedFieldFilterSensitiveLog(item)),
  }),
  ...(obj.ParameterDeclarations && {
    ParameterDeclarations: obj.ParameterDeclarations.map((item) => ParameterDeclarationFilterSensitiveLog(item)),
  }),
  ...(obj.ColumnConfigurations && {
    ColumnConfigurations: obj.ColumnConfigurations.map((item) => ColumnConfigurationFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const CreateTemplateRequestFilterSensitiveLog = (obj: CreateTemplateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomInstructionsFilterSensitiveLog = (obj: CustomInstructions): any => ({
  ...obj,
  ...(obj.CustomInstructionsString && { CustomInstructionsString: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SemanticTypeFilterSensitiveLog = (obj: SemanticType): any => ({
  ...obj,
  ...(obj.TruthyCellValue && { TruthyCellValue: SENSITIVE_STRING }),
  ...(obj.TruthyCellValueSynonyms && { TruthyCellValueSynonyms: SENSITIVE_STRING }),
  ...(obj.FalseyCellValue && { FalseyCellValue: SENSITIVE_STRING }),
  ...(obj.FalseyCellValueSynonyms && { FalseyCellValueSynonyms: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TopicCalculatedFieldFilterSensitiveLog = (obj: TopicCalculatedField): any => ({
  ...obj,
  ...(obj.Expression && { Expression: SENSITIVE_STRING }),
  ...(obj.SemanticType && { SemanticType: SemanticTypeFilterSensitiveLog(obj.SemanticType) }),
});

/**
 * @internal
 */
export const TopicColumnFilterSensitiveLog = (obj: TopicColumn): any => ({
  ...obj,
  ...(obj.SemanticType && { SemanticType: SemanticTypeFilterSensitiveLog(obj.SemanticType) }),
});

/**
 * @internal
 */
export const TopicCategoryFilterConstantFilterSensitiveLog = (obj: TopicCategoryFilterConstant): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TopicCategoryFilterFilterSensitiveLog = (obj: TopicCategoryFilter): any => ({
  ...obj,
  ...(obj.Constant && { Constant: SENSITIVE_STRING }),
});
