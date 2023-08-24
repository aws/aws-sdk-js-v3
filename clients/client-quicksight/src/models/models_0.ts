// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { QuickSightServiceException as __BaseException } from "./QuickSightServiceException";

/**
 * @public
 * <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
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
 * @public
 * <p>The Amazon QuickSight customizations associated with your Amazon Web Services account or a QuickSight namespace in a specific Amazon Web Services Region.</p>
 */
export interface AccountCustomization {
  /**
   * @public
   * <p>The default theme for this Amazon QuickSight subscription.</p>
   */
  DefaultTheme?: string;

  /**
   * @public
   * <p>The default email customization template.</p>
   */
  DefaultEmailCustomizationTemplate?: string;
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
 * @public
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
 */
export interface AccountInfo {
  /**
   * @public
   * <p>The account name that you provided for the Amazon QuickSight subscription in your
   *                 Amazon Web Services account. You create this name when you sign up for Amazon QuickSight. It's unique over all of Amazon Web Services, and it appears only when
   *             users sign in.</p>
   */
  AccountName?: string;

  /**
   * @public
   * <p>The edition of your Amazon QuickSight account.</p>
   */
  Edition?: Edition | string;

  /**
   * @public
   * <p>The email address that will be used for Amazon QuickSight to send notifications regarding your Amazon Web Services account or Amazon QuickSight subscription.</p>
   */
  NotificationEmail?: string;

  /**
   * @public
   * <p>The way that your Amazon QuickSight account is authenticated.</p>
   */
  AuthenticationType?: string;

  /**
   * @public
   * <p>The status of your account subscription.</p>
   */
  AccountSubscriptionStatus?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the IAM Identity Center instance.</p>
   */
  IAMIdentityCenterInstanceArn?: string;
}

/**
 * @public
 * <p>The Amazon QuickSight settings associated with your Amazon Web Services account.</p>
 */
export interface AccountSettings {
  /**
   * @public
   * <p>The "account name" you provided for the Amazon QuickSight subscription in your Amazon Web Services account.
   *             You create this name when you sign up for Amazon QuickSight. It is unique in all of Amazon Web Services and
   *             it appears only when users sign in.</p>
   */
  AccountName?: string;

  /**
   * @public
   * <p>The edition of Amazon QuickSight that you're currently subscribed to:
   *         Enterprise edition or Standard edition.</p>
   */
  Edition?: Edition | string;

  /**
   * @public
   * <p>The default Amazon QuickSight namespace for your Amazon Web Services account. </p>
   */
  DefaultNamespace?: string;

  /**
   * @public
   * <p>The main notification email for your Amazon QuickSight subscription.</p>
   */
  NotificationEmail?: string;

  /**
   * @public
   * <p>A Boolean value that indicates whether public sharing is turned on for an Amazon QuickSight account. For more information about turning on public sharing, see <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdatePublicSharingSettings.html">UpdatePublicSharingSettings</a>.</p>
   */
  PublicSharingEnabled?: boolean;

  /**
   * @public
   * <p>A boolean value that determines whether or not an Amazon QuickSight account can be deleted. A <code>True</code> value doesn't allow the account to be deleted and results in an error message if a user tries to make a <code>DeleteAccountSubsctiption</code> request. A <code>False</code> value will allow the ccount to be deleted. </p>
   */
  TerminationProtectionEnabled?: boolean;
}

/**
 * @public
 * <p>The active Identity and Access Management (IAM) policy assignment.</p>
 */
export interface ActiveIAMPolicyAssignment {
  /**
   * @public
   * <p>A name for the IAM policy assignment.</p>
   */
  AssignmentName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  PolicyArn?: string;
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
 * @public
 * <p>An ad hoc (one-time) filtering option.</p>
 */
export interface AdHocFilteringOption {
  /**
   * @public
   * <p>Availability status.</p>
   */
  AvailabilityStatus?: DashboardBehavior | string;
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
 * @public
 * <p>Aggregation for attributes.</p>
 */
export interface AttributeAggregationFunction {
  /**
   * @public
   * <p>The built-in aggregation functions for attributes.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>UNIQUE_VALUE</code>: Returns the unique value for a field, aggregated by the dimension fields.</p>
   *             </li>
   *          </ul>
   */
  SimpleAttributeAggregation?: SimpleAttributeAggregationFunction | string;

  /**
   * @public
   * <p>Used by the <code>UNIQUE_VALUE</code> aggregation function. If there are multiple values for the field used by the aggregation, the value for this property will be returned instead. Defaults to '*'.</p>
   */
  ValueForMultipleValues?: string;
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
 * @public
 * <p>An aggregation based on the percentile of values in a dimension or measure.</p>
 */
export interface PercentileAggregation {
  /**
   * @public
   * <p>The percentile value. This value can be any numeric constant 0–100. A percentile value of 50 computes the median value of the measure.</p>
   */
  PercentileValue?: number;
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
 * @public
 * <p>Aggregation for numerical values.</p>
 */
export interface NumericalAggregationFunction {
  /**
   * @public
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
   */
  SimpleNumericalAggregation?: SimpleNumericalAggregationFunction | string;

  /**
   * @public
   * <p>An aggregation based on the percentile of values in a dimension or measure.</p>
   */
  PercentileAggregation?: PercentileAggregation;
}

/**
 * @public
 * <p>An aggregation function aggregates values from a dimension or measure.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface AggregationFunction {
  /**
   * @public
   * <p>Aggregation for numerical values.</p>
   */
  NumericalAggregationFunction?: NumericalAggregationFunction;

  /**
   * @public
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
   */
  CategoricalAggregationFunction?: CategoricalAggregationFunction | string;

  /**
   * @public
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
   */
  DateAggregationFunction?: DateAggregationFunction | string;

  /**
   * @public
   * <p>Aggregation for attributes.</p>
   */
  AttributeAggregationFunction?: AttributeAggregationFunction;
}

/**
 * @public
 * <p>A column of a data set.</p>
 */
export interface ColumnIdentifier {
  /**
   * @public
   * <p>The data set that the column belongs to.</p>
   */
  DataSetIdentifier: string | undefined;

  /**
   * @public
   * <p>The name of the column.</p>
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
 * @public
 * <p>The configuration options to sort aggregated values.</p>
 */
export interface AggregationSortConfiguration {
  /**
   * @public
   * <p>The column that determines the sort order of aggregated values.</p>
   */
  Column: ColumnIdentifier | undefined;

  /**
   * @public
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
   */
  SortDirection: SortDirection | string | undefined;

  /**
   * @public
   * <p>The function that aggregates the values in <code>Column</code>.</p>
   */
  AggregationFunction?: AggregationFunction;
}

/**
 * @public
 * <p>The configuration for applying a filter to all sheets. You can apply this filter to all visuals on every sheet.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface AllSheetsFilterScopeConfiguration {}

/**
 * @public
 * <p>The parameters for OpenSearch.</p>
 */
export interface AmazonElasticsearchParameters {
  /**
   * @public
   * <p>The OpenSearch domain.</p>
   */
  Domain: string | undefined;
}

/**
 * @public
 * <p>The parameters for OpenSearch.</p>
 */
export interface AmazonOpenSearchParameters {
  /**
   * @public
   * <p>The OpenSearch domain.</p>
   */
  Domain: string | undefined;
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
 * @public
 * <p>An object, structure, or sub-structure of an analysis, template, or dashboard.</p>
 */
export interface Entity {
  /**
   * @public
   * <p>The hierarchical path of the entity within the analysis, template, or dashboard definition tree.</p>
   */
  Path?: string;
}

/**
 * @public
 * <p>Analysis error.</p>
 */
export interface AnalysisError {
  /**
   * @public
   * <p>The type of the analysis error.</p>
   */
  Type?: AnalysisErrorType | string;

  /**
   * @public
   * <p>The message associated with the analysis error.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>Lists the violated entities that caused the analysis error</p>
   */
  ViolatedEntities?: Entity[];
}

/**
 * @public
 * <p>A <i>sheet</i>, which is an object that contains a set of visuals that
 *             are viewed together on one page in Amazon QuickSight. Every analysis and dashboard
 *             contains at least one sheet. Each sheet contains at least one visualization widget, for
 *             example a chart, pivot table, or narrative insight. Sheets can be associated with other
 *             components, such as controls, filters, and so on.</p>
 */
export interface Sheet {
  /**
   * @public
   * <p>The unique identifier associated with a sheet.</p>
   */
  SheetId?: string;

  /**
   * @public
   * <p>The name of a sheet. This name is displayed on the sheet's tab in the Amazon QuickSight
   *             console.</p>
   */
  Name?: string;
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
 * @public
 * <p>Metadata structure for an analysis in Amazon QuickSight</p>
 */
export interface Analysis {
  /**
   * @public
   * <p>The ID of the analysis.</p>
   */
  AnalysisId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the analysis.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The descriptive name of the analysis.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>Status associated with the analysis.</p>
   */
  Status?: ResourceStatus | string;

  /**
   * @public
   * <p>Errors associated with the analysis.</p>
   */
  Errors?: AnalysisError[];

  /**
   * @public
   * <p>The ARNs of the datasets of the analysis.</p>
   */
  DataSetArns?: string[];

  /**
   * @public
   * <p>The ARN of the theme of the analysis.</p>
   */
  ThemeArn?: string;

  /**
   * @public
   * <p>The time that the analysis was created.</p>
   */
  CreatedTime?: Date;

  /**
   * @public
   * <p>The time that the analysis was last updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * @public
   * <p>A list of the associated sheets with the unique identifier and name of each sheet.</p>
   */
  Sheets?: Sheet[];
}

/**
 * @public
 * <p>The options that determine the sizing of the canvas used in a free-form layout.</p>
 */
export interface FreeFormLayoutScreenCanvasSizeOptions {
  /**
   * @public
   * <p>The width that the view port will be optimized for when the layout renders.</p>
   */
  OptimizedViewPortWidth: string | undefined;
}

/**
 * @public
 * <p>Configuration options for the canvas of a free-form layout.</p>
 */
export interface FreeFormLayoutCanvasSizeOptions {
  /**
   * @public
   * <p>The options that determine the sizing of the canvas used in a free-form layout.</p>
   */
  ScreenCanvasSizeOptions?: FreeFormLayoutScreenCanvasSizeOptions;
}

/**
 * @public
 * <p>The options that determine the default settings of a free-form layout configuration.</p>
 */
export interface DefaultFreeFormLayoutConfiguration {
  /**
   * @public
   * <p>Determines the screen canvas size options for a free-form layout.</p>
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
 * @public
 * <p>The options that determine the sizing of the canvas used in a grid layout.</p>
 */
export interface GridLayoutScreenCanvasSizeOptions {
  /**
   * @public
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
   */
  ResizeOption: ResizeOption | string | undefined;

  /**
   * @public
   * <p>The width that the view port will be optimized for when the layout renders.</p>
   */
  OptimizedViewPortWidth?: string;
}

/**
 * @public
 * <p>Configuration options for the canvas of a grid layout.</p>
 */
export interface GridLayoutCanvasSizeOptions {
  /**
   * @public
   * <p>The options that determine the sizing of the canvas used in a grid layout.</p>
   */
  ScreenCanvasSizeOptions?: GridLayoutScreenCanvasSizeOptions;
}

/**
 * @public
 * <p>The options that determine the default settings for a grid layout configuration.</p>
 */
export interface DefaultGridLayoutConfiguration {
  /**
   * @public
   * <p>Determines the screen canvas size options for a grid layout.</p>
   */
  CanvasSizeOptions: GridLayoutCanvasSizeOptions | undefined;
}

/**
 * @public
 * <p>The options that determine the default settings for interactive layout configuration.</p>
 */
export interface DefaultInteractiveLayoutConfiguration {
  /**
   * @public
   * <p>The options that determine the default settings for a grid layout configuration.</p>
   */
  Grid?: DefaultGridLayoutConfiguration;

  /**
   * @public
   * <p>The options that determine the default settings of a free-form layout configuration.</p>
   */
  FreeForm?: DefaultFreeFormLayoutConfiguration;
}

/**
 * @public
 * <p>The configuration of spacing (often a margin or padding).</p>
 */
export interface Spacing {
  /**
   * @public
   * <p>Define the top spacing.</p>
   */
  Top?: string;

  /**
   * @public
   * <p>Define the bottom spacing.</p>
   */
  Bottom?: string;

  /**
   * @public
   * <p>Define the left spacing.</p>
   */
  Left?: string;

  /**
   * @public
   * <p>Define the right spacing.</p>
   */
  Right?: string;
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
 * @public
 * <p>The options for a paper canvas of a section-based layout.</p>
 */
export interface SectionBasedLayoutPaperCanvasSizeOptions {
  /**
   * @public
   * <p>The paper size that is used to define canvas dimensions.</p>
   */
  PaperSize?: PaperSize | string;

  /**
   * @public
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
   */
  PaperOrientation?: PaperOrientation | string;

  /**
   * @public
   * <p>Defines the spacing between the canvas content and the top, bottom, left, and right edges.</p>
   */
  PaperMargin?: Spacing;
}

/**
 * @public
 * <p>The options for the canvas of a section-based layout.</p>
 */
export interface SectionBasedLayoutCanvasSizeOptions {
  /**
   * @public
   * <p>The options for a paper canvas of a section-based layout.</p>
   */
  PaperCanvasSizeOptions?: SectionBasedLayoutPaperCanvasSizeOptions;
}

/**
 * @public
 * <p>The options that determine the default settings for a section-based layout configuration.</p>
 */
export interface DefaultSectionBasedLayoutConfiguration {
  /**
   * @public
   * <p>Determines the screen canvas size options for a section-based layout.</p>
   */
  CanvasSizeOptions: SectionBasedLayoutCanvasSizeOptions | undefined;
}

/**
 * @public
 * <p>The options that determine the default settings for a paginated layout configuration.</p>
 */
export interface DefaultPaginatedLayoutConfiguration {
  /**
   * @public
   * <p>The options that determine the default settings for a section-based layout configuration.</p>
   */
  SectionBased?: DefaultSectionBasedLayoutConfiguration;
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
 * @public
 * <p>The configuration for default new sheet settings.</p>
 */
export interface DefaultNewSheetConfiguration {
  /**
   * @public
   * <p>The options that determine the default settings for interactive layout configuration.</p>
   */
  InteractiveLayoutConfiguration?: DefaultInteractiveLayoutConfiguration;

  /**
   * @public
   * <p>The options that determine the default settings for a paginated layout configuration.</p>
   */
  PaginatedLayoutConfiguration?: DefaultPaginatedLayoutConfiguration;

  /**
   * @public
   * <p>The option that determines the sheet content type.</p>
   */
  SheetContentType?: SheetContentType | string;
}

/**
 * @public
 * <p>The configuration for default analysis settings.</p>
 */
export interface AnalysisDefaults {
  /**
   * @public
   * <p>The configuration for default new sheet settings.</p>
   */
  DefaultNewSheetConfiguration: DefaultNewSheetConfiguration | undefined;
}

/**
 * @public
 * <p>The calculated field of an analysis.</p>
 */
export interface CalculatedField {
  /**
   * @public
   * <p>The data set that is used in this calculated field.</p>
   */
  DataSetIdentifier: string | undefined;

  /**
   * @public
   * <p>The name of the calculated field.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The expression of the calculated field.</p>
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
 * @public
 * <p>Determines the color that's applied to a particular data value in a column.</p>
 */
export interface CustomColor {
  /**
   * @public
   * <p>The data value that the color is applied to.</p>
   */
  FieldValue?: string;

  /**
   * @public
   * <p>The color that is applied to the data value.</p>
   */
  Color: string | undefined;

  /**
   * @public
   * <p>The value of a special data value.</p>
   */
  SpecialValue?: SpecialValue | string;
}

/**
 * @public
 * <p>The color configurations for a column.</p>
 */
export interface ColorsConfiguration {
  /**
   * @public
   * <p>A list of up to 50 custom colors.</p>
   */
  CustomColors?: CustomColor[];
}

/**
 * @public
 * <p>The options that determine the null value format configuration.</p>
 */
export interface NullValueFormatConfiguration {
  /**
   * @public
   * <p>Determines the null string of null values.</p>
   */
  NullString: string | undefined;
}

/**
 * @public
 * <p>The option that determines the decimal places configuration.</p>
 */
export interface DecimalPlacesConfiguration {
  /**
   * @public
   * <p>The values of the decimal places.</p>
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
 * @public
 * <p>The options that determine the negative value configuration.</p>
 */
export interface NegativeValueConfiguration {
  /**
   * @public
   * <p>Determines the display mode of the negative value configuration.</p>
   */
  DisplayMode: NegativeValueDisplayMode | string | undefined;
}

/**
 * @public
 * @enum
 */
export const NumberScale = {
  AUTO: "AUTO",
  BILLIONS: "BILLIONS",
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
 * <p>The options that determine the thousands separator configuration.</p>
 */
export interface ThousandSeparatorOptions {
  /**
   * @public
   * <p>Determines the thousands separator symbol.</p>
   */
  Symbol?: NumericSeparatorSymbol | string;

  /**
   * @public
   * <p>Determines the visibility of the thousands separator.</p>
   */
  Visibility?: Visibility | string;
}

/**
 * @public
 * <p>The options that determine the numeric separator configuration.</p>
 */
export interface NumericSeparatorConfiguration {
  /**
   * @public
   * <p>Determines the decimal separator.</p>
   */
  DecimalSeparator?: NumericSeparatorSymbol | string;

  /**
   * @public
   * <p>The options that determine the thousands separator configuration.</p>
   */
  ThousandsSeparator?: ThousandSeparatorOptions;
}

/**
 * @public
 * <p>The options that determine the currency display format configuration.</p>
 */
export interface CurrencyDisplayFormatConfiguration {
  /**
   * @public
   * <p>Determines the prefix value of the currency format.</p>
   */
  Prefix?: string;

  /**
   * @public
   * <p>Determines the suffix value of the currency format.</p>
   */
  Suffix?: string;

  /**
   * @public
   * <p>The options that determine the numeric separator configuration.</p>
   */
  SeparatorConfiguration?: NumericSeparatorConfiguration;

  /**
   * @public
   * <p>Determines the symbol for the currency format.</p>
   */
  Symbol?: string;

  /**
   * @public
   * <p>The option that determines the decimal places configuration.</p>
   */
  DecimalPlacesConfiguration?: DecimalPlacesConfiguration;

  /**
   * @public
   * <p>Determines the number scale value for the currency format.</p>
   */
  NumberScale?: NumberScale | string;

  /**
   * @public
   * <p>The options that determine the negative value configuration.</p>
   */
  NegativeValueConfiguration?: NegativeValueConfiguration;

  /**
   * @public
   * <p>The options that determine the null value format configuration.</p>
   */
  NullValueFormatConfiguration?: NullValueFormatConfiguration;
}

/**
 * @public
 * <p>The options that determine the number display format configuration.</p>
 */
export interface NumberDisplayFormatConfiguration {
  /**
   * @public
   * <p>Determines the prefix value of the number format.</p>
   */
  Prefix?: string;

  /**
   * @public
   * <p>Determines the suffix value of the number format.</p>
   */
  Suffix?: string;

  /**
   * @public
   * <p>The options that determine the numeric separator configuration.</p>
   */
  SeparatorConfiguration?: NumericSeparatorConfiguration;

  /**
   * @public
   * <p>The option that determines the decimal places configuration.</p>
   */
  DecimalPlacesConfiguration?: DecimalPlacesConfiguration;

  /**
   * @public
   * <p>Determines the number scale value of the number format.</p>
   */
  NumberScale?: NumberScale | string;

  /**
   * @public
   * <p>The options that determine the negative value configuration.</p>
   */
  NegativeValueConfiguration?: NegativeValueConfiguration;

  /**
   * @public
   * <p>The options that determine the null value format configuration.</p>
   */
  NullValueFormatConfiguration?: NullValueFormatConfiguration;
}

/**
 * @public
 * <p>The options that determine the percentage display format configuration.</p>
 */
export interface PercentageDisplayFormatConfiguration {
  /**
   * @public
   * <p>Determines the prefix value of the percentage format.</p>
   */
  Prefix?: string;

  /**
   * @public
   * <p>Determines the suffix value of the percentage format.</p>
   */
  Suffix?: string;

  /**
   * @public
   * <p>The options that determine the numeric separator configuration.</p>
   */
  SeparatorConfiguration?: NumericSeparatorConfiguration;

  /**
   * @public
   * <p>The option that determines the decimal places configuration.</p>
   */
  DecimalPlacesConfiguration?: DecimalPlacesConfiguration;

  /**
   * @public
   * <p>The options that determine the negative value configuration.</p>
   */
  NegativeValueConfiguration?: NegativeValueConfiguration;

  /**
   * @public
   * <p>The options that determine the null value format configuration.</p>
   */
  NullValueFormatConfiguration?: NullValueFormatConfiguration;
}

/**
 * @public
 * <p>The options that determine the numeric format configuration.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface NumericFormatConfiguration {
  /**
   * @public
   * <p>The options that determine the number display format configuration.</p>
   */
  NumberDisplayFormatConfiguration?: NumberDisplayFormatConfiguration;

  /**
   * @public
   * <p>The options that determine the currency display format configuration.</p>
   */
  CurrencyDisplayFormatConfiguration?: CurrencyDisplayFormatConfiguration;

  /**
   * @public
   * <p>The options that determine the percentage display format configuration.</p>
   */
  PercentageDisplayFormatConfiguration?: PercentageDisplayFormatConfiguration;
}

/**
 * @public
 * <p>Formatting configuration for <code>DateTime</code> fields.</p>
 */
export interface DateTimeFormatConfiguration {
  /**
   * @public
   * <p>Determines the <code>DateTime</code> format.</p>
   */
  DateTimeFormat?: string;

  /**
   * @public
   * <p>The options that determine the null value format configuration.</p>
   */
  NullValueFormatConfiguration?: NullValueFormatConfiguration;

  /**
   * @public
   * <p>The formatting configuration for numeric <code>DateTime</code> fields.</p>
   */
  NumericFormatConfiguration?: NumericFormatConfiguration;
}

/**
 * @public
 * <p>Formatting configuration for number fields.</p>
 */
export interface NumberFormatConfiguration {
  /**
   * @public
   * <p>The options that determine the numeric format configuration.</p>
   */
  FormatConfiguration?: NumericFormatConfiguration;
}

/**
 * @public
 * <p>Formatting configuration for string fields.</p>
 */
export interface StringFormatConfiguration {
  /**
   * @public
   * <p>The options that determine the null value format configuration.</p>
   */
  NullValueFormatConfiguration?: NullValueFormatConfiguration;

  /**
   * @public
   * <p>The formatting configuration for numeric strings.</p>
   */
  NumericFormatConfiguration?: NumericFormatConfiguration;
}

/**
 * @public
 * <p>The formatting configuration for all types of field.</p>
 */
export interface FormatConfiguration {
  /**
   * @public
   * <p>Formatting configuration for string fields.</p>
   */
  StringFormatConfiguration?: StringFormatConfiguration;

  /**
   * @public
   * <p>Formatting configuration for number fields.</p>
   */
  NumberFormatConfiguration?: NumberFormatConfiguration;

  /**
   * @public
   * <p>Formatting configuration for <code>DateTime</code> fields.</p>
   */
  DateTimeFormatConfiguration?: DateTimeFormatConfiguration;
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
 * @public
 * <p>The general configuration of a column.</p>
 */
export interface ColumnConfiguration {
  /**
   * @public
   * <p>The column.</p>
   */
  Column: ColumnIdentifier | undefined;

  /**
   * @public
   * <p>The format configuration of a column.</p>
   */
  FormatConfiguration?: FormatConfiguration;

  /**
   * @public
   * <p>The role of the column.</p>
   */
  Role?: ColumnRole | string;

  /**
   * @public
   * <p>The color configurations of the column.</p>
   */
  ColorsConfiguration?: ColorsConfiguration;
}

/**
 * @public
 * <p>A data set.</p>
 */
export interface DataSetIdentifierDeclaration {
  /**
   * @public
   * <p>The identifier of the data set, typically the data set's name.</p>
   */
  Identifier: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the data set.</p>
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
 * @public
 * <p>A custom filter that filters based on a single value. This filter can be partially matched.</p>
 */
export interface CustomFilterConfiguration {
  /**
   * @public
   * <p>The match operator that is used to determine if a filter should be applied.</p>
   */
  MatchOperator: CategoryFilterMatchOperator | string | undefined;

  /**
   * @public
   * <p>The category value for the filter.</p>
   *          <p>This field is mutually exclusive to <code>ParameterName</code>.</p>
   */
  CategoryValue?: string;

  /**
   * @public
   * <p>Select all of the values. Null is not the assigned value of select all.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>FILTER_ALL_VALUES</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  SelectAllOptions?: CategoryFilterSelectAllOptions | string;

  /**
   * @public
   * <p>The parameter whose value should be used for the filter value.</p>
   *          <p>This field is mutually exclusive to <code>CategoryValue</code>.</p>
   */
  ParameterName?: string;

  /**
   * @public
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
   */
  NullOption: FilterNullOption | string | undefined;
}

/**
 * @public
 * <p>A list of custom filter values.</p>
 */
export interface CustomFilterListConfiguration {
  /**
   * @public
   * <p>The match operator that is used to determine if a filter should be applied.</p>
   */
  MatchOperator: CategoryFilterMatchOperator | string | undefined;

  /**
   * @public
   * <p>The list of category values for the filter.</p>
   */
  CategoryValues?: string[];

  /**
   * @public
   * <p>Select all of the values. Null is not the assigned value of select all.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>FILTER_ALL_VALUES</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  SelectAllOptions?: CategoryFilterSelectAllOptions | string;

  /**
   * @public
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
   */
  NullOption: FilterNullOption | string | undefined;
}

/**
 * @public
 * <p>A list of filter configurations.</p>
 */
export interface FilterListConfiguration {
  /**
   * @public
   * <p>The match operator that is used to determine if a filter should be applied.</p>
   */
  MatchOperator: CategoryFilterMatchOperator | string | undefined;

  /**
   * @public
   * <p>The list of category values for the filter.</p>
   */
  CategoryValues?: string[];

  /**
   * @public
   * <p>Select all of the values. Null is not the assigned value of select all.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>FILTER_ALL_VALUES</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  SelectAllOptions?: CategoryFilterSelectAllOptions | string;
}

/**
 * @public
 * <p>The configuration for a <code>CategoryFilter</code>.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface CategoryFilterConfiguration {
  /**
   * @public
   * <p>A list of filter configurations. In the Amazon QuickSight console, this filter type is called a filter list.</p>
   */
  FilterListConfiguration?: FilterListConfiguration;

  /**
   * @public
   * <p>A list of custom filter values. In the Amazon QuickSight console, this filter type is called a custom filter list.</p>
   */
  CustomFilterListConfiguration?: CustomFilterListConfiguration;

  /**
   * @public
   * <p>A custom filter that filters based on a single value. This filter can be partially matched.</p>
   */
  CustomFilterConfiguration?: CustomFilterConfiguration;
}

/**
 * @public
 * <p>A <code>CategoryFilter</code> filters text values.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/add-a-text-filter-data-prep.html">Adding text filters</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 */
export interface CategoryFilter {
  /**
   * @public
   * <p>An identifier that uniquely identifies a filter within a dashboard, analysis, or template.</p>
   */
  FilterId: string | undefined;

  /**
   * @public
   * <p>The column that the filter is applied to.</p>
   */
  Column: ColumnIdentifier | undefined;

  /**
   * @public
   * <p>The configuration for a <code>CategoryFilter</code>.</p>
   */
  Configuration: CategoryFilterConfiguration | undefined;
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
 * @public
 * <p>A <code>NumericEqualityFilter</code> filters values that are equal to the specified value.</p>
 */
export interface NumericEqualityFilter {
  /**
   * @public
   * <p>An identifier that uniquely identifies a filter within a dashboard, analysis, or template.</p>
   */
  FilterId: string | undefined;

  /**
   * @public
   * <p>The column that the filter is applied to.</p>
   */
  Column: ColumnIdentifier | undefined;

  /**
   * @public
   * <p>The input value.</p>
   */
  Value?: number;

  /**
   * @public
   * <p>Select all of the values. Null is not the assigned value of select all.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>FILTER_ALL_VALUES</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  SelectAllOptions?: NumericFilterSelectAllOptions | string;

  /**
   * @public
   * <p>The match operator that is used to determine if a filter should be applied.</p>
   */
  MatchOperator: NumericEqualityMatchOperator | string | undefined;

  /**
   * @public
   * <p>The aggregation function of the filter.</p>
   */
  AggregationFunction?: AggregationFunction;

  /**
   * @public
   * <p>The parameter whose value should be used for the filter value.</p>
   */
  ParameterName?: string;

  /**
   * @public
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
   */
  NullOption: FilterNullOption | string | undefined;
}

/**
 * @public
 * <p>The value input pf the numeric range filter.</p>
 */
export interface NumericRangeFilterValue {
  /**
   * @public
   * <p>The static value of the numeric range filter.</p>
   */
  StaticValue?: number;

  /**
   * @public
   * <p>The parameter that is used in the numeric range.</p>
   */
  Parameter?: string;
}

/**
 * @public
 * <p>A <code>NumericRangeFilter</code> filters values that are within the value range.</p>
 */
export interface NumericRangeFilter {
  /**
   * @public
   * <p>An identifier that uniquely identifies a filter within a dashboard, analysis, or template.</p>
   */
  FilterId: string | undefined;

  /**
   * @public
   * <p>The column that the filter is applied to.</p>
   */
  Column: ColumnIdentifier | undefined;

  /**
   * @public
   * <p>Determines whether the minimum value in the filter value range should be included in the filtered results.</p>
   */
  IncludeMinimum?: boolean;

  /**
   * @public
   * <p>Determines whether the maximum value in the filter value range should be included in the filtered results.</p>
   */
  IncludeMaximum?: boolean;

  /**
   * @public
   * <p>The minimum value for the filter value range.</p>
   */
  RangeMinimum?: NumericRangeFilterValue;

  /**
   * @public
   * <p>The maximum value for the filter value range.</p>
   */
  RangeMaximum?: NumericRangeFilterValue;

  /**
   * @public
   * <p>Select all of the values. Null is not the assigned value of select all.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>FILTER_ALL_VALUES</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  SelectAllOptions?: NumericFilterSelectAllOptions | string;

  /**
   * @public
   * <p>The aggregation function of the filter.</p>
   */
  AggregationFunction?: AggregationFunction;

  /**
   * @public
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
   */
  NullOption: FilterNullOption | string | undefined;
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
 * @public
 * <p>The date configuration of the filter.</p>
 */
export interface AnchorDateConfiguration {
  /**
   * @public
   * <p>The options for the date configuration. Choose one of the options below:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NOW</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  AnchorOption?: AnchorOption | string;

  /**
   * @public
   * <p>The name of the parameter that is used for the anchor date configuration.</p>
   */
  ParameterName?: string;
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
 * <p>The exclude period of <code>TimeRangeFilter</code> or <code>RelativeDatesFilter</code>.</p>
 */
export interface ExcludePeriodConfiguration {
  /**
   * @public
   * <p>The amount or number of the exclude period.</p>
   */
  Amount: number | undefined;

  /**
   * @public
   * <p>The granularity or unit (day, month, year) of the exclude period.</p>
   */
  Granularity: TimeGranularity | string | undefined;

  /**
   * @public
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
   */
  Status?: WidgetStatus | string;
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
 * @public
 * <p>A <code>RelativeDatesFilter</code> filters relative dates values.</p>
 */
export interface RelativeDatesFilter {
  /**
   * @public
   * <p>An identifier that uniquely identifies a filter within a dashboard, analysis, or template.</p>
   */
  FilterId: string | undefined;

  /**
   * @public
   * <p>The column that the filter is applied to.</p>
   */
  Column: ColumnIdentifier | undefined;

  /**
   * @public
   * <p>The date configuration of the filter.</p>
   */
  AnchorDateConfiguration: AnchorDateConfiguration | undefined;

  /**
   * @public
   * <p>The minimum granularity (period granularity) of the relative dates filter.</p>
   */
  MinimumGranularity?: TimeGranularity | string;

  /**
   * @public
   * <p>The level of time precision that is used to aggregate <code>DateTime</code> values.</p>
   */
  TimeGranularity: TimeGranularity | string | undefined;

  /**
   * @public
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
   */
  RelativeDateType: RelativeDateType | string | undefined;

  /**
   * @public
   * <p>The date value of the filter.</p>
   */
  RelativeDateValue?: number;

  /**
   * @public
   * <p>The parameter whose value should be used for the filter value.</p>
   */
  ParameterName?: string;

  /**
   * @public
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
   */
  NullOption: FilterNullOption | string | undefined;

  /**
   * @public
   * <p>The configuration for the exclude period of the filter.</p>
   */
  ExcludePeriodConfiguration?: ExcludePeriodConfiguration;
}

/**
 * @public
 * <p>A <code>TimeEqualityFilter</code> filters values that are equal to a given value.</p>
 */
export interface TimeEqualityFilter {
  /**
   * @public
   * <p>An identifier that uniquely identifies a filter within a dashboard, analysis, or template.</p>
   */
  FilterId: string | undefined;

  /**
   * @public
   * <p>The column that the filter is applied to.</p>
   */
  Column: ColumnIdentifier | undefined;

  /**
   * @public
   * <p>The value of a <code>TimeEquality</code> filter.</p>
   *          <p>This field is mutually exclusive to <code>ParameterName</code>.</p>
   */
  Value?: Date;

  /**
   * @public
   * <p>The parameter whose value should be used for the filter value.</p>
   *          <p>This field is mutually exclusive to <code>Value</code>.</p>
   */
  ParameterName?: string;

  /**
   * @public
   * <p>The level of time precision that is used to aggregate <code>DateTime</code> values.</p>
   */
  TimeGranularity?: TimeGranularity | string;
}

/**
 * @public
 * <p>The rolling date configuration of a date time filter.</p>
 */
export interface RollingDateConfiguration {
  /**
   * @public
   * <p>The data set that is used in the rolling date configuration.</p>
   */
  DataSetIdentifier?: string;

  /**
   * @public
   * <p>The expression of the rolling date configuration.</p>
   */
  Expression: string | undefined;
}

/**
 * @public
 * <p>The value of a time range filter.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface TimeRangeFilterValue {
  /**
   * @public
   * <p>The static input value.</p>
   */
  StaticValue?: Date;

  /**
   * @public
   * <p>The rolling date input value.</p>
   */
  RollingDate?: RollingDateConfiguration;

  /**
   * @public
   * <p>The parameter type input value.</p>
   */
  Parameter?: string;
}

/**
 * @public
 * <p>A <code>TimeRangeFilter</code> filters values that are between two specified values.</p>
 */
export interface TimeRangeFilter {
  /**
   * @public
   * <p>An identifier that uniquely identifies a filter within a dashboard, analysis, or template.</p>
   */
  FilterId: string | undefined;

  /**
   * @public
   * <p>The column that the filter is applied to.</p>
   */
  Column: ColumnIdentifier | undefined;

  /**
   * @public
   * <p>Determines whether the minimum value in the filter value range should be included in the filtered results.</p>
   */
  IncludeMinimum?: boolean;

  /**
   * @public
   * <p>Determines whether the maximum value in the filter value range should be included in the filtered results.</p>
   */
  IncludeMaximum?: boolean;

  /**
   * @public
   * <p>The minimum value for the filter value range.</p>
   */
  RangeMinimumValue?: TimeRangeFilterValue;

  /**
   * @public
   * <p>The maximum value for the filter value range.</p>
   */
  RangeMaximumValue?: TimeRangeFilterValue;

  /**
   * @public
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
   */
  NullOption: FilterNullOption | string | undefined;

  /**
   * @public
   * <p>The exclude period of the time range filter.</p>
   */
  ExcludePeriodConfiguration?: ExcludePeriodConfiguration;

  /**
   * @public
   * <p>The level of time precision that is used to aggregate <code>DateTime</code> values.</p>
   */
  TimeGranularity?: TimeGranularity | string;
}

/**
 * @public
 * <p>A <code>TopBottomFilter</code> filters values that are at the top or the bottom.</p>
 */
export interface TopBottomFilter {
  /**
   * @public
   * <p>An identifier that uniquely identifies a filter within a dashboard, analysis, or template.</p>
   */
  FilterId: string | undefined;

  /**
   * @public
   * <p>The column that the filter is applied to.</p>
   */
  Column: ColumnIdentifier | undefined;

  /**
   * @public
   * <p>The number of items to include in the top bottom filter results.</p>
   */
  Limit?: number;

  /**
   * @public
   * <p>The aggregation and sort configuration of the top bottom filter.</p>
   */
  AggregationSortConfigurations: AggregationSortConfiguration[] | undefined;

  /**
   * @public
   * <p>The level of time precision that is used to aggregate <code>DateTime</code> values.</p>
   */
  TimeGranularity?: TimeGranularity | string;

  /**
   * @public
   * <p>The parameter whose value should be used for the filter value.</p>
   */
  ParameterName?: string;
}

/**
 * @public
 * <p>With a <code>Filter</code>, you can remove portions of data from a particular visual or view.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface Filter {
  /**
   * @public
   * <p>A <code>CategoryFilter</code> filters text values.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/add-a-text-filter-data-prep.html">Adding text filters</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  CategoryFilter?: CategoryFilter;

  /**
   * @public
   * <p>A <code>NumericRangeFilter</code> filters numeric values that are either inside or outside a given numeric range.</p>
   */
  NumericRangeFilter?: NumericRangeFilter;

  /**
   * @public
   * <p>A <code>NumericEqualityFilter</code> filters numeric values that equal or do not equal a given numeric value.</p>
   */
  NumericEqualityFilter?: NumericEqualityFilter;

  /**
   * @public
   * <p>A <code>TimeEqualityFilter</code> filters date-time values that equal or do not equal
   *             a given date/time value.</p>
   */
  TimeEqualityFilter?: TimeEqualityFilter;

  /**
   * @public
   * <p>A <code>TimeRangeFilter</code> filters date-time values that are either inside or outside a given date/time range.</p>
   */
  TimeRangeFilter?: TimeRangeFilter;

  /**
   * @public
   * <p>A <code>RelativeDatesFilter</code> filters date values that are relative to a given date.</p>
   */
  RelativeDatesFilter?: RelativeDatesFilter;

  /**
   * @public
   * <p>A <code>TopBottomFilter</code> filters data to the top or bottom values for a given column.</p>
   */
  TopBottomFilter?: TopBottomFilter;
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
 * @public
 * <p>The filter that is applied to the options.</p>
 */
export interface SheetVisualScopingConfiguration {
  /**
   * @public
   * <p>The selected sheet that the filter is applied to.</p>
   */
  SheetId: string | undefined;

  /**
   * @public
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
   */
  Scope: FilterVisualScope | string | undefined;

  /**
   * @public
   * <p>The selected visuals that the filter is applied to.</p>
   */
  VisualIds?: string[];
}

/**
 * @public
 * <p>The configuration for applying a filter to specific sheets or visuals. You can apply this filter to multiple visuals that are on one sheet or to all visuals on a sheet.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface SelectedSheetsFilterScopeConfiguration {
  /**
   * @public
   * <p>The sheet ID and visual IDs of the sheet and visuals that the filter is applied to.</p>
   */
  SheetVisualScopingConfigurations?: SheetVisualScopingConfiguration[];
}

/**
 * @public
 * <p>The scope configuration for a <code>FilterGroup</code>.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface FilterScopeConfiguration {
  /**
   * @public
   * <p>The configuration for applying a filter to specific sheets.</p>
   */
  SelectedSheets?: SelectedSheetsFilterScopeConfiguration;

  /**
   * @public
   * <p>The configuration for applying a filter to all sheets.</p>
   */
  AllSheets?: AllSheetsFilterScopeConfiguration;
}

/**
 * @public
 * <p>A grouping of individual filters. Filter groups are applied to the same group of visuals.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/add-a-compound-filter.html">Adding filter conditions (group filters) with AND and OR operators</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 */
export interface FilterGroup {
  /**
   * @public
   * <p>The value that uniquely identifies a <code>FilterGroup</code> within a dashboard, template, or analysis.</p>
   */
  FilterGroupId: string | undefined;

  /**
   * @public
   * <p>The list of filters that are present in a <code>FilterGroup</code>.</p>
   */
  Filters: Filter[] | undefined;

  /**
   * @public
   * <p>The configuration that specifies what scope to apply to a <code>FilterGroup</code>.</p>
   *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
   */
  ScopeConfiguration: FilterScopeConfiguration | undefined;

  /**
   * @public
   * <p>The status of the <code>FilterGroup</code>.</p>
   */
  Status?: WidgetStatus | string;

  /**
   * @public
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
   */
  CrossDataset: CrossDatasetTypes | string | undefined;
}

/**
 * @public
 * <p>Defines different defaults to the users or groups based on mapping.</p>
 */
export interface DynamicDefaultValue {
  /**
   * @public
   * <p>The column that contains the username.</p>
   */
  UserNameColumn?: ColumnIdentifier;

  /**
   * @public
   * <p>The column that contains the group name.</p>
   */
  GroupNameColumn?: ColumnIdentifier;

  /**
   * @public
   * <p>The column that contains the default value of each user or group.</p>
   */
  DefaultValueColumn: ColumnIdentifier | undefined;
}

/**
 * @public
 * <p>The default values of the <code>DateTimeParameterDeclaration</code>.</p>
 */
export interface DateTimeDefaultValues {
  /**
   * @public
   * <p>The dynamic value of the  <code>DataTimeDefaultValues</code>. Different defaults are displayed according to users, groups, and values mapping.</p>
   */
  DynamicValue?: DynamicDefaultValue;

  /**
   * @public
   * <p>The static values of the <code>DataTimeDefaultValues</code>.</p>
   */
  StaticValues?: Date[];

  /**
   * @public
   * <p>The rolling date of the <code>DataTimeDefaultValues</code>. The date is determined from the dataset based on input expression.</p>
   */
  RollingDate?: RollingDateConfiguration;
}

/**
 * @public
 * <p>A dataset parameter that is mapped to an analysis parameter.</p>
 */
export interface MappedDataSetParameter {
  /**
   * @public
   * <p>A unique name that identifies a dataset within the analysis or dashboard.</p>
   */
  DataSetIdentifier: string | undefined;

  /**
   * @public
   * <p>The name of the dataset parameter.</p>
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
 * @public
 * <p>The configuration that defines the default value of a <code>DateTime</code> parameter when a value has not been set.</p>
 */
export interface DateTimeValueWhenUnsetConfiguration {
  /**
   * @public
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
   */
  ValueWhenUnsetOption?: ValueWhenUnsetOption | string;

  /**
   * @public
   * <p>A custom value that's used when the value of a parameter isn't set.</p>
   */
  CustomValue?: Date;
}

/**
 * @public
 * <p>A parameter declaration for the <code>DateTime</code> data type.</p>
 */
export interface DateTimeParameterDeclaration {
  /**
   * @public
   * <p>The name of the parameter that is being declared.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The default values of a parameter. If the parameter is a single-value parameter, a maximum of one default value can be provided.</p>
   */
  DefaultValues?: DateTimeDefaultValues;

  /**
   * @public
   * <p>The level of time precision that is used to aggregate <code>DateTime</code> values.</p>
   */
  TimeGranularity?: TimeGranularity | string;

  /**
   * @public
   * <p>The configuration that defines the default value of a <code>DateTime</code> parameter when a value has not been set.</p>
   */
  ValueWhenUnset?: DateTimeValueWhenUnsetConfiguration;

  /**
   * @public
   * <p>A list of dataset parameters that are mapped to an analysis parameter.</p>
   */
  MappedDataSetParameters?: MappedDataSetParameter[];
}

/**
 * @public
 * <p>The default values of the <code>DecimalParameterDeclaration</code>.</p>
 */
export interface DecimalDefaultValues {
  /**
   * @public
   * <p>The dynamic value of the <code>DecimalDefaultValues</code>. Different defaults are displayed according to users, groups, and values mapping.</p>
   */
  DynamicValue?: DynamicDefaultValue;

  /**
   * @public
   * <p>The static values of the <code>DecimalDefaultValues</code>.</p>
   */
  StaticValues?: number[];
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
 * @public
 * <p>The configuration that defines the default value of a <code>Decimal</code> parameter when a value has not been set.</p>
 */
export interface DecimalValueWhenUnsetConfiguration {
  /**
   * @public
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
   */
  ValueWhenUnsetOption?: ValueWhenUnsetOption | string;

  /**
   * @public
   * <p>A custom value that's used when the value of a parameter isn't set.</p>
   */
  CustomValue?: number;
}

/**
 * @public
 * <p>A parameter declaration for the <code>Decimal</code> data type.</p>
 */
export interface DecimalParameterDeclaration {
  /**
   * @public
   * <p>The value type determines whether the parameter is a single-value or multi-value parameter.</p>
   */
  ParameterValueType: ParameterValueType | string | undefined;

  /**
   * @public
   * <p>The name of the parameter that is being declared.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The default values of a parameter. If the parameter is a single-value parameter, a maximum of one default value can be provided.</p>
   */
  DefaultValues?: DecimalDefaultValues;

  /**
   * @public
   * <p>The configuration that defines the default value of a <code>Decimal</code> parameter when a value has not been set.</p>
   */
  ValueWhenUnset?: DecimalValueWhenUnsetConfiguration;

  /**
   * @public
   * <p>A list of dataset parameters that are mapped to an analysis parameter.</p>
   */
  MappedDataSetParameters?: MappedDataSetParameter[];
}

/**
 * @public
 * <p>The default values of the <code>IntegerParameterDeclaration</code>.</p>
 */
export interface IntegerDefaultValues {
  /**
   * @public
   * <p>The dynamic value of the <code>IntegerDefaultValues</code>. Different defaults are displayed according to users, groups, and values mapping.</p>
   */
  DynamicValue?: DynamicDefaultValue;

  /**
   * @public
   * <p>The static values of the <code>IntegerDefaultValues</code>.</p>
   */
  StaticValues?: number[];
}

/**
 * @public
 * <p>A parameter declaration for the <code>Integer</code> data type.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface IntegerValueWhenUnsetConfiguration {
  /**
   * @public
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
   */
  ValueWhenUnsetOption?: ValueWhenUnsetOption | string;

  /**
   * @public
   * <p>A custom value that's used when the value of a parameter isn't set.</p>
   */
  CustomValue?: number;
}

/**
 * @public
 * <p>A parameter declaration for the <code>Integer</code> data type.</p>
 */
export interface IntegerParameterDeclaration {
  /**
   * @public
   * <p>The value type determines whether the parameter is a single-value or multi-value parameter.</p>
   */
  ParameterValueType: ParameterValueType | string | undefined;

  /**
   * @public
   * <p>The name of the parameter that is being declared.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The default values of a parameter. If the parameter is a single-value parameter, a maximum of one default value can be provided.</p>
   */
  DefaultValues?: IntegerDefaultValues;

  /**
   * @public
   * <p>A parameter declaration for the <code>Integer</code> data type.</p>
   */
  ValueWhenUnset?: IntegerValueWhenUnsetConfiguration;

  /**
   * @public
   * <p>A list of dataset parameters that are mapped to an analysis parameter.</p>
   */
  MappedDataSetParameters?: MappedDataSetParameter[];
}

/**
 * @public
 * <p>The default values of the <code>StringParameterDeclaration</code>.</p>
 */
export interface StringDefaultValues {
  /**
   * @public
   * <p>The dynamic value of the <code>StringDefaultValues</code>. Different defaults displayed according to users, groups, and values mapping.</p>
   */
  DynamicValue?: DynamicDefaultValue;

  /**
   * @public
   * <p>The static values of the <code>DecimalDefaultValues</code>.</p>
   */
  StaticValues?: string[];
}

/**
 * @public
 * <p>The configuration that defines the default value of a <code>String</code> parameter when a value has not been set.</p>
 */
export interface StringValueWhenUnsetConfiguration {
  /**
   * @public
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
   */
  ValueWhenUnsetOption?: ValueWhenUnsetOption | string;

  /**
   * @public
   * <p>A custom value that's used when the value of a parameter isn't set.</p>
   */
  CustomValue?: string;
}

/**
 * @public
 * <p>A parameter declaration for the <code>String</code> data type.</p>
 */
export interface StringParameterDeclaration {
  /**
   * @public
   * <p>The value type determines whether the parameter is a single-value or multi-value parameter.</p>
   */
  ParameterValueType: ParameterValueType | string | undefined;

  /**
   * @public
   * <p>The name of the parameter that is being declared.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The default values of a parameter. If the parameter is a single-value parameter, a maximum of one default value can be provided.</p>
   */
  DefaultValues?: StringDefaultValues;

  /**
   * @public
   * <p>The configuration that defines the default value of a <code>String</code> parameter when a value has not been set.</p>
   */
  ValueWhenUnset?: StringValueWhenUnsetConfiguration;

  /**
   * @public
   * <p>A list of dataset parameters that are mapped to an analysis parameter.</p>
   */
  MappedDataSetParameters?: MappedDataSetParameter[];
}

/**
 * @public
 * <p>The declaration definition of a parameter.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/parameters-in-quicksight.html">Parameters in Amazon QuickSight</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface ParameterDeclaration {
  /**
   * @public
   * <p>A parameter declaration for the <code>String</code> data type.</p>
   */
  StringParameterDeclaration?: StringParameterDeclaration;

  /**
   * @public
   * <p>A parameter declaration for the <code>Decimal</code> data type.</p>
   */
  DecimalParameterDeclaration?: DecimalParameterDeclaration;

  /**
   * @public
   * <p>A parameter declaration for the <code>Integer</code> data type.</p>
   */
  IntegerParameterDeclaration?: IntegerParameterDeclaration;

  /**
   * @public
   * <p>A parameter declaration for the <code>DateTime</code> data type.</p>
   */
  DateTimeParameterDeclaration?: DateTimeParameterDeclaration;
}

/**
 * @public
 * <p>A control to display info icons for filters and parameters.</p>
 */
export interface SheetControlInfoIconLabelOptions {
  /**
   * @public
   * <p>The visibility configuration of info icon label options.</p>
   */
  Visibility?: Visibility | string;

  /**
   * @public
   * <p> The text content of info icon.</p>
   */
  InfoIconText?: string;
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
 * @public
 * <p>The option that determines the text display size.</p>
 */
export interface FontSize {
  /**
   * @public
   * <p>The lexical name for the text size, proportional to its surrounding context.</p>
   */
  Relative?: RelativeFontSize | string;
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
 * @public
 * <p>The option that determines the text display weight, or boldness.</p>
 */
export interface FontWeight {
  /**
   * @public
   * <p>The lexical name for the level of boldness of the text display.</p>
   */
  Name?: FontWeightName | string;
}

/**
 * @public
 * <p>Configures the display properties of the given text.</p>
 */
export interface FontConfiguration {
  /**
   * @public
   * <p>The option that determines the text display size.</p>
   */
  FontSize?: FontSize;

  /**
   * @public
   * <p>Determines the appearance of decorative lines on the text.</p>
   */
  FontDecoration?: FontDecoration | string;

  /**
   * @public
   * <p>Determines the color of the text.</p>
   */
  FontColor?: string;

  /**
   * @public
   * <p>The option that determines the text display weight, or boldness.</p>
   */
  FontWeight?: FontWeight;

  /**
   * @public
   * <p>Determines the text display face that is inherited by the given font family.</p>
   */
  FontStyle?: FontStyle | string;
}

/**
 * @public
 * <p>The share label options for the labels.</p>
 */
export interface LabelOptions {
  /**
   * @public
   * <p>Determines whether or not the label is visible.</p>
   */
  Visibility?: Visibility | string;

  /**
   * @public
   * <p>The font configuration of the label.</p>
   */
  FontConfiguration?: FontConfiguration;

  /**
   * @public
   * <p>The text for the label.</p>
   */
  CustomLabel?: string;
}

/**
 * @public
 * <p>The display options of a control.</p>
 */
export interface DateTimePickerControlDisplayOptions {
  /**
   * @public
   * <p>The options to configure the title visibility, name, and font size.</p>
   */
  TitleOptions?: LabelOptions;

  /**
   * @public
   * <p>Customize how dates are formatted in controls.</p>
   */
  DateTimeFormat?: string;

  /**
   * @public
   * <p>The configuration of info icon label options.</p>
   */
  InfoIconLabelOptions?: SheetControlInfoIconLabelOptions;
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
 * @public
 * <p>A control from a date filter that is used to specify date and time.</p>
 */
export interface FilterDateTimePickerControl {
  /**
   * @public
   * <p>The ID of the <code>FilterDateTimePickerControl</code>.</p>
   */
  FilterControlId: string | undefined;

  /**
   * @public
   * <p>The title of the <code>FilterDateTimePickerControl</code>.</p>
   */
  Title: string | undefined;

  /**
   * @public
   * <p>The source filter ID of the <code>FilterDateTimePickerControl</code>.</p>
   */
  SourceFilterId: string | undefined;

  /**
   * @public
   * <p>The display options of a control.</p>
   */
  DisplayOptions?: DateTimePickerControlDisplayOptions;

  /**
   * @public
   * <p>The date time picker type of a <code>FilterDateTimePickerControl</code>. Choose one of the following options:</p>
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
   */
  Type?: SheetControlDateTimePickerType | string;
}

/**
 * @public
 * <p>The source controls that are used in a <code>CascadingControlConfiguration</code>.</p>
 */
export interface CascadingControlSource {
  /**
   * @public
   * <p>The source sheet control ID of a <code>CascadingControlSource</code>.</p>
   */
  SourceSheetControlId?: string;

  /**
   * @public
   * <p>The column identifier that determines which column to look up for the source sheet control.</p>
   */
  ColumnToMatch?: ColumnIdentifier;
}

/**
 * @public
 * <p>The values that are displayed in a control can be configured to only show values that are valid based on what's selected in other controls.</p>
 */
export interface CascadingControlConfiguration {
  /**
   * @public
   * <p>A list of source controls that determine the values that are used in the current control.</p>
   */
  SourceControls?: CascadingControlSource[];
}

/**
 * @public
 * <p>The configuration of the <code>Select all</code> options in a list control.</p>
 */
export interface ListControlSelectAllOptions {
  /**
   * @public
   * <p>The visibility configuration of the <code>Select all</code> options in a list control.</p>
   */
  Visibility?: Visibility | string;
}

/**
 * @public
 * <p>The display options of a control.</p>
 */
export interface DropDownControlDisplayOptions {
  /**
   * @public
   * <p>The configuration of the <code>Select all</code> options in a
   *             dropdown control.</p>
   */
  SelectAllOptions?: ListControlSelectAllOptions;

  /**
   * @public
   * <p>The options to configure the title visibility, name, and font size.</p>
   */
  TitleOptions?: LabelOptions;

  /**
   * @public
   * <p>The configuration of info icon label options.</p>
   */
  InfoIconLabelOptions?: SheetControlInfoIconLabelOptions;
}

/**
 * @public
 * <p>A list of selectable values that are used in a control.</p>
 */
export interface FilterSelectableValues {
  /**
   * @public
   * <p>The values that are used in the <code>FilterSelectableValues</code>.</p>
   */
  Values?: string[];
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
 * @public
 * <p>A control to display a dropdown list with buttons that are used to select a single value.</p>
 */
export interface FilterDropDownControl {
  /**
   * @public
   * <p>The ID of the <code>FilterDropDownControl</code>.</p>
   */
  FilterControlId: string | undefined;

  /**
   * @public
   * <p>The title of the <code>FilterDropDownControl</code>.</p>
   */
  Title: string | undefined;

  /**
   * @public
   * <p>The source filter ID of the <code>FilterDropDownControl</code>.</p>
   */
  SourceFilterId: string | undefined;

  /**
   * @public
   * <p>The display options of the <code>FilterDropDownControl</code>.</p>
   */
  DisplayOptions?: DropDownControlDisplayOptions;

  /**
   * @public
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
   */
  Type?: SheetControlListType | string;

  /**
   * @public
   * <p>A list of selectable values that are used in a control.</p>
   */
  SelectableValues?: FilterSelectableValues;

  /**
   * @public
   * <p>The values that are displayed in a control can be configured to only show values that are valid based on what's selected in other controls.</p>
   */
  CascadingControlConfiguration?: CascadingControlConfiguration;
}

/**
 * @public
 * <p>The configuration of the search options in a list control.</p>
 */
export interface ListControlSearchOptions {
  /**
   * @public
   * <p>The visibility configuration of the search options in a list control.</p>
   */
  Visibility?: Visibility | string;
}

/**
 * @public
 * <p>The display options of a control.</p>
 */
export interface ListControlDisplayOptions {
  /**
   * @public
   * <p>The configuration of the search options in a list control.</p>
   */
  SearchOptions?: ListControlSearchOptions;

  /**
   * @public
   * <p>The configuration of the <code>Select all</code> options in a list control.</p>
   */
  SelectAllOptions?: ListControlSelectAllOptions;

  /**
   * @public
   * <p>The options to configure the title visibility, name, and font size.</p>
   */
  TitleOptions?: LabelOptions;

  /**
   * @public
   * <p>The configuration of info icon label options.</p>
   */
  InfoIconLabelOptions?: SheetControlInfoIconLabelOptions;
}

/**
 * @public
 * <p>A control to display a list of buttons or boxes. This is used to select either a single value or multiple values.</p>
 */
export interface FilterListControl {
  /**
   * @public
   * <p>The ID of the <code>FilterListControl</code>.</p>
   */
  FilterControlId: string | undefined;

  /**
   * @public
   * <p>The title of the <code>FilterListControl</code>.</p>
   */
  Title: string | undefined;

  /**
   * @public
   * <p>The source filter ID of the <code>FilterListControl</code>.</p>
   */
  SourceFilterId: string | undefined;

  /**
   * @public
   * <p>The display options of a control.</p>
   */
  DisplayOptions?: ListControlDisplayOptions;

  /**
   * @public
   * <p>The type of <code>FilterListControl</code>. Choose one of the following options:</p>
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
   */
  Type?: SheetControlListType | string;

  /**
   * @public
   * <p>A list of selectable values that are used in a control.</p>
   */
  SelectableValues?: FilterSelectableValues;

  /**
   * @public
   * <p>The values that are displayed in a control can be configured to only show values that are valid based on what's selected in other controls.</p>
   */
  CascadingControlConfiguration?: CascadingControlConfiguration;
}

/**
 * @public
 * <p>The display options of a control.</p>
 */
export interface RelativeDateTimeControlDisplayOptions {
  /**
   * @public
   * <p>The options to configure the title visibility, name, and font size.</p>
   */
  TitleOptions?: LabelOptions;

  /**
   * @public
   * <p>Customize how dates are formatted in controls.</p>
   */
  DateTimeFormat?: string;

  /**
   * @public
   * <p>The configuration of info icon label options.</p>
   */
  InfoIconLabelOptions?: SheetControlInfoIconLabelOptions;
}

/**
 * @public
 * <p>A control from a date filter that is used to specify the relative date.</p>
 */
export interface FilterRelativeDateTimeControl {
  /**
   * @public
   * <p>The ID of the <code>FilterTextAreaControl</code>.</p>
   */
  FilterControlId: string | undefined;

  /**
   * @public
   * <p>The title of the <code>FilterTextAreaControl</code>.</p>
   */
  Title: string | undefined;

  /**
   * @public
   * <p>The source filter ID of the <code>FilterTextAreaControl</code>.</p>
   */
  SourceFilterId: string | undefined;

  /**
   * @public
   * <p>The display options of a control.</p>
   */
  DisplayOptions?: RelativeDateTimeControlDisplayOptions;
}

/**
 * @public
 * <p>The display options of a control.</p>
 */
export interface SliderControlDisplayOptions {
  /**
   * @public
   * <p>The options to configure the title visibility, name, and font size.</p>
   */
  TitleOptions?: LabelOptions;

  /**
   * @public
   * <p>The configuration of info icon label options.</p>
   */
  InfoIconLabelOptions?: SheetControlInfoIconLabelOptions;
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
 * @public
 * <p>A control to display a horizontal toggle bar. This is used to change a value by sliding the toggle.</p>
 */
export interface FilterSliderControl {
  /**
   * @public
   * <p>The ID of the <code>FilterSliderControl</code>.</p>
   */
  FilterControlId: string | undefined;

  /**
   * @public
   * <p>The title of the <code>FilterSliderControl</code>.</p>
   */
  Title: string | undefined;

  /**
   * @public
   * <p>The source filter ID of the <code>FilterSliderControl</code>.</p>
   */
  SourceFilterId: string | undefined;

  /**
   * @public
   * <p>The display options of a control.</p>
   */
  DisplayOptions?: SliderControlDisplayOptions;

  /**
   * @public
   * <p>The type of <code>FilterSliderControl</code>. Choose one of the following options:</p>
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
   */
  Type?: SheetControlSliderType | string;

  /**
   * @public
   * <p>The smaller value that is displayed at the left of the slider.</p>
   */
  MaximumValue: number | undefined;

  /**
   * @public
   * <p>The larger value that is displayed at the right of the slider.</p>
   */
  MinimumValue: number | undefined;

  /**
   * @public
   * <p>The number of increments that the slider bar is divided into.</p>
   */
  StepSize: number | undefined;
}

/**
 * @public
 * <p>The configuration of the placeholder options in a text control.</p>
 */
export interface TextControlPlaceholderOptions {
  /**
   * @public
   * <p>The visibility configuration of the placeholder options in a text control.</p>
   */
  Visibility?: Visibility | string;
}

/**
 * @public
 * <p>The display options of a control.</p>
 */
export interface TextAreaControlDisplayOptions {
  /**
   * @public
   * <p>The options to configure the title visibility, name, and font size.</p>
   */
  TitleOptions?: LabelOptions;

  /**
   * @public
   * <p>The configuration of the placeholder options in a text area control.</p>
   */
  PlaceholderOptions?: TextControlPlaceholderOptions;

  /**
   * @public
   * <p>The configuration of info icon label options.</p>
   */
  InfoIconLabelOptions?: SheetControlInfoIconLabelOptions;
}

/**
 * @public
 * <p>A control to display a text box that is used to enter multiple entries.</p>
 */
export interface FilterTextAreaControl {
  /**
   * @public
   * <p>The ID of the <code>FilterTextAreaControl</code>.</p>
   */
  FilterControlId: string | undefined;

  /**
   * @public
   * <p>The title of the <code>FilterTextAreaControl</code>.</p>
   */
  Title: string | undefined;

  /**
   * @public
   * <p>The source filter ID of the <code>FilterTextAreaControl</code>.</p>
   */
  SourceFilterId: string | undefined;

  /**
   * @public
   * <p>The delimiter that is used to separate the lines in text.</p>
   */
  Delimiter?: string;

  /**
   * @public
   * <p>The display options of a control.</p>
   */
  DisplayOptions?: TextAreaControlDisplayOptions;
}

/**
 * @public
 * <p>The display options of a control.</p>
 */
export interface TextFieldControlDisplayOptions {
  /**
   * @public
   * <p>The options to configure the title visibility, name, and font size.</p>
   */
  TitleOptions?: LabelOptions;

  /**
   * @public
   * <p>The configuration of the placeholder options in a text field control.</p>
   */
  PlaceholderOptions?: TextControlPlaceholderOptions;

  /**
   * @public
   * <p>The configuration of info icon label options.</p>
   */
  InfoIconLabelOptions?: SheetControlInfoIconLabelOptions;
}

/**
 * @public
 * <p>A control to display a text box that is used to enter a single entry.</p>
 */
export interface FilterTextFieldControl {
  /**
   * @public
   * <p>The ID of the <code>FilterTextFieldControl</code>.</p>
   */
  FilterControlId: string | undefined;

  /**
   * @public
   * <p>The title of the <code>FilterTextFieldControl</code>.</p>
   */
  Title: string | undefined;

  /**
   * @public
   * <p>The source filter ID of the <code>FilterTextFieldControl</code>.</p>
   */
  SourceFilterId: string | undefined;

  /**
   * @public
   * <p>The display options of a control.</p>
   */
  DisplayOptions?: TextFieldControlDisplayOptions;
}

/**
 * @public
 * <p>The control of a filter that is used to interact with a dashboard or an analysis.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface FilterControl {
  /**
   * @public
   * <p>A control from a date filter that is used to specify date and time.</p>
   */
  DateTimePicker?: FilterDateTimePickerControl;

  /**
   * @public
   * <p>A control to display a list of buttons or boxes. This is used to select either a single value or multiple values.</p>
   */
  List?: FilterListControl;

  /**
   * @public
   * <p>A control to display a dropdown list with buttons that are used to select a single value.</p>
   */
  Dropdown?: FilterDropDownControl;

  /**
   * @public
   * <p>A control to display a text box that is used to enter a single entry.</p>
   */
  TextField?: FilterTextFieldControl;

  /**
   * @public
   * <p>A control to display a text box that is used to enter multiple entries.</p>
   */
  TextArea?: FilterTextAreaControl;

  /**
   * @public
   * <p>A control to display a horizontal toggle bar. This is used to change a value by sliding the toggle.</p>
   */
  Slider?: FilterSliderControl;

  /**
   * @public
   * <p>A control from a date filter that is used to specify the relative date.</p>
   */
  RelativeDateTime?: FilterRelativeDateTimeControl;
}

/**
 * @public
 * <p>The background style configuration of a free-form layout element.</p>
 */
export interface FreeFormLayoutElementBackgroundStyle {
  /**
   * @public
   * <p>The background visibility of a free-form layout element.</p>
   */
  Visibility?: Visibility | string;

  /**
   * @public
   * <p>The background color of a free-form layout element.</p>
   */
  Color?: string;
}

/**
 * @public
 * <p>The background style configuration of a free-form layout element.</p>
 */
export interface FreeFormLayoutElementBorderStyle {
  /**
   * @public
   * <p>The border visibility of a free-form layout element.</p>
   */
  Visibility?: Visibility | string;

  /**
   * @public
   * <p>The border color of a free-form layout element.</p>
   */
  Color?: string;
}

/**
 * @public
 * @enum
 */
export const LayoutElementType = {
  FILTER_CONTROL: "FILTER_CONTROL",
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
 * <p>The configuration of loading animation in free-form layout. </p>
 */
export interface LoadingAnimation {
  /**
   * @public
   * <p>The visibility configuration of <code>LoadingAnimation</code>.</p>
   */
  Visibility?: Visibility | string;
}

/**
 * @public
 * <p>The override configuration of the rendering rules of a sheet.</p>
 */
export interface SheetElementConfigurationOverrides {
  /**
   * @public
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
   */
  Visibility?: Visibility | string;
}

/**
 * @public
 * <p>The rendering rules of a sheet that uses a free-form layout.</p>
 */
export interface SheetElementRenderingRule {
  /**
   * @public
   * <p>The expression of the rendering rules of a sheet.</p>
   */
  Expression: string | undefined;

  /**
   * @public
   * <p>The override configuration of the rendering rules of a sheet.</p>
   */
  ConfigurationOverrides: SheetElementConfigurationOverrides | undefined;
}

/**
 * @public
 * <p>An element within a free-form layout.</p>
 */
export interface FreeFormLayoutElement {
  /**
   * @public
   * <p>A unique identifier for an element within a free-form layout.</p>
   */
  ElementId: string | undefined;

  /**
   * @public
   * <p>The type of element.</p>
   */
  ElementType: LayoutElementType | string | undefined;

  /**
   * @public
   * <p>The x-axis coordinate of the element.</p>
   */
  XAxisLocation: string | undefined;

  /**
   * @public
   * <p>The y-axis coordinate of the element.</p>
   */
  YAxisLocation: string | undefined;

  /**
   * @public
   * <p>The width of an element within a free-form layout.</p>
   */
  Width: string | undefined;

  /**
   * @public
   * <p>The height of an element within a free-form layout.</p>
   */
  Height: string | undefined;

  /**
   * @public
   * <p>The visibility of an element within a free-form layout.</p>
   */
  Visibility?: Visibility | string;

  /**
   * @public
   * <p>The rendering rules that determine when an element should be displayed within a free-form layout.</p>
   */
  RenderingRules?: SheetElementRenderingRule[];

  /**
   * @public
   * <p>The border style configuration of a free-form layout element.</p>
   */
  BorderStyle?: FreeFormLayoutElementBorderStyle;

  /**
   * @public
   * <p>The border style configuration of a free-form layout element. This border style is used when the element is selected.</p>
   */
  SelectedBorderStyle?: FreeFormLayoutElementBorderStyle;

  /**
   * @public
   * <p>The background style configuration of a free-form layout element.</p>
   */
  BackgroundStyle?: FreeFormLayoutElementBackgroundStyle;

  /**
   * @public
   * <p>The loading animation configuration of a free-form layout element.</p>
   */
  LoadingAnimation?: LoadingAnimation;
}

/**
 * @public
 * <p>The configuration of a free-form layout.</p>
 */
export interface FreeFormLayoutConfiguration {
  /**
   * @public
   * <p>The elements that are included in a free-form layout.</p>
   */
  Elements: FreeFormLayoutElement[] | undefined;

  /**
   * @public
   * <p>Configuration options for the canvas of a free-form layout.</p>
   */
  CanvasSizeOptions?: FreeFormLayoutCanvasSizeOptions;
}

/**
 * @public
 * <p>An element within a grid layout.</p>
 */
export interface GridLayoutElement {
  /**
   * @public
   * <p>A unique identifier for an element within a grid layout.</p>
   */
  ElementId: string | undefined;

  /**
   * @public
   * <p>The type of element.</p>
   */
  ElementType: LayoutElementType | string | undefined;

  /**
   * @public
   * <p>The column index for the upper left corner of an element.</p>
   */
  ColumnIndex?: number;

  /**
   * @public
   * <p>The width of a grid element expressed as a number of grid columns.</p>
   */
  ColumnSpan: number | undefined;

  /**
   * @public
   * <p>The row index for the upper left corner of an element.</p>
   */
  RowIndex?: number;

  /**
   * @public
   * <p>The height of a grid element expressed as a number of grid rows.</p>
   */
  RowSpan: number | undefined;
}

/**
 * @public
 * <p>The configuration for a grid layout. Also called a tiled layout.</p>
 *          <p>Visuals snap to a grid with standard spacing and alignment. Dashboards are displayed as designed, with options to fit to screen or view at actual size.</p>
 */
export interface GridLayoutConfiguration {
  /**
   * @public
   * <p>The elements that are included in a grid layout.</p>
   */
  Elements: GridLayoutElement[] | undefined;

  /**
   * @public
   * <p>Configuration options for the canvas of a grid layout.</p>
   */
  CanvasSizeOptions?: GridLayoutCanvasSizeOptions;
}

/**
 * @public
 * <p>The free-form layout configuration of a section.</p>
 */
export interface FreeFormSectionLayoutConfiguration {
  /**
   * @public
   * <p>The elements that are included in the free-form layout.</p>
   */
  Elements: FreeFormLayoutElement[] | undefined;
}

/**
 * @public
 * <p>The layout configuration of a section.</p>
 */
export interface SectionLayoutConfiguration {
  /**
   * @public
   * <p>The free-form layout configuration of a section.</p>
   */
  FreeFormLayout: FreeFormSectionLayoutConfiguration | undefined;
}

/**
 * @public
 * <p>The configuration of content in a body section.</p>
 */
export interface BodySectionContent {
  /**
   * @public
   * <p>The layout configuration of a body section.</p>
   */
  Layout?: SectionLayoutConfiguration;
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
 * @public
 * <p>The configuration of a page break after a section.</p>
 */
export interface SectionAfterPageBreak {
  /**
   * @public
   * <p>The option that enables or disables a page break at the end of a section.</p>
   */
  Status?: SectionPageBreakStatus | string;
}

/**
 * @public
 * <p>The configuration of a page break for a section.</p>
 */
export interface SectionPageBreakConfiguration {
  /**
   * @public
   * <p>The configuration of a page break after a section.</p>
   */
  After?: SectionAfterPageBreak;
}

/**
 * @public
 * <p>The options that style a section.</p>
 */
export interface SectionStyle {
  /**
   * @public
   * <p>The height of a section.</p>
   *          <p>Heights can only be defined for header and footer sections. The default height margin is 0.5 inches. </p>
   */
  Height?: string;

  /**
   * @public
   * <p>The spacing between section content and its top, bottom, left, and right edges.</p>
   *          <p>There is no padding by default.</p>
   */
  Padding?: Spacing;
}

/**
 * @public
 * <p>The configuration of a body section.</p>
 */
export interface BodySectionConfiguration {
  /**
   * @public
   * <p>The unique identifier of a body section.</p>
   */
  SectionId: string | undefined;

  /**
   * @public
   * <p>The configuration of content in a body section.</p>
   */
  Content: BodySectionContent | undefined;

  /**
   * @public
   * <p>The style options of a body section.</p>
   */
  Style?: SectionStyle;

  /**
   * @public
   * <p>The configuration of a page break for a section.</p>
   */
  PageBreakConfiguration?: SectionPageBreakConfiguration;
}

/**
 * @public
 * <p>The configuration of a header or footer section.</p>
 */
export interface HeaderFooterSectionConfiguration {
  /**
   * @public
   * <p>The unique identifier of the header or footer section.</p>
   */
  SectionId: string | undefined;

  /**
   * @public
   * <p>The layout configuration of the header or footer section.</p>
   */
  Layout: SectionLayoutConfiguration | undefined;

  /**
   * @public
   * <p>The style options of a header or footer section.</p>
   */
  Style?: SectionStyle;
}

/**
 * @public
 * <p>The configuration for a
 *             section-based layout.</p>
 */
export interface SectionBasedLayoutConfiguration {
  /**
   * @public
   * <p>A list of header section configurations.</p>
   */
  HeaderSections: HeaderFooterSectionConfiguration[] | undefined;

  /**
   * @public
   * <p>A list of body section configurations.</p>
   */
  BodySections: BodySectionConfiguration[] | undefined;

  /**
   * @public
   * <p>A list of footer section configurations.</p>
   */
  FooterSections: HeaderFooterSectionConfiguration[] | undefined;

  /**
   * @public
   * <p>The options for the canvas of a section-based layout.</p>
   */
  CanvasSizeOptions: SectionBasedLayoutCanvasSizeOptions | undefined;
}

/**
 * @public
 * <p>The configuration that determines what the type of layout will be used on a sheet.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface LayoutConfiguration {
  /**
   * @public
   * <p>A type of layout that can be used on a sheet. In a grid layout, visuals snap to a grid with standard spacing and alignment. Dashboards are displayed as designed, with options to fit to screen or view at actual size. A grid layout can be configured to behave in one of two ways when the viewport is resized: <code>FIXED</code> or <code>RESPONSIVE</code>.</p>
   */
  GridLayout?: GridLayoutConfiguration;

  /**
   * @public
   * <p>A free-form is optimized for a fixed width and has more control over the exact placement of layout elements.</p>
   */
  FreeFormLayout?: FreeFormLayoutConfiguration;

  /**
   * @public
   * <p>A section based layout organizes visuals into multiple sections and has customized header, footer and page break.</p>
   */
  SectionBasedLayout?: SectionBasedLayoutConfiguration;
}

/**
 * @public
 * <p>A <code>Layout</code> defines the placement of elements within a sheet.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/types-of-layout.html">Types of layout</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface Layout {
  /**
   * @public
   * <p>The configuration that determines what the type of layout for a sheet.</p>
   */
  Configuration: LayoutConfiguration | undefined;
}

/**
 * @public
 * <p>A control from a date parameter that specifies date and time.</p>
 */
export interface ParameterDateTimePickerControl {
  /**
   * @public
   * <p>The ID of the <code>ParameterDateTimePickerControl</code>.</p>
   */
  ParameterControlId: string | undefined;

  /**
   * @public
   * <p>The title of the <code>ParameterDateTimePickerControl</code>.</p>
   */
  Title: string | undefined;

  /**
   * @public
   * <p>The name of the <code>ParameterDateTimePickerControl</code>.</p>
   */
  SourceParameterName: string | undefined;

  /**
   * @public
   * <p>The display options of a control.</p>
   */
  DisplayOptions?: DateTimePickerControlDisplayOptions;
}

/**
 * @public
 * <p>A list of selectable values that are used in a control.</p>
 */
export interface ParameterSelectableValues {
  /**
   * @public
   * <p>The values that are used in <code>ParameterSelectableValues</code>.</p>
   */
  Values?: string[];

  /**
   * @public
   * <p>The column identifier that fetches values from the data set.</p>
   */
  LinkToDataSetColumn?: ColumnIdentifier;
}

/**
 * @public
 * <p>A control to display a dropdown list with buttons that are used to select a single value.</p>
 */
export interface ParameterDropDownControl {
  /**
   * @public
   * <p>The ID of the <code>ParameterDropDownControl</code>.</p>
   */
  ParameterControlId: string | undefined;

  /**
   * @public
   * <p>The title of the <code>ParameterDropDownControl</code>.</p>
   */
  Title: string | undefined;

  /**
   * @public
   * <p>The source parameter name of the <code>ParameterDropDownControl</code>.</p>
   */
  SourceParameterName: string | undefined;

  /**
   * @public
   * <p>The display options of a control.</p>
   */
  DisplayOptions?: DropDownControlDisplayOptions;

  /**
   * @public
   * <p>The type parameter name of the <code>ParameterDropDownControl</code>.</p>
   */
  Type?: SheetControlListType | string;

  /**
   * @public
   * <p>A list of selectable values that are used in a control.</p>
   */
  SelectableValues?: ParameterSelectableValues;

  /**
   * @public
   * <p>The values that are displayed in a control can be configured to only show values that are valid based on what's selected in other controls.</p>
   */
  CascadingControlConfiguration?: CascadingControlConfiguration;
}

/**
 * @public
 * <p>A control to display a list with buttons or boxes that are used to select either a single value or multiple values.</p>
 */
export interface ParameterListControl {
  /**
   * @public
   * <p>The ID of the <code>ParameterListControl</code>.</p>
   */
  ParameterControlId: string | undefined;

  /**
   * @public
   * <p>The title of the <code>ParameterListControl</code>.</p>
   */
  Title: string | undefined;

  /**
   * @public
   * <p>The source parameter name of the <code>ParameterListControl</code>.</p>
   */
  SourceParameterName: string | undefined;

  /**
   * @public
   * <p>The display options of a control.</p>
   */
  DisplayOptions?: ListControlDisplayOptions;

  /**
   * @public
   * <p>The type of <code>ParameterListControl</code>.</p>
   */
  Type?: SheetControlListType | string;

  /**
   * @public
   * <p>A list of selectable values that are used in a control.</p>
   */
  SelectableValues?: ParameterSelectableValues;

  /**
   * @public
   * <p>The values that are displayed in a control can be configured to only show values that are valid based on what's selected in other controls.</p>
   */
  CascadingControlConfiguration?: CascadingControlConfiguration;
}

/**
 * @public
 * <p>A control to display a horizontal toggle bar. This is used to change a value by sliding the toggle.</p>
 */
export interface ParameterSliderControl {
  /**
   * @public
   * <p>The ID of the <code>ParameterSliderControl</code>.</p>
   */
  ParameterControlId: string | undefined;

  /**
   * @public
   * <p>The title of the <code>ParameterSliderControl</code>.</p>
   */
  Title: string | undefined;

  /**
   * @public
   * <p>The source parameter name of the <code>ParameterSliderControl</code>.</p>
   */
  SourceParameterName: string | undefined;

  /**
   * @public
   * <p>The display options of a control.</p>
   */
  DisplayOptions?: SliderControlDisplayOptions;

  /**
   * @public
   * <p>The smaller value that is displayed at the left of the slider.</p>
   */
  MaximumValue: number | undefined;

  /**
   * @public
   * <p>The larger value that is displayed at the right of the slider.</p>
   */
  MinimumValue: number | undefined;

  /**
   * @public
   * <p>The number of increments that the slider bar is divided into.</p>
   */
  StepSize: number | undefined;
}

/**
 * @public
 * <p>A control to display a text box that is used to enter multiple entries.</p>
 */
export interface ParameterTextAreaControl {
  /**
   * @public
   * <p>The ID of the <code>ParameterTextAreaControl</code>.</p>
   */
  ParameterControlId: string | undefined;

  /**
   * @public
   * <p>The title of the <code>ParameterTextAreaControl</code>.</p>
   */
  Title: string | undefined;

  /**
   * @public
   * <p>The source parameter name of the <code>ParameterTextAreaControl</code>.</p>
   */
  SourceParameterName: string | undefined;

  /**
   * @public
   * <p>The delimiter that is used to separate the lines in text.</p>
   */
  Delimiter?: string;

  /**
   * @public
   * <p>The display options of a control.</p>
   */
  DisplayOptions?: TextAreaControlDisplayOptions;
}

/**
 * @public
 * <p>A control to display a text box that is used to enter a single entry.</p>
 */
export interface ParameterTextFieldControl {
  /**
   * @public
   * <p>The ID of the <code>ParameterTextFieldControl</code>.</p>
   */
  ParameterControlId: string | undefined;

  /**
   * @public
   * <p>The title of the <code>ParameterTextFieldControl</code>.</p>
   */
  Title: string | undefined;

  /**
   * @public
   * <p>The source parameter name of the <code>ParameterTextFieldControl</code>.</p>
   */
  SourceParameterName: string | undefined;

  /**
   * @public
   * <p>The display options of a control.</p>
   */
  DisplayOptions?: TextFieldControlDisplayOptions;
}

/**
 * @public
 * <p>The control of a parameter that users can interact with in a dashboard or an analysis.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface ParameterControl {
  /**
   * @public
   * <p>A control from a date parameter that specifies date and time.</p>
   */
  DateTimePicker?: ParameterDateTimePickerControl;

  /**
   * @public
   * <p>A control to display a list with buttons or boxes that are used to select either a single value or multiple values.</p>
   */
  List?: ParameterListControl;

  /**
   * @public
   * <p>A control to display a dropdown list with buttons that are used to select a single value.</p>
   */
  Dropdown?: ParameterDropDownControl;

  /**
   * @public
   * <p>A control to display a text box that is used to enter a single entry.</p>
   */
  TextField?: ParameterTextFieldControl;

  /**
   * @public
   * <p>A control to display a text box that is used to enter multiple entries.</p>
   */
  TextArea?: ParameterTextAreaControl;

  /**
   * @public
   * <p>A control to display a horizontal toggle bar. This is used to change a value by sliding the toggle.</p>
   */
  Slider?: ParameterSliderControl;
}

/**
 * @public
 * <p>The configuration that determines the elements and canvas size options of sheet control.</p>
 */
export interface SheetControlLayoutConfiguration {
  /**
   * @public
   * <p>The configuration that determines the elements and canvas size options of sheet control.</p>
   */
  GridLayout?: GridLayoutConfiguration;
}

/**
 * @public
 * <p>A grid layout to define the placement of sheet control.</p>
 */
export interface SheetControlLayout {
  /**
   * @public
   * <p>The configuration that determines the elements and canvas size options of sheet control.</p>
   */
  Configuration: SheetControlLayoutConfiguration | undefined;
}

/**
 * @public
 * <p>A text box.</p>
 */
export interface SheetTextBox {
  /**
   * @public
   * <p>The unique identifier for a text box. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have text boxes that share identifiers.</p>
   */
  SheetTextBoxId: string | undefined;

  /**
   * @public
   * <p>The content that is displayed in the text box.</p>
   */
  Content?: string;
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
 * @public
 * <p>The configuration of selected fields in the<code>CustomActionFilterOperation</code>.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface FilterOperationSelectedFieldsConfiguration {
  /**
   * @public
   * <p>Chooses the fields that are filtered in <code>CustomActionFilterOperation</code>.</p>
   */
  SelectedFields?: string[];

  /**
   * @public
   * <p>A structure that contains the options that choose which fields are filtered in the <code>CustomActionFilterOperation</code>.</p>
   *          <p>Valid values are defined as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALL_FIELDS</code>: Applies the filter operation to all fields.</p>
   *             </li>
   *          </ul>
   */
  SelectedFieldOptions?: SelectedFieldOptions | string;

  /**
   * @public
   * <p>The selected columns of a dataset.</p>
   */
  SelectedColumns?: ColumnIdentifier[];
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
 * @public
 * <p>The configuration of the same-sheet target visuals that you want to be filtered.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface SameSheetTargetVisualConfiguration {
  /**
   * @public
   * <p>A list of the target visual IDs that are located in the same sheet of the analysis.</p>
   */
  TargetVisuals?: string[];

  /**
   * @public
   * <p>The options that choose the target visual in the same sheet.</p>
   *          <p>Valid values are defined as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALL_VISUALS</code>: Applies the filter operation to all visuals in the same sheet.</p>
   *             </li>
   *          </ul>
   */
  TargetVisualOptions?: TargetVisualOptions | string;
}

/**
 * @public
 * <p>The configuration of target visuals that you want to be filtered.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface FilterOperationTargetVisualsConfiguration {
  /**
   * @public
   * <p>The configuration of the same-sheet target visuals that you want to be filtered.</p>
   */
  SameSheetTargetVisualConfiguration?: SameSheetTargetVisualConfiguration;
}

/**
 * @public
 * <p>The filter operation that filters data included in a visual or in an entire sheet.</p>
 */
export interface CustomActionFilterOperation {
  /**
   * @public
   * <p>The configuration that chooses the fields to be filtered.</p>
   */
  SelectedFieldsConfiguration: FilterOperationSelectedFieldsConfiguration | undefined;

  /**
   * @public
   * <p>The configuration that chooses the target visuals to be filtered.</p>
   */
  TargetVisualsConfiguration: FilterOperationTargetVisualsConfiguration | undefined;
}

/**
 * @public
 * <p>The navigation configuration for <code>CustomActionNavigationOperation</code>.</p>
 */
export interface LocalNavigationConfiguration {
  /**
   * @public
   * <p>The sheet that is targeted for navigation in the same analysis.</p>
   */
  TargetSheetId: string | undefined;
}

/**
 * @public
 * <p>The navigation operation that navigates between different sheets in the same analysis.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface CustomActionNavigationOperation {
  /**
   * @public
   * <p>The configuration that chooses the navigation target.</p>
   */
  LocalNavigationConfiguration?: LocalNavigationConfiguration;
}

/**
 * @public
 * <p>The customized parameter values.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface CustomParameterValues {
  /**
   * @public
   * <p>A list of string-type parameter values.</p>
   */
  StringValues?: string[];

  /**
   * @public
   * <p>A list of integer-type parameter values.</p>
   */
  IntegerValues?: number[];

  /**
   * @public
   * <p>A list of decimal-type parameter values.</p>
   */
  DecimalValues?: number[];

  /**
   * @public
   * <p>A list of datetime-type parameter values.</p>
   */
  DateTimeValues?: Date[];
}

/**
 * @public
 * <p>The configuration of custom values for the destination parameter in <code>DestinationParameterValueConfiguration</code>.</p>
 */
export interface CustomValuesConfiguration {
  /**
   * @public
   * <p>Includes the null value in custom action parameter values.</p>
   */
  IncludeNullValue?: boolean;

  /**
   * @public
   * <p>The customized parameter values.</p>
   *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
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
 * @public
 * <p>The configuration of destination parameter values.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface DestinationParameterValueConfiguration {
  /**
   * @public
   * <p>The configuration of custom values for destination parameter in <code>DestinationParameterValueConfiguration</code>.</p>
   */
  CustomValuesConfiguration?: CustomValuesConfiguration;

  /**
   * @public
   * <p>The configuration that selects all options.</p>
   */
  SelectAllValueOptions?: SelectAllValueOptions | string;

  /**
   * @public
   * <p>The source parameter name of the destination parameter.</p>
   */
  SourceParameterName?: string;

  /**
   * @public
   * <p>The source field ID of the destination parameter.</p>
   */
  SourceField?: string;

  /**
   * @public
   * <p>A column of a data set.</p>
   */
  SourceColumn?: ColumnIdentifier;
}

/**
 * @public
 * <p>The configuration of adding parameters in action.</p>
 */
export interface SetParameterValueConfiguration {
  /**
   * @public
   * <p>The destination parameter name of the <code>SetParameterValueConfiguration</code>.</p>
   */
  DestinationParameterName: string | undefined;

  /**
   * @public
   * <p>The configuration of destination parameter values.</p>
   *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
   */
  Value: DestinationParameterValueConfiguration | undefined;
}

/**
 * @public
 * <p>The set parameter operation that sets parameters in custom action.</p>
 */
export interface CustomActionSetParametersOperation {
  /**
   * @public
   * <p>The parameter that determines the value configuration.</p>
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
 * @public
 * <p>The URL operation that opens a link to another webpage.</p>
 */
export interface CustomActionURLOperation {
  /**
   * @public
   * <p>THe URL link of the <code>CustomActionURLOperation</code>.</p>
   */
  URLTemplate: string | undefined;

  /**
   * @public
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
   */
  URLTarget: URLTargetConfiguration | string | undefined;
}

/**
 * @public
 * <p>The operation that is defined by the custom action.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface VisualCustomActionOperation {
  /**
   * @public
   * <p>The filter operation that filters data included in a visual or in an entire sheet.</p>
   */
  FilterOperation?: CustomActionFilterOperation;

  /**
   * @public
   * <p>The navigation operation that navigates between different sheets in the same analysis.</p>
   */
  NavigationOperation?: CustomActionNavigationOperation;

  /**
   * @public
   * <p>The URL operation that opens a link to another webpage.</p>
   */
  URLOperation?: CustomActionURLOperation;

  /**
   * @public
   * <p>The set parameter operation that sets parameters in custom action.</p>
   */
  SetParametersOperation?: CustomActionSetParametersOperation;
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
 * @public
 * <p>A custom action defined on a visual.</p>
 */
export interface VisualCustomAction {
  /**
   * @public
   * <p>The ID of the <code>VisualCustomAction</code>.</p>
   */
  CustomActionId: string | undefined;

  /**
   * @public
   * <p>The name of the <code>VisualCustomAction</code>.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The status of the <code>VisualCustomAction</code>.</p>
   */
  Status?: WidgetStatus | string;

  /**
   * @public
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
   */
  Trigger: VisualCustomActionTrigger | string | undefined;

  /**
   * @public
   * <p>A list of <code>VisualCustomActionOperations</code>.</p>
   *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
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
 * @public
 * <p>The options that determine how a date axis is displayed.</p>
 */
export interface DateAxisOptions {
  /**
   * @public
   * <p>Determines whether or not missing dates are displayed.</p>
   */
  MissingDateVisibility?: Visibility | string;
}

/**
 * @public
 * <p>The options that are saved for future extension.</p>
 */
export interface AxisDisplayDataDrivenRange {}

/**
 * @public
 * <p>The minimum and maximum setup for an axis display range.</p>
 */
export interface AxisDisplayMinMaxRange {
  /**
   * @public
   * <p>The minimum setup for an axis display range.</p>
   */
  Minimum?: number;

  /**
   * @public
   * <p>The maximum setup for an axis display range.</p>
   */
  Maximum?: number;
}

/**
 * @public
 * <p>The range setup of a numeric axis display range.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface AxisDisplayRange {
  /**
   * @public
   * <p>The minimum and maximum setup of an axis display range.</p>
   */
  MinMax?: AxisDisplayMinMaxRange;

  /**
   * @public
   * <p>The data-driven setup of an axis display range.</p>
   */
  DataDriven?: AxisDisplayDataDrivenRange;
}

/**
 * @public
 * <p>The liner axis scale setup.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface AxisLinearScale {
  /**
   * @public
   * <p>The step count setup of a linear axis.</p>
   */
  StepCount?: number;

  /**
   * @public
   * <p>The step size setup of a linear axis.</p>
   */
  StepSize?: number;
}

/**
 * @public
 * <p>The logarithmic axis scale setup.</p>
 */
export interface AxisLogarithmicScale {
  /**
   * @public
   * <p>The base setup of a logarithmic axis scale.</p>
   */
  Base?: number;
}

/**
 * @public
 * <p>The scale setup
 *             options for a numeric axis display.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface AxisScale {
  /**
   * @public
   * <p>The linear axis scale setup.</p>
   */
  Linear?: AxisLinearScale;

  /**
   * @public
   * <p>The logarithmic axis scale setup.</p>
   */
  Logarithmic?: AxisLogarithmicScale;
}

/**
 * @public
 * <p>The options for an axis with a numeric field.</p>
 */
export interface NumericAxisOptions {
  /**
   * @public
   * <p>The scale setup of a numeric axis.</p>
   */
  Scale?: AxisScale;

  /**
   * @public
   * <p>The range setup of a numeric axis.</p>
   */
  Range?: AxisDisplayRange;
}

/**
 * @public
 * <p>The data options for an axis.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface AxisDataOptions {
  /**
   * @public
   * <p>The options for an axis with a numeric field.</p>
   */
  NumericAxisOptions?: NumericAxisOptions;

  /**
   * @public
   * <p>The options for an axis with a date field.</p>
   */
  DateAxisOptions?: DateAxisOptions;
}

/**
 * @public
 * <p>The percent range in the visible range.</p>
 */
export interface PercentVisibleRange {
  /**
   * @public
   * <p>The lower bound of the range.</p>
   */
  From?: number;

  /**
   * @public
   * <p>The top bound of the range.</p>
   */
  To?: number;
}

/**
 * @public
 * <p>The range options for the data zoom scroll bar.</p>
 */
export interface VisibleRangeOptions {
  /**
   * @public
   * <p>The percent range in the visible range.</p>
   */
  PercentRange?: PercentVisibleRange;
}

/**
 * @public
 * <p>The visual display options for a data zoom scroll bar.</p>
 */
export interface ScrollBarOptions {
  /**
   * @public
   * <p>The visibility of the data zoom scroll bar.</p>
   */
  Visibility?: Visibility | string;

  /**
   * @public
   * <p>The visibility range for the data zoom scroll bar.</p>
   */
  VisibleRange?: VisibleRangeOptions;
}

/**
 * @public
 * <p>The tick label options of an axis.</p>
 */
export interface AxisTickLabelOptions {
  /**
   * @public
   * <p>Determines whether or not the axis ticks are visible.</p>
   */
  LabelOptions?: LabelOptions;

  /**
   * @public
   * <p>The rotation angle of the axis tick labels.</p>
   */
  RotationAngle?: number;
}

/**
 * @public
 * <p>The display options for the axis label.</p>
 */
export interface AxisDisplayOptions {
  /**
   * @public
   * <p>The tick label options of an axis.</p>
   */
  TickLabelOptions?: AxisTickLabelOptions;

  /**
   * @public
   * <p>Determines whether or not the axis line is visible.</p>
   */
  AxisLineVisibility?: Visibility | string;

  /**
   * @public
   * <p>Determines whether or not the grid line is visible.</p>
   */
  GridLineVisibility?: Visibility | string;

  /**
   * @public
   * <p>The data options for an axis.</p>
   */
  DataOptions?: AxisDataOptions;

  /**
   * @public
   * <p>The scroll bar options for an axis.</p>
   */
  ScrollbarOptions?: ScrollBarOptions;

  /**
   * @public
   * <p>The offset value that determines the starting placement of the axis within a visual's bounds.</p>
   */
  AxisOffset?: string;
}

/**
 * @public
 * <p>The reference that specifies where the axis label is applied to.</p>
 */
export interface AxisLabelReferenceOptions {
  /**
   * @public
   * <p>The field that the axis label is targeted to.</p>
   */
  FieldId: string | undefined;

  /**
   * @public
   * <p>The column that the axis label is targeted to.</p>
   */
  Column: ColumnIdentifier | undefined;
}

/**
 * @public
 * <p>The label options for a chart axis. You must specify the field that the label is targeted to.</p>
 */
export interface AxisLabelOptions {
  /**
   * @public
   * <p>The font configuration of the axis label.</p>
   */
  FontConfiguration?: FontConfiguration;

  /**
   * @public
   * <p>The text for the axis label.</p>
   */
  CustomLabel?: string;

  /**
   * @public
   * <p>The options that indicate which field the label belongs to.</p>
   */
  ApplyTo?: AxisLabelReferenceOptions;
}

/**
 * @public
 * <p>The label options for an axis on a chart.</p>
 */
export interface ChartAxisLabelOptions {
  /**
   * @public
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
   */
  Visibility?: Visibility | string;

  /**
   * @public
   * <p>The visibility configuration of the sort icon on a chart's axis label.</p>
   */
  SortIconVisibility?: Visibility | string;

  /**
   * @public
   * <p>The label options for a chart axis.</p>
   */
  AxisLabelOptions?: AxisLabelOptions[];
}

/**
 * @public
 * <p>The contribution analysis visual display for a line, pie, or bar chart.</p>
 */
export interface ContributionAnalysisDefault {
  /**
   * @public
   * <p>The measure field that is used in the contribution analysis.</p>
   */
  MeasureFieldId: string | undefined;

  /**
   * @public
   * <p>The dimensions columns that are used in the contribution analysis,
   *             usually a list of <code>ColumnIdentifiers</code>.</p>
   */
  ContributorDimensions: ColumnIdentifier[] | undefined;
}

/**
 * @public
 * <p>The option that specifies individual data values for labels.</p>
 */
export interface DataPathLabelType {
  /**
   * @public
   * <p>The field ID of the field that the data label needs to be applied to.</p>
   */
  FieldId?: string;

  /**
   * @public
   * <p>The actual value of the field that is labeled.</p>
   */
  FieldValue?: string;

  /**
   * @public
   * <p>The visibility of the data label.</p>
   */
  Visibility?: Visibility | string;
}

/**
 * @public
 * <p>The field label type.</p>
 */
export interface FieldLabelType {
  /**
   * @public
   * <p>Indicates the field that is targeted by the field
   *             label.</p>
   */
  FieldId?: string;

  /**
   * @public
   * <p>The visibility of the field label.</p>
   */
  Visibility?: Visibility | string;
}

/**
 * @public
 * <p>The maximum label of a data path label.</p>
 */
export interface MaximumLabelType {
  /**
   * @public
   * <p>The visibility of the maximum label.</p>
   */
  Visibility?: Visibility | string;
}

/**
 * @public
 * <p>The minimum label of a data path label.</p>
 */
export interface MinimumLabelType {
  /**
   * @public
   * <p>The visibility of the minimum label.</p>
   */
  Visibility?: Visibility | string;
}

/**
 * @public
 * <p>The range ends label type of a data path label.</p>
 */
export interface RangeEndsLabelType {
  /**
   * @public
   * <p>The visibility of the range ends label.</p>
   */
  Visibility?: Visibility | string;
}

/**
 * @public
 * <p>The option that determines the data label type.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface DataLabelType {
  /**
   * @public
   * <p>Determines the label configuration for the entire field.</p>
   */
  FieldLabelType?: FieldLabelType;

  /**
   * @public
   * <p>The option that specifies individual data values for labels.</p>
   */
  DataPathLabelType?: DataPathLabelType;

  /**
   * @public
   * <p>Determines the label configuration for range end value in a visual.</p>
   */
  RangeEndsLabelType?: RangeEndsLabelType;

  /**
   * @public
   * <p>Determines the label configuration for the minimum value in a visual.</p>
   */
  MinimumLabelType?: MinimumLabelType;

  /**
   * @public
   * <p>Determines the label configuration for the maximum value in a visual.</p>
   */
  MaximumLabelType?: MaximumLabelType;
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
 * @public
 * <p>The options that determine the presentation of the data labels.</p>
 */
export interface DataLabelOptions {
  /**
   * @public
   * <p>Determines the visibility of the data labels.</p>
   */
  Visibility?: Visibility | string;

  /**
   * @public
   * <p>Determines the visibility of the category field labels.</p>
   */
  CategoryLabelVisibility?: Visibility | string;

  /**
   * @public
   * <p>Determines the visibility of the measure field labels.</p>
   */
  MeasureLabelVisibility?: Visibility | string;

  /**
   * @public
   * <p>The option that determines the data label type.</p>
   */
  DataLabelTypes?: DataLabelType[];

  /**
   * @public
   * <p>Determines the position of the data labels.</p>
   */
  Position?: DataLabelPosition | string;

  /**
   * @public
   * <p>Determines the content of the data labels.</p>
   */
  LabelContent?: DataLabelContent | string;

  /**
   * @public
   * <p>Determines the font configuration of the data labels.</p>
   */
  LabelFontConfiguration?: FontConfiguration;

  /**
   * @public
   * <p>Determines the color of the data labels.</p>
   */
  LabelColor?: string;

  /**
   * @public
   * <p>Determines whether overlap is enabled or disabled for the data labels.</p>
   */
  Overlap?: DataLabelOverlap | string;

  /**
   * @public
   * <p>Determines the visibility of the total.</p>
   */
  TotalsVisibility?: Visibility | string;
}

/**
 * @public
 * <p>The dimension type field with categorical type columns..</p>
 */
export interface CategoricalDimensionField {
  /**
   * @public
   * <p>The custom field ID.</p>
   */
  FieldId: string | undefined;

  /**
   * @public
   * <p>The column that is used in the <code>CategoricalDimensionField</code>.</p>
   */
  Column: ColumnIdentifier | undefined;

  /**
   * @public
   * <p>The custom hierarchy ID.</p>
   */
  HierarchyId?: string;

  /**
   * @public
   * <p>The format configuration of the field.</p>
   */
  FormatConfiguration?: StringFormatConfiguration;
}

/**
 * @public
 * <p>The dimension type field with date type columns.</p>
 */
export interface DateDimensionField {
  /**
   * @public
   * <p>The custom field ID.</p>
   */
  FieldId: string | undefined;

  /**
   * @public
   * <p>The column that is used in the <code>DateDimensionField</code>.</p>
   */
  Column: ColumnIdentifier | undefined;

  /**
   * @public
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
   */
  DateGranularity?: TimeGranularity | string;

  /**
   * @public
   * <p>The custom hierarchy ID.</p>
   */
  HierarchyId?: string;

  /**
   * @public
   * <p>The format configuration of the field.</p>
   */
  FormatConfiguration?: DateTimeFormatConfiguration;
}

/**
 * @public
 * <p>The dimension type field with numerical type columns.</p>
 */
export interface NumericalDimensionField {
  /**
   * @public
   * <p>The custom field ID.</p>
   */
  FieldId: string | undefined;

  /**
   * @public
   * <p>The column that is used in the <code>NumericalDimensionField</code>.</p>
   */
  Column: ColumnIdentifier | undefined;

  /**
   * @public
   * <p>The custom hierarchy ID.</p>
   */
  HierarchyId?: string;

  /**
   * @public
   * <p>The format configuration of the field.</p>
   */
  FormatConfiguration?: NumberFormatConfiguration;
}

/**
 * @public
 * <p>The dimension type field.</p>
 */
export interface DimensionField {
  /**
   * @public
   * <p>The dimension type field with numerical type columns.</p>
   */
  NumericalDimensionField?: NumericalDimensionField;

  /**
   * @public
   * <p>The dimension type field with categorical type columns.</p>
   */
  CategoricalDimensionField?: CategoricalDimensionField;

  /**
   * @public
   * <p>The dimension type field with date type columns.</p>
   */
  DateDimensionField?: DateDimensionField;
}

/**
 * @public
 * <p>The table calculation measure field for pivot tables.</p>
 */
export interface CalculatedMeasureField {
  /**
   * @public
   * <p>The custom field ID.</p>
   */
  FieldId: string | undefined;

  /**
   * @public
   * <p>The expression in the table calculation.</p>
   */
  Expression: string | undefined;
}

/**
 * @public
 * <p>The measure type field with categorical type columns.</p>
 */
export interface CategoricalMeasureField {
  /**
   * @public
   * <p>The custom field ID.</p>
   */
  FieldId: string | undefined;

  /**
   * @public
   * <p>The column that is used in the <code>CategoricalMeasureField</code>.</p>
   */
  Column: ColumnIdentifier | undefined;

  /**
   * @public
   * <p>The aggregation function of the measure field.</p>
   */
  AggregationFunction?: CategoricalAggregationFunction | string;

  /**
   * @public
   * <p>The format configuration of the field.</p>
   */
  FormatConfiguration?: StringFormatConfiguration;
}

/**
 * @public
 * <p>The measure type field with date type columns.</p>
 */
export interface DateMeasureField {
  /**
   * @public
   * <p>The custom field ID.</p>
   */
  FieldId: string | undefined;

  /**
   * @public
   * <p>The column that is used in the <code>DateMeasureField</code>.</p>
   */
  Column: ColumnIdentifier | undefined;

  /**
   * @public
   * <p>The aggregation function of the measure field.</p>
   */
  AggregationFunction?: DateAggregationFunction | string;

  /**
   * @public
   * <p>The format configuration of the field.</p>
   */
  FormatConfiguration?: DateTimeFormatConfiguration;
}

/**
 * @public
 * <p>The measure type field with numerical type columns.</p>
 */
export interface NumericalMeasureField {
  /**
   * @public
   * <p>The custom field ID.</p>
   */
  FieldId: string | undefined;

  /**
   * @public
   * <p>The column that is used in the <code>NumericalMeasureField</code>.</p>
   */
  Column: ColumnIdentifier | undefined;

  /**
   * @public
   * <p>The aggregation function of the measure field.</p>
   */
  AggregationFunction?: NumericalAggregationFunction;

  /**
   * @public
   * <p>The format configuration of the field.</p>
   */
  FormatConfiguration?: NumberFormatConfiguration;
}

/**
 * @public
 * <p>The measure (metric) type field.</p>
 */
export interface MeasureField {
  /**
   * @public
   * <p>The measure type field with numerical type columns.</p>
   */
  NumericalMeasureField?: NumericalMeasureField;

  /**
   * @public
   * <p>The measure type field with categorical type columns.</p>
   */
  CategoricalMeasureField?: CategoricalMeasureField;

  /**
   * @public
   * <p>The measure type field with date type columns.</p>
   */
  DateMeasureField?: DateMeasureField;

  /**
   * @public
   * <p>The calculated measure field only used in pivot tables.</p>
   */
  CalculatedMeasureField?: CalculatedMeasureField;
}

/**
 * @public
 * <p>The aggregated field wells of a bar chart.</p>
 */
export interface BarChartAggregatedFieldWells {
  /**
   * @public
   * <p>The category (y-axis) field well of a bar chart.</p>
   */
  Category?: DimensionField[];

  /**
   * @public
   * <p>The value field wells of a bar chart. Values are aggregated by
   *             category.</p>
   */
  Values?: MeasureField[];

  /**
   * @public
   * <p>The color (group/color) field well of a bar chart.</p>
   */
  Colors?: DimensionField[];

  /**
   * @public
   * <p>The small multiples field well of a bar chart.</p>
   */
  SmallMultiples?: DimensionField[];
}

/**
 * @public
 * <p>The field wells of a <code>BarChartVisual</code>.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface BarChartFieldWells {
  /**
   * @public
   * <p>The aggregated field wells of a bar chart.</p>
   */
  BarChartAggregatedFieldWells?: BarChartAggregatedFieldWells;
}

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
 * <p>The options for the legend setup of a visual.</p>
 */
export interface LegendOptions {
  /**
   * @public
   * <p>Determines whether or not the legend is visible.</p>
   */
  Visibility?: Visibility | string;

  /**
   * @public
   * <p>The custom title for the legend.</p>
   */
  Title?: LabelOptions;

  /**
   * @public
   * <p>The positions for the legend. Choose one of the following
   *             options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AUTO</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RIGHT</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BOTTOM</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LEFT</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Position?: LegendPosition | string;

  /**
   * @public
   * <p>The width of the legend. If this value is omitted, a default width is used when rendering.</p>
   */
  Width?: string;

  /**
   * @public
   * <p>The height of the legend. If this value is omitted, a default height is used when
   *             rendering.</p>
   */
  Height?: string;
}

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
 * <p>The dynamic configuration of the reference line data configuration.</p>
 */
export interface ReferenceLineDynamicDataConfiguration {
  /**
   * @public
   * <p>The column that the dynamic data targets.</p>
   */
  Column: ColumnIdentifier | undefined;

  /**
   * @public
   * <p>The aggregation function that is used in the dynamic data.</p>
   */
  MeasureAggregationFunction?: AggregationFunction;

  /**
   * @public
   * <p>The calculation that is used in the dynamic data.</p>
   */
  Calculation: NumericalAggregationFunction | undefined;
}

/**
 * @public
 * <p>The static data configuration of the reference line data configuration.</p>
 */
export interface ReferenceLineStaticDataConfiguration {
  /**
   * @public
   * <p>The double input of the static data.</p>
   */
  Value: number | undefined;
}

/**
 * @public
 * <p>The data configuration of the reference line.</p>
 */
export interface ReferenceLineDataConfiguration {
  /**
   * @public
   * <p>The static data configuration of the reference line data
   *             configuration.</p>
   */
  StaticConfiguration?: ReferenceLineStaticDataConfiguration;

  /**
   * @public
   * <p>The dynamic configuration of the reference line data configuration.</p>
   */
  DynamicConfiguration?: ReferenceLineDynamicDataConfiguration;

  /**
   * @public
   * <p>The axis binding type of the reference line. Choose one of the following options:</p>
   *          <ul>
   *             <li>
   *                <p>PrimaryY</p>
   *             </li>
   *             <li>
   *                <p>SecondaryY</p>
   *             </li>
   *          </ul>
   */
  AxisBinding?: AxisBinding | string;
}

/**
 * @public
 * <p>The configuration for a custom label on a <code>ReferenceLine</code>.</p>
 */
export interface ReferenceLineCustomLabelConfiguration {
  /**
   * @public
   * <p>The string text of the custom label.</p>
   */
  CustomLabel: string | undefined;
}

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
 * <p>The value label configuration of the label in a reference line.</p>
 */
export interface ReferenceLineValueLabelConfiguration {
  /**
   * @public
   * <p>The relative position of the value label. Choose one of the following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BEFORE_CUSTOM_LABEL</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AFTER_CUSTOM_LABEL</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  RelativePosition?: ReferenceLineValueLabelRelativePosition | string;

  /**
   * @public
   * <p>The format configuration of the value label.</p>
   */
  FormatConfiguration?: NumericFormatConfiguration;
}

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
 * <p>The label configuration of a reference line.</p>
 */
export interface ReferenceLineLabelConfiguration {
  /**
   * @public
   * <p>The value label configuration of the label in a reference line.</p>
   */
  ValueLabelConfiguration?: ReferenceLineValueLabelConfiguration;

  /**
   * @public
   * <p>The custom label configuration of the label in a reference line.</p>
   */
  CustomLabelConfiguration?: ReferenceLineCustomLabelConfiguration;

  /**
   * @public
   * <p>The font configuration of the label in a reference line.</p>
   */
  FontConfiguration?: FontConfiguration;

  /**
   * @public
   * <p>The font color configuration of the label in a reference line.</p>
   */
  FontColor?: string;

  /**
   * @public
   * <p>The horizontal position configuration of the label in a reference line. Choose one of
   *             the following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>LEFT</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CENTER</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RIGHT</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  HorizontalPosition?: ReferenceLineLabelHorizontalPosition | string;

  /**
   * @public
   * <p>The vertical position configuration of the label in a reference line. Choose one of the following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ABOVE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BELOW</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VerticalPosition?: ReferenceLineLabelVerticalPosition | string;
}

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
 * <p>The style configuration of the reference
 *             line.</p>
 */
export interface ReferenceLineStyleConfiguration {
  /**
   * @public
   * <p>The pattern type of the line style. Choose one of the following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SOLID</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DASHED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DOTTED</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Pattern?: ReferenceLinePatternType | string;

  /**
   * @public
   * <p>The hex color of the reference line.</p>
   */
  Color?: string;
}

/**
 * @public
 * <p>The reference line visual display options.</p>
 */
export interface ReferenceLine {
  /**
   * @public
   * <p>The status of the reference line. Choose one of the following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLE</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Status?: WidgetStatus | string;

  /**
   * @public
   * <p>The data configuration of the reference line.</p>
   */
  DataConfiguration: ReferenceLineDataConfiguration | undefined;

  /**
   * @public
   * <p>The style configuration of the reference line.</p>
   */
  StyleConfiguration?: ReferenceLineStyleConfiguration;

  /**
   * @public
   * <p>The label configuration of the reference line.</p>
   */
  LabelConfiguration?: ReferenceLineLabelConfiguration;
}

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
 * <p>The options that determine the title styles for each small multiples
 *             panel.</p>
 */
export interface PanelTitleOptions {
  /**
   * @public
   * <p>Determines whether or not panel titles are displayed.</p>
   */
  Visibility?: Visibility | string;

  /**
   * @public
   * <p>Configures the display properties of the given text.</p>
   */
  FontConfiguration?: FontConfiguration;

  /**
   * @public
   * <p>Sets the horizontal text alignment of the title within each panel.</p>
   */
  HorizontalTextAlignment?: HorizontalTextAlignment | string;
}

/**
 * @public
 * <p>A collection of options that configure how each panel displays in a small multiples chart.</p>
 */
export interface PanelConfiguration {
  /**
   * @public
   * <p>Configures the title display within each small multiples panel.</p>
   */
  Title?: PanelTitleOptions;

  /**
   * @public
   * <p>Determines whether or not each panel displays a border.</p>
   */
  BorderVisibility?: Visibility | string;

  /**
   * @public
   * <p>Sets the line thickness of panel borders.</p>
   */
  BorderThickness?: string;

  /**
   * @public
   * <p>Sets the line style of panel borders.</p>
   */
  BorderStyle?: PanelBorderStyle | string;

  /**
   * @public
   * <p>Sets the line color of panel borders.</p>
   */
  BorderColor?: string;

  /**
   * @public
   * <p>Determines whether or not negative space between sibling panels is rendered.</p>
   */
  GutterVisibility?: Visibility | string;

  /**
   * @public
   * <p>Sets the total amount of negative space to display between sibling panels.</p>
   */
  GutterSpacing?: string;

  /**
   * @public
   * <p>Determines whether or not a background for each small multiples panel is rendered.</p>
   */
  BackgroundVisibility?: Visibility | string;

  /**
   * @public
   * <p>Sets the background color for each panel.</p>
   */
  BackgroundColor?: string;
}

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
 * <p>Configures the properties of a chart's axes that are used by small multiples panels.</p>
 */
export interface SmallMultiplesAxisProperties {
  /**
   * @public
   * <p>Determines whether scale of the axes are shared or independent. The default value is <code>SHARED</code>.</p>
   */
  Scale?: SmallMultiplesAxisScale | string;

  /**
   * @public
   * <p>Defines the placement of the axis. By default, axes are rendered <code>OUTSIDE</code> of the panels. Axes with <code>INDEPENDENT</code> scale are rendered <code>INSIDE</code> the panels.</p>
   */
  Placement?: SmallMultiplesAxisPlacement | string;
}

/**
 * @public
 * <p>Options that determine the layout and display options of a chart's small multiples.</p>
 */
export interface SmallMultiplesOptions {
  /**
   * @public
   * <p>Sets the maximum number of visible rows to display in the grid of small multiples panels.</p>
   *          <p>The default value is <code>Auto</code>,
   *             which automatically adjusts the rows in the grid
   *             to fit the overall layout and size of the given chart.</p>
   */
  MaxVisibleRows?: number;

  /**
   * @public
   * <p>Sets the maximum number of visible columns to display in the grid of small multiples panels.</p>
   *          <p>The default is <code>Auto</code>, which automatically adjusts the columns in the grid to fit the overall layout and size of the given chart.</p>
   */
  MaxVisibleColumns?: number;

  /**
   * @public
   * <p>Configures the display options for each small multiples panel.</p>
   */
  PanelConfiguration?: PanelConfiguration;

  /**
   * @public
   * <p>The properties of a small multiples X axis.</p>
   */
  XAxis?: SmallMultiplesAxisProperties;

  /**
   * @public
   * <p>The properties of a small multiples Y axis.</p>
   */
  YAxis?: SmallMultiplesAxisProperties;
}

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
 * <p>The limit configuration of the visual display for an axis.</p>
 */
export interface ItemsLimitConfiguration {
  /**
   * @public
   * <p>The limit on how many items of a field are showed in the chart. For
   *             example, the number of slices that are displayed in a pie chart.</p>
   */
  ItemsLimit?: number;

  /**
   * @public
   * <p>The <code>Show
   *                 other</code> of an axis in the chart. Choose one of the following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INCLUDE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EXCLUDE</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  OtherCategories?: OtherCategories | string;
}

/**
 * @public
 * <p>The sort configuration for a column that is not used in a field well.</p>
 */
export interface ColumnSort {
  /**
   * @public
   * <p>A column of a data set.</p>
   */
  SortBy: ColumnIdentifier | undefined;

  /**
   * @public
   * <p>The sort direction.</p>
   */
  Direction: SortDirection | string | undefined;

  /**
   * @public
   * <p>The aggregation function that is defined in the column sort.</p>
   */
  AggregationFunction?: AggregationFunction;
}

/**
 * @public
 * <p>The sort configuration for a field in a
 *             field well.</p>
 */
export interface FieldSort {
  /**
   * @public
   * <p>The sort configuration target field.</p>
   */
  FieldId: string | undefined;

  /**
   * @public
   * <p>The sort direction. Choose one of the following
   *             options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ASC</code>: Ascending</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DESC</code>: Descending</p>
   *             </li>
   *          </ul>
   */
  Direction: SortDirection | string | undefined;
}

/**
 * @public
 * <p>The field sort options in a chart configuration.</p>
 */
export interface FieldSortOptions {
  /**
   * @public
   * <p>The sort configuration for a field in a field well.</p>
   */
  FieldSort?: FieldSort;

  /**
   * @public
   * <p>The sort configuration for a column that is not used in a field well.</p>
   */
  ColumnSort?: ColumnSort;
}

/**
 * @public
 * <p>sort-configuration-description</p>
 */
export interface BarChartSortConfiguration {
  /**
   * @public
   * <p>The sort configuration of category fields.</p>
   */
  CategorySort?: FieldSortOptions[];

  /**
   * @public
   * <p>The limit on the number of categories displayed in a bar chart.</p>
   */
  CategoryItemsLimit?: ItemsLimitConfiguration;

  /**
   * @public
   * <p>The sort configuration of color fields in a bar chart.</p>
   */
  ColorSort?: FieldSortOptions[];

  /**
   * @public
   * <p>The limit on the number of values displayed in a bar chart.</p>
   */
  ColorItemsLimit?: ItemsLimitConfiguration;

  /**
   * @public
   * <p>The sort configuration of the small multiples field.</p>
   */
  SmallMultiplesSort?: FieldSortOptions[];

  /**
   * @public
   * <p>The limit on the number of small multiples panels that are displayed.</p>
   */
  SmallMultiplesLimitConfiguration?: ItemsLimitConfiguration;
}

/**
 * @public
 * <p>The tooltip item for the columns that are not part of a field well.</p>
 */
export interface ColumnTooltipItem {
  /**
   * @public
   * <p>The target column of the tooltip item.</p>
   */
  Column: ColumnIdentifier | undefined;

  /**
   * @public
   * <p>The label of the tooltip item.</p>
   */
  Label?: string;

  /**
   * @public
   * <p>The visibility of the tooltip item.</p>
   */
  Visibility?: Visibility | string;

  /**
   * @public
   * <p>The aggregation function of the column tooltip item.</p>
   */
  Aggregation?: AggregationFunction;
}

/**
 * @public
 * <p>The tooltip item for the fields.</p>
 */
export interface FieldTooltipItem {
  /**
   * @public
   * <p>The unique ID of the field that is targeted by the tooltip.</p>
   */
  FieldId: string | undefined;

  /**
   * @public
   * <p>The label of the tooltip item.</p>
   */
  Label?: string;

  /**
   * @public
   * <p>The visibility of the tooltip item.</p>
   */
  Visibility?: Visibility | string;
}

/**
 * @public
 * <p>The tooltip.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface TooltipItem {
  /**
   * @public
   * <p>The tooltip item for the fields.</p>
   */
  FieldTooltipItem?: FieldTooltipItem;

  /**
   * @public
   * <p>The tooltip item for the columns that are not part of a field well.</p>
   */
  ColumnTooltipItem?: ColumnTooltipItem;
}

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
 * <p>The setup for the detailed tooltip.</p>
 */
export interface FieldBasedTooltip {
  /**
   * @public
   * <p>The visibility of <code>Show aggregations</code>.</p>
   */
  AggregationVisibility?: Visibility | string;

  /**
   * @public
   * <p>The type for the >tooltip title. Choose one of the following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NONE</code>: Doesn't use the primary value as the title.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PRIMARY_VALUE</code>: Uses primary value as the title.</p>
   *             </li>
   *          </ul>
   */
  TooltipTitleType?: TooltipTitleType | string;

  /**
   * @public
   * <p>The fields configuration in the
   *             tooltip.</p>
   */
  TooltipFields?: TooltipItem[];
}

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
 * <p>The display options for the visual tooltip.</p>
 */
export interface TooltipOptions {
  /**
   * @public
   * <p>Determines whether or not the tooltip is visible.</p>
   */
  TooltipVisibility?: Visibility | string;

  /**
   * @public
   * <p>The selected type for the tooltip. Choose one of the following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BASIC</code>: A basic tooltip.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DETAILED</code>: A detailed tooltip.</p>
   *             </li>
   *          </ul>
   */
  SelectedTooltipType?: SelectedTooltipType | string;

  /**
   * @public
   * <p>The setup for the detailed tooltip. The tooltip setup is always saved. The display type is decided based on the tooltip type.</p>
   */
  FieldBasedTooltip?: FieldBasedTooltip;
}

/**
 * @public
 * <p>The data path that needs to be sorted.</p>
 */
export interface DataPathValue {
  /**
   * @public
   * <p>The field ID of the field that needs to be sorted.</p>
   */
  FieldId: string | undefined;

  /**
   * @public
   * <p>The actual value of the field that needs to be sorted.</p>
   */
  FieldValue: string | undefined;
}

/**
 * @public
 * <p>The color map that determines the color options for a particular element.</p>
 */
export interface DataPathColor {
  /**
   * @public
   * <p>The element that the color needs to be applied to.</p>
   */
  Element: DataPathValue | undefined;

  /**
   * @public
   * <p>The color that needs to be applied to the element.</p>
   */
  Color: string | undefined;

  /**
   * @public
   * <p>The time granularity of the field that the color needs to be applied to.</p>
   */
  TimeGranularity?: TimeGranularity | string;
}

/**
 * @public
 * <p>The visual display options for the visual palette.</p>
 */
export interface VisualPalette {
  /**
   * @public
   * <p>The chart color options for the visual palette.</p>
   */
  ChartColor?: string;

  /**
   * @public
   * <p>The color map options for the visual palette.</p>
   */
  ColorMap?: DataPathColor[];
}

/**
 * @public
 * <p>The configuration of a <code>BarChartVisual</code>.</p>
 */
export interface BarChartConfiguration {
  /**
   * @public
   * <p>The field wells of the visual.</p>
   */
  FieldWells?: BarChartFieldWells;

  /**
   * @public
   * <p>The sort configuration of a <code>BarChartVisual</code>.</p>
   */
  SortConfiguration?: BarChartSortConfiguration;

  /**
   * @public
   * <p>The orientation of the bars in a bar chart visual. There are two valid values in this structure:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>HORIZONTAL</code>: Used for charts that have horizontal bars. Visuals that use this value are horizontal bar charts, horizontal stacked bar charts, and horizontal stacked 100% bar charts.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VERTICAL</code>: Used for charts that have vertical bars. Visuals that use this value are vertical bar charts, vertical stacked bar charts, and vertical stacked 100% bar charts.</p>
   *             </li>
   *          </ul>
   */
  Orientation?: BarChartOrientation | string;

  /**
   * @public
   * <p>Determines the arrangement of the bars. The orientation and arrangement of bars determine the type of bar that is used in the visual.</p>
   */
  BarsArrangement?: BarsArrangement | string;

  /**
   * @public
   * <p>The palette (chart color) display setup of the visual.</p>
   */
  VisualPalette?: VisualPalette;

  /**
   * @public
   * <p>The small multiples setup for the visual.</p>
   */
  SmallMultiplesOptions?: SmallMultiplesOptions;

  /**
   * @public
   * <p>The label display options (grid line, range, scale, axis step) for bar chart category.</p>
   */
  CategoryAxis?: AxisDisplayOptions;

  /**
   * @public
   * <p>The label options (label text, label visibility and sort icon visibility) for a bar chart.</p>
   */
  CategoryLabelOptions?: ChartAxisLabelOptions;

  /**
   * @public
   * <p>The label display options (grid line, range, scale, axis step) for a bar chart value.</p>
   */
  ValueAxis?: AxisDisplayOptions;

  /**
   * @public
   * <p>The label options (label text, label visibility and sort icon visibility) for a bar chart value.</p>
   */
  ValueLabelOptions?: ChartAxisLabelOptions;

  /**
   * @public
   * <p>The label options (label text, label visibility and sort icon visibility) for a color that is used in a bar chart.</p>
   */
  ColorLabelOptions?: ChartAxisLabelOptions;

  /**
   * @public
   * <p>The legend display setup of the visual.</p>
   */
  Legend?: LegendOptions;

  /**
   * @public
   * <p>The options that determine if visual data labels are displayed.</p>
   */
  DataLabels?: DataLabelOptions;

  /**
   * @public
   * <p>The tooltip display setup of the visual.</p>
   */
  Tooltip?: TooltipOptions;

  /**
   * @public
   * <p>The reference line setup of the visual.</p>
   */
  ReferenceLines?: ReferenceLine[];

  /**
   * @public
   * <p>The contribution analysis (anomaly configuration) setup of the visual.</p>
   */
  ContributionAnalysisDefaults?: ContributionAnalysisDefault[];
}

/**
 * @public
 * <p>The numeric equality type drill down filter.</p>
 */
export interface CategoryDrillDownFilter {
  /**
   * @public
   * <p>The column that the filter is applied to.</p>
   */
  Column: ColumnIdentifier | undefined;

  /**
   * @public
   * <p>A list of the string inputs that are the values of the category drill down filter.</p>
   */
  CategoryValues: string[] | undefined;
}

/**
 * @public
 * <p>The category drill down filter.</p>
 */
export interface NumericEqualityDrillDownFilter {
  /**
   * @public
   * <p>The column that the filter is applied to.</p>
   */
  Column: ColumnIdentifier | undefined;

  /**
   * @public
   * <p>The value of the double input numeric drill down filter.</p>
   */
  Value: number | undefined;
}

/**
 * @public
 * <p>The time range drill down filter.</p>
 */
export interface TimeRangeDrillDownFilter {
  /**
   * @public
   * <p>The column that the filter is applied to.</p>
   */
  Column: ColumnIdentifier | undefined;

  /**
   * @public
   * <p>The minimum value for the filter value range.</p>
   */
  RangeMinimum: Date | undefined;

  /**
   * @public
   * <p>The maximum value for the filter value range.</p>
   */
  RangeMaximum: Date | undefined;

  /**
   * @public
   * <p>The level of time precision that is used to aggregate <code>DateTime</code> values.</p>
   */
  TimeGranularity: TimeGranularity | string | undefined;
}

/**
 * @public
 * <p>The drill down filter for the column hierarchies.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface DrillDownFilter {
  /**
   * @public
   * <p>The numeric equality type drill down filter. This filter is used for number type columns.</p>
   */
  NumericEqualityFilter?: NumericEqualityDrillDownFilter;

  /**
   * @public
   * <p>The category type drill down filter. This filter is used for string type columns.</p>
   */
  CategoryFilter?: CategoryDrillDownFilter;

  /**
   * @public
   * <p>The time range drill down filter. This filter is used for date time columns.</p>
   */
  TimeRangeFilter?: TimeRangeDrillDownFilter;
}

/**
 * @public
 * <p>The option that determines the hierarchy of any <code>DateTime</code> fields.</p>
 */
export interface DateTimeHierarchy {
  /**
   * @public
   * <p>The hierarchy ID of the <code>DateTime</code> hierarchy.</p>
   */
  HierarchyId: string | undefined;

  /**
   * @public
   * <p>The option that determines the drill down filters for the
   *                 <code>DateTime</code> hierarchy.</p>
   */
  DrillDownFilters?: DrillDownFilter[];
}

/**
 * @public
 * <p>The option that determines the hierarchy of the fields that are built within a visual's field wells. These fields can't be duplicated to other visuals.</p>
 */
export interface ExplicitHierarchy {
  /**
   * @public
   * <p>The hierarchy ID of the explicit hierarchy.</p>
   */
  HierarchyId: string | undefined;

  /**
   * @public
   * <p>The list of columns that define the explicit hierarchy.</p>
   */
  Columns: ColumnIdentifier[] | undefined;

  /**
   * @public
   * <p>The option that determines the drill down filters for the explicit hierarchy.</p>
   */
  DrillDownFilters?: DrillDownFilter[];
}

/**
 * @public
 * <p>The option that determines the hierarchy of the fields that are defined during data preparation. These fields are available to use in any analysis that uses the data source.</p>
 */
export interface PredefinedHierarchy {
  /**
   * @public
   * <p>The hierarchy ID of the predefined hierarchy.</p>
   */
  HierarchyId: string | undefined;

  /**
   * @public
   * <p>The list of columns that define the predefined hierarchy.</p>
   */
  Columns: ColumnIdentifier[] | undefined;

  /**
   * @public
   * <p>The option that determines the drill down filters for the predefined hierarchy.</p>
   */
  DrillDownFilters?: DrillDownFilter[];
}

/**
 * @public
 * <p>The option that determines the hierarchy of the fields for a visual element.</p>
 */
export interface ColumnHierarchy {
  /**
   * @public
   * <p>The option that determines the hierarchy of the fields that are built within a visual's field wells. These fields can't be duplicated to other visuals.</p>
   */
  ExplicitHierarchy?: ExplicitHierarchy;

  /**
   * @public
   * <p>The option that determines the hierarchy of any <code>DateTime</code> fields.</p>
   */
  DateTimeHierarchy?: DateTimeHierarchy;

  /**
   * @public
   * <p>The option that determines the hierarchy of the fields that are defined during data preparation. These fields are available to use in any analysis that uses the data source.</p>
   */
  PredefinedHierarchy?: PredefinedHierarchy;
}

/**
 * @public
 * <p>The text format for a subtitle.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface LongFormatText {
  /**
   * @public
   * <p>Plain text format.</p>
   */
  PlainText?: string;

  /**
   * @public
   * <p>Rich text. Examples of rich text include bold, underline, and italics.</p>
   */
  RichText?: string;
}

/**
 * @public
 * <p>The subtitle label options for a visual.</p>
 */
export interface VisualSubtitleLabelOptions {
  /**
   * @public
   * <p>The visibility of the subtitle label.</p>
   */
  Visibility?: Visibility | string;

  /**
   * @public
   * <p>The long text format of the subtitle label, such as plain text or rich text.</p>
   */
  FormatText?: LongFormatText;
}

/**
 * @public
 * <p>The text format for the title.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface ShortFormatText {
  /**
   * @public
   * <p>Plain text format.</p>
   */
  PlainText?: string;

  /**
   * @public
   * <p>Rich text. Examples of rich text include bold, underline, and italics.</p>
   */
  RichText?: string;
}

/**
 * @public
 * <p>The title label options for a visual.</p>
 */
export interface VisualTitleLabelOptions {
  /**
   * @public
   * <p>The visibility of the title label.</p>
   */
  Visibility?: Visibility | string;

  /**
   * @public
   * <p>The short text format of the title label, such as plain text or rich text.</p>
   */
  FormatText?: ShortFormatText;
}

/**
 * @public
 * <p>A bar chart.</p>
 *          <p>The <code>BarChartVisual</code> structure describes a visual that is a member of the bar chart family. The following charts can be described using this structure:</p>
 *          <ul>
 *             <li>
 *                <p>Horizontal bar chart</p>
 *             </li>
 *             <li>
 *                <p>Vertical bar chart</p>
 *             </li>
 *             <li>
 *                <p>Horizontal stacked bar chart</p>
 *             </li>
 *             <li>
 *                <p>Vertical stacked bar chart</p>
 *             </li>
 *             <li>
 *                <p>Horizontal stacked 100% bar chart</p>
 *             </li>
 *             <li>
 *                <p>Vertical stacked 100% bar chart</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/bar-charts.html">Using bar charts</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 */
export interface BarChartVisual {
  /**
   * @public
   * <p>The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.</p>
   */
  VisualId: string | undefined;

  /**
   * @public
   * <p>The title that is displayed on the visual.</p>
   */
  Title?: VisualTitleLabelOptions;

  /**
   * @public
   * <p>The subtitle that is displayed on the visual.</p>
   */
  Subtitle?: VisualSubtitleLabelOptions;

  /**
   * @public
   * <p>The configuration settings of the visual.</p>
   */
  ChartConfiguration?: BarChartConfiguration;

  /**
   * @public
   * <p>The list of custom actions that are configured for a visual.</p>
   */
  Actions?: VisualCustomAction[];

  /**
   * @public
   * <p>The column hierarchy that is used during drill-downs and drill-ups.</p>
   */
  ColumnHierarchies?: ColumnHierarchy[];
}

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
 * <p>The style options of the box plot.</p>
 */
export interface BoxPlotStyleOptions {
  /**
   * @public
   * <p>The fill styles (solid, transparent) of the box plot.</p>
   */
  FillStyle?: BoxPlotFillStyle | string;
}

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

/**
 * @internal
 */
export const ReferenceLineStaticDataConfigurationFilterSensitiveLog = (
  obj: ReferenceLineStaticDataConfiguration
): any => ({
  ...obj,
  ...(obj.Value && { Value: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ReferenceLineDataConfigurationFilterSensitiveLog = (obj: ReferenceLineDataConfiguration): any => ({
  ...obj,
  ...(obj.StaticConfiguration && {
    StaticConfiguration: ReferenceLineStaticDataConfigurationFilterSensitiveLog(obj.StaticConfiguration),
  }),
});

/**
 * @internal
 */
export const ReferenceLineValueLabelConfigurationFilterSensitiveLog = (
  obj: ReferenceLineValueLabelConfiguration
): any => ({
  ...obj,
  ...(obj.FormatConfiguration && {
    FormatConfiguration: NumericFormatConfigurationFilterSensitiveLog(obj.FormatConfiguration),
  }),
});

/**
 * @internal
 */
export const ReferenceLineLabelConfigurationFilterSensitiveLog = (obj: ReferenceLineLabelConfiguration): any => ({
  ...obj,
  ...(obj.ValueLabelConfiguration && {
    ValueLabelConfiguration: ReferenceLineValueLabelConfigurationFilterSensitiveLog(obj.ValueLabelConfiguration),
  }),
});

/**
 * @internal
 */
export const ReferenceLineFilterSensitiveLog = (obj: ReferenceLine): any => ({
  ...obj,
  ...(obj.DataConfiguration && {
    DataConfiguration: ReferenceLineDataConfigurationFilterSensitiveLog(obj.DataConfiguration),
  }),
  ...(obj.LabelConfiguration && {
    LabelConfiguration: ReferenceLineLabelConfigurationFilterSensitiveLog(obj.LabelConfiguration),
  }),
});

/**
 * @internal
 */
export const DataPathValueFilterSensitiveLog = (obj: DataPathValue): any => ({
  ...obj,
  ...(obj.FieldValue && { FieldValue: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DataPathColorFilterSensitiveLog = (obj: DataPathColor): any => ({
  ...obj,
  ...(obj.Element && { Element: DataPathValueFilterSensitiveLog(obj.Element) }),
});

/**
 * @internal
 */
export const VisualPaletteFilterSensitiveLog = (obj: VisualPalette): any => ({
  ...obj,
  ...(obj.ColorMap && { ColorMap: obj.ColorMap.map((item) => DataPathColorFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const BarChartConfigurationFilterSensitiveLog = (obj: BarChartConfiguration): any => ({
  ...obj,
  ...(obj.VisualPalette && { VisualPalette: VisualPaletteFilterSensitiveLog(obj.VisualPalette) }),
  ...(obj.DataLabels && { DataLabels: DataLabelOptionsFilterSensitiveLog(obj.DataLabels) }),
  ...(obj.ReferenceLines && {
    ReferenceLines: obj.ReferenceLines.map((item) => ReferenceLineFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const BarChartVisualFilterSensitiveLog = (obj: BarChartVisual): any => ({
  ...obj,
});
