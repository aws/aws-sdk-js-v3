// smithy-typescript generated code
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
 * @public
 * @enum
 */
export const AuthorizationCodeGrantCredentialsSource = {
  PLAIN_CREDENTIALS: "PLAIN_CREDENTIALS",
} as const;
/**
 * @public
 */
export type AuthorizationCodeGrantCredentialsSource =
  (typeof AuthorizationCodeGrantCredentialsSource)[keyof typeof AuthorizationCodeGrantCredentialsSource];

/**
 * @public
 * @enum
 */
export const ClientCredentialsSource = {
  PLAIN_CREDENTIALS: "PLAIN_CREDENTIALS",
} as const;
/**
 * @public
 */
export type ClientCredentialsSource = (typeof ClientCredentialsSource)[keyof typeof ClientCredentialsSource];

/**
 * @public
 * @enum
 */
export const ConnectionAuthType = {
  API_KEY: "API_KEY",
  BASIC: "BASIC",
  IAM: "IAM",
  NONE: "NONE",
  OAUTH2_AUTHORIZATION_CODE: "OAUTH2_AUTHORIZATION_CODE",
  OAUTH2_CLIENT_CREDENTIALS: "OAUTH2_CLIENT_CREDENTIALS",
} as const;
/**
 * @public
 */
export type ConnectionAuthType = (typeof ConnectionAuthType)[keyof typeof ConnectionAuthType];

/**
 * @public
 * @enum
 */
export const ActionConnectorErrorType = {
  INTERNAL_FAILURE: "INTERNAL_FAILURE",
} as const;
/**
 * @public
 */
export type ActionConnectorErrorType = (typeof ActionConnectorErrorType)[keyof typeof ActionConnectorErrorType];

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
 * @public
 * @enum
 */
export const ActionConnectorType = {
  AMAZON_BEDROCK_AGENT_RUNTIME: "AMAZON_BEDROCK_AGENT_RUNTIME",
  AMAZON_BEDROCK_DATA_AUTOMATION_RUNTIME: "AMAZON_BEDROCK_DATA_AUTOMATION_RUNTIME",
  AMAZON_BEDROCK_RUNTIME: "AMAZON_BEDROCK_RUNTIME",
  AMAZON_COMPREHEND: "AMAZON_COMPREHEND",
  AMAZON_COMPREHEND_MEDICAL: "AMAZON_COMPREHEND_MEDICAL",
  AMAZON_S3: "AMAZON_S3",
  AMAZON_TEXTRACT: "AMAZON_TEXTRACT",
  ASANA: "ASANA",
  ATLASSIAN_CONFLUENCE: "ATLASSIAN_CONFLUENCE",
  BAMBOO_HR: "BAMBOO_HR",
  GENERIC_HTTP: "GENERIC_HTTP",
  JIRA_CLOUD: "JIRA_CLOUD",
  MICROSOFT_ONEDRIVE: "MICROSOFT_ONEDRIVE",
  MICROSOFT_OUTLOOK: "MICROSOFT_OUTLOOK",
  MICROSOFT_SHAREPOINT: "MICROSOFT_SHAREPOINT",
  MICROSOFT_TEAMS: "MICROSOFT_TEAMS",
  PAGERDUTY_ADVANCE: "PAGERDUTY_ADVANCE",
  SALESFORCE_CRM: "SALESFORCE_CRM",
  SAP_BILLOFMATERIALS: "SAP_BILLOFMATERIALS",
  SAP_BUSINESSPARTNER: "SAP_BUSINESSPARTNER",
  SAP_MATERIALSTOCK: "SAP_MATERIALSTOCK",
  SAP_PHYSICALINVENTORY: "SAP_PHYSICALINVENTORY",
  SAP_PRODUCTMASTERDATA: "SAP_PRODUCTMASTERDATA",
  SERVICENOW_NOW_PLATFORM: "SERVICENOW_NOW_PLATFORM",
  SLACK: "SLACK",
  SMARTSHEET: "SMARTSHEET",
  ZENDESK_SUITE: "ZENDESK_SUITE",
} as const;
/**
 * @public
 */
export type ActionConnectorType = (typeof ActionConnectorType)[keyof typeof ActionConnectorType];

/**
 * @public
 * @enum
 */
export const ActionConnectorSearchFilterNameEnum = {
  ACTION_CONNECTOR_NAME: "ACTION_CONNECTOR_NAME",
  ACTION_CONNECTOR_TYPE: "ACTION_CONNECTOR_TYPE",
  DIRECT_QUICKSIGHT_OWNER: "DIRECT_QUICKSIGHT_OWNER",
  DIRECT_QUICKSIGHT_SOLE_OWNER: "DIRECT_QUICKSIGHT_SOLE_OWNER",
  DIRECT_QUICKSIGHT_VIEWER_OR_OWNER: "DIRECT_QUICKSIGHT_VIEWER_OR_OWNER",
  QUICKSIGHT_OWNER: "QUICKSIGHT_OWNER",
  QUICKSIGHT_VIEWER_OR_OWNER: "QUICKSIGHT_VIEWER_OR_OWNER",
} as const;
/**
 * @public
 */
export type ActionConnectorSearchFilterNameEnum =
  (typeof ActionConnectorSearchFilterNameEnum)[keyof typeof ActionConnectorSearchFilterNameEnum];

/**
 * @public
 * @enum
 */
export const FilterOperator = {
  StringEquals: "StringEquals",
  StringLike: "StringLike",
} as const;
/**
 * @public
 */
export type FilterOperator = (typeof FilterOperator)[keyof typeof FilterOperator];

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
 * @public
 * @enum
 */
export const DataPrepSimpleAggregationFunctionType = {
  AVERAGE: "AVERAGE",
  COUNT: "COUNT",
  DISTINCT_COUNT: "DISTINCT_COUNT",
  MAX: "MAX",
  MIN: "MIN",
  SUM: "SUM",
} as const;
/**
 * @public
 */
export type DataPrepSimpleAggregationFunctionType =
  (typeof DataPrepSimpleAggregationFunctionType)[keyof typeof DataPrepSimpleAggregationFunctionType];

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
 * @public
 * @enum
 */
export const DecalPatternType = {
  CHECKERBOARD_LARGE: "CHECKERBOARD_LARGE",
  CHECKERBOARD_MEDIUM: "CHECKERBOARD_MEDIUM",
  CHECKERBOARD_SMALL: "CHECKERBOARD_SMALL",
  CIRCLE_LARGE: "CIRCLE_LARGE",
  CIRCLE_MEDIUM: "CIRCLE_MEDIUM",
  CIRCLE_SMALL: "CIRCLE_SMALL",
  DIAGONAL_LARGE: "DIAGONAL_LARGE",
  DIAGONAL_MEDIUM: "DIAGONAL_MEDIUM",
  DIAGONAL_OPPOSITE_LARGE: "DIAGONAL_OPPOSITE_LARGE",
  DIAGONAL_OPPOSITE_MEDIUM: "DIAGONAL_OPPOSITE_MEDIUM",
  DIAGONAL_OPPOSITE_SMALL: "DIAGONAL_OPPOSITE_SMALL",
  DIAGONAL_SMALL: "DIAGONAL_SMALL",
  DIAMOND_GRID_LARGE: "DIAMOND_GRID_LARGE",
  DIAMOND_GRID_MEDIUM: "DIAMOND_GRID_MEDIUM",
  DIAMOND_GRID_SMALL: "DIAMOND_GRID_SMALL",
  DIAMOND_LARGE: "DIAMOND_LARGE",
  DIAMOND_MEDIUM: "DIAMOND_MEDIUM",
  DIAMOND_SMALL: "DIAMOND_SMALL",
  SOLID: "SOLID",
  TRIANGLE_LARGE: "TRIANGLE_LARGE",
  TRIANGLE_MEDIUM: "TRIANGLE_MEDIUM",
  TRIANGLE_SMALL: "TRIANGLE_SMALL",
} as const;
/**
 * @public
 */
export type DecalPatternType = (typeof DecalPatternType)[keyof typeof DecalPatternType];

/**
 * @public
 * @enum
 */
export const DecalStyleType = {
  Auto: "Auto",
  Manual: "Manual",
} as const;
/**
 * @public
 */
export type DecalStyleType = (typeof DecalStyleType)[keyof typeof DecalStyleType];

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
 * @public
 * @enum
 */
export const LegendPosition = {
  AUTO: "AUTO",
  BOTTOM: "BOTTOM",
  RIGHT: "RIGHT",
  TOP: "TOP",
} as const;
/**
 * @public
 */
export type LegendPosition = (typeof LegendPosition)[keyof typeof LegendPosition];

/**
 * @public
 * @enum
 */
export const BarChartOrientation = {
  HORIZONTAL: "HORIZONTAL",
  VERTICAL: "VERTICAL",
} as const;
/**
 * @public
 */
export type BarChartOrientation = (typeof BarChartOrientation)[keyof typeof BarChartOrientation];

/**
 * @public
 * @enum
 */
export const AxisBinding = {
  PRIMARY_YAXIS: "PRIMARY_YAXIS",
  SECONDARY_YAXIS: "SECONDARY_YAXIS",
} as const;
/**
 * @public
 */
export type AxisBinding = (typeof AxisBinding)[keyof typeof AxisBinding];

/**
 * @public
 * @enum
 */
export const ReferenceLineSeriesType = {
  BAR: "BAR",
  LINE: "LINE",
} as const;
/**
 * @public
 */
export type ReferenceLineSeriesType = (typeof ReferenceLineSeriesType)[keyof typeof ReferenceLineSeriesType];

/**
 * @public
 * @enum
 */
export const ReferenceLineLabelHorizontalPosition = {
  CENTER: "CENTER",
  LEFT: "LEFT",
  RIGHT: "RIGHT",
} as const;
/**
 * @public
 */
export type ReferenceLineLabelHorizontalPosition =
  (typeof ReferenceLineLabelHorizontalPosition)[keyof typeof ReferenceLineLabelHorizontalPosition];

/**
 * @public
 * @enum
 */
export const ReferenceLineValueLabelRelativePosition = {
  AFTER_CUSTOM_LABEL: "AFTER_CUSTOM_LABEL",
  BEFORE_CUSTOM_LABEL: "BEFORE_CUSTOM_LABEL",
} as const;
/**
 * @public
 */
export type ReferenceLineValueLabelRelativePosition =
  (typeof ReferenceLineValueLabelRelativePosition)[keyof typeof ReferenceLineValueLabelRelativePosition];

/**
 * @public
 * @enum
 */
export const ReferenceLineLabelVerticalPosition = {
  ABOVE: "ABOVE",
  BELOW: "BELOW",
} as const;
/**
 * @public
 */
export type ReferenceLineLabelVerticalPosition =
  (typeof ReferenceLineLabelVerticalPosition)[keyof typeof ReferenceLineLabelVerticalPosition];

/**
 * @public
 * @enum
 */
export const ReferenceLinePatternType = {
  DASHED: "DASHED",
  DOTTED: "DOTTED",
  SOLID: "SOLID",
} as const;
/**
 * @public
 */
export type ReferenceLinePatternType = (typeof ReferenceLinePatternType)[keyof typeof ReferenceLinePatternType];

/**
 * @public
 * @enum
 */
export const PanelBorderStyle = {
  DASHED: "DASHED",
  DOTTED: "DOTTED",
  SOLID: "SOLID",
} as const;
/**
 * @public
 */
export type PanelBorderStyle = (typeof PanelBorderStyle)[keyof typeof PanelBorderStyle];

/**
 * @public
 * @enum
 */
export const HorizontalTextAlignment = {
  AUTO: "AUTO",
  CENTER: "CENTER",
  LEFT: "LEFT",
  RIGHT: "RIGHT",
} as const;
/**
 * @public
 */
export type HorizontalTextAlignment = (typeof HorizontalTextAlignment)[keyof typeof HorizontalTextAlignment];

/**
 * @public
 * @enum
 */
export const SmallMultiplesAxisPlacement = {
  INSIDE: "INSIDE",
  OUTSIDE: "OUTSIDE",
} as const;
/**
 * @public
 */
export type SmallMultiplesAxisPlacement =
  (typeof SmallMultiplesAxisPlacement)[keyof typeof SmallMultiplesAxisPlacement];

/**
 * @public
 * @enum
 */
export const SmallMultiplesAxisScale = {
  INDEPENDENT: "INDEPENDENT",
  SHARED: "SHARED",
} as const;
/**
 * @public
 */
export type SmallMultiplesAxisScale = (typeof SmallMultiplesAxisScale)[keyof typeof SmallMultiplesAxisScale];

/**
 * @public
 * @enum
 */
export const OtherCategories = {
  EXCLUDE: "EXCLUDE",
  INCLUDE: "INCLUDE",
} as const;
/**
 * @public
 */
export type OtherCategories = (typeof OtherCategories)[keyof typeof OtherCategories];

/**
 * @public
 * @enum
 */
export const TooltipTarget = {
  BAR: "BAR",
  BOTH: "BOTH",
  LINE: "LINE",
} as const;
/**
 * @public
 */
export type TooltipTarget = (typeof TooltipTarget)[keyof typeof TooltipTarget];

/**
 * @public
 * @enum
 */
export const TooltipTitleType = {
  NONE: "NONE",
  PRIMARY_VALUE: "PRIMARY_VALUE",
} as const;
/**
 * @public
 */
export type TooltipTitleType = (typeof TooltipTitleType)[keyof typeof TooltipTitleType];

/**
 * @public
 * @enum
 */
export const SelectedTooltipType = {
  BASIC: "BASIC",
  DETAILED: "DETAILED",
} as const;
/**
 * @public
 */
export type SelectedTooltipType = (typeof SelectedTooltipType)[keyof typeof SelectedTooltipType];

/**
 * @public
 * @enum
 */
export const PivotTableDataPathType = {
  COUNT_METRIC_COLUMN: "COUNT_METRIC_COLUMN",
  EMPTY_COLUMN_HEADER: "EMPTY_COLUMN_HEADER",
  HIERARCHY_ROWS_LAYOUT_COLUMN: "HIERARCHY_ROWS_LAYOUT_COLUMN",
  MULTIPLE_ROW_METRICS_COLUMN: "MULTIPLE_ROW_METRICS_COLUMN",
} as const;
/**
 * @public
 */
export type PivotTableDataPathType = (typeof PivotTableDataPathType)[keyof typeof PivotTableDataPathType];

/**
 * @public
 * @enum
 */
export const BoxPlotFillStyle = {
  SOLID: "SOLID",
  TRANSPARENT: "TRANSPARENT",
} as const;
/**
 * @public
 */
export type BoxPlotFillStyle = (typeof BoxPlotFillStyle)[keyof typeof BoxPlotFillStyle];

/**
 * @public
 * @enum
 */
export const LineInterpolation = {
  LINEAR: "LINEAR",
  SMOOTH: "SMOOTH",
  STEPPED: "STEPPED",
} as const;
/**
 * @public
 */
export type LineInterpolation = (typeof LineInterpolation)[keyof typeof LineInterpolation];

/**
 * @public
 * @enum
 */
export const LineChartLineStyle = {
  DASHED: "DASHED",
  DOTTED: "DOTTED",
  SOLID: "SOLID",
} as const;
/**
 * @public
 */
export type LineChartLineStyle = (typeof LineChartLineStyle)[keyof typeof LineChartLineStyle];

/**
 * @public
 * @enum
 */
export const LineChartMarkerShape = {
  CIRCLE: "CIRCLE",
  DIAMOND: "DIAMOND",
  ROUNDED_SQUARE: "ROUNDED_SQUARE",
  SQUARE: "SQUARE",
  TRIANGLE: "TRIANGLE",
} as const;
/**
 * @public
 */
export type LineChartMarkerShape = (typeof LineChartMarkerShape)[keyof typeof LineChartMarkerShape];

/**
 * @public
 * @enum
 */
export const SingleYAxisOption = {
  PRIMARY_Y_AXIS: "PRIMARY_Y_AXIS",
} as const;
/**
 * @public
 */
export type SingleYAxisOption = (typeof SingleYAxisOption)[keyof typeof SingleYAxisOption];

/**
 * @public
 * @enum
 */
export const CustomContentType = {
  IMAGE: "IMAGE",
  OTHER_EMBEDDED_CONTENT: "OTHER_EMBEDDED_CONTENT",
} as const;
/**
 * @public
 */
export type CustomContentType = (typeof CustomContentType)[keyof typeof CustomContentType];

/**
 * @public
 * @enum
 */
export const CustomContentImageScalingConfiguration = {
  DO_NOT_SCALE: "DO_NOT_SCALE",
  FIT_TO_HEIGHT: "FIT_TO_HEIGHT",
  FIT_TO_WIDTH: "FIT_TO_WIDTH",
  SCALE_TO_VISUAL: "SCALE_TO_VISUAL",
} as const;
/**
 * @public
 */
export type CustomContentImageScalingConfiguration =
  (typeof CustomContentImageScalingConfiguration)[keyof typeof CustomContentImageScalingConfiguration];

/**
 * @public
 * @enum
 */
export const BaseMapStyleType = {
  DARK_GRAY: "DARK_GRAY",
  IMAGERY: "IMAGERY",
  LIGHT_GRAY: "LIGHT_GRAY",
  STREET: "STREET",
} as const;
/**
 * @public
 */
export type BaseMapStyleType = (typeof BaseMapStyleType)[keyof typeof BaseMapStyleType];

/**
 * @public
 * @enum
 */
export const MapZoomMode = {
  AUTO: "AUTO",
  MANUAL: "MANUAL",
} as const;
/**
 * @public
 */
export type MapZoomMode = (typeof MapZoomMode)[keyof typeof MapZoomMode];

/**
 * @public
 * @enum
 */
export const FunnelChartMeasureDataLabelStyle = {
  PERCENTAGE_BY_FIRST_STAGE: "PERCENTAGE_BY_FIRST_STAGE",
  PERCENTAGE_BY_PREVIOUS_STAGE: "PERCENTAGE_BY_PREVIOUS_STAGE",
  VALUE_AND_PERCENTAGE_BY_FIRST_STAGE: "VALUE_AND_PERCENTAGE_BY_FIRST_STAGE",
  VALUE_AND_PERCENTAGE_BY_PREVIOUS_STAGE: "VALUE_AND_PERCENTAGE_BY_PREVIOUS_STAGE",
  VALUE_ONLY: "VALUE_ONLY",
} as const;
/**
 * @public
 */
export type FunnelChartMeasureDataLabelStyle =
  (typeof FunnelChartMeasureDataLabelStyle)[keyof typeof FunnelChartMeasureDataLabelStyle];

/**
 * @public
 * @enum
 */
export const ArcThicknessOptions = {
  LARGE: "LARGE",
  MEDIUM: "MEDIUM",
  SMALL: "SMALL",
} as const;
/**
 * @public
 */
export type ArcThicknessOptions = (typeof ArcThicknessOptions)[keyof typeof ArcThicknessOptions];

/**
 * @public
 * @enum
 */
export const ComparisonMethod = {
  DIFFERENCE: "DIFFERENCE",
  PERCENT: "PERCENT",
  PERCENT_DIFFERENCE: "PERCENT_DIFFERENCE",
} as const;
/**
 * @public
 */
export type ComparisonMethod = (typeof ComparisonMethod)[keyof typeof ComparisonMethod];

/**
 * @public
 * @enum
 */
export const PrimaryValueDisplayType = {
  ACTUAL: "ACTUAL",
  COMPARISON: "COMPARISON",
  HIDDEN: "HIDDEN",
} as const;
/**
 * @public
 */
export type PrimaryValueDisplayType = (typeof PrimaryValueDisplayType)[keyof typeof PrimaryValueDisplayType];

/**
 * @public
 * @enum
 */
export const ConditionalFormattingIconDisplayOption = {
  ICON_ONLY: "ICON_ONLY",
} as const;
/**
 * @public
 */
export type ConditionalFormattingIconDisplayOption =
  (typeof ConditionalFormattingIconDisplayOption)[keyof typeof ConditionalFormattingIconDisplayOption];

/**
 * @public
 * @enum
 */
export const Icon = {
  ARROW_DOWN: "ARROW_DOWN",
  ARROW_DOWN_LEFT: "ARROW_DOWN_LEFT",
  ARROW_DOWN_RIGHT: "ARROW_DOWN_RIGHT",
  ARROW_LEFT: "ARROW_LEFT",
  ARROW_RIGHT: "ARROW_RIGHT",
  ARROW_UP: "ARROW_UP",
  ARROW_UP_LEFT: "ARROW_UP_LEFT",
  ARROW_UP_RIGHT: "ARROW_UP_RIGHT",
  CARET_DOWN: "CARET_DOWN",
  CARET_UP: "CARET_UP",
  CHECKMARK: "CHECKMARK",
  CIRCLE: "CIRCLE",
  FACE_DOWN: "FACE_DOWN",
  FACE_FLAT: "FACE_FLAT",
  FACE_UP: "FACE_UP",
  FLAG: "FLAG",
  MINUS: "MINUS",
  ONE_BAR: "ONE_BAR",
  PLUS: "PLUS",
  SQUARE: "SQUARE",
  THREE_BAR: "THREE_BAR",
  THUMBS_DOWN: "THUMBS_DOWN",
  THUMBS_UP: "THUMBS_UP",
  TRIANGLE: "TRIANGLE",
  TWO_BAR: "TWO_BAR",
  X: "X",
} as const;
/**
 * @public
 */
export type Icon = (typeof Icon)[keyof typeof Icon];

/**
 * @public
 * @enum
 */
export const ConditionalFormattingIconSetType = {
  BARS: "BARS",
  CARET_UP_MINUS_DOWN: "CARET_UP_MINUS_DOWN",
  CHECK_X: "CHECK_X",
  FLAGS: "FLAGS",
  FOUR_COLOR_ARROW: "FOUR_COLOR_ARROW",
  FOUR_GRAY_ARROW: "FOUR_GRAY_ARROW",
  PLUS_MINUS: "PLUS_MINUS",
  THREE_CIRCLE: "THREE_CIRCLE",
  THREE_COLOR_ARROW: "THREE_COLOR_ARROW",
  THREE_GRAY_ARROW: "THREE_GRAY_ARROW",
  THREE_SHAPE: "THREE_SHAPE",
} as const;
/**
 * @public
 */
export type ConditionalFormattingIconSetType =
  (typeof ConditionalFormattingIconSetType)[keyof typeof ConditionalFormattingIconSetType];

/**
 * @public
 * @enum
 */
export const GeospatialSelectedPointStyle = {
  CLUSTER: "CLUSTER",
  HEATMAP: "HEATMAP",
  POINT: "POINT",
} as const;
/**
 * @public
 */
export type GeospatialSelectedPointStyle =
  (typeof GeospatialSelectedPointStyle)[keyof typeof GeospatialSelectedPointStyle];

/**
 * @public
 * @enum
 */
export const ColorFillType = {
  DISCRETE: "DISCRETE",
  GRADIENT: "GRADIENT",
} as const;
/**
 * @public
 */
export type ColorFillType = (typeof ColorFillType)[keyof typeof ColorFillType];

/**
 * @public
 * @enum
 */
export const HistogramBinType = {
  BIN_COUNT: "BIN_COUNT",
  BIN_WIDTH: "BIN_WIDTH",
} as const;
/**
 * @public
 */
export type HistogramBinType = (typeof HistogramBinType)[keyof typeof HistogramBinType];

/**
 * @public
 * @enum
 */
export const ForecastComputationSeasonality = {
  AUTOMATIC: "AUTOMATIC",
  CUSTOM: "CUSTOM",
} as const;
/**
 * @public
 */
export type ForecastComputationSeasonality =
  (typeof ForecastComputationSeasonality)[keyof typeof ForecastComputationSeasonality];

/**
 * @public
 * @enum
 */
export const MaximumMinimumComputationType = {
  MAXIMUM: "MAXIMUM",
  MINIMUM: "MINIMUM",
} as const;
/**
 * @public
 */
export type MaximumMinimumComputationType =
  (typeof MaximumMinimumComputationType)[keyof typeof MaximumMinimumComputationType];

/**
 * @public
 * @enum
 */
export const TopBottomSortOrder = {
  ABSOLUTE_DIFFERENCE: "ABSOLUTE_DIFFERENCE",
  PERCENT_DIFFERENCE: "PERCENT_DIFFERENCE",
} as const;
/**
 * @public
 */
export type TopBottomSortOrder = (typeof TopBottomSortOrder)[keyof typeof TopBottomSortOrder];

/**
 * @public
 * @enum
 */
export const TopBottomComputationType = {
  BOTTOM: "BOTTOM",
  TOP: "TOP",
} as const;
/**
 * @public
 */
export type TopBottomComputationType = (typeof TopBottomComputationType)[keyof typeof TopBottomComputationType];

/**
 * @public
 * @enum
 */
export const KPISparklineType = {
  AREA: "AREA",
  LINE: "LINE",
} as const;
/**
 * @public
 */
export type KPISparklineType = (typeof KPISparklineType)[keyof typeof KPISparklineType];

/**
 * @public
 * @enum
 */
export const KPIVisualStandardLayoutType = {
  CLASSIC: "CLASSIC",
  VERTICAL: "VERTICAL",
} as const;
/**
 * @public
 */
export type KPIVisualStandardLayoutType =
  (typeof KPIVisualStandardLayoutType)[keyof typeof KPIVisualStandardLayoutType];

/**
 * @public
 * @enum
 */
export const LayerCustomActionTrigger = {
  DATA_POINT_CLICK: "DATA_POINT_CLICK",
  DATA_POINT_MENU: "DATA_POINT_MENU",
} as const;
/**
 * @public
 */
export type LayerCustomActionTrigger = (typeof LayerCustomActionTrigger)[keyof typeof LayerCustomActionTrigger];

/**
 * @public
 * @enum
 */
export const GeospatialColorState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type GeospatialColorState = (typeof GeospatialColorState)[keyof typeof GeospatialColorState];

/**
 * @public
 * @enum
 */
export const GeospatialLayerType = {
  LINE: "LINE",
  POINT: "POINT",
  POLYGON: "POLYGON",
} as const;
/**
 * @public
 */
export type GeospatialLayerType = (typeof GeospatialLayerType)[keyof typeof GeospatialLayerType];

/**
 * @public
 * @enum
 */
export const GeospatialMapNavigation = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type GeospatialMapNavigation = (typeof GeospatialMapNavigation)[keyof typeof GeospatialMapNavigation];

/**
 * @public
 * @enum
 */
export const MissingDataTreatmentOption = {
  INTERPOLATE: "INTERPOLATE",
  SHOW_AS_BLANK: "SHOW_AS_BLANK",
  SHOW_AS_ZERO: "SHOW_AS_ZERO",
} as const;
/**
 * @public
 */
export type MissingDataTreatmentOption = (typeof MissingDataTreatmentOption)[keyof typeof MissingDataTreatmentOption];

/**
 * @public
 * @enum
 */
export const LineChartType = {
  AREA: "AREA",
  LINE: "LINE",
  STACKED_AREA: "STACKED_AREA",
} as const;
/**
 * @public
 */
export type LineChartType = (typeof LineChartType)[keyof typeof LineChartType];

/**
 * @public
 * @enum
 */
export const ArcThickness = {
  LARGE: "LARGE",
  MEDIUM: "MEDIUM",
  SMALL: "SMALL",
  WHOLE: "WHOLE",
} as const;
/**
 * @public
 */
export type ArcThickness = (typeof ArcThickness)[keyof typeof ArcThickness];

/**
 * @public
 * @enum
 */
export const DashboardCustomizationStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type DashboardCustomizationStatus =
  (typeof DashboardCustomizationStatus)[keyof typeof DashboardCustomizationStatus];

/**
 * @public
 * @enum
 */
export const PivotTableFieldCollapseState = {
  COLLAPSED: "COLLAPSED",
  EXPANDED: "EXPANDED",
} as const;
/**
 * @public
 */
export type PivotTableFieldCollapseState =
  (typeof PivotTableFieldCollapseState)[keyof typeof PivotTableFieldCollapseState];

/**
 * @public
 * @enum
 */
export const TableBorderStyle = {
  NONE: "NONE",
  SOLID: "SOLID",
} as const;
/**
 * @public
 */
export type TableBorderStyle = (typeof TableBorderStyle)[keyof typeof TableBorderStyle];

/**
 * @public
 * @enum
 */
export const TextWrap = {
  NONE: "NONE",
  WRAP: "WRAP",
} as const;
/**
 * @public
 */
export type TextWrap = (typeof TextWrap)[keyof typeof TextWrap];

/**
 * @public
 * @enum
 */
export const VerticalTextAlignment = {
  AUTO: "AUTO",
  BOTTOM: "BOTTOM",
  MIDDLE: "MIDDLE",
  TOP: "TOP",
} as const;
/**
 * @public
 */
export type VerticalTextAlignment = (typeof VerticalTextAlignment)[keyof typeof VerticalTextAlignment];

/**
 * @public
 * @enum
 */
export const PivotTableMetricPlacement = {
  COLUMN: "COLUMN",
  ROW: "ROW",
} as const;
/**
 * @public
 */
export type PivotTableMetricPlacement = (typeof PivotTableMetricPlacement)[keyof typeof PivotTableMetricPlacement];

/**
 * @public
 * @enum
 */
export const PivotTableRowsLayout = {
  HIERARCHY: "HIERARCHY",
  TABULAR: "TABULAR",
} as const;
/**
 * @public
 */
export type PivotTableRowsLayout = (typeof PivotTableRowsLayout)[keyof typeof PivotTableRowsLayout];

/**
 * @public
 * @enum
 */
export const PivotTableSubtotalLevel = {
  ALL: "ALL",
  CUSTOM: "CUSTOM",
  LAST: "LAST",
} as const;
/**
 * @public
 */
export type PivotTableSubtotalLevel = (typeof PivotTableSubtotalLevel)[keyof typeof PivotTableSubtotalLevel];

/**
 * @public
 * @enum
 */
export const StyledCellType = {
  METRIC_HEADER: "METRIC_HEADER",
  TOTAL: "TOTAL",
  VALUE: "VALUE",
} as const;
/**
 * @public
 */
export type StyledCellType = (typeof StyledCellType)[keyof typeof StyledCellType];

/**
 * @public
 * @enum
 */
export const TableTotalsPlacement = {
  AUTO: "AUTO",
  END: "END",
  START: "START",
} as const;
/**
 * @public
 */
export type TableTotalsPlacement = (typeof TableTotalsPlacement)[keyof typeof TableTotalsPlacement];

/**
 * @public
 * @enum
 */
export const TableTotalsScrollStatus = {
  PINNED: "PINNED",
  SCROLLED: "SCROLLED",
} as const;
/**
 * @public
 */
export type TableTotalsScrollStatus = (typeof TableTotalsScrollStatus)[keyof typeof TableTotalsScrollStatus];

/**
 * @public
 * @enum
 */
export const SimpleTotalAggregationFunction = {
  AVERAGE: "AVERAGE",
  DEFAULT: "DEFAULT",
  MAX: "MAX",
  MIN: "MIN",
  NONE: "NONE",
  SUM: "SUM",
} as const;
/**
 * @public
 */
export type SimpleTotalAggregationFunction =
  (typeof SimpleTotalAggregationFunction)[keyof typeof SimpleTotalAggregationFunction];

/**
 * @public
 * @enum
 */
export const PivotTableConditionalFormattingScopeRole = {
  FIELD: "FIELD",
  FIELD_TOTAL: "FIELD_TOTAL",
  GRAND_TOTAL: "GRAND_TOTAL",
} as const;
/**
 * @public
 */
export type PivotTableConditionalFormattingScopeRole =
  (typeof PivotTableConditionalFormattingScopeRole)[keyof typeof PivotTableConditionalFormattingScopeRole];

/**
 * @public
 * @enum
 */
export const PluginVisualAxisName = {
  GROUP_BY: "GROUP_BY",
  VALUE: "VALUE",
} as const;
/**
 * @public
 */
export type PluginVisualAxisName = (typeof PluginVisualAxisName)[keyof typeof PluginVisualAxisName];

/**
 * @public
 * @enum
 */
export const RadarChartAxesRangeScale = {
  AUTO: "AUTO",
  INDEPENDENT: "INDEPENDENT",
  SHARED: "SHARED",
} as const;
/**
 * @public
 */
export type RadarChartAxesRangeScale = (typeof RadarChartAxesRangeScale)[keyof typeof RadarChartAxesRangeScale];

/**
 * @public
 * @enum
 */
export const RadarChartShape = {
  CIRCLE: "CIRCLE",
  POLYGON: "POLYGON",
} as const;
/**
 * @public
 */
export type RadarChartShape = (typeof RadarChartShape)[keyof typeof RadarChartShape];

/**
 * @public
 * @enum
 */
export const TableCellImageScalingConfiguration = {
  DO_NOT_SCALE: "DO_NOT_SCALE",
  FIT_TO_CELL_HEIGHT: "FIT_TO_CELL_HEIGHT",
  FIT_TO_CELL_WIDTH: "FIT_TO_CELL_WIDTH",
} as const;
/**
 * @public
 */
export type TableCellImageScalingConfiguration =
  (typeof TableCellImageScalingConfiguration)[keyof typeof TableCellImageScalingConfiguration];

/**
 * @public
 * @enum
 */
export const TableFieldIconSetType = {
  LINK: "LINK",
} as const;
/**
 * @public
 */
export type TableFieldIconSetType = (typeof TableFieldIconSetType)[keyof typeof TableFieldIconSetType];

/**
 * @public
 * @enum
 */
export const TransposedColumnType = {
  ROW_HEADER_COLUMN: "ROW_HEADER_COLUMN",
  VALUE_COLUMN: "VALUE_COLUMN",
} as const;
/**
 * @public
 */
export type TransposedColumnType = (typeof TransposedColumnType)[keyof typeof TransposedColumnType];

/**
 * @public
 * @enum
 */
export const TableOrientation = {
  HORIZONTAL: "HORIZONTAL",
  VERTICAL: "VERTICAL",
} as const;
/**
 * @public
 */
export type TableOrientation = (typeof TableOrientation)[keyof typeof TableOrientation];

/**
 * @public
 * @enum
 */
export const WordCloudCloudLayout = {
  FLUID: "FLUID",
  NORMAL: "NORMAL",
} as const;
/**
 * @public
 */
export type WordCloudCloudLayout = (typeof WordCloudCloudLayout)[keyof typeof WordCloudCloudLayout];

/**
 * @public
 * @enum
 */
export const WordCloudWordCasing = {
  EXISTING_CASE: "EXISTING_CASE",
  LOWER_CASE: "LOWER_CASE",
} as const;
/**
 * @public
 */
export type WordCloudWordCasing = (typeof WordCloudWordCasing)[keyof typeof WordCloudWordCasing];

/**
 * @public
 * @enum
 */
export const WordCloudWordOrientation = {
  HORIZONTAL: "HORIZONTAL",
  HORIZONTAL_AND_VERTICAL: "HORIZONTAL_AND_VERTICAL",
} as const;
/**
 * @public
 */
export type WordCloudWordOrientation = (typeof WordCloudWordOrientation)[keyof typeof WordCloudWordOrientation];

/**
 * @public
 * @enum
 */
export const WordCloudWordPadding = {
  LARGE: "LARGE",
  MEDIUM: "MEDIUM",
  NONE: "NONE",
  SMALL: "SMALL",
} as const;
/**
 * @public
 */
export type WordCloudWordPadding = (typeof WordCloudWordPadding)[keyof typeof WordCloudWordPadding];

/**
 * @public
 * @enum
 */
export const WordCloudWordScaling = {
  EMPHASIZE: "EMPHASIZE",
  NORMAL: "NORMAL",
} as const;
/**
 * @public
 */
export type WordCloudWordScaling = (typeof WordCloudWordScaling)[keyof typeof WordCloudWordScaling];

/**
 * @public
 * @enum
 */
export const AnalysisFilterAttribute = {
  ANALYSIS_NAME: "ANALYSIS_NAME",
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
export type AnalysisFilterAttribute = (typeof AnalysisFilterAttribute)[keyof typeof AnalysisFilterAttribute];

/**
 * @public
 * @enum
 */
export const AnchorType = {
  TODAY: "TODAY",
} as const;
/**
 * @public
 */
export type AnchorType = (typeof AnchorType)[keyof typeof AnchorType];

/**
 * @public
 * @enum
 */
export const AnonymousUserDashboardEmbeddingConfigurationDisabledFeature = {
  SHARED_VIEW: "SHARED_VIEW",
} as const;
/**
 * @public
 */
export type AnonymousUserDashboardEmbeddingConfigurationDisabledFeature =
  (typeof AnonymousUserDashboardEmbeddingConfigurationDisabledFeature)[keyof typeof AnonymousUserDashboardEmbeddingConfigurationDisabledFeature];

/**
 * @public
 * @enum
 */
export const AnonymousUserDashboardEmbeddingConfigurationEnabledFeature = {
  SHARED_VIEW: "SHARED_VIEW",
} as const;
/**
 * @public
 */
export type AnonymousUserDashboardEmbeddingConfigurationEnabledFeature =
  (typeof AnonymousUserDashboardEmbeddingConfigurationEnabledFeature)[keyof typeof AnonymousUserDashboardEmbeddingConfigurationEnabledFeature];

/**
 * @public
 * @enum
 */
export const SnapshotFileFormatType = {
  CSV: "CSV",
  EXCEL: "EXCEL",
  PDF: "PDF",
} as const;
/**
 * @public
 */
export type SnapshotFileFormatType = (typeof SnapshotFileFormatType)[keyof typeof SnapshotFileFormatType];

/**
 * @public
 * @enum
 */
export const SnapshotFileSheetSelectionScope = {
  ALL_VISUALS: "ALL_VISUALS",
  SELECTED_VISUALS: "SELECTED_VISUALS",
} as const;
/**
 * @public
 */
export type SnapshotFileSheetSelectionScope =
  (typeof SnapshotFileSheetSelectionScope)[keyof typeof SnapshotFileSheetSelectionScope];

/**
 * @public
 * @enum
 */
export const AssetBundleExportJobAnalysisPropertyToOverride = {
  NAME: "Name",
} as const;
/**
 * @public
 */
export type AssetBundleExportJobAnalysisPropertyToOverride =
  (typeof AssetBundleExportJobAnalysisPropertyToOverride)[keyof typeof AssetBundleExportJobAnalysisPropertyToOverride];

/**
 * @public
 * @enum
 */
export const AssetBundleExportJobDashboardPropertyToOverride = {
  NAME: "Name",
} as const;
/**
 * @public
 */
export type AssetBundleExportJobDashboardPropertyToOverride =
  (typeof AssetBundleExportJobDashboardPropertyToOverride)[keyof typeof AssetBundleExportJobDashboardPropertyToOverride];

/**
 * @public
 * @enum
 */
export const AssetBundleExportJobDataSetPropertyToOverride = {
  NAME: "Name",
  REFRESH_FAILURE_EMAIL_ALERT_STATUS: "RefreshFailureEmailAlertStatus",
} as const;
/**
 * @public
 */
export type AssetBundleExportJobDataSetPropertyToOverride =
  (typeof AssetBundleExportJobDataSetPropertyToOverride)[keyof typeof AssetBundleExportJobDataSetPropertyToOverride];

/**
 * @public
 * @enum
 */
export const AssetBundleExportJobDataSourcePropertyToOverride = {
  CATALOG: "Catalog",
  CLUSTER_ID: "ClusterId",
  DATABASE: "Database",
  DATA_SET_NAME: "DataSetName",
  DISABLE_SSL: "DisableSsl",
  DOMAIN: "Domain",
  HOST: "Host",
  INSTANCE_ID: "InstanceId",
  MANIFEST_FILE_LOCATION: "ManifestFileLocation",
  NAME: "Name",
  PASSWORD: "Password",
  PORT: "Port",
  PRODUCT_TYPE: "ProductType",
  ROLE_ARN: "RoleArn",
  SECRET_ARN: "SecretArn",
  USERNAME: "Username",
  WAREHOUSE: "Warehouse",
  WORK_GROUP: "WorkGroup",
} as const;
/**
 * @public
 */
export type AssetBundleExportJobDataSourcePropertyToOverride =
  (typeof AssetBundleExportJobDataSourcePropertyToOverride)[keyof typeof AssetBundleExportJobDataSourcePropertyToOverride];

/**
 * @public
 * @enum
 */
export const AssetBundleExportJobFolderPropertyToOverride = {
  NAME: "Name",
  PARENT_FOLDER_ARN: "ParentFolderArn",
} as const;
/**
 * @public
 */
export type AssetBundleExportJobFolderPropertyToOverride =
  (typeof AssetBundleExportJobFolderPropertyToOverride)[keyof typeof AssetBundleExportJobFolderPropertyToOverride];

/**
 * @public
 * @enum
 */
export const AssetBundleExportJobRefreshSchedulePropertyToOverride = {
  START_AFTER_DATE_TIME: "StartAfterDateTime",
} as const;
/**
 * @public
 */
export type AssetBundleExportJobRefreshSchedulePropertyToOverride =
  (typeof AssetBundleExportJobRefreshSchedulePropertyToOverride)[keyof typeof AssetBundleExportJobRefreshSchedulePropertyToOverride];

/**
 * @public
 * @enum
 */
export const AssetBundleExportJobThemePropertyToOverride = {
  NAME: "Name",
} as const;
/**
 * @public
 */
export type AssetBundleExportJobThemePropertyToOverride =
  (typeof AssetBundleExportJobThemePropertyToOverride)[keyof typeof AssetBundleExportJobThemePropertyToOverride];

/**
 * @public
 * @enum
 */
export const AssetBundleExportJobVPCConnectionPropertyToOverride = {
  DNS_RESOLVERS: "DnsResolvers",
  NAME: "Name",
  ROLE_ARN: "RoleArn",
} as const;
/**
 * @public
 */
export type AssetBundleExportJobVPCConnectionPropertyToOverride =
  (typeof AssetBundleExportJobVPCConnectionPropertyToOverride)[keyof typeof AssetBundleExportJobVPCConnectionPropertyToOverride];

/**
 * @public
 * @enum
 */
export const AssetBundleExportFormat = {
  CLOUDFORMATION_JSON: "CLOUDFORMATION_JSON",
  QUICKSIGHT_JSON: "QUICKSIGHT_JSON",
} as const;
/**
 * @public
 */
export type AssetBundleExportFormat = (typeof AssetBundleExportFormat)[keyof typeof AssetBundleExportFormat];

/**
 * @public
 * @enum
 */
export const AssetBundleExportJobStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  QUEUED_FOR_IMMEDIATE_EXECUTION: "QUEUED_FOR_IMMEDIATE_EXECUTION",
  SUCCESSFUL: "SUCCESSFUL",
} as const;
/**
 * @public
 */
export type AssetBundleExportJobStatus = (typeof AssetBundleExportJobStatus)[keyof typeof AssetBundleExportJobStatus];

/**
 * @public
 * @enum
 */
export const AssetBundleImportFailureAction = {
  DO_NOTHING: "DO_NOTHING",
  ROLLBACK: "ROLLBACK",
} as const;
/**
 * @public
 */
export type AssetBundleImportFailureAction =
  (typeof AssetBundleImportFailureAction)[keyof typeof AssetBundleImportFailureAction];

/**
 * @public
 * @enum
 */
export const RefreshFailureAlertStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type RefreshFailureAlertStatus = (typeof RefreshFailureAlertStatus)[keyof typeof RefreshFailureAlertStatus];

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
 * @enum
 */
export const AuthenticationType = {
  PASSWORD: "PASSWORD",
  TOKEN: "TOKEN",
  X509: "X509",
} as const;
/**
 * @public
 */
export type AuthenticationType = (typeof AuthenticationType)[keyof typeof AuthenticationType];

/**
 * @public
 * @enum
 */
export const StarburstProductType = {
  ENTERPRISE: "ENTERPRISE",
  GALAXY: "GALAXY",
} as const;
/**
 * @public
 */
export type StarburstProductType = (typeof StarburstProductType)[keyof typeof StarburstProductType];

/**
 * @public
 * @enum
 */
export const WebCrawlerAuthType = {
  BASIC_AUTH: "BASIC_AUTH",
  FORM: "FORM",
  NO_AUTH: "NO_AUTH",
  SAML: "SAML",
} as const;
/**
 * @public
 */
export type WebCrawlerAuthType = (typeof WebCrawlerAuthType)[keyof typeof WebCrawlerAuthType];

/**
 * @public
 * @enum
 */
export const AssetBundleImportJobStatus = {
  FAILED: "FAILED",
  FAILED_ROLLBACK_COMPLETED: "FAILED_ROLLBACK_COMPLETED",
  FAILED_ROLLBACK_ERROR: "FAILED_ROLLBACK_ERROR",
  FAILED_ROLLBACK_IN_PROGRESS: "FAILED_ROLLBACK_IN_PROGRESS",
  IN_PROGRESS: "IN_PROGRESS",
  QUEUED_FOR_IMMEDIATE_EXECUTION: "QUEUED_FOR_IMMEDIATE_EXECUTION",
  SUCCESSFUL: "SUCCESSFUL",
} as const;
/**
 * @public
 */
export type AssetBundleImportJobStatus = (typeof AssetBundleImportJobStatus)[keyof typeof AssetBundleImportJobStatus];

/**
 * @public
 * @enum
 */
export const AssignmentStatus = {
  DISABLED: "DISABLED",
  DRAFT: "DRAFT",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type AssignmentStatus = (typeof AssignmentStatus)[keyof typeof AssignmentStatus];

/**
 * @public
 * @enum
 */
export const AuthenticationMethodOption = {
  ACTIVE_DIRECTORY: "ACTIVE_DIRECTORY",
  IAM_AND_QUICKSIGHT: "IAM_AND_QUICKSIGHT",
  IAM_IDENTITY_CENTER: "IAM_IDENTITY_CENTER",
  IAM_ONLY: "IAM_ONLY",
} as const;
/**
 * @public
 */
export type AuthenticationMethodOption = (typeof AuthenticationMethodOption)[keyof typeof AuthenticationMethodOption];

/**
 * @public
 * @enum
 */
export const ServiceType = {
  ATHENA: "ATHENA",
  QBUSINESS: "QBUSINESS",
  REDSHIFT: "REDSHIFT",
} as const;
/**
 * @public
 */
export type ServiceType = (typeof ServiceType)[keyof typeof ServiceType];

/**
 * @public
 * @enum
 */
export const AuthorSpecifiedAggregation = {
  AVERAGE: "AVERAGE",
  COUNT: "COUNT",
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
export type AuthorSpecifiedAggregation = (typeof AuthorSpecifiedAggregation)[keyof typeof AuthorSpecifiedAggregation];

/**
 * @public
 * @enum
 */
export const ContributionAnalysisDirection = {
  DECREASE: "DECREASE",
  INCREASE: "INCREASE",
  NEUTRAL: "NEUTRAL",
} as const;
/**
 * @public
 */
export type ContributionAnalysisDirection =
  (typeof ContributionAnalysisDirection)[keyof typeof ContributionAnalysisDirection];

/**
 * @public
 * @enum
 */
export const ContributionAnalysisSortType = {
  ABSOLUTE_DIFFERENCE: "ABSOLUTE_DIFFERENCE",
  CONTRIBUTION_PERCENTAGE: "CONTRIBUTION_PERCENTAGE",
  DEVIATION_FROM_EXPECTED: "DEVIATION_FROM_EXPECTED",
  PERCENTAGE_DIFFERENCE: "PERCENTAGE_DIFFERENCE",
} as const;
/**
 * @public
 */
export type ContributionAnalysisSortType =
  (typeof ContributionAnalysisSortType)[keyof typeof ContributionAnalysisSortType];

/**
 * @public
 * @enum
 */
export const TopicSortDirection = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;
/**
 * @public
 */
export type TopicSortDirection = (typeof TopicSortDirection)[keyof typeof TopicSortDirection];

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
 * @enum
 */
export const TextTransform = {
  CAPITALIZE: "CAPITALIZE",
} as const;
/**
 * @public
 */
export type TextTransform = (typeof TextTransform)[keyof typeof TextTransform];

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
