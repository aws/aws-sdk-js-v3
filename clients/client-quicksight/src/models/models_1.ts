// smithy-typescript generated code
import {
  AggregationFunction,
  AxisDisplayOptions,
  BarChartFieldWells,
  BarsArrangement,
  ChartAxisLabelOptions,
  ColumnIdentifier,
  ColumnSort,
  ContributionAnalysisDefault,
  CustomActionFilterOperation,
  CustomActionNavigationOperation,
  CustomActionSetParametersOperation,
  CustomActionURLOperation,
  DataLabelOptions,
  DataLabelPosition,
  DimensionField,
  FontConfiguration,
  FormatConfiguration,
  LabelOptions,
  MeasureField,
  NumberDisplayFormatConfiguration,
  NumericalAggregationFunction,
  NumericFormatConfiguration,
  PercentageDisplayFormatConfiguration,
  SortDirection,
  TimeGranularity,
  Visibility,
  VisualCustomAction,
  VisualInteractionOptions,
  WidgetStatus,
} from "./models_0";

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
  Visibility?: Visibility | undefined;

  /**
   * <p>The custom title for the legend.</p>
   * @public
   */
  Title?: LabelOptions | undefined;

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
  Position?: LegendPosition | undefined;

  /**
   * <p>The width of the legend. If this value is omitted, a default width is used when rendering.</p>
   * @public
   */
  Width?: string | undefined;

  /**
   * <p>The height of the legend. If this value is omitted, a default height is used when
   *             rendering.</p>
   * @public
   */
  Height?: string | undefined;

  /**
   * <p>Configures the display properties of the given text.</p>
   * @public
   */
  ValueFontConfiguration?: FontConfiguration | undefined;
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
  MeasureAggregationFunction?: AggregationFunction | undefined;

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
  StaticConfiguration?: ReferenceLineStaticDataConfiguration | undefined;

  /**
   * <p>The dynamic configuration of the reference line data configuration.</p>
   * @public
   */
  DynamicConfiguration?: ReferenceLineDynamicDataConfiguration | undefined;

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
  AxisBinding?: AxisBinding | undefined;

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
  SeriesType?: ReferenceLineSeriesType | undefined;
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
  RelativePosition?: ReferenceLineValueLabelRelativePosition | undefined;

  /**
   * <p>The format configuration of the value label.</p>
   * @public
   */
  FormatConfiguration?: NumericFormatConfiguration | undefined;
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
  ValueLabelConfiguration?: ReferenceLineValueLabelConfiguration | undefined;

  /**
   * <p>The custom label configuration of the label in a reference line.</p>
   * @public
   */
  CustomLabelConfiguration?: ReferenceLineCustomLabelConfiguration | undefined;

  /**
   * <p>The font configuration of the label in a reference line.</p>
   * @public
   */
  FontConfiguration?: FontConfiguration | undefined;

  /**
   * <p>The font color configuration of the label in a reference line.</p>
   * @public
   */
  FontColor?: string | undefined;

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
  HorizontalPosition?: ReferenceLineLabelHorizontalPosition | undefined;

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
  VerticalPosition?: ReferenceLineLabelVerticalPosition | undefined;
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
  Pattern?: ReferenceLinePatternType | undefined;

  /**
   * <p>The hex color of the reference line.</p>
   * @public
   */
  Color?: string | undefined;
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
  Status?: WidgetStatus | undefined;

  /**
   * <p>The data configuration of the reference line.</p>
   * @public
   */
  DataConfiguration: ReferenceLineDataConfiguration | undefined;

  /**
   * <p>The style configuration of the reference line.</p>
   * @public
   */
  StyleConfiguration?: ReferenceLineStyleConfiguration | undefined;

  /**
   * <p>The label configuration of the reference line.</p>
   * @public
   */
  LabelConfiguration?: ReferenceLineLabelConfiguration | undefined;
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
  Visibility?: Visibility | undefined;

  /**
   * <p>Configures the display properties of the given text.</p>
   * @public
   */
  FontConfiguration?: FontConfiguration | undefined;

  /**
   * <p>Sets the horizontal text alignment of the title within each panel.</p>
   * @public
   */
  HorizontalTextAlignment?: HorizontalTextAlignment | undefined;
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
  Title?: PanelTitleOptions | undefined;

  /**
   * <p>Determines whether or not each panel displays a border.</p>
   * @public
   */
  BorderVisibility?: Visibility | undefined;

  /**
   * <p>Sets the line thickness of panel borders.</p>
   * @public
   */
  BorderThickness?: string | undefined;

  /**
   * <p>Sets the line style of panel borders.</p>
   * @public
   */
  BorderStyle?: PanelBorderStyle | undefined;

  /**
   * <p>Sets the line color of panel borders.</p>
   * @public
   */
  BorderColor?: string | undefined;

  /**
   * <p>Determines whether or not negative space between sibling panels is rendered.</p>
   * @public
   */
  GutterVisibility?: Visibility | undefined;

  /**
   * <p>Sets the total amount of negative space to display between sibling panels.</p>
   * @public
   */
  GutterSpacing?: string | undefined;

  /**
   * <p>Determines whether or not a background for each small multiples panel is rendered.</p>
   * @public
   */
  BackgroundVisibility?: Visibility | undefined;

  /**
   * <p>Sets the background color for each panel.</p>
   * @public
   */
  BackgroundColor?: string | undefined;
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
  Scale?: SmallMultiplesAxisScale | undefined;

  /**
   * <p>Defines the placement of the axis. By default, axes are rendered <code>OUTSIDE</code> of the panels. Axes with <code>INDEPENDENT</code> scale are rendered <code>INSIDE</code> the panels.</p>
   * @public
   */
  Placement?: SmallMultiplesAxisPlacement | undefined;
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
  MaxVisibleRows?: number | undefined;

  /**
   * <p>Sets the maximum number of visible columns to display in the grid of small multiples panels.</p>
   *          <p>The default is <code>Auto</code>, which automatically adjusts the columns in the grid to fit the overall layout and size of the given chart.</p>
   * @public
   */
  MaxVisibleColumns?: number | undefined;

  /**
   * <p>Configures the display options for each small multiples panel.</p>
   * @public
   */
  PanelConfiguration?: PanelConfiguration | undefined;

  /**
   * <p>The properties of a small multiples X axis.</p>
   * @public
   */
  XAxis?: SmallMultiplesAxisProperties | undefined;

  /**
   * <p>The properties of a small multiples Y axis.</p>
   * @public
   */
  YAxis?: SmallMultiplesAxisProperties | undefined;
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
  ItemsLimit?: number | undefined;

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
  OtherCategories?: OtherCategories | undefined;
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
  FieldSort?: FieldSort | undefined;

  /**
   * <p>The sort configuration for a column that is not used in a field well.</p>
   * @public
   */
  ColumnSort?: ColumnSort | undefined;
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
  CategorySort?: FieldSortOptions[] | undefined;

  /**
   * <p>The limit on the number of categories displayed in a bar chart.</p>
   * @public
   */
  CategoryItemsLimit?: ItemsLimitConfiguration | undefined;

  /**
   * <p>The sort configuration of color fields in a bar chart.</p>
   * @public
   */
  ColorSort?: FieldSortOptions[] | undefined;

  /**
   * <p>The limit on the number of values displayed in a bar chart.</p>
   * @public
   */
  ColorItemsLimit?: ItemsLimitConfiguration | undefined;

  /**
   * <p>The sort configuration of the small multiples field.</p>
   * @public
   */
  SmallMultiplesSort?: FieldSortOptions[] | undefined;

  /**
   * <p>The limit on the number of small multiples panels that are displayed.</p>
   * @public
   */
  SmallMultiplesLimitConfiguration?: ItemsLimitConfiguration | undefined;
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
  Label?: string | undefined;

  /**
   * <p>The visibility of the tooltip item.</p>
   * @public
   */
  Visibility?: Visibility | undefined;

  /**
   * <p>The aggregation function of the column tooltip item.</p>
   * @public
   */
  Aggregation?: AggregationFunction | undefined;

  /**
   * <p>Determines the target of the column tooltip item in a combo chart visual.</p>
   * @public
   */
  TooltipTarget?: TooltipTarget | undefined;
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
  Label?: string | undefined;

  /**
   * <p>The visibility of the tooltip item.</p>
   * @public
   */
  Visibility?: Visibility | undefined;

  /**
   * <p>Determines the target of the field tooltip item in a combo chart visual.</p>
   * @public
   */
  TooltipTarget?: TooltipTarget | undefined;
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
  FieldTooltipItem?: FieldTooltipItem | undefined;

  /**
   * <p>The tooltip item for the columns that are not part of a field well.</p>
   * @public
   */
  ColumnTooltipItem?: ColumnTooltipItem | undefined;
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
  AggregationVisibility?: Visibility | undefined;

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
  TooltipTitleType?: TooltipTitleType | undefined;

  /**
   * <p>The fields configuration in the
   *             tooltip.</p>
   * @public
   */
  TooltipFields?: TooltipItem[] | undefined;
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
  TooltipVisibility?: Visibility | undefined;

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
  SelectedTooltipType?: SelectedTooltipType | undefined;

  /**
   * <p>The setup for the detailed tooltip. The tooltip setup is always saved. The display type is decided based on the tooltip type.</p>
   * @public
   */
  FieldBasedTooltip?: FieldBasedTooltip | undefined;
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
  PivotTableDataPathType?: PivotTableDataPathType | undefined;
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
  FieldId?: string | undefined;

  /**
   * <p>The actual value of the field that needs to be sorted.</p>
   * @public
   */
  FieldValue?: string | undefined;

  /**
   * <p>The type configuration of the field.</p>
   * @public
   */
  DataPathType?: DataPathType | undefined;
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
  TimeGranularity?: TimeGranularity | undefined;
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
  ChartColor?: string | undefined;

  /**
   * <p>The color map options for the visual palette.</p>
   * @public
   */
  ColorMap?: DataPathColor[] | undefined;
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
  FieldWells?: BarChartFieldWells | undefined;

  /**
   * <p>The sort configuration of a <code>BarChartVisual</code>.</p>
   * @public
   */
  SortConfiguration?: BarChartSortConfiguration | undefined;

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
  Orientation?: BarChartOrientation | undefined;

  /**
   * <p>Determines the arrangement of the bars. The orientation and arrangement of bars determine the type of bar that is used in the visual.</p>
   * @public
   */
  BarsArrangement?: BarsArrangement | undefined;

  /**
   * <p>The palette (chart color) display setup of the visual.</p>
   * @public
   */
  VisualPalette?: VisualPalette | undefined;

  /**
   * <p>The small multiples setup for the visual.</p>
   * @public
   */
  SmallMultiplesOptions?: SmallMultiplesOptions | undefined;

  /**
   * <p>The label display options (grid line, range, scale, axis step) for bar chart category.</p>
   * @public
   */
  CategoryAxis?: AxisDisplayOptions | undefined;

  /**
   * <p>The label options (label text, label visibility and sort icon visibility) for a bar chart.</p>
   * @public
   */
  CategoryLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * <p>The label display options (grid line, range, scale, axis step) for a bar chart value.</p>
   * @public
   */
  ValueAxis?: AxisDisplayOptions | undefined;

  /**
   * <p>The label options (label text, label visibility and sort icon visibility) for a bar chart value.</p>
   * @public
   */
  ValueLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * <p>The label options (label text, label visibility and sort icon visibility) for a color that is used in a bar chart.</p>
   * @public
   */
  ColorLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * <p>The legend display setup of the visual.</p>
   * @public
   */
  Legend?: LegendOptions | undefined;

  /**
   * <p>The options that determine if visual data labels are displayed.</p>
   * @public
   */
  DataLabels?: DataLabelOptions | undefined;

  /**
   * <p>The tooltip display setup of the visual.</p>
   * @public
   */
  Tooltip?: TooltipOptions | undefined;

  /**
   * <p>The reference line setup of the visual.</p>
   * @public
   */
  ReferenceLines?: ReferenceLine[] | undefined;

  /**
   * <p>The contribution analysis (anomaly configuration) setup of the visual.</p>
   * @public
   */
  ContributionAnalysisDefaults?: ContributionAnalysisDefault[] | undefined;

  /**
   * <p>The general visual interactions setup for a visual.</p>
   * @public
   */
  Interactions?: VisualInteractionOptions | undefined;
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
  NumericEqualityFilter?: NumericEqualityDrillDownFilter | undefined;

  /**
   * <p>The category type drill down filter. This filter is used for string type columns.</p>
   * @public
   */
  CategoryFilter?: CategoryDrillDownFilter | undefined;

  /**
   * <p>The time range drill down filter. This filter is used for date time columns.</p>
   * @public
   */
  TimeRangeFilter?: TimeRangeDrillDownFilter | undefined;
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
  DrillDownFilters?: DrillDownFilter[] | undefined;
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
  DrillDownFilters?: DrillDownFilter[] | undefined;
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
  DrillDownFilters?: DrillDownFilter[] | undefined;
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
  ExplicitHierarchy?: ExplicitHierarchy | undefined;

  /**
   * <p>The option that determines the hierarchy of any <code>DateTime</code> fields.</p>
   * @public
   */
  DateTimeHierarchy?: DateTimeHierarchy | undefined;

  /**
   * <p>The option that determines the hierarchy of the fields that are defined during data preparation. These fields are available to use in any analysis that uses the data source.</p>
   * @public
   */
  PredefinedHierarchy?: PredefinedHierarchy | undefined;
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
  PlainText?: string | undefined;

  /**
   * <p>Rich text. Examples of rich text include bold, underline, and italics.</p>
   * @public
   */
  RichText?: string | undefined;
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
  Visibility?: Visibility | undefined;

  /**
   * <p>The long text format of the subtitle label, such as plain text or rich text.</p>
   * @public
   */
  FormatText?: LongFormatText | undefined;
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
  PlainText?: string | undefined;

  /**
   * <p>Rich text. Examples of rich text include bold, underline, and italics.</p>
   * @public
   */
  RichText?: string | undefined;
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
  Visibility?: Visibility | undefined;

  /**
   * <p>The short text format of the title label, such as plain text or rich text.</p>
   * @public
   */
  FormatText?: ShortFormatText | undefined;
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
  Title?: VisualTitleLabelOptions | undefined;

  /**
   * <p>The subtitle that is displayed on the visual.</p>
   * @public
   */
  Subtitle?: VisualSubtitleLabelOptions | undefined;

  /**
   * <p>The configuration settings of the visual.</p>
   * @public
   */
  ChartConfiguration?: BarChartConfiguration | undefined;

  /**
   * <p>The list of custom actions that are configured for a visual.</p>
   * @public
   */
  Actions?: VisualCustomAction[] | undefined;

  /**
   * <p>The column hierarchy that is used during drill-downs and drill-ups.</p>
   * @public
   */
  ColumnHierarchies?: ColumnHierarchy[] | undefined;

  /**
   * <p>The alt text for the visual.</p>
   * @public
   */
  VisualContentAltText?: string | undefined;
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
  FillStyle?: BoxPlotFillStyle | undefined;
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
  StyleOptions?: BoxPlotStyleOptions | undefined;

  /**
   * <p>Determines the visibility of the outlier in a box plot.</p>
   * @public
   */
  OutlierVisibility?: Visibility | undefined;

  /**
   * <p>Determines the visibility of all data points of the box plot.</p>
   * @public
   */
  AllDataPointsVisibility?: Visibility | undefined;
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
  GroupBy?: DimensionField[] | undefined;

  /**
   * <p>The value field well of a box plot chart. Values are aggregated based on group by fields.</p>
   * @public
   */
  Values?: MeasureField[] | undefined;
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
  BoxPlotAggregatedFieldWells?: BoxPlotAggregatedFieldWells | undefined;
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
  CategorySort?: FieldSortOptions[] | undefined;

  /**
   * <p>The pagination configuration of a table visual or box plot.</p>
   * @public
   */
  PaginationConfiguration?: PaginationConfiguration | undefined;
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
  FieldWells?: BoxPlotFieldWells | undefined;

  /**
   * <p>The sort configuration of a <code>BoxPlotVisual</code>.</p>
   * @public
   */
  SortConfiguration?: BoxPlotSortConfiguration | undefined;

  /**
   * <p>The box plot chart options for a box plot visual</p>
   * @public
   */
  BoxPlotOptions?: BoxPlotOptions | undefined;

  /**
   * <p>The label display options (grid line, range, scale, axis step) of a box plot category.</p>
   * @public
   */
  CategoryAxis?: AxisDisplayOptions | undefined;

  /**
   * <p>The label options (label text, label visibility and sort Icon visibility) of a box plot category.</p>
   * @public
   */
  CategoryLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * <p>The label display options (grid line, range, scale, axis step) of a box plot category.</p>
   * @public
   */
  PrimaryYAxisDisplayOptions?: AxisDisplayOptions | undefined;

  /**
   * <p>The label options (label text, label visibility and sort icon visibility) of a box plot value.</p>
   * @public
   */
  PrimaryYAxisLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * <p>The options for the legend setup of a visual.</p>
   * @public
   */
  Legend?: LegendOptions | undefined;

  /**
   * <p>The tooltip display setup of the visual.</p>
   * @public
   */
  Tooltip?: TooltipOptions | undefined;

  /**
   * <p>The reference line setup of the visual.</p>
   * @public
   */
  ReferenceLines?: ReferenceLine[] | undefined;

  /**
   * <p>The palette (chart color) display setup of the visual.</p>
   * @public
   */
  VisualPalette?: VisualPalette | undefined;

  /**
   * <p>The general visual interactions setup for a visual.</p>
   * @public
   */
  Interactions?: VisualInteractionOptions | undefined;
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
  Title?: VisualTitleLabelOptions | undefined;

  /**
   * <p>The subtitle that is displayed on the visual.</p>
   * @public
   */
  Subtitle?: VisualSubtitleLabelOptions | undefined;

  /**
   * <p>The configuration settings of the visual.</p>
   * @public
   */
  ChartConfiguration?: BoxPlotChartConfiguration | undefined;

  /**
   * <p>The list of custom actions that are configured for a visual.</p>
   * @public
   */
  Actions?: VisualCustomAction[] | undefined;

  /**
   * <p>The column hierarchy that is used during drill-downs and drill-ups.</p>
   * @public
   */
  ColumnHierarchies?: ColumnHierarchy[] | undefined;

  /**
   * <p>The alt text for the visual.</p>
   * @public
   */
  VisualContentAltText?: string | undefined;
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
  Category?: DimensionField[] | undefined;

  /**
   * <p>The aggregated <code>BarValues</code> field well of a combo chart.</p>
   * @public
   */
  BarValues?: MeasureField[] | undefined;

  /**
   * <p>The aggregated colors field well of a combo chart.</p>
   * @public
   */
  Colors?: DimensionField[] | undefined;

  /**
   * <p>The aggregated <code>LineValues</code> field well of a combo chart.</p>
   * @public
   */
  LineValues?: MeasureField[] | undefined;
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
  ComboChartAggregatedFieldWells?: ComboChartAggregatedFieldWells | undefined;
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
  YAxisOptions?: YAxisOptions | undefined;
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
  CategorySort?: FieldSortOptions[] | undefined;

  /**
   * <p>The item limit configuration for the category field well of a combo chart.</p>
   * @public
   */
  CategoryItemsLimit?: ItemsLimitConfiguration | undefined;

  /**
   * <p>The sort configuration of the color field well in a combo chart.</p>
   * @public
   */
  ColorSort?: FieldSortOptions[] | undefined;

  /**
   * <p>The item limit configuration of the color field well in a combo chart.</p>
   * @public
   */
  ColorItemsLimit?: ItemsLimitConfiguration | undefined;
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
  FieldWells?: ComboChartFieldWells | undefined;

  /**
   * <p>The sort configuration of a <code>ComboChartVisual</code>.</p>
   * @public
   */
  SortConfiguration?: ComboChartSortConfiguration | undefined;

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
  BarsArrangement?: BarsArrangement | undefined;

  /**
   * <p>The category axis of a combo chart.</p>
   * @public
   */
  CategoryAxis?: AxisDisplayOptions | undefined;

  /**
   * <p>The label options (label text, label visibility, and sort icon visibility) of a combo chart category (group/color) field well.</p>
   * @public
   */
  CategoryLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * <p>The label display options (grid line, range, scale, and axis step) of a combo chart's primary y-axis (bar) field well.</p>
   * @public
   */
  PrimaryYAxisDisplayOptions?: AxisDisplayOptions | undefined;

  /**
   * <p>The label options (label text, label visibility, and sort icon visibility) of a combo chart's primary y-axis (bar) field well.</p>
   * @public
   */
  PrimaryYAxisLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * <p>The label display options (grid line, range, scale, axis step) of a combo chart's secondary y-axis (line) field well.</p>
   * @public
   */
  SecondaryYAxisDisplayOptions?: AxisDisplayOptions | undefined;

  /**
   * <p>The label options (label text, label visibility, and sort icon visibility) of a combo chart's secondary y-axis(line) field well.</p>
   * @public
   */
  SecondaryYAxisLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * <p>The settings of a chart's single axis configuration.</p>
   * @public
   */
  SingleAxisOptions?: SingleAxisOptions | undefined;

  /**
   * <p>The label options (label text, label visibility, and sort icon visibility) of a combo chart's color field well.</p>
   * @public
   */
  ColorLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * <p>The legend display setup of the visual.</p>
   * @public
   */
  Legend?: LegendOptions | undefined;

  /**
   * <p>The options that determine if visual data labels are displayed.</p>
   *          <p>The data label options for a bar in a combo chart.</p>
   * @public
   */
  BarDataLabels?: DataLabelOptions | undefined;

  /**
   * <p>The options that determine if visual data labels are displayed.</p>
   *          <p>The data label options for a line in a combo chart.</p>
   * @public
   */
  LineDataLabels?: DataLabelOptions | undefined;

  /**
   * <p>The legend display setup of the visual.</p>
   * @public
   */
  Tooltip?: TooltipOptions | undefined;

  /**
   * <p>The reference line setup of the visual.</p>
   * @public
   */
  ReferenceLines?: ReferenceLine[] | undefined;

  /**
   * <p>The palette (chart color) display setup of the visual.</p>
   * @public
   */
  VisualPalette?: VisualPalette | undefined;

  /**
   * <p>The general visual interactions setup for a visual.</p>
   * @public
   */
  Interactions?: VisualInteractionOptions | undefined;
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
  Title?: VisualTitleLabelOptions | undefined;

  /**
   * <p>The subtitle that is displayed on the visual.</p>
   * @public
   */
  Subtitle?: VisualSubtitleLabelOptions | undefined;

  /**
   * <p>The configuration settings of the visual.</p>
   * @public
   */
  ChartConfiguration?: ComboChartConfiguration | undefined;

  /**
   * <p>The list of custom actions that are configured for a visual.</p>
   * @public
   */
  Actions?: VisualCustomAction[] | undefined;

  /**
   * <p>The column hierarchy that is used during drill-downs and drill-ups.</p>
   * @public
   */
  ColumnHierarchies?: ColumnHierarchy[] | undefined;

  /**
   * <p>The alt text for the visual.</p>
   * @public
   */
  VisualContentAltText?: string | undefined;
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
  ContentUrl?: string | undefined;

  /**
   * <p>The content type of the custom content visual. You can use this to have the visual render as an image.</p>
   * @public
   */
  ContentType?: CustomContentType | undefined;

  /**
   * <p>The sizing options for the size of the custom content visual. This structure is required when the <code>ContentType</code> of the visual is <code>'IMAGE'</code>.</p>
   * @public
   */
  ImageScaling?: CustomContentImageScalingConfiguration | undefined;

  /**
   * <p>The general visual interactions setup for a visual.</p>
   * @public
   */
  Interactions?: VisualInteractionOptions | undefined;
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
  Title?: VisualTitleLabelOptions | undefined;

  /**
   * <p>The subtitle that is displayed on the visual.</p>
   * @public
   */
  Subtitle?: VisualSubtitleLabelOptions | undefined;

  /**
   * <p>The configuration of a <code>CustomContentVisual</code>.</p>
   * @public
   */
  ChartConfiguration?: CustomContentConfiguration | undefined;

  /**
   * <p>The list of custom actions that are configured for a visual.</p>
   * @public
   */
  Actions?: VisualCustomAction[] | undefined;

  /**
   * <p>The dataset that is used to create the custom content visual. You can't create a visual without a dataset.</p>
   * @public
   */
  DataSetIdentifier: string | undefined;

  /**
   * <p>The alt text for the visual.</p>
   * @public
   */
  VisualContentAltText?: string | undefined;
}

/**
 * <p>An empty visual.</p>
 *          <p>Empty visuals are used in layouts but have not been configured to show any data. A new visual created in the QuickSight console is considered an <code>EmptyVisual</code> until a visual type is selected.</p>
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
  Actions?: VisualCustomAction[] | undefined;
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
  Geospatial?: DimensionField[] | undefined;

  /**
   * <p>The aggregated color field well of a filled map. Values are aggregated based on location fields.</p>
   * @public
   */
  Values?: MeasureField[] | undefined;
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
  FilledMapAggregatedFieldWells?: FilledMapAggregatedFieldWells | undefined;
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
  BaseMapStyle?: BaseMapStyleType | undefined;
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
  CategorySort?: FieldSortOptions[] | undefined;
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
  Bounds?: GeospatialCoordinateBounds | undefined;

  /**
   * <p>The map zoom modes (manual, auto) of the geospatial window options.</p>
   * @public
   */
  MapZoomMode?: MapZoomMode | undefined;
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
  FieldWells?: FilledMapFieldWells | undefined;

  /**
   * <p>The sort configuration of a <code>FilledMapVisual</code>.</p>
   * @public
   */
  SortConfiguration?: FilledMapSortConfiguration | undefined;

  /**
   * <p>The legend display setup of the visual.</p>
   * @public
   */
  Legend?: LegendOptions | undefined;

  /**
   * <p>The tooltip display setup of the visual.</p>
   * @public
   */
  Tooltip?: TooltipOptions | undefined;

  /**
   * <p>The window options of the filled map visual.</p>
   * @public
   */
  WindowOptions?: GeospatialWindowOptions | undefined;

  /**
   * <p>The map style options of the filled map visual.</p>
   * @public
   */
  MapStyleOptions?: GeospatialMapStyleOptions | undefined;

  /**
   * <p>The general visual interactions setup for a visual.</p>
   * @public
   */
  Interactions?: VisualInteractionOptions | undefined;
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
  DataValue?: number | undefined;

  /**
   * <p>Determines the color.</p>
   * @public
   */
  Color?: string | undefined;
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
  Stops?: GradientStop[] | undefined;
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
  Color?: string | undefined;
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
  Solid?: ConditionalFormattingSolidColor | undefined;

  /**
   * <p>Formatting configuration for gradient color.</p>
   * @public
   */
  Gradient?: ConditionalFormattingGradientColor | undefined;
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
  Format?: ShapeConditionalFormat | undefined;
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
  Title?: VisualTitleLabelOptions | undefined;

  /**
   * <p>The subtitle that is displayed on the visual.</p>
   * @public
   */
  Subtitle?: VisualSubtitleLabelOptions | undefined;

  /**
   * <p>The configuration settings of the visual.</p>
   * @public
   */
  ChartConfiguration?: FilledMapConfiguration | undefined;

  /**
   * <p>The conditional formatting of a <code>FilledMapVisual</code>.</p>
   * @public
   */
  ConditionalFormatting?: FilledMapConditionalFormatting | undefined;

  /**
   * <p>The column hierarchy that is used during drill-downs and drill-ups.</p>
   * @public
   */
  ColumnHierarchies?: ColumnHierarchy[] | undefined;

  /**
   * <p>The list of custom actions that are configured for a visual.</p>
   * @public
   */
  Actions?: VisualCustomAction[] | undefined;

  /**
   * <p>The alt text for the visual.</p>
   * @public
   */
  VisualContentAltText?: string | undefined;
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
  Visibility?: Visibility | undefined;

  /**
   * <p>The visibility of the category labels within the data labels.</p>
   * @public
   */
  CategoryLabelVisibility?: Visibility | undefined;

  /**
   * <p>The visibility of the measure labels within the data labels.</p>
   * @public
   */
  MeasureLabelVisibility?: Visibility | undefined;

  /**
   * <p>Determines the positioning of the data label relative to a section of the funnel.</p>
   * @public
   */
  Position?: DataLabelPosition | undefined;

  /**
   * <p>The font configuration for the data labels.</p>
   *          <p>Only the <code>FontSize</code> attribute of the font configuration is used for data labels.</p>
   * @public
   */
  LabelFontConfiguration?: FontConfiguration | undefined;

  /**
   * <p>The color of the data label text.</p>
   * @public
   */
  LabelColor?: string | undefined;

  /**
   * <p>Determines the style of the metric labels.</p>
   * @public
   */
  MeasureDataLabelStyle?: FunnelChartMeasureDataLabelStyle | undefined;
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
  Category?: DimensionField[] | undefined;

  /**
   * <p>The value field wells of a funnel chart. Values are aggregated based on categories.</p>
   * @public
   */
  Values?: MeasureField[] | undefined;
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
  FunnelChartAggregatedFieldWells?: FunnelChartAggregatedFieldWells | undefined;
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
  CategorySort?: FieldSortOptions[] | undefined;

  /**
   * <p>The limit on the number of categories displayed.</p>
   * @public
   */
  CategoryItemsLimit?: ItemsLimitConfiguration | undefined;
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
  FieldWells?: FunnelChartFieldWells | undefined;

  /**
   * <p>The sort configuration of a <code>FunnelChartVisual</code>.</p>
   * @public
   */
  SortConfiguration?: FunnelChartSortConfiguration | undefined;

  /**
   * <p>The label options of the categories that are displayed in a <code>FunnelChartVisual</code>.</p>
   * @public
   */
  CategoryLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * <p>The label options for the values that are displayed in a <code>FunnelChartVisual</code>.</p>
   * @public
   */
  ValueLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * <p>The tooltip configuration of a <code>FunnelChartVisual</code>.</p>
   * @public
   */
  Tooltip?: TooltipOptions | undefined;

  /**
   * <p>The options that determine the presentation of the data labels.</p>
   * @public
   */
  DataLabelOptions?: FunnelChartDataLabelOptions | undefined;

  /**
   * <p>The visual palette configuration of a <code>FunnelChartVisual</code>.</p>
   * @public
   */
  VisualPalette?: VisualPalette | undefined;

  /**
   * <p>The general visual interactions setup for a visual.</p>
   * @public
   */
  Interactions?: VisualInteractionOptions | undefined;
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
  Title?: VisualTitleLabelOptions | undefined;

  /**
   * <p>The subtitle that is displayed on the visual.</p>
   * @public
   */
  Subtitle?: VisualSubtitleLabelOptions | undefined;

  /**
   * <p>The configuration of a <code>FunnelChartVisual</code>.</p>
   * @public
   */
  ChartConfiguration?: FunnelChartConfiguration | undefined;

  /**
   * <p>The list of custom actions that are configured for a visual.</p>
   * @public
   */
  Actions?: VisualCustomAction[] | undefined;

  /**
   * <p>The column hierarchy that is used during drill-downs and drill-ups.</p>
   * @public
   */
  ColumnHierarchies?: ColumnHierarchy[] | undefined;

  /**
   * <p>The alt text for the visual.</p>
   * @public
   */
  VisualContentAltText?: string | undefined;
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
  ForegroundColor?: string | undefined;

  /**
   * <p>The background color configuration of a <code>GaugeChartVisual</code>.</p>
   * @public
   */
  BackgroundColor?: string | undefined;
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
  Values?: MeasureField[] | undefined;

  /**
   * <p>The target value field wells of a <code>GaugeChartVisual</code>.</p>
   * @public
   */
  TargetValues?: MeasureField[] | undefined;
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
  ArcAngle?: number | undefined;

  /**
   * <p>The options that determine the arc thickness of a <code>GaugeChartVisual</code>.</p>
   * @public
   */
  ArcThickness?: ArcThicknessOptions | undefined;
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
  Min?: number | undefined;

  /**
   * <p>The maximum value of the arc axis range.</p>
   * @public
   */
  Max?: number | undefined;
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
  Range?: ArcAxisDisplayRange | undefined;

  /**
   * <p>The reserved range of the arc axis.</p>
   * @public
   */
  ReserveRange?: number | undefined;
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
  NumberDisplayFormatConfiguration?: NumberDisplayFormatConfiguration | undefined;

  /**
   * <p>The percentage display format.</p>
   * @public
   */
  PercentageDisplayFormatConfiguration?: PercentageDisplayFormatConfiguration | undefined;
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
  ComparisonMethod?: ComparisonMethod | undefined;

  /**
   * <p>The format of the comparison.</p>
   * @public
   */
  ComparisonFormat?: ComparisonFormatConfiguration | undefined;
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
  PrimaryValueDisplayType?: PrimaryValueDisplayType | undefined;

  /**
   * <p>The comparison configuration of a <code>GaugeChartVisual</code>.</p>
   * @public
   */
  Comparison?: ComparisonConfiguration | undefined;

  /**
   * <p>The arc axis configuration of a <code>GaugeChartVisual</code>.</p>
   * @public
   */
  ArcAxis?: ArcAxisConfiguration | undefined;

  /**
   * <p>The arc configuration of a <code>GaugeChartVisual</code>.</p>
   * @public
   */
  Arc?: ArcConfiguration | undefined;

  /**
   * <p>The options that determine the primary value font configuration.</p>
   * @public
   */
  PrimaryValueFontConfiguration?: FontConfiguration | undefined;
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
  FieldWells?: GaugeChartFieldWells | undefined;

  /**
   * <p>The options that determine the presentation of the <code>GaugeChartVisual</code>.</p>
   * @public
   */
  GaugeChartOptions?: GaugeChartOptions | undefined;

  /**
   * <p>The data label configuration of a <code>GaugeChartVisual</code>.</p>
   * @public
   */
  DataLabels?: DataLabelOptions | undefined;

  /**
   * <p>The tooltip configuration of a <code>GaugeChartVisual</code>.</p>
   * @public
   */
  TooltipOptions?: TooltipOptions | undefined;

  /**
   * <p>The visual palette configuration of a <code>GaugeChartVisual</code>.</p>
   * @public
   */
  VisualPalette?: VisualPalette | undefined;

  /**
   * <p>The color configuration of a <code>GaugeChartVisual</code>.</p>
   * @public
   */
  ColorConfiguration?: GaugeChartColorConfiguration | undefined;

  /**
   * <p>The general visual interactions setup for a visual.</p>
   * @public
   */
  Interactions?: VisualInteractionOptions | undefined;
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
  ForegroundColor?: ConditionalFormattingColor | undefined;
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
  IconDisplayOption?: ConditionalFormattingIconDisplayOption | undefined;
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
  Icon?: Icon | undefined;

  /**
   * <p>Determines the Unicode icon type.</p>
   * @public
   */
  UnicodeIcon?: string | undefined;
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
  Color?: string | undefined;

  /**
   * <p>Determines the icon display configuration.</p>
   * @public
   */
  DisplayConfiguration?: ConditionalFormattingIconDisplayConfiguration | undefined;
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
  IconSetType?: ConditionalFormattingIconSetType | undefined;
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
  IconSet?: ConditionalFormattingIconSet | undefined;

  /**
   * <p>Determines the custom condition for an icon set.</p>
   * @public
   */
  CustomCondition?: ConditionalFormattingCustomIconCondition | undefined;
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
  TextColor?: ConditionalFormattingColor | undefined;

  /**
   * <p>The conditional formatting of the primary value icon.</p>
   * @public
   */
  Icon?: ConditionalFormattingIcon | undefined;
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
  PrimaryValue?: GaugeChartPrimaryValueConditionalFormatting | undefined;

  /**
   * <p>The options that determine the presentation of the arc of a <code>GaugeChartVisual</code>.</p>
   * @public
   */
  Arc?: GaugeChartArcConditionalFormatting | undefined;
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
  ConditionalFormattingOptions?: GaugeChartConditionalFormattingOption[] | undefined;
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
  Title?: VisualTitleLabelOptions | undefined;

  /**
   * <p>The subtitle that is displayed on the visual.</p>
   * @public
   */
  Subtitle?: VisualSubtitleLabelOptions | undefined;

  /**
   * <p>The configuration of a <code>GaugeChartVisual</code>.</p>
   * @public
   */
  ChartConfiguration?: GaugeChartConfiguration | undefined;

  /**
   * <p>The conditional formatting of a <code>GaugeChartVisual</code>.</p>
   * @public
   */
  ConditionalFormatting?: GaugeChartConditionalFormatting | undefined;

  /**
   * <p>The list of custom actions that are configured for a visual.</p>
   * @public
   */
  Actions?: VisualCustomAction[] | undefined;

  /**
   * <p>The alt text for the visual.</p>
   * @public
   */
  VisualContentAltText?: string | undefined;
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
  Geospatial?: DimensionField[] | undefined;

  /**
   * <p>The size field wells of a geospatial map. Values are aggregated based on geospatial fields.</p>
   * @public
   */
  Values?: MeasureField[] | undefined;

  /**
   * <p>The color field wells of a geospatial map.</p>
   * @public
   */
  Colors?: DimensionField[] | undefined;
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
  GeospatialMapAggregatedFieldWells?: GeospatialMapAggregatedFieldWells | undefined;
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
  Color?: string | undefined;
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
  SimpleClusterMarker?: SimpleClusterMarker | undefined;
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
  ClusterMarker?: ClusterMarker | undefined;
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
  Colors?: GeospatialHeatmapDataColor[] | undefined;
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
  HeatmapColor?: GeospatialHeatmapColorScale | undefined;
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
  SelectedPointStyle?: GeospatialSelectedPointStyle | undefined;

  /**
   * <p>The cluster marker configuration of the geospatial point style.</p>
   * @public
   */
  ClusterMarkerConfiguration?: ClusterMarkerConfiguration | undefined;

  /**
   * <p>The heatmap configuration of the geospatial point style.</p>
   * @public
   */
  HeatmapConfiguration?: GeospatialHeatmapConfiguration | undefined;
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
  FieldWells?: GeospatialMapFieldWells | undefined;

  /**
   * <p>The legend display setup of the visual.</p>
   * @public
   */
  Legend?: LegendOptions | undefined;

  /**
   * <p>The tooltip display setup of the visual.</p>
   * @public
   */
  Tooltip?: TooltipOptions | undefined;

  /**
   * <p>The window options of the geospatial map.</p>
   * @public
   */
  WindowOptions?: GeospatialWindowOptions | undefined;

  /**
   * <p>The map style options of the geospatial map.</p>
   * @public
   */
  MapStyleOptions?: GeospatialMapStyleOptions | undefined;

  /**
   * <p>The point style options of the geospatial map.</p>
   * @public
   */
  PointStyleOptions?: GeospatialPointStyleOptions | undefined;

  /**
   * <p>The visual display options for the visual palette.</p>
   * @public
   */
  VisualPalette?: VisualPalette | undefined;

  /**
   * <p>The general visual interactions setup for a visual.</p>
   * @public
   */
  Interactions?: VisualInteractionOptions | undefined;
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
  Title?: VisualTitleLabelOptions | undefined;

  /**
   * <p>The subtitle that is displayed on the visual.</p>
   * @public
   */
  Subtitle?: VisualSubtitleLabelOptions | undefined;

  /**
   * <p>The configuration settings of the visual.</p>
   * @public
   */
  ChartConfiguration?: GeospatialMapConfiguration | undefined;

  /**
   * <p>The column hierarchy that is used during drill-downs and drill-ups.</p>
   * @public
   */
  ColumnHierarchies?: ColumnHierarchy[] | undefined;

  /**
   * <p>The list of custom actions that are configured for a visual.</p>
   * @public
   */
  Actions?: VisualCustomAction[] | undefined;

  /**
   * <p>The alt text for the visual.</p>
   * @public
   */
  VisualContentAltText?: string | undefined;
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
  Color?: string | undefined;

  /**
   * <p>The data value that the color is applied to.</p>
   * @public
   */
  DataValue?: number | undefined;
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
  NullValueColor?: DataColor | undefined;
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
  Rows?: DimensionField[] | undefined;

  /**
   * <p>The columns field well of a heat map.</p>
   * @public
   */
  Columns?: DimensionField[] | undefined;

  /**
   * <p>The values field well of a heat map.</p>
   * @public
   */
  Values?: MeasureField[] | undefined;
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
  HeatMapAggregatedFieldWells?: HeatMapAggregatedFieldWells | undefined;
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
  HeatMapRowSort?: FieldSortOptions[] | undefined;

  /**
   * <p>The column sort configuration for heat map for columns that aren't a part of a field well.</p>
   * @public
   */
  HeatMapColumnSort?: FieldSortOptions[] | undefined;

  /**
   * <p>The limit on the number of rows that are displayed in a heat map.</p>
   * @public
   */
  HeatMapRowItemsLimitConfiguration?: ItemsLimitConfiguration | undefined;

  /**
   * <p>The limit on the number of columns that are displayed in a heat map.</p>
   * @public
   */
  HeatMapColumnItemsLimitConfiguration?: ItemsLimitConfiguration | undefined;
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
  FieldWells?: HeatMapFieldWells | undefined;

  /**
   * <p>The sort configuration of a heat map.</p>
   * @public
   */
  SortConfiguration?: HeatMapSortConfiguration | undefined;

  /**
   * <p>The options that determine the presentation of the row axis label.</p>
   * @public
   */
  RowAxisDisplayOptions?: AxisDisplayOptions | undefined;

  /**
   * <p>The label options of the row that is displayed in a <code>heat map</code>.</p>
   * @public
   */
  RowLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * <p>The options that determine the presentation of the row axis label.</p>
   * @public
   */
  ColumnAxisDisplayOptions?: AxisDisplayOptions | undefined;

  /**
   * <p>The label options of the column that is displayed in a heat map.</p>
   * @public
   */
  ColumnLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * <p>The color options (gradient color, point of divergence) in a heat map.</p>
   * @public
   */
  ColorScale?: ColorScale | undefined;

  /**
   * <p>The legend display setup of the visual.</p>
   * @public
   */
  Legend?: LegendOptions | undefined;

  /**
   * <p>The options that determine if visual data labels are displayed.</p>
   * @public
   */
  DataLabels?: DataLabelOptions | undefined;

  /**
   * <p>The tooltip display setup of the visual.</p>
   * @public
   */
  Tooltip?: TooltipOptions | undefined;

  /**
   * <p>The general visual interactions setup for a visual.</p>
   * @public
   */
  Interactions?: VisualInteractionOptions | undefined;
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
  Title?: VisualTitleLabelOptions | undefined;

  /**
   * <p>The subtitle that is displayed on the visual.</p>
   * @public
   */
  Subtitle?: VisualSubtitleLabelOptions | undefined;

  /**
   * <p>The configuration of a heat map.</p>
   * @public
   */
  ChartConfiguration?: HeatMapConfiguration | undefined;

  /**
   * <p>The column hierarchy that is used during drill-downs and drill-ups.</p>
   * @public
   */
  ColumnHierarchies?: ColumnHierarchy[] | undefined;

  /**
   * <p>The list of custom actions that are configured for a visual.</p>
   * @public
   */
  Actions?: VisualCustomAction[] | undefined;

  /**
   * <p>The alt text for the visual.</p>
   * @public
   */
  VisualContentAltText?: string | undefined;
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
  Value?: number | undefined;
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
  Value?: number | undefined;

  /**
   * <p>The options that determine the bin count limit.</p>
   * @public
   */
  BinCountLimit?: number | undefined;
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
  SelectedBinType?: HistogramBinType | undefined;

  /**
   * <p>The options that determine the bin count of a histogram.</p>
   * @public
   */
  BinCount?: BinCountOptions | undefined;

  /**
   * <p>The options that determine the bin width of a histogram.</p>
   * @public
   */
  BinWidth?: BinWidthOptions | undefined;

  /**
   * <p>The options that determine the bin start value.</p>
   * @public
   */
  StartValue?: number | undefined;
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
  Values?: MeasureField[] | undefined;
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
  HistogramAggregatedFieldWells?: HistogramAggregatedFieldWells | undefined;
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
  FieldWells?: HistogramFieldWells | undefined;

  /**
   * <p>The options that determine the presentation of the x-axis.</p>
   * @public
   */
  XAxisDisplayOptions?: AxisDisplayOptions | undefined;

  /**
   * <p>The options that determine the presentation of the x-axis label.</p>
   * @public
   */
  XAxisLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * <p>The options that determine the presentation of the y-axis.</p>
   * @public
   */
  YAxisDisplayOptions?: AxisDisplayOptions | undefined;

  /**
   * <p>The options that determine the presentation of histogram bins.</p>
   * @public
   */
  BinOptions?: HistogramBinOptions | undefined;

  /**
   * <p>The data label configuration of a histogram.</p>
   * @public
   */
  DataLabels?: DataLabelOptions | undefined;

  /**
   * <p>The tooltip configuration of a histogram.</p>
   * @public
   */
  Tooltip?: TooltipOptions | undefined;

  /**
   * <p>The visual palette configuration of a histogram.</p>
   * @public
   */
  VisualPalette?: VisualPalette | undefined;

  /**
   * <p>The general visual interactions setup for a visual.</p>
   * @public
   */
  Interactions?: VisualInteractionOptions | undefined;
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
  Title?: VisualTitleLabelOptions | undefined;

  /**
   * <p>The subtitle that is displayed on the visual.</p>
   * @public
   */
  Subtitle?: VisualSubtitleLabelOptions | undefined;

  /**
   * <p>The configuration for a <code>HistogramVisual</code>.</p>
   * @public
   */
  ChartConfiguration?: HistogramConfiguration | undefined;

  /**
   * <p>The list of custom actions that are configured for a visual.</p>
   * @public
   */
  Actions?: VisualCustomAction[] | undefined;

  /**
   * <p>The alt text for the visual.</p>
   * @public
   */
  VisualContentAltText?: string | undefined;
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
  Name?: string | undefined;

  /**
   * <p>The time field that is used in a computation.</p>
   * @public
   */
  Time?: DimensionField | undefined;

  /**
   * <p>The value field that is used in a computation.</p>
   * @public
   */
  Value?: MeasureField | undefined;

  /**
   * <p>The periods forward setup of a forecast computation.</p>
   * @public
   */
  PeriodsForward?: number | undefined;

  /**
   * <p>The periods backward setup of a forecast computation.</p>
   * @public
   */
  PeriodsBackward?: number | undefined;

  /**
   * <p>The upper boundary setup of a forecast computation.</p>
   * @public
   */
  UpperBoundary?: number | undefined;

  /**
   * <p>The lower boundary setup of a forecast computation.</p>
   * @public
   */
  LowerBoundary?: number | undefined;

  /**
   * <p>The prediction interval setup of a forecast computation.</p>
   * @public
   */
  PredictionInterval?: number | undefined;

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
  Seasonality?: ForecastComputationSeasonality | undefined;

  /**
   * <p>The custom seasonality value setup of a forecast computation.</p>
   * @public
   */
  CustomSeasonalityValue?: number | undefined;
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
  Name?: string | undefined;

  /**
   * <p>The time field that is used in a computation.</p>
   * @public
   */
  Time?: DimensionField | undefined;

  /**
   * <p>The value field that is used in a computation.</p>
   * @public
   */
  Value?: MeasureField | undefined;

  /**
   * <p>The period size setup of a growth rate computation.</p>
   * @public
   */
  PeriodSize?: number | undefined;
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
  Name?: string | undefined;

  /**
   * <p>The time field that is used in a computation.</p>
   * @public
   */
  Time?: DimensionField | undefined;

  /**
   * <p>The value field that is used in a computation.</p>
   * @public
   */
  Value?: MeasureField | undefined;

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
  Name?: string | undefined;

  /**
   * <p>The time field that is used in a computation.</p>
   * @public
   */
  Time?: DimensionField | undefined;

  /**
   * <p>The field that is used in a metric comparison from value setup.</p>
   * @public
   */
  FromValue?: MeasureField | undefined;

  /**
   * <p>The field that is used in a metric comparison to value setup.</p>
   * @public
   */
  TargetValue?: MeasureField | undefined;
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
  Name?: string | undefined;

  /**
   * <p>The time field that is used in a computation.</p>
   * @public
   */
  Time?: DimensionField | undefined;

  /**
   * <p>The value field that is used in a computation.</p>
   * @public
   */
  Value?: MeasureField | undefined;
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
  Name?: string | undefined;

  /**
   * <p>The time field that is used in a computation.</p>
   * @public
   */
  Time?: DimensionField | undefined;

  /**
   * <p>The value field that is used in a computation.</p>
   * @public
   */
  Value?: MeasureField | undefined;

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
  PeriodTimeGranularity?: TimeGranularity | undefined;
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
  Name?: string | undefined;

  /**
   * <p>The time field that is used in a computation.</p>
   * @public
   */
  Time?: DimensionField | undefined;

  /**
   * <p>The category field that is used in a computation.</p>
   * @public
   */
  Category?: DimensionField | undefined;

  /**
   * <p>The value field that is used in a computation.</p>
   * @public
   */
  Value?: MeasureField | undefined;

  /**
   * <p>The mover size setup of the top and bottom movers computation.</p>
   * @public
   */
  MoverSize?: number | undefined;

  /**
   * <p>The sort order setup of the top and bottom movers computation.</p>
   * @public
   */
  SortOrder?: TopBottomSortOrder | undefined;

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
  Name?: string | undefined;

  /**
   * <p>The category field that is used in a computation.</p>
   * @public
   */
  Category?: DimensionField | undefined;

  /**
   * <p>The value field that is used in a computation.</p>
   * @public
   */
  Value?: MeasureField | undefined;

  /**
   * <p>The result size of a top and bottom ranked computation.</p>
   * @public
   */
  ResultSize?: number | undefined;

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
  Name?: string | undefined;

  /**
   * <p>The value field that is used in a computation.</p>
   * @public
   */
  Value?: MeasureField | undefined;
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
  Name?: string | undefined;

  /**
   * <p>The category field that is used in a computation.</p>
   * @public
   */
  Category?: DimensionField | undefined;
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
  TopBottomRanked?: TopBottomRankedComputation | undefined;

  /**
   * <p>The top movers and bottom movers computation configuration.</p>
   * @public
   */
  TopBottomMovers?: TopBottomMoversComputation | undefined;

  /**
   * <p>The total aggregation computation configuration.</p>
   * @public
   */
  TotalAggregation?: TotalAggregationComputation | undefined;

  /**
   * <p>The maximum and minimum computation configuration.</p>
   * @public
   */
  MaximumMinimum?: MaximumMinimumComputation | undefined;

  /**
   * <p>The metric comparison computation configuration.</p>
   * @public
   */
  MetricComparison?: MetricComparisonComputation | undefined;

  /**
   * <p>The period over period computation configuration.</p>
   * @public
   */
  PeriodOverPeriod?: PeriodOverPeriodComputation | undefined;

  /**
   * <p>The period to <code>DataSetIdentifier</code> computation configuration.</p>
   * @public
   */
  PeriodToDate?: PeriodToDateComputation | undefined;

  /**
   * <p>The growth rate computation configuration.</p>
   * @public
   */
  GrowthRate?: GrowthRateComputation | undefined;

  /**
   * <p>The unique values computation configuration.</p>
   * @public
   */
  UniqueValues?: UniqueValuesComputation | undefined;

  /**
   * <p>The forecast computation configuration.</p>
   * @public
   */
  Forecast?: ForecastComputation | undefined;
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
  Computations?: Computation[] | undefined;

  /**
   * <p>The custom narrative of the insight visual.</p>
   * @public
   */
  CustomNarrative?: CustomNarrativeOptions | undefined;

  /**
   * <p>The general visual interactions setup for a visual.</p>
   * @public
   */
  Interactions?: VisualInteractionOptions | undefined;
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
  Title?: VisualTitleLabelOptions | undefined;

  /**
   * <p>The subtitle that is displayed on the visual.</p>
   * @public
   */
  Subtitle?: VisualSubtitleLabelOptions | undefined;

  /**
   * <p>The configuration of an insight visual.</p>
   * @public
   */
  InsightConfiguration?: InsightConfiguration | undefined;

  /**
   * <p>The list of custom actions that are configured for a visual.</p>
   * @public
   */
  Actions?: VisualCustomAction[] | undefined;

  /**
   * <p>The dataset that is used in the insight visual.</p>
   * @public
   */
  DataSetIdentifier: string | undefined;

  /**
   * <p>The alt text for the visual.</p>
   * @public
   */
  VisualContentAltText?: string | undefined;
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
  Values?: MeasureField[] | undefined;

  /**
   * <p>The target value field wells of a KPI visual.</p>
   * @public
   */
  TargetValues?: MeasureField[] | undefined;

  /**
   * <p>The trend group field wells of a KPI visual.</p>
   * @public
   */
  TrendGroups?: DimensionField[] | undefined;
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
  Visibility?: Visibility | undefined;
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
  Visibility?: Visibility | undefined;
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
  Visibility?: Visibility | undefined;

  /**
   * <p>The type of the sparkline.</p>
   * @public
   */
  Type: KPISparklineType | undefined;

  /**
   * <p>The color of the sparkline.</p>
   * @public
   */
  Color?: string | undefined;

  /**
   * <p>The tooltip visibility of the sparkline.</p>
   * @public
   */
  TooltipVisibility?: Visibility | undefined;
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
  Visibility?: Visibility | undefined;
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
  StandardLayout?: KPIVisualStandardLayout | undefined;
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
  ProgressBar?: ProgressBarOptions | undefined;

  /**
   * <p>The options that determine the presentation of trend arrows in a KPI visual.</p>
   * @public
   */
  TrendArrows?: TrendArrowOptions | undefined;

  /**
   * <p>The options that determine the presentation of the secondary value of a KPI visual.</p>
   * @public
   */
  SecondaryValue?: SecondaryValueOptions | undefined;

  /**
   * <p>The comparison configuration of a KPI visual.</p>
   * @public
   */
  Comparison?: ComparisonConfiguration | undefined;

  /**
   * <p>The options that determine the primary value display type.</p>
   * @public
   */
  PrimaryValueDisplayType?: PrimaryValueDisplayType | undefined;

  /**
   * <p>The options that determine the primary value font configuration.</p>
   * @public
   */
  PrimaryValueFontConfiguration?: FontConfiguration | undefined;

  /**
   * <p>The options that determine the secondary value font configuration.</p>
   * @public
   */
  SecondaryValueFontConfiguration?: FontConfiguration | undefined;

  /**
   * <p>The options that determine the visibility, color, type, and tooltip visibility of the sparkline of a KPI visual.</p>
   * @public
   */
  Sparkline?: KPISparklineOptions | undefined;

  /**
   * <p>The options that determine the layout a KPI visual.</p>
   * @public
   */
  VisualLayoutOptions?: KPIVisualLayoutOptions | undefined;
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
  TrendGroupSort?: FieldSortOptions[] | undefined;
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
  FieldWells?: KPIFieldWells | undefined;

  /**
   * <p>The sort configuration of a KPI visual.</p>
   * @public
   */
  SortConfiguration?: KPISortConfiguration | undefined;

  /**
   * <p>The options that determine the presentation of a KPI visual.</p>
   * @public
   */
  KPIOptions?: KPIOptions | undefined;

  /**
   * <p>The general visual interactions setup for a visual.</p>
   * @public
   */
  Interactions?: VisualInteractionOptions | undefined;
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
  TextColor?: ConditionalFormattingColor | undefined;

  /**
   * <p>The conditional formatting of the actual value's icon.</p>
   * @public
   */
  Icon?: ConditionalFormattingIcon | undefined;
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
  TextColor?: ConditionalFormattingColor | undefined;

  /**
   * <p>The conditional formatting of the comparison value's icon.</p>
   * @public
   */
  Icon?: ConditionalFormattingIcon | undefined;
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
  TextColor?: ConditionalFormattingColor | undefined;

  /**
   * <p>The conditional formatting of the primary value's icon.</p>
   * @public
   */
  Icon?: ConditionalFormattingIcon | undefined;
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
  ForegroundColor?: ConditionalFormattingColor | undefined;
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
  PrimaryValue?: KPIPrimaryValueConditionalFormatting | undefined;

  /**
   * <p>The conditional formatting for the progress bar of a KPI visual.</p>
   * @public
   */
  ProgressBar?: KPIProgressBarConditionalFormatting | undefined;

  /**
   * <p>The conditional formatting for the actual value of a KPI visual.</p>
   * @public
   */
  ActualValue?: KPIActualValueConditionalFormatting | undefined;

  /**
   * <p>The conditional formatting for the comparison value of a KPI visual.</p>
   * @public
   */
  ComparisonValue?: KPIComparisonValueConditionalFormatting | undefined;
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
  ConditionalFormattingOptions?: KPIConditionalFormattingOption[] | undefined;
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
  Title?: VisualTitleLabelOptions | undefined;

  /**
   * <p>The subtitle that is displayed on the visual.</p>
   * @public
   */
  Subtitle?: VisualSubtitleLabelOptions | undefined;

  /**
   * <p>The configuration of a KPI visual.</p>
   * @public
   */
  ChartConfiguration?: KPIConfiguration | undefined;

  /**
   * <p>The conditional formatting of a KPI visual.</p>
   * @public
   */
  ConditionalFormatting?: KPIConditionalFormatting | undefined;

  /**
   * <p>The list of custom actions that are configured for a visual.</p>
   * @public
   */
  Actions?: VisualCustomAction[] | undefined;

  /**
   * <p>The column hierarchy that is used during drill-downs and drill-ups.</p>
   * @public
   */
  ColumnHierarchies?: ColumnHierarchy[] | undefined;

  /**
   * <p>The alt text for the visual.</p>
   * @public
   */
  VisualContentAltText?: string | undefined;
}

/**
 * <p>The operation that is defined by the custom action.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 * @public
 */
export interface LayerCustomActionOperation {
  /**
   * <p>The filter operation that filters data included in a visual or in an entire sheet.</p>
   * @public
   */
  FilterOperation?: CustomActionFilterOperation | undefined;

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
export const LayerCustomActionTrigger = {
  DATA_POINT_CLICK: "DATA_POINT_CLICK",
  DATA_POINT_MENU: "DATA_POINT_MENU",
} as const;

/**
 * @public
 */
export type LayerCustomActionTrigger = (typeof LayerCustomActionTrigger)[keyof typeof LayerCustomActionTrigger];

/**
 * <p>A layer custom action.</p>
 * @public
 */
export interface LayerCustomAction {
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
   * <p>The status of the <code>LayerCustomAction</code>.</p>
   * @public
   */
  Status?: WidgetStatus | undefined;

  /**
   * <p>The trigger of the <code>LayerCustomAction</code>.</p>
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
  Trigger: LayerCustomActionTrigger | undefined;

  /**
   * <p>A list of <code>LayerCustomActionOperations</code>.</p>
   *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
   * @public
   */
  ActionOperations: LayerCustomActionOperation[] | undefined;
}

/**
 * <p>The source properties for a geospatial static file.</p>
 * @public
 */
export interface GeospatialStaticFileSource {
  /**
   * <p>The ID of the static file.</p>
   * @public
   */
  StaticFileId: string | undefined;
}

/**
 * <p>The data source properties for the geospatial data.</p>
 * @public
 */
export interface GeospatialDataSourceItem {
  /**
   * <p>The static file data source properties for the geospatial data.</p>
   * @public
   */
  StaticFileDataSource?: GeospatialStaticFileSource | undefined;
}

/**
 * <p>The color field that defines a gradient or categorical style.</p>
 * @public
 */
export interface GeospatialLayerColorField {
  /**
   * <p>A list of color dimension fields.</p>
   * @public
   */
  ColorDimensionsFields?: DimensionField[] | undefined;

  /**
   * <p>A list of color measure fields.</p>
   * @public
   */
  ColorValuesFields?: MeasureField[] | undefined;
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
  FormatConfiguration?: FormatConfiguration | undefined;
}

/**
 * <p>The custom actions for a layer.</p>
 * @public
 */
export interface GeospatialLayerJoinDefinition {
  /**
   * <p>The name of the field or property in the geospatial data source.</p>
   * @public
   */
  ShapeKeyField?: string | undefined;

  /**
   * <p>The unaggregated field for a table.</p>
   * @public
   */
  DatasetKeyField?: UnaggregatedField | undefined;

  /**
   * <p>The geospatial color field for the join definition.</p>
   * @public
   */
  ColorField?: GeospatialLayerColorField | undefined;
}

/**
 * <p>The categorical data color for a single category.</p>
 * @public
 */
export interface GeospatialCategoricalDataColor {
  /**
   * <p>The color and opacity values for the category data color.</p>
   * @public
   */
  Color: string | undefined;

  /**
   * <p>The data value for the category data color.</p>
   * @public
   */
  DataValue: string | undefined;
}

/**
 * <p>The symbol style for null data.</p>
 * @public
 */
export interface GeospatialNullSymbolStyle {
  /**
   * <p>The color and opacity values for the fill color.</p>
   * @public
   */
  FillColor?: string | undefined;

  /**
   * <p>The color and opacity values for the stroke color.</p>
   * @public
   */
  StrokeColor?: string | undefined;

  /**
   * <p>The width of the border stroke.</p>
   * @public
   */
  StrokeWidth?: number | undefined;
}

/**
 * <p>The properties for the visualization of null data.</p>
 * @public
 */
export interface GeospatialNullDataSettings {
  /**
   * <p>The symbol style for null data.</p>
   * @public
   */
  SymbolStyle: GeospatialNullSymbolStyle | undefined;
}

/**
 * <p>The definition for a categorical color.</p>
 * @public
 */
export interface GeospatialCategoricalColor {
  /**
   * <p>A list of categorical data colors for each category.</p>
   * @public
   */
  CategoryDataColors: GeospatialCategoricalDataColor[] | undefined;

  /**
   * <p>The state of visibility for null data.</p>
   * @public
   */
  NullDataVisibility?: Visibility | undefined;

  /**
   * <p>The null data visualization settings.</p>
   * @public
   */
  NullDataSettings?: GeospatialNullDataSettings | undefined;

  /**
   * <p>The default opacity of a categorical color.</p>
   * @public
   */
  DefaultOpacity?: number | undefined;
}

/**
 * <p>The gradient step color for a single step.</p>
 * @public
 */
export interface GeospatialGradientStepColor {
  /**
   * <p>The color and opacity values for the gradient step color.</p>
   * @public
   */
  Color: string | undefined;

  /**
   * <p>The data value for the gradient step color.</p>
   * @public
   */
  DataValue: number | undefined;
}

/**
 * <p>The definition for a gradient color.</p>
 * @public
 */
export interface GeospatialGradientColor {
  /**
   * <p>A list of gradient step colors for the gradient.</p>
   * @public
   */
  StepColors: GeospatialGradientStepColor[] | undefined;

  /**
   * <p>The state of visibility for null data.</p>
   * @public
   */
  NullDataVisibility?: Visibility | undefined;

  /**
   * <p>The null data visualization settings.</p>
   * @public
   */
  NullDataSettings?: GeospatialNullDataSettings | undefined;

  /**
   * <p>The default opacity for the gradient color.</p>
   * @public
   */
  DefaultOpacity?: number | undefined;
}

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
 * <p>The definition for a solid color.</p>
 * @public
 */
export interface GeospatialSolidColor {
  /**
   * <p>The color and opacity values for the color.</p>
   * @public
   */
  Color: string | undefined;

  /**
   * <p>Enables and disables the view state of the color.</p>
   * @public
   */
  State?: GeospatialColorState | undefined;
}

/**
 * <p>The visualization properties for solid, gradient, and categorical colors.</p>
 * @public
 */
export interface GeospatialColor {
  /**
   * <p>The visualization properties for the solid color.</p>
   * @public
   */
  Solid?: GeospatialSolidColor | undefined;

  /**
   * <p>The visualization properties for the gradient color.</p>
   * @public
   */
  Gradient?: GeospatialGradientColor | undefined;

  /**
   * <p>The visualization properties for the categorical color.</p>
   * @public
   */
  Categorical?: GeospatialCategoricalColor | undefined;
}

/**
 * <p>The width properties for a line.</p>
 * @public
 */
export interface GeospatialLineWidth {
  /**
   * <p>The positive value for the width of a line.</p>
   * @public
   */
  LineWidth?: number | undefined;
}

/**
 * <p>The symbol style for a line layer.</p>
 * @public
 */
export interface GeospatialLineSymbolStyle {
  /**
   * <p>The color and opacity values for the fill color.</p>
   * @public
   */
  FillColor?: GeospatialColor | undefined;

  /**
   * <p>The width value for a line.</p>
   * @public
   */
  LineWidth?: GeospatialLineWidth | undefined;
}

/**
 * <p>The visualization style for a line layer.</p>
 * @public
 */
export interface GeospatialLineStyle {
  /**
   * <p>The symbol style for a line style.</p>
   * @public
   */
  LineSymbolStyle?: GeospatialLineSymbolStyle | undefined;
}

/**
 * <p>The geospatial Line layer.</p>
 * @public
 */
export interface GeospatialLineLayer {
  /**
   * <p>The visualization style for a line layer.</p>
   * @public
   */
  Style: GeospatialLineStyle | undefined;
}

/**
 * <p>The geospatial radius for a circle.</p>
 * @public
 */
export interface GeospatialCircleRadius {
  /**
   * <p>The positive value for the radius of a circle.</p>
   * @public
   */
  Radius?: number | undefined;
}

/**
 * <p>The properties for a circle symbol style.</p>
 * @public
 */
export interface GeospatialCircleSymbolStyle {
  /**
   * <p>The color and opacity values for the fill color.</p>
   * @public
   */
  FillColor?: GeospatialColor | undefined;

  /**
   * <p>The color and opacity values for the stroke color.</p>
   * @public
   */
  StrokeColor?: GeospatialColor | undefined;

  /**
   * <p>The width of the stroke (border).</p>
   * @public
   */
  StrokeWidth?: GeospatialLineWidth | undefined;

  /**
   * <p>The radius of the circle.</p>
   * @public
   */
  CircleRadius?: GeospatialCircleRadius | undefined;
}

/**
 * <p>The point style for a point layer.</p>
 * @public
 */
export interface GeospatialPointStyle {
  /**
   * <p>The circle symbol style for a point layer.</p>
   * @public
   */
  CircleSymbolStyle?: GeospatialCircleSymbolStyle | undefined;
}

/**
 * <p>The geospatial Point layer.</p>
 * @public
 */
export interface GeospatialPointLayer {
  /**
   * <p>The visualization style for a point layer.</p>
   * @public
   */
  Style: GeospatialPointStyle | undefined;
}

/**
 * <p>The polygon symbol style for a polygon layer.</p>
 * @public
 */
export interface GeospatialPolygonSymbolStyle {
  /**
   * <p>The color and opacity values for the fill color.</p>
   * @public
   */
  FillColor?: GeospatialColor | undefined;

  /**
   * <p>The color and opacity values for the stroke color.</p>
   * @public
   */
  StrokeColor?: GeospatialColor | undefined;

  /**
   * <p>The width of the border stroke.</p>
   * @public
   */
  StrokeWidth?: GeospatialLineWidth | undefined;
}

/**
 * <p>The polygon style for a polygon layer.</p>
 * @public
 */
export interface GeospatialPolygonStyle {
  /**
   * <p>The polygon symbol style for a polygon layer.</p>
   * @public
   */
  PolygonSymbolStyle?: GeospatialPolygonSymbolStyle | undefined;
}

/**
 * <p>The geospatial polygon layer.</p>
 * @public
 */
export interface GeospatialPolygonLayer {
  /**
   * <p>The visualization style for a polygon layer.</p>
   * @public
   */
  Style: GeospatialPolygonStyle | undefined;
}

/**
 * <p>The definition properties for a geospatial layer.</p>
 * @public
 */
export interface GeospatialLayerDefinition {
  /**
   * <p>The definition for a point layer.</p>
   * @public
   */
  PointLayer?: GeospatialPointLayer | undefined;

  /**
   * <p>The definition for a line layer.</p>
   * @public
   */
  LineLayer?: GeospatialLineLayer | undefined;

  /**
   * <p>The definition for a polygon layer.</p>
   * @public
   */
  PolygonLayer?: GeospatialPolygonLayer | undefined;
}

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
 * <p>The properties for a single geospatial layer.</p>
 * @public
 */
export interface GeospatialLayerItem {
  /**
   * <p>The ID of the layer.</p>
   * @public
   */
  LayerId: string | undefined;

  /**
   * <p>The layer type.</p>
   * @public
   */
  LayerType?: GeospatialLayerType | undefined;

  /**
   * <p>The data source for the layer.</p>
   * @public
   */
  DataSource?: GeospatialDataSourceItem | undefined;

  /**
   * <p>The label that is displayed for the layer.</p>
   * @public
   */
  Label?: string | undefined;

  /**
   * <p>The state of visibility for the layer.</p>
   * @public
   */
  Visibility?: Visibility | undefined;

  /**
   * <p>The definition properties for a layer.</p>
   * @public
   */
  LayerDefinition?: GeospatialLayerDefinition | undefined;

  /**
   * <p>The display options for the visual tooltip.</p>
   * @public
   */
  Tooltip?: TooltipOptions | undefined;

  /**
   * <p>The join definition properties for a layer.</p>
   * @public
   */
  JoinDefinition?: GeospatialLayerJoinDefinition | undefined;

  /**
   * <p>A list of custom actions for a layer.</p>
   * @public
   */
  Actions?: LayerCustomAction[] | undefined;
}

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
 * <p>The map state properties for a map.</p>
 * @public
 */
export interface GeospatialMapState {
  /**
   * <p>The bound
   *             options (north, south, west, east) of the geospatial window options.</p>
   * @public
   */
  Bounds?: GeospatialCoordinateBounds | undefined;

  /**
   * <p>Enables or disables map navigation for a map.</p>
   * @public
   */
  MapNavigation?: GeospatialMapNavigation | undefined;
}

/**
 * <p>The map style properties for a map.</p>
 * @public
 */
export interface GeospatialMapStyle {
  /**
   * <p>The selected base map style.</p>
   * @public
   */
  BaseMapStyle?: BaseMapStyleType | undefined;

  /**
   * <p>The background color and opacity values for a map.</p>
   * @public
   */
  BackgroundColor?: string | undefined;

  /**
   * <p>The state of visibility for the base map.</p>
   * @public
   */
  BaseMapVisibility?: Visibility | undefined;
}

/**
 * <p>The map definition that defines map state, map style, and geospatial layers.</p>
 * @public
 */
export interface GeospatialLayerMapConfiguration {
  /**
   * <p>The options for the legend setup of a visual.</p>
   * @public
   */
  Legend?: LegendOptions | undefined;

  /**
   * <p>The geospatial layers to visualize on the map.</p>
   * @public
   */
  MapLayers?: GeospatialLayerItem[] | undefined;

  /**
   * <p>The map state properties for the map.</p>
   * @public
   */
  MapState?: GeospatialMapState | undefined;

  /**
   * <p>The map style properties for the map.</p>
   * @public
   */
  MapStyle?: GeospatialMapStyle | undefined;

  /**
   * <p>The general visual interactions setup for visual publish options</p>
   * @public
   */
  Interactions?: VisualInteractionOptions | undefined;
}

/**
 * <p>A layer map visual.</p>
 * @public
 */
export interface LayerMapVisual {
  /**
   * <p>The ID of the visual.</p>
   * @public
   */
  VisualId: string | undefined;

  /**
   * <p>The title label options for a visual.</p>
   * @public
   */
  Title?: VisualTitleLabelOptions | undefined;

  /**
   * <p>The subtitle label options for a visual.</p>
   * @public
   */
  Subtitle?: VisualSubtitleLabelOptions | undefined;

  /**
   * <p>The configuration settings of the visual.</p>
   * @public
   */
  ChartConfiguration?: GeospatialLayerMapConfiguration | undefined;

  /**
   * <p>The dataset that is used to create the layer map visual. You can't create a visual without a dataset.</p>
   * @public
   */
  DataSetIdentifier: string | undefined;

  /**
   * <p>The alt text for the visual.</p>
   * @public
   */
  VisualContentAltText?: string | undefined;
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
  LineVisibility?: Visibility | undefined;

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
  LineInterpolation?: LineInterpolation | undefined;

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
  LineStyle?: LineChartLineStyle | undefined;

  /**
   * <p>Width that determines the line thickness.</p>
   * @public
   */
  LineWidth?: string | undefined;
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
  MarkerVisibility?: Visibility | undefined;

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
  MarkerShape?: LineChartMarkerShape | undefined;

  /**
   * <p>Size of marker in the series.</p>
   * @public
   */
  MarkerSize?: string | undefined;

  /**
   * <p>Color of marker in the series.</p>
   * @public
   */
  MarkerColor?: string | undefined;
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
  AxisBinding?: AxisBinding | undefined;

  /**
   * <p>Line styles options for all line series in the visual.</p>
   * @public
   */
  LineStyleSettings?: LineChartLineStyleSettings | undefined;

  /**
   * <p>Marker styles options for all line series in the visual.</p>
   * @public
   */
  MarkerStyleSettings?: LineChartMarkerStyleSettings | undefined;
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
  Category?: DimensionField[] | undefined;

  /**
   * <p>The value field wells of a line chart. Values are aggregated based on categories.</p>
   * @public
   */
  Values?: MeasureField[] | undefined;

  /**
   * <p>The color field wells of a line chart. Values are grouped by category fields.</p>
   * @public
   */
  Colors?: DimensionField[] | undefined;

  /**
   * <p>The small multiples field well of a line chart.</p>
   * @public
   */
  SmallMultiples?: DimensionField[] | undefined;
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
  LineChartAggregatedFieldWells?: LineChartAggregatedFieldWells | undefined;
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
  PeriodsForward?: number | undefined;

  /**
   * <p>The periods backward setup of a forecast computation.</p>
   * @public
   */
  PeriodsBackward?: number | undefined;

  /**
   * <p>The upper boundary setup of a forecast computation.</p>
   * @public
   */
  UpperBoundary?: number | undefined;

  /**
   * <p>The lower boundary setup of a forecast computation.</p>
   * @public
   */
  LowerBoundary?: number | undefined;

  /**
   * <p>The prediction interval setup of a forecast computation.</p>
   * @public
   */
  PredictionInterval?: number | undefined;

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
  Seasonality?: number | undefined;
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
  WhatIfPointScenario?: WhatIfPointScenario | undefined;

  /**
   * <p>The what-if analysis forecast setup with the date range.</p>
   * @public
   */
  WhatIfRangeScenario?: WhatIfRangeScenario | undefined;
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
  ForecastProperties?: TimeBasedForecastProperties | undefined;

  /**
   * <p>The forecast scenario of a forecast in the line chart.</p>
   * @public
   */
  Scenario?: ForecastScenario | undefined;
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
  TreatmentOption?: MissingDataTreatmentOption | undefined;
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
  AxisOptions?: AxisDisplayOptions | undefined;

  /**
   * <p>The configuration options that determine how missing data is treated during the rendering of a line chart.</p>
   * @public
   */
  MissingDataConfigurations?: MissingDataConfiguration[] | undefined;
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
  LineStyleSettings?: LineChartLineStyleSettings | undefined;

  /**
   * <p>Marker styles options for a line series in <code>LineChartVisual</code>.</p>
   * @public
   */
  MarkerStyleSettings?: LineChartMarkerStyleSettings | undefined;
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
  FieldValue?: string | undefined;

  /**
   * <p>The axis that you are binding the field to.</p>
   * @public
   */
  AxisBinding: AxisBinding | undefined;

  /**
   * <p>The options that determine the presentation of line series associated to the field.</p>
   * @public
   */
  Settings?: LineChartSeriesSettings | undefined;
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
  Settings?: LineChartSeriesSettings | undefined;
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
  FieldSeriesItem?: FieldSeriesItem | undefined;

  /**
   * <p>The data field series item configuration of a line chart.</p>
   * @public
   */
  DataFieldSeriesItem?: DataFieldSeriesItem | undefined;
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
  CategorySort?: FieldSortOptions[] | undefined;

  /**
   * <p>The limit on the number of categories that are displayed in a line chart.</p>
   * @public
   */
  CategoryItemsLimitConfiguration?: ItemsLimitConfiguration | undefined;

  /**
   * <p>The limit on the number of lines that are displayed in a line chart.</p>
   * @public
   */
  ColorItemsLimitConfiguration?: ItemsLimitConfiguration | undefined;

  /**
   * <p>The sort configuration of the small multiples field.</p>
   * @public
   */
  SmallMultiplesSort?: FieldSortOptions[] | undefined;

  /**
   * <p>The limit on the number of small multiples panels that are displayed.</p>
   * @public
   */
  SmallMultiplesLimitConfiguration?: ItemsLimitConfiguration | undefined;
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
  FieldWells?: LineChartFieldWells | undefined;

  /**
   * <p>The sort configuration of a line chart.</p>
   * @public
   */
  SortConfiguration?: LineChartSortConfiguration | undefined;

  /**
   * <p>The forecast configuration of a line chart.</p>
   * @public
   */
  ForecastConfigurations?: ForecastConfiguration[] | undefined;

  /**
   * <p>Determines the type of the line chart.</p>
   * @public
   */
  Type?: LineChartType | undefined;

  /**
   * <p>The small multiples setup for the visual.</p>
   * @public
   */
  SmallMultiplesOptions?: SmallMultiplesOptions | undefined;

  /**
   * <p>The options that determine the presentation of the x-axis.</p>
   * @public
   */
  XAxisDisplayOptions?: AxisDisplayOptions | undefined;

  /**
   * <p>The options that determine the presentation of the x-axis label.</p>
   * @public
   */
  XAxisLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * <p>The series axis configuration of a line chart.</p>
   * @public
   */
  PrimaryYAxisDisplayOptions?: LineSeriesAxisDisplayOptions | undefined;

  /**
   * <p>The options that determine the presentation of the y-axis label.</p>
   * @public
   */
  PrimaryYAxisLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * <p>The series axis configuration of a line chart.</p>
   * @public
   */
  SecondaryYAxisDisplayOptions?: LineSeriesAxisDisplayOptions | undefined;

  /**
   * <p>The options that determine the presentation of the secondary y-axis label.</p>
   * @public
   */
  SecondaryYAxisLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * <p>The settings of a chart's single axis configuration.</p>
   * @public
   */
  SingleAxisOptions?: SingleAxisOptions | undefined;

  /**
   * <p>The options that determine the default presentation of all line series in <code>LineChartVisual</code>.</p>
   * @public
   */
  DefaultSeriesSettings?: LineChartDefaultSeriesSettings | undefined;

  /**
   * <p>The series item configuration of a line chart.</p>
   * @public
   */
  Series?: SeriesItem[] | undefined;

  /**
   * <p>The legend configuration of a line chart.</p>
   * @public
   */
  Legend?: LegendOptions | undefined;

  /**
   * <p>The data label configuration of a line chart.</p>
   * @public
   */
  DataLabels?: DataLabelOptions | undefined;

  /**
   * <p>The reference lines configuration of a line chart.</p>
   * @public
   */
  ReferenceLines?: ReferenceLine[] | undefined;

  /**
   * <p>The tooltip configuration of a line chart.</p>
   * @public
   */
  Tooltip?: TooltipOptions | undefined;

  /**
   * <p>The default configuration of a line chart's contribution analysis.</p>
   * @public
   */
  ContributionAnalysisDefaults?: ContributionAnalysisDefault[] | undefined;

  /**
   * <p>The visual palette configuration of a line chart.</p>
   * @public
   */
  VisualPalette?: VisualPalette | undefined;

  /**
   * <p>The general visual interactions setup for a visual.</p>
   * @public
   */
  Interactions?: VisualInteractionOptions | undefined;
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
  Title?: VisualTitleLabelOptions | undefined;

  /**
   * <p>The subtitle that is displayed on the visual.</p>
   * @public
   */
  Subtitle?: VisualSubtitleLabelOptions | undefined;

  /**
   * <p>The configuration of a line chart.</p>
   * @public
   */
  ChartConfiguration?: LineChartConfiguration | undefined;

  /**
   * <p>The list of custom actions that are configured for a visual.</p>
   * @public
   */
  Actions?: VisualCustomAction[] | undefined;

  /**
   * <p>The column hierarchy that is used during drill-downs and drill-ups.</p>
   * @public
   */
  ColumnHierarchies?: ColumnHierarchy[] | undefined;

  /**
   * <p>The alt text for the visual.</p>
   * @public
   */
  VisualContentAltText?: string | undefined;
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
  ArcThickness?: ArcThickness | undefined;
}

/**
 * <p>The label options of the label that is displayed in the center of a donut chart. This option isn't available for pie charts.</p>
 * @public
 */
export interface DonutCenterOptions {
  /**
   * <p>Determines the visibility of the label in a donut chart. In the QuickSight console, this option is called <code>'Show total'</code>.</p>
   * @public
   */
  LabelVisibility?: Visibility | undefined;
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
  ArcOptions?: ArcOptions | undefined;

  /**
   * <p>The label options of the label that is displayed in the center of a donut chart. This option isn't available for pie charts.</p>
   * @public
   */
  DonutCenterOptions?: DonutCenterOptions | undefined;
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
  Category?: DimensionField[] | undefined;

  /**
   * <p>The value field wells of a pie chart. Values are aggregated based on categories.</p>
   * @public
   */
  Values?: MeasureField[] | undefined;

  /**
   * <p>The small multiples field well of a pie chart.</p>
   * @public
   */
  SmallMultiples?: DimensionField[] | undefined;
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
  PieChartAggregatedFieldWells?: PieChartAggregatedFieldWells | undefined;
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
  CategorySort?: FieldSortOptions[] | undefined;

  /**
   * <p>The limit on the number of categories that are displayed in a pie chart.</p>
   * @public
   */
  CategoryItemsLimit?: ItemsLimitConfiguration | undefined;

  /**
   * <p>The sort configuration of the small multiples field.</p>
   * @public
   */
  SmallMultiplesSort?: FieldSortOptions[] | undefined;

  /**
   * <p>The limit on the number of small multiples panels that are displayed.</p>
   * @public
   */
  SmallMultiplesLimitConfiguration?: ItemsLimitConfiguration | undefined;
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
  FieldWells?: PieChartFieldWells | undefined;

  /**
   * <p>The sort configuration of a pie chart.</p>
   * @public
   */
  SortConfiguration?: PieChartSortConfiguration | undefined;

  /**
   * <p>The options that determine the shape of the chart. This option determines whether the chart is a pie chart or a donut chart.</p>
   * @public
   */
  DonutOptions?: DonutOptions | undefined;

  /**
   * <p>The small multiples setup for the visual.</p>
   * @public
   */
  SmallMultiplesOptions?: SmallMultiplesOptions | undefined;

  /**
   * <p>The label options of the group/color that is displayed in a pie chart.</p>
   * @public
   */
  CategoryLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * <p>The label options for the value that is displayed in a pie chart.</p>
   * @public
   */
  ValueLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * <p>The legend display setup of the visual.</p>
   * @public
   */
  Legend?: LegendOptions | undefined;

  /**
   * <p>The options that determine if visual data labels are displayed.</p>
   * @public
   */
  DataLabels?: DataLabelOptions | undefined;

  /**
   * <p>The tooltip display setup of the visual.</p>
   * @public
   */
  Tooltip?: TooltipOptions | undefined;

  /**
   * <p>The palette (chart color) display setup of the visual.</p>
   * @public
   */
  VisualPalette?: VisualPalette | undefined;

  /**
   * <p>The contribution analysis (anomaly configuration) setup of the visual.</p>
   * @public
   */
  ContributionAnalysisDefaults?: ContributionAnalysisDefault[] | undefined;

  /**
   * <p>The general visual interactions setup for a visual.</p>
   * @public
   */
  Interactions?: VisualInteractionOptions | undefined;
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
  Title?: VisualTitleLabelOptions | undefined;

  /**
   * <p>The subtitle that is displayed on the visual.</p>
   * @public
   */
  Subtitle?: VisualSubtitleLabelOptions | undefined;

  /**
   * <p>The configuration of a pie chart.</p>
   * @public
   */
  ChartConfiguration?: PieChartConfiguration | undefined;

  /**
   * <p>The list of custom actions that are configured for a visual.</p>
   * @public
   */
  Actions?: VisualCustomAction[] | undefined;

  /**
   * <p>The column hierarchy that is used during drill-downs and drill-ups.</p>
   * @public
   */
  ColumnHierarchies?: ColumnHierarchy[] | undefined;

  /**
   * <p>The alt text for the visual.</p>
   * @public
   */
  VisualContentAltText?: string | undefined;
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
  FieldId?: string | undefined;

  /**
   * <p>The data path of the pivot table's header. Used to set the collapse state.</p>
   * @public
   */
  FieldDataPathValues?: DataPathValue[] | undefined;
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
  State?: PivotTableFieldCollapseState | undefined;
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
  Width?: string | undefined;
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
  CustomLabel?: string | undefined;

  /**
   * <p>The visibility of the pivot table field.</p>
   * @public
   */
  Visibility?: Visibility | undefined;
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
  SelectedFieldOptions?: PivotTableFieldOption[] | undefined;

  /**
   * <p>The data path options for the pivot table field options.</p>
   * @public
   */
  DataPathOptions?: PivotTableDataPathOption[] | undefined;

  /**
   * <p>The collapse state options for the pivot table field options.</p>
   * @public
   */
  CollapseStateOptions?: PivotTableFieldCollapseStateOption[] | undefined;
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
  Rows?: DimensionField[] | undefined;

  /**
   * <p>The columns field well for a pivot table. Values are grouped by columns fields.</p>
   * @public
   */
  Columns?: DimensionField[] | undefined;

  /**
   * <p>The values field well for a pivot table. Values are aggregated based on rows and columns fields.</p>
   * @public
   */
  Values?: MeasureField[] | undefined;
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
  PivotTableAggregatedFieldWells?: PivotTableAggregatedFieldWells | undefined;
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
  VerticalOverflowVisibility?: Visibility | undefined;

  /**
   * <p>The visibility of the repeating header rows on each page.</p>
   * @public
   */
  OverflowColumnHeaderVisibility?: Visibility | undefined;
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
  Field?: FieldSort | undefined;

  /**
   * <p>The column sort (field id, direction) for the pivot table sort by options.</p>
   * @public
   */
  Column?: ColumnSort | undefined;

  /**
   * <p>The data path sort (data path value, direction) for the pivot table sort by options.</p>
   * @public
   */
  DataPath?: DataPathSort | undefined;
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
  FieldSortOptions?: PivotFieldSortOptions[] | undefined;
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
  Color?: string | undefined;

  /**
   * <p>The thickness of a table border.</p>
   * @public
   */
  Thickness?: number | undefined;

  /**
   * <p>The style (none, solid) of a table border.</p>
   * @public
   */
  Style?: TableBorderStyle | undefined;
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
  InnerVertical?: TableBorderOptions | undefined;

  /**
   * <p>The table border options of the inner horizontal border.</p>
   * @public
   */
  InnerHorizontal?: TableBorderOptions | undefined;

  /**
   * <p>The table border options of the left border.</p>
   * @public
   */
  Left?: TableBorderOptions | undefined;

  /**
   * <p>The table border options of the right border.</p>
   * @public
   */
  Right?: TableBorderOptions | undefined;

  /**
   * <p>The table border options of the top border.</p>
   * @public
   */
  Top?: TableBorderOptions | undefined;

  /**
   * <p>The table border options of the bottom border.</p>
   * @public
   */
  Bottom?: TableBorderOptions | undefined;
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
  UniformBorder?: TableBorderOptions | undefined;

  /**
   * <p>Determines the options for side specific border.</p>
   * @public
   */
  SideSpecificBorder?: TableSideBorderOptions | undefined;
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
  Visibility?: Visibility | undefined;

  /**
   * <p>The font configuration of the table cells.</p>
   * @public
   */
  FontConfiguration?: FontConfiguration | undefined;

  /**
   * <p>The text wrap (none, wrap) for the table cells.</p>
   * @public
   */
  TextWrap?: TextWrap | undefined;

  /**
   * <p>The horizontal text alignment (left, center, right, auto) for the table cells.</p>
   * @public
   */
  HorizontalTextAlignment?: HorizontalTextAlignment | undefined;

  /**
   * <p>The vertical text alignment (top, middle, bottom) for the table cells.</p>
   * @public
   */
  VerticalTextAlignment?: VerticalTextAlignment | undefined;

  /**
   * <p>The background color for the table cells.</p>
   * @public
   */
  BackgroundColor?: string | undefined;

  /**
   * <p>The height color for the table cells.</p>
   * @public
   */
  Height?: number | undefined;

  /**
   * <p>The borders for the table cells.</p>
   * @public
   */
  Border?: GlobalTableBorderOptions | undefined;
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
  Status?: WidgetStatus | undefined;

  /**
   * <p>Determines the list of row alternate colors.</p>
   * @public
   */
  RowAlternateColors?: string[] | undefined;

  /**
   * <p>The primary background color options for alternate rows.</p>
   * @public
   */
  UsePrimaryBackgroundColor?: WidgetStatus | undefined;
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
  Visibility?: Visibility | undefined;

  /**
   * <p>The custom label string for the rows label.</p>
   * @public
   */
  CustomLabel?: string | undefined;
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
  MetricPlacement?: PivotTableMetricPlacement | undefined;

  /**
   * <p>The visibility of the single metric options.</p>
   * @public
   */
  SingleMetricVisibility?: Visibility | undefined;

  /**
   * <p>The visibility of the column names.</p>
   * @public
   */
  ColumnNamesVisibility?: Visibility | undefined;

  /**
   * <p>Determines the visibility of the pivot table.</p>
   * @public
   */
  ToggleButtonsVisibility?: Visibility | undefined;

  /**
   * <p>The table cell style of the column header.</p>
   * @public
   */
  ColumnHeaderStyle?: TableCellStyle | undefined;

  /**
   * <p>The table cell style of the row headers.</p>
   * @public
   */
  RowHeaderStyle?: TableCellStyle | undefined;

  /**
   * <p>The table cell style of cells.</p>
   * @public
   */
  CellStyle?: TableCellStyle | undefined;

  /**
   * <p>The table cell style of row field names.</p>
   * @public
   */
  RowFieldNamesStyle?: TableCellStyle | undefined;

  /**
   * <p>The row alternate color options (widget status, row alternate colors).</p>
   * @public
   */
  RowAlternateColorOptions?: RowAlternateColorOptions | undefined;

  /**
   * <p>The visibility setting of a pivot table's collapsed row dimension fields. If the value of this structure is <code>HIDDEN</code>, all collapsed columns in a pivot table are automatically hidden. The default value is <code>VISIBLE</code>.</p>
   * @public
   */
  CollapsedRowDimensionsVisibility?: Visibility | undefined;

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
  RowsLayout?: PivotTableRowsLayout | undefined;

  /**
   * <p>The options for the label that is located above the row headers. This option is only applicable when <code>RowsLayout</code> is set to <code>HIERARCHY</code>.</p>
   * @public
   */
  RowsLabelOptions?: PivotTableRowsLabelOptions | undefined;

  /**
   * <p>The default cell width of the pivot table.</p>
   * @public
   */
  DefaultCellWidth?: string | undefined;
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
  FieldId?: string | undefined;
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
  TotalsVisibility?: Visibility | undefined;

  /**
   * <p>The custom label string for the subtotal cells.</p>
   * @public
   */
  CustomLabel?: string | undefined;

  /**
   * <p>The field level (all, custom, last) for the subtotal cells.</p>
   * @public
   */
  FieldLevel?: PivotTableSubtotalLevel | undefined;

  /**
   * <p>The optional configuration of subtotal cells.</p>
   * @public
   */
  FieldLevelOptions?: PivotTableFieldSubtotalOptions[] | undefined;

  /**
   * <p>The cell styling options for the subtotal cells.</p>
   * @public
   */
  TotalCellStyle?: TableCellStyle | undefined;

  /**
   * <p>The cell styling options for the subtotals of value cells.</p>
   * @public
   */
  ValueCellStyle?: TableCellStyle | undefined;

  /**
   * <p>The cell styling options for the subtotals of header cells.</p>
   * @public
   */
  MetricHeaderCellStyle?: TableCellStyle | undefined;

  /**
   * <p>The style targets options for subtotals.</p>
   * @public
   */
  StyleTargets?: TableStyleTarget[] | undefined;
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
  SimpleTotalAggregationFunction?: SimpleTotalAggregationFunction | undefined;
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
  TotalsVisibility?: Visibility | undefined;

  /**
   * <p>The placement (start, end) for the total cells.</p>
   * @public
   */
  Placement?: TableTotalsPlacement | undefined;

  /**
   * <p>The scroll status (pinned, scrolled) for the total cells.</p>
   * @public
   */
  ScrollStatus?: TableTotalsScrollStatus | undefined;

  /**
   * <p>The custom label string for the total cells.</p>
   * @public
   */
  CustomLabel?: string | undefined;

  /**
   * <p>The cell styling options for the total cells.</p>
   * @public
   */
  TotalCellStyle?: TableCellStyle | undefined;

  /**
   * <p>The cell styling options for the totals of value cells.</p>
   * @public
   */
  ValueCellStyle?: TableCellStyle | undefined;

  /**
   * <p>The cell styling options for the total of header cells.</p>
   * @public
   */
  MetricHeaderCellStyle?: TableCellStyle | undefined;

  /**
   * <p>The total aggregation options for each value field.</p>
   * @public
   */
  TotalAggregationOptions?: TotalAggregationOption[] | undefined;
}
