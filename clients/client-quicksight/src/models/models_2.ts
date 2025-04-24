// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  AggFunction,
  AggregationPartitionBy,
  AggType,
  AmazonElasticsearchParameters,
  AmazonOpenSearchParameters,
  AnalysisDefaults,
  AssetOptions,
  AxisDisplayOptions,
  CalculatedField,
  CalculatedFieldFilterSensitiveLog,
  ChartAxisLabelOptions,
  ColumnConfiguration,
  ColumnConfigurationFilterSensitiveLog,
  DataLabelOptions,
  DataLabelOptionsFilterSensitiveLog,
  DataSetIdentifierDeclaration,
  DimensionField,
  FilterControl,
  FilterGroup,
  FontConfiguration,
  Layout,
  LegendOptions,
  MeasureField,
  MeasureFieldFilterSensitiveLog,
  NumberScale,
  ParameterControl,
  ParameterDeclaration,
  ParameterDeclarationFilterSensitiveLog,
  QueryExecutionOptions,
  ResourceStatus,
  SheetContentType,
  SheetControlLayout,
  SheetImage,
  SheetTextBox,
  TimeGranularity,
  TopicTimeGranularity,
  URLTargetConfiguration,
  Visibility,
  VisualCustomAction,
  VisualCustomActionDefaults,
  VisualInteractionOptions,
} from "./models_0";

import {
  BarChartVisual,
  BoxPlotVisual,
  ColorScale,
  ColumnHierarchy,
  ComboChartVisual,
  ConditionalFormattingColor,
  ConditionalFormattingColorFilterSensitiveLog,
  ConditionalFormattingIcon,
  ConditionalFormattingIconFilterSensitiveLog,
  CustomContentVisual,
  EmptyVisual,
  FieldSortOptions,
  FilledMapVisual,
  FunnelChartVisual,
  GaugeChartVisual,
  GaugeChartVisualFilterSensitiveLog,
  GeospatialMapVisual,
  HeatMapVisual,
  HistogramVisual,
  HistogramVisualFilterSensitiveLog,
  InsightVisual,
  InsightVisualFilterSensitiveLog,
  ItemsLimitConfiguration,
  KPIVisual,
  KPIVisualFilterSensitiveLog,
  LayerMapVisual,
  LayerMapVisualFilterSensitiveLog,
  LineChartVisual,
  PaginationConfiguration,
  PieChartVisual,
  PivotTableConfiguration,
  RowAlternateColorOptions,
  TableCellStyle,
  TableTotalsPlacement,
  TableTotalsScrollStatus,
  TooltipOptions,
  TotalAggregationOption,
  UnaggregatedField,
  UnaggregatedFieldFilterSensitiveLog,
  VisualPalette,
  VisualPaletteFilterSensitiveLog,
  VisualSubtitleLabelOptions,
  VisualTitleLabelOptions,
} from "./models_1";

import { QuickSightServiceException as __BaseException } from "./QuickSightServiceException";

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
  Role?: PivotTableConditionalFormattingScopeRole | undefined;
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
  BackgroundColor?: ConditionalFormattingColor | undefined;

  /**
   * <p>The conditional formatting for the text color.</p>
   * @public
   */
  TextColor?: ConditionalFormattingColor | undefined;

  /**
   * <p>The conditional formatting for the icon.</p>
   * @public
   */
  Icon?: ConditionalFormattingIcon | undefined;
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
  TextFormat?: TextConditionalFormat | undefined;

  /**
   * <p>The scope of the cell for conditional formatting.</p>
   * @public
   */
  Scope?: PivotTableConditionalFormattingScope | undefined;

  /**
   * <p>A list of cell scopes for conditional formatting.</p>
   * @public
   */
  Scopes?: PivotTableConditionalFormattingScope[] | undefined;
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
  Cell?: PivotTableCellConditionalFormatting | undefined;
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
  ConditionalFormattingOptions?: PivotTableConditionalFormattingOption[] | undefined;
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
  ChartConfiguration?: PivotTableConfiguration | undefined;

  /**
   * <p>The conditional formatting for a <code>PivotTableVisual</code>.</p>
   * @public
   */
  ConditionalFormatting?: PivotTableConditionalFormatting | undefined;

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
export const PluginVisualAxisName = {
  GROUP_BY: "GROUP_BY",
  VALUE: "VALUE",
} as const;

/**
 * @public
 */
export type PluginVisualAxisName = (typeof PluginVisualAxisName)[keyof typeof PluginVisualAxisName];

/**
 * <p>A collection of field wells for a plugin visual.</p>
 * @public
 */
export interface PluginVisualFieldWell {
  /**
   * <p>The semantic axis name for the field well.</p>
   * @public
   */
  AxisName?: PluginVisualAxisName | undefined;

  /**
   * <p>A list of dimensions for the field well.</p>
   * @public
   */
  Dimensions?: DimensionField[] | undefined;

  /**
   * <p>A list of measures that exist in the field well.</p>
   * @public
   */
  Measures?: MeasureField[] | undefined;

  /**
   * <p>A list of unaggregated fields that exist in the field well.</p>
   * @public
   */
  Unaggregated?: UnaggregatedField[] | undefined;
}

/**
 * <p>A query limits configuration.</p>
 * @public
 */
export interface PluginVisualItemsLimitConfiguration {
  /**
   * <p>Determines how many values are be fetched at once.</p>
   * @public
   */
  ItemsLimit?: number | undefined;
}

/**
 * <p>The table query sorting options for the plugin visual.</p>
 * @public
 */
export interface PluginVisualTableQuerySort {
  /**
   * <p>Determines how data is sorted in the response.</p>
   * @public
   */
  RowSort?: FieldSortOptions[] | undefined;

  /**
   * <p>The maximum amount of data to be returned by a query.</p>
   * @public
   */
  ItemsLimitConfiguration?: PluginVisualItemsLimitConfiguration | undefined;
}

/**
 * <p>Determines how the plugin visual sorts the data during query.</p>
 * @public
 */
export interface PluginVisualSortConfiguration {
  /**
   * <p>The table query sorting options for the plugin visual.</p>
   * @public
   */
  PluginVisualTableQuerySort?: PluginVisualTableQuerySort | undefined;
}

/**
 * <p>The key value pair of the persisted property.</p>
 * @public
 */
export interface PluginVisualProperty {
  /**
   * <p>The name of the plugin visual property.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The value of the plugin visual property.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>The options and persisted properties for the plugin visual.</p>
 * @public
 */
export interface PluginVisualOptions {
  /**
   * <p>The persisted properties and their values.</p>
   * @public
   */
  VisualProperties?: PluginVisualProperty[] | undefined;
}

/**
 * <p>The plugin visual configuration. This includes the field wells, sorting options, and persisted options of the plugin visual.</p>
 * @public
 */
export interface PluginVisualConfiguration {
  /**
   * <p>The field wells configuration of the plugin visual.</p>
   * @public
   */
  FieldWells?: PluginVisualFieldWell[] | undefined;

  /**
   * <p>The persisted properties of the plugin visual.</p>
   * @public
   */
  VisualOptions?: PluginVisualOptions | undefined;

  /**
   * <p>The sort configuration of the plugin visual.</p>
   * @public
   */
  SortConfiguration?: PluginVisualSortConfiguration | undefined;
}

/**
 * <p>A flexible visualization type that allows engineers
 *       to create new custom charts in Amazon QuickSight.</p>
 * @public
 */
export interface PluginVisual {
  /**
   * <p>The ID of the visual that you want to use.</p>
   * @public
   */
  VisualId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that reflects the plugin and version.</p>
   * @public
   */
  PluginArn: string | undefined;

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
   * <p>
   *        A description of the plugin field wells and their persisted properties.
   *       </p>
   * @public
   */
  ChartConfiguration?: PluginVisualConfiguration | undefined;

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
  Visibility?: Visibility | undefined;
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
  AreaStyleSettings?: RadarChartAreaStyleSettings | undefined;
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
  Category?: DimensionField[] | undefined;

  /**
   * <p>The color that are assigned to the aggregated field wells of a radar chart.</p>
   * @public
   */
  Color?: DimensionField[] | undefined;

  /**
   * <p>The values that are assigned to the aggregated field wells of a radar chart.</p>
   * @public
   */
  Values?: MeasureField[] | undefined;
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
  RadarChartAggregatedFieldWells?: RadarChartAggregatedFieldWells | undefined;
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
  CategorySort?: FieldSortOptions[] | undefined;

  /**
   * <p>The category items limit for a radar chart.</p>
   * @public
   */
  CategoryItemsLimit?: ItemsLimitConfiguration | undefined;

  /**
   * <p>The color sort configuration of a radar chart.</p>
   * @public
   */
  ColorSort?: FieldSortOptions[] | undefined;

  /**
   * <p>The color items limit of a radar chart.</p>
   * @public
   */
  ColorItemsLimit?: ItemsLimitConfiguration | undefined;
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
  FieldWells?: RadarChartFieldWells | undefined;

  /**
   * <p>The sort configuration of a <code>RadarChartVisual</code>.</p>
   * @public
   */
  SortConfiguration?: RadarChartSortConfiguration | undefined;

  /**
   * <p>The shape of the radar chart.</p>
   * @public
   */
  Shape?: RadarChartShape | undefined;

  /**
   * <p>The base sreies settings of a radar chart.</p>
   * @public
   */
  BaseSeriesSettings?: RadarChartSeriesSettings | undefined;

  /**
   * <p>The start angle of a radar chart's axis.</p>
   * @public
   */
  StartAngle?: number | undefined;

  /**
   * <p>The palette (chart color) display setup of the visual.</p>
   * @public
   */
  VisualPalette?: VisualPalette | undefined;

  /**
   * <p>Determines the visibility of the colors of alternatign bands in a radar chart.</p>
   * @public
   */
  AlternateBandColorsVisibility?: Visibility | undefined;

  /**
   * <p>The color of the even-numbered alternate bands of a radar chart.</p>
   * @public
   */
  AlternateBandEvenColor?: string | undefined;

  /**
   * <p>The color of the odd-numbered alternate bands of a radar chart.</p>
   * @public
   */
  AlternateBandOddColor?: string | undefined;

  /**
   * <p>The category axis of a radar chart.</p>
   * @public
   */
  CategoryAxis?: AxisDisplayOptions | undefined;

  /**
   * <p>The category label options of a radar chart.</p>
   * @public
   */
  CategoryLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * <p>The color axis of a radar chart.</p>
   * @public
   */
  ColorAxis?: AxisDisplayOptions | undefined;

  /**
   * <p>The color label options of a radar chart.</p>
   * @public
   */
  ColorLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * <p>The legend display setup of the visual.</p>
   * @public
   */
  Legend?: LegendOptions | undefined;

  /**
   * <p>The axis behavior options of a radar chart.</p>
   * @public
   */
  AxesRangeScale?: RadarChartAxesRangeScale | undefined;

  /**
   * <p>The general visual interactions setup for a visual.</p>
   * @public
   */
  Interactions?: VisualInteractionOptions | undefined;
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
  ChartConfiguration?: RadarChartConfiguration | undefined;

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
 * <p>The field well configuration of a sankey diagram.</p>
 * @public
 */
export interface SankeyDiagramAggregatedFieldWells {
  /**
   * <p>The source field wells of a sankey diagram.</p>
   * @public
   */
  Source?: DimensionField[] | undefined;

  /**
   * <p>The destination field wells of a sankey diagram.</p>
   * @public
   */
  Destination?: DimensionField[] | undefined;

  /**
   * <p>The weight field wells of a sankey diagram.</p>
   * @public
   */
  Weight?: MeasureField[] | undefined;
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
  SankeyDiagramAggregatedFieldWells?: SankeyDiagramAggregatedFieldWells | undefined;
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
  WeightSort?: FieldSortOptions[] | undefined;

  /**
   * <p>The limit on the number of source nodes that are displayed in a sankey diagram.</p>
   * @public
   */
  SourceItemsLimit?: ItemsLimitConfiguration | undefined;

  /**
   * <p>The limit on the number of destination nodes that are displayed in a sankey diagram.</p>
   * @public
   */
  DestinationItemsLimit?: ItemsLimitConfiguration | undefined;
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
  FieldWells?: SankeyDiagramFieldWells | undefined;

  /**
   * <p>The sort configuration of a sankey diagram.</p>
   * @public
   */
  SortConfiguration?: SankeyDiagramSortConfiguration | undefined;

  /**
   * <p>The data label configuration of a sankey diagram.</p>
   * @public
   */
  DataLabels?: DataLabelOptions | undefined;

  /**
   * <p>The general visual interactions setup for a visual.</p>
   * @public
   */
  Interactions?: VisualInteractionOptions | undefined;
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
  Title?: VisualTitleLabelOptions | undefined;

  /**
   * <p>The subtitle that is displayed on the visual.</p>
   * @public
   */
  Subtitle?: VisualSubtitleLabelOptions | undefined;

  /**
   * <p>The configuration of a sankey diagram.</p>
   * @public
   */
  ChartConfiguration?: SankeyDiagramChartConfiguration | undefined;

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
 * <p>The aggregated field well of a scatter plot.</p>
 * @public
 */
export interface ScatterPlotCategoricallyAggregatedFieldWells {
  /**
   * <p>The x-axis field well of a scatter plot.</p>
   *          <p>The x-axis is aggregated by category.</p>
   * @public
   */
  XAxis?: MeasureField[] | undefined;

  /**
   * <p>The y-axis field well of a scatter plot.</p>
   *          <p>The y-axis is aggregated by category.</p>
   * @public
   */
  YAxis?: MeasureField[] | undefined;

  /**
   * <p>The category field well of a scatter plot.</p>
   * @public
   */
  Category?: DimensionField[] | undefined;

  /**
   * <p>The size field well of a scatter plot.</p>
   * @public
   */
  Size?: MeasureField[] | undefined;

  /**
   * <p>The label field well of a scatter plot.</p>
   * @public
   */
  Label?: DimensionField[] | undefined;
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
  XAxis?: DimensionField[] | undefined;

  /**
   * <p>The y-axis field well of a scatter plot.</p>
   *          <p>The y-axis is a dimension field and cannot be aggregated.</p>
   * @public
   */
  YAxis?: DimensionField[] | undefined;

  /**
   * <p>The size field well of a scatter plot.</p>
   * @public
   */
  Size?: MeasureField[] | undefined;

  /**
   * <p>The category field well of a scatter plot.</p>
   * @public
   */
  Category?: DimensionField[] | undefined;

  /**
   * <p>The label field well of a scatter plot.</p>
   * @public
   */
  Label?: DimensionField[] | undefined;
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
  ScatterPlotCategoricallyAggregatedFieldWells?: ScatterPlotCategoricallyAggregatedFieldWells | undefined;

  /**
   * <p>The unaggregated field wells of a scatter plot. The x and y-axes of these scatter plots are
   *             unaggregated.</p>
   * @public
   */
  ScatterPlotUnaggregatedFieldWells?: ScatterPlotUnaggregatedFieldWells | undefined;
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
  ScatterPlotLimitConfiguration?: ItemsLimitConfiguration | undefined;
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
  FieldWells?: ScatterPlotFieldWells | undefined;

  /**
   * <p>The sort configuration of a scatter plot.</p>
   * @public
   */
  SortConfiguration?: ScatterPlotSortConfiguration | undefined;

  /**
   * <p>The label options (label text, label visibility, and sort icon visibility) of the scatter plot's x-axis.</p>
   * @public
   */
  XAxisLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * <p>The label display options (grid line, range, scale, and axis step) of the scatter plot's x-axis.</p>
   * @public
   */
  XAxisDisplayOptions?: AxisDisplayOptions | undefined;

  /**
   * <p>The label options (label text, label visibility, and sort icon visibility) of the scatter plot's y-axis.</p>
   * @public
   */
  YAxisLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * <p>The label display options (grid line, range, scale, and axis step) of the scatter plot's y-axis.</p>
   * @public
   */
  YAxisDisplayOptions?: AxisDisplayOptions | undefined;

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
   * <p>The legend display setup of the visual.</p>
   * @public
   */
  Tooltip?: TooltipOptions | undefined;

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
  ChartConfiguration?: ScatterPlotConfiguration | undefined;

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
 * <p>The settings for the pinned columns of a table visual.</p>
 * @public
 */
export interface TablePinnedFieldOptions {
  /**
   * <p>A list of columns to be pinned to the left of a table visual.</p>
   * @public
   */
  PinnedLeftFields?: string[] | undefined;
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
  TableCellImageScalingConfiguration?: TableCellImageScalingConfiguration | undefined;
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
  SizingOptions?: TableCellImageSizingConfiguration | undefined;
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
  Icon?: TableFieldIconSetType | undefined;
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
  Value?: string | undefined;

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
  CustomTextContent?: TableFieldCustomTextContent | undefined;

  /**
   * <p>The custom icon content for the table link content configuration.</p>
   * @public
   */
  CustomIconContent?: TableFieldCustomIconContent | undefined;
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
  LinkConfiguration?: TableFieldLinkConfiguration | undefined;

  /**
   * <p>The image configuration of a table field URL.</p>
   * @public
   */
  ImageConfiguration?: TableFieldImageConfiguration | undefined;
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
  Width?: string | undefined;

  /**
   * <p>The custom label for a table field.</p>
   * @public
   */
  CustomLabel?: string | undefined;

  /**
   * <p>The visibility of a table field.</p>
   * @public
   */
  Visibility?: Visibility | undefined;

  /**
   * <p>The URL configuration for a table field.</p>
   * @public
   */
  URLStyling?: TableFieldURLConfiguration | undefined;
}

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
 * <p>The column option of the transposed table.</p>
 * @public
 */
export interface TransposedTableOption {
  /**
   * <p>The index of a columns in a transposed table. The index range is 0-9999.</p>
   * @public
   */
  ColumnIndex?: number | undefined;

  /**
   * <p>The width of a column in a transposed table.</p>
   * @public
   */
  ColumnWidth?: string | undefined;

  /**
   * <p>The column type of the column in a transposed table. Choose one of the following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ROW_HEADER_COLUMN</code>: Refers to the leftmost column of the row header in the transposed table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VALUE_COLUMN</code>: Refers to all value columns in the transposed table.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ColumnType: TransposedColumnType | undefined;
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
  SelectedFieldOptions?: TableFieldOption[] | undefined;

  /**
   * <p>The order of the field IDs that are configured as field options for a table visual.</p>
   * @public
   */
  Order?: string[] | undefined;

  /**
   * <p>The settings for the pinned columns of a table visual.</p>
   * @public
   */
  PinnedFieldOptions?: TablePinnedFieldOptions | undefined;

  /**
   * <p>The <code>TableOptions</code> of a transposed table.</p>
   * @public
   */
  TransposedTableOptions?: TransposedTableOption[] | undefined;
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
  GroupBy?: DimensionField[] | undefined;

  /**
   * <p>The values field well for a pivot table. Values are aggregated based on group by fields.</p>
   * @public
   */
  Values?: MeasureField[] | undefined;
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
  Values?: UnaggregatedField[] | undefined;
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
  TableAggregatedFieldWells?: TableAggregatedFieldWells | undefined;

  /**
   * <p>The unaggregated field well for the table.</p>
   * @public
   */
  TableUnaggregatedFieldWells?: TableUnaggregatedFieldWells | undefined;
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
  VerticalOverflowVisibility?: Visibility | undefined;

  /**
   * <p>The visibility of repeating header rows on each page.</p>
   * @public
   */
  OverflowColumnHeaderVisibility?: Visibility | undefined;
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
  RowSort?: FieldSortOptions[] | undefined;

  /**
   * <p>The pagination configuration (page size, page number) for the table.</p>
   * @public
   */
  PaginationConfiguration?: PaginationConfiguration | undefined;
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
  PositiveColor?: string | undefined;

  /**
   * <p>The color of the negative data bar.</p>
   * @public
   */
  NegativeColor?: string | undefined;
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
  DataBars?: DataBarsOptions | undefined;
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
  Orientation?: TableOrientation | undefined;

  /**
   * <p>The table cell style of a table header.</p>
   * @public
   */
  HeaderStyle?: TableCellStyle | undefined;

  /**
   * <p>The table cell style of table cells.</p>
   * @public
   */
  CellStyle?: TableCellStyle | undefined;

  /**
   * <p>The row alternate color options (widget status, row alternate colors) for a table.</p>
   * @public
   */
  RowAlternateColorOptions?: RowAlternateColorOptions | undefined;
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
   * <p>Cell styling options for the total cells.</p>
   * @public
   */
  TotalCellStyle?: TableCellStyle | undefined;

  /**
   * <p>The total aggregation settings for each value field.</p>
   * @public
   */
  TotalAggregationOptions?: TotalAggregationOption[] | undefined;
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
  FieldWells?: TableFieldWells | undefined;

  /**
   * <p>The sort configuration for a <code>TableVisual</code>.</p>
   * @public
   */
  SortConfiguration?: TableSortConfiguration | undefined;

  /**
   * <p>The table options for a table visual.</p>
   * @public
   */
  TableOptions?: TableOptions | undefined;

  /**
   * <p>The total options for a table visual.</p>
   * @public
   */
  TotalOptions?: TotalOptions | undefined;

  /**
   * <p>The field options for a table visual.</p>
   * @public
   */
  FieldOptions?: TableFieldOptions | undefined;

  /**
   * <p>The paginated report options for a table visual.</p>
   * @public
   */
  PaginatedReportOptions?: TablePaginatedReportOptions | undefined;

  /**
   * <p>A collection of inline visualizations to display within a chart.</p>
   * @public
   */
  TableInlineVisualizations?: TableInlineVisualization[] | undefined;

  /**
   * <p>The general visual interactions setup for a visual.</p>
   * @public
   */
  Interactions?: VisualInteractionOptions | undefined;
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
  TextFormat?: TextConditionalFormat | undefined;
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
  BackgroundColor?: ConditionalFormattingColor | undefined;

  /**
   * <p>The conditional formatting color (solid, gradient) of the text for a table row.</p>
   * @public
   */
  TextColor?: ConditionalFormattingColor | undefined;
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
  Cell?: TableCellConditionalFormatting | undefined;

  /**
   * <p>The row conditional formatting option for a table.</p>
   * @public
   */
  Row?: TableRowConditionalFormatting | undefined;
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
  ConditionalFormattingOptions?: TableConditionalFormattingOption[] | undefined;
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
  ChartConfiguration?: TableConfiguration | undefined;

  /**
   * <p>The conditional formatting for a <code>PivotTableVisual</code>.</p>
   * @public
   */
  ConditionalFormatting?: TableConditionalFormatting | undefined;

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
 * <p>Aggregated field wells of a tree map.</p>
 * @public
 */
export interface TreeMapAggregatedFieldWells {
  /**
   * <p>The group by field well of a tree map. Values are grouped based on group by fields.</p>
   * @public
   */
  Groups?: DimensionField[] | undefined;

  /**
   * <p>The size field well of a tree map. Values are aggregated based on group by fields.</p>
   * @public
   */
  Sizes?: MeasureField[] | undefined;

  /**
   * <p>The color field well of a tree map. Values are grouped by aggregations based on group by fields.</p>
   * @public
   */
  Colors?: MeasureField[] | undefined;
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
  TreeMapAggregatedFieldWells?: TreeMapAggregatedFieldWells | undefined;
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
  TreeMapSort?: FieldSortOptions[] | undefined;

  /**
   * <p>The limit on the number of groups that are displayed.</p>
   * @public
   */
  TreeMapGroupItemsLimitConfiguration?: ItemsLimitConfiguration | undefined;
}

/**
 * <p>The configuration of a tree map.</p>
 * @public
 */
export interface TreeMapConfiguration {
  /**
   * <p>The field wells of the visual.</p>
   * @public
   */
  FieldWells?: TreeMapFieldWells | undefined;

  /**
   * <p>The sort configuration of a tree map.</p>
   * @public
   */
  SortConfiguration?: TreeMapSortConfiguration | undefined;

  /**
   * <p>The label options (label text, label visibility) of the groups that are displayed in a tree map.</p>
   * @public
   */
  GroupLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * <p>The label options (label text, label visibility) of the sizes that are displayed in a tree map.</p>
   * @public
   */
  SizeLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * <p>The label options (label text, label visibility) for the colors displayed in a tree map.</p>
   * @public
   */
  ColorLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * <p>The color options (gradient color, point of divergence) of a tree map.</p>
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
 * <p>A tree map.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/tree-map.html">Using tree maps</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 * @public
 */
export interface TreeMapVisual {
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
  ChartConfiguration?: TreeMapConfiguration | undefined;

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
 * <p>The color configuration for individual groups within a waterfall visual.</p>
 * @public
 */
export interface WaterfallChartGroupColorConfiguration {
  /**
   * <p>Defines the color for the positive bars of a waterfall chart.</p>
   * @public
   */
  PositiveBarColor?: string | undefined;

  /**
   * <p>Defines the color for the negative bars of a waterfall chart.</p>
   * @public
   */
  NegativeBarColor?: string | undefined;

  /**
   * <p>Defines the color for the total bars of a waterfall chart.</p>
   * @public
   */
  TotalBarColor?: string | undefined;
}

/**
 * <p>The color configuration of a waterfall visual.</p>
 * @public
 */
export interface WaterfallChartColorConfiguration {
  /**
   * <p>The color configuration for individual groups within a waterfall visual.</p>
   * @public
   */
  GroupColorConfiguration?: WaterfallChartGroupColorConfiguration | undefined;
}

/**
 * <p>The field well configuration of a waterfall visual.</p>
 * @public
 */
export interface WaterfallChartAggregatedFieldWells {
  /**
   * <p>The category field wells of a waterfall visual.</p>
   * @public
   */
  Categories?: DimensionField[] | undefined;

  /**
   * <p>The value field wells of a waterfall visual.</p>
   * @public
   */
  Values?: MeasureField[] | undefined;

  /**
   * <p>The breakdown field wells of a waterfall visual.</p>
   * @public
   */
  Breakdowns?: DimensionField[] | undefined;
}

/**
 * <p>The field well configuration of a waterfall visual.</p>
 * @public
 */
export interface WaterfallChartFieldWells {
  /**
   * <p>The field well configuration of a waterfall visual.</p>
   * @public
   */
  WaterfallChartAggregatedFieldWells?: WaterfallChartAggregatedFieldWells | undefined;
}

/**
 * <p>The sort configuration of a waterfall visual.</p>
 * @public
 */
export interface WaterfallChartSortConfiguration {
  /**
   * <p>The sort configuration of the category fields.</p>
   * @public
   */
  CategorySort?: FieldSortOptions[] | undefined;

  /**
   * <p>The limit on the number of bar groups that are displayed.</p>
   * @public
   */
  BreakdownItemsLimit?: ItemsLimitConfiguration | undefined;
}

/**
 * <p>The options that determine the presentation of a waterfall visual.</p>
 * @public
 */
export interface WaterfallChartOptions {
  /**
   * <p>This option determines the total bar label of a waterfall visual.</p>
   * @public
   */
  TotalBarLabel?: string | undefined;
}

/**
 * <p>The configuration for a waterfall visual.</p>
 * @public
 */
export interface WaterfallChartConfiguration {
  /**
   * <p>The field well configuration of a waterfall visual.</p>
   * @public
   */
  FieldWells?: WaterfallChartFieldWells | undefined;

  /**
   * <p>The sort configuration of a waterfall visual.</p>
   * @public
   */
  SortConfiguration?: WaterfallChartSortConfiguration | undefined;

  /**
   * <p>The options that determine the presentation of a waterfall visual.</p>
   * @public
   */
  WaterfallChartOptions?: WaterfallChartOptions | undefined;

  /**
   * <p>The options that determine the presentation of the category axis label.</p>
   * @public
   */
  CategoryAxisLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * <p>The options that determine the presentation of the category axis.</p>
   * @public
   */
  CategoryAxisDisplayOptions?: AxisDisplayOptions | undefined;

  /**
   * <p>The options that determine the presentation of the y-axis label.</p>
   * @public
   */
  PrimaryYAxisLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * <p>The options that determine the presentation of the y-axis.</p>
   * @public
   */
  PrimaryYAxisDisplayOptions?: AxisDisplayOptions | undefined;

  /**
   * <p>The legend configuration of a waterfall visual.</p>
   * @public
   */
  Legend?: LegendOptions | undefined;

  /**
   * <p>The data label configuration of a waterfall visual.</p>
   * @public
   */
  DataLabels?: DataLabelOptions | undefined;

  /**
   * <p>The visual palette configuration of a waterfall visual.</p>
   * @public
   */
  VisualPalette?: VisualPalette | undefined;

  /**
   * <p>The color configuration of a waterfall visual.</p>
   * @public
   */
  ColorConfiguration?: WaterfallChartColorConfiguration | undefined;

  /**
   * <p>The general visual interactions setup for a visual.</p>
   * @public
   */
  Interactions?: VisualInteractionOptions | undefined;
}

/**
 * <p>A waterfall chart.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/waterfall-chart.html">Using waterfall charts</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 * @public
 */
export interface WaterfallVisual {
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
   * <p>The configuration for a waterfall visual.</p>
   * @public
   */
  ChartConfiguration?: WaterfallChartConfiguration | undefined;

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
 * <p>The aggregated field wells of a word cloud.</p>
 * @public
 */
export interface WordCloudAggregatedFieldWells {
  /**
   * <p>The group by field well of a word cloud. Values are grouped by group by fields.</p>
   * @public
   */
  GroupBy?: DimensionField[] | undefined;

  /**
   * <p>The size field well of a word cloud. Values are aggregated based on group by fields.</p>
   * @public
   */
  Size?: MeasureField[] | undefined;
}

/**
 * <p>The field wells of a word cloud visual.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 * @public
 */
export interface WordCloudFieldWells {
  /**
   * <p>The aggregated field wells of a word cloud.</p>
   * @public
   */
  WordCloudAggregatedFieldWells?: WordCloudAggregatedFieldWells | undefined;
}

/**
 * <p>The sort configuration of a word cloud visual.</p>
 * @public
 */
export interface WordCloudSortConfiguration {
  /**
   * <p>The limit on the number of groups that are displayed in a word cloud.</p>
   * @public
   */
  CategoryItemsLimit?: ItemsLimitConfiguration | undefined;

  /**
   * <p>The sort configuration of group by fields.</p>
   * @public
   */
  CategorySort?: FieldSortOptions[] | undefined;
}

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
 * <p>The word cloud options for a word cloud visual.</p>
 * @public
 */
export interface WordCloudOptions {
  /**
   * <p>The word orientation options (horizontal, horizontal_and_vertical) for the words in a word cloud.</p>
   * @public
   */
  WordOrientation?: WordCloudWordOrientation | undefined;

  /**
   * <p>The word scaling options (emphasize, normal) for the words in a word cloud.</p>
   * @public
   */
  WordScaling?: WordCloudWordScaling | undefined;

  /**
   * <p>The cloud layout options (fluid, normal) of a word cloud.</p>
   * @public
   */
  CloudLayout?: WordCloudCloudLayout | undefined;

  /**
   * <p>The word casing options (lower_case, existing_case) for the words in a word cloud.</p>
   * @public
   */
  WordCasing?: WordCloudWordCasing | undefined;

  /**
   * <p>The word padding options (none, small, medium, large) for the words in a word cloud.</p>
   * @public
   */
  WordPadding?: WordCloudWordPadding | undefined;

  /**
   * <p>The length limit of each word from 1-100.</p>
   * @public
   */
  MaximumStringLength?: number | undefined;
}

/**
 * <p>The configuration of a word cloud visual.</p>
 * @public
 */
export interface WordCloudChartConfiguration {
  /**
   * <p>The field wells of the visual.</p>
   * @public
   */
  FieldWells?: WordCloudFieldWells | undefined;

  /**
   * <p>The sort configuration of a word cloud visual.</p>
   * @public
   */
  SortConfiguration?: WordCloudSortConfiguration | undefined;

  /**
   * <p>The label options (label text, label visibility, and sort icon visibility) for the word cloud category.</p>
   * @public
   */
  CategoryLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * <p>The options for a word cloud visual.</p>
   * @public
   */
  WordCloudOptions?: WordCloudOptions | undefined;

  /**
   * <p>The general visual interactions setup for a visual.</p>
   * @public
   */
  Interactions?: VisualInteractionOptions | undefined;
}

/**
 * <p>A word cloud.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/word-cloud.html">Using word clouds</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 * @public
 */
export interface WordCloudVisual {
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
  ChartConfiguration?: WordCloudChartConfiguration | undefined;

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
 * <p>A visual displayed on a sheet in an analysis, dashboard, or template.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 * @public
 */
export interface Visual {
  /**
   * <p>A table visual.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/tabular.html">Using tables as visuals</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   * @public
   */
  TableVisual?: TableVisual | undefined;

  /**
   * <p>A pivot table.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/pivot-table.html">Using pivot tables</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   * @public
   */
  PivotTableVisual?: PivotTableVisual | undefined;

  /**
   * <p>A bar chart.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/bar-charts.html">Using bar charts</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   * @public
   */
  BarChartVisual?: BarChartVisual | undefined;

  /**
   * <p>A key performance indicator (KPI).</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/kpi.html">Using KPIs</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   * @public
   */
  KPIVisual?: KPIVisual | undefined;

  /**
   * <p>A pie or donut chart.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/pie-chart.html">Using pie charts</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   * @public
   */
  PieChartVisual?: PieChartVisual | undefined;

  /**
   * <p>A gauge chart.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/gauge-chart.html">Using gauge charts</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   * @public
   */
  GaugeChartVisual?: GaugeChartVisual | undefined;

  /**
   * <p>A line chart.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/line-charts.html">Using line charts</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   * @public
   */
  LineChartVisual?: LineChartVisual | undefined;

  /**
   * <p>A heat map.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/heat-map.html">Using heat maps</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   * @public
   */
  HeatMapVisual?: HeatMapVisual | undefined;

  /**
   * <p>A tree map.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/tree-map.html">Using tree maps</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   * @public
   */
  TreeMapVisual?: TreeMapVisual | undefined;

  /**
   * <p>A geospatial map or a points on map visual.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/point-maps.html">Creating point maps</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   * @public
   */
  GeospatialMapVisual?: GeospatialMapVisual | undefined;

  /**
   * <p>A filled map.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/filled-maps.html">Creating filled maps</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   * @public
   */
  FilledMapVisual?: FilledMapVisual | undefined;

  /**
   * <p>The properties for a layer map visual</p>
   * @public
   */
  LayerMapVisual?: LayerMapVisual | undefined;

  /**
   * <p>A funnel chart.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/funnel-visual-content.html">Using funnel charts</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   * @public
   */
  FunnelChartVisual?: FunnelChartVisual | undefined;

  /**
   * <p>A scatter plot.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/scatter-plot.html">Using scatter plots</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   * @public
   */
  ScatterPlotVisual?: ScatterPlotVisual | undefined;

  /**
   * <p>A combo chart.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/combo-charts.html">Using combo charts</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   * @public
   */
  ComboChartVisual?: ComboChartVisual | undefined;

  /**
   * <p>A box plot.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/box-plots.html">Using box plots</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   * @public
   */
  BoxPlotVisual?: BoxPlotVisual | undefined;

  /**
   * <p>A waterfall chart.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/waterfall-chart.html">Using waterfall charts</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   * @public
   */
  WaterfallVisual?: WaterfallVisual | undefined;

  /**
   * <p>A histogram.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/histogram-charts.html">Using histograms</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   * @public
   */
  HistogramVisual?: HistogramVisual | undefined;

  /**
   * <p>A word cloud.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/word-cloud.html">Using word clouds</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   * @public
   */
  WordCloudVisual?: WordCloudVisual | undefined;

  /**
   * <p>An insight visual.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/computational-insights.html">Working with insights</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   * @public
   */
  InsightVisual?: InsightVisual | undefined;

  /**
   * <p>A sankey diagram.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/sankey-diagram.html">Using Sankey diagrams</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   * @public
   */
  SankeyDiagramVisual?: SankeyDiagramVisual | undefined;

  /**
   * <p>A visual that contains custom content.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/custom-visual-content.html">Using custom visual content</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   * @public
   */
  CustomContentVisual?: CustomContentVisual | undefined;

  /**
   * <p>An empty visual.</p>
   * @public
   */
  EmptyVisual?: EmptyVisual | undefined;

  /**
   * <p>A radar chart visual.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/radar-chart.html">Using radar charts</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   * @public
   */
  RadarChartVisual?: RadarChartVisual | undefined;

  /**
   * <p>The custom plugin visual type.</p>
   * @public
   */
  PluginVisual?: PluginVisual | undefined;
}

/**
 * <p>A sheet is an object that contains a set of visuals that
 *             are viewed together on one page in a paginated report. Every analysis and dashboard must contain at least one sheet.</p>
 * @public
 */
export interface SheetDefinition {
  /**
   * <p>The unique identifier of a sheet.</p>
   * @public
   */
  SheetId: string | undefined;

  /**
   * <p>The title of the sheet.</p>
   * @public
   */
  Title?: string | undefined;

  /**
   * <p>A description of the sheet.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The name of the sheet. This name is displayed on the sheet's tab in the Amazon QuickSight
   *             console.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The list of parameter controls that are on a sheet.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/parameters-controls.html">Using a Control with a Parameter in Amazon QuickSight</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   * @public
   */
  ParameterControls?: ParameterControl[] | undefined;

  /**
   * <p>The list of filter controls that are on a sheet.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/filter-controls.html">Adding filter controls to analysis sheets</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   * @public
   */
  FilterControls?: FilterControl[] | undefined;

  /**
   * <p>A list of the visuals that are on a sheet. Visual placement is determined by the layout of the sheet.</p>
   * @public
   */
  Visuals?: Visual[] | undefined;

  /**
   * <p>The text boxes that are on a sheet.</p>
   * @public
   */
  TextBoxes?: SheetTextBox[] | undefined;

  /**
   * <p>A list of images on a sheet.</p>
   * @public
   */
  Images?: SheetImage[] | undefined;

  /**
   * <p>Layouts define how the components of a sheet are arranged.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/types-of-layout.html">Types of layout</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   * @public
   */
  Layouts?: Layout[] | undefined;

  /**
   * <p>The control layouts of the sheet.</p>
   * @public
   */
  SheetControlLayouts?: SheetControlLayout[] | undefined;

  /**
   * <p>The layout content type of the sheet. Choose one of the following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PAGINATED</code>: Creates a sheet for a paginated report.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INTERACTIVE</code>: Creates a sheet for an interactive dashboard.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ContentType?: SheetContentType | undefined;

  /**
   * <p>A list of visual custom actions for the sheet.</p>
   * @public
   */
  CustomActionDefaults?: VisualCustomActionDefaults | undefined;
}

/**
 * <p>The structure that contains the Amazon S3 location to download the static file from.</p>
 * @public
 */
export interface StaticFileS3SourceOptions {
  /**
   * <p>The name of the Amazon S3 bucket.</p>
   * @public
   */
  BucketName: string | undefined;

  /**
   * <p>The identifier of the static file in the Amazon S3 bucket.</p>
   * @public
   */
  ObjectKey: string | undefined;

  /**
   * <p>The Region of the Amazon S3 account that contains the bucket.</p>
   * @public
   */
  Region: string | undefined;
}

/**
 * <p>The structure that contains the URL to download the static file from.</p>
 * @public
 */
export interface StaticFileUrlSourceOptions {
  /**
   * <p>The URL to download the static file from.</p>
   * @public
   */
  Url: string | undefined;
}

/**
 * <p>The source of the static file.</p>
 * @public
 */
export interface StaticFileSource {
  /**
   * <p>The structure that contains the URL to download the static file from.</p>
   * @public
   */
  UrlOptions?: StaticFileUrlSourceOptions | undefined;

  /**
   * <p>The structure that contains the Amazon S3 location to download the static file from.</p>
   * @public
   */
  S3Options?: StaticFileS3SourceOptions | undefined;
}

/**
 * <p>A static file that contains an image.</p>
 * @public
 */
export interface ImageStaticFile {
  /**
   * <p>The ID of the static file that contains an image.</p>
   * @public
   */
  StaticFileId: string | undefined;

  /**
   * <p>The source of the image static file.</p>
   * @public
   */
  Source?: StaticFileSource | undefined;
}

/**
 * <p>A static file that contains the geospatial data.</p>
 * @public
 */
export interface SpatialStaticFile {
  /**
   * <p>The ID of the spatial static file.</p>
   * @public
   */
  StaticFileId: string | undefined;

  /**
   * <p>The source of the spatial static file.</p>
   * @public
   */
  Source?: StaticFileSource | undefined;
}

/**
 * <p>The static file.</p>
 * @public
 */
export interface StaticFile {
  /**
   * <p>The image static file.</p>
   * @public
   */
  ImageStaticFile?: ImageStaticFile | undefined;

  /**
   * <p>The spacial static file.</p>
   * @public
   */
  SpatialStaticFile?: SpatialStaticFile | undefined;
}

/**
 * <p>The definition of an analysis.</p>
 * @public
 */
export interface AnalysisDefinition {
  /**
   * <p>An array of dataset identifier declarations. This mapping allows the usage of dataset identifiers instead
   *             of dataset ARNs throughout analysis sub-structures.</p>
   * @public
   */
  DataSetIdentifierDeclarations: DataSetIdentifierDeclaration[] | undefined;

  /**
   * <p>An array of sheet definitions for an analysis. Each <code>SheetDefinition</code> provides detailed information about
   *             a sheet within this analysis.</p>
   * @public
   */
  Sheets?: SheetDefinition[] | undefined;

  /**
   * <p>An array of calculated field definitions for the analysis.</p>
   * @public
   */
  CalculatedFields?: CalculatedField[] | undefined;

  /**
   * <p>An array of parameter declarations for an analysis.</p>
   *          <p>Parameters are named variables that can transfer a value for use by an action or an object.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/parameters-in-quicksight.html">Parameters in Amazon QuickSight</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   * @public
   */
  ParameterDeclarations?: ParameterDeclaration[] | undefined;

  /**
   * <p>Filter definitions for an analysis.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/adding-a-filter.html">Filtering Data in Amazon QuickSight</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   * @public
   */
  FilterGroups?: FilterGroup[] | undefined;

  /**
   * <p>
   *             An array of analysis-level column configurations. Column configurations can be used to set default
   *             formatting for a column to be used throughout an analysis.
   *         </p>
   * @public
   */
  ColumnConfigurations?: ColumnConfiguration[] | undefined;

  /**
   * <p>The configuration for default analysis settings.</p>
   * @public
   */
  AnalysisDefaults?: AnalysisDefaults | undefined;

  /**
   * <p>An array of option definitions for an analysis.</p>
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
export const FilterOperator = {
  StringEquals: "StringEquals",
  StringLike: "StringLike",
} as const;

/**
 * @public
 */
export type FilterOperator = (typeof FilterOperator)[keyof typeof FilterOperator];

/**
 * <p>A filter that you apply when searching for one or more analyses.</p>
 * @public
 */
export interface AnalysisSearchFilter {
  /**
   * <p>The comparison operator that you want to use as a filter, for example  <code>"Operator": "StringEquals"</code>. Valid values are  <code>"StringEquals"</code>  and  <code>"StringLike"</code>.</p>
   *          <p>If you set the operator value to <code>"StringEquals"</code>, you need to provide an ownership related filter in the <code>"NAME"</code> field and the arn of the user or group whose folders you want to search in the <code>"Value"</code> field. For example,  <code>"Name":"DIRECT_QUICKSIGHT_OWNER", "Operator": "StringEquals", "Value": "arn:aws:quicksight:us-east-1:1:user/default/UserName1"</code>.</p>
   *          <p>If you set the value to <code>"StringLike"</code>, you need to provide the name of the folders you are searching for. For example, <code>"Name":"ANALYSIS_NAME", "Operator": "StringLike", "Value": "Test"</code>. The <code>"StringLike"</code> operator only supports the <code>NAME</code> value <code>ANALYSIS_NAME</code>.</p>
   * @public
   */
  Operator?: FilterOperator | undefined;

  /**
   * <p>The name of the value that you want to use as a filter, for example <code>"Name":
   *                 "QUICKSIGHT_OWNER"</code>.</p>
   *          <p>Valid values are defined as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>QUICKSIGHT_VIEWER_OR_OWNER</code>: Provide an ARN of a user or group, and any analyses with that ARN listed as one of the analysis' owners or viewers are returned. Implicit permissions from folders or groups are considered. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>QUICKSIGHT_OWNER</code>: Provide an ARN of a user or group, and any analyses with that ARN listed as one of the owners of the analyses are returned. Implicit permissions from folders or groups are considered.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DIRECT_QUICKSIGHT_SOLE_OWNER</code>: Provide an ARN of a user or group, and any analyses with that ARN listed as the only owner of the analysis are returned. Implicit permissions from folders or groups are not considered.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DIRECT_QUICKSIGHT_OWNER</code>: Provide an ARN of a user or group, and any analyses with that ARN listed as one of the owners of the analyses are returned. Implicit permissions from folders or groups are not considered.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DIRECT_QUICKSIGHT_VIEWER_OR_OWNER</code>: Provide an ARN of a user or group, and any analyses with that ARN listed as one of the owners or viewers of the analyses are returned. Implicit permissions from folders or groups are not considered. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ANALYSIS_NAME</code>: Any analyses whose names have a substring match to this value will be returned.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Name?: AnalysisFilterAttribute | undefined;

  /**
   * <p>The value of the named item, in this case <code>QUICKSIGHT_USER</code>, that you want
   *             to use as a filter, for example <code>"Value"</code>. An example is
   *                 <code>"arn:aws:quicksight:us-east-1:1:user/default/UserName1"</code>.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>Dataset reference.</p>
 * @public
 */
export interface DataSetReference {
  /**
   * <p>Dataset placeholder.</p>
   * @public
   */
  DataSetPlaceholder: string | undefined;

  /**
   * <p>Dataset Amazon Resource Name (ARN).</p>
   * @public
   */
  DataSetArn: string | undefined;
}

/**
 * <p>The source template of an analysis.</p>
 * @public
 */
export interface AnalysisSourceTemplate {
  /**
   * <p>The dataset references of the source template of an analysis.</p>
   * @public
   */
  DataSetReferences: DataSetReference[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the source template of an analysis.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * <p>The source entity of an analysis.</p>
 * @public
 */
export interface AnalysisSourceEntity {
  /**
   * <p>The source template for the source entity of the analysis.</p>
   * @public
   */
  SourceTemplate?: AnalysisSourceTemplate | undefined;
}

/**
 * <p>The summary metadata that describes an analysis.</p>
 * @public
 */
export interface AnalysisSummary {
  /**
   * <p>The Amazon Resource Name (ARN) for the analysis.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID of the analysis. This ID displays in the URL.</p>
   * @public
   */
  AnalysisId?: string | undefined;

  /**
   * <p>The name of the analysis. This name is displayed in the Amazon QuickSight console.
   *             </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The last known status for the analysis.</p>
   * @public
   */
  Status?: ResourceStatus | undefined;

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
}

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
 * <p>The definition of the Anchor.</p>
 * @public
 */
export interface Anchor {
  /**
   * <p>The <code>AnchorType</code> for the Anchor.</p>
   * @public
   */
  AnchorType?: AnchorType | undefined;

  /**
   * <p>The <code>TimeGranularity</code> of the Anchor.</p>
   * @public
   */
  TimeGranularity?: TimeGranularity | undefined;

  /**
   * <p>The offset of the Anchor.</p>
   * @public
   */
  Offset?: number | undefined;
}

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
 * <p>The shared view settings of an embedded dashboard.</p>
 * @public
 */
export interface SharedViewConfigurations {
  /**
   * <p>The shared view settings of an embedded dashboard.</p>
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * <p>The feature configuration for an embedded dashboard.</p>
 * @public
 */
export interface AnonymousUserDashboardFeatureConfigurations {
  /**
   * <p>The shared view settings of an embedded dashboard.</p>
   * @public
   */
  SharedView?: SharedViewConfigurations | undefined;
}

/**
 * <p>Information about the dashboard that you want to embed.</p>
 * @public
 */
export interface AnonymousUserDashboardEmbeddingConfiguration {
  /**
   * <p>The dashboard ID for the dashboard that you want the user to see first. This ID is included in the output URL. When the URL in response is accessed, Amazon QuickSight renders this dashboard.</p>
   *          <p>The Amazon Resource Name (ARN) of this dashboard must be included in the <code>AuthorizedResourceArns</code> parameter. Otherwise, the request will fail with <code>InvalidParameterValueException</code>.</p>
   * @public
   */
  InitialDashboardId: string | undefined;

  /**
   * <p>A list of all enabled features of a specified anonymous dashboard.</p>
   * @public
   */
  EnabledFeatures?: AnonymousUserDashboardEmbeddingConfigurationEnabledFeature[] | undefined;

  /**
   * <p>A list of all disabled features of a specified anonymous dashboard.</p>
   * @public
   */
  DisabledFeatures?: AnonymousUserDashboardEmbeddingConfigurationDisabledFeature[] | undefined;

  /**
   * <p>The feature configuration for an embedded dashboard.</p>
   * @public
   */
  FeatureConfigurations?: AnonymousUserDashboardFeatureConfigurations | undefined;
}

/**
 * <p>A structure that contains the following elements:</p>
 *          <ul>
 *             <li>
 *                <p>The <code>DashboardId</code> of the dashboard that has the visual that you want to embed.</p>
 *             </li>
 *             <li>
 *                <p>The <code>SheetId</code> of the sheet that has the visual that you want to embed.</p>
 *             </li>
 *             <li>
 *                <p>The <code>VisualId</code> of the visual that you want to embed.</p>
 *             </li>
 *          </ul>
 *          <p>The <code>DashboardId</code>, <code>SheetId</code>, and <code>VisualId</code> can be found in the <code>IDs for developers</code> section of the <code>Embed visual</code> pane of the visual's on-visual menu of the Amazon QuickSight console. You can also get the <code>DashboardId</code> with a <code>ListDashboards</code> API operation.</p>
 * @public
 */
export interface DashboardVisualId {
  /**
   * <p>The ID of the dashboard that has the visual that you want to embed. The <code>DashboardId</code> can be found in the <code>IDs for developers</code> section of the <code>Embed visual</code> pane of the visual's on-visual menu of the Amazon QuickSight console. You can also get the <code>DashboardId</code> with a <code>ListDashboards</code> API operation.</p>
   * @public
   */
  DashboardId: string | undefined;

  /**
   * <p>The ID of the sheet that the has visual that you want to embed. The <code>SheetId</code> can be found in the <code>IDs for developers</code> section of the <code>Embed visual</code> pane of the visual's on-visual menu of the Amazon QuickSight console.</p>
   * @public
   */
  SheetId: string | undefined;

  /**
   * <p>The ID of the visual that you want to embed. The <code>VisualID</code> can be found in the <code>IDs for developers</code> section of the <code>Embed visual</code> pane of the visual's on-visual menu of the Amazon QuickSight console.</p>
   * @public
   */
  VisualId: string | undefined;
}

/**
 * <p>The experience that you are embedding. You can use this object to generate a url that embeds a visual into your application.</p>
 * @public
 */
export interface AnonymousUserDashboardVisualEmbeddingConfiguration {
  /**
   * <p>The visual ID for the visual that you want the user to see. This ID is included in the output URL. When the URL in response is accessed, Amazon QuickSight renders this visual.</p>
   *          <p>The Amazon Resource Name (ARN) of the dashboard that the visual belongs to must be included in the <code>AuthorizedResourceArns</code> parameter. Otherwise, the request will fail with <code>InvalidParameterValueException</code>.</p>
   * @public
   */
  InitialDashboardVisualId: DashboardVisualId | undefined;
}

/**
 * <p>The settings that you want to use for the Generative Q&A experience.</p>
 * @public
 */
export interface AnonymousUserGenerativeQnAEmbeddingConfiguration {
  /**
   * <p>The Amazon QuickSight Q topic ID of the new reader experience topic that you want the anonymous user to see first. This ID is included in the output URL. When the URL in response is accessed, Amazon QuickSight renders the Generative Q&A experience with this new reader experience topic pre selected.</p>
   *          <p>The Amazon Resource Name (ARN) of this Q new reader experience topic must be included in the <code>AuthorizedResourceArns</code> parameter. Otherwise, the request fails with an <code>InvalidParameterValueException</code> error.</p>
   * @public
   */
  InitialTopicId: string | undefined;
}

/**
 * <p>The settings that you want to use with the Q search bar.</p>
 * @public
 */
export interface AnonymousUserQSearchBarEmbeddingConfiguration {
  /**
   * <p>The Amazon QuickSight Q topic ID of the legacy topic that you want the anonymous user to see first. This ID is included in the output URL. When the URL in response is accessed, Amazon QuickSight renders the Q search bar with this legacy topic pre-selected.</p>
   *          <p>The Amazon Resource Name (ARN) of this Q legacy topic must be included in the <code>AuthorizedResourceArns</code> parameter. Otherwise, the request fails with an <code>InvalidParameterValueException</code> error.</p>
   * @public
   */
  InitialTopicId: string | undefined;
}

/**
 * <p>The type of experience you want to embed. For anonymous users, you can embed Amazon QuickSight dashboards.</p>
 * @public
 */
export interface AnonymousUserEmbeddingExperienceConfiguration {
  /**
   * <p>The type of embedding experience. In this case, Amazon QuickSight dashboards.</p>
   * @public
   */
  Dashboard?: AnonymousUserDashboardEmbeddingConfiguration | undefined;

  /**
   * <p>The type of embedding experience. In this case, Amazon QuickSight visuals.</p>
   * @public
   */
  DashboardVisual?: AnonymousUserDashboardVisualEmbeddingConfiguration | undefined;

  /**
   * <p>The Q search bar that you want to use for anonymous user embedding.</p>
   * @public
   */
  QSearchBar?: AnonymousUserQSearchBarEmbeddingConfiguration | undefined;

  /**
   * <p>The Generative Q&A experience that you want to use for anonymous user embedding.</p>
   * @public
   */
  GenerativeQnA?: AnonymousUserGenerativeQnAEmbeddingConfiguration | undefined;
}

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
 * <p>A structure that contains information that identifies the snapshot that needs to be generated.</p>
 * @public
 */
export interface SnapshotFileSheetSelection {
  /**
   * <p>The sheet ID of the dashboard to generate the snapshot artifact from. This value is required for CSV, Excel, and PDF format types.</p>
   * @public
   */
  SheetId: string | undefined;

  /**
   * <p>The selection scope of the visuals on a sheet of a dashboard that you are generating a snapthot of. You can choose one of the following options.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALL_VISUALS</code> - Selects all visuals that are on the sheet. This value is required if the snapshot is a PDF.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SELECTED_VISUALS</code> - Select the visual that you want to add to the snapshot. This value is required if the snapshot is a CSV or Excel workbook.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SelectionScope: SnapshotFileSheetSelectionScope | undefined;

  /**
   * <p>
   *             A structure that lists the IDs of the visuals in the selected sheet. Supported visual types are table, pivot table visuals. This value is required if you are generating a CSV or Excel workbook. This value supports a maximum of 1 visual ID for CSV and 5 visual IDs across up to 5 sheet selections for Excel. If you are generating an Excel workbook, the order of the visual IDs provided in this structure determines the order of the worksheets in the Excel file.
   *         </p>
   * @public
   */
  VisualIds?: string[] | undefined;
}

/**
 * <p>A structure that contains the information for the snapshot that you want to generate. This information is provided by you when you start a new snapshot job.</p>
 * @public
 */
export interface SnapshotFile {
  /**
   * <p>A list of <code>SnapshotFileSheetSelection</code> objects that contain information on the dashboard sheet that is exported. These objects provide information about the snapshot artifacts that are generated during the job. This structure can hold a maximum of 5 CSV configurations, 5 Excel configurations, or 1 configuration for PDF.</p>
   * @public
   */
  SheetSelections: SnapshotFileSheetSelection[] | undefined;

  /**
   * <p>The format of the snapshot file to be generated. You can choose between <code>CSV</code>, <code>Excel</code>, or <code>PDF</code>.</p>
   * @public
   */
  FormatType: SnapshotFileFormatType | undefined;
}

/**
 * <p>Information on the error that caused the snapshot job to fail.</p>
 * @public
 */
export interface SnapshotJobResultErrorInfo {
  /**
   * <p>The error message.</p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p>The error type.</p>
   * @public
   */
  ErrorType?: string | undefined;
}

/**
 * <p>An optional structure that contains the Amazon S3 bucket configuration that the generated snapshots are stored in. If you don't provide this information, generated snapshots are stored in the default Amazon QuickSight bucket.</p>
 * @public
 */
export interface S3BucketConfiguration {
  /**
   * <p>The name of an existing Amazon S3 bucket where the generated snapshot artifacts are sent.</p>
   * @public
   */
  BucketName: string | undefined;

  /**
   * <p>The prefix of the Amazon S3 bucket that the generated snapshots are stored in.</p>
   * @public
   */
  BucketPrefix: string | undefined;

  /**
   * <p>The region that the Amazon S3 bucket is located in. The bucket must be located in the same region that the <code>StartDashboardSnapshotJob</code> API call is made.</p>
   * @public
   */
  BucketRegion: string | undefined;
}

/**
 * <p>A structure that describes the Amazon S3 settings to use to save the generated dashboard snapshot.</p>
 * @public
 */
export interface SnapshotS3DestinationConfiguration {
  /**
   * <p>A structure that contains details about the Amazon S3 bucket that the generated dashboard snapshot is saved in.</p>
   * @public
   */
  BucketConfiguration: S3BucketConfiguration | undefined;
}

/**
 * <p>The Amazon S3 result from the snapshot job. The result includes the <code>DestinationConfiguration</code> and the Amazon S3 Uri. If an error occured during the job, the result returns information on the error.</p>
 * @public
 */
export interface SnapshotJobS3Result {
  /**
   * <p>A list of Amazon S3 bucket configurations that are provided when you make a <code>StartDashboardSnapshotJob</code> API call.
   *         </p>
   * @public
   */
  S3DestinationConfiguration?: SnapshotS3DestinationConfiguration | undefined;

  /**
   * <p>The Amazon S3 Uri.</p>
   * @public
   */
  S3Uri?: string | undefined;

  /**
   * <p>An array of error records that describe any failures that occur while the dashboard snapshot job runs.</p>
   * @public
   */
  ErrorInfo?: SnapshotJobResultErrorInfo[] | undefined;
}

/**
 * <p>A structure that contains information on the generated snapshot file groups.</p>
 * @public
 */
export interface SnapshotJobResultFileGroup {
  /**
   * <p> A list of <code>SnapshotFile</code> objects.</p>
   * @public
   */
  Files?: SnapshotFile[] | undefined;

  /**
   * <p> A list of <code>SnapshotJobS3Result</code> objects.</p>
   * @public
   */
  S3Results?: SnapshotJobS3Result[] | undefined;
}

/**
 * <p>A structure that contains the file groups that are requested for the artifact generation in a <code>StartDashboardSnapshotJob</code> API call.
 *         </p>
 * @public
 */
export interface AnonymousUserSnapshotJobResult {
  /**
   * <p>A list of <code>SnapshotJobResultFileGroup</code> objects that contain information on the files that are requested during a <code>StartDashboardSnapshotJob</code> API call. If the job succeeds, these objects contain the location where the snapshot artifacts are stored. If the job fails, the objects contain information about the error that caused the job to fail.</p>
   * @public
   */
  FileGroups?: SnapshotJobResultFileGroup[] | undefined;
}

/**
 * <p>The color palette.</p>
 * @public
 */
export interface Palette {
  /**
   * <p>The foreground color.</p>
   * @public
   */
  Foreground?: string | undefined;

  /**
   * <p>The background color.</p>
   * @public
   */
  Background?: string | undefined;
}

/**
 * <p>The color palette.</p>
 * @public
 */
export interface BrandColorPalette {
  /**
   * <p>The primary color.</p>
   * @public
   */
  Primary?: Palette | undefined;

  /**
   * <p>The secondary color.</p>
   * @public
   */
  Secondary?: Palette | undefined;

  /**
   * <p>The color that is used for accent elements.</p>
   * @public
   */
  Accent?: Palette | undefined;

  /**
   * <p>The color that is used for measure elements.</p>
   * @public
   */
  Measure?: Palette | undefined;

  /**
   * <p>The color that is used for dimension elements.</p>
   * @public
   */
  Dimension?: Palette | undefined;

  /**
   * <p>The color that is used for success elements.</p>
   * @public
   */
  Success?: Palette | undefined;

  /**
   * <p>The color that is used for info elements.</p>
   * @public
   */
  Info?: Palette | undefined;

  /**
   * <p>The color that is used for warning elements.</p>
   * @public
   */
  Warning?: Palette | undefined;

  /**
   * <p>The color that is used for danger elements.</p>
   * @public
   */
  Danger?: Palette | undefined;
}

/**
 * <p>The navigation bar style.</p>
 * @public
 */
export interface NavbarStyle {
  /**
   * <p>The global navigation bar style.</p>
   * @public
   */
  GlobalNavbar?: Palette | undefined;

  /**
   * <p>The contextual navigation bar style.</p>
   * @public
   */
  ContextualNavbar?: Palette | undefined;
}

/**
 * <p>The element style.</p>
 * @public
 */
export interface BrandElementStyle {
  /**
   * <p>The navigation bar style.</p>
   * @public
   */
  NavbarStyle?: NavbarStyle | undefined;
}

/**
 * <p>The application theme.</p>
 * @public
 */
export interface ApplicationTheme {
  /**
   * <p>The color palette.</p>
   * @public
   */
  BrandColorPalette?: BrandColorPalette | undefined;

  /**
   * <p>The element style.</p>
   * @public
   */
  BrandElementStyle?: BrandElementStyle | undefined;
}

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
 * <p>Controls how a specific <code>Analysis</code> resource is parameterized in the returned CloudFormation template.</p>
 * @public
 */
export interface AssetBundleExportJobAnalysisOverrideProperties {
  /**
   * <p>The ARN of the specific <code>Analysis</code> resource whose override properties are configured in this structure.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>A list of <code>Analysis</code> resource properties to generate variables for in the returned CloudFormation template.</p>
   * @public
   */
  Properties: AssetBundleExportJobAnalysisPropertyToOverride[] | undefined;
}

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
 * <p>Controls how a specific <code>Dashboard</code> resource is parameterized in the returned CloudFormation template.</p>
 * @public
 */
export interface AssetBundleExportJobDashboardOverrideProperties {
  /**
   * <p>The ARN of the specific <code>Dashboard</code> resource whose override properties are configured in this structure.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>A list of <code>Dashboard</code> resource properties to generate variables for in the returned CloudFormation template.</p>
   * @public
   */
  Properties: AssetBundleExportJobDashboardPropertyToOverride[] | undefined;
}

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
 * <p>Controls how a specific <code>DataSet</code> resource is parameterized in the returned CloudFormation template.</p>
 * @public
 */
export interface AssetBundleExportJobDataSetOverrideProperties {
  /**
   * <p>The ARN of the specific <code>DataSet</code> resource whose override properties are configured in this structure.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>A list of <code>DataSet</code> resource properties to generate variables for in the returned CloudFormation template.</p>
   * @public
   */
  Properties: AssetBundleExportJobDataSetPropertyToOverride[] | undefined;
}

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
 * <p>Controls how a specific <code>DataSource</code> resource is parameterized in the returned CloudFormation template.</p>
 * @public
 */
export interface AssetBundleExportJobDataSourceOverrideProperties {
  /**
   * <p>The ARN of the specific <code>DataSource</code> resource whose override properties are configured in this structure.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>A list of <code>DataSource</code> resource properties to generate variables for in the returned CloudFormation template.</p>
   * @public
   */
  Properties: AssetBundleExportJobDataSourcePropertyToOverride[] | undefined;
}

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
 * <p>Controls how a specific <code>Folder</code> resource is parameterized in the returned CloudFormation template.</p>
 * @public
 */
export interface AssetBundleExportJobFolderOverrideProperties {
  /**
   * <p>The ARN of the specific <code>Folder</code> resource whose override properties are configured in this structure.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>A list of <code>Folder</code> resource properties to generate variables for in the returned CloudFormation template.</p>
   * @public
   */
  Properties: AssetBundleExportJobFolderPropertyToOverride[] | undefined;
}

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
 * <p>Controls how a specific <code>RefreshSchedule</code> resource is parameterized in the returned CloudFormation template.</p>
 * @public
 */
export interface AssetBundleExportJobRefreshScheduleOverrideProperties {
  /**
   * <p>The ARN of the specific <code>RefreshSchedule</code> resource whose override properties are configured in this structure.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>A list of <code>RefreshSchedule</code> resource properties to generate variables for in the returned CloudFormation template.</p>
   * @public
   */
  Properties: AssetBundleExportJobRefreshSchedulePropertyToOverride[] | undefined;
}

/**
 * <p>An optional structure that configures resource ID overrides for the export job.</p>
 * @public
 */
export interface AssetBundleExportJobResourceIdOverrideConfiguration {
  /**
   * <p>An option to request a CloudFormation variable for a prefix to be prepended to each resource's ID before import. The prefix is only added to the asset IDs and does not change the name of the asset.</p>
   * @public
   */
  PrefixForAllResources?: boolean | undefined;
}

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
 * <p>Controls how a specific <code>Theme</code> resource is parameterized in the returned CloudFormation template.</p>
 * @public
 */
export interface AssetBundleExportJobThemeOverrideProperties {
  /**
   * <p>The ARN of the specific <code>Theme</code> resource whose override properties are configured in this structure.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>A list of <code>Theme</code> resource properties to generate variables for in the returned CloudFormation template.</p>
   * @public
   */
  Properties: AssetBundleExportJobThemePropertyToOverride[] | undefined;
}

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
 * <p>Controls how a specific <code>VPCConnection</code> resource is parameterized in the outputted CloudFormation template.</p>
 * @public
 */
export interface AssetBundleExportJobVPCConnectionOverrideProperties {
  /**
   * <p>The ARN of the specific <code>VPCConnection</code> resource whose override properties are configured in this structure.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>A list of <code>VPCConnection</code> resource properties to generate variables for in the returned CloudFormation template.</p>
   * @public
   */
  Properties: AssetBundleExportJobVPCConnectionPropertyToOverride[] | undefined;
}

/**
 * <p>An optional collection of CloudFormation property configurations that control how the export job is generated.</p>
 * @public
 */
export interface AssetBundleCloudFormationOverridePropertyConfiguration {
  /**
   * <p>An optional list of structures that control how resource IDs are parameterized in the returned CloudFormation template.</p>
   * @public
   */
  ResourceIdOverrideConfiguration?: AssetBundleExportJobResourceIdOverrideConfiguration | undefined;

  /**
   * <p>An optional list of structures that control how <code>VPCConnection</code> resources are parameterized in the returned CloudFormation template.</p>
   * @public
   */
  VPCConnections?: AssetBundleExportJobVPCConnectionOverrideProperties[] | undefined;

  /**
   * <p>An optional list of structures that control how <code>RefreshSchedule</code> resources are parameterized in the returned CloudFormation template.</p>
   * @public
   */
  RefreshSchedules?: AssetBundleExportJobRefreshScheduleOverrideProperties[] | undefined;

  /**
   * <p>An optional list of structures that control how <code>DataSource</code> resources are parameterized in the returned CloudFormation template.</p>
   * @public
   */
  DataSources?: AssetBundleExportJobDataSourceOverrideProperties[] | undefined;

  /**
   * <p>An optional list of structures that control how <code>DataSet</code> resources are parameterized in the returned CloudFormation template.</p>
   * @public
   */
  DataSets?: AssetBundleExportJobDataSetOverrideProperties[] | undefined;

  /**
   * <p>An optional list of structures that control how <code>Theme</code> resources are parameterized in the returned CloudFormation template.</p>
   * @public
   */
  Themes?: AssetBundleExportJobThemeOverrideProperties[] | undefined;

  /**
   * <p>An optional list of structures that control how <code>Analysis</code> resources are parameterized in the returned CloudFormation template.</p>
   * @public
   */
  Analyses?: AssetBundleExportJobAnalysisOverrideProperties[] | undefined;

  /**
   * <p>An optional list of structures that control how <code>Dashboard</code> resources are parameterized in the returned CloudFormation template.</p>
   * @public
   */
  Dashboards?: AssetBundleExportJobDashboardOverrideProperties[] | undefined;

  /**
   * <p>An optional list of structures that controls how <code>Folder</code> resources are parameterized in the returned CloudFormation template.</p>
   * @public
   */
  Folders?: AssetBundleExportJobFolderOverrideProperties[] | undefined;
}

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
 * <p>Describes an error that occurred during an Asset Bundle export job.</p>
 * @public
 */
export interface AssetBundleExportJobError {
  /**
   * <p>The ARN of the resource whose processing caused an error.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The specific error type of the error that occurred.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>A description of the error.</p>
   * @public
   */
  Message?: string | undefined;
}

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
 * <p>A summary of the export job that includes details of the job's configuration and its current status.</p>
 * @public
 */
export interface AssetBundleExportJobSummary {
  /**
   * <p>The current status of the export job.</p>
   * @public
   */
  JobStatus?: AssetBundleExportJobStatus | undefined;

  /**
   * <p>The ARN of the export job.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The time that the export job was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The ID of the export job.</p>
   * @public
   */
  AssetBundleExportJobId?: string | undefined;

  /**
   * <p>The flag that determines the inclusion of resource dependencies in the returned asset bundle.</p>
   * @public
   */
  IncludeAllDependencies?: boolean | undefined;

  /**
   * <p>The format for the export job.</p>
   * @public
   */
  ExportFormat?: AssetBundleExportFormat | undefined;

  /**
   * <p>The flag that determines the inclusion of permissions associated with each resource ARN.</p>
   * @public
   */
  IncludePermissions?: boolean | undefined;

  /**
   * <p>The flag that determines the inclusion of tags associated with each resource ARN.</p>
   * @public
   */
  IncludeTags?: boolean | undefined;
}

/**
 * <p>The option to relax the validation that is required to export each asset. When <code>StrictModeForAllResource</code> is set to <code>false</code>, validation is skipped for specific UI errors.</p>
 * @public
 */
export interface AssetBundleExportJobValidationStrategy {
  /**
   * <p>A Boolean value that indicates whether to export resources under strict or lenient mode.</p>
   * @public
   */
  StrictModeForAllResources?: boolean | undefined;
}

/**
 * <p>Describes a warning that occurred during an Asset Bundle export job.</p>
 * @public
 */
export interface AssetBundleExportJobWarning {
  /**
   * <p>The ARN of the resource whose processing caused a warning.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>A description of the warning.</p>
   * @public
   */
  Message?: string | undefined;
}

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
 * <p>The override parameters for a single analysis that is being imported.</p>
 * @public
 */
export interface AssetBundleImportJobAnalysisOverrideParameters {
  /**
   * <p>The ID of the analysis that you ant to apply overrides to.</p>
   * @public
   */
  AnalysisId: string | undefined;

  /**
   * <p>A new name for the analysis.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>A structure that contains the permissions for the resource that you want to override in an asset bundle import job.</p>
 * @public
 */
export interface AssetBundleResourcePermissions {
  /**
   * <p>A list of principals to grant permissions on.</p>
   * @public
   */
  Principals: string[] | undefined;

  /**
   * <p>A list of IAM actions to grant permissions on.</p>
   * @public
   */
  Actions: string[] | undefined;
}

/**
 * <p>An object that contains a list of permissions to be applied to a list of analysis IDs.</p>
 * @public
 */
export interface AssetBundleImportJobAnalysisOverridePermissions {
  /**
   * <p>A list of analysis IDs that you want to apply overrides to. You can use <code>*</code> to override all analyses in this asset bundle.</p>
   * @public
   */
  AnalysisIds: string[] | undefined;

  /**
   * <p>A list of permissions for the analyses that you want to apply overrides to.</p>
   * @public
   */
  Permissions: AssetBundleResourcePermissions | undefined;
}

/**
 * <p>The key or keys of the key-value pairs for the resource tag or tags assigned to the
 *             resource.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>Tag key.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>Tag value.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>An object that contains a list of tags to be assigned to a list of analysis IDs.</p>
 * @public
 */
export interface AssetBundleImportJobAnalysisOverrideTags {
  /**
   * <p>A list of analysis IDs that you want to apply overrides to. You can use <code>*</code> to override all analyses in this asset bundle.</p>
   * @public
   */
  AnalysisIds: string[] | undefined;

  /**
   * <p>A list of tags for the analyses that you want to apply overrides to.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * <p>The override parameters for a single dashboard that is being imported.</p>
 * @public
 */
export interface AssetBundleImportJobDashboardOverrideParameters {
  /**
   * <p>The ID of the dashboard that you want to apply overrides to.</p>
   * @public
   */
  DashboardId: string | undefined;

  /**
   * <p>A new name for the dashboard.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>A structure that contains the configuration of a shared link to an Amazon QuickSight dashboard.</p>
 * @public
 */
export interface AssetBundleResourceLinkSharingConfiguration {
  /**
   * <p>A list of link sharing permissions for the dashboards that you want to apply overrides to.</p>
   * @public
   */
  Permissions?: AssetBundleResourcePermissions | undefined;
}

/**
 * <p>An object that contains a list of permissions to be applied to a list of dashboard IDs.</p>
 * @public
 */
export interface AssetBundleImportJobDashboardOverridePermissions {
  /**
   * <p>A list of dashboard IDs that you want to apply overrides to. You can use <code>*</code> to override all dashboards in this asset bundle.</p>
   * @public
   */
  DashboardIds: string[] | undefined;

  /**
   * <p>A list of permissions for the dashboards that you want to apply overrides to.</p>
   * @public
   */
  Permissions?: AssetBundleResourcePermissions | undefined;

  /**
   * <p>A structure that contains the link sharing configurations that you want to apply overrides to.</p>
   * @public
   */
  LinkSharingConfiguration?: AssetBundleResourceLinkSharingConfiguration | undefined;
}

/**
 * <p>An object that contains a list of tags to be assigned to a list of dashboard IDs.</p>
 * @public
 */
export interface AssetBundleImportJobDashboardOverrideTags {
  /**
   * <p>A list of dashboard IDs that you want to apply overrides to. You can use <code>*</code> to override all dashboards in this asset bundle.</p>
   * @public
   */
  DashboardIds: string[] | undefined;

  /**
   * <p>A list of tags for the dashboards that you want to apply overrides to.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

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
 * <p>The configuration settings for the email alerts that are sent when a dataset refresh fails.</p>
 * @public
 */
export interface RefreshFailureEmailAlert {
  /**
   * <p>The status value that determines if email alerts are sent.</p>
   * @public
   */
  AlertStatus?: RefreshFailureAlertStatus | undefined;
}

/**
 * <p>The failure configuration of a dataset.</p>
 * @public
 */
export interface RefreshFailureConfiguration {
  /**
   * <p>The email alert configuration for a dataset refresh failure.</p>
   * @public
   */
  EmailAlert?: RefreshFailureEmailAlert | undefined;
}

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
 * <p>The lookback window setup of an incremental refresh configuration.</p>
 * @public
 */
export interface LookbackWindow {
  /**
   * <p>The name of the lookback window column.</p>
   * @public
   */
  ColumnName: string | undefined;

  /**
   * <p>The lookback window column size.</p>
   * @public
   */
  Size: number | undefined;

  /**
   * <p>The size unit that is used for the lookback window column. Valid values for this structure are <code>HOUR</code>, <code>DAY</code>, and <code>WEEK</code>.</p>
   * @public
   */
  SizeUnit: LookbackWindowSizeUnit | undefined;
}

/**
 * <p>The incremental refresh configuration for a dataset.</p>
 * @public
 */
export interface IncrementalRefresh {
  /**
   * <p>The lookback window setup for an incremental refresh configuration.</p>
   * @public
   */
  LookbackWindow: LookbackWindow | undefined;
}

/**
 * <p>The refresh configuration of a dataset.</p>
 * @public
 */
export interface RefreshConfiguration {
  /**
   * <p>The incremental refresh for the dataset.</p>
   * @public
   */
  IncrementalRefresh: IncrementalRefresh | undefined;
}

/**
 * <p>The refresh properties of a dataset.</p>
 * @public
 */
export interface DataSetRefreshProperties {
  /**
   * <p>The refresh configuration for a dataset.</p>
   * @public
   */
  RefreshConfiguration?: RefreshConfiguration | undefined;

  /**
   * <p>The failure configuration for a dataset.</p>
   * @public
   */
  FailureConfiguration?: RefreshFailureConfiguration | undefined;
}

/**
 * <p>The override parameters for a single dataset that is being imported.</p>
 * @public
 */
export interface AssetBundleImportJobDataSetOverrideParameters {
  /**
   * <p>The ID of the dataset to apply overrides to.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>A new name for the dataset.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The refresh properties of a dataset.</p>
   * @public
   */
  DataSetRefreshProperties?: DataSetRefreshProperties | undefined;
}

/**
 * <p>An object that contains a list of permissions to be applied to a list of dataset IDs.</p>
 * @public
 */
export interface AssetBundleImportJobDataSetOverridePermissions {
  /**
   * <p>A list of dataset IDs that you want to apply overrides to. You can use <code>*</code> to override all datasets in this asset bundle.</p>
   * @public
   */
  DataSetIds: string[] | undefined;

  /**
   * <p>A list of permissions for the datasets that you want to apply overrides to.</p>
   * @public
   */
  Permissions: AssetBundleResourcePermissions | undefined;
}

/**
 * <p>An object that contains a list of tags to be assigned to a list of dataset IDs.</p>
 * @public
 */
export interface AssetBundleImportJobDataSetOverrideTags {
  /**
   * <p>A list of dataset IDs that you want to apply overrides to. You can use <code>*</code> to override all datasets in this asset bundle.</p>
   * @public
   */
  DataSetIds: string[] | undefined;

  /**
   * <p>A list of tags for the datasets that you want to apply overrides to.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * <p>A username and password credential pair to use to import a data source resource.</p>
 * @public
 */
export interface AssetBundleImportJobDataSourceCredentialPair {
  /**
   * <p>The username for the data source connection.</p>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>The password for the data source connection.</p>
   * @public
   */
  Password: string | undefined;
}

/**
 * <p>The login credentials to use to import a data source resource.</p>
 * @public
 */
export interface AssetBundleImportJobDataSourceCredentials {
  /**
   * <p>A username and password credential pair to be used to create the imported data source. Keep this field blank if you are using a Secrets Manager secret to provide credentials.</p>
   * @public
   */
  CredentialPair?: AssetBundleImportJobDataSourceCredentialPair | undefined;

  /**
   * <p>The ARN of the Secrets Manager secret that's used to create the imported data source. Keep this field blank, unless you are using a secret in place of a credential pair.</p>
   * @public
   */
  SecretArn?: string | undefined;
}

/**
 * <p>Parameters for Amazon Athena.</p>
 * @public
 */
export interface AthenaParameters {
  /**
   * <p>The workgroup that Amazon Athena uses.</p>
   * @public
   */
  WorkGroup?: string | undefined;

  /**
   * <p>Use the <code>RoleArn</code> structure to override an account-wide role for a specific Athena data source. For example, say an account administrator has turned off all Athena access with an account-wide role. The administrator can then use <code>RoleArn</code> to bypass the account-wide role and allow Athena access for the single Athena data source that is specified in the structure, even if the account-wide role forbidding Athena access is still active.</p>
   * @public
   */
  RoleArn?: string | undefined;
}

/**
 * <p>Parameters for Amazon Aurora.</p>
 * @public
 */
export interface AuroraParameters {
  /**
   * <p>Host.</p>
   * @public
   */
  Host: string | undefined;

  /**
   * <p>Port.</p>
   * @public
   */
  Port: number | undefined;

  /**
   * <p>Database.</p>
   * @public
   */
  Database: string | undefined;
}

/**
 * <p>Parameters for Amazon Aurora PostgreSQL-Compatible Edition.</p>
 * @public
 */
export interface AuroraPostgreSqlParameters {
  /**
   * <p>The Amazon Aurora PostgreSQL-Compatible host to connect to.</p>
   * @public
   */
  Host: string | undefined;

  /**
   * <p>The port that Amazon Aurora PostgreSQL is listening on.</p>
   * @public
   */
  Port: number | undefined;

  /**
   * <p>The Amazon Aurora PostgreSQL database to connect to.</p>
   * @public
   */
  Database: string | undefined;
}

/**
 * <p>The parameters for IoT Analytics.</p>
 * @public
 */
export interface AwsIotAnalyticsParameters {
  /**
   * <p>Dataset name.</p>
   * @public
   */
  DataSetName: string | undefined;
}

/**
 * <p>The parameters that are required to connect to a Google BigQuery data source.</p>
 * @public
 */
export interface BigQueryParameters {
  /**
   * <p>The Google Cloud Platform project ID where your datasource was created.</p>
   * @public
   */
  ProjectId: string | undefined;

  /**
   * <p>The storage location where you create a Google BigQuery data source.</p>
   * @public
   */
  DataSetRegion?: string | undefined;
}

/**
 * <p>The parameters that are required to connect to a Databricks data source.</p>
 * @public
 */
export interface DatabricksParameters {
  /**
   * <p>The host name of the Databricks data source.</p>
   * @public
   */
  Host: string | undefined;

  /**
   * <p>The port for the Databricks data source.</p>
   * @public
   */
  Port: number | undefined;

  /**
   * <p>The HTTP path of the Databricks data source.</p>
   * @public
   */
  SqlEndpointPath: string | undefined;
}

/**
 * <p>The required parameters for connecting to an Exasol data source.</p>
 * @public
 */
export interface ExasolParameters {
  /**
   * <p>The hostname or IP address of the Exasol data source.</p>
   * @public
   */
  Host: string | undefined;

  /**
   * <p>The port for the Exasol data source.</p>
   * @public
   */
  Port: number | undefined;
}

/**
 * <p>The parameters for Jira.</p>
 * @public
 */
export interface JiraParameters {
  /**
   * <p>The base URL of the Jira site.</p>
   * @public
   */
  SiteBaseUrl: string | undefined;
}

/**
 * <p>The parameters for MariaDB.</p>
 * @public
 */
export interface MariaDbParameters {
  /**
   * <p>Host.</p>
   * @public
   */
  Host: string | undefined;

  /**
   * <p>Port.</p>
   * @public
   */
  Port: number | undefined;

  /**
   * <p>Database.</p>
   * @public
   */
  Database: string | undefined;
}

/**
 * <p>The parameters for MySQL.</p>
 * @public
 */
export interface MySqlParameters {
  /**
   * <p>Host.</p>
   * @public
   */
  Host: string | undefined;

  /**
   * <p>Port.</p>
   * @public
   */
  Port: number | undefined;

  /**
   * <p>Database.</p>
   * @public
   */
  Database: string | undefined;
}

/**
 * <p>The parameters for Oracle.</p>
 * @public
 */
export interface OracleParameters {
  /**
   * <p>An Oracle host.</p>
   * @public
   */
  Host: string | undefined;

  /**
   * <p>The port.</p>
   * @public
   */
  Port: number | undefined;

  /**
   * <p>The database.</p>
   * @public
   */
  Database: string | undefined;

  /**
   * <p>A Boolean value that indicates whether the <code>Database</code> uses a service name or an SID. If this value is left blank, the default value is <code>SID</code>. If this value is set to <code>false</code>, the value is <code>SID</code>.</p>
   * @public
   */
  UseServiceName?: boolean | undefined;
}

/**
 * <p>The parameters for PostgreSQL.</p>
 * @public
 */
export interface PostgreSqlParameters {
  /**
   * <p>Host.</p>
   * @public
   */
  Host: string | undefined;

  /**
   * <p>Port.</p>
   * @public
   */
  Port: number | undefined;

  /**
   * <p>Database.</p>
   * @public
   */
  Database: string | undefined;
}

/**
 * <p>The parameters for Presto.</p>
 * @public
 */
export interface PrestoParameters {
  /**
   * <p>Host.</p>
   * @public
   */
  Host: string | undefined;

  /**
   * <p>Port.</p>
   * @public
   */
  Port: number | undefined;

  /**
   * <p>Catalog.</p>
   * @public
   */
  Catalog: string | undefined;
}

/**
 * <p>The parameters for Amazon RDS.</p>
 * @public
 */
export interface RdsParameters {
  /**
   * <p>Instance ID.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>Database.</p>
   * @public
   */
  Database: string | undefined;
}

/**
 * <p>A structure that grants Amazon QuickSight access to your cluster and make a call to the <code>redshift:GetClusterCredentials</code> API. For more information on the <code>redshift:GetClusterCredentials</code> API, see <a href="https://docs.aws.amazon.com/redshift/latest/APIReference/API_GetClusterCredentials.html">
 *                <code>GetClusterCredentials</code>
 *             </a>.</p>
 * @public
 */
export interface RedshiftIAMParameters {
  /**
   * <p>Use the <code>RoleArn</code> structure to allow Amazon QuickSight to call <code>redshift:GetClusterCredentials</code> on your cluster. The calling principal must have <code>iam:PassRole</code> access to pass the role to Amazon QuickSight. The role's trust policy must allow the Amazon QuickSight service principal to assume the role.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The user whose permissions and group memberships will be used by Amazon QuickSight to access the cluster. If this user already exists in your database, Amazon QuickSight is granted the same permissions that the user has. If the user doesn't exist, set the value of <code>AutoCreateDatabaseUser</code> to <code>True</code> to create a new user with PUBLIC permissions.</p>
   * @public
   */
  DatabaseUser?: string | undefined;

  /**
   * <p>A list of groups whose permissions will be granted to Amazon QuickSight to access the cluster. These permissions are combined with the permissions granted to Amazon QuickSight by the <code>DatabaseUser</code>. If you choose to include this parameter, the <code>RoleArn</code> must grant access to <code>redshift:JoinGroup</code>.</p>
   * @public
   */
  DatabaseGroups?: string[] | undefined;

  /**
   * <p>Automatically creates a database user. If your database doesn't have a <code>DatabaseUser</code>, set this parameter to <code>True</code>. If there is no <code>DatabaseUser</code>, Amazon QuickSight can't connect to your cluster. The <code>RoleArn</code> that you use for this operation must grant access to <code>redshift:CreateClusterUser</code> to successfully create the user.</p>
   * @public
   */
  AutoCreateDatabaseUser?: boolean | undefined;
}

/**
 * <p>The parameters for an IAM Identity Center configuration.</p>
 * @public
 */
export interface IdentityCenterConfiguration {
  /**
   * <p>A Boolean option that controls whether Trusted Identity Propagation should be used.</p>
   * @public
   */
  EnableIdentityPropagation?: boolean | undefined;
}

/**
 * <p>The parameters for Amazon Redshift. The <code>ClusterId</code> field can be blank if
 *             <code>Host</code> and <code>Port</code> are both set. The <code>Host</code> and <code>Port</code> fields can be blank if the <code>ClusterId</code> field is set.</p>
 * @public
 */
export interface RedshiftParameters {
  /**
   * <p>Host. This field can be blank if <code>ClusterId</code> is provided.</p>
   * @public
   */
  Host?: string | undefined;

  /**
   * <p>Port. This field can be blank if the <code>ClusterId</code> is provided.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>Database.</p>
   * @public
   */
  Database: string | undefined;

  /**
   * <p>Cluster ID. This field can be blank if the <code>Host</code> and <code>Port</code> are
   *             provided.</p>
   * @public
   */
  ClusterId?: string | undefined;

  /**
   * <p>An optional parameter that uses IAM authentication to grant Amazon QuickSight access to your cluster. This parameter can be used instead of <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DataSourceCredentials.html">DataSourceCredentials</a>.</p>
   * @public
   */
  IAMParameters?: RedshiftIAMParameters | undefined;

  /**
   * <p>An optional parameter that configures IAM Identity Center authentication to grant Amazon QuickSight access to your cluster.</p>
   *          <p>This parameter can only be specified if your Amazon QuickSight account is configured with IAM Identity Center.</p>
   * @public
   */
  IdentityCenterConfiguration?: IdentityCenterConfiguration | undefined;
}

/**
 * <p>Amazon S3 manifest file location.</p>
 * @public
 */
export interface ManifestFileLocation {
  /**
   * <p>Amazon S3 bucket.</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>Amazon S3 key that identifies an object.</p>
   * @public
   */
  Key: string | undefined;
}

/**
 * <p>The parameters for S3.</p>
 * @public
 */
export interface S3Parameters {
  /**
   * <p>Location of the Amazon S3 manifest file. This is NULL if the manifest file was
   *             uploaded into Amazon QuickSight.</p>
   * @public
   */
  ManifestFileLocation: ManifestFileLocation | undefined;

  /**
   * <p>Use the <code>RoleArn</code> structure to override an account-wide role for a specific S3 data source. For example, say an account administrator has turned off all S3 access with an account-wide role. The administrator can then use <code>RoleArn</code> to bypass the account-wide role and allow S3 access for the single S3 data source that is specified in the structure, even if the account-wide role forbidding S3 access is still active.</p>
   * @public
   */
  RoleArn?: string | undefined;
}

/**
 * <p>The parameters for ServiceNow.</p>
 * @public
 */
export interface ServiceNowParameters {
  /**
   * <p>URL of the base site.</p>
   * @public
   */
  SiteBaseUrl: string | undefined;
}

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
 * <p>VPC connection properties.</p>
 * @public
 */
export interface VpcConnectionProperties {
  /**
   * <p>The Amazon Resource Name (ARN) for the VPC connection.</p>
   * @public
   */
  VpcConnectionArn: string | undefined;
}

/**
 * <p>An object that contains information needed to create a data source connection that uses OAuth client credentials. This option is available for data source connections that are made with Snowflake and Starburst.</p>
 * @public
 */
export interface OAuthParameters {
  /**
   * <p>The token endpoint URL of the identity provider.</p>
   * @public
   */
  TokenProviderUrl: string | undefined;

  /**
   * <p>The OAuth scope.</p>
   * @public
   */
  OAuthScope?: string | undefined;

  /**
   * <p>VPC connection properties.</p>
   * @public
   */
  IdentityProviderVpcConnectionProperties?: VpcConnectionProperties | undefined;

  /**
   * <p>The resource uri of the identity provider.</p>
   * @public
   */
  IdentityProviderResourceUri?: string | undefined;
}

/**
 * <p>The parameters for Snowflake.</p>
 * @public
 */
export interface SnowflakeParameters {
  /**
   * <p>Host.</p>
   * @public
   */
  Host: string | undefined;

  /**
   * <p>Database.</p>
   * @public
   */
  Database: string | undefined;

  /**
   * <p>Warehouse.</p>
   * @public
   */
  Warehouse: string | undefined;

  /**
   * <p>The authentication type that you want to use for your connection. This parameter accepts OAuth and non-OAuth authentication types.</p>
   * @public
   */
  AuthenticationType?: AuthenticationType | undefined;

  /**
   * <p>The database access control role.</p>
   * @public
   */
  DatabaseAccessControlRole?: string | undefined;

  /**
   * <p>An object that contains information needed to create a data source connection between an Amazon QuickSight account and Snowflake.</p>
   * @public
   */
  OAuthParameters?: OAuthParameters | undefined;
}

/**
 * <p>The parameters for Spark.</p>
 * @public
 */
export interface SparkParameters {
  /**
   * <p>Host.</p>
   * @public
   */
  Host: string | undefined;

  /**
   * <p>Port.</p>
   * @public
   */
  Port: number | undefined;
}

/**
 * <p>The parameters for SQL Server.</p>
 * @public
 */
export interface SqlServerParameters {
  /**
   * <p>Host.</p>
   * @public
   */
  Host: string | undefined;

  /**
   * <p>Port.</p>
   * @public
   */
  Port: number | undefined;

  /**
   * <p>Database.</p>
   * @public
   */
  Database: string | undefined;
}

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
 * <p>The parameters that are required to connect to a Starburst data source.</p>
 * @public
 */
export interface StarburstParameters {
  /**
   * <p>The host name of the Starburst data source.</p>
   * @public
   */
  Host: string | undefined;

  /**
   * <p>The port for the Starburst data source.</p>
   * @public
   */
  Port: number | undefined;

  /**
   * <p>The catalog name for the Starburst data source.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The product type for the Starburst data source.</p>
   * @public
   */
  ProductType?: StarburstProductType | undefined;

  /**
   * <p>The database access control role.</p>
   * @public
   */
  DatabaseAccessControlRole?: string | undefined;

  /**
   * <p>The authentication type that you want to use for your connection. This parameter accepts OAuth and non-OAuth authentication types.</p>
   * @public
   */
  AuthenticationType?: AuthenticationType | undefined;

  /**
   * <p>An object that contains information needed to create a data source connection between an Amazon QuickSight account and Starburst.</p>
   * @public
   */
  OAuthParameters?: OAuthParameters | undefined;
}

/**
 * <p>The parameters for Teradata.</p>
 * @public
 */
export interface TeradataParameters {
  /**
   * <p>Host.</p>
   * @public
   */
  Host: string | undefined;

  /**
   * <p>Port.</p>
   * @public
   */
  Port: number | undefined;

  /**
   * <p>Database.</p>
   * @public
   */
  Database: string | undefined;
}

/**
 * <p>The parameters that are required to connect to a Trino data source.</p>
 * @public
 */
export interface TrinoParameters {
  /**
   * <p>The host name of the Trino data source.</p>
   * @public
   */
  Host: string | undefined;

  /**
   * <p>The port for the Trino data source.</p>
   * @public
   */
  Port: number | undefined;

  /**
   * <p>The catalog name for the Trino data source.</p>
   * @public
   */
  Catalog: string | undefined;
}

/**
 * <p>The parameters for Twitter.</p>
 * @public
 */
export interface TwitterParameters {
  /**
   * <p>Twitter query string.</p>
   * @public
   */
  Query: string | undefined;

  /**
   * <p>Maximum number of rows to query Twitter.</p>
   * @public
   */
  MaxRows: number | undefined;
}

/**
 * <p>The parameters that Amazon QuickSight uses to connect to your underlying data source.
 *             This is a variant type structure. For this structure to be valid, only one of the
 *             attributes can be non-null.</p>
 * @public
 */
export type DataSourceParameters =
  | DataSourceParameters.AmazonElasticsearchParametersMember
  | DataSourceParameters.AmazonOpenSearchParametersMember
  | DataSourceParameters.AthenaParametersMember
  | DataSourceParameters.AuroraParametersMember
  | DataSourceParameters.AuroraPostgreSqlParametersMember
  | DataSourceParameters.AwsIotAnalyticsParametersMember
  | DataSourceParameters.BigQueryParametersMember
  | DataSourceParameters.DatabricksParametersMember
  | DataSourceParameters.ExasolParametersMember
  | DataSourceParameters.JiraParametersMember
  | DataSourceParameters.MariaDbParametersMember
  | DataSourceParameters.MySqlParametersMember
  | DataSourceParameters.OracleParametersMember
  | DataSourceParameters.PostgreSqlParametersMember
  | DataSourceParameters.PrestoParametersMember
  | DataSourceParameters.RdsParametersMember
  | DataSourceParameters.RedshiftParametersMember
  | DataSourceParameters.S3ParametersMember
  | DataSourceParameters.ServiceNowParametersMember
  | DataSourceParameters.SnowflakeParametersMember
  | DataSourceParameters.SparkParametersMember
  | DataSourceParameters.SqlServerParametersMember
  | DataSourceParameters.StarburstParametersMember
  | DataSourceParameters.TeradataParametersMember
  | DataSourceParameters.TrinoParametersMember
  | DataSourceParameters.TwitterParametersMember
  | DataSourceParameters.$UnknownMember;

/**
 * @public
 */
export namespace DataSourceParameters {
  /**
   * <p>The parameters for OpenSearch.</p>
   * @public
   */
  export interface AmazonElasticsearchParametersMember {
    AmazonElasticsearchParameters: AmazonElasticsearchParameters;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    StarburstParameters?: never;
    TrinoParameters?: never;
    BigQueryParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters for Amazon Athena.</p>
   * @public
   */
  export interface AthenaParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters: AthenaParameters;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    StarburstParameters?: never;
    TrinoParameters?: never;
    BigQueryParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters for Amazon Aurora MySQL.</p>
   * @public
   */
  export interface AuroraParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters: AuroraParameters;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    StarburstParameters?: never;
    TrinoParameters?: never;
    BigQueryParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters for Amazon Aurora.</p>
   * @public
   */
  export interface AuroraPostgreSqlParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters: AuroraPostgreSqlParameters;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    StarburstParameters?: never;
    TrinoParameters?: never;
    BigQueryParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters for IoT Analytics.</p>
   * @public
   */
  export interface AwsIotAnalyticsParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters: AwsIotAnalyticsParameters;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    StarburstParameters?: never;
    TrinoParameters?: never;
    BigQueryParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters for Jira.</p>
   * @public
   */
  export interface JiraParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters: JiraParameters;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    StarburstParameters?: never;
    TrinoParameters?: never;
    BigQueryParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters for MariaDB.</p>
   * @public
   */
  export interface MariaDbParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters: MariaDbParameters;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    StarburstParameters?: never;
    TrinoParameters?: never;
    BigQueryParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters for MySQL.</p>
   * @public
   */
  export interface MySqlParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters: MySqlParameters;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    StarburstParameters?: never;
    TrinoParameters?: never;
    BigQueryParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters for Oracle.</p>
   * @public
   */
  export interface OracleParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters: OracleParameters;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    StarburstParameters?: never;
    TrinoParameters?: never;
    BigQueryParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters for PostgreSQL.</p>
   * @public
   */
  export interface PostgreSqlParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters: PostgreSqlParameters;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    StarburstParameters?: never;
    TrinoParameters?: never;
    BigQueryParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters for Presto.</p>
   * @public
   */
  export interface PrestoParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters: PrestoParameters;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    StarburstParameters?: never;
    TrinoParameters?: never;
    BigQueryParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters for Amazon RDS.</p>
   * @public
   */
  export interface RdsParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters: RdsParameters;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    StarburstParameters?: never;
    TrinoParameters?: never;
    BigQueryParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters for Amazon Redshift.</p>
   * @public
   */
  export interface RedshiftParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters: RedshiftParameters;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    StarburstParameters?: never;
    TrinoParameters?: never;
    BigQueryParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters for S3.</p>
   * @public
   */
  export interface S3ParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters: S3Parameters;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    StarburstParameters?: never;
    TrinoParameters?: never;
    BigQueryParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters for ServiceNow.</p>
   * @public
   */
  export interface ServiceNowParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters: ServiceNowParameters;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    StarburstParameters?: never;
    TrinoParameters?: never;
    BigQueryParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters for Snowflake.</p>
   * @public
   */
  export interface SnowflakeParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters: SnowflakeParameters;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    StarburstParameters?: never;
    TrinoParameters?: never;
    BigQueryParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters for Spark.</p>
   * @public
   */
  export interface SparkParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters: SparkParameters;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    StarburstParameters?: never;
    TrinoParameters?: never;
    BigQueryParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters for SQL Server.</p>
   * @public
   */
  export interface SqlServerParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters: SqlServerParameters;
    TeradataParameters?: never;
    TwitterParameters?: never;
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    StarburstParameters?: never;
    TrinoParameters?: never;
    BigQueryParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters for Teradata.</p>
   * @public
   */
  export interface TeradataParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters: TeradataParameters;
    TwitterParameters?: never;
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    StarburstParameters?: never;
    TrinoParameters?: never;
    BigQueryParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters for Twitter.</p>
   * @public
   */
  export interface TwitterParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters: TwitterParameters;
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    StarburstParameters?: never;
    TrinoParameters?: never;
    BigQueryParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters for OpenSearch.</p>
   * @public
   */
  export interface AmazonOpenSearchParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    AmazonOpenSearchParameters: AmazonOpenSearchParameters;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    StarburstParameters?: never;
    TrinoParameters?: never;
    BigQueryParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters for Exasol.</p>
   * @public
   */
  export interface ExasolParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    AmazonOpenSearchParameters?: never;
    ExasolParameters: ExasolParameters;
    DatabricksParameters?: never;
    StarburstParameters?: never;
    TrinoParameters?: never;
    BigQueryParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters that are required to connect to a Databricks data source.</p>
   * @public
   */
  export interface DatabricksParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters: DatabricksParameters;
    StarburstParameters?: never;
    TrinoParameters?: never;
    BigQueryParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters that are required to connect to a Starburst data source.</p>
   * @public
   */
  export interface StarburstParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    StarburstParameters: StarburstParameters;
    TrinoParameters?: never;
    BigQueryParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters that are required to connect to a Trino data source.</p>
   * @public
   */
  export interface TrinoParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    StarburstParameters?: never;
    TrinoParameters: TrinoParameters;
    BigQueryParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters that are required to connect to a Google BigQuery data source.</p>
   * @public
   */
  export interface BigQueryParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    StarburstParameters?: never;
    TrinoParameters?: never;
    BigQueryParameters: BigQueryParameters;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    StarburstParameters?: never;
    TrinoParameters?: never;
    BigQueryParameters?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    AmazonElasticsearchParameters: (value: AmazonElasticsearchParameters) => T;
    AthenaParameters: (value: AthenaParameters) => T;
    AuroraParameters: (value: AuroraParameters) => T;
    AuroraPostgreSqlParameters: (value: AuroraPostgreSqlParameters) => T;
    AwsIotAnalyticsParameters: (value: AwsIotAnalyticsParameters) => T;
    JiraParameters: (value: JiraParameters) => T;
    MariaDbParameters: (value: MariaDbParameters) => T;
    MySqlParameters: (value: MySqlParameters) => T;
    OracleParameters: (value: OracleParameters) => T;
    PostgreSqlParameters: (value: PostgreSqlParameters) => T;
    PrestoParameters: (value: PrestoParameters) => T;
    RdsParameters: (value: RdsParameters) => T;
    RedshiftParameters: (value: RedshiftParameters) => T;
    S3Parameters: (value: S3Parameters) => T;
    ServiceNowParameters: (value: ServiceNowParameters) => T;
    SnowflakeParameters: (value: SnowflakeParameters) => T;
    SparkParameters: (value: SparkParameters) => T;
    SqlServerParameters: (value: SqlServerParameters) => T;
    TeradataParameters: (value: TeradataParameters) => T;
    TwitterParameters: (value: TwitterParameters) => T;
    AmazonOpenSearchParameters: (value: AmazonOpenSearchParameters) => T;
    ExasolParameters: (value: ExasolParameters) => T;
    DatabricksParameters: (value: DatabricksParameters) => T;
    StarburstParameters: (value: StarburstParameters) => T;
    TrinoParameters: (value: TrinoParameters) => T;
    BigQueryParameters: (value: BigQueryParameters) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: DataSourceParameters, visitor: Visitor<T>): T => {
    if (value.AmazonElasticsearchParameters !== undefined)
      return visitor.AmazonElasticsearchParameters(value.AmazonElasticsearchParameters);
    if (value.AthenaParameters !== undefined) return visitor.AthenaParameters(value.AthenaParameters);
    if (value.AuroraParameters !== undefined) return visitor.AuroraParameters(value.AuroraParameters);
    if (value.AuroraPostgreSqlParameters !== undefined)
      return visitor.AuroraPostgreSqlParameters(value.AuroraPostgreSqlParameters);
    if (value.AwsIotAnalyticsParameters !== undefined)
      return visitor.AwsIotAnalyticsParameters(value.AwsIotAnalyticsParameters);
    if (value.JiraParameters !== undefined) return visitor.JiraParameters(value.JiraParameters);
    if (value.MariaDbParameters !== undefined) return visitor.MariaDbParameters(value.MariaDbParameters);
    if (value.MySqlParameters !== undefined) return visitor.MySqlParameters(value.MySqlParameters);
    if (value.OracleParameters !== undefined) return visitor.OracleParameters(value.OracleParameters);
    if (value.PostgreSqlParameters !== undefined) return visitor.PostgreSqlParameters(value.PostgreSqlParameters);
    if (value.PrestoParameters !== undefined) return visitor.PrestoParameters(value.PrestoParameters);
    if (value.RdsParameters !== undefined) return visitor.RdsParameters(value.RdsParameters);
    if (value.RedshiftParameters !== undefined) return visitor.RedshiftParameters(value.RedshiftParameters);
    if (value.S3Parameters !== undefined) return visitor.S3Parameters(value.S3Parameters);
    if (value.ServiceNowParameters !== undefined) return visitor.ServiceNowParameters(value.ServiceNowParameters);
    if (value.SnowflakeParameters !== undefined) return visitor.SnowflakeParameters(value.SnowflakeParameters);
    if (value.SparkParameters !== undefined) return visitor.SparkParameters(value.SparkParameters);
    if (value.SqlServerParameters !== undefined) return visitor.SqlServerParameters(value.SqlServerParameters);
    if (value.TeradataParameters !== undefined) return visitor.TeradataParameters(value.TeradataParameters);
    if (value.TwitterParameters !== undefined) return visitor.TwitterParameters(value.TwitterParameters);
    if (value.AmazonOpenSearchParameters !== undefined)
      return visitor.AmazonOpenSearchParameters(value.AmazonOpenSearchParameters);
    if (value.ExasolParameters !== undefined) return visitor.ExasolParameters(value.ExasolParameters);
    if (value.DatabricksParameters !== undefined) return visitor.DatabricksParameters(value.DatabricksParameters);
    if (value.StarburstParameters !== undefined) return visitor.StarburstParameters(value.StarburstParameters);
    if (value.TrinoParameters !== undefined) return visitor.TrinoParameters(value.TrinoParameters);
    if (value.BigQueryParameters !== undefined) return visitor.BigQueryParameters(value.BigQueryParameters);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Secure Socket Layer (SSL) properties that apply when Amazon QuickSight connects to your
 *             underlying data source.</p>
 * @public
 */
export interface SslProperties {
  /**
   * <p>A Boolean option to control whether SSL should be disabled.</p>
   * @public
   */
  DisableSsl?: boolean | undefined;
}

/**
 * <p>The override parameters for a single data source that is being imported.</p>
 * @public
 */
export interface AssetBundleImportJobDataSourceOverrideParameters {
  /**
   * <p>The ID of the data source to apply overrides to.</p>
   * @public
   */
  DataSourceId: string | undefined;

  /**
   * <p>A new name for the data source.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The parameters that Amazon QuickSight uses to connect to your underlying data source.
   *             This is a variant type structure. For this structure to be valid, only one of the
   *             attributes can be non-null.</p>
   * @public
   */
  DataSourceParameters?: DataSourceParameters | undefined;

  /**
   * <p>VPC connection properties.</p>
   * @public
   */
  VpcConnectionProperties?: VpcConnectionProperties | undefined;

  /**
   * <p>Secure Socket Layer (SSL) properties that apply when Amazon QuickSight connects to your
   *             underlying data source.</p>
   * @public
   */
  SslProperties?: SslProperties | undefined;

  /**
   * <p>An optional structure that provides the credentials to be used to create the imported data source.</p>
   * @public
   */
  Credentials?: AssetBundleImportJobDataSourceCredentials | undefined;
}

/**
 * <p>An object that contains a list of permissions to be applied to a list of data source IDs.</p>
 * @public
 */
export interface AssetBundleImportJobDataSourceOverridePermissions {
  /**
   * <p>A list of data source IDs that you want to apply overrides to. You can use <code>*</code> to override all data sources in this asset bundle.</p>
   * @public
   */
  DataSourceIds: string[] | undefined;

  /**
   * <p>A list of permissions for the data source that you want to apply overrides to.</p>
   * @public
   */
  Permissions: AssetBundleResourcePermissions | undefined;
}

/**
 * <p>An object that contains a list of tags to be assigned to a list of data source IDs.</p>
 * @public
 */
export interface AssetBundleImportJobDataSourceOverrideTags {
  /**
   * <p>A list of data source IDs that you want to apply overrides to. You can use <code>*</code> to override all data sources in this asset bundle.</p>
   * @public
   */
  DataSourceIds: string[] | undefined;

  /**
   * <p>A list of tags for the data source that you want to apply overrides to.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * <p>Describes an error that occurred within an Asset Bundle import execution.</p>
 * @public
 */
export interface AssetBundleImportJobError {
  /**
   * <p>The ARN of the resource whose processing caused an error.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The specific error type or the error that occurred.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>A description of the error.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>The override parameters for a single folder that is being imported.</p>
 * @public
 */
export interface AssetBundleImportJobFolderOverrideParameters {
  /**
   * <p>The ID of the folder that you want to apply overrides to.</p>
   * @public
   */
  FolderId: string | undefined;

  /**
   * <p>A new name for the folder.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A new parent folder arn. This change can only be applied if the import creates a brand new folder. Existing folders cannot be moved.</p>
   * @public
   */
  ParentFolderArn?: string | undefined;
}

/**
 * <p>An object that contains a list of permissions to be applied to a list of folder IDs.</p>
 * @public
 */
export interface AssetBundleImportJobFolderOverridePermissions {
  /**
   * <p>A list of folder IDs that you want to apply overrides to. You can use <code>*</code> to override all folders in this asset bundle.</p>
   * @public
   */
  FolderIds: string[] | undefined;

  /**
   * <p>A structure that contains the permissions for the resource that you want to override in an asset bundle import job.</p>
   * @public
   */
  Permissions?: AssetBundleResourcePermissions | undefined;
}

/**
 * <p>An object that contains a list of tags to be assigned to a list of folder IDs.</p>
 * @public
 */
export interface AssetBundleImportJobFolderOverrideTags {
  /**
   * <p>A list of folder IDs that you want to apply overrides to. You can use <code>*</code> to override all folders in this asset bundle.</p>
   * @public
   */
  FolderIds: string[] | undefined;

  /**
   * <p>A list of tags for the folders that you want to apply overrides to.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * <p>A list of overrides for a specific <code>RefreshsSchedule</code> resource that is present in the asset bundle that is imported.</p>
 * @public
 */
export interface AssetBundleImportJobRefreshScheduleOverrideParameters {
  /**
   * <p>A partial identifier for the specific <code>RefreshSchedule</code> resource that is being overridden. This structure is used together with the <code>ScheduleID</code> structure.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>A partial identifier for the specific <code>RefreshSchedule</code> resource being overridden. This structure is used together with the <code>DataSetId</code> structure.</p>
   * @public
   */
  ScheduleId: string | undefined;

  /**
   * <p>An override for the <code>StartAfterDateTime</code> of a <code>RefreshSchedule</code>. Make
   *          sure that the <code>StartAfterDateTime</code> is set to a time that takes
   *          place in the future.</p>
   * @public
   */
  StartAfterDateTime?: Date | undefined;
}

/**
 * <p>An optional structure that configures resource ID overrides for the import job.</p>
 * @public
 */
export interface AssetBundleImportJobResourceIdOverrideConfiguration {
  /**
   * <p>An option to request a CloudFormation variable for a prefix to be prepended to each resource's ID before import. The prefix is only added to the asset IDs and does not change the name of the asset.</p>
   * @public
   */
  PrefixForAllResources?: string | undefined;
}

/**
 * <p>The override parameters for a single theme that is imported.</p>
 * @public
 */
export interface AssetBundleImportJobThemeOverrideParameters {
  /**
   * <p>The ID of the theme to apply overrides to.</p>
   * @public
   */
  ThemeId: string | undefined;

  /**
   * <p>A new name for the theme.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>The override parameters for a single VPC connection that is imported.</p>
 * @public
 */
export interface AssetBundleImportJobVPCConnectionOverrideParameters {
  /**
   * <p>The ID of the VPC Connection to apply overrides to.</p>
   * @public
   */
  VPCConnectionId: string | undefined;

  /**
   * <p>A new name for the VPC connection.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A list of new subnet IDs for the VPC connection you are importing. This field is
   *          required if you are importing the VPC connection from another Amazon Web Services account or Region.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * <p>A new security group ID for the VPC connection you are importing. This field is required
   *          if you are importing the VPC connection from another Amazon Web Services account or Region.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>An optional override of DNS resolvers to be used by the VPC connection.</p>
   * @public
   */
  DnsResolvers?: string[] | undefined;

  /**
   * <p>An optional override of the role ARN to be used by the VPC connection.</p>
   * @public
   */
  RoleArn?: string | undefined;
}

/**
 * <p>A list of overrides that modify the asset bundle resource configuration before the resource is imported.</p>
 * @public
 */
export interface AssetBundleImportJobOverrideParameters {
  /**
   * <p>An optional structure that configures resource ID overrides to be applied within the import job.</p>
   * @public
   */
  ResourceIdOverrideConfiguration?: AssetBundleImportJobResourceIdOverrideConfiguration | undefined;

  /**
   * <p>A list of overrides for any <code>VPCConnection</code> resources that are present in the asset bundle that is imported.</p>
   * @public
   */
  VPCConnections?: AssetBundleImportJobVPCConnectionOverrideParameters[] | undefined;

  /**
   * <p>A list of overrides for any <code>RefreshSchedule</code> resources that are present in the asset bundle that is imported.</p>
   * @public
   */
  RefreshSchedules?: AssetBundleImportJobRefreshScheduleOverrideParameters[] | undefined;

  /**
   * <p> A list of overrides for any <code>DataSource</code> resources that are present in the asset bundle that is imported.</p>
   * @public
   */
  DataSources?: AssetBundleImportJobDataSourceOverrideParameters[] | undefined;

  /**
   * <p>A list of overrides for any <code>DataSet</code> resources that are present in the asset bundle that is imported.</p>
   * @public
   */
  DataSets?: AssetBundleImportJobDataSetOverrideParameters[] | undefined;

  /**
   * <p>A list of overrides for any <code>Theme</code> resources that are present in the asset bundle that is imported.</p>
   * @public
   */
  Themes?: AssetBundleImportJobThemeOverrideParameters[] | undefined;

  /**
   * <p>A list of overrides for any <code>Analysis</code> resources that are present in the asset bundle that is imported.</p>
   * @public
   */
  Analyses?: AssetBundleImportJobAnalysisOverrideParameters[] | undefined;

  /**
   * <p>A list of overrides for any <code>Dashboard</code> resources that are present in the asset bundle that is imported.</p>
   * @public
   */
  Dashboards?: AssetBundleImportJobDashboardOverrideParameters[] | undefined;

  /**
   * <p>A list of overrides for any <code>Folder</code> resources that are present in the asset bundle that is imported.</p>
   * @public
   */
  Folders?: AssetBundleImportJobFolderOverrideParameters[] | undefined;
}

/**
 * <p>An object that contains a list of permissions to be applied to a list of theme IDs.</p>
 * @public
 */
export interface AssetBundleImportJobThemeOverridePermissions {
  /**
   * <p>A list of theme IDs that you want to apply overrides to. You can use <code>*</code> to override all themes in this asset bundle.</p>
   * @public
   */
  ThemeIds: string[] | undefined;

  /**
   * <p>A list of permissions for the themes that you want to apply overrides to.</p>
   * @public
   */
  Permissions: AssetBundleResourcePermissions | undefined;
}

/**
 * <p>A structure that contains the override permission configurations that modify the permissions for specified resources before the resource is imported.</p>
 * @public
 */
export interface AssetBundleImportJobOverridePermissions {
  /**
   * <p>A list of permissions overrides for any <code>DataSource</code> resources that are present in the asset bundle that is imported.</p>
   * @public
   */
  DataSources?: AssetBundleImportJobDataSourceOverridePermissions[] | undefined;

  /**
   * <p>A list of permissions overrides for any <code>DataSet</code> resources that are present in the asset bundle that is imported.</p>
   * @public
   */
  DataSets?: AssetBundleImportJobDataSetOverridePermissions[] | undefined;

  /**
   * <p>A list of permissions overrides for any <code>Theme</code> resources that are present in the asset bundle that is imported.</p>
   * @public
   */
  Themes?: AssetBundleImportJobThemeOverridePermissions[] | undefined;

  /**
   * <p>A list of permissions overrides for any <code>Analysis</code> resources that are present in the asset bundle that is imported.</p>
   * @public
   */
  Analyses?: AssetBundleImportJobAnalysisOverridePermissions[] | undefined;

  /**
   * <p>A list of permissions overrides for any <code>Dashboard</code> resources that are present in the asset bundle that is imported.</p>
   * @public
   */
  Dashboards?: AssetBundleImportJobDashboardOverridePermissions[] | undefined;

  /**
   * <p>A list of permissions for the folders that you want to apply overrides to.</p>
   * @public
   */
  Folders?: AssetBundleImportJobFolderOverridePermissions[] | undefined;
}

/**
 * <p>An object that contains a list of tags to be assigned to a list of theme IDs.</p>
 * @public
 */
export interface AssetBundleImportJobThemeOverrideTags {
  /**
   * <p>A list of theme IDs that you want to apply overrides to. You can use <code>*</code> to override all themes in this asset bundle.</p>
   * @public
   */
  ThemeIds: string[] | undefined;

  /**
   * <p>A list of tags for the themes that you want to apply overrides to.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * <p>An object that contains a list of tags to be assigned to a list of VPC connection IDs.</p>
 * @public
 */
export interface AssetBundleImportJobVPCConnectionOverrideTags {
  /**
   * <p>A list of VPC connection IDs that you want to apply overrides to. You can use <code>*</code> to override all VPC connections in this asset bundle.</p>
   * @public
   */
  VPCConnectionIds: string[] | undefined;

  /**
   * <p>A list of tags for the VPC connections that you want to apply overrides to.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * <p>A structure that contains the override tag configuration that modify the tags that are assigned to specified resources before the resource is imported.</p>
 * @public
 */
export interface AssetBundleImportJobOverrideTags {
  /**
   * <p>A list of tag overrides for any <code>VPCConnection</code> resources that are present in the asset bundle that is imported.</p>
   * @public
   */
  VPCConnections?: AssetBundleImportJobVPCConnectionOverrideTags[] | undefined;

  /**
   * <p>A list of tag overrides for any <code>DataSource</code> resources that are present in the asset bundle that is imported.</p>
   * @public
   */
  DataSources?: AssetBundleImportJobDataSourceOverrideTags[] | undefined;

  /**
   * <p>A list of tag overrides for any <code>DataSet</code> resources that are present in the asset bundle that is imported.</p>
   * @public
   */
  DataSets?: AssetBundleImportJobDataSetOverrideTags[] | undefined;

  /**
   * <p>A list of tag overrides for any <code>Theme</code> resources that are present in the asset bundle that is imported.</p>
   * @public
   */
  Themes?: AssetBundleImportJobThemeOverrideTags[] | undefined;

  /**
   * <p>A list of tag overrides for any <code>Analysis</code> resources that are present in the asset bundle that is imported.</p>
   * @public
   */
  Analyses?: AssetBundleImportJobAnalysisOverrideTags[] | undefined;

  /**
   * <p>A list of tag overrides for any <code>Dashboard</code> resources that are present in the asset bundle that is imported.</p>
   * @public
   */
  Dashboards?: AssetBundleImportJobDashboardOverrideTags[] | undefined;

  /**
   * <p>A list of tag overrides for any <code>Folder</code> resources that are present in the asset bundle that is imported.</p>
   * @public
   */
  Folders?: AssetBundleImportJobFolderOverrideTags[] | undefined;
}

/**
 * <p>An optional parameter that overrides the validation strategy for all analyses and dashboards before the resource is imported.</p>
 * @public
 */
export interface AssetBundleImportJobOverrideValidationStrategy {
  /**
   * <p>A Boolean value that indicates whether to import all analyses and dashboards under strict or lenient mode.</p>
   * @public
   */
  StrictModeForAllResources?: boolean | undefined;
}

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
 * <p>A summary of the import job that includes details of the requested job's configuration and its current status.</p>
 * @public
 */
export interface AssetBundleImportJobSummary {
  /**
   * <p>The current status of the import job.</p>
   * @public
   */
  JobStatus?: AssetBundleImportJobStatus | undefined;

  /**
   * <p>The ARN of the import job.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The time that the import job was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The ID of the job. This ID is unique while the job is running. After the job is completed, you can reuse this ID for another job.</p>
   * @public
   */
  AssetBundleImportJobId?: string | undefined;

  /**
   * <p>The failure action for the import job.</p>
   * @public
   */
  FailureAction?: AssetBundleImportFailureAction | undefined;
}

/**
 * <p>Describes a warning that occurred during an Asset Bundle import job.</p>
 * @public
 */
export interface AssetBundleImportJobWarning {
  /**
   * <p>The ARN of the resource that the warning occurred for.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>A description of the warning that occurred during an Asset Bundle import job.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>The source of the asset bundle zip file that contains the data that you want to import. The file must be in <code>QUICKSIGHT_JSON</code> format.</p>
 * @public
 */
export interface AssetBundleImportSource {
  /**
   * <p>The bytes of the base64 encoded asset bundle import zip file. This file can't exceed 20 MB. If the size of the file that you want to upload is more than 20 MB, add the file to your Amazon S3 bucket and use <code>S3Uri</code> of the file for this operation.</p>
   *          <p>If you are calling the API operations from the Amazon Web Services SDK for Java, JavaScript, Python, or PHP, the SDK encodes base64 automatically to allow the direct setting of the zip file's bytes. If you are using an SDK for a different language or receiving related errors, try to base64 encode your data.</p>
   * @public
   */
  Body?: Uint8Array | undefined;

  /**
   * <p>The Amazon S3 URI for an asset bundle import file that exists in an Amazon S3 bucket that the caller has read access to. The file must be a zip format file and can't exceed 1 GB.</p>
   * @public
   */
  S3Uri?: string | undefined;
}

/**
 * <p>A description of the import source that you provide at the start of an import job. This value is set to either <code>Body</code> or <code>S3Uri</code>, depending on how the <code>StartAssetBundleImportJobRequest</code> is configured.</p>
 * @public
 */
export interface AssetBundleImportSourceDescription {
  /**
   * <p>An HTTPS download URL for the provided asset bundle that you optionally provided at the start of the import job. This URL is valid for five minutes after issuance. Call <code>DescribeAssetBundleExportJob</code> again for a fresh URL if needed. The downloaded asset bundle is a <code>.qs</code> zip file.</p>
   * @public
   */
  Body?: string | undefined;

  /**
   * <p>The Amazon S3 URI that you provided at the start of the import job.</p>
   * @public
   */
  S3Uri?: string | undefined;
}

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
  QBUSINESS: "QBUSINESS",
  REDSHIFT: "REDSHIFT",
} as const;

/**
 * @public
 */
export type ServiceType = (typeof ServiceType)[keyof typeof ServiceType];

/**
 * <p>The authorized targets that are associated with a service.</p>
 * @public
 */
export interface AuthorizedTargetsByService {
  /**
   * <p>The name of the Amazon Web Services service.</p>
   * @public
   */
  Service?: ServiceType | undefined;

  /**
   * <p>Aist of authorized targets that are represented by IAM Identity Center application ARNs.</p>
   * @public
   */
  AuthorizedTargets?: string[] | undefined;
}

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
 * <p>The definition for the <code>ContributionAnalysisFactor</code>.</p>
 * @public
 */
export interface ContributionAnalysisFactor {
  /**
   * <p>The field name of the <code>ContributionAnalysisFactor</code>.</p>
   * @public
   */
  FieldName?: string | undefined;
}

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
 * <p>The definition for the identifier.</p>
 * @public
 */
export interface Identifier {
  /**
   * <p>The identity of the identifier.</p>
   * @public
   */
  Identity: string | undefined;
}

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
   * <p>The ID of the Amazon QuickSight brand.</p>
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
   * <p>The ID of the Amazon QuickSight brand.</p>
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
export const PluginVisualFieldWellFilterSensitiveLog = (obj: PluginVisualFieldWell): any => ({
  ...obj,
  ...(obj.Measures && { Measures: obj.Measures.map((item) => MeasureFieldFilterSensitiveLog(item)) }),
  ...(obj.Unaggregated && { Unaggregated: obj.Unaggregated.map((item) => UnaggregatedFieldFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const PluginVisualConfigurationFilterSensitiveLog = (obj: PluginVisualConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PluginVisualFilterSensitiveLog = (obj: PluginVisual): any => ({
  ...obj,
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

/**
 * @internal
 */
export const TreeMapConfigurationFilterSensitiveLog = (obj: TreeMapConfiguration): any => ({
  ...obj,
  ...(obj.DataLabels && { DataLabels: DataLabelOptionsFilterSensitiveLog(obj.DataLabels) }),
});

/**
 * @internal
 */
export const TreeMapVisualFilterSensitiveLog = (obj: TreeMapVisual): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WaterfallChartAggregatedFieldWellsFilterSensitiveLog = (obj: WaterfallChartAggregatedFieldWells): any => ({
  ...obj,
  ...(obj.Values && { Values: obj.Values.map((item) => MeasureFieldFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const WaterfallChartFieldWellsFilterSensitiveLog = (obj: WaterfallChartFieldWells): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WaterfallChartConfigurationFilterSensitiveLog = (obj: WaterfallChartConfiguration): any => ({
  ...obj,
  ...(obj.DataLabels && { DataLabels: DataLabelOptionsFilterSensitiveLog(obj.DataLabels) }),
  ...(obj.VisualPalette && { VisualPalette: VisualPaletteFilterSensitiveLog(obj.VisualPalette) }),
});

/**
 * @internal
 */
export const WaterfallVisualFilterSensitiveLog = (obj: WaterfallVisual): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WordCloudAggregatedFieldWellsFilterSensitiveLog = (obj: WordCloudAggregatedFieldWells): any => ({
  ...obj,
  ...(obj.Size && { Size: obj.Size.map((item) => MeasureFieldFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const WordCloudFieldWellsFilterSensitiveLog = (obj: WordCloudFieldWells): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WordCloudChartConfigurationFilterSensitiveLog = (obj: WordCloudChartConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WordCloudVisualFilterSensitiveLog = (obj: WordCloudVisual): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VisualFilterSensitiveLog = (obj: Visual): any => ({
  ...obj,
  ...(obj.KPIVisual && { KPIVisual: KPIVisualFilterSensitiveLog(obj.KPIVisual) }),
  ...(obj.GaugeChartVisual && { GaugeChartVisual: GaugeChartVisualFilterSensitiveLog(obj.GaugeChartVisual) }),
  ...(obj.LayerMapVisual && { LayerMapVisual: LayerMapVisualFilterSensitiveLog(obj.LayerMapVisual) }),
  ...(obj.ScatterPlotVisual && { ScatterPlotVisual: ScatterPlotVisualFilterSensitiveLog(obj.ScatterPlotVisual) }),
  ...(obj.HistogramVisual && { HistogramVisual: HistogramVisualFilterSensitiveLog(obj.HistogramVisual) }),
  ...(obj.InsightVisual && { InsightVisual: InsightVisualFilterSensitiveLog(obj.InsightVisual) }),
});

/**
 * @internal
 */
export const SheetDefinitionFilterSensitiveLog = (obj: SheetDefinition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AnalysisDefinitionFilterSensitiveLog = (obj: AnalysisDefinition): any => ({
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
export const SnapshotJobS3ResultFilterSensitiveLog = (obj: SnapshotJobS3Result): any => ({
  ...obj,
  ...(obj.S3Uri && { S3Uri: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SnapshotJobResultFileGroupFilterSensitiveLog = (obj: SnapshotJobResultFileGroup): any => ({
  ...obj,
  ...(obj.S3Results && { S3Results: obj.S3Results.map((item) => SnapshotJobS3ResultFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const AnonymousUserSnapshotJobResultFilterSensitiveLog = (obj: AnonymousUserSnapshotJobResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssetBundleImportJobDataSourceCredentialPairFilterSensitiveLog = (
  obj: AssetBundleImportJobDataSourceCredentialPair
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssetBundleImportJobDataSourceCredentialsFilterSensitiveLog = (
  obj: AssetBundleImportJobDataSourceCredentials
): any => ({
  ...obj,
  ...(obj.CredentialPair && { CredentialPair: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AssetBundleImportJobDataSourceOverrideParametersFilterSensitiveLog = (
  obj: AssetBundleImportJobDataSourceOverrideParameters
): any => ({
  ...obj,
  ...(obj.DataSourceParameters && { DataSourceParameters: obj.DataSourceParameters }),
  ...(obj.Credentials && { Credentials: AssetBundleImportJobDataSourceCredentialsFilterSensitiveLog(obj.Credentials) }),
});

/**
 * @internal
 */
export const AssetBundleImportJobOverrideParametersFilterSensitiveLog = (
  obj: AssetBundleImportJobOverrideParameters
): any => ({
  ...obj,
  ...(obj.DataSources && {
    DataSources: obj.DataSources.map((item) =>
      AssetBundleImportJobDataSourceOverrideParametersFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const AssetBundleImportSourceFilterSensitiveLog = (obj: AssetBundleImportSource): any => ({
  ...obj,
  ...(obj.Body && { Body: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AssetBundleImportSourceDescriptionFilterSensitiveLog = (obj: AssetBundleImportSourceDescription): any => ({
  ...obj,
  ...(obj.Body && { Body: SENSITIVE_STRING }),
});

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
