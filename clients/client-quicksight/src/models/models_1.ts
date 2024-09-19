// smithy-typescript generated code
import { SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  AggregationFunction,
  AxisBinding,
  AxisDisplayOptions,
  BarChartFieldWells,
  BarChartOrientation,
  BarsArrangement,
  ChartAxisLabelOptions,
  ColumnIdentifier,
  ColumnSort,
  ContributionAnalysisDefault,
  DataLabelOptions,
  DataLabelOptionsFilterSensitiveLog,
  DataLabelPosition,
  DimensionField,
  FontConfiguration,
  FormatConfiguration,
  FormatConfigurationFilterSensitiveLog,
  HorizontalTextAlignment,
  LegendOptions,
  MeasureField,
  MeasureFieldFilterSensitiveLog,
  NumberDisplayFormatConfiguration,
  NumberDisplayFormatConfigurationFilterSensitiveLog,
  PercentageDisplayFormatConfiguration,
  PercentageDisplayFormatConfigurationFilterSensitiveLog,
  ReferenceLine,
  ReferenceLineFilterSensitiveLog,
  SmallMultiplesOptions,
  SortDirection,
  TimeGranularity,
  URLTargetConfiguration,
  Visibility,
  VisualCustomAction,
  VisualInteractionOptions,
  WidgetStatus,
} from "./models_0";

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
 * <p>The category drill down filter.</p>
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
 * <p>The numeric equality type drill down filter.</p>
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
 * <p>The option that determines the hierarchy of the fields that are defined during data preparation. These fields are available to use in any analysis that uses the data source.</p>
 * @public
 */
export interface PredefinedHierarchy {
  /**
   * <p>The hierarchy ID of the predefined hierarchy.</p>
   * @public
   */
  HierarchyId: string | undefined;

  /**
   * <p>The list of columns that define the predefined hierarchy.</p>
   * @public
   */
  Columns: ColumnIdentifier[] | undefined;

  /**
   * <p>The option that determines the drill down filters for the predefined hierarchy.</p>
   * @public
   */
  DrillDownFilters?: DrillDownFilter[];
}

/**
 * <p>The option that determines the hierarchy of the fields for a visual element.</p>
 * @public
 */
export interface ColumnHierarchy {
  /**
   * <p>The option that determines the hierarchy of the fields that are built within a visual's field wells. These fields can't be duplicated to other visuals.</p>
   * @public
   */
  ExplicitHierarchy?: ExplicitHierarchy;

  /**
   * <p>The option that determines the hierarchy of any <code>DateTime</code> fields.</p>
   * @public
   */
  DateTimeHierarchy?: DateTimeHierarchy;

  /**
   * <p>The option that determines the hierarchy of the fields that are defined during data preparation. These fields are available to use in any analysis that uses the data source.</p>
   * @public
   */
  PredefinedHierarchy?: PredefinedHierarchy;
}

/**
 * <p>The text format for a subtitle.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 * @public
 */
export interface LongFormatText {
  /**
   * <p>Plain text format.</p>
   * @public
   */
  PlainText?: string;

  /**
   * <p>Rich text. Examples of rich text include bold, underline, and italics.</p>
   * @public
   */
  RichText?: string;
}

/**
 * <p>The subtitle label options for a visual.</p>
 * @public
 */
export interface VisualSubtitleLabelOptions {
  /**
   * <p>The visibility of the subtitle label.</p>
   * @public
   */
  Visibility?: Visibility;

  /**
   * <p>The long text format of the subtitle label, such as plain text or rich text.</p>
   * @public
   */
  FormatText?: LongFormatText;
}

/**
 * <p>The text format for the title.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 * @public
 */
export interface ShortFormatText {
  /**
   * <p>Plain text format.</p>
   * @public
   */
  PlainText?: string;

  /**
   * <p>Rich text. Examples of rich text include bold, underline, and italics.</p>
   * @public
   */
  RichText?: string;
}

/**
 * <p>The title label options for a visual.</p>
 * @public
 */
export interface VisualTitleLabelOptions {
  /**
   * <p>The visibility of the title label.</p>
   * @public
   */
  Visibility?: Visibility;

  /**
   * <p>The short text format of the title label, such as plain text or rich text.</p>
   * @public
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
 * @public
 */
export interface BarChartVisual {
  /**
   * <p>The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.</p>
   * @public
   */
  VisualId: string | undefined;

  /**
   * <p>The title that is displayed on the visual.</p>
   * @public
   */
  Title?: VisualTitleLabelOptions;

  /**
   * <p>The subtitle that is displayed on the visual.</p>
   * @public
   */
  Subtitle?: VisualSubtitleLabelOptions;

  /**
   * <p>The configuration settings of the visual.</p>
   * @public
   */
  ChartConfiguration?: BarChartConfiguration;

  /**
   * <p>The list of custom actions that are configured for a visual.</p>
   * @public
   */
  Actions?: VisualCustomAction[];

  /**
   * <p>The column hierarchy that is used during drill-downs and drill-ups.</p>
   * @public
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
 * <p>The style options of the box plot.</p>
 * @public
 */
export interface BoxPlotStyleOptions {
  /**
   * <p>The fill styles (solid, transparent) of the box plot.</p>
   * @public
   */
  FillStyle?: BoxPlotFillStyle;
}

/**
 * <p>The options of a box plot visual.</p>
 * @public
 */
export interface BoxPlotOptions {
  /**
   * <p>The style options of the box plot.</p>
   * @public
   */
  StyleOptions?: BoxPlotStyleOptions;

  /**
   * <p>Determines the visibility of the outlier in a box plot.</p>
   * @public
   */
  OutlierVisibility?: Visibility;

  /**
   * <p>Determines the visibility of all data points of the box plot.</p>
   * @public
   */
  AllDataPointsVisibility?: Visibility;
}

/**
 * <p>The aggregated field well for a box plot.</p>
 * @public
 */
export interface BoxPlotAggregatedFieldWells {
  /**
   * <p>The group by field well of a box plot chart. Values are grouped based on group by fields.</p>
   * @public
   */
  GroupBy?: DimensionField[];

  /**
   * <p>The value field well of a box plot chart. Values are aggregated based on group by fields.</p>
   * @public
   */
  Values?: MeasureField[];
}

/**
 * <p>The field wells of a <code>BoxPlotVisual</code>.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 * @public
 */
export interface BoxPlotFieldWells {
  /**
   * <p>The aggregated field wells of a box plot.</p>
   * @public
   */
  BoxPlotAggregatedFieldWells?: BoxPlotAggregatedFieldWells;
}

/**
 * <p>The pagination configuration for a table visual or boxplot.</p>
 * @public
 */
export interface PaginationConfiguration {
  /**
   * <p>Indicates how many items render in one page.</p>
   * @public
   */
  PageSize: number | undefined;

  /**
   * <p>Indicates the page number.</p>
   * @public
   */
  PageNumber: number | undefined;
}

/**
 * <p>The sort configuration of a <code>BoxPlotVisual</code>.</p>
 * @public
 */
export interface BoxPlotSortConfiguration {
  /**
   * <p>The sort configuration of a group by fields.</p>
   * @public
   */
  CategorySort?: FieldSortOptions[];

  /**
   * <p>The pagination configuration of a table visual or box plot.</p>
   * @public
   */
  PaginationConfiguration?: PaginationConfiguration;
}

/**
 * <p>The configuration of a <code>BoxPlotVisual</code>.</p>
 * @public
 */
export interface BoxPlotChartConfiguration {
  /**
   * <p>The field wells of the visual.</p>
   * @public
   */
  FieldWells?: BoxPlotFieldWells;

  /**
   * <p>The sort configuration of a <code>BoxPlotVisual</code>.</p>
   * @public
   */
  SortConfiguration?: BoxPlotSortConfiguration;

  /**
   * <p>The box plot chart options for a box plot visual</p>
   * @public
   */
  BoxPlotOptions?: BoxPlotOptions;

  /**
   * <p>The label display options (grid line, range, scale, axis step) of a box plot category.</p>
   * @public
   */
  CategoryAxis?: AxisDisplayOptions;

  /**
   * <p>The label options (label text, label visibility and sort Icon visibility) of a box plot category.</p>
   * @public
   */
  CategoryLabelOptions?: ChartAxisLabelOptions;

  /**
   * <p>The label display options (grid line, range, scale, axis step) of a box plot category.</p>
   * @public
   */
  PrimaryYAxisDisplayOptions?: AxisDisplayOptions;

  /**
   * <p>The label options (label text, label visibility and sort icon visibility) of a box plot value.</p>
   * @public
   */
  PrimaryYAxisLabelOptions?: ChartAxisLabelOptions;

  /**
   * <p>The options for the legend setup of a visual.</p>
   * @public
   */
  Legend?: LegendOptions;

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
   * <p>The palette (chart color) display setup of the visual.</p>
   * @public
   */
  VisualPalette?: VisualPalette;

  /**
   * <p>The general visual interactions setup for a visual.</p>
   * @public
   */
  Interactions?: VisualInteractionOptions;
}

/**
 * <p>A box plot.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/box-plots.html">Using box plots</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 * @public
 */
export interface BoxPlotVisual {
  /**
   * <p>The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers..</p>
   * @public
   */
  VisualId: string | undefined;

  /**
   * <p>The title that is displayed on the visual.</p>
   * @public
   */
  Title?: VisualTitleLabelOptions;

  /**
   * <p>The subtitle that is displayed on the visual.</p>
   * @public
   */
  Subtitle?: VisualSubtitleLabelOptions;

  /**
   * <p>The configuration settings of the visual.</p>
   * @public
   */
  ChartConfiguration?: BoxPlotChartConfiguration;

  /**
   * <p>The list of custom actions that are configured for a visual.</p>
   * @public
   */
  Actions?: VisualCustomAction[];

  /**
   * <p>The column hierarchy that is used during drill-downs and drill-ups.</p>
   * @public
   */
  ColumnHierarchies?: ColumnHierarchy[];
}

/**
 * <p>The aggregated field wells of a combo chart.</p>
 * @public
 */
export interface ComboChartAggregatedFieldWells {
  /**
   * <p>The aggregated category field wells of a combo chart.</p>
   * @public
   */
  Category?: DimensionField[];

  /**
   * <p>The aggregated <code>BarValues</code> field well of a combo chart.</p>
   * @public
   */
  BarValues?: MeasureField[];

  /**
   * <p>The aggregated colors field well of a combo chart.</p>
   * @public
   */
  Colors?: DimensionField[];

  /**
   * <p>The aggregated <code>LineValues</code> field well of a combo chart.</p>
   * @public
   */
  LineValues?: MeasureField[];
}

/**
 * <p>The field wells of the visual.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 * @public
 */
export interface ComboChartFieldWells {
  /**
   * <p>The aggregated field wells of a combo chart. Combo charts only have aggregated field wells. Columns in a combo chart are aggregated by category.</p>
   * @public
   */
  ComboChartAggregatedFieldWells?: ComboChartAggregatedFieldWells;
}

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
 * <p>The options that are available for a single Y axis in a chart.</p>
 * @public
 */
export interface YAxisOptions {
  /**
   * <p>The Y axis type to be used in the chart.</p>
   *          <p>If you choose <code>PRIMARY_Y_AXIS</code>, the primary Y Axis is located on the leftmost vertical axis of the chart.</p>
   * @public
   */
  YAxis: SingleYAxisOption | undefined;
}

/**
 * <p>The settings of a chart's single axis configuration.</p>
 * @public
 */
export interface SingleAxisOptions {
  /**
   * <p>The Y axis options of a single axis configuration.</p>
   * @public
   */
  YAxisOptions?: YAxisOptions;
}

/**
 * <p>The sort configuration of a <code>ComboChartVisual</code>.</p>
 * @public
 */
export interface ComboChartSortConfiguration {
  /**
   * <p>The sort configuration of the category field well in a combo chart.</p>
   * @public
   */
  CategorySort?: FieldSortOptions[];

  /**
   * <p>The item limit configuration for the category field well of a combo chart.</p>
   * @public
   */
  CategoryItemsLimit?: ItemsLimitConfiguration;

  /**
   * <p>The sort configuration of the color field well in a combo chart.</p>
   * @public
   */
  ColorSort?: FieldSortOptions[];

  /**
   * <p>The item limit configuration of the color field well in a combo chart.</p>
   * @public
   */
  ColorItemsLimit?: ItemsLimitConfiguration;
}

/**
 * <p>The configuration of a <code>ComboChartVisual</code>.</p>
 * @public
 */
export interface ComboChartConfiguration {
  /**
   * <p>The field wells of the visual.</p>
   * @public
   */
  FieldWells?: ComboChartFieldWells;

  /**
   * <p>The sort configuration of a <code>ComboChartVisual</code>.</p>
   * @public
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
   * @public
   */
  BarsArrangement?: BarsArrangement;

  /**
   * <p>The category axis of a combo chart.</p>
   * @public
   */
  CategoryAxis?: AxisDisplayOptions;

  /**
   * <p>The label options (label text, label visibility, and sort icon visibility) of a combo chart category (group/color) field well.</p>
   * @public
   */
  CategoryLabelOptions?: ChartAxisLabelOptions;

  /**
   * <p>The label display options (grid line, range, scale, and axis step) of a combo chart's primary y-axis (bar) field well.</p>
   * @public
   */
  PrimaryYAxisDisplayOptions?: AxisDisplayOptions;

  /**
   * <p>The label options (label text, label visibility, and sort icon visibility) of a combo chart's primary y-axis (bar) field well.</p>
   * @public
   */
  PrimaryYAxisLabelOptions?: ChartAxisLabelOptions;

  /**
   * <p>The label display options (grid line, range, scale, axis step) of a combo chart's secondary y-axis (line) field well.</p>
   * @public
   */
  SecondaryYAxisDisplayOptions?: AxisDisplayOptions;

  /**
   * <p>The label options (label text, label visibility, and sort icon visibility) of a combo chart's secondary y-axis(line) field well.</p>
   * @public
   */
  SecondaryYAxisLabelOptions?: ChartAxisLabelOptions;

  /**
   * <p>The settings of a chart's single axis configuration.</p>
   * @public
   */
  SingleAxisOptions?: SingleAxisOptions;

  /**
   * <p>The label options (label text, label visibility, and sort icon visibility) of a combo chart's color field well.</p>
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
   *          <p>The data label options for a bar in a combo chart.</p>
   * @public
   */
  BarDataLabels?: DataLabelOptions;

  /**
   * <p>The options that determine if visual data labels are displayed.</p>
   *          <p>The data label options for a line in a combo chart.</p>
   * @public
   */
  LineDataLabels?: DataLabelOptions;

  /**
   * <p>The legend display setup of the visual.</p>
   * @public
   */
  Tooltip?: TooltipOptions;

  /**
   * <p>The reference line setup of the visual.</p>
   * @public
   */
  ReferenceLines?: ReferenceLine[];

  /**
   * <p>The palette (chart color) display setup of the visual.</p>
   * @public
   */
  VisualPalette?: VisualPalette;

  /**
   * <p>The general visual interactions setup for a visual.</p>
   * @public
   */
  Interactions?: VisualInteractionOptions;
}

/**
 * <p>A combo chart.</p>
 *          <p>The <code>ComboChartVisual</code> includes stacked bar combo charts and clustered bar combo charts</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/combo-charts.html">Using combo charts</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 * @public
 */
export interface ComboChartVisual {
  /**
   * <p>The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.</p>
   * @public
   */
  VisualId: string | undefined;

  /**
   * <p>The title that is displayed on the visual.</p>
   * @public
   */
  Title?: VisualTitleLabelOptions;

  /**
   * <p>The subtitle that is displayed on the visual.</p>
   * @public
   */
  Subtitle?: VisualSubtitleLabelOptions;

  /**
   * <p>The configuration settings of the visual.</p>
   * @public
   */
  ChartConfiguration?: ComboChartConfiguration;

  /**
   * <p>The list of custom actions that are configured for a visual.</p>
   * @public
   */
  Actions?: VisualCustomAction[];

  /**
   * <p>The column hierarchy that is used during drill-downs and drill-ups.</p>
   * @public
   */
  ColumnHierarchies?: ColumnHierarchy[];
}

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
 * <p>The configuration of a <code>CustomContentVisual</code>.</p>
 * @public
 */
export interface CustomContentConfiguration {
  /**
   * <p>The input URL that links to the custom content that you want in the custom visual.</p>
   * @public
   */
  ContentUrl?: string;

  /**
   * <p>The content type of the custom content visual. You can use this to have the visual render as an image.</p>
   * @public
   */
  ContentType?: CustomContentType;

  /**
   * <p>The sizing options for the size of the custom content visual. This structure is required when the <code>ContentType</code> of the visual is <code>'IMAGE'</code>.</p>
   * @public
   */
  ImageScaling?: CustomContentImageScalingConfiguration;

  /**
   * <p>The general visual interactions setup for a visual.</p>
   * @public
   */
  Interactions?: VisualInteractionOptions;
}

/**
 * <p>A visual that contains custom content.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/custom-visual-content.html">Using custom visual content</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 * @public
 */
export interface CustomContentVisual {
  /**
   * <p>The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.</p>
   * @public
   */
  VisualId: string | undefined;

  /**
   * <p>The title that is displayed on the visual.</p>
   * @public
   */
  Title?: VisualTitleLabelOptions;

  /**
   * <p>The subtitle that is displayed on the visual.</p>
   * @public
   */
  Subtitle?: VisualSubtitleLabelOptions;

  /**
   * <p>The configuration of a <code>CustomContentVisual</code>.</p>
   * @public
   */
  ChartConfiguration?: CustomContentConfiguration;

  /**
   * <p>The list of custom actions that are configured for a visual.</p>
   * @public
   */
  Actions?: VisualCustomAction[];

  /**
   * <p>The dataset that is used to create the custom content visual. You can't create a visual without a dataset.</p>
   * @public
   */
  DataSetIdentifier: string | undefined;
}

/**
 * <p>An empty visual.</p>
 *          <p>Empty visuals are used in layouts but have not been configured to show any data. A new visual created in the Amazon QuickSight console is considered an <code>EmptyVisual</code> until a visual type is selected.</p>
 * @public
 */
export interface EmptyVisual {
  /**
   * <p>The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.</p>
   * @public
   */
  VisualId: string | undefined;

  /**
   * <p>The data set that is used in the empty visual. Every visual requires a dataset to render.</p>
   * @public
   */
  DataSetIdentifier: string | undefined;

  /**
   * <p>The list of custom actions that are configured for a visual.</p>
   * @public
   */
  Actions?: VisualCustomAction[];
}

/**
 * <p>The aggregated field well of the filled map.</p>
 * @public
 */
export interface FilledMapAggregatedFieldWells {
  /**
   * <p>The aggregated location field well of the filled map. Values are grouped by location fields.</p>
   * @public
   */
  Geospatial?: DimensionField[];

  /**
   * <p>The aggregated color field well of a filled map. Values are aggregated based on location fields.</p>
   * @public
   */
  Values?: MeasureField[];
}

/**
 * <p>The field wells of a <code>FilledMapVisual</code>.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 * @public
 */
export interface FilledMapFieldWells {
  /**
   * <p>The aggregated field well of the filled map.</p>
   * @public
   */
  FilledMapAggregatedFieldWells?: FilledMapAggregatedFieldWells;
}

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
 * <p>The map style options of the geospatial map.</p>
 * @public
 */
export interface GeospatialMapStyleOptions {
  /**
   * <p>The base map style of the geospatial map.</p>
   * @public
   */
  BaseMapStyle?: BaseMapStyleType;
}

/**
 * <p>The sort configuration of a <code>FilledMapVisual</code>.</p>
 * @public
 */
export interface FilledMapSortConfiguration {
  /**
   * <p>The sort configuration of the location fields.</p>
   * @public
   */
  CategorySort?: FieldSortOptions[];
}

/**
 * <p>The bound
 *             options (north, south, west, east) of the geospatial window options.</p>
 * @public
 */
export interface GeospatialCoordinateBounds {
  /**
   * <p>The latitude of the north bound of the geospatial coordinate bounds.</p>
   * @public
   */
  North: number | undefined;

  /**
   * <p>The latitude of the south bound of the geospatial coordinate bounds.</p>
   * @public
   */
  South: number | undefined;

  /**
   * <p>The longitude of the west bound of the geospatial coordinate bounds.</p>
   * @public
   */
  West: number | undefined;

  /**
   * <p>The longitude of the east bound of the geospatial coordinate bounds.</p>
   * @public
   */
  East: number | undefined;
}

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
 * <p>The window options of the geospatial map visual.</p>
 * @public
 */
export interface GeospatialWindowOptions {
  /**
   * <p>The bounds options (north, south, west, east) of the geospatial window options.</p>
   * @public
   */
  Bounds?: GeospatialCoordinateBounds;

  /**
   * <p>The map zoom modes (manual, auto) of the geospatial window options.</p>
   * @public
   */
  MapZoomMode?: MapZoomMode;
}

/**
 * <p>The configuration for a <code>FilledMapVisual</code>.</p>
 * @public
 */
export interface FilledMapConfiguration {
  /**
   * <p>The field wells of the visual.</p>
   * @public
   */
  FieldWells?: FilledMapFieldWells;

  /**
   * <p>The sort configuration of a <code>FilledMapVisual</code>.</p>
   * @public
   */
  SortConfiguration?: FilledMapSortConfiguration;

  /**
   * <p>The legend display setup of the visual.</p>
   * @public
   */
  Legend?: LegendOptions;

  /**
   * <p>The tooltip display setup of the visual.</p>
   * @public
   */
  Tooltip?: TooltipOptions;

  /**
   * <p>The window options of the filled map visual.</p>
   * @public
   */
  WindowOptions?: GeospatialWindowOptions;

  /**
   * <p>The map style options of the filled map visual.</p>
   * @public
   */
  MapStyleOptions?: GeospatialMapStyleOptions;

  /**
   * <p>The general visual interactions setup for a visual.</p>
   * @public
   */
  Interactions?: VisualInteractionOptions;
}

/**
 * <p>Determines the gradient stop configuration.</p>
 * @public
 */
export interface GradientStop {
  /**
   * <p>Determines gradient offset value.</p>
   * @public
   */
  GradientOffset: number | undefined;

  /**
   * <p>Determines the data value.</p>
   * @public
   */
  DataValue?: number;

  /**
   * <p>Determines the color.</p>
   * @public
   */
  Color?: string;
}

/**
 * <p>Determines the gradient color settings.</p>
 * @public
 */
export interface GradientColor {
  /**
   * <p>The list of gradient color stops.</p>
   * @public
   */
  Stops?: GradientStop[];
}

/**
 * <p>Formatting configuration for gradient color.</p>
 * @public
 */
export interface ConditionalFormattingGradientColor {
  /**
   * <p>The expression that determines the formatting configuration for gradient color.</p>
   * @public
   */
  Expression: string | undefined;

  /**
   * <p>Determines the color.</p>
   * @public
   */
  Color: GradientColor | undefined;
}

/**
 * <p>Formatting configuration for solid color.</p>
 * @public
 */
export interface ConditionalFormattingSolidColor {
  /**
   * <p>The expression that determines the formatting configuration for solid color.</p>
   * @public
   */
  Expression: string | undefined;

  /**
   * <p>Determines the color.</p>
   * @public
   */
  Color?: string;
}

/**
 * <p>The formatting configuration for the color.</p>
 * @public
 */
export interface ConditionalFormattingColor {
  /**
   * <p>Formatting configuration for solid color.</p>
   * @public
   */
  Solid?: ConditionalFormattingSolidColor;

  /**
   * <p>Formatting configuration for gradient color.</p>
   * @public
   */
  Gradient?: ConditionalFormattingGradientColor;
}

/**
 * <p>The shape conditional formatting of a filled map visual.</p>
 * @public
 */
export interface ShapeConditionalFormat {
  /**
   * <p>The conditional formatting for the shape background color of a filled map visual.</p>
   * @public
   */
  BackgroundColor: ConditionalFormattingColor | undefined;
}

/**
 * <p>The conditional formatting that determines the shape of the filled map.</p>
 * @public
 */
export interface FilledMapShapeConditionalFormatting {
  /**
   * <p>The field ID of the filled map shape.</p>
   * @public
   */
  FieldId: string | undefined;

  /**
   * <p>The conditional formatting that determines the background color of a filled map's shape.</p>
   * @public
   */
  Format?: ShapeConditionalFormat;
}

/**
 * <p>Conditional formatting options of a <code>FilledMapVisual</code>.</p>
 * @public
 */
export interface FilledMapConditionalFormattingOption {
  /**
   * <p>The conditional formatting that determines the shape of the filled map.</p>
   * @public
   */
  Shape: FilledMapShapeConditionalFormatting | undefined;
}

/**
 * <p>The conditional formatting of a <code>FilledMapVisual</code>.</p>
 * @public
 */
export interface FilledMapConditionalFormatting {
  /**
   * <p>Conditional formatting options of a <code>FilledMapVisual</code>.</p>
   * @public
   */
  ConditionalFormattingOptions: FilledMapConditionalFormattingOption[] | undefined;
}

/**
 * <p>A filled map.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/filled-maps.html">Creating filled maps</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 * @public
 */
export interface FilledMapVisual {
  /**
   * <p>The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers..</p>
   * @public
   */
  VisualId: string | undefined;

  /**
   * <p>The title that is displayed on the visual.</p>
   * @public
   */
  Title?: VisualTitleLabelOptions;

  /**
   * <p>The subtitle that is displayed on the visual.</p>
   * @public
   */
  Subtitle?: VisualSubtitleLabelOptions;

  /**
   * <p>The configuration settings of the visual.</p>
   * @public
   */
  ChartConfiguration?: FilledMapConfiguration;

  /**
   * <p>The conditional formatting of a <code>FilledMapVisual</code>.</p>
   * @public
   */
  ConditionalFormatting?: FilledMapConditionalFormatting;

  /**
   * <p>The column hierarchy that is used during drill-downs and drill-ups.</p>
   * @public
   */
  ColumnHierarchies?: ColumnHierarchy[];

  /**
   * <p>The list of custom actions that are configured for a visual.</p>
   * @public
   */
  Actions?: VisualCustomAction[];
}

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
 * <p>The options that determine the presentation of the data labels.</p>
 * @public
 */
export interface FunnelChartDataLabelOptions {
  /**
   * <p>The visibility option that determines if data labels are displayed.</p>
   * @public
   */
  Visibility?: Visibility;

  /**
   * <p>The visibility of the category labels within the data labels.</p>
   * @public
   */
  CategoryLabelVisibility?: Visibility;

  /**
   * <p>The visibility of the measure labels within the data labels.</p>
   * @public
   */
  MeasureLabelVisibility?: Visibility;

  /**
   * <p>Determines the positioning of the data label relative to a section of the funnel.</p>
   * @public
   */
  Position?: DataLabelPosition;

  /**
   * <p>The font configuration for the data labels.</p>
   *          <p>Only the <code>FontSize</code> attribute of the font configuration is used for data labels.</p>
   * @public
   */
  LabelFontConfiguration?: FontConfiguration;

  /**
   * <p>The color of the data label text.</p>
   * @public
   */
  LabelColor?: string;

  /**
   * <p>Determines the style of the metric labels.</p>
   * @public
   */
  MeasureDataLabelStyle?: FunnelChartMeasureDataLabelStyle;
}

/**
 * <p>The field well configuration of a <code>FunnelChartVisual</code>.</p>
 * @public
 */
export interface FunnelChartAggregatedFieldWells {
  /**
   * <p>The category field wells of a funnel chart. Values are grouped by category fields.</p>
   * @public
   */
  Category?: DimensionField[];

  /**
   * <p>The value field wells of a funnel chart. Values are aggregated based on categories.</p>
   * @public
   */
  Values?: MeasureField[];
}

/**
 * <p>The field well configuration of a <code>FunnelChartVisual</code>.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 * @public
 */
export interface FunnelChartFieldWells {
  /**
   * <p>The field well configuration of a <code>FunnelChartVisual</code>.</p>
   * @public
   */
  FunnelChartAggregatedFieldWells?: FunnelChartAggregatedFieldWells;
}

/**
 * <p>The sort configuration of a <code>FunnelChartVisual</code>.</p>
 * @public
 */
export interface FunnelChartSortConfiguration {
  /**
   * <p>The sort configuration of the category fields.</p>
   * @public
   */
  CategorySort?: FieldSortOptions[];

  /**
   * <p>The limit on the number of categories displayed.</p>
   * @public
   */
  CategoryItemsLimit?: ItemsLimitConfiguration;
}

/**
 * <p>The configuration of a <code>FunnelChartVisual</code>.</p>
 * @public
 */
export interface FunnelChartConfiguration {
  /**
   * <p>The field well configuration of a <code>FunnelChartVisual</code>.</p>
   * @public
   */
  FieldWells?: FunnelChartFieldWells;

  /**
   * <p>The sort configuration of a <code>FunnelChartVisual</code>.</p>
   * @public
   */
  SortConfiguration?: FunnelChartSortConfiguration;

  /**
   * <p>The label options of the categories that are displayed in a <code>FunnelChartVisual</code>.</p>
   * @public
   */
  CategoryLabelOptions?: ChartAxisLabelOptions;

  /**
   * <p>The label options for the values that are displayed in a <code>FunnelChartVisual</code>.</p>
   * @public
   */
  ValueLabelOptions?: ChartAxisLabelOptions;

  /**
   * <p>The tooltip configuration of a <code>FunnelChartVisual</code>.</p>
   * @public
   */
  Tooltip?: TooltipOptions;

  /**
   * <p>The options that determine the presentation of the data labels.</p>
   * @public
   */
  DataLabelOptions?: FunnelChartDataLabelOptions;

  /**
   * <p>The visual palette configuration of a <code>FunnelChartVisual</code>.</p>
   * @public
   */
  VisualPalette?: VisualPalette;

  /**
   * <p>The general visual interactions setup for a visual.</p>
   * @public
   */
  Interactions?: VisualInteractionOptions;
}

/**
 * <p>A funnel chart.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/funnel-visual-content.html">Using funnel charts</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 * @public
 */
export interface FunnelChartVisual {
  /**
   * <p>The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers..</p>
   * @public
   */
  VisualId: string | undefined;

  /**
   * <p>The title that is displayed on the visual.</p>
   * @public
   */
  Title?: VisualTitleLabelOptions;

  /**
   * <p>The subtitle that is displayed on the visual.</p>
   * @public
   */
  Subtitle?: VisualSubtitleLabelOptions;

  /**
   * <p>The configuration of a <code>FunnelChartVisual</code>.</p>
   * @public
   */
  ChartConfiguration?: FunnelChartConfiguration;

  /**
   * <p>The list of custom actions that are configured for a visual.</p>
   * @public
   */
  Actions?: VisualCustomAction[];

  /**
   * <p>The column hierarchy that is used during drill-downs and drill-ups.</p>
   * @public
   */
  ColumnHierarchies?: ColumnHierarchy[];
}

/**
 * <p>The color configuration of a <code>GaugeChartVisual</code>.</p>
 * @public
 */
export interface GaugeChartColorConfiguration {
  /**
   * <p>The foreground color configuration of a <code>GaugeChartVisual</code>.</p>
   * @public
   */
  ForegroundColor?: string;

  /**
   * <p>The background color configuration of a <code>GaugeChartVisual</code>.</p>
   * @public
   */
  BackgroundColor?: string;
}

/**
 * <p>The field well configuration of a <code>GaugeChartVisual</code>.</p>
 * @public
 */
export interface GaugeChartFieldWells {
  /**
   * <p>The value field wells of a <code>GaugeChartVisual</code>.</p>
   * @public
   */
  Values?: MeasureField[];

  /**
   * <p>The target value field wells of a <code>GaugeChartVisual</code>.</p>
   * @public
   */
  TargetValues?: MeasureField[];
}

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
 * <p>The arc configuration of a <code>GaugeChartVisual</code>.</p>
 * @public
 */
export interface ArcConfiguration {
  /**
   * <p>The option that determines the arc angle of a <code>GaugeChartVisual</code>.</p>
   * @public
   */
  ArcAngle?: number;

  /**
   * <p>The options that determine the arc thickness of a <code>GaugeChartVisual</code>.</p>
   * @public
   */
  ArcThickness?: ArcThicknessOptions;
}

/**
 * <p>The arc axis range of a <code>GaugeChartVisual</code>.</p>
 * @public
 */
export interface ArcAxisDisplayRange {
  /**
   * <p>The minimum value of the arc axis range.</p>
   * @public
   */
  Min?: number;

  /**
   * <p>The maximum value of the arc axis range.</p>
   * @public
   */
  Max?: number;
}

/**
 * <p>The arc axis configuration of a <code>GaugeChartVisual</code>.</p>
 * @public
 */
export interface ArcAxisConfiguration {
  /**
   * <p>The arc axis range of a <code>GaugeChartVisual</code>.</p>
   * @public
   */
  Range?: ArcAxisDisplayRange;

  /**
   * <p>The reserved range of the arc axis.</p>
   * @public
   */
  ReserveRange?: number;
}

/**
 * <p>The format of the comparison.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 * @public
 */
export interface ComparisonFormatConfiguration {
  /**
   * <p>The number display format.</p>
   * @public
   */
  NumberDisplayFormatConfiguration?: NumberDisplayFormatConfiguration;

  /**
   * <p>The percentage display format.</p>
   * @public
   */
  PercentageDisplayFormatConfiguration?: PercentageDisplayFormatConfiguration;
}

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
 * <p>The comparison display configuration of a KPI or gauge chart.</p>
 * @public
 */
export interface ComparisonConfiguration {
  /**
   * <p>The method of the comparison. Choose from the following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DIFFERENCE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PERCENT_DIFFERENCE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PERCENT</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ComparisonMethod?: ComparisonMethod;

  /**
   * <p>The format of the comparison.</p>
   * @public
   */
  ComparisonFormat?: ComparisonFormatConfiguration;
}

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
 * <p>The options that determine the presentation of the <code>GaugeChartVisual</code>.</p>
 * @public
 */
export interface GaugeChartOptions {
  /**
   * <p>The options that determine the primary value display type.</p>
   * @public
   */
  PrimaryValueDisplayType?: PrimaryValueDisplayType;

  /**
   * <p>The comparison configuration of a <code>GaugeChartVisual</code>.</p>
   * @public
   */
  Comparison?: ComparisonConfiguration;

  /**
   * <p>The arc axis configuration of a <code>GaugeChartVisual</code>.</p>
   * @public
   */
  ArcAxis?: ArcAxisConfiguration;

  /**
   * <p>The arc configuration of a <code>GaugeChartVisual</code>.</p>
   * @public
   */
  Arc?: ArcConfiguration;

  /**
   * <p>The options that determine the primary value font configuration.</p>
   * @public
   */
  PrimaryValueFontConfiguration?: FontConfiguration;
}

/**
 * <p>The configuration of a <code>GaugeChartVisual</code>.</p>
 * @public
 */
export interface GaugeChartConfiguration {
  /**
   * <p>The field well configuration of a <code>GaugeChartVisual</code>.</p>
   * @public
   */
  FieldWells?: GaugeChartFieldWells;

  /**
   * <p>The options that determine the presentation of the <code>GaugeChartVisual</code>.</p>
   * @public
   */
  GaugeChartOptions?: GaugeChartOptions;

  /**
   * <p>The data label configuration of a <code>GaugeChartVisual</code>.</p>
   * @public
   */
  DataLabels?: DataLabelOptions;

  /**
   * <p>The tooltip configuration of a <code>GaugeChartVisual</code>.</p>
   * @public
   */
  TooltipOptions?: TooltipOptions;

  /**
   * <p>The visual palette configuration of a <code>GaugeChartVisual</code>.</p>
   * @public
   */
  VisualPalette?: VisualPalette;

  /**
   * <p>The color configuration of a <code>GaugeChartVisual</code>.</p>
   * @public
   */
  ColorConfiguration?: GaugeChartColorConfiguration;

  /**
   * <p>The general visual interactions setup for a visual.</p>
   * @public
   */
  Interactions?: VisualInteractionOptions;
}

/**
 * <p>The options that determine the presentation of the arc of a <code>GaugeChartVisual</code>.</p>
 * @public
 */
export interface GaugeChartArcConditionalFormatting {
  /**
   * <p>The conditional formatting of the arc foreground color.</p>
   * @public
   */
  ForegroundColor?: ConditionalFormattingColor;
}

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
 * <p>Determines the icon display configuration.</p>
 * @public
 */
export interface ConditionalFormattingIconDisplayConfiguration {
  /**
   * <p>Determines the icon display configuration.</p>
   * @public
   */
  IconDisplayOption?: ConditionalFormattingIconDisplayOption;
}

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
 * <p>Custom icon options for an icon set.</p>
 * @public
 */
export interface ConditionalFormattingCustomIconOptions {
  /**
   * <p>Determines the type of icon.</p>
   * @public
   */
  Icon?: Icon;

  /**
   * <p>Determines the Unicode icon type.</p>
   * @public
   */
  UnicodeIcon?: string;
}

/**
 * <p>Determines the custom condition for an icon set.</p>
 * @public
 */
export interface ConditionalFormattingCustomIconCondition {
  /**
   * <p>The expression that determines the condition of the icon set.</p>
   * @public
   */
  Expression: string | undefined;

  /**
   * <p>Custom icon options for an icon set.</p>
   * @public
   */
  IconOptions: ConditionalFormattingCustomIconOptions | undefined;

  /**
   * <p>Determines the color of the icon.</p>
   * @public
   */
  Color?: string;

  /**
   * <p>Determines the icon display configuration.</p>
   * @public
   */
  DisplayConfiguration?: ConditionalFormattingIconDisplayConfiguration;
}

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
 * <p>Formatting configuration for icon set.</p>
 * @public
 */
export interface ConditionalFormattingIconSet {
  /**
   * <p>The expression that determines the formatting configuration for the icon set.</p>
   * @public
   */
  Expression: string | undefined;

  /**
   * <p>Determines the icon set type.</p>
   * @public
   */
  IconSetType?: ConditionalFormattingIconSetType;
}

/**
 * <p>The formatting configuration for the icon.</p>
 * @public
 */
export interface ConditionalFormattingIcon {
  /**
   * <p>Formatting configuration for icon set.</p>
   * @public
   */
  IconSet?: ConditionalFormattingIconSet;

  /**
   * <p>Determines the custom condition for an icon set.</p>
   * @public
   */
  CustomCondition?: ConditionalFormattingCustomIconCondition;
}

/**
 * <p>The conditional formatting for the primary value of a <code>GaugeChartVisual</code>.</p>
 * @public
 */
export interface GaugeChartPrimaryValueConditionalFormatting {
  /**
   * <p>The conditional formatting of the primary value text color.</p>
   * @public
   */
  TextColor?: ConditionalFormattingColor;

  /**
   * <p>The conditional formatting of the primary value icon.</p>
   * @public
   */
  Icon?: ConditionalFormattingIcon;
}

/**
 * <p>Conditional formatting options of a <code>GaugeChartVisual</code>.</p>
 * @public
 */
export interface GaugeChartConditionalFormattingOption {
  /**
   * <p>The conditional formatting for the primary value of a <code>GaugeChartVisual</code>.</p>
   * @public
   */
  PrimaryValue?: GaugeChartPrimaryValueConditionalFormatting;

  /**
   * <p>The options that determine the presentation of the arc of a <code>GaugeChartVisual</code>.</p>
   * @public
   */
  Arc?: GaugeChartArcConditionalFormatting;
}

/**
 * <p>The conditional formatting of a <code>GaugeChartVisual</code>.</p>
 * @public
 */
export interface GaugeChartConditionalFormatting {
  /**
   * <p>Conditional formatting options of a <code>GaugeChartVisual</code>.</p>
   * @public
   */
  ConditionalFormattingOptions?: GaugeChartConditionalFormattingOption[];
}

/**
 * <p>A gauge chart.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/gauge-chart.html">Using gauge charts</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 * @public
 */
export interface GaugeChartVisual {
  /**
   * <p>The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.</p>
   * @public
   */
  VisualId: string | undefined;

  /**
   * <p>The title that is displayed on the visual.</p>
   * @public
   */
  Title?: VisualTitleLabelOptions;

  /**
   * <p>The subtitle that is displayed on the visual.</p>
   * @public
   */
  Subtitle?: VisualSubtitleLabelOptions;

  /**
   * <p>The configuration of a <code>GaugeChartVisual</code>.</p>
   * @public
   */
  ChartConfiguration?: GaugeChartConfiguration;

  /**
   * <p>The conditional formatting of a <code>GaugeChartVisual</code>.</p>
   * @public
   */
  ConditionalFormatting?: GaugeChartConditionalFormatting;

  /**
   * <p>The list of custom actions that are configured for a visual.</p>
   * @public
   */
  Actions?: VisualCustomAction[];
}

/**
 * <p>The aggregated field wells for a geospatial map.</p>
 * @public
 */
export interface GeospatialMapAggregatedFieldWells {
  /**
   * <p>The geospatial field wells of a geospatial map. Values are grouped by geospatial fields.</p>
   * @public
   */
  Geospatial?: DimensionField[];

  /**
   * <p>The size field wells of a geospatial map. Values are aggregated based on geospatial fields.</p>
   * @public
   */
  Values?: MeasureField[];

  /**
   * <p>The color field wells of a geospatial map.</p>
   * @public
   */
  Colors?: DimensionField[];
}

/**
 * <p>The field wells of a <code>GeospatialMapVisual</code>.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 * @public
 */
export interface GeospatialMapFieldWells {
  /**
   * <p>The aggregated field well for a geospatial map.</p>
   * @public
   */
  GeospatialMapAggregatedFieldWells?: GeospatialMapAggregatedFieldWells;
}

/**
 * <p>The simple cluster marker of the cluster marker.</p>
 * @public
 */
export interface SimpleClusterMarker {
  /**
   * <p>The color of the simple cluster marker.</p>
   * @public
   */
  Color?: string;
}

/**
 * <p>The cluster marker that is a part of the cluster marker
 *             configuration.</p>
 * @public
 */
export interface ClusterMarker {
  /**
   * <p>The simple cluster marker of the cluster marker.</p>
   * @public
   */
  SimpleClusterMarker?: SimpleClusterMarker;
}

/**
 * <p>The cluster marker configuration of the geospatial map selected point style.</p>
 * @public
 */
export interface ClusterMarkerConfiguration {
  /**
   * <p>The cluster marker that is a part of the cluster marker configuration.</p>
   * @public
   */
  ClusterMarker?: ClusterMarker;
}

/**
 * <p>The color to be used in the heatmap point style.</p>
 * @public
 */
export interface GeospatialHeatmapDataColor {
  /**
   * <p>The hex color to be used in the heatmap point style.</p>
   * @public
   */
  Color: string | undefined;
}

/**
 * <p>The color scale specification for the heatmap point style.</p>
 * @public
 */
export interface GeospatialHeatmapColorScale {
  /**
   * <p>The list of colors to be used in heatmap point style.</p>
   * @public
   */
  Colors?: GeospatialHeatmapDataColor[];
}

/**
 * <p>The heatmap configuration of the geospatial point style.</p>
 * @public
 */
export interface GeospatialHeatmapConfiguration {
  /**
   * <p>The color scale specification for the heatmap point style.</p>
   * @public
   */
  HeatmapColor?: GeospatialHeatmapColorScale;
}

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
 * <p>The point style of the geospatial map.</p>
 * @public
 */
export interface GeospatialPointStyleOptions {
  /**
   * <p>The selected point styles (point, cluster) of the geospatial map.</p>
   * @public
   */
  SelectedPointStyle?: GeospatialSelectedPointStyle;

  /**
   * <p>The cluster marker configuration of the geospatial point style.</p>
   * @public
   */
  ClusterMarkerConfiguration?: ClusterMarkerConfiguration;

  /**
   * <p>The heatmap configuration of the geospatial point style.</p>
   * @public
   */
  HeatmapConfiguration?: GeospatialHeatmapConfiguration;
}

/**
 * <p>The configuration of a <code>GeospatialMapVisual</code>.</p>
 * @public
 */
export interface GeospatialMapConfiguration {
  /**
   * <p>The field wells of the visual.</p>
   * @public
   */
  FieldWells?: GeospatialMapFieldWells;

  /**
   * <p>The legend display setup of the visual.</p>
   * @public
   */
  Legend?: LegendOptions;

  /**
   * <p>The tooltip display setup of the visual.</p>
   * @public
   */
  Tooltip?: TooltipOptions;

  /**
   * <p>The window options of the geospatial map.</p>
   * @public
   */
  WindowOptions?: GeospatialWindowOptions;

  /**
   * <p>The map style options of the geospatial map.</p>
   * @public
   */
  MapStyleOptions?: GeospatialMapStyleOptions;

  /**
   * <p>The point style options of the geospatial map.</p>
   * @public
   */
  PointStyleOptions?: GeospatialPointStyleOptions;

  /**
   * <p>The visual display options for the visual palette.</p>
   * @public
   */
  VisualPalette?: VisualPalette;

  /**
   * <p>The general visual interactions setup for a visual.</p>
   * @public
   */
  Interactions?: VisualInteractionOptions;
}

/**
 * <p>A geospatial map or a points on map visual.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/point-maps.html">Creating point maps</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 * @public
 */
export interface GeospatialMapVisual {
  /**
   * <p>The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers..</p>
   * @public
   */
  VisualId: string | undefined;

  /**
   * <p>The title that is displayed on the visual.</p>
   * @public
   */
  Title?: VisualTitleLabelOptions;

  /**
   * <p>The subtitle that is displayed on the visual.</p>
   * @public
   */
  Subtitle?: VisualSubtitleLabelOptions;

  /**
   * <p>The configuration settings of the visual.</p>
   * @public
   */
  ChartConfiguration?: GeospatialMapConfiguration;

  /**
   * <p>The column hierarchy that is used during drill-downs and drill-ups.</p>
   * @public
   */
  ColumnHierarchies?: ColumnHierarchy[];

  /**
   * <p>The list of custom actions that are configured for a visual.</p>
   * @public
   */
  Actions?: VisualCustomAction[];
}

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
 * <p>Determines the color that is applied to a particular data value.</p>
 * @public
 */
export interface DataColor {
  /**
   * <p>The color that is applied to the data value.</p>
   * @public
   */
  Color?: string;

  /**
   * <p>The data value that the color is applied to.</p>
   * @public
   */
  DataValue?: number;
}

/**
 * <p>Determines the color scale that is applied to the visual.</p>
 * @public
 */
export interface ColorScale {
  /**
   * <p>Determines the list of colors that are applied to the visual.</p>
   * @public
   */
  Colors: DataColor[] | undefined;

  /**
   * <p>Determines the color fill type.</p>
   * @public
   */
  ColorFillType: ColorFillType | undefined;

  /**
   * <p>Determines the color that is applied to null values.</p>
   * @public
   */
  NullValueColor?: DataColor;
}

/**
 * <p>The aggregated field wells of a heat map.</p>
 * @public
 */
export interface HeatMapAggregatedFieldWells {
  /**
   * <p>The rows field well of a heat map.</p>
   * @public
   */
  Rows?: DimensionField[];

  /**
   * <p>The columns field well of a heat map.</p>
   * @public
   */
  Columns?: DimensionField[];

  /**
   * <p>The values field well of a heat map.</p>
   * @public
   */
  Values?: MeasureField[];
}

/**
 * <p>The field well configuration of a heat map.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 * @public
 */
export interface HeatMapFieldWells {
  /**
   * <p>The aggregated field wells of a heat map.</p>
   * @public
   */
  HeatMapAggregatedFieldWells?: HeatMapAggregatedFieldWells;
}

/**
 * <p>The sort configuration of a heat map.</p>
 * @public
 */
export interface HeatMapSortConfiguration {
  /**
   * <p>The field sort configuration of the rows fields.</p>
   * @public
   */
  HeatMapRowSort?: FieldSortOptions[];

  /**
   * <p>The column sort configuration for heat map for columns that aren't a part of a field well.</p>
   * @public
   */
  HeatMapColumnSort?: FieldSortOptions[];

  /**
   * <p>The limit on the number of rows that are displayed in a heat map.</p>
   * @public
   */
  HeatMapRowItemsLimitConfiguration?: ItemsLimitConfiguration;

  /**
   * <p>The limit on the number of columns that are displayed in a heat map.</p>
   * @public
   */
  HeatMapColumnItemsLimitConfiguration?: ItemsLimitConfiguration;
}

/**
 * <p>The configuration of a heat map.</p>
 * @public
 */
export interface HeatMapConfiguration {
  /**
   * <p>The field wells of the visual.</p>
   * @public
   */
  FieldWells?: HeatMapFieldWells;

  /**
   * <p>The sort configuration of a heat map.</p>
   * @public
   */
  SortConfiguration?: HeatMapSortConfiguration;

  /**
   * <p>The label options of the row that is displayed in a <code>heat map</code>.</p>
   * @public
   */
  RowLabelOptions?: ChartAxisLabelOptions;

  /**
   * <p>The label options of the column that is displayed in a heat map.</p>
   * @public
   */
  ColumnLabelOptions?: ChartAxisLabelOptions;

  /**
   * <p>The color options (gradient color, point of divergence) in a heat map.</p>
   * @public
   */
  ColorScale?: ColorScale;

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
   * <p>The general visual interactions setup for a visual.</p>
   * @public
   */
  Interactions?: VisualInteractionOptions;
}

/**
 * <p>A heat map.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/heat-map.html">Using heat maps</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 * @public
 */
export interface HeatMapVisual {
  /**
   * <p>The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.</p>
   * @public
   */
  VisualId: string | undefined;

  /**
   * <p>The title that is displayed on the visual.</p>
   * @public
   */
  Title?: VisualTitleLabelOptions;

  /**
   * <p>The subtitle that is displayed on the visual.</p>
   * @public
   */
  Subtitle?: VisualSubtitleLabelOptions;

  /**
   * <p>The configuration of a heat map.</p>
   * @public
   */
  ChartConfiguration?: HeatMapConfiguration;

  /**
   * <p>The column hierarchy that is used during drill-downs and drill-ups.</p>
   * @public
   */
  ColumnHierarchies?: ColumnHierarchy[];

  /**
   * <p>The list of custom actions that are configured for a visual.</p>
   * @public
   */
  Actions?: VisualCustomAction[];
}

/**
 * <p>The options that determine the bin count of a histogram.</p>
 * @public
 */
export interface BinCountOptions {
  /**
   * <p>The options that determine the bin count value.</p>
   * @public
   */
  Value?: number;
}

/**
 * <p>The options that determine the bin width of a histogram.</p>
 * @public
 */
export interface BinWidthOptions {
  /**
   * <p>The options that determine the bin width value.</p>
   * @public
   */
  Value?: number;

  /**
   * <p>The options that determine the bin count limit.</p>
   * @public
   */
  BinCountLimit?: number;
}

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
 * <p>The options that determine the presentation of histogram bins.</p>
 * @public
 */
export interface HistogramBinOptions {
  /**
   * <p>The options that determine the selected bin type.</p>
   * @public
   */
  SelectedBinType?: HistogramBinType;

  /**
   * <p>The options that determine the bin count of a histogram.</p>
   * @public
   */
  BinCount?: BinCountOptions;

  /**
   * <p>The options that determine the bin width of a histogram.</p>
   * @public
   */
  BinWidth?: BinWidthOptions;

  /**
   * <p>The options that determine the bin start value.</p>
   * @public
   */
  StartValue?: number;
}

/**
 * <p>The field well configuration of a histogram.</p>
 * @public
 */
export interface HistogramAggregatedFieldWells {
  /**
   * <p>The value field wells of a histogram. Values are aggregated by <code>COUNT</code> or <code>DISTINCT_COUNT</code>.</p>
   * @public
   */
  Values?: MeasureField[];
}

/**
 * <p>The field well configuration of a histogram.</p>
 * @public
 */
export interface HistogramFieldWells {
  /**
   * <p>The field well configuration of a histogram.</p>
   * @public
   */
  HistogramAggregatedFieldWells?: HistogramAggregatedFieldWells;
}

/**
 * <p>The configuration for a <code>HistogramVisual</code>.</p>
 * @public
 */
export interface HistogramConfiguration {
  /**
   * <p>The field well configuration of a histogram.</p>
   * @public
   */
  FieldWells?: HistogramFieldWells;

  /**
   * <p>The options that determine the presentation of the x-axis.</p>
   * @public
   */
  XAxisDisplayOptions?: AxisDisplayOptions;

  /**
   * <p>The options that determine the presentation of the x-axis label.</p>
   * @public
   */
  XAxisLabelOptions?: ChartAxisLabelOptions;

  /**
   * <p>The options that determine the presentation of the y-axis.</p>
   * @public
   */
  YAxisDisplayOptions?: AxisDisplayOptions;

  /**
   * <p>The options that determine the presentation of histogram bins.</p>
   * @public
   */
  BinOptions?: HistogramBinOptions;

  /**
   * <p>The data label configuration of a histogram.</p>
   * @public
   */
  DataLabels?: DataLabelOptions;

  /**
   * <p>The tooltip configuration of a histogram.</p>
   * @public
   */
  Tooltip?: TooltipOptions;

  /**
   * <p>The visual palette configuration of a histogram.</p>
   * @public
   */
  VisualPalette?: VisualPalette;

  /**
   * <p>The general visual interactions setup for a visual.</p>
   * @public
   */
  Interactions?: VisualInteractionOptions;
}

/**
 * <p>A histogram.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/histogram-charts.html">Using histograms</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 * @public
 */
export interface HistogramVisual {
  /**
   * <p>The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.</p>
   * @public
   */
  VisualId: string | undefined;

  /**
   * <p>The title that is displayed on the visual.</p>
   * @public
   */
  Title?: VisualTitleLabelOptions;

  /**
   * <p>The subtitle that is displayed on the visual.</p>
   * @public
   */
  Subtitle?: VisualSubtitleLabelOptions;

  /**
   * <p>The configuration for a <code>HistogramVisual</code>.</p>
   * @public
   */
  ChartConfiguration?: HistogramConfiguration;

  /**
   * <p>The list of custom actions that are configured for a visual.</p>
   * @public
   */
  Actions?: VisualCustomAction[];
}

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
 * <p>The forecast computation configuration.</p>
 * @public
 */
export interface ForecastComputation {
  /**
   * <p>The ID for a computation.</p>
   * @public
   */
  ComputationId: string | undefined;

  /**
   * <p>The name of a computation.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The time field that is used in a computation.</p>
   * @public
   */
  Time?: DimensionField;

  /**
   * <p>The value field that is used in a computation.</p>
   * @public
   */
  Value?: MeasureField;

  /**
   * <p>The periods forward setup of a forecast computation.</p>
   * @public
   */
  PeriodsForward?: number;

  /**
   * <p>The periods backward setup of a forecast computation.</p>
   * @public
   */
  PeriodsBackward?: number;

  /**
   * <p>The upper boundary setup of a forecast computation.</p>
   * @public
   */
  UpperBoundary?: number;

  /**
   * <p>The lower boundary setup of a forecast computation.</p>
   * @public
   */
  LowerBoundary?: number;

  /**
   * <p>The prediction interval setup of a forecast computation.</p>
   * @public
   */
  PredictionInterval?: number;

  /**
   * <p>The seasonality setup of a forecast computation. Choose one of the following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AUTOMATIC</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CUSTOM</code>: Checks the custom seasonality value.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Seasonality?: ForecastComputationSeasonality;

  /**
   * <p>The custom seasonality value setup of a forecast computation.</p>
   * @public
   */
  CustomSeasonalityValue?: number;
}

/**
 * <p>The growth rate computation configuration.</p>
 * @public
 */
export interface GrowthRateComputation {
  /**
   * <p>The ID for a computation.</p>
   * @public
   */
  ComputationId: string | undefined;

  /**
   * <p>The name of a computation.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The time field that is used in a computation.</p>
   * @public
   */
  Time?: DimensionField;

  /**
   * <p>The value field that is used in a computation.</p>
   * @public
   */
  Value?: MeasureField;

  /**
   * <p>The period size setup of a growth rate computation.</p>
   * @public
   */
  PeriodSize?: number;
}

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
 * <p>The maximum and minimum computation configuration.</p>
 * @public
 */
export interface MaximumMinimumComputation {
  /**
   * <p>The ID for a computation.</p>
   * @public
   */
  ComputationId: string | undefined;

  /**
   * <p>The name of a computation.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The time field that is used in a computation.</p>
   * @public
   */
  Time?: DimensionField;

  /**
   * <p>The value field that is used in a computation.</p>
   * @public
   */
  Value?: MeasureField;

  /**
   * <p>The type of computation. Choose one of the following options:</p>
   *          <ul>
   *             <li>
   *                <p>MAXIMUM: A maximum computation.</p>
   *             </li>
   *             <li>
   *                <p>MINIMUM: A minimum computation.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Type: MaximumMinimumComputationType | undefined;
}

/**
 * <p>The metric comparison computation configuration.</p>
 * @public
 */
export interface MetricComparisonComputation {
  /**
   * <p>The ID for a computation.</p>
   * @public
   */
  ComputationId: string | undefined;

  /**
   * <p>The name of a computation.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The time field that is used in a computation.</p>
   * @public
   */
  Time?: DimensionField;

  /**
   * <p>The field that is used in a metric comparison from value setup.</p>
   * @public
   */
  FromValue?: MeasureField;

  /**
   * <p>The field that is used in a metric comparison to value setup.</p>
   * @public
   */
  TargetValue?: MeasureField;
}

/**
 * <p>The period over period computation configuration.</p>
 * @public
 */
export interface PeriodOverPeriodComputation {
  /**
   * <p>The ID for a computation.</p>
   * @public
   */
  ComputationId: string | undefined;

  /**
   * <p>The name of a computation.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The time field that is used in a computation.</p>
   * @public
   */
  Time?: DimensionField;

  /**
   * <p>The value field that is used in a computation.</p>
   * @public
   */
  Value?: MeasureField;
}

/**
 * <p>The period to date computation configuration.</p>
 * @public
 */
export interface PeriodToDateComputation {
  /**
   * <p>The ID for a computation.</p>
   * @public
   */
  ComputationId: string | undefined;

  /**
   * <p>The name of a computation.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The time field that is used in a computation.</p>
   * @public
   */
  Time?: DimensionField;

  /**
   * <p>The value field that is used in a computation.</p>
   * @public
   */
  Value?: MeasureField;

  /**
   * <p>The time granularity setup of period to date computation. Choose from the following options:</p>
   *          <ul>
   *             <li>
   *                <p>YEAR: Year to date.</p>
   *             </li>
   *             <li>
   *                <p>MONTH: Month to date.</p>
   *             </li>
   *          </ul>
   * @public
   */
  PeriodTimeGranularity?: TimeGranularity;
}

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
 * <p>The top movers and bottom movers computation setup.</p>
 * @public
 */
export interface TopBottomMoversComputation {
  /**
   * <p>The ID for a computation.</p>
   * @public
   */
  ComputationId: string | undefined;

  /**
   * <p>The name of a computation.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The time field that is used in a computation.</p>
   * @public
   */
  Time?: DimensionField;

  /**
   * <p>The category field that is used in a computation.</p>
   * @public
   */
  Category?: DimensionField;

  /**
   * <p>The value field that is used in a computation.</p>
   * @public
   */
  Value?: MeasureField;

  /**
   * <p>The mover size setup of the top and bottom movers computation.</p>
   * @public
   */
  MoverSize?: number;

  /**
   * <p>The sort order setup of the top and bottom movers computation.</p>
   * @public
   */
  SortOrder?: TopBottomSortOrder;

  /**
   * <p>The computation type. Choose from the following options:</p>
   *          <ul>
   *             <li>
   *                <p>TOP: Top movers computation.</p>
   *             </li>
   *             <li>
   *                <p>BOTTOM: Bottom movers computation.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Type: TopBottomComputationType | undefined;
}

/**
 * <p>The top ranked and bottom ranked computation configuration.</p>
 * @public
 */
export interface TopBottomRankedComputation {
  /**
   * <p>The ID for a computation.</p>
   * @public
   */
  ComputationId: string | undefined;

  /**
   * <p>The name of a computation.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The category field that is used in a computation.</p>
   * @public
   */
  Category?: DimensionField;

  /**
   * <p>The value field that is used in a computation.</p>
   * @public
   */
  Value?: MeasureField;

  /**
   * <p>The result size of a top and bottom ranked computation.</p>
   * @public
   */
  ResultSize?: number;

  /**
   * <p>The computation type. Choose one of the following options:</p>
   *          <ul>
   *             <li>
   *                <p>TOP: A top ranked computation.</p>
   *             </li>
   *             <li>
   *                <p>BOTTOM: A bottom ranked computation.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Type: TopBottomComputationType | undefined;
}

/**
 * <p>The total aggregation computation configuration.</p>
 * @public
 */
export interface TotalAggregationComputation {
  /**
   * <p>The ID for a computation.</p>
   * @public
   */
  ComputationId: string | undefined;

  /**
   * <p>The name of a computation.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The value field that is used in a computation.</p>
   * @public
   */
  Value?: MeasureField;
}

/**
 * <p>The unique values computation configuration.</p>
 * @public
 */
export interface UniqueValuesComputation {
  /**
   * <p>The ID for a computation.</p>
   * @public
   */
  ComputationId: string | undefined;

  /**
   * <p>The name of a computation.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The category field that is used in a computation.</p>
   * @public
   */
  Category?: DimensionField;
}

/**
 * <p>The computation union that is used in an insight visual.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 * @public
 */
export interface Computation {
  /**
   * <p>The top ranked and bottom ranked computation configuration.</p>
   * @public
   */
  TopBottomRanked?: TopBottomRankedComputation;

  /**
   * <p>The top movers and bottom movers computation configuration.</p>
   * @public
   */
  TopBottomMovers?: TopBottomMoversComputation;

  /**
   * <p>The total aggregation computation configuration.</p>
   * @public
   */
  TotalAggregation?: TotalAggregationComputation;

  /**
   * <p>The maximum and minimum computation configuration.</p>
   * @public
   */
  MaximumMinimum?: MaximumMinimumComputation;

  /**
   * <p>The metric comparison computation configuration.</p>
   * @public
   */
  MetricComparison?: MetricComparisonComputation;

  /**
   * <p>The period over period computation configuration.</p>
   * @public
   */
  PeriodOverPeriod?: PeriodOverPeriodComputation;

  /**
   * <p>The period to <code>DataSetIdentifier</code> computation configuration.</p>
   * @public
   */
  PeriodToDate?: PeriodToDateComputation;

  /**
   * <p>The growth rate computation configuration.</p>
   * @public
   */
  GrowthRate?: GrowthRateComputation;

  /**
   * <p>The unique values computation configuration.</p>
   * @public
   */
  UniqueValues?: UniqueValuesComputation;

  /**
   * <p>The forecast computation configuration.</p>
   * @public
   */
  Forecast?: ForecastComputation;
}

/**
 * <p>The custom narrative options.</p>
 * @public
 */
export interface CustomNarrativeOptions {
  /**
   * <p>The string input of custom narrative.</p>
   * @public
   */
  Narrative: string | undefined;
}

/**
 * <p>The configuration of an insight visual.</p>
 * @public
 */
export interface InsightConfiguration {
  /**
   * <p>The computations configurations of the insight visual</p>
   * @public
   */
  Computations?: Computation[];

  /**
   * <p>The custom narrative of the insight visual.</p>
   * @public
   */
  CustomNarrative?: CustomNarrativeOptions;

  /**
   * <p>The general visual interactions setup for a visual.</p>
   * @public
   */
  Interactions?: VisualInteractionOptions;
}

/**
 * <p>An insight visual.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/computational-insights.html">Working with insights</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 * @public
 */
export interface InsightVisual {
  /**
   * <p>The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.</p>
   * @public
   */
  VisualId: string | undefined;

  /**
   * <p>The title that is displayed on the visual.</p>
   * @public
   */
  Title?: VisualTitleLabelOptions;

  /**
   * <p>The subtitle that is displayed on the visual.</p>
   * @public
   */
  Subtitle?: VisualSubtitleLabelOptions;

  /**
   * <p>The configuration of an insight visual.</p>
   * @public
   */
  InsightConfiguration?: InsightConfiguration;

  /**
   * <p>The list of custom actions that are configured for a visual.</p>
   * @public
   */
  Actions?: VisualCustomAction[];

  /**
   * <p>The dataset that is used in the insight visual.</p>
   * @public
   */
  DataSetIdentifier: string | undefined;
}

/**
 * <p>The field well configuration of a KPI visual.</p>
 * @public
 */
export interface KPIFieldWells {
  /**
   * <p>The value field wells of a KPI visual.</p>
   * @public
   */
  Values?: MeasureField[];

  /**
   * <p>The target value field wells of a KPI visual.</p>
   * @public
   */
  TargetValues?: MeasureField[];

  /**
   * <p>The trend group field wells of a KPI visual.</p>
   * @public
   */
  TrendGroups?: DimensionField[];
}

/**
 * <p>The options that determine the presentation of the progress bar of a KPI visual.</p>
 * @public
 */
export interface ProgressBarOptions {
  /**
   * <p>The visibility of the progress bar.</p>
   * @public
   */
  Visibility?: Visibility;
}

/**
 * <p>The options that determine the presentation of the secondary value of a KPI visual.</p>
 * @public
 */
export interface SecondaryValueOptions {
  /**
   * <p>Determines the visibility of the secondary value.</p>
   * @public
   */
  Visibility?: Visibility;
}

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
 * <p>The options that determine the visibility, color, type, and tooltip visibility of the sparkline of a KPI visual.</p>
 * @public
 */
export interface KPISparklineOptions {
  /**
   * <p>The visibility of the sparkline.</p>
   * @public
   */
  Visibility?: Visibility;

  /**
   * <p>The type of the sparkline.</p>
   * @public
   */
  Type: KPISparklineType | undefined;

  /**
   * <p>The color of the sparkline.</p>
   * @public
   */
  Color?: string;

  /**
   * <p>The tooltip visibility of the sparkline.</p>
   * @public
   */
  TooltipVisibility?: Visibility;
}

/**
 * <p>The options that determine the presentation of trend arrows in a KPI visual.</p>
 * @public
 */
export interface TrendArrowOptions {
  /**
   * <p>The visibility of the trend arrows.</p>
   * @public
   */
  Visibility?: Visibility;
}

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
 * <p>The standard layout of the KPI visual.</p>
 * @public
 */
export interface KPIVisualStandardLayout {
  /**
   * <p>The standard layout type.</p>
   * @public
   */
  Type: KPIVisualStandardLayoutType | undefined;
}

/**
 * <p>The options that determine the layout a KPI visual.</p>
 * @public
 */
export interface KPIVisualLayoutOptions {
  /**
   * <p>The standard layout of the KPI visual.</p>
   * @public
   */
  StandardLayout?: KPIVisualStandardLayout;
}

/**
 * <p>The options that determine the presentation of a KPI visual.</p>
 * @public
 */
export interface KPIOptions {
  /**
   * <p>The options that determine the presentation of the progress bar of a KPI visual.</p>
   * @public
   */
  ProgressBar?: ProgressBarOptions;

  /**
   * <p>The options that determine the presentation of trend arrows in a KPI visual.</p>
   * @public
   */
  TrendArrows?: TrendArrowOptions;

  /**
   * <p>The options that determine the presentation of the secondary value of a KPI visual.</p>
   * @public
   */
  SecondaryValue?: SecondaryValueOptions;

  /**
   * <p>The comparison configuration of a KPI visual.</p>
   * @public
   */
  Comparison?: ComparisonConfiguration;

  /**
   * <p>The options that determine the primary value display type.</p>
   * @public
   */
  PrimaryValueDisplayType?: PrimaryValueDisplayType;

  /**
   * <p>The options that determine the primary value font configuration.</p>
   * @public
   */
  PrimaryValueFontConfiguration?: FontConfiguration;

  /**
   * <p>The options that determine the secondary value font configuration.</p>
   * @public
   */
  SecondaryValueFontConfiguration?: FontConfiguration;

  /**
   * <p>The options that determine the visibility, color, type, and tooltip visibility of the sparkline of a KPI visual.</p>
   * @public
   */
  Sparkline?: KPISparklineOptions;

  /**
   * <p>The options that determine the layout a KPI visual.</p>
   * @public
   */
  VisualLayoutOptions?: KPIVisualLayoutOptions;
}

/**
 * <p>The sort configuration of a KPI visual.</p>
 * @public
 */
export interface KPISortConfiguration {
  /**
   * <p>The sort configuration of the trend group fields.</p>
   * @public
   */
  TrendGroupSort?: FieldSortOptions[];
}

/**
 * <p>The configuration of a KPI visual.</p>
 * @public
 */
export interface KPIConfiguration {
  /**
   * <p>The field well configuration of a KPI visual.</p>
   * @public
   */
  FieldWells?: KPIFieldWells;

  /**
   * <p>The sort configuration of a KPI visual.</p>
   * @public
   */
  SortConfiguration?: KPISortConfiguration;

  /**
   * <p>The options that determine the presentation of a KPI visual.</p>
   * @public
   */
  KPIOptions?: KPIOptions;

  /**
   * <p>The general visual interactions setup for a visual.</p>
   * @public
   */
  Interactions?: VisualInteractionOptions;
}

/**
 * <p>The conditional formatting for the actual value of a KPI visual.</p>
 * @public
 */
export interface KPIActualValueConditionalFormatting {
  /**
   * <p>The conditional formatting of the actual value's text color.</p>
   * @public
   */
  TextColor?: ConditionalFormattingColor;

  /**
   * <p>The conditional formatting of the actual value's icon.</p>
   * @public
   */
  Icon?: ConditionalFormattingIcon;
}

/**
 * <p>The conditional formatting for the comparison value of a KPI visual.</p>
 * @public
 */
export interface KPIComparisonValueConditionalFormatting {
  /**
   * <p>The conditional formatting of the comparison value's text color.</p>
   * @public
   */
  TextColor?: ConditionalFormattingColor;

  /**
   * <p>The conditional formatting of the comparison value's icon.</p>
   * @public
   */
  Icon?: ConditionalFormattingIcon;
}

/**
 * <p>The conditional formatting for the primary value of a KPI visual.</p>
 * @public
 */
export interface KPIPrimaryValueConditionalFormatting {
  /**
   * <p>The conditional formatting of the  primary value's text color.</p>
   * @public
   */
  TextColor?: ConditionalFormattingColor;

  /**
   * <p>The conditional formatting of the primary value's icon.</p>
   * @public
   */
  Icon?: ConditionalFormattingIcon;
}

/**
 * <p>The conditional formatting for the progress bar of a KPI visual.</p>
 * @public
 */
export interface KPIProgressBarConditionalFormatting {
  /**
   * <p>The conditional formatting of the progress bar's foreground color.</p>
   * @public
   */
  ForegroundColor?: ConditionalFormattingColor;
}

/**
 * <p>The conditional formatting options of a KPI visual.</p>
 * @public
 */
export interface KPIConditionalFormattingOption {
  /**
   * <p>The conditional formatting for the primary value of a KPI visual.</p>
   * @public
   */
  PrimaryValue?: KPIPrimaryValueConditionalFormatting;

  /**
   * <p>The conditional formatting for the progress bar of a KPI visual.</p>
   * @public
   */
  ProgressBar?: KPIProgressBarConditionalFormatting;

  /**
   * <p>The conditional formatting for the actual value of a KPI visual.</p>
   * @public
   */
  ActualValue?: KPIActualValueConditionalFormatting;

  /**
   * <p>The conditional formatting for the comparison value of a KPI visual.</p>
   * @public
   */
  ComparisonValue?: KPIComparisonValueConditionalFormatting;
}

/**
 * <p>The conditional formatting of a KPI visual.</p>
 * @public
 */
export interface KPIConditionalFormatting {
  /**
   * <p>The conditional formatting options of a KPI visual.</p>
   * @public
   */
  ConditionalFormattingOptions?: KPIConditionalFormattingOption[];
}

/**
 * <p>A key performance indicator (KPI).</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/kpi.html">Using KPIs</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 * @public
 */
export interface KPIVisual {
  /**
   * <p>The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.</p>
   * @public
   */
  VisualId: string | undefined;

  /**
   * <p>The title that is displayed on the visual.</p>
   * @public
   */
  Title?: VisualTitleLabelOptions;

  /**
   * <p>The subtitle that is displayed on the visual.</p>
   * @public
   */
  Subtitle?: VisualSubtitleLabelOptions;

  /**
   * <p>The configuration of a KPI visual.</p>
   * @public
   */
  ChartConfiguration?: KPIConfiguration;

  /**
   * <p>The conditional formatting of a KPI visual.</p>
   * @public
   */
  ConditionalFormatting?: KPIConditionalFormatting;

  /**
   * <p>The list of custom actions that are configured for a visual.</p>
   * @public
   */
  Actions?: VisualCustomAction[];

  /**
   * <p>The column hierarchy that is used during drill-downs and drill-ups.</p>
   * @public
   */
  ColumnHierarchies?: ColumnHierarchy[];
}

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
 * <p>Line styles options for a line series in <code>LineChartVisual</code>.</p>
 * @public
 */
export interface LineChartLineStyleSettings {
  /**
   * <p>Configuration option that determines whether to show the line for the series.</p>
   * @public
   */
  LineVisibility?: Visibility;

  /**
   * <p>Interpolation style for line series.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>LINEAR</code>: Show as default, linear style.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SMOOTH</code>: Show as a smooth curve.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STEPPED</code>: Show steps in line.</p>
   *             </li>
   *          </ul>
   * @public
   */
  LineInterpolation?: LineInterpolation;

  /**
   * <p>Line style for line series.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SOLID</code>: Show as a solid line.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DOTTED</code>: Show as a dotted line.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DASHED</code>: Show as a dashed line.</p>
   *             </li>
   *          </ul>
   * @public
   */
  LineStyle?: LineChartLineStyle;

  /**
   * <p>Width that determines the line thickness.</p>
   * @public
   */
  LineWidth?: string;
}

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
 * <p>Marker styles options for a line series in <code>LineChartVisual</code>.</p>
 * @public
 */
export interface LineChartMarkerStyleSettings {
  /**
   * <p>Configuration option that determines whether to show the markers in the series.</p>
   * @public
   */
  MarkerVisibility?: Visibility;

  /**
   * <p>Shape option for markers in the series.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CIRCLE</code>: Show marker as a circle.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TRIANGLE</code>: Show marker as a triangle.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SQUARE</code>: Show marker as a square.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DIAMOND</code>: Show marker as a diamond.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ROUNDED_SQUARE</code>: Show marker as a rounded square.</p>
   *             </li>
   *          </ul>
   * @public
   */
  MarkerShape?: LineChartMarkerShape;

  /**
   * <p>Size of marker in the series.</p>
   * @public
   */
  MarkerSize?: string;

  /**
   * <p>Color of marker in the series.</p>
   * @public
   */
  MarkerColor?: string;
}

/**
 * <p>The options that determine the default presentation of all line series in <code>LineChartVisual</code>.</p>
 * @public
 */
export interface LineChartDefaultSeriesSettings {
  /**
   * <p>The axis to which you are binding all line series to.</p>
   * @public
   */
  AxisBinding?: AxisBinding;

  /**
   * <p>Line styles options for all line series in the visual.</p>
   * @public
   */
  LineStyleSettings?: LineChartLineStyleSettings;

  /**
   * <p>Marker styles options for all line series in the visual.</p>
   * @public
   */
  MarkerStyleSettings?: LineChartMarkerStyleSettings;
}

/**
 * <p>The field well configuration of a line chart.</p>
 * @public
 */
export interface LineChartAggregatedFieldWells {
  /**
   * <p>The category field wells of a line chart. Values are grouped by category fields.</p>
   * @public
   */
  Category?: DimensionField[];

  /**
   * <p>The value field wells of a line chart. Values are aggregated based on categories.</p>
   * @public
   */
  Values?: MeasureField[];

  /**
   * <p>The color field wells of a line chart. Values are grouped by category fields.</p>
   * @public
   */
  Colors?: DimensionField[];

  /**
   * <p>The small multiples field well of a line chart.</p>
   * @public
   */
  SmallMultiples?: DimensionField[];
}

/**
 * <p>The field well configuration of a line chart.</p>
 * @public
 */
export interface LineChartFieldWells {
  /**
   * <p>The field well configuration of a line chart.</p>
   * @public
   */
  LineChartAggregatedFieldWells?: LineChartAggregatedFieldWells;
}

/**
 * <p>The forecast properties setup of a forecast in the line chart.</p>
 * @public
 */
export interface TimeBasedForecastProperties {
  /**
   * <p>The periods forward setup of a forecast computation.</p>
   * @public
   */
  PeriodsForward?: number;

  /**
   * <p>The periods backward setup of a forecast computation.</p>
   * @public
   */
  PeriodsBackward?: number;

  /**
   * <p>The upper boundary setup of a forecast computation.</p>
   * @public
   */
  UpperBoundary?: number;

  /**
   * <p>The lower boundary setup of a forecast computation.</p>
   * @public
   */
  LowerBoundary?: number;

  /**
   * <p>The prediction interval setup of a forecast computation.</p>
   * @public
   */
  PredictionInterval?: number;

  /**
   * <p>The seasonality setup of a forecast computation. Choose one of the following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NULL</code>: The input is set to <code>NULL</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NON_NULL</code>: The input is set to a custom value.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Seasonality?: number;
}

/**
 * <p>Provides the forecast to meet the target for a particular date.</p>
 * @public
 */
export interface WhatIfPointScenario {
  /**
   * <p>The date that you need the forecast results for.</p>
   * @public
   */
  Date: Date | undefined;

  /**
   * <p>The target value that you want to meet for the provided date.</p>
   * @public
   */
  Value: number | undefined;
}

/**
 * <p>Provides the forecast to meet the target for a particular date range.</p>
 * @public
 */
export interface WhatIfRangeScenario {
  /**
   * <p>The start date in the date range that you need the forecast results for.</p>
   * @public
   */
  StartDate: Date | undefined;

  /**
   * <p>The end date in the date range that you need the forecast results for.</p>
   * @public
   */
  EndDate: Date | undefined;

  /**
   * <p>The target value that you want to meet for the provided date range.</p>
   * @public
   */
  Value: number | undefined;
}

/**
 * <p>The forecast scenario of a forecast in the line chart.</p>
 * @public
 */
export interface ForecastScenario {
  /**
   * <p>The what-if analysis forecast setup with the target date.</p>
   * @public
   */
  WhatIfPointScenario?: WhatIfPointScenario;

  /**
   * <p>The what-if analysis forecast setup with the date range.</p>
   * @public
   */
  WhatIfRangeScenario?: WhatIfRangeScenario;
}

/**
 * <p>The forecast configuration that is used in a line chart's display properties.</p>
 * @public
 */
export interface ForecastConfiguration {
  /**
   * <p>The forecast properties setup of a forecast in the line
   *             chart.</p>
   * @public
   */
  ForecastProperties?: TimeBasedForecastProperties;

  /**
   * <p>The forecast scenario of a forecast in the line chart.</p>
   * @public
   */
  Scenario?: ForecastScenario;
}

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
 * <p>The configuration options that determine how missing data is treated during the rendering of a line chart.</p>
 * @public
 */
export interface MissingDataConfiguration {
  /**
   * <p>The treatment option that determines how missing data should be rendered. Choose
   *             from the following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INTERPOLATE</code>: Interpolate missing values between the prior and the next known value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SHOW_AS_ZERO</code>: Show missing values as the value <code>0</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SHOW_AS_BLANK</code>: Display a blank space when rendering missing data.</p>
   *             </li>
   *          </ul>
   * @public
   */
  TreatmentOption?: MissingDataTreatmentOption;
}

/**
 * <p>The series axis configuration of a line chart.</p>
 * @public
 */
export interface LineSeriesAxisDisplayOptions {
  /**
   * <p>The options that determine the presentation of the line series axis.</p>
   * @public
   */
  AxisOptions?: AxisDisplayOptions;

  /**
   * <p>The configuration options that determine how missing data is treated during the rendering of a line chart.</p>
   * @public
   */
  MissingDataConfigurations?: MissingDataConfiguration[];
}

/**
 * <p>The options that determine the presentation of a line series in the visual</p>
 * @public
 */
export interface LineChartSeriesSettings {
  /**
   * <p>Line styles options for a line series in <code>LineChartVisual</code>.</p>
   * @public
   */
  LineStyleSettings?: LineChartLineStyleSettings;

  /**
   * <p>Marker styles options for a line series in <code>LineChartVisual</code>.</p>
   * @public
   */
  MarkerStyleSettings?: LineChartMarkerStyleSettings;
}

/**
 * <p>The data field series item configuration of a line chart.</p>
 * @public
 */
export interface DataFieldSeriesItem {
  /**
   * <p>The field ID of the field that you are setting the axis binding to.</p>
   * @public
   */
  FieldId: string | undefined;

  /**
   * <p>The field value of the field that you are setting the axis binding to.</p>
   * @public
   */
  FieldValue?: string;

  /**
   * <p>The axis that you are binding the field to.</p>
   * @public
   */
  AxisBinding: AxisBinding | undefined;

  /**
   * <p>The options that determine the presentation of line series associated to the field.</p>
   * @public
   */
  Settings?: LineChartSeriesSettings;
}

/**
 * <p>The field series item configuration of a line chart.</p>
 * @public
 */
export interface FieldSeriesItem {
  /**
   * <p>The field ID of the field for which you are setting the axis binding.</p>
   * @public
   */
  FieldId: string | undefined;

  /**
   * <p>The axis that you are binding the field to.</p>
   * @public
   */
  AxisBinding: AxisBinding | undefined;

  /**
   * <p>The options that determine the presentation of line series associated to the field.</p>
   * @public
   */
  Settings?: LineChartSeriesSettings;
}

/**
 * <p>The series item configuration of a line chart.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 * @public
 */
export interface SeriesItem {
  /**
   * <p>The field series item configuration of a line chart.</p>
   * @public
   */
  FieldSeriesItem?: FieldSeriesItem;

  /**
   * <p>The data field series item configuration of a line chart.</p>
   * @public
   */
  DataFieldSeriesItem?: DataFieldSeriesItem;
}

/**
 * <p>The sort configuration of a line chart.</p>
 * @public
 */
export interface LineChartSortConfiguration {
  /**
   * <p>The sort configuration of the category fields.</p>
   * @public
   */
  CategorySort?: FieldSortOptions[];

  /**
   * <p>The limit on the number of categories that are displayed in a line chart.</p>
   * @public
   */
  CategoryItemsLimitConfiguration?: ItemsLimitConfiguration;

  /**
   * <p>The limit on the number of lines that are displayed in a line chart.</p>
   * @public
   */
  ColorItemsLimitConfiguration?: ItemsLimitConfiguration;

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
 * <p>The configuration of a line chart.</p>
 * @public
 */
export interface LineChartConfiguration {
  /**
   * <p>The field well configuration of a line chart.</p>
   * @public
   */
  FieldWells?: LineChartFieldWells;

  /**
   * <p>The sort configuration of a line chart.</p>
   * @public
   */
  SortConfiguration?: LineChartSortConfiguration;

  /**
   * <p>The forecast configuration of a line chart.</p>
   * @public
   */
  ForecastConfigurations?: ForecastConfiguration[];

  /**
   * <p>Determines the type of the line chart.</p>
   * @public
   */
  Type?: LineChartType;

  /**
   * <p>The small multiples setup for the visual.</p>
   * @public
   */
  SmallMultiplesOptions?: SmallMultiplesOptions;

  /**
   * <p>The options that determine the presentation of the x-axis.</p>
   * @public
   */
  XAxisDisplayOptions?: AxisDisplayOptions;

  /**
   * <p>The options that determine the presentation of the x-axis label.</p>
   * @public
   */
  XAxisLabelOptions?: ChartAxisLabelOptions;

  /**
   * <p>The series axis configuration of a line chart.</p>
   * @public
   */
  PrimaryYAxisDisplayOptions?: LineSeriesAxisDisplayOptions;

  /**
   * <p>The options that determine the presentation of the y-axis label.</p>
   * @public
   */
  PrimaryYAxisLabelOptions?: ChartAxisLabelOptions;

  /**
   * <p>The series axis configuration of a line chart.</p>
   * @public
   */
  SecondaryYAxisDisplayOptions?: LineSeriesAxisDisplayOptions;

  /**
   * <p>The options that determine the presentation of the secondary y-axis label.</p>
   * @public
   */
  SecondaryYAxisLabelOptions?: ChartAxisLabelOptions;

  /**
   * <p>The settings of a chart's single axis configuration.</p>
   * @public
   */
  SingleAxisOptions?: SingleAxisOptions;

  /**
   * <p>The options that determine the default presentation of all line series in <code>LineChartVisual</code>.</p>
   * @public
   */
  DefaultSeriesSettings?: LineChartDefaultSeriesSettings;

  /**
   * <p>The series item configuration of a line chart.</p>
   * @public
   */
  Series?: SeriesItem[];

  /**
   * <p>The legend configuration of a line chart.</p>
   * @public
   */
  Legend?: LegendOptions;

  /**
   * <p>The data label configuration of a line chart.</p>
   * @public
   */
  DataLabels?: DataLabelOptions;

  /**
   * <p>The reference lines configuration of a line chart.</p>
   * @public
   */
  ReferenceLines?: ReferenceLine[];

  /**
   * <p>The tooltip configuration of a line chart.</p>
   * @public
   */
  Tooltip?: TooltipOptions;

  /**
   * <p>The default configuration of a line chart's contribution analysis.</p>
   * @public
   */
  ContributionAnalysisDefaults?: ContributionAnalysisDefault[];

  /**
   * <p>The visual palette configuration of a line chart.</p>
   * @public
   */
  VisualPalette?: VisualPalette;

  /**
   * <p>The general visual interactions setup for a visual.</p>
   * @public
   */
  Interactions?: VisualInteractionOptions;
}

/**
 * <p>A line chart.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/line-charts.html">Using line charts</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 * @public
 */
export interface LineChartVisual {
  /**
   * <p>The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.</p>
   * @public
   */
  VisualId: string | undefined;

  /**
   * <p>The title that is displayed on the visual.</p>
   * @public
   */
  Title?: VisualTitleLabelOptions;

  /**
   * <p>The subtitle that is displayed on the visual.</p>
   * @public
   */
  Subtitle?: VisualSubtitleLabelOptions;

  /**
   * <p>The configuration of a line chart.</p>
   * @public
   */
  ChartConfiguration?: LineChartConfiguration;

  /**
   * <p>The list of custom actions that are configured for a visual.</p>
   * @public
   */
  Actions?: VisualCustomAction[];

  /**
   * <p>The column hierarchy that is used during drill-downs and drill-ups.</p>
   * @public
   */
  ColumnHierarchies?: ColumnHierarchy[];
}

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
 * <p>The options that determine the arc thickness of a <code>GaugeChartVisual</code>.</p>
 * @public
 */
export interface ArcOptions {
  /**
   * <p>The arc thickness of a <code>GaugeChartVisual</code>.</p>
   * @public
   */
  ArcThickness?: ArcThickness;
}

/**
 * <p>The label options of the label that is displayed in the center of a donut chart. This option isn't available for pie charts.</p>
 * @public
 */
export interface DonutCenterOptions {
  /**
   * <p>Determines the visibility of the label in a donut chart. In the Amazon QuickSight console, this option is called <code>'Show total'</code>.</p>
   * @public
   */
  LabelVisibility?: Visibility;
}

/**
 * <p>The options for configuring a donut chart or pie chart.</p>
 * @public
 */
export interface DonutOptions {
  /**
   * <p>The option for define the arc of the chart shape. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>WHOLE</code> - A pie chart</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SMALL</code>- A small-sized donut chart</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MEDIUM</code>- A medium-sized donut chart</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LARGE</code>- A large-sized donut chart</p>
   *             </li>
   *          </ul>
   * @public
   */
  ArcOptions?: ArcOptions;

  /**
   * <p>The label options of the label that is displayed in the center of a donut chart. This option isn't available for pie charts.</p>
   * @public
   */
  DonutCenterOptions?: DonutCenterOptions;
}

/**
 * <p>The field well configuration of a pie chart.</p>
 * @public
 */
export interface PieChartAggregatedFieldWells {
  /**
   * <p>The category (group/color) field wells of a pie chart.</p>
   * @public
   */
  Category?: DimensionField[];

  /**
   * <p>The value field wells of a pie chart. Values are aggregated based on categories.</p>
   * @public
   */
  Values?: MeasureField[];

  /**
   * <p>The small multiples field well of a pie chart.</p>
   * @public
   */
  SmallMultiples?: DimensionField[];
}

/**
 * <p>The field well configuration of a pie chart.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 * @public
 */
export interface PieChartFieldWells {
  /**
   * <p>The field well configuration of a pie chart.</p>
   * @public
   */
  PieChartAggregatedFieldWells?: PieChartAggregatedFieldWells;
}

/**
 * <p>The sort configuration of a pie chart.</p>
 * @public
 */
export interface PieChartSortConfiguration {
  /**
   * <p>The sort configuration of the category fields.</p>
   * @public
   */
  CategorySort?: FieldSortOptions[];

  /**
   * <p>The limit on the number of categories that are displayed in a pie chart.</p>
   * @public
   */
  CategoryItemsLimit?: ItemsLimitConfiguration;

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
 * <p>The configuration of a pie chart.</p>
 * @public
 */
export interface PieChartConfiguration {
  /**
   * <p>The field wells of the visual.</p>
   * @public
   */
  FieldWells?: PieChartFieldWells;

  /**
   * <p>The sort configuration of a pie chart.</p>
   * @public
   */
  SortConfiguration?: PieChartSortConfiguration;

  /**
   * <p>The options that determine the shape of the chart. This option determines whether the chart is a pie chart or a donut chart.</p>
   * @public
   */
  DonutOptions?: DonutOptions;

  /**
   * <p>The small multiples setup for the visual.</p>
   * @public
   */
  SmallMultiplesOptions?: SmallMultiplesOptions;

  /**
   * <p>The label options of the group/color that is displayed in a pie chart.</p>
   * @public
   */
  CategoryLabelOptions?: ChartAxisLabelOptions;

  /**
   * <p>The label options for the value that is displayed in a pie chart.</p>
   * @public
   */
  ValueLabelOptions?: ChartAxisLabelOptions;

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
   * <p>The palette (chart color) display setup of the visual.</p>
   * @public
   */
  VisualPalette?: VisualPalette;

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
 * <p>A pie or donut chart.</p>
 *          <p>The <code>PieChartVisual</code> structure describes a visual that is a member of the pie chart family.</p>
 *          <p>The following charts can be described by using this structure:</p>
 *          <ul>
 *             <li>
 *                <p>Pie charts</p>
 *             </li>
 *             <li>
 *                <p>Donut charts</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/pie-chart.html">Using pie charts</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/donut-chart.html">Using donut charts</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 * @public
 */
export interface PieChartVisual {
  /**
   * <p>The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.</p>
   * @public
   */
  VisualId: string | undefined;

  /**
   * <p>The title that is displayed on the visual.</p>
   * @public
   */
  Title?: VisualTitleLabelOptions;

  /**
   * <p>The subtitle that is displayed on the visual.</p>
   * @public
   */
  Subtitle?: VisualSubtitleLabelOptions;

  /**
   * <p>The configuration of a pie chart.</p>
   * @public
   */
  ChartConfiguration?: PieChartConfiguration;

  /**
   * <p>The list of custom actions that are configured for a visual.</p>
   * @public
   */
  Actions?: VisualCustomAction[];

  /**
   * <p>The column hierarchy that is used during drill-downs and drill-ups.</p>
   * @public
   */
  ColumnHierarchies?: ColumnHierarchy[];
}

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
 * <p>The target of a pivot table field collapse state.</p>
 * @public
 */
export interface PivotTableFieldCollapseStateTarget {
  /**
   * <p>The field ID of the pivot table that the collapse state needs to be set to.</p>
   * @public
   */
  FieldId?: string;

  /**
   * <p>The data path of the pivot table's header. Used to set the collapse state.</p>
   * @public
   */
  FieldDataPathValues?: DataPathValue[];
}

/**
 * <p>The collapse state options for the pivot table field options.</p>
 * @public
 */
export interface PivotTableFieldCollapseStateOption {
  /**
   * <p>A tagged-union object that sets the collapse state.</p>
   * @public
   */
  Target: PivotTableFieldCollapseStateTarget | undefined;

  /**
   * <p>The state of the field target of a pivot table. Choose one of the following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>COLLAPSED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EXPANDED</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  State?: PivotTableFieldCollapseState;
}

/**
 * <p>The data path options for the pivot table field options.</p>
 * @public
 */
export interface PivotTableDataPathOption {
  /**
   * <p>The list of data path values for the data path options.</p>
   * @public
   */
  DataPathList: DataPathValue[] | undefined;

  /**
   * <p>The width of the data path option.</p>
   * @public
   */
  Width?: string;
}

/**
 * <p>The selected field options for the pivot table field options.</p>
 * @public
 */
export interface PivotTableFieldOption {
  /**
   * <p>The field ID of the pivot table field.</p>
   * @public
   */
  FieldId: string | undefined;

  /**
   * <p>The custom label of the pivot table field.</p>
   * @public
   */
  CustomLabel?: string;

  /**
   * <p>The visibility of the pivot table field.</p>
   * @public
   */
  Visibility?: Visibility;
}

/**
 * <p>The field options for a pivot table visual.</p>
 * @public
 */
export interface PivotTableFieldOptions {
  /**
   * <p>The selected field options for the pivot table field options.</p>
   * @public
   */
  SelectedFieldOptions?: PivotTableFieldOption[];

  /**
   * <p>The data path options for the pivot table field options.</p>
   * @public
   */
  DataPathOptions?: PivotTableDataPathOption[];

  /**
   * <p>The collapse state options for the pivot table field options.</p>
   * @public
   */
  CollapseStateOptions?: PivotTableFieldCollapseStateOption[];
}

/**
 * <p>The aggregated field well for the pivot table.</p>
 * @public
 */
export interface PivotTableAggregatedFieldWells {
  /**
   * <p>The rows field well for a pivot table. Values are grouped by rows fields.</p>
   * @public
   */
  Rows?: DimensionField[];

  /**
   * <p>The columns field well for a pivot table. Values are grouped by columns fields.</p>
   * @public
   */
  Columns?: DimensionField[];

  /**
   * <p>The values field well for a pivot table. Values are aggregated based on rows and columns fields.</p>
   * @public
   */
  Values?: MeasureField[];
}

/**
 * <p>The field wells for a pivot table visual.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 * @public
 */
export interface PivotTableFieldWells {
  /**
   * <p>The aggregated field well for the pivot table.</p>
   * @public
   */
  PivotTableAggregatedFieldWells?: PivotTableAggregatedFieldWells;
}

/**
 * <p>The paginated report options for a pivot table visual.</p>
 * @public
 */
export interface PivotTablePaginatedReportOptions {
  /**
   * <p>The visibility of the printing table overflow across pages.</p>
   * @public
   */
  VerticalOverflowVisibility?: Visibility;

  /**
   * <p>The visibility of the repeating header rows on each page.</p>
   * @public
   */
  OverflowColumnHeaderVisibility?: Visibility;
}

/**
 * <p>Allows data paths to be sorted by a specific data value.</p>
 * @public
 */
export interface DataPathSort {
  /**
   * <p>Determines the sort direction.</p>
   * @public
   */
  Direction: SortDirection | undefined;

  /**
   * <p>The list of data paths that need to be sorted.</p>
   * @public
   */
  SortPaths: DataPathValue[] | undefined;
}

/**
 * <p>The sort by field for the field sort options.</p>
 * @public
 */
export interface PivotTableSortBy {
  /**
   * <p>The field sort (field id, direction) for the pivot table sort by options.</p>
   * @public
   */
  Field?: FieldSort;

  /**
   * <p>The column sort (field id, direction) for the pivot table sort by options.</p>
   * @public
   */
  Column?: ColumnSort;

  /**
   * <p>The data path sort (data path value, direction) for the pivot table sort by options.</p>
   * @public
   */
  DataPath?: DataPathSort;
}

/**
 * <p>The field sort options for a pivot table sort configuration.</p>
 * @public
 */
export interface PivotFieldSortOptions {
  /**
   * <p>The field ID for the field sort options.</p>
   * @public
   */
  FieldId: string | undefined;

  /**
   * <p>The sort by field for the field sort options.</p>
   * @public
   */
  SortBy: PivotTableSortBy | undefined;
}

/**
 * <p>The sort configuration for a <code>PivotTableVisual</code>.</p>
 * @public
 */
export interface PivotTableSortConfiguration {
  /**
   * <p>The field sort options for a pivot table sort configuration.</p>
   * @public
   */
  FieldSortOptions?: PivotFieldSortOptions[];
}

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
 * <p>The border options for a table border.</p>
 * @public
 */
export interface TableBorderOptions {
  /**
   * <p>The color of a table border.</p>
   * @public
   */
  Color?: string;

  /**
   * <p>The thickness of a table border.</p>
   * @public
   */
  Thickness?: number;

  /**
   * <p>The style (none, solid) of a table border.</p>
   * @public
   */
  Style?: TableBorderStyle;
}

/**
 * <p>The side border options for a table.</p>
 * @public
 */
export interface TableSideBorderOptions {
  /**
   * <p>The table border options of the inner vertical border.</p>
   * @public
   */
  InnerVertical?: TableBorderOptions;

  /**
   * <p>The table border options of the inner horizontal border.</p>
   * @public
   */
  InnerHorizontal?: TableBorderOptions;

  /**
   * <p>The table border options of the left border.</p>
   * @public
   */
  Left?: TableBorderOptions;

  /**
   * <p>The table border options of the right border.</p>
   * @public
   */
  Right?: TableBorderOptions;

  /**
   * <p>The table border options of the top border.</p>
   * @public
   */
  Top?: TableBorderOptions;

  /**
   * <p>The table border options of the bottom border.</p>
   * @public
   */
  Bottom?: TableBorderOptions;
}

/**
 * <p>Determines the border options for a table visual.</p>
 * @public
 */
export interface GlobalTableBorderOptions {
  /**
   * <p>Determines the options for uniform border.</p>
   * @public
   */
  UniformBorder?: TableBorderOptions;

  /**
   * <p>Determines the options for side specific border.</p>
   * @public
   */
  SideSpecificBorder?: TableSideBorderOptions;
}

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
 * <p>The table cell style for a cell in pivot table or table visual.</p>
 * @public
 */
export interface TableCellStyle {
  /**
   * <p>The visibility of the table cells.</p>
   * @public
   */
  Visibility?: Visibility;

  /**
   * <p>The font configuration of the table cells.</p>
   * @public
   */
  FontConfiguration?: FontConfiguration;

  /**
   * <p>The text wrap (none, wrap) for the table cells.</p>
   * @public
   */
  TextWrap?: TextWrap;

  /**
   * <p>The horizontal text alignment (left, center, right, auto) for the table cells.</p>
   * @public
   */
  HorizontalTextAlignment?: HorizontalTextAlignment;

  /**
   * <p>The vertical text alignment (top, middle, bottom) for the table cells.</p>
   * @public
   */
  VerticalTextAlignment?: VerticalTextAlignment;

  /**
   * <p>The background color for the table cells.</p>
   * @public
   */
  BackgroundColor?: string;

  /**
   * <p>The height color for the table cells.</p>
   * @public
   */
  Height?: number;

  /**
   * <p>The borders for the table cells.</p>
   * @public
   */
  Border?: GlobalTableBorderOptions;
}

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
 * <p>Determines the row alternate color options.</p>
 * @public
 */
export interface RowAlternateColorOptions {
  /**
   * <p>Determines the widget status.</p>
   * @public
   */
  Status?: WidgetStatus;

  /**
   * <p>Determines the list of row alternate colors.</p>
   * @public
   */
  RowAlternateColors?: string[];

  /**
   * <p>The primary background color options for alternate rows.</p>
   * @public
   */
  UsePrimaryBackgroundColor?: WidgetStatus;
}

/**
 * <p>The options for the label thta is located above the row headers. This option is only applicable when <code>RowsLayout</code> is set to <code>HIERARCHY</code>.</p>
 * @public
 */
export interface PivotTableRowsLabelOptions {
  /**
   * <p>The visibility of the rows label.</p>
   * @public
   */
  Visibility?: Visibility;

  /**
   * <p>The custom label string for the rows label.</p>
   * @public
   */
  CustomLabel?: string;
}

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
 * <p>The table options for a pivot table visual.</p>
 * @public
 */
export interface PivotTableOptions {
  /**
   * <p>The metric placement (row, column) options.</p>
   * @public
   */
  MetricPlacement?: PivotTableMetricPlacement;

  /**
   * <p>The visibility of the single metric options.</p>
   * @public
   */
  SingleMetricVisibility?: Visibility;

  /**
   * <p>The visibility of the column names.</p>
   * @public
   */
  ColumnNamesVisibility?: Visibility;

  /**
   * <p>Determines the visibility of the pivot table.</p>
   * @public
   */
  ToggleButtonsVisibility?: Visibility;

  /**
   * <p>The table cell style of the column header.</p>
   * @public
   */
  ColumnHeaderStyle?: TableCellStyle;

  /**
   * <p>The table cell style of the row headers.</p>
   * @public
   */
  RowHeaderStyle?: TableCellStyle;

  /**
   * <p>The table cell style of cells.</p>
   * @public
   */
  CellStyle?: TableCellStyle;

  /**
   * <p>The table cell style of row field names.</p>
   * @public
   */
  RowFieldNamesStyle?: TableCellStyle;

  /**
   * <p>The row alternate color options (widget status, row alternate colors).</p>
   * @public
   */
  RowAlternateColorOptions?: RowAlternateColorOptions;

  /**
   * <p>The visibility setting of a pivot table's collapsed row dimension fields. If the value of this structure is <code>HIDDEN</code>, all collapsed columns in a pivot table are automatically hidden. The default value is <code>VISIBLE</code>.</p>
   * @public
   */
  CollapsedRowDimensionsVisibility?: Visibility;

  /**
   * <p>The layout for the row dimension headers of a pivot table. Choose one of the following options.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>TABULAR</code>: (Default) Each row field is displayed in a separate column.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HIERARCHY</code>: All row fields are displayed in a single column. Indentation is used to differentiate row headers of different fields.</p>
   *             </li>
   *          </ul>
   * @public
   */
  RowsLayout?: PivotTableRowsLayout;

  /**
   * <p>The options for the label that is located above the row headers. This option is only applicable when <code>RowsLayout</code> is set to <code>HIERARCHY</code>.</p>
   * @public
   */
  RowsLabelOptions?: PivotTableRowsLabelOptions;

  /**
   * <p>The default cell width of the pivot table.</p>
   * @public
   */
  DefaultCellWidth?: string;
}

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
 * <p>The optional configuration of subtotals cells.</p>
 * @public
 */
export interface PivotTableFieldSubtotalOptions {
  /**
   * <p>The field ID of the subtotal options.</p>
   * @public
   */
  FieldId?: string;
}

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
 * <p>The table style target.</p>
 * @public
 */
export interface TableStyleTarget {
  /**
   * <p>The cell type of the table style target.</p>
   * @public
   */
  CellType: StyledCellType | undefined;
}

/**
 * <p>The subtotal options.</p>
 * @public
 */
export interface SubtotalOptions {
  /**
   * <p>The visibility configuration for the subtotal cells.</p>
   * @public
   */
  TotalsVisibility?: Visibility;

  /**
   * <p>The custom label string for the subtotal cells.</p>
   * @public
   */
  CustomLabel?: string;

  /**
   * <p>The field level (all, custom, last) for the subtotal cells.</p>
   * @public
   */
  FieldLevel?: PivotTableSubtotalLevel;

  /**
   * <p>The optional configuration of subtotal cells.</p>
   * @public
   */
  FieldLevelOptions?: PivotTableFieldSubtotalOptions[];

  /**
   * <p>The cell styling options for the subtotal cells.</p>
   * @public
   */
  TotalCellStyle?: TableCellStyle;

  /**
   * <p>The cell styling options for the subtotals of value cells.</p>
   * @public
   */
  ValueCellStyle?: TableCellStyle;

  /**
   * <p>The cell styling options for the subtotals of header cells.</p>
   * @public
   */
  MetricHeaderCellStyle?: TableCellStyle;

  /**
   * <p>The style targets options for subtotals.</p>
   * @public
   */
  StyleTargets?: TableStyleTarget[];
}

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
 * <p>An aggregation function that aggregates the total values of a measure.</p>
 * @public
 */
export interface TotalAggregationFunction {
  /**
   * <p>A built in aggregation function for total values.</p>
   * @public
   */
  SimpleTotalAggregationFunction?: SimpleTotalAggregationFunction;
}

/**
 * <p>The total aggregation settings map of a field id.</p>
 * @public
 */
export interface TotalAggregationOption {
  /**
   * <p>The field id that's associated with the total aggregation option.</p>
   * @public
   */
  FieldId: string | undefined;

  /**
   * <p>The total aggregation function that you want to set for a specified field id.</p>
   * @public
   */
  TotalAggregationFunction: TotalAggregationFunction | undefined;
}

/**
 * <p>The optional configuration of totals cells in a <code>PivotTableVisual</code>.</p>
 * @public
 */
export interface PivotTotalOptions {
  /**
   * <p>The visibility configuration for the total cells.</p>
   * @public
   */
  TotalsVisibility?: Visibility;

  /**
   * <p>The placement (start, end) for the total cells.</p>
   * @public
   */
  Placement?: TableTotalsPlacement;

  /**
   * <p>The scroll status (pinned, scrolled) for the total cells.</p>
   * @public
   */
  ScrollStatus?: TableTotalsScrollStatus;

  /**
   * <p>The custom label string for the total cells.</p>
   * @public
   */
  CustomLabel?: string;

  /**
   * <p>The cell styling options for the total cells.</p>
   * @public
   */
  TotalCellStyle?: TableCellStyle;

  /**
   * <p>The cell styling options for the totals of value cells.</p>
   * @public
   */
  ValueCellStyle?: TableCellStyle;

  /**
   * <p>The cell styling options for the total of header cells.</p>
   * @public
   */
  MetricHeaderCellStyle?: TableCellStyle;

  /**
   * <p>The total aggregation options for each value field.</p>
   * @public
   */
  TotalAggregationOptions?: TotalAggregationOption[];
}

/**
 * <p>The total options for a pivot table visual.</p>
 * @public
 */
export interface PivotTableTotalOptions {
  /**
   * <p>The row subtotal options.</p>
   * @public
   */
  RowSubtotalOptions?: SubtotalOptions;

  /**
   * <p>The column subtotal options.</p>
   * @public
   */
  ColumnSubtotalOptions?: SubtotalOptions;

  /**
   * <p>The row total options.</p>
   * @public
   */
  RowTotalOptions?: PivotTotalOptions;

  /**
   * <p>The column total options.</p>
   * @public
   */
  ColumnTotalOptions?: PivotTotalOptions;
}

/**
 * <p>The configuration for a <code>PivotTableVisual</code>.</p>
 * @public
 */
export interface PivotTableConfiguration {
  /**
   * <p>The field wells of the visual.</p>
   * @public
   */
  FieldWells?: PivotTableFieldWells;

  /**
   * <p>The sort configuration for a <code>PivotTableVisual</code>.</p>
   * @public
   */
  SortConfiguration?: PivotTableSortConfiguration;

  /**
   * <p>The table options for a pivot table visual.</p>
   * @public
   */
  TableOptions?: PivotTableOptions;

  /**
   * <p>The total options for a pivot table visual.</p>
   * @public
   */
  TotalOptions?: PivotTableTotalOptions;

  /**
   * <p>The field options for a pivot table visual.</p>
   * @public
   */
  FieldOptions?: PivotTableFieldOptions;

  /**
   * <p>The paginated report options for a pivot table visual.</p>
   * @public
   */
  PaginatedReportOptions?: PivotTablePaginatedReportOptions;

  /**
   * <p>The general visual interactions setup for a visual.</p>
   * @public
   */
  Interactions?: VisualInteractionOptions;
}

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
 * <p>The scope of the cell for conditional formatting.</p>
 * @public
 */
export interface PivotTableConditionalFormattingScope {
  /**
   * <p>The role (field, field total, grand total) of the cell for conditional formatting.</p>
   * @public
   */
  Role?: PivotTableConditionalFormattingScopeRole;
}

/**
 * <p>The conditional formatting for the text.</p>
 * @public
 */
export interface TextConditionalFormat {
  /**
   * <p>The conditional formatting for the text background color.</p>
   * @public
   */
  BackgroundColor?: ConditionalFormattingColor;

  /**
   * <p>The conditional formatting for the text color.</p>
   * @public
   */
  TextColor?: ConditionalFormattingColor;

  /**
   * <p>The conditional formatting for the icon.</p>
   * @public
   */
  Icon?: ConditionalFormattingIcon;
}

/**
 * <p>The cell conditional formatting option for a pivot table.</p>
 * @public
 */
export interface PivotTableCellConditionalFormatting {
  /**
   * <p>The field ID of the cell for conditional formatting.</p>
   * @public
   */
  FieldId: string | undefined;

  /**
   * <p>The text format of the cell for conditional formatting.</p>
   * @public
   */
  TextFormat?: TextConditionalFormat;

  /**
   * <p>The scope of the cell for conditional formatting.</p>
   * @public
   */
  Scope?: PivotTableConditionalFormattingScope;

  /**
   * <p>A list of cell scopes for conditional formatting.</p>
   * @public
   */
  Scopes?: PivotTableConditionalFormattingScope[];
}

/**
 * <p>Conditional formatting options for a <code>PivotTableVisual</code>.</p>
 * @public
 */
export interface PivotTableConditionalFormattingOption {
  /**
   * <p>The cell conditional formatting option for a pivot table.</p>
   * @public
   */
  Cell?: PivotTableCellConditionalFormatting;
}

/**
 * <p>The conditional formatting for a <code>PivotTableVisual</code>.</p>
 * @public
 */
export interface PivotTableConditionalFormatting {
  /**
   * <p>Conditional formatting options for a <code>PivotTableVisual</code>.</p>
   * @public
   */
  ConditionalFormattingOptions?: PivotTableConditionalFormattingOption[];
}

/**
 * <p>A pivot table.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/pivot-table.html">Using pivot tables</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 * @public
 */
export interface PivotTableVisual {
  /**
   * <p>The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers..</p>
   * @public
   */
  VisualId: string | undefined;

  /**
   * <p>The title that is displayed on the visual.</p>
   * @public
   */
  Title?: VisualTitleLabelOptions;

  /**
   * <p>The subtitle that is displayed on the visual.</p>
   * @public
   */
  Subtitle?: VisualSubtitleLabelOptions;

  /**
   * <p>The configuration settings of the visual.</p>
   * @public
   */
  ChartConfiguration?: PivotTableConfiguration;

  /**
   * <p>The conditional formatting for a <code>PivotTableVisual</code>.</p>
   * @public
   */
  ConditionalFormatting?: PivotTableConditionalFormatting;

  /**
   * <p>The list of custom actions that are configured for a visual.</p>
   * @public
   */
  Actions?: VisualCustomAction[];
}

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
 * <p>The configured style settings of a radar chart.</p>
 * @public
 */
export interface RadarChartAreaStyleSettings {
  /**
   * <p>The visibility settings of a radar chart.</p>
   * @public
   */
  Visibility?: Visibility;
}

/**
 * <p>The series settings of a radar chart.</p>
 * @public
 */
export interface RadarChartSeriesSettings {
  /**
   * <p>The area style settings of a radar chart.</p>
   * @public
   */
  AreaStyleSettings?: RadarChartAreaStyleSettings;
}

/**
 * <p>The aggregated field well configuration of a <code>RadarChartVisual</code>.</p>
 * @public
 */
export interface RadarChartAggregatedFieldWells {
  /**
   * <p>The aggregated field well categories of a radar chart.</p>
   * @public
   */
  Category?: DimensionField[];

  /**
   * <p>The color that are assigned to the aggregated field wells of a radar chart.</p>
   * @public
   */
  Color?: DimensionField[];

  /**
   * <p>The values that are assigned to the aggregated field wells of a radar chart.</p>
   * @public
   */
  Values?: MeasureField[];
}

/**
 * <p>The field wells of a radar chart visual.</p>
 * @public
 */
export interface RadarChartFieldWells {
  /**
   * <p>The aggregated field wells of a radar chart visual.</p>
   * @public
   */
  RadarChartAggregatedFieldWells?: RadarChartAggregatedFieldWells;
}

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
 * <p>The sort configuration of a <code>RadarChartVisual</code>.</p>
 * @public
 */
export interface RadarChartSortConfiguration {
  /**
   * <p>The category sort options of a radar chart.</p>
   * @public
   */
  CategorySort?: FieldSortOptions[];

  /**
   * <p>The category items limit for a radar chart.</p>
   * @public
   */
  CategoryItemsLimit?: ItemsLimitConfiguration;

  /**
   * <p>The color sort configuration of a radar chart.</p>
   * @public
   */
  ColorSort?: FieldSortOptions[];

  /**
   * <p>The color items limit of a radar chart.</p>
   * @public
   */
  ColorItemsLimit?: ItemsLimitConfiguration;
}

/**
 * <p>The configuration of a <code>RadarChartVisual</code>.</p>
 * @public
 */
export interface RadarChartConfiguration {
  /**
   * <p>The field well configuration of a <code>RadarChartVisual</code>.</p>
   * @public
   */
  FieldWells?: RadarChartFieldWells;

  /**
   * <p>The sort configuration of a <code>RadarChartVisual</code>.</p>
   * @public
   */
  SortConfiguration?: RadarChartSortConfiguration;

  /**
   * <p>The shape of the radar chart.</p>
   * @public
   */
  Shape?: RadarChartShape;

  /**
   * <p>The base sreies settings of a radar chart.</p>
   * @public
   */
  BaseSeriesSettings?: RadarChartSeriesSettings;

  /**
   * <p>The start angle of a radar chart's axis.</p>
   * @public
   */
  StartAngle?: number;

  /**
   * <p>The palette (chart color) display setup of the visual.</p>
   * @public
   */
  VisualPalette?: VisualPalette;

  /**
   * <p>Determines the visibility of the colors of alternatign bands in a radar chart.</p>
   * @public
   */
  AlternateBandColorsVisibility?: Visibility;

  /**
   * <p>The color of the even-numbered alternate bands of a radar chart.</p>
   * @public
   */
  AlternateBandEvenColor?: string;

  /**
   * <p>The color of the odd-numbered alternate bands of a radar chart.</p>
   * @public
   */
  AlternateBandOddColor?: string;

  /**
   * <p>The category axis of a radar chart.</p>
   * @public
   */
  CategoryAxis?: AxisDisplayOptions;

  /**
   * <p>The category label options of a radar chart.</p>
   * @public
   */
  CategoryLabelOptions?: ChartAxisLabelOptions;

  /**
   * <p>The color axis of a radar chart.</p>
   * @public
   */
  ColorAxis?: AxisDisplayOptions;

  /**
   * <p>The color label options of a radar chart.</p>
   * @public
   */
  ColorLabelOptions?: ChartAxisLabelOptions;

  /**
   * <p>The legend display setup of the visual.</p>
   * @public
   */
  Legend?: LegendOptions;

  /**
   * <p>The axis behavior options of a radar chart.</p>
   * @public
   */
  AxesRangeScale?: RadarChartAxesRangeScale;

  /**
   * <p>The general visual interactions setup for a visual.</p>
   * @public
   */
  Interactions?: VisualInteractionOptions;
}

/**
 * <p>A radar chart visual.</p>
 * @public
 */
export interface RadarChartVisual {
  /**
   * <p>The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.</p>
   * @public
   */
  VisualId: string | undefined;

  /**
   * <p>The title that is displayed on the visual.</p>
   * @public
   */
  Title?: VisualTitleLabelOptions;

  /**
   * <p>The subtitle that is displayed on the visual.</p>
   * @public
   */
  Subtitle?: VisualSubtitleLabelOptions;

  /**
   * <p>The configuration settings of the visual.</p>
   * @public
   */
  ChartConfiguration?: RadarChartConfiguration;

  /**
   * <p>The list of custom actions that are configured for a visual.</p>
   * @public
   */
  Actions?: VisualCustomAction[];

  /**
   * <p>The column hierarchy that is used during drill-downs and drill-ups.</p>
   * @public
   */
  ColumnHierarchies?: ColumnHierarchy[];
}

/**
 * <p>The field well configuration of a sankey diagram.</p>
 * @public
 */
export interface SankeyDiagramAggregatedFieldWells {
  /**
   * <p>The source field wells of a sankey diagram.</p>
   * @public
   */
  Source?: DimensionField[];

  /**
   * <p>The destination field wells of a sankey diagram.</p>
   * @public
   */
  Destination?: DimensionField[];

  /**
   * <p>The weight field wells of a sankey diagram.</p>
   * @public
   */
  Weight?: MeasureField[];
}

/**
 * <p>The field well configuration of a sankey diagram.</p>
 * @public
 */
export interface SankeyDiagramFieldWells {
  /**
   * <p>The field well configuration of a sankey diagram.</p>
   * @public
   */
  SankeyDiagramAggregatedFieldWells?: SankeyDiagramAggregatedFieldWells;
}

/**
 * <p>The sort configuration of a sankey diagram.</p>
 * @public
 */
export interface SankeyDiagramSortConfiguration {
  /**
   * <p>The sort configuration of the weight fields.</p>
   * @public
   */
  WeightSort?: FieldSortOptions[];

  /**
   * <p>The limit on the number of source nodes that are displayed in a sankey diagram.</p>
   * @public
   */
  SourceItemsLimit?: ItemsLimitConfiguration;

  /**
   * <p>The limit on the number of destination nodes that are displayed in a sankey diagram.</p>
   * @public
   */
  DestinationItemsLimit?: ItemsLimitConfiguration;
}

/**
 * <p>The configuration of a sankey diagram.</p>
 * @public
 */
export interface SankeyDiagramChartConfiguration {
  /**
   * <p>The field well configuration of a sankey diagram.</p>
   * @public
   */
  FieldWells?: SankeyDiagramFieldWells;

  /**
   * <p>The sort configuration of a sankey diagram.</p>
   * @public
   */
  SortConfiguration?: SankeyDiagramSortConfiguration;

  /**
   * <p>The data label configuration of a sankey diagram.</p>
   * @public
   */
  DataLabels?: DataLabelOptions;

  /**
   * <p>The general visual interactions setup for a visual.</p>
   * @public
   */
  Interactions?: VisualInteractionOptions;
}

/**
 * <p>A sankey diagram.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/sankey-diagram.html">Using Sankey diagrams</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 * @public
 */
export interface SankeyDiagramVisual {
  /**
   * <p>The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.</p>
   * @public
   */
  VisualId: string | undefined;

  /**
   * <p>The title that is displayed on the visual.</p>
   * @public
   */
  Title?: VisualTitleLabelOptions;

  /**
   * <p>The subtitle that is displayed on the visual.</p>
   * @public
   */
  Subtitle?: VisualSubtitleLabelOptions;

  /**
   * <p>The configuration of a sankey diagram.</p>
   * @public
   */
  ChartConfiguration?: SankeyDiagramChartConfiguration;

  /**
   * <p>The list of custom actions that are configured for a visual.</p>
   * @public
   */
  Actions?: VisualCustomAction[];
}

/**
 * <p>The aggregated field well of a scatter plot.</p>
 * @public
 */
export interface ScatterPlotCategoricallyAggregatedFieldWells {
  /**
   * <p>The x-axis field well of a scatter plot.</p>
   *          <p>The x-axis is aggregated by category.</p>
   * @public
   */
  XAxis?: MeasureField[];

  /**
   * <p>The y-axis field well of a scatter plot.</p>
   *          <p>The y-axis is aggregated by category.</p>
   * @public
   */
  YAxis?: MeasureField[];

  /**
   * <p>The category field well of a scatter plot.</p>
   * @public
   */
  Category?: DimensionField[];

  /**
   * <p>The size field well of a scatter plot.</p>
   * @public
   */
  Size?: MeasureField[];

  /**
   * <p>The label field well of a scatter plot.</p>
   * @public
   */
  Label?: DimensionField[];
}

/**
 * <p>The unaggregated field wells of a scatter plot.</p>
 * @public
 */
export interface ScatterPlotUnaggregatedFieldWells {
  /**
   * <p>The x-axis field well of a scatter plot.</p>
   *          <p>The x-axis is a dimension field and cannot be aggregated.</p>
   * @public
   */
  XAxis?: DimensionField[];

  /**
   * <p>The y-axis field well of a scatter plot.</p>
   *          <p>The y-axis is a dimension field and cannot be aggregated.</p>
   * @public
   */
  YAxis?: DimensionField[];

  /**
   * <p>The size field well of a scatter plot.</p>
   * @public
   */
  Size?: MeasureField[];

  /**
   * <p>The category field well of a scatter plot.</p>
   * @public
   */
  Category?: DimensionField[];

  /**
   * <p>The label field well of a scatter plot.</p>
   * @public
   */
  Label?: DimensionField[];
}

/**
 * <p>The field well configuration of a scatter plot.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 * @public
 */
export interface ScatterPlotFieldWells {
  /**
   * <p>The aggregated field wells of a scatter plot. The x and y-axes of scatter plots with aggregated field wells are aggregated by category, label, or both.</p>
   * @public
   */
  ScatterPlotCategoricallyAggregatedFieldWells?: ScatterPlotCategoricallyAggregatedFieldWells;

  /**
   * <p>The unaggregated field wells of a scatter plot. The x and y-axes of these scatter plots are
   *             unaggregated.</p>
   * @public
   */
  ScatterPlotUnaggregatedFieldWells?: ScatterPlotUnaggregatedFieldWells;
}

/**
 * <p>The sort configuration of a scatter plot.</p>
 * @public
 */
export interface ScatterPlotSortConfiguration {
  /**
   * <p>The limit configuration of the visual display for an axis.</p>
   * @public
   */
  ScatterPlotLimitConfiguration?: ItemsLimitConfiguration;
}

/**
 * <p>The configuration of a scatter plot.</p>
 * @public
 */
export interface ScatterPlotConfiguration {
  /**
   * <p>The field wells of the visual.</p>
   * @public
   */
  FieldWells?: ScatterPlotFieldWells;

  /**
   * <p>The sort configuration of a scatter plot.</p>
   * @public
   */
  SortConfiguration?: ScatterPlotSortConfiguration;

  /**
   * <p>The label options (label text, label visibility, and sort icon visibility) of the scatter plot's x-axis.</p>
   * @public
   */
  XAxisLabelOptions?: ChartAxisLabelOptions;

  /**
   * <p>The label display options (grid line, range, scale, and axis step) of the scatter plot's x-axis.</p>
   * @public
   */
  XAxisDisplayOptions?: AxisDisplayOptions;

  /**
   * <p>The label options (label text, label visibility, and sort icon visibility) of the scatter plot's y-axis.</p>
   * @public
   */
  YAxisLabelOptions?: ChartAxisLabelOptions;

  /**
   * <p>The label display options (grid line, range, scale, and axis step) of the scatter plot's y-axis.</p>
   * @public
   */
  YAxisDisplayOptions?: AxisDisplayOptions;

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
   * <p>The legend display setup of the visual.</p>
   * @public
   */
  Tooltip?: TooltipOptions;

  /**
   * <p>The palette (chart color) display setup of the visual.</p>
   * @public
   */
  VisualPalette?: VisualPalette;

  /**
   * <p>The general visual interactions setup for a visual.</p>
   * @public
   */
  Interactions?: VisualInteractionOptions;
}

/**
 * <p>A scatter plot.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/scatter-plot.html">Using scatter plots</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 * @public
 */
export interface ScatterPlotVisual {
  /**
   * <p>The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.</p>
   * @public
   */
  VisualId: string | undefined;

  /**
   * <p>The title that is displayed on the visual.</p>
   * @public
   */
  Title?: VisualTitleLabelOptions;

  /**
   * <p>The subtitle that is displayed on the visual.</p>
   * @public
   */
  Subtitle?: VisualSubtitleLabelOptions;

  /**
   * <p>The configuration settings of the visual.</p>
   * @public
   */
  ChartConfiguration?: ScatterPlotConfiguration;

  /**
   * <p>The list of custom actions that are configured for a visual.</p>
   * @public
   */
  Actions?: VisualCustomAction[];

  /**
   * <p>The column hierarchy that is used during drill-downs and drill-ups.</p>
   * @public
   */
  ColumnHierarchies?: ColumnHierarchy[];
}

/**
 * <p>The settings for the pinned columns of a table visual.</p>
 * @public
 */
export interface TablePinnedFieldOptions {
  /**
   * <p>A list of columns to be pinned to the left of a table visual.</p>
   * @public
   */
  PinnedLeftFields?: string[];
}

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
 * <p>The sizing options for the table image configuration.</p>
 * @public
 */
export interface TableCellImageSizingConfiguration {
  /**
   * <p>The cell scaling configuration of the sizing options for the table image configuration.</p>
   * @public
   */
  TableCellImageScalingConfiguration?: TableCellImageScalingConfiguration;
}

/**
 * <p>The image configuration of a table field URL.</p>
 * @public
 */
export interface TableFieldImageConfiguration {
  /**
   * <p>The sizing options for the table image configuration.</p>
   * @public
   */
  SizingOptions?: TableCellImageSizingConfiguration;
}

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
 * <p>The custom icon content for the table link content configuration.</p>
 * @public
 */
export interface TableFieldCustomIconContent {
  /**
   * <p>The icon set type (link) of the custom icon content for table URL link content.</p>
   * @public
   */
  Icon?: TableFieldIconSetType;
}

/**
 * <p>The custom text content (value, font configuration) for the table link content configuration.</p>
 * @public
 */
export interface TableFieldCustomTextContent {
  /**
   * <p>The string value of the custom text content for the table URL link content.</p>
   * @public
   */
  Value?: string;

  /**
   * <p>The font configuration of the custom text content for the table URL link content.</p>
   * @public
   */
  FontConfiguration: FontConfiguration | undefined;
}

/**
 * <p>The URL content (text, icon) for the table link configuration.</p>
 * @public
 */
export interface TableFieldLinkContentConfiguration {
  /**
   * <p>The custom text content (value, font configuration) for the table link content configuration.</p>
   * @public
   */
  CustomTextContent?: TableFieldCustomTextContent;

  /**
   * <p>The custom icon content for the table link content configuration.</p>
   * @public
   */
  CustomIconContent?: TableFieldCustomIconContent;
}

/**
 * <p>The link configuration of a table field URL.</p>
 * @public
 */
export interface TableFieldLinkConfiguration {
  /**
   * <p>The URL target (new tab, new window, same tab) for the table link configuration.</p>
   * @public
   */
  Target: URLTargetConfiguration | undefined;

  /**
   * <p>The URL content (text, icon) for the table link configuration.</p>
   * @public
   */
  Content: TableFieldLinkContentConfiguration | undefined;
}

/**
 * <p>The URL configuration for a table field.</p>
 * @public
 */
export interface TableFieldURLConfiguration {
  /**
   * <p>The link configuration of a table field URL.</p>
   * @public
   */
  LinkConfiguration?: TableFieldLinkConfiguration;

  /**
   * <p>The image configuration of a table field URL.</p>
   * @public
   */
  ImageConfiguration?: TableFieldImageConfiguration;
}

/**
 * <p>The options for a table field.</p>
 * @public
 */
export interface TableFieldOption {
  /**
   * <p>The field ID for a table field.</p>
   * @public
   */
  FieldId: string | undefined;

  /**
   * <p>The width for a table field.</p>
   * @public
   */
  Width?: string;

  /**
   * <p>The custom label for a table field.</p>
   * @public
   */
  CustomLabel?: string;

  /**
   * <p>The visibility of a table field.</p>
   * @public
   */
  Visibility?: Visibility;

  /**
   * <p>The URL configuration for a table field.</p>
   * @public
   */
  URLStyling?: TableFieldURLConfiguration;
}

/**
 * <p>The field options of a table visual.</p>
 * @public
 */
export interface TableFieldOptions {
  /**
   * <p>The field options to be configured to a table.</p>
   * @public
   */
  SelectedFieldOptions?: TableFieldOption[];

  /**
   * <p>The order of the field IDs that are configured as field options for a table visual.</p>
   * @public
   */
  Order?: string[];

  /**
   * <p>The settings for the pinned columns of a table visual.</p>
   * @public
   */
  PinnedFieldOptions?: TablePinnedFieldOptions;
}

/**
 * <p>The aggregated field well for the table.</p>
 * @public
 */
export interface TableAggregatedFieldWells {
  /**
   * <p>The group by field well for a pivot table. Values are grouped by group by fields.</p>
   * @public
   */
  GroupBy?: DimensionField[];

  /**
   * <p>The values field well for a pivot table. Values are aggregated based on group by fields.</p>
   * @public
   */
  Values?: MeasureField[];
}

/**
 * <p>The unaggregated field for a table.</p>
 * @public
 */
export interface UnaggregatedField {
  /**
   * <p>The custom field ID.</p>
   * @public
   */
  FieldId: string | undefined;

  /**
   * <p>The column that is used in the <code>UnaggregatedField</code>.</p>
   * @public
   */
  Column: ColumnIdentifier | undefined;

  /**
   * <p>The format configuration of the field.</p>
   * @public
   */
  FormatConfiguration?: FormatConfiguration;
}

/**
 * <p>The unaggregated field well for the table.</p>
 * @public
 */
export interface TableUnaggregatedFieldWells {
  /**
   * <p>The values field well for a pivot table. Values are unaggregated for an unaggregated table.</p>
   * @public
   */
  Values?: UnaggregatedField[];
}

/**
 * <p>The field wells for a table visual.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 * @public
 */
export interface TableFieldWells {
  /**
   * <p>The aggregated field well for the table.</p>
   * @public
   */
  TableAggregatedFieldWells?: TableAggregatedFieldWells;

  /**
   * <p>The unaggregated field well for the table.</p>
   * @public
   */
  TableUnaggregatedFieldWells?: TableUnaggregatedFieldWells;
}

/**
 * <p>The paginated report options for a table visual.</p>
 * @public
 */
export interface TablePaginatedReportOptions {
  /**
   * <p>The visibility of printing table overflow across pages.</p>
   * @public
   */
  VerticalOverflowVisibility?: Visibility;

  /**
   * <p>The visibility of repeating header rows on each page.</p>
   * @public
   */
  OverflowColumnHeaderVisibility?: Visibility;
}

/**
 * <p>The sort configuration for a <code>TableVisual</code>.</p>
 * @public
 */
export interface TableSortConfiguration {
  /**
   * <p>The field sort options for rows in the table.</p>
   * @public
   */
  RowSort?: FieldSortOptions[];

  /**
   * <p>The pagination configuration (page size, page number) for the table.</p>
   * @public
   */
  PaginationConfiguration?: PaginationConfiguration;
}

/**
 * <p>The options for data bars.</p>
 * @public
 */
export interface DataBarsOptions {
  /**
   * <p>The field ID for the data bars options.</p>
   * @public
   */
  FieldId: string | undefined;

  /**
   * <p>The color of the positive data bar.</p>
   * @public
   */
  PositiveColor?: string;

  /**
   * <p>The color of the negative data bar.</p>
   * @public
   */
  NegativeColor?: string;
}

/**
 * <p>The inline visualization of a specific type to display within a chart.</p>
 * @public
 */
export interface TableInlineVisualization {
  /**
   * <p>The configuration of the inline visualization of the data bars within a chart.</p>
   * @public
   */
  DataBars?: DataBarsOptions;
}

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
 * <p>The table options for a table visual.</p>
 * @public
 */
export interface TableOptions {
  /**
   * <p>The orientation (vertical, horizontal) for a table.</p>
   * @public
   */
  Orientation?: TableOrientation;

  /**
   * <p>The table cell style of a table header.</p>
   * @public
   */
  HeaderStyle?: TableCellStyle;

  /**
   * <p>The table cell style of table cells.</p>
   * @public
   */
  CellStyle?: TableCellStyle;

  /**
   * <p>The row alternate color options (widget status, row alternate colors) for a table.</p>
   * @public
   */
  RowAlternateColorOptions?: RowAlternateColorOptions;
}

/**
 * <p>The total options for a table visual.</p>
 * @public
 */
export interface TotalOptions {
  /**
   * <p>The visibility configuration for the total cells.</p>
   * @public
   */
  TotalsVisibility?: Visibility;

  /**
   * <p>The placement (start, end) for the total cells.</p>
   * @public
   */
  Placement?: TableTotalsPlacement;

  /**
   * <p>The scroll status (pinned, scrolled) for the total cells.</p>
   * @public
   */
  ScrollStatus?: TableTotalsScrollStatus;

  /**
   * <p>The custom label string for the total cells.</p>
   * @public
   */
  CustomLabel?: string;

  /**
   * <p>Cell styling options for the total cells.</p>
   * @public
   */
  TotalCellStyle?: TableCellStyle;

  /**
   * <p>The total aggregation settings for each value field.</p>
   * @public
   */
  TotalAggregationOptions?: TotalAggregationOption[];
}

/**
 * <p>The configuration for a <code>TableVisual</code>.</p>
 * @public
 */
export interface TableConfiguration {
  /**
   * <p>The field wells of the visual.</p>
   * @public
   */
  FieldWells?: TableFieldWells;

  /**
   * <p>The sort configuration for a <code>TableVisual</code>.</p>
   * @public
   */
  SortConfiguration?: TableSortConfiguration;

  /**
   * <p>The table options for a table visual.</p>
   * @public
   */
  TableOptions?: TableOptions;

  /**
   * <p>The total options for a table visual.</p>
   * @public
   */
  TotalOptions?: TotalOptions;

  /**
   * <p>The field options for a table visual.</p>
   * @public
   */
  FieldOptions?: TableFieldOptions;

  /**
   * <p>The paginated report options for a table visual.</p>
   * @public
   */
  PaginatedReportOptions?: TablePaginatedReportOptions;

  /**
   * <p>A collection of inline visualizations to display within a chart.</p>
   * @public
   */
  TableInlineVisualizations?: TableInlineVisualization[];

  /**
   * <p>The general visual interactions setup for a visual.</p>
   * @public
   */
  Interactions?: VisualInteractionOptions;
}

/**
 * <p>The cell conditional formatting option for a table.</p>
 * @public
 */
export interface TableCellConditionalFormatting {
  /**
   * <p>The field ID of the cell for conditional formatting.</p>
   * @public
   */
  FieldId: string | undefined;

  /**
   * <p>The text format of the cell for conditional formatting.</p>
   * @public
   */
  TextFormat?: TextConditionalFormat;
}

/**
 * <p>The conditional formatting of a table row.</p>
 * @public
 */
export interface TableRowConditionalFormatting {
  /**
   * <p>The conditional formatting color (solid, gradient) of the background for a table row.</p>
   * @public
   */
  BackgroundColor?: ConditionalFormattingColor;

  /**
   * <p>The conditional formatting color (solid, gradient) of the text for a table row.</p>
   * @public
   */
  TextColor?: ConditionalFormattingColor;
}

/**
 * <p>Conditional formatting options for a <code>PivotTableVisual</code>.</p>
 * @public
 */
export interface TableConditionalFormattingOption {
  /**
   * <p>The cell conditional formatting option for a table.</p>
   * @public
   */
  Cell?: TableCellConditionalFormatting;

  /**
   * <p>The row conditional formatting option for a table.</p>
   * @public
   */
  Row?: TableRowConditionalFormatting;
}

/**
 * <p>The conditional formatting for a <code>PivotTableVisual</code>.</p>
 * @public
 */
export interface TableConditionalFormatting {
  /**
   * <p>Conditional formatting options for a <code>PivotTableVisual</code>.</p>
   * @public
   */
  ConditionalFormattingOptions?: TableConditionalFormattingOption[];
}

/**
 * <p>A table visual.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/tabular.html">Using tables as visuals</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 * @public
 */
export interface TableVisual {
  /**
   * <p>The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers..</p>
   * @public
   */
  VisualId: string | undefined;

  /**
   * <p>The title that is displayed on the visual.</p>
   * @public
   */
  Title?: VisualTitleLabelOptions;

  /**
   * <p>The subtitle that is displayed on the visual.</p>
   * @public
   */
  Subtitle?: VisualSubtitleLabelOptions;

  /**
   * <p>The configuration settings of the visual.</p>
   * @public
   */
  ChartConfiguration?: TableConfiguration;

  /**
   * <p>The conditional formatting for a <code>PivotTableVisual</code>.</p>
   * @public
   */
  ConditionalFormatting?: TableConditionalFormatting;

  /**
   * <p>The list of custom actions that are configured for a visual.</p>
   * @public
   */
  Actions?: VisualCustomAction[];
}

/**
 * <p>Aggregated field wells of a tree map.</p>
 * @public
 */
export interface TreeMapAggregatedFieldWells {
  /**
   * <p>The group by field well of a tree map. Values are grouped based on group by fields.</p>
   * @public
   */
  Groups?: DimensionField[];

  /**
   * <p>The size field well of a tree map. Values are aggregated based on group by fields.</p>
   * @public
   */
  Sizes?: MeasureField[];

  /**
   * <p>The color field well of a tree map. Values are grouped by aggregations based on group by fields.</p>
   * @public
   */
  Colors?: MeasureField[];
}

/**
 * <p>The field wells of a tree map.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 * @public
 */
export interface TreeMapFieldWells {
  /**
   * <p>The aggregated field wells of a tree map.</p>
   * @public
   */
  TreeMapAggregatedFieldWells?: TreeMapAggregatedFieldWells;
}

/**
 * <p>The sort configuration of a tree map.</p>
 * @public
 */
export interface TreeMapSortConfiguration {
  /**
   * <p>The sort configuration of group by fields.</p>
   * @public
   */
  TreeMapSort?: FieldSortOptions[];

  /**
   * <p>The limit on the number of groups that are displayed.</p>
   * @public
   */
  TreeMapGroupItemsLimitConfiguration?: ItemsLimitConfiguration;
}

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
export const ComboChartConfigurationFilterSensitiveLog = (obj: ComboChartConfiguration): any => ({
  ...obj,
  ...(obj.BarDataLabels && { BarDataLabels: DataLabelOptionsFilterSensitiveLog(obj.BarDataLabels) }),
  ...(obj.LineDataLabels && { LineDataLabels: DataLabelOptionsFilterSensitiveLog(obj.LineDataLabels) }),
  ...(obj.ReferenceLines && {
    ReferenceLines: obj.ReferenceLines.map((item) => ReferenceLineFilterSensitiveLog(item)),
  }),
  ...(obj.VisualPalette && { VisualPalette: VisualPaletteFilterSensitiveLog(obj.VisualPalette) }),
});

/**
 * @internal
 */
export const ComboChartVisualFilterSensitiveLog = (obj: ComboChartVisual): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomContentVisualFilterSensitiveLog = (obj: CustomContentVisual): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EmptyVisualFilterSensitiveLog = (obj: EmptyVisual): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FilledMapAggregatedFieldWellsFilterSensitiveLog = (obj: FilledMapAggregatedFieldWells): any => ({
  ...obj,
  ...(obj.Values && { Values: obj.Values.map((item) => MeasureFieldFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const FilledMapFieldWellsFilterSensitiveLog = (obj: FilledMapFieldWells): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FilledMapConfigurationFilterSensitiveLog = (obj: FilledMapConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConditionalFormattingGradientColorFilterSensitiveLog = (obj: ConditionalFormattingGradientColor): any => ({
  ...obj,
  ...(obj.Expression && { Expression: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ConditionalFormattingSolidColorFilterSensitiveLog = (obj: ConditionalFormattingSolidColor): any => ({
  ...obj,
  ...(obj.Expression && { Expression: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ConditionalFormattingColorFilterSensitiveLog = (obj: ConditionalFormattingColor): any => ({
  ...obj,
  ...(obj.Solid && { Solid: ConditionalFormattingSolidColorFilterSensitiveLog(obj.Solid) }),
  ...(obj.Gradient && { Gradient: ConditionalFormattingGradientColorFilterSensitiveLog(obj.Gradient) }),
});

/**
 * @internal
 */
export const ShapeConditionalFormatFilterSensitiveLog = (obj: ShapeConditionalFormat): any => ({
  ...obj,
  ...(obj.BackgroundColor && { BackgroundColor: ConditionalFormattingColorFilterSensitiveLog(obj.BackgroundColor) }),
});

/**
 * @internal
 */
export const FilledMapShapeConditionalFormattingFilterSensitiveLog = (
  obj: FilledMapShapeConditionalFormatting
): any => ({
  ...obj,
  ...(obj.Format && { Format: ShapeConditionalFormatFilterSensitiveLog(obj.Format) }),
});

/**
 * @internal
 */
export const FilledMapConditionalFormattingOptionFilterSensitiveLog = (
  obj: FilledMapConditionalFormattingOption
): any => ({
  ...obj,
  ...(obj.Shape && { Shape: FilledMapShapeConditionalFormattingFilterSensitiveLog(obj.Shape) }),
});

/**
 * @internal
 */
export const FilledMapConditionalFormattingFilterSensitiveLog = (obj: FilledMapConditionalFormatting): any => ({
  ...obj,
  ...(obj.ConditionalFormattingOptions && {
    ConditionalFormattingOptions: obj.ConditionalFormattingOptions.map((item) =>
      FilledMapConditionalFormattingOptionFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const FilledMapVisualFilterSensitiveLog = (obj: FilledMapVisual): any => ({
  ...obj,
  ...(obj.ConditionalFormatting && {
    ConditionalFormatting: FilledMapConditionalFormattingFilterSensitiveLog(obj.ConditionalFormatting),
  }),
});

/**
 * @internal
 */
export const FunnelChartAggregatedFieldWellsFilterSensitiveLog = (obj: FunnelChartAggregatedFieldWells): any => ({
  ...obj,
  ...(obj.Values && { Values: obj.Values.map((item) => MeasureFieldFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const FunnelChartFieldWellsFilterSensitiveLog = (obj: FunnelChartFieldWells): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FunnelChartConfigurationFilterSensitiveLog = (obj: FunnelChartConfiguration): any => ({
  ...obj,
  ...(obj.VisualPalette && { VisualPalette: VisualPaletteFilterSensitiveLog(obj.VisualPalette) }),
});

/**
 * @internal
 */
export const FunnelChartVisualFilterSensitiveLog = (obj: FunnelChartVisual): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GaugeChartFieldWellsFilterSensitiveLog = (obj: GaugeChartFieldWells): any => ({
  ...obj,
  ...(obj.Values && { Values: obj.Values.map((item) => MeasureFieldFilterSensitiveLog(item)) }),
  ...(obj.TargetValues && { TargetValues: obj.TargetValues.map((item) => MeasureFieldFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ComparisonFormatConfigurationFilterSensitiveLog = (obj: ComparisonFormatConfiguration): any => ({
  ...obj,
  ...(obj.NumberDisplayFormatConfiguration && {
    NumberDisplayFormatConfiguration: NumberDisplayFormatConfigurationFilterSensitiveLog(
      obj.NumberDisplayFormatConfiguration
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
export const ComparisonConfigurationFilterSensitiveLog = (obj: ComparisonConfiguration): any => ({
  ...obj,
  ...(obj.ComparisonFormat && {
    ComparisonFormat: ComparisonFormatConfigurationFilterSensitiveLog(obj.ComparisonFormat),
  }),
});

/**
 * @internal
 */
export const GaugeChartOptionsFilterSensitiveLog = (obj: GaugeChartOptions): any => ({
  ...obj,
  ...(obj.Comparison && { Comparison: ComparisonConfigurationFilterSensitiveLog(obj.Comparison) }),
});

/**
 * @internal
 */
export const GaugeChartConfigurationFilterSensitiveLog = (obj: GaugeChartConfiguration): any => ({
  ...obj,
  ...(obj.FieldWells && { FieldWells: GaugeChartFieldWellsFilterSensitiveLog(obj.FieldWells) }),
  ...(obj.GaugeChartOptions && { GaugeChartOptions: GaugeChartOptionsFilterSensitiveLog(obj.GaugeChartOptions) }),
  ...(obj.DataLabels && { DataLabels: DataLabelOptionsFilterSensitiveLog(obj.DataLabels) }),
  ...(obj.VisualPalette && { VisualPalette: VisualPaletteFilterSensitiveLog(obj.VisualPalette) }),
});

/**
 * @internal
 */
export const GaugeChartArcConditionalFormattingFilterSensitiveLog = (obj: GaugeChartArcConditionalFormatting): any => ({
  ...obj,
  ...(obj.ForegroundColor && { ForegroundColor: ConditionalFormattingColorFilterSensitiveLog(obj.ForegroundColor) }),
});

/**
 * @internal
 */
export const ConditionalFormattingCustomIconConditionFilterSensitiveLog = (
  obj: ConditionalFormattingCustomIconCondition
): any => ({
  ...obj,
  ...(obj.Expression && { Expression: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ConditionalFormattingIconSetFilterSensitiveLog = (obj: ConditionalFormattingIconSet): any => ({
  ...obj,
  ...(obj.Expression && { Expression: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ConditionalFormattingIconFilterSensitiveLog = (obj: ConditionalFormattingIcon): any => ({
  ...obj,
  ...(obj.IconSet && { IconSet: ConditionalFormattingIconSetFilterSensitiveLog(obj.IconSet) }),
  ...(obj.CustomCondition && {
    CustomCondition: ConditionalFormattingCustomIconConditionFilterSensitiveLog(obj.CustomCondition),
  }),
});

/**
 * @internal
 */
export const GaugeChartPrimaryValueConditionalFormattingFilterSensitiveLog = (
  obj: GaugeChartPrimaryValueConditionalFormatting
): any => ({
  ...obj,
  ...(obj.TextColor && { TextColor: ConditionalFormattingColorFilterSensitiveLog(obj.TextColor) }),
  ...(obj.Icon && { Icon: ConditionalFormattingIconFilterSensitiveLog(obj.Icon) }),
});

/**
 * @internal
 */
export const GaugeChartConditionalFormattingOptionFilterSensitiveLog = (
  obj: GaugeChartConditionalFormattingOption
): any => ({
  ...obj,
  ...(obj.PrimaryValue && {
    PrimaryValue: GaugeChartPrimaryValueConditionalFormattingFilterSensitiveLog(obj.PrimaryValue),
  }),
  ...(obj.Arc && { Arc: GaugeChartArcConditionalFormattingFilterSensitiveLog(obj.Arc) }),
});

/**
 * @internal
 */
export const GaugeChartConditionalFormattingFilterSensitiveLog = (obj: GaugeChartConditionalFormatting): any => ({
  ...obj,
  ...(obj.ConditionalFormattingOptions && {
    ConditionalFormattingOptions: obj.ConditionalFormattingOptions.map((item) =>
      GaugeChartConditionalFormattingOptionFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const GaugeChartVisualFilterSensitiveLog = (obj: GaugeChartVisual): any => ({
  ...obj,
  ...(obj.ChartConfiguration && {
    ChartConfiguration: GaugeChartConfigurationFilterSensitiveLog(obj.ChartConfiguration),
  }),
  ...(obj.ConditionalFormatting && {
    ConditionalFormatting: GaugeChartConditionalFormattingFilterSensitiveLog(obj.ConditionalFormatting),
  }),
});

/**
 * @internal
 */
export const GeospatialMapAggregatedFieldWellsFilterSensitiveLog = (obj: GeospatialMapAggregatedFieldWells): any => ({
  ...obj,
  ...(obj.Values && { Values: obj.Values.map((item) => MeasureFieldFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const GeospatialMapFieldWellsFilterSensitiveLog = (obj: GeospatialMapFieldWells): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GeospatialMapConfigurationFilterSensitiveLog = (obj: GeospatialMapConfiguration): any => ({
  ...obj,
  ...(obj.VisualPalette && { VisualPalette: VisualPaletteFilterSensitiveLog(obj.VisualPalette) }),
});

/**
 * @internal
 */
export const GeospatialMapVisualFilterSensitiveLog = (obj: GeospatialMapVisual): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HeatMapAggregatedFieldWellsFilterSensitiveLog = (obj: HeatMapAggregatedFieldWells): any => ({
  ...obj,
  ...(obj.Values && { Values: obj.Values.map((item) => MeasureFieldFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const HeatMapFieldWellsFilterSensitiveLog = (obj: HeatMapFieldWells): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HeatMapConfigurationFilterSensitiveLog = (obj: HeatMapConfiguration): any => ({
  ...obj,
  ...(obj.DataLabels && { DataLabels: DataLabelOptionsFilterSensitiveLog(obj.DataLabels) }),
});

/**
 * @internal
 */
export const HeatMapVisualFilterSensitiveLog = (obj: HeatMapVisual): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HistogramAggregatedFieldWellsFilterSensitiveLog = (obj: HistogramAggregatedFieldWells): any => ({
  ...obj,
  ...(obj.Values && { Values: obj.Values.map((item) => MeasureFieldFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const HistogramFieldWellsFilterSensitiveLog = (obj: HistogramFieldWells): any => ({
  ...obj,
  ...(obj.HistogramAggregatedFieldWells && {
    HistogramAggregatedFieldWells: HistogramAggregatedFieldWellsFilterSensitiveLog(obj.HistogramAggregatedFieldWells),
  }),
});

/**
 * @internal
 */
export const HistogramConfigurationFilterSensitiveLog = (obj: HistogramConfiguration): any => ({
  ...obj,
  ...(obj.FieldWells && { FieldWells: HistogramFieldWellsFilterSensitiveLog(obj.FieldWells) }),
  ...(obj.DataLabels && { DataLabels: DataLabelOptionsFilterSensitiveLog(obj.DataLabels) }),
  ...(obj.VisualPalette && { VisualPalette: VisualPaletteFilterSensitiveLog(obj.VisualPalette) }),
});

/**
 * @internal
 */
export const HistogramVisualFilterSensitiveLog = (obj: HistogramVisual): any => ({
  ...obj,
  ...(obj.ChartConfiguration && {
    ChartConfiguration: HistogramConfigurationFilterSensitiveLog(obj.ChartConfiguration),
  }),
});

/**
 * @internal
 */
export const ForecastComputationFilterSensitiveLog = (obj: ForecastComputation): any => ({
  ...obj,
  ...(obj.Value && { Value: MeasureFieldFilterSensitiveLog(obj.Value) }),
});

/**
 * @internal
 */
export const GrowthRateComputationFilterSensitiveLog = (obj: GrowthRateComputation): any => ({
  ...obj,
  ...(obj.Value && { Value: MeasureFieldFilterSensitiveLog(obj.Value) }),
});

/**
 * @internal
 */
export const MaximumMinimumComputationFilterSensitiveLog = (obj: MaximumMinimumComputation): any => ({
  ...obj,
  ...(obj.Value && { Value: MeasureFieldFilterSensitiveLog(obj.Value) }),
});

/**
 * @internal
 */
export const MetricComparisonComputationFilterSensitiveLog = (obj: MetricComparisonComputation): any => ({
  ...obj,
  ...(obj.FromValue && { FromValue: MeasureFieldFilterSensitiveLog(obj.FromValue) }),
  ...(obj.TargetValue && { TargetValue: MeasureFieldFilterSensitiveLog(obj.TargetValue) }),
});

/**
 * @internal
 */
export const PeriodOverPeriodComputationFilterSensitiveLog = (obj: PeriodOverPeriodComputation): any => ({
  ...obj,
  ...(obj.Value && { Value: MeasureFieldFilterSensitiveLog(obj.Value) }),
});

/**
 * @internal
 */
export const PeriodToDateComputationFilterSensitiveLog = (obj: PeriodToDateComputation): any => ({
  ...obj,
  ...(obj.Value && { Value: MeasureFieldFilterSensitiveLog(obj.Value) }),
});

/**
 * @internal
 */
export const TopBottomMoversComputationFilterSensitiveLog = (obj: TopBottomMoversComputation): any => ({
  ...obj,
  ...(obj.Value && { Value: MeasureFieldFilterSensitiveLog(obj.Value) }),
});

/**
 * @internal
 */
export const TopBottomRankedComputationFilterSensitiveLog = (obj: TopBottomRankedComputation): any => ({
  ...obj,
  ...(obj.Value && { Value: MeasureFieldFilterSensitiveLog(obj.Value) }),
});

/**
 * @internal
 */
export const TotalAggregationComputationFilterSensitiveLog = (obj: TotalAggregationComputation): any => ({
  ...obj,
  ...(obj.Value && { Value: MeasureFieldFilterSensitiveLog(obj.Value) }),
});

/**
 * @internal
 */
export const UniqueValuesComputationFilterSensitiveLog = (obj: UniqueValuesComputation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ComputationFilterSensitiveLog = (obj: Computation): any => ({
  ...obj,
  ...(obj.TopBottomRanked && { TopBottomRanked: TopBottomRankedComputationFilterSensitiveLog(obj.TopBottomRanked) }),
  ...(obj.TopBottomMovers && { TopBottomMovers: TopBottomMoversComputationFilterSensitiveLog(obj.TopBottomMovers) }),
  ...(obj.TotalAggregation && {
    TotalAggregation: TotalAggregationComputationFilterSensitiveLog(obj.TotalAggregation),
  }),
  ...(obj.MaximumMinimum && { MaximumMinimum: MaximumMinimumComputationFilterSensitiveLog(obj.MaximumMinimum) }),
  ...(obj.MetricComparison && {
    MetricComparison: MetricComparisonComputationFilterSensitiveLog(obj.MetricComparison),
  }),
  ...(obj.PeriodOverPeriod && {
    PeriodOverPeriod: PeriodOverPeriodComputationFilterSensitiveLog(obj.PeriodOverPeriod),
  }),
  ...(obj.PeriodToDate && { PeriodToDate: PeriodToDateComputationFilterSensitiveLog(obj.PeriodToDate) }),
  ...(obj.GrowthRate && { GrowthRate: GrowthRateComputationFilterSensitiveLog(obj.GrowthRate) }),
  ...(obj.Forecast && { Forecast: ForecastComputationFilterSensitiveLog(obj.Forecast) }),
});

/**
 * @internal
 */
export const InsightConfigurationFilterSensitiveLog = (obj: InsightConfiguration): any => ({
  ...obj,
  ...(obj.Computations && { Computations: obj.Computations.map((item) => ComputationFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const InsightVisualFilterSensitiveLog = (obj: InsightVisual): any => ({
  ...obj,
  ...(obj.InsightConfiguration && {
    InsightConfiguration: InsightConfigurationFilterSensitiveLog(obj.InsightConfiguration),
  }),
});

/**
 * @internal
 */
export const KPIFieldWellsFilterSensitiveLog = (obj: KPIFieldWells): any => ({
  ...obj,
  ...(obj.Values && { Values: obj.Values.map((item) => MeasureFieldFilterSensitiveLog(item)) }),
  ...(obj.TargetValues && { TargetValues: obj.TargetValues.map((item) => MeasureFieldFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const KPIOptionsFilterSensitiveLog = (obj: KPIOptions): any => ({
  ...obj,
  ...(obj.Comparison && { Comparison: ComparisonConfigurationFilterSensitiveLog(obj.Comparison) }),
});

/**
 * @internal
 */
export const KPIConfigurationFilterSensitiveLog = (obj: KPIConfiguration): any => ({
  ...obj,
  ...(obj.FieldWells && { FieldWells: KPIFieldWellsFilterSensitiveLog(obj.FieldWells) }),
  ...(obj.KPIOptions && { KPIOptions: KPIOptionsFilterSensitiveLog(obj.KPIOptions) }),
});

/**
 * @internal
 */
export const KPIActualValueConditionalFormattingFilterSensitiveLog = (
  obj: KPIActualValueConditionalFormatting
): any => ({
  ...obj,
  ...(obj.TextColor && { TextColor: ConditionalFormattingColorFilterSensitiveLog(obj.TextColor) }),
  ...(obj.Icon && { Icon: ConditionalFormattingIconFilterSensitiveLog(obj.Icon) }),
});

/**
 * @internal
 */
export const KPIComparisonValueConditionalFormattingFilterSensitiveLog = (
  obj: KPIComparisonValueConditionalFormatting
): any => ({
  ...obj,
  ...(obj.TextColor && { TextColor: ConditionalFormattingColorFilterSensitiveLog(obj.TextColor) }),
  ...(obj.Icon && { Icon: ConditionalFormattingIconFilterSensitiveLog(obj.Icon) }),
});

/**
 * @internal
 */
export const KPIPrimaryValueConditionalFormattingFilterSensitiveLog = (
  obj: KPIPrimaryValueConditionalFormatting
): any => ({
  ...obj,
  ...(obj.TextColor && { TextColor: ConditionalFormattingColorFilterSensitiveLog(obj.TextColor) }),
  ...(obj.Icon && { Icon: ConditionalFormattingIconFilterSensitiveLog(obj.Icon) }),
});

/**
 * @internal
 */
export const KPIProgressBarConditionalFormattingFilterSensitiveLog = (
  obj: KPIProgressBarConditionalFormatting
): any => ({
  ...obj,
  ...(obj.ForegroundColor && { ForegroundColor: ConditionalFormattingColorFilterSensitiveLog(obj.ForegroundColor) }),
});

/**
 * @internal
 */
export const KPIConditionalFormattingOptionFilterSensitiveLog = (obj: KPIConditionalFormattingOption): any => ({
  ...obj,
  ...(obj.PrimaryValue && { PrimaryValue: KPIPrimaryValueConditionalFormattingFilterSensitiveLog(obj.PrimaryValue) }),
  ...(obj.ProgressBar && { ProgressBar: KPIProgressBarConditionalFormattingFilterSensitiveLog(obj.ProgressBar) }),
  ...(obj.ActualValue && { ActualValue: KPIActualValueConditionalFormattingFilterSensitiveLog(obj.ActualValue) }),
  ...(obj.ComparisonValue && {
    ComparisonValue: KPIComparisonValueConditionalFormattingFilterSensitiveLog(obj.ComparisonValue),
  }),
});

/**
 * @internal
 */
export const KPIConditionalFormattingFilterSensitiveLog = (obj: KPIConditionalFormatting): any => ({
  ...obj,
  ...(obj.ConditionalFormattingOptions && {
    ConditionalFormattingOptions: obj.ConditionalFormattingOptions.map((item) =>
      KPIConditionalFormattingOptionFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const KPIVisualFilterSensitiveLog = (obj: KPIVisual): any => ({
  ...obj,
  ...(obj.ChartConfiguration && { ChartConfiguration: KPIConfigurationFilterSensitiveLog(obj.ChartConfiguration) }),
  ...(obj.ConditionalFormatting && {
    ConditionalFormatting: KPIConditionalFormattingFilterSensitiveLog(obj.ConditionalFormatting),
  }),
});

/**
 * @internal
 */
export const LineChartAggregatedFieldWellsFilterSensitiveLog = (obj: LineChartAggregatedFieldWells): any => ({
  ...obj,
  ...(obj.Values && { Values: obj.Values.map((item) => MeasureFieldFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const LineChartFieldWellsFilterSensitiveLog = (obj: LineChartFieldWells): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataFieldSeriesItemFilterSensitiveLog = (obj: DataFieldSeriesItem): any => ({
  ...obj,
  ...(obj.FieldValue && { FieldValue: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SeriesItemFilterSensitiveLog = (obj: SeriesItem): any => ({
  ...obj,
  ...(obj.DataFieldSeriesItem && {
    DataFieldSeriesItem: DataFieldSeriesItemFilterSensitiveLog(obj.DataFieldSeriesItem),
  }),
});

/**
 * @internal
 */
export const LineChartConfigurationFilterSensitiveLog = (obj: LineChartConfiguration): any => ({
  ...obj,
  ...(obj.Series && { Series: obj.Series.map((item) => SeriesItemFilterSensitiveLog(item)) }),
  ...(obj.DataLabels && { DataLabels: DataLabelOptionsFilterSensitiveLog(obj.DataLabels) }),
  ...(obj.ReferenceLines && {
    ReferenceLines: obj.ReferenceLines.map((item) => ReferenceLineFilterSensitiveLog(item)),
  }),
  ...(obj.VisualPalette && { VisualPalette: VisualPaletteFilterSensitiveLog(obj.VisualPalette) }),
});

/**
 * @internal
 */
export const LineChartVisualFilterSensitiveLog = (obj: LineChartVisual): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PieChartAggregatedFieldWellsFilterSensitiveLog = (obj: PieChartAggregatedFieldWells): any => ({
  ...obj,
  ...(obj.Values && { Values: obj.Values.map((item) => MeasureFieldFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const PieChartFieldWellsFilterSensitiveLog = (obj: PieChartFieldWells): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PieChartConfigurationFilterSensitiveLog = (obj: PieChartConfiguration): any => ({
  ...obj,
  ...(obj.DataLabels && { DataLabels: DataLabelOptionsFilterSensitiveLog(obj.DataLabels) }),
  ...(obj.VisualPalette && { VisualPalette: VisualPaletteFilterSensitiveLog(obj.VisualPalette) }),
});

/**
 * @internal
 */
export const PieChartVisualFilterSensitiveLog = (obj: PieChartVisual): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PivotTableFieldCollapseStateTargetFilterSensitiveLog = (obj: PivotTableFieldCollapseStateTarget): any => ({
  ...obj,
  ...(obj.FieldDataPathValues && {
    FieldDataPathValues: obj.FieldDataPathValues.map((item) => DataPathValueFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const PivotTableFieldCollapseStateOptionFilterSensitiveLog = (obj: PivotTableFieldCollapseStateOption): any => ({
  ...obj,
  ...(obj.Target && { Target: PivotTableFieldCollapseStateTargetFilterSensitiveLog(obj.Target) }),
});

/**
 * @internal
 */
export const PivotTableDataPathOptionFilterSensitiveLog = (obj: PivotTableDataPathOption): any => ({
  ...obj,
  ...(obj.DataPathList && { DataPathList: obj.DataPathList.map((item) => DataPathValueFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const PivotTableFieldOptionsFilterSensitiveLog = (obj: PivotTableFieldOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PivotTableAggregatedFieldWellsFilterSensitiveLog = (obj: PivotTableAggregatedFieldWells): any => ({
  ...obj,
  ...(obj.Values && { Values: obj.Values.map((item) => MeasureFieldFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const PivotTableFieldWellsFilterSensitiveLog = (obj: PivotTableFieldWells): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataPathSortFilterSensitiveLog = (obj: DataPathSort): any => ({
  ...obj,
  ...(obj.SortPaths && { SortPaths: obj.SortPaths.map((item) => DataPathValueFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const PivotTableSortByFilterSensitiveLog = (obj: PivotTableSortBy): any => ({
  ...obj,
  ...(obj.DataPath && { DataPath: DataPathSortFilterSensitiveLog(obj.DataPath) }),
});

/**
 * @internal
 */
export const PivotFieldSortOptionsFilterSensitiveLog = (obj: PivotFieldSortOptions): any => ({
  ...obj,
  ...(obj.SortBy && { SortBy: PivotTableSortByFilterSensitiveLog(obj.SortBy) }),
});

/**
 * @internal
 */
export const PivotTableSortConfigurationFilterSensitiveLog = (obj: PivotTableSortConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PivotTableConfigurationFilterSensitiveLog = (obj: PivotTableConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TextConditionalFormatFilterSensitiveLog = (obj: TextConditionalFormat): any => ({
  ...obj,
  ...(obj.BackgroundColor && { BackgroundColor: ConditionalFormattingColorFilterSensitiveLog(obj.BackgroundColor) }),
  ...(obj.TextColor && { TextColor: ConditionalFormattingColorFilterSensitiveLog(obj.TextColor) }),
  ...(obj.Icon && { Icon: ConditionalFormattingIconFilterSensitiveLog(obj.Icon) }),
});

/**
 * @internal
 */
export const PivotTableCellConditionalFormattingFilterSensitiveLog = (
  obj: PivotTableCellConditionalFormatting
): any => ({
  ...obj,
  ...(obj.TextFormat && { TextFormat: TextConditionalFormatFilterSensitiveLog(obj.TextFormat) }),
});

/**
 * @internal
 */
export const PivotTableConditionalFormattingOptionFilterSensitiveLog = (
  obj: PivotTableConditionalFormattingOption
): any => ({
  ...obj,
  ...(obj.Cell && { Cell: PivotTableCellConditionalFormattingFilterSensitiveLog(obj.Cell) }),
});

/**
 * @internal
 */
export const PivotTableConditionalFormattingFilterSensitiveLog = (obj: PivotTableConditionalFormatting): any => ({
  ...obj,
  ...(obj.ConditionalFormattingOptions && {
    ConditionalFormattingOptions: obj.ConditionalFormattingOptions.map((item) =>
      PivotTableConditionalFormattingOptionFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const PivotTableVisualFilterSensitiveLog = (obj: PivotTableVisual): any => ({
  ...obj,
  ...(obj.ConditionalFormatting && {
    ConditionalFormatting: PivotTableConditionalFormattingFilterSensitiveLog(obj.ConditionalFormatting),
  }),
});

/**
 * @internal
 */
export const RadarChartAggregatedFieldWellsFilterSensitiveLog = (obj: RadarChartAggregatedFieldWells): any => ({
  ...obj,
  ...(obj.Values && { Values: obj.Values.map((item) => MeasureFieldFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const RadarChartFieldWellsFilterSensitiveLog = (obj: RadarChartFieldWells): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RadarChartConfigurationFilterSensitiveLog = (obj: RadarChartConfiguration): any => ({
  ...obj,
  ...(obj.VisualPalette && { VisualPalette: VisualPaletteFilterSensitiveLog(obj.VisualPalette) }),
});

/**
 * @internal
 */
export const RadarChartVisualFilterSensitiveLog = (obj: RadarChartVisual): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SankeyDiagramAggregatedFieldWellsFilterSensitiveLog = (obj: SankeyDiagramAggregatedFieldWells): any => ({
  ...obj,
  ...(obj.Weight && { Weight: obj.Weight.map((item) => MeasureFieldFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const SankeyDiagramFieldWellsFilterSensitiveLog = (obj: SankeyDiagramFieldWells): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SankeyDiagramChartConfigurationFilterSensitiveLog = (obj: SankeyDiagramChartConfiguration): any => ({
  ...obj,
  ...(obj.DataLabels && { DataLabels: DataLabelOptionsFilterSensitiveLog(obj.DataLabels) }),
});

/**
 * @internal
 */
export const SankeyDiagramVisualFilterSensitiveLog = (obj: SankeyDiagramVisual): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScatterPlotCategoricallyAggregatedFieldWellsFilterSensitiveLog = (
  obj: ScatterPlotCategoricallyAggregatedFieldWells
): any => ({
  ...obj,
  ...(obj.XAxis && { XAxis: obj.XAxis.map((item) => MeasureFieldFilterSensitiveLog(item)) }),
  ...(obj.YAxis && { YAxis: obj.YAxis.map((item) => MeasureFieldFilterSensitiveLog(item)) }),
  ...(obj.Size && { Size: obj.Size.map((item) => MeasureFieldFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ScatterPlotUnaggregatedFieldWellsFilterSensitiveLog = (obj: ScatterPlotUnaggregatedFieldWells): any => ({
  ...obj,
  ...(obj.Size && { Size: obj.Size.map((item) => MeasureFieldFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ScatterPlotFieldWellsFilterSensitiveLog = (obj: ScatterPlotFieldWells): any => ({
  ...obj,
  ...(obj.ScatterPlotCategoricallyAggregatedFieldWells && {
    ScatterPlotCategoricallyAggregatedFieldWells: ScatterPlotCategoricallyAggregatedFieldWellsFilterSensitiveLog(
      obj.ScatterPlotCategoricallyAggregatedFieldWells
    ),
  }),
});

/**
 * @internal
 */
export const ScatterPlotConfigurationFilterSensitiveLog = (obj: ScatterPlotConfiguration): any => ({
  ...obj,
  ...(obj.FieldWells && { FieldWells: ScatterPlotFieldWellsFilterSensitiveLog(obj.FieldWells) }),
  ...(obj.DataLabels && { DataLabels: DataLabelOptionsFilterSensitiveLog(obj.DataLabels) }),
  ...(obj.VisualPalette && { VisualPalette: VisualPaletteFilterSensitiveLog(obj.VisualPalette) }),
});

/**
 * @internal
 */
export const ScatterPlotVisualFilterSensitiveLog = (obj: ScatterPlotVisual): any => ({
  ...obj,
  ...(obj.ChartConfiguration && {
    ChartConfiguration: ScatterPlotConfigurationFilterSensitiveLog(obj.ChartConfiguration),
  }),
});

/**
 * @internal
 */
export const TableAggregatedFieldWellsFilterSensitiveLog = (obj: TableAggregatedFieldWells): any => ({
  ...obj,
  ...(obj.Values && { Values: obj.Values.map((item) => MeasureFieldFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UnaggregatedFieldFilterSensitiveLog = (obj: UnaggregatedField): any => ({
  ...obj,
  ...(obj.FormatConfiguration && {
    FormatConfiguration: FormatConfigurationFilterSensitiveLog(obj.FormatConfiguration),
  }),
});

/**
 * @internal
 */
export const TableUnaggregatedFieldWellsFilterSensitiveLog = (obj: TableUnaggregatedFieldWells): any => ({
  ...obj,
  ...(obj.Values && { Values: obj.Values.map((item) => UnaggregatedFieldFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const TableFieldWellsFilterSensitiveLog = (obj: TableFieldWells): any => ({
  ...obj,
  ...(obj.TableUnaggregatedFieldWells && {
    TableUnaggregatedFieldWells: TableUnaggregatedFieldWellsFilterSensitiveLog(obj.TableUnaggregatedFieldWells),
  }),
});

/**
 * @internal
 */
export const TableConfigurationFilterSensitiveLog = (obj: TableConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TableCellConditionalFormattingFilterSensitiveLog = (obj: TableCellConditionalFormatting): any => ({
  ...obj,
  ...(obj.TextFormat && { TextFormat: TextConditionalFormatFilterSensitiveLog(obj.TextFormat) }),
});

/**
 * @internal
 */
export const TableRowConditionalFormattingFilterSensitiveLog = (obj: TableRowConditionalFormatting): any => ({
  ...obj,
  ...(obj.BackgroundColor && { BackgroundColor: ConditionalFormattingColorFilterSensitiveLog(obj.BackgroundColor) }),
  ...(obj.TextColor && { TextColor: ConditionalFormattingColorFilterSensitiveLog(obj.TextColor) }),
});

/**
 * @internal
 */
export const TableConditionalFormattingOptionFilterSensitiveLog = (obj: TableConditionalFormattingOption): any => ({
  ...obj,
  ...(obj.Cell && { Cell: TableCellConditionalFormattingFilterSensitiveLog(obj.Cell) }),
  ...(obj.Row && { Row: TableRowConditionalFormattingFilterSensitiveLog(obj.Row) }),
});

/**
 * @internal
 */
export const TableConditionalFormattingFilterSensitiveLog = (obj: TableConditionalFormatting): any => ({
  ...obj,
  ...(obj.ConditionalFormattingOptions && {
    ConditionalFormattingOptions: obj.ConditionalFormattingOptions.map((item) =>
      TableConditionalFormattingOptionFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const TableVisualFilterSensitiveLog = (obj: TableVisual): any => ({
  ...obj,
  ...(obj.ConditionalFormatting && {
    ConditionalFormatting: TableConditionalFormattingFilterSensitiveLog(obj.ConditionalFormatting),
  }),
});

/**
 * @internal
 */
export const TreeMapAggregatedFieldWellsFilterSensitiveLog = (obj: TreeMapAggregatedFieldWells): any => ({
  ...obj,
  ...(obj.Sizes && { Sizes: obj.Sizes.map((item) => MeasureFieldFilterSensitiveLog(item)) }),
  ...(obj.Colors && { Colors: obj.Colors.map((item) => MeasureFieldFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const TreeMapFieldWellsFilterSensitiveLog = (obj: TreeMapFieldWells): any => ({
  ...obj,
});
