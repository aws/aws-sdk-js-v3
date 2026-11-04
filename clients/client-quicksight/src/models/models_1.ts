// smithy-typescript generated code
import type {
  ArcThickness,
  ArcThicknessOptions,
  AxisBinding,
  BarChartOrientation,
  BarsArrangement,
  BaseMapStyleType,
  BoxPlotFillStyle,
  ColorFillType,
  ComparisonMethod,
  ConditionalFormattingIconDisplayOption,
  ConditionalFormattingIconSetType,
  CustomContentImageScalingConfiguration,
  CustomContentType,
  DashboardCustomizationStatus,
  DataLabelPosition,
  ForecastComputationSeasonality,
  FunnelChartMeasureDataLabelStyle,
  GeospatialColorState,
  GeospatialLayerType,
  GeospatialMapNavigation,
  GeospatialSelectedPointStyle,
  HistogramBinType,
  HorizontalTextAlignment,
  Icon,
  KPISparklineType,
  KPIVisualStandardLayoutType,
  LayerCustomActionTrigger,
  LineChartLineStyle,
  LineChartMarkerShape,
  LineChartType,
  LineInterpolation,
  MapZoomMode,
  MaximumMinimumComputationType,
  MissingDataTreatmentOption,
  OtherCategories,
  PanelBorderStyle,
  PivotTableConditionalFormattingScopeRole,
  PivotTableDataPathType,
  PivotTableFieldCollapseState,
  PivotTableMetricPlacement,
  PivotTableRowsLayout,
  PivotTableSubtotalLevel,
  PluginVisualAxisName,
  PrimaryValueDisplayType,
  RadarChartAxesRangeScale,
  RadarChartShape,
  SelectedTooltipType,
  SimpleTotalAggregationFunction,
  SingleYAxisOption,
  SmallMultiplesAxisPlacement,
  SmallMultiplesAxisScale,
  SortDirection,
  SparklineAxisBehavior,
  SparklineVisualType,
  StyledCellType,
  TableBorderStyle,
  TableCellImageScalingConfiguration,
  TableFieldIconSetType,
  TableOrientation,
  TableTotalsPlacement,
  TableTotalsScrollStatus,
  TextWrap,
  TimeGranularity,
  TooltipTarget,
  TooltipTitleType,
  TopBottomComputationType,
  TopBottomSortOrder,
  TransposedColumnType,
  URLTargetConfiguration,
  VerticalTextAlignment,
  Visibility,
  WidgetStatus,
} from "./enums";
import type {
  AggregationFunction,
  AxisDisplayOptions,
  BarChartDefaultSeriesSettings,
  BarChartFieldWells,
  BarSeriesItem,
  BorderSettings,
  ChartAxisLabelOptions,
  ColumnIdentifier,
  ColumnSort,
  ContributionAnalysisDefault,
  CustomActionFilterOperation,
  CustomActionNavigationOperation,
  CustomActionSetParametersOperation,
  CustomActionURLOperation,
  DataLabelOptions,
  DecalSettings,
  DimensionField,
  FontConfiguration,
  FormatConfiguration,
  LegendOptions,
  MeasureField,
  NumberDisplayFormatConfiguration,
  PercentageDisplayFormatConfiguration,
  ReferenceLine,
  VisualCustomAction,
  VisualInteractionOptions,
} from "./models_0";

/**
 * The options that determine the title styles for each small multiples panel.
 *
 * @public
 */
export interface PanelTitleOptions {
  /**
   * Determines whether or not panel titles are displayed.
   *
   * @public
   */
  Visibility?: Visibility | undefined;

  /**
   * Configures the display properties of the given text.
   *
   * @public
   */
  FontConfiguration?: FontConfiguration | undefined;

  /**
   * Sets the horizontal text alignment of the title within each panel.
   *
   * @public
   */
  HorizontalTextAlignment?: HorizontalTextAlignment | undefined;
}

/**
 * A collection of options that configure how each panel displays in a small multiples chart.
 *
 * @public
 */
export interface PanelConfiguration {
  /**
   * Configures the title display within each small multiples panel.
   *
   * @public
   */
  Title?: PanelTitleOptions | undefined;

  /**
   * Determines whether or not each panel displays a border.
   *
   * @public
   */
  BorderVisibility?: Visibility | undefined;

  /**
   * Sets the line thickness of panel borders.
   *
   * @public
   */
  BorderThickness?: string | undefined;

  /**
   * Sets the line style of panel borders.
   *
   * @public
   */
  BorderStyle?: PanelBorderStyle | undefined;

  /**
   * Sets the line color of panel borders.
   *
   * @public
   */
  BorderColor?: string | undefined;

  /**
   * Determines whether or not negative space between sibling panels is rendered.
   *
   * @public
   */
  GutterVisibility?: Visibility | undefined;

  /**
   * Sets the total amount of negative space to display between sibling panels.
   *
   * @public
   */
  GutterSpacing?: string | undefined;

  /**
   * Determines whether or not a background for each small multiples panel is rendered.
   *
   * @public
   */
  BackgroundVisibility?: Visibility | undefined;

  /**
   * Sets the background color for each panel.
   *
   * @public
   */
  BackgroundColor?: string | undefined;
}

/**
 * Configures the properties of a chart's axes that are used by small multiples panels.
 *
 * @public
 */
export interface SmallMultiplesAxisProperties {
  /**
   * Determines whether scale of the axes are shared or independent. The default value is `SHARED`.
   *
   * @public
   */
  Scale?: SmallMultiplesAxisScale | undefined;

  /**
   * Defines the placement of the axis. By default, axes are rendered `OUTSIDE` of the panels. Axes with `INDEPENDENT` scale are rendered `INSIDE` the panels.
   *
   * @public
   */
  Placement?: SmallMultiplesAxisPlacement | undefined;
}

/**
 * Options that determine the layout and display options of a chart's small multiples.
 *
 * @public
 */
export interface SmallMultiplesOptions {
  /**
   * Sets the maximum number of visible rows to display in the grid of small multiples panels.
   *
   * The default value is `Auto`, which automatically adjusts the rows in the grid to fit the overall layout and size of the given chart.
   *
   * @public
   */
  MaxVisibleRows?: number | undefined;

  /**
   * Sets the maximum number of visible columns to display in the grid of small multiples panels.
   *
   * The default is `Auto`, which automatically adjusts the columns in the grid to fit the overall layout and size of the given chart.
   *
   * @public
   */
  MaxVisibleColumns?: number | undefined;

  /**
   * Configures the display options for each small multiples panel.
   *
   * @public
   */
  PanelConfiguration?: PanelConfiguration | undefined;

  /**
   * The properties of a small multiples X axis.
   *
   * @public
   */
  XAxis?: SmallMultiplesAxisProperties | undefined;

  /**
   * The properties of a small multiples Y axis.
   *
   * @public
   */
  YAxis?: SmallMultiplesAxisProperties | undefined;
}

/**
 * The limit configuration of the visual display for an axis.
 *
 * @public
 */
export interface ItemsLimitConfiguration {
  /**
   * The limit on how many items of a field are showed in the chart. For example, the number of slices that are displayed in a pie chart.
   *
   * @public
   */
  ItemsLimit?: number | undefined;

  /**
   * The `Show other` of an axis in the chart. Choose one of the following options:
   *
   * - `INCLUDE`
   * - `EXCLUDE`
   *
   * @public
   */
  OtherCategories?: OtherCategories | undefined;
}

/**
 * The sort configuration for a field in a field well.
 *
 * @public
 */
export interface FieldSort {
  /**
   * The sort configuration target field.
   *
   * @public
   */
  FieldId: string | undefined;

  /**
   * The sort direction. Choose one of the following options:
   *
   * - `ASC`: Ascending
   * - `DESC`: Descending
   *
   * @public
   */
  Direction: SortDirection | undefined;
}

/**
 * The field sort options in a chart configuration.
 *
 * @public
 */
export interface FieldSortOptions {
  /**
   * The sort configuration for a field in a field well.
   *
   * @public
   */
  FieldSort?: FieldSort | undefined;

  /**
   * The sort configuration for a column that is not used in a field well.
   *
   * @public
   */
  ColumnSort?: ColumnSort | undefined;
}

/**
 * sort-configuration-description
 *
 * @public
 */
export interface BarChartSortConfiguration {
  /**
   * The sort configuration of category fields.
   *
   * @public
   */
  CategorySort?: FieldSortOptions[] | undefined;

  /**
   * The limit on the number of categories displayed in a bar chart.
   *
   * @public
   */
  CategoryItemsLimit?: ItemsLimitConfiguration | undefined;

  /**
   * The sort configuration of color fields in a bar chart.
   *
   * @public
   */
  ColorSort?: FieldSortOptions[] | undefined;

  /**
   * The limit on the number of values displayed in a bar chart.
   *
   * @public
   */
  ColorItemsLimit?: ItemsLimitConfiguration | undefined;

  /**
   * The sort configuration of the small multiples field.
   *
   * @public
   */
  SmallMultiplesSort?: FieldSortOptions[] | undefined;

  /**
   * The limit on the number of small multiples panels that are displayed.
   *
   * @public
   */
  SmallMultiplesLimitConfiguration?: ItemsLimitConfiguration | undefined;
}

/**
 * The tooltip item for the columns that are not part of a field well.
 *
 * @public
 */
export interface ColumnTooltipItem {
  /**
   * The target column of the tooltip item.
   *
   * @public
   */
  Column: ColumnIdentifier | undefined;

  /**
   * The label of the tooltip item.
   *
   * @public
   */
  Label?: string | undefined;

  /**
   * The visibility of the tooltip item.
   *
   * @public
   */
  Visibility?: Visibility | undefined;

  /**
   * The aggregation function of the column tooltip item.
   *
   * @public
   */
  Aggregation?: AggregationFunction | undefined;

  /**
   * Determines the target of the column tooltip item in a combo chart visual.
   *
   * @public
   */
  TooltipTarget?: TooltipTarget | undefined;
}

/**
 * The tooltip item for the fields.
 *
 * @public
 */
export interface FieldTooltipItem {
  /**
   * The unique ID of the field that is targeted by the tooltip.
   *
   * @public
   */
  FieldId: string | undefined;

  /**
   * The label of the tooltip item.
   *
   * @public
   */
  Label?: string | undefined;

  /**
   * The visibility of the tooltip item.
   *
   * @public
   */
  Visibility?: Visibility | undefined;

  /**
   * Determines the target of the field tooltip item in a combo chart visual.
   *
   * @public
   */
  TooltipTarget?: TooltipTarget | undefined;
}

/**
 * The tooltip.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 *
 * @public
 */
export interface TooltipItem {
  /**
   * The tooltip item for the fields.
   *
   * @public
   */
  FieldTooltipItem?: FieldTooltipItem | undefined;

  /**
   * The tooltip item for the columns that are not part of a field well.
   *
   * @public
   */
  ColumnTooltipItem?: ColumnTooltipItem | undefined;
}

/**
 * The setup for the detailed tooltip.
 *
 * @public
 */
export interface FieldBasedTooltip {
  /**
   * The visibility of `Show aggregations`.
   *
   * @public
   */
  AggregationVisibility?: Visibility | undefined;

  /**
   * The type for the >tooltip title. Choose one of the following options:
   *
   * - `NONE`: Doesn't use the primary value as the title.
   * - `PRIMARY_VALUE`: Uses primary value as the title.
   *
   * @public
   */
  TooltipTitleType?: TooltipTitleType | undefined;

  /**
   * The fields configuration in the tooltip.
   *
   * @public
   */
  TooltipFields?: TooltipItem[] | undefined;
}

/**
 * The configuration of the sheet tooltip.
 *
 * @public
 */
export interface SheetTooltip {
  /**
   * The sheet ID of the tooltip sheet that is used by the tooltip.
   *
   * @public
   */
  SheetId?: string | undefined;
}

/**
 * The display options for the visual tooltip.
 *
 * @public
 */
export interface TooltipOptions {
  /**
   * Determines whether or not the tooltip is visible.
   *
   * @public
   */
  TooltipVisibility?: Visibility | undefined;

  /**
   * The selected type for the tooltip. Choose one of the following options:
   *
   * - `BASIC`: A basic tooltip.
   * - `DETAILED`: A detailed tooltip.
   *
   * @public
   */
  SelectedTooltipType?: SelectedTooltipType | undefined;

  /**
   * The setup for the detailed tooltip. The tooltip setup is always saved. The display type is decided based on the tooltip type.
   *
   * @public
   */
  FieldBasedTooltip?: FieldBasedTooltip | undefined;

  /**
   * The configuration of the sheet tooltip.
   *
   * @public
   */
  SheetTooltip?: SheetTooltip | undefined;
}

/**
 * The type of the data path value.
 *
 * @public
 */
export interface DataPathType {
  /**
   * The type of data path value utilized in a pivot table. Choose one of the following options:
   *
   * - `HIERARCHY_ROWS_LAYOUT_COLUMN` - The type of data path for the rows layout column, when `RowsLayout` is set to `HIERARCHY`.
   * - `MULTIPLE_ROW_METRICS_COLUMN` - The type of data path for the metric column when the row is set to Metric Placement.
   * - `EMPTY_COLUMN_HEADER` - The type of data path for the column with empty column header, when there is no field in `ColumnsFieldWell` and the row is set to Metric Placement.
   * - `COUNT_METRIC_COLUMN` - The type of data path for the column with `COUNT` as the metric, when there is no field in the `ValuesFieldWell`.
   *
   * @public
   */
  PivotTableDataPathType?: PivotTableDataPathType | undefined;
}

/**
 * The data path that needs to be sorted.
 *
 * @public
 */
export interface DataPathValue {
  /**
   * The field ID of the field that needs to be sorted.
   *
   * @public
   */
  FieldId?: string | undefined;

  /**
   * The actual value of the field that needs to be sorted.
   *
   * @public
   */
  FieldValue?: string | undefined;

  /**
   * The type configuration of the field.
   *
   * @public
   */
  DataPathType?: DataPathType | undefined;
}

/**
 * The color map that determines the color options for a particular element.
 *
 * @public
 */
export interface DataPathColor {
  /**
   * The element that the color needs to be applied to.
   *
   * @public
   */
  Element: DataPathValue | undefined;

  /**
   * The color that needs to be applied to the element.
   *
   * @public
   */
  Color: string | undefined;

  /**
   * The time granularity of the field that the color needs to be applied to.
   *
   * @public
   */
  TimeGranularity?: TimeGranularity | undefined;
}

/**
 * The visual display options for the visual palette.
 *
 * @public
 */
export interface VisualPalette {
  /**
   * The chart color options for the visual palette.
   *
   * @public
   */
  ChartColor?: string | undefined;

  /**
   * The color map options for the visual palette.
   *
   * @public
   */
  ColorMap?: DataPathColor[] | undefined;
}

/**
 * The configuration of a `BarChartVisual`.
 *
 * @public
 */
export interface BarChartConfiguration {
  /**
   * The field wells of the visual.
   *
   * @public
   */
  FieldWells?: BarChartFieldWells | undefined;

  /**
   * The sort configuration of a `BarChartVisual`.
   *
   * @public
   */
  SortConfiguration?: BarChartSortConfiguration | undefined;

  /**
   * The orientation of the bars in a bar chart visual. There are two valid values in this structure:
   *
   * - `HORIZONTAL`: Used for charts that have horizontal bars. Visuals that use this value are horizontal bar charts, horizontal stacked bar charts, and horizontal stacked 100% bar charts.
   * - `VERTICAL`: Used for charts that have vertical bars. Visuals that use this value are vertical bar charts, vertical stacked bar charts, and vertical stacked 100% bar charts.
   *
   * @public
   */
  Orientation?: BarChartOrientation | undefined;

  /**
   * Determines the arrangement of the bars. The orientation and arrangement of bars determine the type of bar that is used in the visual.
   *
   * @public
   */
  BarsArrangement?: BarsArrangement | undefined;

  /**
   * The palette (chart color) display setup of the visual.
   *
   * @public
   */
  VisualPalette?: VisualPalette | undefined;

  /**
   * The small multiples setup for the visual.
   *
   * @public
   */
  SmallMultiplesOptions?: SmallMultiplesOptions | undefined;

  /**
   * The label display options (grid line, range, scale, axis step) for bar chart category.
   *
   * @public
   */
  CategoryAxis?: AxisDisplayOptions | undefined;

  /**
   * The label options (label text, label visibility and sort icon visibility) for a bar chart.
   *
   * @public
   */
  CategoryLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * The label display options (grid line, range, scale, axis step) for a bar chart value.
   *
   * @public
   */
  ValueAxis?: AxisDisplayOptions | undefined;

  /**
   * The label options (label text, label visibility and sort icon visibility) for a bar chart value.
   *
   * @public
   */
  ValueLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * The label options (label text, label visibility and sort icon visibility) for a color that is used in a bar chart.
   *
   * @public
   */
  ColorLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * The options that determine the default presentation of all bar series in `BarChartVisual`.
   *
   * @public
   */
  DefaultSeriesSettings?: BarChartDefaultSeriesSettings | undefined;

  /**
   * The series item configuration of a `BarChartVisual`.
   *
   * @public
   */
  Series?: BarSeriesItem[] | undefined;

  /**
   * The legend display setup of the visual.
   *
   * @public
   */
  Legend?: LegendOptions | undefined;

  /**
   * The options that determine if visual data labels are displayed.
   *
   * @public
   */
  DataLabels?: DataLabelOptions | undefined;

  /**
   * The tooltip display setup of the visual.
   *
   * @public
   */
  Tooltip?: TooltipOptions | undefined;

  /**
   * The reference line setup of the visual.
   *
   * @public
   */
  ReferenceLines?: ReferenceLine[] | undefined;

  /**
   * The contribution analysis (anomaly configuration) setup of the visual.
   *
   * @public
   */
  ContributionAnalysisDefaults?: ContributionAnalysisDefault[] | undefined;

  /**
   * The general visual interactions setup for a visual.
   *
   * @public
   */
  Interactions?: VisualInteractionOptions | undefined;
}

/**
 * The category drill down filter.
 *
 * @public
 */
export interface CategoryDrillDownFilter {
  /**
   * The column that the filter is applied to.
   *
   * @public
   */
  Column: ColumnIdentifier | undefined;

  /**
   * A list of the string inputs that are the values of the category drill down filter.
   *
   * @public
   */
  CategoryValues: string[] | undefined;
}

/**
 * The numeric equality type drill down filter.
 *
 * @public
 */
export interface NumericEqualityDrillDownFilter {
  /**
   * The column that the filter is applied to.
   *
   * @public
   */
  Column: ColumnIdentifier | undefined;

  /**
   * The value of the double input numeric drill down filter.
   *
   * @public
   */
  Value: number | undefined;
}

/**
 * The time range drill down filter.
 *
 * @public
 */
export interface TimeRangeDrillDownFilter {
  /**
   * The column that the filter is applied to.
   *
   * @public
   */
  Column: ColumnIdentifier | undefined;

  /**
   * The minimum value for the filter value range.
   *
   * @public
   */
  RangeMinimum: Date | undefined;

  /**
   * The maximum value for the filter value range.
   *
   * @public
   */
  RangeMaximum: Date | undefined;

  /**
   * The level of time precision that is used to aggregate `DateTime` values.
   *
   * @public
   */
  TimeGranularity: TimeGranularity | undefined;
}

/**
 * The drill down filter for the column hierarchies.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 *
 * @public
 */
export interface DrillDownFilter {
  /**
   * The numeric equality type drill down filter. This filter is used for number type columns.
   *
   * @public
   */
  NumericEqualityFilter?: NumericEqualityDrillDownFilter | undefined;

  /**
   * The category type drill down filter. This filter is used for string type columns.
   *
   * @public
   */
  CategoryFilter?: CategoryDrillDownFilter | undefined;

  /**
   * The time range drill down filter. This filter is used for date time columns.
   *
   * @public
   */
  TimeRangeFilter?: TimeRangeDrillDownFilter | undefined;
}

/**
 * The option that determines the hierarchy of any `DateTime` fields.
 *
 * @public
 */
export interface DateTimeHierarchy {
  /**
   * The hierarchy ID of the `DateTime` hierarchy.
   *
   * @public
   */
  HierarchyId: string | undefined;

  /**
   * The option that determines the drill down filters for the `DateTime` hierarchy.
   *
   * @public
   */
  DrillDownFilters?: DrillDownFilter[] | undefined;
}

/**
 * The option that determines the hierarchy of the fields that are built within a visual's field wells. These fields can't be duplicated to other visuals.
 *
 * @public
 */
export interface ExplicitHierarchy {
  /**
   * The hierarchy ID of the explicit hierarchy.
   *
   * @public
   */
  HierarchyId: string | undefined;

  /**
   * The list of columns that define the explicit hierarchy.
   *
   * @public
   */
  Columns: ColumnIdentifier[] | undefined;

  /**
   * The option that determines the drill down filters for the explicit hierarchy.
   *
   * @public
   */
  DrillDownFilters?: DrillDownFilter[] | undefined;
}

/**
 * The option that determines the hierarchy of the fields that are defined during data preparation. These fields are available to use in any analysis that uses the data source.
 *
 * @public
 */
export interface PredefinedHierarchy {
  /**
   * The hierarchy ID of the predefined hierarchy.
   *
   * @public
   */
  HierarchyId: string | undefined;

  /**
   * The list of columns that define the predefined hierarchy.
   *
   * @public
   */
  Columns: ColumnIdentifier[] | undefined;

  /**
   * The option that determines the drill down filters for the predefined hierarchy.
   *
   * @public
   */
  DrillDownFilters?: DrillDownFilter[] | undefined;
}

/**
 * The option that determines the hierarchy of the fields for a visual element.
 *
 * @public
 */
export interface ColumnHierarchy {
  /**
   * The option that determines the hierarchy of the fields that are built within a visual's field wells. These fields can't be duplicated to other visuals.
   *
   * @public
   */
  ExplicitHierarchy?: ExplicitHierarchy | undefined;

  /**
   * The option that determines the hierarchy of any `DateTime` fields.
   *
   * @public
   */
  DateTimeHierarchy?: DateTimeHierarchy | undefined;

  /**
   * The option that determines the hierarchy of the fields that are defined during data preparation. These fields are available to use in any analysis that uses the data source.
   *
   * @public
   */
  PredefinedHierarchy?: PredefinedHierarchy | undefined;
}

/**
 * The text format for a subtitle.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 *
 * @public
 */
export interface LongFormatText {
  /**
   * Plain text format.
   *
   * @public
   */
  PlainText?: string | undefined;

  /**
   * Rich text. Examples of rich text include bold, underline, and italics.
   *
   * @public
   */
  RichText?: string | undefined;
}

/**
 * The subtitle label options for a visual.
 *
 * @public
 */
export interface VisualSubtitleLabelOptions {
  /**
   * The visibility of the subtitle label.
   *
   * @public
   */
  Visibility?: Visibility | undefined;

  /**
   * The long text format of the subtitle label, such as plain text or rich text.
   *
   * @public
   */
  FormatText?: LongFormatText | undefined;
}

/**
 * The text format for the title.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 *
 * @public
 */
export interface ShortFormatText {
  /**
   * Plain text format.
   *
   * @public
   */
  PlainText?: string | undefined;

  /**
   * Rich text. Examples of rich text include bold, underline, and italics.
   *
   * @public
   */
  RichText?: string | undefined;
}

/**
 * The title label options for a visual.
 *
 * @public
 */
export interface VisualTitleLabelOptions {
  /**
   * The visibility of the title label.
   *
   * @public
   */
  Visibility?: Visibility | undefined;

  /**
   * The short text format of the title label, such as plain text or rich text.
   *
   * @public
   */
  FormatText?: ShortFormatText | undefined;
}

/**
 * A bar chart.
 *
 * The `BarChartVisual` structure describes a visual that is a member of the bar chart family. The following charts can be described using this structure:
 *
 * - Horizontal bar chart
 * - Vertical bar chart
 * - Horizontal stacked bar chart
 * - Vertical stacked bar chart
 * - Horizontal stacked 100% bar chart
 * - Vertical stacked 100% bar chart
 *
 * For more information, see [Using bar charts](https://docs.aws.amazon.com/quicksight/latest/user/bar-charts.html) in the *Amazon Quick Suite User Guide*.
 *
 * @public
 */
export interface BarChartVisual {
  /**
   * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.
   *
   * @public
   */
  VisualId: string | undefined;

  /**
   * The title that is displayed on the visual.
   *
   * @public
   */
  Title?: VisualTitleLabelOptions | undefined;

  /**
   * The subtitle that is displayed on the visual.
   *
   * @public
   */
  Subtitle?: VisualSubtitleLabelOptions | undefined;

  /**
   * The configuration settings of the visual.
   *
   * @public
   */
  ChartConfiguration?: BarChartConfiguration | undefined;

  /**
   * The list of custom actions that are configured for a visual.
   *
   * @public
   */
  Actions?: VisualCustomAction[] | undefined;

  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * @public
   */
  ColumnHierarchies?: ColumnHierarchy[] | undefined;

  /**
   * The alt text for the visual.
   *
   * @public
   */
  VisualContentAltText?: string | undefined;
}

/**
 * The style options of the box plot.
 *
 * @public
 */
export interface BoxPlotStyleOptions {
  /**
   * The fill styles (solid, transparent) of the box plot.
   *
   * @public
   */
  FillStyle?: BoxPlotFillStyle | undefined;
}

/**
 * The options of a box plot visual.
 *
 * @public
 */
export interface BoxPlotOptions {
  /**
   * The style options of the box plot.
   *
   * @public
   */
  StyleOptions?: BoxPlotStyleOptions | undefined;

  /**
   * Determines the visibility of the outlier in a box plot.
   *
   * @public
   */
  OutlierVisibility?: Visibility | undefined;

  /**
   * Determines the visibility of all data points of the box plot.
   *
   * @public
   */
  AllDataPointsVisibility?: Visibility | undefined;
}

/**
 * The aggregated field well for a box plot.
 *
 * @public
 */
export interface BoxPlotAggregatedFieldWells {
  /**
   * The group by field well of a box plot chart. Values are grouped based on group by fields.
   *
   * @public
   */
  GroupBy?: DimensionField[] | undefined;

  /**
   * The value field well of a box plot chart. Values are aggregated based on group by fields.
   *
   * @public
   */
  Values?: MeasureField[] | undefined;
}

/**
 * The field wells of a `BoxPlotVisual`.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 *
 * @public
 */
export interface BoxPlotFieldWells {
  /**
   * The aggregated field wells of a box plot.
   *
   * @public
   */
  BoxPlotAggregatedFieldWells?: BoxPlotAggregatedFieldWells | undefined;
}

/**
 * The pagination configuration for a table visual or boxplot.
 *
 * @public
 */
export interface PaginationConfiguration {
  /**
   * Indicates how many items render in one page.
   *
   * @public
   */
  PageSize: number | undefined;

  /**
   * Indicates the page number.
   *
   * @public
   */
  PageNumber: number | undefined;
}

/**
 * The sort configuration of a `BoxPlotVisual`.
 *
 * @public
 */
export interface BoxPlotSortConfiguration {
  /**
   * The sort configuration of a group by fields.
   *
   * @public
   */
  CategorySort?: FieldSortOptions[] | undefined;

  /**
   * The pagination configuration of a table visual or box plot.
   *
   * @public
   */
  PaginationConfiguration?: PaginationConfiguration | undefined;
}

/**
 * The configuration of a `BoxPlotVisual`.
 *
 * @public
 */
export interface BoxPlotChartConfiguration {
  /**
   * The field wells of the visual.
   *
   * @public
   */
  FieldWells?: BoxPlotFieldWells | undefined;

  /**
   * The sort configuration of a `BoxPlotVisual`.
   *
   * @public
   */
  SortConfiguration?: BoxPlotSortConfiguration | undefined;

  /**
   * The box plot chart options for a box plot visual
   *
   * @public
   */
  BoxPlotOptions?: BoxPlotOptions | undefined;

  /**
   * The label display options (grid line, range, scale, axis step) of a box plot category.
   *
   * @public
   */
  CategoryAxis?: AxisDisplayOptions | undefined;

  /**
   * The label options (label text, label visibility and sort Icon visibility) of a box plot category.
   *
   * @public
   */
  CategoryLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * The label display options (grid line, range, scale, axis step) of a box plot category.
   *
   * @public
   */
  PrimaryYAxisDisplayOptions?: AxisDisplayOptions | undefined;

  /**
   * The label options (label text, label visibility and sort icon visibility) of a box plot value.
   *
   * @public
   */
  PrimaryYAxisLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * The options for the legend setup of a visual.
   *
   * @public
   */
  Legend?: LegendOptions | undefined;

  /**
   * The tooltip display setup of the visual.
   *
   * @public
   */
  Tooltip?: TooltipOptions | undefined;

  /**
   * The reference line setup of the visual.
   *
   * @public
   */
  ReferenceLines?: ReferenceLine[] | undefined;

  /**
   * The palette (chart color) display setup of the visual.
   *
   * @public
   */
  VisualPalette?: VisualPalette | undefined;

  /**
   * The general visual interactions setup for a visual.
   *
   * @public
   */
  Interactions?: VisualInteractionOptions | undefined;
}

/**
 * A box plot.
 *
 * For more information, see [Using box plots](https://docs.aws.amazon.com/quicksight/latest/user/box-plots.html) in the *Amazon Quick Suite User Guide*.
 *
 * @public
 */
export interface BoxPlotVisual {
  /**
   * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers..
   *
   * @public
   */
  VisualId: string | undefined;

  /**
   * The title that is displayed on the visual.
   *
   * @public
   */
  Title?: VisualTitleLabelOptions | undefined;

  /**
   * The subtitle that is displayed on the visual.
   *
   * @public
   */
  Subtitle?: VisualSubtitleLabelOptions | undefined;

  /**
   * The configuration settings of the visual.
   *
   * @public
   */
  ChartConfiguration?: BoxPlotChartConfiguration | undefined;

  /**
   * The list of custom actions that are configured for a visual.
   *
   * @public
   */
  Actions?: VisualCustomAction[] | undefined;

  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * @public
   */
  ColumnHierarchies?: ColumnHierarchy[] | undefined;

  /**
   * The alt text for the visual.
   *
   * @public
   */
  VisualContentAltText?: string | undefined;
}

/**
 * Line styles options for a line series in `LineChartVisual`.
 *
 * @public
 */
export interface LineChartLineStyleSettings {
  /**
   * Configuration option that determines whether to show the line for the series.
   *
   * @public
   */
  LineVisibility?: Visibility | undefined;

  /**
   * Interpolation style for line series.
   *
   * - `LINEAR`: Show as default, linear style.
   * - `SMOOTH`: Show as a smooth curve.
   * - `STEPPED`: Show steps in line.
   *
   * @public
   */
  LineInterpolation?: LineInterpolation | undefined;

  /**
   * Line style for line series.
   *
   * - `SOLID`: Show as a solid line.
   * - `DOTTED`: Show as a dotted line.
   * - `DASHED`: Show as a dashed line.
   *
   * @public
   */
  LineStyle?: LineChartLineStyle | undefined;

  /**
   * Width that determines the line thickness.
   *
   * @public
   */
  LineWidth?: string | undefined;
}

/**
 * Marker styles options for a line series in `LineChartVisual`.
 *
 * @public
 */
export interface LineChartMarkerStyleSettings {
  /**
   * Configuration option that determines whether to show the markers in the series.
   *
   * @public
   */
  MarkerVisibility?: Visibility | undefined;

  /**
   * Shape option for markers in the series.
   *
   * - `CIRCLE`: Show marker as a circle.
   * - `TRIANGLE`: Show marker as a triangle.
   * - `SQUARE`: Show marker as a square.
   * - `DIAMOND`: Show marker as a diamond.
   * - `ROUNDED_SQUARE`: Show marker as a rounded square.
   *
   * @public
   */
  MarkerShape?: LineChartMarkerShape | undefined;

  /**
   * Size of marker in the series.
   *
   * @public
   */
  MarkerSize?: string | undefined;

  /**
   * Color of marker in the series.
   *
   * @public
   */
  MarkerColor?: string | undefined;
}

/**
 * The options that determine the default presentation of all series in `ComboChartVisual`.
 *
 * @public
 */
export interface ComboChartDefaultSeriesSettings {
  /**
   * Line styles options for all line series in the visual.
   *
   * @public
   */
  LineStyleSettings?: LineChartLineStyleSettings | undefined;

  /**
   * Marker styles options for all line series in the visual.
   *
   * @public
   */
  MarkerStyleSettings?: LineChartMarkerStyleSettings | undefined;

  /**
   * Decal settings for all series in the visual.
   *
   * @public
   */
  DecalSettings?: DecalSettings | undefined;

  /**
   * Border settings for all bar series in the visual.
   *
   * @public
   */
  BorderSettings?: BorderSettings | undefined;
}

/**
 * The aggregated field wells of a combo chart.
 *
 * @public
 */
export interface ComboChartAggregatedFieldWells {
  /**
   * The aggregated category field wells of a combo chart.
   *
   * @public
   */
  Category?: DimensionField[] | undefined;

  /**
   * The aggregated `BarValues` field well of a combo chart.
   *
   * @public
   */
  BarValues?: MeasureField[] | undefined;

  /**
   * The aggregated colors field well of a combo chart.
   *
   * @public
   */
  Colors?: DimensionField[] | undefined;

  /**
   * The aggregated `LineValues` field well of a combo chart.
   *
   * @public
   */
  LineValues?: MeasureField[] | undefined;
}

/**
 * The field wells of the visual.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 *
 * @public
 */
export interface ComboChartFieldWells {
  /**
   * The aggregated field wells of a combo chart. Combo charts only have aggregated field wells. Columns in a combo chart are aggregated by category.
   *
   * @public
   */
  ComboChartAggregatedFieldWells?: ComboChartAggregatedFieldWells | undefined;
}

/**
 * Options that determine the presentation of a series in the visual.
 *
 * @public
 */
export interface ComboChartSeriesSettings {
  /**
   * Line styles options for the line series in the visual.
   *
   * @public
   */
  LineStyleSettings?: LineChartLineStyleSettings | undefined;

  /**
   * Marker styles options for the line series in the visual.
   *
   * @public
   */
  MarkerStyleSettings?: LineChartMarkerStyleSettings | undefined;

  /**
   * Decal settings for the series in the visual.
   *
   * @public
   */
  DecalSettings?: DecalSettings | undefined;

  /**
   * Border settings for the bar series in the visual.
   *
   * @public
   */
  BorderSettings?: BorderSettings | undefined;
}

/**
 * The data field series item configuration of a `ComboChartVisual`.
 *
 * @public
 */
export interface DataFieldComboSeriesItem {
  /**
   * Field ID of the field that you are setting the series configuration for.
   *
   * @public
   */
  FieldId: string | undefined;

  /**
   * Field value of the field that you are setting the series configuration for.
   *
   * @public
   */
  FieldValue?: string | undefined;

  /**
   * Options that determine the presentation of series associated to the field.
   *
   * @public
   */
  Settings?: ComboChartSeriesSettings | undefined;
}

/**
 * The field series item configuration of a `ComboChartVisual`.
 *
 * @public
 */
export interface FieldComboSeriesItem {
  /**
   * Field ID of the field for which you are setting the series configuration.
   *
   * @public
   */
  FieldId: string | undefined;

  /**
   * Options that determine the presentation of series associated to the field.
   *
   * @public
   */
  Settings?: ComboChartSeriesSettings | undefined;
}

/**
 * The series item configuration of a `ComboChartVisual`.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 *
 * @public
 */
export interface ComboSeriesItem {
  /**
   * The field series item configuration of a `ComboChartVisual`.
   *
   * @public
   */
  FieldComboSeriesItem?: FieldComboSeriesItem | undefined;

  /**
   * The data field series item configuration of a `ComboChartVisual`.
   *
   * @public
   */
  DataFieldComboSeriesItem?: DataFieldComboSeriesItem | undefined;
}

/**
 * The options that are available for a single Y axis in a chart.
 *
 * @public
 */
export interface YAxisOptions {
  /**
   * The Y axis type to be used in the chart.
   *
   * If you choose `PRIMARY_Y_AXIS`, the primary Y Axis is located on the leftmost vertical axis of the chart.
   *
   * @public
   */
  YAxis: SingleYAxisOption | undefined;
}

/**
 * The settings of a chart's single axis configuration.
 *
 * @public
 */
export interface SingleAxisOptions {
  /**
   * The Y axis options of a single axis configuration.
   *
   * @public
   */
  YAxisOptions?: YAxisOptions | undefined;
}

/**
 * The sort configuration of a `ComboChartVisual`.
 *
 * @public
 */
export interface ComboChartSortConfiguration {
  /**
   * The sort configuration of the category field well in a combo chart.
   *
   * @public
   */
  CategorySort?: FieldSortOptions[] | undefined;

  /**
   * The item limit configuration for the category field well of a combo chart.
   *
   * @public
   */
  CategoryItemsLimit?: ItemsLimitConfiguration | undefined;

  /**
   * The sort configuration of the color field well in a combo chart.
   *
   * @public
   */
  ColorSort?: FieldSortOptions[] | undefined;

  /**
   * The item limit configuration of the color field well in a combo chart.
   *
   * @public
   */
  ColorItemsLimit?: ItemsLimitConfiguration | undefined;
}

/**
 * The configuration of a `ComboChartVisual`.
 *
 * @public
 */
export interface ComboChartConfiguration {
  /**
   * The field wells of the visual.
   *
   * @public
   */
  FieldWells?: ComboChartFieldWells | undefined;

  /**
   * The sort configuration of a `ComboChartVisual`.
   *
   * @public
   */
  SortConfiguration?: ComboChartSortConfiguration | undefined;

  /**
   * Determines the bar arrangement in a combo chart. The following are valid values in this structure:
   *
   * - `CLUSTERED`: For clustered bar combo charts.
   * - `STACKED`: For stacked bar combo charts.
   * - `STACKED_PERCENT`: Do not use. If you use this value, the operation returns a validation error.
   *
   * @public
   */
  BarsArrangement?: BarsArrangement | undefined;

  /**
   * The category axis of a combo chart.
   *
   * @public
   */
  CategoryAxis?: AxisDisplayOptions | undefined;

  /**
   * The label options (label text, label visibility, and sort icon visibility) of a combo chart category (group/color) field well.
   *
   * @public
   */
  CategoryLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * The label display options (grid line, range, scale, and axis step) of a combo chart's primary y-axis (bar) field well.
   *
   * @public
   */
  PrimaryYAxisDisplayOptions?: AxisDisplayOptions | undefined;

  /**
   * The label options (label text, label visibility, and sort icon visibility) of a combo chart's primary y-axis (bar) field well.
   *
   * @public
   */
  PrimaryYAxisLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * The label display options (grid line, range, scale, axis step) of a combo chart's secondary y-axis (line) field well.
   *
   * @public
   */
  SecondaryYAxisDisplayOptions?: AxisDisplayOptions | undefined;

  /**
   * The label options (label text, label visibility, and sort icon visibility) of a combo chart's secondary y-axis(line) field well.
   *
   * @public
   */
  SecondaryYAxisLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * The settings of a chart's single axis configuration.
   *
   * @public
   */
  SingleAxisOptions?: SingleAxisOptions | undefined;

  /**
   * The label options (label text, label visibility, and sort icon visibility) of a combo chart's color field well.
   *
   * @public
   */
  ColorLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * The options that determine the default presentation of all series in `ComboChartVisual`.
   *
   * @public
   */
  DefaultSeriesSettings?: ComboChartDefaultSeriesSettings | undefined;

  /**
   * The series item configuration of a `ComboChartVisual`.
   *
   * @public
   */
  Series?: ComboSeriesItem[] | undefined;

  /**
   * The legend display setup of the visual.
   *
   * @public
   */
  Legend?: LegendOptions | undefined;

  /**
   * The options that determine if visual data labels are displayed.
   *
   * The data label options for a bar in a combo chart.
   *
   * @public
   */
  BarDataLabels?: DataLabelOptions | undefined;

  /**
   * The options that determine if visual data labels are displayed.
   *
   * The data label options for a line in a combo chart.
   *
   * @public
   */
  LineDataLabels?: DataLabelOptions | undefined;

  /**
   * The legend display setup of the visual.
   *
   * @public
   */
  Tooltip?: TooltipOptions | undefined;

  /**
   * The reference line setup of the visual.
   *
   * @public
   */
  ReferenceLines?: ReferenceLine[] | undefined;

  /**
   * The palette (chart color) display setup of the visual.
   *
   * @public
   */
  VisualPalette?: VisualPalette | undefined;

  /**
   * The general visual interactions setup for a visual.
   *
   * @public
   */
  Interactions?: VisualInteractionOptions | undefined;
}

/**
 * A combo chart.
 *
 * The `ComboChartVisual` includes stacked bar combo charts and clustered bar combo charts
 *
 * For more information, see [Using combo charts](https://docs.aws.amazon.com/quicksight/latest/user/combo-charts.html) in the *Amazon Quick Suite User Guide*.
 *
 * @public
 */
export interface ComboChartVisual {
  /**
   * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.
   *
   * @public
   */
  VisualId: string | undefined;

  /**
   * The title that is displayed on the visual.
   *
   * @public
   */
  Title?: VisualTitleLabelOptions | undefined;

  /**
   * The subtitle that is displayed on the visual.
   *
   * @public
   */
  Subtitle?: VisualSubtitleLabelOptions | undefined;

  /**
   * The configuration settings of the visual.
   *
   * @public
   */
  ChartConfiguration?: ComboChartConfiguration | undefined;

  /**
   * The list of custom actions that are configured for a visual.
   *
   * @public
   */
  Actions?: VisualCustomAction[] | undefined;

  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * @public
   */
  ColumnHierarchies?: ColumnHierarchy[] | undefined;

  /**
   * The alt text for the visual.
   *
   * @public
   */
  VisualContentAltText?: string | undefined;
}

/**
 * The configuration of a `CustomContentVisual`.
 *
 * @public
 */
export interface CustomContentConfiguration {
  /**
   * The input URL that links to the custom content that you want in the custom visual.
   *
   * @public
   */
  ContentUrl?: string | undefined;

  /**
   * The content type of the custom content visual. You can use this to have the visual render as an image.
   *
   * @public
   */
  ContentType?: CustomContentType | undefined;

  /**
   * The sizing options for the size of the custom content visual. This structure is required when the `ContentType` of the visual is `'IMAGE'`.
   *
   * @public
   */
  ImageScaling?: CustomContentImageScalingConfiguration | undefined;

  /**
   * The general visual interactions setup for a visual.
   *
   * @public
   */
  Interactions?: VisualInteractionOptions | undefined;
}

/**
 * A visual that contains custom content.
 *
 * For more information, see [Using custom visual content](https://docs.aws.amazon.com/quicksight/latest/user/custom-visual-content.html) in the *Amazon Quick Suite User Guide*.
 *
 * @public
 */
export interface CustomContentVisual {
  /**
   * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.
   *
   * @public
   */
  VisualId: string | undefined;

  /**
   * The title that is displayed on the visual.
   *
   * @public
   */
  Title?: VisualTitleLabelOptions | undefined;

  /**
   * The subtitle that is displayed on the visual.
   *
   * @public
   */
  Subtitle?: VisualSubtitleLabelOptions | undefined;

  /**
   * The configuration of a `CustomContentVisual`.
   *
   * @public
   */
  ChartConfiguration?: CustomContentConfiguration | undefined;

  /**
   * The list of custom actions that are configured for a visual.
   *
   * @public
   */
  Actions?: VisualCustomAction[] | undefined;

  /**
   * The dataset that is used to create the custom content visual. You can't create a visual without a dataset or a topic.
   *
   * @public
   */
  DataSetIdentifier?: string | undefined;

  /**
   * The topic that is used in the custom content visual. You can't create a visual without a dataset or a topic.
   *
   * @public
   */
  TopicIdentifier?: string | undefined;

  /**
   * The alt text for the visual.
   *
   * @public
   */
  VisualContentAltText?: string | undefined;
}

/**
 * An empty visual.
 *
 * Empty visuals are used in layouts but have not been configured to show any data. A new visual created in the Quick Sight console is considered an `EmptyVisual` until a visual type is selected.
 *
 * @public
 */
export interface EmptyVisual {
  /**
   * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.
   *
   * @public
   */
  VisualId: string | undefined;

  /**
   * The data set that is used in the empty visual. Every visual requires a dataset or a topic to render.
   *
   * @public
   */
  DataSetIdentifier?: string | undefined;

  /**
   * The topic that is used in the empty visual. Every visual requires a dataset or a topic to render.
   *
   * @public
   */
  TopicIdentifier?: string | undefined;

  /**
   * The list of custom actions that are configured for a visual.
   *
   * @public
   */
  Actions?: VisualCustomAction[] | undefined;
}

/**
 * The aggregated field well of the filled map.
 *
 * @public
 */
export interface FilledMapAggregatedFieldWells {
  /**
   * The aggregated location field well of the filled map. Values are grouped by location fields.
   *
   * @public
   */
  Geospatial?: DimensionField[] | undefined;

  /**
   * The aggregated color field well of a filled map. Values are aggregated based on location fields.
   *
   * @public
   */
  Values?: MeasureField[] | undefined;
}

/**
 * The field wells of a `FilledMapVisual`.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 *
 * @public
 */
export interface FilledMapFieldWells {
  /**
   * The aggregated field well of the filled map.
   *
   * @public
   */
  FilledMapAggregatedFieldWells?: FilledMapAggregatedFieldWells | undefined;
}

/**
 * The map style options of the geospatial map.
 *
 * @public
 */
export interface GeospatialMapStyleOptions {
  /**
   * The base map style of the geospatial map.
   *
   * @public
   */
  BaseMapStyle?: BaseMapStyleType | undefined;
}

/**
 * The sort configuration of a `FilledMapVisual`.
 *
 * @public
 */
export interface FilledMapSortConfiguration {
  /**
   * The sort configuration of the location fields.
   *
   * @public
   */
  CategorySort?: FieldSortOptions[] | undefined;
}

/**
 * The bound options (north, south, west, east) of the geospatial window options.
 *
 * @public
 */
export interface GeospatialCoordinateBounds {
  /**
   * The latitude of the north bound of the geospatial coordinate bounds.
   *
   * @public
   */
  North: number | undefined;

  /**
   * The latitude of the south bound of the geospatial coordinate bounds.
   *
   * @public
   */
  South: number | undefined;

  /**
   * The longitude of the west bound of the geospatial coordinate bounds.
   *
   * @public
   */
  West: number | undefined;

  /**
   * The longitude of the east bound of the geospatial coordinate bounds.
   *
   * @public
   */
  East: number | undefined;
}

/**
 * The window options of the geospatial map visual.
 *
 * @public
 */
export interface GeospatialWindowOptions {
  /**
   * The bounds options (north, south, west, east) of the geospatial window options.
   *
   * @public
   */
  Bounds?: GeospatialCoordinateBounds | undefined;

  /**
   * The map zoom modes (manual, auto) of the geospatial window options.
   *
   * @public
   */
  MapZoomMode?: MapZoomMode | undefined;
}

/**
 * The configuration for a `FilledMapVisual`.
 *
 * @public
 */
export interface FilledMapConfiguration {
  /**
   * The field wells of the visual.
   *
   * @public
   */
  FieldWells?: FilledMapFieldWells | undefined;

  /**
   * The sort configuration of a `FilledMapVisual`.
   *
   * @public
   */
  SortConfiguration?: FilledMapSortConfiguration | undefined;

  /**
   * The legend display setup of the visual.
   *
   * @public
   */
  Legend?: LegendOptions | undefined;

  /**
   * The tooltip display setup of the visual.
   *
   * @public
   */
  Tooltip?: TooltipOptions | undefined;

  /**
   * The window options of the filled map visual.
   *
   * @public
   */
  WindowOptions?: GeospatialWindowOptions | undefined;

  /**
   * The map style options of the filled map visual.
   *
   * @public
   */
  MapStyleOptions?: GeospatialMapStyleOptions | undefined;

  /**
   * The general visual interactions setup for a visual.
   *
   * @public
   */
  Interactions?: VisualInteractionOptions | undefined;
}

/**
 * Determines the gradient stop configuration.
 *
 * @public
 */
export interface GradientStop {
  /**
   * Determines gradient offset value.
   *
   * @public
   */
  GradientOffset: number | undefined;

  /**
   * Determines the data value.
   *
   * @public
   */
  DataValue?: number | undefined;

  /**
   * Determines the color.
   *
   * @public
   */
  Color?: string | undefined;
}

/**
 * Determines the gradient color settings.
 *
 * @public
 */
export interface GradientColor {
  /**
   * The list of gradient color stops.
   *
   * @public
   */
  Stops?: GradientStop[] | undefined;
}

/**
 * Formatting configuration for gradient color.
 *
 * @public
 */
export interface ConditionalFormattingGradientColor {
  /**
   * The expression that determines the formatting configuration for gradient color.
   *
   * @public
   */
  Expression: string | undefined;

  /**
   * Determines the color.
   *
   * @public
   */
  Color: GradientColor | undefined;
}

/**
 * Formatting configuration for solid color.
 *
 * @public
 */
export interface ConditionalFormattingSolidColor {
  /**
   * The expression that determines the formatting configuration for solid color.
   *
   * @public
   */
  Expression: string | undefined;

  /**
   * Determines the color.
   *
   * @public
   */
  Color?: string | undefined;
}

/**
 * The formatting configuration for the color.
 *
 * @public
 */
export interface ConditionalFormattingColor {
  /**
   * Formatting configuration for solid color.
   *
   * @public
   */
  Solid?: ConditionalFormattingSolidColor | undefined;

  /**
   * Formatting configuration for gradient color.
   *
   * @public
   */
  Gradient?: ConditionalFormattingGradientColor | undefined;
}

/**
 * The shape conditional formatting of a filled map visual.
 *
 * @public
 */
export interface ShapeConditionalFormat {
  /**
   * The conditional formatting for the shape background color of a filled map visual.
   *
   * @public
   */
  BackgroundColor: ConditionalFormattingColor | undefined;
}

/**
 * The conditional formatting that determines the shape of the filled map.
 *
 * @public
 */
export interface FilledMapShapeConditionalFormatting {
  /**
   * The field ID of the filled map shape.
   *
   * @public
   */
  FieldId: string | undefined;

  /**
   * The conditional formatting that determines the background color of a filled map's shape.
   *
   * @public
   */
  Format?: ShapeConditionalFormat | undefined;
}

/**
 * Conditional formatting options of a `FilledMapVisual`.
 *
 * @public
 */
export interface FilledMapConditionalFormattingOption {
  /**
   * The conditional formatting that determines the shape of the filled map.
   *
   * @public
   */
  Shape: FilledMapShapeConditionalFormatting | undefined;
}

/**
 * The conditional formatting of a `FilledMapVisual`.
 *
 * @public
 */
export interface FilledMapConditionalFormatting {
  /**
   * Conditional formatting options of a `FilledMapVisual`.
   *
   * @public
   */
  ConditionalFormattingOptions: FilledMapConditionalFormattingOption[] | undefined;
}

/**
 * The preference coordinate for the geocode preference.
 *
 * @public
 */
export interface Coordinate {
  /**
   * The latitude coordinate value for the geocode preference.
   *
   * @public
   */
  Latitude: number | undefined;

  /**
   * The longitude coordinate value for the geocode preference.
   *
   * @public
   */
  Longitude: number | undefined;
}

/**
 * The preference hierarchy for the geocode preference.
 *
 * @public
 */
export interface GeocoderHierarchy {
  /**
   * The country value for the preference hierarchy.
   *
   * @public
   */
  Country?: string | undefined;

  /**
   * The state/region value for the preference hierarchy.
   *
   * @public
   */
  State?: string | undefined;

  /**
   * The county/district value for the preference hierarchy.
   *
   * @public
   */
  County?: string | undefined;

  /**
   * The city value for the preference hierarchy.
   *
   * @public
   */
  City?: string | undefined;

  /**
   * The postcode value for the preference hierarchy.
   *
   * @public
   */
  PostCode?: string | undefined;
}

/**
 * The preference value for the geocode preference.
 *
 * @public
 */
export type GeocodePreferenceValue =
  | GeocodePreferenceValue.CoordinateMember
  | GeocodePreferenceValue.GeocoderHierarchyMember
  | GeocodePreferenceValue.$UnknownMember;

/**
 * @public
 */
export namespace GeocodePreferenceValue {
  /**
   * The preference hierarchy for the geocode preference.
   *
   * @public
   */
  export interface GeocoderHierarchyMember {
    GeocoderHierarchy: GeocoderHierarchy;
    Coordinate?: never;
    $unknown?: never;
  }

  /**
   * The preference coordinate for the geocode preference.
   *
   * @public
   */
  export interface CoordinateMember {
    GeocoderHierarchy?: never;
    Coordinate: Coordinate;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    GeocoderHierarchy?: never;
    Coordinate?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    GeocoderHierarchy: (value: GeocoderHierarchy) => T;
    Coordinate: (value: Coordinate) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The geocode preference.
 *
 * @public
 */
export interface GeocodePreference {
  /**
   * The unique request key for the geocode preference.
   *
   * @public
   */
  RequestKey: GeocoderHierarchy | undefined;

  /**
   * The preference definition for the geocode preference.
   *
   * @public
   */
  Preference: GeocodePreferenceValue | undefined;
}

/**
 * A filled map.
 *
 * For more information, see [Creating filled maps](https://docs.aws.amazon.com/quicksight/latest/user/filled-maps.html) in the *Amazon Quick Suite User Guide*.
 *
 * @public
 */
export interface FilledMapVisual {
  /**
   * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers..
   *
   * @public
   */
  VisualId: string | undefined;

  /**
   * The title that is displayed on the visual.
   *
   * @public
   */
  Title?: VisualTitleLabelOptions | undefined;

  /**
   * The subtitle that is displayed on the visual.
   *
   * @public
   */
  Subtitle?: VisualSubtitleLabelOptions | undefined;

  /**
   * The configuration settings of the visual.
   *
   * @public
   */
  ChartConfiguration?: FilledMapConfiguration | undefined;

  /**
   * The conditional formatting of a `FilledMapVisual`.
   *
   * @public
   */
  ConditionalFormatting?: FilledMapConditionalFormatting | undefined;

  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * @public
   */
  ColumnHierarchies?: ColumnHierarchy[] | undefined;

  /**
   * The list of custom actions that are configured for a visual.
   *
   * @public
   */
  Actions?: VisualCustomAction[] | undefined;

  /**
   * The alt text for the visual.
   *
   * @public
   */
  VisualContentAltText?: string | undefined;

  /**
   * The geocoding prefences for filled map visual.
   *
   * @public
   */
  GeocodingPreferences?: GeocodePreference[] | undefined;
}

/**
 * The options that determine the presentation of the data labels.
 *
 * @public
 */
export interface FunnelChartDataLabelOptions {
  /**
   * The visibility option that determines if data labels are displayed.
   *
   * @public
   */
  Visibility?: Visibility | undefined;

  /**
   * The visibility of the category labels within the data labels.
   *
   * @public
   */
  CategoryLabelVisibility?: Visibility | undefined;

  /**
   * The visibility of the measure labels within the data labels.
   *
   * @public
   */
  MeasureLabelVisibility?: Visibility | undefined;

  /**
   * Determines the positioning of the data label relative to a section of the funnel.
   *
   * @public
   */
  Position?: DataLabelPosition | undefined;

  /**
   * The font configuration for the data labels.
   *
   * Only the `FontSize` attribute of the font configuration is used for data labels.
   *
   * @public
   */
  LabelFontConfiguration?: FontConfiguration | undefined;

  /**
   * The color of the data label text.
   *
   * @public
   */
  LabelColor?: string | undefined;

  /**
   * Determines the style of the metric labels.
   *
   * @public
   */
  MeasureDataLabelStyle?: FunnelChartMeasureDataLabelStyle | undefined;
}

/**
 * The field well configuration of a `FunnelChartVisual`.
 *
 * @public
 */
export interface FunnelChartAggregatedFieldWells {
  /**
   * The category field wells of a funnel chart. Values are grouped by category fields.
   *
   * @public
   */
  Category?: DimensionField[] | undefined;

  /**
   * The value field wells of a funnel chart. Values are aggregated based on categories.
   *
   * @public
   */
  Values?: MeasureField[] | undefined;
}

/**
 * The field well configuration of a `FunnelChartVisual`.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 *
 * @public
 */
export interface FunnelChartFieldWells {
  /**
   * The field well configuration of a `FunnelChartVisual`.
   *
   * @public
   */
  FunnelChartAggregatedFieldWells?: FunnelChartAggregatedFieldWells | undefined;
}

/**
 * The sort configuration of a `FunnelChartVisual`.
 *
 * @public
 */
export interface FunnelChartSortConfiguration {
  /**
   * The sort configuration of the category fields.
   *
   * @public
   */
  CategorySort?: FieldSortOptions[] | undefined;

  /**
   * The limit on the number of categories displayed.
   *
   * @public
   */
  CategoryItemsLimit?: ItemsLimitConfiguration | undefined;
}

/**
 * The configuration of a `FunnelChartVisual`.
 *
 * @public
 */
export interface FunnelChartConfiguration {
  /**
   * The field well configuration of a `FunnelChartVisual`.
   *
   * @public
   */
  FieldWells?: FunnelChartFieldWells | undefined;

  /**
   * The sort configuration of a `FunnelChartVisual`.
   *
   * @public
   */
  SortConfiguration?: FunnelChartSortConfiguration | undefined;

  /**
   * The label options of the categories that are displayed in a `FunnelChartVisual`.
   *
   * @public
   */
  CategoryLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * The label options for the values that are displayed in a `FunnelChartVisual`.
   *
   * @public
   */
  ValueLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * The tooltip configuration of a `FunnelChartVisual`.
   *
   * @public
   */
  Tooltip?: TooltipOptions | undefined;

  /**
   * The options that determine the presentation of the data labels.
   *
   * @public
   */
  DataLabelOptions?: FunnelChartDataLabelOptions | undefined;

  /**
   * The visual palette configuration of a `FunnelChartVisual`.
   *
   * @public
   */
  VisualPalette?: VisualPalette | undefined;

  /**
   * The general visual interactions setup for a visual.
   *
   * @public
   */
  Interactions?: VisualInteractionOptions | undefined;
}

/**
 * A funnel chart.
 *
 * For more information, see [Using funnel charts](https://docs.aws.amazon.com/quicksight/latest/user/funnel-visual-content.html) in the *Amazon Quick Suite User Guide*.
 *
 * @public
 */
export interface FunnelChartVisual {
  /**
   * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers..
   *
   * @public
   */
  VisualId: string | undefined;

  /**
   * The title that is displayed on the visual.
   *
   * @public
   */
  Title?: VisualTitleLabelOptions | undefined;

  /**
   * The subtitle that is displayed on the visual.
   *
   * @public
   */
  Subtitle?: VisualSubtitleLabelOptions | undefined;

  /**
   * The configuration of a `FunnelChartVisual`.
   *
   * @public
   */
  ChartConfiguration?: FunnelChartConfiguration | undefined;

  /**
   * The list of custom actions that are configured for a visual.
   *
   * @public
   */
  Actions?: VisualCustomAction[] | undefined;

  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * @public
   */
  ColumnHierarchies?: ColumnHierarchy[] | undefined;

  /**
   * The alt text for the visual.
   *
   * @public
   */
  VisualContentAltText?: string | undefined;
}

/**
 * The color configuration of a `GaugeChartVisual`.
 *
 * @public
 */
export interface GaugeChartColorConfiguration {
  /**
   * The foreground color configuration of a `GaugeChartVisual`.
   *
   * @public
   */
  ForegroundColor?: string | undefined;

  /**
   * The background color configuration of a `GaugeChartVisual`.
   *
   * @public
   */
  BackgroundColor?: string | undefined;
}

/**
 * The field well configuration of a `GaugeChartVisual`.
 *
 * @public
 */
export interface GaugeChartFieldWells {
  /**
   * The value field wells of a `GaugeChartVisual`.
   *
   * @public
   */
  Values?: MeasureField[] | undefined;

  /**
   * The target value field wells of a `GaugeChartVisual`.
   *
   * @public
   */
  TargetValues?: MeasureField[] | undefined;
}

/**
 * The arc configuration of a `GaugeChartVisual`.
 *
 * @public
 */
export interface ArcConfiguration {
  /**
   * The option that determines the arc angle of a `GaugeChartVisual`.
   *
   * @public
   */
  ArcAngle?: number | undefined;

  /**
   * The options that determine the arc thickness of a `GaugeChartVisual`.
   *
   * @public
   */
  ArcThickness?: ArcThicknessOptions | undefined;
}

/**
 * The arc axis range of a `GaugeChartVisual`.
 *
 * @public
 */
export interface ArcAxisDisplayRange {
  /**
   * The minimum value of the arc axis range.
   *
   * @public
   */
  Min?: number | undefined;

  /**
   * The maximum value of the arc axis range.
   *
   * @public
   */
  Max?: number | undefined;
}

/**
 * The arc axis configuration of a `GaugeChartVisual`.
 *
 * @public
 */
export interface ArcAxisConfiguration {
  /**
   * The arc axis range of a `GaugeChartVisual`.
   *
   * @public
   */
  Range?: ArcAxisDisplayRange | undefined;

  /**
   * The reserved range of the arc axis.
   *
   * @public
   */
  ReserveRange?: number | undefined;
}

/**
 * The format of the comparison.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 *
 * @public
 */
export interface ComparisonFormatConfiguration {
  /**
   * The number display format.
   *
   * @public
   */
  NumberDisplayFormatConfiguration?: NumberDisplayFormatConfiguration | undefined;

  /**
   * The percentage display format.
   *
   * @public
   */
  PercentageDisplayFormatConfiguration?: PercentageDisplayFormatConfiguration | undefined;
}

/**
 * The comparison display configuration of a KPI or gauge chart.
 *
 * @public
 */
export interface ComparisonConfiguration {
  /**
   * The method of the comparison. Choose from the following options:
   *
   * - `DIFFERENCE`
   * - `PERCENT_DIFFERENCE`
   * - `PERCENT`
   *
   * @public
   */
  ComparisonMethod?: ComparisonMethod | undefined;

  /**
   * The format of the comparison.
   *
   * @public
   */
  ComparisonFormat?: ComparisonFormatConfiguration | undefined;
}

/**
 * The options that determine the presentation of the `GaugeChartVisual`.
 *
 * @public
 */
export interface GaugeChartOptions {
  /**
   * The options that determine the primary value display type.
   *
   * @public
   */
  PrimaryValueDisplayType?: PrimaryValueDisplayType | undefined;

  /**
   * The comparison configuration of a `GaugeChartVisual`.
   *
   * @public
   */
  Comparison?: ComparisonConfiguration | undefined;

  /**
   * The arc axis configuration of a `GaugeChartVisual`.
   *
   * @public
   */
  ArcAxis?: ArcAxisConfiguration | undefined;

  /**
   * The arc configuration of a `GaugeChartVisual`.
   *
   * @public
   */
  Arc?: ArcConfiguration | undefined;

  /**
   * The options that determine the primary value font configuration.
   *
   * @public
   */
  PrimaryValueFontConfiguration?: FontConfiguration | undefined;
}

/**
 * The configuration of a `GaugeChartVisual`.
 *
 * @public
 */
export interface GaugeChartConfiguration {
  /**
   * The field well configuration of a `GaugeChartVisual`.
   *
   * @public
   */
  FieldWells?: GaugeChartFieldWells | undefined;

  /**
   * The options that determine the presentation of the `GaugeChartVisual`.
   *
   * @public
   */
  GaugeChartOptions?: GaugeChartOptions | undefined;

  /**
   * The data label configuration of a `GaugeChartVisual`.
   *
   * @public
   */
  DataLabels?: DataLabelOptions | undefined;

  /**
   * The tooltip configuration of a `GaugeChartVisual`.
   *
   * @public
   */
  TooltipOptions?: TooltipOptions | undefined;

  /**
   * The visual palette configuration of a `GaugeChartVisual`.
   *
   * @public
   */
  VisualPalette?: VisualPalette | undefined;

  /**
   * The color configuration of a `GaugeChartVisual`.
   *
   * @public
   */
  ColorConfiguration?: GaugeChartColorConfiguration | undefined;

  /**
   * The general visual interactions setup for a visual.
   *
   * @public
   */
  Interactions?: VisualInteractionOptions | undefined;
}

/**
 * The options that determine the presentation of the arc of a `GaugeChartVisual`.
 *
 * @public
 */
export interface GaugeChartArcConditionalFormatting {
  /**
   * The conditional formatting of the arc foreground color.
   *
   * @public
   */
  ForegroundColor?: ConditionalFormattingColor | undefined;
}

/**
 * Determines the icon display configuration.
 *
 * @public
 */
export interface ConditionalFormattingIconDisplayConfiguration {
  /**
   * Determines the icon display configuration.
   *
   * @public
   */
  IconDisplayOption?: ConditionalFormattingIconDisplayOption | undefined;
}

/**
 * Custom icon options for an icon set.
 *
 * @public
 */
export interface ConditionalFormattingCustomIconOptions {
  /**
   * Determines the type of icon.
   *
   * @public
   */
  Icon?: Icon | undefined;

  /**
   * Determines the Unicode icon type.
   *
   * @public
   */
  UnicodeIcon?: string | undefined;
}

/**
 * Determines the custom condition for an icon set.
 *
 * @public
 */
export interface ConditionalFormattingCustomIconCondition {
  /**
   * The expression that determines the condition of the icon set.
   *
   * @public
   */
  Expression: string | undefined;

  /**
   * Custom icon options for an icon set.
   *
   * @public
   */
  IconOptions: ConditionalFormattingCustomIconOptions | undefined;

  /**
   * Determines the color of the icon.
   *
   * @public
   */
  Color?: string | undefined;

  /**
   * Determines the icon display configuration.
   *
   * @public
   */
  DisplayConfiguration?: ConditionalFormattingIconDisplayConfiguration | undefined;
}

/**
 * Formatting configuration for icon set.
 *
 * @public
 */
export interface ConditionalFormattingIconSet {
  /**
   * The expression that determines the formatting configuration for the icon set.
   *
   * @public
   */
  Expression: string | undefined;

  /**
   * Determines the icon set type.
   *
   * @public
   */
  IconSetType?: ConditionalFormattingIconSetType | undefined;
}

/**
 * The formatting configuration for the icon.
 *
 * @public
 */
export interface ConditionalFormattingIcon {
  /**
   * Formatting configuration for icon set.
   *
   * @public
   */
  IconSet?: ConditionalFormattingIconSet | undefined;

  /**
   * Determines the custom condition for an icon set.
   *
   * @public
   */
  CustomCondition?: ConditionalFormattingCustomIconCondition | undefined;
}

/**
 * The conditional formatting for the primary value of a `GaugeChartVisual`.
 *
 * @public
 */
export interface GaugeChartPrimaryValueConditionalFormatting {
  /**
   * The conditional formatting of the primary value text color.
   *
   * @public
   */
  TextColor?: ConditionalFormattingColor | undefined;

  /**
   * The conditional formatting of the primary value icon.
   *
   * @public
   */
  Icon?: ConditionalFormattingIcon | undefined;
}

/**
 * Conditional formatting options of a `GaugeChartVisual`.
 *
 * @public
 */
export interface GaugeChartConditionalFormattingOption {
  /**
   * The conditional formatting for the primary value of a `GaugeChartVisual`.
   *
   * @public
   */
  PrimaryValue?: GaugeChartPrimaryValueConditionalFormatting | undefined;

  /**
   * The options that determine the presentation of the arc of a `GaugeChartVisual`.
   *
   * @public
   */
  Arc?: GaugeChartArcConditionalFormatting | undefined;
}

/**
 * The conditional formatting of a `GaugeChartVisual`.
 *
 * @public
 */
export interface GaugeChartConditionalFormatting {
  /**
   * Conditional formatting options of a `GaugeChartVisual`.
   *
   * @public
   */
  ConditionalFormattingOptions?: GaugeChartConditionalFormattingOption[] | undefined;
}

/**
 * A gauge chart.
 *
 * For more information, see [Using gauge charts](https://docs.aws.amazon.com/quicksight/latest/user/gauge-chart.html) in the *Amazon Quick Suite User Guide*.
 *
 * @public
 */
export interface GaugeChartVisual {
  /**
   * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.
   *
   * @public
   */
  VisualId: string | undefined;

  /**
   * The title that is displayed on the visual.
   *
   * @public
   */
  Title?: VisualTitleLabelOptions | undefined;

  /**
   * The subtitle that is displayed on the visual.
   *
   * @public
   */
  Subtitle?: VisualSubtitleLabelOptions | undefined;

  /**
   * The configuration of a `GaugeChartVisual`.
   *
   * @public
   */
  ChartConfiguration?: GaugeChartConfiguration | undefined;

  /**
   * The conditional formatting of a `GaugeChartVisual`.
   *
   * @public
   */
  ConditionalFormatting?: GaugeChartConditionalFormatting | undefined;

  /**
   * The list of custom actions that are configured for a visual.
   *
   * @public
   */
  Actions?: VisualCustomAction[] | undefined;

  /**
   * The alt text for the visual.
   *
   * @public
   */
  VisualContentAltText?: string | undefined;
}

/**
 * The aggregated field wells for a geospatial map.
 *
 * @public
 */
export interface GeospatialMapAggregatedFieldWells {
  /**
   * The geospatial field wells of a geospatial map. Values are grouped by geospatial fields.
   *
   * @public
   */
  Geospatial?: DimensionField[] | undefined;

  /**
   * The size field wells of a geospatial map. Values are aggregated based on geospatial fields.
   *
   * @public
   */
  Values?: MeasureField[] | undefined;

  /**
   * The color field wells of a geospatial map.
   *
   * @public
   */
  Colors?: DimensionField[] | undefined;
}

/**
 * The field wells of a `GeospatialMapVisual`.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 *
 * @public
 */
export interface GeospatialMapFieldWells {
  /**
   * The aggregated field well for a geospatial map.
   *
   * @public
   */
  GeospatialMapAggregatedFieldWells?: GeospatialMapAggregatedFieldWells | undefined;
}

/**
 * The simple cluster marker of the cluster marker.
 *
 * @public
 */
export interface SimpleClusterMarker {
  /**
   * The color of the simple cluster marker.
   *
   * @public
   */
  Color?: string | undefined;
}

/**
 * The cluster marker that is a part of the cluster marker configuration.
 *
 * @public
 */
export interface ClusterMarker {
  /**
   * The simple cluster marker of the cluster marker.
   *
   * @public
   */
  SimpleClusterMarker?: SimpleClusterMarker | undefined;
}

/**
 * The cluster marker configuration of the geospatial map selected point style.
 *
 * @public
 */
export interface ClusterMarkerConfiguration {
  /**
   * The cluster marker that is a part of the cluster marker configuration.
   *
   * @public
   */
  ClusterMarker?: ClusterMarker | undefined;
}

/**
 * The color to be used in the heatmap point style.
 *
 * @public
 */
export interface GeospatialHeatmapDataColor {
  /**
   * The hex color to be used in the heatmap point style.
   *
   * @public
   */
  Color: string | undefined;
}

/**
 * The color scale specification for the heatmap point style.
 *
 * @public
 */
export interface GeospatialHeatmapColorScale {
  /**
   * The list of colors to be used in heatmap point style.
   *
   * @public
   */
  Colors?: GeospatialHeatmapDataColor[] | undefined;
}

/**
 * The heatmap configuration of the geospatial point style.
 *
 * @public
 */
export interface GeospatialHeatmapConfiguration {
  /**
   * The color scale specification for the heatmap point style.
   *
   * @public
   */
  HeatmapColor?: GeospatialHeatmapColorScale | undefined;
}

/**
 * The point style of the geospatial map.
 *
 * @public
 */
export interface GeospatialPointStyleOptions {
  /**
   * The selected point styles (point, cluster) of the geospatial map.
   *
   * @public
   */
  SelectedPointStyle?: GeospatialSelectedPointStyle | undefined;

  /**
   * The cluster marker configuration of the geospatial point style.
   *
   * @public
   */
  ClusterMarkerConfiguration?: ClusterMarkerConfiguration | undefined;

  /**
   * The heatmap configuration of the geospatial point style.
   *
   * @public
   */
  HeatmapConfiguration?: GeospatialHeatmapConfiguration | undefined;
}

/**
 * The configuration of a `GeospatialMapVisual`.
 *
 * @public
 */
export interface GeospatialMapConfiguration {
  /**
   * The field wells of the visual.
   *
   * @public
   */
  FieldWells?: GeospatialMapFieldWells | undefined;

  /**
   * The legend display setup of the visual.
   *
   * @public
   */
  Legend?: LegendOptions | undefined;

  /**
   * The tooltip display setup of the visual.
   *
   * @public
   */
  Tooltip?: TooltipOptions | undefined;

  /**
   * The window options of the geospatial map.
   *
   * @public
   */
  WindowOptions?: GeospatialWindowOptions | undefined;

  /**
   * The map style options of the geospatial map.
   *
   * @public
   */
  MapStyleOptions?: GeospatialMapStyleOptions | undefined;

  /**
   * The point style options of the geospatial map.
   *
   * @public
   */
  PointStyleOptions?: GeospatialPointStyleOptions | undefined;

  /**
   * The visual display options for the visual palette.
   *
   * @public
   */
  VisualPalette?: VisualPalette | undefined;

  /**
   * The general visual interactions setup for a visual.
   *
   * @public
   */
  Interactions?: VisualInteractionOptions | undefined;
}

/**
 * A geospatial map or a points on map visual.
 *
 * For more information, see [Creating point maps](https://docs.aws.amazon.com/quicksight/latest/user/point-maps.html) in the *Amazon Quick Suite User Guide*.
 *
 * @public
 */
export interface GeospatialMapVisual {
  /**
   * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers..
   *
   * @public
   */
  VisualId: string | undefined;

  /**
   * The title that is displayed on the visual.
   *
   * @public
   */
  Title?: VisualTitleLabelOptions | undefined;

  /**
   * The subtitle that is displayed on the visual.
   *
   * @public
   */
  Subtitle?: VisualSubtitleLabelOptions | undefined;

  /**
   * The configuration settings of the visual.
   *
   * @public
   */
  ChartConfiguration?: GeospatialMapConfiguration | undefined;

  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * @public
   */
  ColumnHierarchies?: ColumnHierarchy[] | undefined;

  /**
   * The list of custom actions that are configured for a visual.
   *
   * @public
   */
  Actions?: VisualCustomAction[] | undefined;

  /**
   * The alt text for the visual.
   *
   * @public
   */
  VisualContentAltText?: string | undefined;

  /**
   * The geocoding prefences for geospatial map.
   *
   * @public
   */
  GeocodingPreferences?: GeocodePreference[] | undefined;
}

/**
 * Determines the color that is applied to a particular data value.
 *
 * @public
 */
export interface DataColor {
  /**
   * The color that is applied to the data value.
   *
   * @public
   */
  Color?: string | undefined;

  /**
   * The data value that the color is applied to.
   *
   * @public
   */
  DataValue?: number | undefined;
}

/**
 * Determines the color scale that is applied to the visual.
 *
 * @public
 */
export interface ColorScale {
  /**
   * Determines the list of colors that are applied to the visual.
   *
   * @public
   */
  Colors: DataColor[] | undefined;

  /**
   * Determines the color fill type.
   *
   * @public
   */
  ColorFillType: ColorFillType | undefined;

  /**
   * Determines the color that is applied to null values.
   *
   * @public
   */
  NullValueColor?: DataColor | undefined;
}

/**
 * The aggregated field wells of a heat map.
 *
 * @public
 */
export interface HeatMapAggregatedFieldWells {
  /**
   * The rows field well of a heat map.
   *
   * @public
   */
  Rows?: DimensionField[] | undefined;

  /**
   * The columns field well of a heat map.
   *
   * @public
   */
  Columns?: DimensionField[] | undefined;

  /**
   * The values field well of a heat map.
   *
   * @public
   */
  Values?: MeasureField[] | undefined;
}

/**
 * The field well configuration of a heat map.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 *
 * @public
 */
export interface HeatMapFieldWells {
  /**
   * The aggregated field wells of a heat map.
   *
   * @public
   */
  HeatMapAggregatedFieldWells?: HeatMapAggregatedFieldWells | undefined;
}

/**
 * The sort configuration of a heat map.
 *
 * @public
 */
export interface HeatMapSortConfiguration {
  /**
   * The field sort configuration of the rows fields.
   *
   * @public
   */
  HeatMapRowSort?: FieldSortOptions[] | undefined;

  /**
   * The column sort configuration for heat map for columns that aren't a part of a field well.
   *
   * @public
   */
  HeatMapColumnSort?: FieldSortOptions[] | undefined;

  /**
   * The limit on the number of rows that are displayed in a heat map.
   *
   * @public
   */
  HeatMapRowItemsLimitConfiguration?: ItemsLimitConfiguration | undefined;

  /**
   * The limit on the number of columns that are displayed in a heat map.
   *
   * @public
   */
  HeatMapColumnItemsLimitConfiguration?: ItemsLimitConfiguration | undefined;
}

/**
 * The configuration of a heat map.
 *
 * @public
 */
export interface HeatMapConfiguration {
  /**
   * The field wells of the visual.
   *
   * @public
   */
  FieldWells?: HeatMapFieldWells | undefined;

  /**
   * The sort configuration of a heat map.
   *
   * @public
   */
  SortConfiguration?: HeatMapSortConfiguration | undefined;

  /**
   * The options that determine the presentation of the row axis label.
   *
   * @public
   */
  RowAxisDisplayOptions?: AxisDisplayOptions | undefined;

  /**
   * The label options of the row that is displayed in a `heat map`.
   *
   * @public
   */
  RowLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * The options that determine the presentation of the row axis label.
   *
   * @public
   */
  ColumnAxisDisplayOptions?: AxisDisplayOptions | undefined;

  /**
   * The label options of the column that is displayed in a heat map.
   *
   * @public
   */
  ColumnLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * The color options (gradient color, point of divergence) in a heat map.
   *
   * @public
   */
  ColorScale?: ColorScale | undefined;

  /**
   * The legend display setup of the visual.
   *
   * @public
   */
  Legend?: LegendOptions | undefined;

  /**
   * The options that determine if visual data labels are displayed.
   *
   * @public
   */
  DataLabels?: DataLabelOptions | undefined;

  /**
   * The tooltip display setup of the visual.
   *
   * @public
   */
  Tooltip?: TooltipOptions | undefined;

  /**
   * The general visual interactions setup for a visual.
   *
   * @public
   */
  Interactions?: VisualInteractionOptions | undefined;
}

/**
 * A heat map.
 *
 * For more information, see [Using heat maps](https://docs.aws.amazon.com/quicksight/latest/user/heat-map.html) in the *Amazon Quick Suite User Guide*.
 *
 * @public
 */
export interface HeatMapVisual {
  /**
   * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.
   *
   * @public
   */
  VisualId: string | undefined;

  /**
   * The title that is displayed on the visual.
   *
   * @public
   */
  Title?: VisualTitleLabelOptions | undefined;

  /**
   * The subtitle that is displayed on the visual.
   *
   * @public
   */
  Subtitle?: VisualSubtitleLabelOptions | undefined;

  /**
   * The configuration of a heat map.
   *
   * @public
   */
  ChartConfiguration?: HeatMapConfiguration | undefined;

  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * @public
   */
  ColumnHierarchies?: ColumnHierarchy[] | undefined;

  /**
   * The list of custom actions that are configured for a visual.
   *
   * @public
   */
  Actions?: VisualCustomAction[] | undefined;

  /**
   * The alt text for the visual.
   *
   * @public
   */
  VisualContentAltText?: string | undefined;
}

/**
 * The options that determine the bin count of a histogram.
 *
 * @public
 */
export interface BinCountOptions {
  /**
   * The options that determine the bin count value.
   *
   * @public
   */
  Value?: number | undefined;
}

/**
 * The options that determine the bin width of a histogram.
 *
 * @public
 */
export interface BinWidthOptions {
  /**
   * The options that determine the bin width value.
   *
   * @public
   */
  Value?: number | undefined;

  /**
   * The options that determine the bin count limit.
   *
   * @public
   */
  BinCountLimit?: number | undefined;
}

/**
 * The options that determine the presentation of histogram bins.
 *
 * @public
 */
export interface HistogramBinOptions {
  /**
   * The options that determine the selected bin type.
   *
   * @public
   */
  SelectedBinType?: HistogramBinType | undefined;

  /**
   * The options that determine the bin count of a histogram.
   *
   * @public
   */
  BinCount?: BinCountOptions | undefined;

  /**
   * The options that determine the bin width of a histogram.
   *
   * @public
   */
  BinWidth?: BinWidthOptions | undefined;

  /**
   * The options that determine the bin start value.
   *
   * @public
   */
  StartValue?: number | undefined;
}

/**
 * The field well configuration of a histogram.
 *
 * @public
 */
export interface HistogramAggregatedFieldWells {
  /**
   * The value field wells of a histogram. Values are aggregated by `COUNT` or `DISTINCT_COUNT`.
   *
   * @public
   */
  Values?: MeasureField[] | undefined;
}

/**
 * The field well configuration of a histogram.
 *
 * @public
 */
export interface HistogramFieldWells {
  /**
   * The field well configuration of a histogram.
   *
   * @public
   */
  HistogramAggregatedFieldWells?: HistogramAggregatedFieldWells | undefined;
}

/**
 * The configuration for a `HistogramVisual`.
 *
 * @public
 */
export interface HistogramConfiguration {
  /**
   * The field well configuration of a histogram.
   *
   * @public
   */
  FieldWells?: HistogramFieldWells | undefined;

  /**
   * The options that determine the presentation of the x-axis.
   *
   * @public
   */
  XAxisDisplayOptions?: AxisDisplayOptions | undefined;

  /**
   * The options that determine the presentation of the x-axis label.
   *
   * @public
   */
  XAxisLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * The options that determine the presentation of the y-axis.
   *
   * @public
   */
  YAxisDisplayOptions?: AxisDisplayOptions | undefined;

  /**
   * The options that determine the presentation of histogram bins.
   *
   * @public
   */
  BinOptions?: HistogramBinOptions | undefined;

  /**
   * The data label configuration of a histogram.
   *
   * @public
   */
  DataLabels?: DataLabelOptions | undefined;

  /**
   * The tooltip configuration of a histogram.
   *
   * @public
   */
  Tooltip?: TooltipOptions | undefined;

  /**
   * The visual palette configuration of a histogram.
   *
   * @public
   */
  VisualPalette?: VisualPalette | undefined;

  /**
   * The general visual interactions setup for a visual.
   *
   * @public
   */
  Interactions?: VisualInteractionOptions | undefined;
}

/**
 * A histogram.
 *
 * For more information, see [Using histograms](https://docs.aws.amazon.com/quicksight/latest/user/histogram-charts.html) in the *Amazon Quick Suite User Guide*.
 *
 * @public
 */
export interface HistogramVisual {
  /**
   * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.
   *
   * @public
   */
  VisualId: string | undefined;

  /**
   * The title that is displayed on the visual.
   *
   * @public
   */
  Title?: VisualTitleLabelOptions | undefined;

  /**
   * The subtitle that is displayed on the visual.
   *
   * @public
   */
  Subtitle?: VisualSubtitleLabelOptions | undefined;

  /**
   * The configuration for a `HistogramVisual`.
   *
   * @public
   */
  ChartConfiguration?: HistogramConfiguration | undefined;

  /**
   * The list of custom actions that are configured for a visual.
   *
   * @public
   */
  Actions?: VisualCustomAction[] | undefined;

  /**
   * The alt text for the visual.
   *
   * @public
   */
  VisualContentAltText?: string | undefined;
}

/**
 * The forecast computation configuration.
 *
 * @public
 */
export interface ForecastComputation {
  /**
   * The ID for a computation.
   *
   * @public
   */
  ComputationId: string | undefined;

  /**
   * The name of a computation.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The time field that is used in a computation.
   *
   * @public
   */
  Time?: DimensionField | undefined;

  /**
   * The value field that is used in a computation.
   *
   * @public
   */
  Value?: MeasureField | undefined;

  /**
   * The periods forward setup of a forecast computation.
   *
   * @public
   */
  PeriodsForward?: number | undefined;

  /**
   * The periods backward setup of a forecast computation.
   *
   * @public
   */
  PeriodsBackward?: number | undefined;

  /**
   * The upper boundary setup of a forecast computation.
   *
   * @public
   */
  UpperBoundary?: number | undefined;

  /**
   * The lower boundary setup of a forecast computation.
   *
   * @public
   */
  LowerBoundary?: number | undefined;

  /**
   * The prediction interval setup of a forecast computation.
   *
   * @public
   */
  PredictionInterval?: number | undefined;

  /**
   * The seasonality setup of a forecast computation. Choose one of the following options:
   *
   * - `AUTOMATIC`
   * - `CUSTOM`: Checks the custom seasonality value.
   *
   * @public
   */
  Seasonality?: ForecastComputationSeasonality | undefined;

  /**
   * The custom seasonality value setup of a forecast computation.
   *
   * @public
   */
  CustomSeasonalityValue?: number | undefined;
}

/**
 * The growth rate computation configuration.
 *
 * @public
 */
export interface GrowthRateComputation {
  /**
   * The ID for a computation.
   *
   * @public
   */
  ComputationId: string | undefined;

  /**
   * The name of a computation.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The time field that is used in a computation.
   *
   * @public
   */
  Time?: DimensionField | undefined;

  /**
   * The value field that is used in a computation.
   *
   * @public
   */
  Value?: MeasureField | undefined;

  /**
   * The period size setup of a growth rate computation.
   *
   * @public
   */
  PeriodSize?: number | undefined;
}

/**
 * The maximum and minimum computation configuration.
 *
 * @public
 */
export interface MaximumMinimumComputation {
  /**
   * The ID for a computation.
   *
   * @public
   */
  ComputationId: string | undefined;

  /**
   * The name of a computation.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The time field that is used in a computation.
   *
   * @public
   */
  Time?: DimensionField | undefined;

  /**
   * The value field that is used in a computation.
   *
   * @public
   */
  Value?: MeasureField | undefined;

  /**
   * The type of computation. Choose one of the following options:
   *
   * - MAXIMUM: A maximum computation.
   * - MINIMUM: A minimum computation.
   *
   * @public
   */
  Type: MaximumMinimumComputationType | undefined;
}

/**
 * The metric comparison computation configuration.
 *
 * @public
 */
export interface MetricComparisonComputation {
  /**
   * The ID for a computation.
   *
   * @public
   */
  ComputationId: string | undefined;

  /**
   * The name of a computation.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The time field that is used in a computation.
   *
   * @public
   */
  Time?: DimensionField | undefined;

  /**
   * The field that is used in a metric comparison from value setup.
   *
   * @public
   */
  FromValue?: MeasureField | undefined;

  /**
   * The field that is used in a metric comparison to value setup.
   *
   * @public
   */
  TargetValue?: MeasureField | undefined;
}

/**
 * The period over period computation configuration.
 *
 * @public
 */
export interface PeriodOverPeriodComputation {
  /**
   * The ID for a computation.
   *
   * @public
   */
  ComputationId: string | undefined;

  /**
   * The name of a computation.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The time field that is used in a computation.
   *
   * @public
   */
  Time?: DimensionField | undefined;

  /**
   * The value field that is used in a computation.
   *
   * @public
   */
  Value?: MeasureField | undefined;
}

/**
 * The period to date computation configuration.
 *
 * @public
 */
export interface PeriodToDateComputation {
  /**
   * The ID for a computation.
   *
   * @public
   */
  ComputationId: string | undefined;

  /**
   * The name of a computation.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The time field that is used in a computation.
   *
   * @public
   */
  Time?: DimensionField | undefined;

  /**
   * The value field that is used in a computation.
   *
   * @public
   */
  Value?: MeasureField | undefined;

  /**
   * The time granularity setup of period to date computation. Choose from the following options:
   *
   * - YEAR: Year to date.
   * - MONTH: Month to date.
   *
   * @public
   */
  PeriodTimeGranularity?: TimeGranularity | undefined;
}

/**
 * The top movers and bottom movers computation setup.
 *
 * @public
 */
export interface TopBottomMoversComputation {
  /**
   * The ID for a computation.
   *
   * @public
   */
  ComputationId: string | undefined;

  /**
   * The name of a computation.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The time field that is used in a computation.
   *
   * @public
   */
  Time?: DimensionField | undefined;

  /**
   * The category field that is used in a computation.
   *
   * @public
   */
  Category?: DimensionField | undefined;

  /**
   * The value field that is used in a computation.
   *
   * @public
   */
  Value?: MeasureField | undefined;

  /**
   * The mover size setup of the top and bottom movers computation.
   *
   * @public
   */
  MoverSize?: number | undefined;

  /**
   * The sort order setup of the top and bottom movers computation.
   *
   * @public
   */
  SortOrder?: TopBottomSortOrder | undefined;

  /**
   * The computation type. Choose from the following options:
   *
   * - TOP: Top movers computation.
   * - BOTTOM: Bottom movers computation.
   *
   * @public
   */
  Type: TopBottomComputationType | undefined;
}

/**
 * The top ranked and bottom ranked computation configuration.
 *
 * @public
 */
export interface TopBottomRankedComputation {
  /**
   * The ID for a computation.
   *
   * @public
   */
  ComputationId: string | undefined;

  /**
   * The name of a computation.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The category field that is used in a computation.
   *
   * @public
   */
  Category?: DimensionField | undefined;

  /**
   * The value field that is used in a computation.
   *
   * @public
   */
  Value?: MeasureField | undefined;

  /**
   * The result size of a top and bottom ranked computation.
   *
   * @public
   */
  ResultSize?: number | undefined;

  /**
   * The computation type. Choose one of the following options:
   *
   * - TOP: A top ranked computation.
   * - BOTTOM: A bottom ranked computation.
   *
   * @public
   */
  Type: TopBottomComputationType | undefined;
}

/**
 * The total aggregation computation configuration.
 *
 * @public
 */
export interface TotalAggregationComputation {
  /**
   * The ID for a computation.
   *
   * @public
   */
  ComputationId: string | undefined;

  /**
   * The name of a computation.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The value field that is used in a computation.
   *
   * @public
   */
  Value?: MeasureField | undefined;
}

/**
 * The unique values computation configuration.
 *
 * @public
 */
export interface UniqueValuesComputation {
  /**
   * The ID for a computation.
   *
   * @public
   */
  ComputationId: string | undefined;

  /**
   * The name of a computation.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The category field that is used in a computation.
   *
   * @public
   */
  Category?: DimensionField | undefined;
}

/**
 * The computation union that is used in an insight visual.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 *
 * @public
 */
export interface Computation {
  /**
   * The top ranked and bottom ranked computation configuration.
   *
   * @public
   */
  TopBottomRanked?: TopBottomRankedComputation | undefined;

  /**
   * The top movers and bottom movers computation configuration.
   *
   * @public
   */
  TopBottomMovers?: TopBottomMoversComputation | undefined;

  /**
   * The total aggregation computation configuration.
   *
   * @public
   */
  TotalAggregation?: TotalAggregationComputation | undefined;

  /**
   * The maximum and minimum computation configuration.
   *
   * @public
   */
  MaximumMinimum?: MaximumMinimumComputation | undefined;

  /**
   * The metric comparison computation configuration.
   *
   * @public
   */
  MetricComparison?: MetricComparisonComputation | undefined;

  /**
   * The period over period computation configuration.
   *
   * @public
   */
  PeriodOverPeriod?: PeriodOverPeriodComputation | undefined;

  /**
   * The period to `DataSetIdentifier` computation configuration.
   *
   * @public
   */
  PeriodToDate?: PeriodToDateComputation | undefined;

  /**
   * The growth rate computation configuration.
   *
   * @public
   */
  GrowthRate?: GrowthRateComputation | undefined;

  /**
   * The unique values computation configuration.
   *
   * @public
   */
  UniqueValues?: UniqueValuesComputation | undefined;

  /**
   * The forecast computation configuration.
   *
   * @public
   */
  Forecast?: ForecastComputation | undefined;
}

/**
 * The custom narrative options.
 *
 * @public
 */
export interface CustomNarrativeOptions {
  /**
   * The string input of custom narrative.
   *
   * @public
   */
  Narrative: string | undefined;
}

/**
 * The configuration of an insight visual.
 *
 * @public
 */
export interface InsightConfiguration {
  /**
   * The computations configurations of the insight visual
   *
   * @public
   */
  Computations?: Computation[] | undefined;

  /**
   * The custom narrative of the insight visual.
   *
   * @public
   */
  CustomNarrative?: CustomNarrativeOptions | undefined;

  /**
   * The general visual interactions setup for a visual.
   *
   * @public
   */
  Interactions?: VisualInteractionOptions | undefined;
}

/**
 * An insight visual.
 *
 * For more information, see [Working with insights](https://docs.aws.amazon.com/quicksight/latest/user/computational-insights.html) in the *Amazon Quick Suite User Guide*.
 *
 * @public
 */
export interface InsightVisual {
  /**
   * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.
   *
   * @public
   */
  VisualId: string | undefined;

  /**
   * The title that is displayed on the visual.
   *
   * @public
   */
  Title?: VisualTitleLabelOptions | undefined;

  /**
   * The subtitle that is displayed on the visual.
   *
   * @public
   */
  Subtitle?: VisualSubtitleLabelOptions | undefined;

  /**
   * The configuration of an insight visual.
   *
   * @public
   */
  InsightConfiguration?: InsightConfiguration | undefined;

  /**
   * The list of custom actions that are configured for a visual.
   *
   * @public
   */
  Actions?: VisualCustomAction[] | undefined;

  /**
   * The dataset that is used in the insight visual.
   *
   * @public
   */
  DataSetIdentifier?: string | undefined;

  /**
   * The topic that is used in the insight visual.
   *
   * @public
   */
  TopicIdentifier?: string | undefined;

  /**
   * The alt text for the visual.
   *
   * @public
   */
  VisualContentAltText?: string | undefined;
}

/**
 * The field well configuration of a KPI visual.
 *
 * @public
 */
export interface KPIFieldWells {
  /**
   * The value field wells of a KPI visual.
   *
   * @public
   */
  Values?: MeasureField[] | undefined;

  /**
   * The target value field wells of a KPI visual.
   *
   * @public
   */
  TargetValues?: MeasureField[] | undefined;

  /**
   * The trend group field wells of a KPI visual.
   *
   * @public
   */
  TrendGroups?: DimensionField[] | undefined;
}

/**
 * The options that determine the presentation of the progress bar of a KPI visual.
 *
 * @public
 */
export interface ProgressBarOptions {
  /**
   * The visibility of the progress bar.
   *
   * @public
   */
  Visibility?: Visibility | undefined;
}

/**
 * The options that determine the presentation of the secondary value of a KPI visual.
 *
 * @public
 */
export interface SecondaryValueOptions {
  /**
   * Determines the visibility of the secondary value.
   *
   * @public
   */
  Visibility?: Visibility | undefined;
}

/**
 * The options that determine the visibility, color, type, and tooltip visibility of the sparkline of a KPI visual.
 *
 * @public
 */
export interface KPISparklineOptions {
  /**
   * The visibility of the sparkline.
   *
   * @public
   */
  Visibility?: Visibility | undefined;

  /**
   * The type of the sparkline.
   *
   * @public
   */
  Type: KPISparklineType | undefined;

  /**
   * The color of the sparkline.
   *
   * @public
   */
  Color?: string | undefined;

  /**
   * The tooltip visibility of the sparkline.
   *
   * @public
   */
  TooltipVisibility?: Visibility | undefined;
}

/**
 * The options that determine the presentation of trend arrows in a KPI visual.
 *
 * @public
 */
export interface TrendArrowOptions {
  /**
   * The visibility of the trend arrows.
   *
   * @public
   */
  Visibility?: Visibility | undefined;
}

/**
 * The standard layout of the KPI visual.
 *
 * @public
 */
export interface KPIVisualStandardLayout {
  /**
   * The standard layout type.
   *
   * @public
   */
  Type: KPIVisualStandardLayoutType | undefined;
}

/**
 * The options that determine the layout a KPI visual.
 *
 * @public
 */
export interface KPIVisualLayoutOptions {
  /**
   * The standard layout of the KPI visual.
   *
   * @public
   */
  StandardLayout?: KPIVisualStandardLayout | undefined;
}

/**
 * The options that determine the presentation of a KPI visual.
 *
 * @public
 */
export interface KPIOptions {
  /**
   * The options that determine the presentation of the progress bar of a KPI visual.
   *
   * @public
   */
  ProgressBar?: ProgressBarOptions | undefined;

  /**
   * The options that determine the presentation of trend arrows in a KPI visual.
   *
   * @public
   */
  TrendArrows?: TrendArrowOptions | undefined;

  /**
   * The options that determine the presentation of the secondary value of a KPI visual.
   *
   * @public
   */
  SecondaryValue?: SecondaryValueOptions | undefined;

  /**
   * The comparison configuration of a KPI visual.
   *
   * @public
   */
  Comparison?: ComparisonConfiguration | undefined;

  /**
   * The options that determine the primary value display type.
   *
   * @public
   */
  PrimaryValueDisplayType?: PrimaryValueDisplayType | undefined;

  /**
   * The options that determine the primary value font configuration.
   *
   * @public
   */
  PrimaryValueFontConfiguration?: FontConfiguration | undefined;

  /**
   * The options that determine the secondary value font configuration.
   *
   * @public
   */
  SecondaryValueFontConfiguration?: FontConfiguration | undefined;

  /**
   * The options that determine the visibility, color, type, and tooltip visibility of the sparkline of a KPI visual.
   *
   * @public
   */
  Sparkline?: KPISparklineOptions | undefined;

  /**
   * The options that determine the layout a KPI visual.
   *
   * @public
   */
  VisualLayoutOptions?: KPIVisualLayoutOptions | undefined;
}

/**
 * The sort configuration of a KPI visual.
 *
 * @public
 */
export interface KPISortConfiguration {
  /**
   * The sort configuration of the trend group fields.
   *
   * @public
   */
  TrendGroupSort?: FieldSortOptions[] | undefined;
}

/**
 * The configuration of a KPI visual.
 *
 * @public
 */
export interface KPIConfiguration {
  /**
   * The field well configuration of a KPI visual.
   *
   * @public
   */
  FieldWells?: KPIFieldWells | undefined;

  /**
   * The sort configuration of a KPI visual.
   *
   * @public
   */
  SortConfiguration?: KPISortConfiguration | undefined;

  /**
   * The options that determine the presentation of a KPI visual.
   *
   * @public
   */
  KPIOptions?: KPIOptions | undefined;

  /**
   * The general visual interactions setup for a visual.
   *
   * @public
   */
  Interactions?: VisualInteractionOptions | undefined;
}

/**
 * The conditional formatting for the actual value of a KPI visual.
 *
 * @public
 */
export interface KPIActualValueConditionalFormatting {
  /**
   * The conditional formatting of the actual value's text color.
   *
   * @public
   */
  TextColor?: ConditionalFormattingColor | undefined;

  /**
   * The conditional formatting of the actual value's icon.
   *
   * @public
   */
  Icon?: ConditionalFormattingIcon | undefined;
}

/**
 * The conditional formatting for the comparison value of a KPI visual.
 *
 * @public
 */
export interface KPIComparisonValueConditionalFormatting {
  /**
   * The conditional formatting of the comparison value's text color.
   *
   * @public
   */
  TextColor?: ConditionalFormattingColor | undefined;

  /**
   * The conditional formatting of the comparison value's icon.
   *
   * @public
   */
  Icon?: ConditionalFormattingIcon | undefined;
}

/**
 * The conditional formatting for the primary value of a KPI visual.
 *
 * @public
 */
export interface KPIPrimaryValueConditionalFormatting {
  /**
   * The conditional formatting of the primary value's text color.
   *
   * @public
   */
  TextColor?: ConditionalFormattingColor | undefined;

  /**
   * The conditional formatting of the primary value's icon.
   *
   * @public
   */
  Icon?: ConditionalFormattingIcon | undefined;
}

/**
 * The conditional formatting for the progress bar of a KPI visual.
 *
 * @public
 */
export interface KPIProgressBarConditionalFormatting {
  /**
   * The conditional formatting of the progress bar's foreground color.
   *
   * @public
   */
  ForegroundColor?: ConditionalFormattingColor | undefined;
}

/**
 * The conditional formatting options of a KPI visual.
 *
 * @public
 */
export interface KPIConditionalFormattingOption {
  /**
   * The conditional formatting for the primary value of a KPI visual.
   *
   * @public
   */
  PrimaryValue?: KPIPrimaryValueConditionalFormatting | undefined;

  /**
   * The conditional formatting for the progress bar of a KPI visual.
   *
   * @public
   */
  ProgressBar?: KPIProgressBarConditionalFormatting | undefined;

  /**
   * The conditional formatting for the actual value of a KPI visual.
   *
   * @public
   */
  ActualValue?: KPIActualValueConditionalFormatting | undefined;

  /**
   * The conditional formatting for the comparison value of a KPI visual.
   *
   * @public
   */
  ComparisonValue?: KPIComparisonValueConditionalFormatting | undefined;
}

/**
 * The conditional formatting of a KPI visual.
 *
 * @public
 */
export interface KPIConditionalFormatting {
  /**
   * The conditional formatting options of a KPI visual.
   *
   * @public
   */
  ConditionalFormattingOptions?: KPIConditionalFormattingOption[] | undefined;
}

/**
 * A key performance indicator (KPI).
 *
 * For more information, see [Using KPIs](https://docs.aws.amazon.com/quicksight/latest/user/kpi.html) in the *Amazon Quick Suite User Guide*.
 *
 * @public
 */
export interface KPIVisual {
  /**
   * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.
   *
   * @public
   */
  VisualId: string | undefined;

  /**
   * The title that is displayed on the visual.
   *
   * @public
   */
  Title?: VisualTitleLabelOptions | undefined;

  /**
   * The subtitle that is displayed on the visual.
   *
   * @public
   */
  Subtitle?: VisualSubtitleLabelOptions | undefined;

  /**
   * The configuration of a KPI visual.
   *
   * @public
   */
  ChartConfiguration?: KPIConfiguration | undefined;

  /**
   * The conditional formatting of a KPI visual.
   *
   * @public
   */
  ConditionalFormatting?: KPIConditionalFormatting | undefined;

  /**
   * The list of custom actions that are configured for a visual.
   *
   * @public
   */
  Actions?: VisualCustomAction[] | undefined;

  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * @public
   */
  ColumnHierarchies?: ColumnHierarchy[] | undefined;

  /**
   * The alt text for the visual.
   *
   * @public
   */
  VisualContentAltText?: string | undefined;
}

/**
 * The operation that is defined by the custom action.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 *
 * @public
 */
export interface LayerCustomActionOperation {
  /**
   * The filter operation that filters data included in a visual or in an entire sheet.
   *
   * @public
   */
  FilterOperation?: CustomActionFilterOperation | undefined;

  /**
   * The navigation operation that navigates between different sheets in the same analysis.
   *
   * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
   *
   * @public
   */
  NavigationOperation?: CustomActionNavigationOperation | undefined;

  /**
   * The URL operation that opens a link to another webpage.
   *
   * @public
   */
  URLOperation?: CustomActionURLOperation | undefined;

  /**
   * The set parameter operation that sets parameters in custom action.
   *
   * @public
   */
  SetParametersOperation?: CustomActionSetParametersOperation | undefined;
}

/**
 * A layer custom action.
 *
 * @public
 */
export interface LayerCustomAction {
  /**
   * The ID of the custom action.
   *
   * @public
   */
  CustomActionId: string | undefined;

  /**
   * The name of the custom action.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The status of the `LayerCustomAction`.
   *
   * @public
   */
  Status?: WidgetStatus | undefined;

  /**
   * The trigger of the `LayerCustomAction`.
   *
   * Valid values are defined as follows:
   *
   * - `DATA_POINT_CLICK`: Initiates a custom action by a left pointer click on a data point.
   * - `DATA_POINT_MENU`: Initiates a custom action by right pointer click from the menu.
   *
   * @public
   */
  Trigger: LayerCustomActionTrigger | undefined;

  /**
   * A list of `LayerCustomActionOperations`.
   *
   * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
   *
   * @public
   */
  ActionOperations: LayerCustomActionOperation[] | undefined;
}

/**
 * The source properties for a geospatial static file.
 *
 * @public
 */
export interface GeospatialStaticFileSource {
  /**
   * The ID of the static file.
   *
   * @public
   */
  StaticFileId: string | undefined;
}

/**
 * The data source properties for the geospatial data.
 *
 * @public
 */
export interface GeospatialDataSourceItem {
  /**
   * The static file data source properties for the geospatial data.
   *
   * @public
   */
  StaticFileDataSource?: GeospatialStaticFileSource | undefined;
}

/**
 * The color field that defines a gradient or categorical style.
 *
 * @public
 */
export interface GeospatialLayerColorField {
  /**
   * A list of color dimension fields.
   *
   * @public
   */
  ColorDimensionsFields?: DimensionField[] | undefined;

  /**
   * A list of color measure fields.
   *
   * @public
   */
  ColorValuesFields?: MeasureField[] | undefined;
}

/**
 * The unaggregated field for a table.
 *
 * @public
 */
export interface UnaggregatedField {
  /**
   * The custom field ID.
   *
   * @public
   */
  FieldId: string | undefined;

  /**
   * The column that is used in the `UnaggregatedField`.
   *
   * @public
   */
  Column: ColumnIdentifier | undefined;

  /**
   * The format configuration of the field.
   *
   * @public
   */
  FormatConfiguration?: FormatConfiguration | undefined;
}

/**
 * The custom actions for a layer.
 *
 * @public
 */
export interface GeospatialLayerJoinDefinition {
  /**
   * The name of the field or property in the geospatial data source.
   *
   * @public
   */
  ShapeKeyField?: string | undefined;

  /**
   * The unaggregated field for a table.
   *
   * @public
   */
  DatasetKeyField?: UnaggregatedField | undefined;

  /**
   * The geospatial color field for the join definition.
   *
   * @public
   */
  ColorField?: GeospatialLayerColorField | undefined;
}

/**
 * The categorical data color for a single category.
 *
 * @public
 */
export interface GeospatialCategoricalDataColor {
  /**
   * The color and opacity values for the category data color.
   *
   * @public
   */
  Color: string | undefined;

  /**
   * The data value for the category data color.
   *
   * @public
   */
  DataValue: string | undefined;
}

/**
 * The symbol style for null data.
 *
 * @public
 */
export interface GeospatialNullSymbolStyle {
  /**
   * The color and opacity values for the fill color.
   *
   * @public
   */
  FillColor?: string | undefined;

  /**
   * The color and opacity values for the stroke color.
   *
   * @public
   */
  StrokeColor?: string | undefined;

  /**
   * The width of the border stroke.
   *
   * @public
   */
  StrokeWidth?: number | undefined;
}

/**
 * The properties for the visualization of null data.
 *
 * @public
 */
export interface GeospatialNullDataSettings {
  /**
   * The symbol style for null data.
   *
   * @public
   */
  SymbolStyle: GeospatialNullSymbolStyle | undefined;
}

/**
 * The definition for a categorical color.
 *
 * @public
 */
export interface GeospatialCategoricalColor {
  /**
   * A list of categorical data colors for each category.
   *
   * @public
   */
  CategoryDataColors: GeospatialCategoricalDataColor[] | undefined;

  /**
   * The state of visibility for null data.
   *
   * @public
   */
  NullDataVisibility?: Visibility | undefined;

  /**
   * The null data visualization settings.
   *
   * @public
   */
  NullDataSettings?: GeospatialNullDataSettings | undefined;

  /**
   * The default opacity of a categorical color.
   *
   * @public
   */
  DefaultOpacity?: number | undefined;
}

/**
 * The gradient step color for a single step.
 *
 * @public
 */
export interface GeospatialGradientStepColor {
  /**
   * The color and opacity values for the gradient step color.
   *
   * @public
   */
  Color: string | undefined;

  /**
   * The data value for the gradient step color.
   *
   * @public
   */
  DataValue: number | undefined;
}

/**
 * The definition for a gradient color.
 *
 * @public
 */
export interface GeospatialGradientColor {
  /**
   * A list of gradient step colors for the gradient.
   *
   * @public
   */
  StepColors: GeospatialGradientStepColor[] | undefined;

  /**
   * The state of visibility for null data.
   *
   * @public
   */
  NullDataVisibility?: Visibility | undefined;

  /**
   * The null data visualization settings.
   *
   * @public
   */
  NullDataSettings?: GeospatialNullDataSettings | undefined;

  /**
   * The default opacity for the gradient color.
   *
   * @public
   */
  DefaultOpacity?: number | undefined;
}

/**
 * The definition for a solid color.
 *
 * @public
 */
export interface GeospatialSolidColor {
  /**
   * The color and opacity values for the color.
   *
   * @public
   */
  Color: string | undefined;

  /**
   * Enables and disables the view state of the color.
   *
   * @public
   */
  State?: GeospatialColorState | undefined;
}

/**
 * The visualization properties for solid, gradient, and categorical colors.
 *
 * @public
 */
export interface GeospatialColor {
  /**
   * The visualization properties for the solid color.
   *
   * @public
   */
  Solid?: GeospatialSolidColor | undefined;

  /**
   * The visualization properties for the gradient color.
   *
   * @public
   */
  Gradient?: GeospatialGradientColor | undefined;

  /**
   * The visualization properties for the categorical color.
   *
   * @public
   */
  Categorical?: GeospatialCategoricalColor | undefined;
}

/**
 * The width properties for a line.
 *
 * @public
 */
export interface GeospatialLineWidth {
  /**
   * The positive value for the width of a line.
   *
   * @public
   */
  LineWidth?: number | undefined;
}

/**
 * The symbol style for a line layer.
 *
 * @public
 */
export interface GeospatialLineSymbolStyle {
  /**
   * The color and opacity values for the fill color.
   *
   * @public
   */
  FillColor?: GeospatialColor | undefined;

  /**
   * The width value for a line.
   *
   * @public
   */
  LineWidth?: GeospatialLineWidth | undefined;
}

/**
 * The visualization style for a line layer.
 *
 * @public
 */
export interface GeospatialLineStyle {
  /**
   * The symbol style for a line style.
   *
   * @public
   */
  LineSymbolStyle?: GeospatialLineSymbolStyle | undefined;
}

/**
 * The geospatial Line layer.
 *
 * @public
 */
export interface GeospatialLineLayer {
  /**
   * The visualization style for a line layer.
   *
   * @public
   */
  Style: GeospatialLineStyle | undefined;
}

/**
 * The geospatial radius for a circle.
 *
 * @public
 */
export interface GeospatialCircleRadius {
  /**
   * The positive value for the radius of a circle.
   *
   * @public
   */
  Radius?: number | undefined;
}

/**
 * The properties for a circle symbol style.
 *
 * @public
 */
export interface GeospatialCircleSymbolStyle {
  /**
   * The color and opacity values for the fill color.
   *
   * @public
   */
  FillColor?: GeospatialColor | undefined;

  /**
   * The color and opacity values for the stroke color.
   *
   * @public
   */
  StrokeColor?: GeospatialColor | undefined;

  /**
   * The width of the stroke (border).
   *
   * @public
   */
  StrokeWidth?: GeospatialLineWidth | undefined;

  /**
   * The radius of the circle.
   *
   * @public
   */
  CircleRadius?: GeospatialCircleRadius | undefined;
}

/**
 * The point style for a point layer.
 *
 * @public
 */
export interface GeospatialPointStyle {
  /**
   * The circle symbol style for a point layer.
   *
   * @public
   */
  CircleSymbolStyle?: GeospatialCircleSymbolStyle | undefined;
}

/**
 * The geospatial Point layer.
 *
 * @public
 */
export interface GeospatialPointLayer {
  /**
   * The visualization style for a point layer.
   *
   * @public
   */
  Style: GeospatialPointStyle | undefined;
}

/**
 * The polygon symbol style for a polygon layer.
 *
 * @public
 */
export interface GeospatialPolygonSymbolStyle {
  /**
   * The color and opacity values for the fill color.
   *
   * @public
   */
  FillColor?: GeospatialColor | undefined;

  /**
   * The color and opacity values for the stroke color.
   *
   * @public
   */
  StrokeColor?: GeospatialColor | undefined;

  /**
   * The width of the border stroke.
   *
   * @public
   */
  StrokeWidth?: GeospatialLineWidth | undefined;
}

/**
 * The polygon style for a polygon layer.
 *
 * @public
 */
export interface GeospatialPolygonStyle {
  /**
   * The polygon symbol style for a polygon layer.
   *
   * @public
   */
  PolygonSymbolStyle?: GeospatialPolygonSymbolStyle | undefined;
}

/**
 * The geospatial polygon layer.
 *
 * @public
 */
export interface GeospatialPolygonLayer {
  /**
   * The visualization style for a polygon layer.
   *
   * @public
   */
  Style: GeospatialPolygonStyle | undefined;
}

/**
 * The definition properties for a geospatial layer.
 *
 * @public
 */
export interface GeospatialLayerDefinition {
  /**
   * The definition for a point layer.
   *
   * @public
   */
  PointLayer?: GeospatialPointLayer | undefined;

  /**
   * The definition for a line layer.
   *
   * @public
   */
  LineLayer?: GeospatialLineLayer | undefined;

  /**
   * The definition for a polygon layer.
   *
   * @public
   */
  PolygonLayer?: GeospatialPolygonLayer | undefined;
}

/**
 * The properties for a single geospatial layer.
 *
 * @public
 */
export interface GeospatialLayerItem {
  /**
   * The ID of the layer.
   *
   * @public
   */
  LayerId: string | undefined;

  /**
   * The layer type.
   *
   * @public
   */
  LayerType?: GeospatialLayerType | undefined;

  /**
   * The data source for the layer.
   *
   * @public
   */
  DataSource?: GeospatialDataSourceItem | undefined;

  /**
   * The label that is displayed for the layer.
   *
   * @public
   */
  Label?: string | undefined;

  /**
   * The state of visibility for the layer.
   *
   * @public
   */
  Visibility?: Visibility | undefined;

  /**
   * The definition properties for a layer.
   *
   * @public
   */
  LayerDefinition?: GeospatialLayerDefinition | undefined;

  /**
   * The display options for the visual tooltip.
   *
   * @public
   */
  Tooltip?: TooltipOptions | undefined;

  /**
   * The join definition properties for a layer.
   *
   * @public
   */
  JoinDefinition?: GeospatialLayerJoinDefinition | undefined;

  /**
   * A list of custom actions for a layer.
   *
   * @public
   */
  Actions?: LayerCustomAction[] | undefined;
}

/**
 * The map state properties for a map.
 *
 * @public
 */
export interface GeospatialMapState {
  /**
   * The bound options (north, south, west, east) of the geospatial window options.
   *
   * @public
   */
  Bounds?: GeospatialCoordinateBounds | undefined;

  /**
   * Enables or disables map navigation for a map.
   *
   * @public
   */
  MapNavigation?: GeospatialMapNavigation | undefined;
}

/**
 * The map style properties for a map.
 *
 * @public
 */
export interface GeospatialMapStyle {
  /**
   * The selected base map style.
   *
   * @public
   */
  BaseMapStyle?: BaseMapStyleType | undefined;

  /**
   * The background color and opacity values for a map.
   *
   * @public
   */
  BackgroundColor?: string | undefined;

  /**
   * The state of visibility for the base map.
   *
   * @public
   */
  BaseMapVisibility?: Visibility | undefined;
}

/**
 * The map definition that defines map state, map style, and geospatial layers.
 *
 * @public
 */
export interface GeospatialLayerMapConfiguration {
  /**
   * The options for the legend setup of a visual.
   *
   * @public
   */
  Legend?: LegendOptions | undefined;

  /**
   * The geospatial layers to visualize on the map.
   *
   * @public
   */
  MapLayers?: GeospatialLayerItem[] | undefined;

  /**
   * The map state properties for the map.
   *
   * @public
   */
  MapState?: GeospatialMapState | undefined;

  /**
   * The map style properties for the map.
   *
   * @public
   */
  MapStyle?: GeospatialMapStyle | undefined;

  /**
   * The general visual interactions setup for visual publish options
   *
   * @public
   */
  Interactions?: VisualInteractionOptions | undefined;
}

/**
 * A layer map visual.
 *
 * @public
 */
export interface LayerMapVisual {
  /**
   * The ID of the visual.
   *
   * @public
   */
  VisualId: string | undefined;

  /**
   * The title label options for a visual.
   *
   * @public
   */
  Title?: VisualTitleLabelOptions | undefined;

  /**
   * The subtitle label options for a visual.
   *
   * @public
   */
  Subtitle?: VisualSubtitleLabelOptions | undefined;

  /**
   * The configuration settings of the visual.
   *
   * @public
   */
  ChartConfiguration?: GeospatialLayerMapConfiguration | undefined;

  /**
   * The dataset that is used to create the layer map visual. You can't create a visual without a dataset or a topic.
   *
   * @public
   */
  DataSetIdentifier?: string | undefined;

  /**
   * The topic that is used in the layer map visual. You can't create a visual without a dataset or a topic.
   *
   * @public
   */
  TopicIdentifier?: string | undefined;

  /**
   * The alt text for the visual.
   *
   * @public
   */
  VisualContentAltText?: string | undefined;
}

/**
 * The options that determine the default presentation of all line series in `LineChartVisual`.
 *
 * @public
 */
export interface LineChartDefaultSeriesSettings {
  /**
   * The axis to which you are binding all line series to.
   *
   * @public
   */
  AxisBinding?: AxisBinding | undefined;

  /**
   * Line styles options for all line series in the visual.
   *
   * @public
   */
  LineStyleSettings?: LineChartLineStyleSettings | undefined;

  /**
   * Marker styles options for all line series in the visual.
   *
   * @public
   */
  MarkerStyleSettings?: LineChartMarkerStyleSettings | undefined;

  /**
   * Decal settings options for all line series in the visual.
   *
   * @public
   */
  DecalSettings?: DecalSettings | undefined;
}

/**
 * The field well configuration of a line chart.
 *
 * @public
 */
export interface LineChartAggregatedFieldWells {
  /**
   * The category field wells of a line chart. Values are grouped by category fields.
   *
   * @public
   */
  Category?: DimensionField[] | undefined;

  /**
   * The value field wells of a line chart. Values are aggregated based on categories.
   *
   * @public
   */
  Values?: MeasureField[] | undefined;

  /**
   * The color field wells of a line chart. Values are grouped by category fields.
   *
   * @public
   */
  Colors?: DimensionField[] | undefined;

  /**
   * The small multiples field well of a line chart.
   *
   * @public
   */
  SmallMultiples?: DimensionField[] | undefined;
}

/**
 * The field well configuration of a line chart.
 *
 * @public
 */
export interface LineChartFieldWells {
  /**
   * The field well configuration of a line chart.
   *
   * @public
   */
  LineChartAggregatedFieldWells?: LineChartAggregatedFieldWells | undefined;
}

/**
 * The forecast properties setup of a forecast in the line chart.
 *
 * @public
 */
export interface TimeBasedForecastProperties {
  /**
   * The periods forward setup of a forecast computation.
   *
   * @public
   */
  PeriodsForward?: number | undefined;

  /**
   * The periods backward setup of a forecast computation.
   *
   * @public
   */
  PeriodsBackward?: number | undefined;

  /**
   * The upper boundary setup of a forecast computation.
   *
   * @public
   */
  UpperBoundary?: number | undefined;

  /**
   * The lower boundary setup of a forecast computation.
   *
   * @public
   */
  LowerBoundary?: number | undefined;

  /**
   * The prediction interval setup of a forecast computation.
   *
   * @public
   */
  PredictionInterval?: number | undefined;

  /**
   * The seasonality setup of a forecast computation. Choose one of the following options:
   *
   * - `NULL`: The input is set to `NULL`.
   * - `NON_NULL`: The input is set to a custom value.
   *
   * @public
   */
  Seasonality?: number | undefined;
}

/**
 * Provides the forecast to meet the target for a particular date.
 *
 * @public
 */
export interface WhatIfPointScenario {
  /**
   * The date that you need the forecast results for.
   *
   * @public
   */
  Date: Date | undefined;

  /**
   * The target value that you want to meet for the provided date.
   *
   * @public
   */
  Value: number | undefined;
}

/**
 * Provides the forecast to meet the target for a particular date range.
 *
 * @public
 */
export interface WhatIfRangeScenario {
  /**
   * The start date in the date range that you need the forecast results for.
   *
   * @public
   */
  StartDate: Date | undefined;

  /**
   * The end date in the date range that you need the forecast results for.
   *
   * @public
   */
  EndDate: Date | undefined;

  /**
   * The target value that you want to meet for the provided date range.
   *
   * @public
   */
  Value: number | undefined;
}

/**
 * The forecast scenario of a forecast in the line chart.
 *
 * @public
 */
export interface ForecastScenario {
  /**
   * The what-if analysis forecast setup with the target date.
   *
   * @public
   */
  WhatIfPointScenario?: WhatIfPointScenario | undefined;

  /**
   * The what-if analysis forecast setup with the date range.
   *
   * @public
   */
  WhatIfRangeScenario?: WhatIfRangeScenario | undefined;
}

/**
 * The forecast configuration that is used in a line chart's display properties.
 *
 * @public
 */
export interface ForecastConfiguration {
  /**
   * The forecast properties setup of a forecast in the line chart.
   *
   * @public
   */
  ForecastProperties?: TimeBasedForecastProperties | undefined;

  /**
   * The forecast scenario of a forecast in the line chart.
   *
   * @public
   */
  Scenario?: ForecastScenario | undefined;
}

/**
 * The configuration options that determine how missing data is treated during the rendering of a line chart.
 *
 * @public
 */
export interface MissingDataConfiguration {
  /**
   * The treatment option that determines how missing data should be rendered. Choose from the following options:
   *
   * - `INTERPOLATE`: Interpolate missing values between the prior and the next known value.
   * - `SHOW_AS_ZERO`: Show missing values as the value `0`.
   * - `SHOW_AS_BLANK`: Display a blank space when rendering missing data.
   *
   * @public
   */
  TreatmentOption?: MissingDataTreatmentOption | undefined;
}

/**
 * The series axis configuration of a line chart.
 *
 * @public
 */
export interface LineSeriesAxisDisplayOptions {
  /**
   * The options that determine the presentation of the line series axis.
   *
   * @public
   */
  AxisOptions?: AxisDisplayOptions | undefined;

  /**
   * The configuration options that determine how missing data is treated during the rendering of a line chart.
   *
   * @public
   */
  MissingDataConfigurations?: MissingDataConfiguration[] | undefined;
}

/**
 * The options that determine the presentation of a line series in the visual
 *
 * @public
 */
export interface LineChartSeriesSettings {
  /**
   * Line styles options for a line series in `LineChartVisual`.
   *
   * @public
   */
  LineStyleSettings?: LineChartLineStyleSettings | undefined;

  /**
   * Marker styles options for a line series in `LineChartVisual`.
   *
   * @public
   */
  MarkerStyleSettings?: LineChartMarkerStyleSettings | undefined;

  /**
   * Decal settings for a line series in `LineChartVisual`.
   *
   * @public
   */
  DecalSettings?: DecalSettings | undefined;
}

/**
 * The data field series item configuration of a line chart.
 *
 * @public
 */
export interface DataFieldSeriesItem {
  /**
   * The field ID of the field that you are setting the axis binding to.
   *
   * @public
   */
  FieldId: string | undefined;

  /**
   * The field value of the field that you are setting the axis binding to.
   *
   * @public
   */
  FieldValue?: string | undefined;

  /**
   * The axis that you are binding the field to.
   *
   * @public
   */
  AxisBinding: AxisBinding | undefined;

  /**
   * The options that determine the presentation of line series associated to the field.
   *
   * @public
   */
  Settings?: LineChartSeriesSettings | undefined;
}

/**
 * The field series item configuration of a line chart.
 *
 * @public
 */
export interface FieldSeriesItem {
  /**
   * The field ID of the field for which you are setting the axis binding.
   *
   * @public
   */
  FieldId: string | undefined;

  /**
   * The axis that you are binding the field to.
   *
   * @public
   */
  AxisBinding: AxisBinding | undefined;

  /**
   * The options that determine the presentation of line series associated to the field.
   *
   * @public
   */
  Settings?: LineChartSeriesSettings | undefined;
}

/**
 * The series item configuration of a line chart.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 *
 * @public
 */
export interface SeriesItem {
  /**
   * The field series item configuration of a line chart.
   *
   * @public
   */
  FieldSeriesItem?: FieldSeriesItem | undefined;

  /**
   * The data field series item configuration of a line chart.
   *
   * @public
   */
  DataFieldSeriesItem?: DataFieldSeriesItem | undefined;
}

/**
 * The sort configuration of a line chart.
 *
 * @public
 */
export interface LineChartSortConfiguration {
  /**
   * The sort configuration of the category fields.
   *
   * @public
   */
  CategorySort?: FieldSortOptions[] | undefined;

  /**
   * The limit on the number of categories that are displayed in a line chart.
   *
   * @public
   */
  CategoryItemsLimitConfiguration?: ItemsLimitConfiguration | undefined;

  /**
   * The limit on the number of lines that are displayed in a line chart.
   *
   * @public
   */
  ColorItemsLimitConfiguration?: ItemsLimitConfiguration | undefined;

  /**
   * The sort configuration of the small multiples field.
   *
   * @public
   */
  SmallMultiplesSort?: FieldSortOptions[] | undefined;

  /**
   * The limit on the number of small multiples panels that are displayed.
   *
   * @public
   */
  SmallMultiplesLimitConfiguration?: ItemsLimitConfiguration | undefined;
}

/**
 * The configuration of a line chart.
 *
 * @public
 */
export interface LineChartConfiguration {
  /**
   * The field well configuration of a line chart.
   *
   * @public
   */
  FieldWells?: LineChartFieldWells | undefined;

  /**
   * The sort configuration of a line chart.
   *
   * @public
   */
  SortConfiguration?: LineChartSortConfiguration | undefined;

  /**
   * The forecast configuration of a line chart.
   *
   * @public
   */
  ForecastConfigurations?: ForecastConfiguration[] | undefined;

  /**
   * Determines the type of the line chart.
   *
   * @public
   */
  Type?: LineChartType | undefined;

  /**
   * The small multiples setup for the visual.
   *
   * @public
   */
  SmallMultiplesOptions?: SmallMultiplesOptions | undefined;

  /**
   * The options that determine the presentation of the x-axis.
   *
   * @public
   */
  XAxisDisplayOptions?: AxisDisplayOptions | undefined;

  /**
   * The options that determine the presentation of the x-axis label.
   *
   * @public
   */
  XAxisLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * The series axis configuration of a line chart.
   *
   * @public
   */
  PrimaryYAxisDisplayOptions?: LineSeriesAxisDisplayOptions | undefined;

  /**
   * The options that determine the presentation of the y-axis label.
   *
   * @public
   */
  PrimaryYAxisLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * The series axis configuration of a line chart.
   *
   * @public
   */
  SecondaryYAxisDisplayOptions?: LineSeriesAxisDisplayOptions | undefined;

  /**
   * The options that determine the presentation of the secondary y-axis label.
   *
   * @public
   */
  SecondaryYAxisLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * The settings of a chart's single axis configuration.
   *
   * @public
   */
  SingleAxisOptions?: SingleAxisOptions | undefined;

  /**
   * The options that determine the default presentation of all line series in `LineChartVisual`.
   *
   * @public
   */
  DefaultSeriesSettings?: LineChartDefaultSeriesSettings | undefined;

  /**
   * The series item configuration of a line chart.
   *
   * @public
   */
  Series?: SeriesItem[] | undefined;

  /**
   * The legend configuration of a line chart.
   *
   * @public
   */
  Legend?: LegendOptions | undefined;

  /**
   * The data label configuration of a line chart.
   *
   * @public
   */
  DataLabels?: DataLabelOptions | undefined;

  /**
   * The reference lines configuration of a line chart.
   *
   * @public
   */
  ReferenceLines?: ReferenceLine[] | undefined;

  /**
   * The tooltip configuration of a line chart.
   *
   * @public
   */
  Tooltip?: TooltipOptions | undefined;

  /**
   * The default configuration of a line chart's contribution analysis.
   *
   * @public
   */
  ContributionAnalysisDefaults?: ContributionAnalysisDefault[] | undefined;

  /**
   * The visual palette configuration of a line chart.
   *
   * @public
   */
  VisualPalette?: VisualPalette | undefined;

  /**
   * The general visual interactions setup for a visual.
   *
   * @public
   */
  Interactions?: VisualInteractionOptions | undefined;
}

/**
 * A line chart.
 *
 * For more information, see [Using line charts](https://docs.aws.amazon.com/quicksight/latest/user/line-charts.html) in the *Amazon Quick Suite User Guide*.
 *
 * @public
 */
export interface LineChartVisual {
  /**
   * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.
   *
   * @public
   */
  VisualId: string | undefined;

  /**
   * The title that is displayed on the visual.
   *
   * @public
   */
  Title?: VisualTitleLabelOptions | undefined;

  /**
   * The subtitle that is displayed on the visual.
   *
   * @public
   */
  Subtitle?: VisualSubtitleLabelOptions | undefined;

  /**
   * The configuration of a line chart.
   *
   * @public
   */
  ChartConfiguration?: LineChartConfiguration | undefined;

  /**
   * The list of custom actions that are configured for a visual.
   *
   * @public
   */
  Actions?: VisualCustomAction[] | undefined;

  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * @public
   */
  ColumnHierarchies?: ColumnHierarchy[] | undefined;

  /**
   * The alt text for the visual.
   *
   * @public
   */
  VisualContentAltText?: string | undefined;
}

/**
 * The options that determine the arc thickness of a `GaugeChartVisual`.
 *
 * @public
 */
export interface ArcOptions {
  /**
   * The arc thickness of a `GaugeChartVisual`.
   *
   * @public
   */
  ArcThickness?: ArcThickness | undefined;
}

/**
 * The label options of the label that is displayed in the center of a donut chart. This option isn't available for pie charts.
 *
 * @public
 */
export interface DonutCenterOptions {
  /**
   * Determines the visibility of the label in a donut chart. In the Quick Sight console, this option is called `'Show total'`.
   *
   * @public
   */
  LabelVisibility?: Visibility | undefined;
}

/**
 * The options for configuring a donut chart or pie chart.
 *
 * @public
 */
export interface DonutOptions {
  /**
   * The option for define the arc of the chart shape. Valid values are as follows:
   *
   * - `WHOLE` - A pie chart
   * - `SMALL`- A small-sized donut chart
   * - `MEDIUM`- A medium-sized donut chart
   * - `LARGE`- A large-sized donut chart
   *
   * @public
   */
  ArcOptions?: ArcOptions | undefined;

  /**
   * The label options of the label that is displayed in the center of a donut chart. This option isn't available for pie charts.
   *
   * @public
   */
  DonutCenterOptions?: DonutCenterOptions | undefined;
}

/**
 * The field well configuration of a pie chart.
 *
 * @public
 */
export interface PieChartAggregatedFieldWells {
  /**
   * The category (group/color) field wells of a pie chart.
   *
   * @public
   */
  Category?: DimensionField[] | undefined;

  /**
   * The value field wells of a pie chart. Values are aggregated based on categories.
   *
   * @public
   */
  Values?: MeasureField[] | undefined;

  /**
   * The small multiples field well of a pie chart.
   *
   * @public
   */
  SmallMultiples?: DimensionField[] | undefined;
}

/**
 * The field well configuration of a pie chart.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 *
 * @public
 */
export interface PieChartFieldWells {
  /**
   * The field well configuration of a pie chart.
   *
   * @public
   */
  PieChartAggregatedFieldWells?: PieChartAggregatedFieldWells | undefined;
}

/**
 * The sort configuration of a pie chart.
 *
 * @public
 */
export interface PieChartSortConfiguration {
  /**
   * The sort configuration of the category fields.
   *
   * @public
   */
  CategorySort?: FieldSortOptions[] | undefined;

  /**
   * The limit on the number of categories that are displayed in a pie chart.
   *
   * @public
   */
  CategoryItemsLimit?: ItemsLimitConfiguration | undefined;

  /**
   * The sort configuration of the small multiples field.
   *
   * @public
   */
  SmallMultiplesSort?: FieldSortOptions[] | undefined;

  /**
   * The limit on the number of small multiples panels that are displayed.
   *
   * @public
   */
  SmallMultiplesLimitConfiguration?: ItemsLimitConfiguration | undefined;
}

/**
 * The configuration of a pie chart.
 *
 * @public
 */
export interface PieChartConfiguration {
  /**
   * The field wells of the visual.
   *
   * @public
   */
  FieldWells?: PieChartFieldWells | undefined;

  /**
   * The sort configuration of a pie chart.
   *
   * @public
   */
  SortConfiguration?: PieChartSortConfiguration | undefined;

  /**
   * The options that determine the shape of the chart. This option determines whether the chart is a pie chart or a donut chart.
   *
   * @public
   */
  DonutOptions?: DonutOptions | undefined;

  /**
   * The small multiples setup for the visual.
   *
   * @public
   */
  SmallMultiplesOptions?: SmallMultiplesOptions | undefined;

  /**
   * The label options of the group/color that is displayed in a pie chart.
   *
   * @public
   */
  CategoryLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * The label options for the value that is displayed in a pie chart.
   *
   * @public
   */
  ValueLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * The legend display setup of the visual.
   *
   * @public
   */
  Legend?: LegendOptions | undefined;

  /**
   * The options that determine if visual data labels are displayed.
   *
   * @public
   */
  DataLabels?: DataLabelOptions | undefined;

  /**
   * The tooltip display setup of the visual.
   *
   * @public
   */
  Tooltip?: TooltipOptions | undefined;

  /**
   * The palette (chart color) display setup of the visual.
   *
   * @public
   */
  VisualPalette?: VisualPalette | undefined;

  /**
   * The contribution analysis (anomaly configuration) setup of the visual.
   *
   * @public
   */
  ContributionAnalysisDefaults?: ContributionAnalysisDefault[] | undefined;

  /**
   * The general visual interactions setup for a visual.
   *
   * @public
   */
  Interactions?: VisualInteractionOptions | undefined;
}

/**
 * A pie or donut chart.
 *
 * The `PieChartVisual` structure describes a visual that is a member of the pie chart family.
 *
 * The following charts can be described by using this structure:
 *
 * - Pie charts
 * - Donut charts
 *
 * For more information, see [Using pie charts](https://docs.aws.amazon.com/quicksight/latest/user/pie-chart.html) in the *Amazon Quick Suite User Guide*.
 *
 * For more information, see [Using donut charts](https://docs.aws.amazon.com/quicksight/latest/user/donut-chart.html) in the *Amazon Quick Suite User Guide*.
 *
 * @public
 */
export interface PieChartVisual {
  /**
   * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.
   *
   * @public
   */
  VisualId: string | undefined;

  /**
   * The title that is displayed on the visual.
   *
   * @public
   */
  Title?: VisualTitleLabelOptions | undefined;

  /**
   * The subtitle that is displayed on the visual.
   *
   * @public
   */
  Subtitle?: VisualSubtitleLabelOptions | undefined;

  /**
   * The configuration of a pie chart.
   *
   * @public
   */
  ChartConfiguration?: PieChartConfiguration | undefined;

  /**
   * The list of custom actions that are configured for a visual.
   *
   * @public
   */
  Actions?: VisualCustomAction[] | undefined;

  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * @public
   */
  ColumnHierarchies?: ColumnHierarchy[] | undefined;

  /**
   * The alt text for the visual.
   *
   * @public
   */
  VisualContentAltText?: string | undefined;
}

/**
 * The configuration that controls field customization options available to dashboard readers for a visual.
 *
 * @public
 */
export interface VisualCustomizationFieldsConfiguration {
  /**
   * Specifies whether dashboard readers can customize fields for this visual. This option is `ENABLED` by default.
   *
   * @public
   */
  Status?: DashboardCustomizationStatus | undefined;

  /**
   * The additional dataset fields available for dashboard readers to customize the visual with, beyond the fields already configured on the visual.
   *
   * @public
   */
  AdditionalFields?: ColumnIdentifier[] | undefined;
}

/**
 * The options that define customizations available to dashboard readers for a specific visual
 *
 * @public
 */
export interface DashboardCustomizationVisualOptions {
  /**
   * The configuration that controls field customization options available to dashboard readers for a visual.
   *
   * @public
   */
  FieldsConfiguration?: VisualCustomizationFieldsConfiguration | undefined;
}

/**
 * The target of a pivot table field collapse state.
 *
 * @public
 */
export interface PivotTableFieldCollapseStateTarget {
  /**
   * The field ID of the pivot table that the collapse state needs to be set to.
   *
   * @public
   */
  FieldId?: string | undefined;

  /**
   * The data path of the pivot table's header. Used to set the collapse state.
   *
   * @public
   */
  FieldDataPathValues?: DataPathValue[] | undefined;
}

/**
 * The collapse state options for the pivot table field options.
 *
 * @public
 */
export interface PivotTableFieldCollapseStateOption {
  /**
   * A tagged-union object that sets the collapse state.
   *
   * @public
   */
  Target: PivotTableFieldCollapseStateTarget | undefined;

  /**
   * The state of the field target of a pivot table. Choose one of the following options:
   *
   * - `COLLAPSED`
   * - `EXPANDED`
   *
   * @public
   */
  State?: PivotTableFieldCollapseState | undefined;
}

/**
 * The data path options for the pivot table field options.
 *
 * @public
 */
export interface PivotTableDataPathOption {
  /**
   * The list of data path values for the data path options.
   *
   * @public
   */
  DataPathList: DataPathValue[] | undefined;

  /**
   * The width of the data path option.
   *
   * @public
   */
  Width?: string | undefined;
}

/**
 * The selected field options for the pivot table field options.
 *
 * @public
 */
export interface PivotTableFieldOption {
  /**
   * The field ID of the pivot table field.
   *
   * @public
   */
  FieldId: string | undefined;

  /**
   * The custom label of the pivot table field.
   *
   * @public
   */
  CustomLabel?: string | undefined;

  /**
   * The visibility of the pivot table field.
   *
   * @public
   */
  Visibility?: Visibility | undefined;
}

/**
 * The field options for a pivot table visual.
 *
 * @public
 */
export interface PivotTableFieldOptions {
  /**
   * The selected field options for the pivot table field options.
   *
   * @public
   */
  SelectedFieldOptions?: PivotTableFieldOption[] | undefined;

  /**
   * The data path options for the pivot table field options.
   *
   * @public
   */
  DataPathOptions?: PivotTableDataPathOption[] | undefined;

  /**
   * The collapse state options for the pivot table field options.
   *
   * @public
   */
  CollapseStateOptions?: PivotTableFieldCollapseStateOption[] | undefined;
}

/**
 * The aggregated field well for the pivot table.
 *
 * @public
 */
export interface PivotTableAggregatedFieldWells {
  /**
   * The rows field well for a pivot table. Values are grouped by rows fields.
   *
   * @public
   */
  Rows?: DimensionField[] | undefined;

  /**
   * The columns field well for a pivot table. Values are grouped by columns fields.
   *
   * @public
   */
  Columns?: DimensionField[] | undefined;

  /**
   * The values field well for a pivot table. Values are aggregated based on rows and columns fields.
   *
   * @public
   */
  Values?: MeasureField[] | undefined;
}

/**
 * The field wells for a pivot table visual.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 *
 * @public
 */
export interface PivotTableFieldWells {
  /**
   * The aggregated field well for the pivot table.
   *
   * @public
   */
  PivotTableAggregatedFieldWells?: PivotTableAggregatedFieldWells | undefined;
}

/**
 * The paginated report options for a pivot table visual.
 *
 * @public
 */
export interface PivotTablePaginatedReportOptions {
  /**
   * The visibility of the printing table overflow across pages.
   *
   * @public
   */
  VerticalOverflowVisibility?: Visibility | undefined;

  /**
   * The visibility of the repeating header rows on each page.
   *
   * @public
   */
  OverflowColumnHeaderVisibility?: Visibility | undefined;
}

/**
 * Allows data paths to be sorted by a specific data value.
 *
 * @public
 */
export interface DataPathSort {
  /**
   * Determines the sort direction.
   *
   * @public
   */
  Direction: SortDirection | undefined;

  /**
   * The list of data paths that need to be sorted.
   *
   * @public
   */
  SortPaths: DataPathValue[] | undefined;
}

/**
 * The sort by field for the field sort options.
 *
 * @public
 */
export interface PivotTableSortBy {
  /**
   * The field sort (field id, direction) for the pivot table sort by options.
   *
   * @public
   */
  Field?: FieldSort | undefined;

  /**
   * The column sort (field id, direction) for the pivot table sort by options.
   *
   * @public
   */
  Column?: ColumnSort | undefined;

  /**
   * The data path sort (data path value, direction) for the pivot table sort by options.
   *
   * @public
   */
  DataPath?: DataPathSort | undefined;
}

/**
 * The field sort options for a pivot table sort configuration.
 *
 * @public
 */
export interface PivotFieldSortOptions {
  /**
   * The field ID for the field sort options.
   *
   * @public
   */
  FieldId: string | undefined;

  /**
   * The sort by field for the field sort options.
   *
   * @public
   */
  SortBy: PivotTableSortBy | undefined;
}

/**
 * The sort configuration for a `PivotTableVisual`.
 *
 * @public
 */
export interface PivotTableSortConfiguration {
  /**
   * The field sort options for a pivot table sort configuration.
   *
   * @public
   */
  FieldSortOptions?: PivotFieldSortOptions[] | undefined;
}

/**
 * The border options for a table border.
 *
 * @public
 */
export interface TableBorderOptions {
  /**
   * The color of a table border.
   *
   * @public
   */
  Color?: string | undefined;

  /**
   * The thickness of a table border.
   *
   * @public
   */
  Thickness?: number | undefined;

  /**
   * The style (none, solid) of a table border.
   *
   * @public
   */
  Style?: TableBorderStyle | undefined;
}

/**
 * The side border options for a table.
 *
 * @public
 */
export interface TableSideBorderOptions {
  /**
   * The table border options of the inner vertical border.
   *
   * @public
   */
  InnerVertical?: TableBorderOptions | undefined;

  /**
   * The table border options of the inner horizontal border.
   *
   * @public
   */
  InnerHorizontal?: TableBorderOptions | undefined;

  /**
   * The table border options of the left border.
   *
   * @public
   */
  Left?: TableBorderOptions | undefined;

  /**
   * The table border options of the right border.
   *
   * @public
   */
  Right?: TableBorderOptions | undefined;

  /**
   * The table border options of the top border.
   *
   * @public
   */
  Top?: TableBorderOptions | undefined;

  /**
   * The table border options of the bottom border.
   *
   * @public
   */
  Bottom?: TableBorderOptions | undefined;
}

/**
 * Determines the border options for a table visual.
 *
 * @public
 */
export interface GlobalTableBorderOptions {
  /**
   * Determines the options for uniform border.
   *
   * @public
   */
  UniformBorder?: TableBorderOptions | undefined;

  /**
   * Determines the options for side specific border.
   *
   * @public
   */
  SideSpecificBorder?: TableSideBorderOptions | undefined;
}

/**
 * The table cell style for a cell in pivot table or table visual.
 *
 * @public
 */
export interface TableCellStyle {
  /**
   * The visibility of the table cells.
   *
   * @public
   */
  Visibility?: Visibility | undefined;

  /**
   * The font configuration of the table cells.
   *
   * @public
   */
  FontConfiguration?: FontConfiguration | undefined;

  /**
   * The text wrap (none, wrap) for the table cells.
   *
   * @public
   */
  TextWrap?: TextWrap | undefined;

  /**
   * The horizontal text alignment (left, center, right, auto) for the table cells.
   *
   * @public
   */
  HorizontalTextAlignment?: HorizontalTextAlignment | undefined;

  /**
   * The vertical text alignment (top, middle, bottom) for the table cells.
   *
   * @public
   */
  VerticalTextAlignment?: VerticalTextAlignment | undefined;

  /**
   * The background color for the table cells.
   *
   * @public
   */
  BackgroundColor?: string | undefined;

  /**
   * The height color for the table cells.
   *
   * @public
   */
  Height?: number | undefined;

  /**
   * The borders for the table cells.
   *
   * @public
   */
  Border?: GlobalTableBorderOptions | undefined;
}

/**
 * Determines the row alternate color options.
 *
 * @public
 */
export interface RowAlternateColorOptions {
  /**
   * Determines the widget status.
   *
   * @public
   */
  Status?: WidgetStatus | undefined;

  /**
   * Determines the list of row alternate colors.
   *
   * @public
   */
  RowAlternateColors?: string[] | undefined;

  /**
   * The primary background color options for alternate rows.
   *
   * @public
   */
  UsePrimaryBackgroundColor?: WidgetStatus | undefined;
}

/**
 * The options for the label thta is located above the row headers. This option is only applicable when `RowsLayout` is set to `HIERARCHY`.
 *
 * @public
 */
export interface PivotTableRowsLabelOptions {
  /**
   * The visibility of the rows label.
   *
   * @public
   */
  Visibility?: Visibility | undefined;

  /**
   * The custom label string for the rows label.
   *
   * @public
   */
  CustomLabel?: string | undefined;
}

/**
 * The table options for a pivot table visual.
 *
 * @public
 */
export interface PivotTableOptions {
  /**
   * The metric placement (row, column) options.
   *
   * @public
   */
  MetricPlacement?: PivotTableMetricPlacement | undefined;

  /**
   * The visibility of the single metric options.
   *
   * @public
   */
  SingleMetricVisibility?: Visibility | undefined;

  /**
   * The visibility of the column names.
   *
   * @public
   */
  ColumnNamesVisibility?: Visibility | undefined;

  /**
   * Determines the visibility of the pivot table.
   *
   * @public
   */
  ToggleButtonsVisibility?: Visibility | undefined;

  /**
   * The table cell style of the column header.
   *
   * @public
   */
  ColumnHeaderStyle?: TableCellStyle | undefined;

  /**
   * The table cell style of the row headers.
   *
   * @public
   */
  RowHeaderStyle?: TableCellStyle | undefined;

  /**
   * The table cell style of cells.
   *
   * @public
   */
  CellStyle?: TableCellStyle | undefined;

  /**
   * The table cell style of row field names.
   *
   * @public
   */
  RowFieldNamesStyle?: TableCellStyle | undefined;

  /**
   * The row alternate color options (widget status, row alternate colors).
   *
   * @public
   */
  RowAlternateColorOptions?: RowAlternateColorOptions | undefined;

  /**
   * The visibility setting of a pivot table's collapsed row dimension fields. If the value of this structure is `HIDDEN`, all collapsed columns in a pivot table are automatically hidden. The default value is `VISIBLE`.
   *
   * @public
   */
  CollapsedRowDimensionsVisibility?: Visibility | undefined;

  /**
   * The layout for the row dimension headers of a pivot table. Choose one of the following options.
   *
   * - `TABULAR`: (Default) Each row field is displayed in a separate column.
   * - `HIERARCHY`: All row fields are displayed in a single column. Indentation is used to differentiate row headers of different fields.
   *
   * @public
   */
  RowsLayout?: PivotTableRowsLayout | undefined;

  /**
   * The options for the label that is located above the row headers. This option is only applicable when `RowsLayout` is set to `HIERARCHY`.
   *
   * @public
   */
  RowsLabelOptions?: PivotTableRowsLabelOptions | undefined;

  /**
   * The default cell width of the pivot table.
   *
   * @public
   */
  DefaultCellWidth?: string | undefined;
}

/**
 * The optional configuration of subtotals cells.
 *
 * @public
 */
export interface PivotTableFieldSubtotalOptions {
  /**
   * The field ID of the subtotal options.
   *
   * @public
   */
  FieldId?: string | undefined;
}

/**
 * The table style target.
 *
 * @public
 */
export interface TableStyleTarget {
  /**
   * The cell type of the table style target.
   *
   * @public
   */
  CellType: StyledCellType | undefined;
}

/**
 * The subtotal options.
 *
 * @public
 */
export interface SubtotalOptions {
  /**
   * The visibility configuration for the subtotal cells.
   *
   * @public
   */
  TotalsVisibility?: Visibility | undefined;

  /**
   * The custom label string for the subtotal cells.
   *
   * @public
   */
  CustomLabel?: string | undefined;

  /**
   * The field level (all, custom, last) for the subtotal cells.
   *
   * @public
   */
  FieldLevel?: PivotTableSubtotalLevel | undefined;

  /**
   * The optional configuration of subtotal cells.
   *
   * @public
   */
  FieldLevelOptions?: PivotTableFieldSubtotalOptions[] | undefined;

  /**
   * The cell styling options for the subtotal cells.
   *
   * @public
   */
  TotalCellStyle?: TableCellStyle | undefined;

  /**
   * The cell styling options for the subtotals of value cells.
   *
   * @public
   */
  ValueCellStyle?: TableCellStyle | undefined;

  /**
   * The cell styling options for the subtotals of header cells.
   *
   * @public
   */
  MetricHeaderCellStyle?: TableCellStyle | undefined;

  /**
   * The style targets options for subtotals.
   *
   * @public
   */
  StyleTargets?: TableStyleTarget[] | undefined;
}

/**
 * An aggregation function that aggregates the total values of a measure.
 *
 * @public
 */
export interface TotalAggregationFunction {
  /**
   * A built in aggregation function for total values.
   *
   * @public
   */
  SimpleTotalAggregationFunction?: SimpleTotalAggregationFunction | undefined;
}

/**
 * The total aggregation settings map of a field id.
 *
 * @public
 */
export interface TotalAggregationOption {
  /**
   * The field id that's associated with the total aggregation option.
   *
   * @public
   */
  FieldId: string | undefined;

  /**
   * The total aggregation function that you want to set for a specified field id.
   *
   * @public
   */
  TotalAggregationFunction: TotalAggregationFunction | undefined;
}

/**
 * The optional configuration of totals cells in a `PivotTableVisual`.
 *
 * @public
 */
export interface PivotTotalOptions {
  /**
   * The visibility configuration for the total cells.
   *
   * @public
   */
  TotalsVisibility?: Visibility | undefined;

  /**
   * The placement (start, end) for the total cells.
   *
   * @public
   */
  Placement?: TableTotalsPlacement | undefined;

  /**
   * The scroll status (pinned, scrolled) for the total cells.
   *
   * @public
   */
  ScrollStatus?: TableTotalsScrollStatus | undefined;

  /**
   * The custom label string for the total cells.
   *
   * @public
   */
  CustomLabel?: string | undefined;

  /**
   * The cell styling options for the total cells.
   *
   * @public
   */
  TotalCellStyle?: TableCellStyle | undefined;

  /**
   * The cell styling options for the totals of value cells.
   *
   * @public
   */
  ValueCellStyle?: TableCellStyle | undefined;

  /**
   * The cell styling options for the total of header cells.
   *
   * @public
   */
  MetricHeaderCellStyle?: TableCellStyle | undefined;

  /**
   * The total aggregation options for each value field.
   *
   * @public
   */
  TotalAggregationOptions?: TotalAggregationOption[] | undefined;
}

/**
 * The total options for a pivot table visual.
 *
 * @public
 */
export interface PivotTableTotalOptions {
  /**
   * The row subtotal options.
   *
   * @public
   */
  RowSubtotalOptions?: SubtotalOptions | undefined;

  /**
   * The column subtotal options.
   *
   * @public
   */
  ColumnSubtotalOptions?: SubtotalOptions | undefined;

  /**
   * The row total options.
   *
   * @public
   */
  RowTotalOptions?: PivotTotalOptions | undefined;

  /**
   * The column total options.
   *
   * @public
   */
  ColumnTotalOptions?: PivotTotalOptions | undefined;
}

/**
 * The configuration for a `PivotTableVisual`.
 *
 * @public
 */
export interface PivotTableConfiguration {
  /**
   * The field wells of the visual.
   *
   * @public
   */
  FieldWells?: PivotTableFieldWells | undefined;

  /**
   * The sort configuration for a `PivotTableVisual`.
   *
   * @public
   */
  SortConfiguration?: PivotTableSortConfiguration | undefined;

  /**
   * The table options for a pivot table visual.
   *
   * @public
   */
  TableOptions?: PivotTableOptions | undefined;

  /**
   * The total options for a pivot table visual.
   *
   * @public
   */
  TotalOptions?: PivotTableTotalOptions | undefined;

  /**
   * The field options for a pivot table visual.
   *
   * @public
   */
  FieldOptions?: PivotTableFieldOptions | undefined;

  /**
   * The paginated report options for a pivot table visual.
   *
   * @public
   */
  PaginatedReportOptions?: PivotTablePaginatedReportOptions | undefined;

  /**
   * The display options for the visual tooltip.
   *
   * @public
   */
  Tooltip?: TooltipOptions | undefined;

  /**
   * The options that define customizations available to dashboard readers for a specific visual
   *
   * @public
   */
  DashboardCustomizationVisualOptions?: DashboardCustomizationVisualOptions | undefined;

  /**
   * The general visual interactions setup for a visual.
   *
   * @public
   */
  Interactions?: VisualInteractionOptions | undefined;
}

/**
 * The scope of the cell for conditional formatting.
 *
 * @public
 */
export interface PivotTableConditionalFormattingScope {
  /**
   * The role (field, field total, grand total) of the cell for conditional formatting.
   *
   * @public
   */
  Role?: PivotTableConditionalFormattingScopeRole | undefined;
}

/**
 * The conditional formatting for the text.
 *
 * @public
 */
export interface TextConditionalFormat {
  /**
   * The conditional formatting for the text background color.
   *
   * @public
   */
  BackgroundColor?: ConditionalFormattingColor | undefined;

  /**
   * The conditional formatting for the text color.
   *
   * @public
   */
  TextColor?: ConditionalFormattingColor | undefined;

  /**
   * The conditional formatting for the icon.
   *
   * @public
   */
  Icon?: ConditionalFormattingIcon | undefined;
}

/**
 * The cell conditional formatting option for a pivot table.
 *
 * @public
 */
export interface PivotTableCellConditionalFormatting {
  /**
   * The field ID of the cell for conditional formatting.
   *
   * @public
   */
  FieldId: string | undefined;

  /**
   * The text format of the cell for conditional formatting.
   *
   * @public
   */
  TextFormat?: TextConditionalFormat | undefined;

  /**
   * The scope of the cell for conditional formatting.
   *
   * @public
   */
  Scope?: PivotTableConditionalFormattingScope | undefined;

  /**
   * A list of cell scopes for conditional formatting.
   *
   * @public
   */
  Scopes?: PivotTableConditionalFormattingScope[] | undefined;
}

/**
 * Conditional formatting options for a `PivotTableVisual`.
 *
 * @public
 */
export interface PivotTableConditionalFormattingOption {
  /**
   * The cell conditional formatting option for a pivot table.
   *
   * @public
   */
  Cell?: PivotTableCellConditionalFormatting | undefined;
}

/**
 * The conditional formatting for a `PivotTableVisual`.
 *
 * @public
 */
export interface PivotTableConditionalFormatting {
  /**
   * Conditional formatting options for a `PivotTableVisual`.
   *
   * @public
   */
  ConditionalFormattingOptions?: PivotTableConditionalFormattingOption[] | undefined;
}

/**
 * A pivot table.
 *
 * For more information, see [Using pivot tables](https://docs.aws.amazon.com/quicksight/latest/user/pivot-table.html) in the *Amazon Quick Suite User Guide*.
 *
 * @public
 */
export interface PivotTableVisual {
  /**
   * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers..
   *
   * @public
   */
  VisualId: string | undefined;

  /**
   * The title that is displayed on the visual.
   *
   * @public
   */
  Title?: VisualTitleLabelOptions | undefined;

  /**
   * The subtitle that is displayed on the visual.
   *
   * @public
   */
  Subtitle?: VisualSubtitleLabelOptions | undefined;

  /**
   * The configuration settings of the visual.
   *
   * @public
   */
  ChartConfiguration?: PivotTableConfiguration | undefined;

  /**
   * The conditional formatting for a `PivotTableVisual`.
   *
   * @public
   */
  ConditionalFormatting?: PivotTableConditionalFormatting | undefined;

  /**
   * The list of custom actions that are configured for a visual.
   *
   * @public
   */
  Actions?: VisualCustomAction[] | undefined;

  /**
   * The alt text for the visual.
   *
   * @public
   */
  VisualContentAltText?: string | undefined;
}

/**
 * A collection of field wells for a plugin visual.
 *
 * @public
 */
export interface PluginVisualFieldWell {
  /**
   * The semantic axis name for the field well.
   *
   * @public
   */
  AxisName?: PluginVisualAxisName | undefined;

  /**
   * A list of dimensions for the field well.
   *
   * @public
   */
  Dimensions?: DimensionField[] | undefined;

  /**
   * A list of measures that exist in the field well.
   *
   * @public
   */
  Measures?: MeasureField[] | undefined;

  /**
   * A list of unaggregated fields that exist in the field well.
   *
   * @public
   */
  Unaggregated?: UnaggregatedField[] | undefined;
}

/**
 * A query limits configuration.
 *
 * @public
 */
export interface PluginVisualItemsLimitConfiguration {
  /**
   * Determines how many values are be fetched at once.
   *
   * @public
   */
  ItemsLimit?: number | undefined;
}

/**
 * The table query sorting options for the plugin visual.
 *
 * @public
 */
export interface PluginVisualTableQuerySort {
  /**
   * Determines how data is sorted in the response.
   *
   * @public
   */
  RowSort?: FieldSortOptions[] | undefined;

  /**
   * The maximum amount of data to be returned by a query.
   *
   * @public
   */
  ItemsLimitConfiguration?: PluginVisualItemsLimitConfiguration | undefined;
}

/**
 * Determines how the plugin visual sorts the data during query.
 *
 * @public
 */
export interface PluginVisualSortConfiguration {
  /**
   * The table query sorting options for the plugin visual.
   *
   * @public
   */
  PluginVisualTableQuerySort?: PluginVisualTableQuerySort | undefined;
}

/**
 * The key value pair of the persisted property.
 *
 * @public
 */
export interface PluginVisualProperty {
  /**
   * The name of the plugin visual property.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The value of the plugin visual property.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * The options and persisted properties for the plugin visual.
 *
 * @public
 */
export interface PluginVisualOptions {
  /**
   * The persisted properties and their values.
   *
   * @public
   */
  VisualProperties?: PluginVisualProperty[] | undefined;
}

/**
 * The plugin visual configuration. This includes the field wells, sorting options, and persisted options of the plugin visual.
 *
 * @public
 */
export interface PluginVisualConfiguration {
  /**
   * The field wells configuration of the plugin visual.
   *
   * @public
   */
  FieldWells?: PluginVisualFieldWell[] | undefined;

  /**
   * The persisted properties of the plugin visual.
   *
   * @public
   */
  VisualOptions?: PluginVisualOptions | undefined;

  /**
   * The sort configuration of the plugin visual.
   *
   * @public
   */
  SortConfiguration?: PluginVisualSortConfiguration | undefined;
}

/**
 * A flexible visualization type that allows engineers to create new custom charts in Quick Sight.
 *
 * @public
 */
export interface PluginVisual {
  /**
   * The ID of the visual that you want to use.
   *
   * @public
   */
  VisualId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that reflects the plugin and version.
   *
   * @public
   */
  PluginArn: string | undefined;

  /**
   * The title label options for a visual.
   *
   * @public
   */
  Title?: VisualTitleLabelOptions | undefined;

  /**
   * The subtitle label options for a visual.
   *
   * @public
   */
  Subtitle?: VisualSubtitleLabelOptions | undefined;

  /**
   * A description of the plugin field wells and their persisted properties.
   *
   * @public
   */
  ChartConfiguration?: PluginVisualConfiguration | undefined;

  /**
   * The list of custom actions that are configured for a visual.
   *
   * @public
   */
  Actions?: VisualCustomAction[] | undefined;

  /**
   * The alt text for the visual.
   *
   * @public
   */
  VisualContentAltText?: string | undefined;
}

/**
 * The configured style settings of a radar chart.
 *
 * @public
 */
export interface RadarChartAreaStyleSettings {
  /**
   * The visibility settings of a radar chart.
   *
   * @public
   */
  Visibility?: Visibility | undefined;
}

/**
 * The series settings of a radar chart.
 *
 * @public
 */
export interface RadarChartSeriesSettings {
  /**
   * The area style settings of a radar chart.
   *
   * @public
   */
  AreaStyleSettings?: RadarChartAreaStyleSettings | undefined;
}

/**
 * The aggregated field well configuration of a `RadarChartVisual`.
 *
 * @public
 */
export interface RadarChartAggregatedFieldWells {
  /**
   * The aggregated field well categories of a radar chart.
   *
   * @public
   */
  Category?: DimensionField[] | undefined;

  /**
   * The color that are assigned to the aggregated field wells of a radar chart.
   *
   * @public
   */
  Color?: DimensionField[] | undefined;

  /**
   * The values that are assigned to the aggregated field wells of a radar chart.
   *
   * @public
   */
  Values?: MeasureField[] | undefined;
}

/**
 * The field wells of a radar chart visual.
 *
 * @public
 */
export interface RadarChartFieldWells {
  /**
   * The aggregated field wells of a radar chart visual.
   *
   * @public
   */
  RadarChartAggregatedFieldWells?: RadarChartAggregatedFieldWells | undefined;
}

/**
 * The sort configuration of a `RadarChartVisual`.
 *
 * @public
 */
export interface RadarChartSortConfiguration {
  /**
   * The category sort options of a radar chart.
   *
   * @public
   */
  CategorySort?: FieldSortOptions[] | undefined;

  /**
   * The category items limit for a radar chart.
   *
   * @public
   */
  CategoryItemsLimit?: ItemsLimitConfiguration | undefined;

  /**
   * The color sort configuration of a radar chart.
   *
   * @public
   */
  ColorSort?: FieldSortOptions[] | undefined;

  /**
   * The color items limit of a radar chart.
   *
   * @public
   */
  ColorItemsLimit?: ItemsLimitConfiguration | undefined;
}

/**
 * The configuration of a `RadarChartVisual`.
 *
 * @public
 */
export interface RadarChartConfiguration {
  /**
   * The field well configuration of a `RadarChartVisual`.
   *
   * @public
   */
  FieldWells?: RadarChartFieldWells | undefined;

  /**
   * The sort configuration of a `RadarChartVisual`.
   *
   * @public
   */
  SortConfiguration?: RadarChartSortConfiguration | undefined;

  /**
   * The shape of the radar chart.
   *
   * @public
   */
  Shape?: RadarChartShape | undefined;

  /**
   * The base sreies settings of a radar chart.
   *
   * @public
   */
  BaseSeriesSettings?: RadarChartSeriesSettings | undefined;

  /**
   * The start angle of a radar chart's axis.
   *
   * @public
   */
  StartAngle?: number | undefined;

  /**
   * The palette (chart color) display setup of the visual.
   *
   * @public
   */
  VisualPalette?: VisualPalette | undefined;

  /**
   * Determines the visibility of the colors of alternatign bands in a radar chart.
   *
   * @public
   */
  AlternateBandColorsVisibility?: Visibility | undefined;

  /**
   * The color of the even-numbered alternate bands of a radar chart.
   *
   * @public
   */
  AlternateBandEvenColor?: string | undefined;

  /**
   * The color of the odd-numbered alternate bands of a radar chart.
   *
   * @public
   */
  AlternateBandOddColor?: string | undefined;

  /**
   * The category axis of a radar chart.
   *
   * @public
   */
  CategoryAxis?: AxisDisplayOptions | undefined;

  /**
   * The category label options of a radar chart.
   *
   * @public
   */
  CategoryLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * The color axis of a radar chart.
   *
   * @public
   */
  ColorAxis?: AxisDisplayOptions | undefined;

  /**
   * The color label options of a radar chart.
   *
   * @public
   */
  ColorLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * The legend display setup of the visual.
   *
   * @public
   */
  Legend?: LegendOptions | undefined;

  /**
   * The axis behavior options of a radar chart.
   *
   * @public
   */
  AxesRangeScale?: RadarChartAxesRangeScale | undefined;

  /**
   * The general visual interactions setup for a visual.
   *
   * @public
   */
  Interactions?: VisualInteractionOptions | undefined;
}

/**
 * A radar chart visual.
 *
 * @public
 */
export interface RadarChartVisual {
  /**
   * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.
   *
   * @public
   */
  VisualId: string | undefined;

  /**
   * The title that is displayed on the visual.
   *
   * @public
   */
  Title?: VisualTitleLabelOptions | undefined;

  /**
   * The subtitle that is displayed on the visual.
   *
   * @public
   */
  Subtitle?: VisualSubtitleLabelOptions | undefined;

  /**
   * The configuration settings of the visual.
   *
   * @public
   */
  ChartConfiguration?: RadarChartConfiguration | undefined;

  /**
   * The list of custom actions that are configured for a visual.
   *
   * @public
   */
  Actions?: VisualCustomAction[] | undefined;

  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * @public
   */
  ColumnHierarchies?: ColumnHierarchy[] | undefined;

  /**
   * The alt text for the visual.
   *
   * @public
   */
  VisualContentAltText?: string | undefined;
}

/**
 * The field well configuration of a sankey diagram.
 *
 * @public
 */
export interface SankeyDiagramAggregatedFieldWells {
  /**
   * The source field wells of a sankey diagram.
   *
   * @public
   */
  Source?: DimensionField[] | undefined;

  /**
   * The destination field wells of a sankey diagram.
   *
   * @public
   */
  Destination?: DimensionField[] | undefined;

  /**
   * The weight field wells of a sankey diagram.
   *
   * @public
   */
  Weight?: MeasureField[] | undefined;
}

/**
 * The field well configuration of a sankey diagram.
 *
 * @public
 */
export interface SankeyDiagramFieldWells {
  /**
   * The field well configuration of a sankey diagram.
   *
   * @public
   */
  SankeyDiagramAggregatedFieldWells?: SankeyDiagramAggregatedFieldWells | undefined;
}

/**
 * The sort configuration of a sankey diagram.
 *
 * @public
 */
export interface SankeyDiagramSortConfiguration {
  /**
   * The sort configuration of the weight fields.
   *
   * @public
   */
  WeightSort?: FieldSortOptions[] | undefined;

  /**
   * The limit on the number of source nodes that are displayed in a sankey diagram.
   *
   * @public
   */
  SourceItemsLimit?: ItemsLimitConfiguration | undefined;

  /**
   * The limit on the number of destination nodes that are displayed in a sankey diagram.
   *
   * @public
   */
  DestinationItemsLimit?: ItemsLimitConfiguration | undefined;
}

/**
 * The configuration of a sankey diagram.
 *
 * @public
 */
export interface SankeyDiagramChartConfiguration {
  /**
   * The field well configuration of a sankey diagram.
   *
   * @public
   */
  FieldWells?: SankeyDiagramFieldWells | undefined;

  /**
   * The sort configuration of a sankey diagram.
   *
   * @public
   */
  SortConfiguration?: SankeyDiagramSortConfiguration | undefined;

  /**
   * The data label configuration of a sankey diagram.
   *
   * @public
   */
  DataLabels?: DataLabelOptions | undefined;

  /**
   * The general visual interactions setup for a visual.
   *
   * @public
   */
  Interactions?: VisualInteractionOptions | undefined;
}

/**
 * A sankey diagram.
 *
 * For more information, see [Using Sankey diagrams](https://docs.aws.amazon.com/quicksight/latest/user/sankey-diagram.html) in the *Amazon Quick Suite User Guide*.
 *
 * @public
 */
export interface SankeyDiagramVisual {
  /**
   * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.
   *
   * @public
   */
  VisualId: string | undefined;

  /**
   * The title that is displayed on the visual.
   *
   * @public
   */
  Title?: VisualTitleLabelOptions | undefined;

  /**
   * The subtitle that is displayed on the visual.
   *
   * @public
   */
  Subtitle?: VisualSubtitleLabelOptions | undefined;

  /**
   * The configuration of a sankey diagram.
   *
   * @public
   */
  ChartConfiguration?: SankeyDiagramChartConfiguration | undefined;

  /**
   * The list of custom actions that are configured for a visual.
   *
   * @public
   */
  Actions?: VisualCustomAction[] | undefined;

  /**
   * The alt text for the visual.
   *
   * @public
   */
  VisualContentAltText?: string | undefined;
}

/**
 * The aggregated field well of a scatter plot.
 *
 * @public
 */
export interface ScatterPlotCategoricallyAggregatedFieldWells {
  /**
   * The x-axis field well of a scatter plot.
   *
   * The x-axis is aggregated by category.
   *
   * @public
   */
  XAxis?: MeasureField[] | undefined;

  /**
   * The y-axis field well of a scatter plot.
   *
   * The y-axis is aggregated by category.
   *
   * @public
   */
  YAxis?: MeasureField[] | undefined;

  /**
   * The category field well of a scatter plot.
   *
   * @public
   */
  Category?: DimensionField[] | undefined;

  /**
   * The size field well of a scatter plot.
   *
   * @public
   */
  Size?: MeasureField[] | undefined;

  /**
   * The label field well of a scatter plot.
   *
   * @public
   */
  Label?: DimensionField[] | undefined;
}

/**
 * The unaggregated field wells of a scatter plot.
 *
 * @public
 */
export interface ScatterPlotUnaggregatedFieldWells {
  /**
   * The x-axis field well of a scatter plot.
   *
   * The x-axis is a dimension field and cannot be aggregated.
   *
   * @public
   */
  XAxis?: DimensionField[] | undefined;

  /**
   * The y-axis field well of a scatter plot.
   *
   * The y-axis is a dimension field and cannot be aggregated.
   *
   * @public
   */
  YAxis?: DimensionField[] | undefined;

  /**
   * The size field well of a scatter plot.
   *
   * @public
   */
  Size?: MeasureField[] | undefined;

  /**
   * The category field well of a scatter plot.
   *
   * @public
   */
  Category?: DimensionField[] | undefined;

  /**
   * The label field well of a scatter plot.
   *
   * @public
   */
  Label?: DimensionField[] | undefined;
}

/**
 * The field well configuration of a scatter plot.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 *
 * @public
 */
export interface ScatterPlotFieldWells {
  /**
   * The aggregated field wells of a scatter plot. The x and y-axes of scatter plots with aggregated field wells are aggregated by category, label, or both.
   *
   * @public
   */
  ScatterPlotCategoricallyAggregatedFieldWells?: ScatterPlotCategoricallyAggregatedFieldWells | undefined;

  /**
   * The unaggregated field wells of a scatter plot. The x and y-axes of these scatter plots are unaggregated.
   *
   * @public
   */
  ScatterPlotUnaggregatedFieldWells?: ScatterPlotUnaggregatedFieldWells | undefined;
}

/**
 * The sort configuration of a scatter plot.
 *
 * @public
 */
export interface ScatterPlotSortConfiguration {
  /**
   * The limit configuration of the visual display for an axis.
   *
   * @public
   */
  ScatterPlotLimitConfiguration?: ItemsLimitConfiguration | undefined;
}

/**
 * The configuration of a scatter plot.
 *
 * @public
 */
export interface ScatterPlotConfiguration {
  /**
   * The field wells of the visual.
   *
   * @public
   */
  FieldWells?: ScatterPlotFieldWells | undefined;

  /**
   * The sort configuration of a scatter plot.
   *
   * @public
   */
  SortConfiguration?: ScatterPlotSortConfiguration | undefined;

  /**
   * The label options (label text, label visibility, and sort icon visibility) of the scatter plot's x-axis.
   *
   * @public
   */
  XAxisLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * The label display options (grid line, range, scale, and axis step) of the scatter plot's x-axis.
   *
   * @public
   */
  XAxisDisplayOptions?: AxisDisplayOptions | undefined;

  /**
   * The label options (label text, label visibility, and sort icon visibility) of the scatter plot's y-axis.
   *
   * @public
   */
  YAxisLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * The label display options (grid line, range, scale, and axis step) of the scatter plot's y-axis.
   *
   * @public
   */
  YAxisDisplayOptions?: AxisDisplayOptions | undefined;

  /**
   * The legend display setup of the visual.
   *
   * @public
   */
  Legend?: LegendOptions | undefined;

  /**
   * The options that determine if visual data labels are displayed.
   *
   * @public
   */
  DataLabels?: DataLabelOptions | undefined;

  /**
   * The legend display setup of the visual.
   *
   * @public
   */
  Tooltip?: TooltipOptions | undefined;

  /**
   * The palette (chart color) display setup of the visual.
   *
   * @public
   */
  VisualPalette?: VisualPalette | undefined;

  /**
   * The general visual interactions setup for a visual.
   *
   * @public
   */
  Interactions?: VisualInteractionOptions | undefined;
}

/**
 * A scatter plot.
 *
 * For more information, see [Using scatter plots](https://docs.aws.amazon.com/quicksight/latest/user/scatter-plot.html) in the *Amazon Quick Suite User Guide*.
 *
 * @public
 */
export interface ScatterPlotVisual {
  /**
   * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.
   *
   * @public
   */
  VisualId: string | undefined;

  /**
   * The title that is displayed on the visual.
   *
   * @public
   */
  Title?: VisualTitleLabelOptions | undefined;

  /**
   * The subtitle that is displayed on the visual.
   *
   * @public
   */
  Subtitle?: VisualSubtitleLabelOptions | undefined;

  /**
   * The configuration settings of the visual.
   *
   * @public
   */
  ChartConfiguration?: ScatterPlotConfiguration | undefined;

  /**
   * The list of custom actions that are configured for a visual.
   *
   * @public
   */
  Actions?: VisualCustomAction[] | undefined;

  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * @public
   */
  ColumnHierarchies?: ColumnHierarchy[] | undefined;

  /**
   * The alt text for the visual.
   *
   * @public
   */
  VisualContentAltText?: string | undefined;
}

/**
 * The settings for the pinned columns of a table visual.
 *
 * @public
 */
export interface TablePinnedFieldOptions {
  /**
   * A list of columns to be pinned to the left of a table visual.
   *
   * @public
   */
  PinnedLeftFields?: string[] | undefined;
}

/**
 * The sizing options for the table image configuration.
 *
 * @public
 */
export interface TableCellImageSizingConfiguration {
  /**
   * The cell scaling configuration of the sizing options for the table image configuration.
   *
   * @public
   */
  TableCellImageScalingConfiguration?: TableCellImageScalingConfiguration | undefined;
}

/**
 * The image configuration of a table field URL.
 *
 * @public
 */
export interface TableFieldImageConfiguration {
  /**
   * The sizing options for the table image configuration.
   *
   * @public
   */
  SizingOptions?: TableCellImageSizingConfiguration | undefined;
}

/**
 * The custom icon content for the table link content configuration.
 *
 * @public
 */
export interface TableFieldCustomIconContent {
  /**
   * The icon set type (link) of the custom icon content for table URL link content.
   *
   * @public
   */
  Icon?: TableFieldIconSetType | undefined;
}

/**
 * The custom text content (value, font configuration) for the table link content configuration.
 *
 * @public
 */
export interface TableFieldCustomTextContent {
  /**
   * The string value of the custom text content for the table URL link content.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * The font configuration of the custom text content for the table URL link content.
   *
   * @public
   */
  FontConfiguration: FontConfiguration | undefined;
}

/**
 * The URL content (text, icon) for the table link configuration.
 *
 * @public
 */
export interface TableFieldLinkContentConfiguration {
  /**
   * The custom text content (value, font configuration) for the table link content configuration.
   *
   * @public
   */
  CustomTextContent?: TableFieldCustomTextContent | undefined;

  /**
   * The custom icon content for the table link content configuration.
   *
   * @public
   */
  CustomIconContent?: TableFieldCustomIconContent | undefined;
}

/**
 * The link configuration of a table field URL.
 *
 * @public
 */
export interface TableFieldLinkConfiguration {
  /**
   * The URL target (new tab, new window, same tab) for the table link configuration.
   *
   * @public
   */
  Target: URLTargetConfiguration | undefined;

  /**
   * The URL content (text, icon) for the table link configuration.
   *
   * @public
   */
  Content: TableFieldLinkContentConfiguration | undefined;
}

/**
 * The URL configuration for a table field.
 *
 * @public
 */
export interface TableFieldURLConfiguration {
  /**
   * The link configuration of a table field URL.
   *
   * @public
   */
  LinkConfiguration?: TableFieldLinkConfiguration | undefined;

  /**
   * The image configuration of a table field URL.
   *
   * @public
   */
  ImageConfiguration?: TableFieldImageConfiguration | undefined;
}

/**
 * The options for a table field.
 *
 * @public
 */
export interface TableFieldOption {
  /**
   * The field ID for a table field.
   *
   * @public
   */
  FieldId: string | undefined;

  /**
   * The width for a table field.
   *
   * @public
   */
  Width?: string | undefined;

  /**
   * The custom label for a table field.
   *
   * @public
   */
  CustomLabel?: string | undefined;

  /**
   * The visibility of a table field.
   *
   * @public
   */
  Visibility?: Visibility | undefined;

  /**
   * The URL configuration for a table field.
   *
   * @public
   */
  URLStyling?: TableFieldURLConfiguration | undefined;
}

/**
 * The column option of the transposed table.
 *
 * @public
 */
export interface TransposedTableOption {
  /**
   * The index of a columns in a transposed table. The index range is 0-9999.
   *
   * @public
   */
  ColumnIndex?: number | undefined;

  /**
   * The width of a column in a transposed table.
   *
   * @public
   */
  ColumnWidth?: string | undefined;

  /**
   * The column type of the column in a transposed table. Choose one of the following options:
   *
   * - `ROW_HEADER_COLUMN`: Refers to the leftmost column of the row header in the transposed table.
   * - `VALUE_COLUMN`: Refers to all value columns in the transposed table.
   *
   * @public
   */
  ColumnType: TransposedColumnType | undefined;
}

/**
 * The field options of a table visual.
 *
 * @public
 */
export interface TableFieldOptions {
  /**
   * The field options to be configured to a table.
   *
   * @public
   */
  SelectedFieldOptions?: TableFieldOption[] | undefined;

  /**
   * The order of the field IDs that are configured as field options for a table visual.
   *
   * @public
   */
  Order?: string[] | undefined;

  /**
   * The settings for the pinned columns of a table visual.
   *
   * @public
   */
  PinnedFieldOptions?: TablePinnedFieldOptions | undefined;

  /**
   * The `TableOptions` of a transposed table.
   *
   * @public
   */
  TransposedTableOptions?: TransposedTableOption[] | undefined;
}

/**
 * The aggregated field well for the table.
 *
 * @public
 */
export interface TableAggregatedFieldWells {
  /**
   * The group by field well for a pivot table. Values are grouped by group by fields.
   *
   * @public
   */
  GroupBy?: DimensionField[] | undefined;

  /**
   * The values field well for a pivot table. Values are aggregated based on group by fields.
   *
   * @public
   */
  Values?: MeasureField[] | undefined;
}

/**
 * The unaggregated field well for the table.
 *
 * @public
 */
export interface TableUnaggregatedFieldWells {
  /**
   * The values field well for a pivot table. Values are unaggregated for an unaggregated table.
   *
   * @public
   */
  Values?: UnaggregatedField[] | undefined;
}

/**
 * The field wells for a table visual.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 *
 * @public
 */
export interface TableFieldWells {
  /**
   * The aggregated field well for the table.
   *
   * @public
   */
  TableAggregatedFieldWells?: TableAggregatedFieldWells | undefined;

  /**
   * The unaggregated field well for the table.
   *
   * @public
   */
  TableUnaggregatedFieldWells?: TableUnaggregatedFieldWells | undefined;
}

/**
 * The paginated report options for a table visual.
 *
 * @public
 */
export interface TablePaginatedReportOptions {
  /**
   * The visibility of printing table overflow across pages.
   *
   * @public
   */
  VerticalOverflowVisibility?: Visibility | undefined;

  /**
   * The visibility of repeating header rows on each page.
   *
   * @public
   */
  OverflowColumnHeaderVisibility?: Visibility | undefined;
}

/**
 * The sort configuration for a `TableVisual`.
 *
 * @public
 */
export interface TableSortConfiguration {
  /**
   * The field sort options for rows in the table.
   *
   * @public
   */
  RowSort?: FieldSortOptions[] | undefined;

  /**
   * The pagination configuration (page size, page number) for the table.
   *
   * @public
   */
  PaginationConfiguration?: PaginationConfiguration | undefined;
}

/**
 * The options for data bars.
 *
 * @public
 */
export interface DataBarsOptions {
  /**
   * The field ID for the data bars options.
   *
   * @public
   */
  FieldId: string | undefined;

  /**
   * The color of the positive data bar.
   *
   * @public
   */
  PositiveColor?: string | undefined;

  /**
   * The color of the negative data bar.
   *
   * @public
   */
  NegativeColor?: string | undefined;
}

/**
 * The options for sparklines in a table.
 *
 * @public
 */
export interface SparklinesOptions {
  /**
   * The field ID of the value column that the sparkline is applied to.
   *
   * @public
   */
  FieldId: string | undefined;

  /**
   * The dimension type field.
   *
   * @public
   */
  XAxisField: DimensionField | undefined;

  /**
   * Determines whether the Y axis is shared across all sparklines or independent for each sparkline.
   *
   * @public
   */
  YAxisBehavior?: SparklineAxisBehavior | undefined;

  /**
   * The type of the sparkline. Valid values are `LINE` and `AREA_LINE`.
   *
   * @public
   */
  VisualType?: SparklineVisualType | undefined;

  /**
   * The color of the sparkline line.
   *
   * @public
   */
  LineColor?: string | undefined;

  /**
   * The interpolation style for the sparkline line.
   *
   * @public
   */
  LineInterpolation?: LineInterpolation | undefined;

  /**
   * Marker styles options for a line series in `LineChartVisual`.
   *
   * @public
   */
  AllPointsMarker?: LineChartMarkerStyleSettings | undefined;

  /**
   * Marker styles options for a line series in `LineChartVisual`.
   *
   * @public
   */
  MaxValueMarker?: LineChartMarkerStyleSettings | undefined;

  /**
   * Marker styles options for a line series in `LineChartVisual`.
   *
   * @public
   */
  MinValueMarker?: LineChartMarkerStyleSettings | undefined;
}

/**
 * The inline visualization of a specific type to display within a chart.
 *
 * @public
 */
export interface TableInlineVisualization {
  /**
   * The configuration of the inline visualization of the data bars within a chart.
   *
   * @public
   */
  DataBars?: DataBarsOptions | undefined;

  /**
   * The configuration of the inline visualization of the sparklines within a chart.
   *
   * @public
   */
  Sparklines?: SparklinesOptions | undefined;
}

/**
 * The table options for a table visual.
 *
 * @public
 */
export interface TableOptions {
  /**
   * The orientation (vertical, horizontal) for a table.
   *
   * @public
   */
  Orientation?: TableOrientation | undefined;

  /**
   * The table cell style of a table header.
   *
   * @public
   */
  HeaderStyle?: TableCellStyle | undefined;

  /**
   * The table cell style of table cells.
   *
   * @public
   */
  CellStyle?: TableCellStyle | undefined;

  /**
   * The row alternate color options (widget status, row alternate colors) for a table.
   *
   * @public
   */
  RowAlternateColorOptions?: RowAlternateColorOptions | undefined;
}

/**
 * The total options for a table visual.
 *
 * @public
 */
export interface TotalOptions {
  /**
   * The visibility configuration for the total cells.
   *
   * @public
   */
  TotalsVisibility?: Visibility | undefined;

  /**
   * The placement (start, end) for the total cells.
   *
   * @public
   */
  Placement?: TableTotalsPlacement | undefined;

  /**
   * The scroll status (pinned, scrolled) for the total cells.
   *
   * @public
   */
  ScrollStatus?: TableTotalsScrollStatus | undefined;

  /**
   * The custom label string for the total cells.
   *
   * @public
   */
  CustomLabel?: string | undefined;

  /**
   * Cell styling options for the total cells.
   *
   * @public
   */
  TotalCellStyle?: TableCellStyle | undefined;

  /**
   * The total aggregation settings for each value field.
   *
   * @public
   */
  TotalAggregationOptions?: TotalAggregationOption[] | undefined;
}

/**
 * The configuration for a `TableVisual`.
 *
 * @public
 */
export interface TableConfiguration {
  /**
   * The field wells of the visual.
   *
   * @public
   */
  FieldWells?: TableFieldWells | undefined;

  /**
   * The sort configuration for a `TableVisual`.
   *
   * @public
   */
  SortConfiguration?: TableSortConfiguration | undefined;

  /**
   * The table options for a table visual.
   *
   * @public
   */
  TableOptions?: TableOptions | undefined;

  /**
   * The total options for a table visual.
   *
   * @public
   */
  TotalOptions?: TotalOptions | undefined;

  /**
   * The field options for a table visual.
   *
   * @public
   */
  FieldOptions?: TableFieldOptions | undefined;

  /**
   * The paginated report options for a table visual.
   *
   * @public
   */
  PaginatedReportOptions?: TablePaginatedReportOptions | undefined;

  /**
   * A collection of inline visualizations to display within a chart.
   *
   * @public
   */
  TableInlineVisualizations?: TableInlineVisualization[] | undefined;

  /**
   * The display options for the visual tooltip.
   *
   * @public
   */
  Tooltip?: TooltipOptions | undefined;

  /**
   * The options that define customizations available to dashboard readers for a specific visual
   *
   * @public
   */
  DashboardCustomizationVisualOptions?: DashboardCustomizationVisualOptions | undefined;

  /**
   * The general visual interactions setup for a visual.
   *
   * @public
   */
  Interactions?: VisualInteractionOptions | undefined;
}

/**
 * The cell conditional formatting option for a table.
 *
 * @public
 */
export interface TableCellConditionalFormatting {
  /**
   * The field ID of the cell for conditional formatting.
   *
   * @public
   */
  FieldId: string | undefined;

  /**
   * The text format of the cell for conditional formatting.
   *
   * @public
   */
  TextFormat?: TextConditionalFormat | undefined;
}
