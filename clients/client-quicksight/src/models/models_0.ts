// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { QuickSightServiceException as __BaseException } from "./QuickSightServiceException";

/**
 * <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct access keys.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
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
 * <p>The Amazon QuickSight customizations associated with your Amazon Web Services account or a QuickSight namespace in a specific Amazon Web Services Region.</p>
 */
export interface AccountCustomization {
  /**
   * <p>The default theme for this Amazon QuickSight subscription.</p>
   */
  DefaultTheme?: string;

  /**
   * <p>The default email customization template.</p>
   */
  DefaultEmailCustomizationTemplate?: string;
}

export enum Edition {
  ENTERPRISE = "ENTERPRISE",
  ENTERPRISE_AND_Q = "ENTERPRISE_AND_Q",
  STANDARD = "STANDARD",
}

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
 */
export interface AccountInfo {
  /**
   * <p>The account name that you provided for the Amazon QuickSight subscription in your
   *                 Amazon Web Services account. You create this name when you sign up for Amazon QuickSight. It's unique over all of Amazon Web Services, and it appears only when
   *             users sign in.</p>
   */
  AccountName?: string;

  /**
   * <p>The edition of your Amazon QuickSight account.</p>
   */
  Edition?: Edition | string;

  /**
   * <p>The email address that will be used for Amazon QuickSight to send notifications regarding your Amazon Web Services account or Amazon QuickSight subscription.</p>
   */
  NotificationEmail?: string;

  /**
   * <p>The way that your Amazon QuickSight account is authenticated.</p>
   */
  AuthenticationType?: string;

  /**
   * <p>The status of your account subscription.</p>
   */
  AccountSubscriptionStatus?: string;
}

/**
 * <p>The Amazon QuickSight settings associated with your Amazon Web Services account.</p>
 */
export interface AccountSettings {
  /**
   * <p>The "account name" you provided for the Amazon QuickSight subscription in your Amazon Web Services account.
   *             You create this name when you sign up for Amazon QuickSight. It is unique in all of Amazon Web Services and
   *             it appears only when users sign in.</p>
   */
  AccountName?: string;

  /**
   * <p>The edition of Amazon QuickSight that you're currently subscribed to:
   *         Enterprise edition or Standard edition.</p>
   */
  Edition?: Edition | string;

  /**
   * <p>The default Amazon QuickSight namespace for your Amazon Web Services account. </p>
   */
  DefaultNamespace?: string;

  /**
   * <p>The main notification email for your Amazon QuickSight subscription.</p>
   */
  NotificationEmail?: string;

  /**
   * <p>A Boolean value that indicates whether public sharing is turned on for an Amazon QuickSight account. For more information about turning on public sharing, see <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdatePublicSharingSettings.html">UpdatePublicSharingSettings</a>.</p>
   */
  PublicSharingEnabled?: boolean;

  /**
   * <p>A boolean value that determines whether or not an Amazon QuickSight account can be deleted. A <code>True</code> value doesn't allow the account to be deleted and results in an error message if a user tries to make a <code>DeleteAccountSubsctiption</code> request. A <code>False</code> value will allow the ccount to be deleted. </p>
   */
  TerminationProtectionEnabled?: boolean;
}

/**
 * <p>The active Identity and Access Management (IAM) policy assignment.</p>
 */
export interface ActiveIAMPolicyAssignment {
  /**
   * <p>A name for the IAM policy assignment.</p>
   */
  AssignmentName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  PolicyArn?: string;
}

export enum DashboardBehavior {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * <p>An ad hoc (one-time) filtering option.</p>
 */
export interface AdHocFilteringOption {
  /**
   * <p>Availability status.</p>
   */
  AvailabilityStatus?: DashboardBehavior | string;
}

export enum CategoricalAggregationFunction {
  COUNT = "COUNT",
  DISTINCT_COUNT = "DISTINCT_COUNT",
}

export enum DateAggregationFunction {
  COUNT = "COUNT",
  DISTINCT_COUNT = "DISTINCT_COUNT",
  MAX = "MAX",
  MIN = "MIN",
}

/**
 * <p>An aggregation based on the percentile of values in a dimension or measure.</p>
 */
export interface PercentileAggregation {
  /**
   * <p>The percentile value. This value can be any numeric constant 0–100. A percentile value of 50 computes the median value of the measure.</p>
   */
  PercentileValue?: number;
}

export enum SimpleNumericalAggregationFunction {
  AVERAGE = "AVERAGE",
  COUNT = "COUNT",
  DISTINCT_COUNT = "DISTINCT_COUNT",
  MAX = "MAX",
  MEDIAN = "MEDIAN",
  MIN = "MIN",
  STDEV = "STDEV",
  STDEVP = "STDEVP",
  SUM = "SUM",
  VAR = "VAR",
  VARP = "VARP",
}

/**
 * <p>Aggregation for numerical values.</p>
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
   */
  SimpleNumericalAggregation?: SimpleNumericalAggregationFunction | string;

  /**
   * <p>An aggregation based on the percentile of values in a dimension or measure.</p>
   */
  PercentileAggregation?: PercentileAggregation;
}

/**
 * <p>An aggregation function aggregates values from a dimension or measure.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface AggregationFunction {
  /**
   * <p>Aggregation for numerical values.</p>
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
   */
  CategoricalAggregationFunction?: CategoricalAggregationFunction | string;

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
   */
  DateAggregationFunction?: DateAggregationFunction | string;
}

/**
 * <p>A column of a data set.</p>
 */
export interface ColumnIdentifier {
  /**
   * <p>The data set that the column belongs to.</p>
   */
  DataSetIdentifier: string | undefined;

  /**
   * <p>The name of the column.</p>
   */
  ColumnName: string | undefined;
}

export enum SortDirection {
  ASC = "ASC",
  DESC = "DESC",
}

/**
 * <p>The configuration options to sort aggregated values.</p>
 */
export interface AggregationSortConfiguration {
  /**
   * <p>The column that determines the sort order of aggregated values.</p>
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
   */
  SortDirection: SortDirection | string | undefined;

  /**
   * <p>The function that aggregates the values in <code>Column</code>.</p>
   */
  AggregationFunction: AggregationFunction | undefined;
}

/**
 * <p>The parameters for OpenSearch.</p>
 */
export interface AmazonElasticsearchParameters {
  /**
   * <p>The OpenSearch domain.</p>
   */
  Domain: string | undefined;
}

/**
 * <p>The parameters for OpenSearch.</p>
 */
export interface AmazonOpenSearchParameters {
  /**
   * <p>The OpenSearch domain.</p>
   */
  Domain: string | undefined;
}

export enum AnalysisErrorType {
  ACCESS_DENIED = "ACCESS_DENIED",
  COLUMN_GEOGRAPHIC_ROLE_MISMATCH = "COLUMN_GEOGRAPHIC_ROLE_MISMATCH",
  COLUMN_REPLACEMENT_MISSING = "COLUMN_REPLACEMENT_MISSING",
  COLUMN_TYPE_MISMATCH = "COLUMN_TYPE_MISMATCH",
  DATA_SET_NOT_FOUND = "DATA_SET_NOT_FOUND",
  INTERNAL_FAILURE = "INTERNAL_FAILURE",
  PARAMETER_NOT_FOUND = "PARAMETER_NOT_FOUND",
  PARAMETER_TYPE_INVALID = "PARAMETER_TYPE_INVALID",
  PARAMETER_VALUE_INCOMPATIBLE = "PARAMETER_VALUE_INCOMPATIBLE",
  SOURCE_NOT_FOUND = "SOURCE_NOT_FOUND",
}

/**
 * <p>An object, structure, or sub-structure of an analysis, template, or dashboard.</p>
 */
export interface Entity {
  /**
   * <p>The hierarchical path of the entity within the analysis, template, or dashboard definition tree.</p>
   */
  Path?: string;
}

/**
 * <p>Analysis error.</p>
 */
export interface AnalysisError {
  /**
   * <p>The type of the analysis error.</p>
   */
  Type?: AnalysisErrorType | string;

  /**
   * <p>The message associated with the analysis error.</p>
   */
  Message?: string;

  /**
   * <p></p>
   */
  ViolatedEntities?: Entity[];
}

/**
 * <p>A <i>sheet</i>, which is an object that contains a set of visuals that
 *             are viewed together on one page in Amazon QuickSight. Every analysis and dashboard
 *             contains at least one sheet. Each sheet contains at least one visualization widget, for
 *             example a chart, pivot table, or narrative insight. Sheets can be associated with other
 *             components, such as controls, filters, and so on.</p>
 */
export interface Sheet {
  /**
   * <p>The unique identifier associated with a sheet.</p>
   */
  SheetId?: string;

  /**
   * <p>The name of a sheet. This name is displayed on the sheet's tab in the Amazon QuickSight
   *             console.</p>
   */
  Name?: string;
}

export enum ResourceStatus {
  CREATION_FAILED = "CREATION_FAILED",
  CREATION_IN_PROGRESS = "CREATION_IN_PROGRESS",
  CREATION_SUCCESSFUL = "CREATION_SUCCESSFUL",
  DELETED = "DELETED",
  UPDATE_FAILED = "UPDATE_FAILED",
  UPDATE_IN_PROGRESS = "UPDATE_IN_PROGRESS",
  UPDATE_SUCCESSFUL = "UPDATE_SUCCESSFUL",
}

/**
 * <p>Metadata structure for an analysis in Amazon QuickSight</p>
 */
export interface Analysis {
  /**
   * <p>The ID of the analysis.</p>
   */
  AnalysisId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the analysis.</p>
   */
  Arn?: string;

  /**
   * <p>The descriptive name of the analysis.</p>
   */
  Name?: string;

  /**
   * <p>Status associated with the analysis.</p>
   */
  Status?: ResourceStatus | string;

  /**
   * <p>Errors associated with the analysis.</p>
   */
  Errors?: AnalysisError[];

  /**
   * <p>The ARNs of the datasets of the analysis.</p>
   */
  DataSetArns?: string[];

  /**
   * <p>The ARN of the theme of the analysis.</p>
   */
  ThemeArn?: string;

  /**
   * <p>The time that the analysis was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The time that the analysis was last updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>A list of the associated sheets with the unique identifier and name of each sheet.</p>
   */
  Sheets?: Sheet[];
}

/**
 * <p>The options that determine the sizing of the canvas used in a free-form layout.</p>
 */
export interface FreeFormLayoutScreenCanvasSizeOptions {
  /**
   * <p>The width that the view port will be optimized for when the layout renders.</p>
   */
  OptimizedViewPortWidth: string | undefined;
}

/**
 * <p>Configuration options for the canvas of a free-form layout.</p>
 */
export interface FreeFormLayoutCanvasSizeOptions {
  /**
   * <p>The options that determine the sizing of the canvas used in a free-form layout.</p>
   */
  ScreenCanvasSizeOptions?: FreeFormLayoutScreenCanvasSizeOptions;
}

/**
 * <p>The options that determine the default settings of a free-form layout configuration.</p>
 */
export interface DefaultFreeFormLayoutConfiguration {
  /**
   * <p>Determines the screen canvas size options for a free-form layout.</p>
   */
  CanvasSizeOptions: FreeFormLayoutCanvasSizeOptions | undefined;
}

export enum ResizeOption {
  FIXED = "FIXED",
  RESPONSIVE = "RESPONSIVE",
}

/**
 * <p>The options that determine the sizing of the canvas used in a grid layout.</p>
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
   */
  ResizeOption: ResizeOption | string | undefined;

  /**
   * <p>The width that the view port will be optimized for when the layout renders.</p>
   */
  OptimizedViewPortWidth?: string;
}

/**
 * <p>Configuration options for the canvas of a grid layout.</p>
 */
export interface GridLayoutCanvasSizeOptions {
  /**
   * <p>The options that determine the sizing of the canvas used in a grid layout.</p>
   */
  ScreenCanvasSizeOptions?: GridLayoutScreenCanvasSizeOptions;
}

/**
 * <p>The options that determine the default settings for a grid layout configuration.</p>
 */
export interface DefaultGridLayoutConfiguration {
  /**
   * <p>Determines the screen canvas size options for a grid layout.</p>
   */
  CanvasSizeOptions: GridLayoutCanvasSizeOptions | undefined;
}

/**
 * <p>The options that determine the default settings for interactive layout configuration.</p>
 */
export interface DefaultInteractiveLayoutConfiguration {
  /**
   * <p>The options that determine the default settings for a grid layout configuration.</p>
   */
  Grid?: DefaultGridLayoutConfiguration;

  /**
   * <p>The options that determine the default settings of a free-form layout configuration.</p>
   */
  FreeForm?: DefaultFreeFormLayoutConfiguration;
}

/**
 * <p>The configuration of spacing (often a margin or padding).</p>
 */
export interface Spacing {
  /**
   * <p>Define the top spacing.</p>
   */
  Top?: string;

  /**
   * <p>Define the bottom spacing.</p>
   */
  Bottom?: string;

  /**
   * <p>Define the left spacing.</p>
   */
  Left?: string;

  /**
   * <p>Define the right spacing.</p>
   */
  Right?: string;
}

export enum PaperOrientation {
  LANDSCAPE = "LANDSCAPE",
  PORTRAIT = "PORTRAIT",
}

export enum PaperSize {
  A0 = "A0",
  A1 = "A1",
  A2 = "A2",
  A3 = "A3",
  A4 = "A4",
  A5 = "A5",
  JIS_B4 = "JIS_B4",
  JIS_B5 = "JIS_B5",
  US_LEGAL = "US_LEGAL",
  US_LETTER = "US_LETTER",
  US_TABLOID_LEDGER = "US_TABLOID_LEDGER",
}

/**
 * <p>The options for a paper canvas of a section-based layout.</p>
 */
export interface SectionBasedLayoutPaperCanvasSizeOptions {
  /**
   * <p>The paper size that is used to define canvas dimensions.</p>
   */
  PaperSize?: PaperSize | string;

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
   */
  PaperOrientation?: PaperOrientation | string;

  /**
   * <p>Defines the spacing between the canvas content and the top, bottom, left, and right edges.</p>
   */
  PaperMargin?: Spacing;
}

/**
 * <p>The options for the canvas of a section-based layout.</p>
 */
export interface SectionBasedLayoutCanvasSizeOptions {
  /**
   * <p>The options for a paper canvas of a section-based layout.</p>
   */
  PaperCanvasSizeOptions?: SectionBasedLayoutPaperCanvasSizeOptions;
}

/**
 * <p>The options that determine the default settings for a section-based layout configuration.</p>
 */
export interface DefaultSectionBasedLayoutConfiguration {
  /**
   * <p>Determines the screen canvas size options for a section-based layout.</p>
   */
  CanvasSizeOptions: SectionBasedLayoutCanvasSizeOptions | undefined;
}

/**
 * <p>The options that determine the default settings for a paginated layout configuration.</p>
 */
export interface DefaultPaginatedLayoutConfiguration {
  /**
   * <p>The options that determine the default settings for a section-based layout configuration.</p>
   */
  SectionBased?: DefaultSectionBasedLayoutConfiguration;
}

export enum SheetContentType {
  INTERACTIVE = "INTERACTIVE",
  PAGINATED = "PAGINATED",
}

/**
 * <p>The configuration for default new sheet settings.</p>
 */
export interface DefaultNewSheetConfiguration {
  /**
   * <p>The options that determine the default settings for interactive layout configuration.</p>
   */
  InteractiveLayoutConfiguration?: DefaultInteractiveLayoutConfiguration;

  /**
   * <p>The options that determine the default settings for a paginated layout configuration.</p>
   */
  PaginatedLayoutConfiguration?: DefaultPaginatedLayoutConfiguration;

  /**
   * <p>The option that determines the sheet content type.</p>
   */
  SheetContentType?: SheetContentType | string;
}

/**
 * <p>The configuration for default analysis settings.</p>
 */
export interface AnalysisDefaults {
  /**
   * <p>The configuration for default new sheet settings.</p>
   */
  DefaultNewSheetConfiguration: DefaultNewSheetConfiguration | undefined;
}

/**
 * <p>The calculated field of an analysis.</p>
 */
export interface CalculatedField {
  /**
   * <p>The data set that is used in this calculated field.</p>
   */
  DataSetIdentifier: string | undefined;

  /**
   * <p>The name of the calculated field.</p>
   */
  Name: string | undefined;

  /**
   * <p>The expression of the calculated field.</p>
   */
  Expression: string | undefined;
}

/**
 * <p>The options that determine the null value format configuration.</p>
 */
export interface NullValueFormatConfiguration {
  /**
   * <p>Determines the null string of null values.</p>
   */
  NullString: string | undefined;
}

/**
 * <p>The option that determines the decimal places configuration.</p>
 */
export interface DecimalPlacesConfiguration {
  /**
   * <p>The values of the decimal places.</p>
   */
  DecimalPlaces: number | undefined;
}

export enum NegativeValueDisplayMode {
  NEGATIVE = "NEGATIVE",
  POSITIVE = "POSITIVE",
}

/**
 * <p>The options that determine the negative value configuration.</p>
 */
export interface NegativeValueConfiguration {
  /**
   * <p>Determines the display mode of the negative value configuration.</p>
   */
  DisplayMode: NegativeValueDisplayMode | string | undefined;
}

export enum NumberScale {
  AUTO = "AUTO",
  BILLIONS = "BILLIONS",
  MILLIONS = "MILLIONS",
  NONE = "NONE",
  THOUSANDS = "THOUSANDS",
  TRILLIONS = "TRILLIONS",
}

export enum NumericSeparatorSymbol {
  COMMA = "COMMA",
  DOT = "DOT",
  SPACE = "SPACE",
}

export enum Visibility {
  HIDDEN = "HIDDEN",
  VISIBLE = "VISIBLE",
}

/**
 * <p>The options that determine the thousands separator configuration.</p>
 */
export interface ThousandSeparatorOptions {
  /**
   * <p>Determines the thousands separator symbol.</p>
   */
  Symbol?: NumericSeparatorSymbol | string;

  /**
   * <p>Determines the visibility of the thousands separator.</p>
   */
  Visibility?: Visibility | string;
}

/**
 * <p>The options that determine the numeric separator configuration.</p>
 */
export interface NumericSeparatorConfiguration {
  /**
   * <p>Determines the decimal separator.</p>
   */
  DecimalSeparator?: NumericSeparatorSymbol | string;

  /**
   * <p>The options that determine the thousands separator configuration.</p>
   */
  ThousandsSeparator?: ThousandSeparatorOptions;
}

/**
 * <p>The options that determine the currency display format configuration.</p>
 */
export interface CurrencyDisplayFormatConfiguration {
  /**
   * <p>Determines the prefix value of the currency format.</p>
   */
  Prefix?: string;

  /**
   * <p>Determines the suffix value of the currency format.</p>
   */
  Suffix?: string;

  /**
   * <p>The options that determine the numeric separator configuration.</p>
   */
  SeparatorConfiguration?: NumericSeparatorConfiguration;

  /**
   * <p>Determines the symbol for the currency format.</p>
   */
  Symbol?: string;

  /**
   * <p>The option that determines the decimal places configuration.</p>
   */
  DecimalPlacesConfiguration?: DecimalPlacesConfiguration;

  /**
   * <p>Determines the number scale value for the currency format.</p>
   */
  NumberScale?: NumberScale | string;

  /**
   * <p>The options that determine the negative value configuration.</p>
   */
  NegativeValueConfiguration?: NegativeValueConfiguration;

  /**
   * <p>The options that determine the null value format configuration.</p>
   */
  NullValueFormatConfiguration?: NullValueFormatConfiguration;
}

/**
 * <p>The options that determine the number display format configuration.</p>
 */
export interface NumberDisplayFormatConfiguration {
  /**
   * <p>Determines the prefix value of the number format.</p>
   */
  Prefix?: string;

  /**
   * <p>Determines the suffix value of the number format.</p>
   */
  Suffix?: string;

  /**
   * <p>The options that determine the numeric separator configuration.</p>
   */
  SeparatorConfiguration?: NumericSeparatorConfiguration;

  /**
   * <p>The option that determines the decimal places configuration.</p>
   */
  DecimalPlacesConfiguration?: DecimalPlacesConfiguration;

  /**
   * <p>Determines the number scale value of the number format.</p>
   */
  NumberScale?: NumberScale | string;

  /**
   * <p>The options that determine the negative value configuration.</p>
   */
  NegativeValueConfiguration?: NegativeValueConfiguration;

  /**
   * <p>The options that determine the null value format configuration.</p>
   */
  NullValueFormatConfiguration?: NullValueFormatConfiguration;
}

/**
 * <p>The options that determine the percentage display format configuration.</p>
 */
export interface PercentageDisplayFormatConfiguration {
  /**
   * <p>Determines the prefix value of the percentage format.</p>
   */
  Prefix?: string;

  /**
   * <p>Determines the suffix value of the percentage format.</p>
   */
  Suffix?: string;

  /**
   * <p>The options that determine the numeric separator configuration.</p>
   */
  SeparatorConfiguration?: NumericSeparatorConfiguration;

  /**
   * <p>The option that determines the decimal places configuration.</p>
   */
  DecimalPlacesConfiguration?: DecimalPlacesConfiguration;

  /**
   * <p>The options that determine the negative value configuration.</p>
   */
  NegativeValueConfiguration?: NegativeValueConfiguration;

  /**
   * <p>The options that determine the null value format configuration.</p>
   */
  NullValueFormatConfiguration?: NullValueFormatConfiguration;
}

/**
 * <p>The options that determine the numeric format configuration.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface NumericFormatConfiguration {
  /**
   * <p>The options that determine the number display format configuration.</p>
   */
  NumberDisplayFormatConfiguration?: NumberDisplayFormatConfiguration;

  /**
   * <p>The options that determine the currency display format configuration.</p>
   */
  CurrencyDisplayFormatConfiguration?: CurrencyDisplayFormatConfiguration;

  /**
   * <p>The options that determine the percentage display format configuration.</p>
   */
  PercentageDisplayFormatConfiguration?: PercentageDisplayFormatConfiguration;
}

/**
 * <p>Formatting configuration for <code>DateTime</code> fields.</p>
 */
export interface DateTimeFormatConfiguration {
  /**
   * <p>Determines the <code>DateTime</code> format.</p>
   */
  DateTimeFormat?: string;

  /**
   * <p>The options that determine the null value format configuration.</p>
   */
  NullValueFormatConfiguration?: NullValueFormatConfiguration;

  /**
   * <p>The formatting configuration for numeric <code>DateTime</code> fields.</p>
   */
  NumericFormatConfiguration?: NumericFormatConfiguration;
}

/**
 * <p>Formatting configuration for number fields.</p>
 */
export interface NumberFormatConfiguration {
  /**
   * <p>The options that determine the numeric format configuration.</p>
   */
  FormatConfiguration?: NumericFormatConfiguration;
}

/**
 * <p>Formatting configuration for string fields.</p>
 */
export interface StringFormatConfiguration {
  /**
   * <p>The options that determine the null value format configuration.</p>
   */
  NullValueFormatConfiguration?: NullValueFormatConfiguration;

  /**
   * <p>The formatting configuration for numeric strings.</p>
   */
  NumericFormatConfiguration?: NumericFormatConfiguration;
}

/**
 * <p>The formatting configuration for all types of field.</p>
 */
export interface FormatConfiguration {
  /**
   * <p>Formatting configuration for string fields.</p>
   */
  StringFormatConfiguration?: StringFormatConfiguration;

  /**
   * <p>Formatting configuration for number fields.</p>
   */
  NumberFormatConfiguration?: NumberFormatConfiguration;

  /**
   * <p>Formatting configuration for <code>DateTime</code> fields.</p>
   */
  DateTimeFormatConfiguration?: DateTimeFormatConfiguration;
}

export enum ColumnRole {
  DIMENSION = "DIMENSION",
  MEASURE = "MEASURE",
}

/**
 * <p>The general configuration of a column.</p>
 */
export interface ColumnConfiguration {
  /**
   * <p>The column.</p>
   */
  Column: ColumnIdentifier | undefined;

  /**
   * <p>The format configuration of a column.</p>
   */
  FormatConfiguration?: FormatConfiguration;

  /**
   * <p>The role of the column.</p>
   */
  Role?: ColumnRole | string;
}

/**
 * <p>A data set.</p>
 */
export interface DataSetIdentifierDeclaration {
  /**
   * <p>The identifier of the data set, typically the data set's name.</p>
   */
  Identifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the data set.</p>
   */
  DataSetArn: string | undefined;
}

export enum CrossDatasetTypes {
  ALL_DATASETS = "ALL_DATASETS",
  SINGLE_DATASET = "SINGLE_DATASET",
}

export enum CategoryFilterMatchOperator {
  CONTAINS = "CONTAINS",
  DOES_NOT_CONTAIN = "DOES_NOT_CONTAIN",
  DOES_NOT_EQUAL = "DOES_NOT_EQUAL",
  ENDS_WITH = "ENDS_WITH",
  EQUALS = "EQUALS",
  STARTS_WITH = "STARTS_WITH",
}

export enum FilterNullOption {
  ALL_VALUES = "ALL_VALUES",
  NON_NULLS_ONLY = "NON_NULLS_ONLY",
  NULLS_ONLY = "NULLS_ONLY",
}

export enum CategoryFilterSelectAllOptions {
  FILTER_ALL_VALUES = "FILTER_ALL_VALUES",
}

/**
 * <p>A custom filter that filters based on a single value. This filter can be partially matched.</p>
 */
export interface CustomFilterConfiguration {
  /**
   * <p>The match operator that is used to determine if a filter should be applied.</p>
   */
  MatchOperator: CategoryFilterMatchOperator | string | undefined;

  /**
   * <p>The category value for the filter.</p>
   *          <p>This field is mutually exclusive to <code>ParameterName</code>.</p>
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
   */
  SelectAllOptions?: CategoryFilterSelectAllOptions | string;

  /**
   * <p>The parameter whose value should be used for the filter value.</p>
   *          <p>This field is mutually exclusive to <code>CategoryValue</code>.</p>
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
   */
  NullOption: FilterNullOption | string | undefined;
}

/**
 * <p>A list of custom filter values.</p>
 */
export interface CustomFilterListConfiguration {
  /**
   * <p>The match operator that is used to determine if a filter should be applied.</p>
   */
  MatchOperator: CategoryFilterMatchOperator | string | undefined;

  /**
   * <p>The list of category values for the filter.</p>
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
   */
  SelectAllOptions?: CategoryFilterSelectAllOptions | string;

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
   */
  NullOption: FilterNullOption | string | undefined;
}

/**
 * <p>A list of filter configurations.</p>
 */
export interface FilterListConfiguration {
  /**
   * <p>The match operator that is used to determine if a filter should be applied.</p>
   */
  MatchOperator: CategoryFilterMatchOperator | string | undefined;

  /**
   * <p>The list of category values for the filter.</p>
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
   */
  SelectAllOptions?: CategoryFilterSelectAllOptions | string;
}

/**
 * <p>The configuration for a <code>CategoryFilter</code>.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface CategoryFilterConfiguration {
  /**
   * <p>A list of filter configurations. In the Amazon QuickSight console, this filter type is called a filter list.</p>
   */
  FilterListConfiguration?: FilterListConfiguration;

  /**
   * <p>A list of custom filter values. In the Amazon QuickSight console, this filter type is called a custom filter list.</p>
   */
  CustomFilterListConfiguration?: CustomFilterListConfiguration;

  /**
   * <p>A custom filter that filters based on a single value. This filter can be partially matched.</p>
   */
  CustomFilterConfiguration?: CustomFilterConfiguration;
}

/**
 * <p>A <code>CategoryFilter</code> filters text values.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/add-a-text-filter-data-prep.html">Adding text filters</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 */
export interface CategoryFilter {
  /**
   * <p>An identifier that uniquely identifies a filter within a dashboard, analysis, or template.</p>
   */
  FilterId: string | undefined;

  /**
   * <p>The column that the filter is applied to.</p>
   */
  Column: ColumnIdentifier | undefined;

  /**
   * <p>The configuration for a <code>CategoryFilter</code>.</p>
   */
  Configuration?: CategoryFilterConfiguration;
}

export enum NumericEqualityMatchOperator {
  DOES_NOT_EQUAL = "DOES_NOT_EQUAL",
  EQUALS = "EQUALS",
}

export enum NumericFilterSelectAllOptions {
  FILTER_ALL_VALUES = "FILTER_ALL_VALUES",
}

/**
 * <p>A <code>NumericEqualityFilter</code> filters values that are equal to the specified value.</p>
 */
export interface NumericEqualityFilter {
  /**
   * <p>An identifier that uniquely identifies a filter within a dashboard, analysis, or template.</p>
   */
  FilterId: string | undefined;

  /**
   * <p>The column that the filter is applied to.</p>
   */
  Column: ColumnIdentifier | undefined;

  /**
   * <p>The input value.</p>
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
   */
  SelectAllOptions?: NumericFilterSelectAllOptions | string;

  /**
   * <p>The match operator that is used to determine if a filter should be applied.</p>
   */
  MatchOperator: NumericEqualityMatchOperator | string | undefined;

  /**
   * <p>The aggregation function of the filter.</p>
   */
  AggregationFunction?: AggregationFunction;

  /**
   * <p>The parameter whose value should be used for the filter value.</p>
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
   */
  NullOption: FilterNullOption | string | undefined;
}

/**
 * <p>The value input pf the numeric range filter.</p>
 */
export interface NumericRangeFilterValue {
  /**
   * <p>The static value of the numeric range filter.</p>
   */
  StaticValue?: number;

  /**
   * <p>The parameter that is used in the numeric range.</p>
   */
  Parameter?: string;
}

/**
 * <p>A <code>NumericRangeFilter</code> filters values that are within the value range.</p>
 */
export interface NumericRangeFilter {
  /**
   * <p>An identifier that uniquely identifies a filter within a dashboard, analysis, or template.</p>
   */
  FilterId: string | undefined;

  /**
   * <p>The column that the filter is applied to.</p>
   */
  Column: ColumnIdentifier | undefined;

  /**
   * <p>Determines whether the minimum value in the filter value range should be included in the filtered results.</p>
   */
  IncludeMinimum?: boolean;

  /**
   * <p>Determines whether the maximum value in the filter value range should be included in the filtered results.</p>
   */
  IncludeMaximum?: boolean;

  /**
   * <p>The minimum value for the filter value range.</p>
   */
  RangeMinimum?: NumericRangeFilterValue;

  /**
   * <p>The maximum value for the filter value range.</p>
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
   */
  SelectAllOptions?: NumericFilterSelectAllOptions | string;

  /**
   * <p>The aggregation function of the filter.</p>
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
   */
  NullOption: FilterNullOption | string | undefined;
}

export enum AnchorOption {
  NOW = "NOW",
}

/**
 * <p>The date configuration of the filter.</p>
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
   */
  AnchorOption?: AnchorOption | string;

  /**
   * <p>The name of the parameter that is used for the anchor date configuration.</p>
   */
  ParameterName?: string;
}

export enum TimeGranularity {
  DAY = "DAY",
  HOUR = "HOUR",
  MILLISECOND = "MILLISECOND",
  MINUTE = "MINUTE",
  MONTH = "MONTH",
  QUARTER = "QUARTER",
  SECOND = "SECOND",
  WEEK = "WEEK",
  YEAR = "YEAR",
}

export enum WidgetStatus {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * <p>The exclude period of <code>TimeRangeFilter</code> or <code>RelativeDatesFilter</code>.</p>
 */
export interface ExcludePeriodConfiguration {
  /**
   * <p>The amount or number of the exclude period.</p>
   */
  Amount: number | undefined;

  /**
   * <p>The granularity or unit (day, month, year) of the exclude period.</p>
   */
  Granularity: TimeGranularity | string | undefined;

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
   */
  Status?: WidgetStatus | string;
}

export enum RelativeDateType {
  LAST = "LAST",
  NEXT = "NEXT",
  NOW = "NOW",
  PREVIOUS = "PREVIOUS",
  THIS = "THIS",
}

/**
 * <p>A <code>RelativeDatesFilter</code> filters relative dates values.</p>
 */
export interface RelativeDatesFilter {
  /**
   * <p>An identifier that uniquely identifies a filter within a dashboard, analysis, or template.</p>
   */
  FilterId: string | undefined;

  /**
   * <p>The column that the filter is applied to.</p>
   */
  Column: ColumnIdentifier | undefined;

  /**
   * <p>The date configuration of the filter.</p>
   */
  AnchorDateConfiguration: AnchorDateConfiguration | undefined;

  /**
   * <p>The minimum granularity (period granularity) of the relative dates filter.</p>
   */
  MinimumGranularity?: TimeGranularity | string;

  /**
   * <p>The level of time precision that is used to aggregate <code>DateTime</code> values.</p>
   */
  TimeGranularity: TimeGranularity | string | undefined;

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
   */
  RelativeDateType: RelativeDateType | string | undefined;

  /**
   * <p>The date value of the filter.</p>
   */
  RelativeDateValue?: number;

  /**
   * <p>The parameter whose value should be used for the filter value.</p>
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
   */
  NullOption: FilterNullOption | string | undefined;

  /**
   * <p>The configuration for the exclude period of the filter.</p>
   */
  ExcludePeriodConfiguration?: ExcludePeriodConfiguration;
}

/**
 * <p>A <code>TimeEqualityFilter</code> filters values that are equal to a given value.</p>
 */
export interface TimeEqualityFilter {
  /**
   * <p>An identifier that uniquely identifies a filter within a dashboard, analysis, or template.</p>
   */
  FilterId: string | undefined;

  /**
   * <p>The column that the filter is applied to.</p>
   */
  Column: ColumnIdentifier | undefined;

  /**
   * <p>The value of a <code>TimeEquality</code> filter.</p>
   *          <p>This field is mutually exclusive to <code>ParameterName</code>.</p>
   */
  Value?: Date;

  /**
   * <p>The parameter whose value should be used for the filter value.</p>
   *          <p>This field is mutually exclusive to <code>Value</code>.</p>
   */
  ParameterName?: string;

  /**
   * <p>The level of time precision that is used to aggregate <code>DateTime</code> values.</p>
   */
  TimeGranularity?: TimeGranularity | string;
}

/**
 * <p>The rolling date configuration of a date time filter.</p>
 */
export interface RollingDateConfiguration {
  /**
   * <p>The data set that is used in the rolling date configuration.</p>
   */
  DataSetIdentifier?: string;

  /**
   * <p>The expression of the rolling date configuration.</p>
   */
  Expression: string | undefined;
}

/**
 * <p>The value of a time range filter.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface TimeRangeFilterValue {
  /**
   * <p>The static input value.</p>
   */
  StaticValue?: Date;

  /**
   * <p>The rolling date input value.</p>
   */
  RollingDate?: RollingDateConfiguration;

  /**
   * <p>The parameter type input value.</p>
   */
  Parameter?: string;
}

/**
 * <p>A <code>TimeRangeFilter</code> filters values that are between two specified values.</p>
 */
export interface TimeRangeFilter {
  /**
   * <p>An identifier that uniquely identifies a filter within a dashboard, analysis, or template.</p>
   */
  FilterId: string | undefined;

  /**
   * <p>The column that the filter is applied to.</p>
   */
  Column: ColumnIdentifier | undefined;

  /**
   * <p>Determines whether the minimum value in the filter value range should be included in the filtered results.</p>
   */
  IncludeMinimum?: boolean;

  /**
   * <p>Determines whether the maximum value in the filter value range should be included in the filtered results.</p>
   */
  IncludeMaximum?: boolean;

  /**
   * <p>The minimum value for the filter value range.</p>
   */
  RangeMinimumValue?: TimeRangeFilterValue;

  /**
   * <p>The maximum value for the filter value range.</p>
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
   */
  NullOption: FilterNullOption | string | undefined;

  /**
   * <p>The exclude period of the time range filter.</p>
   */
  ExcludePeriodConfiguration?: ExcludePeriodConfiguration;

  /**
   * <p>The level of time precision that is used to aggregate <code>DateTime</code> values.</p>
   */
  TimeGranularity?: TimeGranularity | string;
}

/**
 * <p>A <code>TopBottomFilter</code> filters values that are at the top or the bottom.</p>
 */
export interface TopBottomFilter {
  /**
   * <p>An identifier that uniquely identifies a filter within a dashboard, analysis, or template.</p>
   */
  FilterId: string | undefined;

  /**
   * <p>The column that the filter is applied to.</p>
   */
  Column: ColumnIdentifier | undefined;

  /**
   * <p>The number of items to include in the top bottom filter results.</p>
   */
  Limit?: number;

  /**
   * <p>The aggregation and sort configuration of the top bottom filter.</p>
   */
  AggregationSortConfigurations: AggregationSortConfiguration[] | undefined;

  /**
   * <p>The level of time precision that is used to aggregate <code>DateTime</code> values.</p>
   */
  TimeGranularity?: TimeGranularity | string;

  /**
   * <p>The parameter whose value should be used for the filter value.</p>
   */
  ParameterName?: string;
}

/**
 * <p>With a <code>Filter</code>, you can remove portions of data from a particular visual or view.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface Filter {
  /**
   * <p>A <code>CategoryFilter</code> filters text values.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/add-a-text-filter-data-prep.html">Adding text filters</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  CategoryFilter?: CategoryFilter;

  /**
   * <p>A <code>NumericRangeFilter</code> filters numeric values that are either inside or outside a given numeric range.</p>
   */
  NumericRangeFilter?: NumericRangeFilter;

  /**
   * <p>A <code>NumericEqualityFilter</code> filters numeric values that equal or do not equal a given numeric value.</p>
   */
  NumericEqualityFilter?: NumericEqualityFilter;

  /**
   * <p>A <code>TimeEqualityFilter</code> filters date-time values that equal or do not equal
   *             a given date/time value.</p>
   */
  TimeEqualityFilter?: TimeEqualityFilter;

  /**
   * <p>A <code>TimeRangeFilter</code> filters date-time values that are either inside or outside a given date/time range.</p>
   */
  TimeRangeFilter?: TimeRangeFilter;

  /**
   * <p>A <code>RelativeDatesFilter</code> filters date values that are relative to a given date.</p>
   */
  RelativeDatesFilter?: RelativeDatesFilter;

  /**
   * <p>A <code>TopBottomFilter</code> filters data to the top or bottom values for a given column.</p>
   */
  TopBottomFilter?: TopBottomFilter;
}

export enum FilterVisualScope {
  ALL_VISUALS = "ALL_VISUALS",
  SELECTED_VISUALS = "SELECTED_VISUALS",
}

/**
 * <p>The filter that is applied to the options.</p>
 */
export interface SheetVisualScopingConfiguration {
  /**
   * <p>The selected sheet that the filter is applied to.</p>
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
   */
  Scope: FilterVisualScope | string | undefined;

  /**
   * <p>The selected visuals that the filter is applied to.</p>
   */
  VisualIds?: string[];
}

/**
 * <p>The configuration for applying a filter to specific sheets or visuals. You can apply this filter to multiple visuals that are on one sheet or to all visuals on a sheet.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface SelectedSheetsFilterScopeConfiguration {
  /**
   * <p>The sheet ID and visual IDs of the sheet and visuals that the filter is applied to.</p>
   */
  SheetVisualScopingConfigurations?: SheetVisualScopingConfiguration[];
}

/**
 * <p>The scope configuration for a <code>FilterGroup</code>.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface FilterScopeConfiguration {
  /**
   * <p>The configuration for applying a filter to specific sheets.</p>
   */
  SelectedSheets?: SelectedSheetsFilterScopeConfiguration;
}

/**
 * <p>A grouping of individual filters. Filter groups are applied to the same group of visuals.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/add-a-compound-filter.html">Adding filter conditions (group filters) with AND and OR operators</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 */
export interface FilterGroup {
  /**
   * <p>The value that uniquely identifies a <code>FilterGroup</code> within a dashboard, template, or analysis.</p>
   */
  FilterGroupId: string | undefined;

  /**
   * <p>The list of filters that are present in a <code>FilterGroup</code>.</p>
   */
  Filters: Filter[] | undefined;

  /**
   * <p>The configuration that specifies what scope to apply to a <code>FilterGroup</code>.</p>
   *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
   */
  ScopeConfiguration: FilterScopeConfiguration | undefined;

  /**
   * <p>The status of the <code>FilterGroup</code>.</p>
   */
  Status?: WidgetStatus | string;

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
   */
  CrossDataset: CrossDatasetTypes | string | undefined;
}

/**
 * <p>Defines different defaults to the users or groups based on mapping.</p>
 */
export interface DynamicDefaultValue {
  /**
   * <p>The column that contains the username.</p>
   */
  UserNameColumn?: ColumnIdentifier;

  /**
   * <p>The column that contains the group name.</p>
   */
  GroupNameColumn?: ColumnIdentifier;

  /**
   * <p>The column that contains the default value of each user or group.</p>
   */
  DefaultValueColumn: ColumnIdentifier | undefined;
}

/**
 * <p>The default values of the <code>DateTimeParameterDeclaration</code>.</p>
 */
export interface DateTimeDefaultValues {
  /**
   * <p>The dynamic value of the  <code>DataTimeDefaultValues</code>. Different defaults are displayed according to users, groups, and values mapping.</p>
   */
  DynamicValue?: DynamicDefaultValue;

  /**
   * <p>The static values of the <code>DataTimeDefaultValues</code>.</p>
   */
  StaticValues?: Date[];

  /**
   * <p>The rolling date of the <code>DataTimeDefaultValues</code>. The date is determined from the dataset based on input expression.</p>
   */
  RollingDate?: RollingDateConfiguration;
}

export enum ValueWhenUnsetOption {
  NULL = "NULL",
  RECOMMENDED_VALUE = "RECOMMENDED_VALUE",
}

/**
 * <p>The configuration that defines the default value of a <code>DateTime</code> parameter when a value has not been set.</p>
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
   */
  ValueWhenUnsetOption?: ValueWhenUnsetOption | string;

  /**
   * <p>A custom value that's used when the value of a parameter isn't set.</p>
   */
  CustomValue?: Date;
}

/**
 * <p>A parameter declaration for the <code>DateTime</code> data type.</p>
 */
export interface DateTimeParameterDeclaration {
  /**
   * <p>The name of the parameter that is being declared.</p>
   */
  Name: string | undefined;

  /**
   * <p>The default values of a parameter. If the parameter is a single-value parameter, a maximum of one default value can be provided.</p>
   */
  DefaultValues?: DateTimeDefaultValues;

  /**
   * <p>The level of time precision that is used to aggregate <code>DateTime</code> values.</p>
   */
  TimeGranularity?: TimeGranularity | string;

  /**
   * <p>The configuration that defines the default value of a <code>DateTime</code> parameter when a value has not been set.</p>
   */
  ValueWhenUnset?: DateTimeValueWhenUnsetConfiguration;
}

/**
 * <p>The default values of the <code>DecimalParameterDeclaration</code>.</p>
 */
export interface DecimalDefaultValues {
  /**
   * <p>The dynamic value of the <code>DecimalDefaultValues</code>. Different defaults are displayed according to users, groups, and values mapping.</p>
   */
  DynamicValue?: DynamicDefaultValue;

  /**
   * <p>The static values of the <code>DecimalDefaultValues</code>.</p>
   */
  StaticValues?: number[];
}

export enum ParameterValueType {
  MULTI_VALUED = "MULTI_VALUED",
  SINGLE_VALUED = "SINGLE_VALUED",
}

/**
 * <p>The configuration that defines the default value of a <code>Decimal</code> parameter when a value has not been set.</p>
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
   */
  ValueWhenUnsetOption?: ValueWhenUnsetOption | string;

  /**
   * <p>A custom value that's used when the value of a parameter isn't set.</p>
   */
  CustomValue?: number;
}

/**
 * <p>A parameter declaration for the <code>Decimal</code> data type.</p>
 */
export interface DecimalParameterDeclaration {
  /**
   * <p>The value type determines whether the parameter is a single-value or multi-value parameter.</p>
   */
  ParameterValueType: ParameterValueType | string | undefined;

  /**
   * <p>The name of the parameter that is being declared.</p>
   */
  Name: string | undefined;

  /**
   * <p>The default values of a parameter. If the parameter is a single-value parameter, a maximum of one default value can be provided.</p>
   */
  DefaultValues?: DecimalDefaultValues;

  /**
   * <p>The configuration that defines the default value of a <code>Decimal</code> parameter when a value has not been set.</p>
   */
  ValueWhenUnset?: DecimalValueWhenUnsetConfiguration;
}

/**
 * <p>The default values of the <code>IntegerParameterDeclaration</code>.</p>
 */
export interface IntegerDefaultValues {
  /**
   * <p>The dynamic value of the <code>IntegerDefaultValues</code>. Different defaults are displayed according to users, groups, and values mapping.</p>
   */
  DynamicValue?: DynamicDefaultValue;

  /**
   * <p>The static values of the <code>IntegerDefaultValues</code>.</p>
   */
  StaticValues?: number[];
}

/**
 * <p>A parameter declaration for the <code>Integer</code> data type.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
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
   */
  ValueWhenUnsetOption?: ValueWhenUnsetOption | string;

  /**
   * <p>A custom value that's used when the value of a parameter isn't set.</p>
   */
  CustomValue?: number;
}

/**
 * <p>A parameter declaration for the <code>Integer</code> data type.</p>
 */
export interface IntegerParameterDeclaration {
  /**
   * <p>The value type determines whether the parameter is a single-value or multi-value parameter.</p>
   */
  ParameterValueType: ParameterValueType | string | undefined;

  /**
   * <p>The name of the parameter that is being declared.</p>
   */
  Name: string | undefined;

  /**
   * <p>The default values of a parameter. If the parameter is a single-value parameter, a maximum of one default value can be provided.</p>
   */
  DefaultValues?: IntegerDefaultValues;

  /**
   * <p>A parameter declaration for the <code>Integer</code> data type.</p>
   */
  ValueWhenUnset?: IntegerValueWhenUnsetConfiguration;
}

/**
 * <p>The default values of the <code>StringParameterDeclaration</code>.</p>
 */
export interface StringDefaultValues {
  /**
   * <p>The dynamic value of the <code>StringDefaultValues</code>. Different defaults displayed according to users, groups, and values mapping.</p>
   */
  DynamicValue?: DynamicDefaultValue;

  /**
   * <p>The static values of the <code>DecimalDefaultValues</code>.</p>
   */
  StaticValues?: string[];
}

/**
 * <p>The configuration that defines the default value of a <code>String</code> parameter when a value has not been set.</p>
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
   */
  ValueWhenUnsetOption?: ValueWhenUnsetOption | string;

  /**
   * <p>A custom value that's used when the value of a parameter isn't set.</p>
   */
  CustomValue?: string;
}

/**
 * <p>A parameter declaration for the <code>String</code> data type.</p>
 */
export interface StringParameterDeclaration {
  /**
   * <p>The value type determines whether the parameter is a single-value or multi-value parameter.</p>
   */
  ParameterValueType: ParameterValueType | string | undefined;

  /**
   * <p>The name of the parameter that is being declared.</p>
   */
  Name: string | undefined;

  /**
   * <p>The default values of a parameter. If the parameter is a single-value parameter, a maximum of one default value can be provided.</p>
   */
  DefaultValues?: StringDefaultValues;

  /**
   * <p>The configuration that defines the default value of a <code>String</code> parameter when a value has not been set.</p>
   */
  ValueWhenUnset?: StringValueWhenUnsetConfiguration;
}

/**
 * <p>The declaration definition of a parameter.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/parameters-in-quicksight.html">Parameters in Amazon QuickSight</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface ParameterDeclaration {
  /**
   * <p>A parameter declaration for the <code>String</code> data type.</p>
   */
  StringParameterDeclaration?: StringParameterDeclaration;

  /**
   * <p>A parameter declaration for the <code>Decimal</code> data type.</p>
   */
  DecimalParameterDeclaration?: DecimalParameterDeclaration;

  /**
   * <p>A parameter declaration for the <code>Integer</code> data type.</p>
   */
  IntegerParameterDeclaration?: IntegerParameterDeclaration;

  /**
   * <p>A parameter declaration for the <code>DateTime</code> data type.</p>
   */
  DateTimeParameterDeclaration?: DateTimeParameterDeclaration;
}

export enum FontDecoration {
  NONE = "NONE",
  UNDERLINE = "UNDERLINE",
}

export enum RelativeFontSize {
  EXTRA_LARGE = "EXTRA_LARGE",
  EXTRA_SMALL = "EXTRA_SMALL",
  LARGE = "LARGE",
  MEDIUM = "MEDIUM",
  SMALL = "SMALL",
}

/**
 * <p>The option that determines the text display size.</p>
 */
export interface FontSize {
  /**
   * <p>The lexical name for the text size, proportional to its surrounding context.</p>
   */
  Relative?: RelativeFontSize | string;
}

export enum FontStyle {
  ITALIC = "ITALIC",
  NORMAL = "NORMAL",
}

export enum FontWeightName {
  BOLD = "BOLD",
  NORMAL = "NORMAL",
}

/**
 * <p>The option that determines the text display weight, or boldness.</p>
 */
export interface FontWeight {
  /**
   * <p>The lexical name for the level of boldness of the text display.</p>
   */
  Name?: FontWeightName | string;
}

/**
 * <p>Configures the display properties of the given text.</p>
 */
export interface FontConfiguration {
  /**
   * <p>The option that determines the text display size.</p>
   */
  FontSize?: FontSize;

  /**
   * <p>Determines the appearance of decorative lines on the text.</p>
   */
  FontDecoration?: FontDecoration | string;

  /**
   * <p>Determines the color of the text.</p>
   */
  FontColor?: string;

  /**
   * <p>The option that determines the text display weight, or boldness.</p>
   */
  FontWeight?: FontWeight;

  /**
   * <p>Determines the text display face that is inherited by the given font family.</p>
   */
  FontStyle?: FontStyle | string;
}

/**
 * <p>The share label options for the labels.</p>
 */
export interface LabelOptions {
  /**
   * <p>Determines whether or not the label is visible.</p>
   */
  Visibility?: Visibility | string;

  /**
   * <p>The font configuration of the label.</p>
   */
  FontConfiguration?: FontConfiguration;

  /**
   * <p>The text for the label.</p>
   */
  CustomLabel?: string;
}

/**
 * <p>The display options of a control.</p>
 */
export interface DateTimePickerControlDisplayOptions {
  /**
   * <p>The options to configure the title visibility, name, and font size.</p>
   */
  TitleOptions?: LabelOptions;

  /**
   * <p>Customize how dates are formatted in controls.</p>
   */
  DateTimeFormat?: string;
}

export enum SheetControlDateTimePickerType {
  DATE_RANGE = "DATE_RANGE",
  SINGLE_VALUED = "SINGLE_VALUED",
}

/**
 * <p>A control from a date filter that is used to specify date and time.</p>
 */
export interface FilterDateTimePickerControl {
  /**
   * <p>The ID of the <code>FilterDateTimePickerControl</code>.</p>
   */
  FilterControlId: string | undefined;

  /**
   * <p>The title of the <code>FilterDateTimePickerControl</code>.</p>
   */
  Title: string | undefined;

  /**
   * <p>The source filter ID of the <code>FilterDateTimePickerControl</code>.</p>
   */
  SourceFilterId: string | undefined;

  /**
   * <p>The display options of a control.</p>
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
   */
  Type?: SheetControlDateTimePickerType | string;
}

/**
 * <p>The source controls that are used in a <code>CascadingControlConfiguration</code>.</p>
 */
export interface CascadingControlSource {
  /**
   * <p>The source sheet control ID of a <code>CascadingControlSource</code>.</p>
   */
  SourceSheetControlId?: string;

  /**
   * <p>The column identifier that determines which column to look up for the source sheet control.</p>
   */
  ColumnToMatch?: ColumnIdentifier;
}

/**
 * <p>The values that are displayed in a control can be configured to only show values that are valid based on what's selected in other controls.</p>
 */
export interface CascadingControlConfiguration {
  /**
   * <p>A list of source controls that determine the values that are used in the current control.</p>
   */
  SourceControls?: CascadingControlSource[];
}

/**
 * <p>The configuration of the <code>Select all</code> options in a list control.</p>
 */
export interface ListControlSelectAllOptions {
  /**
   * <p>The visibility configuration of the <code>Select all</code> options in a list control.</p>
   */
  Visibility?: Visibility | string;
}

/**
 * <p>The display options of a control.</p>
 */
export interface DropDownControlDisplayOptions {
  /**
   * <p>The configuration of the <code>Select all</code> options in a
   *             dropdown control.</p>
   */
  SelectAllOptions?: ListControlSelectAllOptions;

  /**
   * <p>The options to configure the title visibility, name, and font size.</p>
   */
  TitleOptions?: LabelOptions;
}

/**
 * <p>A list of selectable values that are used in a control.</p>
 */
export interface FilterSelectableValues {
  /**
   * <p>The values that are used in the <code>FilterSelectableValues</code>.</p>
   */
  Values?: string[];
}

export enum SheetControlListType {
  MULTI_SELECT = "MULTI_SELECT",
  SINGLE_SELECT = "SINGLE_SELECT",
}

/**
 * <p>A control to display a dropdown list with buttons that are used to select a single value.</p>
 */
export interface FilterDropDownControl {
  /**
   * <p>The ID of the <code>FilterDropDownControl</code>.</p>
   */
  FilterControlId: string | undefined;

  /**
   * <p>The title of the <code>FilterDropDownControl</code>.</p>
   */
  Title: string | undefined;

  /**
   * <p>The source filter ID of the <code>FilterDropDownControl</code>.</p>
   */
  SourceFilterId: string | undefined;

  /**
   * <p>The display options of the <code>FilterDropDownControl</code>.</p>
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
   */
  Type?: SheetControlListType | string;

  /**
   * <p>A list of selectable values that are used in a control.</p>
   */
  SelectableValues?: FilterSelectableValues;

  /**
   * <p>The values that are displayed in a control can be configured to only show values that are valid based on what's selected in other controls.</p>
   */
  CascadingControlConfiguration?: CascadingControlConfiguration;
}

/**
 * <p>The configuration of the search options in a list control.</p>
 */
export interface ListControlSearchOptions {
  /**
   * <p>The visibility configuration of the search options in a list control.</p>
   */
  Visibility?: Visibility | string;
}

/**
 * <p>The display options of a control.</p>
 */
export interface ListControlDisplayOptions {
  /**
   * <p>The configuration of the search options in a list control.</p>
   */
  SearchOptions?: ListControlSearchOptions;

  /**
   * <p>The configuration of the <code>Select all</code> options in a list control.</p>
   */
  SelectAllOptions?: ListControlSelectAllOptions;

  /**
   * <p>The options to configure the title visibility, name, and font size.</p>
   */
  TitleOptions?: LabelOptions;
}

/**
 * <p>A control to display a list of buttons or boxes. This is used to select either a single value or multiple values.</p>
 */
export interface FilterListControl {
  /**
   * <p>The ID of the <code>FilterListControl</code>.</p>
   */
  FilterControlId: string | undefined;

  /**
   * <p>The title of the <code>FilterListControl</code>.</p>
   */
  Title: string | undefined;

  /**
   * <p>The source filter ID of the <code>FilterListControl</code>.</p>
   */
  SourceFilterId: string | undefined;

  /**
   * <p>The display options of a control.</p>
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
   */
  Type?: SheetControlListType | string;

  /**
   * <p>A list of selectable values that are used in a control.</p>
   */
  SelectableValues?: FilterSelectableValues;

  /**
   * <p>The values that are displayed in a control can be configured to only show values that are valid based on what's selected in other controls.</p>
   */
  CascadingControlConfiguration?: CascadingControlConfiguration;
}

/**
 * <p>The display options of a control.</p>
 */
export interface RelativeDateTimeControlDisplayOptions {
  /**
   * <p>The options to configure the title visibility, name, and font size.</p>
   */
  TitleOptions?: LabelOptions;

  /**
   * <p>Customize how dates are formatted in controls.</p>
   */
  DateTimeFormat?: string;
}

/**
 * <p>A control from a date filter that is used to specify the relative date.</p>
 */
export interface FilterRelativeDateTimeControl {
  /**
   * <p>The ID of the <code>FilterTextAreaControl</code>.</p>
   */
  FilterControlId: string | undefined;

  /**
   * <p>The title of the <code>FilterTextAreaControl</code>.</p>
   */
  Title: string | undefined;

  /**
   * <p>The source filter ID of the <code>FilterTextAreaControl</code>.</p>
   */
  SourceFilterId: string | undefined;

  /**
   * <p>The display options of a control.</p>
   */
  DisplayOptions?: RelativeDateTimeControlDisplayOptions;
}

/**
 * <p>The display options of a control.</p>
 */
export interface SliderControlDisplayOptions {
  /**
   * <p>The options to configure the title visibility, name, and font size.</p>
   */
  TitleOptions?: LabelOptions;
}

export enum SheetControlSliderType {
  RANGE = "RANGE",
  SINGLE_POINT = "SINGLE_POINT",
}

/**
 * <p>A control to display a horizontal toggle bar. This is used to change a value by sliding the toggle.</p>
 */
export interface FilterSliderControl {
  /**
   * <p>The ID of the <code>FilterSliderControl</code>.</p>
   */
  FilterControlId: string | undefined;

  /**
   * <p>The title of the <code>FilterSliderControl</code>.</p>
   */
  Title: string | undefined;

  /**
   * <p>The source filter ID of the <code>FilterSliderControl</code>.</p>
   */
  SourceFilterId: string | undefined;

  /**
   * <p>The display options of a control.</p>
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
   */
  Type?: SheetControlSliderType | string;

  /**
   * <p>The smaller value that is displayed at the left of the slider.</p>
   */
  MaximumValue: number | undefined;

  /**
   * <p>The larger value that is displayed at the right of the slider.</p>
   */
  MinimumValue: number | undefined;

  /**
   * <p>The number of increments that the slider bar is divided into.</p>
   */
  StepSize: number | undefined;
}

/**
 * <p>The configuration of the placeholder options in a text control.</p>
 */
export interface TextControlPlaceholderOptions {
  /**
   * <p>The visibility configuration of the placeholder options in a text control.</p>
   */
  Visibility?: Visibility | string;
}

/**
 * <p>The display options of a control.</p>
 */
export interface TextAreaControlDisplayOptions {
  /**
   * <p>The options to configure the title visibility, name, and font size.</p>
   */
  TitleOptions?: LabelOptions;

  /**
   * <p>The configuration of the placeholder options in a text area control.</p>
   */
  PlaceholderOptions?: TextControlPlaceholderOptions;
}

/**
 * <p>A control to display a text box that is used to enter multiple entries.</p>
 */
export interface FilterTextAreaControl {
  /**
   * <p>The ID of the <code>FilterTextAreaControl</code>.</p>
   */
  FilterControlId: string | undefined;

  /**
   * <p>The title of the <code>FilterTextAreaControl</code>.</p>
   */
  Title: string | undefined;

  /**
   * <p>The source filter ID of the <code>FilterTextAreaControl</code>.</p>
   */
  SourceFilterId: string | undefined;

  /**
   * <p>The delimiter that is used to separate the lines in text.</p>
   */
  Delimiter?: string;

  /**
   * <p>The display options of a control.</p>
   */
  DisplayOptions?: TextAreaControlDisplayOptions;
}

/**
 * <p>The display options of a control.</p>
 */
export interface TextFieldControlDisplayOptions {
  /**
   * <p>The options to configure the title visibility, name, and font size.</p>
   */
  TitleOptions?: LabelOptions;

  /**
   * <p>The configuration of the placeholder options in a text field control.</p>
   */
  PlaceholderOptions?: TextControlPlaceholderOptions;
}

/**
 * <p>A control to display a text box that is used to enter a single entry.</p>
 */
export interface FilterTextFieldControl {
  /**
   * <p>The ID of the <code>FilterTextFieldControl</code>.</p>
   */
  FilterControlId: string | undefined;

  /**
   * <p>The title of the <code>FilterTextFieldControl</code>.</p>
   */
  Title: string | undefined;

  /**
   * <p>The source filter ID of the <code>FilterTextFieldControl</code>.</p>
   */
  SourceFilterId: string | undefined;

  /**
   * <p>The display options of a control.</p>
   */
  DisplayOptions?: TextFieldControlDisplayOptions;
}

/**
 * <p>The control of a filter that is used to interact with a dashboard or an analysis.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface FilterControl {
  /**
   * <p>A control from a date filter that is used to specify date and time.</p>
   */
  DateTimePicker?: FilterDateTimePickerControl;

  /**
   * <p>A control to display a list of buttons or boxes. This is used to select either a single value or multiple values.</p>
   */
  List?: FilterListControl;

  /**
   * <p>A control to display a dropdown list with buttons that are used to select a single value.</p>
   */
  Dropdown?: FilterDropDownControl;

  /**
   * <p>A control to display a text box that is used to enter a single entry.</p>
   */
  TextField?: FilterTextFieldControl;

  /**
   * <p>A control to display a text box that is used to enter multiple entries.</p>
   */
  TextArea?: FilterTextAreaControl;

  /**
   * <p>A control to display a horizontal toggle bar. This is used to change a value by sliding the toggle.</p>
   */
  Slider?: FilterSliderControl;

  /**
   * <p>A control from a date filter that is used to specify the relative date.</p>
   */
  RelativeDateTime?: FilterRelativeDateTimeControl;
}

/**
 * <p>The background style configuration of a free-form layout element.</p>
 */
export interface FreeFormLayoutElementBackgroundStyle {
  /**
   * <p>The background visibility of a free-form layout element.</p>
   */
  Visibility?: Visibility | string;

  /**
   * <p>The background color of a free-form layout element.</p>
   */
  Color?: string;
}

/**
 * <p>The background style configuration of a free-form layout element.</p>
 */
export interface FreeFormLayoutElementBorderStyle {
  /**
   * <p>The border visibility of a free-form layout element.</p>
   */
  Visibility?: Visibility | string;

  /**
   * <p>The border color of a free-form layout element.</p>
   */
  Color?: string;
}

export enum LayoutElementType {
  FILTER_CONTROL = "FILTER_CONTROL",
  PARAMETER_CONTROL = "PARAMETER_CONTROL",
  TEXT_BOX = "TEXT_BOX",
  VISUAL = "VISUAL",
}

/**
 * <p>The configuration of loading animation in free-form layout. </p>
 */
export interface LoadingAnimation {
  /**
   * <p>The visibility configuration of <code>LoadingAnimation</code>.</p>
   */
  Visibility?: Visibility | string;
}

/**
 * <p>The override configuration of the rendering rules of a sheet.</p>
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
   */
  Visibility?: Visibility | string;
}

/**
 * <p>The rendering rules of a sheet that uses a free-form layout.</p>
 */
export interface SheetElementRenderingRule {
  /**
   * <p>The expression of the rendering rules of a sheet.</p>
   */
  Expression: string | undefined;

  /**
   * <p>The override configuration of the rendering rules of a sheet.</p>
   */
  ConfigurationOverrides: SheetElementConfigurationOverrides | undefined;
}

/**
 * <p>An element within a free-form layout.</p>
 */
export interface FreeFormLayoutElement {
  /**
   * <p>A unique identifier for an element within a free-form layout.</p>
   */
  ElementId: string | undefined;

  /**
   * <p>The type of element.</p>
   */
  ElementType: LayoutElementType | string | undefined;

  /**
   * <p>The x-axis coordinate of the element.</p>
   */
  XAxisLocation: string | undefined;

  /**
   * <p>The y-axis coordinate of the element.</p>
   */
  YAxisLocation: string | undefined;

  /**
   * <p>The width of an element within a free-form layout.</p>
   */
  Width: string | undefined;

  /**
   * <p>The height of an element within a free-form layout.</p>
   */
  Height: string | undefined;

  /**
   * <p>The visibility of an element within a free-form layout.</p>
   */
  Visibility?: Visibility | string;

  /**
   * <p>The rendering rules that determine when an element should be displayed within a free-form layout.</p>
   */
  RenderingRules?: SheetElementRenderingRule[];

  /**
   * <p>The border style configuration of a free-form layout element.</p>
   */
  BorderStyle?: FreeFormLayoutElementBorderStyle;

  /**
   * <p>The border style configuration of a free-form layout element. This border style is used when the element is selected.</p>
   */
  SelectedBorderStyle?: FreeFormLayoutElementBorderStyle;

  /**
   * <p>The background style configuration of a free-form layout element.</p>
   */
  BackgroundStyle?: FreeFormLayoutElementBackgroundStyle;

  /**
   * <p>The loading animation configuration of a free-form layout element.</p>
   */
  LoadingAnimation?: LoadingAnimation;
}

/**
 * <p>The configuration of a free-form layout.</p>
 */
export interface FreeFormLayoutConfiguration {
  /**
   * <p>The elements that are included in a free-form layout.</p>
   */
  Elements: FreeFormLayoutElement[] | undefined;

  /**
   * <p>Configuration options for the canvas of a free-form layout.</p>
   */
  CanvasSizeOptions?: FreeFormLayoutCanvasSizeOptions;
}

/**
 * <p>An element within a grid layout.</p>
 */
export interface GridLayoutElement {
  /**
   * <p>A unique identifier for an element within a grid layout.</p>
   */
  ElementId: string | undefined;

  /**
   * <p>The type of element.</p>
   */
  ElementType: LayoutElementType | string | undefined;

  /**
   * <p>The column index for the upper left corner of an element.</p>
   */
  ColumnIndex?: number;

  /**
   * <p>The width of a grid element expressed as a number of grid columns.</p>
   */
  ColumnSpan: number | undefined;

  /**
   * <p>The row index for the upper left corner of an element.</p>
   */
  RowIndex?: number;

  /**
   * <p>The height of a grid element expressed as a number of grid rows.</p>
   */
  RowSpan: number | undefined;
}

/**
 * <p>The configuration for a grid layout. Also called a tiled layout.</p>
 *          <p>Visuals snap to a grid with standard spacing and alignment. Dashboards are displayed as designed, with options to fit to screen or view at actual size.</p>
 */
export interface GridLayoutConfiguration {
  /**
   * <p>The elements that are included in a grid layout.</p>
   */
  Elements: GridLayoutElement[] | undefined;

  /**
   * <p>Configuration options for the canvas of a grid layout.</p>
   */
  CanvasSizeOptions?: GridLayoutCanvasSizeOptions;
}

/**
 * <p>The free-form layout configuration of a section.</p>
 */
export interface FreeFormSectionLayoutConfiguration {
  /**
   * <p>The elements that are included in the free-form layout.</p>
   */
  Elements: FreeFormLayoutElement[] | undefined;
}

/**
 * <p>The layout configuration of a section.</p>
 */
export interface SectionLayoutConfiguration {
  /**
   * <p>The free-form layout configuration of a section.</p>
   */
  FreeFormLayout: FreeFormSectionLayoutConfiguration | undefined;
}

/**
 * <p>The configuration of content in a body section.</p>
 */
export interface BodySectionContent {
  /**
   * <p>The layout configuration of a body section.</p>
   */
  Layout?: SectionLayoutConfiguration;
}

export enum SectionPageBreakStatus {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * <p>The configuration of a page break after a section.</p>
 */
export interface SectionAfterPageBreak {
  /**
   * <p>The option that enables or disables a page break at the end of a section.</p>
   */
  Status?: SectionPageBreakStatus | string;
}

/**
 * <p>The configuration of a page break for a section.</p>
 */
export interface SectionPageBreakConfiguration {
  /**
   * <p>The configuration of a page break after a section.</p>
   */
  After?: SectionAfterPageBreak;
}

/**
 * <p>The options that style a section.</p>
 */
export interface SectionStyle {
  /**
   * <p>The height of a section.</p>
   *          <p>Heights can only be defined for header and footer sections. The default height margin is 0.5 inches. </p>
   */
  Height?: string;

  /**
   * <p>The spacing between section content and its top, bottom, left, and right edges.</p>
   *          <p>There is no padding by default.</p>
   */
  Padding?: Spacing;
}

/**
 * <p>The configuration of a body section.</p>
 */
export interface BodySectionConfiguration {
  /**
   * <p>The unique identifier of a body section.</p>
   */
  SectionId: string | undefined;

  /**
   * <p>The configuration of content in a body section.</p>
   */
  Content: BodySectionContent | undefined;

  /**
   * <p>The style options of a body section.</p>
   */
  Style?: SectionStyle;

  /**
   * <p>The configuration of a page break for a section.</p>
   */
  PageBreakConfiguration?: SectionPageBreakConfiguration;
}

/**
 * <p>The configuration of a header or footer section.</p>
 */
export interface HeaderFooterSectionConfiguration {
  /**
   * <p>The unique identifier of the header or footer section.</p>
   */
  SectionId: string | undefined;

  /**
   * <p>The layout configuration of the header or footer section.</p>
   */
  Layout: SectionLayoutConfiguration | undefined;

  /**
   * <p>The style options of a header or footer section.</p>
   */
  Style?: SectionStyle;
}

/**
 * <p>The configuration for a
 *             section-based layout.</p>
 */
export interface SectionBasedLayoutConfiguration {
  /**
   * <p>A list of header section configurations.</p>
   */
  HeaderSections: HeaderFooterSectionConfiguration[] | undefined;

  /**
   * <p>A list of body section configurations.</p>
   */
  BodySections: BodySectionConfiguration[] | undefined;

  /**
   * <p>A list of footer section configurations.</p>
   */
  FooterSections: HeaderFooterSectionConfiguration[] | undefined;

  /**
   * <p>The options for the canvas of a section-based layout.</p>
   */
  CanvasSizeOptions: SectionBasedLayoutCanvasSizeOptions | undefined;
}

/**
 * <p>The configuration that determines what the type of layout will be used on a sheet.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface LayoutConfiguration {
  /**
   * <p>A type of layout that can be used on a sheet. In a grid layout, visuals snap to a grid with standard spacing and alignment. Dashboards are displayed as designed, with options to fit to screen or view at actual size. A grid layout can be configured to behave in one of two ways when the viewport is resized: <code>FIXED</code> or <code>RESPONSIVE</code>.</p>
   */
  GridLayout?: GridLayoutConfiguration;

  /**
   * <p>A free-form is optimized for a fixed width and has more control over the exact placement of layout elements.</p>
   */
  FreeFormLayout?: FreeFormLayoutConfiguration;

  /**
   * <p>A section based layout organizes visuals into multiple sections and has customized header, footer and page break.</p>
   */
  SectionBasedLayout?: SectionBasedLayoutConfiguration;
}

/**
 * <p>A <code>Layout</code> defines the placement of elements within a sheet.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/types-of-layout.html">Types of layout</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface Layout {
  /**
   * <p>The configuration that determines what the type of layout for a sheet.</p>
   */
  Configuration: LayoutConfiguration | undefined;
}

/**
 * <p>A control from a date parameter that specifies date and time.</p>
 */
export interface ParameterDateTimePickerControl {
  /**
   * <p>The ID of the <code>ParameterDateTimePickerControl</code>.</p>
   */
  ParameterControlId: string | undefined;

  /**
   * <p>The title of the <code>ParameterDateTimePickerControl</code>.</p>
   */
  Title: string | undefined;

  /**
   * <p>The name of the <code>ParameterDateTimePickerControl</code>.</p>
   */
  SourceParameterName: string | undefined;

  /**
   * <p>The display options of a control.</p>
   */
  DisplayOptions?: DateTimePickerControlDisplayOptions;
}

/**
 * <p>A list of selectable values that are used in a control.</p>
 */
export interface ParameterSelectableValues {
  /**
   * <p>The values that are used in <code>ParameterSelectableValues</code>.</p>
   */
  Values?: string[];

  /**
   * <p>The column identifier that fetches values from the data set.</p>
   */
  LinkToDataSetColumn?: ColumnIdentifier;
}

/**
 * <p>A control to display a dropdown list with buttons that are used to select a single value.</p>
 */
export interface ParameterDropDownControl {
  /**
   * <p>The ID of the <code>ParameterDropDownControl</code>.</p>
   */
  ParameterControlId: string | undefined;

  /**
   * <p>The title of the <code>ParameterDropDownControl</code>.</p>
   */
  Title: string | undefined;

  /**
   * <p>The source parameter name of the <code>ParameterDropDownControl</code>.</p>
   */
  SourceParameterName: string | undefined;

  /**
   * <p>The display options of a control.</p>
   */
  DisplayOptions?: DropDownControlDisplayOptions;

  /**
   * <p>The type parameter name of the <code>ParameterDropDownControl</code>.</p>
   */
  Type?: SheetControlListType | string;

  /**
   * <p>A list of selectable values that are used in a control.</p>
   */
  SelectableValues?: ParameterSelectableValues;

  /**
   * <p>The values that are displayed in a control can be configured to only show values that are valid based on what's selected in other controls.</p>
   */
  CascadingControlConfiguration?: CascadingControlConfiguration;
}

/**
 * <p>A control to display a list with buttons or boxes that are used to select either a single value or multiple values.</p>
 */
export interface ParameterListControl {
  /**
   * <p>The ID of the <code>ParameterListControl</code>.</p>
   */
  ParameterControlId: string | undefined;

  /**
   * <p>The title of the <code>ParameterListControl</code>.</p>
   */
  Title: string | undefined;

  /**
   * <p>The source parameter name of the <code>ParameterListControl</code>.</p>
   */
  SourceParameterName: string | undefined;

  /**
   * <p>The display options of a control.</p>
   */
  DisplayOptions?: ListControlDisplayOptions;

  /**
   * <p>The type of <code>ParameterListControl</code>.</p>
   */
  Type?: SheetControlListType | string;

  /**
   * <p>A list of selectable values that are used in a control.</p>
   */
  SelectableValues?: ParameterSelectableValues;

  /**
   * <p>The values that are displayed in a control can be configured to only show values that are valid based on what's selected in other controls.</p>
   */
  CascadingControlConfiguration?: CascadingControlConfiguration;
}

/**
 * <p>A control to display a horizontal toggle bar. This is used to change a value by sliding the toggle.</p>
 */
export interface ParameterSliderControl {
  /**
   * <p>The ID of the <code>ParameterSliderControl</code>.</p>
   */
  ParameterControlId: string | undefined;

  /**
   * <p>The title of the <code>ParameterSliderControl</code>.</p>
   */
  Title: string | undefined;

  /**
   * <p>The source parameter name of the <code>ParameterSliderControl</code>.</p>
   */
  SourceParameterName: string | undefined;

  /**
   * <p>The display options of a control.</p>
   */
  DisplayOptions?: SliderControlDisplayOptions;

  /**
   * <p>The smaller value that is displayed at the left of the slider.</p>
   */
  MaximumValue: number | undefined;

  /**
   * <p>The larger value that is displayed at the right of the slider.</p>
   */
  MinimumValue: number | undefined;

  /**
   * <p>The number of increments that the slider bar is divided into.</p>
   */
  StepSize: number | undefined;
}

/**
 * <p>A control to display a text box that is used to enter multiple entries.</p>
 */
export interface ParameterTextAreaControl {
  /**
   * <p>The ID of the <code>ParameterTextAreaControl</code>.</p>
   */
  ParameterControlId: string | undefined;

  /**
   * <p>The title of the <code>ParameterTextAreaControl</code>.</p>
   */
  Title: string | undefined;

  /**
   * <p>The source parameter name of the <code>ParameterTextAreaControl</code>.</p>
   */
  SourceParameterName: string | undefined;

  /**
   * <p>The delimiter that is used to separate the lines in text.</p>
   */
  Delimiter?: string;

  /**
   * <p>The display options of a control.</p>
   */
  DisplayOptions?: TextAreaControlDisplayOptions;
}

/**
 * <p>A control to display a text box that is used to enter a single entry.</p>
 */
export interface ParameterTextFieldControl {
  /**
   * <p>The ID of the <code>ParameterTextFieldControl</code>.</p>
   */
  ParameterControlId: string | undefined;

  /**
   * <p>The title of the <code>ParameterTextFieldControl</code>.</p>
   */
  Title: string | undefined;

  /**
   * <p>The source parameter name of the <code>ParameterTextFieldControl</code>.</p>
   */
  SourceParameterName: string | undefined;

  /**
   * <p>The display options of a control.</p>
   */
  DisplayOptions?: TextFieldControlDisplayOptions;
}

/**
 * <p>The control of a parameter that users can interact with in a dashboard or an analysis.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface ParameterControl {
  /**
   * <p>A control from a date parameter that specifies date and time.</p>
   */
  DateTimePicker?: ParameterDateTimePickerControl;

  /**
   * <p>A control to display a list with buttons or boxes that are used to select either a single value or multiple values.</p>
   */
  List?: ParameterListControl;

  /**
   * <p>A control to display a dropdown list with buttons that are used to select a single value.</p>
   */
  Dropdown?: ParameterDropDownControl;

  /**
   * <p>A control to display a text box that is used to enter a single entry.</p>
   */
  TextField?: ParameterTextFieldControl;

  /**
   * <p>A control to display a text box that is used to enter multiple entries.</p>
   */
  TextArea?: ParameterTextAreaControl;

  /**
   * <p>A control to display a horizontal toggle bar. This is used to change a value by sliding the toggle.</p>
   */
  Slider?: ParameterSliderControl;
}

/**
 * <p>The configuration that determines the elements and canvas size options of sheet control.</p>
 */
export interface SheetControlLayoutConfiguration {
  /**
   * <p>The configuration that determines the elements and canvas size options of sheet control.</p>
   */
  GridLayout?: GridLayoutConfiguration;
}

/**
 * <p>A grid layout to define the placement of sheet control.</p>
 */
export interface SheetControlLayout {
  /**
   * <p>The configuration that determines the elements and canvas size options of sheet control.</p>
   */
  Configuration: SheetControlLayoutConfiguration | undefined;
}

/**
 * <p>A text box.</p>
 */
export interface SheetTextBox {
  /**
   * <p>The unique identifier for a text box. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have text boxes that share identifiers.</p>
   */
  SheetTextBoxId: string | undefined;

  /**
   * <p>The content that is displayed in the text box.</p>
   */
  Content?: string;
}

export enum SelectedFieldOptions {
  ALL_FIELDS = "ALL_FIELDS",
}

/**
 * <p>The configuration of selected fields in the<code>CustomActionFilterOperation</code>.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface FilterOperationSelectedFieldsConfiguration {
  /**
   * <p>Chooses the fields that are filtered in <code>CustomActionFilterOperation</code>.</p>
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
   */
  SelectedFieldOptions?: SelectedFieldOptions | string;
}

export enum TargetVisualOptions {
  ALL_VISUALS = "ALL_VISUALS",
}

/**
 * <p>The configuration of the same-sheet target visuals that you want to be filtered.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface SameSheetTargetVisualConfiguration {
  /**
   * <p>A list of the target visual IDs that are located in the same sheet of the analysis.</p>
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
   */
  TargetVisualOptions?: TargetVisualOptions | string;
}

/**
 * <p>The configuration of target visuals that you want to be filtered.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface FilterOperationTargetVisualsConfiguration {
  /**
   * <p>The configuration of the same-sheet target visuals that you want to be filtered.</p>
   */
  SameSheetTargetVisualConfiguration?: SameSheetTargetVisualConfiguration;
}

/**
 * <p>The filter operation that filters data included in a visual or in an entire sheet.</p>
 */
export interface CustomActionFilterOperation {
  /**
   * <p>The configuration that chooses the fields to be filtered.</p>
   */
  SelectedFieldsConfiguration: FilterOperationSelectedFieldsConfiguration | undefined;

  /**
   * <p>The configuration that chooses the target visuals to be filtered.</p>
   */
  TargetVisualsConfiguration: FilterOperationTargetVisualsConfiguration | undefined;
}

/**
 * <p>The navigation configuration for <code>CustomActionNavigationOperation</code>.</p>
 */
export interface LocalNavigationConfiguration {
  /**
   * <p>The sheet that is targeted for navigation in the same analysis.</p>
   */
  TargetSheetId: string | undefined;
}

/**
 * <p>The navigation operation that navigates between different sheets in the same analysis.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface CustomActionNavigationOperation {
  /**
   * <p>The configuration that chooses the navigation target.</p>
   */
  LocalNavigationConfiguration?: LocalNavigationConfiguration;
}

/**
 * <p>The customized parameter values.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface CustomParameterValues {
  /**
   * <p>A list of string-type parameter values.</p>
   */
  StringValues?: string[];

  /**
   * <p>A list of integer-type parameter values.</p>
   */
  IntegerValues?: number[];

  /**
   * <p>A list of decimal-type parameter values.</p>
   */
  DecimalValues?: number[];

  /**
   * <p>A list of datetime-type parameter values.</p>
   */
  DateTimeValues?: Date[];
}

/**
 * <p>The configuration of custom values for the destination parameter in <code>DestinationParameterValueConfiguration</code>.</p>
 */
export interface CustomValuesConfiguration {
  /**
   * <p>Includes the null value in custom action parameter values.</p>
   */
  IncludeNullValue?: boolean;

  /**
   * <p>The customized parameter values.</p>
   *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
   */
  CustomValues: CustomParameterValues | undefined;
}

export enum SelectAllValueOptions {
  ALL_VALUES = "ALL_VALUES",
}

/**
 * <p>The configuration of destination parameter values.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface DestinationParameterValueConfiguration {
  /**
   * <p>The configuration of custom values for destination parameter in <code>DestinationParameterValueConfiguration</code>.</p>
   */
  CustomValuesConfiguration?: CustomValuesConfiguration;

  /**
   * <p>The configuration that selects all options.</p>
   */
  SelectAllValueOptions?: SelectAllValueOptions | string;

  /**
   * <p>The source parameter name of the destination parameter.</p>
   */
  SourceParameterName?: string;

  /**
   * <p>The source field ID of the destination parameter.</p>
   */
  SourceField?: string;
}

/**
 * <p>The configuration of adding parameters in action.</p>
 */
export interface SetParameterValueConfiguration {
  /**
   * <p>The destination parameter name of the <code>SetParameterValueConfiguration</code>.</p>
   */
  DestinationParameterName: string | undefined;

  /**
   * <p>The configuration of destination parameter values.</p>
   *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
   */
  Value: DestinationParameterValueConfiguration | undefined;
}

/**
 * <p>The set parameter operation that sets parameters in custom action.</p>
 */
export interface CustomActionSetParametersOperation {
  /**
   * <p>The parameter that determines the value configuration.</p>
   */
  ParameterValueConfigurations: SetParameterValueConfiguration[] | undefined;
}

export enum URLTargetConfiguration {
  NEW_TAB = "NEW_TAB",
  NEW_WINDOW = "NEW_WINDOW",
  SAME_TAB = "SAME_TAB",
}

/**
 * <p>The URL operation that opens a link to another webpage.</p>
 */
export interface CustomActionURLOperation {
  /**
   * <p>THe URL link of the <code>CustomActionURLOperation</code>.</p>
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
   */
  URLTarget: URLTargetConfiguration | string | undefined;
}

/**
 * <p>The operation that is defined by the custom action.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface VisualCustomActionOperation {
  /**
   * <p>The filter operation that filters data included in a visual or in an entire sheet.</p>
   */
  FilterOperation?: CustomActionFilterOperation;

  /**
   * <p>The navigation operation that navigates between different sheets in the same analysis.</p>
   */
  NavigationOperation?: CustomActionNavigationOperation;

  /**
   * <p>The URL operation that opens a link to another webpage.</p>
   */
  URLOperation?: CustomActionURLOperation;

  /**
   * <p>The set parameter operation that sets parameters in custom action.</p>
   */
  SetParametersOperation?: CustomActionSetParametersOperation;
}

export enum VisualCustomActionTrigger {
  DATA_POINT_CLICK = "DATA_POINT_CLICK",
  DATA_POINT_MENU = "DATA_POINT_MENU",
}

/**
 * <p>A custom action defined on a visual.</p>
 */
export interface VisualCustomAction {
  /**
   * <p>The ID of the <code>VisualCustomAction</code>.</p>
   */
  CustomActionId: string | undefined;

  /**
   * <p>The name of the <code>VisualCustomAction</code>.</p>
   */
  Name: string | undefined;

  /**
   * <p>The status of the <code>VisualCustomAction</code>.</p>
   */
  Status?: WidgetStatus | string;

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
   */
  Trigger: VisualCustomActionTrigger | string | undefined;

  /**
   * <p>A list of <code>VisualCustomActionOperations</code>.</p>
   *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
   */
  ActionOperations: VisualCustomActionOperation[] | undefined;
}

export enum BarsArrangement {
  CLUSTERED = "CLUSTERED",
  STACKED = "STACKED",
  STACKED_PERCENT = "STACKED_PERCENT",
}

/**
 * <p>The options that determine how a date axis is displayed.</p>
 */
export interface DateAxisOptions {
  /**
   * <p>Determines whether or not missing dates are displayed.</p>
   */
  MissingDateVisibility?: Visibility | string;
}

/**
 * <p>The options that are saved for future extension.</p>
 */
export interface AxisDisplayDataDrivenRange {}

/**
 * <p>The minimum and maximum setup for an axis display range.</p>
 */
export interface AxisDisplayMinMaxRange {
  /**
   * <p>The minimum setup for an axis display range.</p>
   */
  Minimum?: number;

  /**
   * <p>The maximum setup for an axis display range.</p>
   */
  Maximum?: number;
}

/**
 * <p>The range setup of a numeric axis display range.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface AxisDisplayRange {
  /**
   * <p>The minimum and maximum setup of an axis display range.</p>
   */
  MinMax?: AxisDisplayMinMaxRange;

  /**
   * <p>The data-driven setup of an axis display range.</p>
   */
  DataDriven?: AxisDisplayDataDrivenRange;
}

/**
 * <p>The liner axis scale setup.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface AxisLinearScale {
  /**
   * <p>The step count setup of a linear axis.</p>
   */
  StepCount?: number;

  /**
   * <p>The step size setup of a linear axis.</p>
   */
  StepSize?: number;
}

/**
 * <p>The logarithmic axis scale setup.</p>
 */
export interface AxisLogarithmicScale {
  /**
   * <p>The base setup of a logarithmic axis scale.</p>
   */
  Base?: number;
}

/**
 * <p>The scale setup
 *             options for a numeric axis display.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface AxisScale {
  /**
   * <p>The linear axis scale setup.</p>
   */
  Linear?: AxisLinearScale;

  /**
   * <p>The logarithmic axis scale setup.</p>
   */
  Logarithmic?: AxisLogarithmicScale;
}

/**
 * <p>The options for an axis with a numeric field.</p>
 */
export interface NumericAxisOptions {
  /**
   * <p>The scale setup of a numeric axis.</p>
   */
  Scale?: AxisScale;

  /**
   * <p>The range setup of a numeric axis.</p>
   */
  Range?: AxisDisplayRange;
}

/**
 * <p>The data options for an axis.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface AxisDataOptions {
  /**
   * <p>The options for an axis with a numeric field.</p>
   */
  NumericAxisOptions?: NumericAxisOptions;

  /**
   * <p>The options for an axis with a date field.</p>
   */
  DateAxisOptions?: DateAxisOptions;
}

/**
 * <p>The percent range in the visible range.</p>
 */
export interface PercentVisibleRange {
  /**
   * <p>The lower bound of the range.</p>
   */
  From?: number;

  /**
   * <p>The top bound of the range.</p>
   */
  To?: number;
}

/**
 * <p>The range options for the data zoom scroll bar.</p>
 */
export interface VisibleRangeOptions {
  /**
   * <p>The percent range in the visible range.</p>
   */
  PercentRange?: PercentVisibleRange;
}

/**
 * <p>The visual display options for a data zoom scroll bar.</p>
 */
export interface ScrollBarOptions {
  /**
   * <p>The visibility of the data zoom scroll bar.</p>
   */
  Visibility?: Visibility | string;

  /**
   * <p>The visibility range for the data zoom scroll bar.</p>
   */
  VisibleRange?: VisibleRangeOptions;
}

/**
 * <p>The tick label options of an axis.</p>
 */
export interface AxisTickLabelOptions {
  /**
   * <p>Determines whether or not the axis ticks are visible.</p>
   */
  LabelOptions?: LabelOptions;

  /**
   * <p>The rotation angle of the axis tick labels.</p>
   */
  RotationAngle?: number;
}

/**
 * <p>The display options for the axis label.</p>
 */
export interface AxisDisplayOptions {
  /**
   * <p>The tick label options of an axis.</p>
   */
  TickLabelOptions?: AxisTickLabelOptions;

  /**
   * <p>Determines whether or not the axis line is visible.</p>
   */
  AxisLineVisibility?: Visibility | string;

  /**
   * <p>Determines whether or not the grid line is visible.</p>
   */
  GridLineVisibility?: Visibility | string;

  /**
   * <p>The data options for an axis.</p>
   */
  DataOptions?: AxisDataOptions;

  /**
   * <p>The scroll bar options for an axis.</p>
   */
  ScrollbarOptions?: ScrollBarOptions;

  /**
   * <p>The offset value that determines the starting placement of the axis within a visual's bounds.</p>
   */
  AxisOffset?: string;
}

/**
 * <p>The reference that specifies where the axis label is applied to.</p>
 */
export interface AxisLabelReferenceOptions {
  /**
   * <p>The field that the axis label is targeted to.</p>
   */
  FieldId: string | undefined;

  /**
   * <p>The column that the axis label is targeted to.</p>
   */
  Column: ColumnIdentifier | undefined;
}

/**
 * <p>The label options for a chart axis. You must specify the field that the label is targeted to.</p>
 */
export interface AxisLabelOptions {
  /**
   * <p>The font configuration of the axis label.</p>
   */
  FontConfiguration?: FontConfiguration;

  /**
   * <p>The text for the axis label.</p>
   */
  CustomLabel?: string;

  /**
   * <p>The options that indicate which field the label belongs to.</p>
   */
  ApplyTo?: AxisLabelReferenceOptions;
}

/**
 * <p>The label options for an axis on a chart.</p>
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
   */
  Visibility?: Visibility | string;

  /**
   * <p>The visibility configuration of the sort icon on a chart's axis label.</p>
   */
  SortIconVisibility?: Visibility | string;

  /**
   * <p>The label options for a chart axis.</p>
   */
  AxisLabelOptions?: AxisLabelOptions[];
}

/**
 * <p>The contribution analysis visual display for a line, pie, or bar chart.</p>
 */
export interface ContributionAnalysisDefault {
  /**
   * <p>The measure field that is used in the contribution analysis.</p>
   */
  MeasureFieldId: string | undefined;

  /**
   * <p>The dimensions columns that are used in the contribution analysis,
   *             usually a list of <code>ColumnIdentifiers</code>.</p>
   */
  ContributorDimensions: ColumnIdentifier[] | undefined;
}

/**
 * <p>The option that specifies individual data values for labels.</p>
 */
export interface DataPathLabelType {
  /**
   * <p>The field ID of the field that the data label needs to be applied to.</p>
   */
  FieldId?: string;

  /**
   * <p>The actual value of the field that is labeled.</p>
   */
  FieldValue?: string;

  /**
   * <p>The visibility of the data label.</p>
   */
  Visibility?: Visibility | string;
}

/**
 * <p>The field label type.</p>
 */
export interface FieldLabelType {
  /**
   * <p>Indicates the field that is targeted by the field
   *             label.</p>
   */
  FieldId?: string;

  /**
   * <p>The visibility of the field label.</p>
   */
  Visibility?: Visibility | string;
}

/**
 * <p>The maximum label of a data path label.</p>
 */
export interface MaximumLabelType {
  /**
   * <p>The visibility of the maximum label.</p>
   */
  Visibility?: Visibility | string;
}

/**
 * <p>The minimum label of a data path label.</p>
 */
export interface MinimumLabelType {
  /**
   * <p>The visibility of the minimum label.</p>
   */
  Visibility?: Visibility | string;
}

/**
 * <p>The range ends label type of a data path label.</p>
 */
export interface RangeEndsLabelType {
  /**
   * <p>The visibility of the range ends label.</p>
   */
  Visibility?: Visibility | string;
}

/**
 * <p>The option that determines the data label type.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface DataLabelType {
  /**
   * <p>Determines the label configuration for the entire field.</p>
   */
  FieldLabelType?: FieldLabelType;

  /**
   * <p>The option that specifies individual data values for labels.</p>
   */
  DataPathLabelType?: DataPathLabelType;

  /**
   * <p>Determines the label configuration for range end value in a visual.</p>
   */
  RangeEndsLabelType?: RangeEndsLabelType;

  /**
   * <p>Determines the label configuration for the minimum value in a visual.</p>
   */
  MinimumLabelType?: MinimumLabelType;

  /**
   * <p>Determines the label configuration for the maximum value in a visual.</p>
   */
  MaximumLabelType?: MaximumLabelType;
}

export enum DataLabelContent {
  PERCENT = "PERCENT",
  VALUE = "VALUE",
  VALUE_AND_PERCENT = "VALUE_AND_PERCENT",
}

export enum DataLabelOverlap {
  DISABLE_OVERLAP = "DISABLE_OVERLAP",
  ENABLE_OVERLAP = "ENABLE_OVERLAP",
}

export enum DataLabelPosition {
  BOTTOM = "BOTTOM",
  INSIDE = "INSIDE",
  LEFT = "LEFT",
  OUTSIDE = "OUTSIDE",
  RIGHT = "RIGHT",
  TOP = "TOP",
}

/**
 * <p>The options that determine the presentation of the data labels.</p>
 */
export interface DataLabelOptions {
  /**
   * <p>Determines the visibility of the data labels.</p>
   */
  Visibility?: Visibility | string;

  /**
   * <p>Determines the visibility of the category field labels.</p>
   */
  CategoryLabelVisibility?: Visibility | string;

  /**
   * <p>Determines the visibility of the measure field labels.</p>
   */
  MeasureLabelVisibility?: Visibility | string;

  /**
   * <p>The option that determines the data label type.</p>
   */
  DataLabelTypes?: DataLabelType[];

  /**
   * <p>Determines the position of the data labels.</p>
   */
  Position?: DataLabelPosition | string;

  /**
   * <p>Determines the content of the data labels.</p>
   */
  LabelContent?: DataLabelContent | string;

  /**
   * <p>Determines the font configuration of the data labels.</p>
   */
  LabelFontConfiguration?: FontConfiguration;

  /**
   * <p>Determines the color of the data labels.</p>
   */
  LabelColor?: string;

  /**
   * <p>Determines whether overlap is enabled or disabled for the data labels.</p>
   */
  Overlap?: DataLabelOverlap | string;
}

/**
 * <p>The dimension type field with categorical type columns..</p>
 */
export interface CategoricalDimensionField {
  /**
   * <p>The custom field ID.</p>
   */
  FieldId: string | undefined;

  /**
   * <p>The column that is used in the <code>CategoricalDimensionField</code>.</p>
   */
  Column: ColumnIdentifier | undefined;

  /**
   * <p>The custom hierarchy ID.</p>
   */
  HierarchyId?: string;

  /**
   * <p>The format configuration of the field.</p>
   */
  FormatConfiguration?: StringFormatConfiguration;
}

/**
 * <p>The dimension type field with date type columns.</p>
 */
export interface DateDimensionField {
  /**
   * <p>The custom field ID.</p>
   */
  FieldId: string | undefined;

  /**
   * <p>The column that is used in the <code>DateDimensionField</code>.</p>
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
   */
  DateGranularity?: TimeGranularity | string;

  /**
   * <p>The custom hierarchy ID.</p>
   */
  HierarchyId?: string;

  /**
   * <p>The format configuration of the field.</p>
   */
  FormatConfiguration?: DateTimeFormatConfiguration;
}

/**
 * <p>The dimension type field with numerical type columns.</p>
 */
export interface NumericalDimensionField {
  /**
   * <p>The custom field ID.</p>
   */
  FieldId: string | undefined;

  /**
   * <p>The column that is used in the <code>NumericalDimensionField</code>.</p>
   */
  Column: ColumnIdentifier | undefined;

  /**
   * <p>The custom hierarchy ID.</p>
   */
  HierarchyId?: string;

  /**
   * <p>The format configuration of the field.</p>
   */
  FormatConfiguration?: NumberFormatConfiguration;
}

/**
 * <p>The dimension type field.</p>
 */
export interface DimensionField {
  /**
   * <p>The dimension type field with numerical type columns.</p>
   */
  NumericalDimensionField?: NumericalDimensionField;

  /**
   * <p>The dimension type field with categorical type columns.</p>
   */
  CategoricalDimensionField?: CategoricalDimensionField;

  /**
   * <p>The dimension type field with date type columns.</p>
   */
  DateDimensionField?: DateDimensionField;
}

/**
 * <p>The table calculation measure field for pivot tables.</p>
 */
export interface CalculatedMeasureField {
  /**
   * <p>The custom field ID.</p>
   */
  FieldId: string | undefined;

  /**
   * <p>The expression in the table calculation.</p>
   */
  Expression: string | undefined;
}

/**
 * <p>The measure type field with categorical type columns.</p>
 */
export interface CategoricalMeasureField {
  /**
   * <p>The custom field ID.</p>
   */
  FieldId: string | undefined;

  /**
   * <p>The column that is used in the <code>CategoricalMeasureField</code>.</p>
   */
  Column: ColumnIdentifier | undefined;

  /**
   * <p>The aggregation function of the measure field.</p>
   */
  AggregationFunction?: CategoricalAggregationFunction | string;

  /**
   * <p>The format configuration of the field.</p>
   */
  FormatConfiguration?: StringFormatConfiguration;
}

/**
 * <p>The measure type field with date type columns.</p>
 */
export interface DateMeasureField {
  /**
   * <p>The custom field ID.</p>
   */
  FieldId: string | undefined;

  /**
   * <p>The column that is used in the <code>DateMeasureField</code>.</p>
   */
  Column: ColumnIdentifier | undefined;

  /**
   * <p>The aggregation function of the measure field.</p>
   */
  AggregationFunction?: DateAggregationFunction | string;

  /**
   * <p>The format configuration of the field.</p>
   */
  FormatConfiguration?: DateTimeFormatConfiguration;
}

/**
 * <p>The measure type field with numerical type columns.</p>
 */
export interface NumericalMeasureField {
  /**
   * <p>The custom field ID.</p>
   */
  FieldId: string | undefined;

  /**
   * <p>The column that is used in the <code>NumericalMeasureField</code>.</p>
   */
  Column: ColumnIdentifier | undefined;

  /**
   * <p>The aggregation function of the measure field.</p>
   */
  AggregationFunction?: NumericalAggregationFunction;

  /**
   * <p>The format configuration of the field.</p>
   */
  FormatConfiguration?: NumberFormatConfiguration;
}

/**
 * <p>The measure (metric) type field.</p>
 */
export interface MeasureField {
  /**
   * <p>The measure type field with numerical type columns.</p>
   */
  NumericalMeasureField?: NumericalMeasureField;

  /**
   * <p>The measure type field with categorical type columns.</p>
   */
  CategoricalMeasureField?: CategoricalMeasureField;

  /**
   * <p>The measure type field with date type columns.</p>
   */
  DateMeasureField?: DateMeasureField;

  /**
   * <p>The calculated measure field only used in pivot tables.</p>
   */
  CalculatedMeasureField?: CalculatedMeasureField;
}

/**
 * <p>The aggregated field wells of a bar chart.</p>
 */
export interface BarChartAggregatedFieldWells {
  /**
   * <p>The category (y-axis) field well of a bar chart.</p>
   */
  Category?: DimensionField[];

  /**
   * <p>The value field wells of a bar chart. Values are aggregated by
   *             category.</p>
   */
  Values?: MeasureField[];

  /**
   * <p>The color (group/color) field well of a bar chart.</p>
   */
  Colors?: DimensionField[];

  /**
   * <p>The small multiples field well of a bar chart.</p>
   */
  SmallMultiples?: DimensionField[];
}

/**
 * <p>The field wells of a <code>BarChartVisual</code>.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface BarChartFieldWells {
  /**
   * <p>The aggregated field wells of a bar chart.</p>
   */
  BarChartAggregatedFieldWells?: BarChartAggregatedFieldWells;
}

export enum LegendPosition {
  AUTO = "AUTO",
  BOTTOM = "BOTTOM",
  RIGHT = "RIGHT",
  TOP = "TOP",
}

/**
 * <p>The options for the legend setup of a visual.</p>
 */
export interface LegendOptions {
  /**
   * <p>Determines whether or not the legend is visible.</p>
   */
  Visibility?: Visibility | string;

  /**
   * <p>The custom title for the legend.</p>
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
   */
  Position?: LegendPosition | string;

  /**
   * <p>The width of the legend. If this value is omitted, a default width is used when rendering.</p>
   */
  Width?: string;

  /**
   * <p>The height of the legend. If this value is omitted, a default height is used when
   *             rendering.</p>
   */
  Height?: string;
}

export enum BarChartOrientation {
  HORIZONTAL = "HORIZONTAL",
  VERTICAL = "VERTICAL",
}

export enum AxisBinding {
  PRIMARY_YAXIS = "PRIMARY_YAXIS",
  SECONDARY_YAXIS = "SECONDARY_YAXIS",
}

/**
 * <p>The dynamic configuration of the reference line data configuration.</p>
 */
export interface ReferenceLineDynamicDataConfiguration {
  /**
   * <p>The column that the dynamic data targets.</p>
   */
  Column: ColumnIdentifier | undefined;

  /**
   * <p>The aggregation function that is used in the dynamic data.</p>
   */
  MeasureAggregationFunction: AggregationFunction | undefined;

  /**
   * <p>The calculation that is used in the dynamic data.</p>
   */
  Calculation: NumericalAggregationFunction | undefined;
}

/**
 * <p>The static data configuration of the reference line data configuration.</p>
 */
export interface ReferenceLineStaticDataConfiguration {
  /**
   * <p>The double input of the static data.</p>
   */
  Value: number | undefined;
}

/**
 * <p>The data configuration of the reference line.</p>
 */
export interface ReferenceLineDataConfiguration {
  /**
   * <p>The static data configuration of the reference line data
   *             configuration.</p>
   */
  StaticConfiguration?: ReferenceLineStaticDataConfiguration;

  /**
   * <p>The dynamic configuration of the reference line data configuration.</p>
   */
  DynamicConfiguration?: ReferenceLineDynamicDataConfiguration;

  /**
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
 * <p>The configuration for a custom label on a <code>ReferenceLine</code>.</p>
 */
export interface ReferenceLineCustomLabelConfiguration {
  /**
   * <p>The string text of the custom label.</p>
   */
  CustomLabel: string | undefined;
}

export enum ReferenceLineLabelHorizontalPosition {
  CENTER = "CENTER",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}

export enum ReferenceLineValueLabelRelativePosition {
  AFTER_CUSTOM_LABEL = "AFTER_CUSTOM_LABEL",
  BEFORE_CUSTOM_LABEL = "BEFORE_CUSTOM_LABEL",
}

/**
 * <p>The value label configuration of the label in a reference line.</p>
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
   */
  RelativePosition?: ReferenceLineValueLabelRelativePosition | string;

  /**
   * <p>The format configuration of the value label.</p>
   */
  FormatConfiguration?: NumericFormatConfiguration;
}

export enum ReferenceLineLabelVerticalPosition {
  ABOVE = "ABOVE",
  BELOW = "BELOW",
}

/**
 * <p>The label configuration of a reference line.</p>
 */
export interface ReferenceLineLabelConfiguration {
  /**
   * <p>The value label configuration of the label in a reference line.</p>
   */
  ValueLabelConfiguration?: ReferenceLineValueLabelConfiguration;

  /**
   * <p>The custom label configuration of the label in a reference line.</p>
   */
  CustomLabelConfiguration?: ReferenceLineCustomLabelConfiguration;

  /**
   * <p>The font configuration of the label in a reference line.</p>
   */
  FontConfiguration?: FontConfiguration;

  /**
   * <p>The font color configuration of the label in a reference line.</p>
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
   */
  HorizontalPosition?: ReferenceLineLabelHorizontalPosition | string;

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
   */
  VerticalPosition?: ReferenceLineLabelVerticalPosition | string;
}

export enum ReferenceLinePatternType {
  DASHED = "DASHED",
  DOTTED = "DOTTED",
  SOLID = "SOLID",
}

/**
 * <p>The style configuration of the reference
 *             line.</p>
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
   */
  Pattern?: ReferenceLinePatternType | string;

  /**
   * <p>The hex color of the reference line.</p>
   */
  Color?: string;
}

/**
 * <p>The reference line visual display options.</p>
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
   */
  Status?: WidgetStatus | string;

  /**
   * <p>The data configuration of the reference line.</p>
   */
  DataConfiguration: ReferenceLineDataConfiguration | undefined;

  /**
   * <p>The style configuration of the reference line.</p>
   */
  StyleConfiguration?: ReferenceLineStyleConfiguration;

  /**
   * <p>The label configuration of the reference line.</p>
   */
  LabelConfiguration?: ReferenceLineLabelConfiguration;
}

export enum PanelBorderStyle {
  DASHED = "DASHED",
  DOTTED = "DOTTED",
  SOLID = "SOLID",
}

export enum HorizontalTextAlignment {
  AUTO = "AUTO",
  CENTER = "CENTER",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}

/**
 * <p>The options that determine the title styles for each small multiples
 *             panel.</p>
 */
export interface PanelTitleOptions {
  /**
   * <p>Determines whether or not panel titles are displayed.</p>
   */
  Visibility?: Visibility | string;

  /**
   * <p>Configures the display properties of the given text.</p>
   */
  FontConfiguration?: FontConfiguration;

  /**
   * <p>Sets the horizontal text alignment of the title within each panel.</p>
   */
  HorizontalTextAlignment?: HorizontalTextAlignment | string;
}

/**
 * <p>A collection of options that configure how each panel displays in a small multiples chart.</p>
 */
export interface PanelConfiguration {
  /**
   * <p>Configures the title display within each small multiples panel.</p>
   */
  Title?: PanelTitleOptions;

  /**
   * <p>Determines whether or not each panel displays a border.</p>
   */
  BorderVisibility?: Visibility | string;

  /**
   * <p>Sets the line thickness of panel borders.</p>
   */
  BorderThickness?: string;

  /**
   * <p>Sets the line style of panel borders.</p>
   */
  BorderStyle?: PanelBorderStyle | string;

  /**
   * <p>Sets the line color of panel borders.</p>
   */
  BorderColor?: string;

  /**
   * <p>Determines whether or not negative space between sibling panels is rendered.</p>
   */
  GutterVisibility?: Visibility | string;

  /**
   * <p>Sets the total amount of negative space to display between sibling panels.</p>
   */
  GutterSpacing?: string;

  /**
   * <p>Determines whether or not a background for each small multiples panel is rendered.</p>
   */
  BackgroundVisibility?: Visibility | string;

  /**
   * <p>Sets the background color for each panel.</p>
   */
  BackgroundColor?: string;
}

/**
 * <p>Options that determine the layout and display options of a chart's small multiples.</p>
 */
export interface SmallMultiplesOptions {
  /**
   * <p>Sets the maximum number of visible rows to display in the grid of small multiples panels.</p>
   *          <p>The default value is <code>Auto</code>,
   *             which automatically adjusts the rows in the grid
   *             to fit the overall layout and size of the given chart.</p>
   */
  MaxVisibleRows?: number;

  /**
   * <p>Sets the maximum number of visible columns to display in the grid of small multiples panels.</p>
   *          <p>The default is <code>Auto</code>, which automatically adjusts the columns in the grid to fit the overall layout and size of the given chart.</p>
   */
  MaxVisibleColumns?: number;

  /**
   * <p>Configures the display options for each small multiples panel.</p>
   */
  PanelConfiguration?: PanelConfiguration;
}

export enum OtherCategories {
  EXCLUDE = "EXCLUDE",
  INCLUDE = "INCLUDE",
}

/**
 * <p>The limit configuration of the visual display for an axis.</p>
 */
export interface ItemsLimitConfiguration {
  /**
   * <p>The limit on how many items of a field are showed in the chart. For
   *             example, the number of slices that are displayed in a pie chart.</p>
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
   */
  OtherCategories?: OtherCategories | string;
}

/**
 * <p>The sort configuration for a column that is not used in a field well.</p>
 */
export interface ColumnSort {
  /**
   * <p>A column of a data set.</p>
   */
  SortBy: ColumnIdentifier | undefined;

  /**
   * <p>The sort direction.</p>
   */
  Direction: SortDirection | string | undefined;

  /**
   * <p>The aggregation function that is defined in the column sort.</p>
   */
  AggregationFunction?: AggregationFunction;
}

/**
 * <p>The sort configuration for a field in a
 *             field well.</p>
 */
export interface FieldSort {
  /**
   * <p>The sort configuration target field.</p>
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
   */
  Direction: SortDirection | string | undefined;
}

/**
 * <p>The field sort options in a chart configuration.</p>
 */
export interface FieldSortOptions {
  /**
   * <p>The sort configuration for a field in a field well.</p>
   */
  FieldSort?: FieldSort;

  /**
   * <p>The sort configuration for a column that is not used in a field well.</p>
   */
  ColumnSort?: ColumnSort;
}

/**
 * <p>sort-configuration-description</p>
 */
export interface BarChartSortConfiguration {
  /**
   * <p>The sort configuration of category fields.</p>
   */
  CategorySort?: FieldSortOptions[];

  /**
   * <p>The limit on the number of categories displayed in a bar chart.</p>
   */
  CategoryItemsLimit?: ItemsLimitConfiguration;

  /**
   * <p>The sort configuration of color fields in a bar chart.</p>
   */
  ColorSort?: FieldSortOptions[];

  /**
   * <p>The limit on the number of values displayed in a bar chart.</p>
   */
  ColorItemsLimit?: ItemsLimitConfiguration;

  /**
   * <p>The sort configuration of the small multiples field.</p>
   */
  SmallMultiplesSort?: FieldSortOptions[];

  /**
   * <p>The limit on the number of small multiples panels that are displayed.</p>
   */
  SmallMultiplesLimitConfiguration?: ItemsLimitConfiguration;
}

/**
 * <p>The tooltip item for the columns that are not part of a field well.</p>
 */
export interface ColumnTooltipItem {
  /**
   * <p>The target column of the tooltip item.</p>
   */
  Column: ColumnIdentifier | undefined;

  /**
   * <p>The label of the tooltip item.</p>
   */
  Label?: string;

  /**
   * <p>The visibility of the tooltip item.</p>
   */
  Visibility?: Visibility | string;

  /**
   * <p>The aggregation function of the column tooltip item.</p>
   */
  Aggregation?: AggregationFunction;
}

/**
 * <p>The tooltip item for the fields.</p>
 */
export interface FieldTooltipItem {
  /**
   * <p>The unique ID of the field that is targeted by the tooltip.</p>
   */
  FieldId: string | undefined;

  /**
   * <p>The label of the tooltip item.</p>
   */
  Label?: string;

  /**
   * <p>The visibility of the tooltip item.</p>
   */
  Visibility?: Visibility | string;
}

/**
 * <p>The tooltip.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface TooltipItem {
  /**
   * <p>The tooltip item for the fields.</p>
   */
  FieldTooltipItem?: FieldTooltipItem;

  /**
   * <p>The tooltip item for the columns that are not part of a field well.</p>
   */
  ColumnTooltipItem?: ColumnTooltipItem;
}

export enum TooltipTitleType {
  NONE = "NONE",
  PRIMARY_VALUE = "PRIMARY_VALUE",
}

/**
 * <p>The setup for the detailed tooltip.</p>
 */
export interface FieldBasedTooltip {
  /**
   * <p>The visibility of <code>Show aggregations</code>.</p>
   */
  AggregationVisibility?: Visibility | string;

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
   */
  TooltipTitleType?: TooltipTitleType | string;

  /**
   * <p>The fields configuration in the
   *             tooltip.</p>
   */
  TooltipFields?: TooltipItem[];
}

export enum SelectedTooltipType {
  BASIC = "BASIC",
  DETAILED = "DETAILED",
}

/**
 * <p>The display options for the visual tooltip.</p>
 */
export interface TooltipOptions {
  /**
   * <p>Determines whether or not the tooltip is visible.</p>
   */
  TooltipVisibility?: Visibility | string;

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
   */
  SelectedTooltipType?: SelectedTooltipType | string;

  /**
   * <p>The setup for the detailed tooltip. The tooltip setup is always saved. The display type is decided based on the tooltip type.</p>
   */
  FieldBasedTooltip?: FieldBasedTooltip;
}

/**
 * <p>The data path that needs to be sorted.</p>
 */
export interface DataPathValue {
  /**
   * <p>The field ID of the field that needs to be sorted.</p>
   */
  FieldId: string | undefined;

  /**
   * <p>The actual value of the field that needs to be sorted.</p>
   */
  FieldValue: string | undefined;
}

/**
 * <p>The color map that determines the color options for a particular element.</p>
 */
export interface DataPathColor {
  /**
   * <p>The element that the color needs to be applied to.</p>
   */
  Element: DataPathValue | undefined;

  /**
   * <p>The color that needs to be applied to the element.</p>
   */
  Color: string | undefined;

  /**
   * <p>The time granularity of the field that the color needs to be applied to.</p>
   */
  TimeGranularity?: TimeGranularity | string;
}

/**
 * <p>The visual display options for the visual palette.</p>
 */
export interface VisualPalette {
  /**
   * <p>The chart color options for the visual palette.</p>
   */
  ChartColor?: string;

  /**
   * <p>The color map options for the visual palette.</p>
   */
  ColorMap?: DataPathColor[];
}

/**
 * <p>The configuration of a <code>BarChartVisual</code>.</p>
 */
export interface BarChartConfiguration {
  /**
   * <p>The field wells of the visual.</p>
   */
  FieldWells?: BarChartFieldWells;

  /**
   * <p>The sort configuration of a <code>BarChartVisual</code>.</p>
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
   */
  Orientation?: BarChartOrientation | string;

  /**
   * <p>Determines the arrangement of the bars. The orientation and arrangement of bars determine the type of bar that is used in the visual.</p>
   */
  BarsArrangement?: BarsArrangement | string;

  /**
   * <p>The palette (chart color) display setup of the visual.</p>
   */
  VisualPalette?: VisualPalette;

  /**
   * <p>The small multiples setup for the visual.</p>
   */
  SmallMultiplesOptions?: SmallMultiplesOptions;

  /**
   * <p>The label display options (grid line, range, scale, axis step) for bar chart category.</p>
   */
  CategoryAxis?: AxisDisplayOptions;

  /**
   * <p>The label options (label text, label visibility and sort icon visibility) for a bar chart.</p>
   */
  CategoryLabelOptions?: ChartAxisLabelOptions;

  /**
   * <p>The label display options (grid line, range, scale, axis step) for a bar chart value.</p>
   */
  ValueAxis?: AxisDisplayOptions;

  /**
   * <p>The label options (label text, label visibility and sort icon visibility) for a bar chart value.</p>
   */
  ValueLabelOptions?: ChartAxisLabelOptions;

  /**
   * <p>The label options (label text, label visibility and sort icon visibility) for a color that is used in a bar chart.</p>
   */
  ColorLabelOptions?: ChartAxisLabelOptions;

  /**
   * <p>The legend display setup of the visual.</p>
   */
  Legend?: LegendOptions;

  /**
   * <p>The options that determine if visual data labels are displayed.</p>
   */
  DataLabels?: DataLabelOptions;

  /**
   * <p>The tooltip display setup of the visual.</p>
   */
  Tooltip?: TooltipOptions;

  /**
   * <p>The reference line setup of the visual.</p>
   */
  ReferenceLines?: ReferenceLine[];

  /**
   * <p>The contribution analysis (anomaly configuration) setup of the visual.</p>
   */
  ContributionAnalysisDefaults?: ContributionAnalysisDefault[];
}

/**
 * <p>The numeric equality type drill down filter.</p>
 */
export interface CategoryDrillDownFilter {
  /**
   * <p>The column that the filter is applied to.</p>
   */
  Column: ColumnIdentifier | undefined;

  /**
   * <p>A list of the string inputs that are the values of the category drill down filter.</p>
   */
  CategoryValues: string[] | undefined;
}

/**
 * <p>The category drill down filter.</p>
 */
export interface NumericEqualityDrillDownFilter {
  /**
   * <p>The column that the filter is applied to.</p>
   */
  Column: ColumnIdentifier | undefined;

  /**
   * <p>The value of the double input numeric drill down filter.</p>
   */
  Value: number | undefined;
}

/**
 * <p>The time range drill down filter.</p>
 */
export interface TimeRangeDrillDownFilter {
  /**
   * <p>The column that the filter is applied to.</p>
   */
  Column: ColumnIdentifier | undefined;

  /**
   * <p>The minimum value for the filter value range.</p>
   */
  RangeMinimum: Date | undefined;

  /**
   * <p>The maximum value for the filter value range.</p>
   */
  RangeMaximum: Date | undefined;

  /**
   * <p>The level of time precision that is used to aggregate <code>DateTime</code> values.</p>
   */
  TimeGranularity: TimeGranularity | string | undefined;
}

/**
 * <p>The drill down filter for the column hierarchies.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface DrillDownFilter {
  /**
   * <p>The numeric equality type drill down filter. This filter is used for number type columns.</p>
   */
  NumericEqualityFilter?: NumericEqualityDrillDownFilter;

  /**
   * <p>The category type drill down filter. This filter is used for string type columns.</p>
   */
  CategoryFilter?: CategoryDrillDownFilter;

  /**
   * <p>The time range drill down filter. This filter is used for date time columns.</p>
   */
  TimeRangeFilter?: TimeRangeDrillDownFilter;
}

/**
 * <p>The option that determines the hierarchy of any <code>DateTime</code> fields.</p>
 */
export interface DateTimeHierarchy {
  /**
   * <p>The hierarchy ID of the <code>DateTime</code> hierarchy.</p>
   */
  HierarchyId: string | undefined;

  /**
   * <p>The option that determines the drill down filters for the
   *                 <code>DateTime</code> hierarchy.</p>
   */
  DrillDownFilters?: DrillDownFilter[];
}

/**
 * <p>The option that determines the hierarchy of the fields that are built within a visual's field wells. These fields can't be duplicated to other visuals.</p>
 */
export interface ExplicitHierarchy {
  /**
   * <p>The hierarchy ID of the explicit hierarchy.</p>
   */
  HierarchyId: string | undefined;

  /**
   * <p>The list of columns that define the explicit hierarchy.</p>
   */
  Columns: ColumnIdentifier[] | undefined;

  /**
   * <p>The option that determines the drill down filters for the explicit hierarchy.</p>
   */
  DrillDownFilters?: DrillDownFilter[];
}

/**
 * <p>The option that determines the hierarchy of the fields that are defined during data preparation. These fields are available to use in any analysis that uses the data source.</p>
 */
export interface PredefinedHierarchy {
  /**
   * <p>The hierarchy ID of the predefined hierarchy.</p>
   */
  HierarchyId: string | undefined;

  /**
   * <p>The list of columns that define the predefined hierarchy.</p>
   */
  Columns: ColumnIdentifier[] | undefined;

  /**
   * <p>The option that determines the drill down filters for the predefined hierarchy.</p>
   */
  DrillDownFilters?: DrillDownFilter[];
}

/**
 * <p>The option that determines the hierarchy of the fields for a visual element.</p>
 */
export interface ColumnHierarchy {
  /**
   * <p>The option that determines the hierarchy of the fields that are built within a visual's field wells. These fields can't be duplicated to other visuals.</p>
   */
  ExplicitHierarchy?: ExplicitHierarchy;

  /**
   * <p>The option that determines the hierarchy of any <code>DateTime</code> fields.</p>
   */
  DateTimeHierarchy?: DateTimeHierarchy;

  /**
   * <p>The option that determines the hierarchy of the fields that are defined during data preparation. These fields are available to use in any analysis that uses the data source.</p>
   */
  PredefinedHierarchy?: PredefinedHierarchy;
}

/**
 * <p>The text format for a subtitle.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface LongFormatText {
  /**
   * <p>Plain text format.</p>
   */
  PlainText?: string;

  /**
   * <p>Rich text. Examples of rich text include bold, underline, and italics.</p>
   */
  RichText?: string;
}

/**
 * <p>The subtitle label options for a visual.</p>
 */
export interface VisualSubtitleLabelOptions {
  /**
   * <p>The visibility of the subtitle label.</p>
   */
  Visibility?: Visibility | string;

  /**
   * <p>The long text format of the subtitle label, such as plain text or rich text.</p>
   */
  FormatText?: LongFormatText;
}

/**
 * <p>The text format for the title.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface ShortFormatText {
  /**
   * <p>Plain text format.</p>
   */
  PlainText?: string;

  /**
   * <p>Rich text. Examples of rich text include bold, underline, and italics.</p>
   */
  RichText?: string;
}

/**
 * <p>The title label options for a visual.</p>
 */
export interface VisualTitleLabelOptions {
  /**
   * <p>The visibility of the title label.</p>
   */
  Visibility?: Visibility | string;

  /**
   * <p>The short text format of the title label, such as plain text or rich text.</p>
   */
  FormatText?: ShortFormatText;
}

/**
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
   * <p>The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.</p>
   */
  VisualId: string | undefined;

  /**
   * <p>The title that is displayed on the visual.</p>
   */
  Title?: VisualTitleLabelOptions;

  /**
   * <p>The subtitle that is displayed on the visual.</p>
   */
  Subtitle?: VisualSubtitleLabelOptions;

  /**
   * <p>The configuration settings of the visual.</p>
   */
  ChartConfiguration?: BarChartConfiguration;

  /**
   * <p>The list of custom actions that are configured for a visual.</p>
   */
  Actions?: VisualCustomAction[];

  /**
   * <p>The column hierarchy that is used during drill-downs and drill-ups.</p>
   */
  ColumnHierarchies?: ColumnHierarchy[];
}

export enum BoxPlotFillStyle {
  SOLID = "SOLID",
  TRANSPARENT = "TRANSPARENT",
}

/**
 * <p>The style options of the box plot.</p>
 */
export interface BoxPlotStyleOptions {
  /**
   * <p>The fill styles (solid, transparent) of the box plot.</p>
   */
  FillStyle?: BoxPlotFillStyle | string;
}

/**
 * <p>The options of a box plot visual.</p>
 */
export interface BoxPlotOptions {
  /**
   * <p>The style options of the box plot.</p>
   */
  StyleOptions?: BoxPlotStyleOptions;

  /**
   * <p>Determines the visibility of the outlier in a box plot.</p>
   */
  OutlierVisibility?: Visibility | string;

  /**
   * <p>Determines the visibility of all data points of the box plot.</p>
   */
  AllDataPointsVisibility?: Visibility | string;
}

/**
 * <p>The aggregated field well for a box plot.</p>
 */
export interface BoxPlotAggregatedFieldWells {
  /**
   * <p>The group by field well of a box plot chart. Values are grouped based on group by fields.</p>
   */
  GroupBy?: DimensionField[];

  /**
   * <p>The value field well of a box plot chart. Values are aggregated based on group by fields.</p>
   */
  Values?: MeasureField[];
}

/**
 * <p>The field wells of a <code>BoxPlotVisual</code>.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface BoxPlotFieldWells {
  /**
   * <p>The aggregated field wells of a box plot.</p>
   */
  BoxPlotAggregatedFieldWells?: BoxPlotAggregatedFieldWells;
}

/**
 * <p>The pagination configuration for a table visual or boxplot.</p>
 */
export interface PaginationConfiguration {
  /**
   * <p>Indicates how many items render in one page.</p>
   */
  PageSize: number | undefined;

  /**
   * <p>Indicates the page number.</p>
   */
  PageNumber: number | undefined;
}

/**
 * <p>The sort configuration of a <code>BoxPlotVisual</code>.</p>
 */
export interface BoxPlotSortConfiguration {
  /**
   * <p>The sort configuration of a group by fields.</p>
   */
  CategorySort?: FieldSortOptions[];

  /**
   * <p>The pagination configuration of a table visual or box plot.</p>
   */
  PaginationConfiguration?: PaginationConfiguration;
}

/**
 * <p>The configuration of a <code>BoxPlotVisual</code>.</p>
 */
export interface BoxPlotChartConfiguration {
  /**
   * <p>The field wells of the visual.</p>
   */
  FieldWells?: BoxPlotFieldWells;

  /**
   * <p>The sort configuration of a <code>BoxPlotVisual</code>.</p>
   */
  SortConfiguration?: BoxPlotSortConfiguration;

  /**
   * <p>The box plot chart options for a box plot visual</p>
   */
  BoxPlotOptions?: BoxPlotOptions;

  /**
   * <p>The label display options (grid line, range, scale, axis step) of a box plot category.</p>
   */
  CategoryAxis?: AxisDisplayOptions;

  /**
   * <p>The label options (label text, label visibility and sort Icon visibility) of a box plot category.</p>
   */
  CategoryLabelOptions?: ChartAxisLabelOptions;

  /**
   * <p>The label display options (grid line, range, scale, axis step) of a box plot category.</p>
   */
  PrimaryYAxisDisplayOptions?: AxisDisplayOptions;

  /**
   * <p>The label options (label text, label visibility and sort icon visibility) of a box plot value.</p>
   */
  PrimaryYAxisLabelOptions?: ChartAxisLabelOptions;

  /**
   * <p>The options for the legend setup of a visual.</p>
   */
  Legend?: LegendOptions;

  /**
   * <p>The tooltip display setup of the visual.</p>
   */
  Tooltip?: TooltipOptions;

  /**
   * <p>The reference line setup of the visual.</p>
   */
  ReferenceLines?: ReferenceLine[];

  /**
   * <p>The palette (chart color) display setup of the visual.</p>
   */
  VisualPalette?: VisualPalette;
}

/**
 * <p>A box plot.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/box-plots.html">Using box plots</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 */
export interface BoxPlotVisual {
  /**
   * <p>The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers..</p>
   */
  VisualId: string | undefined;

  /**
   * <p>The title that is displayed on the visual.</p>
   */
  Title?: VisualTitleLabelOptions;

  /**
   * <p>The subtitle that is displayed on the visual.</p>
   */
  Subtitle?: VisualSubtitleLabelOptions;

  /**
   * <p>The configuration settings of the visual.</p>
   */
  ChartConfiguration?: BoxPlotChartConfiguration;

  /**
   * <p>The list of custom actions that are configured for a visual.</p>
   */
  Actions?: VisualCustomAction[];

  /**
   * <p>The column hierarchy that is used during drill-downs and drill-ups.</p>
   */
  ColumnHierarchies?: ColumnHierarchy[];
}

/**
 * <p>The aggregated field wells of a combo chart.</p>
 */
export interface ComboChartAggregatedFieldWells {
  /**
   * <p>The aggregated category field wells of a combo chart.</p>
   */
  Category?: DimensionField[];

  /**
   * <p>The aggregated <code>BarValues</code> field well of a combo chart.</p>
   */
  BarValues?: MeasureField[];

  /**
   * <p>The aggregated colors field well of a combo chart.</p>
   */
  Colors?: DimensionField[];

  /**
   * <p>The aggregated <code>LineValues</code> field well of a combo chart.</p>
   */
  LineValues?: MeasureField[];
}

/**
 * <p>The field wells of the visual.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface ComboChartFieldWells {
  /**
   * <p>The aggregated field wells of a combo chart. Combo charts only have aggregated field wells. Columns in a combo chart are aggregated by category.</p>
   */
  ComboChartAggregatedFieldWells?: ComboChartAggregatedFieldWells;
}

/**
 * <p>The sort configuration of a <code>ComboChartVisual</code>.</p>
 */
export interface ComboChartSortConfiguration {
  /**
   * <p>The sort configuration of the category field well in a combo chart.</p>
   */
  CategorySort?: FieldSortOptions[];

  /**
   * <p>The item limit configuration for the category field well of a combo chart.</p>
   */
  CategoryItemsLimit?: ItemsLimitConfiguration;

  /**
   * <p>The sort configuration of the color field well in a combo chart.</p>
   */
  ColorSort?: FieldSortOptions[];

  /**
   * <p>The item limit configuration of the color field well in a combo chart.</p>
   */
  ColorItemsLimit?: ItemsLimitConfiguration;
}

/**
 * <p>The configuration of a <code>ComboChartVisual</code>.</p>
 */
export interface ComboChartConfiguration {
  /**
   * <p>The field wells of the visual.</p>
   */
  FieldWells?: ComboChartFieldWells;

  /**
   * <p>The sort configuration of a <code>ComboChartVisual</code>.</p>
   */
  SortConfiguration?: ComboChartSortConfiguration;

  /**
   * <p>Determines the bar arrangement in a combo chart. The following are valid values in this structure:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CLUSTERED</code>: For clustered bar combo charts.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STACKED</code>: For stacked bar combo charts.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STACKED_PERCENT</code>: Do not use. If you use this value, the operation returns a validation error.</p>
   *             </li>
   *          </ul>
   */
  BarsArrangement?: BarsArrangement | string;

  /**
   * <p>The category axis of a combo chart.</p>
   */
  CategoryAxis?: AxisDisplayOptions;

  /**
   * <p>The label options (label text, label visibility, and sort icon visibility) of a combo chart category (group/color) field well.</p>
   */
  CategoryLabelOptions?: ChartAxisLabelOptions;

  /**
   * <p>The label display options (grid line, range, scale, and axis step) of a combo chart's primary y-axis (bar) field well.</p>
   */
  PrimaryYAxisDisplayOptions?: AxisDisplayOptions;

  /**
   * <p>The label options (label text, label visibility, and sort icon visibility) of a combo chart's primary y-axis (bar) field well.</p>
   */
  PrimaryYAxisLabelOptions?: ChartAxisLabelOptions;

  /**
   * <p>The label display options (grid line, range, scale, axis step) of a combo chart's secondary y-axis (line) field well.</p>
   */
  SecondaryYAxisDisplayOptions?: AxisDisplayOptions;

  /**
   * <p>The label options (label text, label visibility, and sort icon visibility) of a combo chart's secondary y-axis(line) field well.</p>
   */
  SecondaryYAxisLabelOptions?: ChartAxisLabelOptions;

  /**
   * <p>The label options (label text, label visibility, and sort icon visibility) of a combo chart's color field well.</p>
   */
  ColorLabelOptions?: ChartAxisLabelOptions;

  /**
   * <p>The legend display setup of the visual.</p>
   */
  Legend?: LegendOptions;

  /**
   * <p>The options that determine if visual data labels are displayed.</p>
   *          <p>The data label options for a bar in a combo chart.</p>
   */
  BarDataLabels?: DataLabelOptions;

  /**
   * <p>The options that determine if visual data labels are displayed.</p>
   *          <p>The data label options for a line in a combo chart.</p>
   */
  LineDataLabels?: DataLabelOptions;

  /**
   * <p>The legend display setup of the visual.</p>
   */
  Tooltip?: TooltipOptions;

  /**
   * <p>The reference line setup of the visual.</p>
   */
  ReferenceLines?: ReferenceLine[];

  /**
   * <p>The palette (chart color) display setup of the visual.</p>
   */
  VisualPalette?: VisualPalette;
}

/**
 * @internal
 */
export const AccountCustomizationFilterSensitiveLog = (obj: AccountCustomization): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AccountInfoFilterSensitiveLog = (obj: AccountInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AccountSettingsFilterSensitiveLog = (obj: AccountSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActiveIAMPolicyAssignmentFilterSensitiveLog = (obj: ActiveIAMPolicyAssignment): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AdHocFilteringOptionFilterSensitiveLog = (obj: AdHocFilteringOption): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PercentileAggregationFilterSensitiveLog = (obj: PercentileAggregation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NumericalAggregationFunctionFilterSensitiveLog = (obj: NumericalAggregationFunction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AggregationFunctionFilterSensitiveLog = (obj: AggregationFunction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ColumnIdentifierFilterSensitiveLog = (obj: ColumnIdentifier): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AggregationSortConfigurationFilterSensitiveLog = (obj: AggregationSortConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AmazonElasticsearchParametersFilterSensitiveLog = (obj: AmazonElasticsearchParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AmazonOpenSearchParametersFilterSensitiveLog = (obj: AmazonOpenSearchParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EntityFilterSensitiveLog = (obj: Entity): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AnalysisErrorFilterSensitiveLog = (obj: AnalysisError): any => ({
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
export const FreeFormLayoutScreenCanvasSizeOptionsFilterSensitiveLog = (
  obj: FreeFormLayoutScreenCanvasSizeOptions
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FreeFormLayoutCanvasSizeOptionsFilterSensitiveLog = (obj: FreeFormLayoutCanvasSizeOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DefaultFreeFormLayoutConfigurationFilterSensitiveLog = (obj: DefaultFreeFormLayoutConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GridLayoutScreenCanvasSizeOptionsFilterSensitiveLog = (obj: GridLayoutScreenCanvasSizeOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GridLayoutCanvasSizeOptionsFilterSensitiveLog = (obj: GridLayoutCanvasSizeOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DefaultGridLayoutConfigurationFilterSensitiveLog = (obj: DefaultGridLayoutConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DefaultInteractiveLayoutConfigurationFilterSensitiveLog = (
  obj: DefaultInteractiveLayoutConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SpacingFilterSensitiveLog = (obj: Spacing): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SectionBasedLayoutPaperCanvasSizeOptionsFilterSensitiveLog = (
  obj: SectionBasedLayoutPaperCanvasSizeOptions
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SectionBasedLayoutCanvasSizeOptionsFilterSensitiveLog = (
  obj: SectionBasedLayoutCanvasSizeOptions
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DefaultSectionBasedLayoutConfigurationFilterSensitiveLog = (
  obj: DefaultSectionBasedLayoutConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DefaultPaginatedLayoutConfigurationFilterSensitiveLog = (
  obj: DefaultPaginatedLayoutConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DefaultNewSheetConfigurationFilterSensitiveLog = (obj: DefaultNewSheetConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AnalysisDefaultsFilterSensitiveLog = (obj: AnalysisDefaults): any => ({
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
export const NullValueFormatConfigurationFilterSensitiveLog = (obj: NullValueFormatConfiguration): any => ({
  ...obj,
  ...(obj.NullString && { NullString: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DecimalPlacesConfigurationFilterSensitiveLog = (obj: DecimalPlacesConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NegativeValueConfigurationFilterSensitiveLog = (obj: NegativeValueConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ThousandSeparatorOptionsFilterSensitiveLog = (obj: ThousandSeparatorOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NumericSeparatorConfigurationFilterSensitiveLog = (obj: NumericSeparatorConfiguration): any => ({
  ...obj,
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
});

/**
 * @internal
 */
export const DataSetIdentifierDeclarationFilterSensitiveLog = (obj: DataSetIdentifierDeclaration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomFilterConfigurationFilterSensitiveLog = (obj: CustomFilterConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomFilterListConfigurationFilterSensitiveLog = (obj: CustomFilterListConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FilterListConfigurationFilterSensitiveLog = (obj: FilterListConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CategoryFilterConfigurationFilterSensitiveLog = (obj: CategoryFilterConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CategoryFilterFilterSensitiveLog = (obj: CategoryFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NumericEqualityFilterFilterSensitiveLog = (obj: NumericEqualityFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NumericRangeFilterValueFilterSensitiveLog = (obj: NumericRangeFilterValue): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NumericRangeFilterFilterSensitiveLog = (obj: NumericRangeFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AnchorDateConfigurationFilterSensitiveLog = (obj: AnchorDateConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExcludePeriodConfigurationFilterSensitiveLog = (obj: ExcludePeriodConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RelativeDatesFilterFilterSensitiveLog = (obj: RelativeDatesFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TimeEqualityFilterFilterSensitiveLog = (obj: TimeEqualityFilter): any => ({
  ...obj,
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
export const TopBottomFilterFilterSensitiveLog = (obj: TopBottomFilter): any => ({
  ...obj,
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
export const SheetVisualScopingConfigurationFilterSensitiveLog = (obj: SheetVisualScopingConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SelectedSheetsFilterScopeConfigurationFilterSensitiveLog = (
  obj: SelectedSheetsFilterScopeConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FilterScopeConfigurationFilterSensitiveLog = (obj: FilterScopeConfiguration): any => ({
  ...obj,
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
export const DynamicDefaultValueFilterSensitiveLog = (obj: DynamicDefaultValue): any => ({
  ...obj,
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
export const FontSizeFilterSensitiveLog = (obj: FontSize): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FontWeightFilterSensitiveLog = (obj: FontWeight): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FontConfigurationFilterSensitiveLog = (obj: FontConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LabelOptionsFilterSensitiveLog = (obj: LabelOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DateTimePickerControlDisplayOptionsFilterSensitiveLog = (
  obj: DateTimePickerControlDisplayOptions
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FilterDateTimePickerControlFilterSensitiveLog = (obj: FilterDateTimePickerControl): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CascadingControlSourceFilterSensitiveLog = (obj: CascadingControlSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CascadingControlConfigurationFilterSensitiveLog = (obj: CascadingControlConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListControlSelectAllOptionsFilterSensitiveLog = (obj: ListControlSelectAllOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DropDownControlDisplayOptionsFilterSensitiveLog = (obj: DropDownControlDisplayOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FilterSelectableValuesFilterSensitiveLog = (obj: FilterSelectableValues): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FilterDropDownControlFilterSensitiveLog = (obj: FilterDropDownControl): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListControlSearchOptionsFilterSensitiveLog = (obj: ListControlSearchOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListControlDisplayOptionsFilterSensitiveLog = (obj: ListControlDisplayOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FilterListControlFilterSensitiveLog = (obj: FilterListControl): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RelativeDateTimeControlDisplayOptionsFilterSensitiveLog = (
  obj: RelativeDateTimeControlDisplayOptions
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FilterRelativeDateTimeControlFilterSensitiveLog = (obj: FilterRelativeDateTimeControl): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SliderControlDisplayOptionsFilterSensitiveLog = (obj: SliderControlDisplayOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FilterSliderControlFilterSensitiveLog = (obj: FilterSliderControl): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TextControlPlaceholderOptionsFilterSensitiveLog = (obj: TextControlPlaceholderOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TextAreaControlDisplayOptionsFilterSensitiveLog = (obj: TextAreaControlDisplayOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FilterTextAreaControlFilterSensitiveLog = (obj: FilterTextAreaControl): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TextFieldControlDisplayOptionsFilterSensitiveLog = (obj: TextFieldControlDisplayOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FilterTextFieldControlFilterSensitiveLog = (obj: FilterTextFieldControl): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FilterControlFilterSensitiveLog = (obj: FilterControl): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FreeFormLayoutElementBackgroundStyleFilterSensitiveLog = (
  obj: FreeFormLayoutElementBackgroundStyle
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FreeFormLayoutElementBorderStyleFilterSensitiveLog = (obj: FreeFormLayoutElementBorderStyle): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoadingAnimationFilterSensitiveLog = (obj: LoadingAnimation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SheetElementConfigurationOverridesFilterSensitiveLog = (obj: SheetElementConfigurationOverrides): any => ({
  ...obj,
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
export const GridLayoutElementFilterSensitiveLog = (obj: GridLayoutElement): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GridLayoutConfigurationFilterSensitiveLog = (obj: GridLayoutConfiguration): any => ({
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
export const SectionAfterPageBreakFilterSensitiveLog = (obj: SectionAfterPageBreak): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SectionPageBreakConfigurationFilterSensitiveLog = (obj: SectionPageBreakConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SectionStyleFilterSensitiveLog = (obj: SectionStyle): any => ({
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
export const ParameterDateTimePickerControlFilterSensitiveLog = (obj: ParameterDateTimePickerControl): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ParameterSelectableValuesFilterSensitiveLog = (obj: ParameterSelectableValues): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ParameterDropDownControlFilterSensitiveLog = (obj: ParameterDropDownControl): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ParameterListControlFilterSensitiveLog = (obj: ParameterListControl): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ParameterSliderControlFilterSensitiveLog = (obj: ParameterSliderControl): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ParameterTextAreaControlFilterSensitiveLog = (obj: ParameterTextAreaControl): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ParameterTextFieldControlFilterSensitiveLog = (obj: ParameterTextFieldControl): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ParameterControlFilterSensitiveLog = (obj: ParameterControl): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SheetControlLayoutConfigurationFilterSensitiveLog = (obj: SheetControlLayoutConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SheetControlLayoutFilterSensitiveLog = (obj: SheetControlLayout): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SheetTextBoxFilterSensitiveLog = (obj: SheetTextBox): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FilterOperationSelectedFieldsConfigurationFilterSensitiveLog = (
  obj: FilterOperationSelectedFieldsConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SameSheetTargetVisualConfigurationFilterSensitiveLog = (obj: SameSheetTargetVisualConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FilterOperationTargetVisualsConfigurationFilterSensitiveLog = (
  obj: FilterOperationTargetVisualsConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomActionFilterOperationFilterSensitiveLog = (obj: CustomActionFilterOperation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LocalNavigationConfigurationFilterSensitiveLog = (obj: LocalNavigationConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomActionNavigationOperationFilterSensitiveLog = (obj: CustomActionNavigationOperation): any => ({
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
export const CustomActionURLOperationFilterSensitiveLog = (obj: CustomActionURLOperation): any => ({
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
export const DateAxisOptionsFilterSensitiveLog = (obj: DateAxisOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AxisDisplayDataDrivenRangeFilterSensitiveLog = (obj: AxisDisplayDataDrivenRange): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AxisDisplayMinMaxRangeFilterSensitiveLog = (obj: AxisDisplayMinMaxRange): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AxisDisplayRangeFilterSensitiveLog = (obj: AxisDisplayRange): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AxisLinearScaleFilterSensitiveLog = (obj: AxisLinearScale): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AxisLogarithmicScaleFilterSensitiveLog = (obj: AxisLogarithmicScale): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AxisScaleFilterSensitiveLog = (obj: AxisScale): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NumericAxisOptionsFilterSensitiveLog = (obj: NumericAxisOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AxisDataOptionsFilterSensitiveLog = (obj: AxisDataOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PercentVisibleRangeFilterSensitiveLog = (obj: PercentVisibleRange): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VisibleRangeOptionsFilterSensitiveLog = (obj: VisibleRangeOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScrollBarOptionsFilterSensitiveLog = (obj: ScrollBarOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AxisTickLabelOptionsFilterSensitiveLog = (obj: AxisTickLabelOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AxisDisplayOptionsFilterSensitiveLog = (obj: AxisDisplayOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AxisLabelReferenceOptionsFilterSensitiveLog = (obj: AxisLabelReferenceOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AxisLabelOptionsFilterSensitiveLog = (obj: AxisLabelOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ChartAxisLabelOptionsFilterSensitiveLog = (obj: ChartAxisLabelOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ContributionAnalysisDefaultFilterSensitiveLog = (obj: ContributionAnalysisDefault): any => ({
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
export const FieldLabelTypeFilterSensitiveLog = (obj: FieldLabelType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MaximumLabelTypeFilterSensitiveLog = (obj: MaximumLabelType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MinimumLabelTypeFilterSensitiveLog = (obj: MinimumLabelType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RangeEndsLabelTypeFilterSensitiveLog = (obj: RangeEndsLabelType): any => ({
  ...obj,
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
export const LegendOptionsFilterSensitiveLog = (obj: LegendOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReferenceLineDynamicDataConfigurationFilterSensitiveLog = (
  obj: ReferenceLineDynamicDataConfiguration
): any => ({
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
export const ReferenceLineCustomLabelConfigurationFilterSensitiveLog = (
  obj: ReferenceLineCustomLabelConfiguration
): any => ({
  ...obj,
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
export const ReferenceLineStyleConfigurationFilterSensitiveLog = (obj: ReferenceLineStyleConfiguration): any => ({
  ...obj,
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
export const PanelTitleOptionsFilterSensitiveLog = (obj: PanelTitleOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PanelConfigurationFilterSensitiveLog = (obj: PanelConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SmallMultiplesOptionsFilterSensitiveLog = (obj: SmallMultiplesOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ItemsLimitConfigurationFilterSensitiveLog = (obj: ItemsLimitConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ColumnSortFilterSensitiveLog = (obj: ColumnSort): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FieldSortFilterSensitiveLog = (obj: FieldSort): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FieldSortOptionsFilterSensitiveLog = (obj: FieldSortOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BarChartSortConfigurationFilterSensitiveLog = (obj: BarChartSortConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ColumnTooltipItemFilterSensitiveLog = (obj: ColumnTooltipItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FieldTooltipItemFilterSensitiveLog = (obj: FieldTooltipItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TooltipItemFilterSensitiveLog = (obj: TooltipItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FieldBasedTooltipFilterSensitiveLog = (obj: FieldBasedTooltip): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TooltipOptionsFilterSensitiveLog = (obj: TooltipOptions): any => ({
  ...obj,
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
export const CategoryDrillDownFilterFilterSensitiveLog = (obj: CategoryDrillDownFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NumericEqualityDrillDownFilterFilterSensitiveLog = (obj: NumericEqualityDrillDownFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TimeRangeDrillDownFilterFilterSensitiveLog = (obj: TimeRangeDrillDownFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DrillDownFilterFilterSensitiveLog = (obj: DrillDownFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DateTimeHierarchyFilterSensitiveLog = (obj: DateTimeHierarchy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExplicitHierarchyFilterSensitiveLog = (obj: ExplicitHierarchy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PredefinedHierarchyFilterSensitiveLog = (obj: PredefinedHierarchy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ColumnHierarchyFilterSensitiveLog = (obj: ColumnHierarchy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LongFormatTextFilterSensitiveLog = (obj: LongFormatText): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VisualSubtitleLabelOptionsFilterSensitiveLog = (obj: VisualSubtitleLabelOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ShortFormatTextFilterSensitiveLog = (obj: ShortFormatText): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VisualTitleLabelOptionsFilterSensitiveLog = (obj: VisualTitleLabelOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BarChartVisualFilterSensitiveLog = (obj: BarChartVisual): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BoxPlotStyleOptionsFilterSensitiveLog = (obj: BoxPlotStyleOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BoxPlotOptionsFilterSensitiveLog = (obj: BoxPlotOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BoxPlotAggregatedFieldWellsFilterSensitiveLog = (obj: BoxPlotAggregatedFieldWells): any => ({
  ...obj,
  ...(obj.Values && { Values: obj.Values.map((item) => MeasureFieldFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const BoxPlotFieldWellsFilterSensitiveLog = (obj: BoxPlotFieldWells): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PaginationConfigurationFilterSensitiveLog = (obj: PaginationConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BoxPlotSortConfigurationFilterSensitiveLog = (obj: BoxPlotSortConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BoxPlotChartConfigurationFilterSensitiveLog = (obj: BoxPlotChartConfiguration): any => ({
  ...obj,
  ...(obj.ReferenceLines && {
    ReferenceLines: obj.ReferenceLines.map((item) => ReferenceLineFilterSensitiveLog(item)),
  }),
  ...(obj.VisualPalette && { VisualPalette: VisualPaletteFilterSensitiveLog(obj.VisualPalette) }),
});

/**
 * @internal
 */
export const BoxPlotVisualFilterSensitiveLog = (obj: BoxPlotVisual): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ComboChartAggregatedFieldWellsFilterSensitiveLog = (obj: ComboChartAggregatedFieldWells): any => ({
  ...obj,
  ...(obj.BarValues && { BarValues: obj.BarValues.map((item) => MeasureFieldFilterSensitiveLog(item)) }),
  ...(obj.LineValues && { LineValues: obj.LineValues.map((item) => MeasureFieldFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ComboChartFieldWellsFilterSensitiveLog = (obj: ComboChartFieldWells): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ComboChartSortConfigurationFilterSensitiveLog = (obj: ComboChartSortConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ComboChartConfigurationFilterSensitiveLog = (obj: ComboChartConfiguration): any => ({
  ...obj,
  ...(obj.BarDataLabels && { BarDataLabels: DataLabelOptionsFilterSensitiveLog(obj.BarDataLabels) }),
  ...(obj.LineDataLabels && { LineDataLabels: DataLabelOptionsFilterSensitiveLog(obj.LineDataLabels) }),
  ...(obj.ReferenceLines && {
    ReferenceLines: obj.ReferenceLines.map((item) => ReferenceLineFilterSensitiveLog(item)),
  }),
  ...(obj.VisualPalette && { VisualPalette: VisualPaletteFilterSensitiveLog(obj.VisualPalette) }),
});
