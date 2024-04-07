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
  Message?: string;
  /**
   * <p>The Amazon Web Services request ID for this request.</p>
   * @public
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
 * <p>The Amazon QuickSight customizations associated with your Amazon Web Services account or a QuickSight namespace in a specific Amazon Web Services Region.</p>
 * @public
 */
export interface AccountCustomization {
  /**
   * <p>The default theme for this Amazon QuickSight subscription.</p>
   * @public
   */
  DefaultTheme?: string;

  /**
   * <p>The default email customization template.</p>
   * @public
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
  AccountName?: string;

  /**
   * <p>The edition of your Amazon QuickSight account.</p>
   * @public
   */
  Edition?: Edition;

  /**
   * <p>The email address that will be used for Amazon QuickSight to send notifications regarding your Amazon Web Services account or Amazon QuickSight subscription.</p>
   * @public
   */
  NotificationEmail?: string;

  /**
   * <p>The way that your Amazon QuickSight account is authenticated.</p>
   * @public
   */
  AuthenticationType?: string;

  /**
   * <p>The status of your account subscription.</p>
   * @public
   */
  AccountSubscriptionStatus?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the IAM Identity Center instance.</p>
   * @public
   */
  IAMIdentityCenterInstanceArn?: string;
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
  AccountName?: string;

  /**
   * <p>The edition of Amazon QuickSight that you're currently subscribed to:
   *         Enterprise edition or Standard edition.</p>
   * @public
   */
  Edition?: Edition;

  /**
   * <p>The default Amazon QuickSight namespace for your Amazon Web Services account. </p>
   * @public
   */
  DefaultNamespace?: string;

  /**
   * <p>The main notification email for your Amazon QuickSight subscription.</p>
   * @public
   */
  NotificationEmail?: string;

  /**
   * <p>A Boolean value that indicates whether public sharing is turned on for an Amazon QuickSight account. For more information about turning on public sharing, see <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdatePublicSharingSettings.html">UpdatePublicSharingSettings</a>.</p>
   * @public
   */
  PublicSharingEnabled?: boolean;

  /**
   * <p>A boolean value that determines whether or not an Amazon QuickSight account can be deleted. A <code>True</code> value doesn't allow the account to be deleted and results in an error message if a user tries to make a <code>DeleteAccountSubsctiption</code> request. A <code>False</code> value will allow the ccount to be deleted. </p>
   * @public
   */
  TerminationProtectionEnabled?: boolean;
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
  AssignmentName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
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
 * <p>An ad hoc (one-time) filtering option.</p>
 * @public
 */
export interface AdHocFilteringOption {
  /**
   * <p>Availability status.</p>
   * @public
   */
  AvailabilityStatus?: DashboardBehavior;
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
  SimpleAttributeAggregation?: SimpleAttributeAggregationFunction;

  /**
   * <p>Used by the <code>UNIQUE_VALUE</code> aggregation function. If there are multiple values for the field used by the aggregation, the value for this property will be returned instead. Defaults to '*'.</p>
   * @public
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
 * <p>An aggregation based on the percentile of values in a dimension or measure.</p>
 * @public
 */
export interface PercentileAggregation {
  /**
   * <p>The percentile value. This value can be any numeric constant 0–100. A percentile value of 50 computes the median value of the measure.</p>
   * @public
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
  SimpleNumericalAggregation?: SimpleNumericalAggregationFunction;

  /**
   * <p>An aggregation based on the percentile of values in a dimension or measure.</p>
   * @public
   */
  PercentileAggregation?: PercentileAggregation;
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
  NumericalAggregationFunction?: NumericalAggregationFunction;

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
  CategoricalAggregationFunction?: CategoricalAggregationFunction;

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
  DateAggregationFunction?: DateAggregationFunction;

  /**
   * <p>Aggregation for attributes.</p>
   * @public
   */
  AttributeAggregationFunction?: AttributeAggregationFunction;
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
  AggregationFunction?: AggregationFunction;
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
  Path?: string;
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
  Type?: AnalysisErrorType;

  /**
   * <p>The message associated with the analysis error.</p>
   * @public
   */
  Message?: string;

  /**
   * <p>Lists the violated entities that caused the analysis error</p>
   * @public
   */
  ViolatedEntities?: Entity[];
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
  SheetId?: string;

  /**
   * <p>The name of a sheet. This name is displayed on the sheet's tab in the Amazon QuickSight
   *             console.</p>
   * @public
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
 * <p>Metadata structure for an analysis in Amazon QuickSight</p>
 * @public
 */
export interface Analysis {
  /**
   * <p>The ID of the analysis.</p>
   * @public
   */
  AnalysisId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the analysis.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The descriptive name of the analysis.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>Status associated with the analysis.</p>
   * @public
   */
  Status?: ResourceStatus;

  /**
   * <p>Errors associated with the analysis.</p>
   * @public
   */
  Errors?: AnalysisError[];

  /**
   * <p>The ARNs of the datasets of the analysis.</p>
   * @public
   */
  DataSetArns?: string[];

  /**
   * <p>The ARN of the theme of the analysis.</p>
   * @public
   */
  ThemeArn?: string;

  /**
   * <p>The time that the analysis was created.</p>
   * @public
   */
  CreatedTime?: Date;

  /**
   * <p>The time that the analysis was last updated.</p>
   * @public
   */
  LastUpdatedTime?: Date;

  /**
   * <p>A list of the associated sheets with the unique identifier and name of each sheet.</p>
   * @public
   */
  Sheets?: Sheet[];
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
  ScreenCanvasSizeOptions?: FreeFormLayoutScreenCanvasSizeOptions;
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
  OptimizedViewPortWidth?: string;
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
  ScreenCanvasSizeOptions?: GridLayoutScreenCanvasSizeOptions;
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
  Grid?: DefaultGridLayoutConfiguration;

  /**
   * <p>The options that determine the default settings of a free-form layout configuration.</p>
   * @public
   */
  FreeForm?: DefaultFreeFormLayoutConfiguration;
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
  Top?: string;

  /**
   * <p>Define the bottom spacing.</p>
   * @public
   */
  Bottom?: string;

  /**
   * <p>Define the left spacing.</p>
   * @public
   */
  Left?: string;

  /**
   * <p>Define the right spacing.</p>
   * @public
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
 * <p>The options for a paper canvas of a section-based layout.</p>
 * @public
 */
export interface SectionBasedLayoutPaperCanvasSizeOptions {
  /**
   * <p>The paper size that is used to define canvas dimensions.</p>
   * @public
   */
  PaperSize?: PaperSize;

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
  PaperOrientation?: PaperOrientation;

  /**
   * <p>Defines the spacing between the canvas content and the top, bottom, left, and right edges.</p>
   * @public
   */
  PaperMargin?: Spacing;
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
  PaperCanvasSizeOptions?: SectionBasedLayoutPaperCanvasSizeOptions;
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
 * <p>The configuration for default new sheet settings.</p>
 * @public
 */
export interface DefaultNewSheetConfiguration {
  /**
   * <p>The options that determine the default settings for interactive layout configuration.</p>
   * @public
   */
  InteractiveLayoutConfiguration?: DefaultInteractiveLayoutConfiguration;

  /**
   * <p>The options that determine the default settings for a paginated layout configuration.</p>
   * @public
   */
  PaginatedLayoutConfiguration?: DefaultPaginatedLayoutConfiguration;

  /**
   * <p>The option that determines the sheet content type.</p>
   * @public
   */
  SheetContentType?: SheetContentType;
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
  FieldValue?: string;

  /**
   * <p>The color that is applied to the data value.</p>
   * @public
   */
  Color: string | undefined;

  /**
   * <p>The value of a special data value.</p>
   * @public
   */
  SpecialValue?: SpecialValue;
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
  CustomColors?: CustomColor[];
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
 * <p>The options that determine the thousands separator configuration.</p>
 * @public
 */
export interface ThousandSeparatorOptions {
  /**
   * <p>Determines the thousands separator symbol.</p>
   * @public
   */
  Symbol?: NumericSeparatorSymbol;

  /**
   * <p>Determines the visibility of the thousands separator.</p>
   * @public
   */
  Visibility?: Visibility;
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
  DecimalSeparator?: NumericSeparatorSymbol;

  /**
   * <p>The options that determine the thousands separator configuration.</p>
   * @public
   */
  ThousandsSeparator?: ThousandSeparatorOptions;
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
  Prefix?: string;

  /**
   * <p>Determines the suffix value of the currency format.</p>
   * @public
   */
  Suffix?: string;

  /**
   * <p>The options that determine the numeric separator configuration.</p>
   * @public
   */
  SeparatorConfiguration?: NumericSeparatorConfiguration;

  /**
   * <p>Determines the symbol for the currency format.</p>
   * @public
   */
  Symbol?: string;

  /**
   * <p>The option that determines the decimal places configuration.</p>
   * @public
   */
  DecimalPlacesConfiguration?: DecimalPlacesConfiguration;

  /**
   * <p>Determines the number scale value for the currency format.</p>
   * @public
   */
  NumberScale?: NumberScale;

  /**
   * <p>The options that determine the negative value configuration.</p>
   * @public
   */
  NegativeValueConfiguration?: NegativeValueConfiguration;

  /**
   * <p>The options that determine the null value format configuration.</p>
   * @public
   */
  NullValueFormatConfiguration?: NullValueFormatConfiguration;
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
  Prefix?: string;

  /**
   * <p>Determines the suffix value of the number format.</p>
   * @public
   */
  Suffix?: string;

  /**
   * <p>The options that determine the numeric separator configuration.</p>
   * @public
   */
  SeparatorConfiguration?: NumericSeparatorConfiguration;

  /**
   * <p>The option that determines the decimal places configuration.</p>
   * @public
   */
  DecimalPlacesConfiguration?: DecimalPlacesConfiguration;

  /**
   * <p>Determines the number scale value of the number format.</p>
   * @public
   */
  NumberScale?: NumberScale;

  /**
   * <p>The options that determine the negative value configuration.</p>
   * @public
   */
  NegativeValueConfiguration?: NegativeValueConfiguration;

  /**
   * <p>The options that determine the null value format configuration.</p>
   * @public
   */
  NullValueFormatConfiguration?: NullValueFormatConfiguration;
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
  Prefix?: string;

  /**
   * <p>Determines the suffix value of the percentage format.</p>
   * @public
   */
  Suffix?: string;

  /**
   * <p>The options that determine the numeric separator configuration.</p>
   * @public
   */
  SeparatorConfiguration?: NumericSeparatorConfiguration;

  /**
   * <p>The option that determines the decimal places configuration.</p>
   * @public
   */
  DecimalPlacesConfiguration?: DecimalPlacesConfiguration;

  /**
   * <p>The options that determine the negative value configuration.</p>
   * @public
   */
  NegativeValueConfiguration?: NegativeValueConfiguration;

  /**
   * <p>The options that determine the null value format configuration.</p>
   * @public
   */
  NullValueFormatConfiguration?: NullValueFormatConfiguration;
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
  NumberDisplayFormatConfiguration?: NumberDisplayFormatConfiguration;

  /**
   * <p>The options that determine the currency display format configuration.</p>
   * @public
   */
  CurrencyDisplayFormatConfiguration?: CurrencyDisplayFormatConfiguration;

  /**
   * <p>The options that determine the percentage display format configuration.</p>
   * @public
   */
  PercentageDisplayFormatConfiguration?: PercentageDisplayFormatConfiguration;
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
  DateTimeFormat?: string;

  /**
   * <p>The options that determine the null value format configuration.</p>
   * @public
   */
  NullValueFormatConfiguration?: NullValueFormatConfiguration;

  /**
   * <p>The formatting configuration for numeric <code>DateTime</code> fields.</p>
   * @public
   */
  NumericFormatConfiguration?: NumericFormatConfiguration;
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
  FormatConfiguration?: NumericFormatConfiguration;
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
  NullValueFormatConfiguration?: NullValueFormatConfiguration;

  /**
   * <p>The formatting configuration for numeric strings.</p>
   * @public
   */
  NumericFormatConfiguration?: NumericFormatConfiguration;
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
  StringFormatConfiguration?: StringFormatConfiguration;

  /**
   * <p>Formatting configuration for number fields.</p>
   * @public
   */
  NumberFormatConfiguration?: NumberFormatConfiguration;

  /**
   * <p>Formatting configuration for <code>DateTime</code> fields.</p>
   * @public
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
  FormatConfiguration?: FormatConfiguration;

  /**
   * <p>The role of the column.</p>
   * @public
   */
  Role?: ColumnRole;

  /**
   * <p>The color configurations of the column.</p>
   * @public
   */
  ColorsConfiguration?: ColorsConfiguration;
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
  CategoryValue?: string;

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
  SelectAllOptions?: CategoryFilterSelectAllOptions;

  /**
   * <p>The parameter whose value should be used for the filter value.</p>
   *          <p>This field is mutually exclusive to <code>CategoryValue</code>.</p>
   * @public
   */
  ParameterName?: string;

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
  CategoryValues?: string[];

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
  SelectAllOptions?: CategoryFilterSelectAllOptions;

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
  CategoryValues?: string[];

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
  SelectAllOptions?: CategoryFilterSelectAllOptions;

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
  NullOption?: FilterNullOption;
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
  FilterListConfiguration?: FilterListConfiguration;

  /**
   * <p>A list of custom filter values. In the Amazon QuickSight console, this filter type is called a custom filter list.</p>
   * @public
   */
  CustomFilterListConfiguration?: CustomFilterListConfiguration;

  /**
   * <p>A custom filter that filters based on a single value. This filter can be partially matched.</p>
   * @public
   */
  CustomFilterConfiguration?: CustomFilterConfiguration;
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
  Value?: number;

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
  SelectAllOptions?: NumericFilterSelectAllOptions;

  /**
   * <p>The match operator that is used to determine if a filter should be applied.</p>
   * @public
   */
  MatchOperator: NumericEqualityMatchOperator | undefined;

  /**
   * <p>The aggregation function of the filter.</p>
   * @public
   */
  AggregationFunction?: AggregationFunction;

  /**
   * <p>The parameter whose value should be used for the filter value.</p>
   * @public
   */
  ParameterName?: string;

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
 * <p>The value input pf the numeric range filter.</p>
 * @public
 */
export interface NumericRangeFilterValue {
  /**
   * <p>The static value of the numeric range filter.</p>
   * @public
   */
  StaticValue?: number;

  /**
   * <p>The parameter that is used in the numeric range.</p>
   * @public
   */
  Parameter?: string;
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
  IncludeMinimum?: boolean;

  /**
   * <p>Determines whether the maximum value in the filter value range should be included in the filtered results.</p>
   * @public
   */
  IncludeMaximum?: boolean;

  /**
   * <p>The minimum value for the filter value range.</p>
   * @public
   */
  RangeMinimum?: NumericRangeFilterValue;

  /**
   * <p>The maximum value for the filter value range.</p>
   * @public
   */
  RangeMaximum?: NumericRangeFilterValue;

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
  SelectAllOptions?: NumericFilterSelectAllOptions;

  /**
   * <p>The aggregation function of the filter.</p>
   * @public
   */
  AggregationFunction?: AggregationFunction;

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
  AnchorOption?: AnchorOption;

  /**
   * <p>The name of the parameter that is used for the anchor date configuration.</p>
   * @public
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
  Status?: WidgetStatus;
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
  MinimumGranularity?: TimeGranularity;

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
  RelativeDateValue?: number;

  /**
   * <p>The parameter whose value should be used for the filter value.</p>
   * @public
   */
  ParameterName?: string;

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
  ExcludePeriodConfiguration?: ExcludePeriodConfiguration;
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
  DataSetIdentifier?: string;

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
  Value?: Date;

  /**
   * <p>The parameter whose value should be used for the filter value.</p>
   *          <p>This field is mutually exclusive to <code>Value</code> and <code>RollingDate</code>.</p>
   * @public
   */
  ParameterName?: string;

  /**
   * <p>The level of time precision that is used to aggregate <code>DateTime</code> values.</p>
   * @public
   */
  TimeGranularity?: TimeGranularity;

  /**
   * <p>The rolling date input for the <code>TimeEquality</code> filter.</p>
   *          <p>This field is mutually exclusive to <code>Value</code> and <code>ParameterName</code>.</p>
   * @public
   */
  RollingDate?: RollingDateConfiguration;
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
  StaticValue?: Date;

  /**
   * <p>The rolling date input value.</p>
   * @public
   */
  RollingDate?: RollingDateConfiguration;

  /**
   * <p>The parameter type input value.</p>
   * @public
   */
  Parameter?: string;
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
  IncludeMinimum?: boolean;

  /**
   * <p>Determines whether the maximum value in the filter value range should be included in the filtered results.</p>
   * @public
   */
  IncludeMaximum?: boolean;

  /**
   * <p>The minimum value for the filter value range.</p>
   * @public
   */
  RangeMinimumValue?: TimeRangeFilterValue;

  /**
   * <p>The maximum value for the filter value range.</p>
   * @public
   */
  RangeMaximumValue?: TimeRangeFilterValue;

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
  ExcludePeriodConfiguration?: ExcludePeriodConfiguration;

  /**
   * <p>The level of time precision that is used to aggregate <code>DateTime</code> values.</p>
   * @public
   */
  TimeGranularity?: TimeGranularity;
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
  Limit?: number;

  /**
   * <p>The aggregation and sort configuration of the top bottom filter.</p>
   * @public
   */
  AggregationSortConfigurations: AggregationSortConfiguration[] | undefined;

  /**
   * <p>The level of time precision that is used to aggregate <code>DateTime</code> values.</p>
   * @public
   */
  TimeGranularity?: TimeGranularity;

  /**
   * <p>The parameter whose value should be used for the filter value.</p>
   * @public
   */
  ParameterName?: string;
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
  CategoryFilter?: CategoryFilter;

  /**
   * <p>A <code>NumericRangeFilter</code> filters numeric values that are either inside or outside a given numeric range.</p>
   * @public
   */
  NumericRangeFilter?: NumericRangeFilter;

  /**
   * <p>A <code>NumericEqualityFilter</code> filters numeric values that equal or do not equal a given numeric value.</p>
   * @public
   */
  NumericEqualityFilter?: NumericEqualityFilter;

  /**
   * <p>A <code>TimeEqualityFilter</code> filters date-time values that equal or do not equal
   *             a given date/time value.</p>
   * @public
   */
  TimeEqualityFilter?: TimeEqualityFilter;

  /**
   * <p>A <code>TimeRangeFilter</code> filters date-time values that are either inside or outside a given date/time range.</p>
   * @public
   */
  TimeRangeFilter?: TimeRangeFilter;

  /**
   * <p>A <code>RelativeDatesFilter</code> filters date values that are relative to a given date.</p>
   * @public
   */
  RelativeDatesFilter?: RelativeDatesFilter;

  /**
   * <p>A <code>TopBottomFilter</code> filters data to the top or bottom values for a given column.</p>
   * @public
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
  VisualIds?: string[];
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
  SheetVisualScopingConfigurations?: SheetVisualScopingConfiguration[];
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
  SelectedSheets?: SelectedSheetsFilterScopeConfiguration;

  /**
   * <p>The configuration that applies a filter to all sheets. When you choose <code>AllSheets</code> as the value for a <code>FilterScopeConfiguration</code>, this filter is applied to all visuals of all sheets in an Analysis, Dashboard, or Template. The <code>AllSheetsFilterScopeConfiguration</code> is chosen.</p>
   * @public
   */
  AllSheets?: AllSheetsFilterScopeConfiguration;
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
  Status?: WidgetStatus;

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
  Timezone?: string;

  /**
   * <p>Determines the week start day for an analysis.</p>
   * @public
   */
  WeekStart?: DayOfTheWeek;
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
  UserNameColumn?: ColumnIdentifier;

  /**
   * <p>The column that contains the group name.</p>
   * @public
   */
  GroupNameColumn?: ColumnIdentifier;

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
  DynamicValue?: DynamicDefaultValue;

  /**
   * <p>The static values of the <code>DataTimeDefaultValues</code>.</p>
   * @public
   */
  StaticValues?: Date[];

  /**
   * <p>The rolling date of the <code>DataTimeDefaultValues</code>. The date is determined from the dataset based on input expression.</p>
   * @public
   */
  RollingDate?: RollingDateConfiguration;
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
  ValueWhenUnsetOption?: ValueWhenUnsetOption;

  /**
   * <p>A custom value that's used when the value of a parameter isn't set.</p>
   * @public
   */
  CustomValue?: Date;
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
  DefaultValues?: DateTimeDefaultValues;

  /**
   * <p>The level of time precision that is used to aggregate <code>DateTime</code> values.</p>
   * @public
   */
  TimeGranularity?: TimeGranularity;

  /**
   * <p>The configuration that defines the default value of a <code>DateTime</code> parameter when a value has not been set.</p>
   * @public
   */
  ValueWhenUnset?: DateTimeValueWhenUnsetConfiguration;

  /**
   * <p>A list of dataset parameters that are mapped to an analysis parameter.</p>
   * @public
   */
  MappedDataSetParameters?: MappedDataSetParameter[];
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
  DynamicValue?: DynamicDefaultValue;

  /**
   * <p>The static values of the <code>DecimalDefaultValues</code>.</p>
   * @public
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
  ValueWhenUnsetOption?: ValueWhenUnsetOption;

  /**
   * <p>A custom value that's used when the value of a parameter isn't set.</p>
   * @public
   */
  CustomValue?: number;
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
  DefaultValues?: DecimalDefaultValues;

  /**
   * <p>The configuration that defines the default value of a <code>Decimal</code> parameter when a value has not been set.</p>
   * @public
   */
  ValueWhenUnset?: DecimalValueWhenUnsetConfiguration;

  /**
   * <p>A list of dataset parameters that are mapped to an analysis parameter.</p>
   * @public
   */
  MappedDataSetParameters?: MappedDataSetParameter[];
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
  DynamicValue?: DynamicDefaultValue;

  /**
   * <p>The static values of the <code>IntegerDefaultValues</code>.</p>
   * @public
   */
  StaticValues?: number[];
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
  ValueWhenUnsetOption?: ValueWhenUnsetOption;

  /**
   * <p>A custom value that's used when the value of a parameter isn't set.</p>
   * @public
   */
  CustomValue?: number;
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
  DefaultValues?: IntegerDefaultValues;

  /**
   * <p>A parameter declaration for the <code>Integer</code> data type.</p>
   * @public
   */
  ValueWhenUnset?: IntegerValueWhenUnsetConfiguration;

  /**
   * <p>A list of dataset parameters that are mapped to an analysis parameter.</p>
   * @public
   */
  MappedDataSetParameters?: MappedDataSetParameter[];
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
  DynamicValue?: DynamicDefaultValue;

  /**
   * <p>The static values of the <code>DecimalDefaultValues</code>.</p>
   * @public
   */
  StaticValues?: string[];
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
  ValueWhenUnsetOption?: ValueWhenUnsetOption;

  /**
   * <p>A custom value that's used when the value of a parameter isn't set.</p>
   * @public
   */
  CustomValue?: string;
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
  DefaultValues?: StringDefaultValues;

  /**
   * <p>The configuration that defines the default value of a <code>String</code> parameter when a value has not been set.</p>
   * @public
   */
  ValueWhenUnset?: StringValueWhenUnsetConfiguration;

  /**
   * <p>A list of dataset parameters that are mapped to an analysis parameter.</p>
   * @public
   */
  MappedDataSetParameters?: MappedDataSetParameter[];
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
  StringParameterDeclaration?: StringParameterDeclaration;

  /**
   * <p>A parameter declaration for the <code>Decimal</code> data type.</p>
   * @public
   */
  DecimalParameterDeclaration?: DecimalParameterDeclaration;

  /**
   * <p>A parameter declaration for the <code>Integer</code> data type.</p>
   * @public
   */
  IntegerParameterDeclaration?: IntegerParameterDeclaration;

  /**
   * <p>A parameter declaration for the <code>DateTime</code> data type.</p>
   * @public
   */
  DateTimeParameterDeclaration?: DateTimeParameterDeclaration;
}

/**
 * <p>A control to display info icons for filters and parameters.</p>
 * @public
 */
export interface SheetControlInfoIconLabelOptions {
  /**
   * <p>The visibility configuration of info icon label options.</p>
   * @public
   */
  Visibility?: Visibility;

  /**
   * <p> The text content of info icon.</p>
   * @public
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
 * <p>The option that determines the text display size.</p>
 * @public
 */
export interface FontSize {
  /**
   * <p>The lexical name for the text size, proportional to its surrounding context.</p>
   * @public
   */
  Relative?: RelativeFontSize;
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
  Name?: FontWeightName;
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
  FontSize?: FontSize;

  /**
   * <p>Determines the appearance of decorative lines on the text.</p>
   * @public
   */
  FontDecoration?: FontDecoration;

  /**
   * <p>Determines the color of the text.</p>
   * @public
   */
  FontColor?: string;

  /**
   * <p>The option that determines the text display weight, or boldness.</p>
   * @public
   */
  FontWeight?: FontWeight;

  /**
   * <p>Determines the text display face that is inherited by the given font family.</p>
   * @public
   */
  FontStyle?: FontStyle;
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
  Visibility?: Visibility;

  /**
   * <p>The font configuration of the label.</p>
   * @public
   */
  FontConfiguration?: FontConfiguration;

  /**
   * <p>The text for the label.</p>
   * @public
   */
  CustomLabel?: string;
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
  TitleOptions?: LabelOptions;

  /**
   * <p>Customize how dates are formatted in controls.</p>
   * @public
   */
  DateTimeFormat?: string;

  /**
   * <p>The configuration of info icon label options.</p>
   * @public
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
  DisplayOptions?: DateTimePickerControlDisplayOptions;

  /**
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
   * @public
   */
  Type?: SheetControlDateTimePickerType;
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
  SourceSheetControlId?: string;

  /**
   * <p>The column identifier that determines which column to look up for the source sheet control.</p>
   * @public
   */
  ColumnToMatch?: ColumnIdentifier;
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
  SourceControls?: CascadingControlSource[];
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
  Visibility?: Visibility;
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
  SelectAllOptions?: ListControlSelectAllOptions;

  /**
   * <p>The options to configure the title visibility, name, and font size.</p>
   * @public
   */
  TitleOptions?: LabelOptions;

  /**
   * <p>The configuration of info icon label options.</p>
   * @public
   */
  InfoIconLabelOptions?: SheetControlInfoIconLabelOptions;
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
  DisplayOptions?: DropDownControlDisplayOptions;

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
  Type?: SheetControlListType;

  /**
   * <p>A list of selectable values that are used in a control.</p>
   * @public
   */
  SelectableValues?: FilterSelectableValues;

  /**
   * <p>The values that are displayed in a control can be configured to only show values that are valid based on what's selected in other controls.</p>
   * @public
   */
  CascadingControlConfiguration?: CascadingControlConfiguration;
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
  Visibility?: Visibility;
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
  SearchOptions?: ListControlSearchOptions;

  /**
   * <p>The configuration of the <code>Select all</code> options in a list control.</p>
   * @public
   */
  SelectAllOptions?: ListControlSelectAllOptions;

  /**
   * <p>The options to configure the title visibility, name, and font size.</p>
   * @public
   */
  TitleOptions?: LabelOptions;

  /**
   * <p>The configuration of info icon label options.</p>
   * @public
   */
  InfoIconLabelOptions?: SheetControlInfoIconLabelOptions;
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
  DisplayOptions?: ListControlDisplayOptions;

  /**
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
   * @public
   */
  Type?: SheetControlListType;

  /**
   * <p>A list of selectable values that are used in a control.</p>
   * @public
   */
  SelectableValues?: FilterSelectableValues;

  /**
   * <p>The values that are displayed in a control can be configured to only show values that are valid based on what's selected in other controls.</p>
   * @public
   */
  CascadingControlConfiguration?: CascadingControlConfiguration;
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
  TitleOptions?: LabelOptions;

  /**
   * <p>Customize how dates are formatted in controls.</p>
   * @public
   */
  DateTimeFormat?: string;

  /**
   * <p>The configuration of info icon label options.</p>
   * @public
   */
  InfoIconLabelOptions?: SheetControlInfoIconLabelOptions;
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
  DisplayOptions?: RelativeDateTimeControlDisplayOptions;
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
  TitleOptions?: LabelOptions;

  /**
   * <p>The configuration of info icon label options.</p>
   * @public
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
  DisplayOptions?: SliderControlDisplayOptions;

  /**
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
   * @public
   */
  Type?: SheetControlSliderType;

  /**
   * <p>The smaller value that is displayed at the left of the slider.</p>
   * @public
   */
  MaximumValue: number | undefined;

  /**
   * <p>The larger value that is displayed at the right of the slider.</p>
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
  Visibility?: Visibility;
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
  TitleOptions?: LabelOptions;

  /**
   * <p>The configuration of the placeholder options in a text area control.</p>
   * @public
   */
  PlaceholderOptions?: TextControlPlaceholderOptions;

  /**
   * <p>The configuration of info icon label options.</p>
   * @public
   */
  InfoIconLabelOptions?: SheetControlInfoIconLabelOptions;
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
  Delimiter?: string;

  /**
   * <p>The display options of a control.</p>
   * @public
   */
  DisplayOptions?: TextAreaControlDisplayOptions;
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
  TitleOptions?: LabelOptions;

  /**
   * <p>The configuration of the placeholder options in a text field control.</p>
   * @public
   */
  PlaceholderOptions?: TextControlPlaceholderOptions;

  /**
   * <p>The configuration of info icon label options.</p>
   * @public
   */
  InfoIconLabelOptions?: SheetControlInfoIconLabelOptions;
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
  DisplayOptions?: TextFieldControlDisplayOptions;
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
  DateTimePicker?: FilterDateTimePickerControl;

  /**
   * <p>A control to display a list of buttons or boxes. This is used to select either a single value or multiple values.</p>
   * @public
   */
  List?: FilterListControl;

  /**
   * <p>A control to display a dropdown list with buttons that are used to select a single value.</p>
   * @public
   */
  Dropdown?: FilterDropDownControl;

  /**
   * <p>A control to display a text box that is used to enter a single entry.</p>
   * @public
   */
  TextField?: FilterTextFieldControl;

  /**
   * <p>A control to display a text box that is used to enter multiple entries.</p>
   * @public
   */
  TextArea?: FilterTextAreaControl;

  /**
   * <p>A control to display a horizontal toggle bar. This is used to change a value by sliding the toggle.</p>
   * @public
   */
  Slider?: FilterSliderControl;

  /**
   * <p>A control from a date filter that is used to specify the relative date.</p>
   * @public
   */
  RelativeDateTime?: FilterRelativeDateTimeControl;
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
  Visibility?: Visibility;

  /**
   * <p>The background color of a free-form layout element.</p>
   * @public
   */
  Color?: string;
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
  Visibility?: Visibility;

  /**
   * <p>The border color of a free-form layout element.</p>
   * @public
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
 * <p>The configuration of loading animation in free-form layout. </p>
 * @public
 */
export interface LoadingAnimation {
  /**
   * <p>The visibility configuration of <code>LoadingAnimation</code>.</p>
   * @public
   */
  Visibility?: Visibility;
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
  Visibility?: Visibility;
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
  Visibility?: Visibility;

  /**
   * <p>The rendering rules that determine when an element should be displayed within a free-form layout.</p>
   * @public
   */
  RenderingRules?: SheetElementRenderingRule[];

  /**
   * <p>The border style configuration of a free-form layout element.</p>
   * @public
   */
  BorderStyle?: FreeFormLayoutElementBorderStyle;

  /**
   * <p>The border style configuration of a free-form layout element. This border style is used when the element is selected.</p>
   * @public
   */
  SelectedBorderStyle?: FreeFormLayoutElementBorderStyle;

  /**
   * <p>The background style configuration of a free-form layout element.</p>
   * @public
   */
  BackgroundStyle?: FreeFormLayoutElementBackgroundStyle;

  /**
   * <p>The loading animation configuration of a free-form layout element.</p>
   * @public
   */
  LoadingAnimation?: LoadingAnimation;
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
  CanvasSizeOptions?: FreeFormLayoutCanvasSizeOptions;
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
  ColumnIndex?: number;

  /**
   * <p>The width of a grid element expressed as a number of grid columns.</p>
   * @public
   */
  ColumnSpan: number | undefined;

  /**
   * <p>The row index for the upper left corner of an element.</p>
   * @public
   */
  RowIndex?: number;

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
  CanvasSizeOptions?: GridLayoutCanvasSizeOptions;
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
 * <p>The configuration of a page break after a section.</p>
 * @public
 */
export interface SectionAfterPageBreak {
  /**
   * <p>The option that enables or disables a page break at the end of a section.</p>
   * @public
   */
  Status?: SectionPageBreakStatus;
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
  After?: SectionAfterPageBreak;
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
  Height?: string;

  /**
   * <p>The spacing between section content and its top, bottom, left, and right edges.</p>
   *          <p>There is no padding by default.</p>
   * @public
   */
  Padding?: Spacing;
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
  Style?: SectionStyle;

  /**
   * <p>The configuration of a page break for a section.</p>
   * @public
   */
  PageBreakConfiguration?: SectionPageBreakConfiguration;
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
  Style?: SectionStyle;
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
  GridLayout?: GridLayoutConfiguration;

  /**
   * <p>A free-form is optimized for a fixed width and has more control over the exact placement of layout elements.</p>
   * @public
   */
  FreeFormLayout?: FreeFormLayoutConfiguration;

  /**
   * <p>A section based layout organizes visuals into multiple sections and has customized header, footer and page break.</p>
   * @public
   */
  SectionBasedLayout?: SectionBasedLayoutConfiguration;
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
  DisplayOptions?: DateTimePickerControlDisplayOptions;
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
  Values?: string[];

  /**
   * <p>The column identifier that fetches values from the data set.</p>
   * @public
   */
  LinkToDataSetColumn?: ColumnIdentifier;
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
  DisplayOptions?: DropDownControlDisplayOptions;

  /**
   * <p>The type parameter name of the <code>ParameterDropDownControl</code>.</p>
   * @public
   */
  Type?: SheetControlListType;

  /**
   * <p>A list of selectable values that are used in a control.</p>
   * @public
   */
  SelectableValues?: ParameterSelectableValues;

  /**
   * <p>The values that are displayed in a control can be configured to only show values that are valid based on what's selected in other controls.</p>
   * @public
   */
  CascadingControlConfiguration?: CascadingControlConfiguration;
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
  DisplayOptions?: ListControlDisplayOptions;

  /**
   * <p>The type of <code>ParameterListControl</code>.</p>
   * @public
   */
  Type?: SheetControlListType;

  /**
   * <p>A list of selectable values that are used in a control.</p>
   * @public
   */
  SelectableValues?: ParameterSelectableValues;

  /**
   * <p>The values that are displayed in a control can be configured to only show values that are valid based on what's selected in other controls.</p>
   * @public
   */
  CascadingControlConfiguration?: CascadingControlConfiguration;
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
  DisplayOptions?: SliderControlDisplayOptions;

  /**
   * <p>The smaller value that is displayed at the left of the slider.</p>
   * @public
   */
  MaximumValue: number | undefined;

  /**
   * <p>The larger value that is displayed at the right of the slider.</p>
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
  Delimiter?: string;

  /**
   * <p>The display options of a control.</p>
   * @public
   */
  DisplayOptions?: TextAreaControlDisplayOptions;
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
  DisplayOptions?: TextFieldControlDisplayOptions;
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
  DateTimePicker?: ParameterDateTimePickerControl;

  /**
   * <p>A control to display a list with buttons or boxes that are used to select either a single value or multiple values.</p>
   * @public
   */
  List?: ParameterListControl;

  /**
   * <p>A control to display a dropdown list with buttons that are used to select a single value.</p>
   * @public
   */
  Dropdown?: ParameterDropDownControl;

  /**
   * <p>A control to display a text box that is used to enter a single entry.</p>
   * @public
   */
  TextField?: ParameterTextFieldControl;

  /**
   * <p>A control to display a text box that is used to enter multiple entries.</p>
   * @public
   */
  TextArea?: ParameterTextAreaControl;

  /**
   * <p>A control to display a horizontal toggle bar. This is used to change a value by sliding the toggle.</p>
   * @public
   */
  Slider?: ParameterSliderControl;
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
  GridLayout?: GridLayoutConfiguration;
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
 * <p>The configuration of selected fields in the<code>CustomActionFilterOperation</code>.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 * @public
 */
export interface FilterOperationSelectedFieldsConfiguration {
  /**
   * <p>Chooses the fields that are filtered in <code>CustomActionFilterOperation</code>.</p>
   * @public
   */
  SelectedFields?: string[];

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
  SelectedFieldOptions?: SelectedFieldOptions;

  /**
   * <p>The selected columns of a dataset.</p>
   * @public
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
 * <p>The configuration of the same-sheet target visuals that you want to be filtered.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 * @public
 */
export interface SameSheetTargetVisualConfiguration {
  /**
   * <p>A list of the target visual IDs that are located in the same sheet of the analysis.</p>
   * @public
   */
  TargetVisuals?: string[];

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
  TargetVisualOptions?: TargetVisualOptions;
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
  SameSheetTargetVisualConfiguration?: SameSheetTargetVisualConfiguration;
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
  LocalNavigationConfiguration?: LocalNavigationConfiguration;
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
  StringValues?: string[];

  /**
   * <p>A list of integer-type parameter values.</p>
   * @public
   */
  IntegerValues?: number[];

  /**
   * <p>A list of decimal-type parameter values.</p>
   * @public
   */
  DecimalValues?: number[];

  /**
   * <p>A list of datetime-type parameter values.</p>
   * @public
   */
  DateTimeValues?: Date[];
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
  IncludeNullValue?: boolean;

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
  CustomValuesConfiguration?: CustomValuesConfiguration;

  /**
   * <p>The configuration that selects all options.</p>
   * @public
   */
  SelectAllValueOptions?: SelectAllValueOptions;

  /**
   * <p>The source parameter name of the destination parameter.</p>
   * @public
   */
  SourceParameterName?: string;

  /**
   * <p>The source field ID of the destination parameter.</p>
   * @public
   */
  SourceField?: string;

  /**
   * <p>A column of a data set.</p>
   * @public
   */
  SourceColumn?: ColumnIdentifier;
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
export interface VisualCustomActionOperation {
  /**
   * <p>The filter operation that filters data included in a visual or in an entire sheet.</p>
   * @public
   */
  FilterOperation?: CustomActionFilterOperation;

  /**
   * <p>The navigation operation that navigates between different sheets in the same analysis.</p>
   * @public
   */
  NavigationOperation?: CustomActionNavigationOperation;

  /**
   * <p>The URL operation that opens a link to another webpage.</p>
   * @public
   */
  URLOperation?: CustomActionURLOperation;

  /**
   * <p>The set parameter operation that sets parameters in custom action.</p>
   * @public
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
  Status?: WidgetStatus;

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
  MissingDateVisibility?: Visibility;
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
  Minimum?: number;

  /**
   * <p>The maximum setup for an axis display range.</p>
   * @public
   */
  Maximum?: number;
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
  MinMax?: AxisDisplayMinMaxRange;

  /**
   * <p>The data-driven setup of an axis display range.</p>
   * @public
   */
  DataDriven?: AxisDisplayDataDrivenRange;
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
  StepCount?: number;

  /**
   * <p>The step size setup of a linear axis.</p>
   * @public
   */
  StepSize?: number;
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
  Base?: number;
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
  Linear?: AxisLinearScale;

  /**
   * <p>The logarithmic axis scale setup.</p>
   * @public
   */
  Logarithmic?: AxisLogarithmicScale;
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
  Scale?: AxisScale;

  /**
   * <p>The range setup of a numeric axis.</p>
   * @public
   */
  Range?: AxisDisplayRange;
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
  NumericAxisOptions?: NumericAxisOptions;

  /**
   * <p>The options for an axis with a date field.</p>
   * @public
   */
  DateAxisOptions?: DateAxisOptions;
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
  From?: number;

  /**
   * <p>The top bound of the range.</p>
   * @public
   */
  To?: number;
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
  PercentRange?: PercentVisibleRange;
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
  Visibility?: Visibility;

  /**
   * <p>The visibility range for the data zoom scroll bar.</p>
   * @public
   */
  VisibleRange?: VisibleRangeOptions;
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
  LabelOptions?: LabelOptions;

  /**
   * <p>The rotation angle of the axis tick labels.</p>
   * @public
   */
  RotationAngle?: number;
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
  TickLabelOptions?: AxisTickLabelOptions;

  /**
   * <p>Determines whether or not the axis line is visible.</p>
   * @public
   */
  AxisLineVisibility?: Visibility;

  /**
   * <p>Determines whether or not the grid line is visible.</p>
   * @public
   */
  GridLineVisibility?: Visibility;

  /**
   * <p>The data options for an axis.</p>
   * @public
   */
  DataOptions?: AxisDataOptions;

  /**
   * <p>The scroll bar options for an axis.</p>
   * @public
   */
  ScrollbarOptions?: ScrollBarOptions;

  /**
   * <p>The offset value that determines the starting placement of the axis within a visual's bounds.</p>
   * @public
   */
  AxisOffset?: string;
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
  FontConfiguration?: FontConfiguration;

  /**
   * <p>The text for the axis label.</p>
   * @public
   */
  CustomLabel?: string;

  /**
   * <p>The options that indicate which field the label belongs to.</p>
   * @public
   */
  ApplyTo?: AxisLabelReferenceOptions;
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
  Visibility?: Visibility;

  /**
   * <p>The visibility configuration of the sort icon on a chart's axis label.</p>
   * @public
   */
  SortIconVisibility?: Visibility;

  /**
   * <p>The label options for a chart axis.</p>
   * @public
   */
  AxisLabelOptions?: AxisLabelOptions[];
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
  FieldId?: string;

  /**
   * <p>The actual value of the field that is labeled.</p>
   * @public
   */
  FieldValue?: string;

  /**
   * <p>The visibility of the data label.</p>
   * @public
   */
  Visibility?: Visibility;
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
  FieldId?: string;

  /**
   * <p>The visibility of the field label.</p>
   * @public
   */
  Visibility?: Visibility;
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
  Visibility?: Visibility;
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
  Visibility?: Visibility;
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
  Visibility?: Visibility;
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
  FieldLabelType?: FieldLabelType;

  /**
   * <p>The option that specifies individual data values for labels.</p>
   * @public
   */
  DataPathLabelType?: DataPathLabelType;

  /**
   * <p>Determines the label configuration for range end value in a visual.</p>
   * @public
   */
  RangeEndsLabelType?: RangeEndsLabelType;

  /**
   * <p>Determines the label configuration for the minimum value in a visual.</p>
   * @public
   */
  MinimumLabelType?: MinimumLabelType;

  /**
   * <p>Determines the label configuration for the maximum value in a visual.</p>
   * @public
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
 * <p>The options that determine the presentation of the data labels.</p>
 * @public
 */
export interface DataLabelOptions {
  /**
   * <p>Determines the visibility of the data labels.</p>
   * @public
   */
  Visibility?: Visibility;

  /**
   * <p>Determines the visibility of the category field labels.</p>
   * @public
   */
  CategoryLabelVisibility?: Visibility;

  /**
   * <p>Determines the visibility of the measure field labels.</p>
   * @public
   */
  MeasureLabelVisibility?: Visibility;

  /**
   * <p>The option that determines the data label type.</p>
   * @public
   */
  DataLabelTypes?: DataLabelType[];

  /**
   * <p>Determines the position of the data labels.</p>
   * @public
   */
  Position?: DataLabelPosition;

  /**
   * <p>Determines the content of the data labels.</p>
   * @public
   */
  LabelContent?: DataLabelContent;

  /**
   * <p>Determines the font configuration of the data labels.</p>
   * @public
   */
  LabelFontConfiguration?: FontConfiguration;

  /**
   * <p>Determines the color of the data labels.</p>
   * @public
   */
  LabelColor?: string;

  /**
   * <p>Determines whether overlap is enabled or disabled for the data labels.</p>
   * @public
   */
  Overlap?: DataLabelOverlap;

  /**
   * <p>Determines the visibility of the total.</p>
   * @public
   */
  TotalsVisibility?: Visibility;
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
  HierarchyId?: string;

  /**
   * <p>The format configuration of the field.</p>
   * @public
   */
  FormatConfiguration?: StringFormatConfiguration;
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
  DateGranularity?: TimeGranularity;

  /**
   * <p>The custom hierarchy ID.</p>
   * @public
   */
  HierarchyId?: string;

  /**
   * <p>The format configuration of the field.</p>
   * @public
   */
  FormatConfiguration?: DateTimeFormatConfiguration;
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
  HierarchyId?: string;

  /**
   * <p>The format configuration of the field.</p>
   * @public
   */
  FormatConfiguration?: NumberFormatConfiguration;
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
  NumericalDimensionField?: NumericalDimensionField;

  /**
   * <p>The dimension type field with categorical type columns.</p>
   * @public
   */
  CategoricalDimensionField?: CategoricalDimensionField;

  /**
   * <p>The dimension type field with date type columns.</p>
   * @public
   */
  DateDimensionField?: DateDimensionField;
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
  AggregationFunction?: CategoricalAggregationFunction;

  /**
   * <p>The format configuration of the field.</p>
   * @public
   */
  FormatConfiguration?: StringFormatConfiguration;
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
  AggregationFunction?: DateAggregationFunction;

  /**
   * <p>The format configuration of the field.</p>
   * @public
   */
  FormatConfiguration?: DateTimeFormatConfiguration;
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
  AggregationFunction?: NumericalAggregationFunction;

  /**
   * <p>The format configuration of the field.</p>
   * @public
   */
  FormatConfiguration?: NumberFormatConfiguration;
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
  NumericalMeasureField?: NumericalMeasureField;

  /**
   * <p>The measure type field with categorical type columns.</p>
   * @public
   */
  CategoricalMeasureField?: CategoricalMeasureField;

  /**
   * <p>The measure type field with date type columns.</p>
   * @public
   */
  DateMeasureField?: DateMeasureField;

  /**
   * <p>The calculated measure field only used in pivot tables.</p>
   * @public
   */
  CalculatedMeasureField?: CalculatedMeasureField;
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
  Category?: DimensionField[];

  /**
   * <p>The value field wells of a bar chart. Values are aggregated by
   *             category.</p>
   * @public
   */
  Values?: MeasureField[];

  /**
   * <p>The color (group/color) field well of a bar chart.</p>
   * @public
   */
  Colors?: DimensionField[];

  /**
   * <p>The small multiples field well of a bar chart.</p>
   * @public
   */
  SmallMultiples?: DimensionField[];
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
  BarChartAggregatedFieldWells?: BarChartAggregatedFieldWells;
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
  AvailabilityStatus?: DashboardBehavior;
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
  AvailabilityStatus?: DashboardBehavior;
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
  VisualMenuOption?: VisualMenuOption;

  /**
   * <p>The context menu options for a visual.</p>
   * @public
   */
  ContextMenuOption?: ContextMenuOption;
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
 * <p>The options for the legend setup of a visual.</p>
 * @public
 */
export interface LegendOptions {
  /**
   * <p>Determines whether or not the legend is visible.</p>
   * @public
   */
  Visibility?: Visibility;

  /**
   * <p>The custom title for the legend.</p>
   * @public
   */
  Title?: LabelOptions;

  /**
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
   * @public
   */
  Position?: LegendPosition;

  /**
   * <p>The width of the legend. If this value is omitted, a default width is used when rendering.</p>
   * @public
   */
  Width?: string;

  /**
   * <p>The height of the legend. If this value is omitted, a default height is used when
   *             rendering.</p>
   * @public
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
 * <p>The dynamic configuration of the reference line data configuration.</p>
 * @public
 */
export interface ReferenceLineDynamicDataConfiguration {
  /**
   * <p>The column that the dynamic data targets.</p>
   * @public
   */
  Column: ColumnIdentifier | undefined;

  /**
   * <p>The aggregation function that is used in the dynamic data.</p>
   * @public
   */
  MeasureAggregationFunction?: AggregationFunction;

  /**
   * <p>The calculation that is used in the dynamic data.</p>
   * @public
   */
  Calculation: NumericalAggregationFunction | undefined;
}

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
 * <p>The static data configuration of the reference line data configuration.</p>
 * @public
 */
export interface ReferenceLineStaticDataConfiguration {
  /**
   * <p>The double input of the static data.</p>
   * @public
   */
  Value: number | undefined;
}

/**
 * <p>The data configuration of the reference line.</p>
 * @public
 */
export interface ReferenceLineDataConfiguration {
  /**
   * <p>The static data configuration of the reference line data configuration.</p>
   * @public
   */
  StaticConfiguration?: ReferenceLineStaticDataConfiguration;

  /**
   * <p>The dynamic configuration of the reference line data configuration.</p>
   * @public
   */
  DynamicConfiguration?: ReferenceLineDynamicDataConfiguration;

  /**
   * <p>The axis binding type of the reference line. Choose one of the following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PrimaryY</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SecondaryY</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  AxisBinding?: AxisBinding;

  /**
   * <p>The series type of the reference line data configuration. Choose one of the following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BAR</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LINE</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  SeriesType?: ReferenceLineSeriesType;
}

/**
 * <p>The configuration for a custom label on a <code>ReferenceLine</code>.</p>
 * @public
 */
export interface ReferenceLineCustomLabelConfiguration {
  /**
   * <p>The string text of the custom label.</p>
   * @public
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
 * <p>The value label configuration of the label in a reference line.</p>
 * @public
 */
export interface ReferenceLineValueLabelConfiguration {
  /**
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
   * @public
   */
  RelativePosition?: ReferenceLineValueLabelRelativePosition;

  /**
   * <p>The format configuration of the value label.</p>
   * @public
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
 * <p>The label configuration of a reference line.</p>
 * @public
 */
export interface ReferenceLineLabelConfiguration {
  /**
   * <p>The value label configuration of the label in a reference line.</p>
   * @public
   */
  ValueLabelConfiguration?: ReferenceLineValueLabelConfiguration;

  /**
   * <p>The custom label configuration of the label in a reference line.</p>
   * @public
   */
  CustomLabelConfiguration?: ReferenceLineCustomLabelConfiguration;

  /**
   * <p>The font configuration of the label in a reference line.</p>
   * @public
   */
  FontConfiguration?: FontConfiguration;

  /**
   * <p>The font color configuration of the label in a reference line.</p>
   * @public
   */
  FontColor?: string;

  /**
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
   * @public
   */
  HorizontalPosition?: ReferenceLineLabelHorizontalPosition;

  /**
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
   * @public
   */
  VerticalPosition?: ReferenceLineLabelVerticalPosition;
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
 * <p>The style configuration of the reference
 *             line.</p>
 * @public
 */
export interface ReferenceLineStyleConfiguration {
  /**
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
   * @public
   */
  Pattern?: ReferenceLinePatternType;

  /**
   * <p>The hex color of the reference line.</p>
   * @public
   */
  Color?: string;
}

/**
 * <p>The reference line visual display options.</p>
 * @public
 */
export interface ReferenceLine {
  /**
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
   * @public
   */
  Status?: WidgetStatus;

  /**
   * <p>The data configuration of the reference line.</p>
   * @public
   */
  DataConfiguration: ReferenceLineDataConfiguration | undefined;

  /**
   * <p>The style configuration of the reference line.</p>
   * @public
   */
  StyleConfiguration?: ReferenceLineStyleConfiguration;

  /**
   * <p>The label configuration of the reference line.</p>
   * @public
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
 * <p>The options that determine the title styles for each small multiples
 *             panel.</p>
 * @public
 */
export interface PanelTitleOptions {
  /**
   * <p>Determines whether or not panel titles are displayed.</p>
   * @public
   */
  Visibility?: Visibility;

  /**
   * <p>Configures the display properties of the given text.</p>
   * @public
   */
  FontConfiguration?: FontConfiguration;

  /**
   * <p>Sets the horizontal text alignment of the title within each panel.</p>
   * @public
   */
  HorizontalTextAlignment?: HorizontalTextAlignment;
}

/**
 * <p>A collection of options that configure how each panel displays in a small multiples chart.</p>
 * @public
 */
export interface PanelConfiguration {
  /**
   * <p>Configures the title display within each small multiples panel.</p>
   * @public
   */
  Title?: PanelTitleOptions;

  /**
   * <p>Determines whether or not each panel displays a border.</p>
   * @public
   */
  BorderVisibility?: Visibility;

  /**
   * <p>Sets the line thickness of panel borders.</p>
   * @public
   */
  BorderThickness?: string;

  /**
   * <p>Sets the line style of panel borders.</p>
   * @public
   */
  BorderStyle?: PanelBorderStyle;

  /**
   * <p>Sets the line color of panel borders.</p>
   * @public
   */
  BorderColor?: string;

  /**
   * <p>Determines whether or not negative space between sibling panels is rendered.</p>
   * @public
   */
  GutterVisibility?: Visibility;

  /**
   * <p>Sets the total amount of negative space to display between sibling panels.</p>
   * @public
   */
  GutterSpacing?: string;

  /**
   * <p>Determines whether or not a background for each small multiples panel is rendered.</p>
   * @public
   */
  BackgroundVisibility?: Visibility;

  /**
   * <p>Sets the background color for each panel.</p>
   * @public
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
 * <p>Configures the properties of a chart's axes that are used by small multiples panels.</p>
 * @public
 */
export interface SmallMultiplesAxisProperties {
  /**
   * <p>Determines whether scale of the axes are shared or independent. The default value is <code>SHARED</code>.</p>
   * @public
   */
  Scale?: SmallMultiplesAxisScale;

  /**
   * <p>Defines the placement of the axis. By default, axes are rendered <code>OUTSIDE</code> of the panels. Axes with <code>INDEPENDENT</code> scale are rendered <code>INSIDE</code> the panels.</p>
   * @public
   */
  Placement?: SmallMultiplesAxisPlacement;
}

/**
 * <p>Options that determine the layout and display options of a chart's small multiples.</p>
 * @public
 */
export interface SmallMultiplesOptions {
  /**
   * <p>Sets the maximum number of visible rows to display in the grid of small multiples panels.</p>
   *          <p>The default value is <code>Auto</code>,
   *             which automatically adjusts the rows in the grid
   *             to fit the overall layout and size of the given chart.</p>
   * @public
   */
  MaxVisibleRows?: number;

  /**
   * <p>Sets the maximum number of visible columns to display in the grid of small multiples panels.</p>
   *          <p>The default is <code>Auto</code>, which automatically adjusts the columns in the grid to fit the overall layout and size of the given chart.</p>
   * @public
   */
  MaxVisibleColumns?: number;

  /**
   * <p>Configures the display options for each small multiples panel.</p>
   * @public
   */
  PanelConfiguration?: PanelConfiguration;

  /**
   * <p>The properties of a small multiples X axis.</p>
   * @public
   */
  XAxis?: SmallMultiplesAxisProperties;

  /**
   * <p>The properties of a small multiples Y axis.</p>
   * @public
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
 * <p>The limit configuration of the visual display for an axis.</p>
 * @public
 */
export interface ItemsLimitConfiguration {
  /**
   * <p>The limit on how many items of a field are showed in the chart. For
   *             example, the number of slices that are displayed in a pie chart.</p>
   * @public
   */
  ItemsLimit?: number;

  /**
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
   * @public
   */
  OtherCategories?: OtherCategories;
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
  AggregationFunction?: AggregationFunction;
}

/**
 * <p>The sort configuration for a field in a
 *             field well.</p>
 * @public
 */
export interface FieldSort {
  /**
   * <p>The sort configuration target field.</p>
   * @public
   */
  FieldId: string | undefined;

  /**
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
   * @public
   */
  Direction: SortDirection | undefined;
}

/**
 * <p>The field sort options in a chart configuration.</p>
 * @public
 */
export interface FieldSortOptions {
  /**
   * <p>The sort configuration for a field in a field well.</p>
   * @public
   */
  FieldSort?: FieldSort;

  /**
   * <p>The sort configuration for a column that is not used in a field well.</p>
   * @public
   */
  ColumnSort?: ColumnSort;
}

/**
 * <p>sort-configuration-description</p>
 * @public
 */
export interface BarChartSortConfiguration {
  /**
   * <p>The sort configuration of category fields.</p>
   * @public
   */
  CategorySort?: FieldSortOptions[];

  /**
   * <p>The limit on the number of categories displayed in a bar chart.</p>
   * @public
   */
  CategoryItemsLimit?: ItemsLimitConfiguration;

  /**
   * <p>The sort configuration of color fields in a bar chart.</p>
   * @public
   */
  ColorSort?: FieldSortOptions[];

  /**
   * <p>The limit on the number of values displayed in a bar chart.</p>
   * @public
   */
  ColorItemsLimit?: ItemsLimitConfiguration;

  /**
   * <p>The sort configuration of the small multiples field.</p>
   * @public
   */
  SmallMultiplesSort?: FieldSortOptions[];

  /**
   * <p>The limit on the number of small multiples panels that are displayed.</p>
   * @public
   */
  SmallMultiplesLimitConfiguration?: ItemsLimitConfiguration;
}

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
 * <p>The tooltip item for the columns that are not part of a field well.</p>
 * @public
 */
export interface ColumnTooltipItem {
  /**
   * <p>The target column of the tooltip item.</p>
   * @public
   */
  Column: ColumnIdentifier | undefined;

  /**
   * <p>The label of the tooltip item.</p>
   * @public
   */
  Label?: string;

  /**
   * <p>The visibility of the tooltip item.</p>
   * @public
   */
  Visibility?: Visibility;

  /**
   * <p>The aggregation function of the column tooltip item.</p>
   * @public
   */
  Aggregation?: AggregationFunction;

  /**
   * <p>Determines the target of the column tooltip item in a combo chart visual.</p>
   * @public
   */
  TooltipTarget?: TooltipTarget;
}

/**
 * <p>The tooltip item for the fields.</p>
 * @public
 */
export interface FieldTooltipItem {
  /**
   * <p>The unique ID of the field that is targeted by the tooltip.</p>
   * @public
   */
  FieldId: string | undefined;

  /**
   * <p>The label of the tooltip item.</p>
   * @public
   */
  Label?: string;

  /**
   * <p>The visibility of the tooltip item.</p>
   * @public
   */
  Visibility?: Visibility;

  /**
   * <p>Determines the target of the field tooltip item in a combo chart visual.</p>
   * @public
   */
  TooltipTarget?: TooltipTarget;
}

/**
 * <p>The tooltip.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 * @public
 */
export interface TooltipItem {
  /**
   * <p>The tooltip item for the fields.</p>
   * @public
   */
  FieldTooltipItem?: FieldTooltipItem;

  /**
   * <p>The tooltip item for the columns that are not part of a field well.</p>
   * @public
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
 * <p>The setup for the detailed tooltip.</p>
 * @public
 */
export interface FieldBasedTooltip {
  /**
   * <p>The visibility of <code>Show aggregations</code>.</p>
   * @public
   */
  AggregationVisibility?: Visibility;

  /**
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
   * @public
   */
  TooltipTitleType?: TooltipTitleType;

  /**
   * <p>The fields configuration in the
   *             tooltip.</p>
   * @public
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
 * <p>The display options for the visual tooltip.</p>
 * @public
 */
export interface TooltipOptions {
  /**
   * <p>Determines whether or not the tooltip is visible.</p>
   * @public
   */
  TooltipVisibility?: Visibility;

  /**
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
   * @public
   */
  SelectedTooltipType?: SelectedTooltipType;

  /**
   * <p>The setup for the detailed tooltip. The tooltip setup is always saved. The display type is decided based on the tooltip type.</p>
   * @public
   */
  FieldBasedTooltip?: FieldBasedTooltip;
}

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
 * <p>The type of the data path value.</p>
 * @public
 */
export interface DataPathType {
  /**
   * <p>The type of data path value utilized in a pivot table. Choose one of the following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>HIERARCHY_ROWS_LAYOUT_COLUMN</code> - The type of data path for the rows layout column, when <code>RowsLayout</code> is set to <code>HIERARCHY</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MULTIPLE_ROW_METRICS_COLUMN</code> - The type of data path for the metric column when the row is set to Metric Placement.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EMPTY_COLUMN_HEADER</code> - The type of data path for the column with empty column header, when there is no field in <code>ColumnsFieldWell</code> and the row is set to Metric Placement.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COUNT_METRIC_COLUMN</code> - The type of data path for the column with <code>COUNT</code> as the metric, when there is no field in the <code>ValuesFieldWell</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  PivotTableDataPathType?: PivotTableDataPathType;
}

/**
 * <p>The data path that needs to be sorted.</p>
 * @public
 */
export interface DataPathValue {
  /**
   * <p>The field ID of the field that needs to be sorted.</p>
   * @public
   */
  FieldId?: string;

  /**
   * <p>The actual value of the field that needs to be sorted.</p>
   * @public
   */
  FieldValue?: string;

  /**
   * <p>The type configuration of the field.</p>
   * @public
   */
  DataPathType?: DataPathType;
}

/**
 * <p>The color map that determines the color options for a particular element.</p>
 * @public
 */
export interface DataPathColor {
  /**
   * <p>The element that the color needs to be applied to.</p>
   * @public
   */
  Element: DataPathValue | undefined;

  /**
   * <p>The color that needs to be applied to the element.</p>
   * @public
   */
  Color: string | undefined;

  /**
   * <p>The time granularity of the field that the color needs to be applied to.</p>
   * @public
   */
  TimeGranularity?: TimeGranularity;
}

/**
 * <p>The visual display options for the visual palette.</p>
 * @public
 */
export interface VisualPalette {
  /**
   * <p>The chart color options for the visual palette.</p>
   * @public
   */
  ChartColor?: string;

  /**
   * <p>The color map options for the visual palette.</p>
   * @public
   */
  ColorMap?: DataPathColor[];
}

/**
 * <p>The configuration of a <code>BarChartVisual</code>.</p>
 * @public
 */
export interface BarChartConfiguration {
  /**
   * <p>The field wells of the visual.</p>
   * @public
   */
  FieldWells?: BarChartFieldWells;

  /**
   * <p>The sort configuration of a <code>BarChartVisual</code>.</p>
   * @public
   */
  SortConfiguration?: BarChartSortConfiguration;

  /**
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
   * @public
   */
  Orientation?: BarChartOrientation;

  /**
   * <p>Determines the arrangement of the bars. The orientation and arrangement of bars determine the type of bar that is used in the visual.</p>
   * @public
   */
  BarsArrangement?: BarsArrangement;

  /**
   * <p>The palette (chart color) display setup of the visual.</p>
   * @public
   */
  VisualPalette?: VisualPalette;

  /**
   * <p>The small multiples setup for the visual.</p>
   * @public
   */
  SmallMultiplesOptions?: SmallMultiplesOptions;

  /**
   * <p>The label display options (grid line, range, scale, axis step) for bar chart category.</p>
   * @public
   */
  CategoryAxis?: AxisDisplayOptions;

  /**
   * <p>The label options (label text, label visibility and sort icon visibility) for a bar chart.</p>
   * @public
   */
  CategoryLabelOptions?: ChartAxisLabelOptions;

  /**
   * <p>The label display options (grid line, range, scale, axis step) for a bar chart value.</p>
   * @public
   */
  ValueAxis?: AxisDisplayOptions;

  /**
   * <p>The label options (label text, label visibility and sort icon visibility) for a bar chart value.</p>
   * @public
   */
  ValueLabelOptions?: ChartAxisLabelOptions;

  /**
   * <p>The label options (label text, label visibility and sort icon visibility) for a color that is used in a bar chart.</p>
   * @public
   */
  ColorLabelOptions?: ChartAxisLabelOptions;

  /**
   * <p>The legend display setup of the visual.</p>
   * @public
   */
  Legend?: LegendOptions;

  /**
   * <p>The options that determine if visual data labels are displayed.</p>
   * @public
   */
  DataLabels?: DataLabelOptions;

  /**
   * <p>The tooltip display setup of the visual.</p>
   * @public
   */
  Tooltip?: TooltipOptions;

  /**
   * <p>The reference line setup of the visual.</p>
   * @public
   */
  ReferenceLines?: ReferenceLine[];

  /**
   * <p>The contribution analysis (anomaly configuration) setup of the visual.</p>
   * @public
   */
  ContributionAnalysisDefaults?: ContributionAnalysisDefault[];

  /**
   * <p>The general visual interactions setup for a visual.</p>
   * @public
   */
  Interactions?: VisualInteractionOptions;
}

/**
 * <p>The numeric equality type drill down filter.</p>
 * @public
 */
export interface CategoryDrillDownFilter {
  /**
   * <p>The column that the filter is applied to.</p>
   * @public
   */
  Column: ColumnIdentifier | undefined;

  /**
   * <p>A list of the string inputs that are the values of the category drill down filter.</p>
   * @public
   */
  CategoryValues: string[] | undefined;
}

/**
 * <p>The category drill down filter.</p>
 * @public
 */
export interface NumericEqualityDrillDownFilter {
  /**
   * <p>The column that the filter is applied to.</p>
   * @public
   */
  Column: ColumnIdentifier | undefined;

  /**
   * <p>The value of the double input numeric drill down filter.</p>
   * @public
   */
  Value: number | undefined;
}

/**
 * <p>The time range drill down filter.</p>
 * @public
 */
export interface TimeRangeDrillDownFilter {
  /**
   * <p>The column that the filter is applied to.</p>
   * @public
   */
  Column: ColumnIdentifier | undefined;

  /**
   * <p>The minimum value for the filter value range.</p>
   * @public
   */
  RangeMinimum: Date | undefined;

  /**
   * <p>The maximum value for the filter value range.</p>
   * @public
   */
  RangeMaximum: Date | undefined;

  /**
   * <p>The level of time precision that is used to aggregate <code>DateTime</code> values.</p>
   * @public
   */
  TimeGranularity: TimeGranularity | undefined;
}

/**
 * <p>The drill down filter for the column hierarchies.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 * @public
 */
export interface DrillDownFilter {
  /**
   * <p>The numeric equality type drill down filter. This filter is used for number type columns.</p>
   * @public
   */
  NumericEqualityFilter?: NumericEqualityDrillDownFilter;

  /**
   * <p>The category type drill down filter. This filter is used for string type columns.</p>
   * @public
   */
  CategoryFilter?: CategoryDrillDownFilter;

  /**
   * <p>The time range drill down filter. This filter is used for date time columns.</p>
   * @public
   */
  TimeRangeFilter?: TimeRangeDrillDownFilter;
}

/**
 * <p>The option that determines the hierarchy of any <code>DateTime</code> fields.</p>
 * @public
 */
export interface DateTimeHierarchy {
  /**
   * <p>The hierarchy ID of the <code>DateTime</code> hierarchy.</p>
   * @public
   */
  HierarchyId: string | undefined;

  /**
   * <p>The option that determines the drill down filters for the
   *                 <code>DateTime</code> hierarchy.</p>
   * @public
   */
  DrillDownFilters?: DrillDownFilter[];
}

/**
 * <p>The option that determines the hierarchy of the fields that are built within a visual's field wells. These fields can't be duplicated to other visuals.</p>
 * @public
 */
export interface ExplicitHierarchy {
  /**
   * <p>The hierarchy ID of the explicit hierarchy.</p>
   * @public
   */
  HierarchyId: string | undefined;

  /**
   * <p>The list of columns that define the explicit hierarchy.</p>
   * @public
   */
  Columns: ColumnIdentifier[] | undefined;

  /**
   * <p>The option that determines the drill down filters for the explicit hierarchy.</p>
   * @public
   */
  DrillDownFilters?: DrillDownFilter[];
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
