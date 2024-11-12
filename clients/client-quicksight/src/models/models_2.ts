// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  AccountCustomization,
  AdHocFilteringOption,
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
  DashboardBehavior,
  DataLabelOptions,
  DataLabelOptionsFilterSensitiveLog,
  DataSetIdentifierDeclaration,
  DimensionField,
  Edition,
  FilterControl,
  FilterGroup,
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
  SheetTextBox,
  TimeGranularity,
  TopicTimeGranularity,
  VisualCustomAction,
  VisualInteractionOptions,
  VisualMenuOption,
} from "./models_0";

import {
  BarChartVisual,
  BoxPlotVisual,
  ColorScale,
  ColumnHierarchy,
  ComboChartVisual,
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
  LineChartVisual,
  PieChartVisual,
  PivotTableVisual,
  RadarChartVisual,
  SankeyDiagramVisual,
  ScatterPlotVisual,
  ScatterPlotVisualFilterSensitiveLog,
  TableVisual,
  TooltipOptions,
  TreeMapFieldWells,
  TreeMapSortConfiguration,
  VisualPalette,
  VisualPaletteFilterSensitiveLog,
  VisualSubtitleLabelOptions,
  VisualTitleLabelOptions,
} from "./models_1";

import { QuickSightServiceException as __BaseException } from "./QuickSightServiceException";

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
   * <p>The bytes of the base64 encoded asset bundle import zip file. This file can't exceed 20 MB.</p>
   *          <p>If you are calling the API operations from the Amazon Web Services SDK for Java, JavaScript, Python, or
   *          PHP, the SDK encodes base64 automatically to allow the direct setting of the zip file's bytes. If you are using
   *          an SDK for a different language or receiving related errors, try to base64 encode your data.</p>
   * @public
   */
  Body?: Uint8Array | undefined;

  /**
   * <p>The Amazon S3 URI for an asset bundle import file that exists in an Amazon S3 bucket that the caller
   *          has read access to. The file must be a zip format file and can't exceed 20 MB.</p>
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
   *             of a calculated column matches that of an existing calculated column, Amazon QuickSight
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
   *             format supported by Amazon QuickSight to denote the source data format.</p>
   * @public
   */
  Format?: string | undefined;
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
 * <p>Groupings of columns that work together in certain Amazon QuickSight features. This is
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
   * <p>An array of Amazon Resource Names (ARNs) for Amazon QuickSight users or groups.</p>
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
   * <p>The ID for the Amazon Web Services account that you want to customize Amazon QuickSight for.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The Amazon QuickSight namespace that you want to add customizations to.</p>
   * @public
   */
  Namespace?: string | undefined;

  /**
   * <p>The Amazon QuickSight customizations you're adding in the current Amazon Web Services Region. You can add
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
   * <p>The ID for the Amazon Web Services account that you want to customize Amazon QuickSight for.</p>
   * @public
   */
  AwsAccountId?: string | undefined;

  /**
   * <p>The namespace associated with the customization you're creating. </p>
   * @public
   */
  Namespace?: string | undefined;

  /**
   * <p>The Amazon QuickSight customizations you're adding in the current Amazon Web Services Region. </p>
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
   * <p>The edition of Amazon QuickSight that you want your account to have. Currently, you can
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
   * <p>The method that you want to use to authenticate your Amazon QuickSight account.</p>
   *          <p>If you choose <code>ACTIVE_DIRECTORY</code>, provide an <code>ActiveDirectoryName</code>
   *             and an <code>AdminGroup</code> associated with your Active Directory.</p>
   *          <p>If you choose <code>IAM_IDENTITY_CENTER</code>, provide an <code>AdminGroup</code> associated with your IAM Identity Center account.</p>
   * @public
   */
  AuthenticationMethod: AuthenticationMethodOption | undefined;

  /**
   * <p>The Amazon Web Services account ID of the account that you're using to create your Amazon QuickSight account.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The name of your Amazon QuickSight account. This name is unique over all of Amazon Web Services, and it appears only when users sign in. You can't change
   *                 <code>AccountName</code> value after the Amazon QuickSight account is
   *             created.</p>
   * @public
   */
  AccountName: string | undefined;

  /**
   * <p>The email address that you want Amazon QuickSight to send notifications to regarding your Amazon QuickSight account or Amazon QuickSight subscription.</p>
   * @public
   */
  NotificationEmail: string | undefined;

  /**
   * <p>The name of your Active Directory. This field is required if <code>ACTIVE_DIRECTORY</code> is the selected authentication method of the new Amazon QuickSight account.</p>
   * @public
   */
  ActiveDirectoryName?: string | undefined;

  /**
   * <p>The realm of the Active Directory that is associated with your Amazon QuickSight account. This field is required if <code>ACTIVE_DIRECTORY</code> is the selected authentication method of the new Amazon QuickSight account.</p>
   * @public
   */
  Realm?: string | undefined;

  /**
   * <p>The ID of the Active Directory that is associated with your Amazon QuickSight account.</p>
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * <p>The admin group associated with your Active Directory or IAM Identity Center account. Either this field or the <code>AdminProGroup</code> field is required if <code>ACTIVE_DIRECTORY</code> or <code>IAM_IDENTITY_CENTER</code> is the selected authentication method of the new Amazon QuickSight account.</p>
   *          <p>For more information about using IAM Identity Center in Amazon QuickSight, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/sec-identity-management-identity-center.html">Using IAM Identity Center with Amazon QuickSight Enterprise Edition</a> in the Amazon QuickSight User Guide. For more information about using Active Directory in Amazon QuickSight, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/aws-directory-service.html">Using Active Directory with Amazon QuickSight Enterprise Edition</a> in the Amazon QuickSight User Guide.</p>
   * @public
   */
  AdminGroup?: string[] | undefined;

  /**
   * <p>The author group associated with your Active Directory or IAM Identity Center account.</p>
   *          <p>For more information about using IAM Identity Center in Amazon QuickSight, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/sec-identity-management-identity-center.html">Using IAM Identity Center with Amazon QuickSight Enterprise Edition</a> in the Amazon QuickSight User Guide. For more information about using Active Directory in Amazon QuickSight, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/aws-directory-service.html">Using Active Directory with Amazon QuickSight Enterprise Edition</a> in the Amazon QuickSight User Guide.</p>
   * @public
   */
  AuthorGroup?: string[] | undefined;

  /**
   * <p>The reader group associated with your Active Directory or IAM Identity Center account.</p>
   *          <p>For more information about using IAM Identity Center in Amazon QuickSight, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/sec-identity-management-identity-center.html">Using IAM Identity Center with Amazon QuickSight Enterprise Edition</a> in the Amazon QuickSight User Guide. For more information about using Active Directory in Amazon QuickSight, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/aws-directory-service.html">Using Active Directory with Amazon QuickSight Enterprise Edition</a> in the Amazon QuickSight User Guide.</p>
   * @public
   */
  ReaderGroup?: string[] | undefined;

  /**
   * <p>The admin pro group associated with your Active Directory or IAM Identity Center account. Either this field or the <code>AdminGroup</code> field is required if <code>ACTIVE_DIRECTORY</code> or <code>IAM_IDENTITY_CENTER</code> is the selected authentication method of the new Amazon QuickSight account.</p>
   *          <p>For more information about using IAM Identity Center in Amazon QuickSight, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/sec-identity-management-identity-center.html">Using IAM Identity Center with Amazon QuickSight Enterprise Edition</a> in the Amazon QuickSight User Guide. For more information about using Active Directory in Amazon QuickSight, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/aws-directory-service.html">Using Active Directory with Amazon QuickSight Enterprise Edition</a> in the Amazon QuickSight User Guide.</p>
   * @public
   */
  AdminProGroup?: string[] | undefined;

  /**
   * <p>The author pro group associated with your Active Directory or IAM Identity Center account.</p>
   *          <p>For more information about using IAM Identity Center in Amazon QuickSight, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/sec-identity-management-identity-center.html">Using IAM Identity Center with Amazon QuickSight Enterprise Edition</a> in the Amazon QuickSight User Guide. For more information about using Active Directory in Amazon QuickSight, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/aws-directory-service.html">Using Active Directory with Amazon QuickSight Enterprise Edition</a> in the Amazon QuickSight User Guide.</p>
   * @public
   */
  AuthorProGroup?: string[] | undefined;

  /**
   * <p>The reader pro group associated with your Active Directory or IAM Identity Center account.</p>
   *          <p>For more information about using IAM Identity Center in Amazon QuickSight, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/sec-identity-management-identity-center.html">Using IAM Identity Center with Amazon QuickSight Enterprise Edition</a> in the Amazon QuickSight User Guide. For more information about using Active Directory in Amazon QuickSight, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/aws-directory-service.html">Using Active Directory with Amazon QuickSight Enterprise Edition</a> in the Amazon QuickSight User Guide.</p>
   * @public
   */
  ReaderProGroup?: string[] | undefined;

  /**
   * <p>The first name of the author of the Amazon QuickSight account to use for future
   *             communications. This field is required if <code>ENTERPPRISE_AND_Q</code> is the selected
   *             edition of the new Amazon QuickSight account.</p>
   * @public
   */
  FirstName?: string | undefined;

  /**
   * <p>The last name of the author of the Amazon QuickSight account to use for future
   *             communications. This field is required if <code>ENTERPPRISE_AND_Q</code> is the selected
   *             edition of the new Amazon QuickSight account.</p>
   * @public
   */
  LastName?: string | undefined;

  /**
   * <p>The email address of the author of the Amazon QuickSight account to use for future
   *             communications. This field is required if <code>ENTERPPRISE_AND_Q</code> is the selected
   *             edition of the new Amazon QuickSight account.</p>
   * @public
   */
  EmailAddress?: string | undefined;

  /**
   * <p>A 10-digit phone number for the author of the Amazon QuickSight account to use for
   *             future communications. This field is required if <code>ENTERPPRISE_AND_Q</code> is the
   *             selected edition of the new Amazon QuickSight account.</p>
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
   * <p>A Boolean that is <code>TRUE</code> if the Amazon QuickSight uses IAM as an
   *             authentication method.</p>
   * @public
   */
  IAMUser?: boolean | undefined;

  /**
   * <p>The user login name for your Amazon QuickSight account.</p>
   * @public
   */
  userLoginName?: string | undefined;

  /**
   * <p>The name of your Amazon QuickSight account.</p>
   * @public
   */
  accountName?: string | undefined;

  /**
   * <p>The type of Active Directory that is being used to authenticate the Amazon QuickSight
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
   * <p>A <code>SignupResponse</code> object that returns information about a newly created Amazon QuickSight account.</p>
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
 * <p>A list of Amazon QuickSight parameters and the list's override values.</p>
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
 * <p>Permission for the resource.</p>
 * @public
 */
export interface ResourcePermission {
  /**
   * <p>The Amazon Resource Name (ARN) of the principal. This can be one of the
   *             following:</p>
   *          <ul>
   *             <li>
   *                <p>The ARN of an Amazon QuickSight user or group associated with a data source or dataset. (This is common.)</p>
   *             </li>
   *             <li>
   *                <p>The ARN of an Amazon QuickSight user, group, or namespace associated with an analysis, dashboard, template, or theme. (This is common.)</p>
   *             </li>
   *             <li>
   *                <p>The ARN of an Amazon Web Services account root: This is an IAM ARN rather than a QuickSight
   *                     ARN. Use this option only to share resources (templates) across Amazon Web Services accounts.
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
   *             analysis in the Amazon QuickSight console. </p>
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
   *             in the Amazon QuickSight console, make sure that you have access to it.</p>
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
   * <p>When you create the analysis, Amazon QuickSight adds the analysis to these folders.</p>
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
 * <p>This error indicates that you are calling an operation on an Amazon QuickSight
 * 			subscription where the edition doesn't include support for that operation. Amazon
 * 			Amazon QuickSight currently has Standard Edition and Enterprise Edition. Not every operation and
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
 * <p>A transform operation that creates calculated columns. Columns created in one such
 *             operation form a lexical closure.</p>
 * @public
 */
export interface CreateColumnsOperation {
  /**
   * <p>Calculated columns to create.</p>
   * @public
   */
  Columns: CalculatedColumn[] | undefined;
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
   * @deprecated
   *
   * <p>The visual publish options of a visual in a dashboard.</p>
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
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/parameters-in-quicksight.html">Parameters in Amazon QuickSight</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   * @public
   */
  ParameterDeclarations?: ParameterDeclaration[] | undefined;

  /**
   * <p>The filter definitions for a dashboard.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/adding-a-filter.html">Filtering Data in Amazon QuickSight</a> in the <i>Amazon QuickSight User Guide</i>.</p>
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
}

/**
 * <p>A structure that contains the configuration of a shareable link to the dashboard.</p>
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
   * <p>The ID of the Amazon Web Services account where you want to create the dashboard.</p>
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
   *             for granting permissions by providing a list of IAM action information for each
   *             principal ARN. </p>
   *          <p>To specify no permissions, omit the permissions list.</p>
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;

  /**
   * <p>The entity that you are using as a source when you create the dashboard. In
   *             <code>SourceEntity</code>, you specify the type of object you're using as source. You
   *             can only create a dashboard from a template, so you use a <code>SourceTemplate</code>
   *             entity. If you need to create a dashboard from an analysis, first convert the analysis
   *             to a template by using the <code>
   *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateTemplate.html">CreateTemplate</a>
   *             </code>
   *             API operation. For
   *             <code>SourceTemplate</code>, specify the Amazon Resource Name (ARN) of the source
   *             template. The <code>SourceTemplate</code>ARN can contain any Amazon Web Services account and any
   *             Amazon QuickSight-supported Amazon Web Services Region. </p>
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
   *                     set to <code>DISABLED</code>, Amazon QuickSight disables the left filter pane on the
   *                     published dashboard, which can be used for ad hoc (one-time) filtering. This
   *                     option is <code>ENABLED</code> by default. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AvailabilityStatus</code> for <code>ExportToCSVOption</code> - This
   *                     status can be either <code>ENABLED</code> or <code>DISABLED</code>. The visual
   *                     option to export data to .CSV format isn't enabled when this is set to
   *                     <code>DISABLED</code>. This option is <code>ENABLED</code> by default. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VisibilityState</code> for <code>SheetControlsOption</code> - This
   *                     visibility state can be either <code>COLLAPSED</code> or <code>EXPANDED</code>.
   *                     This option is <code>COLLAPSED</code> by default. </p>
   *             </li>
   *          </ul>
   * @public
   */
  DashboardPublishOptions?: DashboardPublishOptions | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the theme that is being used for this dashboard. If
   *             you add a value for this field, it overrides the value that is used in the source
   *             entity. The theme ARN must exist in the same Amazon Web Services account where you create the
   *             dashboard.</p>
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
   * <p>The option to relax the validation needed to create a dashboard with definition objects. This option skips the validation step for specific errors.</p>
   * @public
   */
  ValidationStrategy?: ValidationStrategy | undefined;

  /**
   * <p>When you create the dashboard, Amazon QuickSight adds the dashboard to these folders.</p>
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
   * <p>An option that controls whether a child dataset that's stored in QuickSight can use this dataset as a source.</p>
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
 * <p>A transform operation that filters rows based on a condition.</p>
 * @public
 */
export interface FilterOperation {
  /**
   * <p>An expression that must evaluate to a Boolean value. Rows for which the expression
   *             evaluates to true are kept in the dataset.</p>
   * @public
   */
  ConditionExpression: string | undefined;
}

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
 * <p>A transform operation that projects columns. Operations that come after a projection
 *             can only refer to projected columns.</p>
 * @public
 */
export interface ProjectOperation {
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
   *             a join key. This is used by Amazon QuickSight to optimize query performance.</p>
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
 * <p>A view of a data source that contains information about the shape of the data in the
 *             underlying source. This is a variant type structure. For this structure to be valid,
 *             only one of the attributes can be non-null.</p>
 * @public
 */
export type PhysicalTable =
  | PhysicalTable.CustomSqlMember
  | PhysicalTable.RelationalTableMember
  | PhysicalTable.S3SourceMember
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
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    RelationalTable?: never;
    CustomSql?: never;
    S3Source?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    RelationalTable: (value: RelationalTable) => T;
    CustomSql: (value: CustomSql) => T;
    S3Source: (value: S3Source) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: PhysicalTable, visitor: Visitor<T>): T => {
    if (value.RelationalTable !== undefined) return visitor.RelationalTable(value.RelationalTable);
    if (value.CustomSql !== undefined) return visitor.CustomSql(value.CustomSql);
    if (value.S3Source !== undefined) return visitor.S3Source(value.S3Source);
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
export const FilterOperationFilterSensitiveLog = (obj: FilterOperation): any => ({
  ...obj,
  ...(obj.ConditionExpression && { ConditionExpression: SENSITIVE_STRING }),
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
